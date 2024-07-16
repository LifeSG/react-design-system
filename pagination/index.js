import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import{Chevron2LeftIcon as n}from"@lifesg/react-icons/chevron-2-left";import{Chevron2RightIcon as a}from"@lifesg/react-icons/chevron-2-right";import{ChevronLeftIcon as i}from"@lifesg/react-icons/chevron-left";import{ChevronLineLeftIcon as o}from"@lifesg/react-icons/chevron-line-left";import{ChevronLineRightIcon as s}from"@lifesg/react-icons/chevron-line-right";import{ChevronRightIcon as l}from"@lifesg/react-icons/chevron-right";import{EllipsisHorizontalIcon as c}from"@lifesg/react-icons/ellipsis-horizontal";import*as u from"react";import d,{useState as h,useRef as f,useEffect as p,useLayoutEffect as m,forwardRef as g,useCallback as y,useContext as v,useMemo as b,useImperativeHandle as w}from"react";import{unstable_batchedUpdates as $}from"react-dom";import x,{keyframes as S,css as _}from"styled-components";import{ExternalIcon as F}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as O}from"@lifesg/react-icons/exclamation-circle-fill";import{MinusSquareFillIcon as D,SquareTickFillIcon as k,SquareFillIcon as B,SquareIcon as j,CrossIcon as C}from"@lifesg/react-icons";import{MagnifierIcon as E}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as M}from"@lifesg/react-icons/chevron-down";import{CrossIcon as A}from"@lifesg/react-icons/cross";var P="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function I(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var T,z={exports:{}};T=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var a=e.expressions.every((function(e){var r=e.feature,n=e.modifier,a=e.value,i=t[r];if(!i)return!1;switch(r){case"orientation":case"scan":return i.toLowerCase()===a.toLowerCase();case"width":case"height":case"device-width":case"device-height":a=u(a),i=u(i);break;case"resolution":a=c(a),i=c(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":a=l(a),i=l(i);break;case"grid":case"color":case"color-index":case"monochrome":a=parseInt(a,10)||1,i=parseInt(i,10)||0}switch(n){case"min":return i>=a;case"max":return i<=a;default:return i===a}}));return a&&!r||!a&&r}))},t.parse=s;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,a=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),i=t[1],o=t[2],s=t[3]||"",l={};return l.inverse=!!i&&"not"===i.toLowerCase(),l.type=o?o.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(a);return{modifier:r[1],feature:r[2],value:t[2]}})),l}))}function l(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
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
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,o,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))r.call(i,c)&&(s[c]=i[c]);if(t){o=t(i);for(var u=0;u<o.length;u++)n.call(i,o[u])&&(s[o[u]]=i[o[u]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,r)=>{var n,a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},o=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,r,s,l){for(var c in e)if(o(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((s||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[c](t,c,s,r,null,a)}catch(e){u=e}if(!u||u instanceof Error||n((s||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in i)){i[u.message]=!0;var h=l?l():"";n("Failed "+r+" type: "+u.message+(null!=h?h:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,r)=>{var n,a=r(/*! react-is */"./node_modules/react-is/index.js"),i=r(/*! object-assign */"./node_modules/object-assign/index.js"),o=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",h={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(c),arrayOf:function(e){return m((function(t,r,n,a,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new p("Invalid "+a+" `"+i+"` of type `"+b(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,n,a,i+"["+l+"]",o);if(c instanceof Error)return c}return null}))},element:m((function(t,r,n,a,i){var o=t[r];return e(o)?null:new p("Invalid "+a+" `"+i+"` of type `"+b(o)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:m((function(e,t,r,n,i){var o=e[t];return a.isValidElementType(o)?null:new p("Invalid "+n+" `"+i+"` of type `"+b(o)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,r,n,a,i){if(!(t[r]instanceof e)){var o=e.name||d;return new p("Invalid "+a+" `"+i+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+n+"`, expected instance of `"+o+"`.")}var s;return null}))},node:m((function(e,t,r,n,a){return v(e[t])?null:new p("Invalid "+n+" `"+a+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,r,n,a,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=b(l);if("object"!==c)return new p("Invalid "+a+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var u in l)if(s(l,u)){var d=e(l,u,n,a,i+"."+u,o);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,r,n,a,i){for(var o=t[r],s=0;s<e.length;s++)if(f(o,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new p("Invalid "+a+" `"+i+"` of value `"+String(o)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+$(r)+" at index "+t+"."),c}return m((function(t,r,n,a,i){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,r,n,a,i,o);if(null==u)return null;u.data&&s(u.data,"expectedType")&&l.push(u.data.expectedType)}return new p("Invalid "+a+" `"+i+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,r,n,a,i){var s=t[r],l=b(s);if("object"!==l)return new p("Invalid "+a+" `"+i+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return y(n,a,i,c,w(u));var d=u(s,c,n,a,i+"."+c,o);if(d)return d}return null}))},exact:function(e){return m((function(t,r,n,a,l){var c=t[r],u=b(c);if("object"!==u)return new p("Invalid "+a+" `"+l+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");var d=i({},t[r],e);for(var h in d){var f=e[h];if(s(e,h)&&"function"!=typeof f)return y(n,a,l,h,w(f));if(!f)return new p("Invalid "+a+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=f(c,h,n,a,l+"."+h,o);if(m)return m}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var r={},a=0;function i(i,s,l,c,u,h,f){if(c=c||d,h=h||l,f!==o){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!r[g]&&a<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[g]=!0,a++)}}return null==s[l]?i?null===s[l]?new p("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,h)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function g(e){return m((function(t,r,n,a,i,o){var s=t[r];return b(s)!==e?new p("Invalid "+a+" `"+i+"` of type `"+w(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,r,n,a){return new p((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+a+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e[u]);if("function"==typeof t)return t}(t);if(!n)return!1;var a,i=n.call(t);if(n!==t.entries){for(;!(a=i.next()).done;)if(!v(a.value))return!1}else for(;!(a=i.next()).done;){var o=a.value;if(o&&!v(o[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function $(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var f=e.type;switch(f){case c:case u:case a:case o:case i:case h:return f;default:var g=f&&f.$$typeof;switch(g){case l:case d:case m:case p:case s:return g;default:return t}}case n:return t}}}var $=c,x=u,S=l,_=s,F=r,O=d,D=a,k=m,B=p,j=n,C=o,E=i,M=h,A=!1;function P(e){return w(e)===u}t.AsyncMode=$,t.ConcurrentMode=x,t.ContextConsumer=S,t.ContextProvider=_,t.Element=F,t.ForwardRef=O,t.Fragment=D,t.Lazy=k,t.Memo=B,t.Portal=j,t.Profiler=C,t.StrictMode=E,t.Suspense=M,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),P(e)||w(e)===c},t.isConcurrentMode=P,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===a},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===p},t.isPortal=function(e){return w(e)===n},t.isProfiler=function(e){return w(e)===o},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===u||e===o||e===i||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
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
	  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)},a=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(r(/*! prop-types */"./node_modules/prop-types/index.js")),s=o.default.oneOfType([o.default.string,o.default.number]),l={all:o.default.bool,grid:o.default.bool,aural:o.default.bool,braille:o.default.bool,handheld:o.default.bool,print:o.default.bool,projection:o.default.bool,screen:o.default.bool,tty:o.default.bool,tv:o.default.bool,embossed:o.default.bool},c={orientation:o.default.oneOf(["portrait","landscape"]),scan:o.default.oneOf(["progressive","interlace"]),aspectRatio:o.default.string,deviceAspectRatio:o.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:o.default.bool,colorIndex:o.default.bool,monochrome:o.default.bool,resolution:s,type:Object.keys(l)},u=a(c,["type"]),d=n({minAspectRatio:o.default.string,maxAspectRatio:o.default.string,minDeviceAspectRatio:o.default.string,maxDeviceAspectRatio:o.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:o.default.number,maxColor:o.default.number,minColorIndex:o.default.number,maxColorIndex:o.default.number,minMonochrome:o.default.number,maxMonochrome:o.default.number,minResolution:s,maxResolution:s},u),h=n(n({},l),d);t.default={all:h,types:l,matchers:c,features:d}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,a.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(/*! react */"react"),i=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),o=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),c=n(r(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,o.default)(r)]=e[r],t}),{})},d=function(){var e=(0,a.useRef)(!1);return(0,a.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,a.useState)(t),n=r[0],i=r[1];return(0,a.useEffect)((function(){var e=t();n!==e&&i(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,a.useContext)(c.default),r=function(){return u(e)||u(t)},n=(0,a.useState)(r),i=n[0],o=n[1];return(0,a.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(i,e)||o(e)}),[e,t]),i}(t),o=h(e);if(!o)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,i.default)(e,t||{},!!t)},n=(0,a.useState)(r),o=n[0],s=n[1],l=d();return(0,a.useEffect)((function(){if(l){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),o}(o,n),f=function(e){var t=(0,a.useState)(e.matches),r=t[0],n=t[1];return(0,a.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),p=d();return(0,a.useEffect)((function(){p&&r&&r(f)}),[f]),(0,a.useEffect)((function(){return function(){l&&l.dispose()}}),[]),f}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var L=z.exports=T(d);function H(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}"function"==typeof SuppressedError&&SuppressedError;var N=function(){this.__data__=[],this.size=0};var R=function(e,t){return e===t||e!=e&&t!=t},W=R;var V=function(e,t){for(var r=e.length;r--;)if(W(e[r][0],t))return r;return-1},Y=V,q=Array.prototype.splice;var Q=V;var U=V;var Z=V;var G=N,X=function(e){var t=this.__data__,r=Y(t,e);return!(r<0)&&(r==t.length-1?t.pop():q.call(t,r,1),--this.size,!0)},J=function(e){var t=this.__data__,r=Q(t,e);return r<0?void 0:t[r][1]},K=function(e){return U(this.__data__,e)>-1},ee=function(e,t){var r=this.__data__,n=Z(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function te(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}te.prototype.clear=G,te.prototype.delete=X,te.prototype.get=J,te.prototype.has=K,te.prototype.set=ee;var re=te,ne=re;var ae=function(){this.__data__=new ne,this.size=0};var ie=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var oe=function(e){return this.__data__.get(e)};var se=function(e){return this.__data__.has(e)},le="object"==typeof P&&P&&P.Object===Object&&P,ce=le,ue="object"==typeof self&&self&&self.Object===Object&&self,de=ce||ue||Function("return this")(),he=de.Symbol,fe=he,pe=Object.prototype,me=pe.hasOwnProperty,ge=pe.toString,ye=fe?fe.toStringTag:void 0;var ve=function(e){var t=me.call(e,ye),r=e[ye];try{e[ye]=void 0;var n=!0}catch(e){}var a=ge.call(e);return n&&(t?e[ye]=r:delete e[ye]),a},be=Object.prototype.toString;var we=ve,$e=function(e){return be.call(e)},xe=he?he.toStringTag:void 0;var Se=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":xe&&xe in Object(e)?we(e):$e(e)};var _e=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Fe=Se,Oe=_e;var De,ke=function(e){if(!Oe(e))return!1;var t=Fe(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Be=de["__core-js_shared__"],je=(De=/[^.]+$/.exec(Be&&Be.keys&&Be.keys.IE_PROTO||""))?"Symbol(src)_1."+De:"";var Ce=function(e){return!!je&&je in e},Ee=Function.prototype.toString;var Me=function(e){if(null!=e){try{return Ee.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ae=ke,Pe=Ce,Ie=_e,Te=Me,ze=/^\[object .+?Constructor\]$/,Le=Function.prototype,He=Object.prototype,Ne=Le.toString,Re=He.hasOwnProperty,We=RegExp("^"+Ne.call(Re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ve=function(e){return!(!Ie(e)||Pe(e))&&(Ae(e)?We:ze).test(Te(e))},Ye=function(e,t){return null==e?void 0:e[t]};var qe=function(e,t){var r=Ye(e,t);return Ve(r)?r:void 0},Qe=qe(de,"Map"),Ue=qe(Object,"create"),Ze=Ue;var Ge=function(){this.__data__=Ze?Ze(null):{},this.size=0};var Xe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Je=Ue,Ke=Object.prototype.hasOwnProperty;var et=function(e){var t=this.__data__;if(Je){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Ke.call(t,e)?t[e]:void 0},tt=Ue,rt=Object.prototype.hasOwnProperty;var nt=Ue;var at=Ge,it=Xe,ot=et,st=function(e){var t=this.__data__;return tt?void 0!==t[e]:rt.call(t,e)},lt=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=nt&&void 0===t?"__lodash_hash_undefined__":t,this};function ct(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ct.prototype.clear=at,ct.prototype.delete=it,ct.prototype.get=ot,ct.prototype.has=st,ct.prototype.set=lt;var ut=ct,dt=re,ht=Qe;var ft=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var pt=function(e,t){var r=e.__data__;return ft(t)?r["string"==typeof t?"string":"hash"]:r.map},mt=pt;var gt=pt;var yt=pt;var vt=pt;var bt=function(){this.size=0,this.__data__={hash:new ut,map:new(ht||dt),string:new ut}},wt=function(e){var t=mt(this,e).delete(e);return this.size-=t?1:0,t},$t=function(e){return gt(this,e).get(e)},xt=function(e){return yt(this,e).has(e)},St=function(e,t){var r=vt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function _t(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}_t.prototype.clear=bt,_t.prototype.delete=wt,_t.prototype.get=$t,_t.prototype.has=xt,_t.prototype.set=St;var Ft=_t,Ot=re,Dt=Qe,kt=Ft;var Bt=re,jt=ae,Ct=ie,Et=oe,Mt=se,At=function(e,t){var r=this.__data__;if(r instanceof Ot){var n=r.__data__;if(!Dt||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new kt(n)}return r.set(e,t),this.size=r.size,this};function Pt(e){var t=this.__data__=new Bt(e);this.size=t.size}Pt.prototype.clear=jt,Pt.prototype.delete=Ct,Pt.prototype.get=Et,Pt.prototype.has=Mt,Pt.prototype.set=At;var It=Pt;var Tt=Ft,zt=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Lt=function(e){return this.__data__.has(e)};function Ht(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Tt;++t<r;)this.add(e[t])}Ht.prototype.add=Ht.prototype.push=zt,Ht.prototype.has=Lt;var Nt=Ht,Rt=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Wt=function(e,t){return e.has(t)};var Vt=function(e,t,r,n,a,i){var o=1&r,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=i.get(e),u=i.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,f=2&r?new Nt:void 0;for(i.set(e,t),i.set(t,e);++d<s;){var p=e[d],m=t[d];if(n)var g=o?n(m,p,d,t,e,i):n(p,m,d,e,t,i);if(void 0!==g){if(g)continue;h=!1;break}if(f){if(!Rt(t,(function(e,t){if(!Wt(f,t)&&(p===e||a(p,e,r,n,i)))return f.push(t)}))){h=!1;break}}else if(p!==m&&!a(p,m,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var Yt=de.Uint8Array,qt=R,Qt=Vt,Ut=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},Zt=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Gt=he?he.prototype:void 0,Xt=Gt?Gt.valueOf:void 0;var Jt=function(e,t,r,n,a,i,o){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new Yt(e),new Yt(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return qt(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Ut;case"[object Set]":var l=1&n;if(s||(s=Zt),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;n|=2,o.set(e,t);var u=Qt(s(e),s(t),n,a,i,o);return o.delete(e),u;case"[object Symbol]":if(Xt)return Xt.call(e)==Xt.call(t)}return!1};var Kt=function(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e},er=Array.isArray,tr=Kt,rr=er;var nr=function(e,t,r){var n=t(e);return rr(e)?n:tr(n,r(e))};var ar=function(e,t){for(var r=-1,n=null==e?0:e.length,a=0,i=[];++r<n;){var o=e[r];t(o,r,e)&&(i[a++]=o)}return i},ir=function(){return[]},or=Object.prototype.propertyIsEnumerable,sr=Object.getOwnPropertySymbols,lr=sr?function(e){return null==e?[]:(e=Object(e),ar(sr(e),(function(t){return or.call(e,t)})))}:ir;var cr=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n};var ur=function(e){return null!=e&&"object"==typeof e},dr=Se,hr=ur;var fr=function(e){return hr(e)&&"[object Arguments]"==dr(e)},pr=ur,mr=Object.prototype,gr=mr.hasOwnProperty,yr=mr.propertyIsEnumerable,vr=fr(function(){return arguments}())?fr:function(e){return pr(e)&&gr.call(e,"callee")&&!yr.call(e,"callee")},br={exports:{}};var wr=function(){return!1};!function(e,t){var r=de,n=wr,a=t&&!t.nodeType&&t,i=a&&e&&!e.nodeType&&e,o=i&&i.exports===a?r.Buffer:void 0,s=(o?o.isBuffer:void 0)||n;e.exports=s}(br,br.exports);var $r=br.exports,xr=/^(?:0|[1-9]\d*)$/;var Sr=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&xr.test(e))&&e>-1&&e%1==0&&e<t};var _r=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Fr=Se,Or=_r,Dr=ur,kr={};kr["[object Float32Array]"]=kr["[object Float64Array]"]=kr["[object Int8Array]"]=kr["[object Int16Array]"]=kr["[object Int32Array]"]=kr["[object Uint8Array]"]=kr["[object Uint8ClampedArray]"]=kr["[object Uint16Array]"]=kr["[object Uint32Array]"]=!0,kr["[object Arguments]"]=kr["[object Array]"]=kr["[object ArrayBuffer]"]=kr["[object Boolean]"]=kr["[object DataView]"]=kr["[object Date]"]=kr["[object Error]"]=kr["[object Function]"]=kr["[object Map]"]=kr["[object Number]"]=kr["[object Object]"]=kr["[object RegExp]"]=kr["[object Set]"]=kr["[object String]"]=kr["[object WeakMap]"]=!1;var Br=function(e){return Dr(e)&&Or(e.length)&&!!kr[Fr(e)]};var jr=function(e){return function(t){return e(t)}},Cr={exports:{}};!function(e,t){var r=le,n=t&&!t.nodeType&&t,a=n&&e&&!e.nodeType&&e,i=a&&a.exports===n&&r.process,o=function(){try{var e=a&&a.require&&a.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=o}(Cr,Cr.exports);var Er=Cr.exports,Mr=Br,Ar=jr,Pr=Er&&Er.isTypedArray,Ir=Pr?Ar(Pr):Mr,Tr=cr,zr=vr,Lr=er,Hr=$r,Nr=Sr,Rr=Ir,Wr=Object.prototype.hasOwnProperty;var Vr=function(e,t){var r=Lr(e),n=!r&&zr(e),a=!r&&!n&&Hr(e),i=!r&&!n&&!a&&Rr(e),o=r||n||a||i,s=o?Tr(e.length,String):[],l=s.length;for(var c in e)!t&&!Wr.call(e,c)||o&&("length"==c||a&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Nr(c,l))||s.push(c);return s},Yr=Object.prototype;var qr=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Yr)};var Qr=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Ur=qr,Zr=Qr,Gr=Object.prototype.hasOwnProperty;var Xr=ke,Jr=_r;var Kr=function(e){return null!=e&&Jr(e.length)&&!Xr(e)},en=Vr,tn=function(e){if(!Ur(e))return Zr(e);var t=[];for(var r in Object(e))Gr.call(e,r)&&"constructor"!=r&&t.push(r);return t},rn=Kr;var nn=function(e){return rn(e)?en(e):tn(e)},an=nr,on=lr,sn=nn;var ln=function(e){return an(e,sn,on)},cn=Object.prototype.hasOwnProperty;var un=function(e,t,r,n,a,i){var o=1&r,s=ln(e),l=s.length;if(l!=ln(t).length&&!o)return!1;for(var c=l;c--;){var u=s[c];if(!(o?u in t:cn.call(t,u)))return!1}var d=i.get(e),h=i.get(t);if(d&&h)return d==t&&h==e;var f=!0;i.set(e,t),i.set(t,e);for(var p=o;++c<l;){var m=e[u=s[c]],g=t[u];if(n)var y=o?n(g,m,u,t,e,i):n(m,g,u,e,t,i);if(!(void 0===y?m===g||a(m,g,r,n,i):y)){f=!1;break}p||(p="constructor"==u)}if(f&&!p){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(f=!1)}return i.delete(e),i.delete(t),f},dn=qe(de,"DataView"),hn=Qe,fn=qe(de,"Promise"),pn=qe(de,"Set"),mn=qe(de,"WeakMap"),gn=Se,yn=Me,vn="[object Map]",bn="[object Promise]",wn="[object Set]",$n="[object WeakMap]",xn="[object DataView]",Sn=yn(dn),_n=yn(hn),Fn=yn(fn),On=yn(pn),Dn=yn(mn),kn=gn;(dn&&kn(new dn(new ArrayBuffer(1)))!=xn||hn&&kn(new hn)!=vn||fn&&kn(fn.resolve())!=bn||pn&&kn(new pn)!=wn||mn&&kn(new mn)!=$n)&&(kn=function(e){var t=gn(e),r="[object Object]"==t?e.constructor:void 0,n=r?yn(r):"";if(n)switch(n){case Sn:return xn;case _n:return vn;case Fn:return bn;case On:return wn;case Dn:return $n}return t});var Bn=It,jn=Vt,Cn=Jt,En=un,Mn=kn,An=er,Pn=$r,In=Ir,Tn="[object Arguments]",zn="[object Array]",Ln="[object Object]",Hn=Object.prototype.hasOwnProperty;var Nn=function(e,t,r,n,a,i){var o=An(e),s=An(t),l=o?zn:Mn(e),c=s?zn:Mn(t),u=(l=l==Tn?Ln:l)==Ln,d=(c=c==Tn?Ln:c)==Ln,h=l==c;if(h&&Pn(e)){if(!Pn(t))return!1;o=!0,u=!1}if(h&&!u)return i||(i=new Bn),o||In(e)?jn(e,t,r,n,a,i):Cn(e,t,l,r,n,a,i);if(!(1&r)){var f=u&&Hn.call(e,"__wrapped__"),p=d&&Hn.call(t,"__wrapped__");if(f||p){var m=f?e.value():e,g=p?t.value():t;return i||(i=new Bn),a(m,g,r,n,i)}}return!!h&&(i||(i=new Bn),En(e,t,r,n,a,i))},Rn=ur;var Wn=function e(t,r,n,a,i){return t===r||(null==t||null==r||!Rn(t)&&!Rn(r)?t!=t&&r!=r:Nn(t,r,n,a,e,i))},Vn=It,Yn=Wn;var qn=_e;var Qn=function(e){return e==e&&!qn(e)},Un=Qn,Zn=nn;var Gn=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Xn=function(e,t,r,n){var a=r.length,i=a,o=!n;if(null==e)return!i;for(e=Object(e);a--;){var s=r[a];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++a<i;){var l=(s=r[a])[0],c=e[l],u=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new Vn;if(n)var h=n(c,u,l,e,t,d);if(!(void 0===h?Yn(u,c,3,n,d):h))return!1}}return!0},Jn=function(e){for(var t=Zn(e),r=t.length;r--;){var n=t[r],a=e[n];t[r]=[n,a,Un(a)]}return t},Kn=Gn;var ea=function(e){var t=Jn(e);return 1==t.length&&t[0][2]?Kn(t[0][0],t[0][1]):function(r){return r===e||Xn(r,e,t)}},ta=Se,ra=ur;var na=function(e){return"symbol"==typeof e||ra(e)&&"[object Symbol]"==ta(e)},aa=er,ia=na,oa=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,sa=/^\w*$/;var la=function(e,t){if(aa(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ia(e))||(sa.test(e)||!oa.test(e)||null!=t&&e in Object(t))},ca=Ft;function ua(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return r.cache=i.set(a,o)||i,o};return r.cache=new(ua.Cache||ca),r}ua.Cache=ca;var da=ua;var ha=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,fa=/\\(\\)?/g,pa=function(e){var t=da(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ha,(function(e,r,n,a){t.push(n?a.replace(fa,"$1"):r||e)})),t}));var ma=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},ga=er,ya=na,va=he?he.prototype:void 0,ba=va?va.toString:void 0;var wa=function e(t){if("string"==typeof t)return t;if(ga(t))return ma(t,e)+"";if(ya(t))return ba?ba.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},$a=wa;var xa=er,Sa=la,_a=pa,Fa=function(e){return null==e?"":$a(e)};var Oa=function(e,t){return xa(e)?e:Sa(e,t)?[e]:_a(Fa(e))},Da=na;var ka=function(e){if("string"==typeof e||Da(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Ba=Oa,ja=ka;var Ca=function(e,t){for(var r=0,n=(t=Ba(t,e)).length;null!=e&&r<n;)e=e[ja(t[r++])];return r&&r==n?e:void 0},Ea=Ca;var Ma=function(e,t,r){var n=null==e?void 0:Ea(e,t);return void 0===n?r:n},Aa=I(Ma);var Pa=Oa,Ia=vr,Ta=er,za=Sr,La=_r,Ha=ka;var Na=function(e,t){return null!=e&&t in Object(e)},Ra=function(e,t,r){for(var n=-1,a=(t=Pa(t,e)).length,i=!1;++n<a;){var o=Ha(t[n]);if(!(i=null!=e&&r(e,o)))break;e=e[o]}return i||++n!=a?i:!!(a=null==e?0:e.length)&&La(a)&&za(o,a)&&(Ta(e)||Ia(e))};var Wa=Wn,Va=Ma,Ya=function(e,t){return null!=e&&Ra(e,t,Na)},qa=la,Qa=Qn,Ua=Gn,Za=ka;var Ga=Ca;var Xa=function(e){return function(t){return null==t?void 0:t[e]}},Ja=function(e){return function(t){return Ga(t,e)}},Ka=la,ei=ka;var ti=ea,ri=function(e,t){return qa(e)&&Qa(t)?Ua(Za(e),t):function(r){var n=Va(r,e);return void 0===n&&n===t?Ya(r,e):Wa(t,n,3)}},ni=function(e){return e},ai=er,ii=function(e){return Ka(e)?Xa(ei(e)):Ja(e)};var oi=function(e){return"function"==typeof e?e:null==e?ni:"object"==typeof e?ai(e)?ri(e[0],e[1]):ti(e):ii(e)},si=oi,li=Kr,ci=nn;var ui=function(e){return function(t,r,n){var a=Object(t);if(!li(t)){var i=si(r);t=ci(t),r=function(e){return i(a[e],e,a)}}var o=e(t,r,n);return o>-1?a[i?t[o]:o]:void 0}};var di=/\s/;var hi=function(e){for(var t=e.length;t--&&di.test(e.charAt(t)););return t},fi=/^\s+/;var pi=function(e){return e?e.slice(0,hi(e)+1).replace(fi,""):e},mi=_e,gi=na,yi=/^[-+]0x[0-9a-f]+$/i,vi=/^0b[01]+$/i,bi=/^0o[0-7]+$/i,wi=parseInt;var $i=function(e){if("number"==typeof e)return e;if(gi(e))return NaN;if(mi(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=mi(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=pi(e);var r=vi.test(e);return r||bi.test(e)?wi(e.slice(2),r?2:8):yi.test(e)?NaN:+e},xi=1/0;var Si=function(e){return e?(e=$i(e))===xi||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var _i=function(e,t,r,n){for(var a=e.length,i=r+(n?1:-1);n?i--:++i<a;)if(t(e[i],i,e))return i;return-1},Fi=oi,Oi=function(e){var t=Si(e),r=t%1;return t==t?r?t-r:t:0},Di=Math.max;var ki=I(ui((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var a=null==r?0:Oi(r);return a<0&&(a=Di(n+a,0)),_i(e,Fi(t),a)}))),Bi=Wn;var ji=I((function(e,t){return Bi(e,t)})),Ci=Object.defineProperty,Ei={};((e,t)=>{for(var r in t)Ci(e,r,{get:t[r],enumerable:!0})})(Ei,{assign:()=>ho,colors:()=>lo,createStringInterpolator:()=>ao,skipAnimation:()=>co,to:()=>io,willAdvance:()=>uo});var Mi=Zi(),Ai=e=>Yi(e,Mi),Pi=Zi();Ai.write=e=>Yi(e,Pi);var Ii=Zi();Ai.onStart=e=>Yi(e,Ii);var Ti=Zi();Ai.onFrame=e=>Yi(e,Ti);var zi=Zi();Ai.onFinish=e=>Yi(e,zi);var Li=[];Ai.setTimeout=(e,t)=>{const r=Ai.now()+t,n=()=>{const e=Li.findIndex((e=>e.cancel==n));~e&&Li.splice(e,1),Wi-=~e?1:0},a={time:r,handler:e,cancel:n};return Li.splice(Hi(r),0,a),Wi+=1,qi(),a};var Hi=e=>~(~Li.findIndex((t=>t.time>e))||~Li.length);Ai.cancel=e=>{Ii.delete(e),Ti.delete(e),zi.delete(e),Mi.delete(e),Pi.delete(e)},Ai.sync=e=>{Vi=!0,Ai.batchedUpdates(e),Vi=!1},Ai.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Ai.onStart(r)}return n.handler=e,n.cancel=()=>{Ii.delete(r),t=null},n};var Ni="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Ai.use=e=>Ni=e,Ai.now="undefined"!=typeof performance?()=>performance.now():Date.now,Ai.batchedUpdates=e=>e(),Ai.catch=console.error,Ai.frameLoop="always",Ai.advance=()=>{"demand"!==Ai.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Ui()};var Ri=-1,Wi=0,Vi=!1;function Yi(e,t){Vi?(t.delete(e),e(0)):(t.add(e),qi())}function qi(){Ri<0&&(Ri=0,"demand"!==Ai.frameLoop&&Ni(Qi))}function Qi(){~Ri&&(Ni(Qi),Ai.batchedUpdates(Ui))}function Ui(){const e=Ri;Ri=Ai.now();const t=Hi(Ri);t&&(Gi(Li.splice(0,t),(e=>e.handler())),Wi-=t),Wi?(Ii.flush(),Mi.flush(e?Math.min(64,Ri-e):16.667),Ti.flush(),Pi.flush(),zi.flush()):Ri=-1}function Zi(){let e=new Set,t=e;return{add(r){Wi+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Wi-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Wi-=t.size,Gi(t,(t=>t(r)&&e.add(t))),Wi+=e.size,t=e)}}}function Gi(e,t){e.forEach((e=>{try{t(e)}catch(e){Ai.catch(e)}}))}function Xi(){}var Ji={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Ki(e,t){if(Ji.arr(e)){if(!Ji.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var eo=(e,t)=>e.forEach(t);function to(e,t,r){if(Ji.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var ro=e=>Ji.und(e)?[]:Ji.arr(e)?e:[e];function no(e,t){if(e.size){const r=Array.from(e);e.clear(),eo(r,t)}}var ao,io,oo=(e,...t)=>no(e,(e=>e(...t))),so=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),lo=null,co=!1,uo=Xi,ho=e=>{e.to&&(io=e.to),e.now&&(Ai.now=e.now),void 0!==e.colors&&(lo=e.colors),null!=e.skipAnimation&&(co=e.skipAnimation),e.createStringInterpolator&&(ao=e.createStringInterpolator),e.requestAnimationFrame&&Ai.use(e.requestAnimationFrame),e.batchedUpdates&&(Ai.batchedUpdates=e.batchedUpdates),e.willAdvance&&(uo=e.willAdvance),e.frameLoop&&(Ai.frameLoop=e.frameLoop)},fo=new Set,po=[],mo=[],go=0,yo={get idle(){return!fo.size&&!po.length},start(e){go>e.priority?(fo.add(e),Ai.onStart(vo)):(bo(e),Ai($o))},advance:$o,sort(e){if(go)Ai.onFrame((()=>yo.sort(e)));else{const t=po.indexOf(e);~t&&(po.splice(t,1),wo(e))}},clear(){po=[],fo.clear()}};function vo(){fo.forEach(bo),fo.clear(),Ai($o)}function bo(e){po.includes(e)||wo(e)}function wo(e){po.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(po,(t=>t.priority>e.priority)),0,e)}function $o(e){const t=mo;for(let r=0;r<po.length;r++){const n=po[r];go=n.priority,n.idle||(uo(n),n.advance(e),n.idle||t.push(n))}return go=0,(mo=po).length=0,(po=t).length>0}var xo="[-+]?\\d*\\.?\\d+",So=xo+"%";function _o(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Fo=new RegExp("rgb"+_o(xo,xo,xo)),Oo=new RegExp("rgba"+_o(xo,xo,xo,xo)),Do=new RegExp("hsl"+_o(xo,So,So)),ko=new RegExp("hsla"+_o(xo,So,So,xo)),Bo=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,jo=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Co=/^#([0-9a-fA-F]{6})$/,Eo=/^#([0-9a-fA-F]{8})$/;function Mo(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Ao(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,a=2*r-n,i=Mo(a,n,e+1/3),o=Mo(a,n,e),s=Mo(a,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function Po(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Io(e){return(parseFloat(e)%360+360)%360/360}function To(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function zo(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Lo(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Co.exec(e))?parseInt(t[1]+"ff",16)>>>0:lo&&void 0!==lo[e]?lo[e]:(t=Fo.exec(e))?(Po(t[1])<<24|Po(t[2])<<16|Po(t[3])<<8|255)>>>0:(t=Oo.exec(e))?(Po(t[1])<<24|Po(t[2])<<16|Po(t[3])<<8|To(t[4]))>>>0:(t=Bo.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Eo.exec(e))?parseInt(t[1],16)>>>0:(t=jo.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Do.exec(e))?(255|Ao(Io(t[1]),zo(t[2]),zo(t[3])))>>>0:(t=ko.exec(e))?(Ao(Io(t[1]),zo(t[2]),zo(t[3]))|To(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Ho=(e,t,r)=>{if(Ji.fun(e))return e;if(Ji.arr(e))return Ho({range:e,output:t,extrapolate:r});if(Ji.str(e.output[0]))return ao(e);const n=e,a=n.output,i=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,a,i,o,s,l){let c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===a)return n;if(t===r)return e<=t?n:a;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=i(c),n===-1/0?c=-c:a===1/0?c+=n:c=c*(a-n)+n;return c}(e,i[t],i[t+1],a[t],a[t+1],l,o,s,n.map)}};var No=1.70158,Ro=1.525*No,Wo=No+1,Vo=2*Math.PI/3,Yo=2*Math.PI/4.5,qo=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Qo={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Wo*e*e*e-No*e*e,easeOutBack:e=>1+Wo*Math.pow(e-1,3)+No*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Ro)/2:(Math.pow(2*e-2,2)*((Ro+1)*(2*e-2)+Ro)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Vo),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Vo)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Yo)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Yo)/2+1,easeInBounce:e=>1-qo(1-e),easeOutBounce:qo,easeInOutBounce:e=>e<.5?(1-qo(1-2*e))/2:(1+qo(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,a="end"===t?Math.floor(n):Math.ceil(n);return i=0,o=1,s=a/e,Math.min(Math.max(s,i),o);var i,o,s}},Uo=Symbol.for("FluidValue.get"),Zo=Symbol.for("FluidValue.observers"),Go=e=>Boolean(e&&e[Uo]),Xo=e=>e&&e[Uo]?e[Uo]():e,Jo=e=>e[Zo]||null;function Ko(e,t){const r=e[Zo];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var es=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");ts(this,e)}},ts=(e,t)=>is(e,Uo,t);function rs(e,t){if(e[Uo]){let r=e[Zo];r||is(e,Zo,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function ns(e,t){const r=e[Zo];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Zo]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var as,is=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),os=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,ss=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ls=new RegExp(`(${os.source})(%|[a-z]+)`,"i"),cs=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,us=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ds=e=>{const[t,r]=hs(e);if(!t||so())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&us.test(r)?ds(r):r||e},hs=e=>{const t=us.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},fs=(e,t,r,n,a)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${a})`,ps=e=>{as||(as=lo?new RegExp(`(${Object.keys(lo).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Xo(e).replace(us,ds).replace(ss,Lo).replace(as,Lo))),r=t.map((e=>e.match(os).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Ho({...e,output:t})));return e=>{const r=!ls.test(t[0])&&t.find((e=>ls.test(e)))?.replace(os,"");let a=0;return t[0].replace(os,(()=>`${n[a++](e)}${r||""}`)).replace(cs,fs)}},ms="react-spring: ",gs=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${ms}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},ys=gs(console.warn);var vs=gs(console.warn);function bs(e){return Ji.str(e)&&("#"==e[0]||/\d/.test(e)||!so()&&us.test(e)||e in(lo||{}))}var ws=so()?p:m,$s=()=>{const e=f(!1);return ws((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function xs(){const e=h()[1],t=$s();return()=>{t.current&&e(Math.random())}}var Ss=e=>p(e,_s),_s=[];function Fs(e){const t=f();return p((()=>{t.current=e})),t.current}var Os=Symbol.for("Animated:node"),Ds=e=>e&&e[Os],ks=(e,t)=>{return r=e,n=Os,a=t,Object.defineProperty(r,n,{value:a,writable:!0,configurable:!0});var r,n,a},Bs=e=>e&&e[Os]&&e[Os].getPayload(),js=class{constructor(){ks(this,this)}getPayload(){return this.payload||[]}},Cs=class extends js{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Ji.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Cs(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Ji.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Ji.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Es=class extends Cs{constructor(e){super(0),this._string=null,this._toString=Ho({output:[e,e]})}static create(e){return new Es(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Ji.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Ho({output:[this.getValue(),e]})),this._value=0,super.reset()}},Ms={dependencies:null},As=class extends js{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return to(this.source,((r,n)=>{var a;(a=r)&&a[Os]===a?t[n]=r.getValue(e):Go(r)?t[n]=Xo(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&eo(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return to(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Ms.dependencies&&Go(e)&&Ms.dependencies.add(e);const t=Bs(e);t&&eo(t,(e=>this.add(e)))}},Ps=class extends As{constructor(e){super(e)}static create(e){return new Ps(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Is)),!0)}};function Is(e){return(bs(e)?Es:Cs).create(e)}function Ts(e){const t=Ds(e);return t?t.constructor:Ji.arr(e)?Ps:bs(e)?Es:Cs}var zs=(e,t)=>{const r=!Ji.fun(e)||e.prototype&&e.prototype.isReactComponent;return g(((n,a)=>{const i=f(null),o=r&&y((e=>{i.current=function(e,t){e&&(Ji.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[s,l]=function(e,t){const r=new Set;Ms.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new As(e),Ms.dependencies=null,[e,r]}(n,t),c=xs(),d=()=>{const e=i.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,s.getValue(!0)))&&c()},h=new Ls(d,l),m=f();ws((()=>(m.current=h,eo(l,(e=>rs(e,h))),()=>{m.current&&(eo(m.current.deps,(e=>ns(e,m.current))),Ai.cancel(m.current.update))}))),p(d,[]),Ss((()=>()=>{const e=m.current;eo(e.deps,(t=>ns(t,e)))}));const g=t.getComponentProps(s.getValue());return u.createElement(e,{...g,ref:o})}))},Ls=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Ai.write(this.update)}};var Hs=Symbol.for("AnimatedComponent"),Ns=e=>Ji.str(e)?e:e&&Ji.str(e.displayName)?e.displayName:Ji.fun(e)&&e.name||null;function Rs(e,...t){return Ji.fun(e)?e(...t):e}var Ws=(e,t)=>!0===e||!!(t&&e&&(Ji.fun(e)?e(t):ro(e).includes(t))),Vs=(e,t)=>Ji.obj(e)?t&&e[t]:e,Ys=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,qs=e=>e,Qs=(e,t=qs)=>{let r=Us;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const a of r){const r=t(e[a],a);Ji.und(r)||(n[a]=r)}return n},Us=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Zs={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Gs(e){const t=function(e){const t={};let r=0;if(to(e,((e,n)=>{Zs[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return to(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function Xs(e){return e=Xo(e),Ji.arr(e)?e.map(Xs):bs(e)?Ei.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Js(e){return Ji.fun(e)||Ji.arr(e)&&Ji.obj(e[0])}var Ks={tension:170,friction:26,mass:1,damping:1,easing:Qo.linear,clamp:!1},el=class{constructor(){this.velocity=0,Object.assign(this,Ks)}};function tl(e,t){if(Ji.und(t.decay)){const r=!Ji.und(t.tension)||!Ji.und(t.friction);!r&&Ji.und(t.frequency)&&Ji.und(t.damping)&&Ji.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var rl=[],nl=class{constructor(){this.changed=!1,this.values=rl,this.toValues=null,this.fromValues=rl,this.config=new el,this.immediate=!1}};function al(e,{key:t,props:r,defaultProps:n,state:a,actions:i}){return new Promise(((o,s)=>{let l,c,u=Ws(r.cancel??n?.cancel,t);if(u)f();else{Ji.und(r.pause)||(a.paused=Ws(r.pause,t));let e=n?.pause;!0!==e&&(e=a.paused||Ws(e,t)),l=Rs(r.delay||0,t),e?(a.resumeQueue.add(h),i.pause()):(i.resume(),h())}function d(){a.resumeQueue.add(h),a.timeouts.delete(c),c.cancel(),l=c.time-Ai.now()}function h(){l>0&&!Ei.skipAnimation?(a.delayed=!0,c=Ai.setTimeout(f,l),a.pauseQueue.add(d),a.timeouts.add(c)):f()}function f(){a.delayed&&(a.delayed=!1),a.pauseQueue.delete(d),a.timeouts.delete(c),e<=(a.cancelId||0)&&(u=!0);try{i.start({...r,callId:e,cancel:u},o)}catch(e){s(e)}}}))}var il=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?ll(e.get()):t.every((e=>e.noop))?ol(e.get()):sl(e.get(),t.every((e=>e.finished))),ol=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),sl=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),ll=e=>({value:e,cancelled:!0,finished:!1});function cl(e,t,r,n){const{callId:a,parentId:i,onRest:o}=t,{asyncTo:s,promise:l}=r;return i||e!==s||t.reset?r.promise=(async()=>{r.asyncId=a,r.asyncTo=e;const c=Qs(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=a<=(r.cancelId||0)&&ll(n)||a!==r.asyncId&&sl(n,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const i=new dl,o=new hl;return(async()=>{if(Ei.skipAnimation)throw ul(r),o.result=sl(n,!1),d(o),o;f(i);const s=Ji.obj(e)?{...e}:{...t,to:e};s.parentId=a,to(c,((e,t)=>{Ji.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return f(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let m;if(Ei.skipAnimation)return ul(r),sl(n,!1);try{let t;t=Ji.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(u),h]),m=sl(n.get(),!0,!1)}catch(e){if(e instanceof dl)m=e.result;else{if(!(e instanceof hl))throw e;m=e.result}}finally{a==r.asyncId&&(r.asyncId=i,r.asyncTo=i?s:void 0,r.promise=i?l:void 0)}return Ji.fun(o)&&Ai.batchedUpdates((()=>{o(m,n,n.item)})),m})():l}function ul(e,t){no(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var dl=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},hl=class extends Error{constructor(){super("SkipAnimationSignal")}},fl=e=>e instanceof ml,pl=1,ml=class extends es{constructor(){super(...arguments),this.id=pl++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Ds(this);return e&&e.getValue()}to(...e){return Ei.to(this,e)}interpolate(...e){return ys(`${ms}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ei.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ko(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||yo.sort(this),Ko(this,{type:"priority",parent:this,priority:e})}},gl=Symbol.for("SpringPhase"),yl=e=>(1&e[gl])>0,vl=e=>(2&e[gl])>0,bl=e=>(4&e[gl])>0,wl=(e,t)=>t?e[gl]|=3:e[gl]&=-3,$l=(e,t)=>t?e[gl]|=4:e[gl]&=-5,xl=class extends ml{constructor(e,t){if(super(),this.animation=new nl,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Ji.und(e)||!Ji.und(t)){const r=Ji.obj(e)?{...e}:{...t,from:e};Ji.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(vl(this)||this._state.asyncTo)||bl(this)}get goal(){return Xo(this.animation.to)}get velocity(){const e=Ds(this);return e instanceof Cs?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return yl(this)}get isAnimating(){return vl(this)}get isPaused(){return bl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:a}=n;const{config:i}=n,o=Bs(n.to);!o&&Go(n.to)&&(a=ro(Xo(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==Es?1:o?o[l].lastPosition:a[l];let u=n.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],a=null!=s.v0?s.v0:s.v0=Ji.arr(i.velocity)?i.velocity[l]:i.velocity;let o;const h=i.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Ji.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);d=r+a/(1-e)*(1-n),u=Math.abs(s.lastPosition-d)<=h,o=a*n}else{o=null==s.lastVelocity?a:s.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!Ji.und(n),f=r==c?s.v0>0:r<c;let p,m=!1;const g=1,y=Math.ceil(e/g);for(let e=0;e<y&&(p=Math.abs(o)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(m=d==c||d>c==f,m&&(o=-o*n,d=c));o+=(1e-6*-i.tension*(d-c)+.001*-i.friction*o)/i.mass*g,d+=o*g}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+i.easing(n)*(c-r),o=(d-s.lastPosition)/e,u=1==n}s.lastVelocity=o,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}o&&!o[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(r=!0)}));const s=Ds(this),l=s.getValue();if(t){const e=Xo(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Ai.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(vl(this)){const{to:e,config:t}=this.animation;Ai.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Ji.und(e)?(r=this.queue||[],this.queue=[]):r=[Ji.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>il(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),ul(this._state,e&&this._lastCallId),Ai.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Ji.obj(r)?r[t]:r,(null==r||Js(r))&&(r=void 0),n=Ji.obj(n)?n[t]:n,null==n&&(n=void 0);const a={to:r,from:n};return yl(this)||(e.reverse&&([r,n]=[n,r]),n=Xo(n),Ji.und(n)?Ds(this)||this._set(r):this._set(n)),a}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Qs(e,((e,t)=>/^on/.test(t)?Vs(e,r):e))),Bl(this,e,"onProps"),jl(this,"onProps",e,this);const a=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return al(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{bl(this)||($l(this,!0),oo(i.pauseQueue),jl(this,"onPause",sl(this,Sl(this,this.animation.to)),this))},resume:()=>{bl(this)&&($l(this,!1),vl(this)&&this._resume(),oo(i.resumeQueue),jl(this,"onResume",sl(this,Sl(this,this.animation.to)),this))},start:this._merge.bind(this,a)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=_l(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(ll(this));const n=!Ji.und(e.to),a=!Ji.und(e.from);if(n||a){if(!(t.callId>this._lastToId))return r(ll(this));this._lastToId=t.callId}const{key:i,defaultProps:o,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!a||n||t.default&&!Ji.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Ki(d,c);h&&(s.from=d),d=Xo(d);const f=!Ki(u,l);f&&this._focus(u);const p=Js(t.to),{config:m}=s,{decay:g,velocity:y}=m;(n||a)&&(m.velocity=0),t.config&&!p&&function(e,t,r){r&&(tl(r={...r},t),t={...r,...t}),tl(e,t),Object.assign(e,t);for(const t in Ks)null==e[t]&&(e[t]=Ks[t]);let{frequency:n,damping:a}=e;const{mass:i}=e;Ji.und(n)||(n<.01&&(n=.01),a<0&&(a=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*a*i/n)}(m,Rs(t.config,i),t.config!==o.config?Rs(o.config,i):void 0);let v=Ds(this);if(!v||Ji.und(u))return r(sl(this,!0));const b=Ji.und(t.reset)?a&&!t.default:!Ji.und(d)&&Ws(t.reset,i),w=b?d:this.get(),$=Xs(u),x=Ji.num($)||Ji.arr($)||bs($),S=!p&&(!x||Ws(o.immediate||t.immediate,i));if(f){const e=Ts(u);if(e!==v.constructor){if(!S)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const _=v.constructor;let F=Go(u),O=!1;if(!F){const e=b||!yl(this)&&h;(f||e)&&(O=Ki(Xs(w),$),F=!O),(Ki(s.immediate,S)||S)&&Ki(m.decay,g)&&Ki(m.velocity,y)||(F=!0)}if(O&&vl(this)&&(s.changed&&!b?F=!0:F||this._stop(l)),!p&&((F||Go(l))&&(s.values=v.getPayload(),s.toValues=Go(u)?null:_==Es?[1]:ro($)),s.immediate!=S&&(s.immediate=S,S||b||this._set(l)),F)){const{onRest:e}=s;eo(kl,(e=>Bl(this,t,e)));const n=sl(this,Sl(this,l));oo(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Ai.batchedUpdates((()=>{s.changed=!b,e?.(n,this),b?Rs(o.onRest,n):s.onStart?.(n,this)}))}b&&this._set(w),p?r(cl(t.to,t,this._state,this)):F?this._start():vl(this)&&!f?this._pendingCalls.add(r):r(ol(w))}_focus(e){const t=this.animation;e!==t.to&&(Jo(this)&&this._detach(),t.to=e,Jo(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Go(t)&&(rs(t,this),fl(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Go(e)&&ns(e,this)}_set(e,t=!0){const r=Xo(e);if(!Ji.und(r)){const e=Ds(this);if(!e||!Ki(r,e.getValue())){const n=Ts(r);e&&e.constructor==n?e.setValue(r):ks(this,n.create(r)),e&&Ai.batchedUpdates((()=>{this._onChange(r,t)}))}}return Ds(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,jl(this,"onStart",sl(this,Sl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Rs(this.animation.onChange,e,this)),Rs(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Ds(this).reset(Xo(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),vl(this)||(wl(this,!0),bl(this)||this._resume())}_resume(){Ei.skipAnimation?this.finish():yo.start(this)}_stop(e,t){if(vl(this)){wl(this,!1);const r=this.animation;eo(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Ko(this,{type:"idle",parent:this});const n=t?ll(this.get()):sl(this.get(),Sl(this,e??r.to));oo(this._pendingCalls,n),r.changed&&(r.changed=!1,jl(this,"onRest",n,this))}}};function Sl(e,t){const r=Xs(t);return Ki(Xs(e.get()),r)}function _l(e,t=e.loop,r=e.to){const n=Rs(t);if(n){const a=!0!==n&&Gs(n),i=(a||e).reverse,o=!a||a.reset;return Fl({...e,loop:t,default:!1,pause:void 0,to:!i||Js(r)?r:void 0,from:o?e.from:void 0,reset:o,...a})}}function Fl(e){const{to:t,from:r}=e=Gs(e),n=new Set;return Ji.obj(t)&&Dl(t,n),Ji.obj(r)&&Dl(r,n),e.keys=n.size?Array.from(n):null,e}function Ol(e){const t=Fl(e);return Ji.und(t.default)&&(t.default=Qs(t)),t}function Dl(e,t){to(e,((e,r)=>null!=e&&t.add(r)))}var kl=["onStart","onRest","onChange","onPause","onResume"];function Bl(e,t,r){e.animation[r]=t[r]!==Ys(t,r)?Vs(t[r],e.key):void 0}function jl(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Cl=["onStart","onChange","onRest"],El=1,Ml=class{constructor(e,t){this.id=El++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Ji.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(Fl(e)),this}start(e){let{queue:t}=this;return e?t=ro(e).map(Fl):this.queue=[],this._flush?this._flush(this,t):(Hl(this,t),Al(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;eo(ro(t),(t=>r[t].stop(!!e)))}else ul(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Ji.und(e))this.start({pause:!0});else{const t=this.springs;eo(ro(e),(e=>t[e].pause()))}return this}resume(e){if(Ji.und(e))this.start({pause:!1});else{const t=this.springs;eo(ro(e),(e=>t[e].resume()))}return this}each(e){to(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,a=this._changed.size>0;(n&&!this._started||a&&!this._started)&&(this._started=!0,no(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,o=a||i&&r.size?this.get():null;a&&t.size&&no(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),i&&(this._started=!1,no(r,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Ai.onFrame(this._onFrame)}};function Al(e,t){return Promise.all(t.map((t=>Pl(e,t)))).then((t=>il(e,t)))}async function Pl(e,t,r){const{keys:n,to:a,from:i,loop:o,onRest:s,onResolve:l}=t,c=Ji.obj(t.default)&&t.default;o&&(t.loop=!1),!1===a&&(t.to=null),!1===i&&(t.from=null);const u=Ji.arr(a)||Ji.fun(a)?a:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):eo(Cl,(r=>{const n=t[r];if(Ji.fun(n)){const a=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=a.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):a.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,oo(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===Ys(t,"cancel");(u||f&&d.asyncId)&&h.push(al(++e._lastAsyncId,{props:t,state:d,actions:{pause:Xi,resume:Xi,start(t,r){f?(ul(d,e._lastAsyncId),r(ll(e))):(t.onRest=s,r(cl(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=il(e,await Promise.all(h));if(o&&p.finished&&(!r||!p.noop)){const r=_l(t,o,a);if(r)return Hl(e,[r]),Pl(e,r,!0)}return l&&Ai.batchedUpdates((()=>l(p,e,e.item))),p}function Il(e,t){const r={...e.springs};return t&&eo(ro(t),(e=>{Ji.und(e.keys)&&(e=Fl(e)),Ji.obj(e.to)||(e={...e,to:void 0}),Ll(r,e,(e=>zl(e)))})),Tl(e,r),r}function Tl(e,t){to(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,rs(t,e))}))}function zl(e,t){const r=new xl;return r.key=e,t&&rs(r,t),r}function Ll(e,t,r){t.keys&&eo(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Hl(e,t){eo(t,(t=>{Ll(e.springs,t,(t=>zl(t,e)))}))}var Nl,Rl,Wl=({children:e,...t})=>{const r=v(Vl),n=t.pause||!!r.pause,a=t.immediate||!!r.immediate;t=function(e,t){const[r]=h((()=>({inputs:t,result:e()}))),n=f(),a=n.current;let i=a;i?Boolean(t&&i.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,i.inputs))||(i={inputs:t,result:e()}):i=r;return p((()=>{n.current=i,a==r&&(r.inputs=r.result=void 0)}),[i]),i.result}((()=>({pause:n,immediate:a})),[n,a]);const{Provider:i}=Vl;return u.createElement(i,{value:t},e)},Vl=(Nl=Wl,Rl={},Object.assign(Nl,u.createContext(Rl)),Nl.Provider._context=Nl,Nl.Consumer._context=Nl,Nl);Wl.Provider=Vl.Provider,Wl.Consumer=Vl.Consumer;var Yl=()=>{const e=[],t=function(t){vs(`${ms}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return eo(e,((e,a)=>{if(Ji.und(t))n.push(e.start());else{const i=r(t,e,a);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return eo(e,(e=>e.pause(...arguments))),this},t.resume=function(){return eo(e,(e=>e.resume(...arguments))),this},t.set=function(t){eo(e,((e,r)=>{const n=Ji.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return eo(e,((e,n)=>{if(Ji.und(t))r.push(e.start());else{const a=this._getProps(t,e,n);a&&r.push(e.start(a))}})),r},t.stop=function(){return eo(e,(e=>e.stop(...arguments))),this},t.update=function(t){return eo(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Ji.fun(e)?e(r,t):e};return t._getProps=r,t};function ql(e,t){const r=Ji.fun(e),[[n],a]=function(e,t,r){const n=Ji.fun(t)&&t;n&&!r&&(r=[]);const a=b((()=>n||3==arguments.length?Yl():void 0),[]),i=f(0),o=xs(),s=b((()=>({ctrls:[],queue:[],flush(e,t){const r=Il(e,t);return i.current>0&&!s.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Al(e,t):new Promise((n=>{Tl(e,r),s.queue.push((()=>{n(Al(e,t))})),o()}))}})),[]),l=f([...s.ctrls]),c=[],u=Fs(e)||0;function d(e,r){for(let a=e;a<r;a++){const e=l.current[a]||(l.current[a]=new Ml(null,s.flush)),r=n?n(a,e):t[a];r&&(c[a]=Ol(r))}}b((()=>{eo(l.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,a),e.stop(!0)})),l.current.length=e,d(u,e)}),[e]),b((()=>{d(0,Math.min(u,e))}),r);const h=l.current.map(((e,t)=>Il(e,c[t]))),p=v(Wl),m=Fs(p),g=p!==m&&function(e){for(const t in e)return!0;return!1}(p);ws((()=>{i.current++,s.ctrls=l.current;const{queue:e}=s;e.length&&(s.queue=[],eo(e,(e=>e()))),eo(l.current,((e,t)=>{a?.add(e),g&&e.start({default:p});const r=c[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),Ss((()=>()=>{eo(s.ctrls,(e=>e.stop(!0)))}));const y=h.map((e=>({...e})));return a?[y,a]:y}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,a]:n}var Ql=class extends ml{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Ho(...t);const r=this._get(),n=Ts(r);ks(this,n.create(r))}advance(e){const t=this._get();Ki(t,this.get())||(Ds(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Zl(this._active)&&Gl(this)}_get(){const e=Ji.arr(this.source)?this.source.map(Xo):ro(Xo(this.source));return this.calc(...e)}_start(){this.idle&&!Zl(this._active)&&(this.idle=!1,eo(Bs(this),(e=>{e.done=!1})),Ei.skipAnimation?(Ai.batchedUpdates((()=>this.advance())),Gl(this)):yo.start(this))}_attach(){let e=1;eo(ro(this.source),(t=>{Go(t)&&rs(t,this),fl(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){eo(ro(this.source),(e=>{Go(e)&&ns(e,this)})),this._active.clear(),Gl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=ro(this.source).reduce(((e,t)=>Math.max(e,(fl(t)?t.priority:0)+1)),0))}};function Ul(e){return!1!==e.idle}function Zl(e){return!e.size||Array.from(e).every(Ul)}function Gl(e){e.idle||(e.idle=!0,eo(Bs(e),(e=>{e.done=!0})),Ko(e,{type:"idle",parent:e}))}Ei.assign({createStringInterpolator:ps,to:(e,t)=>new Ql(e,t)});var Xl=/^--/;function Jl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Xl.test(e)||ec.hasOwnProperty(e)&&ec[e]?(""+t).trim():t+"px"}var Kl={};var ec={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tc=["Webkit","Ms","Moz","O"];ec=Object.keys(ec).reduce(((e,t)=>(tc.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),ec);var rc=/^(matrix|translate|scale|rotate|skew)/,nc=/^(translate)/,ac=/^(rotate|skew)/,ic=(e,t)=>Ji.num(e)&&0!==e?e+t:e,oc=(e,t)=>Ji.arr(e)?e.every((e=>oc(e,t))):Ji.num(e)?e===t:parseFloat(e)===t,sc=class extends As{constructor({x:e,y:t,z:r,...n}){const a=[],i=[];(e||t||r)&&(a.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>ic(e,"px"))).join(",")})`,oc(e,0)]))),to(n,((e,t)=>{if("transform"===t)a.push([e||""]),i.push((e=>[e,""===e]));else if(rc.test(t)){if(delete n[t],Ji.und(e))return;const r=nc.test(t)?"px":ac.test(t)?"deg":"";a.push(ro(e)),i.push("rotate3d"===t?([e,t,n,a])=>[`rotate3d(${e},${t},${n},${ic(a,r)})`,oc(a,0)]:e=>[`${t}(${e.map((e=>ic(e,r))).join(",")})`,oc(e,t.startsWith("scale")?1:0)])}})),a.length&&(n.transform=new lc(a,i)),super(n)}},lc=class extends es{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return eo(this.inputs,((r,n)=>{const a=Xo(r[0]),[i,o]=this.transforms[n](Ji.arr(a)?a:r.map(Xo));e+=" "+i,t=t&&o})),t?"none":e}observerAdded(e){1==e&&eo(this.inputs,(e=>eo(e,(e=>Go(e)&&rs(e,this)))))}observerRemoved(e){0==e&&eo(this.inputs,(e=>eo(e,(e=>Go(e)&&ns(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ko(this,e)}};Ei.assign({batchedUpdates:$,createStringInterpolator:ps,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var cc=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new As(e)),getComponentProps:n=(e=>e)}={})=>{const a={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=Ns(e)||"Anonymous";return(e=Ji.str(e)?i[e]||(i[e]=zs(e,a)):e[Hs]||(e[Hs]=zs(e,a))).displayName=`Animated(${t})`,e};return to(e,((t,r)=>{Ji.arr(e)&&(r=Ns(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:a,scrollTop:i,scrollLeft:o,viewBox:s,...l}=t,c=Object.values(l),u=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Kl[t]||(Kl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==a&&(e.textContent=a);for(const t in n)if(n.hasOwnProperty(t)){const r=Jl(t,n[t]);Xl.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==i&&(e.scrollTop=i),void 0!==o&&(e.scrollLeft=o),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new sc(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),uc=cc.animated;const dc=(e,t,r)=>t?Aa(r,t)||Aa(e,t):r||e,hc=(e,t)=>{const r=t||e.defaultValue;return Aa(e.collections,r)};var fc;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(fc||(fc={}));const pc={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},mc=e=>t=>{const r=t.theme,n=hc(pc,r[fc.colorScheme]);return r.options&&r.options.color?dc(n,e,r.options.color):dc(n,e)},gc={Brand:{1:mc("Brand.1"),2:mc("Brand.2"),3:mc("Brand.3"),4:mc("Brand.4"),5:mc("Brand.5"),6:mc("Brand.6")},Primary:mc("Primary"),PrimaryDark:mc("PrimaryDark"),Secondary:mc("Secondary"),Accent:{Light:{1:mc("Accent.Light.1"),2:mc("Accent.Light.2"),3:mc("Accent.Light.3"),4:mc("Accent.Light.4"),5:mc("Accent.Light.5"),6:mc("Accent.Light.6")},Dark:{1:mc("Accent.Dark.1"),2:mc("Accent.Dark.2"),3:mc("Accent.Dark.3")}},Neutral:{1:mc("Neutral.1"),2:mc("Neutral.2"),3:mc("Neutral.3"),4:mc("Neutral.4"),5:mc("Neutral.5"),6:mc("Neutral.6"),7:mc("Neutral.7"),8:mc("Neutral.8")},Validation:{Green:{Text:mc("Validation.Green.Text"),Icon:mc("Validation.Green.Icon"),Border:mc("Validation.Green.Border"),Background:mc("Validation.Green.Background")},Orange:{Text:mc("Validation.Orange.Text"),Icon:mc("Validation.Orange.Icon"),Border:mc("Validation.Orange.Border"),Background:mc("Validation.Orange.Background"),Badge:mc("Validation.Orange.Badge")},Red:{Text:mc("Validation.Red.Text"),Icon:mc("Validation.Red.Icon"),Border:mc("Validation.Red.Border"),Background:mc("Validation.Red.Background")},Blue:{Text:mc("Validation.Blue.Text"),Icon:mc("Validation.Blue.Icon"),Border:mc("Validation.Blue.Border"),Background:mc("Validation.Blue.Background")}},Shadow:{Accent:mc("Shadow.Accent"),Red:mc("Shadow.Red"),Elevation:mc("Shadow.Elevation")}},yc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},vc=e=>Object.keys(yc).reduce(((t,r)=>{const n=yc[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),bc=vc("max-width"),wc=(vc("min-width"),x.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),$c=S`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,xc=x.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||gc.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${$c} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Sc=x(xc)`
    animation-delay: -0.45s;
`,_c=x(xc)`
    animation-delay: -0.3s;
`,Fc=x(xc)`
    animation-delay: -0.15s;
`,Oc={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Dc={collections:{base:{D1:{fontFamily:Oc.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Oc.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Oc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Oc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Oc.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Oc.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Oc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Oc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Oc.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Oc.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Oc.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Oc.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Oc.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Oc.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},kc=e=>t=>{const r=t.theme,n=hc(Dc,r[fc.textStyleScheme]);return r.options&&r.options.textStyle?dc(n,e,r.options.textStyle):dc(n,e)},Bc={D1:{fontFamily:kc("D1.fontFamily"),fontSize:kc("D1.fontSize"),fontWeight:kc("D1.fontWeight"),lineHeight:kc("D1.lineHeight"),letterSpacing:kc("D1.letterSpacing")},D2:{fontFamily:kc("D2.fontFamily"),fontSize:kc("D2.fontSize"),fontWeight:kc("D2.fontWeight"),lineHeight:kc("D2.lineHeight"),letterSpacing:kc("D2.letterSpacing")},D3:{fontFamily:kc("D3.fontFamily"),fontSize:kc("D3.fontSize"),fontWeight:kc("D3.fontWeight"),lineHeight:kc("D3.lineHeight"),letterSpacing:kc("D3.letterSpacing")},D4:{fontFamily:kc("D4.fontFamily"),fontSize:kc("D4.fontSize"),fontWeight:kc("D4.fontWeight"),lineHeight:kc("D4.lineHeight"),letterSpacing:kc("D4.letterSpacing")},DBody:{fontFamily:kc("DBody.fontFamily"),fontSize:kc("DBody.fontSize"),fontWeight:kc("DBody.fontWeight"),lineHeight:kc("DBody.lineHeight"),letterSpacing:kc("DBody.letterSpacing")},H1:{fontFamily:kc("H1.fontFamily"),fontSize:kc("H1.fontSize"),fontWeight:kc("H1.fontWeight"),lineHeight:kc("H1.lineHeight"),letterSpacing:kc("H1.letterSpacing")},H2:{fontFamily:kc("H2.fontFamily"),fontSize:kc("H2.fontSize"),fontWeight:kc("H2.fontWeight"),lineHeight:kc("H2.lineHeight"),letterSpacing:kc("H2.letterSpacing")},H3:{fontFamily:kc("H3.fontFamily"),fontSize:kc("H3.fontSize"),fontWeight:kc("H3.fontWeight"),lineHeight:kc("H3.lineHeight"),letterSpacing:kc("H3.letterSpacing")},H4:{fontFamily:kc("H4.fontFamily"),fontSize:kc("H4.fontSize"),fontWeight:kc("H4.fontWeight"),lineHeight:kc("H4.lineHeight"),letterSpacing:kc("H4.letterSpacing")},H5:{fontFamily:kc("H5.fontFamily"),fontSize:kc("H5.fontSize"),fontWeight:kc("H5.fontWeight"),lineHeight:kc("H5.lineHeight"),letterSpacing:kc("H5.letterSpacing")},H6:{fontFamily:kc("H6.fontFamily"),fontSize:kc("H6.fontSize"),fontWeight:kc("H6.fontWeight"),lineHeight:kc("H6.lineHeight"),letterSpacing:kc("H6.letterSpacing")},Body:{fontFamily:kc("Body.fontFamily"),fontSize:kc("Body.fontSize"),fontWeight:kc("Body.fontWeight"),lineHeight:kc("Body.lineHeight"),letterSpacing:kc("Body.letterSpacing")},BodySmall:{fontFamily:kc("BodySmall.fontFamily"),fontSize:kc("BodySmall.fontSize"),fontWeight:kc("BodySmall.fontWeight"),lineHeight:kc("BodySmall.lineHeight"),letterSpacing:kc("BodySmall.letterSpacing")},XSmall:{fontFamily:kc("XSmall.fontFamily"),fontSize:kc("XSmall.fontSize"),fontWeight:kc("XSmall.fontWeight"),lineHeight:kc("XSmall.lineHeight"),letterSpacing:kc("XSmall.letterSpacing")}},jc=e=>{switch(e){case 700:case"bold":return Oc.Bold;case 600:case"semibold":return Oc.Semibold;case 300:case"light":return Oc.Light;case 400:case"regular":return Oc.Regular;default:return""}},Cc=(e,t)=>r=>{var n;const a=Bc[e].fontFamily(r),i=Bc[e].fontWeight(r);return Object.values(Oc).includes(a)?_`
                font-family: ${jc(t)||jc(i)||a};
                font-weight: normal !important;
            `:_`
            font-family: ${a};
            font-weight: ${null!==(n=Ec(t)||i)&&void 0!==n?n:"normal"};
        `},Ec=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Mc=e=>{if(e>0)return _`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Ac=(e,t,r=!1)=>n=>{const a=Bc[e],i=a.fontSize(n);return _`
            ${Cc(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${_`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},Pc=(e=!1,t=!1,r=void 0)=>t?_`
            display: block;
            ${Mc(r)}
        `:e?_`
            display: inline;
        `:_`
            display: block;
            ${Mc(r)}
        `;var Ic;!function(e){e.D1=x.h1`
        ${e=>_`
                ${Ac("D1",e.weight,e.paragraph)}
                color: ${gc.Neutral[1]};
                ${Pc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=x.h1`
        ${e=>_`
                ${Ac("D2",e.weight,e.paragraph)}
                color: ${gc.Neutral[1]};
                ${Pc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=x.h1`
        ${e=>_`
                ${Ac("D3",e.weight,e.paragraph)}
                color: ${gc.Neutral[1]};
                ${Pc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=x.h1`
        ${e=>_`
                ${Ac("D4",e.weight,e.paragraph)}
                color: ${gc.Neutral[1]};
                ${Pc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=x.h1`
        ${e=>_`
                ${Ac("DBody",e.weight,e.paragraph)}
                color: ${gc.Neutral[1]};
                ${Pc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=x.h1`
        ${e=>_`
                ${Ac("H1",e.weight,e.paragraph)}
                color: ${gc.Neutral[1]};
                ${Pc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=x.h2`
        ${e=>_`
                ${Ac("H2",e.weight,e.paragraph)}
                color: ${gc.Neutral[1]};
                ${Pc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=x.h3`
        ${e=>_`
                ${Ac("H3",e.weight,e.paragraph)}
                color: ${gc.Neutral[1]};
                ${Pc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=x.h4`
        ${e=>_`
                ${Ac("H4",e.weight,e.paragraph)}
                color: ${gc.Neutral[1]};
                ${Pc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=x.h5`
        ${e=>_`
                ${Ac("H5",e.weight,e.paragraph)}
                color: ${gc.Neutral[1]};
                ${Pc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=x.h6`
        ${e=>_`
                ${Ac("H6",e.weight,e.paragraph)}
                color: ${gc.Neutral[1]};
                ${Pc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=x.p`
        ${e=>_`
                ${Ac("Body",e.weight,e.paragraph)}
                color: ${gc.Neutral[1]};
                ${Pc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=x.p`
        ${e=>_`
                ${Ac("BodySmall",e.weight,e.paragraph)}
                color: ${gc.Neutral[1]};
                ${Pc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=x.span`
        ${e=>_`
                ${Ac("XSmall",e.weight,e.paragraph)}
                color: ${gc.Neutral[1]};
                ${Pc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Lc(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Lc(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ic||(Ic={}));const Tc=x.a`
    ${e=>_`
            ${Ac(e.textStyle,e.weight)}
            color: ${gc.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${gc.Secondary};

                svg {
                    color: ${gc.Secondary};
                }
            }
        `}
`,zc=x(F)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Lc=r=>{var{external:n=!1,children:a}=r,i=H(r,["external","children"]);return e(Tc,Object.assign({},i,{children:[a,n&&t(zc,{})]}))};var Hc;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Hc||(Hc={}));const Nc={collections:{base:{InputBoxShadow:_`
        inset 0 0 4px 0px ${gc.Shadow.Accent}
    `,InputErrorBoxShadow:_`
        inset 0 0 4px 0px ${gc.Shadow.Red}
    `,ElevationBoxShadow:_`
      0px 2px 8px ${gc.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:_`
        inset 0 0 3px 0px ${gc.Shadow.Accent}
    `,InputErrorBoxShadow:_`
        inset 0 0 3px 0px ${gc.Shadow.Red}
    `,ElevationBoxShadow:_`
      0px 2px 8px ${gc.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Rc=e=>t=>{var r;const n=t.theme,a=hc(Nc,n[fc.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?dc(a,e,n.options.designToken):dc(a,e)},Wc={InputBoxShadow:Rc("InputBoxShadow"),InputErrorBoxShadow:Rc("InputErrorBoxShadow"),ElevationBoxShadow:Rc("ElevationBoxShadow"),Table:{Header:Rc("Table.Header"),Cell:{Primary:Rc("Table.Cell.Primary"),Secondary:Rc("Table.Cell.Secondary"),Selected:Rc("Table.Cell.Selected"),Hover:Rc("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Rc("Button.Danger.BackgroundColor"),Hover:Rc("Button.Danger.Hover"),Primary:Rc("Button.Danger.Primary"),Border:Rc("Button.Danger.Border")}}},Vc=x.button`
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
                    background-color: ${gc.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Wc.Button.Danger.Border:gc.Primary};

                    color: ${e.$buttonIsDanger?Wc.Button.Danger.Primary:gc.Primary};
                `;case"light":return _`
                    background-color: ${gc.Neutral[8]};
                    border: 1px solid ${gc.Neutral[5]};

                    color: ${e.$buttonIsDanger?Wc.Button.Danger.Primary:gc.Primary};
                `;case"disabled":return _`
                    background-color: ${gc.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${gc.Neutral[3]};
                `;case"link":return _`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Wc.Button.Danger.Primary:gc.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Wc.Button.Danger.Hover:gc.Secondary};
                    }
                `;default:return _`
                    background-color: ${e.$buttonIsDanger?Wc.Button.Danger.BackgroundColor:gc.Primary};
                    border: 1px solid transparent;

                    ${bc.mobileL} {
                        width: 100%;
                    }

                    color: ${gc.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?_`
                    height: 2.5rem;
                    ${Ac("H5","semibold")}

                    ${bc.mobileS} {
                        height: auto;
                    }
                `:_`
                    height: 3rem;
                    ${Ac("H4","semibold")}

                    ${bc.mobileS} {
                        height: auto;
                    }
                `}
`,Yc=x((({color:r,className:n,size:a=18})=>e(wc,Object.assign({className:n,$size:a,$color:r},{children:[t(xc,{id:"inner1",$size:a-2,$borderWidth:2,$color:r}),t(Sc,{id:"inner2",$size:a-2,$borderWidth:2,$color:r}),t(_c,{id:"inner3",$size:a-2,$borderWidth:2,$color:r}),t(Fc,{id:"inner4",$size:a-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Wc.Button.Danger.Primary:gc.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=gc.Neutral[3](e);break;default:t=gc.Neutral[8](e)}return _`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var qc;!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,a=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/a));const o=n+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=r;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:r,endIndex:a}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,a+1).length)+e.substring(a+1)}if(a){const{startIndex:r,endIndex:n}=t(a[0],a[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(qc||(qc={}));const Qc=S`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Uc=x.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return _`
            height: ${t};
            width: ${r};
        `}}

    svg {
        animation: 200ms ease-in-out ${Qc};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?gc.Neutral[4](e):e.$unchecked?gc.Accent.Light[2](e):gc.Primary(e)};
    }
`,Zc=x.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Gc=x(uc.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Xc=x.ul`
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: 0.5rem;
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${gc.Neutral[4]};
        border-right: 5px solid ${gc.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${bc.mobileL} {
        max-height: 15rem;
    }
`,Jc=x.li`
    :hover,
    :focus,
    :active {
        background: ${gc.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return _`
                background: ${gc.Accent.Light[5]};
            `}}
`,Kc=x.button`
    display: flex;
    ${e=>e.$multiSelect?_`
                padding: 0.5rem 1rem;
            `:_`
                padding: 0 1rem;
                min-height: ${(e=>{let t=3.5;return"small"===e.$variant&&(t=3.25),e.$hasNextLineLabel&&(t=4.255),t})(e)}rem;
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
        outline-color: ${gc.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,eu=_`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,tu=x.div`
    ${e=>Ac("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${gc.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&eu}
`,ru=x.div`
    color: ${gc.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&eu}

    ${e=>"next-line"===e.$labelDisplayType?_`
                    ${Ac("BodySmall","semibold")}
                `:_`
                    ${Ac("Body","regular")}
                `}
`,nu=x.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return _`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return _`
                    ${tu} {
                        display: inline;
                    }

                    ${ru} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,au=x.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,iu=x.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,ou=x((r=>{var{className:n,checked:a,disabled:i,indeterminate:o,onChange:s,onKeyPress:l,displaySize:c="default"}=r,u=H(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const d=f();p((()=>{d.current.indeterminate=o}),[o]);const h=e=>{if(!i){const t=e;if(!(" "===t.key||"change"===e.type))return;s&&s(e),l&&l(t)}};return e(Uc,Object.assign({className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":o?"mixed":a,"aria-labelledby":"checkbox-input",tabIndex:i?-1:0,onKeyDown:h,$displaySize:c,$disabled:i,$unchecked:!(o||a||i)},{children:[t(Zc,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:a,ref:d,tabIndex:-1,onChange:h,disabled:i},u)),o?t(D,{"data-testid":"indeterminate"}):a?t(k,{"data-testid":"checkmark"}):i?t(B,{"data-testid":"disabled-empty-checkbox"}):t(j,{"data-testid":"empty-checkbox"})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,su=x.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,lu=x.button`
    ${e=>Ac("small"===e.$variant?"BodySmall":"Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${gc.Primary(e)};\n\t\t`}
`,cu=x.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,uu=x.div`
    ${e=>Ac("small"===e.$variant?"BodySmall":"Body","regular")}
`,du=x(O)`
    ${e=>{const t="small"===e.$variant?1:1.5;return _`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${gc.Validation.Red.Icon};
`,hu=x.button`
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

    svg {
        height: 1.125rem;
        width: 1.125rem;
    }

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&_`
                background-color: ${gc.Neutral[7]};
            `}
    }
`,fu=d.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=H(e,["children","focusHighlight","focusOutline","type"]);return t(hu,Object.assign({ref:r,$outline:i,$highlight:a,type:o},s,{children:n}))})),pu=_`
    border: 1px solid ${gc.Accent.Light[1]};
    box-shadow: ${Wc.InputBoxShadow};
`,mu=_`
    border: 1px solid transparent;
    box-shadow: none;
`,gu=_`
    border: 1px solid ${gc.Neutral[5]};
    box-shadow: none;
`,yu=_`
    border: 1px solid ${gc.Validation.Red.Border};
    box-shadow: ${Wc.InputErrorBoxShadow};
`,vu=x.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${gc.Neutral[5]};
    border-radius: 4px;
    background: ${gc.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        ${pu}
    }
    ${e=>e.$focused&&pu}

    ${e=>e.$readOnly?_`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${mu}
                }
                ${e.$focused&&mu}
            `:e.$disabled?_`
                background: ${gc.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${gu}
                }
                ${e.$focused&&gu}
            `:e.$error?_`
                border: 1px solid ${gc.Validation.Red.Border};

                :focus-within {
                    ${yu}
                }
                ${e.$focused&&yu}
            `:void 0}
`,bu=x.input`
    ${e=>Ac("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${gc.Neutral[1]};
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
        color: ${gc.Neutral[3]};
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
`,wu=e=>"small"===e?1:1.375,$u=e=>_`
        height: ${wu(e)}rem;
        width: ${wu(e)}rem;
    `,xu=x.li`
    background: ${gc.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,Su=x(bu)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,_u=x(E)`
    ${e=>$u(e.$variant)}
    margin: 0 0.5rem;
    color: ${gc.Neutral[3]};
`,Fu=x(fu)`
    ${e=>$u(e.$variant)}
    padding: 0;
    margin: 0 0.5rem;
    color: ${gc.Neutral[3]};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return _`
                svg {
                    ${$u(e.$variant)}
                }
            `}}
`,Ou=g(((r,n)=>{const{onClear:a}=r,i=H(r,["onClear"]);return e(xu,{children:[t(_u,{$variant:r.variant}),t(Su,Object.assign({ref:n,$variant:r.variant},i)),i.value&&t(Fu,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:r.variant},{children:t(C,{})}))]},"search")})),Du=n=>{var{listItems:a,listExtractor:i,valueExtractor:o,onSelectItem:s,listStyleWidth:l,visible:c,enableSearch:u,searchPlaceholder:d="Search",onSearch:m,searchFunction:g,onDismiss:y,disableItemFocus:v,multiSelect:b,selectedItems:w,onSelectAll:$,onRetry:x,itemsLoadState:S="success",itemTruncationType:_="end",itemMaxLines:F=2,labelDisplayType:O="inline",renderListItem:D,onBlur:k,hideNoResultsDisplay:B,renderCustomCallToAction:j,variant:C="default"}=n,E=H(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[M,A]=h(0),[P,I]=h(""),[T,z]=h(a),[L,N]=h(0),R=ql({height:L}),W=f(),V=f(),Y=f([]),q=f(),Q=f(),U=f(M),Z=f(T),G=e=>{U.current=e,A(e)},X=e=>{Z.current=e,z(e)};p((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),p((()=>{te(P)}),[P]),p((()=>{if(I(""),c){if(setTimeout((()=>{N(re())})),v)return;q&&q.current?(q.current.focus(),G(-1)):Y.current[M]&&Y.current[M].focus()}else N(0)}),[c]),p((()=>{if(c){const e=re();N(e)}}),[T,S]),p((()=>{X(a),I(""),G(0)}),[a]);const J=e=>i?i(e):e.toString(),K=e=>{if("inline"!==O)return!1;let t=0;V&&V.current&&(t=V.current.getBoundingClientRect().width-60);return qc.getTextWidth(e,"1.125rem 'Open Sans'")>t*F},ee=e=>!!ki(w,(t=>ji(t,e))),te=e=>{if(""===e)X(a);else if(g){const t=g(e);X(t)}else{const t=a.filter((t=>{var r;const n=J(t),a="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),i="string"==typeof n||null===(r=n.secondaryLabel)||void 0===r?void 0:r.toLowerCase(),o=e.trim().toLowerCase();return a.includes(o)||i&&i.includes(o)}));X(t)}},re=()=>(V&&V.current?V.current.getBoundingClientRect().height:0)+(Q.current?Q.current.getBoundingClientRect().height:0),ne=e=>{if(W&&W.current.contains(e.target))switch(e.code){case"ArrowDown":if(U.current<Z.current.length-1){const e=U.current+1;Y.current[e].focus(),G(e)}break;case"ArrowUp":if(U.current>0){const e=U.current-1;Y.current[e].focus(),G(U.current-1)}break;case"Escape":y&&y(!0)}},ae=(e,t)=>{e.preventDefault(),s&&s(t,(e=>o?o(e):e)(t))},ie=e=>{const t=e.target.value;I(t),m&&m()},oe=()=>{I(""),q.current.focus(),m&&m()},se=()=>{x&&x()},le=()=>{k&&k()},ce=n=>e(r,{children:[t(au,Object.assign({$maxLines:F,"aria-hidden":!0},{children:n})),t(iu,Object.assign({$maxLines:F,"aria-hidden":!0},{children:n}))]}),ue=r=>{const n=J(r),a="string"==typeof n?n:n.title,i="string"==typeof n?void 0:n.secondaryLabel,o=K(a),s=i&&K(i),l=o||s?"next-line":O;return e(nu,Object.assign({$labelDisplayType:l},{children:[t(tu,Object.assign({$truncateType:_,$maxLines:F,$variant:C,"aria-label":a},{children:"middle"===_&&o?ce(a):a})),i&&t(ru,Object.assign({$truncateType:_,$maxLines:F,$labelDisplayType:O,"aria-label":i},{children:"middle"===_&&s?ce(i):i}))]}))},de=()=>{if(!x||x&&"success"===S)return T.map(((r,n)=>t(Jc,Object.assign({$checked:ee(r)&&!b},{children:e(Kc,Object.assign({$hasNextLineLabel:"next-line"===O&&T.length>0&&i&&"string"!=typeof i(T[0]),onClick:e=>{ae(e,r)},ref:e=>Y.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:c?0:-1,$multiSelect:b,onBlur:le,$variant:C},{children:[b&&t(ou,{checked:ee(r),displaySize:"small"}),D?D(r,{selected:ee(r)}):ue(r)]}))}),((e,t)=>`item_${t}__${o?o(e):e}`)(r,n))))},he=()=>{if(b&&T.length>0&&!P&&"success"===S)return t(su,{children:t(lu,Object.assign({onClick:$,type:"button",$variant:C},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},fe=()=>{if(!B&&(P||!u)&&0===T.length&&"success"===S)return e(cu,Object.assign({"data-testid":"list-no-results"},{children:[t(du,{"data-testid":"no-result-icon",$variant:C}),t(uu,Object.assign({$variant:C},{children:"No results found."}))]}),"noResults")},pe=()=>{if(x&&"loading"===S){const r="small"===C?16:24;return e(cu,Object.assign({"data-testid":"list-loading"},{children:[t(Yc,{$buttonStyle:"secondary",size:r}),t(uu,Object.assign({$variant:C},{children:"Loading..."}))]}),"loading")}},me=()=>{if(x&&"fail"===S)return e(cu,Object.assign({"data-testid":"list-fail"},{children:[t(du,{"data-testid":"load-error-icon",$variant:C}),t(uu,Object.assign({$variant:C},{children:"Failed to load."}))," ",t(lu,Object.assign({onClick:se,type:"button",$variant:C},{children:"Try again."}))]}),"noResults")};return t(r,{children:e(Gc,Object.assign({style:R,"data-testid":c?"dropdown-container":"dropdown-container-hidden",ref:W},{children:[(()=>{if(c)return e(Xc,Object.assign({ref:V,"data-testid":"dropdown-list",width:l,role:"list"},E,{children:[(u||g)&&"success"===S?t(Ou,{ref:q,onChange:ie,value:P,placeholder:d,"data-testid":"search-input","aria-label":"search-input",tabIndex:c?0:-1,onClear:oe,variant:C}):null,he(),fe(),pe(),me(),de()]}))})(),(()=>{if(c&&j)return t("div",Object.assign({ref:Q,"data-testid":"custom-cta"},{children:j(y,T)}))})()]}))})},ku="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Bu=e=>"small"===e?2.5:3,ju=x.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Bu(e.$variant);return _`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,Cu=_`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>Bu(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${gc.Accent.Light[3]};
    }
`,Eu=x.button`
    ${Cu}
    cursor: pointer;
`;x.div`
    ${Cu}
`;const Mu=S`
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
`,Au=x.div`
    position: relative;
    border: 1px solid ${gc.Neutral[5]};
    border-radius: ${"4px"};
    background: ${gc.Neutral[8]};

    :focus-within {
        border: 1px solid ${gc.Accent.Light[1]};
        box-shadow: ${Wc.InputBoxShadow};
    }

    ${e=>e.expanded?_`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:_`
                animation: ${Mu} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?_`
                background: ${gc.Neutral[6](e)};

                ${Eu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${gc.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?_`
                border: none;
                background: transparent !important;

                ${Eu} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?_`
                border: 1px solid ${gc.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${gc.Validation.Red.Border(e)};
                    box-shadow: ${Wc.InputErrorBoxShadow};
                }
            `:void 0}
`,Pu=x.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${ku};
    margin-left: 1rem;
`,Iu=x(M)`
    color: ${gc.Neutral[3]};
    ${e=>{let t=Bc.Body.fontSize;return"small"===e.$variant&&(t=Bc.BodySmall.fontSize),_`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,Tu=x.div`
    height: 1px;
    background: ${gc.Neutral[5]};
    margin: 0 0.5rem;
`,zu=x.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`,Lu=x.div`
    ${e=>Ac("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return _`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Hu=x(Lu)`
    color: ${gc.Neutral[3]};
`,Nu=({children:e,show:r,error:n,disabled:a,testId:i,onBlur:o,readOnly:s,className:l,variant:c})=>{const u=f();return((e,t,r="window",n)=>{const a=f();p((()=>{a.current=t}),[t]),p((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>a.current(e);return t.addEventListener(e,i,n),()=>{t.removeEventListener(e,i,n)}}),[e,r])})("mousedown",(function(e){if(!a){if(u&&u.current.contains(e.target))return;r&&o()}}),"document"),t(ju,Object.assign({className:l,$variant:c},{children:t(Au,Object.assign({ref:u,error:n&&!r,disabled:a,$readOnly:s,expanded:r,"data-testid":i},{children:e}))}))},Ru=n=>{var{selectedOption:a,placeholder:i="Select",options:o,disabled:s,error:l,className:c,"data-testid":u,id:d,enableSearch:m=!1,searchFunction:g,searchPlaceholder:y,valueExtractor:v,valueToStringFunction:b,listExtractor:w,displayValueExtractor:$,onSelectOption:x,listStyleWidth:S,onShowOptions:_,onHideOptions:F,onRetry:O,optionsLoadState:D="success",optionTruncationType:k="end",renderCustomSelectedOption:B,renderListItem:j,hideNoResultsDisplay:C,renderCustomCallToAction:E,onBlur:M,variant:A="default"}=n,P=H(n,["selectedOption","placeholder","options","disabled","error","className","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","hideNoResultsDisplay","renderCustomCallToAction","onBlur","variant"]);const[I,T]=h(a),[z,L]=h(!1),N=f(),R=f();p((()=>{T(a)}),[a]);const W=(e,t)=>{T(e),L(!1),q(!1),N&&N.current.focus(),x&&x(e,t)},V=e=>{z&&(L(!1),q(!1)),e&&N&&N.current.focus()},Y=e=>{if("middle"===k){let t=0;return R&&R.current&&(t=R.current.getBoundingClientRect().width),qc.truncateOneLine((e=>"string"==typeof e?e:b(e)||e.toString())(e),t,120,8)}return e},q=e=>{!e&&F&&F(),e&&_&&_()};return e(Nu,Object.assign({className:c,show:z,error:l&&!z,disabled:s,readOnly:P.readOnly,testId:u,onBlur:()=>{null==M||M(),L(!1),q(!1)},variant:A},{children:[t(Eu,Object.assign({ref:N,type:"button","data-testid":d||"selector",disabled:s,onClick:e=>{e.preventDefault(),s||P.readOnly||(L(!z),q(!z),z&&(null==M||M()))},onBlur:()=>{z||null==M||M()},$variant:A},P,{children:e(r,{children:[t(zu,Object.assign({ref:R},{children:I?B?B(I):t(Lu,Object.assign({truncateType:k,$variant:A},{children:Y($?$(I):v?v(I):I.toString())})):t(Hu,Object.assign({truncateType:k,$variant:A},{children:i}))})),!P.readOnly&&t(Pu,Object.assign({expanded:z},{children:t(Iu,{$variant:A})}))]})})),z&&t(Tu,{}),o&&o.length>0?t(Du,{listItems:o,onSelectItem:W,onDismiss:V,valueExtractor:v,listExtractor:w,listStyleWidth:S,visible:z,enableSearch:m,searchPlaceholder:y,searchFunction:g,"data-testid":"dropdown-list",selectedItems:I?[I]:[],onRetry:O,itemsLoadState:D,itemTruncationType:k,renderListItem:j,hideNoResultsDisplay:C,renderCustomCallToAction:E,variant:A}):null]}))},Wu={Default:d.forwardRef(((r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,c=H(r,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Vc,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[o&&t(Yc,Object.assign({},u)),t("span",{children:a})]}))})),Small:d.forwardRef(((r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,c=H(r,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Vc,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[o&&t(Yc,Object.assign({},u,{size:16})),t("span",{children:a})]}))}))};var Vu={exports:{}};Vu.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var r,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,t))>-1){r=a>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[a,function(e){this.afternoon=u(e,!1)}],a:[a,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[a,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[a,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[a,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,a;n=r,a=i&&i.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],u=d[c],h=u&&u[0],f=u&&u[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var a=o[r];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,c=e.slice(n),u=i.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,a=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],u=l||c,d=o[2];c&&(d=o[2]),i=this.$locale(),!l&&d&&(i=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,c=n.seconds,u=n.milliseconds,d=n.zone,f=new Date,p=o||(a||i?1:f.getDate()),m=a||f.getFullYear(),g=0;a&&!i||(g=i>0?i-1:f.getMonth());var y=s||0,v=l||0,b=c||0,w=u||0;return d?new Date(Date.UTC(m,g,p,y,v,b,w+60*d.offset*1e3)):r?new Date(Date.UTC(m,g,p,y,v,b,w)):new Date(m,g,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){o[1]=s[p-1];var m=r.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===f&&(this.$d=new Date(""))}else a.call(this,e)}}}();var Yu,qu,Qu=I(Vu.exports),Uu={exports:{}},Zu=I(Uu.exports=(Yu={year:0,month:1,day:2,hour:3,minute:4,second:5},qu={},function(e,t,r){var n,a=function(e,t,r){void 0===r&&(r={});var n=new Date(e),a=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,a=qu[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),qu[n]=a),a}(t,r);return a.formatToParts(n)},i=function(e,t){for(var n=a(e,t),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,c=s.value,u=Yu[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],h=24===d?0:d,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=r(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(a-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,a){var o=a&&t,s=a||t||n,l=i(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,a=i(n,r);if(t===a)return[n,t];var o=i(n-=60*(a-t)*1e3,r);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(r.utc(e,o).valueOf(),l,s),u=c[0],d=c[1],h=r(u).utcOffset(d);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}})),Gu={exports:{}};Gu.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),a=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(a,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),a=t.clone().add(n,c),i=r-a<0,o=t.clone().add(n+(i?-1:1),c);return+(-(n+(r-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:o,m:i,s:a,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=g;var $="$isDayjsObject",x=function(e){return e instanceof O||!(!e||!e[$])},S=function e(t,r,n){var a;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(a=i),r&&(w[i]=r,a=i);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=t.name;w[s]=t,a=s}return!n&&a&&(b=a),a||!n&&b},_=function(e,t){if(x(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new O(r)},F=v;F.l=S,F.i=x,F.w=function(e,t){return _(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function g(e){this.$L=S(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[$]=!0}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(F.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return F},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=_(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return _(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<_(e)},y.$g=function(e,t,r){return F.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!F.u(t)||t,u=F.p(e),f=function(e,t){var a=F.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?a:a.endOf(s)},p=function(e,t){return F.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return n?f(1,0):f(31,11);case c:return n?f(1,g):f(0,g+1);case l:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return f(n?y-w:y+(6-w),g);case s:case h:return p(v+"Hours",0);case o:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case a:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=F.p(e),u="set"+(this.$u?"UTC":""),f=(r={},r[s]=u+"Date",r[h]=u+"Date",r[c]=u+"Month",r[d]=u+"FullYear",r[o]=u+"Hours",r[i]=u+"Minutes",r[a]=u+"Seconds",r[n]=u+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[F.p(e)]()},y.add=function(n,u){var h,f=this;n=Number(n);var p=F.p(u),m=function(e){var t=_(f);return F.w(t.date(t.date()+Math.round(e*n)),f)};if(p===c)return this.set(c,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return m(1);if(p===l)return m(7);var g=(h={},h[i]=t,h[o]=r,h[a]=e,h)[p]||1,y=this.$d.getTime()+n*g;return F.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=F.z(this),i=this.$H,o=this.$m,s=this.$M,l=r.weekdays,c=r.months,u=r.meridiem,d=function(e,r,a,i){return e&&(e[r]||e(t,n))||a[r].slice(0,i)},h=function(e){return F.s(i%12||12,e,"0")},p=u||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return F.s(t.$y,4,"0");case"M":return s+1;case"MM":return F.s(s+1,2,"0");case"MMM":return d(r.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return F.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(r.weekdaysMin,t.$W,l,2);case"ddd":return d(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return F.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(i,o,!0);case"A":return p(i,o,!1);case"m":return String(o);case"mm":return F.s(o,2,"0");case"s":return String(t.$s);case"ss":return F.s(t.$s,2,"0");case"SSS":return F.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var p,m=this,g=F.p(h),y=_(n),v=(y.utcOffset()-this.utcOffset())*t,b=this-y,w=function(){return F.m(m,y)};switch(g){case d:p=w()/12;break;case c:p=w();break;case u:p=w()/3;break;case l:p=(b-v)/6048e5;break;case s:p=(b-v)/864e5;break;case o:p=b/r;break;case i:p=b/t;break;case a:p=b/e;break;default:p=b}return f?p:F.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=S(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return F.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),D=O.prototype;return _.prototype=D,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),_.extend=function(e,t){return e.$i||(e(t,O,_),e.$i=!0),_},_.locale=S,_.isDayjs=x,_.unix=function(e){return _(1e3*e)},_.en=w[b],_.Ls=w,_.p={},_}();var Xu=I(Gu.exports),Ju={exports:{}};Ju.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,a){var i=r(e),o=r(t),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var Ku=I(Ju.exports),ed={exports:{}};ed.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var td=I(ed.exports),rd={exports:{}};rd.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var nd,ad=I(rd.exports);Xu.extend(Ku),Xu.extend(td),Xu.extend(ad),Xu.extend(Qu),Xu.extend(Zu),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Xu(t).startOf("week");return id(r).map((e=>od(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return od(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Xu(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Xu(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Xu(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,a)=>{const i=e.isWithinRange(t,n?Xu(n):void 0,a?Xu(a):void 0),o=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!o}}(nd||(nd={}));const id=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},od=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},sd=[1,3,5,7,8,10,12],ld=[4,6,9,11];var cd,ud,dd;!function(e){e.clampDay=(t,r,n)=>{const a=parseInt(t),i=parseInt(r),o=parseInt(n);return 0==a?"1":sd.includes(i)?Math.min(a,31).toString():ld.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Xu(e,r);return Xu(t,r).diff(n,"minute")},e.toDayjs=e=>e?Xu(e):Xu(),e.addMinutesToTime=(e,t,r="HH:mm")=>Xu(e,r).add(t,"minutes").format(r)}(cd||(cd={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:a}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!Xu(e).isBefore(n,"day"))||!(!a||!Xu(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(Xu(e).isValid())return e}return""}}(ud||(ud={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(dd||(dd={}));const hd=x.input`
    ${Ac("Body","regular")}
    color: ${gc.Neutral[1]};

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
        color: ${gc.Neutral[3]};
    }

    ${e=>"number"===e.type?_`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?_`
                cursor: not-allowed;
            `:void 0}
`,fd=x.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${gc.Neutral[3]};
    background-color: transparent;
    border: none;
`,pd=x(A)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,md=x.div`
    display: flex;
    width: 100%;
`,gd=d.forwardRef(((n,a)=>{var{value:i,spacing:o,type:s,error:l,disabled:c,readOnly:u,onChange:d,onClear:h,allowClear:p=!1,className:m,styleType:g="bordered"}=n,y=H(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const v=f();w(a,(()=>v.current),[]);const b=function({ref:e,formatter:t}){return()=>{const r=e.current,n=r.value,a=t(n),i=n.substring(0,r.selectionEnd),o=t(i),s=i.length-o.length,l=Math.max(0,r.selectionEnd-s);return{nextValue:a,updateCaretPosition:()=>{r.value=a,r.setSelectionRange(l,l)}}}}({ref:v,formatter:e=>qc.transformWithSpaces(e,o)}),$=e=>{d&&(S()?_(e):d(e))},x=()=>{h&&h(),v&&v.current&&v.current.focus()},S=()=>"tel"===s&&o,_=e=>{const{nextValue:t,updateCaretPosition:r}=b(),n=t.replace(/\s/g,"");e.target.value=n,d(e),r()},F=i?(e=>e?S()?qc.transformWithSpaces(e,o):e:"")(i):i,O=()=>e(r,{children:[t(hd,Object.assign({"data-testid":"input",ref:v,disabled:c,value:F,onChange:$,type:s,readOnly:u},y)),p&&!c&&!u&&!!i&&t(fd,Object.assign({onClick:x,type:"button"},{children:t(pd,{"aria-hidden":!0})}))]});return t(r,{children:"no-border"===g?t(md,Object.assign({className:m},{children:O()})):t(vu,Object.assign({$disabled:c,$error:l,$readOnly:u,className:m},{children:O()}))})})),yd=x.nav`
    display: flex;
`,vd=x.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${bc.tablet} {
        align-self: center;
    }
`,bd=x.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,wd=x(fu)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${gc.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${gc.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${gc.Accent.Light[1]};
    }
`,$d=x(fu)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${gc.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${gc.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${gc.Accent.Light[1]};
    }
    ${e=>"left"===e.$position?_`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:_`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${bc.mobileS} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,xd=x(Wu.Default)`
    background: ${e=>e.$selected?gc.Primary:gc.Neutral[8]};
    border: 1px solid
        ${e=>e.$selected?gc.Primary:gc.Neutral[5]};
    color: ${e=>e.$selected?gc.Neutral[8]:gc.Neutral[1]};

    min-width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    margin: 0.25rem;
    cursor: pointer;

    span {
        color: ${e=>e.$selected?gc.Neutral[8]:gc.Neutral[1]};
        ${e=>e.$selected?_`
                    ${Ac("Body",700)};
                `:_`
                    ${Ac("Body",400)};
                `}
    }
    :hover {
        box-shadow: none;

        background: ${e=>e.$selected?gc.Primary:gc.Accent.Light[5]};
        border: 1px solid
            ${e=>e.$selected?gc.Primary:gc.Accent.Light[5]};
        span {
            color: ${e=>e.$selected?gc.Neutral[8]:gc.Primary};
            ${e=>e.$selected?_`
                        ${Ac("Body",700)};
                    `:_`
                        ${Ac("Body",600)};
                    `}
        }
    }

    :active,
    :focus {
        background: ${e=>e.$selected?gc.Primary:gc.Neutral[8]};
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${gc.Accent.Light[1]};
        span {
            color: ${e=>e.$selected?gc.Neutral[8]:gc.Primary};

            ${e=>e.$selected?_`
                        ${Ac("Body",700)};
                    `:_`
                        ${Ac("Body",400)};
                    `}
        }
    }
`;x(fu)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${gc.Neutral[3]};
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    white-space: nowrap;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover {
        svg {
            color: ${gc.Neutral[3]};
        }
    }

    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${gc.Accent.Light[1]};
    }
`;const Sd=x.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;
    position: relative;
`,_d=x.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${gc.Neutral[1]};

    display: flex;
    justify-content: center;
`,Fd=x(Ic.Body)`
    white-space: nowrap;
`,Od=x(Ic.Body)`
    white-space: nowrap;
    margin: 0 1rem;
`,Dd=x(gd)`
    ${Ac("Body",400)};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${gc.Neutral[5]};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${Ac("XSmall",400)};
        }
    }
`,kd=x.div`
    ${Ac("XSmall",400)};

    background-color: ${gc.Primary};
    border: none;
    border-radius: 0.25rem;
    color: ${gc.Neutral[8]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,Bd=x.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,jd=d.forwardRef((({id:r,"data-testid":u,className:d,pageSize:f=10,totalItems:m,activePage:g,pageSizeOptions:y=Cd,showFirstAndLastNav:v,showPageSizeChanger:b=!1,onPageChange:w,onPageSizeChange:$},x)=>{const S=L.useMediaQuery({maxWidth:yc.mobileL}),_=y,[F,O]=h(!1),[D,k]=h(!1),[B,j]=h(""),[C,E]=h(_&&_.length>=1?_[0]:null),[M,A]=h(!S&&b&&C?C.value:f),P=Math.ceil(m/M),I=1===g,T=g===P,z=g>1?()=>Q(1):void 0,H=g<P?()=>Q(P):void 0,N=g>1?()=>Q(g-1):void 0,R=g<P?()=>Q(parseInt(g.toString())+1):void 0,W=e=>e?()=>ee():()=>J(),V=e=>e?()=>te():()=>K();p((()=>{g&&Y(g)}),[g]),p((()=>{var e;A(f),E(null!==(e=_.find((e=>e.value===f)))&&void 0!==e?e:null)}),[f]);const Y=e=>{j(e.toString())},q=()=>{O(!1),k(!1)},Q=e=>{w&&(w(e),Y(e))},U=()=>{const e=Math.min(P,g+5);Q(e),Y(e),O(!0),k(!1)},Z=()=>{const e=Math.max(1,g-5);Q(e),Y(e),O(!1),k(!0)},G=e=>{const t=e.target.value;if(void 0===t||0===t.length)j("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));Y(Math.max(1,Math.min(P,e)))}else j(t.replace(/[^0-9]/g,""))},X=e=>{e.preventDefault(),B&&w(parseInt(B))},J=()=>{O(!0)},K=()=>{O(!1)},ee=()=>{k(!0)},te=()=>{k(!1)},re=(r,i,o)=>e(Sd,{children:[t(wd,Object.assign({focusHighlight:!1,focusOutline:"browser","aria-label":r?"Previous 5 pages":"Next 5 pages",onMouseOver:W(r),onMouseOut:V(r),onFocus:W(r),onBlur:V(r),onClick:r?Z:U},{children:t(r&&D?n:i&&F?a:c,{"aria-hidden":!0})})),r&&D&&t(kd,{children:"Previous 5 pages"}),i&&F&&t(kd,{children:"Next 5 pages"})]},o);return e(yd,Object.assign({className:d,ref:x,id:r||"pagination-wrapper","data-testid":u||"pagination","aria-label":"Pagination"},{children:[t(vd,{children:e(bd,{children:[v&&t($d,Object.assign({onClick:z,disabled:I,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser"},{children:t(o,{"aria-hidden":!0})})),t($d,Object.assign({onClick:N,disabled:I,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser"},{children:t(i,{"aria-hidden":!0})})),S?e(_d,{children:[t("form",Object.assign({onSubmit:X},{children:t(Dd,{value:B,onChange:G,autoComplete:"off",type:"numeric",id:(r||"pagination")+"-input","data-testid":(u||"pagination")+"-input"})})),t(Od,{children:"/"}),t(Fd,{children:P})]}):[...Array(P)].map(((e,r)=>{const n=r+1,a=P-5,i=g===n;if(P<=7)return t(xd,Object.assign({onClick:()=>Q(n),$selected:i,"aria-label":"Page "+n,"aria-current":!!i&&"page",onMouseOver:q,onFocus:q},{children:n}),n);const o=g+1>5&&2===n,s=g-1<=a&&n===P-1-1;return o||s?re(o,s,n):n<=5&&g+1<=5||n<=1||n===g||n<=g+1&&n>=g-1-1||n>a&&g-1>a||n>P-1?t(xd,Object.assign({onClick:()=>Q(n),$selected:i,"aria-label":"Page "+n,"aria-current":!!i&&"page",onMouseOver:q,onFocus:q},{children:n}),n):null})),t($d,Object.assign({onClick:R,disabled:T,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser"},{children:t(l,{"aria-hidden":!0})})),v&&t($d,Object.assign({onClick:H,disabled:T,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser"},{children:t(s,{"aria-hidden":!0})}))]})}),b&&!S&&t(Bd,{children:t(Ru,{options:_,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:C,onSelectOption:e=>{E(e);const t=e.value,r=Math.ceil(m/t);A(t);$&&$(g>=r?r:g,t)}})})]}))})),Cd=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}];export{jd as Pagination};
//# sourceMappingURL=index.js.map
