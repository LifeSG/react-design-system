import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import{PencilIcon as r,EraserIcon as o}from"@lifesg/react-icons";import i,{useEffect as a,useState as s,useRef as l,lazy as c,Suspense as u}from"react";import d,{css as f,keyframes as h}from"styled-components";import{ExternalIcon as p}from"@lifesg/react-icons/external";import{useFloatingTree as g,FloatingTree as m,useFloatingNodeId as y,FloatingNode as v}from"@floating-ui/react";import b from"react-dom";import{CrossIcon as S}from"@lifesg/react-icons/cross";function $(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function F(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function w(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function D(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var B,O={exports:{}};B=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \************************************************************/(e,t,n)=>{var r,o=n(/*! react-is */"./node_modules/react-is/index.js"),i=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",f={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:g(c),arrayOf:function(e){return g((function(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+o+" `"+i+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,o,i+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:g((function(t,n,r,o,i){var a=t[n];return e(a)?null:new p("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:g((function(e,t,n,r,i){var a=e[t];return o.isValidElementType(a)?null:new p("Invalid "+r+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||d;return new p("Invalid "+o+" `"+i+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:g((function(e,t,n,r,o){return v(e[t])?null:new p("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=b(l);if("object"!==c)return new p("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var u in l)if(s(l,u)){var d=e(l,u,r,o,i+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(t,n,r,o,i){for(var a=t[n],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===S(t)?String(t):t}));return new p("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+$(n)+" at index "+t+"."),c}return g((function(t,n,r,o,i){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,n,r,o,i,a);if(null==u)return null;u.data&&s(u.data,"expectedType")&&l.push(u.data.expectedType)}return new p("Invalid "+o+" `"+i+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(t,n,r,o,i){var s=t[n],l=b(s);if("object"!==l)return new p("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return y(r,o,i,c,S(u));var d=u(s,c,r,o,i+"."+c,a);if(d)return d}return null}))},exact:function(e){return g((function(t,n,r,o,l){var c=t[n],u=b(c);if("object"!==u)return new p("Invalid "+o+" `"+l+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=i({},t[n],e);for(var f in d){var h=e[f];if(s(e,f)&&"function"!=typeof h)return y(r,o,l,f,S(h));if(!h)return new p("Invalid "+o+" `"+l+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=h(c,f,r,o,l+"."+f,a);if(g)return g}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function g(e){var n={},o=0;function i(i,s,l,c,u,f,h){if(c=c||d,f=f||l,h!==a){if(t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var m=c+":"+l;!n[m]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[m]=!0,o++)}}return null==s[l]?i?null===s[l]?new p("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,f)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function m(e){return g((function(t,n,r,o,i,a){var s=t[n];return b(s)!==e?new p("Invalid "+o+" `"+i+"` of type `"+S(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,o){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!v(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function S(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function $(e){var t=S(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,f.checkPropTypes=l,f.resetWarningCache=l.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var h=e.type;switch(h){case c:case u:case o:case a:case i:case f:return h;default:var m=h&&h.$$typeof;switch(m){case l:case d:case g:case p:case s:return m;default:return t}}case r:return t}}}var $=c,F=u,x=l,w=s,D=n,B=d,O=o,k=g,E=p,H=r,j=a,_=i,C=f,T=!1;function M(e){return S(e)===u}t.AsyncMode=$,t.ConcurrentMode=F,t.ContextConsumer=x,t.ContextProvider=w,t.Element=D,t.ForwardRef=B,t.Fragment=O,t.Lazy=k,t.Memo=E,t.Portal=H,t.Profiler=j,t.StrictMode=_,t.Suspense=C,t.isAsyncMode=function(e){return T||(T=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),M(e)||S(e)===c},t.isConcurrentMode=M,t.isContextConsumer=function(e){return S(e)===l},t.isContextProvider=function(e){return S(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return S(e)===d},t.isFragment=function(e){return S(e)===o},t.isLazy=function(e){return S(e)===g},t.isMemo=function(e){return S(e)===p},t.isPortal=function(e){return S(e)===r},t.isProfiler=function(e){return S(e)===a},t.isStrictMode=function(e){return S(e)===i},t.isSuspense=function(e){return S(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===m)},t.typeOf=S}()},"./node_modules/react-is/index.js":
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
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var k=O.exports=B(i);var E=Array.isArray,H="object"==typeof x&&x&&x.Object===Object&&x,j="object"==typeof self&&self&&self.Object===Object&&self,_=H||j||Function("return this")(),C=_.Symbol,T=C,M=Object.prototype,z=M.hasOwnProperty,A=M.toString,P=T?T.toStringTag:void 0;var I=function(e){var t=z.call(e,P),n=e[P];try{e[P]=void 0;var r=!0}catch(e){}var o=A.call(e);return r&&(t?e[P]=n:delete e[P]),o},L=Object.prototype.toString;var W=I,R=function(e){return L.call(e)},V=C?C.toStringTag:void 0;var Y=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":V&&V in Object(e)?W(e):R(e)};var N=Y,J=function(e){return null!=e&&"object"==typeof e};var Z=function(e){return"symbol"==typeof e||J(e)&&"[object Symbol]"==N(e)},U=E,X=Z,q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/;var G=function(e,t){if(U(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!X(e))||(Q.test(e)||!q.test(e)||null!=t&&e in Object(t))};var K=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ee=Y,te=K;var ne,re=function(e){if(!te(e))return!1;var t=ee(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},oe=_["__core-js_shared__"],ie=(ne=/[^.]+$/.exec(oe&&oe.keys&&oe.keys.IE_PROTO||""))?"Symbol(src)_1."+ne:"";var ae=function(e){return!!ie&&ie in e},se=Function.prototype.toString;var le=re,ce=ae,ue=K,de=function(e){if(null!=e){try{return se.call(e)}catch(e){}try{return e+""}catch(e){}}return""},fe=/^\[object .+?Constructor\]$/,he=Function.prototype,pe=Object.prototype,ge=he.toString,me=pe.hasOwnProperty,ye=RegExp("^"+ge.call(me).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ve=function(e){return!(!ue(e)||ce(e))&&(le(e)?ye:fe).test(de(e))},be=function(e,t){return null==e?void 0:e[t]};var Se=function(e,t){var n=be(e,t);return ve(n)?n:void 0},$e=Se(Object,"create"),Fe=$e;var xe=function(){this.__data__=Fe?Fe(null):{},this.size=0};var we=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},De=$e,Be=Object.prototype.hasOwnProperty;var Oe=function(e){var t=this.__data__;if(De){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Be.call(t,e)?t[e]:void 0},ke=$e,Ee=Object.prototype.hasOwnProperty;var He=$e;var je=xe,_e=we,Ce=Oe,Te=function(e){var t=this.__data__;return ke?void 0!==t[e]:Ee.call(t,e)},Me=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=He&&void 0===t?"__lodash_hash_undefined__":t,this};function ze(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ze.prototype.clear=je,ze.prototype.delete=_e,ze.prototype.get=Ce,ze.prototype.has=Te,ze.prototype.set=Me;var Ae=ze;var Pe=function(){this.__data__=[],this.size=0};var Ie=function(e,t){return e===t||e!=e&&t!=t};var Le=function(e,t){for(var n=e.length;n--;)if(Ie(e[n][0],t))return n;return-1},We=Le,Re=Array.prototype.splice;var Ve=Le;var Ye=Le;var Ne=Le;var Je=Pe,Ze=function(e){var t=this.__data__,n=We(t,e);return!(n<0)&&(n==t.length-1?t.pop():Re.call(t,n,1),--this.size,!0)},Ue=function(e){var t=this.__data__,n=Ve(t,e);return n<0?void 0:t[n][1]},Xe=function(e){return Ye(this.__data__,e)>-1},qe=function(e,t){var n=this.__data__,r=Ne(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Qe.prototype.clear=Je,Qe.prototype.delete=Ze,Qe.prototype.get=Ue,Qe.prototype.has=Xe,Qe.prototype.set=qe;var Ge=Qe,Ke=Se(_,"Map"),et=Ae,tt=Ge,nt=Ke;var rt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var ot=function(e,t){var n=e.__data__;return rt(t)?n["string"==typeof t?"string":"hash"]:n.map},it=ot;var at=ot;var st=ot;var lt=ot;var ct=function(){this.size=0,this.__data__={hash:new et,map:new(nt||tt),string:new et}},ut=function(e){var t=it(this,e).delete(e);return this.size-=t?1:0,t},dt=function(e){return at(this,e).get(e)},ft=function(e){return st(this,e).has(e)},ht=function(e,t){var n=lt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function pt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}pt.prototype.clear=ct,pt.prototype.delete=ut,pt.prototype.get=dt,pt.prototype.has=ft,pt.prototype.set=ht;var gt=pt;function mt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(mt.Cache||gt),n}mt.Cache=gt;var yt=mt;var vt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,bt=/\\(\\)?/g,St=function(e){var t=yt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(vt,(function(e,n,r,o){t.push(r?o.replace(bt,"$1"):n||e)})),t}));var $t=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},Ft=E,xt=Z,wt=C?C.prototype:void 0,Dt=wt?wt.toString:void 0;var Bt=function e(t){if("string"==typeof t)return t;if(Ft(t))return $t(t,e)+"";if(xt(t))return Dt?Dt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Ot=Bt;var kt=E,Et=G,Ht=St,jt=function(e){return null==e?"":Ot(e)};var _t=Z;var Ct=function(e,t){return kt(e)?e:Et(e,t)?[e]:Ht(jt(e))},Tt=function(e){if("string"==typeof e||_t(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Mt=function(e,t){for(var n=0,r=(t=Ct(t,e)).length;null!=e&&n<r;)e=e[Tt(t[n++])];return n&&n==r?e:void 0};var zt=w((function(e,t,n){var r=null==e?void 0:Mt(e,t);return void 0===r?n:r}));const At=(e,t,n)=>t?zt(n,t)||zt(e,t):n||e,Pt=(e,t)=>{const n=t||e.defaultValue;return zt(e.collections,n)};var It;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(It||(It={}));const Lt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Wt=e=>t=>{const n=t.theme,r=Pt(Lt,n[It.colorScheme]);return n.options&&n.options.color?At(r,e,n.options.color):At(r,e)},Rt={Brand:{1:Wt("Brand.1"),2:Wt("Brand.2"),3:Wt("Brand.3"),4:Wt("Brand.4"),5:Wt("Brand.5"),6:Wt("Brand.6")},Primary:Wt("Primary"),PrimaryDark:Wt("PrimaryDark"),Secondary:Wt("Secondary"),Accent:{Light:{1:Wt("Accent.Light.1"),2:Wt("Accent.Light.2"),3:Wt("Accent.Light.3"),4:Wt("Accent.Light.4"),5:Wt("Accent.Light.5"),6:Wt("Accent.Light.6")},Dark:{1:Wt("Accent.Dark.1"),2:Wt("Accent.Dark.2"),3:Wt("Accent.Dark.3")}},Neutral:{1:Wt("Neutral.1"),2:Wt("Neutral.2"),3:Wt("Neutral.3"),4:Wt("Neutral.4"),5:Wt("Neutral.5"),6:Wt("Neutral.6"),7:Wt("Neutral.7"),8:Wt("Neutral.8")},Validation:{Green:{Text:Wt("Validation.Green.Text"),Icon:Wt("Validation.Green.Icon"),Border:Wt("Validation.Green.Border"),Background:Wt("Validation.Green.Background")},Orange:{Text:Wt("Validation.Orange.Text"),Icon:Wt("Validation.Orange.Icon"),Border:Wt("Validation.Orange.Border"),Background:Wt("Validation.Orange.Background"),Badge:Wt("Validation.Orange.Badge")},Red:{Text:Wt("Validation.Red.Text"),Icon:Wt("Validation.Red.Icon"),Border:Wt("Validation.Red.Border"),Background:Wt("Validation.Red.Background")},Blue:{Text:Wt("Validation.Blue.Text"),Icon:Wt("Validation.Blue.Icon"),Border:Wt("Validation.Blue.Border"),Background:Wt("Validation.Blue.Background")}},Shadow:{Accent:Wt("Shadow.Accent"),Red:Wt("Shadow.Red"),Elevation:Wt("Shadow.Elevation")}},Vt={collections:{base:{InputBoxShadow:f`
        inset 0 0 4px 0px ${Rt.Shadow.Accent}
    `,InputErrorBoxShadow:f`
        inset 0 0 4px 0px ${Rt.Shadow.Red}
    `,ElevationBoxShadow:f`
      0px 2px 8px ${Rt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:f`
        inset 0 0 3px 0px ${Rt.Shadow.Accent}
    `,InputErrorBoxShadow:f`
        inset 0 0 3px 0px ${Rt.Shadow.Red}
    `,ElevationBoxShadow:f`
      0px 2px 8px ${Rt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Yt=e=>t=>{var n;const r=t.theme,o=Pt(Vt,r[It.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?At(o,e,r.options.designToken):At(o,e)},Nt={InputBoxShadow:Yt("InputBoxShadow"),InputErrorBoxShadow:Yt("InputErrorBoxShadow"),ElevationBoxShadow:Yt("ElevationBoxShadow"),Table:{Header:Yt("Table.Header"),Cell:{Primary:Yt("Table.Cell.Primary"),Secondary:Yt("Table.Cell.Secondary"),Selected:Yt("Table.Cell.Selected"),Hover:Yt("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Yt("Button.Danger.BackgroundColor"),Hover:Yt("Button.Danger.Hover"),Primary:Yt("Button.Danger.Primary"),Border:Yt("Button.Danger.Border")}}},Jt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Zt=e=>Object.keys(Jt).reduce(((t,n)=>{const r=Jt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Ut=Zt("max-width"),Xt=(Zt("min-width"),Jt),qt=d.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Qt=h`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Gt=d.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Rt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Qt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Kt=d(Gt)`
    animation-delay: -0.45s;
`,en=d(Gt)`
    animation-delay: -0.3s;
`,tn=d(Gt)`
    animation-delay: -0.15s;
`,nn={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},rn={D1:{fontFamily:nn.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:nn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:nn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:nn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:nn.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:nn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:nn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:nn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:nn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:nn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:nn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:nn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:nn.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:nn.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},on={D1:{fontFamily:nn.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:nn.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:nn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:nn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:nn.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:nn.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:nn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:nn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:nn.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:nn.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:nn.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:nn.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:nn.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:nn.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},an={collections:{base:rn,oneservice:{D1:{fontFamily:nn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:nn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:nn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:nn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:nn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:nn.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:nn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:nn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:nn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:nn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:nn.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:nn.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:nn.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:nn.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:on},defaultValue:"base"},sn=e=>t=>{const n=t.theme,r=Pt(an,n[It.textStyleScheme]);return n.options&&n.options.textStyle?At(r,e,n.options.textStyle):At(r,e)},ln={D1:{fontFamily:sn("D1.fontFamily"),fontSize:sn("D1.fontSize"),fontWeight:sn("D1.fontWeight"),lineHeight:sn("D1.lineHeight"),letterSpacing:sn("D1.letterSpacing"),fontVariant:sn("D1.fontVariant")},D2:{fontFamily:sn("D2.fontFamily"),fontSize:sn("D2.fontSize"),fontWeight:sn("D2.fontWeight"),lineHeight:sn("D2.lineHeight"),letterSpacing:sn("D2.letterSpacing"),fontVariant:sn("D2.fontVariant")},D3:{fontFamily:sn("D3.fontFamily"),fontSize:sn("D3.fontSize"),fontWeight:sn("D3.fontWeight"),lineHeight:sn("D3.lineHeight"),letterSpacing:sn("D3.letterSpacing"),fontVariant:sn("D3.fontVariant")},D4:{fontFamily:sn("D4.fontFamily"),fontSize:sn("D4.fontSize"),fontWeight:sn("D4.fontWeight"),lineHeight:sn("D4.lineHeight"),letterSpacing:sn("D4.letterSpacing"),fontVariant:sn("D4.fontVariant")},DBody:{fontFamily:sn("DBody.fontFamily"),fontSize:sn("DBody.fontSize"),fontWeight:sn("DBody.fontWeight"),lineHeight:sn("DBody.lineHeight"),letterSpacing:sn("DBody.letterSpacing"),fontVariant:sn("DBody.fontVariant")},H1:{fontFamily:sn("H1.fontFamily"),fontSize:sn("H1.fontSize"),fontWeight:sn("H1.fontWeight"),lineHeight:sn("H1.lineHeight"),letterSpacing:sn("H1.letterSpacing"),fontVariant:sn("H1.fontVariant")},H2:{fontFamily:sn("H2.fontFamily"),fontSize:sn("H2.fontSize"),fontWeight:sn("H2.fontWeight"),lineHeight:sn("H2.lineHeight"),letterSpacing:sn("H2.letterSpacing"),fontVariant:sn("H2.fontVariant")},H3:{fontFamily:sn("H3.fontFamily"),fontSize:sn("H3.fontSize"),fontWeight:sn("H3.fontWeight"),lineHeight:sn("H3.lineHeight"),letterSpacing:sn("H3.letterSpacing"),fontVariant:sn("H3.fontVariant")},H4:{fontFamily:sn("H4.fontFamily"),fontSize:sn("H4.fontSize"),fontWeight:sn("H4.fontWeight"),lineHeight:sn("H4.lineHeight"),letterSpacing:sn("H4.letterSpacing"),fontVariant:sn("H4.fontVariant")},H5:{fontFamily:sn("H5.fontFamily"),fontSize:sn("H5.fontSize"),fontWeight:sn("H5.fontWeight"),lineHeight:sn("H5.lineHeight"),letterSpacing:sn("H5.letterSpacing"),fontVariant:sn("H5.fontVariant")},H6:{fontFamily:sn("H6.fontFamily"),fontSize:sn("H6.fontSize"),fontWeight:sn("H6.fontWeight"),lineHeight:sn("H6.lineHeight"),letterSpacing:sn("H6.letterSpacing"),fontVariant:sn("H6.fontVariant")},Body:{fontFamily:sn("Body.fontFamily"),fontSize:sn("Body.fontSize"),fontWeight:sn("Body.fontWeight"),lineHeight:sn("Body.lineHeight"),letterSpacing:sn("Body.letterSpacing"),fontVariant:sn("Body.fontVariant")},BodySmall:{fontFamily:sn("BodySmall.fontFamily"),fontSize:sn("BodySmall.fontSize"),fontWeight:sn("BodySmall.fontWeight"),lineHeight:sn("BodySmall.lineHeight"),letterSpacing:sn("BodySmall.letterSpacing"),fontVariant:sn("BodySmall.fontVariant")},XSmall:{fontFamily:sn("XSmall.fontFamily"),fontSize:sn("XSmall.fontSize"),fontWeight:sn("XSmall.fontWeight"),lineHeight:sn("XSmall.lineHeight"),letterSpacing:sn("XSmall.letterSpacing"),fontVariant:sn("XSmall.fontVariant")}},cn=[nn.OpenSans,nn.PlusJakartaSans],un=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},dn=(e,t)=>n=>{var r;const o=ln[e].fontFamily(n),i=ln[e].fontWeight(n),a=cn.find((e=>Object.values(e).includes(o)));return a?f`
                font-family: ${un(a,t)||un(a,i)||o};
                font-weight: normal !important;
            `:f`
            font-family: ${o};
            font-weight: ${null!==(r=fn(t)||i)&&void 0!==r?r:"normal"};
        `},fn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},hn=e=>{if(e>0)return f`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},pn=(e,t,n=!1)=>r=>{const o=ln[e],i=o.fontSize(r);return f`
            ${dn(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            font-variant: ${o.fontVariant(r)||"normal"};
            ${f`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},gn=(e=!1,t=!1,n=void 0)=>t?f`
            display: block;
            ${hn(n)}
        `:e?f`
            display: inline;
        `:f`
            display: block;
            ${hn(n)}
        `;var mn;!function(e){e.D1=d.h1`
        ${e=>f`
                ${pn("D1",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${gn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=d.h1`
        ${e=>f`
                ${pn("D2",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${gn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=d.h1`
        ${e=>f`
                ${pn("D3",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${gn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=d.h1`
        ${e=>f`
                ${pn("D4",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${gn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=d.h1`
        ${e=>f`
                ${pn("DBody",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${gn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=d.h1`
        ${e=>f`
                ${pn("H1",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${gn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=d.h2`
        ${e=>f`
                ${pn("H2",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${gn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=d.h3`
        ${e=>f`
                ${pn("H3",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${gn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=d.h4`
        ${e=>f`
                ${pn("H4",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${gn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=d.h5`
        ${e=>f`
                ${pn("H5",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${gn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=d.h6`
        ${e=>f`
                ${pn("H6",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${gn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=d.p`
        ${e=>f`
                ${pn("Body",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${gn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=d.p`
        ${e=>f`
                ${pn("BodySmall",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${gn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=d.span`
        ${e=>f`
                ${pn("XSmall",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${gn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>bn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>bn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(mn||(mn={}));const yn=d.a`
    ${e=>f`
            ${pn(e.textStyle,e.weight)}
            color: ${Rt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Rt.Secondary};

                svg {
                    color: ${Rt.Secondary};
                }
            }
        `}
`,vn=d(p)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,bn=n=>{var{external:r=!1,children:o}=n,i=$(n,["external","children"]);return e(yn,Object.assign({},i,{children:[o,r&&t(vn,{})]}))};var Sn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Sn||(Sn={}));const $n=d.button`
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
                    background-color: ${Rt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Nt.Button.Danger.Border:Rt.Primary};

                    color: ${e.$buttonIsDanger?Nt.Button.Danger.Primary:Rt.Primary};
                `;case"light":return f`
                    background-color: ${Rt.Neutral[8]};
                    border: 1px solid ${Rt.Neutral[5]};

                    color: ${e.$buttonIsDanger?Nt.Button.Danger.Primary:Rt.Primary};
                `;case"disabled":return f`
                    background-color: ${Rt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Rt.Neutral[3]};
                `;case"link":return f`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Nt.Button.Danger.Primary:Rt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Nt.Button.Danger.Hover:Rt.Secondary};
                    }
                `;default:return f`
                    background-color: ${e.$buttonIsDanger?Nt.Button.Danger.BackgroundColor:Rt.Primary};
                    border: 1px solid transparent;

                    ${Ut.mobileL} {
                        width: 100%;
                    }

                    color: ${Rt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?f`
                    height: 2.5rem;
                    ${pn("H5","semibold")}

                    ${Ut.mobileS} {
                        height: auto;
                    }
                `:f`
                    height: 3rem;
                    ${pn("H4","semibold")}

                    ${Ut.mobileS} {
                        height: auto;
                    }
                `}
`,Fn=d((({color:n,className:r,size:o=18})=>e(qt,Object.assign({className:r,$size:o,$color:n,"data-testid":"component-loading-spinner"},{children:[t(Gt,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t(Kt,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(en,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t(tn,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    ${e=>{let t=e.$buttonIsDanger?Nt.Button.Danger.Primary:Rt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Rt.Neutral[3](e);break;default:t=Rt.Neutral[8](e)}return f`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,xn=d($n)`
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
`,wn={Default:i.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left",loading:u=!1}=n,d=$(n,["children","disabled","styleType","danger","icon","iconPosition","loading"]),f={$buttonIconPosition:c,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s,$buttonWithIcon:!0};return e(xn,Object.assign({ref:r,"data-testid":d["data-testid"]||"button-with-icon",disabled:i},f,d,{children:[u?t(Fn,Object.assign({},f)):l,t("span",{children:o})]}))})),Small:i.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left",loading:u=!1}=n,d=$(n,["children","disabled","styleType","danger","icon","iconPosition","loading"]),f={$buttonIconPosition:c,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s,$buttonWithIcon:!0};return e(xn,Object.assign({ref:r,"data-testid":d["data-testid"]||"button-with-icon",disabled:i},f,d,{children:[u?t(Fn,Object.assign({},f,{size:16})):l,t("span",{children:o})]}))}))},Dn=({className:e,progress:n,color:r,"data-testid":o})=>t(Bn,Object.assign({className:e,$innerWidth:n,$color:r,"data-testid":o},{children:t("progress",{value:100*n,max:100})})),Bn=d.div`
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

    ${e=>{const{$color:t}=e;let n;return n=t&&"string"==typeof t?t:t?t(e):Rt.Accent.Light[1](e),f`
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
`,On={Default:i.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=$(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e($n,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(Fn,Object.assign({},u)),t("span",{children:o})]}))})),Small:i.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=$(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e($n,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(Fn,Object.assign({},u,{size:16})),t("span",{children:o})]}))}))},kn=d.button`
    align-items: center;
    background-color: ${Rt.Primary};
    border-radius: 0.25rem;
    color: ${Rt.Neutral[8]};
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
                    background-color: ${Rt.Neutral[8]};
                    border: 1px solid ${Rt.Primary};
                    color: ${Rt.Primary};
                `;case"light":return f`
                    background-color: ${Rt.Neutral[8]};
                    border: 1px solid ${Rt.Neutral[5]};
                    color: ${Rt.Primary};
                `;default:return f`
                    background-color: ${Rt.Primary};
                    border: none;
                    color: ${Rt.Neutral[8]};
                `}}}
    &:hover {
        box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
    }
    &:disabled {
        background-color: ${Rt.Neutral[6]};
        border: 1px solid ${Rt.Neutral[6]};
        color: ${Rt.Neutral[3]};
        cursor: not-allowed;

        &:hover {
            box-shadow: none;
        }
    }
`,En=i.forwardRef(((e,n)=>{var{"data-testid":r,styleType:o="primary",children:i,sizeType:a="default",type:s="button"}=e,l=$(e,["data-testid","styleType","children","sizeType","type"]);return t(kn,Object.assign({"data-testid":r||"iconButton",ref:n,type:s,$sizeType:a,$styleType:o},l,{children:i}))}));var Hn={exports:{}};Hn.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",S={};S[b]=m;var $="$isDayjsObject",F=function(e){return e instanceof B||!(!e||!e[$])},x=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();S[i]&&(o=i),n&&(S[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;S[s]=t,o=s}return!r&&o&&(b=o),o||!r&&b},w=function(e,t){if(F(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new B(n)},D=v;D.l=x,D.i=F,D.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var B=function(){function m(e){this.$L=x(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[$]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return D},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return w(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<w(e)},y.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!D.u(t)||t,u=D.p(e),h=function(e,t){var o=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(s)},p=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case l:var b=this.$locale().weekStart||0,S=(g<b?g+7:g)-b;return h(r?y-S:y+(6-S),m);case s:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=D.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[s]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[D.p(e)]()},y.add=function(r,u){var f,h=this;r=Number(r);var p=D.p(u),g=function(e){var t=w(h);return D.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(f={},f[i]=t,f[a]=n,f[o]=e,f)[p]||1,y=this.$d.getTime()+r*m;return D.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=D.z(this),i=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return D.s(i%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return D.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,h){var p,g=this,m=D.p(f),y=w(r),v=(y.utcOffset()-this.utcOffset())*t,b=this-y,S=function(){return D.m(g,y)};switch(m){case d:p=S()/12;break;case c:p=S();break;case u:p=S()/3;break;case l:p=(b-v)/6048e5;break;case s:p=(b-v)/864e5;break;case a:p=b/n;break;case i:p=b/t;break;case o:p=b/e;break;default:p=b}return h?p:D.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return S[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=x(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return D.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),O=B.prototype;return w.prototype=O,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,B,w),e.$i=!0),w},w.locale=x,w.isDayjs=F,w.unix=function(e){return w(1e3*e)},w.en=S[b],w.Ls=S,w.p={},w}();var jn=w(Hn.exports),_n={exports:{}};_n.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[o,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],f=u&&u[0],h=u&&u[1];a[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(r),u=i.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),i=this.$locale(),!l&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),o=r.year,i=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,h=new Date,p=a||(o||i?1:h.getDate()),g=o||h.getFullYear(),m=0;o&&!i||(m=i>0?i-1:h.getMonth());var y=s||0,v=l||0,b=c||0,S=u||0;return d?new Date(Date.UTC(g,m,p,y,v,b,S+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,v,b,S)):new Date(g,m,p,y,v,b,S)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){a[1]=s[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Cn=w(_n.exports),Tn={exports:{}};Tn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var Mn=w(Tn.exports),zn={exports:{}};zn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var An=w(zn.exports),Pn={exports:{}};Pn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var In,Ln,Wn,Rn=w(Pn.exports),Vn={exports:{}},Yn=w(Vn.exports=(In={year:0,month:1,day:2,hour:3,minute:4,second:5},Ln={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=Ln[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Ln[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=In[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,s=o||t||r,l=i(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}));jn.extend(Mn),jn.extend(Rn),jn.extend(An),jn.extend(Cn),jn.extend(Yn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=jn(t).startOf("week");return Nn(n).map((e=>Jn(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Jn(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(jn(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+jn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=jn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?jn(r):void 0,o?jn(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Wn||(Wn={}));const Nn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Jn=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Zn=[1,3,5,7,8,10,12],Un=[4,6,9,11];var Xn,qn,Qn,Gn;!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":Zn.includes(i)?Math.min(o,31).toString():Un.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=jn(e,n);return jn(t,n).diff(r,"minute")},e.toDayjs=e=>e?jn(e):jn(),e.addMinutesToTime=(e,t,n="HH:mm")=>jn(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>jn(e).isSame(jn(t),n)}(Xn||(Xn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!jn(e).isBefore(r,"day"))||!(!o||!jn(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(jn(e).isValid())return e}return""}}(qn||(qn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Qn||(Qn={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const o=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Gn||(Gn={}));const Kn=d.div`
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
`,er=d.div`
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
`;var tr;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(tr||(tr={}));const nr=({show:e=!1,rootId:n,onOverlayClick:r,children:o,backgroundOpacity:c,backgroundBlur:u=!0,disableTransition:d=!1,enableOverlayClick:f=!1,zIndex:h,id:p})=>{const[m,S]=s(null),[$,F]=s(),[x]=s((()=>Qn.generate())),w=y(),D=l(),B=l(null),O=o&&i.cloneElement(o,{ref:B}),k=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root",E=null!=h?h:$?99999:99998;(e=>{const t=g();a((()=>{if(!t)return;const n={zIndex:e};t.events.emit(tr.Change,n)}),[t,e]),a((()=>{if(!t)return;const n=()=>{const n={zIndex:e};t.events.emit(tr.Change,n)};return null==t||t.events.on(tr.Ready,n),()=>null==t?void 0:t.events.off(tr.Ready,n)}),[t,e])})(E),a((()=>(C(),S(j()),()=>{A(),M().length<1&&T("remove")})),[]),a((()=>{if(e){const e=_();H(e),z();const t=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(t)}{A();const e=setTimeout((()=>{M().length<1&&T("remove")}),200);return()=>clearTimeout(e)}}),[e]);const H=e=>{D.current=e,F(e)},j=()=>document&&n?document.getElementById(n):document?document.body:null,_=()=>M().length>0,C=()=>{if(!document.getElementById(or)){const e=document.createElement("style");e.id=or;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${ir} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${ir}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},T=e=>{const t=document.body.classList.contains(ir);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(ir):document.body.classList.add(ir)},M=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},z=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=[...e,x].join(",")},A=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==x)).join(",")},P=e=>{var t;const n=null===(t=B.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&f&&(e.preventDefault(),r())};return m?b.createPortal(t(Kn,Object.assign({id:k,"data-testid":k,$show:e,$zIndex:E},{children:o&&t(v,Object.assign({id:w},{children:t(er,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:c||($?.5:.8),$backgroundBlur:u,$disableTransition:d,onClick:P},{children:O}))}))})),m):null},rr=e=>t(m,{children:t(nr,Object.assign({},e))}),or="lifesg-ds-overlay-stylesheet",ir="lifesg-ds-overlay-open",ar=d.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${Ut.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,sr=d.button`
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
                background-color: ${Rt.Neutral[7]};
            `}
    }
`,lr=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,s=$(e,["children","focusHighlight","focusOutline","type"]);return t(sr,Object.assign({ref:n,$outline:i,$highlight:o,type:a},s,{children:r}))})),cr=d.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Rt.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Ut.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,ur=d(lr)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${Rt.Neutral[3]};

    :focus-visible {
        outline: 4px solid ${Rt.Accent.Light[1]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Ut.mobileL} {
        right: 1.25rem;
    }
`,dr=Object.assign((e=>{var{id:n="modal",show:r,animationFrom:o="bottom",children:i,enableOverlayClick:l=!0,rootComponentId:c,zIndex:u,onOverlayClick:d,dismissKeyboardOnShow:f=!0}=e,h=$(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[p,g]=s(),[m,y]=s();a((()=>window.visualViewport?(b(),window.visualViewport.addEventListener("resize",b),()=>{window.visualViewport.removeEventListener("resize",b)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),a((()=>{var e,t;r&&f&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const v=()=>{const e=.01*window.innerHeight;g(e)},b=()=>{const e=.01*window.visualViewport.height;g(e),y(window.visualViewport.offsetTop)};return t(rr,Object.assign({"data-testid":`${n}-overlay`,show:r,enableOverlayClick:l,onOverlayClick:d,id:n,rootId:c,zIndex:u},{children:t(ar,Object.assign({show:r,animationFrom:o,"data-testid":n,verticalHeight:p,offsetTop:m},h,{children:i}))}))}),{Box:n=>{var{id:r="modal-box",children:o,onClose:i,showCloseButton:a=!0}=n,s=$(n,["id","children","onClose","showCloseButton"]);return e(cr,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&t(ur,Object.assign({onClick:i,"data-testid":"close-button",focusHighlight:!1},{children:t(S,{})})),o]}))}}),fr=` ${Ut.mobileL}, (orientation: landscape) and (max-height: ${Xt.mobileL}px)`,hr=`@media(orientation: landscape) and (max-height: ${Xt.mobileL}px)`,pr=d.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${e=>`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${encodeURIComponent(Rt.Neutral[5](e))}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");`};
    background-color: ${Rt.Neutral[8]};
    border-radius: 4px;
    height: 14.125rem;
`,gr=d(On.Default)`
    width: fit-content;
    padding: 0 2rem;
    margin: 0 2rem;
`,mr=d(En)`
    position: absolute;
    top: 1rem;
    right: 1rem;
`,yr=d.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - 8rem);
    height: 100%;
`,vr=d.div`
    background: ${Rt.Accent.Light[6]};
    border: 1px solid ${Rt.Neutral[5]};
    border-radius: 4px;
    margin: 0 2rem;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    flex: 1;
    flex-direction: column;
    align-items: center;
`,br=d(mn.H6)`
    margin-top: 1rem;
`,Sr=d(dr)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,$r=d.div`
    width: 100%;
    margin: auto;
    padding: 5rem 1.25rem;

    ${fr} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,Fr=d(dr.Box)`
    width: 100%;
    height: 29rem;
    max-width: 42rem;
    max-height: none;
    margin: 0 auto;
    padding: 1rem;

    ${fr} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;
    }
`,xr=d.h4`
    ${pn("H4","semibold")}
    margin-bottom: 1rem;
    color: ${Rt.Neutral[1]};
    text-align: center;

    ${fr} {
        ${pn("H5","semibold")}
        margin: 0.75rem 0;
    }
`,wr=d.div`
    width: 100%;
    height: 20rem;
    border-radius: 12px;
    overflow: hidden;

    ${fr} {
        border-radius: 0;
        flex: 1;
    }

    ${hr} {
        background: ${Rt.Neutral[7]};
    }
`,Dr=d.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${Rt.Neutral[6]};
    margin: auto;

    ${fr} {
        aspect-ratio: 4/3;
    }
    ${Ut.mobileL} {
        width: 100%;
        height: auto;
    }
    ${hr} {
        width: auto;
        height: 100%;
    }
`,Br=d.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 18.75rem;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${Rt.Neutral[4]};
    pointer-events: none;

    ${fr} {
        width: calc(100% - 4rem);
        max-width: 18.75rem;
        left: 50%;
    }
`,Or=d.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    ${Ut.mobileL} {
        flex-direction: column-reverse;
        margin: 1rem 1.25rem 3rem;
        gap: 1rem;
    }

    ${hr} {
        flex-direction: row;
        margin: 1rem 1.25rem 1rem;
    }
`,kr=d(On.Default)`
    width: 8.5rem;
    ${Ut.mobileL} {
        width: 100%;
    }
    ${hr} {
        height: 2.5rem;
    }
`,Er=d.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Hr=d.canvas`
    cursor: crosshair;
`,jr=c((()=>F(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.37b0343b.js")).ESignatureCanvas}})))),_r=i=>{const{description:c,id:d,loadingProgress:f,loadingLabel:h="Uploading...",onChange:p,value:g}=i,m=$(i,["description","id","loadingProgress","loadingLabel","onChange","value"]),[y,v]=s(!1),b=l(null),[S,F]=s(g),x=k.useMediaQuery({maxWidth:Xt.mobileL}),w=()=>{b.current.clear()},D=()=>{const e=b.current.export();F(e),v(!1),null==p||p(e)};a((()=>{F(g)}),[g]);return e("div",Object.assign({},m,{children:[t(pr,{children:isNaN(f)?S?e(n,{children:[t(yr,{src:S,alt:"Signature preview"}),t(mr,Object.assign({styleType:"light",onClick:()=>v(!0),id:d,"aria-label":"Edit signature"},{children:t(r,{})}))]}):t(gr,Object.assign({type:"button",styleType:"secondary","aria-label":"Add signature",id:d,onClick:()=>v(!0)},{children:"Add signature"})):e(vr,{children:[h&&t(mn.BodySmall,{children:h}),t(Dn,{progress:f,"data-testid":`${d||"e-signature"}-progress-bar`})]})}),t(Sr,Object.assign({"data-testid":"signature-modal",show:y},{children:t($r,{children:e(Fr,Object.assign({onClose:()=>v(!1)},{children:[t(xr,{children:"Signature"}),t(wr,{children:e(Dr,{children:[t(Br,{}),t(u,Object.assign({fallback:null},{children:y&&t(jr,{ref:b,baseImageDataURL:S})}))]})}),e(Or,{children:[t(kr,Object.assign({as:wn.Default,type:"button",styleType:x?"light":"link",icon:t(o,{}),onClick:w},{children:"Clear"})),t(kr,Object.assign({type:"button",onClick:D},{children:"Save"}))]})]}))})})),c?t(br,Object.assign({weight:"regular",as:"p"},{children:c})):null]}))};export{Rt as C,_r as E,Er as S,It as T,F as _,Hr as a,D as g};
//# sourceMappingURL=index.489289bb.js.map
