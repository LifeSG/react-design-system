import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import a,{useState as i,useRef as o,useEffect as s,Children as l,cloneElement as c,isValidElement as d,createRef as u,PureComponent as h,useLayoutEffect as p,forwardRef as f,useCallback as m,useContext as g,useMemo as b,useImperativeHandle as y,useReducer as v}from"react";import{ICircleFillIcon as w}from"@lifesg/react-icons/i-circle-fill";import{ExternalIcon as $}from"@lifesg/react-icons/external";import x,{css as O,keyframes as S}from"styled-components";import _,{findDOMNode as k,unstable_batchedUpdates as j}from"react-dom";import{CrossIcon as D}from"@lifesg/react-icons/cross";import{ChevronDownIcon as C}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as M}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as P}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as F}from"@lifesg/react-icons";import{ExclamationCircleFillIcon as T}from"@lifesg/react-icons/exclamation-circle-fill";import{TickIcon as B}from"@lifesg/react-icons/tick";import{MagnifierIcon as E}from"@lifesg/react-icons/magnifier";import{TriangleForwardFillIcon as A}from"@lifesg/react-icons/triangle-forward-fill";import{ChevronUpIcon as N}from"@lifesg/react-icons/chevron-up";import{CircleIcon as I}from"@lifesg/react-icons/circle";import{CircleDotIcon as L}from"@lifesg/react-icons/circle-dot";import{SquareIcon as z}from"@lifesg/react-icons/square";import{SquareTickFillIcon as R}from"@lifesg/react-icons/square-tick-fill";function H(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}function V(e,t,r,n){return new(r||(r=Promise))((function(a,i){function o(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}l((n=n.apply(e,t||[])).next())}))}var W,Y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},U={exports:{}};W=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
  \************************************************************/(e,t,r)=>{var n,a=r(/*! react-is */"./node_modules/react-is/index.js"),i=r(/*! object-assign */"./node_modules/object-assign/index.js"),o=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",h={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(c),arrayOf:function(e){return m((function(t,r,n,a,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new f("Invalid "+a+" `"+i+"` of type `"+v(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,n,a,i+"["+l+"]",o);if(c instanceof Error)return c}return null}))},element:m((function(t,r,n,a,i){var o=t[r];return e(o)?null:new f("Invalid "+a+" `"+i+"` of type `"+v(o)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:m((function(e,t,r,n,i){var o=e[t];return a.isValidElementType(o)?null:new f("Invalid "+n+" `"+i+"` of type `"+v(o)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,r,n,a,i){if(!(t[r]instanceof e)){var o=e.name||u;return new f("Invalid "+a+" `"+i+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+o+"`.")}var s;return null}))},node:m((function(e,t,r,n,a){return y(e[t])?null:new f("Invalid "+n+" `"+a+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,r,n,a,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=v(l);if("object"!==c)return new f("Invalid "+a+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,n,a,i+"."+d,o);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,r,n,a,i){for(var o=t[r],s=0;s<e.length;s++)if(p(o,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new f("Invalid "+a+" `"+i+"` of value `"+String(o)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+$(r)+" at index "+t+"."),c}return m((function(t,r,n,a,i){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,r,n,a,i,o);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new f("Invalid "+a+" `"+i+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,r,n,a,i){var s=t[r],l=v(s);if("object"!==l)return new f("Invalid "+a+" `"+i+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return b(n,a,i,c,w(d));var u=d(s,c,n,a,i+"."+c,o);if(u)return u}return null}))},exact:function(e){return m((function(t,r,n,a,l){var c=t[r],d=v(c);if("object"!==d)return new f("Invalid "+a+" `"+l+"` of type `"+d+"` supplied to `"+n+"`, expected `object`.");var u=i({},t[r],e);for(var h in u){var p=e[h];if(s(e,h)&&"function"!=typeof p)return b(n,a,l,h,w(p));if(!p)return new f("Invalid "+a+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=p(c,h,n,a,l+"."+h,o);if(m)return m}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var r={},a=0;function i(i,s,l,c,d,h,p){if(c=c||u,h=h||l,p!==o){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!r[g]&&a<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[g]=!0,a++)}}return null==s[l]?i?null===s[l]?new f("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new f("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,d,h)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function g(e){return m((function(t,r,n,a,i,o){var s=t[r];return v(s)!==e?new f("Invalid "+a+" `"+i+"` of type `"+w(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,r,n,a){return new f((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+a+"`.")}function y(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(y);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e[d]);if("function"==typeof t)return t}(t);if(!n)return!1;var a,i=n.call(t);if(n!==t.entries){for(;!(a=i.next()).done;)if(!y(a.value))return!1}else for(;!(a=i.next()).done;){var o=a.value;if(o&&!y(o[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function $(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var p=e.type;switch(p){case c:case d:case a:case o:case i:case h:return p;default:var g=p&&p.$$typeof;switch(g){case l:case u:case m:case f:case s:return g;default:return t}}case n:return t}}}var $=c,x=d,O=l,S=s,_=r,k=u,j=a,D=m,C=f,M=n,P=o,F=i,T=h,B=!1;function E(e){return w(e)===d}t.AsyncMode=$,t.ConcurrentMode=x,t.ContextConsumer=O,t.ContextProvider=S,t.Element=_,t.ForwardRef=k,t.Fragment=j,t.Lazy=D,t.Memo=C,t.Portal=M,t.Profiler=P,t.StrictMode=F,t.Suspense=T,t.isAsyncMode=function(e){return B||(B=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),E(e)||w(e)===c},t.isConcurrentMode=E,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===u},t.isFragment=function(e){return w(e)===a},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===f},t.isPortal=function(e){return w(e)===n},t.isProfiler=function(e){return w(e)===o},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===d||e===o||e===i||e===h||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===f||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===y||e.$$typeof===v||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
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
  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})(),U.exports=W(a);const q={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var Q=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},K="object"==typeof Y&&Y&&Y.Object===Object&&Y,G=K,Z="object"==typeof self&&self&&self.Object===Object&&self,X=G||Z||Function("return this")(),J=X,ee=function(){return J.Date.now()},te=/\s/;var re=function(e){for(var t=e.length;t--&&te.test(e.charAt(t)););return t},ne=/^\s+/;var ae=function(e){return e?e.slice(0,re(e)+1).replace(ne,""):e},ie=X.Symbol,oe=ie,se=Object.prototype,le=se.hasOwnProperty,ce=se.toString,de=oe?oe.toStringTag:void 0;var ue=function(e){var t=le.call(e,de),r=e[de];try{e[de]=void 0;var n=!0}catch(e){}var a=ce.call(e);return n&&(t?e[de]=r:delete e[de]),a},he=Object.prototype.toString;var pe=ue,fe=function(e){return he.call(e)},me=ie?ie.toStringTag:void 0;var ge=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":me&&me in Object(e)?pe(e):fe(e)};var be=function(e){return null!=e&&"object"==typeof e},ye=ge,ve=be;var we=function(e){return"symbol"==typeof e||ve(e)&&"[object Symbol]"==ye(e)},$e=ae,xe=Q,Oe=we,Se=/^[-+]0x[0-9a-f]+$/i,_e=/^0b[01]+$/i,ke=/^0o[0-7]+$/i,je=parseInt;var De=function(e){if("number"==typeof e)return e;if(Oe(e))return NaN;if(xe(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=xe(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=$e(e);var r=_e.test(e);return r||ke.test(e)?je(e.slice(2),r?2:8):Se.test(e)?NaN:+e},Ce=Q,Me=ee,Pe=De,Fe=Math.max,Te=Math.min;var Be=function(e,t,r){var n,a,i,o,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var r=n,i=a;return n=a=void 0,c=t,o=e.apply(i,r)}function f(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=i}function m(){var e=Me();if(f(e))return g(e);s=setTimeout(m,function(e){var r=t-(e-l);return u?Te(r,i-(e-c)):r}(e))}function g(e){return s=void 0,h&&n?p(e):(n=a=void 0,o)}function b(){var e=Me(),r=f(e);if(n=arguments,a=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),d?p(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,t),p(l)}return void 0===s&&(s=setTimeout(m,t)),o}return t=Pe(t)||0,Ce(r)&&(d=!!r.leading,i=(u="maxWait"in r)?Fe(Pe(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=a=s=void 0},b.flush=function(){return void 0===s?o:g(Me())},b};var Ee=Array.isArray,Ae=Ee,Ne=we,Ie=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Le=/^\w*$/;var ze=function(e,t){if(Ae(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ne(e))||(Le.test(e)||!Ie.test(e)||null!=t&&e in Object(t))},Re=ge,He=Q;var Ve,We=function(e){if(!He(e))return!1;var t=Re(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Ye=X["__core-js_shared__"],Ue=(Ve=/[^.]+$/.exec(Ye&&Ye.keys&&Ye.keys.IE_PROTO||""))?"Symbol(src)_1."+Ve:"";var qe=function(e){return!!Ue&&Ue in e},Qe=Function.prototype.toString;var Ke=function(e){if(null!=e){try{return Qe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ge=We,Ze=qe,Xe=Q,Je=Ke,et=/^\[object .+?Constructor\]$/,tt=Function.prototype,rt=Object.prototype,nt=tt.toString,at=rt.hasOwnProperty,it=RegExp("^"+nt.call(at).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ot=function(e){return!(!Xe(e)||Ze(e))&&(Ge(e)?it:et).test(Je(e))},st=function(e,t){return null==e?void 0:e[t]};var lt=function(e,t){var r=st(e,t);return ot(r)?r:void 0},ct=lt(Object,"create"),dt=ct;var ut=function(){this.__data__=dt?dt(null):{},this.size=0};var ht=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},pt=ct,ft=Object.prototype.hasOwnProperty;var mt=function(e){var t=this.__data__;if(pt){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ft.call(t,e)?t[e]:void 0},gt=ct,bt=Object.prototype.hasOwnProperty;var yt=ct;var vt=ut,wt=ht,$t=mt,xt=function(e){var t=this.__data__;return gt?void 0!==t[e]:bt.call(t,e)},Ot=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=yt&&void 0===t?"__lodash_hash_undefined__":t,this};function St(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}St.prototype.clear=vt,St.prototype.delete=wt,St.prototype.get=$t,St.prototype.has=xt,St.prototype.set=Ot;var _t=St;var kt=function(){this.__data__=[],this.size=0};var jt=function(e,t){return e===t||e!=e&&t!=t},Dt=jt;var Ct=function(e,t){for(var r=e.length;r--;)if(Dt(e[r][0],t))return r;return-1},Mt=Ct,Pt=Array.prototype.splice;var Ft=Ct;var Tt=Ct;var Bt=Ct;var Et=kt,At=function(e){var t=this.__data__,r=Mt(t,e);return!(r<0)&&(r==t.length-1?t.pop():Pt.call(t,r,1),--this.size,!0)},Nt=function(e){var t=this.__data__,r=Ft(t,e);return r<0?void 0:t[r][1]},It=function(e){return Tt(this.__data__,e)>-1},Lt=function(e,t){var r=this.__data__,n=Bt(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function zt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}zt.prototype.clear=Et,zt.prototype.delete=At,zt.prototype.get=Nt,zt.prototype.has=It,zt.prototype.set=Lt;var Rt=zt,Ht=lt(X,"Map"),Vt=_t,Wt=Rt,Yt=Ht;var Ut=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var qt=function(e,t){var r=e.__data__;return Ut(t)?r["string"==typeof t?"string":"hash"]:r.map},Qt=qt;var Kt=qt;var Gt=qt;var Zt=qt;var Xt=function(){this.size=0,this.__data__={hash:new Vt,map:new(Yt||Wt),string:new Vt}},Jt=function(e){var t=Qt(this,e).delete(e);return this.size-=t?1:0,t},er=function(e){return Kt(this,e).get(e)},tr=function(e){return Gt(this,e).has(e)},rr=function(e,t){var r=Zt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function nr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}nr.prototype.clear=Xt,nr.prototype.delete=Jt,nr.prototype.get=er,nr.prototype.has=tr,nr.prototype.set=rr;var ar=nr,ir=ar;function or(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return r.cache=i.set(a,o)||i,o};return r.cache=new(or.Cache||ir),r}or.Cache=ir;var sr=or;var lr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,cr=/\\(\\)?/g,dr=function(e){var t=sr(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(lr,(function(e,r,n,a){t.push(n?a.replace(cr,"$1"):r||e)})),t}));var ur=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},hr=Ee,pr=we,fr=ie?ie.prototype:void 0,mr=fr?fr.toString:void 0;var gr=function e(t){if("string"==typeof t)return t;if(hr(t))return ur(t,e)+"";if(pr(t))return mr?mr.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},br=gr;var yr=Ee,vr=ze,wr=dr,$r=function(e){return null==e?"":br(e)};var xr=function(e,t){return yr(e)?e:vr(e,t)?[e]:wr($r(e))},Or=we;var Sr=function(e){if("string"==typeof e||Or(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},_r=xr,kr=Sr;var jr=function(e,t){for(var r=0,n=(t=_r(t,e)).length;null!=e&&r<n;)e=e[kr(t[r++])];return r&&r==n?e:void 0},Dr=jr;var Cr=function(e,t,r){var n=null==e?void 0:Dr(e,t);return void 0===n?r:n};const Mr=(e,t,r)=>t?Cr(r,t)||Cr(e,t):r||e,Pr=(e,t)=>{const r=t||e.defaultValue;return Cr(e.collections,r)};var Fr;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Fr||(Fr={}));const Tr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Br=e=>t=>{const r=t.theme,n=Pr(Tr,r[Fr.colorScheme]);return r.options&&r.options.color?Mr(n,e,r.options.color):Mr(n,e)},Er={Brand:{1:Br("Brand.1"),2:Br("Brand.2"),3:Br("Brand.3"),4:Br("Brand.4"),5:Br("Brand.5"),6:Br("Brand.6")},Primary:Br("Primary"),PrimaryDark:Br("PrimaryDark"),Secondary:Br("Secondary"),Accent:{Light:{1:Br("Accent.Light.1"),2:Br("Accent.Light.2"),3:Br("Accent.Light.3"),4:Br("Accent.Light.4"),5:Br("Accent.Light.5"),6:Br("Accent.Light.6")},Dark:{1:Br("Accent.Dark.1"),2:Br("Accent.Dark.2"),3:Br("Accent.Dark.3")}},Neutral:{1:Br("Neutral.1"),2:Br("Neutral.2"),3:Br("Neutral.3"),4:Br("Neutral.4"),5:Br("Neutral.5"),6:Br("Neutral.6"),7:Br("Neutral.7"),8:Br("Neutral.8")},Validation:{Green:{Text:Br("Validation.Green.Text"),Icon:Br("Validation.Green.Icon"),Border:Br("Validation.Green.Border"),Background:Br("Validation.Green.Background")},Orange:{Text:Br("Validation.Orange.Text"),Icon:Br("Validation.Orange.Icon"),Border:Br("Validation.Orange.Border"),Background:Br("Validation.Orange.Background"),Badge:Br("Validation.Orange.Badge")},Red:{Text:Br("Validation.Red.Text"),Icon:Br("Validation.Red.Icon"),Border:Br("Validation.Red.Border"),Background:Br("Validation.Red.Background")},Blue:{Text:Br("Validation.Blue.Text"),Icon:Br("Validation.Blue.Icon"),Border:Br("Validation.Blue.Border"),Background:Br("Validation.Blue.Background")}},Shadow:{Accent:Br("Shadow.Accent"),Red:Br("Shadow.Red"),Elevation:Br("Shadow.Elevation")}},Ar={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Nr={collections:{base:{D1:{fontFamily:Ar.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ar.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ar.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ar.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ar.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ar.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ar.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ar.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ar.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ar.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ar.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ar.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ar.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ar.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ir=e=>t=>{const r=t.theme,n=Pr(Nr,r[Fr.textStyleScheme]);return r.options&&r.options.textStyle?Mr(n,e,r.options.textStyle):Mr(n,e)},Lr={D1:{fontFamily:Ir("D1.fontFamily"),fontSize:Ir("D1.fontSize"),fontWeight:Ir("D1.fontWeight"),lineHeight:Ir("D1.lineHeight"),letterSpacing:Ir("D1.letterSpacing")},D2:{fontFamily:Ir("D2.fontFamily"),fontSize:Ir("D2.fontSize"),fontWeight:Ir("D2.fontWeight"),lineHeight:Ir("D2.lineHeight"),letterSpacing:Ir("D2.letterSpacing")},D3:{fontFamily:Ir("D3.fontFamily"),fontSize:Ir("D3.fontSize"),fontWeight:Ir("D3.fontWeight"),lineHeight:Ir("D3.lineHeight"),letterSpacing:Ir("D3.letterSpacing")},D4:{fontFamily:Ir("D4.fontFamily"),fontSize:Ir("D4.fontSize"),fontWeight:Ir("D4.fontWeight"),lineHeight:Ir("D4.lineHeight"),letterSpacing:Ir("D4.letterSpacing")},DBody:{fontFamily:Ir("DBody.fontFamily"),fontSize:Ir("DBody.fontSize"),fontWeight:Ir("DBody.fontWeight"),lineHeight:Ir("DBody.lineHeight"),letterSpacing:Ir("DBody.letterSpacing")},H1:{fontFamily:Ir("H1.fontFamily"),fontSize:Ir("H1.fontSize"),fontWeight:Ir("H1.fontWeight"),lineHeight:Ir("H1.lineHeight"),letterSpacing:Ir("H1.letterSpacing")},H2:{fontFamily:Ir("H2.fontFamily"),fontSize:Ir("H2.fontSize"),fontWeight:Ir("H2.fontWeight"),lineHeight:Ir("H2.lineHeight"),letterSpacing:Ir("H2.letterSpacing")},H3:{fontFamily:Ir("H3.fontFamily"),fontSize:Ir("H3.fontSize"),fontWeight:Ir("H3.fontWeight"),lineHeight:Ir("H3.lineHeight"),letterSpacing:Ir("H3.letterSpacing")},H4:{fontFamily:Ir("H4.fontFamily"),fontSize:Ir("H4.fontSize"),fontWeight:Ir("H4.fontWeight"),lineHeight:Ir("H4.lineHeight"),letterSpacing:Ir("H4.letterSpacing")},H5:{fontFamily:Ir("H5.fontFamily"),fontSize:Ir("H5.fontSize"),fontWeight:Ir("H5.fontWeight"),lineHeight:Ir("H5.lineHeight"),letterSpacing:Ir("H5.letterSpacing")},H6:{fontFamily:Ir("H6.fontFamily"),fontSize:Ir("H6.fontSize"),fontWeight:Ir("H6.fontWeight"),lineHeight:Ir("H6.lineHeight"),letterSpacing:Ir("H6.letterSpacing")},Body:{fontFamily:Ir("Body.fontFamily"),fontSize:Ir("Body.fontSize"),fontWeight:Ir("Body.fontWeight"),lineHeight:Ir("Body.lineHeight"),letterSpacing:Ir("Body.letterSpacing")},BodySmall:{fontFamily:Ir("BodySmall.fontFamily"),fontSize:Ir("BodySmall.fontSize"),fontWeight:Ir("BodySmall.fontWeight"),lineHeight:Ir("BodySmall.lineHeight"),letterSpacing:Ir("BodySmall.letterSpacing")},XSmall:{fontFamily:Ir("XSmall.fontFamily"),fontSize:Ir("XSmall.fontSize"),fontWeight:Ir("XSmall.fontWeight"),lineHeight:Ir("XSmall.lineHeight"),letterSpacing:Ir("XSmall.letterSpacing")}},zr=e=>{switch(e){case 700:case"bold":return Ar.Bold;case 600:case"semibold":return Ar.Semibold;case 300:case"light":return Ar.Light;case 400:case"regular":return Ar.Regular;default:return""}},Rr=(e,t)=>r=>{var n;const a=Lr[e].fontFamily(r),i=Lr[e].fontWeight(r);return Object.values(Ar).includes(a)?O`
                font-family: ${zr(t)||zr(i)||a};
                font-weight: normal !important;
            `:O`
            font-family: ${a};
            font-weight: ${null!==(n=Hr(t)||i)&&void 0!==n?n:"normal"};
        `},Hr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Vr=Rr,Wr=(e,t,r=!1)=>n=>{const a=Lr[e],i=a.fontSize(n);return O`
            ${Rr(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${O`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},Yr=(e=!1,t=!1)=>t?O`
            display: block;
        `:e?O`
            display: inline;
        `:O`
            display: block;
        `;var Ur;!function(e){e.D1=x.h1`
        ${e=>O`
                ${Wr("D1",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Yr(e.inline,e.paragraph)}
            `}
    `,e.D2=x.h1`
        ${e=>O`
                ${Wr("D2",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Yr(e.inline,e.paragraph)}
            `}
    `,e.D3=x.h1`
        ${e=>O`
                ${Wr("D3",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Yr(e.inline,e.paragraph)}
            `}
    `,e.D4=x.h1`
        ${e=>O`
                ${Wr("D4",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Yr(e.inline,e.paragraph)}
            `}
    `,e.DBody=x.h1`
        ${e=>O`
                ${Wr("DBody",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Yr(e.inline,e.paragraph)}
            `}
    `,e.H1=x.h1`
        ${e=>O`
                ${Wr("H1",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Yr(e.inline,e.paragraph)}
            `}
    `,e.H2=x.h2`
        ${e=>O`
                ${Wr("H2",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Yr(e.inline,e.paragraph)}
            `}
    `,e.H3=x.h3`
        ${e=>O`
                ${Wr("H3",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Yr(e.inline,e.paragraph)}
            `}
    `,e.H4=x.h4`
        ${e=>O`
                ${Wr("H4",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Yr(e.inline,e.paragraph)}
            `}
    `,e.H5=x.h5`
        ${e=>O`
                ${Wr("H5",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Yr(e.inline,e.paragraph)}
            `}
    `,e.H6=x.h6`
        ${e=>O`
                ${Wr("H6",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Yr(e.inline,e.paragraph)}
            `}
    `,e.Body=x.p`
        ${e=>O`
                ${Wr("Body",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Yr(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=x.p`
        ${e=>O`
                ${Wr("BodySmall",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Yr(e.inline,e.paragraph)}
            `}
    `,e.XSmall=x.span`
        ${e=>O`
                ${Wr("XSmall",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Yr(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Kr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Kr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ur||(Ur={}));const qr=x.a`
    ${e=>O`
            ${Wr(e.textStyle,e.weight)}
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
`,Qr=x($)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Kr=r=>{var{external:n=!1,children:a}=r,i=H(r,["external","children"]);return e(qr,Object.assign({},i,{children:[a,n&&t(Qr,{})]}))},Gr=x.div`
    border-radius: 0.5rem;
    background: ${Er.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Zr=e=>{var{children:r}=e,n=H(e,["children"]);const a=n["data-testid"]||"card";return t(Gr,Object.assign({},n,{"data-testid":a},{children:"string"==typeof r?t(Ur.Body,{children:r}):r}))},Xr=x.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return O`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Jr=x.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=O`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=O`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=O`
                transition: none;
            `),t}}
`,en=({show:e=!1,rootId:r,onOverlayClick:n,children:l,backgroundOpacity:c,backgroundBlur:d=!0,disableTransition:u=!1,enableOverlayClick:h=!1,zIndex:p,id:f})=>{const[m,g]=i(null),[b,y]=i(),v=o(),w=o(!1),$=o(null),x=l&&a.cloneElement(l,{ref:$}),O=f?`lifesg-ds-overlay-root-${f}`:"lifesg-ds-overlay-root";s((()=>{const t=!0===w.current;if(t||(w.current=!0),e){const e=j();if(S(e),!e){const e=setTimeout((()=>{C("add")}),200);return()=>clearTimeout(e)}}else{if(!t)return;if(!v.current){const e=setTimeout((()=>{C("remove")}),200);return()=>clearTimeout(e)}}}),[e]),s((()=>{g(k());const e=j();return S(e),e||D(),()=>{C("remove")}}),[]);const S=e=>{v.current=e,y(e)},k=()=>document&&r?document.getElementById(r):document?document.body:null,j=()=>document.body.classList.contains(rn),D=()=>{if(!document.getElementById(tn)){const e=document.createElement("style");e.id=tn;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${rn} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${rn}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},C=e=>{const t=document.body.classList.contains(rn);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(rn):document.body.classList.add(rn)},M=e=>{var t;const r=null===(t=$.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&h&&(e.preventDefault(),n())};return m?_.createPortal(t(Xr,Object.assign({id:O,"data-testid":O,$show:e,zIndex:p,$stacked:b},{children:l&&t(Jr,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:c||(b?.5:.8),$backgroundBlur:d,$disableTransition:u,$enableOverlayClick:h,onClick:M},{children:x}))})),m):null},tn="lifesg-ds-overlay-stylesheet",rn="lifesg-ds-overlay-open",nn=e=>Object.keys(q).reduce(((t,r)=>{const n=q[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),an=nn("max-width"),on=(nn("min-width"),q),sn=x.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${an.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,ln=e=>{var{id:r="modal",show:n,animationFrom:a="bottom",children:o,enableOverlayClick:l=!0,rootComponentId:c,zIndex:d,onOverlayClick:u,dismissKeyboardOnShow:h=!0}=e,p=H(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[f,m]=i(),[g,b]=i();s((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{window.visualViewport.removeEventListener("resize",v)}):(y(),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)})),[]),s((()=>{var e,t;n&&h&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]);const y=()=>{const e=.01*window.innerHeight;m(e)},v=()=>{const e=.01*window.visualViewport.height;m(e),b(window.visualViewport.offsetTop)};return t(en,Object.assign({"data-testid":`${r}-overlay`,show:n,enableOverlayClick:l,onOverlayClick:u,id:r,rootId:c,zIndex:d},{children:t(sn,Object.assign({show:n,animationFrom:a,"data-testid":r,verticalHeight:f,offsetTop:g},p,{children:o}))}))},cn=x.button`
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

        ${({$highlight:e})=>e&&O`
                background-color: ${Er.Neutral[7]};
            `}
    }
`,dn=a.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=H(e,["children","focusHighlight","focusOutline","type"]);return t(cn,Object.assign({ref:r,$outline:i,$highlight:a,type:o},s,{children:n}))})),un=x.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Er.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${an.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,hn=x(dn)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Er.Accent.Light[1]};
    }
`,pn=x(D)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Er.Neutral[4]};
`,fn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",mn=x.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?O`
            visibility: visible;
            opacity: 1;
            transition: ${fn};
            z-index: 50;
        `:O`
            visibility: hidden;
            opacity: 0;
            transition: ${fn};
            z-index: -1;
        `}
    ${e=>(e=>{switch(e){case"top-center":return O`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return O`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return O`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return O`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return O`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return O`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `}})(e.$offset)}

	${an.mobileL} {
        display: none;
    }
