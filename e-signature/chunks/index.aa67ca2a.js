import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import{PencilIcon as r,EraserIcon as o}from"@lifesg/react-icons";import i,{useEffect as a,useState as s,useRef as l,lazy as c,Suspense as u}from"react";import d,{css as f,keyframes as h}from"styled-components";import{ExternalIcon as p}from"@lifesg/react-icons/external";import{useFloatingTree as g,FloatingTree as m,useFloatingNodeId as y,FloatingNode as v}from"@floating-ui/react";import b from"react-dom";import{CrossIcon as S}from"@lifesg/react-icons/cross";function $(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function F(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function w(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var D,B={exports:{}};D=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \************************************************************/(e,t,n)=>{var r,o=n(/*! react-is */"./node_modules/react-is/index.js"),i=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="<<anonymous>>",d={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:p(c),arrayOf:function(e){return p((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new h("Invalid "+o+" `"+i+"` of type `"+v(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,o,i+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:p((function(t,n,r,o,i){var a=t[n];return e(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:p((function(e,t,n,r,i){var a=e[t];return o.isValidElementType(a)?null:new h("Invalid "+r+" `"+i+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||u;return new h("Invalid "+o+" `"+i+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:p((function(e,t,n,r,o){return y(e[t])?null:new h("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=v(l);if("object"!==c)return new h("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var u in l)if(s(l,u)){var d=e(l,u,r,o,i+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,n,r,o,i){for(var a=t[n],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===b(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+S(n)+" at index "+t+"."),c}return p((function(t,n,r,o,i){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,n,r,o,i,a);if(null==u)return null;u.data&&s(u.data,"expectedType")&&l.push(u.data.expectedType)}return new h("Invalid "+o+" `"+i+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,n,r,o,i){var s=t[n],l=v(s);if("object"!==l)return new h("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return m(r,o,i,c,b(u));var d=u(s,c,r,o,i+"."+c,a);if(d)return d}return null}))},exact:function(e){return p((function(t,n,r,o,l){var c=t[n],u=v(c);if("object"!==u)return new h("Invalid "+o+" `"+l+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=i({},t[n],e);for(var f in d){var p=e[f];if(s(e,f)&&"function"!=typeof p)return m(r,o,l,f,b(p));if(!p)return new h("Invalid "+o+" `"+l+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=p(c,f,r,o,l+"."+f,a);if(g)return g}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){var n={},o=0;function i(i,s,l,c,d,f,p){if(c=c||u,f=f||l,p!==a){if(t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var m=c+":"+l;!n[m]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[m]=!0,o++)}}return null==s[l]?i?null===s[l]?new h("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new h("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,d,f)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function g(e){return p((function(t,n,r,o,i,a){var s=t[n];return v(s)!==e?new h("Invalid "+o+" `"+i+"` of type `"+b(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,n,r,o){return new h((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function y(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(y);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!y(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!y(a[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function b(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function S(e){var t=b(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,d.checkPropTypes=l,d.resetWarningCache=l.resetWarningCache,d.PropTypes=d,d}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var h=e.type;switch(h){case c:case u:case o:case a:case i:case f:return h;default:var m=h&&h.$$typeof;switch(m){case l:case d:case g:case p:case s:return m;default:return t}}case r:return t}}}var $=c,F=u,x=l,w=s,D=n,B=d,O=o,k=g,E=p,H=r,j=a,C=i,_=f,T=!1;function M(e){return S(e)===u}t.AsyncMode=$,t.ConcurrentMode=F,t.ContextConsumer=x,t.ContextProvider=w,t.Element=D,t.ForwardRef=B,t.Fragment=O,t.Lazy=k,t.Memo=E,t.Portal=H,t.Profiler=j,t.StrictMode=C,t.Suspense=_,t.isAsyncMode=function(e){return T||(T=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),M(e)||S(e)===c},t.isConcurrentMode=M,t.isContextConsumer=function(e){return S(e)===l},t.isContextProvider=function(e){return S(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return S(e)===d},t.isFragment=function(e){return S(e)===o},t.isLazy=function(e){return S(e)===g},t.isMemo=function(e){return S(e)===p},t.isPortal=function(e){return S(e)===r},t.isProfiler=function(e){return S(e)===a},t.isStrictMode=function(e){return S(e)===i},t.isSuspense=function(e){return S(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===m)},t.typeOf=S}()},"./node_modules/react-is/index.js":
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
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var O=B.exports=D(i);var k=Array.isArray,E="object"==typeof x&&x&&x.Object===Object&&x,H="object"==typeof self&&self&&self.Object===Object&&self,j=E||H||Function("return this")(),C=j.Symbol,_=C,T=Object.prototype,M=T.hasOwnProperty,z=T.toString,A=_?_.toStringTag:void 0;var P=function(e){var t=M.call(e,A),n=e[A];try{e[A]=void 0;var r=!0}catch(e){}var o=z.call(e);return r&&(t?e[A]=n:delete e[A]),o},I=Object.prototype.toString;var L=P,W=function(e){return I.call(e)},R=C?C.toStringTag:void 0;var V=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":R&&R in Object(e)?L(e):W(e)};var Y=V,N=function(e){return null!=e&&"object"==typeof e};var J=function(e){return"symbol"==typeof e||N(e)&&"[object Symbol]"==Y(e)},Z=k,U=J,X=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,q=/^\w*$/;var Q=function(e,t){if(Z(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!U(e))||(q.test(e)||!X.test(e)||null!=t&&e in Object(t))};var G=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},K=V,ee=G;var te,ne=function(e){if(!ee(e))return!1;var t=K(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},re=j["__core-js_shared__"],oe=(te=/[^.]+$/.exec(re&&re.keys&&re.keys.IE_PROTO||""))?"Symbol(src)_1."+te:"";var ie=function(e){return!!oe&&oe in e},ae=Function.prototype.toString;var se=ne,le=ie,ce=G,ue=function(e){if(null!=e){try{return ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""},de=/^\[object .+?Constructor\]$/,fe=Function.prototype,he=Object.prototype,pe=fe.toString,ge=he.hasOwnProperty,me=RegExp("^"+pe.call(ge).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ye=function(e){return!(!ce(e)||le(e))&&(se(e)?me:de).test(ue(e))},ve=function(e,t){return null==e?void 0:e[t]};var be=function(e,t){var n=ve(e,t);return ye(n)?n:void 0},Se=be(Object,"create"),$e=Se;var Fe=function(){this.__data__=$e?$e(null):{},this.size=0};var xe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},we=Se,De=Object.prototype.hasOwnProperty;var Be=function(e){var t=this.__data__;if(we){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return De.call(t,e)?t[e]:void 0},Oe=Se,ke=Object.prototype.hasOwnProperty;var Ee=Se;var He=Fe,je=xe,Ce=Be,_e=function(e){var t=this.__data__;return Oe?void 0!==t[e]:ke.call(t,e)},Te=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ee&&void 0===t?"__lodash_hash_undefined__":t,this};function Me(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Me.prototype.clear=He,Me.prototype.delete=je,Me.prototype.get=Ce,Me.prototype.has=_e,Me.prototype.set=Te;var ze=Me;var Ae=function(){this.__data__=[],this.size=0};var Pe=function(e,t){return e===t||e!=e&&t!=t};var Ie=function(e,t){for(var n=e.length;n--;)if(Pe(e[n][0],t))return n;return-1},Le=Ie,We=Array.prototype.splice;var Re=Ie;var Ve=Ie;var Ye=Ie;var Ne=Ae,Je=function(e){var t=this.__data__,n=Le(t,e);return!(n<0)&&(n==t.length-1?t.pop():We.call(t,n,1),--this.size,!0)},Ze=function(e){var t=this.__data__,n=Re(t,e);return n<0?void 0:t[n][1]},Ue=function(e){return Ve(this.__data__,e)>-1},Xe=function(e,t){var n=this.__data__,r=Ye(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}qe.prototype.clear=Ne,qe.prototype.delete=Je,qe.prototype.get=Ze,qe.prototype.has=Ue,qe.prototype.set=Xe;var Qe=qe,Ge=be(j,"Map"),Ke=ze,et=Qe,tt=Ge;var nt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var rt=function(e,t){var n=e.__data__;return nt(t)?n["string"==typeof t?"string":"hash"]:n.map},ot=rt;var it=rt;var at=rt;var st=rt;var lt=function(){this.size=0,this.__data__={hash:new Ke,map:new(tt||et),string:new Ke}},ct=function(e){var t=ot(this,e).delete(e);return this.size-=t?1:0,t},ut=function(e){return it(this,e).get(e)},dt=function(e){return at(this,e).has(e)},ft=function(e,t){var n=st(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function ht(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ht.prototype.clear=lt,ht.prototype.delete=ct,ht.prototype.get=ut,ht.prototype.has=dt,ht.prototype.set=ft;var pt=ht;function gt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(gt.Cache||pt),n}gt.Cache=pt;var mt=gt;var yt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,vt=/\\(\\)?/g,bt=function(e){var t=mt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(yt,(function(e,n,r,o){t.push(r?o.replace(vt,"$1"):n||e)})),t}));var St=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},$t=k,Ft=J,xt=C?C.prototype:void 0,wt=xt?xt.toString:void 0;var Dt=function e(t){if("string"==typeof t)return t;if($t(t))return St(t,e)+"";if(Ft(t))return wt?wt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Bt=Dt;var Ot=k,kt=Q,Et=bt,Ht=function(e){return null==e?"":Bt(e)};var jt=J;var Ct=function(e,t){return Ot(e)?e:kt(e,t)?[e]:Et(Ht(e))},_t=function(e){if("string"==typeof e||jt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Tt=function(e,t){for(var n=0,r=(t=Ct(t,e)).length;null!=e&&n<r;)e=e[_t(t[n++])];return n&&n==r?e:void 0};var Mt=w((function(e,t,n){var r=null==e?void 0:Tt(e,t);return void 0===r?n:r}));const zt=(e,t,n)=>t?Mt(n,t)||Mt(e,t):n||e,At=(e,t)=>{const n=t||e.defaultValue;return Mt(e.collections,n)};var Pt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Pt||(Pt={}));const It={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Lt=e=>t=>{const n=t.theme,r=At(It,n[Pt.colorScheme]);return n.options&&n.options.color?zt(r,e,n.options.color):zt(r,e)},Wt={Brand:{1:Lt("Brand.1"),2:Lt("Brand.2"),3:Lt("Brand.3"),4:Lt("Brand.4"),5:Lt("Brand.5"),6:Lt("Brand.6")},Primary:Lt("Primary"),PrimaryDark:Lt("PrimaryDark"),Secondary:Lt("Secondary"),Accent:{Light:{1:Lt("Accent.Light.1"),2:Lt("Accent.Light.2"),3:Lt("Accent.Light.3"),4:Lt("Accent.Light.4"),5:Lt("Accent.Light.5"),6:Lt("Accent.Light.6")},Dark:{1:Lt("Accent.Dark.1"),2:Lt("Accent.Dark.2"),3:Lt("Accent.Dark.3")}},Neutral:{1:Lt("Neutral.1"),2:Lt("Neutral.2"),3:Lt("Neutral.3"),4:Lt("Neutral.4"),5:Lt("Neutral.5"),6:Lt("Neutral.6"),7:Lt("Neutral.7"),8:Lt("Neutral.8")},Validation:{Green:{Text:Lt("Validation.Green.Text"),Icon:Lt("Validation.Green.Icon"),Border:Lt("Validation.Green.Border"),Background:Lt("Validation.Green.Background")},Orange:{Text:Lt("Validation.Orange.Text"),Icon:Lt("Validation.Orange.Icon"),Border:Lt("Validation.Orange.Border"),Background:Lt("Validation.Orange.Background"),Badge:Lt("Validation.Orange.Badge")},Red:{Text:Lt("Validation.Red.Text"),Icon:Lt("Validation.Red.Icon"),Border:Lt("Validation.Red.Border"),Background:Lt("Validation.Red.Background")},Blue:{Text:Lt("Validation.Blue.Text"),Icon:Lt("Validation.Blue.Icon"),Border:Lt("Validation.Blue.Border"),Background:Lt("Validation.Blue.Background")}},Shadow:{Accent:Lt("Shadow.Accent"),Red:Lt("Shadow.Red"),Elevation:Lt("Shadow.Elevation")}},Rt={collections:{base:{InputBoxShadow:f`
        inset 0 0 4px 0px ${Wt.Shadow.Accent}
    `,InputErrorBoxShadow:f`
        inset 0 0 4px 0px ${Wt.Shadow.Red}
    `,ElevationBoxShadow:f`
      0px 2px 8px ${Wt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:f`
        inset 0 0 3px 0px ${Wt.Shadow.Accent}
    `,InputErrorBoxShadow:f`
        inset 0 0 3px 0px ${Wt.Shadow.Red}
    `,ElevationBoxShadow:f`
      0px 2px 8px ${Wt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Vt=e=>t=>{var n;const r=t.theme,o=At(Rt,r[Pt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?zt(o,e,r.options.designToken):zt(o,e)},Yt={InputBoxShadow:Vt("InputBoxShadow"),InputErrorBoxShadow:Vt("InputErrorBoxShadow"),ElevationBoxShadow:Vt("ElevationBoxShadow"),Table:{Header:Vt("Table.Header"),Cell:{Primary:Vt("Table.Cell.Primary"),Secondary:Vt("Table.Cell.Secondary"),Selected:Vt("Table.Cell.Selected"),Hover:Vt("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Vt("Button.Danger.BackgroundColor"),Hover:Vt("Button.Danger.Hover"),Primary:Vt("Button.Danger.Primary"),Border:Vt("Button.Danger.Border")}}},Nt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Jt=e=>Object.keys(Nt).reduce(((t,n)=>{const r=Nt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Zt=Jt("max-width"),Ut=(Jt("min-width"),Nt),Xt=d.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,qt=h`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Qt=d.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Wt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${qt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Gt=d(Qt)`
    animation-delay: -0.45s;
`,Kt=d(Qt)`
    animation-delay: -0.3s;
`,en=d(Qt)`
    animation-delay: -0.15s;
`,tn={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},nn={D1:{fontFamily:tn.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:tn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:tn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:tn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:tn.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:tn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:tn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:tn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:tn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:tn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:tn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:tn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:tn.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:tn.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},rn={D1:{fontFamily:tn.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:tn.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:tn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:tn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:tn.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:tn.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:tn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:tn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:tn.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:tn.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:tn.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:tn.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:tn.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:tn.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},on={collections:{base:nn,oneservice:{D1:{fontFamily:tn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:tn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:tn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:tn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:tn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:tn.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:tn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:tn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:tn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:tn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:tn.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:tn.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:tn.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:tn.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:rn},defaultValue:"base"},an=e=>t=>{const n=t.theme,r=At(on,n[Pt.textStyleScheme]);return n.options&&n.options.textStyle?zt(r,e,n.options.textStyle):zt(r,e)},sn={D1:{fontFamily:an("D1.fontFamily"),fontSize:an("D1.fontSize"),fontWeight:an("D1.fontWeight"),lineHeight:an("D1.lineHeight"),letterSpacing:an("D1.letterSpacing"),fontVariant:an("D1.fontVariant")},D2:{fontFamily:an("D2.fontFamily"),fontSize:an("D2.fontSize"),fontWeight:an("D2.fontWeight"),lineHeight:an("D2.lineHeight"),letterSpacing:an("D2.letterSpacing"),fontVariant:an("D2.fontVariant")},D3:{fontFamily:an("D3.fontFamily"),fontSize:an("D3.fontSize"),fontWeight:an("D3.fontWeight"),lineHeight:an("D3.lineHeight"),letterSpacing:an("D3.letterSpacing"),fontVariant:an("D3.fontVariant")},D4:{fontFamily:an("D4.fontFamily"),fontSize:an("D4.fontSize"),fontWeight:an("D4.fontWeight"),lineHeight:an("D4.lineHeight"),letterSpacing:an("D4.letterSpacing"),fontVariant:an("D4.fontVariant")},DBody:{fontFamily:an("DBody.fontFamily"),fontSize:an("DBody.fontSize"),fontWeight:an("DBody.fontWeight"),lineHeight:an("DBody.lineHeight"),letterSpacing:an("DBody.letterSpacing"),fontVariant:an("DBody.fontVariant")},H1:{fontFamily:an("H1.fontFamily"),fontSize:an("H1.fontSize"),fontWeight:an("H1.fontWeight"),lineHeight:an("H1.lineHeight"),letterSpacing:an("H1.letterSpacing"),fontVariant:an("H1.fontVariant")},H2:{fontFamily:an("H2.fontFamily"),fontSize:an("H2.fontSize"),fontWeight:an("H2.fontWeight"),lineHeight:an("H2.lineHeight"),letterSpacing:an("H2.letterSpacing"),fontVariant:an("H2.fontVariant")},H3:{fontFamily:an("H3.fontFamily"),fontSize:an("H3.fontSize"),fontWeight:an("H3.fontWeight"),lineHeight:an("H3.lineHeight"),letterSpacing:an("H3.letterSpacing"),fontVariant:an("H3.fontVariant")},H4:{fontFamily:an("H4.fontFamily"),fontSize:an("H4.fontSize"),fontWeight:an("H4.fontWeight"),lineHeight:an("H4.lineHeight"),letterSpacing:an("H4.letterSpacing"),fontVariant:an("H4.fontVariant")},H5:{fontFamily:an("H5.fontFamily"),fontSize:an("H5.fontSize"),fontWeight:an("H5.fontWeight"),lineHeight:an("H5.lineHeight"),letterSpacing:an("H5.letterSpacing"),fontVariant:an("H5.fontVariant")},H6:{fontFamily:an("H6.fontFamily"),fontSize:an("H6.fontSize"),fontWeight:an("H6.fontWeight"),lineHeight:an("H6.lineHeight"),letterSpacing:an("H6.letterSpacing"),fontVariant:an("H6.fontVariant")},Body:{fontFamily:an("Body.fontFamily"),fontSize:an("Body.fontSize"),fontWeight:an("Body.fontWeight"),lineHeight:an("Body.lineHeight"),letterSpacing:an("Body.letterSpacing"),fontVariant:an("Body.fontVariant")},BodySmall:{fontFamily:an("BodySmall.fontFamily"),fontSize:an("BodySmall.fontSize"),fontWeight:an("BodySmall.fontWeight"),lineHeight:an("BodySmall.lineHeight"),letterSpacing:an("BodySmall.letterSpacing"),fontVariant:an("BodySmall.fontVariant")},XSmall:{fontFamily:an("XSmall.fontFamily"),fontSize:an("XSmall.fontSize"),fontWeight:an("XSmall.fontWeight"),lineHeight:an("XSmall.lineHeight"),letterSpacing:an("XSmall.letterSpacing"),fontVariant:an("XSmall.fontVariant")}},ln=[tn.OpenSans,tn.PlusJakartaSans],cn=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},un=(e,t)=>n=>{var r;const o=sn[e].fontFamily(n),i=sn[e].fontWeight(n),a=ln.find((e=>Object.values(e).includes(o)));return a?f`
                font-family: ${cn(a,t)||cn(a,i)||o};
                font-weight: normal !important;
            `:f`
            font-family: ${o};
            font-weight: ${null!==(r=dn(t)||i)&&void 0!==r?r:"normal"};
        `},dn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},fn=e=>{if(e>0)return f`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},hn=(e,t,n=!1)=>r=>{const o=sn[e],i=o.fontSize(r);return f`
            ${un(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            font-variant: ${o.fontVariant(r)||"normal"};
            ${f`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},pn=(e=!1,t=!1,n=void 0)=>t?f`
            display: block;
            ${fn(n)}
        `:e?f`
            display: inline;
        `:f`
            display: block;
            ${fn(n)}
        `;var gn;!function(e){e.D1=d.h1`
        ${e=>f`
                ${hn("D1",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${pn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=d.h1`
        ${e=>f`
                ${hn("D2",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${pn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=d.h1`
        ${e=>f`
                ${hn("D3",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${pn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=d.h1`
        ${e=>f`
                ${hn("D4",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${pn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=d.h1`
        ${e=>f`
                ${hn("DBody",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${pn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=d.h1`
        ${e=>f`
                ${hn("H1",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${pn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=d.h2`
        ${e=>f`
                ${hn("H2",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${pn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=d.h3`
        ${e=>f`
                ${hn("H3",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${pn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=d.h4`
        ${e=>f`
                ${hn("H4",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${pn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=d.h5`
        ${e=>f`
                ${hn("H5",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${pn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=d.h6`
        ${e=>f`
                ${hn("H6",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${pn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=d.p`
        ${e=>f`
                ${hn("Body",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${pn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=d.p`
        ${e=>f`
                ${hn("BodySmall",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${pn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=d.span`
        ${e=>f`
                ${hn("XSmall",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${pn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>vn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>vn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(gn||(gn={}));const mn=d.a`
    ${e=>f`
            ${hn(e.textStyle,e.weight)}
            color: ${Wt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Wt.Secondary};

                svg {
                    color: ${Wt.Secondary};
                }
            }
        `}
`,yn=d(p)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,vn=n=>{var{external:r=!1,children:o}=n,i=$(n,["external","children"]);return e(mn,Object.assign({},i,{children:[o,r&&t(yn,{})]}))};var bn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(bn||(bn={}));const Sn=d.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return f`
                    background-color: ${Wt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Yt.Button.Danger.Border:Wt.Primary};

                    color: ${e.$buttonIsDanger?Yt.Button.Danger.Primary:Wt.Primary};
                `;case"light":return f`
                    background-color: ${Wt.Neutral[8]};
                    border: 1px solid ${Wt.Neutral[5]};

                    color: ${e.$buttonIsDanger?Yt.Button.Danger.Primary:Wt.Primary};
                `;case"disabled":return f`
                    background-color: ${Wt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Wt.Neutral[3]};
                `;case"link":return f`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Yt.Button.Danger.Primary:Wt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Yt.Button.Danger.Hover:Wt.Secondary};
                    }
                `;default:return f`
                    background-color: ${e.$buttonIsDanger?Yt.Button.Danger.BackgroundColor:Wt.Primary};
                    border: 1px solid transparent;

                    ${Zt.mobileL} {
                        width: 100%;
                    }

                    color: ${Wt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?f`
                    height: 2.5rem;
                    ${hn("H5","semibold")}

                    ${Zt.mobileS} {
                        height: auto;
                    }
                `:f`
                    height: 3rem;
                    ${hn("H4","semibold")}

                    ${Zt.mobileS} {
                        height: auto;
                    }
                `}
`,$n=d((({color:n,className:r,size:o=18})=>e(Xt,Object.assign({className:r,$size:o,$color:n,"data-testid":"component-loading-spinner"},{children:[t(Qt,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t(Gt,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(Kt,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t(en,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    ${e=>{let t=e.$buttonIsDanger?Yt.Button.Danger.Primary:Wt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Wt.Neutral[3](e);break;default:t=Wt.Neutral[8](e)}return f`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Fn=d(Sn)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>"small"===e.$buttonSizeStyle?f`
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `:f`
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}
`,xn={Default:i.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left",loading:u=!1}=n,d=$(n,["children","disabled","styleType","danger","icon","iconPosition","loading"]),f={$buttonIconPosition:c,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s,$buttonWithIcon:!0};return e(Fn,Object.assign({ref:r,"data-testid":d["data-testid"]||"button-with-icon",disabled:i},f,d,{children:[u?t($n,Object.assign({},f)):l,t("span",{children:o})]}))})),Small:i.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left",loading:u=!1}=n,d=$(n,["children","disabled","styleType","danger","icon","iconPosition","loading"]),f={$buttonIconPosition:c,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s,$buttonWithIcon:!0};return e(Fn,Object.assign({ref:r,"data-testid":d["data-testid"]||"button-with-icon",disabled:i},f,d,{children:[u?t($n,Object.assign({},f,{size:16})):l,t("span",{children:o})]}))}))},wn=({className:e,progress:n,color:r,"data-testid":o})=>t(Dn,Object.assign({className:e,$innerWidth:n,$color:r,"data-testid":o},{children:t("progress",{value:100*n,max:100})})),Dn=d.div`
    position: relative;
    width: 100%;
    height: 8px;
    background: transparent;

    progress {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    ${e=>{const{$color:t}=e;let n;return n=t&&"string"==typeof t?t:t?t(e):Wt.Accent.Light[1](e),f`
            border: 1px solid ${n};
            border-radius: 4px;

            :after {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                border-radius: inherit;
                background: ${n};
                width: ${100*e.$innerWidth}%;
            }
        `}}
`,Bn={Default:i.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=$(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Sn,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t($n,Object.assign({},u)),t("span",{children:o})]}))})),Small:i.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=$(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Sn,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t($n,Object.assign({},u,{size:16})),t("span",{children:o})]}))}))},On=d.button`
    align-items: center;
    background-color: ${Wt.Primary};
    border-radius: 0.25rem;
    color: ${Wt.Neutral[8]};
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$sizeType){case"large":return f`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return f`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return f`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${e=>{switch(e.$styleType){case"secondary":return f`
                    background-color: ${Wt.Neutral[8]};
                    border: 1px solid ${Wt.Primary};
                    color: ${Wt.Primary};
                `;case"light":return f`
                    background-color: ${Wt.Neutral[8]};
                    border: 1px solid ${Wt.Neutral[5]};
                    color: ${Wt.Primary};
                `;default:return f`
                    background-color: ${Wt.Primary};
                    border: none;
                    color: ${Wt.Neutral[8]};
                `}}}
    &:hover {
        box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
    }
    &:disabled {
        background-color: ${Wt.Neutral[6]};
        border: 1px solid ${Wt.Neutral[6]};
        color: ${Wt.Neutral[3]};
        cursor: not-allowed;

        &:hover {
            box-shadow: none;
        }
    }
`,kn=i.forwardRef(((e,n)=>{var{"data-testid":r,styleType:o="primary",children:i,sizeType:a="default",type:s="button"}=e,l=$(e,["data-testid","styleType","children","sizeType","type"]);return t(On,Object.assign({"data-testid":r||"iconButton",ref:n,type:s,$sizeType:a,$styleType:o},l,{children:i}))}));var En={exports:{}};En.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",S={};S[b]=m;var $="$isDayjsObject",F=function(e){return e instanceof B||!(!e||!e[$])},x=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();S[i]&&(o=i),n&&(S[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;S[s]=t,o=s}return!r&&o&&(b=o),o||!r&&b},w=function(e,t){if(F(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new B(n)},D=v;D.l=x,D.i=F,D.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var B=function(){function m(e){this.$L=x(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[$]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return D},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return w(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<w(e)},y.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!D.u(t)||t,u=D.p(e),h=function(e,t){var o=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(s)},p=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case l:var b=this.$locale().weekStart||0,S=(g<b?g+7:g)-b;return h(r?y-S:y+(6-S),m);case s:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=D.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[s]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[D.p(e)]()},y.add=function(r,u){var f,h=this;r=Number(r);var p=D.p(u),g=function(e){var t=w(h);return D.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(f={},f[i]=t,f[a]=n,f[o]=e,f)[p]||1,y=this.$d.getTime()+r*m;return D.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=D.z(this),i=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return D.s(i%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return D.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,h){var p,g=this,m=D.p(f),y=w(r),v=(y.utcOffset()-this.utcOffset())*t,b=this-y,S=function(){return D.m(g,y)};switch(m){case d:p=S()/12;break;case c:p=S();break;case u:p=S()/3;break;case l:p=(b-v)/6048e5;break;case s:p=(b-v)/864e5;break;case a:p=b/n;break;case i:p=b/t;break;case o:p=b/e;break;default:p=b}return h?p:D.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return S[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=x(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return D.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),O=B.prototype;return w.prototype=O,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,B,w),e.$i=!0),w},w.locale=x,w.isDayjs=F,w.unix=function(e){return w(1e3*e)},w.en=S[b],w.Ls=S,w.p={},w}();var Hn=w(En.exports),jn={exports:{}};jn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,o=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},s=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=a.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},f={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],Q:[n,function(e){this.month=3*(e-1)+1}],S:[n,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[o,l("seconds")],ss:[o,l("seconds")],m:[o,l("minutes")],mm:[o,l("minutes")],H:[o,l("hours")],h:[o,l("hours")],HH:[o,l("hours")],hh:[o,l("hours")],D:[o,l("day")],DD:[r,l("day")],Do:[i,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],w:[o,l("week")],ww:[r,l("week")],M:[o,l("month")],MM:[r,l("month")],MMM:[i,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,l("year")],Z:c,ZZ:c};function h(n){var r,o;r=n,o=a&&a.formats;for(var i=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=i.length,l=0;l<s;l+=1){var c=i[l],u=f[c],d=u&&u[0],h=u&&u[1];i[l]=h?{regex:d,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var o=i[n];if("string"==typeof o)r+=o.length;else{var a=o.regex,l=o.parser,c=e.slice(r),u=a.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,i=e.args;this.$u=r;var s=i[1];if("string"==typeof s){var l=!0===i[2],c=!0===i[3],u=l||c,d=i[2];c&&(d=i[2]),a=this.$locale(),!l&&d&&(a=n.Ls[d]),this.$d=function(e,t,n,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var o=h(t)(e),i=o.year,a=o.month,s=o.day,l=o.hours,c=o.minutes,u=o.seconds,d=o.milliseconds,f=o.zone,p=o.week,g=new Date,m=s||(i||a?1:g.getDate()),y=i||g.getFullYear(),v=0;i&&!a||(v=a>0?a-1:g.getMonth());var b,S=l||0,$=c||0,F=u||0,x=d||0;return f?new Date(Date.UTC(y,v,m,S,$,F,x+60*f.offset*1e3)):n?new Date(Date.UTC(y,v,m,S,$,F,x)):(b=new Date(y,v,m,S,$,F,x),p&&(b=r(b).week(p).toDate()),b)}catch(e){return new Date("")}}(t,s,r,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){i[1]=s[p-1];var g=n.apply(this,i);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Cn=w(jn.exports),_n={exports:{}};_n.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var Tn=w(_n.exports),Mn={exports:{}};Mn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var zn=w(Mn.exports),An={exports:{}};An.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Pn,In,Ln,Wn=w(An.exports),Rn={exports:{}},Vn=w(Rn.exports=(Pn={year:0,month:1,day:2,hour:3,minute:4,second:5},In={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=In[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),In[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=Pn[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o,i=this.utcOffset(),a=this.toDate(),s=a.toLocaleString("en-US",{timeZone:e}),l=Math.round((a-new Date(s))/1e3/60),c=15*-Math.round(a.getTimezoneOffset()/15)-l;if(Number(c)){if(o=n(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(c,!0),t){var u=o.utcOffset();o=o.add(i-u,"minute")}}else o=this.utcOffset(0,t);return o.$x.$timezone=e,o},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,s=o||t||r,l=i(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}));Hn.extend(Tn),Hn.extend(Wn),Hn.extend(zn),Hn.extend(Cn),Hn.extend(Vn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Hn(t).startOf("week");return Yn(n).map((e=>Nn(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Nn(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Hn(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Hn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Hn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?Hn(r):void 0,o?Hn(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Ln||(Ln={}));const Yn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Nn=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Jn=[1,3,5,7,8,10,12],Zn=[4,6,9,11];var Un,Xn,qn,Qn;!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":Jn.includes(i)?Math.min(o,31).toString():Zn.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Hn(e,n);return Hn(t,n).diff(r,"minute")},e.toDayjs=e=>e?Hn(e):Hn(),e.addMinutesToTime=(e,t,n="HH:mm")=>Hn(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>Hn(e).isSame(Hn(t),n)}(Un||(Un={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Hn(e).isBefore(r,"day"))||!(!o||!Hn(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Hn(e).isValid())return e}return""}}(Xn||(Xn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(qn||(qn={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const o=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Qn||(Qn={}));const Gn=d.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return f`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Kn=d.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=f`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=f`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=f`
                transition: none;
            `),t}}
`;var er;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(er||(er={}));const tr=({show:e=!1,rootId:n,onOverlayClick:r,children:o,backgroundOpacity:c,backgroundBlur:u=!0,disableTransition:d=!1,enableOverlayClick:f=!1,zIndex:h,id:p})=>{const[m,S]=s(null),[$,F]=s(),[x]=s((()=>qn.generate())),w=y(),D=l(),B=l(null),O=o&&i.cloneElement(o,{ref:B}),k=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root",E=null!=h?h:$?99999:99998;(e=>{const t=g();a((()=>{if(!t)return;const n={zIndex:e};t.events.emit(er.Change,n)}),[t,e]),a((()=>{if(!t)return;const n=()=>{const n={zIndex:e};t.events.emit(er.Change,n)};return null==t||t.events.on(er.Ready,n),()=>null==t?void 0:t.events.off(er.Ready,n)}),[t,e])})(E),a((()=>(_(),S(j()),()=>{A(),M().length<1&&T("remove")})),[]),a((()=>{if(e){const e=C();H(e),z();const t=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(t)}{A();const e=setTimeout((()=>{M().length<1&&T("remove")}),200);return()=>clearTimeout(e)}}),[e]);const H=e=>{D.current=e,F(e)},j=()=>document&&n?document.getElementById(n):document?document.body:null,C=()=>M().length>0,_=()=>{if(!document.getElementById(rr)){const e=document.createElement("style");e.id=rr;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${or} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${or}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},T=e=>{const t=document.body.classList.contains(or);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(or):document.body.classList.add(or)},M=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},z=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=[...e,x].join(",")},A=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==x)).join(",")},P=e=>{var t;const n=null===(t=B.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&f&&(e.preventDefault(),r())};return m?b.createPortal(t(Gn,Object.assign({id:k,"data-testid":k,$show:e,$zIndex:E},{children:o&&t(v,Object.assign({id:w},{children:t(Kn,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:c||($?.5:.8),$backgroundBlur:u,$disableTransition:d,onClick:P},{children:O}))}))})),m):null},nr=e=>t(m,{children:t(tr,Object.assign({},e))}),rr="lifesg-ds-overlay-stylesheet",or="lifesg-ds-overlay-open",ir=d.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${Zt.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,ar=d.button`
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

        ${({$highlight:e})=>e&&f`
                background-color: ${Wt.Neutral[7]};
            `}
    }
`,sr=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,s=$(e,["children","focusHighlight","focusOutline","type"]);return t(ar,Object.assign({ref:n,$outline:i,$highlight:o,type:a},s,{children:r}))})),lr=d.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Wt.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Zt.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,cr=d(sr)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${Wt.Neutral[3]};

    :focus-visible {
        outline: 4px solid ${Wt.Accent.Light[1]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Zt.mobileL} {
        right: 1.25rem;
    }
`,ur=Object.assign((e=>{var{id:n="modal",show:r,animationFrom:o="bottom",children:i,enableOverlayClick:l=!0,rootComponentId:c,zIndex:u,onOverlayClick:d,dismissKeyboardOnShow:f=!0}=e,h=$(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[p,g]=s(),[m,y]=s();a((()=>window.visualViewport?(b(),window.visualViewport.addEventListener("resize",b),()=>{window.visualViewport.removeEventListener("resize",b)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),a((()=>{var e,t;r&&f&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const v=()=>{const e=.01*window.innerHeight;g(e)},b=()=>{const e=.01*window.visualViewport.height;g(e),y(window.visualViewport.offsetTop)};return t(nr,Object.assign({"data-testid":`${n}-overlay`,show:r,enableOverlayClick:l,onOverlayClick:d,id:n,rootId:c,zIndex:u},{children:t(ir,Object.assign({show:r,animationFrom:o,"data-testid":n,verticalHeight:p,offsetTop:m},h,{children:i}))}))}),{Box:n=>{var{id:r="modal-box",children:o,onClose:i,showCloseButton:a=!0}=n,s=$(n,["id","children","onClose","showCloseButton"]);return e(lr,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&t(cr,Object.assign({onClick:i,"data-testid":"close-button",focusHighlight:!1},{children:t(S,{})})),o]}))}}),dr=` ${Zt.mobileL}, (orientation: landscape) and (max-height: ${Ut.mobileL}px)`,fr=`@media(orientation: landscape) and (max-height: ${Ut.mobileL}px)`,hr=d.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${e=>`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${encodeURIComponent(Wt.Neutral[5](e))}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");`};
    background-color: ${Wt.Neutral[8]};
    border-radius: 4px;
    height: 14.125rem;
`,pr=d(Bn.Default)`
    width: fit-content;
    padding: 0 2rem;
    margin: 0 2rem;
`,gr=d(kn)`
    position: absolute;
    top: 1rem;
    right: 1rem;
`,mr=d.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - 8rem);
    height: 100%;
`,yr=d.div`
    background: ${Wt.Accent.Light[6]};
    border: 1px solid ${Wt.Neutral[5]};
    border-radius: 4px;
    margin: 0 2rem;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    flex: 1;
    flex-direction: column;
    align-items: center;
`,vr=d(gn.H6)`
    margin-top: 1rem;
`,br=d(ur)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,Sr=d.div`
    width: 100%;
    margin: auto;
    padding: 5rem 1.25rem;

    ${dr} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,$r=d(ur.Box)`
    width: 100%;
    height: 29rem;
    max-width: 42rem;
    max-height: none;
    margin: 0 auto;
    padding: 1rem;

    ${dr} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;
    }
`,Fr=d.h4`
    ${hn("H4","semibold")}
    margin-bottom: 1rem;
    color: ${Wt.Neutral[1]};
    text-align: center;

    ${dr} {
        ${hn("H5","semibold")}
        margin: 0.75rem 0;
    }
`,xr=d.div`
    width: 100%;
    height: 20rem;
    border-radius: 12px;
    overflow: hidden;

    ${dr} {
        border-radius: 0;
        flex: 1;
    }

    ${fr} {
        background: ${Wt.Neutral[7]};
    }
`,wr=d.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${Wt.Neutral[6]};
    margin: auto;

    ${dr} {
        aspect-ratio: 4/3;
    }
    ${Zt.mobileL} {
        width: 100%;
        height: auto;
    }
    ${fr} {
        width: auto;
        height: 100%;
    }
`,Dr=d.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 18.75rem;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${Wt.Neutral[4]};
    pointer-events: none;

    ${dr} {
        width: calc(100% - 4rem);
        max-width: 18.75rem;
        left: 50%;
    }
`,Br=d.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    ${Zt.mobileL} {
        flex-direction: column-reverse;
        margin: 1rem 1.25rem 3rem;
        gap: 1rem;
    }

    ${fr} {
        flex-direction: row;
        margin: 1rem 1.25rem 1rem;
    }
`,Or=d(Bn.Default)`
    width: 8.5rem;
    ${Zt.mobileL} {
        width: 100%;
    }
    ${fr} {
        height: 2.5rem;
    }
`,kr=d.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Er=d.canvas`
    cursor: crosshair;
`,Hr=c((()=>F(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.1aa13439.js")).ESignatureCanvas}})))),jr=i=>{const{description:c,id:d,loadingProgress:f,loadingLabel:h="Uploading...",onChange:p,value:g}=i,m=$(i,["description","id","loadingProgress","loadingLabel","onChange","value"]),[y,v]=s(!1),b=l(null),[S,F]=s(g),x=O.useMediaQuery({maxWidth:Ut.mobileL}),w=()=>{var e;null===(e=b.current)||void 0===e||e.clear()},D=()=>{var e;if(b.current){const t=null===(e=b.current)||void 0===e?void 0:e.export();F(t),v(!1),null==p||p(t)}};a((()=>{F(g)}),[g]);return e("div",Object.assign({},m,{children:[t(hr,{children:isNaN(f)?S?e(n,{children:[t(mr,{src:S,alt:"Signature preview"}),t(gr,Object.assign({styleType:"light",onClick:()=>v(!0),id:d,"aria-label":"Edit signature"},{children:t(r,{})}))]}):t(pr,Object.assign({type:"button",styleType:"secondary","aria-label":"Add signature",id:d,onClick:()=>v(!0)},{children:"Add signature"})):e(yr,{children:[h&&t(gn.BodySmall,{children:h}),t(wn,{progress:f,"data-testid":`${d||"e-signature"}-progress-bar`})]})}),t(br,Object.assign({"data-testid":"signature-modal",show:y},{children:t(Sr,{children:e($r,Object.assign({onClose:()=>v(!1)},{children:[t(Fr,{children:"Signature"}),t(xr,{children:e(wr,{children:[t(Dr,{}),t(u,Object.assign({fallback:null},{children:y&&t(Hr,{ref:b,baseImageDataURL:S})}))]})}),e(Br,{children:[t(Or,Object.assign({as:xn.Default,type:"button",styleType:x?"light":"link",icon:t(o,{}),onClick:w},{children:"Clear"})),t(Or,Object.assign({type:"button",onClick:D},{children:"Save"}))]})]}))})})),c?t(vr,Object.assign({weight:"regular",as:"p"},{children:c})):null]}))};export{Wt as C,jr as E,kr as S,Pt as T,F as _,Er as a};
//# sourceMappingURL=index.aa67ca2a.js.map
