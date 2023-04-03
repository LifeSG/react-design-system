import e,{jsxs as t,jsx as n,Fragment as r}from"react/jsx-runtime";import o,{useState as i,useRef as a,useEffect as l}from"react";import c,{css as s}from"styled-components";import u from"react-dom";var d,f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p={exports:{}};d=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,l=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case s:case u:case o:case a:case i:case f:return p;default:var m=p&&p.$$typeof;switch(m){case c:case d:case y:case h:case l:return m;default:return t}}case r:return t}}}var S=s,x=u,$=c,_=l,F=n,O=d,j=o,C=y,H=h,B=r,D=a,E=i,k=f,z=!1;function T(e){return w(e)===u}t.AsyncMode=S,t.ConcurrentMode=x,t.ContextConsumer=$,t.ContextProvider=_,t.Element=F,t.ForwardRef=O,t.Fragment=j,t.Lazy=C,t.Memo=H,t.Portal=B,t.Profiler=D,t.StrictMode=E,t.Suspense=k,t.isAsyncMode=function(e){return z||(z=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),T(e)||w(e)===s},t.isConcurrentMode=T,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===y},t.isMemo=function(e){return w(e)===h},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===l||e.$$typeof===c||e.$$typeof===d||e.$$typeof===g||e.$$typeof===v||e.$$typeof===b||e.$$typeof===m)},t.typeOf=w}()},"./node_modules/react-is/index.js":
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
  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})(),p.exports=d(o);const h={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var y=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},m="object"==typeof f&&f&&f.Object===Object&&f,g="object"==typeof self&&self&&self.Object===Object&&self,v=m||g||Function("return this")(),b=v,w=function(){return b.Date.now()},S=/\s/;var x=function(e){for(var t=e.length;t--&&S.test(e.charAt(t)););return t},$=/^\s+/;var _=function(e){return e?e.slice(0,x(e)+1).replace($,""):e},F=v.Symbol,O=F,j=Object.prototype,C=j.hasOwnProperty,H=j.toString,B=O?O.toStringTag:void 0;var D=function(e){var t=C.call(e,B),n=e[B];try{e[B]=void 0;var r=!0}catch(e){}var o=H.call(e);return r&&(t?e[B]=n:delete e[B]),o},E=Object.prototype.toString;var k=D,z=function(e){return E.call(e)},T=F?F.toStringTag:void 0;var P=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":T&&T in Object(e)?k(e):z(e)};var A=P,L=function(e){return null!=e&&"object"==typeof e};var I=function(e){return"symbol"==typeof e||L(e)&&"[object Symbol]"==A(e)},W=_,R=y,M=I,V=/^[-+]0x[0-9a-f]+$/i,N=/^0b[01]+$/i,q=/^0o[0-7]+$/i,Q=parseInt;var X=y,G=w,U=function(e){if("number"==typeof e)return e;if(M(e))return NaN;if(R(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=R(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=W(e);var n=N.test(e);return n||q.test(e)?Q(e.slice(2),n?2:8):V.test(e)?NaN:+e},Y=Math.max,Z=Math.min;var J,K=function(e,t,n){var r,o,i,a,l,c,s=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,s=t,a=e.apply(i,n)}function h(e){return s=e,l=setTimeout(m,t),u?p(e):a}function y(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-s>=i}function m(){var e=G();if(y(e))return g(e);l=setTimeout(m,function(e){var n=t-(e-c);return d?Z(n,i-(e-s)):n}(e))}function g(e){return l=void 0,f&&r?p(e):(r=o=void 0,a)}function v(){var e=G(),n=y(e);if(r=arguments,o=this,c=e,n){if(void 0===l)return h(c);if(d)return clearTimeout(l),l=setTimeout(m,t),p(c)}return void 0===l&&(l=setTimeout(m,t)),a}return t=U(t)||0,X(n)&&(u=!!n.leading,i=(d="maxWait"in n)?Y(U(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),v.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=c=o=l=void 0},v.flush=function(){return void 0===l?a:g(G())},v},ee={};Object.defineProperty(ee,"__esModule",{value:!0});var te=e;const ne=e=>te.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:te.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});ne.displayName="ExternalIcon",J=ee.ExternalIcon=ne;var re=Array.isArray,oe=re,ie=I,ae=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,le=/^\w*$/;var ce=function(e,t){if(oe(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ie(e))||(le.test(e)||!ae.test(e)||null!=t&&e in Object(t))},se=P,ue=y;var de,fe=function(e){if(!ue(e))return!1;var t=se(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},pe=v["__core-js_shared__"],he=(de=/[^.]+$/.exec(pe&&pe.keys&&pe.keys.IE_PROTO||""))?"Symbol(src)_1."+de:"";var ye=function(e){return!!he&&he in e},me=Function.prototype.toString;var ge=fe,ve=ye,be=y,we=function(e){if(null!=e){try{return me.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Se=/^\[object .+?Constructor\]$/,xe=Function.prototype,$e=Object.prototype,_e=xe.toString,Fe=$e.hasOwnProperty,Oe=RegExp("^"+_e.call(Fe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var je=function(e){return!(!be(e)||ve(e))&&(ge(e)?Oe:Se).test(we(e))},Ce=function(e,t){return null==e?void 0:e[t]};var He=function(e,t){var n=Ce(e,t);return je(n)?n:void 0},Be=He(Object,"create"),De=Be;var Ee=function(){this.__data__=De?De(null):{},this.size=0};var ke=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ze=Be,Te=Object.prototype.hasOwnProperty;var Pe=function(e){var t=this.__data__;if(ze){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Te.call(t,e)?t[e]:void 0},Ae=Be,Le=Object.prototype.hasOwnProperty;var Ie=Be;var We=Ee,Re=ke,Me=Pe,Ve=function(e){var t=this.__data__;return Ae?void 0!==t[e]:Le.call(t,e)},Ne=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ie&&void 0===t?"__lodash_hash_undefined__":t,this};function qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}qe.prototype.clear=We,qe.prototype.delete=Re,qe.prototype.get=Me,qe.prototype.has=Ve,qe.prototype.set=Ne;var Qe=qe;var Xe=function(){this.__data__=[],this.size=0};var Ge=function(e,t){return e===t||e!=e&&t!=t};var Ue=function(e,t){for(var n=e.length;n--;)if(Ge(e[n][0],t))return n;return-1},Ye=Ue,Ze=Array.prototype.splice;var Je=Ue;var Ke=Ue;var et=Ue;var tt=Xe,nt=function(e){var t=this.__data__,n=Ye(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ze.call(t,n,1),--this.size,!0)},rt=function(e){var t=this.__data__,n=Je(t,e);return n<0?void 0:t[n][1]},ot=function(e){return Ke(this.__data__,e)>-1},it=function(e,t){var n=this.__data__,r=et(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function at(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}at.prototype.clear=tt,at.prototype.delete=nt,at.prototype.get=rt,at.prototype.has=ot,at.prototype.set=it;var lt=at,ct=He(v,"Map"),st=Qe,ut=lt,dt=ct;var ft=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var pt=function(e,t){var n=e.__data__;return ft(t)?n["string"==typeof t?"string":"hash"]:n.map},ht=pt;var yt=pt;var mt=pt;var gt=pt;var vt=function(){this.size=0,this.__data__={hash:new st,map:new(dt||ut),string:new st}},bt=function(e){var t=ht(this,e).delete(e);return this.size-=t?1:0,t},wt=function(e){return yt(this,e).get(e)},St=function(e){return mt(this,e).has(e)},xt=function(e,t){var n=gt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function $t(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}$t.prototype.clear=vt,$t.prototype.delete=bt,$t.prototype.get=wt,$t.prototype.has=St,$t.prototype.set=xt;var _t=$t;function Ft(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Ft.Cache||_t),n}Ft.Cache=_t;var Ot=Ft;var jt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ct=/\\(\\)?/g,Ht=function(e){var t=Ot(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(jt,(function(e,n,r,o){t.push(r?o.replace(Ct,"$1"):n||e)})),t}));var Bt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},Dt=re,Et=I,kt=F?F.prototype:void 0,zt=kt?kt.toString:void 0;var Tt=function e(t){if("string"==typeof t)return t;if(Dt(t))return Bt(t,e)+"";if(Et(t))return zt?zt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Pt=Tt;var At=re,Lt=ce,It=Ht,Wt=function(e){return null==e?"":Pt(e)};var Rt=I;var Mt=function(e,t){return At(e)?e:Lt(e,t)?[e]:It(Wt(e))},Vt=function(e){if("string"==typeof e||Rt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Nt=function(e,t){for(var n=0,r=(t=Mt(t,e)).length;null!=e&&n<r;)e=e[Vt(t[n++])];return n&&n==r?e:void 0};var qt=function(e,t,n){var r=null==e?void 0:Nt(e,t);return void 0===r?n:r};const Qt=(e,t,n)=>t?qt(n,t)||qt(e,t):n||e,Xt=(e,t)=>{const n=t||e.defaultValue;return qt(e.collections,n)};var Gt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme"}(Gt||(Gt={}));const Ut={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Yt=e=>t=>{const n=t.theme,r=Xt(Ut,n[Gt.colorScheme]);return n.options&&n.options.color?Qt(r,e,n.options.color):Qt(r,e)},Zt=(Yt("Brand.1"),Yt("Brand.2"),Yt("Brand.3"),Yt("Brand.4"),Yt("Brand.5"),Yt("Brand.6"),Yt("Primary")),Jt=(Yt("PrimaryDark"),Yt("Secondary")),Kt={Light:{1:Yt("Accent.Light.1"),2:Yt("Accent.Light.2"),3:Yt("Accent.Light.3"),4:Yt("Accent.Light.4"),5:Yt("Accent.Light.5"),6:Yt("Accent.Light.6")},Dark:{1:Yt("Accent.Dark.1"),2:Yt("Accent.Dark.2"),3:Yt("Accent.Dark.3")}},en={1:Yt("Neutral.1"),2:Yt("Neutral.2"),3:Yt("Neutral.3"),4:Yt("Neutral.4"),5:Yt("Neutral.5"),6:Yt("Neutral.6"),7:Yt("Neutral.7"),8:Yt("Neutral.8")},tn=(Yt("Validation.Green.Text"),Yt("Validation.Green.Icon"),Yt("Validation.Green.Border"),Yt("Validation.Green.Background"),Yt("Validation.Orange.Text"),Yt("Validation.Orange.Icon"),Yt("Validation.Orange.Border"),Yt("Validation.Orange.Background"),Yt("Validation.Orange.Badge"),Yt("Validation.Red.Text"),Yt("Validation.Red.Icon"),Yt("Validation.Red.Border"),Yt("Validation.Red.Background"),Yt("Shadow.Accent"),Yt("Shadow.Red"),Yt("Shadow.Elevation"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),nn={collections:{base:{D1:{fontFamily:tn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:tn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:tn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:tn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:tn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:tn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:tn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:tn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:tn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:tn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:tn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:tn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:tn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:tn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},rn=e=>t=>{const n=t.theme,r=Xt(nn,n[Gt.textStyleScheme]);return n.options&&n.options.textStyle?Qt(r,e,n.options.textStyle):Qt(r,e)},on={D1:{fontFamily:rn("D1.fontFamily"),fontSize:rn("D1.fontSize"),fontWeight:rn("D1.fontWeight"),lineHeight:rn("D1.lineHeight"),letterSpacing:rn("D1.letterSpacing")},D2:{fontFamily:rn("D2.fontFamily"),fontSize:rn("D2.fontSize"),fontWeight:rn("D2.fontWeight"),lineHeight:rn("D2.lineHeight"),letterSpacing:rn("D2.letterSpacing")},D3:{fontFamily:rn("D3.fontFamily"),fontSize:rn("D3.fontSize"),fontWeight:rn("D3.fontWeight"),lineHeight:rn("D3.lineHeight"),letterSpacing:rn("D3.letterSpacing")},D4:{fontFamily:rn("D4.fontFamily"),fontSize:rn("D4.fontSize"),fontWeight:rn("D4.fontWeight"),lineHeight:rn("D4.lineHeight"),letterSpacing:rn("D4.letterSpacing")},DBody:{fontFamily:rn("DBody.fontFamily"),fontSize:rn("DBody.fontSize"),fontWeight:rn("DBody.fontWeight"),lineHeight:rn("DBody.lineHeight"),letterSpacing:rn("DBody.letterSpacing")},H1:{fontFamily:rn("H1.fontFamily"),fontSize:rn("H1.fontSize"),fontWeight:rn("H1.fontWeight"),lineHeight:rn("H1.lineHeight"),letterSpacing:rn("H1.letterSpacing")},H2:{fontFamily:rn("H2.fontFamily"),fontSize:rn("H2.fontSize"),fontWeight:rn("H2.fontWeight"),lineHeight:rn("H2.lineHeight"),letterSpacing:rn("H2.letterSpacing")},H3:{fontFamily:rn("H3.fontFamily"),fontSize:rn("H3.fontSize"),fontWeight:rn("H3.fontWeight"),lineHeight:rn("H3.lineHeight"),letterSpacing:rn("H3.letterSpacing")},H4:{fontFamily:rn("H4.fontFamily"),fontSize:rn("H4.fontSize"),fontWeight:rn("H4.fontWeight"),lineHeight:rn("H4.lineHeight"),letterSpacing:rn("H4.letterSpacing")},H5:{fontFamily:rn("H5.fontFamily"),fontSize:rn("H5.fontSize"),fontWeight:rn("H5.fontWeight"),lineHeight:rn("H5.lineHeight"),letterSpacing:rn("H5.letterSpacing")},H6:{fontFamily:rn("H6.fontFamily"),fontSize:rn("H6.fontSize"),fontWeight:rn("H6.fontWeight"),lineHeight:rn("H6.lineHeight"),letterSpacing:rn("H6.letterSpacing")},Body:{fontFamily:rn("Body.fontFamily"),fontSize:rn("Body.fontSize"),fontWeight:rn("Body.fontWeight"),lineHeight:rn("Body.lineHeight"),letterSpacing:rn("Body.letterSpacing")},BodySmall:{fontFamily:rn("BodySmall.fontFamily"),fontSize:rn("BodySmall.fontSize"),fontWeight:rn("BodySmall.fontWeight"),lineHeight:rn("BodySmall.lineHeight"),letterSpacing:rn("BodySmall.letterSpacing")},XSmall:{fontFamily:rn("XSmall.fontFamily"),fontSize:rn("XSmall.fontSize"),fontWeight:rn("XSmall.fontWeight"),lineHeight:rn("XSmall.lineHeight"),letterSpacing:rn("XSmall.letterSpacing")}},an=e=>{switch(e){case 700:case"bold":return tn.Bold;case 600:case"semibold":return tn.Semibold;case 300:case"light":return tn.Light;case 400:case"regular":return tn.Regular;default:return""}},ln=(e,t)=>n=>{const r=on[e].fontFamily(n),o=on[e].fontWeight(n);return Object.values(tn).includes(r)?s`
                font-family: ${an(t)||an(o)||r};
                font-weight: normal !important;
            `:s`
            font-family: ${r};
            font-weight: ${(cn(t)||o)??"normal"};
        `},cn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},sn=(e,t,n=!1)=>r=>{const o=on[e],i=o.fontSize(r);return s`
            ${ln(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${s`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},un=(e=!1,t=!1)=>t?s`
            display: block;
        `:e?s`
            display: inline;
        `:s`
            display: block;
        `;var dn;!function(e){e.D1=c.h1`
        ${e=>s`
                ${sn("D1",e.weight,e.paragraph)}
                color: ${en[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.D2=c.h1`
        ${e=>s`
                ${sn("D2",e.weight,e.paragraph)}
                color: ${en[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.D3=c.h1`
        ${e=>s`
                ${sn("D3",e.weight,e.paragraph)}
                color: ${en[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.D4=c.h1`
        ${e=>s`
                ${sn("D4",e.weight,e.paragraph)}
                color: ${en[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.DBody=c.h1`
        ${e=>s`
                ${sn("DBody",e.weight,e.paragraph)}
                color: ${en[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.H1=c.h1`
        ${e=>s`
                ${sn("H1",e.weight,e.paragraph)}
                color: ${en[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.H2=c.h2`
        ${e=>s`
                ${sn("H2",e.weight,e.paragraph)}
                color: ${en[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.H3=c.h3`
        ${e=>s`
                ${sn("H3",e.weight,e.paragraph)}
                color: ${en[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.H4=c.h4`
        ${e=>s`
                ${sn("H4",e.weight,e.paragraph)}
                color: ${en[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.H5=c.h5`
        ${e=>s`
                ${sn("H5",e.weight,e.paragraph)}
                color: ${en[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.H6=c.h6`
        ${e=>s`
                ${sn("H6",e.weight,e.paragraph)}
                color: ${en[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.Body=c.p`
        ${e=>s`
                ${sn("Body",e.weight,e.paragraph)}
                color: ${en[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=c.p`
        ${e=>s`
                ${sn("BodySmall",e.weight,e.paragraph)}
                color: ${en[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.XSmall=c.span`
        ${e=>s`
                ${sn("XSmall",e.weight,e.paragraph)}
                color: ${en[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>hn({...e,textStyle:"Body"}),Small:e=>hn({...e,textStyle:"BodySmall"})}}(dn||(dn={}));const fn=c.a`
    ${e=>s`
            ${sn(e.textStyle,e.weight)}
            color: ${Zt};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Jt};

                svg {
                    color: ${Jt};
                }
            }
        `}
`,pn=c(J)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,hn=({external:e=!1,children:r,...o})=>t(fn,{...o,children:[r,e&&n(pn,{})]}),yn=c.div`
    border-radius: 0.5rem;
    background: ${en[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,mn=({children:e,...t})=>{const r=t["data-testid"]||"card";return n(yn,{...t,"data-testid":r,children:"string"==typeof e?n(dn.Body,{children:e}):e})},gn=c.div`
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
`,vn=c.div`
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
`,bn=({show:e=!1,rootId:t,onOverlayClick:r,children:c,backgroundOpacity:s,backgroundBlur:d=!0,disableTransition:f=!1,enableOverlayClick:p=!1,zIndex:h,id:y})=>{const[m,g]=i(null),[v,b]=i(),w=a(),S=a(null),x=c&&o.cloneElement(c,{ref:S}),$=y?`lifesg-ds-overlay-root-${y}`:"lifesg-ds-overlay-root";l((()=>{if(e){const e=O();if(_(e),!e){const e=setTimeout((()=>{C("add")}),200);return()=>clearTimeout(e)}}else if(!w.current){const e=setTimeout((()=>{C("remove")}),200);return()=>clearTimeout(e)}}),[e]),l((()=>{g(F());const e=O();return _(e),e||j(),()=>{C("remove")}}),[]);const _=e=>{w.current=e,b(e)},F=()=>document&&t?document.getElementById(t):document?document.body:null,O=()=>document.body.classList.contains(Sn),j=()=>{if(!document.getElementById(wn)){const e=document.createElement("style");e.id=wn;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Sn} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Sn}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},C=e=>{const t=document.body.classList.contains(Sn);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Sn):document.body.classList.add(Sn)},H=e=>{const t=S.current?.firstChild;t&&t.contains(e.target)||r&&p&&(e.preventDefault(),r())};return m?u.createPortal(n(gn,{id:$,"data-testid":$,$show:e,zIndex:h,$stacked:v,children:c&&n(vn,{"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:s||(v?.5:.8),$backgroundBlur:d,$disableTransition:f,$enableOverlayClick:p,onClick:H,children:x})}),m):null},wn="lifesg-ds-overlay-stylesheet",Sn="lifesg-ds-overlay-open",xn=e=>Object.keys(h).reduce(((t,n)=>{const r=h[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),$n=xn("max-width"),_n=(xn("min-width"),c.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${$n.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`),Fn=({id:e="modal",show:t,animationFrom:r="bottom",children:o,enableOverlayClick:a=!0,rootComponentId:c,zIndex:s,onOverlayClick:u,dismissKeyboardOnShow:d=!0,...f})=>{const[p,h]=i(),[y,m]=i();l((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{window.visualViewport.removeEventListener("resize",v)}):(g(),window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)})),[]),l((()=>{t&&d&&document.activeElement?.blur?.()}),[t]);const g=()=>{const e=.01*window.innerHeight;h(e)},v=()=>{const e=.01*window.visualViewport.height;h(e),m(window.visualViewport.offsetTop)};return n(bn,{"data-testid":`${e}-overlay`,show:t,enableOverlayClick:a,onOverlayClick:u,id:e,rootId:c,zIndex:s,children:n(_n,{show:t,animationFrom:r,"data-testid":e,verticalHeight:p,offsetTop:y,...f,children:o})})};var On,jn={};Object.defineProperty(jn,"__esModule",{value:!0});var Cn=e;const Hn=e=>Cn.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Cn.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});Hn.displayName="CrossIcon",On=jn.CrossIcon=Hn;const Bn=c.button`
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
                background-color: ${en[7]};
            `}
    }
`,Dn=o.forwardRef((({children:e,focusHighlight:t=!0,focusOutline:r="none",...o},i)=>n(Bn,{ref:i,$outline:r,$highlight:t,...o,children:e}))),En=c.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${en[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${$n.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,kn=c(Dn)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Kt.Light[1]};
    }
`,zn=c(On)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${en[4]};
`,Tn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Pn=c.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?s`
            visibility: visible;
            opacity: 1;
            transition: ${Tn};
            z-index: 2;
        `:s`
            visibility: hidden;
            opacity: 0;
            transition: ${Tn};
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

	${$n.mobileL} {
        display: none;
    }
`,An=c((({id:e="modal-box",children:r,onClose:o,showCloseButton:i=!0,...a})=>t(En,{"data-testid":e,...a,onClick:e=>{e.stopPropagation()},children:[i&&n(kn,{type:"button",onClick:o,"data-testid":"close-button",focusHighlight:!1,children:n(zn,{})}),r]})))`
    padding: 3.5rem 1.25rem 2.5rem;
`,Ln=c.div`
    position: relative;
    width: fit-content;
`,In=c.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,Wn=({children:e,visible:o,onMobileClose:c,...s})=>{const u=s["data-testid"]||"popover",[d,f]=i("none"),y=a(null),m=p.exports.useMediaQuery({maxWidth:h.mobileL}),g=a(d);l((()=>(w(),window.addEventListener("resize",K(v,300)),()=>{window.removeEventListener("resize",K(v,300))})),[]);const v=()=>{w()},b=()=>{c&&c()},w=()=>{const e=S();var t;e&&(t=e,g.current=t,f(t))},S=()=>{if(y.current){const e=y.current.getBoundingClientRect(),t=24,n=e.y<t,r=window.innerWidth-t;return e.x<t?n?"top-left":"left":e.x+e.width>r?n?"top-right":"right":("top-left"===g.current||"left"===g.current)&&e.x-e.width/2>t||("top-right"===g.current||"right"===g.current)&&e.x+2*e.width<r?n?"top-center":"none":void 0}},x=()=>"string"==typeof e?n(dn.BodySmall,{children:e}):e;return t(r,{children:[n(Pn,{ref:y,"data-testid":u,$visible:o,$offset:d,...s,children:n(mn,{children:x()})}),m&&n(Fn,{show:o,onOverlayClick:b,children:n(An,{onClose:b,children:x()})})]})},Rn=(e,r)=>o=>{const{onPopoverAppear:c,onPopoverDismiss:s,...u}=o,d=r.trigger||"click",f=u,[y,m]=i(!1),g=a(),v=p.exports.useMediaQuery({maxWidth:h.mobileL});l((()=>{if(!v)return document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}}),[y]);const b=e=>{g&&!g.current.contains(e.target)&&(y&&m(!1),s&&s())};return t(Ln,{id:"popover-hoc-wrapper",ref:g,children:[n(In,{id:`popover-hoc-trigger${r["data-testid"]&&`-${r["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===d||v)&&(m(!y),!y&&c&&c(),y&&s&&s())},onMouseEnter:()=>{"hover"!==d||v||m(!0)},onMouseLeave:()=>{"hover"===d&&y&&!v&&m(!1)},"aria-label":"popover-button",children:n(e,{...f})}),n(Wn,{visible:y,id:r.id,"data-testid":r["data-testid"],onMobileClose:()=>{m(!1)},children:r.content})]})};export{Wn as Popover,Rn as withPopover};
//# sourceMappingURL=index.js.map
