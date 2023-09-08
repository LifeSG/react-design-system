import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{css as o}from"styled-components";import{ICircleFillIcon as i}from"@lifesg/react-icons/i-circle-fill";import a,{useState as l,useRef as c,useEffect as s}from"react";import{ExternalIcon as u}from"@lifesg/react-icons/external";import d from"react-dom";import{CrossIcon as f}from"@lifesg/react-icons/cross";function p(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}const h={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},m=e=>Object.keys(h).reduce(((t,n)=>{const r=h[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),g=m("max-width"),y=(m("min-width"),r.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return o`
                    grid-column: auto / span 4;
                `;case"full":return o`
                    grid-column: auto / span 8;
                `}}}

    ${g.tablet} {
        grid-column: auto / span 8;
    }

    ${g.mobileL} {
        grid-column: auto / span 4;
    }
`);var v,b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},w={exports:{}};v=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
  !*** ./node_modules/css-mediaquery/index.js ***!
  \**********************************************/(e,t)=>{t.match=function(e,t){return l(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var o=e.expressions.every((function(e){var n=e.feature,r=e.modifier,o=e.value,i=t[n];if(!i)return!1;switch(n){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=u(o),i=u(i);break;case"resolution":o=s(o),i=s(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=c(o),i=c(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(r){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!n||!o&&n}))},t.parse=l;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function l(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),i=t[1],a=t[2],l=t[3]||"",c={};return c.inverse=!!i&&"not"===i.toLowerCase(),c.type=a?a.toLowerCase():"all",l=l.match(/\([^\)]+\)/g)||[],c.expressions=l.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(o);return{modifier:n[1],feature:n[2],value:t[2]}})),c}))}function c(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function s(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
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
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var s in i=Object(arguments[c]))n.call(i,s)&&(l[s]=i[s]);if(t){a=t(i);for(var u=0;u<a.length;u++)r.call(i,a[u])&&(l[a[u]]=i[a[u]])}}return l}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/(e,t,n)=>{var r,o=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function l(e,t,n,l,c){for(var s in e)if(a(e,s)){var u;try{if("function"!=typeof e[s]){var d=Error((l||"React class")+": "+n+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[s](t,s,l,n,null,o)}catch(e){u=e}if(!u||u instanceof Error||r((l||"React class")+": type specification of "+n+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in i)){i[u.message]=!0;var f=c?c():"";r("Failed "+n+" type: "+u.message+(null!=f?f:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},l.resetWarningCache=function(){i={}},e.exports=l},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/(e,t,n)=>{var r,o=n(/*! react-is */"./node_modules/react-is/index.js"),i=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),l=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),c=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function s(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",f={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(s),arrayOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var l=t[n];if(!Array.isArray(l))return new h("Invalid "+o+" `"+i+"` of type `"+b(l)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<l.length;c++){var s=e(l,c,r,o,i+"["+c+"]",a);if(s instanceof Error)return s}return null}))},element:m((function(t,n,r,o,i){var a=t[n];return e(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,i){var a=e[t];return o.isValidElementType(a)?null:new h("Invalid "+r+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||d;return new h("Invalid "+o+" `"+i+"` of type `"+((l=t[n]).constructor&&l.constructor.name?l.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var l;return null}))},node:m((function(e,t,n,r,o){return v(e[t])?null:new h("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],s=b(c);if("object"!==s)return new h("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var u in c)if(l(c,u)){var d=e(c,u,r,o,i+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,o,i){for(var a=t[n],l=0;l<e.length;l++)if(p(a,e[l]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+c+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),s)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),s;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+S(n)+" at index "+t+"."),s}return m((function(t,n,r,o,i){for(var c=[],s=0;s<e.length;s++){var u=(0,e[s])(t,n,r,o,i,a);if(null==u)return null;u.data&&l(u.data,"expectedType")&&c.push(u.data.expectedType)}return new h("Invalid "+o+" `"+i+"` supplied to `"+r+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,o,i){var l=t[n],c=b(l);if("object"!==c)return new h("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var u=e[s];if("function"!=typeof u)return y(r,o,i,s,w(u));var d=u(l,s,r,o,i+"."+s,a);if(d)return d}return null}))},exact:function(e){return m((function(t,n,r,o,c){var s=t[n],u=b(s);if("object"!==u)return new h("Invalid "+o+" `"+c+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=i({},t[n],e);for(var f in d){var p=e[f];if(l(e,f)&&"function"!=typeof p)return y(r,o,c,f,w(p));if(!p)return new h("Invalid "+o+" `"+c+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=p(s,f,r,o,c+"."+f,a);if(m)return m}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},o=0;function i(i,l,c,s,u,f,p){if(s=s||d,f=f||c,p!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=s+":"+c;!n[g]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,o++)}}return null==l[c]?i?null===l[c]?new h("The "+u+" `"+f+"` is marked as required in `"+s+"`, but its value is `null`."):new h("The "+u+" `"+f+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(l,c,s,u,f)}var l=i.bind(null,!1);return l.isRequired=i.bind(null,!0),l}function g(e){return m((function(t,n,r,o,i,a){var l=t[n];return b(l)!==e?new h("Invalid "+o+" `"+i+"` of type `"+w(l)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,o){return new h((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!v(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function S(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,f.checkPropTypes=c,f.resetWarningCache=c.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,l=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case s:case u:case o:case a:case i:case f:return p;default:var g=p&&p.$$typeof;switch(g){case c:case d:case m:case h:case l:return g;default:return t}}case r:return t}}}var S=s,x=u,F=c,$=l,O=n,j=d,B=o,_=m,E=h,D=r,k=a,H=i,C=f,T=!1;function z(e){return w(e)===u}t.AsyncMode=S,t.ConcurrentMode=x,t.ContextConsumer=F,t.ContextProvider=$,t.Element=O,t.ForwardRef=j,t.Fragment=B,t.Lazy=_,t.Memo=E,t.Portal=D,t.Profiler=k,t.StrictMode=H,t.Suspense=C,t.isAsyncMode=function(e){return T||(T=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),z(e)||w(e)===s},t.isConcurrentMode=z,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===h},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===l||e.$$typeof===c||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
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
  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(/*! prop-types */"./node_modules/prop-types/index.js")),l=a.default.oneOfType([a.default.string,a.default.number]),c={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},s={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:l,deviceHeight:l,width:l,deviceWidth:l,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:l,type:Object.keys(c)},u=o(s,["type"]),d=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:l,maxHeight:l,minDeviceHeight:l,maxDeviceHeight:l,minWidth:l,maxWidth:l,minDeviceWidth:l,maxDeviceWidth:l,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:l,maxResolution:l},u),f=r(r({},c),d);t.default={all:f,types:c,matchers:s,features:d}},"./src/toQuery.ts":
/*!************************!*\
  !*** ./src/toQuery.ts ***!
  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,o.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
  !*** ./src/useMediaQuery.ts ***!
  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(/*! react */"react"),i=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),l=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),c=r(n(/*! ./toQuery */"./src/toQuery.ts")),s=r(n(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},d=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,c.default)(e)}(e)},n=(0,o.useState)(t),r=n[0],i=n[1];return(0,o.useEffect)((function(){var e=t();r!==e&&i(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,o.useContext)(s.default),n=function(){return u(e)||u(t)},r=(0,o.useState)(n),i=r[0],a=r[1];return(0,o.useEffect)((function(){var e=n();(0,l.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var c=function(e,t){var n=function(){return(0,i.default)(e,t||{},!!t)},r=(0,o.useState)(n),a=r[0],l=r[1],c=d();return(0,o.useEffect)((function(){if(c){var e=n();return l(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),p=function(e){var t=(0,o.useState)(e.matches),n=t[0],r=t[1];return(0,o.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(c),h=d();return(0,o.useEffect)((function(){h&&n&&n(p)}),[p]),(0,o.useEffect)((function(){return function(){c&&c.dispose()}}),[]),p}},react:
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})(),w.exports=v(a);var S=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},x="object"==typeof b&&b&&b.Object===Object&&b,F="object"==typeof self&&self&&self.Object===Object&&self,$=x||F||Function("return this")(),O=$,j=function(){return O.Date.now()},B=/\s/;var _=function(e){for(var t=e.length;t--&&B.test(e.charAt(t)););return t},E=/^\s+/;var D=function(e){return e?e.slice(0,_(e)+1).replace(E,""):e},k=$.Symbol,H=k,C=Object.prototype,T=C.hasOwnProperty,z=C.toString,A=H?H.toStringTag:void 0;var I=function(e){var t=T.call(e,A),n=e[A];try{e[A]=void 0;var r=!0}catch(e){}var o=z.call(e);return r&&(t?e[A]=n:delete e[A]),o},P=Object.prototype.toString;var W=I,R=function(e){return P.call(e)},L=k?k.toStringTag:void 0;var M=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":L&&L in Object(e)?W(e):R(e)};var V=M,N=function(e){return null!=e&&"object"==typeof e};var q=function(e){return"symbol"==typeof e||N(e)&&"[object Symbol]"==V(e)},Q=D,X=S,G=q,U=/^[-+]0x[0-9a-f]+$/i,Y=/^0b[01]+$/i,J=/^0o[0-7]+$/i,K=parseInt;var Z=S,ee=j,te=function(e){if("number"==typeof e)return e;if(G(e))return NaN;if(X(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=X(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Q(e);var n=Y.test(e);return n||J.test(e)?K(e.slice(2),n?2:8):U.test(e)?NaN:+e},ne=Math.max,re=Math.min;var oe=function(e,t,n){var r,o,i,a,l,c,s=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,s=t,a=e.apply(i,n)}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-s>=i}function m(){var e=ee();if(h(e))return g(e);l=setTimeout(m,function(e){var n=t-(e-c);return d?re(n,i-(e-s)):n}(e))}function g(e){return l=void 0,f&&r?p(e):(r=o=void 0,a)}function y(){var e=ee(),n=h(e);if(r=arguments,o=this,c=e,n){if(void 0===l)return function(e){return s=e,l=setTimeout(m,t),u?p(e):a}(c);if(d)return clearTimeout(l),l=setTimeout(m,t),p(c)}return void 0===l&&(l=setTimeout(m,t)),a}return t=te(t)||0,Z(n)&&(u=!!n.leading,i=(d="maxWait"in n)?ne(te(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=c=o=l=void 0},y.flush=function(){return void 0===l?a:g(ee())},y};var ie=Array.isArray,ae=ie,le=q,ce=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,se=/^\w*$/;var ue=function(e,t){if(ae(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!le(e))||(se.test(e)||!ce.test(e)||null!=t&&e in Object(t))},de=M,fe=S;var pe,he=function(e){if(!fe(e))return!1;var t=de(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},me=$["__core-js_shared__"],ge=(pe=/[^.]+$/.exec(me&&me.keys&&me.keys.IE_PROTO||""))?"Symbol(src)_1."+pe:"";var ye=function(e){return!!ge&&ge in e},ve=Function.prototype.toString;var be=he,we=ye,Se=S,xe=function(e){if(null!=e){try{return ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Fe=/^\[object .+?Constructor\]$/,$e=Function.prototype,Oe=Object.prototype,je=$e.toString,Be=Oe.hasOwnProperty,_e=RegExp("^"+je.call(Be).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ee=function(e){return!(!Se(e)||we(e))&&(be(e)?_e:Fe).test(xe(e))},De=function(e,t){return null==e?void 0:e[t]};var ke=function(e,t){var n=De(e,t);return Ee(n)?n:void 0},He=ke(Object,"create"),Ce=He;var Te=function(){this.__data__=Ce?Ce(null):{},this.size=0};var ze=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ae=He,Ie=Object.prototype.hasOwnProperty;var Pe=function(e){var t=this.__data__;if(Ae){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ie.call(t,e)?t[e]:void 0},We=He,Re=Object.prototype.hasOwnProperty;var Le=He;var Me=Te,Ve=ze,Ne=Pe,qe=function(e){var t=this.__data__;return We?void 0!==t[e]:Re.call(t,e)},Qe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Le&&void 0===t?"__lodash_hash_undefined__":t,this};function Xe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Xe.prototype.clear=Me,Xe.prototype.delete=Ve,Xe.prototype.get=Ne,Xe.prototype.has=qe,Xe.prototype.set=Qe;var Ge=Xe;var Ue=function(){this.__data__=[],this.size=0};var Ye=function(e,t){return e===t||e!=e&&t!=t};var Je=function(e,t){for(var n=e.length;n--;)if(Ye(e[n][0],t))return n;return-1},Ke=Je,Ze=Array.prototype.splice;var et=Je;var tt=Je;var nt=Je;var rt=Ue,ot=function(e){var t=this.__data__,n=Ke(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ze.call(t,n,1),--this.size,!0)},it=function(e){var t=this.__data__,n=et(t,e);return n<0?void 0:t[n][1]},at=function(e){return tt(this.__data__,e)>-1},lt=function(e,t){var n=this.__data__,r=nt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ct(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ct.prototype.clear=rt,ct.prototype.delete=ot,ct.prototype.get=it,ct.prototype.has=at,ct.prototype.set=lt;var st=ct,ut=ke($,"Map"),dt=Ge,ft=st,pt=ut;var ht=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var mt=function(e,t){var n=e.__data__;return ht(t)?n["string"==typeof t?"string":"hash"]:n.map},gt=mt;var yt=mt;var vt=mt;var bt=mt;var wt=function(){this.size=0,this.__data__={hash:new dt,map:new(pt||ft),string:new dt}},St=function(e){var t=gt(this,e).delete(e);return this.size-=t?1:0,t},xt=function(e){return yt(this,e).get(e)},Ft=function(e){return vt(this,e).has(e)},$t=function(e,t){var n=bt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ot(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ot.prototype.clear=wt,Ot.prototype.delete=St,Ot.prototype.get=xt,Ot.prototype.has=Ft,Ot.prototype.set=$t;var jt=Ot;function Bt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Bt.Cache||jt),n}Bt.Cache=jt;var _t=Bt;var Et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Dt=/\\(\\)?/g,kt=function(e){var t=_t(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Et,(function(e,n,r,o){t.push(r?o.replace(Dt,"$1"):n||e)})),t}));var Ht=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},Ct=ie,Tt=q,zt=k?k.prototype:void 0,At=zt?zt.toString:void 0;var It=function e(t){if("string"==typeof t)return t;if(Ct(t))return Ht(t,e)+"";if(Tt(t))return At?At.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Pt=It;var Wt=ie,Rt=ue,Lt=kt,Mt=function(e){return null==e?"":Pt(e)};var Vt=q;var Nt=function(e,t){return Wt(e)?e:Rt(e,t)?[e]:Lt(Mt(e))},qt=function(e){if("string"==typeof e||Vt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Qt=function(e,t){for(var n=0,r=(t=Nt(t,e)).length;null!=e&&n<r;)e=e[qt(t[n++])];return n&&n==r?e:void 0};var Xt=function(e,t,n){var r=null==e?void 0:Qt(e,t);return void 0===r?n:r};const Gt=(e,t,n)=>t?Xt(n,t)||Xt(e,t):n||e,Ut=(e,t)=>{const n=t||e.defaultValue;return Xt(e.collections,n)};var Yt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Yt||(Yt={}));const Jt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Kt=e=>t=>{const n=t.theme,r=Ut(Jt,n[Yt.colorScheme]);return n.options&&n.options.color?Gt(r,e,n.options.color):Gt(r,e)},Zt=(Kt("Brand.1"),Kt("Brand.2"),Kt("Brand.3"),Kt("Brand.4"),Kt("Brand.5"),Kt("Brand.6"),Kt("Primary")),en=(Kt("PrimaryDark"),Kt("Secondary")),tn={Light:{1:Kt("Accent.Light.1"),2:Kt("Accent.Light.2"),3:Kt("Accent.Light.3"),4:Kt("Accent.Light.4"),5:Kt("Accent.Light.5"),6:Kt("Accent.Light.6")},Dark:{1:Kt("Accent.Dark.1"),2:Kt("Accent.Dark.2"),3:Kt("Accent.Dark.3")}},nn={1:Kt("Neutral.1"),2:Kt("Neutral.2"),3:Kt("Neutral.3"),4:Kt("Neutral.4"),5:Kt("Neutral.5"),6:Kt("Neutral.6"),7:Kt("Neutral.7"),8:Kt("Neutral.8")},rn={Green:{Text:Kt("Validation.Green.Text"),Icon:Kt("Validation.Green.Icon"),Border:Kt("Validation.Green.Border"),Background:Kt("Validation.Green.Background")},Orange:{Text:Kt("Validation.Orange.Text"),Icon:Kt("Validation.Orange.Icon"),Border:Kt("Validation.Orange.Border"),Background:Kt("Validation.Orange.Background"),Badge:Kt("Validation.Orange.Badge")},Red:{Text:Kt("Validation.Red.Text"),Icon:Kt("Validation.Red.Icon"),Border:Kt("Validation.Red.Border"),Background:Kt("Validation.Red.Background")},Blue:{Text:Kt("Validation.Blue.Text"),Icon:Kt("Validation.Blue.Icon"),Border:Kt("Validation.Blue.Border"),Background:Kt("Validation.Blue.Background")}},on=(Kt("Shadow.Accent"),Kt("Shadow.Red"),Kt("Shadow.Elevation"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),an={collections:{base:{D1:{fontFamily:on.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:on.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:on.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:on.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:on.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:on.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:on.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:on.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:on.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:on.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:on.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:on.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:on.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:on.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},ln=e=>t=>{const n=t.theme,r=Ut(an,n[Yt.textStyleScheme]);return n.options&&n.options.textStyle?Gt(r,e,n.options.textStyle):Gt(r,e)},cn={D1:{fontFamily:ln("D1.fontFamily"),fontSize:ln("D1.fontSize"),fontWeight:ln("D1.fontWeight"),lineHeight:ln("D1.lineHeight"),letterSpacing:ln("D1.letterSpacing")},D2:{fontFamily:ln("D2.fontFamily"),fontSize:ln("D2.fontSize"),fontWeight:ln("D2.fontWeight"),lineHeight:ln("D2.lineHeight"),letterSpacing:ln("D2.letterSpacing")},D3:{fontFamily:ln("D3.fontFamily"),fontSize:ln("D3.fontSize"),fontWeight:ln("D3.fontWeight"),lineHeight:ln("D3.lineHeight"),letterSpacing:ln("D3.letterSpacing")},D4:{fontFamily:ln("D4.fontFamily"),fontSize:ln("D4.fontSize"),fontWeight:ln("D4.fontWeight"),lineHeight:ln("D4.lineHeight"),letterSpacing:ln("D4.letterSpacing")},DBody:{fontFamily:ln("DBody.fontFamily"),fontSize:ln("DBody.fontSize"),fontWeight:ln("DBody.fontWeight"),lineHeight:ln("DBody.lineHeight"),letterSpacing:ln("DBody.letterSpacing")},H1:{fontFamily:ln("H1.fontFamily"),fontSize:ln("H1.fontSize"),fontWeight:ln("H1.fontWeight"),lineHeight:ln("H1.lineHeight"),letterSpacing:ln("H1.letterSpacing")},H2:{fontFamily:ln("H2.fontFamily"),fontSize:ln("H2.fontSize"),fontWeight:ln("H2.fontWeight"),lineHeight:ln("H2.lineHeight"),letterSpacing:ln("H2.letterSpacing")},H3:{fontFamily:ln("H3.fontFamily"),fontSize:ln("H3.fontSize"),fontWeight:ln("H3.fontWeight"),lineHeight:ln("H3.lineHeight"),letterSpacing:ln("H3.letterSpacing")},H4:{fontFamily:ln("H4.fontFamily"),fontSize:ln("H4.fontSize"),fontWeight:ln("H4.fontWeight"),lineHeight:ln("H4.lineHeight"),letterSpacing:ln("H4.letterSpacing")},H5:{fontFamily:ln("H5.fontFamily"),fontSize:ln("H5.fontSize"),fontWeight:ln("H5.fontWeight"),lineHeight:ln("H5.lineHeight"),letterSpacing:ln("H5.letterSpacing")},H6:{fontFamily:ln("H6.fontFamily"),fontSize:ln("H6.fontSize"),fontWeight:ln("H6.fontWeight"),lineHeight:ln("H6.lineHeight"),letterSpacing:ln("H6.letterSpacing")},Body:{fontFamily:ln("Body.fontFamily"),fontSize:ln("Body.fontSize"),fontWeight:ln("Body.fontWeight"),lineHeight:ln("Body.lineHeight"),letterSpacing:ln("Body.letterSpacing")},BodySmall:{fontFamily:ln("BodySmall.fontFamily"),fontSize:ln("BodySmall.fontSize"),fontWeight:ln("BodySmall.fontWeight"),lineHeight:ln("BodySmall.lineHeight"),letterSpacing:ln("BodySmall.letterSpacing")},XSmall:{fontFamily:ln("XSmall.fontFamily"),fontSize:ln("XSmall.fontSize"),fontWeight:ln("XSmall.fontWeight"),lineHeight:ln("XSmall.lineHeight"),letterSpacing:ln("XSmall.letterSpacing")}},sn=e=>{switch(e){case 700:case"bold":return on.Bold;case 600:case"semibold":return on.Semibold;case 300:case"light":return on.Light;case 400:case"regular":return on.Regular;default:return""}},un=(e,t)=>n=>{var r;const i=cn[e].fontFamily(n),a=cn[e].fontWeight(n);return Object.values(on).includes(i)?o`
                font-family: ${sn(t)||sn(a)||i};
                font-weight: normal !important;
            `:o`
            font-family: ${i};
            font-weight: ${null!==(r=dn(t)||a)&&void 0!==r?r:"normal"};
        `},dn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},fn=(e,t,n=!1)=>r=>{const i=cn[e],a=i.fontSize(r);return o`
            ${un(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${o`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},pn=(e=!1,t=!1)=>t?o`
            display: block;
        `:e?o`
            display: inline;
        `:o`
            display: block;
        `;var hn;!function(e){e.D1=r.h1`
        ${e=>o`
                ${fn("D1",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${pn(e.inline,e.paragraph)}
            `}
    `,e.D2=r.h1`
        ${e=>o`
                ${fn("D2",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${pn(e.inline,e.paragraph)}
            `}
    `,e.D3=r.h1`
        ${e=>o`
                ${fn("D3",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${pn(e.inline,e.paragraph)}
            `}
    `,e.D4=r.h1`
        ${e=>o`
                ${fn("D4",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${pn(e.inline,e.paragraph)}
            `}
    `,e.DBody=r.h1`
        ${e=>o`
                ${fn("DBody",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${pn(e.inline,e.paragraph)}
            `}
    `,e.H1=r.h1`
        ${e=>o`
                ${fn("H1",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${pn(e.inline,e.paragraph)}
            `}
    `,e.H2=r.h2`
        ${e=>o`
                ${fn("H2",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${pn(e.inline,e.paragraph)}
            `}
    `,e.H3=r.h3`
        ${e=>o`
                ${fn("H3",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${pn(e.inline,e.paragraph)}
            `}
    `,e.H4=r.h4`
        ${e=>o`
                ${fn("H4",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${pn(e.inline,e.paragraph)}
            `}
    `,e.H5=r.h5`
        ${e=>o`
                ${fn("H5",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${pn(e.inline,e.paragraph)}
            `}
    `,e.H6=r.h6`
        ${e=>o`
                ${fn("H6",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${pn(e.inline,e.paragraph)}
            `}
    `,e.Body=r.p`
        ${e=>o`
                ${fn("Body",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${pn(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=r.p`
        ${e=>o`
                ${fn("BodySmall",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${pn(e.inline,e.paragraph)}
            `}
    `,e.XSmall=r.span`
        ${e=>o`
                ${fn("XSmall",e.weight,e.paragraph)}
                color: ${nn[1]};
                ${pn(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>yn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>yn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(hn||(hn={}));const mn=r.a`
    ${e=>o`
            ${fn(e.textStyle,e.weight)}
            color: ${Zt};
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
`,gn=r(u)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,yn=n=>{var{external:r=!1,children:o}=n,i=p(n,["external","children"]);return e(mn,Object.assign({},i,{children:[o,r&&t(gn,{})]}))},vn=r.div`
    border-radius: 0.5rem;
    background: ${nn[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,bn=e=>{var{children:n}=e,r=p(e,["children"]);const o=r["data-testid"]||"card";return t(vn,Object.assign({},r,{"data-testid":o},{children:"string"==typeof n?t(hn.Body,{children:n}):n}))},wn=r.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return o`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Sn=r.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=o`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=o`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=o`
                transition: none;
            `),t}}
`,xn=({show:e=!1,rootId:n,onOverlayClick:r,children:o,backgroundOpacity:i,backgroundBlur:u=!0,disableTransition:f=!1,enableOverlayClick:p=!1,zIndex:h,id:m})=>{const[g,y]=l(null),[v,b]=l(),w=c(),S=c(!1),x=c(null),F=o&&a.cloneElement(o,{ref:x}),$=m?`lifesg-ds-overlay-root-${m}`:"lifesg-ds-overlay-root";s((()=>{const t=!0===S.current;if(t||(S.current=!0),e){const e=B();if(O(e),!e){const e=setTimeout((()=>{E("add")}),200);return()=>clearTimeout(e)}}else{if(!t)return;if(!w.current){const e=setTimeout((()=>{E("remove")}),200);return()=>clearTimeout(e)}}}),[e]),s((()=>{y(j());const e=B();return O(e),e||_(),()=>{E("remove")}}),[]);const O=e=>{w.current=e,b(e)},j=()=>document&&n?document.getElementById(n):document?document.body:null,B=()=>document.body.classList.contains($n),_=()=>{if(!document.getElementById(Fn)){const e=document.createElement("style");e.id=Fn;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${$n} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${$n}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},E=e=>{const t=document.body.classList.contains($n);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove($n):document.body.classList.add($n)},D=e=>{var t;const n=null===(t=x.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&p&&(e.preventDefault(),r())};return g?d.createPortal(t(wn,Object.assign({id:$,"data-testid":$,$show:e,zIndex:h,$stacked:v},{children:o&&t(Sn,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:i||(v?.5:.8),$backgroundBlur:u,$disableTransition:f,$enableOverlayClick:p,onClick:D},{children:F}))})),g):null},Fn="lifesg-ds-overlay-stylesheet",$n="lifesg-ds-overlay-open",On=r.div`
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
`,jn=e=>{var{id:n="modal",show:r,animationFrom:o="bottom",children:i,enableOverlayClick:a=!0,rootComponentId:c,zIndex:u,onOverlayClick:d,dismissKeyboardOnShow:f=!0}=e,h=p(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[m,g]=l(),[y,v]=l();s((()=>window.visualViewport?(w(),window.visualViewport.addEventListener("resize",w),()=>{window.visualViewport.removeEventListener("resize",w)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),s((()=>{var e,t;r&&f&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const b=()=>{const e=.01*window.innerHeight;g(e)},w=()=>{const e=.01*window.visualViewport.height;g(e),v(window.visualViewport.offsetTop)};return t(xn,Object.assign({"data-testid":`${n}-overlay`,show:r,enableOverlayClick:a,onOverlayClick:d,id:n,rootId:c,zIndex:u},{children:t(On,Object.assign({show:r,animationFrom:o,"data-testid":n,verticalHeight:m,offsetTop:y},h,{children:i}))}))},Bn=r.button`
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

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&o`
                background-color: ${nn[7]};
            `}
    }
`,_n=a.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,l=p(e,["children","focusHighlight","focusOutline","type"]);return t(Bn,Object.assign({ref:n,$outline:i,$highlight:o,type:a},l,{children:r}))})),En=r.div`
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
`,Dn=r(_n)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${tn.Light[1]};
    }
`,kn=r(f)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${nn[3]};
`,Hn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Cn=r.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?o`
            visibility: visible;
            opacity: 1;
            transition: ${Hn};
            z-index: 50;
        `:o`
            visibility: hidden;
            opacity: 0;
            transition: ${Hn};
            z-index: -1;
        `}
    ${e=>(e=>{switch(e){case"top-center":return o`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return o`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return o`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return o`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return o`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return o`
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
`,Tn=r((n=>{var{id:r="modal-box",children:o,onClose:i,showCloseButton:a=!0}=n,l=p(n,["id","children","onClose","showCloseButton"]);return e(En,Object.assign({"data-testid":r},l,{onClick:e=>{e.stopPropagation()}},{children:[a&&t(Dn,Object.assign({onClick:i,"data-testid":"close-button",focusHighlight:!1},{children:t(kn,{})})),o]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`;r.div`
    position: relative;
    width: fit-content;
`,r.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`;const zn=r.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,An=r=>{var{children:o,visible:i,onMobileClose:a}=r,u=p(r,["children","visible","onMobileClose"]);const d=u["data-testid"]||"popover",[f,m]=l("none"),g=c(null),y=w.exports.useMediaQuery({maxWidth:h.mobileL}),v=c(f);s((()=>(x(),window.addEventListener("resize",oe(b,300)),()=>{window.removeEventListener("resize",oe(b,300))})),[]);const b=()=>{x()},S=()=>{a&&a()},x=()=>{const e=F();var t;e&&(t=e,v.current=t,m(t))},F=()=>{if(g.current){const e=g.current.getBoundingClientRect(),t=24,n=e.y<t,r=window.innerWidth-t;return e.x<t?n?"top-left":"left":e.x+e.width>r?n?"top-right":"right":("top-left"===v.current||"left"===v.current)&&e.x-e.width/2>t||("top-right"===v.current||"right"===v.current)&&e.x+2*e.width<r?n?"top-center":"none":n?"top-center":void 0}},$=()=>"string"==typeof o?t(hn.BodySmall,{children:o}):o;return e(n,{children:[t(Cn,Object.assign({ref:g,"data-testid":d,$visible:i,$offset:f},u,{children:t(bn,{children:$()})})),y&&t(jn,Object.assign({show:i,onOverlayClick:S},{children:t(Tn,Object.assign({onClose:S},{children:t(zn,{children:$()})}))}))]})},In=r.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${Zt};
    }
`,Pn=r.div`
    display: inline;
    position: relative;
    width: fit-content;
`,Wn=e=>{var{addonType:n="popover",icon:r,"data-testid":o}=e,a=p(e,["addonType","icon","data-testid"]);return t(In,Object.assign({"data-testid":o},a,{children:r||t(i,{id:`${n}-icon`})}))},Rn=({addon:n})=>{const[r,o]=l(!1),i=c(),a=c(!1),u=w.exports.useMediaQuery({maxWidth:h.mobileL}),d=e=>{a.current=e,o(e)};s((()=>{if(!u)return document.addEventListener("mousedown",f),()=>{document.removeEventListener("mousedown",f)}}),[]);const f=e=>{i&&!i.current.contains(e.target)&&a.current&&d(!1)};return e(Pn,Object.assign({ref:i,id:"addon-popover-wrapper"},{children:[t(An,Object.assign({visible:r,id:n.id,"data-testid":n["data-testid"],onMobileClose:()=>{r&&d(!1)}},{children:n.content})),t(Wn,{addonType:n.type,icon:n.icon,id:`popover-hoc-trigger${n["data-testid"]&&`-${n["data-testid"]}`}`,onClick:()=>d(!r),"aria-label":"popover-button",type:"button"})]}))};var Ln;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ln||(Ln={}));const Mn=r.label`
    ${fn("H5","semibold")}
    color: ${nn[3]};
    margin-bottom: 0.5rem;
    display: inline-block;

    #popover-hoc-wrapper {
        display: inline;
    }

    #popover-hoc-button {
        vertical-align: bottom;
    }
`;r(hn.H6)`
    color: ${rn.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;const Vn=r(hn.BodySmall)`
    color: ${nn[3]};
`,Nn=n=>{var{children:r,addon:o,subtitle:i,"data-testid":a}=n,l=p(n,["children","addon","subtitle","data-testid"]);return e(Mn,Object.assign({},l,{children:[r,o&&o.type&&("popover"===o.type?o&&t(Rn,{addon:o}):null),"string"==typeof i?t(Vn,Object.assign({as:"span","data-testid":a?`${a}-subtitle`:"subtitle"},l,{children:i})):i]}))},qn=({label:n,value:r,displayWidth:o="full"})=>e(y,Object.assign({$widthStyle:o},{children:[t(Nn,{children:n}),t(hn.Body,{children:r})]})),Qn=a.forwardRef(((e,n)=>{const{children:r,"data-testid":o="container",type:i="flex",stretch:a=!1}=e,l=p(e,["children","data-testid","type","stretch"]);return t(Xn,Object.assign({ref:n,"data-testid":o,$type:i,$stretch:a},l,{children:r}))})),Xn=r.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?o`
                padding: 0 3rem;
            `:o`
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

    ${e=>{switch(e.$type){case"grid":return o`
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
                `;case"flex-column":return o`
                    display: flex;
                    flex-direction: column;
                `;default:return o`
                    display: flex;
                `}}}
`,Gn=a.forwardRef(((e,n)=>{const{children:r,"data-testid":o="section",stretch:i=!1}=e,a=p(e,["children","data-testid","stretch"]);return t(Un,Object.assign({ref:n,"data-testid":o,$stretch:i},a,{children:r}))})),Un=r.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?o`
                ${g.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:o`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,Yn=a.forwardRef(((e,n)=>{const{children:r,"data-testid":o="content",className:i,type:a="flex",stretch:l=!1}=e,c=p(e,["children","data-testid","className","type","stretch"]);return t(Gn,Object.assign({ref:n,"data-testid":o,className:i,stretch:l},c,{children:t(Qn,Object.assign({"data-testid":`${o}-container`,type:a,"data-id":"container",stretch:l},{children:r}))}))})),Jn={Section:Gn,Container:Qn,Content:Yn},Kn=r(Jn.Section)`
    background: ${nn[7]};
`,Zn=r(Jn.Container)`
    padding: 2rem 0;
`,er=r(hn.H3)`
    margin-bottom: 1rem;
    grid-column: span 8;
`,tr=r(hn.Body)`
    margin-bottom: 2rem;
    grid-column: span 8;
`,nr=r.div`
    grid-column: span 8;
`,rr=r.ul`
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
`,or=Object.assign((r=>{var{items:o,title:i,description:a,topSection:l,bottomSection:c,children:s}=r,u=p(r,["items","title","description","topSection","bottomSection","children"]);const d=()=>{if(o&&o.length>0){const e=o.map(((e,n)=>t(qn,Object.assign({},e),n)));return t(rr,{children:e})}return null};return t(Kn,Object.assign({},u,{children:t(Zn,Object.assign({type:"grid"},{children:s||e(n,{children:[i&&t(er,{children:i}),a&&t(tr,{children:a}),l&&t(nr,Object.assign({"data-id":"top-section"},{children:l})),d(),c&&t(nr,Object.assign({"data-id":"bottom-section"},{children:c}))]})}))}))}),{ItemSection:rr,Item:qn});export{or as UneditableSection};
//# sourceMappingURL=index.js.map
