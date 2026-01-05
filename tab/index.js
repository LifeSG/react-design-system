import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import o,{useContext as i,useRef as a,useState as l,isValidElement as c,createRef as u,cloneElement as s,PureComponent as f,useEffect as d,useLayoutEffect as p,forwardRef as h,useImperativeHandle as g,useMemo as y,Children as m}from"react";import v,{css as b}from"styled-components";import{ChevronLeftIcon as F}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as S}from"@lifesg/react-icons/chevron-right";import{findDOMNode as B}from"react-dom";import{ExternalIcon as O}from"@lifesg/react-icons/external";function w(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;const x=o.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}});var D="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function E(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var j,$={exports:{}};j=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return l(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var o=e.expressions.every((function(e){var n=e.feature,r=e.modifier,o=e.value,i=t[n];if(!i)return!1;switch(n){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=s(o),i=s(i);break;case"resolution":o=u(o),i=u(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=c(o),i=c(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(r){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!n||!o&&n}))},t.parse=l;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function l(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),i=t[1],a=t[2],l=t[3]||"",c={};return c.inverse=!!i&&"not"===i.toLowerCase(),c.type=a?a.toLowerCase():"all",l=l.match(/\([^\)]+\)/g)||[],c.expressions=l.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(o);return{modifier:n[1],feature:n[2],value:t[2]}})),c}))}function c(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function u(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function s(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=/[A-Z]/g,o=/^ms-/,i={};function a(e){return"-"+e.toLowerCase()}const l=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(r,a);return i[e]=o.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,t,n)=>{var r=n(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,o="undefined"!=typeof window?window.matchMedia:null;function i(e,t,n){var i=this;if(o&&!n){var a=o.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(l)}else this.matches=r(e,t),this.media=e;function l(e){i.matches=e.matches,i.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(l)}}e.exports=function(e,t,n){return new i(e,t,n)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(l[u]=i[u]);if(t){a=t(i);for(var s=0;s<a.length;s++)r.call(i,a[s])&&(l[a[s]]=i[a[s]])}}return l}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,n)=>{var r,o=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function l(e,t,n,l,c){for(var u in e)if(a(e,u)){var s;try{if("function"!=typeof e[u]){var f=Error((l||"React class")+": "+n+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw f.name="Invariant Violation",f}s=e[u](t,u,l,n,null,o)}catch(e){s=e}if(!s||s instanceof Error||r((l||"React class")+": type specification of "+n+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof s+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),s instanceof Error&&!(s.message in i)){i[s.message]=!0;var d=c?c():"";r("Failed "+n+" type: "+s.message+(null!=d?d:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},l.resetWarningCache=function(){i={}},e.exports=l},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,n)=>{var r,o=n(/*! react-is */"./node_modules/react-is/index.js"),i=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),l=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),c=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function u(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,s="<<anonymous>>",f={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:h(u),arrayOf:function(e){return h((function(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var l=t[n];if(!Array.isArray(l))return new p("Invalid "+o+" `"+i+"` of type `"+v(l)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<l.length;c++){var u=e(l,c,r,o,i+"["+c+"]",a);if(u instanceof Error)return u}return null}))},element:h((function(t,n,r,o,i){var a=t[n];return e(a)?null:new p("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:h((function(e,t,n,r,i){var a=e[t];return o.isValidElementType(a)?null:new p("Invalid "+r+" `"+i+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return h((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||s;return new p("Invalid "+o+" `"+i+"` of type `"+((l=t[n]).constructor&&l.constructor.name?l.constructor.name:s)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var l;return null}))},node:h((function(e,t,n,r,o){return m(e[t])?null:new p("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return h((function(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],u=v(c);if("object"!==u)return new p("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var s in c)if(l(c,s)){var f=e(c,s,r,o,i+"."+s,a);if(f instanceof Error)return f}return null}))},oneOf:function(e){return Array.isArray(e)?h((function(t,n,r,o,i){for(var a=t[n],l=0;l<e.length;l++)if(d(a,e[l]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===b(t)?String(t):t}));return new p("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+c+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),u)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),u;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+F(n)+" at index "+t+"."),u}return h((function(t,n,r,o,i){for(var c=[],u=0;u<e.length;u++){var s=(0,e[u])(t,n,r,o,i,a);if(null==s)return null;s.data&&l(s.data,"expectedType")&&c.push(s.data.expectedType)}return new p("Invalid "+o+" `"+i+"` supplied to `"+r+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return h((function(t,n,r,o,i){var l=t[n],c=v(l);if("object"!==c)return new p("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var u in e){var s=e[u];if("function"!=typeof s)return y(r,o,i,u,b(s));var f=s(l,u,r,o,i+"."+u,a);if(f)return f}return null}))},exact:function(e){return h((function(t,n,r,o,c){var u=t[n],s=v(u);if("object"!==s)return new p("Invalid "+o+" `"+c+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var f=i({},t[n],e);for(var d in f){var h=e[d];if(l(e,d)&&"function"!=typeof h)return y(r,o,c,d,b(h));if(!h)return new p("Invalid "+o+" `"+c+"` key `"+d+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=h(u,d,r,o,c+"."+d,a);if(g)return g}return null}))}};function d(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function h(e){var n={},o=0;function i(i,l,c,u,f,d,h){if(u=u||s,d=d||c,h!==a){if(t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var y=u+":"+c;!n[y]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[y]=!0,o++)}}return null==l[c]?i?null===l[c]?new p("The "+f+" `"+d+"` is marked as required in `"+u+"`, but its value is `null`."):new p("The "+f+" `"+d+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(l,c,u,f,d)}var l=i.bind(null,!1);return l.isRequired=i.bind(null,!0),l}function g(e){return h((function(t,n,r,o,i,a){var l=t[n];return v(l)!==e?new p("Invalid "+o+" `"+i+"` of type `"+b(l)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,o){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function m(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(m);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!m(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!m(a[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function b(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function F(e){var t=b(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,f.checkPropTypes=c,f.resetWarningCache=c.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,l=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function F(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case u:case s:case o:case a:case i:case d:return p;default:var y=p&&p.$$typeof;switch(y){case c:case f:case g:case h:case l:return y;default:return t}}case r:return t}}}var S=u,B=s,O=c,w=l,x=n,D=f,E=o,j=g,$=h,H=r,_=a,k=i,A=d,C=!1;function z(e){return F(e)===s}t.AsyncMode=S,t.ConcurrentMode=B,t.ContextConsumer=O,t.ContextProvider=w,t.Element=x,t.ForwardRef=D,t.Fragment=E,t.Lazy=j,t.Memo=$,t.Portal=H,t.Profiler=_,t.StrictMode=k,t.Suspense=A,t.isAsyncMode=function(e){return C||(C=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),z(e)||F(e)===u},t.isConcurrentMode=z,t.isContextConsumer=function(e){return F(e)===c},t.isContextProvider=function(e){return F(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return F(e)===f},t.isFragment=function(e){return F(e)===o},t.isLazy=function(e){return F(e)===g},t.isMemo=function(e){return F(e)===h},t.isPortal=function(e){return F(e)===r},t.isProfiler=function(e){return F(e)===a},t.isStrictMode=function(e){return F(e)===i},t.isSuspense=function(e){return F(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===s||e===a||e===i||e===d||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===l||e.$$typeof===c||e.$$typeof===f||e.$$typeof===m||e.$$typeof===v||e.$$typeof===b||e.$$typeof===y)},t.typeOf=F}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,t,n)=>{e.exports=n(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,t,n)=>{function r(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),o=n.length;if(r.length!==o)return!1;for(var i=0;i<o;i++){var a=n[i];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}n.r(t),n.d(t,{shallowEqualArrays:()=>o,shallowEqualObjects:()=>r})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,n=e.device,o=e.onChange,a=r(e,["children","device","onChange"]),l=(0,i.default)(a,n,o);return"function"==typeof t?t(l):l?t:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=(0,n(/*! react */"react").createContext)(void 0);t.default=r},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=r(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=o.default;var i=r(n(/*! ./Component */"./src/Component.ts"));t.default=i.default;var a=r(n(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=a.default;var l=r(n(/*! ./Context */"./src/Context.ts"));t.Context=l.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(/*! prop-types */"./node_modules/prop-types/index.js")),l=a.default.oneOfType([a.default.string,a.default.number]),c={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},u={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:l,deviceHeight:l,width:l,deviceWidth:l,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:l,type:Object.keys(c)},s=o(u,["type"]),f=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:l,maxHeight:l,minDeviceHeight:l,maxDeviceHeight:l,minWidth:l,maxWidth:l,minDeviceWidth:l,maxDeviceWidth:l,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:l,maxResolution:l},s),d=r(r({},c),f);t.default={all:d,types:c,matchers:u,features:f}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,o.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(/*! react */"react"),i=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),l=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),c=r(n(/*! ./toQuery */"./src/toQuery.ts")),u=r(n(/*! ./Context */"./src/Context.ts")),s=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},f=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},d=function(e){var t=function(){return function(e){return e.query||(0,c.default)(e)}(e)},n=(0,o.useState)(t),r=n[0],i=n[1];return(0,o.useEffect)((function(){var e=t();r!==e&&i(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,o.useContext)(u.default),n=function(){return s(e)||s(t)},r=(0,o.useState)(n),i=r[0],a=r[1];return(0,o.useEffect)((function(){var e=n();(0,l.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=d(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var c=function(e,t){var n=function(){return(0,i.default)(e,t||{},!!t)},r=(0,o.useState)(n),a=r[0],l=r[1],c=f();return(0,o.useEffect)((function(){if(c){var e=n();return l(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),p=function(e){var t=(0,o.useState)(e.matches),n=t[0],r=t[1];return(0,o.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(c),h=f();return(0,o.useEffect)((function(){h&&n&&n(p)}),[p]),(0,o.useEffect)((function(){return function(){c&&c.dispose()}}),[]),p}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var H=$.exports=j(o);const _={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},k=e=>Object.keys(_).reduce(((t,n)=>{const r=_[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),A=k("max-width"),C=(k("min-width"),_);var z=Array.isArray,P="object"==typeof D&&D&&D.Object===Object&&D,T="object"==typeof self&&self&&self.Object===Object&&self,R=P||T||Function("return this")(),W=R.Symbol,I=W,V=Object.prototype,L=V.hasOwnProperty,M=V.toString,N=I?I.toStringTag:void 0;var J=function(e){var t=L.call(e,N),n=e[N];try{e[N]=void 0;var r=!0}catch(e){}var o=M.call(e);return r&&(t?e[N]=n:delete e[N]),o},q=Object.prototype.toString;var Q=J,X=function(e){return q.call(e)},G=W?W.toStringTag:void 0;var U=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":G&&G in Object(e)?Q(e):X(e)};var Y=U,Z=function(e){return null!=e&&"object"==typeof e};var K=function(e){return"symbol"==typeof e||Z(e)&&"[object Symbol]"==Y(e)},ee=z,te=K,ne=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,re=/^\w*$/;var oe=function(e,t){if(ee(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!te(e))||(re.test(e)||!ne.test(e)||null!=t&&e in Object(t))};var ie=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ae=U,le=ie;var ce,ue=function(e){if(!le(e))return!1;var t=ae(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},se=R["__core-js_shared__"],fe=(ce=/[^.]+$/.exec(se&&se.keys&&se.keys.IE_PROTO||""))?"Symbol(src)_1."+ce:"";var de=function(e){return!!fe&&fe in e},pe=Function.prototype.toString;var he=ue,ge=de,ye=ie,me=function(e){if(null!=e){try{return pe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ve=/^\[object .+?Constructor\]$/,be=Function.prototype,Fe=Object.prototype,Se=be.toString,Be=Fe.hasOwnProperty,Oe=RegExp("^"+Se.call(Be).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var we=function(e){return!(!ye(e)||ge(e))&&(he(e)?Oe:ve).test(me(e))},xe=function(e,t){return null==e?void 0:e[t]};var De=function(e,t){var n=xe(e,t);return we(n)?n:void 0},Ee=De(Object,"create"),je=Ee;var $e=function(){this.__data__=je?je(null):{},this.size=0};var He=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},_e=Ee,ke=Object.prototype.hasOwnProperty;var Ae=function(e){var t=this.__data__;if(_e){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ke.call(t,e)?t[e]:void 0},Ce=Ee,ze=Object.prototype.hasOwnProperty;var Pe=Ee;var Te=$e,Re=He,We=Ae,Ie=function(e){var t=this.__data__;return Ce?void 0!==t[e]:ze.call(t,e)},Ve=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Pe&&void 0===t?"__lodash_hash_undefined__":t,this};function Le(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Le.prototype.clear=Te,Le.prototype.delete=Re,Le.prototype.get=We,Le.prototype.has=Ie,Le.prototype.set=Ve;var Me=Le;var Ne=function(){this.__data__=[],this.size=0};var Je=function(e,t){return e===t||e!=e&&t!=t};var qe=function(e,t){for(var n=e.length;n--;)if(Je(e[n][0],t))return n;return-1},Qe=qe,Xe=Array.prototype.splice;var Ge=qe;var Ue=qe;var Ye=qe;var Ze=Ne,Ke=function(e){var t=this.__data__,n=Qe(t,e);return!(n<0)&&(n==t.length-1?t.pop():Xe.call(t,n,1),--this.size,!0)},et=function(e){var t=this.__data__,n=Ge(t,e);return n<0?void 0:t[n][1]},tt=function(e){return Ue(this.__data__,e)>-1},nt=function(e,t){var n=this.__data__,r=Ye(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function rt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}rt.prototype.clear=Ze,rt.prototype.delete=Ke,rt.prototype.get=et,rt.prototype.has=tt,rt.prototype.set=nt;var ot=rt,it=De(R,"Map"),at=Me,lt=ot,ct=it;var ut=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var st=function(e,t){var n=e.__data__;return ut(t)?n["string"==typeof t?"string":"hash"]:n.map},ft=st;var dt=st;var pt=st;var ht=st;var gt=function(){this.size=0,this.__data__={hash:new at,map:new(ct||lt),string:new at}},yt=function(e){var t=ft(this,e).delete(e);return this.size-=t?1:0,t},mt=function(e){return dt(this,e).get(e)},vt=function(e){return pt(this,e).has(e)},bt=function(e,t){var n=ht(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ft(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ft.prototype.clear=gt,Ft.prototype.delete=yt,Ft.prototype.get=mt,Ft.prototype.has=vt,Ft.prototype.set=bt;var St=Ft;function Bt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Bt.Cache||St),n}Bt.Cache=St;var Ot=Bt;var wt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xt=/\\(\\)?/g,Dt=function(e){var t=Ot(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(wt,(function(e,n,r,o){t.push(r?o.replace(xt,"$1"):n||e)})),t}));var Et=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},jt=z,$t=K,Ht=W?W.prototype:void 0,_t=Ht?Ht.toString:void 0;var kt=function e(t){if("string"==typeof t)return t;if(jt(t))return Et(t,e)+"";if($t(t))return _t?_t.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},At=kt;var Ct=z,zt=oe,Pt=Dt,Tt=function(e){return null==e?"":At(e)};var Rt=K;var Wt=function(e,t){return Ct(e)?e:zt(e,t)?[e]:Pt(Tt(e))},It=function(e){if("string"==typeof e||Rt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Vt=function(e,t){for(var n=0,r=(t=Wt(t,e)).length;null!=e&&n<r;)e=e[It(t[n++])];return n&&n==r?e:void 0};var Lt=E((function(e,t,n){var r=null==e?void 0:Vt(e,t);return void 0===r?n:r}));const Mt=(e,t,n)=>t?Lt(n,t)||Lt(e,t):n||e,Nt=(e,t)=>{const n=t||e.defaultValue;return Lt(e.collections,n)};var Jt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Jt||(Jt={}));const qt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Qt=e=>t=>{const n=t.theme,r=Nt(qt,n[Jt.colorScheme]);return n.options&&n.options.color?Mt(r,e,n.options.color):Mt(r,e)},Xt=(Qt("Brand.1"),Qt("Brand.2"),Qt("Brand.3"),Qt("Brand.4"),Qt("Brand.5"),Qt("Brand.6"),Qt("Primary")),Gt=(Qt("PrimaryDark"),Qt("Secondary")),Ut=(Qt("Accent.Light.1"),Qt("Accent.Light.2"),Qt("Accent.Light.3"),Qt("Accent.Light.4"),Qt("Accent.Light.5"),Qt("Accent.Light.6"),Qt("Accent.Dark.1"),Qt("Accent.Dark.2"),Qt("Accent.Dark.3"),{1:Qt("Neutral.1"),2:Qt("Neutral.2"),3:Qt("Neutral.3"),4:Qt("Neutral.4"),5:Qt("Neutral.5"),6:Qt("Neutral.6"),7:Qt("Neutral.7"),8:Qt("Neutral.8")});Qt("Validation.Green.Text"),Qt("Validation.Green.Icon"),Qt("Validation.Green.Border"),Qt("Validation.Green.Background"),Qt("Validation.Orange.Text"),Qt("Validation.Orange.Icon"),Qt("Validation.Orange.Border"),Qt("Validation.Orange.Background"),Qt("Validation.Orange.Badge"),Qt("Validation.Red.Text"),Qt("Validation.Red.Icon"),Qt("Validation.Red.Border"),Qt("Validation.Red.Background"),Qt("Validation.Blue.Text"),Qt("Validation.Blue.Icon"),Qt("Validation.Blue.Border"),Qt("Validation.Blue.Background"),Qt("Shadow.Accent"),Qt("Shadow.Red"),Qt("Shadow.Elevation");var Yt=R,Zt=/\s/;var Kt=function(e){for(var t=e.length;t--&&Zt.test(e.charAt(t)););return t},en=/^\s+/;var tn=function(e){return e?e.slice(0,Kt(e)+1).replace(en,""):e},nn=ie,rn=K,on=/^[-+]0x[0-9a-f]+$/i,an=/^0b[01]+$/i,ln=/^0o[0-7]+$/i,cn=parseInt;var un=ie,sn=function(){return Yt.Date.now()},fn=function(e){if("number"==typeof e)return e;if(rn(e))return NaN;if(nn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=nn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=tn(e);var n=an.test(e);return n||ln.test(e)?cn(e.slice(2),n?2:8):on.test(e)?NaN:+e},dn=Math.max,pn=Math.min;var hn=function(e,t,n){var r,o,i,a,l,c,u=0,s=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,u=t,a=e.apply(i,n)}function h(e){var n=e-c;return void 0===c||n>=t||n<0||f&&e-u>=i}function g(){var e=sn();if(h(e))return y(e);l=setTimeout(g,function(e){var n=t-(e-c);return f?pn(n,i-(e-u)):n}(e))}function y(e){return l=void 0,d&&r?p(e):(r=o=void 0,a)}function m(){var e=sn(),n=h(e);if(r=arguments,o=this,c=e,n){if(void 0===l)return function(e){return u=e,l=setTimeout(g,t),s?p(e):a}(c);if(f)return clearTimeout(l),l=setTimeout(g,t),p(c)}return void 0===l&&(l=setTimeout(g,t)),a}return t=fn(t)||0,un(n)&&(s=!!n.leading,i=(f="maxWait"in n)?dn(fn(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),m.cancel=function(){void 0!==l&&clearTimeout(l),u=0,r=c=o=l=void 0},m.flush=function(){return void 0===l?a:y(sn())},m},gn=ie;var yn=E((function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return gn(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),hn(e,t,{leading:r,maxWait:t,trailing:o})})),mn=function(e,t){return mn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},mn(e,t)};var vn=function(){return vn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},vn.apply(this,arguments)};var bn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Fn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Sn="object"==typeof bn&&bn&&bn.Object===Object&&bn,Bn="object"==typeof self&&self&&self.Object===Object&&self,On=Sn||Bn||Function("return this")(),wn=On,xn=function(){return wn.Date.now()},Dn=/\s/;var En=function(e){for(var t=e.length;t--&&Dn.test(e.charAt(t)););return t},jn=/^\s+/;var $n=function(e){return e?e.slice(0,En(e)+1).replace(jn,""):e},Hn=On.Symbol,_n=Hn,kn=Object.prototype,An=kn.hasOwnProperty,Cn=kn.toString,zn=_n?_n.toStringTag:void 0;var Pn=function(e){var t=An.call(e,zn),n=e[zn];try{e[zn]=void 0;var r=!0}catch(e){}var o=Cn.call(e);return r&&(t?e[zn]=n:delete e[zn]),o},Tn=Object.prototype.toString;var Rn=Pn,Wn=function(e){return Tn.call(e)},In=Hn?Hn.toStringTag:void 0;var Vn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":In&&In in Object(e)?Rn(e):Wn(e)},Ln=function(e){return null!=e&&"object"==typeof e};var Mn=$n,Nn=Fn,Jn=function(e){return"symbol"==typeof e||Ln(e)&&"[object Symbol]"==Vn(e)},qn=/^[-+]0x[0-9a-f]+$/i,Qn=/^0b[01]+$/i,Xn=/^0o[0-7]+$/i,Gn=parseInt;var Un=Fn,Yn=xn,Zn=function(e){if("number"==typeof e)return e;if(Jn(e))return NaN;if(Nn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Nn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Mn(e);var n=Qn.test(e);return n||Xn.test(e)?Gn(e.slice(2),n?2:8):qn.test(e)?NaN:+e},Kn=Math.max,er=Math.min;var tr=function(e,t,n){var r,o,i,a,l,c,u=0,s=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,u=t,a=e.apply(i,n)}function h(e){var n=e-c;return void 0===c||n>=t||n<0||f&&e-u>=i}function g(){var e=Yn();if(h(e))return y(e);l=setTimeout(g,function(e){var n=t-(e-c);return f?er(n,i-(e-u)):n}(e))}function y(e){return l=void 0,d&&r?p(e):(r=o=void 0,a)}function m(){var e=Yn(),n=h(e);if(r=arguments,o=this,c=e,n){if(void 0===l)return function(e){return u=e,l=setTimeout(g,t),s?p(e):a}(c);if(f)return clearTimeout(l),l=setTimeout(g,t),p(c)}return void 0===l&&(l=setTimeout(g,t)),a}return t=Zn(t)||0,Un(n)&&(s=!!n.leading,i=(f="maxWait"in n)?Kn(Zn(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),m.cancel=function(){void 0!==l&&clearTimeout(l),u=0,r=c=o=l=void 0},m.flush=function(){return void 0===l?a:y(Yn())},m},nr=tr,rr=Fn;var or=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return rr(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),nr(e,t,{leading:r,maxWait:t,trailing:o})},ir=function(e,t,n,r){switch(t){case"debounce":return tr(e,n,r);case"throttle":return or(e,n,r);default:return e}},ar=function(e){return"function"==typeof e},lr=function(){return"undefined"==typeof window},cr=function(e){return e instanceof Element||e instanceof HTMLDocument},ur=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&ar(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!lr()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(lr())return null;if(t)return document.querySelector(t);if(r&&cr(r))return r;if(n.targetRef&&cr(n.targetRef.current))return n.targetRef.current;var o=B(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,l=t.onResize;if(o||a){var c=ur(l,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!lr()&&c({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return ar(t)?"renderProp":ar(r)?"childFunction":c(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,l=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=u(),n.observableElement=null,lr()||(n.resizeHandler=ir(n.createResizeHandler,o,a,l),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}mn(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){lr()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,l=this.state,c={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(c);case"childFunction":return(e=o)(c);case"child":if((e=o).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(c,["targetRef"]);return s(e,u)}return s(e,c);case"childArray":return(e=o).map((function(e){return!!e&&s(e,c)}));default:return r.createElement(a,null)}}}(f);var sr=lr()?d:p;const fr=v.button`
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

        ${({$highlight:e})=>e&&b`
                background-color: ${Ut[7]};
            `}
    }
`,dr=o.forwardRef(((t,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,l=w(t,["children","focusHighlight","focusOutline","type"]);return e(fr,Object.assign({ref:n,$outline:i,$highlight:o,type:a},l,{children:r}))})),pr=v.div`
    position: relative;
    width: 100%;
`,hr=v.div`
    width: 4rem;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${e=>{let t;const n="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `,`\n\t\t\t${A.tablet} {\n\t\t\t\t${t}\n\t\t\t}\n\t\t`}};
`,gr=v.div`
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
`,yr=v(dr)`
    display: none;

    ${A.tablet} {
        display: flex;
        height: 100%;
        width: 100%;
        padding: unset;
        align-items: center;

        ${e=>"left"===e.$position?b`
                    justify-content: left;
                    padding-left: 0.5rem;
                `:b`
                    justify-content: right;
                    padding-right: 0.5rem;
                `}

        svg {
            color: ${Ut[3]};
        }
    }
`,mr=h(((r,o)=>{var{children:i,fadeColor:c,fadePosition:u="both",showIndicator:s=!1,onResize:f}=r,p=w(r,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[h,y]=l("left"===u||"both"===u),[m,v]=l("right"===u||"both"===u),b=a(null),B=a(null),O=yn(x,50);function x(){const e=b.current,t=B.current;e&&t&&t.scrollWidth>e.offsetWidth?(v(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),y(t.scrollLeft>=1)):(v(!1),y(!1))}function D(){x(),f&&f({content:B.current,wrapper:b.current})}!function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,c=e.refreshOptions,u=e.handleWidth,s=void 0===u||u,f=e.handleHeight,d=void 0===f||f,p=e.targetRef,h=e.observerOptions,g=e.onResize,y=a(n),m=a(null),v=null!=p?p:m,b=a(),F=l({width:void 0,height:void 0}),S=F[0],B=F[1];sr((function(){if(!lr()){var e=ur(g,B,s,d);b.current=ir((function(t){(s||d)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!y.current&&!lr()&&e({width:r,height:o}),y.current=!1}))}),r,i,c);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,h),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,i,c,s,d,g,h,v.current]),vn({ref:v},S)}({onResize:D,targetRef:b,refreshMode:"debounce",refreshRate:50}),g(o,(()=>({resize(){D()}}))),d((()=>{const e=B.current;return x(),e&&e.addEventListener("scroll",O),()=>{e&&e.removeEventListener("scroll",O)}}),[]);return t(pr,Object.assign({ref:b},p,{children:[e(gr,Object.assign({ref:B},{children:i})),(()=>{let r;return r=Array.isArray(c)&&c.length>0?{left:c,right:c}:c||{left:void 0,right:void 0},t(n,{children:[h&&e(hr,Object.assign({$backgroundColor:r.left,$position:"left",$showIndicator:s,"data-id":"left-fade"},{children:s&&e(yr,Object.assign({$position:"left","data-id":"left-fade-indicator-button"},{children:e(F,{})}))})),m&&e(hr,Object.assign({$backgroundColor:r.right,$position:"right",$showIndicator:s,"data-id":"right-fade"},{children:s&&e(yr,Object.assign({$position:"right","data-id":"right-fade-indicator-button"},{children:e(S,{})}))}))]})})()]}))})),vr={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},br={D1:{fontFamily:vr.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:vr.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:vr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:vr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:vr.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:vr.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:vr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:vr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:vr.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:vr.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:vr.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:vr.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:vr.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:vr.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Fr={D1:{fontFamily:vr.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:vr.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:vr.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:vr.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:vr.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:vr.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:vr.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:vr.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:vr.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:vr.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:vr.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:vr.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:vr.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:vr.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},Sr={collections:{base:br,oneservice:{D1:{fontFamily:vr.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:vr.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:vr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:vr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:vr.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:vr.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:vr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:vr.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:vr.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:vr.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:vr.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:vr.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:vr.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:vr.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Fr},defaultValue:"base"},Br=e=>t=>{const n=t.theme,r=Nt(Sr,n[Jt.textStyleScheme]);return n.options&&n.options.textStyle?Mt(r,e,n.options.textStyle):Mt(r,e)},Or={D1:{fontFamily:Br("D1.fontFamily"),fontSize:Br("D1.fontSize"),fontWeight:Br("D1.fontWeight"),lineHeight:Br("D1.lineHeight"),letterSpacing:Br("D1.letterSpacing"),fontVariant:Br("D1.fontVariant")},D2:{fontFamily:Br("D2.fontFamily"),fontSize:Br("D2.fontSize"),fontWeight:Br("D2.fontWeight"),lineHeight:Br("D2.lineHeight"),letterSpacing:Br("D2.letterSpacing"),fontVariant:Br("D2.fontVariant")},D3:{fontFamily:Br("D3.fontFamily"),fontSize:Br("D3.fontSize"),fontWeight:Br("D3.fontWeight"),lineHeight:Br("D3.lineHeight"),letterSpacing:Br("D3.letterSpacing"),fontVariant:Br("D3.fontVariant")},D4:{fontFamily:Br("D4.fontFamily"),fontSize:Br("D4.fontSize"),fontWeight:Br("D4.fontWeight"),lineHeight:Br("D4.lineHeight"),letterSpacing:Br("D4.letterSpacing"),fontVariant:Br("D4.fontVariant")},DBody:{fontFamily:Br("DBody.fontFamily"),fontSize:Br("DBody.fontSize"),fontWeight:Br("DBody.fontWeight"),lineHeight:Br("DBody.lineHeight"),letterSpacing:Br("DBody.letterSpacing"),fontVariant:Br("DBody.fontVariant")},H1:{fontFamily:Br("H1.fontFamily"),fontSize:Br("H1.fontSize"),fontWeight:Br("H1.fontWeight"),lineHeight:Br("H1.lineHeight"),letterSpacing:Br("H1.letterSpacing"),fontVariant:Br("H1.fontVariant")},H2:{fontFamily:Br("H2.fontFamily"),fontSize:Br("H2.fontSize"),fontWeight:Br("H2.fontWeight"),lineHeight:Br("H2.lineHeight"),letterSpacing:Br("H2.letterSpacing"),fontVariant:Br("H2.fontVariant")},H3:{fontFamily:Br("H3.fontFamily"),fontSize:Br("H3.fontSize"),fontWeight:Br("H3.fontWeight"),lineHeight:Br("H3.lineHeight"),letterSpacing:Br("H3.letterSpacing"),fontVariant:Br("H3.fontVariant")},H4:{fontFamily:Br("H4.fontFamily"),fontSize:Br("H4.fontSize"),fontWeight:Br("H4.fontWeight"),lineHeight:Br("H4.lineHeight"),letterSpacing:Br("H4.letterSpacing"),fontVariant:Br("H4.fontVariant")},H5:{fontFamily:Br("H5.fontFamily"),fontSize:Br("H5.fontSize"),fontWeight:Br("H5.fontWeight"),lineHeight:Br("H5.lineHeight"),letterSpacing:Br("H5.letterSpacing"),fontVariant:Br("H5.fontVariant")},H6:{fontFamily:Br("H6.fontFamily"),fontSize:Br("H6.fontSize"),fontWeight:Br("H6.fontWeight"),lineHeight:Br("H6.lineHeight"),letterSpacing:Br("H6.letterSpacing"),fontVariant:Br("H6.fontVariant")},Body:{fontFamily:Br("Body.fontFamily"),fontSize:Br("Body.fontSize"),fontWeight:Br("Body.fontWeight"),lineHeight:Br("Body.lineHeight"),letterSpacing:Br("Body.letterSpacing"),fontVariant:Br("Body.fontVariant")},BodySmall:{fontFamily:Br("BodySmall.fontFamily"),fontSize:Br("BodySmall.fontSize"),fontWeight:Br("BodySmall.fontWeight"),lineHeight:Br("BodySmall.lineHeight"),letterSpacing:Br("BodySmall.letterSpacing"),fontVariant:Br("BodySmall.fontVariant")},XSmall:{fontFamily:Br("XSmall.fontFamily"),fontSize:Br("XSmall.fontSize"),fontWeight:Br("XSmall.fontWeight"),lineHeight:Br("XSmall.lineHeight"),letterSpacing:Br("XSmall.letterSpacing"),fontVariant:Br("XSmall.fontVariant")}},wr=[vr.OpenSans,vr.PlusJakartaSans],xr=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Dr=(e,t)=>n=>{var r;const o=Or[e].fontFamily(n),i=Or[e].fontWeight(n),a=wr.find((e=>Object.values(e).includes(o)));return a?b`
                font-family: ${xr(a,t)||xr(a,i)||o};
                font-weight: normal !important;
            `:b`
            font-family: ${o};
            font-weight: ${null!==(r=Er(t)||i)&&void 0!==r?r:"normal"};
        `},Er=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},jr=e=>{if(e>0)return b`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},$r=(e,t,n=!1)=>r=>{const o=Or[e],i=o.fontSize(r);return b`
            ${Dr(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            font-variant: ${o.fontVariant(r)||"normal"};
            ${b`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Hr=(e=!1,t=!1,n=void 0)=>t?b`
            display: block;
            ${jr(n)}
        `:e?b`
            display: inline;
        `:b`
            display: block;
            ${jr(n)}
        `;var _r;!function(e){e.D1=v.h1`
        ${e=>b`
                ${$r("D1",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=v.h1`
        ${e=>b`
                ${$r("D2",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=v.h1`
        ${e=>b`
                ${$r("D3",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=v.h1`
        ${e=>b`
                ${$r("D4",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=v.h1`
        ${e=>b`
                ${$r("DBody",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=v.h1`
        ${e=>b`
                ${$r("H1",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=v.h2`
        ${e=>b`
                ${$r("H2",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=v.h3`
        ${e=>b`
                ${$r("H3",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=v.h4`
        ${e=>b`
                ${$r("H4",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=v.h5`
        ${e=>b`
                ${$r("H5",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=v.h6`
        ${e=>b`
                ${$r("H6",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=v.p`
        ${e=>b`
                ${$r("Body",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=v.p`
        ${e=>b`
                ${$r("BodySmall",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=v.span`
        ${e=>b`
                ${$r("XSmall",e.weight,e.paragraph)}
                color: ${Ut[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Cr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Cr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(_r||(_r={}));const kr=v.a`
    ${e=>b`
            ${$r(e.textStyle,e.weight)}
            color: ${Xt};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Gt};

                svg {
                    color: ${Gt};
                }
            }
        `}
`,Ar=v(O)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Cr=n=>{var{external:r=!1,children:o}=n,i=w(n,["external","children"]);return t(kr,Object.assign({},i,{children:[o,r&&e(Ar,{})]}))};var zr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(zr||(zr={}));const Pr=v.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;

    ${e=>{if(e.$fullWidthIndicatorLine)return b`
                ::after {
                    content: "";
                    height: inherit;
                    flex-grow: 1;
                    /* follows the border in ChainItem */
                    border-bottom: 4px solid ${Ut[5]};
                }
            `}}
`,Tr=v.li`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    border-bottom: 4px solid ${Ut[5]};

    ${e=>{if(e.$width)return b`
                width: ${e.$width};
            `}}

    ${e=>{if(e.$active)return b`
                border-bottom: 4px solid ${Xt};
            `}}

    ${A.mobileL} {
        flex: 1;
        justify-content: center;
    }
`,Rr=v.button`
    position: relative;
    padding: 1rem 1rem 1.25rem;
    border: none;
    background: none;
    cursor: pointer;
`,Wr=v(_r.Body)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${Ut[3]};
    opacity: 1;

    ${e=>{if(e.$active)return b`
                opacity: 0;
            `}}
`,Ir=v(_r.Body)`
    color: ${Xt};
    opacity: 0;
    ${e=>{if(e.$active)return b`
                opacity: 1;
            `}}
`,Vr=v(mr)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: 4px;
    }
`,Lr=({controlledMode:n,"data-testid":r,onTabClick:o,fullWidthIndicatorLine:l})=>{const{setCurrentActiveIndex:c,currentActiveIndex:u,tabLinks:s}=i(x),f=H.useMediaQuery({maxWidth:C.mobileL}),d=a(null),p=e=>t=>{t.preventDefault(),n||c(e),o&&o(s[e].title,e)},h=e=>f&&e.length>20?`${e.substring(0,20)}...`:e;return e(Vr,Object.assign({onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=C.tablet&&d.current&&(e.scrollLeft=d.current.getBoundingClientRect().left)},"data-testid":r},{children:e(Pr,Object.assign({role:"tablist",$fullWidthIndicatorLine:l},{children:s.map(((n,o)=>{const i=u===o;return e(Tr,Object.assign({role:"none",$active:i,ref:i?d:null,$width:n.width},{children:t(Rr,Object.assign({role:"tab",type:"button","aria-selected":i,onClick:p(o),"data-testid":`${r}-link-${o}`},{children:[e(Wr,Object.assign({$active:i,weight:"regular"},{children:h(n.title)})),e(Ir,Object.assign({$active:i,weight:"semibold","aria-hidden":"true"},{children:h(n.title)}))]}))}),o)}))}))}))},Mr=v.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,Nr=Object.assign((n=>{var{children:r,currentActive:o,initialActive:i=0,onTabClick:a,"data-testid":c,fullWidthIndicatorLine:u}=n,f=w(n,["children","currentActive","initialActive","onTabClick","data-testid","fullWidthIndicatorLine"]);const[p,h]=l(o||i),g=y((()=>m.toArray(r).filter(Boolean).map((e=>({title:e.props.title,width:e.props.width})))),[r]);d((()=>{"number"==typeof o&&h(o)}),[o]);return e(Mr,Object.assign({"data-testid":c},f,{children:t(x.Provider,Object.assign({value:{tabLinks:g,currentActiveIndex:p,setCurrentActiveIndex:h}},{children:[e(Lr,{controlledMode:"number"==typeof o,onTabClick:a,"data-testid":`${c}-tabs`,fullWidthIndicatorLine:u}),m.toArray(r).filter(Boolean).map(((e,t)=>s(e,{key:t,index:t})))]}))}))}),{Item:t=>{var{index:n,children:r}=t,o=w(t,["index","children"]);const{currentActiveIndex:a}=i(x);return a===n?e("div",Object.assign({role:"tabpanel"},o,{children:r})):null}});export{Nr as Tab};
//# sourceMappingURL=index.js.map
