import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import{PencilIcon as n,EraserIcon as i}from"@lifesg/react-icons";import o,{useEffect as a,useState as s,useRef as l,lazy as d,Suspense as c}from"react";import u,{keyframes as g,css as h,useTheme as b}from"styled-components";import{ExternalIcon as m}from"@lifesg/react-icons/external";import{useFloatingTree as f,FloatingTree as y,useFloatingNodeId as p,FloatingNode as v}from"@floating-ui/react";import x from"react-dom";import{CrossIcon as w}from"@lifesg/react-icons/cross";function F(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}function $(e,r,t,n){return new(t||(t=Promise))((function(i,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var r;e.done?i(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,s)}l((n=n.apply(e,r||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var E="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function C(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function D(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var B,O={exports:{}};B=e=>(()=>{var r={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,r)=>{r.match=function(e,r){return s(e).some((function(e){var t=e.inverse,n="all"===e.type||r.type===e.type;if(n&&t||!n&&!t)return!1;var i=e.expressions.every((function(e){var t=e.feature,n=e.modifier,i=e.value,o=r[t];if(!o)return!1;switch(t){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=c(i),o=c(o);break;case"resolution":i=d(i),o=d(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),o=l(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(n){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!t||!i&&t}))},r.parse=s;var t=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var r=(e=e.trim()).match(t),o=r[1],a=r[2],s=r[3]||"",l={};return l.inverse=!!o&&"not"===o.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var r=e.match(n),t=r[1].toLowerCase().match(i);return{modifier:t[1],feature:t[2],value:r[2]}})),l}))}function l(e){var r,t=Number(e);return t||(t=(r=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/r[2]),t}function d(e){var r=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return r/2.54;case"dppx":return 96*r;default:return r}}function c(e){var r=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*r;case"cm":return 96*r/2.54;case"mm":return 96*r/2.54/10;case"in":return 96*r;case"pt":return 72*r;case"pc":return 72*r/12;default:return r}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,r,t)=>{t.r(r),t.d(r,{default:()=>s});var n=/[A-Z]/g,i=/^ms-/,o={};function a(e){return"-"+e.toLowerCase()}const s=function(e){if(o.hasOwnProperty(e))return o[e];var r=e.replace(n,a);return o[e]=i.test(r)?"-"+r:r}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,r,t)=>{var n=t(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,i="undefined"!=typeof window?window.matchMedia:null;function o(e,r,t){var o=this;if(i&&!t){var a=i.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=n(e,r),this.media=e;function s(e){o.matches=e.matches,o.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,r,t){return new o(e,r,t)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var d in o=Object(arguments[l]))t.call(o,d)&&(s[d]=o[d]);if(r){a=r(o);for(var c=0;c<a.length;c++)n.call(o,a[c])&&(s[a[c]]=o[a[c]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,r,t)=>{var n,i=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,r,t,s,l){for(var d in e)if(a(e,d)){var c;try{if("function"!=typeof e[d]){var u=Error((s||"React class")+": "+t+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}c=e[d](r,d,s,t,null,i)}catch(e){c=e}if(!c||c instanceof Error||n((s||"React class")+": type specification of "+t+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in o)){o[c.message]=!0;var g=l?l():"";n("Failed "+t+" type: "+c.message+(null!=g?g:""))}}}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,r,t)=>{var n,i=t(/*! react-is */"./node_modules/react-is/index.js"),o=t(/*! object-assign */"./node_modules/object-assign/index.js"),a=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=t(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},e.exports=function(e,r){var t="function"==typeof Symbol&&Symbol.iterator,c="@@iterator",u="<<anonymous>>",g={array:f("array"),bigint:f("bigint"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:m(d),arrayOf:function(e){return m((function(r,t,n,i,o){if("function"!=typeof e)return new b("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=r[t];if(!Array.isArray(s))return new b("Invalid "+i+" `"+o+"` of type `"+v(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var d=e(s,l,n,i,o+"["+l+"]",a);if(d instanceof Error)return d}return null}))},element:m((function(r,t,n,i,o){var a=r[t];return e(a)?null:new b("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:m((function(e,r,t,n,o){var a=e[r];return i.isValidElementType(a)?null:new b("Invalid "+n+" `"+o+"` of type `"+v(a)+"` supplied to `"+t+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(r,t,n,i,o){if(!(r[t]instanceof e)){var a=e.name||u;return new b("Invalid "+i+" `"+o+"` of type `"+((s=r[t]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,r,t,n,i){return p(e[r])?null:new b("Invalid "+n+" `"+i+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(r,t,n,i,o){if("function"!=typeof e)return new b("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=r[t],d=v(l);if("object"!==d)return new b("Invalid "+i+" `"+o+"` of type `"+d+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(s(l,c)){var u=e(l,c,n,i,o+"."+c,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(r,t,n,i,o){for(var a=r[t],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,r){return"symbol"===x(r)?String(r):r}));return new b("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(t)+" at index "+r+"."),d}return m((function(r,t,n,i,o){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(r,t,n,i,o,a);if(null==c)return null;c.data&&s(c.data,"expectedType")&&l.push(c.data.expectedType)}return new b("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(r,t,n,i,o){var s=r[t],l=v(s);if("object"!==l)return new b("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return y(n,i,o,d,x(c));var u=c(s,d,n,i,o+"."+d,a);if(u)return u}return null}))},exact:function(e){return m((function(r,t,n,i,l){var d=r[t],c=v(d);if("object"!==c)return new b("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=o({},r[t],e);for(var g in u){var h=e[g];if(s(e,g)&&"function"!=typeof h)return y(n,i,l,g,x(h));if(!h)return new b("Invalid "+i+" `"+l+"` key `"+g+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=h(d,g,n,i,l+"."+g,a);if(m)return m}return null}))}};function h(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function b(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function m(e){var t={},i=0;function o(o,s,l,d,c,g,h){if(d=d||u,g=g||l,h!==a){if(r){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var f=d+":"+l;!t[f]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+g+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[f]=!0,i++)}}return null==s[l]?o?null===s[l]?new b("The "+c+" `"+g+"` is marked as required in `"+d+"`, but its value is `null`."):new b("The "+c+" `"+g+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(s,l,d,c,g)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function f(e){return m((function(r,t,n,i,o,a){var s=r[t];return v(s)!==e?new b("Invalid "+i+" `"+o+"` of type `"+x(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,r,t,n,i){return new b((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function p(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(p);if(null===r||e(r))return!0;var n=function(e){var r=e&&(t&&e[t]||e[c]);if("function"==typeof r)return r}(r);if(!n)return!1;var i,o=n.call(r);if(n!==r.entries){for(;!(i=o.next()).done;)if(!p(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!p(a[1]))return!1}return!0;default:return!1}}function v(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function x(e){if(null==e)return""+e;var r=v(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function w(e){var r=x(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return b.prototype=Error.prototype,g.checkPropTypes=l,g.resetWarningCache=l.resetWarningCache,g.PropTypes=g,g}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,r)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,g=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,b=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,p=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var h=e.type;switch(h){case d:case c:case i:case a:case o:case g:return h;default:var f=h&&h.$$typeof;switch(f){case l:case u:case m:case b:case s:return f;default:return r}}case n:return r}}}var w=d,F=c,$=l,E=s,C=t,D=u,B=i,O=m,A=b,S=n,_=a,k=o,M=g,z=!1;function j(e){return x(e)===c}r.AsyncMode=w,r.ConcurrentMode=F,r.ContextConsumer=$,r.ContextProvider=E,r.Element=C,r.ForwardRef=D,r.Fragment=B,r.Lazy=O,r.Memo=A,r.Portal=S,r.Profiler=_,r.StrictMode=k,r.Suspense=M,r.isAsyncMode=function(e){return z||(z=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),j(e)||x(e)===d},r.isConcurrentMode=j,r.isContextConsumer=function(e){return x(e)===l},r.isContextProvider=function(e){return x(e)===s},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return x(e)===u},r.isFragment=function(e){return x(e)===i},r.isLazy=function(e){return x(e)===m},r.isMemo=function(e){return x(e)===b},r.isPortal=function(e){return x(e)===n},r.isProfiler=function(e){return x(e)===a},r.isStrictMode=function(e){return x(e)===o},r.isSuspense=function(e){return x(e)===g},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===a||e===o||e===g||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===b||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===y||e.$$typeof===p||e.$$typeof===v||e.$$typeof===f)},r.typeOf=x}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,r,t)=>{e.exports=t(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,r,t)=>{function n(e,r){if(e===r)return!0;if(!e||!r)return!1;var t=Object.keys(e),n=Object.keys(r),i=t.length;if(n.length!==i)return!1;for(var o=0;o<i;o++){var a=t[o];if(e[a]!==r[a]||!Object.prototype.hasOwnProperty.call(r,a))return!1}return!0}function i(e,r){if(e===r)return!0;if(!e||!r)return!1;var t=e.length;if(r.length!==t)return!1;for(var n=0;n<t;n++)if(e[n]!==r[n])return!1;return!0}t.r(r),t.d(r,{shallowEqualArrays:()=>i,shallowEqualObjects:()=>n})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,r,t){var n=this&&this.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var o=i(t(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));r.default=function(e){var r=e.children,t=e.device,i=e.onChange,a=n(e,["children","device","onChange"]),s=(0,o.default)(a,t,i);return"function"==typeof r?r(s):s?r:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0});var n=(0,t(/*! react */"react").createContext)(void 0);r.default=n},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.Context=r.toQuery=r.useMediaQuery=r.default=void 0;var i=n(t(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));r.useMediaQuery=i.default;var o=n(t(/*! ./Component */"./src/Component.ts"));r.default=o.default;var a=n(t(/*! ./toQuery */"./src/toQuery.ts"));r.toQuery=a.default;var s=n(t(/*! ./Context */"./src/Context.ts"));r.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,r,t){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},n.apply(this,arguments)},i=this&&this.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var a=o(t(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},d={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},c=i(d,["type"]),u=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},c),g=n(n({},l),u);r.default={all:g,types:l,matchers:d,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=n(t(/*! ./mediaQuery */"./src/mediaQuery.ts"));r.default=function(e){var r=[];return Object.keys(o.default.all).forEach((function(t){var n=e[t];null!=n&&r.push(function(e,r){var t=(0,i.default)(e);return"number"==typeof r&&(r="".concat(r,"px")),!0===r?t:!1===r?"not ".concat(t):"(".concat(t,": ").concat(r,")")}(t,n))})),r.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=t(/*! react */"react"),o=n(t(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=t(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(t(/*! ./toQuery */"./src/toQuery.ts")),d=n(t(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(r,t){return r[(0,a.default)(t)]=e[t],r}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},g=function(e){var r=function(){return function(e){return e.query||(0,l.default)(e)}(e)},t=(0,i.useState)(r),n=t[0],o=t[1];return(0,i.useEffect)((function(){var e=r();n!==e&&o(e)}),[e]),n};r.default=function(e,r,t){var n=function(e){var r=(0,i.useContext)(d.default),t=function(){return c(e)||c(r)},n=(0,i.useState)(t),o=n[0],a=n[1];return(0,i.useEffect)((function(){var e=t();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,r]),o}(r),a=g(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,r){var t=function(){return(0,o.default)(e,r||{},!!r)},n=(0,i.useState)(t),a=n[0],s=n[1],l=u();return(0,i.useEffect)((function(){if(l){var e=t();return s(e),function(){e&&e.dispose()}}}),[e,r]),a}(a,n),h=function(e){var r=(0,i.useState)(e.matches),t=r[0],n=r[1];return(0,i.useEffect)((function(){var r=function(e){n(e.matches)};return e.addListener(r),n(e.matches),function(){e.removeListener(r)}}),[e]),t}(l),b=u();return(0,i.useEffect)((function(){b&&t&&t(h)}),[h]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/r=>{r.exports=e}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={exports:{}};return r[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var A=O.exports=B(o);const S=u.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,_=g`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,k=u.div`
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
`,M=u(k)`
    animation-delay: -0.45s;
`,z=u(k)`
    animation-delay: -0.3s;
`,j=u(k)`
    animation-delay: -0.15s;
`,T=({color:t,className:n,size:i})=>e(S,{className:n,$size:i,$color:t,"data-testid":"component-loading-spinner",children:[r(k,{id:"inner1"}),r(M,{id:"inner2"}),r(z,{id:"inner3"}),r(j,{id:"inner4"})]});var L=Array.isArray,I="object"==typeof E&&E&&E.Object===Object&&E,Y="object"==typeof self&&self&&self.Object===Object&&self,P=I||Y||Function("return this")(),R=P.Symbol,W=R,H=Object.prototype,N=H.hasOwnProperty,V=H.toString,U=W?W.toStringTag:void 0;var Z=function(e){var r=N.call(e,U),t=e[U];try{e[U]=void 0;var n=!0}catch(e){}var i=V.call(e);return n&&(r?e[U]=t:delete e[U]),i},q=Object.prototype.toString;var X=Z,Q=function(e){return q.call(e)},J=R?R.toStringTag:void 0;var G=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":J&&J in Object(e)?X(e):Q(e)};var K=G,ee=function(e){return null!=e&&"object"==typeof e};var re=function(e){return"symbol"==typeof e||ee(e)&&"[object Symbol]"==K(e)},te=L,ne=re,ie=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,oe=/^\w*$/;var ae=function(e,r){if(te(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!ne(e))||(oe.test(e)||!ie.test(e)||null!=r&&e in Object(r))};var se=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},le=G,de=se;var ce,ue=function(e){if(!de(e))return!1;var r=le(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},ge=P["__core-js_shared__"],he=(ce=/[^.]+$/.exec(ge&&ge.keys&&ge.keys.IE_PROTO||""))?"Symbol(src)_1."+ce:"";var be=function(e){return!!he&&he in e},me=Function.prototype.toString;var fe=ue,ye=be,pe=se,ve=function(e){if(null!=e){try{return me.call(e)}catch(e){}try{return e+""}catch(e){}}return""},xe=/^\[object .+?Constructor\]$/,we=Function.prototype,Fe=Object.prototype,$e=we.toString,Ee=Fe.hasOwnProperty,Ce=RegExp("^"+$e.call(Ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var De=function(e,r){return null==e?void 0:e[r]},Be=function(e){return!(!pe(e)||ye(e))&&(fe(e)?Ce:xe).test(ve(e))},Oe=De;var Ae=function(e,r){var t=Oe(e,r);return Be(t)?t:void 0},Se=Ae(Object,"create"),_e=Se;var ke=function(){this.__data__=_e?_e(null):{},this.size=0};var Me=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},ze=Se,je=Object.prototype.hasOwnProperty;var Te=function(e){var r=this.__data__;if(ze){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return je.call(r,e)?r[e]:void 0},Le=Se,Ie=Object.prototype.hasOwnProperty;var Ye=function(e){var r=this.__data__;return Le?void 0!==r[e]:Ie.call(r,e)},Pe=Se;var Re=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Pe&&void 0===r?"__lodash_hash_undefined__":r,this},We=ke,He=Me,Ne=Te,Ve=Ye,Ue=Re;function Ze(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Ze.prototype.clear=We,Ze.prototype.delete=He,Ze.prototype.get=Ne,Ze.prototype.has=Ve,Ze.prototype.set=Ue;var qe=Ze;var Xe=function(){this.__data__=[],this.size=0};var Qe=function(e,r){return e===r||e!=e&&r!=r};var Je=function(e,r){for(var t=e.length;t--;)if(Qe(e[t][0],r))return t;return-1},Ge=Je,Ke=Array.prototype.splice;var er=function(e){var r=this.__data__,t=Ge(r,e);return!(t<0)&&(t==r.length-1?r.pop():Ke.call(r,t,1),--this.size,!0)},rr=Je;var tr=function(e){var r=this.__data__,t=rr(r,e);return t<0?void 0:r[t][1]},nr=Je;var ir=function(e){return nr(this.__data__,e)>-1},or=Je;var ar=function(e,r){var t=this.__data__,n=or(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},sr=Xe,lr=er,dr=tr,cr=ir,ur=ar;function gr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}gr.prototype.clear=sr,gr.prototype.delete=lr,gr.prototype.get=dr,gr.prototype.has=cr,gr.prototype.set=ur;var hr=gr,br=Ae(P,"Map"),mr=qe,fr=hr,yr=br;var pr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var vr=function(e,r){var t=e.__data__;return pr(r)?t["string"==typeof r?"string":"hash"]:t.map},xr=vr;var wr=function(e){var r=xr(this,e).delete(e);return this.size-=r?1:0,r},Fr=vr;var $r=function(e){return Fr(this,e).get(e)},Er=vr;var Cr=function(e){return Er(this,e).has(e)},Dr=vr;var Br=function(e,r){var t=Dr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Or=function(){this.size=0,this.__data__={hash:new mr,map:new(yr||fr),string:new mr}},Ar=wr,Sr=$r,_r=Cr,kr=Br;function Mr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Mr.prototype.clear=Or,Mr.prototype.delete=Ar,Mr.prototype.get=Sr,Mr.prototype.has=_r,Mr.prototype.set=kr;var zr=Mr;function jr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return t.cache=o.set(i,a)||o,a};return t.cache=new(jr.Cache||zr),t}jr.Cache=zr;var Tr=jr;var Lr=function(e){var r=Tr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Ir=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yr=/\\(\\)?/g,Pr=Lr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Ir,(function(e,t,n,i){r.push(n?i.replace(Yr,"$1"):t||e)})),r}));var Rr=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},Wr=L,Hr=re,Nr=R?R.prototype:void 0,Vr=Nr?Nr.toString:void 0;var Ur=function e(r){if("string"==typeof r)return r;if(Wr(r))return Rr(r,e)+"";if(Hr(r))return Vr?Vr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Zr=Ur;var qr=L,Xr=ae,Qr=Pr,Jr=function(e){return null==e?"":Zr(e)};var Gr=re;var Kr=function(e,r){return qr(e)?e:Xr(e,r)?[e]:Qr(Jr(e))},et=function(e){if("string"==typeof e||Gr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var rt=function(e,r){for(var t=0,n=(r=Kr(r,e)).length;null!=e&&t<n;)e=e[et(r[t++])];return t&&t==n?e:void 0};var tt=C((function(e,r,t){var n=null==e?void 0:rt(e,r);return void 0===n?t:n}));const nt=(e,r,t)=>tt(t,r)||tt(e,r),it=(e,r)=>{const t=r||e.defaultValue;return tt(e.collections,t)},ot={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},at=e=>r=>{var t;const n=r.theme,i=it(ot,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${nt(i,e,n.overrides.border)}px`:`${i[e]}px`},st={"width-005":at("width-005"),"width-010":at("width-010"),"width-020":at("width-020"),"width-040":at("width-040"),solid:(lt="solid",e=>{var r;const t=e.theme,n=it(ot,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?nt(n,lt,t.overrides.border):n[lt];return"function"==typeof i?i(e):i})};var lt;const dt={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#E21F26","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},ct=e=>r=>{var t;const n=r.theme,i=it(dt,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?nt(i,e,n.overrides.primitiveColour):i[e]},ut={"brand-10":ct("brand-10"),"brand-20":ct("brand-20"),"brand-30":ct("brand-30"),"brand-40":ct("brand-40"),"brand-50":ct("brand-50"),"brand-60":ct("brand-60"),"brand-70":ct("brand-70"),"brand-80":ct("brand-80"),"brand-90":ct("brand-90"),"brand-95":ct("brand-95"),"brand-100":ct("brand-100"),"primary-10":ct("primary-10"),"primary-20":ct("primary-20"),"primary-30":ct("primary-30"),"primary-40":ct("primary-40"),"primary-50":ct("primary-50"),"primary-60":ct("primary-60"),"primary-70":ct("primary-70"),"primary-80":ct("primary-80"),"primary-90":ct("primary-90"),"primary-95":ct("primary-95"),"primary-100":ct("primary-100"),"secondary-10":ct("secondary-10"),"secondary-20":ct("secondary-20"),"secondary-30":ct("secondary-30"),"secondary-40":ct("secondary-40"),"secondary-50":ct("secondary-50"),"secondary-60":ct("secondary-60"),"secondary-70":ct("secondary-70"),"secondary-80":ct("secondary-80"),"secondary-90":ct("secondary-90"),"secondary-95":ct("secondary-95"),"secondary-100":ct("secondary-100"),"neutral-10":ct("neutral-10"),"neutral-20":ct("neutral-20"),"neutral-30":ct("neutral-30"),"neutral-40":ct("neutral-40"),"neutral-50":ct("neutral-50"),"neutral-60":ct("neutral-60"),"neutral-70":ct("neutral-70"),"neutral-80":ct("neutral-80"),"neutral-90":ct("neutral-90"),"neutral-95":ct("neutral-95"),"neutral-100":ct("neutral-100"),"success-10":ct("success-10"),"success-20":ct("success-20"),"success-30":ct("success-30"),"success-40":ct("success-40"),"success-50":ct("success-50"),"success-60":ct("success-60"),"success-70":ct("success-70"),"success-80":ct("success-80"),"success-90":ct("success-90"),"success-95":ct("success-95"),"success-100":ct("success-100"),"warning-10":ct("warning-10"),"warning-20":ct("warning-20"),"warning-30":ct("warning-30"),"warning-40":ct("warning-40"),"warning-50":ct("warning-50"),"warning-60":ct("warning-60"),"warning-70":ct("warning-70"),"warning-80":ct("warning-80"),"warning-90":ct("warning-90"),"warning-95":ct("warning-95"),"warning-100":ct("warning-100"),"error-10":ct("error-10"),"error-20":ct("error-20"),"error-30":ct("error-30"),"error-40":ct("error-40"),"error-50":ct("error-50"),"error-60":ct("error-60"),"error-70":ct("error-70"),"error-80":ct("error-80"),"error-90":ct("error-90"),"error-95":ct("error-95"),"error-100":ct("error-100"),"info-10":ct("info-10"),"info-20":ct("info-20"),"info-30":ct("info-30"),"info-40":ct("info-40"),"info-50":ct("info-50"),"info-60":ct("info-60"),"info-70":ct("info-70"),"info-80":ct("info-80"),"info-90":ct("info-90"),"info-95":ct("info-95"),"info-100":ct("info-100"),white:ct("white"),black:ct("black"),"primary-inverse":ct("primary-inverse")},gt={text:ct("neutral-20"),"text-subtle":ct("neutral-30"),"text-subtler":ct("neutral-50"),"text-subtlest":ct("neutral-60"),"text-primary":ct("primary-50"),"text-hover":ct("primary-40"),"text-selected":ct("primary-50"),"text-selected-hover":ct("primary-40"),"text-disabled":ct("neutral-50"),"text-disabled-subtle":ct("neutral-60"),"text-disabled-subtlest":ct("neutral-80"),"text-selected-disabled":ct("neutral-20"),"text-success":ct("success-40"),"text-warning":ct("warning-40"),"text-error":ct("error-40"),"text-info":ct("info-40"),"text-inverse":ct("white"),icon:ct("neutral-50"),"icon-subtle":ct("neutral-60"),"icon-strongest":ct("neutral-20"),"icon-primary":ct("primary-50"),"icon-primary-subtle":ct("primary-60"),"icon-primary-subtlest":ct("primary-70"),"icon-hover":ct("primary-40"),"icon-selected":ct("primary-50"),"icon-selected-hover":ct("primary-40"),"icon-disabled":ct("neutral-50"),"icon-disabled-subtle":ct("neutral-60"),"icon-selected-disabled":ct("neutral-60"),"icon-success":ct("success-50"),"icon-warning":ct("warning-60"),"icon-error":ct("error-50"),"icon-error-strong":ct("error-40"),"icon-info":ct("info-50"),"icon-inverse":ct("white"),"icon-primary-inverse":ct("primary-inverse"),border:ct("neutral-90"),"border-strong":ct("neutral-70"),"border-stronger":ct("neutral-50"),"border-primary":ct("primary-50"),"border-primary-subtle":ct("primary-60"),"border-hover":ct("primary-90"),"border-hover-strong":ct("primary-60"),"border-selected":ct("primary-50"),"border-selected-subtle":ct("primary-70"),"border-selected-subtlest":ct("primary-90"),"border-selected-hover":ct("primary-40"),"border-focus":ct("primary-60"),"border-focus-strong":ct("primary-50"),"border-disabled":ct("neutral-90"),"border-selected-disabled":ct("neutral-70"),"border-success":ct("success-60"),"border-warning":ct("warning-60"),"border-error":ct("error-60"),"border-error-focus":ct("error-60"),"border-error-focus-strong":ct("error-40"),"border-error-strong":ct("error-40"),"border-info":ct("info-60"),bg:ct("white"),"bg-strong":ct("neutral-100"),"bg-stronger":ct("neutral-95"),"bg-strongest":ct("neutral-90"),"bg-hover":ct("primary-95"),"bg-hover-strong":ct("primary-90"),"bg-hover-subtle":ct("primary-100"),"bg-hover-neutral":ct("neutral-100"),"bg-hover-neutral-strong":ct("neutral-90"),"bg-selected":ct("primary-95"),"bg-selected-hover":ct("primary-90"),"bg-selected-strong":ct("primary-90"),"bg-selected-stronger":ct("primary-70"),"bg-selected-strongest":ct("primary-50"),"bg-selected-strongest-hover":ct("primary-40"),"bg-disabled":ct("neutral-95"),"bg-selected-disabled":ct("neutral-95"),"bg-selected-stronger-disabled":ct("neutral-70"),"bg-success":ct("success-100"),"bg-success-hover":ct("success-95"),"bg-success-strong":ct("success-50"),"bg-success-strong-hover":ct("success-40"),"bg-warning":ct("warning-100"),"bg-warning-hover":ct("warning-95"),"bg-warning-strong":ct("warning-50"),"bg-warning-strong-hover":ct("warning-40"),"bg-info":ct("info-100"),"bg-info-hover":ct("info-95"),"bg-info-strong":ct("info-50"),"bg-info-strong-hover":ct("info-40"),"bg-error":ct("error-100"),"bg-error-hover":ct("error-95"),"bg-error-strong":ct("error-50"),"bg-error-strong-hover":ct("error-40"),"bg-inverse":ct("neutral-20"),"bg-inverse-subtle":ct("neutral-30"),"bg-inverse-subtler":ct("neutral-50"),"bg-inverse-subtlest":ct("neutral-60"),"bg-inverse-hover":ct("neutral-40"),"bg-primary":ct("primary-50"),"bg-primary-subtle":ct("primary-60"),"bg-primary-subtler":ct("primary-95"),"bg-primary-subtlest":ct("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ct("primary-40"),"bg-primary-subtlest-hover":ct("primary-90"),"bg-primary-subtlest-selected":ct("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ct("primary-50"),"hyperlink-hover":ct("primary-40"),"hyperlink-visited":ct("primary-40"),"hyperlink-inverse":ct("primary-inverse"),"focus-ring":ct("black"),"focus-ring-inverse":ct("white")},ht={collections:{lifesg:gt,bookingsg:gt,rbs:gt,mylegacy:gt,ccube:gt,oneservice:gt,pa:{text:ct("neutral-30"),"text-subtle":ct("neutral-40"),"text-subtler":ct("neutral-50"),"text-subtlest":ct("neutral-70"),"text-primary":ct("neutral-10"),"text-hover":ct("neutral-70"),"text-selected":ct("neutral-20"),"text-selected-hover":ct("neutral-10"),"text-disabled":ct("neutral-50"),"text-disabled-subtle":ct("neutral-60"),"text-disabled-subtlest":ct("neutral-80"),"text-selected-disabled":ct("neutral-40"),"text-success":ct("success-40"),"text-warning":ct("warning-40"),"text-error":ct("brand-30"),"text-info":ct("neutral-40"),"text-inverse":ct("neutral-100"),icon:ct("neutral-40"),"icon-subtle":ct("neutral-50"),"icon-strongest":ct("neutral-10"),"icon-primary":ct("neutral-10"),"icon-primary-subtle":ct("neutral-30"),"icon-primary-subtlest":ct("neutral-60"),"icon-hover":ct("neutral-70"),"icon-selected":ct("brand-20"),"icon-selected-hover":ct("brand-10"),"icon-disabled":ct("neutral-50"),"icon-disabled-subtle":ct("neutral-60"),"icon-selected-disabled":ct("neutral-40"),"icon-success":ct("success-40"),"icon-warning":ct("warning-60"),"icon-error":ct("brand-30"),"icon-error-strong":ct("brand-10"),"icon-info":ct("neutral-40"),"icon-inverse":ct("neutral-100"),"icon-primary-inverse":"#F9B371",border:ct("neutral-90"),"border-strong":ct("neutral-30"),"border-stronger":ct("neutral-20"),"border-primary":ct("neutral-40"),"border-primary-subtle":ct("neutral-60"),"border-hover":ct("neutral-80"),"border-hover-strong":ct("neutral-10"),"border-selected":ct("brand-20"),"border-selected-subtle":ct("neutral-40"),"border-selected-subtlest":ct("neutral-70"),"border-selected-hover":ct("neutral-10"),"border-focus":ct("brand-60"),"border-focus-strong":ct("brand-40"),"border-disabled":ct("neutral-90"),"border-selected-disabled":ct("neutral-80"),"border-success":ct("success-40"),"border-warning":ct("warning-60"),"border-error":ct("brand-30"),"border-error-focus":ct("brand-20"),"border-error-focus-strong":ct("brand-10"),"border-error-strong":ct("brand-20"),"border-info":ct("neutral-40"),bg:ct("neutral-100"),"bg-strong":ct("neutral-95"),"bg-stronger":ct("neutral-90"),"bg-strongest":ct("neutral-80"),"bg-hover":ct("brand-90"),"bg-hover-strong":ct("brand-80"),"bg-hover-subtle":ct("neutral-90"),"bg-hover-neutral":ct("neutral-90"),"bg-hover-neutral-strong":ct("neutral-90"),"bg-selected":ct("brand-50"),"bg-selected-hover":ct("brand-70"),"bg-selected-strong":ct("brand-90"),"bg-selected-stronger":ct("brand-40"),"bg-selected-strongest":ct("brand-20"),"bg-selected-strongest-hover":ct("brand-10"),"bg-disabled":ct("neutral-90"),"bg-selected-disabled":ct("neutral-90"),"bg-selected-stronger-disabled":ct("neutral-80"),"bg-success":ct("success-100"),"bg-success-hover":ct("success-95"),"bg-success-strong":ct("success-50"),"bg-success-strong-hover":ct("success-40"),"bg-warning":ct("warning-100"),"bg-warning-hover":ct("warning-95"),"bg-warning-strong":ct("warning-50"),"bg-warning-strong-hover":ct("warning-40"),"bg-info":ct("neutral-95"),"bg-info-hover":ct("info-95"),"bg-info-strong":ct("info-50"),"bg-info-strong-hover":ct("info-40"),"bg-error":ct("brand-100"),"bg-error-hover":ct("error-95"),"bg-error-strong":ct("error-50"),"bg-error-strong-hover":ct("error-40"),"bg-inverse":ct("neutral-40"),"bg-inverse-subtle":ct("neutral-60"),"bg-inverse-subtler":ct("neutral-70"),"bg-inverse-subtlest":ct("neutral-80"),"bg-inverse-hover":ct("neutral-30"),"bg-primary":ct("brand-20"),"bg-primary-subtle":ct("brand-60"),"bg-primary-subtler":ct("brand-80"),"bg-primary-subtlest":ct("brand-100"),"bg-available":ct("success-60"),"bg-primary-hover":ct("brand-10"),"bg-primary-subtlest-hover":ct("brand-80"),"bg-primary-subtlest-selected":ct("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:ct("neutral-10"),"hyperlink-hover":ct("neutral-40"),"hyperlink-visited":ct("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":ct("black"),"focus-ring-inverse":ct("white")}},defaultValue:"lifesg"},bt=e=>r=>{var t;const n=r.theme,i=it(ht,null==n?void 0:n.colourScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?nt(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(r):o},mt={text:bt("text"),"text-subtle":bt("text-subtle"),"text-subtler":bt("text-subtler"),"text-subtlest":bt("text-subtlest"),"text-primary":bt("text-primary"),"text-hover":bt("text-hover"),"text-selected":bt("text-selected"),"text-selected-hover":bt("text-selected-hover"),"text-disabled":bt("text-disabled"),"text-disabled-subtle":bt("text-disabled-subtle"),"text-disabled-subtlest":bt("text-disabled-subtlest"),"text-selected-disabled":bt("text-selected-disabled"),"text-success":bt("text-success"),"text-warning":bt("text-warning"),"text-error":bt("text-error"),"text-info":bt("text-info"),"text-inverse":bt("text-inverse"),icon:bt("icon"),"icon-subtle":bt("icon-subtle"),"icon-strongest":bt("icon-strongest"),"icon-primary":bt("icon-primary"),"icon-primary-subtle":bt("icon-primary-subtle"),"icon-primary-subtlest":bt("icon-primary-subtlest"),"icon-hover":bt("icon-hover"),"icon-selected":bt("icon-selected"),"icon-selected-hover":bt("icon-selected-hover"),"icon-disabled":bt("icon-disabled"),"icon-disabled-subtle":bt("icon-disabled-subtle"),"icon-selected-disabled":bt("icon-selected-disabled"),"icon-success":bt("icon-success"),"icon-warning":bt("icon-warning"),"icon-error":bt("icon-error"),"icon-error-strong":bt("icon-error-strong"),"icon-info":bt("icon-info"),"icon-inverse":bt("icon-inverse"),"icon-primary-inverse":bt("icon-primary-inverse"),border:bt("border"),"border-strong":bt("border-strong"),"border-stronger":bt("border-stronger"),"border-primary":bt("border-primary"),"border-primary-subtle":bt("border-primary-subtle"),"border-hover":bt("border-hover"),"border-hover-strong":bt("border-hover-strong"),"border-selected":bt("border-selected"),"border-selected-subtle":bt("border-selected-subtle"),"border-selected-subtlest":bt("border-selected-subtlest"),"border-selected-hover":bt("border-selected-hover"),"border-focus":bt("border-focus"),"border-focus-strong":bt("border-focus-strong"),"border-disabled":bt("border-disabled"),"border-selected-disabled":bt("border-selected-disabled"),"border-success":bt("border-success"),"border-warning":bt("border-warning"),"border-error":bt("border-error"),"border-error-focus":bt("border-error-focus"),"border-error-focus-strong":bt("border-error-focus-strong"),"border-error-strong":bt("border-error-strong"),"border-info":bt("border-info"),bg:bt("bg"),"bg-strong":bt("bg-strong"),"bg-stronger":bt("bg-stronger"),"bg-strongest":bt("bg-strongest"),"bg-hover":bt("bg-hover"),"bg-hover-strong":bt("bg-hover-strong"),"bg-hover-subtle":bt("bg-hover-subtle"),"bg-hover-neutral":bt("bg-hover-neutral"),"bg-hover-neutral-strong":bt("bg-hover-neutral-strong"),"bg-selected":bt("bg-selected"),"bg-selected-hover":bt("bg-selected-hover"),"bg-selected-strong":bt("bg-selected-strong"),"bg-selected-stronger":bt("bg-selected-stronger"),"bg-selected-strongest":bt("bg-selected-strongest"),"bg-selected-strongest-hover":bt("bg-selected-strongest-hover"),"bg-disabled":bt("bg-disabled"),"bg-selected-disabled":bt("bg-selected-disabled"),"bg-selected-stronger-disabled":bt("bg-selected-stronger-disabled"),"bg-success":bt("bg-success"),"bg-success-hover":bt("bg-success-hover"),"bg-success-strong":bt("bg-success-strong"),"bg-success-strong-hover":bt("bg-success-strong-hover"),"bg-warning":bt("bg-warning"),"bg-warning-hover":bt("bg-warning-hover"),"bg-warning-strong":bt("bg-warning-strong"),"bg-warning-strong-hover":bt("bg-warning-strong-hover"),"bg-info":bt("bg-info"),"bg-info-hover":bt("bg-info-hover"),"bg-info-strong":bt("bg-info-strong"),"bg-info-strong-hover":bt("bg-info-strong-hover"),"bg-error":bt("bg-error"),"bg-error-hover":bt("bg-error-hover"),"bg-error-strong":bt("bg-error-strong"),"bg-error-strong-hover":bt("bg-error-strong-hover"),"bg-inverse":bt("bg-inverse"),"bg-inverse-subtle":bt("bg-inverse-subtle"),"bg-inverse-subtler":bt("bg-inverse-subtler"),"bg-inverse-subtlest":bt("bg-inverse-subtlest"),"bg-inverse-hover":bt("bg-inverse-hover"),"bg-primary":bt("bg-primary"),"bg-primary-subtle":bt("bg-primary-subtle"),"bg-primary-subtler":bt("bg-primary-subtler"),"bg-primary-subtlest":bt("bg-primary-subtlest"),"bg-available":bt("bg-available"),"bg-primary-hover":bt("bg-primary-hover"),"bg-primary-subtlest-hover":bt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":bt("bg-primary-subtlest-selected"),"overlay-strong":bt("overlay-strong"),"overlay-subtle":bt("overlay-subtle"),hyperlink:bt("hyperlink"),"hyperlink-hover":bt("hyperlink-hover"),"hyperlink-visited":bt("hyperlink-visited"),"hyperlink-inverse":bt("hyperlink-inverse"),"focus-ring":bt("focus-ring"),"focus-ring-inverse":bt("focus-ring-inverse")},ft={collections:{default:{solid:e=>r=>{var t,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:st["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:mt.border(r),u=st.solid;return h`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:st["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:mt.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return h`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},yt=e=>1===e.length&&"theme"in e[0],pt=e=>(...r)=>t=>{const n=yt(r)?[]:r,i=yt(r)?r[0]:t,o=i.theme;return(0,it(ft,null==o?void 0:o.borderScheme)[e])(...n)(i)},vt={solid:pt("solid"),"dashed-default":pt("dashed-default")},xt={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},wt=e=>r=>{var t;const n=r.theme,i=it(xt,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?nt(i,e,n.overrides.breakpoint):i[e],o},Ft={"xxs-min":wt("xxs-min"),"xxs-max":wt("xxs-max"),"xs-min":wt("xs-min"),"xs-max":wt("xs-max"),"sm-min":wt("sm-min"),"sm-max":wt("sm-max"),"md-min":wt("md-min"),"md-max":wt("md-max"),"lg-min":wt("lg-min"),"lg-max":wt("lg-max"),"xl-min":wt("xl-min"),"xl-max":wt("xl-max"),"xxl-min":wt("xxl-min"),"xxs-column":wt("xxs-column"),"xs-column":wt("xs-column"),"sm-column":wt("sm-column"),"md-column":wt("md-column"),"lg-column":wt("lg-column"),"xl-column":wt("xl-column"),"xxl-column":wt("xxl-column"),"xxs-gutter":wt("xxs-gutter"),"xs-gutter":wt("xs-gutter"),"sm-gutter":wt("sm-gutter"),"md-gutter":wt("md-gutter"),"lg-gutter":wt("lg-gutter"),"xl-gutter":wt("xl-gutter"),"xxl-gutter":wt("xxl-gutter"),"xxs-margin":wt("xxs-margin"),"xs-margin":wt("xs-margin"),"sm-margin":wt("sm-margin"),"md-margin":wt("md-margin"),"lg-margin":wt("lg-margin"),"xl-margin":wt("xl-margin"),"xxl-margin":wt("xxl-margin")},$t=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Ft["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Et={MaxWidth:$t("max-width"),MinWidth:$t("min-width")},Ct={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.012rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Dt=e=>r=>{var t;const n=r.theme,i=it(Ct,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?nt(i,e,n.overrides.fontSpec):i[e]},Bt={"heading-size-xxl":Dt("heading-size-xxl"),"heading-size-xl":Dt("heading-size-xl"),"heading-size-lg":Dt("heading-size-lg"),"heading-size-md":Dt("heading-size-md"),"heading-size-sm":Dt("heading-size-sm"),"heading-size-xs":Dt("heading-size-xs"),"heading-lh-xxl":Dt("heading-lh-xxl"),"heading-lh-xl":Dt("heading-lh-xl"),"heading-lh-lg":Dt("heading-lh-lg"),"heading-lh-md":Dt("heading-lh-md"),"heading-lh-sm":Dt("heading-lh-sm"),"heading-lh-xs":Dt("heading-lh-xs"),"heading-ls-xxl":Dt("heading-ls-xxl"),"heading-ls-xl":Dt("heading-ls-xl"),"heading-ls-lg":Dt("heading-ls-lg"),"heading-ls-md":Dt("heading-ls-md"),"heading-ls-sm":Dt("heading-ls-sm"),"heading-ls-xs":Dt("heading-ls-xs"),"weight-light":Dt("weight-light"),"weight-regular":Dt("weight-regular"),"weight-semibold":Dt("weight-semibold"),"weight-bold":Dt("weight-bold"),"font-family":Dt("font-family"),"body-size-baseline":Dt("body-size-baseline"),"body-size-md":Dt("body-size-md"),"body-size-sm":Dt("body-size-sm"),"body-size-xs":Dt("body-size-xs"),"body-lh-baseline":Dt("body-lh-baseline"),"body-lh-md":Dt("body-lh-md"),"body-lh-sm":Dt("body-lh-sm"),"body-lh-xs":Dt("body-lh-xs"),"body-ls-baseline":Dt("body-ls-baseline"),"body-ls-md":Dt("body-ls-md"),"body-ls-sm":Dt("body-ls-sm"),"body-ls-xs":Dt("body-ls-xs"),"form-label-size":Dt("form-label-size"),"form-description-size":Dt("form-description-size"),"form-label-lh":Dt("form-label-lh"),"form-description-lh":Dt("form-description-lh"),"form-label-ls":Dt("form-label-ls"),"form-description-ls":Dt("form-description-ls")},Ot=(e,r,t,n,i)=>{const{disableLigatures:o}=i||{};return h`
        font-family: ${Dt("font-family")};
        font-size: ${Dt(e)};
        font-weight: ${Dt(r)};
        line-height: ${Dt(t)};
        letter-spacing: ${Dt(n)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},At=(e={})=>({"heading-xxl-light":Ot("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Ot("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Ot("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Ot("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Ot("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Ot("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Ot("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Ot("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Ot("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Ot("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Ot("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Ot("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Ot("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Ot("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Ot("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Ot("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Ot("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Ot("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Ot("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Ot("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Ot("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Ot("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Ot("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Ot("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Ot("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Ot("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Ot("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Ot("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Ot("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Ot("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Ot("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Ot("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Ot("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Ot("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Ot("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Ot("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Ot("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Ot("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Ot("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Ot("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Ot("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Ot("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),St=At({disableLigatures:!0}),_t={collections:{default:At(),bookingsg:St,pa:At({disableLigatures:!0})},defaultValue:"default"},kt=e=>r=>{var t;const n=r.theme,i=it(_t,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?nt(i,e,n.overrides.font):i[e];return"function"==typeof o?o(r):o},Mt={"heading-xxl-light":kt("heading-xxl-light"),"heading-xxl-regular":kt("heading-xxl-regular"),"heading-xxl-semibold":kt("heading-xxl-semibold"),"heading-xxl-bold":kt("heading-xxl-bold"),"heading-xl-light":kt("heading-xl-light"),"heading-xl-regular":kt("heading-xl-regular"),"heading-xl-semibold":kt("heading-xl-semibold"),"heading-xl-bold":kt("heading-xl-bold"),"heading-lg-light":kt("heading-lg-light"),"heading-lg-regular":kt("heading-lg-regular"),"heading-lg-semibold":kt("heading-lg-semibold"),"heading-lg-bold":kt("heading-lg-bold"),"heading-md-light":kt("heading-md-light"),"heading-md-regular":kt("heading-md-regular"),"heading-md-semibold":kt("heading-md-semibold"),"heading-md-bold":kt("heading-md-bold"),"heading-sm-light":kt("heading-sm-light"),"heading-sm-regular":kt("heading-sm-regular"),"heading-sm-semibold":kt("heading-sm-semibold"),"heading-sm-bold":kt("heading-sm-bold"),"heading-xs-light":kt("heading-xs-light"),"heading-xs-regular":kt("heading-xs-regular"),"heading-xs-semibold":kt("heading-xs-semibold"),"heading-xs-bold":kt("heading-xs-bold"),"body-baseline-light":kt("body-baseline-light"),"body-baseline-regular":kt("body-baseline-regular"),"body-baseline-semibold":kt("body-baseline-semibold"),"body-baseline-bold":kt("body-baseline-bold"),"body-md-light":kt("body-md-light"),"body-md-regular":kt("body-md-regular"),"body-md-semibold":kt("body-md-semibold"),"body-md-bold":kt("body-md-bold"),"body-sm-light":kt("body-sm-light"),"body-sm-regular":kt("body-sm-regular"),"body-sm-semibold":kt("body-sm-semibold"),"body-sm-bold":kt("body-sm-bold"),"body-xs-light":kt("body-xs-light"),"body-xs-regular":kt("body-xs-regular"),"body-xs-semibold":kt("body-xs-semibold"),"body-xs-bold":kt("body-xs-bold"),"form-label":kt("form-label"),"form-description":kt("form-description")},zt={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},jt=e=>r=>{var t;const n=r.theme,i=it(zt,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?nt(i,e,n.overrides.motion):i[e]},Tt={"duration-150":jt("duration-150"),"duration-250":jt("duration-250"),"duration-350":jt("duration-350"),"duration-500":jt("duration-500"),"duration-800":jt("duration-800"),"duration-1000":jt("duration-1000"),"ease-default":jt("ease-default"),"ease-standard":jt("ease-standard"),"ease-entrance":jt("ease-entrance"),"ease-exit":jt("ease-exit")},Lt={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},It=e=>r=>{var t;const n=r.theme,i=it(Lt,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${nt(i,e,n.overrides.radius)}px`:`${i[e]}px`},Yt={none:It("none"),xs:It("xs"),sm:It("sm"),md:It("md"),lg:It("lg"),full:It("full")},Pt={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Rt=e=>r=>{var t;const n=r.theme,i=it(Pt,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${nt(i,e,n.overrides.spacing)}px`:`${i[e]}px`},Wt={"spacing-0":Rt("spacing-0"),"spacing-4":Rt("spacing-4"),"spacing-8":Rt("spacing-8"),"spacing-12":Rt("spacing-12"),"spacing-16":Rt("spacing-16"),"spacing-20":Rt("spacing-20"),"spacing-24":Rt("spacing-24"),"spacing-32":Rt("spacing-32"),"spacing-40":Rt("spacing-40"),"spacing-48":Rt("spacing-48"),"spacing-64":Rt("spacing-64"),"spacing-72":Rt("spacing-72"),"layout-xs":Rt("layout-xs"),"layout-sm":Rt("layout-sm"),"layout-md":Rt("layout-md"),"layout-lg":Rt("layout-lg"),"layout-xl":Rt("layout-xl"),"layout-xxl":Rt("layout-xxl"),"layout-xxxl":Rt("layout-xxxl")},Ht=Object.assign(Object.assign({},mt),{Primitive:ut}),Nt=Object.assign(Object.assign({},Mt),{Spec:Bt}),Vt=Tt,Ut=Object.assign(Object.assign({},st),{Util:vt}),Zt=Wt,qt=Yt,Xt=Ft,Qt=Et,Jt=u.button`
    padding: ${Zt["spacing-8"]} ${Zt["spacing-16"]};
    min-width: 4rem;
    border: ${Ut["width-010"]} ${Ut.solid} transparent;
    border-radius: ${qt.sm};
    transition: all ${Vt["duration-250"]} ${Vt["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return h`
                    background-color: ${Ht.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Ht["border-error-strong"]:Ht["border-primary"]};

                    color: ${e.$buttonIsDanger?Ht["text-error"]:Ht["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Ht["bg-hover-neutral"]};
                    }
                `;case"light":return h`
                    background-color: ${Ht.bg};
                    border-color: ${Ht.border};

                    color: ${e.$buttonIsDanger?Ht["text-error"]:Ht["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Ht["bg-hover-neutral"]};
                    }
                `;case"link":return h`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Ht["text-error"]:Ht["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Ht["bg-hover-neutral"]};
                    }
                `;case"disabled":return h`
                    background-color: ${Ht["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ht["text-disabled"]};
                `;default:return h`
                    background-color: ${e.$buttonIsDanger?Ht["bg-error-strong"]:Ht["bg-primary"]};

                    ${Qt.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Ht["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Ht["bg-error-strong-hover"]:Ht["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return h`
                    height: 2.5rem;
                    ${Nt["body-md-semibold"]}

                    ${Qt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return h`
                    height: 4rem;
                    ${Nt["heading-md-semibold"]}

                    ${Qt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return h`
                    height: 3rem;
                    ${Nt["heading-xs-semibold"]}

                    ${Qt.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Gt=u(T)`
    margin-right: 0.5rem;
`,Kt=(t,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=t,d=F(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Jt,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[a&&r(Gt,{}),r("span",{children:i})]}))};Kt.displayName="Button.Default";const en=(t,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=t,d=F(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Jt,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[a&&r(Gt,{}),r("span",{children:i})]}))};en.displayName="Button.Small";const rn=(t,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=t,d=F(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Jt,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[a&&r(Gt,{}),r("span",{children:i})]}))};rn.displayName="Button.Large";const tn={Default:o.forwardRef(Kt),Small:o.forwardRef(en),Large:o.forwardRef(rn)},nn=u(Jt)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,on=(t,n)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:d="left",loading:c=!1}=t,u=F(t,["children","disabled","styleType","danger","icon","iconPosition","loading"]),g={$buttonIconPosition:d,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(nn,Object.assign({ref:n,"data-testid":u["data-testid"]||"button-with-icon",disabled:o},g,u,{children:[c?r(T,{}):l,r("span",{children:i})]}))};on.displayName="ButtonWithIcon.Default";const an=(t,n)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:d="left",loading:c=!1}=t,u=F(t,["children","disabled","styleType","danger","icon","iconPosition","loading"]),g={$buttonIconPosition:d,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(nn,Object.assign({ref:n,"data-testid":u["data-testid"]||"button-with-icon",disabled:o},g,u,{children:[c?r(T,{}):l,r("span",{children:i})]}))};an.displayName="ButtonWithIcon.Small";const sn={Default:o.forwardRef(on),Small:o.forwardRef(an)},ln=({className:e,progress:t,color:n,"data-testid":i})=>r(dn,{className:e,$innerWidth:t,$color:n,"data-testid":i,children:r("progress",{value:100*t,max:100})}),dn=u.div`
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

    ${e=>{const{$color:r}=e;let t;return t=r&&"string"==typeof r?r:r?r(e):Ht["icon-primary-subtle"](e),h`
            border: ${Ut["width-010"]} ${Ut.solid} ${t};
            border-radius: ${qt.sm};

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
`,cn=(e,r,t=!1)=>h`
        ${Nt[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,un=e=>{if(e)return h`
            ${r=e,h`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},gn=(e,r)=>h`
    ${cn(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,t)=>r?h`
            display: block;
            ${un(t)}
        `:e?h`
            display: inline;
        `:h`
            display: block;
            ${un(t)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${Ht.text};
`;var hn;!function(t){const n=(e,r,t)=>{const n=u(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>gn(r,e)}
        `;return n.displayName=`Typography.${t}`,n};t.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),t.HeadingXL=n("h2","heading-xl","HeadingXL"),t.HeadingLG=n("h3","heading-lg","HeadingLG"),t.HeadingMD=n("h4","heading-md","HeadingMD"),t.HeadingSM=n("h5","heading-sm","HeadingSM"),t.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,r)=>{const t=u.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>gn(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const o=(t,n)=>{const i=u.a`
            ${e=>h`
                ${cn(t,e.weight||"regular")}
                color: ${Ht.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Ht["text-hover"]};
                }
            `}
        `,o=t=>{var{external:n=!1,children:o}=t,a=F(t,["external","children"]);return e(i,Object.assign({},a,{children:[o,n&&r(bn,{})]}))};return o.displayName=`Typography.${n}`,o};t.LinkBL=o("body-baseline","LinkBL"),t.LinkMD=o("body-md","LinkMD"),t.LinkSM=o("body-sm","LinkSM"),t.LinkXS=o("body-xs","LinkXS")}(hn||(hn={}));const bn=u(m)`
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
                    background-color: ${Ht.bg};
                    border: ${Ut["width-010"]} ${Ut.solid}
                        ${Ht["border-primary"]};
                    color: ${Ht["text-primary"]};

                    :hover {
                        background-color: ${Ht["bg-hover-neutral"]};
                    }
                `;case"light":return h`
                    background-color: ${Ht.bg};
                    border: ${Ut["width-010"]} ${Ut.solid}
                        ${Ht.border};
                    color: ${Ht["text-primary"]};

                    :hover {
                        background-color: ${Ht["bg-hover-neutral"]};
                    }
                `;default:return h`
                    background-color: ${Ht["bg-primary"]};
                    border: none;
                    color: ${Ht["text-inverse"]};

                    :hover {
                        background-color: ${Ht["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${Ht["bg-disabled"]};
        border: ${Ut["width-010"]} ${Ut.solid}
            ${Ht["border-disabled"]};
        color: ${Ht["text-disabled"]};
        cursor: not-allowed;
    }
`,fn=o.forwardRef(((e,t)=>{var{"data-testid":n,styleType:i="primary",children:o,sizeType:a="default",type:s="button"}=e,l=F(e,["data-testid","styleType","children","sizeType","type"]);return r(mn,Object.assign({"data-testid":n||"iconButton",ref:t,type:s,$sizeType:a,$styleType:i},l,{children:o}))}));var yn={exports:{}};yn.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",h="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,a=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:a,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var w="$isDayjsObject",F=function(e){return e instanceof D||!(!e||!e[w])},$=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),t&&(x[o]=t,i=o);var a=r.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,i=s}return!n&&i&&(v=i),i||!n&&v},E=function(e,r){if(F(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new D(t)},C=p;C.l=$,C.i=F,C.w=function(e,r){return E(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function f(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(C.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(b);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return C},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,r){var t=E(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return E(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<E(e)},y.$g=function(e,r,t){return C.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!C.u(r)||r,c=C.p(e),h=function(e,r){var i=C.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(s)},b=function(e,r){return C.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,f=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?h(1,0):h(31,11);case d:return n?h(1,f):h(0,f+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return h(n?y-x:y+(6-x),f);case s:case g:return b(p+"Hours",0);case a:return b(p+"Minutes",1);case o:return b(p+"Seconds",2);case i:return b(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=C.p(e),c="set"+(this.$u?"UTC":""),h=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[a]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],b=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[h](b),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](b);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[C.p(e)]()},y.add=function(n,c){var g,h=this;n=Number(n);var b=C.p(c),m=function(e){var r=E(h);return C.w(r.date(r.date()+Math.round(e*n)),h)};if(b===d)return this.set(d,this.$M+n);if(b===u)return this.set(u,this.$y+n);if(b===s)return m(1);if(b===l)return m(7);var f=(g={},g[o]=r,g[a]=t,g[i]=e,g)[b]||1,y=this.$d.getTime()+n*f;return C.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=C.z(this),o=this.$H,a=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},g=function(e){return C.s(o%12||12,e,"0")},b=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return C.s(r.$y,4,"0");case"M":return s+1;case"MM":return C.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return C.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return C.s(o,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return b(o,a,!0);case"A":return b(o,a,!1);case"m":return String(a);case"mm":return C.s(a,2,"0");case"s":return String(r.$s);case"ss":return C.s(r.$s,2,"0");case"SSS":return C.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,g,h){var b,m=this,f=C.p(g),y=E(n),p=(y.utcOffset()-this.utcOffset())*r,v=this-y,x=function(){return C.m(m,y)};switch(f){case u:b=x()/12;break;case d:b=x();break;case c:b=x()/3;break;case l:b=(v-p)/6048e5;break;case s:b=(v-p)/864e5;break;case a:b=v/t;break;case o:b=v/r;break;case i:b=v/e;break;default:b=v}return h?b:C.a(b)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return C.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),B=D.prototype;return E.prototype=B,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),E.extend=function(e,r){return e.$i||(e(r,D,E),e.$i=!0),E},E.locale=$,E.isDayjs=F,E.unix=function(e){return E(1e3*e)},E.en=x[v],E.Ls=x,E.p={},E}();var pn=C(yn.exports),vn={exports:{}};vn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,i;n=t,i=o&&o.formats;for(var a=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],g=c&&c[0],h=c&&c[1];a[l]=h?{regex:g,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var i=a[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,h=new Date,b=a||(i||o?1:h.getDate()),m=i||h.getFullYear(),f=0;i&&!o||(f=o>0?o-1:h.getMonth());var y=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,f,b,y,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,f,b,y,p,v,x)):new Date(m,f,b,y,p,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var h=s.length,b=1;b<=h;b+=1){a[1]=s[b-1];var m=t.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}b===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var xn=C(vn.exports),wn={exports:{}};wn.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),a=t(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var Fn=C(wn.exports),$n={exports:{}};$n.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var En=C($n.exports),Cn={exports:{}};Cn.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Dn,Bn,On,An=C(Cn.exports),Sn={exports:{}},_n=C(Sn.exports=(Dn={year:0,month:1,day:2,hour:3,minute:4,second:5},Bn={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=Bn[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Bn[n]=i),i}(r,t);return i.formatToParts(n)},o=function(e,r){for(var n=i(e,r),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=Dn[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],g=24===u?0:u,h=o[0]+"-"+o[1]+"-"+o[2]+" "+g+":"+o[4]+":"+o[5]+":000",b=+e;return(t.utc(h).valueOf()-(b-=b%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=t(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var a=i&&r,s=i||r||n,l=o(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,i=o(n,t);if(r===i)return[n,r];var a=o(n-=60*(i-r)*1e3,t);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(t.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));pn.extend(Fn),pn.extend(An),pn.extend(En),pn.extend(xn),pn.extend(_n),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=pn(r).startOf("week");return kn(t).map((e=>Mn(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Mn(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(pn(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+pn(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=pn(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?pn(n):void 0,i?pn(i):void 0),a=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!a}}(On||(On={}));const kn=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Mn=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},zn=[1,3,5,7,8,10,12],jn=[4,6,9,11];var Tn,Ln,In,Yn;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),a=parseInt(n);return 0==i?"1":zn.includes(o)?Math.min(i,31).toString():jn.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=pn(e,t);return pn(r,t).diff(n,"minute")},e.toDayjs=e=>e?pn(e):pn(),e.addMinutesToTime=(e,r,t="HH:mm")=>pn(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>pn(e).isSame(pn(r),t)}(Tn||(Tn={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!pn(e).isBefore(n,"day"))||!(!i||!pn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(pn(e).isValid())return e}return""}}(Ln||(Ln={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(In||(In={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const a=n+o;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=t;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(Yn||(Yn={}));const Pn=u.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return h`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Rn=u.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Ht["overlay-subtle"]:Ht["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let r="";return e&&(r+="blur(10px)"),r.length>0?r:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let r="";return e.$show?r+=h`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:r+=h`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(r+=h`
                transition: none;
            `),r}}
`;var Wn;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Wn||(Wn={}));const Hn=({show:e=!1,rootId:t,onOverlayClick:n,children:i,backgroundOpacity:d,backgroundBlur:c=!0,disableTransition:u=!1,enableOverlayClick:g=!1,zIndex:h,id:b})=>{const[m,y]=s(null),[w,F]=s(),[$]=s((()=>In.generate())),E=p(),C=l(),D=l(null),B=i&&o.cloneElement(i,{ref:D}),O=b?`lifesg-ds-overlay-root-${b}`:"lifesg-ds-overlay-root",A=null!=h?h:w?99999:99998;(e=>{const r=f();a((()=>{if(!r)return;const t={zIndex:e};r.events.emit(Wn.Change,t)}),[r,e]),a((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(Wn.Change,t)};return null==r||r.events.on(Wn.Ready,t),()=>null==r?void 0:r.events.off(Wn.Ready,t)}),[r,e])})(A),a((()=>(M(),y(_()),()=>{L(),j().length<1&&z("remove")})),[]),a((()=>{if(e){const e=k();S(e),T();const r=setTimeout((()=>{z("add")}),200);return()=>clearTimeout(r)}{L();const e=setTimeout((()=>{j().length<1&&z("remove")}),200);return()=>clearTimeout(e)}}),[e]);const S=e=>{C.current=e,F(e)},_=()=>document&&t?document.getElementById(t):document?document.body:null,k=()=>j().length>0,M=()=>{if(!document.getElementById(Vn)){const e=document.createElement("style");e.id=Vn;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${Un} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Un}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},z=e=>{const r=document.body.classList.contains(Un);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(Un):document.body.classList.add(Un)},j=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},T=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=[...e,$].join(",")},L=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==$)).join(",")},I=e=>{var r;const t=null===(r=D.current)||void 0===r?void 0:r.firstChild;t&&t.contains(e.target)||n&&g&&(e.preventDefault(),n())};return m?x.createPortal(r(Pn,{id:O,"data-testid":O,$show:e,$zIndex:A,children:i&&r(v,{id:E,children:r(Rn,{"data-testid":"overlay-wrapper",$show:e,$stacked:w,$backgroundBlur:c,$disableTransition:u,onClick:I,children:B})})}),m):null},Nn=e=>r(y,{children:r(Hn,Object.assign({},e))}),Vn="lifesg-ds-overlay-stylesheet",Un="lifesg-ds-overlay-open",Zn=u.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return r=e.show,t=e.animationFrom||"bottom",r?`\n\t\t\t${t}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${t}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var r,t}}

    ${Qt.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,qn=u.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Zt["spacing-24"]};
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
                background-color: ${Ht["bg-hover-neutral"]};
            `}
    }
`,Xn=o.forwardRef(((e,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=F(e,["children","focusHighlight","focusOutline","type"]);return r(qn,Object.assign({ref:t,$outline:o,$highlight:i,type:a},s,{children:n}))})),Qn=u.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Ht.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Qt.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Jn=u(Xn)`
    position: absolute;
    top: var(--close-button-top-inset, ${Zt["spacing-16"]});
    right: var(--close-button-right-inset, ${Zt["spacing-16"]});
    padding: 0;
    color: ${Ht.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Qt.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Zt["spacing-20"]});
    }
`,Gn=Object.assign((e=>{var{id:t="modal",show:n,animationFrom:i="bottom",children:o,enableOverlayClick:l=!0,rootComponentId:d,zIndex:c,onOverlayClick:u,dismissKeyboardOnShow:g=!0}=e,h=F(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[b,m]=s(),[f,y]=s();a((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",v)}):(p(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)})),[]),a((()=>{var e,r;n&&g&&(null===(r=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===r||r.call(e))}),[n]);const p=()=>{const e=.01*window.innerHeight;m(e)},v=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;m(e),y(window.visualViewport.offsetTop)}};return r(Nn,{"data-testid":`${t}-overlay`,show:n,enableOverlayClick:l,onOverlayClick:u,id:t,rootId:d,zIndex:c,children:r(Zn,Object.assign({show:n,animationFrom:i,"data-testid":t,verticalHeight:b,offsetTop:f},h,{children:o}))})}),{Box:t=>{var{id:n="modal-box",children:i,onClose:o,showCloseButton:a=!0}=t,s=F(t,["id","children","onClose","showCloseButton"]);return e(Qn,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&r(Jn,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:r(w,{})}),i]}))}}),Kn=h`
    ${e=>`\n        ${Qt.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${Xt["sm-max"](e)}px)\n    `}
`,ei=h`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${Xt["sm-max"](e)}px)\n    `}
`,ri=u.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>h`
            ${Ut.Util["dashed-default"]({radius:qt.sm,thickness:Ut["width-040"],colour:e.$disabled?Ht["border-disabled"]:Ht.border})}

            background-color: ${e.$disabled?Ht["bg-disabled"]:Ht.bg};
        `}
    height: 14.125rem;
`,ti=u(tn.Default)`
    width: fit-content;
    margin: 0 ${Zt["spacing-20"]};

    :disabled {
        border-color: ${Ht["border-strong"]};
    }
`,ni=u(fn)`
    position: absolute;
    top: ${Zt["spacing-16"]};
    right: ${Zt["spacing-16"]};

    :disabled {
        border-color: ${Ht["border-strong"]};
    }
`,ii=u.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${Zt["spacing-16"]}) * 2);
    height: 100%;
`,oi=u.div`
    background: ${Ht["bg-primary-subtlest"]};
    border: ${Ut["width-010"]} ${Ut.solid} ${Ht.border};
    border-radius: ${qt.sm};
    margin: 0 ${Zt["spacing-20"]};
    padding: ${Zt["spacing-16"]};
    display: flex;
    gap: ${Zt["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,ai=u(hn.BodySM)`
    margin-top: ${Zt["spacing-16"]};
`,si=u(Gn)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,li=u.div`
    width: 100%;
    margin: auto;
    padding: ${Zt["layout-xxl"]} ${Zt["layout-sm"]};

    ${Kn} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,di=u(Gn.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${Zt["spacing-16"]};

    ${Kn} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${Zt["spacing-8"]};
        --close-button-right-inset: ${Zt["spacing-20"]};
    }
`,ci=u.h2`
    ${Nt["body-baseline-semibold"]}
    color: ${Ht.text};
    margin-bottom: ${Zt["spacing-16"]};
    text-align: center;

    ${Kn} {
        ${Nt["body-md-semibold"]}
        margin: ${Zt["spacing-12"]} 0;
    }
`,ui=u.div`
    width: 100%;
    height: 20rem;
    border-radius: ${qt.lg};
    overflow: hidden;

    ${Kn} {
        border-radius: 0;
        flex: 1;
    }

    ${ei} {
        background: ${Ht["bg-strong"]};
    }
`,gi=u.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${Ht["bg-stronger"]};
    margin: auto;

    ${Kn} {
        aspect-ratio: 4/3;
    }
    ${Qt.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${ei} {
        width: auto;
        height: 100%;
    }
`,hi=u.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${Ht["border-strong"]};
    pointer-events: none;

    ${Kn} {
        width: calc(100% - ${Zt["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,bi=u.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${Zt["spacing-16"]};

    ${Qt.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${Zt["spacing-16"]} ${Zt["spacing-24"]}
            ${Zt["spacing-48"]};
        gap: ${Zt["spacing-16"]};
    }

    ${ei} {
        flex-direction: row;
        margin: ${Zt["spacing-16"]} ${Zt["spacing-20"]};
    }
`,mi=u(tn.Default)`
    width: 8.5rem;
    ${Qt.MaxWidth.sm} {
        width: 100%;
    }
    ${ei} {
        height: 2.5rem;
    }
`,fi=u.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,yi=u.canvas`
    cursor: crosshair;
`,pi=d((()=>$(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.cedfad1c.js")).ESignatureCanvas}})))),vi=o=>{const{description:d,id:u,loadingProgress:g,loadingLabel:h="Uploading...",onChange:m,value:f,disabled:y}=o,p=F(o,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[v,x]=s(!1),w=l(null),[$,E]=s(f),C=b(),D=Xt["sm-max"]({theme:C}),B=A.useMediaQuery({maxWidth:D}),O=A.useMediaQuery({maxHeight:D,orientation:"landscape"}),S=()=>{var e;null===(e=w.current)||void 0===e||e.clear()},_=()=>{if(w.current){const e=w.current.export();E(e),x(!1),null==m||m(e)}};a((()=>{E(f)}),[f]);return e("div",Object.assign({},p,{children:[r(ri,{$disabled:y,children:"number"==typeof g?e(oi,{children:[h&&r(hn.BodyMD,{children:h}),r(ln,{progress:null!=g?g:0,"data-testid":`${u||"e-signature"}-progress-bar`})]}):$?e(t,{children:[r(ii,{src:$,alt:"Signature preview"}),r(ni,{styleType:"light",onClick:()=>x(!0),id:u,"aria-label":"Edit signature",disabled:y,children:r(n,{})})]}):r(ti,{type:"button",styleType:"secondary","aria-label":"Add signature",id:u,onClick:()=>x(!0),disabled:y,children:"Add signature"})}),r(si,{"data-testid":"signature-modal",show:v,children:r(li,{children:e(di,{onClose:()=>x(!1),children:[r(ci,{children:"Signature"}),r(ui,{children:e(gi,{children:[r(hi,{}),r(c,{fallback:null,children:v&&r(pi,{ref:w,baseImageDataURL:$})})]})}),e(bi,{children:[r(mi,{as:O?sn.Small:sn.Default,type:"button",styleType:B&&!O?"light":"link",icon:r(i,{}),onClick:S,children:"Clear"}),r(mi,{as:O?tn.Small:tn.Default,type:"button",onClick:_,children:"Save"})]})]})})}),d?r(ai,{children:d}):null]}))};export{Ht as C,vi as E,fi as S,$ as _,yi as a,D as g};
//# sourceMappingURL=index.d8dc8214.js.map