`,gn=x((r=>{var{id:n="modal-box",children:a,onClose:i,showCloseButton:o=!0}=r,s=H(r,["id","children","onClose","showCloseButton"]);return e(un,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()}},{children:[o&&t(hn,Object.assign({onClick:i,"data-testid":"close-button",focusHighlight:!1},{children:t(pn,{})})),a]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`;x.div`
    position: relative;
    width: fit-content;
`,x.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`;const bn=x.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,yn=n=>{var{children:a,visible:l,onMobileClose:c}=n,d=H(n,["children","visible","onMobileClose"]);const u=d["data-testid"]||"popover",[h,p]=i("none"),f=o(null),m=U.exports.useMediaQuery({maxWidth:q.mobileL}),g=o(h);s((()=>(v(),window.addEventListener("resize",Be(b,300)),()=>{window.removeEventListener("resize",Be(b,300))})),[]);const b=()=>{v()},y=()=>{c&&c()},v=()=>{const e=w();var t;e&&(t=e,g.current=t,p(t))},w=()=>{if(f.current){const e=f.current.getBoundingClientRect(),t=24,r=e.y<t,n=window.innerWidth-t;return e.x<t?r?"top-left":"left":e.x+e.width>n?r?"top-right":"right":("top-left"===g.current||"left"===g.current)&&e.x-e.width/2>t||("top-right"===g.current||"right"===g.current)&&e.x+2*e.width<n?r?"top-center":"none":r?"top-center":void 0}},$=()=>"string"==typeof a?t(Ur.BodySmall,{children:a}):a;return e(r,{children:[t(mn,Object.assign({ref:f,"data-testid":u,$visible:l,$offset:h},d,{children:t(Zr,{children:$()})})),m&&t(ln,Object.assign({show:l,onOverlayClick:y},{children:t(gn,Object.assign({onClose:y},{children:t(bn,{children:$()})}))}))]})},vn=x.button`
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
`,wn=x.div`
    display: inline;
    position: relative;
    width: fit-content;
`,$n=e=>{var{addonType:r="popover",icon:n,"data-testid":a}=e,i=H(e,["addonType","icon","data-testid"]);return t(vn,Object.assign({"data-testid":a},i,{children:n||t(w,{id:`${r}-icon`})}))},xn=({addon:r})=>{const[n,a]=i(!1),l=o(),c=o(!1),d=U.exports.useMediaQuery({maxWidth:q.mobileL}),u=e=>{c.current=e,a(e)};s((()=>{if(!d)return document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}}),[]);const h=e=>{l&&!l.current.contains(e.target)&&c.current&&u(!1)};return e(wn,Object.assign({ref:l,id:"addon-popover-wrapper"},{children:[t(yn,Object.assign({visible:n,id:r.id,"data-testid":r["data-testid"],onMobileClose:()=>{n&&u(!1)}},{children:r.content})),t($n,{addonType:r.type,icon:r.icon,id:`popover-hoc-trigger${r["data-testid"]&&`-${r["data-testid"]}`}`,onClick:()=>u(!n),"aria-label":"popover-button",type:"button"})]}))};var On;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(On||(On={}));const Sn=x.label`
    ${Wr("H5","semibold")}

    color: ${e=>e.disabled?Er.Neutral[4](e):Er.Neutral[3](e)};
    margin-bottom: 0.5rem;
    display: inline-block;

    #popover-hoc-wrapper {
        display: inline;
    }

    #popover-hoc-button {
        vertical-align: bottom;
    }
