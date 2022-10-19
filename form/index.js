import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{useState as i,useRef as a,useEffect as s,forwardRef as l,useCallback as c,useContext as d,useMemo as u,cloneElement as h,isValidElement as p,createRef as f,PureComponent as m,useLayoutEffect as g}from"react";import y,{css as b,keyframes as v}from"styled-components";import w,{unstable_batchedUpdates as x,findDOMNode as $}from"react-dom";var _,S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},k={exports:{}};_=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
  !*** ./node_modules/css-mediaquery/index.js ***!
  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var o=e.expressions.every((function(e){var r=e.feature,n=e.modifier,o=e.value,i=t[r];if(!i)return!1;switch(r){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=d(o),i=d(i);break;case"resolution":o=c(o),i=c(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=l(o),i=l(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(n){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!r||!o&&r}))},t.parse=s;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),i=t[1],a=t[2],s=t[3]||"",l={};return l.inverse=!!i&&"not"===i.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(o);return{modifier:r[1],feature:r[2],value:t[2]}})),l}))}function l(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function d(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=/[A-Z]/g,o=/^ms-/,i={};function a(e){return"-"+e.toLowerCase()}const s=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(n,a);return i[e]=o.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
  !*** ./node_modules/matchmediaquery/index.js ***!
  \***********************************************/(e,t,r)=>{var n=r(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,o="undefined"!=typeof window?window.matchMedia:null;function i(e,t,r){var i=this;if(o&&!r){var a=o.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=n(e,t),this.media=e;function s(e){i.matches=e.matches,i.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,t,r){return new i(e,t,r)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/e=>{
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,s,l=o(e),c=1;c<arguments.length;c++){for(var d in a=Object(arguments[c]))r.call(a,d)&&(l[d]=a[d]);if(t){s=t(a);for(var u=0;u<s.length;u++)n.call(a,s[u])&&(l[s[u]]=a[s[u]])}}return l}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/(e,t,r)=>{var n,o=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,r,s,l){for(var c in e)if(a(e,c)){var d;try{if("function"!=typeof e[c]){var u=Error((s||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=e[c](t,c,s,r,null,o)}catch(e){d=e}if(!d||d instanceof Error||n((s||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in i)){i[d.message]=!0;var h=l?l():"";n("Failed "+r+" type: "+d.message+(null!=h?h:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/(e,t,r)=>{var n,o=r(/*! react-is */"./node_modules/react-is/index.js"),i=r(/*! object-assign */"./node_modules/object-assign/index.js"),a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,d="<<anonymous>>",u={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:f(c),arrayOf:function(e){return f((function(t,r,n,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new p("Invalid "+o+" `"+i+"` of type `"+b(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,n,o,i+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:f((function(t,r,n,o,i){var a=t[r];return e(a)?null:new p("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:f((function(e,t,r,n,i){var a=e[t];return o.isValidElementType(a)?null:new p("Invalid "+n+" `"+i+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return f((function(t,r,n,o,i){if(!(t[r]instanceof e)){var a=e.name||d;return new p("Invalid "+o+" `"+i+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:f((function(e,t,r,n,o){return y(e[t])?null:new p("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return f((function(t,r,n,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=b(l);if("object"!==c)return new p("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,n,o,i+"."+d,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){if(!Array.isArray(e))return n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c;function t(t,r,n,o,i){for(var a=t[r],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===v(t)?String(t):t}));return new p("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")}return f(t)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(r)+" at index "+t+"."),c}return f((function(t,r,n,o,i){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,r,n,o,i,a);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new p("Invalid "+o+" `"+i+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return f((function(t,r,n,o,i){var s=t[r],l=b(s);if("object"!==l)return new p("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return g(n,o,i,c,v(d));var u=d(s,c,n,o,i+"."+c,a);if(u)return u}return null}))},exact:function(e){return f((function(t,r,n,o,l){var c=t[r],d=b(c);if("object"!==d)return new p("Invalid "+o+" `"+l+"` of type `"+d+"` supplied to `"+n+"`, expected `object`.");var u=i({},t[r],e);for(var h in u){var f=e[h];if(s(e,h)&&"function"!=typeof f)return g(n,o,l,h,v(f));if(!f)return new p("Invalid "+o+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=f(c,h,n,o,l+"."+h,a);if(m)return m}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function f(e){var r={},o=0;function i(i,s,l,c,u,h,f){if(c=c||d,h=h||l,f!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!r[g]&&o<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[g]=!0,o++)}}return null==s[l]?i?null===s[l]?new p("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,h)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function m(e){return f((function(t,r,n,o,i,a){var s=t[r];return b(s)!==e?new p("Invalid "+o+" `"+i+"` of type `"+v(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function g(e,t,r,n,o){return new p((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function y(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(y);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var o,i=n.call(t);if(n!==t.entries){for(;!(o=i.next()).done;)if(!y(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!y(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function v(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=v(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,u.checkPropTypes=l,u.resetWarningCache=l.resetWarningCache,u.PropTypes=u,u}},"./node_modules/prop-types/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var p=e.type;switch(p){case c:case d:case o:case a:case i:case h:return p;default:var g=p&&p.$$typeof;switch(g){case l:case u:case m:case f:case s:return g;default:return t}}case n:return t}}}var x=c,$=d,_=l,S=s,k=r,O=u,j=o,C=m,E=f,F=n,P=a,I=i,N=h,T=!1;function M(e){return w(e)===d}t.AsyncMode=x,t.ConcurrentMode=$,t.ContextConsumer=_,t.ContextProvider=S,t.Element=k,t.ForwardRef=O,t.Fragment=j,t.Lazy=C,t.Memo=E,t.Portal=F,t.Profiler=P,t.StrictMode=I,t.Suspense=N,t.isAsyncMode=function(e){return T||(T=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),M(e)||w(e)===c},t.isConcurrentMode=M,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===u},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===f},t.isPortal=function(e){return w(e)===n},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===d||e===a||e===i||e===h||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===f||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===y||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/(e,t,r)=>{e.exports=r(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
  \******************************************************/(e,t,r)=>{function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),o=r.length;if(n.length!==o)return!1;for(var i=0;i<o;i++){var a=r[i];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:()=>o,shallowEqualObjects:()=>n})},"./src/Component.ts":
/*!**************************!*\
  !*** ./src/Component.ts ***!
  \**************************/function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,o=e.onChange,a=n(e,["children","device","onChange"]),s=(0,i.default)(a,r,o);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":
/*!************************!*\
  !*** ./src/Context.ts ***!
  \************************/(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r(/*! react */"react").createContext)(void 0);t.default=n},"./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=n(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=o.default;var i=n(r(/*! ./Component */"./src/Component.ts"));t.default=i.default;var a=n(r(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=a.default;var s=n(r(/*! ./Context */"./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
  !*** ./src/mediaQuery.ts ***!
  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},d=o(c,["type"]),u=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},d),h=n(n({},l),u);t.default={all:h,types:l,matchers:c,features:u}},"./src/toQuery.ts":
/*!************************!*\
  !*** ./src/toQuery.ts ***!
  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,o.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
  !*** ./src/useMediaQuery.ts ***!
  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(/*! react */"react"),i=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),c=n(r(/*! ./Context */"./src/Context.ts")),d=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,a.default)(r)]=e[r],t}),{})},u=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,o.useState)(t),n=r[0],i=r[1];return(0,o.useEffect)((function(){var e=t();n!==e&&i(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,o.useContext)(c.default),r=function(){return d(e)||d(t)},n=(0,o.useState)(r),i=n[0],a=n[1];return(0,o.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=h(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,i.default)(e,t||{},!!t)},n=(0,o.useState)(r),a=n[0],s=n[1],l=u();return(0,o.useEffect)((function(){if(l){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,n),p=function(e){var t=(0,o.useState)(e.matches),r=t[0],n=t[1];return(0,o.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),f=u();return(0,o.useEffect)((function(){f&&r&&r(p)}),[p]),(0,o.useEffect)((function(){return function(){l&&l.dispose()}}),[]),p}},react:
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})(),k.exports=_(o);var O=Array.isArray,j="object"==typeof S&&S&&S.Object===Object&&S,C=j,E="object"==typeof self&&self&&self.Object===Object&&self,F=C||E||Function("return this")(),P=F.Symbol,I=P,N=Object.prototype,T=N.hasOwnProperty,M=N.toString,A=I?I.toStringTag:void 0;var z=function(e){var t=T.call(e,A),r=e[A];try{e[A]=void 0;var n=!0}catch(e){}var o=M.call(e);return n&&(t?e[A]=r:delete e[A]),o},B=Object.prototype.toString;var D=z,L=function(e){return B.call(e)},R=P?P.toStringTag:void 0;var H=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":R&&R in Object(e)?D(e):L(e)};var V=function(e){return null!=e&&"object"==typeof e},W=H,U=V;var q=function(e){return"symbol"==typeof e||U(e)&&"[object Symbol]"==W(e)},Q=O,X=q,G=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Y=/^\w*$/;var Z=function(e,t){if(Q(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!X(e))||(Y.test(e)||!G.test(e)||null!=t&&e in Object(t))};var J=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},K=H,ee=J;var te,re=function(e){if(!ee(e))return!1;var t=K(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ne=F["__core-js_shared__"],oe=(te=/[^.]+$/.exec(ne&&ne.keys&&ne.keys.IE_PROTO||""))?"Symbol(src)_1."+te:"";var ie=function(e){return!!oe&&oe in e},ae=Function.prototype.toString;var se=function(e){if(null!=e){try{return ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""},le=re,ce=ie,de=J,ue=se,he=/^\[object .+?Constructor\]$/,pe=Function.prototype,fe=Object.prototype,me=pe.toString,ge=fe.hasOwnProperty,ye=RegExp("^"+me.call(ge).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var be=function(e){return!(!de(e)||ce(e))&&(le(e)?ye:he).test(ue(e))},ve=function(e,t){return null==e?void 0:e[t]};var we=function(e,t){var r=ve(e,t);return be(r)?r:void 0},xe=we(Object,"create"),$e=xe;var _e=function(){this.__data__=$e?$e(null):{},this.size=0};var Se=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ke=xe,Oe=Object.prototype.hasOwnProperty;var je=function(e){var t=this.__data__;if(ke){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Oe.call(t,e)?t[e]:void 0},Ce=xe,Ee=Object.prototype.hasOwnProperty;var Fe=xe;var Pe=_e,Ie=Se,Ne=je,Te=function(e){var t=this.__data__;return Ce?void 0!==t[e]:Ee.call(t,e)},Me=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Fe&&void 0===t?"__lodash_hash_undefined__":t,this};function Ae(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ae.prototype.clear=Pe,Ae.prototype.delete=Ie,Ae.prototype.get=Ne,Ae.prototype.has=Te,Ae.prototype.set=Me;var ze=Ae;var Be=function(){this.__data__=[],this.size=0};var De=function(e,t){return e===t||e!=e&&t!=t},Le=De;var Re=function(e,t){for(var r=e.length;r--;)if(Le(e[r][0],t))return r;return-1},He=Re,Ve=Array.prototype.splice;var We=Re;var Ue=Re;var qe=Re;var Qe=Be,Xe=function(e){var t=this.__data__,r=He(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ve.call(t,r,1),--this.size,!0)},Ge=function(e){var t=this.__data__,r=We(t,e);return r<0?void 0:t[r][1]},Ye=function(e){return Ue(this.__data__,e)>-1},Ze=function(e,t){var r=this.__data__,n=qe(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Je(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Je.prototype.clear=Qe,Je.prototype.delete=Xe,Je.prototype.get=Ge,Je.prototype.has=Ye,Je.prototype.set=Ze;var Ke=Je,et=we(F,"Map"),tt=ze,rt=Ke,nt=et;var ot=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var it=function(e,t){var r=e.__data__;return ot(t)?r["string"==typeof t?"string":"hash"]:r.map},at=it;var st=it;var lt=it;var ct=it;var dt=function(){this.size=0,this.__data__={hash:new tt,map:new(nt||rt),string:new tt}},ut=function(e){var t=at(this,e).delete(e);return this.size-=t?1:0,t},ht=function(e){return st(this,e).get(e)},pt=function(e){return lt(this,e).has(e)},ft=function(e,t){var r=ct(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function mt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}mt.prototype.clear=dt,mt.prototype.delete=ut,mt.prototype.get=ht,mt.prototype.has=pt,mt.prototype.set=ft;var gt=mt,yt=gt;function bt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(bt.Cache||yt),r}bt.Cache=yt;var vt=bt;var wt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xt=/\\(\\)?/g,$t=function(e){var t=vt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(wt,(function(e,r,n,o){t.push(n?o.replace(xt,"$1"):r||e)})),t}));var _t=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},St=O,kt=q,Ot=P?P.prototype:void 0,jt=Ot?Ot.toString:void 0;var Ct=function e(t){if("string"==typeof t)return t;if(St(t))return _t(t,e)+"";if(kt(t))return jt?jt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},Et=Ct;var Ft=O,Pt=Z,It=$t,Nt=function(e){return null==e?"":Et(e)};var Tt=function(e,t){return Ft(e)?e:Pt(e,t)?[e]:It(Nt(e))},Mt=q;var At=function(e){if("string"==typeof e||Mt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},zt=Tt,Bt=At;var Dt=function(e,t){for(var r=0,n=(t=zt(t,e)).length;null!=e&&r<n;)e=e[Bt(t[r++])];return r&&r==n?e:void 0},Lt=Dt;var Rt=function(e,t,r){var n=null==e?void 0:Lt(e,t);return void 0===n?r:n};const Ht=(e,t,r)=>t?Rt(r,t)||Rt(e,t):r||e,Vt=(e,t)=>{const r=t||e.defaultValue;return Rt(e.collections,r)};var Wt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme"}(Wt||(Wt={}));const Ut={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},qt=e=>t=>{const r=t.theme,n=Vt(Ut,r[Wt.colorScheme]);return r.options&&r.options.color?Ht(n,e,r.options.color):Ht(n,e)},Qt={Brand:{1:qt("Brand.1"),2:qt("Brand.2"),3:qt("Brand.3"),4:qt("Brand.4"),5:qt("Brand.5"),6:qt("Brand.6")},Primary:qt("Primary"),PrimaryDark:qt("PrimaryDark"),Secondary:qt("Secondary"),Accent:{Light:{1:qt("Accent.Light.1"),2:qt("Accent.Light.2"),3:qt("Accent.Light.3"),4:qt("Accent.Light.4"),5:qt("Accent.Light.5"),6:qt("Accent.Light.6")},Dark:{1:qt("Accent.Dark.1"),2:qt("Accent.Dark.2"),3:qt("Accent.Dark.3")}},Neutral:{1:qt("Neutral.1"),2:qt("Neutral.2"),3:qt("Neutral.3"),4:qt("Neutral.4"),5:qt("Neutral.5"),6:qt("Neutral.6"),7:qt("Neutral.7"),8:qt("Neutral.8")},Validation:{Green:{Text:qt("Validation.Green.Text"),Icon:qt("Validation.Green.Icon"),Border:qt("Validation.Green.Border"),Background:qt("Validation.Green.Background")},Orange:{Text:qt("Validation.Orange.Text"),Icon:qt("Validation.Orange.Icon"),Border:qt("Validation.Orange.Border"),Background:qt("Validation.Orange.Background"),Badge:qt("Validation.Orange.Badge")},Red:{Text:qt("Validation.Red.Text"),Icon:qt("Validation.Red.Icon"),Border:qt("Validation.Red.Border"),Background:qt("Validation.Red.Background")}}},Xt=y.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;
    color: ${Qt.Primary};
`,Gt=t=>e(Xt,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...t,children:e("path",{fill:"currentColor",d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})}),Yt=t=>e(Xt,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{fill:"currentColor",d:"M23.8785 5.13337C24.0563 4.95554 24.3408 4.95554 24.5186 5.13337L26.8666 7.48184C27.0444 7.65572 27.0444 7.9442 26.8666 8.11808L19.3082 15.6819C19.1304 15.8558 19.1304 16.1442 19.3082 16.3221L26.8666 23.8819C27.0444 24.0558 27.0444 24.3443 26.8666 24.5182L24.5186 26.8666C24.3408 27.0445 24.0563 27.0445 23.8785 26.8666L16.32 19.3068C16.1422 19.129 15.8578 19.129 15.68 19.3068L8.12148 26.8666C7.94368 27.0445 7.65919 27.0445 7.48139 26.8666L5.13335 24.5182C4.95555 24.3443 4.95555 24.0558 5.13335 23.8819L12.6918 16.3221C12.8696 16.1442 12.8696 15.8558 12.6918 15.6819L5.13335 8.11808C4.95555 7.9442 4.95555 7.65572 5.13335 7.48184L7.48139 5.13337C7.65919 4.95554 7.94368 4.95554 8.12148 5.13337L15.68 12.6932C15.8578 12.871 16.1422 12.871 16.32 12.6932L23.8785 5.13337Z"})}),Zt=t=>e(Xt,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{fill:"currentColor",id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),Jt=t=>e(Xt,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...t,children:e("path",{fill:"currentColor",fillRule:"nonzero",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z"})}),Kt=t=>e(Xt,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",...t,children:e("path",{id:"path",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})}),er=({type:t,...r})=>{switch(t){case"arrow-right":return e(Gt,{...r});case"info":return e(Zt,{...r});case"cross":return e(Yt,{...r});case"play":return e(Jt,{...r});case"search":return e(Kt,{...r});default:{const n=`sgds-icon sgds-icon-${t}`,o=r.className?`${n} ${r.className}`:n;return e(tr,{...r,className:o})}}},tr=y.span`
    font-size: 1rem;
`,rr={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var nr=F,or=/\s/;var ir=function(e){for(var t=e.length;t--&&or.test(e.charAt(t)););return t},ar=/^\s+/;var sr=function(e){return e?e.slice(0,ir(e)+1).replace(ar,""):e},lr=J,cr=q,dr=/^[-+]0x[0-9a-f]+$/i,ur=/^0b[01]+$/i,hr=/^0o[0-7]+$/i,pr=parseInt;var fr=function(e){if("number"==typeof e)return e;if(cr(e))return NaN;if(lr(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=lr(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=sr(e);var r=ur.test(e);return r||hr.test(e)?pr(e.slice(2),r?2:8):dr.test(e)?NaN:+e},mr=J,gr=function(){return nr.Date.now()},yr=fr,br=Math.max,vr=Math.min;var wr=function(e,t,r){var n,o,i,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function f(e){return c=e,s=setTimeout(g,t),d?p(e):a}function m(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=i}function g(){var e=gr();if(m(e))return y(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?vr(r,i-(e-c)):r}(e))}function y(e){return s=void 0,h&&n?p(e):(n=o=void 0,a)}function b(){var e=gr(),r=m(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return f(l);if(u)return clearTimeout(s),s=setTimeout(g,t),p(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=yr(t)||0,mr(r)&&(d=!!r.leading,i=(u="maxWait"in r)?br(yr(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:y(gr())},b};const xr=y.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return b`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,$r=y.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=b`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=b`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=b`
                transition: none;
            `),t}}
`,_r=({show:t=!1,rootId:r,onOverlayClick:n,children:l,backgroundOpacity:c,backgroundBlur:d=!0,disableTransition:u=!1,enableOverlayClick:h=!1,zIndex:p,id:f})=>{const[m,g]=i(null),[y,b]=i(),v=a(),x=a(null),$=l&&o.cloneElement(l,{ref:x}),_=f?`lifesg-ds-overlay-root-${f}`:"lifesg-ds-overlay-root";s((()=>{if(t){const e=O();if(S(e),!e){const e=setTimeout((()=>{C("add")}),200);return()=>clearTimeout(e)}}else if(!v.current){const e=setTimeout((()=>{C("add")}),200);return()=>clearTimeout(e)}}),[t]),s((()=>{g(k());const e=O();return S(e),e||j(),()=>{C("remove")}}),[]);const S=e=>{v.current=e,b(e)},k=()=>document&&r?document.getElementById(r):document?document.body:null,O=()=>document.body.classList.contains(kr),j=()=>{if(!document.getElementById(Sr)){const e=document.createElement("style");e.id=Sr;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${kr} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${kr}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},C=e=>{const t=document.body.classList.contains(kr);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(kr):document.body.classList.add(kr)},E=e=>{e.preventDefault();const t=x.current?.firstChild;t&&t.contains(e.target)||n&&h&&n()};return m?w.createPortal(e(xr,{id:_,"data-testid":_,$show:t,zIndex:p,$stacked:y,children:l&&e($r,{"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:c||(y?.5:.8),$backgroundBlur:d,$disableTransition:u,$enableOverlayClick:h,onClick:E,children:$})}),m):null},Sr="lifesg-ds-overlay-stylesheet",kr="lifesg-ds-overlay-open",Or=e=>Object.keys(rr).reduce(((t,r)=>{const n=rr[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),jr=Or("max-width"),Cr=(Or("min-width"),y.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${e=>e.verticalHeight?b`
                ${jr.mobileL} {
                    height: calc(${e.verticalHeight}px * 100);
                }
            `:b`
                ${jr.mobileL} {
                    height: calc(1vh * 100);
                }
            `}
`),Er=({id:t="modal",show:r,animationFrom:n="bottom",children:o,enableOverlayClick:a=!0,rootComponentId:l,zIndex:c,onOverlayClick:d,...u})=>{const[h,p]=i();s((()=>(p(.01*window.innerHeight),window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f)})),[]);const f=()=>{const e=.01*window.innerHeight;p(e)};return e(_r,{"data-testid":`${t}-overlay`,show:r,enableOverlayClick:a,onOverlayClick:d,id:t,rootId:l,zIndex:c,children:e(Cr,{show:r,animationFrom:n,"data-testid":t,verticalHeight:h,...u,children:o})})},Fr={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Pr={collections:{base:{D1:{fontFamily:Fr.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Fr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Fr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Fr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Fr.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Fr.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Fr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Fr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Fr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Fr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Fr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Fr.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Fr.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Fr.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ir=e=>t=>{const r=t.theme,n=Vt(Pr,r[Wt.textStyleScheme]);return r.options&&r.options.textStyle?Ht(n,e,r.options.textStyle):Ht(n,e)},Nr={D1:{fontFamily:Ir("D1.fontFamily"),fontSize:Ir("D1.fontSize"),fontWeight:Ir("D1.fontWeight"),lineHeight:Ir("D1.lineHeight"),letterSpacing:Ir("D1.letterSpacing")},D2:{fontFamily:Ir("D2.fontFamily"),fontSize:Ir("D2.fontSize"),fontWeight:Ir("D2.fontWeight"),lineHeight:Ir("D2.lineHeight"),letterSpacing:Ir("D2.letterSpacing")},D3:{fontFamily:Ir("D3.fontFamily"),fontSize:Ir("D3.fontSize"),fontWeight:Ir("D3.fontWeight"),lineHeight:Ir("D3.lineHeight"),letterSpacing:Ir("D3.letterSpacing")},D4:{fontFamily:Ir("D4.fontFamily"),fontSize:Ir("D4.fontSize"),fontWeight:Ir("D4.fontWeight"),lineHeight:Ir("D4.lineHeight"),letterSpacing:Ir("D4.letterSpacing")},DBody:{fontFamily:Ir("DBody.fontFamily"),fontSize:Ir("DBody.fontSize"),fontWeight:Ir("DBody.fontWeight"),lineHeight:Ir("DBody.lineHeight"),letterSpacing:Ir("DBody.letterSpacing")},H1:{fontFamily:Ir("H1.fontFamily"),fontSize:Ir("H1.fontSize"),fontWeight:Ir("H1.fontWeight"),lineHeight:Ir("H1.lineHeight"),letterSpacing:Ir("H1.letterSpacing")},H2:{fontFamily:Ir("H2.fontFamily"),fontSize:Ir("H2.fontSize"),fontWeight:Ir("H2.fontWeight"),lineHeight:Ir("H2.lineHeight"),letterSpacing:Ir("H2.letterSpacing")},H3:{fontFamily:Ir("H3.fontFamily"),fontSize:Ir("H3.fontSize"),fontWeight:Ir("H3.fontWeight"),lineHeight:Ir("H3.lineHeight"),letterSpacing:Ir("H3.letterSpacing")},H4:{fontFamily:Ir("H4.fontFamily"),fontSize:Ir("H4.fontSize"),fontWeight:Ir("H4.fontWeight"),lineHeight:Ir("H4.lineHeight"),letterSpacing:Ir("H4.letterSpacing")},H5:{fontFamily:Ir("H5.fontFamily"),fontSize:Ir("H5.fontSize"),fontWeight:Ir("H5.fontWeight"),lineHeight:Ir("H5.lineHeight"),letterSpacing:Ir("H5.letterSpacing")},H6:{fontFamily:Ir("H6.fontFamily"),fontSize:Ir("H6.fontSize"),fontWeight:Ir("H6.fontWeight"),lineHeight:Ir("H6.lineHeight"),letterSpacing:Ir("H6.letterSpacing")},Body:{fontFamily:Ir("Body.fontFamily"),fontSize:Ir("Body.fontSize"),fontWeight:Ir("Body.fontWeight"),lineHeight:Ir("Body.lineHeight"),letterSpacing:Ir("Body.letterSpacing")},BodySmall:{fontFamily:Ir("BodySmall.fontFamily"),fontSize:Ir("BodySmall.fontSize"),fontWeight:Ir("BodySmall.fontWeight"),lineHeight:Ir("BodySmall.lineHeight"),letterSpacing:Ir("BodySmall.letterSpacing")},XSmall:{fontFamily:Ir("XSmall.fontFamily"),fontSize:Ir("XSmall.fontSize"),fontWeight:Ir("XSmall.fontWeight"),lineHeight:Ir("XSmall.lineHeight"),letterSpacing:Ir("XSmall.letterSpacing")}},Tr=e=>{switch(e){case 700:case"bold":return Fr.Bold;case 600:case"semibold":return Fr.Semibold;case 300:case"light":return Fr.Light;case 400:case"regular":return Fr.Regular;default:return""}},Mr=(e,t)=>r=>{const n=Nr[e].fontFamily(r),o=Nr[e].fontWeight(r);return Object.values(Fr).includes(n)?b`
                font-family: ${Tr(t)||Tr(o)||n};
                font-weight: normal !important;
            `:b`
            font-family: ${n};
            font-weight: ${(Ar(t)||o)??"normal"};
        `},Ar=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},zr=(e,t,r=!1)=>n=>{const o=Nr[e],i=o.fontSize(n);return b`
            ${Mr(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(n)||0}rem !important;
            ${b`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},Br=(e=!1,t=!1)=>t?b`
            display: block;
        `:e?b`
            display: inline;
        `:b`
            display: block;
        `;var Dr;!function(e){e.D1=y.h1`
        ${e=>b`
                ${zr("D1",e.weight,e.paragraph)}
                color: ${Qt.Neutral[1]};
                ${Br(e.inline,e.paragraph)}
            `}
    `,e.D2=y.h1`
        ${e=>b`
                ${zr("D2",e.weight,e.paragraph)}
                color: ${Qt.Neutral[1]};
                ${Br(e.inline,e.paragraph)}
            `}
    `,e.D3=y.h1`
        ${e=>b`
                ${zr("D3",e.weight,e.paragraph)}
                color: ${Qt.Neutral[1]};
                ${Br(e.inline,e.paragraph)}
            `}
    `,e.D4=y.h1`
        ${e=>b`
                ${zr("D4",e.weight,e.paragraph)}
                color: ${Qt.Neutral[1]};
                ${Br(e.inline,e.paragraph)}
            `}
    `,e.DBody=y.h1`
        ${e=>b`
                ${zr("DBody",e.weight,e.paragraph)}
                color: ${Qt.Neutral[1]};
                ${Br(e.inline,e.paragraph)}
            `}
    `,e.H1=y.h1`
        ${e=>b`
                ${zr("H1",e.weight,e.paragraph)}
                color: ${Qt.Neutral[1]};
                ${Br(e.inline,e.paragraph)}
            `}
    `,e.H2=y.h2`
        ${e=>b`
                ${zr("H2",e.weight,e.paragraph)}
                color: ${Qt.Neutral[1]};
                ${Br(e.inline,e.paragraph)}
            `}
    `,e.H3=y.h3`
        ${e=>b`
                ${zr("H3",e.weight,e.paragraph)}
                color: ${Qt.Neutral[1]};
                ${Br(e.inline,e.paragraph)}
            `}
    `,e.H4=y.h4`
        ${e=>b`
                ${zr("H4",e.weight,e.paragraph)}
                color: ${Qt.Neutral[1]};
                ${Br(e.inline,e.paragraph)}
            `}
    `,e.H5=y.h5`
        ${e=>b`
                ${zr("H5",e.weight,e.paragraph)}
                color: ${Qt.Neutral[1]};
                ${Br(e.inline,e.paragraph)}
            `}
    `,e.H6=y.h6`
        ${e=>b`
                ${zr("H6",e.weight,e.paragraph)}
                color: ${Qt.Neutral[1]};
                ${Br(e.inline,e.paragraph)}
            `}
    `,e.Body=y.p`
        ${e=>b`
                ${zr("Body",e.weight,e.paragraph)}
                color: ${Qt.Neutral[1]};
                ${Br(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=y.p`
        ${e=>b`
                ${zr("BodySmall",e.weight,e.paragraph)}
                color: ${Qt.Neutral[1]};
                ${Br(e.inline,e.paragraph)}
            `}
    `,e.XSmall=y.span`
        ${e=>b`
                ${zr("XSmall",e.weight,e.paragraph)}
                color: ${Qt.Neutral[1]};
                ${Br(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Hr({...e,textStyle:"Body"}),Small:e=>Hr({...e,textStyle:"BodySmall"})}}(Dr||(Dr={}));const Lr=y.a`
    ${e=>b`
            ${zr(e.textStyle,e.weight)}
            color: ${Qt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Qt.Secondary};
            }
        `}
`,Rr=y(er)`
    margin-left: 0.4rem;
`,Hr=({external:r=!1,children:n,...o})=>t(Lr,{...o,children:[n,r&&e(Rr,{type:"external"})]}),Vr=y.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background-color: ${Qt.Neutral[8]};
    border: none;
    cursor: pointer;

    img {
        height: 1rem;
        width: 1rem;
    }

    &:focus {
        outline: none;
        background-color: ${Qt.Neutral[7]};
    }
`,Wr=o.forwardRef((({children:t,iconType:r,...n},o)=>{let i;if(t)i=t;else{if(!r)return console.error("IconButton - Did not specify a valid children or iconType prop"),null;i=e(er,{type:r})}return e(Vr,{ref:o,...n,children:i})})),Ur=y.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Qt.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${jr.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,qr=y(Wr)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    background: transparent;
    :focus-visible,
    :focus,
    :active {
        background: transparent;
    }
    :focus-visible {
        outline: 4px solid ${Qt.Accent.Light[1]};
    }
`,Qr=y(er)`
    font-size: 2rem;
    color: ${Qt.Neutral[4]};
`,Xr="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Gr=y.div`
    border-radius: 8px;
    background: ${Qt.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 2px 8px 0 rgba(104, 104, 104, 0.24);
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?b`
            visibility: visible;
            opacity: 1;
            transition: ${Xr};
            z-index: 2;
        `:b`
            visibility: hidden;
            opacity: 0;
            transition: ${Xr};
            z-index: -1;
        `}
    ${e=>(e=>{switch(e){case"top-center":return b`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return b`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return b`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return b`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return b`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return b`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `}})(e.$offset)}

	${jr.mobileL} {
        display: none;
    }
`,Yr=y((({id:r="modal-box",children:n,onClose:o,showCloseButton:i=!0,...a})=>t(Ur,{"data-testid":r,...a,onClick:e=>{e.stopPropagation()},children:[i&&e(qr,{type:"button",onClick:o,"data-testid":"close-button",children:e(Qr,{type:"cross"})}),n]})))`
    padding: 3.5rem 1.25rem 2.5rem;
`;y.div`
    position: relative;
    width: fit-content;
`,y.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`;const Zr=({children:n,visible:o,onMobileClose:l,...c})=>{const d=c["data-testid"]||"popover",[u,h]=i("none"),p=a(null),f=k.exports.useMediaQuery({maxWidth:rr.mobileL}),m=a(u);s((()=>(b(),window.addEventListener("resize",wr(g,300)),()=>{window.removeEventListener("resize",wr(g,300))})),[]);const g=()=>{b()},y=()=>{l&&l()},b=()=>{const e=v();var t;e&&(t=e,m.current=t,h(t))},v=()=>{if(p.current){const e=p.current.getBoundingClientRect(),t=24,r=e.y<t,n=window.innerWidth-t;return e.x<t?r?"top-left":"left":e.x+e.width>n?r?"top-right":"right":("top-left"===m.current||"left"===m.current)&&e.x-e.width/2>t||("top-right"===m.current||"right"===m.current)&&e.x+2*e.width<n?r?"top-center":"none":void 0}},w=()=>"string"==typeof n?e(Dr.BodySmall,{children:n}):n;return t(r,{children:[e(Gr,{ref:p,"data-testid":d,$visible:o,$offset:u,...c,children:w()}),f&&e(Er,{show:o,onOverlayClick:y,children:e(Yr,{onClose:y,children:w()})})]})},Jr=y.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;
`,Kr=y.div`
    display: inline;
    position: relative;
    width: fit-content;
`,en=({addonType:t="popover",icon:r,"data-testid":n,...o})=>e(Jr,{"data-testid":n,...o,children:"string"==typeof r?e(er,{type:r,id:`${t}-icon`}):r||e(er,{type:"info",id:`${t}-icon`})}),tn=({addon:r})=>{const[n,o]=i(!1),l=a(),c=a(!1),d=k.exports.useMediaQuery({maxWidth:rr.mobileL}),u=e=>{c.current=e,o(e)};s((()=>{if(!d)return document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}}),[]);const h=e=>{l&&!l.current.contains(e.target)&&c.current&&u(!1)};return t(Kr,{ref:l,id:"addon-popover-wrapper",children:[e(Zr,{visible:n,id:r.id,"data-testid":r["data-testid"],onMobileClose:()=>{n&&u(!1)},children:r.content}),e(en,{addonType:r.type,icon:r.icon,id:`popover-hoc-trigger${r["data-testid"]&&`-${r["data-testid"]}`}`,onClick:()=>u(!n),"aria-label":"popover-button",type:"button"})]})};var rn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(rn||(rn={}));const nn=y.label`
    ${zr("H5","semibold")}

    color: ${e=>e.disabled?Qt.Neutral[4](e):Qt.Neutral[3](e)};
    margin-bottom: 0.5rem;
    display: inline-block;

    #popover-hoc-wrapper {
        display: inline;
    }

    #popover-hoc-button {
        vertical-align: bottom;
    }
`,on=y(Dr.H6)`
    color: ${Qt.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
`,an=y(Dr.XSmall)`
    color: ${e=>e.disabled?Qt.Neutral[4](e):Qt.Neutral[3](e)};
`,sn=({children:r,addon:n,subtitle:o,"data-testid":i,...a})=>t(nn,{...a,children:[r,n&&n.type&&("popover"===n.type?n&&e(tn,{addon:n}):null),"string"==typeof o?e(an,{"data-testid":i?`${i}-subtitle`:"subtitle",...a,children:o}):o]}),ln=y.div`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 1rem;
    }
`,cn=({label:r,errorMessage:n,id:o,disabled:i,children:a,"data-error-testid":s})=>t(ln,{children:[r&&e(sn,"string"==typeof r?{htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",disabled:i,children:r}:{htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",disabled:i,...r}),a,n&&e(on,{weight:"semibold","data-testid":s||(o?`${o}-error-message`:"error-message"),children:n})]});var dn;!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n)=>{let o=0;t>r&&(o=Math.floor((t-r)/8));const i=n+o;if(i<e.length){const t=Math.floor(i/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(dn||(dn={}));const un=y.div`
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid ${Qt.Neutral[5]};
    border-radius: 4px;
    background: ${Qt.Neutral[8]};
    height: 3rem;
    width: 100%;
    padding: 0.1rem 1rem 0;

    :focus,
    :focus-within {
        border: 1px solid ${Qt.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    ${e=>e.disabled?b`
                background: ${Qt.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Qt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?b`
                border: 1px solid ${Qt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Qt.Validation.Red.Border(e)};
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `:void 0}
`,hn=y.div`
    position: absolute;
    top: 0;
    left: 1rem; // input value appears slightly right
    height: 100%;
    display: flex;
    align-items: center;
`,pn=y.input`
    ${zr("Body","regular")}
    background: transparent;
    height: 100%;
    width: 2.5rem;
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

    ${e=>{if(e.disabled)return b`
                cursor: not-allowed;
            `}}
`,fn=y(pn)`
    width: 2.6rem;
`,mn=y(pn)`
    width: 3.5rem;
`,gn=y(Dr.Body)`
    opacity: ${e=>e.$hide?0:1};
    margin: 0.1rem 0.2rem 0 0.2rem;
`;y(gn)`
    ${e=>{if(e.$compress)return b`
                margin: 0.1rem 0.1rem 0 0.1rem;
            `}}
`;const yn=y.div`
    display: flex;
    align-items: center;
`,bn=y(Dr.Body)`
    opacity: ${e=>e.$hide?0:1};
    color: ${Qt.Neutral[3]};
    display: inline;
    width: 2.5rem;
    text-align: center;
`,vn=y(gn)`
    color: ${Qt.Neutral[3]};
`,wn=y(bn)`
    width: 2.6rem;
`,xn=y(bn)`
    width: 3.5rem;
`,$n=({disabled:r,error:n,value:o,onChange:l,onBlur:c,...d})=>{const[u,h]=i(""),[p,f]=i(""),[m,g]=i(""),[y,b]=i("none"),v=a(null),w=a(null),x=a(null),$=a(null),_=a(u),S=a(p),k=a(m),O=a(y),j=e=>{_.current=e,h(e)},C=e=>{S.current=e,f(e)},E=e=>{k.current=e,g(e)},F=e=>{O.current=e,b(e)};s((()=>(document.addEventListener("mousedown",I),v.current&&v.current.addEventListener("keydown",N),w.current&&w.current.addEventListener("keydown",P),x.current&&x.current.addEventListener("keydown",P),$.current&&$.current.addEventListener("keydown",P),()=>{document.removeEventListener("mousedown",I),v.current&&v.current.removeEventListener("keydown",N),w.current&&w.current.removeEventListener("keydown",P),x.current&&x.current.removeEventListener("keydown",P),$.current&&$.current.removeEventListener("keydown",P)})),[y]),s((()=>{"day"===y&&2===u.length&&x.current&&x.current.focus()}),[u]),s((()=>{"month"===y&&2===p.length&&$.current&&$.current.focus()}),[p]),s((()=>{z(o)}),[o]);const P=e=>{const t=["Backspace","0","1","2","3","4","5","6","7","8","9"],r=e.code&&e.code.startsWith("Digit")&&!t.includes(e.key);(!["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight"].includes(e.code)&&!t.includes(e.key)||r)&&e.preventDefault()},I=e=>{r||v&&v.current.contains(e.target)||"none"!==O.current&&(F("none"),D())},N=e=>{"year"===e.target.name&&"Tab"===e.code&&(F("none"),D())},T=e=>{F(e.target.name),e.target.select()},M=e=>{switch(e.target.name){case"day":j(dn.padValue(e.target.value,!0));break;case"month":C(dn.padValue(e.target.value,!0))}},A=e=>{const t=e.target.name;switch(t){case"day":e.target.value.length<=2&&(j(e.target.value),B(e.target.value,t));break;case"month":e.target.value.length<=2&&(C(e.target.value),B(e.target.value,t));break;case"year":e.target.value.length<=4&&(E(e.target.value),B(e.target.value,t))}},z=e=>{if(void 0===e||""===e)j(""),C(""),E("");else{const t=new Date(e);if(!isNaN(t.getTime())){const e=t.getDate(),r=t.getMonth()+1,n=t.getFullYear();j(dn.padValue(e.toString())),C(dn.padValue(r.toString())),E(n.toString())}}},B=(e,t)=>{if(l){const r={day:u,month:p,year:m};r[t]=e;const n=L(r);l(n)}},D=()=>{if(c){const e={day:_.current,month:S.current,year:k.current},t=L(e);c(t)}},L=e=>{const t=[e.year,e.month,e.day];return e.day.length>=1&&e.month.length>=1&&4===e.year.length?t.join("-"):t.every((e=>""===e))?"":_n};return t(un,{ref:v,onClick:()=>{"none"===y&&w.current&&w.current.focus()},disabled:r,$error:n,"data-testid":d["data-testid"],children:[t(yn,{children:[e(bn,{$hide:"day"===y||u.length>0,"data-testid":"day-placeholder",children:"DD"}),e(vn,{$hide:u.length>0,children:"/"}),e(wn,{$hide:"month"===y||p.length>0,"data-testid":"month-placeholder",children:"MM"}),e(vn,{$hide:p.length>0,children:"/"}),e(xn,{$hide:"year"===y||m.length>0,"data-testid":"year-placeholder",$addGap:0===u.length&&0===m.length,children:"YYYY"})]}),t(hn,{children:[e(pn,{name:"day",maxLength:2,value:u,ref:w,onFocus:T,onBlur:M,onChange:A,disabled:r,type:"number",pattern:"[0-9]{2}","data-testid":"day-input","aria-label":"day-input"}),e(gn,{$hide:0===u.length,children:"/"}),e(fn,{name:"month",maxLength:2,value:p,ref:x,onFocus:T,onBlur:M,onChange:A,disabled:r,type:"number",pattern:"[0-9]{2}","data-testid":"month-input","aria-label":"month-input"}),e(gn,{$hide:0===p.length,children:"/"}),e(mn,{name:"year",maxLength:4,value:m,ref:$,onFocus:T,onBlur:M,onChange:A,disabled:r,type:"number",pattern:"[0-9]{4}","data-testid":"year-input","aria-label":"year-input"})]})]})},_n="Invalid date",Sn=y.input`
    ${zr("Body","regular")}
    border: 1px solid ${Qt.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.2rem 1rem 0.3rem 1rem; // Somehow the input text appears lower
    height: 3rem;
    width: 100%;
    background: ${Qt.Neutral[8]};
    color: ${Qt.Neutral[1]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${Qt.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Qt.Neutral[3]};
    }

    ${e=>{if("number"===e.type)return b`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `}}

    ${e=>e.readOnly?b`
                border: none;
                padding-left: 0rem;
                background: transparent !important;

                :focus,
                :active {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?b`
                background: ${Qt.Neutral[6](e)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${Qt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?b`
                border: 1px solid ${Qt.Validation.Red.Border(e)};

                :focus,
                :active {
                    border: 1px solid ${Qt.Validation.Red.Border(e)};
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `:void 0}
`,kn=o.forwardRef((({value:t,spacing:r,type:n,error:o,disabled:i,onChange:a,...s},l)=>{const c=()=>"tel"===n&&r,d=e=>{const t=e.target,r=t.value,n=t.value.replace(/\s/g,"");t.value=n,a(e),t.value=r},u=t?(e=>e?c()?dn.transformWithSpaces(e,r):e:"")(t):t;return e(Sn,{"data-testid":"input",ref:l,disabled:i,value:u,error:o,onChange:a?e=>{c()?d(e):a(e)}:void 0,type:n,readOnly:"readonly"===n,...s})})),On=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i="form-field","data-error-testid":a,"data-testid":s,...l}=t;return e(cn,{id:i,label:n,errorMessage:o,disabled:l.disabled,"data-error-testid":a,children:e(kn,{id:`${i}-base`,"data-testid":s||i,ref:r,error:!!o,...l})})})),jn=y.div`
    display: flex;
    position: relative;
    border: 1px solid ${Qt.Neutral[5]};
    border-radius: 4px;
    background: ${Qt.Neutral[8]};
    height: 3rem;
    width: 100%;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Qt.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    ${e=>e.$readOnly?b`
                border: none;
                padding-left: 0rem;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?b`
                background: ${Qt.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Qt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?b`
                border: 1px solid ${Qt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Qt.Validation.Red.Border(e)};
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `:void 0}
`,Cn=y(kn)`
    // overwrite default styles
    background: transparent;
    border: none;
    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }

    ${e=>e.$readOnly?b`
                padding-left: 0rem;
            `:"right"===e.$position?b`
                    padding: 0.2rem 0 0.3rem 1rem; // Input text appears lower hence the higher lower padding
                `:b`
                    padding: 0.2rem 1rem 0.3rem 0; // Input text appears lower hence the higher lower padding
                `}
`,En=y.div`
    position: relative;
    display: flex;
    align-items: center;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 0 0.6875rem 0 1rem;

    ${zr("Body","regular")}
    color: ${Qt.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${Qt.Neutral[1]};
        }
    }

    ${e=>e.$readOnly?b`
                padding-left: 0rem;
            `:e.disabled?b`
                color: ${Qt.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${Qt.Neutral[4](e)};
                    }
                }
            `:void 0}
`;y(er)`
    padding-left: 0.5rem;
    color: ${Qt.Neutral[4]};
`;var Fn=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},Pn=Ke;var In=Ke,Nn=et,Tn=gt;var Mn=Ke,An=function(){this.__data__=new Pn,this.size=0},zn=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Bn=function(e){return this.__data__.get(e)},Dn=function(e){return this.__data__.has(e)},Ln=function(e,t){var r=this.__data__;if(r instanceof In){var n=r.__data__;if(!Nn||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Tn(n)}return r.set(e,t),this.size=r.size,this};function Rn(e){var t=this.__data__=new Mn(e);this.size=t.size}Rn.prototype.clear=An,Rn.prototype.delete=zn,Rn.prototype.get=Bn,Rn.prototype.has=Dn,Rn.prototype.set=Ln;var Hn=Rn;var Vn=gt,Wn=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Un=function(e){return this.__data__.has(e)};function qn(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Vn;++t<r;)this.add(e[t])}qn.prototype.add=qn.prototype.push=Wn,qn.prototype.has=Un;var Qn=qn,Xn=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Gn=function(e,t){return e.has(t)};var Yn=function(e,t,r,n,o,i){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=i.get(e),d=i.get(t);if(c&&d)return c==t&&d==e;var u=-1,h=!0,p=2&r?new Qn:void 0;for(i.set(e,t),i.set(t,e);++u<s;){var f=e[u],m=t[u];if(n)var g=a?n(m,f,u,t,e,i):n(f,m,u,e,t,i);if(void 0!==g){if(g)continue;h=!1;break}if(p){if(!Xn(t,(function(e,t){if(!Gn(p,t)&&(f===e||o(f,e,r,n,i)))return p.push(t)}))){h=!1;break}}else if(f!==m&&!o(f,m,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var Zn=F.Uint8Array,Jn=De,Kn=Yn,eo=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},to=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},ro=P?P.prototype:void 0,no=ro?ro.valueOf:void 0;var oo=function(e,t,r,n,o,i,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new Zn(e),new Zn(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Jn(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=eo;case"[object Set]":var l=1&n;if(s||(s=to),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=Kn(s(e),s(t),n,o,i,a);return a.delete(e),d;case"[object Symbol]":if(no)return no.call(e)==no.call(t)}return!1};var io=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},ao=O;var so=function(e,t,r){var n=t(e);return ao(e)?n:io(n,r(e))};var lo=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i},co=function(){return[]},uo=Object.prototype.propertyIsEnumerable,ho=Object.getOwnPropertySymbols,po=ho?function(e){return null==e?[]:(e=Object(e),lo(ho(e),(function(t){return uo.call(e,t)})))}:co;var fo=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},mo=H,go=V;var yo=function(e){return go(e)&&"[object Arguments]"==mo(e)},bo=V,vo=Object.prototype,wo=vo.hasOwnProperty,xo=vo.propertyIsEnumerable,$o=yo(function(){return arguments}())?yo:function(e){return bo(e)&&wo.call(e,"callee")&&!xo.call(e,"callee")},_o={exports:{}};var So=function(){return!1};!function(e,t){var r=F,n=So,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(_o,_o.exports);var ko=/^(?:0|[1-9]\d*)$/;var Oo=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&ko.test(e))&&e>-1&&e%1==0&&e<t};var jo=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Co=H,Eo=jo,Fo=V,Po={};Po["[object Float32Array]"]=Po["[object Float64Array]"]=Po["[object Int8Array]"]=Po["[object Int16Array]"]=Po["[object Int32Array]"]=Po["[object Uint8Array]"]=Po["[object Uint8ClampedArray]"]=Po["[object Uint16Array]"]=Po["[object Uint32Array]"]=!0,Po["[object Arguments]"]=Po["[object Array]"]=Po["[object ArrayBuffer]"]=Po["[object Boolean]"]=Po["[object DataView]"]=Po["[object Date]"]=Po["[object Error]"]=Po["[object Function]"]=Po["[object Map]"]=Po["[object Number]"]=Po["[object Object]"]=Po["[object RegExp]"]=Po["[object Set]"]=Po["[object String]"]=Po["[object WeakMap]"]=!1;var Io=function(e){return Fo(e)&&Eo(e.length)&&!!Po[Co(e)]};var No=function(e){return function(t){return e(t)}},To={exports:{}};!function(e,t){var r=j,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(To,To.exports);var Mo=Io,Ao=No,zo=To.exports,Bo=zo&&zo.isTypedArray,Do=Bo?Ao(Bo):Mo,Lo=fo,Ro=$o,Ho=O,Vo=_o.exports,Wo=Oo,Uo=Do,qo=Object.prototype.hasOwnProperty;var Qo=function(e,t){var r=Ho(e),n=!r&&Ro(e),o=!r&&!n&&Vo(e),i=!r&&!n&&!o&&Uo(e),a=r||n||o||i,s=a?Lo(e.length,String):[],l=s.length;for(var c in e)!t&&!qo.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Wo(c,l))||s.push(c);return s},Xo=Object.prototype;var Go=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Xo)};var Yo=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Zo=Go,Jo=Yo,Ko=Object.prototype.hasOwnProperty;var ei=re,ti=jo;var ri=Qo,ni=function(e){if(!Zo(e))return Jo(e);var t=[];for(var r in Object(e))Ko.call(e,r)&&"constructor"!=r&&t.push(r);return t},oi=function(e){return null!=e&&ti(e.length)&&!ei(e)};var ii=function(e){return oi(e)?ri(e):ni(e)},ai=so,si=po,li=ii;var ci=function(e){return ai(e,li,si)},di=Object.prototype.hasOwnProperty;var ui=function(e,t,r,n,o,i){var a=1&r,s=ci(e),l=s.length;if(l!=ci(t).length&&!a)return!1;for(var c=l;c--;){var d=s[c];if(!(a?d in t:di.call(t,d)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var p=!0;i.set(e,t),i.set(t,e);for(var f=a;++c<l;){var m=e[d=s[c]],g=t[d];if(n)var y=a?n(g,m,d,t,e,i):n(m,g,d,e,t,i);if(!(void 0===y?m===g||o(m,g,r,n,i):y)){p=!1;break}f||(f="constructor"==d)}if(p&&!f){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(p=!1)}return i.delete(e),i.delete(t),p},hi=we(F,"DataView"),pi=et,fi=we(F,"Promise"),mi=we(F,"Set"),gi=we(F,"WeakMap"),yi=H,bi=se,vi=bi(hi),wi=bi(pi),xi=bi(fi),$i=bi(mi),_i=bi(gi),Si=yi;(hi&&"[object DataView]"!=Si(new hi(new ArrayBuffer(1)))||pi&&"[object Map]"!=Si(new pi)||fi&&"[object Promise]"!=Si(fi.resolve())||mi&&"[object Set]"!=Si(new mi)||gi&&"[object WeakMap]"!=Si(new gi))&&(Si=function(e){var t=yi(e),r="[object Object]"==t?e.constructor:void 0,n=r?bi(r):"";if(n)switch(n){case vi:return"[object DataView]";case wi:return"[object Map]";case xi:return"[object Promise]";case $i:return"[object Set]";case _i:return"[object WeakMap]"}return t});var ki=Hn,Oi=Yn,ji=oo,Ci=ui,Ei=Si,Fi=O,Pi=_o.exports,Ii=Do,Ni="[object Object]",Ti=Object.prototype.hasOwnProperty;var Mi=function(e,t,r,n,o,i){var a=Fi(e),s=Fi(t),l=a?"[object Array]":Ei(e),c=s?"[object Array]":Ei(t),d=(l="[object Arguments]"==l?Ni:l)==Ni,u=(c="[object Arguments]"==c?Ni:c)==Ni,h=l==c;if(h&&Pi(e)){if(!Pi(t))return!1;a=!0,d=!1}if(h&&!d)return i||(i=new ki),a||Ii(e)?Oi(e,t,r,n,o,i):ji(e,t,l,r,n,o,i);if(!(1&r)){var p=d&&Ti.call(e,"__wrapped__"),f=u&&Ti.call(t,"__wrapped__");if(p||f){var m=p?e.value():e,g=f?t.value():t;return i||(i=new ki),o(m,g,r,n,i)}}return!!h&&(i||(i=new ki),Ci(e,t,r,n,o,i))},Ai=V;var zi=function e(t,r,n,o,i){return t===r||(null==t||null==r||!Ai(t)&&!Ai(r)?t!=t&&r!=r:Mi(t,r,n,o,e,i))},Bi=Hn,Di=zi;var Li=J;var Ri=function(e){return e==e&&!Li(e)},Hi=Ri,Vi=ii;var Wi=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Ui=function(e,t,r,n){var o=r.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var s=r[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=r[o])[0],c=e[l],d=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new Bi;if(n)var h=n(c,d,l,e,t,u);if(!(void 0===h?Di(d,c,3,n,u):h))return!1}}return!0},qi=function(e){for(var t=Vi(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Hi(o)]}return t},Qi=Wi;var Xi=Tt,Gi=$o,Yi=O,Zi=Oo,Ji=jo,Ki=At;var ea=function(e,t){return null!=e&&t in Object(e)},ta=function(e,t,r){for(var n=-1,o=(t=Xi(t,e)).length,i=!1;++n<o;){var a=Ki(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Ji(o)&&Zi(a,o)&&(Yi(e)||Gi(e))};var ra=zi,na=Rt,oa=function(e,t){return null!=e&&ta(e,t,ea)},ia=Z,aa=Ri,sa=Wi,la=At;var ca=Dt;var da=function(e){return function(t){return null==t?void 0:t[e]}},ua=function(e){return function(t){return ca(t,e)}},ha=Z,pa=At;var fa=function(e){var t=qi(e);return 1==t.length&&t[0][2]?Qi(t[0][0],t[0][1]):function(r){return r===e||Ui(r,e,t)}},ma=function(e,t){return ia(e)&&aa(t)?sa(la(e),t):function(r){var n=na(r,e);return void 0===n&&n===t?oa(r,e):ra(t,n,3)}},ga=function(e){return e},ya=O,ba=function(e){return ha(e)?da(pa(e)):ua(e)};var va=fr;var wa=function(e){return e?Infinity===(e=va(e))||-Infinity===e?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var xa=Fn,$a=function(e){return"function"==typeof e?e:null==e?ga:"object"==typeof e?ya(e)?ma(e[0],e[1]):fa(e):ba(e)},_a=function(e){var t=wa(e),r=t%1;return t==t?r?t-r:t:0},Sa=Math.max;var ka=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:_a(r);return o<0&&(o=Sa(n+o,0)),xa(e,$a(t),o)},Oa={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ja=o.createContext&&o.createContext(Oa),Ca=function(){return Ca=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Ca.apply(this,arguments)},Ea=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function Fa(e){return e&&e.map((function(e,t){return o.createElement(e.tag,Ca({key:t},e.attr),Fa(e.child))}))}function Pa(e){return function(t){return o.createElement(Ia,Ca({attr:Ca({},e.attr)},t),Fa(e.child))}}function Ia(e){var t=function(t){var r,n=e.attr,i=e.size,a=e.title,s=Ea(e,["attr","size","title"]),l=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),o.createElement("svg",Ca({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,s,{className:r,style:Ca(Ca({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&o.createElement("title",null,a),e.children)};return void 0!==ja?o.createElement(ja.Consumer,null,(function(e){return t(e)})):t(Oa)}function Na(e){return Pa({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.6 48 48 141.601 48 256s93.6 208 208 208 208-93.601 208-208S370.4 48 256 48zm24 312h-48v-40h48v40zm0-88h-48V144h48v128z"}}]})(e)}let Ta=Ya();const Ma=e=>qa(e,Ta);let Aa=Ya();Ma.write=e=>qa(e,Aa);let za=Ya();Ma.onStart=e=>qa(e,za);let Ba=Ya();Ma.onFrame=e=>qa(e,Ba);let Da=Ya();Ma.onFinish=e=>qa(e,Da);let La=[];Ma.setTimeout=(e,t)=>{let r=Ma.now()+t,n=()=>{let e=La.findIndex((e=>e.cancel==n));~e&&La.splice(e,1),Wa-=~e?1:0},o={time:r,handler:e,cancel:n};return La.splice(Ra(r),0,o),Wa+=1,Qa(),o};let Ra=e=>~(~La.findIndex((t=>t.time>e))||~La.length);Ma.cancel=e=>{za.delete(e),Ba.delete(e),Ta.delete(e),Aa.delete(e),Da.delete(e)},Ma.sync=e=>{Ua=!0,Ma.batchedUpdates(e),Ua=!1},Ma.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Ma.onStart(r)}return n.handler=e,n.cancel=()=>{za.delete(r),t=null},n};let Ha="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Ma.use=e=>Ha=e,Ma.now="undefined"!=typeof performance?()=>performance.now():Date.now,Ma.batchedUpdates=e=>e(),Ma.catch=console.error,Ma.frameLoop="always",Ma.advance=()=>{"demand"!==Ma.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Ga()};let Va=-1,Wa=0,Ua=!1;function qa(e,t){Ua?(t.delete(e),e(0)):(t.add(e),Qa())}function Qa(){Va<0&&(Va=0,"demand"!==Ma.frameLoop&&Ha(Xa))}function Xa(){~Va&&(Ha(Xa),Ma.batchedUpdates(Ga))}function Ga(){let e=Va;Va=Ma.now();let t=Ra(Va);t&&(Za(La.splice(0,t),(e=>e.handler())),Wa-=t),za.flush(),Ta.flush(e?Math.min(64,Va-e):16.667),Ba.flush(),Aa.flush(),Da.flush(),Wa||(Va=-1)}function Ya(){let e=new Set,t=e;return{add(r){Wa+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Wa-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Wa-=t.size,Za(t,(t=>t(r)&&e.add(t))),Wa+=e.size,t=e)}}}function Za(e,t){e.forEach((e=>{try{t(e)}catch(e){Ma.catch(e)}}))}function Ja(){}const Ka={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function es(e,t){if(Ka.arr(e)){if(!Ka.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}const ts=(e,t)=>e.forEach(t);function rs(e,t,r){if(Ka.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}const ns=e=>Ka.und(e)?[]:Ka.arr(e)?e:[e];function os(e,t){if(e.size){const r=Array.from(e);e.clear(),ts(r,t)}}const is=(e,...t)=>os(e,(e=>e(...t))),as=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let ss,ls,cs=null,ds=!1,us=Ja;var hs=Object.freeze({__proto__:null,get createStringInterpolator(){return ss},get to(){return ls},get colors(){return cs},get skipAnimation(){return ds},get willAdvance(){return us},assign:e=>{e.to&&(ls=e.to),e.now&&(Ma.now=e.now),void 0!==e.colors&&(cs=e.colors),null!=e.skipAnimation&&(ds=e.skipAnimation),e.createStringInterpolator&&(ss=e.createStringInterpolator),e.requestAnimationFrame&&Ma.use(e.requestAnimationFrame),e.batchedUpdates&&(Ma.batchedUpdates=e.batchedUpdates),e.willAdvance&&(us=e.willAdvance),e.frameLoop&&(Ma.frameLoop=e.frameLoop)}});const ps=new Set;let fs=[],ms=[],gs=0;const ys={get idle(){return!ps.size&&!fs.length},start(e){gs>e.priority?(ps.add(e),Ma.onStart(bs)):(vs(e),Ma(xs))},advance:xs,sort(e){if(gs)Ma.onFrame((()=>ys.sort(e)));else{const t=fs.indexOf(e);~t&&(fs.splice(t,1),ws(e))}},clear(){fs=[],ps.clear()}};function bs(){ps.forEach(vs),ps.clear(),Ma(xs)}function vs(e){fs.includes(e)||ws(e)}function ws(e){fs.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(fs,(t=>t.priority>e.priority)),0,e)}function xs(e){const t=ms;for(let r=0;r<fs.length;r++){const n=fs[r];gs=n.priority,n.idle||(us(n),n.advance(e),n.idle||t.push(n))}return gs=0,ms=fs,ms.length=0,fs=t,fs.length>0}const $s="[-+]?\\d*\\.?\\d+";function _s(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const Ss=new RegExp("rgb"+_s($s,$s,$s)),ks=new RegExp("rgba"+_s($s,$s,$s,$s)),Os=new RegExp("hsl"+_s($s,"[-+]?\\d*\\.?\\d+%","[-+]?\\d*\\.?\\d+%")),js=new RegExp("hsla"+_s($s,"[-+]?\\d*\\.?\\d+%","[-+]?\\d*\\.?\\d+%",$s)),Cs=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Es=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Fs=/^#([0-9a-fA-F]{6})$/,Ps=/^#([0-9a-fA-F]{8})$/;function Is(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Ns(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,o=2*r-n,i=Is(o,n,e+1/3),a=Is(o,n,e),s=Is(o,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Ts(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Ms(e){return(parseFloat(e)%360+360)%360/360}function As(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function zs(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Bs(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Fs.exec(e))?parseInt(t[1]+"ff",16)>>>0:cs&&void 0!==cs[e]?cs[e]:(t=Ss.exec(e))?(Ts(t[1])<<24|Ts(t[2])<<16|Ts(t[3])<<8|255)>>>0:(t=ks.exec(e))?(Ts(t[1])<<24|Ts(t[2])<<16|Ts(t[3])<<8|As(t[4]))>>>0:(t=Cs.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Ps.exec(e))?parseInt(t[1],16)>>>0:(t=Es.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Os.exec(e))?(255|Ns(Ms(t[1]),zs(t[2]),zs(t[3])))>>>0:(t=js.exec(e))?(Ns(Ms(t[1]),zs(t[2]),zs(t[3]))|As(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Ds=(e,t,r)=>{if(Ka.fun(e))return e;if(Ka.arr(e))return Ds({range:e,output:t,extrapolate:r});if(Ka.str(e.output[0]))return ss(e);const n=e,o=n.output,i=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,o,i,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===o)return n;if(t===r)return e<=t?n:o;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=i(c),n===-1/0?c=-c:o===1/0?c+=n:c=c*(o-n)+n;return c}(e,i[t],i[t+1],o[t],o[t+1],l,a,s,n.map)}};function Ls(){return Ls=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ls.apply(this,arguments)}const Rs=Symbol.for("FluidValue.get"),Hs=Symbol.for("FluidValue.observers"),Vs=e=>Boolean(e&&e[Rs]),Ws=e=>e&&e[Rs]?e[Rs]():e,Us=e=>e[Hs]||null;function qs(e,t){let r=e[Hs];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Qs{constructor(e){if(this[Rs]=void 0,this[Hs]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Xs(this,e)}}const Xs=(e,t)=>Zs(e,Rs,t);function Gs(e,t){if(e[Rs]){let r=e[Hs];r||Zs(e,Hs,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Ys(e,t){let r=e[Hs];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Hs]=null,e.observerRemoved&&e.observerRemoved(n,t)}}const Zs=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Js=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ks=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,el=new RegExp(`(${Js.source})(%|[a-z]+)`,"i"),tl=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,rl=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,nl=e=>{const[t,r]=ol(e);if(!t||as())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&rl.test(r)?nl(r):r||e},ol=e=>{const t=rl.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]};let il;const al=(e,t,r,n,o)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,sl=e=>{il||(il=cs?new RegExp(`(${Object.keys(cs).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ws(e).replace(rl,nl).replace(Ks,Bs).replace(il,Bs))),r=t.map((e=>e.match(Js).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Ds(Ls({},e,{output:t}))));return e=>{var r;const o=!el.test(t[0])&&(null==(r=t.find((e=>el.test(e))))?void 0:r.replace(Js,""));let i=0;return t[0].replace(Js,(()=>`${n[i++](e)}${o||""}`)).replace(tl,al)}},ll="react-spring: ",cl=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${ll}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},dl=cl(console.warn);const ul=cl(console.warn);function hl(e){return Ka.str(e)&&("#"==e[0]||/\d/.test(e)||!as()&&rl.test(e)||e in(cs||{}))}const pl="undefined"!=typeof window&&window.document&&window.document.createElement?n.useLayoutEffect:n.useEffect;function fl(){const e=i()[1],t=(()=>{const e=a(!1);return pl((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}const ml=e=>s(e,gl),gl=[];function yl(e){const t=a();return s((()=>{t.current=e})),t.current}const bl=Symbol.for("Animated:node"),vl=e=>e&&e[bl],wl=(e,t)=>{return r=e,n=bl,o=t,Object.defineProperty(r,n,{value:o,writable:!0,configurable:!0});var r,n,o},xl=e=>e&&e[bl]&&e[bl].getPayload();class $l{constructor(){this.payload=void 0,wl(this,this)}getPayload(){return this.payload||[]}}class _l extends $l{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Ka.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new _l(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Ka.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Ka.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class Sl extends _l{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Ds({output:[e,e]})}static create(e){return new Sl(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Ka.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Ds({output:[this.getValue(),e]})),this._value=0,super.reset()}}const kl={dependencies:null};class Ol extends $l{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return rs(this.source,((r,n)=>{var o;(o=r)&&o[bl]===o?t[n]=r.getValue(e):Vs(r)?t[n]=Ws(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&ts(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return rs(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){kl.dependencies&&Vs(e)&&kl.dependencies.add(e);const t=xl(e);t&&ts(t,(e=>this.add(e)))}}class jl extends Ol{constructor(e){super(e)}static create(e){return new jl(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Cl)),!0)}}function Cl(e){return(hl(e)?Sl:_l).create(e)}function El(e){const t=vl(e);return t?t.constructor:Ka.arr(e)?jl:hl(e)?Sl:_l}function Fl(){return Fl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Fl.apply(this,arguments)}const Pl=(e,t)=>{const r=!Ka.fun(e)||e.prototype&&e.prototype.isReactComponent;return l(((o,i)=>{const l=a(null),d=r&&c((e=>{l.current=function(e,t){e&&(Ka.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[u,h]=function(e,t){const r=new Set;kl.dependencies=r,e.style&&(e=Fl({},e,{style:t.createAnimatedStyle(e.style)}));return e=new Ol(e),kl.dependencies=null,[e,r]}(o,t),p=fl(),f=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&p()},m=new Il(f,h),g=a();pl((()=>(g.current=m,ts(h,(e=>Gs(e,m))),()=>{g.current&&(ts(g.current.deps,(e=>Ys(e,g.current))),Ma.cancel(g.current.update))}))),s(f,[]),ml((()=>()=>{const e=g.current;ts(e.deps,(t=>Ys(t,e)))}));const y=t.getComponentProps(u.getValue());return n.createElement(e,Fl({},y,{ref:d}))}))};class Il{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Ma.write(this.update)}}const Nl=Symbol.for("AnimatedComponent"),Tl=e=>Ka.str(e)?e:e&&Ka.str(e.displayName)?e.displayName:Ka.fun(e)&&e.name||null;function Ml(){return Ml=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ml.apply(this,arguments)}function Al(e,...t){return Ka.fun(e)?e(...t):e}const zl=(e,t)=>!0===e||!!(t&&e&&(Ka.fun(e)?e(t):ns(e).includes(t))),Bl=(e,t)=>Ka.obj(e)?t&&e[t]:e,Dl=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Ll=e=>e,Rl=(e,t=Ll)=>{let r=Hl;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const o of r){const r=t(e[o],o);Ka.und(r)||(n[o]=r)}return n},Hl=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Vl={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Wl(e){const t=function(e){const t={};let r=0;if(rs(e,((e,n)=>{Vl[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return rs(e,((e,n)=>n in t||(r[n]=e))),r}return Ml({},e)}function Ul(e){return e=Ws(e),Ka.arr(e)?e.map(Ul):hl(e)?hs.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function ql(e){for(const t in e)return!0;return!1}function Ql(e){return Ka.fun(e)||Ka.arr(e)&&Ka.obj(e[0])}function Xl(e,t){var r;null==(r=e.ref)||r.delete(e),null==t||t.delete(e)}function Gl(e,t){var r;t&&e.ref!==t&&(null==(r=e.ref)||r.delete(e),t.add(e),e.ref=t)}const Yl=1.70158,Zl=1.525*Yl,Jl=2*Math.PI/3,Kl=2*Math.PI/4.5,ec=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},tc=Ml({},{tension:170,friction:26},{mass:1,damping:1,easing:{linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>2.70158*e*e*e-Yl*e*e,easeOutBack:e=>1+2.70158*Math.pow(e-1,3)+Yl*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Zl)/2:(Math.pow(2*e-2,2)*((Zl+1)*(2*e-2)+Zl)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Jl),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Jl)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Kl)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Kl)/2+1,easeInBounce:e=>1-ec(1-e),easeOutBounce:ec,easeInOutBounce:e=>e<.5?(1-ec(1-2*e))/2:(1+ec(2*e-1))/2}.linear,clamp:!1});class rc{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,tc)}}function nc(e,t){if(Ka.und(t.decay)){const r=!Ka.und(t.tension)||!Ka.und(t.friction);!r&&Ka.und(t.frequency)&&Ka.und(t.damping)&&Ka.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}const oc=[];class ic{constructor(){this.changed=!1,this.values=oc,this.toValues=null,this.fromValues=oc,this.to=void 0,this.from=void 0,this.config=new rc,this.immediate=!1}}function ac(e,{key:t,props:r,defaultProps:n,state:o,actions:i}){return new Promise(((a,s)=>{var l;let c,d,u=zl(null!=(l=r.cancel)?l:null==n?void 0:n.cancel,t);if(u)f();else{Ka.und(r.pause)||(o.paused=zl(r.pause,t));let e=null==n?void 0:n.pause;!0!==e&&(e=o.paused||zl(e,t)),c=Al(r.delay||0,t),e?(o.resumeQueue.add(p),i.pause()):(i.resume(),p())}function h(){o.resumeQueue.add(p),o.timeouts.delete(d),d.cancel(),c=d.time-Ma.now()}function p(){c>0&&!hs.skipAnimation?(o.delayed=!0,d=Ma.setTimeout(f,c),o.pauseQueue.add(h),o.timeouts.add(d)):f()}function f(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(h),o.timeouts.delete(d),e<=(o.cancelId||0)&&(u=!0);try{i.start(Ml({},r,{callId:e,cancel:u}),a)}catch(e){s(e)}}}))}const sc=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?dc(e.get()):t.every((e=>e.noop))?lc(e.get()):cc(e.get(),t.every((e=>e.finished))),lc=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),cc=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),dc=e=>({value:e,cancelled:!0,finished:!1});function uc(e,t,r,n){const{callId:o,parentId:i,onRest:a}=t,{asyncTo:s,promise:l}=r;return i||e!==s||t.reset?r.promise=(async()=>{r.asyncId=o,r.asyncTo=e;const c=Rl(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const h=new Promise(((e,t)=>(d=e,u=t))),p=e=>{const t=o<=(r.cancelId||0)&&dc(n)||o!==r.asyncId&&cc(n,!1);if(t)throw e.result=t,u(e),e},f=(e,t)=>{const i=new pc,a=new fc;return(async()=>{if(hs.skipAnimation)throw hc(r),a.result=cc(n,!1),u(a),a;p(i);const s=Ka.obj(e)?Ml({},e):Ml({},t,{to:e});s.parentId=o,rs(c,((e,t)=>{Ka.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return p(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let m;if(hs.skipAnimation)return hc(r),cc(n,!1);try{let t;t=Ka.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,n.stop.bind(n))),await Promise.all([t.then(d),h]),m=cc(n.get(),!0,!1)}catch(e){if(e instanceof pc)m=e.result;else{if(!(e instanceof fc))throw e;m=e.result}}finally{o==r.asyncId&&(r.asyncId=i,r.asyncTo=i?s:void 0,r.promise=i?l:void 0)}return Ka.fun(a)&&Ma.batchedUpdates((()=>{a(m,n,n.item)})),m})():l}function hc(e,t){os(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class pc extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class fc extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const mc=e=>e instanceof yc;let gc=1;class yc extends Qs{constructor(...e){super(...e),this.id=gc++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=vl(this);return e&&e.getValue()}to(...e){return hs.to(this,e)}interpolate(...e){return dl(`${ll}The "interpolate" function is deprecated in v9 (use "to" instead)`),hs.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){qs(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ys.sort(this),qs(this,{type:"priority",parent:this,priority:e})}}const bc=Symbol.for("SpringPhase"),vc=e=>(1&e[bc])>0,wc=e=>(2&e[bc])>0,xc=e=>(4&e[bc])>0,$c=(e,t)=>t?e[bc]|=3:e[bc]&=-3,_c=(e,t)=>t?e[bc]|=4:e[bc]&=-5;class Sc extends yc{constructor(e,t){if(super(),this.key=void 0,this.animation=new ic,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Ka.und(e)||!Ka.und(t)){const r=Ka.obj(e)?Ml({},e):Ml({},t,{from:e});Ka.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(wc(this)||this._state.asyncTo)||xc(this)}get goal(){return Ws(this.animation.to)}get velocity(){const e=vl(this);return e instanceof _l?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return vc(this)}get isAnimating(){return wc(this)}get isPaused(){return xc(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{config:o,toValues:i}=n;const a=xl(n.to);!a&&Vs(n.to)&&(i=ns(Ws(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==Sl?1:a?a[l].lastPosition:i[l];let d=n.immediate,u=c;if(!d){if(u=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=Ka.arr(o.velocity)?o.velocity[l]:o.velocity;let a;if(Ka.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*t);u=r+i/(1-e)*(1-n),d=Math.abs(s.lastPosition-u)<.1,a=i*n}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r))),n=o.restVelocity||t/10,l=o.clamp?0:o.bounce,h=!Ka.und(l),p=r==c?s.v0>0:r<c;let f,m=!1;const g=1,y=Math.ceil(e/g);for(let e=0;e<y&&(f=Math.abs(a)>n,f||(d=Math.abs(c-u)<=t,!d));++e){h&&(m=u==c||u>c==p,m&&(a=-a*l,u=c));a+=(1e-6*-o.tension*(u-c)+.001*-o.friction*a)/o.mass*g,u+=a*g}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(o.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+o.easing(n)*(c-r),a=(u-s.lastPosition)/e,d=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}a&&!a[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,o.round)&&(r=!0)}));const s=vl(this),l=s.getValue();if(t){const e=Ws(n.to);l===e&&!r||o.decay?r&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Ma.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(wc(this)){const{to:e,config:t}=this.animation;Ma.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Ka.und(e)?(r=this.queue||[],this.queue=[]):r=[Ka.obj(e)?e:Ml({},t,{to:e})],Promise.all(r.map((e=>this._update(e)))).then((e=>sc(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),hc(this._state,e&&this._lastCallId),Ma.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Ka.obj(r)?r[t]:r,(null==r||Ql(r))&&(r=void 0),n=Ka.obj(n)?n[t]:n,null==n&&(n=void 0);const o={to:r,from:n};return vc(this)||(e.reverse&&([r,n]=[n,r]),n=Ws(n),Ka.und(n)?vl(this)||this._set(r):this._set(n)),o}_update(e,t){let r=Ml({},e);const{key:n,defaultProps:o}=this;r.default&&Object.assign(o,Rl(r,((e,t)=>/^on/.test(t)?Bl(e,n):e))),Pc(this,r,"onProps"),Ic(this,"onProps",r,this);const i=this._prepareNode(r);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return ac(++this._lastCallId,{key:n,props:r,defaultProps:o,state:a,actions:{pause:()=>{xc(this)||(_c(this,!0),is(a.pauseQueue),Ic(this,"onPause",cc(this,kc(this,this.animation.to)),this))},resume:()=>{xc(this)&&(_c(this,!1),wc(this)&&this._resume(),is(a.resumeQueue),Ic(this,"onResume",cc(this,kc(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((e=>{if(r.loop&&e.finished&&(!t||!e.noop)){const e=Oc(r);if(e)return this._update(e,!0)}return e}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(dc(this));const n=!Ka.und(e.to),o=!Ka.und(e.from);if(n||o){if(!(t.callId>this._lastToId))return r(dc(this));this._lastToId=t.callId}const{key:i,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!o||n||t.default&&!Ka.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const h=!es(u,c);h&&(s.from=u),u=Ws(u);const p=!es(d,l);p&&this._focus(d);const f=Ql(t.to),{config:m}=s,{decay:g,velocity:y}=m;(n||o)&&(m.velocity=0),t.config&&!f&&function(e,t,r){r&&(nc(r=Ml({},r),t),t=Ml({},r,t)),nc(e,t),Object.assign(e,t);for(const t in tc)null==e[t]&&(e[t]=tc[t]);let{mass:n,frequency:o,damping:i}=e;Ka.und(o)||(o<.01&&(o=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/o,2)*n,e.friction=4*Math.PI*i*n/o)}(m,Al(t.config,i),t.config!==a.config?Al(a.config,i):void 0);let b=vl(this);if(!b||Ka.und(d))return r(cc(this,!0));const v=Ka.und(t.reset)?o&&!t.default:!Ka.und(u)&&zl(t.reset,i),w=v?u:this.get(),x=Ul(d),$=Ka.num(x)||Ka.arr(x)||hl(x),_=!f&&(!$||zl(a.immediate||t.immediate,i));if(p){const e=El(d);if(e!==b.constructor){if(!_)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(x)}}const S=b.constructor;let k=Vs(d),O=!1;if(!k){const e=v||!vc(this)&&h;(p||e)&&(O=es(Ul(w),x),k=!O),(es(s.immediate,_)||_)&&es(m.decay,g)&&es(m.velocity,y)||(k=!0)}if(O&&wc(this)&&(s.changed&&!v?k=!0:k||this._stop(l)),!f&&((k||Vs(l))&&(s.values=b.getPayload(),s.toValues=Vs(d)?null:S==Sl?[1]:ns(x)),s.immediate!=_&&(s.immediate=_,_||v||this._set(l)),k)){const{onRest:e}=s;ts(Fc,(e=>Pc(this,t,e)));const n=cc(this,kc(this,l));is(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Ma.batchedUpdates((()=>{s.changed=!v,null==e||e(n,this),v?Al(a.onRest,n):null==s.onStart||s.onStart(n,this)}))}v&&this._set(w),f?r(uc(t.to,t,this._state,this)):k?this._start():wc(this)&&!p?this._pendingCalls.add(r):r(lc(w))}_focus(e){const t=this.animation;e!==t.to&&(Us(this)&&this._detach(),t.to=e,Us(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Vs(t)&&(Gs(t,this),mc(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Vs(e)&&Ys(e,this)}_set(e,t=!0){const r=Ws(e);if(!Ka.und(r)){const e=vl(this);if(!e||!es(r,e.getValue())){const n=El(r);e&&e.constructor==n?e.setValue(r):wl(this,n.create(r)),e&&Ma.batchedUpdates((()=>{this._onChange(r,t)}))}}return vl(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Ic(this,"onStart",cc(this,kc(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Al(this.animation.onChange,e,this)),Al(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;vl(this).reset(Ws(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),wc(this)||($c(this,!0),xc(this)||this._resume())}_resume(){hs.skipAnimation?this.finish():ys.start(this)}_stop(e,t){if(wc(this)){$c(this,!1);const r=this.animation;ts(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),qs(this,{type:"idle",parent:this});const n=t?dc(this.get()):cc(this.get(),kc(this,null!=e?e:r.to));is(this._pendingCalls,n),r.changed&&(r.changed=!1,Ic(this,"onRest",n,this))}}}function kc(e,t){const r=Ul(t);return es(Ul(e.get()),r)}function Oc(e,t=e.loop,r=e.to){let n=Al(t);if(n){const o=!0!==n&&Wl(n),i=(o||e).reverse,a=!o||o.reset;return jc(Ml({},e,{loop:t,default:!1,pause:void 0,to:!i||Ql(r)?r:void 0,from:a?e.from:void 0,reset:a},o))}}function jc(e){const{to:t,from:r}=e=Wl(e),n=new Set;return Ka.obj(t)&&Ec(t,n),Ka.obj(r)&&Ec(r,n),e.keys=n.size?Array.from(n):null,e}function Cc(e){const t=jc(e);return Ka.und(t.default)&&(t.default=Rl(t)),t}function Ec(e,t){rs(e,((e,r)=>null!=e&&t.add(r)))}const Fc=["onStart","onRest","onChange","onPause","onResume"];function Pc(e,t,r){e.animation[r]=t[r]!==Dl(t,r)?Bl(t[r],e.key):void 0}function Ic(e,t,...r){var n,o,i,a;null==(n=(o=e.animation)[t])||n.call(o,...r),null==(i=(a=e.defaultProps)[t])||i.call(a,...r)}const Nc=["onStart","onChange","onRest"];let Tc=1;class Mc{constructor(e,t){this.id=Tc++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Ml({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Ka.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(jc(e)),this}start(e){let{queue:t}=this;return e?t=ns(e).map(jc):this.queue=[],this._flush?this._flush(this,t):(Hc(this,t),Ac(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;ts(ns(t),(t=>r[t].stop(!!e)))}else hc(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Ka.und(e))this.start({pause:!0});else{const t=this.springs;ts(ns(e),(e=>t[e].pause()))}return this}resume(e){if(Ka.und(e))this.start({pause:!1});else{const t=this.springs;ts(ns(e),(e=>t[e].resume()))}return this}each(e){rs(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,o=this._changed.size>0;(n&&!this._started||o&&!this._started)&&(this._started=!0,os(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,a=o||i&&r.size?this.get():null;o&&t.size&&os(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),i&&(this._started=!1,os(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Ma.onFrame(this._onFrame)}}function Ac(e,t){return Promise.all(t.map((t=>zc(e,t)))).then((t=>sc(e,t)))}async function zc(e,t,r){const{keys:n,to:o,from:i,loop:a,onRest:s,onResolve:l}=t,c=Ka.obj(t.default)&&t.default;a&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const d=Ka.arr(o)||Ka.fun(o)?o:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):ts(Nc,(r=>{const n=t[r];if(Ka.fun(n)){const o=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=o.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):o.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,is(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),p=!0===t.cancel||!0===Dl(t,"cancel");(d||p&&u.asyncId)&&h.push(ac(++e._lastAsyncId,{props:t,state:u,actions:{pause:Ja,resume:Ja,start(t,r){p?(hc(u,e._lastAsyncId),r(dc(e))):(t.onRest=s,r(uc(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const f=sc(e,await Promise.all(h));if(a&&f.finished&&(!r||!f.noop)){const r=Oc(t,a,o);if(r)return Hc(e,[r]),zc(e,r,!0)}return l&&Ma.batchedUpdates((()=>l(f,e,e.item))),f}function Bc(e,t){const r=Ml({},e.springs);return t&&ts(ns(t),(e=>{Ka.und(e.keys)&&(e=jc(e)),Ka.obj(e.to)||(e=Ml({},e,{to:void 0})),Rc(r,e,(e=>Lc(e)))})),Dc(e,r),r}function Dc(e,t){rs(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Gs(t,e))}))}function Lc(e,t){const r=new Sc;return r.key=e,t&&Gs(r,t),r}function Rc(e,t,r){t.keys&&ts(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Hc(e,t){ts(t,(t=>{Rc(e.springs,t,(t=>Lc(t,e)))}))}const Vc=["children"],Wc=e=>{let{children:t}=e,r=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,Vc);const o=d(Uc),l=r.pause||!!o.pause,c=r.immediate||!!o.immediate;r=function(e,t){const[r]=i((()=>({inputs:t,result:e()}))),n=a(),o=n.current;let l=o;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=r;return s((()=>{n.current=l,o==r&&(r.inputs=r.result=void 0)}),[l]),l.result}((()=>({pause:l,immediate:c})),[l,c]);const{Provider:u}=Uc;return n.createElement(u,{value:r},t)},Uc=(qc=Wc,Qc={},Object.assign(qc,n.createContext(Qc)),qc.Provider._context=qc,qc.Consumer._context=qc,qc);var qc,Qc;Wc.Provider=Uc.Provider,Wc.Consumer=Uc.Consumer;const Xc=()=>{const e=[],t=function(t){ul(`${ll}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return ts(e,((e,o)=>{if(Ka.und(t))n.push(e.start());else{const i=r(t,e,o);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return ts(e,(e=>e.pause(...arguments))),this},t.resume=function(){return ts(e,(e=>e.resume(...arguments))),this},t.set=function(t){ts(e,(e=>e.set(t)))},t.start=function(t){const r=[];return ts(e,((e,n)=>{if(Ka.und(t))r.push(e.start());else{const o=this._getProps(t,e,n);o&&r.push(e.start(o))}})),r},t.stop=function(){return ts(e,(e=>e.stop(...arguments))),this},t.update=function(t){return ts(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Ka.fun(e)?e(r,t):e};return t._getProps=r,t};function Gc(e,t,r){const n=Ka.fun(t)&&t;n&&!r&&(r=[]);const o=u((()=>n||3==arguments.length?Xc():void 0),[]),i=a(0),s=fl(),l=u((()=>({ctrls:[],queue:[],flush(e,t){const r=Bc(e,t);return i.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Ac(e,t):new Promise((n=>{Dc(e,r),l.queue.push((()=>{n(Ac(e,t))})),s()}))}})),[]),c=a([...l.ctrls]),h=[],p=yl(e)||0;function f(e,r){for(let o=e;o<r;o++){const e=c.current[o]||(c.current[o]=new Mc(null,l.flush)),r=n?n(o,e):t[o];r&&(h[o]=Cc(r))}}u((()=>{ts(c.current.slice(e,p),(e=>{Xl(e,o),e.stop(!0)})),c.current.length=e,f(p,e)}),[e]),u((()=>{f(0,Math.min(p,e))}),r);const m=c.current.map(((e,t)=>Bc(e,h[t]))),g=d(Wc),y=yl(g),b=g!==y&&ql(g);pl((()=>{i.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],ts(e,(e=>e()))),ts(c.current,((e,t)=>{null==o||o.add(e),b&&e.start({default:g});const r=h[t];r&&(Gl(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),ml((()=>()=>{ts(l.ctrls,(e=>e.stop(!0)))}));const v=m.map((e=>Ml({},e)));return o?[v,o]:v}function Yc(e,t){const r=Ka.fun(e),[[n],o]=Gc(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,o]:n}let Zc;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Zc||(Zc={}));class Jc extends yc{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Ds(...t);const r=this._get(),n=El(r);wl(this,n.create(r))}advance(e){const t=this._get();es(t,this.get())||(vl(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&ed(this._active)&&td(this)}_get(){const e=Ka.arr(this.source)?this.source.map(Ws):ns(Ws(this.source));return this.calc(...e)}_start(){this.idle&&!ed(this._active)&&(this.idle=!1,ts(xl(this),(e=>{e.done=!1})),hs.skipAnimation?(Ma.batchedUpdates((()=>this.advance())),td(this)):ys.start(this))}_attach(){let e=1;ts(ns(this.source),(t=>{Vs(t)&&Gs(t,this),mc(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){ts(ns(this.source),(e=>{Vs(e)&&Ys(e,this)})),this._active.clear(),td(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=ns(this.source).reduce(((e,t)=>Math.max(e,(mc(t)?t.priority:0)+1)),0))}}function Kc(e){return!1!==e.idle}function ed(e){return!e.size||Array.from(e).every(Kc)}function td(e){e.idle||(e.idle=!0,ts(xl(e),(e=>{e.done=!0})),qs(e,{type:"idle",parent:e}))}function rd(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}hs.assign({createStringInterpolator:sl,to:(e,t)=>new Jc(e,t)});const nd=["style","children","scrollTop","scrollLeft"],od=/^--/;function id(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||od.test(e)||sd.hasOwnProperty(e)&&sd[e]?(""+t).trim():t+"px"}const ad={};let sd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const ld=["Webkit","Ms","Moz","O"];sd=Object.keys(sd).reduce(((e,t)=>(ld.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),sd);const cd=["x","y","z"],dd=/^(matrix|translate|scale|rotate|skew)/,ud=/^(translate)/,hd=/^(rotate|skew)/,pd=(e,t)=>Ka.num(e)&&0!==e?e+t:e,fd=(e,t)=>Ka.arr(e)?e.every((e=>fd(e,t))):Ka.num(e)?e===t:parseFloat(e)===t;class md extends Ol{constructor(e){let{x:t,y:r,z:n}=e,o=rd(e,cd);const i=[],a=[];(t||r||n)&&(i.push([t||0,r||0,n||0]),a.push((e=>[`translate3d(${e.map((e=>pd(e,"px"))).join(",")})`,fd(e,0)]))),rs(o,((e,t)=>{if("transform"===t)i.push([e||""]),a.push((e=>[e,""===e]));else if(dd.test(t)){if(delete o[t],Ka.und(e))return;const r=ud.test(t)?"px":hd.test(t)?"deg":"";i.push(ns(e)),a.push("rotate3d"===t?([e,t,n,o])=>[`rotate3d(${e},${t},${n},${pd(o,r)})`,fd(o,0)]:e=>[`${t}(${e.map((e=>pd(e,r))).join(",")})`,fd(e,t.startsWith("scale")?1:0)])}})),i.length&&(o.transform=new gd(i,a)),super(o)}}class gd extends Qs{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return ts(this.inputs,((r,n)=>{const o=Ws(r[0]),[i,a]=this.transforms[n](Ka.arr(o)?o:r.map(Ws));e+=" "+i,t=t&&a})),t?"none":e}observerAdded(e){1==e&&ts(this.inputs,(e=>ts(e,(e=>Vs(e)&&Gs(e,this)))))}observerRemoved(e){0==e&&ts(this.inputs,(e=>ts(e,(e=>Vs(e)&&Ys(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),qs(this,e)}}const yd=["scrollTop","scrollLeft"];hs.assign({batchedUpdates:x,createStringInterpolator:sl,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const bd=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new Ol(e)),getComponentProps:n=(e=>e)}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=Tl(e)||"Anonymous";return(e=Ka.str(e)?i[e]||(i[e]=Pl(e,o)):e[Nl]||(e[Nl]=Pl(e,o))).displayName=`Animated(${t})`,e};return rs(e,((t,r)=>{Ka.arr(e)&&(r=Tl(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,n=t,{style:o,children:i,scrollTop:a,scrollLeft:s}=n,l=rd(n,nd),c=Object.values(l),d=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:ad[t]||(ad[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(let t in o)if(o.hasOwnProperty(t)){const r=id(t,o[t]);od.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s)},createAnimatedStyle:e=>new md(e),getComponentProps:e=>rd(e,yd)}),vd=bd.animated,wd=y.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,xd=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,$d=y.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Qt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${xd} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,_d=y($d)`
    animation-delay: -0.45s;
`,Sd=y($d)`
    animation-delay: -0.3s;
`,kd=y($d)`
    animation-delay: -0.15s;
`,Od=y.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return b`
                    background-color: ${Qt.Neutral[8](e)};
                    border: 1px solid ${Qt.Primary(e)};

                    span {
                        color: ${Qt.Primary(e)};
                    }
                `;case"light":return b`
                    background-color: ${Qt.Neutral[8](e)};
                    border: 1px solid ${Qt.Neutral[5](e)};

                    span {
                        color: ${Qt.Primary(e)};
                    }
                `;case"disabled":return b`
                    background-color: ${Qt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Qt.Neutral[3](e)};
                    }
                `;case"link":return b`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Qt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Qt.Secondary};
                        }
                    }
                `;default:return b`
                    background-color: ${Qt.Primary(e)};
                    border: 1px solid transparent;

                    ${jr.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Qt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?b`
                    height: 2.5rem;
                    span {
                        ${zr("H5","semibold")}
                    }

                    ${jr.mobileS} {
                        height: auto;
                    }
                `:b`
                    height: 3rem;
                    span {
                        ${zr("H4","semibold")}
                    }

                    ${jr.mobileS} {
                        height: auto;
                    }
                `}
`,jd=y((({color:r,className:n,size:o=18})=>t(wd,{className:n,$size:o,$color:r,children:[e($d,{id:"inner1",$size:o-2,$borderWidth:2}),e(_d,{id:"inner2",$size:o-2,$borderWidth:2}),e(Sd,{id:"inner3",$size:o-2,$borderWidth:2}),e(kd,{id:"inner4",$size:o-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Qt.Primary(e);break;case"disabled":t=Qt.Neutral[3](e);break;default:t=Qt.Neutral[8](e)}return b`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Cd=y.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return b`
            height: ${t};
            width: ${r};
        `}}

    position: relative;
    border-radius: 4px;
    transition: all 200ms ease-in-out;
    border: 1px solid ${Qt.Accent.Light[2]};
    background: transparent;

    ${e=>{let t,r;return e.selected&&(t=Qt.Primary(e),r=Qt.Primary(e)),e.disabled&&(t=Qt.Neutral[6](e),r=Qt.Neutral[6](e)),`\n\t\t\tborder: 1px solid ${t};\n\t\t\tbackground: ${r};\n\t\t`}}
`,Ed=y.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Fd=y(er)`
    ${e=>{let t;if("small"===e.$displaySize)t="1.3rem";else t="1.5rem";return b`
            font-size: ${t};
        `}}
    font-weight: bold;
    color: ${e=>e.disabled?Qt.Neutral[4]:Qt.Neutral[8]};
`,Pd=y(vd.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Id=y.ul`
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
        background: ${Qt.Neutral[4]};
        border-right: 5px solid ${Qt.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${jr.mobileL} {
        max-height: 15rem;
    }
`,Nd=y.li`
    :hover,
    :focus,
    :active {
        background: ${Qt.Accent.Light[5]};
    }
    ${e=>{if(e.checked)return b`
                background: ${Qt.Accent.Light[5]};
            `}}
`,Td=y.button`
    display: flex;
    ${e=>e.multiSelect?b`
                padding: 0.5rem 1rem;
            `:b`
                padding: 0 1rem;
                height: 3.5rem;
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
        outline-color: ${Qt.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`;y.div`
    position: relative;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Qt.Neutral[8]};
`;const Md=y.div`
    ${zr("Body","regular")}
    color: ${Qt.Neutral[1]};
    text-align: left;
    line-height: 1.375rem;
    overflow: hidden;
    ${e=>{if("middle"!==e.truncateType)return b`
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                `}}
`,Ad=y.div`
    display: flex;
    flex-direction: column;
`,zd=y.div`
    width: 100%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Bd=y.div`
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;y(Dr.Hyperlink.Default)`
    color: ${Qt.Neutral[1]} !important;
    padding: 1.25rem 1rem;
    margin-bottom: 0;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Qt.Accent.Light[3]};
        color: ${Qt.Neutral[1]};
    }
`;const Dd=y((({className:r,checked:n,disabled:o,onClick:a,onKeyPress:l,displaySize:c="default",...d})=>{const[u,h]=i(n);s((()=>{h(n)}),[n]);const p=e=>{o||(a&&a(e),l&&l(e))};return t(Cd,{selected:u,disabled:o,className:r,"data-testid":"checkbox",onKeyPress:p,tabIndex:o?-1:0,role:"checkbox",$displaySize:c,children:[e(Ed,{type:"checkbox","data-testid":"checkbox-input",onClick:p,disabled:o,tabIndex:-1,...d}),u&&e(Fd,{type:"check",id:"checkmark","data-testid":"checkmark",disabled:o,$displaySize:c})]})}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Ld=y.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Rd=y.button`
    ${zr("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${Qt.Primary(e)};\n\t\t`}
`,Hd=y.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Vd=y(Dr.Body)``,Wd=y.div`
    display: flex;
    align-items: center;
    margin-right: 0.625rem;
    font-size: 1.5rem;

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    ${e=>b`
            color: ${Qt.Validation.Red.Icon(e)};
        `}
`,Ud=y.li`
    background: ${Qt.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,qd=y.input`
    ${zr("Body","regular")}
    height: 3.5rem;
    border: none;
    background: transparent;
    width: 100%;
    padding: 0 0.5rem 0 0;

    :focus,
    :active {
        outline: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Qt.Neutral[3]};
    }
`,Qd=y(er)`
    height: 1.5rem;
    width: 1.5rem;
    margin: 0 0.5rem;
    color: ${Qt.Neutral[3]};
`,Xd=l(((r,n)=>t(Ud,{children:[e(Qd,{type:"search"}),e(qd,{ref:n,...r})]},"search"))),Gd=({listItems:r,listExtractor:n,valueExtractor:o,onSelectItem:l,listStyleWidth:c,visible:d,enableSearch:u,searchPlaceholder:h="Search",onSearch:p,searchFunction:f,onDismiss:m,multiSelect:g,selectedItems:y,onSelectAll:b,onRetry:v,itemsLoadState:w="success",itemTruncationType:x="end",...$})=>{const[_,S]=i(0),[k,O]=i(""),[j,C]=i(r),[E,F]=i(0),P=Yc({height:E}),I=a(),N=a(),T=a([]),M=a(),A=a(_),z=a(j),B=e=>{A.current=e,S(e)},D=e=>{z.current=e,C(e)};s((()=>(document.addEventListener("keydown",U),()=>{document.removeEventListener("keydown",U)})),[]),s((()=>{V(k)}),[k]),s((()=>{O(""),d?(F(W()),M&&M.current?(M.current.focus(),B(-1)):T.current[_]&&T.current[_].focus()):F(0)}),[d]),s((()=>{if(d){const e=W();F(e)}}),[j]),s((()=>{D(r),O(""),B(0)}),[r]);const L=e=>n?n(e):e.toString(),R=e=>{const t=n?n(e):e.toString();let r=0;return N&&N.current&&(r=N.current.getBoundingClientRect().width-100),dn.shouldTruncateToTwoLines(t,r)},H=e=>ka(y,e)>-1,V=e=>{if(""===e)D(r);else if(f){const t=f(e);D(t)}else{const t=r.filter((t=>L(t).toLowerCase().includes(e.trim().toLowerCase())));D(t)}},W=()=>N&&N.current?N.current.getBoundingClientRect().height:0,U=e=>{if(I&&I.current.contains(e.target))switch(e.code){case"ArrowDown":if(A.current<z.current.length-1){const e=A.current+1;T.current[e].focus(),B(e)}break;case"ArrowUp":if(A.current>0){const e=A.current-1;T.current[e].focus(),B(A.current-1)}break;case"Escape":m&&m()}},q=(e,t)=>{e.preventDefault(),l&&l(t,(e=>o?o(e):e)(t))},Q=()=>{v&&v()},X=r=>{const o=n?n(r):r.toString();return t(Ad,{"data-testid":"truncate-middle-container",children:[e(zd,{children:o}),t(Bd,{children:[" ",o]})]})};return e(Pd,{style:P,"data-testid":d?"dropdown-container":"dropdown-container-hidden",ref:I,children:t(Id,{ref:N,"data-testid":"dropdown-list",width:c,role:"list",...$,children:[(u||f)&&"success"===w?e(Xd,{ref:M,onChange:e=>{const t=e.target.value;O(t),p&&p()},value:k,placeholder:h,"data-testid":"search-input","aria-label":"search-input",tabIndex:d?0:-1}):null,(()=>{if(g&&j.length>0&&!k&&"success"===w)return e(Ld,{children:e(Rd,{onClick:b,children:0===y.length?"Select all":"Unselect all"})},"selectAll")})(),(()=>{if(k&&0===j.length)return t(Hd,{"data-testid":"list-no-results",children:[e(Wd,{"data-testid":"no-result-icon",children:e(Na,{})}),e(Vd,{children:"No results found."})]},"noResults")})(),(()=>{if(v&&"loading"===w)return t(Hd,{"data-testid":"list-loading",children:[e(jd,{$buttonStyle:"secondary",size:24}),e(Vd,{children:"Loading..."})]},"loading")})(),(()=>{if(v&&"fail"===w)return t(Hd,{"data-testid":"list-fail",children:[e(Wd,{"data-testid":"load-error-icon",children:e(Na,{})}),e(Vd,{children:"Failed to load."}),e(Rd,{onClick:Q,children:"Try again."})]},"noResults")})(),(()=>{if(!v||v&&"success"===w)return j.map(((r,n)=>e(Nd,{checked:H(r)&&!g,children:t(Td,{onClick:e=>{q(e,r)},ref:e=>T.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:d?0:-1,multiSelect:g,children:[g&&e(Dd,{checked:H(r),displaySize:"small"}),e(Md,{truncateType:x,children:"middle"===x&&R(r)?X(r):L(r)})]})},((e,t)=>`item_${t}__${o?o(e):e}`)(r,n))))})()]})})},Yd=y.div`
    position: relative;
    min-height: 3rem;
    height: 3rem;
    width: 100%;

    ${jr.tablet} {
        height: auto;
    }
`,Zd=y.button`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0.702rem 1rem; // To make it exactly 3rem height
    width: 100%;
    border-radius: ${"4px"};
    cursor: pointer;
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }
`,Jd=v`
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
`,Kd=y.div`
    position: relative;
    border: 1px solid ${Qt.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Qt.Neutral[8]};

    :focus-within {
        border: 1px solid ${Qt.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    ${e=>e.expanded?b`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:b`
                animation: ${Jd} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?b`
                background: ${Qt.Neutral[6](e)};

                ${Zd} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Qt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?b`
                border: 1px solid ${Qt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Qt.Validation.Red.Border(e)};
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `:void 0}
`,eu=y.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Xr};
    margin-left: 1rem;
`,tu=y(er)`
    color: ${Qt.Neutral[3]};
    font-size: ${Nr.Body.fontSize}rem;
    font-weight: bold;
`,ru=y.div`
    height: 1px;
    background: ${Qt.Neutral[5]};
    margin: 0 0.5rem;
`,nu=y.div`
    display: flex;
    flex: 1;
`,ou=y(Dr.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return b`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,iu=y(ou)`
    color: ${Qt.Neutral[3]};
`,au=Yd,su=y(Kd)``,lu=y.div`
    position: relative;
    display: flex;
    height: 3rem;
    margin: 0 0.5rem;
    ${e=>{if(e.$expanded)return b`
                border-bottom: 1px solid ${Qt.Neutral[5](e)};
            `}}
`,cu=y.button`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem 0 0.5rem;
    height: 3rem;
    border-radius: ${"4px"};
    cursor: pointer;
    border: none;
    background: transparent;

    :focus,
    :active {
        outline-color: ${Qt.Accent.Light[3]};
    }
`,du=y.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Xr};
    margin-left: 1rem;
`,uu=y(er)`
    color: ${Qt.Neutral[3]};
    font-size: ${Nr.Body.fontSize}rem;
    font-weight: bold;
`,hu=y.div`
    display: flex;
    flex: 1 1 auto;
`,pu=y(Dr.Body)`
    text-align: left;
    line-height: 1.375rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,fu=y(pu)`
    color: ${Qt.Neutral[3]};
`,mu=y.div`
    margin: 1rem 1rem 1rem 0;
    width: 1px;
    background: ${Qt.Neutral[5]};
`,gu=({addon:n,error:o,...l})=>{const{value:c,placeholder:d,options:u,enableSearch:h,searchFunction:p,searchPlaceholder:f,valueExtractor:m,listExtractor:g,displayValueExtractor:y,onSelectOption:b,onHideOptions:v,onShowOptions:w,"data-selector-testid":x}=n.attributes,[$,_]=i(c),[S,k]=i(!1),O=a(),j=a();s((()=>{_(c)}),[c]),s((()=>(document.addEventListener("mousedown",E),()=>{document.removeEventListener("mousedown",E)})),[]);const C=e=>{!e&&v&&v(),e&&w&&w()},E=e=>{if(!l.disabled){if(O&&O.current.contains(e.target))return;k(!1),C(!1)}},F=e=>{e.preventDefault(),l.disabled||(k(!S),C(!S))},P=(e,t)=>{_(e),k(!1),C(!1),j&&j.current.focus(),b&&b(e,t)};return e(au,{children:t(su,{ref:O,disabled:l.disabled,error:o&&!S,expanded:S,children:[t(lu,{$expanded:S,children:[e(cu,{ref:j,type:"button","data-testid":x||"addon-selector",onClick:F,children:t(r,{children:[t(hu,{children:[d&&!$&&e(fu,{children:d}),$&&e(pu,{"data-testid":"selector-label",children:y?y($):m?m($):$.toString()})]}),e(du,{$expanded:S,children:e(uu,{type:"chevron-down"})})]})}),e(mu,{}),e(Cn,{...l,"data-testid":l["data-testid"]||"input"})]}),u&&u.length>0?e(Gd,{listItems:u,onSelectItem:P,valueExtractor:m,listExtractor:g,visible:S,enableSearch:h,searchFunction:p,searchPlaceholder:f,"data-testid":"dropdown-list"}):null]})})},yu=o.forwardRef((({addon:r,error:n,...o},i)=>{const a=()=>e(jn,{disabled:o.disabled,$error:n,$readOnly:"readonly"===o.type,"data-testid":o["data-testid"],children:e(Cn,{ref:i,"data-testid":"input",...o})});if(!r)return a();{const{type:i="label",position:s="left"}=r;switch(i){case"list":{const t=r.attributes;return t.options&&t.options.length>0?e(gu,{addon:r,error:n,...o}):a()}case"custom":{const i=r.attributes;return i.children?t(jn,{$error:n,disabled:o.disabled,$readOnly:"readonly"===o.type,"data-testid":o["data-testid"],$position:s,children:[e(En,{"data-testid":"addon",disabled:o.disabled,$readOnly:"readonly"===o.type,children:i.children}),e(Cn,{...o,$position:s,$readOnly:"readonly"===o.type,"data-testid":"input"})]}):a()}default:{const i=r.attributes;return i.value?t(jn,{disabled:o.disabled,$error:n,$readOnly:"readonly"===o.type,"data-testid":o["data-testid"],$position:s,children:[e(En,{"data-testid":"addon",disabled:o.disabled,$readOnly:"readonly"===o.type,children:i.value}),e(Cn,{...o,$position:s,$readOnly:"readonly"===o.type,"data-testid":"input"})]}):a()}}}})),bu=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i="form-field-group","data-error-testid":a,"data-testid":s,...l}=t;return e(cn,{id:i,label:n,errorMessage:o,disabled:l.disabled,"data-error-testid":a,children:e(yu,{ref:r,id:`${i}-base`,"data-testid":s||i,error:!!o,...l})})})),vu=({children:t,show:r,error:n,disabled:o,testId:i,onBlur:l})=>{const c=a(),d=a(r);s((()=>(document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)})),[]),s((()=>{d.current=r}),[r]);const u=e=>{if(!o){if(c&&c.current.contains(e.target))return;d.current&&l()}};return e(Yd,{children:e(Kd,{ref:c,error:n&&!r,disabled:o,expanded:r,"data-testid":i,children:t})})},wu=({selectedOptions:n,placeholder:o="Select",options:l,disabled:c,error:d,"data-testid":u,enableSearch:h=!1,searchFunction:p,searchPlaceholder:f,valueExtractor:m,listExtractor:g,onSelectOptions:y,listStyleWidth:b,onShowOptions:v,onHideOptions:w,onRetry:x,optionsLoadState:$="success",optionTruncationType:_="end",...S})=>{const[k,O]=i(n||[]),[j,C]=i(!1),E=a();s((()=>{O(n||[])}),[n]);const F=(e,t)=>{const r=[...k],n=ka(k,(e=>(m?m(e):e)===t));n>-1?r.splice(n,1):r.push(e),O(r),N(!1),E&&E.current.focus(),y&&y(r)},P=()=>{j&&(C(!1),N(!1)),E&&E.current.focus()},I=()=>{k&&k.length>0?(O([]),y([])):(O(l),y(l))},N=e=>{!e&&w&&w(),e&&v&&v()};return t(vu,{show:j,error:d&&!j,disabled:c,testId:u,onBlur:()=>{C(!1),N(!1)},children:[e(Zd,{ref:E,type:"button","data-testid":"selector",onClick:e=>{e.preventDefault(),c||(C(!j),N(!j))},...S,children:t(r,{children:[e(nu,{children:k&&0!==k.length?e(ou,{children:k&&0!=k.length?`${k.length} selected`:o}):e(iu,{truncateType:_,children:o})}),e(eu,{expanded:j,children:e(tu,{type:"chevron-down"})})]})}),j&&e(ru,{}),l&&l.length>0||x?e(Gd,{listItems:l,onSelectItem:F,onDismiss:P,valueExtractor:m,listExtractor:g,listStyleWidth:b,visible:j,enableSearch:h,searchFunction:p,searchPlaceholder:f,"data-testid":"dropdown-list",multiSelect:!0,selectedItems:k,onSelectAll:I,onRetry:x,itemsLoadState:$,itemTruncationType:_}):null]})},xu=({selectedOption:n,placeholder:o="Select",options:l,disabled:c,error:d,"data-testid":u,id:h,enableSearch:p=!1,searchFunction:f,searchPlaceholder:m,valueExtractor:g,valueToStringFunction:y,listExtractor:b,displayValueExtractor:v,onSelectOption:w,listStyleWidth:x,onShowOptions:$,onHideOptions:_,onRetry:S,optionsLoadState:k="success",optionTruncationType:O="end",...j})=>{const[C,E]=i(n),[F,P]=i(!1),I=a(),N=a();s((()=>{E(n)}),[n]);const T=(e,t)=>{E(e),P(!1),z(!1),I&&I.current.focus(),w&&w(e,t)},M=()=>{F&&(P(!1),z(!1)),I&&I.current.focus()},A=e=>{if("middle"===O){let t=0;return N&&N.current&&(t=N.current.getBoundingClientRect().width),dn.truncateOneLine((e=>"string"==typeof e?e:y(e)||e.toString())(e),t,120,8)}return e},z=e=>{!e&&_&&_(),e&&$&&$()};return t(vu,{show:F,error:d&&!F,disabled:c,testId:u,onBlur:()=>{P(!1),z(!1)},children:[e(Zd,{ref:I,type:"button","data-testid":h||"selector",onClick:e=>{e.preventDefault(),c||(P(!F),z(!F))},...j,children:t(r,{children:[e(nu,{ref:N,children:C?e(ou,{truncateType:O,children:A(v?v(C):g?g(C):C.toString())}):e(iu,{truncateType:O,children:o})}),e(eu,{expanded:F,children:e(tu,{type:"chevron-down"})})]})}),F&&e(ru,{}),l&&l.length>0?e(Gd,{listItems:l,onSelectItem:T,onDismiss:M,valueExtractor:g,listExtractor:b,listStyleWidth:x,visible:F,enableSearch:p,searchPlaceholder:m,searchFunction:f,"data-testid":"dropdown-list",selectedItems:C?[C]:[],onRetry:S,itemsLoadState:k,itemTruncationType:O}):null]})},$u=y(Dr.H6)`
    text-align: right;

    ${e=>{if(e.disabled)return b`
                color: ${Qt.Neutral[4](e)};
            `}}
`,_u=({value:t,maxLength:n,disabled:a,renderCustomCounter:l})=>{const[c,d]=i("");s((()=>{d(u(`${t||""}`))}),[t,n]);const u=e=>{if(l)return l(n,e.toString().length);{const t=n-e.toString().length;return t<=1?`${t} character left`:`${t.toLocaleString()} characters left`}};return e(r,{children:o.isValidElement(c)?c:e($u,{"data-testid":"counter-label",weight:"semibold",disabled:a,children:c})})},Su=y.div`
    display: flex;
    flex-direction: column;
`,ku=y.textarea`
    border: 1px solid ${Qt.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${Xr};

    ${zr("Body","regular")}
    color: ${Qt.Neutral[1]};
    background: ${Qt.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${Qt.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Qt.Neutral[4]};
    }

    ${e=>e.readOnly?b`
                border: none;
                padding-left: 0rem;
                background: transparent !important;

                :focus,
                :active {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?b`
                background: ${Qt.Neutral[6](e)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${Qt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?b`
                border: 1px solid ${Qt.Validation.Red.Border(e)};

                :focus,
                :active {
                    border: 1px solid ${Qt.Validation.Red.Border(e)};
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `:void 0}
`,Ou=o.forwardRef((({value:t,disabled:r,error:n,rows:o=5,...i},a)=>e(ku,{ref:a,disabled:r,value:t,error:n,rows:o,...i})));o.forwardRef((({value:r,disabled:n,rows:o=5,onChange:a,...l},c)=>{const[d,u]=i(r);s((()=>{u(r)}),[r]);return t(Su,{children:[e(ku,{ref:c,disabled:n,value:d,rows:o||5,onChange:e=>{const t=e.target.value;l.maxLength&&t.length>l.maxLength||(u(t),e.target.value=t,a&&a(e))},...l}),l.maxLength&&e(_u,{disabled:n,value:d,maxLength:l.maxLength,renderCustomCounter:l.renderCustomCounter})]})}));const ju=y.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.25rem;
`,Cu=y.div`
    display: flex;
    flex: 1;
    margin-right: 0.75rem;
`,Eu=y(on)`
    margin-top: 0;
`,Fu=o.forwardRef(((r,n)=>{const{label:o,value:a,errorMessage:l,id:c="form-textarea","data-error-testid":d,"data-testid":u,onChange:h,...p}=r,[f,m]=i(a);s((()=>{m(a)}),[a]);return t(cn,{id:c,label:o,disabled:p.disabled,children:[e(Ou,{id:`${c}-base`,"data-testid":u||c,value:f,error:!!l,onChange:e=>{const t=e.target.value;p.maxLength&&t.length>p.maxLength||(m(t),e.target.value=t,h&&h(e))},ref:n,...p}),t(ju,{children:[l&&e(Cu,{children:e(Eu,{weight:"semibold","data-testid":d||(c?`${c}-error-message`:"error-message"),children:l})}),p.maxLength&&e(_u,{disabled:p.disabled,value:f,maxLength:p.maxLength,renderCustomCounter:p.renderCustomCounter})]})]})}));var Pu;!function(e){e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:"am"};if(!t)return r;try{if("24hr"===e){const n=Tu(t,e);r.minute=dn.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period="am",r.hour=0===o?"12":dn.padValue(o.toString())):(r.period="pm",r.hour=12===o?o.toString():dn.padValue((o-12).toString()))}else{const n=Tu(t,e);r.hour=dn.padValue(n.hour),r.minute=dn.padValue(n.minute),r.period="am"===n.period.toLowerCase()?"am":"pm"}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?dn.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return dn.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?dn.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?dn.padValue(n.toString()):13===n?dn.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r="pm"===e.period?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return dn.padValue(r)},e.formatValue=(e,t)=>{try{const r=Tu(e,t),n=dn.padValue(r.hour);let o=`${n}:${dn.padValue(r.minute)}`;return"12hr"===t?(o+=r.period.toLowerCase(),o):o}catch(e){return""}}}(Pu||(Pu={}));const Iu=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},Nu=e=>{const t=parseInt(e);return t>=0&&t<=59},Tu=(e,t)=>{const r=e.split(":"),n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!Iu(r[0],t)||!Nu(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!Iu(r[0],t)||!Nu(r[1]))throw n;return{hour:r[0],minute:r[1]};var o};var Mu=function(e,t){return Mu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},Mu(e,t)};var Au=function(){return Au=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Au.apply(this,arguments)};var zu="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Bu=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Du="object"==typeof zu&&zu&&zu.Object===Object&&zu,Lu="object"==typeof self&&self&&self.Object===Object&&self,Ru=Du||Lu||Function("return this")(),Hu=Ru,Vu=function(){return Hu.Date.now()},Wu=/\s/;var Uu=function(e){for(var t=e.length;t--&&Wu.test(e.charAt(t)););return t},qu=/^\s+/;var Qu=function(e){return e?e.slice(0,Uu(e)+1).replace(qu,""):e},Xu=Ru.Symbol,Gu=Xu,Yu=Object.prototype,Zu=Yu.hasOwnProperty,Ju=Yu.toString,Ku=Gu?Gu.toStringTag:void 0;var eh=function(e){var t=Zu.call(e,Ku),r=e[Ku];try{e[Ku]=void 0;var n=!0}catch(e){}var o=Ju.call(e);return n&&(t?e[Ku]=r:delete e[Ku]),o},th=Object.prototype.toString;var rh=eh,nh=function(e){return th.call(e)},oh=Xu?Xu.toStringTag:void 0;var ih=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":oh&&oh in Object(e)?rh(e):nh(e)},ah=function(e){return null!=e&&"object"==typeof e};var sh=Qu,lh=Bu,ch=function(e){return"symbol"==typeof e||ah(e)&&"[object Symbol]"==ih(e)},dh=/^[-+]0x[0-9a-f]+$/i,uh=/^0b[01]+$/i,hh=/^0o[0-7]+$/i,ph=parseInt;var fh=Bu,mh=Vu,gh=function(e){if("number"==typeof e)return e;if(ch(e))return NaN;if(lh(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=lh(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=sh(e);var r=uh.test(e);return r||hh.test(e)?ph(e.slice(2),r?2:8):dh.test(e)?NaN:+e},yh=Math.max,bh=Math.min;var vh=function(e,t,r){var n,o,i,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function f(e){return c=e,s=setTimeout(g,t),d?p(e):a}function m(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=i}function g(){var e=mh();if(m(e))return y(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?bh(r,i-(e-c)):r}(e))}function y(e){return s=void 0,h&&n?p(e):(n=o=void 0,a)}function b(){var e=mh(),r=m(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return f(l);if(u)return clearTimeout(s),s=setTimeout(g,t),p(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=gh(t)||0,fh(r)&&(d=!!r.leading,i=(u="maxWait"in r)?yh(gh(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:y(mh())},b},wh=vh,xh=Bu;var $h=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return xh(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),wh(e,t,{leading:n,maxWait:t,trailing:o})},_h=function(e,t,r,n){switch(t){case"debounce":return vh(e,r,n);case"throttle":return $h(e,r,n);default:return e}},Sh=function(e){return"function"==typeof e},kh=function(){return"undefined"==typeof window},Oh=function(e){return e instanceof Element||e instanceof HTMLDocument},jh=function(e,t,r,n){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!n||t.height===a&&!r?t:(e&&Sh(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!kh()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(kh())return null;if(t)return document.querySelector(t);if(n&&Oh(n))return n;if(r.targetRef&&Oh(r.targetRef.current))return r.targetRef.current;var o=$(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=jh(s,r.setState.bind(r),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!kh()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Sh(t)?"renderProp":Sh(n)?"childFunction":p(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=f(),r.observableElement=null,kh()||(r.resizeHandler=_h(r.createResizeHandler,o,a,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}Mu(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){kh()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(l,["targetRef"]);return h(e,c)}return h(e,l);case"childArray":return(e=o).map((function(e){return!!e&&h(e,l)}));default:return n.createElement(a,null)}}}(m);var Ch=kh()?s:g;const Eh={Default:o.forwardRef(((r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",...l}=r,c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default"};return t(Od,{ref:n,"data-testid":l["data-testid"]||"button",disabled:i,...c,...l,children:[a&&e(jd,{...c}),e("span",{children:o})]})})),Small:o.forwardRef(((r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",...l}=r,c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small"};return t(Od,{ref:n,"data-testid":l["data-testid"]||"button",disabled:i,...c,...l,children:[a&&e(jd,{...c,size:16}),e("span",{children:o})]})}))},Fh=y.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.6875rem 1rem;
    height: 3rem;
    min-width: 5rem;
    border-radius: 4px;
    border: 1px solid ${Qt.Primary};
    background: ${Qt.Neutral[8]};
    cursor: pointer;

    :hover {
        box-shadow: 0 0 4px 1px rgba(87, 169, 255, 0.5);
    }

    ${e=>e.disabled&&!e.$selected?b`
                background: ${Qt.Neutral[6](e)};
                border: 1px solid ${Qt.Neutral[6](e)};
                cursor: not-allowed;

                :hover {
                    box-shadow: none;
                }
            `:e.disabled&&e.$selected?b`
                background: ${Qt.Neutral[6](e)};
                border: 1px solid ${Qt.Neutral[4](e)};
                cursor: not-allowed;

                :hover {
                    box-shadow: none;
                }
            `:e.$selected?b`
                background: ${Qt.Accent.Light[5](e)};
                padding: 0.6875rem 0.912rem; // Bold font takes bigger width
            `:0==e.$selected?b`
                border: 1px solid ${Qt.Neutral[5](e)};
            `:void 0}
`,Ph=y.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
`,Ih=y.span`
    ${e=>b`
            ${zr("H4",e.$weight)}
        `}
    color: ${Qt.Neutral[1]};
    text-align: center;

    ${e=>e.disabled?b`
                color: ${Qt.Neutral[3](e)};
            `:e.$selected?b`
                color: ${Qt.Primary(e)};
            `:void 0}
`,Nh=y(vd.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    width: 27rem;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Qt.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${jr.tablet} {
        width: 100%;
    }
`,Th=y.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,Mh=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${jr.mobileS} {
        flex-direction: column;
    }
`,Ah=y.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;

    ${jr.mobileS} {
        border-top: 1px solid ${Qt.Neutral[5]};
        margin-top: 2rem;
        padding-top: 1.5rem;
    }
`,zh=y.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${jr.mobileM} {
        margin-right: 0;
    }
`,Bh=y.div`
    display: flex;

    ${jr.tablet} {
        flex-direction: column;
    }

    ${jr.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,Dh=y.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,Lh=y(Wr)`
    width: 5rem;
    padding: 1rem 0;
`,Rh=y(Dr.Body)`
    margin: 0 0.75rem;

    ${jr.tablet} {
        margin: 0 0.5rem;
    }

    ${jr.mobileS} {
        margin: 0 0.75rem;
    }
`,Hh=y.input`
    ${zr("Body","regular")}
    border-radius: ${"4px"};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${Qt.Neutral[5]};
    background: ${Qt.Neutral[8]};
    color: ${Qt.Neutral[1]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${Qt.Accent.Light[1]};
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

    ${jr.mobileS} {
        width: 6rem;
    }
`,Vh=y((({disabled:r,checked:n,onChange:o,type:l="checkbox",children:d,className:u,...h})=>{const[p,f]=i(n),m=a();s((()=>{f(n)}),[n]);const g=c((e=>{r||("radio"!==l||p||f(!0),"checkbox"===l&&f((e=>!e)),o&&o(e))}),[]);return t(Fh,{$selected:p,disabled:r,role:"checkbox","aria-checked":p,className:u,children:[e(Ph,{ref:m,type:"checkbox","data-testid":"toggle-button-input",disabled:r,onChange:g,checked:p,...h}),e(Ih,{$weight:p?"bold":"regular",$selected:p,disabled:r,"data-testid":"toggle-button-label",children:d})]})}))`
    :not(:last-of-type) {
        margin-right: 0.5rem;
    }

    ${jr.tablet} {
        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: 0.5rem;
        }
    }

    ${jr.mobileS} {
        width: 50%;
        :not(:last-of-type) {
            margin-right: 0.5rem;
            margin-bottom: 0;
        }
    }
`,Wh=y(Eh.Small)`
    width: 7rem;

    :not(:last-of-type) {
        margin-right: 0.5rem;
    }

    ${jr.tablet} {
        width: 50%;
    }
`;var Uh,qh,Qh;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(Uh||(Uh={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(qh||(qh={})),function(e){e.AM="am",e.PM="pm"}(Qh||(Qh={}));const Xh=({id:r,value:n,show:o,format:l,onChange:d,onCancel:u})=>{const h=Pu.getTimeValues(l,n),[p,f]=i(h.hour),[m,g]=i(h.minute),[y,b]=i(h.period),v=a(),w=a(),x=function(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,s=void 0===o?1e3:o,l=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,h=void 0===u||u,p=e.targetRef,f=e.observerOptions,m=e.onResize,g=a(r),y=a(null),b=null!=p?p:y,v=a(),w=i({width:void 0,height:void 0}),x=w[0],$=w[1];return Ch((function(){if(!kh()){var e=jh(m,$,d,h);v.current=_h((function(t){(d||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!g.current&&!kh()&&e({width:n,height:o}),g.current=!1}))}),n,s,l);var t=new window.ResizeObserver(v.current);return b.current&&t.observe(b.current,f),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,d,h,m,f,b.current]),Au({ref:b},x)}();s((()=>{if(o&&v.current&&v.current.focus(),o){const{hour:e,minute:t,period:r}=Pu.getTimeValues(l,n);f(e),g(t),b(r)}}),[o,n,l]),s((()=>{const e=v.current,t=w.current;return e&&e.addEventListener("keydown",$),t&&t.addEventListener("keydown",$),()=>{e&&e.removeEventListener("keydown",$),t&&t.removeEventListener("keydown",$)}}),[]);const $=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},_=c((e=>{switch(e.currentTarget.name){case Uh.MINUTE_UP:g(Pu.updateMinutes(m,"add"));break;case Uh.MINUTE_DOWN:g(Pu.updateMinutes(m,"minus"));break;case Uh.HOUR_UP:f(Pu.updateHours(p,"add"));break;case Uh.HOUR_DOWN:f(Pu.updateHours(p,"minus"))}}),[p,m]),S=e=>{e.target.select()},k=e=>{const t=e.target.value;switch(e.target.name){case qh.HOUR:t.length<=2&&f(t);break;case qh.MINUTE:t.length<=2&&g(t)}},O=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case qh.HOUR:{const r=t>23||t<0?h.hour:Pu.convertHourTo12HourFormat(e.target.value);f(r);break}case qh.MINUTE:{const r=t>59||t<0?h.minute:e.target.value;g(dn.padValue(r));break}}},j=e=>{switch(e.target.name){case Qh.AM:b("am");break;case Qh.PM:b("pm")}},C=e=>r?`${r}-${e}`:e,E=Yc({height:o?x.height+32:0});return e(Nh,{"data-testid":"animated-dropdown-wrapper",style:E,children:t(Th,{ref:x.ref,"data-testid":C("timepicker-dropdown"),children:[t(Mh,{children:[t(zh,{children:[t(Dh,{children:[e(Lh,{name:Uh.HOUR_UP,type:"button",tabIndex:-1,onClick:_,"data-testid":C("hour-increment-button"),children:e(er,{type:"chevron-up"})}),e(Hh,{type:"number",name:qh.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:p,onFocus:S,onChange:k,onBlur:O,min:1,max:12,placeholder:"HH","data-testid":C("hour-input")}),e(Lh,{name:Uh.HOUR_DOWN,type:"button",tabIndex:-1,onClick:_,"data-testid":C("hour-decrement-button"),children:e(er,{type:"chevron-down"})})]}),e(Rh,{children:":"}),t(Dh,{children:[e(Lh,{name:Uh.MINUTE_UP,type:"button",tabIndex:-1,onClick:_,"data-testid":C("minute-increment-button"),children:e(er,{type:"chevron-up"})}),e(Hh,{type:"number",name:qh.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:m,onChange:k,onBlur:O,onFocus:S,min:0,max:59,placeholder:"MM","data-testid":C("minute-input")}),e(Lh,{name:Uh.MINUTE_DOWN,type:"button",tabIndex:-1,onClick:_,"data-testid":C("minute-decrement-button"),children:e(er,{type:"chevron-down"})})]})]}),t(Bh,{children:[e(Vh,{checked:"am"===y,name:Qh.AM,type:"radio",onChange:j,"data-testid":C("am-toggle"),children:"AM"}),e(Vh,{checked:"pm"===y,name:Qh.PM,type:"radio",onChange:j,"data-testid":C("pm-toggle"),children:"PM"})]})]}),t(Ah,{children:[e(Wh,{type:"button",styleType:"secondary",onClick:u,"data-testid":C("cancel-button"),children:"Cancel"}),e(Wh,{type:"button",onClick:()=>{let e;e="24hr"===l?Pu.convertTo24HourFormat({hour:p,minute:m,period:y}):`${p}:${m}${y}`,d(e)},disabled:""===p||""===m,"data-testid":C("confirm-button"),children:"Confirm"})]})]})})},Gh=y.div`
    position: relative;
`,Yh=y.input`
    ${zr("Body","regular")}
    border: 1px solid ${Qt.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.2rem 1rem 0.3rem 1rem; // Somehow the input text appears lower
    height: 3rem;
    width: 100%;
    background: ${Qt.Neutral[8]};
    color: ${Qt.Neutral[1]};

    :focus,
    :active {
        outline: none;
    }

    ${e=>e.disabled?b`
                background: ${Qt.Neutral[6](e)};
                cursor: not-allowed;
            `:e.error&&!e.focused?b`
                border: 1px solid ${Qt.Validation.Red.Border(e)};
            `:e.error&&e.focused?b`
                border: 1px solid ${Qt.Validation.Red.Border(e)};
                box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
            `:e.focused?b`
                border: 1px solid ${Qt.Accent.Light[1]};
                box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
            `:void 0}
`,Zh=({id:r,disabled:n=!1,error:o,value:l,defaultValue:d,placeholder:u,format:h="24hr",onChange:p,onBlur:f,onSelectionCancel:m,...g})=>{const[y,b]=i(!1),v=a();s((()=>(document.addEventListener("mousedown",x),document.addEventListener("keyup",$),()=>{document.removeEventListener("mousedown",x),document.removeEventListener("keyup",$)})),[y]);const w=c((()=>{n||y||b(!0)}),[y]),x=e=>{n||_(e)},$=e=>{if("Tab"===e.code)_(e)},_=e=>{v&&!v.current.contains(e.target)&&y&&(b(!1),f&&f())},S=c((()=>"12hr"===h?"HH:MMam":"HH:MM"),[h,u]);return t(Gh,{ref:v,id:r,...g,children:[e(Yh,{onFocus:w,focused:y,readOnly:!0,placeholder:u||S(),value:Pu.formatValue(l,h),defaultValue:d,disabled:n,error:o,"data-testid":r?`${r}-timepicker-selector`:"timepicker-selector"}),e(Xh,{id:r,show:y,value:l||d,format:h,onCancel:()=>{b(!1),m&&m()},onChange:e=>{b(!1),p&&p(e)}})]})},Jh={DateInput:({label:t,errorMessage:r,id:n="form-date-input","data-error-testid":o,"data-testid":i,...a})=>e(cn,{id:n,label:t,errorMessage:r,"data-error-testid":o,disabled:a.disabled,children:e($n,{id:`${n}-base`,"data-testid":i||n,error:!!r,...a})}),Input:On,InputGroup:bu,Label:sn,MultiSelect:({label:t,errorMessage:r,id:n="form-multi-select","data-error-testid":o,"data-testid":i,enableSearch:a=!1,...s})=>e(cn,{id:n,label:t,errorMessage:r,"data-error-testid":o,disabled:s.disabled,children:e(wu,{id:`${n}-base`,"data-testid":i||n,error:!!r,enableSearch:a,...s})}),Select:({label:t,errorMessage:r,id:n="form-select","data-error-testid":o,"data-testid":i,enableSearch:a=!1,...s})=>e(cn,{id:n,label:t,errorMessage:r,"data-error-testid":o,disabled:s.disabled,children:e(xu,{id:`${n}-base`,"data-testid":i||n,error:!!r,enableSearch:a,...s})}),Textarea:Fu,Timepicker:({label:t,errorMessage:r,id:n="form-timepicker","data-error-testid":o,"data-testid":i,...a})=>e(cn,{id:n,label:t,errorMessage:r,disabled:a.disabled,"data-error-testid":o,children:e(Zh,{id:`${n}-base`,"data-testid":i||n,error:!!r,...a})}),CustomField:({id:t="form-custom-field","data-error-testid":r,children:n,...o})=>e(cn,{id:t,"data-error-testid":r,...o,children:n})};export{Jh as Form};
//# sourceMappingURL=index.js.map
