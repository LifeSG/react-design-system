import e,{jsxs as t,jsx as r,Fragment as n}from"react/jsx-runtime";import*as a from"react";import i,{useState as o,useRef as s,useEffect as l,Children as d,cloneElement as c,isValidElement as u,createRef as h,PureComponent as p,useLayoutEffect as f,forwardRef as m,useCallback as g,useContext as b,useMemo as y,useImperativeHandle as v,useReducer as w}from"react";import $,{css as x,keyframes as C}from"styled-components";import S,{findDOMNode as k,unstable_batchedUpdates as O}from"react-dom";var _,M="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},j={};Object.defineProperty(j,"__esModule",{value:!0});var D=e;const T=e=>D.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:D.jsx("path",{d:"M10.0049 1.67001C5.40195 1.67001 1.66992 5.40339 1.66992 10.005C1.66992 14.6093 5.40195 18.34 10.0049 18.34C14.6079 18.34 18.3399 14.6093 18.3399 10.005C18.3399 5.40339 14.6079 1.67001 10.0049 1.67001ZM10.0049 5.36699C10.7845 5.36699 11.4165 5.99897 11.4165 6.77856C11.4165 7.55815 10.7845 8.19013 10.0049 8.19013C9.22533 8.19013 8.59335 7.55815 8.59335 6.77856C8.59335 5.99897 9.22533 5.36699 10.0049 5.36699ZM11.887 13.9036C11.887 14.1264 11.7064 14.3069 11.4837 14.3069H8.52613C8.30341 14.3069 8.12283 14.1264 8.12283 13.9036V13.097C8.12283 12.8743 8.30341 12.6937 8.52613 12.6937H8.92944V10.5428H8.52613C8.30341 10.5428 8.12283 10.3622 8.12283 10.1394V9.33284C8.12283 9.11011 8.30341 8.92953 8.52613 8.92953H10.6771C10.8998 8.92953 11.0804 9.11011 11.0804 9.33284V12.6937H11.4837C11.7064 12.6937 11.887 12.8743 11.887 13.097V13.9036Z",fill:"currentColor"})});T.displayName="ICircleFillIcon",_=j.ICircleFillIcon=T;var B,N={exports:{}};B=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
  !*** ./node_modules/css-mediaquery/index.js ***!
  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var a=e.expressions.every((function(e){var r=e.feature,n=e.modifier,a=e.value,i=t[r];if(!i)return!1;switch(r){case"orientation":case"scan":return i.toLowerCase()===a.toLowerCase();case"width":case"height":case"device-width":case"device-height":a=c(a),i=c(i);break;case"resolution":a=d(a),i=d(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":a=l(a),i=l(i);break;case"grid":case"color":case"color-index":case"monochrome":a=parseInt(a,10)||1,i=parseInt(i,10)||0}switch(n){case"min":return i>=a;case"max":return i<=a;default:return i===a}}));return a&&!r||!a&&r}))},t.parse=s;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,a=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),i=t[1],o=t[2],s=t[3]||"",l={};return l.inverse=!!i&&"not"===i.toLowerCase(),l.type=o?o.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(a);return{modifier:r[1],feature:r[2],value:t[2]}})),l}))}function l(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function d(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function c(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=/[A-Z]/g,a=/^ms-/,i={};function o(e){return"-"+e.toLowerCase()}const s=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(n,o);return i[e]=a.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
  !*** ./node_modules/matchmediaquery/index.js ***!
  \***********************************************/(e,t,r)=>{var n=r(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,a="undefined"!=typeof window?window.matchMedia:null;function i(e,t,r){var i=this;if(a&&!r){var o=a.call(window,e);this.matches=o.matches,this.media=o.media,o.addListener(s)}else this.matches=n(e,t),this.media=e;function s(e){i.matches=e.matches,i.media=e.media}this.addListener=function(e){o&&o.addListener(e)},this.removeListener=function(e){o&&o.removeListener(e)},this.dispose=function(){o&&o.removeListener(s)}}e.exports=function(e,t,r){return new i(e,t,r)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/e=>{
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,o,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var d in i=Object(arguments[l]))r.call(i,d)&&(s[d]=i[d]);if(t){o=t(i);for(var c=0;c<o.length;c++)n.call(i,o[c])&&(s[o[c]]=i[o[c]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/(e,t,r)=>{var n,a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},o=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,r,s,l){for(var d in e)if(o(e,d)){var c;try{if("function"!=typeof e[d]){var u=Error((s||"React class")+": "+r+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}c=e[d](t,d,s,r,null,a)}catch(e){c=e}if(!c||c instanceof Error||n((s||"React class")+": type specification of "+r+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in i)){i[c.message]=!0;var h=l?l():"";n("Failed "+r+" type: "+c.message+(null!=h?h:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/(e,t,r)=>{var n,a=r(/*! react-is */"./node_modules/react-is/index.js"),i=r(/*! object-assign */"./node_modules/object-assign/index.js"),o=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,c="@@iterator",u="<<anonymous>>",h={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(d),arrayOf:function(e){return m((function(t,r,n,a,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new f("Invalid "+a+" `"+i+"` of type `"+v(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var d=e(s,l,n,a,i+"["+l+"]",o);if(d instanceof Error)return d}return null}))},element:m((function(t,r,n,a,i){var o=t[r];return e(o)?null:new f("Invalid "+a+" `"+i+"` of type `"+v(o)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:m((function(e,t,r,n,i){var o=e[t];return a.isValidElementType(o)?null:new f("Invalid "+n+" `"+i+"` of type `"+v(o)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,r,n,a,i){if(!(t[r]instanceof e)){var o=e.name||u;return new f("Invalid "+a+" `"+i+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+o+"`.")}var s;return null}))},node:m((function(e,t,r,n,a){return y(e[t])?null:new f("Invalid "+n+" `"+a+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,r,n,a,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],d=v(l);if("object"!==d)return new f("Invalid "+a+" `"+i+"` of type `"+d+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(s(l,c)){var u=e(l,c,n,a,i+"."+c,o);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,r,n,a,i){for(var o=t[r],s=0;s<e.length;s++)if(p(o,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new f("Invalid "+a+" `"+i+"` of value `"+String(o)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+$(r)+" at index "+t+"."),d}return m((function(t,r,n,a,i){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(t,r,n,a,i,o);if(null==c)return null;c.data&&s(c.data,"expectedType")&&l.push(c.data.expectedType)}return new f("Invalid "+a+" `"+i+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,r,n,a,i){var s=t[r],l=v(s);if("object"!==l)return new f("Invalid "+a+" `"+i+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return b(n,a,i,d,w(c));var u=c(s,d,n,a,i+"."+d,o);if(u)return u}return null}))},exact:function(e){return m((function(t,r,n,a,l){var d=t[r],c=v(d);if("object"!==c)return new f("Invalid "+a+" `"+l+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=i({},t[r],e);for(var h in u){var p=e[h];if(s(e,h)&&"function"!=typeof p)return b(n,a,l,h,w(p));if(!p)return new f("Invalid "+a+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=p(d,h,n,a,l+"."+h,o);if(m)return m}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var r={},a=0;function i(i,s,l,d,c,h,p){if(d=d||u,h=h||l,p!==o){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=d+":"+l;!r[g]&&a<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[g]=!0,a++)}}return null==s[l]?i?null===s[l]?new f("The "+c+" `"+h+"` is marked as required in `"+d+"`, but its value is `null`."):new f("The "+c+" `"+h+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(s,l,d,c,h)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function g(e){return m((function(t,r,n,a,i,o){var s=t[r];return v(s)!==e?new f("Invalid "+a+" `"+i+"` of type `"+w(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,r,n,a){return new f((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+a+"`.")}function y(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(y);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e[c]);if("function"==typeof t)return t}(t);if(!n)return!1;var a,i=n.call(t);if(n!==t.entries){for(;!(a=i.next()).done;)if(!y(a.value))return!1}else for(;!(a=i.next()).done;){var o=a.value;if(o&&!y(o[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function $(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/(e,t,r)=>{var n=r(/*! react-is */"./node_modules/react-is/index.js");e.exports=r(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(n.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var p=e.type;switch(p){case d:case c:case a:case o:case i:case h:return p;default:var g=p&&p.$$typeof;switch(g){case l:case u:case m:case f:case s:return g;default:return t}}case n:return t}}}var $=d,x=c,C=l,S=s,k=r,O=u,_=a,M=m,j=f,D=n,T=o,B=i,N=h,L=!1;function I(e){return w(e)===c}t.AsyncMode=$,t.ConcurrentMode=x,t.ContextConsumer=C,t.ContextProvider=S,t.Element=k,t.ForwardRef=O,t.Fragment=_,t.Lazy=M,t.Memo=j,t.Portal=D,t.Profiler=T,t.StrictMode=B,t.Suspense=N,t.isAsyncMode=function(e){return L||(L=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),I(e)||w(e)===d},t.isConcurrentMode=I,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===u},t.isFragment=function(e){return w(e)===a},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===f},t.isPortal=function(e){return w(e)===n},t.isProfiler=function(e){return w(e)===o},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===c||e===o||e===i||e===h||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===f||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===y||e.$$typeof===v||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/(e,t,r)=>{e.exports=r(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
  \******************************************************/(e,t,r)=>{function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),a=r.length;if(n.length!==a)return!1;for(var i=0;i<a;i++){var o=r[i];if(e[o]!==t[o]||!Object.prototype.hasOwnProperty.call(t,o))return!1}return!0}function a(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:()=>a,shallowEqualObjects:()=>n})},"./src/Component.ts":
/*!**************************!*\
  !*** ./src/Component.ts ***!
  \**************************/function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=a(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,a=e.onChange,o=n(e,["children","device","onChange"]),s=(0,i.default)(o,r,a);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":
/*!************************!*\
  !*** ./src/Context.ts ***!
  \************************/(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r(/*! react */"react").createContext)(void 0);t.default=n},"./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var a=n(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=a.default;var i=n(r(/*! ./Component */"./src/Component.ts"));t.default=i.default;var o=n(r(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=o.default;var s=n(r(/*! ./Context */"./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
  !*** ./src/mediaQuery.ts ***!
  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)},a=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(r(/*! prop-types */"./node_modules/prop-types/index.js")),s=o.default.oneOfType([o.default.string,o.default.number]),l={all:o.default.bool,grid:o.default.bool,aural:o.default.bool,braille:o.default.bool,handheld:o.default.bool,print:o.default.bool,projection:o.default.bool,screen:o.default.bool,tty:o.default.bool,tv:o.default.bool,embossed:o.default.bool},d={orientation:o.default.oneOf(["portrait","landscape"]),scan:o.default.oneOf(["progressive","interlace"]),aspectRatio:o.default.string,deviceAspectRatio:o.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:o.default.bool,colorIndex:o.default.bool,monochrome:o.default.bool,resolution:s,type:Object.keys(l)},c=a(d,["type"]),u=n({minAspectRatio:o.default.string,maxAspectRatio:o.default.string,minDeviceAspectRatio:o.default.string,maxDeviceAspectRatio:o.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:o.default.number,maxColor:o.default.number,minColorIndex:o.default.number,maxColorIndex:o.default.number,minMonochrome:o.default.number,maxMonochrome:o.default.number,minResolution:s,maxResolution:s},c),h=n(n({},l),u);t.default={all:h,types:l,matchers:d,features:u}},"./src/toQuery.ts":
/*!************************!*\
  !*** ./src/toQuery.ts ***!
  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,a.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
  !*** ./src/useMediaQuery.ts ***!
  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(/*! react */"react"),i=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),o=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),d=n(r(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,o.default)(r)]=e[r],t}),{})},u=function(){var e=(0,a.useRef)(!1);return(0,a.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,a.useState)(t),n=r[0],i=r[1];return(0,a.useEffect)((function(){var e=t();n!==e&&i(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,a.useContext)(d.default),r=function(){return c(e)||c(t)},n=(0,a.useState)(r),i=n[0],o=n[1];return(0,a.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(i,e)||o(e)}),[e,t]),i}(t),o=h(e);if(!o)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,i.default)(e,t||{},!!t)},n=(0,a.useState)(r),o=n[0],s=n[1],l=u();return(0,a.useEffect)((function(){if(l){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),o}(o,n),p=function(e){var t=(0,a.useState)(e.matches),r=t[0],n=t[1];return(0,a.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),f=u();return(0,a.useEffect)((function(){f&&r&&r(p)}),[p]),(0,a.useEffect)((function(){return function(){l&&l.dispose()}}),[]),p}},react:
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})(),N.exports=B(i);const L={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var I=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},E="object"==typeof M&&M&&M.Object===Object&&M,A=E,P="object"==typeof self&&self&&self.Object===Object&&self,F=A||P||Function("return this")(),H=F,R=function(){return H.Date.now()},z=/\s/;var V=function(e){for(var t=e.length;t--&&z.test(e.charAt(t)););return t},W=/^\s+/;var U=function(e){return e?e.slice(0,V(e)+1).replace(W,""):e},Y=F.Symbol,q=Y,Z=Object.prototype,Q=Z.hasOwnProperty,G=Z.toString,X=q?q.toStringTag:void 0;var K=function(e){var t=Q.call(e,X),r=e[X];try{e[X]=void 0;var n=!0}catch(e){}var a=G.call(e);return n&&(t?e[X]=r:delete e[X]),a},J=Object.prototype.toString;var ee=K,te=function(e){return J.call(e)},re=Y?Y.toStringTag:void 0;var ne=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":re&&re in Object(e)?ee(e):te(e)};var ae=function(e){return null!=e&&"object"==typeof e},ie=ne,oe=ae;var se=function(e){return"symbol"==typeof e||oe(e)&&"[object Symbol]"==ie(e)},le=U,de=I,ce=se,ue=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,pe=/^0o[0-7]+$/i,fe=parseInt;var me=function(e){if("number"==typeof e)return e;if(ce(e))return NaN;if(de(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=de(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=le(e);var r=he.test(e);return r||pe.test(e)?fe(e.slice(2),r?2:8):ue.test(e)?NaN:+e},ge=I,be=R,ye=me,ve=Math.max,we=Math.min;var $e,xe=function(e,t,r){var n,a,i,o,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var r=n,i=a;return n=a=void 0,d=t,o=e.apply(i,r)}function f(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=i}function m(){var e=be();if(f(e))return g(e);s=setTimeout(m,function(e){var r=t-(e-l);return u?we(r,i-(e-d)):r}(e))}function g(e){return s=void 0,h&&n?p(e):(n=a=void 0,o)}function b(){var e=be(),r=f(e);if(n=arguments,a=this,l=e,r){if(void 0===s)return function(e){return d=e,s=setTimeout(m,t),c?p(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,t),p(l)}return void 0===s&&(s=setTimeout(m,t)),o}return t=ye(t)||0,ge(r)&&(c=!!r.leading,i=(u="maxWait"in r)?ve(ye(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=a=s=void 0},b.flush=function(){return void 0===s?o:g(be())},b},Ce={};Object.defineProperty(Ce,"__esModule",{value:!0});var Se=e;const ke=e=>Se.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Se.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});ke.displayName="ExternalIcon",$e=Ce.ExternalIcon=ke;const Oe={Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}};var _e=Array.isArray,Me=_e,je=se,De=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Te=/^\w*$/;var Be=function(e,t){if(Me(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!je(e))||(Te.test(e)||!De.test(e)||null!=t&&e in Object(t))},Ne=ne,Le=I;var Ie,Ee=function(e){if(!Le(e))return!1;var t=Ne(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Ae=F["__core-js_shared__"],Pe=(Ie=/[^.]+$/.exec(Ae&&Ae.keys&&Ae.keys.IE_PROTO||""))?"Symbol(src)_1."+Ie:"";var Fe=function(e){return!!Pe&&Pe in e},He=Function.prototype.toString;var Re=function(e){if(null!=e){try{return He.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ze=Ee,Ve=Fe,We=I,Ue=Re,Ye=/^\[object .+?Constructor\]$/,qe=Function.prototype,Ze=Object.prototype,Qe=qe.toString,Ge=Ze.hasOwnProperty,Xe=RegExp("^"+Qe.call(Ge).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ke=function(e){return!(!We(e)||Ve(e))&&(ze(e)?Xe:Ye).test(Ue(e))},Je=function(e,t){return null==e?void 0:e[t]};var et=function(e,t){var r=Je(e,t);return Ke(r)?r:void 0},tt=et(Object,"create"),rt=tt;var nt=function(){this.__data__=rt?rt(null):{},this.size=0};var at=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},it=tt,ot=Object.prototype.hasOwnProperty;var st=function(e){var t=this.__data__;if(it){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ot.call(t,e)?t[e]:void 0},lt=tt,dt=Object.prototype.hasOwnProperty;var ct=tt;var ut=nt,ht=at,pt=st,ft=function(e){var t=this.__data__;return lt?void 0!==t[e]:dt.call(t,e)},mt=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ct&&void 0===t?"__lodash_hash_undefined__":t,this};function gt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}gt.prototype.clear=ut,gt.prototype.delete=ht,gt.prototype.get=pt,gt.prototype.has=ft,gt.prototype.set=mt;var bt=gt;var yt=function(){this.__data__=[],this.size=0};var vt=function(e,t){return e===t||e!=e&&t!=t},wt=vt;var $t=function(e,t){for(var r=e.length;r--;)if(wt(e[r][0],t))return r;return-1},xt=$t,Ct=Array.prototype.splice;var St=$t;var kt=$t;var Ot=$t;var _t=yt,Mt=function(e){var t=this.__data__,r=xt(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ct.call(t,r,1),--this.size,!0)},jt=function(e){var t=this.__data__,r=St(t,e);return r<0?void 0:t[r][1]},Dt=function(e){return kt(this.__data__,e)>-1},Tt=function(e,t){var r=this.__data__,n=Ot(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Bt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Bt.prototype.clear=_t,Bt.prototype.delete=Mt,Bt.prototype.get=jt,Bt.prototype.has=Dt,Bt.prototype.set=Tt;var Nt=Bt,Lt=et(F,"Map"),It=bt,Et=Nt,At=Lt;var Pt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ft=function(e,t){var r=e.__data__;return Pt(t)?r["string"==typeof t?"string":"hash"]:r.map},Ht=Ft;var Rt=Ft;var zt=Ft;var Vt=Ft;var Wt=function(){this.size=0,this.__data__={hash:new It,map:new(At||Et),string:new It}},Ut=function(e){var t=Ht(this,e).delete(e);return this.size-=t?1:0,t},Yt=function(e){return Rt(this,e).get(e)},qt=function(e){return zt(this,e).has(e)},Zt=function(e,t){var r=Vt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Qt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Qt.prototype.clear=Wt,Qt.prototype.delete=Ut,Qt.prototype.get=Yt,Qt.prototype.has=qt,Qt.prototype.set=Zt;var Gt=Qt,Xt=Gt;function Kt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return r.cache=i.set(a,o)||i,o};return r.cache=new(Kt.Cache||Xt),r}Kt.Cache=Xt;var Jt=Kt;var er=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tr=/\\(\\)?/g,rr=function(e){var t=Jt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(er,(function(e,r,n,a){t.push(n?a.replace(tr,"$1"):r||e)})),t}));var nr=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},ar=_e,ir=se,or=Y?Y.prototype:void 0,sr=or?or.toString:void 0;var lr=function e(t){if("string"==typeof t)return t;if(ar(t))return nr(t,e)+"";if(ir(t))return sr?sr.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},dr=lr;var cr=_e,ur=Be,hr=rr,pr=function(e){return null==e?"":dr(e)};var fr=function(e,t){return cr(e)?e:ur(e,t)?[e]:hr(pr(e))},mr=se;var gr=function(e){if("string"==typeof e||mr(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},br=fr,yr=gr;var vr=function(e,t){for(var r=0,n=(t=br(t,e)).length;null!=e&&r<n;)e=e[yr(t[r++])];return r&&r==n?e:void 0},wr=vr;var $r=function(e,t,r){var n=null==e?void 0:wr(e,t);return void 0===n?r:n};const xr=(e,t,r)=>t?$r(r,t)||$r(e,t):r||e,Cr=(e,t)=>{const r=t||e.defaultValue;return $r(e.collections,r)};var Sr;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Sr||(Sr={}));const kr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:Oe},defaultValue:"base"},Or=e=>t=>{const r=t.theme,n=Cr(kr,r[Sr.colorScheme]);return r.options&&r.options.color?xr(n,e,r.options.color):xr(n,e)},_r={Brand:{1:Or("Brand.1"),2:Or("Brand.2"),3:Or("Brand.3"),4:Or("Brand.4"),5:Or("Brand.5"),6:Or("Brand.6")},Primary:Or("Primary"),PrimaryDark:Or("PrimaryDark"),Secondary:Or("Secondary"),Accent:{Light:{1:Or("Accent.Light.1"),2:Or("Accent.Light.2"),3:Or("Accent.Light.3"),4:Or("Accent.Light.4"),5:Or("Accent.Light.5"),6:Or("Accent.Light.6")},Dark:{1:Or("Accent.Dark.1"),2:Or("Accent.Dark.2"),3:Or("Accent.Dark.3")}},Neutral:{1:Or("Neutral.1"),2:Or("Neutral.2"),3:Or("Neutral.3"),4:Or("Neutral.4"),5:Or("Neutral.5"),6:Or("Neutral.6"),7:Or("Neutral.7"),8:Or("Neutral.8")},Validation:{Green:{Text:Or("Validation.Green.Text"),Icon:Or("Validation.Green.Icon"),Border:Or("Validation.Green.Border"),Background:Or("Validation.Green.Background")},Orange:{Text:Or("Validation.Orange.Text"),Icon:Or("Validation.Orange.Icon"),Border:Or("Validation.Orange.Border"),Background:Or("Validation.Orange.Background"),Badge:Or("Validation.Orange.Badge")},Red:{Text:Or("Validation.Red.Text"),Icon:Or("Validation.Red.Icon"),Border:Or("Validation.Red.Border"),Background:Or("Validation.Red.Background")},Blue:{Text:Or("Validation.Blue.Text"),Icon:Or("Validation.Blue.Icon"),Border:Or("Validation.Blue.Border"),Background:Or("Validation.Blue.Background")}},Shadow:{Accent:Or("Shadow.Accent"),Red:Or("Shadow.Red"),Elevation:Or("Shadow.Elevation")}},Mr={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},jr={collections:{base:{D1:{fontFamily:Mr.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Mr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Mr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Mr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Mr.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Mr.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Mr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Mr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Mr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Mr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Mr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Mr.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Mr.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Mr.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Dr=e=>t=>{const r=t.theme,n=Cr(jr,r[Sr.textStyleScheme]);return r.options&&r.options.textStyle?xr(n,e,r.options.textStyle):xr(n,e)},Tr={D1:{fontFamily:Dr("D1.fontFamily"),fontSize:Dr("D1.fontSize"),fontWeight:Dr("D1.fontWeight"),lineHeight:Dr("D1.lineHeight"),letterSpacing:Dr("D1.letterSpacing")},D2:{fontFamily:Dr("D2.fontFamily"),fontSize:Dr("D2.fontSize"),fontWeight:Dr("D2.fontWeight"),lineHeight:Dr("D2.lineHeight"),letterSpacing:Dr("D2.letterSpacing")},D3:{fontFamily:Dr("D3.fontFamily"),fontSize:Dr("D3.fontSize"),fontWeight:Dr("D3.fontWeight"),lineHeight:Dr("D3.lineHeight"),letterSpacing:Dr("D3.letterSpacing")},D4:{fontFamily:Dr("D4.fontFamily"),fontSize:Dr("D4.fontSize"),fontWeight:Dr("D4.fontWeight"),lineHeight:Dr("D4.lineHeight"),letterSpacing:Dr("D4.letterSpacing")},DBody:{fontFamily:Dr("DBody.fontFamily"),fontSize:Dr("DBody.fontSize"),fontWeight:Dr("DBody.fontWeight"),lineHeight:Dr("DBody.lineHeight"),letterSpacing:Dr("DBody.letterSpacing")},H1:{fontFamily:Dr("H1.fontFamily"),fontSize:Dr("H1.fontSize"),fontWeight:Dr("H1.fontWeight"),lineHeight:Dr("H1.lineHeight"),letterSpacing:Dr("H1.letterSpacing")},H2:{fontFamily:Dr("H2.fontFamily"),fontSize:Dr("H2.fontSize"),fontWeight:Dr("H2.fontWeight"),lineHeight:Dr("H2.lineHeight"),letterSpacing:Dr("H2.letterSpacing")},H3:{fontFamily:Dr("H3.fontFamily"),fontSize:Dr("H3.fontSize"),fontWeight:Dr("H3.fontWeight"),lineHeight:Dr("H3.lineHeight"),letterSpacing:Dr("H3.letterSpacing")},H4:{fontFamily:Dr("H4.fontFamily"),fontSize:Dr("H4.fontSize"),fontWeight:Dr("H4.fontWeight"),lineHeight:Dr("H4.lineHeight"),letterSpacing:Dr("H4.letterSpacing")},H5:{fontFamily:Dr("H5.fontFamily"),fontSize:Dr("H5.fontSize"),fontWeight:Dr("H5.fontWeight"),lineHeight:Dr("H5.lineHeight"),letterSpacing:Dr("H5.letterSpacing")},H6:{fontFamily:Dr("H6.fontFamily"),fontSize:Dr("H6.fontSize"),fontWeight:Dr("H6.fontWeight"),lineHeight:Dr("H6.lineHeight"),letterSpacing:Dr("H6.letterSpacing")},Body:{fontFamily:Dr("Body.fontFamily"),fontSize:Dr("Body.fontSize"),fontWeight:Dr("Body.fontWeight"),lineHeight:Dr("Body.lineHeight"),letterSpacing:Dr("Body.letterSpacing")},BodySmall:{fontFamily:Dr("BodySmall.fontFamily"),fontSize:Dr("BodySmall.fontSize"),fontWeight:Dr("BodySmall.fontWeight"),lineHeight:Dr("BodySmall.lineHeight"),letterSpacing:Dr("BodySmall.letterSpacing")},XSmall:{fontFamily:Dr("XSmall.fontFamily"),fontSize:Dr("XSmall.fontSize"),fontWeight:Dr("XSmall.fontWeight"),lineHeight:Dr("XSmall.lineHeight"),letterSpacing:Dr("XSmall.letterSpacing")}},Br=e=>{switch(e){case 700:case"bold":return Mr.Bold;case 600:case"semibold":return Mr.Semibold;case 300:case"light":return Mr.Light;case 400:case"regular":return Mr.Regular;default:return""}},Nr=(e,t)=>r=>{const n=Tr[e].fontFamily(r),a=Tr[e].fontWeight(r);return Object.values(Mr).includes(n)?x`
                font-family: ${Br(t)||Br(a)||n};
                font-weight: normal !important;
            `:x`
            font-family: ${n};
            font-weight: ${(Lr(t)||a)??"normal"};
        `},Lr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ir=(e,t,r=!1)=>n=>{const a=Tr[e],i=a.fontSize(n);return x`
            ${Nr(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${x`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},Er=(e=!1,t=!1)=>t?x`
            display: block;
        `:e?x`
            display: inline;
        `:x`
            display: block;
        `;var Ar;!function(e){e.D1=$.h1`
        ${e=>x`
                ${Ir("D1",e.weight,e.paragraph)}
                color: ${_r.Neutral[1]};
                ${Er(e.inline,e.paragraph)}
            `}
    `,e.D2=$.h1`
        ${e=>x`
                ${Ir("D2",e.weight,e.paragraph)}
                color: ${_r.Neutral[1]};
                ${Er(e.inline,e.paragraph)}
            `}
    `,e.D3=$.h1`
        ${e=>x`
                ${Ir("D3",e.weight,e.paragraph)}
                color: ${_r.Neutral[1]};
                ${Er(e.inline,e.paragraph)}
            `}
    `,e.D4=$.h1`
        ${e=>x`
                ${Ir("D4",e.weight,e.paragraph)}
                color: ${_r.Neutral[1]};
                ${Er(e.inline,e.paragraph)}
            `}
    `,e.DBody=$.h1`
        ${e=>x`
                ${Ir("DBody",e.weight,e.paragraph)}
                color: ${_r.Neutral[1]};
                ${Er(e.inline,e.paragraph)}
            `}
    `,e.H1=$.h1`
        ${e=>x`
                ${Ir("H1",e.weight,e.paragraph)}
                color: ${_r.Neutral[1]};
                ${Er(e.inline,e.paragraph)}
            `}
    `,e.H2=$.h2`
        ${e=>x`
                ${Ir("H2",e.weight,e.paragraph)}
                color: ${_r.Neutral[1]};
                ${Er(e.inline,e.paragraph)}
            `}
    `,e.H3=$.h3`
        ${e=>x`
                ${Ir("H3",e.weight,e.paragraph)}
                color: ${_r.Neutral[1]};
                ${Er(e.inline,e.paragraph)}
            `}
    `,e.H4=$.h4`
        ${e=>x`
                ${Ir("H4",e.weight,e.paragraph)}
                color: ${_r.Neutral[1]};
                ${Er(e.inline,e.paragraph)}
            `}
    `,e.H5=$.h5`
        ${e=>x`
                ${Ir("H5",e.weight,e.paragraph)}
                color: ${_r.Neutral[1]};
                ${Er(e.inline,e.paragraph)}
            `}
    `,e.H6=$.h6`
        ${e=>x`
                ${Ir("H6",e.weight,e.paragraph)}
                color: ${_r.Neutral[1]};
                ${Er(e.inline,e.paragraph)}
            `}
    `,e.Body=$.p`
        ${e=>x`
                ${Ir("Body",e.weight,e.paragraph)}
                color: ${_r.Neutral[1]};
                ${Er(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=$.p`
        ${e=>x`
                ${Ir("BodySmall",e.weight,e.paragraph)}
                color: ${_r.Neutral[1]};
                ${Er(e.inline,e.paragraph)}
            `}
    `,e.XSmall=$.span`
        ${e=>x`
                ${Ir("XSmall",e.weight,e.paragraph)}
                color: ${_r.Neutral[1]};
                ${Er(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Hr({...e,textStyle:"Body"}),Small:e=>Hr({...e,textStyle:"BodySmall"})}}(Ar||(Ar={}));const Pr=$.a`
    ${e=>x`
            ${Ir(e.textStyle,e.weight)}
            color: ${_r.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${_r.Secondary};

                svg {
                    color: ${_r.Secondary};
                }
            }
        `}
`,Fr=$($e)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Hr=({external:e=!1,children:n,...a})=>t(Pr,{...a,children:[n,e&&r(Fr,{})]}),Rr=$.div`
    border-radius: 0.5rem;
    background: ${_r.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,zr=({children:e,...t})=>{const n=t["data-testid"]||"card";return r(Rr,{...t,"data-testid":n,children:"string"==typeof e?r(Ar.Body,{children:e}):e})},Vr=$.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return x`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Wr=$.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=x`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=x`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=x`
                transition: none;
            `),t}}
`,Ur=({show:e=!1,rootId:t,onOverlayClick:n,children:a,backgroundOpacity:d,backgroundBlur:c=!0,disableTransition:u=!1,enableOverlayClick:h=!1,zIndex:p,id:f})=>{const[m,g]=o(null),[b,y]=o(),v=s(),w=s(null),$=a&&i.cloneElement(a,{ref:w}),x=f?`lifesg-ds-overlay-root-${f}`:"lifesg-ds-overlay-root";l((()=>{if(e){const e=O();if(C(e),!e){const e=setTimeout((()=>{M("add")}),200);return()=>clearTimeout(e)}}else if(!v.current){const e=setTimeout((()=>{M("remove")}),200);return()=>clearTimeout(e)}}),[e]),l((()=>{g(k());const e=O();return C(e),e||_(),()=>{M("remove")}}),[]);const C=e=>{v.current=e,y(e)},k=()=>document&&t?document.getElementById(t):document?document.body:null,O=()=>document.body.classList.contains(qr),_=()=>{if(!document.getElementById(Yr)){const e=document.createElement("style");e.id=Yr;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${qr} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${qr}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},M=e=>{const t=document.body.classList.contains(qr);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(qr):document.body.classList.add(qr)},j=e=>{const t=w.current?.firstChild;t&&t.contains(e.target)||n&&h&&(e.preventDefault(),n())};return m?S.createPortal(r(Vr,{id:x,"data-testid":x,$show:e,zIndex:p,$stacked:b,children:a&&r(Wr,{"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:d||(b?.5:.8),$backgroundBlur:c,$disableTransition:u,$enableOverlayClick:h,onClick:j,children:$})}),m):null},Yr="lifesg-ds-overlay-stylesheet",qr="lifesg-ds-overlay-open",Zr=e=>Object.keys(L).reduce(((t,r)=>{const n=L[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Qr=Zr("max-width"),Gr=(Zr("min-width"),$.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${Qr.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`),Xr=({id:e="modal",show:t,animationFrom:n="bottom",children:a,enableOverlayClick:i=!0,rootComponentId:s,zIndex:d,onOverlayClick:c,dismissKeyboardOnShow:u=!0,...h})=>{const[p,f]=o(),[m,g]=o();l((()=>window.visualViewport?(y(),window.visualViewport.addEventListener("resize",y),()=>{window.visualViewport.removeEventListener("resize",y)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),l((()=>{t&&u&&document.activeElement?.blur?.()}),[t]);const b=()=>{const e=.01*window.innerHeight;f(e)},y=()=>{const e=.01*window.visualViewport.height;f(e),g(window.visualViewport.offsetTop)};return r(Ur,{"data-testid":`${e}-overlay`,show:t,enableOverlayClick:i,onOverlayClick:c,id:e,rootId:s,zIndex:d,children:r(Gr,{show:t,animationFrom:n,"data-testid":e,verticalHeight:p,offsetTop:m,...h,children:a})})};var Kr,Jr={};Object.defineProperty(Jr,"__esModule",{value:!0});var en=e;const tn=e=>en.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:en.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});tn.displayName="CrossIcon",Kr=Jr.CrossIcon=tn;const rn=$.button`
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

        ${({$highlight:e})=>e&&x`
                background-color: ${_r.Neutral[7]};
            `}
    }
`,nn=i.forwardRef((({children:e,focusHighlight:t=!0,focusOutline:n="none",...a},i)=>r(rn,{ref:i,$outline:n,$highlight:t,...a,children:e}))),an=$.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${_r.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Qr.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,on=$(nn)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${_r.Accent.Light[1]};
    }
`,sn=$(Kr)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${_r.Neutral[4]};
`,ln="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",dn=$.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?x`
            visibility: visible;
            opacity: 1;
            transition: ${ln};
            z-index: 2;
        `:x`
            visibility: hidden;
            opacity: 0;
            transition: ${ln};
            z-index: -1;
        `}
    ${e=>(e=>{switch(e){case"top-center":return x`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return x`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return x`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return x`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return x`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return x`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `}})(e.$offset)}

	${Qr.mobileL} {
        display: none;
    }
`,cn=$((({id:e="modal-box",children:n,onClose:a,showCloseButton:i=!0,...o})=>t(an,{"data-testid":e,...o,onClick:e=>{e.stopPropagation()},children:[i&&r(on,{type:"button",onClick:a,"data-testid":"close-button",focusHighlight:!1,children:r(sn,{})}),n]})))`
    padding: 3.5rem 1.25rem 2.5rem;
`;$.div`
    position: relative;
    width: fit-content;
`,$.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`;const un=({children:e,visible:a,onMobileClose:i,...d})=>{const c=d["data-testid"]||"popover",[u,h]=o("none"),p=s(null),f=N.exports.useMediaQuery({maxWidth:L.mobileL}),m=s(u);l((()=>(y(),window.addEventListener("resize",xe(g,300)),()=>{window.removeEventListener("resize",xe(g,300))})),[]);const g=()=>{y()},b=()=>{i&&i()},y=()=>{const e=v();var t;e&&(t=e,m.current=t,h(t))},v=()=>{if(p.current){const e=p.current.getBoundingClientRect(),t=24,r=e.y<t,n=window.innerWidth-t;return e.x<t?r?"top-left":"left":e.x+e.width>n?r?"top-right":"right":("top-left"===m.current||"left"===m.current)&&e.x-e.width/2>t||("top-right"===m.current||"right"===m.current)&&e.x+2*e.width<n?r?"top-center":"none":void 0}},w=()=>"string"==typeof e?r(Ar.BodySmall,{children:e}):e;return t(n,{children:[r(dn,{ref:p,"data-testid":c,$visible:a,$offset:u,...d,children:r(zr,{children:w()})}),f&&r(Xr,{show:a,onOverlayClick:b,children:r(cn,{onClose:b,children:w()})})]})},hn=$.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${_r.Primary};
    }
`,pn=$.div`
    display: inline;
    position: relative;
    width: fit-content;
`,fn=({addonType:e="popover",icon:t,"data-testid":n,...a})=>r(hn,{"data-testid":n,...a,children:t||r(_,{id:`${e}-icon`})}),mn=({addon:e})=>{const[n,a]=o(!1),i=s(),d=s(!1),c=N.exports.useMediaQuery({maxWidth:L.mobileL}),u=e=>{d.current=e,a(e)};l((()=>{if(!c)return document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}}),[]);const h=e=>{i&&!i.current.contains(e.target)&&d.current&&u(!1)};return t(pn,{ref:i,id:"addon-popover-wrapper",children:[r(un,{visible:n,id:e.id,"data-testid":e["data-testid"],onMobileClose:()=>{n&&u(!1)},children:e.content}),r(fn,{addonType:e.type,icon:e.icon,id:`popover-hoc-trigger${e["data-testid"]&&`-${e["data-testid"]}`}`,onClick:()=>u(!n),"aria-label":"popover-button",type:"button"})]})};var gn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(gn||(gn={}));const bn=$.label`
    ${Ir("H5","semibold")}

    color: ${e=>e.disabled?_r.Neutral[4](e):_r.Neutral[3](e)};
    margin-bottom: 0.5rem;
    display: inline-block;

    #popover-hoc-wrapper {
        display: inline;
    }

    #popover-hoc-button {
        vertical-align: bottom;
    }
`,yn=$(Ar.H6)`
    color: ${_r.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`,vn=$(Ar.BodySmall)`
    color: ${e=>e.disabled?_r.Neutral[4](e):_r.Neutral[3](e)};
`,wn=({children:e,addon:n,subtitle:a,"data-testid":i,...o})=>t(bn,{...o,children:[e,n&&n.type&&("popover"===n.type?n&&r(mn,{addon:n}):null),"string"==typeof a?r(vn,{as:"span","data-testid":i?`${i}-subtitle`:"subtitle",...o,children:a}):a]}),$n=$.div`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`,xn=({label:e,errorMessage:n,id:a,disabled:i,children:o,"data-error-testid":s})=>{const l=()=>s||(a?`${a}-error-message`:"error-message"),u=()=>!!n;return t($n,{children:[e&&r(wn,"string"==typeof e?{htmlFor:`${a}-base`,"data-testid":a?`${a}-label`:"form-label",disabled:i,children:e}:{htmlFor:`${a}-base`,"data-testid":a?`${a}-label`:"form-label",disabled:i,...e}),(()=>{const e={"aria-invalid":u(),"aria-describedby":u()&&l()};return d.map(o,(t=>c(t,e)))})(),n&&r(yn,{id:l(),weight:"semibold",tabIndex:0,"data-testid":l(),children:n})]})};var Cn={exports:{}};Cn.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),a=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(a,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),a=t.clone().add(n,d),i=r-a<0,o=t.clone().add(n+(i?-1:1),d);return+(-(n+(r-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:o,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",w={};w[v]=g;var $=function(e){return e instanceof k},x=function e(t,r,n){var a;if(!t)return v;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(a=i),r&&(w[i]=r,a=i);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=t.name;w[s]=t,a=s}return!n&&a&&(v=a),a||!n&&v},C=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},S=y;S.l=x,S.i=$,S.w=function(e,t){return C(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function g(e){this.$L=x(e.locale,null,!0),this.parse(e)}var b=g.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(f);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return S},b.isValid=function(){return!(this.$d.toString()===p)},b.isSame=function(e,t){var r=C(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return C(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<C(e)},b.$g=function(e,t,r){return S.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!S.u(t)||t,c=S.p(e),p=function(e,t){var a=S.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?a:a.endOf(s)},f=function(e,t){return S.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},m=this.$W,g=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?p(1,0):p(31,11);case d:return n?p(1,g):p(0,g+1);case l:var v=this.$locale().weekStart||0,w=(m<v?m+7:m)-v;return p(n?b-w:b+(6-w),g);case s:case h:return f(y+"Hours",0);case o:return f(y+"Minutes",1);case i:return f(y+"Seconds",2);case a:return f(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=S.p(e),c="set"+(this.$u?"UTC":""),p=(r={},r[s]=c+"Date",r[h]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[o]=c+"Hours",r[i]=c+"Minutes",r[a]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],f=l===s?this.$D+(t-this.$W):t;if(l===d||l===u){var m=this.clone().set(h,1);m.$d[p](f),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[S.p(e)]()},b.add=function(n,c){var h,p=this;n=Number(n);var f=S.p(c),m=function(e){var t=C(p);return S.w(t.date(t.date()+Math.round(e*n)),p)};if(f===d)return this.set(d,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===s)return m(1);if(f===l)return m(7);var g=(h={},h[i]=t,h[o]=r,h[a]=e,h)[f]||1,b=this.$d.getTime()+n*g;return S.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||p;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=S.z(this),i=this.$H,o=this.$m,s=this.$M,l=r.weekdays,d=r.months,c=function(e,r,a,i){return e&&(e[r]||e(t,n))||a[r].slice(0,i)},u=function(e){return S.s(i%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:S.s(s+1,2,"0"),MMM:c(r.monthsShort,s,d,3),MMMM:c(d,s),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:c(r.weekdaysMin,this.$W,l,2),ddd:c(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:S.s(i,2,"0"),h:u(1),hh:u(2),a:h(i,o,!0),A:h(i,o,!1),m:String(o),mm:S.s(o,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:a};return n.replace(m,(function(e,t){return t||f[e]||a.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,p){var f,m=S.p(h),g=C(n),b=(g.utcOffset()-this.utcOffset())*t,y=this-g,v=S.m(this,g);return v=(f={},f[u]=v/12,f[d]=v,f[c]=v/3,f[l]=(y-b)/6048e5,f[s]=(y-b)/864e5,f[o]=y/r,f[i]=y/t,f[a]=y/e,f)[m]||y,p?v:S.a(v)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return w[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=x(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return S.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},g}(),O=k.prototype;return C.prototype=O,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),C.extend=function(e,t){return e.$i||(e(t,k,C),e.$i=!0),C},C.locale=x,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=w[v],C.Ls=w,C.p={},C}();var Sn=Cn.exports,kn=function(e,t){return kn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},kn(e,t)};var On=function(){return On=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},On.apply(this,arguments)};var _n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Mn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},jn="object"==typeof _n&&_n&&_n.Object===Object&&_n,Dn="object"==typeof self&&self&&self.Object===Object&&self,Tn=jn||Dn||Function("return this")(),Bn=Tn,Nn=function(){return Bn.Date.now()},Ln=/\s/;var In=function(e){for(var t=e.length;t--&&Ln.test(e.charAt(t)););return t},En=/^\s+/;var An=function(e){return e?e.slice(0,In(e)+1).replace(En,""):e},Pn=Tn.Symbol,Fn=Pn,Hn=Object.prototype,Rn=Hn.hasOwnProperty,zn=Hn.toString,Vn=Fn?Fn.toStringTag:void 0;var Wn=function(e){var t=Rn.call(e,Vn),r=e[Vn];try{e[Vn]=void 0;var n=!0}catch(e){}var a=zn.call(e);return n&&(t?e[Vn]=r:delete e[Vn]),a},Un=Object.prototype.toString;var Yn=Wn,qn=function(e){return Un.call(e)},Zn=Pn?Pn.toStringTag:void 0;var Qn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Zn&&Zn in Object(e)?Yn(e):qn(e)},Gn=function(e){return null!=e&&"object"==typeof e};var Xn=An,Kn=Mn,Jn=function(e){return"symbol"==typeof e||Gn(e)&&"[object Symbol]"==Qn(e)},ea=/^[-+]0x[0-9a-f]+$/i,ta=/^0b[01]+$/i,ra=/^0o[0-7]+$/i,na=parseInt;var aa=Mn,ia=Nn,oa=function(e){if("number"==typeof e)return e;if(Jn(e))return NaN;if(Kn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Kn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Xn(e);var r=ta.test(e);return r||ra.test(e)?na(e.slice(2),r?2:8):ea.test(e)?NaN:+e},sa=Math.max,la=Math.min;var da=function(e,t,r){var n,a,i,o,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var r=n,i=a;return n=a=void 0,d=t,o=e.apply(i,r)}function f(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=i}function m(){var e=ia();if(f(e))return g(e);s=setTimeout(m,function(e){var r=t-(e-l);return u?la(r,i-(e-d)):r}(e))}function g(e){return s=void 0,h&&n?p(e):(n=a=void 0,o)}function b(){var e=ia(),r=f(e);if(n=arguments,a=this,l=e,r){if(void 0===s)return function(e){return d=e,s=setTimeout(m,t),c?p(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,t),p(l)}return void 0===s&&(s=setTimeout(m,t)),o}return t=oa(t)||0,aa(r)&&(c=!!r.leading,i=(u="maxWait"in r)?sa(oa(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=a=s=void 0},b.flush=function(){return void 0===s?o:g(ia())},b},ca=da,ua=Mn;var ha=function(e,t,r){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ua(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),ca(e,t,{leading:n,maxWait:t,trailing:a})},pa=function(e,t,r,n){switch(t){case"debounce":return da(e,r,n);case"throttle":return ha(e,r,n);default:return e}},fa=function(e){return"function"==typeof e},ma=function(){return"undefined"==typeof window},ga=function(e){return e instanceof Element||e instanceof HTMLDocument},ba=function(e,t,r,n){return function(a){var i=a.width,o=a.height;t((function(t){return t.width===i&&t.height===o||t.width===i&&!n||t.height===o&&!r?t:(e&&fa(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!ma()){t&&t.current&&(r.targetRef.current=t.current);var a=r.getElement();a&&(r.observableElement&&r.observableElement===a||(r.observableElement=a,r.resizeObserver.observe(a,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(ma())return null;if(t)return document.querySelector(t);if(n&&ga(n))return n;if(r.targetRef&&ga(r.targetRef.current))return r.targetRef.current;var a=k(r);if(!a)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,a=void 0===n||n,i=t.handleHeight,o=void 0===i||i,s=t.onResize;if(a||o){var l=ba(s,r.setState.bind(r),a,o);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,a=t.height;!r.skipOnMount&&!ma()&&l({width:n,height:a}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return fa(t)?"renderProp":fa(n)?"childFunction":u(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,a=t.refreshMode,i=t.refreshRate,o=void 0===i?1e3:i,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=h(),r.observableElement=null,ma()||(r.resizeHandler=pa(r.createResizeHandler,a,o,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}kn(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){ma()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,n=t.children,i=t.nodeType,o=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=n)(l);case"child":if((e=n).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=n).map((function(e){return!!e&&c(e,l)}));default:return a.createElement(o,null)}}}(p);var ya=ma()?l:f;function va(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,a=e.refreshRate,i=void 0===a?1e3:a,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,p=e.targetRef,f=e.observerOptions,m=e.onResize,g=s(r),b=s(null),y=null!=p?p:b,v=s(),w=o({width:void 0,height:void 0}),$=w[0],x=w[1];return ya((function(){if(!ma()){var e=ba(m,x,c,h);v.current=pa((function(t){(c||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,a=r.height;!g.current&&!ma()&&e({width:n,height:a}),g.current=!1}))}),n,i,l);var t=new window.ResizeObserver(v.current);return y.current&&t.observe(y.current,f),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,i,l,c,h,m,f,y.current]),On({ref:y},$)}let wa=Ea();const $a=e=>Ba(e,wa);let xa=Ea();$a.write=e=>Ba(e,xa);let Ca=Ea();$a.onStart=e=>Ba(e,Ca);let Sa=Ea();$a.onFrame=e=>Ba(e,Sa);let ka=Ea();$a.onFinish=e=>Ba(e,ka);let Oa=[];$a.setTimeout=(e,t)=>{let r=$a.now()+t,n=()=>{let e=Oa.findIndex((e=>e.cancel==n));~e&&Oa.splice(e,1),Da-=~e?1:0},a={time:r,handler:e,cancel:n};return Oa.splice(_a(r),0,a),Da+=1,Na(),a};let _a=e=>~(~Oa.findIndex((t=>t.time>e))||~Oa.length);$a.cancel=e=>{Ca.delete(e),Sa.delete(e),ka.delete(e),wa.delete(e),xa.delete(e)},$a.sync=e=>{Ta=!0,$a.batchedUpdates(e),Ta=!1},$a.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,$a.onStart(r)}return n.handler=e,n.cancel=()=>{Ca.delete(r),t=null},n};let Ma="undefined"!=typeof window?window.requestAnimationFrame:()=>{};$a.use=e=>Ma=e,$a.now="undefined"!=typeof performance?()=>performance.now():Date.now,$a.batchedUpdates=e=>e(),$a.catch=console.error,$a.frameLoop="always",$a.advance=()=>{"demand"!==$a.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Ia()};let ja=-1,Da=0,Ta=!1;function Ba(e,t){Ta?(t.delete(e),e(0)):(t.add(e),Na())}function Na(){ja<0&&(ja=0,"demand"!==$a.frameLoop&&Ma(La))}function La(){~ja&&(Ma(La),$a.batchedUpdates(Ia))}function Ia(){let e=ja;ja=$a.now();let t=_a(ja);t&&(Aa(Oa.splice(0,t),(e=>e.handler())),Da-=t),Da?(Ca.flush(),wa.flush(e?Math.min(64,ja-e):16.667),Sa.flush(),xa.flush(),ka.flush()):ja=-1}function Ea(){let e=new Set,t=e;return{add(r){Da+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Da-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Da-=t.size,Aa(t,(t=>t(r)&&e.add(t))),Da+=e.size,t=e)}}}function Aa(e,t){e.forEach((e=>{try{t(e)}catch(e){$a.catch(e)}}))}function Pa(){}const Fa={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Ha(e,t){if(Fa.arr(e)){if(!Fa.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}const Ra=(e,t)=>e.forEach(t);function za(e,t,r){if(Fa.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}const Va=e=>Fa.und(e)?[]:Fa.arr(e)?e:[e];function Wa(e,t){if(e.size){const r=Array.from(e);e.clear(),Ra(r,t)}}const Ua=(e,...t)=>Wa(e,(e=>e(...t))),Ya=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let qa,Za,Qa=null,Ga=!1,Xa=Pa;var Ka=Object.freeze({__proto__:null,get createStringInterpolator(){return qa},get to(){return Za},get colors(){return Qa},get skipAnimation(){return Ga},get willAdvance(){return Xa},assign:e=>{e.to&&(Za=e.to),e.now&&($a.now=e.now),void 0!==e.colors&&(Qa=e.colors),null!=e.skipAnimation&&(Ga=e.skipAnimation),e.createStringInterpolator&&(qa=e.createStringInterpolator),e.requestAnimationFrame&&$a.use(e.requestAnimationFrame),e.batchedUpdates&&($a.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Xa=e.willAdvance),e.frameLoop&&($a.frameLoop=e.frameLoop)}});const Ja=new Set;let ei=[],ti=[],ri=0;const ni={get idle(){return!Ja.size&&!ei.length},start(e){ri>e.priority?(Ja.add(e),$a.onStart(ai)):(ii(e),$a(si))},advance:si,sort(e){if(ri)$a.onFrame((()=>ni.sort(e)));else{const t=ei.indexOf(e);~t&&(ei.splice(t,1),oi(e))}},clear(){ei=[],Ja.clear()}};function ai(){Ja.forEach(ii),Ja.clear(),$a(si)}function ii(e){ei.includes(e)||oi(e)}function oi(e){ei.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(ei,(t=>t.priority>e.priority)),0,e)}function si(e){const t=ti;for(let r=0;r<ei.length;r++){const n=ei[r];ri=n.priority,n.idle||(Xa(n),n.advance(e),n.idle||t.push(n))}return ri=0,ti=ei,ti.length=0,ei=t,ei.length>0}const li="[-+]?\\d*\\.?\\d+",di=li+"%";function ci(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const ui=new RegExp("rgb"+ci(li,li,li)),hi=new RegExp("rgba"+ci(li,li,li,li)),pi=new RegExp("hsl"+ci(li,di,di)),fi=new RegExp("hsla"+ci(li,di,di,li)),mi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,gi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,bi=/^#([0-9a-fA-F]{6})$/,yi=/^#([0-9a-fA-F]{8})$/;function vi(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function wi(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,a=2*r-n,i=vi(a,n,e+1/3),o=vi(a,n,e),s=vi(a,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function $i(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function xi(e){return(parseFloat(e)%360+360)%360/360}function Ci(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Si(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function ki(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=bi.exec(e))?parseInt(t[1]+"ff",16)>>>0:Qa&&void 0!==Qa[e]?Qa[e]:(t=ui.exec(e))?($i(t[1])<<24|$i(t[2])<<16|$i(t[3])<<8|255)>>>0:(t=hi.exec(e))?($i(t[1])<<24|$i(t[2])<<16|$i(t[3])<<8|Ci(t[4]))>>>0:(t=mi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=yi.exec(e))?parseInt(t[1],16)>>>0:(t=gi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=pi.exec(e))?(255|wi(xi(t[1]),Si(t[2]),Si(t[3])))>>>0:(t=fi.exec(e))?(wi(xi(t[1]),Si(t[2]),Si(t[3]))|Ci(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Oi=(e,t,r)=>{if(Fa.fun(e))return e;if(Fa.arr(e))return Oi({range:e,output:t,extrapolate:r});if(Fa.str(e.output[0]))return qa(e);const n=e,a=n.output,i=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,a,i,o,s,l){let d=l?l(e):e;if(d<t){if("identity"===o)return d;"clamp"===o&&(d=t)}if(d>r){if("identity"===s)return d;"clamp"===s&&(d=r)}if(n===a)return n;if(t===r)return e<=t?n:a;t===-1/0?d=-d:r===1/0?d-=t:d=(d-t)/(r-t);d=i(d),n===-1/0?d=-d:a===1/0?d+=n:d=d*(a-n)+n;return d}(e,i[t],i[t+1],a[t],a[t+1],l,o,s,n.map)}};const _i=1.70158,Mi=1.525*_i,ji=_i+1,Di=2*Math.PI/3,Ti=2*Math.PI/4.5,Bi=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Ni={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>ji*e*e*e-_i*e*e,easeOutBack:e=>1+ji*Math.pow(e-1,3)+_i*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Mi)/2:(Math.pow(2*e-2,2)*((Mi+1)*(2*e-2)+Mi)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Di),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Di)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Ti)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Ti)/2+1,easeInBounce:e=>1-Bi(1-e),easeOutBounce:Bi,easeInOutBounce:e=>e<.5?(1-Bi(1-2*e))/2:(1+Bi(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,a="end"===t?Math.floor(n):Math.ceil(n);return i=0,o=1,s=a/e,Math.min(Math.max(s,i),o);var i,o,s}};function Li(){return Li=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Li.apply(this,arguments)}const Ii=Symbol.for("FluidValue.get"),Ei=Symbol.for("FluidValue.observers"),Ai=e=>Boolean(e&&e[Ii]),Pi=e=>e&&e[Ii]?e[Ii]():e,Fi=e=>e[Ei]||null;function Hi(e,t){let r=e[Ei];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Ri{constructor(e){if(this[Ii]=void 0,this[Ei]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");zi(this,e)}}const zi=(e,t)=>Ui(e,Ii,t);function Vi(e,t){if(e[Ii]){let r=e[Ei];r||Ui(e,Ei,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Wi(e,t){let r=e[Ei];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Ei]=null,e.observerRemoved&&e.observerRemoved(n,t)}}const Ui=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Yi=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,qi=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Zi=new RegExp(`(${Yi.source})(%|[a-z]+)`,"i"),Qi=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Gi=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Xi=e=>{const[t,r]=Ki(e);if(!t||Ya())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Gi.test(r)?Xi(r):r||e},Ki=e=>{const t=Gi.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]};let Ji;const eo=(e,t,r,n,a)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${a})`,to=e=>{Ji||(Ji=Qa?new RegExp(`(${Object.keys(Qa).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Pi(e).replace(Gi,Xi).replace(qi,ki).replace(Ji,ki))),r=t.map((e=>e.match(Yi).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Oi(Li({},e,{output:t}))));return e=>{var r;const a=!Zi.test(t[0])&&(null==(r=t.find((e=>Zi.test(e))))?void 0:r.replace(Yi,""));let i=0;return t[0].replace(Yi,(()=>`${n[i++](e)}${a||""}`)).replace(Qi,eo)}},ro="react-spring: ",no=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${ro}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},ao=no(console.warn);const io=no(console.warn);function oo(e){return Fa.str(e)&&("#"==e[0]||/\d/.test(e)||!Ya()&&Gi.test(e)||e in(Qa||{}))}const so=Ya()?l:f,lo=()=>{const e=s(!1);return so((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function co(){const e=o()[1],t=lo();return()=>{t.current&&e(Math.random())}}const uo=e=>l(e,ho),ho=[];function po(e){const t=s();return l((()=>{t.current=e})),t.current}const fo=Symbol.for("Animated:node"),mo=e=>e&&e[fo],go=(e,t)=>{return r=e,n=fo,a=t,Object.defineProperty(r,n,{value:a,writable:!0,configurable:!0});var r,n,a},bo=e=>e&&e[fo]&&e[fo].getPayload();class yo{constructor(){this.payload=void 0,go(this,this)}getPayload(){return this.payload||[]}}class vo extends yo{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Fa.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new vo(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Fa.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Fa.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class wo extends vo{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Oi({output:[e,e]})}static create(e){return new wo(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Fa.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Oi({output:[this.getValue(),e]})),this._value=0,super.reset()}}const $o={dependencies:null};class xo extends yo{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return za(this.source,((r,n)=>{var a;(a=r)&&a[fo]===a?t[n]=r.getValue(e):Ai(r)?t[n]=Pi(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Ra(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return za(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){$o.dependencies&&Ai(e)&&$o.dependencies.add(e);const t=bo(e);t&&Ra(t,(e=>this.add(e)))}}class Co extends xo{constructor(e){super(e)}static create(e){return new Co(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(So)),!0)}}function So(e){return(oo(e)?wo:vo).create(e)}function ko(e){const t=mo(e);return t?t.constructor:Fa.arr(e)?Co:oo(e)?wo:vo}function Oo(){return Oo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Oo.apply(this,arguments)}const _o=(e,t)=>{const r=!Fa.fun(e)||e.prototype&&e.prototype.isReactComponent;return m(((n,i)=>{const o=s(null),d=r&&g((e=>{o.current=function(e,t){e&&(Fa.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[c,u]=function(e,t){const r=new Set;$o.dependencies=r,e.style&&(e=Oo({},e,{style:t.createAnimatedStyle(e.style)}));return e=new xo(e),$o.dependencies=null,[e,r]}(n,t),h=co(),p=()=>{const e=o.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},f=new Mo(p,u),m=s();so((()=>(m.current=f,Ra(u,(e=>Vi(e,f))),()=>{m.current&&(Ra(m.current.deps,(e=>Wi(e,m.current))),$a.cancel(m.current.update))}))),l(p,[]),uo((()=>()=>{const e=m.current;Ra(e.deps,(t=>Wi(t,e)))}));const b=t.getComponentProps(c.getValue());return a.createElement(e,Oo({},b,{ref:d}))}))};class Mo{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&$a.write(this.update)}}const jo=Symbol.for("AnimatedComponent"),Do=e=>Fa.str(e)?e:e&&Fa.str(e.displayName)?e.displayName:Fa.fun(e)&&e.name||null;function To(){return To=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},To.apply(this,arguments)}function Bo(e,...t){return Fa.fun(e)?e(...t):e}const No=(e,t)=>!0===e||!!(t&&e&&(Fa.fun(e)?e(t):Va(e).includes(t))),Lo=(e,t)=>Fa.obj(e)?t&&e[t]:e,Io=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Eo=e=>e,Ao=(e,t=Eo)=>{let r=Po;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const a of r){const r=t(e[a],a);Fa.und(r)||(n[a]=r)}return n},Po=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Fo={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ho(e){const t=function(e){const t={};let r=0;if(za(e,((e,n)=>{Fo[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return za(e,((e,n)=>n in t||(r[n]=e))),r}return To({},e)}function Ro(e){return e=Pi(e),Fa.arr(e)?e.map(Ro):oo(e)?Ka.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function zo(e){return Fa.fun(e)||Fa.arr(e)&&Fa.obj(e[0])}const Vo=To({},{tension:170,friction:26},{mass:1,damping:1,easing:Ni.linear,clamp:!1});class Wo{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Vo)}}function Uo(e,t){if(Fa.und(t.decay)){const r=!Fa.und(t.tension)||!Fa.und(t.friction);!r&&Fa.und(t.frequency)&&Fa.und(t.damping)&&Fa.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}const Yo=[];class qo{constructor(){this.changed=!1,this.values=Yo,this.toValues=null,this.fromValues=Yo,this.to=void 0,this.from=void 0,this.config=new Wo,this.immediate=!1}}function Zo(e,{key:t,props:r,defaultProps:n,state:a,actions:i}){return new Promise(((o,s)=>{var l;let d,c,u=No(null!=(l=r.cancel)?l:null==n?void 0:n.cancel,t);if(u)f();else{Fa.und(r.pause)||(a.paused=No(r.pause,t));let e=null==n?void 0:n.pause;!0!==e&&(e=a.paused||No(e,t)),d=Bo(r.delay||0,t),e?(a.resumeQueue.add(p),i.pause()):(i.resume(),p())}function h(){a.resumeQueue.add(p),a.timeouts.delete(c),c.cancel(),d=c.time-$a.now()}function p(){d>0&&!Ka.skipAnimation?(a.delayed=!0,c=$a.setTimeout(f,d),a.pauseQueue.add(h),a.timeouts.add(c)):f()}function f(){a.delayed&&(a.delayed=!1),a.pauseQueue.delete(h),a.timeouts.delete(c),e<=(a.cancelId||0)&&(u=!0);try{i.start(To({},r,{callId:e,cancel:u}),o)}catch(e){s(e)}}}))}const Qo=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ko(e.get()):t.every((e=>e.noop))?Go(e.get()):Xo(e.get(),t.every((e=>e.finished))),Go=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Xo=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Ko=e=>({value:e,cancelled:!0,finished:!1});function Jo(e,t,r,n){const{callId:a,parentId:i,onRest:o}=t,{asyncTo:s,promise:l}=r;return i||e!==s||t.reset?r.promise=(async()=>{r.asyncId=a,r.asyncTo=e;const d=Ao(t,((e,t)=>"onRest"===t?void 0:e));let c,u;const h=new Promise(((e,t)=>(c=e,u=t))),p=e=>{const t=a<=(r.cancelId||0)&&Ko(n)||a!==r.asyncId&&Xo(n,!1);if(t)throw e.result=t,u(e),e},f=(e,t)=>{const i=new ts,o=new rs;return(async()=>{if(Ka.skipAnimation)throw es(r),o.result=Xo(n,!1),u(o),o;p(i);const s=Fa.obj(e)?To({},e):To({},t,{to:e});s.parentId=a,za(d,((e,t)=>{Fa.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return p(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let m;if(Ka.skipAnimation)return es(r),Xo(n,!1);try{let t;t=Fa.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,n.stop.bind(n))),await Promise.all([t.then(c),h]),m=Xo(n.get(),!0,!1)}catch(e){if(e instanceof ts)m=e.result;else{if(!(e instanceof rs))throw e;m=e.result}}finally{a==r.asyncId&&(r.asyncId=i,r.asyncTo=i?s:void 0,r.promise=i?l:void 0)}return Fa.fun(o)&&$a.batchedUpdates((()=>{o(m,n,n.item)})),m})():l}function es(e,t){Wa(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class ts extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class rs extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const ns=e=>e instanceof is;let as=1;class is extends Ri{constructor(...e){super(...e),this.id=as++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=mo(this);return e&&e.getValue()}to(...e){return Ka.to(this,e)}interpolate(...e){return ao(`${ro}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ka.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Hi(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ni.sort(this),Hi(this,{type:"priority",parent:this,priority:e})}}const os=Symbol.for("SpringPhase"),ss=e=>(1&e[os])>0,ls=e=>(2&e[os])>0,ds=e=>(4&e[os])>0,cs=(e,t)=>t?e[os]|=3:e[os]&=-3,us=(e,t)=>t?e[os]|=4:e[os]&=-5;class hs extends is{constructor(e,t){if(super(),this.key=void 0,this.animation=new qo,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Fa.und(e)||!Fa.und(t)){const r=Fa.obj(e)?To({},e):To({},t,{from:e});Fa.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(ls(this)||this._state.asyncTo)||ds(this)}get goal(){return Pi(this.animation.to)}get velocity(){const e=mo(this);return e instanceof vo?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return ss(this)}get isAnimating(){return ls(this)}get isPaused(){return ds(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{config:a,toValues:i}=n;const o=bo(n.to);!o&&Ai(n.to)&&(i=Va(Pi(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const d=s.constructor==wo?1:o?o[l].lastPosition:i[l];let c=n.immediate,u=d;if(!c){if(u=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=Fa.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const h=a.precision||(r==d?.005:Math.min(1,.001*Math.abs(d-r)));if(Fa.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,n=Math.exp(-(1-e)*t);u=r+i/(1-e)*(1-n),c=Math.abs(s.lastPosition-u)<=h,o=i*n}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||h/10,n=a.clamp?0:a.bounce,l=!Fa.und(n),p=r==d?s.v0>0:r<d;let f,m=!1;const g=1,b=Math.ceil(e/g);for(let e=0;e<b&&(f=Math.abs(o)>t,f||(c=Math.abs(d-u)<=h,!c));++e){l&&(m=u==d||u>d==p,m&&(o=-o*n,u=d));o+=(1e-6*-a.tension*(u-d)+.001*-a.friction*o)/a.mass*g,u+=o*g}}else{let n=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(a.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+a.easing(n)*(d-r),o=(u-s.lastPosition)/e,c=1==n}s.lastVelocity=o,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}o&&!o[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(u,a.round)&&(r=!0)}));const s=mo(this),l=s.getValue();if(t){const e=Pi(n.to);l===e&&!r||a.decay?r&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return $a.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ls(this)){const{to:e,config:t}=this.animation;$a.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Fa.und(e)?(r=this.queue||[],this.queue=[]):r=[Fa.obj(e)?e:To({},t,{to:e})],Promise.all(r.map((e=>this._update(e)))).then((e=>Qo(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),es(this._state,e&&this._lastCallId),$a.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Fa.obj(r)?r[t]:r,(null==r||zo(r))&&(r=void 0),n=Fa.obj(n)?n[t]:n,null==n&&(n=void 0);const a={to:r,from:n};return ss(this)||(e.reverse&&([r,n]=[n,r]),n=Pi(n),Fa.und(n)?mo(this)||this._set(r):this._set(n)),a}_update(e,t){let r=To({},e);const{key:n,defaultProps:a}=this;r.default&&Object.assign(a,Ao(r,((e,t)=>/^on/.test(t)?Lo(e,n):e))),vs(this,r,"onProps"),ws(this,"onProps",r,this);const i=this._prepareNode(r);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Zo(++this._lastCallId,{key:n,props:r,defaultProps:a,state:o,actions:{pause:()=>{ds(this)||(us(this,!0),Ua(o.pauseQueue),ws(this,"onPause",Xo(this,ps(this,this.animation.to)),this))},resume:()=>{ds(this)&&(us(this,!1),ls(this)&&this._resume(),Ua(o.resumeQueue),ws(this,"onResume",Xo(this,ps(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((e=>{if(r.loop&&e.finished&&(!t||!e.noop)){const e=fs(r);if(e)return this._update(e,!0)}return e}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Ko(this));const n=!Fa.und(e.to),a=!Fa.und(e.from);if(n||a){if(!(t.callId>this._lastToId))return r(Ko(this));this._lastToId=t.callId}const{key:i,defaultProps:o,animation:s}=this,{to:l,from:d}=s;let{to:c=l,from:u=d}=e;!a||n||t.default&&!Fa.und(c)||(c=u),t.reverse&&([c,u]=[u,c]);const h=!Ha(u,d);h&&(s.from=u),u=Pi(u);const p=!Ha(c,l);p&&this._focus(c);const f=zo(t.to),{config:m}=s,{decay:g,velocity:b}=m;(n||a)&&(m.velocity=0),t.config&&!f&&function(e,t,r){r&&(Uo(r=To({},r),t),t=To({},r,t)),Uo(e,t),Object.assign(e,t);for(const t in Vo)null==e[t]&&(e[t]=Vo[t]);let{mass:n,frequency:a,damping:i}=e;Fa.und(a)||(a<.01&&(a=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/a,2)*n,e.friction=4*Math.PI*i*n/a)}(m,Bo(t.config,i),t.config!==o.config?Bo(o.config,i):void 0);let y=mo(this);if(!y||Fa.und(c))return r(Xo(this,!0));const v=Fa.und(t.reset)?a&&!t.default:!Fa.und(u)&&No(t.reset,i),w=v?u:this.get(),$=Ro(c),x=Fa.num($)||Fa.arr($)||oo($),C=!f&&(!x||No(o.immediate||t.immediate,i));if(p){const e=ko(c);if(e!==y.constructor){if(!C)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set($)}}const S=y.constructor;let k=Ai(c),O=!1;if(!k){const e=v||!ss(this)&&h;(p||e)&&(O=Ha(Ro(w),$),k=!O),(Ha(s.immediate,C)||C)&&Ha(m.decay,g)&&Ha(m.velocity,b)||(k=!0)}if(O&&ls(this)&&(s.changed&&!v?k=!0:k||this._stop(l)),!f&&((k||Ai(l))&&(s.values=y.getPayload(),s.toValues=Ai(c)?null:S==wo?[1]:Va($)),s.immediate!=C&&(s.immediate=C,C||v||this._set(l)),k)){const{onRest:e}=s;Ra(ys,(e=>vs(this,t,e)));const n=Xo(this,ps(this,l));Ua(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&$a.batchedUpdates((()=>{s.changed=!v,null==e||e(n,this),v?Bo(o.onRest,n):null==s.onStart||s.onStart(n,this)}))}v&&this._set(w),f?r(Jo(t.to,t,this._state,this)):k?this._start():ls(this)&&!p?this._pendingCalls.add(r):r(Go(w))}_focus(e){const t=this.animation;e!==t.to&&(Fi(this)&&this._detach(),t.to=e,Fi(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Ai(t)&&(Vi(t,this),ns(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Ai(e)&&Wi(e,this)}_set(e,t=!0){const r=Pi(e);if(!Fa.und(r)){const e=mo(this);if(!e||!Ha(r,e.getValue())){const n=ko(r);e&&e.constructor==n?e.setValue(r):go(this,n.create(r)),e&&$a.batchedUpdates((()=>{this._onChange(r,t)}))}}return mo(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,ws(this,"onStart",Xo(this,ps(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Bo(this.animation.onChange,e,this)),Bo(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;mo(this).reset(Pi(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),ls(this)||(cs(this,!0),ds(this)||this._resume())}_resume(){Ka.skipAnimation?this.finish():ni.start(this)}_stop(e,t){if(ls(this)){cs(this,!1);const r=this.animation;Ra(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Hi(this,{type:"idle",parent:this});const n=t?Ko(this.get()):Xo(this.get(),ps(this,null!=e?e:r.to));Ua(this._pendingCalls,n),r.changed&&(r.changed=!1,ws(this,"onRest",n,this))}}}function ps(e,t){const r=Ro(t);return Ha(Ro(e.get()),r)}function fs(e,t=e.loop,r=e.to){let n=Bo(t);if(n){const a=!0!==n&&Ho(n),i=(a||e).reverse,o=!a||a.reset;return ms(To({},e,{loop:t,default:!1,pause:void 0,to:!i||zo(r)?r:void 0,from:o?e.from:void 0,reset:o},a))}}function ms(e){const{to:t,from:r}=e=Ho(e),n=new Set;return Fa.obj(t)&&bs(t,n),Fa.obj(r)&&bs(r,n),e.keys=n.size?Array.from(n):null,e}function gs(e){const t=ms(e);return Fa.und(t.default)&&(t.default=Ao(t)),t}function bs(e,t){za(e,((e,r)=>null!=e&&t.add(r)))}const ys=["onStart","onRest","onChange","onPause","onResume"];function vs(e,t,r){e.animation[r]=t[r]!==Io(t,r)?Lo(t[r],e.key):void 0}function ws(e,t,...r){var n,a,i,o;null==(n=(a=e.animation)[t])||n.call(a,...r),null==(i=(o=e.defaultProps)[t])||i.call(o,...r)}const $s=["onStart","onChange","onRest"];let xs=1;class Cs{constructor(e,t){this.id=xs++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(To({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Fa.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(ms(e)),this}start(e){let{queue:t}=this;return e?t=Va(e).map(ms):this.queue=[],this._flush?this._flush(this,t):(Ds(this,t),Ss(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Ra(Va(t),(t=>r[t].stop(!!e)))}else es(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Fa.und(e))this.start({pause:!0});else{const t=this.springs;Ra(Va(e),(e=>t[e].pause()))}return this}resume(e){if(Fa.und(e))this.start({pause:!1});else{const t=this.springs;Ra(Va(e),(e=>t[e].resume()))}return this}each(e){za(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,a=this._changed.size>0;(n&&!this._started||a&&!this._started)&&(this._started=!0,Wa(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,o=a||i&&r.size?this.get():null;a&&t.size&&Wa(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),i&&(this._started=!1,Wa(r,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}$a.onFrame(this._onFrame)}}function Ss(e,t){return Promise.all(t.map((t=>ks(e,t)))).then((t=>Qo(e,t)))}async function ks(e,t,r){const{keys:n,to:a,from:i,loop:o,onRest:s,onResolve:l}=t,d=Fa.obj(t.default)&&t.default;o&&(t.loop=!1),!1===a&&(t.to=null),!1===i&&(t.from=null);const c=Fa.arr(a)||Fa.fun(a)?a:void 0;c?(t.to=void 0,t.onRest=void 0,d&&(d.onRest=void 0)):Ra($s,(r=>{const n=t[r];if(Fa.fun(n)){const a=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=a.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):a.set(n,{value:null,finished:e||!1,cancelled:t||!1})},d&&(d[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Ua(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),p=!0===t.cancel||!0===Io(t,"cancel");(c||p&&u.asyncId)&&h.push(Zo(++e._lastAsyncId,{props:t,state:u,actions:{pause:Pa,resume:Pa,start(t,r){p?(es(u,e._lastAsyncId),r(Ko(e))):(t.onRest=s,r(Jo(c,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const f=Qo(e,await Promise.all(h));if(o&&f.finished&&(!r||!f.noop)){const r=fs(t,o,a);if(r)return Ds(e,[r]),ks(e,r,!0)}return l&&$a.batchedUpdates((()=>l(f,e,e.item))),f}function Os(e,t){const r=To({},e.springs);return t&&Ra(Va(t),(e=>{Fa.und(e.keys)&&(e=ms(e)),Fa.obj(e.to)||(e=To({},e,{to:void 0})),js(r,e,(e=>Ms(e)))})),_s(e,r),r}function _s(e,t){za(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Vi(t,e))}))}function Ms(e,t){const r=new hs;return r.key=e,t&&Vi(r,t),r}function js(e,t,r){t.keys&&Ra(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Ds(e,t){Ra(t,(t=>{js(e.springs,t,(t=>Ms(t,e)))}))}const Ts=["children"],Bs=e=>{let{children:t}=e,r=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,Ts);const n=b(Ns),i=r.pause||!!n.pause,d=r.immediate||!!n.immediate;r=function(e,t){const[r]=o((()=>({inputs:t,result:e()}))),n=s(),a=n.current;let i=a;i?Boolean(t&&i.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,i.inputs))||(i={inputs:t,result:e()}):i=r;return l((()=>{n.current=i,a==r&&(r.inputs=r.result=void 0)}),[i]),i.result}((()=>({pause:i,immediate:d})),[i,d]);const{Provider:c}=Ns;return a.createElement(c,{value:r},t)},Ns=(Ls=Bs,Is={},Object.assign(Ls,a.createContext(Is)),Ls.Provider._context=Ls,Ls.Consumer._context=Ls,Ls);var Ls,Is;Bs.Provider=Ns.Provider,Bs.Consumer=Ns.Consumer;const Es=()=>{const e=[],t=function(t){io(`${ro}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Ra(e,((e,a)=>{if(Fa.und(t))n.push(e.start());else{const i=r(t,e,a);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Ra(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Ra(e,(e=>e.resume(...arguments))),this},t.set=function(t){Ra(e,(e=>e.set(t)))},t.start=function(t){const r=[];return Ra(e,((e,n)=>{if(Fa.und(t))r.push(e.start());else{const a=this._getProps(t,e,n);a&&r.push(e.start(a))}})),r},t.stop=function(){return Ra(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Ra(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Fa.fun(e)?e(r,t):e};return t._getProps=r,t};function As(e,t){const r=Fa.fun(e),[[n],a]=function(e,t,r){const n=Fa.fun(t)&&t;n&&!r&&(r=[]);const a=y((()=>n||3==arguments.length?Es():void 0),[]),i=s(0),o=co(),l=y((()=>({ctrls:[],queue:[],flush(e,t){const r=Os(e,t);return i.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Ss(e,t):new Promise((n=>{_s(e,r),l.queue.push((()=>{n(Ss(e,t))})),o()}))}})),[]),d=s([...l.ctrls]),c=[],u=po(e)||0;function h(e,r){for(let a=e;a<r;a++){const e=d.current[a]||(d.current[a]=new Cs(null,l.flush)),r=n?n(a,e):t[a];r&&(c[a]=gs(r))}}y((()=>{Ra(d.current.slice(e,u),(e=>{!function(e,t){var r;null==(r=e.ref)||r.delete(e),null==t||t.delete(e)}(e,a),e.stop(!0)})),d.current.length=e,h(u,e)}),[e]),y((()=>{h(0,Math.min(u,e))}),r);const p=d.current.map(((e,t)=>Os(e,c[t]))),f=b(Bs),m=po(f),g=f!==m&&function(e){for(const t in e)return!0;return!1}(f);so((()=>{i.current++,l.ctrls=d.current;const{queue:e}=l;e.length&&(l.queue=[],Ra(e,(e=>e()))),Ra(d.current,((e,t)=>{null==a||a.add(e),g&&e.start({default:f});const r=c[t];r&&(function(e,t){var r;t&&e.ref!==t&&(null==(r=e.ref)||r.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),uo((()=>()=>{Ra(l.ctrls,(e=>e.stop(!0)))}));const v=p.map((e=>To({},e)));return a?[v,a]:v}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,a]:n}let Ps;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Ps||(Ps={}));class Fs extends is{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Oi(...t);const r=this._get(),n=ko(r);go(this,n.create(r))}advance(e){const t=this._get();Ha(t,this.get())||(mo(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Rs(this._active)&&zs(this)}_get(){const e=Fa.arr(this.source)?this.source.map(Pi):Va(Pi(this.source));return this.calc(...e)}_start(){this.idle&&!Rs(this._active)&&(this.idle=!1,Ra(bo(this),(e=>{e.done=!1})),Ka.skipAnimation?($a.batchedUpdates((()=>this.advance())),zs(this)):ni.start(this))}_attach(){let e=1;Ra(Va(this.source),(t=>{Ai(t)&&Vi(t,this),ns(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Ra(Va(this.source),(e=>{Ai(e)&&Wi(e,this)})),this._active.clear(),zs(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Va(this.source).reduce(((e,t)=>Math.max(e,(ns(t)?t.priority:0)+1)),0))}}function Hs(e){return!1!==e.idle}function Rs(e){return!e.size||Array.from(e).every(Hs)}function zs(e){e.idle||(e.idle=!0,Ra(bo(e),(e=>{e.done=!0})),Hi(e,{type:"idle",parent:e}))}function Vs(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}Ka.assign({createStringInterpolator:to,to:(e,t)=>new Fs(e,t)});const Ws=["style","children","scrollTop","scrollLeft","viewBox"],Us=/^--/;function Ys(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Us.test(e)||Zs.hasOwnProperty(e)&&Zs[e]?(""+t).trim():t+"px"}const qs={};let Zs={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Qs=["Webkit","Ms","Moz","O"];Zs=Object.keys(Zs).reduce(((e,t)=>(Qs.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Zs);const Gs=["x","y","z"],Xs=/^(matrix|translate|scale|rotate|skew)/,Ks=/^(translate)/,Js=/^(rotate|skew)/,el=(e,t)=>Fa.num(e)&&0!==e?e+t:e,tl=(e,t)=>Fa.arr(e)?e.every((e=>tl(e,t))):Fa.num(e)?e===t:parseFloat(e)===t;class rl extends xo{constructor(e){let{x:t,y:r,z:n}=e,a=Vs(e,Gs);const i=[],o=[];(t||r||n)&&(i.push([t||0,r||0,n||0]),o.push((e=>[`translate3d(${e.map((e=>el(e,"px"))).join(",")})`,tl(e,0)]))),za(a,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(Xs.test(t)){if(delete a[t],Fa.und(e))return;const r=Ks.test(t)?"px":Js.test(t)?"deg":"";i.push(Va(e)),o.push("rotate3d"===t?([e,t,n,a])=>[`rotate3d(${e},${t},${n},${el(a,r)})`,tl(a,0)]:e=>[`${t}(${e.map((e=>el(e,r))).join(",")})`,tl(e,t.startsWith("scale")?1:0)])}})),i.length&&(a.transform=new nl(i,o)),super(a)}}class nl extends Ri{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Ra(this.inputs,((r,n)=>{const a=Pi(r[0]),[i,o]=this.transforms[n](Fa.arr(a)?a:r.map(Pi));e+=" "+i,t=t&&o})),t?"none":e}observerAdded(e){1==e&&Ra(this.inputs,(e=>Ra(e,(e=>Ai(e)&&Vi(e,this)))))}observerRemoved(e){0==e&&Ra(this.inputs,(e=>Ra(e,(e=>Ai(e)&&Wi(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Hi(this,e)}}const al=["scrollTop","scrollLeft"];Ka.assign({batchedUpdates:O,createStringInterpolator:to,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const il=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new xo(e)),getComponentProps:n=(e=>e)}={})=>{const a={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=Do(e)||"Anonymous";return(e=Fa.str(e)?i[e]||(i[e]=_o(e,a)):e[jo]||(e[jo]=_o(e,a))).displayName=`Animated(${t})`,e};return za(e,((t,r)=>{Fa.arr(e)&&(r=Do(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,n=t,{style:a,children:i,scrollTop:o,scrollLeft:s,viewBox:l}=n,d=Vs(n,Ws),c=Object.values(d),u=Object.keys(d).map((t=>r||e.hasAttribute(t)?t:qs[t]||(qs[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(let t in a)if(a.hasOwnProperty(t)){const r=Ys(t,a[t]);Us.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new rl(e),getComponentProps:e=>Vs(e,al)}),ol=il.animated;var sl;!function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Sn(t).startOf("week");return ll(r).map((e=>dl(e)))},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Sn(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Sn(`${t+9}-01-01`).format("YYYY")}}}(sl||(sl={}));const ll=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},dl=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},cl=$.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    ${e=>{switch(e.$type){case"standalone":return x`
                    row-gap: 0.5rem;
                `;case"input":return x`
                    row-gap: 0.25rem;
                `}}}
`,ul=$.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.625rem;
`,hl=$.div`
    grid-column: 1 / -1;
    display: flex;
`,pl=$.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`,fl=$.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return x`
                    left: 0;
                `;case"right":return x`
                    right: 0;
                `}}}

    ${e=>{const{$selected:t}=e;if(t)return x`
                border-top: 1px solid ${_r.Accent.Light[4]};
                border-bottom: 1px solid ${_r.Accent.Light[4]};
                background-color: ${_r.Accent.Light[5]};
            `}}
    
    ${e=>{const{$hovered:t,$overlap:r}=e;return t?x`
                border-top: 1px dashed ${_r.Accent.Light[4]};
                border-bottom: 1px dashed ${_r.Accent.Light[4]};
                background-color: ${_r.Accent.Light[6]};
            `:r?x`
                background-color: ${_r.Accent.Light[4]};
            `:void 0}}
`,ml=$.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    position: absolute;

    :hover {
        box-shadow: 0px 0px 4px 1px ${_r.Shadow.Accent};
        border: 1px solid ${_r.Accent.Light[1]};
        background-color: ${_r.Neutral[8]};
    }

    ${e=>{const{$hovered:t,$selected:r}=e;return r?x`
                background: ${_r.Accent.Light[5]};
                border: 1px solid ${_r.Primary};
            `:t?x`
                box-shadow: 0px 0px 4px 1px ${_r.Shadow.Accent};
                border: 1px solid ${_r.Accent.Light[1]};
                background-color: ${_r.Neutral[8]};
            `:void 0}}

    ${e=>{const{$disabled:t,$overlap:r,$variant:n}=e;return r?x`
                border: 1px solid ${_r.Accent.Light[1]};
                background: ${_r.Accent.Light[4]};

                :hover {
                    background: ${_r.Accent.Light[4]};
                }
            `:t?x`
                color: ${_r.Neutral[4]};
                cursor: not-allowed;

                :hover {
                    box-shadow: unset;
                    border: unset;
                    background-color: unset;
                }
            `:"today"===n?x`
                    background: ${_r.Accent.Light[5]};
                `:void 0}}
`,gl=$(Ar.H5)`
    ${e=>{const{$disabled:t,$selected:r,$variant:n}=e;if(t&&r)return x`
                ${Ir("H5","semibold")};
                color: ${_r.Accent.Light[2]};
            `;if(t)return x`
                color: ${_r.Neutral[4]};
            `;if(r)return x`
                ${Ir("H5","semibold")};
                color: ${_r.Primary};
            `;switch(n){case"other-month":return x`
                    color: ${_r.Neutral[4]};
                `;case"today":return x`
                    color: ${_r.Neutral[3]};
                `;case"default":return x`
                    color: ${_r.Neutral[1]};
                `}}}
`;var bl={exports:{}};bl.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,a){var i=r(e),o=r(t),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var yl=bl.exports;Sn.extend(yl);const vl=({calendarDate:e,currentFocus:n,disabledDates:a,selectedStartDate:i,selectedEndDate:s,onSelect:l,onHover:d,type:c,isNewSelection:u,between:h,variant:p})=>{const f=y((()=>sl.generateDays(e)),[e]),[m,g]=o(""),b=()=>{g(""),d("")},v=(()=>{if(!m||"single"===p)return null;const e=Sn(m);if(i&&s)if(e.isBefore(i)){if("start"===n)return"full-overlap-start";if("end"===n)return"reset-end"}else if(e.isAfter(s)){if("end"===n)return"full-overlap-end";if("start"===n)return"reset-start"}else if(e.isBetween(i,s,"day","[]")&&![i,s].includes(m)){if("start"===n)return"overlap-start";if("end"===n)return"overlap-end"}if(i&&!s){if(e.isAfter(i)&&"end"===n)return"hover-end"}else if(!i&&s&&e.isBefore(s)&&"start"===n)return"hover-start";return null})(),w=e=>{const t=e.format("YYYY-MM-DD"),r={},o={},l={},d={},c=i&&s&&i===s;return!u&&["reset-start","reset-end"].includes(v)&&[i,s].includes(t)&&(l.$overlap=!0),(e=>{const t=h&&!e.isBetween(h[0],h[1],"day","[]"),r=a&&a.includes(e.format("YYYY-MM-DD")),o="start"===n&&s&&e.isAfter(s)&&u,l="end"===n&&i&&e.isBefore(i)&&u;return t||r||o||l})(e)&&(l.$disabled=!0,d.$disabled=!0),[i,s].includes(t)&&(l.$selected=!0,d.$selected=!0),i&&s&&!c&&e.isBetween(i,s,"day","[]")&&(d.$selected=!0,e.isSame(i)?o.$selected=!0:e.isSame(s)?r.$selected=!0:(r.$selected=!0,o.$selected=!0)),"hover-start"===v&&e.isBetween(s,m,"day","[]")&&(d.$selected=!0,s===t?r.$hovered=!0:m===t?(o.$hovered=!0,l.$hovered=!0):(r.$hovered=!0,o.$hovered=!0)),"hover-end"===v&&e.isBetween(i,m,"day","[]")&&(d.$selected=!0,i===t?o.$hovered=!0:m===t?(r.$hovered=!0,l.$hovered=!0):(r.$hovered=!0,o.$hovered=!0)),"overlap-start"===v&&e.isBetween(s,m,"day","[]")&&(m===t?(o.$overlap=!0,l.$overlap=!0):s===t?(r.$overlap=!0,l.$overlap=!0,l.$hovered=!0):(r.$overlap=!0,o.$overlap=!0)),"overlap-end"===v&&e.isBetween(i,m,"day","[]")&&(m===t?(r.$overlap=!0,l.$overlap=!0):i===t?(o.$overlap=!0,l.$overlap=!0,l.$hovered=!0):(r.$overlap=!0,o.$overlap=!0)),"full-overlap-start"===v&&e.isBetween(s,m,"day","[]")&&(i===t&&c?(r.$hovered=!0,l.$overlap=!0):i===t?(r.$hovered=!0,o.$overlap=!0,l.$overlap=!0):s===t?(r.$overlap=!0,l.$overlap=!0):e.isSame(m)?(o.$hovered=!0,d.$selected=!0,l.$hovered=!0):e.isBetween(i,m,"day","()")&&(r.$hovered=!0,o.$hovered=!0,d.$selected=!0)),"full-overlap-end"===v&&e.isBetween(i,m,"day","[]")&&(s===t&&c?(o.$hovered=!0,l.$overlap=!0):s===t?(r.$overlap=!0,o.$hovered=!0,l.$overlap=!0):i===t?(o.$overlap=!0,l.$overlap=!0):e.isSame(m)?(r.$hovered=!0,d.$selected=!0,l.$hovered=!0):e.isBetween(s,m,"day","()")&&(r.$hovered=!0,o.$hovered=!0,d.$selected=!0)),["full-overlap-end","full-overlap-start"].includes(v)&&e.isBetween(i,s,"day","()")&&(r.$overlap=!0,o.$overlap=!0),{styleLeftProps:r,styleRightProps:o,styleCircleProps:l,styleLabelProps:d}};return t(cl,{$type:c,children:[f[0].map(((e,t)=>r(ul,{children:r(Ar.H6,{weight:"semibold",children:Sn(e).format("ddd")})},`week-day-${t}`))),f.map(((n,a)=>r(hl,{onMouseLeave:b,children:n.map(((n,a)=>{const i=n.format("YYYY-MM-DD"),{variant:o}=(t=>({variant:e.month()!==t.month()?"other-month":Sn().isSame(t,"day")?"today":"default"}))(n),{styleLeftProps:s,styleRightProps:c,styleCircleProps:u,styleLabelProps:h}=w(n);return t(pl,{children:[r(fl,{$position:"left",...s}),r(fl,{$position:"right",...c}),r(ml,{$variant:o,onClick:()=>((e,t)=>{t||l(e)})(n,u.$disabled),onMouseEnter:()=>((e,t)=>{t||(g(e),d(e))})(i,u.$disabled),...u,children:r(gl,{weight:h.$selected?"semibold":"regular",$variant:o,...h,children:n.format("D")})})]},`day-${a}`)}))},a)))]})},wl=$.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return x`
                    gap: 0.5rem 2.5rem;
                `;case"input":return x`
                    gap: 0.5rem 2rem;
                `}}}
`,$l=$.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 5rem;

    &:hover {
        box-shadow: 0px 0px 4px 1px ${_r.Shadow.Accent};
        border: 1px solid ${_r.Accent.Light[1]};
    }

    ${e=>{if(e.$disabled)return x`
                cursor: not-allowed;

                :hover {
                    box-shadow: unset;
                    border: unset;
                }
            `;switch(e.$variant){case"current-month":return x`
                    background-color: ${_r.Accent.Light[6](e)};
                `;case"selected-month":return x`
                    background-color: ${_r.Accent.Light[5](e)};
                    border: 1px solid ${_r.Primary(e)};
                `}}}
`,xl=$(Ar.H5)`
    ${e=>{if(e.$disabled)return x`
                color: ${_r.Neutral[4]};
            `;switch(e.$variant){case"current-month":return x`
                    color: ${_r.Neutral[3](e)};
                `;case"selected-month":return x`
                    ${Ir("H5","semibold")}
                    color: ${_r.Primary(e)};
                `}}}
`,Cl=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:i,type:s,isNewSelection:d,between:c,onMonthSelect:u})=>{const[h,p]=o([]);l((()=>{m()}),[e]);const f=e=>{const r=e.format("MMMM");return{disabled:(e=>{const r=c&&!e.isBetween(c[0],c[1],"month","[]"),i="start"===t&&a&&e.isAfter(a,"month")&&d,o="end"===t&&n&&e.isBefore(n,"month")&&d;return r||i||o})(e),month:r,variant:i.isSame(e,"month")?"selected-month":Sn().isSame(e,"month")?"current-month":"default"}},m=()=>{const t=sl.generateMonths(Sn(e));p(t)};return h.length?r(wl,{$type:s,children:h.map((e=>{const{disabled:t,variant:n,month:a}=f(e);return r($l,{$variant:n,$disabled:t,onClick:()=>((e,t)=>{t||u(e)})(e,t),children:r(xl,{weight:"regular",$variant:n,$disabled:t,children:a})},a)}))}):null},Sl=$.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return x`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2rem;
                `;case"input":return x`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,kl=$.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 4px 1px ${_r.Shadow.Accent};
        border: 1px solid ${_r.Accent.Light[1]};
    }

    ${e=>{if(e.$disabled)return x`
                cursor: not-allowed;

                :hover {
                    box-shadow: unset;
                    border: unset;
                }
            `;switch(e.$variant){case"current-year":return x`
                    background: ${_r.Accent.Light[6](e)};
                `;case"selected-year":return x`
                    background: ${_r.Accent.Light[5](e)};
                    border: 1px solid ${_r.Primary(e)};
                `}}};
`,Ol=$(Ar.H5)`
    ${e=>{if(e.$disabled)return x`
                color: ${_r.Neutral[4]};
            `;switch(e.$variant){case"current-year":return x`
                    color: ${_r.Neutral[3](e)};
                `;case"selected-year":return x`
                    ${Ir("H5","semibold")}
                    color: ${_r.Primary(e)};
                `;case"other-decade":return x`
                    color: ${_r.Neutral[4](e)};
                `}}}
`,_l=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:i,type:s,isNewSelection:d,between:c,onYearSelect:u})=>{const[h,p]=o([]);l((()=>{m()}),[e]);const f=e=>{const r=[0,11].includes(h.indexOf(e)),o=e.year();return{disabled:(e=>{const r=c&&!e.isBetween(c[0],c[1],"year","[]"),i="start"===t&&a&&e.isAfter(a,"year")&&d,o="end"===t&&n&&e.isBefore(n,"year")&&d;return r||i||o})(e),year:o,variant:r?"other-decade":i.isSame(e,"year")?"selected-year":Sn().isSame(e,"year")?"current-year":"default"}},m=()=>{const t=sl.generateDecadeOfYears(Sn(e));p(t)};return h.length?r(Sl,{$type:s,children:h.map((e=>{const{disabled:t,variant:n,year:a}=f(e);return r(kl,{$variant:n,$disabled:t,onClick:()=>((e,t)=>{t||u(e)})(e,t),children:r(Ol,{weight:"regular",$variant:n,$disabled:t,children:a})},a)}))}):null};var Ml,jl={};Object.defineProperty(jl,"__esModule",{value:!0});var Dl=e;const Tl=e=>Dl.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Dl.jsx("path",{d:"M2.62611 5.81312C2.84811 5.59112 3.10478 5.48012 3.39611 5.48012C3.68811 5.48012 3.94511 5.59112 4.16711 5.81312L10.1881 11.8341L16.2301 5.79212C16.4381 5.58412 16.6881 5.48012 16.9801 5.48012C17.2714 5.48012 17.5281 5.59112 17.7501 5.81312C17.9588 6.02179 18.0631 6.27545 18.0631 6.57412C18.0631 6.87279 17.9588 7.12612 17.7501 7.33412L10.8131 14.2721C10.7158 14.3688 10.6151 14.4381 10.5111 14.4801C10.4071 14.5215 10.2994 14.5421 10.1881 14.5421C10.0768 14.5421 9.96911 14.5215 9.86511 14.4801C9.76111 14.4381 9.66044 14.3688 9.56311 14.2721L2.60511 7.31312C2.38244 7.09112 2.27811 6.83779 2.29211 6.55312C2.30611 6.26845 2.41744 6.02179 2.62611 5.81312Z",fill:"currentColor"})});Tl.displayName="ChevronDownIcon",Ml=jl.ChevronDownIcon=Tl;var Bl,Nl={};Object.defineProperty(Nl,"__esModule",{value:!0});var Ll=e;const Il=e=>Ll.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Ll.jsx("path",{d:"M12.521 17.562L5.58301 10.625C5.48635 10.5277 5.41701 10.427 5.37501 10.323C5.33301 10.219 5.31201 10.1113 5.31201 10C5.31201 9.88867 5.33301 9.781 5.37501 9.677C5.41701 9.573 5.48635 9.47234 5.58301 9.375L12.542 2.417C12.75 2.20834 13.0033 2.104 13.302 2.104C13.6007 2.104 13.854 2.21534 14.062 2.438C14.2847 2.646 14.389 2.90267 14.375 3.208C14.361 3.514 14.25 3.771 14.042 3.979L8.02101 10L14.062 16.042C14.2567 16.236 14.354 16.4893 14.354 16.802C14.354 17.1147 14.2567 17.368 14.062 17.562C13.854 17.7707 13.5973 17.875 13.292 17.875C12.986 17.875 12.729 17.7707 12.521 17.562Z",fill:"currentColor"})});Il.displayName="ChevronLeftIcon",Bl=Nl.ChevronLeftIcon=Il;var El,Al={};Object.defineProperty(Al,"__esModule",{value:!0});var Pl=e;const Fl=e=>Pl.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Pl.jsx("path",{d:"M5.979 17.562C5.757 17.34 5.646 17.0833 5.646 16.792C5.646 16.5 5.757 16.243 5.979 16.021L12 10L5.958 3.958C5.75 3.75 5.646 3.5 5.646 3.208C5.646 2.91667 5.757 2.66 5.979 2.438C6.18766 2.22933 6.44133 2.125 6.74 2.125C7.03866 2.125 7.292 2.22933 7.5 2.438L14.438 9.375C14.5347 9.47233 14.604 9.573 14.646 9.677C14.6873 9.781 14.708 9.88867 14.708 10C14.708 10.1113 14.6873 10.219 14.646 10.323C14.604 10.427 14.5347 10.5277 14.438 10.625L7.479 17.583C7.257 17.8057 7.00366 17.91 6.719 17.896C6.43433 17.882 6.18766 17.7707 5.979 17.562Z",fill:"currentColor"})});Fl.displayName="ChevronRightIcon",El=Al.ChevronRightIcon=Fl;const Hl=$.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Rl=C`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,zl=$.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||_r.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Rl} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Vl=$(zl)`
    animation-delay: -0.45s;
`,Wl=$(zl)`
    animation-delay: -0.3s;
`,Ul=$(zl)`
    animation-delay: -0.15s;
`,Yl=$.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return x`
                    background-color: ${_r.Neutral[8](e)};
                    border: 1px solid ${_r.Primary(e)};

                    span {
                        color: ${_r.Primary(e)};
                    }
                `;case"light":return x`
                    background-color: ${_r.Neutral[8](e)};
                    border: 1px solid ${_r.Neutral[5](e)};

                    span {
                        color: ${_r.Primary(e)};
                    }
                `;case"disabled":return x`
                    background-color: ${_r.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${_r.Neutral[3](e)};
                    }
                `;case"link":return x`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${_r.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${_r.Secondary};
                        }
                    }
                `;default:return x`
                    background-color: ${_r.Primary(e)};
                    border: 1px solid transparent;

                    ${Qr.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${_r.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?x`
                    height: 2.5rem;
                    span {
                        ${Ir("H5","semibold")}
                    }

                    ${Qr.mobileS} {
                        height: auto;
                    }
                `:x`
                    height: 3rem;
                    span {
                        ${Ir("H4","semibold")}
                    }

                    ${Qr.mobileS} {
                        height: auto;
                    }
                `}
`,ql=$((({color:e,className:n,size:a=18})=>t(Hl,{className:n,$size:a,$color:e,children:[r(zl,{id:"inner1",$size:a-2,$borderWidth:2}),r(Vl,{id:"inner2",$size:a-2,$borderWidth:2}),r(Wl,{id:"inner3",$size:a-2,$borderWidth:2}),r(Ul,{id:"inner4",$size:a-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=_r.Primary(e);break;case"disabled":t=_r.Neutral[3](e);break;default:t=_r.Neutral[8](e)}return x`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Zl={Default:i.forwardRef(((e,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",...l}=e,d={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default"};return t(Yl,{ref:n,"data-testid":l["data-testid"]||"button",disabled:i,...d,...l,children:[o&&r(ql,{...d}),r("span",{children:a})]})})),Small:i.forwardRef(((e,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",...l}=e,d={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small"};return t(Yl,{ref:n,"data-testid":l["data-testid"]||"button",disabled:i,...d,...l,children:[o&&r(ql,{...d,size:16}),r("span",{children:a})]})}))},Ql=x`
    color: ${_r.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,Gl=$(Bl)`
    ${Ql}
`,Xl=$(El)`
    ${Ql}
`,Kl=$(Ml)`
    ${Ql}
    transition: transform 250ms ease-in-out;
    margin-left: 0.625rem;
`,Jl=$(ol.div)`
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    width: 100%;
    max-width: 41rem;
    background: ${_r.Neutral[8]};
    overflow: hidden;
    z-index: 1;
`,ed=$.div`
    position: relative;
    width: 100%;
    padding: 1.5rem 1.25rem;
    display: flex;

    ${e=>{if("input"===e.$type)return x`
                border: 1px solid ${_r.Neutral[5]};
                border-radius: 8px;
            `}}
`,td=$.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,rd=$.div`
    display: flex;
    flex: 1;
    position: relative;
`,nd=$.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${_r.Neutral[8]};

    ${e=>{if(!e.$visible)return x`
                display: none;
            `}}
`,ad=$.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
`,id=$.div`
    display: flex;
`,od=$.div`
    display: flex;
    margin: 0 auto;
    margin-bottom: 1rem;
`,sd=$.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    :not(:last-of-type) {
        margin-right: 0.5rem;
    }

    ${e=>{switch(e.$type){case"input":return x`
                    :not(:last-of-type) {
                        margin-right: 0;
                    }
                `;case"standalone":return x`
                    ${Kl} {
                        width: 1.125rem;
                        height: 1.125rem;
                    }
                `}}}

    ${e=>!1===e.$visible?x`
                display: none;
            `:e.$expandedDisplay?x`
                ${Kl} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,ld=$.p`
    ${e=>{switch(e.$type){case"standalone":return x`
                    ${Ir("H4","regular")}
                `;case"input":return x`
                    ${Ir("H5","regular")}
                `}}}
`,dd=$.div`
    display: flex;
`,cd=$(nn)`
    background: transparent;
    margin: auto 0;
    padding: 0.5rem;

    :focus,
    :active {
        background: transparent;
    }
`,ud=$.div`
    display: flex;
    gap: 8px;
    margin-top: 1.5rem;
`,hd=$(Zl.Small)`
    flex: 1;
`,pd=$(nn)`
    display: block;
    padding: 1rem;
    background: transparent;
    margin: auto 0;

    :focus,
    :active {
        background: transparent;
    }

    ${Gl},
    ${Xl} {
        width: 1.5rem;
        height: 1.5rem;
    }

    ${e=>"left"===e.$direction?x`
                    margin: auto 0.625rem auto 0; // to counter the padding
                `:x`
                    margin: auto 0 auto 0.625rem; // to counter the padding
                `}
`,fd=i.forwardRef((({disabledDates:e,onYearMonthDisplayChange:a,onCalendarView:i,onSelect:d,onHover:c,onDismiss:u,actionComponent:h,isOpen:p,value:f,endValue:m,currentFocus:g,withButton:b,variant:y,between:w,type:$="standalone",...x},C)=>{const[S,k]=o(Sn()),[O,_]=o("default"),[M,j]=o(),[D,T]=o(),[B,N]=o(),[L,I]=o(!0),E=s(null),A=s(null),P=va();v(C,(()=>({defaultView(){_("default"),i("default")}})),[]),l((()=>{p&&(k(Sn()),_("default"),"range"===y&&f?.length&&m?.length&&I(!1))}),[p]),l((()=>{const e="end"===g?m:f;N(Sn(e)),e&&k(Sn(e))}),[g]),l((()=>{I(!0),f?("input"===h&&k(Sn(f)),j(f),k(Sn(f))):j(void 0)}),[f]),l((()=>{I(!0),m?("input"===h&&k(Sn(m)),T(m)):T(void 0)}),[m]);const F=()=>{switch(O){case"default":N((e=>e.subtract(1,"month"))),k((e=>{const t=e.subtract(1,"month");return q(t),t}));break;case"month-options":k((e=>e.subtract(1,"year")));break;case"year-options":k((e=>e.subtract(10,"year")))}},H=()=>{switch(O){case"default":N((e=>e.add(1,"month"))),k((e=>{const t=e.add(1,"month");return q(t),t}));break;case"month-options":k((e=>e.add(1,"year")));break;case"year-options":k((e=>e.add(10,"year")))}},R=e=>{const t=e.format("YYYY-MM-DD");k(e),N(e),Q(t),U(t)},z=e=>{k(e),N(e),q(e)},V=()=>{k(Sn("end"===g?m:f)),Z("reset")},W=e=>{Y(e)},U=e=>{d&&d(e)},Y=e=>{c&&c(e)},q=e=>{if(a){const t={month:e.month()+1,year:e.year()};a(t)}},Z=e=>{u&&u(e)},Q=e=>{if(g)switch(g){case"start":default:j(e);break;case"end":T(e)}else j(e)},G=()=>{"month-options"!==O?(_("month-options"),J("month-options"),P.ref.current.focus()):(_("default"),k(B),J("default"))},X=()=>{"default"!==O?(_("default"),k(B),J("default")):(_("year-options"),J("year-options"))},K=()=>{if("year-options"===O){const{beginDecade:e,endDecade:t}=sl.getStartEndDecade(S);return`${e} to ${t}`}return Sn(S).format("YYYY")},J=e=>{i&&i(e)},ee=()=>t(n,{children:[t(sd,{type:"button",tabIndex:-1,$type:$,$expandedDisplay:"month-options"===O,$visible:"default"===O,id:"month-dropdown",onClick:G,children:[r(ld,{$type:$,children:Sn(S).format("MMM")}),r(Kl,{})]}),t(sd,{type:"button",tabIndex:-1,$type:$,$expandedDisplay:"default"!==O,id:"year-dropdown",onClick:X,children:[r(ld,{$type:$,children:K()}),r(Kl,{})]})]}),te=()=>{switch(O){case"month-options":return r(Cl,{type:$,calendarDate:S,currentFocus:g,selectedStartDate:M,selectedEndDate:D,viewCalendarDate:B,between:w,isNewSelection:L,onMonthSelect:z});case"year-options":return r(_l,{type:$,calendarDate:S,currentFocus:g,selectedStartDate:M,selectedEndDate:D,viewCalendarDate:B,between:w,isNewSelection:L,onYearSelect:z});default:return null}},re=()=>{switch($){case"standalone":default:return r(od,{children:ee()});case"input":return t(ad,{children:[r(id,{children:ee()}),t(dd,{children:[r(cd,{tabIndex:-1,onClick:F,children:r(Gl,{})}),r(cd,{tabIndex:-1,onClick:H,children:r(Xl,{})})]})]})}},ne=()=>{if("standalone"===$||!b)return;let e=!0;const n=["default"].includes(O);switch(y){case"single":e=!M;break;case"range":e=!M||!D}const a=!!n&&e;return t(ud,{children:[r(hd,{ref:A,"data-testid":"cancel-button",styleType:"light",onClick:V,children:"Cancel"}),r(hd,{"data-testid":"done-button",ref:E,onClick:()=>(e=>{e||(k(B),Z("confirmed"))})(a),disabled:a,children:"Done"})]})},ae=()=>t(ed,{ref:P.ref,tabIndex:-1,"data-id":"calendar-container",$type:$,...x,children:["standalone"===$&&r(pd,{$direction:"left",onClick:F,children:r(Gl,{})}),t(td,{children:[re(),t(rd,{children:[r(vl,{type:$,calendarDate:S,currentFocus:g,disabledDates:e,selectedStartDate:M,selectedEndDate:D,variant:y,between:w,isNewSelection:L,onSelect:R,onHover:W}),r(nd,{$visible:"default"!==O,children:te()})]}),ne()]}),"standalone"===$&&r(pd,{$direction:"right",onClick:H,children:r(Xl,{})})]}),ie=As({height:p?P.height+64:0});return"input"===$?r(Jl,{style:ie,children:ae()}):r(n,{children:ae()})}));var md;Sn.extend(yl),function(e){const t=/^\d{4}-\d{2}-\d{2}$/;e.validate=(e,r,n,a)=>{if(!e||!r)return!1;if(Sn(e).isAfter(r))return!1;if(n&&n.length&&n.some((t=>[e,r].includes(t))))return!1;if(a&&a.length){if(![e,r].every((e=>Sn(e).isBetween(a[0],a[1],"day","[]"))))return!1;if(!a.every((e=>t.test(e))))return!1}return!0},e.validateSingle=(e,r,n)=>{if(0===e.length)return!1;if(r&&r.length&&r.some((t=>e===t)))return!1;if(n&&n.length&&!Sn(e).isBetween(n[0],n[1],"day","[]")){if(!Sn(e).isBetween(n[0],n[1],"day","[]"))return!1;if(!n.every((e=>t.test(e))))return!1}return!0},e.getFormattedRawValue=(e,t)=>{const[r,n,a]=e.split("-"),i=[a,n,r];let o;if(t){const[e,r,n]=t.split("-");o=[n,r,e]}return{start:i,end:o}},e.sleep=(e,t)=>new Promise((r=>{const n=setTimeout(r,e);t.signal.addEventListener("abort",(()=>{clearTimeout(n)}))}))}(md||(md={}));const gd=[1,3,5,7,8,10,12],bd=[4,6,9,11];var yd,vd,wd;!function(e){e.clampDay=(t,r,n)=>{const a=parseInt(t),i=parseInt(r),o=parseInt(n);return 0==a?"1":gd.includes(i)?Math.min(a,31).toString():bd.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Sn(e,r);return Sn(t,r).diff(n,"minute")}}(yd||(yd={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(vd||(vd={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n)=>{let a=0;t>r&&(a=Math.floor((t-r)/8));const i=n+a;if(i<e.length){const t=Math.floor(i/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(wd||(wd={}));const $d=$.div`
    position: relative;
    display: flex;
    align-items: center;
    flex: 1;
    height: 100%;
    left: ${e=>e.$readOnly?"-0.5rem":""};
    pointer-events: ${e=>e.$readOnly?"none;":""};

    ${e=>"start"===e.$variant?x`
                ${jd}
                left: ${e.$readOnly?"0":""};
            `:"range"===e.$variant?x`
                ${jd}
                left: ${e.$readOnly?"0":"1rem"};
            `:void 0}

    @media screen and (max-width: 374px) {
        position: absolute;
        height: 1.625rem;

        ${e=>"start"===e.$variant?x`
                    top: 0.75rem;
                    height: 1.625rem;
                    width: 50%;
                `:"range"===e.$variant?x`
                    bottom: 0.75rem;
                    height: 1.625rem;
                    width: calc(100% - 1rem); // paddingLeft is 1rem
                `:void 0}
    }

    ${Qr.mobileS} {
        ${e=>{if("start"===e.$variant)return x`
                    width: 75%;
                `}}
    }
`,xd=$.div`
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;

    ${e=>{if(e.$isHover)return x`
                ${Cd}, ${_d} {
                    color: ${_r.Neutral[4]};
                }
            `}}
`,Cd=$.input`
    ${Ir("Body","regular")}
    background: transparent;
    height: 100%;
    border: none;
    text-align: center;
    padding: 0;

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

    :focus,
    :active {
        outline: none;
    }

    ${e=>{if(e.disabled)return x`
                cursor: not-allowed;
            `}}
`,Sd=$(Cd)`
    width: 2.5rem;
`,kd=$(Cd)`
    width: 2.6rem;
`,Od=$(Cd)`
    width: 3.5rem;
`,_d=$(Ar.Body)`
    margin: 0.1rem 0.2rem 0 0.2rem;
    ${e=>{if(e.$hide)return x`
                color: ${_r.Neutral[3](e)};
            `}}
`,Md=$.div`
    ${Ir("Body","regular")}
    background-color: ${_r.Neutral[8]};
    color: ${_r.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: calc(100% - 0.5rem); // 0.5rem is the focus blur shadow area
    height: calc(100% - 0.5rem); // 0.5rem is the focus blur shadow area
    cursor: pointer;

    ${Qr.mobileM} {
        width: 100%;

        ${e=>{if("range"===e.$variant)return x`
                        width: calc(100% - 0.5rem);
                    `}}
    }

    ${e=>e.$disabled?x`
                background-color: ${_r.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$isDirty?x`
                display: none;
            `:void 0}
`,jd=x`
    ${Sd} {
        width: 1.75rem;
    }
    ${Sd} + ${_d} {
        margin: 0.1rem 0 0 0.25rem;
    }
    ${kd} {
        width: 2.5rem;
    }
    ${kd} + ${_d} {
        margin: 0.1rem 0.25rem 0 0;
    }
    ${Od} {
        width: 3rem;
    }
`;var Dd={exports:{}};Dd.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,t))>-1){r=a>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[a,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[a,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[a,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,a;n=r,a=i&&i.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],h=c&&c[0],p=c&&c[1];o[l]=p?{regex:h,parser:p}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var a=o[r];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,d=e.slice(n),c=i.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,a=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,p=new Date,f=o||(a||i?1:p.getDate()),m=a||p.getFullYear(),g=0;a&&!i||(g=i>0?i-1:p.getMonth());var b=s||0,y=l||0,v=d||0,w=c||0;return u?new Date(Date.UTC(m,g,f,b,y,v,w+60*u.offset*1e3)):r?new Date(Date.UTC(m,g,f,b,y,v,w)):new Date(m,g,f,b,y,v,w)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var p=s.length,f=1;f<=p;f+=1){o[1]=s[f-1];var m=r.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}f===p&&(this.$d=new Date(""))}else a.call(this,e)}}}();var Td=Dd.exports;Sn.extend(Td);const Bd=({action:e,disabled:n,confirmedValue:a,onChange:i,onFocus:d,readOnly:c,names:u,value:h,variant:p,focused:f,focusType:m,isOpen:g})=>{const[b,y]=o(""),[v,w]=o(""),[$,x]=o(""),[C,S]=o("none"),[k,O]=o(!1),_=s(null),M=s(null),j=s(null),D=s(null),T=s(b),B=s(v),N=s($),L=s(C),I=e=>{T.current=e,y(e)},E=e=>{B.current=e,w(e)},A=e=>{N.current=e,x(e)},P=e=>{L.current=e,S(e)};l((()=>(document.addEventListener("mousedown",F),_.current&&_.current.addEventListener("keydown",H),()=>{document.removeEventListener("mousedown",F),_.current&&_.current.removeEventListener("keydown",H)})),[C]),l((()=>{C===u[0]&&2===b.length&&j.current&&f&&j.current.focus()}),[b]),l((()=>{C===u[1]&&2===v.length&&D.current&&f&&D.current.focus()}),[v]),l((()=>{h||g||O(!1),Y(h)}),[h,g]),l((()=>{f&&M.current.focus()}),[f]);const F=e=>{n||c||_&&_.current.contains(e.target)||"none"!==L.current&&P("none")},H=e=>{e.target.name===u[2]&&"Tab"===e.code&&P("none")},R=t=>{if(["hover","unhover"].includes(e))return P(u[0]),void M.current.focus();const r=t.target.name;P(r),t.target.select(),Q(r)},z=e=>{const t=e.target.name,r=wd.padValue(e.target.value,!0);switch(t){case u[0]:I(r);break;case u[1]:E(r);case u[2]:}const n=b.length&&v.length&&4===$.length,a=t===u[0];if(n){const e=Sn(`${$}-${v}-${b}`,"YYYY-MM-DD",!0).isValid(),t=a?r:b,{year:n,month:i,day:o}=q($,v,t,e);I(o),E(i),e||A(n)}},V=e=>{const t=e.target.name,r=e.target.value.replace(/[^0-9]/g,"");switch(t){case u[0]:I(r),Z(r,t);break;case u[1]:E(r),Z(r,t);break;case u[2]:A(r),Z(r,t)}},W=()=>{O(!0)},U=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(C===u[1]&&0===v.length&&M.current.focus(),C===u[2]&&0===$.length&&j.current.focus())},Y=e=>{if(void 0===e||""===e)I(""),E(""),A("");else{const t=new Date(e);if(!isNaN(t.getTime())){const e=(t.getMonth()+1).toString(),r=t.getFullYear().toString(),n=yd.clampDay(t.getDate().toString(),e,r);I(wd.padValue(n)),E(wd.padValue(e)),A(r)}}},q=(e,t,r,n)=>{let i="",o="",s="";if(n){const n=yd.clampMonth(t);o=wd.padValue(n),s=wd.padValue(yd.clampDay(r,n,e))}else if(!n&&Sn(a).isValid()){const[e,t,r]=a.split("-");i=e,o=t,s=r}return{year:i,month:o,day:s}},Z=(e,t)=>{const r=t.split("-")[1],n={year:$,month:v,day:b};n[r]=e;const a=G(n);i(a)},Q=e=>{d(e)},G=e=>{const t=[e.year,e.month,e.day];if(4===e.year.length&&2==e.month.length&&2==e.day.length){let r="";r=t.join("-");const n=Sn(r,"YYYY-MM-DD",!0).isValid();if(!n){const t=q(e.year,e.month,e.day,n);r=Object.values(t).join("-")}return Sn(r).isValid()?r:Nd}return t.every((e=>""===e))?"":Nd};return t($d,{$readOnly:c,$variant:p,onClick:()=>{"none"===C&&M.current&&M.current.focus()},onFocus:e=>{const t=e.target.name;["start-day","end-day"].includes(t)&&O(!0)},children:[t(xd,{ref:_,$isHover:"hover"===e,children:[r(Sd,{name:u[0],maxLength:2,value:b,ref:M,onFocus:R,onBlur:z,onChange:V,disabled:n,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":`${u[0]}-input`,"aria-label":`${u[0]}-input`,readOnly:c,tabIndex:c?-1:0,autoComplete:"off",placeholder:C!==u[0]||c?"DD":""}),r(_d,{$hide:0===b.length,children:"/"}),r(kd,{name:u[1],maxLength:2,value:v,ref:j,onFocus:R,onBlur:z,onChange:V,onKeyDown:U,disabled:n,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":`${u[1]}-input`,"aria-label":`${u[1]}-input`,readOnly:c,tabIndex:c?-1:0,autoComplete:"off",placeholder:C!==u[1]||c?"MM":""}),r(_d,{$hide:0===v.length,children:"/"}),r(Od,{name:u[2],maxLength:4,value:$,ref:D,onFocus:R,onBlur:z,onChange:V,onKeyDown:U,disabled:n,type:"text",inputMode:"numeric",pattern:"[0-9]{4}","data-testid":`${u[2]}-input`,"aria-label":`${u[2]}-input`,readOnly:c,tabIndex:c?-1:0,autoComplete:"off",placeholder:f&&C===u[2]&&!c?"":"YYYY"})]}),(()=>{if(!h&&!c&&!("start"===p&&"start"===m||"range"===p&&"end"===m))switch(p){case"start":case"range":return r(Md,{$isDirty:k,$disabled:n,$variant:p,onClick:W,children:"start"===p?"From":"To"});default:return}})()]})},Nd="Invalid Date",Ld=(e,t)=>e===Nd?t.calendar:e&&e.length?e:void 0,Id=(e,t)=>{const{type:r,value:n}=t;let a="";switch(n&&n.length?a=n:e.selected&&e.selected.length?a=e.selected:e.confirmed&&(a=e.confirmed),r){case"default":return{...e,currentType:"default"};case"hover":return{...e,hover:n,input:n,currentType:"hover"};case"unhover":return{...e,hover:"",input:e.selected,currentType:"unhover"};case"selected":return{...e,calendar:Ld(n,e),hover:"",input:n,selected:n,currentType:"selected"};case"confirmed":return{...e,calendar:Ld(a,e),confirmed:a,input:a,selected:a,currentType:"confirmed"};case"reset":return{...e,calendar:Ld(e.confirmed,e),confirmed:e.confirmed,input:e.confirmed,selected:e.confirmed,currentType:"reset"};case"invalid":return{...e,calendar:void 0,confirmed:e.confirmed,input:"",selected:"",currentType:"invalid"};default:return e}},Ed={calendar:void 0,confirmed:"",hover:"",input:"",selected:"",currentType:"confirmed"},Ad={collections:{base:{InputBoxShadow:x`
        inset 0 0 6px 1px ${_r.Shadow.Accent}
    `,InputErrorBoxShadow:x`
        inset 0 0 6px 1px ${_r.Shadow.Red}
    `,ElevationBoxShadow:x`
      0px 2px 8px ${_r.Shadow.Elevation}
 `}},defaultValue:"base"},Pd=e=>t=>{const r=t.theme,n=Cr(Ad,r[Sr.designTokenScheme]);return r.options?.designToken?xr(n,e,r.options.designToken):xr(n,e)},Fd=Pd("InputBoxShadow"),Hd=Pd("InputErrorBoxShadow");Pd("ElevationBoxShadow");var Rd,zd={};Object.defineProperty(zd,"__esModule",{value:!0});var Vd=e;const Wd=e=>Vd.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Vd.jsx("path",{d:"M9.39601 16.062C9.21534 15.882 9.12167 15.6807 9.11501 15.458C9.10767 15.236 9.19434 15.0347 9.37501 14.854L13.354 10.875H4.20801C3.97201 10.875 3.76734 10.7883 3.59401 10.615C3.42001 10.441 3.33301 10.236 3.33301 10C3.33301 9.764 3.42001 9.559 3.59401 9.385C3.76734 9.21167 3.97201 9.125 4.20801 9.125H13.354L9.37501 5.167C9.19434 4.98633 9.10767 4.78133 9.11501 4.552C9.12167 4.32267 9.21534 4.118 9.39601 3.938C9.57667 3.75733 9.77801 3.667 10 3.667C10.222 3.667 10.4233 3.75733 10.604 3.938L16.042 9.375C16.1393 9.45833 16.2087 9.55567 16.25 9.667C16.2913 9.77767 16.312 9.88867 16.312 10C16.312 10.1113 16.2913 10.219 16.25 10.323C16.2087 10.427 16.1393 10.5277 16.042 10.625L10.604 16.062C10.4233 16.2427 10.222 16.333 10 16.333C9.77801 16.333 9.57667 16.2427 9.39601 16.062Z",fill:"currentColor"})});Wd.displayName="ArrowRightIcon",Rd=zd.ArrowRightIcon=Wd;const Ud=$.div`
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid ${_r.Neutral[5]};
    border-radius: 0.25rem;
    background: ${_r.Neutral[8]};
    height: 3rem;
    width: 100%;
    padding: 0.1rem 1rem 0;

    :focus,
    :focus-within {
        border: 1px solid ${_r.Accent.Light[1]};
        box-shadow: ${Fd};
    }

    ${e=>{if(e.$readOnly)return x`
                ${Yd} {
                    left: 43%;
                }
            `}}

    @media screen and (max-width: 374px) {
        ${e=>"range"===e.$variant?x`
                    width: 100%;
                    height: 5.125rem;

                    ${Yd} {
                        transform: unset;
                        left: ${e.$readOnly?"48%":"57%"};
                        top: 1rem;
                    }
                `:"single"===e.$variant?x`
                    width: 100%;
                `:void 0}
    }

    ${e=>e.$readOnly?x`
                border: none;
                padding-left: 0rem;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$disabled?x`
                background: ${_r.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${_r.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?x`
                border: 1px solid ${_r.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${_r.Validation.Red.Border(e)};
                    box-shadow: ${Hd};
                }
            `:void 0}
`,Yd=$(nn)`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;

    ${Qr.mobileS} {
        left: 71% !important;
    }
`,qd=$(Rd)`
    color: ${_r.Neutral[3]};
    cursor: pointer;
    width: 1.125rem;
    height: 1.125rem;
`,Zd=$.div`
    position: absolute;
    background-color: ${_r.Primary};
    height: 0.125rem;
    width: calc(100% - 50% - 2rem); // paddingX is 2rem,
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 1rem;
    bottom: -0.1rem;

    ${e=>{switch(e.$stickTo){case"top":return x`
                    top: 3rem;
                `;case"bottom":return x`
                    bottom: -0.1rem;
                `}}}

    ${e=>{switch(e.$position){case"start":return x`
                    left: 1rem;
                    opacity: 1;
                `;case"end":return x`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return x`
                    left: 1rem;
                    opacity: 0;
                `}}}

    ${e=>{if(!e.$disableMobile)return x`
                @media screen and (max-width: 374px) {
                    display: none;
                }
            `}}
`,Qd=({between:e,disabled:a,disabledDates:i,error:d,value:c,valueEnd:u,onChange:h,onBlur:p,onChangeRaw:f,onBlurRaw:m,withButton:g=!0,readOnly:b,id:y,variant:v="single",...$})=>{const[x,C]=o(!1),[S,k]=o("calendar"),[O,_]=o("default"),[M,j]=o({field:"none",type:"none",count:0}),[D,T]=o(!1),B=s(null),I=s(),E=N.exports.useMediaQuery({maxWidth:L.mobileL}),A=g||E,[P,F]=w(Id,Ed),[H,R]=w(Id,Ed);((e,t,r=window)=>{const n=s();l((()=>{n.current=t}),[t]),l((()=>{if(!r||!r.addEventListener)return;const t=e=>n.current(e);return r.addEventListener(e,t),()=>{r.removeEventListener(e,t)}}),[e,r])})("keydown",(function(e){"Escape"===e.code&&W("reset");if("Enter"===e.code&&"range"===v&&!A){const e=[P.selected,H.selected].every(Boolean);W(e?"confirmed":"reset")}}),B.current),l((()=>{F({type:"confirmed",value:c}),"range"===v&&R({type:"confirmed",value:u})}),[]),l((()=>{F({type:"selected",value:c}),"range"===v&&R({type:"selected",value:u})}),[c,u]),l((()=>{const e=new AbortController;if([P.currentType,H.currentType].includes("unhover")){(async()=>{await md.sleep(250,e),Z("default")})()}return()=>{e.abort()}}),[P.currentType,H.currentType]),l((()=>{"single"!==v&&"none"!==M.type&&j((e=>({...M,count:e.count+1})))}),[M.type]);const z=(e,t)=>{if(e===Nd||""===e)return void(""===e&&Z("selected",e));const r=q(e);Z("selected",e),T(!r),k(t),Q(r,t,e)},V=e=>{const t=e.split("-")[0];C(!0),j({...M,field:e,type:t})},W=e=>{if(["month-options","year-options"].includes(O))U();else{switch(e){case"reset":Z("reset");break;case"confirmed":if(D){Z("reset");break}Z("confirmed"),Y()}j({field:"none",type:"none",count:0}),C(!1)}},U=()=>{I.current.defaultView()},Y=e=>{const t=M.type;let r=P.selected,n=H.selected;if(e)switch(t){case"end":n=e;break;case"start":r=e}if(h&&h(r,n),f){const{start:e,end:t}=md.getFormattedRawValue(r,n);f(e,t)}},q=t=>{let r=!0;const n={start:P.selected,end:H.selected};if(n[M.type]=t,"range"===v)switch(M.type){case"start":r=md.validate(t,n.end,i,e);break;case"end":r=md.validate(n.start,t,i,e)}else"single"===v&&(r=md.validateSingle(t,i,e));return r},Z=(t,r)=>{let n=M.type,a=!0;switch(["confirmed","reset"].includes(t)&&(n="none",A&&"range"===v&&(a=md.validate(P.selected,H.selected,i,e))),a||(F({type:"reset"}),R({type:"reset"})),n){case"start":if("invalid"===t)return void R({type:t});F({type:t,value:r});break;case"end":if("invalid"===t)return void F({type:t});R({type:t,value:r});break;default:F({type:t,value:r}),"range"===v&&R({type:t,value:r})}},Q=(e,t,r)=>{if("range"===v&&!e){const{field:e,type:t}=G();j({field:e,type:t,count:1}),Z("invalid")}if(!["month-options","year-options"].includes(O)){if(!A&&"single"===v&&e||!A&&"range"===v&&M.count>=2&&e)return C(!1),Z("confirmed"),Y(r),void j({field:"none",type:"none",count:0});if(!(M.count>=2)&&"calendar"===t&&"range"===v){const{field:e,type:t}=G();j((r=>({field:e,type:t,count:r.count+1})))}}},G=()=>{const e="start"===M.type?"end":"start";return{field:`${e}-day`,type:e}};return t(Ud,{ref:B,$disabled:a,$error:d,id:y,"data-testid":$["data-testid"],$readOnly:b,$variant:v,onBlur:e=>{B&&!B.current.contains(e.relatedTarget)&&(Z("reset"),j({field:"none",type:"none",count:0}),((e,t)=>{if(p&&p(e.confirmed,t.confirmed),m){const{start:r,end:n}=md.getFormattedRawValue(e.confirmed,t.confirmed);m(r,n)}})(P,H),C(!1),T(!1))},tabIndex:-1,...$,children:[r(Bd,{disabled:a,onChange:e=>z(e,"input"),onFocus:V,readOnly:b,focused:"start"===M.type,names:["start-day","start-month","start-year"],value:P.input,confirmedValue:P.confirmed,variant:"range"===v?"start":"single",action:P.currentType,focusType:M.type,isOpen:x}),(()=>{if("range"===v)return t(n,{children:[r(Yd,{tabIndex:-1,children:r(qd,{})}),r(Bd,{disabled:a,onChange:e=>z(e,"input"),onFocus:V,readOnly:b,focused:"end"===M.type,names:["end-day","end-month","end-year"],value:H.input,confirmedValue:H.confirmed,variant:v,action:H.currentType,focusType:M.type,isOpen:x})]})})(),(()=>{if("single"!==v&&!a&&!b)return r(Zd,{$position:M.type||"none"})})(),r(fd,{ref:I,type:"input",disabledDates:i,isOpen:x,withButton:A,actionComponent:S,currentFocus:M.type,value:P.calendar,endValue:H.calendar,between:e,variant:v,onCalendarView:e=>{_(e)},onHover:e=>{e?Z("hover",e):Z("unhover")},onSelect:e=>z(e,"calendar"),onDismiss:W})]})},Gd=$.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${_r.Neutral[5]};
    border-radius: 4px;
    background: ${_r.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${_r.Accent.Light[1]};
        box-shadow: ${Fd};
    }

    ${e=>e.$readOnly?x`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?x`
                background: ${_r.Neutral[6](e)};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${_r.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?x`
                border: 1px solid ${_r.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${_r.Validation.Red.Border(e)};
                    box-shadow: ${Hd};
                }
            `:void 0}
`,Xd=$.input`
    ${Ir("Body","regular")}
    color: ${_r.Neutral[1]};

    // overwrite default styles
    background: transparent;
    border: none;
    height: 3rem;
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
        color: ${_r.Neutral[3]};
    }

    ${e=>"number"===e.type?x`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?x`
                cursor: not-allowed;
            `:void 0}
`,Kd=$.button`
    position: relative;
    height: auto;
    padding: 0 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${_r.Neutral[3]};
    background-color: transparent;
    border: none;
`,Jd=$(Kr)`
    height: 1.25rem;
    width: 1.25rem;
`,ec=i.forwardRef((({value:e,spacing:n,type:a,error:i,disabled:o,readOnly:l,onChange:d,onClear:c,allowClear:u=!1,className:h,...p},f)=>{const m=s();v(f,(()=>m.current),[]);const g=()=>"tel"===a&&n,b=e=>{const t=e.target,r=t.value,n=t.value.replace(/\s/g,"");t.value=n,d(e),t.value=r},y=e?(e=>e?g()?wd.transformWithSpaces(e,n):e:"")(e):e;return t(Gd,{disabled:o,$error:i,$readOnly:l,className:h,children:[r(Xd,{"data-testid":"input",ref:m,disabled:o,value:y,onChange:e=>{d&&(g()?b(e):d(e))},type:a,readOnly:l,...p}),u&&!o&&!l&&!!e&&r(Kd,{onClick:()=>{c&&c(),m&&m.current&&m.current.focus()},children:r(Jd,{})})]})})),tc=i.forwardRef(((e,t)=>{const{label:n,errorMessage:a,id:i="form-field","data-error-testid":o,"data-testid":s,...l}=e;return r(xn,{id:i,label:n,errorMessage:a,disabled:l.disabled,"data-error-testid":o,children:r(ec,{id:`${i}-base`,"data-testid":s||i,ref:t,error:!!a,...l})})})),rc=$.div`
    display: flex;
    position: relative;
    border: 1px solid ${_r.Neutral[5]};
    border-radius: 4px;
    background: ${_r.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${_r.Accent.Light[1]};
        box-shadow: ${Fd};
    }

    ${e=>e.$readOnly?x`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?x`
                background: ${_r.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${_r.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?x`
                border: 1px solid ${_r.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${_r.Validation.Red.Border(e)};
                    box-shadow: ${Hd};
                }
            `:void 0}
`,nc=$(ec)`
    // overwrite default styles
    &&& {
        background: transparent;
        border: none;
        padding: 0 0 1px 0;

        :focus-within {
            outline: none;
            border: none;
            box-shadow: none;
        }
    }
`,ac=$.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Ir("Body","regular")}
    color: ${_r.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${_r.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return x`
                color: ${_r.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${_r.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?x`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:x`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`;var ic=Nt;var oc=Nt,sc=Lt,lc=Gt;var dc=Nt,cc=function(){this.__data__=new ic,this.size=0},uc=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},hc=function(e){return this.__data__.get(e)},pc=function(e){return this.__data__.has(e)},fc=function(e,t){var r=this.__data__;if(r instanceof oc){var n=r.__data__;if(!sc||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new lc(n)}return r.set(e,t),this.size=r.size,this};function mc(e){var t=this.__data__=new dc(e);this.size=t.size}mc.prototype.clear=cc,mc.prototype.delete=uc,mc.prototype.get=hc,mc.prototype.has=pc,mc.prototype.set=fc;var gc=mc;var bc=Gt,yc=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},vc=function(e){return this.__data__.has(e)};function wc(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new bc;++t<r;)this.add(e[t])}wc.prototype.add=wc.prototype.push=yc,wc.prototype.has=vc;var $c=wc,xc=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Cc=function(e,t){return e.has(t)};var Sc=function(e,t,r,n,a,i){var o=1&r,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var d=i.get(e),c=i.get(t);if(d&&c)return d==t&&c==e;var u=-1,h=!0,p=2&r?new $c:void 0;for(i.set(e,t),i.set(t,e);++u<s;){var f=e[u],m=t[u];if(n)var g=o?n(m,f,u,t,e,i):n(f,m,u,e,t,i);if(void 0!==g){if(g)continue;h=!1;break}if(p){if(!xc(t,(function(e,t){if(!Cc(p,t)&&(f===e||a(f,e,r,n,i)))return p.push(t)}))){h=!1;break}}else if(f!==m&&!a(f,m,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var kc=F.Uint8Array,Oc=vt,_c=Sc,Mc=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},jc=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Dc=Y?Y.prototype:void 0,Tc=Dc?Dc.valueOf:void 0;var Bc=function(e,t,r,n,a,i,o){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new kc(e),new kc(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Oc(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Mc;case"[object Set]":var l=1&n;if(s||(s=jc),e.size!=t.size&&!l)return!1;var d=o.get(e);if(d)return d==t;n|=2,o.set(e,t);var c=_c(s(e),s(t),n,a,i,o);return o.delete(e),c;case"[object Symbol]":if(Tc)return Tc.call(e)==Tc.call(t)}return!1};var Nc=function(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e},Lc=_e;var Ic=function(e,t,r){var n=t(e);return Lc(e)?n:Nc(n,r(e))};var Ec=function(e,t){for(var r=-1,n=null==e?0:e.length,a=0,i=[];++r<n;){var o=e[r];t(o,r,e)&&(i[a++]=o)}return i},Ac=function(){return[]},Pc=Object.prototype.propertyIsEnumerable,Fc=Object.getOwnPropertySymbols,Hc=Fc?function(e){return null==e?[]:(e=Object(e),Ec(Fc(e),(function(t){return Pc.call(e,t)})))}:Ac;var Rc=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},zc=ne,Vc=ae;var Wc=function(e){return Vc(e)&&"[object Arguments]"==zc(e)},Uc=ae,Yc=Object.prototype,qc=Yc.hasOwnProperty,Zc=Yc.propertyIsEnumerable,Qc=Wc(function(){return arguments}())?Wc:function(e){return Uc(e)&&qc.call(e,"callee")&&!Zc.call(e,"callee")},Gc={exports:{}};var Xc=function(){return!1};!function(e,t){var r=F,n=Xc,a=t&&!t.nodeType&&t,i=a&&e&&!e.nodeType&&e,o=i&&i.exports===a?r.Buffer:void 0,s=(o?o.isBuffer:void 0)||n;e.exports=s}(Gc,Gc.exports);var Kc=/^(?:0|[1-9]\d*)$/;var Jc=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Kc.test(e))&&e>-1&&e%1==0&&e<t};var eu=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},tu=ne,ru=eu,nu=ae,au={};au["[object Float32Array]"]=au["[object Float64Array]"]=au["[object Int8Array]"]=au["[object Int16Array]"]=au["[object Int32Array]"]=au["[object Uint8Array]"]=au["[object Uint8ClampedArray]"]=au["[object Uint16Array]"]=au["[object Uint32Array]"]=!0,au["[object Arguments]"]=au["[object Array]"]=au["[object ArrayBuffer]"]=au["[object Boolean]"]=au["[object DataView]"]=au["[object Date]"]=au["[object Error]"]=au["[object Function]"]=au["[object Map]"]=au["[object Number]"]=au["[object Object]"]=au["[object RegExp]"]=au["[object Set]"]=au["[object String]"]=au["[object WeakMap]"]=!1;var iu=function(e){return nu(e)&&ru(e.length)&&!!au[tu(e)]};var ou=function(e){return function(t){return e(t)}},su={exports:{}};!function(e,t){var r=E,n=t&&!t.nodeType&&t,a=n&&e&&!e.nodeType&&e,i=a&&a.exports===n&&r.process,o=function(){try{var e=a&&a.require&&a.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=o}(su,su.exports);var lu=iu,du=ou,cu=su.exports,uu=cu&&cu.isTypedArray,hu=uu?du(uu):lu,pu=Rc,fu=Qc,mu=_e,gu=Gc.exports,bu=Jc,yu=hu,vu=Object.prototype.hasOwnProperty;var wu=function(e,t){var r=mu(e),n=!r&&fu(e),a=!r&&!n&&gu(e),i=!r&&!n&&!a&&yu(e),o=r||n||a||i,s=o?pu(e.length,String):[],l=s.length;for(var d in e)!t&&!vu.call(e,d)||o&&("length"==d||a&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||bu(d,l))||s.push(d);return s},$u=Object.prototype;var xu=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||$u)};var Cu=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Su=xu,ku=Cu,Ou=Object.prototype.hasOwnProperty;var _u=Ee,Mu=eu;var ju=function(e){return null!=e&&Mu(e.length)&&!_u(e)},Du=wu,Tu=function(e){if(!Su(e))return ku(e);var t=[];for(var r in Object(e))Ou.call(e,r)&&"constructor"!=r&&t.push(r);return t},Bu=ju;var Nu=function(e){return Bu(e)?Du(e):Tu(e)},Lu=Ic,Iu=Hc,Eu=Nu;var Au=function(e){return Lu(e,Eu,Iu)},Pu=Object.prototype.hasOwnProperty;var Fu=function(e,t,r,n,a,i){var o=1&r,s=Au(e),l=s.length;if(l!=Au(t).length&&!o)return!1;for(var d=l;d--;){var c=s[d];if(!(o?c in t:Pu.call(t,c)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var p=!0;i.set(e,t),i.set(t,e);for(var f=o;++d<l;){var m=e[c=s[d]],g=t[c];if(n)var b=o?n(g,m,c,t,e,i):n(m,g,c,e,t,i);if(!(void 0===b?m===g||a(m,g,r,n,i):b)){p=!1;break}f||(f="constructor"==c)}if(p&&!f){var y=e.constructor,v=t.constructor;y==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(p=!1)}return i.delete(e),i.delete(t),p},Hu=et(F,"DataView"),Ru=Lt,zu=et(F,"Promise"),Vu=et(F,"Set"),Wu=et(F,"WeakMap"),Uu=ne,Yu=Re,qu="[object Map]",Zu="[object Promise]",Qu="[object Set]",Gu="[object WeakMap]",Xu="[object DataView]",Ku=Yu(Hu),Ju=Yu(Ru),eh=Yu(zu),th=Yu(Vu),rh=Yu(Wu),nh=Uu;(Hu&&nh(new Hu(new ArrayBuffer(1)))!=Xu||Ru&&nh(new Ru)!=qu||zu&&nh(zu.resolve())!=Zu||Vu&&nh(new Vu)!=Qu||Wu&&nh(new Wu)!=Gu)&&(nh=function(e){var t=Uu(e),r="[object Object]"==t?e.constructor:void 0,n=r?Yu(r):"";if(n)switch(n){case Ku:return Xu;case Ju:return qu;case eh:return Zu;case th:return Qu;case rh:return Gu}return t});var ah=gc,ih=Sc,oh=Bc,sh=Fu,lh=nh,dh=_e,ch=Gc.exports,uh=hu,hh="[object Arguments]",ph="[object Array]",fh="[object Object]",mh=Object.prototype.hasOwnProperty;var gh=function(e,t,r,n,a,i){var o=dh(e),s=dh(t),l=o?ph:lh(e),d=s?ph:lh(t),c=(l=l==hh?fh:l)==fh,u=(d=d==hh?fh:d)==fh,h=l==d;if(h&&ch(e)){if(!ch(t))return!1;o=!0,c=!1}if(h&&!c)return i||(i=new ah),o||uh(e)?ih(e,t,r,n,a,i):oh(e,t,l,r,n,a,i);if(!(1&r)){var p=c&&mh.call(e,"__wrapped__"),f=u&&mh.call(t,"__wrapped__");if(p||f){var m=p?e.value():e,g=f?t.value():t;return i||(i=new ah),a(m,g,r,n,i)}}return!!h&&(i||(i=new ah),sh(e,t,r,n,a,i))},bh=ae;var yh=function e(t,r,n,a,i){return t===r||(null==t||null==r||!bh(t)&&!bh(r)?t!=t&&r!=r:gh(t,r,n,a,e,i))},vh=gc,wh=yh;var $h=I;var xh=function(e){return e==e&&!$h(e)},Ch=xh,Sh=Nu;var kh=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Oh=function(e,t,r,n){var a=r.length,i=a,o=!n;if(null==e)return!i;for(e=Object(e);a--;){var s=r[a];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++a<i;){var l=(s=r[a])[0],d=e[l],c=s[1];if(o&&s[2]){if(void 0===d&&!(l in e))return!1}else{var u=new vh;if(n)var h=n(d,c,l,e,t,u);if(!(void 0===h?wh(c,d,3,n,u):h))return!1}}return!0},_h=function(e){for(var t=Sh(e),r=t.length;r--;){var n=t[r],a=e[n];t[r]=[n,a,Ch(a)]}return t},Mh=kh;var jh=fr,Dh=Qc,Th=_e,Bh=Jc,Nh=eu,Lh=gr;var Ih=function(e,t){return null!=e&&t in Object(e)},Eh=function(e,t,r){for(var n=-1,a=(t=jh(t,e)).length,i=!1;++n<a;){var o=Lh(t[n]);if(!(i=null!=e&&r(e,o)))break;e=e[o]}return i||++n!=a?i:!!(a=null==e?0:e.length)&&Nh(a)&&Bh(o,a)&&(Th(e)||Dh(e))};var Ah=yh,Ph=$r,Fh=function(e,t){return null!=e&&Eh(e,t,Ih)},Hh=Be,Rh=xh,zh=kh,Vh=gr;var Wh=vr;var Uh=function(e){return function(t){return null==t?void 0:t[e]}},Yh=function(e){return function(t){return Wh(t,e)}},qh=Be,Zh=gr;var Qh=function(e){var t=_h(e);return 1==t.length&&t[0][2]?Mh(t[0][0],t[0][1]):function(r){return r===e||Oh(r,e,t)}},Gh=function(e,t){return Hh(e)&&Rh(t)?zh(Vh(e),t):function(r){var n=Ph(r,e);return void 0===n&&n===t?Fh(r,e):Ah(t,n,3)}},Xh=function(e){return e},Kh=_e,Jh=function(e){return qh(e)?Uh(Zh(e)):Yh(e)};var ep=function(e){return"function"==typeof e?e:null==e?Xh:"object"==typeof e?Kh(e)?Gh(e[0],e[1]):Qh(e):Jh(e)},tp=ep,rp=ju,np=Nu;var ap=function(e){return function(t,r,n){var a=Object(t);if(!rp(t)){var i=tp(r);t=np(t),r=function(e){return i(a[e],e,a)}}var o=e(t,r,n);return o>-1?a[i?t[o]:o]:void 0}};var ip=me,op=1/0;var sp=function(e){return e?(e=ip(e))===op||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var lp=function(e,t,r,n){for(var a=e.length,i=r+(n?1:-1);n?i--:++i<a;)if(t(e[i],i,e))return i;return-1},dp=ep,cp=function(e){var t=sp(e),r=t%1;return t==t?r?t-r:t:0},up=Math.max;var hp=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var a=null==r?0:cp(r);return a<0&&(a=up(n+a,0)),lp(e,dp(t),a)},pp=ap(hp),fp=yh;var mp,gp=function(e,t){return fp(e,t)},bp={};Object.defineProperty(bp,"__esModule",{value:!0});var yp=e;const vp=e=>yp.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:yp.jsx("path",{d:"M9.99999 10.792C10.236 10.792 10.441 10.705 10.615 10.531C10.7883 10.3577 10.875 10.153 10.875 9.91701V6.70801C10.875 6.47201 10.7883 6.27067 10.615 6.10401C10.441 5.93734 10.236 5.85401 9.99999 5.85401C9.76399 5.85401 9.55899 5.94101 9.38499 6.11501C9.21166 6.28834 9.12499 6.49301 9.12499 6.72901V9.93801C9.12499 10.174 9.21166 10.3753 9.38499 10.542C9.55899 10.7087 9.76399 10.792 9.99999 10.792ZM9.99999 14.188C10.236 14.188 10.441 14.108 10.615 13.948C10.7883 13.788 10.875 13.576 10.875 13.312C10.875 13.076 10.7883 12.8713 10.615 12.698C10.441 12.5247 10.236 12.438 9.99999 12.438C9.76399 12.438 9.55899 12.5247 9.38499 12.698C9.21166 12.8713 9.12499 13.076 9.12499 13.312C9.12499 13.576 9.21166 13.788 9.38499 13.948C9.55899 14.108 9.76399 14.188 9.99999 14.188ZM9.99999 18.333C8.84733 18.333 7.76399 18.1143 6.74999 17.677C5.73599 17.2397 4.85399 16.646 4.10399 15.896C3.35399 15.146 2.76033 14.264 2.32299 13.25C1.88566 12.236 1.66699 11.1527 1.66699 10C1.66699 8.84734 1.88566 7.76401 2.32299 6.75001C2.76033 5.73601 3.35399 4.85401 4.10399 4.10401C4.85399 3.35401 5.73599 2.76034 6.74999 2.32301C7.76399 1.88567 8.84733 1.66701 9.99999 1.66701C11.1527 1.66701 12.236 1.88567 13.25 2.32301C14.264 2.76034 15.146 3.35401 15.896 4.10401C16.646 4.85401 17.2397 5.73601 17.677 6.75001C18.1143 7.76401 18.333 8.84734 18.333 10C18.333 11.1527 18.1143 12.236 17.677 13.25C17.2397 14.264 16.646 15.146 15.896 15.896C15.146 16.646 14.264 17.2397 13.25 17.677C12.236 18.1143 11.1527 18.333 9.99999 18.333Z",fill:"currentColor"})});vp.displayName="ExclamationCircleFillIcon",mp=bp.ExclamationCircleFillIcon=vp;var wp,$p={};Object.defineProperty($p,"__esModule",{value:!0});var xp=e;const Cp=e=>xp.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:xp.jsx("path",{d:"M7.97897 14.646C7.86764 14.646 7.75997 14.625 7.65597 14.583C7.55197 14.5417 7.4513 14.4723 7.35397 14.375L3.83297 10.854C3.6663 10.6873 3.58664 10.4757 3.59397 10.219C3.60064 9.96167 3.6873 9.74967 3.85397 9.583C4.02064 9.41634 4.22897 9.333 4.47897 9.333C4.72897 9.333 4.9373 9.41634 5.10397 9.583L8.02097 12.5L14.917 5.604C15.0836 5.43734 15.2883 5.354 15.531 5.354C15.7743 5.354 15.9793 5.43734 16.146 5.604C16.3126 5.77067 16.396 5.97567 16.396 6.219C16.396 6.46167 16.3126 6.66634 16.146 6.833L8.60397 14.375C8.50664 14.4723 8.40597 14.5417 8.30197 14.583C8.19797 14.625 8.0903 14.646 7.97897 14.646Z",fill:"currentColor"})});Cp.displayName="TickIcon",wp=$p.TickIcon=Cp;const Sp=$.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return x`
            height: ${t};
            width: ${r};
        `}}

    position: relative;
    border-radius: 4px;
    transition: all 200ms ease-in-out;
    border: 1px solid ${_r.Accent.Light[2]};
    background: transparent;

    ${e=>{let t,r;return e.selected&&(t=_r.Primary(e),r=_r.Primary(e)),e.disabled&&(t=_r.Neutral[6](e),r=_r.Neutral[6](e)),`\n\t\t\tborder: 1px solid ${t};\n\t\t\tbackground: ${r};\n\t\t`}}
`,kp=$.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Op=$(wp)`
    ${e=>{let t;if("small"===e.$displaySize)t="1.5rem";else t="1.75rem";return x`
            height: ${t};
            width: ${t};
        `}}
    color: ${e=>e.disabled?_r.Neutral[4]:_r.Neutral[8]};
`,_p=$(ol.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Mp=$.ul`
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: 0.5rem;

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${_r.Neutral[4]};
        border-right: 5px solid ${_r.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${Qr.mobileL} {
        max-height: 15rem;
    }
`,jp=$.li`
    :hover,
    :focus,
    :active {
        background: ${_r.Accent.Light[5]};
    }
    ${e=>{if(e.checked)return x`
                background: ${_r.Accent.Light[5]};
            `}}
`,Dp=$.button`
    display: flex;
    ${e=>e.multiSelect?x`
                padding: 0.5rem 1rem;
            `:x`
                padding: 0 1rem;
                min-height: 3.5rem;
                align-items: center;
            `}
    margin: 0 -0.5rem;
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${_r.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`;$.div`
    position: relative;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${_r.Neutral[8]};
`;const Tp=$.div`
    ${Ir("Body","regular")}
    color: ${_r.Neutral[1]};
    text-align: left;
    line-height: 1.375rem;
    overflow: hidden;
    ${e=>{if("middle"!==e.truncateType)return x`
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                `}}
`,Bp=$.span`
    color: ${_r.Neutral[4]};
    display: inline;
    padding-left: 0.4rem;
`,Np=$.div`
    display: flex;
    flex-direction: column;
`,Lp=$.div`
    width: 100%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Ip=$.div`
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;$(Ar.Hyperlink.Default)`
    color: ${_r.Neutral[1]} !important;
    padding: 1.25rem 1rem;
    margin-bottom: 0;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${_r.Accent.Light[3]};
        color: ${_r.Neutral[1]};
    }
`;const Ep=$((({className:e,checked:n,disabled:a,onChange:i,onKeyPress:s,displaySize:d="default",...c})=>{const[u,h]=o(n);l((()=>{h(n)}),[n]);const p=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;i&&i(e),s&&s(t)}};return t(Sp,{selected:u,disabled:a,className:e,"data-testid":"checkbox",$displaySize:d,role:"checkbox","aria-checked":u,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:p,children:[r(kp,{id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",tabIndex:-1,onChange:p,disabled:a,checked:u,...c}),u&&r(Op,{id:"checkmark","data-testid":"checkmark",disabled:a,$displaySize:d})]})}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Ap=$.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Pp=$.button`
    ${Ir("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${_r.Primary(e)};\n\t\t`}
`,Fp=$.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Hp=$(Ar.Body)``,Rp=$(mp)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${_r.Validation.Red.Icon};
`;var zp,Vp={};Object.defineProperty(Vp,"__esModule",{value:!0});var Wp=e;const Up=e=>Wp.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Wp.jsx("path",{d:"M15.688 16.896L11.125 12.333C10.667 12.6803 10.1703 12.941 9.635 13.115C9.10033 13.2883 8.54133 13.375 7.958 13.375C6.44467 13.375 5.15667 12.8507 4.094 11.802C3.03133 10.7533 2.5 9.472 2.5 7.958C2.5 6.44467 3.03133 5.15667 4.094 4.094C5.15667 3.03133 6.44467 2.5 7.958 2.5C9.472 2.5 10.7533 3.03133 11.802 4.094C12.8507 5.15667 13.375 6.44467 13.375 7.958C13.375 8.54133 13.2917 9.10033 13.125 9.635C12.9583 10.1703 12.6943 10.66 12.333 11.104L16.917 15.708C17.0837 15.8747 17.1633 16.0727 17.156 16.302C17.1493 16.5313 17.0627 16.7293 16.896 16.896C16.7293 17.0627 16.528 17.146 16.292 17.146C16.056 17.146 15.8547 17.0627 15.688 16.896ZM7.958 11.625C8.972 11.625 9.83667 11.2673 10.552 10.552C11.2673 9.83667 11.625 8.972 11.625 7.958C11.625 6.93067 11.2707 6.05567 10.562 5.333C9.854 4.611 8.986 4.25 7.958 4.25C6.93067 4.25 6.05567 4.611 5.333 5.333C4.611 6.05567 4.25 6.93067 4.25 7.958C4.25 8.986 4.611 9.854 5.333 10.562C6.05567 11.2707 6.93067 11.625 7.958 11.625Z",fill:"currentColor"})});Up.displayName="MagnifierIcon",zp=Vp.MagnifierIcon=Up;const Yp=$.li`
    background: ${_r.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,qp=$.input`
    ${Ir("Body","regular")}
    height: 3rem;
    border: none;
    background: transparent;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;

    :focus,
    :active {
        outline: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${_r.Neutral[3]};
    }
`,Zp=$(zp)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${_r.Neutral[3]};
`,Qp=$(nn)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${_r.Neutral[3]};
    cursor: pointer;
`,Gp=$(Kr)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${_r.Neutral[3]};
`,Xp=m(((e,n)=>{const{onClear:a,...i}=e;return t(Yp,{children:[r(Zp,{}),r(qp,{ref:n,...i}),i.value&&r(Qp,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:r(Gp,{})})]},"search")})),Kp=({listItems:e,listExtractor:a,valueExtractor:i,onSelectItem:d,listStyleWidth:c,visible:u,enableSearch:h,searchPlaceholder:p="Search",onSearch:f,searchFunction:m,onDismiss:g,multiSelect:b,selectedItems:y,onSelectAll:v,onRetry:w,itemsLoadState:$="success",itemTruncationType:x="end",renderListItem:C,onBlur:S,hideNoResultsDisplay:k,renderCustomCallToAction:O,..._})=>{const[M,j]=o(0),[D,T]=o(""),[B,N]=o(e),[L,I]=o(0),E=As({height:L}),A=s(),P=s(),F=s([]),H=s(),R=s(),z=s(M),V=s(B),W=e=>{z.current=e,j(e)},U=e=>{V.current=e,N(e)};l((()=>(document.addEventListener("keydown",X),()=>{document.removeEventListener("keydown",X)})),[]),l((()=>{Q(D)}),[D]),l((()=>{T(""),u?(setTimeout((()=>{I(G())})),H&&H.current?(H.current.focus(),W(-1)):F.current[M]&&F.current[M].focus()):I(0)}),[u]),l((()=>{if(u){const e=G();I(e)}}),[B]),l((()=>{U(e),T(""),W(0)}),[e]);const Y=e=>a?a(e):e.toString(),q=e=>{const t=a?a(e):e.toString();let r=0;return P&&P.current&&(r=P.current.getBoundingClientRect().width-100),wd.shouldTruncateToTwoLines("string"==typeof t?t:t.title,r)},Z=e=>!!pp(y,(t=>gp(t,e))),Q=t=>{if(""===t)U(e);else if(m){const e=m(t);U(e)}else{const r=e.filter((e=>{const r=Y(e),n="object"==typeof r?r.title.toLowerCase():r.toLowerCase();return"object"==typeof r&&r.secondaryLabel?n.includes(t.trim().toLowerCase())||r.secondaryLabel.includes(t.trim().toLowerCase()):n.includes(t.trim().toLowerCase())}));U(r)}},G=()=>(P&&P.current?P.current.getBoundingClientRect().height:0)+(R.current?R.current.getBoundingClientRect().height:0),X=e=>{if(A&&A.current.contains(e.target))switch(e.code){case"ArrowDown":if(z.current<V.current.length-1){const e=z.current+1;F.current[e].focus(),W(e)}break;case"ArrowUp":if(z.current>0){const e=z.current-1;F.current[e].focus(),W(z.current-1)}break;case"Escape":g&&g(!0)}},K=(e,t)=>{e.preventDefault(),d&&d(t,(e=>i?i(e):e)(t))},J=e=>{const t=e.target.value;T(t),f&&f()},ee=()=>{T(""),f&&f()},te=()=>{w&&w()},re=()=>{S&&S()},ne=e=>{const n=Y(e),a="string"==typeof n?n:n.title;return t(Np,{"data-testid":"truncate-middle-container",children:[r(Lp,{children:a}),t(Ip,{children:[" ",a]})]})},ae=e=>{const a=Y(e);return"string"==typeof a?r(n,{children:a}):t(n,{children:[a.title,a.secondaryLabel&&r(Bp,{children:a.secondaryLabel})]})},ie=()=>{if(!w||w&&"success"===$)return B.map(((e,n)=>r(jp,{checked:Z(e)&&!b,children:t(Dp,{onClick:t=>{K(t,e)},ref:e=>F.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:u?0:-1,multiSelect:b,onBlur:re,children:[b&&r(Ep,{checked:Z(e),displaySize:"small"}),C?C(e,{selected:Z(e)}):r(Tp,{truncateType:x,children:"middle"===x&&q(e)?ne(e):ae(e)})]})},((e,t)=>`item_${t}__${i?i(e):e}`)(e,n))))},oe=()=>{if(b&&B.length>0&&!D&&"success"===$)return r(Ap,{children:r(Pp,{onClick:v,children:0===y.length?"Select all":"Unselect all"})},"selectAll")},se=()=>{if(!k&&D&&0===B.length)return t(Fp,{"data-testid":"list-no-results",children:[r(Rp,{"data-testid":"no-result-icon"}),r(Hp,{children:"No results found."})]},"noResults")},le=()=>{if(w&&"loading"===$)return t(Fp,{"data-testid":"list-loading",children:[r(ql,{$buttonStyle:"secondary",size:24}),r(Hp,{children:"Loading..."})]},"loading")},de=()=>{if(w&&"fail"===$)return t(Fp,{"data-testid":"list-fail",children:[r(Rp,{"data-testid":"load-error-icon"}),r(Hp,{children:"Failed to load."}),r(Pp,{onClick:te,children:"Try again."})]},"noResults")};return r(n,{children:t(_p,{style:E,"data-testid":u?"dropdown-container":"dropdown-container-hidden",ref:A,children:[(()=>{if(u)return t(Mp,{ref:P,"data-testid":"dropdown-list",width:c,role:"list",..._,children:[(h||m)&&"success"===$?r(Xp,{ref:H,onChange:J,value:D,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:u?0:-1,onClear:ee}):null,oe(),se(),le(),de(),ie()]})})(),(()=>{if(u&&O)return r("div",{ref:R,"data-testid":"custom-cta",children:O(g,B)})})()]})})},Jp=$.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;

    ${Qr.tablet} {
        height: auto;
    }
`,ef=$.button`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    height: 3rem;
    width: 100%;
    border-radius: ${"4px"};
    cursor: pointer;
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${_r.Accent.Light[3]};
    }
`,tf=C`
	from {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}

	to {
		position: relative;
	}
`,rf=$.div`
    position: relative;
    border: 1px solid ${_r.Neutral[5]};
    border-radius: ${"4px"};
    background: ${_r.Neutral[8]};

    :focus-within {
        border: 1px solid ${_r.Accent.Light[1]};
        box-shadow: ${Fd};
    }

    ${e=>e.expanded?x`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:x`
                animation: ${tf} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?x`
                background: ${_r.Neutral[6](e)};

                ${ef} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${_r.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?x`
                border: none;
                background: transparent !important;

                ${ef} {
                    padding-left: 0rem;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?x`
                border: 1px solid ${_r.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${_r.Validation.Red.Border(e)};
                    box-shadow: ${Hd};
                }
            `:void 0}
`,nf=$.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${ln};
    margin-left: 1rem;
`,af=$(Ml)`
    color: ${_r.Neutral[3]};
    height: ${Tr.Body.fontSize}rem;
    width: ${Tr.Body.fontSize}rem;
`,of=$.div`
    height: 1px;
    background: ${_r.Neutral[5]};
    margin: 0 0.5rem;
`,sf=$.div`
    display: flex;
    flex: 1;
`,lf=$(Ar.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return x`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,df=$(lf)`
    color: ${_r.Neutral[3]};
`,cf=$.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;
`,uf=Jp,hf=$(rf)``,pf=$.div`
    position: relative;
    display: flex;
    margin: 0 1rem;
    ${e=>{if(e.$expanded)return x`
                border-bottom: 1px solid ${_r.Neutral[5](e)};
            `}}

    ${e=>e.$readOnly?x`
                border: 0;
                margin: 0;
            `:"right"===e.$position?x`
                        flex-direction: row-reverse;
                        margin: 0 0 0 1rem;
                    `:x`
                        flex-direction: row;
                    `}
`,ff=$(ef)`
    padding: 0;
    width: auto;
`,mf=$.div`
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: 0.75rem;
`,gf=$.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${ln};
    margin: 0 0.75rem;
`,bf=$(Ml)`
    color: ${_r.Neutral[3]};
    height: ${Tr.Body.fontSize}rem;
    width: ${Tr.Body.fontSize}rem;
    vertical-align: bottom;
`,yf=$.div`
    display: flex;
    flex: 1 1 auto;
`,vf=$(Ar.Body)`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 1px; // align with input
`,wf=$(vf)`
    color: ${_r.Neutral[3]};
`,$f=$.div`
    width: 1px;
    background: ${_r.Neutral[5]};

    ${e=>{if(e.$readOnly)return x`
                display: none;
            `}}

    ${e=>"right"===e.$position?x`
                    margin: 1rem 0.75rem;
                `:x`
                    margin: 1rem 0.75rem 1rem 0;
                `}
`,xf=({addon:e,error:a,onChange:i,readOnly:d,className:c,onBlur:u,...h})=>{const{placeholder:p,options:f,enableSearch:m,searchFunction:g,searchPlaceholder:b,valueExtractor:y,listExtractor:v,displayValueExtractor:w,selectedOption:$,onSelectOption:x,onHideOptions:C,onShowOptions:S,"data-selector-testid":k}=e.attributes,{position:O}=e,[_,M]=o($),[j,D]=o(!1),T=s(),B=s();l((()=>{M($)}),[$]),l((()=>(document.addEventListener("mousedown",I),()=>{document.removeEventListener("mousedown",I)})),[]);const N=()=>w?w(_):y?y(_):_.toString(),L=e=>{!e&&C&&C(),e&&S&&S()},I=e=>{if(!h.disabled){if(T&&T.current.contains(e.target))return;D(!1),L(!1),F()}},E=e=>{e.preventDefault(),h.disabled||(D(!j),L(!j))},A=(e,t)=>{M(e),D(!1),L(!1),B&&B.current.focus(),x&&x(e,t)},P=e=>{i&&i(e)},F=()=>{u&&u()},H=()=>{D(!1),L(!1),B&&B.current.focus()};return r(uf,{className:c,children:t(hf,{ref:T,disabled:h.disabled,error:a&&!j,expanded:j,$readOnly:d,children:[t(pf,{$expanded:j,$readOnly:d,$position:O,children:[d?_?r(mf,{children:r(vf,{"data-testid":"selector-label",children:N()})}):null:r(ff,{ref:B,type:"button",disabled:h.disabled,"data-testid":k||"addon-selector",onClick:E,children:t(n,{children:[t(yf,{children:[p&&!_&&r(wf,{children:p}),_&&r(vf,{"data-testid":"selector-label",children:N()})]}),r(gf,{$expanded:j,children:r(bf,{})})]})}),r($f,{$readOnly:d,$position:O}),r(nc,{...h,readOnly:d,error:a,onChange:P,"data-testid":h["data-testid"]||"input",onBlur:F})]}),f&&f.length>0?r(Kp,{listItems:f,selectedItems:$?[$]:[],onSelectItem:A,valueExtractor:y,listExtractor:v,visible:j,enableSearch:m,searchFunction:g,searchPlaceholder:b,"data-testid":"dropdown-list",onBlur:F,onDismiss:H}):null]})})},Cf=i.forwardRef((({addon:e,error:n,className:a,...i},o)=>{const s=()=>r(rc,{disabled:i.disabled,$error:n,$readOnly:i.readOnly,"data-testid":i["data-testid"],className:a,children:r(nc,{ref:o,...i,"data-testid":"input"})});if(!e)return s();{const{type:o="label",position:l="left"}=e,{allowClear:d}=i;switch(o){case"list":{const t=e.attributes;return t.options&&t.options.length>0?r(xf,{addon:e,error:n,className:a,...i}):s()}case"custom":{const o=e.attributes;return o.children?t(Gd,{$error:n,disabled:i.disabled,$readOnly:i.readOnly,"data-testid":i["data-testid"],$position:l,className:a,children:[r(ac,{"data-testid":"addon",disabled:i.disabled,$readOnly:i.readOnly,$position:l,children:o.children}),r(nc,{...i,allowClear:d&&"right"!==l,error:n,"data-testid":"input"})]}):s()}default:{const o=e.attributes;return o.value?t(Gd,{disabled:i.disabled,$error:n,$readOnly:i.readOnly,"data-testid":i["data-testid"],$position:l,className:a,children:[r(ac,{"data-testid":"addon",disabled:i.disabled,$readOnly:i.readOnly,$position:l,children:o.value}),r(nc,{...i,allowClear:d&&"right"!==l,error:n,"data-testid":"input"})]}):s()}}}})),Sf=i.forwardRef(((e,t)=>{const{label:n,errorMessage:a,id:i="form-field-group","data-error-testid":o,"data-testid":s,...l}=e;return r(xn,{id:i,label:n,errorMessage:a,disabled:l.disabled,"data-error-testid":o,children:r(Cf,{ref:t,id:`${i}-base`,"data-testid":s||i,error:!!a,...l})})})),kf=({children:e,show:t,error:n,disabled:a,testId:i,onBlur:o,readOnly:d})=>{const c=s(),u=s(t);l((()=>(document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)})),[o]),l((()=>{u.current=t}),[t]);const h=e=>{if(!a){if(c&&c.current.contains(e.target))return;u.current&&o()}};return r(Jp,{children:r(rf,{ref:c,error:n&&!t,disabled:a,$readOnly:d,expanded:t,"data-testid":i,children:e})})},Of=({selectedOptions:e,placeholder:a="Select",options:i,disabled:d,error:c,"data-testid":u,enableSearch:h=!1,searchFunction:p,searchPlaceholder:f,valueExtractor:m,listExtractor:g,onSelectOptions:b,listStyleWidth:y,onShowOptions:v,onHideOptions:w,onRetry:$,optionsLoadState:x="success",optionTruncationType:C="end",...S})=>{const[k,O]=o(e||[]),[_,M]=o(!1),j=s();l((()=>{O(e||[])}),[e]);const D=(e,t)=>{const r=[...k],n=hp(k,(e=>(m?m(e):e)===t));n>-1?r.splice(n,1):r.push(e),O(r),N(!1),j&&j.current.focus(),b&&b(r)},T=()=>{_&&(M(!1),N(!1)),j&&j.current.focus()},B=()=>{k&&k.length>0?(O([]),b([])):(O(i),b(i))},N=e=>{!e&&w&&w(),e&&v&&v()};return t(kf,{show:_,error:c&&!_,disabled:d,testId:u,onBlur:()=>{M(!1),N(!1)},children:[r(ef,{ref:j,type:"button","data-testid":"selector",onClick:e=>{e.preventDefault(),d||(M(!_),N(!_))},...S,children:t(n,{children:[r(sf,{children:k&&0!==k.length?r(lf,{children:k&&0!=k.length?`${k.length} selected`:a}):r(df,{truncateType:C,children:a})}),r(nf,{expanded:_,children:r(af,{})})]})}),_&&r(of,{}),i&&i.length>0||$?r(Kp,{listItems:i,onSelectItem:D,onDismiss:T,valueExtractor:m,listExtractor:g,listStyleWidth:y,visible:_,enableSearch:h,searchFunction:p,searchPlaceholder:f,"data-testid":"dropdown-list",multiSelect:!0,selectedItems:k,onSelectAll:B,onRetry:$,itemsLoadState:x,itemTruncationType:C}):null]})},_f=({selectedOption:e,placeholder:a="Select",options:i,disabled:d,error:c,"data-testid":u,id:h,enableSearch:p=!1,searchFunction:f,searchPlaceholder:m,valueExtractor:g,valueToStringFunction:b,listExtractor:y,displayValueExtractor:v,onSelectOption:w,listStyleWidth:$,onShowOptions:x,onHideOptions:C,onRetry:S,optionsLoadState:k="success",optionTruncationType:O="end",renderCustomSelectedOption:_,renderListItem:M,hideNoResultsDisplay:j,renderCustomCallToAction:D,...T})=>{const[B,N]=o(e),[L,I]=o(!1),E=s(),A=s();l((()=>{N(e)}),[e]);const P=(e,t)=>{N(e),I(!1),R(!1),E&&E.current.focus(),w&&w(e,t)},F=e=>{L&&(I(!1),R(!1)),e&&E&&E.current.focus()},H=e=>{if("middle"===O){let t=0;return A&&A.current&&(t=A.current.getBoundingClientRect().width),wd.truncateOneLine((e=>"string"==typeof e?e:b(e)||e.toString())(e),t,120,8)}return e},R=e=>{!e&&C&&C(),e&&x&&x()};return t(kf,{show:L,error:c&&!L,disabled:d,readOnly:T.readOnly,testId:u,onBlur:()=>{I(!1),R(!1)},children:[r(ef,{ref:E,type:"button","data-testid":h||"selector",disabled:d,onClick:e=>{e.preventDefault(),d||T.readOnly||(I(!L),R(!L))},...T,children:t(n,{children:[r(sf,{ref:A,children:B?_?_(B):r(lf,{truncateType:O,children:H(v?v(B):g?g(B):B.toString())}):r(df,{truncateType:O,children:a})}),!T.readOnly&&r(nf,{expanded:L,children:r(af,{})})]})}),L&&r(of,{}),i&&i.length>0?r(Kp,{listItems:i,onSelectItem:P,onDismiss:F,valueExtractor:g,listExtractor:y,listStyleWidth:$,visible:L,enableSearch:p,searchPlaceholder:m,searchFunction:f,"data-testid":"dropdown-list",selectedItems:B?[B]:[],onRetry:S,itemsLoadState:k,itemTruncationType:O,renderListItem:M,hideNoResultsDisplay:j,renderCustomCallToAction:D}):null]})},Mf=({selectedOptions:e,placeholders:a={from:"Select",to:"Select"},options:i,disabled:d,readOnly:c,error:u,"data-testid":h,id:p,enableSearch:f=!1,searchFunction:m,searchPlaceholder:g,valueExtractor:b,valueToStringFunction:y,listExtractor:v,displayValueExtractor:w,onSelectOption:$,listStyleWidth:x,onShowOptions:C,onHideOptions:S,onRetry:k,optionsLoadState:O={from:"success",to:"success"},optionTruncationType:_="middle",renderCustomSelectedOption:M,renderListItem:j,renderCustomCallToAction:D,...T})=>{const[B,N]=o(),[L,I]=o(),E=s(),A={from:s(),to:s()},[P,F]=o("none");l((()=>{N(e?.from),I(e?.to)}),[e]);const H=(e,t)=>{e.stopPropagation(),e.preventDefault(),d||c||F("from"===t?"from":"to"===t&&B?"to":"from")},R=e=>{const t="from"===e?B:L;return w?w(t):b?b(t):t?.toString()},z=(e,t)=>{if("middle"===_){let r=0;return A[e]&&A[e].current&&(r=A[e].current.getBoundingClientRect().width),wd.truncateOneLine((e=>"string"==typeof e?e:y(e)||e.toString())(t),r,120,8)}return t},V=e=>{!e&&S&&S(),e&&C&&C()},W=e=>{const t="from"===e?B:L;return t?M?M(t):r(lf,{truncateType:_,children:z(e,R(e))}):r(df,{truncateType:_,children:z(e,a[e])})},U=e=>r(sf,{onClick:t=>H(t,e),style:"to"===e&&c?{marginLeft:"1rem"}:{},ref:A[e],children:W(e)}),Y=(e,t)=>{if(e&&e.length>0){const n="from"===t?B:L;return r(Kp,{listItems:e,onSelectItem:(e,r)=>((e,t,r)=>{"from"===r?N(e):I(e),V(!1),E&&E.current.focus(),$&&$({[r]:e},t),"from"===r?(I(void 0),F("to"),V(!0)):F("none")})(e,r,t),onDismiss:()=>(F("none"),V(!1),E&&E.current.focus(),void(B&&L||(I(void 0),N(void 0)))),valueExtractor:b,listExtractor:v,listStyleWidth:x,visible:"none"!==P,enableSearch:f,searchPlaceholder:g,searchFunction:m,"data-testid":`${t}-dropdown-list`,selectedItems:n?[n]:[],onRetry:k,itemsLoadState:O[t],itemTruncationType:_,renderListItem:j,renderCustomCallToAction:D})}return null};return t(kf,{show:"none"!==P,"data-testid":T["data-testid"],error:u&&!("none"!==P),disabled:d,readOnly:c,testId:h,onBlur:()=>{V(!1),F("none"),B&&L||(I(void 0),N(void 0))},children:[t(ef,{type:"button","data-testid":p||"selector",disabled:d,ref:E,style:{gap:"1.8rem"},onClick:e=>H(e),...T,children:[U("from"),r(cf,{tabIndex:-1,children:r(qd,{})}),U("to")]}),"none"!==P&&r(of,{}),"from"===P?Y(i.from,"from"):"to"===P?Y(i.to,"to"):r(n,{}),r(Zd,{$stickTo:"top",$position:"from"===P?"start":"to"===P?"end":"none",$disableMobile:!1})]})},jf=$(Ar.H6)`
    text-align: right;

    ${e=>{if(e.disabled)return x`
                color: ${_r.Neutral[4](e)};
            `}}
`,Df=({value:e,maxLength:t,disabled:a,renderCustomCounter:s})=>{const[d,c]=o("");l((()=>{c(u(`${e||""}`))}),[e,t]);const u=e=>{if(s)return s(t,e.toString().length);{const r=t-e.toString().length;return r<=1?`${r} character left`:`${r.toLocaleString()} characters left`}};return r(n,{children:i.isValidElement(d)?d:r(jf,{"data-testid":"counter-label",weight:"semibold",disabled:a,children:d})})},Tf=$.div`
    display: flex;
    flex-direction: column;
`,Bf=$.textarea`
    border: 1px solid ${_r.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${ln};

    ${Ir("Body","regular")}
    color: ${_r.Neutral[1]};
    background: ${_r.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${_r.Accent.Light[1]};
        box-shadow: ${Fd};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${_r.Neutral[3]};
    }

    ${e=>e.readOnly?x`
                border: none;
                padding: 0.75rem 0;
                background: transparent !important;

                :focus,
                :active {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?x`
                background: ${_r.Neutral[6](e)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${_r.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?x`
                border: 1px solid ${_r.Validation.Red.Border(e)};

                :focus,
                :active {
                    border: 1px solid ${_r.Validation.Red.Border(e)};
                    box-shadow: ${Hd};
                }
            `:void 0}
`,Nf=i.forwardRef((({value:e,disabled:t,error:n,rows:a=5,...i},o)=>r(Bf,{ref:o,disabled:t,value:e,error:n,rows:a,...i})));i.forwardRef((({value:e,disabled:n,rows:a=5,onChange:i,...s},d)=>{const[c,u]=o(e);l((()=>{u(e)}),[e]);return t(Tf,{children:[r(Bf,{ref:d,disabled:n,value:c,rows:a||5,onChange:e=>{const t=e.target.value;s.maxLength&&t.length>s.maxLength||(u(t),e.target.value=t,i&&i(e))},...s}),s.maxLength&&r(Df,{disabled:n,value:c,maxLength:s.maxLength,renderCustomCounter:s.renderCustomCounter})]})}));const Lf=$.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.25rem;
`,If=$.div`
    display: flex;
    flex: 1;
    margin-right: 0.75rem;
`,Ef=$(yn)`
    margin-top: 0;
`,Af=i.forwardRef(((e,n)=>{const{label:a,value:i,errorMessage:s,id:d="form-textarea","data-error-testid":c,"data-testid":u,onChange:h,...p}=e,[f,m]=o(i);l((()=>{m(i)}),[i]);return t(xn,{id:d,label:a,disabled:p.disabled,children:[r(Nf,{id:`${d}-base`,"data-testid":u||d,value:f,error:!!s,onChange:e=>{const t=e.target.value;p.maxLength&&t.length>p.maxLength||(m(t),e.target.value=t,h&&h(e))},ref:n,...p}),t(Lf,{children:[s&&r(If,{children:r(Ef,{weight:"semibold","data-testid":c||(d?`${d}-error-message`:"error-message"),children:s})}),p.maxLength&&r(Df,{disabled:p.disabled,value:f,maxLength:p.maxLength,renderCustomCounter:p.renderCustomCounter})]})]})}));var Pf;!function(e){e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:"am"};if(!t)return r;try{if("24hr"===e){const n=Rf(t,e);r.minute=wd.padValue(n.minute);const a=parseInt(n.hour);0===Math.floor(a/12)?(r.period="am",r.hour=0===a?"12":wd.padValue(a.toString())):(r.period="pm",r.hour=12===a?a.toString():wd.padValue((a-12).toString()))}else{const n=Rf(t,e);r.hour=wd.padValue(n.hour),r.minute=wd.padValue(n.minute),r.period="am"===n.period.toLowerCase()?"am":"pm"}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?wd.padValue("0"):"55";const n=Math.floor(r/5),a=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return wd.padValue((5*a).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?wd.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?wd.padValue(n.toString()):13===n?wd.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r="pm"===e.period?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return wd.padValue(r)},e.formatValue=(e,t)=>{try{const r=Rf(e,t),n=wd.padValue(r.hour);let a=`${n}:${wd.padValue(r.minute)}`;return"12hr"===t?(a+=r.period.toLowerCase(),a):a}catch(e){return""}}}(Pf||(Pf={}));const Ff=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},Hf=e=>{const t=parseInt(e);return t>=0&&t<=59},Rf=(e,t)=>{const r=e.split(":"),n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!Ff(r[0],t)||!Hf(e)||"am"!==(a=i).toLowerCase()&&"pm"!==a.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!Ff(r[0],t)||!Hf(r[1]))throw n;return{hour:r[0],minute:r[1]};var a};var zf,Vf={};Object.defineProperty(Vf,"__esModule",{value:!0});var Wf=e;const Uf=e=>Wf.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Wf.jsx("path",{d:"M17.7279 14.2091C17.5059 14.4311 17.2492 14.5421 16.9579 14.5421C16.6659 14.5421 16.4089 14.4311 16.1869 14.2091L10.1659 8.18812L4.12389 14.2301C3.91589 14.4381 3.66589 14.5421 3.37389 14.5421C3.08256 14.5421 2.82589 14.4311 2.60389 14.2091C2.39523 14.0005 2.29089 13.7468 2.29089 13.4481C2.29089 13.1495 2.39523 12.8961 2.60389 12.6881L9.54089 5.75012C9.63823 5.65346 9.73889 5.58412 9.84289 5.54212C9.94689 5.50079 10.0546 5.48012 10.1659 5.48012C10.2772 5.48012 10.3849 5.50079 10.4889 5.54212C10.5929 5.58412 10.6936 5.65346 10.7909 5.75012L17.7489 12.7091C17.9716 12.9311 18.0759 13.1845 18.0619 13.4691C18.0479 13.7538 17.9366 14.0005 17.7279 14.2091Z",fill:"currentColor"})});Uf.displayName="ChevronUpIcon",zf=Vf.ChevronUpIcon=Uf;const Yf=$.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem;

    // Content positioning style
    ${e=>{if(!e.$indicator)return x`
                justify-content: center;
            `}}

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?x`
                        border-color: ${_r.Validation.Red.Icon};
                        background: ${_r.Neutral[8]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${_r.Shadow.Red};
                        }
                    `:e.$disabled?x`
                        border-color: transparent;
                    `:x`
                        border-color: transparent;

                        :hover {
                            background: ${_r.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?x`
                        background: ${_r.Neutral[6]};
                        border-color: ${_r.Neutral[5]};
                    `:e.$disabled&&e.$selected?x`
                        background: ${_r.Neutral[6]};
                        border-color: ${_r.Neutral[4]};
                    `:e.$error?x`
                        background: ${_r.Neutral[8]};
                        border-color: ${_r.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${_r.Shadow.Red};
                        }
                    `:e.$selected?x`
                        background: ${_r.Accent.Light[5]};
                        border-color: ${_r.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${_r.Shadow.Accent};
                        }
                    `:x`
                        background: ${_r.Neutral[8]};
                        border-color: ${_r.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${_r.Shadow.Accent};
                            border-color: ${_r.Accent.Light[1]};
                        }
                    `}
`,qf=$.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
`,Zf=$.div`
    display: flex;
    flex-direction: column;
`,Qf=$.label`
    ${e=>e.$selected&&!e.$indicator?x`
                ${Ir("H4","semibold")}
            `:x`
                ${Ir("H4","regular")}
            `}

    color: ${_r.Neutral[1]};

    ${e=>e.$disabled?x`
                color: ${_r.Neutral[3](e)};
            `:e.$selected?x`
                color: ${_r.Primary(e)};
            `:void 0}
`;var Gf,Xf={};Object.defineProperty(Xf,"__esModule",{value:!0});var Kf=e;const Jf=e=>Kf.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Kf.jsx("path",{d:"M10 18C8.90267 18 7.868 17.7917 6.896 17.375C5.924 16.9583 5.07333 16.3853 4.344 15.656C3.61467 14.9267 3.04167 14.076 2.625 13.104C2.20833 12.132 2 11.0973 2 10C2 8.88867 2.20833 7.85033 2.625 6.885C3.04167 5.92033 3.61467 5.07333 4.344 4.344C5.07333 3.61467 5.924 3.04167 6.896 2.625C7.868 2.20833 8.90267 2 10 2C11.1113 2 12.1497 2.20833 13.115 2.625C14.0797 3.04167 14.9267 3.61467 15.656 4.344C16.3853 5.07333 16.9583 5.92033 17.375 6.885C17.7917 7.85033 18 8.88867 18 10C18 11.0973 17.7917 12.132 17.375 13.104C16.9583 14.076 16.3853 14.9267 15.656 15.656C14.9267 16.3853 14.0797 16.9583 13.115 17.375C12.1497 17.7917 11.1113 18 10 18ZM10 16.5C11.8053 16.5 13.34 15.868 14.604 14.604C15.868 13.34 16.5 11.8053 16.5 10C16.5 8.19467 15.868 6.66 14.604 5.396C13.34 4.132 11.8053 3.5 10 3.5C8.19467 3.5 6.66 4.132 5.396 5.396C4.132 6.66 3.5 8.19467 3.5 10C3.5 11.8053 4.132 13.34 5.396 14.604C6.66 15.868 8.19467 16.5 10 16.5Z",fill:"currentColor"})});Jf.displayName="CircleIcon",Gf=Xf.CircleIcon=Jf;var em,tm={};Object.defineProperty(tm,"__esModule",{value:!0});var rm=e;const nm=e=>rm.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:rm.jsx("path",{d:"M10 14C11.1113 14 12.0557 13.611 12.833 12.833C13.611 12.0557 14 11.1113 14 10C14 8.88867 13.611 7.94433 12.833 7.167C12.0557 6.389 11.1113 6 10 6C8.88867 6 7.94433 6.389 7.167 7.167C6.389 7.94433 6 8.88867 6 10C6 11.1113 6.389 12.0557 7.167 12.833C7.94433 13.611 8.88867 14 10 14ZM10 18C8.90267 18 7.868 17.7917 6.896 17.375C5.924 16.9583 5.07333 16.3853 4.344 15.656C3.61467 14.9267 3.04167 14.076 2.625 13.104C2.20833 12.132 2 11.0973 2 10C2 8.88867 2.20833 7.85033 2.625 6.885C3.04167 5.92033 3.61467 5.07333 4.344 4.344C5.07333 3.61467 5.924 3.04167 6.896 2.625C7.868 2.20833 8.90267 2 10 2C11.1113 2 12.1497 2.20833 13.115 2.625C14.0797 3.04167 14.9267 3.61467 15.656 4.344C16.3853 5.07333 16.9583 5.92033 17.375 6.885C17.7917 7.85033 18 8.88867 18 10C18 11.0973 17.7917 12.132 17.375 13.104C16.9583 14.076 16.3853 14.9267 15.656 15.656C14.9267 16.3853 14.0797 16.9583 13.115 17.375C12.1497 17.7917 11.1113 18 10 18ZM10 16.5C11.8053 16.5 13.34 15.868 14.604 14.604C15.868 13.34 16.5 11.8053 16.5 10C16.5 8.19467 15.868 6.66 14.604 5.396C13.34 4.132 11.8053 3.5 10 3.5C8.19467 3.5 6.66 4.132 5.396 5.396C4.132 6.66 3.5 8.19467 3.5 10C3.5 11.8053 4.132 13.34 5.396 14.604C6.66 15.868 8.19467 16.5 10 16.5Z",fill:"currentColor"})});nm.displayName="CircleDotIcon",em=tm.CircleDotIcon=nm;var am,im={};Object.defineProperty(im,"__esModule",{value:!0});var om=e;const sm=e=>om.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:om.jsx("path",{d:"M4.5 17C4.08333 17 3.72933 16.854 3.438 16.562C3.146 16.2707 3 15.9167 3 15.5V4.5C3 4.08333 3.146 3.72933 3.438 3.438C3.72933 3.146 4.08333 3 4.5 3H15.5C15.9167 3 16.2707 3.146 16.562 3.438C16.854 3.72933 17 4.08333 17 4.5V15.5C17 15.9167 16.854 16.2707 16.562 16.562C16.2707 16.854 15.9167 17 15.5 17H4.5ZM4.5 15.5H15.5V4.5H4.5V15.5Z",fill:"currentColor"})});sm.displayName="SquareIcon",am=im.SquareIcon=sm;var lm,dm={};Object.defineProperty(dm,"__esModule",{value:!0});var cm=e;const um=e=>cm.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:cm.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H15.75C16.236 2.5 16.6493 2.67 16.99 3.01C17.33 3.35067 17.5 3.764 17.5 4.25V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM8.875 13.188C8.98633 13.188 9.094 13.167 9.198 13.125C9.302 13.083 9.40267 13.0137 9.5 12.917L14.125 8.292C14.2917 8.12533 14.375 7.924 14.375 7.688C14.375 7.45133 14.2917 7.24267 14.125 7.062C13.9443 6.89533 13.736 6.812 13.5 6.812C13.264 6.812 13.0627 6.89533 12.896 7.062L8.875 11.083L7.125 9.333C6.95833 9.16633 6.757 9.083 6.521 9.083C6.285 9.083 6.08367 9.16633 5.917 9.333C5.73633 9.51367 5.646 9.722 5.646 9.958C5.646 10.194 5.73633 10.3953 5.917 10.562L8.25 12.917C8.34733 13.0137 8.448 13.083 8.552 13.125C8.656 13.167 8.76367 13.188 8.875 13.188Z",fill:"currentColor"})});um.displayName="SquareTickFillIcon",lm=dm.SquareTickFillIcon=um;const hm=$.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?x`
                    color: ${_r.Primary};
                `:x`
                    color: ${_r.Neutral[4]};
                `};
    }
`,pm=({type:e,active:t=!1,disabled:n,className:a})=>{let i;switch(e){case"checkbox":i=r(t?lm:am,{});break;case"radio":i=r(t?em:Gf,{});break;case"tick":i=r(wp,{});break;case"cross":i=r(Kr,{});break;default:i=null}return r(hm,{className:a,$active:t,disabled:n,children:i})},fm=({type:e="checkbox",indicator:n,checked:a,styleType:i="default",children:d,disabled:c,error:u,name:h,id:p,className:f,"data-testid":m,onChange:g})=>{const[b,y]=o(a),[v]=o(vd.generate()),w=p?`${p}-input`:`tg-${v}-input`,$=s();l((()=>{y(a)}),[a]);return t(Yf,{$selected:b,$disabled:c,className:f,$styleType:i,$error:u,$indicator:n,id:p,"data-testid":m,children:[n&&(()=>{let t;switch(e){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=e}return r(pm,{type:t,active:b,disabled:c})})(),r(qf,{ref:$,name:h,id:w,type:"checkbox"===e?"checkbox":"radio","data-testid":"toggle-input",disabled:c,onChange:t=>{if(!c){switch(e){case"checkbox":b||y((e=>!e));break;case"radio":case"yes":case"no":b||y(!0)}g&&g(t)}},checked:b}),r(Zf,{children:r(Qf,{htmlFor:w,$selected:b,$indicator:n,$disabled:c,"data-testid":"toggle-label",children:d})})]})},mm=$(ol.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    width: 27rem;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${_r.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${Qr.tablet} {
        width: 100%;
    }
`,gm=$.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,bm=$.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Qr.mobileS} {
        flex-direction: column;
    }
`,ym=$.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;

    ${Qr.mobileS} {
        border-top: 1px solid ${_r.Neutral[5]};
        margin-top: 2rem;
        padding-top: 1.5rem;
    }
`,vm=$.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${Qr.mobileM} {
        margin-right: 0;
    }
`,wm=$.div`
    display: flex;

    ${Qr.tablet} {
        flex-direction: column;
    }

    ${Qr.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,$m=$.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,xm=$(nn)`
    width: 5rem;
    padding: 1rem 0;
    color: ${_r.Primary};
`,Cm=$(Ar.Body)`
    margin: 0 0.75rem;

    ${Qr.tablet} {
        margin: 0 0.5rem;
    }

    ${Qr.mobileS} {
        margin: 0 0.75rem;
    }
`,Sm=$.input`
    ${Ir("Body","regular")}
    border-radius: ${"4px"};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${_r.Neutral[5]};
    background: ${_r.Neutral[8]};
    color: ${_r.Neutral[1]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${_r.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px ${_r.Shadow.Accent};
    }

    :focus::placeholder {
        color: transparent;
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

    ${Qr.mobileS} {
        width: 6rem;
    }
`,km=$(fm)`
    min-width: 5rem;

    :not(:last-of-type) {
        margin-right: 0.5rem;
    }

    ${Qr.tablet} {
        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: 0.5rem;
        }
    }

    ${Qr.mobileS} {
        width: 50%;
        :not(:last-of-type) {
            margin-right: 0.5rem;
            margin-bottom: 0;
        }
    }
`,Om=$(Zl.Small)`
    width: 7rem;

    :not(:last-of-type) {
        margin-right: 0.5rem;
    }

    ${Qr.tablet} {
        width: 50%;
    }
`;var _m,Mm,jm;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(_m||(_m={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(Mm||(Mm={})),function(e){e.AM="am",e.PM="pm"}(jm||(jm={}));const Dm=({id:e,value:n,show:a,format:i,onChange:d,onCancel:c})=>{const u=Pf.getTimeValues(i,n),[h,p]=o(u.hour),[f,m]=o(u.minute),[b,y]=o(u.period),v=s(),w=s(),$=va();l((()=>{if(a&&v.current&&v.current.focus(),a){const{hour:e,minute:t,period:r}=Pf.getTimeValues(i,n);p(e),m(t),y(r)}}),[a,n,i]),l((()=>{const e=v.current,t=w.current;return e&&e.addEventListener("keydown",x),t&&t.addEventListener("keydown",x),()=>{e&&e.removeEventListener("keydown",x),t&&t.removeEventListener("keydown",x)}}),[]);const x=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},C=g((e=>{switch(e.currentTarget.name){case _m.MINUTE_UP:m(Pf.updateMinutes(f,"add"));break;case _m.MINUTE_DOWN:m(Pf.updateMinutes(f,"minus"));break;case _m.HOUR_UP:p(Pf.updateHours(h,"add"));break;case _m.HOUR_DOWN:p(Pf.updateHours(h,"minus"))}}),[h,f]),S=e=>{e.target.select()},k=e=>{const t=e.target.value;switch(e.target.name){case Mm.HOUR:t.length<=2&&p(t);break;case Mm.MINUTE:t.length<=2&&m(t)}},O=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case Mm.HOUR:{const r=t>23||t<0?u.hour:Pf.convertHourTo12HourFormat(e.target.value);p(r);break}case Mm.MINUTE:{const r=t>59||t<0?u.minute:e.target.value;m(wd.padValue(r));break}}},_=e=>{switch(e.target.name){case jm.AM:y("am");break;case jm.PM:y("pm")}},M=t=>e?`${e}-${t}`:t,j=As({height:a?$.height+32:0});return r(mm,{"data-testid":"animated-dropdown-wrapper",style:j,children:t(gm,{ref:$.ref,"data-testid":M("timepicker-dropdown"),children:[t(bm,{children:[t(vm,{children:[t($m,{children:[r(xm,{"aria-label":"increase hour",name:_m.HOUR_UP,type:"button",tabIndex:-1,onClick:C,"data-testid":M("hour-increment-button"),children:r(zf,{})}),r(Sm,{"aria-label":"hour",type:"number",name:Mm.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:h,onFocus:S,onChange:k,onBlur:O,min:1,max:12,placeholder:"HH","data-testid":M("hour-input")}),r(xm,{"aria-label":"decrease hour",name:_m.HOUR_DOWN,type:"button",tabIndex:-1,onClick:C,"data-testid":M("hour-decrement-button"),children:r(Ml,{})})]}),r(Cm,{children:":"}),t($m,{children:[r(xm,{"aria-label":"increase minute",name:_m.MINUTE_UP,type:"button",tabIndex:-1,onClick:C,"data-testid":M("minute-increment-button"),children:r(zf,{})}),r(Sm,{"aria-label":"minute",type:"number",name:Mm.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:f,onChange:k,onBlur:O,onFocus:S,min:0,max:59,placeholder:"MM","data-testid":M("minute-input")}),r(xm,{"aria-label":"decrease minute",name:_m.MINUTE_DOWN,type:"button",tabIndex:-1,onClick:C,"data-testid":M("minute-decrement-button"),children:r(Ml,{})})]})]}),t(wm,{children:[r(km,{checked:"am"===b,name:jm.AM,type:"radio",onChange:_,"data-testid":M("am-toggle"),"aria-label":"AM",children:"AM"}),r(km,{checked:"pm"===b,name:jm.PM,type:"radio",onChange:_,"data-testid":M("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),t(ym,{children:[r(Om,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":M("cancel-button"),children:"Cancel"}),r(Om,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===i?Pf.convertTo24HourFormat({hour:h,minute:f,period:b}):`${h}:${f}${b}`,d(e)},disabled:""===h||""===f,"data-testid":M("confirm-button"),children:"Confirm"})]})]})})},Tm=$.div`
    position: relative;
`,Bm=$.input`
    ${Ir("Body","regular")}
    border: 1px solid ${_r.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.2rem 1rem 0.3rem 1rem; // Somehow the input text appears lower
    height: 3rem;
    width: 100%;
    background: ${_r.Neutral[8]};
    color: ${_r.Neutral[1]};

    :focus,
    :active {
        outline: none;
    }

    ${e=>e.disabled?x`
                background: ${_r.Neutral[6](e)};
                cursor: not-allowed;
            `:e.error&&!e.focused?x`
                border: 1px solid ${_r.Validation.Red.Border(e)};
            `:e.error&&e.focused?x`
                border: 1px solid ${_r.Validation.Red.Border(e)};
                box-shadow: ${Hd};
            `:e.focused?x`
                border: 1px solid ${_r.Accent.Light[1]};
                box-shadow: ${Fd};
            `:void 0}
`,Nm=({id:e,disabled:n=!1,error:a,value:i,defaultValue:d,placeholder:c,format:u="24hr",onChange:h,onBlur:p,onSelectionCancel:f,...m})=>{const[b,y]=o(!1),v=s();l((()=>(document.addEventListener("mousedown",$),document.addEventListener("keyup",x),()=>{document.removeEventListener("mousedown",$),document.removeEventListener("keyup",x)})),[b]);const w=g((()=>{n||b||y(!0)}),[b]),$=e=>{n||C(e)},x=e=>{if("Tab"===e.code)C(e)},C=e=>{v&&!v.current.contains(e.target)&&b&&(y(!1),p&&p())},S=g((()=>"12hr"===u?"HH:MMam":"HH:MM"),[u,c]);return t(Tm,{ref:v,id:e,...m,children:[r(Bm,{onFocus:w,focused:b,readOnly:!0,placeholder:c||S(),value:Pf.formatValue(i,u),defaultValue:d,disabled:n,error:a,"data-testid":e?`${e}-timepicker-selector`:"timepicker-selector"}),r(Dm,{id:e,show:b,value:i||d,format:u,onCancel:()=>{y(!1),f&&f()},onChange:e=>{y(!1),h&&h(e)}})]})};var Lm;!function(e){e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:"am"};if(!t)return r;try{const n=Am(t,e);return r.hour=wd.padValue(n.hour),r.minute=wd.padValue(n.minute),r.period="am"===n.period.toLowerCase()?"am":"pm",r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?wd.padValue("0"):"55";const n=Math.floor(r/5),a=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return wd.padValue((5*a).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?wd.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?wd.padValue(n.toString()):13===n?wd.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r="pm"===e.period?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return wd.padValue(r)},e.formatValue=(e,t)=>{try{const r=Am(e,t),n=wd.padValue(r.hour);let a=`${n}:${wd.padValue(r.minute)}`;return"12hr"===t?(a+=r.period.toLowerCase(),a):a}catch(e){return""}}}(Lm||(Lm={}));const Im=(e,t)=>{const r=parseInt(e);return r>=1&&r<=12},Em=e=>{const t=parseInt(e);return t>=0&&t<=59},Am=(e,t)=>{const r=e.split(":"),n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),t=r[1].substring(2);if(!Im(r[0])||!Em(e)||"am"!==(a=t).toLowerCase()&&"pm"!==a.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!Im(r[0])||!Em(r[1]))throw n;return{hour:r[0],minute:r[1]};var a},Pm=$(ol.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    width: 27rem;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${_r.Neutral[8]};
    border-radius: ${"4px"};
    z-index: 1;
    overflow: hidden;

    ${Qr.tablet} {
        width: 100%;
    }

    ${Qr.mobileL} {
        width: 20rem;
    }

    ${Qr.mobileM} {
        width: 19rem;
    }

    ${Qr.mobileS} {
        width: 15rem;
    }
`,Fm=$.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,Hm=$.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Qr.mobileS} {
        flex-direction: column;
    }
`,Rm=$.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;

    ${Qr.mobileS} {
        flex-direction: column;
        margin-top: 2rem;
        padding-top: 1.5rem;
    }
`,zm=$.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${Qr.mobileM} {
        margin-right: 0;
    }
`,Vm=$.div`
    display: flex;

    ${Qr.tablet} {
        flex-direction: column;
    }

    ${Qr.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,Wm=$.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,Um=$(nn)`
    width: 5rem;
    padding: 1rem 0;
    color: ${_r.Primary};
`,Ym=$(Ar.Body)`
    margin: 0 0.75rem;

    ${Qr.tablet} {
        margin: 0 0.5rem;
    }

    ${Qr.mobileS} {
        margin: 0 0.75rem;
    }
`,qm=$.input`
    ${Ir("Body","regular")}
    border-radius: ${"4px"};
    width: 80px;
    height: 48px;
    text-align: center;
    border: 1px solid ${_r.Neutral[5]};
    background: ${_r.Neutral[8]};
    color: ${_r.Neutral[1]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${_r.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    :focus::placeholder {
        color: transparent;
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

    ${Qr.mobileS} {
        width: 6rem;
    }
`,Zm=$(fm)`
    min-width: 5rem;
    :not(:last-of-type) {
        margin-right: 0.5rem;
    }

    ${Qr.tablet} {
        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: 0.5rem;
        }
    }

    ${Qr.mobileS} {
        width: 50%;
        :not(:last-of-type) {
            margin-right: 0.5rem;
            margin-bottom: 0;
        }
    }
`,Qm=$(Zl.Small)`
    width: 7rem;

    :not(:last-of-type) {
        margin-right: 0.5rem;
    }

    ${Qr.tablet} {
        width: 50%;
    }
    ${Qr.mobileS} {
        width: 100%;
        margin-bottom: 1rem;
    }
`;var Gm,Xm,Km;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(Gm||(Gm={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(Xm||(Xm={})),function(e){e.AM="am",e.PM="pm"}(Km||(Km={}));const Jm=({id:e,value:n,show:a,format:i,onChange:d,onCancel:c})=>{const u=Lm.getTimeValues(i,n),[h,p]=o(u.hour),[f,m]=o(u.minute),[b,y]=o(u.period),v=s(),w=s(),$=va();l((()=>{if(a&&v.current&&v.current.focus(),a){const{hour:e,minute:t,period:r}=Lm.getTimeValues(i,n);p(e),m(t),y(r)}}),[a,n,i]),l((()=>{const e=v.current,t=w.current;return e&&e.addEventListener("keydown",x),t&&t.addEventListener("keydown",x),()=>{e&&e.removeEventListener("keydown",x),t&&t.removeEventListener("keydown",x)}}),[]);const x=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},C=g((e=>{switch(e.currentTarget.name){case Gm.MINUTE_UP:m(Lm.updateMinutes(f,"add"));break;case Gm.MINUTE_DOWN:m(Lm.updateMinutes(f,"minus"));break;case Gm.HOUR_UP:p(Lm.updateHours(h,"add"));break;case Gm.HOUR_DOWN:p(Lm.updateHours(h,"minus"))}}),[h,f]),S=e=>{e.target.select()},k=e=>{const t=e.target.value;switch(e.target.name){case Xm.HOUR:t.length<=2&&p(t);break;case Xm.MINUTE:t.length<=2&&m(t)}},O=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case Xm.HOUR:{const r=t>23||t<0?u.hour:Lm.convertHourTo12HourFormat(e.target.value);p(r);break}case Xm.MINUTE:{const r=t>59||t<0?u.minute:e.target.value;m(wd.padValue(r));break}}},_=e=>{switch(e.target.name){case Km.AM:y("am");break;case Km.PM:y("pm")}},M=t=>e?`${e}-${t}`:t,j=As({height:a?$.height+32:0});return r(Pm,{"data-testid":"animated-dropdown-wrapper",style:j,children:t(Fm,{ref:$.ref,"data-testid":M("timepicker-dropdown"),children:[t(Hm,{children:[t(zm,{children:[t(Wm,{children:[r(Um,{"aria-label":"increase hour",name:Gm.HOUR_UP,type:"button",tabIndex:-1,onClick:C,"data-testid":M("hour-increment-button"),children:r(zf,{})}),r(qm,{"aria-label":"hour",type:"number",tabIndex:a?0:-1,name:Xm.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:h,onFocus:S,onChange:k,onBlur:O,min:1,max:12,placeholder:"HH","data-testid":M("hour-input")}),r(Um,{"aria-label":"decrease hour",name:Gm.HOUR_DOWN,type:"button",tabIndex:-1,onClick:C,"data-testid":M("hour-decrement-button"),children:r(Ml,{})})]}),r(Ym,{children:":"}),t(Wm,{children:[r(Um,{"aria-label":"increase minute",name:Gm.MINUTE_UP,type:"button",tabIndex:-1,onClick:C,"data-testid":M("minute-increment-button"),children:r(zf,{})}),r(qm,{"aria-label":"minute",type:"number",tabIndex:a?0:-1,name:Xm.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:f,onChange:k,onBlur:O,onFocus:S,min:0,max:59,placeholder:"MM","data-testid":M("minute-input")}),r(Um,{"aria-label":"decrease minute",name:Gm.MINUTE_DOWN,type:"button",tabIndex:-1,onClick:C,"data-testid":M("minute-decrement-button"),children:r(Ml,{})})]})]}),(()=>{if(a)return t(Vm,{children:[r(Zm,{checked:"am"===b,name:Km.AM,type:"radio",onChange:_,"data-testid":M("am-toggle"),"aria-label":"AM",children:"AM"}),r(Zm,{checked:"pm"===b,name:Km.PM,type:"radio",onChange:_,"data-testid":M("pm-toggle"),"aria-label":"PM",children:"PM"})]})})()]}),t(Rm,{children:[r(Qm,{tabIndex:a?0:-1,"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":M("cancel-button"),children:"Cancel"}),r(Qm,{tabIndex:a?0:-1,"aria-label":"confirm selection",type:"button",onClick:()=>{d(`${h}:${f}${b}`)},disabled:""===h||""===f,"data-testid":M("confirm-button"),children:"Done"})]})]})})},eg=$.div`
    position: relative;
`,tg=$.div`
    display: flex;
    align-items: center;
    padding: 11px 16px;
    gap: 8px;
    width: 100%;
    height: 48px;
    border-radius: 4px;
    border: 1px solid ${_r.Neutral[5]};
    :focus,
    :focus-within {
        border: 1px solid ${_r.Accent.Light[1]};
        box-shadow: ${Fd};
    }
    ${e=>e.$readOnly?x`
                border: 0;
                padding: 0;
                :focus,
                :focus-within {
                    border: 0px;
                    box-shadow: none;
                }
            `:e.$disabled?x`
                background: ${_r.Neutral[6](e)} !important;
                :hover {
                    cursor: not-allowed;
                }
                :focus-within {
                    border: 0px;
                    box-shadow: none;
                    //    border: 1px solid ${_r.Neutral[5](e)};
                }
            `:e.$error?x`
                border: 1px solid ${_r.Validation.Red.Border(e)};
                :focus-within {
                    border: 1px solid ${_r.Validation.Red.Border(e)};
                    box-shadow: ${Hd};
                }
            `:void 0}

    ${Qr.mobileS} {
        width: 235px;
    }
`,rg=$.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;
`,ng=$(Rd)`
    color: ${_r.Neutral[3]};
    cursor: pointer;
    width: 1.125rem;
    height: 1rem;
`,ag=$.div`
    position: absolute;
    bottom: -0.1rem;
    height: 2px;
    left: 1rem;
    right: 23rem;
    background-color: ${_r.Primary};

    ${Qr.tablet} {
        width: 40%;
    }

    ${Qr.mobileL} {
        /* width: 335px; */
        width: 40%;
    }

    ${Qr.mobileM} {
        width: 40%;
    }

    ${Qr.mobileS} {
        width: 40%;
    }
`,ig=$.div`
    position: absolute;
    bottom: -0.1rem;
    height: 2px;
    left: 16rem;
    right: 7rem;
    background-color: ${_r.Primary};

    ${Qr.tablet} {
        width: 8rem;
        left: 12rem;
    }

    ${Qr.mobileL} {
        /* width: 335px; */
        width: 8rem;
        left: 10rem;
    }

    ${Qr.mobileM} {
        width: 6rem;
        left: 10rem;
    }

    ${Qr.mobileS} {
        width: 5rem;
        left: 8rem;
    }
`,og=$.input`
    ${Ir("Body","regular")}

    display: block;
    width: 100%;
    height: 26px;
    background: ${Oe.Neutral[8]};
    color: ${Oe.Neutral[1]};
    border: 0px;
    :focus,
    :active {
        outline: none;
    }
    :disabled {
        background: ${_r.Neutral[6]} !important;
        :hover {
            cursor: not-allowed;
        }
    }
    ${e=>e.$readOnly?x`
                border: none;
                cursor: none;
            `:e.$disabled?x`
                background: ${_r.Neutral[6](e)} !important;
                :hover {
                    cursor: not-allowed;
                }
            `:void 0}
`,sg=$.input`
    ${Ir("Body","regular")}

    display: block;
    width: 100%;
    height: 26px;
    margin-left: 1rem;
    background: ${Oe.Neutral[8]};
    color: ${Oe.Neutral[1]};
    border: 0px;
    :focus,
    :active {
        outline: none;
    }
    :disabled {
        background: ${_r.Neutral[6]} !important;
        :hover {
            cursor: not-allowed;
        }
    }

    ${e=>e.$readOnly?x`
                border: none;
                cursor: none;
            `:e.$disabled?x`
                background: ${_r.Neutral[6](e)} !important;
                :hover {
                    cursor: not-allowed;
                }
            `:void 0}
`,lg=({id:e,disabled:n=!1,error:a,value:i,format:d="12hr",readOnly:c,onChange:u,onBlur:h,...p})=>{const[f,m]=o(!1),[g,b]=o(!1),[y,v]=o(""),[w,$]=o(""),x=s();l((()=>{i&&(v(i.startTime),$(i.endTime))}),[]),l((()=>(document.addEventListener("mousedown",C),document.addEventListener("keyup",S),()=>{document.removeEventListener("mousedown",C),document.removeEventListener("keyup",S)})),[g]);const C=e=>{n||_(e)},S=e=>{if("Tab"===e.code)_(e)},k=()=>{b(!1),m(!1)},O=()=>{m(!1),b(!1),h&&h()},_=e=>{x&&!x.current.contains(e.target)&&(g||O(),f||O())};return r(eg,{ref:x,id:e,...p,children:t(tg,{$disabled:n,$error:a,$readOnly:c,children:[r(og,{onFocus:()=>{n||c||f||(b(!1),m(!0))},$focused:f,readOnly:!0,placeholder:"From",value:Lm.formatValue(y,d),disabled:n,$error:a,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"}),f&&r(ag,{}),r(Jm,{id:e,show:f,value:y,format:d,onCancel:k,onChange:e=>{m(!1),b(!0),v(e);u&&u({startTime:e,endTime:w})}}),r(rg,{children:r(ng,{})}),g&&r(ig,{}),r(sg,{onFocus:()=>{n||c||g||(m(!1),b(!0))},$focused:g,readOnly:!0,placeholder:"To",value:Lm.formatValue(w,d),disabled:n,$error:a,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"}),r(Jm,{id:e,show:g,value:w,format:d,onCancel:k,onChange:e=>{b(!1),$(e),""==y&&m(!0);u&&u({startTime:y,endTime:e})}})]})})},dg=$(ac)`
    margin-right: 0.25rem;
`,cg=$(ec)`
    // overwrite default styles
    background: transparent;
    border: none;
    /* border: 1px dotted red; */
    padding: 0;
    width: 2.5rem;

    :focus-within {
        outline: none;
        border: none;
        box-shadow: none;
    }

    input {
        text-align: center;
        // Chrome, Safari, Edge, Opera
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        // Firefox
        -moz-appearance: textfield;
    }
`,ug=$(cg)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,hg=$(Ar.Body)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return x`
                color: ${_r.Neutral[3]};
            `}}
`,pg=$.div`
    display: flex;
`,fg=$(Ar.Body)`
    ${e=>{if(e.$inactive)return x`
                color: ${_r.Neutral[3]};
            `}}
`,mg=({disabled:e,error:a,value:i,onChange:d,onBlur:c,onChangeRaw:u,onBlurRaw:h,readOnly:p,placeholder:f="00-8888",...m})=>{const[g,b]=o(""),[y,v]=o(""),[w,$]=o("none"),x=s(null),C=s(null),S=s(null),k=s(g),O=s(y),_=s(w),M=e=>{k.current=e,b(e)},j=e=>{O.current=e,v(e)},D=e=>{_.current=e,$(e)};l((()=>(document.addEventListener("mousedown",T),x.current&&x.current.addEventListener("keydown",B),()=>{document.removeEventListener("mousedown",T),x.current&&x.current.removeEventListener("keydown",B)})),[w]),l((()=>{"floor"===w&&3===g.length&&S.current&&S.current.focus()}),[g]),l((()=>{P(i)}),[i]);const T=t=>{e||p||x&&x.current.contains(t.target)||"none"!==_.current&&(D("none"),H())},B=e=>{"unit"===e.target.name&&"Tab"===e.code&&(D("none"),H())},N=e=>{D(e.target.name),e.target.select()},L=e=>{const t=e.target.name,r=e.target.value;"floor"===t?M(A(r)):j(A(r))},I=e=>{const t=e.target.name,r=e.target.value.toLocaleUpperCase().replace(/[^0-9A-Za-z]/,"");"floor"===t?(M(r),F(r,t)):(j(r),F(r,t))},E=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===w&&0===y.length&&C.current.focus()},A=e=>/^[0-9]$/.test(e)?wd.padValue(e,!0):e.toLocaleUpperCase(),P=e=>{if(e!==gg)if(void 0===e||0===e.length)M(""),j("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];M("floor"===w?e:A(e)),j("unit"===w?r:A(r))}}},F=(e,t)=>{if(!d&&!u)return;const r={floor:k.current,unit:O.current};if(r[t]=e,d){const e=R(r);d(e)}u&&u([r.floor,r.unit])},H=()=>{if(!c&&!h)return;const e={floor:A(k.current),unit:A(O.current)};if(c){const t=R(e);c(t)}h&&h([e.floor,e.unit])},R=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":gg},z=e=>e.split("-");return t(Gd,{ref:x,onClick:()=>{"none"===w&&C.current&&C.current.focus()},disabled:e,$error:a,$readOnly:p,"data-testid":m["data-testid"],children:[r(dg,{"data-testid":"addon",disabled:e,$readOnly:p,children:"#"}),p&&i?(()=>{const e=i.split("-");return t(pg,{children:[r(fg,{children:e[0]}),r(hg,{children:"-"}),r(fg,{children:e[1]})]})})():t(n,{children:[r(cg,{name:"floor",maxLength:3,value:g,ref:C,onFocus:N,onBlur:L,onChange:I,disabled:e,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==w||p?z(f)[0]:""}),r(hg,{$inactive:0===g.length,children:"-"}),r(ug,{name:"unit",maxLength:5,value:y,ref:S,onFocus:N,onBlur:L,onChange:I,onKeyDown:E,disabled:e,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==w||p?z(f)[1]:""})]})]})},gg="Invalid unit number";var bg=function(e,t,r,n){var a=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++a]);++a<i;)r=t(r,e[a],a,e);return r};var yg=function(e){return function(t,r,n){for(var a=-1,i=Object(t),o=n(t),s=o.length;s--;){var l=o[e?s:++a];if(!1===r(i[l],l,i))break}return t}}(),vg=Nu;var wg=ju;var $g=function(e,t){return function(r,n){if(null==r)return r;if(!wg(r))return e(r,n);for(var a=r.length,i=t?a:-1,o=Object(r);(t?i--:++i<a)&&!1!==n(o[i],i,o););return r}}((function(e,t){return e&&yg(e,t,vg)}));var xg=bg,Cg=$g,Sg=ep,kg=function(e,t,r,n,a){return a(e,(function(e,a,i){r=n?(n=!1,e):t(r,e,a,i)})),r},Og=_e;var _g=function(e,t,r){var n=Og(e)?xg:kg,a=arguments.length<3;return n(e,Sg(t),r,a,Cg)};const Mg=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],jg=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var Dg;!function(e){e.getCountries=()=>[].concat(...Mg.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:jg("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,a=n.split(" ");a.shift();const i=a.join(" ");return _g(i,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const[r,...n]=e.remainingText;return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(Dg||(Dg={}));const Tg=({onChange:e,value:t,allowClear:n,onClear:a,onBlur:i,error:d,fixedCountry:c=!1,optionPlaceholder:u="Select",optionSearchPlaceholder:h,enableSearch:p,onHideOptions:f,onShowOptions:m,placeholder:g,...b})=>{const[y]=o(Dg.getCountries()),[v,w]=o(void 0),[$,x]=o(""),C=s();l((()=>{const e=y.filter((e=>e.countryCode===Bg(t?.countryCode)))[0];w(e),x(Dg.formatNumber(t?.number,e))}),[t]);const S=t=>{e?k($,t):O($,t)},k=(t,r)=>{const n=Dg.formatNumber(t,r);e({number:n.replace(/[\s()]+/g,""),countryCode:r&&Ng(r.countryCode)})},O=(e,t)=>{x(Dg.formatNumber(e,t)),w(t)};return r(Cf,{ref:C,value:$,onChange:t=>{const r=t.target.value.replace(/[^0-9]/g,"");e?k(r,v):O(r,v)},allowClear:n&&!!$,onClear:()=>{a?a():x("")},onBlur:i,error:d,placeholder:g,addon:c?{type:"label",attributes:{value:Ng(v?.countryCode)}}:{type:"list",attributes:{placeholder:u,options:y,selectedOption:v,enableSearch:p,searchPlaceholder:h,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:Ng(e.countryCode)}),onSelectOption:S,onHideOptions:f,onShowOptions:m}},inputMode:"numeric",...b})},Bg=e=>e?e.replace("+",""):"",Ng=e=>e?e.includes("+")?e:`+${e}`:"",Lg={DateInput:({label:e,errorMessage:t,id:n="form-date-input","data-error-testid":a,"data-testid":i,...o})=>r(xn,{id:n,label:e,errorMessage:t,"data-error-testid":a,disabled:o.disabled,children:r(Qd,{id:`${n}-base`,"data-testid":i||n,error:!!t,...o})}),Input:tc,InputGroup:Sf,Label:wn,MultiSelect:({label:e,errorMessage:t,id:n="form-multi-select","data-error-testid":a,"data-testid":i,enableSearch:o=!1,...s})=>r(xn,{id:n,label:e,errorMessage:t,"data-error-testid":a,disabled:s.disabled,children:r(Of,{id:`${n}-base`,"data-testid":i||n,error:!!t,enableSearch:o,...s})}),Select:({label:e,errorMessage:t,id:n="form-select","data-error-testid":a,"data-testid":i,enableSearch:o=!1,...s})=>r(xn,{id:n,label:e,errorMessage:t,"data-error-testid":a,disabled:s.disabled,children:r(_f,{id:`${n}-base`,"data-testid":i||n,error:!!t,enableSearch:o,...s})}),RangeSelect:({label:e,errorMessage:t,id:n="form-select","data-error-testid":a,"data-testid":i,enableSearch:o=!1,...s})=>r(xn,{id:n,label:e,errorMessage:t,"data-error-testid":a,disabled:s.disabled,children:r(Mf,{id:`${n}-base`,"data-testid":i||n,error:!!t,enableSearch:o,...s})}),Textarea:Af,Timepicker:({label:e,errorMessage:t,id:n="form-timepicker","data-error-testid":a,"data-testid":i,...o})=>r(xn,{id:n,label:e,errorMessage:t,disabled:o.disabled,"data-error-testid":a,children:r(Nm,{id:`${n}-base`,"data-testid":i||n,error:!!t,...o})}),TimeRangePicker:({label:e,errorMessage:t,id:n="form-timepicker","data-error-testid":a,"data-testid":i,...o})=>r(xn,{id:n,label:e,errorMessage:t,disabled:o.disabled,"data-error-testid":a,children:r(lg,{id:`${n}-base`,"data-testid":i||n,error:!!t,...o})}),CustomField:({id:e="form-custom-field","data-error-testid":t,children:n,...a})=>r(xn,{id:e,"data-error-testid":t,...a,children:n}),UnitNumberInput:({label:e,errorMessage:t,id:n="form-unit-number-input","data-error-testid":a,"data-testid":i,...o})=>r(xn,{id:n,label:e,errorMessage:t,"data-error-testid":a,disabled:o.disabled,children:r(mg,{id:`${n}-base`,"data-testid":i||n,error:!!t,...o})}),PhoneNumberInput:({label:e,errorMessage:t,id:n="form-phone-number-input","data-error-testid":a,"data-testid":i,...o})=>r(xn,{id:n,label:e,errorMessage:t,"data-error-testid":a,disabled:o.disabled,children:r(Tg,{id:`${n}-base`,"data-testid":i||n,error:!!t,...o})})};export{Lg as Form};
//# sourceMappingURL=index.js.map
