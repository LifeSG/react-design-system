import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import r,{useState as o,useRef as i,useEffect as a}from"react";import l from"react-dom";import c,{css as s}from"styled-components";var u,d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},f={exports:{}};u=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,l,c=o(e),s=1;s<arguments.length;s++){for(var u in a=Object(arguments[s]))n.call(a,u)&&(c[u]=a[u]);if(t){l=t(a);for(var d=0;d<l.length;d++)r.call(a,l[d])&&(c[l[d]]=a[l[d]])}}return c}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/(e,t,n)=>{var r,o=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function l(e,t,n,l,c){for(var s in e)if(a(e,s)){var u;try{if("function"!=typeof e[s]){var d=Error((l||"React class")+": "+n+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[s](t,s,l,n,null,o)}catch(e){u=e}if(!u||u instanceof Error||r((l||"React class")+": type specification of "+n+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in i)){i[u.message]=!0;var f=c?c():"";r("Failed "+n+" type: "+u.message+(null!=f?f:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},l.resetWarningCache=function(){i={}},e.exports=l},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/(e,t,n)=>{var r,o=n(/*! react-is */"./node_modules/react-is/index.js"),i=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),l=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),c=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function s(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="<<anonymous>>",d={array:y("array"),bigint:y("bigint"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:h(s),arrayOf:function(e){return h((function(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var l=t[n];if(!Array.isArray(l))return new p("Invalid "+o+" `"+i+"` of type `"+v(l)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<l.length;c++){var s=e(l,c,r,o,i+"["+c+"]",a);if(s instanceof Error)return s}return null}))},element:h((function(t,n,r,o,i){var a=t[n];return e(a)?null:new p("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:h((function(e,t,n,r,i){var a=e[t];return o.isValidElementType(a)?null:new p("Invalid "+r+" `"+i+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return h((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||u;return new p("Invalid "+o+" `"+i+"` of type `"+((l=t[n]).constructor&&l.constructor.name?l.constructor.name:u)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var l;return null}))},node:h((function(e,t,n,r,o){return g(e[t])?null:new p("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return h((function(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],s=v(c);if("object"!==s)return new p("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var u in c)if(l(c,u)){var d=e(c,u,r,o,i+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){if(!Array.isArray(e))return r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),s;function t(t,n,r,o,i){for(var a=t[n],l=0;l<e.length;l++)if(f(a,e[l]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===b(t)?String(t):t}));return new p("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+c+".")}return h(t)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),s;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(n)+" at index "+t+"."),s}return h((function(t,n,r,o,i){for(var c=[],s=0;s<e.length;s++){var u=(0,e[s])(t,n,r,o,i,a);if(null==u)return null;u.data&&l(u.data,"expectedType")&&c.push(u.data.expectedType)}return new p("Invalid "+o+" `"+i+"` supplied to `"+r+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return h((function(t,n,r,o,i){var l=t[n],c=v(l);if("object"!==c)return new p("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var u=e[s];if("function"!=typeof u)return m(r,o,i,s,b(u));var d=u(l,s,r,o,i+"."+s,a);if(d)return d}return null}))},exact:function(e){return h((function(t,n,r,o,c){var s=t[n],u=v(s);if("object"!==u)return new p("Invalid "+o+" `"+c+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=i({},t[n],e);for(var f in d){var h=e[f];if(l(e,f)&&"function"!=typeof h)return m(r,o,c,f,b(h));if(!h)return new p("Invalid "+o+" `"+c+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=h(s,f,r,o,c+"."+f,a);if(y)return y}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function h(e){var n={},o=0;function i(i,l,c,s,d,f,h){if(s=s||u,f=f||c,h!==a){if(t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("undefined"!=typeof console){var m=s+":"+c;!n[m]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[m]=!0,o++)}}return null==l[c]?i?null===l[c]?new p("The "+d+" `"+f+"` is marked as required in `"+s+"`, but its value is `null`."):new p("The "+d+" `"+f+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(l,c,s,d,f)}var l=i.bind(null,!1);return l.isRequired=i.bind(null,!0),l}function y(e){return h((function(t,n,r,o,i,a){var l=t[n];return v(l)!==e?new p("Invalid "+o+" `"+i+"` of type `"+b(l)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,n,r,o){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function g(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(g);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!g(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!g(a[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function b(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=b(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,d.checkPropTypes=c,d.resetWarningCache=c.resetWarningCache,d.PropTypes=d,d}},"./node_modules/prop-types/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,l=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case s:case u:case o:case a:case i:case f:return p;default:var m=p&&p.$$typeof;switch(m){case c:case d:case y:case h:case l:return m;default:return t}}case r:return t}}}var S=s,x=u,$=c,F=l,_=n,O=d,j=o,C=y,H=h,B=r,D=a,k=i,E=f,z=!1;function T(e){return w(e)===u}t.AsyncMode=S,t.ConcurrentMode=x,t.ContextConsumer=$,t.ContextProvider=F,t.Element=_,t.ForwardRef=O,t.Fragment=j,t.Lazy=C,t.Memo=H,t.Portal=B,t.Profiler=D,t.StrictMode=k,t.Suspense=E,t.isAsyncMode=function(e){return z||(z=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),T(e)||w(e)===s},t.isConcurrentMode=T,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===y},t.isMemo=function(e){return w(e)===h},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===l||e.$$typeof===c||e.$$typeof===d||e.$$typeof===g||e.$$typeof===v||e.$$typeof===b||e.$$typeof===m)},t.typeOf=w}()},"./node_modules/react-is/index.js":
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
  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})(),f.exports=u(r);const p={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var h=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},y="object"==typeof d&&d&&d.Object===Object&&d,m="object"==typeof self&&self&&self.Object===Object&&self,g=y||m||Function("return this")(),v=g,b=function(){return v.Date.now()},w=/\s/;var S=function(e){for(var t=e.length;t--&&w.test(e.charAt(t)););return t},x=/^\s+/;var $=function(e){return e?e.slice(0,S(e)+1).replace(x,""):e},F=g.Symbol,_=F,O=Object.prototype,j=O.hasOwnProperty,C=O.toString,H=_?_.toStringTag:void 0;var B=function(e){var t=j.call(e,H),n=e[H];try{e[H]=void 0;var r=!0}catch(e){}var o=C.call(e);return r&&(t?e[H]=n:delete e[H]),o},D=Object.prototype.toString;var k=B,E=function(e){return D.call(e)},z=F?F.toStringTag:void 0;var T=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":z&&z in Object(e)?k(e):E(e)};var L=T,P=function(e){return null!=e&&"object"==typeof e};var A=function(e){return"symbol"==typeof e||P(e)&&"[object Symbol]"==L(e)},W=$,I=h,M=A,R=/^[-+]0x[0-9a-f]+$/i,N=/^0b[01]+$/i,V=/^0o[0-7]+$/i,q=parseInt;var Q=h,X=b,G=function(e){if("number"==typeof e)return e;if(M(e))return NaN;if(I(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=I(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=W(e);var n=N.test(e);return n||V.test(e)?q(e.slice(2),n?2:8):R.test(e)?NaN:+e},U=Math.max,Y=Math.min;var Z=function(e,t,n){var r,o,i,a,l,c,s=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,s=t,a=e.apply(i,n)}function h(e){return s=e,l=setTimeout(m,t),u?p(e):a}function y(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-s>=i}function m(){var e=X();if(y(e))return g(e);l=setTimeout(m,function(e){var n=t-(e-c);return d?Y(n,i-(e-s)):n}(e))}function g(e){return l=void 0,f&&r?p(e):(r=o=void 0,a)}function v(){var e=X(),n=y(e);if(r=arguments,o=this,c=e,n){if(void 0===l)return h(c);if(d)return clearTimeout(l),l=setTimeout(m,t),p(c)}return void 0===l&&(l=setTimeout(m,t)),a}return t=G(t)||0,Q(n)&&(u=!!n.leading,i=(d="maxWait"in n)?U(G(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),v.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=c=o=l=void 0},v.flush=function(){return void 0===l?a:g(X())},v};const J=c.div`
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
`,K=c.div`
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
`,ee=({show:t=!1,rootId:n,onOverlayClick:c,children:s,backgroundOpacity:u,backgroundBlur:d=!0,disableTransition:f=!1,enableOverlayClick:p=!1,zIndex:h,id:y})=>{const[m,g]=o(null),[v,b]=o(),w=i(),S=i(null),x=s&&r.cloneElement(s,{ref:S}),$=y?`lifesg-ds-overlay-root-${y}`:"lifesg-ds-overlay-root";a((()=>{if(t){const e=O();if(F(e),!e){const e=setTimeout((()=>{C("add")}),200);return()=>clearTimeout(e)}}else if(!w.current){const e=setTimeout((()=>{C("add")}),200);return()=>clearTimeout(e)}}),[t]),a((()=>{g(_());const e=O();return F(e),e||j(),()=>{C("remove")}}),[]);const F=e=>{w.current=e,b(e)},_=()=>document&&n?document.getElementById(n):document?document.body:null,O=()=>document.body.classList.contains(ne),j=()=>{if(!document.getElementById(te)){const e=document.createElement("style");e.id=te;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${ne} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${ne}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},C=e=>{const t=document.body.classList.contains(ne);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(ne):document.body.classList.add(ne)},H=e=>{e.preventDefault();const t=S.current?.firstChild;t&&t.contains(e.target)||c&&p&&c()};return m?l.createPortal(e(J,{id:$,"data-testid":$,$show:t,zIndex:h,$stacked:v,children:s&&e(K,{"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:u||(v?.5:.8),$backgroundBlur:d,$disableTransition:f,$enableOverlayClick:p,onClick:H,children:x})}),m):null},te="lifesg-ds-overlay-stylesheet",ne="lifesg-ds-overlay-open",re=e=>Object.keys(p).reduce(((t,n)=>{const r=p[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),oe=re("max-width"),ie=(re("min-width"),c.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${e=>e.verticalHeight?s`
                ${oe.mobileL} {
                    height: calc(${e.verticalHeight}px * 100);
                }
            `:s`
                ${oe.mobileL} {
                    height: calc(1vh * 100);
                }
            `}
`),ae=({id:t="modal",show:n,animationFrom:r="bottom",children:i,enableOverlayClick:l=!0,rootComponentId:c,zIndex:s,onOverlayClick:u,...d})=>{const[f,p]=o();a((()=>(p(.01*window.innerHeight),window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)})),[]);const h=()=>{const e=.01*window.innerHeight;p(e)};return e(ee,{"data-testid":`${t}-overlay`,show:n,enableOverlayClick:l,onOverlayClick:u,id:t,rootId:c,zIndex:s,children:e(ie,{show:n,animationFrom:r,"data-testid":t,verticalHeight:f,...d,children:i})})};var le=Array.isArray,ce=le,se=A,ue=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,de=/^\w*$/;var fe=function(e,t){if(ce(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!se(e))||(de.test(e)||!ue.test(e)||null!=t&&e in Object(t))},pe=T,he=h;var ye,me=function(e){if(!he(e))return!1;var t=pe(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ge=g["__core-js_shared__"],ve=(ye=/[^.]+$/.exec(ge&&ge.keys&&ge.keys.IE_PROTO||""))?"Symbol(src)_1."+ye:"";var be=function(e){return!!ve&&ve in e},we=Function.prototype.toString;var Se=me,xe=be,$e=h,Fe=function(e){if(null!=e){try{return we.call(e)}catch(e){}try{return e+""}catch(e){}}return""},_e=/^\[object .+?Constructor\]$/,Oe=Function.prototype,je=Object.prototype,Ce=Oe.toString,He=je.hasOwnProperty,Be=RegExp("^"+Ce.call(He).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var De=function(e){return!(!$e(e)||xe(e))&&(Se(e)?Be:_e).test(Fe(e))},ke=function(e,t){return null==e?void 0:e[t]};var Ee=function(e,t){var n=ke(e,t);return De(n)?n:void 0},ze=Ee(Object,"create"),Te=ze;var Le=function(){this.__data__=Te?Te(null):{},this.size=0};var Pe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ae=ze,We=Object.prototype.hasOwnProperty;var Ie=function(e){var t=this.__data__;if(Ae){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return We.call(t,e)?t[e]:void 0},Me=ze,Re=Object.prototype.hasOwnProperty;var Ne=ze;var Ve=Le,qe=Pe,Qe=Ie,Xe=function(e){var t=this.__data__;return Me?void 0!==t[e]:Re.call(t,e)},Ge=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ne&&void 0===t?"__lodash_hash_undefined__":t,this};function Ue(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ue.prototype.clear=Ve,Ue.prototype.delete=qe,Ue.prototype.get=Qe,Ue.prototype.has=Xe,Ue.prototype.set=Ge;var Ye=Ue;var Ze=function(){this.__data__=[],this.size=0};var Je=function(e,t){return e===t||e!=e&&t!=t};var Ke=function(e,t){for(var n=e.length;n--;)if(Je(e[n][0],t))return n;return-1},et=Ke,tt=Array.prototype.splice;var nt=Ke;var rt=Ke;var ot=Ke;var it=Ze,at=function(e){var t=this.__data__,n=et(t,e);return!(n<0)&&(n==t.length-1?t.pop():tt.call(t,n,1),--this.size,!0)},lt=function(e){var t=this.__data__,n=nt(t,e);return n<0?void 0:t[n][1]},ct=function(e){return rt(this.__data__,e)>-1},st=function(e,t){var n=this.__data__,r=ot(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ut(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ut.prototype.clear=it,ut.prototype.delete=at,ut.prototype.get=lt,ut.prototype.has=ct,ut.prototype.set=st;var dt=ut,ft=Ee(g,"Map"),pt=Ye,ht=dt,yt=ft;var mt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var gt=function(e,t){var n=e.__data__;return mt(t)?n["string"==typeof t?"string":"hash"]:n.map},vt=gt;var bt=gt;var wt=gt;var St=gt;var xt=function(){this.size=0,this.__data__={hash:new pt,map:new(yt||ht),string:new pt}},$t=function(e){var t=vt(this,e).delete(e);return this.size-=t?1:0,t},Ft=function(e){return bt(this,e).get(e)},_t=function(e){return wt(this,e).has(e)},Ot=function(e,t){var n=St(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function jt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}jt.prototype.clear=xt,jt.prototype.delete=$t,jt.prototype.get=Ft,jt.prototype.has=_t,jt.prototype.set=Ot;var Ct=jt;function Ht(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Ht.Cache||Ct),n}Ht.Cache=Ct;var Bt=Ht;var Dt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,kt=/\\(\\)?/g,Et=function(e){var t=Bt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Dt,(function(e,n,r,o){t.push(r?o.replace(kt,"$1"):n||e)})),t}));var zt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},Tt=le,Lt=A,Pt=F?F.prototype:void 0,At=Pt?Pt.toString:void 0;var Wt=function e(t){if("string"==typeof t)return t;if(Tt(t))return zt(t,e)+"";if(Lt(t))return At?At.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},It=Wt;var Mt=le,Rt=fe,Nt=Et,Vt=function(e){return null==e?"":It(e)};var qt=A;var Qt=function(e,t){return Mt(e)?e:Rt(e,t)?[e]:Nt(Vt(e))},Xt=function(e){if("string"==typeof e||qt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Gt=function(e,t){for(var n=0,r=(t=Qt(t,e)).length;null!=e&&n<r;)e=e[Xt(t[n++])];return n&&n==r?e:void 0};var Ut=function(e,t,n){var r=null==e?void 0:Gt(e,t);return void 0===r?n:r};const Yt=(e,t,n)=>t?Ut(n,t)||Ut(e,t):n||e,Zt=(e,t)=>{const n=t||e.defaultValue;return Ut(e.collections,n)};var Jt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme"}(Jt||(Jt={}));const Kt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},en=e=>t=>{const n=t.theme,r=Zt(Kt,n[Jt.colorScheme]);return n.options&&n.options.color?Yt(r,e,n.options.color):Yt(r,e)},tn=(en("Brand.1"),en("Brand.2"),en("Brand.3"),en("Brand.4"),en("Brand.5"),en("Brand.6"),en("Primary")),nn=(en("PrimaryDark"),en("Secondary")),rn={Light:{1:en("Accent.Light.1"),2:en("Accent.Light.2"),3:en("Accent.Light.3"),4:en("Accent.Light.4"),5:en("Accent.Light.5"),6:en("Accent.Light.6")},Dark:{1:en("Accent.Dark.1"),2:en("Accent.Dark.2"),3:en("Accent.Dark.3")}},on={1:en("Neutral.1"),2:en("Neutral.2"),3:en("Neutral.3"),4:en("Neutral.4"),5:en("Neutral.5"),6:en("Neutral.6"),7:en("Neutral.7"),8:en("Neutral.8")},an=(en("Validation.Green.Text"),en("Validation.Green.Icon"),en("Validation.Green.Border"),en("Validation.Green.Background"),en("Validation.Orange.Text"),en("Validation.Orange.Icon"),en("Validation.Orange.Border"),en("Validation.Orange.Background"),en("Validation.Orange.Badge"),en("Validation.Red.Text"),en("Validation.Red.Icon"),en("Validation.Red.Border"),en("Validation.Red.Background"),c.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;
    color: ${tn};
`),ln=t=>e(an,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...t,children:e("path",{fill:"currentColor",d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})}),cn=t=>e(an,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{fill:"currentColor",d:"M23.8785 5.13337C24.0563 4.95554 24.3408 4.95554 24.5186 5.13337L26.8666 7.48184C27.0444 7.65572 27.0444 7.9442 26.8666 8.11808L19.3082 15.6819C19.1304 15.8558 19.1304 16.1442 19.3082 16.3221L26.8666 23.8819C27.0444 24.0558 27.0444 24.3443 26.8666 24.5182L24.5186 26.8666C24.3408 27.0445 24.0563 27.0445 23.8785 26.8666L16.32 19.3068C16.1422 19.129 15.8578 19.129 15.68 19.3068L8.12148 26.8666C7.94368 27.0445 7.65919 27.0445 7.48139 26.8666L5.13335 24.5182C4.95555 24.3443 4.95555 24.0558 5.13335 23.8819L12.6918 16.3221C12.8696 16.1442 12.8696 15.8558 12.6918 15.6819L5.13335 8.11808C4.95555 7.9442 4.95555 7.65572 5.13335 7.48184L7.48139 5.13337C7.65919 4.95554 7.94368 4.95554 8.12148 5.13337L15.68 12.6932C15.8578 12.871 16.1422 12.871 16.32 12.6932L23.8785 5.13337Z"})}),sn=t=>e(an,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{fill:"currentColor",id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),un=t=>e(an,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...t,children:e("path",{fill:"currentColor",fillRule:"nonzero",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z"})}),dn=t=>e(an,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",...t,children:e("path",{id:"path",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})}),fn=({type:t,...n})=>{switch(t){case"arrow-right":return e(ln,{...n});case"info":return e(sn,{...n});case"cross":return e(cn,{...n});case"play":return e(un,{...n});case"search":return e(dn,{...n});default:{const r=`sgds-icon sgds-icon-${t}`,o=n.className?`${r} ${n.className}`:r;return e(pn,{...n,className:o})}}},pn=c.span`
    font-size: 1rem;
`,hn={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},yn={collections:{base:{D1:{fontFamily:hn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:hn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:hn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:hn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:hn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:hn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:hn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:hn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:hn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:hn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:hn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:hn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:hn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:hn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},mn=e=>t=>{const n=t.theme,r=Zt(yn,n[Jt.textStyleScheme]);return n.options&&n.options.textStyle?Yt(r,e,n.options.textStyle):Yt(r,e)},gn={D1:{fontFamily:mn("D1.fontFamily"),fontSize:mn("D1.fontSize"),fontWeight:mn("D1.fontWeight"),lineHeight:mn("D1.lineHeight"),letterSpacing:mn("D1.letterSpacing")},D2:{fontFamily:mn("D2.fontFamily"),fontSize:mn("D2.fontSize"),fontWeight:mn("D2.fontWeight"),lineHeight:mn("D2.lineHeight"),letterSpacing:mn("D2.letterSpacing")},D3:{fontFamily:mn("D3.fontFamily"),fontSize:mn("D3.fontSize"),fontWeight:mn("D3.fontWeight"),lineHeight:mn("D3.lineHeight"),letterSpacing:mn("D3.letterSpacing")},D4:{fontFamily:mn("D4.fontFamily"),fontSize:mn("D4.fontSize"),fontWeight:mn("D4.fontWeight"),lineHeight:mn("D4.lineHeight"),letterSpacing:mn("D4.letterSpacing")},DBody:{fontFamily:mn("DBody.fontFamily"),fontSize:mn("DBody.fontSize"),fontWeight:mn("DBody.fontWeight"),lineHeight:mn("DBody.lineHeight"),letterSpacing:mn("DBody.letterSpacing")},H1:{fontFamily:mn("H1.fontFamily"),fontSize:mn("H1.fontSize"),fontWeight:mn("H1.fontWeight"),lineHeight:mn("H1.lineHeight"),letterSpacing:mn("H1.letterSpacing")},H2:{fontFamily:mn("H2.fontFamily"),fontSize:mn("H2.fontSize"),fontWeight:mn("H2.fontWeight"),lineHeight:mn("H2.lineHeight"),letterSpacing:mn("H2.letterSpacing")},H3:{fontFamily:mn("H3.fontFamily"),fontSize:mn("H3.fontSize"),fontWeight:mn("H3.fontWeight"),lineHeight:mn("H3.lineHeight"),letterSpacing:mn("H3.letterSpacing")},H4:{fontFamily:mn("H4.fontFamily"),fontSize:mn("H4.fontSize"),fontWeight:mn("H4.fontWeight"),lineHeight:mn("H4.lineHeight"),letterSpacing:mn("H4.letterSpacing")},H5:{fontFamily:mn("H5.fontFamily"),fontSize:mn("H5.fontSize"),fontWeight:mn("H5.fontWeight"),lineHeight:mn("H5.lineHeight"),letterSpacing:mn("H5.letterSpacing")},H6:{fontFamily:mn("H6.fontFamily"),fontSize:mn("H6.fontSize"),fontWeight:mn("H6.fontWeight"),lineHeight:mn("H6.lineHeight"),letterSpacing:mn("H6.letterSpacing")},Body:{fontFamily:mn("Body.fontFamily"),fontSize:mn("Body.fontSize"),fontWeight:mn("Body.fontWeight"),lineHeight:mn("Body.lineHeight"),letterSpacing:mn("Body.letterSpacing")},BodySmall:{fontFamily:mn("BodySmall.fontFamily"),fontSize:mn("BodySmall.fontSize"),fontWeight:mn("BodySmall.fontWeight"),lineHeight:mn("BodySmall.lineHeight"),letterSpacing:mn("BodySmall.letterSpacing")},XSmall:{fontFamily:mn("XSmall.fontFamily"),fontSize:mn("XSmall.fontSize"),fontWeight:mn("XSmall.fontWeight"),lineHeight:mn("XSmall.lineHeight"),letterSpacing:mn("XSmall.letterSpacing")}},vn=e=>{switch(e){case 700:case"bold":return hn.Bold;case 600:case"semibold":return hn.Semibold;case 300:case"light":return hn.Light;case 400:case"regular":return hn.Regular;default:return""}},bn=(e,t)=>n=>{const r=gn[e].fontFamily(n),o=gn[e].fontWeight(n);return Object.values(hn).includes(r)?s`
                font-family: ${vn(t)||vn(o)||r};
                font-weight: normal !important;
            `:s`
            font-family: ${r};
            font-weight: ${(wn(t)||o)??"normal"};
        `},wn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Sn=(e,t,n=!1)=>r=>{const o=gn[e],i=o.fontSize(r);return s`
            ${bn(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${s`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},xn=(e=!1,t=!1)=>t?s`
            display: block;
        `:e?s`
            display: inline;
        `:s`
            display: block;
        `;var $n;!function(e){e.D1=c.h1`
        ${e=>s`
                ${Sn("D1",e.weight,e.paragraph)}
                color: ${on[1]};
                ${xn(e.inline,e.paragraph)}
            `}
    `,e.D2=c.h1`
        ${e=>s`
                ${Sn("D2",e.weight,e.paragraph)}
                color: ${on[1]};
                ${xn(e.inline,e.paragraph)}
            `}
    `,e.D3=c.h1`
        ${e=>s`
                ${Sn("D3",e.weight,e.paragraph)}
                color: ${on[1]};
                ${xn(e.inline,e.paragraph)}
            `}
    `,e.D4=c.h1`
        ${e=>s`
                ${Sn("D4",e.weight,e.paragraph)}
                color: ${on[1]};
                ${xn(e.inline,e.paragraph)}
            `}
    `,e.DBody=c.h1`
        ${e=>s`
                ${Sn("DBody",e.weight,e.paragraph)}
                color: ${on[1]};
                ${xn(e.inline,e.paragraph)}
            `}
    `,e.H1=c.h1`
        ${e=>s`
                ${Sn("H1",e.weight,e.paragraph)}
                color: ${on[1]};
                ${xn(e.inline,e.paragraph)}
            `}
    `,e.H2=c.h2`
        ${e=>s`
                ${Sn("H2",e.weight,e.paragraph)}
                color: ${on[1]};
                ${xn(e.inline,e.paragraph)}
            `}
    `,e.H3=c.h3`
        ${e=>s`
                ${Sn("H3",e.weight,e.paragraph)}
                color: ${on[1]};
                ${xn(e.inline,e.paragraph)}
            `}
    `,e.H4=c.h4`
        ${e=>s`
                ${Sn("H4",e.weight,e.paragraph)}
                color: ${on[1]};
                ${xn(e.inline,e.paragraph)}
            `}
    `,e.H5=c.h5`
        ${e=>s`
                ${Sn("H5",e.weight,e.paragraph)}
                color: ${on[1]};
                ${xn(e.inline,e.paragraph)}
            `}
    `,e.H6=c.h6`
        ${e=>s`
                ${Sn("H6",e.weight,e.paragraph)}
                color: ${on[1]};
                ${xn(e.inline,e.paragraph)}
            `}
    `,e.Body=c.p`
        ${e=>s`
                ${Sn("Body",e.weight,e.paragraph)}
                color: ${on[1]};
                ${xn(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=c.p`
        ${e=>s`
                ${Sn("BodySmall",e.weight,e.paragraph)}
                color: ${on[1]};
                ${xn(e.inline,e.paragraph)}
            `}
    `,e.XSmall=c.span`
        ${e=>s`
                ${Sn("XSmall",e.weight,e.paragraph)}
                color: ${on[1]};
                ${xn(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>On({...e,textStyle:"Body"}),Small:e=>On({...e,textStyle:"BodySmall"})}}($n||($n={}));const Fn=c.a`
    ${e=>s`
            ${Sn(e.textStyle,e.weight)}
            color: ${tn};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${nn};
            }
        `}
`,_n=c(fn)`
    margin-left: 0.4rem;
`,On=({external:n=!1,children:r,...o})=>t(Fn,{...o,children:[r,n&&e(_n,{type:"external"})]}),jn=c.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background-color: ${on[8]};
    border: none;
    cursor: pointer;

    img {
        height: 1rem;
        width: 1rem;
    }

    &:focus {
        outline: none;
        background-color: ${on[7]};
    }
`,Cn=r.forwardRef((({children:t,iconType:n,...r},o)=>{let i;if(t)i=t;else{if(!n)return console.error("IconButton - Did not specify a valid children or iconType prop"),null;i=e(fn,{type:n})}return e(jn,{ref:o,...r,children:i})})),Hn=c.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${on[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${oe.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Bn=c(Cn)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    background: transparent;
    :focus-visible,
    :focus,
    :active {
        background: transparent;
    }
    :focus-visible {
        outline: 4px solid ${rn.Light[1]};
    }
`,Dn=c(fn)`
    font-size: 2rem;
    color: ${on[4]};
`,kn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",En=c.div`
    border-radius: 8px;
    background: ${on[8]};
    padding: 1rem 2rem;
    box-shadow: 0 2px 8px 0 rgba(104, 104, 104, 0.24);
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?s`
            visibility: visible;
            opacity: 1;
            transition: ${kn};
            z-index: 2;
        `:s`
            visibility: hidden;
            opacity: 0;
            transition: ${kn};
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

	${oe.mobileL} {
        display: none;
    }
`,zn=c((({id:n="modal-box",children:r,onClose:o,showCloseButton:i=!0,...a})=>t(Hn,{"data-testid":n,...a,onClick:e=>{e.stopPropagation()},children:[i&&e(Bn,{type:"button",onClick:o,"data-testid":"close-button",children:e(Dn,{type:"cross"})}),r]})))`
    padding: 3.5rem 1.25rem 2.5rem;
`,Tn=c.div`
    position: relative;
    width: fit-content;
`,Ln=c.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,Pn=({children:r,visible:l,onMobileClose:c,...s})=>{const u=s["data-testid"]||"popover",[d,h]=o("none"),y=i(null),m=f.exports.useMediaQuery({maxWidth:p.mobileL}),g=i(d);a((()=>(w(),window.addEventListener("resize",Z(v,300)),()=>{window.removeEventListener("resize",Z(v,300))})),[]);const v=()=>{w()},b=()=>{c&&c()},w=()=>{const e=S();var t;e&&(t=e,g.current=t,h(t))},S=()=>{if(y.current){const e=y.current.getBoundingClientRect(),t=24,n=e.y<t,r=window.innerWidth-t;return e.x<t?n?"top-left":"left":e.x+e.width>r?n?"top-right":"right":("top-left"===g.current||"left"===g.current)&&e.x-e.width/2>t||("top-right"===g.current||"right"===g.current)&&e.x+2*e.width<r?n?"top-center":"none":void 0}},x=()=>"string"==typeof r?e($n.BodySmall,{children:r}):r;return t(n,{children:[e(En,{ref:y,"data-testid":u,$visible:l,$offset:d,...s,children:x()}),m&&e(ae,{show:l,onOverlayClick:b,children:e(zn,{onClose:b,children:x()})})]})},An=(n,r)=>l=>{const{onPopoverAppear:c,onPopoverDismiss:s,...u}=l,d=r.trigger||"click",h=u,[y,m]=o(!1),g=i(),v=f.exports.useMediaQuery({maxWidth:p.mobileL});a((()=>{if(!v)return document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}}),[y]);const b=e=>{g&&!g.current.contains(e.target)&&(y&&m(!1),s&&s())};return t(Tn,{id:"popover-hoc-wrapper",ref:g,children:[e(Ln,{id:`popover-hoc-trigger${r["data-testid"]&&`-${r["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===d||v)&&(m(!y),!y&&c&&c(),y&&s&&s())},onMouseEnter:()=>{"hover"!==d||v||m(!0)},onMouseLeave:()=>{"hover"===d&&y&&!v&&m(!1)},"aria-label":"popover-button",children:e(n,{...h})}),e(Pn,{visible:y,id:r.id,"data-testid":r["data-testid"],onMobileClose:()=>{m(!1)},children:r.content})]})};export{Pn as Popover,An as withPopover};
//# sourceMappingURL=index.js.map
