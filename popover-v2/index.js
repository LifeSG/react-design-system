import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import r,{useState as i,useEffect as o,useRef as a}from"react";import{useFloatingTree as s,FloatingTree as l,useFloatingNodeId as c,FloatingNode as u,useFloating as d,autoUpdate as f,offset as h,flip as p,shift as g,limitShift as m,useClick as y,useDismiss as v,useHover as b,useInteractions as S,FloatingPortal as F,FloatingFocusManager as D}from"@floating-ui/react";import $ from"react-dom";import x,{css as O}from"styled-components";import{ExternalIcon as w}from"@lifesg/react-icons/external";import{CrossIcon as B}from"@lifesg/react-icons/cross";function E(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var H="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function _(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var k,j={exports:{}};k=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \***************************************************/(e,t,n)=>{var r,i=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,l){for(var c in e)if(a(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((s||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[c](t,c,s,n,null,i)}catch(e){u=e}if(!u||u instanceof Error||r((s||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in o)){o[u.message]=!0;var f=l?l():"";r("Failed "+n+" type: "+u.message+(null!=f?f:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,n)=>{var r,i=n(/*! react-is */"./node_modules/react-is/index.js"),o=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",f={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:g(c),arrayOf:function(e){return g((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+i+" `"+o+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,i,o+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:g((function(t,n,r,i,o){var a=t[n];return e(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:g((function(e,t,n,r,o){var a=e[t];return i.isValidElementType(a)?null:new p("Invalid "+r+" `"+o+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(t,n,r,i,o){if(!(t[n]instanceof e)){var a=e.name||d;return new p("Invalid "+i+" `"+o+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:g((function(e,t,n,r,i){return v(e[t])?null:new p("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=b(l);if("object"!==c)return new p("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var u in l)if(s(l,u)){var d=e(l,u,r,i,o+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(t,n,r,i,o){for(var a=t[n],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===S(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+F(n)+" at index "+t+"."),c}return g((function(t,n,r,i,o){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,n,r,i,o,a);if(null==u)return null;u.data&&s(u.data,"expectedType")&&l.push(u.data.expectedType)}return new p("Invalid "+i+" `"+o+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(t,n,r,i,o){var s=t[n],l=b(s);if("object"!==l)return new p("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return y(r,i,o,c,S(u));var d=u(s,c,r,i,o+"."+c,a);if(d)return d}return null}))},exact:function(e){return g((function(t,n,r,i,l){var c=t[n],u=b(c);if("object"!==u)return new p("Invalid "+i+" `"+l+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=o({},t[n],e);for(var f in d){var h=e[f];if(s(e,f)&&"function"!=typeof h)return y(r,i,l,f,S(h));if(!h)return new p("Invalid "+i+" `"+l+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=h(c,f,r,i,l+"."+f,a);if(g)return g}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function g(e){var n={},i=0;function o(o,s,l,c,u,f,h){if(c=c||d,f=f||l,h!==a){if(t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var m=c+":"+l;!n[m]&&i<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[m]=!0,i++)}}return null==s[l]?o?null===s[l]?new p("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,f)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function m(e){return g((function(t,n,r,i,o,a){var s=t[n];return b(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+S(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,i){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var i,o=r.call(t);if(r!==t.entries){for(;!(i=o.next()).done;)if(!v(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function S(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function F(e){var t=S(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,f.checkPropTypes=l,f.resetWarningCache=l.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var h=e.type;switch(h){case c:case u:case i:case a:case o:case f:return h;default:var m=h&&h.$$typeof;switch(m){case l:case d:case g:case p:case s:return m;default:return t}}case r:return t}}}var F=c,D=u,$=l,x=s,O=n,w=d,B=i,E=g,H=p,_=r,k=a,j=o,C=f,M=!1;function A(e){return S(e)===u}t.AsyncMode=F,t.ConcurrentMode=D,t.ContextConsumer=$,t.ContextProvider=x,t.Element=O,t.ForwardRef=w,t.Fragment=B,t.Lazy=E,t.Memo=H,t.Portal=_,t.Profiler=k,t.StrictMode=j,t.Suspense=C,t.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||S(e)===c},t.isConcurrentMode=A,t.isContextConsumer=function(e){return S(e)===l},t.isContextProvider=function(e){return S(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return S(e)===d},t.isFragment=function(e){return S(e)===i},t.isLazy=function(e){return S(e)===g},t.isMemo=function(e){return S(e)===p},t.isPortal=function(e){return S(e)===r},t.isProfiler=function(e){return S(e)===a},t.isStrictMode=function(e){return S(e)===o},t.isSuspense=function(e){return S(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===u||e===a||e===o||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===m)},t.typeOf=S}()},"./node_modules/react-is/index.js":
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
	  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},u=i(c,["type"]),d=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},u),f=r(r({},l),d);t.default={all:f,types:l,matchers:c,features:d}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(/*! react */"react"),o=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},d=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,i.useState)(t),r=n[0],o=n[1];return(0,i.useEffect)((function(){var e=t();r!==e&&o(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,i.useContext)(c.default),n=function(){return u(e)||u(t)},r=(0,i.useState)(n),o=r[0],a=r[1];return(0,i.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,t]),o}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var n=function(){return(0,o.default)(e,t||{},!!t)},r=(0,i.useState)(n),a=r[0],s=r[1],l=d();return(0,i.useEffect)((function(){if(l){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),h=function(e){var t=(0,i.useState)(e.matches),n=t[0],r=t[1];return(0,i.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(l),p=d();return(0,i.useEffect)((function(){p&&n&&n(h)}),[h]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var C=j.exports=k(r),M={exports:{}};M.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],f=u&&u[0],h=u&&u[1];a[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(r),u=o.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,h=new Date,p=a||(i||o?1:h.getDate()),g=i||h.getFullYear(),m=0;i&&!o||(m=o>0?o-1:h.getMonth());var y=s||0,v=l||0,b=c||0,S=u||0;return d?new Date(Date.UTC(g,m,p,y,v,b,S+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,v,b,S)):new Date(g,m,p,y,v,b,S)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){a[1]=s[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var A,z,T=_(M.exports),P={exports:{}},I=_(P.exports=(A={year:0,month:1,day:2,hour:3,minute:4,second:5},z={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=z[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),z[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=A[l];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],f=24===d?0:d,h=o[0]+"-"+o[1]+"-"+o[2]+" "+f+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),W={exports:{}};W.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:f,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",S={};S[b]=m;var F="$isDayjsObject",D=function(e){return e instanceof w||!(!e||!e[F])},$=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();S[o]&&(i=o),n&&(S[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;S[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},x=function(e,t){if(D(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},O=v;O.l=$,O.i=D,O.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function m(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(O.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return O},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,n){return O.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!O.u(t)||t,u=O.p(e),h=function(e,t){var i=O.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return O.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case l:var b=this.$locale().weekStart||0,S=(g<b?g+7:g)-b;return h(r?y-S:y+(6-S),m);case s:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=O.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[s]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[O.p(e)]()},y.add=function(r,u){var f,h=this;r=Number(r);var p=O.p(u),g=function(e){var t=x(h);return O.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(f={},f[o]=t,f[a]=n,f[i]=e,f)[p]||1,y=this.$d.getTime()+r*m;return O.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},f=function(e){return O.s(o%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return O.s(t.$y,4,"0");case"M":return s+1;case"MM":return O.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return O.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return O.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return O.s(a,2,"0");case"s":return String(t.$s);case"ss":return O.s(t.$s,2,"0");case"SSS":return O.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,h){var p,g=this,m=O.p(f),y=x(r),v=(y.utcOffset()-this.utcOffset())*t,b=this-y,S=function(){return O.m(g,y)};switch(m){case d:p=S()/12;break;case c:p=S();break;case u:p=S()/3;break;case l:p=(b-v)/6048e5;break;case s:p=(b-v)/864e5;break;case a:p=b/n;break;case o:p=b/t;break;case i:p=b/e;break;default:p=b}return h?p:O.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return S[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return O.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),B=w.prototype;return x.prototype=B,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){B[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,w,x),e.$i=!0),x},x.locale=$,x.isDayjs=D,x.unix=function(e){return x(1e3*e)},x.en=S[b],x.Ls=S,x.p={},x}();var L=_(W.exports),R={exports:{}};R.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var Y=_(R.exports),V={exports:{}};V.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var N=_(V.exports),J={exports:{}};J.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Z,q=_(J.exports);L.extend(Y),L.extend(N),L.extend(q),L.extend(T),L.extend(I),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=L(t).startOf("week");return Q(n).map((e=>U(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return U(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(L(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+L(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=L(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const o=e.isWithinRange(t,r?L(r):void 0,i?L(i):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(Z||(Z={}));const Q=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},U=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},X=[1,3,5,7,8,10,12],G=[4,6,9,11];var K,ee,te,ne;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":X.includes(o)?Math.min(i,31).toString():G.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=L(e,n);return L(t,n).diff(r,"minute")},e.toDayjs=e=>e?L(e):L(),e.addMinutesToTime=(e,t,n="HH:mm")=>L(e,n).add(t,"minutes").format(n)}(K||(K={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!L(e).isBefore(r,"day"))||!(!i||!L(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(L(e).isValid())return e}return""}}(ee||(ee={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(te||(te={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,o);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+o.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,r+1)+o.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(ne||(ne={}));const re=x.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return O`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,ie=x.div`
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
`;var oe;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(oe||(oe={}));const ae=({show:t=!1,rootId:n,onOverlayClick:l,children:d,backgroundOpacity:f,backgroundBlur:h=!0,disableTransition:p=!1,enableOverlayClick:g=!1,zIndex:m,id:y})=>{const[v,b]=i(null),[S,F]=i(),[D]=i((()=>te.generate())),x=c(),O=a(),w=a(null),B=d&&r.cloneElement(d,{ref:w}),E=y?`lifesg-ds-overlay-root-${y}`:"lifesg-ds-overlay-root",H=(null!=m?m:S)?99999:99998;(e=>{const t=s();o((()=>{if(!t)return;const n={zIndex:e};t.events.emit(oe.Change,n)}),[t,e]),o((()=>{if(!t)return;const n=()=>{const n={zIndex:e};t.events.emit(oe.Change,n)};return null==t||t.events.on(oe.Ready,n),()=>null==t?void 0:t.events.off(oe.Ready,n)}),[t,e])})(H),o((()=>(C(),b(k()),()=>{T(),A().length<1&&M("remove")})),[]),o((()=>{if(t){const e=j();_(e),z();const t=setTimeout((()=>{M("add")}),200);return()=>clearTimeout(t)}{T();const e=setTimeout((()=>{A().length<1&&M("remove")}),200);return()=>clearTimeout(e)}}),[t]);const _=e=>{O.current=e,F(e)},k=()=>document&&n?document.getElementById(n):document?document.body:null,j=()=>A().length>0,C=()=>{if(!document.getElementById(le)){const e=document.createElement("style");e.id=le;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${ce} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${ce}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},M=e=>{const t=document.body.classList.contains(ce);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(ce):document.body.classList.add(ce)},A=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},z=()=>{const e=A();document.body.dataset.lifesgDsOverlayOrder=[...e,D].join(",")},T=()=>{const e=A();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==D)).join(",")},P=e=>{var t;const n=null===(t=w.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||l&&g&&(e.preventDefault(),l())};return v?$.createPortal(e(re,Object.assign({id:E,"data-testid":E,$show:t,$zIndex:H},{children:d&&e(u,Object.assign({id:x},{children:e(ie,Object.assign({"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:f||(S?.5:.8),$backgroundBlur:h,$disableTransition:p,onClick:P},{children:B}))}))})),v):null},se=t=>e(l,{children:e(ae,Object.assign({},t))}),le="lifesg-ds-overlay-stylesheet",ce="lifesg-ds-overlay-open",ue={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},de=e=>Object.keys(ue).reduce(((t,n)=>{const r=ue[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),fe=de("max-width"),he=(de("min-width"),ue),pe=x.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${fe.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,ge=t=>{var{id:n="modal",show:r,animationFrom:a="bottom",children:s,enableOverlayClick:l=!0,rootComponentId:c,zIndex:u,onOverlayClick:d,dismissKeyboardOnShow:f=!0}=t,h=E(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[p,g]=i(),[m,y]=i();o((()=>window.visualViewport?(b(),window.visualViewport.addEventListener("resize",b),()=>{window.visualViewport.removeEventListener("resize",b)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),o((()=>{var e,t;r&&f&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const v=()=>{const e=.01*window.innerHeight;g(e)},b=()=>{const e=.01*window.visualViewport.height;g(e),y(window.visualViewport.offsetTop)};return e(se,Object.assign({"data-testid":`${n}-overlay`,show:r,enableOverlayClick:l,onOverlayClick:d,id:n,rootId:c,zIndex:u},{children:e(pe,Object.assign({show:r,animationFrom:a,"data-testid":n,verticalHeight:p,offsetTop:m},h,{children:s}))}))};var me=Array.isArray,ye="object"==typeof H&&H&&H.Object===Object&&H,ve="object"==typeof self&&self&&self.Object===Object&&self,be=ye||ve||Function("return this")(),Se=be.Symbol,Fe=Se,De=Object.prototype,$e=De.hasOwnProperty,xe=De.toString,Oe=Fe?Fe.toStringTag:void 0;var we=function(e){var t=$e.call(e,Oe),n=e[Oe];try{e[Oe]=void 0;var r=!0}catch(e){}var i=xe.call(e);return r&&(t?e[Oe]=n:delete e[Oe]),i},Be=Object.prototype.toString;var Ee=we,He=function(e){return Be.call(e)},_e=Se?Se.toStringTag:void 0;var ke=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":_e&&_e in Object(e)?Ee(e):He(e)};var je=ke,Ce=function(e){return null!=e&&"object"==typeof e};var Me=function(e){return"symbol"==typeof e||Ce(e)&&"[object Symbol]"==je(e)},Ae=me,ze=Me,Te=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Pe=/^\w*$/;var Ie=function(e,t){if(Ae(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ze(e))||(Pe.test(e)||!Te.test(e)||null!=t&&e in Object(t))};var We=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Le=ke,Re=We;var Ye,Ve=function(e){if(!Re(e))return!1;var t=Le(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Ne=be["__core-js_shared__"],Je=(Ye=/[^.]+$/.exec(Ne&&Ne.keys&&Ne.keys.IE_PROTO||""))?"Symbol(src)_1."+Ye:"";var Ze=function(e){return!!Je&&Je in e},qe=Function.prototype.toString;var Qe=Ve,Ue=Ze,Xe=We,Ge=function(e){if(null!=e){try{return qe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ke=/^\[object .+?Constructor\]$/,et=Function.prototype,tt=Object.prototype,nt=et.toString,rt=tt.hasOwnProperty,it=RegExp("^"+nt.call(rt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ot=function(e){return!(!Xe(e)||Ue(e))&&(Qe(e)?it:Ke).test(Ge(e))},at=function(e,t){return null==e?void 0:e[t]};var st=function(e,t){var n=at(e,t);return ot(n)?n:void 0},lt=st(Object,"create"),ct=lt;var ut=function(){this.__data__=ct?ct(null):{},this.size=0};var dt=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ft=lt,ht=Object.prototype.hasOwnProperty;var pt=function(e){var t=this.__data__;if(ft){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ht.call(t,e)?t[e]:void 0},gt=lt,mt=Object.prototype.hasOwnProperty;var yt=lt;var vt=ut,bt=dt,St=pt,Ft=function(e){var t=this.__data__;return gt?void 0!==t[e]:mt.call(t,e)},Dt=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=yt&&void 0===t?"__lodash_hash_undefined__":t,this};function $t(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}$t.prototype.clear=vt,$t.prototype.delete=bt,$t.prototype.get=St,$t.prototype.has=Ft,$t.prototype.set=Dt;var xt=$t;var Ot=function(){this.__data__=[],this.size=0};var wt=function(e,t){return e===t||e!=e&&t!=t};var Bt=function(e,t){for(var n=e.length;n--;)if(wt(e[n][0],t))return n;return-1},Et=Bt,Ht=Array.prototype.splice;var _t=Bt;var kt=Bt;var jt=Bt;var Ct=Ot,Mt=function(e){var t=this.__data__,n=Et(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ht.call(t,n,1),--this.size,!0)},At=function(e){var t=this.__data__,n=_t(t,e);return n<0?void 0:t[n][1]},zt=function(e){return kt(this.__data__,e)>-1},Tt=function(e,t){var n=this.__data__,r=jt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Pt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Pt.prototype.clear=Ct,Pt.prototype.delete=Mt,Pt.prototype.get=At,Pt.prototype.has=zt,Pt.prototype.set=Tt;var It=Pt,Wt=st(be,"Map"),Lt=xt,Rt=It,Yt=Wt;var Vt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Nt=function(e,t){var n=e.__data__;return Vt(t)?n["string"==typeof t?"string":"hash"]:n.map},Jt=Nt;var Zt=Nt;var qt=Nt;var Qt=Nt;var Ut=function(){this.size=0,this.__data__={hash:new Lt,map:new(Yt||Rt),string:new Lt}},Xt=function(e){var t=Jt(this,e).delete(e);return this.size-=t?1:0,t},Gt=function(e){return Zt(this,e).get(e)},Kt=function(e){return qt(this,e).has(e)},en=function(e,t){var n=Qt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function tn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tn.prototype.clear=Ut,tn.prototype.delete=Xt,tn.prototype.get=Gt,tn.prototype.has=Kt,tn.prototype.set=en;var nn=tn;function rn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(rn.Cache||nn),n}rn.Cache=nn;var on=rn;var an=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,sn=/\\(\\)?/g,ln=function(e){var t=on(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(an,(function(e,n,r,i){t.push(r?i.replace(sn,"$1"):n||e)})),t}));var cn=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},un=me,dn=Me,fn=Se?Se.prototype:void 0,hn=fn?fn.toString:void 0;var pn=function e(t){if("string"==typeof t)return t;if(un(t))return cn(t,e)+"";if(dn(t))return hn?hn.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},gn=pn;var mn=me,yn=Ie,vn=ln,bn=function(e){return null==e?"":gn(e)};var Sn=Me;var Fn=function(e,t){return mn(e)?e:yn(e,t)?[e]:vn(bn(e))},Dn=function(e){if("string"==typeof e||Sn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var $n=function(e,t){for(var n=0,r=(t=Fn(t,e)).length;null!=e&&n<r;)e=e[Dn(t[n++])];return n&&n==r?e:void 0};var xn=_((function(e,t,n){var r=null==e?void 0:$n(e,t);return void 0===r?n:r}));const On=(e,t,n)=>t?xn(n,t)||xn(e,t):n||e,wn=(e,t)=>{const n=t||e.defaultValue;return xn(e.collections,n)};var Bn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Bn||(Bn={}));const En={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Hn=e=>t=>{const n=t.theme,r=wn(En,n[Bn.colorScheme]);return n.options&&n.options.color?On(r,e,n.options.color):On(r,e)},_n=(Hn("Brand.1"),Hn("Brand.2"),Hn("Brand.3"),Hn("Brand.4"),Hn("Brand.5"),Hn("Brand.6"),Hn("Primary")),kn=(Hn("PrimaryDark"),Hn("Secondary")),jn={Light:{1:Hn("Accent.Light.1"),2:Hn("Accent.Light.2"),3:Hn("Accent.Light.3"),4:Hn("Accent.Light.4"),5:Hn("Accent.Light.5"),6:Hn("Accent.Light.6")},Dark:{1:Hn("Accent.Dark.1"),2:Hn("Accent.Dark.2"),3:Hn("Accent.Dark.3")}},Cn={1:Hn("Neutral.1"),2:Hn("Neutral.2"),3:Hn("Neutral.3"),4:Hn("Neutral.4"),5:Hn("Neutral.5"),6:Hn("Neutral.6"),7:Hn("Neutral.7"),8:Hn("Neutral.8")},Mn=(Hn("Validation.Green.Text"),Hn("Validation.Green.Icon"),Hn("Validation.Green.Border"),Hn("Validation.Green.Background"),Hn("Validation.Orange.Text"),Hn("Validation.Orange.Icon"),Hn("Validation.Orange.Border"),Hn("Validation.Orange.Background"),Hn("Validation.Orange.Badge"),Hn("Validation.Red.Text"),Hn("Validation.Red.Icon"),Hn("Validation.Red.Border"),Hn("Validation.Red.Background"),Hn("Validation.Blue.Text"),Hn("Validation.Blue.Icon"),Hn("Validation.Blue.Border"),Hn("Validation.Blue.Background"),Hn("Shadow.Accent"),Hn("Shadow.Red"),Hn("Shadow.Elevation"),{OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"}),An={D1:{fontFamily:Mn.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Mn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Mn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Mn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Mn.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Mn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Mn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Mn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Mn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Mn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Mn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Mn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Mn.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Mn.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},zn={D1:{fontFamily:Mn.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Mn.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Mn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Mn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Mn.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Mn.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Mn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Mn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Mn.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Mn.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Mn.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Mn.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Mn.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Mn.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Tn={collections:{base:An,oneservice:{D1:{fontFamily:Mn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Mn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Mn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Mn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Mn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Mn.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Mn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Mn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Mn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Mn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Mn.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Mn.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Mn.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Mn.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:zn},defaultValue:"base"},Pn=e=>t=>{const n=t.theme,r=wn(Tn,n[Bn.textStyleScheme]);return n.options&&n.options.textStyle?On(r,e,n.options.textStyle):On(r,e)},In={D1:{fontFamily:Pn("D1.fontFamily"),fontSize:Pn("D1.fontSize"),fontWeight:Pn("D1.fontWeight"),lineHeight:Pn("D1.lineHeight"),letterSpacing:Pn("D1.letterSpacing")},D2:{fontFamily:Pn("D2.fontFamily"),fontSize:Pn("D2.fontSize"),fontWeight:Pn("D2.fontWeight"),lineHeight:Pn("D2.lineHeight"),letterSpacing:Pn("D2.letterSpacing")},D3:{fontFamily:Pn("D3.fontFamily"),fontSize:Pn("D3.fontSize"),fontWeight:Pn("D3.fontWeight"),lineHeight:Pn("D3.lineHeight"),letterSpacing:Pn("D3.letterSpacing")},D4:{fontFamily:Pn("D4.fontFamily"),fontSize:Pn("D4.fontSize"),fontWeight:Pn("D4.fontWeight"),lineHeight:Pn("D4.lineHeight"),letterSpacing:Pn("D4.letterSpacing")},DBody:{fontFamily:Pn("DBody.fontFamily"),fontSize:Pn("DBody.fontSize"),fontWeight:Pn("DBody.fontWeight"),lineHeight:Pn("DBody.lineHeight"),letterSpacing:Pn("DBody.letterSpacing")},H1:{fontFamily:Pn("H1.fontFamily"),fontSize:Pn("H1.fontSize"),fontWeight:Pn("H1.fontWeight"),lineHeight:Pn("H1.lineHeight"),letterSpacing:Pn("H1.letterSpacing")},H2:{fontFamily:Pn("H2.fontFamily"),fontSize:Pn("H2.fontSize"),fontWeight:Pn("H2.fontWeight"),lineHeight:Pn("H2.lineHeight"),letterSpacing:Pn("H2.letterSpacing")},H3:{fontFamily:Pn("H3.fontFamily"),fontSize:Pn("H3.fontSize"),fontWeight:Pn("H3.fontWeight"),lineHeight:Pn("H3.lineHeight"),letterSpacing:Pn("H3.letterSpacing")},H4:{fontFamily:Pn("H4.fontFamily"),fontSize:Pn("H4.fontSize"),fontWeight:Pn("H4.fontWeight"),lineHeight:Pn("H4.lineHeight"),letterSpacing:Pn("H4.letterSpacing")},H5:{fontFamily:Pn("H5.fontFamily"),fontSize:Pn("H5.fontSize"),fontWeight:Pn("H5.fontWeight"),lineHeight:Pn("H5.lineHeight"),letterSpacing:Pn("H5.letterSpacing")},H6:{fontFamily:Pn("H6.fontFamily"),fontSize:Pn("H6.fontSize"),fontWeight:Pn("H6.fontWeight"),lineHeight:Pn("H6.lineHeight"),letterSpacing:Pn("H6.letterSpacing")},Body:{fontFamily:Pn("Body.fontFamily"),fontSize:Pn("Body.fontSize"),fontWeight:Pn("Body.fontWeight"),lineHeight:Pn("Body.lineHeight"),letterSpacing:Pn("Body.letterSpacing")},BodySmall:{fontFamily:Pn("BodySmall.fontFamily"),fontSize:Pn("BodySmall.fontSize"),fontWeight:Pn("BodySmall.fontWeight"),lineHeight:Pn("BodySmall.lineHeight"),letterSpacing:Pn("BodySmall.letterSpacing")},XSmall:{fontFamily:Pn("XSmall.fontFamily"),fontSize:Pn("XSmall.fontSize"),fontWeight:Pn("XSmall.fontWeight"),lineHeight:Pn("XSmall.lineHeight"),letterSpacing:Pn("XSmall.letterSpacing")}},Wn=[Mn.OpenSans,Mn.PlusJakartaSans],Ln=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Rn=(e,t)=>n=>{var r;const i=In[e].fontFamily(n),o=In[e].fontWeight(n),a=Wn.find((e=>Object.values(e).includes(i)));return a?O`
                font-family: ${Ln(a,t)||Ln(a,o)||i};
                font-weight: normal !important;
            `:O`
            font-family: ${i};
            font-weight: ${null!==(r=Yn(t)||o)&&void 0!==r?r:"normal"};
        `},Yn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Vn=e=>{if(e>0)return O`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Nn=(e,t,n=!1)=>r=>{const i=In[e],o=i.fontSize(r);return O`
            ${Rn(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${O`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Jn=(e=!1,t=!1,n=void 0)=>t?O`
            display: block;
            ${Vn(n)}
        `:e?O`
            display: inline;
        `:O`
            display: block;
            ${Vn(n)}
        `;var Zn;!function(e){e.D1=x.h1`
        ${e=>O`
                ${Nn("D1",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${Jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=x.h1`
        ${e=>O`
                ${Nn("D2",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${Jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=x.h1`
        ${e=>O`
                ${Nn("D3",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${Jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=x.h1`
        ${e=>O`
                ${Nn("D4",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${Jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=x.h1`
        ${e=>O`
                ${Nn("DBody",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${Jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=x.h1`
        ${e=>O`
                ${Nn("H1",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${Jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=x.h2`
        ${e=>O`
                ${Nn("H2",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${Jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=x.h3`
        ${e=>O`
                ${Nn("H3",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${Jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=x.h4`
        ${e=>O`
                ${Nn("H4",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${Jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=x.h5`
        ${e=>O`
                ${Nn("H5",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${Jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=x.h6`
        ${e=>O`
                ${Nn("H6",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${Jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=x.p`
        ${e=>O`
                ${Nn("Body",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${Jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=x.p`
        ${e=>O`
                ${Nn("BodySmall",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${Jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=x.span`
        ${e=>O`
                ${Nn("XSmall",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${Jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Un(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Un(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Zn||(Zn={}));const qn=x.a`
    ${e=>O`
            ${Nn(e.textStyle,e.weight)}
            color: ${_n};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${kn};

                svg {
                    color: ${kn};
                }
            }
        `}
`,Qn=x(w)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Un=n=>{var{external:r=!1,children:i}=n,o=E(n,["external","children"]);return t(qn,Object.assign({},o,{children:[i,r&&e(Qn,{})]}))},Xn=x.div`
    border-radius: 0.5rem;
    background: ${Cn[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Gn=x.button`
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

        ${({$highlight:e})=>e&&O`
                background-color: ${Cn[7]};
            `}
    }
`,Kn=r.forwardRef(((t,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=t,s=E(t,["children","focusHighlight","focusOutline","type"]);return e(Gn,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),er=x.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Cn[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${fe.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,tr=x(Kn)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${Cn[3]};

    :focus-visible {
        outline: 4px solid ${jn.Light[1]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${fe.mobileL} {
        right: 1.25rem;
    }
`;var nr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(nr||(nr={}));const rr=e=>{const{textSize:t}=e||{};return O`
        // Text styling
        ${t&&Nn(t,"regular")}

        strong {
            font-family: ${Mn.OpenSans.Semibold};
            ${t&&Nn(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${Mn.OpenSans.Semibold};
            ${t&&Nn(t,"semibold")}
            color: ${_n};
            text-decoration: none;

            svg {
                color: ${_n};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${kn};

                svg {
                    color: ${kn};
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
    `},ir=x.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,or=x((t=>{var{children:n}=t,r=E(t,["children"]);const i=r["data-testid"]||"card";return e(Xn,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?e(Zn.Body,{children:n}):n}))}))`
    color: ${Cn[1]};
    ${rr({textSize:"BodySmall"})}

    ${fe.mobileL} {
        display: none;
    }
`,ar=x((n=>{var{id:r="modal-box",children:i,onClose:o,showCloseButton:a=!0}=n,s=E(n,["id","children","onClose","showCloseButton"]);return t(er,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&e(tr,Object.assign({onClick:o,"data-testid":"close-button",focusHighlight:!1},{children:e(B,{})})),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,sr=x.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Cn[1]};
    ${rr({textSize:"BodySmall"})}
`,lr=r=>{var{children:i,visible:o,onMobileClose:a}=r,s=E(r,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=C.useMediaQuery({maxWidth:ue.mobileL}),u=()=>{a&&a()},d=()=>"string"==typeof i?e(Zn.BodySmall,{children:i}):i;return t(n,{children:[o&&e(ir,Object.assign({"data-testid":l},s,{children:e(or,{children:d()})})),c&&e(ge,Object.assign({show:o,onOverlayClick:u},{children:e(ar,Object.assign({onClose:u},{children:e(sr,{children:d()})}))}))]})},cr=x.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,ur=r=>{var{children:l,popoverContent:c,trigger:u="click",position:$="top",zIndex:x,rootNode:O,onPopoverAppear:w,onPopoverDismiss:B}=r,H=E(r,["children","popoverContent","trigger","position","zIndex","rootNode","onPopoverAppear","onPopoverDismiss"]);const[_,k]=i(!1),j=a(),M=a(),A=C.useMediaQuery({maxWidth:he.mobileL}),{refs:z,floatingStyles:T,context:P}=d({open:_,placement:$,whileElementsMounted:f,middleware:[h(16),p(),g({limiter:m()})],onOpenChange:e=>{k(e),_!==e&&Z(e)}}),I=(()=>{const[e,t]=i(void 0),n=s();return o((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on(oe.Change,e),n.events.emit(oe.Ready),()=>n.events.off(oe.Change,e)}),[n]),e})(),W=A?"click":u,L=y(P,{ignoreMouse:"hover"===W}),R=v(P),Y=b(P,{enabled:"hover"===W,delay:{close:500}}),{getReferenceProps:V,getFloatingProps:N}=S([L,R,Y]),J=()=>{k(!1),Z(!1)},Z=e=>{e&&w&&w(),!e&&B&&B()};return t(n,{children:[e(cr,Object.assign({ref:e=>{j.current=e,z.setReference(e)}},V({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),H,{children:l})),_&&e(F,Object.assign({root:O},{children:e(D,Object.assign({context:P},{children:e("div",Object.assign({ref:e=>{M.current=e,z.setFloating(e)},style:Object.assign(Object.assign({},T),{zIndex:null!=x?x:I})},N(),{children:"function"==typeof c?c():e(lr,Object.assign({visible:!0,onMobileClose:J},{children:c}))}))}))}))]})},dr=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},fr=x.span`
    color: ${_n};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>dr(e)}

    &:hover,
    &:focus-visible {
        color: ${kn};
        ${({$hoverStyle:e})=>dr(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,hr=x.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,pr=n=>{var{content:r,icon:i,underlineStyle:o="default",underlineHoverStyle:a="default"}=n,s=E(n,["content","icon","underlineStyle","underlineHoverStyle"]);return e(ur,Object.assign({},s,{children:t(fr,Object.assign({role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:o,$hoverStyle:a},{children:[r,i&&e(hr,Object.assign({$standalone:!r},{children:i}))]}))}))};export{pr as PopoverInline,ur as PopoverTrigger,lr as PopoverV2};
//# sourceMappingURL=index.js.map
