import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import o,{useContext as i,useRef as a,useState as c,isValidElement as l,createRef as u,cloneElement as s,PureComponent as f,useEffect as d,useLayoutEffect as p,forwardRef as h,useImperativeHandle as y,Children as g}from"react";import m,{css as v}from"styled-components";import{ChevronLeftIcon as b}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as F}from"@lifesg/react-icons/chevron-right";import{findDOMNode as S}from"react-dom";import{ExternalIcon as w}from"@lifesg/react-icons/external";function x(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;const O=o.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}});var B="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function j(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var E,$={exports:{}};E=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return c(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var o=e.expressions.every((function(e){var n=e.feature,r=e.modifier,o=e.value,i=t[n];if(!i)return!1;switch(n){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=s(o),i=s(i);break;case"resolution":o=u(o),i=u(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=l(o),i=l(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(r){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!n||!o&&n}))},t.parse=c;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function c(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),i=t[1],a=t[2],c=t[3]||"",l={};return l.inverse=!!i&&"not"===i.toLowerCase(),l.type=a?a.toLowerCase():"all",c=c.match(/\([^\)]+\)/g)||[],l.expressions=c.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(o);return{modifier:n[1],feature:n[2],value:t[2]}})),l}))}function l(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function u(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function s(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=/[A-Z]/g,o=/^ms-/,i={};function a(e){return"-"+e.toLowerCase()}const c=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(r,a);return i[e]=o.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,t,n)=>{var r=n(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,o="undefined"!=typeof window?window.matchMedia:null;function i(e,t,n){var i=this;if(o&&!n){var a=o.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(c)}else this.matches=r(e,t),this.media=e;function c(e){i.matches=e.matches,i.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(c)}}e.exports=function(e,t,n){return new i(e,t,n)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))n.call(i,u)&&(c[u]=i[u]);if(t){a=t(i);for(var s=0;s<a.length;s++)r.call(i,a[s])&&(c[a[s]]=i[a[s]])}}return c}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,n)=>{var r,o=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function c(e,t,n,c,l){for(var u in e)if(a(e,u)){var s;try{if("function"!=typeof e[u]){var f=Error((c||"React class")+": "+n+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw f.name="Invariant Violation",f}s=e[u](t,u,c,n,null,o)}catch(e){s=e}if(!s||s instanceof Error||r((c||"React class")+": type specification of "+n+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof s+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),s instanceof Error&&!(s.message in i)){i[s.message]=!0;var d=l?l():"";r("Failed "+n+" type: "+s.message+(null!=d?d:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},c.resetWarningCache=function(){i={}},e.exports=c},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,n)=>{var r,o=n(/*! react-is */"./node_modules/react-is/index.js"),i=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),c=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function u(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,s="@@iterator",f="<<anonymous>>",d={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:y(u),arrayOf:function(e){return y((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var c=t[n];if(!Array.isArray(c))return new h("Invalid "+o+" `"+i+"` of type `"+b(c)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<c.length;l++){var u=e(c,l,r,o,i+"["+l+"]",a);if(u instanceof Error)return u}return null}))},element:y((function(t,n,r,o,i){var a=t[n];return e(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:y((function(e,t,n,r,i){var a=e[t];return o.isValidElementType(a)?null:new h("Invalid "+r+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return y((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||f;return new h("Invalid "+o+" `"+i+"` of type `"+((c=t[n]).constructor&&c.constructor.name?c.constructor.name:f)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var c;return null}))},node:y((function(e,t,n,r,o){return v(e[t])?null:new h("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return y((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],u=b(l);if("object"!==u)return new h("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var s in l)if(c(l,s)){var f=e(l,s,r,o,i+"."+s,a);if(f instanceof Error)return f}return null}))},oneOf:function(e){return Array.isArray(e)?y((function(t,n,r,o,i){for(var a=t[n],c=0;c<e.length;c++)if(p(a,e[c]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===F(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),u)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),u;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+S(n)+" at index "+t+"."),u}return y((function(t,n,r,o,i){for(var l=[],u=0;u<e.length;u++){var s=(0,e[u])(t,n,r,o,i,a);if(null==s)return null;s.data&&c(s.data,"expectedType")&&l.push(s.data.expectedType)}return new h("Invalid "+o+" `"+i+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return y((function(t,n,r,o,i){var c=t[n],l=b(c);if("object"!==l)return new h("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var u in e){var s=e[u];if("function"!=typeof s)return m(r,o,i,u,F(s));var f=s(c,u,r,o,i+"."+u,a);if(f)return f}return null}))},exact:function(e){return y((function(t,n,r,o,l){var u=t[n],s=b(u);if("object"!==s)return new h("Invalid "+o+" `"+l+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var f=i({},t[n],e);for(var d in f){var p=e[d];if(c(e,d)&&"function"!=typeof p)return m(r,o,l,d,F(p));if(!p)return new h("Invalid "+o+" `"+l+"` key `"+d+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=p(u,d,r,o,l+"."+d,a);if(y)return y}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function y(e){var n={},o=0;function i(i,c,l,u,s,d,p){if(u=u||f,d=d||l,p!==a){if(t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("undefined"!=typeof console){var g=u+":"+l;!n[g]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,o++)}}return null==c[l]?i?null===c[l]?new h("The "+s+" `"+d+"` is marked as required in `"+u+"`, but its value is `null`."):new h("The "+s+" `"+d+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(c,l,u,s,d)}var c=i.bind(null,!1);return c.isRequired=i.bind(null,!0),c}function g(e){return y((function(t,n,r,o,i,a){var c=t[n];return b(c)!==e?new h("Invalid "+o+" `"+i+"` of type `"+F(c)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,n,r,o){return new h((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[s]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!v(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function F(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function S(e){var t=F(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,d.checkPropTypes=l,d.resetWarningCache=l.resetWarningCache,d.PropTypes=d,d}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function F(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case u:case s:case o:case a:case i:case d:return p;default:var g=p&&p.$$typeof;switch(g){case l:case f:case y:case h:case c:return g;default:return t}}case r:return t}}}var S=u,w=s,x=l,O=c,B=n,j=f,E=o,$=y,D=h,_=r,A=a,C=i,H=d,k=!1;function T(e){return F(e)===s}t.AsyncMode=S,t.ConcurrentMode=w,t.ContextConsumer=x,t.ContextProvider=O,t.Element=B,t.ForwardRef=j,t.Fragment=E,t.Lazy=$,t.Memo=D,t.Portal=_,t.Profiler=A,t.StrictMode=C,t.Suspense=H,t.isAsyncMode=function(e){return k||(k=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),T(e)||F(e)===u},t.isConcurrentMode=T,t.isContextConsumer=function(e){return F(e)===l},t.isContextProvider=function(e){return F(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return F(e)===f},t.isFragment=function(e){return F(e)===o},t.isLazy=function(e){return F(e)===y},t.isMemo=function(e){return F(e)===h},t.isPortal=function(e){return F(e)===r},t.isProfiler=function(e){return F(e)===a},t.isStrictMode=function(e){return F(e)===i},t.isSuspense=function(e){return F(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===s||e===a||e===i||e===d||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===c||e.$$typeof===l||e.$$typeof===f||e.$$typeof===m||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=F}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,t,n)=>{e.exports=n(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,t,n)=>{function r(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),o=n.length;if(r.length!==o)return!1;for(var i=0;i<o;i++){var a=n[i];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}n.r(t),n.d(t,{shallowEqualArrays:()=>o,shallowEqualObjects:()=>r})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,n=e.device,o=e.onChange,a=r(e,["children","device","onChange"]),c=(0,i.default)(a,n,o);return"function"==typeof t?t(c):c?t:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=(0,n(/*! react */"react").createContext)(void 0);t.default=r},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=r(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=o.default;var i=r(n(/*! ./Component */"./src/Component.ts"));t.default=i.default;var a=r(n(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=a.default;var c=r(n(/*! ./Context */"./src/Context.ts"));t.Context=c.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(/*! prop-types */"./node_modules/prop-types/index.js")),c=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},u={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:c,deviceHeight:c,width:c,deviceWidth:c,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:c,type:Object.keys(l)},s=o(u,["type"]),f=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:c,maxHeight:c,minDeviceHeight:c,maxDeviceHeight:c,minWidth:c,maxWidth:c,minDeviceWidth:c,maxDeviceWidth:c,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:c,maxResolution:c},s),d=r(r({},l),f);t.default={all:d,types:l,matchers:u,features:f}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,o.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(/*! react */"react"),i=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),c=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=r(n(/*! ./toQuery */"./src/toQuery.ts")),u=r(n(/*! ./Context */"./src/Context.ts")),s=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},f=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},d=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,o.useState)(t),r=n[0],i=n[1];return(0,o.useEffect)((function(){var e=t();r!==e&&i(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,o.useContext)(u.default),n=function(){return s(e)||s(t)},r=(0,o.useState)(n),i=r[0],a=r[1];return(0,o.useEffect)((function(){var e=n();(0,c.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=d(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var n=function(){return(0,i.default)(e,t||{},!!t)},r=(0,o.useState)(n),a=r[0],c=r[1],l=f();return(0,o.useEffect)((function(){if(l){var e=n();return c(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),p=function(e){var t=(0,o.useState)(e.matches),n=t[0],r=t[1];return(0,o.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(l),h=f();return(0,o.useEffect)((function(){h&&n&&n(p)}),[p]),(0,o.useEffect)((function(){return function(){l&&l.dispose()}}),[]),p}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var D=$.exports=E(o);const _={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},A=e=>Object.keys(_).reduce(((t,n)=>{const r=_[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),C=A("max-width"),H=(A("min-width"),_);var k=Array.isArray,T="object"==typeof B&&B&&B.Object===Object&&B,P="object"==typeof self&&self&&self.Object===Object&&self,R=T||P||Function("return this")(),z=R.Symbol,I=z,W=Object.prototype,L=W.hasOwnProperty,M=W.toString,N=I?I.toStringTag:void 0;var V=function(e){var t=L.call(e,N),n=e[N];try{e[N]=void 0;var r=!0}catch(e){}var o=M.call(e);return r&&(t?e[N]=n:delete e[N]),o},q=Object.prototype.toString;var Q=V,G=function(e){return q.call(e)},X=z?z.toStringTag:void 0;var U=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":X&&X in Object(e)?Q(e):G(e)};var Y=U,J=function(e){return null!=e&&"object"==typeof e};var Z=function(e){return"symbol"==typeof e||J(e)&&"[object Symbol]"==Y(e)},K=k,ee=Z,te=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ne=/^\w*$/;var re=function(e,t){if(K(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ee(e))||(ne.test(e)||!te.test(e)||null!=t&&e in Object(t))};var oe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ie=U,ae=oe;var ce,le=function(e){if(!ae(e))return!1;var t=ie(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ue=R["__core-js_shared__"],se=(ce=/[^.]+$/.exec(ue&&ue.keys&&ue.keys.IE_PROTO||""))?"Symbol(src)_1."+ce:"";var fe=function(e){return!!se&&se in e},de=Function.prototype.toString;var pe=le,he=fe,ye=oe,ge=function(e){if(null!=e){try{return de.call(e)}catch(e){}try{return e+""}catch(e){}}return""},me=/^\[object .+?Constructor\]$/,ve=Function.prototype,be=Object.prototype,Fe=ve.toString,Se=be.hasOwnProperty,we=RegExp("^"+Fe.call(Se).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var xe=function(e){return!(!ye(e)||he(e))&&(pe(e)?we:me).test(ge(e))},Oe=function(e,t){return null==e?void 0:e[t]};var Be=function(e,t){var n=Oe(e,t);return xe(n)?n:void 0},je=Be(Object,"create"),Ee=je;var $e=function(){this.__data__=Ee?Ee(null):{},this.size=0};var De=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},_e=je,Ae=Object.prototype.hasOwnProperty;var Ce=function(e){var t=this.__data__;if(_e){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ae.call(t,e)?t[e]:void 0},He=je,ke=Object.prototype.hasOwnProperty;var Te=je;var Pe=$e,Re=De,ze=Ce,Ie=function(e){var t=this.__data__;return He?void 0!==t[e]:ke.call(t,e)},We=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Te&&void 0===t?"__lodash_hash_undefined__":t,this};function Le(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Le.prototype.clear=Pe,Le.prototype.delete=Re,Le.prototype.get=ze,Le.prototype.has=Ie,Le.prototype.set=We;var Me=Le;var Ne=function(){this.__data__=[],this.size=0};var Ve=function(e,t){return e===t||e!=e&&t!=t};var qe=function(e,t){for(var n=e.length;n--;)if(Ve(e[n][0],t))return n;return-1},Qe=qe,Ge=Array.prototype.splice;var Xe=qe;var Ue=qe;var Ye=qe;var Je=Ne,Ze=function(e){var t=this.__data__,n=Qe(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ge.call(t,n,1),--this.size,!0)},Ke=function(e){var t=this.__data__,n=Xe(t,e);return n<0?void 0:t[n][1]},et=function(e){return Ue(this.__data__,e)>-1},tt=function(e,t){var n=this.__data__,r=Ye(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function nt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}nt.prototype.clear=Je,nt.prototype.delete=Ze,nt.prototype.get=Ke,nt.prototype.has=et,nt.prototype.set=tt;var rt=nt,ot=Be(R,"Map"),it=Me,at=rt,ct=ot;var lt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var ut=function(e,t){var n=e.__data__;return lt(t)?n["string"==typeof t?"string":"hash"]:n.map},st=ut;var ft=ut;var dt=ut;var pt=ut;var ht=function(){this.size=0,this.__data__={hash:new it,map:new(ct||at),string:new it}},yt=function(e){var t=st(this,e).delete(e);return this.size-=t?1:0,t},gt=function(e){return ft(this,e).get(e)},mt=function(e){return dt(this,e).has(e)},vt=function(e,t){var n=pt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function bt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}bt.prototype.clear=ht,bt.prototype.delete=yt,bt.prototype.get=gt,bt.prototype.has=mt,bt.prototype.set=vt;var Ft=bt;function St(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(St.Cache||Ft),n}St.Cache=Ft;var wt=St;var xt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ot=/\\(\\)?/g,Bt=function(e){var t=wt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(xt,(function(e,n,r,o){t.push(r?o.replace(Ot,"$1"):n||e)})),t}));var jt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},Et=k,$t=Z,Dt=z?z.prototype:void 0,_t=Dt?Dt.toString:void 0;var At=function e(t){if("string"==typeof t)return t;if(Et(t))return jt(t,e)+"";if($t(t))return _t?_t.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Ct=At;var Ht=k,kt=re,Tt=Bt,Pt=function(e){return null==e?"":Ct(e)};var Rt=Z;var zt=function(e,t){return Ht(e)?e:kt(e,t)?[e]:Tt(Pt(e))},It=function(e){if("string"==typeof e||Rt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Wt=function(e,t){for(var n=0,r=(t=zt(t,e)).length;null!=e&&n<r;)e=e[It(t[n++])];return n&&n==r?e:void 0};var Lt=j((function(e,t,n){var r=null==e?void 0:Wt(e,t);return void 0===r?n:r}));const Mt=(e,t,n)=>t?Lt(n,t)||Lt(e,t):n||e,Nt=(e,t)=>{const n=t||e.defaultValue;return Lt(e.collections,n)};var Vt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Vt||(Vt={}));const qt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Qt=e=>t=>{const n=t.theme,r=Nt(qt,n[Vt.colorScheme]);return n.options&&n.options.color?Mt(r,e,n.options.color):Mt(r,e)},Gt=(Qt("Brand.1"),Qt("Brand.2"),Qt("Brand.3"),Qt("Brand.4"),Qt("Brand.5"),Qt("Brand.6"),Qt("Primary")),Xt=(Qt("PrimaryDark"),Qt("Secondary")),Ut=(Qt("Accent.Light.1"),Qt("Accent.Light.2"),Qt("Accent.Light.3"),Qt("Accent.Light.4"),Qt("Accent.Light.5"),Qt("Accent.Light.6"),Qt("Accent.Dark.1"),Qt("Accent.Dark.2"),Qt("Accent.Dark.3"),{1:Qt("Neutral.1"),2:Qt("Neutral.2"),3:Qt("Neutral.3"),4:Qt("Neutral.4"),5:Qt("Neutral.5"),6:Qt("Neutral.6"),7:Qt("Neutral.7"),8:Qt("Neutral.8")});Qt("Validation.Green.Text"),Qt("Validation.Green.Icon"),Qt("Validation.Green.Border"),Qt("Validation.Green.Background"),Qt("Validation.Orange.Text"),Qt("Validation.Orange.Icon"),Qt("Validation.Orange.Border"),Qt("Validation.Orange.Background"),Qt("Validation.Orange.Badge"),Qt("Validation.Red.Text"),Qt("Validation.Red.Icon"),Qt("Validation.Red.Border"),Qt("Validation.Red.Background"),Qt("Validation.Blue.Text"),Qt("Validation.Blue.Icon"),Qt("Validation.Blue.Border"),Qt("Validation.Blue.Background"),Qt("Shadow.Accent"),Qt("Shadow.Red"),Qt("Shadow.Elevation");var Yt=R,Jt=/\s/;var Zt=function(e){for(var t=e.length;t--&&Jt.test(e.charAt(t)););return t},Kt=/^\s+/;var en=function(e){return e?e.slice(0,Zt(e)+1).replace(Kt,""):e},tn=oe,nn=Z,rn=/^[-+]0x[0-9a-f]+$/i,on=/^0b[01]+$/i,an=/^0o[0-7]+$/i,cn=parseInt;var ln=oe,un=function(){return Yt.Date.now()},sn=function(e){if("number"==typeof e)return e;if(nn(e))return NaN;if(tn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=tn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=en(e);var n=on.test(e);return n||an.test(e)?cn(e.slice(2),n?2:8):rn.test(e)?NaN:+e},fn=Math.max,dn=Math.min;var pn=function(e,t,n){var r,o,i,a,c,l,u=0,s=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,u=t,a=e.apply(i,n)}function h(e){var n=e-l;return void 0===l||n>=t||n<0||f&&e-u>=i}function y(){var e=un();if(h(e))return g(e);c=setTimeout(y,function(e){var n=t-(e-l);return f?dn(n,i-(e-u)):n}(e))}function g(e){return c=void 0,d&&r?p(e):(r=o=void 0,a)}function m(){var e=un(),n=h(e);if(r=arguments,o=this,l=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(y,t),s?p(e):a}(l);if(f)return clearTimeout(c),c=setTimeout(y,t),p(l)}return void 0===c&&(c=setTimeout(y,t)),a}return t=sn(t)||0,ln(n)&&(s=!!n.leading,i=(f="maxWait"in n)?fn(sn(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),m.cancel=function(){void 0!==c&&clearTimeout(c),u=0,r=l=o=c=void 0},m.flush=function(){return void 0===c?a:g(un())},m},hn=oe;var yn=j((function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return hn(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),pn(e,t,{leading:r,maxWait:t,trailing:o})})),gn=function(e,t){return gn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},gn(e,t)};var mn=function(){return mn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},mn.apply(this,arguments)};var vn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var bn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Fn="object"==typeof vn&&vn&&vn.Object===Object&&vn,Sn="object"==typeof self&&self&&self.Object===Object&&self,wn=Fn||Sn||Function("return this")(),xn=wn,On=function(){return xn.Date.now()},Bn=/\s/;var jn=function(e){for(var t=e.length;t--&&Bn.test(e.charAt(t)););return t},En=/^\s+/;var $n=function(e){return e?e.slice(0,jn(e)+1).replace(En,""):e},Dn=wn.Symbol,_n=Dn,An=Object.prototype,Cn=An.hasOwnProperty,Hn=An.toString,kn=_n?_n.toStringTag:void 0;var Tn=function(e){var t=Cn.call(e,kn),n=e[kn];try{e[kn]=void 0;var r=!0}catch(e){}var o=Hn.call(e);return r&&(t?e[kn]=n:delete e[kn]),o},Pn=Object.prototype.toString;var Rn=Tn,zn=function(e){return Pn.call(e)},In=Dn?Dn.toStringTag:void 0;var Wn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":In&&In in Object(e)?Rn(e):zn(e)},Ln=function(e){return null!=e&&"object"==typeof e};var Mn=$n,Nn=bn,Vn=function(e){return"symbol"==typeof e||Ln(e)&&"[object Symbol]"==Wn(e)},qn=/^[-+]0x[0-9a-f]+$/i,Qn=/^0b[01]+$/i,Gn=/^0o[0-7]+$/i,Xn=parseInt;var Un=bn,Yn=On,Jn=function(e){if("number"==typeof e)return e;if(Vn(e))return NaN;if(Nn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Nn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Mn(e);var n=Qn.test(e);return n||Gn.test(e)?Xn(e.slice(2),n?2:8):qn.test(e)?NaN:+e},Zn=Math.max,Kn=Math.min;var er=function(e,t,n){var r,o,i,a,c,l,u=0,s=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,u=t,a=e.apply(i,n)}function h(e){var n=e-l;return void 0===l||n>=t||n<0||f&&e-u>=i}function y(){var e=Yn();if(h(e))return g(e);c=setTimeout(y,function(e){var n=t-(e-l);return f?Kn(n,i-(e-u)):n}(e))}function g(e){return c=void 0,d&&r?p(e):(r=o=void 0,a)}function m(){var e=Yn(),n=h(e);if(r=arguments,o=this,l=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(y,t),s?p(e):a}(l);if(f)return clearTimeout(c),c=setTimeout(y,t),p(l)}return void 0===c&&(c=setTimeout(y,t)),a}return t=Jn(t)||0,Un(n)&&(s=!!n.leading,i=(f="maxWait"in n)?Zn(Jn(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),m.cancel=function(){void 0!==c&&clearTimeout(c),u=0,r=l=o=c=void 0},m.flush=function(){return void 0===c?a:g(Yn())},m},tr=er,nr=bn;var rr=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return nr(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),tr(e,t,{leading:r,maxWait:t,trailing:o})},or=function(e,t,n,r){switch(t){case"debounce":return er(e,n,r);case"throttle":return rr(e,n,r);default:return e}},ir=function(e){return"function"==typeof e},ar=function(){return"undefined"==typeof window},cr=function(e){return e instanceof Element||e instanceof HTMLDocument},lr=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&ir(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!ar()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(ar())return null;if(t)return document.querySelector(t);if(r&&cr(r))return r;if(n.targetRef&&cr(n.targetRef.current))return n.targetRef.current;var o=S(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,c=t.onResize;if(o||a){var l=lr(c,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!ar()&&l({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return ir(t)?"renderProp":ir(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,c=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=u(),n.observableElement=null,ar()||(n.resizeHandler=or(n.createResizeHandler,o,a,c),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}gn(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){ar()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,c=this.state,l={width:c.width,height:c.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(l,["targetRef"]);return s(e,u)}return s(e,l);case"childArray":return(e=o).map((function(e){return!!e&&s(e,l)}));default:return r.createElement(a,null)}}}(f);var ur=ar()?d:p;const sr=m.button`
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

        ${({$highlight:e})=>e&&v`
                background-color: ${Ut[7]};
            `}
    }
`,fr=o.forwardRef(((t,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,c=x(t,["children","focusHighlight","focusOutline","type"]);return e(sr,Object.assign({ref:n,$outline:i,$highlight:o,type:a},c,{children:r}))})),dr=m.div`
    position: relative;
    width: 100%;
`,pr=m.div`
    width: 4rem;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${e=>{let t;const n="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `,`\n\t\t\t${C.tablet} {\n\t\t\t\t${t}\n\t\t\t}\n\t\t`}};
`,hr=m.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,yr=m(fr)`
    display: none;

    ${C.tablet} {
        display: flex;
        height: 100%;
        width: 100%;
        padding: unset;
        align-items: center;

        ${e=>"left"===e.$position?v`
                    justify-content: left;
                    padding-left: 0.5rem;
                `:v`
                    justify-content: right;
                    padding-right: 0.5rem;
                `}

        svg {
            color: ${Ut[3]};
        }
    }
`,gr=h(((r,o)=>{var{children:i,fadeColor:l,fadePosition:u="both",showIndicator:s=!1,onResize:f}=r,p=x(r,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[h,g]=c("left"===u||"both"===u),[m,v]=c("right"===u||"both"===u),S=a(null),w=a(null),O=yn(B,50);function B(){const e=S.current,t=w.current;e&&t&&t.scrollWidth>e.offsetWidth?(v(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),g(t.scrollLeft>=1)):(v(!1),g(!1))}function j(){B(),f&&f({content:w.current,wrapper:S.current})}!function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,l=e.refreshOptions,u=e.handleWidth,s=void 0===u||u,f=e.handleHeight,d=void 0===f||f,p=e.targetRef,h=e.observerOptions,y=e.onResize,g=a(n),m=a(null),v=null!=p?p:m,b=a(),F=c({width:void 0,height:void 0}),S=F[0],w=F[1];ur((function(){if(!ar()){var e=lr(y,w,s,d);b.current=or((function(t){(s||d)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!g.current&&!ar()&&e({width:r,height:o}),g.current=!1}))}),r,i,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,h),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,i,l,s,d,y,h,v.current]),mn({ref:v},S)}({onResize:j,targetRef:S,refreshMode:"debounce",refreshRate:50}),y(o,(()=>({resize(){j()}}))),d((()=>{const e=w.current;return B(),e&&e.addEventListener("scroll",O),()=>{e&&e.removeEventListener("scroll",O)}}),[]);return t(dr,Object.assign({ref:S},p,{children:[e(hr,Object.assign({ref:w},{children:i})),(()=>{let r;return r=Array.isArray(l)&&l.length>0?{left:l,right:l}:l||{left:void 0,right:void 0},t(n,{children:[h&&e(pr,Object.assign({$backgroundColor:r.left,$position:"left",$showIndicator:s,"data-id":"left-fade"},{children:s&&e(yr,Object.assign({$position:"left","data-id":"left-fade-indicator-button"},{children:e(b,{})}))})),m&&e(pr,Object.assign({$backgroundColor:r.right,$position:"right",$showIndicator:s,"data-id":"right-fade"},{children:s&&e(yr,Object.assign({$position:"right","data-id":"right-fade-indicator-button"},{children:e(F,{})}))}))]})})()]}))})),mr={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},vr={collections:{base:{D1:{fontFamily:mr.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:mr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:mr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:mr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:mr.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:mr.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:mr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:mr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:mr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:mr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:mr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:mr.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:mr.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:mr.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},br=e=>t=>{const n=t.theme,r=Nt(vr,n[Vt.textStyleScheme]);return n.options&&n.options.textStyle?Mt(r,e,n.options.textStyle):Mt(r,e)},Fr={D1:{fontFamily:br("D1.fontFamily"),fontSize:br("D1.fontSize"),fontWeight:br("D1.fontWeight"),lineHeight:br("D1.lineHeight"),letterSpacing:br("D1.letterSpacing")},D2:{fontFamily:br("D2.fontFamily"),fontSize:br("D2.fontSize"),fontWeight:br("D2.fontWeight"),lineHeight:br("D2.lineHeight"),letterSpacing:br("D2.letterSpacing")},D3:{fontFamily:br("D3.fontFamily"),fontSize:br("D3.fontSize"),fontWeight:br("D3.fontWeight"),lineHeight:br("D3.lineHeight"),letterSpacing:br("D3.letterSpacing")},D4:{fontFamily:br("D4.fontFamily"),fontSize:br("D4.fontSize"),fontWeight:br("D4.fontWeight"),lineHeight:br("D4.lineHeight"),letterSpacing:br("D4.letterSpacing")},DBody:{fontFamily:br("DBody.fontFamily"),fontSize:br("DBody.fontSize"),fontWeight:br("DBody.fontWeight"),lineHeight:br("DBody.lineHeight"),letterSpacing:br("DBody.letterSpacing")},H1:{fontFamily:br("H1.fontFamily"),fontSize:br("H1.fontSize"),fontWeight:br("H1.fontWeight"),lineHeight:br("H1.lineHeight"),letterSpacing:br("H1.letterSpacing")},H2:{fontFamily:br("H2.fontFamily"),fontSize:br("H2.fontSize"),fontWeight:br("H2.fontWeight"),lineHeight:br("H2.lineHeight"),letterSpacing:br("H2.letterSpacing")},H3:{fontFamily:br("H3.fontFamily"),fontSize:br("H3.fontSize"),fontWeight:br("H3.fontWeight"),lineHeight:br("H3.lineHeight"),letterSpacing:br("H3.letterSpacing")},H4:{fontFamily:br("H4.fontFamily"),fontSize:br("H4.fontSize"),fontWeight:br("H4.fontWeight"),lineHeight:br("H4.lineHeight"),letterSpacing:br("H4.letterSpacing")},H5:{fontFamily:br("H5.fontFamily"),fontSize:br("H5.fontSize"),fontWeight:br("H5.fontWeight"),lineHeight:br("H5.lineHeight"),letterSpacing:br("H5.letterSpacing")},H6:{fontFamily:br("H6.fontFamily"),fontSize:br("H6.fontSize"),fontWeight:br("H6.fontWeight"),lineHeight:br("H6.lineHeight"),letterSpacing:br("H6.letterSpacing")},Body:{fontFamily:br("Body.fontFamily"),fontSize:br("Body.fontSize"),fontWeight:br("Body.fontWeight"),lineHeight:br("Body.lineHeight"),letterSpacing:br("Body.letterSpacing")},BodySmall:{fontFamily:br("BodySmall.fontFamily"),fontSize:br("BodySmall.fontSize"),fontWeight:br("BodySmall.fontWeight"),lineHeight:br("BodySmall.lineHeight"),letterSpacing:br("BodySmall.letterSpacing")},XSmall:{fontFamily:br("XSmall.fontFamily"),fontSize:br("XSmall.fontSize"),fontWeight:br("XSmall.fontWeight"),lineHeight:br("XSmall.lineHeight"),letterSpacing:br("XSmall.letterSpacing")}},Sr=e=>{switch(e){case 700:case"bold":return mr.Bold;case 600:case"semibold":return mr.Semibold;case 300:case"light":return mr.Light;case 400:case"regular":return mr.Regular;default:return""}},wr=(e,t)=>n=>{var r;const o=Fr[e].fontFamily(n),i=Fr[e].fontWeight(n);return Object.values(mr).includes(o)?v`
                font-family: ${Sr(t)||Sr(i)||o};
                font-weight: normal !important;
            `:v`
            font-family: ${o};
            font-weight: ${null!==(r=xr(t)||i)&&void 0!==r?r:"normal"};
        `},xr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Or=e=>{if(e>0)return v`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Br=(e,t,n=!1)=>r=>{const o=Fr[e],i=o.fontSize(r);return v`
            ${wr(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${v`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},jr=(e=!1,t=!1,n=void 0)=>t?v`
            display: block;
            ${Or(n)}
        `:e?v`
            display: inline;
        `:v`
            display: block;
            ${Or(n)}
        `;var Er;!function(e){e.D1=m.h1`
        ${e=>v`
                ${Br("D1",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${jr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=m.h1`
        ${e=>v`
                ${Br("D2",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${jr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=m.h1`
        ${e=>v`
                ${Br("D3",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${jr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=m.h1`
        ${e=>v`
                ${Br("D4",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${jr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=m.h1`
        ${e=>v`
                ${Br("DBody",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${jr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=m.h1`
        ${e=>v`
                ${Br("H1",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${jr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=m.h2`
        ${e=>v`
                ${Br("H2",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${jr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=m.h3`
        ${e=>v`
                ${Br("H3",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${jr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=m.h4`
        ${e=>v`
                ${Br("H4",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${jr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=m.h5`
        ${e=>v`
                ${Br("H5",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${jr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=m.h6`
        ${e=>v`
                ${Br("H6",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${jr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=m.p`
        ${e=>v`
                ${Br("Body",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${jr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=m.p`
        ${e=>v`
                ${Br("BodySmall",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${jr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=m.span`
        ${e=>v`
                ${Br("XSmall",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${jr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>_r(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>_r(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Er||(Er={}));const $r=m.a`
    ${e=>v`
            ${Br(e.textStyle,e.weight)}
            color: ${Gt};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Xt};

                svg {
                    color: ${Xt};
                }
            }
        `}
`,Dr=m(w)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,_r=n=>{var{external:r=!1,children:o}=n,i=x(n,["external","children"]);return t($r,Object.assign({},i,{children:[o,r&&e(Dr,{})]}))};var Ar;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ar||(Ar={}));const Cr=m.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;
`,Hr=m.li`
    display: flex;
    flex-shrink: 0;
    border-bottom: 4px solid ${Ut[5]};

    ${e=>{if(e.$active)return v`
                border-bottom: 4px solid ${Gt};
            `}}

    ${C.mobileL} {
        flex: 1;
        justify-content: center;
    }
`,kr=m.button`
    position: relative;
    padding: 1rem 1rem 1.25rem;
    border: none;
    background: none;
    cursor: pointer;
`,Tr=m(Er.Body)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${Ut[3]};
    opacity: 1;

    ${e=>{if(e.$active)return v`
                opacity: 0;
            `}}
`,Pr=m(Er.Body)`
    color: ${Gt};
    opacity: 0;
    ${e=>{if(e.$active)return v`
                opacity: 1;
            `}}
`,Rr=m(gr)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: 4px;
    }
`,zr=({controlledMode:n,"data-testid":r,onTabClick:o})=>{const{setCurrentActiveIndex:c,currentActiveIndex:l,tabLinks:u}=i(O),s=D.useMediaQuery({maxWidth:H.mobileL}),f=a(null),d=e=>t=>{t.preventDefault(),n||c(e),o&&o(u[e].title,e)},p=e=>s&&e.length>20?`${e.substring(0,20)}...`:e;return e(Rr,Object.assign({onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=H.tablet&&f&&(e.scrollLeft=f.current.getBoundingClientRect().left)},"data-testid":r},{children:e(Cr,Object.assign({role:"tablist"},{children:u.map(((n,o)=>{const i=l===o;return e(Hr,Object.assign({$active:i,ref:i?f:null},{children:t(kr,Object.assign({role:"tab",type:"button","aria-selected":i,onClick:d(o),"data-testid":`${r}-link-${o}`},{children:[e(Tr,Object.assign({$active:i,weight:"regular"},{children:p(n.title)})),e(Pr,Object.assign({$active:i,weight:"semibold","aria-hidden":"true"},{children:p(n.title)}))]}))}),o)}))}))}))},Ir=m.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,Wr=Object.assign((n=>{var{children:r,currentActive:o,initialActive:i=0,onTabClick:a,"data-testid":l}=n,u=x(n,["children","currentActive","initialActive","onTabClick","data-testid"]);const[f,p]=c(o||i),[h,y]=c([]);d((()=>{const e=g.toArray(r).filter(Boolean);m(e)}),[r]),d((()=>{"number"==typeof o&&p(o)}),[o]);const m=e=>{const t=e.map((e=>({title:e.props.title})));y(t)};return e(Ir,Object.assign({"data-testid":l},u,{children:t(O.Provider,Object.assign({value:{tabLinks:h,currentActiveIndex:f,setCurrentActiveIndex:p}},{children:[e(zr,{controlledMode:"number"==typeof o,onTabClick:a,"data-testid":`${l}-tabs`}),g.toArray(r).filter(Boolean).map(((e,t)=>s(e,{key:t,index:t})))]}))}))}),{Item:t=>{var{index:n,children:r}=t,o=x(t,["index","children"]);const{currentActiveIndex:a}=i(O);return a===n?e("div",Object.assign({role:"tabpanel"},o,{children:r})):null}});export{Wr as Tab};
//# sourceMappingURL=index.js.map