`,_n=x(Ur.H6)`
    color: ${Er.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`,kn=x(Ur.BodySmall)`
    color: ${e=>e.disabled?Er.Neutral[4](e):Er.Neutral[3](e)};
`,jn=r=>{var{children:n,addon:a,subtitle:i,"data-testid":o}=r,s=H(r,["children","addon","subtitle","data-testid"]);return e(Sn,Object.assign({},s,{children:[n,a&&a.type&&("popover"===a.type?a&&t(xn,{addon:a}):null),"string"==typeof i?t(kn,Object.assign({as:"span","data-testid":o?`${o}-subtitle`:"subtitle"},s,{children:i})):i]}))},Dn=x.div`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`,Cn=({label:r,errorMessage:n,id:a,disabled:i,children:o,"data-error-testid":s})=>{const d=()=>s||(a?`${a}-error-message`:"error-message"),u=()=>!!n;return e(Dn,{children:[r&&t(jn,"string"==typeof r?Object.assign({htmlFor:`${a}-base`,"data-testid":a?`${a}-label`:"form-label",disabled:i},{children:r}):Object.assign({htmlFor:`${a}-base`,"data-testid":a?`${a}-label`:"form-label",disabled:i},r)),(()=>{const e={"aria-invalid":u(),"aria-describedby":u()&&d()};return l.map(o,(t=>c(t,e)))})(),n&&t(_n,Object.assign({id:d(),weight:"semibold",tabIndex:0,"data-testid":d()},{children:n}))]})};var Mn=function(e,t){return Mn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},Mn(e,t)};var Pn=function(){return Pn=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Pn.apply(this,arguments)};var Fn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Tn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Bn="object"==typeof Fn&&Fn&&Fn.Object===Object&&Fn,En="object"==typeof self&&self&&self.Object===Object&&self,An=Bn||En||Function("return this")(),Nn=An,In=function(){return Nn.Date.now()},Ln=/\s/;var zn=function(e){for(var t=e.length;t--&&Ln.test(e.charAt(t)););return t},Rn=/^\s+/;var Hn=function(e){return e?e.slice(0,zn(e)+1).replace(Rn,""):e},Vn=An.Symbol,Wn=Vn,Yn=Object.prototype,Un=Yn.hasOwnProperty,qn=Yn.toString,Qn=Wn?Wn.toStringTag:void 0;var Kn=function(e){var t=Un.call(e,Qn),r=e[Qn];try{e[Qn]=void 0;var n=!0}catch(e){}var a=qn.call(e);return n&&(t?e[Qn]=r:delete e[Qn]),a},Gn=Object.prototype.toString;var Zn=Kn,Xn=function(e){return Gn.call(e)},Jn=Vn?Vn.toStringTag:void 0;var ea=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Jn&&Jn in Object(e)?Zn(e):Xn(e)},ta=function(e){return null!=e&&"object"==typeof e};var ra=Hn,na=Tn,aa=function(e){return"symbol"==typeof e||ta(e)&&"[object Symbol]"==ea(e)},ia=/^[-+]0x[0-9a-f]+$/i,oa=/^0b[01]+$/i,sa=/^0o[0-7]+$/i,la=parseInt;var ca=Tn,da=In,ua=function(e){if("number"==typeof e)return e;if(aa(e))return NaN;if(na(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=na(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ra(e);var r=oa.test(e);return r||sa.test(e)?la(e.slice(2),r?2:8):ia.test(e)?NaN:+e},ha=Math.max,pa=Math.min;var fa=function(e,t,r){var n,a,i,o,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var r=n,i=a;return n=a=void 0,c=t,o=e.apply(i,r)}function f(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=i}function m(){var e=da();if(f(e))return g(e);s=setTimeout(m,function(e){var r=t-(e-l);return u?pa(r,i-(e-c)):r}(e))}function g(e){return s=void 0,h&&n?p(e):(n=a=void 0,o)}function b(){var e=da(),r=f(e);if(n=arguments,a=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),d?p(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,t),p(l)}return void 0===s&&(s=setTimeout(m,t)),o}return t=ua(t)||0,ca(r)&&(d=!!r.leading,i=(u="maxWait"in r)?ha(ua(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=a=s=void 0},b.flush=function(){return void 0===s?o:g(da())},b},ma=fa,ga=Tn;var ba=function(e,t,r){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ga(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),ma(e,t,{leading:n,maxWait:t,trailing:a})},ya=function(e,t,r,n){switch(t){case"debounce":return fa(e,r,n);case"throttle":return ba(e,r,n);default:return e}},va=function(e){return"function"==typeof e},wa=function(){return"undefined"==typeof window},$a=function(e){return e instanceof Element||e instanceof HTMLDocument},xa=function(e,t,r,n){return function(a){var i=a.width,o=a.height;t((function(t){return t.width===i&&t.height===o||t.width===i&&!n||t.height===o&&!r?t:(e&&va(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!wa()){t&&t.current&&(r.targetRef.current=t.current);var a=r.getElement();a&&(r.observableElement&&r.observableElement===a||(r.observableElement=a,r.resizeObserver.observe(a,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(wa())return null;if(t)return document.querySelector(t);if(n&&$a(n))return n;if(r.targetRef&&$a(r.targetRef.current))return r.targetRef.current;var a=k(r);if(!a)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,a=void 0===n||n,i=t.handleHeight,o=void 0===i||i,s=t.onResize;if(a||o){var l=xa(s,r.setState.bind(r),a,o);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,a=t.height;!r.skipOnMount&&!wa()&&l({width:n,height:a}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return va(t)?"renderProp":va(n)?"childFunction":d(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,a=t.refreshMode,i=t.refreshRate,o=void 0===i?1e3:i,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=u(),r.observableElement=null,wa()||(r.resizeHandler=ya(r.createResizeHandler,a,o,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}Mn(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){wa()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,a=t.children,i=t.nodeType,o=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=a)(l);case"child":if((e=a).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=a).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(o,null)}}}(h);var Oa=wa()?s:p;function Sa(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,l=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,h=void 0===u||u,p=e.targetRef,f=e.observerOptions,m=e.onResize,g=o(r),b=o(null),y=null!=p?p:b,v=o(),w=i({width:void 0,height:void 0}),$=w[0],x=w[1];return Oa((function(){if(!wa()){var e=xa(m,x,d,h);v.current=ya((function(t){(d||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,a=r.height;!g.current&&!wa()&&e({width:n,height:a}),g.current=!1}))}),n,s,l);var t=new window.ResizeObserver(v.current);return y.current&&t.observe(y.current,f),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,d,h,m,f,y.current]),Pn({ref:y},$)}let _a=Ra();const ka=e=>Na(e,_a);let ja=Ra();ka.write=e=>Na(e,ja);let Da=Ra();ka.onStart=e=>Na(e,Da);let Ca=Ra();ka.onFrame=e=>Na(e,Ca);let Ma=Ra();ka.onFinish=e=>Na(e,Ma);let Pa=[];ka.setTimeout=(e,t)=>{let r=ka.now()+t,n=()=>{let e=Pa.findIndex((e=>e.cancel==n));~e&&Pa.splice(e,1),Ea-=~e?1:0},a={time:r,handler:e,cancel:n};return Pa.splice(Fa(r),0,a),Ea+=1,Ia(),a};let Fa=e=>~(~Pa.findIndex((t=>t.time>e))||~Pa.length);ka.cancel=e=>{Da.delete(e),Ca.delete(e),Ma.delete(e),_a.delete(e),ja.delete(e)},ka.sync=e=>{Aa=!0,ka.batchedUpdates(e),Aa=!1},ka.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,ka.onStart(r)}return n.handler=e,n.cancel=()=>{Da.delete(r),t=null},n};let Ta="undefined"!=typeof window?window.requestAnimationFrame:()=>{};ka.use=e=>Ta=e,ka.now="undefined"!=typeof performance?()=>performance.now():Date.now,ka.batchedUpdates=e=>e(),ka.catch=console.error,ka.frameLoop="always",ka.advance=()=>{"demand"!==ka.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):za()};let Ba=-1,Ea=0,Aa=!1;function Na(e,t){Aa?(t.delete(e),e(0)):(t.add(e),Ia())}function Ia(){Ba<0&&(Ba=0,"demand"!==ka.frameLoop&&Ta(La))}function La(){~Ba&&(Ta(La),ka.batchedUpdates(za))}function za(){let e=Ba;Ba=ka.now();let t=Fa(Ba);t&&(Ha(Pa.splice(0,t),(e=>e.handler())),Ea-=t),Ea?(Da.flush(),_a.flush(e?Math.min(64,Ba-e):16.667),Ca.flush(),ja.flush(),Ma.flush()):Ba=-1}function Ra(){let e=new Set,t=e;return{add(r){Ea+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Ea-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Ea-=t.size,Ha(t,(t=>t(r)&&e.add(t))),Ea+=e.size,t=e)}}}function Ha(e,t){e.forEach((e=>{try{t(e)}catch(e){ka.catch(e)}}))}function Va(){}const Wa={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Ya(e,t){if(Wa.arr(e)){if(!Wa.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}const Ua=(e,t)=>e.forEach(t);function qa(e,t,r){if(Wa.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}const Qa=e=>Wa.und(e)?[]:Wa.arr(e)?e:[e];function Ka(e,t){if(e.size){const r=Array.from(e);e.clear(),Ua(r,t)}}const Ga=(e,...t)=>Ka(e,(e=>e(...t))),Za=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Xa,Ja,ei=null,ti=!1,ri=Va;var ni=Object.freeze({__proto__:null,get createStringInterpolator(){return Xa},get to(){return Ja},get colors(){return ei},get skipAnimation(){return ti},get willAdvance(){return ri},assign:e=>{e.to&&(Ja=e.to),e.now&&(ka.now=e.now),void 0!==e.colors&&(ei=e.colors),null!=e.skipAnimation&&(ti=e.skipAnimation),e.createStringInterpolator&&(Xa=e.createStringInterpolator),e.requestAnimationFrame&&ka.use(e.requestAnimationFrame),e.batchedUpdates&&(ka.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ri=e.willAdvance),e.frameLoop&&(ka.frameLoop=e.frameLoop)}});const ai=new Set;let ii=[],oi=[],si=0;const li={get idle(){return!ai.size&&!ii.length},start(e){si>e.priority?(ai.add(e),ka.onStart(ci)):(di(e),ka(hi))},advance:hi,sort(e){if(si)ka.onFrame((()=>li.sort(e)));else{const t=ii.indexOf(e);~t&&(ii.splice(t,1),ui(e))}},clear(){ii=[],ai.clear()}};function ci(){ai.forEach(di),ai.clear(),ka(hi)}function di(e){ii.includes(e)||ui(e)}function ui(e){ii.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(ii,(t=>t.priority>e.priority)),0,e)}function hi(e){const t=oi;for(let r=0;r<ii.length;r++){const n=ii[r];si=n.priority,n.idle||(ri(n),n.advance(e),n.idle||t.push(n))}return si=0,oi=ii,oi.length=0,ii=t,ii.length>0}const pi="[-+]?\\d*\\.?\\d+",fi=pi+"%";function mi(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const gi=new RegExp("rgb"+mi(pi,pi,pi)),bi=new RegExp("rgba"+mi(pi,pi,pi,pi)),yi=new RegExp("hsl"+mi(pi,fi,fi)),vi=new RegExp("hsla"+mi(pi,fi,fi,pi)),wi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,$i=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,xi=/^#([0-9a-fA-F]{6})$/,Oi=/^#([0-9a-fA-F]{8})$/;function Si(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function _i(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,a=2*r-n,i=Si(a,n,e+1/3),o=Si(a,n,e),s=Si(a,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function ki(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function ji(e){return(parseFloat(e)%360+360)%360/360}function Di(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Ci(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Mi(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=xi.exec(e))?parseInt(t[1]+"ff",16)>>>0:ei&&void 0!==ei[e]?ei[e]:(t=gi.exec(e))?(ki(t[1])<<24|ki(t[2])<<16|ki(t[3])<<8|255)>>>0:(t=bi.exec(e))?(ki(t[1])<<24|ki(t[2])<<16|ki(t[3])<<8|Di(t[4]))>>>0:(t=wi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Oi.exec(e))?parseInt(t[1],16)>>>0:(t=$i.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=yi.exec(e))?(255|_i(ji(t[1]),Ci(t[2]),Ci(t[3])))>>>0:(t=vi.exec(e))?(_i(ji(t[1]),Ci(t[2]),Ci(t[3]))|Di(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Pi=(e,t,r)=>{if(Wa.fun(e))return e;if(Wa.arr(e))return Pi({range:e,output:t,extrapolate:r});if(Wa.str(e.output[0]))return Xa(e);const n=e,a=n.output,i=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,a,i,o,s,l){let c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===a)return n;if(t===r)return e<=t?n:a;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=i(c),n===-1/0?c=-c:a===1/0?c+=n:c=c*(a-n)+n;return c}(e,i[t],i[t+1],a[t],a[t+1],l,o,s,n.map)}};const Fi=1.70158,Ti=1.525*Fi,Bi=Fi+1,Ei=2*Math.PI/3,Ai=2*Math.PI/4.5,Ni=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Ii={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Bi*e*e*e-Fi*e*e,easeOutBack:e=>1+Bi*Math.pow(e-1,3)+Fi*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Ti)/2:(Math.pow(2*e-2,2)*((Ti+1)*(2*e-2)+Ti)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ei),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ei)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Ai)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Ai)/2+1,easeInBounce:e=>1-Ni(1-e),easeOutBounce:Ni,easeInOutBounce:e=>e<.5?(1-Ni(1-2*e))/2:(1+Ni(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,a="end"===t?Math.floor(n):Math.ceil(n);return i=0,o=1,s=a/e,Math.min(Math.max(s,i),o);var i,o,s}};function Li(){return Li=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Li.apply(this,arguments)}const zi=Symbol.for("FluidValue.get"),Ri=Symbol.for("FluidValue.observers"),Hi=e=>Boolean(e&&e[zi]),Vi=e=>e&&e[zi]?e[zi]():e,Wi=e=>e[Ri]||null;function Yi(e,t){let r=e[Ri];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Ui{constructor(e){if(this[zi]=void 0,this[Ri]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");qi(this,e)}}const qi=(e,t)=>Gi(e,zi,t);function Qi(e,t){if(e[zi]){let r=e[Ri];r||Gi(e,Ri,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Ki(e,t){let r=e[Ri];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Ri]=null,e.observerRemoved&&e.observerRemoved(n,t)}}const Gi=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Zi=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Xi=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ji=new RegExp(`(${Zi.source})(%|[a-z]+)`,"i"),eo=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,to=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ro=e=>{const[t,r]=no(e);if(!t||Za())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&to.test(r)?ro(r):r||e},no=e=>{const t=to.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]};let ao;const io=(e,t,r,n,a)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${a})`,oo=e=>{ao||(ao=ei?new RegExp(`(${Object.keys(ei).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Vi(e).replace(to,ro).replace(Xi,Mi).replace(ao,Mi))),r=t.map((e=>e.match(Zi).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Pi(Li({},e,{output:t}))));return e=>{var r;const a=!Ji.test(t[0])&&(null==(r=t.find((e=>Ji.test(e))))?void 0:r.replace(Zi,""));let i=0;return t[0].replace(Zi,(()=>`${n[i++](e)}${a||""}`)).replace(eo,io)}},so="react-spring: ",lo=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${so}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},co=lo(console.warn);const uo=lo(console.warn);function ho(e){return Wa.str(e)&&("#"==e[0]||/\d/.test(e)||!Za()&&to.test(e)||e in(ei||{}))}const po=Za()?s:p,fo=()=>{const e=o(!1);return po((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function mo(){const e=i()[1],t=fo();return()=>{t.current&&e(Math.random())}}const go=e=>s(e,bo),bo=[];function yo(e){const t=o();return s((()=>{t.current=e})),t.current}const vo=Symbol.for("Animated:node"),wo=e=>e&&e[vo],$o=(e,t)=>{return r=e,n=vo,a=t,Object.defineProperty(r,n,{value:a,writable:!0,configurable:!0});var r,n,a},xo=e=>e&&e[vo]&&e[vo].getPayload();class Oo{constructor(){this.payload=void 0,$o(this,this)}getPayload(){return this.payload||[]}}class So extends Oo{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Wa.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new So(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Wa.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Wa.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class _o extends So{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Pi({output:[e,e]})}static create(e){return new _o(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Wa.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Pi({output:[this.getValue(),e]})),this._value=0,super.reset()}}const ko={dependencies:null};class jo extends Oo{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return qa(this.source,((r,n)=>{var a;(a=r)&&a[vo]===a?t[n]=r.getValue(e):Hi(r)?t[n]=Vi(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Ua(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return qa(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){ko.dependencies&&Hi(e)&&ko.dependencies.add(e);const t=xo(e);t&&Ua(t,(e=>this.add(e)))}}class Do extends jo{constructor(e){super(e)}static create(e){return new Do(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Co)),!0)}}function Co(e){return(ho(e)?_o:So).create(e)}function Mo(e){const t=wo(e);return t?t.constructor:Wa.arr(e)?Do:ho(e)?_o:So}function Po(){return Po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Po.apply(this,arguments)}const Fo=(e,t)=>{const r=!Wa.fun(e)||e.prototype&&e.prototype.isReactComponent;return f(((a,i)=>{const l=o(null),c=r&&m((e=>{l.current=function(e,t){e&&(Wa.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[d,u]=function(e,t){const r=new Set;ko.dependencies=r,e.style&&(e=Po({},e,{style:t.createAnimatedStyle(e.style)}));return e=new jo(e),ko.dependencies=null,[e,r]}(a,t),h=mo(),p=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&h()},f=new To(p,u),g=o();po((()=>(g.current=f,Ua(u,(e=>Qi(e,f))),()=>{g.current&&(Ua(g.current.deps,(e=>Ki(e,g.current))),ka.cancel(g.current.update))}))),s(p,[]),go((()=>()=>{const e=g.current;Ua(e.deps,(t=>Ki(t,e)))}));const b=t.getComponentProps(d.getValue());return n.createElement(e,Po({},b,{ref:c}))}))};class To{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&ka.write(this.update)}}const Bo=Symbol.for("AnimatedComponent"),Eo=e=>Wa.str(e)?e:e&&Wa.str(e.displayName)?e.displayName:Wa.fun(e)&&e.name||null;function Ao(){return Ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ao.apply(this,arguments)}function No(e,...t){return Wa.fun(e)?e(...t):e}const Io=(e,t)=>!0===e||!!(t&&e&&(Wa.fun(e)?e(t):Qa(e).includes(t))),Lo=(e,t)=>Wa.obj(e)?t&&e[t]:e,zo=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Ro=e=>e,Ho=(e,t=Ro)=>{let r=Vo;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const a of r){const r=t(e[a],a);Wa.und(r)||(n[a]=r)}return n},Vo=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Wo={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Yo(e){const t=function(e){const t={};let r=0;if(qa(e,((e,n)=>{Wo[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return qa(e,((e,n)=>n in t||(r[n]=e))),r}return Ao({},e)}function Uo(e){return e=Vi(e),Wa.arr(e)?e.map(Uo):ho(e)?ni.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function qo(e){return Wa.fun(e)||Wa.arr(e)&&Wa.obj(e[0])}const Qo=Ao({},{tension:170,friction:26},{mass:1,damping:1,easing:Ii.linear,clamp:!1});class Ko{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Qo)}}function Go(e,t){if(Wa.und(t.decay)){const r=!Wa.und(t.tension)||!Wa.und(t.friction);!r&&Wa.und(t.frequency)&&Wa.und(t.damping)&&Wa.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}const Zo=[];class Xo{constructor(){this.changed=!1,this.values=Zo,this.toValues=null,this.fromValues=Zo,this.to=void 0,this.from=void 0,this.config=new Ko,this.immediate=!1}}function Jo(e,{key:t,props:r,defaultProps:n,state:a,actions:i}){return new Promise(((o,s)=>{var l;let c,d,u=Io(null!=(l=r.cancel)?l:null==n?void 0:n.cancel,t);if(u)f();else{Wa.und(r.pause)||(a.paused=Io(r.pause,t));let e=null==n?void 0:n.pause;!0!==e&&(e=a.paused||Io(e,t)),c=No(r.delay||0,t),e?(a.resumeQueue.add(p),i.pause()):(i.resume(),p())}function h(){a.resumeQueue.add(p),a.timeouts.delete(d),d.cancel(),c=d.time-ka.now()}function p(){c>0&&!ni.skipAnimation?(a.delayed=!0,d=ka.setTimeout(f,c),a.pauseQueue.add(h),a.timeouts.add(d)):f()}function f(){a.delayed&&(a.delayed=!1),a.pauseQueue.delete(h),a.timeouts.delete(d),e<=(a.cancelId||0)&&(u=!0);try{i.start(Ao({},r,{callId:e,cancel:u}),o)}catch(e){s(e)}}}))}const es=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?ns(e.get()):t.every((e=>e.noop))?ts(e.get()):rs(e.get(),t.every((e=>e.finished))),ts=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),rs=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),ns=e=>({value:e,cancelled:!0,finished:!1});function as(e,t,r,n){const{callId:a,parentId:i,onRest:o}=t,{asyncTo:s,promise:l}=r;return i||e!==s||t.reset?r.promise=(async()=>{r.asyncId=a,r.asyncTo=e;const c=Ho(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const h=new Promise(((e,t)=>(d=e,u=t))),p=e=>{const t=a<=(r.cancelId||0)&&ns(n)||a!==r.asyncId&&rs(n,!1);if(t)throw e.result=t,u(e),e},f=(e,t)=>{const i=new os,o=new ss;return(async()=>{if(ni.skipAnimation)throw is(r),o.result=rs(n,!1),u(o),o;p(i);const s=Wa.obj(e)?Ao({},e):Ao({},t,{to:e});s.parentId=a,qa(c,((e,t)=>{Wa.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return p(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let m;if(ni.skipAnimation)return is(r),rs(n,!1);try{let t;t=Wa.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,n.stop.bind(n))),await Promise.all([t.then(d),h]),m=rs(n.get(),!0,!1)}catch(e){if(e instanceof os)m=e.result;else{if(!(e instanceof ss))throw e;m=e.result}}finally{a==r.asyncId&&(r.asyncId=i,r.asyncTo=i?s:void 0,r.promise=i?l:void 0)}return Wa.fun(o)&&ka.batchedUpdates((()=>{o(m,n,n.item)})),m})():l}function is(e,t){Ka(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class os extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class ss extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const ls=e=>e instanceof ds;let cs=1;class ds extends Ui{constructor(...e){super(...e),this.id=cs++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=wo(this);return e&&e.getValue()}to(...e){return ni.to(this,e)}interpolate(...e){return co(`${so}The "interpolate" function is deprecated in v9 (use "to" instead)`),ni.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Yi(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||li.sort(this),Yi(this,{type:"priority",parent:this,priority:e})}}const us=Symbol.for("SpringPhase"),hs=e=>(1&e[us])>0,ps=e=>(2&e[us])>0,fs=e=>(4&e[us])>0,ms=(e,t)=>t?e[us]|=3:e[us]&=-3,gs=(e,t)=>t?e[us]|=4:e[us]&=-5;class bs extends ds{constructor(e,t){if(super(),this.key=void 0,this.animation=new Xo,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Wa.und(e)||!Wa.und(t)){const r=Wa.obj(e)?Ao({},e):Ao({},t,{from:e});Wa.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(ps(this)||this._state.asyncTo)||fs(this)}get goal(){return Vi(this.animation.to)}get velocity(){const e=wo(this);return e instanceof So?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return hs(this)}get isAnimating(){return ps(this)}get isPaused(){return fs(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{config:a,toValues:i}=n;const o=xo(n.to);!o&&Hi(n.to)&&(i=Qa(Vi(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==_o?1:o?o[l].lastPosition:i[l];let d=n.immediate,u=c;if(!d){if(u=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=Wa.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const h=a.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Wa.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,n=Math.exp(-(1-e)*t);u=r+i/(1-e)*(1-n),d=Math.abs(s.lastPosition-u)<=h,o=i*n}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||h/10,n=a.clamp?0:a.bounce,l=!Wa.und(n),p=r==c?s.v0>0:r<c;let f,m=!1;const g=1,b=Math.ceil(e/g);for(let e=0;e<b&&(f=Math.abs(o)>t,f||(d=Math.abs(c-u)<=h,!d));++e){l&&(m=u==c||u>c==p,m&&(o=-o*n,u=c));o+=(1e-6*-a.tension*(u-c)+.001*-a.friction*o)/a.mass*g,u+=o*g}}else{let n=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(a.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+a.easing(n)*(c-r),o=(u-s.lastPosition)/e,d=1==n}s.lastVelocity=o,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}o&&!o[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,a.round)&&(r=!0)}));const s=wo(this),l=s.getValue();if(t){const e=Vi(n.to);l===e&&!r||a.decay?r&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return ka.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ps(this)){const{to:e,config:t}=this.animation;ka.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Wa.und(e)?(r=this.queue||[],this.queue=[]):r=[Wa.obj(e)?e:Ao({},t,{to:e})],Promise.all(r.map((e=>this._update(e)))).then((e=>es(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),is(this._state,e&&this._lastCallId),ka.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Wa.obj(r)?r[t]:r,(null==r||qo(r))&&(r=void 0),n=Wa.obj(n)?n[t]:n,null==n&&(n=void 0);const a={to:r,from:n};return hs(this)||(e.reverse&&([r,n]=[n,r]),n=Vi(n),Wa.und(n)?wo(this)||this._set(r):this._set(n)),a}_update(e,t){let r=Ao({},e);const{key:n,defaultProps:a}=this;r.default&&Object.assign(a,Ho(r,((e,t)=>/^on/.test(t)?Lo(e,n):e))),Ss(this,r,"onProps"),_s(this,"onProps",r,this);const i=this._prepareNode(r);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Jo(++this._lastCallId,{key:n,props:r,defaultProps:a,state:o,actions:{pause:()=>{fs(this)||(gs(this,!0),Ga(o.pauseQueue),_s(this,"onPause",rs(this,ys(this,this.animation.to)),this))},resume:()=>{fs(this)&&(gs(this,!1),ps(this)&&this._resume(),Ga(o.resumeQueue),_s(this,"onResume",rs(this,ys(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((e=>{if(r.loop&&e.finished&&(!t||!e.noop)){const e=vs(r);if(e)return this._update(e,!0)}return e}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(ns(this));const n=!Wa.und(e.to),a=!Wa.und(e.from);if(n||a){if(!(t.callId>this._lastToId))return r(ns(this));this._lastToId=t.callId}const{key:i,defaultProps:o,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!a||n||t.default&&!Wa.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const h=!Ya(u,c);h&&(s.from=u),u=Vi(u);const p=!Ya(d,l);p&&this._focus(d);const f=qo(t.to),{config:m}=s,{decay:g,velocity:b}=m;(n||a)&&(m.velocity=0),t.config&&!f&&function(e,t,r){r&&(Go(r=Ao({},r),t),t=Ao({},r,t)),Go(e,t),Object.assign(e,t);for(const t in Qo)null==e[t]&&(e[t]=Qo[t]);let{mass:n,frequency:a,damping:i}=e;Wa.und(a)||(a<.01&&(a=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/a,2)*n,e.friction=4*Math.PI*i*n/a)}(m,No(t.config,i),t.config!==o.config?No(o.config,i):void 0);let y=wo(this);if(!y||Wa.und(d))return r(rs(this,!0));const v=Wa.und(t.reset)?a&&!t.default:!Wa.und(u)&&Io(t.reset,i),w=v?u:this.get(),$=Uo(d),x=Wa.num($)||Wa.arr($)||ho($),O=!f&&(!x||Io(o.immediate||t.immediate,i));if(p){const e=Mo(d);if(e!==y.constructor){if(!O)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set($)}}const S=y.constructor;let _=Hi(d),k=!1;if(!_){const e=v||!hs(this)&&h;(p||e)&&(k=Ya(Uo(w),$),_=!k),(Ya(s.immediate,O)||O)&&Ya(m.decay,g)&&Ya(m.velocity,b)||(_=!0)}if(k&&ps(this)&&(s.changed&&!v?_=!0:_||this._stop(l)),!f&&((_||Hi(l))&&(s.values=y.getPayload(),s.toValues=Hi(d)?null:S==_o?[1]:Qa($)),s.immediate!=O&&(s.immediate=O,O||v||this._set(l)),_)){const{onRest:e}=s;Ua(Os,(e=>Ss(this,t,e)));const n=rs(this,ys(this,l));Ga(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&ka.batchedUpdates((()=>{s.changed=!v,null==e||e(n,this),v?No(o.onRest,n):null==s.onStart||s.onStart(n,this)}))}v&&this._set(w),f?r(as(t.to,t,this._state,this)):_?this._start():ps(this)&&!p?this._pendingCalls.add(r):r(ts(w))}_focus(e){const t=this.animation;e!==t.to&&(Wi(this)&&this._detach(),t.to=e,Wi(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Hi(t)&&(Qi(t,this),ls(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Hi(e)&&Ki(e,this)}_set(e,t=!0){const r=Vi(e);if(!Wa.und(r)){const e=wo(this);if(!e||!Ya(r,e.getValue())){const n=Mo(r);e&&e.constructor==n?e.setValue(r):$o(this,n.create(r)),e&&ka.batchedUpdates((()=>{this._onChange(r,t)}))}}return wo(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,_s(this,"onStart",rs(this,ys(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),No(this.animation.onChange,e,this)),No(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;wo(this).reset(Vi(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),ps(this)||(ms(this,!0),fs(this)||this._resume())}_resume(){ni.skipAnimation?this.finish():li.start(this)}_stop(e,t){if(ps(this)){ms(this,!1);const r=this.animation;Ua(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Yi(this,{type:"idle",parent:this});const n=t?ns(this.get()):rs(this.get(),ys(this,null!=e?e:r.to));Ga(this._pendingCalls,n),r.changed&&(r.changed=!1,_s(this,"onRest",n,this))}}}function ys(e,t){const r=Uo(t);return Ya(Uo(e.get()),r)}function vs(e,t=e.loop,r=e.to){let n=No(t);if(n){const a=!0!==n&&Yo(n),i=(a||e).reverse,o=!a||a.reset;return ws(Ao({},e,{loop:t,default:!1,pause:void 0,to:!i||qo(r)?r:void 0,from:o?e.from:void 0,reset:o},a))}}function ws(e){const{to:t,from:r}=e=Yo(e),n=new Set;return Wa.obj(t)&&xs(t,n),Wa.obj(r)&&xs(r,n),e.keys=n.size?Array.from(n):null,e}function $s(e){const t=ws(e);return Wa.und(t.default)&&(t.default=Ho(t)),t}function xs(e,t){qa(e,((e,r)=>null!=e&&t.add(r)))}const Os=["onStart","onRest","onChange","onPause","onResume"];function Ss(e,t,r){e.animation[r]=t[r]!==zo(t,r)?Lo(t[r],e.key):void 0}function _s(e,t,...r){var n,a,i,o;null==(n=(a=e.animation)[t])||n.call(a,...r),null==(i=(o=e.defaultProps)[t])||i.call(o,...r)}const ks=["onStart","onChange","onRest"];let js=1;class Ds{constructor(e,t){this.id=js++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Ao({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Wa.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(ws(e)),this}start(e){let{queue:t}=this;return e?t=Qa(e).map(ws):this.queue=[],this._flush?this._flush(this,t):(Es(this,t),Cs(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Ua(Qa(t),(t=>r[t].stop(!!e)))}else is(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Wa.und(e))this.start({pause:!0});else{const t=this.springs;Ua(Qa(e),(e=>t[e].pause()))}return this}resume(e){if(Wa.und(e))this.start({pause:!1});else{const t=this.springs;Ua(Qa(e),(e=>t[e].resume()))}return this}each(e){qa(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,a=this._changed.size>0;(n&&!this._started||a&&!this._started)&&(this._started=!0,Ka(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,o=a||i&&r.size?this.get():null;a&&t.size&&Ka(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),i&&(this._started=!1,Ka(r,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}ka.onFrame(this._onFrame)}}function Cs(e,t){return Promise.all(t.map((t=>Ms(e,t)))).then((t=>es(e,t)))}async function Ms(e,t,r){const{keys:n,to:a,from:i,loop:o,onRest:s,onResolve:l}=t,c=Wa.obj(t.default)&&t.default;o&&(t.loop=!1),!1===a&&(t.to=null),!1===i&&(t.from=null);const d=Wa.arr(a)||Wa.fun(a)?a:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Ua(ks,(r=>{const n=t[r];if(Wa.fun(n)){const a=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=a.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):a.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Ga(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),p=!0===t.cancel||!0===zo(t,"cancel");(d||p&&u.asyncId)&&h.push(Jo(++e._lastAsyncId,{props:t,state:u,actions:{pause:Va,resume:Va,start(t,r){p?(is(u,e._lastAsyncId),r(ns(e))):(t.onRest=s,r(as(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const f=es(e,await Promise.all(h));if(o&&f.finished&&(!r||!f.noop)){const r=vs(t,o,a);if(r)return Es(e,[r]),Ms(e,r,!0)}return l&&ka.batchedUpdates((()=>l(f,e,e.item))),f}function Ps(e,t){const r=Ao({},e.springs);return t&&Ua(Qa(t),(e=>{Wa.und(e.keys)&&(e=ws(e)),Wa.obj(e.to)||(e=Ao({},e,{to:void 0})),Bs(r,e,(e=>Ts(e)))})),Fs(e,r),r}function Fs(e,t){qa(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Qi(t,e))}))}function Ts(e,t){const r=new bs;return r.key=e,t&&Qi(r,t),r}function Bs(e,t,r){t.keys&&Ua(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Es(e,t){Ua(t,(t=>{Bs(e.springs,t,(t=>Ts(t,e)))}))}const As=["children"],Ns=e=>{let{children:t}=e,r=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,As);const a=g(Is),l=r.pause||!!a.pause,c=r.immediate||!!a.immediate;r=function(e,t){const[r]=i((()=>({inputs:t,result:e()}))),n=o(),a=n.current;let l=a;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=r;return s((()=>{n.current=l,a==r&&(r.inputs=r.result=void 0)}),[l]),l.result}((()=>({pause:l,immediate:c})),[l,c]);const{Provider:d}=Is;return n.createElement(d,{value:r},t)},Is=(Ls=Ns,zs={},Object.assign(Ls,n.createContext(zs)),Ls.Provider._context=Ls,Ls.Consumer._context=Ls,Ls);var Ls,zs;Ns.Provider=Is.Provider,Ns.Consumer=Is.Consumer;const Rs=()=>{const e=[],t=function(t){uo(`${so}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Ua(e,((e,a)=>{if(Wa.und(t))n.push(e.start());else{const i=r(t,e,a);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Ua(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Ua(e,(e=>e.resume(...arguments))),this},t.set=function(t){Ua(e,(e=>e.set(t)))},t.start=function(t){const r=[];return Ua(e,((e,n)=>{if(Wa.und(t))r.push(e.start());else{const a=this._getProps(t,e,n);a&&r.push(e.start(a))}})),r},t.stop=function(){return Ua(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Ua(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Wa.fun(e)?e(r,t):e};return t._getProps=r,t};function Hs(e,t){const r=Wa.fun(e),[[n],a]=function(e,t,r){const n=Wa.fun(t)&&t;n&&!r&&(r=[]);const a=b((()=>n||3==arguments.length?Rs():void 0),[]),i=o(0),s=mo(),l=b((()=>({ctrls:[],queue:[],flush(e,t){const r=Ps(e,t);return i.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Cs(e,t):new Promise((n=>{Fs(e,r),l.queue.push((()=>{n(Cs(e,t))})),s()}))}})),[]),c=o([...l.ctrls]),d=[],u=yo(e)||0;function h(e,r){for(let a=e;a<r;a++){const e=c.current[a]||(c.current[a]=new Ds(null,l.flush)),r=n?n(a,e):t[a];r&&(d[a]=$s(r))}}b((()=>{Ua(c.current.slice(e,u),(e=>{!function(e,t){var r;null==(r=e.ref)||r.delete(e),null==t||t.delete(e)}(e,a),e.stop(!0)})),c.current.length=e,h(u,e)}),[e]),b((()=>{h(0,Math.min(u,e))}),r);const p=c.current.map(((e,t)=>Ps(e,d[t]))),f=g(Ns),m=yo(f),y=f!==m&&function(e){for(const t in e)return!0;return!1}(f);po((()=>{i.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Ua(e,(e=>e()))),Ua(c.current,((e,t)=>{null==a||a.add(e),y&&e.start({default:f});const r=d[t];r&&(function(e,t){var r;t&&e.ref!==t&&(null==(r=e.ref)||r.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),go((()=>()=>{Ua(l.ctrls,(e=>e.stop(!0)))}));const v=p.map((e=>Ao({},e)));return a?[v,a]:v}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,a]:n}let Vs;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Vs||(Vs={}));class Ws extends ds{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Pi(...t);const r=this._get(),n=Mo(r);$o(this,n.create(r))}advance(e){const t=this._get();Ya(t,this.get())||(wo(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Us(this._active)&&qs(this)}_get(){const e=Wa.arr(this.source)?this.source.map(Vi):Qa(Vi(this.source));return this.calc(...e)}_start(){this.idle&&!Us(this._active)&&(this.idle=!1,Ua(xo(this),(e=>{e.done=!1})),ni.skipAnimation?(ka.batchedUpdates((()=>this.advance())),qs(this)):li.start(this))}_attach(){let e=1;Ua(Qa(this.source),(t=>{Hi(t)&&Qi(t,this),ls(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Ua(Qa(this.source),(e=>{Hi(e)&&Ki(e,this)})),this._active.clear(),qs(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Qa(this.source).reduce(((e,t)=>Math.max(e,(ls(t)?t.priority:0)+1)),0))}}function Ys(e){return!1!==e.idle}function Us(e){return!e.size||Array.from(e).every(Ys)}function qs(e){e.idle||(e.idle=!0,Ua(xo(e),(e=>{e.done=!0})),Yi(e,{type:"idle",parent:e}))}function Qs(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}ni.assign({createStringInterpolator:oo,to:(e,t)=>new Ws(e,t)});const Ks=["style","children","scrollTop","scrollLeft","viewBox"],Gs=/^--/;function Zs(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Gs.test(e)||Js.hasOwnProperty(e)&&Js[e]?(""+t).trim():t+"px"}const Xs={};let Js={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const el=["Webkit","Ms","Moz","O"];Js=Object.keys(Js).reduce(((e,t)=>(el.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Js);const tl=["x","y","z"],rl=/^(matrix|translate|scale|rotate|skew)/,nl=/^(translate)/,al=/^(rotate|skew)/,il=(e,t)=>Wa.num(e)&&0!==e?e+t:e,ol=(e,t)=>Wa.arr(e)?e.every((e=>ol(e,t))):Wa.num(e)?e===t:parseFloat(e)===t;class sl extends jo{constructor(e){let{x:t,y:r,z:n}=e,a=Qs(e,tl);const i=[],o=[];(t||r||n)&&(i.push([t||0,r||0,n||0]),o.push((e=>[`translate3d(${e.map((e=>il(e,"px"))).join(",")})`,ol(e,0)]))),qa(a,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(rl.test(t)){if(delete a[t],Wa.und(e))return;const r=nl.test(t)?"px":al.test(t)?"deg":"";i.push(Qa(e)),o.push("rotate3d"===t?([e,t,n,a])=>[`rotate3d(${e},${t},${n},${il(a,r)})`,ol(a,0)]:e=>[`${t}(${e.map((e=>il(e,r))).join(",")})`,ol(e,t.startsWith("scale")?1:0)])}})),i.length&&(a.transform=new ll(i,o)),super(a)}}class ll extends Ui{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Ua(this.inputs,((r,n)=>{const a=Vi(r[0]),[i,o]=this.transforms[n](Wa.arr(a)?a:r.map(Vi));e+=" "+i,t=t&&o})),t?"none":e}observerAdded(e){1==e&&Ua(this.inputs,(e=>Ua(e,(e=>Hi(e)&&Qi(e,this)))))}observerRemoved(e){0==e&&Ua(this.inputs,(e=>Ua(e,(e=>Hi(e)&&Ki(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Yi(this,e)}}const cl=["scrollTop","scrollLeft"];ni.assign({batchedUpdates:j,createStringInterpolator:oo,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const dl=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new jo(e)),getComponentProps:n=(e=>e)}={})=>{const a={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=Eo(e)||"Anonymous";return(e=Wa.str(e)?i[e]||(i[e]=Fo(e,a)):e[Bo]||(e[Bo]=Fo(e,a))).displayName=`Animated(${t})`,e};return qa(e,((t,r)=>{Wa.arr(e)&&(r=Eo(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,n=t,{style:a,children:i,scrollTop:o,scrollLeft:s,viewBox:l}=n,c=Qs(n,Ks),d=Object.values(c),u=Object.keys(c).map((t=>r||e.hasAttribute(t)?t:Xs[t]||(Xs[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(let t in a)if(a.hasOwnProperty(t)){const r=Zs(t,a[t]);Gs.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,d[r])})),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new sl(e),getComponentProps:e=>Qs(e,cl)}),ul=dl.animated,hl=x(ul.div)`
    position: absolute;
    top: calc(100% + 0.5rem);
    left: -1px;
    width: calc(100% + 2px);
    max-width: 41rem;
    overflow: hidden;
    z-index: 1;
    min-width: 21rem;

    ${an.mobileL} {
        min-width: 17.5rem;
    }
`;var pl={exports:{}};pl.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),a=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(a,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),a=t.clone().add(n,c),i=r-a<0,o=t.clone().add(n+(i?-1:1),c);return+(-(n+(r-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:o,m:i,s:a,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",w={};w[v]=g;var $=function(e){return e instanceof _},x=function e(t,r,n){var a;if(!t)return v;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(a=i),r&&(w[i]=r,a=i);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=t.name;w[s]=t,a=s}return!n&&a&&(v=a),a||!n&&v},O=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new _(r)},S=y;S.l=x,S.i=$,S.w=function(e,t){return O(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var _=function(){function g(e){this.$L=x(e.locale,null,!0),this.parse(e)}var b=g.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(f);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return S},b.isValid=function(){return!(this.$d.toString()===p)},b.isSame=function(e,t){var r=O(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return O(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<O(e)},b.$g=function(e,t,r){return S.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!S.u(t)||t,d=S.p(e),p=function(e,t){var a=S.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?a:a.endOf(s)},f=function(e,t){return S.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},m=this.$W,g=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case u:return n?p(1,0):p(31,11);case c:return n?p(1,g):p(0,g+1);case l:var v=this.$locale().weekStart||0,w=(m<v?m+7:m)-v;return p(n?b-w:b+(6-w),g);case s:case h:return f(y+"Hours",0);case o:return f(y+"Minutes",1);case i:return f(y+"Seconds",2);case a:return f(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=S.p(e),d="set"+(this.$u?"UTC":""),p=(r={},r[s]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[o]=d+"Hours",r[i]=d+"Minutes",r[a]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],f=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var m=this.clone().set(h,1);m.$d[p](f),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[S.p(e)]()},b.add=function(n,d){var h,p=this;n=Number(n);var f=S.p(d),m=function(e){var t=O(p);return S.w(t.date(t.date()+Math.round(e*n)),p)};if(f===c)return this.set(c,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===s)return m(1);if(f===l)return m(7);var g=(h={},h[i]=t,h[o]=r,h[a]=e,h)[f]||1,b=this.$d.getTime()+n*g;return S.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||p;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=S.z(this),i=this.$H,o=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=function(e,r,a,i){return e&&(e[r]||e(t,n))||a[r].slice(0,i)},u=function(e){return S.s(i%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:S.s(s+1,2,"0"),MMM:d(r.monthsShort,s,c,3),MMMM:d(c,s),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,l,2),ddd:d(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:S.s(i,2,"0"),h:u(1),hh:u(2),a:h(i,o,!0),A:h(i,o,!1),m:String(o),mm:S.s(o,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:a};return n.replace(m,(function(e,t){return t||f[e]||a.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,p){var f,m=S.p(h),g=O(n),b=(g.utcOffset()-this.utcOffset())*t,y=this-g,v=S.m(this,g);return v=(f={},f[u]=v/12,f[c]=v,f[d]=v/3,f[l]=(y-b)/6048e5,f[s]=(y-b)/864e5,f[o]=y/r,f[i]=y/t,f[a]=y/e,f)[m]||y,p?v:S.a(v)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return w[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=x(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return S.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},g}(),k=_.prototype;return O.prototype=k,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),O.extend=function(e,t){return e.$i||(e(t,_,O),e.$i=!0),O},O.locale=x,O.isDayjs=$,O.unix=function(e){return O(1e3*e)},O.en=w[v],O.Ls=w,O.p={},O}();var fl=pl.exports,ml={exports:{}};ml.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,t))>-1){r=a>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[a,function(e){this.afternoon=d(e,!1)}],a:[a,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[a,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[a,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[a,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,a;n=r,a=i&&i.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],h=d&&d[0],p=d&&d[1];o[l]=p?{regex:h,parser:p}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var a=o[r];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,c=e.slice(n),d=i.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,a=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,p=new Date,f=o||(a||i?1:p.getDate()),m=a||p.getFullYear(),g=0;a&&!i||(g=i>0?i-1:p.getMonth());var b=s||0,y=l||0,v=c||0,w=d||0;return u?new Date(Date.UTC(m,g,f,b,y,v,w+60*u.offset*1e3)):r?new Date(Date.UTC(m,g,f,b,y,v,w)):new Date(m,g,f,b,y,v,w)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var p=s.length,f=1;f<=p;f+=1){o[1]=s[f-1];var m=r.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}f===p&&(this.$d=new Date(""))}else a.call(this,e)}}}();var gl,bl,yl=ml.exports,vl={exports:{}},wl=vl.exports=(gl={year:0,month:1,day:2,hour:3,minute:4,second:5},bl={},function(e,t,r){var n,a=function(e,t,r){void 0===r&&(r={});var n=new Date(e),a=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,a=bl[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),bl[n]=a),a}(t,r);return a.formatToParts(n)},i=function(e,t){for(var n=a(e,t),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,c=s.value,d=gl[l];d>=0&&(i[d]=parseInt(c,10))}var u=i[3],h=24===u?0:u,p=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",f=+e;return(r.utc(p).valueOf()-(f-=f%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=r(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(a-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,a){var o=a&&t,s=a||t||n,l=i(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,a=i(n,r);if(t===a)return[n,t];var o=i(n-=60*(a-t)*1e3,r);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(r.utc(e,o).valueOf(),l,s),d=c[0],u=c[1],h=r(d).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}),$l={exports:{}};$l.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,a){var i=r(e),o=r(t),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var xl=$l.exports,Ol={exports:{}};Ol.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Sl=Ol.exports,_l={exports:{}};_l.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var kl,jl=_l.exports;fl.extend(xl),fl.extend(Sl),fl.extend(jl),fl.extend(yl),fl.extend(wl),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=fl(t).startOf("week");return Dl(r).map((e=>Cl(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Cl(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(fl(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+fl(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=fl(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")}}(kl||(kl={}));const Dl=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Cl=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Ml=x.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Pl=S`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Fl=x.div`
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
    animation: ${Pl} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Tl=x(Fl)`
    animation-delay: -0.45s;
`,Bl=x(Fl)`
    animation-delay: -0.3s;
`,El=x(Fl)`
    animation-delay: -0.15s;
`,Al=x.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return O`
                    background-color: ${Er.Neutral[8](e)};
                    border: 1px solid ${Er.Primary(e)};

                    span {
                        color: ${Er.Primary(e)};
                    }
                `;case"light":return O`
                    background-color: ${Er.Neutral[8](e)};
                    border: 1px solid ${Er.Neutral[5](e)};

                    span {
                        color: ${Er.Primary(e)};
                    }
                `;case"disabled":return O`
                    background-color: ${Er.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Er.Neutral[3](e)};
                    }
                `;case"link":return O`
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
                `;default:return O`
                    background-color: ${Er.Primary(e)};
                    border: 1px solid transparent;

                    ${an.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Er.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?O`
                    height: 2.5rem;
                    span {
                        ${Wr("H5","semibold")}
                    }

                    ${an.mobileS} {
                        height: auto;
                    }
                `:O`
                    height: 3rem;
                    span {
                        ${Wr("H4","semibold")}
                    }

                    ${an.mobileS} {
                        height: auto;
                    }
                `}
`,Nl=x((({color:r,className:n,size:a=18})=>e(Ml,Object.assign({className:n,$size:a,$color:r},{children:[t(Fl,{id:"inner1",$size:a-2,$borderWidth:2}),t(Tl,{id:"inner2",$size:a-2,$borderWidth:2}),t(Bl,{id:"inner3",$size:a-2,$borderWidth:2}),t(El,{id:"inner4",$size:a-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Er.Primary(e);break;case"disabled":t=Er.Neutral[3](e);break;default:t=Er.Neutral[8](e)}return O`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Il={Default:a.forwardRef(((r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default"}=r,l=H(r,["children","disabled","loading","styleType"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default"};return e(Al,Object.assign({ref:n,"data-testid":l["data-testid"]||"button",disabled:i},c,l,{children:[o&&t(Nl,Object.assign({},c)),t("span",{children:a})]}))})),Small:a.forwardRef(((r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default"}=r,l=H(r,["children","disabled","loading","styleType"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small"};return e(Al,Object.assign({ref:n,"data-testid":l["data-testid"]||"button",disabled:i},c,l,{children:[o&&t(Nl,Object.assign({},c,{size:16})),t("span",{children:a})]}))}))},Ll=O`
    color: ${Er.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,zl=x(M)`
    ${Ll}
`,Rl=x(P)`
    ${Ll}
`,Hl=x(C)`
    ${Ll}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Vl=x.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Wl=x.div`
    display: flex;
    flex: 1;
    position: relative;
`,Yl=x.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Er.Neutral[8]};

    ${e=>{if(!e.$visible)return O`
                display: none;
            `}}
`,Ul=x.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,ql=x.div`
    display: flex;
`,Ql=x.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?O`
                display: none;
            `:e.$expanded?O`
                ${Hl} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,Kl=x.p`
    ${Wr("H5","regular")}
`,Gl=x.div`
    display: flex;
`,Zl=x(dn)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Xl=x.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,Jl=x(Il.Small)`
    flex: 1;
`,ec=x.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return O`
                    gap: 0.5rem 2.5rem;
                `;case"input":return O`
                    gap: 0.5rem 1rem;
                `}}}
`,tc=x.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?O`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Er.Shadow.Accent};
                    border: 1px solid ${Er.Accent.Light[1]};
                }
            `:e.$disabledDisplay?O`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return O`
                    background-color: ${Er.Accent.Light[6](e)};
                `;case"selected-month":return O`
                    background-color: ${Er.Accent.Light[5](e)};
                    border: 1px solid ${Er.Primary(e)};
                `}}}
`,rc=x(Ur.H5)`
    ${e=>{if(e.$disabledDisplay)return O`
                color: ${Er.Neutral[4]};
            `;switch(e.$variant){case"current-month":return O`
                    color: ${Er.Neutral[3](e)};
                `;case"selected-month":return O`
                    ${Wr("H5","semibold")}
                    color: ${Er.Primary(e)};
                `}}}
`,nc=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:i,type:o,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:d,onMonthSelect:u})=>{const h=b((()=>kl.generateMonths(fl(e))),[e]),p=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&s,i="end"===r&&n&&e.isBefore(n,"month")&&s;return t||i},f=e=>{const t=e.format("MMMM"),r=(n=e,!kl.isWithinRange(n,l?fl(l):void 0,c?fl(c):void 0,"month"));var n;const a=i.isSame(e,"month")?"selected-month":fl().isSame(e,"month")?"current-month":"default";return{disabledDisplay:r||p(e),interactive:!r||d,month:t,variant:a}};return h.length?t(ec,Object.assign({$type:o},{children:h.map((e=>{const{disabledDisplay:r,interactive:n,variant:a,month:i}=f(e);return t(tc,Object.assign({$variant:a,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||u(e)})(e,!n)},{children:t(rc,Object.assign({weight:"regular",$variant:a,$disabledDisplay:r},{children:i}))}),i)}))})):null},ac=x.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return O`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return O`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,ic=x.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?O`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Er.Shadow.Accent};
                    border: 1px solid ${Er.Accent.Light[1]};
                }
            `:e.$disabledDisplay?O`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return O`
                    background: ${Er.Accent.Light[6](e)};
                `;case"selected-year":return O`
                    background: ${Er.Accent.Light[5](e)};
                    border: 1px solid ${Er.Primary(e)};
                `}}};
`,oc=x(Ur.H5)`
    ${e=>{if(e.$disabledDisplay)return O`
                color: ${Er.Neutral[4]};
            `;switch(e.$variant){case"current-year":return O`
                    color: ${Er.Neutral[3](e)};
                `;case"selected-year":return O`
                    ${Wr("H5","semibold")}
                    color: ${Er.Primary(e)};
                `;case"other-decade":return O`
                    color: ${Er.Neutral[4](e)};
                `}}}
`,sc=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:i,type:o,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:d,onYearSelect:u})=>{const h=b((()=>kl.generateDecadeOfYears(fl(e))),[e]),p=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&s,i="end"===r&&n&&e.isBefore(n,"year")&&s;return t||i},f=e=>{const t=[0,11].includes(h.indexOf(e)),r=e.year(),n=(a=e,!kl.isWithinRange(a,l?fl(l):void 0,c?fl(c):void 0,"year"));var a;const o=t?"other-decade":i.isSame(e,"year")?"selected-year":fl().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||p(e),interactive:!n||d,year:r,variant:o}};return h.length?t(ac,Object.assign({$type:o},{children:h.map((e=>{const{disabledDisplay:r,interactive:n,variant:a,year:i}=f(e);return t(ic,Object.assign({$variant:a,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||u(e)})(e,!n)},{children:t(oc,Object.assign({weight:"regular",$variant:a,$disabledDisplay:r,$interactive:n},{children:i}))}),i)}))})):null},lc=a.forwardRef(((n,a)=>{var{children:l,initialCalendarDate:c,type:d,minDate:u,maxDate:h,currentFocus:p,selectedStartDate:f,selectedEndDate:m,selectWithinRange:g,dynamicHeight:b=!1,allowDisabledSelection:v,onCalendarDateChange:w,withButton:$,doneButtonDisabled:x,onDismiss:O,showNavigationHeader:S=!0,getLeftArrowDate:_,getRightArrowDate:k,isLeftArrowDisabled:j,isRightArrowDisabled:D,getMonthHeaderLabel:C,getYearHeaderLabel:M}=n,P=H(n,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[F,T]=i(fl(c)),[B,E]=i(fl(c)),[A,N]=i("default"),I=o(null),L=o(null),z=o();y(a,(()=>({defaultView(){N("default")},resetView(){const e=fl(c);T(e),E(e),N("default")},setCalendarDate(e){const t=e?fl(e):fl();T(t),E(t)}}))),s((()=>{const e=c?fl(c):fl();T(e),E(e)}),[c]),s((()=>{Q(B)}),[B]);const R=()=>{"month-options"!==A?(N("month-options"),z.current.focus()):(N("default"),T(B))},V=()=>{"default"!==A?(N("default"),T(B)):N("year-options")},W=()=>{z.current.focus();const e=_?_(F):F.subtract(1,"month");switch(A){case"default":E(e),T(e);break;case"month-options":T((e=>e.subtract(1,"year")));break;case"year-options":T((e=>e.subtract(10,"year")))}},Y=()=>{z.current.focus();const e=k?k(F):F.add(1,"month");switch(A){case"default":E(e),T(e);break;case"month-options":T((e=>e.add(1,"year")));break;case"year-options":T((e=>e.add(10,"year")))}},U=e=>{T(e),E(e)},q=()=>{T(fl(c)),E(fl(c)),"default"===A?K("reset"):N("default")},Q=e=>{w&&w(e)},K=e=>{O&&O(e)},G=()=>{if(!u||v)return!1;const e=fl(u);return"month-options"===A?!kl.isPreviousYearWithinRange(F,e):"year-options"===A?!kl.isPreviousDecadeWithinRange(F,e):j?j(F):!kl.isPreviousMonthWithinRange(F,e)},Z=()=>{if(!h||v)return!1;const e=fl(h);return"month-options"===A?!kl.isNextYearWithinRange(F,e):"year-options"===A?!kl.isNextDecadeWithinRange(F,e):D?D(F):!kl.isNextMonthWithinRange(F,e)},X=()=>{if("year-options"===A){const{beginDecade:e,endDecade:t}=kl.getStartEndDecade(F);return`${e} to ${t}`}return M?M(F):fl(F).format("YYYY")},J=()=>{const n=C?C(F):fl(F).format("MMM");return e(r,{children:[e(Ql,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===A,$visible:"default"===A,id:"month-dropdown",onClick:R},{children:[t(Kl,{children:n}),t(Hl,{})]})),e(Ql,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==A,id:"year-dropdown",onClick:V},{children:[t(Kl,{children:X()}),t(Hl,{})]}))]})},ee=()=>{switch(A){case"month-options":return t(nc,{type:d,calendarDate:F,currentFocus:p,minDate:u,maxDate:h,selectedStartDate:f,selectedEndDate:m,viewCalendarDate:B,isNewSelection:g,onMonthSelect:U,allowDisabledSelection:v});case"year-options":return t(sc,{type:d,calendarDate:F,currentFocus:p,minDate:u,maxDate:h,selectedStartDate:f,selectedEndDate:m,viewCalendarDate:B,isNewSelection:g,onYearSelect:U,allowDisabledSelection:v});default:return null}};return e(Vl,Object.assign({ref:z,tabIndex:-1,"data-id":"calendar-container","data-testid":"calendar-container"},P,{children:[S&&e(Ul,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(ql,{children:J()}),e(Gl,{children:[t(Zl,Object.assign({"data-testid":"left-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:W},{children:t(zl,{})})),t(Zl,Object.assign({"data-testid":"right-arrow-btn",disabled:Z(),focusHighlight:!1,tabIndex:-1,onClick:Y},{children:t(Rl,{})}))]})]})),t(Wl,{children:(()=>{const n="function"==typeof l?l({calendarDate:B,currentView:A}):l;return e(r,b?{children:["default"===A&&n,ee()]}:{children:[n,t(Yl,Object.assign({$visible:"default"!==A},{children:ee()}))]})})()}),(()=>{if(!$)return;const r=!!("default"===A)&&x;return e(Xl,{children:[t(Jl,Object.assign({ref:L,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:q},{children:"Cancel"})),t(Jl,Object.assign({"data-testid":"done-button",ref:I,type:"button",onClick:()=>(e=>{e||(T(B),"default"===A?K("confirmed"):N("default"))})(r),disabled:r},{children:"Done"}))]})})()]}))})),cc=x.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,dc=x.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,uc=x.div`
    grid-column: 1 / -1;
    display: flex;
`,hc=x.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`,pc=x.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return O`
                    left: 0;
                `;case"right":return O`
                    right: 0;
                `}}}
`,fc=x.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`,mc=x(Ur.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:r,$variant:n}=e;if(t&&r)return O`
                ${Wr("H5","semibold")};
                color: ${Er.Accent.Light[2]};
            `;if(t)return O`
                color: ${Er.Neutral[4]};
            `;if(r)return O`
                ${Wr("H5","semibold")};
                color: ${Er.Primary};
            `;switch(n){case"other-month":return O`
                    color: ${Er.Neutral[4]};
                `;case"today":return O`
                    color: ${Er.Neutral[3]};
                `;case"default":return O`
                    color: ${Er.Neutral[1]};
                `}}}
`,gc=x(pc)`
    ${e=>{const{$selected:t}=e;if(t)return O`
                border-top: 1px solid ${Er.Accent.Light[4]};
                border-bottom: 1px solid ${Er.Accent.Light[4]};
                background-color: ${Er.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:r}=e;return t?O`
                border-top: 1px dashed ${Er.Accent.Light[4]};
                border-bottom: 1px dashed ${Er.Accent.Light[4]};
                background-color: ${Er.Accent.Light[6]};
            `:r?O`
                background-color: ${Er.Accent.Light[4]};
            `:void 0}}
`,bc=x(fc)`
    ${e=>{const{$hovered:t,$selected:r}=e;return r?O`
                background: ${Er.Accent.Light[5]};
                border: 1px solid ${Er.Primary};
            `:t?O`
                box-shadow: 0px 0px 4px 1px ${Er.Shadow.Accent};
                border: 1px solid ${Er.Accent.Light[1]};
                background-color: ${Er.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:r}=e;return t?O`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${Er.Shadow.Accent};
                    border: 1px solid ${Er.Accent.Light[1]};
                    background-color: ${Er.Neutral[8]};
                }
            `:r?O`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:r,$variant:n}=e;return r?O`
                border: 1px solid ${Er.Accent.Light[1]};
                background: ${Er.Accent.Light[4]};

                :hover {
                    background: ${Er.Accent.Light[4]};
                }
            `:t?O`
                color: ${Er.Neutral[4]};
            `:"today"===n?O`
                    background: ${Er.Accent.Light[5]};
                `:void 0}}
`,yc=x(pc)`
    ${e=>{const{$hovered:t,$selected:r}=e;return t?O`
                border-top: 1px dashed ${Er.Accent.Light[4]};
                border-bottom: 1px dashed ${Er.Accent.Light[4]};
                background-color: ${Er.Accent.Light[6]};
            `:r?O`
                border-top: 1px solid ${Er.Primary};
                border-bottom: 1px solid ${Er.Primary};
                background-color: ${Er.Accent.Light[5]};
            `:void 0}}

    ${e=>{if(e.$overlap)return O`
                border-top: 1px solid ${Er.Primary};
                border-bottom: 1px solid ${Er.Primary};
                background-color: ${Er.Neutral[8]};
                box-shadow: 4px 0px 4px 0px ${Er.Shadow.Accent};
            `}}
`,vc=x.div`
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

    ${e=>{if(e.$hovered)return O`
                border: 1px dashed ${Er.Accent.Light[4]};

                ::before {
                    background-color: ${Er.Accent.Light[6]};
                }
            `}}

    ${e=>{if(e.$selected)return O`
                border: 1px solid ${Er.Primary};

                ::before {
                    background-color: ${Er.Accent.Light[5]};
                }
            `}}

    ${e=>{if(e.$overlap)return O`
                ::before {
                    background-color: ${Er.Neutral[8]};
                }
            `}}

    ${e=>e.$overlap&&"left"===e.$position?O`
                box-shadow: -1px 0px 4px 0px ${Er.Shadow.Accent};
            `:e.$overlap&&"right"===e.$position?O`
                box-shadow: 1px 0px 4px 0px ${Er.Shadow.Accent};
            `:void 0}

    ${e=>{switch(e.$position){case"left":return O`
                    display: block;

                    ::before {
                        left: 50%;
                    }
                `;case"right":return O`
                    display: block;

                    ::before {
                        right: 50%;
                    }
                `}}}
`,wc=x(fc)`
    ${e=>{const{$hovered:t,$selected:r,$position:n}=e;if(r){if("left"===n)return O`
                    background: ${Er.Accent.Light[5]};
                `;if("right"===n)return O`
                    background: ${Er.Accent.Light[5]};
                `}if(t)return O`
                background-color: ${Er.Accent.Light[6]};
            `}}

    ${e=>{const{$overlap:t,$position:r}=e;if(t){if("left"===r)return O`
                    background-color: ${Er.Neutral[8]};
                `;if("right"===r)return O`
                    background-color: ${Er.Neutral[8]};
                `}}}

    ${e=>{const{$interactive:t,$disabledDisplay:r}=e;return t?O`
                cursor: pointer;
            `:r?O`
                cursor: not-allowed;
            `:void 0}}
    
    ${e=>{const{$disabledDisplay:t,$overlap:r,$selected:n,$variant:a}=e;return t?O`
                color: ${Er.Neutral[4]};
            `:"today"===a?r?O`
                    background: ${Er.Neutral[8]};
                    height: 2.35rem;
                `:n?O`
                    height: 2.35rem;
                `:O`
                    background: ${Er.Accent.Light[5]};
                `:void 0}}
`,$c=x(mc)`
    ${e=>{if("default"===e.$view)return O`
                z-index: 1;
            `}}
`,xc=({type:n,dayDate:a,currentView:i,variant:o,styleLeftProps:s,styleRightProps:l,styleCircleProps:c,styleLabelProps:d,styleOverflowCirleProps:u,onDayClick:h,onHoverCell:p})=>t(r,{children:(()=>{const r=a.format("YYYY-MM-DD");switch(n){case"regular":return e(hc,{children:[t(gc,Object.assign({$position:"left"},s)),t(gc,Object.assign({$position:"right"},l)),t(bc,Object.assign({$variant:o,onClick:()=>h(a,!c.$interactive),onMouseEnter:()=>p(r,!c.$interactive)},c,{children:t(mc,Object.assign({weight:d.$selected?"semibold":"regular",$variant:o},d,{children:a.format("D")}))}))]});case"week":return e(hc,{children:[t(yc,Object.assign({$position:"left"},s)),t(yc,Object.assign({$position:"right"},l)),t(wc,Object.assign({$variant:o,onClick:()=>h(a,!c.$interactive),onMouseEnter:()=>p(r,!c.$interactive)},c,u,{children:t($c,Object.assign({weight:d.$selected?"semibold":"regular",$variant:o,$view:i},d,{children:a.format("D")}))})),t(vc,Object.assign({},c,u))]})}})()}),Oc=[1,3,5,7,8,10,12],Sc=[4,6,9,11];var _c,kc,jc;function Dc({ref:e,formatter:t}){return()=>{const r=e.current,n=r.value,a=t(n),i=n.substring(0,r.selectionEnd),o=t(i),s=i.length-o.length,l=Math.max(0,r.selectionEnd-s);return{nextValue:a,updateCaretPosition:()=>{r.value=a,r.setSelectionRange(l,l)}}}}!function(e){e.clampDay=(t,r,n)=>{const a=parseInt(t),i=parseInt(r),o=parseInt(n);return 0==a?"1":Oc.includes(i)?Math.min(a,31).toString():Sc.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=fl(e,r);return fl(t,r).diff(n,"minute")}}(_c||(_c={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(kc||(kc={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,a=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/a));const o=n+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width}}(jc||(jc={}));const Cc=e=>{const[t,r]=i(e),n=o(e);return[t,m((e=>{n.current=e,r(e)}),[]),n]};var Mc;fl.extend(xl),function(e){e.generateStyleProps=(e,t,r,n,a,i,o,s,l,c,d)=>{const u=e.format("YYYY-MM-DD"),h={},p={},f={},m={},g=Pc(e,l,o,s),b=t&&r&&t===r;return!d&&["reset-start","reset-end"].includes(a)&&[t,r].includes(u)&&(f.$overlap=!0),(g||Fc(e,i,t,r,d))&&(f.$disabledDisplay=!0,m.$disabledDisplay=!0),f.$interactive=!g||c,[t,r].includes(u)&&(f.$selected=!0,m.$selected=!0),t&&r&&!b&&e.isBetween(t,r,"day","[]")&&(m.$selected=!0,e.isSame(t)?p.$selected=!0:e.isSame(r)?h.$selected=!0:(h.$selected=!0,p.$selected=!0)),"hover-start"===a&&e.isBetween(r,n,"day","[]")&&(m.$selected=!0,r===u?h.$hovered=!0:n===u?(p.$hovered=!0,f.$hovered=!0):(h.$hovered=!0,p.$hovered=!0)),"hover-end"===a&&e.isBetween(t,n,"day","[]")&&(m.$selected=!0,t===u?p.$hovered=!0:n===u?(h.$hovered=!0,f.$hovered=!0):(h.$hovered=!0,p.$hovered=!0)),"overlap-start"===a&&e.isBetween(r,n,"day","[]")&&(n===u?(p.$overlap=!0,f.$overlap=!0):r===u?(h.$overlap=!0,f.$overlap=!0,f.$hovered=!0):(h.$overlap=!0,p.$overlap=!0)),"overlap-end"===a&&e.isBetween(t,n,"day","[]")&&(n===u?(h.$overlap=!0,f.$overlap=!0):t===u?(p.$overlap=!0,f.$overlap=!0,f.$hovered=!0):(h.$overlap=!0,p.$overlap=!0)),"full-overlap-start"===a&&e.isBetween(r,n,"day","[]")&&(t===u&&b?(h.$hovered=!0,f.$overlap=!0):t===u?(h.$hovered=!0,p.$overlap=!0,f.$overlap=!0):r===u?(h.$overlap=!0,f.$overlap=!0):e.isSame(n)?(p.$hovered=!0,m.$selected=!0,f.$hovered=!0):e.isBetween(t,n,"day","()")&&(h.$hovered=!0,p.$hovered=!0,m.$selected=!0)),"full-overlap-end"===a&&e.isBetween(t,n,"day","[]")&&(r===u&&b?(p.$hovered=!0,f.$overlap=!0):r===u?(h.$overlap=!0,p.$hovered=!0,f.$overlap=!0):t===u?(p.$overlap=!0,f.$overlap=!0):e.isSame(n)?(h.$hovered=!0,m.$selected=!0,f.$hovered=!0):e.isBetween(r,n,"day","()")&&(h.$hovered=!0,p.$hovered=!0,m.$selected=!0)),["full-overlap-end","full-overlap-start"].includes(a)&&e.isBetween(t,r,"day","()")&&(h.$overlap=!0,p.$overlap=!0),{styleLeftProps:h,styleRightProps:p,styleCircleProps:f,styleLabelProps:m}},e.getStylePropsForWeekSelection=(e,t,r,n,a,i,o,s)=>{const l={},c={},d={},u={},h={},p=Pc(e,o,a,i);if(p&&(d.$disabledDisplay=!0,u.$disabledDisplay=!0),d.$interactive=!p||s,t){const{firstDayOfWeek:r,lastDayOfWeek:n}=Tc(t);e.isBetween(r,n,"day","[]")&&(u.$selected=!0,e.isSame(r)?(c.$selected=!0,d.$selected=!0,h.$position="left"):e.isSame(n)?(l.$selected=!0,d.$selected=!0,h.$position="right"):(l.$selected=!0,d.$selected=!0,c.$selected=!0))}if(n){const{firstDayOfWeek:t,lastDayOfWeek:r}=Tc(n);e.isBetween(t,r,"day","[]")&&(u.$selected=!0,e.isSame(t)?(c.$hovered=!0,d.$hovered=!0,h.$position="left"):e.isSame(r)?(l.$hovered=!0,d.$hovered=!0,h.$position="right"):(l.$hovered=!0,c.$hovered=!0))}if(t&&r&&n&&e.isBetween(t,r,"day","[]")&&fl(n).isBetween(t,r,"day","[]")){const{firstDayOfWeek:r,lastDayOfWeek:n}=Tc(t);e.isBetween(r,n,"day","[]")&&(u.$selected=!0,e.isSame(r)?(c.$overlap=!0,d.$overlap=!0,h.$position="left"):e.isSame(n)?(l.$overlap=!0,d.$overlap=!0,h.$position="right"):(l.$overlap=!0,d.$overlap=!0,c.$overlap=!0))}return{styleLeftProps:l,styleRightProps:c,styleCircleProps:d,styleLabelProps:u,styleOverflowCirleProps:h}}}(Mc||(Mc={}));const Pc=(e,t,r,n)=>{const a=kl.isWithinRange(e,r?fl(r):void 0,n?fl(n):void 0),i=t&&t.includes(e.format("YYYY-MM-DD"));return!a||i},Fc=(e,t,r,n,a)=>{const i="start"===t&&n&&e.isAfter(n)&&a,o="end"===t&&r&&e.isBefore(r)&&a;return i||o},Tc=e=>({firstDayOfWeek:fl(e).startOf("week").format("YYYY-MM-DD"),lastDayOfWeek:fl(e).endOf("week").format("YYYY-MM-DD")});fl.extend(xl);const Bc=({calendarDate:r,currentFocus:n,disabledDates:a,selectedStartDate:o,selectedEndDate:s,onSelect:l,onHover:c,isNewSelection:d,minDate:u,maxDate:h,variant:p,allowDisabledSelection:f})=>{const m=b((()=>kl.generateDays(r)),[r]),[g,y]=i(""),v=(e,t)=>{t&&!f||l(e)},w=(e,t)=>{t&&!f||(y(e),c(e))},$=()=>{y(""),c("")},x=(()=>{if(!g||"single"===p)return null;const e=fl(g);if(o&&s)if(e.isBefore(o)){if("start"===n)return"full-overlap-start";if("end"===n)return"reset-end"}else if(e.isAfter(s)){if("end"===n)return"full-overlap-end";if("start"===n)return"reset-start"}else if(e.isBetween(o,s,"day","[]")&&![o,s].includes(g)){if("start"===n)return"overlap-start";if("end"===n)return"overlap-end"}if(o&&!s){if(e.isAfter(o)&&"end"===n)return"hover-end"}else if(!o&&s&&e.isBefore(s)&&"start"===n)return"hover-start";return null})();return e(cc,Object.assign({"data-testid":"calendar-content"},{children:[m[0].map(((e,r)=>t(dc,{children:t(Ur.H6,Object.assign({weight:"semibold"},{children:fl(e).format("ddd")}))},`week-day-${r}`))),m.map(((e,i)=>t(uc,Object.assign({onMouseLeave:$},{children:e.map(((e,i)=>{const{variant:l}=(e=>({variant:r.month()!==e.month()?"other-month":fl().isSame(e,"day")?"today":"default"}))(e),{styleLeftProps:c,styleRightProps:p,styleCircleProps:m,styleLabelProps:b}=Mc.generateStyleProps(e,o,s,g,x,n,u,h,a,f,d);return t(xc,{type:"regular",dayDate:e,variant:l,styleLeftProps:c,styleRightProps:p,styleCircleProps:m,styleLabelProps:b,onDayClick:v,onHoverCell:w},`day-${i}`)}))}),i)))]}))},Ec=({calendarDate:r,disabledDates:n,selectedStartDate:a,selectedEndDate:o,onSelect:s,onHover:l,minDate:c,maxDate:d,currentView:u,allowDisabledSelection:h})=>{const p=b((()=>kl.generateDays(r)),[r]),[f,m]=i(""),g=(e,t)=>{if(t&&!h)return;const r=e.startOf("week");s(r),e&&!fl(e).isSame(r,"month")&&m("")},y=(e,t)=>{t&&!h||(m(e),l(e))},v=()=>{m(""),l("")};return e(cc,Object.assign({"data-testid":"calendar-content"},{children:[p[0].map(((e,r)=>t(dc,{children:t(Ur.H6,Object.assign({weight:"semibold"},{children:fl(e).format("ddd")}))},`week-day-${r}`))),p.map(((e,i)=>t(uc,Object.assign({onMouseLeave:v},{children:e.map(((e,i)=>{const{variant:s}=(e=>({variant:r.month()!==e.month()?"other-month":fl().isSame(e,"day")?"today":"default"}))(e),{styleLeftProps:l,styleRightProps:p,styleCircleProps:m,styleLabelProps:b,styleOverflowCirleProps:v}=Mc.getStylePropsForWeekSelection(e,a,o,f,c,d,n,h);return t(xc,{type:"week",dayDate:e,variant:s,currentView:u,styleLeftProps:l,styleRightProps:p,styleCircleProps:m,styleLabelProps:b,styleOverflowCirleProps:v,onDayClick:g,onHoverCell:y},`day-${i}`)}))}),i)))]}))},Ac=x.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${Er.Neutral[8]};

    ${e=>{if("input"===e.$type)return O`
                border: 1px solid ${Er.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,Nc=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:a,onDismiss:i,value:s,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:h,maxDate:p,allowDisabledSelection:f,type:m="standalone",selectWithinRange:g=!0,initialCalendarDate:b},v)=>{const w=o(),$=o(void 0);y(v,(()=>({reset(){w.current.resetView()},setCalendarDate(e){w.current.setCalendarDate(e)}})));const x=e=>{const t=e.format("YYYY-MM-DD");w.current.setCalendarDate(t),S(t)},O=e=>{_(e)},S=e=>{n&&n(e)},_=e=>{a&&a(e)},k=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(Ac,Object.assign({$type:m},{children:t(lc,Object.assign({type:m,ref:w,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:i,minDate:h,maxDate:p,selectWithinRange:g,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:f,onCalendarDateChange:e=>{$.current&&$.current.isSame(e,"month")||k(e),$.current=e},initialCalendarDate:b},{children:({calendarDate:r,currentView:n})=>((r,n)=>{switch(u){case"single":case"range":default:return t(Bc,{calendarDate:r,currentFocus:c,disabledDates:e,selectedStartDate:s,selectedEndDate:l,variant:u,minDate:h,maxDate:p,isNewSelection:g,allowDisabledSelection:f,onSelect:x,onHover:O});case"week":return t(Ec,{calendarDate:r,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:p,currentView:n,allowDisabledSelection:f,onSelect:x,onHover:O})}})(r,n)}))}))})),Ic=a.forwardRef(((e,r)=>{const{isOpen:n}=e,a=H(e,["isOpen"]),i=o(),l=Sa(),c=Hs({height:n?l.height:0});return s((()=>{n&&i.current.reset()}),[n]),y(r,(()=>i.current)),t(hl,Object.assign({style:c},{children:t("div",Object.assign({ref:l.ref,inert:n?void 0:""},{children:t(Nc,Object.assign({ref:i},a))}))}))})),Lc={collections:{base:{InputBoxShadow:O`
        inset 0 0 6px 1px ${Er.Shadow.Accent}
    `,InputErrorBoxShadow:O`
        inset 0 0 6px 1px ${Er.Shadow.Red}
    `,ElevationBoxShadow:O`
      0px 2px 8px ${Er.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:O`
        inset 0 0 6px 1px ${Er.Shadow.Accent}
    `,InputErrorBoxShadow:O`
        inset 0 0 6px 1px ${Er.Shadow.Red}
    `,ElevationBoxShadow:O`
      0px 2px 8px ${Er.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},zc=e=>t=>{var r;const n=t.theme,a=Pr(Lc,n[Fr.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Mr(a,e,n.options.designToken):Mr(a,e)},Rc=zc("InputBoxShadow"),Hc=zc("InputErrorBoxShadow"),Vc=(zc("ElevationBoxShadow"),zc("Table.Header"),zc("Table.Cell.Primary"),zc("Table.Cell.Secondary"),zc("Table.Cell.Selected"),zc("Table.Cell.Hover"),x.div`
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
        box-shadow: ${Rc};
    }

    ${e=>e.$readOnly?O`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?O`
                background: ${Er.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Er.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?O`
                border: 1px solid ${Er.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Er.Validation.Red.Border};
                    box-shadow: ${Hc};
                }
            `:void 0}
`),Wc=x.input`
    ${Wr("Body","regular")}
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
`,Yc=x.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Uc=x.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return O`
                ${qc}, ${Zc} {
                    color: ${Er.Neutral[4]};
                }
            `}}
`,qc=x(Wc)`
    background: transparent;
    text-align: center;
`,Qc=x(qc)`
    width: 2rem;
    margin-right: 0.25rem;
`,Kc=x(qc)`
    width: 2.5rem;
`,Gc=x(qc)`
    width: 3rem;
    margin-left: 0.25rem;
`,Zc=x(Ur.Body)`
    ${e=>{if(e.$inactive)return O`
                color: ${Er.Neutral[3](e)};
            `}}
`,Xc=x.div`
    ${Wr("Body","regular")}
    background-color: ${Er.Neutral[8]};
    color: ${Er.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?O`
                background-color: ${Er.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$hide?O`
                display: none;
            `:void 0}
`;fl.extend(yl);const Jc=a.forwardRef((({disabled:r,readOnly:n,names:a,value:l,focused:c,hoverValue:d,placeholder:u,label:h,onChange:p,onFocus:f,onBlur:m},g)=>{const[b,v,w]=Cc(""),[$,x,O]=Cc(""),[S,_,k]=Cc(""),[j,D]=i("none"),[C,M]=i(!1),P=o(null),F=o(null),T=o(null),B=o(null),[E,A,N]=H(d);s((()=>{const[e="",t="",r=""]=H(l);v(e),x(t),_(r)}),[l]),s((()=>{c||D("none"),c&&(M(!0),P.current.contains(document.activeElement)||F.current.focus())}),[c]),y(g,(()=>({ref:P,resetPlaceholder(){M(!1)},resetInput(){const[e="",t="",r=""]=H(l);v(e),x(t),_(r)}})),[l]);const I=e=>{e.target.select();const t=e.target.name;D(t)},L=e=>{const[t,r,n]=a,i={[t]:w.current,[r]:O.current,[n]:k.current},o=e.target.name,s=i[o],l=o!==n?jc.padValue(s,!0):s;switch(o){case t:i[t]=l,v(l);break;case r:i[r]=l,x(l)}const c=`${i[n]}-${i[r]}-${i[t]}`,d=fl(c,"YYYY-MM-DD",!0).isValid(),u=!i[t]&&!i[r]&&!i[n];d&&s!==l&&p(c),P.current.contains(e.relatedTarget)||(D("none"),null==m||m(u||d))},z=e=>{if(d)return;const t=e.target.name,r=e.target.value.replace(/[^0-9]/g,""),n={day:b,month:$,year:S};switch(t){case a[0]:n.day=r,v(r),2===r.length&&T.current.focus();break;case a[1]:n.month=r,x(r),2===r.length&&B.current.focus();break;case a[2]:n.year=r,_(r)}if(!n.day&&!n.month&&!n.year)return void p("");const i=`${n.year}-${n.month}-${n.day}`;fl(i,"YYYY-MM-DD",!0).isValid()&&p(i)},R=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(j===a[1]&&0===$.length&&F.current.focus(),j===a[2]&&0===S.length&&T.current.focus())};function H(e){if(e){const t=fl(e,"YYYY-MM-DD");return[jc.padValue(t.date().toString()),jc.padValue((t.month()+1).toString()),t.year().toString()]}return[void 0,void 0,void 0]}return e(Yc,Object.assign({role:"group","aria-label":h,onClick:()=>{r||n||(M(!0),P.current.contains(document.activeElement)||F.current.focus())},onFocus:()=>{r||(M(!0),c||f())}},{children:[e(Uc,Object.assign({ref:P,$hover:!!d},{children:[t(Qc,{ref:F,name:a[0],maxLength:2,value:null!=E?E:b,onFocus:I,onBlur:L,onChange:z,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":`${a[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:j!==a[0]||n?"DD":""}),t(Zc,Object.assign({$inactive:0===b.length},{children:"/"})),t(Kc,{ref:T,name:a[1],maxLength:2,value:null!=A?A:$,onFocus:I,onBlur:L,onChange:z,onKeyDown:R,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":`${a[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:j!==a[1]||n?"MM":""}),t(Zc,Object.assign({$inactive:0===$.length},{children:"/"})),t(Gc,{ref:B,name:a[2],maxLength:4,value:null!=N?N:S,onFocus:I,onBlur:L,onChange:z,onKeyDown:R,type:"text",inputMode:"numeric",pattern:"[0-9]{4}","data-testid":`${a[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:j!==a[2]||n?"YYYY":""})]})),(()=>{if(!l&&!n&&u)return t(Xc,Object.assign({$hide:C,$disabled:r},{children:u}))})()]}))}));var ed;fl.extend(xl),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:a}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!fl(e).isBefore(n,"day"))||!(!a||!fl(e).isAfter(a,"day")))}}(ed||(ed={}));const td=x(Vc)`
    height: 3rem;
`,rd=r=>{var{minDate:n,maxDate:a,disabled:l,disabledDates:c,error:d,value:u,onChange:h,onFocus:p,onBlur:f,onYearMonthDisplayChange:m,withButton:g=!0,readOnly:b,id:y,allowDisabledSelection:v}=r,w=H(r,["minDate","maxDate","disabled","disabledDates","error","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection"]);const[$,x]=i(u),[O,S]=i(u),[_,k]=i(void 0),[j,D]=i(!1),C=o(null),M=o(),P=o(),F=U.exports.useMediaQuery({maxWidth:q.mobileL}),T=g||F;s((()=>{x(u),S(u)}),[u]);const B=e=>{!v&&ed.isDateDisabled(e,{disabledDates:c,minDate:n,maxDate:a})||(S(e),T||(E(e),x(e),e&&D(!1)))},E=e=>{h&&h(e)},A=()=>{f&&f()};return e(td,Object.assign({ref:C,$disabled:l,$readOnly:b,$error:d,id:y,"data-testid":w["data-testid"],tabIndex:-1,onBlur:e=>{C&&!C.current.contains(e.relatedTarget)&&(P.current.resetInput(),S($),D(!1),A())},onKeyDown:function(e){"Escape"===e.code&&(P.current.resetInput(),S($),D(!1))}},w,{children:[t(Jc,{ref:P,disabled:l,onChange:B,onFocus:()=>{b||(D(!0),p&&p())},readOnly:b,focused:j,names:["start-day","start-month","start-year"],value:O,hoverValue:_}),t(Ic,{ref:M,type:"input",variant:"single",initialCalendarDate:O,isOpen:j,withButton:T,value:O,disabledDates:c,minDate:n,maxDate:a,allowDisabledSelection:v,onHover:e=>{k(e)},onSelect:B,onDismiss:e=>{switch(e){case"reset":S($);break;case"confirmed":x(O),E(O)}D(!1)},onYearMonthDisplayChange:m})]}))},nd=e=>`@media screen and (max-width: ${e}px)`,ad=x.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$minWidthBeforeWrap)return O`
                ${nd(e.$minWidthBeforeWrap)} {
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
`,id=x.div`
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
`,od=x(F)`
    color: ${Er.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,sd=x.div`
    position: absolute;
    background: ${e=>e.$error?Er.Validation.Red.Border(e):Er.Primary(e)};
    height: 0.125rem;
    // half - half padding - half icon width
    width: calc(50% - 0.5rem - (1.125rem / 2));
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return O`
                    opacity: 1;
                `;case"end":return O`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return O`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$minWidthBeforeWrap)return O`
                ${nd(e.$minWidthBeforeWrap)} {
                    display: none;
                }
            `}}
`,ld=({children:r,currentActive:n,error:a,className:i,minWidthBeforeWrap:o})=>{const[s,l]=r;return e(ad,Object.assign({className:i,$minWidthBeforeWrap:o},{children:[t(id,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),t(od,{}),t(id,Object.assign({"data-id":"range-container-elem2-container"},{children:l})),t(sd,{"data-id":"range-container-indicator",$position:n,$error:a,$minWidthBeforeWrap:o})]}))},cd=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},dd=x(Vc)`
    @media screen and (max-width: ${374}px) {
        padding: 0.75rem 1rem;
    }
`,ud=x.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    @media screen and (max-width: ${374}px) {
        height: fit-content;
    }
`,hd={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1},pd=r=>{var{minDate:n,maxDate:a,disabled:l,disabledDates:c,error:d,value:u,valueEnd:h,onChange:p,onFocus:f,onBlur:m,onYearMonthDisplayChange:g,withButton:b=!0,variant:y="range",readOnly:w,id:$,allowDisabledSelection:x}=r,O=H(r,["minDate","maxDate","disabled","disabledDates","error","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","readOnly","id","allowDisabledSelection"]);const[S,_]=i(),[k,j]=i(void 0),[D,C]=i(!1),M="week"===y,[{selectedStart:P,selectedEnd:F,currentFocus:T,calendarOpen:B,isStartDirty:E,isEndDirty:A},N]=(({initialState:e,reducers:t,name:r,debug:n})=>{const[a,i]=v(((e,r)=>t[r.type]?t[r.type](e,r.payload):e),e);return[a,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{n&&cd(r,e,t),i({type:e,payload:t})}])))]})({name:"date-range-input",initialState:hd,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:M?"none":t,calendarOpen:!w}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),I=o(!1),L=o(),z=o(),R=o(),V=o(),W=U.exports.useMediaQuery({maxWidth:on.mobileL}),Y=b||W;s((()=>{N.resetRange({start:u,end:h})}),[u,h]),s((()=>{"start"===T?_(P):"end"===T&&_(F)}),[T]);const q=e=>{if(Z(e))return void(I.current=!0);if(N.changeStart(e),z.current.setCalendarDate(e),I.current=!1,!e)return void(Y||F||!A||(N.resetRange({start:"",end:""}),null==p||p("","")));if(!F)return void N.focus("end");if(fl(e).isAfter(F,"day"))N.reselectEnd();else{if(A)return Y?void 0:(N.done({start:e,end:F}),void(null==p||p(e,F)));N.focus("end")}},Q=e=>{if(Z(e))return void(I.current=!0);if(N.changeEnd(e),z.current.setCalendarDate(e),!e)return void(Y||P||!E||(N.resetRange({start:"",end:""}),null==p||p("","")));if(!P)return void N.focus("start");if(fl(e).isBefore(P,"day"))N.reselectStart();else{if(E)return Y?void 0:(N.done({start:P,end:e}),void(null==p||p(P,e)));N.focus("start")}},K=e=>()=>{w||(N.focus(e),G(),f&&f())},G=()=>{if(M){const e=fl(P).startOf("week").format("YYYY-MM-DD");C(!0),_(e)}},Z=e=>!x&&e&&ed.isDateDisabled(e,{disabledDates:c,minDate:n,maxDate:a}),X=e=>{let t={start:void 0,end:void 0};switch(y){case"range":t={start:"start"===T?k:void 0,end:"end"===T?k:void 0};break;case"week":if(!k)return;t={start:fl(k).startOf("week").format("YYYY-MM-DD"),end:fl(k).endOf("week").format("YYYY-MM-DD")}}return t[e]};return e(dd,Object.assign({ref:L,$disabled:l,$readOnly:w,$error:d,id:$,"data-testid":O["data-testid"],onBlur:e=>{L.current.contains(e.relatedTarget)||(N.blur(),C(!1),R.current.resetPlaceholder(),V.current.resetPlaceholder(),null==m||m())},onKeyDown:e=>{"Escape"===e.code&&N.blur(),"Enter"!==e.code||Y||(P&&F?(N.done({start:P,end:F}),null==p||p(P,F)):N.blur())}},O,{children:[e(ld,Object.assign({currentActive:T,minWidthBeforeWrap:374,error:d},{children:[t(ud,{children:t(Jc,{ref:R,placeholder:"From",names:["start-day","start-month","start-year"],value:P,disabled:l,readOnly:D||w,focused:"start"===T,hoverValue:X("start"),onChange:q,onFocus:K("start"),onBlur:e=>{e&&!I.current||(N.resetStart(),R.current.resetInput())}})}),t(ud,{children:t(Jc,{ref:V,placeholder:"To",names:["end-day","end-month","end-year"],value:F,disabled:l,readOnly:D||w,focused:"end"===T,hoverValue:X("end"),onChange:Q,onFocus:K("end"),onBlur:e=>{e&&!I.current||(N.resetEnd(),V.current.resetInput())}})})]})),t(Ic,{ref:z,type:"input",variant:y,initialCalendarDate:S,isOpen:B,withButton:Y,value:P,endValue:F,selectWithinRange:E||A,currentFocus:T,disabledDates:c,minDate:n,maxDate:a,allowDisabledSelection:x,onSelect:e=>{"start"===T?q(e):"end"===T&&Q(e),M&&(e=>{const t=fl(e).startOf("week").format("YYYY-MM-DD"),r=fl(e).endOf("week").format("YYYY-MM-DD");if(N.changeStart(t),N.changeEnd(r),I.current=!1,!Y)N.done({start:t,end:r}),null==p||p(t,r)})(e)},onDismiss:e=>{switch(e){case"reset":N.cancel();break;case"confirmed":N.done({start:P,end:F}),null==p||p(P,F)}},onHover:e=>{j(e)},onYearMonthDisplayChange:g})]}))},fd=x.input`
    ${Wr("Body","regular")}
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

    ${e=>"number"===e.type?O`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?O`
                cursor: not-allowed;
            `:void 0}
`,md=x.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Er.Neutral[3]};
    background-color: transparent;
    border: none;
`,gd=x(D)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,bd=x.div`
    display: flex;
    width: 100%;
`,yd=a.forwardRef(((n,a)=>{var{value:i,spacing:s,type:l,error:c,disabled:d,readOnly:u,onChange:h,onClear:p,allowClear:f=!1,className:m,styleType:g="bordered"}=n,b=H(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const v=o();y(a,(()=>v.current),[]);const w=Dc({ref:v,formatter:e=>jc.transformWithSpaces(e,s)}),$=e=>{h&&(O()?S(e):h(e))},x=()=>{p&&p(),v&&v.current&&v.current.focus()},O=()=>"tel"===l&&s,S=e=>{const{nextValue:t,updateCaretPosition:r}=w(),n=t.replace(/\s/g,"");e.target.value=n,h(e),r()},_=i?(e=>e?O()?jc.transformWithSpaces(e,s):e:"")(i):i,k=()=>e(r,{children:[t(fd,Object.assign({"data-testid":"input",ref:v,disabled:d,value:_,onChange:$,type:l,readOnly:u},b)),f&&!d&&!u&&!!i&&t(md,Object.assign({onClick:x,type:"button"},{children:t(gd,{"aria-hidden":!0})}))]});return t(r,{children:"no-border"===g?t(bd,Object.assign({className:m},{children:k()})):t(Vc,Object.assign({$disabled:d,$error:c,$readOnly:u,className:m},{children:k()}))})})),vd=a.forwardRef(((e,r)=>{const{label:n,errorMessage:a,id:i="form-field","data-error-testid":o,"data-testid":s}=e,l=H(e,["label","errorMessage","id","data-error-testid","data-testid"]);return t(Cn,Object.assign({id:i,label:n,errorMessage:a,disabled:l.disabled,"data-error-testid":o},{children:t(yd,Object.assign({id:`${i}-base`,"data-testid":s||i,ref:r,error:!!a},l))}))})),wd=x.div`
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
        box-shadow: ${Rc};
    }

    ${e=>e.$readOnly?O`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?O`
                background: ${Er.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Er.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?O`
                border: 1px solid ${Er.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Er.Validation.Red.Border(e)};
                    box-shadow: ${Hc};
                }
            `:void 0}
`,$d=x(yd)`
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
`,xd=x.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Wr("Body","regular")}
    color: ${Er.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${Er.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return O`
                color: ${Er.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${Er.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?O`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:O`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`;var Od=Rt;var Sd=Rt,_d=Ht,kd=ar;var jd=Rt,Dd=function(){this.__data__=new Od,this.size=0},Cd=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Md=function(e){return this.__data__.get(e)},Pd=function(e){return this.__data__.has(e)},Fd=function(e,t){var r=this.__data__;if(r instanceof Sd){var n=r.__data__;if(!_d||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new kd(n)}return r.set(e,t),this.size=r.size,this};function Td(e){var t=this.__data__=new jd(e);this.size=t.size}Td.prototype.clear=Dd,Td.prototype.delete=Cd,Td.prototype.get=Md,Td.prototype.has=Pd,Td.prototype.set=Fd;var Bd=Td;var Ed=ar,Ad=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Nd=function(e){return this.__data__.has(e)};function Id(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ed;++t<r;)this.add(e[t])}Id.prototype.add=Id.prototype.push=Ad,Id.prototype.has=Nd;var Ld=Id,zd=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Rd=function(e,t){return e.has(t)};var Hd=function(e,t,r,n,a,i){var o=1&r,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=i.get(e),d=i.get(t);if(c&&d)return c==t&&d==e;var u=-1,h=!0,p=2&r?new Ld:void 0;for(i.set(e,t),i.set(t,e);++u<s;){var f=e[u],m=t[u];if(n)var g=o?n(m,f,u,t,e,i):n(f,m,u,e,t,i);if(void 0!==g){if(g)continue;h=!1;break}if(p){if(!zd(t,(function(e,t){if(!Rd(p,t)&&(f===e||a(f,e,r,n,i)))return p.push(t)}))){h=!1;break}}else if(f!==m&&!a(f,m,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var Vd=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Wd=X.Uint8Array,Yd=jt,Ud=Hd,qd=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},Qd=Vd,Kd=ie?ie.prototype:void 0,Gd=Kd?Kd.valueOf:void 0;var Zd=function(e,t,r,n,a,i,o){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new Wd(e),new Wd(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Yd(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=qd;case"[object Set]":var l=1&n;if(s||(s=Qd),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;n|=2,o.set(e,t);var d=Ud(s(e),s(t),n,a,i,o);return o.delete(e),d;case"[object Symbol]":if(Gd)return Gd.call(e)==Gd.call(t)}return!1};var Xd=function(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e},Jd=Ee;var eu=function(e,t,r){var n=t(e);return Jd(e)?n:Xd(n,r(e))};var tu=function(e,t){for(var r=-1,n=null==e?0:e.length,a=0,i=[];++r<n;){var o=e[r];t(o,r,e)&&(i[a++]=o)}return i},ru=function(){return[]},nu=Object.prototype.propertyIsEnumerable,au=Object.getOwnPropertySymbols,iu=au?function(e){return null==e?[]:(e=Object(e),tu(au(e),(function(t){return nu.call(e,t)})))}:ru;var ou=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},su=ge,lu=be;var cu=function(e){return lu(e)&&"[object Arguments]"==su(e)},du=be,uu=Object.prototype,hu=uu.hasOwnProperty,pu=uu.propertyIsEnumerable,fu=cu(function(){return arguments}())?cu:function(e){return du(e)&&hu.call(e,"callee")&&!pu.call(e,"callee")},mu={exports:{}};var gu=function(){return!1};!function(e,t){var r=X,n=gu,a=t&&!t.nodeType&&t,i=a&&e&&!e.nodeType&&e,o=i&&i.exports===a?r.Buffer:void 0,s=(o?o.isBuffer:void 0)||n;e.exports=s}(mu,mu.exports);var bu=/^(?:0|[1-9]\d*)$/;var yu=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&bu.test(e))&&e>-1&&e%1==0&&e<t};var vu=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},wu=ge,$u=vu,xu=be,Ou={};Ou["[object Float32Array]"]=Ou["[object Float64Array]"]=Ou["[object Int8Array]"]=Ou["[object Int16Array]"]=Ou["[object Int32Array]"]=Ou["[object Uint8Array]"]=Ou["[object Uint8ClampedArray]"]=Ou["[object Uint16Array]"]=Ou["[object Uint32Array]"]=!0,Ou["[object Arguments]"]=Ou["[object Array]"]=Ou["[object ArrayBuffer]"]=Ou["[object Boolean]"]=Ou["[object DataView]"]=Ou["[object Date]"]=Ou["[object Error]"]=Ou["[object Function]"]=Ou["[object Map]"]=Ou["[object Number]"]=Ou["[object Object]"]=Ou["[object RegExp]"]=Ou["[object Set]"]=Ou["[object String]"]=Ou["[object WeakMap]"]=!1;var Su=function(e){return xu(e)&&$u(e.length)&&!!Ou[wu(e)]};var _u=function(e){return function(t){return e(t)}},ku={exports:{}};!function(e,t){var r=K,n=t&&!t.nodeType&&t,a=n&&e&&!e.nodeType&&e,i=a&&a.exports===n&&r.process,o=function(){try{var e=a&&a.require&&a.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=o}(ku,ku.exports);var ju=Su,Du=_u,Cu=ku.exports,Mu=Cu&&Cu.isTypedArray,Pu=Mu?Du(Mu):ju,Fu=ou,Tu=fu,Bu=Ee,Eu=mu.exports,Au=yu,Nu=Pu,Iu=Object.prototype.hasOwnProperty;var Lu=function(e,t){var r=Bu(e),n=!r&&Tu(e),a=!r&&!n&&Eu(e),i=!r&&!n&&!a&&Nu(e),o=r||n||a||i,s=o?Fu(e.length,String):[],l=s.length;for(var c in e)!t&&!Iu.call(e,c)||o&&("length"==c||a&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Au(c,l))||s.push(c);return s},zu=Object.prototype;var Ru=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||zu)};var Hu=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Vu=Ru,Wu=Hu,Yu=Object.prototype.hasOwnProperty;var Uu=function(e){if(!Vu(e))return Wu(e);var t=[];for(var r in Object(e))Yu.call(e,r)&&"constructor"!=r&&t.push(r);return t},qu=We,Qu=vu;var Ku=function(e){return null!=e&&Qu(e.length)&&!qu(e)},Gu=Lu,Zu=Uu,Xu=Ku;var Ju=function(e){return Xu(e)?Gu(e):Zu(e)},eh=eu,th=iu,rh=Ju;var nh=function(e){return eh(e,rh,th)},ah=Object.prototype.hasOwnProperty;var ih=function(e,t,r,n,a,i){var o=1&r,s=nh(e),l=s.length;if(l!=nh(t).length&&!o)return!1;for(var c=l;c--;){var d=s[c];if(!(o?d in t:ah.call(t,d)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var p=!0;i.set(e,t),i.set(t,e);for(var f=o;++c<l;){var m=e[d=s[c]],g=t[d];if(n)var b=o?n(g,m,d,t,e,i):n(m,g,d,e,t,i);if(!(void 0===b?m===g||a(m,g,r,n,i):b)){p=!1;break}f||(f="constructor"==d)}if(p&&!f){var y=e.constructor,v=t.constructor;y==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(p=!1)}return i.delete(e),i.delete(t),p},oh=lt(X,"DataView"),sh=Ht,lh=lt(X,"Promise"),ch=lt(X,"Set"),dh=lt(X,"WeakMap"),uh=ge,hh=Ke,ph="[object Map]",fh="[object Promise]",mh="[object Set]",gh="[object WeakMap]",bh="[object DataView]",yh=hh(oh),vh=hh(sh),wh=hh(lh),$h=hh(ch),xh=hh(dh),Oh=uh;(oh&&Oh(new oh(new ArrayBuffer(1)))!=bh||sh&&Oh(new sh)!=ph||lh&&Oh(lh.resolve())!=fh||ch&&Oh(new ch)!=mh||dh&&Oh(new dh)!=gh)&&(Oh=function(e){var t=uh(e),r="[object Object]"==t?e.constructor:void 0,n=r?hh(r):"";if(n)switch(n){case yh:return bh;case vh:return ph;case wh:return fh;case $h:return mh;case xh:return gh}return t});var Sh=Oh,_h=Bd,kh=Hd,jh=Zd,Dh=ih,Ch=Sh,Mh=Ee,Ph=mu.exports,Fh=Pu,Th="[object Arguments]",Bh="[object Array]",Eh="[object Object]",Ah=Object.prototype.hasOwnProperty;var Nh=function(e,t,r,n,a,i){var o=Mh(e),s=Mh(t),l=o?Bh:Ch(e),c=s?Bh:Ch(t),d=(l=l==Th?Eh:l)==Eh,u=(c=c==Th?Eh:c)==Eh,h=l==c;if(h&&Ph(e)){if(!Ph(t))return!1;o=!0,d=!1}if(h&&!d)return i||(i=new _h),o||Fh(e)?kh(e,t,r,n,a,i):jh(e,t,l,r,n,a,i);if(!(1&r)){var p=d&&Ah.call(e,"__wrapped__"),f=u&&Ah.call(t,"__wrapped__");if(p||f){var m=p?e.value():e,g=f?t.value():t;return i||(i=new _h),a(m,g,r,n,i)}}return!!h&&(i||(i=new _h),Dh(e,t,r,n,a,i))},Ih=be;var Lh=function e(t,r,n,a,i){return t===r||(null==t||null==r||!Ih(t)&&!Ih(r)?t!=t&&r!=r:Nh(t,r,n,a,e,i))},zh=Bd,Rh=Lh;var Hh=Q;var Vh=function(e){return e==e&&!Hh(e)},Wh=Vh,Yh=Ju;var Uh=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},qh=function(e,t,r,n){var a=r.length,i=a,o=!n;if(null==e)return!i;for(e=Object(e);a--;){var s=r[a];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++a<i;){var l=(s=r[a])[0],c=e[l],d=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new zh;if(n)var h=n(c,d,l,e,t,u);if(!(void 0===h?Rh(d,c,3,n,u):h))return!1}}return!0},Qh=function(e){for(var t=Yh(e),r=t.length;r--;){var n=t[r],a=e[n];t[r]=[n,a,Wh(a)]}return t},Kh=Uh;var Gh=xr,Zh=fu,Xh=Ee,Jh=yu,ep=vu,tp=Sr;var rp=function(e,t){return null!=e&&t in Object(e)},np=function(e,t,r){for(var n=-1,a=(t=Gh(t,e)).length,i=!1;++n<a;){var o=tp(t[n]);if(!(i=null!=e&&r(e,o)))break;e=e[o]}return i||++n!=a?i:!!(a=null==e?0:e.length)&&ep(a)&&Jh(o,a)&&(Xh(e)||Zh(e))};var ap=Lh,ip=Cr,op=function(e,t){return null!=e&&np(e,t,rp)},sp=ze,lp=Vh,cp=Uh,dp=Sr;var up=jr;var hp=function(e){return function(t){return null==t?void 0:t[e]}},pp=function(e){return function(t){return up(t,e)}},fp=ze,mp=Sr;var gp=function(e){var t=Qh(e);return 1==t.length&&t[0][2]?Kh(t[0][0],t[0][1]):function(r){return r===e||qh(r,e,t)}},bp=function(e,t){return sp(e)&&lp(t)?cp(dp(e),t):function(r){var n=ip(r,e);return void 0===n&&n===t?op(r,e):ap(t,n,3)}},yp=function(e){return e},vp=Ee,wp=function(e){return fp(e)?hp(mp(e)):pp(e)};var $p=function(e){return"function"==typeof e?e:null==e?yp:"object"==typeof e?vp(e)?bp(e[0],e[1]):gp(e):wp(e)},xp=$p,Op=Ku,Sp=Ju;var _p=function(e){return function(t,r,n){var a=Object(t);if(!Op(t)){var i=xp(r);t=Sp(t),r=function(e){return i(a[e],e,a)}}var o=e(t,r,n);return o>-1?a[i?t[o]:o]:void 0}};var kp=De,jp=1/0;var Dp=function(e){return e?(e=kp(e))===jp||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Cp=function(e,t,r,n){for(var a=e.length,i=r+(n?1:-1);n?i--:++i<a;)if(t(e[i],i,e))return i;return-1},Mp=$p,Pp=function(e){var t=Dp(e),r=t%1;return t==t?r?t-r:t:0},Fp=Math.max;var Tp=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var a=null==r?0:Pp(r);return a<0&&(a=Fp(n+a,0)),Cp(e,Mp(t),a)},Bp=_p(Tp),Ep=Lh;var Ap=function(e,t){return Ep(e,t)};const Np=x.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return O`
            height: ${t};
            width: ${r};
        `}}

    position: relative;
    border-radius: 4px;
    transition: all 200ms ease-in-out;
    border: 1px solid ${Er.Accent.Light[2]};
    background: transparent;

    ${e=>{let t,r;return e.selected&&(t=Er.Primary(e),r=Er.Primary(e)),e.disabled&&(t=Er.Neutral[6](e),r=Er.Neutral[6](e)),`\n\t\t\tborder: 1px solid ${t};\n\t\t\tbackground: ${r};\n\t\t`}}
`,Ip=x.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Lp=x(B)`
    ${e=>{let t;if("small"===e.$displaySize)t="1.5rem";else t="1.75rem";return O`
            height: ${t};
            width: ${t};
        `}}
    color: ${e=>e.disabled?Er.Neutral[4]:Er.Neutral[8]};
`,zp=x(ul.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Rp=x.ul`
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

    ${an.mobileL} {
        max-height: 15rem;
    }
`,Hp=x.li`
    :hover,
    :focus,
    :active {
        background: ${Er.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return O`
                background: ${Er.Accent.Light[5]};
            `}}
`,Vp=x.button`
    display: flex;
    ${e=>e.$multiSelect?O`
                padding: 0.5rem 1rem;
            `:O`
                padding: 0 1rem;
                min-height: ${e.$hasNextLineLabel?"4.255rem":"3.5rem"};
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
`,Wp=O`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Yp=x.div`
    ${Wr("Body","regular")}
    color: ${Er.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Wp}
`,Up=x.div`
    color: ${Er.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Wp}

    ${e=>"next-line"===e.$labelDisplayType?O`
                    ${Wr("BodySmall","semibold")}
                `:O`
                    ${Wr("Body","regular")}
                `}
`,qp=x.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return O`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return O`
                    ${Yp} {
                        display: inline;
                    }

                    ${Up} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Qp=x.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Kp=x.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Gp=x((r=>{var{className:n,checked:a,disabled:o,onChange:l,onKeyPress:c,displaySize:d="default"}=r,u=H(r,["className","checked","disabled","onChange","onKeyPress","displaySize"]);const[h,p]=i(a);s((()=>{p(a)}),[a]);const f=e=>{if(!o){const t=e;if(!(" "===t.key||"change"===e.type))return;l&&l(e),c&&c(t)}};return e(Np,Object.assign({selected:h,disabled:o,className:n,"data-testid":"checkbox",$displaySize:d,role:"checkbox","aria-checked":h,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:f},{children:[t(Ip,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",tabIndex:-1,onChange:f,disabled:o,checked:h},u)),h&&t(Lp,{id:"checkmark","data-testid":"checkmark",disabled:o,$displaySize:d})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Zp=x.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Xp=x.button`
    ${Wr("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${Er.Primary(e)};\n\t\t`}
`,Jp=x.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,ef=x(Ur.Body)``,tf=x(T)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${Er.Validation.Red.Icon};
`,rf=x.li`
    background: ${Er.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,nf=x(Wc)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,af=x(E)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${Er.Neutral[3]};
`,of=x(dn)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${Er.Neutral[3]};
    cursor: pointer;
`,sf=x(D)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${Er.Neutral[3]};
`,lf=f(((r,n)=>{const{onClear:a}=r,i=H(r,["onClear"]);return e(rf,{children:[t(af,{}),t(nf,Object.assign({ref:n},i)),i.value&&t(of,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a},{children:t(sf,{})}))]},"search")})),cf=n=>{var{listItems:a,listExtractor:l,valueExtractor:c,onSelectItem:d,listStyleWidth:u,visible:h,enableSearch:p,searchPlaceholder:f="Search",onSearch:m,searchFunction:g,onDismiss:b,disableItemFocus:y,multiSelect:v,selectedItems:w,onSelectAll:$,onRetry:x,itemsLoadState:O="success",itemTruncationType:S="end",itemMaxLines:_=2,labelDisplayType:k="inline",renderListItem:j,onBlur:D,hideNoResultsDisplay:C,renderCustomCallToAction:M}=n,P=H(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction"]);const[F,T]=i(0),[B,E]=i(""),[A,N]=i(a),[I,L]=i(0),z=Hs({height:I}),R=o(),V=o(),W=o([]),Y=o(),U=o(),q=o(F),Q=o(A),K=e=>{q.current=e,T(e)},G=e=>{Q.current=e,N(e)};s((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),s((()=>{ee(B)}),[B]),s((()=>{if(E(""),h){if(setTimeout((()=>{L(te())})),y)return;Y&&Y.current?(Y.current.focus(),K(-1)):W.current[F]&&W.current[F].focus()}else L(0)}),[h]),s((()=>{if(h){const e=te();L(e)}}),[A,O]),s((()=>{G(a),E(""),K(0)}),[a]);const Z=e=>l?l(e):e.toString(),X=e=>{if("inline"!==k)return!1;let t=0;V&&V.current&&(t=V.current.getBoundingClientRect().width-60);return jc.getTextWidth(e,"1.125rem 'Open Sans'")>t*_},J=e=>!!Bp(w,(t=>Ap(t,e))),ee=e=>{if(""===e)G(a);else if(g){const t=g(e);G(t)}else{const t=a.filter((t=>{var r;const n=Z(t),a="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),i="string"==typeof n||null===(r=n.secondaryLabel)||void 0===r?void 0:r.toLowerCase(),o=e.trim().toLowerCase();return a.includes(o)||i&&i.includes(o)}));G(t)}},te=()=>(V&&V.current?V.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),re=e=>{if(R&&R.current.contains(e.target))switch(e.code){case"ArrowDown":if(q.current<Q.current.length-1){const e=q.current+1;W.current[e].focus(),K(e)}break;case"ArrowUp":if(q.current>0){const e=q.current-1;W.current[e].focus(),K(q.current-1)}break;case"Escape":b&&b(!0)}},ne=(e,t)=>{e.preventDefault(),d&&d(t,(e=>c?c(e):e)(t))},ae=e=>{const t=e.target.value;E(t),m&&m()},ie=()=>{E(""),Y.current.focus(),m&&m()},oe=()=>{x&&x()},se=()=>{D&&D()},le=n=>e(r,{children:[t(Qp,Object.assign({$maxLines:_,"aria-hidden":!0},{children:n})),t(Kp,Object.assign({$maxLines:_,"aria-hidden":!0},{children:n}))]}),ce=r=>{const n=Z(r),a="string"==typeof n?n:n.title,i="string"==typeof n?void 0:n.secondaryLabel,o=X(a),s=i&&X(i),l=o||s?"next-line":k;return e(qp,Object.assign({$labelDisplayType:l},{children:[t(Yp,Object.assign({$truncateType:S,$maxLines:_,"aria-label":a},{children:"middle"===S&&o?le(a):a})),i&&t(Up,Object.assign({$truncateType:S,$maxLines:_,$labelDisplayType:k,"aria-label":i},{children:"middle"===S&&s?le(i):i}))]}))},de=()=>{if(!x||x&&"success"===O)return A.map(((r,n)=>t(Hp,Object.assign({$checked:J(r)&&!v},{children:e(Vp,Object.assign({$hasNextLineLabel:"next-line"===k&&A.length>0&&l&&"string"!=typeof l(A[0]),onClick:e=>{ne(e,r)},ref:e=>W.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:v,onBlur:se},{children:[v&&t(Gp,{checked:J(r),displaySize:"small"}),j?j(r,{selected:J(r)}):ce(r)]}))}),((e,t)=>`item_${t}__${c?c(e):e}`)(r,n))))},ue=()=>{if(v&&A.length>0&&!B&&"success"===O)return t(Zp,{children:t(Xp,Object.assign({onClick:$,type:"button"},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!C&&(B||!p)&&0===A.length&&"success"===O)return e(Jp,Object.assign({"data-testid":"list-no-results"},{children:[t(tf,{"data-testid":"no-result-icon"}),t(ef,{children:"No results found."})]}),"noResults")},pe=()=>{if(x&&"loading"===O)return e(Jp,Object.assign({"data-testid":"list-loading"},{children:[t(Nl,{$buttonStyle:"secondary",size:24}),t(ef,{children:"Loading..."})]}),"loading")},fe=()=>{if(x&&"fail"===O)return e(Jp,Object.assign({"data-testid":"list-fail"},{children:[t(tf,{"data-testid":"load-error-icon"}),t(ef,{children:"Failed to load."}),t(Xp,Object.assign({onClick:oe,type:"button"},{children:"Try again."}))]}),"noResults")};return t(r,{children:e(zp,Object.assign({style:z,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:R},{children:[(()=>{if(h)return e(Rp,Object.assign({ref:V,"data-testid":"dropdown-list",width:u,role:"list"},P,{children:[(p||g)&&"success"===O?t(lf,{ref:Y,onChange:ae,value:B,placeholder:f,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:ie}):null,ue(),he(),pe(),fe(),de()]}))})(),(()=>{if(h&&M)return t("div",Object.assign({ref:U,"data-testid":"custom-cta"},{children:M(b,A)}))})()]}))})},df=(e,t,r="window",n)=>{const a=o();s((()=>{a.current=t}),[t]),s((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!(t&&t.addEventListener))return;const i=e=>a.current(e);return t.addEventListener(e,i,n),()=>{t.removeEventListener(e,i,n)}}),[e,r])},uf=x.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,hf=O`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Er.Accent.Light[3]};
    }
`,pf=x.button`
    ${hf}
    cursor: pointer;
`,ff=x.div`
    ${hf}
`,mf=S`
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
`,gf=x.div`
    position: relative;
    border: 1px solid ${Er.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Er.Neutral[8]};

    :focus-within {
        border: 1px solid ${Er.Accent.Light[1]};
        box-shadow: ${Rc};
    }

    ${e=>e.expanded?O`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:O`
                animation: ${mf} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?O`
                background: ${Er.Neutral[6](e)};

                ${pf} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Er.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?O`
                border: none;
                background: transparent !important;

                ${pf} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?O`
                border: 1px solid ${Er.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Er.Validation.Red.Border(e)};
                    box-shadow: ${Hc};
                }
            `:void 0}
`,bf=x.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${fn};
    margin-left: 1rem;
`,yf=x(C)`
    color: ${Er.Neutral[3]};
    height: ${Lr.Body.fontSize}rem;
    width: ${Lr.Body.fontSize}rem;
`,vf=x.div`
    height: 1px;
    background: ${Er.Neutral[5]};
    margin: 0 0.5rem;
`,wf=x.div`
    display: flex;
    flex: 1;
`,$f=x(Ur.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return O`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,xf=x($f)`
    color: ${Er.Neutral[3]};
`,Of=({children:e,show:r,error:n,disabled:a,testId:i,onBlur:s,readOnly:l})=>{const c=o();return df("mousedown",(function(e){if(!a){if(c&&c.current.contains(e.target))return;r&&s()}}),"document"),t(uf,{children:t(gf,Object.assign({ref:c,error:n&&!r,disabled:a,$readOnly:l,expanded:r,"data-testid":i},{children:e}))})},Sf=x.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 1rem;
    ${e=>{if(e.$expanded)return O`
                border-bottom: 1px solid ${Er.Neutral[5](e)};
            `}}

    ${e=>e.$readOnly?O`
                border: 0;
                margin: 0;
            `:"right"===e.$position?O`
                        flex-direction: row-reverse;
                        margin: 0 0 0 1rem;
                    `:O`
                        flex-direction: row;
                    `}
`,_f=x(pf)`
    padding: 0;
    width: auto;
`,kf=x.div`
    height: calc(3rem - 2px); // exclude top and bottom borders
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: 0.75rem;
`,jf=x.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${fn};
    margin: 0 0.75rem;
`,Df=x(C)`
    color: ${Er.Neutral[3]};
    height: ${Lr.Body.fontSize}rem;
    width: ${Lr.Body.fontSize}rem;
    vertical-align: bottom;
`,Cf=x.div`
    display: flex;
    flex: 1 1 auto;
`,Mf=x(Ur.Body)`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,Pf=x(Mf)`
    color: ${Er.Neutral[3]};
`,Ff=x.div`
    width: 1px;
    background: ${Er.Neutral[5]};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return O`
                display: none;
            `}}

    ${e=>"right"===e.$position?O`
                    margin: 0 0.75rem;
                `:O`
                    margin: 0 0.75rem 0 0;
                `}
`,Tf=a.forwardRef(((n,a)=>{var{addon:l,error:c,onChange:d,readOnly:u,className:h,onBlur:p}=n,f=H(n,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:m,options:g,enableSearch:b,searchFunction:y,searchPlaceholder:v,valueExtractor:w,listExtractor:$,displayValueExtractor:x,selectedOption:O,onSelectOption:S,onHideOptions:_,onShowOptions:k,"data-selector-testid":j}=l.attributes,{position:D}=l,[C,M]=i(O),[P,F]=i(!1),T=o();s((()=>{M(O)}),[O]);const B=()=>x?x(C):w?w(C):C.toString(),E=e=>{!e&&_&&_(),e&&k&&k()},A=e=>{e.preventDefault(),f.disabled||(F(!P),E(!P))},N=(e,t)=>{M(e),F(!1),E(!1),T&&T.current.focus(),S&&S(e,t)},I=e=>{d&&d(e)},L=()=>{p&&p()},z=()=>{F(!1),E(!1),T&&T.current.focus()};return e(Of,Object.assign({className:h,show:P,error:c&&!P,disabled:f.disabled,readOnly:u,onBlur:()=>{F(!1),E(!1),L()}},{children:[e(Sf,Object.assign({$expanded:P,$readOnly:u,$position:D},{children:[u?C?t(kf,{children:t(Mf,Object.assign({"data-testid":"selector-label"},{children:B()}))}):null:t(_f,Object.assign({ref:T,type:"button",disabled:f.disabled,"data-testid":j||"addon-selector",onClick:A},{children:e(r,{children:[e(Cf,{children:[m&&!C&&t(Pf,{children:m}),C&&t(Mf,Object.assign({"data-testid":"selector-label"},{children:B()}))]}),t(jf,Object.assign({$expanded:P},{children:t(Df,{})}))]})})),t(Ff,{$readOnly:u,$position:D}),t($d,Object.assign({ref:a},f,{readOnly:u,error:c,onChange:I,"data-testid":f["data-testid"]||"input",onBlur:L}))]})),g&&g.length>0?t(cf,{listItems:g,selectedItems:O?[O]:[],onSelectItem:N,valueExtractor:w,listExtractor:$,visible:P,enableSearch:b,searchFunction:y,searchPlaceholder:v,"data-testid":"dropdown-list",onBlur:L,onDismiss:z}):null]}))})),Bf=a.forwardRef(((r,n)=>{var{addon:a,error:i,className:o}=r,s=H(r,["addon","error","className"]);const l=()=>t(wd,Object.assign({disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:o},{children:t($d,Object.assign({ref:n},s,{"data-testid":"input"}))}));if(!a)return l();{const{type:r="label",position:c="left"}=a,{allowClear:d}=s;switch(r){case"list":{const e=a.attributes;return e.options&&e.options.length>0?t(Tf,Object.assign({ref:n,addon:a,error:i,className:o},s)):l()}case"custom":{const r=a.attributes;return r.children?e(Vc,Object.assign({$error:i,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:o},{children:[t(xd,Object.assign({"data-testid":"addon",disabled:s.disabled,$readOnly:s.readOnly,$position:c},{children:r.children})),t($d,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:i,"data-testid":"input"}))]})):l()}default:{const r=a.attributes;return r.value?e(Vc,Object.assign({$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:o},{children:[t(xd,Object.assign({"data-testid":"addon",disabled:s.disabled,$readOnly:s.readOnly,$position:c},{children:r.value})),t($d,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:i,"data-testid":"input"}))]})):l()}}}})),Ef=a.forwardRef(((e,r)=>{const{label:n,errorMessage:a,id:i="form-field-group","data-error-testid":o,"data-testid":s}=e,l=H(e,["label","errorMessage","id","data-error-testid","data-testid"]);return t(Cn,Object.assign({id:i,label:n,errorMessage:a,disabled:l.disabled,"data-error-testid":o},{children:t(Bf,Object.assign({ref:r,id:`${i}-base`,"data-testid":s||i,error:!!a},l))}))})),Af=n=>{var{selectedOptions:a,placeholder:l="Select",options:c,className:d,disabled:u,error:h,"data-testid":p,enableSearch:f=!1,searchFunction:m,searchPlaceholder:g,valueExtractor:b,listExtractor:y,onSelectOptions:v,listStyleWidth:w,onShowOptions:$,onHideOptions:x,onRetry:O,optionsLoadState:S="success",optionTruncationType:_="end"}=n,k=H(n,["selectedOptions","placeholder","options","className","disabled","error","data-testid","enableSearch","searchFunction","searchPlaceholder","valueExtractor","listExtractor","onSelectOptions","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType"]);const[j,D]=i(a||[]),[C,M]=i(!1),P=o();s((()=>{D(a||[])}),[a]);const F=(e,t)=>{const r=[...j],n=Tp(j,(e=>(b?b(e):e)===t));n>-1?r.splice(n,1):r.push(e),D(r),E(!1),P&&P.current.focus(),A(r)},T=()=>{C&&(M(!1),E(!1)),P&&P.current.focus()},B=()=>{j&&j.length>0?(D([]),A([])):(D(c),A(c))},E=e=>{!e&&x&&x(),e&&$&&$()},A=e=>{v&&v(e)};return e(Of,Object.assign({show:C,error:h&&!C,disabled:u,testId:p,className:d,onBlur:()=>{M(!1),E(!1)}},{children:[t(pf,Object.assign({ref:P,type:"button","data-testid":"selector",onClick:e=>{e.preventDefault(),u||(M(!C),E(!C))}},k,{children:e(r,{children:[t(wf,{children:j&&0!==j.length?t($f,{children:j&&0!=j.length?c&&j.length===c.length?"All selected":`${j.length} selected`:l}):t(xf,Object.assign({truncateType:_},{children:l}))}),t(bf,Object.assign({expanded:C},{children:t(yf,{})}))]})})),C&&t(vf,{}),c&&c.length>0||O?t(cf,{listItems:c,onSelectItem:F,onDismiss:T,valueExtractor:b,listExtractor:y,listStyleWidth:w,visible:C,enableSearch:f,searchFunction:m,searchPlaceholder:g,"data-testid":"dropdown-list",multiSelect:!0,selectedItems:j,onSelectAll:B,onRetry:O,itemsLoadState:S,itemTruncationType:_}):null]}))};var Nf=Uu,If=Sh,Lf=fu,zf=Ee,Rf=Ku,Hf=mu.exports,Vf=Ru,Wf=Pu,Yf=Object.prototype.hasOwnProperty;var Uf=function(e){if(null==e)return!0;if(Rf(e)&&(zf(e)||"string"==typeof e||"function"==typeof e.splice||Hf(e)||Wf(e)||Lf(e)))return!e.length;var t=If(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(Vf(e))return!Nf(e).length;for(var r in e)if(Yf.call(e,r))return!1;return!0},qf=Symbol.for("immer-nothing"),Qf=Symbol.for("immer-draftable"),Kf=Symbol.for("immer-state"),Gf="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function Zf(e,...t){if("production"!==process.env.NODE_ENV){const r=Gf[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Xf=Object.getPrototypeOf;function Jf(e){return!!e&&!!e[Kf]}function em(e){return!!e&&(rm(e)||Array.isArray(e)||!!e[Qf]||!!e.constructor?.[Qf]||sm(e)||lm(e))}var tm=Object.prototype.constructor.toString();function rm(e){if(!e||"object"!=typeof e)return!1;const t=Xf(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===tm}function nm(e,t){0===am(e)?Object.entries(e).forEach((([r,n])=>{t(r,n,e)})):e.forEach(((r,n)=>t(n,r,e)))}function am(e){const t=e[Kf];return t?t.type_:Array.isArray(e)?1:sm(e)?2:lm(e)?3:0}function im(e,t){return 2===am(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function om(e,t,r){const n=am(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function sm(e){return e instanceof Map}function lm(e){return e instanceof Set}function cm(e){return e.copy_||e.base_}function dm(e,t){if(sm(e))return new Map(e);if(lm(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&rm(e)){if(!Xf(e)){const t=Object.create(null);return Object.assign(t,e)}return{...e}}const r=Object.getOwnPropertyDescriptors(e);delete r[Kf];let n=Reflect.ownKeys(r);for(let t=0;t<n.length;t++){const a=n[t],i=r[a];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(r[a]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[a]})}return Object.create(Xf(e),r)}function um(e,t=!1){return pm(e)||Jf(e)||!em(e)||(am(e)>1&&(e.set=e.add=e.clear=e.delete=hm),Object.freeze(e),t&&nm(e,((e,t)=>um(t,!0)))),e}function hm(){Zf(2)}function pm(e){return Object.isFrozen(e)}var fm,mm={};function gm(e){const t=mm[e];return t||Zf(0,e),t}function bm(){return fm}function ym(e,t){t&&(gm("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function vm(e){wm(e),e.drafts_.forEach(xm),e.drafts_=null}function wm(e){e===fm&&(fm=e.parent_)}function $m(e){return fm={drafts_:[],parent_:fm,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function xm(e){const t=e[Kf];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function Om(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[Kf].modified_&&(vm(t),Zf(4)),em(e)&&(e=Sm(t,e),t.parent_||km(t,e)),t.patches_&&gm("Patches").generateReplacementPatches_(r[Kf].base_,e,t.patches_,t.inversePatches_)):e=Sm(t,r,[]),vm(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==qf?e:void 0}function Sm(e,t,r){if(pm(t))return t;const n=t[Kf];if(!n)return nm(t,((a,i)=>_m(e,n,t,a,i,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return km(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let a=t,i=!1;3===n.type_&&(a=new Set(t),t.clear(),i=!0),nm(a,((a,o)=>_m(e,n,t,a,o,r,i))),km(e,t,!1),r&&e.patches_&&gm("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function _m(e,t,r,n,a,i,o){if("production"!==process.env.NODE_ENV&&a===r&&Zf(5),Jf(a)){const o=Sm(e,a,i&&t&&3!==t.type_&&!im(t.assigned_,n)?i.concat(n):void 0);if(om(r,n,o),!Jf(o))return;e.canAutoFreeze_=!1}else o&&r.add(a);if(em(a)&&!pm(a)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Sm(e,a),t&&t.scope_.parent_||km(e,a)}}function km(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&um(t,r)}var jm={get(e,t){if(t===Kf)return e;const r=cm(e);if(!im(r,t))return function(e,t,r){const n=Mm(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!em(n)?n:n===Cm(e.base_,t)?(Fm(e),e.copy_[t]=Tm(n,e)):n},has:(e,t)=>t in cm(e),ownKeys:e=>Reflect.ownKeys(cm(e)),set(e,t,r){const n=Mm(cm(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=Cm(cm(e),t),o=n?.[Kf];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(((a=r)===(i=n)?0!==a||1/a==1/i:a!=a&&i!=i)&&(void 0!==r||im(e.base_,t)))return!0;Fm(e),Pm(e)}var a,i;return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==Cm(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,Fm(e),Pm(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=cm(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){Zf(11)},getPrototypeOf:e=>Xf(e.base_),setPrototypeOf(){Zf(12)}},Dm={};function Cm(e,t){const r=e[Kf];return(r?cm(r):e)[t]}function Mm(e,t){if(!(t in e))return;let r=Xf(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=Xf(r)}}function Pm(e){e.modified_||(e.modified_=!0,e.parent_&&Pm(e.parent_))}function Fm(e){e.copy_||(e.copy_=dm(e.base_,e.scope_.immer_.useStrictShallowCopy_))}nm(jm,((e,t)=>{Dm[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Dm.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&Zf(13),Dm.set.call(this,e,t,void 0)},Dm.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&Zf(14),jm.set.call(this,e[0],t,r,e[0])};function Tm(e,t){const r=sm(e)?gm("MapSet").proxyMap_(e,t):lm(e)?gm("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:bm(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let a=n,i=jm;r&&(a=[n],i=Dm);const{revoke:o,proxy:s}=Proxy.revocable(a,i);return n.draft_=s,n.revoke_=o,s}(e,t);return(t?t.scope_:bm()).drafts_.push(r),r}function Bm(e){if(!em(e)||pm(e))return e;const t=e[Kf];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=dm(e,t.scope_.immer_.useStrictShallowCopy_)}else r=dm(e,!0);return nm(r,((e,t)=>{om(r,e,Bm(t))})),t&&(t.finalized_=!1),r}var Em=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...a){return n.produce(e,(e=>t.call(this,e,...a)))}}let n;if("function"!=typeof t&&Zf(6),void 0!==r&&"function"!=typeof r&&Zf(7),em(e)){const a=$m(this),i=Tm(e,void 0);let o=!0;try{n=t(i),o=!1}finally{o?vm(a):wm(a)}return ym(a,r),Om(n,a)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===qf&&(n=void 0),this.autoFreeze_&&um(n,!0),r){const t=[],a=[];gm("Patches").generateReplacementPatches_(e,n,t,a),r(t,a)}return n}Zf(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;return[this.produce(e,t,((e,t)=>{r=e,n=t})),r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){em(e)||Zf(8),Jf(e)&&(e=function(e){Jf(e)||Zf(10,e);return Bm(e)}(e));const t=$m(this),r=Tm(e,void 0);return r[Kf].isManual_=!0,wm(t),r}finishDraft(e,t){const r=e&&e[Kf];r&&r.isManual_||Zf(9);const{scope_:n}=r;return ym(n,t),Om(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=gm("Patches").applyPatches_;return Jf(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},Am=Em.produce;Em.produceWithPatches.bind(Em),Em.setAutoFreeze.bind(Em),Em.setUseStrictShallowCopy.bind(Em),Em.applyPatches.bind(Em),Em.createDraft.bind(Em),Em.finishDraft.bind(Em);const Nm=x.button`
    align-items: center;
    background-color: ${Er.Primary};
    border-radius: 0.25rem;
    color: ${Er.Neutral[8]};
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$sizeType){case"large":return O`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return O`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return O`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${e=>{switch(e.$styleType){case"secondary":return O`
                    background-color: ${Er.Neutral[8]};
                    border: 1px solid ${Er.Primary};
                    color: ${Er.Primary};
                `;case"light":return O`
                    background-color: ${Er.Neutral[8]};
                    border: 1px solid ${Er.Neutral[5]};
                    color: ${Er.Primary};
                `;default:return O`
                    background-color: ${Er.Primary};
                    border: none;
                    color: ${Er.Neutral[8]};
                `}}}
    &:hover {
        box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
    }
    &:disabled {
        background-color: ${Er.Neutral[6]};
        border: 1px solid ${Er.Neutral[6]};
        color: ${Er.Neutral[3]};
        cursor: not-allowed;

        &:hover {
            box-shadow: none;
        }
    }
`,Im=a.forwardRef(((e,r)=>{var{"data-testid":n,styleType:a="primary",children:i,sizeType:o="default",type:s="button"}=e,l=H(e,["data-testid","styleType","children","sizeType","type"]);return t(Nm,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:o,$styleType:a},l,{children:i}))})),Lm=x.div`
    display: flex;
    cursor: pointer;
    padding: 0.5rem;
    min-height: 2.625rem;
`,zm=x.button`
    width: 100%;
    border: none;
    cursor: pointer;
    background: transparent;
    text-align: left;
    padding: 0.5rem;
    min-height: 2.625rem;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Er.Accent.Light[3]};
    }

    :hover {
        background-color: ${Er.Accent.Light[5]};
    }

    ${e=>{if(e.$level_3)return O`
                margin-left: 0.5rem;
                width: calc(100% - 0.5rem);
            `}}

    ${e=>{if(e.$selected)return O`
                background: ${Er.Accent.Light[5]};
            `}}
`,Rm=x.div`
    ${Wr("Body","regular")}
    overflow: hidden;

    ${e=>{if("middle"!==e.$truncateType)return O`
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                `}}
`,Hm=x.span`
    ${Wr("Body","semibold")}
`,Vm=x.div`
    display: flex;
    flex-direction: column;
`,Wm=x.div`
    width: 100%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Ym=x.div`
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Um=x(Im)`
    border: none;
    background: transparent;
    cursor: pointer;
    width: 1.625rem;
    height: 1.625rem;
    transition: transform 250ms ease-in-out;

    :hover,
    :focus {
        box-shadow: unset;
    }

    ${e=>{if(e.$expanded)return O`
                transform: rotate(90deg);
            `}}
`,qm=x(A)`
    color: ${Er.Primary};
`,Qm=x.button`
    ${Wr("H4","semibold")}
    color: ${Er.Neutral[1]};
    text-align: left;
    line-height: 1.625rem;
    margin-left: 0.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    overflow-wrap: anywhere;

    span {
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
`,Km=x.ul`
    display: ${e=>e.$expanded?"flex":"none"};
    flex-direction: column;
    cursor: pointer;
    margin-left: 2.125rem;
`,Gm=({item:n,selectedKeyPath:a,selectableCategory:i,searchValue:s,itemTruncationType:l,visible:c,onBlur:d,onExpand:u,onRef:h,onSelect:p})=>{const f=o(),m=e=>{e.preventDefault(),u(n.keyPath)},g=e=>{e.preventDefault(),p(n)},b=()=>{d&&d()},y=e=>{const t=e.label;let r=0;return f&&f.current&&(r=f.current.getBoundingClientRect().width),jc.shouldTruncateToTwoLines(t,r)},v=r=>e(Vm,Object.assign({"data-testid":"truncate-middle-container"},{children:[t(Wm,{children:w(r)}),t(Ym,{children:w(r)})]})),w=n=>{if(!n.isSearchTerm)return t(r,{children:n.label});const a=n.label,i=s.toLowerCase().trim(),o=a.toLowerCase().indexOf(i),l=o+i.length;return-1==o?t(r,{children:n.label}):e(r,{children:[`${a.slice(0,o)}`,t(Hm,{children:a.slice(o,l)}),`${a.slice(l)}`]})};return n.subItems?e("li",{children:[e(Lm,i?{children:[t(Um,Object.assign({ref:e=>h(e,n.keyPath),onClick:m,$expanded:n.expanded,"aria-expanded":n.expanded},{children:t(qm,{})})),t(Qm,Object.assign({onClick:g},{children:t("span",{children:n.label})}))]}:Object.assign({onClick:m},{children:[t(Um,Object.assign({ref:e=>h(e,n.keyPath),$expanded:n.expanded,"aria-expanded":n.expanded},{children:t(qm,{})})),t(Qm,Object.assign({tabIndex:-1},{children:t("span",{children:n.label})}))]})),(()=>{const e=n.subItems.values();return t(Km,Object.assign({$expanded:n.expanded},{children:[...e].map((e=>t(Gm,{item:e,selectedKeyPath:a,selectableCategory:i,searchValue:s,itemTruncationType:l,visible:c,onBlur:d,onExpand:u,onRef:h,onSelect:p},e.keyPath.join("-"))))}))})()]}):t("li",Object.assign({ref:f},{children:t(zm,Object.assign({ref:e=>h(e,n.keyPath),type:"button",tabIndex:c?0:-1,$selected:($=n.keyPath,JSON.stringify(a)===JSON.stringify($)),$level_3:3===n.keyPath.length,onBlur:b,onClick:g},{children:t(Rm,Object.assign({$truncateType:l},{children:"middle"===l&&y(n)?v(n):w(n)}))}))}));var $},Zm=x(ul.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Xm=x.ul`
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: transparent;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: 0.5rem;
    max-height: 20rem;

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

    ${an.mobileL} {
        max-height: 15rem;
    }
`,Jm=x.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,eg=x(Ur.Body)``,tg=x(T)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${Er.Validation.Red.Icon};
`,rg=x.button`
    ${Wr("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${Er.Primary(e)};\n\t\t`}
`;var ng;!function(e){e.getInitialDropdown=(t,r)=>{let n=r;n&&n.length||(n=ag(t),n=n.slice(0,-1));return Am(t,(t=>{const r=[];n.forEach((n=>{r.push(n);e.getItemAtKeyPath(t,r).expanded=!0}))}))},e.getVisibleKeyPaths=e=>{const t=[],r=e=>{if(e&&e.size)for(const n of e.values())t.push(n.keyPath),n.expanded&&r(n.subItems)};return r(e),t},e.getItemAtKeyPath=(e,t)=>t.reduce(((t,r)=>t?t.subItems.get(r):e.get(r)),null)}(ng||(ng={}));const ag=e=>{for(const t of e.values())if(t.subItems&&t.subItems.size)return ag(t.subItems);return e.values().next().value.keyPath};!function(){class e extends Map{constructor(e,t){super(),this[Kf]={type_:2,parent_:t,scope_:t?t.scope_:bm(),modified_:!1,finalized_:!1,copy_:void 0,assigned_:void 0,base_:e,draft_:this,isManual_:!1,revoked_:!1}}get size(){return cm(this[Kf]).size}has(e){return cm(this[Kf]).has(e)}set(e,r){const n=this[Kf];return a(n),cm(n).has(e)&&cm(n).get(e)===r||(t(n),Pm(n),n.assigned_.set(e,!0),n.copy_.set(e,r),n.assigned_.set(e,!0)),this}delete(e){if(!this.has(e))return!1;const r=this[Kf];return a(r),t(r),Pm(r),r.base_.has(e)?r.assigned_.set(e,!1):r.assigned_.delete(e),r.copy_.delete(e),!0}clear(){const e=this[Kf];a(e),cm(e).size&&(t(e),Pm(e),e.assigned_=new Map,nm(e.base_,(t=>{e.assigned_.set(t,!1)})),e.copy_.clear())}forEach(e,t){cm(this[Kf]).forEach(((r,n,a)=>{e.call(t,this.get(n),n,this)}))}get(e){const r=this[Kf];a(r);const n=cm(r).get(e);if(r.finalized_||!em(n))return n;if(n!==r.base_.get(e))return n;const i=Tm(n,r);return t(r),r.copy_.set(e,i),i}keys(){return cm(this[Kf]).keys()}values(){const e=this.keys();return{[Symbol.iterator]:()=>this.values(),next:()=>{const t=e.next();if(t.done)return t;return{done:!1,value:this.get(t.value)}}}}entries(){const e=this.keys();return{[Symbol.iterator]:()=>this.entries(),next:()=>{const t=e.next();if(t.done)return t;const r=this.get(t.value);return{done:!1,value:[t.value,r]}}}}[Symbol.iterator](){return this.entries()}}function t(e){e.copy_||(e.assigned_=new Map,e.copy_=new Map(e.base_))}class r extends Set{constructor(e,t){super(),this[Kf]={type_:3,parent_:t,scope_:t?t.scope_:bm(),modified_:!1,finalized_:!1,copy_:void 0,base_:e,draft_:this,drafts_:new Map,revoked_:!1,isManual_:!1}}get size(){return cm(this[Kf]).size}has(e){const t=this[Kf];return a(t),t.copy_?!!t.copy_.has(e)||!(!t.drafts_.has(e)||!t.copy_.has(t.drafts_.get(e))):t.base_.has(e)}add(e){const t=this[Kf];return a(t),this.has(e)||(n(t),Pm(t),t.copy_.add(e)),this}delete(e){if(!this.has(e))return!1;const t=this[Kf];return a(t),n(t),Pm(t),t.copy_.delete(e)||!!t.drafts_.has(e)&&t.copy_.delete(t.drafts_.get(e))}clear(){const e=this[Kf];a(e),cm(e).size&&(n(e),Pm(e),e.copy_.clear())}values(){const e=this[Kf];return a(e),n(e),e.copy_.values()}entries(){const e=this[Kf];return a(e),n(e),e.copy_.entries()}keys(){return this.values()}[Symbol.iterator](){return this.values()}forEach(e,t){const r=this.values();let n=r.next();for(;!n.done;)e.call(t,n.value,n.value,this),n=r.next()}}function n(e){e.copy_||(e.copy_=new Set,e.base_.forEach((t=>{if(em(t)){const r=Tm(t,e);e.drafts_.set(t,r),e.copy_.add(r)}else e.copy_.add(t)})))}function a(e){e.revoked_&&Zf(3,JSON.stringify(cm(e)))}var i,o;o={proxyMap_:function(t,r){return new e(t,r)},proxySet_:function(e,t){return new r(e,t)}},mm[i="MapSet"]||(mm[i]=o)}();const ig=n=>{var{listItems:a,listStyleWidth:l,hideNoResultsDisplay:c,enableSearch:d,searchPlaceholder:u="Search",visible:h,mode:p="default",selectedKeyPath:f,selectableCategory:m,itemsLoadState:g="success",itemTruncationType:y="end",onBlur:v,onDismiss:w,onRetry:$,onSearch:x,onSelectItem:O}=n,S=H(n,["listItems","listStyleWidth","hideNoResultsDisplay","enableSearch","searchPlaceholder","visible","mode","selectedKeyPath","selectableCategory","itemsLoadState","itemTruncationType","onBlur","onDismiss","onRetry","onSearch","onSelectItem"]);const _=b((()=>{if(!a||!a.length)return new Map([]);const e=(t,r)=>t.reduce(((t,n)=>{const{key:a,label:i,value:o,subItems:s}=n,l=a.toString(),c=[...r,l],d={label:i,value:o,expanded:"expand"===p,selected:!1,isSearchTerm:!1,keyPath:c,subItems:s?e(s,c):void 0};return t.set(l,d),t}),new Map);return e(a,[])}),[a]),[k,j]=i(""),[D,C]=i(0),[M,P]=i(!1),[F,T]=i(_),[B,E]=i(_),[A,N]=i(0),[I,L]=i([]),z=Hs({height:D}),R=o(),V=o(),W=o({}),Y=o();s((()=>{if(h){const e=re(),t=ng.getVisibleKeyPaths(e);if(T(e),L(t),Y.current)Y.current.focus();else if(W.current){const e=t[A];W.current[e[0]].ref.focus()}setTimeout((()=>{C(ee())}))}else W.current={},N(0),C(0),j(""),T(_)}),[h]),s((()=>{if(h){const e=ee();C(e)}}),[F,B]),s((()=>{ae(k)}),[k]),df("keydown",(function(e){if(R.current&&R.current.contains(e.target))switch(e.code){case"ArrowDown":if(A+1>=I.length)return;K("down");break;case"ArrowUp":if(A-1<0)return void(d&&Y.current.focus());K("up");break;case"Escape":w&&w(!0)}}),"document");const U=e=>{O(e)},q=e=>{const t=Am(M?B:F,(t=>{const r=ng.getItemAtKeyPath(t,e);r.expanded=!r.expanded})),r=ng.getVisibleKeyPaths(t);L(r),M?E(t):T(t)},Q=(e,t,r=W.current)=>{const[n,...a]=t;r[n]||(r[n]={ref:void 0,subItems:{}}),a.length?Q(e,a,r[n].subItems):r[n].ref=e},K=e=>{const t="down"===e?A+1:A-1;N(t);const r=I[t];Cr(W.current,r.join(".subItems.")).ref.focus()},G=e=>{const t=e.target.value;j(t),x&&x()},Z=()=>{j(""),Y.current.focus(),x&&x()};const X=()=>{},J=()=>{$&&$()},ee=()=>V&&V.current?V.current.getBoundingClientRect().height:0,te=()=>{const e=(t,r)=>{const n=k.toLowerCase().trim(),a=-1!=t.label.toLowerCase().indexOf(n),i=-1!=_.get(t.keyPath[0]).label.toLowerCase().indexOf(n);if(!t.subItems)return a?Object.assign(Object.assign({},t),{expanded:!1,isSearchTerm:!0}):r||i?Object.assign(Object.assign({},t),{expanded:!1,isSearchTerm:!1}):void 0;const o=new Map;t.subItems.forEach((t=>{const r=e(t,a);if(r){const e=r.keyPath[r.keyPath.length-1];o.set(e,r)}}));let s=!1;for(const e of o.values())if((e.isSearchTerm||e.expanded)&&(s=!0),e.subItems&&0===e.subItems.size){const t=e.keyPath[e.keyPath.length-1];o.delete(t)}return Object.assign(Object.assign({},t),{expanded:s,isSearchTerm:a,subItems:o})},t=new Map;for(const[r,n]of _){const a=e(n);a&&a.subItems&&a.subItems.size&&t.set(r,a)}return t},re=()=>{if(["expand","collapse"].includes(p))return _;return ng.getInitialDropdown(F,f)},ne=e=>{const t=ng.getVisibleKeyPaths(e);L(t),N(0)},ae=e=>{if(""===e)ne(F),E(_),P(!1);else if(e.trim().length>=3){W.current={};const e=!0,t=te();E(t),ne(t),P(e)}},ie=()=>{if(!$||$&&"success"===g){const e=M?B:F;return Array.from(e).map((([e,r])=>t(Gm,{item:r,selectedKeyPath:f,selectableCategory:m,searchValue:k,itemTruncationType:y,visible:h,onBlur:X,onExpand:q,onRef:Q,onSelect:U},e)))}},oe=()=>{if(M&&!c&&!B.size)return e(Jm,Object.assign({"data-testid":"list-no-results"},{children:[t(tg,{"data-testid":"no-result-icon"}),t(eg,{children:"No results found."})]}),"noResults")},se=()=>{if($&&"loading"===g)return e(Jm,Object.assign({"data-testid":"list-loading"},{children:[t(Nl,{$buttonStyle:"secondary",size:24}),t(eg,{children:"Loading..."})]}),"loading")},le=()=>{if($&&"fail"===g)return e(Jm,Object.assign({"data-testid":"list-fail"},{children:[t(tg,{"data-testid":"load-error-icon"}),t(eg,{children:"Failed to load."}),t(rg,Object.assign({onClick:J,type:"button"},{children:"Try again."}))]}),"noResults")};return t(r,{children:t(Zm,Object.assign({style:z,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:R},{children:(()=>{if(h)return e(Xm,Object.assign({ref:V,"data-testid":"dropdown-list",width:l,role:"list"},S,{children:[d&&"success"===g?t(lf,{ref:Y,onChange:G,value:k,placeholder:u,"data-testid":"search-input","aria-label":"Type to search",tabIndex:h?0:-1,onClear:Z}):null,se(),oe(),le(),ie()]}))})()}))})},og=n=>{var{placeholder:a="Select",options:l,disabled:c,error:d,className:u,"data-testid":h,id:p,selectedKeyPath:f,mode:m,valueToStringFunction:g,enableSearch:b,searchPlaceholder:y,selectableCategory:v,hideNoResultsDisplay:w,listStyleWidth:$,readOnly:x,onSearch:O,onSelectOption:S,onShowOptions:_,onHideOptions:k,onRetry:j,optionsLoadState:D="success",optionTruncationType:C="end"}=n,M=H(n,["placeholder","options","disabled","error","className","data-testid","id","selectedKeyPath","mode","valueToStringFunction","enableSearch","searchPlaceholder","selectableCategory","hideNoResultsDisplay","listStyleWidth","readOnly","onSearch","onSelectOption","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType"]);const[P,F]=i(f||[]),[T,B]=i(),[E,A]=i(!1),N=o(),I=o();s((()=>{const e=f||[];F(e),V(l,e)}),[f,l]);const L=e=>{const{keyPath:t,value:r,label:n}=e;F(t),B({label:n,value:r}),A(!1),Y(!1),N.current&&N.current.focus(),S&&S(t,r)},z=e=>{E&&(A(!1),Y(!1)),e&&N.current&&N.current.focus()},R=()=>{const{label:e,value:t}=T;return g?g(t)||t.toString():e},V=(e,t)=>{const r=(e,t)=>{const[n,...a]=t;if(Uf(e)||!n)return;const i=e.find((e=>e.key===n));return i&&a.length?r(i.subItems,a):i},n=r(e,t);if(n){const{label:e,value:t}=n;B({label:e,value:t})}else B(void 0)},W=e=>{if("middle"===C){let t=0;return I&&I.current&&(t=I.current.getBoundingClientRect().width),jc.truncateOneLine(e,t,120,6)}return e},Y=e=>{!e&&k&&k(),e&&_&&_()};return e(Of,Object.assign({className:u,show:E,error:d&&!E,disabled:c,readOnly:x,testId:h,onBlur:()=>{A(!1),Y(!1)}},{children:[t(pf,Object.assign({ref:N,type:"button","data-testid":p||"selector",disabled:c,onClick:e=>{e.preventDefault(),c||x||(A(!E),Y(!E))}},M,{children:e(r,{children:[t(wf,Object.assign({ref:I},{children:Uf(T)?t(xf,Object.assign({truncateType:C},{children:a})):t($f,Object.assign({truncateType:C},{children:W(R())}))})),!x&&t(bf,Object.assign({expanded:E},{children:t(yf,{})}))]})})),E&&t(vf,{}),l&&l.length>0||j?t(ig,{"data-testid":"dropdown-list",listItems:l,listStyleWidth:$,visible:E,mode:m,selectedKeyPath:P,selectableCategory:v,itemsLoadState:D,itemTruncationType:C,enableSearch:b,searchPlaceholder:y,hideNoResultsDisplay:w,onDismiss:z,onSelectItem:L,onSearch:O,onRetry:j}):null]}))};var sg=function(e,t,r,n){var a=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++a]);++a<i;)r=t(r,e[a],a,e);return r};var lg=function(e){return function(t,r,n){for(var a=-1,i=Object(t),o=n(t),s=o.length;s--;){var l=o[e?s:++a];if(!1===r(i[l],l,i))break}return t}}(),cg=Ju;var dg=Ku;var ug=function(e,t){return function(r,n){if(null==r)return r;if(!dg(r))return e(r,n);for(var a=r.length,i=t?a:-1,o=Object(r);(t?i--:++i<a)&&!1!==n(o[i],i,o););return r}}((function(e,t){return e&&lg(e,t,cg)}));var hg=sg,pg=ug,fg=$p,mg=function(e,t,r,n,a){return a(e,(function(e,a,i){r=n?(n=!1,e):t(r,e,a,i)})),r},gg=Ee;var bg=function(e,t,r){var n=gg(e)?hg:mg,a=arguments.length<3;return n(e,fg(t),r,a,pg)};const yg=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],vg=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var wg;!function(e){e.getCountries=()=>[].concat(...yg.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:vg("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,a=n.split(" ");a.shift();const i=a.join(" ");return bg(i,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const[r,...n]=e.remainingText;return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(wg||(wg={}));const $g=e=>{var{onChange:r,value:n,allowClear:a,onClear:l,onBlur:c,error:d,fixedCountry:u=!1,optionPlaceholder:h="Select",optionSearchPlaceholder:p,enableSearch:f,onHideOptions:m,onShowOptions:g,placeholder:b}=e,y=H(e,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder"]);const[v]=i(wg.getCountries()),[w,$]=i(void 0),[x,O]=i(""),S=o(),_=Dc({ref:S,formatter:e=>wg.formatNumber(e.replace(/[^0-9]/g,""),w)});s((()=>{const e=v.filter((e=>e.countryCode===xg(null==n?void 0:n.countryCode)))[0];$(e),O(wg.formatNumber(null==n?void 0:n.number,e))}),[n]);const k=e=>{D(x,e),r&&j(x,e)},j=(e,t)=>{const n=wg.formatNumber(e,t);r({number:n.replace(/[\s()]+/g,""),countryCode:t&&Og(t.countryCode)})},D=(e,t)=>{O(wg.formatNumber(e,t)),$(t)};return t(Bf,Object.assign({ref:S,value:x,onChange:()=>{const{nextValue:e,updateCaretPosition:t}=_();t(),D(e,w),r&&j(e,w)},allowClear:a&&!!x,onClear:()=>{l?l():O("")},onBlur:c,error:d,placeholder:b,addon:u?{type:"label",attributes:{value:Og(null==w?void 0:w.countryCode)}}:{type:"list",attributes:{placeholder:h,options:v,selectedOption:w,enableSearch:f,searchPlaceholder:p,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:Og(e.countryCode)}),onSelectOption:k,onHideOptions:m,onShowOptions:g}},inputMode:"numeric"},y))},xg=e=>e?e.replace("+",""):"",Og=e=>e?e.includes("+")?e:`+${e}`:"",Sg=({className:n,"data-testid":a,selectedOption:l,minimumCharacters:c=3,fetchOptions:d,placeholder:u="Enter here...",readOnly:h=!1,disabled:p=!1,error:f,valueExtractor:g,listExtractor:b,displayValueExtractor:y=(e=>e.toString()),onSelectOption:v})=>{const w=l&&y(l),[$,x]=i(w||""),[O,S]=i(w||""),[_,k]=i([]),[j,D]=i(!0),[C,M]=i(!1),[P,F]=i(!!l),[T,B]=i(l),E=o(d),A=e=>V(void 0,void 0,void 0,(function*(){M(!1),D(!0);try{const t=yield E.current(e);S(e),k(t),D(!1)}catch(e){M(!0)}})),N=m(Be((e=>A(e)),500,{leading:!1,trailing:!0}),[]);s((()=>{E.current=d}),[d]),s((()=>{$&&$.length>=c&&$!==O?N($):N.cancel(),""===$&&T&&(v&&v(void 0,void 0),z(),B(void 0)),l&&$!==y(l)&&F(!1)}),[$,l]),s((()=>{x(l?y(l):""),z(l),B(l)}),[l]);const I=e=>{x(e.target.value)},L=(e,t)=>{v&&v(e,t)},z=e=>{S(e?y(e):""),F(!!e),k([]),D(!0)},R=()=>{x(""),v&&v(void 0,void 0),z()},H=()=>{P||T?(z(T),x(y(T)),v&&v(T,Y(T)),B(T)):R()},W=()=>$&&$.length>=c&&!P,Y=e=>g?g(e):e,U=()=>t(yd,{type:"text",value:$,onChange:I,placeholder:u,readOnly:h,disabled:p,allowClear:!0,onClear:R,styleType:"no-border",onBlur:$.length<c?H:void 0});return e(Of,Object.assign({className:n,show:W(),error:f&&!W(),disabled:p,readOnly:h,testId:a,onBlur:H},{children:[t(h?r:ff,{children:U()}),!h&&W()&&t(vf,{}),t(cf,{listItems:_,onSelectItem:L,valueExtractor:g,listExtractor:b,itemsLoadState:C?"fail":j?"loading":"success",visible:W(),disableItemFocus:!0,onRetry:()=>A($),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]}))},_g=x.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,kg=x(md)`
    position: absolute;
    right: 0;
    padding-left: 0.5rem;
    margin-right: 0;
`,jg=x(pf)`
    padding-right: 2.75rem;
`,Dg=r=>{var{selectedOptions:n,placeholders:a={from:"Select",to:"Select"},options:l,disabled:c,className:d,readOnly:u,error:h,"data-testid":p,id:f,enableSearch:m=!1,searchFunction:g,searchPlaceholder:b,valueExtractor:y,valueToStringFunction:v,listExtractor:w,displayValueExtractor:$,onSelectOption:x,listStyleWidth:O,onShowOptions:S,onHideOptions:_,onRetry:k,optionsLoadState:j={from:"success",to:"success"},optionTruncationType:D="middle",renderCustomSelectedOption:C,renderListItem:M,renderCustomCallToAction:P}=r,F=H(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[T,B]=i(),[E,A]=i(),N=o(),I={from:o(),to:o()},[L,z]=i("none");s((()=>{B(null==n?void 0:n.from),A(null==n?void 0:n.to)}),[n]);const R=e=>t=>{t.stopPropagation(),t.preventDefault(),c||u||z("from"===e?"from":"to"===e&&T?"to":"from")},V=e=>{const t="from"===e?T:E;return $?$(t):y?y(t):null==t?void 0:t.toString()},W=(e,t)=>{if("middle"===D){let r=0;return I[e]&&I[e].current&&(r=I[e].current.getBoundingClientRect().width),jc.truncateOneLine((e=>"string"==typeof e?e:v(e)||e.toString())(t),r,120,8)}return t},Y=e=>{!e&&_&&_(),e&&S&&S()},U=e=>{const r="from"===e?T:E;return r?C?C(r):t($f,Object.assign({truncateType:D},{children:W(e,V(e))})):t(xf,Object.assign({truncateType:D},{children:W(e,a[e])}))},q=e=>t(wf,Object.assign({onClick:R(e),ref:I[e]},{children:U(e)}));return e(Of,Object.assign({show:"none"!==L,"data-testid":F["data-testid"],error:h&&!("none"!==L),disabled:c,readOnly:u,testId:p,onBlur:()=>{Y(!1),z("none"),T&&E||(A(void 0),B(void 0))},className:d},{children:[e(_g,{children:[t(jg,Object.assign({type:"button","data-testid":f||"selector",disabled:c,ref:N,onClick:R()},F,{children:e(ld,Object.assign({currentActive:(()=>{switch(L){case"from":return"start";case"to":return"end";case"none":return L}})()},{children:[q("from"),q("to")]}))})),"none"===L&&T&&E&&!u&&!c&&t(kg,Object.assign({onClick:e=>{e.stopPropagation(),B(void 0),A(void 0),x&&x({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear"},{children:t(gd,{"aria-hidden":!0})}))]}),"none"!==L&&t(vf,{}),(()=>{if("none"===L)return null;const e=l[L];if(e&&e.length>0){const r="from"===L?T:E;return t(cf,{listItems:e,onSelectItem:(e,t)=>{return r=e,n=t,"from"===(a=L)?B(r):A(r),Y(!1),N&&N.current.focus(),x&&x({[a]:r},n),void("from"===a?(A(void 0),z("to"),Y(!0)):z("none"));var r,n,a},onDismiss:()=>(z("none"),Y(!1),N&&N.current.focus(),void(T&&E||(A(void 0),B(void 0)))),valueExtractor:y,listExtractor:w,listStyleWidth:O,visible:!0,enableSearch:m,searchPlaceholder:b,searchFunction:g,"data-testid":`${L}-dropdown-list`,selectedItems:r?[r]:[],onRetry:k,itemsLoadState:j[L],itemTruncationType:D,renderListItem:M,renderCustomCallToAction:P})}return null})()]}))},Cg=n=>{var{selectedOption:a,placeholder:l="Select",options:c,disabled:d,error:u,className:h,"data-testid":p,id:f,enableSearch:m=!1,searchFunction:g,searchPlaceholder:b,valueExtractor:y,valueToStringFunction:v,listExtractor:w,displayValueExtractor:$,onSelectOption:x,listStyleWidth:O,onShowOptions:S,onHideOptions:_,onRetry:k,optionsLoadState:j="success",optionTruncationType:D="end",renderCustomSelectedOption:C,renderListItem:M,hideNoResultsDisplay:P,renderCustomCallToAction:F}=n,T=H(n,["selectedOption","placeholder","options","disabled","error","className","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","hideNoResultsDisplay","renderCustomCallToAction"]);const[B,E]=i(a),[A,N]=i(!1),I=o(),L=o();s((()=>{E(a)}),[a]);const z=(e,t)=>{E(e),N(!1),W(!1),I&&I.current.focus(),x&&x(e,t)},R=e=>{A&&(N(!1),W(!1)),e&&I&&I.current.focus()},V=e=>{if("middle"===D){let t=0;return L&&L.current&&(t=L.current.getBoundingClientRect().width),jc.truncateOneLine((e=>"string"==typeof e?e:v(e)||e.toString())(e),t,120,8)}return e},W=e=>{!e&&_&&_(),e&&S&&S()};return e(Of,Object.assign({className:h,show:A,error:u&&!A,disabled:d,readOnly:T.readOnly,testId:p,onBlur:()=>{N(!1),W(!1)}},{children:[t(pf,Object.assign({ref:I,type:"button","data-testid":f||"selector",disabled:d,onClick:e=>{e.preventDefault(),d||T.readOnly||(N(!A),W(!A))}},T,{children:e(r,{children:[t(wf,Object.assign({ref:L},{children:B?C?C(B):t($f,Object.assign({truncateType:D},{children:V($?$(B):y?y(B):B.toString())})):t(xf,Object.assign({truncateType:D},{children:l}))})),!T.readOnly&&t(bf,Object.assign({expanded:A},{children:t(yf,{})}))]})})),A&&t(vf,{}),c&&c.length>0?t(cf,{listItems:c,onSelectItem:z,onDismiss:R,valueExtractor:y,listExtractor:w,listStyleWidth:O,visible:A,enableSearch:m,searchPlaceholder:b,searchFunction:g,"data-testid":"dropdown-list",selectedItems:B?[B]:[],onRetry:k,itemsLoadState:j,itemTruncationType:D,renderListItem:M,hideNoResultsDisplay:P,renderCustomCallToAction:F}):null]}))},Mg=x(Ur.H6)`
    text-align: right;

    ${e=>{if(e.disabled)return O`
                color: ${Er.Neutral[4](e)};
            `}}
`,Pg=({value:e,maxLength:n,disabled:o,renderCustomCounter:l})=>{const[c,d]=i("");s((()=>{d(u(`${e||""}`))}),[e,n]);const u=e=>{if(l)return l(n,e.toString().length);{const t=n-e.toString().length;return t<=1?`${t} character left`:`${t.toLocaleString()} characters left`}};return t(r,{children:a.isValidElement(c)?c:t(Mg,Object.assign({"data-testid":"counter-label",weight:"semibold",disabled:o},{children:c}))})},Fg=x.div`
    display: flex;
    flex-direction: column;
`,Tg=x.textarea`
    border: 1px solid ${Er.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${fn};

    ${Wr("Body","regular")}
    color: ${Er.Neutral[1]};
    background: ${Er.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${Er.Accent.Light[1]};
        box-shadow: ${Rc};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Er.Neutral[3]};
    }

    ${e=>e.readOnly?O`
                border: none;
                padding: 0.75rem 0;
                background: transparent !important;

                :focus,
                :active {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?O`
                background: ${Er.Neutral[6](e)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${Er.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?O`
                border: 1px solid ${Er.Validation.Red.Border(e)};

                :focus,
                :active {
                    border: 1px solid ${Er.Validation.Red.Border(e)};
                    box-shadow: ${Hc};
                }
            `:void 0}
`,Bg=a.forwardRef(((e,r)=>{var{value:n,disabled:a,error:i,rows:o=5}=e,s=H(e,["value","disabled","error","rows"]);return t(Tg,Object.assign({ref:r,disabled:a,value:n,error:i,rows:o},s))}));a.forwardRef(((r,n)=>{var{value:a,disabled:o,rows:l=5,onChange:c}=r,d=H(r,["value","disabled","rows","onChange"]);const[u,h]=i(a);s((()=>{h(a)}),[a]);return e(Fg,{children:[t(Tg,Object.assign({ref:n,disabled:o,value:u,rows:l||5,onChange:e=>{const t=e.target.value;d.maxLength&&t.length>d.maxLength||(h(t),e.target.value=t,c&&c(e))}},d)),d.maxLength&&t(Pg,{disabled:o,value:u,maxLength:d.maxLength,renderCustomCounter:d.renderCustomCounter})]})}));const Eg=x.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.25rem;
`,Ag=x.div`
    display: flex;
    flex: 1;
    margin-right: 0.75rem;
`,Ng=x(_n)`
    margin-top: 0;
`,Ig=a.forwardRef(((r,n)=>{const{label:a,value:o,errorMessage:l,id:c="form-textarea","data-error-testid":d,"data-testid":u,onChange:h}=r,p=H(r,["label","value","errorMessage","id","data-error-testid","data-testid","onChange"]),[f,m]=i(o);s((()=>{m(o)}),[o]);return e(Cn,Object.assign({id:c,label:a,disabled:p.disabled},{children:[t(Bg,Object.assign({id:`${c}-base`,"data-testid":u||c,value:f,error:!!l,onChange:e=>{const t=e.target.value;p.maxLength&&t.length>p.maxLength||(m(t),e.target.value=t,h&&h(e))},ref:n},p)),e(Eg,{children:[l&&t(Ag,{children:t(Ng,Object.assign({weight:"semibold","data-testid":d||(c?`${c}-error-message`:"error-message")},{children:l}))}),p.maxLength&&t(Pg,{disabled:p.disabled,value:f,maxLength:p.maxLength,renderCustomCounter:p.renderCustomCounter})]})]}))}));var Lg,zg;!function(e){e.AM="AM",e.PM="PM"}(Lg||(Lg={})),function(e){e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:Lg.AM};if(!t)return r;try{if("24hr"===e){const n=Vg(t,e);r.minute=jc.padValue(n.minute);const a=parseInt(n.hour);0===Math.floor(a/12)?(r.period=Lg.AM,r.hour=0===a?"12":jc.padValue(a.toString())):(r.period=Lg.PM,r.hour=12===a?a.toString():jc.padValue((a-12).toString()))}else{const n=Vg(t,e);r.hour=jc.padValue(n.hour),r.minute=jc.padValue(n.minute),r.period="am"===n.period.toLowerCase()?Lg.AM:Lg.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?jc.padValue("0"):"55";const n=Math.floor(r/5),a=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return jc.padValue((5*a).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?jc.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?jc.padValue(n.toString()):13===n?jc.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===Lg.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return jc.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const r=Vg(e,t),n=jc.padValue(r.hour);let a=`${n}:${jc.padValue(r.minute)}`;return"12hr"===t?(a+=r.period.toLowerCase(),a):a}catch(e){return""}}}(zg||(zg={}));const Rg=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},Hg=e=>{const t=parseInt(e);return t>=0&&t<=59},Vg=(e,t)=>{const r=e.split(":"),n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!Rg(r[0],t)||!Hg(e)||"am"!==(a=i).toLowerCase()&&"pm"!==a.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!Rg(r[0],t)||!Hg(r[1]))throw n;return{hour:r[0],minute:r[1]};var a},Wg=x.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem;

    // Content positioning style
    ${e=>{if(!e.$indicator)return O`
                justify-content: center;
            `}}

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?O`
                        border-color: ${Er.Validation.Red.Icon};
                        background: ${Er.Neutral[8]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Er.Shadow.Red};
                        }
                    `:e.$disabled?O`
                        border-color: transparent;
                    `:O`
                        border-color: transparent;

                        :hover {
                            background: ${Er.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?O`
                        background: ${Er.Neutral[6]};
                        border-color: ${Er.Neutral[5]};
                    `:e.$disabled&&e.$selected?O`
                        background: ${Er.Neutral[6]};
                        border-color: ${Er.Neutral[4]};
                    `:e.$error?O`
                        background: ${Er.Neutral[8]};
                        border-color: ${Er.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Er.Shadow.Red};
                        }
                    `:e.$selected?O`
                        background: ${Er.Accent.Light[5]};
                        border-color: ${Er.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Er.Shadow.Accent};
                        }
                    `:O`
                        background: ${Er.Neutral[8]};
                        border-color: ${Er.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Er.Shadow.Accent};
                            border-color: ${Er.Accent.Light[1]};
                        }
                    `}
`,Yg=x.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,Ug=x.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
`,qg=x.label`
    ${e=>e.$selected&&!e.$indicator?O`
                ${Wr("H4","semibold")}
            `:O`
                ${Wr("H4","regular")}
            `}

    color: ${Er.Neutral[1]};

    ${e=>e.$disabled?O`
                color: ${Er.Neutral[3]};
            `:e.$selected?O`
                color: ${Er.Primary};
            `:void 0}
`,Qg=x.div`
    ${Wr("BodySmall","regular")}
    margin-top: 0.5rem;

    strong,
    b {
        ${Vr("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?O`
                color: ${Er.Neutral[3]};
            `:e.$selected?O`
                color: ${Er.Primary};
            `:O`
                color: ${Er.Neutral[1]};
            `}
`,Kg=x.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?O`
                    color: ${Er.Primary};
                `:O`
                    color: ${Er.Neutral[4]};
                `};
    }
`,Gg=({type:e,active:r=!1,disabled:n,className:a})=>{let i;switch(e){case"checkbox":i=t(r?R:z,{});break;case"radio":i=t(r?L:I,{});break;case"tick":i=t(B,{});break;case"cross":i=t(D,{});break;default:i=null}return t(Kg,Object.assign({className:a,$active:r,disabled:n},{children:i}))},Zg=x(ul.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Er.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${an.mobileS} {
        max-width: 100%;
    }
`,Xg=x.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,Jg=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${an.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,eb=x.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${an.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,tb=x.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${an.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,rb=x.div`
    display: flex;
    gap: 0.5rem;

    ${an.tablet} {
        flex-direction: column;
    }

    ${an.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,nb=x.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${an.mobileS} {
        width: 6rem;
    }
`,ab=x(dn)`
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
`,ib=x(Ur.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${an.tablet} {
        margin: 0;
    }

    ${an.mobileS} {
        margin: 0 0.25rem;
    }
`,ob=x(Wc)`
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

    ${an.mobileS} {
        width: 100%;
    }
`,sb=x((({type:r="checkbox",indicator:n,checked:a,styleType:l="default",children:c,subLabel:d,disabled:u,error:h,name:p,id:f,className:m,"data-testid":g,onChange:b})=>{const[y,v]=i(a),[w]=i(kc.generate()),$=f?`${f}-input`:`tg-${w}-input`,x=o();s((()=>{v(a)}),[a]);return e(Wg,Object.assign({$selected:y,$disabled:u,className:m,$styleType:l,$error:h,$indicator:n,id:f,"data-testid":g},{children:[n&&(()=>{let e;switch(r){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=r}return t(Gg,{type:e,active:y,disabled:u})})(),t(Yg,{ref:x,name:p,id:$,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:u,onChange:e=>{if(!u){if(b)return void b(e);switch(r){case"checkbox":v((e=>!e));break;case"radio":case"yes":case"no":y||v(!0)}}},checked:y}),e(Ug,{children:[t(qg,Object.assign({htmlFor:$,$selected:y,$indicator:n,$disabled:u,"data-testid":"toggle-label"},{children:c})),d&&(()=>{if(!d)return null;let e;return"string"==typeof d?e=d:"function"==typeof d&&(e=d()),t(Qg,Object.assign({$disabled:u,$selected:y},{children:e}))})()]})]}))}))`
    min-width: 5rem;
    flex: 1;
`,lb=x(Il.Small)`
    width: 7rem;

    ${an.mobileL} {
        flex: 1;
    }

    ${an.mobileS} {
        width: 100%;
    }
`;var cb,db,ub;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(cb||(cb={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(db||(db={})),function(e){e.AM="am",e.PM="pm"}(ub||(ub={}));const hb=({id:r,value:n,show:a,format:l,onChange:c,onCancel:d})=>{const u=zg.getTimeValues(l,n),[h,p]=i(u.hour),[f,g]=i(u.minute),[b,y]=i(u.period),v=o(),w=o(),$=Sa();s((()=>{if(a&&v.current&&v.current.focus(),a){const{hour:e,minute:t,period:r}=zg.getTimeValues(l,n);p(e),g(t),y(r)}}),[a,n,l]),s((()=>{const e=v.current,t=w.current;return e&&e.addEventListener("keydown",x),t&&t.addEventListener("keydown",x),()=>{e&&e.removeEventListener("keydown",x),t&&t.removeEventListener("keydown",x)}}),[]);const x=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},O=m((e=>{switch(e.currentTarget.name){case cb.MINUTE_UP:g(zg.updateMinutes(f,"add"));break;case cb.MINUTE_DOWN:g(zg.updateMinutes(f,"minus"));break;case cb.HOUR_UP:p(zg.updateHours(h,"add"));break;case cb.HOUR_DOWN:p(zg.updateHours(h,"minus"))}}),[h,f]),S=e=>{e.target.select()},_=e=>{const t=e.target.value;switch(e.target.name){case db.HOUR:t.length<=2&&p(t);break;case db.MINUTE:t.length<=2&&g(t)}},k=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case db.HOUR:{const r=t>23||t<0?u.hour:zg.convertHourTo12HourFormat(e.target.value);p(r);break}case db.MINUTE:{const r=t>59||t<0?u.minute:e.target.value;g(jc.padValue(r));break}}},j=e=>{switch(e.target.name){case ub.AM:y(Lg.AM);break;case ub.PM:y(Lg.PM)}},D=e=>r?`${r}-${e}`:e,M=Hs({height:a?$.height+32:0});return t(Zg,Object.assign({"data-testid":"animated-dropdown-wrapper",style:M},{children:e(Xg,Object.assign({ref:$.ref,"data-testid":D("timepicker-dropdown"),inert:a?void 0:""},{children:[e(Jg,{children:[e(tb,{children:[e(nb,{children:[t(ab,Object.assign({"aria-label":"increase hour",name:cb.HOUR_UP,tabIndex:-1,onClick:O,"data-testid":D("hour-increment-button")},{children:t(N,{})})),t(ob,{"aria-label":"hour",type:"number",name:db.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:h,onFocus:S,onChange:_,onBlur:k,min:1,max:12,placeholder:"HH","data-testid":D("hour-input")}),t(ab,Object.assign({"aria-label":"decrease hour",name:cb.HOUR_DOWN,tabIndex:-1,onClick:O,"data-testid":D("hour-decrement-button")},{children:t(C,{})}))]}),t(ib,{children:":"}),e(nb,{children:[t(ab,Object.assign({"aria-label":"increase minute",name:cb.MINUTE_UP,tabIndex:-1,onClick:O,"data-testid":D("minute-increment-button")},{children:t(N,{})})),t(ob,{"aria-label":"minute",type:"number",name:db.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:f,onChange:_,onBlur:k,onFocus:S,min:0,max:59,placeholder:"MM","data-testid":D("minute-input")}),t(ab,Object.assign({"aria-label":"decrease minute",name:cb.MINUTE_DOWN,tabIndex:-1,onClick:O,"data-testid":D("minute-decrement-button")},{children:t(C,{})}))]})]}),e(rb,{children:[t(sb,Object.assign({checked:b===Lg.AM,name:ub.AM,type:"radio",onChange:j,"data-testid":D("am-toggle"),"aria-label":"AM"},{children:"AM"})),t(sb,Object.assign({checked:b===Lg.PM,name:ub.PM,type:"radio",onChange:j,"data-testid":D("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e(eb,{children:[t(lb,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:d,"data-testid":D("cancel-button")},{children:"Cancel"})),t(lb,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===l?zg.convertTo24HourFormat({hour:h,minute:f,period:b}):`${h}:${f}${b}`,c(e)},disabled:""===h||""===f,"data-testid":D("confirm-button")},{children:"Done"}))]})]}))}))},pb=x.div`
    position: relative;
`,fb=x(Vc)`
    height: 3rem;
    gap: 0.5rem;
`,mb=x(Wc)`
    display: block;
    width: 100%;
    flex: 1;
`,gb=r=>{var{id:n,disabled:a=!1,error:l,value:c,format:d="24hr",readOnly:u,onChange:h,onFocus:p,onBlur:f}=r,m=H(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[g,b]=i(!1),[y,v]=i(!1),[w,$]=i(""),[x,O]=i(""),S=o();s((()=>{c&&($(c.start),O(c.end))}),[]),df("mousedown",(function(e){a||D(e)}),"document"),df("keyup",(function(e){if("Tab"===e.code)D(e)}),"document");const _=()=>{j()},k=()=>{g||y||p&&p()},j=()=>{b(!1),v(!1),f&&f()},D=e=>{S&&!S.current.contains(e.target)&&(y||g)&&j()};return t(pb,Object.assign({ref:S,id:n},m,{children:e(fb,Object.assign({$disabled:a,$error:l,$readOnly:u},{children:[e(ld,Object.assign({error:l,currentActive:g?"start":y?"end":"none"},{children:[t(mb,{onFocus:()=>{a||u||g||(v(!1),b(!0),k())},readOnly:!0,placeholder:"From",value:zg.formatDisplayValue(w,d),disabled:a,"data-testid":m["data-testid"]?`${m["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(mb,{onFocus:()=>{a||u||y||(b(!1),v(!0),k())},readOnly:!0,placeholder:"To",value:zg.formatDisplayValue(x,d),disabled:a,"data-testid":m["data-testid"]?`${m["data-testid"]}-timepicker-selector`:"timepicker-selector"})]})),t(hb,{id:n,show:g,value:w,format:d,onCancel:_,onChange:e=>{b(!1),v(!0),$(e);h&&h({start:e,end:x})}}),t(hb,{id:n,show:y,value:x,format:d,onCancel:_,onChange:e=>{v(!1),O(e);h&&h({start:w,end:e}),""==w?b(!0):f&&f()}})]}))}))};x.div`
    position: relative;
`;const bb=x(Wc)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,yb=r=>{var{id:n,disabled:a=!1,readOnly:s=!1,error:l,value:c,placeholder:d,format:u="24hr",onChange:h,onFocus:p,onBlur:f}=r,g=H(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[b,y]=i(!1),v=o();df("mousedown",(function(e){a||s||x(e)}),"document"),df("keyup",(function(e){if("Tab"===e.code)x(e)}),"document");const w=()=>{a||s||b||(y(!0),p&&p())};const $=()=>{y(!1),f&&f()},x=e=>{v&&!v.current.contains(e.target)&&b&&$()},O=m((()=>"12hr"===u?"HH:MMam":"HH:MM"),[u,d]);return e(Vc,Object.assign({ref:v,id:n,$readOnly:s,$disabled:a,$error:l},g,{children:[t(bb,{onFocus:w,focused:b,readOnly:!0,placeholder:d||O(),value:zg.formatDisplayValue(c,u),disabled:a,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),t(hb,{id:n,show:b,value:c,format:u,onCancel:()=>{$()},onChange:e=>{h&&h(e),$()}})]}))},vb=x(xd)`
    margin-right: 0.25rem;
`,wb=x(yd)`
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
`,$b=x(wb)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,xb=x(Ur.Body)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return O`
                color: ${Er.Neutral[3]};
            `}}
`,Ob=x.div`
    display: flex;
`,Sb=x(Ur.Body)`
    ${e=>{if(e.$inactive)return O`
                color: ${Er.Neutral[3]};
            `}}
`,_b=n=>{var{disabled:a,error:l,value:c,onChange:d,onBlur:u,onChangeRaw:h,onBlurRaw:p,readOnly:f,placeholder:m="00-8888"}=n,g=H(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder"]);const[b,y]=i(""),[v,w]=i(""),[$,x]=i("none"),O=o(null),S=o(null),_=o(null),k=o(b),j=o(v),D=o($),C=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),M=Dc({ref:S,formatter:C}),P=Dc({ref:_,formatter:C}),F=e=>{k.current=e,y(e)},T=e=>{j.current=e,w(e)},B=e=>{D.current=e,x(e)};s((()=>{"floor"===$&&3===b.length&&_.current&&_.current.focus()}),[b]),s((()=>{z(c)}),[c]);const E=e=>{B(e.target.name),e.target.select()},A=e=>{const t=e.target.name,r=e.target.value,n=L(r);"floor"===t?(F(n),n!==b&&R(n,t)):(T(n),n!==v&&R(n,t))},N=e=>{const t=e.target.name;if("floor"===t){const{nextValue:e,updateCaretPosition:r}=M();r(),F(e),R(e,t)}else{const{nextValue:e,updateCaretPosition:r}=P();r(),T(e),R(e,t)}},I=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===$&&0===v.length&&S.current.focus()},L=e=>/^[0-9]$/.test(e)?jc.padValue(e,!0):e.toLocaleUpperCase(),z=e=>{if(e!==kb)if(void 0===e||0===e.length)F(""),T("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];F("floor"===$?e:L(e)),T("unit"===$?r:L(r))}}},R=(e,t)=>{if(!d&&!h)return;const r={floor:k.current,unit:j.current};if(r[t]=e,d){const e=W(r);d(e)}h&&h([r.floor,r.unit])},V=()=>{if(!u&&!p)return;const e={floor:L(k.current),unit:L(j.current)};if(u){const t=W(e);u(t)}p&&p([e.floor,e.unit])},W=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":kb},Y=e=>e.split("-");return e(Vc,Object.assign({ref:O,onClick:()=>{"none"===$&&S.current&&S.current.focus()},$disabled:a,$error:l,$readOnly:f,"data-testid":g["data-testid"],tabIndex:-1,onBlur:e=>{O.current&&O.current.contains(e.relatedTarget)||"none"!==D.current&&(B("none"),V())}},{children:[t(vb,Object.assign({"data-testid":"addon",disabled:a,$readOnly:f},{children:"#"})),f&&c?(()=>{const r=c.split("-");return e(Ob,{children:[t(Sb,{children:r[0]}),t(xb,{children:"-"}),t(Sb,{children:r[1]})]})})():e(r,{children:[t(wb,{name:"floor",maxLength:3,value:b,ref:S,onFocus:E,onBlur:A,onChange:N,disabled:a,readOnly:f,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==$||f?Y(m)[0]:""}),t(xb,Object.assign({$inactive:0===b.length},{children:"-"})),t($b,{name:"unit",maxLength:5,value:v,ref:_,onFocus:E,onBlur:A,onChange:N,onKeyDown:I,disabled:a,readOnly:f,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==$||f?Y(m)[1]:""})]})]}))},kb="Invalid unit number",jb={DateInput:e=>{var{label:r,errorMessage:n,id:a="form-date-input","data-error-testid":i,"data-testid":o}=e,s=H(e,["label","errorMessage","id","data-error-testid","data-testid"]);return t(Cn,Object.assign({id:a,label:r,errorMessage:n,"data-error-testid":i,disabled:s.disabled},{children:t(rd,Object.assign({id:`${a}-base`,"data-testid":o||a,error:!!n},s))}))},DateRangeInput:e=>{var{label:r,errorMessage:n,id:a="form-date-range-input","data-error-testid":i,"data-testid":o}=e,s=H(e,["label","errorMessage","id","data-error-testid","data-testid"]);return t(Cn,Object.assign({id:a,label:r,errorMessage:n,"data-error-testid":i,disabled:s.disabled},{children:t(pd,Object.assign({id:`${a}-base`,"data-testid":o||a,error:!!n},s))}))},Input:vd,InputGroup:Ef,Label:jn,MultiSelect:e=>{var{label:r,errorMessage:n,id:a="form-multi-select","data-error-testid":i,"data-testid":o,enableSearch:s=!1}=e,l=H(e,["label","errorMessage","id","data-error-testid","data-testid","enableSearch"]);return t(Cn,Object.assign({id:a,label:r,errorMessage:n,"data-error-testid":i,disabled:l.disabled},{children:t(Af,Object.assign({id:`${a}-base`,"data-testid":o||a,error:!!n,enableSearch:s},l))}))},NestedSelect:e=>{var{label:r,errorMessage:n,id:a="form-nested-select","data-error-testid":i,"data-testid":o}=e,s=H(e,["label","errorMessage","id","data-error-testid","data-testid"]);return t(Cn,Object.assign({id:a,label:r,errorMessage:n,"data-error-testid":i,disabled:s.disabled},{children:t(og,Object.assign({id:`${a}-base`,"data-testid":o||a,error:!!n},s))}))},Select:e=>{var{label:r,errorMessage:n,id:a="form-select","data-error-testid":i,"data-testid":o,enableSearch:s=!1}=e,l=H(e,["label","errorMessage","id","data-error-testid","data-testid","enableSearch"]);return t(Cn,Object.assign({id:a,label:r,errorMessage:n,"data-error-testid":i,disabled:l.disabled},{children:t(Cg,Object.assign({id:`${a}-base`,"data-testid":o||a,error:!!n,enableSearch:s},l))}))},RangeSelect:e=>{var{label:r,errorMessage:n,id:a="form-select","data-error-testid":i,"data-testid":o,enableSearch:s=!1}=e,l=H(e,["label","errorMessage","id","data-error-testid","data-testid","enableSearch"]);return t(Cn,Object.assign({id:a,label:r,errorMessage:n,"data-error-testid":i,disabled:l.disabled},{children:t(Dg,Object.assign({id:`${a}-base`,"data-testid":o||a,error:!!n,enableSearch:s},l))}))},Textarea:Ig,Timepicker:e=>{var{label:r,errorMessage:n,id:a="form-timepicker","data-error-testid":i,"data-testid":o}=e,s=H(e,["label","errorMessage","id","data-error-testid","data-testid"]);return t(Cn,Object.assign({id:a,label:r,errorMessage:n,disabled:s.disabled,"data-error-testid":i},{children:t(yb,Object.assign({id:`${a}-base`,"data-testid":o||a,error:!!n},s))}))},TimeRangePicker:e=>{var{label:r,errorMessage:n,id:a="form-timepicker","data-error-testid":i,"data-testid":o}=e,s=H(e,["label","errorMessage","id","data-error-testid","data-testid"]);return t(Cn,Object.assign({id:a,label:r,errorMessage:n,disabled:s.disabled,"data-error-testid":i},{children:t(gb,Object.assign({id:`${a}-base`,"data-testid":o||a,error:!!n},s))}))},CustomField:e=>{var{id:r="form-custom-field","data-error-testid":n,children:a}=e,i=H(e,["id","data-error-testid","children"]);return t(Cn,Object.assign({id:r,"data-error-testid":n},i,{children:a}))},UnitNumberInput:e=>{var{label:r,errorMessage:n,id:a="form-unit-number-input","data-error-testid":i,"data-testid":o}=e,s=H(e,["label","errorMessage","id","data-error-testid","data-testid"]);return t(Cn,Object.assign({id:a,label:r,errorMessage:n,"data-error-testid":i,disabled:s.disabled},{children:t(_b,Object.assign({id:`${a}-base`,"data-testid":o||a,error:!!n},s))}))},PhoneNumberInput:e=>{var{label:r,errorMessage:n,id:a="form-phone-number-input","data-error-testid":i,"data-testid":o}=e,s=H(e,["label","errorMessage","id","data-error-testid","data-testid"]);return t(Cn,Object.assign({id:a,label:r,errorMessage:n,"data-error-testid":i,disabled:s.disabled},{children:t($g,Object.assign({id:`${a}-base`,"data-testid":o||a,error:!!n},s))}))},PredictiveTextInput:e=>{var{label:r,errorMessage:n,id:a="form-predictive-text","data-error-testid":i,"data-testid":o}=e,s=H(e,["label","errorMessage","id","data-error-testid","data-testid"]);return t(Cn,Object.assign({id:a,label:r,errorMessage:n,"data-error-testid":i,disabled:s.disabled},{children:t(Sg,Object.assign({id:`${a}-base`,"data-testid":o||a,error:!!n},s))}))}};export{jb as Form};
//# sourceMappingURL=index.js.map
