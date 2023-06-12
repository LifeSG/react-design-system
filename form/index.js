import e,{jsxs as t,jsx as r,Fragment as n}from"react/jsx-runtime";import*as a from"react";import i,{useState as o,useRef as s,useEffect as l,Children as c,cloneElement as d,isValidElement as u,createRef as h,PureComponent as p,useLayoutEffect as f,forwardRef as m,useCallback as g,useContext as v,useMemo as y,useImperativeHandle as b,useReducer as w}from"react";import $,{css as x,keyframes as C}from"styled-components";import S,{findDOMNode as k,unstable_batchedUpdates as O}from"react-dom";var D,_="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},M={};Object.defineProperty(M,"__esModule",{value:!0});var F=e;const j=e=>F.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:F.jsx("path",{d:"M10.0049 1.67001C5.40195 1.67001 1.66992 5.40339 1.66992 10.005C1.66992 14.6093 5.40195 18.34 10.0049 18.34C14.6079 18.34 18.3399 14.6093 18.3399 10.005C18.3399 5.40339 14.6079 1.67001 10.0049 1.67001ZM10.0049 5.36699C10.7845 5.36699 11.4165 5.99897 11.4165 6.77856C11.4165 7.55815 10.7845 8.19013 10.0049 8.19013C9.22533 8.19013 8.59335 7.55815 8.59335 6.77856C8.59335 5.99897 9.22533 5.36699 10.0049 5.36699ZM11.887 13.9036C11.887 14.1264 11.7064 14.3069 11.4837 14.3069H8.52613C8.30341 14.3069 8.12283 14.1264 8.12283 13.9036V13.097C8.12283 12.8743 8.30341 12.6937 8.52613 12.6937H8.92944V10.5428H8.52613C8.30341 10.5428 8.12283 10.3622 8.12283 10.1394V9.33284C8.12283 9.11011 8.30341 8.92953 8.52613 8.92953H10.6771C10.8998 8.92953 11.0804 9.11011 11.0804 9.33284V12.6937H11.4837C11.7064 12.6937 11.887 12.8743 11.887 13.097V13.9036Z",fill:"currentColor"})});j.displayName="ICircleFillIcon",D=M.ICircleFillIcon=j;var B,E={exports:{}};B=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
  !*** ./node_modules/css-mediaquery/index.js ***!
  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var a=e.expressions.every((function(e){var r=e.feature,n=e.modifier,a=e.value,i=t[r];if(!i)return!1;switch(r){case"orientation":case"scan":return i.toLowerCase()===a.toLowerCase();case"width":case"height":case"device-width":case"device-height":a=d(a),i=d(i);break;case"resolution":a=c(a),i=c(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":a=l(a),i=l(i);break;case"grid":case"color":case"color-index":case"monochrome":a=parseInt(a,10)||1,i=parseInt(i,10)||0}switch(n){case"min":return i>=a;case"max":return i<=a;default:return i===a}}));return a&&!r||!a&&r}))},t.parse=s;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,a=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),i=t[1],o=t[2],s=t[3]||"",l={};return l.inverse=!!i&&"not"===i.toLowerCase(),l.type=o?o.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(a);return{modifier:r[1],feature:r[2],value:t[2]}})),l}))}function l(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function d(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
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
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,o,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))r.call(i,c)&&(s[c]=i[c]);if(t){o=t(i);for(var d=0;d<o.length;d++)n.call(i,o[d])&&(s[o[d]]=i[o[d]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/(e,t,r)=>{var n,a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},o=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,r,s,l){for(var c in e)if(o(e,c)){var d;try{if("function"!=typeof e[c]){var u=Error((s||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=e[c](t,c,s,r,null,a)}catch(e){d=e}if(!d||d instanceof Error||n((s||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in i)){i[d.message]=!0;var h=l?l():"";n("Failed "+r+" type: "+d.message+(null!=h?h:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/(e,t,r)=>{var n,a=r(/*! react-is */"./node_modules/react-is/index.js"),i=r(/*! object-assign */"./node_modules/object-assign/index.js"),o=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",h={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(c),arrayOf:function(e){return m((function(t,r,n,a,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new f("Invalid "+a+" `"+i+"` of type `"+b(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,n,a,i+"["+l+"]",o);if(c instanceof Error)return c}return null}))},element:m((function(t,r,n,a,i){var o=t[r];return e(o)?null:new f("Invalid "+a+" `"+i+"` of type `"+b(o)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:m((function(e,t,r,n,i){var o=e[t];return a.isValidElementType(o)?null:new f("Invalid "+n+" `"+i+"` of type `"+b(o)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,r,n,a,i){if(!(t[r]instanceof e)){var o=e.name||u;return new f("Invalid "+a+" `"+i+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+o+"`.")}var s;return null}))},node:m((function(e,t,r,n,a){return y(e[t])?null:new f("Invalid "+n+" `"+a+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,r,n,a,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=b(l);if("object"!==c)return new f("Invalid "+a+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,n,a,i+"."+d,o);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,r,n,a,i){for(var o=t[r],s=0;s<e.length;s++)if(p(o,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new f("Invalid "+a+" `"+i+"` of value `"+String(o)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+$(r)+" at index "+t+"."),c}return m((function(t,r,n,a,i){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,r,n,a,i,o);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new f("Invalid "+a+" `"+i+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,r,n,a,i){var s=t[r],l=b(s);if("object"!==l)return new f("Invalid "+a+" `"+i+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return v(n,a,i,c,w(d));var u=d(s,c,n,a,i+"."+c,o);if(u)return u}return null}))},exact:function(e){return m((function(t,r,n,a,l){var c=t[r],d=b(c);if("object"!==d)return new f("Invalid "+a+" `"+l+"` of type `"+d+"` supplied to `"+n+"`, expected `object`.");var u=i({},t[r],e);for(var h in u){var p=e[h];if(s(e,h)&&"function"!=typeof p)return v(n,a,l,h,w(p));if(!p)return new f("Invalid "+a+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=p(c,h,n,a,l+"."+h,o);if(m)return m}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var r={},a=0;function i(i,s,l,c,d,h,p){if(c=c||u,h=h||l,p!==o){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!r[g]&&a<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[g]=!0,a++)}}return null==s[l]?i?null===s[l]?new f("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new f("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,d,h)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function g(e){return m((function(t,r,n,a,i,o){var s=t[r];return b(s)!==e?new f("Invalid "+a+" `"+i+"` of type `"+w(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function v(e,t,r,n,a){return new f((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+a+"`.")}function y(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(y);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e[d]);if("function"==typeof t)return t}(t);if(!n)return!1;var a,i=n.call(t);if(n!==t.entries){for(;!(a=i.next()).done;)if(!y(a.value))return!1}else for(;!(a=i.next()).done;){var o=a.value;if(o&&!y(o[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function $(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var p=e.type;switch(p){case c:case d:case a:case o:case i:case h:return p;default:var g=p&&p.$$typeof;switch(g){case l:case u:case m:case f:case s:return g;default:return t}}case n:return t}}}var $=c,x=d,C=l,S=s,k=r,O=u,D=a,_=m,M=f,F=n,j=o,B=i,E=h,A=!1;function I(e){return w(e)===d}t.AsyncMode=$,t.ConcurrentMode=x,t.ContextConsumer=C,t.ContextProvider=S,t.Element=k,t.ForwardRef=O,t.Fragment=D,t.Lazy=_,t.Memo=M,t.Portal=F,t.Profiler=j,t.StrictMode=B,t.Suspense=E,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),I(e)||w(e)===c},t.isConcurrentMode=I,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===u},t.isFragment=function(e){return w(e)===a},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===f},t.isPortal=function(e){return w(e)===n},t.isProfiler=function(e){return w(e)===o},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===d||e===o||e===i||e===h||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===f||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===v||e.$$typeof===y||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
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
  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)},a=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(r(/*! prop-types */"./node_modules/prop-types/index.js")),s=o.default.oneOfType([o.default.string,o.default.number]),l={all:o.default.bool,grid:o.default.bool,aural:o.default.bool,braille:o.default.bool,handheld:o.default.bool,print:o.default.bool,projection:o.default.bool,screen:o.default.bool,tty:o.default.bool,tv:o.default.bool,embossed:o.default.bool},c={orientation:o.default.oneOf(["portrait","landscape"]),scan:o.default.oneOf(["progressive","interlace"]),aspectRatio:o.default.string,deviceAspectRatio:o.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:o.default.bool,colorIndex:o.default.bool,monochrome:o.default.bool,resolution:s,type:Object.keys(l)},d=a(c,["type"]),u=n({minAspectRatio:o.default.string,maxAspectRatio:o.default.string,minDeviceAspectRatio:o.default.string,maxDeviceAspectRatio:o.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:o.default.number,maxColor:o.default.number,minColorIndex:o.default.number,maxColorIndex:o.default.number,minMonochrome:o.default.number,maxMonochrome:o.default.number,minResolution:s,maxResolution:s},d),h=n(n({},l),u);t.default={all:h,types:l,matchers:c,features:u}},"./src/toQuery.ts":
/*!************************!*\
  !*** ./src/toQuery.ts ***!
  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,a.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
  !*** ./src/useMediaQuery.ts ***!
  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(/*! react */"react"),i=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),o=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),c=n(r(/*! ./Context */"./src/Context.ts")),d=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,o.default)(r)]=e[r],t}),{})},u=function(){var e=(0,a.useRef)(!1);return(0,a.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,a.useState)(t),n=r[0],i=r[1];return(0,a.useEffect)((function(){var e=t();n!==e&&i(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,a.useContext)(c.default),r=function(){return d(e)||d(t)},n=(0,a.useState)(r),i=n[0],o=n[1];return(0,a.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(i,e)||o(e)}),[e,t]),i}(t),o=h(e);if(!o)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,i.default)(e,t||{},!!t)},n=(0,a.useState)(r),o=n[0],s=n[1],l=u();return(0,a.useEffect)((function(){if(l){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),o}(o,n),p=function(e){var t=(0,a.useState)(e.matches),r=t[0],n=t[1];return(0,a.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),f=u();return(0,a.useEffect)((function(){f&&r&&r(p)}),[p]),(0,a.useEffect)((function(){return function(){l&&l.dispose()}}),[]),p}},react:
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})(),E.exports=B(i);const A={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var I=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},T="object"==typeof _&&_&&_.Object===Object&&_,N=T,P="object"==typeof self&&self&&self.Object===Object&&self,L=N||P||Function("return this")(),H=L,R=function(){return H.Date.now()},z=/\s/;var V=function(e){for(var t=e.length;t--&&z.test(e.charAt(t)););return t},W=/^\s+/;var Y=function(e){return e?e.slice(0,V(e)+1).replace(W,""):e},U=L.Symbol,q=U,Z=Object.prototype,Q=Z.hasOwnProperty,G=Z.toString,X=q?q.toStringTag:void 0;var K=function(e){var t=Q.call(e,X),r=e[X];try{e[X]=void 0;var n=!0}catch(e){}var a=G.call(e);return n&&(t?e[X]=r:delete e[X]),a},J=Object.prototype.toString;var ee=K,te=function(e){return J.call(e)},re=U?U.toStringTag:void 0;var ne=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":re&&re in Object(e)?ee(e):te(e)};var ae=function(e){return null!=e&&"object"==typeof e},ie=ne,oe=ae;var se=function(e){return"symbol"==typeof e||oe(e)&&"[object Symbol]"==ie(e)},le=Y,ce=I,de=se,ue=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,pe=/^0o[0-7]+$/i,fe=parseInt;var me=function(e){if("number"==typeof e)return e;if(de(e))return NaN;if(ce(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ce(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=le(e);var r=he.test(e);return r||pe.test(e)?fe(e.slice(2),r?2:8):ue.test(e)?NaN:+e},ge=I,ve=R,ye=me,be=Math.max,we=Math.min;var $e,xe=function(e,t,r){var n,a,i,o,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var r=n,i=a;return n=a=void 0,c=t,o=e.apply(i,r)}function f(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=i}function m(){var e=ve();if(f(e))return g(e);s=setTimeout(m,function(e){var r=t-(e-l);return u?we(r,i-(e-c)):r}(e))}function g(e){return s=void 0,h&&n?p(e):(n=a=void 0,o)}function v(){var e=ve(),r=f(e);if(n=arguments,a=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),d?p(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,t),p(l)}return void 0===s&&(s=setTimeout(m,t)),o}return t=ye(t)||0,ge(r)&&(d=!!r.leading,i=(u="maxWait"in r)?be(ye(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),v.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=a=s=void 0},v.flush=function(){return void 0===s?o:g(ve())},v},Ce={};Object.defineProperty(Ce,"__esModule",{value:!0});var Se=e;const ke=e=>Se.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Se.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});ke.displayName="ExternalIcon",$e=Ce.ExternalIcon=ke;var Oe=Array.isArray,De=Oe,_e=se,Me=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Fe=/^\w*$/;var je=function(e,t){if(De(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!_e(e))||(Fe.test(e)||!Me.test(e)||null!=t&&e in Object(t))},Be=ne,Ee=I;var Ae,Ie=function(e){if(!Ee(e))return!1;var t=Be(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Te=L["__core-js_shared__"],Ne=(Ae=/[^.]+$/.exec(Te&&Te.keys&&Te.keys.IE_PROTO||""))?"Symbol(src)_1."+Ae:"";var Pe=function(e){return!!Ne&&Ne in e},Le=Function.prototype.toString;var He=function(e){if(null!=e){try{return Le.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Re=Ie,ze=Pe,Ve=I,We=He,Ye=/^\[object .+?Constructor\]$/,Ue=Function.prototype,qe=Object.prototype,Ze=Ue.toString,Qe=qe.hasOwnProperty,Ge=RegExp("^"+Ze.call(Qe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Xe=function(e){return!(!Ve(e)||ze(e))&&(Re(e)?Ge:Ye).test(We(e))},Ke=function(e,t){return null==e?void 0:e[t]};var Je=function(e,t){var r=Ke(e,t);return Xe(r)?r:void 0},et=Je(Object,"create"),tt=et;var rt=function(){this.__data__=tt?tt(null):{},this.size=0};var nt=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},at=et,it=Object.prototype.hasOwnProperty;var ot=function(e){var t=this.__data__;if(at){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return it.call(t,e)?t[e]:void 0},st=et,lt=Object.prototype.hasOwnProperty;var ct=et;var dt=rt,ut=nt,ht=ot,pt=function(e){var t=this.__data__;return st?void 0!==t[e]:lt.call(t,e)},ft=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ct&&void 0===t?"__lodash_hash_undefined__":t,this};function mt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}mt.prototype.clear=dt,mt.prototype.delete=ut,mt.prototype.get=ht,mt.prototype.has=pt,mt.prototype.set=ft;var gt=mt;var vt=function(){this.__data__=[],this.size=0};var yt=function(e,t){return e===t||e!=e&&t!=t},bt=yt;var wt=function(e,t){for(var r=e.length;r--;)if(bt(e[r][0],t))return r;return-1},$t=wt,xt=Array.prototype.splice;var Ct=wt;var St=wt;var kt=wt;var Ot=vt,Dt=function(e){var t=this.__data__,r=$t(t,e);return!(r<0)&&(r==t.length-1?t.pop():xt.call(t,r,1),--this.size,!0)},_t=function(e){var t=this.__data__,r=Ct(t,e);return r<0?void 0:t[r][1]},Mt=function(e){return St(this.__data__,e)>-1},Ft=function(e,t){var r=this.__data__,n=kt(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function jt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}jt.prototype.clear=Ot,jt.prototype.delete=Dt,jt.prototype.get=_t,jt.prototype.has=Mt,jt.prototype.set=Ft;var Bt=jt,Et=Je(L,"Map"),At=gt,It=Bt,Tt=Et;var Nt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Pt=function(e,t){var r=e.__data__;return Nt(t)?r["string"==typeof t?"string":"hash"]:r.map},Lt=Pt;var Ht=Pt;var Rt=Pt;var zt=Pt;var Vt=function(){this.size=0,this.__data__={hash:new At,map:new(Tt||It),string:new At}},Wt=function(e){var t=Lt(this,e).delete(e);return this.size-=t?1:0,t},Yt=function(e){return Ht(this,e).get(e)},Ut=function(e){return Rt(this,e).has(e)},qt=function(e,t){var r=zt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Zt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Zt.prototype.clear=Vt,Zt.prototype.delete=Wt,Zt.prototype.get=Yt,Zt.prototype.has=Ut,Zt.prototype.set=qt;var Qt=Zt,Gt=Qt;function Xt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return r.cache=i.set(a,o)||i,o};return r.cache=new(Xt.Cache||Gt),r}Xt.Cache=Gt;var Kt=Xt;var Jt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,er=/\\(\\)?/g,tr=function(e){var t=Kt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Jt,(function(e,r,n,a){t.push(n?a.replace(er,"$1"):r||e)})),t}));var rr=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},nr=Oe,ar=se,ir=U?U.prototype:void 0,or=ir?ir.toString:void 0;var sr=function e(t){if("string"==typeof t)return t;if(nr(t))return rr(t,e)+"";if(ar(t))return or?or.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},lr=sr;var cr=Oe,dr=je,ur=tr,hr=function(e){return null==e?"":lr(e)};var pr=function(e,t){return cr(e)?e:dr(e,t)?[e]:ur(hr(e))},fr=se;var mr=function(e){if("string"==typeof e||fr(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},gr=pr,vr=mr;var yr=function(e,t){for(var r=0,n=(t=gr(t,e)).length;null!=e&&r<n;)e=e[vr(t[r++])];return r&&r==n?e:void 0},br=yr;var wr=function(e,t,r){var n=null==e?void 0:br(e,t);return void 0===n?r:n};const $r=(e,t,r)=>t?wr(r,t)||wr(e,t):r||e,xr=(e,t)=>{const r=t||e.defaultValue;return wr(e.collections,r)};var Cr;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Cr||(Cr={}));const Sr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(131, 151, 252, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},kr=e=>t=>{const r=t.theme,n=xr(Sr,r[Cr.colorScheme]);return r.options&&r.options.color?$r(n,e,r.options.color):$r(n,e)},Or={Brand:{1:kr("Brand.1"),2:kr("Brand.2"),3:kr("Brand.3"),4:kr("Brand.4"),5:kr("Brand.5"),6:kr("Brand.6")},Primary:kr("Primary"),PrimaryDark:kr("PrimaryDark"),Secondary:kr("Secondary"),Accent:{Light:{1:kr("Accent.Light.1"),2:kr("Accent.Light.2"),3:kr("Accent.Light.3"),4:kr("Accent.Light.4"),5:kr("Accent.Light.5"),6:kr("Accent.Light.6")},Dark:{1:kr("Accent.Dark.1"),2:kr("Accent.Dark.2"),3:kr("Accent.Dark.3")}},Neutral:{1:kr("Neutral.1"),2:kr("Neutral.2"),3:kr("Neutral.3"),4:kr("Neutral.4"),5:kr("Neutral.5"),6:kr("Neutral.6"),7:kr("Neutral.7"),8:kr("Neutral.8")},Validation:{Green:{Text:kr("Validation.Green.Text"),Icon:kr("Validation.Green.Icon"),Border:kr("Validation.Green.Border"),Background:kr("Validation.Green.Background")},Orange:{Text:kr("Validation.Orange.Text"),Icon:kr("Validation.Orange.Icon"),Border:kr("Validation.Orange.Border"),Background:kr("Validation.Orange.Background"),Badge:kr("Validation.Orange.Badge")},Red:{Text:kr("Validation.Red.Text"),Icon:kr("Validation.Red.Icon"),Border:kr("Validation.Red.Border"),Background:kr("Validation.Red.Background")},Blue:{Text:kr("Validation.Blue.Text"),Icon:kr("Validation.Blue.Icon"),Border:kr("Validation.Blue.Border"),Background:kr("Validation.Blue.Background")}},Shadow:{Accent:kr("Shadow.Accent"),Red:kr("Shadow.Red"),Elevation:kr("Shadow.Elevation")}},Dr={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},_r={collections:{base:{D1:{fontFamily:Dr.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Dr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Dr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Dr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Dr.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Dr.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Dr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Dr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Dr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Dr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Dr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Dr.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Dr.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Dr.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Mr=e=>t=>{const r=t.theme,n=xr(_r,r[Cr.textStyleScheme]);return r.options&&r.options.textStyle?$r(n,e,r.options.textStyle):$r(n,e)},Fr={D1:{fontFamily:Mr("D1.fontFamily"),fontSize:Mr("D1.fontSize"),fontWeight:Mr("D1.fontWeight"),lineHeight:Mr("D1.lineHeight"),letterSpacing:Mr("D1.letterSpacing")},D2:{fontFamily:Mr("D2.fontFamily"),fontSize:Mr("D2.fontSize"),fontWeight:Mr("D2.fontWeight"),lineHeight:Mr("D2.lineHeight"),letterSpacing:Mr("D2.letterSpacing")},D3:{fontFamily:Mr("D3.fontFamily"),fontSize:Mr("D3.fontSize"),fontWeight:Mr("D3.fontWeight"),lineHeight:Mr("D3.lineHeight"),letterSpacing:Mr("D3.letterSpacing")},D4:{fontFamily:Mr("D4.fontFamily"),fontSize:Mr("D4.fontSize"),fontWeight:Mr("D4.fontWeight"),lineHeight:Mr("D4.lineHeight"),letterSpacing:Mr("D4.letterSpacing")},DBody:{fontFamily:Mr("DBody.fontFamily"),fontSize:Mr("DBody.fontSize"),fontWeight:Mr("DBody.fontWeight"),lineHeight:Mr("DBody.lineHeight"),letterSpacing:Mr("DBody.letterSpacing")},H1:{fontFamily:Mr("H1.fontFamily"),fontSize:Mr("H1.fontSize"),fontWeight:Mr("H1.fontWeight"),lineHeight:Mr("H1.lineHeight"),letterSpacing:Mr("H1.letterSpacing")},H2:{fontFamily:Mr("H2.fontFamily"),fontSize:Mr("H2.fontSize"),fontWeight:Mr("H2.fontWeight"),lineHeight:Mr("H2.lineHeight"),letterSpacing:Mr("H2.letterSpacing")},H3:{fontFamily:Mr("H3.fontFamily"),fontSize:Mr("H3.fontSize"),fontWeight:Mr("H3.fontWeight"),lineHeight:Mr("H3.lineHeight"),letterSpacing:Mr("H3.letterSpacing")},H4:{fontFamily:Mr("H4.fontFamily"),fontSize:Mr("H4.fontSize"),fontWeight:Mr("H4.fontWeight"),lineHeight:Mr("H4.lineHeight"),letterSpacing:Mr("H4.letterSpacing")},H5:{fontFamily:Mr("H5.fontFamily"),fontSize:Mr("H5.fontSize"),fontWeight:Mr("H5.fontWeight"),lineHeight:Mr("H5.lineHeight"),letterSpacing:Mr("H5.letterSpacing")},H6:{fontFamily:Mr("H6.fontFamily"),fontSize:Mr("H6.fontSize"),fontWeight:Mr("H6.fontWeight"),lineHeight:Mr("H6.lineHeight"),letterSpacing:Mr("H6.letterSpacing")},Body:{fontFamily:Mr("Body.fontFamily"),fontSize:Mr("Body.fontSize"),fontWeight:Mr("Body.fontWeight"),lineHeight:Mr("Body.lineHeight"),letterSpacing:Mr("Body.letterSpacing")},BodySmall:{fontFamily:Mr("BodySmall.fontFamily"),fontSize:Mr("BodySmall.fontSize"),fontWeight:Mr("BodySmall.fontWeight"),lineHeight:Mr("BodySmall.lineHeight"),letterSpacing:Mr("BodySmall.letterSpacing")},XSmall:{fontFamily:Mr("XSmall.fontFamily"),fontSize:Mr("XSmall.fontSize"),fontWeight:Mr("XSmall.fontWeight"),lineHeight:Mr("XSmall.lineHeight"),letterSpacing:Mr("XSmall.letterSpacing")}},jr=e=>{switch(e){case 700:case"bold":return Dr.Bold;case 600:case"semibold":return Dr.Semibold;case 300:case"light":return Dr.Light;case 400:case"regular":return Dr.Regular;default:return""}},Br=(e,t)=>r=>{const n=Fr[e].fontFamily(r),a=Fr[e].fontWeight(r);return Object.values(Dr).includes(n)?x`
                font-family: ${jr(t)||jr(a)||n};
                font-weight: normal !important;
            `:x`
            font-family: ${n};
            font-weight: ${(Er(t)||a)??"normal"};
        `},Er=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ar=Br,Ir=(e,t,r=!1)=>n=>{const a=Fr[e],i=a.fontSize(n);return x`
            ${Br(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${x`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},Tr=(e=!1,t=!1)=>t?x`
            display: block;
        `:e?x`
            display: inline;
        `:x`
            display: block;
        `;var Nr;!function(e){e.D1=$.h1`
        ${e=>x`
                ${Ir("D1",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Tr(e.inline,e.paragraph)}
            `}
    `,e.D2=$.h1`
        ${e=>x`
                ${Ir("D2",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Tr(e.inline,e.paragraph)}
            `}
    `,e.D3=$.h1`
        ${e=>x`
                ${Ir("D3",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Tr(e.inline,e.paragraph)}
            `}
    `,e.D4=$.h1`
        ${e=>x`
                ${Ir("D4",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Tr(e.inline,e.paragraph)}
            `}
    `,e.DBody=$.h1`
        ${e=>x`
                ${Ir("DBody",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Tr(e.inline,e.paragraph)}
            `}
    `,e.H1=$.h1`
        ${e=>x`
                ${Ir("H1",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Tr(e.inline,e.paragraph)}
            `}
    `,e.H2=$.h2`
        ${e=>x`
                ${Ir("H2",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Tr(e.inline,e.paragraph)}
            `}
    `,e.H3=$.h3`
        ${e=>x`
                ${Ir("H3",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Tr(e.inline,e.paragraph)}
            `}
    `,e.H4=$.h4`
        ${e=>x`
                ${Ir("H4",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Tr(e.inline,e.paragraph)}
            `}
    `,e.H5=$.h5`
        ${e=>x`
                ${Ir("H5",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Tr(e.inline,e.paragraph)}
            `}
    `,e.H6=$.h6`
        ${e=>x`
                ${Ir("H6",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Tr(e.inline,e.paragraph)}
            `}
    `,e.Body=$.p`
        ${e=>x`
                ${Ir("Body",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Tr(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=$.p`
        ${e=>x`
                ${Ir("BodySmall",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Tr(e.inline,e.paragraph)}
            `}
    `,e.XSmall=$.span`
        ${e=>x`
                ${Ir("XSmall",e.weight,e.paragraph)}
                color: ${Or.Neutral[1]};
                ${Tr(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Hr({...e,textStyle:"Body"}),Small:e=>Hr({...e,textStyle:"BodySmall"})}}(Nr||(Nr={}));const Pr=$.a`
    ${e=>x`
            ${Ir(e.textStyle,e.weight)}
            color: ${Or.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Or.Secondary};

                svg {
                    color: ${Or.Secondary};
                }
            }
        `}
`,Lr=$($e)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Hr=({external:e=!1,children:n,...a})=>t(Pr,{...a,children:[n,e&&r(Lr,{})]}),Rr=$.div`
    border-radius: 0.5rem;
    background: ${Or.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,zr=({children:e,...t})=>{const n=t["data-testid"]||"card";return r(Rr,{...t,"data-testid":n,children:"string"==typeof e?r(Nr.Body,{children:e}):e})},Vr=$.div`
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
`,Yr=({show:e=!1,rootId:t,onOverlayClick:n,children:a,backgroundOpacity:c,backgroundBlur:d=!0,disableTransition:u=!1,enableOverlayClick:h=!1,zIndex:p,id:f})=>{const[m,g]=o(null),[v,y]=o(),b=s(),w=s(null),$=a&&i.cloneElement(a,{ref:w}),x=f?`lifesg-ds-overlay-root-${f}`:"lifesg-ds-overlay-root";l((()=>{if(e){const e=O();if(C(e),!e){const e=setTimeout((()=>{_("add")}),200);return()=>clearTimeout(e)}}else if(!b.current){const e=setTimeout((()=>{_("remove")}),200);return()=>clearTimeout(e)}}),[e]),l((()=>{g(k());const e=O();return C(e),e||D(),()=>{_("remove")}}),[]);const C=e=>{b.current=e,y(e)},k=()=>document&&t?document.getElementById(t):document?document.body:null,O=()=>document.body.classList.contains(qr),D=()=>{if(!document.getElementById(Ur)){const e=document.createElement("style");e.id=Ur;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${qr} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${qr}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},_=e=>{const t=document.body.classList.contains(qr);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(qr):document.body.classList.add(qr)},M=e=>{const t=w.current?.firstChild;t&&t.contains(e.target)||n&&h&&(e.preventDefault(),n())};return m?S.createPortal(r(Vr,{id:x,"data-testid":x,$show:e,zIndex:p,$stacked:v,children:a&&r(Wr,{"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:c||(v?.5:.8),$backgroundBlur:d,$disableTransition:u,$enableOverlayClick:h,onClick:M,children:$})}),m):null},Ur="lifesg-ds-overlay-stylesheet",qr="lifesg-ds-overlay-open",Zr=e=>Object.keys(A).reduce(((t,r)=>{const n=A[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Qr=Zr("max-width"),Gr=(Zr("min-width"),A),Xr=$.div`
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
`,Kr=({id:e="modal",show:t,animationFrom:n="bottom",children:a,enableOverlayClick:i=!0,rootComponentId:s,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:u=!0,...h})=>{const[p,f]=o(),[m,g]=o();l((()=>window.visualViewport?(y(),window.visualViewport.addEventListener("resize",y),()=>{window.visualViewport.removeEventListener("resize",y)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),l((()=>{t&&u&&document.activeElement?.blur?.()}),[t]);const v=()=>{const e=.01*window.innerHeight;f(e)},y=()=>{const e=.01*window.visualViewport.height;f(e),g(window.visualViewport.offsetTop)};return r(Yr,{"data-testid":`${e}-overlay`,show:t,enableOverlayClick:i,onOverlayClick:d,id:e,rootId:s,zIndex:c,children:r(Xr,{show:t,animationFrom:n,"data-testid":e,verticalHeight:p,offsetTop:m,...h,children:a})})};var Jr,en={};Object.defineProperty(en,"__esModule",{value:!0});var tn=e;const rn=e=>tn.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:tn.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});rn.displayName="CrossIcon",Jr=en.CrossIcon=rn;const nn=$.button`
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
                background-color: ${Or.Neutral[7]};
            `}
    }
`,an=i.forwardRef((({children:e,focusHighlight:t=!0,focusOutline:n="none",type:a="button",...i},o)=>r(nn,{ref:o,$outline:n,$highlight:t,type:a,...i,children:e}))),on=$.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Or.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Qr.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,sn=$(an)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Or.Accent.Light[1]};
    }
`,ln=$(Jr)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Or.Neutral[4]};
`,cn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",dn=$.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?x`
            visibility: visible;
            opacity: 1;
            transition: ${cn};
            z-index: 2;
        `:x`
            visibility: hidden;
            opacity: 0;
            transition: ${cn};
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
`,un=$((({id:e="modal-box",children:n,onClose:a,showCloseButton:i=!0,...o})=>t(on,{"data-testid":e,...o,onClick:e=>{e.stopPropagation()},children:[i&&r(sn,{onClick:a,"data-testid":"close-button",focusHighlight:!1,children:r(ln,{})}),n]})))`
    padding: 3.5rem 1.25rem 2.5rem;
`;$.div`
    position: relative;
    width: fit-content;
`,$.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`;const hn=({children:e,visible:a,onMobileClose:i,...c})=>{const d=c["data-testid"]||"popover",[u,h]=o("none"),p=s(null),f=E.exports.useMediaQuery({maxWidth:A.mobileL}),m=s(u);l((()=>(y(),window.addEventListener("resize",xe(g,300)),()=>{window.removeEventListener("resize",xe(g,300))})),[]);const g=()=>{y()},v=()=>{i&&i()},y=()=>{const e=b();var t;e&&(t=e,m.current=t,h(t))},b=()=>{if(p.current){const e=p.current.getBoundingClientRect(),t=24,r=e.y<t,n=window.innerWidth-t;return e.x<t?r?"top-left":"left":e.x+e.width>n?r?"top-right":"right":("top-left"===m.current||"left"===m.current)&&e.x-e.width/2>t||("top-right"===m.current||"right"===m.current)&&e.x+2*e.width<n?r?"top-center":"none":void 0}},w=()=>"string"==typeof e?r(Nr.BodySmall,{children:e}):e;return t(n,{children:[r(dn,{ref:p,"data-testid":d,$visible:a,$offset:u,...c,children:r(zr,{children:w()})}),f&&r(Kr,{show:a,onOverlayClick:v,children:r(un,{onClose:v,children:w()})})]})},pn=$.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${Or.Primary};
    }
`,fn=$.div`
    display: inline;
    position: relative;
    width: fit-content;
`,mn=({addonType:e="popover",icon:t,"data-testid":n,...a})=>r(pn,{"data-testid":n,...a,children:t||r(D,{id:`${e}-icon`})}),gn=({addon:e})=>{const[n,a]=o(!1),i=s(),c=s(!1),d=E.exports.useMediaQuery({maxWidth:A.mobileL}),u=e=>{c.current=e,a(e)};l((()=>{if(!d)return document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}}),[]);const h=e=>{i&&!i.current.contains(e.target)&&c.current&&u(!1)};return t(fn,{ref:i,id:"addon-popover-wrapper",children:[r(hn,{visible:n,id:e.id,"data-testid":e["data-testid"],onMobileClose:()=>{n&&u(!1)},children:e.content}),r(mn,{addonType:e.type,icon:e.icon,id:`popover-hoc-trigger${e["data-testid"]&&`-${e["data-testid"]}`}`,onClick:()=>u(!n),"aria-label":"popover-button",type:"button"})]})};var vn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(vn||(vn={}));const yn=$.label`
    ${Ir("H5","semibold")}

    color: ${e=>e.disabled?Or.Neutral[4](e):Or.Neutral[3](e)};
    margin-bottom: 0.5rem;
    display: inline-block;

    #popover-hoc-wrapper {
        display: inline;
    }

    #popover-hoc-button {
        vertical-align: bottom;
    }
`,bn=$(Nr.H6)`
    color: ${Or.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`,wn=$(Nr.BodySmall)`
    color: ${e=>e.disabled?Or.Neutral[4](e):Or.Neutral[3](e)};
`,$n=({children:e,addon:n,subtitle:a,"data-testid":i,...o})=>t(yn,{...o,children:[e,n&&n.type&&("popover"===n.type?n&&r(gn,{addon:n}):null),"string"==typeof a?r(wn,{as:"span","data-testid":i?`${i}-subtitle`:"subtitle",...o,children:a}):a]}),xn=$.div`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`,Cn=({label:e,errorMessage:n,id:a,disabled:i,children:o,"data-error-testid":s})=>{const l=()=>s||(a?`${a}-error-message`:"error-message"),u=()=>!!n;return t(xn,{children:[e&&r($n,"string"==typeof e?{htmlFor:`${a}-base`,"data-testid":a?`${a}-label`:"form-label",disabled:i,children:e}:{htmlFor:`${a}-base`,"data-testid":a?`${a}-label`:"form-label",disabled:i,...e}),(()=>{const e={"aria-invalid":u(),"aria-describedby":u()&&l()};return c.map(o,(t=>d(t,e)))})(),n&&r(bn,{id:l(),weight:"semibold",tabIndex:0,"data-testid":l(),children:n})]})};var Sn=function(e,t){return Sn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},Sn(e,t)};var kn=function(){return kn=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},kn.apply(this,arguments)};var On="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Dn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},_n="object"==typeof On&&On&&On.Object===Object&&On,Mn="object"==typeof self&&self&&self.Object===Object&&self,Fn=_n||Mn||Function("return this")(),jn=Fn,Bn=function(){return jn.Date.now()},En=/\s/;var An=function(e){for(var t=e.length;t--&&En.test(e.charAt(t)););return t},In=/^\s+/;var Tn=function(e){return e?e.slice(0,An(e)+1).replace(In,""):e},Nn=Fn.Symbol,Pn=Nn,Ln=Object.prototype,Hn=Ln.hasOwnProperty,Rn=Ln.toString,zn=Pn?Pn.toStringTag:void 0;var Vn=function(e){var t=Hn.call(e,zn),r=e[zn];try{e[zn]=void 0;var n=!0}catch(e){}var a=Rn.call(e);return n&&(t?e[zn]=r:delete e[zn]),a},Wn=Object.prototype.toString;var Yn=Vn,Un=function(e){return Wn.call(e)},qn=Nn?Nn.toStringTag:void 0;var Zn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":qn&&qn in Object(e)?Yn(e):Un(e)},Qn=function(e){return null!=e&&"object"==typeof e};var Gn=Tn,Xn=Dn,Kn=function(e){return"symbol"==typeof e||Qn(e)&&"[object Symbol]"==Zn(e)},Jn=/^[-+]0x[0-9a-f]+$/i,ea=/^0b[01]+$/i,ta=/^0o[0-7]+$/i,ra=parseInt;var na=Dn,aa=Bn,ia=function(e){if("number"==typeof e)return e;if(Kn(e))return NaN;if(Xn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Xn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Gn(e);var r=ea.test(e);return r||ta.test(e)?ra(e.slice(2),r?2:8):Jn.test(e)?NaN:+e},oa=Math.max,sa=Math.min;var la=function(e,t,r){var n,a,i,o,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var r=n,i=a;return n=a=void 0,c=t,o=e.apply(i,r)}function f(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=i}function m(){var e=aa();if(f(e))return g(e);s=setTimeout(m,function(e){var r=t-(e-l);return u?sa(r,i-(e-c)):r}(e))}function g(e){return s=void 0,h&&n?p(e):(n=a=void 0,o)}function v(){var e=aa(),r=f(e);if(n=arguments,a=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),d?p(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,t),p(l)}return void 0===s&&(s=setTimeout(m,t)),o}return t=ia(t)||0,na(r)&&(d=!!r.leading,i=(u="maxWait"in r)?oa(ia(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),v.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=a=s=void 0},v.flush=function(){return void 0===s?o:g(aa())},v},ca=la,da=Dn;var ua=function(e,t,r){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return da(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),ca(e,t,{leading:n,maxWait:t,trailing:a})},ha=function(e,t,r,n){switch(t){case"debounce":return la(e,r,n);case"throttle":return ua(e,r,n);default:return e}},pa=function(e){return"function"==typeof e},fa=function(){return"undefined"==typeof window},ma=function(e){return e instanceof Element||e instanceof HTMLDocument},ga=function(e,t,r,n){return function(a){var i=a.width,o=a.height;t((function(t){return t.width===i&&t.height===o||t.width===i&&!n||t.height===o&&!r?t:(e&&pa(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!fa()){t&&t.current&&(r.targetRef.current=t.current);var a=r.getElement();a&&(r.observableElement&&r.observableElement===a||(r.observableElement=a,r.resizeObserver.observe(a,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(fa())return null;if(t)return document.querySelector(t);if(n&&ma(n))return n;if(r.targetRef&&ma(r.targetRef.current))return r.targetRef.current;var a=k(r);if(!a)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,a=void 0===n||n,i=t.handleHeight,o=void 0===i||i,s=t.onResize;if(a||o){var l=ga(s,r.setState.bind(r),a,o);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,a=t.height;!r.skipOnMount&&!fa()&&l({width:n,height:a}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return pa(t)?"renderProp":pa(n)?"childFunction":u(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,a=t.refreshMode,i=t.refreshRate,o=void 0===i?1e3:i,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=h(),r.observableElement=null,fa()||(r.resizeHandler=ha(r.createResizeHandler,a,o,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}Sn(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){fa()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,n=t.children,i=t.nodeType,o=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=n)(l);case"child":if((e=n).type&&"string"==typeof e.type){var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=n).map((function(e){return!!e&&d(e,l)}));default:return a.createElement(o,null)}}}(p);var va=fa()?l:f;function ya(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,a=e.refreshRate,i=void 0===a?1e3:a,l=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,h=void 0===u||u,p=e.targetRef,f=e.observerOptions,m=e.onResize,g=s(r),v=s(null),y=null!=p?p:v,b=s(),w=o({width:void 0,height:void 0}),$=w[0],x=w[1];return va((function(){if(!fa()){var e=ga(m,x,d,h);b.current=ha((function(t){(d||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,a=r.height;!g.current&&!fa()&&e({width:n,height:a}),g.current=!1}))}),n,i,l);var t=new window.ResizeObserver(b.current);return y.current&&t.observe(y.current,f),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[n,i,l,d,h,m,f,y.current]),kn({ref:y},$)}let ba=Ia();const wa=e=>ja(e,ba);let $a=Ia();wa.write=e=>ja(e,$a);let xa=Ia();wa.onStart=e=>ja(e,xa);let Ca=Ia();wa.onFrame=e=>ja(e,Ca);let Sa=Ia();wa.onFinish=e=>ja(e,Sa);let ka=[];wa.setTimeout=(e,t)=>{let r=wa.now()+t,n=()=>{let e=ka.findIndex((e=>e.cancel==n));~e&&ka.splice(e,1),Ma-=~e?1:0},a={time:r,handler:e,cancel:n};return ka.splice(Oa(r),0,a),Ma+=1,Ba(),a};let Oa=e=>~(~ka.findIndex((t=>t.time>e))||~ka.length);wa.cancel=e=>{xa.delete(e),Ca.delete(e),Sa.delete(e),ba.delete(e),$a.delete(e)},wa.sync=e=>{Fa=!0,wa.batchedUpdates(e),Fa=!1},wa.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,wa.onStart(r)}return n.handler=e,n.cancel=()=>{xa.delete(r),t=null},n};let Da="undefined"!=typeof window?window.requestAnimationFrame:()=>{};wa.use=e=>Da=e,wa.now="undefined"!=typeof performance?()=>performance.now():Date.now,wa.batchedUpdates=e=>e(),wa.catch=console.error,wa.frameLoop="always",wa.advance=()=>{"demand"!==wa.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Aa()};let _a=-1,Ma=0,Fa=!1;function ja(e,t){Fa?(t.delete(e),e(0)):(t.add(e),Ba())}function Ba(){_a<0&&(_a=0,"demand"!==wa.frameLoop&&Da(Ea))}function Ea(){~_a&&(Da(Ea),wa.batchedUpdates(Aa))}function Aa(){let e=_a;_a=wa.now();let t=Oa(_a);t&&(Ta(ka.splice(0,t),(e=>e.handler())),Ma-=t),Ma?(xa.flush(),ba.flush(e?Math.min(64,_a-e):16.667),Ca.flush(),$a.flush(),Sa.flush()):_a=-1}function Ia(){let e=new Set,t=e;return{add(r){Ma+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Ma-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Ma-=t.size,Ta(t,(t=>t(r)&&e.add(t))),Ma+=e.size,t=e)}}}function Ta(e,t){e.forEach((e=>{try{t(e)}catch(e){wa.catch(e)}}))}function Na(){}const Pa={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function La(e,t){if(Pa.arr(e)){if(!Pa.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}const Ha=(e,t)=>e.forEach(t);function Ra(e,t,r){if(Pa.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}const za=e=>Pa.und(e)?[]:Pa.arr(e)?e:[e];function Va(e,t){if(e.size){const r=Array.from(e);e.clear(),Ha(r,t)}}const Wa=(e,...t)=>Va(e,(e=>e(...t))),Ya=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Ua,qa,Za=null,Qa=!1,Ga=Na;var Xa=Object.freeze({__proto__:null,get createStringInterpolator(){return Ua},get to(){return qa},get colors(){return Za},get skipAnimation(){return Qa},get willAdvance(){return Ga},assign:e=>{e.to&&(qa=e.to),e.now&&(wa.now=e.now),void 0!==e.colors&&(Za=e.colors),null!=e.skipAnimation&&(Qa=e.skipAnimation),e.createStringInterpolator&&(Ua=e.createStringInterpolator),e.requestAnimationFrame&&wa.use(e.requestAnimationFrame),e.batchedUpdates&&(wa.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Ga=e.willAdvance),e.frameLoop&&(wa.frameLoop=e.frameLoop)}});const Ka=new Set;let Ja=[],ei=[],ti=0;const ri={get idle(){return!Ka.size&&!Ja.length},start(e){ti>e.priority?(Ka.add(e),wa.onStart(ni)):(ai(e),wa(oi))},advance:oi,sort(e){if(ti)wa.onFrame((()=>ri.sort(e)));else{const t=Ja.indexOf(e);~t&&(Ja.splice(t,1),ii(e))}},clear(){Ja=[],Ka.clear()}};function ni(){Ka.forEach(ai),Ka.clear(),wa(oi)}function ai(e){Ja.includes(e)||ii(e)}function ii(e){Ja.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Ja,(t=>t.priority>e.priority)),0,e)}function oi(e){const t=ei;for(let r=0;r<Ja.length;r++){const n=Ja[r];ti=n.priority,n.idle||(Ga(n),n.advance(e),n.idle||t.push(n))}return ti=0,ei=Ja,ei.length=0,Ja=t,Ja.length>0}const si="[-+]?\\d*\\.?\\d+",li=si+"%";function ci(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const di=new RegExp("rgb"+ci(si,si,si)),ui=new RegExp("rgba"+ci(si,si,si,si)),hi=new RegExp("hsl"+ci(si,li,li)),pi=new RegExp("hsla"+ci(si,li,li,si)),fi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,mi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,gi=/^#([0-9a-fA-F]{6})$/,vi=/^#([0-9a-fA-F]{8})$/;function yi(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function bi(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,a=2*r-n,i=yi(a,n,e+1/3),o=yi(a,n,e),s=yi(a,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function wi(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function $i(e){return(parseFloat(e)%360+360)%360/360}function xi(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Ci(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Si(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=gi.exec(e))?parseInt(t[1]+"ff",16)>>>0:Za&&void 0!==Za[e]?Za[e]:(t=di.exec(e))?(wi(t[1])<<24|wi(t[2])<<16|wi(t[3])<<8|255)>>>0:(t=ui.exec(e))?(wi(t[1])<<24|wi(t[2])<<16|wi(t[3])<<8|xi(t[4]))>>>0:(t=fi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=vi.exec(e))?parseInt(t[1],16)>>>0:(t=mi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=hi.exec(e))?(255|bi($i(t[1]),Ci(t[2]),Ci(t[3])))>>>0:(t=pi.exec(e))?(bi($i(t[1]),Ci(t[2]),Ci(t[3]))|xi(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const ki=(e,t,r)=>{if(Pa.fun(e))return e;if(Pa.arr(e))return ki({range:e,output:t,extrapolate:r});if(Pa.str(e.output[0]))return Ua(e);const n=e,a=n.output,i=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,a,i,o,s,l){let c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===a)return n;if(t===r)return e<=t?n:a;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=i(c),n===-1/0?c=-c:a===1/0?c+=n:c=c*(a-n)+n;return c}(e,i[t],i[t+1],a[t],a[t+1],l,o,s,n.map)}};const Oi=1.70158,Di=1.525*Oi,_i=Oi+1,Mi=2*Math.PI/3,Fi=2*Math.PI/4.5,ji=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Bi={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>_i*e*e*e-Oi*e*e,easeOutBack:e=>1+_i*Math.pow(e-1,3)+Oi*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Di)/2:(Math.pow(2*e-2,2)*((Di+1)*(2*e-2)+Di)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Mi),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Mi)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Fi)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Fi)/2+1,easeInBounce:e=>1-ji(1-e),easeOutBounce:ji,easeInOutBounce:e=>e<.5?(1-ji(1-2*e))/2:(1+ji(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e;return((e,t,r)=>Math.min(Math.max(r,e),t))(0,1,("end"===t?Math.floor(n):Math.ceil(n))/e)}};function Ei(){return Ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ei.apply(this,arguments)}const Ai=Symbol.for("FluidValue.get"),Ii=Symbol.for("FluidValue.observers"),Ti=e=>Boolean(e&&e[Ai]),Ni=e=>e&&e[Ai]?e[Ai]():e,Pi=e=>e[Ii]||null;function Li(e,t){let r=e[Ii];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Hi{constructor(e){if(this[Ai]=void 0,this[Ii]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Ri(this,e)}}const Ri=(e,t)=>Wi(e,Ai,t);function zi(e,t){if(e[Ai]){let r=e[Ii];r||Wi(e,Ii,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Vi(e,t){let r=e[Ii];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Ii]=null,e.observerRemoved&&e.observerRemoved(n,t)}}const Wi=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Yi=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ui=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,qi=new RegExp(`(${Yi.source})(%|[a-z]+)`,"i"),Zi=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Qi=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Gi=e=>{const[t,r]=Xi(e);if(!t||Ya())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Qi.test(r)?Gi(r):r||e},Xi=e=>{const t=Qi.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]};let Ki;const Ji=(e,t,r,n,a)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${a})`,eo=e=>{Ki||(Ki=Za?new RegExp(`(${Object.keys(Za).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ni(e).replace(Qi,Gi).replace(Ui,Si).replace(Ki,Si))),r=t.map((e=>e.match(Yi).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>ki(Ei({},e,{output:t}))));return e=>{var r;const a=!qi.test(t[0])&&(null==(r=t.find((e=>qi.test(e))))?void 0:r.replace(Yi,""));let i=0;return t[0].replace(Yi,(()=>`${n[i++](e)}${a||""}`)).replace(Zi,Ji)}},to="react-spring: ",ro=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${to}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},no=ro(console.warn);const ao=ro(console.warn);function io(e){return Pa.str(e)&&("#"==e[0]||/\d/.test(e)||!Ya()&&Qi.test(e)||e in(Za||{}))}const oo=Ya()?l:f,so=()=>{const e=s(!1);return oo((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function lo(){const e=o()[1],t=so();return()=>{t.current&&e(Math.random())}}const co=e=>l(e,uo),uo=[];function ho(e){const t=s();return l((()=>{t.current=e})),t.current}const po=Symbol.for("Animated:node"),fo=e=>e&&e[po],mo=(e,t)=>{return r=e,n=po,a=t,Object.defineProperty(r,n,{value:a,writable:!0,configurable:!0});var r,n,a},go=e=>e&&e[po]&&e[po].getPayload();class vo{constructor(){this.payload=void 0,mo(this,this)}getPayload(){return this.payload||[]}}class yo extends vo{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Pa.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new yo(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Pa.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Pa.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class bo extends yo{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=ki({output:[e,e]})}static create(e){return new bo(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Pa.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ki({output:[this.getValue(),e]})),this._value=0,super.reset()}}const wo={dependencies:null};class $o extends vo{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Ra(this.source,((r,n)=>{var a;(a=r)&&a[po]===a?t[n]=r.getValue(e):Ti(r)?t[n]=Ni(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Ha(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Ra(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){wo.dependencies&&Ti(e)&&wo.dependencies.add(e);const t=go(e);t&&Ha(t,(e=>this.add(e)))}}class xo extends $o{constructor(e){super(e)}static create(e){return new xo(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Co)),!0)}}function Co(e){return(io(e)?bo:yo).create(e)}function So(e){const t=fo(e);return t?t.constructor:Pa.arr(e)?xo:io(e)?bo:yo}function ko(){return ko=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ko.apply(this,arguments)}const Oo=(e,t)=>{const r=!Pa.fun(e)||e.prototype&&e.prototype.isReactComponent;return m(((n,i)=>{const o=s(null),c=r&&g((e=>{o.current=function(e,t){e&&(Pa.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[d,u]=function(e,t){const r=new Set;wo.dependencies=r,e.style&&(e=ko({},e,{style:t.createAnimatedStyle(e.style)}));return e=new $o(e),wo.dependencies=null,[e,r]}(n,t),h=lo(),p=()=>{const e=o.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&h()},f=new Do(p,u),m=s();oo((()=>(m.current=f,Ha(u,(e=>zi(e,f))),()=>{m.current&&(Ha(m.current.deps,(e=>Vi(e,m.current))),wa.cancel(m.current.update))}))),l(p,[]),co((()=>()=>{const e=m.current;Ha(e.deps,(t=>Vi(t,e)))}));const v=t.getComponentProps(d.getValue());return a.createElement(e,ko({},v,{ref:c}))}))};class Do{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&wa.write(this.update)}}const _o=Symbol.for("AnimatedComponent"),Mo=e=>Pa.str(e)?e:e&&Pa.str(e.displayName)?e.displayName:Pa.fun(e)&&e.name||null;function Fo(){return Fo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Fo.apply(this,arguments)}function jo(e,...t){return Pa.fun(e)?e(...t):e}const Bo=(e,t)=>!0===e||!!(t&&e&&(Pa.fun(e)?e(t):za(e).includes(t))),Eo=(e,t)=>Pa.obj(e)?t&&e[t]:e,Ao=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Io=e=>e,To=(e,t=Io)=>{let r=No;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const a of r){const r=t(e[a],a);Pa.und(r)||(n[a]=r)}return n},No=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Po={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Lo(e){const t=function(e){const t={};let r=0;if(Ra(e,((e,n)=>{Po[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Ra(e,((e,n)=>n in t||(r[n]=e))),r}return Fo({},e)}function Ho(e){return e=Ni(e),Pa.arr(e)?e.map(Ho):io(e)?Xa.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Ro(e){return Pa.fun(e)||Pa.arr(e)&&Pa.obj(e[0])}const zo=Fo({},{tension:170,friction:26},{mass:1,damping:1,easing:Bi.linear,clamp:!1});class Vo{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,zo)}}function Wo(e,t){if(Pa.und(t.decay)){const r=!Pa.und(t.tension)||!Pa.und(t.friction);!r&&Pa.und(t.frequency)&&Pa.und(t.damping)&&Pa.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}const Yo=[];class Uo{constructor(){this.changed=!1,this.values=Yo,this.toValues=null,this.fromValues=Yo,this.to=void 0,this.from=void 0,this.config=new Vo,this.immediate=!1}}function qo(e,{key:t,props:r,defaultProps:n,state:a,actions:i}){return new Promise(((o,s)=>{var l;let c,d,u=Bo(null!=(l=r.cancel)?l:null==n?void 0:n.cancel,t);if(u)f();else{Pa.und(r.pause)||(a.paused=Bo(r.pause,t));let e=null==n?void 0:n.pause;!0!==e&&(e=a.paused||Bo(e,t)),c=jo(r.delay||0,t),e?(a.resumeQueue.add(p),i.pause()):(i.resume(),p())}function h(){a.resumeQueue.add(p),a.timeouts.delete(d),d.cancel(),c=d.time-wa.now()}function p(){c>0&&!Xa.skipAnimation?(a.delayed=!0,d=wa.setTimeout(f,c),a.pauseQueue.add(h),a.timeouts.add(d)):f()}function f(){a.delayed&&(a.delayed=!1),a.pauseQueue.delete(h),a.timeouts.delete(d),e<=(a.cancelId||0)&&(u=!0);try{i.start(Fo({},r,{callId:e,cancel:u}),o)}catch(e){s(e)}}}))}const Zo=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Xo(e.get()):t.every((e=>e.noop))?Qo(e.get()):Go(e.get(),t.every((e=>e.finished))),Qo=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Go=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Xo=e=>({value:e,cancelled:!0,finished:!1});function Ko(e,t,r,n){const{callId:a,parentId:i,onRest:o}=t,{asyncTo:s,promise:l}=r;return i||e!==s||t.reset?r.promise=(async()=>{r.asyncId=a,r.asyncTo=e;const c=To(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const h=new Promise(((e,t)=>(d=e,u=t))),p=e=>{const t=a<=(r.cancelId||0)&&Xo(n)||a!==r.asyncId&&Go(n,!1);if(t)throw e.result=t,u(e),e},f=(e,t)=>{const i=new es,o=new ts;return(async()=>{if(Xa.skipAnimation)throw Jo(r),o.result=Go(n,!1),u(o),o;p(i);const s=Pa.obj(e)?Fo({},e):Fo({},t,{to:e});s.parentId=a,Ra(c,((e,t)=>{Pa.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return p(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let m;if(Xa.skipAnimation)return Jo(r),Go(n,!1);try{let t;t=Pa.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,n.stop.bind(n))),await Promise.all([t.then(d),h]),m=Go(n.get(),!0,!1)}catch(e){if(e instanceof es)m=e.result;else{if(!(e instanceof ts))throw e;m=e.result}}finally{a==r.asyncId&&(r.asyncId=i,r.asyncTo=i?s:void 0,r.promise=i?l:void 0)}return Pa.fun(o)&&wa.batchedUpdates((()=>{o(m,n,n.item)})),m})():l}function Jo(e,t){Va(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class es extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class ts extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const rs=e=>e instanceof as;let ns=1;class as extends Hi{constructor(...e){super(...e),this.id=ns++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=fo(this);return e&&e.getValue()}to(...e){return Xa.to(this,e)}interpolate(...e){return no(`${to}The "interpolate" function is deprecated in v9 (use "to" instead)`),Xa.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Li(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ri.sort(this),Li(this,{type:"priority",parent:this,priority:e})}}const is=Symbol.for("SpringPhase"),os=e=>(1&e[is])>0,ss=e=>(2&e[is])>0,ls=e=>(4&e[is])>0,cs=(e,t)=>t?e[is]|=3:e[is]&=-3,ds=(e,t)=>t?e[is]|=4:e[is]&=-5;class us extends as{constructor(e,t){if(super(),this.key=void 0,this.animation=new Uo,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Pa.und(e)||!Pa.und(t)){const r=Pa.obj(e)?Fo({},e):Fo({},t,{from:e});Pa.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(ss(this)||this._state.asyncTo)||ls(this)}get goal(){return Ni(this.animation.to)}get velocity(){const e=fo(this);return e instanceof yo?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return os(this)}get isAnimating(){return ss(this)}get isPaused(){return ls(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{config:a,toValues:i}=n;const o=go(n.to);!o&&Ti(n.to)&&(i=za(Ni(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==bo?1:o?o[l].lastPosition:i[l];let d=n.immediate,u=c;if(!d){if(u=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=Pa.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const h=a.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Pa.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,n=Math.exp(-(1-e)*t);u=r+i/(1-e)*(1-n),d=Math.abs(s.lastPosition-u)<=h,o=i*n}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||h/10,n=a.clamp?0:a.bounce,l=!Pa.und(n),p=r==c?s.v0>0:r<c;let f,m=!1;const g=1,v=Math.ceil(e/g);for(let e=0;e<v&&(f=Math.abs(o)>t,f||(d=Math.abs(c-u)<=h,!d));++e){l&&(m=u==c||u>c==p,m&&(o=-o*n,u=c));o+=(1e-6*-a.tension*(u-c)+.001*-a.friction*o)/a.mass*g,u+=o*g}}else{let n=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(a.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+a.easing(n)*(c-r),o=(u-s.lastPosition)/e,d=1==n}s.lastVelocity=o,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}o&&!o[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,a.round)&&(r=!0)}));const s=fo(this),l=s.getValue();if(t){const e=Ni(n.to);l===e&&!r||a.decay?r&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return wa.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ss(this)){const{to:e,config:t}=this.animation;wa.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Pa.und(e)?(r=this.queue||[],this.queue=[]):r=[Pa.obj(e)?e:Fo({},t,{to:e})],Promise.all(r.map((e=>this._update(e)))).then((e=>Zo(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Jo(this._state,e&&this._lastCallId),wa.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Pa.obj(r)?r[t]:r,(null==r||Ro(r))&&(r=void 0),n=Pa.obj(n)?n[t]:n,null==n&&(n=void 0);const a={to:r,from:n};return os(this)||(e.reverse&&([r,n]=[n,r]),n=Ni(n),Pa.und(n)?fo(this)||this._set(r):this._set(n)),a}_update(e,t){let r=Fo({},e);const{key:n,defaultProps:a}=this;r.default&&Object.assign(a,To(r,((e,t)=>/^on/.test(t)?Eo(e,n):e))),ys(this,r,"onProps"),bs(this,"onProps",r,this);const i=this._prepareNode(r);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return qo(++this._lastCallId,{key:n,props:r,defaultProps:a,state:o,actions:{pause:()=>{ls(this)||(ds(this,!0),Wa(o.pauseQueue),bs(this,"onPause",Go(this,hs(this,this.animation.to)),this))},resume:()=>{ls(this)&&(ds(this,!1),ss(this)&&this._resume(),Wa(o.resumeQueue),bs(this,"onResume",Go(this,hs(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((e=>{if(r.loop&&e.finished&&(!t||!e.noop)){const e=ps(r);if(e)return this._update(e,!0)}return e}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Xo(this));const n=!Pa.und(e.to),a=!Pa.und(e.from);if(n||a){if(!(t.callId>this._lastToId))return r(Xo(this));this._lastToId=t.callId}const{key:i,defaultProps:o,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!a||n||t.default&&!Pa.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const h=!La(u,c);h&&(s.from=u),u=Ni(u);const p=!La(d,l);p&&this._focus(d);const f=Ro(t.to),{config:m}=s,{decay:g,velocity:v}=m;(n||a)&&(m.velocity=0),t.config&&!f&&function(e,t,r){r&&(Wo(r=Fo({},r),t),t=Fo({},r,t)),Wo(e,t),Object.assign(e,t);for(const t in zo)null==e[t]&&(e[t]=zo[t]);let{mass:n,frequency:a,damping:i}=e;Pa.und(a)||(a<.01&&(a=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/a,2)*n,e.friction=4*Math.PI*i*n/a)}(m,jo(t.config,i),t.config!==o.config?jo(o.config,i):void 0);let y=fo(this);if(!y||Pa.und(d))return r(Go(this,!0));const b=Pa.und(t.reset)?a&&!t.default:!Pa.und(u)&&Bo(t.reset,i),w=b?u:this.get(),$=Ho(d),x=Pa.num($)||Pa.arr($)||io($),C=!f&&(!x||Bo(o.immediate||t.immediate,i));if(p){const e=So(d);if(e!==y.constructor){if(!C)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set($)}}const S=y.constructor;let k=Ti(d),O=!1;if(!k){const e=b||!os(this)&&h;(p||e)&&(O=La(Ho(w),$),k=!O),(La(s.immediate,C)||C)&&La(m.decay,g)&&La(m.velocity,v)||(k=!0)}if(O&&ss(this)&&(s.changed&&!b?k=!0:k||this._stop(l)),!f&&((k||Ti(l))&&(s.values=y.getPayload(),s.toValues=Ti(d)?null:S==bo?[1]:za($)),s.immediate!=C&&(s.immediate=C,C||b||this._set(l)),k)){const{onRest:e}=s;Ha(vs,(e=>ys(this,t,e)));const n=Go(this,hs(this,l));Wa(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&wa.batchedUpdates((()=>{s.changed=!b,null==e||e(n,this),b?jo(o.onRest,n):null==s.onStart||s.onStart(n,this)}))}b&&this._set(w),f?r(Ko(t.to,t,this._state,this)):k?this._start():ss(this)&&!p?this._pendingCalls.add(r):r(Qo(w))}_focus(e){const t=this.animation;e!==t.to&&(Pi(this)&&this._detach(),t.to=e,Pi(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Ti(t)&&(zi(t,this),rs(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Ti(e)&&Vi(e,this)}_set(e,t=!0){const r=Ni(e);if(!Pa.und(r)){const e=fo(this);if(!e||!La(r,e.getValue())){const n=So(r);e&&e.constructor==n?e.setValue(r):mo(this,n.create(r)),e&&wa.batchedUpdates((()=>{this._onChange(r,t)}))}}return fo(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,bs(this,"onStart",Go(this,hs(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),jo(this.animation.onChange,e,this)),jo(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;fo(this).reset(Ni(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),ss(this)||(cs(this,!0),ls(this)||this._resume())}_resume(){Xa.skipAnimation?this.finish():ri.start(this)}_stop(e,t){if(ss(this)){cs(this,!1);const r=this.animation;Ha(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Li(this,{type:"idle",parent:this});const n=t?Xo(this.get()):Go(this.get(),hs(this,null!=e?e:r.to));Wa(this._pendingCalls,n),r.changed&&(r.changed=!1,bs(this,"onRest",n,this))}}}function hs(e,t){const r=Ho(t);return La(Ho(e.get()),r)}function ps(e,t=e.loop,r=e.to){let n=jo(t);if(n){const a=!0!==n&&Lo(n),i=(a||e).reverse,o=!a||a.reset;return fs(Fo({},e,{loop:t,default:!1,pause:void 0,to:!i||Ro(r)?r:void 0,from:o?e.from:void 0,reset:o},a))}}function fs(e){const{to:t,from:r}=e=Lo(e),n=new Set;return Pa.obj(t)&&gs(t,n),Pa.obj(r)&&gs(r,n),e.keys=n.size?Array.from(n):null,e}function ms(e){const t=fs(e);return Pa.und(t.default)&&(t.default=To(t)),t}function gs(e,t){Ra(e,((e,r)=>null!=e&&t.add(r)))}const vs=["onStart","onRest","onChange","onPause","onResume"];function ys(e,t,r){e.animation[r]=t[r]!==Ao(t,r)?Eo(t[r],e.key):void 0}function bs(e,t,...r){var n,a,i,o;null==(n=(a=e.animation)[t])||n.call(a,...r),null==(i=(o=e.defaultProps)[t])||i.call(o,...r)}const ws=["onStart","onChange","onRest"];let $s=1;class xs{constructor(e,t){this.id=$s++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Fo({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Pa.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(fs(e)),this}start(e){let{queue:t}=this;return e?t=za(e).map(fs):this.queue=[],this._flush?this._flush(this,t):(Ms(this,t),Cs(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Ha(za(t),(t=>r[t].stop(!!e)))}else Jo(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Pa.und(e))this.start({pause:!0});else{const t=this.springs;Ha(za(e),(e=>t[e].pause()))}return this}resume(e){if(Pa.und(e))this.start({pause:!1});else{const t=this.springs;Ha(za(e),(e=>t[e].resume()))}return this}each(e){Ra(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,a=this._changed.size>0;(n&&!this._started||a&&!this._started)&&(this._started=!0,Va(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,o=a||i&&r.size?this.get():null;a&&t.size&&Va(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),i&&(this._started=!1,Va(r,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}wa.onFrame(this._onFrame)}}function Cs(e,t){return Promise.all(t.map((t=>Ss(e,t)))).then((t=>Zo(e,t)))}async function Ss(e,t,r){const{keys:n,to:a,from:i,loop:o,onRest:s,onResolve:l}=t,c=Pa.obj(t.default)&&t.default;o&&(t.loop=!1),!1===a&&(t.to=null),!1===i&&(t.from=null);const d=Pa.arr(a)||Pa.fun(a)?a:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Ha(ws,(r=>{const n=t[r];if(Pa.fun(n)){const a=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=a.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):a.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Wa(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),p=!0===t.cancel||!0===Ao(t,"cancel");(d||p&&u.asyncId)&&h.push(qo(++e._lastAsyncId,{props:t,state:u,actions:{pause:Na,resume:Na,start(t,r){p?(Jo(u,e._lastAsyncId),r(Xo(e))):(t.onRest=s,r(Ko(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const f=Zo(e,await Promise.all(h));if(o&&f.finished&&(!r||!f.noop)){const r=ps(t,o,a);if(r)return Ms(e,[r]),Ss(e,r,!0)}return l&&wa.batchedUpdates((()=>l(f,e,e.item))),f}function ks(e,t){const r=Fo({},e.springs);return t&&Ha(za(t),(e=>{Pa.und(e.keys)&&(e=fs(e)),Pa.obj(e.to)||(e=Fo({},e,{to:void 0})),_s(r,e,(e=>Ds(e)))})),Os(e,r),r}function Os(e,t){Ra(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,zi(t,e))}))}function Ds(e,t){const r=new us;return r.key=e,t&&zi(r,t),r}function _s(e,t,r){t.keys&&Ha(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Ms(e,t){Ha(t,(t=>{_s(e.springs,t,(t=>Ds(t,e)))}))}const Fs=["children"],js=e=>{let{children:t}=e,r=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,Fs);const n=v(Bs),i=r.pause||!!n.pause,c=r.immediate||!!n.immediate;r=function(e,t){const[r]=o((()=>({inputs:t,result:e()}))),n=s(),a=n.current;let i=a;i?Boolean(t&&i.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,i.inputs))||(i={inputs:t,result:e()}):i=r;return l((()=>{n.current=i,a==r&&(r.inputs=r.result=void 0)}),[i]),i.result}((()=>({pause:i,immediate:c})),[i,c]);const{Provider:d}=Bs;return a.createElement(d,{value:r},t)},Bs=(Es=js,As={},Object.assign(Es,a.createContext(As)),Es.Provider._context=Es,Es.Consumer._context=Es,Es);var Es,As;js.Provider=Bs.Provider,js.Consumer=Bs.Consumer;const Is=()=>{const e=[],t=function(t){ao(`${to}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Ha(e,((e,a)=>{if(Pa.und(t))n.push(e.start());else{const i=r(t,e,a);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Ha(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Ha(e,(e=>e.resume(...arguments))),this},t.set=function(t){Ha(e,(e=>e.set(t)))},t.start=function(t){const r=[];return Ha(e,((e,n)=>{if(Pa.und(t))r.push(e.start());else{const a=this._getProps(t,e,n);a&&r.push(e.start(a))}})),r},t.stop=function(){return Ha(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Ha(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Pa.fun(e)?e(r,t):e};return t._getProps=r,t};function Ts(e,t){const r=Pa.fun(e),[[n],a]=function(e,t,r){const n=Pa.fun(t)&&t;n&&!r&&(r=[]);const a=y((()=>n||3==arguments.length?Is():void 0),[]),i=s(0),o=lo(),l=y((()=>({ctrls:[],queue:[],flush(e,t){const r=ks(e,t);return i.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Cs(e,t):new Promise((n=>{Os(e,r),l.queue.push((()=>{n(Cs(e,t))})),o()}))}})),[]),c=s([...l.ctrls]),d=[],u=ho(e)||0;function h(e,r){for(let a=e;a<r;a++){const e=c.current[a]||(c.current[a]=new xs(null,l.flush)),r=n?n(a,e):t[a];r&&(d[a]=ms(r))}}y((()=>{Ha(c.current.slice(e,u),(e=>{!function(e,t){var r;null==(r=e.ref)||r.delete(e),null==t||t.delete(e)}(e,a),e.stop(!0)})),c.current.length=e,h(u,e)}),[e]),y((()=>{h(0,Math.min(u,e))}),r);const p=c.current.map(((e,t)=>ks(e,d[t]))),f=v(js),m=ho(f),g=f!==m&&function(e){for(const t in e)return!0;return!1}(f);oo((()=>{i.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Ha(e,(e=>e()))),Ha(c.current,((e,t)=>{null==a||a.add(e),g&&e.start({default:f});const r=d[t];r&&(function(e,t){var r;t&&e.ref!==t&&(null==(r=e.ref)||r.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),co((()=>()=>{Ha(l.ctrls,(e=>e.stop(!0)))}));const b=p.map((e=>Fo({},e)));return a?[b,a]:b}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,a]:n}let Ns;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Ns||(Ns={}));class Ps extends as{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=ki(...t);const r=this._get(),n=So(r);mo(this,n.create(r))}advance(e){const t=this._get();La(t,this.get())||(fo(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Hs(this._active)&&Rs(this)}_get(){const e=Pa.arr(this.source)?this.source.map(Ni):za(Ni(this.source));return this.calc(...e)}_start(){this.idle&&!Hs(this._active)&&(this.idle=!1,Ha(go(this),(e=>{e.done=!1})),Xa.skipAnimation?(wa.batchedUpdates((()=>this.advance())),Rs(this)):ri.start(this))}_attach(){let e=1;Ha(za(this.source),(t=>{Ti(t)&&zi(t,this),rs(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Ha(za(this.source),(e=>{Ti(e)&&Vi(e,this)})),this._active.clear(),Rs(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=za(this.source).reduce(((e,t)=>Math.max(e,(rs(t)?t.priority:0)+1)),0))}}function Ls(e){return!1!==e.idle}function Hs(e){return!e.size||Array.from(e).every(Ls)}function Rs(e){e.idle||(e.idle=!0,Ha(go(e),(e=>{e.done=!0})),Li(e,{type:"idle",parent:e}))}function zs(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}Xa.assign({createStringInterpolator:eo,to:(e,t)=>new Ps(e,t)});const Vs=["style","children","scrollTop","scrollLeft","viewBox"],Ws=/^--/;function Ys(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Ws.test(e)||qs.hasOwnProperty(e)&&qs[e]?(""+t).trim():t+"px"}const Us={};let qs={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Zs=["Webkit","Ms","Moz","O"];qs=Object.keys(qs).reduce(((e,t)=>(Zs.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),qs);const Qs=["x","y","z"],Gs=/^(matrix|translate|scale|rotate|skew)/,Xs=/^(translate)/,Ks=/^(rotate|skew)/,Js=(e,t)=>Pa.num(e)&&0!==e?e+t:e,el=(e,t)=>Pa.arr(e)?e.every((e=>el(e,t))):Pa.num(e)?e===t:parseFloat(e)===t;class tl extends $o{constructor(e){let{x:t,y:r,z:n}=e,a=zs(e,Qs);const i=[],o=[];(t||r||n)&&(i.push([t||0,r||0,n||0]),o.push((e=>[`translate3d(${e.map((e=>Js(e,"px"))).join(",")})`,el(e,0)]))),Ra(a,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(Gs.test(t)){if(delete a[t],Pa.und(e))return;const r=Xs.test(t)?"px":Ks.test(t)?"deg":"";i.push(za(e)),o.push("rotate3d"===t?([e,t,n,a])=>[`rotate3d(${e},${t},${n},${Js(a,r)})`,el(a,0)]:e=>[`${t}(${e.map((e=>Js(e,r))).join(",")})`,el(e,t.startsWith("scale")?1:0)])}})),i.length&&(a.transform=new rl(i,o)),super(a)}}class rl extends Hi{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Ha(this.inputs,((r,n)=>{const a=Ni(r[0]),[i,o]=this.transforms[n](Pa.arr(a)?a:r.map(Ni));e+=" "+i,t=t&&o})),t?"none":e}observerAdded(e){1==e&&Ha(this.inputs,(e=>Ha(e,(e=>Ti(e)&&zi(e,this)))))}observerRemoved(e){0==e&&Ha(this.inputs,(e=>Ha(e,(e=>Ti(e)&&Vi(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Li(this,e)}}const nl=["scrollTop","scrollLeft"];Xa.assign({batchedUpdates:O,createStringInterpolator:eo,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const al=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new $o(e)),getComponentProps:n=(e=>e)}={})=>{const a={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=Mo(e)||"Anonymous";return(e=Pa.str(e)?i[e]||(i[e]=Oo(e,a)):e[_o]||(e[_o]=Oo(e,a))).displayName=`Animated(${t})`,e};return Ra(e,((t,r)=>{Pa.arr(e)&&(r=Mo(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,n=t,{style:a,children:i,scrollTop:o,scrollLeft:s,viewBox:l}=n,c=zs(n,Vs),d=Object.values(c),u=Object.keys(c).map((t=>r||e.hasAttribute(t)?t:Us[t]||(Us[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(let t in a)if(a.hasOwnProperty(t)){const r=Ys(t,a[t]);Ws.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,d[r])})),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new tl(e),getComponentProps:e=>zs(e,nl)}),il=al.animated,ol=$(il.div)`
    position: absolute;
    top: calc(100% + 0.5rem);
    left: -1px;
    width: calc(100% + 2px);
    max-width: 41rem;
    background: ${Or.Neutral[8]};
    overflow: hidden;
    z-index: 1;
`;var sl={exports:{}};sl.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},v=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:v,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),a=r%60;return(t<=0?"+":"-")+v(n,2,"0")+":"+v(a,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),a=t.clone().add(n,c),i=r-a<0,o=t.clone().add(n+(i?-1:1),c);return+(-(n+(r-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:o,m:i,s:a,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=g;var $=function(e){return e instanceof k},x=function e(t,r,n){var a;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(a=i),r&&(w[i]=r,a=i);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=t.name;w[s]=t,a=s}return!n&&a&&(b=a),a||!n&&b},C=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},S=y;S.l=x,S.i=$,S.w=function(e,t){return C(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function g(e){this.$L=x(e.locale,null,!0),this.parse(e)}var v=g.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(f);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return S},v.isValid=function(){return!(this.$d.toString()===p)},v.isSame=function(e,t){var r=C(e);return this.startOf(t)<=r&&r<=this.endOf(t)},v.isAfter=function(e,t){return C(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<C(e)},v.$g=function(e,t,r){return S.u(e)?this[t]:this.set(r,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var r=this,n=!!S.u(t)||t,d=S.p(e),p=function(e,t){var a=S.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?a:a.endOf(s)},f=function(e,t){return S.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},m=this.$W,g=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case u:return n?p(1,0):p(31,11);case c:return n?p(1,g):p(0,g+1);case l:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return p(n?v-w:v+(6-w),g);case s:case h:return f(y+"Hours",0);case o:return f(y+"Minutes",1);case i:return f(y+"Seconds",2);case a:return f(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var r,l=S.p(e),d="set"+(this.$u?"UTC":""),p=(r={},r[s]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[o]=d+"Hours",r[i]=d+"Minutes",r[a]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],f=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var m=this.clone().set(h,1);m.$d[p](f),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[S.p(e)]()},v.add=function(n,d){var h,p=this;n=Number(n);var f=S.p(d),m=function(e){var t=C(p);return S.w(t.date(t.date()+Math.round(e*n)),p)};if(f===c)return this.set(c,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===s)return m(1);if(f===l)return m(7);var g=(h={},h[i]=t,h[o]=r,h[a]=e,h)[f]||1,v=this.$d.getTime()+n*g;return S.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||p;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=S.z(this),i=this.$H,o=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=function(e,r,a,i){return e&&(e[r]||e(t,n))||a[r].slice(0,i)},u=function(e){return S.s(i%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:S.s(s+1,2,"0"),MMM:d(r.monthsShort,s,c,3),MMMM:d(c,s),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,l,2),ddd:d(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:S.s(i,2,"0"),h:u(1),hh:u(2),a:h(i,o,!0),A:h(i,o,!1),m:String(o),mm:S.s(o,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:a};return n.replace(m,(function(e,t){return t||f[e]||a.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,h,p){var f,m=S.p(h),g=C(n),v=(g.utcOffset()-this.utcOffset())*t,y=this-g,b=S.m(this,g);return b=(f={},f[u]=b/12,f[c]=b,f[d]=b/3,f[l]=(y-v)/6048e5,f[s]=(y-v)/864e5,f[o]=y/r,f[i]=y/t,f[a]=y/e,f)[m]||y,p?b:S.a(b)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return w[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=x(e,t,!0);return n&&(r.$L=n),r},v.clone=function(){return S.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),O=k.prototype;return C.prototype=O,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),C.extend=function(e,t){return e.$i||(e(t,k,C),e.$i=!0),C},C.locale=x,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=w[b],C.Ls=w,C.p={},C}();var ll=sl.exports,cl={exports:{}};cl.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,t))>-1){r=a>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[a,function(e){this.afternoon=d(e,!1)}],a:[a,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[a,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[a,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[a,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,a;n=r,a=i&&i.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],h=d&&d[0],p=d&&d[1];o[l]=p?{regex:h,parser:p}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var a=o[r];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,c=e.slice(n),d=i.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,a=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,p=new Date,f=o||(a||i?1:p.getDate()),m=a||p.getFullYear(),g=0;a&&!i||(g=i>0?i-1:p.getMonth());var v=s||0,y=l||0,b=c||0,w=d||0;return u?new Date(Date.UTC(m,g,f,v,y,b,w+60*u.offset*1e3)):r?new Date(Date.UTC(m,g,f,v,y,b,w)):new Date(m,g,f,v,y,b,w)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var p=s.length,f=1;f<=p;f+=1){o[1]=s[f-1];var m=r.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}f===p&&(this.$d=new Date(""))}else a.call(this,e)}}}();var dl=cl.exports,ul={exports:{}};ul.exports=function(){var e={year:0,month:1,day:2,hour:3,minute:4,second:5},t={};return function(r,n,a){var i,o=function(e,r,n){void 0===n&&(n={});var a=new Date(e),i=function(e,r){void 0===r&&(r={});var n=r.timeZoneName||"short",a=e+"|"+n,i=t[a];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),t[a]=i),i}(r,n);return i.formatToParts(a)},s=function(t,r){for(var n=o(t,r),i=[],s=0;s<n.length;s+=1){var l=n[s],c=l.type,d=l.value,u=e[c];u>=0&&(i[u]=parseInt(d,10))}var h=i[3],p=24===h?0:h,f=i[0]+"-"+i[1]+"-"+i[2]+" "+p+":"+i[4]+":"+i[5]+":000",m=+t;return(a.utc(f).valueOf()-(m-=m%1e3))/6e4},l=n.prototype;l.tz=function(e,t){void 0===e&&(e=i);var r=this.utcOffset(),n=this.toDate(),o=n.toLocaleString("en-US",{timeZone:e}),s=Math.round((n-new Date(o))/1e3/60),l=a(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(n.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(r-c,"minute")}return l.$x.$timezone=e,l},l.offsetName=function(e){var t=this.$x.$timezone||a.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var c=l.startOf;l.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return c.call(this,e,t);var r=a(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return c.call(r,e,t).tz(this.$x.$timezone,!0)},a.tz=function(e,t,r){var n=r&&t,o=r||t||i,l=s(+a(),o);if("string"!=typeof e)return a(e).tz(o);var c=function(e,t,r){var n=e-60*t*1e3,a=s(n,r);if(t===a)return[n,t];var i=s(n-=60*(a-t)*1e3,r);return a===i?[n,a]:[e-60*Math.min(a,i)*1e3,Math.max(a,i)]}(a.utc(e,n).valueOf(),l,o),d=c[0],u=c[1],h=a(d).utcOffset(u);return h.$x.$timezone=o,h},a.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},a.tz.setDefault=function(e){i=e}}}();var hl=ul.exports,pl={exports:{}};pl.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,a){var i=r(e),o=r(t),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var fl=pl.exports,ml={exports:{}};ml.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var gl=ml.exports,vl={exports:{}};vl.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var yl,bl=vl.exports;ll.extend(fl),ll.extend(gl),ll.extend(bl),ll.extend(dl),ll.extend(hl),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=ll(t).startOf("week");return wl(r).map((e=>$l(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return $l(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(ll(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+ll(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=ll(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")}}(yl||(yl={}));const wl=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},$l=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t};var xl,Cl={};Object.defineProperty(Cl,"__esModule",{value:!0});var Sl=e;const kl=e=>Sl.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Sl.jsx("path",{d:"M2.62611 5.81312C2.84811 5.59112 3.10478 5.48012 3.39611 5.48012C3.68811 5.48012 3.94511 5.59112 4.16711 5.81312L10.1881 11.8341L16.2301 5.79212C16.4381 5.58412 16.6881 5.48012 16.9801 5.48012C17.2714 5.48012 17.5281 5.59112 17.7501 5.81312C17.9588 6.02179 18.0631 6.27545 18.0631 6.57412C18.0631 6.87279 17.9588 7.12612 17.7501 7.33412L10.8131 14.2721C10.7158 14.3688 10.6151 14.4381 10.5111 14.4801C10.4071 14.5215 10.2994 14.5421 10.1881 14.5421C10.0768 14.5421 9.96911 14.5215 9.86511 14.4801C9.76111 14.4381 9.66044 14.3688 9.56311 14.2721L2.60511 7.31312C2.38244 7.09112 2.27811 6.83779 2.29211 6.55312C2.30611 6.26845 2.41744 6.02179 2.62611 5.81312Z",fill:"currentColor"})});kl.displayName="ChevronDownIcon",xl=Cl.ChevronDownIcon=kl;var Ol,Dl={};Object.defineProperty(Dl,"__esModule",{value:!0});var _l=e;const Ml=e=>_l.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:_l.jsx("path",{d:"M12.521 17.562L5.58301 10.625C5.48635 10.5277 5.41701 10.427 5.37501 10.323C5.33301 10.219 5.31201 10.1113 5.31201 10C5.31201 9.88867 5.33301 9.781 5.37501 9.677C5.41701 9.573 5.48635 9.47234 5.58301 9.375L12.542 2.417C12.75 2.20834 13.0033 2.104 13.302 2.104C13.6007 2.104 13.854 2.21534 14.062 2.438C14.2847 2.646 14.389 2.90267 14.375 3.208C14.361 3.514 14.25 3.771 14.042 3.979L8.02101 10L14.062 16.042C14.2567 16.236 14.354 16.4893 14.354 16.802C14.354 17.1147 14.2567 17.368 14.062 17.562C13.854 17.7707 13.5973 17.875 13.292 17.875C12.986 17.875 12.729 17.7707 12.521 17.562Z",fill:"currentColor"})});Ml.displayName="ChevronLeftIcon",Ol=Dl.ChevronLeftIcon=Ml;var Fl,jl={};Object.defineProperty(jl,"__esModule",{value:!0});var Bl=e;const El=e=>Bl.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Bl.jsx("path",{d:"M5.979 17.562C5.757 17.34 5.646 17.0833 5.646 16.792C5.646 16.5 5.757 16.243 5.979 16.021L12 10L5.958 3.958C5.75 3.75 5.646 3.5 5.646 3.208C5.646 2.91667 5.757 2.66 5.979 2.438C6.18766 2.22933 6.44133 2.125 6.74 2.125C7.03866 2.125 7.292 2.22933 7.5 2.438L14.438 9.375C14.5347 9.47233 14.604 9.573 14.646 9.677C14.6873 9.781 14.708 9.88867 14.708 10C14.708 10.1113 14.6873 10.219 14.646 10.323C14.604 10.427 14.5347 10.5277 14.438 10.625L7.479 17.583C7.257 17.8057 7.00366 17.91 6.719 17.896C6.43433 17.882 6.18766 17.7707 5.979 17.562Z",fill:"currentColor"})});El.displayName="ChevronRightIcon",Fl=jl.ChevronRightIcon=El;const Al=$.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Il=C`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Tl=$.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Or.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Il} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Nl=$(Tl)`
    animation-delay: -0.45s;
`,Pl=$(Tl)`
    animation-delay: -0.3s;
`,Ll=$(Tl)`
    animation-delay: -0.15s;
`,Hl=$.button`
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
                    background-color: ${Or.Neutral[8](e)};
                    border: 1px solid ${Or.Primary(e)};

                    span {
                        color: ${Or.Primary(e)};
                    }
                `;case"light":return x`
                    background-color: ${Or.Neutral[8](e)};
                    border: 1px solid ${Or.Neutral[5](e)};

                    span {
                        color: ${Or.Primary(e)};
                    }
                `;case"disabled":return x`
                    background-color: ${Or.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Or.Neutral[3](e)};
                    }
                `;case"link":return x`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Or.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Or.Secondary};
                        }
                    }
                `;default:return x`
                    background-color: ${Or.Primary(e)};
                    border: 1px solid transparent;

                    ${Qr.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Or.Neutral[8](e)};
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
`,Rl=$((({color:e,className:n,size:a=18})=>t(Al,{className:n,$size:a,$color:e,children:[r(Tl,{id:"inner1",$size:a-2,$borderWidth:2}),r(Nl,{id:"inner2",$size:a-2,$borderWidth:2}),r(Pl,{id:"inner3",$size:a-2,$borderWidth:2}),r(Ll,{id:"inner4",$size:a-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Or.Primary(e);break;case"disabled":t=Or.Neutral[3](e);break;default:t=Or.Neutral[8](e)}return x`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,zl={Default:i.forwardRef(((e,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",...l}=e,c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default"};return t(Hl,{ref:n,"data-testid":l["data-testid"]||"button",disabled:i,...c,...l,children:[o&&r(Rl,{...c}),r("span",{children:a})]})})),Small:i.forwardRef(((e,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",...l}=e,c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small"};return t(Hl,{ref:n,"data-testid":l["data-testid"]||"button",disabled:i,...c,...l,children:[o&&r(Rl,{...c,size:16}),r("span",{children:a})]})}))},Vl=x`
    color: ${Or.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,Wl=$(Ol)`
    ${Vl}
`,Yl=$(Fl)`
    ${Vl}
`,Ul=$(xl)`
    ${Vl}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,ql=$.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Zl=$.div`
    display: flex;
    flex: 1;
    position: relative;
`,Ql=$.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Or.Neutral[8]};

    ${e=>{if(!e.$visible)return x`
                display: none;
            `}}
`,Gl=$.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,Xl=$.div`
    display: flex;
`,Kl=$.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?x`
                display: none;
            `:e.$expanded?x`
                ${Ul} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,Jl=$.p`
    ${Ir("H5","regular")}
`,ec=$.div`
    display: flex;
`,tc=$(an)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,rc=$.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,nc=$(zl.Small)`
    flex: 1;
`,ac=$.div`
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
                    gap: 0.5rem 1rem;
                `}}}
`,ic=$.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?x`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Or.Shadow.Accent};
                    border: 1px solid ${Or.Accent.Light[1]};
                }
            `:e.$disabledDisplay?x`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return x`
                    background-color: ${Or.Accent.Light[6](e)};
                `;case"selected-month":return x`
                    background-color: ${Or.Accent.Light[5](e)};
                    border: 1px solid ${Or.Primary(e)};
                `}}}
`,oc=$(Nr.H5)`
    ${e=>{if(e.$disabledDisplay)return x`
                color: ${Or.Neutral[4]};
            `;switch(e.$variant){case"current-month":return x`
                    color: ${Or.Neutral[3](e)};
                `;case"selected-month":return x`
                    ${Ir("H5","semibold")}
                    color: ${Or.Primary(e)};
                `}}}
`,sc=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:i,type:o,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:d,onMonthSelect:u})=>{const h=y((()=>yl.generateMonths(ll(e))),[e]),p=e=>{const r="start"===t&&a&&e.isAfter(a,"month")&&s,i="end"===t&&n&&e.isBefore(n,"month")&&s;return r||i},f=e=>{const t=e.format("MMMM"),r=(n=e,!yl.isWithinRange(n,l?ll(l):void 0,c?ll(c):void 0,"month"));var n;const a=i.isSame(e,"month")?"selected-month":ll().isSame(e,"month")?"current-month":"default";return{disabledDisplay:r||p(e),interactive:!r||d,month:t,variant:a}};return h.length?r(ac,{$type:o,children:h.map((e=>{const{disabledDisplay:t,interactive:n,variant:a,month:i}=f(e);return r(ic,{$variant:a,$disabledDisplay:t,$interactive:n,onClick:()=>((e,t)=>{t||u(e)})(e,!n),children:r(oc,{weight:"regular",$variant:a,$disabledDisplay:t,children:i})},i)}))}):null},lc=$.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return x`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return x`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,cc=$.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?x`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Or.Shadow.Accent};
                    border: 1px solid ${Or.Accent.Light[1]};
                }
            `:e.$disabledDisplay?x`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return x`
                    background: ${Or.Accent.Light[6](e)};
                `;case"selected-year":return x`
                    background: ${Or.Accent.Light[5](e)};
                    border: 1px solid ${Or.Primary(e)};
                `}}};
`,dc=$(Nr.H5)`
    ${e=>{if(e.$disabledDisplay)return x`
                color: ${Or.Neutral[4]};
            `;switch(e.$variant){case"current-year":return x`
                    color: ${Or.Neutral[3](e)};
                `;case"selected-year":return x`
                    ${Ir("H5","semibold")}
                    color: ${Or.Primary(e)};
                `;case"other-decade":return x`
                    color: ${Or.Neutral[4](e)};
                `}}}
`,uc=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:i,type:o,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:d,onYearSelect:u})=>{const h=y((()=>yl.generateDecadeOfYears(ll(e))),[e]),p=e=>{const r="start"===t&&a&&e.isAfter(a,"year")&&s,i="end"===t&&n&&e.isBefore(n,"year")&&s;return r||i},f=e=>{const t=[0,11].includes(h.indexOf(e)),r=e.year(),n=(a=e,!yl.isWithinRange(a,l?ll(l):void 0,c?ll(c):void 0,"year"));var a;const o=t?"other-decade":i.isSame(e,"year")?"selected-year":ll().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||p(e),interactive:!n||d,year:r,variant:o}};return h.length?r(lc,{$type:o,children:h.map((e=>{const{disabledDisplay:t,interactive:n,variant:a,year:i}=f(e);return r(cc,{$variant:a,$disabledDisplay:t,$interactive:n,onClick:()=>((e,t)=>{t||u(e)})(e,!n),children:r(dc,{weight:"regular",$variant:a,$disabledDisplay:t,$interactive:n,children:i})},i)}))}):null},hc=i.forwardRef((({children:e,initialCalendarDate:a,type:i,minDate:c,maxDate:d,currentFocus:u,selectedStartDate:h,selectedEndDate:p,selectWithinRange:f,dynamicHeight:m=!1,allowDisabledSelection:g,onCalendarDateChange:v,withButton:y,doneButtonDisabled:w,onDismiss:$,showNavigationHeader:x=!0,getLeftArrowDate:C,getRightArrowDate:S,isLeftArrowDisabled:k,isRightArrowDisabled:O,getMonthHeaderLabel:D,getYearHeaderLabel:_,...M},F)=>{const[j,B]=o(ll(a)),[E,A]=o(ll(a)),[I,T]=o("default"),N=s(null),P=s(null),L=s();b(F,(()=>({defaultView(){T("default")},resetView(){const e=ll(a);B(e),A(e),T("default")},setCalendarDate(e){const t=e?ll(e):ll();B(t),A(t)}}))),l((()=>{const e=a?ll(a):ll();B(e),A(e)}),[a]),l((()=>{U(E)}),[E]);const H=()=>{"month-options"!==I?(T("month-options"),L.current.focus()):(T("default"),B(E))},R=()=>{"default"!==I?(T("default"),B(E)):T("year-options")},z=()=>{L.current.focus();const e=C?C(j):j.subtract(1,"month");switch(I){case"default":A(e),B(e);break;case"month-options":B((e=>e.subtract(1,"year")));break;case"year-options":B((e=>e.subtract(10,"year")))}},V=()=>{L.current.focus();const e=S?S(j):j.add(1,"month");switch(I){case"default":A(e),B(e);break;case"month-options":B((e=>e.add(1,"year")));break;case"year-options":B((e=>e.add(10,"year")))}},W=e=>{B(e),A(e)},Y=()=>{B(ll(a)),A(ll(a)),"default"===I?q("reset"):T("default")},U=e=>{v&&v(e)},q=e=>{$&&$(e)},Z=()=>{if(!c||g)return!1;const e=ll(c);return"month-options"===I?!yl.isPreviousYearWithinRange(j,e):"year-options"===I?!yl.isPreviousDecadeWithinRange(j,e):k?k(j):!yl.isPreviousMonthWithinRange(j,e)},Q=()=>{if(!d||g)return!1;const e=ll(d);return"month-options"===I?!yl.isNextYearWithinRange(j,e):"year-options"===I?!yl.isNextDecadeWithinRange(j,e):O?O(j):!yl.isNextMonthWithinRange(j,e)},G=()=>{if("year-options"===I){const{beginDecade:e,endDecade:t}=yl.getStartEndDecade(j);return`${e} to ${t}`}return _?_(j):ll(j).format("YYYY")},X=()=>{const e=D?D(j):ll(j).format("MMM");return t(n,{children:[t(Kl,{type:"button",tabIndex:-1,$expanded:"month-options"===I,$visible:"default"===I,id:"month-dropdown",onClick:H,children:[r(Jl,{children:e}),r(Ul,{})]}),t(Kl,{type:"button",tabIndex:-1,$expanded:"default"!==I,id:"year-dropdown",onClick:R,children:[r(Jl,{children:G()}),r(Ul,{})]})]})},K=()=>{switch(I){case"month-options":return r(sc,{type:i,calendarDate:j,currentFocus:u,minDate:c,maxDate:d,selectedStartDate:h,selectedEndDate:p,viewCalendarDate:E,isNewSelection:f,onMonthSelect:W,allowDisabledSelection:g});case"year-options":return r(uc,{type:i,calendarDate:j,currentFocus:u,minDate:c,maxDate:d,selectedStartDate:h,selectedEndDate:p,viewCalendarDate:E,isNewSelection:f,onYearSelect:W,allowDisabledSelection:g});default:return null}};return t(ql,{ref:L,tabIndex:-1,"data-id":"calendar-container",...M,children:[x&&t(Gl,{"data-id":"calendar-header",children:[r(Xl,{children:X()}),t(ec,{children:[r(tc,{"data-testid":"left-arrow-btn",disabled:Z(),focusHighlight:!1,tabIndex:-1,onClick:z,children:r(Wl,{})}),r(tc,{"data-testid":"right-arrow-btn",disabled:Q(),focusHighlight:!1,tabIndex:-1,onClick:V,children:r(Yl,{})})]})]}),r(Zl,{children:(()=>{const a="function"==typeof e?e({calendarDate:E}):e;return t(n,m?{children:["default"===I&&a,K()]}:{children:[a,r(Ql,{$visible:"default"!==I,children:K()})]})})()}),(()=>{if(!y)return;const e=!!("default"===I)&&w;return t(rc,{children:[r(nc,{ref:P,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Y,children:"Cancel"}),r(nc,{"data-testid":"done-button",ref:N,type:"button",onClick:()=>{e||(B(E),"default"===I?q("confirmed"):T("default"))},disabled:e,children:"Done"})]})})()]})})),pc=$.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,fc=$.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,mc=$.div`
    grid-column: 1 / -1;
    display: flex;
`,gc=$.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`,vc=$.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return x`
                    left: 0;
                `;case"right":return x`
                    right: 0;
                `}}}

    ${e=>{const{$selected:t}=e;if(t)return x`
                border-top: 1px solid ${Or.Accent.Light[4]};
                border-bottom: 1px solid ${Or.Accent.Light[4]};
                background-color: ${Or.Accent.Light[5]};
            `}}
    
    ${e=>{const{$hovered:t,$overlap:r}=e;return t?x`
                border-top: 1px dashed ${Or.Accent.Light[4]};
                border-bottom: 1px dashed ${Or.Accent.Light[4]};
                background-color: ${Or.Accent.Light[6]};
            `:r?x`
                background-color: ${Or.Accent.Light[4]};
            `:void 0}}
`,yc=$.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;

    ${e=>{const{$hovered:t,$selected:r}=e;return r?x`
                background: ${Or.Accent.Light[5]};
                border: 1px solid ${Or.Primary};
            `:t?x`
                box-shadow: 0px 0px 4px 1px ${Or.Shadow.Accent};
                border: 1px solid ${Or.Accent.Light[1]};
                background-color: ${Or.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:r}=e;return t?x`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${Or.Shadow.Accent};
                    border: 1px solid ${Or.Accent.Light[1]};
                    background-color: ${Or.Neutral[8]};
                }
            `:r?x`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:r,$variant:n}=e;return r?x`
                border: 1px solid ${Or.Accent.Light[1]};
                background: ${Or.Accent.Light[4]};

                :hover {
                    background: ${Or.Accent.Light[4]};
                }
            `:t?x`
                color: ${Or.Neutral[4]};
            `:"today"===n?x`
                    background: ${Or.Accent.Light[5]};
                `:void 0}}
`,bc=$(Nr.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:r,$variant:n}=e;if(t&&r)return x`
                ${Ir("H5","semibold")};
                color: ${Or.Accent.Light[2]};
            `;if(t)return x`
                color: ${Or.Neutral[4]};
            `;if(r)return x`
                ${Ir("H5","semibold")};
                color: ${Or.Primary};
            `;switch(n){case"other-month":return x`
                    color: ${Or.Neutral[4]};
                `;case"today":return x`
                    color: ${Or.Neutral[3]};
                `;case"default":return x`
                    color: ${Or.Neutral[1]};
                `}}}
`;ll.extend(fl);const wc=({calendarDate:e,currentFocus:n,disabledDates:a,selectedStartDate:i,selectedEndDate:s,onSelect:l,onHover:c,isNewSelection:d,minDate:u,maxDate:h,variant:p,allowDisabledSelection:f})=>{const m=y((()=>yl.generateDays(e)),[e]),[g,v]=o(""),b=()=>{v(""),c("")},w=(()=>{if(!g||"single"===p)return null;const e=ll(g);if(i&&s)if(e.isBefore(i)){if("start"===n)return"full-overlap-start";if("end"===n)return"reset-end"}else if(e.isAfter(s)){if("end"===n)return"full-overlap-end";if("start"===n)return"reset-start"}else if(e.isBetween(i,s,"day","[]")&&![i,s].includes(g)){if("start"===n)return"overlap-start";if("end"===n)return"overlap-end"}if(i&&!s){if(e.isAfter(i)&&"end"===n)return"hover-end"}else if(!i&&s&&e.isBefore(s)&&"start"===n)return"hover-start";return null})(),$=e=>{const t=e.format("YYYY-MM-DD"),r={},o={},l={},c={},p=(e=>{const t=yl.isWithinRange(e,u?ll(u):void 0,h?ll(h):void 0),r=a&&a.includes(e.format("YYYY-MM-DD"));return!t||r})(e),m=i&&s&&i===s;return!d&&["reset-start","reset-end"].includes(w)&&[i,s].includes(t)&&(l.$overlap=!0),(p||(e=>{const t="start"===n&&s&&e.isAfter(s)&&d,r="end"===n&&i&&e.isBefore(i)&&d;return t||r})(e))&&(l.$disabledDisplay=!0,c.$disabledDisplay=!0),l.$interactive=!p||f,[i,s].includes(t)&&(l.$selected=!0,c.$selected=!0),i&&s&&!m&&e.isBetween(i,s,"day","[]")&&(c.$selected=!0,e.isSame(i)?o.$selected=!0:e.isSame(s)?r.$selected=!0:(r.$selected=!0,o.$selected=!0)),"hover-start"===w&&e.isBetween(s,g,"day","[]")&&(c.$selected=!0,s===t?r.$hovered=!0:g===t?(o.$hovered=!0,l.$hovered=!0):(r.$hovered=!0,o.$hovered=!0)),"hover-end"===w&&e.isBetween(i,g,"day","[]")&&(c.$selected=!0,i===t?o.$hovered=!0:g===t?(r.$hovered=!0,l.$hovered=!0):(r.$hovered=!0,o.$hovered=!0)),"overlap-start"===w&&e.isBetween(s,g,"day","[]")&&(g===t?(o.$overlap=!0,l.$overlap=!0):s===t?(r.$overlap=!0,l.$overlap=!0,l.$hovered=!0):(r.$overlap=!0,o.$overlap=!0)),"overlap-end"===w&&e.isBetween(i,g,"day","[]")&&(g===t?(r.$overlap=!0,l.$overlap=!0):i===t?(o.$overlap=!0,l.$overlap=!0,l.$hovered=!0):(r.$overlap=!0,o.$overlap=!0)),"full-overlap-start"===w&&e.isBetween(s,g,"day","[]")&&(i===t&&m?(r.$hovered=!0,l.$overlap=!0):i===t?(r.$hovered=!0,o.$overlap=!0,l.$overlap=!0):s===t?(r.$overlap=!0,l.$overlap=!0):e.isSame(g)?(o.$hovered=!0,c.$selected=!0,l.$hovered=!0):e.isBetween(i,g,"day","()")&&(r.$hovered=!0,o.$hovered=!0,c.$selected=!0)),"full-overlap-end"===w&&e.isBetween(i,g,"day","[]")&&(s===t&&m?(o.$hovered=!0,l.$overlap=!0):s===t?(r.$overlap=!0,o.$hovered=!0,l.$overlap=!0):i===t?(o.$overlap=!0,l.$overlap=!0):e.isSame(g)?(r.$hovered=!0,c.$selected=!0,l.$hovered=!0):e.isBetween(s,g,"day","()")&&(r.$hovered=!0,o.$hovered=!0,c.$selected=!0)),["full-overlap-end","full-overlap-start"].includes(w)&&e.isBetween(i,s,"day","()")&&(r.$overlap=!0,o.$overlap=!0),{styleLeftProps:r,styleRightProps:o,styleCircleProps:l,styleLabelProps:c}};return t(pc,{children:[m[0].map(((e,t)=>r(fc,{children:r(Nr.H6,{weight:"semibold",children:ll(e).format("ddd")})},`week-day-${t}`))),m.map(((n,a)=>r(mc,{onMouseLeave:b,children:n.map(((n,a)=>{const i=n.format("YYYY-MM-DD"),{variant:o}=(t=>({variant:e.month()!==t.month()?"other-month":ll().isSame(t,"day")?"today":"default"}))(n),{styleLeftProps:s,styleRightProps:d,styleCircleProps:u,styleLabelProps:h}=$(n);return t(gc,{children:[r(vc,{$position:"left",...s}),r(vc,{$position:"right",...d}),r(yc,{$variant:o,onClick:()=>((e,t)=>{t&&!f||l(e)})(n,!u.$interactive),onMouseEnter:()=>((e,t)=>{t&&!f||(v(e),c(e))})(i,!u.$interactive),...u,children:r(bc,{weight:h.$selected?"semibold":"regular",$variant:o,...h,children:n.format("D")})})]},`day-${a}`)}))},a)))]})},$c=$.div`
    width: 100%;
    padding: 1.5rem 2rem;

    ${e=>{if("input"===e.$type)return x`
                border: 1px solid ${Or.Neutral[5]};
                border-radius: 8px;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,xc=i.forwardRef((({disabledDates:e,onYearMonthDisplayChange:t,onSelect:n,onHover:a,onDismiss:i,value:o,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:h,maxDate:p,allowDisabledSelection:f,type:m="standalone",selectWithinRange:g=!0,initialCalendarDate:v},y)=>{const w=s(),$=s(void 0);b(y,(()=>({reset(){w.current.resetView()}})));const x=e=>{const t=e.format("YYYY-MM-DD");S(t)},C=e=>{k(e)},S=e=>{n&&n(e)},k=e=>{a&&a(e)},O=e=>{if(t){const r={month:e.month()+1,year:e.year()};t(r)}};return r($c,{$type:m,children:r(hc,{type:m,ref:w,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":e=!!o!=!!l}return e})(),onDismiss:i,minDate:h,maxDate:p,selectWithinRange:g,currentFocus:c,selectedStartDate:o,selectedEndDate:l,allowDisabledSelection:f,onCalendarDateChange:e=>{$.current&&$.current.isSame(e,"month")||O(e),$.current=e},initialCalendarDate:v,children:({calendarDate:t})=>r(wc,{calendarDate:t,currentFocus:c,disabledDates:e,selectedStartDate:o,selectedEndDate:l,variant:u,minDate:h,maxDate:p,isNewSelection:g,allowDisabledSelection:f,onSelect:x,onHover:C})})})})),Cc=i.forwardRef(((e,t)=>{const{isOpen:n,...a}=e,i=s(),o=ya(),c=Ts({height:n?o.height:0});return l((()=>{n&&i.current.reset()}),[n]),b(t,(()=>i.current)),r(ol,{style:c,children:r("div",{ref:o.ref,inert:n?void 0:"",children:r(xc,{ref:i,...a})})})})),Sc=[1,3,5,7,8,10,12],kc=[4,6,9,11];var Oc,Dc,_c;!function(e){e.clampDay=(t,r,n)=>{const a=parseInt(t),i=parseInt(r),o=parseInt(n);return 0==a?"1":Sc.includes(i)?Math.min(a,31).toString():kc.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=ll(e,r);return ll(t,r).diff(n,"minute")}}(Oc||(Oc={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Dc||(Dc={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n)=>{let a=0;t>r&&(a=Math.floor((t-r)/8));const i=n+a;if(i<e.length){const t=Math.floor(i/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(_c||(_c={}));const Mc=e=>{const[t,r]=o(e),n=s(e),a=g((e=>{n.current=e,r(e)}),[]);return[t,a,n]},Fc={collections:{base:{InputBoxShadow:x`
        inset 0 0 6px 1px ${Or.Shadow.Accent}
    `,InputErrorBoxShadow:x`
        inset 0 0 6px 1px ${Or.Shadow.Red}
    `,ElevationBoxShadow:x`
      0px 2px 8px ${Or.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:x`
        inset 0 0 6px 1px ${Or.Shadow.Accent}
    `,InputErrorBoxShadow:x`
        inset 0 0 6px 1px ${Or.Shadow.Red}
    `,ElevationBoxShadow:x`
      0px 2px 8px ${Or.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},jc=e=>t=>{const r=t.theme,n=xr(Fc,r[Cr.designTokenScheme]);return r.options?.designToken?$r(n,e,r.options.designToken):$r(n,e)},Bc=jc("InputBoxShadow"),Ec=jc("InputErrorBoxShadow"),Ac=(jc("ElevationBoxShadow"),jc("Table.Header"),jc("Table.Cell.Primary"),jc("Table.Cell.Secondary"),jc("Table.Cell.Selected"),jc("Table.Cell.Hover"),$.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Or.Neutral[5]};
    border-radius: 4px;
    background: ${Or.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Or.Accent.Light[1]};
        box-shadow: ${Bc};
    }

    ${e=>e.$readOnly?x`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$disabled?x`
                background: ${Or.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Or.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?x`
                border: 1px solid ${Or.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Or.Validation.Red.Border};
                    box-shadow: ${Ec};
                }
            `:void 0}
`),Ic=$.input`
    ${Ir("Body","regular")}
    color: ${Or.Neutral[1]};
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
        color: ${Or.Neutral[3]};
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
`,Tc=$.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Nc=$.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return x`
                ${Pc}, ${zc} {
                    color: ${Or.Neutral[4]};
                }
            `}}
`,Pc=$(Ic)`
    background: transparent;
    text-align: center;
`,Lc=$(Pc)`
    width: 2rem;
    margin-right: 0.25rem;
`,Hc=$(Pc)`
    width: 2.5rem;
`,Rc=$(Pc)`
    width: 3rem;
    margin-left: 0.25rem;
`,zc=$(Nr.Body)`
    ${e=>{if(e.$inactive)return x`
                color: ${Or.Neutral[3](e)};
            `}}
`,Vc=$.div`
    ${Ir("Body","regular")}
    background-color: ${Or.Neutral[8]};
    color: ${Or.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?x`
                background-color: ${Or.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$hide?x`
                display: none;
            `:void 0}
`;ll.extend(dl);const Wc=i.forwardRef((({disabled:e,readOnly:n,names:a,value:i,focused:c,hoverValue:d,placeholder:u,label:h,onChange:p,onFocus:f,onBlur:m},g)=>{const[v,y,w]=Mc(""),[$,x,C]=Mc(""),[S,k,O]=Mc(""),[D,_]=o("none"),[M,F]=o(!1),j=s(null),B=s(null),E=s(null),A=s(null),[I,T,N]=z(d);l((()=>{const[e="",t="",r=""]=z(i);y(e),x(t),k(r)}),[i]),l((()=>{c||_("none"),c&&(F(!0),j.current.contains(document.activeElement)||B.current.focus())}),[c]),b(g,(()=>({ref:j,resetPlaceholder(){F(!1)},resetInput(){const[e="",t="",r=""]=z(i);y(e),x(t),k(r)}})),[i]);const P=e=>{e.target.select();const t=e.target.name;_(t)},L=e=>{const[t,r,n]=a,i={[t]:w.current,[r]:C.current,[n]:O.current},o=e.target.name,s=i[o],l=o!==n?_c.padValue(s,!0):s;switch(o){case t:i[t]=l,y(l);break;case r:i[r]=l,x(l)}const c=`${i[n]}-${i[r]}-${i[t]}`,d=ll(c,"YYYY-MM-DD",!0).isValid(),u=!i[t]&&!i[r]&&!i[n];d&&s!==l&&p(c),j.current.contains(e.relatedTarget)||(_("none"),m?.(u||d))},H=e=>{if(d)return;const t=e.target.name,r=e.target.value.replace(/[^0-9]/g,""),n={day:v,month:$,year:S};switch(t){case a[0]:n.day=r,y(r),2===r.length&&E.current.focus();break;case a[1]:n.month=r,x(r),2===r.length&&A.current.focus();break;case a[2]:n.year=r,k(r)}if(!n.day&&!n.month&&!n.year)return void p("");const i=`${n.year}-${n.month}-${n.day}`;ll(i,"YYYY-MM-DD",!0).isValid()&&p(i)},R=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(D===a[1]&&0===$.length&&B.current.focus(),D===a[2]&&0===S.length&&E.current.focus())};function z(e){if(e){const t=ll(e,"YYYY-MM-DD");return[_c.padValue(t.date().toString()),_c.padValue((t.month()+1).toString()),t.year().toString()]}return[void 0,void 0,void 0]}return t(Tc,{role:"group","aria-label":h,onClick:()=>{e||n||(F(!0),j.current.contains(document.activeElement)||B.current.focus())},onFocus:()=>{e||n||(F(!0),c||f())},children:[t(Nc,{ref:j,$hover:!!d,children:[r(Lc,{ref:B,name:a[0],maxLength:2,value:I??v,onFocus:P,onBlur:L,onChange:H,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":`${a[0]}-input`,"aria-label":"day",disabled:e,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:D!==a[0]||n?"DD":""}),r(zc,{$inactive:0===v.length,children:"/"}),r(Hc,{ref:E,name:a[1],maxLength:2,value:T??$,onFocus:P,onBlur:L,onChange:H,onKeyDown:R,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":`${a[1]}-input`,"aria-label":"month",disabled:e,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:D!==a[1]||n?"MM":""}),r(zc,{$inactive:0===$.length,children:"/"}),r(Rc,{ref:A,name:a[2],maxLength:4,value:N??S,onFocus:P,onBlur:L,onChange:H,onKeyDown:R,type:"text",inputMode:"numeric",pattern:"[0-9]{4}","data-testid":`${a[2]}-input`,"aria-label":"year",disabled:e,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:D!==a[2]||n?"YYYY":""})]}),(()=>{if(!i&&!n&&u)return r(Vc,{$hide:M,$disabled:e,children:u})})()]})}));var Yc;ll.extend(fl),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:a}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!ll(e).isBefore(n,"day"))||!(!a||!ll(e).isAfter(a,"day")))}}(Yc||(Yc={}));const Uc=$(Ac)`
    height: 3rem;
`,qc=({minDate:e,maxDate:n,disabled:a,disabledDates:i,error:c,value:d,onChange:u,onBlur:h,onYearMonthDisplayChange:p,withButton:f=!0,readOnly:m,id:g,allowDisabledSelection:v,...y})=>{const[b,w]=o(d),[$,x]=o(d),[C,S]=o(void 0),[k,O]=o(!1),D=s(null),_=s(),M=s(),F=E.exports.useMediaQuery({maxWidth:A.mobileL}),j=f||F;l((()=>{w(d),x(d)}),[d]);const B=t=>{!v&&Yc.isDateDisabled(t,{disabledDates:i,minDate:e,maxDate:n})||(x(t),j||(I(t),w(t),t&&O(!1)))},I=e=>{u&&u(e)},T=()=>{h&&h()};return t(Uc,{ref:D,$disabled:a,$readOnly:m,$error:c,id:g,"data-testid":y["data-testid"],tabIndex:-1,onBlur:e=>{D&&!D.current.contains(e.relatedTarget)&&(M.current.resetInput(),x(b),O(!1),T())},onKeyDown:function(e){"Escape"===e.code&&(M.current.resetInput(),x(b),O(!1))},...y,children:[r(Wc,{ref:M,disabled:a,onChange:B,onFocus:()=>{O(!0)},readOnly:m,focused:k,names:["start-day","start-month","start-year"],value:$,hoverValue:C}),r(Cc,{ref:_,type:"input",variant:"single",initialCalendarDate:$,isOpen:k,withButton:j,value:$,disabledDates:i,minDate:e,maxDate:n,allowDisabledSelection:v,onHover:e=>{S(e)},onSelect:B,onDismiss:e=>{switch(e){case"reset":x(b);break;case"confirmed":w($),I($)}O(!1)},onYearMonthDisplayChange:p})]})},Zc=e=>r("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:r("path",{d:"M9.39601 16.062C9.21534 15.882 9.12167 15.6807 9.11501 15.458C9.10767 15.236 9.19434 15.0347 9.37501 14.854L13.354 10.875H4.20801C3.97201 10.875 3.76734 10.7883 3.59401 10.615C3.42001 10.441 3.33301 10.236 3.33301 10C3.33301 9.764 3.42001 9.559 3.59401 9.385C3.76734 9.21167 3.97201 9.125 4.20801 9.125H13.354L9.37501 5.167C9.19434 4.98633 9.10767 4.78133 9.11501 4.552C9.12167 4.32267 9.21534 4.118 9.39601 3.938C9.57667 3.75733 9.77801 3.667 10 3.667C10.222 3.667 10.4233 3.75733 10.604 3.938L16.042 9.375C16.1393 9.45833 16.2087 9.55567 16.25 9.667C16.2913 9.77767 16.312 9.88867 16.312 10C16.312 10.1113 16.2913 10.219 16.25 10.323C16.2087 10.427 16.1393 10.5277 16.042 10.625L10.604 16.062C10.4233 16.2427 10.222 16.333 10 16.333C9.77801 16.333 9.57667 16.2427 9.39601 16.062Z",fill:"currentColor"})});Zc.displayName="ArrowRightIcon";const Qc=e=>`@media screen and (max-width: ${e}px)`,Gc=$.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$minWidthBeforeWrap)return x`
                ${Qc(e.$minWidthBeforeWrap)} {
                    /* Parent container need to provide space */
                    flex-wrap: wrap;

                    [data-id="range-container-elem1-container"],
                    [data-id="range-container-elem2-container"] {
                        // 100% - Icon size - 2padding
                        max-width: calc(100% - 1.125rem - 1rem);
                        flex: unset;
                    }

                    [data-id="range-container-elem2-container"] {
                        margin-top: 0.5rem;
                    }
                }
            `}}
`,Xc=$.div`
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
`,Kc=$(Zc)`
    color: ${Or.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,Jc=$.div`
    position: absolute;
    background: ${e=>e.$error?Or.Validation.Red.Border(e):Or.Primary(e)};
    height: 0.125rem;
    // half - half padding - half icon width
    width: calc(50% - 0.5rem - (1.125rem / 2));
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return x`
                    opacity: 1;
                `;case"end":return x`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return x`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$minWidthBeforeWrap)return x`
                ${Qc(e.$minWidthBeforeWrap)} {
                    display: none;
                }
            `}}
`,ed=({children:e,currentActive:n,error:a,className:i,minWidthBeforeWrap:o})=>{const[s,l]=e;return t(Gc,{className:i,$minWidthBeforeWrap:o,children:[r(Xc,{"data-id":"range-container-elem1-container",children:s}),r(Kc,{}),r(Xc,{"data-id":"range-container-elem2-container",children:l}),r(Jc,{"data-id":"range-container-indicator",$position:n,$error:a,$minWidthBeforeWrap:o})]})},td=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},rd=$(Ac)`
    @media screen and (max-width: ${374}px) {
        padding: 0.75rem 1rem;
    }
`,nd=$.div`
    display: flex;
    align-items: center;
    height: 3rem;
    width: 100%;

    @media screen and (max-width: ${374}px) {
        height: fit-content;
    }
`,ad={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",isStartDirty:!1,isEndDirty:!1},id=({minDate:e,maxDate:n,disabled:a,disabledDates:i,error:c,value:d,valueEnd:u,onChange:h,onBlur:p,onYearMonthDisplayChange:f,withButton:m=!0,readOnly:g,id:v,allowDisabledSelection:y,...b})=>{const[$,x]=o(),[C,S]=o(void 0),[{selectedStart:k,selectedEnd:O,currentFocus:D,isStartDirty:_,isEndDirty:M},F]=(({initialState:e,reducers:t,name:r,debug:n})=>{const[a,i]=w(((e,r)=>t[r.type]?t[r.type](e,r.payload):e),e);return[a,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{n&&td(r,e,t),i({type:e,payload:t})}])))]})({name:"date-range-input",initialState:ad,reducers:{blur:e=>({...e,selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>({...e,selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>({...e,selectedEnd:t,isEndDirty:!0}),reselectStart:e=>({...e,selectedStart:"",currentFocus:"start"}),reselectEnd:e=>({...e,selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>({...e,currentFocus:t}),cancel:e=>({...e,selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none"}),done:(e,t)=>({...e,selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",isStartDirty:!1,isEndDirty:!1}),resetStart:e=>({...e,selectedStart:e.initialStart}),resetEnd:e=>({...e,selectedEnd:e.initialEnd}),resetRange:(e,t)=>({...e,initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),j=s(!1),B=s(),A=s(),I=s(),T=s(),N=E.exports.useMediaQuery({maxWidth:Gr.mobileL}),P=m||N;l((()=>{F.resetRange({start:d,end:u})}),[d,u]),l((()=>{"start"===D?x(k):"end"===D&&x(O)}),[D]);const L=e=>{if(z(e))return void(j.current=!0);if(F.changeStart(e),j.current=!1,!e)return void(P||O||!M||(F.resetRange({start:"",end:""}),h?.("","")));if(!O)return void F.focus("end");if(ll(e).isAfter(O,"day"))F.reselectEnd();else{if(M)return P?void 0:(F.done({start:e,end:O}),void h?.(e,O));F.focus("end")}},H=e=>{if(z(e))return void(j.current=!0);if(F.changeEnd(e),!e)return void(P||k||!_||(F.resetRange({start:"",end:""}),h?.("","")));if(!k)return void F.focus("start");if(ll(e).isBefore(k,"day"))F.reselectStart();else{if(_)return P?void 0:(F.done({start:k,end:e}),void h?.(k,e));F.focus("start")}},R=e=>()=>{F.focus(e)},z=t=>!y&&t&&Yc.isDateDisabled(t,{disabledDates:i,minDate:e,maxDate:n});return t(rd,{ref:B,$disabled:a,$readOnly:g,$error:c,id:v,"data-testid":b["data-testid"],tabIndex:-1,onBlur:e=>{B.current.contains(e.relatedTarget)||(F.blur(),I.current.resetPlaceholder(),T.current.resetPlaceholder(),p?.())},onKeyDown:e=>{"Escape"===e.code&&F.blur(),"Enter"!==e.code||P||(k&&O?(F.done({start:k,end:O}),h?.(k,O)):F.blur())},...b,children:[t(ed,{currentActive:D,minWidthBeforeWrap:374,error:c,children:[r(nd,{children:r(Wc,{ref:I,placeholder:"From",names:["start-day","start-month","start-year"],value:k,disabled:a,readOnly:g,focused:"start"===D,hoverValue:"start"===D?C:void 0,onChange:L,onFocus:R("start"),onBlur:e=>{e&&!j.current||(F.resetStart(),I.current.resetInput())}})}),r(nd,{children:r(Wc,{ref:T,placeholder:"To",names:["end-day","end-month","end-year"],value:O,disabled:a,readOnly:g,focused:"end"===D,hoverValue:"end"===D?C:void 0,onChange:H,onFocus:R("end"),onBlur:e=>{e&&!j.current||(F.resetEnd(),T.current.resetInput())}})})]}),r(Cc,{ref:A,type:"input",variant:"range",initialCalendarDate:$,isOpen:"none"!==D,withButton:P,value:k,endValue:O,selectWithinRange:_||M,currentFocus:D,disabledDates:i,minDate:e,maxDate:n,allowDisabledSelection:y,onSelect:e=>{"start"===D?L(e):"end"===D&&H(e)},onDismiss:e=>{switch(e){case"reset":F.cancel();break;case"confirmed":F.done({start:k,end:O}),h?.(k,O)}},onHover:e=>{S(e)},onYearMonthDisplayChange:f})]})},od=$.input`
    ${Ir("Body","regular")}
    color: ${Or.Neutral[1]};

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
        color: ${Or.Neutral[3]};
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
`,sd=$.button`
    position: relative;
    height: auto;
    padding: 0 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Or.Neutral[3]};
    background-color: transparent;
    border: none;
`,ld=$(Jr)`
    height: 1.25rem;
    width: 1.25rem;
`,cd=i.forwardRef((({value:e,spacing:n,type:a,error:i,disabled:o,readOnly:l,onChange:c,onClear:d,allowClear:u=!1,className:h,...p},f)=>{const m=s();b(f,(()=>m.current),[]);const g=()=>"tel"===a&&n,v=e=>{const t=e.target,r=t.value,n=t.value.replace(/\s/g,"");t.value=n,c(e),t.value=r},y=e?(e=>e?g()?_c.transformWithSpaces(e,n):e:"")(e):e;return t(Ac,{$disabled:o,$error:i,$readOnly:l,className:h,children:[r(od,{"data-testid":"input",ref:m,disabled:o,value:y,onChange:e=>{c&&(g()?v(e):c(e))},type:a,readOnly:l,...p}),u&&!o&&!l&&!!e&&r(sd,{onClick:()=>{d&&d(),m&&m.current&&m.current.focus()},type:"button",children:r(ld,{})})]})})),dd=i.forwardRef(((e,t)=>{const{label:n,errorMessage:a,id:i="form-field","data-error-testid":o,"data-testid":s,...l}=e;return r(Cn,{id:i,label:n,errorMessage:a,disabled:l.disabled,"data-error-testid":o,children:r(cd,{id:`${i}-base`,"data-testid":s||i,ref:t,error:!!a,...l})})})),ud=$.div`
    display: flex;
    position: relative;
    border: 1px solid ${Or.Neutral[5]};
    border-radius: 4px;
    background: ${Or.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Or.Accent.Light[1]};
        box-shadow: ${Bc};
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
                background: ${Or.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Or.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?x`
                border: 1px solid ${Or.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Or.Validation.Red.Border(e)};
                    box-shadow: ${Ec};
                }
            `:void 0}
`,hd=$(cd)`
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
`,pd=$.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Ir("Body","regular")}
    color: ${Or.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${Or.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return x`
                color: ${Or.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${Or.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?x`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:x`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`;var fd=Bt;var md=Bt,gd=Et,vd=Qt;var yd=Bt,bd=function(){this.__data__=new fd,this.size=0},wd=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},$d=function(e){return this.__data__.get(e)},xd=function(e){return this.__data__.has(e)},Cd=function(e,t){var r=this.__data__;if(r instanceof md){var n=r.__data__;if(!gd||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new vd(n)}return r.set(e,t),this.size=r.size,this};function Sd(e){var t=this.__data__=new yd(e);this.size=t.size}Sd.prototype.clear=bd,Sd.prototype.delete=wd,Sd.prototype.get=$d,Sd.prototype.has=xd,Sd.prototype.set=Cd;var kd=Sd;var Od=Qt,Dd=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},_d=function(e){return this.__data__.has(e)};function Md(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Od;++t<r;)this.add(e[t])}Md.prototype.add=Md.prototype.push=Dd,Md.prototype.has=_d;var Fd=Md,jd=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Bd=function(e,t){return e.has(t)};var Ed=function(e,t,r,n,a,i){var o=1&r,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=i.get(e),d=i.get(t);if(c&&d)return c==t&&d==e;var u=-1,h=!0,p=2&r?new Fd:void 0;for(i.set(e,t),i.set(t,e);++u<s;){var f=e[u],m=t[u];if(n)var g=o?n(m,f,u,t,e,i):n(f,m,u,e,t,i);if(void 0!==g){if(g)continue;h=!1;break}if(p){if(!jd(t,(function(e,t){if(!Bd(p,t)&&(f===e||a(f,e,r,n,i)))return p.push(t)}))){h=!1;break}}else if(f!==m&&!a(f,m,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var Ad=L.Uint8Array,Id=yt,Td=Ed,Nd=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},Pd=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Ld=U?U.prototype:void 0,Hd=Ld?Ld.valueOf:void 0;var Rd=function(e,t,r,n,a,i,o){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new Ad(e),new Ad(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Id(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Nd;case"[object Set]":var l=1&n;if(s||(s=Pd),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;n|=2,o.set(e,t);var d=Td(s(e),s(t),n,a,i,o);return o.delete(e),d;case"[object Symbol]":if(Hd)return Hd.call(e)==Hd.call(t)}return!1};var zd=function(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e},Vd=Oe;var Wd=function(e,t,r){var n=t(e);return Vd(e)?n:zd(n,r(e))};var Yd=function(e,t){for(var r=-1,n=null==e?0:e.length,a=0,i=[];++r<n;){var o=e[r];t(o,r,e)&&(i[a++]=o)}return i},Ud=function(){return[]},qd=Object.prototype.propertyIsEnumerable,Zd=Object.getOwnPropertySymbols,Qd=Zd?function(e){return null==e?[]:(e=Object(e),Yd(Zd(e),(function(t){return qd.call(e,t)})))}:Ud;var Gd=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Xd=ne,Kd=ae;var Jd=function(e){return Kd(e)&&"[object Arguments]"==Xd(e)},eu=ae,tu=Object.prototype,ru=tu.hasOwnProperty,nu=tu.propertyIsEnumerable,au=Jd(function(){return arguments}())?Jd:function(e){return eu(e)&&ru.call(e,"callee")&&!nu.call(e,"callee")},iu={exports:{}};var ou=function(){return!1};!function(e,t){var r=L,n=ou,a=t&&!t.nodeType&&t,i=a&&e&&!e.nodeType&&e,o=i&&i.exports===a?r.Buffer:void 0,s=(o?o.isBuffer:void 0)||n;e.exports=s}(iu,iu.exports);var su=/^(?:0|[1-9]\d*)$/;var lu=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&su.test(e))&&e>-1&&e%1==0&&e<t};var cu=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},du=ne,uu=cu,hu=ae,pu={};pu["[object Float32Array]"]=pu["[object Float64Array]"]=pu["[object Int8Array]"]=pu["[object Int16Array]"]=pu["[object Int32Array]"]=pu["[object Uint8Array]"]=pu["[object Uint8ClampedArray]"]=pu["[object Uint16Array]"]=pu["[object Uint32Array]"]=!0,pu["[object Arguments]"]=pu["[object Array]"]=pu["[object ArrayBuffer]"]=pu["[object Boolean]"]=pu["[object DataView]"]=pu["[object Date]"]=pu["[object Error]"]=pu["[object Function]"]=pu["[object Map]"]=pu["[object Number]"]=pu["[object Object]"]=pu["[object RegExp]"]=pu["[object Set]"]=pu["[object String]"]=pu["[object WeakMap]"]=!1;var fu=function(e){return hu(e)&&uu(e.length)&&!!pu[du(e)]};var mu=function(e){return function(t){return e(t)}},gu={exports:{}};!function(e,t){var r=T,n=t&&!t.nodeType&&t,a=n&&e&&!e.nodeType&&e,i=a&&a.exports===n&&r.process,o=function(){try{var e=a&&a.require&&a.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=o}(gu,gu.exports);var vu=fu,yu=mu,bu=gu.exports,wu=bu&&bu.isTypedArray,$u=wu?yu(wu):vu,xu=Gd,Cu=au,Su=Oe,ku=iu.exports,Ou=lu,Du=$u,_u=Object.prototype.hasOwnProperty;var Mu=function(e,t){var r=Su(e),n=!r&&Cu(e),a=!r&&!n&&ku(e),i=!r&&!n&&!a&&Du(e),o=r||n||a||i,s=o?xu(e.length,String):[],l=s.length;for(var c in e)!t&&!_u.call(e,c)||o&&("length"==c||a&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Ou(c,l))||s.push(c);return s},Fu=Object.prototype;var ju=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Fu)};var Bu=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Eu=ju,Au=Bu,Iu=Object.prototype.hasOwnProperty;var Tu=Ie,Nu=cu;var Pu=function(e){return null!=e&&Nu(e.length)&&!Tu(e)},Lu=Mu,Hu=function(e){if(!Eu(e))return Au(e);var t=[];for(var r in Object(e))Iu.call(e,r)&&"constructor"!=r&&t.push(r);return t},Ru=Pu;var zu=function(e){return Ru(e)?Lu(e):Hu(e)},Vu=Wd,Wu=Qd,Yu=zu;var Uu=function(e){return Vu(e,Yu,Wu)},qu=Object.prototype.hasOwnProperty;var Zu=function(e,t,r,n,a,i){var o=1&r,s=Uu(e),l=s.length;if(l!=Uu(t).length&&!o)return!1;for(var c=l;c--;){var d=s[c];if(!(o?d in t:qu.call(t,d)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var p=!0;i.set(e,t),i.set(t,e);for(var f=o;++c<l;){var m=e[d=s[c]],g=t[d];if(n)var v=o?n(g,m,d,t,e,i):n(m,g,d,e,t,i);if(!(void 0===v?m===g||a(m,g,r,n,i):v)){p=!1;break}f||(f="constructor"==d)}if(p&&!f){var y=e.constructor,b=t.constructor;y==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(p=!1)}return i.delete(e),i.delete(t),p},Qu=Je(L,"DataView"),Gu=Et,Xu=Je(L,"Promise"),Ku=Je(L,"Set"),Ju=Je(L,"WeakMap"),eh=ne,th=He,rh="[object Map]",nh="[object Promise]",ah="[object Set]",ih="[object WeakMap]",oh="[object DataView]",sh=th(Qu),lh=th(Gu),ch=th(Xu),dh=th(Ku),uh=th(Ju),hh=eh;(Qu&&hh(new Qu(new ArrayBuffer(1)))!=oh||Gu&&hh(new Gu)!=rh||Xu&&hh(Xu.resolve())!=nh||Ku&&hh(new Ku)!=ah||Ju&&hh(new Ju)!=ih)&&(hh=function(e){var t=eh(e),r="[object Object]"==t?e.constructor:void 0,n=r?th(r):"";if(n)switch(n){case sh:return oh;case lh:return rh;case ch:return nh;case dh:return ah;case uh:return ih}return t});var ph=kd,fh=Ed,mh=Rd,gh=Zu,vh=hh,yh=Oe,bh=iu.exports,wh=$u,$h="[object Arguments]",xh="[object Array]",Ch="[object Object]",Sh=Object.prototype.hasOwnProperty;var kh=function(e,t,r,n,a,i){var o=yh(e),s=yh(t),l=o?xh:vh(e),c=s?xh:vh(t),d=(l=l==$h?Ch:l)==Ch,u=(c=c==$h?Ch:c)==Ch,h=l==c;if(h&&bh(e)){if(!bh(t))return!1;o=!0,d=!1}if(h&&!d)return i||(i=new ph),o||wh(e)?fh(e,t,r,n,a,i):mh(e,t,l,r,n,a,i);if(!(1&r)){var p=d&&Sh.call(e,"__wrapped__"),f=u&&Sh.call(t,"__wrapped__");if(p||f){var m=p?e.value():e,g=f?t.value():t;return i||(i=new ph),a(m,g,r,n,i)}}return!!h&&(i||(i=new ph),gh(e,t,r,n,a,i))},Oh=ae;var Dh=function e(t,r,n,a,i){return t===r||(null==t||null==r||!Oh(t)&&!Oh(r)?t!=t&&r!=r:kh(t,r,n,a,e,i))},_h=kd,Mh=Dh;var Fh=I;var jh=function(e){return e==e&&!Fh(e)},Bh=jh,Eh=zu;var Ah=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Ih=function(e,t,r,n){var a=r.length,i=a,o=!n;if(null==e)return!i;for(e=Object(e);a--;){var s=r[a];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++a<i;){var l=(s=r[a])[0],c=e[l],d=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new _h;if(n)var h=n(c,d,l,e,t,u);if(!(void 0===h?Mh(d,c,3,n,u):h))return!1}}return!0},Th=function(e){for(var t=Eh(e),r=t.length;r--;){var n=t[r],a=e[n];t[r]=[n,a,Bh(a)]}return t},Nh=Ah;var Ph=pr,Lh=au,Hh=Oe,Rh=lu,zh=cu,Vh=mr;var Wh=function(e,t){return null!=e&&t in Object(e)},Yh=function(e,t,r){for(var n=-1,a=(t=Ph(t,e)).length,i=!1;++n<a;){var o=Vh(t[n]);if(!(i=null!=e&&r(e,o)))break;e=e[o]}return i||++n!=a?i:!!(a=null==e?0:e.length)&&zh(a)&&Rh(o,a)&&(Hh(e)||Lh(e))};var Uh=Dh,qh=wr,Zh=function(e,t){return null!=e&&Yh(e,t,Wh)},Qh=je,Gh=jh,Xh=Ah,Kh=mr;var Jh=yr;var ep=function(e){return function(t){return null==t?void 0:t[e]}},tp=function(e){return function(t){return Jh(t,e)}},rp=je,np=mr;var ap=function(e){var t=Th(e);return 1==t.length&&t[0][2]?Nh(t[0][0],t[0][1]):function(r){return r===e||Ih(r,e,t)}},ip=function(e,t){return Qh(e)&&Gh(t)?Xh(Kh(e),t):function(r){var n=qh(r,e);return void 0===n&&n===t?Zh(r,e):Uh(t,n,3)}},op=function(e){return e},sp=Oe,lp=function(e){return rp(e)?ep(np(e)):tp(e)};var cp=function(e){return"function"==typeof e?e:null==e?op:"object"==typeof e?sp(e)?ip(e[0],e[1]):ap(e):lp(e)},dp=cp,up=Pu,hp=zu;var pp=function(e){return function(t,r,n){var a=Object(t);if(!up(t)){var i=dp(r);t=hp(t),r=function(e){return i(a[e],e,a)}}var o=e(t,r,n);return o>-1?a[i?t[o]:o]:void 0}};var fp=me,mp=1/0;var gp=function(e){return e?(e=fp(e))===mp||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var vp=function(e,t,r,n){for(var a=e.length,i=r+(n?1:-1);n?i--:++i<a;)if(t(e[i],i,e))return i;return-1},yp=cp,bp=function(e){var t=gp(e),r=t%1;return t==t?r?t-r:t:0},wp=Math.max;var $p=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var a=null==r?0:bp(r);return a<0&&(a=wp(n+a,0)),vp(e,yp(t),a)},xp=pp($p),Cp=Dh;var Sp,kp=function(e,t){return Cp(e,t)},Op={};Object.defineProperty(Op,"__esModule",{value:!0});var Dp=e;const _p=e=>Dp.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Dp.jsx("path",{d:"M9.99999 10.792C10.236 10.792 10.441 10.705 10.615 10.531C10.7883 10.3577 10.875 10.153 10.875 9.91701V6.70801C10.875 6.47201 10.7883 6.27067 10.615 6.10401C10.441 5.93734 10.236 5.85401 9.99999 5.85401C9.76399 5.85401 9.55899 5.94101 9.38499 6.11501C9.21166 6.28834 9.12499 6.49301 9.12499 6.72901V9.93801C9.12499 10.174 9.21166 10.3753 9.38499 10.542C9.55899 10.7087 9.76399 10.792 9.99999 10.792ZM9.99999 14.188C10.236 14.188 10.441 14.108 10.615 13.948C10.7883 13.788 10.875 13.576 10.875 13.312C10.875 13.076 10.7883 12.8713 10.615 12.698C10.441 12.5247 10.236 12.438 9.99999 12.438C9.76399 12.438 9.55899 12.5247 9.38499 12.698C9.21166 12.8713 9.12499 13.076 9.12499 13.312C9.12499 13.576 9.21166 13.788 9.38499 13.948C9.55899 14.108 9.76399 14.188 9.99999 14.188ZM9.99999 18.333C8.84733 18.333 7.76399 18.1143 6.74999 17.677C5.73599 17.2397 4.85399 16.646 4.10399 15.896C3.35399 15.146 2.76033 14.264 2.32299 13.25C1.88566 12.236 1.66699 11.1527 1.66699 10C1.66699 8.84734 1.88566 7.76401 2.32299 6.75001C2.76033 5.73601 3.35399 4.85401 4.10399 4.10401C4.85399 3.35401 5.73599 2.76034 6.74999 2.32301C7.76399 1.88567 8.84733 1.66701 9.99999 1.66701C11.1527 1.66701 12.236 1.88567 13.25 2.32301C14.264 2.76034 15.146 3.35401 15.896 4.10401C16.646 4.85401 17.2397 5.73601 17.677 6.75001C18.1143 7.76401 18.333 8.84734 18.333 10C18.333 11.1527 18.1143 12.236 17.677 13.25C17.2397 14.264 16.646 15.146 15.896 15.896C15.146 16.646 14.264 17.2397 13.25 17.677C12.236 18.1143 11.1527 18.333 9.99999 18.333Z",fill:"currentColor"})});_p.displayName="ExclamationCircleFillIcon",Sp=Op.ExclamationCircleFillIcon=_p;var Mp,Fp={};Object.defineProperty(Fp,"__esModule",{value:!0});var jp=e;const Bp=e=>jp.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:jp.jsx("path",{d:"M7.97897 14.646C7.86764 14.646 7.75997 14.625 7.65597 14.583C7.55197 14.5417 7.4513 14.4723 7.35397 14.375L3.83297 10.854C3.6663 10.6873 3.58664 10.4757 3.59397 10.219C3.60064 9.96167 3.6873 9.74967 3.85397 9.583C4.02064 9.41634 4.22897 9.333 4.47897 9.333C4.72897 9.333 4.9373 9.41634 5.10397 9.583L8.02097 12.5L14.917 5.604C15.0836 5.43734 15.2883 5.354 15.531 5.354C15.7743 5.354 15.9793 5.43734 16.146 5.604C16.3126 5.77067 16.396 5.97567 16.396 6.219C16.396 6.46167 16.3126 6.66634 16.146 6.833L8.60397 14.375C8.50664 14.4723 8.40597 14.5417 8.30197 14.583C8.19797 14.625 8.0903 14.646 7.97897 14.646Z",fill:"currentColor"})});Bp.displayName="TickIcon",Mp=Fp.TickIcon=Bp;const Ep=$.div`
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
    border: 1px solid ${Or.Accent.Light[2]};
    background: transparent;

    ${e=>{let t,r;return e.selected&&(t=Or.Primary(e),r=Or.Primary(e)),e.disabled&&(t=Or.Neutral[6](e),r=Or.Neutral[6](e)),`\n\t\t\tborder: 1px solid ${t};\n\t\t\tbackground: ${r};\n\t\t`}}
`,Ap=$.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Ip=$(Mp)`
    ${e=>{let t;if("small"===e.$displaySize)t="1.5rem";else t="1.75rem";return x`
            height: ${t};
            width: ${t};
        `}}
    color: ${e=>e.disabled?Or.Neutral[4]:Or.Neutral[8]};
`,Tp=$(il.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Np=$.ul`
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
        background: ${Or.Neutral[4]};
        border-right: 5px solid ${Or.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${Qr.mobileL} {
        max-height: 15rem;
    }
`,Pp=$.li`
    :hover,
    :focus,
    :active {
        background: ${Or.Accent.Light[5]};
    }
    ${e=>{if(e.checked)return x`
                background: ${Or.Accent.Light[5]};
            `}}
`,Lp=$.button`
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
        outline-color: ${Or.Accent.Light[3]};
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
    background: ${Or.Neutral[8]};
`;const Hp=$.div`
    ${Ir("Body","regular")}
    color: ${Or.Neutral[1]};
    text-align: left;
    line-height: 1.375rem;
    overflow: hidden;
    ${e=>{if("middle"!==e.truncateType)return x`
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                `}}
`,Rp=$.span`
    color: ${Or.Neutral[4]};
    display: inline;
    padding-left: 0.4rem;
`,zp=$.div`
    display: flex;
    flex-direction: column;
`,Vp=$.div`
    width: 100%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Wp=$.div`
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;$(Nr.Hyperlink.Default)`
    color: ${Or.Neutral[1]} !important;
    padding: 1.25rem 1rem;
    margin-bottom: 0;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Or.Accent.Light[3]};
        color: ${Or.Neutral[1]};
    }
`;const Yp=$((({className:e,checked:n,disabled:a,onChange:i,onKeyPress:s,displaySize:c="default",...d})=>{const[u,h]=o(n);l((()=>{h(n)}),[n]);const p=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;i&&i(e),s&&s(t)}};return t(Ep,{selected:u,disabled:a,className:e,"data-testid":"checkbox",$displaySize:c,role:"checkbox","aria-checked":u,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:p,children:[r(Ap,{id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",tabIndex:-1,onChange:p,disabled:a,checked:u,...d}),u&&r(Ip,{id:"checkmark","data-testid":"checkmark",disabled:a,$displaySize:c})]})}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Up=$.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,qp=$.button`
    ${Ir("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${Or.Primary(e)};\n\t\t`}
`,Zp=$.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Qp=$(Nr.Body)``,Gp=$(Sp)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${Or.Validation.Red.Icon};
`;var Xp,Kp={};Object.defineProperty(Kp,"__esModule",{value:!0});var Jp=e;const ef=e=>Jp.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Jp.jsx("path",{d:"M15.688 16.896L11.125 12.333C10.667 12.6803 10.1703 12.941 9.635 13.115C9.10033 13.2883 8.54133 13.375 7.958 13.375C6.44467 13.375 5.15667 12.8507 4.094 11.802C3.03133 10.7533 2.5 9.472 2.5 7.958C2.5 6.44467 3.03133 5.15667 4.094 4.094C5.15667 3.03133 6.44467 2.5 7.958 2.5C9.472 2.5 10.7533 3.03133 11.802 4.094C12.8507 5.15667 13.375 6.44467 13.375 7.958C13.375 8.54133 13.2917 9.10033 13.125 9.635C12.9583 10.1703 12.6943 10.66 12.333 11.104L16.917 15.708C17.0837 15.8747 17.1633 16.0727 17.156 16.302C17.1493 16.5313 17.0627 16.7293 16.896 16.896C16.7293 17.0627 16.528 17.146 16.292 17.146C16.056 17.146 15.8547 17.0627 15.688 16.896ZM7.958 11.625C8.972 11.625 9.83667 11.2673 10.552 10.552C11.2673 9.83667 11.625 8.972 11.625 7.958C11.625 6.93067 11.2707 6.05567 10.562 5.333C9.854 4.611 8.986 4.25 7.958 4.25C6.93067 4.25 6.05567 4.611 5.333 5.333C4.611 6.05567 4.25 6.93067 4.25 7.958C4.25 8.986 4.611 9.854 5.333 10.562C6.05567 11.2707 6.93067 11.625 7.958 11.625Z",fill:"currentColor"})});ef.displayName="MagnifierIcon",Xp=Kp.MagnifierIcon=ef;const tf=$.li`
    background: ${Or.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,rf=$(Ic)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,nf=$(Xp)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${Or.Neutral[3]};
`,af=$(an)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${Or.Neutral[3]};
    cursor: pointer;
`,of=$(Jr)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${Or.Neutral[3]};
`,sf=m(((e,n)=>{const{onClear:a,...i}=e;return t(tf,{children:[r(nf,{}),r(rf,{ref:n,...i}),i.value&&r(af,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:r(of,{})})]},"search")})),lf=({listItems:e,listExtractor:a,valueExtractor:i,onSelectItem:c,listStyleWidth:d,visible:u,enableSearch:h,searchPlaceholder:p="Search",onSearch:f,searchFunction:m,onDismiss:g,multiSelect:v,selectedItems:y,onSelectAll:b,onRetry:w,itemsLoadState:$="success",itemTruncationType:x="end",renderListItem:C,onBlur:S,hideNoResultsDisplay:k,renderCustomCallToAction:O,...D})=>{const[_,M]=o(0),[F,j]=o(""),[B,E]=o(e),[A,I]=o(0),T=Ts({height:A}),N=s(),P=s(),L=s([]),H=s(),R=s(),z=s(_),V=s(B),W=e=>{z.current=e,M(e)},Y=e=>{V.current=e,E(e)};l((()=>(document.addEventListener("keydown",X),()=>{document.removeEventListener("keydown",X)})),[]),l((()=>{Q(F)}),[F]),l((()=>{j(""),u?(setTimeout((()=>{I(G())})),H&&H.current?(H.current.focus(),W(-1)):L.current[_]&&L.current[_].focus()):I(0)}),[u]),l((()=>{if(u){const e=G();I(e)}}),[B]),l((()=>{Y(e),j(""),W(0)}),[e]);const U=e=>a?a(e):e.toString(),q=e=>{const t=a?a(e):e.toString();let r=0;return P&&P.current&&(r=P.current.getBoundingClientRect().width-100),_c.shouldTruncateToTwoLines("string"==typeof t?t:t.title,r)},Z=e=>!!xp(y,(t=>kp(t,e))),Q=t=>{if(""===t)Y(e);else if(m){const e=m(t);Y(e)}else{const r=e.filter((e=>{const r=U(e),n="object"==typeof r?r.title.toLowerCase():r.toLowerCase();return"object"==typeof r&&r.secondaryLabel?n.includes(t.trim().toLowerCase())||r.secondaryLabel.includes(t.trim().toLowerCase()):n.includes(t.trim().toLowerCase())}));Y(r)}},G=()=>(P&&P.current?P.current.getBoundingClientRect().height:0)+(R.current?R.current.getBoundingClientRect().height:0),X=e=>{if(N&&N.current.contains(e.target))switch(e.code){case"ArrowDown":if(z.current<V.current.length-1){const e=z.current+1;L.current[e].focus(),W(e)}break;case"ArrowUp":if(z.current>0){const e=z.current-1;L.current[e].focus(),W(z.current-1)}break;case"Escape":g&&g(!0)}},K=(e,t)=>{e.preventDefault(),c&&c(t,(e=>i?i(e):e)(t))},J=e=>{const t=e.target.value;j(t),f&&f()},ee=()=>{j(""),H.current.focus(),f&&f()},te=()=>{w&&w()},re=()=>{S&&S()},ne=e=>{const n=U(e),a="string"==typeof n?n:n.title;return t(zp,{"data-testid":"truncate-middle-container",children:[r(Vp,{children:a}),t(Wp,{children:[" ",a]})]})},ae=e=>{const a=U(e);return"string"==typeof a?r(n,{children:a}):t(n,{children:[a.title,a.secondaryLabel&&r(Rp,{children:a.secondaryLabel})]})},ie=()=>{if(!w||w&&"success"===$)return B.map(((e,n)=>r(Pp,{checked:Z(e)&&!v,children:t(Lp,{onClick:t=>{K(t,e)},ref:e=>L.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:u?0:-1,multiSelect:v,onBlur:re,children:[v&&r(Yp,{checked:Z(e),displaySize:"small"}),C?C(e,{selected:Z(e)}):r(Hp,{truncateType:x,children:"middle"===x&&q(e)?ne(e):ae(e)})]})},((e,t)=>`item_${t}__${i?i(e):e}`)(e,n))))},oe=()=>{if(v&&B.length>0&&!F&&"success"===$)return r(Up,{children:r(qp,{onClick:b,type:"button",children:0===y.length?"Select all":"Unselect all"})},"selectAll")},se=()=>{if(!k&&F&&0===B.length)return t(Zp,{"data-testid":"list-no-results",children:[r(Gp,{"data-testid":"no-result-icon"}),r(Qp,{children:"No results found."})]},"noResults")},le=()=>{if(w&&"loading"===$)return t(Zp,{"data-testid":"list-loading",children:[r(Rl,{$buttonStyle:"secondary",size:24}),r(Qp,{children:"Loading..."})]},"loading")},ce=()=>{if(w&&"fail"===$)return t(Zp,{"data-testid":"list-fail",children:[r(Gp,{"data-testid":"load-error-icon"}),r(Qp,{children:"Failed to load."}),r(qp,{onClick:te,children:"Try again."})]},"noResults")};return r(n,{children:t(Tp,{style:T,"data-testid":u?"dropdown-container":"dropdown-container-hidden",ref:N,children:[(()=>{if(u)return t(Np,{ref:P,"data-testid":"dropdown-list",width:d,role:"list",...D,children:[(h||m)&&"success"===$?r(sf,{ref:H,onChange:J,value:F,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:u?0:-1,onClear:ee}):null,oe(),se(),le(),ce(),ie()]})})(),(()=>{if(u&&O)return r("div",{ref:R,"data-testid":"custom-cta",children:O(g,B)})})()]})})},cf=(e,t,r=window)=>{const n=s();l((()=>{n.current=t}),[t]),l((()=>{if(!(r&&r.addEventListener))return;const t=e=>n.current(e);return r.addEventListener(e,t),()=>{r.removeEventListener(e,t)}}),[e,r])},df=$.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,uf=$.button`
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
        outline: 2px solid ${Or.Accent.Light[3]};
    }
`,hf=C`
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
`,pf=$.div`
    position: relative;
    border: 1px solid ${Or.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Or.Neutral[8]};

    :focus-within {
        border: 1px solid ${Or.Accent.Light[1]};
        box-shadow: ${Bc};
    }

    ${e=>e.expanded?x`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:x`
                animation: ${hf} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?x`
                background: ${Or.Neutral[6](e)};

                ${uf} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Or.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?x`
                border: none;
                background: transparent !important;

                ${uf} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?x`
                border: 1px solid ${Or.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Or.Validation.Red.Border(e)};
                    box-shadow: ${Ec};
                }
            `:void 0}
`,ff=$.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${cn};
    margin-left: 1rem;
`,mf=$(xl)`
    color: ${Or.Neutral[3]};
    height: ${Fr.Body.fontSize}rem;
    width: ${Fr.Body.fontSize}rem;
`,gf=$.div`
    height: 1px;
    background: ${Or.Neutral[5]};
    margin: 0 0.5rem;
`,vf=$.div`
    display: flex;
    flex: 1;
`,yf=$(Nr.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return x`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,bf=$(yf)`
    color: ${Or.Neutral[3]};
`,wf=({children:e,show:t,error:n,disabled:a,testId:i,onBlur:o,readOnly:l})=>{const c=s();return cf("mousedown",(function(e){if(!a){if(c&&c.current.contains(e.target))return;t&&o()}}),document),r(df,{children:r(pf,{ref:c,error:n&&!t,disabled:a,$readOnly:l,expanded:t,"data-testid":i,children:e})})},$f=$.div`
    position: relative;
    display: flex;
    margin: 0 1rem;
    ${e=>{if(e.$expanded)return x`
                border-bottom: 1px solid ${Or.Neutral[5](e)};
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
`,xf=$(uf)`
    padding: 0;
    width: auto;
`,Cf=$.div`
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: 0.75rem;
`,Sf=$.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${cn};
    margin: 0 0.75rem;
`,kf=$(xl)`
    color: ${Or.Neutral[3]};
    height: ${Fr.Body.fontSize}rem;
    width: ${Fr.Body.fontSize}rem;
    vertical-align: bottom;
`,Of=$.div`
    display: flex;
    flex: 1 1 auto;
`,Df=$(Nr.Body)`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 1px; // align with input
`,_f=$(Df)`
    color: ${Or.Neutral[3]};
`,Mf=$.div`
    width: 1px;
    background: ${Or.Neutral[5]};

    ${e=>{if(e.$readOnly)return x`
                display: none;
            `}}

    ${e=>"right"===e.$position?x`
                    margin: 1rem 0.75rem;
                `:x`
                    margin: 1rem 0.75rem 1rem 0;
                `}
`,Ff=({addon:e,error:a,onChange:i,readOnly:c,className:d,onBlur:u,...h})=>{const{placeholder:p,options:f,enableSearch:m,searchFunction:g,searchPlaceholder:v,valueExtractor:y,listExtractor:b,displayValueExtractor:w,selectedOption:$,onSelectOption:x,onHideOptions:C,onShowOptions:S,"data-selector-testid":k}=e.attributes,{position:O}=e,[D,_]=o($),[M,F]=o(!1),j=s();l((()=>{_($)}),[$]);const B=()=>w?w(D):y?y(D):D.toString(),E=e=>{!e&&C&&C(),e&&S&&S()},A=e=>{e.preventDefault(),h.disabled||(F(!M),E(!M))},I=(e,t)=>{_(e),F(!1),E(!1),j&&j.current.focus(),x&&x(e,t)},T=e=>{i&&i(e)},N=()=>{u&&u()},P=()=>{F(!1),E(!1),j&&j.current.focus()};return t(wf,{className:d,show:M,error:a&&!M,disabled:h.disabled,readOnly:c,onBlur:()=>{F(!1),E(!1),N()},children:[t($f,{$expanded:M,$readOnly:c,$position:O,children:[c?D?r(Cf,{children:r(Df,{"data-testid":"selector-label",children:B()})}):null:r(xf,{ref:j,type:"button",disabled:h.disabled,"data-testid":k||"addon-selector",onClick:A,children:t(n,{children:[t(Of,{children:[p&&!D&&r(_f,{children:p}),D&&r(Df,{"data-testid":"selector-label",children:B()})]}),r(Sf,{$expanded:M,children:r(kf,{})})]})}),r(Mf,{$readOnly:c,$position:O}),r(hd,{...h,readOnly:c,error:a,onChange:T,"data-testid":h["data-testid"]||"input",onBlur:N})]}),f&&f.length>0?r(lf,{listItems:f,selectedItems:$?[$]:[],onSelectItem:I,valueExtractor:y,listExtractor:b,visible:M,enableSearch:m,searchFunction:g,searchPlaceholder:v,"data-testid":"dropdown-list",onBlur:N,onDismiss:P}):null]})},jf=i.forwardRef((({addon:e,error:n,className:a,...i},o)=>{const s=()=>r(ud,{disabled:i.disabled,$error:n,$readOnly:i.readOnly,"data-testid":i["data-testid"],className:a,children:r(hd,{ref:o,...i,"data-testid":"input"})});if(!e)return s();{const{type:o="label",position:l="left"}=e,{allowClear:c}=i;switch(o){case"list":{const t=e.attributes;return t.options&&t.options.length>0?r(Ff,{addon:e,error:n,className:a,...i}):s()}case"custom":{const o=e.attributes;return o.children?t(Ac,{$error:n,$disabled:i.disabled,$readOnly:i.readOnly,"data-testid":i["data-testid"],$position:l,className:a,children:[r(pd,{"data-testid":"addon",disabled:i.disabled,$readOnly:i.readOnly,$position:l,children:o.children}),r(hd,{...i,allowClear:c&&"right"!==l,error:n,"data-testid":"input"})]}):s()}default:{const o=e.attributes;return o.value?t(Ac,{$disabled:i.disabled,$error:n,$readOnly:i.readOnly,"data-testid":i["data-testid"],$position:l,className:a,children:[r(pd,{"data-testid":"addon",disabled:i.disabled,$readOnly:i.readOnly,$position:l,children:o.value}),r(hd,{...i,allowClear:c&&"right"!==l,error:n,"data-testid":"input"})]}):s()}}}})),Bf=i.forwardRef(((e,t)=>{const{label:n,errorMessage:a,id:i="form-field-group","data-error-testid":o,"data-testid":s,...l}=e;return r(Cn,{id:i,label:n,errorMessage:a,disabled:l.disabled,"data-error-testid":o,children:r(jf,{ref:t,id:`${i}-base`,"data-testid":s||i,error:!!a,...l})})})),Ef=({selectedOptions:e,placeholder:a="Select",options:i,className:c,disabled:d,error:u,"data-testid":h,enableSearch:p=!1,searchFunction:f,searchPlaceholder:m,valueExtractor:g,listExtractor:v,onSelectOptions:y,listStyleWidth:b,onShowOptions:w,onHideOptions:$,onRetry:x,optionsLoadState:C="success",optionTruncationType:S="end",...k})=>{const[O,D]=o(e||[]),[_,M]=o(!1),F=s();l((()=>{D(e||[])}),[e]);const j=(e,t)=>{const r=[...O],n=$p(O,(e=>(g?g(e):e)===t));n>-1?r.splice(n,1):r.push(e),D(r),A(!1),F&&F.current.focus(),I(r)},B=()=>{_&&(M(!1),A(!1)),F&&F.current.focus()},E=()=>{O&&O.length>0?(D([]),I([])):(D(i),I(i))},A=e=>{!e&&$&&$(),e&&w&&w()},I=e=>{y&&y(e)};return t(wf,{show:_,error:u&&!_,disabled:d,testId:h,className:c,onBlur:()=>{M(!1),A(!1)},children:[r(uf,{ref:F,type:"button","data-testid":"selector",onClick:e=>{e.preventDefault(),d||(M(!_),A(!_))},...k,children:t(n,{children:[r(vf,{children:O&&0!==O.length?r(yf,{children:O&&0!=O.length?`${O.length} selected`:a}):r(bf,{truncateType:S,children:a})}),r(ff,{expanded:_,children:r(mf,{})})]})}),_&&r(gf,{}),i&&i.length>0||x?r(lf,{listItems:i,onSelectItem:j,onDismiss:B,valueExtractor:g,listExtractor:v,listStyleWidth:b,visible:_,enableSearch:p,searchFunction:f,searchPlaceholder:m,"data-testid":"dropdown-list",multiSelect:!0,selectedItems:O,onSelectAll:E,onRetry:x,itemsLoadState:C,itemTruncationType:S}):null]})};var Af=function(e,t,r,n){var a=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++a]);++a<i;)r=t(r,e[a],a,e);return r};var If=function(e){return function(t,r,n){for(var a=-1,i=Object(t),o=n(t),s=o.length;s--;){var l=o[e?s:++a];if(!1===r(i[l],l,i))break}return t}}(),Tf=zu;var Nf=Pu;var Pf=function(e,t){return function(r,n){if(null==r)return r;if(!Nf(r))return e(r,n);for(var a=r.length,i=t?a:-1,o=Object(r);(t?i--:++i<a)&&!1!==n(o[i],i,o););return r}}((function(e,t){return e&&If(e,t,Tf)}));var Lf=Af,Hf=Pf,Rf=cp,zf=function(e,t,r,n,a){return a(e,(function(e,a,i){r=n?(n=!1,e):t(r,e,a,i)})),r},Vf=Oe;var Wf=function(e,t,r){var n=Vf(e)?Lf:zf,a=arguments.length<3;return n(e,Rf(t),r,a,Hf)};const Yf=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],Uf=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var qf;!function(e){e.getCountries=()=>[].concat(...Yf.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:Uf("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,a=n.split(" ");a.shift();const i=a.join(" ");return Wf(i,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const[r,...n]=e.remainingText;return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(qf||(qf={}));const Zf=({onChange:e,value:t,allowClear:n,onClear:a,onBlur:i,error:c,fixedCountry:d=!1,optionPlaceholder:u="Select",optionSearchPlaceholder:h,enableSearch:p,onHideOptions:f,onShowOptions:m,placeholder:g,...v})=>{const[y]=o(qf.getCountries()),[b,w]=o(void 0),[$,x]=o(""),C=s();l((()=>{const e=y.filter((e=>e.countryCode===Qf(t?.countryCode)))[0];w(e),x(qf.formatNumber(t?.number,e))}),[t]);const S=t=>{e?k($,t):O($,t)},k=(t,r)=>{const n=qf.formatNumber(t,r);e({number:n.replace(/[\s()]+/g,""),countryCode:r&&Gf(r.countryCode)})},O=(e,t)=>{x(qf.formatNumber(e,t)),w(t)};return r(jf,{ref:C,value:$,onChange:t=>{const r=t.target.value.replace(/[^0-9]/g,"");e?k(r,b):O(r,b)},allowClear:n&&!!$,onClear:()=>{a?a():x("")},onBlur:i,error:c,placeholder:g,addon:d?{type:"label",attributes:{value:Gf(b?.countryCode)}}:{type:"list",attributes:{placeholder:u,options:y,selectedOption:b,enableSearch:p,searchPlaceholder:h,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:Gf(e.countryCode)}),onSelectOption:S,onHideOptions:f,onShowOptions:m}},inputMode:"numeric",...v})},Qf=e=>e?e.replace("+",""):"",Gf=e=>e?e.includes("+")?e:`+${e}`:"",Xf=({selectedOptions:e,placeholders:n={from:"Select",to:"Select"},options:a,disabled:i,className:c,readOnly:d,error:u,"data-testid":h,id:p,enableSearch:f=!1,searchFunction:m,searchPlaceholder:g,valueExtractor:v,valueToStringFunction:y,listExtractor:b,displayValueExtractor:w,onSelectOption:$,listStyleWidth:x,onShowOptions:C,onHideOptions:S,onRetry:k,optionsLoadState:O={from:"success",to:"success"},optionTruncationType:D="middle",renderCustomSelectedOption:_,renderListItem:M,renderCustomCallToAction:F,...j})=>{const[B,E]=o(),[A,I]=o(),T=s(),N={from:s(),to:s()},[P,L]=o("none");l((()=>{E(e?.from),I(e?.to)}),[e]);const H=e=>t=>{t.stopPropagation(),t.preventDefault(),i||d||L("from"===e?"from":"to"===e&&B?"to":"from")},R=e=>{const t="from"===e?B:A;return w?w(t):v?v(t):t?.toString()},z=(e,t)=>{if("middle"===D){let r=0;return N[e]&&N[e].current&&(r=N[e].current.getBoundingClientRect().width),_c.truncateOneLine((e=>"string"==typeof e?e:y(e)||e.toString())(t),r,120,8)}return t},V=e=>{!e&&S&&S(),e&&C&&C()},W=e=>{const t="from"===e?B:A;return t?_?_(t):r(yf,{truncateType:D,children:z(e,R(e))}):r(bf,{truncateType:D,children:z(e,n[e])})},Y=e=>r(vf,{onClick:H(e),ref:N[e],children:W(e)});return t(wf,{show:"none"!==P,"data-testid":j["data-testid"],error:u&&!("none"!==P),disabled:i,readOnly:d,testId:h,onBlur:()=>{V(!1),L("none"),B&&A||(I(void 0),E(void 0))},className:c,children:[r(uf,{type:"button","data-testid":p||"selector",disabled:i,ref:T,onClick:H(),...j,children:t(ed,{currentActive:(()=>{switch(P){case"from":return"start";case"to":return"end";case"none":return P}})(),children:[Y("from"),Y("to")]})}),"none"!==P&&r(gf,{}),(()=>{if("none"===P)return null;const e=a[P];if(e&&e.length>0){const t="from"===P?B:A;return r(lf,{listItems:e,onSelectItem:(e,t)=>{return r=e,n=t,"from"===(a=P)?E(r):I(r),V(!1),T&&T.current.focus(),$&&$({[a]:r},n),void("from"===a?(I(void 0),L("to"),V(!0)):L("none"));var r,n,a},onDismiss:()=>(L("none"),V(!1),T&&T.current.focus(),void(B&&A||(I(void 0),E(void 0)))),valueExtractor:v,listExtractor:b,listStyleWidth:x,visible:!0,enableSearch:f,searchPlaceholder:g,searchFunction:m,"data-testid":`${P}-dropdown-list`,selectedItems:t?[t]:[],onRetry:k,itemsLoadState:O[P],itemTruncationType:D,renderListItem:M,renderCustomCallToAction:F})}return null})()]})},Kf=({selectedOption:e,placeholder:a="Select",options:i,disabled:c,error:d,className:u,"data-testid":h,id:p,enableSearch:f=!1,searchFunction:m,searchPlaceholder:g,valueExtractor:v,valueToStringFunction:y,listExtractor:b,displayValueExtractor:w,onSelectOption:$,listStyleWidth:x,onShowOptions:C,onHideOptions:S,onRetry:k,optionsLoadState:O="success",optionTruncationType:D="end",renderCustomSelectedOption:_,renderListItem:M,hideNoResultsDisplay:F,renderCustomCallToAction:j,...B})=>{const[E,A]=o(e),[I,T]=o(!1),N=s(),P=s();l((()=>{A(e)}),[e]);const L=(e,t)=>{A(e),T(!1),z(!1),N&&N.current.focus(),$&&$(e,t)},H=e=>{I&&(T(!1),z(!1)),e&&N&&N.current.focus()},R=e=>{if("middle"===D){let t=0;return P&&P.current&&(t=P.current.getBoundingClientRect().width),_c.truncateOneLine((e=>"string"==typeof e?e:y(e)||e.toString())(e),t,120,8)}return e},z=e=>{!e&&S&&S(),e&&C&&C()};return t(wf,{className:u,show:I,error:d&&!I,disabled:c,readOnly:B.readOnly,testId:h,onBlur:()=>{T(!1),z(!1)},children:[r(uf,{ref:N,type:"button","data-testid":p||"selector",disabled:c,onClick:e=>{e.preventDefault(),c||B.readOnly||(T(!I),z(!I))},...B,children:t(n,{children:[r(vf,{ref:P,children:E?_?_(E):r(yf,{truncateType:D,children:R(w?w(E):v?v(E):E.toString())}):r(bf,{truncateType:D,children:a})}),!B.readOnly&&r(ff,{expanded:I,children:r(mf,{})})]})}),I&&r(gf,{}),i&&i.length>0?r(lf,{listItems:i,onSelectItem:L,onDismiss:H,valueExtractor:v,listExtractor:b,listStyleWidth:x,visible:I,enableSearch:f,searchPlaceholder:g,searchFunction:m,"data-testid":"dropdown-list",selectedItems:E?[E]:[],onRetry:k,itemsLoadState:O,itemTruncationType:D,renderListItem:M,hideNoResultsDisplay:F,renderCustomCallToAction:j}):null]})},Jf=$(Nr.H6)`
    text-align: right;

    ${e=>{if(e.disabled)return x`
                color: ${Or.Neutral[4](e)};
            `}}
`,em=({value:e,maxLength:t,disabled:a,renderCustomCounter:s})=>{const[c,d]=o("");l((()=>{d(u(`${e||""}`))}),[e,t]);const u=e=>{if(s)return s(t,e.toString().length);{const r=t-e.toString().length;return r<=1?`${r} character left`:`${r.toLocaleString()} characters left`}};return r(n,{children:i.isValidElement(c)?c:r(Jf,{"data-testid":"counter-label",weight:"semibold",disabled:a,children:c})})},tm=$.div`
    display: flex;
    flex-direction: column;
`,rm=$.textarea`
    border: 1px solid ${Or.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${cn};

    ${Ir("Body","regular")}
    color: ${Or.Neutral[1]};
    background: ${Or.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${Or.Accent.Light[1]};
        box-shadow: ${Bc};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Or.Neutral[3]};
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
                background: ${Or.Neutral[6](e)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${Or.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?x`
                border: 1px solid ${Or.Validation.Red.Border(e)};

                :focus,
                :active {
                    border: 1px solid ${Or.Validation.Red.Border(e)};
                    box-shadow: ${Ec};
                }
            `:void 0}
`,nm=i.forwardRef((({value:e,disabled:t,error:n,rows:a=5,...i},o)=>r(rm,{ref:o,disabled:t,value:e,error:n,rows:a,...i})));i.forwardRef((({value:e,disabled:n,rows:a=5,onChange:i,...s},c)=>{const[d,u]=o(e);l((()=>{u(e)}),[e]);return t(tm,{children:[r(rm,{ref:c,disabled:n,value:d,rows:a||5,onChange:e=>{const t=e.target.value;s.maxLength&&t.length>s.maxLength||(u(t),e.target.value=t,i&&i(e))},...s}),s.maxLength&&r(em,{disabled:n,value:d,maxLength:s.maxLength,renderCustomCounter:s.renderCustomCounter})]})}));const am=$.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.25rem;
`,im=$.div`
    display: flex;
    flex: 1;
    margin-right: 0.75rem;
`,om=$(bn)`
    margin-top: 0;
`,sm=i.forwardRef(((e,n)=>{const{label:a,value:i,errorMessage:s,id:c="form-textarea","data-error-testid":d,"data-testid":u,onChange:h,...p}=e,[f,m]=o(i);l((()=>{m(i)}),[i]);return t(Cn,{id:c,label:a,disabled:p.disabled,children:[r(nm,{id:`${c}-base`,"data-testid":u||c,value:f,error:!!s,onChange:e=>{const t=e.target.value;p.maxLength&&t.length>p.maxLength||(m(t),e.target.value=t,h&&h(e))},ref:n,...p}),t(am,{children:[s&&r(im,{children:r(om,{weight:"semibold","data-testid":d||(c?`${c}-error-message`:"error-message"),children:s})}),p.maxLength&&r(em,{disabled:p.disabled,value:f,maxLength:p.maxLength,renderCustomCounter:p.renderCustomCounter})]})]})}));var lm,cm={};Object.defineProperty(cm,"__esModule",{value:!0});var dm=e;const um=e=>dm.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:dm.jsx("path",{d:"M17.7279 14.2091C17.5059 14.4311 17.2492 14.5421 16.9579 14.5421C16.6659 14.5421 16.4089 14.4311 16.1869 14.2091L10.1659 8.18812L4.12389 14.2301C3.91589 14.4381 3.66589 14.5421 3.37389 14.5421C3.08256 14.5421 2.82589 14.4311 2.60389 14.2091C2.39523 14.0005 2.29089 13.7468 2.29089 13.4481C2.29089 13.1495 2.39523 12.8961 2.60389 12.6881L9.54089 5.75012C9.63823 5.65346 9.73889 5.58412 9.84289 5.54212C9.94689 5.50079 10.0546 5.48012 10.1659 5.48012C10.2772 5.48012 10.3849 5.50079 10.4889 5.54212C10.5929 5.58412 10.6936 5.65346 10.7909 5.75012L17.7489 12.7091C17.9716 12.9311 18.0759 13.1845 18.0619 13.4691C18.0479 13.7538 17.9366 14.0005 17.7279 14.2091Z",fill:"currentColor"})});var hm,pm;um.displayName="ChevronUpIcon",lm=cm.ChevronUpIcon=um,function(e){e.AM="AM",e.PM="PM"}(hm||(hm={})),function(e){e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:hm.AM};if(!t)return r;try{if("24hr"===e){const n=gm(t,e);r.minute=_c.padValue(n.minute);const a=parseInt(n.hour);0===Math.floor(a/12)?(r.period=hm.AM,r.hour=0===a?"12":_c.padValue(a.toString())):(r.period=hm.PM,r.hour=12===a?a.toString():_c.padValue((a-12).toString()))}else{const n=gm(t,e);r.hour=_c.padValue(n.hour),r.minute=_c.padValue(n.minute),r.period="am"===n.period.toLowerCase()?hm.AM:hm.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?_c.padValue("0"):"55";const n=Math.floor(r/5),a=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return _c.padValue((5*a).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?_c.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?_c.padValue(n.toString()):13===n?_c.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===hm.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return _c.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const r=gm(e,t),n=_c.padValue(r.hour);let a=`${n}:${_c.padValue(r.minute)}`;return"12hr"===t?(a+=r.period.toLowerCase(),a):a}catch(e){return""}}}(pm||(pm={}));const fm=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},mm=e=>{const t=parseInt(e);return t>=0&&t<=59},gm=(e,t)=>{const r=e.split(":"),n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!fm(r[0],t)||!mm(e)||"am"!==(a=i).toLowerCase()&&"pm"!==a.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!fm(r[0],t)||!mm(r[1]))throw n;return{hour:r[0],minute:r[1]};var a},vm=$.div`
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
                        border-color: ${Or.Validation.Red.Icon};
                        background: ${Or.Neutral[8]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Or.Shadow.Red};
                        }
                    `:e.$disabled?x`
                        border-color: transparent;
                    `:x`
                        border-color: transparent;

                        :hover {
                            background: ${Or.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?x`
                        background: ${Or.Neutral[6]};
                        border-color: ${Or.Neutral[5]};
                    `:e.$disabled&&e.$selected?x`
                        background: ${Or.Neutral[6]};
                        border-color: ${Or.Neutral[4]};
                    `:e.$error?x`
                        background: ${Or.Neutral[8]};
                        border-color: ${Or.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Or.Shadow.Red};
                        }
                    `:e.$selected?x`
                        background: ${Or.Accent.Light[5]};
                        border-color: ${Or.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Or.Shadow.Accent};
                        }
                    `:x`
                        background: ${Or.Neutral[8]};
                        border-color: ${Or.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Or.Shadow.Accent};
                            border-color: ${Or.Accent.Light[1]};
                        }
                    `}
`,ym=$.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
`,bm=$.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
`,wm=$.label`
    ${e=>e.$selected&&!e.$indicator?x`
                ${Ir("H4","semibold")}
            `:x`
                ${Ir("H4","regular")}
            `}

    color: ${Or.Neutral[1]};

    ${e=>e.$disabled?x`
                color: ${Or.Neutral[3]};
            `:e.$selected?x`
                color: ${Or.Primary};
            `:void 0}
`,$m=$.div`
    ${Ir("BodySmall","regular")}
    margin-top: 0.5rem;

    strong,
    b {
        ${Ar("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?x`
                color: ${Or.Neutral[3]};
            `:e.$selected?x`
                color: ${Or.Primary};
            `:x`
                color: ${Or.Neutral[1]};
            `}
`;var xm,Cm={};Object.defineProperty(Cm,"__esModule",{value:!0});var Sm=e;const km=e=>Sm.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Sm.jsx("path",{d:"M10 18C8.90267 18 7.868 17.7917 6.896 17.375C5.924 16.9583 5.07333 16.3853 4.344 15.656C3.61467 14.9267 3.04167 14.076 2.625 13.104C2.20833 12.132 2 11.0973 2 10C2 8.88867 2.20833 7.85033 2.625 6.885C3.04167 5.92033 3.61467 5.07333 4.344 4.344C5.07333 3.61467 5.924 3.04167 6.896 2.625C7.868 2.20833 8.90267 2 10 2C11.1113 2 12.1497 2.20833 13.115 2.625C14.0797 3.04167 14.9267 3.61467 15.656 4.344C16.3853 5.07333 16.9583 5.92033 17.375 6.885C17.7917 7.85033 18 8.88867 18 10C18 11.0973 17.7917 12.132 17.375 13.104C16.9583 14.076 16.3853 14.9267 15.656 15.656C14.9267 16.3853 14.0797 16.9583 13.115 17.375C12.1497 17.7917 11.1113 18 10 18ZM10 16.5C11.8053 16.5 13.34 15.868 14.604 14.604C15.868 13.34 16.5 11.8053 16.5 10C16.5 8.19467 15.868 6.66 14.604 5.396C13.34 4.132 11.8053 3.5 10 3.5C8.19467 3.5 6.66 4.132 5.396 5.396C4.132 6.66 3.5 8.19467 3.5 10C3.5 11.8053 4.132 13.34 5.396 14.604C6.66 15.868 8.19467 16.5 10 16.5Z",fill:"currentColor"})});km.displayName="CircleIcon",xm=Cm.CircleIcon=km;var Om,Dm={};Object.defineProperty(Dm,"__esModule",{value:!0});var _m=e;const Mm=e=>_m.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:_m.jsx("path",{d:"M10 14C11.1113 14 12.0557 13.611 12.833 12.833C13.611 12.0557 14 11.1113 14 10C14 8.88867 13.611 7.94433 12.833 7.167C12.0557 6.389 11.1113 6 10 6C8.88867 6 7.94433 6.389 7.167 7.167C6.389 7.94433 6 8.88867 6 10C6 11.1113 6.389 12.0557 7.167 12.833C7.94433 13.611 8.88867 14 10 14ZM10 18C8.90267 18 7.868 17.7917 6.896 17.375C5.924 16.9583 5.07333 16.3853 4.344 15.656C3.61467 14.9267 3.04167 14.076 2.625 13.104C2.20833 12.132 2 11.0973 2 10C2 8.88867 2.20833 7.85033 2.625 6.885C3.04167 5.92033 3.61467 5.07333 4.344 4.344C5.07333 3.61467 5.924 3.04167 6.896 2.625C7.868 2.20833 8.90267 2 10 2C11.1113 2 12.1497 2.20833 13.115 2.625C14.0797 3.04167 14.9267 3.61467 15.656 4.344C16.3853 5.07333 16.9583 5.92033 17.375 6.885C17.7917 7.85033 18 8.88867 18 10C18 11.0973 17.7917 12.132 17.375 13.104C16.9583 14.076 16.3853 14.9267 15.656 15.656C14.9267 16.3853 14.0797 16.9583 13.115 17.375C12.1497 17.7917 11.1113 18 10 18ZM10 16.5C11.8053 16.5 13.34 15.868 14.604 14.604C15.868 13.34 16.5 11.8053 16.5 10C16.5 8.19467 15.868 6.66 14.604 5.396C13.34 4.132 11.8053 3.5 10 3.5C8.19467 3.5 6.66 4.132 5.396 5.396C4.132 6.66 3.5 8.19467 3.5 10C3.5 11.8053 4.132 13.34 5.396 14.604C6.66 15.868 8.19467 16.5 10 16.5Z",fill:"currentColor"})});Mm.displayName="CircleDotIcon",Om=Dm.CircleDotIcon=Mm;var Fm,jm={};Object.defineProperty(jm,"__esModule",{value:!0});var Bm=e;const Em=e=>Bm.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Bm.jsx("path",{d:"M4.5 17C4.08333 17 3.72933 16.854 3.438 16.562C3.146 16.2707 3 15.9167 3 15.5V4.5C3 4.08333 3.146 3.72933 3.438 3.438C3.72933 3.146 4.08333 3 4.5 3H15.5C15.9167 3 16.2707 3.146 16.562 3.438C16.854 3.72933 17 4.08333 17 4.5V15.5C17 15.9167 16.854 16.2707 16.562 16.562C16.2707 16.854 15.9167 17 15.5 17H4.5ZM4.5 15.5H15.5V4.5H4.5V15.5Z",fill:"currentColor"})});Em.displayName="SquareIcon",Fm=jm.SquareIcon=Em;var Am,Im={};Object.defineProperty(Im,"__esModule",{value:!0});var Tm=e;const Nm=e=>Tm.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Tm.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H15.75C16.236 2.5 16.6493 2.67 16.99 3.01C17.33 3.35067 17.5 3.764 17.5 4.25V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM8.875 13.188C8.98633 13.188 9.094 13.167 9.198 13.125C9.302 13.083 9.40267 13.0137 9.5 12.917L14.125 8.292C14.2917 8.12533 14.375 7.924 14.375 7.688C14.375 7.45133 14.2917 7.24267 14.125 7.062C13.9443 6.89533 13.736 6.812 13.5 6.812C13.264 6.812 13.0627 6.89533 12.896 7.062L8.875 11.083L7.125 9.333C6.95833 9.16633 6.757 9.083 6.521 9.083C6.285 9.083 6.08367 9.16633 5.917 9.333C5.73633 9.51367 5.646 9.722 5.646 9.958C5.646 10.194 5.73633 10.3953 5.917 10.562L8.25 12.917C8.34733 13.0137 8.448 13.083 8.552 13.125C8.656 13.167 8.76367 13.188 8.875 13.188Z",fill:"currentColor"})});Nm.displayName="SquareTickFillIcon",Am=Im.SquareTickFillIcon=Nm;const Pm=$.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?x`
                    color: ${Or.Primary};
                `:x`
                    color: ${Or.Neutral[4]};
                `};
    }
`,Lm=({type:e,active:t=!1,disabled:n,className:a})=>{let i;switch(e){case"checkbox":i=r(t?Am:Fm,{});break;case"radio":i=r(t?Om:xm,{});break;case"tick":i=r(Mp,{});break;case"cross":i=r(Jr,{});break;default:i=null}return r(Pm,{className:a,$active:t,disabled:n,children:i})},Hm=$(il.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Or.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${Qr.mobileS} {
        max-width: 100%;
    }
`,Rm=$.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,zm=$.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Qr.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,Vm=$.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${Qr.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,Wm=$.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${Qr.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,Ym=$.div`
    display: flex;
    gap: 0.5rem;

    ${Qr.tablet} {
        flex-direction: column;
    }

    ${Qr.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,Um=$.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Qr.mobileS} {
        width: 6rem;
    }
`,qm=$(an)`
    width: 5rem;
    padding: 1rem 0;
    color: ${Or.Neutral[3]};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Or.Primary};
    }
`,Zm=$(Nr.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${Qr.tablet} {
        margin: 0;
    }

    ${Qr.mobileS} {
        margin: 0 0.25rem;
    }
`,Qm=$(Ic)`
    border-radius: ${"4px"};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${Or.Neutral[5]};
    background: ${Or.Neutral[8]};

    :focus,
    :active {
        border: 1px solid ${Or.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px ${Or.Shadow.Accent};
    }

    :focus::placeholder {
        color: transparent;
    }

    ${Qr.mobileS} {
        width: 100%;
    }
`,Gm=$((({type:e="checkbox",indicator:n,checked:a,styleType:i="default",children:c,subLabel:d,disabled:u,error:h,name:p,id:f,className:m,"data-testid":g,onChange:v})=>{const[y,b]=o(a),[w]=o(Dc.generate()),$=f?`${f}-input`:`tg-${w}-input`,x=s();l((()=>{b(a)}),[a]);return t(vm,{$selected:y,$disabled:u,className:m,$styleType:i,$error:h,$indicator:n,id:f,"data-testid":g,children:[n&&(()=>{let t;switch(e){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=e}return r(Lm,{type:t,active:y,disabled:u})})(),r(ym,{ref:x,name:p,id:$,type:"checkbox"===e?"checkbox":"radio","data-testid":"toggle-input",disabled:u,onChange:t=>{if(!u){if(v)return void v(t);switch(e){case"checkbox":b((e=>!e));break;case"radio":case"yes":case"no":y||b(!0)}}},checked:y}),t(bm,{children:[r(wm,{htmlFor:$,$selected:y,$indicator:n,$disabled:u,"data-testid":"toggle-label",children:c}),d&&(()=>{if(!d)return null;let e;return"string"==typeof d?e=d:"function"==typeof d&&(e=d()),r($m,{$disabled:u,$selected:y,children:e})})()]})]})}))`
    min-width: 5rem;
    flex: 1;
`,Xm=$(zl.Small)`
    width: 7rem;

    ${Qr.mobileL} {
        flex: 1;
    }

    ${Qr.mobileS} {
        width: 100%;
    }
`;var Km,Jm,eg;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(Km||(Km={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(Jm||(Jm={})),function(e){e.AM="am",e.PM="pm"}(eg||(eg={}));const tg=({id:e,value:n,show:a,format:i,onChange:c,onCancel:d})=>{const u=pm.getTimeValues(i,n),[h,p]=o(u.hour),[f,m]=o(u.minute),[v,y]=o(u.period),b=s(),w=s(),$=ya();l((()=>{if(a&&b.current&&b.current.focus(),a){const{hour:e,minute:t,period:r}=pm.getTimeValues(i,n);p(e),m(t),y(r)}}),[a,n,i]),l((()=>{const e=b.current,t=w.current;return e&&e.addEventListener("keydown",x),t&&t.addEventListener("keydown",x),()=>{e&&e.removeEventListener("keydown",x),t&&t.removeEventListener("keydown",x)}}),[]);const x=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},C=g((e=>{switch(e.currentTarget.name){case Km.MINUTE_UP:m(pm.updateMinutes(f,"add"));break;case Km.MINUTE_DOWN:m(pm.updateMinutes(f,"minus"));break;case Km.HOUR_UP:p(pm.updateHours(h,"add"));break;case Km.HOUR_DOWN:p(pm.updateHours(h,"minus"))}}),[h,f]),S=e=>{e.target.select()},k=e=>{const t=e.target.value;switch(e.target.name){case Jm.HOUR:t.length<=2&&p(t);break;case Jm.MINUTE:t.length<=2&&m(t)}},O=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case Jm.HOUR:{const r=t>23||t<0?u.hour:pm.convertHourTo12HourFormat(e.target.value);p(r);break}case Jm.MINUTE:{const r=t>59||t<0?u.minute:e.target.value;m(_c.padValue(r));break}}},D=e=>{switch(e.target.name){case eg.AM:y(hm.AM);break;case eg.PM:y(hm.PM)}},_=t=>e?`${e}-${t}`:t,M=Ts({height:a?$.height+32:0});return r(Hm,{"data-testid":"animated-dropdown-wrapper",style:M,children:t(Rm,{ref:$.ref,"data-testid":_("timepicker-dropdown"),inert:a?void 0:"",children:[t(zm,{children:[t(Wm,{children:[t(Um,{children:[r(qm,{"aria-label":"increase hour",name:Km.HOUR_UP,tabIndex:-1,onClick:C,"data-testid":_("hour-increment-button"),children:r(lm,{})}),r(Qm,{"aria-label":"hour",type:"number",name:Jm.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:b,value:h,onFocus:S,onChange:k,onBlur:O,min:1,max:12,placeholder:"HH","data-testid":_("hour-input")}),r(qm,{"aria-label":"decrease hour",name:Km.HOUR_DOWN,tabIndex:-1,onClick:C,"data-testid":_("hour-decrement-button"),children:r(xl,{})})]}),r(Zm,{children:":"}),t(Um,{children:[r(qm,{"aria-label":"increase minute",name:Km.MINUTE_UP,tabIndex:-1,onClick:C,"data-testid":_("minute-increment-button"),children:r(lm,{})}),r(Qm,{"aria-label":"minute",type:"number",name:Jm.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:f,onChange:k,onBlur:O,onFocus:S,min:0,max:59,placeholder:"MM","data-testid":_("minute-input")}),r(qm,{"aria-label":"decrease minute",name:Km.MINUTE_DOWN,tabIndex:-1,onClick:C,"data-testid":_("minute-decrement-button"),children:r(xl,{})})]})]}),t(Ym,{children:[r(Gm,{checked:v===hm.AM,name:eg.AM,type:"radio",onChange:D,"data-testid":_("am-toggle"),"aria-label":"AM",children:"AM"}),r(Gm,{checked:v===hm.PM,name:eg.PM,type:"radio",onChange:D,"data-testid":_("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),t(Vm,{children:[r(Xm,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:d,"data-testid":_("cancel-button"),children:"Cancel"}),r(Xm,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===i?pm.convertTo24HourFormat({hour:h,minute:f,period:v}):`${h}:${f}${v}`,c(e)},disabled:""===h||""===f,"data-testid":_("confirm-button"),children:"Done"})]})]})})},rg=$.div`
    position: relative;
`,ng=$(Ac)`
    height: 3rem;
    gap: 0.5rem;
`,ag=$(Ic)`
    display: block;
    width: 100%;
    flex: 1;
`,ig=({id:e,disabled:n=!1,error:a,value:i,format:c="24hr",readOnly:d,onChange:u,onBlur:h,...p})=>{const[f,m]=o(!1),[g,v]=o(!1),[y,b]=o(""),[w,$]=o(""),x=s();l((()=>{i&&(b(i.start),$(i.end))}),[]),cf("mousedown",(function(e){n||k(e)}),document),cf("keyup",(function(e){if("Tab"===e.code)k(e)}),document);const C=()=>{S()},S=()=>{m(!1),v(!1),h&&h()},k=e=>{x&&!x.current.contains(e.target)&&(g||f)&&S()};return r(rg,{ref:x,id:e,...p,children:t(ng,{$disabled:n,$error:a,$readOnly:d,children:[t(ed,{error:a,currentActive:f?"start":g?"end":"none",children:[r(ag,{onFocus:()=>{n||d||f||(v(!1),m(!0))},readOnly:!0,placeholder:"From",value:pm.formatDisplayValue(y,c),disabled:n,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"}),r(ag,{onFocus:()=>{n||d||g||(m(!1),v(!0))},readOnly:!0,placeholder:"To",value:pm.formatDisplayValue(w,c),disabled:n,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),r(tg,{id:e,show:f,value:y,format:c,onCancel:C,onChange:e=>{m(!1),v(!0),b(e);u&&u({start:e,end:w})}}),r(tg,{id:e,show:g,value:w,format:c,onCancel:C,onChange:e=>{v(!1),$(e),""==y&&m(!0);u&&u({start:y,end:e})}})]})})};$.div`
    position: relative;
`;const og=$(Ic)`
    height: 3rem;
`,sg=({id:e,disabled:n=!1,readOnly:a=!1,error:i,value:l,placeholder:c,format:d="24hr",onChange:u,onBlur:h,...p})=>{const[f,m]=o(!1),v=s();cf("mousedown",(function(e){n||a||w(e)}),document),cf("keyup",(function(e){if("Tab"===e.code)w(e)}),document);const y=()=>{n||a||f||m(!0)};const b=()=>{m(!1),h&&h()},w=e=>{v&&!v.current.contains(e.target)&&f&&b()},$=g((()=>"12hr"===d?"HH:MMam":"HH:MM"),[d,c]);return t(Ac,{ref:v,id:e,$readOnly:a,$disabled:n,$error:i,...p,children:[r(og,{onFocus:y,focused:f,readOnly:!0,placeholder:c||$(),value:pm.formatDisplayValue(l,d),disabled:n,"data-testid":e?`${e}-timepicker-selector`:"timepicker-selector"}),r(tg,{id:e,show:f,value:l,format:d,onCancel:()=>{b()},onChange:e=>{m(!1),u&&u(e)}})]})},lg=$(pd)`
    margin-right: 0.25rem;
`,cg=$(cd)`
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
`,dg=$(cg)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,ug=$(Nr.Body)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return x`
                color: ${Or.Neutral[3]};
            `}}
`,hg=$.div`
    display: flex;
`,pg=$(Nr.Body)`
    ${e=>{if(e.$inactive)return x`
                color: ${Or.Neutral[3]};
            `}}
`,fg=({disabled:e,error:a,value:i,onChange:c,onBlur:d,onChangeRaw:u,onBlurRaw:h,readOnly:p,placeholder:f="00-8888",...m})=>{const[g,v]=o(""),[y,b]=o(""),[w,$]=o("none"),x=s(null),C=s(null),S=s(null),k=s(g),O=s(y),D=s(w),_=e=>{k.current=e,v(e)},M=e=>{O.current=e,b(e)},F=e=>{D.current=e,$(e)};l((()=>(document.addEventListener("mousedown",j),x.current&&x.current.addEventListener("keydown",B),()=>{document.removeEventListener("mousedown",j),x.current&&x.current.removeEventListener("keydown",B)})),[w]),l((()=>{"floor"===w&&3===g.length&&S.current&&S.current.focus()}),[g]),l((()=>{P(i)}),[i]);const j=t=>{e||p||x&&x.current.contains(t.target)||"none"!==D.current&&(F("none"),H())},B=e=>{"unit"===e.target.name&&"Tab"===e.code&&(F("none"),H())},E=e=>{F(e.target.name),e.target.select()},A=e=>{const t=e.target.name,r=e.target.value;"floor"===t?_(N(r)):M(N(r))},I=e=>{const t=e.target.name,r=e.target.value.toLocaleUpperCase().replace(/[^0-9A-Za-z]/,"");"floor"===t?(_(r),L(r,t)):(M(r),L(r,t))},T=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===w&&0===y.length&&C.current.focus()},N=e=>/^[0-9]$/.test(e)?_c.padValue(e,!0):e.toLocaleUpperCase(),P=e=>{if(e!==mg)if(void 0===e||0===e.length)_(""),M("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];_("floor"===w?e:N(e)),M("unit"===w?r:N(r))}}},L=(e,t)=>{if(!c&&!u)return;const r={floor:k.current,unit:O.current};if(r[t]=e,c){const e=R(r);c(e)}u&&u([r.floor,r.unit])},H=()=>{if(!d&&!h)return;const e={floor:N(k.current),unit:N(O.current)};if(d){const t=R(e);d(t)}h&&h([e.floor,e.unit])},R=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":mg},z=e=>e.split("-");return t(Ac,{ref:x,onClick:()=>{"none"===w&&C.current&&C.current.focus()},$disabled:e,$error:a,$readOnly:p,"data-testid":m["data-testid"],children:[r(lg,{"data-testid":"addon",disabled:e,$readOnly:p,children:"#"}),p&&i?(()=>{const e=i.split("-");return t(hg,{children:[r(pg,{children:e[0]}),r(ug,{children:"-"}),r(pg,{children:e[1]})]})})():t(n,{children:[r(cg,{name:"floor",maxLength:3,value:g,ref:C,onFocus:E,onBlur:A,onChange:I,disabled:e,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==w||p?z(f)[0]:""}),r(ug,{$inactive:0===g.length,children:"-"}),r(dg,{name:"unit",maxLength:5,value:y,ref:S,onFocus:E,onBlur:A,onChange:I,onKeyDown:T,disabled:e,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==w||p?z(f)[1]:""})]})]})},mg="Invalid unit number",gg={DateInput:({label:e,errorMessage:t,id:n="form-date-input","data-error-testid":a,"data-testid":i,...o})=>r(Cn,{id:n,label:e,errorMessage:t,"data-error-testid":a,disabled:o.disabled,children:r(qc,{id:`${n}-base`,"data-testid":i||n,error:!!t,...o})}),DateRangeInput:({label:e,errorMessage:t,id:n="form-date-range-input","data-error-testid":a,"data-testid":i,...o})=>r(Cn,{id:n,label:e,errorMessage:t,"data-error-testid":a,disabled:o.disabled,children:r(id,{id:`${n}-base`,"data-testid":i||n,error:!!t,...o})}),Input:dd,InputGroup:Bf,Label:$n,MultiSelect:({label:e,errorMessage:t,id:n="form-multi-select","data-error-testid":a,"data-testid":i,enableSearch:o=!1,...s})=>r(Cn,{id:n,label:e,errorMessage:t,"data-error-testid":a,disabled:s.disabled,children:r(Ef,{id:`${n}-base`,"data-testid":i||n,error:!!t,enableSearch:o,...s})}),Select:({label:e,errorMessage:t,id:n="form-select","data-error-testid":a,"data-testid":i,enableSearch:o=!1,...s})=>r(Cn,{id:n,label:e,errorMessage:t,"data-error-testid":a,disabled:s.disabled,children:r(Kf,{id:`${n}-base`,"data-testid":i||n,error:!!t,enableSearch:o,...s})}),RangeSelect:({label:e,errorMessage:t,id:n="form-select","data-error-testid":a,"data-testid":i,enableSearch:o=!1,...s})=>r(Cn,{id:n,label:e,errorMessage:t,"data-error-testid":a,disabled:s.disabled,children:r(Xf,{id:`${n}-base`,"data-testid":i||n,error:!!t,enableSearch:o,...s})}),Textarea:sm,Timepicker:({label:e,errorMessage:t,id:n="form-timepicker","data-error-testid":a,"data-testid":i,...o})=>r(Cn,{id:n,label:e,errorMessage:t,disabled:o.disabled,"data-error-testid":a,children:r(sg,{id:`${n}-base`,"data-testid":i||n,error:!!t,...o})}),TimeRangePicker:({label:e,errorMessage:t,id:n="form-timepicker","data-error-testid":a,"data-testid":i,...o})=>r(Cn,{id:n,label:e,errorMessage:t,disabled:o.disabled,"data-error-testid":a,children:r(ig,{id:`${n}-base`,"data-testid":i||n,error:!!t,...o})}),CustomField:({id:e="form-custom-field","data-error-testid":t,children:n,...a})=>r(Cn,{id:e,"data-error-testid":t,...a,children:n}),UnitNumberInput:({label:e,errorMessage:t,id:n="form-unit-number-input","data-error-testid":a,"data-testid":i,...o})=>r(Cn,{id:n,label:e,errorMessage:t,"data-error-testid":a,disabled:o.disabled,children:r(fg,{id:`${n}-base`,"data-testid":i||n,error:!!t,...o})}),PhoneNumberInput:({label:e,errorMessage:t,id:n="form-phone-number-input","data-error-testid":a,"data-testid":i,...o})=>r(Cn,{id:n,label:e,errorMessage:t,"data-error-testid":a,disabled:o.disabled,children:r(Zf,{id:`${n}-base`,"data-testid":i||n,error:!!t,...o})})};export{gg as Form};
//# sourceMappingURL=index.js.map
