import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import o,{useContext as i,cloneElement as a,useRef as c,useState as l,isValidElement as u,createRef as s,PureComponent as f,useEffect as d,useLayoutEffect as p,forwardRef as h,useImperativeHandle as y,Children as g}from"react";import m,{css as v}from"styled-components";import{ChevronLeftIcon as b}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as F}from"@lifesg/react-icons/chevron-right";import{findDOMNode as S}from"react-dom";import{ExternalIcon as w}from"@lifesg/react-icons/external";function x(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}const O=o.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}});var j,B="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},$={exports:{}};j=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function F(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case u:case s:case o:case a:case i:case d:return p;default:var g=p&&p.$$typeof;switch(g){case l:case f:case y:case h:case c:return g;default:return t}}case r:return t}}}var S=u,w=s,x=l,O=c,j=n,B=f,$=o,_=y,E=h,D=r,H=a,A=i,k=d,C=!1;function T(e){return F(e)===s}t.AsyncMode=S,t.ConcurrentMode=w,t.ContextConsumer=x,t.ContextProvider=O,t.Element=j,t.ForwardRef=B,t.Fragment=$,t.Lazy=_,t.Memo=E,t.Portal=D,t.Profiler=H,t.StrictMode=A,t.Suspense=k,t.isAsyncMode=function(e){return C||(C=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),T(e)||F(e)===u},t.isConcurrentMode=T,t.isContextConsumer=function(e){return F(e)===l},t.isContextProvider=function(e){return F(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return F(e)===f},t.isFragment=function(e){return F(e)===o},t.isLazy=function(e){return F(e)===y},t.isMemo=function(e){return F(e)===h},t.isPortal=function(e){return F(e)===r},t.isProfiler=function(e){return F(e)===a},t.isStrictMode=function(e){return F(e)===i},t.isSuspense=function(e){return F(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===s||e===a||e===i||e===d||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===c||e.$$typeof===l||e.$$typeof===f||e.$$typeof===m||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=F}()},"./node_modules/react-is/index.js":
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
  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})(),$.exports=j(o);const _={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},E=e=>Object.keys(_).reduce(((t,n)=>{const r=_[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),D=E("max-width"),H=(E("min-width"),_);var A=Array.isArray,k="object"==typeof B&&B&&B.Object===Object&&B,C="object"==typeof self&&self&&self.Object===Object&&self,T=k||C||Function("return this")(),P=T.Symbol,R=P,z=Object.prototype,I=z.hasOwnProperty,W=z.toString,L=R?R.toStringTag:void 0;var M=function(e){var t=I.call(e,L),n=e[L];try{e[L]=void 0;var r=!0}catch(e){}var o=W.call(e);return r&&(t?e[L]=n:delete e[L]),o},N=Object.prototype.toString;var V=M,q=function(e){return N.call(e)},Q=P?P.toStringTag:void 0;var G=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Q&&Q in Object(e)?V(e):q(e)};var X=G,U=function(e){return null!=e&&"object"==typeof e};var Y=function(e){return"symbol"==typeof e||U(e)&&"[object Symbol]"==X(e)},J=A,Z=Y,K=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ee=/^\w*$/;var te=function(e,t){if(J(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Z(e))||(ee.test(e)||!K.test(e)||null!=t&&e in Object(t))};var ne=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},re=G,oe=ne;var ie,ae=function(e){if(!oe(e))return!1;var t=re(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ce=T["__core-js_shared__"],le=(ie=/[^.]+$/.exec(ce&&ce.keys&&ce.keys.IE_PROTO||""))?"Symbol(src)_1."+ie:"";var ue=function(e){return!!le&&le in e},se=Function.prototype.toString;var fe=ae,de=ue,pe=ne,he=function(e){if(null!=e){try{return se.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ye=/^\[object .+?Constructor\]$/,ge=Function.prototype,me=Object.prototype,ve=ge.toString,be=me.hasOwnProperty,Fe=RegExp("^"+ve.call(be).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Se=function(e){return!(!pe(e)||de(e))&&(fe(e)?Fe:ye).test(he(e))},we=function(e,t){return null==e?void 0:e[t]};var xe=function(e,t){var n=we(e,t);return Se(n)?n:void 0},Oe=xe(Object,"create"),je=Oe;var Be=function(){this.__data__=je?je(null):{},this.size=0};var $e=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},_e=Oe,Ee=Object.prototype.hasOwnProperty;var De=function(e){var t=this.__data__;if(_e){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ee.call(t,e)?t[e]:void 0},He=Oe,Ae=Object.prototype.hasOwnProperty;var ke=Oe;var Ce=Be,Te=$e,Pe=De,Re=function(e){var t=this.__data__;return He?void 0!==t[e]:Ae.call(t,e)},ze=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ke&&void 0===t?"__lodash_hash_undefined__":t,this};function Ie(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ie.prototype.clear=Ce,Ie.prototype.delete=Te,Ie.prototype.get=Pe,Ie.prototype.has=Re,Ie.prototype.set=ze;var We=Ie;var Le=function(){this.__data__=[],this.size=0};var Me=function(e,t){return e===t||e!=e&&t!=t};var Ne=function(e,t){for(var n=e.length;n--;)if(Me(e[n][0],t))return n;return-1},Ve=Ne,qe=Array.prototype.splice;var Qe=Ne;var Ge=Ne;var Xe=Ne;var Ue=Le,Ye=function(e){var t=this.__data__,n=Ve(t,e);return!(n<0)&&(n==t.length-1?t.pop():qe.call(t,n,1),--this.size,!0)},Je=function(e){var t=this.__data__,n=Qe(t,e);return n<0?void 0:t[n][1]},Ze=function(e){return Ge(this.__data__,e)>-1},Ke=function(e,t){var n=this.__data__,r=Xe(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}et.prototype.clear=Ue,et.prototype.delete=Ye,et.prototype.get=Je,et.prototype.has=Ze,et.prototype.set=Ke;var tt=et,nt=xe(T,"Map"),rt=We,ot=tt,it=nt;var at=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var ct=function(e,t){var n=e.__data__;return at(t)?n["string"==typeof t?"string":"hash"]:n.map},lt=ct;var ut=ct;var st=ct;var ft=ct;var dt=function(){this.size=0,this.__data__={hash:new rt,map:new(it||ot),string:new rt}},pt=function(e){var t=lt(this,e).delete(e);return this.size-=t?1:0,t},ht=function(e){return ut(this,e).get(e)},yt=function(e){return st(this,e).has(e)},gt=function(e,t){var n=ft(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function mt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}mt.prototype.clear=dt,mt.prototype.delete=pt,mt.prototype.get=ht,mt.prototype.has=yt,mt.prototype.set=gt;var vt=mt;function bt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(bt.Cache||vt),n}bt.Cache=vt;var Ft=bt;var St=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wt=/\\(\\)?/g,xt=function(e){var t=Ft(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(St,(function(e,n,r,o){t.push(r?o.replace(wt,"$1"):n||e)})),t}));var Ot=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},jt=A,Bt=Y,$t=P?P.prototype:void 0,_t=$t?$t.toString:void 0;var Et=function e(t){if("string"==typeof t)return t;if(jt(t))return Ot(t,e)+"";if(Bt(t))return _t?_t.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Dt=Et;var Ht=A,At=te,kt=xt,Ct=function(e){return null==e?"":Dt(e)};var Tt=Y;var Pt=function(e,t){return Ht(e)?e:At(e,t)?[e]:kt(Ct(e))},Rt=function(e){if("string"==typeof e||Tt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var zt=function(e,t){for(var n=0,r=(t=Pt(t,e)).length;null!=e&&n<r;)e=e[Rt(t[n++])];return n&&n==r?e:void 0};var It=function(e,t,n){var r=null==e?void 0:zt(e,t);return void 0===r?n:r};const Wt=(e,t,n)=>t?It(n,t)||It(e,t):n||e,Lt=(e,t)=>{const n=t||e.defaultValue;return It(e.collections,n)};var Mt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Mt||(Mt={}));const Nt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Vt=e=>t=>{const n=t.theme,r=Lt(Nt,n[Mt.colorScheme]);return n.options&&n.options.color?Wt(r,e,n.options.color):Wt(r,e)},qt=(Vt("Brand.1"),Vt("Brand.2"),Vt("Brand.3"),Vt("Brand.4"),Vt("Brand.5"),Vt("Brand.6"),Vt("Primary")),Qt=(Vt("PrimaryDark"),Vt("Secondary")),Gt=(Vt("Accent.Light.1"),Vt("Accent.Light.2"),Vt("Accent.Light.3"),Vt("Accent.Light.4"),Vt("Accent.Light.5"),Vt("Accent.Light.6"),Vt("Accent.Dark.1"),Vt("Accent.Dark.2"),Vt("Accent.Dark.3"),{1:Vt("Neutral.1"),2:Vt("Neutral.2"),3:Vt("Neutral.3"),4:Vt("Neutral.4"),5:Vt("Neutral.5"),6:Vt("Neutral.6"),7:Vt("Neutral.7"),8:Vt("Neutral.8")});Vt("Validation.Green.Text"),Vt("Validation.Green.Icon"),Vt("Validation.Green.Border"),Vt("Validation.Green.Background"),Vt("Validation.Orange.Text"),Vt("Validation.Orange.Icon"),Vt("Validation.Orange.Border"),Vt("Validation.Orange.Background"),Vt("Validation.Orange.Badge"),Vt("Validation.Red.Text"),Vt("Validation.Red.Icon"),Vt("Validation.Red.Border"),Vt("Validation.Red.Background"),Vt("Validation.Blue.Text"),Vt("Validation.Blue.Icon"),Vt("Validation.Blue.Border"),Vt("Validation.Blue.Background"),Vt("Shadow.Accent"),Vt("Shadow.Red"),Vt("Shadow.Elevation");var Xt=T,Ut=/\s/;var Yt=function(e){for(var t=e.length;t--&&Ut.test(e.charAt(t)););return t},Jt=/^\s+/;var Zt=function(e){return e?e.slice(0,Yt(e)+1).replace(Jt,""):e},Kt=ne,en=Y,tn=/^[-+]0x[0-9a-f]+$/i,nn=/^0b[01]+$/i,rn=/^0o[0-7]+$/i,on=parseInt;var an=ne,cn=function(){return Xt.Date.now()},ln=function(e){if("number"==typeof e)return e;if(en(e))return NaN;if(Kt(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Kt(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Zt(e);var n=nn.test(e);return n||rn.test(e)?on(e.slice(2),n?2:8):tn.test(e)?NaN:+e},un=Math.max,sn=Math.min;var fn=function(e,t,n){var r,o,i,a,c,l,u=0,s=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,u=t,a=e.apply(i,n)}function h(e){var n=e-l;return void 0===l||n>=t||n<0||f&&e-u>=i}function y(){var e=cn();if(h(e))return g(e);c=setTimeout(y,function(e){var n=t-(e-l);return f?sn(n,i-(e-u)):n}(e))}function g(e){return c=void 0,d&&r?p(e):(r=o=void 0,a)}function m(){var e=cn(),n=h(e);if(r=arguments,o=this,l=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(y,t),s?p(e):a}(l);if(f)return clearTimeout(c),c=setTimeout(y,t),p(l)}return void 0===c&&(c=setTimeout(y,t)),a}return t=ln(t)||0,an(n)&&(s=!!n.leading,i=(f="maxWait"in n)?un(ln(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),m.cancel=function(){void 0!==c&&clearTimeout(c),u=0,r=l=o=c=void 0},m.flush=function(){return void 0===c?a:g(cn())},m},dn=ne;var pn=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return dn(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),fn(e,t,{leading:r,maxWait:t,trailing:o})},hn=function(e,t){return hn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},hn(e,t)};var yn=function(){return yn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},yn.apply(this,arguments)};var gn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var mn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},vn="object"==typeof gn&&gn&&gn.Object===Object&&gn,bn="object"==typeof self&&self&&self.Object===Object&&self,Fn=vn||bn||Function("return this")(),Sn=Fn,wn=function(){return Sn.Date.now()},xn=/\s/;var On=function(e){for(var t=e.length;t--&&xn.test(e.charAt(t)););return t},jn=/^\s+/;var Bn=function(e){return e?e.slice(0,On(e)+1).replace(jn,""):e},$n=Fn.Symbol,_n=$n,En=Object.prototype,Dn=En.hasOwnProperty,Hn=En.toString,An=_n?_n.toStringTag:void 0;var kn=function(e){var t=Dn.call(e,An),n=e[An];try{e[An]=void 0;var r=!0}catch(e){}var o=Hn.call(e);return r&&(t?e[An]=n:delete e[An]),o},Cn=Object.prototype.toString;var Tn=kn,Pn=function(e){return Cn.call(e)},Rn=$n?$n.toStringTag:void 0;var zn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Rn&&Rn in Object(e)?Tn(e):Pn(e)},In=function(e){return null!=e&&"object"==typeof e};var Wn=Bn,Ln=mn,Mn=function(e){return"symbol"==typeof e||In(e)&&"[object Symbol]"==zn(e)},Nn=/^[-+]0x[0-9a-f]+$/i,Vn=/^0b[01]+$/i,qn=/^0o[0-7]+$/i,Qn=parseInt;var Gn=mn,Xn=wn,Un=function(e){if("number"==typeof e)return e;if(Mn(e))return NaN;if(Ln(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ln(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Wn(e);var n=Vn.test(e);return n||qn.test(e)?Qn(e.slice(2),n?2:8):Nn.test(e)?NaN:+e},Yn=Math.max,Jn=Math.min;var Zn=function(e,t,n){var r,o,i,a,c,l,u=0,s=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,u=t,a=e.apply(i,n)}function h(e){var n=e-l;return void 0===l||n>=t||n<0||f&&e-u>=i}function y(){var e=Xn();if(h(e))return g(e);c=setTimeout(y,function(e){var n=t-(e-l);return f?Jn(n,i-(e-u)):n}(e))}function g(e){return c=void 0,d&&r?p(e):(r=o=void 0,a)}function m(){var e=Xn(),n=h(e);if(r=arguments,o=this,l=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(y,t),s?p(e):a}(l);if(f)return clearTimeout(c),c=setTimeout(y,t),p(l)}return void 0===c&&(c=setTimeout(y,t)),a}return t=Un(t)||0,Gn(n)&&(s=!!n.leading,i=(f="maxWait"in n)?Yn(Un(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),m.cancel=function(){void 0!==c&&clearTimeout(c),u=0,r=l=o=c=void 0},m.flush=function(){return void 0===c?a:g(Xn())},m},Kn=Zn,er=mn;var tr=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return er(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Kn(e,t,{leading:r,maxWait:t,trailing:o})},nr=function(e,t,n,r){switch(t){case"debounce":return Zn(e,n,r);case"throttle":return tr(e,n,r);default:return e}},rr=function(e){return"function"==typeof e},or=function(){return"undefined"==typeof window},ir=function(e){return e instanceof Element||e instanceof HTMLDocument},ar=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&rr(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!or()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(or())return null;if(t)return document.querySelector(t);if(r&&ir(r))return r;if(n.targetRef&&ir(n.targetRef.current))return n.targetRef.current;var o=S(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,c=t.onResize;if(o||a){var l=ar(c,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!or()&&l({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return rr(t)?"renderProp":rr(r)?"childFunction":u(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,c=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=s(),n.observableElement=null,or()||(n.resizeHandler=nr(n.createResizeHandler,o,a,c),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}hn(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){or()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,o=t.children,i=t.nodeType,c=void 0===i?"div":i,l=this.state,u={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(u);case"childFunction":return(e=o)(u);case"child":if((e=o).type&&"string"==typeof e.type){var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(u,["targetRef"]);return a(e,s)}return a(e,u);case"childArray":return(e=o).map((function(e){return!!e&&a(e,u)}));default:return r.createElement(c,null)}}}(f);var cr=or()?d:p;const lr=m.button`
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
                background-color: ${Gt[7]};
            `}
    }
`,ur=o.forwardRef(((t,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,c=x(t,["children","focusHighlight","focusOutline","type"]);return e(lr,Object.assign({ref:n,$outline:i,$highlight:o,type:a},c,{children:r}))})),sr=m.div`
    position: relative;
    width: 100%;
`,fr=m.div`
    width: 4rem;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${e=>{let t;const n="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `,`\n\t\t\t${D.tablet} {\n\t\t\t\t${t}\n\t\t\t}\n\t\t`}};
`,dr=m.div`
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
`,pr=m(ur)`
    display: none;

    ${D.tablet} {
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
            color: ${Gt[3]};
        }
    }
`,hr=h(((r,o)=>{var{children:i,fadeColor:a,fadePosition:u="both",showIndicator:s=!1,onResize:f}=r,p=x(r,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[h,g]=l("left"===u||"both"===u),[m,v]=l("right"===u||"both"===u),S=c(null),w=c(null),O=pn(j,50);function j(){const e=S.current,t=w.current;e&&t&&t.scrollWidth>e.offsetWidth?(v(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),g(t.scrollLeft>=1)):(v(!1),g(!1))}function B(){j(),f&&f({content:w.current,wrapper:S.current})}!function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,a=e.refreshOptions,u=e.handleWidth,s=void 0===u||u,f=e.handleHeight,d=void 0===f||f,p=e.targetRef,h=e.observerOptions,y=e.onResize,g=c(n),m=c(null),v=null!=p?p:m,b=c(),F=l({width:void 0,height:void 0}),S=F[0],w=F[1];cr((function(){if(!or()){var e=ar(y,w,s,d);b.current=nr((function(t){(s||d)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!g.current&&!or()&&e({width:r,height:o}),g.current=!1}))}),r,i,a);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,h),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,i,a,s,d,y,h,v.current]),yn({ref:v},S)}({onResize:B,targetRef:S,refreshMode:"debounce",refreshRate:50}),y(o,(()=>({resize(){B()}}))),d((()=>{const e=w.current;return j(),e&&e.addEventListener("scroll",O),()=>{e&&e.removeEventListener("scroll",O)}}),[]);return t(sr,Object.assign({ref:S},p,{children:[e(dr,Object.assign({ref:w},{children:i})),(()=>{let r;return r=Array.isArray(a)&&a.length>0?{left:a,right:a}:a||{left:void 0,right:void 0},t(n,{children:[h&&e(fr,Object.assign({$backgroundColor:r.left,$position:"left",$showIndicator:s,"data-id":"left-fade"},{children:s&&e(pr,Object.assign({$position:"left","data-id":"left-fade-indicator-button"},{children:e(b,{})}))})),m&&e(fr,Object.assign({$backgroundColor:r.right,$position:"right",$showIndicator:s,"data-id":"right-fade"},{children:s&&e(pr,Object.assign({$position:"right","data-id":"right-fade-indicator-button"},{children:e(F,{})}))}))]})})()]}))})),yr={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},gr={collections:{base:{D1:{fontFamily:yr.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:yr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:yr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:yr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:yr.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:yr.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:yr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:yr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:yr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:yr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:yr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:yr.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:yr.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:yr.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},mr=e=>t=>{const n=t.theme,r=Lt(gr,n[Mt.textStyleScheme]);return n.options&&n.options.textStyle?Wt(r,e,n.options.textStyle):Wt(r,e)},vr={D1:{fontFamily:mr("D1.fontFamily"),fontSize:mr("D1.fontSize"),fontWeight:mr("D1.fontWeight"),lineHeight:mr("D1.lineHeight"),letterSpacing:mr("D1.letterSpacing")},D2:{fontFamily:mr("D2.fontFamily"),fontSize:mr("D2.fontSize"),fontWeight:mr("D2.fontWeight"),lineHeight:mr("D2.lineHeight"),letterSpacing:mr("D2.letterSpacing")},D3:{fontFamily:mr("D3.fontFamily"),fontSize:mr("D3.fontSize"),fontWeight:mr("D3.fontWeight"),lineHeight:mr("D3.lineHeight"),letterSpacing:mr("D3.letterSpacing")},D4:{fontFamily:mr("D4.fontFamily"),fontSize:mr("D4.fontSize"),fontWeight:mr("D4.fontWeight"),lineHeight:mr("D4.lineHeight"),letterSpacing:mr("D4.letterSpacing")},DBody:{fontFamily:mr("DBody.fontFamily"),fontSize:mr("DBody.fontSize"),fontWeight:mr("DBody.fontWeight"),lineHeight:mr("DBody.lineHeight"),letterSpacing:mr("DBody.letterSpacing")},H1:{fontFamily:mr("H1.fontFamily"),fontSize:mr("H1.fontSize"),fontWeight:mr("H1.fontWeight"),lineHeight:mr("H1.lineHeight"),letterSpacing:mr("H1.letterSpacing")},H2:{fontFamily:mr("H2.fontFamily"),fontSize:mr("H2.fontSize"),fontWeight:mr("H2.fontWeight"),lineHeight:mr("H2.lineHeight"),letterSpacing:mr("H2.letterSpacing")},H3:{fontFamily:mr("H3.fontFamily"),fontSize:mr("H3.fontSize"),fontWeight:mr("H3.fontWeight"),lineHeight:mr("H3.lineHeight"),letterSpacing:mr("H3.letterSpacing")},H4:{fontFamily:mr("H4.fontFamily"),fontSize:mr("H4.fontSize"),fontWeight:mr("H4.fontWeight"),lineHeight:mr("H4.lineHeight"),letterSpacing:mr("H4.letterSpacing")},H5:{fontFamily:mr("H5.fontFamily"),fontSize:mr("H5.fontSize"),fontWeight:mr("H5.fontWeight"),lineHeight:mr("H5.lineHeight"),letterSpacing:mr("H5.letterSpacing")},H6:{fontFamily:mr("H6.fontFamily"),fontSize:mr("H6.fontSize"),fontWeight:mr("H6.fontWeight"),lineHeight:mr("H6.lineHeight"),letterSpacing:mr("H6.letterSpacing")},Body:{fontFamily:mr("Body.fontFamily"),fontSize:mr("Body.fontSize"),fontWeight:mr("Body.fontWeight"),lineHeight:mr("Body.lineHeight"),letterSpacing:mr("Body.letterSpacing")},BodySmall:{fontFamily:mr("BodySmall.fontFamily"),fontSize:mr("BodySmall.fontSize"),fontWeight:mr("BodySmall.fontWeight"),lineHeight:mr("BodySmall.lineHeight"),letterSpacing:mr("BodySmall.letterSpacing")},XSmall:{fontFamily:mr("XSmall.fontFamily"),fontSize:mr("XSmall.fontSize"),fontWeight:mr("XSmall.fontWeight"),lineHeight:mr("XSmall.lineHeight"),letterSpacing:mr("XSmall.letterSpacing")}},br=e=>{switch(e){case 700:case"bold":return yr.Bold;case 600:case"semibold":return yr.Semibold;case 300:case"light":return yr.Light;case 400:case"regular":return yr.Regular;default:return""}},Fr=(e,t)=>n=>{var r;const o=vr[e].fontFamily(n),i=vr[e].fontWeight(n);return Object.values(yr).includes(o)?v`
                font-family: ${br(t)||br(i)||o};
                font-weight: normal !important;
            `:v`
            font-family: ${o};
            font-weight: ${null!==(r=Sr(t)||i)&&void 0!==r?r:"normal"};
        `},Sr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},wr=e=>{if(e>0)return v`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},xr=(e,t,n=!1)=>r=>{const o=vr[e],i=o.fontSize(r);return v`
            ${Fr(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${v`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Or=(e=!1,t=!1,n=void 0)=>t?v`
            display: block;
            ${wr(n)}
        `:e?v`
            display: inline;
        `:v`
            display: block;
            ${wr(n)}
        `;var jr;!function(e){e.D1=m.h1`
        ${e=>v`
                ${xr("D1",e.weight,e.paragraph)}
                color: ${Gt[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=m.h1`
        ${e=>v`
                ${xr("D2",e.weight,e.paragraph)}
                color: ${Gt[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=m.h1`
        ${e=>v`
                ${xr("D3",e.weight,e.paragraph)}
                color: ${Gt[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=m.h1`
        ${e=>v`
                ${xr("D4",e.weight,e.paragraph)}
                color: ${Gt[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=m.h1`
        ${e=>v`
                ${xr("DBody",e.weight,e.paragraph)}
                color: ${Gt[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=m.h1`
        ${e=>v`
                ${xr("H1",e.weight,e.paragraph)}
                color: ${Gt[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=m.h2`
        ${e=>v`
                ${xr("H2",e.weight,e.paragraph)}
                color: ${Gt[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=m.h3`
        ${e=>v`
                ${xr("H3",e.weight,e.paragraph)}
                color: ${Gt[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=m.h4`
        ${e=>v`
                ${xr("H4",e.weight,e.paragraph)}
                color: ${Gt[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=m.h5`
        ${e=>v`
                ${xr("H5",e.weight,e.paragraph)}
                color: ${Gt[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=m.h6`
        ${e=>v`
                ${xr("H6",e.weight,e.paragraph)}
                color: ${Gt[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=m.p`
        ${e=>v`
                ${xr("Body",e.weight,e.paragraph)}
                color: ${Gt[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=m.p`
        ${e=>v`
                ${xr("BodySmall",e.weight,e.paragraph)}
                color: ${Gt[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=m.span`
        ${e=>v`
                ${xr("XSmall",e.weight,e.paragraph)}
                color: ${Gt[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>_r(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>_r(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(jr||(jr={}));const Br=m.a`
    ${e=>v`
            ${xr(e.textStyle,e.weight)}
            color: ${qt};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Qt};

                svg {
                    color: ${Qt};
                }
            }
        `}
`,$r=m(w)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,_r=n=>{var{external:r=!1,children:o}=n,i=x(n,["external","children"]);return t(Br,Object.assign({},i,{children:[o,r&&e($r,{})]}))};var Er;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Er||(Er={}));const Dr=m.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;
`,Hr=m.li`
    display: flex;
    flex-shrink: 0;
    border-bottom: 4px solid ${Gt[5]};

    ${e=>{if(e.$active)return v`
                border-bottom: 4px solid ${qt};
            `}}

    ${D.mobileL} {
        flex: 1;
        justify-content: center;
    }
`,Ar=m.button`
    position: relative;
    padding: 1rem 1rem 1.25rem;
    border: none;
    background: none;
    cursor: pointer;
`,kr=m(jr.Body)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${Gt[3]};
    opacity: 1;

    ${e=>{if(e.$active)return v`
                opacity: 0;
            `}}
`,Cr=m(jr.Body)`
    color: ${qt};
    opacity: 0;
    ${e=>{if(e.$active)return v`
                opacity: 1;
            `}}
`,Tr=m(hr)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: 4px;
    }
`,Pr=({controlledMode:n,"data-testid":r,onTabClick:o})=>{const{setCurrentActiveIndex:a,currentActiveIndex:l,tabLinks:u}=i(O),s=$.exports.useMediaQuery({maxWidth:H.mobileL}),f=c(null),d=e=>t=>{t.preventDefault(),n||a(e),o&&o(u[e].title,e)},p=e=>s&&e.length>20?`${e.substring(0,20)}...`:e;return e(Tr,Object.assign({onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=H.tablet&&f&&(e.scrollLeft=f.current.getBoundingClientRect().left)},"data-testid":r},{children:e(Dr,Object.assign({role:"tablist"},{children:u.map(((n,o)=>{const i=l===o;return e(Hr,Object.assign({$active:i,ref:i?f:null},{children:t(Ar,Object.assign({role:"tab",type:"button","aria-selected":i,onClick:d(o),"data-testid":`${r}-link-${o}`},{children:[e(kr,Object.assign({$active:i,weight:"regular"},{children:p(n.title)})),e(Cr,Object.assign({$active:i,weight:"semibold","aria-hidden":"true"},{children:p(n.title)}))]}))}),o)}))}))}))},Rr=m.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,zr=Object.assign((n=>{var{children:r,currentActive:o,initialActive:i=0,onTabClick:c,"data-testid":u}=n,s=x(n,["children","currentActive","initialActive","onTabClick","data-testid"]);const[f,p]=l(o||i),[h,y]=l([]);d((()=>{const e=g.toArray(r).filter(Boolean);m(e)}),[r]),d((()=>{"number"==typeof o&&p(o)}),[o]);const m=e=>{const t=e.map((e=>({title:e.props.title})));y(t)};return e(Rr,Object.assign({"data-testid":u},s,{children:t(O.Provider,Object.assign({value:{tabLinks:h,currentActiveIndex:f,setCurrentActiveIndex:p}},{children:[e(Pr,{controlledMode:"number"==typeof o,onTabClick:c,"data-testid":`${u}-tabs`}),g.toArray(r).filter(Boolean).map(((e,t)=>a(e,{key:t,index:t})))]}))}))}),{Item:t=>{var{index:n,children:r}=t,o=x(t,["index","children"]);const{currentActiveIndex:a}=i(O);return a===n?e("div",Object.assign({role:"tabpanel"},o,{children:r})):null}});export{zr as Tab};
//# sourceMappingURL=index.js.map
