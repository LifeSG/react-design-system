import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import a,{useState as i,useRef as o,useEffect as s,Children as l,cloneElement as c,isValidElement as d,createRef as u,PureComponent as h,useLayoutEffect as f,forwardRef as p,useCallback as m,useContext as g,useMemo as b,useImperativeHandle as y,useReducer as v}from"react";import{ICircleFillIcon as $}from"@lifesg/react-icons/i-circle-fill";import{ExternalIcon as w}from"@lifesg/react-icons/external";import x,{css as S,keyframes as k}from"styled-components";import D,{findDOMNode as O,unstable_batchedUpdates as _}from"react-dom";import{CrossIcon as C}from"@lifesg/react-icons/cross";import{ChevronDownIcon as M}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as F}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as B}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as E}from"@lifesg/react-icons";import{ExclamationCircleFillIcon as A}from"@lifesg/react-icons/exclamation-circle-fill";import{TickIcon as P}from"@lifesg/react-icons/tick";import{MagnifierIcon as j}from"@lifesg/react-icons/magnifier";import{ChevronUpIcon as T}from"@lifesg/react-icons/chevron-up";import{CircleIcon as N}from"@lifesg/react-icons/circle";import{CircleDotIcon as I}from"@lifesg/react-icons/circle-dot";import{SquareIcon as L}from"@lifesg/react-icons/square";import{SquareTickFillIcon as R}from"@lifesg/react-icons/square-tick-fill";var H,z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},V={exports:{}};H=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
  \************************************************************/(e,t,r)=>{var n,a=r(/*! react-is */"./node_modules/react-is/index.js"),i=r(/*! object-assign */"./node_modules/object-assign/index.js"),o=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",h={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(c),arrayOf:function(e){return m((function(t,r,n,a,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new p("Invalid "+a+" `"+i+"` of type `"+v(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,n,a,i+"["+l+"]",o);if(c instanceof Error)return c}return null}))},element:m((function(t,r,n,a,i){var o=t[r];return e(o)?null:new p("Invalid "+a+" `"+i+"` of type `"+v(o)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:m((function(e,t,r,n,i){var o=e[t];return a.isValidElementType(o)?null:new p("Invalid "+n+" `"+i+"` of type `"+v(o)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,r,n,a,i){if(!(t[r]instanceof e)){var o=e.name||u;return new p("Invalid "+a+" `"+i+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+o+"`.")}var s;return null}))},node:m((function(e,t,r,n,a){return y(e[t])?null:new p("Invalid "+n+" `"+a+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,r,n,a,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=v(l);if("object"!==c)return new p("Invalid "+a+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,n,a,i+"."+d,o);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,r,n,a,i){for(var o=t[r],s=0;s<e.length;s++)if(f(o,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===$(t)?String(t):t}));return new p("Invalid "+a+" `"+i+"` of value `"+String(o)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(r)+" at index "+t+"."),c}return m((function(t,r,n,a,i){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,r,n,a,i,o);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new p("Invalid "+a+" `"+i+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,r,n,a,i){var s=t[r],l=v(s);if("object"!==l)return new p("Invalid "+a+" `"+i+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return b(n,a,i,c,$(d));var u=d(s,c,n,a,i+"."+c,o);if(u)return u}return null}))},exact:function(e){return m((function(t,r,n,a,l){var c=t[r],d=v(c);if("object"!==d)return new p("Invalid "+a+" `"+l+"` of type `"+d+"` supplied to `"+n+"`, expected `object`.");var u=i({},t[r],e);for(var h in u){var f=e[h];if(s(e,h)&&"function"!=typeof f)return b(n,a,l,h,$(f));if(!f)return new p("Invalid "+a+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=f(c,h,n,a,l+"."+h,o);if(m)return m}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var r={},a=0;function i(i,s,l,c,d,h,f){if(c=c||u,h=h||l,f!==o){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!r[g]&&a<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[g]=!0,a++)}}return null==s[l]?i?null===s[l]?new p("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,d,h)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function g(e){return m((function(t,r,n,a,i,o){var s=t[r];return v(s)!==e?new p("Invalid "+a+" `"+i+"` of type `"+$(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,r,n,a){return new p((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+a+"`.")}function y(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(y);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e[d]);if("function"==typeof t)return t}(t);if(!n)return!1;var a,i=n.call(t);if(n!==t.entries){for(;!(a=i.next()).done;)if(!y(a.value))return!1}else for(;!(a=i.next()).done;){var o=a.value;if(o&&!y(o[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function $(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=$(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var f=e.type;switch(f){case c:case d:case a:case o:case i:case h:return f;default:var g=f&&f.$$typeof;switch(g){case l:case u:case m:case p:case s:return g;default:return t}}case n:return t}}}var w=c,x=d,S=l,k=s,D=r,O=u,_=a,C=m,M=p,F=n,B=o,E=i,A=h,P=!1;function j(e){return $(e)===d}t.AsyncMode=w,t.ConcurrentMode=x,t.ContextConsumer=S,t.ContextProvider=k,t.Element=D,t.ForwardRef=O,t.Fragment=_,t.Lazy=C,t.Memo=M,t.Portal=F,t.Profiler=B,t.StrictMode=E,t.Suspense=A,t.isAsyncMode=function(e){return P||(P=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),j(e)||$(e)===c},t.isConcurrentMode=j,t.isContextConsumer=function(e){return $(e)===l},t.isContextProvider=function(e){return $(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return $(e)===u},t.isFragment=function(e){return $(e)===a},t.isLazy=function(e){return $(e)===m},t.isMemo=function(e){return $(e)===p},t.isPortal=function(e){return $(e)===n},t.isProfiler=function(e){return $(e)===o},t.isStrictMode=function(e){return $(e)===i},t.isSuspense=function(e){return $(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===d||e===o||e===i||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===y||e.$$typeof===v||e.$$typeof===g)},t.typeOf=$}()},"./node_modules/react-is/index.js":
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
  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(/*! react */"react"),i=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),o=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),c=n(r(/*! ./Context */"./src/Context.ts")),d=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,o.default)(r)]=e[r],t}),{})},u=function(){var e=(0,a.useRef)(!1);return(0,a.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,a.useState)(t),n=r[0],i=r[1];return(0,a.useEffect)((function(){var e=t();n!==e&&i(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,a.useContext)(c.default),r=function(){return d(e)||d(t)},n=(0,a.useState)(r),i=n[0],o=n[1];return(0,a.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(i,e)||o(e)}),[e,t]),i}(t),o=h(e);if(!o)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,i.default)(e,t||{},!!t)},n=(0,a.useState)(r),o=n[0],s=n[1],l=u();return(0,a.useEffect)((function(){if(l){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),o}(o,n),f=function(e){var t=(0,a.useState)(e.matches),r=t[0],n=t[1];return(0,a.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),p=u();return(0,a.useEffect)((function(){p&&r&&r(f)}),[f]),(0,a.useEffect)((function(){return function(){l&&l.dispose()}}),[]),f}},react:
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})(),V.exports=H(a);const W={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var Y=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},U="object"==typeof z&&z&&z.Object===Object&&z,q=U,Q="object"==typeof self&&self&&self.Object===Object&&self,G=q||Q||Function("return this")(),Z=G,X=function(){return Z.Date.now()},K=/\s/;var J=function(e){for(var t=e.length;t--&&K.test(e.charAt(t)););return t},ee=/^\s+/;var te=function(e){return e?e.slice(0,J(e)+1).replace(ee,""):e},re=G.Symbol,ne=re,ae=Object.prototype,ie=ae.hasOwnProperty,oe=ae.toString,se=ne?ne.toStringTag:void 0;var le=function(e){var t=ie.call(e,se),r=e[se];try{e[se]=void 0;var n=!0}catch(e){}var a=oe.call(e);return n&&(t?e[se]=r:delete e[se]),a},ce=Object.prototype.toString;var de=le,ue=function(e){return ce.call(e)},he=re?re.toStringTag:void 0;var fe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":he&&he in Object(e)?de(e):ue(e)};var pe=function(e){return null!=e&&"object"==typeof e},me=fe,ge=pe;var be=function(e){return"symbol"==typeof e||ge(e)&&"[object Symbol]"==me(e)},ye=te,ve=Y,$e=be,we=/^[-+]0x[0-9a-f]+$/i,xe=/^0b[01]+$/i,Se=/^0o[0-7]+$/i,ke=parseInt;var De=function(e){if("number"==typeof e)return e;if($e(e))return NaN;if(ve(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ve(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ye(e);var r=xe.test(e);return r||Se.test(e)?ke(e.slice(2),r?2:8):we.test(e)?NaN:+e},Oe=Y,_e=X,Ce=De,Me=Math.max,Fe=Math.min;var Be=function(e,t,r){var n,a,i,o,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,i=a;return n=a=void 0,c=t,o=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=i}function m(){var e=_e();if(p(e))return g(e);s=setTimeout(m,function(e){var r=t-(e-l);return u?Fe(r,i-(e-c)):r}(e))}function g(e){return s=void 0,h&&n?f(e):(n=a=void 0,o)}function b(){var e=_e(),r=p(e);if(n=arguments,a=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),d?f(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,t),f(l)}return void 0===s&&(s=setTimeout(m,t)),o}return t=Ce(t)||0,Oe(r)&&(d=!!r.leading,i=(u="maxWait"in r)?Me(Ce(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=a=s=void 0},b.flush=function(){return void 0===s?o:g(_e())},b};var Ee=Array.isArray,Ae=Ee,Pe=be,je=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Te=/^\w*$/;var Ne=function(e,t){if(Ae(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Pe(e))||(Te.test(e)||!je.test(e)||null!=t&&e in Object(t))},Ie=fe,Le=Y;var Re,He=function(e){if(!Le(e))return!1;var t=Ie(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ze=G["__core-js_shared__"],Ve=(Re=/[^.]+$/.exec(ze&&ze.keys&&ze.keys.IE_PROTO||""))?"Symbol(src)_1."+Re:"";var We=function(e){return!!Ve&&Ve in e},Ye=Function.prototype.toString;var Ue=function(e){if(null!=e){try{return Ye.call(e)}catch(e){}try{return e+""}catch(e){}}return""},qe=He,Qe=We,Ge=Y,Ze=Ue,Xe=/^\[object .+?Constructor\]$/,Ke=Function.prototype,Je=Object.prototype,et=Ke.toString,tt=Je.hasOwnProperty,rt=RegExp("^"+et.call(tt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var nt=function(e){return!(!Ge(e)||Qe(e))&&(qe(e)?rt:Xe).test(Ze(e))},at=function(e,t){return null==e?void 0:e[t]};var it=function(e,t){var r=at(e,t);return nt(r)?r:void 0},ot=it(Object,"create"),st=ot;var lt=function(){this.__data__=st?st(null):{},this.size=0};var ct=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},dt=ot,ut=Object.prototype.hasOwnProperty;var ht=function(e){var t=this.__data__;if(dt){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ut.call(t,e)?t[e]:void 0},ft=ot,pt=Object.prototype.hasOwnProperty;var mt=ot;var gt=lt,bt=ct,yt=ht,vt=function(e){var t=this.__data__;return ft?void 0!==t[e]:pt.call(t,e)},$t=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=mt&&void 0===t?"__lodash_hash_undefined__":t,this};function wt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}wt.prototype.clear=gt,wt.prototype.delete=bt,wt.prototype.get=yt,wt.prototype.has=vt,wt.prototype.set=$t;var xt=wt;var St=function(){this.__data__=[],this.size=0};var kt=function(e,t){return e===t||e!=e&&t!=t},Dt=kt;var Ot=function(e,t){for(var r=e.length;r--;)if(Dt(e[r][0],t))return r;return-1},_t=Ot,Ct=Array.prototype.splice;var Mt=Ot;var Ft=Ot;var Bt=Ot;var Et=St,At=function(e){var t=this.__data__,r=_t(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ct.call(t,r,1),--this.size,!0)},Pt=function(e){var t=this.__data__,r=Mt(t,e);return r<0?void 0:t[r][1]},jt=function(e){return Ft(this.__data__,e)>-1},Tt=function(e,t){var r=this.__data__,n=Bt(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Nt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Nt.prototype.clear=Et,Nt.prototype.delete=At,Nt.prototype.get=Pt,Nt.prototype.has=jt,Nt.prototype.set=Tt;var It=Nt,Lt=it(G,"Map"),Rt=xt,Ht=It,zt=Lt;var Vt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Wt=function(e,t){var r=e.__data__;return Vt(t)?r["string"==typeof t?"string":"hash"]:r.map},Yt=Wt;var Ut=Wt;var qt=Wt;var Qt=Wt;var Gt=function(){this.size=0,this.__data__={hash:new Rt,map:new(zt||Ht),string:new Rt}},Zt=function(e){var t=Yt(this,e).delete(e);return this.size-=t?1:0,t},Xt=function(e){return Ut(this,e).get(e)},Kt=function(e){return qt(this,e).has(e)},Jt=function(e,t){var r=Qt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function er(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}er.prototype.clear=Gt,er.prototype.delete=Zt,er.prototype.get=Xt,er.prototype.has=Kt,er.prototype.set=Jt;var tr=er,rr=tr;function nr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return r.cache=i.set(a,o)||i,o};return r.cache=new(nr.Cache||rr),r}nr.Cache=rr;var ar=nr;var ir=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,or=/\\(\\)?/g,sr=function(e){var t=ar(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ir,(function(e,r,n,a){t.push(n?a.replace(or,"$1"):r||e)})),t}));var lr=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},cr=Ee,dr=be,ur=re?re.prototype:void 0,hr=ur?ur.toString:void 0;var fr=function e(t){if("string"==typeof t)return t;if(cr(t))return lr(t,e)+"";if(dr(t))return hr?hr.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},pr=fr;var mr=Ee,gr=Ne,br=sr,yr=function(e){return null==e?"":pr(e)};var vr=function(e,t){return mr(e)?e:gr(e,t)?[e]:br(yr(e))},$r=be;var wr=function(e){if("string"==typeof e||$r(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},xr=vr,Sr=wr;var kr=function(e,t){for(var r=0,n=(t=xr(t,e)).length;null!=e&&r<n;)e=e[Sr(t[r++])];return r&&r==n?e:void 0},Dr=kr;var Or=function(e,t,r){var n=null==e?void 0:Dr(e,t);return void 0===n?r:n};const _r=(e,t,r)=>t?Or(r,t)||Or(e,t):r||e,Cr=(e,t)=>{const r=t||e.defaultValue;return Or(e.collections,r)};var Mr;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Mr||(Mr={}));const Fr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Br=e=>t=>{const r=t.theme,n=Cr(Fr,r[Mr.colorScheme]);return r.options&&r.options.color?_r(n,e,r.options.color):_r(n,e)},Er={Brand:{1:Br("Brand.1"),2:Br("Brand.2"),3:Br("Brand.3"),4:Br("Brand.4"),5:Br("Brand.5"),6:Br("Brand.6")},Primary:Br("Primary"),PrimaryDark:Br("PrimaryDark"),Secondary:Br("Secondary"),Accent:{Light:{1:Br("Accent.Light.1"),2:Br("Accent.Light.2"),3:Br("Accent.Light.3"),4:Br("Accent.Light.4"),5:Br("Accent.Light.5"),6:Br("Accent.Light.6")},Dark:{1:Br("Accent.Dark.1"),2:Br("Accent.Dark.2"),3:Br("Accent.Dark.3")}},Neutral:{1:Br("Neutral.1"),2:Br("Neutral.2"),3:Br("Neutral.3"),4:Br("Neutral.4"),5:Br("Neutral.5"),6:Br("Neutral.6"),7:Br("Neutral.7"),8:Br("Neutral.8")},Validation:{Green:{Text:Br("Validation.Green.Text"),Icon:Br("Validation.Green.Icon"),Border:Br("Validation.Green.Border"),Background:Br("Validation.Green.Background")},Orange:{Text:Br("Validation.Orange.Text"),Icon:Br("Validation.Orange.Icon"),Border:Br("Validation.Orange.Border"),Background:Br("Validation.Orange.Background"),Badge:Br("Validation.Orange.Badge")},Red:{Text:Br("Validation.Red.Text"),Icon:Br("Validation.Red.Icon"),Border:Br("Validation.Red.Border"),Background:Br("Validation.Red.Background")},Blue:{Text:Br("Validation.Blue.Text"),Icon:Br("Validation.Blue.Icon"),Border:Br("Validation.Blue.Border"),Background:Br("Validation.Blue.Background")}},Shadow:{Accent:Br("Shadow.Accent"),Red:Br("Shadow.Red"),Elevation:Br("Shadow.Elevation")}},Ar={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Pr={collections:{base:{D1:{fontFamily:Ar.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ar.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ar.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ar.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ar.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ar.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ar.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ar.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ar.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ar.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ar.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ar.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ar.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ar.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},jr=e=>t=>{const r=t.theme,n=Cr(Pr,r[Mr.textStyleScheme]);return r.options&&r.options.textStyle?_r(n,e,r.options.textStyle):_r(n,e)},Tr={D1:{fontFamily:jr("D1.fontFamily"),fontSize:jr("D1.fontSize"),fontWeight:jr("D1.fontWeight"),lineHeight:jr("D1.lineHeight"),letterSpacing:jr("D1.letterSpacing")},D2:{fontFamily:jr("D2.fontFamily"),fontSize:jr("D2.fontSize"),fontWeight:jr("D2.fontWeight"),lineHeight:jr("D2.lineHeight"),letterSpacing:jr("D2.letterSpacing")},D3:{fontFamily:jr("D3.fontFamily"),fontSize:jr("D3.fontSize"),fontWeight:jr("D3.fontWeight"),lineHeight:jr("D3.lineHeight"),letterSpacing:jr("D3.letterSpacing")},D4:{fontFamily:jr("D4.fontFamily"),fontSize:jr("D4.fontSize"),fontWeight:jr("D4.fontWeight"),lineHeight:jr("D4.lineHeight"),letterSpacing:jr("D4.letterSpacing")},DBody:{fontFamily:jr("DBody.fontFamily"),fontSize:jr("DBody.fontSize"),fontWeight:jr("DBody.fontWeight"),lineHeight:jr("DBody.lineHeight"),letterSpacing:jr("DBody.letterSpacing")},H1:{fontFamily:jr("H1.fontFamily"),fontSize:jr("H1.fontSize"),fontWeight:jr("H1.fontWeight"),lineHeight:jr("H1.lineHeight"),letterSpacing:jr("H1.letterSpacing")},H2:{fontFamily:jr("H2.fontFamily"),fontSize:jr("H2.fontSize"),fontWeight:jr("H2.fontWeight"),lineHeight:jr("H2.lineHeight"),letterSpacing:jr("H2.letterSpacing")},H3:{fontFamily:jr("H3.fontFamily"),fontSize:jr("H3.fontSize"),fontWeight:jr("H3.fontWeight"),lineHeight:jr("H3.lineHeight"),letterSpacing:jr("H3.letterSpacing")},H4:{fontFamily:jr("H4.fontFamily"),fontSize:jr("H4.fontSize"),fontWeight:jr("H4.fontWeight"),lineHeight:jr("H4.lineHeight"),letterSpacing:jr("H4.letterSpacing")},H5:{fontFamily:jr("H5.fontFamily"),fontSize:jr("H5.fontSize"),fontWeight:jr("H5.fontWeight"),lineHeight:jr("H5.lineHeight"),letterSpacing:jr("H5.letterSpacing")},H6:{fontFamily:jr("H6.fontFamily"),fontSize:jr("H6.fontSize"),fontWeight:jr("H6.fontWeight"),lineHeight:jr("H6.lineHeight"),letterSpacing:jr("H6.letterSpacing")},Body:{fontFamily:jr("Body.fontFamily"),fontSize:jr("Body.fontSize"),fontWeight:jr("Body.fontWeight"),lineHeight:jr("Body.lineHeight"),letterSpacing:jr("Body.letterSpacing")},BodySmall:{fontFamily:jr("BodySmall.fontFamily"),fontSize:jr("BodySmall.fontSize"),fontWeight:jr("BodySmall.fontWeight"),lineHeight:jr("BodySmall.lineHeight"),letterSpacing:jr("BodySmall.letterSpacing")},XSmall:{fontFamily:jr("XSmall.fontFamily"),fontSize:jr("XSmall.fontSize"),fontWeight:jr("XSmall.fontWeight"),lineHeight:jr("XSmall.lineHeight"),letterSpacing:jr("XSmall.letterSpacing")}},Nr=e=>{switch(e){case 700:case"bold":return Ar.Bold;case 600:case"semibold":return Ar.Semibold;case 300:case"light":return Ar.Light;case 400:case"regular":return Ar.Regular;default:return""}},Ir=(e,t)=>r=>{const n=Tr[e].fontFamily(r),a=Tr[e].fontWeight(r);return Object.values(Ar).includes(n)?S`
                font-family: ${Nr(t)||Nr(a)||n};
                font-weight: normal !important;
            `:S`
            font-family: ${n};
            font-weight: ${(Lr(t)||a)??"normal"};
        `},Lr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Rr=Ir,Hr=(e,t,r=!1)=>n=>{const a=Tr[e],i=a.fontSize(n);return S`
            ${Ir(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${S`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},zr=(e=!1,t=!1)=>t?S`
            display: block;
        `:e?S`
            display: inline;
        `:S`
            display: block;
        `;var Vr;!function(e){e.D1=x.h1`
        ${e=>S`
                ${Hr("D1",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${zr(e.inline,e.paragraph)}
            `}
    `,e.D2=x.h1`
        ${e=>S`
                ${Hr("D2",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${zr(e.inline,e.paragraph)}
            `}
    `,e.D3=x.h1`
        ${e=>S`
                ${Hr("D3",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${zr(e.inline,e.paragraph)}
            `}
    `,e.D4=x.h1`
        ${e=>S`
                ${Hr("D4",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${zr(e.inline,e.paragraph)}
            `}
    `,e.DBody=x.h1`
        ${e=>S`
                ${Hr("DBody",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${zr(e.inline,e.paragraph)}
            `}
    `,e.H1=x.h1`
        ${e=>S`
                ${Hr("H1",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${zr(e.inline,e.paragraph)}
            `}
    `,e.H2=x.h2`
        ${e=>S`
                ${Hr("H2",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${zr(e.inline,e.paragraph)}
            `}
    `,e.H3=x.h3`
        ${e=>S`
                ${Hr("H3",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${zr(e.inline,e.paragraph)}
            `}
    `,e.H4=x.h4`
        ${e=>S`
                ${Hr("H4",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${zr(e.inline,e.paragraph)}
            `}
    `,e.H5=x.h5`
        ${e=>S`
                ${Hr("H5",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${zr(e.inline,e.paragraph)}
            `}
    `,e.H6=x.h6`
        ${e=>S`
                ${Hr("H6",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${zr(e.inline,e.paragraph)}
            `}
    `,e.Body=x.p`
        ${e=>S`
                ${Hr("Body",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${zr(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=x.p`
        ${e=>S`
                ${Hr("BodySmall",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${zr(e.inline,e.paragraph)}
            `}
    `,e.XSmall=x.span`
        ${e=>S`
                ${Hr("XSmall",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${zr(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Ur({...e,textStyle:"Body"}),Small:e=>Ur({...e,textStyle:"BodySmall"})}}(Vr||(Vr={}));const Wr=x.a`
    ${e=>S`
            ${Hr(e.textStyle,e.weight)}
            color: ${Er.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Er.Secondary};

                svg {
                    color: ${Er.Secondary};
                }
            }
        `}
`,Yr=x(w)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ur=({external:r=!1,children:n,...a})=>e(Wr,{...a,children:[n,r&&t(Yr,{})]}),qr=x.div`
    border-radius: 0.5rem;
    background: ${Er.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Qr=({children:e,...r})=>{const n=r["data-testid"]||"card";return t(qr,{...r,"data-testid":n,children:"string"==typeof e?t(Vr.Body,{children:e}):e})},Gr=x.div`
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
`,Zr=x.div`
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
`,Xr=({show:e=!1,rootId:r,onOverlayClick:n,children:l,backgroundOpacity:c,backgroundBlur:d=!0,disableTransition:u=!1,enableOverlayClick:h=!1,zIndex:f,id:p})=>{const[m,g]=i(null),[b,y]=i(),v=o(),$=o(null),w=l&&a.cloneElement(l,{ref:$}),x=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root";s((()=>{if(e){const e=O();if(S(e),!e){const e=setTimeout((()=>{C("add")}),200);return()=>clearTimeout(e)}}else if(!v.current){const e=setTimeout((()=>{C("remove")}),200);return()=>clearTimeout(e)}}),[e]),s((()=>{g(k());const e=O();return S(e),e||_(),()=>{C("remove")}}),[]);const S=e=>{v.current=e,y(e)},k=()=>document&&r?document.getElementById(r):document?document.body:null,O=()=>document.body.classList.contains(Jr),_=()=>{if(!document.getElementById(Kr)){const e=document.createElement("style");e.id=Kr;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Jr} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Jr}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},C=e=>{const t=document.body.classList.contains(Jr);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Jr):document.body.classList.add(Jr)},M=e=>{const t=$.current?.firstChild;t&&t.contains(e.target)||n&&h&&(e.preventDefault(),n())};return m?D.createPortal(t(Gr,{id:x,"data-testid":x,$show:e,zIndex:f,$stacked:b,children:l&&t(Zr,{"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:c||(b?.5:.8),$backgroundBlur:d,$disableTransition:u,$enableOverlayClick:h,onClick:M,children:w})}),m):null},Kr="lifesg-ds-overlay-stylesheet",Jr="lifesg-ds-overlay-open",en=e=>Object.keys(W).reduce(((t,r)=>{const n=W[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),tn=en("max-width"),rn=(en("min-width"),W),nn=x.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${tn.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,an=({id:e="modal",show:r,animationFrom:n="bottom",children:a,enableOverlayClick:o=!0,rootComponentId:l,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:u=!0,...h})=>{const[f,p]=i(),[m,g]=i();s((()=>window.visualViewport?(y(),window.visualViewport.addEventListener("resize",y),()=>{window.visualViewport.removeEventListener("resize",y)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),s((()=>{r&&u&&document.activeElement?.blur?.()}),[r]);const b=()=>{const e=.01*window.innerHeight;p(e)},y=()=>{const e=.01*window.visualViewport.height;p(e),g(window.visualViewport.offsetTop)};return t(Xr,{"data-testid":`${e}-overlay`,show:r,enableOverlayClick:o,onOverlayClick:d,id:e,rootId:l,zIndex:c,children:t(nn,{show:r,animationFrom:n,"data-testid":e,verticalHeight:f,offsetTop:m,...h,children:a})})},on=x.button`
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
                background-color: ${Er.Neutral[7]};
            `}
    }
`,sn=a.forwardRef((({children:e,focusHighlight:r=!0,focusOutline:n="none",type:a="button",...i},o)=>t(on,{ref:o,$outline:n,$highlight:r,type:a,...i,children:e}))),ln=x.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Er.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${tn.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,cn=x(sn)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Er.Accent.Light[1]};
    }
`,dn=x(C)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Er.Neutral[4]};
`,un="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",hn=x.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?S`
            visibility: visible;
            opacity: 1;
            transition: ${un};
            z-index: 2;
        `:S`
            visibility: hidden;
            opacity: 0;
            transition: ${un};
            z-index: -1;
        `}
    ${e=>(e=>{switch(e){case"top-center":return S`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return S`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return S`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return S`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return S`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return S`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `}})(e.$offset)}

	${tn.mobileL} {
        display: none;
    }
`,fn=x((({id:r="modal-box",children:n,onClose:a,showCloseButton:i=!0,...o})=>e(ln,{"data-testid":r,...o,onClick:e=>{e.stopPropagation()},children:[i&&t(cn,{onClick:a,"data-testid":"close-button",focusHighlight:!1,children:t(dn,{})}),n]})))`
    padding: 3.5rem 1.25rem 2.5rem;
`;x.div`
    position: relative;
    width: fit-content;
`,x.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`;const pn=({children:n,visible:a,onMobileClose:l,...c})=>{const d=c["data-testid"]||"popover",[u,h]=i("none"),f=o(null),p=V.exports.useMediaQuery({maxWidth:W.mobileL}),m=o(u);s((()=>(y(),window.addEventListener("resize",Be(g,300)),()=>{window.removeEventListener("resize",Be(g,300))})),[]);const g=()=>{y()},b=()=>{l&&l()},y=()=>{const e=v();var t;e&&(t=e,m.current=t,h(t))},v=()=>{if(f.current){const e=f.current.getBoundingClientRect(),t=24,r=e.y<t,n=window.innerWidth-t;return e.x<t?r?"top-left":"left":e.x+e.width>n?r?"top-right":"right":("top-left"===m.current||"left"===m.current)&&e.x-e.width/2>t||("top-right"===m.current||"right"===m.current)&&e.x+2*e.width<n?r?"top-center":"none":void 0}},$=()=>"string"==typeof n?t(Vr.BodySmall,{children:n}):n;return e(r,{children:[t(hn,{ref:f,"data-testid":d,$visible:a,$offset:u,...c,children:t(Qr,{children:$()})}),p&&t(an,{show:a,onOverlayClick:b,children:t(fn,{onClose:b,children:$()})})]})},mn=x.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${Er.Primary};
    }
`,gn=x.div`
    display: inline;
    position: relative;
    width: fit-content;
`,bn=({addonType:e="popover",icon:r,"data-testid":n,...a})=>t(mn,{"data-testid":n,...a,children:r||t($,{id:`${e}-icon`})}),yn=({addon:r})=>{const[n,a]=i(!1),l=o(),c=o(!1),d=V.exports.useMediaQuery({maxWidth:W.mobileL}),u=e=>{c.current=e,a(e)};s((()=>{if(!d)return document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}}),[]);const h=e=>{l&&!l.current.contains(e.target)&&c.current&&u(!1)};return e(gn,{ref:l,id:"addon-popover-wrapper",children:[t(pn,{visible:n,id:r.id,"data-testid":r["data-testid"],onMobileClose:()=>{n&&u(!1)},children:r.content}),t(bn,{addonType:r.type,icon:r.icon,id:`popover-hoc-trigger${r["data-testid"]&&`-${r["data-testid"]}`}`,onClick:()=>u(!n),"aria-label":"popover-button",type:"button"})]})};var vn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(vn||(vn={}));const $n=x.label`
    ${Hr("H5","semibold")}

    color: ${e=>e.disabled?Er.Neutral[4](e):Er.Neutral[3](e)};
    margin-bottom: 0.5rem;
    display: inline-block;

    #popover-hoc-wrapper {
        display: inline;
    }

    #popover-hoc-button {
        vertical-align: bottom;
    }
