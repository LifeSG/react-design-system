import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useState as o,useRef as i,useEffect as a}from"react";import{ExternalIcon as l}from"@lifesg/react-icons/external";import c,{css as s}from"styled-components";import u from"react-dom";import{CrossIcon as d}from"@lifesg/react-icons/cross";var f,p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h={exports:{}};f=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
  \************************************************************/(e,t,n)=>{var r,o=n(/*! react-is */"./node_modules/react-is/index.js"),i=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),l=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),c=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function s(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",f={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:y(s),arrayOf:function(e){return y((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var l=t[n];if(!Array.isArray(l))return new h("Invalid "+o+" `"+i+"` of type `"+b(l)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<l.length;c++){var s=e(l,c,r,o,i+"["+c+"]",a);if(s instanceof Error)return s}return null}))},element:y((function(t,n,r,o,i){var a=t[n];return e(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:y((function(e,t,n,r,i){var a=e[t];return o.isValidElementType(a)?null:new h("Invalid "+r+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return y((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||d;return new h("Invalid "+o+" `"+i+"` of type `"+((l=t[n]).constructor&&l.constructor.name?l.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var l;return null}))},node:y((function(e,t,n,r,o){return v(e[t])?null:new h("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return y((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],s=b(c);if("object"!==s)return new h("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var u in c)if(l(c,u)){var d=e(c,u,r,o,i+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?y((function(t,n,r,o,i){for(var a=t[n],l=0;l<e.length;l++)if(p(a,e[l]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+c+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),s)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),s;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+F(n)+" at index "+t+"."),s}return y((function(t,n,r,o,i){for(var c=[],s=0;s<e.length;s++){var u=(0,e[s])(t,n,r,o,i,a);if(null==u)return null;u.data&&l(u.data,"expectedType")&&c.push(u.data.expectedType)}return new h("Invalid "+o+" `"+i+"` supplied to `"+r+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return y((function(t,n,r,o,i){var l=t[n],c=b(l);if("object"!==c)return new h("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var u=e[s];if("function"!=typeof u)return g(r,o,i,s,w(u));var d=u(l,s,r,o,i+"."+s,a);if(d)return d}return null}))},exact:function(e){return y((function(t,n,r,o,c){var s=t[n],u=b(s);if("object"!==u)return new h("Invalid "+o+" `"+c+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=i({},t[n],e);for(var f in d){var p=e[f];if(l(e,f)&&"function"!=typeof p)return g(r,o,c,f,w(p));if(!p)return new h("Invalid "+o+" `"+c+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=p(s,f,r,o,c+"."+f,a);if(y)return y}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function y(e){var n={},o=0;function i(i,l,c,s,u,f,p){if(s=s||d,f=f||c,p!==a){if(t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("undefined"!=typeof console){var m=s+":"+c;!n[m]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[m]=!0,o++)}}return null==l[c]?i?null===l[c]?new h("The "+u+" `"+f+"` is marked as required in `"+s+"`, but its value is `null`."):new h("The "+u+" `"+f+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(l,c,s,u,f)}var l=i.bind(null,!1);return l.isRequired=i.bind(null,!0),l}function m(e){return y((function(t,n,r,o,i,a){var l=t[n];return b(l)!==e?new h("Invalid "+o+" `"+i+"` of type `"+w(l)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function g(e,t,n,r,o){return new h((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!v(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function F(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,f.checkPropTypes=c,f.resetWarningCache=c.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,l=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case s:case u:case o:case a:case i:case f:return p;default:var m=p&&p.$$typeof;switch(m){case c:case d:case y:case h:case l:return m;default:return t}}case r:return t}}}var F=s,S=u,x=c,$=l,_=n,B=d,O=o,j=y,E=h,D=r,H=a,k=i,C=f,T=!1;function z(e){return w(e)===u}t.AsyncMode=F,t.ConcurrentMode=S,t.ContextConsumer=x,t.ContextProvider=$,t.Element=_,t.ForwardRef=B,t.Fragment=O,t.Lazy=j,t.Memo=E,t.Portal=D,t.Profiler=H,t.StrictMode=k,t.Suspense=C,t.isAsyncMode=function(e){return T||(T=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),z(e)||w(e)===s},t.isConcurrentMode=z,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===y},t.isMemo=function(e){return w(e)===h},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===l||e.$$typeof===c||e.$$typeof===d||e.$$typeof===g||e.$$typeof===v||e.$$typeof===b||e.$$typeof===m)},t.typeOf=w}()},"./node_modules/react-is/index.js":
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
  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})(),h.exports=f(r);const y={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var m=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},g="object"==typeof p&&p&&p.Object===Object&&p,v="object"==typeof self&&self&&self.Object===Object&&self,b=g||v||Function("return this")(),w=b,F=function(){return w.Date.now()},S=/\s/;var x=function(e){for(var t=e.length;t--&&S.test(e.charAt(t)););return t},$=/^\s+/;var _=function(e){return e?e.slice(0,x(e)+1).replace($,""):e},B=b.Symbol,O=B,j=Object.prototype,E=j.hasOwnProperty,D=j.toString,H=O?O.toStringTag:void 0;var k=function(e){var t=E.call(e,H),n=e[H];try{e[H]=void 0;var r=!0}catch(e){}var o=D.call(e);return r&&(t?e[H]=n:delete e[H]),o},C=Object.prototype.toString;var T=k,z=function(e){return C.call(e)},A=B?B.toStringTag:void 0;var P=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":A&&A in Object(e)?T(e):z(e)};var I=P,W=function(e){return null!=e&&"object"==typeof e};var L=function(e){return"symbol"==typeof e||W(e)&&"[object Symbol]"==I(e)},R=_,M=m,V=L,N=/^[-+]0x[0-9a-f]+$/i,q=/^0b[01]+$/i,Q=/^0o[0-7]+$/i,X=parseInt;var G=m,U=F,Y=function(e){if("number"==typeof e)return e;if(V(e))return NaN;if(M(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=M(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=R(e);var n=q.test(e);return n||Q.test(e)?X(e.slice(2),n?2:8):N.test(e)?NaN:+e},J=Math.max,K=Math.min;var Z=function(e,t,n){var r,o,i,a,l,c,s=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,s=t,a=e.apply(i,n)}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-s>=i}function y(){var e=U();if(h(e))return m(e);l=setTimeout(y,function(e){var n=t-(e-c);return d?K(n,i-(e-s)):n}(e))}function m(e){return l=void 0,f&&r?p(e):(r=o=void 0,a)}function g(){var e=U(),n=h(e);if(r=arguments,o=this,c=e,n){if(void 0===l)return function(e){return s=e,l=setTimeout(y,t),u?p(e):a}(c);if(d)return clearTimeout(l),l=setTimeout(y,t),p(c)}return void 0===l&&(l=setTimeout(y,t)),a}return t=Y(t)||0,G(n)&&(u=!!n.leading,i=(d="maxWait"in n)?J(Y(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=c=o=l=void 0},g.flush=function(){return void 0===l?a:m(U())},g};var ee=Array.isArray,te=ee,ne=L,re=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,oe=/^\w*$/;var ie=function(e,t){if(te(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ne(e))||(oe.test(e)||!re.test(e)||null!=t&&e in Object(t))},ae=P,le=m;var ce,se=function(e){if(!le(e))return!1;var t=ae(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ue=b["__core-js_shared__"],de=(ce=/[^.]+$/.exec(ue&&ue.keys&&ue.keys.IE_PROTO||""))?"Symbol(src)_1."+ce:"";var fe=function(e){return!!de&&de in e},pe=Function.prototype.toString;var he=se,ye=fe,me=m,ge=function(e){if(null!=e){try{return pe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ve=/^\[object .+?Constructor\]$/,be=Function.prototype,we=Object.prototype,Fe=be.toString,Se=we.hasOwnProperty,xe=RegExp("^"+Fe.call(Se).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var $e=function(e){return!(!me(e)||ye(e))&&(he(e)?xe:ve).test(ge(e))},_e=function(e,t){return null==e?void 0:e[t]};var Be=function(e,t){var n=_e(e,t);return $e(n)?n:void 0},Oe=Be(Object,"create"),je=Oe;var Ee=function(){this.__data__=je?je(null):{},this.size=0};var De=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},He=Oe,ke=Object.prototype.hasOwnProperty;var Ce=function(e){var t=this.__data__;if(He){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ke.call(t,e)?t[e]:void 0},Te=Oe,ze=Object.prototype.hasOwnProperty;var Ae=Oe;var Pe=Ee,Ie=De,We=Ce,Le=function(e){var t=this.__data__;return Te?void 0!==t[e]:ze.call(t,e)},Re=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ae&&void 0===t?"__lodash_hash_undefined__":t,this};function Me(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Me.prototype.clear=Pe,Me.prototype.delete=Ie,Me.prototype.get=We,Me.prototype.has=Le,Me.prototype.set=Re;var Ve=Me;var Ne=function(){this.__data__=[],this.size=0};var qe=function(e,t){return e===t||e!=e&&t!=t};var Qe=function(e,t){for(var n=e.length;n--;)if(qe(e[n][0],t))return n;return-1},Xe=Qe,Ge=Array.prototype.splice;var Ue=Qe;var Ye=Qe;var Je=Qe;var Ke=Ne,Ze=function(e){var t=this.__data__,n=Xe(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ge.call(t,n,1),--this.size,!0)},et=function(e){var t=this.__data__,n=Ue(t,e);return n<0?void 0:t[n][1]},tt=function(e){return Ye(this.__data__,e)>-1},nt=function(e,t){var n=this.__data__,r=Je(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function rt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}rt.prototype.clear=Ke,rt.prototype.delete=Ze,rt.prototype.get=et,rt.prototype.has=tt,rt.prototype.set=nt;var ot=rt,it=Be(b,"Map"),at=Ve,lt=ot,ct=it;var st=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var ut=function(e,t){var n=e.__data__;return st(t)?n["string"==typeof t?"string":"hash"]:n.map},dt=ut;var ft=ut;var pt=ut;var ht=ut;var yt=function(){this.size=0,this.__data__={hash:new at,map:new(ct||lt),string:new at}},mt=function(e){var t=dt(this,e).delete(e);return this.size-=t?1:0,t},gt=function(e){return ft(this,e).get(e)},vt=function(e){return pt(this,e).has(e)},bt=function(e,t){var n=ht(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function wt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}wt.prototype.clear=yt,wt.prototype.delete=mt,wt.prototype.get=gt,wt.prototype.has=vt,wt.prototype.set=bt;var Ft=wt;function St(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(St.Cache||Ft),n}St.Cache=Ft;var xt=St;var $t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_t=/\\(\\)?/g,Bt=function(e){var t=xt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace($t,(function(e,n,r,o){t.push(r?o.replace(_t,"$1"):n||e)})),t}));var Ot=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},jt=ee,Et=L,Dt=B?B.prototype:void 0,Ht=Dt?Dt.toString:void 0;var kt=function e(t){if("string"==typeof t)return t;if(jt(t))return Ot(t,e)+"";if(Et(t))return Ht?Ht.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Ct=kt;var Tt=ee,zt=ie,At=Bt,Pt=function(e){return null==e?"":Ct(e)};var It=L;var Wt=function(e,t){return Tt(e)?e:zt(e,t)?[e]:At(Pt(e))},Lt=function(e){if("string"==typeof e||It(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Rt=function(e,t){for(var n=0,r=(t=Wt(t,e)).length;null!=e&&n<r;)e=e[Lt(t[n++])];return n&&n==r?e:void 0};var Mt=function(e,t,n){var r=null==e?void 0:Rt(e,t);return void 0===r?n:r};const Vt=(e,t,n)=>t?Mt(n,t)||Mt(e,t):n||e,Nt=(e,t)=>{const n=t||e.defaultValue;return Mt(e.collections,n)};var qt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(qt||(qt={}));const Qt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Xt=e=>t=>{const n=t.theme,r=Nt(Qt,n[qt.colorScheme]);return n.options&&n.options.color?Vt(r,e,n.options.color):Vt(r,e)},Gt=(Xt("Brand.1"),Xt("Brand.2"),Xt("Brand.3"),Xt("Brand.4"),Xt("Brand.5"),Xt("Brand.6"),Xt("Primary")),Ut=(Xt("PrimaryDark"),Xt("Secondary")),Yt={Light:{1:Xt("Accent.Light.1"),2:Xt("Accent.Light.2"),3:Xt("Accent.Light.3"),4:Xt("Accent.Light.4"),5:Xt("Accent.Light.5"),6:Xt("Accent.Light.6")},Dark:{1:Xt("Accent.Dark.1"),2:Xt("Accent.Dark.2"),3:Xt("Accent.Dark.3")}},Jt={1:Xt("Neutral.1"),2:Xt("Neutral.2"),3:Xt("Neutral.3"),4:Xt("Neutral.4"),5:Xt("Neutral.5"),6:Xt("Neutral.6"),7:Xt("Neutral.7"),8:Xt("Neutral.8")},Kt=(Xt("Validation.Green.Text"),Xt("Validation.Green.Icon"),Xt("Validation.Green.Border"),Xt("Validation.Green.Background"),Xt("Validation.Orange.Text"),Xt("Validation.Orange.Icon"),Xt("Validation.Orange.Border"),Xt("Validation.Orange.Background"),Xt("Validation.Orange.Badge"),Xt("Validation.Red.Text"),Xt("Validation.Red.Icon"),Xt("Validation.Red.Border"),Xt("Validation.Red.Background"),Xt("Validation.Blue.Text"),Xt("Validation.Blue.Icon"),Xt("Validation.Blue.Border"),Xt("Validation.Blue.Background"),Xt("Shadow.Accent"),Xt("Shadow.Red"),Xt("Shadow.Elevation"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),Zt={collections:{base:{D1:{fontFamily:Kt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Kt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Kt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Kt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Kt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Kt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Kt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Kt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Kt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Kt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Kt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Kt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Kt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Kt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},en=e=>t=>{const n=t.theme,r=Nt(Zt,n[qt.textStyleScheme]);return n.options&&n.options.textStyle?Vt(r,e,n.options.textStyle):Vt(r,e)},tn={D1:{fontFamily:en("D1.fontFamily"),fontSize:en("D1.fontSize"),fontWeight:en("D1.fontWeight"),lineHeight:en("D1.lineHeight"),letterSpacing:en("D1.letterSpacing")},D2:{fontFamily:en("D2.fontFamily"),fontSize:en("D2.fontSize"),fontWeight:en("D2.fontWeight"),lineHeight:en("D2.lineHeight"),letterSpacing:en("D2.letterSpacing")},D3:{fontFamily:en("D3.fontFamily"),fontSize:en("D3.fontSize"),fontWeight:en("D3.fontWeight"),lineHeight:en("D3.lineHeight"),letterSpacing:en("D3.letterSpacing")},D4:{fontFamily:en("D4.fontFamily"),fontSize:en("D4.fontSize"),fontWeight:en("D4.fontWeight"),lineHeight:en("D4.lineHeight"),letterSpacing:en("D4.letterSpacing")},DBody:{fontFamily:en("DBody.fontFamily"),fontSize:en("DBody.fontSize"),fontWeight:en("DBody.fontWeight"),lineHeight:en("DBody.lineHeight"),letterSpacing:en("DBody.letterSpacing")},H1:{fontFamily:en("H1.fontFamily"),fontSize:en("H1.fontSize"),fontWeight:en("H1.fontWeight"),lineHeight:en("H1.lineHeight"),letterSpacing:en("H1.letterSpacing")},H2:{fontFamily:en("H2.fontFamily"),fontSize:en("H2.fontSize"),fontWeight:en("H2.fontWeight"),lineHeight:en("H2.lineHeight"),letterSpacing:en("H2.letterSpacing")},H3:{fontFamily:en("H3.fontFamily"),fontSize:en("H3.fontSize"),fontWeight:en("H3.fontWeight"),lineHeight:en("H3.lineHeight"),letterSpacing:en("H3.letterSpacing")},H4:{fontFamily:en("H4.fontFamily"),fontSize:en("H4.fontSize"),fontWeight:en("H4.fontWeight"),lineHeight:en("H4.lineHeight"),letterSpacing:en("H4.letterSpacing")},H5:{fontFamily:en("H5.fontFamily"),fontSize:en("H5.fontSize"),fontWeight:en("H5.fontWeight"),lineHeight:en("H5.lineHeight"),letterSpacing:en("H5.letterSpacing")},H6:{fontFamily:en("H6.fontFamily"),fontSize:en("H6.fontSize"),fontWeight:en("H6.fontWeight"),lineHeight:en("H6.lineHeight"),letterSpacing:en("H6.letterSpacing")},Body:{fontFamily:en("Body.fontFamily"),fontSize:en("Body.fontSize"),fontWeight:en("Body.fontWeight"),lineHeight:en("Body.lineHeight"),letterSpacing:en("Body.letterSpacing")},BodySmall:{fontFamily:en("BodySmall.fontFamily"),fontSize:en("BodySmall.fontSize"),fontWeight:en("BodySmall.fontWeight"),lineHeight:en("BodySmall.lineHeight"),letterSpacing:en("BodySmall.letterSpacing")},XSmall:{fontFamily:en("XSmall.fontFamily"),fontSize:en("XSmall.fontSize"),fontWeight:en("XSmall.fontWeight"),lineHeight:en("XSmall.lineHeight"),letterSpacing:en("XSmall.letterSpacing")}},nn=e=>{switch(e){case 700:case"bold":return Kt.Bold;case 600:case"semibold":return Kt.Semibold;case 300:case"light":return Kt.Light;case 400:case"regular":return Kt.Regular;default:return""}},rn=(e,t)=>n=>{const r=tn[e].fontFamily(n),o=tn[e].fontWeight(n);return Object.values(Kt).includes(r)?s`
                font-family: ${nn(t)||nn(o)||r};
                font-weight: normal !important;
            `:s`
            font-family: ${r};
            font-weight: ${(on(t)||o)??"normal"};
        `},on=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},an=(e,t,n=!1)=>r=>{const o=tn[e],i=o.fontSize(r);return s`
            ${rn(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${s`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},ln=(e=!1,t=!1)=>t?s`
            display: block;
        `:e?s`
            display: inline;
        `:s`
            display: block;
        `;var cn;!function(e){e.D1=c.h1`
        ${e=>s`
                ${an("D1",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${ln(e.inline,e.paragraph)}
            `}
    `,e.D2=c.h1`
        ${e=>s`
                ${an("D2",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${ln(e.inline,e.paragraph)}
            `}
    `,e.D3=c.h1`
        ${e=>s`
                ${an("D3",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${ln(e.inline,e.paragraph)}
            `}
    `,e.D4=c.h1`
        ${e=>s`
                ${an("D4",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${ln(e.inline,e.paragraph)}
            `}
    `,e.DBody=c.h1`
        ${e=>s`
                ${an("DBody",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${ln(e.inline,e.paragraph)}
            `}
    `,e.H1=c.h1`
        ${e=>s`
                ${an("H1",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${ln(e.inline,e.paragraph)}
            `}
    `,e.H2=c.h2`
        ${e=>s`
                ${an("H2",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${ln(e.inline,e.paragraph)}
            `}
    `,e.H3=c.h3`
        ${e=>s`
                ${an("H3",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${ln(e.inline,e.paragraph)}
            `}
    `,e.H4=c.h4`
        ${e=>s`
                ${an("H4",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${ln(e.inline,e.paragraph)}
            `}
    `,e.H5=c.h5`
        ${e=>s`
                ${an("H5",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${ln(e.inline,e.paragraph)}
            `}
    `,e.H6=c.h6`
        ${e=>s`
                ${an("H6",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${ln(e.inline,e.paragraph)}
            `}
    `,e.Body=c.p`
        ${e=>s`
                ${an("Body",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${ln(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=c.p`
        ${e=>s`
                ${an("BodySmall",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${ln(e.inline,e.paragraph)}
            `}
    `,e.XSmall=c.span`
        ${e=>s`
                ${an("XSmall",e.weight,e.paragraph)}
                color: ${Jt[1]};
                ${ln(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>dn({...e,textStyle:"Body"}),Small:e=>dn({...e,textStyle:"BodySmall"})}}(cn||(cn={}));const sn=c.a`
    ${e=>s`
            ${an(e.textStyle,e.weight)}
            color: ${Gt};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ut};

                svg {
                    color: ${Ut};
                }
            }
        `}
`,un=c(l)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,dn=({external:n=!1,children:r,...o})=>e(sn,{...o,children:[r,n&&t(un,{})]}),fn=c.div`
    border-radius: 0.5rem;
    background: ${Jt[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,pn=({children:e,...n})=>{const r=n["data-testid"]||"card";return t(fn,{...n,"data-testid":r,children:"string"==typeof e?t(cn.Body,{children:e}):e})},hn=c.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return s`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,yn=c.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=s`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=s`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=s`
                transition: none;
            `),t}}
`,mn=({show:e=!1,rootId:n,onOverlayClick:l,children:c,backgroundOpacity:s,backgroundBlur:d=!0,disableTransition:f=!1,enableOverlayClick:p=!1,zIndex:h,id:y})=>{const[m,g]=o(null),[v,b]=o(),w=i(),F=i(null),S=c&&r.cloneElement(c,{ref:F}),x=y?`lifesg-ds-overlay-root-${y}`:"lifesg-ds-overlay-root";a((()=>{if(e){const e=B();if($(e),!e){const e=setTimeout((()=>{j("add")}),200);return()=>clearTimeout(e)}}else if(!w.current){const e=setTimeout((()=>{j("remove")}),200);return()=>clearTimeout(e)}}),[e]),a((()=>{g(_());const e=B();return $(e),e||O(),()=>{j("remove")}}),[]);const $=e=>{w.current=e,b(e)},_=()=>document&&n?document.getElementById(n):document?document.body:null,B=()=>document.body.classList.contains(vn),O=()=>{if(!document.getElementById(gn)){const e=document.createElement("style");e.id=gn;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${vn} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${vn}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},j=e=>{const t=document.body.classList.contains(vn);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(vn):document.body.classList.add(vn)},E=e=>{const t=F.current?.firstChild;t&&t.contains(e.target)||l&&p&&(e.preventDefault(),l())};return m?u.createPortal(t(hn,{id:x,"data-testid":x,$show:e,zIndex:h,$stacked:v,children:c&&t(yn,{"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:s||(v?.5:.8),$backgroundBlur:d,$disableTransition:f,$enableOverlayClick:p,onClick:E,children:S})}),m):null},gn="lifesg-ds-overlay-stylesheet",vn="lifesg-ds-overlay-open",bn=e=>Object.keys(y).reduce(((t,n)=>{const r=y[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),wn=bn("max-width"),Fn=(bn("min-width"),c.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${wn.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`),Sn=({id:e="modal",show:n,animationFrom:r="bottom",children:i,enableOverlayClick:l=!0,rootComponentId:c,zIndex:s,onOverlayClick:u,dismissKeyboardOnShow:d=!0,...f})=>{const[p,h]=o(),[y,m]=o();a((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{window.visualViewport.removeEventListener("resize",v)}):(g(),window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)})),[]),a((()=>{n&&d&&document.activeElement?.blur?.()}),[n]);const g=()=>{const e=.01*window.innerHeight;h(e)},v=()=>{const e=.01*window.visualViewport.height;h(e),m(window.visualViewport.offsetTop)};return t(mn,{"data-testid":`${e}-overlay`,show:n,enableOverlayClick:l,onOverlayClick:u,id:e,rootId:c,zIndex:s,children:t(Fn,{show:n,animationFrom:r,"data-testid":e,verticalHeight:p,offsetTop:y,...f,children:i})})},xn=c.button`
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

        ${({$highlight:e})=>e&&s`
                background-color: ${Jt[7]};
            `}
    }
`,$n=r.forwardRef((({children:e,focusHighlight:n=!0,focusOutline:r="none",type:o="button",...i},a)=>t(xn,{ref:a,$outline:r,$highlight:n,type:o,...i,children:e}))),_n=c.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Jt[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${wn.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Bn=c($n)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Yt.Light[1]};
    }
`,On=c(d)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Jt[4]};
`,jn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",En=c.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?s`
            visibility: visible;
            opacity: 1;
            transition: ${jn};
            z-index: 2;
        `:s`
            visibility: hidden;
            opacity: 0;
            transition: ${jn};
            z-index: -1;
        `}
    ${e=>(e=>{switch(e){case"top-center":return s`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return s`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return s`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return s`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return s`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return s`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `}})(e.$offset)}

	${wn.mobileL} {
        display: none;
    }
`,Dn=c((({id:n="modal-box",children:r,onClose:o,showCloseButton:i=!0,...a})=>e(_n,{"data-testid":n,...a,onClick:e=>{e.stopPropagation()},children:[i&&t(Bn,{onClick:o,"data-testid":"close-button",focusHighlight:!1,children:t(On,{})}),r]})))`
    padding: 3.5rem 1.25rem 2.5rem;
`,Hn=c.div`
    position: relative;
    width: fit-content;
`,kn=c.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,Cn=({children:r,visible:l,onMobileClose:c,...s})=>{const u=s["data-testid"]||"popover",[d,f]=o("none"),p=i(null),m=h.exports.useMediaQuery({maxWidth:y.mobileL}),g=i(d);a((()=>(w(),window.addEventListener("resize",Z(v,300)),()=>{window.removeEventListener("resize",Z(v,300))})),[]);const v=()=>{w()},b=()=>{c&&c()},w=()=>{const e=F();var t;e&&(t=e,g.current=t,f(t))},F=()=>{if(p.current){const e=p.current.getBoundingClientRect(),t=24,n=e.y<t,r=window.innerWidth-t;return e.x<t?n?"top-left":"left":e.x+e.width>r?n?"top-right":"right":("top-left"===g.current||"left"===g.current)&&e.x-e.width/2>t||("top-right"===g.current||"right"===g.current)&&e.x+2*e.width<r?n?"top-center":"none":void 0}},S=()=>"string"==typeof r?t(cn.BodySmall,{children:r}):r;return e(n,{children:[t(En,{ref:p,"data-testid":u,$visible:l,$offset:d,...s,children:t(pn,{children:S()})}),m&&t(Sn,{show:l,onOverlayClick:b,children:t(Dn,{onClose:b,children:S()})})]})},Tn=(n,r)=>l=>{const{onPopoverAppear:c,onPopoverDismiss:s,...u}=l,d=r.trigger||"click",f=u,[p,m]=o(!1),g=i(),v=h.exports.useMediaQuery({maxWidth:y.mobileL});a((()=>{if(!v)return document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}}),[p]);const b=e=>{g&&!g.current.contains(e.target)&&(p&&m(!1),s&&s())};return e(Hn,{id:"popover-hoc-wrapper",ref:g,children:[t(kn,{id:`popover-hoc-trigger${r["data-testid"]&&`-${r["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===d||v)&&(m(!p),!p&&c&&c(),p&&s&&s())},onMouseEnter:()=>{"hover"!==d||v||m(!0)},onMouseLeave:()=>{"hover"===d&&p&&!v&&m(!1)},"aria-label":"popover-button",children:t(n,{...f})}),t(Cn,{visible:p,id:r.id,"data-testid":r["data-testid"],onMobileClose:()=>{m(!1)},children:r.content})]})};export{Cn as Popover,Tn as withPopover};
//# sourceMappingURL=index.js.map
