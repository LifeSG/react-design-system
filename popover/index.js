import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useState as i,useRef as o,useEffect as a}from"react";import{ExternalIcon as s}from"@lifesg/react-icons/external";import c,{css as u}from"styled-components";import l from"react-dom";import{CrossIcon as d}from"@lifesg/react-icons/cross";function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var m,g={exports:{}};m=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var i=e.expressions.every((function(e){var n=e.feature,r=e.modifier,i=e.value,o=t[n];if(!o)return!1;switch(n){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=l(i),o=l(o);break;case"resolution":i=u(i),o=u(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=c(i),o=c(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(r){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!n||!i&&n}))},t.parse=s;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),o=t[1],a=t[2],s=t[3]||"",c={};return c.inverse=!!o&&"not"===o.toLowerCase(),c.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],c.expressions=s.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(i);return{modifier:n[1],feature:n[2],value:t[2]}})),c}))}function c(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function u(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function l(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
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
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in o=Object(arguments[c]))n.call(o,u)&&(s[u]=o[u]);if(t){a=t(o);for(var l=0;l<a.length;l++)r.call(o,a[l])&&(s[a[l]]=o[a[l]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,n)=>{var r,i=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,c){for(var u in e)if(a(e,u)){var l;try{if("function"!=typeof e[u]){var d=Error((s||"React class")+": "+n+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}l=e[u](t,u,s,n,null,i)}catch(e){l=e}if(!l||l instanceof Error||r((s||"React class")+": type specification of "+n+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in o)){o[l.message]=!0;var f=c?c():"";r("Failed "+n+" type: "+l.message+(null!=f?f:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,n)=>{var r,i=n(/*! react-is */"./node_modules/react-is/index.js"),o=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),c=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function u(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,l="@@iterator",d="<<anonymous>>",f={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(u),arrayOf:function(e){return m((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+i+" `"+o+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<s.length;c++){var u=e(s,c,r,i,o+"["+c+"]",a);if(u instanceof Error)return u}return null}))},element:m((function(t,n,r,i,o){var a=t[n];return e(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,o){var a=e[t];return i.isValidElementType(a)?null:new p("Invalid "+r+" `"+o+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,i,o){if(!(t[n]instanceof e)){var a=e.name||d;return new p("Invalid "+i+" `"+o+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,t,n,r,i){return v(e[t])?null:new p("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],u=b(c);if("object"!==u)return new p("Invalid "+i+" `"+o+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var l in c)if(s(c,l)){var d=e(c,l,r,i,o+"."+l,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,i,o){for(var a=t[n],s=0;s<e.length;s++)if(h(a,e[s]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===F(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+c+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),u)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),u;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+S(n)+" at index "+t+"."),u}return m((function(t,n,r,i,o){for(var c=[],u=0;u<e.length;u++){var l=(0,e[u])(t,n,r,i,o,a);if(null==l)return null;l.data&&s(l.data,"expectedType")&&c.push(l.data.expectedType)}return new p("Invalid "+i+" `"+o+"` supplied to `"+r+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,i,o){var s=t[n],c=b(s);if("object"!==c)return new p("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var u in e){var l=e[u];if("function"!=typeof l)return y(r,i,o,u,F(l));var d=l(s,u,r,i,o+"."+u,a);if(d)return d}return null}))},exact:function(e){return m((function(t,n,r,i,c){var u=t[n],l=b(u);if("object"!==l)return new p("Invalid "+i+" `"+c+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");var d=o({},t[n],e);for(var f in d){var h=e[f];if(s(e,f)&&"function"!=typeof h)return y(r,i,c,f,F(h));if(!h)return new p("Invalid "+i+" `"+c+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=h(u,f,r,i,c+"."+f,a);if(m)return m}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},i=0;function o(o,s,c,u,l,f,h){if(u=u||d,f=f||c,h!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=u+":"+c;!n[g]&&i<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,i++)}}return null==s[c]?o?null===s[c]?new p("The "+l+" `"+f+"` is marked as required in `"+u+"`, but its value is `null`."):new p("The "+l+" `"+f+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(s,c,u,l,f)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function g(e){return m((function(t,n,r,i,o,a){var s=t[n];return b(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+F(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,i){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[l]);if("function"==typeof t)return t}(t);if(!r)return!1;var i,o=r.call(t);if(r!==t.entries){for(;!(i=o.next()).done;)if(!v(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function F(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function S(e){var t=F(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,f.checkPropTypes=c,f.resetWarningCache=c.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function F(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var h=e.type;switch(h){case u:case l:case i:case a:case o:case f:return h;default:var g=h&&h.$$typeof;switch(g){case c:case d:case m:case p:case s:return g;default:return t}}case r:return t}}}var S=u,w=l,x=c,$=s,D=n,O=d,B=i,_=m,E=p,j=r,M=a,k=o,C=f,H=!1;function A(e){return F(e)===l}t.AsyncMode=S,t.ConcurrentMode=w,t.ContextConsumer=x,t.ContextProvider=$,t.Element=D,t.ForwardRef=O,t.Fragment=B,t.Lazy=_,t.Memo=E,t.Portal=j,t.Profiler=M,t.StrictMode=k,t.Suspense=C,t.isAsyncMode=function(e){return H||(H=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||F(e)===u},t.isConcurrentMode=A,t.isContextConsumer=function(e){return F(e)===c},t.isContextProvider=function(e){return F(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return F(e)===d},t.isFragment=function(e){return F(e)===i},t.isLazy=function(e){return F(e)===m},t.isMemo=function(e){return F(e)===p},t.isPortal=function(e){return F(e)===r},t.isProfiler=function(e){return F(e)===a},t.isStrictMode=function(e){return F(e)===o},t.isSuspense=function(e){return F(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===l||e===a||e===o||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=F}()},"./node_modules/react-is/index.js":
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
	  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),c={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},u={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(c)},l=i(u,["type"]),d=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},l),f=r(r({},c),d);t.default={all:f,types:c,matchers:u,features:d}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(/*! react */"react"),o=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),c=r(n(/*! ./toQuery */"./src/toQuery.ts")),u=r(n(/*! ./Context */"./src/Context.ts")),l=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},d=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,c.default)(e)}(e)},n=(0,i.useState)(t),r=n[0],o=n[1];return(0,i.useEffect)((function(){var e=t();r!==e&&o(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,i.useContext)(u.default),n=function(){return l(e)||l(t)},r=(0,i.useState)(n),o=r[0],a=r[1];return(0,i.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,t]),o}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var c=function(e,t){var n=function(){return(0,o.default)(e,t||{},!!t)},r=(0,i.useState)(n),a=r[0],s=r[1],c=d();return(0,i.useEffect)((function(){if(c){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),h=function(e){var t=(0,i.useState)(e.matches),n=t[0],r=t[1];return(0,i.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(c),p=d();return(0,i.useEffect)((function(){p&&n&&n(h)}),[h]),(0,i.useEffect)((function(){return function(){c&&c.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var y=g.exports=m(r);const v={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var b=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},F="object"==typeof h&&h&&h.Object===Object&&h,S="object"==typeof self&&self&&self.Object===Object&&self,w=F||S||Function("return this")(),x=w,$=function(){return x.Date.now()},D=/\s/;var O=function(e){for(var t=e.length;t--&&D.test(e.charAt(t)););return t},B=/^\s+/;var _=function(e){return e?e.slice(0,O(e)+1).replace(B,""):e},E=w.Symbol,j=E,M=Object.prototype,k=M.hasOwnProperty,C=M.toString,H=j?j.toStringTag:void 0;var A=function(e){var t=k.call(e,H),n=e[H];try{e[H]=void 0;var r=!0}catch(e){}var i=C.call(e);return r&&(t?e[H]=n:delete e[H]),i},T=Object.prototype.toString;var z=A,L=function(e){return T.call(e)},I=E?E.toStringTag:void 0;var W=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":I&&I in Object(e)?z(e):L(e)};var P=W,Y=function(e){return null!=e&&"object"==typeof e};var R=function(e){return"symbol"==typeof e||Y(e)&&"[object Symbol]"==P(e)},V=_,N=b,Z=R,q=/^[-+]0x[0-9a-f]+$/i,X=/^0b[01]+$/i,Q=/^0o[0-7]+$/i,U=parseInt;var G=b,J=$,K=function(e){if("number"==typeof e)return e;if(Z(e))return NaN;if(N(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=N(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=V(e);var n=X.test(e);return n||Q.test(e)?U(e.slice(2),n?2:8):q.test(e)?NaN:+e},ee=Math.max,te=Math.min;var ne=p((function(e,t,n){var r,i,o,a,s,c,u=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,o=i;return r=i=void 0,u=t,a=e.apply(o,n)}function p(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-u>=o}function m(){var e=J();if(p(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-c);return d?te(n,o-(e-u)):n}(e))}function g(e){return s=void 0,f&&r?h(e):(r=i=void 0,a)}function y(){var e=J(),n=p(e);if(r=arguments,i=this,c=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(m,t),l?h(e):a}(c);if(d)return clearTimeout(s),s=setTimeout(m,t),h(c)}return void 0===s&&(s=setTimeout(m,t)),a}return t=K(t)||0,G(n)&&(l=!!n.leading,o=(d="maxWait"in n)?ee(K(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=c=i=s=void 0},y.flush=function(){return void 0===s?a:g(J())},y}));var re=Array.isArray,ie=re,oe=R,ae=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,se=/^\w*$/;var ce=function(e,t){if(ie(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!oe(e))||(se.test(e)||!ae.test(e)||null!=t&&e in Object(t))},ue=W,le=b;var de,fe=function(e){if(!le(e))return!1;var t=ue(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},he=w["__core-js_shared__"],pe=(de=/[^.]+$/.exec(he&&he.keys&&he.keys.IE_PROTO||""))?"Symbol(src)_1."+de:"";var me=function(e){return!!pe&&pe in e},ge=Function.prototype.toString;var ye=fe,ve=me,be=b,Fe=function(e){if(null!=e){try{return ge.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Se=/^\[object .+?Constructor\]$/,we=Function.prototype,xe=Object.prototype,$e=we.toString,De=xe.hasOwnProperty,Oe=RegExp("^"+$e.call(De).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Be=function(e){return!(!be(e)||ve(e))&&(ye(e)?Oe:Se).test(Fe(e))},_e=function(e,t){return null==e?void 0:e[t]};var Ee=function(e,t){var n=_e(e,t);return Be(n)?n:void 0},je=Ee(Object,"create"),Me=je;var ke=function(){this.__data__=Me?Me(null):{},this.size=0};var Ce=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},He=je,Ae=Object.prototype.hasOwnProperty;var Te=function(e){var t=this.__data__;if(He){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ae.call(t,e)?t[e]:void 0},ze=je,Le=Object.prototype.hasOwnProperty;var Ie=je;var We=ke,Pe=Ce,Ye=Te,Re=function(e){var t=this.__data__;return ze?void 0!==t[e]:Le.call(t,e)},Ve=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ie&&void 0===t?"__lodash_hash_undefined__":t,this};function Ne(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ne.prototype.clear=We,Ne.prototype.delete=Pe,Ne.prototype.get=Ye,Ne.prototype.has=Re,Ne.prototype.set=Ve;var Ze=Ne;var qe=function(){this.__data__=[],this.size=0};var Xe=function(e,t){return e===t||e!=e&&t!=t};var Qe=function(e,t){for(var n=e.length;n--;)if(Xe(e[n][0],t))return n;return-1},Ue=Qe,Ge=Array.prototype.splice;var Je=Qe;var Ke=Qe;var et=Qe;var tt=qe,nt=function(e){var t=this.__data__,n=Ue(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ge.call(t,n,1),--this.size,!0)},rt=function(e){var t=this.__data__,n=Je(t,e);return n<0?void 0:t[n][1]},it=function(e){return Ke(this.__data__,e)>-1},ot=function(e,t){var n=this.__data__,r=et(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function at(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}at.prototype.clear=tt,at.prototype.delete=nt,at.prototype.get=rt,at.prototype.has=it,at.prototype.set=ot;var st=at,ct=Ee(w,"Map"),ut=Ze,lt=st,dt=ct;var ft=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var ht=function(e,t){var n=e.__data__;return ft(t)?n["string"==typeof t?"string":"hash"]:n.map},pt=ht;var mt=ht;var gt=ht;var yt=ht;var vt=function(){this.size=0,this.__data__={hash:new ut,map:new(dt||lt),string:new ut}},bt=function(e){var t=pt(this,e).delete(e);return this.size-=t?1:0,t},Ft=function(e){return mt(this,e).get(e)},St=function(e){return gt(this,e).has(e)},wt=function(e,t){var n=yt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function xt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}xt.prototype.clear=vt,xt.prototype.delete=bt,xt.prototype.get=Ft,xt.prototype.has=St,xt.prototype.set=wt;var $t=xt;function Dt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Dt.Cache||$t),n}Dt.Cache=$t;var Ot=Dt;var Bt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_t=/\\(\\)?/g,Et=function(e){var t=Ot(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Bt,(function(e,n,r,i){t.push(r?i.replace(_t,"$1"):n||e)})),t}));var jt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Mt=re,kt=R,Ct=E?E.prototype:void 0,Ht=Ct?Ct.toString:void 0;var At=function e(t){if("string"==typeof t)return t;if(Mt(t))return jt(t,e)+"";if(kt(t))return Ht?Ht.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Tt=At;var zt=re,Lt=ce,It=Et,Wt=function(e){return null==e?"":Tt(e)};var Pt=R;var Yt=function(e,t){return zt(e)?e:Lt(e,t)?[e]:It(Wt(e))},Rt=function(e){if("string"==typeof e||Pt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Vt=function(e,t){for(var n=0,r=(t=Yt(t,e)).length;null!=e&&n<r;)e=e[Rt(t[n++])];return n&&n==r?e:void 0};var Nt=p((function(e,t,n){var r=null==e?void 0:Vt(e,t);return void 0===r?n:r}));const Zt=(e,t,n)=>t?Nt(n,t)||Nt(e,t):n||e,qt=(e,t)=>{const n=t||e.defaultValue;return Nt(e.collections,n)};var Xt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Xt||(Xt={}));const Qt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ut=e=>t=>{const n=t.theme,r=qt(Qt,n[Xt.colorScheme]);return n.options&&n.options.color?Zt(r,e,n.options.color):Zt(r,e)},Gt=(Ut("Brand.1"),Ut("Brand.2"),Ut("Brand.3"),Ut("Brand.4"),Ut("Brand.5"),Ut("Brand.6"),Ut("Primary")),Jt=(Ut("PrimaryDark"),Ut("Secondary")),Kt={Light:{1:Ut("Accent.Light.1"),2:Ut("Accent.Light.2"),3:Ut("Accent.Light.3"),4:Ut("Accent.Light.4"),5:Ut("Accent.Light.5"),6:Ut("Accent.Light.6")},Dark:{1:Ut("Accent.Dark.1"),2:Ut("Accent.Dark.2"),3:Ut("Accent.Dark.3")}},en={1:Ut("Neutral.1"),2:Ut("Neutral.2"),3:Ut("Neutral.3"),4:Ut("Neutral.4"),5:Ut("Neutral.5"),6:Ut("Neutral.6"),7:Ut("Neutral.7"),8:Ut("Neutral.8")},tn=(Ut("Validation.Green.Text"),Ut("Validation.Green.Icon"),Ut("Validation.Green.Border"),Ut("Validation.Green.Background"),Ut("Validation.Orange.Text"),Ut("Validation.Orange.Icon"),Ut("Validation.Orange.Border"),Ut("Validation.Orange.Background"),Ut("Validation.Orange.Badge"),Ut("Validation.Red.Text"),Ut("Validation.Red.Icon"),Ut("Validation.Red.Border"),Ut("Validation.Red.Background"),Ut("Validation.Blue.Text"),Ut("Validation.Blue.Icon"),Ut("Validation.Blue.Border"),Ut("Validation.Blue.Background"),Ut("Shadow.Accent"),Ut("Shadow.Red"),Ut("Shadow.Elevation"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),nn={collections:{base:{D1:{fontFamily:tn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:tn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:tn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:tn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:tn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:tn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:tn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:tn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:tn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:tn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:tn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:tn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:tn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:tn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},rn=e=>t=>{const n=t.theme,r=qt(nn,n[Xt.textStyleScheme]);return n.options&&n.options.textStyle?Zt(r,e,n.options.textStyle):Zt(r,e)},on={D1:{fontFamily:rn("D1.fontFamily"),fontSize:rn("D1.fontSize"),fontWeight:rn("D1.fontWeight"),lineHeight:rn("D1.lineHeight"),letterSpacing:rn("D1.letterSpacing")},D2:{fontFamily:rn("D2.fontFamily"),fontSize:rn("D2.fontSize"),fontWeight:rn("D2.fontWeight"),lineHeight:rn("D2.lineHeight"),letterSpacing:rn("D2.letterSpacing")},D3:{fontFamily:rn("D3.fontFamily"),fontSize:rn("D3.fontSize"),fontWeight:rn("D3.fontWeight"),lineHeight:rn("D3.lineHeight"),letterSpacing:rn("D3.letterSpacing")},D4:{fontFamily:rn("D4.fontFamily"),fontSize:rn("D4.fontSize"),fontWeight:rn("D4.fontWeight"),lineHeight:rn("D4.lineHeight"),letterSpacing:rn("D4.letterSpacing")},DBody:{fontFamily:rn("DBody.fontFamily"),fontSize:rn("DBody.fontSize"),fontWeight:rn("DBody.fontWeight"),lineHeight:rn("DBody.lineHeight"),letterSpacing:rn("DBody.letterSpacing")},H1:{fontFamily:rn("H1.fontFamily"),fontSize:rn("H1.fontSize"),fontWeight:rn("H1.fontWeight"),lineHeight:rn("H1.lineHeight"),letterSpacing:rn("H1.letterSpacing")},H2:{fontFamily:rn("H2.fontFamily"),fontSize:rn("H2.fontSize"),fontWeight:rn("H2.fontWeight"),lineHeight:rn("H2.lineHeight"),letterSpacing:rn("H2.letterSpacing")},H3:{fontFamily:rn("H3.fontFamily"),fontSize:rn("H3.fontSize"),fontWeight:rn("H3.fontWeight"),lineHeight:rn("H3.lineHeight"),letterSpacing:rn("H3.letterSpacing")},H4:{fontFamily:rn("H4.fontFamily"),fontSize:rn("H4.fontSize"),fontWeight:rn("H4.fontWeight"),lineHeight:rn("H4.lineHeight"),letterSpacing:rn("H4.letterSpacing")},H5:{fontFamily:rn("H5.fontFamily"),fontSize:rn("H5.fontSize"),fontWeight:rn("H5.fontWeight"),lineHeight:rn("H5.lineHeight"),letterSpacing:rn("H5.letterSpacing")},H6:{fontFamily:rn("H6.fontFamily"),fontSize:rn("H6.fontSize"),fontWeight:rn("H6.fontWeight"),lineHeight:rn("H6.lineHeight"),letterSpacing:rn("H6.letterSpacing")},Body:{fontFamily:rn("Body.fontFamily"),fontSize:rn("Body.fontSize"),fontWeight:rn("Body.fontWeight"),lineHeight:rn("Body.lineHeight"),letterSpacing:rn("Body.letterSpacing")},BodySmall:{fontFamily:rn("BodySmall.fontFamily"),fontSize:rn("BodySmall.fontSize"),fontWeight:rn("BodySmall.fontWeight"),lineHeight:rn("BodySmall.lineHeight"),letterSpacing:rn("BodySmall.letterSpacing")},XSmall:{fontFamily:rn("XSmall.fontFamily"),fontSize:rn("XSmall.fontSize"),fontWeight:rn("XSmall.fontWeight"),lineHeight:rn("XSmall.lineHeight"),letterSpacing:rn("XSmall.letterSpacing")}},an=e=>{switch(e){case 700:case"bold":return tn.Bold;case 600:case"semibold":return tn.Semibold;case 300:case"light":return tn.Light;case 400:case"regular":return tn.Regular;default:return""}},sn=(e,t)=>n=>{var r;const i=on[e].fontFamily(n),o=on[e].fontWeight(n);return Object.values(tn).includes(i)?u`
                font-family: ${an(t)||an(o)||i};
                font-weight: normal !important;
            `:u`
            font-family: ${i};
            font-weight: ${null!==(r=cn(t)||o)&&void 0!==r?r:"normal"};
        `},cn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},un=e=>{if(e>0)return u`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},ln=(e,t,n=!1)=>r=>{const i=on[e],o=i.fontSize(r);return u`
            ${sn(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${u`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},dn=(e=!1,t=!1,n=void 0)=>t?u`
            display: block;
            ${un(n)}
        `:e?u`
            display: inline;
        `:u`
            display: block;
            ${un(n)}
        `;var fn;!function(e){e.D1=c.h1`
        ${e=>u`
                ${ln("D1",e.weight,e.paragraph)}
                color: ${en[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=c.h1`
        ${e=>u`
                ${ln("D2",e.weight,e.paragraph)}
                color: ${en[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=c.h1`
        ${e=>u`
                ${ln("D3",e.weight,e.paragraph)}
                color: ${en[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=c.h1`
        ${e=>u`
                ${ln("D4",e.weight,e.paragraph)}
                color: ${en[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=c.h1`
        ${e=>u`
                ${ln("DBody",e.weight,e.paragraph)}
                color: ${en[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=c.h1`
        ${e=>u`
                ${ln("H1",e.weight,e.paragraph)}
                color: ${en[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=c.h2`
        ${e=>u`
                ${ln("H2",e.weight,e.paragraph)}
                color: ${en[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=c.h3`
        ${e=>u`
                ${ln("H3",e.weight,e.paragraph)}
                color: ${en[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=c.h4`
        ${e=>u`
                ${ln("H4",e.weight,e.paragraph)}
                color: ${en[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=c.h5`
        ${e=>u`
                ${ln("H5",e.weight,e.paragraph)}
                color: ${en[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=c.h6`
        ${e=>u`
                ${ln("H6",e.weight,e.paragraph)}
                color: ${en[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=c.p`
        ${e=>u`
                ${ln("Body",e.weight,e.paragraph)}
                color: ${en[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=c.p`
        ${e=>u`
                ${ln("BodySmall",e.weight,e.paragraph)}
                color: ${en[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=c.span`
        ${e=>u`
                ${ln("XSmall",e.weight,e.paragraph)}
                color: ${en[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>mn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>mn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(fn||(fn={}));const hn=c.a`
    ${e=>u`
            ${ln(e.textStyle,e.weight)}
            color: ${Gt};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Jt};

                svg {
                    color: ${Jt};
                }
            }
        `}
`,pn=c(s)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,mn=n=>{var{external:r=!1,children:i}=n,o=f(n,["external","children"]);return e(hn,Object.assign({},o,{children:[i,r&&t(pn,{})]}))},gn=c.div`
    border-radius: 0.5rem;
    background: ${en[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,yn=e=>{var{children:n}=e,r=f(e,["children"]);const i=r["data-testid"]||"card";return t(gn,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?t(fn.Body,{children:n}):n}))};var vn={exports:{}};vn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},l=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=l(e,!1)}],a:[i,function(e){this.afternoon=l(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:c,ZZ:c};function f(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,c=0;c<s;c+=1){var u=a[c],l=d[u],f=l&&l[0],h=l&&l[1];a[c]=h?{regex:f,parser:h}:u.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,c=i.parser,u=e.slice(r),l=o.exec(u)[0];c.call(t,l),e=e.replace(l,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var c=!0===a[2],u=!0===a[3],l=c||u,d=a[2];u&&(d=a[2]),o=this.$locale(),!c&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,c=r.minutes,u=r.seconds,l=r.milliseconds,d=r.zone,h=new Date,p=a||(i||o?1:h.getDate()),m=i||h.getFullYear(),g=0;i&&!o||(g=o>0?o-1:h.getMonth());var y=s||0,v=c||0,b=u||0,F=l||0;return d?new Date(Date.UTC(m,g,p,y,v,b,F+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,p,y,v,b,F)):new Date(m,g,p,y,v,b,F)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),l&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){a[1]=s[p-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var bn,Fn,Sn=p(vn.exports),wn={exports:{}},xn=p(wn.exports=(bn={year:0,month:1,day:2,hour:3,minute:4,second:5},Fn={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Fn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Fn[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],c=s.type,u=s.value,l=bn[c];l>=0&&(o[l]=parseInt(u,10))}var d=o[3],f=24===d?0:d,h=o[0]+"-"+o[1]+"-"+o[2]+" "+f+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),c=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var u=c.utcOffset();c=c.add(i-u,"minute")}return c.$x.$timezone=e,c},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,c=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var u=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),c,s),l=u[0],d=u[1],f=n(l).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),$n={exports:{}};$n.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",c="week",u="month",l="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,u),o=n-i<0,a=t.clone().add(r+(o?-1:1),u);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:c,d:s,D:f,h:a,m:o,s:i,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",F={};F[b]=g;var S=function(e){return e instanceof D},w=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();F[o]&&(i=o),n&&(F[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;F[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},x=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},$=v;$.l=w,$.i=S,$.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function g(e){this.$L=w(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if($.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return $},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,n){return $.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!$.u(t)||t,l=$.p(e),h=function(e,t){var i=$.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return $.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case d:return r?h(1,0):h(31,11);case u:return r?h(1,g):h(0,g+1);case c:var b=this.$locale().weekStart||0,F=(m<b?m+7:m)-b;return h(r?y-F:y+(6-F),g);case s:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,c=$.p(e),l="set"+(this.$u?"UTC":""),h=(n={},n[s]=l+"Date",n[f]=l+"Date",n[u]=l+"Month",n[d]=l+"FullYear",n[a]=l+"Hours",n[o]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[c],p=c===s?this.$D+(t-this.$W):t;if(c===u||c===d){var m=this.clone().set(f,1);m.$d[h](p),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[$.p(e)]()},y.add=function(r,l){var f,h=this;r=Number(r);var p=$.p(l),m=function(e){var t=x(h);return $.w(t.date(t.date()+Math.round(e*r)),h)};if(p===u)return this.set(u,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return m(1);if(p===c)return m(7);var g=(f={},f[o]=t,f[a]=n,f[i]=e,f)[p]||1,y=this.$d.getTime()+r*g;return $.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=$.z(this),o=this.$H,a=this.$m,s=this.$M,c=n.weekdays,u=n.months,l=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return $.s(o%12||12,e,"0")},f=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:$.s(s+1,2,"0"),MMM:l(n.monthsShort,s,u,3),MMMM:l(u,s),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(o),HH:$.s(o,2,"0"),h:d(1),hh:d(2),a:f(o,a,!0),A:f(o,a,!1),m:String(a),mm:$.s(a,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,h){var p,m=$.p(f),g=x(r),y=(g.utcOffset()-this.utcOffset())*t,v=this-g,b=$.m(this,g);return b=(p={},p[d]=b/12,p[u]=b,p[l]=b/3,p[c]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[a]=v/n,p[o]=v/t,p[i]=v/e,p)[m]||v,h?b:$.a(b)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return F[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=w(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return $.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),O=D.prototype;return x.prototype=O,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",u],["$y",d],["$D",f]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,D,x),e.$i=!0),x},x.locale=w,x.isDayjs=S,x.unix=function(e){return x(1e3*e)},x.en=F[b],x.Ls=F,x.p={},x}();var Dn=p($n.exports),On={exports:{}};On.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],c=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(c?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(c?this.isAfter(a,r):!this.isBefore(a,r))}};var Bn=p(On.exports),_n={exports:{}};_n.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var En=p(_n.exports),jn={exports:{}};jn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Mn,kn=p(jn.exports);Dn.extend(Bn),Dn.extend(En),Dn.extend(kn),Dn.extend(Sn),Dn.extend(xn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Dn(t).startOf("week");return Cn(n).map((e=>Hn(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Hn(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Dn(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Dn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Dn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const o=e.isWithinRange(t,r?Dn(r):void 0,i?Dn(i):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(Mn||(Mn={}));const Cn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Hn=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},An=[1,3,5,7,8,10,12],Tn=[4,6,9,11];var zn,Ln,In,Wn;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":An.includes(o)?Math.min(i,31).toString():Tn.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Dn(e,n);return Dn(t,n).diff(r,"minute")},e.toDayjs=e=>e?Dn(e):Dn(),e.addMinutesToTime=(e,t,n="HH:mm")=>Dn(e,n).add(t,"minutes").format(n)}(zn||(zn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Dn(e).isBefore(r,"day"))||!(!i||!Dn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Dn(e).isValid())return e}return""}}(Ln||(Ln={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(In||(In={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,o);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+o.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,r+1)+o.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Wn||(Wn={}));const Pn=c.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return u`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Yn=c.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=u`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=u`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=u`
                transition: none;
            `),t}}
`,Rn=({show:e=!1,rootId:n,onOverlayClick:s,children:c,backgroundOpacity:u,backgroundBlur:d=!0,disableTransition:f=!1,enableOverlayClick:h=!1,zIndex:p,id:m})=>{const[g,y]=i(null),[v,b]=i(),[F]=i((()=>In.generate())),S=o(),w=o(null),x=c&&r.cloneElement(c,{ref:w}),$=m?`lifesg-ds-overlay-root-${m}`:"lifesg-ds-overlay-root";a((()=>(_(),y(O()),()=>{k(),j().length<1&&E("remove")})),[]),a((()=>{if(e){const e=B();D(e),M();const t=setTimeout((()=>{E("add")}),200);return()=>clearTimeout(t)}{k();const e=setTimeout((()=>{j().length<1&&E("remove")}),200);return()=>clearTimeout(e)}}),[e]);const D=e=>{S.current=e,b(e)},O=()=>document&&n?document.getElementById(n):document?document.body:null,B=()=>j().length>0,_=()=>{if(!document.getElementById(Vn)){const e=document.createElement("style");e.id=Vn;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Nn} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Nn}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},E=e=>{const t=document.body.classList.contains(Nn);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Nn):document.body.classList.add(Nn)},j=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},M=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=[...e,F].join(",")},k=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==F)).join(",")},C=e=>{var t;const n=null===(t=w.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||s&&h&&(e.preventDefault(),s())};return g?l.createPortal(t(Pn,Object.assign({id:$,"data-testid":$,$show:e,zIndex:p,$stacked:v},{children:c&&t(Yn,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:u||(v?.5:.8),$backgroundBlur:d,$disableTransition:f,$enableOverlayClick:h,onClick:C},{children:x}))})),g):null},Vn="lifesg-ds-overlay-stylesheet",Nn="lifesg-ds-overlay-open",Zn=e=>Object.keys(v).reduce(((t,n)=>{const r=v[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),qn=Zn("max-width"),Xn=(Zn("min-width"),c.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${qn.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`),Qn=e=>{var{id:n="modal",show:r,animationFrom:o="bottom",children:s,enableOverlayClick:c=!0,rootComponentId:u,zIndex:l,onOverlayClick:d,dismissKeyboardOnShow:h=!0}=e,p=f(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[m,g]=i(),[y,v]=i();a((()=>window.visualViewport?(F(),window.visualViewport.addEventListener("resize",F),()=>{window.visualViewport.removeEventListener("resize",F)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),a((()=>{var e,t;r&&h&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const b=()=>{const e=.01*window.innerHeight;g(e)},F=()=>{const e=.01*window.visualViewport.height;g(e),v(window.visualViewport.offsetTop)};return t(Rn,Object.assign({"data-testid":`${n}-overlay`,show:r,enableOverlayClick:c,onOverlayClick:d,id:n,rootId:u,zIndex:l},{children:t(Xn,Object.assign({show:r,animationFrom:o,"data-testid":n,verticalHeight:m,offsetTop:y},p,{children:s}))}))},Un=c.button`
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

        ${({$highlight:e})=>e&&u`
                background-color: ${en[7]};
            `}
    }
`,Gn=r.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=f(e,["children","focusHighlight","focusOutline","type"]);return t(Un,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),Jn=c.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${en[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${qn.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Kn=c(Gn)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Kt.Light[1]};
    }
`,er=c(d)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${en[3]};
`,tr="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",nr=c.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?u`
            visibility: visible;
            opacity: 1;
            transition: ${tr};
            z-index: 50;
        `:u`
            visibility: hidden;
            opacity: 0;
            transition: ${tr};
            z-index: -1;
        `}
    ${e=>(e=>{switch(e){case"top-center":return u`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return u`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return u`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return u`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return u`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return u`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `}})(e.$offset)}

	${qn.mobileL} {
        display: none;
    }
`,rr=c((n=>{var{id:r="modal-box",children:i,onClose:o,showCloseButton:a=!0}=n,s=f(n,["id","children","onClose","showCloseButton"]);return e(Jn,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&t(Kn,Object.assign({onClick:o,"data-testid":"close-button",focusHighlight:!1},{children:t(er,{})})),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,ir=c.div`
    position: relative;
    width: fit-content;
`,or=c.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,ar=c.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,sr=r=>{var{children:s,visible:c,onMobileClose:u}=r,l=f(r,["children","visible","onMobileClose"]);const d=l["data-testid"]||"popover",[h,p]=i("none"),m=o(null),g=y.useMediaQuery({maxWidth:v.mobileL}),b=o(h);a((()=>(w(),window.addEventListener("resize",ne(F,300)),()=>{window.removeEventListener("resize",ne(F,300))})),[]);const F=()=>{w()},S=()=>{u&&u()},w=()=>{const e=x();var t;e&&(t=e,b.current=t,p(t))},x=()=>{if(m.current){const e=m.current.getBoundingClientRect(),t=24,n=e.y<t,r=window.innerWidth-t;return e.x<t?n?"top-left":"left":e.x+e.width>r?n?"top-right":"right":("top-left"===b.current||"left"===b.current)&&e.x-e.width/2>t||("top-right"===b.current||"right"===b.current)&&e.x+2*e.width<r?n?"top-center":"none":n?"top-center":void 0}},$=()=>"string"==typeof s?t(fn.BodySmall,{children:s}):s;return e(n,{children:[t(nr,Object.assign({ref:m,"data-testid":d,$visible:c,$offset:h},l,{children:t(yn,{children:$()})})),g&&t(Qn,Object.assign({show:c,onOverlayClick:S},{children:t(rr,Object.assign({onClose:S},{children:t(ar,{children:$()})}))}))]})},cr=(n,r)=>s=>{const{onPopoverAppear:c,onPopoverDismiss:u}=s,l=f(s,["onPopoverAppear","onPopoverDismiss"]),d=r.trigger||"click",h=l,[p,m]=i(!1),g=o(),b=y.useMediaQuery({maxWidth:v.mobileL});a((()=>{if(!b)return document.addEventListener("mousedown",F),()=>{document.removeEventListener("mousedown",F)}}),[p]);const F=e=>{g&&!g.current.contains(e.target)&&(p&&m(!1),u&&u())};return e(ir,Object.assign({id:"popover-hoc-wrapper",ref:g},{children:[t(or,Object.assign({id:`popover-hoc-trigger${r["data-testid"]&&`-${r["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===d||b)&&(m(!p),!p&&c&&c(),p&&u&&u())},onMouseEnter:()=>{"hover"!==d||b||m(!0)},onMouseLeave:()=>{"hover"===d&&p&&!b&&m(!1)},"aria-label":"popover-button"},{children:t(n,Object.assign({},h))})),t(sr,Object.assign({visible:p,id:r.id,"data-testid":r["data-testid"],onMobileClose:()=>{m(!1)}},{children:r.content}))]}))};export{sr as Popover,cr as withPopover};
//# sourceMappingURL=index.js.map
