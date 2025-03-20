import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import{PencilIcon as n,EraserIcon as o}from"@lifesg/react-icons";import i,{useEffect as a,useState as s,useRef as l,lazy as d,Suspense as c}from"react";import u,{keyframes as h,css as b,useTheme as m}from"styled-components";import{ExternalIcon as g}from"@lifesg/react-icons/external";import{useFloatingTree as f,FloatingTree as y,useFloatingNodeId as p,FloatingNode as v}from"@floating-ui/react";import x from"react-dom";import{CrossIcon as w}from"@lifesg/react-icons/cross";function F(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}function $(e,r,t,n){return new(t||(t=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,s)}l((n=n.apply(e,r||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var E="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function C(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function D(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var B,O={exports:{}};B=e=>(()=>{var r={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,r)=>{r.match=function(e,r){return s(e).some((function(e){var t=e.inverse,n="all"===e.type||r.type===e.type;if(n&&t||!n&&!t)return!1;var o=e.expressions.every((function(e){var t=e.feature,n=e.modifier,o=e.value,i=r[t];if(!i)return!1;switch(t){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=c(o),i=c(i);break;case"resolution":o=d(o),i=d(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=l(o),i=l(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(n){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!t||!o&&t}))},r.parse=s;var t=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var r=(e=e.trim()).match(t),i=r[1],a=r[2],s=r[3]||"",l={};return l.inverse=!!i&&"not"===i.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var r=e.match(n),t=r[1].toLowerCase().match(o);return{modifier:t[1],feature:t[2],value:r[2]}})),l}))}function l(e){var r,t=Number(e);return t||(t=(r=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/r[2]),t}function d(e){var r=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return r/2.54;case"dppx":return 96*r;default:return r}}function c(e){var r=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*r;case"cm":return 96*r/2.54;case"mm":return 96*r/2.54/10;case"in":return 96*r;case"pt":return 72*r;case"pc":return 72*r/12;default:return r}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,r,t)=>{t.r(r),t.d(r,{default:()=>s});var n=/[A-Z]/g,o=/^ms-/,i={};function a(e){return"-"+e.toLowerCase()}const s=function(e){if(i.hasOwnProperty(e))return i[e];var r=e.replace(n,a);return i[e]=o.test(r)?"-"+r:r}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,r,t)=>{var n=t(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,o="undefined"!=typeof window?window.matchMedia:null;function i(e,r,t){var i=this;if(o&&!t){var a=o.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=n(e,r),this.media=e;function s(e){i.matches=e.matches,i.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,r,t){return new i(e,r,t)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var d in i=Object(arguments[l]))t.call(i,d)&&(s[d]=i[d]);if(r){a=r(i);for(var c=0;c<a.length;c++)n.call(i,a[c])&&(s[a[c]]=i[a[c]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,r,t)=>{var n,o=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,r,t,s,l){for(var d in e)if(a(e,d)){var c;try{if("function"!=typeof e[d]){var u=Error((s||"React class")+": "+t+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}c=e[d](r,d,s,t,null,o)}catch(e){c=e}if(!c||c instanceof Error||n((s||"React class")+": type specification of "+t+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in i)){i[c.message]=!0;var h=l?l():"";n("Failed "+t+" type: "+c.message+(null!=h?h:""))}}}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,r,t)=>{var n,o=t(/*! react-is */"./node_modules/react-is/index.js"),i=t(/*! object-assign */"./node_modules/object-assign/index.js"),a=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=t(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},e.exports=function(e,r){var t="function"==typeof Symbol&&Symbol.iterator,c="@@iterator",u="<<anonymous>>",h={array:f("array"),bigint:f("bigint"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:g(d),arrayOf:function(e){return g((function(r,t,n,o,i){if("function"!=typeof e)return new m("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=r[t];if(!Array.isArray(s))return new m("Invalid "+o+" `"+i+"` of type `"+v(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var d=e(s,l,n,o,i+"["+l+"]",a);if(d instanceof Error)return d}return null}))},element:g((function(r,t,n,o,i){var a=r[t];return e(a)?null:new m("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:g((function(e,r,t,n,i){var a=e[r];return o.isValidElementType(a)?null:new m("Invalid "+n+" `"+i+"` of type `"+v(a)+"` supplied to `"+t+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(r,t,n,o,i){if(!(r[t]instanceof e)){var a=e.name||u;return new m("Invalid "+o+" `"+i+"` of type `"+((s=r[t]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:g((function(e,r,t,n,o){return p(e[r])?null:new m("Invalid "+n+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(r,t,n,o,i){if("function"!=typeof e)return new m("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=r[t],d=v(l);if("object"!==d)return new m("Invalid "+o+" `"+i+"` of type `"+d+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(s(l,c)){var u=e(l,c,n,o,i+"."+c,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(r,t,n,o,i){for(var a=r[t],s=0;s<e.length;s++)if(b(a,e[s]))return null;var l=JSON.stringify(e,(function(e,r){return"symbol"===x(r)?String(r):r}));return new m("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(t)+" at index "+r+"."),d}return g((function(r,t,n,o,i){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(r,t,n,o,i,a);if(null==c)return null;c.data&&s(c.data,"expectedType")&&l.push(c.data.expectedType)}return new m("Invalid "+o+" `"+i+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(r,t,n,o,i){var s=r[t],l=v(s);if("object"!==l)return new m("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return y(n,o,i,d,x(c));var u=c(s,d,n,o,i+"."+d,a);if(u)return u}return null}))},exact:function(e){return g((function(r,t,n,o,l){var d=r[t],c=v(d);if("object"!==c)return new m("Invalid "+o+" `"+l+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=i({},r[t],e);for(var h in u){var b=e[h];if(s(e,h)&&"function"!=typeof b)return y(n,o,l,h,x(b));if(!b)return new m("Invalid "+o+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=b(d,h,n,o,l+"."+h,a);if(g)return g}return null}))}};function b(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function m(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function g(e){var t={},o=0;function i(i,s,l,d,c,h,b){if(d=d||u,h=h||l,b!==a){if(r){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var f=d+":"+l;!t[f]&&o<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[f]=!0,o++)}}return null==s[l]?i?null===s[l]?new m("The "+c+" `"+h+"` is marked as required in `"+d+"`, but its value is `null`."):new m("The "+c+" `"+h+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(s,l,d,c,h)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function f(e){return g((function(r,t,n,o,i,a){var s=r[t];return v(s)!==e?new m("Invalid "+o+" `"+i+"` of type `"+x(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,r,t,n,o){return new m((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function p(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(p);if(null===r||e(r))return!0;var n=function(e){var r=e&&(t&&e[t]||e[c]);if("function"==typeof r)return r}(r);if(!n)return!1;var o,i=n.call(r);if(n!==r.entries){for(;!(o=i.next()).done;)if(!p(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!p(a[1]))return!1}return!0;default:return!1}}function v(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function x(e){if(null==e)return""+e;var r=v(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function w(e){var r=x(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return m.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
/*!******************************************!*\
	  !*** ./node_modules/prop-types/index.js ***!
	  \******************************************/(e,r,t)=>{var n=t(/*! react-is */"./node_modules/react-is/index.js");e.exports=t(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(n.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
	  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
	  \*************************************************************/e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
	  !*** ./node_modules/prop-types/lib/has.js ***!
	  \********************************************/e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
	  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
	  \***********************************************************/(e,r)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,b=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,p=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var b=e.type;switch(b){case d:case c:case o:case a:case i:case h:return b;default:var f=b&&b.$$typeof;switch(f){case l:case u:case g:case m:case s:return f;default:return r}}case n:return r}}}var w=d,F=c,$=l,E=s,C=t,D=u,B=o,O=g,S=m,A=n,_=a,M=i,k=h,z=!1;function j(e){return x(e)===c}r.AsyncMode=w,r.ConcurrentMode=F,r.ContextConsumer=$,r.ContextProvider=E,r.Element=C,r.ForwardRef=D,r.Fragment=B,r.Lazy=O,r.Memo=S,r.Portal=A,r.Profiler=_,r.StrictMode=M,r.Suspense=k,r.isAsyncMode=function(e){return z||(z=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),j(e)||x(e)===d},r.isConcurrentMode=j,r.isContextConsumer=function(e){return x(e)===l},r.isContextProvider=function(e){return x(e)===s},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return x(e)===u},r.isFragment=function(e){return x(e)===o},r.isLazy=function(e){return x(e)===g},r.isMemo=function(e){return x(e)===m},r.isPortal=function(e){return x(e)===n},r.isProfiler=function(e){return x(e)===a},r.isStrictMode=function(e){return x(e)===i},r.isSuspense=function(e){return x(e)===h},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===c||e===a||e===i||e===h||e===b||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===y||e.$$typeof===p||e.$$typeof===v||e.$$typeof===f)},r.typeOf=x}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,r,t)=>{e.exports=t(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,r,t)=>{function n(e,r){if(e===r)return!0;if(!e||!r)return!1;var t=Object.keys(e),n=Object.keys(r),o=t.length;if(n.length!==o)return!1;for(var i=0;i<o;i++){var a=t[i];if(e[a]!==r[a]||!Object.prototype.hasOwnProperty.call(r,a))return!1}return!0}function o(e,r){if(e===r)return!0;if(!e||!r)return!1;var t=e.length;if(r.length!==t)return!1;for(var n=0;n<t;n++)if(e[n]!==r[n])return!1;return!0}t.r(r),t.d(r,{shallowEqualArrays:()=>o,shallowEqualObjects:()=>n})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,r,t){var n=this&&this.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=o(t(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));r.default=function(e){var r=e.children,t=e.device,o=e.onChange,a=n(e,["children","device","onChange"]),s=(0,i.default)(a,t,o);return"function"==typeof r?r(s):s?r:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0});var n=(0,t(/*! react */"react").createContext)(void 0);r.default=n},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.Context=r.toQuery=r.useMediaQuery=r.default=void 0;var o=n(t(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));r.useMediaQuery=o.default;var i=n(t(/*! ./Component */"./src/Component.ts"));r.default=i.default;var a=n(t(/*! ./toQuery */"./src/toQuery.ts"));r.toQuery=a.default;var s=n(t(/*! ./Context */"./src/Context.ts"));r.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,r,t){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},n.apply(this,arguments)},o=this&&this.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var a=i(t(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},d={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},c=o(d,["type"]),u=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},c),h=n(n({},l),u);r.default={all:h,types:l,matchers:d,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var o=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=n(t(/*! ./mediaQuery */"./src/mediaQuery.ts"));r.default=function(e){var r=[];return Object.keys(i.default.all).forEach((function(t){var n=e[t];null!=n&&r.push(function(e,r){var t=(0,o.default)(e);return"number"==typeof r&&(r="".concat(r,"px")),!0===r?t:!1===r?"not ".concat(t):"(".concat(t,": ").concat(r,")")}(t,n))})),r.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var o=t(/*! react */"react"),i=n(t(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=t(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(t(/*! ./toQuery */"./src/toQuery.ts")),d=n(t(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(r,t){return r[(0,a.default)(t)]=e[t],r}),{})},u=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var r=function(){return function(e){return e.query||(0,l.default)(e)}(e)},t=(0,o.useState)(r),n=t[0],i=t[1];return(0,o.useEffect)((function(){var e=r();n!==e&&i(e)}),[e]),n};r.default=function(e,r,t){var n=function(e){var r=(0,o.useContext)(d.default),t=function(){return c(e)||c(r)},n=(0,o.useState)(t),i=n[0],a=n[1];return(0,o.useEffect)((function(){var e=t();(0,s.shallowEqualObjects)(i,e)||a(e)}),[e,r]),i}(r),a=h(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,r){var t=function(){return(0,i.default)(e,r||{},!!r)},n=(0,o.useState)(t),a=n[0],s=n[1],l=u();return(0,o.useEffect)((function(){if(l){var e=t();return s(e),function(){e&&e.dispose()}}}),[e,r]),a}(a,n),b=function(e){var r=(0,o.useState)(e.matches),t=r[0],n=r[1];return(0,o.useEffect)((function(){var r=function(e){n(e.matches)};return e.addListener(r),n(e.matches),function(){e.removeListener(r)}}),[e]),t}(l),m=u();return(0,o.useEffect)((function(){m&&t&&t(b)}),[b]),(0,o.useEffect)((function(){return function(){l&&l.dispose()}}),[]),b}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/r=>{r.exports=e}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return r[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var S=O.exports=B(i);const A=u.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,_=h`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,M=u.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${_} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,k=u(M)`
    animation-delay: -0.45s;
`,z=u(M)`
    animation-delay: -0.3s;
`,j=u(M)`
    animation-delay: -0.15s;
`;var T=Array.isArray,I="object"==typeof E&&E&&E.Object===Object&&E,L="object"==typeof self&&self&&self.Object===Object&&self,Y=I||L||Function("return this")(),P=Y.Symbol,R=P,W=Object.prototype,H=W.hasOwnProperty,N=W.toString,V=R?R.toStringTag:void 0;var U=function(e){var r=H.call(e,V),t=e[V];try{e[V]=void 0;var n=!0}catch(e){}var o=N.call(e);return n&&(r?e[V]=t:delete e[V]),o},Z=Object.prototype.toString;var q=U,X=function(e){return Z.call(e)},Q=P?P.toStringTag:void 0;var J=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Q&&Q in Object(e)?q(e):X(e)};var G=J,K=function(e){return null!=e&&"object"==typeof e};var ee=function(e){return"symbol"==typeof e||K(e)&&"[object Symbol]"==G(e)},re=T,te=ee,ne=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,oe=/^\w*$/;var ie=function(e,r){if(re(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!te(e))||(oe.test(e)||!ne.test(e)||null!=r&&e in Object(r))};var ae=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},se=J,le=ae;var de,ce=function(e){if(!le(e))return!1;var r=se(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},ue=Y["__core-js_shared__"],he=(de=/[^.]+$/.exec(ue&&ue.keys&&ue.keys.IE_PROTO||""))?"Symbol(src)_1."+de:"";var be=function(e){return!!he&&he in e},me=Function.prototype.toString;var ge=ce,fe=be,ye=ae,pe=function(e){if(null!=e){try{return me.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ve=/^\[object .+?Constructor\]$/,xe=Function.prototype,we=Object.prototype,Fe=xe.toString,$e=we.hasOwnProperty,Ee=RegExp("^"+Fe.call($e).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ce=function(e,r){return null==e?void 0:e[r]},De=function(e){return!(!ye(e)||fe(e))&&(ge(e)?Ee:ve).test(pe(e))},Be=Ce;var Oe=function(e,r){var t=Be(e,r);return De(t)?t:void 0},Se=Oe(Object,"create"),Ae=Se;var _e=function(){this.__data__=Ae?Ae(null):{},this.size=0};var Me=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},ke=Se,ze=Object.prototype.hasOwnProperty;var je=function(e){var r=this.__data__;if(ke){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return ze.call(r,e)?r[e]:void 0},Te=Se,Ie=Object.prototype.hasOwnProperty;var Le=function(e){var r=this.__data__;return Te?void 0!==r[e]:Ie.call(r,e)},Ye=Se;var Pe=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ye&&void 0===r?"__lodash_hash_undefined__":r,this},Re=_e,We=Me,He=je,Ne=Le,Ve=Pe;function Ue(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Ue.prototype.clear=Re,Ue.prototype.delete=We,Ue.prototype.get=He,Ue.prototype.has=Ne,Ue.prototype.set=Ve;var Ze=Ue;var qe=function(){this.__data__=[],this.size=0};var Xe=function(e,r){return e===r||e!=e&&r!=r};var Qe=function(e,r){for(var t=e.length;t--;)if(Xe(e[t][0],r))return t;return-1},Je=Qe,Ge=Array.prototype.splice;var Ke=function(e){var r=this.__data__,t=Je(r,e);return!(t<0)&&(t==r.length-1?r.pop():Ge.call(r,t,1),--this.size,!0)},er=Qe;var rr=function(e){var r=this.__data__,t=er(r,e);return t<0?void 0:r[t][1]},tr=Qe;var nr=function(e){return tr(this.__data__,e)>-1},or=Qe;var ir=function(e,r){var t=this.__data__,n=or(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},ar=qe,sr=Ke,lr=rr,dr=nr,cr=ir;function ur(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}ur.prototype.clear=ar,ur.prototype.delete=sr,ur.prototype.get=lr,ur.prototype.has=dr,ur.prototype.set=cr;var hr=ur,br=Oe(Y,"Map"),mr=Ze,gr=hr,fr=br;var yr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var pr=function(e,r){var t=e.__data__;return yr(r)?t["string"==typeof r?"string":"hash"]:t.map},vr=pr;var xr=function(e){var r=vr(this,e).delete(e);return this.size-=r?1:0,r},wr=pr;var Fr=function(e){return wr(this,e).get(e)},$r=pr;var Er=function(e){return $r(this,e).has(e)},Cr=pr;var Dr=function(e,r){var t=Cr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Br=function(){this.size=0,this.__data__={hash:new mr,map:new(fr||gr),string:new mr}},Or=xr,Sr=Fr,Ar=Er,_r=Dr;function Mr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Mr.prototype.clear=Br,Mr.prototype.delete=Or,Mr.prototype.get=Sr,Mr.prototype.has=Ar,Mr.prototype.set=_r;var kr=Mr;function zr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,o=r?r.apply(this,n):n[0],i=t.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return t.cache=i.set(o,a)||i,a};return t.cache=new(zr.Cache||kr),t}zr.Cache=kr;var jr=zr;var Tr=function(e){var r=jr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Ir=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Lr=/\\(\\)?/g,Yr=Tr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Ir,(function(e,t,n,o){r.push(n?o.replace(Lr,"$1"):t||e)})),r}));var Pr=function(e,r){for(var t=-1,n=null==e?0:e.length,o=Array(n);++t<n;)o[t]=r(e[t],t,e);return o},Rr=T,Wr=ee,Hr=P?P.prototype:void 0,Nr=Hr?Hr.toString:void 0;var Vr=function e(r){if("string"==typeof r)return r;if(Rr(r))return Pr(r,e)+"";if(Wr(r))return Nr?Nr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Ur=Vr;var Zr=T,qr=ie,Xr=Yr,Qr=function(e){return null==e?"":Ur(e)};var Jr=ee;var Gr=function(e,r){return Zr(e)?e:qr(e,r)?[e]:Xr(Qr(e))},Kr=function(e){if("string"==typeof e||Jr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var et=function(e,r){for(var t=0,n=(r=Gr(r,e)).length;null!=e&&t<n;)e=e[Kr(r[t++])];return t&&t==n?e:void 0};var rt=C((function(e,r,t){var n=null==e?void 0:et(e,r);return void 0===n?t:n}));const tt=(e,r,t)=>rt(t,r)||rt(e,r),nt=(e,r)=>{const t=r||e.defaultValue;return rt(e.collections,t)},ot={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},it=e=>r=>{var t;const n=r.theme,o=nt(ot,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${tt(o,e,n.overrides.border)}px`:`${o[e]}px`},at={"width-005":it("width-005"),"width-010":it("width-010"),"width-020":it("width-020"),"width-040":it("width-040"),solid:(st="solid",e=>{var r;const t=e.theme,n=nt(ot,null==t?void 0:t.borderScheme),o=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?tt(n,st,t.overrides.border):n[st];return"function"==typeof o?o(e):o})};var st;const lt={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#89000B","brand-20":"#B0000E","brand-30":"#C4000F","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},dt=e=>r=>{var t;const n=r.theme,o=nt(lt,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?tt(o,e,n.overrides.primitiveColour):o[e]},ct={"brand-10":dt("brand-10"),"brand-20":dt("brand-20"),"brand-30":dt("brand-30"),"brand-40":dt("brand-40"),"brand-50":dt("brand-50"),"brand-60":dt("brand-60"),"brand-70":dt("brand-70"),"brand-80":dt("brand-80"),"brand-90":dt("brand-90"),"brand-95":dt("brand-95"),"brand-100":dt("brand-100"),"primary-10":dt("primary-10"),"primary-20":dt("primary-20"),"primary-30":dt("primary-30"),"primary-40":dt("primary-40"),"primary-50":dt("primary-50"),"primary-60":dt("primary-60"),"primary-70":dt("primary-70"),"primary-80":dt("primary-80"),"primary-90":dt("primary-90"),"primary-95":dt("primary-95"),"primary-100":dt("primary-100"),"secondary-10":dt("secondary-10"),"secondary-20":dt("secondary-20"),"secondary-30":dt("secondary-30"),"secondary-40":dt("secondary-40"),"secondary-50":dt("secondary-50"),"secondary-60":dt("secondary-60"),"secondary-70":dt("secondary-70"),"secondary-80":dt("secondary-80"),"secondary-90":dt("secondary-90"),"secondary-95":dt("secondary-95"),"secondary-100":dt("secondary-100"),"neutral-10":dt("neutral-10"),"neutral-20":dt("neutral-20"),"neutral-30":dt("neutral-30"),"neutral-40":dt("neutral-40"),"neutral-50":dt("neutral-50"),"neutral-60":dt("neutral-60"),"neutral-70":dt("neutral-70"),"neutral-80":dt("neutral-80"),"neutral-90":dt("neutral-90"),"neutral-95":dt("neutral-95"),"neutral-100":dt("neutral-100"),"success-10":dt("success-10"),"success-20":dt("success-20"),"success-30":dt("success-30"),"success-40":dt("success-40"),"success-50":dt("success-50"),"success-60":dt("success-60"),"success-70":dt("success-70"),"success-80":dt("success-80"),"success-90":dt("success-90"),"success-95":dt("success-95"),"success-100":dt("success-100"),"warning-10":dt("warning-10"),"warning-20":dt("warning-20"),"warning-30":dt("warning-30"),"warning-40":dt("warning-40"),"warning-50":dt("warning-50"),"warning-60":dt("warning-60"),"warning-70":dt("warning-70"),"warning-80":dt("warning-80"),"warning-90":dt("warning-90"),"warning-95":dt("warning-95"),"warning-100":dt("warning-100"),"error-10":dt("error-10"),"error-20":dt("error-20"),"error-30":dt("error-30"),"error-40":dt("error-40"),"error-50":dt("error-50"),"error-60":dt("error-60"),"error-70":dt("error-70"),"error-80":dt("error-80"),"error-90":dt("error-90"),"error-95":dt("error-95"),"error-100":dt("error-100"),"info-10":dt("info-10"),"info-20":dt("info-20"),"info-30":dt("info-30"),"info-40":dt("info-40"),"info-50":dt("info-50"),"info-60":dt("info-60"),"info-70":dt("info-70"),"info-80":dt("info-80"),"info-90":dt("info-90"),"info-95":dt("info-95"),"info-100":dt("info-100"),white:dt("white"),black:dt("black"),"primary-inverse":dt("primary-inverse")},ut={text:dt("neutral-20"),"text-subtle":dt("neutral-30"),"text-subtler":dt("neutral-50"),"text-subtlest":dt("neutral-60"),"text-primary":dt("primary-50"),"text-hover":dt("primary-40"),"text-selected":dt("primary-50"),"text-selected-hover":dt("primary-40"),"text-disabled":dt("neutral-50"),"text-disabled-subtle":dt("neutral-60"),"text-disabled-subtlest":dt("neutral-80"),"text-selected-disabled":dt("neutral-20"),"text-success":dt("success-40"),"text-warning":dt("warning-40"),"text-error":dt("error-40"),"text-info":dt("info-40"),"text-inverse":dt("white"),icon:dt("neutral-50"),"icon-subtle":dt("neutral-60"),"icon-strongest":dt("neutral-20"),"icon-primary":dt("primary-50"),"icon-primary-subtle":dt("primary-60"),"icon-primary-subtlest":dt("primary-70"),"icon-hover":dt("primary-40"),"icon-selected":dt("primary-50"),"icon-selected-hover":dt("primary-40"),"icon-disabled":dt("neutral-50"),"icon-disabled-subtle":dt("neutral-60"),"icon-selected-disabled":dt("neutral-60"),"icon-success":dt("success-50"),"icon-warning":dt("warning-60"),"icon-error":dt("error-50"),"icon-error-strong":dt("error-40"),"icon-info":dt("info-50"),"icon-inverse":dt("white"),"icon-primary-inverse":dt("primary-inverse"),border:dt("neutral-90"),"border-strong":dt("neutral-70"),"border-stronger":dt("neutral-50"),"border-primary":dt("primary-50"),"border-primary-subtle":dt("primary-60"),"border-hover":dt("primary-90"),"border-hover-strong":dt("primary-60"),"border-selected":dt("primary-50"),"border-selected-subtle":dt("primary-70"),"border-selected-subtlest":dt("primary-90"),"border-selected-hover":dt("primary-40"),"border-focus":dt("primary-60"),"border-focus-strong":dt("primary-50"),"border-disabled":dt("neutral-90"),"border-selected-disabled":dt("neutral-70"),"border-success":dt("success-60"),"border-warning":dt("warning-60"),"border-error":dt("error-60"),"border-error-focus":dt("error-60"),"border-error-focus-strong":dt("error-40"),"border-error-strong":dt("error-40"),"border-info":dt("info-60"),bg:dt("white"),"bg-strong":dt("neutral-100"),"bg-stronger":dt("neutral-95"),"bg-strongest":dt("neutral-90"),"bg-hover":dt("primary-95"),"bg-hover-strong":dt("primary-90"),"bg-hover-subtle":dt("primary-100"),"bg-hover-neutral":dt("neutral-100"),"bg-hover-neutral-strong":dt("neutral-90"),"bg-selected":dt("primary-95"),"bg-selected-hover":dt("primary-90"),"bg-selected-strong":dt("primary-90"),"bg-selected-stronger":dt("primary-70"),"bg-selected-strongest":dt("primary-50"),"bg-selected-strongest-hover":dt("primary-40"),"bg-disabled":dt("neutral-95"),"bg-selected-disabled":dt("neutral-95"),"bg-selected-stronger-disabled":dt("neutral-70"),"bg-success":dt("success-100"),"bg-success-hover":dt("success-95"),"bg-success-strong":dt("success-50"),"bg-success-strong-hover":dt("success-40"),"bg-warning":dt("warning-100"),"bg-warning-hover":dt("warning-95"),"bg-warning-strong":dt("warning-50"),"bg-warning-strong-hover":dt("warning-40"),"bg-info":dt("info-100"),"bg-info-hover":dt("info-95"),"bg-info-strong":dt("info-50"),"bg-info-strong-hover":dt("info-40"),"bg-error":dt("error-100"),"bg-error-hover":dt("error-95"),"bg-error-strong":dt("error-50"),"bg-error-strong-hover":dt("error-40"),"bg-inverse":dt("neutral-20"),"bg-inverse-subtle":dt("neutral-30"),"bg-inverse-subtler":dt("neutral-50"),"bg-inverse-subtlest":dt("neutral-60"),"bg-inverse-hover":dt("neutral-40"),"bg-primary":dt("primary-50"),"bg-primary-subtle":dt("primary-60"),"bg-primary-subtler":dt("primary-95"),"bg-primary-subtlest":dt("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":dt("primary-40"),"bg-primary-subtlest-hover":dt("primary-90"),"bg-primary-subtlest-selected":dt("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:dt("primary-50"),"hyperlink-hover":dt("primary-40"),"hyperlink-visited":dt("primary-40"),"hyperlink-inverse":dt("primary-inverse"),"focus-ring":dt("black"),"focus-ring-inverse":dt("white")},ht={collections:{lifesg:ut,bookingsg:ut,rbs:ut,mylegacy:ut,ccube:ut,pa:{text:dt("neutral-30"),"text-subtle":dt("neutral-40"),"text-subtler":dt("neutral-50"),"text-subtlest":dt("neutral-70"),"text-primary":dt("neutral-10"),"text-hover":dt("neutral-70"),"text-selected":dt("neutral-20"),"text-selected-hover":dt("neutral-10"),"text-disabled":dt("neutral-50"),"text-disabled-subtle":dt("neutral-60"),"text-disabled-subtlest":dt("neutral-80"),"text-selected-disabled":dt("neutral-40"),"text-success":dt("success-40"),"text-warning":dt("warning-40"),"text-error":dt("brand-30"),"text-info":dt("neutral-40"),"text-inverse":dt("neutral-100"),icon:dt("neutral-40"),"icon-subtle":dt("neutral-50"),"icon-strongest":dt("neutral-10"),"icon-primary":dt("neutral-10"),"icon-primary-subtle":dt("neutral-30"),"icon-primary-subtlest":dt("neutral-60"),"icon-hover":dt("neutral-70"),"icon-selected":dt("brand-20"),"icon-selected-hover":dt("brand-10"),"icon-disabled":dt("neutral-50"),"icon-disabled-subtle":dt("neutral-60"),"icon-selected-disabled":dt("neutral-40"),"icon-success":dt("success-40"),"icon-warning":dt("warning-60"),"icon-error":dt("brand-30"),"icon-error-strong":dt("brand-10"),"icon-info":dt("neutral-40"),"icon-inverse":dt("neutral-100"),"icon-primary-inverse":"#F9B371",border:dt("neutral-90"),"border-strong":dt("neutral-30"),"border-stronger":dt("neutral-20"),"border-primary":dt("neutral-40"),"border-primary-subtle":dt("neutral-60"),"border-hover":dt("neutral-80"),"border-hover-strong":dt("neutral-10"),"border-selected":dt("neutral-20"),"border-selected-subtle":dt("neutral-40"),"border-selected-subtlest":dt("neutral-70"),"border-selected-hover":dt("neutral-10"),"border-focus":dt("brand-60"),"border-focus-strong":dt("brand-40"),"border-disabled":dt("neutral-90"),"border-selected-disabled":dt("neutral-80"),"border-success":dt("success-40"),"border-warning":dt("warning-60"),"border-error":dt("brand-30"),"border-error-focus":dt("brand-20"),"border-error-focus-strong":dt("brand-10"),"border-error-strong":dt("brand-20"),"border-info":dt("neutral-40"),bg:dt("neutral-100"),"bg-strong":dt("neutral-95"),"bg-stronger":dt("neutral-90"),"bg-strongest":dt("neutral-80"),"bg-hover":dt("brand-90"),"bg-hover-strong":dt("brand-80"),"bg-hover-subtle":dt("neutral-90"),"bg-hover-neutral":dt("neutral-90"),"bg-hover-neutral-strong":dt("neutral-90"),"bg-selected":dt("brand-50"),"bg-selected-hover":dt("brand-70"),"bg-selected-strong":dt("brand-90"),"bg-selected-stronger":dt("brand-40"),"bg-selected-strongest":dt("brand-20"),"bg-selected-strongest-hover":dt("brand-10"),"bg-disabled":dt("neutral-90"),"bg-selected-disabled":dt("neutral-90"),"bg-selected-stronger-disabled":dt("neutral-80"),"bg-success":dt("success-100"),"bg-success-hover":dt("success-95"),"bg-success-strong":dt("success-50"),"bg-success-strong-hover":dt("success-40"),"bg-warning":dt("warning-100"),"bg-warning-hover":dt("warning-95"),"bg-warning-strong":dt("warning-50"),"bg-warning-strong-hover":dt("warning-40"),"bg-info":dt("neutral-95"),"bg-info-hover":dt("info-95"),"bg-info-strong":dt("info-50"),"bg-info-strong-hover":dt("info-40"),"bg-error":dt("brand-100"),"bg-error-hover":dt("error-95"),"bg-error-strong":dt("error-50"),"bg-error-strong-hover":dt("error-40"),"bg-inverse":dt("neutral-40"),"bg-inverse-subtle":dt("neutral-60"),"bg-inverse-subtler":dt("neutral-70"),"bg-inverse-subtlest":dt("neutral-80"),"bg-inverse-hover":dt("neutral-30"),"bg-primary":dt("brand-20"),"bg-primary-subtle":dt("brand-60"),"bg-primary-subtler":dt("brand-80"),"bg-primary-subtlest":dt("brand-100"),"bg-available":dt("success-60"),"bg-primary-hover":dt("brand-10"),"bg-primary-subtlest-hover":dt("brand-80"),"bg-primary-subtlest-selected":dt("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:dt("neutral-10"),"hyperlink-hover":dt("neutral-40"),"hyperlink-visited":dt("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":dt("black"),"focus-ring-inverse":dt("white")}},defaultValue:"lifesg"},bt=e=>r=>{var t;const n=r.theme,o=nt(ht,null==n?void 0:n.colourScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?tt(o,e,n.overrides.semanticColour):o[e];return"function"==typeof i?i(r):i},mt={text:bt("text"),"text-subtle":bt("text-subtle"),"text-subtler":bt("text-subtler"),"text-subtlest":bt("text-subtlest"),"text-primary":bt("text-primary"),"text-hover":bt("text-hover"),"text-selected":bt("text-selected"),"text-selected-hover":bt("text-selected-hover"),"text-disabled":bt("text-disabled"),"text-disabled-subtle":bt("text-disabled-subtle"),"text-disabled-subtlest":bt("text-disabled-subtlest"),"text-selected-disabled":bt("text-selected-disabled"),"text-success":bt("text-success"),"text-warning":bt("text-warning"),"text-error":bt("text-error"),"text-info":bt("text-info"),"text-inverse":bt("text-inverse"),icon:bt("icon"),"icon-subtle":bt("icon-subtle"),"icon-strongest":bt("icon-strongest"),"icon-primary":bt("icon-primary"),"icon-primary-subtle":bt("icon-primary-subtle"),"icon-primary-subtlest":bt("icon-primary-subtlest"),"icon-hover":bt("icon-hover"),"icon-selected":bt("icon-selected"),"icon-selected-hover":bt("icon-selected-hover"),"icon-disabled":bt("icon-disabled"),"icon-disabled-subtle":bt("icon-disabled-subtle"),"icon-selected-disabled":bt("icon-selected-disabled"),"icon-success":bt("icon-success"),"icon-warning":bt("icon-warning"),"icon-error":bt("icon-error"),"icon-error-strong":bt("icon-error-strong"),"icon-info":bt("icon-info"),"icon-inverse":bt("icon-inverse"),"icon-primary-inverse":bt("icon-primary-inverse"),border:bt("border"),"border-strong":bt("border-strong"),"border-stronger":bt("border-stronger"),"border-primary":bt("border-primary"),"border-primary-subtle":bt("border-primary-subtle"),"border-hover":bt("border-hover"),"border-hover-strong":bt("border-hover-strong"),"border-selected":bt("border-selected"),"border-selected-subtle":bt("border-selected-subtle"),"border-selected-subtlest":bt("border-selected-subtlest"),"border-selected-hover":bt("border-selected-hover"),"border-focus":bt("border-focus"),"border-focus-strong":bt("border-focus-strong"),"border-disabled":bt("border-disabled"),"border-selected-disabled":bt("border-selected-disabled"),"border-success":bt("border-success"),"border-warning":bt("border-warning"),"border-error":bt("border-error"),"border-error-focus":bt("border-error-focus"),"border-error-focus-strong":bt("border-error-focus-strong"),"border-error-strong":bt("border-error-strong"),"border-info":bt("border-info"),bg:bt("bg"),"bg-strong":bt("bg-strong"),"bg-stronger":bt("bg-stronger"),"bg-strongest":bt("bg-strongest"),"bg-hover":bt("bg-hover"),"bg-hover-strong":bt("bg-hover-strong"),"bg-hover-subtle":bt("bg-hover-subtle"),"bg-hover-neutral":bt("bg-hover-neutral"),"bg-hover-neutral-strong":bt("bg-hover-neutral-strong"),"bg-selected":bt("bg-selected"),"bg-selected-hover":bt("bg-selected-hover"),"bg-selected-strong":bt("bg-selected-strong"),"bg-selected-stronger":bt("bg-selected-stronger"),"bg-selected-strongest":bt("bg-selected-strongest"),"bg-selected-strongest-hover":bt("bg-selected-strongest-hover"),"bg-disabled":bt("bg-disabled"),"bg-selected-disabled":bt("bg-selected-disabled"),"bg-selected-stronger-disabled":bt("bg-selected-stronger-disabled"),"bg-success":bt("bg-success"),"bg-success-hover":bt("bg-success-hover"),"bg-success-strong":bt("bg-success-strong"),"bg-success-strong-hover":bt("bg-success-strong-hover"),"bg-warning":bt("bg-warning"),"bg-warning-hover":bt("bg-warning-hover"),"bg-warning-strong":bt("bg-warning-strong"),"bg-warning-strong-hover":bt("bg-warning-strong-hover"),"bg-info":bt("bg-info"),"bg-info-hover":bt("bg-info-hover"),"bg-info-strong":bt("bg-info-strong"),"bg-info-strong-hover":bt("bg-info-strong-hover"),"bg-error":bt("bg-error"),"bg-error-hover":bt("bg-error-hover"),"bg-error-strong":bt("bg-error-strong"),"bg-error-strong-hover":bt("bg-error-strong-hover"),"bg-inverse":bt("bg-inverse"),"bg-inverse-subtle":bt("bg-inverse-subtle"),"bg-inverse-subtler":bt("bg-inverse-subtler"),"bg-inverse-subtlest":bt("bg-inverse-subtlest"),"bg-inverse-hover":bt("bg-inverse-hover"),"bg-primary":bt("bg-primary"),"bg-primary-subtle":bt("bg-primary-subtle"),"bg-primary-subtler":bt("bg-primary-subtler"),"bg-primary-subtlest":bt("bg-primary-subtlest"),"bg-available":bt("bg-available"),"bg-primary-hover":bt("bg-primary-hover"),"bg-primary-subtlest-hover":bt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":bt("bg-primary-subtlest-selected"),"overlay-strong":bt("overlay-strong"),"overlay-subtle":bt("overlay-subtle"),hyperlink:bt("hyperlink"),"hyperlink-hover":bt("hyperlink-hover"),"hyperlink-visited":bt("hyperlink-visited"),"hyperlink-inverse":bt("hyperlink-inverse"),"focus-ring":bt("focus-ring"),"focus-ring-inverse":bt("focus-ring-inverse")},gt={collections:{default:{solid:e=>r=>{var t,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:at["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(r):s)&&void 0!==o?o:mt.border(r),u=at.solid;return b`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:at["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(r):s)&&void 0!==o?o:mt.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return b`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},ft=e=>1===e.length&&"theme"in e[0],yt=e=>(...r)=>t=>{const n=ft(r)?[]:r,o=ft(r)?r[0]:t,i=o.theme;return(0,nt(gt,null==i?void 0:i.borderScheme)[e])(...n)(o)},pt={solid:yt("solid"),"dashed-default":yt("dashed-default")},vt={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},xt=e=>r=>{var t;const n=r.theme,o=nt(vt,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?tt(o,e,n.overrides.breakpoint):o[e],i},wt={"xxs-min":xt("xxs-min"),"xxs-max":xt("xxs-max"),"xs-min":xt("xs-min"),"xs-max":xt("xs-max"),"sm-min":xt("sm-min"),"sm-max":xt("sm-max"),"md-min":xt("md-min"),"md-max":xt("md-max"),"lg-min":xt("lg-min"),"lg-max":xt("lg-max"),"xl-min":xt("xl-min"),"xl-max":xt("xl-max"),"xxl-min":xt("xxl-min"),"xxs-column":xt("xxs-column"),"xs-column":xt("xs-column"),"sm-column":xt("sm-column"),"md-column":xt("md-column"),"lg-column":xt("lg-column"),"xl-column":xt("xl-column"),"xxl-column":xt("xxl-column"),"xxs-gutter":xt("xxs-gutter"),"xs-gutter":xt("xs-gutter"),"sm-gutter":xt("sm-gutter"),"md-gutter":xt("md-gutter"),"lg-gutter":xt("lg-gutter"),"xl-gutter":xt("xl-gutter"),"xxl-gutter":xt("xxl-gutter"),"xxs-margin":xt("xxs-margin"),"xs-margin":xt("xs-margin"),"sm-margin":xt("sm-margin"),"md-margin":xt("md-margin"),"lg-margin":xt("lg-margin"),"xl-margin":xt("xl-margin"),"xxl-margin":xt("xxl-margin")},Ft=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=wt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),$t={MaxWidth:Ft("max-width"),MinWidth:Ft("min-width")},Et={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},Ct={collections:{lifesg:Et,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},rbs:Et,mylegacy:Et,ccube:Et,pa:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"0rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.375rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0.014rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"lifesg"},Dt=e=>r=>{var t;const n=r.theme,o=nt(Ct,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?tt(o,e,n.overrides.fontSpec):o[e]},Bt={"header-size-xxl":Dt("header-size-xxl"),"header-size-xl":Dt("header-size-xl"),"header-size-lg":Dt("header-size-lg"),"header-size-md":Dt("header-size-md"),"header-size-sm":Dt("header-size-sm"),"header-size-xs":Dt("header-size-xs"),"header-lh-xxl":Dt("header-lh-xxl"),"header-lh-xl":Dt("header-lh-xl"),"header-lh-lg":Dt("header-lh-lg"),"header-lh-md":Dt("header-lh-md"),"header-lh-sm":Dt("header-lh-sm"),"header-lh-xs":Dt("header-lh-xs"),"header-ls-xxl":Dt("header-ls-xxl"),"header-ls-xl":Dt("header-ls-xl"),"header-ls-lg":Dt("header-ls-lg"),"header-ls-md":Dt("header-ls-md"),"header-ls-sm":Dt("header-ls-sm"),"header-ls-xs":Dt("header-ls-xs"),"weight-light":Dt("weight-light"),"weight-regular":Dt("weight-regular"),"weight-semibold":Dt("weight-semibold"),"weight-bold":Dt("weight-bold"),"font-family":Dt("font-family"),"body-size-baseline":Dt("body-size-baseline"),"body-size-md":Dt("body-size-md"),"body-size-sm":Dt("body-size-sm"),"body-size-xs":Dt("body-size-xs"),"body-lh-baseline":Dt("body-lh-baseline"),"body-lh-md":Dt("body-lh-md"),"body-lh-sm":Dt("body-lh-sm"),"body-lh-xs":Dt("body-lh-xs"),"body-ls-baseline":Dt("body-ls-baseline"),"body-ls-md":Dt("body-ls-md"),"body-ls-sm":Dt("body-ls-sm"),"body-ls-xs":Dt("body-ls-xs"),"form-label-size":Dt("form-label-size"),"form-description-size":Dt("form-description-size"),"form-label-lh":Dt("form-label-lh"),"form-description-lh":Dt("form-description-lh"),"form-label-ls":Dt("form-label-ls"),"form-description-ls":Dt("form-description-ls")},Ot=(e,r,t,n)=>b`
    font-family: ${Dt("font-family")};
    font-size: ${Dt(e)};
    font-weight: ${Dt(r)};
    line-height: ${Dt(t)};
    letter-spacing: ${Dt(n)};
`,St={"header-xxl-light":Ot("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Ot("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Ot("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Ot("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Ot("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Ot("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Ot("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Ot("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Ot("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Ot("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Ot("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Ot("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Ot("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Ot("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Ot("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Ot("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Ot("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Ot("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Ot("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Ot("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Ot("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Ot("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Ot("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Ot("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Ot("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Ot("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Ot("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Ot("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Ot("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Ot("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Ot("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Ot("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Ot("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Ot("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Ot("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Ot("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Ot("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Ot("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Ot("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Ot("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"form-label":Ot("form-label-size","weight-semibold","form-label-lh","form-label-ls"),"form-description":Ot("form-description-size","weight-regular","form-description-lh","form-description-ls")},At={collections:{lifesg:St,bookingsg:St,rbs:St,mylegacy:St,ccube:St,pa:St},defaultValue:"lifesg"},_t=e=>r=>{var t;const n=r.theme,o=nt(At,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?tt(o,e,n.overrides.font):o[e];return"function"==typeof i?i(r):i},Mt={"header-xxl-light":_t("header-xxl-light"),"header-xxl-regular":_t("header-xxl-regular"),"header-xxl-semibold":_t("header-xxl-semibold"),"header-xxl-bold":_t("header-xxl-bold"),"header-xl-light":_t("header-xl-light"),"header-xl-regular":_t("header-xl-regular"),"header-xl-semibold":_t("header-xl-semibold"),"header-xl-bold":_t("header-xl-bold"),"header-lg-light":_t("header-lg-light"),"header-lg-regular":_t("header-lg-regular"),"header-lg-semibold":_t("header-lg-semibold"),"header-lg-bold":_t("header-lg-bold"),"header-md-light":_t("header-md-light"),"header-md-regular":_t("header-md-regular"),"header-md-semibold":_t("header-md-semibold"),"header-md-bold":_t("header-md-bold"),"header-sm-light":_t("header-sm-light"),"header-sm-regular":_t("header-sm-regular"),"header-sm-semibold":_t("header-sm-semibold"),"header-sm-bold":_t("header-sm-bold"),"header-xs-light":_t("header-xs-light"),"header-xs-regular":_t("header-xs-regular"),"header-xs-semibold":_t("header-xs-semibold"),"header-xs-bold":_t("header-xs-bold"),"body-baseline-light":_t("body-baseline-light"),"body-baseline-regular":_t("body-baseline-regular"),"body-baseline-semibold":_t("body-baseline-semibold"),"body-baseline-bold":_t("body-baseline-bold"),"body-md-light":_t("body-md-light"),"body-md-regular":_t("body-md-regular"),"body-md-semibold":_t("body-md-semibold"),"body-md-bold":_t("body-md-bold"),"body-sm-light":_t("body-sm-light"),"body-sm-regular":_t("body-sm-regular"),"body-sm-semibold":_t("body-sm-semibold"),"body-sm-bold":_t("body-sm-bold"),"body-xs-light":_t("body-xs-light"),"body-xs-regular":_t("body-xs-regular"),"body-xs-semibold":_t("body-xs-semibold"),"body-xs-bold":_t("body-xs-bold"),"form-label":_t("form-label"),"form-description":_t("form-description")},kt={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},zt=e=>r=>{var t;const n=r.theme,o=nt(kt,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?tt(o,e,n.overrides.motion):o[e]},jt={"duration-150":zt("duration-150"),"duration-250":zt("duration-250"),"duration-350":zt("duration-350"),"duration-500":zt("duration-500"),"duration-800":zt("duration-800"),"duration-1000":zt("duration-1000"),"ease-default":zt("ease-default"),"ease-standard":zt("ease-standard"),"ease-entrance":zt("ease-entrance"),"ease-exit":zt("ease-exit")},Tt={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},It=e=>r=>{var t;const n=r.theme,o=nt(Tt,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${tt(o,e,n.overrides.radius)}px`:`${o[e]}px`},Lt={none:It("none"),xs:It("xs"),sm:It("sm"),md:It("md"),lg:It("lg"),full:It("full")},Yt={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Pt=e=>r=>{var t;const n=r.theme,o=nt(Yt,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${tt(o,e,n.overrides.spacing)}px`:`${o[e]}px`},Rt={"spacing-0":Pt("spacing-0"),"spacing-4":Pt("spacing-4"),"spacing-8":Pt("spacing-8"),"spacing-12":Pt("spacing-12"),"spacing-16":Pt("spacing-16"),"spacing-20":Pt("spacing-20"),"spacing-24":Pt("spacing-24"),"spacing-32":Pt("spacing-32"),"spacing-40":Pt("spacing-40"),"spacing-48":Pt("spacing-48"),"spacing-64":Pt("spacing-64"),"spacing-72":Pt("spacing-72"),"layout-xs":Pt("layout-xs"),"layout-sm":Pt("layout-sm"),"layout-md":Pt("layout-md"),"layout-lg":Pt("layout-lg"),"layout-xl":Pt("layout-xl"),"layout-xxl":Pt("layout-xxl"),"layout-xxxl":Pt("layout-xxxl")},Wt=Object.assign(Object.assign({},mt),{Primitive:ct}),Ht=Object.assign(Object.assign({},Mt),{Spec:Bt}),Nt=jt,Vt=Object.assign(Object.assign({},at),{Util:pt}),Ut=Rt,Zt=Lt,qt=wt,Xt=$t,Qt=u.button`
    padding: ${Ut["spacing-8"]} ${Ut["spacing-16"]};
    min-width: 4rem;
    border: ${Vt["width-010"]} ${Vt.solid} transparent;
    border-radius: ${Zt.sm};
    transition: all ${Nt["duration-250"]} ${Nt["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return b`
                    background-color: ${Wt.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Wt["border-error-strong"]:Wt["border-primary"]};

                    color: ${e.$buttonIsDanger?Wt["text-error"]:Wt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Wt["bg-hover-neutral"]};
                    }
                `;case"light":return b`
                    background-color: ${Wt.bg};
                    border-color: ${Wt.border};

                    color: ${e.$buttonIsDanger?Wt["text-error"]:Wt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Wt["bg-hover-neutral"]};
                    }
                `;case"link":return b`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Wt["text-error"]:Wt["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Wt["bg-hover-neutral"]};
                    }
                `;case"disabled":return b`
                    background-color: ${Wt["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Wt["text-disabled"]};
                `;default:return b`
                    background-color: ${e.$buttonIsDanger?Wt["bg-error-strong"]:Wt["bg-primary"]};

                    ${Xt.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Wt["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Wt["bg-error-strong-hover"]:Wt["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return b`
                    height: 2.5rem;
                    ${Ht["body-md-semibold"]}

                    ${Xt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return b`
                    height: 4rem;
                    ${Ht["header-md-semibold"]}

                    ${Xt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return b`
                    height: 3rem;
                    ${Ht["header-xs-semibold"]}

                    ${Xt.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Jt=u((({color:t,className:n,size:o})=>e(A,{className:n,$size:o,$color:t,children:[r(M,{id:"inner1"}),r(k,{id:"inner2"}),r(z,{id:"inner3"}),r(j,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,Gt=(t,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=t,d=F(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Qt,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[a&&r(Jt,{}),r("span",{children:o})]}))};Gt.displayName="Button.Default";const Kt=(t,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=t,d=F(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Qt,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[a&&r(Jt,{}),r("span",{children:o})]}))};Kt.displayName="Button.Small";const en=(t,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=t,d=F(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Qt,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[a&&r(Jt,{}),r("span",{children:o})]}))};en.displayName="Button.Large";const rn={Default:i.forwardRef(Gt),Small:i.forwardRef(Kt),Large:i.forwardRef(en)},tn=u(Qt)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,nn=(t,n)=>{const{children:o,disabled:i=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:d="left"}=t,c=F(t,["children","disabled","styleType","danger","icon","iconPosition"]),u={$buttonIconPosition:d,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(tn,Object.assign({ref:n,"data-testid":c["data-testid"]||"button-with-icon",disabled:i},u,c,{children:[l,r("span",{children:o})]}))};nn.displayName="ButtonWithIcon.Default";const on=(t,n)=>{const{children:o,disabled:i=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:d="left"}=t,c=F(t,["children","disabled","styleType","danger","icon","iconPosition"]),u={$buttonIconPosition:d,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(tn,Object.assign({ref:n,"data-testid":c["data-testid"]||"button-with-icon",disabled:i},u,c,{children:[l,r("span",{children:o})]}))};on.displayName="ButtonWithIcon.Small";const an={Default:i.forwardRef(nn),Small:i.forwardRef(on)},sn=({className:e,progress:t,color:n,"data-testid":o})=>r(ln,{className:e,$innerWidth:t,$color:n,"data-testid":o,children:r("progress",{value:100*t,max:100})}),ln=u.div`
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

    ${e=>{const{$color:r}=e;let t;return t=r&&"string"==typeof r?r:r?r(e):Wt["icon-primary-subtle"](e),b`
            border: ${Vt["width-010"]} ${Vt.solid} ${t};
            border-radius: ${Zt.sm};

            :after {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                border-radius: inherit;
                background: ${t};
                width: ${100*e.$innerWidth}%;
            }
        `}}
`,dn=(e,r,t=!1)=>b`
        ${Ht[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,cn=e=>{if(e)return b`
            ${r=e,b`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},un=(e,r)=>b`
    ${dn(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,t)=>r?b`
            display: block;
            ${cn(t)}
        `:e?b`
            display: inline;
        `:b`
            display: block;
            ${cn(t)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${Wt.text};
`;var hn;!function(t){const n=(e,r,t)=>{const n=u(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>un(r,e)}
        `;return n.displayName=`Typography.${t}`,n};t.HeaderXXL=n("h1","header-xxl","HeaderXXL"),t.HeaderXL=n("h2","header-xl","HeaderXL"),t.HeaderLG=n("h3","header-lg","HeaderLG"),t.HeaderMD=n("h4","header-md","HeaderMD"),t.HeaderSM=n("h5","header-sm","HeaderSM"),t.HeaderXS=n("h6","header-xs","HeaderXS");const o=(e,r)=>{const t=u.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>un(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=o("body-baseline","BodyBL"),t.BodyMD=o("body-md","BodyMD"),t.BodySM=o("body-sm","BodySM"),t.BodyXS=o("body-xs","BodyXS");const i=(t,n)=>{const o=u.a`
            ${e=>b`
                ${dn(t,e.weight||"regular")}
                color: ${Wt.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Wt["text-hover"]};
                }
            `}
        `,i=t=>{var{external:n=!1,children:i}=t,a=F(t,["external","children"]);return e(o,Object.assign({},a,{children:[i,n&&r(bn,{})]}))};return i.displayName=`Typography.${n}`,i};t.LinkBL=i("body-baseline","LinkBL"),t.LinkMD=i("body-md","LinkMD"),t.LinkSM=i("body-sm","LinkSM"),t.LinkXS=i("body-xs","LinkXS")}(hn||(hn={}));const bn=u(g)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,mn=u.button`
    align-items: center;
    border-radius: 0.25rem;
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$sizeType){case"large":return b`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return b`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return b`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${e=>{switch(e.$styleType){case"secondary":return b`
                    background-color: ${Wt.bg};
                    border: ${Vt["width-010"]} ${Vt.solid}
                        ${Wt["border-primary"]};
                    color: ${Wt["text-primary"]};

                    :hover {
                        background-color: ${Wt["bg-hover-neutral"]};
                    }
                `;case"light":return b`
                    background-color: ${Wt.bg};
                    border: ${Vt["width-010"]} ${Vt.solid}
                        ${Wt.border};
                    color: ${Wt["text-primary"]};

                    :hover {
                        background-color: ${Wt["bg-hover-neutral"]};
                    }
                `;default:return b`
                    background-color: ${Wt["bg-primary"]};
                    border: none;
                    color: ${Wt["text-inverse"]};

                    :hover {
                        background-color: ${Wt["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${Wt["bg-disabled"]};
        border: ${Vt["width-010"]} ${Vt.solid}
            ${Wt["border-disabled"]};
        color: ${Wt["text-disabled"]};
        cursor: not-allowed;
    }
`,gn=i.forwardRef(((e,t)=>{var{"data-testid":n,styleType:o="primary",children:i,sizeType:a="default",type:s="button"}=e,l=F(e,["data-testid","styleType","children","sizeType","type"]);return r(mn,Object.assign({"data-testid":n||"iconButton",ref:t,type:s,$sizeType:a,$styleType:o},l,{children:i}))}));var fn={exports:{}};fn.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",b="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),o=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(o,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),o=r.clone().add(n,d),i=t-o<0,a=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:a,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var w="$isDayjsObject",F=function(e){return e instanceof D||!(!e||!e[w])},$=function e(r,t,n){var o;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(o=i),t&&(x[i]=t,o=i);var a=r.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,o=s}return!n&&o&&(v=o),o||!n&&v},E=function(e,r){if(F(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new D(t)},C=p;C.l=$,C.i=F,C.w=function(e,r){return E(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function f(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(C.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(m);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return C},y.isValid=function(){return!(this.$d.toString()===b)},y.isSame=function(e,r){var t=E(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return E(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<E(e)},y.$g=function(e,r,t){return C.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!C.u(r)||r,c=C.p(e),b=function(e,r){var o=C.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?o:o.endOf(s)},m=function(e,r){return C.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},g=this.$W,f=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,f):b(0,f+1);case l:var v=this.$locale().weekStart||0,x=(g<v?g+7:g)-v;return b(n?y-x:y+(6-x),f);case s:case h:return m(p+"Hours",0);case a:return m(p+"Minutes",1);case i:return m(p+"Seconds",2);case o:return m(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=C.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[s]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[a]=c+"Hours",t[i]=c+"Minutes",t[o]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],m=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var g=this.clone().set(h,1);g.$d[b](m),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else b&&this.$d[b](m);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[C.p(e)]()},y.add=function(n,c){var h,b=this;n=Number(n);var m=C.p(c),g=function(e){var r=E(b);return C.w(r.date(r.date()+Math.round(e*n)),b)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===s)return g(1);if(m===l)return g(7);var f=(h={},h[i]=r,h[a]=t,h[o]=e,h)[m]||1,y=this.$d.getTime()+n*f;return C.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=C.z(this),i=this.$H,a=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,o,i){return e&&(e[t]||e(r,n))||o[t].slice(0,i)},h=function(e){return C.s(i%12||12,e,"0")},m=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return C.s(r.$y,4,"0");case"M":return s+1;case"MM":return C.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return C.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return C.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(i,a,!0);case"A":return m(i,a,!1);case"m":return String(a);case"mm":return C.s(a,2,"0");case"s":return String(r.$s);case"ss":return C.s(r.$s,2,"0");case"SSS":return C.s(r.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,b){var m,g=this,f=C.p(h),y=E(n),p=(y.utcOffset()-this.utcOffset())*r,v=this-y,x=function(){return C.m(g,y)};switch(f){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(v-p)/6048e5;break;case s:m=(v-p)/864e5;break;case a:m=v/t;break;case i:m=v/r;break;case o:m=v/e;break;default:m=v}return b?m:C.a(m)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return C.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),B=D.prototype;return E.prototype=B,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),E.extend=function(e,r){return e.$i||(e(r,D,E),e.$i=!0),E},E.locale=$,E.isDayjs=F,E.unix=function(e){return E(1e3*e)},E.en=x[v],E.Ls=x,E.p={},E}();var yn=C(fn.exports),pn={exports:{}};pn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,r))>-1){t=o>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[o,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[o,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[o,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(t){var n,o;n=t,o=i&&i.formats;for(var a=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],h=c&&c[0],b=c&&c[1];a[l]=b?{regex:h,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var o=a[t];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=r.prototype,o=n.parse;n.parse=function(e){var r=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),o=n.year,i=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,m=a||(o||i?1:b.getDate()),g=o||b.getFullYear(),f=0;o&&!i||(f=i>0?i-1:b.getMonth());var y=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(g,f,m,y,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(g,f,m,y,p,v,x)):new Date(g,f,m,y,p,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var b=s.length,m=1;m<=b;m+=1){a[1]=s[m-1];var g=t.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}m===b&&(this.$d=new Date(""))}else o.call(this,e)}}}();var vn=C(pn.exports),xn={exports:{}};xn.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,o){var i=t(e),a=t(r),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var wn=C(xn.exports),Fn={exports:{}};Fn.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var $n=C(Fn.exports),En={exports:{}};En.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Cn,Dn,Bn,On=C(En.exports),Sn={exports:{}},An=C(Sn.exports=(Cn={year:0,month:1,day:2,hour:3,minute:4,second:5},Dn={},function(e,r,t){var n,o=function(e,r,t){void 0===t&&(t={});var n=new Date(e),o=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,o=Dn[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Dn[n]=o),o}(r,t);return o.formatToParts(n)},i=function(e,r){for(var n=o(e,r),i=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=Cn[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,b=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",m=+e;return(t.utc(b).valueOf()-(m-=m%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=t(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=o(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,o){var a=o&&r,s=o||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,o=i(n,t);if(r===o)return[n,r];var a=i(n-=60*(o-r)*1e3,t);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(t.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=s,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));yn.extend(wn),yn.extend(On),yn.extend($n),yn.extend(vn),yn.extend(An),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=yn(r).startOf("week");return _n(t).map((e=>Mn(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Mn(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(yn(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+yn(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=yn(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,o)=>{const i=e.isWithinRange(r,n?yn(n):void 0,o?yn(o):void 0),a=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!a}}(Bn||(Bn={}));const _n=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Mn=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},kn=[1,3,5,7,8,10,12],zn=[4,6,9,11];var jn,Tn,In,Ln;!function(e){e.clampDay=(r,t,n)=>{const o=parseInt(r),i=parseInt(t),a=parseInt(n);return 0==o?"1":kn.includes(i)?Math.min(o,31).toString():zn.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=yn(e,t);return yn(r,t).diff(n,"minute")},e.toDayjs=e=>e?yn(e):yn(),e.addMinutesToTime=(e,r,t="HH:mm")=>yn(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>yn(e).isSame(yn(r),t)}(jn||(jn={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:o}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!yn(e).isBefore(n,"day"))||!(!o||!yn(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(yn(e).isValid())return e}return""}}(Tn||(Tn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(In||(In={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,o=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/o));const a=n+i;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const o=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=t;if(s)return s(e);if(a)return e.replace(a,i);if(n){const{startIndex:t,endIndex:o}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,o+1).length)+e.substring(o+1)}if(o){const{startIndex:t,endIndex:n}=r(o[0],o[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(Ln||(Ln={}));const Yn=u.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return b`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Pn=u.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Wt["overlay-subtle"]:Wt["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let r="";return e&&(r+="blur(10px)"),r.length>0?r:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let r="";return e.$show?r+=b`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:r+=b`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(r+=b`
                transition: none;
            `),r}}
`;var Rn;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Rn||(Rn={}));const Wn=({show:e=!1,rootId:t,onOverlayClick:n,children:o,backgroundOpacity:d,backgroundBlur:c=!0,disableTransition:u=!1,enableOverlayClick:h=!1,zIndex:b,id:m})=>{const[g,y]=s(null),[w,F]=s(),[$]=s((()=>In.generate())),E=p(),C=l(),D=l(null),B=o&&i.cloneElement(o,{ref:D}),O=m?`lifesg-ds-overlay-root-${m}`:"lifesg-ds-overlay-root",S=null!=b?b:w?99999:99998;(e=>{const r=f();a((()=>{if(!r)return;const t={zIndex:e};r.events.emit(Rn.Change,t)}),[r,e]),a((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(Rn.Change,t)};return null==r||r.events.on(Rn.Ready,t),()=>null==r?void 0:r.events.off(Rn.Ready,t)}),[r,e])})(S),a((()=>(k(),y(_()),()=>{I(),j().length<1&&z("remove")})),[]),a((()=>{if(e){const e=M();A(e),T();const r=setTimeout((()=>{z("add")}),200);return()=>clearTimeout(r)}{I();const e=setTimeout((()=>{j().length<1&&z("remove")}),200);return()=>clearTimeout(e)}}),[e]);const A=e=>{C.current=e,F(e)},_=()=>document&&t?document.getElementById(t):document?document.body:null,M=()=>j().length>0,k=()=>{if(!document.getElementById(Nn)){const e=document.createElement("style");e.id=Nn;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${Vn} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Vn}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},z=e=>{const r=document.body.classList.contains(Vn);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(Vn):document.body.classList.add(Vn)},j=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},T=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=[...e,$].join(",")},I=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==$)).join(",")},L=e=>{var r;const t=null===(r=D.current)||void 0===r?void 0:r.firstChild;t&&t.contains(e.target)||n&&h&&(e.preventDefault(),n())};return g?x.createPortal(r(Yn,{id:O,"data-testid":O,$show:e,$zIndex:S,children:o&&r(v,{id:E,children:r(Pn,{"data-testid":"overlay-wrapper",$show:e,$stacked:w,$backgroundBlur:c,$disableTransition:u,onClick:L,children:B})})}),g):null},Hn=e=>r(y,{children:r(Wn,Object.assign({},e))}),Nn="lifesg-ds-overlay-stylesheet",Vn="lifesg-ds-overlay-open",Un=u.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return r=e.show,t=e.animationFrom||"bottom",r?`\n\t\t\t${t}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${t}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var r,t}}

    ${Xt.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Zn=u.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Ut["spacing-24"]};
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

        ${({$highlight:e})=>e&&b`
                background-color: ${Wt["bg-hover-neutral"]};
            `}
    }
`,qn=i.forwardRef(((e,t)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,s=F(e,["children","focusHighlight","focusOutline","type"]);return r(Zn,Object.assign({ref:t,$outline:i,$highlight:o,type:a},s,{children:n}))})),Xn=u.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Wt.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Xt.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Qn=u(qn)`
    position: absolute;
    top: var(--close-button-top-inset, ${Ut["spacing-16"]});
    right: var(--close-button-right-inset, ${Ut["spacing-16"]});
    padding: 0;
    color: ${Wt.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Xt.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Ut["spacing-20"]});
    }
`,Jn=Object.assign((e=>{var{id:t="modal",show:n,animationFrom:o="bottom",children:i,enableOverlayClick:l=!0,rootComponentId:d,zIndex:c,onOverlayClick:u,dismissKeyboardOnShow:h=!0}=e,b=F(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[m,g]=s(),[f,y]=s();a((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",v)}):(p(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)})),[]),a((()=>{var e,r;n&&h&&(null===(r=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===r||r.call(e))}),[n]);const p=()=>{const e=.01*window.innerHeight;g(e)},v=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;g(e),y(window.visualViewport.offsetTop)}};return r(Hn,{"data-testid":`${t}-overlay`,show:n,enableOverlayClick:l,onOverlayClick:u,id:t,rootId:d,zIndex:c,children:r(Un,Object.assign({show:n,animationFrom:o,"data-testid":t,verticalHeight:m,offsetTop:f},b,{children:i}))})}),{Box:t=>{var{id:n="modal-box",children:o,onClose:i,showCloseButton:a=!0}=t,s=F(t,["id","children","onClose","showCloseButton"]);return e(Xn,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&r(Qn,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:r(w,{})}),o]}))}}),Gn=b`
    ${e=>`\n        ${Xt.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${qt["sm-max"](e)}px)\n    `}
`,Kn=b`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${qt["sm-max"](e)}px)\n    `}
`,eo=u.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>b`
            ${Vt.Util["dashed-default"]({radius:Zt.sm,thickness:Vt["width-040"],colour:e.$disabled?Wt["border-disabled"]:Wt.border})}

            background-color: ${e.$disabled?Wt["bg-disabled"]:Wt.bg};
        `}
    height: 14.125rem;
`,ro=u(rn.Default)`
    width: fit-content;
    margin: 0 ${Ut["spacing-20"]};

    :disabled {
        border-color: ${Wt["border-strong"]};
    }
`,to=u(gn)`
    position: absolute;
    top: ${Ut["spacing-16"]};
    right: ${Ut["spacing-16"]};

    :disabled {
        border-color: ${Wt["border-strong"]};
    }
`,no=u.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${Ut["spacing-16"]}) * 2);
    height: 100%;
`,oo=u.div`
    background: ${Wt["bg-primary-subtlest"]};
    border: ${Vt["width-010"]} ${Vt.solid} ${Wt.border};
    border-radius: ${Zt.sm};
    margin: 0 ${Ut["spacing-20"]};
    padding: ${Ut["spacing-16"]};
    display: flex;
    gap: ${Ut["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,io=u(hn.BodySM)`
    margin-top: ${Ut["spacing-16"]};
`,ao=u(Jn)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,so=u.div`
    width: 100%;
    margin: auto;
    padding: ${Ut["layout-xxl"]} ${Ut["layout-sm"]};

    ${Gn} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,lo=u(Jn.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${Ut["spacing-16"]};

    ${Gn} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${Ut["spacing-8"]};
        --close-button-right-inset: ${Ut["spacing-20"]};
    }
`,co=u.h2`
    ${Ht["body-baseline-semibold"]}
    color: ${Wt.text};
    margin-bottom: ${Ut["spacing-16"]};
    text-align: center;

    ${Gn} {
        ${Ht["body-md-semibold"]}
        margin: ${Ut["spacing-12"]} 0;
    }
`,uo=u.div`
    width: 100%;
    height: 20rem;
    border-radius: ${Zt.lg};
    overflow: hidden;

    ${Gn} {
        border-radius: 0;
        flex: 1;
    }

    ${Kn} {
        background: ${Wt["bg-strong"]};
    }
`,ho=u.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${Wt["bg-stronger"]};
    margin: auto;

    ${Gn} {
        aspect-ratio: 4/3;
    }
    ${Xt.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${Kn} {
        width: auto;
        height: 100%;
    }
`,bo=u.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${Wt["border-strong"]};
    pointer-events: none;

    ${Gn} {
        width: calc(100% - ${Ut["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,mo=u.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${Ut["spacing-16"]};

    ${Xt.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${Ut["spacing-16"]} ${Ut["spacing-24"]}
            ${Ut["spacing-48"]};
        gap: ${Ut["spacing-16"]};
    }

    ${Kn} {
        flex-direction: row;
        margin: ${Ut["spacing-16"]} ${Ut["spacing-20"]};
    }
`,go=u(rn.Default)`
    width: 8.5rem;
    ${Xt.MaxWidth.sm} {
        width: 100%;
    }
    ${Kn} {
        height: 2.5rem;
    }
`,fo=u.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,yo=u.canvas`
    cursor: crosshair;
`,po=d((()=>$(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.becbfcf7.js")).ESignatureCanvas}})))),vo=i=>{const{description:d,id:u,loadingProgress:h,loadingLabel:b="Uploading...",onChange:g,value:f,disabled:y}=i,p=F(i,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[v,x]=s(!1),w=l(null),[$,E]=s(f),C=m(),D=qt["sm-max"]({theme:C}),B=S.useMediaQuery({maxWidth:D}),O=S.useMediaQuery({maxHeight:D,orientation:"landscape"}),A=()=>{var e;null===(e=w.current)||void 0===e||e.clear()},_=()=>{if(w.current){const e=w.current.export();E(e),x(!1),null==g||g(e)}};a((()=>{E(f)}),[f]);return e("div",Object.assign({},p,{children:[r(eo,{$disabled:y,children:"number"==typeof h?e(oo,{children:[b&&r(hn.BodyMD,{children:b}),r(sn,{progress:null!=h?h:0,"data-testid":`${u||"e-signature"}-progress-bar`})]}):$?e(t,{children:[r(no,{src:$,alt:"Signature preview"}),r(to,{styleType:"light",onClick:()=>x(!0),id:u,"aria-label":"Edit signature",disabled:y,children:r(n,{})})]}):r(ro,{type:"button",styleType:"secondary","aria-label":"Add signature",id:u,onClick:()=>x(!0),disabled:y,children:"Add signature"})}),r(ao,{"data-testid":"signature-modal",show:v,children:r(so,{children:e(lo,{onClose:()=>x(!1),children:[r(co,{children:"Signature"}),r(uo,{children:e(ho,{children:[r(bo,{}),r(c,{fallback:null,children:v&&r(po,{ref:w,baseImageDataURL:$})})]})}),e(mo,{children:[r(go,{as:O?an.Small:an.Default,type:"button",styleType:B&&!O?"light":"link",icon:r(o,{}),onClick:A,children:"Clear"}),r(go,{as:O?rn.Small:rn.Default,type:"button",onClick:_,children:"Save"})]})]})})}),d?r(io,{children:d}):null]}))};export{Wt as C,vo as E,fo as S,$ as _,yo as a,D as g};
//# sourceMappingURL=index.d2830e74.js.map
