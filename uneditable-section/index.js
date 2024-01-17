import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{css as i}from"styled-components";import{ICircleFillIcon as o}from"@lifesg/react-icons/i-circle-fill";import a,{useState as s,useRef as c,useEffect as l}from"react";import{ExternalIcon as u}from"@lifesg/react-icons/external";import d from"react-dom";import{CrossIcon as f}from"@lifesg/react-icons/cross";function p(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}const h={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},m=e=>Object.keys(h).reduce(((t,n)=>{const r=h[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),g=m("max-width"),y=(m("min-width"),r.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return i`
                    grid-column: auto / span 4;
                `;case"full":return i`
                    grid-column: auto / span 8;
                `}}}

    ${g.tablet} {
        grid-column: auto / span 8;
    }

    ${g.mobileL} {
        grid-column: auto / span 4;
    }
`);var v,b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},$={exports:{}};v=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
  !*** ./node_modules/css-mediaquery/index.js ***!
  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var i=e.expressions.every((function(e){var n=e.feature,r=e.modifier,i=e.value,o=t[n];if(!o)return!1;switch(n){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=u(i),o=u(o);break;case"resolution":i=l(i),o=l(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=c(i),o=c(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(r){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!n||!i&&n}))},t.parse=s;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),o=t[1],a=t[2],s=t[3]||"",c={};return c.inverse=!!o&&"not"===o.toLowerCase(),c.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],c.expressions=s.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(i);return{modifier:n[1],feature:n[2],value:t[2]}})),c}))}function c(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function l(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
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
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in o=Object(arguments[c]))n.call(o,l)&&(s[l]=o[l]);if(t){a=t(o);for(var u=0;u<a.length;u++)r.call(o,a[u])&&(s[a[u]]=o[a[u]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/(e,t,n)=>{var r,i=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,c){for(var l in e)if(a(e,l)){var u;try{if("function"!=typeof e[l]){var d=Error((s||"React class")+": "+n+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[l]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[l](t,l,s,n,null,i)}catch(e){u=e}if(!u||u instanceof Error||r((s||"React class")+": type specification of "+n+" `"+l+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in o)){o[u.message]=!0;var f=c?c():"";r("Failed "+n+" type: "+u.message+(null!=f?f:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/(e,t,n)=>{var r,i=n(/*! react-is */"./node_modules/react-is/index.js"),o=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),c=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function l(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",f={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(l),arrayOf:function(e){return m((function(t,n,r,i,o){if("function"!=typeof e)return new h("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new h("Invalid "+i+" `"+o+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<s.length;c++){var l=e(s,c,r,i,o+"["+c+"]",a);if(l instanceof Error)return l}return null}))},element:m((function(t,n,r,i,o){var a=t[n];return e(a)?null:new h("Invalid "+i+" `"+o+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,o){var a=e[t];return i.isValidElementType(a)?null:new h("Invalid "+r+" `"+o+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,i,o){if(!(t[n]instanceof e)){var a=e.name||d;return new h("Invalid "+i+" `"+o+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,t,n,r,i){return v(e[t])?null:new h("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,i,o){if("function"!=typeof e)return new h("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],l=b(c);if("object"!==l)return new h("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var u in c)if(s(c,u)){var d=e(c,u,r,i,o+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,i,o){for(var a=t[n],s=0;s<e.length;s++)if(p(a,e[s]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===$(t)?String(t):t}));return new h("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+c+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),l)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),l;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+S(n)+" at index "+t+"."),l}return m((function(t,n,r,i,o){for(var c=[],l=0;l<e.length;l++){var u=(0,e[l])(t,n,r,i,o,a);if(null==u)return null;u.data&&s(u.data,"expectedType")&&c.push(u.data.expectedType)}return new h("Invalid "+i+" `"+o+"` supplied to `"+r+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,i,o){var s=t[n],c=b(s);if("object"!==c)return new h("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var u=e[l];if("function"!=typeof u)return y(r,i,o,l,$(u));var d=u(s,l,r,i,o+"."+l,a);if(d)return d}return null}))},exact:function(e){return m((function(t,n,r,i,c){var l=t[n],u=b(l);if("object"!==u)return new h("Invalid "+i+" `"+c+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=o({},t[n],e);for(var f in d){var p=e[f];if(s(e,f)&&"function"!=typeof p)return y(r,i,c,f,$(p));if(!p)return new h("Invalid "+i+" `"+c+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=p(l,f,r,i,c+"."+f,a);if(m)return m}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},i=0;function o(o,s,c,l,u,f,p){if(l=l||d,f=f||c,p!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=l+":"+c;!n[g]&&i<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+l+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,i++)}}return null==s[c]?o?null===s[c]?new h("The "+u+" `"+f+"` is marked as required in `"+l+"`, but its value is `null`."):new h("The "+u+" `"+f+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(s,c,l,u,f)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function g(e){return m((function(t,n,r,i,o,a){var s=t[n];return b(s)!==e?new h("Invalid "+i+" `"+o+"` of type `"+$(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,i){return new h((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var i,o=r.call(t);if(r!==t.entries){for(;!(i=o.next()).done;)if(!v(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function $(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function S(e){var t=$(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,f.checkPropTypes=c,f.resetWarningCache=c.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case l:case u:case i:case a:case o:case f:return p;default:var g=p&&p.$$typeof;switch(g){case c:case d:case m:case h:case s:return g;default:return t}}case r:return t}}}var S=l,w=u,x=c,F=s,D=n,O=d,B=i,_=m,j=h,E=r,M=a,k=o,H=f,C=!1;function T(e){return $(e)===u}t.AsyncMode=S,t.ConcurrentMode=w,t.ContextConsumer=x,t.ContextProvider=F,t.Element=D,t.ForwardRef=O,t.Fragment=B,t.Lazy=_,t.Memo=j,t.Portal=E,t.Profiler=M,t.StrictMode=k,t.Suspense=H,t.isAsyncMode=function(e){return C||(C=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),T(e)||$(e)===l},t.isConcurrentMode=T,t.isContextConsumer=function(e){return $(e)===c},t.isContextProvider=function(e){return $(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return $(e)===d},t.isFragment=function(e){return $(e)===i},t.isLazy=function(e){return $(e)===m},t.isMemo=function(e){return $(e)===h},t.isPortal=function(e){return $(e)===r},t.isProfiler=function(e){return $(e)===a},t.isStrictMode=function(e){return $(e)===o},t.isSuspense=function(e){return $(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===u||e===a||e===o||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=$}()},"./node_modules/react-is/index.js":
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
  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),c={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},l={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(c)},u=i(l,["type"]),d=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},u),f=r(r({},c),d);t.default={all:f,types:c,matchers:l,features:d}},"./src/toQuery.ts":
/*!************************!*\
  !*** ./src/toQuery.ts ***!
  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
  !*** ./src/useMediaQuery.ts ***!
  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(/*! react */"react"),o=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),c=r(n(/*! ./toQuery */"./src/toQuery.ts")),l=r(n(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},d=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,c.default)(e)}(e)},n=(0,i.useState)(t),r=n[0],o=n[1];return(0,i.useEffect)((function(){var e=t();r!==e&&o(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,i.useContext)(l.default),n=function(){return u(e)||u(t)},r=(0,i.useState)(n),o=r[0],a=r[1];return(0,i.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,t]),o}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var c=function(e,t){var n=function(){return(0,o.default)(e,t||{},!!t)},r=(0,i.useState)(n),a=r[0],s=r[1],c=d();return(0,i.useEffect)((function(){if(c){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),p=function(e){var t=(0,i.useState)(e.matches),n=t[0],r=t[1];return(0,i.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(c),h=d();return(0,i.useEffect)((function(){h&&n&&n(p)}),[p]),(0,i.useEffect)((function(){return function(){c&&c.dispose()}}),[]),p}},react:
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})(),$.exports=v(a);var S=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},w="object"==typeof b&&b&&b.Object===Object&&b,x="object"==typeof self&&self&&self.Object===Object&&self,F=w||x||Function("return this")(),D=F,O=function(){return D.Date.now()},B=/\s/;var _=function(e){for(var t=e.length;t--&&B.test(e.charAt(t)););return t},j=/^\s+/;var E=function(e){return e?e.slice(0,_(e)+1).replace(j,""):e},M=F.Symbol,k=M,H=Object.prototype,C=H.hasOwnProperty,T=H.toString,A=k?k.toStringTag:void 0;var L=function(e){var t=C.call(e,A),n=e[A];try{e[A]=void 0;var r=!0}catch(e){}var i=T.call(e);return r&&(t?e[A]=n:delete e[A]),i},z=Object.prototype.toString;var I=L,W=function(e){return z.call(e)},Y=M?M.toStringTag:void 0;var P=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Y&&Y in Object(e)?I(e):W(e)};var R=P,V=function(e){return null!=e&&"object"==typeof e};var N=function(e){return"symbol"==typeof e||V(e)&&"[object Symbol]"==R(e)},Z=E,q=S,X=N,Q=/^[-+]0x[0-9a-f]+$/i,U=/^0b[01]+$/i,G=/^0o[0-7]+$/i,J=parseInt;var K=S,ee=O,te=function(e){if("number"==typeof e)return e;if(X(e))return NaN;if(q(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=q(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Z(e);var n=U.test(e);return n||G.test(e)?J(e.slice(2),n?2:8):Q.test(e)?NaN:+e},ne=Math.max,re=Math.min;var ie=function(e,t,n){var r,i,o,a,s,c,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=o}function m(){var e=ee();if(h(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-c);return d?re(n,o-(e-l)):n}(e))}function g(e){return s=void 0,f&&r?p(e):(r=i=void 0,a)}function y(){var e=ee(),n=h(e);if(r=arguments,i=this,c=e,n){if(void 0===s)return function(e){return l=e,s=setTimeout(m,t),u?p(e):a}(c);if(d)return clearTimeout(s),s=setTimeout(m,t),p(c)}return void 0===s&&(s=setTimeout(m,t)),a}return t=te(t)||0,K(n)&&(u=!!n.leading,o=(d="maxWait"in n)?ne(te(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=i=s=void 0},y.flush=function(){return void 0===s?a:g(ee())},y};var oe=Array.isArray,ae=oe,se=N,ce=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,le=/^\w*$/;var ue=function(e,t){if(ae(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!se(e))||(le.test(e)||!ce.test(e)||null!=t&&e in Object(t))},de=P,fe=S;var pe,he=function(e){if(!fe(e))return!1;var t=de(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},me=F["__core-js_shared__"],ge=(pe=/[^.]+$/.exec(me&&me.keys&&me.keys.IE_PROTO||""))?"Symbol(src)_1."+pe:"";var ye=function(e){return!!ge&&ge in e},ve=Function.prototype.toString;var be=he,$e=ye,Se=S,we=function(e){if(null!=e){try{return ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""},xe=/^\[object .+?Constructor\]$/,Fe=Function.prototype,De=Object.prototype,Oe=Fe.toString,Be=De.hasOwnProperty,_e=RegExp("^"+Oe.call(Be).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var je=function(e){return!(!Se(e)||$e(e))&&(be(e)?_e:xe).test(we(e))},Ee=function(e,t){return null==e?void 0:e[t]};var Me=function(e,t){var n=Ee(e,t);return je(n)?n:void 0},ke=Me(Object,"create"),He=ke;var Ce=function(){this.__data__=He?He(null):{},this.size=0};var Te=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ae=ke,Le=Object.prototype.hasOwnProperty;var ze=function(e){var t=this.__data__;if(Ae){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Le.call(t,e)?t[e]:void 0},Ie=ke,We=Object.prototype.hasOwnProperty;var Ye=ke;var Pe=Ce,Re=Te,Ve=ze,Ne=function(e){var t=this.__data__;return Ie?void 0!==t[e]:We.call(t,e)},Ze=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ye&&void 0===t?"__lodash_hash_undefined__":t,this};function qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}qe.prototype.clear=Pe,qe.prototype.delete=Re,qe.prototype.get=Ve,qe.prototype.has=Ne,qe.prototype.set=Ze;var Xe=qe;var Qe=function(){this.__data__=[],this.size=0};var Ue=function(e,t){return e===t||e!=e&&t!=t};var Ge=function(e,t){for(var n=e.length;n--;)if(Ue(e[n][0],t))return n;return-1},Je=Ge,Ke=Array.prototype.splice;var et=Ge;var tt=Ge;var nt=Ge;var rt=Qe,it=function(e){var t=this.__data__,n=Je(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ke.call(t,n,1),--this.size,!0)},ot=function(e){var t=this.__data__,n=et(t,e);return n<0?void 0:t[n][1]},at=function(e){return tt(this.__data__,e)>-1},st=function(e,t){var n=this.__data__,r=nt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ct(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ct.prototype.clear=rt,ct.prototype.delete=it,ct.prototype.get=ot,ct.prototype.has=at,ct.prototype.set=st;var lt=ct,ut=Me(F,"Map"),dt=Xe,ft=lt,pt=ut;var ht=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var mt=function(e,t){var n=e.__data__;return ht(t)?n["string"==typeof t?"string":"hash"]:n.map},gt=mt;var yt=mt;var vt=mt;var bt=mt;var $t=function(){this.size=0,this.__data__={hash:new dt,map:new(pt||ft),string:new dt}},St=function(e){var t=gt(this,e).delete(e);return this.size-=t?1:0,t},wt=function(e){return yt(this,e).get(e)},xt=function(e){return vt(this,e).has(e)},Ft=function(e,t){var n=bt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Dt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Dt.prototype.clear=$t,Dt.prototype.delete=St,Dt.prototype.get=wt,Dt.prototype.has=xt,Dt.prototype.set=Ft;var Ot=Dt;function Bt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Bt.Cache||Ot),n}Bt.Cache=Ot;var _t=Bt;var jt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Et=/\\(\\)?/g,Mt=function(e){var t=_t(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(jt,(function(e,n,r,i){t.push(r?i.replace(Et,"$1"):n||e)})),t}));var kt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Ht=oe,Ct=N,Tt=M?M.prototype:void 0,At=Tt?Tt.toString:void 0;var Lt=function e(t){if("string"==typeof t)return t;if(Ht(t))return kt(t,e)+"";if(Ct(t))return At?At.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},zt=Lt;var It=oe,Wt=ue,Yt=Mt,Pt=function(e){return null==e?"":zt(e)};var Rt=N;var Vt=function(e,t){return It(e)?e:Wt(e,t)?[e]:Yt(Pt(e))},Nt=function(e){if("string"==typeof e||Rt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Zt=function(e,t){for(var n=0,r=(t=Vt(t,e)).length;null!=e&&n<r;)e=e[Nt(t[n++])];return n&&n==r?e:void 0};var qt=function(e,t,n){var r=null==e?void 0:Zt(e,t);return void 0===r?n:r};const Xt=(e,t,n)=>t?qt(n,t)||qt(e,t):n||e,Qt=(e,t)=>{const n=t||e.defaultValue;return qt(e.collections,n)};var Ut;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ut||(Ut={}));const Gt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Jt=e=>t=>{const n=t.theme,r=Qt(Gt,n[Ut.colorScheme]);return n.options&&n.options.color?Xt(r,e,n.options.color):Xt(r,e)},Kt=(Jt("Brand.1"),Jt("Brand.2"),Jt("Brand.3"),Jt("Brand.4"),Jt("Brand.5"),Jt("Brand.6"),Jt("Primary")),en=(Jt("PrimaryDark"),Jt("Secondary")),tn={Light:{1:Jt("Accent.Light.1"),2:Jt("Accent.Light.2"),3:Jt("Accent.Light.3"),4:Jt("Accent.Light.4"),5:Jt("Accent.Light.5"),6:Jt("Accent.Light.6")},Dark:{1:Jt("Accent.Dark.1"),2:Jt("Accent.Dark.2"),3:Jt("Accent.Dark.3")}},nn={1:Jt("Neutral.1"),2:Jt("Neutral.2"),3:Jt("Neutral.3"),4:Jt("Neutral.4"),5:Jt("Neutral.5"),6:Jt("Neutral.6"),7:Jt("Neutral.7"),8:Jt("Neutral.8")},rn={Green:{Text:Jt("Validation.Green.Text"),Icon:Jt("Validation.Green.Icon"),Border:Jt("Validation.Green.Border"),Background:Jt("Validation.Green.Background")},Orange:{Text:Jt("Validation.Orange.Text"),Icon:Jt("Validation.Orange.Icon"),Border:Jt("Validation.Orange.Border"),Background:Jt("Validation.Orange.Background"),Badge:Jt("Validation.Orange.Badge")},Red:{Text:Jt("Validation.Red.Text"),Icon:Jt("Validation.Red.Icon"),Border:Jt("Validation.Red.Border"),Background:Jt("Validation.Red.Background")},Blue:{Text:Jt("Validation.Blue.Text"),Icon:Jt("Validation.Blue.Icon"),Border:Jt("Validation.Blue.Border"),Background:Jt("Validation.Blue.Background")}},on=(Jt("Shadow.Accent"),Jt("Shadow.Red"),Jt("Shadow.Elevation"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),an={collections:{base:{D1:{fontFamily:on.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:on.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:on.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:on.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:on.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:on.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:on.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:on.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:on.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:on.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:on.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:on.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:on.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:on.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},sn=e=>t=>{const n=t.theme,r=Qt(an,n[Ut.textStyleScheme]);return n.options&&n.options.textStyle?Xt(r,e,n.options.textStyle):Xt(r,e)},cn={D1:{fontFamily:sn("D1.fontFamily"),fontSize:sn("D1.fontSize"),fontWeight:sn("D1.fontWeight"),lineHeight:sn("D1.lineHeight"),letterSpacing:sn("D1.letterSpacing")},D2:{fontFamily:sn("D2.fontFamily"),fontSize:sn("D2.fontSize"),fontWeight:sn("D2.fontWeight"),lineHeight:sn("D2.lineHeight"),letterSpacing:sn("D2.letterSpacing")},D3:{fontFamily:sn("D3.fontFamily"),fontSize:sn("D3.fontSize"),fontWeight:sn("D3.fontWeight"),lineHeight:sn("D3.lineHeight"),letterSpacing:sn("D3.letterSpacing")},D4:{fontFamily:sn("D4.fontFamily"),fontSize:sn("D4.fontSize"),fontWeight:sn("D4.fontWeight"),lineHeight:sn("D4.lineHeight"),letterSpacing:sn("D4.letterSpacing")},DBody:{fontFamily:sn("DBody.fontFamily"),fontSize:sn("DBody.fontSize"),fontWeight:sn("DBody.fontWeight"),lineHeight:sn("DBody.lineHeight"),letterSpacing:sn("DBody.letterSpacing")},H1:{fontFamily:sn("H1.fontFamily"),fontSize:sn("H1.fontSize"),fontWeight:sn("H1.fontWeight"),lineHeight:sn("H1.lineHeight"),letterSpacing:sn("H1.letterSpacing")},H2:{fontFamily:sn("H2.fontFamily"),fontSize:sn("H2.fontSize"),fontWeight:sn("H2.fontWeight"),lineHeight:sn("H2.lineHeight"),letterSpacing:sn("H2.letterSpacing")},H3:{fontFamily:sn("H3.fontFamily"),fontSize:sn("H3.fontSize"),fontWeight:sn("H3.fontWeight"),lineHeight:sn("H3.lineHeight"),letterSpacing:sn("H3.letterSpacing")},H4:{fontFamily:sn("H4.fontFamily"),fontSize:sn("H4.fontSize"),fontWeight:sn("H4.fontWeight"),lineHeight:sn("H4.lineHeight"),letterSpacing:sn("H4.letterSpacing")},H5:{fontFamily:sn("H5.fontFamily"),fontSize:sn("H5.fontSize"),fontWeight:sn("H5.fontWeight"),lineHeight:sn("H5.lineHeight"),letterSpacing:sn("H5.letterSpacing")},H6:{fontFamily:sn("H6.fontFamily"),fontSize:sn("H6.fontSize"),fontWeight:sn("H6.fontWeight"),lineHeight:sn("H6.lineHeight"),letterSpacing:sn("H6.letterSpacing")},Body:{fontFamily:sn("Body.fontFamily"),fontSize:sn("Body.fontSize"),fontWeight:sn("Body.fontWeight"),lineHeight:sn("Body.lineHeight"),letterSpacing:sn("Body.letterSpacing")},BodySmall:{fontFamily:sn("BodySmall.fontFamily"),fontSize:sn("BodySmall.fontSize"),fontWeight:sn("BodySmall.fontWeight"),lineHeight:sn("BodySmall.lineHeight"),letterSpacing:sn("BodySmall.letterSpacing")},XSmall:{fontFamily:sn("XSmall.fontFamily"),fontSize:sn("XSmall.fontSize"),fontWeight:sn("XSmall.fontWeight"),lineHeight:sn("XSmall.lineHeight"),letterSpacing:sn("XSmall.letterSpacing")}},ln=e=>{switch(e){case 700:case"bold":return on.Bold;case 600:case"semibold":return on.Semibold;case 300:case"light":return on.Light;case 400:case"regular":return on.Regular;default:return""}},un=(e,t)=>n=>{var r;const o=cn[e].fontFamily(n),a=cn[e].fontWeight(n);return Object.values(on).includes(o)?i`
                font-family: ${ln(t)||ln(a)||o};
                font-weight: normal !important;
            `:i`
            font-family: ${o};
            font-weight: ${null!==(r=dn(t)||a)&&void 0!==r?r:"normal"};
        `},dn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},fn=e=>{if(e>0)return i`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},pn=(e,t,n=!1)=>r=>{const o=cn[e],a=o.fontSize(r);return i`
            ${un(e,t)}
            font-size: ${a}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${i`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},hn=(e=!1,t=!1,n=void 0)=>t?i`
            display: block;
            ${fn(n)}
        `:e?i`
            display: inline;
        `:i`
            display: block;
            ${fn(n)}
        `;var mn;!function(e){e.D1=r.h1`
        ${e=>i`
                ${pn("D1",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=r.h1`
        ${e=>i`
                ${pn("D2",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=r.h1`
        ${e=>i`
                ${pn("D3",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=r.h1`
        ${e=>i`
                ${pn("D4",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=r.h1`
        ${e=>i`
                ${pn("DBody",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=r.h1`
        ${e=>i`
                ${pn("H1",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=r.h2`
        ${e=>i`
                ${pn("H2",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=r.h3`
        ${e=>i`
                ${pn("H3",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=r.h4`
        ${e=>i`
                ${pn("H4",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=r.h5`
        ${e=>i`
                ${pn("H5",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=r.h6`
        ${e=>i`
                ${pn("H6",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=r.p`
        ${e=>i`
                ${pn("Body",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=r.p`
        ${e=>i`
                ${pn("BodySmall",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=r.span`
        ${e=>i`
                ${pn("XSmall",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>vn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>vn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(mn||(mn={}));const gn=r.a`
    ${e=>i`
            ${pn(e.textStyle,e.weight)}
            color: ${Kt};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${en};

                svg {
                    color: ${en};
                }
            }
        `}
`,yn=r(u)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,vn=n=>{var{external:r=!1,children:i}=n,o=p(n,["external","children"]);return e(gn,Object.assign({},o,{children:[i,r&&t(yn,{})]}))},bn=r.div`
    border-radius: 0.5rem;
    background: ${nn[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,$n=e=>{var{children:n}=e,r=p(e,["children"]);const i=r["data-testid"]||"card";return t(bn,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?t(mn.Body,{children:n}):n}))};var Sn={exports:{}};Sn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],l=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=l("months"),n=(l("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=l("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:c,ZZ:c};function f(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,c=0;c<s;c+=1){var l=a[c],u=d[l],f=u&&u[0],p=u&&u[1];a[c]=p?{regex:f,parser:p}:l.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,c=i.parser,l=e.slice(r),u=o.exec(l)[0];c.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var c=!0===a[2],l=!0===a[3],u=c||l,d=a[2];l&&(d=a[2]),o=this.$locale(),!c&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,c=r.minutes,l=r.seconds,u=r.milliseconds,d=r.zone,p=new Date,h=a||(i||o?1:p.getDate()),m=i||p.getFullYear(),g=0;i&&!o||(g=o>0?o-1:p.getMonth());var y=s||0,v=c||0,b=l||0,$=u||0;return d?new Date(Date.UTC(m,g,h,y,v,b,$+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,h,y,v,b,$)):new Date(m,g,h,y,v,b,$)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var p=s.length,h=1;h<=p;h+=1){a[1]=s[h-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}h===p&&(this.$d=new Date(""))}else i.call(this,e)}}}();var wn,xn,Fn=Sn.exports,Dn={exports:{}},On=Dn.exports=(wn={year:0,month:1,day:2,hour:3,minute:4,second:5},xn={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=xn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),xn[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],c=s.type,l=s.value,u=wn[c];u>=0&&(o[u]=parseInt(l,10))}var d=o[3],f=24===d?0:d,p=o[0]+"-"+o[1]+"-"+o[2]+" "+f+":"+o[4]+":"+o[5]+":000",h=+e;return(n.utc(p).valueOf()-(h-=h%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),c=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var l=c.utcOffset();c=c.add(i-l,"minute")}return c.$x.$timezone=e,c},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,c=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var l=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),c,s),u=l[0],d=l[1],f=n(u).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),Bn={exports:{}};Bn.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",c="week",l="month",u="quarter",d="year",f="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,l),o=n-i<0,a=t.clone().add(r+(o?-1:1),l);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:s,D:f,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",$={};$[b]=g;var S=function(e){return e instanceof D},w=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();$[o]&&(i=o),n&&($[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;$[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},x=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},F=v;F.l=w,F.i=S,F.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function g(e){this.$L=w(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(F.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(h);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return F},y.isValid=function(){return!(this.$d.toString()===p)},y.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,n){return F.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!F.u(t)||t,u=F.p(e),p=function(e,t){var i=F.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},h=function(e,t){return F.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?p(1,0):p(31,11);case l:return r?p(1,g):p(0,g+1);case c:var b=this.$locale().weekStart||0,$=(m<b?m+7:m)-b;return p(r?y-$:y+(6-$),g);case s:case f:return h(v+"Hours",0);case a:return h(v+"Minutes",1);case o:return h(v+"Seconds",2);case i:return h(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,c=F.p(e),u="set"+(this.$u?"UTC":""),p=(n={},n[s]=u+"Date",n[f]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[c],h=c===s?this.$D+(t-this.$W):t;if(c===l||c===d){var m=this.clone().set(f,1);m.$d[p](h),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[F.p(e)]()},y.add=function(r,u){var f,p=this;r=Number(r);var h=F.p(u),m=function(e){var t=x(p);return F.w(t.date(t.date()+Math.round(e*r)),p)};if(h===l)return this.set(l,this.$M+r);if(h===d)return this.set(d,this.$y+r);if(h===s)return m(1);if(h===c)return m(7);var g=(f={},f[o]=t,f[a]=n,f[i]=e,f)[h]||1,y=this.$d.getTime()+r*g;return F.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=F.z(this),o=this.$H,a=this.$m,s=this.$M,c=n.weekdays,l=n.months,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return F.s(o%12||12,e,"0")},f=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:F.s(s+1,2,"0"),MMM:u(n.monthsShort,s,l,3),MMMM:u(l,s),D:this.$D,DD:F.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,c,2),ddd:u(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(o),HH:F.s(o,2,"0"),h:d(1),hh:d(2),a:f(o,a,!0),A:f(o,a,!1),m:String(a),mm:F.s(a,2,"0"),s:String(this.$s),ss:F.s(this.$s,2,"0"),SSS:F.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(e,t){return t||h[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,p){var h,m=F.p(f),g=x(r),y=(g.utcOffset()-this.utcOffset())*t,v=this-g,b=F.m(this,g);return b=(h={},h[d]=b/12,h[l]=b,h[u]=b/3,h[c]=(v-y)/6048e5,h[s]=(v-y)/864e5,h[a]=v/n,h[o]=v/t,h[i]=v/e,h)[m]||v,p?b:F.a(b)},y.daysInMonth=function(){return this.endOf(l).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=w(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return F.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),O=D.prototype;return x.prototype=O,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",l],["$y",d],["$D",f]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,D,x),e.$i=!0),x},x.locale=w,x.isDayjs=S,x.unix=function(e){return x(1e3*e)},x.en=$[b],x.Ls=$,x.p={},x}();var _n=Bn.exports,jn={exports:{}};jn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],c=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(c?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(c?this.isAfter(a,r):!this.isBefore(a,r))}};var En=jn.exports,Mn={exports:{}};Mn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var kn=Mn.exports,Hn={exports:{}};Hn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Cn,Tn=Hn.exports;_n.extend(En),_n.extend(kn),_n.extend(Tn),_n.extend(Fn),_n.extend(On),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=_n(t).startOf("week");return An(n).map((e=>Ln(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ln(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(_n(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+_n(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=_n(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const o=e.isWithinRange(t,r?_n(r):void 0,i?_n(i):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(Cn||(Cn={}));const An=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Ln=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},zn=[1,3,5,7,8,10,12],In=[4,6,9,11];var Wn,Yn,Pn,Rn;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":zn.includes(o)?Math.min(i,31).toString():In.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=_n(e,n);return _n(t,n).diff(r,"minute")},e.toDayjs=e=>e?_n(e):_n(),e.addMinutesToTime=(e,t,n="HH:mm")=>_n(e,n).add(t,"minutes").format(n)}(Wn||(Wn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!_n(e).isBefore(r,"day"))||!(!i||!_n(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(_n(e).isValid())return e}return""}}(Yn||(Yn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Pn||(Pn={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(Rn||(Rn={}));const Vn=r.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return i`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Nn=r.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=i`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=i`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=i`
                transition: none;
            `),t}}
`,Zn=({show:e=!1,rootId:n,onOverlayClick:r,children:i,backgroundOpacity:o,backgroundBlur:u=!0,disableTransition:f=!1,enableOverlayClick:p=!1,zIndex:h,id:m})=>{const[g,y]=s(null),[v,b]=s(),[$]=s((()=>Pn.generate())),S=c(),w=c(null),x=i&&a.cloneElement(i,{ref:w}),F=m?`lifesg-ds-overlay-root-${m}`:"lifesg-ds-overlay-root";l((()=>(_(),y(O()),()=>{k(),E().length<1&&j("remove")})),[]),l((()=>{if(e){const e=B();D(e),M();const t=setTimeout((()=>{j("add")}),200);return()=>clearTimeout(t)}{k();const e=setTimeout((()=>{E().length<1&&j("remove")}),200);return()=>clearTimeout(e)}}),[e]);const D=e=>{S.current=e,b(e)},O=()=>document&&n?document.getElementById(n):document?document.body:null,B=()=>E().length>0,_=()=>{if(!document.getElementById(qn)){const e=document.createElement("style");e.id=qn;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Xn} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Xn}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},j=e=>{const t=document.body.classList.contains(Xn);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Xn):document.body.classList.add(Xn)},E=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},M=()=>{const e=E();document.body.dataset.lifesgDsOverlayOrder=[...e,$].join(",")},k=()=>{const e=E();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==$)).join(",")},H=e=>{var t;const n=null===(t=w.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&p&&(e.preventDefault(),r())};return g?d.createPortal(t(Vn,Object.assign({id:F,"data-testid":F,$show:e,zIndex:h,$stacked:v},{children:i&&t(Nn,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:o||(v?.5:.8),$backgroundBlur:u,$disableTransition:f,$enableOverlayClick:p,onClick:H},{children:x}))})),g):null},qn="lifesg-ds-overlay-stylesheet",Xn="lifesg-ds-overlay-open",Qn=r.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${g.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Un=e=>{var{id:n="modal",show:r,animationFrom:i="bottom",children:o,enableOverlayClick:a=!0,rootComponentId:c,zIndex:u,onOverlayClick:d,dismissKeyboardOnShow:f=!0}=e,h=p(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[m,g]=s(),[y,v]=s();l((()=>window.visualViewport?($(),window.visualViewport.addEventListener("resize",$),()=>{window.visualViewport.removeEventListener("resize",$)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),l((()=>{var e,t;r&&f&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const b=()=>{const e=.01*window.innerHeight;g(e)},$=()=>{const e=.01*window.visualViewport.height;g(e),v(window.visualViewport.offsetTop)};return t(Zn,Object.assign({"data-testid":`${n}-overlay`,show:r,enableOverlayClick:a,onOverlayClick:d,id:n,rootId:c,zIndex:u},{children:t(Qn,Object.assign({show:r,animationFrom:i,"data-testid":n,verticalHeight:m,offsetTop:y},h,{children:o}))}))},Gn=r.button`
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

        ${({$highlight:e})=>e&&i`
                background-color: ${nn[7]};
            `}
    }
`,Jn=a.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=p(e,["children","focusHighlight","focusOutline","type"]);return t(Gn,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),Kn=r.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${nn[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${g.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,er=r(Jn)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${tn.Light[1]};
    }
`,tr=r(f)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${nn[3]};
`,nr="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",rr=r.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?i`
            visibility: visible;
            opacity: 1;
            transition: ${nr};
            z-index: 50;
        `:i`
            visibility: hidden;
            opacity: 0;
            transition: ${nr};
            z-index: -1;
        `}
    ${e=>(e=>{switch(e){case"top-center":return i`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return i`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return i`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return i`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return i`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return i`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `}})(e.$offset)}

	${g.mobileL} {
        display: none;
    }
`,ir=r((n=>{var{id:r="modal-box",children:i,onClose:o,showCloseButton:a=!0}=n,s=p(n,["id","children","onClose","showCloseButton"]);return e(Kn,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&t(er,Object.assign({onClick:o,"data-testid":"close-button",focusHighlight:!1},{children:t(tr,{})})),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`;r.div`
    position: relative;
    width: fit-content;
`,r.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`;const or=r.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,ar=r=>{var{children:i,visible:o,onMobileClose:a}=r,u=p(r,["children","visible","onMobileClose"]);const d=u["data-testid"]||"popover",[f,m]=s("none"),g=c(null),y=$.exports.useMediaQuery({maxWidth:h.mobileL}),v=c(f);l((()=>(w(),window.addEventListener("resize",ie(b,300)),()=>{window.removeEventListener("resize",ie(b,300))})),[]);const b=()=>{w()},S=()=>{a&&a()},w=()=>{const e=x();var t;e&&(t=e,v.current=t,m(t))},x=()=>{if(g.current){const e=g.current.getBoundingClientRect(),t=24,n=e.y<t,r=window.innerWidth-t;return e.x<t?n?"top-left":"left":e.x+e.width>r?n?"top-right":"right":("top-left"===v.current||"left"===v.current)&&e.x-e.width/2>t||("top-right"===v.current||"right"===v.current)&&e.x+2*e.width<r?n?"top-center":"none":n?"top-center":void 0}},F=()=>"string"==typeof i?t(mn.BodySmall,{children:i}):i;return e(n,{children:[t(rr,Object.assign({ref:g,"data-testid":d,$visible:o,$offset:f},u,{children:t($n,{children:F()})})),y&&t(Un,Object.assign({show:o,onOverlayClick:S},{children:t(ir,Object.assign({onClose:S},{children:t(or,{children:F()})}))}))]})},sr=r.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${Kt};
    }
`,cr=r.div`
    display: inline;
    position: relative;
    width: fit-content;
`,lr=e=>{var{addonType:n="popover",icon:r,"data-testid":i}=e,a=p(e,["addonType","icon","data-testid"]);return t(sr,Object.assign({"data-testid":i},a,{children:r||t(o,{id:`${n}-icon`})}))},ur=({addon:n})=>{const[r,i]=s(!1),o=c(),a=c(!1),u=$.exports.useMediaQuery({maxWidth:h.mobileL}),d=e=>{a.current=e,i(e)};l((()=>{if(!u)return document.addEventListener("mousedown",f),()=>{document.removeEventListener("mousedown",f)}}),[]);const f=e=>{o&&!o.current.contains(e.target)&&a.current&&d(!1)};return e(cr,Object.assign({ref:o,id:"addon-popover-wrapper"},{children:[t(ar,Object.assign({visible:r,id:n.id,"data-testid":n["data-testid"],onMobileClose:()=>{r&&d(!1)}},{children:n.content})),t(lr,{addonType:n.type,icon:n.icon,id:`popover-hoc-trigger${n["data-testid"]&&`-${n["data-testid"]}`}`,onClick:()=>d(!r),"aria-label":"popover-button",type:"button"})]}))};var dr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(dr||(dr={}));const fr=r.label`
    ${pn("H5","semibold")}
    color: ${nn[3]};
    margin-bottom: 0.5rem;
    display: inline-block;

    #popover-hoc-wrapper {
        display: inline;
    }

    #popover-hoc-button {
        vertical-align: bottom;
    }
`;r(mn.H6)`
    color: ${rn.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;const pr=r(mn.BodySmall)`
    color: ${nn[3]};
`,hr=n=>{var{children:r,addon:i,subtitle:o,"data-testid":a}=n,s=p(n,["children","addon","subtitle","data-testid"]);return e(fr,Object.assign({},s,{children:[r,i&&i.type&&("popover"===i.type?i&&t(ur,{addon:i}):null),"string"==typeof o?t(pr,Object.assign({as:"span","data-testid":a?`${a}-subtitle`:"subtitle"},s,{children:o})):o]}))},mr=({label:n,value:r,displayWidth:i="full"})=>e(y,Object.assign({$widthStyle:i},{children:[t(hr,{children:n}),t(mn.Body,{children:r})]})),gr=r.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:o,$mobileStart:a,$mobileSpan:s}=e;return i`
            grid-column: ${t||"auto"} / span ${n||1};

            ${g.tablet} {
                grid-column: ${r||"auto"} / span
                    ${o||1};
            }

            ${g.mobileL} {
                grid-column: ${a||"auto"} / span
                    ${s||1};
            }
        `}}
`,yr=a.forwardRef(((e,n)=>{const{mobileCols:r,tabletCols:i,desktopCols:o}=e,a=p(e,["mobileCols","tabletCols","desktopCols"]);return t(gr,Object.assign({ref:n},(()=>{const e=i||r,t=r,n=vr(o||i||r),a=vr(e),s=vr(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),vr=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,i=t<=n?n:t;let o;return o=i===r?1:i-r,{start:r,span:o}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},br=a.forwardRef(((e,n)=>{const{children:r,"data-testid":i="container",type:o="flex",stretch:a=!1}=e,s=p(e,["children","data-testid","type","stretch"]);return t($r,Object.assign({ref:n,"data-testid":i,$type:o,$stretch:a},s,{children:r}))})),$r=r.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?i`
                padding: 0 3rem;
            `:i`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${g.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${g.tablet} {
        max-width: 720px;
    }
    ${g.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return i`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${g.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${g.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return i`
                    display: flex;
                    flex-direction: column;
                `;default:return i`
                    display: flex;
                `}}}
`,Sr=a.forwardRef(((e,n)=>{const{children:r,"data-testid":i="section",stretch:o=!1}=e,a=p(e,["children","data-testid","stretch"]);return t(wr,Object.assign({ref:n,"data-testid":i,$stretch:o},a,{children:r}))})),wr=r.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?i`
                ${g.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:i`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,xr=a.forwardRef(((e,n)=>{const{children:r,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=e,c=p(e,["children","data-testid","className","type","stretch"]);return t(Sr,Object.assign({ref:n,"data-testid":i,className:o,stretch:s},c,{children:t(br,Object.assign({"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s},{children:r}))}))})),Fr=r({Section:Sr,Container:br,Content:xr,ColDiv:yr}.Content)`
    background: ${nn[7]};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,Dr=r(mn.H3)`
    margin-bottom: 1rem;
    grid-column: span 8;
`,Or=r(mn.Body)`
    margin-bottom: 2rem;
    grid-column: span 8;
`,Br=r.div`
    grid-column: span 8;
`,_r=r.ul`
    grid-column: span 8;
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${g.tablet} {
        column-gap: 1.5rem;
    }

    ${g.mobileL} {
        grid-column: 0 / span 4;
        column-gap: 1rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,jr=Object.assign((r=>{var{items:i,title:o,description:a,topSection:s,bottomSection:c,children:l}=r,u=p(r,["items","title","description","topSection","bottomSection","children"]);const d=()=>{if(i&&i.length>0){const e=i.map(((e,n)=>t(mr,Object.assign({},e),n)));return t(_r,{children:e})}return null};return t(Fr,Object.assign({},u,{type:"grid"},{children:l||e(n,{children:[o&&t(Dr,{children:o}),a&&t(Or,{children:a}),s&&t(Br,Object.assign({"data-id":"top-section"},{children:s})),d(),c&&t(Br,Object.assign({"data-id":"bottom-section"},{children:c}))]})}))}),{ItemSection:_r,Item:mr});export{jr as UneditableSection};
//# sourceMappingURL=index.js.map