`,wn=x(Vr.H6)`
    color: ${Er.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`,xn=x(Vr.BodySmall)`
    color: ${e=>e.disabled?Er.Neutral[4](e):Er.Neutral[3](e)};
`,Sn=({children:r,addon:n,subtitle:a,"data-testid":i,...o})=>e($n,{...o,children:[r,n&&n.type&&("popover"===n.type?n&&t(yn,{addon:n}):null),"string"==typeof a?t(xn,{as:"span","data-testid":i?`${i}-subtitle`:"subtitle",...o,children:a}):a]}),kn=x.div`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`,Dn=({label:r,errorMessage:n,id:a,disabled:i,children:o,"data-error-testid":s})=>{const d=()=>s||(a?`${a}-error-message`:"error-message"),u=()=>!!n;return e(kn,{children:[r&&t(Sn,"string"==typeof r?{htmlFor:`${a}-base`,"data-testid":a?`${a}-label`:"form-label",disabled:i,children:r}:{htmlFor:`${a}-base`,"data-testid":a?`${a}-label`:"form-label",disabled:i,...r}),(()=>{const e={"aria-invalid":u(),"aria-describedby":u()&&d()};return l.map(o,(t=>c(t,e)))})(),n&&t(wn,{id:d(),weight:"semibold",tabIndex:0,"data-testid":d(),children:n})]})};var On=function(e,t){return On=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},On(e,t)};var _n=function(){return _n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},_n.apply(this,arguments)};var Cn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Mn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Fn="object"==typeof Cn&&Cn&&Cn.Object===Object&&Cn,Bn="object"==typeof self&&self&&self.Object===Object&&self,En=Fn||Bn||Function("return this")(),An=En,Pn=function(){return An.Date.now()},jn=/\s/;var Tn=function(e){for(var t=e.length;t--&&jn.test(e.charAt(t)););return t},Nn=/^\s+/;var In=function(e){return e?e.slice(0,Tn(e)+1).replace(Nn,""):e},Ln=En.Symbol,Rn=Ln,Hn=Object.prototype,zn=Hn.hasOwnProperty,Vn=Hn.toString,Wn=Rn?Rn.toStringTag:void 0;var Yn=function(e){var t=zn.call(e,Wn),r=e[Wn];try{e[Wn]=void 0;var n=!0}catch(e){}var a=Vn.call(e);return n&&(t?e[Wn]=r:delete e[Wn]),a},Un=Object.prototype.toString;var qn=Yn,Qn=function(e){return Un.call(e)},Gn=Ln?Ln.toStringTag:void 0;var Zn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Gn&&Gn in Object(e)?qn(e):Qn(e)},Xn=function(e){return null!=e&&"object"==typeof e};var Kn=In,Jn=Mn,ea=function(e){return"symbol"==typeof e||Xn(e)&&"[object Symbol]"==Zn(e)},ta=/^[-+]0x[0-9a-f]+$/i,ra=/^0b[01]+$/i,na=/^0o[0-7]+$/i,aa=parseInt;var ia=Mn,oa=Pn,sa=function(e){if("number"==typeof e)return e;if(ea(e))return NaN;if(Jn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Jn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Kn(e);var r=ra.test(e);return r||na.test(e)?aa(e.slice(2),r?2:8):ta.test(e)?NaN:+e},la=Math.max,ca=Math.min;var da=function(e,t,r){var n,a,i,o,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,i=a;return n=a=void 0,c=t,o=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=i}function m(){var e=oa();if(p(e))return g(e);s=setTimeout(m,function(e){var r=t-(e-l);return u?ca(r,i-(e-c)):r}(e))}function g(e){return s=void 0,h&&n?f(e):(n=a=void 0,o)}function b(){var e=oa(),r=p(e);if(n=arguments,a=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),d?f(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,t),f(l)}return void 0===s&&(s=setTimeout(m,t)),o}return t=sa(t)||0,ia(r)&&(d=!!r.leading,i=(u="maxWait"in r)?la(sa(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=a=s=void 0},b.flush=function(){return void 0===s?o:g(oa())},b},ua=da,ha=Mn;var fa=function(e,t,r){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ha(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),ua(e,t,{leading:n,maxWait:t,trailing:a})},pa=function(e,t,r,n){switch(t){case"debounce":return da(e,r,n);case"throttle":return fa(e,r,n);default:return e}},ma=function(e){return"function"==typeof e},ga=function(){return"undefined"==typeof window},ba=function(e){return e instanceof Element||e instanceof HTMLDocument},ya=function(e,t,r,n){return function(a){var i=a.width,o=a.height;t((function(t){return t.width===i&&t.height===o||t.width===i&&!n||t.height===o&&!r?t:(e&&ma(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!ga()){t&&t.current&&(r.targetRef.current=t.current);var a=r.getElement();a&&(r.observableElement&&r.observableElement===a||(r.observableElement=a,r.resizeObserver.observe(a,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(ga())return null;if(t)return document.querySelector(t);if(n&&ba(n))return n;if(r.targetRef&&ba(r.targetRef.current))return r.targetRef.current;var a=O(r);if(!a)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,a=void 0===n||n,i=t.handleHeight,o=void 0===i||i,s=t.onResize;if(a||o){var l=ya(s,r.setState.bind(r),a,o);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,a=t.height;!r.skipOnMount&&!ga()&&l({width:n,height:a}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return ma(t)?"renderProp":ma(n)?"childFunction":d(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,a=t.refreshMode,i=t.refreshRate,o=void 0===i?1e3:i,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=u(),r.observableElement=null,ga()||(r.resizeHandler=pa(r.createResizeHandler,a,o,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}On(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){ga()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,a=t.children,i=t.nodeType,o=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=a)(l);case"child":if((e=a).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=a).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(o,null)}}}(h);var va=ga()?s:f;function $a(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,l=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,h=void 0===u||u,f=e.targetRef,p=e.observerOptions,m=e.onResize,g=o(r),b=o(null),y=null!=f?f:b,v=o(),$=i({width:void 0,height:void 0}),w=$[0],x=$[1];return va((function(){if(!ga()){var e=ya(m,x,d,h);v.current=pa((function(t){(d||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,a=r.height;!g.current&&!ga()&&e({width:n,height:a}),g.current=!1}))}),n,s,l);var t=new window.ResizeObserver(v.current);return y.current&&t.observe(y.current,p),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,d,h,m,p,y.current]),_n({ref:y},w)}let wa=Na();const xa=e=>Aa(e,wa);let Sa=Na();xa.write=e=>Aa(e,Sa);let ka=Na();xa.onStart=e=>Aa(e,ka);let Da=Na();xa.onFrame=e=>Aa(e,Da);let Oa=Na();xa.onFinish=e=>Aa(e,Oa);let _a=[];xa.setTimeout=(e,t)=>{let r=xa.now()+t,n=()=>{let e=_a.findIndex((e=>e.cancel==n));~e&&_a.splice(e,1),Ba-=~e?1:0},a={time:r,handler:e,cancel:n};return _a.splice(Ca(r),0,a),Ba+=1,Pa(),a};let Ca=e=>~(~_a.findIndex((t=>t.time>e))||~_a.length);xa.cancel=e=>{ka.delete(e),Da.delete(e),Oa.delete(e),wa.delete(e),Sa.delete(e)},xa.sync=e=>{Ea=!0,xa.batchedUpdates(e),Ea=!1},xa.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,xa.onStart(r)}return n.handler=e,n.cancel=()=>{ka.delete(r),t=null},n};let Ma="undefined"!=typeof window?window.requestAnimationFrame:()=>{};xa.use=e=>Ma=e,xa.now="undefined"!=typeof performance?()=>performance.now():Date.now,xa.batchedUpdates=e=>e(),xa.catch=console.error,xa.frameLoop="always",xa.advance=()=>{"demand"!==xa.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Ta()};let Fa=-1,Ba=0,Ea=!1;function Aa(e,t){Ea?(t.delete(e),e(0)):(t.add(e),Pa())}function Pa(){Fa<0&&(Fa=0,"demand"!==xa.frameLoop&&Ma(ja))}function ja(){~Fa&&(Ma(ja),xa.batchedUpdates(Ta))}function Ta(){let e=Fa;Fa=xa.now();let t=Ca(Fa);t&&(Ia(_a.splice(0,t),(e=>e.handler())),Ba-=t),Ba?(ka.flush(),wa.flush(e?Math.min(64,Fa-e):16.667),Da.flush(),Sa.flush(),Oa.flush()):Fa=-1}function Na(){let e=new Set,t=e;return{add(r){Ba+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Ba-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Ba-=t.size,Ia(t,(t=>t(r)&&e.add(t))),Ba+=e.size,t=e)}}}function Ia(e,t){e.forEach((e=>{try{t(e)}catch(e){xa.catch(e)}}))}function La(){}const Ra={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Ha(e,t){if(Ra.arr(e)){if(!Ra.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}const za=(e,t)=>e.forEach(t);function Va(e,t,r){if(Ra.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}const Wa=e=>Ra.und(e)?[]:Ra.arr(e)?e:[e];function Ya(e,t){if(e.size){const r=Array.from(e);e.clear(),za(r,t)}}const Ua=(e,...t)=>Ya(e,(e=>e(...t))),qa=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Qa,Ga,Za=null,Xa=!1,Ka=La;var Ja=Object.freeze({__proto__:null,get createStringInterpolator(){return Qa},get to(){return Ga},get colors(){return Za},get skipAnimation(){return Xa},get willAdvance(){return Ka},assign:e=>{e.to&&(Ga=e.to),e.now&&(xa.now=e.now),void 0!==e.colors&&(Za=e.colors),null!=e.skipAnimation&&(Xa=e.skipAnimation),e.createStringInterpolator&&(Qa=e.createStringInterpolator),e.requestAnimationFrame&&xa.use(e.requestAnimationFrame),e.batchedUpdates&&(xa.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Ka=e.willAdvance),e.frameLoop&&(xa.frameLoop=e.frameLoop)}});const ei=new Set;let ti=[],ri=[],ni=0;const ai={get idle(){return!ei.size&&!ti.length},start(e){ni>e.priority?(ei.add(e),xa.onStart(ii)):(oi(e),xa(li))},advance:li,sort(e){if(ni)xa.onFrame((()=>ai.sort(e)));else{const t=ti.indexOf(e);~t&&(ti.splice(t,1),si(e))}},clear(){ti=[],ei.clear()}};function ii(){ei.forEach(oi),ei.clear(),xa(li)}function oi(e){ti.includes(e)||si(e)}function si(e){ti.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(ti,(t=>t.priority>e.priority)),0,e)}function li(e){const t=ri;for(let r=0;r<ti.length;r++){const n=ti[r];ni=n.priority,n.idle||(Ka(n),n.advance(e),n.idle||t.push(n))}return ni=0,ri=ti,ri.length=0,ti=t,ti.length>0}const ci="[-+]?\\d*\\.?\\d+",di=ci+"%";function ui(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const hi=new RegExp("rgb"+ui(ci,ci,ci)),fi=new RegExp("rgba"+ui(ci,ci,ci,ci)),pi=new RegExp("hsl"+ui(ci,di,di)),mi=new RegExp("hsla"+ui(ci,di,di,ci)),gi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,bi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,yi=/^#([0-9a-fA-F]{6})$/,vi=/^#([0-9a-fA-F]{8})$/;function $i(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function wi(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,a=2*r-n,i=$i(a,n,e+1/3),o=$i(a,n,e),s=$i(a,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function xi(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Si(e){return(parseFloat(e)%360+360)%360/360}function ki(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Di(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Oi(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=yi.exec(e))?parseInt(t[1]+"ff",16)>>>0:Za&&void 0!==Za[e]?Za[e]:(t=hi.exec(e))?(xi(t[1])<<24|xi(t[2])<<16|xi(t[3])<<8|255)>>>0:(t=fi.exec(e))?(xi(t[1])<<24|xi(t[2])<<16|xi(t[3])<<8|ki(t[4]))>>>0:(t=gi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=vi.exec(e))?parseInt(t[1],16)>>>0:(t=bi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=pi.exec(e))?(255|wi(Si(t[1]),Di(t[2]),Di(t[3])))>>>0:(t=mi.exec(e))?(wi(Si(t[1]),Di(t[2]),Di(t[3]))|ki(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const _i=(e,t,r)=>{if(Ra.fun(e))return e;if(Ra.arr(e))return _i({range:e,output:t,extrapolate:r});if(Ra.str(e.output[0]))return Qa(e);const n=e,a=n.output,i=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,a,i,o,s,l){let c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===a)return n;if(t===r)return e<=t?n:a;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=i(c),n===-1/0?c=-c:a===1/0?c+=n:c=c*(a-n)+n;return c}(e,i[t],i[t+1],a[t],a[t+1],l,o,s,n.map)}};const Ci=1.70158,Mi=1.525*Ci,Fi=Ci+1,Bi=2*Math.PI/3,Ei=2*Math.PI/4.5,Ai=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Pi={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Fi*e*e*e-Ci*e*e,easeOutBack:e=>1+Fi*Math.pow(e-1,3)+Ci*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Mi)/2:(Math.pow(2*e-2,2)*((Mi+1)*(2*e-2)+Mi)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Bi),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Bi)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Ei)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Ei)/2+1,easeInBounce:e=>1-Ai(1-e),easeOutBounce:Ai,easeInOutBounce:e=>e<.5?(1-Ai(1-2*e))/2:(1+Ai(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,a="end"===t?Math.floor(n):Math.ceil(n);return i=0,o=1,s=a/e,Math.min(Math.max(s,i),o);var i,o,s}};function ji(){return ji=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ji.apply(this,arguments)}const Ti=Symbol.for("FluidValue.get"),Ni=Symbol.for("FluidValue.observers"),Ii=e=>Boolean(e&&e[Ti]),Li=e=>e&&e[Ti]?e[Ti]():e,Ri=e=>e[Ni]||null;function Hi(e,t){let r=e[Ni];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class zi{constructor(e){if(this[Ti]=void 0,this[Ni]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Vi(this,e)}}const Vi=(e,t)=>Ui(e,Ti,t);function Wi(e,t){if(e[Ti]){let r=e[Ni];r||Ui(e,Ni,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Yi(e,t){let r=e[Ni];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Ni]=null,e.observerRemoved&&e.observerRemoved(n,t)}}const Ui=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),qi=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Qi=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Gi=new RegExp(`(${qi.source})(%|[a-z]+)`,"i"),Zi=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Xi=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Ki=e=>{const[t,r]=Ji(e);if(!t||qa())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Xi.test(r)?Ki(r):r||e},Ji=e=>{const t=Xi.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]};let eo;const to=(e,t,r,n,a)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${a})`,ro=e=>{eo||(eo=Za?new RegExp(`(${Object.keys(Za).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Li(e).replace(Xi,Ki).replace(Qi,Oi).replace(eo,Oi))),r=t.map((e=>e.match(qi).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>_i(ji({},e,{output:t}))));return e=>{var r;const a=!Gi.test(t[0])&&(null==(r=t.find((e=>Gi.test(e))))?void 0:r.replace(qi,""));let i=0;return t[0].replace(qi,(()=>`${n[i++](e)}${a||""}`)).replace(Zi,to)}},no="react-spring: ",ao=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${no}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},io=ao(console.warn);const oo=ao(console.warn);function so(e){return Ra.str(e)&&("#"==e[0]||/\d/.test(e)||!qa()&&Xi.test(e)||e in(Za||{}))}const lo=qa()?s:f,co=()=>{const e=o(!1);return lo((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function uo(){const e=i()[1],t=co();return()=>{t.current&&e(Math.random())}}const ho=e=>s(e,fo),fo=[];function po(e){const t=o();return s((()=>{t.current=e})),t.current}const mo=Symbol.for("Animated:node"),go=e=>e&&e[mo],bo=(e,t)=>{return r=e,n=mo,a=t,Object.defineProperty(r,n,{value:a,writable:!0,configurable:!0});var r,n,a},yo=e=>e&&e[mo]&&e[mo].getPayload();class vo{constructor(){this.payload=void 0,bo(this,this)}getPayload(){return this.payload||[]}}class $o extends vo{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Ra.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new $o(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Ra.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Ra.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class wo extends $o{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=_i({output:[e,e]})}static create(e){return new wo(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Ra.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=_i({output:[this.getValue(),e]})),this._value=0,super.reset()}}const xo={dependencies:null};class So extends vo{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Va(this.source,((r,n)=>{var a;(a=r)&&a[mo]===a?t[n]=r.getValue(e):Ii(r)?t[n]=Li(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&za(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Va(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){xo.dependencies&&Ii(e)&&xo.dependencies.add(e);const t=yo(e);t&&za(t,(e=>this.add(e)))}}class ko extends So{constructor(e){super(e)}static create(e){return new ko(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Do)),!0)}}function Do(e){return(so(e)?wo:$o).create(e)}function Oo(e){const t=go(e);return t?t.constructor:Ra.arr(e)?ko:so(e)?wo:$o}function _o(){return _o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_o.apply(this,arguments)}const Co=(e,t)=>{const r=!Ra.fun(e)||e.prototype&&e.prototype.isReactComponent;return p(((a,i)=>{const l=o(null),c=r&&m((e=>{l.current=function(e,t){e&&(Ra.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[d,u]=function(e,t){const r=new Set;xo.dependencies=r,e.style&&(e=_o({},e,{style:t.createAnimatedStyle(e.style)}));return e=new So(e),xo.dependencies=null,[e,r]}(a,t),h=uo(),f=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&h()},p=new Mo(f,u),g=o();lo((()=>(g.current=p,za(u,(e=>Wi(e,p))),()=>{g.current&&(za(g.current.deps,(e=>Yi(e,g.current))),xa.cancel(g.current.update))}))),s(f,[]),ho((()=>()=>{const e=g.current;za(e.deps,(t=>Yi(t,e)))}));const b=t.getComponentProps(d.getValue());return n.createElement(e,_o({},b,{ref:c}))}))};class Mo{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&xa.write(this.update)}}const Fo=Symbol.for("AnimatedComponent"),Bo=e=>Ra.str(e)?e:e&&Ra.str(e.displayName)?e.displayName:Ra.fun(e)&&e.name||null;function Eo(){return Eo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Eo.apply(this,arguments)}function Ao(e,...t){return Ra.fun(e)?e(...t):e}const Po=(e,t)=>!0===e||!!(t&&e&&(Ra.fun(e)?e(t):Wa(e).includes(t))),jo=(e,t)=>Ra.obj(e)?t&&e[t]:e,To=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,No=e=>e,Io=(e,t=No)=>{let r=Lo;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const a of r){const r=t(e[a],a);Ra.und(r)||(n[a]=r)}return n},Lo=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Ro={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ho(e){const t=function(e){const t={};let r=0;if(Va(e,((e,n)=>{Ro[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Va(e,((e,n)=>n in t||(r[n]=e))),r}return Eo({},e)}function zo(e){return e=Li(e),Ra.arr(e)?e.map(zo):so(e)?Ja.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Vo(e){return Ra.fun(e)||Ra.arr(e)&&Ra.obj(e[0])}const Wo=Eo({},{tension:170,friction:26},{mass:1,damping:1,easing:Pi.linear,clamp:!1});class Yo{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Wo)}}function Uo(e,t){if(Ra.und(t.decay)){const r=!Ra.und(t.tension)||!Ra.und(t.friction);!r&&Ra.und(t.frequency)&&Ra.und(t.damping)&&Ra.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}const qo=[];class Qo{constructor(){this.changed=!1,this.values=qo,this.toValues=null,this.fromValues=qo,this.to=void 0,this.from=void 0,this.config=new Yo,this.immediate=!1}}function Go(e,{key:t,props:r,defaultProps:n,state:a,actions:i}){return new Promise(((o,s)=>{var l;let c,d,u=Po(null!=(l=r.cancel)?l:null==n?void 0:n.cancel,t);if(u)p();else{Ra.und(r.pause)||(a.paused=Po(r.pause,t));let e=null==n?void 0:n.pause;!0!==e&&(e=a.paused||Po(e,t)),c=Ao(r.delay||0,t),e?(a.resumeQueue.add(f),i.pause()):(i.resume(),f())}function h(){a.resumeQueue.add(f),a.timeouts.delete(d),d.cancel(),c=d.time-xa.now()}function f(){c>0&&!Ja.skipAnimation?(a.delayed=!0,d=xa.setTimeout(p,c),a.pauseQueue.add(h),a.timeouts.add(d)):p()}function p(){a.delayed&&(a.delayed=!1),a.pauseQueue.delete(h),a.timeouts.delete(d),e<=(a.cancelId||0)&&(u=!0);try{i.start(Eo({},r,{callId:e,cancel:u}),o)}catch(e){s(e)}}}))}const Zo=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Jo(e.get()):t.every((e=>e.noop))?Xo(e.get()):Ko(e.get(),t.every((e=>e.finished))),Xo=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ko=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Jo=e=>({value:e,cancelled:!0,finished:!1});function es(e,t,r,n){const{callId:a,parentId:i,onRest:o}=t,{asyncTo:s,promise:l}=r;return i||e!==s||t.reset?r.promise=(async()=>{r.asyncId=a,r.asyncTo=e;const c=Io(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const h=new Promise(((e,t)=>(d=e,u=t))),f=e=>{const t=a<=(r.cancelId||0)&&Jo(n)||a!==r.asyncId&&Ko(n,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const i=new rs,o=new ns;return(async()=>{if(Ja.skipAnimation)throw ts(r),o.result=Ko(n,!1),u(o),o;f(i);const s=Ra.obj(e)?Eo({},e):Eo({},t,{to:e});s.parentId=a,Va(c,((e,t)=>{Ra.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return f(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let m;if(Ja.skipAnimation)return ts(r),Ko(n,!1);try{let t;t=Ra.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(d),h]),m=Ko(n.get(),!0,!1)}catch(e){if(e instanceof rs)m=e.result;else{if(!(e instanceof ns))throw e;m=e.result}}finally{a==r.asyncId&&(r.asyncId=i,r.asyncTo=i?s:void 0,r.promise=i?l:void 0)}return Ra.fun(o)&&xa.batchedUpdates((()=>{o(m,n,n.item)})),m})():l}function ts(e,t){Ya(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class rs extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class ns extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const as=e=>e instanceof os;let is=1;class os extends zi{constructor(...e){super(...e),this.id=is++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=go(this);return e&&e.getValue()}to(...e){return Ja.to(this,e)}interpolate(...e){return io(`${no}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ja.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Hi(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ai.sort(this),Hi(this,{type:"priority",parent:this,priority:e})}}const ss=Symbol.for("SpringPhase"),ls=e=>(1&e[ss])>0,cs=e=>(2&e[ss])>0,ds=e=>(4&e[ss])>0,us=(e,t)=>t?e[ss]|=3:e[ss]&=-3,hs=(e,t)=>t?e[ss]|=4:e[ss]&=-5;class fs extends os{constructor(e,t){if(super(),this.key=void 0,this.animation=new Qo,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Ra.und(e)||!Ra.und(t)){const r=Ra.obj(e)?Eo({},e):Eo({},t,{from:e});Ra.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(cs(this)||this._state.asyncTo)||ds(this)}get goal(){return Li(this.animation.to)}get velocity(){const e=go(this);return e instanceof $o?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return ls(this)}get isAnimating(){return cs(this)}get isPaused(){return ds(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{config:a,toValues:i}=n;const o=yo(n.to);!o&&Ii(n.to)&&(i=Wa(Li(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==wo?1:o?o[l].lastPosition:i[l];let d=n.immediate,u=c;if(!d){if(u=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=Ra.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const h=a.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Ra.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,n=Math.exp(-(1-e)*t);u=r+i/(1-e)*(1-n),d=Math.abs(s.lastPosition-u)<=h,o=i*n}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||h/10,n=a.clamp?0:a.bounce,l=!Ra.und(n),f=r==c?s.v0>0:r<c;let p,m=!1;const g=1,b=Math.ceil(e/g);for(let e=0;e<b&&(p=Math.abs(o)>t,p||(d=Math.abs(c-u)<=h,!d));++e){l&&(m=u==c||u>c==f,m&&(o=-o*n,u=c));o+=(1e-6*-a.tension*(u-c)+.001*-a.friction*o)/a.mass*g,u+=o*g}}else{let n=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(a.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+a.easing(n)*(c-r),o=(u-s.lastPosition)/e,d=1==n}s.lastVelocity=o,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}o&&!o[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,a.round)&&(r=!0)}));const s=go(this),l=s.getValue();if(t){const e=Li(n.to);l===e&&!r||a.decay?r&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return xa.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(cs(this)){const{to:e,config:t}=this.animation;xa.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Ra.und(e)?(r=this.queue||[],this.queue=[]):r=[Ra.obj(e)?e:Eo({},t,{to:e})],Promise.all(r.map((e=>this._update(e)))).then((e=>Zo(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),ts(this._state,e&&this._lastCallId),xa.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Ra.obj(r)?r[t]:r,(null==r||Vo(r))&&(r=void 0),n=Ra.obj(n)?n[t]:n,null==n&&(n=void 0);const a={to:r,from:n};return ls(this)||(e.reverse&&([r,n]=[n,r]),n=Li(n),Ra.und(n)?go(this)||this._set(r):this._set(n)),a}_update(e,t){let r=Eo({},e);const{key:n,defaultProps:a}=this;r.default&&Object.assign(a,Io(r,((e,t)=>/^on/.test(t)?jo(e,n):e))),$s(this,r,"onProps"),ws(this,"onProps",r,this);const i=this._prepareNode(r);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Go(++this._lastCallId,{key:n,props:r,defaultProps:a,state:o,actions:{pause:()=>{ds(this)||(hs(this,!0),Ua(o.pauseQueue),ws(this,"onPause",Ko(this,ps(this,this.animation.to)),this))},resume:()=>{ds(this)&&(hs(this,!1),cs(this)&&this._resume(),Ua(o.resumeQueue),ws(this,"onResume",Ko(this,ps(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((e=>{if(r.loop&&e.finished&&(!t||!e.noop)){const e=ms(r);if(e)return this._update(e,!0)}return e}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Jo(this));const n=!Ra.und(e.to),a=!Ra.und(e.from);if(n||a){if(!(t.callId>this._lastToId))return r(Jo(this));this._lastToId=t.callId}const{key:i,defaultProps:o,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!a||n||t.default&&!Ra.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const h=!Ha(u,c);h&&(s.from=u),u=Li(u);const f=!Ha(d,l);f&&this._focus(d);const p=Vo(t.to),{config:m}=s,{decay:g,velocity:b}=m;(n||a)&&(m.velocity=0),t.config&&!p&&function(e,t,r){r&&(Uo(r=Eo({},r),t),t=Eo({},r,t)),Uo(e,t),Object.assign(e,t);for(const t in Wo)null==e[t]&&(e[t]=Wo[t]);let{mass:n,frequency:a,damping:i}=e;Ra.und(a)||(a<.01&&(a=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/a,2)*n,e.friction=4*Math.PI*i*n/a)}(m,Ao(t.config,i),t.config!==o.config?Ao(o.config,i):void 0);let y=go(this);if(!y||Ra.und(d))return r(Ko(this,!0));const v=Ra.und(t.reset)?a&&!t.default:!Ra.und(u)&&Po(t.reset,i),$=v?u:this.get(),w=zo(d),x=Ra.num(w)||Ra.arr(w)||so(w),S=!p&&(!x||Po(o.immediate||t.immediate,i));if(f){const e=Oo(d);if(e!==y.constructor){if(!S)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(w)}}const k=y.constructor;let D=Ii(d),O=!1;if(!D){const e=v||!ls(this)&&h;(f||e)&&(O=Ha(zo($),w),D=!O),(Ha(s.immediate,S)||S)&&Ha(m.decay,g)&&Ha(m.velocity,b)||(D=!0)}if(O&&cs(this)&&(s.changed&&!v?D=!0:D||this._stop(l)),!p&&((D||Ii(l))&&(s.values=y.getPayload(),s.toValues=Ii(d)?null:k==wo?[1]:Wa(w)),s.immediate!=S&&(s.immediate=S,S||v||this._set(l)),D)){const{onRest:e}=s;za(vs,(e=>$s(this,t,e)));const n=Ko(this,ps(this,l));Ua(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&xa.batchedUpdates((()=>{s.changed=!v,null==e||e(n,this),v?Ao(o.onRest,n):null==s.onStart||s.onStart(n,this)}))}v&&this._set($),p?r(es(t.to,t,this._state,this)):D?this._start():cs(this)&&!f?this._pendingCalls.add(r):r(Xo($))}_focus(e){const t=this.animation;e!==t.to&&(Ri(this)&&this._detach(),t.to=e,Ri(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Ii(t)&&(Wi(t,this),as(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Ii(e)&&Yi(e,this)}_set(e,t=!0){const r=Li(e);if(!Ra.und(r)){const e=go(this);if(!e||!Ha(r,e.getValue())){const n=Oo(r);e&&e.constructor==n?e.setValue(r):bo(this,n.create(r)),e&&xa.batchedUpdates((()=>{this._onChange(r,t)}))}}return go(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,ws(this,"onStart",Ko(this,ps(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Ao(this.animation.onChange,e,this)),Ao(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;go(this).reset(Li(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),cs(this)||(us(this,!0),ds(this)||this._resume())}_resume(){Ja.skipAnimation?this.finish():ai.start(this)}_stop(e,t){if(cs(this)){us(this,!1);const r=this.animation;za(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Hi(this,{type:"idle",parent:this});const n=t?Jo(this.get()):Ko(this.get(),ps(this,null!=e?e:r.to));Ua(this._pendingCalls,n),r.changed&&(r.changed=!1,ws(this,"onRest",n,this))}}}function ps(e,t){const r=zo(t);return Ha(zo(e.get()),r)}function ms(e,t=e.loop,r=e.to){let n=Ao(t);if(n){const a=!0!==n&&Ho(n),i=(a||e).reverse,o=!a||a.reset;return gs(Eo({},e,{loop:t,default:!1,pause:void 0,to:!i||Vo(r)?r:void 0,from:o?e.from:void 0,reset:o},a))}}function gs(e){const{to:t,from:r}=e=Ho(e),n=new Set;return Ra.obj(t)&&ys(t,n),Ra.obj(r)&&ys(r,n),e.keys=n.size?Array.from(n):null,e}function bs(e){const t=gs(e);return Ra.und(t.default)&&(t.default=Io(t)),t}function ys(e,t){Va(e,((e,r)=>null!=e&&t.add(r)))}const vs=["onStart","onRest","onChange","onPause","onResume"];function $s(e,t,r){e.animation[r]=t[r]!==To(t,r)?jo(t[r],e.key):void 0}function ws(e,t,...r){var n,a,i,o;null==(n=(a=e.animation)[t])||n.call(a,...r),null==(i=(o=e.defaultProps)[t])||i.call(o,...r)}const xs=["onStart","onChange","onRest"];let Ss=1;class ks{constructor(e,t){this.id=Ss++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Eo({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Ra.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(gs(e)),this}start(e){let{queue:t}=this;return e?t=Wa(e).map(gs):this.queue=[],this._flush?this._flush(this,t):(Bs(this,t),Ds(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;za(Wa(t),(t=>r[t].stop(!!e)))}else ts(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Ra.und(e))this.start({pause:!0});else{const t=this.springs;za(Wa(e),(e=>t[e].pause()))}return this}resume(e){if(Ra.und(e))this.start({pause:!1});else{const t=this.springs;za(Wa(e),(e=>t[e].resume()))}return this}each(e){Va(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,a=this._changed.size>0;(n&&!this._started||a&&!this._started)&&(this._started=!0,Ya(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,o=a||i&&r.size?this.get():null;a&&t.size&&Ya(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),i&&(this._started=!1,Ya(r,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}xa.onFrame(this._onFrame)}}function Ds(e,t){return Promise.all(t.map((t=>Os(e,t)))).then((t=>Zo(e,t)))}async function Os(e,t,r){const{keys:n,to:a,from:i,loop:o,onRest:s,onResolve:l}=t,c=Ra.obj(t.default)&&t.default;o&&(t.loop=!1),!1===a&&(t.to=null),!1===i&&(t.from=null);const d=Ra.arr(a)||Ra.fun(a)?a:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):za(xs,(r=>{const n=t[r];if(Ra.fun(n)){const a=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=a.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):a.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Ua(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===To(t,"cancel");(d||f&&u.asyncId)&&h.push(Go(++e._lastAsyncId,{props:t,state:u,actions:{pause:La,resume:La,start(t,r){f?(ts(u,e._lastAsyncId),r(Jo(e))):(t.onRest=s,r(es(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=Zo(e,await Promise.all(h));if(o&&p.finished&&(!r||!p.noop)){const r=ms(t,o,a);if(r)return Bs(e,[r]),Os(e,r,!0)}return l&&xa.batchedUpdates((()=>l(p,e,e.item))),p}function _s(e,t){const r=Eo({},e.springs);return t&&za(Wa(t),(e=>{Ra.und(e.keys)&&(e=gs(e)),Ra.obj(e.to)||(e=Eo({},e,{to:void 0})),Fs(r,e,(e=>Ms(e)))})),Cs(e,r),r}function Cs(e,t){Va(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Wi(t,e))}))}function Ms(e,t){const r=new fs;return r.key=e,t&&Wi(r,t),r}function Fs(e,t,r){t.keys&&za(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Bs(e,t){za(t,(t=>{Fs(e.springs,t,(t=>Ms(t,e)))}))}const Es=["children"],As=e=>{let{children:t}=e,r=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,Es);const a=g(Ps),l=r.pause||!!a.pause,c=r.immediate||!!a.immediate;r=function(e,t){const[r]=i((()=>({inputs:t,result:e()}))),n=o(),a=n.current;let l=a;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=r;return s((()=>{n.current=l,a==r&&(r.inputs=r.result=void 0)}),[l]),l.result}((()=>({pause:l,immediate:c})),[l,c]);const{Provider:d}=Ps;return n.createElement(d,{value:r},t)},Ps=(js=As,Ts={},Object.assign(js,n.createContext(Ts)),js.Provider._context=js,js.Consumer._context=js,js);var js,Ts;As.Provider=Ps.Provider,As.Consumer=Ps.Consumer;const Ns=()=>{const e=[],t=function(t){oo(`${no}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return za(e,((e,a)=>{if(Ra.und(t))n.push(e.start());else{const i=r(t,e,a);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return za(e,(e=>e.pause(...arguments))),this},t.resume=function(){return za(e,(e=>e.resume(...arguments))),this},t.set=function(t){za(e,(e=>e.set(t)))},t.start=function(t){const r=[];return za(e,((e,n)=>{if(Ra.und(t))r.push(e.start());else{const a=this._getProps(t,e,n);a&&r.push(e.start(a))}})),r},t.stop=function(){return za(e,(e=>e.stop(...arguments))),this},t.update=function(t){return za(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Ra.fun(e)?e(r,t):e};return t._getProps=r,t};function Is(e,t){const r=Ra.fun(e),[[n],a]=function(e,t,r){const n=Ra.fun(t)&&t;n&&!r&&(r=[]);const a=b((()=>n||3==arguments.length?Ns():void 0),[]),i=o(0),s=uo(),l=b((()=>({ctrls:[],queue:[],flush(e,t){const r=_s(e,t);return i.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Ds(e,t):new Promise((n=>{Cs(e,r),l.queue.push((()=>{n(Ds(e,t))})),s()}))}})),[]),c=o([...l.ctrls]),d=[],u=po(e)||0;function h(e,r){for(let a=e;a<r;a++){const e=c.current[a]||(c.current[a]=new ks(null,l.flush)),r=n?n(a,e):t[a];r&&(d[a]=bs(r))}}b((()=>{za(c.current.slice(e,u),(e=>{!function(e,t){var r;null==(r=e.ref)||r.delete(e),null==t||t.delete(e)}(e,a),e.stop(!0)})),c.current.length=e,h(u,e)}),[e]),b((()=>{h(0,Math.min(u,e))}),r);const f=c.current.map(((e,t)=>_s(e,d[t]))),p=g(As),m=po(p),y=p!==m&&function(e){for(const t in e)return!0;return!1}(p);lo((()=>{i.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],za(e,(e=>e()))),za(c.current,((e,t)=>{null==a||a.add(e),y&&e.start({default:p});const r=d[t];r&&(function(e,t){var r;t&&e.ref!==t&&(null==(r=e.ref)||r.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),ho((()=>()=>{za(l.ctrls,(e=>e.stop(!0)))}));const v=f.map((e=>Eo({},e)));return a?[v,a]:v}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,a]:n}let Ls;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Ls||(Ls={}));class Rs extends os{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=_i(...t);const r=this._get(),n=Oo(r);bo(this,n.create(r))}advance(e){const t=this._get();Ha(t,this.get())||(go(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&zs(this._active)&&Vs(this)}_get(){const e=Ra.arr(this.source)?this.source.map(Li):Wa(Li(this.source));return this.calc(...e)}_start(){this.idle&&!zs(this._active)&&(this.idle=!1,za(yo(this),(e=>{e.done=!1})),Ja.skipAnimation?(xa.batchedUpdates((()=>this.advance())),Vs(this)):ai.start(this))}_attach(){let e=1;za(Wa(this.source),(t=>{Ii(t)&&Wi(t,this),as(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){za(Wa(this.source),(e=>{Ii(e)&&Yi(e,this)})),this._active.clear(),Vs(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Wa(this.source).reduce(((e,t)=>Math.max(e,(as(t)?t.priority:0)+1)),0))}}function Hs(e){return!1!==e.idle}function zs(e){return!e.size||Array.from(e).every(Hs)}function Vs(e){e.idle||(e.idle=!0,za(yo(e),(e=>{e.done=!0})),Hi(e,{type:"idle",parent:e}))}function Ws(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}Ja.assign({createStringInterpolator:ro,to:(e,t)=>new Rs(e,t)});const Ys=["style","children","scrollTop","scrollLeft","viewBox"],Us=/^--/;function qs(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Us.test(e)||Gs.hasOwnProperty(e)&&Gs[e]?(""+t).trim():t+"px"}const Qs={};let Gs={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Zs=["Webkit","Ms","Moz","O"];Gs=Object.keys(Gs).reduce(((e,t)=>(Zs.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Gs);const Xs=["x","y","z"],Ks=/^(matrix|translate|scale|rotate|skew)/,Js=/^(translate)/,el=/^(rotate|skew)/,tl=(e,t)=>Ra.num(e)&&0!==e?e+t:e,rl=(e,t)=>Ra.arr(e)?e.every((e=>rl(e,t))):Ra.num(e)?e===t:parseFloat(e)===t;class nl extends So{constructor(e){let{x:t,y:r,z:n}=e,a=Ws(e,Xs);const i=[],o=[];(t||r||n)&&(i.push([t||0,r||0,n||0]),o.push((e=>[`translate3d(${e.map((e=>tl(e,"px"))).join(",")})`,rl(e,0)]))),Va(a,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(Ks.test(t)){if(delete a[t],Ra.und(e))return;const r=Js.test(t)?"px":el.test(t)?"deg":"";i.push(Wa(e)),o.push("rotate3d"===t?([e,t,n,a])=>[`rotate3d(${e},${t},${n},${tl(a,r)})`,rl(a,0)]:e=>[`${t}(${e.map((e=>tl(e,r))).join(",")})`,rl(e,t.startsWith("scale")?1:0)])}})),i.length&&(a.transform=new al(i,o)),super(a)}}class al extends zi{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return za(this.inputs,((r,n)=>{const a=Li(r[0]),[i,o]=this.transforms[n](Ra.arr(a)?a:r.map(Li));e+=" "+i,t=t&&o})),t?"none":e}observerAdded(e){1==e&&za(this.inputs,(e=>za(e,(e=>Ii(e)&&Wi(e,this)))))}observerRemoved(e){0==e&&za(this.inputs,(e=>za(e,(e=>Ii(e)&&Yi(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Hi(this,e)}}const il=["scrollTop","scrollLeft"];Ja.assign({batchedUpdates:_,createStringInterpolator:ro,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const ol=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new So(e)),getComponentProps:n=(e=>e)}={})=>{const a={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=Bo(e)||"Anonymous";return(e=Ra.str(e)?i[e]||(i[e]=Co(e,a)):e[Fo]||(e[Fo]=Co(e,a))).displayName=`Animated(${t})`,e};return Va(e,((t,r)=>{Ra.arr(e)&&(r=Bo(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,n=t,{style:a,children:i,scrollTop:o,scrollLeft:s,viewBox:l}=n,c=Ws(n,Ys),d=Object.values(c),u=Object.keys(c).map((t=>r||e.hasAttribute(t)?t:Qs[t]||(Qs[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(let t in a)if(a.hasOwnProperty(t)){const r=qs(t,a[t]);Us.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,d[r])})),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new nl(e),getComponentProps:e=>Ws(e,il)}),sl=ol.animated,ll=x(sl.div)`
    position: absolute;
    top: calc(100% + 0.5rem);
    left: -1px;
    width: calc(100% + 2px);
    max-width: 41rem;
    overflow: hidden;
    z-index: 1;
    min-width: 21rem;

    ${tn.mobileL} {
        min-width: 17.5rem;
    }
`;var cl={exports:{}};cl.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),a=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(a,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),a=t.clone().add(n,c),i=r-a<0,o=t.clone().add(n+(i?-1:1),c);return+(-(n+(r-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:o,m:i,s:a,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",$={};$[v]=g;var w=function(e){return e instanceof D},x=function e(t,r,n){var a;if(!t)return v;if("string"==typeof t){var i=t.toLowerCase();$[i]&&(a=i),r&&($[i]=r,a=i);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=t.name;$[s]=t,a=s}return!n&&a&&(v=a),a||!n&&v},S=function(e,t){if(w(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new D(r)},k=y;k.l=x,k.i=w,k.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function g(e){this.$L=x(e.locale,null,!0),this.parse(e)}var b=g.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return k},b.isValid=function(){return!(this.$d.toString()===f)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return k.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!k.u(t)||t,d=k.p(e),f=function(e,t){var a=k.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?a:a.endOf(s)},p=function(e,t){return k.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},m=this.$W,g=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case u:return n?f(1,0):f(31,11);case c:return n?f(1,g):f(0,g+1);case l:var v=this.$locale().weekStart||0,$=(m<v?m+7:m)-v;return f(n?b-$:b+(6-$),g);case s:case h:return p(y+"Hours",0);case o:return p(y+"Minutes",1);case i:return p(y+"Seconds",2);case a:return p(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=k.p(e),d="set"+(this.$u?"UTC":""),f=(r={},r[s]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[o]=d+"Hours",r[i]=d+"Minutes",r[a]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[k.p(e)]()},b.add=function(n,d){var h,f=this;n=Number(n);var p=k.p(d),m=function(e){var t=S(f);return k.w(t.date(t.date()+Math.round(e*n)),f)};if(p===c)return this.set(c,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===s)return m(1);if(p===l)return m(7);var g=(h={},h[i]=t,h[o]=r,h[a]=e,h)[p]||1,b=this.$d.getTime()+n*g;return k.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=k.z(this),i=this.$H,o=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=function(e,r,a,i){return e&&(e[r]||e(t,n))||a[r].slice(0,i)},u=function(e){return k.s(i%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:k.s(s+1,2,"0"),MMM:d(r.monthsShort,s,c,3),MMMM:d(c,s),D:this.$D,DD:k.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,l,2),ddd:d(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:k.s(i,2,"0"),h:u(1),hh:u(2),a:h(i,o,!0),A:h(i,o,!1),m:String(o),mm:k.s(o,2,"0"),s:String(this.$s),ss:k.s(this.$s,2,"0"),SSS:k.s(this.$ms,3,"0"),Z:a};return n.replace(m,(function(e,t){return t||p[e]||a.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,f){var p,m=k.p(h),g=S(n),b=(g.utcOffset()-this.utcOffset())*t,y=this-g,v=k.m(this,g);return v=(p={},p[u]=v/12,p[c]=v,p[d]=v/3,p[l]=(y-b)/6048e5,p[s]=(y-b)/864e5,p[o]=y/r,p[i]=y/t,p[a]=y/e,p)[m]||y,f?v:k.a(v)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return $[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=x(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return k.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},g}(),O=D.prototype;return S.prototype=O,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,D,S),e.$i=!0),S},S.locale=x,S.isDayjs=w,S.unix=function(e){return S(1e3*e)},S.en=$[v],S.Ls=$,S.p={},S}();var dl=cl.exports,ul={exports:{}};ul.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,t))>-1){r=a>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[a,function(e){this.afternoon=d(e,!1)}],a:[a,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[a,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[a,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[a,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,a;n=r,a=i&&i.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],h=d&&d[0],f=d&&d[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var a=o[r];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,c=e.slice(n),d=i.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,a=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,f=new Date,p=o||(a||i?1:f.getDate()),m=a||f.getFullYear(),g=0;a&&!i||(g=i>0?i-1:f.getMonth());var b=s||0,y=l||0,v=c||0,$=d||0;return u?new Date(Date.UTC(m,g,p,b,y,v,$+60*u.offset*1e3)):r?new Date(Date.UTC(m,g,p,b,y,v,$)):new Date(m,g,p,b,y,v,$)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){o[1]=s[p-1];var m=r.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===f&&(this.$d=new Date(""))}else a.call(this,e)}}}();var hl,fl,pl=ul.exports,ml={exports:{}},gl=ml.exports=(hl={year:0,month:1,day:2,hour:3,minute:4,second:5},fl={},function(e,t,r){var n,a=function(e,t,r){void 0===r&&(r={});var n=new Date(e),a=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,a=fl[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),fl[n]=a),a}(t,r);return a.formatToParts(n)},i=function(e,t){for(var n=a(e,t),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,c=s.value,d=hl[l];d>=0&&(i[d]=parseInt(c,10))}var u=i[3],h=24===u?0:u,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=r(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(a-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,a){var o=a&&t,s=a||t||n,l=i(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,a=i(n,r);if(t===a)return[n,t];var o=i(n-=60*(a-t)*1e3,r);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(r.utc(e,o).valueOf(),l,s),d=c[0],u=c[1],h=r(d).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}),bl={exports:{}};bl.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,a){var i=r(e),o=r(t),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var yl=bl.exports,vl={exports:{}};vl.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var $l=vl.exports,wl={exports:{}};wl.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var xl,Sl=wl.exports;dl.extend(yl),dl.extend($l),dl.extend(Sl),dl.extend(pl),dl.extend(gl),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=dl(t).startOf("week");return kl(r).map((e=>Dl(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Dl(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(dl(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+dl(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=dl(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")}}(xl||(xl={}));const kl=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Dl=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Ol=x.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,_l=k`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Cl=x.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Er.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${_l} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ml=x(Cl)`
    animation-delay: -0.45s;
`,Fl=x(Cl)`
    animation-delay: -0.3s;
`,Bl=x(Cl)`
    animation-delay: -0.15s;
`,El=x.button`
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
                    background-color: ${Er.Neutral[8](e)};
                    border: 1px solid ${Er.Primary(e)};

                    span {
                        color: ${Er.Primary(e)};
                    }
                `;case"light":return S`
                    background-color: ${Er.Neutral[8](e)};
                    border: 1px solid ${Er.Neutral[5](e)};

                    span {
                        color: ${Er.Primary(e)};
                    }
                `;case"disabled":return S`
                    background-color: ${Er.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Er.Neutral[3](e)};
                    }
                `;case"link":return S`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Er.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Er.Secondary};
                        }
                    }
                `;default:return S`
                    background-color: ${Er.Primary(e)};
                    border: 1px solid transparent;

                    ${tn.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Er.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?S`
                    height: 2.5rem;
                    span {
                        ${Hr("H5","semibold")}
                    }

                    ${tn.mobileS} {
                        height: auto;
                    }
                `:S`
                    height: 3rem;
                    span {
                        ${Hr("H4","semibold")}
                    }

                    ${tn.mobileS} {
                        height: auto;
                    }
                `}
`,Al=x((({color:r,className:n,size:a=18})=>e(Ol,{className:n,$size:a,$color:r,children:[t(Cl,{id:"inner1",$size:a-2,$borderWidth:2}),t(Ml,{id:"inner2",$size:a-2,$borderWidth:2}),t(Fl,{id:"inner3",$size:a-2,$borderWidth:2}),t(Bl,{id:"inner4",$size:a-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Er.Primary(e);break;case"disabled":t=Er.Neutral[3](e);break;default:t=Er.Neutral[8](e)}return S`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Pl={Default:a.forwardRef(((r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",...l}=r,c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default"};return e(El,{ref:n,"data-testid":l["data-testid"]||"button",disabled:i,...c,...l,children:[o&&t(Al,{...c}),t("span",{children:a})]})})),Small:a.forwardRef(((r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",...l}=r,c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small"};return e(El,{ref:n,"data-testid":l["data-testid"]||"button",disabled:i,...c,...l,children:[o&&t(Al,{...c,size:16}),t("span",{children:a})]})}))},jl=S`
    color: ${Er.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,Tl=x(F)`
    ${jl}
`,Nl=x(B)`
    ${jl}
`,Il=x(M)`
    ${jl}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Ll=x.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Rl=x.div`
    display: flex;
    flex: 1;
    position: relative;
`,Hl=x.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Er.Neutral[8]};

    ${e=>{if(!e.$visible)return S`
                display: none;
            `}}
`,zl=x.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,Vl=x.div`
    display: flex;
`,Wl=x.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?S`
                display: none;
            `:e.$expanded?S`
                ${Il} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,Yl=x.p`
    ${Hr("H5","regular")}
`,Ul=x.div`
    display: flex;
`,ql=x(sn)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Ql=x.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,Gl=x(Pl.Small)`
    flex: 1;
`,Zl=x.div`
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
`,Xl=x.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?S`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Er.Shadow.Accent};
                    border: 1px solid ${Er.Accent.Light[1]};
                }
            `:e.$disabledDisplay?S`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return S`
                    background-color: ${Er.Accent.Light[6](e)};
                `;case"selected-month":return S`
                    background-color: ${Er.Accent.Light[5](e)};
                    border: 1px solid ${Er.Primary(e)};
                `}}}
`,Kl=x(Vr.H5)`
    ${e=>{if(e.$disabledDisplay)return S`
                color: ${Er.Neutral[4]};
            `;switch(e.$variant){case"current-month":return S`
                    color: ${Er.Neutral[3](e)};
                `;case"selected-month":return S`
                    ${Hr("H5","semibold")}
                    color: ${Er.Primary(e)};
                `}}}
`,Jl=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:i,type:o,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:d,onMonthSelect:u})=>{const h=b((()=>xl.generateMonths(dl(e))),[e]),f=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&s,i="end"===r&&n&&e.isBefore(n,"month")&&s;return t||i},p=e=>{const t=e.format("MMMM"),r=(n=e,!xl.isWithinRange(n,l?dl(l):void 0,c?dl(c):void 0,"month"));var n;const a=i.isSame(e,"month")?"selected-month":dl().isSame(e,"month")?"current-month":"default";return{disabledDisplay:r||f(e),interactive:!r||d,month:t,variant:a}};return h.length?t(Zl,{$type:o,children:h.map((e=>{const{disabledDisplay:r,interactive:n,variant:a,month:i}=p(e);return t(Xl,{$variant:a,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||u(e)})(e,!n),children:t(Kl,{weight:"regular",$variant:a,$disabledDisplay:r,children:i})},i)}))}):null},ec=x.div`
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
`,tc=x.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?S`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Er.Shadow.Accent};
                    border: 1px solid ${Er.Accent.Light[1]};
                }
            `:e.$disabledDisplay?S`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return S`
                    background: ${Er.Accent.Light[6](e)};
                `;case"selected-year":return S`
                    background: ${Er.Accent.Light[5](e)};
                    border: 1px solid ${Er.Primary(e)};
                `}}};
`,rc=x(Vr.H5)`
    ${e=>{if(e.$disabledDisplay)return S`
                color: ${Er.Neutral[4]};
            `;switch(e.$variant){case"current-year":return S`
                    color: ${Er.Neutral[3](e)};
                `;case"selected-year":return S`
                    ${Hr("H5","semibold")}
                    color: ${Er.Primary(e)};
                `;case"other-decade":return S`
                    color: ${Er.Neutral[4](e)};
                `}}}
`,nc=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:i,type:o,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:d,onYearSelect:u})=>{const h=b((()=>xl.generateDecadeOfYears(dl(e))),[e]),f=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&s,i="end"===r&&n&&e.isBefore(n,"year")&&s;return t||i},p=e=>{const t=[0,11].includes(h.indexOf(e)),r=e.year(),n=(a=e,!xl.isWithinRange(a,l?dl(l):void 0,c?dl(c):void 0,"year"));var a;const o=t?"other-decade":i.isSame(e,"year")?"selected-year":dl().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||f(e),interactive:!n||d,year:r,variant:o}};return h.length?t(ec,{$type:o,children:h.map((e=>{const{disabledDisplay:r,interactive:n,variant:a,year:i}=p(e);return t(tc,{$variant:a,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||u(e)})(e,!n),children:t(rc,{weight:"regular",$variant:a,$disabledDisplay:r,$interactive:n,children:i})},i)}))}):null},ac=a.forwardRef((({children:n,initialCalendarDate:a,type:l,minDate:c,maxDate:d,currentFocus:u,selectedStartDate:h,selectedEndDate:f,selectWithinRange:p,dynamicHeight:m=!1,allowDisabledSelection:g,onCalendarDateChange:b,withButton:v,doneButtonDisabled:$,onDismiss:w,showNavigationHeader:x=!0,getLeftArrowDate:S,getRightArrowDate:k,isLeftArrowDisabled:D,isRightArrowDisabled:O,getMonthHeaderLabel:_,getYearHeaderLabel:C,...M},F)=>{const[B,E]=i(dl(a)),[A,P]=i(dl(a)),[j,T]=i("default"),N=o(null),I=o(null),L=o();y(F,(()=>({defaultView(){T("default")},resetView(){const e=dl(a);E(e),P(e),T("default")},setCalendarDate(e){const t=e?dl(e):dl();E(t),P(t)}}))),s((()=>{const e=a?dl(a):dl();E(e),P(e)}),[a]),s((()=>{U(A)}),[A]);const R=()=>{"month-options"!==j?(T("month-options"),L.current.focus()):(T("default"),E(A))},H=()=>{"default"!==j?(T("default"),E(A)):T("year-options")},z=()=>{L.current.focus();const e=S?S(B):B.subtract(1,"month");switch(j){case"default":P(e),E(e);break;case"month-options":E((e=>e.subtract(1,"year")));break;case"year-options":E((e=>e.subtract(10,"year")))}},V=()=>{L.current.focus();const e=k?k(B):B.add(1,"month");switch(j){case"default":P(e),E(e);break;case"month-options":E((e=>e.add(1,"year")));break;case"year-options":E((e=>e.add(10,"year")))}},W=e=>{E(e),P(e)},Y=()=>{E(dl(a)),P(dl(a)),"default"===j?q("reset"):T("default")},U=e=>{b&&b(e)},q=e=>{w&&w(e)},Q=()=>{if(!c||g)return!1;const e=dl(c);return"month-options"===j?!xl.isPreviousYearWithinRange(B,e):"year-options"===j?!xl.isPreviousDecadeWithinRange(B,e):D?D(B):!xl.isPreviousMonthWithinRange(B,e)},G=()=>{if(!d||g)return!1;const e=dl(d);return"month-options"===j?!xl.isNextYearWithinRange(B,e):"year-options"===j?!xl.isNextDecadeWithinRange(B,e):O?O(B):!xl.isNextMonthWithinRange(B,e)},Z=()=>{if("year-options"===j){const{beginDecade:e,endDecade:t}=xl.getStartEndDecade(B);return`${e} to ${t}`}return C?C(B):dl(B).format("YYYY")},X=()=>{const n=_?_(B):dl(B).format("MMM");return e(r,{children:[e(Wl,{type:"button",tabIndex:-1,$expanded:"month-options"===j,$visible:"default"===j,id:"month-dropdown",onClick:R,children:[t(Yl,{children:n}),t(Il,{})]}),e(Wl,{type:"button",tabIndex:-1,$expanded:"default"!==j,id:"year-dropdown",onClick:H,children:[t(Yl,{children:Z()}),t(Il,{})]})]})},K=()=>{switch(j){case"month-options":return t(Jl,{type:l,calendarDate:B,currentFocus:u,minDate:c,maxDate:d,selectedStartDate:h,selectedEndDate:f,viewCalendarDate:A,isNewSelection:p,onMonthSelect:W,allowDisabledSelection:g});case"year-options":return t(nc,{type:l,calendarDate:B,currentFocus:u,minDate:c,maxDate:d,selectedStartDate:h,selectedEndDate:f,viewCalendarDate:A,isNewSelection:p,onYearSelect:W,allowDisabledSelection:g});default:return null}};return e(Ll,{ref:L,tabIndex:-1,"data-id":"calendar-container","data-testid":"calendar-container",...M,children:[x&&e(zl,{"data-id":"calendar-header","data-testid":"calendar-header",children:[t(Vl,{children:X()}),e(Ul,{children:[t(ql,{"data-testid":"left-arrow-btn",disabled:Q(),focusHighlight:!1,tabIndex:-1,onClick:z,children:t(Tl,{})}),t(ql,{"data-testid":"right-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:V,children:t(Nl,{})})]})]}),t(Rl,{children:(()=>{const a="function"==typeof n?n({calendarDate:A,currentView:j}):n;return e(r,m?{children:["default"===j&&a,K()]}:{children:[a,t(Hl,{$visible:"default"!==j,children:K()})]})})()}),(()=>{if(!v)return;const r=!!("default"===j)&&$;return e(Ql,{children:[t(Gl,{ref:I,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Y,children:"Cancel"}),t(Gl,{"data-testid":"done-button",ref:N,type:"button",onClick:()=>(e=>{e||(E(A),"default"===j?q("confirmed"):T("default"))})(r),disabled:r,children:"Done"})]})})()]})})),ic=x.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,oc=x.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,sc=x.div`
    grid-column: 1 / -1;
    display: flex;
`,lc=x.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`,cc=x.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return S`
                    left: 0;
                `;case"right":return S`
                    right: 0;
                `}}}
`,dc=x.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`,uc=x(Vr.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:r,$variant:n}=e;if(t&&r)return S`
                ${Hr("H5","semibold")};
                color: ${Er.Accent.Light[2]};
            `;if(t)return S`
                color: ${Er.Neutral[4]};
            `;if(r)return S`
                ${Hr("H5","semibold")};
                color: ${Er.Primary};
            `;switch(n){case"other-month":return S`
                    color: ${Er.Neutral[4]};
                `;case"today":return S`
                    color: ${Er.Neutral[3]};
                `;case"default":return S`
                    color: ${Er.Neutral[1]};
                `}}}
`,hc=x(cc)`
    ${e=>{const{$selected:t}=e;if(t)return S`
                border-top: 1px solid ${Er.Accent.Light[4]};
                border-bottom: 1px solid ${Er.Accent.Light[4]};
                background-color: ${Er.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:r}=e;return t?S`
                border-top: 1px dashed ${Er.Accent.Light[4]};
                border-bottom: 1px dashed ${Er.Accent.Light[4]};
                background-color: ${Er.Accent.Light[6]};
            `:r?S`
                background-color: ${Er.Accent.Light[4]};
            `:void 0}}
`,fc=x(dc)`
    ${e=>{const{$hovered:t,$selected:r}=e;return r?S`
                background: ${Er.Accent.Light[5]};
                border: 1px solid ${Er.Primary};
            `:t?S`
                box-shadow: 0px 0px 4px 1px ${Er.Shadow.Accent};
                border: 1px solid ${Er.Accent.Light[1]};
                background-color: ${Er.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:r}=e;return t?S`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${Er.Shadow.Accent};
                    border: 1px solid ${Er.Accent.Light[1]};
                    background-color: ${Er.Neutral[8]};
                }
            `:r?S`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:r,$variant:n}=e;return r?S`
                border: 1px solid ${Er.Accent.Light[1]};
                background: ${Er.Accent.Light[4]};

                :hover {
                    background: ${Er.Accent.Light[4]};
                }
            `:t?S`
                color: ${Er.Neutral[4]};
            `:"today"===n?S`
                    background: ${Er.Accent.Light[5]};
                `:void 0}}
`,pc=x(cc)`
    ${e=>{const{$hovered:t,$selected:r}=e;return t?S`
                border-top: 1px dashed ${Er.Accent.Light[4]};
                border-bottom: 1px dashed ${Er.Accent.Light[4]};
                background-color: ${Er.Accent.Light[6]};
            `:r?S`
                border-top: 1px solid ${Er.Primary};
                border-bottom: 1px solid ${Er.Primary};
                background-color: ${Er.Accent.Light[5]};
            `:void 0}}

    ${e=>{if(e.$overlap)return S`
                border-top: 1px solid ${Er.Primary};
                border-bottom: 1px solid ${Er.Primary};
                background-color: ${Er.Neutral[8]};
                box-shadow: 4px 0px 4px 0px ${Er.Shadow.Accent};
            `}}
`,mc=x.div`
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
                border: 1px dashed ${Er.Accent.Light[4]};

                ::before {
                    background-color: ${Er.Accent.Light[6]};
                }
            `}}

    ${e=>{if(e.$selected)return S`
                border: 1px solid ${Er.Primary};

                ::before {
                    background-color: ${Er.Accent.Light[5]};
                }
            `}}

    ${e=>{if(e.$overlap)return S`
                ::before {
                    background-color: ${Er.Neutral[8]};
                }
            `}}

    ${e=>e.$overlap&&"left"===e.$position?S`
                box-shadow: -1px 0px 4px 0px ${Er.Shadow.Accent};
            `:e.$overlap&&"right"===e.$position?S`
                box-shadow: 1px 0px 4px 0px ${Er.Shadow.Accent};
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
`,gc=x(dc)`
    ${e=>{const{$hovered:t,$selected:r,$position:n}=e;if(r){if("left"===n)return S`
                    background: ${Er.Accent.Light[5]};
                `;if("right"===n)return S`
                    background: ${Er.Accent.Light[5]};
                `}if(t)return S`
                background-color: ${Er.Accent.Light[6]};
            `}}

    ${e=>{const{$overlap:t,$position:r}=e;if(t){if("left"===r)return S`
                    background-color: ${Er.Neutral[8]};
                `;if("right"===r)return S`
                    background-color: ${Er.Neutral[8]};
                `}}}

    ${e=>{const{$interactive:t,$disabledDisplay:r}=e;return t?S`
                cursor: pointer;
            `:r?S`
                cursor: not-allowed;
            `:void 0}}
    
    ${e=>{const{$disabledDisplay:t,$overlap:r,$selected:n,$variant:a}=e;return t?S`
                color: ${Er.Neutral[4]};
            `:"today"===a?r?S`
                    background: ${Er.Neutral[8]};
                    height: 2.35rem;
                `:n?S`
                    height: 2.35rem;
                `:S`
                    background: ${Er.Accent.Light[5]};
                `:void 0}}
`,bc=x(uc)`
    ${e=>{if("default"===e.$view)return S`
                z-index: 1;
            `}}
`,yc=({type:n,dayDate:a,currentView:i,variant:o,styleLeftProps:s,styleRightProps:l,styleCircleProps:c,styleLabelProps:d,styleOverflowCirleProps:u,onDayClick:h,onHoverCell:f})=>t(r,{children:(()=>{const r=a.format("YYYY-MM-DD");switch(n){case"regular":return e(lc,{children:[t(hc,{$position:"left",...s}),t(hc,{$position:"right",...l}),t(fc,{$variant:o,onClick:()=>h(a,!c.$interactive),onMouseEnter:()=>f(r,!c.$interactive),...c,children:t(uc,{weight:d.$selected?"semibold":"regular",$variant:o,...d,children:a.format("D")})})]});case"week":return e(lc,{children:[t(pc,{$position:"left",...s}),t(pc,{$position:"right",...l}),t(gc,{$variant:o,onClick:()=>h(a,!c.$interactive),onMouseEnter:()=>f(r,!c.$interactive),...c,...u,children:t(bc,{weight:d.$selected?"semibold":"regular",$variant:o,$view:i,...d,children:a.format("D")})}),t(mc,{...c,...u})]})}})()}),vc=[1,3,5,7,8,10,12],$c=[4,6,9,11];var wc,xc,Sc;function kc({ref:e,formatter:t}){return()=>{const r=e.current,n=r.value,a=t(n),i=n.substring(0,r.selectionEnd),o=t(i),s=i.length-o.length,l=Math.max(0,r.selectionEnd-s);return{nextValue:a,updateCaretPosition:()=>{r.value=a,r.setSelectionRange(l,l)}}}}!function(e){e.clampDay=(t,r,n)=>{const a=parseInt(t),i=parseInt(r),o=parseInt(n);return 0==a?"1":vc.includes(i)?Math.min(a,31).toString():$c.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=dl(e,r);return dl(t,r).diff(n,"minute")}}(wc||(wc={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(xc||(xc={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,a=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/a));const o=n+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(Sc||(Sc={}));const Dc=e=>{const[t,r]=i(e),n=o(e);return[t,m((e=>{n.current=e,r(e)}),[]),n]};var Oc;dl.extend(yl),function(e){e.generateStyleProps=(e,t,r,n,a,i,o,s,l,c,d)=>{const u=e.format("YYYY-MM-DD"),h={},f={},p={},m={},g=_c(e,l,o,s),b=t&&r&&t===r;return!d&&["reset-start","reset-end"].includes(a)&&[t,r].includes(u)&&(p.$overlap=!0),(g||Cc(e,i,t,r,d))&&(p.$disabledDisplay=!0,m.$disabledDisplay=!0),p.$interactive=!g||c,[t,r].includes(u)&&(p.$selected=!0,m.$selected=!0),t&&r&&!b&&e.isBetween(t,r,"day","[]")&&(m.$selected=!0,e.isSame(t)?f.$selected=!0:e.isSame(r)?h.$selected=!0:(h.$selected=!0,f.$selected=!0)),"hover-start"===a&&e.isBetween(r,n,"day","[]")&&(m.$selected=!0,r===u?h.$hovered=!0:n===u?(f.$hovered=!0,p.$hovered=!0):(h.$hovered=!0,f.$hovered=!0)),"hover-end"===a&&e.isBetween(t,n,"day","[]")&&(m.$selected=!0,t===u?f.$hovered=!0:n===u?(h.$hovered=!0,p.$hovered=!0):(h.$hovered=!0,f.$hovered=!0)),"overlap-start"===a&&e.isBetween(r,n,"day","[]")&&(n===u?(f.$overlap=!0,p.$overlap=!0):r===u?(h.$overlap=!0,p.$overlap=!0,p.$hovered=!0):(h.$overlap=!0,f.$overlap=!0)),"overlap-end"===a&&e.isBetween(t,n,"day","[]")&&(n===u?(h.$overlap=!0,p.$overlap=!0):t===u?(f.$overlap=!0,p.$overlap=!0,p.$hovered=!0):(h.$overlap=!0,f.$overlap=!0)),"full-overlap-start"===a&&e.isBetween(r,n,"day","[]")&&(t===u&&b?(h.$hovered=!0,p.$overlap=!0):t===u?(h.$hovered=!0,f.$overlap=!0,p.$overlap=!0):r===u?(h.$overlap=!0,p.$overlap=!0):e.isSame(n)?(f.$hovered=!0,m.$selected=!0,p.$hovered=!0):e.isBetween(t,n,"day","()")&&(h.$hovered=!0,f.$hovered=!0,m.$selected=!0)),"full-overlap-end"===a&&e.isBetween(t,n,"day","[]")&&(r===u&&b?(f.$hovered=!0,p.$overlap=!0):r===u?(h.$overlap=!0,f.$hovered=!0,p.$overlap=!0):t===u?(f.$overlap=!0,p.$overlap=!0):e.isSame(n)?(h.$hovered=!0,m.$selected=!0,p.$hovered=!0):e.isBetween(r,n,"day","()")&&(h.$hovered=!0,f.$hovered=!0,m.$selected=!0)),["full-overlap-end","full-overlap-start"].includes(a)&&e.isBetween(t,r,"day","()")&&(h.$overlap=!0,f.$overlap=!0),{styleLeftProps:h,styleRightProps:f,styleCircleProps:p,styleLabelProps:m}},e.getStylePropsForWeekSelection=(e,t,r,n,a,i,o,s)=>{const l={},c={},d={},u={},h={},f=_c(e,o,a,i);if(f&&(d.$disabledDisplay=!0,u.$disabledDisplay=!0),d.$interactive=!f||s,t){const{firstDayOfWeek:r,lastDayOfWeek:n}=Mc(t);e.isBetween(r,n,"day","[]")&&(u.$selected=!0,e.isSame(r)?(c.$selected=!0,d.$selected=!0,h.$position="left"):e.isSame(n)?(l.$selected=!0,d.$selected=!0,h.$position="right"):(l.$selected=!0,d.$selected=!0,c.$selected=!0))}if(n){const{firstDayOfWeek:t,lastDayOfWeek:r}=Mc(n);e.isBetween(t,r,"day","[]")&&(u.$selected=!0,e.isSame(t)?(c.$hovered=!0,d.$hovered=!0,h.$position="left"):e.isSame(r)?(l.$hovered=!0,d.$hovered=!0,h.$position="right"):(l.$hovered=!0,c.$hovered=!0))}if(t&&r&&n&&e.isBetween(t,r,"day","[]")&&dl(n).isBetween(t,r,"day","[]")){const{firstDayOfWeek:r,lastDayOfWeek:n}=Mc(t);e.isBetween(r,n,"day","[]")&&(u.$selected=!0,e.isSame(r)?(c.$overlap=!0,d.$overlap=!0,h.$position="left"):e.isSame(n)?(l.$overlap=!0,d.$overlap=!0,h.$position="right"):(l.$overlap=!0,d.$overlap=!0,c.$overlap=!0))}return{styleLeftProps:l,styleRightProps:c,styleCircleProps:d,styleLabelProps:u,styleOverflowCirleProps:h}}}(Oc||(Oc={}));const _c=(e,t,r,n)=>{const a=xl.isWithinRange(e,r?dl(r):void 0,n?dl(n):void 0),i=t&&t.includes(e.format("YYYY-MM-DD"));return!a||i},Cc=(e,t,r,n,a)=>{const i="start"===t&&n&&e.isAfter(n)&&a,o="end"===t&&r&&e.isBefore(r)&&a;return i||o},Mc=e=>({firstDayOfWeek:dl(e).startOf("week").format("YYYY-MM-DD"),lastDayOfWeek:dl(e).endOf("week").format("YYYY-MM-DD")});dl.extend(yl);const Fc=({calendarDate:r,currentFocus:n,disabledDates:a,selectedStartDate:o,selectedEndDate:s,onSelect:l,onHover:c,isNewSelection:d,minDate:u,maxDate:h,variant:f,allowDisabledSelection:p})=>{const m=b((()=>xl.generateDays(r)),[r]),[g,y]=i(""),v=(e,t)=>{t&&!p||l(e)},$=(e,t)=>{t&&!p||(y(e),c(e))},w=()=>{y(""),c("")},x=(()=>{if(!g||"single"===f)return null;const e=dl(g);if(o&&s)if(e.isBefore(o)){if("start"===n)return"full-overlap-start";if("end"===n)return"reset-end"}else if(e.isAfter(s)){if("end"===n)return"full-overlap-end";if("start"===n)return"reset-start"}else if(e.isBetween(o,s,"day","[]")&&![o,s].includes(g)){if("start"===n)return"overlap-start";if("end"===n)return"overlap-end"}if(o&&!s){if(e.isAfter(o)&&"end"===n)return"hover-end"}else if(!o&&s&&e.isBefore(s)&&"start"===n)return"hover-start";return null})();return e(ic,{"data-testid":"calendar-content",children:[m[0].map(((e,r)=>t(oc,{children:t(Vr.H6,{weight:"semibold",children:dl(e).format("ddd")})},`week-day-${r}`))),m.map(((e,i)=>t(sc,{onMouseLeave:w,children:e.map(((e,i)=>{const{variant:l}=(e=>({variant:r.month()!==e.month()?"other-month":dl().isSame(e,"day")?"today":"default"}))(e),{styleLeftProps:c,styleRightProps:f,styleCircleProps:m,styleLabelProps:b}=Oc.generateStyleProps(e,o,s,g,x,n,u,h,a,p,d);return t(yc,{type:"regular",dayDate:e,variant:l,styleLeftProps:c,styleRightProps:f,styleCircleProps:m,styleLabelProps:b,onDayClick:v,onHoverCell:$},`day-${i}`)}))},i)))]})},Bc=({calendarDate:r,disabledDates:n,selectedStartDate:a,selectedEndDate:o,onSelect:s,onHover:l,minDate:c,maxDate:d,currentView:u,allowDisabledSelection:h})=>{const f=b((()=>xl.generateDays(r)),[r]),[p,m]=i(""),g=(e,t)=>{if(t&&!h)return;const r=e.startOf("week");s(r),e&&!dl(e).isSame(r,"month")&&m("")},y=(e,t)=>{t&&!h||(m(e),l(e))},v=()=>{m(""),l("")};return e(ic,{"data-testid":"calendar-content",children:[f[0].map(((e,r)=>t(oc,{children:t(Vr.H6,{weight:"semibold",children:dl(e).format("ddd")})},`week-day-${r}`))),f.map(((e,i)=>t(sc,{onMouseLeave:v,children:e.map(((e,i)=>{const{variant:s}=(e=>({variant:r.month()!==e.month()?"other-month":dl().isSame(e,"day")?"today":"default"}))(e),{styleLeftProps:l,styleRightProps:f,styleCircleProps:m,styleLabelProps:b,styleOverflowCirleProps:v}=Oc.getStylePropsForWeekSelection(e,a,o,p,c,d,n,h);return t(yc,{type:"week",dayDate:e,variant:s,currentView:u,styleLeftProps:l,styleRightProps:f,styleCircleProps:m,styleLabelProps:b,styleOverflowCirleProps:v,onDayClick:g,onHoverCell:y},`day-${i}`)}))},i)))]})},Ec=x.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${Er.Neutral[8]};

    ${e=>{if("input"===e.$type)return S`
                border: 1px solid ${Er.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,Ac=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:a,onDismiss:i,value:s,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:h,maxDate:f,allowDisabledSelection:p,type:m="standalone",selectWithinRange:g=!0,initialCalendarDate:b},v)=>{const $=o(),w=o(void 0);y(v,(()=>({reset(){$.current.resetView()},setCalendarDate(e){$.current.setCalendarDate(e)}})));const x=e=>{const t=e.format("YYYY-MM-DD");$.current.setCalendarDate(t),k(t)},S=e=>{D(e)},k=e=>{n&&n(e)},D=e=>{a&&a(e)},O=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(Ec,{$type:m,children:t(ac,{type:m,ref:$,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:i,minDate:h,maxDate:f,selectWithinRange:g,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:p,onCalendarDateChange:e=>{w.current&&w.current.isSame(e,"month")||O(e),w.current=e},initialCalendarDate:b,children:({calendarDate:r,currentView:n})=>((r,n)=>{switch(u){case"single":case"range":default:return t(Fc,{calendarDate:r,currentFocus:c,disabledDates:e,selectedStartDate:s,selectedEndDate:l,variant:u,minDate:h,maxDate:f,isNewSelection:g,allowDisabledSelection:p,onSelect:x,onHover:S});case"week":return t(Bc,{calendarDate:r,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:f,currentView:n,allowDisabledSelection:p,onSelect:x,onHover:S})}})(r,n)})})})),Pc=a.forwardRef(((e,r)=>{const{isOpen:n,...a}=e,i=o(),l=$a(),c=Is({height:n?l.height:0});return s((()=>{n&&i.current.reset()}),[n]),y(r,(()=>i.current)),t(ll,{style:c,children:t("div",{ref:l.ref,inert:n?void 0:"",children:t(Ac,{ref:i,...a})})})})),jc={collections:{base:{InputBoxShadow:S`
        inset 0 0 6px 1px ${Er.Shadow.Accent}
    `,InputErrorBoxShadow:S`
        inset 0 0 6px 1px ${Er.Shadow.Red}
    `,ElevationBoxShadow:S`
      0px 2px 8px ${Er.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:S`
        inset 0 0 6px 1px ${Er.Shadow.Accent}
    `,InputErrorBoxShadow:S`
        inset 0 0 6px 1px ${Er.Shadow.Red}
    `,ElevationBoxShadow:S`
      0px 2px 8px ${Er.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Tc=e=>t=>{const r=t.theme,n=Cr(jc,r[Mr.designTokenScheme]);return r.options?.designToken?_r(n,e,r.options.designToken):_r(n,e)},Nc=Tc("InputBoxShadow"),Ic=Tc("InputErrorBoxShadow"),Lc=(Tc("ElevationBoxShadow"),Tc("Table.Header"),Tc("Table.Cell.Primary"),Tc("Table.Cell.Secondary"),Tc("Table.Cell.Selected"),Tc("Table.Cell.Hover"),x.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Er.Neutral[5]};
    border-radius: 4px;
    background: ${Er.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Er.Accent.Light[1]};
        box-shadow: ${Nc};
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
                background: ${Er.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Er.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?S`
                border: 1px solid ${Er.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Er.Validation.Red.Border};
                    box-shadow: ${Ic};
                }
            `:void 0}
`),Rc=x.input`
    ${Hr("Body","regular")}
    color: ${Er.Neutral[1]};
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
        color: ${Er.Neutral[3]};
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
`,Hc=x.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,zc=x.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return S`
                ${Vc}, ${qc} {
                    color: ${Er.Neutral[4]};
                }
            `}}
`,Vc=x(Rc)`
    background: transparent;
    text-align: center;
`,Wc=x(Vc)`
    width: 2rem;
    margin-right: 0.25rem;
`,Yc=x(Vc)`
    width: 2.5rem;
`,Uc=x(Vc)`
    width: 3rem;
    margin-left: 0.25rem;
`,qc=x(Vr.Body)`
    ${e=>{if(e.$inactive)return S`
                color: ${Er.Neutral[3](e)};
            `}}
`,Qc=x.div`
    ${Hr("Body","regular")}
    background-color: ${Er.Neutral[8]};
    color: ${Er.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?S`
                background-color: ${Er.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$hide?S`
                display: none;
            `:void 0}
`;dl.extend(pl);const Gc=a.forwardRef((({disabled:r,readOnly:n,names:a,value:l,focused:c,hoverValue:d,placeholder:u,label:h,onChange:f,onFocus:p,onBlur:m},g)=>{const[b,v,$]=Dc(""),[w,x,S]=Dc(""),[k,D,O]=Dc(""),[_,C]=i("none"),[M,F]=i(!1),B=o(null),E=o(null),A=o(null),P=o(null),[j,T,N]=z(d);s((()=>{const[e="",t="",r=""]=z(l);v(e),x(t),D(r)}),[l]),s((()=>{c||C("none"),c&&(F(!0),B.current.contains(document.activeElement)||E.current.focus())}),[c]),y(g,(()=>({ref:B,resetPlaceholder(){F(!1)},resetInput(){const[e="",t="",r=""]=z(l);v(e),x(t),D(r)}})),[l]);const I=e=>{e.target.select();const t=e.target.name;C(t)},L=e=>{const[t,r,n]=a,i={[t]:$.current,[r]:S.current,[n]:O.current},o=e.target.name,s=i[o],l=o!==n?Sc.padValue(s,!0):s;switch(o){case t:i[t]=l,v(l);break;case r:i[r]=l,x(l)}const c=`${i[n]}-${i[r]}-${i[t]}`,d=dl(c,"YYYY-MM-DD",!0).isValid(),u=!i[t]&&!i[r]&&!i[n];d&&s!==l&&f(c),B.current.contains(e.relatedTarget)||(C("none"),m?.(u||d))},R=e=>{if(d)return;const t=e.target.name,r=e.target.value.replace(/[^0-9]/g,""),n={day:b,month:w,year:k};switch(t){case a[0]:n.day=r,v(r),2===r.length&&A.current.focus();break;case a[1]:n.month=r,x(r),2===r.length&&P.current.focus();break;case a[2]:n.year=r,D(r)}if(!n.day&&!n.month&&!n.year)return void f("");const i=`${n.year}-${n.month}-${n.day}`;dl(i,"YYYY-MM-DD",!0).isValid()&&f(i)},H=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(_===a[1]&&0===w.length&&E.current.focus(),_===a[2]&&0===k.length&&A.current.focus())};function z(e){if(e){const t=dl(e,"YYYY-MM-DD");return[Sc.padValue(t.date().toString()),Sc.padValue((t.month()+1).toString()),t.year().toString()]}return[void 0,void 0,void 0]}return e(Hc,{role:"group","aria-label":h,onClick:()=>{r||n||(F(!0),B.current.contains(document.activeElement)||E.current.focus())},onFocus:()=>{r||(F(!0),c||p())},children:[e(zc,{ref:B,$hover:!!d,children:[t(Wc,{ref:E,name:a[0],maxLength:2,value:j??b,onFocus:I,onBlur:L,onChange:R,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":`${a[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:_!==a[0]||n?"DD":""}),t(qc,{$inactive:0===b.length,children:"/"}),t(Yc,{ref:A,name:a[1],maxLength:2,value:T??w,onFocus:I,onBlur:L,onChange:R,onKeyDown:H,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":`${a[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:_!==a[1]||n?"MM":""}),t(qc,{$inactive:0===w.length,children:"/"}),t(Uc,{ref:P,name:a[2],maxLength:4,value:N??k,onFocus:I,onBlur:L,onChange:R,onKeyDown:H,type:"text",inputMode:"numeric",pattern:"[0-9]{4}","data-testid":`${a[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:_!==a[2]||n?"YYYY":""})]}),(()=>{if(!l&&!n&&u)return t(Qc,{$hide:M,$disabled:r,children:u})})()]})}));var Zc;dl.extend(yl),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:a}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!dl(e).isBefore(n,"day"))||!(!a||!dl(e).isAfter(a,"day")))}}(Zc||(Zc={}));const Xc=x(Lc)`
    height: 3rem;
`,Kc=({minDate:r,maxDate:n,disabled:a,disabledDates:l,error:c,value:d,onChange:u,onFocus:h,onBlur:f,onYearMonthDisplayChange:p,withButton:m=!0,readOnly:g,id:b,allowDisabledSelection:y,...v})=>{const[$,w]=i(d),[x,S]=i(d),[k,D]=i(void 0),[O,_]=i(!1),C=o(null),M=o(),F=o(),B=V.exports.useMediaQuery({maxWidth:W.mobileL}),E=m||B;s((()=>{w(d),S(d)}),[d]);const A=e=>{!y&&Zc.isDateDisabled(e,{disabledDates:l,minDate:r,maxDate:n})||(S(e),E||(P(e),w(e),e&&_(!1)))},P=e=>{u&&u(e)},j=()=>{f&&f()};return e(Xc,{ref:C,$disabled:a,$readOnly:g,$error:c,id:b,"data-testid":v["data-testid"],tabIndex:-1,onBlur:e=>{C&&!C.current.contains(e.relatedTarget)&&(F.current.resetInput(),S($),_(!1),j())},onKeyDown:function(e){"Escape"===e.code&&(F.current.resetInput(),S($),_(!1))},...v,children:[t(Gc,{ref:F,disabled:a,onChange:A,onFocus:()=>{g||(_(!0),h&&h())},readOnly:g,focused:O,names:["start-day","start-month","start-year"],value:x,hoverValue:k}),t(Pc,{ref:M,type:"input",variant:"single",initialCalendarDate:x,isOpen:O,withButton:E,value:x,disabledDates:l,minDate:r,maxDate:n,allowDisabledSelection:y,onHover:e=>{D(e)},onSelect:A,onDismiss:e=>{switch(e){case"reset":S($);break;case"confirmed":w(x),P(x)}_(!1)},onYearMonthDisplayChange:p})]})},Jc=e=>`@media screen and (max-width: ${e}px)`,ed=x.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$minWidthBeforeWrap)return S`
                ${Jc(e.$minWidthBeforeWrap)} {
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
`,td=x.div`
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
`,rd=x(E)`
    color: ${Er.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,nd=x.div`
    position: absolute;
    background: ${e=>e.$error?Er.Validation.Red.Border(e):Er.Primary(e)};
    height: 0.125rem;
    // half - half padding - half icon width
    width: calc(50% - 0.5rem - (1.125rem / 2));
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return S`
                    opacity: 1;
                `;case"end":return S`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return S`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$minWidthBeforeWrap)return S`
                ${Jc(e.$minWidthBeforeWrap)} {
                    display: none;
                }
            `}}
`,ad=({children:r,currentActive:n,error:a,className:i,minWidthBeforeWrap:o})=>{const[s,l]=r;return e(ed,{className:i,$minWidthBeforeWrap:o,children:[t(td,{"data-id":"range-container-elem1-container",children:s}),t(rd,{}),t(td,{"data-id":"range-container-elem2-container",children:l}),t(nd,{"data-id":"range-container-indicator",$position:n,$error:a,$minWidthBeforeWrap:o})]})},id=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},od=x(Lc)`
    @media screen and (max-width: ${374}px) {
        padding: 0.75rem 1rem;
    }
`,sd=x.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    @media screen and (max-width: ${374}px) {
        height: fit-content;
    }
`,ld={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1},cd=({minDate:r,maxDate:n,disabled:a,disabledDates:l,error:c,value:d,valueEnd:u,onChange:h,onFocus:f,onBlur:p,onYearMonthDisplayChange:m,withButton:g=!0,variant:b="range",readOnly:y,id:$,allowDisabledSelection:w,...x})=>{const[S,k]=i(),[D,O]=i(void 0),[_,C]=i(!1),M="week"===b,[{selectedStart:F,selectedEnd:B,currentFocus:E,calendarOpen:A,isStartDirty:P,isEndDirty:j},T]=(({initialState:e,reducers:t,name:r,debug:n})=>{const[a,i]=v(((e,r)=>t[r.type]?t[r.type](e,r.payload):e),e);return[a,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{n&&id(r,e,t),i({type:e,payload:t})}])))]})({name:"date-range-input",initialState:ld,reducers:{blur:e=>({...e,selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>({...e,selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>({...e,selectedEnd:t,isEndDirty:!0}),reselectStart:e=>({...e,selectedStart:"",currentFocus:"start"}),reselectEnd:e=>({...e,selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>({...e,currentFocus:M?"none":t,calendarOpen:!y}),cancel:e=>({...e,selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>({...e,selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>({...e,selectedStart:e.initialStart}),resetEnd:e=>({...e,selectedEnd:e.initialEnd}),resetRange:(e,t)=>({...e,initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),N=o(!1),I=o(),L=o(),R=o(),H=o(),z=V.exports.useMediaQuery({maxWidth:rn.mobileL}),W=g||z;s((()=>{T.resetRange({start:d,end:u})}),[d,u]),s((()=>{"start"===E?k(F):"end"===E&&k(B)}),[E]);const Y=e=>{if(G(e))return void(N.current=!0);if(T.changeStart(e),L.current.setCalendarDate(e),N.current=!1,!e)return void(W||B||!j||(T.resetRange({start:"",end:""}),h?.("","")));if(!B)return void T.focus("end");if(dl(e).isAfter(B,"day"))T.reselectEnd();else{if(j)return W?void 0:(T.done({start:e,end:B}),void h?.(e,B));T.focus("end")}},U=e=>{if(G(e))return void(N.current=!0);if(T.changeEnd(e),L.current.setCalendarDate(e),!e)return void(W||F||!P||(T.resetRange({start:"",end:""}),h?.("","")));if(!F)return void T.focus("start");if(dl(e).isBefore(F,"day"))T.reselectStart();else{if(P)return W?void 0:(T.done({start:F,end:e}),void h?.(F,e));T.focus("start")}},q=e=>()=>{y||(T.focus(e),Q(),f&&f())},Q=()=>{if(M){const e=dl(F).startOf("week").format("YYYY-MM-DD");C(!0),k(e)}},G=e=>!w&&e&&Zc.isDateDisabled(e,{disabledDates:l,minDate:r,maxDate:n}),Z=e=>{let t={start:void 0,end:void 0};switch(b){case"range":t={start:"start"===E?D:void 0,end:"end"===E?D:void 0};break;case"week":if(!D)return;t={start:dl(D).startOf("week").format("YYYY-MM-DD"),end:dl(D).endOf("week").format("YYYY-MM-DD")}}return t[e]};return e(od,{ref:I,$disabled:a,$readOnly:y,$error:c,id:$,"data-testid":x["data-testid"],onBlur:e=>{I.current.contains(e.relatedTarget)||(T.blur(),C(!1),R.current.resetPlaceholder(),H.current.resetPlaceholder(),p?.())},onKeyDown:e=>{"Escape"===e.code&&T.blur(),"Enter"!==e.code||W||(F&&B?(T.done({start:F,end:B}),h?.(F,B)):T.blur())},...x,children:[e(ad,{currentActive:E,minWidthBeforeWrap:374,error:c,children:[t(sd,{children:t(Gc,{ref:R,placeholder:"From",names:["start-day","start-month","start-year"],value:F,disabled:a,readOnly:_||y,focused:"start"===E,hoverValue:Z("start"),onChange:Y,onFocus:q("start"),onBlur:e=>{e&&!N.current||(T.resetStart(),R.current.resetInput())}})}),t(sd,{children:t(Gc,{ref:H,placeholder:"To",names:["end-day","end-month","end-year"],value:B,disabled:a,readOnly:_||y,focused:"end"===E,hoverValue:Z("end"),onChange:U,onFocus:q("end"),onBlur:e=>{e&&!N.current||(T.resetEnd(),H.current.resetInput())}})})]}),t(Pc,{ref:L,type:"input",variant:b,initialCalendarDate:S,isOpen:A,withButton:W,value:F,endValue:B,selectWithinRange:P||j,currentFocus:E,disabledDates:l,minDate:r,maxDate:n,allowDisabledSelection:w,onSelect:e=>{"start"===E?Y(e):"end"===E&&U(e),M&&(e=>{const t=dl(e).startOf("week").format("YYYY-MM-DD"),r=dl(e).endOf("week").format("YYYY-MM-DD");if(T.changeStart(t),T.changeEnd(r),N.current=!1,!W)T.done({start:t,end:r}),h?.(t,r)})(e)},onDismiss:e=>{switch(e){case"reset":T.cancel();break;case"confirmed":T.done({start:F,end:B}),h?.(F,B)}},onHover:e=>{O(e)},onYearMonthDisplayChange:m})]})},dd=x.input`
    ${Hr("Body","regular")}
    color: ${Er.Neutral[1]};

    // overwrite default styles
    background: transparent;
    border: none;
    height: calc(3rem - 2px); // exclude top and bottom borders
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
        color: ${Er.Neutral[3]};
    }

    ${e=>"number"===e.type?S`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?S`
                cursor: not-allowed;
            `:void 0}
`,ud=x.button`
    position: relative;
    height: auto;
    padding: 0 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Er.Neutral[3]};
    background-color: transparent;
    border: none;
`,hd=x(C)`
    height: 1.25rem;
    width: 1.25rem;
`,fd=a.forwardRef((({value:r,spacing:n,type:a,error:i,disabled:s,readOnly:l,onChange:c,onClear:d,allowClear:u=!1,className:h,...f},p)=>{const m=o();y(p,(()=>m.current),[]);const g=kc({ref:m,formatter:e=>Sc.transformWithSpaces(e,n)}),b=()=>"tel"===a&&n,v=e=>{const{nextValue:t,updateCaretPosition:r}=g(),n=t.replace(/\s/g,"");e.target.value=n,c(e),r()},$=r?(e=>e?b()?Sc.transformWithSpaces(e,n):e:"")(r):r;return e(Lc,{$disabled:s,$error:i,$readOnly:l,className:h,children:[t(dd,{"data-testid":"input",ref:m,disabled:s,value:$,onChange:e=>{c&&(b()?v(e):c(e))},type:a,readOnly:l,...f}),u&&!s&&!l&&!!r&&t(ud,{onClick:()=>{d&&d(),m&&m.current&&m.current.focus()},type:"button",children:t(hd,{"aria-hidden":!0})})]})})),pd=a.forwardRef(((e,r)=>{const{label:n,errorMessage:a,id:i="form-field","data-error-testid":o,"data-testid":s,...l}=e;return t(Dn,{id:i,label:n,errorMessage:a,disabled:l.disabled,"data-error-testid":o,children:t(fd,{id:`${i}-base`,"data-testid":s||i,ref:r,error:!!a,...l})})})),md=x.div`
    display: flex;
    position: relative;
    border: 1px solid ${Er.Neutral[5]};
    border-radius: 4px;
    background: ${Er.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Er.Accent.Light[1]};
        box-shadow: ${Nc};
    }

    ${e=>e.$readOnly?S`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?S`
                background: ${Er.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Er.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?S`
                border: 1px solid ${Er.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Er.Validation.Red.Border(e)};
                    box-shadow: ${Ic};
                }
            `:void 0}
`,gd=x(fd)`
    // overwrite default styles
    &&& {
        background: transparent;
        border: none;
        padding: 0;

        :focus-within {
            outline: none;
            border: none;
            box-shadow: none;
        }
    }
`,bd=x.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Hr("Body","regular")}
    color: ${Er.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${Er.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return S`
                color: ${Er.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${Er.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?S`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:S`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`;var yd=It;var vd=It,$d=Lt,wd=tr;var xd=It,Sd=function(){this.__data__=new yd,this.size=0},kd=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Dd=function(e){return this.__data__.get(e)},Od=function(e){return this.__data__.has(e)},_d=function(e,t){var r=this.__data__;if(r instanceof vd){var n=r.__data__;if(!$d||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new wd(n)}return r.set(e,t),this.size=r.size,this};function Cd(e){var t=this.__data__=new xd(e);this.size=t.size}Cd.prototype.clear=Sd,Cd.prototype.delete=kd,Cd.prototype.get=Dd,Cd.prototype.has=Od,Cd.prototype.set=_d;var Md=Cd;var Fd=tr,Bd=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Ed=function(e){return this.__data__.has(e)};function Ad(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Fd;++t<r;)this.add(e[t])}Ad.prototype.add=Ad.prototype.push=Bd,Ad.prototype.has=Ed;var Pd=Ad,jd=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Td=function(e,t){return e.has(t)};var Nd=function(e,t,r,n,a,i){var o=1&r,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=i.get(e),d=i.get(t);if(c&&d)return c==t&&d==e;var u=-1,h=!0,f=2&r?new Pd:void 0;for(i.set(e,t),i.set(t,e);++u<s;){var p=e[u],m=t[u];if(n)var g=o?n(m,p,u,t,e,i):n(p,m,u,e,t,i);if(void 0!==g){if(g)continue;h=!1;break}if(f){if(!jd(t,(function(e,t){if(!Td(f,t)&&(p===e||a(p,e,r,n,i)))return f.push(t)}))){h=!1;break}}else if(p!==m&&!a(p,m,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var Id=G.Uint8Array,Ld=kt,Rd=Nd,Hd=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},zd=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Vd=re?re.prototype:void 0,Wd=Vd?Vd.valueOf:void 0;var Yd=function(e,t,r,n,a,i,o){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new Id(e),new Id(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ld(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Hd;case"[object Set]":var l=1&n;if(s||(s=zd),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;n|=2,o.set(e,t);var d=Rd(s(e),s(t),n,a,i,o);return o.delete(e),d;case"[object Symbol]":if(Wd)return Wd.call(e)==Wd.call(t)}return!1};var Ud=function(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e},qd=Ee;var Qd=function(e,t,r){var n=t(e);return qd(e)?n:Ud(n,r(e))};var Gd=function(e,t){for(var r=-1,n=null==e?0:e.length,a=0,i=[];++r<n;){var o=e[r];t(o,r,e)&&(i[a++]=o)}return i},Zd=function(){return[]},Xd=Object.prototype.propertyIsEnumerable,Kd=Object.getOwnPropertySymbols,Jd=Kd?function(e){return null==e?[]:(e=Object(e),Gd(Kd(e),(function(t){return Xd.call(e,t)})))}:Zd;var eu=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},tu=fe,ru=pe;var nu=function(e){return ru(e)&&"[object Arguments]"==tu(e)},au=pe,iu=Object.prototype,ou=iu.hasOwnProperty,su=iu.propertyIsEnumerable,lu=nu(function(){return arguments}())?nu:function(e){return au(e)&&ou.call(e,"callee")&&!su.call(e,"callee")},cu={exports:{}};var du=function(){return!1};!function(e,t){var r=G,n=du,a=t&&!t.nodeType&&t,i=a&&e&&!e.nodeType&&e,o=i&&i.exports===a?r.Buffer:void 0,s=(o?o.isBuffer:void 0)||n;e.exports=s}(cu,cu.exports);var uu=/^(?:0|[1-9]\d*)$/;var hu=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&uu.test(e))&&e>-1&&e%1==0&&e<t};var fu=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},pu=fe,mu=fu,gu=pe,bu={};bu["[object Float32Array]"]=bu["[object Float64Array]"]=bu["[object Int8Array]"]=bu["[object Int16Array]"]=bu["[object Int32Array]"]=bu["[object Uint8Array]"]=bu["[object Uint8ClampedArray]"]=bu["[object Uint16Array]"]=bu["[object Uint32Array]"]=!0,bu["[object Arguments]"]=bu["[object Array]"]=bu["[object ArrayBuffer]"]=bu["[object Boolean]"]=bu["[object DataView]"]=bu["[object Date]"]=bu["[object Error]"]=bu["[object Function]"]=bu["[object Map]"]=bu["[object Number]"]=bu["[object Object]"]=bu["[object RegExp]"]=bu["[object Set]"]=bu["[object String]"]=bu["[object WeakMap]"]=!1;var yu=function(e){return gu(e)&&mu(e.length)&&!!bu[pu(e)]};var vu=function(e){return function(t){return e(t)}},$u={exports:{}};!function(e,t){var r=U,n=t&&!t.nodeType&&t,a=n&&e&&!e.nodeType&&e,i=a&&a.exports===n&&r.process,o=function(){try{var e=a&&a.require&&a.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=o}($u,$u.exports);var wu=yu,xu=vu,Su=$u.exports,ku=Su&&Su.isTypedArray,Du=ku?xu(ku):wu,Ou=eu,_u=lu,Cu=Ee,Mu=cu.exports,Fu=hu,Bu=Du,Eu=Object.prototype.hasOwnProperty;var Au=function(e,t){var r=Cu(e),n=!r&&_u(e),a=!r&&!n&&Mu(e),i=!r&&!n&&!a&&Bu(e),o=r||n||a||i,s=o?Ou(e.length,String):[],l=s.length;for(var c in e)!t&&!Eu.call(e,c)||o&&("length"==c||a&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Fu(c,l))||s.push(c);return s},Pu=Object.prototype;var ju=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Pu)};var Tu=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Nu=ju,Iu=Tu,Lu=Object.prototype.hasOwnProperty;var Ru=He,Hu=fu;var zu=function(e){return null!=e&&Hu(e.length)&&!Ru(e)},Vu=Au,Wu=function(e){if(!Nu(e))return Iu(e);var t=[];for(var r in Object(e))Lu.call(e,r)&&"constructor"!=r&&t.push(r);return t},Yu=zu;var Uu=function(e){return Yu(e)?Vu(e):Wu(e)},qu=Qd,Qu=Jd,Gu=Uu;var Zu=function(e){return qu(e,Gu,Qu)},Xu=Object.prototype.hasOwnProperty;var Ku=function(e,t,r,n,a,i){var o=1&r,s=Zu(e),l=s.length;if(l!=Zu(t).length&&!o)return!1;for(var c=l;c--;){var d=s[c];if(!(o?d in t:Xu.call(t,d)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var f=!0;i.set(e,t),i.set(t,e);for(var p=o;++c<l;){var m=e[d=s[c]],g=t[d];if(n)var b=o?n(g,m,d,t,e,i):n(m,g,d,e,t,i);if(!(void 0===b?m===g||a(m,g,r,n,i):b)){f=!1;break}p||(p="constructor"==d)}if(f&&!p){var y=e.constructor,v=t.constructor;y==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(f=!1)}return i.delete(e),i.delete(t),f},Ju=it(G,"DataView"),eh=Lt,th=it(G,"Promise"),rh=it(G,"Set"),nh=it(G,"WeakMap"),ah=fe,ih=Ue,oh="[object Map]",sh="[object Promise]",lh="[object Set]",ch="[object WeakMap]",dh="[object DataView]",uh=ih(Ju),hh=ih(eh),fh=ih(th),ph=ih(rh),mh=ih(nh),gh=ah;(Ju&&gh(new Ju(new ArrayBuffer(1)))!=dh||eh&&gh(new eh)!=oh||th&&gh(th.resolve())!=sh||rh&&gh(new rh)!=lh||nh&&gh(new nh)!=ch)&&(gh=function(e){var t=ah(e),r="[object Object]"==t?e.constructor:void 0,n=r?ih(r):"";if(n)switch(n){case uh:return dh;case hh:return oh;case fh:return sh;case ph:return lh;case mh:return ch}return t});var bh=Md,yh=Nd,vh=Yd,$h=Ku,wh=gh,xh=Ee,Sh=cu.exports,kh=Du,Dh="[object Arguments]",Oh="[object Array]",_h="[object Object]",Ch=Object.prototype.hasOwnProperty;var Mh=function(e,t,r,n,a,i){var o=xh(e),s=xh(t),l=o?Oh:wh(e),c=s?Oh:wh(t),d=(l=l==Dh?_h:l)==_h,u=(c=c==Dh?_h:c)==_h,h=l==c;if(h&&Sh(e)){if(!Sh(t))return!1;o=!0,d=!1}if(h&&!d)return i||(i=new bh),o||kh(e)?yh(e,t,r,n,a,i):vh(e,t,l,r,n,a,i);if(!(1&r)){var f=d&&Ch.call(e,"__wrapped__"),p=u&&Ch.call(t,"__wrapped__");if(f||p){var m=f?e.value():e,g=p?t.value():t;return i||(i=new bh),a(m,g,r,n,i)}}return!!h&&(i||(i=new bh),$h(e,t,r,n,a,i))},Fh=pe;var Bh=function e(t,r,n,a,i){return t===r||(null==t||null==r||!Fh(t)&&!Fh(r)?t!=t&&r!=r:Mh(t,r,n,a,e,i))},Eh=Md,Ah=Bh;var Ph=Y;var jh=function(e){return e==e&&!Ph(e)},Th=jh,Nh=Uu;var Ih=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Lh=function(e,t,r,n){var a=r.length,i=a,o=!n;if(null==e)return!i;for(e=Object(e);a--;){var s=r[a];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++a<i;){var l=(s=r[a])[0],c=e[l],d=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new Eh;if(n)var h=n(c,d,l,e,t,u);if(!(void 0===h?Ah(d,c,3,n,u):h))return!1}}return!0},Rh=function(e){for(var t=Nh(e),r=t.length;r--;){var n=t[r],a=e[n];t[r]=[n,a,Th(a)]}return t},Hh=Ih;var zh=vr,Vh=lu,Wh=Ee,Yh=hu,Uh=fu,qh=wr;var Qh=function(e,t){return null!=e&&t in Object(e)},Gh=function(e,t,r){for(var n=-1,a=(t=zh(t,e)).length,i=!1;++n<a;){var o=qh(t[n]);if(!(i=null!=e&&r(e,o)))break;e=e[o]}return i||++n!=a?i:!!(a=null==e?0:e.length)&&Uh(a)&&Yh(o,a)&&(Wh(e)||Vh(e))};var Zh=Bh,Xh=Or,Kh=function(e,t){return null!=e&&Gh(e,t,Qh)},Jh=Ne,ef=jh,tf=Ih,rf=wr;var nf=kr;var af=function(e){return function(t){return null==t?void 0:t[e]}},of=function(e){return function(t){return nf(t,e)}},sf=Ne,lf=wr;var cf=function(e){var t=Rh(e);return 1==t.length&&t[0][2]?Hh(t[0][0],t[0][1]):function(r){return r===e||Lh(r,e,t)}},df=function(e,t){return Jh(e)&&ef(t)?tf(rf(e),t):function(r){var n=Xh(r,e);return void 0===n&&n===t?Kh(r,e):Zh(t,n,3)}},uf=function(e){return e},hf=Ee,ff=function(e){return sf(e)?af(lf(e)):of(e)};var pf=function(e){return"function"==typeof e?e:null==e?uf:"object"==typeof e?hf(e)?df(e[0],e[1]):cf(e):ff(e)},mf=pf,gf=zu,bf=Uu;var yf=function(e){return function(t,r,n){var a=Object(t);if(!gf(t)){var i=mf(r);t=bf(t),r=function(e){return i(a[e],e,a)}}var o=e(t,r,n);return o>-1?a[i?t[o]:o]:void 0}};var vf=De,$f=1/0;var wf=function(e){return e?(e=vf(e))===$f||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var xf=function(e,t,r,n){for(var a=e.length,i=r+(n?1:-1);n?i--:++i<a;)if(t(e[i],i,e))return i;return-1},Sf=pf,kf=function(e){var t=wf(e),r=t%1;return t==t?r?t-r:t:0},Df=Math.max;var Of=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var a=null==r?0:kf(r);return a<0&&(a=Df(n+a,0)),xf(e,Sf(t),a)},_f=yf(Of),Cf=Bh;var Mf=function(e,t){return Cf(e,t)};const Ff=x.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return S`
            height: ${t};
            width: ${r};
        `}}

    position: relative;
    border-radius: 4px;
    transition: all 200ms ease-in-out;
    border: 1px solid ${Er.Accent.Light[2]};
    background: transparent;

    ${e=>{let t,r;return e.selected&&(t=Er.Primary(e),r=Er.Primary(e)),e.disabled&&(t=Er.Neutral[6](e),r=Er.Neutral[6](e)),`\n\t\t\tborder: 1px solid ${t};\n\t\t\tbackground: ${r};\n\t\t`}}
`,Bf=x.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Ef=x(P)`
    ${e=>{let t;if("small"===e.$displaySize)t="1.5rem";else t="1.75rem";return S`
            height: ${t};
            width: ${t};
        `}}
    color: ${e=>e.disabled?Er.Neutral[4]:Er.Neutral[8]};
`,Af=x(sl.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Pf=x.ul`
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
        background: ${Er.Neutral[4]};
        border-right: 5px solid ${Er.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${tn.mobileL} {
        max-height: 15rem;
    }
`,jf=x.li`
    :hover,
    :focus,
    :active {
        background: ${Er.Accent.Light[5]};
    }
    ${e=>{if(e.checked)return S`
                background: ${Er.Accent.Light[5]};
            `}}
`,Tf=x.button`
    display: flex;
    ${e=>e.multiSelect?S`
                padding: 0.5rem 1rem;
            `:S`
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
        outline-color: ${Er.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`;x.div`
    position: relative;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Er.Neutral[8]};
`;const Nf=x.div`
    ${Hr("Body","regular")}
    color: ${Er.Neutral[1]};
    text-align: left;
    line-height: 1.375rem;
    overflow: hidden;
    ${e=>{if("middle"!==e.truncateType)return S`
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                `}}
`,If=x.span`
    color: ${Er.Neutral[4]};
    display: inline;
    padding-left: 0.4rem;
`,Lf=x.div`
    display: flex;
    flex-direction: column;
`,Rf=x.div`
    width: 100%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Hf=x.div`
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;x(Vr.Hyperlink.Default)`
    color: ${Er.Neutral[1]} !important;
    padding: 1.25rem 1rem;
    margin-bottom: 0;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Er.Accent.Light[3]};
        color: ${Er.Neutral[1]};
    }
`;const zf=x((({className:r,checked:n,disabled:a,onChange:o,onKeyPress:l,displaySize:c="default",...d})=>{const[u,h]=i(n);s((()=>{h(n)}),[n]);const f=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;o&&o(e),l&&l(t)}};return e(Ff,{selected:u,disabled:a,className:r,"data-testid":"checkbox",$displaySize:c,role:"checkbox","aria-checked":u,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:f,children:[t(Bf,{id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",tabIndex:-1,onChange:f,disabled:a,checked:u,...d}),u&&t(Ef,{id:"checkmark","data-testid":"checkmark",disabled:a,$displaySize:c})]})}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Vf=x.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Wf=x.button`
    ${Hr("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${Er.Primary(e)};\n\t\t`}
`,Yf=x.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Uf=x(Vr.Body)``,qf=x(A)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${Er.Validation.Red.Icon};
`,Qf=x.li`
    background: ${Er.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,Gf=x(Rc)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,Zf=x(j)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${Er.Neutral[3]};
`,Xf=x(sn)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${Er.Neutral[3]};
    cursor: pointer;
`,Kf=x(C)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${Er.Neutral[3]};
`,Jf=p(((r,n)=>{const{onClear:a,...i}=r;return e(Qf,{children:[t(Zf,{}),t(Gf,{ref:n,...i}),i.value&&t(Xf,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:t(Kf,{})})]},"search")})),ep=({listItems:n,listExtractor:a,valueExtractor:l,onSelectItem:c,listStyleWidth:d,visible:u,enableSearch:h,searchPlaceholder:f="Search",onSearch:p,searchFunction:m,onDismiss:g,multiSelect:b,selectedItems:y,onSelectAll:v,onRetry:$,itemsLoadState:w="success",itemTruncationType:x="end",renderListItem:S,onBlur:k,hideNoResultsDisplay:D,renderCustomCallToAction:O,..._})=>{const[C,M]=i(0),[F,B]=i(""),[E,A]=i(n),[P,j]=i(0),T=Is({height:P}),N=o(),I=o(),L=o([]),R=o(),H=o(),z=o(C),V=o(E),W=e=>{z.current=e,M(e)},Y=e=>{V.current=e,A(e)};s((()=>(document.addEventListener("keydown",X),()=>{document.removeEventListener("keydown",X)})),[]),s((()=>{G(F)}),[F]),s((()=>{B(""),u?(setTimeout((()=>{j(Z())})),R&&R.current?(R.current.focus(),W(-1)):L.current[C]&&L.current[C].focus()):j(0)}),[u]),s((()=>{if(u){const e=Z();j(e)}}),[E]),s((()=>{Y(n),B(""),W(0)}),[n]);const U=e=>a?a(e):e.toString(),q=e=>{const t=a?a(e):e.toString();let r=0;return I&&I.current&&(r=I.current.getBoundingClientRect().width-100),Sc.shouldTruncateToTwoLines("string"==typeof t?t:t.title,r)},Q=e=>!!_f(y,(t=>Mf(t,e))),G=e=>{if(""===e)Y(n);else if(m){const t=m(e);Y(t)}else{const t=n.filter((t=>{const r=U(t),n="object"==typeof r?r.title.toLowerCase():r.toLowerCase();return"object"==typeof r&&r.secondaryLabel?n.includes(e.trim().toLowerCase())||r.secondaryLabel.includes(e.trim().toLowerCase()):n.includes(e.trim().toLowerCase())}));Y(t)}},Z=()=>(I&&I.current?I.current.getBoundingClientRect().height:0)+(H.current?H.current.getBoundingClientRect().height:0),X=e=>{if(N&&N.current.contains(e.target))switch(e.code){case"ArrowDown":if(z.current<V.current.length-1){const e=z.current+1;L.current[e].focus(),W(e)}break;case"ArrowUp":if(z.current>0){const e=z.current-1;L.current[e].focus(),W(z.current-1)}break;case"Escape":g&&g(!0)}},K=(e,t)=>{e.preventDefault(),c&&c(t,(e=>l?l(e):e)(t))},J=e=>{const t=e.target.value;B(t),p&&p()},ee=()=>{B(""),R.current.focus(),p&&p()},te=()=>{$&&$()},re=()=>{k&&k()},ne=r=>{const n=U(r),a="string"==typeof n?n:n.title;return e(Lf,{"data-testid":"truncate-middle-container",children:[t(Rf,{children:a}),e(Hf,{children:[" ",a]})]})},ae=n=>{const a=U(n);return"string"==typeof a?t(r,{children:a}):e(r,{children:[a.title,a.secondaryLabel&&t(If,{children:a.secondaryLabel})]})},ie=()=>{if(!$||$&&"success"===w)return E.map(((r,n)=>t(jf,{checked:Q(r)&&!b,children:e(Tf,{onClick:e=>{K(e,r)},ref:e=>L.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:u?0:-1,multiSelect:b,onBlur:re,children:[b&&t(zf,{checked:Q(r),displaySize:"small"}),S?S(r,{selected:Q(r)}):t(Nf,{truncateType:x,children:"middle"===x&&q(r)?ne(r):ae(r)})]})},((e,t)=>`item_${t}__${l?l(e):e}`)(r,n))))},oe=()=>{if(b&&E.length>0&&!F&&"success"===w)return t(Vf,{children:t(Wf,{onClick:v,type:"button",children:0===y.length?"Select all":"Unselect all"})},"selectAll")},se=()=>{if(!D&&F&&0===E.length)return e(Yf,{"data-testid":"list-no-results",children:[t(qf,{"data-testid":"no-result-icon"}),t(Uf,{children:"No results found."})]},"noResults")},le=()=>{if($&&"loading"===w)return e(Yf,{"data-testid":"list-loading",children:[t(Al,{$buttonStyle:"secondary",size:24}),t(Uf,{children:"Loading..."})]},"loading")},ce=()=>{if($&&"fail"===w)return e(Yf,{"data-testid":"list-fail",children:[t(qf,{"data-testid":"load-error-icon"}),t(Uf,{children:"Failed to load."}),t(Wf,{onClick:te,type:"button",children:"Try again."})]},"noResults")};return t(r,{children:e(Af,{style:T,"data-testid":u?"dropdown-container":"dropdown-container-hidden",ref:N,children:[(()=>{if(u)return e(Pf,{ref:I,"data-testid":"dropdown-list",width:d,role:"list",..._,children:[(h||m)&&"success"===w?t(Jf,{ref:R,onChange:J,value:F,placeholder:f,"data-testid":"search-input","aria-label":"search-input",tabIndex:u?0:-1,onClear:ee}):null,oe(),se(),le(),ce(),ie()]})})(),(()=>{if(u&&O)return t("div",{ref:H,"data-testid":"custom-cta",children:O(g,E)})})()]})})},tp=(e,t,r="window",n)=>{const a=o();s((()=>{a.current=t}),[t]),s((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!(t&&t.addEventListener))return;const i=e=>a.current(e);return t.addEventListener(e,i,n),()=>{t.removeEventListener(e,i,n)}}),[e,r])},rp=x.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,np=x.button`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    height: calc(3rem - 2px); // exclude top and bottom borders
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
        outline: 2px solid ${Er.Accent.Light[3]};
    }
`,ap=k`
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
`,ip=x.div`
    position: relative;
    border: 1px solid ${Er.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Er.Neutral[8]};

    :focus-within {
        border: 1px solid ${Er.Accent.Light[1]};
        box-shadow: ${Nc};
    }

    ${e=>e.expanded?S`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:S`
                animation: ${ap} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?S`
                background: ${Er.Neutral[6](e)};

                ${np} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Er.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?S`
                border: none;
                background: transparent !important;

                ${np} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?S`
                border: 1px solid ${Er.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Er.Validation.Red.Border(e)};
                    box-shadow: ${Ic};
                }
            `:void 0}
`,op=x.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${un};
    margin-left: 1rem;
`,sp=x(M)`
    color: ${Er.Neutral[3]};
    height: ${Tr.Body.fontSize}rem;
    width: ${Tr.Body.fontSize}rem;
`,lp=x.div`
    height: 1px;
    background: ${Er.Neutral[5]};
    margin: 0 0.5rem;
`,cp=x.div`
    display: flex;
    flex: 1;
`,dp=x(Vr.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return S`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,up=x(dp)`
    color: ${Er.Neutral[3]};
`,hp=({children:e,show:r,error:n,disabled:a,testId:i,onBlur:s,readOnly:l})=>{const c=o();return tp("mousedown",(function(e){if(!a){if(c&&c.current.contains(e.target))return;r&&s()}}),"document"),t(rp,{children:t(ip,{ref:c,error:n&&!r,disabled:a,$readOnly:l,expanded:r,"data-testid":i,children:e})})},fp=x.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 1rem;
    ${e=>{if(e.$expanded)return S`
                border-bottom: 1px solid ${Er.Neutral[5](e)};
            `}}

    ${e=>e.$readOnly?S`
                border: 0;
                margin: 0;
            `:"right"===e.$position?S`
                        flex-direction: row-reverse;
                        margin: 0 0 0 1rem;
                    `:S`
                        flex-direction: row;
                    `}
`,pp=x(np)`
    padding: 0;
    width: auto;
`,mp=x.div`
    height: calc(3rem - 2px); // exclude top and bottom borders
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: 0.75rem;
`,gp=x.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${un};
    margin: 0 0.75rem;
`,bp=x(M)`
    color: ${Er.Neutral[3]};
    height: ${Tr.Body.fontSize}rem;
    width: ${Tr.Body.fontSize}rem;
    vertical-align: bottom;
`,yp=x.div`
    display: flex;
    flex: 1 1 auto;
`,vp=x(Vr.Body)`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,$p=x(vp)`
    color: ${Er.Neutral[3]};
`,wp=x.div`
    width: 1px;
    background: ${Er.Neutral[5]};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return S`
                display: none;
            `}}

    ${e=>"right"===e.$position?S`
                    margin: 0 0.75rem;
                `:S`
                    margin: 0 0.75rem 0 0;
                `}
`,xp=a.forwardRef((({addon:n,error:a,onChange:l,readOnly:c,className:d,onBlur:u,...h},f)=>{const{placeholder:p,options:m,enableSearch:g,searchFunction:b,searchPlaceholder:y,valueExtractor:v,listExtractor:$,displayValueExtractor:w,selectedOption:x,onSelectOption:S,onHideOptions:k,onShowOptions:D,"data-selector-testid":O}=n.attributes,{position:_}=n,[C,M]=i(x),[F,B]=i(!1),E=o();s((()=>{M(x)}),[x]);const A=()=>w?w(C):v?v(C):C.toString(),P=e=>{!e&&k&&k(),e&&D&&D()},j=e=>{e.preventDefault(),h.disabled||(B(!F),P(!F))},T=(e,t)=>{M(e),B(!1),P(!1),E&&E.current.focus(),S&&S(e,t)},N=e=>{l&&l(e)},I=()=>{u&&u()},L=()=>{B(!1),P(!1),E&&E.current.focus()};return e(hp,{className:d,show:F,error:a&&!F,disabled:h.disabled,readOnly:c,onBlur:()=>{B(!1),P(!1),I()},children:[e(fp,{$expanded:F,$readOnly:c,$position:_,children:[c?C?t(mp,{children:t(vp,{"data-testid":"selector-label",children:A()})}):null:t(pp,{ref:E,type:"button",disabled:h.disabled,"data-testid":O||"addon-selector",onClick:j,children:e(r,{children:[e(yp,{children:[p&&!C&&t($p,{children:p}),C&&t(vp,{"data-testid":"selector-label",children:A()})]}),t(gp,{$expanded:F,children:t(bp,{})})]})}),t(wp,{$readOnly:c,$position:_}),t(gd,{ref:f,...h,readOnly:c,error:a,onChange:N,"data-testid":h["data-testid"]||"input",onBlur:I})]}),m&&m.length>0?t(ep,{listItems:m,selectedItems:x?[x]:[],onSelectItem:T,valueExtractor:v,listExtractor:$,visible:F,enableSearch:g,searchFunction:b,searchPlaceholder:y,"data-testid":"dropdown-list",onBlur:I,onDismiss:L}):null]})})),Sp=a.forwardRef((({addon:r,error:n,className:a,...i},o)=>{const s=()=>t(md,{disabled:i.disabled,$error:n,$readOnly:i.readOnly,"data-testid":i["data-testid"],className:a,children:t(gd,{ref:o,...i,"data-testid":"input"})});if(!r)return s();{const{type:l="label",position:c="left"}=r,{allowClear:d}=i;switch(l){case"list":{const e=r.attributes;return e.options&&e.options.length>0?t(xp,{ref:o,addon:r,error:n,className:a,...i}):s()}case"custom":{const l=r.attributes;return l.children?e(Lc,{$error:n,$disabled:i.disabled,$readOnly:i.readOnly,"data-testid":i["data-testid"],$position:c,className:a,children:[t(bd,{"data-testid":"addon",disabled:i.disabled,$readOnly:i.readOnly,$position:c,children:l.children}),t(gd,{ref:o,...i,allowClear:d&&"right"!==c,error:n,"data-testid":"input"})]}):s()}default:{const l=r.attributes;return l.value?e(Lc,{$disabled:i.disabled,$error:n,$readOnly:i.readOnly,"data-testid":i["data-testid"],$position:c,className:a,children:[t(bd,{"data-testid":"addon",disabled:i.disabled,$readOnly:i.readOnly,$position:c,children:l.value}),t(gd,{ref:o,...i,allowClear:d&&"right"!==c,error:n,"data-testid":"input"})]}):s()}}}})),kp=a.forwardRef(((e,r)=>{const{label:n,errorMessage:a,id:i="form-field-group","data-error-testid":o,"data-testid":s,...l}=e;return t(Dn,{id:i,label:n,errorMessage:a,disabled:l.disabled,"data-error-testid":o,children:t(Sp,{ref:r,id:`${i}-base`,"data-testid":s||i,error:!!a,...l})})})),Dp=({selectedOptions:n,placeholder:a="Select",options:l,className:c,disabled:d,error:u,"data-testid":h,enableSearch:f=!1,searchFunction:p,searchPlaceholder:m,valueExtractor:g,listExtractor:b,onSelectOptions:y,listStyleWidth:v,onShowOptions:$,onHideOptions:w,onRetry:x,optionsLoadState:S="success",optionTruncationType:k="end",...D})=>{const[O,_]=i(n||[]),[C,M]=i(!1),F=o();s((()=>{_(n||[])}),[n]);const B=(e,t)=>{const r=[...O],n=Of(O,(e=>(g?g(e):e)===t));n>-1?r.splice(n,1):r.push(e),_(r),P(!1),F&&F.current.focus(),j(r)},E=()=>{C&&(M(!1),P(!1)),F&&F.current.focus()},A=()=>{O&&O.length>0?(_([]),j([])):(_(l),j(l))},P=e=>{!e&&w&&w(),e&&$&&$()},j=e=>{y&&y(e)};return e(hp,{show:C,error:u&&!C,disabled:d,testId:h,className:c,onBlur:()=>{M(!1),P(!1)},children:[t(np,{ref:F,type:"button","data-testid":"selector",onClick:e=>{e.preventDefault(),d||(M(!C),P(!C))},...D,children:e(r,{children:[t(cp,{children:O&&0!==O.length?t(dp,{children:O&&0!=O.length?`${O.length} selected`:a}):t(up,{truncateType:k,children:a})}),t(op,{expanded:C,children:t(sp,{})})]})}),C&&t(lp,{}),l&&l.length>0||x?t(ep,{listItems:l,onSelectItem:B,onDismiss:E,valueExtractor:g,listExtractor:b,listStyleWidth:v,visible:C,enableSearch:f,searchFunction:p,searchPlaceholder:m,"data-testid":"dropdown-list",multiSelect:!0,selectedItems:O,onSelectAll:A,onRetry:x,itemsLoadState:S,itemTruncationType:k}):null]})};var Op=function(e,t,r,n){var a=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++a]);++a<i;)r=t(r,e[a],a,e);return r};var _p=function(e){return function(t,r,n){for(var a=-1,i=Object(t),o=n(t),s=o.length;s--;){var l=o[e?s:++a];if(!1===r(i[l],l,i))break}return t}}(),Cp=Uu;var Mp=zu;var Fp=function(e,t){return function(r,n){if(null==r)return r;if(!Mp(r))return e(r,n);for(var a=r.length,i=t?a:-1,o=Object(r);(t?i--:++i<a)&&!1!==n(o[i],i,o););return r}}((function(e,t){return e&&_p(e,t,Cp)}));var Bp=Op,Ep=Fp,Ap=pf,Pp=function(e,t,r,n,a){return a(e,(function(e,a,i){r=n?(n=!1,e):t(r,e,a,i)})),r},jp=Ee;var Tp=function(e,t,r){var n=jp(e)?Bp:Pp,a=arguments.length<3;return n(e,Ap(t),r,a,Ep)};const Np=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],Ip=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var Lp;!function(e){e.getCountries=()=>[].concat(...Np.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:Ip("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,a=n.split(" ");a.shift();const i=a.join(" ");return Tp(i,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const[r,...n]=e.remainingText;return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(Lp||(Lp={}));const Rp=({onChange:e,value:r,allowClear:n,onClear:a,onBlur:l,error:c,fixedCountry:d=!1,optionPlaceholder:u="Select",optionSearchPlaceholder:h,enableSearch:f,onHideOptions:p,onShowOptions:m,placeholder:g,...b})=>{const[y]=i(Lp.getCountries()),[v,$]=i(void 0),[w,x]=i(""),S=o(),k=kc({ref:S,formatter:e=>Lp.formatNumber(e.replace(/[^0-9]/g,""),v)});s((()=>{const e=y.filter((e=>e.countryCode===Hp(r?.countryCode)))[0];$(e),x(Lp.formatNumber(r?.number,e))}),[r]);const D=t=>{_(w,t),e&&O(w,t)},O=(t,r)=>{const n=Lp.formatNumber(t,r);e({number:n.replace(/[\s()]+/g,""),countryCode:r&&zp(r.countryCode)})},_=(e,t)=>{x(Lp.formatNumber(e,t)),$(t)};return t(Sp,{ref:S,value:w,onChange:()=>{const{nextValue:t,updateCaretPosition:r}=k();r(),_(t,v),e&&O(t,v)},allowClear:n&&!!w,onClear:()=>{a?a():x("")},onBlur:l,error:c,placeholder:g,addon:d?{type:"label",attributes:{value:zp(v?.countryCode)}}:{type:"list",attributes:{placeholder:u,options:y,selectedOption:v,enableSearch:f,searchPlaceholder:h,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:zp(e.countryCode)}),onSelectOption:D,onHideOptions:p,onShowOptions:m}},inputMode:"numeric",...b})},Hp=e=>e?e.replace("+",""):"",zp=e=>e?e.includes("+")?e:`+${e}`:"",Vp=({selectedOptions:r,placeholders:n={from:"Select",to:"Select"},options:a,disabled:l,className:c,readOnly:d,error:u,"data-testid":h,id:f,enableSearch:p=!1,searchFunction:m,searchPlaceholder:g,valueExtractor:b,valueToStringFunction:y,listExtractor:v,displayValueExtractor:$,onSelectOption:w,listStyleWidth:x,onShowOptions:S,onHideOptions:k,onRetry:D,optionsLoadState:O={from:"success",to:"success"},optionTruncationType:_="middle",renderCustomSelectedOption:C,renderListItem:M,renderCustomCallToAction:F,...B})=>{const[E,A]=i(),[P,j]=i(),T=o(),N={from:o(),to:o()},[I,L]=i("none");s((()=>{A(r?.from),j(r?.to)}),[r]);const R=e=>t=>{t.stopPropagation(),t.preventDefault(),l||d||L("from"===e?"from":"to"===e&&E?"to":"from")},H=e=>{const t="from"===e?E:P;return $?$(t):b?b(t):t?.toString()},z=(e,t)=>{if("middle"===_){let r=0;return N[e]&&N[e].current&&(r=N[e].current.getBoundingClientRect().width),Sc.truncateOneLine((e=>"string"==typeof e?e:y(e)||e.toString())(t),r,120,8)}return t},V=e=>{!e&&k&&k(),e&&S&&S()},W=e=>{const r="from"===e?E:P;return r?C?C(r):t(dp,{truncateType:_,children:z(e,H(e))}):t(up,{truncateType:_,children:z(e,n[e])})},Y=e=>t(cp,{onClick:R(e),ref:N[e],children:W(e)});return e(hp,{show:"none"!==I,"data-testid":B["data-testid"],error:u&&!("none"!==I),disabled:l,readOnly:d,testId:h,onBlur:()=>{V(!1),L("none"),E&&P||(j(void 0),A(void 0))},className:c,children:[t(np,{type:"button","data-testid":f||"selector",disabled:l,ref:T,onClick:R(),...B,children:e(ad,{currentActive:(()=>{switch(I){case"from":return"start";case"to":return"end";case"none":return I}})(),children:[Y("from"),Y("to")]})}),"none"!==I&&t(lp,{}),(()=>{if("none"===I)return null;const e=a[I];if(e&&e.length>0){const r="from"===I?E:P;return t(ep,{listItems:e,onSelectItem:(e,t)=>{return r=e,n=t,"from"===(a=I)?A(r):j(r),V(!1),T&&T.current.focus(),w&&w({[a]:r},n),void("from"===a?(j(void 0),L("to"),V(!0)):L("none"));var r,n,a},onDismiss:()=>(L("none"),V(!1),T&&T.current.focus(),void(E&&P||(j(void 0),A(void 0)))),valueExtractor:b,listExtractor:v,listStyleWidth:x,visible:!0,enableSearch:p,searchPlaceholder:g,searchFunction:m,"data-testid":`${I}-dropdown-list`,selectedItems:r?[r]:[],onRetry:D,itemsLoadState:O[I],itemTruncationType:_,renderListItem:M,renderCustomCallToAction:F})}return null})()]})},Wp=({selectedOption:n,placeholder:a="Select",options:l,disabled:c,error:d,className:u,"data-testid":h,id:f,enableSearch:p=!1,searchFunction:m,searchPlaceholder:g,valueExtractor:b,valueToStringFunction:y,listExtractor:v,displayValueExtractor:$,onSelectOption:w,listStyleWidth:x,onShowOptions:S,onHideOptions:k,onRetry:D,optionsLoadState:O="success",optionTruncationType:_="end",renderCustomSelectedOption:C,renderListItem:M,hideNoResultsDisplay:F,renderCustomCallToAction:B,...E})=>{const[A,P]=i(n),[j,T]=i(!1),N=o(),I=o();s((()=>{P(n)}),[n]);const L=(e,t)=>{P(e),T(!1),z(!1),N&&N.current.focus(),w&&w(e,t)},R=e=>{j&&(T(!1),z(!1)),e&&N&&N.current.focus()},H=e=>{if("middle"===_){let t=0;return I&&I.current&&(t=I.current.getBoundingClientRect().width),Sc.truncateOneLine((e=>"string"==typeof e?e:y(e)||e.toString())(e),t,120,8)}return e},z=e=>{!e&&k&&k(),e&&S&&S()};return e(hp,{className:u,show:j,error:d&&!j,disabled:c,readOnly:E.readOnly,testId:h,onBlur:()=>{T(!1),z(!1)},children:[t(np,{ref:N,type:"button","data-testid":f||"selector",disabled:c,onClick:e=>{e.preventDefault(),c||E.readOnly||(T(!j),z(!j))},...E,children:e(r,{children:[t(cp,{ref:I,children:A?C?C(A):t(dp,{truncateType:_,children:H($?$(A):b?b(A):A.toString())}):t(up,{truncateType:_,children:a})}),!E.readOnly&&t(op,{expanded:j,children:t(sp,{})})]})}),j&&t(lp,{}),l&&l.length>0?t(ep,{listItems:l,onSelectItem:L,onDismiss:R,valueExtractor:b,listExtractor:v,listStyleWidth:x,visible:j,enableSearch:p,searchPlaceholder:g,searchFunction:m,"data-testid":"dropdown-list",selectedItems:A?[A]:[],onRetry:D,itemsLoadState:O,itemTruncationType:_,renderListItem:M,hideNoResultsDisplay:F,renderCustomCallToAction:B}):null]})},Yp=x(Vr.H6)`
    text-align: right;

    ${e=>{if(e.disabled)return S`
                color: ${Er.Neutral[4](e)};
            `}}
`,Up=({value:e,maxLength:n,disabled:o,renderCustomCounter:l})=>{const[c,d]=i("");s((()=>{d(u(`${e||""}`))}),[e,n]);const u=e=>{if(l)return l(n,e.toString().length);{const t=n-e.toString().length;return t<=1?`${t} character left`:`${t.toLocaleString()} characters left`}};return t(r,{children:a.isValidElement(c)?c:t(Yp,{"data-testid":"counter-label",weight:"semibold",disabled:o,children:c})})},qp=x.div`
    display: flex;
    flex-direction: column;
`,Qp=x.textarea`
    border: 1px solid ${Er.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${un};

    ${Hr("Body","regular")}
    color: ${Er.Neutral[1]};
    background: ${Er.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${Er.Accent.Light[1]};
        box-shadow: ${Nc};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Er.Neutral[3]};
    }

    ${e=>e.readOnly?S`
                border: none;
                padding: 0.75rem 0;
                background: transparent !important;

                :focus,
                :active {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?S`
                background: ${Er.Neutral[6](e)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${Er.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?S`
                border: 1px solid ${Er.Validation.Red.Border(e)};

                :focus,
                :active {
                    border: 1px solid ${Er.Validation.Red.Border(e)};
                    box-shadow: ${Ic};
                }
            `:void 0}
`,Gp=a.forwardRef((({value:e,disabled:r,error:n,rows:a=5,...i},o)=>t(Qp,{ref:o,disabled:r,value:e,error:n,rows:a,...i})));a.forwardRef((({value:r,disabled:n,rows:a=5,onChange:o,...l},c)=>{const[d,u]=i(r);s((()=>{u(r)}),[r]);return e(qp,{children:[t(Qp,{ref:c,disabled:n,value:d,rows:a||5,onChange:e=>{const t=e.target.value;l.maxLength&&t.length>l.maxLength||(u(t),e.target.value=t,o&&o(e))},...l}),l.maxLength&&t(Up,{disabled:n,value:d,maxLength:l.maxLength,renderCustomCounter:l.renderCustomCounter})]})}));const Zp=x.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.25rem;
`,Xp=x.div`
    display: flex;
    flex: 1;
    margin-right: 0.75rem;
`,Kp=x(wn)`
    margin-top: 0;
`,Jp=a.forwardRef(((r,n)=>{const{label:a,value:o,errorMessage:l,id:c="form-textarea","data-error-testid":d,"data-testid":u,onChange:h,...f}=r,[p,m]=i(o);s((()=>{m(o)}),[o]);return e(Dn,{id:c,label:a,disabled:f.disabled,children:[t(Gp,{id:`${c}-base`,"data-testid":u||c,value:p,error:!!l,onChange:e=>{const t=e.target.value;f.maxLength&&t.length>f.maxLength||(m(t),e.target.value=t,h&&h(e))},ref:n,...f}),e(Zp,{children:[l&&t(Xp,{children:t(Kp,{weight:"semibold","data-testid":d||(c?`${c}-error-message`:"error-message"),children:l})}),f.maxLength&&t(Up,{disabled:f.disabled,value:p,maxLength:f.maxLength,renderCustomCounter:f.renderCustomCounter})]})]})}));var em,tm;!function(e){e.AM="AM",e.PM="PM"}(em||(em={})),function(e){e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:em.AM};if(!t)return r;try{if("24hr"===e){const n=am(t,e);r.minute=Sc.padValue(n.minute);const a=parseInt(n.hour);0===Math.floor(a/12)?(r.period=em.AM,r.hour=0===a?"12":Sc.padValue(a.toString())):(r.period=em.PM,r.hour=12===a?a.toString():Sc.padValue((a-12).toString()))}else{const n=am(t,e);r.hour=Sc.padValue(n.hour),r.minute=Sc.padValue(n.minute),r.period="am"===n.period.toLowerCase()?em.AM:em.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Sc.padValue("0"):"55";const n=Math.floor(r/5),a=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return Sc.padValue((5*a).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Sc.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?Sc.padValue(n.toString()):13===n?Sc.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===em.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return Sc.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const r=am(e,t),n=Sc.padValue(r.hour);let a=`${n}:${Sc.padValue(r.minute)}`;return"12hr"===t?(a+=r.period.toLowerCase(),a):a}catch(e){return""}}}(tm||(tm={}));const rm=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},nm=e=>{const t=parseInt(e);return t>=0&&t<=59},am=(e,t)=>{const r=e.split(":"),n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!rm(r[0],t)||!nm(e)||"am"!==(a=i).toLowerCase()&&"pm"!==a.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!rm(r[0],t)||!nm(r[1]))throw n;return{hour:r[0],minute:r[1]};var a},im=x.div`
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
                        border-color: ${Er.Validation.Red.Icon};
                        background: ${Er.Neutral[8]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Er.Shadow.Red};
                        }
                    `:e.$disabled?S`
                        border-color: transparent;
                    `:S`
                        border-color: transparent;

                        :hover {
                            background: ${Er.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?S`
                        background: ${Er.Neutral[6]};
                        border-color: ${Er.Neutral[5]};
                    `:e.$disabled&&e.$selected?S`
                        background: ${Er.Neutral[6]};
                        border-color: ${Er.Neutral[4]};
                    `:e.$error?S`
                        background: ${Er.Neutral[8]};
                        border-color: ${Er.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Er.Shadow.Red};
                        }
                    `:e.$selected?S`
                        background: ${Er.Accent.Light[5]};
                        border-color: ${Er.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Er.Shadow.Accent};
                        }
                    `:S`
                        background: ${Er.Neutral[8]};
                        border-color: ${Er.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Er.Shadow.Accent};
                            border-color: ${Er.Accent.Light[1]};
                        }
                    `}
`,om=x.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
`,sm=x.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
`,lm=x.label`
    ${e=>e.$selected&&!e.$indicator?S`
                ${Hr("H4","semibold")}
            `:S`
                ${Hr("H4","regular")}
            `}

    color: ${Er.Neutral[1]};

    ${e=>e.$disabled?S`
                color: ${Er.Neutral[3]};
            `:e.$selected?S`
                color: ${Er.Primary};
            `:void 0}
`,cm=x.div`
    ${Hr("BodySmall","regular")}
    margin-top: 0.5rem;

    strong,
    b {
        ${Rr("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?S`
                color: ${Er.Neutral[3]};
            `:e.$selected?S`
                color: ${Er.Primary};
            `:S`
                color: ${Er.Neutral[1]};
            `}
`,dm=x.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?S`
                    color: ${Er.Primary};
                `:S`
                    color: ${Er.Neutral[4]};
                `};
    }
`,um=({type:e,active:r=!1,disabled:n,className:a})=>{let i;switch(e){case"checkbox":i=t(r?R:L,{});break;case"radio":i=t(r?I:N,{});break;case"tick":i=t(P,{});break;case"cross":i=t(C,{});break;default:i=null}return t(dm,{className:a,$active:r,disabled:n,children:i})},hm=x(sl.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Er.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${tn.mobileS} {
        max-width: 100%;
    }
`,fm=x.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,pm=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${tn.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,mm=x.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${tn.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,gm=x.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${tn.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,bm=x.div`
    display: flex;
    gap: 0.5rem;

    ${tn.tablet} {
        flex-direction: column;
    }

    ${tn.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,ym=x.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${tn.mobileS} {
        width: 6rem;
    }
`,vm=x(sn)`
    width: 5rem;
    padding: 1rem 0;
    color: ${Er.Neutral[3]};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Er.Primary};
    }
`,$m=x(Vr.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${tn.tablet} {
        margin: 0;
    }

    ${tn.mobileS} {
        margin: 0 0.25rem;
    }
`,wm=x(Rc)`
    border-radius: ${"4px"};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${Er.Neutral[5]};
    background: ${Er.Neutral[8]};

    :focus,
    :active {
        border: 1px solid ${Er.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px ${Er.Shadow.Accent};
    }

    :focus::placeholder {
        color: transparent;
    }

    ${tn.mobileS} {
        width: 100%;
    }
`,xm=x((({type:r="checkbox",indicator:n,checked:a,styleType:l="default",children:c,subLabel:d,disabled:u,error:h,name:f,id:p,className:m,"data-testid":g,onChange:b})=>{const[y,v]=i(a),[$]=i(xc.generate()),w=p?`${p}-input`:`tg-${$}-input`,x=o();s((()=>{v(a)}),[a]);return e(im,{$selected:y,$disabled:u,className:m,$styleType:l,$error:h,$indicator:n,id:p,"data-testid":g,children:[n&&(()=>{let e;switch(r){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=r}return t(um,{type:e,active:y,disabled:u})})(),t(om,{ref:x,name:f,id:w,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:u,onChange:e=>{if(!u){if(b)return void b(e);switch(r){case"checkbox":v((e=>!e));break;case"radio":case"yes":case"no":y||v(!0)}}},checked:y}),e(sm,{children:[t(lm,{htmlFor:w,$selected:y,$indicator:n,$disabled:u,"data-testid":"toggle-label",children:c}),d&&(()=>{if(!d)return null;let e;return"string"==typeof d?e=d:"function"==typeof d&&(e=d()),t(cm,{$disabled:u,$selected:y,children:e})})()]})]})}))`
    min-width: 5rem;
    flex: 1;
`,Sm=x(Pl.Small)`
    width: 7rem;

    ${tn.mobileL} {
        flex: 1;
    }

    ${tn.mobileS} {
        width: 100%;
    }
`;var km,Dm,Om;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(km||(km={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(Dm||(Dm={})),function(e){e.AM="am",e.PM="pm"}(Om||(Om={}));const _m=({id:r,value:n,show:a,format:l,onChange:c,onCancel:d})=>{const u=tm.getTimeValues(l,n),[h,f]=i(u.hour),[p,g]=i(u.minute),[b,y]=i(u.period),v=o(),$=o(),w=$a();s((()=>{if(a&&v.current&&v.current.focus(),a){const{hour:e,minute:t,period:r}=tm.getTimeValues(l,n);f(e),g(t),y(r)}}),[a,n,l]),s((()=>{const e=v.current,t=$.current;return e&&e.addEventListener("keydown",x),t&&t.addEventListener("keydown",x),()=>{e&&e.removeEventListener("keydown",x),t&&t.removeEventListener("keydown",x)}}),[]);const x=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=m((e=>{switch(e.currentTarget.name){case km.MINUTE_UP:g(tm.updateMinutes(p,"add"));break;case km.MINUTE_DOWN:g(tm.updateMinutes(p,"minus"));break;case km.HOUR_UP:f(tm.updateHours(h,"add"));break;case km.HOUR_DOWN:f(tm.updateHours(h,"minus"))}}),[h,p]),k=e=>{e.target.select()},D=e=>{const t=e.target.value;switch(e.target.name){case Dm.HOUR:t.length<=2&&f(t);break;case Dm.MINUTE:t.length<=2&&g(t)}},O=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case Dm.HOUR:{const r=t>23||t<0?u.hour:tm.convertHourTo12HourFormat(e.target.value);f(r);break}case Dm.MINUTE:{const r=t>59||t<0?u.minute:e.target.value;g(Sc.padValue(r));break}}},_=e=>{switch(e.target.name){case Om.AM:y(em.AM);break;case Om.PM:y(em.PM)}},C=e=>r?`${r}-${e}`:e,F=Is({height:a?w.height+32:0});return t(hm,{"data-testid":"animated-dropdown-wrapper",style:F,children:e(fm,{ref:w.ref,"data-testid":C("timepicker-dropdown"),inert:a?void 0:"",children:[e(pm,{children:[e(gm,{children:[e(ym,{children:[t(vm,{"aria-label":"increase hour",name:km.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":C("hour-increment-button"),children:t(T,{})}),t(wm,{"aria-label":"hour",type:"number",name:Dm.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:h,onFocus:k,onChange:D,onBlur:O,min:1,max:12,placeholder:"HH","data-testid":C("hour-input")}),t(vm,{"aria-label":"decrease hour",name:km.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":C("hour-decrement-button"),children:t(M,{})})]}),t($m,{children:":"}),e(ym,{children:[t(vm,{"aria-label":"increase minute",name:km.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":C("minute-increment-button"),children:t(T,{})}),t(wm,{"aria-label":"minute",type:"number",name:Dm.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:$,value:p,onChange:D,onBlur:O,onFocus:k,min:0,max:59,placeholder:"MM","data-testid":C("minute-input")}),t(vm,{"aria-label":"decrease minute",name:km.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":C("minute-decrement-button"),children:t(M,{})})]})]}),e(bm,{children:[t(xm,{checked:b===em.AM,name:Om.AM,type:"radio",onChange:_,"data-testid":C("am-toggle"),"aria-label":"AM",children:"AM"}),t(xm,{checked:b===em.PM,name:Om.PM,type:"radio",onChange:_,"data-testid":C("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e(mm,{children:[t(Sm,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:d,"data-testid":C("cancel-button"),children:"Cancel"}),t(Sm,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===l?tm.convertTo24HourFormat({hour:h,minute:p,period:b}):`${h}:${p}${b}`,c(e)},disabled:""===h||""===p,"data-testid":C("confirm-button"),children:"Done"})]})]})})},Cm=x.div`
    position: relative;
`,Mm=x(Lc)`
    height: 3rem;
    gap: 0.5rem;
`,Fm=x(Rc)`
    display: block;
    width: 100%;
    flex: 1;
`,Bm=({id:r,disabled:n=!1,error:a,value:l,format:c="24hr",readOnly:d,onChange:u,onFocus:h,onBlur:f,...p})=>{const[m,g]=i(!1),[b,y]=i(!1),[v,$]=i(""),[w,x]=i(""),S=o();s((()=>{l&&($(l.start),x(l.end))}),[]),tp("mousedown",(function(e){n||_(e)}),"document"),tp("keyup",(function(e){if("Tab"===e.code)_(e)}),"document");const k=()=>{O()},D=()=>{m||b||h&&h()},O=()=>{g(!1),y(!1),f&&f()},_=e=>{S&&!S.current.contains(e.target)&&(b||m)&&O()};return t(Cm,{ref:S,id:r,...p,children:e(Mm,{$disabled:n,$error:a,$readOnly:d,children:[e(ad,{error:a,currentActive:m?"start":b?"end":"none",children:[t(Fm,{onFocus:()=>{n||d||m||(y(!1),g(!0),D())},readOnly:!0,placeholder:"From",value:tm.formatDisplayValue(v,c),disabled:n,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(Fm,{onFocus:()=>{n||d||b||(g(!1),y(!0),D())},readOnly:!0,placeholder:"To",value:tm.formatDisplayValue(w,c),disabled:n,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),t(_m,{id:r,show:m,value:v,format:c,onCancel:k,onChange:e=>{g(!1),y(!0),$(e);u&&u({start:e,end:w})}}),t(_m,{id:r,show:b,value:w,format:c,onCancel:k,onChange:e=>{y(!1),x(e);u&&u({start:v,end:e}),""==v?g(!0):f&&f()}})]})})};x.div`
    position: relative;
`;const Em=x(Rc)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,Am=({id:r,disabled:n=!1,readOnly:a=!1,error:s,value:l,placeholder:c,format:d="24hr",onChange:u,onFocus:h,onBlur:f,...p})=>{const[g,b]=i(!1),y=o();tp("mousedown",(function(e){n||a||w(e)}),"document"),tp("keyup",(function(e){if("Tab"===e.code)w(e)}),"document");const v=()=>{n||a||g||(b(!0),h&&h())};const $=()=>{b(!1),f&&f()},w=e=>{y&&!y.current.contains(e.target)&&g&&$()},x=m((()=>"12hr"===d?"HH:MMam":"HH:MM"),[d,c]);return e(Lc,{ref:y,id:r,$readOnly:a,$disabled:n,$error:s,...p,children:[t(Em,{onFocus:v,focused:g,readOnly:!0,placeholder:c||x(),value:tm.formatDisplayValue(l,d),disabled:n,"data-testid":r?`${r}-timepicker-selector`:"timepicker-selector"}),t(_m,{id:r,show:g,value:l,format:d,onCancel:()=>{$()},onChange:e=>{u&&u(e),$()}})]})},Pm=x(bd)`
    margin-right: 0.25rem;
`,jm=x(fd)`
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
`,Tm=x(jm)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,Nm=x(Vr.Body)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return S`
                color: ${Er.Neutral[3]};
            `}}
`,Im=x.div`
    display: flex;
`,Lm=x(Vr.Body)`
    ${e=>{if(e.$inactive)return S`
                color: ${Er.Neutral[3]};
            `}}
`,Rm=({disabled:n,error:a,value:l,onChange:c,onBlur:d,onChangeRaw:u,onBlurRaw:h,readOnly:f,placeholder:p="00-8888",...m})=>{const[g,b]=i(""),[y,v]=i(""),[$,w]=i("none"),x=o(null),S=o(null),k=o(null),D=o(g),O=o(y),_=o($),C=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),M=kc({ref:S,formatter:C}),F=kc({ref:k,formatter:C}),B=e=>{D.current=e,b(e)},E=e=>{O.current=e,v(e)},A=e=>{_.current=e,w(e)};s((()=>(document.addEventListener("mousedown",P),x.current&&x.current.addEventListener("keydown",j),()=>{document.removeEventListener("mousedown",P),x.current&&x.current.removeEventListener("keydown",j)})),[$]),s((()=>{"floor"===$&&3===g.length&&k.current&&k.current.focus()}),[g]),s((()=>{H(l)}),[l]);const P=e=>{n||f||x&&x.current.contains(e.target)||"none"!==_.current&&(A("none"),V())},j=e=>{"unit"===e.target.name&&"Tab"===e.code&&(A("none"),V())},T=e=>{A(e.target.name),e.target.select()},N=e=>{const t=e.target.name,r=e.target.value;"floor"===t?B(R(r)):E(R(r))},I=e=>{const t=e.target.name;if("floor"===t){const{nextValue:e,updateCaretPosition:r}=M();r(),B(e),z(e,t)}else{const{nextValue:e,updateCaretPosition:r}=F();r(),E(e),z(e,t)}},L=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===$&&0===y.length&&S.current.focus()},R=e=>/^[0-9]$/.test(e)?Sc.padValue(e,!0):e.toLocaleUpperCase(),H=e=>{if(e!==Hm)if(void 0===e||0===e.length)B(""),E("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];B("floor"===$?e:R(e)),E("unit"===$?r:R(r))}}},z=(e,t)=>{if(!c&&!u)return;const r={floor:D.current,unit:O.current};if(r[t]=e,c){const e=W(r);c(e)}u&&u([r.floor,r.unit])},V=()=>{if(!d&&!h)return;const e={floor:R(D.current),unit:R(O.current)};if(d){const t=W(e);d(t)}h&&h([e.floor,e.unit])},W=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":Hm},Y=e=>e.split("-");return e(Lc,{ref:x,onClick:()=>{"none"===$&&S.current&&S.current.focus()},$disabled:n,$error:a,$readOnly:f,"data-testid":m["data-testid"],children:[t(Pm,{"data-testid":"addon",disabled:n,$readOnly:f,children:"#"}),f&&l?(()=>{const r=l.split("-");return e(Im,{children:[t(Lm,{children:r[0]}),t(Nm,{children:"-"}),t(Lm,{children:r[1]})]})})():e(r,{children:[t(jm,{name:"floor",maxLength:3,value:g,ref:S,onFocus:T,onBlur:N,onChange:I,disabled:n,readOnly:f,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==$||f?Y(p)[0]:""}),t(Nm,{$inactive:0===g.length,children:"-"}),t(Tm,{name:"unit",maxLength:5,value:y,ref:k,onFocus:T,onBlur:N,onChange:I,onKeyDown:L,disabled:n,readOnly:f,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==$||f?Y(p)[1]:""})]})]})},Hm="Invalid unit number",zm={DateInput:({label:e,errorMessage:r,id:n="form-date-input","data-error-testid":a,"data-testid":i,...o})=>t(Dn,{id:n,label:e,errorMessage:r,"data-error-testid":a,disabled:o.disabled,children:t(Kc,{id:`${n}-base`,"data-testid":i||n,error:!!r,...o})}),DateRangeInput:({label:e,errorMessage:r,id:n="form-date-range-input","data-error-testid":a,"data-testid":i,...o})=>t(Dn,{id:n,label:e,errorMessage:r,"data-error-testid":a,disabled:o.disabled,children:t(cd,{id:`${n}-base`,"data-testid":i||n,error:!!r,...o})}),Input:pd,InputGroup:kp,Label:Sn,MultiSelect:({label:e,errorMessage:r,id:n="form-multi-select","data-error-testid":a,"data-testid":i,enableSearch:o=!1,...s})=>t(Dn,{id:n,label:e,errorMessage:r,"data-error-testid":a,disabled:s.disabled,children:t(Dp,{id:`${n}-base`,"data-testid":i||n,error:!!r,enableSearch:o,...s})}),Select:({label:e,errorMessage:r,id:n="form-select","data-error-testid":a,"data-testid":i,enableSearch:o=!1,...s})=>t(Dn,{id:n,label:e,errorMessage:r,"data-error-testid":a,disabled:s.disabled,children:t(Wp,{id:`${n}-base`,"data-testid":i||n,error:!!r,enableSearch:o,...s})}),RangeSelect:({label:e,errorMessage:r,id:n="form-select","data-error-testid":a,"data-testid":i,enableSearch:o=!1,...s})=>t(Dn,{id:n,label:e,errorMessage:r,"data-error-testid":a,disabled:s.disabled,children:t(Vp,{id:`${n}-base`,"data-testid":i||n,error:!!r,enableSearch:o,...s})}),Textarea:Jp,Timepicker:({label:e,errorMessage:r,id:n="form-timepicker","data-error-testid":a,"data-testid":i,...o})=>t(Dn,{id:n,label:e,errorMessage:r,disabled:o.disabled,"data-error-testid":a,children:t(Am,{id:`${n}-base`,"data-testid":i||n,error:!!r,...o})}),TimeRangePicker:({label:e,errorMessage:r,id:n="form-timepicker","data-error-testid":a,"data-testid":i,...o})=>t(Dn,{id:n,label:e,errorMessage:r,disabled:o.disabled,"data-error-testid":a,children:t(Bm,{id:`${n}-base`,"data-testid":i||n,error:!!r,...o})}),CustomField:({id:e="form-custom-field","data-error-testid":r,children:n,...a})=>t(Dn,{id:e,"data-error-testid":r,...a,children:n}),UnitNumberInput:({label:e,errorMessage:r,id:n="form-unit-number-input","data-error-testid":a,"data-testid":i,...o})=>t(Dn,{id:n,label:e,errorMessage:r,"data-error-testid":a,disabled:o.disabled,children:t(Rm,{id:`${n}-base`,"data-testid":i||n,error:!!r,...o})}),PhoneNumberInput:({label:e,errorMessage:r,id:n="form-phone-number-input","data-error-testid":a,"data-testid":i,...o})=>t(Dn,{id:n,label:e,errorMessage:r,"data-error-testid":a,disabled:o.disabled,children:t(Rp,{id:`${n}-base`,"data-testid":i||n,error:!!r,...o})})};export{zm as Form};
//# sourceMappingURL=index.js.map
