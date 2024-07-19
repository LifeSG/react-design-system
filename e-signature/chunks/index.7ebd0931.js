import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import{PencilIcon as n,EraserIcon as o}from"@lifesg/react-icons";import i,{useState as a,useRef as s,useEffect as l,lazy as c,Suspense as u}from"react";import d,{keyframes as f,css as h}from"styled-components";import{ExternalIcon as p}from"@lifesg/react-icons/external";import g from"react-dom";import{CrossIcon as m}from"@lifesg/react-icons/cross";function y(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function v(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function $(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function x(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var S,w={exports:{}};S=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var o=e.expressions.every((function(e){var r=e.feature,n=e.modifier,o=e.value,i=t[r];if(!i)return!1;switch(r){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=u(o),i=u(i);break;case"resolution":o=c(o),i=c(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=l(o),i=l(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(n){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!r||!o&&r}))},t.parse=s;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),i=t[1],a=t[2],s=t[3]||"",l={};return l.inverse=!!i&&"not"===i.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(o);return{modifier:r[1],feature:r[2],value:t[2]}})),l}))}function l(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
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
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))r.call(i,c)&&(s[c]=i[c]);if(t){a=t(i);for(var u=0;u<a.length;u++)n.call(i,a[u])&&(s[a[u]]=i[a[u]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,r)=>{var n,o=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,r,s,l){for(var c in e)if(a(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((s||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[c](t,c,s,r,null,o)}catch(e){u=e}if(!u||u instanceof Error||n((s||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in i)){i[u.message]=!0;var f=l?l():"";n("Failed "+r+" type: "+u.message+(null!=f?f:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,r)=>{var n,o=r(/*! react-is */"./node_modules/react-is/index.js"),i=r(/*! object-assign */"./node_modules/object-assign/index.js"),a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",f={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:g(c),arrayOf:function(e){return g((function(t,r,n,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new p("Invalid "+o+" `"+i+"` of type `"+b(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,n,o,i+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:g((function(t,r,n,o,i){var a=t[r];return e(a)?null:new p("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:g((function(e,t,r,n,i){var a=e[t];return o.isValidElementType(a)?null:new p("Invalid "+n+" `"+i+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(t,r,n,o,i){if(!(t[r]instanceof e)){var a=e.name||d;return new p("Invalid "+o+" `"+i+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:g((function(e,t,r,n,o){return v(e[t])?null:new p("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(t,r,n,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=b(l);if("object"!==c)return new p("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var u in l)if(s(l,u)){var d=e(l,u,n,o,i+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(t,r,n,o,i){for(var a=t[r],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===$(t)?String(t):t}));return new p("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(r)+" at index "+t+"."),c}return g((function(t,r,n,o,i){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,r,n,o,i,a);if(null==u)return null;u.data&&s(u.data,"expectedType")&&l.push(u.data.expectedType)}return new p("Invalid "+o+" `"+i+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(t,r,n,o,i){var s=t[r],l=b(s);if("object"!==l)return new p("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return y(n,o,i,c,$(u));var d=u(s,c,n,o,i+"."+c,a);if(d)return d}return null}))},exact:function(e){return g((function(t,r,n,o,l){var c=t[r],u=b(c);if("object"!==u)return new p("Invalid "+o+" `"+l+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");var d=i({},t[r],e);for(var f in d){var h=e[f];if(s(e,f)&&"function"!=typeof h)return y(n,o,l,f,$(h));if(!h)return new p("Invalid "+o+" `"+l+"` key `"+f+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=h(c,f,n,o,l+"."+f,a);if(g)return g}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function g(e){var r={},o=0;function i(i,s,l,c,u,f,h){if(c=c||d,f=f||l,h!==a){if(t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var m=c+":"+l;!r[m]&&o<3&&(n("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[m]=!0,o++)}}return null==s[l]?i?null===s[l]?new p("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,f)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function m(e){return g((function(t,r,n,o,i,a){var s=t[r];return b(s)!==e?new p("Invalid "+o+" `"+i+"` of type `"+$(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,r,n,o){return new p((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e[u]);if("function"==typeof t)return t}(t);if(!n)return!1;var o,i=n.call(t);if(n!==t.entries){for(;!(o=i.next()).done;)if(!v(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function $(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=$(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,f.checkPropTypes=l,f.resetWarningCache=l.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var h=e.type;switch(h){case c:case u:case o:case a:case i:case f:return h;default:var m=h&&h.$$typeof;switch(m){case l:case d:case g:case p:case s:return m;default:return t}}case n:return t}}}var x=c,S=u,w=l,F=s,D=r,B=d,O=o,E=g,k=p,j=n,_=a,T=i,C=f,H=!1;function M(e){return $(e)===u}t.AsyncMode=x,t.ConcurrentMode=S,t.ContextConsumer=w,t.ContextProvider=F,t.Element=D,t.ForwardRef=B,t.Fragment=O,t.Lazy=E,t.Memo=k,t.Portal=j,t.Profiler=_,t.StrictMode=T,t.Suspense=C,t.isAsyncMode=function(e){return H||(H=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),M(e)||$(e)===c},t.isConcurrentMode=M,t.isContextConsumer=function(e){return $(e)===l},t.isContextProvider=function(e){return $(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return $(e)===d},t.isFragment=function(e){return $(e)===o},t.isLazy=function(e){return $(e)===g},t.isMemo=function(e){return $(e)===p},t.isPortal=function(e){return $(e)===n},t.isProfiler=function(e){return $(e)===a},t.isStrictMode=function(e){return $(e)===i},t.isSuspense=function(e){return $(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===m)},t.typeOf=$}()},"./node_modules/react-is/index.js":
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
	  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},u=o(c,["type"]),d=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},u),f=n(n({},l),d);t.default={all:f,types:l,matchers:c,features:d}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,o.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(/*! react */"react"),i=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),c=n(r(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,a.default)(r)]=e[r],t}),{})},d=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,o.useState)(t),n=r[0],i=r[1];return(0,o.useEffect)((function(){var e=t();n!==e&&i(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,o.useContext)(c.default),r=function(){return u(e)||u(t)},n=(0,o.useState)(r),i=n[0],a=n[1];return(0,o.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,i.default)(e,t||{},!!t)},n=(0,o.useState)(r),a=n[0],s=n[1],l=d();return(0,o.useEffect)((function(){if(l){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,n),h=function(e){var t=(0,o.useState)(e.matches),r=t[0],n=t[1];return(0,o.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),p=d();return(0,o.useEffect)((function(){p&&r&&r(h)}),[h]),(0,o.useEffect)((function(){return function(){l&&l.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var F=w.exports=S(i);var D=Array.isArray,B="object"==typeof b&&b&&b.Object===Object&&b,O="object"==typeof self&&self&&self.Object===Object&&self,E=B||O||Function("return this")(),k=E.Symbol,j=k,_=Object.prototype,T=_.hasOwnProperty,C=_.toString,H=j?j.toStringTag:void 0;var M=function(e){var t=T.call(e,H),r=e[H];try{e[H]=void 0;var n=!0}catch(e){}var o=C.call(e);return n&&(t?e[H]=r:delete e[H]),o},A=Object.prototype.toString;var I=M,P=function(e){return A.call(e)},z=k?k.toStringTag:void 0;var L=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":z&&z in Object(e)?I(e):P(e)};var W=L,R=function(e){return null!=e&&"object"==typeof e};var Y=function(e){return"symbol"==typeof e||R(e)&&"[object Symbol]"==W(e)},N=D,V=Y,Z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,U=/^\w*$/;var q=function(e,t){if(N(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!V(e))||(U.test(e)||!Z.test(e)||null!=t&&e in Object(t))};var Q=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},X=L,G=Q;var J,K=function(e){if(!G(e))return!1;var t=X(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ee=E["__core-js_shared__"],te=(J=/[^.]+$/.exec(ee&&ee.keys&&ee.keys.IE_PROTO||""))?"Symbol(src)_1."+J:"";var re=function(e){return!!te&&te in e},ne=Function.prototype.toString;var oe=K,ie=re,ae=Q,se=function(e){if(null!=e){try{return ne.call(e)}catch(e){}try{return e+""}catch(e){}}return""},le=/^\[object .+?Constructor\]$/,ce=Function.prototype,ue=Object.prototype,de=ce.toString,fe=ue.hasOwnProperty,he=RegExp("^"+de.call(fe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var pe=function(e){return!(!ae(e)||ie(e))&&(oe(e)?he:le).test(se(e))},ge=function(e,t){return null==e?void 0:e[t]};var me=function(e,t){var r=ge(e,t);return pe(r)?r:void 0},ye=me(Object,"create"),ve=ye;var be=function(){this.__data__=ve?ve(null):{},this.size=0};var $e=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},xe=ye,Se=Object.prototype.hasOwnProperty;var we=function(e){var t=this.__data__;if(xe){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Se.call(t,e)?t[e]:void 0},Fe=ye,De=Object.prototype.hasOwnProperty;var Be=ye;var Oe=be,Ee=$e,ke=we,je=function(e){var t=this.__data__;return Fe?void 0!==t[e]:De.call(t,e)},_e=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Be&&void 0===t?"__lodash_hash_undefined__":t,this};function Te(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Te.prototype.clear=Oe,Te.prototype.delete=Ee,Te.prototype.get=ke,Te.prototype.has=je,Te.prototype.set=_e;var Ce=Te;var He=function(){this.__data__=[],this.size=0};var Me=function(e,t){return e===t||e!=e&&t!=t};var Ae=function(e,t){for(var r=e.length;r--;)if(Me(e[r][0],t))return r;return-1},Ie=Ae,Pe=Array.prototype.splice;var ze=Ae;var Le=Ae;var We=Ae;var Re=He,Ye=function(e){var t=this.__data__,r=Ie(t,e);return!(r<0)&&(r==t.length-1?t.pop():Pe.call(t,r,1),--this.size,!0)},Ne=function(e){var t=this.__data__,r=ze(t,e);return r<0?void 0:t[r][1]},Ve=function(e){return Le(this.__data__,e)>-1},Ze=function(e,t){var r=this.__data__,n=We(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ue(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ue.prototype.clear=Re,Ue.prototype.delete=Ye,Ue.prototype.get=Ne,Ue.prototype.has=Ve,Ue.prototype.set=Ze;var qe=Ue,Qe=me(E,"Map"),Xe=Ce,Ge=qe,Je=Qe;var Ke=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var et=function(e,t){var r=e.__data__;return Ke(t)?r["string"==typeof t?"string":"hash"]:r.map},tt=et;var rt=et;var nt=et;var ot=et;var it=function(){this.size=0,this.__data__={hash:new Xe,map:new(Je||Ge),string:new Xe}},at=function(e){var t=tt(this,e).delete(e);return this.size-=t?1:0,t},st=function(e){return rt(this,e).get(e)},lt=function(e){return nt(this,e).has(e)},ct=function(e,t){var r=ot(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function ut(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ut.prototype.clear=it,ut.prototype.delete=at,ut.prototype.get=st,ut.prototype.has=lt,ut.prototype.set=ct;var dt=ut;function ft(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(ft.Cache||dt),r}ft.Cache=dt;var ht=ft;var pt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,gt=/\\(\\)?/g,mt=function(e){var t=ht(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(pt,(function(e,r,n,o){t.push(n?o.replace(gt,"$1"):r||e)})),t}));var yt=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},vt=D,bt=Y,$t=k?k.prototype:void 0,xt=$t?$t.toString:void 0;var St=function e(t){if("string"==typeof t)return t;if(vt(t))return yt(t,e)+"";if(bt(t))return xt?xt.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},wt=St;var Ft=D,Dt=q,Bt=mt,Ot=function(e){return null==e?"":wt(e)};var Et=Y;var kt=function(e,t){return Ft(e)?e:Dt(e,t)?[e]:Bt(Ot(e))},jt=function(e){if("string"==typeof e||Et(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var _t=function(e,t){for(var r=0,n=(t=kt(t,e)).length;null!=e&&r<n;)e=e[jt(t[r++])];return r&&r==n?e:void 0};var Tt=$((function(e,t,r){var n=null==e?void 0:_t(e,t);return void 0===n?r:n}));const Ct=(e,t,r)=>t?Tt(r,t)||Tt(e,t):r||e,Ht=(e,t)=>{const r=t||e.defaultValue;return Tt(e.collections,r)};var Mt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Mt||(Mt={}));const At={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},It=e=>t=>{const r=t.theme,n=Ht(At,r[Mt.colorScheme]);return r.options&&r.options.color?Ct(n,e,r.options.color):Ct(n,e)},Pt={Brand:{1:It("Brand.1"),2:It("Brand.2"),3:It("Brand.3"),4:It("Brand.4"),5:It("Brand.5"),6:It("Brand.6")},Primary:It("Primary"),PrimaryDark:It("PrimaryDark"),Secondary:It("Secondary"),Accent:{Light:{1:It("Accent.Light.1"),2:It("Accent.Light.2"),3:It("Accent.Light.3"),4:It("Accent.Light.4"),5:It("Accent.Light.5"),6:It("Accent.Light.6")},Dark:{1:It("Accent.Dark.1"),2:It("Accent.Dark.2"),3:It("Accent.Dark.3")}},Neutral:{1:It("Neutral.1"),2:It("Neutral.2"),3:It("Neutral.3"),4:It("Neutral.4"),5:It("Neutral.5"),6:It("Neutral.6"),7:It("Neutral.7"),8:It("Neutral.8")},Validation:{Green:{Text:It("Validation.Green.Text"),Icon:It("Validation.Green.Icon"),Border:It("Validation.Green.Border"),Background:It("Validation.Green.Background")},Orange:{Text:It("Validation.Orange.Text"),Icon:It("Validation.Orange.Icon"),Border:It("Validation.Orange.Border"),Background:It("Validation.Orange.Background"),Badge:It("Validation.Orange.Badge")},Red:{Text:It("Validation.Red.Text"),Icon:It("Validation.Red.Icon"),Border:It("Validation.Red.Border"),Background:It("Validation.Red.Background")},Blue:{Text:It("Validation.Blue.Text"),Icon:It("Validation.Blue.Icon"),Border:It("Validation.Blue.Border"),Background:It("Validation.Blue.Background")}},Shadow:{Accent:It("Shadow.Accent"),Red:It("Shadow.Red"),Elevation:It("Shadow.Elevation")}},zt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Lt=e=>Object.keys(zt).reduce(((t,r)=>{const n=zt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Wt=Lt("max-width"),Rt=(Lt("min-width"),zt),Yt=d.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Nt=f`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Vt=d.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Pt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Nt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Zt=d(Vt)`
    animation-delay: -0.45s;
`,Ut=d(Vt)`
    animation-delay: -0.3s;
`,qt=d(Vt)`
    animation-delay: -0.15s;
`,Qt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Xt={collections:{base:{D1:{fontFamily:Qt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Qt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Qt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Qt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Qt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Qt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Qt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Qt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Qt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Qt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Qt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Qt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Qt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Qt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Gt=e=>t=>{const r=t.theme,n=Ht(Xt,r[Mt.textStyleScheme]);return r.options&&r.options.textStyle?Ct(n,e,r.options.textStyle):Ct(n,e)},Jt={D1:{fontFamily:Gt("D1.fontFamily"),fontSize:Gt("D1.fontSize"),fontWeight:Gt("D1.fontWeight"),lineHeight:Gt("D1.lineHeight"),letterSpacing:Gt("D1.letterSpacing")},D2:{fontFamily:Gt("D2.fontFamily"),fontSize:Gt("D2.fontSize"),fontWeight:Gt("D2.fontWeight"),lineHeight:Gt("D2.lineHeight"),letterSpacing:Gt("D2.letterSpacing")},D3:{fontFamily:Gt("D3.fontFamily"),fontSize:Gt("D3.fontSize"),fontWeight:Gt("D3.fontWeight"),lineHeight:Gt("D3.lineHeight"),letterSpacing:Gt("D3.letterSpacing")},D4:{fontFamily:Gt("D4.fontFamily"),fontSize:Gt("D4.fontSize"),fontWeight:Gt("D4.fontWeight"),lineHeight:Gt("D4.lineHeight"),letterSpacing:Gt("D4.letterSpacing")},DBody:{fontFamily:Gt("DBody.fontFamily"),fontSize:Gt("DBody.fontSize"),fontWeight:Gt("DBody.fontWeight"),lineHeight:Gt("DBody.lineHeight"),letterSpacing:Gt("DBody.letterSpacing")},H1:{fontFamily:Gt("H1.fontFamily"),fontSize:Gt("H1.fontSize"),fontWeight:Gt("H1.fontWeight"),lineHeight:Gt("H1.lineHeight"),letterSpacing:Gt("H1.letterSpacing")},H2:{fontFamily:Gt("H2.fontFamily"),fontSize:Gt("H2.fontSize"),fontWeight:Gt("H2.fontWeight"),lineHeight:Gt("H2.lineHeight"),letterSpacing:Gt("H2.letterSpacing")},H3:{fontFamily:Gt("H3.fontFamily"),fontSize:Gt("H3.fontSize"),fontWeight:Gt("H3.fontWeight"),lineHeight:Gt("H3.lineHeight"),letterSpacing:Gt("H3.letterSpacing")},H4:{fontFamily:Gt("H4.fontFamily"),fontSize:Gt("H4.fontSize"),fontWeight:Gt("H4.fontWeight"),lineHeight:Gt("H4.lineHeight"),letterSpacing:Gt("H4.letterSpacing")},H5:{fontFamily:Gt("H5.fontFamily"),fontSize:Gt("H5.fontSize"),fontWeight:Gt("H5.fontWeight"),lineHeight:Gt("H5.lineHeight"),letterSpacing:Gt("H5.letterSpacing")},H6:{fontFamily:Gt("H6.fontFamily"),fontSize:Gt("H6.fontSize"),fontWeight:Gt("H6.fontWeight"),lineHeight:Gt("H6.lineHeight"),letterSpacing:Gt("H6.letterSpacing")},Body:{fontFamily:Gt("Body.fontFamily"),fontSize:Gt("Body.fontSize"),fontWeight:Gt("Body.fontWeight"),lineHeight:Gt("Body.lineHeight"),letterSpacing:Gt("Body.letterSpacing")},BodySmall:{fontFamily:Gt("BodySmall.fontFamily"),fontSize:Gt("BodySmall.fontSize"),fontWeight:Gt("BodySmall.fontWeight"),lineHeight:Gt("BodySmall.lineHeight"),letterSpacing:Gt("BodySmall.letterSpacing")},XSmall:{fontFamily:Gt("XSmall.fontFamily"),fontSize:Gt("XSmall.fontSize"),fontWeight:Gt("XSmall.fontWeight"),lineHeight:Gt("XSmall.lineHeight"),letterSpacing:Gt("XSmall.letterSpacing")}},Kt=e=>{switch(e){case 700:case"bold":return Qt.Bold;case 600:case"semibold":return Qt.Semibold;case 300:case"light":return Qt.Light;case 400:case"regular":return Qt.Regular;default:return""}},er=(e,t)=>r=>{var n;const o=Jt[e].fontFamily(r),i=Jt[e].fontWeight(r);return Object.values(Qt).includes(o)?h`
                font-family: ${Kt(t)||Kt(i)||o};
                font-weight: normal !important;
            `:h`
            font-family: ${o};
            font-weight: ${null!==(n=tr(t)||i)&&void 0!==n?n:"normal"};
        `},tr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},rr=e=>{if(e>0)return h`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},nr=(e,t,r=!1)=>n=>{const o=Jt[e],i=o.fontSize(n);return h`
            ${er(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(n)||0}rem !important;
            ${h`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},or=(e=!1,t=!1,r=void 0)=>t?h`
            display: block;
            ${rr(r)}
        `:e?h`
            display: inline;
        `:h`
            display: block;
            ${rr(r)}
        `;var ir;!function(e){e.D1=d.h1`
        ${e=>h`
                ${nr("D1",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=d.h1`
        ${e=>h`
                ${nr("D2",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=d.h1`
        ${e=>h`
                ${nr("D3",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=d.h1`
        ${e=>h`
                ${nr("D4",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=d.h1`
        ${e=>h`
                ${nr("DBody",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=d.h1`
        ${e=>h`
                ${nr("H1",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=d.h2`
        ${e=>h`
                ${nr("H2",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=d.h3`
        ${e=>h`
                ${nr("H3",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=d.h4`
        ${e=>h`
                ${nr("H4",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=d.h5`
        ${e=>h`
                ${nr("H5",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=d.h6`
        ${e=>h`
                ${nr("H6",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=d.p`
        ${e=>h`
                ${nr("Body",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=d.p`
        ${e=>h`
                ${nr("BodySmall",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=d.span`
        ${e=>h`
                ${nr("XSmall",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>lr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>lr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(ir||(ir={}));const ar=d.a`
    ${e=>h`
            ${nr(e.textStyle,e.weight)}
            color: ${Pt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Pt.Secondary};

                svg {
                    color: ${Pt.Secondary};
                }
            }
        `}
`,sr=d(p)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,lr=r=>{var{external:n=!1,children:o}=r,i=y(r,["external","children"]);return e(ar,Object.assign({},i,{children:[o,n&&t(sr,{})]}))};var cr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(cr||(cr={}));const ur={collections:{base:{InputBoxShadow:h`
        inset 0 0 4px 0px ${Pt.Shadow.Accent}
    `,InputErrorBoxShadow:h`
        inset 0 0 4px 0px ${Pt.Shadow.Red}
    `,ElevationBoxShadow:h`
      0px 2px 8px ${Pt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:h`
        inset 0 0 3px 0px ${Pt.Shadow.Accent}
    `,InputErrorBoxShadow:h`
        inset 0 0 3px 0px ${Pt.Shadow.Red}
    `,ElevationBoxShadow:h`
      0px 2px 8px ${Pt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},dr=e=>t=>{var r;const n=t.theme,o=Ht(ur,n[Mt.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Ct(o,e,n.options.designToken):Ct(o,e)},fr={InputBoxShadow:dr("InputBoxShadow"),InputErrorBoxShadow:dr("InputErrorBoxShadow"),ElevationBoxShadow:dr("ElevationBoxShadow"),Table:{Header:dr("Table.Header"),Cell:{Primary:dr("Table.Cell.Primary"),Secondary:dr("Table.Cell.Secondary"),Selected:dr("Table.Cell.Selected"),Hover:dr("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:dr("Button.Danger.BackgroundColor"),Hover:dr("Button.Danger.Hover"),Primary:dr("Button.Danger.Primary"),Border:dr("Button.Danger.Border")}}},hr=d.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return h`
                    background-color: ${Pt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?fr.Button.Danger.Border:Pt.Primary};

                    color: ${e.$buttonIsDanger?fr.Button.Danger.Primary:Pt.Primary};
                `;case"light":return h`
                    background-color: ${Pt.Neutral[8]};
                    border: 1px solid ${Pt.Neutral[5]};

                    color: ${e.$buttonIsDanger?fr.Button.Danger.Primary:Pt.Primary};
                `;case"disabled":return h`
                    background-color: ${Pt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Pt.Neutral[3]};
                `;case"link":return h`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?fr.Button.Danger.Primary:Pt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?fr.Button.Danger.Hover:Pt.Secondary};
                    }
                `;default:return h`
                    background-color: ${e.$buttonIsDanger?fr.Button.Danger.BackgroundColor:Pt.Primary};
                    border: 1px solid transparent;

                    ${Wt.mobileL} {
                        width: 100%;
                    }

                    color: ${Pt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?h`
                    height: 2.5rem;
                    ${nr("H5","semibold")}

                    ${Wt.mobileS} {
                        height: auto;
                    }
                `:h`
                    height: 3rem;
                    ${nr("H4","semibold")}

                    ${Wt.mobileS} {
                        height: auto;
                    }
                `}
`,pr=d((({color:r,className:n,size:o=18})=>e(Yt,Object.assign({className:n,$size:o,$color:r},{children:[t(Vt,{id:"inner1",$size:o-2,$borderWidth:2,$color:r}),t(Zt,{id:"inner2",$size:o-2,$borderWidth:2,$color:r}),t(Ut,{id:"inner3",$size:o-2,$borderWidth:2,$color:r}),t(qt,{id:"inner4",$size:o-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?fr.Button.Danger.Primary:Pt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Pt.Neutral[3](e);break;default:t=Pt.Neutral[8](e)}return h`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,gr=d(hr)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>"small"===e.$buttonSizeStyle?h`
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `:h`
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}
`,mr={Default:i.forwardRef(((r,n)=>{const{children:o,disabled:i=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left"}=r,u=y(r,["children","disabled","styleType","danger","icon","iconPosition"]),d={$buttonIconPosition:c,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(gr,Object.assign({ref:n,"data-testid":u["data-testid"]||"button-with-icon",disabled:i},d,u,{children:[l,t("span",{children:o})]}))})),Small:i.forwardRef(((r,n)=>{const{children:o,disabled:i=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left"}=r,u=y(r,["children","disabled","styleType","danger","icon","iconPosition"]),d={$buttonIconPosition:c,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(gr,Object.assign({ref:n,"data-testid":u["data-testid"]||"button-with-icon",disabled:i},d,u,{children:[l,t("span",{children:o})]}))}))},yr=({className:e,progress:r,color:n,"data-testid":o})=>t(vr,Object.assign({className:e,$innerWidth:r,$color:n,"data-testid":o},{children:t("progress",{value:100*r,max:100})})),vr=d.div`
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

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):Pt.Accent.Light[1](e),h`
            border: 1px solid ${r};
            border-radius: 4px;

            :after {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                border-radius: inherit;
                background: ${r};
                width: ${100*e.$innerWidth}%;
            }
        `}}
`,br={Default:i.forwardRef(((r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=y(r,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(hr,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(pr,Object.assign({},u)),t("span",{children:o})]}))})),Small:i.forwardRef(((r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=y(r,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(hr,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(pr,Object.assign({},u,{size:16})),t("span",{children:o})]}))}))},$r=d.button`
    align-items: center;
    background-color: ${Pt.Primary};
    border-radius: 0.25rem;
    color: ${Pt.Neutral[8]};
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$sizeType){case"large":return h`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return h`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return h`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${e=>{switch(e.$styleType){case"secondary":return h`
                    background-color: ${Pt.Neutral[8]};
                    border: 1px solid ${Pt.Primary};
                    color: ${Pt.Primary};
                `;case"light":return h`
                    background-color: ${Pt.Neutral[8]};
                    border: 1px solid ${Pt.Neutral[5]};
                    color: ${Pt.Primary};
                `;default:return h`
                    background-color: ${Pt.Primary};
                    border: none;
                    color: ${Pt.Neutral[8]};
                `}}}
    &:hover {
        box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
    }
    &:disabled {
        background-color: ${Pt.Neutral[6]};
        border: 1px solid ${Pt.Neutral[6]};
        color: ${Pt.Neutral[3]};
        cursor: not-allowed;

        &:hover {
            box-shadow: none;
        }
    }
`,xr=i.forwardRef(((e,r)=>{var{"data-testid":n,styleType:o="primary",children:i,sizeType:a="default",type:s="button"}=e,l=y(e,["data-testid","styleType","children","sizeType","type"]);return t($r,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:a,$styleType:o},l,{children:i}))}));var Sr={exports:{}};Sr.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[o,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(r){var n,o;n=r,o=i&&i.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],f=u&&u[0],h=u&&u[1];a[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var o=a[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(n),u=i.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),i=this.$locale(),!l&&d&&(i=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=f(t)(e),o=n.year,i=n.month,a=n.day,s=n.hours,l=n.minutes,c=n.seconds,u=n.milliseconds,d=n.zone,h=new Date,p=a||(o||i?1:h.getDate()),g=o||h.getFullYear(),m=0;o&&!i||(m=i>0?i-1:h.getMonth());var y=s||0,v=l||0,b=c||0,$=u||0;return d?new Date(Date.UTC(g,m,p,y,v,b,$+60*d.offset*1e3)):r?new Date(Date.UTC(g,m,p,y,v,b,$)):new Date(g,m,p,y,v,b,$)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){a[1]=s[p-1];var g=r.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var wr,Fr,Dr=$(Sr.exports),Br={exports:{}},Or=$(Br.exports=(wr={year:0,month:1,day:2,hour:3,minute:4,second:5},Fr={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=Fr[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Fr[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,c=s.value,u=wr[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(r.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var a=o&&t,s=o||t||n,l=i(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var a=i(n-=60*(o-t)*1e3,r);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(r.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],f=r(u).utcOffset(d);return f.$x.$timezone=s,f},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}})),Er={exports:{}};Er.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,c),i=r-o<0,a=t.clone().add(n+(i?-1:1),c);return+(-(n+(r-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:f,h:a,m:i,s:o,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",$={};$[b]=m;var x="$isDayjsObject",S=function(e){return e instanceof B||!(!e||!e[x])},w=function e(t,r,n){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();$[i]&&(o=i),r&&($[i]=r,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;$[s]=t,o=s}return!n&&o&&(b=o),o||!n&&b},F=function(e,t){if(S(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new B(r)},D=v;D.l=w,D.i=S,D.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var B=function(){function m(e){this.$L=w(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return D},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var r=F(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return F(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<F(e)},y.$g=function(e,t,r){return D.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!D.u(t)||t,u=D.p(e),h=function(e,t){var o=D.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(s)},p=function(e,t){return D.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return n?h(1,0):h(31,11);case c:return n?h(1,m):h(0,m+1);case l:var b=this.$locale().weekStart||0,$=(g<b?g+7:g)-b;return h(n?y-$:y+(6-$),m);case s:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=D.p(e),u="set"+(this.$u?"UTC":""),h=(r={},r[s]=u+"Date",r[f]=u+"Date",r[c]=u+"Month",r[d]=u+"FullYear",r[a]=u+"Hours",r[i]=u+"Minutes",r[o]=u+"Seconds",r[n]=u+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[D.p(e)]()},y.add=function(n,u){var f,h=this;n=Number(n);var p=D.p(u),g=function(e){var t=F(h);return D.w(t.date(t.date()+Math.round(e*n)),h)};if(p===c)return this.set(c,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(f={},f[i]=t,f[a]=r,f[o]=e,f)[p]||1,y=this.$d.getTime()+n*m;return D.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=D.z(this),i=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,u=r.meridiem,d=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},f=function(e){return D.s(i%12||12,e,"0")},p=u||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return d(r.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(r.weekdaysMin,t.$W,l,2);case"ddd":return d(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return D.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,f,h){var p,g=this,m=D.p(f),y=F(n),v=(y.utcOffset()-this.utcOffset())*t,b=this-y,$=function(){return D.m(g,y)};switch(m){case d:p=$()/12;break;case c:p=$();break;case u:p=$()/3;break;case l:p=(b-v)/6048e5;break;case s:p=(b-v)/864e5;break;case a:p=b/r;break;case i:p=b/t;break;case o:p=b/e;break;default:p=b}return h?p:D.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=w(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return D.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),O=B.prototype;return F.prototype=O,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,B,F),e.$i=!0),F},F.locale=w,F.isDayjs=S,F.unix=function(e){return F(1e3*e)},F.en=$[b],F.Ls=$,F.p={},F}();var kr=$(Er.exports),jr={exports:{}};jr.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),a=r(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var _r=$(jr.exports),Tr={exports:{}};Tr.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Cr=$(Tr.exports),Hr={exports:{}};Hr.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Mr,Ar=$(Hr.exports);kr.extend(_r),kr.extend(Cr),kr.extend(Ar),kr.extend(Dr),kr.extend(Or),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=kr(t).startOf("week");return Ir(r).map((e=>Pr(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Pr(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(kr(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+kr(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=kr(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?kr(n):void 0,o?kr(o):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Mr||(Mr={}));const Ir=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Pr=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},zr=[1,3,5,7,8,10,12],Lr=[4,6,9,11];var Wr,Rr,Yr,Nr;!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),a=parseInt(n);return 0==o?"1":zr.includes(i)?Math.min(o,31).toString():Lr.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=kr(e,r);return kr(t,r).diff(n,"minute")},e.toDayjs=e=>e?kr(e):kr(),e.addMinutesToTime=(e,t,r="HH:mm")=>kr(e,r).add(t,"minutes").format(r)}(Wr||(Wr={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!kr(e).isBefore(n,"day"))||!(!o||!kr(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(kr(e).isValid())return e}return""}}(Rr||(Rr={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Yr||(Yr={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const a=n+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Nr||(Nr={}));const Vr=d.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return h`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Zr=d.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=h`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=h`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=h`
                transition: none;
            `),t}}
`,Ur=({show:e=!1,rootId:r,onOverlayClick:n,children:o,backgroundOpacity:c,backgroundBlur:u=!0,disableTransition:d=!1,enableOverlayClick:f=!1,zIndex:h,id:p})=>{const[m,y]=a(null),[v,b]=a(),[$]=a((()=>Yr.generate())),x=s(),S=s(null),w=o&&i.cloneElement(o,{ref:S}),F=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root";l((()=>(E(),y(B()),()=>{T(),j().length<1&&k("remove")})),[]),l((()=>{if(e){const e=O();D(e),_();const t=setTimeout((()=>{k("add")}),200);return()=>clearTimeout(t)}{T();const e=setTimeout((()=>{j().length<1&&k("remove")}),200);return()=>clearTimeout(e)}}),[e]);const D=e=>{x.current=e,b(e)},B=()=>document&&r?document.getElementById(r):document?document.body:null,O=()=>j().length>0,E=()=>{if(!document.getElementById(qr)){const e=document.createElement("style");e.id=qr;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Qr} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Qr}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},k=e=>{const t=document.body.classList.contains(Qr);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Qr):document.body.classList.add(Qr)},j=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},_=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=[...e,$].join(",")},T=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==$)).join(",")},C=e=>{var t;const r=null===(t=S.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&f&&(e.preventDefault(),n())};return m?g.createPortal(t(Vr,Object.assign({id:F,"data-testid":F,$show:e,zIndex:h,$stacked:v},{children:o&&t(Zr,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:c||(v?.5:.8),$backgroundBlur:u,$disableTransition:d,$enableOverlayClick:f,onClick:C},{children:w}))})),m):null},qr="lifesg-ds-overlay-stylesheet",Qr="lifesg-ds-overlay-open",Xr=d.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${Wt.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Gr=d.button`
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

        ${({$highlight:e})=>e&&h`
                background-color: ${Pt.Neutral[7]};
            `}
    }
`,Jr=i.forwardRef(((e,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,s=y(e,["children","focusHighlight","focusOutline","type"]);return t(Gr,Object.assign({ref:r,$outline:i,$highlight:o,type:a},s,{children:n}))})),Kr=d.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Pt.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Wt.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,en=d(Jr)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${Pt.Neutral[3]};

    :focus-visible {
        outline: 4px solid ${Pt.Accent.Light[1]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Wt.mobileL} {
        right: 1.25rem;
    }
`,tn=Object.assign((e=>{var{id:r="modal",show:n,animationFrom:o="bottom",children:i,enableOverlayClick:s=!0,rootComponentId:c,zIndex:u,onOverlayClick:d,dismissKeyboardOnShow:f=!0}=e,h=y(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[p,g]=a(),[m,v]=a();l((()=>window.visualViewport?($(),window.visualViewport.addEventListener("resize",$),()=>{window.visualViewport.removeEventListener("resize",$)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),l((()=>{var e,t;n&&f&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]);const b=()=>{const e=.01*window.innerHeight;g(e)},$=()=>{const e=.01*window.visualViewport.height;g(e),v(window.visualViewport.offsetTop)};return t(Ur,Object.assign({"data-testid":`${r}-overlay`,show:n,enableOverlayClick:s,onOverlayClick:d,id:r,rootId:c,zIndex:u},{children:t(Xr,Object.assign({show:n,animationFrom:o,"data-testid":r,verticalHeight:p,offsetTop:m},h,{children:i}))}))}),{Box:r=>{var{id:n="modal-box",children:o,onClose:i,showCloseButton:a=!0}=r,s=y(r,["id","children","onClose","showCloseButton"]);return e(Kr,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&t(en,Object.assign({onClick:i,"data-testid":"close-button",focusHighlight:!1},{children:t(m,{})})),o]}))}}),rn=` ${Wt.mobileL}, (orientation: landscape) and (max-height: ${Rt.mobileL}px)`,nn=`@media(orientation: landscape) and (max-height: ${Rt.mobileL}px)`,on=d.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${e=>`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${encodeURIComponent(Pt.Neutral[5](e))}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");`};
    background-color: ${Pt.Neutral[8]};
    border-radius: 4px;
    height: 14.125rem;
`,an=d(br.Default)`
    width: fit-content;
    padding: 0 2rem;
    margin: 0 2rem;
`,sn=d(xr)`
    position: absolute;
    top: 1rem;
    right: 1rem;
`,ln=d.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - 8rem);
    height: 100%;
`,cn=d.div`
    background: ${Pt.Accent.Light[6]};
    border: 1px solid ${Pt.Neutral[5]};
    border-radius: 4px;
    margin: 0 2rem;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    flex: 1;
    flex-direction: column;
    align-items: center;
`,un=d(ir.H6)`
    margin-top: 1rem;
`,dn=d(tn)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,fn=d.div`
    width: 100%;
    margin: auto;
    padding: 5rem 1.25rem;

    ${rn} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,hn=d(tn.Box)`
    width: 100%;
    height: 29rem;
    max-width: 42rem;
    max-height: none;
    margin: 0 auto;
    padding: 1rem;

    ${rn} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;
    }
`,pn=d.h4`
    ${nr("H4","semibold")}
    margin-bottom: 1rem;
    color: ${Pt.Neutral[1]};
    text-align: center;

    ${rn} {
        ${nr("H5","semibold")}
        margin: 0.75rem 0;
    }
`,gn=d.div`
    width: 100%;
    height: 20rem;
    border-radius: 12px;
    overflow: hidden;

    ${rn} {
        border-radius: 0;
        flex: 1;
    }

    ${nn} {
        background: ${Pt.Neutral[7]};
    }
`,mn=d.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${Pt.Neutral[6]};
    margin: auto;

    ${rn} {
        aspect-ratio: 4/3;
    }
    ${Wt.mobileL} {
        width: 100%;
        height: auto;
    }
    ${nn} {
        width: auto;
        height: 100%;
    }
`,yn=d.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 18.75rem;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${Pt.Neutral[4]};
    pointer-events: none;

    ${rn} {
        width: calc(100% - 4rem);
        max-width: 18.75rem;
        left: 50%;
    }
`,vn=d.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    ${Wt.mobileL} {
        flex-direction: column-reverse;
        margin: 1rem 1.25rem 3rem;
        gap: 1rem;
    }

    ${nn} {
        flex-direction: row;
        margin: 1rem 1.25rem 1rem;
    }
`,bn=d(br.Default)`
    width: 8.5rem;
    ${Wt.mobileL} {
        width: 100%;
    }
    ${nn} {
        height: 2.5rem;
    }
`,$n=d.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,xn=d.canvas`
    cursor: crosshair;
`,Sn=c((()=>v(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.cb41e82f.js")).ESignatureCanvas}})))),wn=i=>{const{description:c,id:d,loadingProgress:f,loadingLabel:h="Uploading...",onChange:p,value:g}=i,m=y(i,["description","id","loadingProgress","loadingLabel","onChange","value"]),[v,b]=a(!1),$=s(null),[x,S]=a(g),w=F.useMediaQuery({maxWidth:Rt.mobileL}),D=()=>{$.current.clear()},B=()=>{const e=$.current.export();S(e),b(!1),null==p||p(e)};l((()=>{S(g)}),[g]);return e("div",Object.assign({},m,{children:[t(on,{children:isNaN(f)?x?e(r,{children:[t(ln,{src:x,alt:"Signature preview"}),t(sn,Object.assign({styleType:"light",onClick:()=>b(!0),id:d,"aria-label":"Edit signature"},{children:t(n,{})}))]}):t(an,Object.assign({type:"button",styleType:"secondary","aria-label":"Add signature",id:d,onClick:()=>b(!0)},{children:"Add signature"})):e(cn,{children:[h&&t(ir.BodySmall,{children:h}),t(yr,{progress:f,"data-testid":`${d||"e-signature"}-progress-bar`})]})}),t(dn,Object.assign({"data-testid":"signature-modal",show:v},{children:t(fn,{children:e(hn,Object.assign({onClose:()=>b(!1)},{children:[t(pn,{children:"Signature"}),t(gn,{children:e(mn,{children:[t(yn,{}),t(u,Object.assign({fallback:null},{children:v&&t(Sn,{ref:$,baseImageDataURL:x})}))]})}),e(vn,{children:[t(bn,Object.assign({as:mr.Default,type:"button",styleType:w?"light":"link",icon:t(o,{}),onClick:D},{children:"Clear"})),t(bn,Object.assign({type:"button",onClick:B},{children:"Save"}))]})]}))})})),c?t(un,Object.assign({weight:"regular",as:"p"},{children:c})):null]}))};export{Pt as C,wn as E,$n as S,Mt as T,v as _,xn as a,x as g};
//# sourceMappingURL=index.7ebd0931.js.map
