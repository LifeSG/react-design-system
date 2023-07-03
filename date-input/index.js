import e,{jsxs as t,jsx as n,Fragment as r}from"react/jsx-runtime";import*as o from"react";import i,{cloneElement as a,useRef as s,useState as l,isValidElement as c,createRef as u,PureComponent as d,useEffect as h,useLayoutEffect as f,forwardRef as p,useCallback as m,useContext as g,useMemo as y,useImperativeHandle as v,useReducer as b}from"react";import{findDOMNode as w,unstable_batchedUpdates as $}from"react-dom";import S,{css as x,keyframes as _}from"styled-components";var O,C="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},k={exports:{}};O=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
  \************************************************************/(e,t,n)=>{var r,o=n(/*! react-is */"./node_modules/react-is/index.js"),i=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",h={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(c),arrayOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+o+" `"+i+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,o,i+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:m((function(t,n,r,o,i){var a=t[n];return e(a)?null:new p("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,i){var a=e[t];return o.isValidElementType(a)?null:new p("Invalid "+r+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||d;return new p("Invalid "+o+" `"+i+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,t,n,r,o){return v(e[t])?null:new p("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=b(l);if("object"!==c)return new p("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var u in l)if(s(l,u)){var d=e(l,u,r,o,i+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,o,i){for(var a=t[n],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new p("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+$(n)+" at index "+t+"."),c}return m((function(t,n,r,o,i){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,n,r,o,i,a);if(null==u)return null;u.data&&s(u.data,"expectedType")&&l.push(u.data.expectedType)}return new p("Invalid "+o+" `"+i+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,o,i){var s=t[n],l=b(s);if("object"!==l)return new p("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return y(r,o,i,c,w(u));var d=u(s,c,r,o,i+"."+c,a);if(d)return d}return null}))},exact:function(e){return m((function(t,n,r,o,l){var c=t[n],u=b(c);if("object"!==u)return new p("Invalid "+o+" `"+l+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=i({},t[n],e);for(var h in d){var f=e[h];if(s(e,h)&&"function"!=typeof f)return y(r,o,l,h,w(f));if(!f)return new p("Invalid "+o+" `"+l+"` key `"+h+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=f(c,h,r,o,l+"."+h,a);if(m)return m}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},o=0;function i(i,s,l,c,u,h,f){if(c=c||d,h=h||l,f!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!n[g]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,o++)}}return null==s[l]?i?null===s[l]?new p("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,h)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function g(e){return m((function(t,n,r,o,i,a){var s=t[n];return b(s)!==e?new p("Invalid "+o+" `"+i+"` of type `"+w(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,o){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!v(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function $(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var f=e.type;switch(f){case c:case u:case o:case a:case i:case h:return f;default:var g=f&&f.$$typeof;switch(g){case l:case d:case m:case p:case s:return g;default:return t}}case r:return t}}}var $=c,S=u,x=l,_=s,O=n,C=d,k=o,D=m,M=p,j=r,F=a,B=i,P=h,A=!1;function E(e){return w(e)===u}t.AsyncMode=$,t.ConcurrentMode=S,t.ContextConsumer=x,t.ContextProvider=_,t.Element=O,t.ForwardRef=C,t.Fragment=k,t.Lazy=D,t.Memo=M,t.Portal=j,t.Profiler=F,t.StrictMode=B,t.Suspense=P,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),E(e)||w(e)===c},t.isConcurrentMode=E,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===p},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
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
  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(/*! react */"react"),i=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},d=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,o.useState)(t),r=n[0],i=n[1];return(0,o.useEffect)((function(){var e=t();r!==e&&i(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,o.useContext)(c.default),n=function(){return u(e)||u(t)},r=(0,o.useState)(n),i=r[0],a=r[1];return(0,o.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=h(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var n=function(){return(0,i.default)(e,t||{},!!t)},r=(0,o.useState)(n),a=r[0],s=r[1],l=d();return(0,o.useEffect)((function(){if(l){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),f=function(e){var t=(0,o.useState)(e.matches),n=t[0],r=t[1];return(0,o.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(l),p=d();return(0,o.useEffect)((function(){p&&n&&n(f)}),[f]),(0,o.useEffect)((function(){return function(){l&&l.dispose()}}),[]),f}},react:
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})(),k.exports=O(i);var D={exports:{}};D.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=g;var $=function(e){return e instanceof O},S=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(o=i),n&&(w[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,o=s}return!r&&o&&(b=o),o||!r&&b},x=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new O(n)},_=v;_.l=S,_.i=$,_.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function g(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(_.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return _},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,n){return _.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!_.u(t)||t,u=_.p(e),f=function(e,t){var o=_.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(s)},p=function(e,t){return _.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,g):f(0,g+1);case l:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return f(r?y-w:y+(6-w),g);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=_.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[_.p(e)]()},y.add=function(r,u){var h,f=this;r=Number(r);var p=_.p(u),m=function(e){var t=x(f);return _.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return m(1);if(p===l)return m(7);var g=(h={},h[i]=t,h[a]=n,h[o]=e,h)[p]||1,y=this.$d.getTime()+r*g;return _.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=_.z(this),i=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},d=function(e){return _.s(i%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:_.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:_.s(i,2,"0"),h:d(1),hh:d(2),a:h(i,a,!0),A:h(i,a,!1),m:String(a),mm:_.s(a,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:o};return r.replace(m,(function(e,t){return t||p[e]||o.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,m=_.p(h),g=x(r),y=(g.utcOffset()-this.utcOffset())*t,v=this-g,b=_.m(this,g);return b=(p={},p[d]=b/12,p[c]=b,p[u]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[a]=v/n,p[i]=v/t,p[o]=v/e,p)[m]||v,f?b:_.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return _.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),C=O.prototype;return x.prototype=C,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){C[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,O,x),e.$i=!0),x},x.locale=S,x.isDayjs=$,x.unix=function(e){return x(1e3*e)},x.en=w[b],x.Ls=w,x.p={},x}();var M=D.exports,j=function(e,t){return j=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},j(e,t)};var F=function(){return F=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},F.apply(this,arguments)};var B="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var P=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},A="object"==typeof B&&B&&B.Object===Object&&B,E="object"==typeof self&&self&&self.Object===Object&&self,T=A||E||Function("return this")(),I=T,H=function(){return I.Date.now()},L=/\s/;var R=function(e){for(var t=e.length;t--&&L.test(e.charAt(t)););return t},z=/^\s+/;var N=function(e){return e?e.slice(0,R(e)+1).replace(z,""):e},V=T.Symbol,Y=V,W=Object.prototype,q=W.hasOwnProperty,Q=W.toString,U=Y?Y.toStringTag:void 0;var Z=function(e){var t=q.call(e,U),n=e[U];try{e[U]=void 0;var r=!0}catch(e){}var o=Q.call(e);return r&&(t?e[U]=n:delete e[U]),o},X=Object.prototype.toString;var G=Z,J=function(e){return X.call(e)},K=V?V.toStringTag:void 0;var ee=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":K&&K in Object(e)?G(e):J(e)},te=function(e){return null!=e&&"object"==typeof e};var ne=N,re=P,oe=function(e){return"symbol"==typeof e||te(e)&&"[object Symbol]"==ee(e)},ie=/^[-+]0x[0-9a-f]+$/i,ae=/^0b[01]+$/i,se=/^0o[0-7]+$/i,le=parseInt;var ce=P,ue=H,de=function(e){if("number"==typeof e)return e;if(oe(e))return NaN;if(re(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=re(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ne(e);var n=ae.test(e);return n||se.test(e)?le(e.slice(2),n?2:8):ie.test(e)?NaN:+e},he=Math.max,fe=Math.min;var pe=function(e,t,n){var r,o,i,a,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=i}function m(){var e=ue();if(p(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-l);return d?fe(n,i-(e-c)):n}(e))}function g(e){return s=void 0,h&&r?f(e):(r=o=void 0,a)}function y(){var e=ue(),n=p(e);if(r=arguments,o=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),u?f(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(m,t),f(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=de(t)||0,ce(n)&&(u=!!n.leading,i=(d="maxWait"in n)?he(de(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=o=s=void 0},y.flush=function(){return void 0===s?a:g(ue())},y},me=pe,ge=P;var ye=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ge(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),me(e,t,{leading:r,maxWait:t,trailing:o})},ve=function(e,t,n,r){switch(t){case"debounce":return pe(e,n,r);case"throttle":return ye(e,n,r);default:return e}},be=function(e){return"function"==typeof e},we=function(){return"undefined"==typeof window},$e=function(e){return e instanceof Element||e instanceof HTMLDocument},Se=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&be(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!we()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(we())return null;if(t)return document.querySelector(t);if(r&&$e(r))return r;if(n.targetRef&&$e(n.targetRef.current))return n.targetRef.current;var o=w(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=Se(s,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!we()&&l({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return be(t)?"renderProp":be(r)?"childFunction":c(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=u(),n.observableElement=null,we()||(n.resizeHandler=ve(n.createResizeHandler,o,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}j(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){we()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,r=t.children,i=t.nodeType,s=void 0===i?"div":i,l=this.state,c={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(c);case"childFunction":return(e=r)(c);case"child":if((e=r).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(c,["targetRef"]);return a(e,u)}return a(e,c);case"childArray":return(e=r).map((function(e){return!!e&&a(e,c)}));default:return o.createElement(s,null)}}}(d);var xe=we()?h:f;let _e=Re();const Oe=e=>Te(e,_e);let Ce=Re();Oe.write=e=>Te(e,Ce);let ke=Re();Oe.onStart=e=>Te(e,ke);let De=Re();Oe.onFrame=e=>Te(e,De);let Me=Re();Oe.onFinish=e=>Te(e,Me);let je=[];Oe.setTimeout=(e,t)=>{let n=Oe.now()+t,r=()=>{let e=je.findIndex((e=>e.cancel==r));~e&&je.splice(e,1),Ae-=~e?1:0},o={time:n,handler:e,cancel:r};return je.splice(Fe(n),0,o),Ae+=1,Ie(),o};let Fe=e=>~(~je.findIndex((t=>t.time>e))||~je.length);Oe.cancel=e=>{ke.delete(e),De.delete(e),Me.delete(e),_e.delete(e),Ce.delete(e)},Oe.sync=e=>{Ee=!0,Oe.batchedUpdates(e),Ee=!1},Oe.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Oe.onStart(n)}return r.handler=e,r.cancel=()=>{ke.delete(n),t=null},r};let Be="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Oe.use=e=>Be=e,Oe.now="undefined"!=typeof performance?()=>performance.now():Date.now,Oe.batchedUpdates=e=>e(),Oe.catch=console.error,Oe.frameLoop="always",Oe.advance=()=>{"demand"!==Oe.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Le()};let Pe=-1,Ae=0,Ee=!1;function Te(e,t){Ee?(t.delete(e),e(0)):(t.add(e),Ie())}function Ie(){Pe<0&&(Pe=0,"demand"!==Oe.frameLoop&&Be(He))}function He(){~Pe&&(Be(He),Oe.batchedUpdates(Le))}function Le(){let e=Pe;Pe=Oe.now();let t=Fe(Pe);t&&(ze(je.splice(0,t),(e=>e.handler())),Ae-=t),Ae?(ke.flush(),_e.flush(e?Math.min(64,Pe-e):16.667),De.flush(),Ce.flush(),Me.flush()):Pe=-1}function Re(){let e=new Set,t=e;return{add(n){Ae+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Ae-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Ae-=t.size,ze(t,(t=>t(n)&&e.add(t))),Ae+=e.size,t=e)}}}function ze(e,t){e.forEach((e=>{try{t(e)}catch(e){Oe.catch(e)}}))}function Ne(){}const Ve={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Ye(e,t){if(Ve.arr(e)){if(!Ve.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const We=(e,t)=>e.forEach(t);function qe(e,t,n){if(Ve.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const Qe=e=>Ve.und(e)?[]:Ve.arr(e)?e:[e];function Ue(e,t){if(e.size){const n=Array.from(e);e.clear(),We(n,t)}}const Ze=(e,...t)=>Ue(e,(e=>e(...t))),Xe=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Ge,Je,Ke=null,et=!1,tt=Ne;var nt=Object.freeze({__proto__:null,get createStringInterpolator(){return Ge},get to(){return Je},get colors(){return Ke},get skipAnimation(){return et},get willAdvance(){return tt},assign:e=>{e.to&&(Je=e.to),e.now&&(Oe.now=e.now),void 0!==e.colors&&(Ke=e.colors),null!=e.skipAnimation&&(et=e.skipAnimation),e.createStringInterpolator&&(Ge=e.createStringInterpolator),e.requestAnimationFrame&&Oe.use(e.requestAnimationFrame),e.batchedUpdates&&(Oe.batchedUpdates=e.batchedUpdates),e.willAdvance&&(tt=e.willAdvance),e.frameLoop&&(Oe.frameLoop=e.frameLoop)}});const rt=new Set;let ot=[],it=[],at=0;const st={get idle(){return!rt.size&&!ot.length},start(e){at>e.priority?(rt.add(e),Oe.onStart(lt)):(ct(e),Oe(dt))},advance:dt,sort(e){if(at)Oe.onFrame((()=>st.sort(e)));else{const t=ot.indexOf(e);~t&&(ot.splice(t,1),ut(e))}},clear(){ot=[],rt.clear()}};function lt(){rt.forEach(ct),rt.clear(),Oe(dt)}function ct(e){ot.includes(e)||ut(e)}function ut(e){ot.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(ot,(t=>t.priority>e.priority)),0,e)}function dt(e){const t=it;for(let n=0;n<ot.length;n++){const r=ot[n];at=r.priority,r.idle||(tt(r),r.advance(e),r.idle||t.push(r))}return at=0,it=ot,it.length=0,ot=t,ot.length>0}const ht="[-+]?\\d*\\.?\\d+",ft=ht+"%";function pt(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const mt=new RegExp("rgb"+pt(ht,ht,ht)),gt=new RegExp("rgba"+pt(ht,ht,ht,ht)),yt=new RegExp("hsl"+pt(ht,ft,ft)),vt=new RegExp("hsla"+pt(ht,ft,ft,ht)),bt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,wt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,$t=/^#([0-9a-fA-F]{6})$/,St=/^#([0-9a-fA-F]{8})$/;function xt(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function _t(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,o=2*n-r,i=xt(o,r,e+1/3),a=xt(o,r,e),s=xt(o,r,e-1/3);return Math.round(255*i)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Ot(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Ct(e){return(parseFloat(e)%360+360)%360/360}function kt(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Dt(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Mt(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=$t.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ke&&void 0!==Ke[e]?Ke[e]:(t=mt.exec(e))?(Ot(t[1])<<24|Ot(t[2])<<16|Ot(t[3])<<8|255)>>>0:(t=gt.exec(e))?(Ot(t[1])<<24|Ot(t[2])<<16|Ot(t[3])<<8|kt(t[4]))>>>0:(t=bt.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=St.exec(e))?parseInt(t[1],16)>>>0:(t=wt.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=yt.exec(e))?(255|_t(Ct(t[1]),Dt(t[2]),Dt(t[3])))>>>0:(t=vt.exec(e))?(_t(Ct(t[1]),Dt(t[2]),Dt(t[3]))|kt(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const jt=(e,t,n)=>{if(Ve.fun(e))return e;if(Ve.arr(e))return jt({range:e,output:t,extrapolate:n});if(Ve.str(e.output[0]))return Ge(e);const r=e,o=r.output,i=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,i);return function(e,t,n,r,o,i,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===o)return r;if(t===n)return e<=t?r:o;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=i(c),r===-1/0?c=-c:o===1/0?c+=r:c=c*(o-r)+r;return c}(e,i[t],i[t+1],o[t],o[t+1],l,a,s,r.map)}};const Ft=1.70158,Bt=1.525*Ft,Pt=Ft+1,At=2*Math.PI/3,Et=2*Math.PI/4.5,Tt=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},It={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Pt*e*e*e-Ft*e*e,easeOutBack:e=>1+Pt*Math.pow(e-1,3)+Ft*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Bt)/2:(Math.pow(2*e-2,2)*((Bt+1)*(2*e-2)+Bt)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*At),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*At)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Et)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Et)/2+1,easeInBounce:e=>1-Tt(1-e),easeOutBounce:Tt,easeInOutBounce:e=>e<.5?(1-Tt(1-2*e))/2:(1+Tt(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,o="end"===t?Math.floor(r):Math.ceil(r);return i=0,a=1,s=o/e,Math.min(Math.max(s,i),a);var i,a,s}};function Ht(){return Ht=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ht.apply(this,arguments)}const Lt=Symbol.for("FluidValue.get"),Rt=Symbol.for("FluidValue.observers"),zt=e=>Boolean(e&&e[Lt]),Nt=e=>e&&e[Lt]?e[Lt]():e,Vt=e=>e[Rt]||null;function Yt(e,t){let n=e[Rt];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Wt{constructor(e){if(this[Lt]=void 0,this[Rt]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");qt(this,e)}}const qt=(e,t)=>Zt(e,Lt,t);function Qt(e,t){if(e[Lt]){let n=e[Rt];n||Zt(e,Rt,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Ut(e,t){let n=e[Rt];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Rt]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const Zt=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Xt=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Gt=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Jt=new RegExp(`(${Xt.source})(%|[a-z]+)`,"i"),Kt=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,en=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,tn=e=>{const[t,n]=nn(e);if(!t||Xe())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&en.test(n)?tn(n):n||e},nn=e=>{const t=en.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let rn;const on=(e,t,n,r,o)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,an=e=>{rn||(rn=Ke?new RegExp(`(${Object.keys(Ke).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Nt(e).replace(en,tn).replace(Gt,Mt).replace(rn,Mt))),n=t.map((e=>e.match(Xt).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>jt(Ht({},e,{output:t}))));return e=>{var n;const o=!Jt.test(t[0])&&(null==(n=t.find((e=>Jt.test(e))))?void 0:n.replace(Xt,""));let i=0;return t[0].replace(Xt,(()=>`${r[i++](e)}${o||""}`)).replace(Kt,on)}},sn="react-spring: ",ln=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${sn}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},cn=ln(console.warn);const un=ln(console.warn);function dn(e){return Ve.str(e)&&("#"==e[0]||/\d/.test(e)||!Xe()&&en.test(e)||e in(Ke||{}))}const hn=Xe()?h:f,fn=()=>{const e=s(!1);return hn((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function pn(){const e=l()[1],t=fn();return()=>{t.current&&e(Math.random())}}const mn=e=>h(e,gn),gn=[];function yn(e){const t=s();return h((()=>{t.current=e})),t.current}const vn=Symbol.for("Animated:node"),bn=e=>e&&e[vn],wn=(e,t)=>{return n=e,r=vn,o=t,Object.defineProperty(n,r,{value:o,writable:!0,configurable:!0});var n,r,o},$n=e=>e&&e[vn]&&e[vn].getPayload();class Sn{constructor(){this.payload=void 0,wn(this,this)}getPayload(){return this.payload||[]}}class xn extends Sn{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Ve.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new xn(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Ve.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Ve.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class _n extends xn{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=jt({output:[e,e]})}static create(e){return new _n(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Ve.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=jt({output:[this.getValue(),e]})),this._value=0,super.reset()}}const On={dependencies:null};class Cn extends Sn{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return qe(this.source,((n,r)=>{var o;(o=n)&&o[vn]===o?t[r]=n.getValue(e):zt(n)?t[r]=Nt(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&We(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return qe(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){On.dependencies&&zt(e)&&On.dependencies.add(e);const t=$n(e);t&&We(t,(e=>this.add(e)))}}class kn extends Cn{constructor(e){super(e)}static create(e){return new kn(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Dn)),!0)}}function Dn(e){return(dn(e)?_n:xn).create(e)}function Mn(e){const t=bn(e);return t?t.constructor:Ve.arr(e)?kn:dn(e)?_n:xn}function jn(){return jn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jn.apply(this,arguments)}const Fn=(e,t)=>{const n=!Ve.fun(e)||e.prototype&&e.prototype.isReactComponent;return p(((r,i)=>{const a=s(null),l=n&&m((e=>{a.current=function(e,t){e&&(Ve.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[c,u]=function(e,t){const n=new Set;On.dependencies=n,e.style&&(e=jn({},e,{style:t.createAnimatedStyle(e.style)}));return e=new Cn(e),On.dependencies=null,[e,n]}(r,t),d=pn(),f=()=>{const e=a.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&d()},p=new Bn(f,u),g=s();hn((()=>(g.current=p,We(u,(e=>Qt(e,p))),()=>{g.current&&(We(g.current.deps,(e=>Ut(e,g.current))),Oe.cancel(g.current.update))}))),h(f,[]),mn((()=>()=>{const e=g.current;We(e.deps,(t=>Ut(t,e)))}));const y=t.getComponentProps(c.getValue());return o.createElement(e,jn({},y,{ref:l}))}))};class Bn{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Oe.write(this.update)}}const Pn=Symbol.for("AnimatedComponent"),An=e=>Ve.str(e)?e:e&&Ve.str(e.displayName)?e.displayName:Ve.fun(e)&&e.name||null;function En(){return En=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},En.apply(this,arguments)}function Tn(e,...t){return Ve.fun(e)?e(...t):e}const In=(e,t)=>!0===e||!!(t&&e&&(Ve.fun(e)?e(t):Qe(e).includes(t))),Hn=(e,t)=>Ve.obj(e)?t&&e[t]:e,Ln=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Rn=e=>e,zn=(e,t=Rn)=>{let n=Nn;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const o of n){const n=t(e[o],o);Ve.und(n)||(r[o]=n)}return r},Nn=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Vn={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Yn(e){const t=function(e){const t={};let n=0;if(qe(e,((e,r)=>{Vn[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return qe(e,((e,r)=>r in t||(n[r]=e))),n}return En({},e)}function Wn(e){return e=Nt(e),Ve.arr(e)?e.map(Wn):dn(e)?nt.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function qn(e){return Ve.fun(e)||Ve.arr(e)&&Ve.obj(e[0])}const Qn=En({},{tension:170,friction:26},{mass:1,damping:1,easing:It.linear,clamp:!1});class Un{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Qn)}}function Zn(e,t){if(Ve.und(t.decay)){const n=!Ve.und(t.tension)||!Ve.und(t.friction);!n&&Ve.und(t.frequency)&&Ve.und(t.damping)&&Ve.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const Xn=[];class Gn{constructor(){this.changed=!1,this.values=Xn,this.toValues=null,this.fromValues=Xn,this.to=void 0,this.from=void 0,this.config=new Un,this.immediate=!1}}function Jn(e,{key:t,props:n,defaultProps:r,state:o,actions:i}){return new Promise(((a,s)=>{var l;let c,u,d=In(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)p();else{Ve.und(n.pause)||(o.paused=In(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=o.paused||In(e,t)),c=Tn(n.delay||0,t),e?(o.resumeQueue.add(f),i.pause()):(i.resume(),f())}function h(){o.resumeQueue.add(f),o.timeouts.delete(u),u.cancel(),c=u.time-Oe.now()}function f(){c>0&&!nt.skipAnimation?(o.delayed=!0,u=Oe.setTimeout(p,c),o.pauseQueue.add(h),o.timeouts.add(u)):p()}function p(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(h),o.timeouts.delete(u),e<=(o.cancelId||0)&&(d=!0);try{i.start(En({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const Kn=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?nr(e.get()):t.every((e=>e.noop))?er(e.get()):tr(e.get(),t.every((e=>e.finished))),er=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),tr=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),nr=e=>({value:e,cancelled:!0,finished:!1});function rr(e,t,n,r){const{callId:o,parentId:i,onRest:a}=t,{asyncTo:s,promise:l}=n;return i||e!==s||t.reset?n.promise=(async()=>{n.asyncId=o,n.asyncTo=e;const c=zn(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=o<=(n.cancelId||0)&&nr(r)||o!==n.asyncId&&tr(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const i=new ir,a=new ar;return(async()=>{if(nt.skipAnimation)throw or(n),a.result=tr(r,!1),d(a),a;f(i);const s=Ve.obj(e)?En({},e):En({},t,{to:e});s.parentId=o,qe(c,((e,t)=>{Ve.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(i),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let m;if(nt.skipAnimation)return or(n),tr(r,!1);try{let t;t=Ve.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(u),h]),m=tr(r.get(),!0,!1)}catch(e){if(e instanceof ir)m=e.result;else{if(!(e instanceof ar))throw e;m=e.result}}finally{o==n.asyncId&&(n.asyncId=i,n.asyncTo=i?s:void 0,n.promise=i?l:void 0)}return Ve.fun(a)&&Oe.batchedUpdates((()=>{a(m,r,r.item)})),m})():l}function or(e,t){Ue(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class ir extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class ar extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const sr=e=>e instanceof cr;let lr=1;class cr extends Wt{constructor(...e){super(...e),this.id=lr++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=bn(this);return e&&e.getValue()}to(...e){return nt.to(this,e)}interpolate(...e){return cn(`${sn}The "interpolate" function is deprecated in v9 (use "to" instead)`),nt.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Yt(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||st.sort(this),Yt(this,{type:"priority",parent:this,priority:e})}}const ur=Symbol.for("SpringPhase"),dr=e=>(1&e[ur])>0,hr=e=>(2&e[ur])>0,fr=e=>(4&e[ur])>0,pr=(e,t)=>t?e[ur]|=3:e[ur]&=-3,mr=(e,t)=>t?e[ur]|=4:e[ur]&=-5;class gr extends cr{constructor(e,t){if(super(),this.key=void 0,this.animation=new Gn,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Ve.und(e)||!Ve.und(t)){const n=Ve.obj(e)?En({},e):En({},t,{from:e});Ve.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(hr(this)||this._state.asyncTo)||fr(this)}get goal(){return Nt(this.animation.to)}get velocity(){const e=bn(this);return e instanceof xn?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return dr(this)}get isAnimating(){return hr(this)}get isPaused(){return fr(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:o,toValues:i}=r;const a=$n(r.to);!a&&zt(r.to)&&(i=Qe(Nt(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==_n?1:a?a[l].lastPosition:i[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],i=null!=s.v0?s.v0:s.v0=Ve.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Ve.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,r=Math.exp(-(1-e)*t);d=n+i/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=i*r}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||h/10,r=o.clamp?0:o.bounce,l=!Ve.und(r),f=n==c?s.v0>0:n<c;let p,m=!1;const g=1,y=Math.ceil(e/g);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(m=d==c||d>c==f,m&&(a=-a*r,d=c));a+=(1e-6*-o.tension*(d-c)+.001*-o.friction*a)/o.mass*g,d+=a*g}}else{let r=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(o.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+o.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,o.round)&&(n=!0)}));const s=bn(this),l=s.getValue();if(t){const e=Nt(r.to);l===e&&!n||o.decay?n&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return Oe.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(hr(this)){const{to:e,config:t}=this.animation;Oe.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Ve.und(e)?(n=this.queue||[],this.queue=[]):n=[Ve.obj(e)?e:En({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>Kn(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),or(this._state,e&&this._lastCallId),Oe.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Ve.obj(n)?n[t]:n,(null==n||qn(n))&&(n=void 0),r=Ve.obj(r)?r[t]:r,null==r&&(r=void 0);const o={to:n,from:r};return dr(this)||(e.reverse&&([n,r]=[r,n]),r=Nt(r),Ve.und(r)?bn(this)||this._set(n):this._set(r)),o}_update(e,t){let n=En({},e);const{key:r,defaultProps:o}=this;n.default&&Object.assign(o,zn(n,((e,t)=>/^on/.test(t)?Hn(e,r):e))),xr(this,n,"onProps"),_r(this,"onProps",n,this);const i=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Jn(++this._lastCallId,{key:r,props:n,defaultProps:o,state:a,actions:{pause:()=>{fr(this)||(mr(this,!0),Ze(a.pauseQueue),_r(this,"onPause",tr(this,yr(this,this.animation.to)),this))},resume:()=>{fr(this)&&(mr(this,!1),hr(this)&&this._resume(),Ze(a.resumeQueue),_r(this,"onResume",tr(this,yr(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=vr(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(nr(this));const r=!Ve.und(e.to),o=!Ve.und(e.from);if(r||o){if(!(t.callId>this._lastToId))return n(nr(this));this._lastToId=t.callId}const{key:i,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!o||r||t.default&&!Ve.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Ye(d,c);h&&(s.from=d),d=Nt(d);const f=!Ye(u,l);f&&this._focus(u);const p=qn(t.to),{config:m}=s,{decay:g,velocity:y}=m;(r||o)&&(m.velocity=0),t.config&&!p&&function(e,t,n){n&&(Zn(n=En({},n),t),t=En({},n,t)),Zn(e,t),Object.assign(e,t);for(const t in Qn)null==e[t]&&(e[t]=Qn[t]);let{mass:r,frequency:o,damping:i}=e;Ve.und(o)||(o<.01&&(o=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/o,2)*r,e.friction=4*Math.PI*i*r/o)}(m,Tn(t.config,i),t.config!==a.config?Tn(a.config,i):void 0);let v=bn(this);if(!v||Ve.und(u))return n(tr(this,!0));const b=Ve.und(t.reset)?o&&!t.default:!Ve.und(d)&&In(t.reset,i),w=b?d:this.get(),$=Wn(u),S=Ve.num($)||Ve.arr($)||dn($),x=!p&&(!S||In(a.immediate||t.immediate,i));if(f){const e=Mn(u);if(e!==v.constructor){if(!x)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const _=v.constructor;let O=zt(u),C=!1;if(!O){const e=b||!dr(this)&&h;(f||e)&&(C=Ye(Wn(w),$),O=!C),(Ye(s.immediate,x)||x)&&Ye(m.decay,g)&&Ye(m.velocity,y)||(O=!0)}if(C&&hr(this)&&(s.changed&&!b?O=!0:O||this._stop(l)),!p&&((O||zt(l))&&(s.values=v.getPayload(),s.toValues=zt(u)?null:_==_n?[1]:Qe($)),s.immediate!=x&&(s.immediate=x,x||b||this._set(l)),O)){const{onRest:e}=s;We(Sr,(e=>xr(this,t,e)));const r=tr(this,yr(this,l));Ze(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Oe.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?Tn(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set(w),p?n(rr(t.to,t,this._state,this)):O?this._start():hr(this)&&!f?this._pendingCalls.add(n):n(er(w))}_focus(e){const t=this.animation;e!==t.to&&(Vt(this)&&this._detach(),t.to=e,Vt(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;zt(t)&&(Qt(t,this),sr(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;zt(e)&&Ut(e,this)}_set(e,t=!0){const n=Nt(e);if(!Ve.und(n)){const e=bn(this);if(!e||!Ye(n,e.getValue())){const r=Mn(n);e&&e.constructor==r?e.setValue(n):wn(this,r.create(n)),e&&Oe.batchedUpdates((()=>{this._onChange(n,t)}))}}return bn(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,_r(this,"onStart",tr(this,yr(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Tn(this.animation.onChange,e,this)),Tn(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;bn(this).reset(Nt(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),hr(this)||(pr(this,!0),fr(this)||this._resume())}_resume(){nt.skipAnimation?this.finish():st.start(this)}_stop(e,t){if(hr(this)){pr(this,!1);const n=this.animation;We(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Yt(this,{type:"idle",parent:this});const r=t?nr(this.get()):tr(this.get(),yr(this,null!=e?e:n.to));Ze(this._pendingCalls,r),n.changed&&(n.changed=!1,_r(this,"onRest",r,this))}}}function yr(e,t){const n=Wn(t);return Ye(Wn(e.get()),n)}function vr(e,t=e.loop,n=e.to){let r=Tn(t);if(r){const o=!0!==r&&Yn(r),i=(o||e).reverse,a=!o||o.reset;return br(En({},e,{loop:t,default:!1,pause:void 0,to:!i||qn(n)?n:void 0,from:a?e.from:void 0,reset:a},o))}}function br(e){const{to:t,from:n}=e=Yn(e),r=new Set;return Ve.obj(t)&&$r(t,r),Ve.obj(n)&&$r(n,r),e.keys=r.size?Array.from(r):null,e}function wr(e){const t=br(e);return Ve.und(t.default)&&(t.default=zn(t)),t}function $r(e,t){qe(e,((e,n)=>null!=e&&t.add(n)))}const Sr=["onStart","onRest","onChange","onPause","onResume"];function xr(e,t,n){e.animation[n]=t[n]!==Ln(t,n)?Hn(t[n],e.key):void 0}function _r(e,t,...n){var r,o,i,a;null==(r=(o=e.animation)[t])||r.call(o,...n),null==(i=(a=e.defaultProps)[t])||i.call(a,...n)}const Or=["onStart","onChange","onRest"];let Cr=1;class kr{constructor(e,t){this.id=Cr++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(En({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Ve.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(br(e)),this}start(e){let{queue:t}=this;return e?t=Qe(e).map(br):this.queue=[],this._flush?this._flush(this,t):(Ar(this,t),Dr(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;We(Qe(t),(t=>n[t].stop(!!e)))}else or(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Ve.und(e))this.start({pause:!0});else{const t=this.springs;We(Qe(e),(e=>t[e].pause()))}return this}resume(e){if(Ve.und(e))this.start({pause:!1});else{const t=this.springs;We(Qe(e),(e=>t[e].resume()))}return this}each(e){qe(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,o=this._changed.size>0;(r&&!this._started||o&&!this._started)&&(this._started=!0,Ue(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!r&&this._started,a=o||i&&n.size?this.get():null;o&&t.size&&Ue(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),i&&(this._started=!1,Ue(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Oe.onFrame(this._onFrame)}}function Dr(e,t){return Promise.all(t.map((t=>Mr(e,t)))).then((t=>Kn(e,t)))}async function Mr(e,t,n){const{keys:r,to:o,from:i,loop:a,onRest:s,onResolve:l}=t,c=Ve.obj(t.default)&&t.default;a&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const u=Ve.arr(o)||Ve.fun(o)?o:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):We(Or,(n=>{const r=t[n];if(Ve.fun(r)){const o=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=o.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):o.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Ze(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===Ln(t,"cancel");(u||f&&d.asyncId)&&h.push(Jn(++e._lastAsyncId,{props:t,state:d,actions:{pause:Ne,resume:Ne,start(t,n){f?(or(d,e._lastAsyncId),n(nr(e))):(t.onRest=s,n(rr(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Kn(e,await Promise.all(h));if(a&&p.finished&&(!n||!p.noop)){const n=vr(t,a,o);if(n)return Ar(e,[n]),Mr(e,n,!0)}return l&&Oe.batchedUpdates((()=>l(p,e,e.item))),p}function jr(e,t){const n=En({},e.springs);return t&&We(Qe(t),(e=>{Ve.und(e.keys)&&(e=br(e)),Ve.obj(e.to)||(e=En({},e,{to:void 0})),Pr(n,e,(e=>Br(e)))})),Fr(e,n),n}function Fr(e,t){qe(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Qt(t,e))}))}function Br(e,t){const n=new gr;return n.key=e,t&&Qt(n,t),n}function Pr(e,t,n){t.keys&&We(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Ar(e,t){We(t,(t=>{Pr(e.springs,t,(t=>Br(t,e)))}))}const Er=["children"],Tr=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,Er);const r=g(Ir),i=n.pause||!!r.pause,a=n.immediate||!!r.immediate;n=function(e,t){const[n]=l((()=>({inputs:t,result:e()}))),r=s(),o=r.current;let i=o;i?Boolean(t&&i.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,i.inputs))||(i={inputs:t,result:e()}):i=n;return h((()=>{r.current=i,o==n&&(n.inputs=n.result=void 0)}),[i]),i.result}((()=>({pause:i,immediate:a})),[i,a]);const{Provider:c}=Ir;return o.createElement(c,{value:n},t)},Ir=(Hr=Tr,Lr={},Object.assign(Hr,o.createContext(Lr)),Hr.Provider._context=Hr,Hr.Consumer._context=Hr,Hr);var Hr,Lr;Tr.Provider=Ir.Provider,Tr.Consumer=Ir.Consumer;const Rr=()=>{const e=[],t=function(t){un(`${sn}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return We(e,((e,o)=>{if(Ve.und(t))r.push(e.start());else{const i=n(t,e,o);i&&r.push(e.start(i))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return We(e,(e=>e.pause(...arguments))),this},t.resume=function(){return We(e,(e=>e.resume(...arguments))),this},t.set=function(t){We(e,(e=>e.set(t)))},t.start=function(t){const n=[];return We(e,((e,r)=>{if(Ve.und(t))n.push(e.start());else{const o=this._getProps(t,e,r);o&&n.push(e.start(o))}})),n},t.stop=function(){return We(e,(e=>e.stop(...arguments))),this},t.update=function(t){return We(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Ve.fun(e)?e(n,t):e};return t._getProps=n,t};function zr(e,t){const n=Ve.fun(e),[[r],o]=function(e,t,n){const r=Ve.fun(t)&&t;r&&!n&&(n=[]);const o=y((()=>r||3==arguments.length?Rr():void 0),[]),i=s(0),a=pn(),l=y((()=>({ctrls:[],queue:[],flush(e,t){const n=jr(e,t);return i.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Dr(e,t):new Promise((r=>{Fr(e,n),l.queue.push((()=>{r(Dr(e,t))})),a()}))}})),[]),c=s([...l.ctrls]),u=[],d=yn(e)||0;function h(e,n){for(let o=e;o<n;o++){const e=c.current[o]||(c.current[o]=new kr(null,l.flush)),n=r?r(o,e):t[o];n&&(u[o]=wr(n))}}y((()=>{We(c.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,o),e.stop(!0)})),c.current.length=e,h(d,e)}),[e]),y((()=>{h(0,Math.min(d,e))}),n);const f=c.current.map(((e,t)=>jr(e,u[t]))),p=g(Tr),m=yn(p),v=p!==m&&function(e){for(const t in e)return!0;return!1}(p);hn((()=>{i.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],We(e,(e=>e()))),We(c.current,((e,t)=>{null==o||o.add(e),v&&e.start({default:p});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),mn((()=>()=>{We(l.ctrls,(e=>e.stop(!0)))}));const b=f.map((e=>En({},e)));return o?[b,o]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,o]:r}let Nr;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Nr||(Nr={}));class Vr extends cr{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=jt(...t);const n=this._get(),r=Mn(n);wn(this,r.create(n))}advance(e){const t=this._get();Ye(t,this.get())||(bn(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Wr(this._active)&&qr(this)}_get(){const e=Ve.arr(this.source)?this.source.map(Nt):Qe(Nt(this.source));return this.calc(...e)}_start(){this.idle&&!Wr(this._active)&&(this.idle=!1,We($n(this),(e=>{e.done=!1})),nt.skipAnimation?(Oe.batchedUpdates((()=>this.advance())),qr(this)):st.start(this))}_attach(){let e=1;We(Qe(this.source),(t=>{zt(t)&&Qt(t,this),sr(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){We(Qe(this.source),(e=>{zt(e)&&Ut(e,this)})),this._active.clear(),qr(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Qe(this.source).reduce(((e,t)=>Math.max(e,(sr(t)?t.priority:0)+1)),0))}}function Yr(e){return!1!==e.idle}function Wr(e){return!e.size||Array.from(e).every(Yr)}function qr(e){e.idle||(e.idle=!0,We($n(e),(e=>{e.done=!0})),Yt(e,{type:"idle",parent:e}))}function Qr(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}nt.assign({createStringInterpolator:an,to:(e,t)=>new Vr(e,t)});const Ur=["style","children","scrollTop","scrollLeft","viewBox"],Zr=/^--/;function Xr(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Zr.test(e)||Jr.hasOwnProperty(e)&&Jr[e]?(""+t).trim():t+"px"}const Gr={};let Jr={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Kr=["Webkit","Ms","Moz","O"];Jr=Object.keys(Jr).reduce(((e,t)=>(Kr.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Jr);const eo=["x","y","z"],to=/^(matrix|translate|scale|rotate|skew)/,no=/^(translate)/,ro=/^(rotate|skew)/,oo=(e,t)=>Ve.num(e)&&0!==e?e+t:e,io=(e,t)=>Ve.arr(e)?e.every((e=>io(e,t))):Ve.num(e)?e===t:parseFloat(e)===t;class ao extends Cn{constructor(e){let{x:t,y:n,z:r}=e,o=Qr(e,eo);const i=[],a=[];(t||n||r)&&(i.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>oo(e,"px"))).join(",")})`,io(e,0)]))),qe(o,((e,t)=>{if("transform"===t)i.push([e||""]),a.push((e=>[e,""===e]));else if(to.test(t)){if(delete o[t],Ve.und(e))return;const n=no.test(t)?"px":ro.test(t)?"deg":"";i.push(Qe(e)),a.push("rotate3d"===t?([e,t,r,o])=>[`rotate3d(${e},${t},${r},${oo(o,n)})`,io(o,0)]:e=>[`${t}(${e.map((e=>oo(e,n))).join(",")})`,io(e,t.startsWith("scale")?1:0)])}})),i.length&&(o.transform=new so(i,a)),super(o)}}class so extends Wt{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return We(this.inputs,((n,r)=>{const o=Nt(n[0]),[i,a]=this.transforms[r](Ve.arr(o)?o:n.map(Nt));e+=" "+i,t=t&&a})),t?"none":e}observerAdded(e){1==e&&We(this.inputs,(e=>We(e,(e=>zt(e)&&Qt(e,this)))))}observerRemoved(e){0==e&&We(this.inputs,(e=>We(e,(e=>zt(e)&&Ut(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Yt(this,e)}}const lo=["scrollTop","scrollLeft"];nt.assign({batchedUpdates:$,createStringInterpolator:an,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const co=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Cn(e)),getComponentProps:r=(e=>e)}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},i=e=>{const t=An(e)||"Anonymous";return(e=Ve.str(e)?i[e]||(i[e]=Fn(e,o)):e[Pn]||(e[Pn]=Fn(e,o))).displayName=`Animated(${t})`,e};return qe(e,((t,n)=>{Ve.arr(e)&&(n=An(t)),i[n]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:o,children:i,scrollTop:a,scrollLeft:s,viewBox:l}=r,c=Qr(r,Ur),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:Gr[t]||(Gr[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(let t in o)if(o.hasOwnProperty(t)){const n=Xr(t,o[t]);Zr.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new ao(e),getComponentProps:e=>Qr(e,lo)}),uo=co.animated;var ho;!function(e){e.generateDays=e=>{const t=e.startOf("month"),n=M(t).startOf("week");return fo(n).map((e=>po(e)))},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(M(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+M(`${t+9}-01-01`).format("YYYY")}}}(ho||(ho={}));const fo=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},po=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t};var mo,go={};Object.defineProperty(go,"__esModule",{value:!0});var yo=e;const vo=e=>yo.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:yo.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});vo.displayName="ExternalIcon",mo=go.ExternalIcon=vo;var bo=Array.isArray,wo="object"==typeof C&&C&&C.Object===Object&&C,$o="object"==typeof self&&self&&self.Object===Object&&self,So=wo||$o||Function("return this")(),xo=So.Symbol,_o=xo,Oo=Object.prototype,Co=Oo.hasOwnProperty,ko=Oo.toString,Do=_o?_o.toStringTag:void 0;var Mo=function(e){var t=Co.call(e,Do),n=e[Do];try{e[Do]=void 0;var r=!0}catch(e){}var o=ko.call(e);return r&&(t?e[Do]=n:delete e[Do]),o},jo=Object.prototype.toString;var Fo=Mo,Bo=function(e){return jo.call(e)},Po=xo?xo.toStringTag:void 0;var Ao=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Po&&Po in Object(e)?Fo(e):Bo(e)};var Eo=Ao,To=function(e){return null!=e&&"object"==typeof e};var Io=function(e){return"symbol"==typeof e||To(e)&&"[object Symbol]"==Eo(e)},Ho=bo,Lo=Io,Ro=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zo=/^\w*$/;var No=function(e,t){if(Ho(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Lo(e))||(zo.test(e)||!Ro.test(e)||null!=t&&e in Object(t))};var Vo=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Yo=Ao,Wo=Vo;var qo,Qo=function(e){if(!Wo(e))return!1;var t=Yo(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Uo=So["__core-js_shared__"],Zo=(qo=/[^.]+$/.exec(Uo&&Uo.keys&&Uo.keys.IE_PROTO||""))?"Symbol(src)_1."+qo:"";var Xo=function(e){return!!Zo&&Zo in e},Go=Function.prototype.toString;var Jo=Qo,Ko=Xo,ei=Vo,ti=function(e){if(null!=e){try{return Go.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ni=/^\[object .+?Constructor\]$/,ri=Function.prototype,oi=Object.prototype,ii=ri.toString,ai=oi.hasOwnProperty,si=RegExp("^"+ii.call(ai).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var li=function(e){return!(!ei(e)||Ko(e))&&(Jo(e)?si:ni).test(ti(e))},ci=function(e,t){return null==e?void 0:e[t]};var ui=function(e,t){var n=ci(e,t);return li(n)?n:void 0},di=ui(Object,"create"),hi=di;var fi=function(){this.__data__=hi?hi(null):{},this.size=0};var pi=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},mi=di,gi=Object.prototype.hasOwnProperty;var yi=function(e){var t=this.__data__;if(mi){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return gi.call(t,e)?t[e]:void 0},vi=di,bi=Object.prototype.hasOwnProperty;var wi=di;var $i=fi,Si=pi,xi=yi,_i=function(e){var t=this.__data__;return vi?void 0!==t[e]:bi.call(t,e)},Oi=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=wi&&void 0===t?"__lodash_hash_undefined__":t,this};function Ci(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ci.prototype.clear=$i,Ci.prototype.delete=Si,Ci.prototype.get=xi,Ci.prototype.has=_i,Ci.prototype.set=Oi;var ki=Ci;var Di=function(){this.__data__=[],this.size=0};var Mi=function(e,t){return e===t||e!=e&&t!=t};var ji=function(e,t){for(var n=e.length;n--;)if(Mi(e[n][0],t))return n;return-1},Fi=ji,Bi=Array.prototype.splice;var Pi=ji;var Ai=ji;var Ei=ji;var Ti=Di,Ii=function(e){var t=this.__data__,n=Fi(t,e);return!(n<0)&&(n==t.length-1?t.pop():Bi.call(t,n,1),--this.size,!0)},Hi=function(e){var t=this.__data__,n=Pi(t,e);return n<0?void 0:t[n][1]},Li=function(e){return Ai(this.__data__,e)>-1},Ri=function(e,t){var n=this.__data__,r=Ei(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function zi(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}zi.prototype.clear=Ti,zi.prototype.delete=Ii,zi.prototype.get=Hi,zi.prototype.has=Li,zi.prototype.set=Ri;var Ni=zi,Vi=ui(So,"Map"),Yi=ki,Wi=Ni,qi=Vi;var Qi=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ui=function(e,t){var n=e.__data__;return Qi(t)?n["string"==typeof t?"string":"hash"]:n.map},Zi=Ui;var Xi=Ui;var Gi=Ui;var Ji=Ui;var Ki=function(){this.size=0,this.__data__={hash:new Yi,map:new(qi||Wi),string:new Yi}},ea=function(e){var t=Zi(this,e).delete(e);return this.size-=t?1:0,t},ta=function(e){return Xi(this,e).get(e)},na=function(e){return Gi(this,e).has(e)},ra=function(e,t){var n=Ji(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function oa(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}oa.prototype.clear=Ki,oa.prototype.delete=ea,oa.prototype.get=ta,oa.prototype.has=na,oa.prototype.set=ra;var ia=oa;function aa(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(aa.Cache||ia),n}aa.Cache=ia;var sa=aa;var la=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ca=/\\(\\)?/g,ua=function(e){var t=sa(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(la,(function(e,n,r,o){t.push(r?o.replace(ca,"$1"):n||e)})),t}));var da=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},ha=bo,fa=Io,pa=xo?xo.prototype:void 0,ma=pa?pa.toString:void 0;var ga=function e(t){if("string"==typeof t)return t;if(ha(t))return da(t,e)+"";if(fa(t))return ma?ma.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ya=ga;var va=bo,ba=No,wa=ua,$a=function(e){return null==e?"":ya(e)};var Sa=Io;var xa=function(e,t){return va(e)?e:ba(e,t)?[e]:wa($a(e))},_a=function(e){if("string"==typeof e||Sa(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Oa=function(e,t){for(var n=0,r=(t=xa(t,e)).length;null!=e&&n<r;)e=e[_a(t[n++])];return n&&n==r?e:void 0};var Ca=function(e,t,n){var r=null==e?void 0:Oa(e,t);return void 0===r?n:r};const ka=(e,t,n)=>t?Ca(n,t)||Ca(e,t):n||e,Da=(e,t)=>{const n=t||e.defaultValue;return Ca(e.collections,n)};var Ma;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ma||(Ma={}));const ja={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Fa=e=>t=>{const n=t.theme,r=Da(ja,n[Ma.colorScheme]);return n.options&&n.options.color?ka(r,e,n.options.color):ka(r,e)},Ba={Brand:{1:Fa("Brand.1"),2:Fa("Brand.2"),3:Fa("Brand.3"),4:Fa("Brand.4"),5:Fa("Brand.5"),6:Fa("Brand.6")},Primary:Fa("Primary"),PrimaryDark:Fa("PrimaryDark"),Secondary:Fa("Secondary"),Accent:{Light:{1:Fa("Accent.Light.1"),2:Fa("Accent.Light.2"),3:Fa("Accent.Light.3"),4:Fa("Accent.Light.4"),5:Fa("Accent.Light.5"),6:Fa("Accent.Light.6")},Dark:{1:Fa("Accent.Dark.1"),2:Fa("Accent.Dark.2"),3:Fa("Accent.Dark.3")}},Neutral:{1:Fa("Neutral.1"),2:Fa("Neutral.2"),3:Fa("Neutral.3"),4:Fa("Neutral.4"),5:Fa("Neutral.5"),6:Fa("Neutral.6"),7:Fa("Neutral.7"),8:Fa("Neutral.8")},Validation:{Green:{Text:Fa("Validation.Green.Text"),Icon:Fa("Validation.Green.Icon"),Border:Fa("Validation.Green.Border"),Background:Fa("Validation.Green.Background")},Orange:{Text:Fa("Validation.Orange.Text"),Icon:Fa("Validation.Orange.Icon"),Border:Fa("Validation.Orange.Border"),Background:Fa("Validation.Orange.Background"),Badge:Fa("Validation.Orange.Badge")},Red:{Text:Fa("Validation.Red.Text"),Icon:Fa("Validation.Red.Icon"),Border:Fa("Validation.Red.Border"),Background:Fa("Validation.Red.Background")},Blue:{Text:Fa("Validation.Blue.Text"),Icon:Fa("Validation.Blue.Icon"),Border:Fa("Validation.Blue.Border"),Background:Fa("Validation.Blue.Background")}},Shadow:{Accent:Fa("Shadow.Accent"),Red:Fa("Shadow.Red"),Elevation:Fa("Shadow.Elevation")}},Pa={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Aa={collections:{base:{D1:{fontFamily:Pa.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Pa.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Pa.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Pa.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Pa.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Pa.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Pa.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Pa.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Pa.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Pa.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Pa.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Pa.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Pa.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Pa.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ea=e=>t=>{const n=t.theme,r=Da(Aa,n[Ma.textStyleScheme]);return n.options&&n.options.textStyle?ka(r,e,n.options.textStyle):ka(r,e)},Ta={D1:{fontFamily:Ea("D1.fontFamily"),fontSize:Ea("D1.fontSize"),fontWeight:Ea("D1.fontWeight"),lineHeight:Ea("D1.lineHeight"),letterSpacing:Ea("D1.letterSpacing")},D2:{fontFamily:Ea("D2.fontFamily"),fontSize:Ea("D2.fontSize"),fontWeight:Ea("D2.fontWeight"),lineHeight:Ea("D2.lineHeight"),letterSpacing:Ea("D2.letterSpacing")},D3:{fontFamily:Ea("D3.fontFamily"),fontSize:Ea("D3.fontSize"),fontWeight:Ea("D3.fontWeight"),lineHeight:Ea("D3.lineHeight"),letterSpacing:Ea("D3.letterSpacing")},D4:{fontFamily:Ea("D4.fontFamily"),fontSize:Ea("D4.fontSize"),fontWeight:Ea("D4.fontWeight"),lineHeight:Ea("D4.lineHeight"),letterSpacing:Ea("D4.letterSpacing")},DBody:{fontFamily:Ea("DBody.fontFamily"),fontSize:Ea("DBody.fontSize"),fontWeight:Ea("DBody.fontWeight"),lineHeight:Ea("DBody.lineHeight"),letterSpacing:Ea("DBody.letterSpacing")},H1:{fontFamily:Ea("H1.fontFamily"),fontSize:Ea("H1.fontSize"),fontWeight:Ea("H1.fontWeight"),lineHeight:Ea("H1.lineHeight"),letterSpacing:Ea("H1.letterSpacing")},H2:{fontFamily:Ea("H2.fontFamily"),fontSize:Ea("H2.fontSize"),fontWeight:Ea("H2.fontWeight"),lineHeight:Ea("H2.lineHeight"),letterSpacing:Ea("H2.letterSpacing")},H3:{fontFamily:Ea("H3.fontFamily"),fontSize:Ea("H3.fontSize"),fontWeight:Ea("H3.fontWeight"),lineHeight:Ea("H3.lineHeight"),letterSpacing:Ea("H3.letterSpacing")},H4:{fontFamily:Ea("H4.fontFamily"),fontSize:Ea("H4.fontSize"),fontWeight:Ea("H4.fontWeight"),lineHeight:Ea("H4.lineHeight"),letterSpacing:Ea("H4.letterSpacing")},H5:{fontFamily:Ea("H5.fontFamily"),fontSize:Ea("H5.fontSize"),fontWeight:Ea("H5.fontWeight"),lineHeight:Ea("H5.lineHeight"),letterSpacing:Ea("H5.letterSpacing")},H6:{fontFamily:Ea("H6.fontFamily"),fontSize:Ea("H6.fontSize"),fontWeight:Ea("H6.fontWeight"),lineHeight:Ea("H6.lineHeight"),letterSpacing:Ea("H6.letterSpacing")},Body:{fontFamily:Ea("Body.fontFamily"),fontSize:Ea("Body.fontSize"),fontWeight:Ea("Body.fontWeight"),lineHeight:Ea("Body.lineHeight"),letterSpacing:Ea("Body.letterSpacing")},BodySmall:{fontFamily:Ea("BodySmall.fontFamily"),fontSize:Ea("BodySmall.fontSize"),fontWeight:Ea("BodySmall.fontWeight"),lineHeight:Ea("BodySmall.lineHeight"),letterSpacing:Ea("BodySmall.letterSpacing")},XSmall:{fontFamily:Ea("XSmall.fontFamily"),fontSize:Ea("XSmall.fontSize"),fontWeight:Ea("XSmall.fontWeight"),lineHeight:Ea("XSmall.lineHeight"),letterSpacing:Ea("XSmall.letterSpacing")}},Ia=e=>{switch(e){case 700:case"bold":return Pa.Bold;case 600:case"semibold":return Pa.Semibold;case 300:case"light":return Pa.Light;case 400:case"regular":return Pa.Regular;default:return""}},Ha=(e,t)=>n=>{const r=Ta[e].fontFamily(n),o=Ta[e].fontWeight(n);return Object.values(Pa).includes(r)?x`
                font-family: ${Ia(t)||Ia(o)||r};
                font-weight: normal !important;
            `:x`
            font-family: ${r};
            font-weight: ${(La(t)||o)??"normal"};
        `},La=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ra=(e,t,n=!1)=>r=>{const o=Ta[e],i=o.fontSize(r);return x`
            ${Ha(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${x`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},za=(e=!1,t=!1)=>t?x`
            display: block;
        `:e?x`
            display: inline;
        `:x`
            display: block;
        `;var Na;!function(e){e.D1=S.h1`
        ${e=>x`
                ${Ra("D1",e.weight,e.paragraph)}
                color: ${Ba.Neutral[1]};
                ${za(e.inline,e.paragraph)}
            `}
    `,e.D2=S.h1`
        ${e=>x`
                ${Ra("D2",e.weight,e.paragraph)}
                color: ${Ba.Neutral[1]};
                ${za(e.inline,e.paragraph)}
            `}
    `,e.D3=S.h1`
        ${e=>x`
                ${Ra("D3",e.weight,e.paragraph)}
                color: ${Ba.Neutral[1]};
                ${za(e.inline,e.paragraph)}
            `}
    `,e.D4=S.h1`
        ${e=>x`
                ${Ra("D4",e.weight,e.paragraph)}
                color: ${Ba.Neutral[1]};
                ${za(e.inline,e.paragraph)}
            `}
    `,e.DBody=S.h1`
        ${e=>x`
                ${Ra("DBody",e.weight,e.paragraph)}
                color: ${Ba.Neutral[1]};
                ${za(e.inline,e.paragraph)}
            `}
    `,e.H1=S.h1`
        ${e=>x`
                ${Ra("H1",e.weight,e.paragraph)}
                color: ${Ba.Neutral[1]};
                ${za(e.inline,e.paragraph)}
            `}
    `,e.H2=S.h2`
        ${e=>x`
                ${Ra("H2",e.weight,e.paragraph)}
                color: ${Ba.Neutral[1]};
                ${za(e.inline,e.paragraph)}
            `}
    `,e.H3=S.h3`
        ${e=>x`
                ${Ra("H3",e.weight,e.paragraph)}
                color: ${Ba.Neutral[1]};
                ${za(e.inline,e.paragraph)}
            `}
    `,e.H4=S.h4`
        ${e=>x`
                ${Ra("H4",e.weight,e.paragraph)}
                color: ${Ba.Neutral[1]};
                ${za(e.inline,e.paragraph)}
            `}
    `,e.H5=S.h5`
        ${e=>x`
                ${Ra("H5",e.weight,e.paragraph)}
                color: ${Ba.Neutral[1]};
                ${za(e.inline,e.paragraph)}
            `}
    `,e.H6=S.h6`
        ${e=>x`
                ${Ra("H6",e.weight,e.paragraph)}
                color: ${Ba.Neutral[1]};
                ${za(e.inline,e.paragraph)}
            `}
    `,e.Body=S.p`
        ${e=>x`
                ${Ra("Body",e.weight,e.paragraph)}
                color: ${Ba.Neutral[1]};
                ${za(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=S.p`
        ${e=>x`
                ${Ra("BodySmall",e.weight,e.paragraph)}
                color: ${Ba.Neutral[1]};
                ${za(e.inline,e.paragraph)}
            `}
    `,e.XSmall=S.span`
        ${e=>x`
                ${Ra("XSmall",e.weight,e.paragraph)}
                color: ${Ba.Neutral[1]};
                ${za(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Wa({...e,textStyle:"Body"}),Small:e=>Wa({...e,textStyle:"BodySmall"})}}(Na||(Na={}));const Va=S.a`
    ${e=>x`
            ${Ra(e.textStyle,e.weight)}
            color: ${Ba.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ba.Secondary};

                svg {
                    color: ${Ba.Secondary};
                }
            }
        `}
`,Ya=S(mo)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Wa=({external:e=!1,children:r,...o})=>t(Va,{...o,children:[r,e&&n(Ya,{})]});var qa;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(qa||(qa={}));const Qa=S.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    ${e=>{switch(e.$type){case"standalone":return x`
                    row-gap: 0.5rem;
                `;case"input":return x`
                    row-gap: 0.25rem;
                `}}}
`,Ua=S.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.625rem;
`,Za=S.div`
    grid-column: 1 / -1;
    display: flex;
`,Xa=S.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`,Ga=S.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return x`
                    left: 0;
                `;case"right":return x`
                    right: 0;
                `}}}

    ${e=>{const{$selected:t}=e;if(t)return x`
                border-top: 1px solid ${Ba.Accent.Light[4]};
                border-bottom: 1px solid ${Ba.Accent.Light[4]};
                background-color: ${Ba.Accent.Light[5]};
            `}}
    
    ${e=>{const{$hovered:t,$overlap:n}=e;return t?x`
                border-top: 1px dashed ${Ba.Accent.Light[4]};
                border-bottom: 1px dashed ${Ba.Accent.Light[4]};
                background-color: ${Ba.Accent.Light[6]};
            `:n?x`
                background-color: ${Ba.Accent.Light[4]};
            `:void 0}}
`,Ja=S.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    position: absolute;

    :hover {
        box-shadow: 0px 0px 4px 1px ${Ba.Shadow.Accent};
        border: 1px solid ${Ba.Accent.Light[1]};
        background-color: ${Ba.Neutral[8]};
    }

    ${e=>{const{$hovered:t,$selected:n}=e;return n?x`
                background: ${Ba.Accent.Light[5]};
                border: 1px solid ${Ba.Primary};
            `:t?x`
                box-shadow: 0px 0px 4px 1px ${Ba.Shadow.Accent};
                border: 1px solid ${Ba.Accent.Light[1]};
                background-color: ${Ba.Neutral[8]};
            `:void 0}}

    ${e=>{const{$disabled:t,$overlap:n,$variant:r}=e;return n?x`
                border: 1px solid ${Ba.Accent.Light[1]};
                background: ${Ba.Accent.Light[4]};

                :hover {
                    background: ${Ba.Accent.Light[4]};
                }
            `:t?x`
                color: ${Ba.Neutral[4]};
                cursor: not-allowed;

                :hover {
                    box-shadow: unset;
                    border: unset;
                    background-color: unset;
                }
            `:"today"===r?x`
                    background: ${Ba.Accent.Light[5]};
                `:void 0}}
`,Ka=S(Na.H5)`
    ${e=>{const{$disabled:t,$selected:n,$variant:r}=e;if(t&&n)return x`
                ${Ra("H5","semibold")};
                color: ${Ba.Accent.Light[2]};
            `;if(t)return x`
                color: ${Ba.Neutral[4]};
            `;if(n)return x`
                ${Ra("H5","semibold")};
                color: ${Ba.Primary};
            `;switch(r){case"other-month":return x`
                    color: ${Ba.Neutral[4]};
                `;case"today":return x`
                    color: ${Ba.Neutral[3]};
                `;case"default":return x`
                    color: ${Ba.Neutral[1]};
                `}}}
`;var es={exports:{}};es.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var ts=es.exports;M.extend(ts);const ns=({calendarDate:e,currentFocus:r,disabledDates:o,selectedStartDate:i,selectedEndDate:a,onSelect:s,onHover:c,type:u,isNewSelection:d,between:h,variant:f})=>{const p=y((()=>ho.generateDays(e)),[e]),[m,g]=l(""),v=()=>{g(""),c("")},b=(()=>{if(!m||"single"===f)return null;const e=M(m);if(i&&a)if(e.isBefore(i)){if("start"===r)return"full-overlap-start";if("end"===r)return"reset-end"}else if(e.isAfter(a)){if("end"===r)return"full-overlap-end";if("start"===r)return"reset-start"}else if(e.isBetween(i,a,"day","[]")&&![i,a].includes(m)){if("start"===r)return"overlap-start";if("end"===r)return"overlap-end"}if(i&&!a){if(e.isAfter(i)&&"end"===r)return"hover-end"}else if(!i&&a&&e.isBefore(a)&&"start"===r)return"hover-start";return null})(),w=e=>{const t=e.format("YYYY-MM-DD"),n={},s={},l={},c={},u=i&&a&&i===a;return!d&&["reset-start","reset-end"].includes(b)&&[i,a].includes(t)&&(l.$overlap=!0),(e=>{const t=h&&!e.isBetween(h[0],h[1],"day","[]"),n=o&&o.includes(e.format("YYYY-MM-DD")),s="start"===r&&a&&e.isAfter(a)&&d,l="end"===r&&i&&e.isBefore(i)&&d;return t||n||s||l})(e)&&(l.$disabled=!0,c.$disabled=!0),[i,a].includes(t)&&(l.$selected=!0,c.$selected=!0),i&&a&&!u&&e.isBetween(i,a,"day","[]")&&(c.$selected=!0,e.isSame(i)?s.$selected=!0:e.isSame(a)?n.$selected=!0:(n.$selected=!0,s.$selected=!0)),"hover-start"===b&&e.isBetween(a,m,"day","[]")&&(c.$selected=!0,a===t?n.$hovered=!0:m===t?(s.$hovered=!0,l.$hovered=!0):(n.$hovered=!0,s.$hovered=!0)),"hover-end"===b&&e.isBetween(i,m,"day","[]")&&(c.$selected=!0,i===t?s.$hovered=!0:m===t?(n.$hovered=!0,l.$hovered=!0):(n.$hovered=!0,s.$hovered=!0)),"overlap-start"===b&&e.isBetween(a,m,"day","[]")&&(m===t?(s.$overlap=!0,l.$overlap=!0):a===t?(n.$overlap=!0,l.$overlap=!0,l.$hovered=!0):(n.$overlap=!0,s.$overlap=!0)),"overlap-end"===b&&e.isBetween(i,m,"day","[]")&&(m===t?(n.$overlap=!0,l.$overlap=!0):i===t?(s.$overlap=!0,l.$overlap=!0,l.$hovered=!0):(n.$overlap=!0,s.$overlap=!0)),"full-overlap-start"===b&&e.isBetween(a,m,"day","[]")&&(i===t&&u?(n.$hovered=!0,l.$overlap=!0):i===t?(n.$hovered=!0,s.$overlap=!0,l.$overlap=!0):a===t?(n.$overlap=!0,l.$overlap=!0):e.isSame(m)?(s.$hovered=!0,c.$selected=!0,l.$hovered=!0):e.isBetween(i,m,"day","()")&&(n.$hovered=!0,s.$hovered=!0,c.$selected=!0)),"full-overlap-end"===b&&e.isBetween(i,m,"day","[]")&&(a===t&&u?(s.$hovered=!0,l.$overlap=!0):a===t?(n.$overlap=!0,s.$hovered=!0,l.$overlap=!0):i===t?(s.$overlap=!0,l.$overlap=!0):e.isSame(m)?(n.$hovered=!0,c.$selected=!0,l.$hovered=!0):e.isBetween(a,m,"day","()")&&(n.$hovered=!0,s.$hovered=!0,c.$selected=!0)),["full-overlap-end","full-overlap-start"].includes(b)&&e.isBetween(i,a,"day","()")&&(n.$overlap=!0,s.$overlap=!0),{styleLeftProps:n,styleRightProps:s,styleCircleProps:l,styleLabelProps:c}};return t(Qa,{$type:u,children:[p[0].map(((e,t)=>n(Ua,{children:n(Na.H6,{weight:"semibold",children:M(e).format("ddd")})},`week-day-${t}`))),p.map(((r,o)=>n(Za,{onMouseLeave:v,children:r.map(((r,o)=>{const i=r.format("YYYY-MM-DD"),{variant:a}=(t=>({variant:e.month()!==t.month()?"other-month":M().isSame(t,"day")?"today":"default"}))(r),{styleLeftProps:l,styleRightProps:u,styleCircleProps:d,styleLabelProps:h}=w(r);return t(Xa,{children:[n(Ga,{$position:"left",...l}),n(Ga,{$position:"right",...u}),n(Ja,{$variant:a,onClick:()=>((e,t)=>{t||s(e)})(r,d.$disabled),onMouseEnter:()=>((e,t)=>{t||(g(e),c(e))})(i,d.$disabled),...d,children:n(Ka,{weight:h.$selected?"semibold":"regular",$variant:a,...h,children:r.format("D")})})]},`day-${o}`)}))},o)))]})},rs=S.div`
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
`,os=S.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 5rem;

    &:hover {
        box-shadow: 0px 0px 4px 1px ${Ba.Shadow.Accent};
        border: 1px solid ${Ba.Accent.Light[1]};
    }

    ${e=>{if(e.$disabled)return x`
                cursor: not-allowed;

                :hover {
                    box-shadow: unset;
                    border: unset;
                }
            `;switch(e.$variant){case"current-month":return x`
                    background-color: ${Ba.Accent.Light[6](e)};
                `;case"selected-month":return x`
                    background-color: ${Ba.Accent.Light[5](e)};
                    border: 1px solid ${Ba.Primary(e)};
                `}}}
`,is=S(Na.H5)`
    ${e=>{if(e.$disabled)return x`
                color: ${Ba.Neutral[4]};
            `;switch(e.$variant){case"current-month":return x`
                    color: ${Ba.Neutral[3](e)};
                `;case"selected-month":return x`
                    ${Ra("H5","semibold")}
                    color: ${Ba.Primary(e)};
                `}}}
`,as=({calendarDate:e,currentFocus:t,selectedStartDate:r,selectedEndDate:o,viewCalendarDate:i,type:a,isNewSelection:s,between:c,onMonthSelect:u})=>{const[d,f]=l([]);h((()=>{m()}),[e]);const p=e=>{const n=e.format("MMMM");return{disabled:(e=>{const n=c&&!e.isBetween(c[0],c[1],"month","[]"),i="start"===t&&o&&e.isAfter(o,"month")&&s,a="end"===t&&r&&e.isBefore(r,"month")&&s;return n||i||a})(e),month:n,variant:i.isSame(e,"month")?"selected-month":M().isSame(e,"month")?"current-month":"default"}},m=()=>{const t=ho.generateMonths(M(e));f(t)};return d.length?n(rs,{$type:a,children:d.map((e=>{const{disabled:t,variant:r,month:o}=p(e);return n(os,{$variant:r,$disabled:t,onClick:()=>((e,t)=>{t||u(e)})(e,t),children:n(is,{weight:"regular",$variant:r,$disabled:t,children:o})},o)}))}):null},ss=S.div`
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
`,ls=S.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 4px 1px ${Ba.Shadow.Accent};
        border: 1px solid ${Ba.Accent.Light[1]};
    }

    ${e=>{if(e.$disabled)return x`
                cursor: not-allowed;

                :hover {
                    box-shadow: unset;
                    border: unset;
                }
            `;switch(e.$variant){case"current-year":return x`
                    background: ${Ba.Accent.Light[6](e)};
                `;case"selected-year":return x`
                    background: ${Ba.Accent.Light[5](e)};
                    border: 1px solid ${Ba.Primary(e)};
                `}}};
`,cs=S(Na.H5)`
    ${e=>{if(e.$disabled)return x`
                color: ${Ba.Neutral[4]};
            `;switch(e.$variant){case"current-year":return x`
                    color: ${Ba.Neutral[3](e)};
                `;case"selected-year":return x`
                    ${Ra("H5","semibold")}
                    color: ${Ba.Primary(e)};
                `;case"other-decade":return x`
                    color: ${Ba.Neutral[4](e)};
                `}}}
`,us=({calendarDate:e,currentFocus:t,selectedStartDate:r,selectedEndDate:o,viewCalendarDate:i,type:a,isNewSelection:s,between:c,onYearSelect:u})=>{const[d,f]=l([]);h((()=>{m()}),[e]);const p=e=>{const n=[0,11].includes(d.indexOf(e)),a=e.year();return{disabled:(e=>{const n=c&&!e.isBetween(c[0],c[1],"year","[]"),i="start"===t&&o&&e.isAfter(o,"year")&&s,a="end"===t&&r&&e.isBefore(r,"year")&&s;return n||i||a})(e),year:a,variant:n?"other-decade":i.isSame(e,"year")?"selected-year":M().isSame(e,"year")?"current-year":"default"}},m=()=>{const t=ho.generateDecadeOfYears(M(e));f(t)};return d.length?n(ss,{$type:a,children:d.map((e=>{const{disabled:t,variant:r,year:o}=p(e);return n(ls,{$variant:r,$disabled:t,onClick:()=>((e,t)=>{t||u(e)})(e,t),children:n(cs,{weight:"regular",$variant:r,$disabled:t,children:o})},o)}))}):null};var ds,hs={};Object.defineProperty(hs,"__esModule",{value:!0});var fs=e;const ps=e=>fs.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:fs.jsx("path",{d:"M2.62611 5.81312C2.84811 5.59112 3.10478 5.48012 3.39611 5.48012C3.68811 5.48012 3.94511 5.59112 4.16711 5.81312L10.1881 11.8341L16.2301 5.79212C16.4381 5.58412 16.6881 5.48012 16.9801 5.48012C17.2714 5.48012 17.5281 5.59112 17.7501 5.81312C17.9588 6.02179 18.0631 6.27545 18.0631 6.57412C18.0631 6.87279 17.9588 7.12612 17.7501 7.33412L10.8131 14.2721C10.7158 14.3688 10.6151 14.4381 10.5111 14.4801C10.4071 14.5215 10.2994 14.5421 10.1881 14.5421C10.0768 14.5421 9.96911 14.5215 9.86511 14.4801C9.76111 14.4381 9.66044 14.3688 9.56311 14.2721L2.60511 7.31312C2.38244 7.09112 2.27811 6.83779 2.29211 6.55312C2.30611 6.26845 2.41744 6.02179 2.62611 5.81312Z",fill:"currentColor"})});ps.displayName="ChevronDownIcon",ds=hs.ChevronDownIcon=ps;var ms,gs={};Object.defineProperty(gs,"__esModule",{value:!0});var ys=e;const vs=e=>ys.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:ys.jsx("path",{d:"M12.521 17.562L5.58301 10.625C5.48635 10.5277 5.41701 10.427 5.37501 10.323C5.33301 10.219 5.31201 10.1113 5.31201 10C5.31201 9.88867 5.33301 9.781 5.37501 9.677C5.41701 9.573 5.48635 9.47234 5.58301 9.375L12.542 2.417C12.75 2.20834 13.0033 2.104 13.302 2.104C13.6007 2.104 13.854 2.21534 14.062 2.438C14.2847 2.646 14.389 2.90267 14.375 3.208C14.361 3.514 14.25 3.771 14.042 3.979L8.02101 10L14.062 16.042C14.2567 16.236 14.354 16.4893 14.354 16.802C14.354 17.1147 14.2567 17.368 14.062 17.562C13.854 17.7707 13.5973 17.875 13.292 17.875C12.986 17.875 12.729 17.7707 12.521 17.562Z",fill:"currentColor"})});vs.displayName="ChevronLeftIcon",ms=gs.ChevronLeftIcon=vs;var bs,ws={};Object.defineProperty(ws,"__esModule",{value:!0});var $s=e;const Ss=e=>$s.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:$s.jsx("path",{d:"M5.979 17.562C5.757 17.34 5.646 17.0833 5.646 16.792C5.646 16.5 5.757 16.243 5.979 16.021L12 10L5.958 3.958C5.75 3.75 5.646 3.5 5.646 3.208C5.646 2.91667 5.757 2.66 5.979 2.438C6.18766 2.22933 6.44133 2.125 6.74 2.125C7.03866 2.125 7.292 2.22933 7.5 2.438L14.438 9.375C14.5347 9.47233 14.604 9.573 14.646 9.677C14.6873 9.781 14.708 9.88867 14.708 10C14.708 10.1113 14.6873 10.219 14.646 10.323C14.604 10.427 14.5347 10.5277 14.438 10.625L7.479 17.583C7.257 17.8057 7.00366 17.91 6.719 17.896C6.43433 17.882 6.18766 17.7707 5.979 17.562Z",fill:"currentColor"})});Ss.displayName="ChevronRightIcon",bs=ws.ChevronRightIcon=Ss;const xs={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},_s=e=>Object.keys(xs).reduce(((t,n)=>{const r=xs[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Os=_s("max-width"),Cs=(_s("min-width"),S.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),ks=_`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ds=S.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Ba.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${ks} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ms=S(Ds)`
    animation-delay: -0.45s;
`,js=S(Ds)`
    animation-delay: -0.3s;
`,Fs=S(Ds)`
    animation-delay: -0.15s;
`,Bs=S.button`
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
                    background-color: ${Ba.Neutral[8](e)};
                    border: 1px solid ${Ba.Primary(e)};

                    span {
                        color: ${Ba.Primary(e)};
                    }
                `;case"light":return x`
                    background-color: ${Ba.Neutral[8](e)};
                    border: 1px solid ${Ba.Neutral[5](e)};

                    span {
                        color: ${Ba.Primary(e)};
                    }
                `;case"disabled":return x`
                    background-color: ${Ba.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Ba.Neutral[3](e)};
                    }
                `;case"link":return x`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ba.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Ba.Secondary};
                        }
                    }
                `;default:return x`
                    background-color: ${Ba.Primary(e)};
                    border: 1px solid transparent;

                    ${Os.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Ba.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?x`
                    height: 2.5rem;
                    span {
                        ${Ra("H5","semibold")}
                    }

                    ${Os.mobileS} {
                        height: auto;
                    }
                `:x`
                    height: 3rem;
                    span {
                        ${Ra("H4","semibold")}
                    }

                    ${Os.mobileS} {
                        height: auto;
                    }
                `}
`,Ps=S((({color:e,className:r,size:o=18})=>t(Cs,{className:r,$size:o,$color:e,children:[n(Ds,{id:"inner1",$size:o-2,$borderWidth:2}),n(Ms,{id:"inner2",$size:o-2,$borderWidth:2}),n(js,{id:"inner3",$size:o-2,$borderWidth:2}),n(Fs,{id:"inner4",$size:o-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Ba.Primary(e);break;case"disabled":t=Ba.Neutral[3](e);break;default:t=Ba.Neutral[8](e)}return x`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,As={Default:i.forwardRef(((e,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",...l}=e,c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default"};return t(Bs,{ref:r,"data-testid":l["data-testid"]||"button",disabled:i,...c,...l,children:[a&&n(Ps,{...c}),n("span",{children:o})]})})),Small:i.forwardRef(((e,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",...l}=e,c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small"};return t(Bs,{ref:r,"data-testid":l["data-testid"]||"button",disabled:i,...c,...l,children:[a&&n(Ps,{...c,size:16}),n("span",{children:o})]})}))},Es=S.button`
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
                background-color: ${Ba.Neutral[7]};
            `}
    }
`,Ts=i.forwardRef((({children:e,focusHighlight:t=!0,focusOutline:r="none",type:o="button",...i},a)=>n(Es,{ref:a,$outline:r,$highlight:t,type:o,...i,children:e}))),Is=x`
    color: ${Ba.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,Hs=S(ms)`
    ${Is}
`,Ls=S(bs)`
    ${Is}
`,Rs=S(ds)`
    ${Is}
    transition: transform 250ms ease-in-out;
    margin-left: 0.625rem;
`,zs=S(uo.div)`
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    width: 100%;
    max-width: 41rem;
    background: ${Ba.Neutral[8]};
    overflow: hidden;
    z-index: 1;
`,Ns=S.div`
    position: relative;
    width: 100%;
    padding: 1.5rem 1.25rem;
    display: flex;

    ${e=>{if("input"===e.$type)return x`
                border: 1px solid ${Ba.Neutral[5]};
                border-radius: 8px;
            `}}
`,Vs=S.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,Ys=S.div`
    display: flex;
    flex: 1;
    position: relative;
`,Ws=S.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Ba.Neutral[8]};

    ${e=>{if(!e.$visible)return x`
                display: none;
            `}}
`,qs=S.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
`,Qs=S.div`
    display: flex;
`,Us=S.div`
    display: flex;
    margin: 0 auto;
    margin-bottom: 1rem;
`,Zs=S.button`
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
                    ${Rs} {
                        width: 1.125rem;
                        height: 1.125rem;
                    }
                `}}}

    ${e=>!1===e.$visible?x`
                display: none;
            `:e.$expandedDisplay?x`
                ${Rs} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,Xs=S.p`
    ${e=>{switch(e.$type){case"standalone":return x`
                    ${Ra("H4","regular")}
                `;case"input":return x`
                    ${Ra("H5","regular")}
                `}}}
`,Gs=S.div`
    display: flex;
`,Js=S(Ts)`
    background: transparent;
    margin: auto 0;
    padding: 0.5rem;

    :focus,
    :active {
        background: transparent;
    }
`,Ks=S.div`
    display: flex;
    gap: 8px;
    margin-top: 1.5rem;
`,el=S(As.Small)`
    flex: 1;
`,tl=S(Ts)`
    display: block;
    padding: 1rem;
    background: transparent;
    margin: auto 0;

    :focus,
    :active {
        background: transparent;
    }

    ${Hs},
    ${Ls} {
        width: 1.5rem;
        height: 1.5rem;
    }

    ${e=>"left"===e.$direction?x`
                    margin: auto 0.625rem auto 0; // to counter the padding
                `:x`
                    margin: auto 0 auto 0.625rem; // to counter the padding
                `}
`,nl=i.forwardRef((({disabledDates:e,onYearMonthDisplayChange:o,onCalendarView:i,onSelect:a,onHover:c,onDismiss:u,actionComponent:d,isOpen:f,value:p,endValue:m,currentFocus:g,withButton:y,variant:b,between:w,type:$="standalone",...S},x)=>{const[_,O]=l(M()),[C,k]=l("default"),[D,j]=l(),[B,P]=l(),[A,E]=l(),[T,I]=l(!0),H=s(null),L=s(null),R=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,a=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,m=e.onResize,g=s(n),y=s(null),v=null!=f?f:y,b=s(),w=l({width:void 0,height:void 0}),$=w[0],S=w[1];return xe((function(){if(!we()){var e=Se(m,S,u,h);b.current=ve((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!g.current&&!we()&&e({width:r,height:o}),g.current=!1}))}),r,i,a);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,i,a,u,h,m,p,v.current]),F({ref:v},$)}();v(x,(()=>({defaultView(){k("default"),i("default")}})),[]),h((()=>{f&&(O(M()),k("default"),"range"===b&&p?.length&&m?.length&&I(!1))}),[f]),h((()=>{const e="end"===g?m:p;E(M(e)),e&&O(M(e))}),[g]),h((()=>{I(!0),p?("input"===d&&O(M(p)),j(p),O(M(p))):j(void 0)}),[p]),h((()=>{I(!0),m?("input"===d&&O(M(m)),P(m)):P(void 0)}),[m]);const z=()=>{switch(C){case"default":E((e=>e.subtract(1,"month"))),O((e=>{const t=e.subtract(1,"month");return Z(t),t}));break;case"month-options":O((e=>e.subtract(1,"year")));break;case"year-options":O((e=>e.subtract(10,"year")))}},N=()=>{switch(C){case"default":E((e=>e.add(1,"month"))),O((e=>{const t=e.add(1,"month");return Z(t),t}));break;case"month-options":O((e=>e.add(1,"year")));break;case"year-options":O((e=>e.add(10,"year")))}},V=e=>{const t=e.format("YYYY-MM-DD");O(e),E(e),G(t),Q(t)},Y=e=>{O(e),E(e),Z(e)},W=()=>{O(M("end"===g?m:p)),X("reset")},q=e=>{U(e)},Q=e=>{a&&a(e)},U=e=>{c&&c(e)},Z=e=>{if(o){const t={month:e.month()+1,year:e.year()};o(t)}},X=e=>{u&&u(e)},G=e=>{if(g)switch(g){case"start":default:j(e);break;case"end":P(e)}else j(e)},J=()=>{"month-options"!==C?(k("month-options"),te("month-options"),R.ref.current.focus()):(k("default"),O(A),te("default"))},K=()=>{"default"!==C?(k("default"),O(A),te("default")):(k("year-options"),te("year-options"))},ee=()=>{if("year-options"===C){const{beginDecade:e,endDecade:t}=ho.getStartEndDecade(_);return`${e} to ${t}`}return M(_).format("YYYY")},te=e=>{i&&i(e)},ne=()=>t(r,{children:[t(Zs,{type:"button",tabIndex:-1,$type:$,$expandedDisplay:"month-options"===C,$visible:"default"===C,id:"month-dropdown",onClick:J,children:[n(Xs,{$type:$,children:M(_).format("MMM")}),n(Rs,{})]}),t(Zs,{type:"button",tabIndex:-1,$type:$,$expandedDisplay:"default"!==C,id:"year-dropdown",onClick:K,children:[n(Xs,{$type:$,children:ee()}),n(Rs,{})]})]}),re=()=>{switch(C){case"month-options":return n(as,{type:$,calendarDate:_,currentFocus:g,selectedStartDate:D,selectedEndDate:B,viewCalendarDate:A,between:w,isNewSelection:T,onMonthSelect:Y});case"year-options":return n(us,{type:$,calendarDate:_,currentFocus:g,selectedStartDate:D,selectedEndDate:B,viewCalendarDate:A,between:w,isNewSelection:T,onYearSelect:Y});default:return null}},oe=()=>{switch($){case"standalone":default:return n(Us,{children:ne()});case"input":return t(qs,{children:[n(Qs,{children:ne()}),t(Gs,{children:[n(Js,{tabIndex:-1,onClick:z,children:n(Hs,{})}),n(Js,{tabIndex:-1,onClick:N,children:n(Ls,{})})]})]})}},ie=()=>{if("standalone"===$||!y)return;let e=!0;const r=["default"].includes(C);switch(b){case"single":e=!D;break;case"range":e=!D||!B}const o=!!r&&e;return t(Ks,{children:[n(el,{ref:L,type:"button","data-testid":"cancel-button",styleType:"light",onClick:W,children:"Cancel"}),n(el,{"data-testid":"done-button",type:"button",ref:H,onClick:()=>(e=>{e||(O(A),X("confirmed"))})(o),disabled:o,children:"Done"})]})},ae=()=>t(Ns,{ref:R.ref,tabIndex:-1,"data-id":"calendar-container",$type:$,...S,children:["standalone"===$&&n(tl,{$direction:"left",onClick:z,children:n(Hs,{})}),t(Vs,{children:[oe(),t(Ys,{children:[n(ns,{type:$,calendarDate:_,currentFocus:g,disabledDates:e,selectedStartDate:D,selectedEndDate:B,variant:b,between:w,isNewSelection:T,onSelect:V,onHover:q}),n(Ws,{$visible:"default"!==C,children:re()})]}),ie()]}),"standalone"===$&&n(tl,{$direction:"right",onClick:N,children:n(Ls,{})})]}),se=zr({height:f?R.height+64:0});return"input"===$?n(zs,{style:se,children:ae()}):n(r,{children:ae()})}));var rl;M.extend(ts),function(e){const t=/^\d{4}-\d{2}-\d{2}$/;e.validate=(e,n,r,o)=>{if(!e||!n)return!1;if(M(e).isAfter(n))return!1;if(r&&r.length&&r.some((t=>[e,n].includes(t))))return!1;if(o&&o.length){if(![e,n].every((e=>M(e).isBetween(o[0],o[1],"day","[]"))))return!1;if(!o.every((e=>t.test(e))))return!1}return!0},e.validateSingle=(e,n,r)=>{if(0===e.length)return!1;if(n&&n.length&&n.some((t=>e===t)))return!1;if(r&&r.length&&!M(e).isBetween(r[0],r[1],"day","[]")){if(!M(e).isBetween(r[0],r[1],"day","[]"))return!1;if(!r.every((e=>t.test(e))))return!1}return!0},e.getFormattedRawValue=(e,t)=>{const[n,r,o]=e.split("-"),i=[o,r,n];let a;if(t){const[e,n,r]=t.split("-");a=[r,n,e]}return{start:i,end:a}},e.sleep=(e,t)=>new Promise((n=>{const r=setTimeout(n,e);t.signal.addEventListener("abort",(()=>{clearTimeout(r)}))}))}(rl||(rl={}));const ol=[1,3,5,7,8,10,12],il=[4,6,9,11];var al,sl,ll;!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":ol.includes(i)?Math.min(o,31).toString():il.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=M(e,n);return M(t,n).diff(r,"minute")}}(al||(al={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(sl||(sl={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r)=>{let o=0;t>n&&(o=Math.floor((t-n)/8));const i=r+o;if(i<e.length){const t=Math.floor(i/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(ll||(ll={}));const cl=S.div`
    position: relative;
    display: flex;
    align-items: center;
    flex: 1;
    height: 100%;
    left: ${e=>e.$readOnly?"-0.5rem":""};
    pointer-events: ${e=>e.$readOnly?"none;":""};

    ${e=>"start"===e.$variant?x`
                ${yl}
                left: ${e.$readOnly?"0":""};
            `:"range"===e.$variant?x`
                ${yl}
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

    ${Os.mobileS} {
        ${e=>{if("start"===e.$variant)return x`
                    width: 75%;
                `}}
    }
`,ul=S.div`
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;

    ${e=>{if(e.$isHover)return x`
                ${dl}, ${ml} {
                    color: ${Ba.Neutral[4]};
                }
            `}}
`,dl=S.input`
    ${Ra("Body","regular")}
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
`,hl=S(dl)`
    width: 2.5rem;
`,fl=S(dl)`
    width: 2.6rem;
`,pl=S(dl)`
    width: 3.5rem;
`,ml=S(Na.Body)`
    margin: 0.1rem 0.2rem 0 0.2rem;
    ${e=>{if(e.$hide)return x`
                color: ${Ba.Neutral[3](e)};
            `}}
`,gl=S.div`
    ${Ra("Body","regular")}
    background-color: ${Ba.Neutral[8]};
    color: ${Ba.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: calc(100% - 0.5rem); // 0.5rem is the focus blur shadow area
    height: calc(100% - 0.5rem); // 0.5rem is the focus blur shadow area
    cursor: pointer;

    ${Os.mobileM} {
        width: 100%;

        ${e=>{if("range"===e.$variant)return x`
                        width: calc(100% - 0.5rem);
                    `}}
    }

    ${e=>e.$disabled?x`
                background-color: ${Ba.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$isDirty?x`
                display: none;
            `:void 0}
`,yl=x`
    ${hl} {
        width: 1.75rem;
    }
    ${hl} + ${ml} {
        margin: 0.1rem 0 0 0.25rem;
    }
    ${fl} {
        width: 2.5rem;
    }
    ${fl} + ${ml} {
        margin: 0.1rem 0.25rem 0 0;
    }
    ${pl} {
        width: 3rem;
    }
`;var vl={exports:{}};vl.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[o,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],h=u&&u[0],f=u&&u[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(r),u=i.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),i=this.$locale(),!l&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),o=r.year,i=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,p=a||(o||i?1:f.getDate()),m=o||f.getFullYear(),g=0;o&&!i||(g=i>0?i-1:f.getMonth());var y=s||0,v=l||0,b=c||0,w=u||0;return d?new Date(Date.UTC(m,g,p,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,p,y,v,b,w)):new Date(m,g,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===f&&(this.$d=new Date(""))}else o.call(this,e)}}}();var bl=vl.exports;M.extend(bl);const wl=({action:e,disabled:r,confirmedValue:o,onChange:i,onFocus:a,readOnly:c,names:u,value:d,variant:f,focused:p,focusType:m,isOpen:g})=>{const[y,v]=l(""),[b,w]=l(""),[$,S]=l(""),[x,_]=l("none"),[O,C]=l(!1),k=s(null),D=s(null),j=s(null),F=s(null),B=s(y),P=s(b),A=s($),E=s(x),T=e=>{B.current=e,v(e)},I=e=>{P.current=e,w(e)},H=e=>{A.current=e,S(e)},L=e=>{E.current=e,_(e)};h((()=>(document.addEventListener("mousedown",R),k.current&&k.current.addEventListener("keydown",z),()=>{document.removeEventListener("mousedown",R),k.current&&k.current.removeEventListener("keydown",z)})),[x]),h((()=>{x===u[0]&&2===y.length&&j.current&&p&&j.current.focus()}),[y]),h((()=>{x===u[1]&&2===b.length&&F.current&&p&&F.current.focus()}),[b]),h((()=>{d||g||C(!1),Q(d)}),[d,g]),h((()=>{p&&D.current.focus()}),[p]);const R=e=>{r||c||k&&k.current.contains(e.target)||"none"!==E.current&&L("none")},z=e=>{e.target.name===u[2]&&"Tab"===e.code&&L("none")},N=t=>{if(["hover","unhover"].includes(e))return L(u[0]),void D.current.focus();const n=t.target.name;L(n),t.target.select(),X(n)},V=e=>{const t=e.target.name,n=ll.padValue(e.target.value,!0);switch(t){case u[0]:T(n);break;case u[1]:I(n);case u[2]:}const r=y.length&&b.length&&4===$.length,o=t===u[0];if(r){const e=M(`${$}-${b}-${y}`,"YYYY-MM-DD",!0).isValid(),t=o?n:y,{year:r,month:i,day:a}=U($,b,t,e);T(a),I(i),e||H(r)}},Y=e=>{const t=e.target.name,n=e.target.value.replace(/[^0-9]/g,"");switch(t){case u[0]:T(n),Z(n,t);break;case u[1]:I(n),Z(n,t);break;case u[2]:H(n),Z(n,t)}},W=()=>{C(!0)},q=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(x===u[1]&&0===b.length&&D.current.focus(),x===u[2]&&0===$.length&&j.current.focus())},Q=e=>{if(void 0===e||""===e)T(""),I(""),H("");else{const t=new Date(e);if(!isNaN(t.getTime())){const e=(t.getMonth()+1).toString(),n=t.getFullYear().toString(),r=al.clampDay(t.getDate().toString(),e,n);T(ll.padValue(r)),I(ll.padValue(e)),H(n)}}},U=(e,t,n,r)=>{let i="",a="",s="";if(r){const r=al.clampMonth(t);a=ll.padValue(r),s=ll.padValue(al.clampDay(n,r,e))}else if(!r&&M(o).isValid()){const[e,t,n]=o.split("-");i=e,a=t,s=n}return{year:i,month:a,day:s}},Z=(e,t)=>{const n=t.split("-")[1],r={year:$,month:b,day:y};r[n]=e;const o=G(r);i(o)},X=e=>{a(e)},G=e=>{const t=[e.year,e.month,e.day];if(4===e.year.length&&2==e.month.length&&2==e.day.length){let n="";n=t.join("-");const r=M(n,"YYYY-MM-DD",!0).isValid();if(!r){const t=U(e.year,e.month,e.day,r);n=Object.values(t).join("-")}return M(n).isValid()?n:$l}return t.every((e=>""===e))?"":$l};return t(cl,{$readOnly:c,$variant:f,onClick:()=>{"none"===x&&D.current&&D.current.focus()},onFocus:e=>{const t=e.target.name;["start-day","end-day"].includes(t)&&C(!0)},children:[t(ul,{ref:k,$isHover:"hover"===e,children:[n(hl,{name:u[0],maxLength:2,value:y,ref:D,onFocus:N,onBlur:V,onChange:Y,disabled:r,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":`${u[0]}-input`,"aria-label":`${u[0]}-input`,readOnly:c,tabIndex:c?-1:0,autoComplete:"off",placeholder:x!==u[0]||c?"DD":""}),n(ml,{$hide:0===y.length,children:"/"}),n(fl,{name:u[1],maxLength:2,value:b,ref:j,onFocus:N,onBlur:V,onChange:Y,onKeyDown:q,disabled:r,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":`${u[1]}-input`,"aria-label":`${u[1]}-input`,readOnly:c,tabIndex:c?-1:0,autoComplete:"off",placeholder:x!==u[1]||c?"MM":""}),n(ml,{$hide:0===b.length,children:"/"}),n(pl,{name:u[2],maxLength:4,value:$,ref:F,onFocus:N,onBlur:V,onChange:Y,onKeyDown:q,disabled:r,type:"text",inputMode:"numeric",pattern:"[0-9]{4}","data-testid":`${u[2]}-input`,"aria-label":`${u[2]}-input`,readOnly:c,tabIndex:c?-1:0,autoComplete:"off",placeholder:p&&x===u[2]&&!c?"":"YYYY"})]}),(()=>{if(!d&&!c&&!("start"===f&&"start"===m||"range"===f&&"end"===m))switch(f){case"start":case"range":return n(gl,{$isDirty:O,$disabled:r,$variant:f,onClick:W,children:"start"===f?"From":"To"});default:return}})()]})},$l="Invalid Date",Sl=(e,t)=>e===$l?t.calendar:e&&e.length?e:void 0,xl=(e,t)=>{const{type:n,value:r}=t;let o="";switch(r&&r.length?o=r:e.selected&&e.selected.length?o=e.selected:e.confirmed&&(o=e.confirmed),n){case"default":return{...e,currentType:"default"};case"hover":return{...e,hover:r,input:r,currentType:"hover"};case"unhover":return{...e,hover:"",input:e.selected,currentType:"unhover"};case"selected":return{...e,calendar:Sl(r,e),hover:"",input:r,selected:r,currentType:"selected"};case"confirmed":return{...e,calendar:Sl(o,e),confirmed:o,input:o,selected:o,currentType:"confirmed"};case"reset":return{...e,calendar:Sl(e.confirmed,e),confirmed:e.confirmed,input:e.confirmed,selected:e.confirmed,currentType:"reset"};case"invalid":return{...e,calendar:void 0,confirmed:e.confirmed,input:"",selected:"",currentType:"invalid"};default:return e}},_l={calendar:void 0,confirmed:"",hover:"",input:"",selected:"",currentType:"confirmed"},Ol={collections:{base:{InputBoxShadow:x`
        inset 0 0 6px 1px ${Ba.Shadow.Accent}
    `,InputErrorBoxShadow:x`
        inset 0 0 6px 1px ${Ba.Shadow.Red}
    `,ElevationBoxShadow:x`
      0px 2px 8px ${Ba.Shadow.Elevation}
 `}},defaultValue:"base"},Cl=e=>t=>{const n=t.theme,r=Da(Ol,n[Ma.designTokenScheme]);return n.options?.designToken?ka(r,e,n.options.designToken):ka(r,e)},kl=Cl("InputBoxShadow"),Dl=Cl("InputErrorBoxShadow");Cl("ElevationBoxShadow");var Ml,jl={};Object.defineProperty(jl,"__esModule",{value:!0});var Fl=e;const Bl=e=>Fl.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Fl.jsx("path",{d:"M9.39601 16.062C9.21534 15.882 9.12167 15.6807 9.11501 15.458C9.10767 15.236 9.19434 15.0347 9.37501 14.854L13.354 10.875H4.20801C3.97201 10.875 3.76734 10.7883 3.59401 10.615C3.42001 10.441 3.33301 10.236 3.33301 10C3.33301 9.764 3.42001 9.559 3.59401 9.385C3.76734 9.21167 3.97201 9.125 4.20801 9.125H13.354L9.37501 5.167C9.19434 4.98633 9.10767 4.78133 9.11501 4.552C9.12167 4.32267 9.21534 4.118 9.39601 3.938C9.57667 3.75733 9.77801 3.667 10 3.667C10.222 3.667 10.4233 3.75733 10.604 3.938L16.042 9.375C16.1393 9.45833 16.2087 9.55567 16.25 9.667C16.2913 9.77767 16.312 9.88867 16.312 10C16.312 10.1113 16.2913 10.219 16.25 10.323C16.2087 10.427 16.1393 10.5277 16.042 10.625L10.604 16.062C10.4233 16.2427 10.222 16.333 10 16.333C9.77801 16.333 9.57667 16.2427 9.39601 16.062Z",fill:"currentColor"})});Bl.displayName="ArrowRightIcon",Ml=jl.ArrowRightIcon=Bl;const Pl=S.div`
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid ${Ba.Neutral[5]};
    border-radius: 0.25rem;
    background: ${Ba.Neutral[8]};
    height: 3rem;
    width: 100%;
    padding: 0.1rem 1rem 0;

    :focus,
    :focus-within {
        border: 1px solid ${Ba.Accent.Light[1]};
        box-shadow: ${kl};
    }

    ${e=>{if(e.$readOnly)return x`
                ${Al} {
                    left: 43%;
                }
            `}}

    @media screen and (max-width: 374px) {
        ${e=>"range"===e.$variant?x`
                    width: 100%;
                    height: 5.125rem;

                    ${Al} {
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
                background: ${Ba.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Ba.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?x`
                border: 1px solid ${Ba.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Ba.Validation.Red.Border(e)};
                    box-shadow: ${Dl};
                }
            `:void 0}
`,Al=S(Ts)`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;

    ${Os.mobileS} {
        left: 71% !important;
    }
`,El=S(Ml)`
    color: ${Ba.Neutral[3]};
    cursor: pointer;
    width: 1.125rem;
    height: 1.125rem;
`,Tl=S.div`
    position: absolute;
    background-color: ${Ba.Primary};
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
`,Il=({between:e,disabled:o,disabledDates:i,error:a,value:c,valueEnd:u,onChange:d,onBlur:f,onChangeRaw:p,onBlurRaw:m,withButton:g=!0,readOnly:y,id:v,variant:w="single",...$})=>{const[S,x]=l(!1),[_,O]=l("calendar"),[C,D]=l("default"),[M,j]=l({field:"none",type:"none",count:0}),[F,B]=l(!1),P=s(null),A=s(),E=k.exports.useMediaQuery({maxWidth:xs.mobileL}),T=g||E,[I,H]=b(xl,_l),[L,R]=b(xl,_l);((e,t,n=window)=>{const r=s();h((()=>{r.current=t}),[t]),h((()=>{if(!n||!n.addEventListener)return;const t=e=>r.current(e);return n.addEventListener(e,t),()=>{n.removeEventListener(e,t)}}),[e,n])})("keydown",(function(e){"Escape"===e.code&&V("reset");if("Enter"===e.code&&"range"===w&&!T){const e=[I.selected,L.selected].every(Boolean);V(e?"confirmed":"reset")}}),P.current),h((()=>{H({type:"confirmed",value:c}),"range"===w&&R({type:"confirmed",value:u})}),[]),h((()=>{H({type:"selected",value:c}),"range"===w&&R({type:"selected",value:u})}),[c,u]),h((()=>{const e=new AbortController;if([I.currentType,L.currentType].includes("unhover")){(async()=>{await rl.sleep(250,e),Q("default")})()}return()=>{e.abort()}}),[I.currentType,L.currentType]),h((()=>{"single"!==w&&"none"!==M.type&&j((e=>({...M,count:e.count+1})))}),[M.type]);const z=(e,t)=>{if(e===$l||""===e)return void(""===e&&Q("selected",e));const n=q(e);Q("selected",e),B(!n),O(t),U(n,t,e)},N=e=>{const t=e.split("-")[0];x(!0),j({...M,field:e,type:t})},V=e=>{if(["month-options","year-options"].includes(C))Y();else{switch(e){case"reset":Q("reset");break;case"confirmed":if(F){Q("reset");break}Q("confirmed"),W()}j({field:"none",type:"none",count:0}),x(!1)}},Y=()=>{A.current.defaultView()},W=e=>{const t=M.type;let n=I.selected,r=L.selected;if(e)switch(t){case"end":r=e;break;case"start":n=e}if(d&&d(n,r),p){const{start:e,end:t}=rl.getFormattedRawValue(n,r);p(e,t)}},q=t=>{let n=!0;const r={start:I.selected,end:L.selected};if(r[M.type]=t,"range"===w)switch(M.type){case"start":n=rl.validate(t,r.end,i,e);break;case"end":n=rl.validate(r.start,t,i,e)}else"single"===w&&(n=rl.validateSingle(t,i,e));return n},Q=(t,n)=>{let r=M.type,o=!0;switch(["confirmed","reset"].includes(t)&&(r="none",T&&"range"===w&&(o=rl.validate(I.selected,L.selected,i,e))),o||(H({type:"reset"}),R({type:"reset"})),r){case"start":if("invalid"===t)return void R({type:t});H({type:t,value:n});break;case"end":if("invalid"===t)return void H({type:t});R({type:t,value:n});break;default:H({type:t,value:n}),"range"===w&&R({type:t,value:n})}},U=(e,t,n)=>{if("range"===w&&!e){const{field:e,type:t}=Z();j({field:e,type:t,count:1}),Q("invalid")}if(!["month-options","year-options"].includes(C)){if(!T&&"single"===w&&e||!T&&"range"===w&&M.count>=2&&e)return x(!1),Q("confirmed"),W(n),void j({field:"none",type:"none",count:0});if(!(M.count>=2)&&"calendar"===t&&"range"===w){const{field:e,type:t}=Z();j((n=>({field:e,type:t,count:n.count+1})))}}},Z=()=>{const e="start"===M.type?"end":"start";return{field:`${e}-day`,type:e}};return t(Pl,{ref:P,$disabled:o,$error:a,id:v,"data-testid":$["data-testid"],$readOnly:y,$variant:w,onBlur:e=>{P&&!P.current.contains(e.relatedTarget)&&(Q("reset"),j({field:"none",type:"none",count:0}),((e,t)=>{if(f&&f(e.confirmed,t.confirmed),m){const{start:n,end:r}=rl.getFormattedRawValue(e.confirmed,t.confirmed);m(n,r)}})(I,L),x(!1),B(!1))},tabIndex:-1,...$,children:[n(wl,{disabled:o,onChange:e=>z(e,"input"),onFocus:N,readOnly:y,focused:"start"===M.type,names:["start-day","start-month","start-year"],value:I.input,confirmedValue:I.confirmed,variant:"range"===w?"start":"single",action:I.currentType,focusType:M.type,isOpen:S}),(()=>{if("range"===w)return t(r,{children:[n(Al,{tabIndex:-1,children:n(El,{})}),n(wl,{disabled:o,onChange:e=>z(e,"input"),onFocus:N,readOnly:y,focused:"end"===M.type,names:["end-day","end-month","end-year"],value:L.input,confirmedValue:L.confirmed,variant:w,action:L.currentType,focusType:M.type,isOpen:S})]})})(),(()=>{if("single"!==w&&!o&&!y)return n(Tl,{$position:M.type||"none"})})(),n(nl,{ref:A,type:"input",disabledDates:i,isOpen:S,withButton:T,actionComponent:_,currentFocus:M.type,value:I.calendar,endValue:L.calendar,between:e,variant:w,onCalendarView:e=>{D(e)},onHover:e=>{e?Q("hover",e):Q("unhover")},onSelect:e=>z(e,"calendar"),onDismiss:V})]})};export{Il as DateInput};
//# sourceMappingURL=index.js.map
