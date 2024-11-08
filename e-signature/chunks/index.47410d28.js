import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import{PencilIcon as n,EraserIcon as i}from"@lifesg/react-icons";import o,{useEffect as a,useState as s,useRef as l,lazy as d,Suspense as c}from"react";import u,{keyframes as h,css as g}from"styled-components";import{ExternalIcon as f}from"@lifesg/react-icons/external";import{useFloatingTree as m,FloatingTree as b,useFloatingNodeId as y,FloatingNode as p}from"@floating-ui/react";import F from"react-dom";import{CrossIcon as v}from"@lifesg/react-icons/cross";function x(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}function w(e,r,t,n){return new(t||(t=Promise))((function(i,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var r;e.done?i(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,s)}l((n=n.apply(e,r||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var D="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function S(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function B(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var E,$={exports:{}};E=e=>(()=>{var r={"./node_modules/css-mediaquery/index.js":
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
	  \***************************************************/(e,r,t)=>{var n,i=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,r,t,s,l){for(var d in e)if(a(e,d)){var c;try{if("function"!=typeof e[d]){var u=Error((s||"React class")+": "+t+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}c=e[d](r,d,s,t,null,i)}catch(e){c=e}if(!c||c instanceof Error||n((s||"React class")+": type specification of "+t+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in o)){o[c.message]=!0;var h=l?l():"";n("Failed "+t+" type: "+c.message+(null!=h?h:""))}}}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,r,t)=>{var n,i=t(/*! react-is */"./node_modules/react-is/index.js"),o=t(/*! object-assign */"./node_modules/object-assign/index.js"),a=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=t(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},e.exports=function(e,r){var t="function"==typeof Symbol&&Symbol.iterator,c="@@iterator",u="<<anonymous>>",h={array:b("array"),bigint:b("bigint"),bool:b("boolean"),func:b("function"),number:b("number"),object:b("object"),string:b("string"),symbol:b("symbol"),any:m(d),arrayOf:function(e){return m((function(r,t,n,i,o){if("function"!=typeof e)return new f("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=r[t];if(!Array.isArray(s))return new f("Invalid "+i+" `"+o+"` of type `"+F(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var d=e(s,l,n,i,o+"["+l+"]",a);if(d instanceof Error)return d}return null}))},element:m((function(r,t,n,i,o){var a=r[t];return e(a)?null:new f("Invalid "+i+" `"+o+"` of type `"+F(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:m((function(e,r,t,n,o){var a=e[r];return i.isValidElementType(a)?null:new f("Invalid "+n+" `"+o+"` of type `"+F(a)+"` supplied to `"+t+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(r,t,n,i,o){if(!(r[t]instanceof e)){var a=e.name||u;return new f("Invalid "+i+" `"+o+"` of type `"+((s=r[t]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,r,t,n,i){return p(e[r])?null:new f("Invalid "+n+" `"+i+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(r,t,n,i,o){if("function"!=typeof e)return new f("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=r[t],d=F(l);if("object"!==d)return new f("Invalid "+i+" `"+o+"` of type `"+d+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(s(l,c)){var u=e(l,c,n,i,o+"."+c,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(r,t,n,i,o){for(var a=r[t],s=0;s<e.length;s++)if(g(a,e[s]))return null;var l=JSON.stringify(e,(function(e,r){return"symbol"===v(r)?String(r):r}));return new f("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(t)+" at index "+r+"."),d}return m((function(r,t,n,i,o){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(r,t,n,i,o,a);if(null==c)return null;c.data&&s(c.data,"expectedType")&&l.push(c.data.expectedType)}return new f("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(r,t,n,i,o){var s=r[t],l=F(s);if("object"!==l)return new f("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return y(n,i,o,d,v(c));var u=c(s,d,n,i,o+"."+d,a);if(u)return u}return null}))},exact:function(e){return m((function(r,t,n,i,l){var d=r[t],c=F(d);if("object"!==c)return new f("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=o({},r[t],e);for(var h in u){var g=e[h];if(s(e,h)&&"function"!=typeof g)return y(n,i,l,h,v(g));if(!g)return new f("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=g(d,h,n,i,l+"."+h,a);if(m)return m}return null}))}};function g(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function f(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function m(e){var t={},i=0;function o(o,s,l,d,c,h,g){if(d=d||u,h=h||l,g!==a){if(r){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var b=d+":"+l;!t[b]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[b]=!0,i++)}}return null==s[l]?o?null===s[l]?new f("The "+c+" `"+h+"` is marked as required in `"+d+"`, but its value is `null`."):new f("The "+c+" `"+h+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(s,l,d,c,h)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function b(e){return m((function(r,t,n,i,o,a){var s=r[t];return F(s)!==e?new f("Invalid "+i+" `"+o+"` of type `"+v(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,r,t,n,i){return new f((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function p(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(p);if(null===r||e(r))return!0;var n=function(e){var r=e&&(t&&e[t]||e[c]);if("function"==typeof r)return r}(r);if(!n)return!1;var i,o=n.call(r);if(n!==r.entries){for(;!(i=o.next()).done;)if(!p(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!p(a[1]))return!1}return!0;default:return!1}}function F(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function v(e){if(null==e)return""+e;var r=F(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function x(e){var r=v(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return f.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,r)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,g=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,b=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,p=e?Symbol.for("react.responder"):60118,F=e?Symbol.for("react.scope"):60119;function v(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var g=e.type;switch(g){case d:case c:case i:case a:case o:case h:return g;default:var b=g&&g.$$typeof;switch(b){case l:case u:case m:case f:case s:return b;default:return r}}case n:return r}}}var x=d,w=c,D=l,S=s,B=t,E=u,$=i,C=m,O=f,A=n,k=a,z=o,j=h,_=!1;function H(e){return v(e)===c}r.AsyncMode=x,r.ConcurrentMode=w,r.ContextConsumer=D,r.ContextProvider=S,r.Element=B,r.ForwardRef=E,r.Fragment=$,r.Lazy=C,r.Memo=O,r.Portal=A,r.Profiler=k,r.StrictMode=z,r.Suspense=j,r.isAsyncMode=function(e){return _||(_=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),H(e)||v(e)===d},r.isConcurrentMode=H,r.isContextConsumer=function(e){return v(e)===l},r.isContextProvider=function(e){return v(e)===s},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return v(e)===u},r.isFragment=function(e){return v(e)===i},r.isLazy=function(e){return v(e)===m},r.isMemo=function(e){return v(e)===f},r.isPortal=function(e){return v(e)===n},r.isProfiler=function(e){return v(e)===a},r.isStrictMode=function(e){return v(e)===o},r.isSuspense=function(e){return v(e)===h},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===a||e===o||e===h||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===f||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===y||e.$$typeof===p||e.$$typeof===F||e.$$typeof===b)},r.typeOf=v}()},"./node_modules/react-is/index.js":
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
	  \***************************/function(e,r,t){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},n.apply(this,arguments)},i=this&&this.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var a=o(t(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},d={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},c=i(d,["type"]),u=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},c),h=n(n({},l),u);r.default={all:h,types:l,matchers:d,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=n(t(/*! ./mediaQuery */"./src/mediaQuery.ts"));r.default=function(e){var r=[];return Object.keys(o.default.all).forEach((function(t){var n=e[t];null!=n&&r.push(function(e,r){var t=(0,i.default)(e);return"number"==typeof r&&(r="".concat(r,"px")),!0===r?t:!1===r?"not ".concat(t):"(".concat(t,": ").concat(r,")")}(t,n))})),r.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=t(/*! react */"react"),o=n(t(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=t(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(t(/*! ./toQuery */"./src/toQuery.ts")),d=n(t(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(r,t){return r[(0,a.default)(t)]=e[t],r}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var r=function(){return function(e){return e.query||(0,l.default)(e)}(e)},t=(0,i.useState)(r),n=t[0],o=t[1];return(0,i.useEffect)((function(){var e=r();n!==e&&o(e)}),[e]),n};r.default=function(e,r,t){var n=function(e){var r=(0,i.useContext)(d.default),t=function(){return c(e)||c(r)},n=(0,i.useState)(t),o=n[0],a=n[1];return(0,i.useEffect)((function(){var e=t();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,r]),o}(r),a=h(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,r){var t=function(){return(0,o.default)(e,r||{},!!r)},n=(0,i.useState)(t),a=n[0],s=n[1],l=u();return(0,i.useEffect)((function(){if(l){var e=t();return s(e),function(){e&&e.dispose()}}}),[e,r]),a}(a,n),g=function(e){var r=(0,i.useState)(e.matches),t=r[0],n=r[1];return(0,i.useEffect)((function(){var r=function(e){n(e.matches)};return e.addListener(r),n(e.matches),function(){e.removeListener(r)}}),[e]),t}(l),f=u();return(0,i.useEffect)((function(){f&&t&&t(g)}),[g]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),g}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/r=>{r.exports=e}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={exports:{}};return r[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var C=$.exports=E(o);const O=u.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,A=h`
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
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${A} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,z=u(k)`
    animation-delay: -0.45s;
`,j=u(k)`
    animation-delay: -0.3s;
`,_=u(k)`
    animation-delay: -0.15s;
`;var H=Array.isArray,M="object"==typeof D&&D&&D.Object===Object&&D,T="object"==typeof self&&self&&self.Object===Object&&self,I=M||T||Function("return this")(),P=I.Symbol,W=P,L=Object.prototype,R=L.hasOwnProperty,Y=L.toString,N=W?W.toStringTag:void 0;var V=function(e){var r=R.call(e,N),t=e[N];try{e[N]=void 0;var n=!0}catch(e){}var i=Y.call(e);return n&&(r?e[N]=t:delete e[N]),i},J=Object.prototype.toString;var U=V,Z=function(e){return J.call(e)},q=P?P.toStringTag:void 0;var X=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":q&&q in Object(e)?U(e):Z(e)};var Q=X,G=function(e){return null!=e&&"object"==typeof e};var K=function(e){return"symbol"==typeof e||G(e)&&"[object Symbol]"==Q(e)},ee=H,re=K,te=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ne=/^\w*$/;var ie=function(e,r){if(ee(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!re(e))||(ne.test(e)||!te.test(e)||null!=r&&e in Object(r))};var oe=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ae=X,se=oe;var le,de=function(e){if(!se(e))return!1;var r=ae(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},ce=I["__core-js_shared__"],ue=(le=/[^.]+$/.exec(ce&&ce.keys&&ce.keys.IE_PROTO||""))?"Symbol(src)_1."+le:"";var he=function(e){return!!ue&&ue in e},ge=Function.prototype.toString;var fe=de,me=he,be=oe,ye=function(e){if(null!=e){try{return ge.call(e)}catch(e){}try{return e+""}catch(e){}}return""},pe=/^\[object .+?Constructor\]$/,Fe=Function.prototype,ve=Object.prototype,xe=Fe.toString,we=ve.hasOwnProperty,De=RegExp("^"+xe.call(we).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Se=function(e){return!(!be(e)||me(e))&&(fe(e)?De:pe).test(ye(e))},Be=function(e,r){return null==e?void 0:e[r]};var Ee=function(e,r){var t=Be(e,r);return Se(t)?t:void 0},$e=Ee(Object,"create"),Ce=$e;var Oe=function(){this.__data__=Ce?Ce(null):{},this.size=0};var Ae=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},ke=$e,ze=Object.prototype.hasOwnProperty;var je=function(e){var r=this.__data__;if(ke){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return ze.call(r,e)?r[e]:void 0},_e=$e,He=Object.prototype.hasOwnProperty;var Me=$e;var Te=Oe,Ie=Ae,Pe=je,We=function(e){var r=this.__data__;return _e?void 0!==r[e]:He.call(r,e)},Le=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Me&&void 0===r?"__lodash_hash_undefined__":r,this};function Re(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Re.prototype.clear=Te,Re.prototype.delete=Ie,Re.prototype.get=Pe,Re.prototype.has=We,Re.prototype.set=Le;var Ye=Re;var Ne=function(){this.__data__=[],this.size=0};var Ve=function(e,r){return e===r||e!=e&&r!=r};var Je=function(e,r){for(var t=e.length;t--;)if(Ve(e[t][0],r))return t;return-1},Ue=Je,Ze=Array.prototype.splice;var qe=Je;var Xe=Je;var Qe=Je;var Ge=Ne,Ke=function(e){var r=this.__data__,t=Ue(r,e);return!(t<0)&&(t==r.length-1?r.pop():Ze.call(r,t,1),--this.size,!0)},er=function(e){var r=this.__data__,t=qe(r,e);return t<0?void 0:r[t][1]},rr=function(e){return Xe(this.__data__,e)>-1},tr=function(e,r){var t=this.__data__,n=Qe(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this};function nr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}nr.prototype.clear=Ge,nr.prototype.delete=Ke,nr.prototype.get=er,nr.prototype.has=rr,nr.prototype.set=tr;var ir=nr,or=Ee(I,"Map"),ar=Ye,sr=ir,lr=or;var dr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var cr=function(e,r){var t=e.__data__;return dr(r)?t["string"==typeof r?"string":"hash"]:t.map},ur=cr;var hr=cr;var gr=cr;var fr=cr;var mr=function(){this.size=0,this.__data__={hash:new ar,map:new(lr||sr),string:new ar}},br=function(e){var r=ur(this,e).delete(e);return this.size-=r?1:0,r},yr=function(e){return hr(this,e).get(e)},pr=function(e){return gr(this,e).has(e)},Fr=function(e,r){var t=fr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this};function vr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}vr.prototype.clear=mr,vr.prototype.delete=br,vr.prototype.get=yr,vr.prototype.has=pr,vr.prototype.set=Fr;var xr=vr;function wr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return t.cache=o.set(i,a)||o,a};return t.cache=new(wr.Cache||xr),t}wr.Cache=xr;var Dr=wr;var Sr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Br=/\\(\\)?/g,Er=function(e){var r=Dr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r}((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Sr,(function(e,t,n,i){r.push(n?i.replace(Br,"$1"):t||e)})),r}));var $r=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},Cr=H,Or=K,Ar=P?P.prototype:void 0,kr=Ar?Ar.toString:void 0;var zr=function e(r){if("string"==typeof r)return r;if(Cr(r))return $r(r,e)+"";if(Or(r))return kr?kr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},jr=zr;var _r=H,Hr=ie,Mr=Er,Tr=function(e){return null==e?"":jr(e)};var Ir=K;var Pr=function(e,r){return _r(e)?e:Hr(e,r)?[e]:Mr(Tr(e))},Wr=function(e){if("string"==typeof e||Ir(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var Lr=function(e,r){for(var t=0,n=(r=Pr(r,e)).length;null!=e&&t<n;)e=e[Wr(r[t++])];return t&&t==n?e:void 0};var Rr=S((function(e,r,t){var n=null==e?void 0:Lr(e,r);return void 0===n?t:n}));const Yr=(e,r,t)=>Rr(t,r)||Rr(e,r),Nr=(e,r)=>{const t=r||e.defaultValue;return Rr(e.collections,t)},Vr={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"}},defaultValue:"lifesg"},Jr=e=>r=>{const t=r.theme,n=Nr(Vr,t.colourScheme);return t.overrides&&t.overrides.primitiveColour?Yr(n,e,t.overrides.primitiveColour):n[e]},Ur={"primary-10":Jr("primary-10"),"primary-20":Jr("primary-20"),"primary-30":Jr("primary-30"),"primary-40":Jr("primary-40"),"primary-50":Jr("primary-50"),"primary-60":Jr("primary-60"),"primary-70":Jr("primary-70"),"primary-80":Jr("primary-80"),"primary-90":Jr("primary-90"),"primary-95":Jr("primary-95"),"primary-100":Jr("primary-100"),"secondary-10":Jr("secondary-10"),"secondary-20":Jr("secondary-20"),"secondary-30":Jr("secondary-30"),"secondary-40":Jr("secondary-40"),"secondary-50":Jr("secondary-50"),"secondary-60":Jr("secondary-60"),"secondary-70":Jr("secondary-70"),"secondary-80":Jr("secondary-80"),"secondary-90":Jr("secondary-90"),"secondary-95":Jr("secondary-95"),"secondary-100":Jr("secondary-100"),"neutral-10":Jr("neutral-10"),"neutral-20":Jr("neutral-20"),"neutral-30":Jr("neutral-30"),"neutral-40":Jr("neutral-40"),"neutral-50":Jr("neutral-50"),"neutral-60":Jr("neutral-60"),"neutral-70":Jr("neutral-70"),"neutral-80":Jr("neutral-80"),"neutral-90":Jr("neutral-90"),"neutral-95":Jr("neutral-95"),"neutral-100":Jr("neutral-100"),"success-10":Jr("success-10"),"success-20":Jr("success-20"),"success-30":Jr("success-30"),"success-40":Jr("success-40"),"success-50":Jr("success-50"),"success-60":Jr("success-60"),"success-70":Jr("success-70"),"success-80":Jr("success-80"),"success-90":Jr("success-90"),"success-95":Jr("success-95"),"success-100":Jr("success-100"),"warning-10":Jr("warning-10"),"warning-20":Jr("warning-20"),"warning-30":Jr("warning-30"),"warning-40":Jr("warning-40"),"warning-50":Jr("warning-50"),"warning-60":Jr("warning-60"),"warning-70":Jr("warning-70"),"warning-80":Jr("warning-80"),"warning-90":Jr("warning-90"),"warning-95":Jr("warning-95"),"warning-100":Jr("warning-100"),"error-10":Jr("error-10"),"error-20":Jr("error-20"),"error-30":Jr("error-30"),"error-40":Jr("error-40"),"error-50":Jr("error-50"),"error-60":Jr("error-60"),"error-70":Jr("error-70"),"error-80":Jr("error-80"),"error-90":Jr("error-90"),"error-95":Jr("error-95"),"error-100":Jr("error-100"),"info-10":Jr("info-10"),"info-20":Jr("info-20"),"info-30":Jr("info-30"),"info-40":Jr("info-40"),"info-50":Jr("info-50"),"info-60":Jr("info-60"),"info-70":Jr("info-70"),"info-80":Jr("info-80"),"info-90":Jr("info-90"),"info-95":Jr("info-95"),"info-100":Jr("info-100"),white:Jr("white"),black:Jr("black")},Zr={text:Jr("neutral-20"),"text-subtle":Jr("neutral-30"),"text-subtler":Jr("neutral-50"),"text-subtlest":Jr("neutral-60"),"text-primary":Jr("primary-50"),"text-hover":Jr("primary-40"),"text-selected":Jr("primary-50"),"text-selected-hover":Jr("primary-40"),"text-disabled":Jr("neutral-50"),"text-disabled-subtle":Jr("neutral-60"),"text-disabled-subtlest":Jr("neutral-80"),"text-selected-disabled":Jr("neutral-50"),"text-success":Jr("success-40"),"text-warning":Jr("warning-40"),"text-error":Jr("error-40"),"text-info":Jr("info-40"),"text-inverse":Jr("white"),icon:Jr("neutral-50"),"icon-subtle":Jr("neutral-60"),"icon-strongest":Jr("neutral-20"),"icon-primary":Jr("primary-50"),"icon-primary-subtle":Jr("primary-60"),"icon-primary-subtlest":Jr("primary-70"),"icon-hover":Jr("primary-40"),"icon-selected":Jr("primary-50"),"icon-selected-hover":Jr("primary-40"),"icon-disabled":Jr("neutral-50"),"icon-disabled-subtle":Jr("neutral-60"),"icon-selected-disabled":Jr("neutral-60"),"icon-success":Jr("success-50"),"icon-warning":Jr("warning-60"),"icon-error":Jr("error-50"),"icon-error-strong":Jr("error-40"),"icon-info":Jr("info-50"),"icon-inverse":Jr("white"),"icon-primary-inverse":"#FEAB10",border:Jr("neutral-90"),"border-strong":Jr("neutral-70"),"border-stronger":Jr("neutral-30"),"border-primary":Jr("primary-50"),"border-primary-subtle":Jr("primary-60"),"border-hover":Jr("primary-90"),"border-hover-strong":Jr("primary-60"),"border-selected":Jr("primary-50"),"border-selected-subtle":Jr("primary-70"),"border-selected-subtlest":Jr("primary-90"),"border-selected-hover":Jr("primary-40"),"border-focus":Jr("primary-60"),"border-focus-strong":Jr("primary-50"),"border-disabled":Jr("neutral-90"),"border-selected-disabled":Jr("neutral-70"),"border-success":Jr("success-60"),"border-warning":Jr("warning-60"),"border-error":Jr("error-60"),"border-error-focus":Jr("error-60"),"border-error-strong":Jr("error-40"),"border-info":Jr("info-60"),bg:Jr("white"),"bg-strong":Jr("neutral-100"),"bg-stronger":Jr("neutral-95"),"bg-strongest":Jr("neutral-90"),"bg-hover":Jr("primary-95"),"bg-hover-strong":Jr("primary-90"),"bg-hover-subtle":Jr("primary-100"),"bg-hover-neutral":Jr("neutral-95"),"bg-selected":Jr("primary-95"),"bg-selected-hover":Jr("primary-90"),"bg-selected-strong":Jr("primary-90"),"bg-selected-strongest":Jr("primary-90"),"bg-disabled":Jr("neutral-95"),"bg-selected-disabled":Jr("neutral-95"),"bg-success":Jr("success-100"),"bg-success-strong":Jr("success-50"),"bg-warning":Jr("warning-100"),"bg-warning-strong":Jr("warning-50"),"bg-info":Jr("info-100"),"bg-info-strong":Jr("info-50"),"bg-error":Jr("error-100"),"bg-error-strong":Jr("error-50"),"bg-error-strong-hover":Jr("error-30"),"bg-inverse":Jr("neutral-20"),"bg-inverse-subtle":Jr("neutral-30"),"bg-inverse-subtler":Jr("neutral-50"),"bg-inverse-subtlest":Jr("neutral-60"),"bg-primary":Jr("primary-50"),"bg-primary-subtle":Jr("primary-60"),"bg-primary-subtler":Jr("primary-80"),"bg-primary-subtlest":Jr("primary-100"),"bg-primary-hover":Jr("primary-40"),"bg-primary-subtlest-hover":Jr("primary-90"),"bg-primary-subtlest-selected":Jr("primary-90"),"bg-available":"#6DD0A1","overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Jr("primary-50"),"hyperlink-inverse":"#FFCB6A","focus-ring":Jr("black"),"focus-ring-inverse":Jr("white")},qr={collections:{lifesg:Zr,bookingsg:Zr,rbs:Zr,mylegacy:Zr,ccube:Zr},defaultValue:"lifesg"},Xr=e=>r=>{const t=r.theme,n=Nr(qr,t.colourScheme),i=t.overrides&&t.overrides.semanticColour?Yr(n,e,t.overrides.semanticColour):n[e];return"function"==typeof i?i(r):i},Qr={text:Xr("text"),"text-subtle":Xr("text-subtle"),"text-subtler":Xr("text-subtler"),"text-subtlest":Xr("text-subtlest"),"text-primary":Xr("text-primary"),"text-hover":Xr("text-hover"),"text-selected":Xr("text-selected"),"text-selected-hover":Xr("text-selected-hover"),"text-disabled":Xr("text-disabled"),"text-disabled-subtle":Xr("text-disabled-subtle"),"text-disabled-subtlest":Xr("text-disabled-subtlest"),"text-selected-disabled":Xr("text-selected-disabled"),"text-success":Xr("text-success"),"text-warning":Xr("text-warning"),"text-error":Xr("text-error"),"text-info":Xr("text-info"),"text-inverse":Xr("text-inverse"),icon:Xr("icon"),"icon-subtle":Xr("icon-subtle"),"icon-strongest":Xr("icon-strongest"),"icon-primary":Xr("icon-primary"),"icon-primary-subtle":Xr("icon-primary-subtle"),"icon-primary-subtlest":Xr("icon-primary-subtlest"),"icon-hover":Xr("icon-hover"),"icon-selected":Xr("icon-selected"),"icon-selected-hover":Xr("icon-selected-hover"),"icon-disabled":Xr("icon-disabled"),"icon-disabled-subtle":Xr("icon-disabled-subtle"),"icon-selected-disabled":Xr("icon-selected-disabled"),"icon-success":Xr("icon-success"),"icon-warning":Xr("icon-warning"),"icon-error":Xr("icon-error"),"icon-error-strong":Xr("icon-error-strong"),"icon-info":Xr("icon-info"),"icon-inverse":Xr("icon-inverse"),"icon-primary-inverse":Xr("icon-primary-inverse"),border:Xr("border"),"border-strong":Xr("border-strong"),"border-stronger":Xr("border-stronger"),"border-primary":Xr("border-primary"),"border-primary-subtle":Xr("border-primary-subtle"),"border-hover":Xr("border-hover"),"border-hover-strong":Xr("border-hover-strong"),"border-selected":Xr("border-selected"),"border-selected-subtle":Xr("border-selected-subtle"),"border-selected-subtlest":Xr("border-selected-subtlest"),"border-selected-hover":Xr("border-selected-hover"),"border-focus":Xr("border-focus"),"border-focus-strong":Xr("border-focus-strong"),"border-disabled":Xr("border-disabled"),"border-selected-disabled":Xr("border-selected-disabled"),"border-success":Xr("border-success"),"border-warning":Xr("border-warning"),"border-error":Xr("border-error"),"border-error-focus":Xr("border-error-focus"),"border-error-strong":Xr("border-error-strong"),"border-info":Xr("border-info"),bg:Xr("bg"),"bg-strong":Xr("bg-strong"),"bg-stronger":Xr("bg-stronger"),"bg-strongest":Xr("bg-strongest"),"bg-hover":Xr("bg-hover"),"bg-hover-strong":Xr("bg-hover-strong"),"bg-hover-subtle":Xr("bg-hover-subtle"),"bg-hover-neutral":Xr("bg-hover-neutral"),"bg-selected":Xr("bg-selected"),"bg-selected-hover":Xr("bg-selected-hover"),"bg-selected-strong":Xr("bg-selected-strong"),"bg-selected-strongest":Xr("bg-selected-strongest"),"bg-disabled":Xr("bg-disabled"),"bg-selected-disabled":Xr("bg-selected-disabled"),"bg-success":Xr("bg-success"),"bg-success-strong":Xr("bg-success-strong"),"bg-warning":Xr("bg-warning"),"bg-warning-strong":Xr("bg-warning-strong"),"bg-info":Xr("bg-info"),"bg-info-strong":Xr("bg-info-strong"),"bg-error":Xr("bg-error"),"bg-error-strong":Xr("bg-error-strong"),"bg-error-strong-hover":Xr("bg-error-strong-hover"),"bg-inverse":Xr("bg-inverse"),"bg-inverse-subtle":Xr("bg-inverse-subtle"),"bg-inverse-subtler":Xr("bg-inverse-subtler"),"bg-inverse-subtlest":Xr("bg-inverse-subtlest"),"bg-primary":Xr("bg-primary"),"bg-primary-subtle":Xr("bg-primary-subtle"),"bg-primary-subtler":Xr("bg-primary-subtler"),"bg-primary-subtlest":Xr("bg-primary-subtlest"),"bg-primary-hover":Xr("bg-primary-hover"),"bg-primary-subtlest-hover":Xr("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Xr("bg-primary-subtlest-selected"),"bg-available":Xr("bg-available"),"overlay-strong":Xr("overlay-strong"),"overlay-subtle":Xr("overlay-subtle"),hyperlink:Xr("hyperlink"),"hyperlink-inverse":Xr("hyperlink-inverse"),"focus-ring":Xr("focus-ring"),"focus-ring-inverse":Xr("focus-ring-inverse")},Gr={collections:{lifesg:{"width-010":1,"width-020":2,solid:"solid","dashed-default":(e=1,r=Qr.border)=>((e,r)=>t=>{const n="function"==typeof e?e(t):e,i="function"==typeof r?r(t):r,o=encodeURIComponent(i);return g`
            background-color: transparent;
            height: ${n}px;
            background-repeat: repeat-x;
            background-image: url('data:image/svg+xml,<svg width="8" height="${n}px" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${o}" stroke-width="${n+1}" stroke-dasharray="4 4" /></svg>');
        `})(e,r)}},defaultValue:"lifesg"},Kr=e=>(...r)=>t=>{const n=t.theme,i=Nr(Gr,n.borderScheme),o=n.overrides&&n.overrides.border?Yr(i,e,n.overrides.border):i[e];if("function"==typeof o){const e=1===r.length&&"theme"in r[0]?[void 0,void 0]:r,n=o(...e.length?e:[void 0,void 0])(t);return g`
                    ${n}
                `}return"number"==typeof o?`${o}px`:o},et={"width-010":Kr("width-010"),"width-020":Kr("width-020"),solid:Kr("solid"),"dashed-default":Kr("dashed-default")},rt={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},tt=e=>r=>{var t;const n=r.theme,i=Nr(rt,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?Yr(i,e,n.overrides.breakpoint):i[e],o},nt={"xxs-min":tt("xxs-min"),"xxs-max":tt("xxs-max"),"xs-min":tt("xs-min"),"xs-max":tt("xs-max"),"sm-min":tt("sm-min"),"sm-max":tt("sm-max"),"md-min":tt("md-min"),"md-max":tt("md-max"),"lg-min":tt("lg-min"),"lg-max":tt("lg-max"),"xl-min":tt("xl-min"),"xl-max":tt("xl-max"),"xxl-min":tt("xxl-min"),"xxs-column":tt("xxs-column"),"xs-column":tt("xs-column"),"sm-column":tt("sm-column"),"md-column":tt("md-column"),"lg-column":tt("lg-column"),"xl-column":tt("xl-column"),"xxl-column":tt("xxl-column"),"xxs-gutter":tt("xxs-gutter"),"xs-gutter":tt("xs-gutter"),"sm-gutter":tt("sm-gutter"),"md-gutter":tt("md-gutter"),"lg-gutter":tt("lg-gutter"),"xl-gutter":tt("xl-gutter"),"xxl-gutter":tt("xxl-gutter"),"xxs-margin":tt("xxs-margin"),"xs-margin":tt("xs-margin"),"sm-margin":tt("sm-margin"),"md-margin":tt("md-margin"),"lg-margin":tt("lg-margin"),"xl-margin":tt("xl-margin"),"xxl-margin":tt("xxl-margin")},it=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=nt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),ot={MaxWidth:it("max-width"),MinWidth:it("min-width")},at={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},st={collections:{lifesg:at,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:at,mylegacy:at,ccube:at},defaultValue:"lifesg"},lt=e=>r=>{const t=r.theme,n=Nr(st,t.fontScheme);return t.overrides&&t.overrides.fontSpec?Yr(n,e,t.overrides.fontSpec):n[e]},dt=(e,r,t,n)=>g`
    font-family: ${lt("font-family")};
    font-size: ${lt(e)};
    font-weight: ${lt(r)};
    line-height: ${lt(t)};
    letter-spacing: ${lt(n)};
`,ct={"header-xxl-light":dt("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":dt("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":dt("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":dt("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":dt("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":dt("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":dt("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":dt("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":dt("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":dt("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":dt("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":dt("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":dt("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":dt("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":dt("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":dt("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":dt("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":dt("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":dt("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":dt("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":dt("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":dt("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":dt("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":dt("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":dt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":dt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":dt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":dt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":dt("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":dt("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":dt("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":dt("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":dt("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":dt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":dt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":dt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":dt("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":dt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":dt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":dt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":dt("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":dt("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},ut={collections:{lifesg:ct,bookingsg:ct,rbs:ct,mylegacy:ct,ccube:ct},defaultValue:"lifesg"},ht=e=>r=>{const t=r.theme,n=Nr(ut,t.fontScheme),i=t.overrides&&t.overrides.font?Yr(n,e,t.overrides.font):n[e];return"function"==typeof i?i(r):i},gt={"header-xxl-light":ht("header-xxl-light"),"header-xxl-regular":ht("header-xxl-regular"),"header-xxl-semibold":ht("header-xxl-semibold"),"header-xxl-bold":ht("header-xxl-bold"),"header-xl-light":ht("header-xl-light"),"header-xl-regular":ht("header-xl-regular"),"header-xl-semibold":ht("header-xl-semibold"),"header-xl-bold":ht("header-xl-bold"),"header-lg-light":ht("header-lg-light"),"header-lg-regular":ht("header-lg-regular"),"header-lg-semibold":ht("header-lg-semibold"),"header-lg-bold":ht("header-lg-bold"),"header-md-light":ht("header-md-light"),"header-md-regular":ht("header-md-regular"),"header-md-semibold":ht("header-md-semibold"),"header-md-bold":ht("header-md-bold"),"header-sm-light":ht("header-sm-light"),"header-sm-regular":ht("header-sm-regular"),"header-sm-semibold":ht("header-sm-semibold"),"header-sm-bold":ht("header-sm-bold"),"header-xs-light":ht("header-xs-light"),"header-xs-regular":ht("header-xs-regular"),"header-xs-semibold":ht("header-xs-semibold"),"header-xs-bold":ht("header-xs-bold"),"body-baseline-light":ht("body-baseline-light"),"body-baseline-regular":ht("body-baseline-regular"),"body-baseline-semibold":ht("body-baseline-semibold"),"body-baseline-bold":ht("body-baseline-bold"),"body-md-light":ht("body-md-light"),"body-md-regular":ht("body-md-regular"),"body-md-semibold":ht("body-md-semibold"),"body-md-bold":ht("body-md-bold"),"body-sm-light":ht("body-sm-light"),"body-sm-regular":ht("body-sm-regular"),"body-sm-semibold":ht("body-sm-semibold"),"body-sm-bold":ht("body-sm-bold"),"body-xs-light":ht("body-xs-light"),"body-xs-regular":ht("body-xs-regular"),"body-xs-semibold":ht("body-xs-semibold"),"body-xs-bold":ht("body-xs-bold"),"formlabel-baseline-semibold":ht("formlabel-baseline-semibold"),"formlabel-lg-semibold":ht("formlabel-lg-semibold")},ft=Object.assign(Object.assign({},Qr),{Primitive:Ur}),mt=gt,bt=et,yt=ot,pt=u.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return g`
                    background-color: ${ft.Primitive.white};
                    border: 1px solid
                        ${e.$buttonIsDanger?ft["border-error-strong"]:ft["border-primary"]};

                    color: ${e.$buttonIsDanger?ft["text-error"]:ft["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${ft["bg-hover-neutral"]};
                    }
                `;case"light":return g`
                    background-color: ${ft.bg};
                    border: 1px solid ${ft.border};

                    color: ${e.$buttonIsDanger?ft["text-error"]:ft["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${ft["bg-hover-neutral"]};
                    }
                `;case"link":return g`
                    background-color: transparent;
                    border: transparent;
                    color: ${e.$buttonIsDanger?ft["text-error"]:ft["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${ft["bg-hover-neutral"]};
                    }
                `;case"disabled":return g`
                    background-color: ${ft["bg-disabled"]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${ft["text-disabled"]};
                `;default:return g`
                    background-color: ${e.$buttonIsDanger?ft["bg-error-strong"]:ft["bg-primary"]};
                    border: 1px solid transparent;

                    ${yt.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${ft["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?ft["bg-error-strong-hover"]:ft["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return g`
                    height: 2.5rem;
                    ${mt["body-md-semibold"]}

                    ${yt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return g`
                    height: 4rem;
                    ${mt["header-md-semibold"]}

                    ${yt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return g`
                    height: 3rem;
                    ${mt["header-xs-semibold"]}

                    ${yt.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Ft=u((({color:t,className:n,size:i})=>e(O,Object.assign({className:n,$size:i,$color:t},{children:[r(k,{id:"inner1"}),r(z,{id:"inner2"}),r(j,{id:"inner3"}),r(_,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,vt=u(pt)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,xt={Default:o.forwardRef(((t,n)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:d="left"}=t,c=x(t,["children","disabled","styleType","danger","icon","iconPosition"]),u={$buttonIconPosition:d,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(vt,Object.assign({ref:n,"data-testid":c["data-testid"]||"button-with-icon",disabled:o},u,c,{children:[l,r("span",{children:i})]}))})),Small:o.forwardRef(((t,n)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:d="left"}=t,c=x(t,["children","disabled","styleType","danger","icon","iconPosition"]),u={$buttonIconPosition:d,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(vt,Object.assign({ref:n,"data-testid":c["data-testid"]||"button-with-icon",disabled:o},u,c,{children:[l,r("span",{children:i})]}))}))},wt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Dt=e=>Object.keys(wt).reduce(((r,t)=>{const n=wt[t];return r[t]=`@media screen and (${e}: ${n}px)`,r}),{}),St=Dt("max-width"),Bt=(Dt("min-width"),wt),Et=(e,r,t)=>r?Rr(t,r)||Rr(e,r):t||e,$t=(e,r)=>{const t=r||e.defaultValue;return Rr(e.collections,t)};var Ct;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ct||(Ct={}));const Ot={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},At=e=>r=>{const t=r.theme,n=$t(Ot,t[Ct.colorScheme]);return t.options&&t.options.color?Et(n,e,t.options.color):Et(n,e)},kt={Brand:{1:At("Brand.1"),2:At("Brand.2"),3:At("Brand.3"),4:At("Brand.4"),5:At("Brand.5"),6:At("Brand.6")},Primary:At("Primary"),PrimaryDark:At("PrimaryDark"),Secondary:At("Secondary"),Accent:{Light:{1:At("Accent.Light.1"),2:At("Accent.Light.2"),3:At("Accent.Light.3"),4:At("Accent.Light.4"),5:At("Accent.Light.5"),6:At("Accent.Light.6")},Dark:{1:At("Accent.Dark.1"),2:At("Accent.Dark.2"),3:At("Accent.Dark.3")}},Neutral:{1:At("Neutral.1"),2:At("Neutral.2"),3:At("Neutral.3"),4:At("Neutral.4"),5:At("Neutral.5"),6:At("Neutral.6"),7:At("Neutral.7"),8:At("Neutral.8")},Validation:{Green:{Text:At("Validation.Green.Text"),Icon:At("Validation.Green.Icon"),Border:At("Validation.Green.Border"),Background:At("Validation.Green.Background")},Orange:{Text:At("Validation.Orange.Text"),Icon:At("Validation.Orange.Icon"),Border:At("Validation.Orange.Border"),Background:At("Validation.Orange.Background"),Badge:At("Validation.Orange.Badge")},Red:{Text:At("Validation.Red.Text"),Icon:At("Validation.Red.Icon"),Border:At("Validation.Red.Border"),Background:At("Validation.Red.Background")},Blue:{Text:At("Validation.Blue.Text"),Icon:At("Validation.Blue.Icon"),Border:At("Validation.Blue.Border"),Background:At("Validation.Blue.Background")}},Shadow:{Accent:At("Shadow.Accent"),Red:At("Shadow.Red"),Elevation:At("Shadow.Elevation")}},zt=({className:e,progress:t,color:n,"data-testid":i})=>r(jt,Object.assign({className:e,$innerWidth:t,$color:n,"data-testid":i},{children:r("progress",{value:100*t,max:100})})),jt=u.div`
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

    ${e=>{const{$color:r}=e;let t;return t=r&&"string"==typeof r?r:r?r(e):kt.Accent.Light[1](e),g`
            border: 1px solid ${t};
            border-radius: 4px;

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
`,_t={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Ht={D1:{fontFamily:_t.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:_t.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:_t.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:_t.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:_t.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:_t.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:_t.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:_t.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:_t.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:_t.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:_t.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:_t.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:_t.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:_t.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Mt={D1:{fontFamily:_t.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:_t.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:_t.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:_t.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:_t.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:_t.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:_t.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:_t.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:_t.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:_t.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:_t.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:_t.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:_t.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:_t.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Tt={collections:{base:Ht,oneservice:{D1:{fontFamily:_t.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:_t.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:_t.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:_t.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:_t.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:_t.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:_t.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:_t.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:_t.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:_t.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:_t.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:_t.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:_t.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:_t.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Mt},defaultValue:"base"},It=e=>r=>{const t=r.theme,n=$t(Tt,t[Ct.textStyleScheme]);return t.options&&t.options.textStyle?Et(n,e,t.options.textStyle):Et(n,e)},Pt={D1:{fontFamily:It("D1.fontFamily"),fontSize:It("D1.fontSize"),fontWeight:It("D1.fontWeight"),lineHeight:It("D1.lineHeight"),letterSpacing:It("D1.letterSpacing")},D2:{fontFamily:It("D2.fontFamily"),fontSize:It("D2.fontSize"),fontWeight:It("D2.fontWeight"),lineHeight:It("D2.lineHeight"),letterSpacing:It("D2.letterSpacing")},D3:{fontFamily:It("D3.fontFamily"),fontSize:It("D3.fontSize"),fontWeight:It("D3.fontWeight"),lineHeight:It("D3.lineHeight"),letterSpacing:It("D3.letterSpacing")},D4:{fontFamily:It("D4.fontFamily"),fontSize:It("D4.fontSize"),fontWeight:It("D4.fontWeight"),lineHeight:It("D4.lineHeight"),letterSpacing:It("D4.letterSpacing")},DBody:{fontFamily:It("DBody.fontFamily"),fontSize:It("DBody.fontSize"),fontWeight:It("DBody.fontWeight"),lineHeight:It("DBody.lineHeight"),letterSpacing:It("DBody.letterSpacing")},H1:{fontFamily:It("H1.fontFamily"),fontSize:It("H1.fontSize"),fontWeight:It("H1.fontWeight"),lineHeight:It("H1.lineHeight"),letterSpacing:It("H1.letterSpacing")},H2:{fontFamily:It("H2.fontFamily"),fontSize:It("H2.fontSize"),fontWeight:It("H2.fontWeight"),lineHeight:It("H2.lineHeight"),letterSpacing:It("H2.letterSpacing")},H3:{fontFamily:It("H3.fontFamily"),fontSize:It("H3.fontSize"),fontWeight:It("H3.fontWeight"),lineHeight:It("H3.lineHeight"),letterSpacing:It("H3.letterSpacing")},H4:{fontFamily:It("H4.fontFamily"),fontSize:It("H4.fontSize"),fontWeight:It("H4.fontWeight"),lineHeight:It("H4.lineHeight"),letterSpacing:It("H4.letterSpacing")},H5:{fontFamily:It("H5.fontFamily"),fontSize:It("H5.fontSize"),fontWeight:It("H5.fontWeight"),lineHeight:It("H5.lineHeight"),letterSpacing:It("H5.letterSpacing")},H6:{fontFamily:It("H6.fontFamily"),fontSize:It("H6.fontSize"),fontWeight:It("H6.fontWeight"),lineHeight:It("H6.lineHeight"),letterSpacing:It("H6.letterSpacing")},Body:{fontFamily:It("Body.fontFamily"),fontSize:It("Body.fontSize"),fontWeight:It("Body.fontWeight"),lineHeight:It("Body.lineHeight"),letterSpacing:It("Body.letterSpacing")},BodySmall:{fontFamily:It("BodySmall.fontFamily"),fontSize:It("BodySmall.fontSize"),fontWeight:It("BodySmall.fontWeight"),lineHeight:It("BodySmall.lineHeight"),letterSpacing:It("BodySmall.letterSpacing")},XSmall:{fontFamily:It("XSmall.fontFamily"),fontSize:It("XSmall.fontSize"),fontWeight:It("XSmall.fontWeight"),lineHeight:It("XSmall.lineHeight"),letterSpacing:It("XSmall.letterSpacing")}},Wt=[_t.OpenSans,_t.PlusJakartaSans],Lt=(e,r)=>{switch(r){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Rt=(e,r)=>t=>{var n;const i=Pt[e].fontFamily(t),o=Pt[e].fontWeight(t),a=Wt.find((e=>Object.values(e).includes(i)));return a?g`
                font-family: ${Lt(a,r)||Lt(a,o)||i};
                font-weight: normal !important;
            `:g`
            font-family: ${i};
            font-weight: ${null!==(n=Yt(r)||o)&&void 0!==n?n:"normal"};
        `},Yt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Nt=e=>{if(e>0)return g`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Vt=(e,r,t=!1)=>n=>{const i=Pt[e],o=i.fontSize(n);return g`
            ${Rt(e,r)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${g`
                margin-bottom: ${o*(t?1.05:0)}rem;
            `}
        `},Jt=(e=!1,r=!1,t=void 0)=>r?g`
            display: block;
            ${Nt(t)}
        `:e?g`
            display: inline;
        `:g`
            display: block;
            ${Nt(t)}
        `;var Ut;!function(e){e.D1=u.h1`
        ${e=>g`
                ${Vt("D1",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=u.h1`
        ${e=>g`
                ${Vt("D2",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=u.h1`
        ${e=>g`
                ${Vt("D3",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=u.h1`
        ${e=>g`
                ${Vt("D4",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=u.h1`
        ${e=>g`
                ${Vt("DBody",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=u.h1`
        ${e=>g`
                ${Vt("H1",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=u.h2`
        ${e=>g`
                ${Vt("H2",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=u.h3`
        ${e=>g`
                ${Vt("H3",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=u.h4`
        ${e=>g`
                ${Vt("H4",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=u.h5`
        ${e=>g`
                ${Vt("H5",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=u.h6`
        ${e=>g`
                ${Vt("H6",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=u.p`
        ${e=>g`
                ${Vt("Body",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=u.p`
        ${e=>g`
                ${Vt("BodySmall",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=u.span`
        ${e=>g`
                ${Vt("XSmall",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Xt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Xt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ut||(Ut={}));const Zt=u.a`
    ${e=>g`
            ${Vt(e.textStyle,e.weight)}
            color: ${kt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${kt.Secondary};

                svg {
                    color: ${kt.Secondary};
                }
            }
        `}
`,qt=u(f)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Xt=t=>{var{external:n=!1,children:i}=t,o=x(t,["external","children"]);return e(Zt,Object.assign({},o,{children:[i,n&&r(qt,{})]}))};var Qt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Qt||(Qt={}));const Gt={Default:o.forwardRef(((t,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=t,d=x(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(pt,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[a&&r(Ft,{}),r("span",{children:i})]}))})),Small:o.forwardRef(((t,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=t,d=x(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(pt,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[a&&r(Ft,{}),r("span",{children:i})]}))})),Large:o.forwardRef(((t,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=t,d=x(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(pt,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[a&&r(Ft,{}),r("span",{children:i})]}))}))},Kt=u.button`
    align-items: center;
    border-radius: 0.25rem;
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$sizeType){case"large":return g`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return g`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return g`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${e=>{switch(e.$styleType){case"secondary":return g`
                    background-color: ${ft.bg};
                    border: ${bt["width-010"]} ${bt.solid}
                        ${ft["border-primary"]};
                    color: ${ft["text-primary"]};

                    :hover {
                        background-color: ${ft["bg-hover-neutral"]};
                    }
                `;case"light":return g`
                    background-color: ${ft.bg};
                    border: ${bt["width-010"]} ${bt.solid}
                        ${ft.border};
                    color: ${ft["text-primary"]};

                    :hover {
                        background-color: ${ft["bg-hover-neutral"]};
                    }
                `;default:return g`
                    background-color: ${ft["bg-primary"]};
                    border: none;
                    color: ${ft["text-inverse"]};

                    :hover {
                        background-color: ${ft["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${ft["bg-disabled"]};
        border: ${bt["width-010"]} ${bt.solid}
            ${ft["border-disabled"]};
        color: ${ft["text-disabled"]};
        cursor: not-allowed;
    }
`,en=o.forwardRef(((e,t)=>{var{"data-testid":n,styleType:i="primary",children:o,sizeType:a="default",type:s="button"}=e,l=x(e,["data-testid","styleType","children","sizeType","type"]);return r(Kt,Object.assign({"data-testid":n||"iconButton",ref:t,type:s,$sizeType:a,$styleType:i},l,{children:o}))}));var rn={exports:{}};rn.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,a=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},F="en",v={};v[F]=b;var x="$isDayjsObject",w=function(e){return e instanceof E||!(!e||!e[x])},D=function e(r,t,n){var i;if(!r)return F;if("string"==typeof r){var o=r.toLowerCase();v[o]&&(i=o),t&&(v[o]=t,i=o);var a=r.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=r.name;v[s]=r,i=s}return!n&&i&&(F=i),i||!n&&F},S=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new E(t)},B=p;B.l=D,B.i=w,B.w=function(e,r){return S(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var E=function(){function b(e){this.$L=D(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var y=b.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(B.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(f);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return B},y.isValid=function(){return!(this.$d.toString()===g)},y.isSame=function(e,r){var t=S(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return S(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<S(e)},y.$g=function(e,r,t){return B.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!B.u(r)||r,c=B.p(e),g=function(e,r){var i=B.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(s)},f=function(e,r){return B.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,b=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,b):g(0,b+1);case l:var F=this.$locale().weekStart||0,v=(m<F?m+7:m)-F;return g(n?y-v:y+(6-v),b);case s:case h:return f(p+"Hours",0);case a:return f(p+"Minutes",1);case o:return f(p+"Seconds",2);case i:return f(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=B.p(e),c="set"+(this.$u?"UTC":""),g=(t={},t[s]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[a]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],f=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(h,1);m.$d[g](f),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else g&&this.$d[g](f);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[B.p(e)]()},y.add=function(n,c){var h,g=this;n=Number(n);var f=B.p(c),m=function(e){var r=S(g);return B.w(r.date(r.date()+Math.round(e*n)),g)};if(f===d)return this.set(d,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===s)return m(1);if(f===l)return m(7);var b=(h={},h[o]=r,h[a]=t,h[i]=e,h)[f]||1,y=this.$d.getTime()+n*b;return B.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),o=this.$H,a=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},h=function(e){return B.s(o%12||12,e,"0")},f=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return B.s(r.$y,4,"0");case"M":return s+1;case"MM":return B.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return B.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return B.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return f(o,a,!0);case"A":return f(o,a,!1);case"m":return String(a);case"mm":return B.s(a,2,"0");case"s":return String(r.$s);case"ss":return B.s(r.$s,2,"0");case"SSS":return B.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,g){var f,m=this,b=B.p(h),y=S(n),p=(y.utcOffset()-this.utcOffset())*r,F=this-y,v=function(){return B.m(m,y)};switch(b){case u:f=v()/12;break;case d:f=v();break;case c:f=v()/3;break;case l:f=(F-p)/6048e5;break;case s:f=(F-p)/864e5;break;case a:f=F/t;break;case o:f=F/r;break;case i:f=F/e;break;default:f=F}return g?f:B.a(f)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return v[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=D(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return B.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},b}(),$=E.prototype;return S.prototype=$,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){$[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),S.extend=function(e,r){return e.$i||(e(r,E,S),e.$i=!0),S},S.locale=D,S.isDayjs=w,S.unix=function(e){return S(1e3*e)},S.en=v[F],S.Ls=v,S.p={},S}();var tn=S(rn.exports),nn={exports:{}};nn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=o&&o.formats;for(var a=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],h=c&&c[0],g=c&&c[1];a[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var i=a[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,f=a||(i||o?1:g.getDate()),m=i||g.getFullYear(),b=0;i&&!o||(b=o>0?o-1:g.getMonth());var y=s||0,p=l||0,F=d||0,v=c||0;return u?new Date(Date.UTC(m,b,f,y,p,F,v+60*u.offset*1e3)):t?new Date(Date.UTC(m,b,f,y,p,F,v)):new Date(m,b,f,y,p,F,v)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var g=s.length,f=1;f<=g;f+=1){a[1]=s[f-1];var m=t.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}f===g&&(this.$d=new Date(""))}else i.call(this,e)}}}();var on=S(nn.exports),an={exports:{}};an.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),a=t(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var sn=S(an.exports),ln={exports:{}};ln.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var dn=S(ln.exports),cn={exports:{}};cn.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var un,hn,gn,fn=S(cn.exports),mn={exports:{}},bn=S(mn.exports=(un={year:0,month:1,day:2,hour:3,minute:4,second:5},hn={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=hn[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),hn[n]=i),i}(r,t);return i.formatToParts(n)},o=function(e,r){for(var n=i(e,r),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=un[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,g=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",f=+e;return(t.utc(g).valueOf()-(f-=f%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=t(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var a=i&&r,s=i||r||n,l=o(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,i=o(n,t);if(r===i)return[n,r];var a=o(n-=60*(i-r)*1e3,t);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(t.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=s,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));tn.extend(sn),tn.extend(fn),tn.extend(dn),tn.extend(on),tn.extend(bn),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=tn(r).startOf("week");return yn(t).map((e=>pn(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return pn(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(tn(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+tn(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=tn(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?tn(n):void 0,i?tn(i):void 0),a=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!a}}(gn||(gn={}));const yn=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},pn=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Fn=[1,3,5,7,8,10,12],vn=[4,6,9,11];var xn,wn,Dn,Sn;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),a=parseInt(n);return 0==i?"1":Fn.includes(o)?Math.min(i,31).toString():vn.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=tn(e,t);return tn(r,t).diff(n,"minute")},e.toDayjs=e=>e?tn(e):tn(),e.addMinutesToTime=(e,r,t="HH:mm")=>tn(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>tn(e).isSame(tn(r),t)}(xn||(xn={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!tn(e).isBefore(n,"day"))||!(!i||!tn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(tn(e).isValid())return e}return""}}(wn||(wn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Dn||(Dn={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const a=n+o;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=t;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(Sn||(Sn={}));const Bn=u.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return g`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,En=u.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?ft["overlay-subtle"]:ft["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let r="";return e&&(r+="blur(10px)"),r.length>0?r:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let r="";return e.$show?r+=g`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:r+=g`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(r+=g`
                transition: none;
            `),r}}
`;var $n;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}($n||($n={}));const Cn=({show:e=!1,rootId:t,onOverlayClick:n,children:i,backgroundOpacity:d,backgroundBlur:c=!0,disableTransition:u=!1,enableOverlayClick:h=!1,zIndex:g,id:f})=>{const[b,v]=s(null),[x,w]=s(),[D]=s((()=>Dn.generate())),S=y(),B=l(),E=l(null),$=i&&o.cloneElement(i,{ref:E}),C=f?`lifesg-ds-overlay-root-${f}`:"lifesg-ds-overlay-root",O=(null!=g?g:x)?99999:99998;(e=>{const r=m();a((()=>{if(!r)return;const t={zIndex:e};r.events.emit($n.Change,t)}),[r,e]),a((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit($n.Change,t)};return null==r||r.events.on($n.Ready,t),()=>null==r?void 0:r.events.off($n.Ready,t)}),[r,e])})(O),a((()=>(j(),v(k()),()=>{T(),H().length<1&&_("remove")})),[]),a((()=>{if(e){const e=z();A(e),M();const r=setTimeout((()=>{_("add")}),200);return()=>clearTimeout(r)}{T();const e=setTimeout((()=>{H().length<1&&_("remove")}),200);return()=>clearTimeout(e)}}),[e]);const A=e=>{B.current=e,w(e)},k=()=>document&&t?document.getElementById(t):document?document.body:null,z=()=>H().length>0,j=()=>{if(!document.getElementById(An)){const e=document.createElement("style");e.id=An;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${kn} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${kn}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},_=e=>{const r=document.body.classList.contains(kn);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(kn):document.body.classList.add(kn)},H=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},M=()=>{const e=H();document.body.dataset.lifesgDsOverlayOrder=[...e,D].join(",")},T=()=>{const e=H();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==D)).join(",")},I=e=>{var r;const t=null===(r=E.current)||void 0===r?void 0:r.firstChild;t&&t.contains(e.target)||n&&h&&(e.preventDefault(),n())};return b?F.createPortal(r(Bn,Object.assign({id:C,"data-testid":C,$show:e,$zIndex:O},{children:i&&r(p,Object.assign({id:S},{children:r(En,Object.assign({"data-testid":"overlay-wrapper",$show:e,$stacked:x,$backgroundBlur:c,$disableTransition:u,onClick:I},{children:$}))}))})),b):null},On=e=>r(b,{children:r(Cn,Object.assign({},e))}),An="lifesg-ds-overlay-stylesheet",kn="lifesg-ds-overlay-open",zn=u.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return r=e.show,t=e.animationFrom||"bottom",r?`\n\t\t\t${t}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${t}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var r,t}}

    ${yt.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,jn=u.button`
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

        ${({$highlight:e})=>e&&g`
                background-color: ${kt.Neutral[7]};
            `}
    }
`,_n=o.forwardRef(((e,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=x(e,["children","focusHighlight","focusOutline","type"]);return r(jn,Object.assign({ref:t,$outline:o,$highlight:i,type:a},s,{children:n}))})),Hn=u.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${ft.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${yt.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Mn=u(_n)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${ft.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${yt.MaxWidth.sm} {
        right: 1.25rem;
    }
`,Tn=Object.assign((e=>{var{id:t="modal",show:n,animationFrom:i="bottom",children:o,enableOverlayClick:l=!0,rootComponentId:d,zIndex:c,onOverlayClick:u,dismissKeyboardOnShow:h=!0}=e,g=x(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[f,m]=s(),[b,y]=s();a((()=>window.visualViewport?(F(),window.visualViewport.addEventListener("resize",F),()=>{window.visualViewport.removeEventListener("resize",F)}):(p(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)})),[]),a((()=>{var e,r;n&&h&&(null===(r=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===r||r.call(e))}),[n]);const p=()=>{const e=.01*window.innerHeight;m(e)},F=()=>{const e=.01*window.visualViewport.height;m(e),y(window.visualViewport.offsetTop)};return r(On,Object.assign({"data-testid":`${t}-overlay`,show:n,enableOverlayClick:l,onOverlayClick:u,id:t,rootId:d,zIndex:c},{children:r(zn,Object.assign({show:n,animationFrom:i,"data-testid":t,verticalHeight:f,offsetTop:b},g,{children:o}))}))}),{Box:t=>{var{id:n="modal-box",children:i,onClose:o,showCloseButton:a=!0}=t,s=x(t,["id","children","onClose","showCloseButton"]);return e(Hn,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&r(Mn,Object.assign({onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser"},{children:r(v,{})})),i]}))}}),In=` ${St.mobileL}, (orientation: landscape) and (max-height: ${Bt.mobileL}px)`,Pn=`@media(orientation: landscape) and (max-height: ${Bt.mobileL}px)`,Wn=u.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${e=>`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${encodeURIComponent(kt.Neutral[5](e))}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");`};
    background-color: ${kt.Neutral[8]};
    border-radius: 4px;
    height: 14.125rem;
`,Ln=u(Gt.Default)`
    width: fit-content;
    padding: 0 2rem;
    margin: 0 2rem;
`,Rn=u(en)`
    position: absolute;
    top: 1rem;
    right: 1rem;
`,Yn=u.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - 8rem);
    height: 100%;
`,Nn=u.div`
    background: ${kt.Accent.Light[6]};
    border: 1px solid ${kt.Neutral[5]};
    border-radius: 4px;
    margin: 0 2rem;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    flex: 1;
    flex-direction: column;
    align-items: center;
`,Vn=u(Ut.H6)`
    margin-top: 1rem;
`,Jn=u(Tn)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,Un=u.div`
    width: 100%;
    margin: auto;
    padding: 5rem 1.25rem;

    ${In} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,Zn=u(Tn.Box)`
    width: 100%;
    height: 29rem;
    max-width: 42rem;
    max-height: none;
    margin: 0 auto;
    padding: 1rem;

    ${In} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;
    }
`,qn=u.h4`
    ${Vt("H4","semibold")}
    margin-bottom: 1rem;
    color: ${kt.Neutral[1]};
    text-align: center;

    ${In} {
        ${Vt("H5","semibold")}
        margin: 0.75rem 0;
    }
`,Xn=u.div`
    width: 100%;
    height: 20rem;
    border-radius: 12px;
    overflow: hidden;

    ${In} {
        border-radius: 0;
        flex: 1;
    }

    ${Pn} {
        background: ${kt.Neutral[7]};
    }
`,Qn=u.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${kt.Neutral[6]};
    margin: auto;

    ${In} {
        aspect-ratio: 4/3;
    }
    ${St.mobileL} {
        width: 100%;
        height: auto;
    }
    ${Pn} {
        width: auto;
        height: 100%;
    }
`,Gn=u.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 18.75rem;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${kt.Neutral[4]};
    pointer-events: none;

    ${In} {
        width: calc(100% - 4rem);
        max-width: 18.75rem;
        left: 50%;
    }
`,Kn=u.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    ${St.mobileL} {
        flex-direction: column-reverse;
        margin: 1rem 1.25rem 3rem;
        gap: 1rem;
    }

    ${Pn} {
        flex-direction: row;
        margin: 1rem 1.25rem 1rem;
    }
`,ei=u(Gt.Default)`
    width: 8.5rem;
    ${St.mobileL} {
        width: 100%;
    }
    ${Pn} {
        height: 2.5rem;
    }
`,ri=u.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,ti=u.canvas`
    cursor: crosshair;
`,ni=d((()=>w(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.081cb612.js")).ESignatureCanvas}})))),ii=o=>{const{description:d,id:u,loadingProgress:h,loadingLabel:g="Uploading...",onChange:f,value:m}=o,b=x(o,["description","id","loadingProgress","loadingLabel","onChange","value"]),[y,p]=s(!1),F=l(null),[v,w]=s(m),D=C.useMediaQuery({maxWidth:Bt.mobileL}),S=()=>{F.current.clear()},B=()=>{const e=F.current.export();w(e),p(!1),null==f||f(e)};a((()=>{w(m)}),[m]);return e("div",Object.assign({},b,{children:[r(Wn,{children:isNaN(h)?v?e(t,{children:[r(Yn,{src:v,alt:"Signature preview"}),r(Rn,Object.assign({styleType:"light",onClick:()=>p(!0),id:u,"aria-label":"Edit signature"},{children:r(n,{})}))]}):r(Ln,Object.assign({type:"button",styleType:"secondary","aria-label":"Add signature",id:u,onClick:()=>p(!0)},{children:"Add signature"})):e(Nn,{children:[g&&r(Ut.BodySmall,{children:g}),r(zt,{progress:h,"data-testid":`${u||"e-signature"}-progress-bar`})]})}),r(Jn,Object.assign({"data-testid":"signature-modal",show:y},{children:r(Un,{children:e(Zn,Object.assign({onClose:()=>p(!1)},{children:[r(qn,{children:"Signature"}),r(Xn,{children:e(Qn,{children:[r(Gn,{}),r(c,Object.assign({fallback:null},{children:y&&r(ni,{ref:F,baseImageDataURL:v})}))]})}),e(Kn,{children:[r(ei,Object.assign({as:xt.Default,type:"button",styleType:D?"light":"link",icon:r(i,{}),onClick:S},{children:"Clear"})),r(ei,Object.assign({type:"button",onClick:B},{children:"Save"}))]})]}))})})),d?r(Vn,Object.assign({weight:"regular",as:"p"},{children:d})):null]}))};export{ii as E,ri as S,Ct as V,w as _,kt as a,ti as b,B as g};
//# sourceMappingURL=index.47410d28.js.map
