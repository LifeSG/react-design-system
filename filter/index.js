import e,{jsx as t,jsxs as n,Fragment as r}from"react/jsx-runtime";import*as o from"react";import i,{useState as a,useRef as s,useEffect as l,cloneElement as c,isValidElement as u,createRef as d,PureComponent as h,useLayoutEffect as p,forwardRef as f,useCallback as m,useContext as g,useMemo as y}from"react";import v,{findDOMNode as b,unstable_batchedUpdates as w}from"react-dom";import C,{css as _,keyframes as x}from"styled-components";var $,S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},O={};Object.defineProperty(O,"__esModule",{value:!0});var k=e;const j=e=>k.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:k.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});j.displayName="CrossIcon",$=O.CrossIcon=j;var F,P={exports:{}};F=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
  \***************************************************/(e,t,n)=>{var r,o=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,l){for(var c in e)if(a(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((s||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[c](t,c,s,n,null,o)}catch(e){u=e}if(!u||u instanceof Error||r((s||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in i)){i[u.message]=!0;var h=l?l():"";r("Failed "+n+" type: "+u.message+(null!=h?h:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/(e,t,n)=>{var r,o=n(/*! react-is */"./node_modules/react-is/index.js"),i=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",h={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(c),arrayOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new f("Invalid "+o+" `"+i+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,o,i+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:m((function(t,n,r,o,i){var a=t[n];return e(a)?null:new f("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,i){var a=e[t];return o.isValidElementType(a)?null:new f("Invalid "+r+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||d;return new f("Invalid "+o+" `"+i+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,t,n,r,o){return v(e[t])?null:new f("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=b(l);if("object"!==c)return new f("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var u in l)if(s(l,u)){var d=e(l,u,r,o,i+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,o,i){for(var a=t[n],s=0;s<e.length;s++)if(p(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new f("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+C(n)+" at index "+t+"."),c}return m((function(t,n,r,o,i){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,n,r,o,i,a);if(null==u)return null;u.data&&s(u.data,"expectedType")&&l.push(u.data.expectedType)}return new f("Invalid "+o+" `"+i+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,o,i){var s=t[n],l=b(s);if("object"!==l)return new f("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return y(r,o,i,c,w(u));var d=u(s,c,r,o,i+"."+c,a);if(d)return d}return null}))},exact:function(e){return m((function(t,n,r,o,l){var c=t[n],u=b(c);if("object"!==u)return new f("Invalid "+o+" `"+l+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=i({},t[n],e);for(var h in d){var p=e[h];if(s(e,h)&&"function"!=typeof p)return y(r,o,l,h,w(p));if(!p)return new f("Invalid "+o+" `"+l+"` key `"+h+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=p(c,h,r,o,l+"."+h,a);if(m)return m}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},o=0;function i(i,s,l,c,u,h,p){if(c=c||d,h=h||l,p!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!n[g]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,o++)}}return null==s[l]?i?null===s[l]?new f("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new f("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,h)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function g(e){return m((function(t,n,r,o,i,a){var s=t[n];return b(s)!==e?new f("Invalid "+o+" `"+i+"` of type `"+w(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,o){return new f((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!v(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function C(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case c:case u:case o:case a:case i:case h:return p;default:var g=p&&p.$$typeof;switch(g){case l:case d:case m:case f:case s:return g;default:return t}}case r:return t}}}var C=c,_=u,x=l,$=s,S=n,O=d,k=o,j=m,F=f,P=r,H=a,I=i,M=h,E=!1;function B(e){return w(e)===u}t.AsyncMode=C,t.ConcurrentMode=_,t.ContextConsumer=x,t.ContextProvider=$,t.Element=S,t.ForwardRef=O,t.Fragment=k,t.Lazy=j,t.Memo=F,t.Portal=P,t.Profiler=H,t.StrictMode=I,t.Suspense=M,t.isAsyncMode=function(e){return E||(E=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),B(e)||w(e)===c},t.isConcurrentMode=B,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===f},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===h||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===f||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
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
  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},u=o(c,["type"]),d=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},u),h=r(r({},l),d);t.default={all:h,types:l,matchers:c,features:d}},"./src/toQuery.ts":
/*!************************!*\
  !*** ./src/toQuery.ts ***!
  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,o.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
  !*** ./src/useMediaQuery.ts ***!
  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(/*! react */"react"),i=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},d=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,o.useState)(t),r=n[0],i=n[1];return(0,o.useEffect)((function(){var e=t();r!==e&&i(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,o.useContext)(c.default),n=function(){return u(e)||u(t)},r=(0,o.useState)(n),i=r[0],a=r[1];return(0,o.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=h(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var n=function(){return(0,i.default)(e,t||{},!!t)},r=(0,o.useState)(n),a=r[0],s=r[1],l=d();return(0,o.useEffect)((function(){if(l){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),p=function(e){var t=(0,o.useState)(e.matches),n=t[0],r=t[1];return(0,o.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(l),f=d();return(0,o.useEffect)((function(){f&&n&&n(p)}),[p]),(0,o.useEffect)((function(){return function(){l&&l.dispose()}}),[]),p}},react:
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})(),P.exports=F(i);const H=C.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return _`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,I=C.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=_`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=_`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=_`
                transition: none;
            `),t}}
`,M=({show:e=!1,rootId:n,onOverlayClick:r,children:o,backgroundOpacity:c,backgroundBlur:u=!0,disableTransition:d=!1,enableOverlayClick:h=!1,zIndex:p,id:f})=>{const[m,g]=a(null),[y,b]=a(),w=s(),C=s(null),_=o&&i.cloneElement(o,{ref:C}),x=f?`lifesg-ds-overlay-root-${f}`:"lifesg-ds-overlay-root";l((()=>{if(e){const e=O();if($(e),!e){const e=setTimeout((()=>{j("add")}),200);return()=>clearTimeout(e)}}else if(!w.current){const e=setTimeout((()=>{j("remove")}),200);return()=>clearTimeout(e)}}),[e]),l((()=>{g(S());const e=O();return $(e),e||k(),()=>{j("remove")}}),[]);const $=e=>{w.current=e,b(e)},S=()=>document&&n?document.getElementById(n):document?document.body:null,O=()=>document.body.classList.contains(B),k=()=>{if(!document.getElementById(E)){const e=document.createElement("style");e.id=E;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${B} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${B}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},j=e=>{const t=document.body.classList.contains(B);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(B):document.body.classList.add(B)},F=e=>{const t=C.current?.firstChild;t&&t.contains(e.target)||r&&h&&(e.preventDefault(),r())};return m?v.createPortal(t(H,{id:x,"data-testid":x,$show:e,zIndex:p,$stacked:y,children:o&&t(I,{"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:c||(y?.5:.8),$backgroundBlur:u,$disableTransition:d,$enableOverlayClick:h,onClick:F,children:_})}),m):null},E="lifesg-ds-overlay-stylesheet",B="lifesg-ds-overlay-open",D={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var T=function(e,t){return T=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},T(e,t)};var A=function(){return A=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},A.apply(this,arguments)};var z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var R=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},N="object"==typeof z&&z&&z.Object===Object&&z,L="object"==typeof self&&self&&self.Object===Object&&self,V=N||L||Function("return this")(),W=V,q=function(){return W.Date.now()},Q=/\s/;var U=function(e){for(var t=e.length;t--&&Q.test(e.charAt(t)););return t},Z=/^\s+/;var G=function(e){return e?e.slice(0,U(e)+1).replace(Z,""):e},X=V.Symbol,Y=X,J=Object.prototype,K=J.hasOwnProperty,ee=J.toString,te=Y?Y.toStringTag:void 0;var ne=function(e){var t=K.call(e,te),n=e[te];try{e[te]=void 0;var r=!0}catch(e){}var o=ee.call(e);return r&&(t?e[te]=n:delete e[te]),o},re=Object.prototype.toString;var oe=ne,ie=function(e){return re.call(e)},ae=X?X.toStringTag:void 0;var se=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ae&&ae in Object(e)?oe(e):ie(e)},le=function(e){return null!=e&&"object"==typeof e};var ce=G,ue=R,de=function(e){return"symbol"==typeof e||le(e)&&"[object Symbol]"==se(e)},he=/^[-+]0x[0-9a-f]+$/i,pe=/^0b[01]+$/i,fe=/^0o[0-7]+$/i,me=parseInt;var ge=R,ye=q,ve=function(e){if("number"==typeof e)return e;if(de(e))return NaN;if(ue(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ue(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ce(e);var n=pe.test(e);return n||fe.test(e)?me(e.slice(2),n?2:8):he.test(e)?NaN:+e},be=Math.max,we=Math.min;var Ce=function(e,t,n){var r,o,i,a,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function f(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=i}function m(){var e=ye();if(f(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-l);return d?we(n,i-(e-c)):n}(e))}function g(e){return s=void 0,h&&r?p(e):(r=o=void 0,a)}function y(){var e=ye(),n=f(e);if(r=arguments,o=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),u?p(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(m,t),p(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=ve(t)||0,ge(n)&&(u=!!n.leading,i=(d="maxWait"in n)?be(ve(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=o=s=void 0},y.flush=function(){return void 0===s?a:g(ye())},y},_e=Ce,xe=R;var $e=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return xe(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),_e(e,t,{leading:r,maxWait:t,trailing:o})},Se=function(e,t,n,r){switch(t){case"debounce":return Ce(e,n,r);case"throttle":return $e(e,n,r);default:return e}},Oe=function(e){return"function"==typeof e},ke=function(){return"undefined"==typeof window},je=function(e){return e instanceof Element||e instanceof HTMLDocument},Fe=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&Oe(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!ke()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(ke())return null;if(t)return document.querySelector(t);if(r&&je(r))return r;if(n.targetRef&&je(n.targetRef.current))return n.targetRef.current;var o=b(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=Fe(s,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!ke()&&l({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return Oe(t)?"renderProp":Oe(r)?"childFunction":u(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=d(),n.observableElement=null,ke()||(n.resizeHandler=Se(n.createResizeHandler,o,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}T(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){ke()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,r=t.children,i=t.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=r)(l);case"child":if((e=r).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(l,["targetRef"]);return c(e,u)}return c(e,l);case"childArray":return(e=r).map((function(e){return!!e&&c(e,l)}));default:return o.createElement(a,null)}}}(h);var Pe=ke()?l:p;function He(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,p=e.targetRef,f=e.observerOptions,m=e.onResize,g=s(n),y=s(null),v=null!=p?p:y,b=s(),w=a({width:void 0,height:void 0}),C=w[0],_=w[1];return Pe((function(){if(!ke()){var e=Fe(m,_,u,h);b.current=Se((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!g.current&&!ke()&&e({width:r,height:o}),g.current=!1}))}),r,i,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,f),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,i,l,u,h,m,f,v.current]),A({ref:v},C)}const Ie=i.createContext({mode:"default"});var Me=Array.isArray,Ee="object"==typeof S&&S&&S.Object===Object&&S,Be="object"==typeof self&&self&&self.Object===Object&&self,De=Ee||Be||Function("return this")(),Te=De.Symbol,Ae=Te,ze=Object.prototype,Re=ze.hasOwnProperty,Ne=ze.toString,Le=Ae?Ae.toStringTag:void 0;var Ve=function(e){var t=Re.call(e,Le),n=e[Le];try{e[Le]=void 0;var r=!0}catch(e){}var o=Ne.call(e);return r&&(t?e[Le]=n:delete e[Le]),o},We=Object.prototype.toString;var qe=Ve,Qe=function(e){return We.call(e)},Ue=Te?Te.toStringTag:void 0;var Ze=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ue&&Ue in Object(e)?qe(e):Qe(e)};var Ge=Ze,Xe=function(e){return null!=e&&"object"==typeof e};var Ye=function(e){return"symbol"==typeof e||Xe(e)&&"[object Symbol]"==Ge(e)},Je=Me,Ke=Ye,et=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,tt=/^\w*$/;var nt=function(e,t){if(Je(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Ke(e))||(tt.test(e)||!et.test(e)||null!=t&&e in Object(t))};var rt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ot=Ze,it=rt;var at,st=function(e){if(!it(e))return!1;var t=ot(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},lt=De["__core-js_shared__"],ct=(at=/[^.]+$/.exec(lt&&lt.keys&&lt.keys.IE_PROTO||""))?"Symbol(src)_1."+at:"";var ut=function(e){return!!ct&&ct in e},dt=Function.prototype.toString;var ht=st,pt=ut,ft=rt,mt=function(e){if(null!=e){try{return dt.call(e)}catch(e){}try{return e+""}catch(e){}}return""},gt=/^\[object .+?Constructor\]$/,yt=Function.prototype,vt=Object.prototype,bt=yt.toString,wt=vt.hasOwnProperty,Ct=RegExp("^"+bt.call(wt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var _t=function(e){return!(!ft(e)||pt(e))&&(ht(e)?Ct:gt).test(mt(e))},xt=function(e,t){return null==e?void 0:e[t]};var $t=function(e,t){var n=xt(e,t);return _t(n)?n:void 0},St=$t(Object,"create"),Ot=St;var kt=function(){this.__data__=Ot?Ot(null):{},this.size=0};var jt=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ft=St,Pt=Object.prototype.hasOwnProperty;var Ht=function(e){var t=this.__data__;if(Ft){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Pt.call(t,e)?t[e]:void 0},It=St,Mt=Object.prototype.hasOwnProperty;var Et=St;var Bt=kt,Dt=jt,Tt=Ht,At=function(e){var t=this.__data__;return It?void 0!==t[e]:Mt.call(t,e)},zt=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Et&&void 0===t?"__lodash_hash_undefined__":t,this};function Rt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Rt.prototype.clear=Bt,Rt.prototype.delete=Dt,Rt.prototype.get=Tt,Rt.prototype.has=At,Rt.prototype.set=zt;var Nt=Rt;var Lt=function(){this.__data__=[],this.size=0};var Vt=function(e,t){return e===t||e!=e&&t!=t};var Wt=function(e,t){for(var n=e.length;n--;)if(Vt(e[n][0],t))return n;return-1},qt=Wt,Qt=Array.prototype.splice;var Ut=Wt;var Zt=Wt;var Gt=Wt;var Xt=Lt,Yt=function(e){var t=this.__data__,n=qt(t,e);return!(n<0)&&(n==t.length-1?t.pop():Qt.call(t,n,1),--this.size,!0)},Jt=function(e){var t=this.__data__,n=Ut(t,e);return n<0?void 0:t[n][1]},Kt=function(e){return Zt(this.__data__,e)>-1},en=function(e,t){var n=this.__data__,r=Gt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function tn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tn.prototype.clear=Xt,tn.prototype.delete=Yt,tn.prototype.get=Jt,tn.prototype.has=Kt,tn.prototype.set=en;var nn=tn,rn=$t(De,"Map"),on=Nt,an=nn,sn=rn;var ln=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var cn=function(e,t){var n=e.__data__;return ln(t)?n["string"==typeof t?"string":"hash"]:n.map},un=cn;var dn=cn;var hn=cn;var pn=cn;var fn=function(){this.size=0,this.__data__={hash:new on,map:new(sn||an),string:new on}},mn=function(e){var t=un(this,e).delete(e);return this.size-=t?1:0,t},gn=function(e){return dn(this,e).get(e)},yn=function(e){return hn(this,e).has(e)},vn=function(e,t){var n=pn(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function bn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}bn.prototype.clear=fn,bn.prototype.delete=mn,bn.prototype.get=gn,bn.prototype.has=yn,bn.prototype.set=vn;var wn=bn;function Cn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Cn.Cache||wn),n}Cn.Cache=wn;var _n=Cn;var xn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$n=/\\(\\)?/g,Sn=function(e){var t=_n(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(xn,(function(e,n,r,o){t.push(r?o.replace($n,"$1"):n||e)})),t}));var On=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},kn=Me,jn=Ye,Fn=Te?Te.prototype:void 0,Pn=Fn?Fn.toString:void 0;var Hn=function e(t){if("string"==typeof t)return t;if(kn(t))return On(t,e)+"";if(jn(t))return Pn?Pn.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},In=Hn;var Mn=Me,En=nt,Bn=Sn,Dn=function(e){return null==e?"":In(e)};var Tn=Ye;var An=function(e,t){return Mn(e)?e:En(e,t)?[e]:Bn(Dn(e))},zn=function(e){if("string"==typeof e||Tn(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Rn=function(e,t){for(var n=0,r=(t=An(t,e)).length;null!=e&&n<r;)e=e[zn(t[n++])];return n&&n==r?e:void 0};var Nn=function(e,t,n){var r=null==e?void 0:Rn(e,t);return void 0===r?n:r};const Ln=(e,t,n)=>t?Nn(n,t)||Nn(e,t):n||e,Vn=(e,t)=>{const n=t||e.defaultValue;return Nn(e.collections,n)};var Wn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Wn||(Wn={}));const qn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Qn=e=>t=>{const n=t.theme,r=Vn(qn,n[Wn.colorScheme]);return n.options&&n.options.color?Ln(r,e,n.options.color):Ln(r,e)},Un={Brand:{1:Qn("Brand.1"),2:Qn("Brand.2"),3:Qn("Brand.3"),4:Qn("Brand.4"),5:Qn("Brand.5"),6:Qn("Brand.6")},Primary:Qn("Primary"),PrimaryDark:Qn("PrimaryDark"),Secondary:Qn("Secondary"),Accent:{Light:{1:Qn("Accent.Light.1"),2:Qn("Accent.Light.2"),3:Qn("Accent.Light.3"),4:Qn("Accent.Light.4"),5:Qn("Accent.Light.5"),6:Qn("Accent.Light.6")},Dark:{1:Qn("Accent.Dark.1"),2:Qn("Accent.Dark.2"),3:Qn("Accent.Dark.3")}},Neutral:{1:Qn("Neutral.1"),2:Qn("Neutral.2"),3:Qn("Neutral.3"),4:Qn("Neutral.4"),5:Qn("Neutral.5"),6:Qn("Neutral.6"),7:Qn("Neutral.7"),8:Qn("Neutral.8")},Validation:{Green:{Text:Qn("Validation.Green.Text"),Icon:Qn("Validation.Green.Icon"),Border:Qn("Validation.Green.Border"),Background:Qn("Validation.Green.Background")},Orange:{Text:Qn("Validation.Orange.Text"),Icon:Qn("Validation.Orange.Icon"),Border:Qn("Validation.Orange.Border"),Background:Qn("Validation.Orange.Background"),Badge:Qn("Validation.Orange.Badge")},Red:{Text:Qn("Validation.Red.Text"),Icon:Qn("Validation.Red.Icon"),Border:Qn("Validation.Red.Border"),Background:Qn("Validation.Red.Background")},Blue:{Text:Qn("Validation.Blue.Text"),Icon:Qn("Validation.Blue.Icon"),Border:Qn("Validation.Blue.Border"),Background:Qn("Validation.Blue.Background")}},Shadow:{Accent:Qn("Shadow.Accent"),Red:Qn("Shadow.Red"),Elevation:Qn("Shadow.Elevation")}},Zn=e=>Object.keys(D).reduce(((t,n)=>{const r=D[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Gn=Zn("max-width"),Xn=(Zn("min-width"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),Yn={collections:{base:{D1:{fontFamily:Xn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Xn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Xn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Xn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Xn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Xn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Xn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Xn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Xn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Xn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Xn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Xn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Xn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Xn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Jn=e=>t=>{const n=t.theme,r=Vn(Yn,n[Wn.textStyleScheme]);return n.options&&n.options.textStyle?Ln(r,e,n.options.textStyle):Ln(r,e)},Kn={D1:{fontFamily:Jn("D1.fontFamily"),fontSize:Jn("D1.fontSize"),fontWeight:Jn("D1.fontWeight"),lineHeight:Jn("D1.lineHeight"),letterSpacing:Jn("D1.letterSpacing")},D2:{fontFamily:Jn("D2.fontFamily"),fontSize:Jn("D2.fontSize"),fontWeight:Jn("D2.fontWeight"),lineHeight:Jn("D2.lineHeight"),letterSpacing:Jn("D2.letterSpacing")},D3:{fontFamily:Jn("D3.fontFamily"),fontSize:Jn("D3.fontSize"),fontWeight:Jn("D3.fontWeight"),lineHeight:Jn("D3.lineHeight"),letterSpacing:Jn("D3.letterSpacing")},D4:{fontFamily:Jn("D4.fontFamily"),fontSize:Jn("D4.fontSize"),fontWeight:Jn("D4.fontWeight"),lineHeight:Jn("D4.lineHeight"),letterSpacing:Jn("D4.letterSpacing")},DBody:{fontFamily:Jn("DBody.fontFamily"),fontSize:Jn("DBody.fontSize"),fontWeight:Jn("DBody.fontWeight"),lineHeight:Jn("DBody.lineHeight"),letterSpacing:Jn("DBody.letterSpacing")},H1:{fontFamily:Jn("H1.fontFamily"),fontSize:Jn("H1.fontSize"),fontWeight:Jn("H1.fontWeight"),lineHeight:Jn("H1.lineHeight"),letterSpacing:Jn("H1.letterSpacing")},H2:{fontFamily:Jn("H2.fontFamily"),fontSize:Jn("H2.fontSize"),fontWeight:Jn("H2.fontWeight"),lineHeight:Jn("H2.lineHeight"),letterSpacing:Jn("H2.letterSpacing")},H3:{fontFamily:Jn("H3.fontFamily"),fontSize:Jn("H3.fontSize"),fontWeight:Jn("H3.fontWeight"),lineHeight:Jn("H3.lineHeight"),letterSpacing:Jn("H3.letterSpacing")},H4:{fontFamily:Jn("H4.fontFamily"),fontSize:Jn("H4.fontSize"),fontWeight:Jn("H4.fontWeight"),lineHeight:Jn("H4.lineHeight"),letterSpacing:Jn("H4.letterSpacing")},H5:{fontFamily:Jn("H5.fontFamily"),fontSize:Jn("H5.fontSize"),fontWeight:Jn("H5.fontWeight"),lineHeight:Jn("H5.lineHeight"),letterSpacing:Jn("H5.letterSpacing")},H6:{fontFamily:Jn("H6.fontFamily"),fontSize:Jn("H6.fontSize"),fontWeight:Jn("H6.fontWeight"),lineHeight:Jn("H6.lineHeight"),letterSpacing:Jn("H6.letterSpacing")},Body:{fontFamily:Jn("Body.fontFamily"),fontSize:Jn("Body.fontSize"),fontWeight:Jn("Body.fontWeight"),lineHeight:Jn("Body.lineHeight"),letterSpacing:Jn("Body.letterSpacing")},BodySmall:{fontFamily:Jn("BodySmall.fontFamily"),fontSize:Jn("BodySmall.fontSize"),fontWeight:Jn("BodySmall.fontWeight"),lineHeight:Jn("BodySmall.lineHeight"),letterSpacing:Jn("BodySmall.letterSpacing")},XSmall:{fontFamily:Jn("XSmall.fontFamily"),fontSize:Jn("XSmall.fontSize"),fontWeight:Jn("XSmall.fontWeight"),lineHeight:Jn("XSmall.lineHeight"),letterSpacing:Jn("XSmall.letterSpacing")}},er=e=>{switch(e){case 700:case"bold":return Xn.Bold;case 600:case"semibold":return Xn.Semibold;case 300:case"light":return Xn.Light;case 400:case"regular":return Xn.Regular;default:return""}},tr=(e,t)=>n=>{const r=Kn[e].fontFamily(n),o=Kn[e].fontWeight(n);return Object.values(Xn).includes(r)?_`
                font-family: ${er(t)||er(o)||r};
                font-weight: normal !important;
            `:_`
            font-family: ${r};
            font-weight: ${(nr(t)||o)??"normal"};
        `},nr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},rr=(e,t,n=!1)=>r=>{const o=Kn[e],i=o.fontSize(r);return _`
            ${tr(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${_`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},or=(e=!1,t=!1)=>t?_`
            display: block;
        `:e?_`
            display: inline;
        `:_`
            display: block;
        `;var ir,ar={};Object.defineProperty(ar,"__esModule",{value:!0});var sr=e;const lr=e=>sr.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:sr.jsx("path",{d:"M10 18C8.90267 18 7.868 17.7917 6.896 17.375C5.924 16.9583 5.07333 16.3853 4.344 15.656C3.61467 14.9267 3.04167 14.076 2.625 13.104C2.20833 12.132 2 11.0973 2 10C2 8.88867 2.20833 7.85033 2.625 6.885C3.04167 5.92033 3.61467 5.07333 4.344 4.344C5.07333 3.61467 5.924 3.04167 6.896 2.625C7.868 2.20833 8.90267 2 10 2C11.1113 2 12.1497 2.20833 13.115 2.625C14.0797 3.04167 14.9267 3.61467 15.656 4.344C16.3853 5.07333 16.9583 5.92033 17.375 6.885C17.7917 7.85033 18 8.88867 18 10C18 11.0973 17.7917 12.132 17.375 13.104C16.9583 14.076 16.3853 14.9267 15.656 15.656C14.9267 16.3853 14.0797 16.9583 13.115 17.375C12.1497 17.7917 11.1113 18 10 18ZM10 16.5C11.8053 16.5 13.34 15.868 14.604 14.604C15.868 13.34 16.5 11.8053 16.5 10C16.5 8.19467 15.868 6.66 14.604 5.396C13.34 4.132 11.8053 3.5 10 3.5C8.19467 3.5 6.66 4.132 5.396 5.396C4.132 6.66 3.5 8.19467 3.5 10C3.5 11.8053 4.132 13.34 5.396 14.604C6.66 15.868 8.19467 16.5 10 16.5Z",fill:"currentColor"})});lr.displayName="CircleIcon",ir=ar.CircleIcon=lr;var cr,ur={};Object.defineProperty(ur,"__esModule",{value:!0});var dr=e;const hr=e=>dr.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:dr.jsx("path",{d:"M10 14C11.1113 14 12.0557 13.611 12.833 12.833C13.611 12.0557 14 11.1113 14 10C14 8.88867 13.611 7.94433 12.833 7.167C12.0557 6.389 11.1113 6 10 6C8.88867 6 7.94433 6.389 7.167 7.167C6.389 7.94433 6 8.88867 6 10C6 11.1113 6.389 12.0557 7.167 12.833C7.94433 13.611 8.88867 14 10 14ZM10 18C8.90267 18 7.868 17.7917 6.896 17.375C5.924 16.9583 5.07333 16.3853 4.344 15.656C3.61467 14.9267 3.04167 14.076 2.625 13.104C2.20833 12.132 2 11.0973 2 10C2 8.88867 2.20833 7.85033 2.625 6.885C3.04167 5.92033 3.61467 5.07333 4.344 4.344C5.07333 3.61467 5.924 3.04167 6.896 2.625C7.868 2.20833 8.90267 2 10 2C11.1113 2 12.1497 2.20833 13.115 2.625C14.0797 3.04167 14.9267 3.61467 15.656 4.344C16.3853 5.07333 16.9583 5.92033 17.375 6.885C17.7917 7.85033 18 8.88867 18 10C18 11.0973 17.7917 12.132 17.375 13.104C16.9583 14.076 16.3853 14.9267 15.656 15.656C14.9267 16.3853 14.0797 16.9583 13.115 17.375C12.1497 17.7917 11.1113 18 10 18ZM10 16.5C11.8053 16.5 13.34 15.868 14.604 14.604C15.868 13.34 16.5 11.8053 16.5 10C16.5 8.19467 15.868 6.66 14.604 5.396C13.34 4.132 11.8053 3.5 10 3.5C8.19467 3.5 6.66 4.132 5.396 5.396C4.132 6.66 3.5 8.19467 3.5 10C3.5 11.8053 4.132 13.34 5.396 14.604C6.66 15.868 8.19467 16.5 10 16.5Z",fill:"currentColor"})});hr.displayName="CircleDotIcon",cr=ur.CircleDotIcon=hr;var pr,fr={};Object.defineProperty(fr,"__esModule",{value:!0});var mr=e;const gr=e=>mr.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:mr.jsx("path",{d:"M4.5 17C4.08333 17 3.72933 16.854 3.438 16.562C3.146 16.2707 3 15.9167 3 15.5V4.5C3 4.08333 3.146 3.72933 3.438 3.438C3.72933 3.146 4.08333 3 4.5 3H15.5C15.9167 3 16.2707 3.146 16.562 3.438C16.854 3.72933 17 4.08333 17 4.5V15.5C17 15.9167 16.854 16.2707 16.562 16.562C16.2707 16.854 15.9167 17 15.5 17H4.5ZM4.5 15.5H15.5V4.5H4.5V15.5Z",fill:"currentColor"})});gr.displayName="SquareIcon",pr=fr.SquareIcon=gr;var yr,vr={};Object.defineProperty(vr,"__esModule",{value:!0});var br=e;const wr=e=>br.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:br.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H15.75C16.236 2.5 16.6493 2.67 16.99 3.01C17.33 3.35067 17.5 3.764 17.5 4.25V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM8.875 13.188C8.98633 13.188 9.094 13.167 9.198 13.125C9.302 13.083 9.40267 13.0137 9.5 12.917L14.125 8.292C14.2917 8.12533 14.375 7.924 14.375 7.688C14.375 7.45133 14.2917 7.24267 14.125 7.062C13.9443 6.89533 13.736 6.812 13.5 6.812C13.264 6.812 13.0627 6.89533 12.896 7.062L8.875 11.083L7.125 9.333C6.95833 9.16633 6.757 9.083 6.521 9.083C6.285 9.083 6.08367 9.16633 5.917 9.333C5.73633 9.51367 5.646 9.722 5.646 9.958C5.646 10.194 5.73633 10.3953 5.917 10.562L8.25 12.917C8.34733 13.0137 8.448 13.083 8.552 13.125C8.656 13.167 8.76367 13.188 8.875 13.188Z",fill:"currentColor"})});wr.displayName="SquareTickFillIcon",yr=vr.SquareTickFillIcon=wr;var Cr,_r={};Object.defineProperty(_r,"__esModule",{value:!0});var xr=e;const $r=e=>xr.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:xr.jsx("path",{d:"M7.97897 14.646C7.86764 14.646 7.75997 14.625 7.65597 14.583C7.55197 14.5417 7.4513 14.4723 7.35397 14.375L3.83297 10.854C3.6663 10.6873 3.58664 10.4757 3.59397 10.219C3.60064 9.96167 3.6873 9.74967 3.85397 9.583C4.02064 9.41634 4.22897 9.333 4.47897 9.333C4.72897 9.333 4.9373 9.41634 5.10397 9.583L8.02097 12.5L14.917 5.604C15.0836 5.43734 15.2883 5.354 15.531 5.354C15.7743 5.354 15.9793 5.43734 16.146 5.604C16.3126 5.77067 16.396 5.97567 16.396 6.219C16.396 6.46167 16.3126 6.66634 16.146 6.833L8.60397 14.375C8.50664 14.4723 8.40597 14.5417 8.30197 14.583C8.19797 14.625 8.0903 14.646 7.97897 14.646Z",fill:"currentColor"})});$r.displayName="TickIcon",Cr=_r.TickIcon=$r;const Sr=C.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?_`
                    color: ${Un.Primary};
                `:_`
                    color: ${Un.Neutral[4]};
                `};
    }
`,Or=({type:e,active:n=!1,disabled:r,className:o})=>{let i;switch(e){case"checkbox":i=t(n?yr:pr,{});break;case"radio":i=t(n?cr:ir,{});break;case"tick":i=t(Cr,{});break;case"cross":i=t($,{});break;default:i=null}return t(Sr,{className:o,$active:n,disabled:r,children:i})};let kr=Vr();const jr=e=>zr(e,kr);let Fr=Vr();jr.write=e=>zr(e,Fr);let Pr=Vr();jr.onStart=e=>zr(e,Pr);let Hr=Vr();jr.onFrame=e=>zr(e,Hr);let Ir=Vr();jr.onFinish=e=>zr(e,Ir);let Mr=[];jr.setTimeout=(e,t)=>{let n=jr.now()+t,r=()=>{let e=Mr.findIndex((e=>e.cancel==r));~e&&Mr.splice(e,1),Tr-=~e?1:0},o={time:n,handler:e,cancel:r};return Mr.splice(Er(n),0,o),Tr+=1,Rr(),o};let Er=e=>~(~Mr.findIndex((t=>t.time>e))||~Mr.length);jr.cancel=e=>{Pr.delete(e),Hr.delete(e),Ir.delete(e),kr.delete(e),Fr.delete(e)},jr.sync=e=>{Ar=!0,jr.batchedUpdates(e),Ar=!1},jr.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,jr.onStart(n)}return r.handler=e,r.cancel=()=>{Pr.delete(n),t=null},r};let Br="undefined"!=typeof window?window.requestAnimationFrame:()=>{};jr.use=e=>Br=e,jr.now="undefined"!=typeof performance?()=>performance.now():Date.now,jr.batchedUpdates=e=>e(),jr.catch=console.error,jr.frameLoop="always",jr.advance=()=>{"demand"!==jr.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Lr()};let Dr=-1,Tr=0,Ar=!1;function zr(e,t){Ar?(t.delete(e),e(0)):(t.add(e),Rr())}function Rr(){Dr<0&&(Dr=0,"demand"!==jr.frameLoop&&Br(Nr))}function Nr(){~Dr&&(Br(Nr),jr.batchedUpdates(Lr))}function Lr(){let e=Dr;Dr=jr.now();let t=Er(Dr);t&&(Wr(Mr.splice(0,t),(e=>e.handler())),Tr-=t),Tr?(Pr.flush(),kr.flush(e?Math.min(64,Dr-e):16.667),Hr.flush(),Fr.flush(),Ir.flush()):Dr=-1}function Vr(){let e=new Set,t=e;return{add(n){Tr+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Tr-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Tr-=t.size,Wr(t,(t=>t(n)&&e.add(t))),Tr+=e.size,t=e)}}}function Wr(e,t){e.forEach((e=>{try{t(e)}catch(e){jr.catch(e)}}))}function qr(){}const Qr={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Ur(e,t){if(Qr.arr(e)){if(!Qr.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const Zr=(e,t)=>e.forEach(t);function Gr(e,t,n){if(Qr.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const Xr=e=>Qr.und(e)?[]:Qr.arr(e)?e:[e];function Yr(e,t){if(e.size){const n=Array.from(e);e.clear(),Zr(n,t)}}const Jr=(e,...t)=>Yr(e,(e=>e(...t))),Kr=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let eo,to,no=null,ro=!1,oo=qr;var io=Object.freeze({__proto__:null,get createStringInterpolator(){return eo},get to(){return to},get colors(){return no},get skipAnimation(){return ro},get willAdvance(){return oo},assign:e=>{e.to&&(to=e.to),e.now&&(jr.now=e.now),void 0!==e.colors&&(no=e.colors),null!=e.skipAnimation&&(ro=e.skipAnimation),e.createStringInterpolator&&(eo=e.createStringInterpolator),e.requestAnimationFrame&&jr.use(e.requestAnimationFrame),e.batchedUpdates&&(jr.batchedUpdates=e.batchedUpdates),e.willAdvance&&(oo=e.willAdvance),e.frameLoop&&(jr.frameLoop=e.frameLoop)}});const ao=new Set;let so=[],lo=[],co=0;const uo={get idle(){return!ao.size&&!so.length},start(e){co>e.priority?(ao.add(e),jr.onStart(ho)):(po(e),jr(mo))},advance:mo,sort(e){if(co)jr.onFrame((()=>uo.sort(e)));else{const t=so.indexOf(e);~t&&(so.splice(t,1),fo(e))}},clear(){so=[],ao.clear()}};function ho(){ao.forEach(po),ao.clear(),jr(mo)}function po(e){so.includes(e)||fo(e)}function fo(e){so.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(so,(t=>t.priority>e.priority)),0,e)}function mo(e){const t=lo;for(let n=0;n<so.length;n++){const r=so[n];co=r.priority,r.idle||(oo(r),r.advance(e),r.idle||t.push(r))}return co=0,lo=so,lo.length=0,so=t,so.length>0}const go="[-+]?\\d*\\.?\\d+",yo=go+"%";function vo(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const bo=new RegExp("rgb"+vo(go,go,go)),wo=new RegExp("rgba"+vo(go,go,go,go)),Co=new RegExp("hsl"+vo(go,yo,yo)),_o=new RegExp("hsla"+vo(go,yo,yo,go)),xo=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,$o=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,So=/^#([0-9a-fA-F]{6})$/,Oo=/^#([0-9a-fA-F]{8})$/;function ko(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function jo(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,o=2*n-r,i=ko(o,r,e+1/3),a=ko(o,r,e),s=ko(o,r,e-1/3);return Math.round(255*i)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Fo(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Po(e){return(parseFloat(e)%360+360)%360/360}function Ho(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Io(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Mo(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=So.exec(e))?parseInt(t[1]+"ff",16)>>>0:no&&void 0!==no[e]?no[e]:(t=bo.exec(e))?(Fo(t[1])<<24|Fo(t[2])<<16|Fo(t[3])<<8|255)>>>0:(t=wo.exec(e))?(Fo(t[1])<<24|Fo(t[2])<<16|Fo(t[3])<<8|Ho(t[4]))>>>0:(t=xo.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Oo.exec(e))?parseInt(t[1],16)>>>0:(t=$o.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Co.exec(e))?(255|jo(Po(t[1]),Io(t[2]),Io(t[3])))>>>0:(t=_o.exec(e))?(jo(Po(t[1]),Io(t[2]),Io(t[3]))|Ho(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Eo=(e,t,n)=>{if(Qr.fun(e))return e;if(Qr.arr(e))return Eo({range:e,output:t,extrapolate:n});if(Qr.str(e.output[0]))return eo(e);const r=e,o=r.output,i=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,i);return function(e,t,n,r,o,i,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===o)return r;if(t===n)return e<=t?r:o;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=i(c),r===-1/0?c=-c:o===1/0?c+=r:c=c*(o-r)+r;return c}(e,i[t],i[t+1],o[t],o[t+1],l,a,s,r.map)}};const Bo=1.70158,Do=1.525*Bo,To=Bo+1,Ao=2*Math.PI/3,zo=2*Math.PI/4.5,Ro=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},No={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>To*e*e*e-Bo*e*e,easeOutBack:e=>1+To*Math.pow(e-1,3)+Bo*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Do)/2:(Math.pow(2*e-2,2)*((Do+1)*(2*e-2)+Do)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ao),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ao)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*zo)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*zo)/2+1,easeInBounce:e=>1-Ro(1-e),easeOutBounce:Ro,easeInOutBounce:e=>e<.5?(1-Ro(1-2*e))/2:(1+Ro(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,o="end"===t?Math.floor(r):Math.ceil(r);return i=0,a=1,s=o/e,Math.min(Math.max(s,i),a);var i,a,s}};function Lo(){return Lo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lo.apply(this,arguments)}const Vo=Symbol.for("FluidValue.get"),Wo=Symbol.for("FluidValue.observers"),qo=e=>Boolean(e&&e[Vo]),Qo=e=>e&&e[Vo]?e[Vo]():e,Uo=e=>e[Wo]||null;function Zo(e,t){let n=e[Wo];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Go{constructor(e){if(this[Vo]=void 0,this[Wo]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Xo(this,e)}}const Xo=(e,t)=>Ko(e,Vo,t);function Yo(e,t){if(e[Vo]){let n=e[Wo];n||Ko(e,Wo,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Jo(e,t){let n=e[Wo];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Wo]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const Ko=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),ei=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,ti=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ni=new RegExp(`(${ei.source})(%|[a-z]+)`,"i"),ri=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,oi=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ii=e=>{const[t,n]=ai(e);if(!t||Kr())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&oi.test(n)?ii(n):n||e},ai=e=>{const t=oi.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let si;const li=(e,t,n,r,o)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,ci=e=>{si||(si=no?new RegExp(`(${Object.keys(no).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Qo(e).replace(oi,ii).replace(ti,Mo).replace(si,Mo))),n=t.map((e=>e.match(ei).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Eo(Lo({},e,{output:t}))));return e=>{var n;const o=!ni.test(t[0])&&(null==(n=t.find((e=>ni.test(e))))?void 0:n.replace(ei,""));let i=0;return t[0].replace(ei,(()=>`${r[i++](e)}${o||""}`)).replace(ri,li)}},ui="react-spring: ",di=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${ui}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},hi=di(console.warn);const pi=di(console.warn);function fi(e){return Qr.str(e)&&("#"==e[0]||/\d/.test(e)||!Kr()&&oi.test(e)||e in(no||{}))}const mi=Kr()?l:p,gi=()=>{const e=s(!1);return mi((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function yi(){const e=a()[1],t=gi();return()=>{t.current&&e(Math.random())}}const vi=e=>l(e,bi),bi=[];function wi(e){const t=s();return l((()=>{t.current=e})),t.current}const Ci=Symbol.for("Animated:node"),_i=e=>e&&e[Ci],xi=(e,t)=>{return n=e,r=Ci,o=t,Object.defineProperty(n,r,{value:o,writable:!0,configurable:!0});var n,r,o},$i=e=>e&&e[Ci]&&e[Ci].getPayload();class Si{constructor(){this.payload=void 0,xi(this,this)}getPayload(){return this.payload||[]}}class Oi extends Si{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Qr.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Oi(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Qr.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Qr.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class ki extends Oi{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Eo({output:[e,e]})}static create(e){return new ki(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Qr.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Eo({output:[this.getValue(),e]})),this._value=0,super.reset()}}const ji={dependencies:null};class Fi extends Si{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Gr(this.source,((n,r)=>{var o;(o=n)&&o[Ci]===o?t[r]=n.getValue(e):qo(n)?t[r]=Qo(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Zr(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Gr(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){ji.dependencies&&qo(e)&&ji.dependencies.add(e);const t=$i(e);t&&Zr(t,(e=>this.add(e)))}}class Pi extends Fi{constructor(e){super(e)}static create(e){return new Pi(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Hi)),!0)}}function Hi(e){return(fi(e)?ki:Oi).create(e)}function Ii(e){const t=_i(e);return t?t.constructor:Qr.arr(e)?Pi:fi(e)?ki:Oi}function Mi(){return Mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mi.apply(this,arguments)}const Ei=(e,t)=>{const n=!Qr.fun(e)||e.prototype&&e.prototype.isReactComponent;return f(((r,i)=>{const a=s(null),c=n&&m((e=>{a.current=function(e,t){e&&(Qr.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[u,d]=function(e,t){const n=new Set;ji.dependencies=n,e.style&&(e=Mi({},e,{style:t.createAnimatedStyle(e.style)}));return e=new Fi(e),ji.dependencies=null,[e,n]}(r,t),h=yi(),p=()=>{const e=a.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&h()},f=new Bi(p,d),g=s();mi((()=>(g.current=f,Zr(d,(e=>Yo(e,f))),()=>{g.current&&(Zr(g.current.deps,(e=>Jo(e,g.current))),jr.cancel(g.current.update))}))),l(p,[]),vi((()=>()=>{const e=g.current;Zr(e.deps,(t=>Jo(t,e)))}));const y=t.getComponentProps(u.getValue());return o.createElement(e,Mi({},y,{ref:c}))}))};class Bi{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&jr.write(this.update)}}const Di=Symbol.for("AnimatedComponent"),Ti=e=>Qr.str(e)?e:e&&Qr.str(e.displayName)?e.displayName:Qr.fun(e)&&e.name||null;function Ai(){return Ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ai.apply(this,arguments)}function zi(e,...t){return Qr.fun(e)?e(...t):e}const Ri=(e,t)=>!0===e||!!(t&&e&&(Qr.fun(e)?e(t):Xr(e).includes(t))),Ni=(e,t)=>Qr.obj(e)?t&&e[t]:e,Li=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Vi=e=>e,Wi=(e,t=Vi)=>{let n=qi;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const o of n){const n=t(e[o],o);Qr.und(n)||(r[o]=n)}return r},qi=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Qi={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ui(e){const t=function(e){const t={};let n=0;if(Gr(e,((e,r)=>{Qi[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Gr(e,((e,r)=>r in t||(n[r]=e))),n}return Ai({},e)}function Zi(e){return e=Qo(e),Qr.arr(e)?e.map(Zi):fi(e)?io.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Gi(e){return Qr.fun(e)||Qr.arr(e)&&Qr.obj(e[0])}const Xi=Ai({},{tension:170,friction:26},{mass:1,damping:1,easing:No.linear,clamp:!1});class Yi{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Xi)}}function Ji(e,t){if(Qr.und(t.decay)){const n=!Qr.und(t.tension)||!Qr.und(t.friction);!n&&Qr.und(t.frequency)&&Qr.und(t.damping)&&Qr.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const Ki=[];class ea{constructor(){this.changed=!1,this.values=Ki,this.toValues=null,this.fromValues=Ki,this.to=void 0,this.from=void 0,this.config=new Yi,this.immediate=!1}}function ta(e,{key:t,props:n,defaultProps:r,state:o,actions:i}){return new Promise(((a,s)=>{var l;let c,u,d=Ri(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)f();else{Qr.und(n.pause)||(o.paused=Ri(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=o.paused||Ri(e,t)),c=zi(n.delay||0,t),e?(o.resumeQueue.add(p),i.pause()):(i.resume(),p())}function h(){o.resumeQueue.add(p),o.timeouts.delete(u),u.cancel(),c=u.time-jr.now()}function p(){c>0&&!io.skipAnimation?(o.delayed=!0,u=jr.setTimeout(f,c),o.pauseQueue.add(h),o.timeouts.add(u)):f()}function f(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(h),o.timeouts.delete(u),e<=(o.cancelId||0)&&(d=!0);try{i.start(Ai({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const na=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?ia(e.get()):t.every((e=>e.noop))?ra(e.get()):oa(e.get(),t.every((e=>e.finished))),ra=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),oa=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),ia=e=>({value:e,cancelled:!0,finished:!1});function aa(e,t,n,r){const{callId:o,parentId:i,onRest:a}=t,{asyncTo:s,promise:l}=n;return i||e!==s||t.reset?n.promise=(async()=>{n.asyncId=o,n.asyncTo=e;const c=Wi(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=o<=(n.cancelId||0)&&ia(r)||o!==n.asyncId&&oa(r,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const i=new la,a=new ca;return(async()=>{if(io.skipAnimation)throw sa(n),a.result=oa(r,!1),d(a),a;p(i);const s=Qr.obj(e)?Ai({},e):Ai({},t,{to:e});s.parentId=o,Gr(c,((e,t)=>{Qr.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return p(i),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let m;if(io.skipAnimation)return sa(n),oa(r,!1);try{let t;t=Qr.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,r.stop.bind(r))),await Promise.all([t.then(u),h]),m=oa(r.get(),!0,!1)}catch(e){if(e instanceof la)m=e.result;else{if(!(e instanceof ca))throw e;m=e.result}}finally{o==n.asyncId&&(n.asyncId=i,n.asyncTo=i?s:void 0,n.promise=i?l:void 0)}return Qr.fun(a)&&jr.batchedUpdates((()=>{a(m,r,r.item)})),m})():l}function sa(e,t){Yr(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class la extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class ca extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const ua=e=>e instanceof ha;let da=1;class ha extends Go{constructor(...e){super(...e),this.id=da++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=_i(this);return e&&e.getValue()}to(...e){return io.to(this,e)}interpolate(...e){return hi(`${ui}The "interpolate" function is deprecated in v9 (use "to" instead)`),io.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Zo(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||uo.sort(this),Zo(this,{type:"priority",parent:this,priority:e})}}const pa=Symbol.for("SpringPhase"),fa=e=>(1&e[pa])>0,ma=e=>(2&e[pa])>0,ga=e=>(4&e[pa])>0,ya=(e,t)=>t?e[pa]|=3:e[pa]&=-3,va=(e,t)=>t?e[pa]|=4:e[pa]&=-5;class ba extends ha{constructor(e,t){if(super(),this.key=void 0,this.animation=new ea,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Qr.und(e)||!Qr.und(t)){const n=Qr.obj(e)?Ai({},e):Ai({},t,{from:e});Qr.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(ma(this)||this._state.asyncTo)||ga(this)}get goal(){return Qo(this.animation.to)}get velocity(){const e=_i(this);return e instanceof Oi?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return fa(this)}get isAnimating(){return ma(this)}get isPaused(){return ga(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:o,toValues:i}=r;const a=$i(r.to);!a&&qo(r.to)&&(i=Xr(Qo(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ki?1:a?a[l].lastPosition:i[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],i=null!=s.v0?s.v0:s.v0=Qr.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Qr.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,r=Math.exp(-(1-e)*t);d=n+i/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=i*r}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||h/10,r=o.clamp?0:o.bounce,l=!Qr.und(r),p=n==c?s.v0>0:n<c;let f,m=!1;const g=1,y=Math.ceil(e/g);for(let e=0;e<y&&(f=Math.abs(a)>t,f||(u=Math.abs(c-d)<=h,!u));++e){l&&(m=d==c||d>c==p,m&&(a=-a*r,d=c));a+=(1e-6*-o.tension*(d-c)+.001*-o.friction*a)/o.mass*g,d+=a*g}}else{let r=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(o.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+o.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,o.round)&&(n=!0)}));const s=_i(this),l=s.getValue();if(t){const e=Qo(r.to);l===e&&!n||o.decay?n&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return jr.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ma(this)){const{to:e,config:t}=this.animation;jr.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Qr.und(e)?(n=this.queue||[],this.queue=[]):n=[Qr.obj(e)?e:Ai({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>na(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),sa(this._state,e&&this._lastCallId),jr.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Qr.obj(n)?n[t]:n,(null==n||Gi(n))&&(n=void 0),r=Qr.obj(r)?r[t]:r,null==r&&(r=void 0);const o={to:n,from:r};return fa(this)||(e.reverse&&([n,r]=[r,n]),r=Qo(r),Qr.und(r)?_i(this)||this._set(n):this._set(r)),o}_update(e,t){let n=Ai({},e);const{key:r,defaultProps:o}=this;n.default&&Object.assign(o,Wi(n,((e,t)=>/^on/.test(t)?Ni(e,r):e))),Oa(this,n,"onProps"),ka(this,"onProps",n,this);const i=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return ta(++this._lastCallId,{key:r,props:n,defaultProps:o,state:a,actions:{pause:()=>{ga(this)||(va(this,!0),Jr(a.pauseQueue),ka(this,"onPause",oa(this,wa(this,this.animation.to)),this))},resume:()=>{ga(this)&&(va(this,!1),ma(this)&&this._resume(),Jr(a.resumeQueue),ka(this,"onResume",oa(this,wa(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=Ca(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(ia(this));const r=!Qr.und(e.to),o=!Qr.und(e.from);if(r||o){if(!(t.callId>this._lastToId))return n(ia(this));this._lastToId=t.callId}const{key:i,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!o||r||t.default&&!Qr.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Ur(d,c);h&&(s.from=d),d=Qo(d);const p=!Ur(u,l);p&&this._focus(u);const f=Gi(t.to),{config:m}=s,{decay:g,velocity:y}=m;(r||o)&&(m.velocity=0),t.config&&!f&&function(e,t,n){n&&(Ji(n=Ai({},n),t),t=Ai({},n,t)),Ji(e,t),Object.assign(e,t);for(const t in Xi)null==e[t]&&(e[t]=Xi[t]);let{mass:r,frequency:o,damping:i}=e;Qr.und(o)||(o<.01&&(o=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/o,2)*r,e.friction=4*Math.PI*i*r/o)}(m,zi(t.config,i),t.config!==a.config?zi(a.config,i):void 0);let v=_i(this);if(!v||Qr.und(u))return n(oa(this,!0));const b=Qr.und(t.reset)?o&&!t.default:!Qr.und(d)&&Ri(t.reset,i),w=b?d:this.get(),C=Zi(u),_=Qr.num(C)||Qr.arr(C)||fi(C),x=!f&&(!_||Ri(a.immediate||t.immediate,i));if(p){const e=Ii(u);if(e!==v.constructor){if(!x)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(C)}}const $=v.constructor;let S=qo(u),O=!1;if(!S){const e=b||!fa(this)&&h;(p||e)&&(O=Ur(Zi(w),C),S=!O),(Ur(s.immediate,x)||x)&&Ur(m.decay,g)&&Ur(m.velocity,y)||(S=!0)}if(O&&ma(this)&&(s.changed&&!b?S=!0:S||this._stop(l)),!f&&((S||qo(l))&&(s.values=v.getPayload(),s.toValues=qo(u)?null:$==ki?[1]:Xr(C)),s.immediate!=x&&(s.immediate=x,x||b||this._set(l)),S)){const{onRest:e}=s;Zr(Sa,(e=>Oa(this,t,e)));const r=oa(this,wa(this,l));Jr(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&jr.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?zi(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set(w),f?n(aa(t.to,t,this._state,this)):S?this._start():ma(this)&&!p?this._pendingCalls.add(n):n(ra(w))}_focus(e){const t=this.animation;e!==t.to&&(Uo(this)&&this._detach(),t.to=e,Uo(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;qo(t)&&(Yo(t,this),ua(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;qo(e)&&Jo(e,this)}_set(e,t=!0){const n=Qo(e);if(!Qr.und(n)){const e=_i(this);if(!e||!Ur(n,e.getValue())){const r=Ii(n);e&&e.constructor==r?e.setValue(n):xi(this,r.create(n)),e&&jr.batchedUpdates((()=>{this._onChange(n,t)}))}}return _i(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,ka(this,"onStart",oa(this,wa(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),zi(this.animation.onChange,e,this)),zi(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;_i(this).reset(Qo(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),ma(this)||(ya(this,!0),ga(this)||this._resume())}_resume(){io.skipAnimation?this.finish():uo.start(this)}_stop(e,t){if(ma(this)){ya(this,!1);const n=this.animation;Zr(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Zo(this,{type:"idle",parent:this});const r=t?ia(this.get()):oa(this.get(),wa(this,null!=e?e:n.to));Jr(this._pendingCalls,r),n.changed&&(n.changed=!1,ka(this,"onRest",r,this))}}}function wa(e,t){const n=Zi(t);return Ur(Zi(e.get()),n)}function Ca(e,t=e.loop,n=e.to){let r=zi(t);if(r){const o=!0!==r&&Ui(r),i=(o||e).reverse,a=!o||o.reset;return _a(Ai({},e,{loop:t,default:!1,pause:void 0,to:!i||Gi(n)?n:void 0,from:a?e.from:void 0,reset:a},o))}}function _a(e){const{to:t,from:n}=e=Ui(e),r=new Set;return Qr.obj(t)&&$a(t,r),Qr.obj(n)&&$a(n,r),e.keys=r.size?Array.from(r):null,e}function xa(e){const t=_a(e);return Qr.und(t.default)&&(t.default=Wi(t)),t}function $a(e,t){Gr(e,((e,n)=>null!=e&&t.add(n)))}const Sa=["onStart","onRest","onChange","onPause","onResume"];function Oa(e,t,n){e.animation[n]=t[n]!==Li(t,n)?Ni(t[n],e.key):void 0}function ka(e,t,...n){var r,o,i,a;null==(r=(o=e.animation)[t])||r.call(o,...n),null==(i=(a=e.defaultProps)[t])||i.call(a,...n)}const ja=["onStart","onChange","onRest"];let Fa=1;class Pa{constructor(e,t){this.id=Fa++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Ai({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Qr.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(_a(e)),this}start(e){let{queue:t}=this;return e?t=Xr(e).map(_a):this.queue=[],this._flush?this._flush(this,t):(Ta(this,t),Ha(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;Zr(Xr(t),(t=>n[t].stop(!!e)))}else sa(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Qr.und(e))this.start({pause:!0});else{const t=this.springs;Zr(Xr(e),(e=>t[e].pause()))}return this}resume(e){if(Qr.und(e))this.start({pause:!1});else{const t=this.springs;Zr(Xr(e),(e=>t[e].resume()))}return this}each(e){Gr(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,o=this._changed.size>0;(r&&!this._started||o&&!this._started)&&(this._started=!0,Yr(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!r&&this._started,a=o||i&&n.size?this.get():null;o&&t.size&&Yr(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),i&&(this._started=!1,Yr(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}jr.onFrame(this._onFrame)}}function Ha(e,t){return Promise.all(t.map((t=>Ia(e,t)))).then((t=>na(e,t)))}async function Ia(e,t,n){const{keys:r,to:o,from:i,loop:a,onRest:s,onResolve:l}=t,c=Qr.obj(t.default)&&t.default;a&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const u=Qr.arr(o)||Qr.fun(o)?o:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Zr(ja,(n=>{const r=t[n];if(Qr.fun(r)){const o=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=o.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):o.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Jr(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),p=!0===t.cancel||!0===Li(t,"cancel");(u||p&&d.asyncId)&&h.push(ta(++e._lastAsyncId,{props:t,state:d,actions:{pause:qr,resume:qr,start(t,n){p?(sa(d,e._lastAsyncId),n(ia(e))):(t.onRest=s,n(aa(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=na(e,await Promise.all(h));if(a&&f.finished&&(!n||!f.noop)){const n=Ca(t,a,o);if(n)return Ta(e,[n]),Ia(e,n,!0)}return l&&jr.batchedUpdates((()=>l(f,e,e.item))),f}function Ma(e,t){const n=Ai({},e.springs);return t&&Zr(Xr(t),(e=>{Qr.und(e.keys)&&(e=_a(e)),Qr.obj(e.to)||(e=Ai({},e,{to:void 0})),Da(n,e,(e=>Ba(e)))})),Ea(e,n),n}function Ea(e,t){Gr(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Yo(t,e))}))}function Ba(e,t){const n=new ba;return n.key=e,t&&Yo(n,t),n}function Da(e,t,n){t.keys&&Zr(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Ta(e,t){Zr(t,(t=>{Da(e.springs,t,(t=>Ba(t,e)))}))}const Aa=["children"],za=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,Aa);const r=g(Ra),i=n.pause||!!r.pause,c=n.immediate||!!r.immediate;n=function(e,t){const[n]=a((()=>({inputs:t,result:e()}))),r=s(),o=r.current;let i=o;i?Boolean(t&&i.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,i.inputs))||(i={inputs:t,result:e()}):i=n;return l((()=>{r.current=i,o==n&&(n.inputs=n.result=void 0)}),[i]),i.result}((()=>({pause:i,immediate:c})),[i,c]);const{Provider:u}=Ra;return o.createElement(u,{value:n},t)},Ra=(Na=za,La={},Object.assign(Na,o.createContext(La)),Na.Provider._context=Na,Na.Consumer._context=Na,Na);var Na,La;za.Provider=Ra.Provider,za.Consumer=Ra.Consumer;const Va=()=>{const e=[],t=function(t){pi(`${ui}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return Zr(e,((e,o)=>{if(Qr.und(t))r.push(e.start());else{const i=n(t,e,o);i&&r.push(e.start(i))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return Zr(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Zr(e,(e=>e.resume(...arguments))),this},t.set=function(t){Zr(e,(e=>e.set(t)))},t.start=function(t){const n=[];return Zr(e,((e,r)=>{if(Qr.und(t))n.push(e.start());else{const o=this._getProps(t,e,r);o&&n.push(e.start(o))}})),n},t.stop=function(){return Zr(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Zr(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Qr.fun(e)?e(n,t):e};return t._getProps=n,t};function Wa(e,t){const n=Qr.fun(e),[[r],o]=function(e,t,n){const r=Qr.fun(t)&&t;r&&!n&&(n=[]);const o=y((()=>r||3==arguments.length?Va():void 0),[]),i=s(0),a=yi(),l=y((()=>({ctrls:[],queue:[],flush(e,t){const n=Ma(e,t);return i.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Ha(e,t):new Promise((r=>{Ea(e,n),l.queue.push((()=>{r(Ha(e,t))})),a()}))}})),[]),c=s([...l.ctrls]),u=[],d=wi(e)||0;function h(e,n){for(let o=e;o<n;o++){const e=c.current[o]||(c.current[o]=new Pa(null,l.flush)),n=r?r(o,e):t[o];n&&(u[o]=xa(n))}}y((()=>{Zr(c.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,o),e.stop(!0)})),c.current.length=e,h(d,e)}),[e]),y((()=>{h(0,Math.min(d,e))}),n);const p=c.current.map(((e,t)=>Ma(e,u[t]))),f=g(za),m=wi(f),v=f!==m&&function(e){for(const t in e)return!0;return!1}(f);mi((()=>{i.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Zr(e,(e=>e()))),Zr(c.current,((e,t)=>{null==o||o.add(e),v&&e.start({default:f});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),vi((()=>()=>{Zr(l.ctrls,(e=>e.stop(!0)))}));const b=p.map((e=>Ai({},e)));return o?[b,o]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,o]:r}let qa;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(qa||(qa={}));class Qa extends ha{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Eo(...t);const n=this._get(),r=Ii(n);xi(this,r.create(n))}advance(e){const t=this._get();Ur(t,this.get())||(_i(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Za(this._active)&&Ga(this)}_get(){const e=Qr.arr(this.source)?this.source.map(Qo):Xr(Qo(this.source));return this.calc(...e)}_start(){this.idle&&!Za(this._active)&&(this.idle=!1,Zr($i(this),(e=>{e.done=!1})),io.skipAnimation?(jr.batchedUpdates((()=>this.advance())),Ga(this)):uo.start(this))}_attach(){let e=1;Zr(Xr(this.source),(t=>{qo(t)&&Yo(t,this),ua(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Zr(Xr(this.source),(e=>{qo(e)&&Jo(e,this)})),this._active.clear(),Ga(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Xr(this.source).reduce(((e,t)=>Math.max(e,(ua(t)?t.priority:0)+1)),0))}}function Ua(e){return!1!==e.idle}function Za(e){return!e.size||Array.from(e).every(Ua)}function Ga(e){e.idle||(e.idle=!0,Zr($i(e),(e=>{e.done=!0})),Zo(e,{type:"idle",parent:e}))}function Xa(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}io.assign({createStringInterpolator:ci,to:(e,t)=>new Qa(e,t)});const Ya=["style","children","scrollTop","scrollLeft","viewBox"],Ja=/^--/;function Ka(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Ja.test(e)||ts.hasOwnProperty(e)&&ts[e]?(""+t).trim():t+"px"}const es={};let ts={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const ns=["Webkit","Ms","Moz","O"];ts=Object.keys(ts).reduce(((e,t)=>(ns.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),ts);const rs=["x","y","z"],os=/^(matrix|translate|scale|rotate|skew)/,is=/^(translate)/,as=/^(rotate|skew)/,ss=(e,t)=>Qr.num(e)&&0!==e?e+t:e,ls=(e,t)=>Qr.arr(e)?e.every((e=>ls(e,t))):Qr.num(e)?e===t:parseFloat(e)===t;class cs extends Fi{constructor(e){let{x:t,y:n,z:r}=e,o=Xa(e,rs);const i=[],a=[];(t||n||r)&&(i.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>ss(e,"px"))).join(",")})`,ls(e,0)]))),Gr(o,((e,t)=>{if("transform"===t)i.push([e||""]),a.push((e=>[e,""===e]));else if(os.test(t)){if(delete o[t],Qr.und(e))return;const n=is.test(t)?"px":as.test(t)?"deg":"";i.push(Xr(e)),a.push("rotate3d"===t?([e,t,r,o])=>[`rotate3d(${e},${t},${r},${ss(o,n)})`,ls(o,0)]:e=>[`${t}(${e.map((e=>ss(e,n))).join(",")})`,ls(e,t.startsWith("scale")?1:0)])}})),i.length&&(o.transform=new us(i,a)),super(o)}}class us extends Go{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Zr(this.inputs,((n,r)=>{const o=Qo(n[0]),[i,a]=this.transforms[r](Qr.arr(o)?o:n.map(Qo));e+=" "+i,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Zr(this.inputs,(e=>Zr(e,(e=>qo(e)&&Yo(e,this)))))}observerRemoved(e){0==e&&Zr(this.inputs,(e=>Zr(e,(e=>qo(e)&&Jo(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Zo(this,e)}}const ds=["scrollTop","scrollLeft"];io.assign({batchedUpdates:w,createStringInterpolator:ci,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const hs=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Fi(e)),getComponentProps:r=(e=>e)}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},i=e=>{const t=Ti(e)||"Anonymous";return(e=Qr.str(e)?i[e]||(i[e]=Ei(e,o)):e[Di]||(e[Di]=Ei(e,o))).displayName=`Animated(${t})`,e};return Gr(e,((t,n)=>{Qr.arr(e)&&(n=Ti(t)),i[n]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:o,children:i,scrollTop:a,scrollLeft:s,viewBox:l}=r,c=Xa(r,Ya),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:es[t]||(es[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(let t in o)if(o.hasOwnProperty(t)){const n=Ka(t,o[t]);Ja.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new cs(e),getComponentProps:e=>Xa(e,ds)}),ps=hs.animated;var fs,ms={};Object.defineProperty(ms,"__esModule",{value:!0});var gs=e;const ys=e=>gs.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:gs.jsx("path",{d:"M2.62611 5.81312C2.84811 5.59112 3.10478 5.48012 3.39611 5.48012C3.68811 5.48012 3.94511 5.59112 4.16711 5.81312L10.1881 11.8341L16.2301 5.79212C16.4381 5.58412 16.6881 5.48012 16.9801 5.48012C17.2714 5.48012 17.5281 5.59112 17.7501 5.81312C17.9588 6.02179 18.0631 6.27545 18.0631 6.57412C18.0631 6.87279 17.9588 7.12612 17.7501 7.33412L10.8131 14.2721C10.7158 14.3688 10.6151 14.4381 10.5111 14.4801C10.4071 14.5215 10.2994 14.5421 10.1881 14.5421C10.0768 14.5421 9.96911 14.5215 9.86511 14.4801C9.76111 14.4381 9.66044 14.3688 9.56311 14.2721L2.60511 7.31312C2.38244 7.09112 2.27811 6.83779 2.29211 6.55312C2.30611 6.26845 2.41744 6.02179 2.62611 5.81312Z",fill:"currentColor"})});ys.displayName="ChevronDownIcon",fs=ms.ChevronDownIcon=ys;const vs=C.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,bs=x`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ws=C.div`
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
`,Cs=C(ws)`
    animation-delay: -0.45s;
`,_s=C(ws)`
    animation-delay: -0.3s;
`,xs=C(ws)`
    animation-delay: -0.15s;
`;var $s,Ss={};Object.defineProperty(Ss,"__esModule",{value:!0});var Os=e;const ks=e=>Os.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Os.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var js;ks.displayName="ExternalIcon",$s=Ss.ExternalIcon=ks,function(e){e.D1=C.h1`
        ${e=>_`
                ${rr("D1",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.D2=C.h1`
        ${e=>_`
                ${rr("D2",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.D3=C.h1`
        ${e=>_`
                ${rr("D3",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.D4=C.h1`
        ${e=>_`
                ${rr("D4",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.DBody=C.h1`
        ${e=>_`
                ${rr("DBody",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H1=C.h1`
        ${e=>_`
                ${rr("H1",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H2=C.h2`
        ${e=>_`
                ${rr("H2",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H3=C.h3`
        ${e=>_`
                ${rr("H3",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H4=C.h4`
        ${e=>_`
                ${rr("H4",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H5=C.h5`
        ${e=>_`
                ${rr("H5",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H6=C.h6`
        ${e=>_`
                ${rr("H6",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.Body=C.p`
        ${e=>_`
                ${rr("Body",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=C.p`
        ${e=>_`
                ${rr("BodySmall",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.XSmall=C.span`
        ${e=>_`
                ${rr("XSmall",e.weight,e.paragraph)}
                color: ${Un.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Hs({...e,textStyle:"Body"}),Small:e=>Hs({...e,textStyle:"BodySmall"})}}(js||(js={}));const Fs=C.a`
    ${e=>_`
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
`,Ps=C($s)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Hs=({external:e=!1,children:r,...o})=>n(Fs,{...o,children:[r,e&&t(Ps,{})]});var Is;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Is||(Is={}));const Ms=C.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return _`
                    background-color: ${Un.Neutral[8](e)};
                    border: 1px solid ${Un.Primary(e)};

                    span {
                        color: ${Un.Primary(e)};
                    }
                `;case"light":return _`
                    background-color: ${Un.Neutral[8](e)};
                    border: 1px solid ${Un.Neutral[5](e)};

                    span {
                        color: ${Un.Primary(e)};
                    }
                `;case"disabled":return _`
                    background-color: ${Un.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Un.Neutral[3](e)};
                    }
                `;case"link":return _`
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
                `;default:return _`
                    background-color: ${Un.Primary(e)};
                    border: 1px solid transparent;

                    ${Gn.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Un.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?_`
                    height: 2.5rem;
                    span {
                        ${rr("H5","semibold")}
                    }

                    ${Gn.mobileS} {
                        height: auto;
                    }
                `:_`
                    height: 3rem;
                    span {
                        ${rr("H4","semibold")}
                    }

                    ${Gn.mobileS} {
                        height: auto;
                    }
                `}
`,Es=C((({color:e,className:r,size:o=18})=>n(vs,{className:r,$size:o,$color:e,children:[t(ws,{id:"inner1",$size:o-2,$borderWidth:2}),t(Cs,{id:"inner2",$size:o-2,$borderWidth:2}),t(_s,{id:"inner3",$size:o-2,$borderWidth:2}),t(xs,{id:"inner4",$size:o-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Un.Primary(e);break;case"disabled":t=Un.Neutral[3](e);break;default:t=Un.Neutral[8](e)}return _`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Bs={Default:i.forwardRef(((e,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",...l}=e,c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default"};return n(Ms,{ref:r,"data-testid":l["data-testid"]||"button",disabled:i,...c,...l,children:[a&&t(Es,{...c}),t("span",{children:o})]})})),Small:i.forwardRef(((e,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",...l}=e,c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small"};return n(Ms,{ref:r,"data-testid":l["data-testid"]||"button",disabled:i,...c,...l,children:[a&&t(Es,{...c,size:16}),t("span",{children:o})]})}))},Ds=C.button`
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

        ${({$highlight:e})=>e&&_`
                background-color: ${Un.Neutral[7]};
            `}
    }
`,Ts=i.forwardRef((({children:e,focusHighlight:n=!0,focusOutline:r="none",...o},i)=>t(Ds,{ref:i,$outline:r,$highlight:n,...o,children:e}))),As=C.div`
    background-color: ${e=>e.$collapsible?Un.Neutral[7](e):Un.Neutral[8](e)};

    ${Gn.mobileL} {
        background-color: ${Un.Neutral[7]};
    }
`,zs=C.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${Un.Neutral[5]};

    ${Gn.mobileL} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 1rem;
    }
`,Rs=C.div`
    display: flex;
    align-items: center;

    background-color: ${Un.Neutral[8]};

    ${Gn.mobileL} {
        background-color: transparent;
    }
`,Ns=C(Ts)`
    margin: 0 0 0 auto;
`,Ls=C(fs)`
    height: 1.125rem;
    width: 1.125rem;
    color: ${Un.Neutral[3]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform 300ms ease-in-out;

    &:hover {
        color: ${Un.Neutral[2]};
    }
`,Vs=C(js.H4)`
    margin: 1.5rem 0 1.5rem 1.25rem;

    ${Gn.mobileL} {
        ${rr("H5","semibold")}
        margin: 1.5rem 1.25rem 0 1.25rem;
    }
`,Ws=C(ps.div)`
    overflow: hidden;
`,qs=C.div`
    padding: 1rem 1.25rem;

    ${Gn.mobileL} {
        padding: 1.5rem 1.25rem;
    }
`,Qs=C(ps.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,Us=C(Bs.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0 0;

    ${Gn.mobileL} {
        span {
            ${rr("H6","semibold")}
        }
    }
`,Zs=({collapsible:e=!0,minimisable:r=!1,minimisedHeight:o,showDivider:i=!0,showMobileDivider:s=!0,title:l,children:c,...u})=>{const{mode:d}=g(Ie),h="mobile"===d,[p,f]=a(!h&&e),[m,y]=a(r),v=!h&&e,b=He(),w=He(),C=Wa({height:p?0:b.height}),_=m?o??Math.min(.5*w.height,216):w.height;return n(As,{$collapsible:v,children:[t(zs,{$showDivider:i,$showMobileDivider:s}),(l||v)&&n(Rs,{children:[l&&t(Vs,{weight:"semibold",children:l}),v&&t(Ns,{focusHighlight:!1,focusOutline:"browser",onClick:()=>{f(!p)},"aria-label":p?"Expand":"Collapse",children:t(Ls,{$expanded:!p})})]}),t(Ws,{style:h?void 0:C,children:t("div",{ref:b.ref,children:n(qs,{...u,children:[t(Qs,{$height:_,$minimisable:r,children:t("div",{ref:w.ref,children:t("div",{"data-id":"content-container",children:"function"==typeof c?c(d,{minimised:m}):c})})}),r&&n(Us,{"data-id":"minimise-button",styleType:"link",onClick:()=>{y(!m)},children:["View ",m?"more":"less"]})]})})})]})},Gs=C.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem;

    // Content positioning style
    ${e=>{if(!e.$indicator)return _`
                justify-content: center;
            `}}

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?_`
                        border-color: ${Un.Validation.Red.Icon};
                        background: ${Un.Neutral[8]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Un.Shadow.Red};
                        }
                    `:e.$disabled?_`
                        border-color: transparent;
                    `:_`
                        border-color: transparent;

                        :hover {
                            background: ${Un.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?_`
                        background: ${Un.Neutral[6]};
                        border-color: ${Un.Neutral[5]};
                    `:e.$disabled&&e.$selected?_`
                        background: ${Un.Neutral[6]};
                        border-color: ${Un.Neutral[4]};
                    `:e.$error?_`
                        background: ${Un.Neutral[8]};
                        border-color: ${Un.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Un.Shadow.Red};
                        }
                    `:e.$selected?_`
                        background: ${Un.Accent.Light[5]};
                        border-color: ${Un.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Un.Shadow.Accent};
                        }
                    `:_`
                        background: ${Un.Neutral[8]};
                        border-color: ${Un.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Un.Shadow.Accent};
                            border-color: ${Un.Accent.Light[1]};
                        }
                    `}
`,Xs=C.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
`,Ys=C.div`
    display: flex;
    flex-direction: column;
`,Js=C.label`
    ${e=>e.$selected&&!e.$indicator?_`
                ${rr("H4","semibold")}
            `:_`
                ${rr("H4","regular")}
            `}

    color: ${Un.Neutral[1]};

    ${e=>e.$disabled?_`
                color: ${Un.Neutral[3](e)};
            `:e.$selected?_`
                color: ${Un.Primary(e)};
            `:void 0}
`,Ks=C(Zs)`
    padding: 0 0 1rem;

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: 0.5rem 0.5rem 0;

        ${Gn.mobileL} {
            padding: 1rem 1.25rem 0.5rem;
        }
    }

    [data-id="minimise-button"] {
        margin: 0.5rem 1.25rem 0;

        ${Gn.mobileL} {
            margin: 0.5rem 1.25rem 0;
        }
    }
`,el=C.div`
    display: flex;
    flex-direction: column;

    ${Gn.mobileL} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
`,tl=C.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: 0.5rem;

    cursor: pointer;
    ${rr("BodySmall","regular")}
    ${e=>e.$selected&&_`
            color: ${Un.Primary};
        `}
`,nl=C.input`
    appearance: none;
`,rl=C(Or)`
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;

    ${nl}:focus-visible + & {
        outline: 2px solid ${Un.Primary};
        outline-offset: -2px;
        border-radius: 4px;
    }
`,ol=C((({type:e="checkbox",indicator:r,checked:o,styleType:i="default",children:c,disabled:u,error:d,name:h,id:p,className:f,"data-testid":m,onChange:g})=>{const[y,v]=a(o),[b]=a((()=>crypto.randomUUID())),w=p?`${p}-input`:b,C=s();l((()=>{v(o)}),[o]);return n(Gs,{$selected:y,$disabled:u,className:f,$styleType:i,$error:d,$indicator:r,id:p,"data-testid":m,children:[r&&(()=>{let n;switch(e){case"yes":n="tick";break;case"no":n="cross";break;case"checkbox":case"radio":n=e}return t(Or,{type:n,active:y,disabled:u})})(),t(Xs,{ref:C,name:h,id:w,type:"checkbox"===e?"checkbox":"radio","data-testid":"toggle-input",disabled:u,onChange:t=>{if(!u){switch(e){case"checkbox":y||v((e=>!e));break;case"radio":case"yes":case"no":y||v(!0)}g&&g(t)}},checked:y}),t(Ys,{children:t(Js,{htmlFor:w,$selected:y,$indicator:r,$disabled:u,"data-testid":"toggle-label",children:c})})]})}))`
    ${e=>!e.$visible&&"visibility: hidden;"}
`;var il,al={};Object.defineProperty(al,"__esModule",{value:!0});var sl=e;const ll=e=>sl.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:sl.jsx("path",{d:"M12.521 17.562L5.58301 10.625C5.48635 10.5277 5.41701 10.427 5.37501 10.323C5.33301 10.219 5.31201 10.1113 5.31201 10C5.31201 9.88867 5.33301 9.781 5.37501 9.677C5.41701 9.573 5.48635 9.47234 5.58301 9.375L12.542 2.417C12.75 2.20834 13.0033 2.104 13.302 2.104C13.6007 2.104 13.854 2.21534 14.062 2.438C14.2847 2.646 14.389 2.90267 14.375 3.208C14.361 3.514 14.25 3.771 14.042 3.979L8.02101 10L14.062 16.042C14.2567 16.236 14.354 16.4893 14.354 16.802C14.354 17.1147 14.2567 17.368 14.062 17.562C13.854 17.7707 13.5973 17.875 13.292 17.875C12.986 17.875 12.729 17.7707 12.521 17.562Z",fill:"currentColor"})});ll.displayName="ChevronLeftIcon",il=al.ChevronLeftIcon=ll;const cl=C.div`
    background-color: ${Un.Neutral[8]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;var ul,dl={};Object.defineProperty(dl,"__esModule",{value:!0});var hl=e;const pl=e=>hl.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:hl.jsx("path",{d:"M3.375 15.833C3.139 15.833 2.934 15.7463 2.76 15.573C2.58667 15.399 2.5 15.194 2.5 14.958C2.5 14.722 2.58667 14.5173 2.76 14.344C2.934 14.17 3.139 14.083 3.375 14.083H6.792C7.028 14.083 7.23267 14.17 7.406 14.344C7.58 14.5173 7.667 14.722 7.667 14.958C7.667 15.194 7.58 15.399 7.406 15.573C7.23267 15.7463 7.028 15.833 6.792 15.833H3.375ZM3.375 5.917C3.139 5.917 2.934 5.83 2.76 5.656C2.58667 5.48267 2.5 5.278 2.5 5.042C2.5 4.806 2.58667 4.601 2.76 4.427C2.934 4.25367 3.139 4.167 3.375 4.167H9.896C10.132 4.167 10.3367 4.25367 10.51 4.427C10.684 4.601 10.771 4.806 10.771 5.042C10.771 5.278 10.684 5.48267 10.51 5.656C10.3367 5.83 10.132 5.917 9.896 5.917H3.375ZM10.083 17.5C9.847 17.5 9.64233 17.4133 9.469 17.24C9.295 17.066 9.208 16.861 9.208 16.625V13.312C9.208 13.076 9.295 12.8713 9.469 12.698C9.64233 12.5247 9.847 12.438 10.083 12.438C10.3197 12.438 10.5247 12.5247 10.698 12.698C10.8713 12.8713 10.958 13.076 10.958 13.312V14.083H16.625C16.861 14.083 17.066 14.17 17.24 14.344C17.4133 14.5173 17.5 14.722 17.5 14.958C17.5 15.194 17.4133 15.399 17.24 15.573C17.066 15.7463 16.861 15.833 16.625 15.833H10.958V16.625C10.958 16.861 10.8713 17.066 10.698 17.24C10.5247 17.4133 10.3197 17.5 10.083 17.5ZM6.792 12.542C6.556 12.542 6.351 12.455 6.177 12.281C6.00367 12.1077 5.917 11.903 5.917 11.667V10.875H3.375C3.139 10.875 2.934 10.7883 2.76 10.615C2.58667 10.441 2.5 10.236 2.5 10C2.5 9.764 2.58667 9.559 2.76 9.385C2.934 9.21167 3.139 9.125 3.375 9.125H5.917V8.354C5.917 8.118 6.00367 7.91333 6.177 7.74C6.351 7.566 6.556 7.479 6.792 7.479C7.028 7.479 7.23267 7.566 7.406 7.74C7.58 7.91333 7.667 8.118 7.667 8.354V11.667C7.667 11.903 7.58 12.1077 7.406 12.281C7.23267 12.455 7.028 12.542 6.792 12.542ZM10.083 10.875C9.847 10.875 9.64233 10.7883 9.469 10.615C9.295 10.441 9.208 10.236 9.208 10C9.208 9.764 9.295 9.559 9.469 9.385C9.64233 9.21167 9.847 9.125 10.083 9.125H16.625C16.861 9.125 17.066 9.21167 17.24 9.385C17.4133 9.559 17.5 9.764 17.5 10C17.5 10.236 17.4133 10.441 17.24 10.615C17.066 10.7883 16.861 10.875 16.625 10.875H10.083ZM13.208 7.562C12.972 7.562 12.7673 7.47533 12.594 7.302C12.42 7.12867 12.333 6.924 12.333 6.688V3.375C12.333 3.139 12.42 2.934 12.594 2.76C12.7673 2.58667 12.972 2.5 13.208 2.5C13.444 2.5 13.649 2.58667 13.823 2.76C13.9963 2.934 14.083 3.139 14.083 3.375V4.167H16.625C16.861 4.167 17.066 4.25367 17.24 4.427C17.4133 4.601 17.5 4.806 17.5 5.042C17.5 5.278 17.4133 5.48267 17.24 5.656C17.066 5.83 16.861 5.917 16.625 5.917H14.083V6.688C14.083 6.924 13.9963 7.12867 13.823 7.302C13.649 7.47533 13.444 7.562 13.208 7.562Z",fill:"currentColor"})});pl.displayName="FilterIcon",ul=dl.FilterIcon=pl;const fl=C.div`
    ${Gn.mobileL} {
        display: none;
    }
`,ml=C.div`
    display: none;
    ${Gn.mobileL} {
        display: block;
    }
`,gl=C.div`
    background-color: ${Un.Neutral[8]};
    border: 1px solid ${Un.Neutral[5]};
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
`,yl=C.div`
    background-color: ${Un.Neutral[7]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,vl=C.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,bl=C.div`
    display: flex;
    align-items: center;

    background-color: ${Un.Neutral[8]};

    ${Gn.mobileL} {
        border-bottom: 1px solid ${Un.Neutral[5]};
    }
`,wl=C(js.H4)`
    flex: 1;
    margin: 1.5rem 0 1rem 1.25rem;

    ${Gn.mobileL} {
        text-align: center;
        margin: 1.5rem 0;
    }
`,Cl=C(Ts)`
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
`,_l=C(Bs.Small)`
    background-color: transparent;
    padding: 1.5rem 1.25rem 1rem 1.25rem;
    height: auto;

    ${Gn.mobileL} {
        padding: 1.5rem 1.25rem;
    }
`,xl=C(Bs.Default)`
    width: 100%;
    span {
        display: flex;
        align-items: center;
    }
`,$l=C(ul)`
    margin-right: 0.625rem;
`,Sl=C.div`
    padding: 1.5rem 1.25rem;
    background-color: ${Un.Neutral[8]};
    border-top: 1px solid ${Un.Neutral[5]};
`,Ol=C(Bs.Default)`
    width: 100%;
`,kl=Object.assign((({toggleFilterButtonLabel:e="Filters",headerTitle:o="Filters",clearButtonDisabled:i=!1,onClear:s,onDismiss:l,onDone:c,children:u,...d})=>{const[h,p]=a(!1);P.exports.useMediaQuery({maxWidth:D.mobileL},void 0,(e=>{e||m()}));const f=()=>{p(!0)},m=()=>{p(!1),l&&l()},g=()=>{p(!1),c&&c()},y=()=>{s&&s()},v=e=>"function"==typeof u?u(e):u,b=e=>n(bl,{children:["mobile"===e&&t(Cl,{onClick:m,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:t($,{})}),t(wl,{weight:"semibold",children:o}),t(_l,{styleType:"link",onClick:y,disabled:i,children:"Clear"})]});return n("div",{...d,children:[t(ml,{children:t(Ie.Provider,{value:{mode:"mobile"},children:n(r,{children:[n(xl,{styleType:"light",onClick:f,children:[t($l,{})," ",e]}),t(M,{show:h,disableTransition:!0,children:n(yl,{children:[b("mobile"),t(vl,{children:v("mobile")}),t(Sl,{children:t(Ol,{onClick:g,children:"Done"})})]})})]})})}),t(fl,{children:t(Ie.Provider,{value:{mode:"default"},children:n(gl,{children:[b("default"),v("default")]})})})]})}),{Item:Zs,Page:({onDismiss:e,onDone:r,children:o})=>n(cl,{children:[t(Cl,{onClick:e,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:t(il,{})}),t(vl,{children:o}),t(Sl,{children:t(Ol,{onClick:r,children:"Done"})})]}),Checkbox:({selectedOptions:e,options:r,onSelect:o,labelExtractor:i,valueExtractor:c,...u})=>{const{mode:d}=g(Ie),[h,p]=a(e||[]),[f,y]=a(),[v,b]=a(r.length),w=s(),C=s(),_=e=>()=>{const t=[...h],n=h.findIndex((t=>$(t)===$(e)));n>=0?t.splice(n,1):t.push(e),p(t),o?.(t)},x=e=>i?i(e):e.label??e.toString(),$=e=>c?c(e):e.value??e.toString(),S=m((()=>{if(!w.current)return void y(void 0);const e=Array.from(w.current.children);let t=0,n=0,r=-1;for(let o=0;o<e.length;o++){const i=e[o].offsetTop;if(i>r&&(n++,r=i,n>2))break;t=o}b(t),y(n>2?r-8:void 0)}),[]);l((()=>{e!==h&&p(e||[])}),[e]),l((()=>{"default"===d?(()=>{const e=C.current?C.current.offsetTop+C.current.clientHeight:void 0;y(e)})():S()}),[r]),He({handleWidth:"mobile"===d,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:w,onResize:S});return t(Ks,{minimisable:r.length>5,minimisedHeight:f,...u,children:(e,{minimised:o})=>t(el,{role:"group","aria-label":u.title,ref:w,children:r.map(((r,i)=>"default"===e?((e,r,o)=>{const i=x(e),a=$(e),s=!!h.find((e=>$(e)===a));return n(tl,{$visible:!o||r<5,$selected:s,ref:4===r?C:void 0,children:[t(nl,{type:"checkbox",checked:s,onChange:_(e)}),t(rl,{type:"checkbox",active:s}),i]},a)})(r,i,o):((e,n,r)=>{const o=x(e),i=$(e),a=!!h.find((e=>$(e)===i));return t(ol,{type:"checkbox",checked:a,$visible:!r||f&&n<=v,onChange:_(e),children:o})})(r,i,o)))})})}});export{kl as Filter};
//# sourceMappingURL=index.js.map
