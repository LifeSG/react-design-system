import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import r,{useState as o,useEffect as i,useRef as a}from"react";import{useFloatingTree as s,FloatingTree as l,useFloatingNodeId as c,FloatingNode as u,useFloating as d,autoUpdate as f,offset as h,flip as p,shift as m,limitShift as g,useClick as y,useDismiss as v,useHover as b,useInteractions as S,FloatingPortal as F,FloatingFocusManager as D}from"@floating-ui/react";import $ from"react-dom";import x,{css as w}from"styled-components";import{ExternalIcon as O}from"@lifesg/react-icons/external";import{CrossIcon as B}from"@lifesg/react-icons/cross";function E(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;var H="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function k(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _,j={exports:{}};_=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \***************************************************/(e,t,n)=>{var r,o=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,l){for(var c in e)if(a(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((s||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[c](t,c,s,n,null,o)}catch(e){u=e}if(!u||u instanceof Error||r((s||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in i)){i[u.message]=!0;var f=l?l():"";r("Failed "+n+" type: "+u.message+(null!=f?f:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,n)=>{var r,o=n(/*! react-is */"./node_modules/react-is/index.js"),i=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="<<anonymous>>",d={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:p(c),arrayOf:function(e){return p((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new h("Invalid "+o+" `"+i+"` of type `"+v(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,o,i+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:p((function(t,n,r,o,i){var a=t[n];return e(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:p((function(e,t,n,r,i){var a=e[t];return o.isValidElementType(a)?null:new h("Invalid "+r+" `"+i+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||u;return new h("Invalid "+o+" `"+i+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:p((function(e,t,n,r,o){return y(e[t])?null:new h("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=v(l);if("object"!==c)return new h("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var u in l)if(s(l,u)){var d=e(l,u,r,o,i+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,n,r,o,i){for(var a=t[n],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===b(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+S(n)+" at index "+t+"."),c}return p((function(t,n,r,o,i){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,n,r,o,i,a);if(null==u)return null;u.data&&s(u.data,"expectedType")&&l.push(u.data.expectedType)}return new h("Invalid "+o+" `"+i+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,n,r,o,i){var s=t[n],l=v(s);if("object"!==l)return new h("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return g(r,o,i,c,b(u));var d=u(s,c,r,o,i+"."+c,a);if(d)return d}return null}))},exact:function(e){return p((function(t,n,r,o,l){var c=t[n],u=v(c);if("object"!==u)return new h("Invalid "+o+" `"+l+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=i({},t[n],e);for(var f in d){var p=e[f];if(s(e,f)&&"function"!=typeof p)return g(r,o,l,f,b(p));if(!p)return new h("Invalid "+o+" `"+l+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=p(c,f,r,o,l+"."+f,a);if(m)return m}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){var n={},o=0;function i(i,s,l,c,d,f,p){if(c=c||u,f=f||l,p!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!n[g]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,o++)}}return null==s[l]?i?null===s[l]?new h("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new h("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,d,f)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function m(e){return p((function(t,n,r,o,i,a){var s=t[n];return v(s)!==e?new h("Invalid "+o+" `"+i+"` of type `"+b(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function g(e,t,n,r,o){return new h((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function y(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(y);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!y(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!y(a[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function b(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function S(e){var t=b(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,d.checkPropTypes=l,d.resetWarningCache=l.resetWarningCache,d.PropTypes=d,d}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var h=e.type;switch(h){case c:case u:case o:case a:case i:case f:return h;default:var g=h&&h.$$typeof;switch(g){case l:case d:case m:case p:case s:return g;default:return t}}case r:return t}}}var F=c,D=u,$=l,x=s,w=n,O=d,B=o,E=m,H=p,k=r,_=a,j=i,C=f,M=!1;function A(e){return S(e)===u}t.AsyncMode=F,t.ConcurrentMode=D,t.ContextConsumer=$,t.ContextProvider=x,t.Element=w,t.ForwardRef=O,t.Fragment=B,t.Lazy=E,t.Memo=H,t.Portal=k,t.Profiler=_,t.StrictMode=j,t.Suspense=C,t.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||S(e)===c},t.isConcurrentMode=A,t.isContextConsumer=function(e){return S(e)===l},t.isContextProvider=function(e){return S(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return S(e)===d},t.isFragment=function(e){return S(e)===o},t.isLazy=function(e){return S(e)===m},t.isMemo=function(e){return S(e)===p},t.isPortal=function(e){return S(e)===r},t.isProfiler=function(e){return S(e)===a},t.isStrictMode=function(e){return S(e)===i},t.isSuspense=function(e){return S(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=S}()},"./node_modules/react-is/index.js":
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
	  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},u=o(c,["type"]),d=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},u),f=r(r({},l),d);t.default={all:f,types:l,matchers:c,features:d}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,o.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(/*! react */"react"),i=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},d=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,o.useState)(t),r=n[0],i=n[1];return(0,o.useEffect)((function(){var e=t();r!==e&&i(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,o.useContext)(c.default),n=function(){return u(e)||u(t)},r=(0,o.useState)(n),i=r[0],a=r[1];return(0,o.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var n=function(){return(0,i.default)(e,t||{},!!t)},r=(0,o.useState)(n),a=r[0],s=r[1],l=d();return(0,o.useEffect)((function(){if(l){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),h=function(e){var t=(0,o.useState)(e.matches),n=t[0],r=t[1];return(0,o.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(l),p=d();return(0,o.useEffect)((function(){p&&n&&n(h)}),[h]),(0,o.useEffect)((function(){return function(){l&&l.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var C=j.exports=_(r),M={exports:{}};M.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",S={};S[b]=g;var F="$isDayjsObject",D=function(e){return e instanceof O||!(!e||!e[F])},$=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();S[i]&&(o=i),n&&(S[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;S[s]=t,o=s}return!r&&o&&(b=o),o||!r&&b},x=function(e,t){if(D(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new O(n)},w=v;w.l=$,w.i=D,w.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function g(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!w.u(t)||t,u=w.p(e),h=function(e,t){var o=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(s)},p=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,g):h(0,g+1);case l:var b=this.$locale().weekStart||0,S=(m<b?m+7:m)-b;return h(r?y-S:y+(6-S),g);case s:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=w.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[s]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(f,1);m.$d[h](p),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[w.p(e)]()},y.add=function(r,u){var f,h=this;r=Number(r);var p=w.p(u),m=function(e){var t=x(h);return w.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return m(1);if(p===l)return m(7);var g=(f={},f[i]=t,f[a]=n,f[o]=e,f)[p]||1,y=this.$d.getTime()+r*g;return w.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=w.z(this),i=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return w.s(i%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return w.s(t.$y,4,"0");case"M":return s+1;case"MM":return w.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return w.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return w.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return w.s(a,2,"0");case"s":return String(t.$s);case"ss":return w.s(t.$s,2,"0");case"SSS":return w.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,h){var p,m=this,g=w.p(f),y=x(r),v=(y.utcOffset()-this.utcOffset())*t,b=this-y,S=function(){return w.m(m,y)};switch(g){case d:p=S()/12;break;case c:p=S();break;case u:p=S()/3;break;case l:p=(b-v)/6048e5;break;case s:p=(b-v)/864e5;break;case a:p=b/n;break;case i:p=b/t;break;case o:p=b/e;break;default:p=b}return h?p:w.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return S[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),B=O.prototype;return x.prototype=B,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){B[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,O,x),e.$i=!0),x},x.locale=$,x.isDayjs=D,x.unix=function(e){return x(1e3*e)},x.en=S[b],x.Ls=S,x.p={},x}();var A=k(M.exports),z={exports:{}};z.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,o=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},s=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=a.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},f={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],Q:[n,function(e){this.month=3*(e-1)+1}],S:[n,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[o,l("seconds")],ss:[o,l("seconds")],m:[o,l("minutes")],mm:[o,l("minutes")],H:[o,l("hours")],h:[o,l("hours")],HH:[o,l("hours")],hh:[o,l("hours")],D:[o,l("day")],DD:[r,l("day")],Do:[i,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],w:[o,l("week")],ww:[r,l("week")],M:[o,l("month")],MM:[r,l("month")],MMM:[i,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,l("year")],Z:c,ZZ:c};function h(n){var r,o;r=n,o=a&&a.formats;for(var i=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=i.length,l=0;l<s;l+=1){var c=i[l],u=f[c],d=u&&u[0],h=u&&u[1];i[l]=h?{regex:d,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var o=i[n];if("string"==typeof o)r+=o.length;else{var a=o.regex,l=o.parser,c=e.slice(r),u=a.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,i=e.args;this.$u=r;var s=i[1];if("string"==typeof s){var l=!0===i[2],c=!0===i[3],u=l||c,d=i[2];c&&(d=i[2]),a=this.$locale(),!l&&d&&(a=n.Ls[d]),this.$d=function(e,t,n,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var o=h(t)(e),i=o.year,a=o.month,s=o.day,l=o.hours,c=o.minutes,u=o.seconds,d=o.milliseconds,f=o.zone,p=o.week,m=new Date,g=s||(i||a?1:m.getDate()),y=i||m.getFullYear(),v=0;i&&!a||(v=a>0?a-1:m.getMonth());var b,S=l||0,F=c||0,D=u||0,$=d||0;return f?new Date(Date.UTC(y,v,g,S,F,D,$+60*f.offset*1e3)):n?new Date(Date.UTC(y,v,g,S,F,D,$)):(b=new Date(y,v,g,S,F,D,$),p&&(b=r(b).week(p).toDate()),b)}catch(e){return new Date("")}}(t,s,r,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){i[1]=s[p-1];var m=n.apply(this,i);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===f&&(this.$d=new Date(""))}else o.call(this,e)}}}();var T=k(z.exports),P={exports:{}};P.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var L=k(P.exports),I={exports:{}};I.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var W=k(I.exports),R={exports:{}};R.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var V,Y,N,J=k(R.exports),Z={exports:{}},q=k(Z.exports=(V={year:0,month:1,day:2,hour:3,minute:4,second:5},Y={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=Y[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Y[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=V[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o,i=this.utcOffset(),a=this.toDate(),s=a.toLocaleString("en-US",{timeZone:e}),l=Math.round((a-new Date(s))/1e3/60),c=15*-Math.round(a.getTimezoneOffset()/15)-l;if(Number(c)){if(o=n(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(c,!0),t){var u=o.utcOffset();o=o.add(i-u,"minute")}}else o=this.utcOffset(0,t);return o.$x.$timezone=e,o},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,s=o||t||r,l=i(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}));A.extend(L),A.extend(J),A.extend(W),A.extend(T),A.extend(q),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=A(t).startOf("week");return Q(n).map((e=>U(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return U(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(A(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+A(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=A(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?A(r):void 0,o?A(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(N||(N={}));const Q=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},U=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},X=[1,3,5,7,8,10,12],G=[4,6,9,11];var K,ee,te,ne;!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":X.includes(i)?Math.min(o,31).toString():G.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=A(e,n);return A(t,n).diff(r,"minute")},e.toDayjs=e=>e?A(e):A(),e.addMinutesToTime=(e,t,n="HH:mm")=>A(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>A(e).isSame(A(t),n)}(K||(K={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!A(e).isBefore(r,"day"))||!(!o||!A(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(A(e).isValid())return e}return""}}(ee||(ee={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(te||(te={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const o=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(ne||(ne={}));const re=x.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return w`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,oe=x.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=w`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=w`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=w`
                transition: none;
            `),t}}
`;var ie;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(ie||(ie={}));const ae=({show:t=!1,rootId:n,onOverlayClick:l,children:d,backgroundOpacity:f,backgroundBlur:h=!0,disableTransition:p=!1,enableOverlayClick:m=!1,zIndex:g,id:y})=>{const[v,b]=o(null),[S,F]=o(),[D]=o((()=>te.generate())),x=c(),w=a(),O=a(null),B=d&&r.cloneElement(d,{ref:O}),E=y?`lifesg-ds-overlay-root-${y}`:"lifesg-ds-overlay-root",H=null!=g?g:S?99999:99998;(e=>{const t=s();i((()=>{if(!t)return;const n={zIndex:e};t.events.emit(ie.Change,n)}),[t,e]),i((()=>{if(!t)return;const n=()=>{const n={zIndex:e};t.events.emit(ie.Change,n)};return null==t||t.events.on(ie.Ready,n),()=>null==t?void 0:t.events.off(ie.Ready,n)}),[t,e])})(H),i((()=>(M(),b(j()),()=>{P(),z().length<1&&(L("remove"),W(),A("remove"))})),[]),i((()=>{if(t){const e=C();k(e),T(),_()&&1===z().length&&(I(),L("add"));const t=setTimeout((()=>{A("add")}),200);return()=>clearTimeout(t)}{P(),_()&&z().length<1&&(L("remove"),W());const e=setTimeout((()=>{z().length<1&&A("remove")}),200);return()=>clearTimeout(e)}}),[t]);const k=e=>{w.current=e,F(e)},_=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),j=()=>document&&n?document.getElementById(n):document?document.body:null,C=()=>z().length>0,M=()=>{if(!document.getElementById(le)){const e=document.createElement("style");e.id=le;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${ce} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${ce}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${ue} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${de}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},A=e=>{const t=document.body.classList.contains(ce);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(ce):document.body.classList.add(ce)},z=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},T=()=>{const e=z();document.body.dataset.lifesgDsOverlayOrder=[...e,D].join(",")},P=()=>{const e=z();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==D)).join(",")},L=e=>{if(!_())return;const t=document.body.classList.contains(ue);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(ue):document.body.classList.add(ue)},I=()=>{const e=document.body.style,t=e.top?e.top:window.scrollY+"px";document.body.style.setProperty(de,t)},W=()=>{const e=document.body.style.getPropertyValue(de);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(e)})}))},R=e=>{var t;const n=null===(t=O.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||l&&m&&(e.preventDefault(),l())};return v?$.createPortal(e(re,Object.assign({id:E,"data-testid":E,$show:t,$zIndex:H},{children:d&&e(u,Object.assign({id:x},{children:e(oe,Object.assign({"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:f||(S?.5:.8),$backgroundBlur:h,$disableTransition:p,onClick:R},{children:B}))}))})),v):null},se=t=>e(l,{children:e(ae,Object.assign({},t))}),le="lifesg-ds-overlay-stylesheet",ce="lifesg-ds-overlay-open",ue="lifesg-ds-overlay-scroll-lock",de="--lifesg-ds-overlay-scroll-y",fe={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},he=e=>Object.keys(fe).reduce(((t,n)=>{const r=fe[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),pe=he("max-width"),me=(he("min-width"),fe),ge=x.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${pe.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,ye=t=>{var{id:n="modal",show:r,animationFrom:a="bottom",children:s,enableOverlayClick:l=!0,rootComponentId:c,zIndex:u,onOverlayClick:d,dismissKeyboardOnShow:f=!0}=t,h=E(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[p,m]=o(),[g,y]=o();i((()=>window.visualViewport?(b(),window.visualViewport.addEventListener("resize",b),()=>{window.visualViewport.removeEventListener("resize",b)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),i((()=>{var e,t;r&&f&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const v=()=>{const e=.01*window.innerHeight;m(e)},b=()=>{const e=.01*window.visualViewport.height;m(e),y(window.visualViewport.offsetTop)};return e(se,Object.assign({"data-testid":`${n}-overlay`,show:r,enableOverlayClick:l,onOverlayClick:d,id:n,rootId:c,zIndex:u},{children:e(ge,Object.assign({show:r,animationFrom:a,"data-testid":n,verticalHeight:p,offsetTop:g},h,{children:s}))}))};var ve=Array.isArray,be="object"==typeof H&&H&&H.Object===Object&&H,Se="object"==typeof self&&self&&self.Object===Object&&self,Fe=be||Se||Function("return this")(),De=Fe.Symbol,$e=De,xe=Object.prototype,we=xe.hasOwnProperty,Oe=xe.toString,Be=$e?$e.toStringTag:void 0;var Ee=function(e){var t=we.call(e,Be),n=e[Be];try{e[Be]=void 0;var r=!0}catch(e){}var o=Oe.call(e);return r&&(t?e[Be]=n:delete e[Be]),o},He=Object.prototype.toString;var ke=Ee,_e=function(e){return He.call(e)},je=De?De.toStringTag:void 0;var Ce=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":je&&je in Object(e)?ke(e):_e(e)};var Me=Ce,Ae=function(e){return null!=e&&"object"==typeof e};var ze=function(e){return"symbol"==typeof e||Ae(e)&&"[object Symbol]"==Me(e)},Te=ve,Pe=ze,Le=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ie=/^\w*$/;var We=function(e,t){if(Te(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Pe(e))||(Ie.test(e)||!Le.test(e)||null!=t&&e in Object(t))};var Re=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ve=Ce,Ye=Re;var Ne,Je=function(e){if(!Ye(e))return!1;var t=Ve(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Ze=Fe["__core-js_shared__"],qe=(Ne=/[^.]+$/.exec(Ze&&Ze.keys&&Ze.keys.IE_PROTO||""))?"Symbol(src)_1."+Ne:"";var Qe=function(e){return!!qe&&qe in e},Ue=Function.prototype.toString;var Xe=Je,Ge=Qe,Ke=Re,et=function(e){if(null!=e){try{return Ue.call(e)}catch(e){}try{return e+""}catch(e){}}return""},tt=/^\[object .+?Constructor\]$/,nt=Function.prototype,rt=Object.prototype,ot=nt.toString,it=rt.hasOwnProperty,at=RegExp("^"+ot.call(it).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var st=function(e){return!(!Ke(e)||Ge(e))&&(Xe(e)?at:tt).test(et(e))},lt=function(e,t){return null==e?void 0:e[t]};var ct=function(e,t){var n=lt(e,t);return st(n)?n:void 0},ut=ct(Object,"create"),dt=ut;var ft=function(){this.__data__=dt?dt(null):{},this.size=0};var ht=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},pt=ut,mt=Object.prototype.hasOwnProperty;var gt=function(e){var t=this.__data__;if(pt){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return mt.call(t,e)?t[e]:void 0},yt=ut,vt=Object.prototype.hasOwnProperty;var bt=ut;var St=ft,Ft=ht,Dt=gt,$t=function(e){var t=this.__data__;return yt?void 0!==t[e]:vt.call(t,e)},xt=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=bt&&void 0===t?"__lodash_hash_undefined__":t,this};function wt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}wt.prototype.clear=St,wt.prototype.delete=Ft,wt.prototype.get=Dt,wt.prototype.has=$t,wt.prototype.set=xt;var Ot=wt;var Bt=function(){this.__data__=[],this.size=0};var Et=function(e,t){return e===t||e!=e&&t!=t};var Ht=function(e,t){for(var n=e.length;n--;)if(Et(e[n][0],t))return n;return-1},kt=Ht,_t=Array.prototype.splice;var jt=Ht;var Ct=Ht;var Mt=Ht;var At=Bt,zt=function(e){var t=this.__data__,n=kt(t,e);return!(n<0)&&(n==t.length-1?t.pop():_t.call(t,n,1),--this.size,!0)},Tt=function(e){var t=this.__data__,n=jt(t,e);return n<0?void 0:t[n][1]},Pt=function(e){return Ct(this.__data__,e)>-1},Lt=function(e,t){var n=this.__data__,r=Mt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function It(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}It.prototype.clear=At,It.prototype.delete=zt,It.prototype.get=Tt,It.prototype.has=Pt,It.prototype.set=Lt;var Wt=It,Rt=ct(Fe,"Map"),Vt=Ot,Yt=Wt,Nt=Rt;var Jt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Zt=function(e,t){var n=e.__data__;return Jt(t)?n["string"==typeof t?"string":"hash"]:n.map},qt=Zt;var Qt=Zt;var Ut=Zt;var Xt=Zt;var Gt=function(){this.size=0,this.__data__={hash:new Vt,map:new(Nt||Yt),string:new Vt}},Kt=function(e){var t=qt(this,e).delete(e);return this.size-=t?1:0,t},en=function(e){return Qt(this,e).get(e)},tn=function(e){return Ut(this,e).has(e)},nn=function(e,t){var n=Xt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function rn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}rn.prototype.clear=Gt,rn.prototype.delete=Kt,rn.prototype.get=en,rn.prototype.has=tn,rn.prototype.set=nn;var on=rn;function an(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(an.Cache||on),n}an.Cache=on;var sn=an;var ln=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,cn=/\\(\\)?/g,un=function(e){var t=sn(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ln,(function(e,n,r,o){t.push(r?o.replace(cn,"$1"):n||e)})),t}));var dn=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},fn=ve,hn=ze,pn=De?De.prototype:void 0,mn=pn?pn.toString:void 0;var gn=function e(t){if("string"==typeof t)return t;if(fn(t))return dn(t,e)+"";if(hn(t))return mn?mn.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},yn=gn;var vn=ve,bn=We,Sn=un,Fn=function(e){return null==e?"":yn(e)};var Dn=ze;var $n=function(e,t){return vn(e)?e:bn(e,t)?[e]:Sn(Fn(e))},xn=function(e){if("string"==typeof e||Dn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var wn=function(e,t){for(var n=0,r=(t=$n(t,e)).length;null!=e&&n<r;)e=e[xn(t[n++])];return n&&n==r?e:void 0};var On=k((function(e,t,n){var r=null==e?void 0:wn(e,t);return void 0===r?n:r}));const Bn=(e,t,n)=>t?On(n,t)||On(e,t):n||e,En=(e,t)=>{const n=t||e.defaultValue;return On(e.collections,n)};var Hn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Hn||(Hn={}));const kn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},_n=e=>t=>{const n=t.theme,r=En(kn,n[Hn.colorScheme]);return n.options&&n.options.color?Bn(r,e,n.options.color):Bn(r,e)},jn=(_n("Brand.1"),_n("Brand.2"),_n("Brand.3"),_n("Brand.4"),_n("Brand.5"),_n("Brand.6"),_n("Primary")),Cn=(_n("PrimaryDark"),_n("Secondary")),Mn={Light:{1:_n("Accent.Light.1"),2:_n("Accent.Light.2"),3:_n("Accent.Light.3"),4:_n("Accent.Light.4"),5:_n("Accent.Light.5"),6:_n("Accent.Light.6")},Dark:{1:_n("Accent.Dark.1"),2:_n("Accent.Dark.2"),3:_n("Accent.Dark.3")}},An={1:_n("Neutral.1"),2:_n("Neutral.2"),3:_n("Neutral.3"),4:_n("Neutral.4"),5:_n("Neutral.5"),6:_n("Neutral.6"),7:_n("Neutral.7"),8:_n("Neutral.8")},zn=(_n("Validation.Green.Text"),_n("Validation.Green.Icon"),_n("Validation.Green.Border"),_n("Validation.Green.Background"),_n("Validation.Orange.Text"),_n("Validation.Orange.Icon"),_n("Validation.Orange.Border"),_n("Validation.Orange.Background"),_n("Validation.Orange.Badge"),_n("Validation.Red.Text"),_n("Validation.Red.Icon"),_n("Validation.Red.Border"),_n("Validation.Red.Background"),_n("Validation.Blue.Text"),_n("Validation.Blue.Icon"),_n("Validation.Blue.Border"),_n("Validation.Blue.Background"),_n("Shadow.Accent"),_n("Shadow.Red"),_n("Shadow.Elevation"),{OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"}),Tn={D1:{fontFamily:zn.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:zn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:zn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:zn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:zn.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:zn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:zn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:zn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:zn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:zn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:zn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:zn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:zn.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:zn.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Pn={D1:{fontFamily:zn.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:zn.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:zn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:zn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:zn.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:zn.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:zn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:zn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:zn.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:zn.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:zn.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:zn.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:zn.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:zn.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},Ln={collections:{base:Tn,oneservice:{D1:{fontFamily:zn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:zn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:zn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:zn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:zn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:zn.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:zn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:zn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:zn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:zn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:zn.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:zn.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:zn.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:zn.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Pn},defaultValue:"base"},In=e=>t=>{const n=t.theme,r=En(Ln,n[Hn.textStyleScheme]);return n.options&&n.options.textStyle?Bn(r,e,n.options.textStyle):Bn(r,e)},Wn={D1:{fontFamily:In("D1.fontFamily"),fontSize:In("D1.fontSize"),fontWeight:In("D1.fontWeight"),lineHeight:In("D1.lineHeight"),letterSpacing:In("D1.letterSpacing"),fontVariant:In("D1.fontVariant")},D2:{fontFamily:In("D2.fontFamily"),fontSize:In("D2.fontSize"),fontWeight:In("D2.fontWeight"),lineHeight:In("D2.lineHeight"),letterSpacing:In("D2.letterSpacing"),fontVariant:In("D2.fontVariant")},D3:{fontFamily:In("D3.fontFamily"),fontSize:In("D3.fontSize"),fontWeight:In("D3.fontWeight"),lineHeight:In("D3.lineHeight"),letterSpacing:In("D3.letterSpacing"),fontVariant:In("D3.fontVariant")},D4:{fontFamily:In("D4.fontFamily"),fontSize:In("D4.fontSize"),fontWeight:In("D4.fontWeight"),lineHeight:In("D4.lineHeight"),letterSpacing:In("D4.letterSpacing"),fontVariant:In("D4.fontVariant")},DBody:{fontFamily:In("DBody.fontFamily"),fontSize:In("DBody.fontSize"),fontWeight:In("DBody.fontWeight"),lineHeight:In("DBody.lineHeight"),letterSpacing:In("DBody.letterSpacing"),fontVariant:In("DBody.fontVariant")},H1:{fontFamily:In("H1.fontFamily"),fontSize:In("H1.fontSize"),fontWeight:In("H1.fontWeight"),lineHeight:In("H1.lineHeight"),letterSpacing:In("H1.letterSpacing"),fontVariant:In("H1.fontVariant")},H2:{fontFamily:In("H2.fontFamily"),fontSize:In("H2.fontSize"),fontWeight:In("H2.fontWeight"),lineHeight:In("H2.lineHeight"),letterSpacing:In("H2.letterSpacing"),fontVariant:In("H2.fontVariant")},H3:{fontFamily:In("H3.fontFamily"),fontSize:In("H3.fontSize"),fontWeight:In("H3.fontWeight"),lineHeight:In("H3.lineHeight"),letterSpacing:In("H3.letterSpacing"),fontVariant:In("H3.fontVariant")},H4:{fontFamily:In("H4.fontFamily"),fontSize:In("H4.fontSize"),fontWeight:In("H4.fontWeight"),lineHeight:In("H4.lineHeight"),letterSpacing:In("H4.letterSpacing"),fontVariant:In("H4.fontVariant")},H5:{fontFamily:In("H5.fontFamily"),fontSize:In("H5.fontSize"),fontWeight:In("H5.fontWeight"),lineHeight:In("H5.lineHeight"),letterSpacing:In("H5.letterSpacing"),fontVariant:In("H5.fontVariant")},H6:{fontFamily:In("H6.fontFamily"),fontSize:In("H6.fontSize"),fontWeight:In("H6.fontWeight"),lineHeight:In("H6.lineHeight"),letterSpacing:In("H6.letterSpacing"),fontVariant:In("H6.fontVariant")},Body:{fontFamily:In("Body.fontFamily"),fontSize:In("Body.fontSize"),fontWeight:In("Body.fontWeight"),lineHeight:In("Body.lineHeight"),letterSpacing:In("Body.letterSpacing"),fontVariant:In("Body.fontVariant")},BodySmall:{fontFamily:In("BodySmall.fontFamily"),fontSize:In("BodySmall.fontSize"),fontWeight:In("BodySmall.fontWeight"),lineHeight:In("BodySmall.lineHeight"),letterSpacing:In("BodySmall.letterSpacing"),fontVariant:In("BodySmall.fontVariant")},XSmall:{fontFamily:In("XSmall.fontFamily"),fontSize:In("XSmall.fontSize"),fontWeight:In("XSmall.fontWeight"),lineHeight:In("XSmall.lineHeight"),letterSpacing:In("XSmall.letterSpacing"),fontVariant:In("XSmall.fontVariant")}},Rn=[zn.OpenSans,zn.PlusJakartaSans],Vn=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Yn=(e,t)=>n=>{var r;const o=Wn[e].fontFamily(n),i=Wn[e].fontWeight(n),a=Rn.find((e=>Object.values(e).includes(o)));return a?w`
                font-family: ${Vn(a,t)||Vn(a,i)||o};
                font-weight: normal !important;
            `:w`
            font-family: ${o};
            font-weight: ${null!==(r=Nn(t)||i)&&void 0!==r?r:"normal"};
        `},Nn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Jn=e=>{if(e>0)return w`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Zn=(e,t,n=!1)=>r=>{const o=Wn[e],i=o.fontSize(r);return w`
            ${Yn(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            font-variant: ${o.fontVariant(r)||"normal"};
            ${w`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},qn=(e=!1,t=!1,n=void 0)=>t?w`
            display: block;
            ${Jn(n)}
        `:e?w`
            display: inline;
        `:w`
            display: block;
            ${Jn(n)}
        `;var Qn;!function(e){e.D1=x.h1`
        ${e=>w`
                ${Zn("D1",e.weight,e.paragraph)}
                color: ${An[1]};
                ${qn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=x.h1`
        ${e=>w`
                ${Zn("D2",e.weight,e.paragraph)}
                color: ${An[1]};
                ${qn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=x.h1`
        ${e=>w`
                ${Zn("D3",e.weight,e.paragraph)}
                color: ${An[1]};
                ${qn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=x.h1`
        ${e=>w`
                ${Zn("D4",e.weight,e.paragraph)}
                color: ${An[1]};
                ${qn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=x.h1`
        ${e=>w`
                ${Zn("DBody",e.weight,e.paragraph)}
                color: ${An[1]};
                ${qn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=x.h1`
        ${e=>w`
                ${Zn("H1",e.weight,e.paragraph)}
                color: ${An[1]};
                ${qn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=x.h2`
        ${e=>w`
                ${Zn("H2",e.weight,e.paragraph)}
                color: ${An[1]};
                ${qn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=x.h3`
        ${e=>w`
                ${Zn("H3",e.weight,e.paragraph)}
                color: ${An[1]};
                ${qn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=x.h4`
        ${e=>w`
                ${Zn("H4",e.weight,e.paragraph)}
                color: ${An[1]};
                ${qn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=x.h5`
        ${e=>w`
                ${Zn("H5",e.weight,e.paragraph)}
                color: ${An[1]};
                ${qn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=x.h6`
        ${e=>w`
                ${Zn("H6",e.weight,e.paragraph)}
                color: ${An[1]};
                ${qn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=x.p`
        ${e=>w`
                ${Zn("Body",e.weight,e.paragraph)}
                color: ${An[1]};
                ${qn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=x.p`
        ${e=>w`
                ${Zn("BodySmall",e.weight,e.paragraph)}
                color: ${An[1]};
                ${qn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=x.span`
        ${e=>w`
                ${Zn("XSmall",e.weight,e.paragraph)}
                color: ${An[1]};
                ${qn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Gn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Gn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Qn||(Qn={}));const Un=x.a`
    ${e=>w`
            ${Zn(e.textStyle,e.weight)}
            color: ${jn};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Cn};

                svg {
                    color: ${Cn};
                }
            }
        `}
`,Xn=x(O)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Gn=n=>{var{external:r=!1,children:o}=n,i=E(n,["external","children"]);return t(Un,Object.assign({},i,{children:[o,r&&e(Xn,{})]}))},Kn=x.div`
    border-radius: 0.5rem;
    background: ${An[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,er=x.button`
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

        ${({$highlight:e})=>e&&w`
                background-color: ${An[7]};
            `}
    }
`,tr=r.forwardRef(((t,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,s=E(t,["children","focusHighlight","focusOutline","type"]);return e(er,Object.assign({ref:n,$outline:i,$highlight:o,type:a},s,{children:r}))})),nr=x.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${An[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${pe.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,rr=x(tr)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${An[3]};

    :focus-visible {
        outline: 4px solid ${Mn.Light[1]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${pe.mobileL} {
        right: 1.25rem;
    }
`;var or;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(or||(or={}));const ir=e=>{const{textSize:t}=e||{};return w`
        // Text styling
        ${t&&Zn(t,"regular")}

        strong {
            font-family: ${zn.OpenSans.Semibold};
            ${t&&Zn(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${zn.OpenSans.Semibold};
            ${t&&Zn(t,"semibold")}
            color: ${jn};
            text-decoration: none;

            svg {
                color: ${jn};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Cn};

                svg {
                    color: ${Cn};
                }
            }
        }

        // List styling
        ul,
        ol {
            margin: 0;
            padding: 0;
            margin-left: 2.5rem;
        }

        ol {
            list-style: decimal;
        }

        ul {
            list-style: disc;
        }
    `},ar=x.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,sr=x((t=>{var{children:n}=t,r=E(t,["children"]);const o=r["data-testid"]||"card";return e(Kn,Object.assign({},r,{"data-testid":o},{children:"string"==typeof n?e(Qn.Body,{children:n}):n}))}))`
    color: ${An[1]};
    ${ir({textSize:"BodySmall"})}

    ${pe.mobileL} {
        display: none;
    }
`,lr=x((n=>{var{id:r="modal-box",children:o,onClose:i,showCloseButton:a=!0}=n,s=E(n,["id","children","onClose","showCloseButton"]);return t(nr,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&e(rr,Object.assign({onClick:i,"data-testid":"close-button",focusHighlight:!1},{children:e(B,{})})),o]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,cr=x.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${An[1]};
    ${ir({textSize:"BodySmall"})}
`,ur=r=>{var{children:o,visible:i,onMobileClose:a}=r,s=E(r,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=C.useMediaQuery({maxWidth:fe.mobileL}),u=()=>{a&&a()},d=()=>"string"==typeof o?e(Qn.BodySmall,{children:o}):o;return t(n,{children:[i&&e(ar,Object.assign({"data-testid":l},s,{children:e(sr,{children:d()})})),c&&e(ye,Object.assign({show:i,onOverlayClick:u},{children:e(lr,Object.assign({onClose:u},{children:e(cr,{children:d()})}))}))]})},dr=x.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,fr=r=>{var l,c,{children:u,popoverContent:$,trigger:x="click",position:w="top",zIndex:O,rootNode:B,customOffset:H,delay:k,onPopoverAppear:_,onPopoverDismiss:j}=r,M=E(r,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[A,z]=o(!1),T=a(),P=a(),L=C.useMediaQuery({maxWidth:me.mobileL}),{refs:I,floatingStyles:W,context:R}=d({open:A,placement:w,whileElementsMounted:f,middleware:[h(null!=H?H:16),p(),m({limiter:g()})],onOpenChange:e=>{z(e),A!==e&&X(e)}}),V=(()=>{const[e,t]=o(void 0),n=s();return i((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on(ie.Change,e),n.events.emit(ie.Ready),()=>n.events.off(ie.Change,e)}),[n]),e})(),Y=L?"click":x,N=y(R,{ignoreMouse:"hover"===Y}),J=v(R),Z=b(R,{enabled:"hover"===Y,delay:{open:null!==(l=null==k?void 0:k.open)&&void 0!==l?l:0,close:null!==(c=null==k?void 0:k.close)&&void 0!==c?c:500}}),{getReferenceProps:q,getFloatingProps:Q}=S([N,J,Z]),U=()=>{z(!1),X(!1)},X=e=>{e&&_&&_(),!e&&j&&j()};return t(n,{children:[e(dr,Object.assign({ref:e=>{T.current=e,I.setReference(e)}},q({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),M,{children:u})),A&&e(F,Object.assign({root:B},{children:e(D,Object.assign({context:R},{children:e("div",Object.assign({ref:e=>{P.current=e,I.setFloating(e)},style:Object.assign(Object.assign({},W),{outline:"none",zIndex:null!=O?O:V})},Q(),{children:"function"==typeof $?$():e(ur,Object.assign({visible:!0,onMobileClose:U},{children:$}))}))}))}))]})},hr=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},pr=x.span`
    color: ${jn};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>hr(e)}

    &:hover,
    &:focus-visible {
        color: ${Cn};
        ${({$hoverStyle:e})=>hr(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,mr=x.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,gr=n=>{var{ariaLabel:r,content:o,icon:i,underlineStyle:a="default",underlineHoverStyle:s="default"}=n,l=E(n,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const c=!!o;return e(fr,Object.assign({},l,{children:t(pr,Object.assign({role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,"aria-label":null!=r?r:c?void 0:"More info"},{children:[o,i&&e(mr,Object.assign({$standalone:!c},{children:i}))]}))}))};export{gr as PopoverInline,fr as PopoverTrigger,ur as PopoverV2};
//# sourceMappingURL=index.js.map
