import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{version as i,useRef as a,useState as s,isValidElement as l,createRef as c,cloneElement as d,PureComponent as u,useEffect as h,useLayoutEffect as f,useCallback as p,useContext as g,Children as m,createContext as b,useMemo as v,useImperativeHandle as y,useReducer as x,lazy as w,Suspense as $,createElement as C,forwardRef as S}from"react";import{ICircleFillIcon as D}from"@lifesg/react-icons/i-circle-fill";import k,{css as _,ThemeContext as F,keyframes as E}from"styled-components";import{useFloatingTree as O,FloatingTree as T,useFloatingNodeId as I,FloatingNode as M,useFloating as A,autoUpdate as B,offset as z,flip as j,shift as R,limitShift as L,size as P,useClick as H,useDismiss as N,useHover as W,useInteractions as Y,FloatingPortal as V,FloatingFocusManager as U,useTransitionStyles as K}from"@floating-ui/react";import q,{findDOMNode as Z,unstable_batchedUpdates as G}from"react-dom";import{ExternalIcon as Q}from"@lifesg/react-icons/external";import{CrossIcon as X}from"@lifesg/react-icons/cross";import{ChevronDownIcon as J}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as ee}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as te}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as re,PencilIcon as ne,EraserIcon as oe,SquareIcon as ie,SquareFillIcon as ae,SquareTickFillIcon as se,MinusSquareFillIcon as le,CrossIcon as ce,ChevronDownIcon as de}from"@lifesg/react-icons";import{ExclamationCircleFillIcon as ue}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as he}from"@lifesg/react-icons/square";import{SquareFillIcon as fe}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as pe}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as ge}from"@lifesg/react-icons/tick";import{MagnifierIcon as me}from"@lifesg/react-icons/magnifier";import{CaretRightIcon as be}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as ve}from"@lifesg/react-icons/minus-square-fill";import{EyeIcon as ye}from"@lifesg/react-icons/eye";import{EyeSlashIcon as xe}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as we}from"@lifesg/react-icons/exclamation-triangle";import{ChevronUpIcon as $e}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as Ce}from"@lifesg/react-icons/arrow-right";import{ExclamationTriangleFillIcon as Se}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as De}from"@lifesg/react-icons/tick-circle-fill";import{CircleIcon as ke}from"@lifesg/react-icons/circle";import{CircleDotIcon as _e}from"@lifesg/react-icons/circle-dot";function Fe(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function Ee(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var Oe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Te(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ie,Me={exports:{}};Ie=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var o=e.expressions.every((function(e){var r=e.feature,n=e.modifier,o=e.value,i=t[r];if(!i)return!1;switch(r){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=d(o),i=d(i);break;case"resolution":o=c(o),i=c(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=l(o),i=l(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(n){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!r||!o&&r}))},t.parse=s;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),i=t[1],a=t[2],s=t[3]||"",l={};return l.inverse=!!i&&"not"===i.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(o);return{modifier:r[1],feature:r[2],value:t[2]}})),l}))}function l(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function d(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=/[A-Z]/g,o=/^ms-/,i={};function a(e){return"-"+e.toLowerCase()}const s=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(n,a);return i[e]=o.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,t,r)=>{var n=r(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,o="undefined"!=typeof window?window.matchMedia:null;function i(e,t,r){var i=this;if(o&&!r){var a=o.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=n(e,t),this.media=e;function s(e){i.matches=e.matches,i.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,t,r){return new i(e,t,r)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))r.call(i,c)&&(s[c]=i[c]);if(t){a=t(i);for(var d=0;d<a.length;d++)n.call(i,a[d])&&(s[a[d]]=i[a[d]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,r)=>{var n,o=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,r,s,l){for(var c in e)if(a(e,c)){var d;try{if("function"!=typeof e[c]){var u=Error((s||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=e[c](t,c,s,r,null,o)}catch(e){d=e}if(!d||d instanceof Error||n((s||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in i)){i[d.message]=!0;var h=l?l():"";n("Failed "+r+" type: "+d.message+(null!=h?h:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,r)=>{var n,o=r(/*! react-is */"./node_modules/react-is/index.js"),i=r(/*! object-assign */"./node_modules/object-assign/index.js"),a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,d="<<anonymous>>",u={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:p(c),arrayOf:function(e){return p((function(t,r,n,o,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new f("Invalid "+o+" `"+i+"` of type `"+v(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,n,o,i+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:p((function(t,r,n,o,i){var a=t[r];return e(a)?null:new f("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:p((function(e,t,r,n,i){var a=e[t];return o.isValidElementType(a)?null:new f("Invalid "+n+" `"+i+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,o,i){if(!(t[r]instanceof e)){var a=e.name||d;return new f("Invalid "+o+" `"+i+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:p((function(e,t,r,n,o){return b(e[t])?null:new f("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,r,n,o,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=v(l);if("object"!==c)return new f("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,n,o,i+"."+d,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,o,i){for(var a=t[r],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new f("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(r)+" at index "+t+"."),c}return p((function(t,r,n,o,i){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,r,n,o,i,a);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new f("Invalid "+o+" `"+i+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,r,n,o,i){var s=t[r],l=v(s);if("object"!==l)return new f("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return m(n,o,i,c,y(d));var u=d(s,c,n,o,i+"."+c,a);if(u)return u}return null}))},exact:function(e){return p((function(t,r,n,o,l){var c=t[r],d=v(c);if("object"!==d)return new f("Invalid "+o+" `"+l+"` of type `"+d+"` supplied to `"+n+"`, expected `object`.");var u=i({},t[r],e);for(var h in u){var p=e[h];if(s(e,h)&&"function"!=typeof p)return m(n,o,l,h,y(p));if(!p)return new f("Invalid "+o+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=p(c,h,n,o,l+"."+h,a);if(g)return g}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){var r={},o=0;function i(i,s,l,c,u,h,p){if(c=c||d,h=h||l,p!==a){if(t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var m=c+":"+l;!r[m]&&o<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[m]=!0,o++)}}return null==s[l]?i?null===s[l]?new f("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new f("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,h)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function g(e){return p((function(t,r,n,o,i,a){var s=t[r];return v(s)!==e?new f("Invalid "+o+" `"+i+"` of type `"+y(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,r,n,o){return new f((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function b(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(b);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var o,i=n.call(t);if(n!==t.entries){for(;!(o=i.next()).done;)if(!b(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!b(a[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,u.checkPropTypes=l,u.resetWarningCache=l.resetWarningCache,u.PropTypes=u,u}},"./node_modules/prop-types/index.js":
/*!******************************************!*\
	  !*** ./node_modules/prop-types/index.js ***!
	  \******************************************/(e,t,r)=>{var n=r(/*! react-is */"./node_modules/react-is/index.js");e.exports=r(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(n.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
	  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
	  \*************************************************************/e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
	  !*** ./node_modules/prop-types/lib/has.js ***!
	  \********************************************/e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
	  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var f=e.type;switch(f){case c:case d:case o:case a:case i:case h:return f;default:var m=f&&f.$$typeof;switch(m){case l:case u:case g:case p:case s:return m;default:return t}}case n:return t}}}var w=c,$=d,C=l,S=s,D=r,k=u,_=o,F=g,E=p,O=n,T=a,I=i,M=h,A=!1;function B(e){return x(e)===d}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=C,t.ContextProvider=S,t.Element=D,t.ForwardRef=k,t.Fragment=_,t.Lazy=F,t.Memo=E,t.Portal=O,t.Profiler=T,t.StrictMode=I,t.Suspense=M,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),B(e)||x(e)===c},t.isConcurrentMode=B,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===g},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===i},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===d||e===a||e===i||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,t,r)=>{e.exports=r(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,t,r)=>{function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),o=r.length;if(n.length!==o)return!1;for(var i=0;i<o;i++){var a=r[i];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:()=>o,shallowEqualObjects:()=>n})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,o=e.onChange,a=n(e,["children","device","onChange"]),s=(0,i.default)(a,r,o);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r(/*! react */"react").createContext)(void 0);t.default=n},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=n(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=o.default;var i=n(r(/*! ./Component */"./src/Component.ts"));t.default=i.default;var a=n(r(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=a.default;var s=n(r(/*! ./Context */"./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},d=o(c,["type"]),u=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},d),h=n(n({},l),u);t.default={all:h,types:l,matchers:c,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,o.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(/*! react */"react"),i=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),c=n(r(/*! ./Context */"./src/Context.ts")),d=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,a.default)(r)]=e[r],t}),{})},u=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,o.useState)(t),n=r[0],i=r[1];return(0,o.useEffect)((function(){var e=t();n!==e&&i(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,o.useContext)(c.default),r=function(){return d(e)||d(t)},n=(0,o.useState)(r),i=n[0],a=n[1];return(0,o.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=h(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,i.default)(e,t||{},!!t)},n=(0,o.useState)(r),a=n[0],s=n[1],l=u();return(0,o.useEffect)((function(){if(l){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,n),f=function(e){var t=(0,o.useState)(e.matches),r=t[0],n=t[1];return(0,o.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),p=u();return(0,o.useEffect)((function(){p&&r&&r(f)}),[f]),(0,o.useEffect)((function(){return function(){l&&l.dispose()}}),[]),f}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var Ae=Me.exports=Ie(o),Be={exports:{}};Be.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,c),i=r-o<0,a=t.clone().add(n+(i?-1:1),c);return+(-(n+(r-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:a,m:i,s:o,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof k||!(!e||!e[w])},C=function e(t,r,n){var o;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,o=s}return!n&&o&&(y=o),o||!n&&y},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},D=v;D.l=C,D.i=$,D.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return D},b.isValid=function(){return!(this.$d.toString()===f)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return D.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!D.u(t)||t,d=D.p(e),f=function(e,t){var o=D.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(s)},p=function(e,t){return D.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return n?f(1,0):f(31,11);case c:return n?f(1,m):f(0,m+1);case l:var y=this.$locale().weekStart||0,x=(g<y?g+7:g)-y;return f(n?b-x:b+(6-x),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=D.p(e),d="set"+(this.$u?"UTC":""),f=(r={},r[s]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[a]=d+"Hours",r[i]=d+"Minutes",r[o]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[D.p(e)]()},b.add=function(n,d){var h,f=this;n=Number(n);var p=D.p(d),g=function(e){var t=S(f);return D.w(t.date(t.date()+Math.round(e*n)),f)};if(p===c)return this.set(c,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[i]=t,h[a]=r,h[o]=e,h)[p]||1,b=this.$d.getTime()+n*m;return D.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=D.z(this),i=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,u=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},h=function(e){return D.s(i%12||12,e,"0")},p=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return D.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,f){var p,g=this,m=D.p(h),b=S(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return D.m(g,b)};switch(m){case u:p=x()/12;break;case c:p=x();break;case d:p=x()/3;break;case l:p=(y-v)/6048e5;break;case s:p=(y-v)/864e5;break;case a:p=y/r;break;case i:p=y/t;break;case o:p=y/e;break;default:p=y}return f?p:D.a(p)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return D.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),_=k.prototype;return S.prototype=_,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){_[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,k,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var ze=Te(Be.exports),je={exports:{}};je.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[o,function(e){this.afternoon=d(e,!1)}],a:[o,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[o,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,o;n=r,o=i&&i.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],d=u[c],h=d&&d[0],f=d&&d[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var o=a[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(n),d=i.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),o=n.year,i=n.month,a=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,f=new Date,p=a||(o||i?1:f.getDate()),g=o||f.getFullYear(),m=0;o&&!i||(m=i>0?i-1:f.getMonth());var b=s||0,v=l||0,y=c||0,x=d||0;return u?new Date(Date.UTC(g,m,p,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(g,m,p,b,v,y,x)):new Date(g,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var g=r.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Re=Te(je.exports),Le={exports:{}};Le.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),a=r(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var Pe=Te(Le.exports),He={exports:{}};He.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Ne=Te(He.exports),We={exports:{}};We.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Ye,Ve,Ue=Te(We.exports),Ke={exports:{}};Ke.exports=(Ye={year:0,month:1,day:2,hour:3,minute:4,second:5},Ve={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=Ve[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Ve[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,c=s.value,d=Ye[l];d>=0&&(i[d]=parseInt(c,10))}var u=i[3],h=24===u?0:u,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var a=o&&t,s=o||t||n,l=i(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var a=i(n-=60*(o-t)*1e3,r);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(r.utc(e,a).valueOf(),l,s),d=c[0],u=c[1],h=r(d).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var qe,Ze=Te(Ke.exports);ze.extend(Pe),ze.extend(Ue),ze.extend(Ne),ze.extend(Re),ze.extend(Ze),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=ze(t).startOf("week");return Ge(r).map((e=>Qe(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Qe(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(ze(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+ze(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=ze(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?ze(n):void 0,o?ze(o):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(qe||(qe={}));const Ge=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Qe=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Xe=[1,3,5,7,8,10,12],Je=[4,6,9,11];var et,tt;!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),a=parseInt(n);return 0==o?"1":Xe.includes(i)?Math.min(o,31).toString():Je.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=ze(e,r);return ze(t,r).diff(n,"minute")},e.toDayjs=e=>e?ze(e):ze(),e.addMinutesToTime=(e,t,r="HH:mm")=>ze(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>ze(e).isSame(ze(t),r)}(et||(et={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!ze(e).isBefore(n,"day"))||!(!o||!ze(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(ze(e).isValid())return e}return""}}(tt||(tt={}));const rt=()=>{const e=i.split(".");return parseInt(e[0],10)>=19},nt=(...e)=>t=>{const r=[];for(const n of e)if("function"==typeof n){const e=n(t),o="function"==typeof e;r.push(o?e:()=>n(null))}else n.current=t,r.push((()=>{n.current=null}));if(rt())return()=>{for(const e of r)e()}};var ot,it;!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ot||(ot={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const a=n+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e},r=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const t=r.select(e);return`${e}${n.get(t)}`}}(it||(it={}));var at=function(e,t){return at=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},at(e,t)};var st=function(){return st=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},st.apply(this,arguments)};var lt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ct=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},dt="object"==typeof lt&&lt&&lt.Object===Object&&lt,ut="object"==typeof self&&self&&self.Object===Object&&self,ht=dt||ut||Function("return this")(),ft=ht,pt=function(){return ft.Date.now()},gt=/\s/;var mt=function(e){for(var t=e.length;t--&&gt.test(e.charAt(t)););return t},bt=/^\s+/;var vt=function(e){return e?e.slice(0,mt(e)+1).replace(bt,""):e},yt=ht.Symbol,xt=yt,wt=Object.prototype,$t=wt.hasOwnProperty,Ct=wt.toString,St=xt?xt.toStringTag:void 0;var Dt=function(e){var t=$t.call(e,St),r=e[St];try{e[St]=void 0;var n=!0}catch(e){}var o=Ct.call(e);return n&&(t?e[St]=r:delete e[St]),o},kt=Object.prototype.toString;var _t=Dt,Ft=function(e){return kt.call(e)},Et=yt?yt.toStringTag:void 0;var Ot=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Et&&Et in Object(e)?_t(e):Ft(e)},Tt=function(e){return null!=e&&"object"==typeof e};var It=vt,Mt=ct,At=function(e){return"symbol"==typeof e||Tt(e)&&"[object Symbol]"==Ot(e)},Bt=/^[-+]0x[0-9a-f]+$/i,zt=/^0b[01]+$/i,jt=/^0o[0-7]+$/i,Rt=parseInt;var Lt=ct,Pt=pt,Ht=function(e){if("number"==typeof e)return e;if(At(e))return NaN;if(Mt(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Mt(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=It(e);var r=zt.test(e);return r||jt.test(e)?Rt(e.slice(2),r?2:8):Bt.test(e)?NaN:+e},Nt=Math.max,Wt=Math.min;var Yt=function(e,t,r){var n,o,i,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=i}function g(){var e=Pt();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?Wt(r,i-(e-c)):r}(e))}function m(e){return s=void 0,h&&n?f(e):(n=o=void 0,a)}function b(){var e=Pt(),r=p(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?f(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Ht(t)||0,Lt(r)&&(d=!!r.leading,i=(u="maxWait"in r)?Nt(Ht(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:m(Pt())},b},Vt=Yt,Ut=ct;var Kt=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ut(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),Vt(e,t,{leading:n,maxWait:t,trailing:o})},qt=function(e,t,r,n){switch(t){case"debounce":return Yt(e,r,n);case"throttle":return Kt(e,r,n);default:return e}},Zt=function(e){return"function"==typeof e},Gt=function(){return"undefined"==typeof window},Qt=function(e){return e instanceof Element||e instanceof HTMLDocument},Xt=function(e,t,r,n){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!n||t.height===a&&!r?t:(e&&Zt(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!Gt()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(Gt())return null;if(t)return document.querySelector(t);if(n&&Qt(n))return n;if(r.targetRef&&Qt(r.targetRef.current))return r.targetRef.current;var o=Z(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=Xt(s,r.setState.bind(r),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!Gt()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Zt(t)?"renderProp":Zt(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=c(),r.observableElement=null,Gt()||(r.resizeHandler=qt(r.createResizeHandler,o,a,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}at(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Gt()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=o).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(a,null)}}}(u);var Jt=Gt()?h:f;function er(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,l=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,h=void 0===u||u,f=e.targetRef,p=e.observerOptions,g=e.onResize,m=a(r),b=a(null),v=null!=f?f:b,y=a(),x=s({width:void 0,height:void 0}),w=x[0],$=x[1];return Jt((function(){if(!Gt()){var e=Xt(g,$,d,h);y.current=qt((function(t){(d||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!m.current&&!Gt()&&e({width:n,height:o}),m.current=!1}))}),n,i,l);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[n,i,l,d,h,g,p,v.current]),st({ref:v},w)}function tr(e){const t=a(null);return f((()=>{t.current=e}),[e]),p(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}const rr=(e,t,r="window",n)=>{const o=a();h((()=>{o.current=t}),[t]),h((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])},nr=()=>{const[e,t]=s(!1);return h((()=>{t(!0)}),[]),e};function or({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const o=n.value,i=t(o),a=null!==(r=n.selectionEnd)&&void 0!==r?r:0,s=o.substring(0,a),l=t(s),c=s.length-l.length,d=Math.max(0,a-c);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(d,d)}}}}const ir=e=>{const t=(e=>{const t=a(e),r=a();return h((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},ar=e=>{const[t,r]=s(e),n=a(e);return[t,p((e=>{n.current=e,r(e)}),[]),n]};var sr=Array.isArray,lr="object"==typeof Oe&&Oe&&Oe.Object===Object&&Oe,cr=lr,dr="object"==typeof self&&self&&self.Object===Object&&self,ur=cr||dr||Function("return this")(),hr=ur.Symbol,fr=hr,pr=Object.prototype,gr=pr.hasOwnProperty,mr=pr.toString,br=fr?fr.toStringTag:void 0;var vr=function(e){var t=gr.call(e,br),r=e[br];try{e[br]=void 0;var n=!0}catch(e){}var o=mr.call(e);return n&&(t?e[br]=r:delete e[br]),o},yr=Object.prototype.toString;var xr=vr,wr=function(e){return yr.call(e)},$r=hr?hr.toStringTag:void 0;var Cr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$r&&$r in Object(e)?xr(e):wr(e)};var Sr=function(e){return null!=e&&"object"==typeof e},Dr=Cr,kr=Sr;var _r=function(e){return"symbol"==typeof e||kr(e)&&"[object Symbol]"==Dr(e)},Fr=sr,Er=_r,Or=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Tr=/^\w*$/;var Ir=function(e,t){if(Fr(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Er(e))||(Tr.test(e)||!Or.test(e)||null!=t&&e in Object(t))};var Mr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ar=Cr,Br=Mr;var zr,jr=function(e){if(!Br(e))return!1;var t=Ar(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Rr=ur["__core-js_shared__"],Lr=(zr=/[^.]+$/.exec(Rr&&Rr.keys&&Rr.keys.IE_PROTO||""))?"Symbol(src)_1."+zr:"";var Pr=function(e){return!!Lr&&Lr in e},Hr=Function.prototype.toString;var Nr=function(e){if(null!=e){try{return Hr.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Wr=jr,Yr=Pr,Vr=Mr,Ur=Nr,Kr=/^\[object .+?Constructor\]$/,qr=Function.prototype,Zr=Object.prototype,Gr=qr.toString,Qr=Zr.hasOwnProperty,Xr=RegExp("^"+Gr.call(Qr).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Jr=function(e,t){return null==e?void 0:e[t]},en=function(e){return!(!Vr(e)||Yr(e))&&(Wr(e)?Xr:Kr).test(Ur(e))},tn=Jr;var rn=function(e,t){var r=tn(e,t);return en(r)?r:void 0},nn=rn(Object,"create"),on=nn;var an=function(){this.__data__=on?on(null):{},this.size=0};var sn=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ln=nn,cn=Object.prototype.hasOwnProperty;var dn=function(e){var t=this.__data__;if(ln){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return cn.call(t,e)?t[e]:void 0},un=nn,hn=Object.prototype.hasOwnProperty;var fn=function(e){var t=this.__data__;return un?void 0!==t[e]:hn.call(t,e)},pn=nn;var gn=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=pn&&void 0===t?"__lodash_hash_undefined__":t,this},mn=an,bn=sn,vn=dn,yn=fn,xn=gn;function wn(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}wn.prototype.clear=mn,wn.prototype.delete=bn,wn.prototype.get=vn,wn.prototype.has=yn,wn.prototype.set=xn;var $n=wn;var Cn=function(){this.__data__=[],this.size=0};var Sn=function(e,t){return e===t||e!=e&&t!=t},Dn=Sn;var kn=function(e,t){for(var r=e.length;r--;)if(Dn(e[r][0],t))return r;return-1},_n=kn,Fn=Array.prototype.splice;var En=function(e){var t=this.__data__,r=_n(t,e);return!(r<0)&&(r==t.length-1?t.pop():Fn.call(t,r,1),--this.size,!0)},On=kn;var Tn=function(e){var t=this.__data__,r=On(t,e);return r<0?void 0:t[r][1]},In=kn;var Mn=function(e){return In(this.__data__,e)>-1},An=kn;var Bn=function(e,t){var r=this.__data__,n=An(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},zn=Cn,jn=En,Rn=Tn,Ln=Mn,Pn=Bn;function Hn(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Hn.prototype.clear=zn,Hn.prototype.delete=jn,Hn.prototype.get=Rn,Hn.prototype.has=Ln,Hn.prototype.set=Pn;var Nn=Hn,Wn=rn(ur,"Map"),Yn=$n,Vn=Nn,Un=Wn;var Kn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var qn=function(e,t){var r=e.__data__;return Kn(t)?r["string"==typeof t?"string":"hash"]:r.map},Zn=qn;var Gn=function(e){var t=Zn(this,e).delete(e);return this.size-=t?1:0,t},Qn=qn;var Xn=function(e){return Qn(this,e).get(e)},Jn=qn;var eo=function(e){return Jn(this,e).has(e)},to=qn;var ro=function(e,t){var r=to(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},no=function(){this.size=0,this.__data__={hash:new Yn,map:new(Un||Vn),string:new Yn}},oo=Gn,io=Xn,ao=eo,so=ro;function lo(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}lo.prototype.clear=no,lo.prototype.delete=oo,lo.prototype.get=io,lo.prototype.has=ao,lo.prototype.set=so;var co=lo,uo=co;function ho(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(ho.Cache||uo),r}ho.Cache=uo;var fo=ho;var po=function(e){var t=fo(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},go=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,mo=/\\(\\)?/g,bo=po((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(go,(function(e,r,n,o){t.push(n?o.replace(mo,"$1"):r||e)})),t}));var vo=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},yo=sr,xo=_r,wo=hr?hr.prototype:void 0,$o=wo?wo.toString:void 0;var Co=function e(t){if("string"==typeof t)return t;if(yo(t))return vo(t,e)+"";if(xo(t))return $o?$o.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},So=Co;var Do=sr,ko=Ir,_o=bo,Fo=function(e){return null==e?"":So(e)};var Eo=function(e,t){return Do(e)?e:ko(e,t)?[e]:_o(Fo(e))},Oo=_r;var To=function(e){if("string"==typeof e||Oo(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Io=Eo,Mo=To;var Ao=function(e,t){for(var r=0,n=(t=Io(t,e)).length;null!=e&&r<n;)e=e[Mo(t[r++])];return r&&r==n?e:void 0},Bo=Ao;var zo=function(e,t,r){var n=null==e?void 0:Bo(e,t);return void 0===n?r:n},jo=Te(zo);const Ro=(e,t,r)=>jo(r,t)||jo(e,t),Lo=(e,t)=>{const r=t||e.defaultValue;return jo(e.collections,r)},Po={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Ho=e=>t=>{var r;const n=t.theme,o=Lo(Po,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Ro(o,e,n.overrides.border)}px`:`${o[e]}px`},No={"width-005":Ho("width-005"),"width-010":Ho("width-010"),"width-020":Ho("width-020"),"width-040":Ho("width-040"),solid:(Wo="solid",e=>{var t;const r=e.theme,n=Lo(Po,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Ro(n,Wo,r.overrides.border):n[Wo];return"function"==typeof o?o(e):o})};var Wo;const Yo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Vo={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Uo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ko={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},qo={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Zo={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Go={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Qo={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Xo={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Jo={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ei={collections:{lifesg:Uo,bookingsg:Yo,rbs:Go,mylegacy:Ko,ccube:Vo,oneservice:qo,pa:Zo,a11yplayground:Qo,supportgowhere:Xo,imda:Jo},defaultValue:"lifesg"},ti={collections:{lifesg:Uo,bookingsg:Yo,rbs:Go,mylegacy:Ko,ccube:Vo,oneservice:qo,pa:Zo,a11yplayground:Qo,supportgowhere:Xo,imda:Jo},defaultValue:"lifesg"},ri=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Lo(o?ti:ei,null==n?void 0:n.colourScheme),a=o?"primitiveColourDark":"primitiveColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a];return s?Ro(i,e,s):i[e]},ni={"brand-10":ri("brand-10"),"brand-20":ri("brand-20"),"brand-30":ri("brand-30"),"brand-40":ri("brand-40"),"brand-50":ri("brand-50"),"brand-60":ri("brand-60"),"brand-70":ri("brand-70"),"brand-80":ri("brand-80"),"brand-90":ri("brand-90"),"brand-95":ri("brand-95"),"brand-100":ri("brand-100"),"primary-10":ri("primary-10"),"primary-20":ri("primary-20"),"primary-30":ri("primary-30"),"primary-40":ri("primary-40"),"primary-50":ri("primary-50"),"primary-60":ri("primary-60"),"primary-70":ri("primary-70"),"primary-80":ri("primary-80"),"primary-90":ri("primary-90"),"primary-95":ri("primary-95"),"primary-100":ri("primary-100"),"secondary-10":ri("secondary-10"),"secondary-20":ri("secondary-20"),"secondary-30":ri("secondary-30"),"secondary-40":ri("secondary-40"),"secondary-50":ri("secondary-50"),"secondary-60":ri("secondary-60"),"secondary-70":ri("secondary-70"),"secondary-80":ri("secondary-80"),"secondary-90":ri("secondary-90"),"secondary-95":ri("secondary-95"),"secondary-100":ri("secondary-100"),"neutral-10":ri("neutral-10"),"neutral-20":ri("neutral-20"),"neutral-30":ri("neutral-30"),"neutral-40":ri("neutral-40"),"neutral-50":ri("neutral-50"),"neutral-60":ri("neutral-60"),"neutral-70":ri("neutral-70"),"neutral-80":ri("neutral-80"),"neutral-90":ri("neutral-90"),"neutral-95":ri("neutral-95"),"neutral-100":ri("neutral-100"),"success-10":ri("success-10"),"success-20":ri("success-20"),"success-30":ri("success-30"),"success-40":ri("success-40"),"success-50":ri("success-50"),"success-60":ri("success-60"),"success-70":ri("success-70"),"success-80":ri("success-80"),"success-90":ri("success-90"),"success-95":ri("success-95"),"success-100":ri("success-100"),"warning-10":ri("warning-10"),"warning-20":ri("warning-20"),"warning-30":ri("warning-30"),"warning-40":ri("warning-40"),"warning-50":ri("warning-50"),"warning-60":ri("warning-60"),"warning-70":ri("warning-70"),"warning-80":ri("warning-80"),"warning-90":ri("warning-90"),"warning-95":ri("warning-95"),"warning-100":ri("warning-100"),"error-10":ri("error-10"),"error-20":ri("error-20"),"error-30":ri("error-30"),"error-40":ri("error-40"),"error-50":ri("error-50"),"error-60":ri("error-60"),"error-70":ri("error-70"),"error-80":ri("error-80"),"error-90":ri("error-90"),"error-95":ri("error-95"),"error-100":ri("error-100"),"info-10":ri("info-10"),"info-20":ri("info-20"),"info-30":ri("info-30"),"info-40":ri("info-40"),"info-50":ri("info-50"),"info-60":ri("info-60"),"info-70":ri("info-70"),"info-80":ri("info-80"),"info-90":ri("info-90"),"info-95":ri("info-95"),"info-100":ri("info-100"),white:ri("white"),black:ri("black"),"primary-inverse":ri("primary-inverse")},oi={text:ri("neutral-20"),"text-subtle":ri("neutral-30"),"text-subtler":ri("neutral-50"),"text-subtlest":ri("neutral-60"),"text-primary":ri("primary-50"),"text-hover":ri("primary-40"),"text-selected":ri("primary-50"),"text-selected-hover":ri("primary-40"),"text-disabled":ri("neutral-50"),"text-disabled-subtle":ri("neutral-60"),"text-disabled-subtlest":ri("neutral-80"),"text-selected-disabled":ri("neutral-20"),"text-success":ri("success-40"),"text-warning":ri("warning-40"),"text-error":ri("error-40"),"text-info":ri("info-40"),"text-inverse":ri("white"),icon:ri("neutral-50"),"icon-subtle":ri("neutral-60"),"icon-strongest":ri("neutral-20"),"icon-primary":ri("primary-50"),"icon-primary-subtle":ri("primary-60"),"icon-primary-subtlest":ri("primary-70"),"icon-hover":ri("primary-40"),"icon-selected":ri("primary-50"),"icon-selected-hover":ri("primary-40"),"icon-disabled":ri("neutral-50"),"icon-disabled-subtle":ri("neutral-60"),"icon-selected-disabled":ri("neutral-60"),"icon-success":ri("success-50"),"icon-warning":ri("warning-60"),"icon-error":ri("error-50"),"icon-error-strong":ri("error-40"),"icon-info":ri("info-50"),"icon-inverse":ri("white"),"icon-primary-inverse":ri("primary-inverse"),border:ri("neutral-90"),"border-strong":ri("neutral-70"),"border-stronger":ri("neutral-50"),"border-primary":ri("primary-50"),"border-primary-subtle":ri("primary-60"),"border-hover":ri("primary-90"),"border-hover-strong":ri("primary-60"),"border-selected":ri("primary-50"),"border-selected-subtle":ri("primary-70"),"border-selected-subtlest":ri("primary-90"),"border-selected-hover":ri("primary-40"),"border-focus":ri("primary-60"),"border-focus-strong":ri("primary-50"),"border-disabled":ri("neutral-90"),"border-selected-disabled":ri("neutral-70"),"border-success":ri("success-60"),"border-warning":ri("warning-60"),"border-error":ri("error-60"),"border-error-focus":ri("error-60"),"border-error-focus-strong":ri("error-40"),"border-error-strong":ri("error-40"),"border-info":ri("info-60"),bg:ri("white"),"bg-strong":ri("neutral-100"),"bg-stronger":ri("neutral-95"),"bg-strongest":ri("neutral-90"),"bg-hover":ri("primary-95"),"bg-hover-strong":ri("primary-90"),"bg-hover-subtle":ri("primary-100"),"bg-hover-neutral":ri("neutral-100"),"bg-hover-neutral-strong":ri("neutral-90"),"bg-selected":ri("primary-95"),"bg-selected-hover":ri("primary-90"),"bg-selected-strong":ri("primary-90"),"bg-selected-stronger":ri("primary-70"),"bg-selected-strongest":ri("primary-50"),"bg-selected-strongest-hover":ri("primary-40"),"bg-disabled":ri("neutral-95"),"bg-selected-disabled":ri("neutral-95"),"bg-selected-stronger-disabled":ri("neutral-70"),"bg-success":ri("success-100"),"bg-success-hover":ri("success-95"),"bg-success-strong":ri("success-50"),"bg-success-strong-hover":ri("success-40"),"bg-warning":ri("warning-100"),"bg-warning-hover":ri("warning-95"),"bg-warning-strong":ri("warning-50"),"bg-warning-strong-hover":ri("warning-40"),"bg-info":ri("info-100"),"bg-info-hover":ri("info-95"),"bg-info-strong":ri("info-50"),"bg-info-strong-hover":ri("info-40"),"bg-error":ri("error-100"),"bg-error-hover":ri("error-95"),"bg-error-strong":ri("error-50"),"bg-error-strong-hover":ri("error-40"),"bg-inverse":ri("neutral-20"),"bg-inverse-subtle":ri("neutral-30"),"bg-inverse-subtler":ri("neutral-50"),"bg-inverse-subtlest":ri("neutral-60"),"bg-inverse-hover":ri("neutral-40"),"bg-primary":ri("primary-50"),"bg-primary-subtle":ri("primary-60"),"bg-primary-subtler":ri("primary-95"),"bg-primary-subtlest":ri("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ri("primary-40"),"bg-primary-subtlest-hover":ri("primary-90"),"bg-primary-subtlest-selected":ri("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ri("primary-50"),"hyperlink-hover":ri("primary-40"),"hyperlink-visited":ri("primary-40"),"hyperlink-inverse":ri("primary-inverse"),"focus-ring":ri("primary-50"),"focus-ring-inverse":ri("white")},ii={text:ri("neutral-100"),"text-subtle":ri("neutral-80"),"text-subtler":ri("neutral-60"),"text-subtlest":ri("neutral-50"),"text-primary":ri("primary-60"),"text-hover":ri("primary-70"),"text-selected":ri("primary-60"),"text-selected-hover":ri("primary-70"),"text-disabled":ri("neutral-60"),"text-disabled-subtle":ri("neutral-50"),"text-disabled-subtlest":ri("neutral-30"),"text-selected-disabled":ri("neutral-90"),"text-success":ri("success-70"),"text-warning":ri("warning-70"),"text-error":ri("error-70"),"text-info":ri("info-70"),"text-inverse":ri("black"),icon:ri("neutral-60"),"icon-subtle":ri("neutral-50"),"icon-strongest":ri("neutral-90"),"icon-primary":ri("primary-60"),"icon-primary-subtle":ri("primary-50"),"icon-primary-subtlest":ri("primary-40"),"icon-hover":ri("primary-70"),"icon-selected":ri("primary-60"),"icon-selected-hover":ri("primary-70"),"icon-disabled":ri("neutral-60"),"icon-disabled-subtle":ri("neutral-50"),"icon-selected-disabled":ri("neutral-50"),"icon-success":ri("success-60"),"icon-warning":ri("warning-50"),"icon-error":ri("error-60"),"icon-error-strong":ri("error-70"),"icon-info":ri("info-60"),"icon-inverse":ri("black"),"icon-primary-inverse":ri("primary-inverse"),border:ri("neutral-20"),"border-strong":ri("neutral-40"),"border-stronger":ri("neutral-60"),"border-primary":ri("primary-60"),"border-primary-subtle":ri("primary-50"),"border-hover":ri("primary-20"),"border-hover-strong":ri("primary-50"),"border-selected":ri("primary-60"),"border-selected-subtle":ri("primary-40"),"border-selected-subtlest":ri("primary-20"),"border-selected-hover":ri("primary-70"),"border-focus":ri("primary-50"),"border-focus-strong":ri("primary-60"),"border-disabled":ri("neutral-20"),"border-selected-disabled":ri("neutral-40"),"border-success":ri("success-50"),"border-warning":ri("warning-50"),"border-error":ri("error-50"),"border-error-focus":ri("error-50"),"border-error-focus-strong":ri("error-70"),"border-error-strong":ri("error-70"),"border-info":ri("info-50"),bg:ri("black"),"bg-strong":ri("neutral-10"),"bg-stronger":ri("neutral-20"),"bg-strongest":ri("neutral-20"),"bg-hover":ri("primary-20"),"bg-hover-strong":ri("primary-20"),"bg-hover-subtle":ri("primary-10"),"bg-hover-neutral":ri("neutral-10"),"bg-hover-neutral-strong":ri("neutral-20"),"bg-selected":ri("primary-20"),"bg-selected-hover":ri("primary-20"),"bg-selected-strong":ri("primary-20"),"bg-selected-stronger":ri("primary-40"),"bg-selected-strongest":ri("primary-60"),"bg-selected-strongest-hover":ri("primary-70"),"bg-disabled":ri("neutral-20"),"bg-selected-disabled":ri("neutral-20"),"bg-selected-stronger-disabled":ri("neutral-40"),"bg-success":ri("success-10"),"bg-success-hover":ri("success-20"),"bg-success-strong":ri("success-60"),"bg-success-strong-hover":ri("success-70"),"bg-warning":ri("warning-10"),"bg-warning-hover":ri("warning-20"),"bg-warning-strong":ri("warning-60"),"bg-warning-strong-hover":ri("warning-70"),"bg-info":ri("info-10"),"bg-info-hover":ri("info-20"),"bg-info-strong":ri("info-60"),"bg-info-strong-hover":ri("info-70"),"bg-error":ri("error-10"),"bg-error-hover":ri("error-20"),"bg-error-strong":ri("error-60"),"bg-error-strong-hover":ri("error-70"),"bg-inverse":ri("neutral-90"),"bg-inverse-subtle":ri("neutral-80"),"bg-inverse-subtler":ri("neutral-60"),"bg-inverse-subtlest":ri("neutral-50"),"bg-inverse-hover":ri("neutral-70"),"bg-primary":ri("primary-60"),"bg-primary-subtle":ri("primary-50"),"bg-primary-subtler":ri("primary-20"),"bg-primary-subtlest":ri("primary-10"),"bg-available":"#185339","bg-primary-hover":ri("primary-70"),"bg-primary-subtlest-hover":ri("primary-20"),"bg-primary-subtlest-selected":ri("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:ri("primary-60"),"hyperlink-hover":ri("primary-70"),"hyperlink-visited":ri("primary-70"),"hyperlink-inverse":ri("primary-inverse"),"focus-ring":ri("primary-60"),"focus-ring-inverse":ri("black")},ai={text:ri("neutral-30"),"text-subtle":ri("neutral-40"),"text-subtler":ri("neutral-50"),"text-subtlest":ri("neutral-70"),"text-primary":ri("neutral-10"),"text-hover":ri("neutral-70"),"text-selected":ri("neutral-20"),"text-selected-hover":ri("neutral-10"),"text-disabled":ri("neutral-50"),"text-disabled-subtle":ri("neutral-60"),"text-disabled-subtlest":ri("neutral-80"),"text-selected-disabled":ri("neutral-40"),"text-success":ri("success-40"),"text-warning":ri("warning-40"),"text-error":ri("brand-30"),"text-info":ri("neutral-40"),"text-inverse":ri("neutral-100"),icon:ri("neutral-40"),"icon-subtle":ri("neutral-50"),"icon-strongest":ri("neutral-10"),"icon-primary":ri("neutral-10"),"icon-primary-subtle":ri("neutral-30"),"icon-primary-subtlest":ri("neutral-60"),"icon-hover":ri("neutral-70"),"icon-selected":ri("brand-20"),"icon-selected-hover":ri("brand-10"),"icon-disabled":ri("neutral-50"),"icon-disabled-subtle":ri("neutral-60"),"icon-selected-disabled":ri("neutral-40"),"icon-success":ri("success-40"),"icon-warning":ri("warning-60"),"icon-error":ri("brand-30"),"icon-error-strong":ri("brand-10"),"icon-info":ri("neutral-40"),"icon-inverse":ri("neutral-100"),"icon-primary-inverse":"#F9B371",border:ri("neutral-90"),"border-strong":ri("neutral-30"),"border-stronger":ri("neutral-20"),"border-primary":ri("neutral-40"),"border-primary-subtle":ri("neutral-60"),"border-hover":ri("neutral-80"),"border-hover-strong":ri("neutral-10"),"border-selected":ri("brand-20"),"border-selected-subtle":ri("neutral-40"),"border-selected-subtlest":ri("neutral-70"),"border-selected-hover":ri("neutral-10"),"border-focus":ri("neutral-20"),"border-focus-strong":ri("neutral-10"),"border-disabled":ri("neutral-90"),"border-selected-disabled":ri("neutral-80"),"border-success":ri("success-40"),"border-warning":ri("warning-60"),"border-error":ri("brand-30"),"border-error-focus":ri("brand-20"),"border-error-focus-strong":ri("brand-10"),"border-error-strong":ri("brand-20"),"border-info":ri("neutral-40"),bg:ri("neutral-100"),"bg-strong":ri("neutral-95"),"bg-stronger":ri("neutral-90"),"bg-strongest":ri("neutral-80"),"bg-hover":ri("brand-90"),"bg-hover-strong":ri("brand-80"),"bg-hover-subtle":ri("neutral-90"),"bg-hover-neutral":ri("neutral-90"),"bg-hover-neutral-strong":ri("neutral-90"),"bg-selected":ri("brand-100"),"bg-selected-hover":ri("brand-30"),"bg-selected-strong":ri("brand-50"),"bg-selected-stronger":ri("brand-40"),"bg-selected-strongest":ri("brand-20"),"bg-selected-strongest-hover":ri("brand-10"),"bg-disabled":ri("neutral-90"),"bg-selected-disabled":ri("neutral-90"),"bg-selected-stronger-disabled":ri("neutral-80"),"bg-success":ri("success-100"),"bg-success-hover":ri("success-95"),"bg-success-strong":ri("success-50"),"bg-success-strong-hover":ri("success-40"),"bg-warning":ri("warning-100"),"bg-warning-hover":ri("warning-95"),"bg-warning-strong":ri("warning-50"),"bg-warning-strong-hover":ri("warning-40"),"bg-info":ri("neutral-95"),"bg-info-hover":ri("info-95"),"bg-info-strong":ri("info-50"),"bg-info-strong-hover":ri("info-40"),"bg-error":ri("brand-100"),"bg-error-hover":ri("error-95"),"bg-error-strong":ri("error-50"),"bg-error-strong-hover":ri("error-40"),"bg-inverse":ri("neutral-40"),"bg-inverse-subtle":ri("neutral-60"),"bg-inverse-subtler":ri("neutral-70"),"bg-inverse-subtlest":ri("neutral-80"),"bg-inverse-hover":ri("neutral-30"),"bg-primary":ri("brand-20"),"bg-primary-subtle":ri("brand-60"),"bg-primary-subtler":ri("brand-80"),"bg-primary-subtlest":ri("brand-100"),"bg-available":ri("success-60"),"bg-primary-hover":ri("brand-10"),"bg-primary-subtlest-hover":ri("brand-80"),"bg-primary-subtlest-selected":ri("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:ri("neutral-10"),"hyperlink-hover":ri("neutral-40"),"hyperlink-visited":ri("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":ri("primary-50"),"focus-ring-inverse":ri("white")},si={text:ri("neutral-20"),"text-subtle":ri("neutral-30"),"text-subtler":ri("neutral-50"),"text-subtlest":ri("neutral-60"),"text-primary":ri("primary-50"),"text-hover":ri("primary-40"),"text-selected":ri("primary-50"),"text-selected-hover":ri("primary-40"),"text-disabled":ri("neutral-50"),"text-disabled-subtle":ri("neutral-60"),"text-disabled-subtlest":ri("neutral-80"),"text-selected-disabled":ri("neutral-20"),"text-success":ri("success-40"),"text-warning":ri("warning-40"),"text-error":ri("error-40"),"text-info":ri("info-40"),"text-inverse":ri("white"),icon:ri("neutral-50"),"icon-subtle":ri("neutral-60"),"icon-strongest":ri("neutral-20"),"icon-primary":ri("primary-50"),"icon-primary-subtle":ri("primary-60"),"icon-primary-subtlest":ri("primary-70"),"icon-hover":ri("primary-40"),"icon-selected":ri("primary-50"),"icon-selected-hover":ri("primary-40"),"icon-disabled":ri("neutral-50"),"icon-disabled-subtle":ri("neutral-60"),"icon-selected-disabled":ri("neutral-60"),"icon-success":ri("success-50"),"icon-warning":ri("warning-60"),"icon-error":ri("error-50"),"icon-error-strong":ri("error-40"),"icon-info":ri("info-50"),"icon-inverse":ri("white"),"icon-primary-inverse":ri("primary-inverse"),border:ri("neutral-90"),"border-strong":ri("neutral-70"),"border-stronger":ri("neutral-50"),"border-primary":ri("primary-50"),"border-primary-subtle":ri("primary-60"),"border-hover":ri("primary-90"),"border-hover-strong":ri("primary-60"),"border-selected":ri("primary-50"),"border-selected-subtle":ri("primary-70"),"border-selected-subtlest":ri("primary-90"),"border-selected-hover":ri("primary-40"),"border-focus":ri("primary-60"),"border-focus-strong":ri("primary-50"),"border-disabled":ri("neutral-90"),"border-selected-disabled":ri("neutral-70"),"border-success":ri("success-60"),"border-warning":ri("warning-60"),"border-error":ri("error-60"),"border-error-focus":ri("error-60"),"border-error-focus-strong":ri("error-40"),"border-error-strong":ri("error-40"),"border-info":ri("info-60"),bg:ri("white"),"bg-strong":ri("neutral-100"),"bg-stronger":ri("neutral-95"),"bg-strongest":ri("neutral-90"),"bg-hover":ri("primary-95"),"bg-hover-strong":ri("primary-90"),"bg-hover-subtle":ri("primary-100"),"bg-hover-neutral":ri("neutral-100"),"bg-hover-neutral-strong":ri("neutral-90"),"bg-selected":ri("primary-95"),"bg-selected-hover":ri("primary-90"),"bg-selected-strong":ri("primary-90"),"bg-selected-stronger":ri("primary-70"),"bg-selected-strongest":ri("primary-50"),"bg-selected-strongest-hover":ri("primary-40"),"bg-disabled":ri("neutral-95"),"bg-selected-disabled":ri("neutral-95"),"bg-selected-stronger-disabled":ri("neutral-70"),"bg-success":ri("success-100"),"bg-success-hover":ri("success-95"),"bg-success-strong":ri("success-50"),"bg-success-strong-hover":ri("success-40"),"bg-warning":ri("warning-100"),"bg-warning-hover":ri("warning-95"),"bg-warning-strong":ri("warning-50"),"bg-warning-strong-hover":ri("warning-40"),"bg-info":ri("info-100"),"bg-info-hover":ri("info-95"),"bg-info-strong":ri("info-50"),"bg-info-strong-hover":ri("info-40"),"bg-error":ri("error-100"),"bg-error-hover":ri("error-95"),"bg-error-strong":ri("error-50"),"bg-error-strong-hover":ri("error-40"),"bg-inverse":ri("neutral-20"),"bg-inverse-subtle":ri("neutral-30"),"bg-inverse-subtler":ri("neutral-50"),"bg-inverse-subtlest":ri("neutral-60"),"bg-inverse-hover":ri("neutral-40"),"bg-primary":ri("primary-50"),"bg-primary-subtle":ri("primary-60"),"bg-primary-subtler":ri("primary-95"),"bg-primary-subtlest":ri("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ri("primary-40"),"bg-primary-subtlest-hover":ri("primary-90"),"bg-primary-subtlest-selected":ri("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ri("primary-50"),"hyperlink-hover":ri("primary-40"),"hyperlink-visited":ri("primary-40"),"hyperlink-inverse":ri("primary-inverse"),"focus-ring":ri("primary-50"),"focus-ring-inverse":ri("white")},li={text:ri("neutral-100"),"text-subtle":ri("neutral-80"),"text-subtler":ri("neutral-60"),"text-subtlest":ri("neutral-50"),"text-primary":ri("primary-60"),"text-hover":ri("primary-70"),"text-selected":ri("primary-60"),"text-selected-hover":ri("primary-70"),"text-disabled":ri("neutral-60"),"text-disabled-subtle":ri("neutral-50"),"text-disabled-subtlest":ri("neutral-30"),"text-selected-disabled":ri("neutral-90"),"text-success":ri("success-70"),"text-warning":ri("warning-70"),"text-error":ri("error-70"),"text-info":ri("info-70"),"text-inverse":ri("black"),icon:ri("neutral-60"),"icon-subtle":ri("neutral-50"),"icon-strongest":ri("neutral-90"),"icon-primary":ri("primary-60"),"icon-primary-subtle":ri("primary-50"),"icon-primary-subtlest":ri("primary-40"),"icon-hover":ri("primary-70"),"icon-selected":ri("primary-60"),"icon-selected-hover":ri("primary-70"),"icon-disabled":ri("neutral-60"),"icon-disabled-subtle":ri("neutral-50"),"icon-selected-disabled":ri("neutral-50"),"icon-success":ri("success-60"),"icon-warning":ri("warning-50"),"icon-error":ri("error-60"),"icon-error-strong":ri("error-70"),"icon-info":ri("info-60"),"icon-inverse":ri("black"),"icon-primary-inverse":ri("primary-inverse"),border:ri("neutral-20"),"border-strong":ri("neutral-40"),"border-stronger":ri("neutral-60"),"border-primary":ri("primary-60"),"border-primary-subtle":ri("primary-50"),"border-hover":ri("primary-20"),"border-hover-strong":ri("primary-50"),"border-selected":ri("primary-60"),"border-selected-subtle":ri("primary-40"),"border-selected-subtlest":ri("primary-20"),"border-selected-hover":ri("primary-70"),"border-focus":ri("primary-50"),"border-focus-strong":ri("primary-60"),"border-disabled":ri("neutral-20"),"border-selected-disabled":ri("neutral-40"),"border-success":ri("success-50"),"border-warning":ri("warning-50"),"border-error":ri("error-50"),"border-error-focus":ri("error-50"),"border-error-focus-strong":ri("error-70"),"border-error-strong":ri("error-70"),"border-info":ri("info-50"),bg:ri("black"),"bg-strong":ri("neutral-10"),"bg-stronger":ri("neutral-20"),"bg-strongest":ri("neutral-20"),"bg-hover":ri("primary-20"),"bg-hover-strong":ri("primary-20"),"bg-hover-subtle":ri("primary-10"),"bg-hover-neutral":ri("neutral-10"),"bg-hover-neutral-strong":ri("neutral-20"),"bg-selected":ri("primary-20"),"bg-selected-hover":ri("primary-20"),"bg-selected-strong":ri("primary-20"),"bg-selected-stronger":ri("primary-40"),"bg-selected-strongest":ri("primary-60"),"bg-selected-strongest-hover":ri("primary-70"),"bg-disabled":ri("neutral-20"),"bg-selected-disabled":ri("neutral-20"),"bg-selected-stronger-disabled":ri("neutral-40"),"bg-success":ri("success-10"),"bg-success-hover":ri("success-20"),"bg-success-strong":ri("success-60"),"bg-success-strong-hover":ri("success-70"),"bg-warning":ri("warning-10"),"bg-warning-hover":ri("warning-20"),"bg-warning-strong":ri("warning-60"),"bg-warning-strong-hover":ri("warning-70"),"bg-info":ri("info-10"),"bg-info-hover":ri("info-20"),"bg-info-strong":ri("info-60"),"bg-info-strong-hover":ri("info-70"),"bg-error":ri("error-10"),"bg-error-hover":ri("error-20"),"bg-error-strong":ri("error-60"),"bg-error-strong-hover":ri("error-70"),"bg-inverse":ri("neutral-90"),"bg-inverse-subtle":ri("neutral-80"),"bg-inverse-subtler":ri("neutral-60"),"bg-inverse-subtlest":ri("neutral-50"),"bg-inverse-hover":ri("neutral-70"),"bg-primary":ri("primary-60"),"bg-primary-subtle":ri("primary-50"),"bg-primary-subtler":ri("primary-20"),"bg-primary-subtlest":ri("primary-10"),"bg-available":"#185339","bg-primary-hover":ri("primary-70"),"bg-primary-subtlest-hover":ri("primary-20"),"bg-primary-subtlest-selected":ri("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:ri("primary-60"),"hyperlink-hover":ri("primary-70"),"hyperlink-visited":ri("primary-70"),"hyperlink-inverse":ri("primary-inverse"),"focus-ring":ri("primary-60"),"focus-ring-inverse":ri("black")},ci={collections:{lifesg:oi,bookingsg:oi,rbs:oi,mylegacy:oi,ccube:oi,oneservice:oi,pa:ai,a11yplayground:si,supportgowhere:oi,imda:oi},defaultValue:"lifesg"},di={collections:{lifesg:ii,bookingsg:ii,rbs:ii,mylegacy:ii,ccube:ii,oneservice:ii,pa:ii,a11yplayground:li,supportgowhere:ii,imda:ii},defaultValue:"lifesg"},ui=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Lo(o?di:ci,null==n?void 0:n.colourScheme),a=o?"semanticColourDark":"semanticColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a],l=s?Ro(i,e,s):i[e];return"function"==typeof l?l(t):l},hi={text:ui("text"),"text-subtle":ui("text-subtle"),"text-subtler":ui("text-subtler"),"text-subtlest":ui("text-subtlest"),"text-primary":ui("text-primary"),"text-hover":ui("text-hover"),"text-selected":ui("text-selected"),"text-selected-hover":ui("text-selected-hover"),"text-disabled":ui("text-disabled"),"text-disabled-subtle":ui("text-disabled-subtle"),"text-disabled-subtlest":ui("text-disabled-subtlest"),"text-selected-disabled":ui("text-selected-disabled"),"text-success":ui("text-success"),"text-warning":ui("text-warning"),"text-error":ui("text-error"),"text-info":ui("text-info"),"text-inverse":ui("text-inverse"),icon:ui("icon"),"icon-subtle":ui("icon-subtle"),"icon-strongest":ui("icon-strongest"),"icon-primary":ui("icon-primary"),"icon-primary-subtle":ui("icon-primary-subtle"),"icon-primary-subtlest":ui("icon-primary-subtlest"),"icon-hover":ui("icon-hover"),"icon-selected":ui("icon-selected"),"icon-selected-hover":ui("icon-selected-hover"),"icon-disabled":ui("icon-disabled"),"icon-disabled-subtle":ui("icon-disabled-subtle"),"icon-selected-disabled":ui("icon-selected-disabled"),"icon-success":ui("icon-success"),"icon-warning":ui("icon-warning"),"icon-error":ui("icon-error"),"icon-error-strong":ui("icon-error-strong"),"icon-info":ui("icon-info"),"icon-inverse":ui("icon-inverse"),"icon-primary-inverse":ui("icon-primary-inverse"),border:ui("border"),"border-strong":ui("border-strong"),"border-stronger":ui("border-stronger"),"border-primary":ui("border-primary"),"border-primary-subtle":ui("border-primary-subtle"),"border-hover":ui("border-hover"),"border-hover-strong":ui("border-hover-strong"),"border-selected":ui("border-selected"),"border-selected-subtle":ui("border-selected-subtle"),"border-selected-subtlest":ui("border-selected-subtlest"),"border-selected-hover":ui("border-selected-hover"),"border-focus":ui("border-focus"),"border-focus-strong":ui("border-focus-strong"),"border-disabled":ui("border-disabled"),"border-selected-disabled":ui("border-selected-disabled"),"border-success":ui("border-success"),"border-warning":ui("border-warning"),"border-error":ui("border-error"),"border-error-focus":ui("border-error-focus"),"border-error-focus-strong":ui("border-error-focus-strong"),"border-error-strong":ui("border-error-strong"),"border-info":ui("border-info"),bg:ui("bg"),"bg-strong":ui("bg-strong"),"bg-stronger":ui("bg-stronger"),"bg-strongest":ui("bg-strongest"),"bg-hover":ui("bg-hover"),"bg-hover-strong":ui("bg-hover-strong"),"bg-hover-subtle":ui("bg-hover-subtle"),"bg-hover-neutral":ui("bg-hover-neutral"),"bg-hover-neutral-strong":ui("bg-hover-neutral-strong"),"bg-selected":ui("bg-selected"),"bg-selected-hover":ui("bg-selected-hover"),"bg-selected-strong":ui("bg-selected-strong"),"bg-selected-stronger":ui("bg-selected-stronger"),"bg-selected-strongest":ui("bg-selected-strongest"),"bg-selected-strongest-hover":ui("bg-selected-strongest-hover"),"bg-disabled":ui("bg-disabled"),"bg-selected-disabled":ui("bg-selected-disabled"),"bg-selected-stronger-disabled":ui("bg-selected-stronger-disabled"),"bg-success":ui("bg-success"),"bg-success-hover":ui("bg-success-hover"),"bg-success-strong":ui("bg-success-strong"),"bg-success-strong-hover":ui("bg-success-strong-hover"),"bg-warning":ui("bg-warning"),"bg-warning-hover":ui("bg-warning-hover"),"bg-warning-strong":ui("bg-warning-strong"),"bg-warning-strong-hover":ui("bg-warning-strong-hover"),"bg-info":ui("bg-info"),"bg-info-hover":ui("bg-info-hover"),"bg-info-strong":ui("bg-info-strong"),"bg-info-strong-hover":ui("bg-info-strong-hover"),"bg-error":ui("bg-error"),"bg-error-hover":ui("bg-error-hover"),"bg-error-strong":ui("bg-error-strong"),"bg-error-strong-hover":ui("bg-error-strong-hover"),"bg-inverse":ui("bg-inverse"),"bg-inverse-subtle":ui("bg-inverse-subtle"),"bg-inverse-subtler":ui("bg-inverse-subtler"),"bg-inverse-subtlest":ui("bg-inverse-subtlest"),"bg-inverse-hover":ui("bg-inverse-hover"),"bg-primary":ui("bg-primary"),"bg-primary-subtle":ui("bg-primary-subtle"),"bg-primary-subtler":ui("bg-primary-subtler"),"bg-primary-subtlest":ui("bg-primary-subtlest"),"bg-available":ui("bg-available"),"bg-primary-hover":ui("bg-primary-hover"),"bg-primary-subtlest-hover":ui("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":ui("bg-primary-subtlest-selected"),"overlay-strong":ui("overlay-strong"),"overlay-subtle":ui("overlay-subtle"),hyperlink:ui("hyperlink"),"hyperlink-hover":ui("hyperlink-hover"),"hyperlink-visited":ui("hyperlink-visited"),"hyperlink-inverse":ui("hyperlink-inverse"),"focus-ring":ui("focus-ring"),"focus-ring-inverse":ui("focus-ring-inverse")},fi={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:No["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,d=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:hi.border(t),u=No.solid;return _`
            border: ${l} ${u} ${d};
            border-radius: ${c};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:No["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,d=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:hi.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${d}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return _`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${c};
        `}}},defaultValue:"default"},pi=e=>1===e.length&&"theme"in e[0],gi=e=>(...t)=>r=>{const n=pi(t)?[]:t,o=pi(t)?t[0]:r,i=o.theme;return(0,Lo(fi,null==i?void 0:i.borderScheme)[e])(...n)(o)},mi={solid:gi("solid"),"dashed-default":gi("dashed-default")},bi={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},vi=e=>t=>{var r;const n=t.theme,o=Lo(bi,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Ro(o,e,n.overrides.breakpoint):o[e],i},yi={"xxs-min":vi("xxs-min"),"xxs-max":vi("xxs-max"),"xs-min":vi("xs-min"),"xs-max":vi("xs-max"),"sm-min":vi("sm-min"),"sm-max":vi("sm-max"),"md-min":vi("md-min"),"md-max":vi("md-max"),"lg-min":vi("lg-min"),"lg-max":vi("lg-max"),"xl-min":vi("xl-min"),"xl-max":vi("xl-max"),"xxl-min":vi("xxl-min"),"xxs-column":vi("xxs-column"),"xs-column":vi("xs-column"),"sm-column":vi("sm-column"),"md-column":vi("md-column"),"lg-column":vi("lg-column"),"xl-column":vi("xl-column"),"xxl-column":vi("xxl-column"),"xxs-gutter":vi("xxs-gutter"),"xs-gutter":vi("xs-gutter"),"sm-gutter":vi("sm-gutter"),"md-gutter":vi("md-gutter"),"lg-gutter":vi("lg-gutter"),"xl-gutter":vi("xl-gutter"),"xxl-gutter":vi("xxl-gutter"),"xxs-margin":vi("xxs-margin"),"xs-margin":vi("xs-margin"),"sm-margin":vi("sm-margin"),"md-margin":vi("md-margin"),"lg-margin":vi("lg-margin"),"xl-margin":vi("xl-margin"),"xxl-margin":vi("xxl-margin")},xi=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=yi["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),wi={MaxWidth:xi("max-width"),MinWidth:xi("min-width")},$i={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Ci=e=>t=>{var r;const n=t.theme,o=Lo($i,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Ro(o,e,n.overrides.fontSpec):o[e]},Si={"heading-size-xxl":Ci("heading-size-xxl"),"heading-size-xl":Ci("heading-size-xl"),"heading-size-lg":Ci("heading-size-lg"),"heading-size-md":Ci("heading-size-md"),"heading-size-sm":Ci("heading-size-sm"),"heading-size-xs":Ci("heading-size-xs"),"heading-lh-xxl":Ci("heading-lh-xxl"),"heading-lh-xl":Ci("heading-lh-xl"),"heading-lh-lg":Ci("heading-lh-lg"),"heading-lh-md":Ci("heading-lh-md"),"heading-lh-sm":Ci("heading-lh-sm"),"heading-lh-xs":Ci("heading-lh-xs"),"heading-ls-xxl":Ci("heading-ls-xxl"),"heading-ls-xl":Ci("heading-ls-xl"),"heading-ls-lg":Ci("heading-ls-lg"),"heading-ls-md":Ci("heading-ls-md"),"heading-ls-sm":Ci("heading-ls-sm"),"heading-ls-xs":Ci("heading-ls-xs"),"weight-light":Ci("weight-light"),"weight-regular":Ci("weight-regular"),"weight-semibold":Ci("weight-semibold"),"weight-bold":Ci("weight-bold"),"font-family":Ci("font-family"),"body-size-baseline":Ci("body-size-baseline"),"body-size-md":Ci("body-size-md"),"body-size-sm":Ci("body-size-sm"),"body-size-xs":Ci("body-size-xs"),"body-lh-baseline":Ci("body-lh-baseline"),"body-lh-md":Ci("body-lh-md"),"body-lh-sm":Ci("body-lh-sm"),"body-lh-xs":Ci("body-lh-xs"),"body-ls-baseline":Ci("body-ls-baseline"),"body-ls-md":Ci("body-ls-md"),"body-ls-sm":Ci("body-ls-sm"),"body-ls-xs":Ci("body-ls-xs"),"form-label-size":Ci("form-label-size"),"form-description-size":Ci("form-description-size"),"form-label-lh":Ci("form-label-lh"),"form-description-lh":Ci("form-description-lh"),"form-label-ls":Ci("form-label-ls"),"form-description-ls":Ci("form-description-ls")},Di=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return _`
        font-family: ${Ci("font-family")};
        font-size: ${Ci(e)};
        font-weight: ${Ci(t)};
        line-height: ${Ci(r)};
        letter-spacing: ${Ci(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},ki=(e={})=>({"heading-xxl-light":Di("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Di("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Di("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Di("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Di("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Di("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Di("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Di("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Di("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Di("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Di("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Di("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Di("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Di("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Di("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Di("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Di("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Di("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Di("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Di("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Di("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Di("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Di("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Di("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Di("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Di("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Di("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Di("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Di("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Di("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Di("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Di("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Di("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Di("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Di("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Di("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Di("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Di("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Di("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Di("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Di("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Di("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),_i=ki({disableLigatures:!0}),Fi={collections:{default:ki(),bookingsg:_i,pa:ki({disableLigatures:!0}),a11yplayground:ki({disableLigatures:!0}),supportgowhere:ki({disableLigatures:!0}),imda:ki({disableLigatures:!0})},defaultValue:"default"},Ei=e=>t=>{var r;const n=t.theme,o=Lo(Fi,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Ro(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},Oi={"heading-xxl-light":Ei("heading-xxl-light"),"heading-xxl-regular":Ei("heading-xxl-regular"),"heading-xxl-semibold":Ei("heading-xxl-semibold"),"heading-xxl-bold":Ei("heading-xxl-bold"),"heading-xl-light":Ei("heading-xl-light"),"heading-xl-regular":Ei("heading-xl-regular"),"heading-xl-semibold":Ei("heading-xl-semibold"),"heading-xl-bold":Ei("heading-xl-bold"),"heading-lg-light":Ei("heading-lg-light"),"heading-lg-regular":Ei("heading-lg-regular"),"heading-lg-semibold":Ei("heading-lg-semibold"),"heading-lg-bold":Ei("heading-lg-bold"),"heading-md-light":Ei("heading-md-light"),"heading-md-regular":Ei("heading-md-regular"),"heading-md-semibold":Ei("heading-md-semibold"),"heading-md-bold":Ei("heading-md-bold"),"heading-sm-light":Ei("heading-sm-light"),"heading-sm-regular":Ei("heading-sm-regular"),"heading-sm-semibold":Ei("heading-sm-semibold"),"heading-sm-bold":Ei("heading-sm-bold"),"heading-xs-light":Ei("heading-xs-light"),"heading-xs-regular":Ei("heading-xs-regular"),"heading-xs-semibold":Ei("heading-xs-semibold"),"heading-xs-bold":Ei("heading-xs-bold"),"body-baseline-light":Ei("body-baseline-light"),"body-baseline-regular":Ei("body-baseline-regular"),"body-baseline-semibold":Ei("body-baseline-semibold"),"body-baseline-bold":Ei("body-baseline-bold"),"body-md-light":Ei("body-md-light"),"body-md-regular":Ei("body-md-regular"),"body-md-semibold":Ei("body-md-semibold"),"body-md-bold":Ei("body-md-bold"),"body-sm-light":Ei("body-sm-light"),"body-sm-regular":Ei("body-sm-regular"),"body-sm-semibold":Ei("body-sm-semibold"),"body-sm-bold":Ei("body-sm-bold"),"body-xs-light":Ei("body-xs-light"),"body-xs-regular":Ei("body-xs-regular"),"body-xs-semibold":Ei("body-xs-semibold"),"body-xs-bold":Ei("body-xs-bold"),"form-label":Ei("form-label"),"form-description":Ei("form-description")},Ti={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Ii=e=>t=>{var r;const n=t.theme,o=Lo(Ti,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Ro(o,e,n.overrides.motion):o[e]},Mi={"duration-150":Ii("duration-150"),"duration-250":Ii("duration-250"),"duration-350":Ii("duration-350"),"duration-500":Ii("duration-500"),"duration-800":Ii("duration-800"),"duration-1000":Ii("duration-1000"),"ease-default":Ii("ease-default"),"ease-standard":Ii("ease-standard"),"ease-entrance":Ii("ease-entrance"),"ease-exit":Ii("ease-exit")},Ai={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Bi=e=>t=>{var r;const n=t.theme,o=Lo(Ai,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Ro(o,e,n.overrides.radius)}px`:`${o[e]}px`},zi={none:Bi("none"),xs:Bi("xs"),sm:Bi("sm"),md:Bi("md"),lg:Bi("lg"),full:Bi("full")},ji=(e,t,r)=>n=>{const o=ui(t)(n)||ri(t)(n);return`${e} rgba(from ${o} r g b / ${100*r}%)`},Ri={collections:{default:{"xs-subtle":ji("0 0 4px 1px","neutral-50",.24),"xs-strong":ji("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":ji("0 0 4px 1px","border-focus",.5),"xs-error-strong":ji("0 0 4px 1px","border-error",.5),"sm-subtle":ji("0 2px 4px 0","neutral-50",.24),"sm-strong":ji("0 2px 4px 0","neutral-50",.5),"md-subtle":ji("0 2px 8px 0","neutral-50",.24),"md-strong":ji("0 2px 8px 0","neutral-50",.5),"lg-subtle":ji("0 2px 12px 1px","neutral-50",.24),"lg-strong":ji("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},Li=e=>t=>{var r;const n=t.theme,o=Lo(Ri,null==n?void 0:n.shadowScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.shadow)?Ro(o,e,n.overrides.shadow):o[e];return"function"==typeof i?i(t):i},Pi={"xs-subtle":Li("xs-subtle"),"xs-strong":Li("xs-strong"),"xs-focus-strong":Li("xs-focus-strong"),"xs-error-strong":Li("xs-error-strong"),"sm-subtle":Li("sm-subtle"),"sm-strong":Li("sm-strong"),"md-subtle":Li("md-subtle"),"md-strong":Li("md-strong"),"lg-subtle":Li("lg-subtle"),"lg-strong":Li("lg-strong")},Hi={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Ni=e=>t=>{var r;const n=t.theme,o=Lo(Hi,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Ro(o,e,n.overrides.spacing)}px`:`${o[e]}px`},Wi={"spacing-0":Ni("spacing-0"),"spacing-4":Ni("spacing-4"),"spacing-8":Ni("spacing-8"),"spacing-12":Ni("spacing-12"),"spacing-16":Ni("spacing-16"),"spacing-20":Ni("spacing-20"),"spacing-24":Ni("spacing-24"),"spacing-32":Ni("spacing-32"),"spacing-40":Ni("spacing-40"),"spacing-48":Ni("spacing-48"),"spacing-64":Ni("spacing-64"),"spacing-72":Ni("spacing-72"),"layout-xs":Ni("layout-xs"),"layout-sm":Ni("layout-sm"),"layout-md":Ni("layout-md"),"layout-lg":Ni("layout-lg"),"layout-xl":Ni("layout-xl"),"layout-xxl":Ni("layout-xxl"),"layout-xxxl":Ni("layout-xxxl")},Yi=(e,t)=>Object.assign(Object.assign({},e),{colourMode:t}),Vi=Object.assign(Object.assign({},hi),{Primitive:ni}),Ui=Object.assign(Object.assign({},Oi),{Spec:Si}),Ki=Mi,qi=Object.assign(Object.assign({},No),{Util:mi}),Zi=Wi,Gi=zi,Qi=Pi,Xi=yi,Ji=wi,ea={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},ta={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},ra={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},na={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},oa={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},ia={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},aa={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},sa={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},la={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},ca={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"};Object.assign(Object.assign({},ea),{light:Yi(ea,"light"),dark:Yi(ea,"dark")}),Object.assign(Object.assign({},ta),{light:Yi(ta,"light"),dark:Yi(ta,"dark")}),Object.assign(Object.assign({},ra),{light:Yi(ra,"light"),dark:Yi(ra,"dark")}),Object.assign(Object.assign({},na),{light:Yi(na,"light"),dark:Yi(na,"dark")}),Object.assign(Object.assign({},oa),{light:Yi(oa,"light"),dark:Yi(oa,"dark")}),Object.assign(Object.assign({},ia),{light:Yi(ia,"light"),dark:Yi(ia,"dark")}),Object.assign(Object.assign({},aa),{light:Yi(aa,"light"),dark:Yi(aa,"dark")}),Object.assign(Object.assign({},sa),{light:Yi(sa,"light"),dark:Yi(sa,"dark")}),Object.assign(Object.assign({},la),{light:Yi(la,"light"),dark:Yi(la,"dark")}),Object.assign(Object.assign({},ca),{light:Yi(ca,"light"),dark:Yi(ca,"dark")});const da=k.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return _`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,ua=k.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Vi["overlay-subtle"]:Vi["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=_`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=_`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=_`
                transition: none;
            `),t}};
`;var ha;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(ha||(ha={}));const fa=()=>{const[e,t]=s(void 0),r=O();return h((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(ha.Change,e),r.events.emit(ha.Ready),()=>r.events.off(ha.Change,e)}),[r]),e},pa=({show:t=!1,rootId:r,onOverlayClick:n,children:i,backgroundOpacity:l,backgroundBlur:c=!0,disableTransition:d=!1,enableOverlayClick:u=!1,zIndex:f,id:p})=>{const[g,m]=s(null),[b,v]=s(),[y]=s((()=>ot.generate())),x=I(),w=a(),$=a(null),C=i&&o.cloneElement(i,{ref:$}),S=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root",D=null!=f?f:b?99999:99998;(e=>{const t=O();h((()=>{if(!t)return;const r={zIndex:e};t.events.emit(ha.Change,r)}),[t,e]),h((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit(ha.Change,r)};return null==t||t.events.on(ha.Ready,r),()=>null==t?void 0:t.events.off(ha.Ready,r)}),[t,e])})(D),h((()=>(T(),m(F()),()=>{j(),B().length<1&&A("remove")})),[]),h((()=>{if(t){const e=E();k(e),z(),_()&&1===B().length&&(L(),R("add"));const t=setTimeout((()=>{A("add")}),200);return()=>clearTimeout(t)}{j(),_()&&B().length<1&&(R("remove"),P());const e=setTimeout((()=>{B().length<1&&A("remove")}),200);return()=>clearTimeout(e)}}),[t]);const k=e=>{w.current=e,v(e)},_=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),F=()=>document&&r?document.getElementById(r):document?document.body:null,E=()=>B().length>0,T=()=>{if(!document.getElementById(ma)){const e=document.createElement("style");e.id=ma;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${ba} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${ba}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${va} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${ya}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},A=e=>{const t=document.body.classList.contains(ba);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(ba):document.body.classList.add(ba)},B=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},z=()=>{const e=B();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},j=()=>{const e=B();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},R=e=>{if(!_())return;const t=document.body.classList.contains(va);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(va):document.body.classList.add(va)},L=()=>{const e=document.body.style,t=e.top?e.top:window.scrollY+"px";document.body.style.setProperty(ya,t)},P=()=>{const e=document.body.style.getPropertyValue(ya);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(e)})}))},H=e=>{var t;const r=null===(t=$.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&u&&(e.preventDefault(),n())};return g?q.createPortal(e(da,{id:S,"data-testid":S,$show:t,$zIndex:D,children:i&&e(M,{id:x,children:e(ua,{"data-testid":"overlay-wrapper",$show:t,$stacked:b,$backgroundBlur:c,$disableTransition:d,onClick:H,children:C})})}),g):null},ga=t=>e(T,{children:e(pa,Object.assign({},t))}),ma="lifesg-ds-overlay-stylesheet",ba="lifesg-ds-overlay-open",va="lifesg-ds-overlay-scroll-lock",ya="--lifesg-ds-overlay-scroll-y",xa=k.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.$show,r=e.$animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${Ji.MaxWidth.sm} {
        height: calc(
            ${e=>e.$verticalHeight?`${e.$verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.$offsetTop||0}px;
    }
`,wa=t=>{var{id:r="modal",show:n,animationFrom:o="bottom",children:i,enableOverlayClick:a=!0,rootComponentId:l,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:u=!0}=t,f=Fe(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const{verticalHeight:g,offsetTop:m}=(()=>{const[e,t]=s(),[r,n]=s(),o=p((()=>{const e=.01*window.innerHeight;t(e)}),[]),i=p((()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;t(e),n(window.visualViewport.offsetTop)}}),[]);return h((()=>window.visualViewport?(i(),window.visualViewport.addEventListener("resize",i),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",i)}):(o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)})),[]),{verticalHeight:e,offsetTop:r}})();return h((()=>{var e,t;n&&u&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]),e(ga,{"data-testid":`${r}-overlay`,show:n,enableOverlayClick:a,onOverlayClick:d,id:r,rootId:l,zIndex:c,children:e(xa,Object.assign({$show:n,$animationFrom:o,"data-testid":r,$verticalHeight:g,$offsetTop:m},f,{children:i}))})},$a=e=>_`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Ca=(e,t,r=!1)=>_`
        ${Ui[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Sa=e=>{if(e)return _`
            ${$a(e)}
        `},Da=(e,t,r,n,o)=>_`
    ${Ca(e,t||"regular",n)}
    ${((e=!1,t=!1,r)=>t?_`
            display: block;
            ${Sa(r)}
        `:e?_`
            display: inline;
        `:_`
            display: block;
            ${Sa(r)}
        `)(r,n,o)}
    color: ${Vi.text};
`,ka=k.div`
    ${e=>Da(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,_a=k.a`
    ${e=>_`
        ${Ca(e.$textStyle,e.$weight||"regular")}
        color: ${Vi.hyperlink};
        text-decoration: none;

        &:hover,
        &:active,
        &:focus {
            color: ${Vi["text-hover"]};
        }
    `}
`,Fa=k(Q)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Ea;!function(r){const n=(t,r,n)=>{const i=(n,o)=>{var{weight:i,inline:a,paragraph:s,maxLines:l}=n,c=Fe(n,["weight","inline","paragraph","maxLines"]);return e(ka,Object.assign({ref:o,as:a?"span":t,$textStyle:r,$weight:i,$inline:a,$paragraph:s,$maxLines:l},c))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(t,r)=>{const n=(r,n)=>{var{weight:o,inline:i,paragraph:a,maxLines:s}=r,l=Fe(r,["weight","inline","paragraph","maxLines"]);return e(ka,Object.assign({ref:n,as:i?"span":"p",$textStyle:t,$weight:o,$inline:i,$paragraph:a,$maxLines:s},l))};return n.displayName=`Typography.${r}`,o.forwardRef(n)};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const a=(r,n)=>{const i=(n,o)=>{var{weight:i,children:a,external:s}=n,l=Fe(n,["weight","children","external"]);return t(_a,Object.assign({ref:o,$textStyle:r,$weight:i},l,{children:[a,s&&e(Fa,{})]}))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.LinkBL=a("body-baseline","LinkBL"),r.LinkMD=a("body-md","LinkMD"),r.LinkSM=a("body-sm","LinkSM"),r.LinkXS=a("body-xs","LinkXS")}(Ea||(Ea={}));const Oa=k.div`
    border-radius: ${Gi.md};
    background: ${Vi.bg};
    padding: ${Zi["spacing-16"]} ${Zi["spacing-32"]};
    ${e=>{var t;return"dark"===(null===(t=e.theme)||void 0===t?void 0:t.colourMode)?_`
                  border: ${qi["width-010"]} ${qi.solid}
                      ${Vi.border};
              `:_`
                  box-shadow: ${Qi["md-subtle"]};
              `}}
`,Ta=k.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Zi["spacing-24"]};
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

        ${({$highlight:e})=>e&&_`
                background-color: ${Vi["bg-hover-neutral"]};
            `}
    }
`,Ia=o.forwardRef(((t,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,s=Fe(t,["children","focusHighlight","focusOutline","type"]);return e(Ta,Object.assign({ref:r,$outline:i,$highlight:o,type:a},s,{children:n}))})),Ma=k.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Vi.bg};
    box-shadow: ${Qi["lg-strong"]};
    border-radius: ${Gi.lg};
    overflow: hidden;

    ${Ji.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Aa=k(Ia)`
    position: absolute;
    top: var(--close-button-top-inset, ${Zi["spacing-16"]});
    right: var(--close-button-right-inset, ${Zi["spacing-16"]});
    padding: 0;
    color: ${Vi.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Ji.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Zi["spacing-20"]});
    }
`,Ba=r=>{var{id:n="modal-box",children:o,onClose:i,showCloseButton:a=!0}=r,s=Fe(r,["id","children","onClose","showCloseButton"]);return t(Ma,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(Aa,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(X,{})}),o]}))},za=e=>{const{textSize:t}=e||{};return _`
        // Text styling
        ${t&&Ui[`${t}-regular`]}

        strong {
            font-weight: ${Ui.Spec["weight-semibold"]};
            ${t&&Ui[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Ui.Spec["weight-semibold"]};
            ${t&&Ui[`${t}-semibold`]}
            color: ${Vi.hyperlink};
            text-decoration: none;

            svg {
                color: ${Vi["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${Vi["hyperlink-hover"]};

                svg {
                    color: ${Vi["icon-hover"]};
                }
            }
        }

        // List styling
        ul,
        ol {
            margin: 0;
            padding: 0;
            margin-left: 2.5rem;
        }

        ol {
            list-style: decimal;
        }

        ul {
            list-style: disc;
        }
    `},ja=k.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Ra=k((t=>{var{children:r}=t,n=Fe(t,["children"]);const o=n["data-testid"]||"card";return e(Oa,Object.assign({},n,{"data-testid":o,children:"string"==typeof r?e(Ea.BodyBL,{children:r}):r}))}))`
    color: ${Vi.text};
    ${za({textSize:"body-md"})}

    ${Ji.MaxWidth.sm} {
        display: none;
    }

    ${({$maxHeight:e})=>void 0!==e&&`\n        max-height: ${e}px;\n    `}

    ${({$overflow:e})=>e&&`\n        overflow-y: ${e};\n    `}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Vi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Gi.full};
        background-clip: padding-box;
    }
`,La=k(Ba)`
    padding: 3.5rem 1.25rem 2.5rem;
`,Pa=k.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Vi.text};
    ${za({textSize:"body-md"})}
`,Ha=n=>{var{children:o,visible:i,onMobileClose:a,maxHeight:s,overflow:l}=n,c=Fe(n,["children","visible","onMobileClose","maxHeight","overflow"]);const d=c["data-testid"]||"popover",u=g(F),h=Xi["sm-max"]({theme:u}),f=Ae.useMediaQuery({maxWidth:h}),p=()=>{a&&a()},m=()=>"string"==typeof o?e(Ea.BodyMD,{children:o}):o;return t(r,{children:[i&&e(ja,Object.assign({"data-testid":d},c,{children:e(Ra,{$maxHeight:s,$overflow:l,children:m()})})),f&&e(wa,{show:null!=i&&i,onOverlayClick:p,children:e(La,{onClose:p,children:e(Pa,{children:m()})})})]})},Na=k.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,Wa=n=>{var o,i,{children:l,popoverContent:c,trigger:d="click",position:u="top",zIndex:h,rootNode:f,customOffset:p,delay:m,onPopoverAppear:b,onPopoverDismiss:v,enableFlip:y=!0,enableResize:x=!1,overflow:w="auto"}=n,$=Fe(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss","enableFlip","enableResize","overflow"]);const[C,S]=s(!1),D=a(null),k=a(null),_=g(F),E=Xi["sm-max"]({theme:_}),O=Ae.useMediaQuery({maxWidth:E}),[T,I]=s(0),{refs:M,floatingStyles:K,context:q}=A({open:C,placement:u,whileElementsMounted:B,middleware:[z(null!=p?p:16),y&&j(),R({limiter:L()}),x&&P({apply({availableHeight:e}){I(e)}})],onOpenChange:e=>{S(e),C!==e&&ne(e)}}),Z=fa(),G=O?"click":d,Q=H(q,{ignoreMouse:"hover"===G}),X=N(q),J=W(q,{enabled:"hover"===G,delay:{open:null!==(o=null==m?void 0:m.open)&&void 0!==o?o:0,close:null!==(i=null==m?void 0:m.close)&&void 0!==i?i:500}}),{getReferenceProps:ee,getFloatingProps:te}=Y([Q,X,J]),re=()=>{S(!1),ne(!1)},ne=e=>{e&&b&&b(),!e&&v&&v()};return t(r,{children:[e(Na,Object.assign({ref:e=>{D.current=e,M.setReference(e)}},ee({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),$,{children:l})),C&&e(V,{root:f,children:e(U,{context:q,children:e("div",Object.assign({ref:e=>{k.current=e,M.setFloating(e)},style:Object.assign(Object.assign({},K),{outline:"none",zIndex:null!=h?h:Z})},te(),{children:"function"==typeof c?c(x?{maxHeight:T,overflow:w}:{}):e(Ha,{visible:!0,onMobileClose:re,maxHeight:x?T:void 0,overflow:x?w:void 0,children:c})}))})})]})},Ya=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Va=k.span`
    color: ${Vi["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Ya(e)}

    &:hover,
    &:focus-visible {
        color: ${Vi["text-hover"]};
        ${({$hoverStyle:e})=>Ya(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Ua=k.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,Ka=r=>{var{ariaLabel:n,content:o,icon:i,underlineStyle:a="default",underlineHoverStyle:s="default"}=r,l=Fe(r,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const c=!!o;return e(Wa,Object.assign({},l,{children:t(Va,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,"aria-label":null!=n?n:c?void 0:"More info",children:[o,i&&e(Ua,{$standalone:!c,children:i})]})}))},qa=k.div`
    padding-left: ${Zi["spacing-4"]};
    display: inline;
`,Za=({addon:t,rootNode:r})=>{const{content:n,type:o,icon:i,id:a,zIndex:s,"data-testid":l}=t;return e(qa,{children:e(Ka,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=i?i:e(D,{"data-testid":`${o}-icon`}),ariaLabel:"More info"})})},Ga=k.div`
    margin-bottom: ${Zi["spacing-8"]};
`,Qa=k.label`
    color: ${Vi["text-subtle"]};
    display: inline-block;

    ${Ui["form-label"]}
    ${za()}
    font-weight: ${Ui.Spec["weight-semibold"]};
`,Xa=k.p`
    ${Ui["body-sm-semibold"]}
    color: ${Vi["text-error"]};
    margin-top: ${Zi["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`,Ja=k.span`
    ${Ui["form-description"]}
    color: ${Vi["text-subtler"]};
    display: block;
`,es=r=>{var{id:n,children:o,addon:i,subtitle:a,"data-testid":s,className:l,style:c}=r,d=Fe(r,["id","children","addon","subtitle","data-testid","className","style"]);return t(Ga,{className:l,style:c,"data-testid":s,children:[t(Qa,Object.assign({id:n},d,{children:[o,i&&i.type&&("popover"===(null==i?void 0:i.type)?e(Za,{addon:i}):null)]})),"string"==typeof a?e(Ja,{id:n?`${n}-subtitle`:void 0,"data-testid":s?`${s}-subtitle`:"subtitle",children:a}):a]})},ts=k.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:n,$xlSpan:o,$lgStart:i,$lgSpan:a,$mdStart:s,$mdSpan:l,$smStart:c,$smSpan:d,$xsStart:u,$xsSpan:h,$xxsStart:f,$xxsSpan:p}=e;return _`
            grid-column: ${t||"auto"} / span ${r||1};

            ${wi.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${o||1};
            }

            ${wi.MaxWidth.lg} {
                grid-column: ${i||"auto"} / span ${a||1};
            }

            ${wi.MaxWidth.md} {
                grid-column: ${s||"auto"} / span ${l||1};
            }

            ${wi.MaxWidth.sm} {
                grid-column: ${c||"auto"} / span ${d||1};
            }

            ${wi.MaxWidth.xs} {
                grid-column: ${u||"auto"} / span ${h||1};
            }

            ${wi.MaxWidth.xxs} {
                grid-column: ${f||"auto"} / span ${p||1};
            }
        `}}
`,rs=o.forwardRef(((t,r)=>{const n=g(F),{xxlCols:o,xlCols:i,lgCols:a,mdCols:s,smCols:l,xsCols:c,xxsCols:d}=t,u=Fe(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return e(ts,Object.assign({ref:r},(()=>{const e=yi["xxl-column"]({theme:n}),t=yi["xl-column"]({theme:n}),r=yi["lg-column"]({theme:n}),u=yi["md-column"]({theme:n}),f=yi["sm-column"]({theme:n}),p=yi["xs-column"]({theme:n}),g=yi["xxs-column"]({theme:n}),m=h(o||i||a||s||l||c||d,e,"xxl"),b=h(i||a||s||l||c||d,t,"xl"),v=h(a||s||l||c||d,r,"lg"),y=h(s||l||c||d,u,"md"),x=h(l||c||d,f,"sm"),w=h(c||d,p,"xs"),$=h(d,g,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),u))})),ns={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},os=e=>Object.keys(ns).reduce(((t,r)=>{const n=ns[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),is=os("max-width"),as=(os("min-width"),k.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return _`
            grid-column: ${t||"auto"} / span ${r||1};

            ${is.tablet} {
                grid-column: ${n||"auto"} / span
                    ${o||1};
            }

            ${is.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`),ss=o.forwardRef(((t,r)=>{const{mobileCols:n,tabletCols:o,desktopCols:i}=t,a=Fe(t,["mobileCols","tabletCols","desktopCols"]);return e(as,Object.assign({ref:r},(()=>{const e=o||n,t=n,r=ls(i||o||n),a=ls(e),s=ls(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),ls=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,o=t<=r?r:t;let i;return i=o===n?1:o-n,{start:n,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},cs=_`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${Zi["spacing-32"]};
    }
`,ds=k.div`
    ${cs}
`,us=k(rs)`
    ${cs}
`,hs=k(ss)`
    ${cs}
`,fs=({label:r,errorMessage:n,id:o,disabled:i,children:a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:b,xlCols:v,xxlCols:y,"data-error-testid":x})=>{const w=!s&&(l||c||u)?"v2-grid":!s&&(h||f||p||g||b||v||y)?"grid":s||"flex",$=o?`${o}-label`:void 0,C=()=>x||(o?`${o}-error-message`:"error-message"),S=()=>!!n;const D=(e=>{switch(e){case"v2-grid":return hs;case"grid":return us;case"flex":return ds}})(w);return t(D,Object.assign({},(e=>{switch(e){case"v2-grid":return{mobileCols:l,tabletCols:c,desktopCols:u};case"grid":return{xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:b,xlCols:v,xxlCols:y};case"flex":return}})(w),{children:[r&&e(es,"string"==typeof r?{htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",id:$,disabled:i,children:r}:Object.assign({htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",id:$,disabled:i},r)),(()=>{const e={"aria-invalid":S(),"aria-describedby":[S()?C():void 0,"object"==typeof r&&(null==r?void 0:r.subtitle)?`${o}-label-subtitle`:void 0].filter(Boolean).join(" ")||void 0};return m.map(a,(t=>d(t,e)))})(),n&&e(Xa,{id:C(),tabIndex:0,"data-testid":C(),children:n})]}))},ps=e=>"small"===e?2.5:3,gs=k.div`
    position: relative;
    width: 100%;
    ${e=>{const t=ps(e.$variant);return _`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,ms=_`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Zi["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>ps(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Gi.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${Vi["border-focus"]};
    }
`,bs=k.button`
    ${ms}
    cursor: pointer;
`,vs=k.div`
    ${ms}
`,ys=E`
	from {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}

	to {
		position: relative;
        width: 100%;
	}
`,xs=k.div`
    position: relative;
    border: ${qi["width-010"]} ${qi.solid} ${Vi.border};
    border-radius: ${Gi.sm};
    background: ${Vi.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${Vi["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Vi["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?_`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:_`
                animation: ${ys} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?_`
                background: ${Vi["bg-disabled"]};

                ${bs} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${Vi.border};
                    box-shadow: none;
                }
            `:e.$readOnly?_`
                border: none;
                background: transparent !important;

                ${bs} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$error?_`
                border-color: ${Vi["border-error"]};

                &:focus-within {
                    border-color: ${Vi["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Vi["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`;k.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Ki["duration-250"]} ${Ki["ease-default"]};
    margin-left: ${Zi["spacing-16"]};
`,k(J)`
    color: ${Vi.icon};
`;const ws=k.div`
    height: 1px;
    background: ${Vi.border};
    margin: 0 ${Zi["spacing-8"]};
`,$s=k.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return _`
                color: ${Vi["text-disabled"]};
            `}}
`,Cs=k.div`
    ${e=>"small"===e.$variant?Ui["body-md-regular"]:Ui["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return _`
                    ${$a(1)}
                `}}
    overflow: hidden;
`,Ss=k(Cs)`
    color: ${Vi["text-subtler"]};
`,Ds=({children:t,show:r,error:n,disabled:o,testId:i,onBlur:s,readOnly:l,className:c,variant:d})=>{const u=a(null);return rr("mousedown",(function(e){if(!o){if(u&&u.current.contains(e.target))return;r&&s()}}),"document"),e(gs,{className:c,$variant:d,children:e(xs,{ref:u,$error:n&&!r,$disabled:o,$readOnly:l,$expanded:r,"data-testid":i,children:t})})},ks=e=>"right"===e?"bottom-end":"bottom-start",_s=b({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),Fs=()=>g(_s),Es=({enabled:n,isOpen:o,onOpen:i,onClose:s,onDismiss:l,renderElement:c,renderDropdown:d,customZIndex:u,clickToToggle:h=!1,offset:f=0,alignment:p="left",fitAvailableHeight:m,rootNode:b,positionRef:v})=>{var y;const x=g(F),w=Xi["sm-max"]({theme:x}),$=a(null),{width:C=0}=er({targetRef:null!=v?v:$,handleHeight:!1}),S={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<w;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:D,floatingStyles:k,context:_}=A({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==l||l():e&&!o?null==i||i():!e&&o&&(null==s||s(r))},whileElementsMounted:B,placement:ks(p),middleware:[z(f),j(),R({limiter:L()}),P({apply({availableHeight:e,elements:t}){!m||e>=t.floating.scrollHeight?t.floating.style.setProperty("--available-height",""):t.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),S]}),E=fa(),{isMounted:O,styles:T}=K(_,{initial:{opacity:0},open:{opacity:1},duration:300}),I=H(_,{enabled:n,toggle:h}),M=N(_,{enabled:n}),{getReferenceProps:W,getFloatingProps:q}=Y([I,M]),Z={elementWidth:C,styles:Object.assign(Object.assign(Object.assign({},T),k),{zIndex:null!==(y=null!=u?u:E)&&void 0!==y?y:50}),setFloatingRef:D.setFloating,getFloatingProps:q};return t(r,{children:[e("div",Object.assign({ref:e=>{$.current=e,D.setReference(e)}},W(),{children:c()})),O&&e(V,{root:b,children:e(U,{context:_,modal:!1,initialFocus:-1,returnFocus:!1,children:e(_s.Provider,{value:Z,children:d(Z)})})})]})},Os=k.div`
    --vertical-inset: ${Zi["spacing-24"]};
    --horizontal-inset: ${Zi["spacing-20"]};
    --header-bottom-spacing: ${Zi["spacing-4"]};

    border: ${qi["width-010"]} ${qi.solid} ${Vi.border};
    border-radius: ${Gi.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${Ji.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;k.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;const Ts=e=>rt()?e:e?"true":void 0,Is=k.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ms=E`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,As=k.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-width: 2px;
    border-style: solid;
    border-radius: 100%;
    border-color: currentColor transparent transparent transparent;
    animation: ${Ms} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Bs=k(As)`
    animation-delay: -0.45s;
`,zs=k(As)`
    animation-delay: -0.3s;
`,js=k(As)`
    animation-delay: -0.15s;
`,Rs=({color:r,className:n,size:o})=>t(Is,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[e(As,{id:"inner1"}),e(Bs,{id:"inner2"}),e(zs,{id:"inner3"}),e(js,{id:"inner4"})]}),Ls={Button:{"button-radius":zi.md,"button-default-colour-bg":hi["bg-primary"],"button-default-colour-bg-hover":hi["bg-primary-hover"],"button-default-colour-text":hi["text-inverse"],"button-secondary-colour-border":hi["border-primary"],"button-secondary-colour-text":hi["text-primary"],"button-light-colour-text":hi["text-primary"],"button-link-colour-text":hi["text-primary"]}},Ps={collections:{default:{Button:{"button-radius":zi.sm,"button-default-colour-bg":hi["bg-primary"],"button-default-colour-bg-hover":hi["bg-primary-hover"],"button-default-colour-text":hi["text-inverse"],"button-secondary-colour-border":hi["border-primary"],"button-secondary-colour-text":hi["text-primary"],"button-light-colour-text":hi["text-primary"],"button-link-colour-text":hi["text-primary"]}},pa:{Button:{"button-radius":zi.full,"button-default-colour-bg":hi["bg-primary"],"button-default-colour-bg-hover":hi["bg-primary-hover"],"button-default-colour-text":hi["text-inverse"],"button-secondary-colour-border":hi["border-primary"],"button-secondary-colour-text":hi["text-primary"],"button-light-colour-text":hi["text-primary"],"button-link-colour-text":hi["text-primary"]}},a11yplayground:Ls},defaultValue:"default"},Hs=(e,t)=>r=>{var n,o;const i=r.theme,a=Lo(Ps,null==i?void 0:i.componentScheme);return Ns((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[t])||a[e][t],r)},Ns=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},Ws=Hs("Button","button-radius"),Ys=Hs("Button","button-default-colour-bg"),Vs=Hs("Button","button-default-colour-bg-hover"),Us=Hs("Button","button-default-colour-text"),Ks=Hs("Button","button-secondary-colour-border"),qs=Hs("Button","button-secondary-colour-text"),Zs=Hs("Button","button-light-colour-text"),Gs=Hs("Button","button-link-colour-text"),Qs=k.button`
    padding: ${Zi["spacing-8"]} ${Zi["spacing-16"]};
    min-width: 4rem;
    border: ${qi["width-010"]} ${qi.solid} transparent;
    transition: all ${Ki["duration-250"]} ${Ki["ease-default"]};
    border-radius: ${Ws};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return _`
                    background-color: ${Vi.bg};
                    border-color: ${e.$buttonIsDanger?Vi["border-error-strong"]:Ks};

                    color: ${e.$buttonIsDanger?Vi["text-error"]:qs};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Vi["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return _`
                    background-color: ${Vi.bg};
                    border-color: ${Vi.border};

                    color: ${e.$buttonIsDanger?Vi["text-error"]:Zs};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Vi["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return _`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Vi["text-error"]:Gs};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Vi["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return _`
                    background-color: ${Vi["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Vi["text-disabled"]};
                `;default:return _`
                    background-color: ${e.$buttonIsDanger?Vi["bg-error-strong"]:Ys};

                    ${Ji.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Us};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?Vi["bg-error-strong-hover"]:Vs};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return _`
                    height: 2.5rem;
                    ${Ui["body-md-semibold"]}

                    ${Ji.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return _`
                    height: 4rem;
                    ${Ui["heading-md-semibold"]}

                    ${Ji.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return _`
                    height: 3rem;
                    ${Ui["heading-xs-semibold"]}

                    ${Ji.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Xs=k(Rs)`
    margin-right: 0.5rem;
`,Js=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:c=!1,onClick:d}=r,u=Fe(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(Qs,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!c,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:d},h,u,{children:[a&&e(Xs,{}),e("span",{children:o})]}))};Js.displayName="Button.Default";const el=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:c=!1,onClick:d}=r,u=Fe(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(Qs,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!c,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:d},h,u,{children:[a&&e(Xs,{}),e("span",{children:o})]}))};el.displayName="Button.Small";const tl=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:c=!1,onClick:d}=r,u=Fe(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return t(Qs,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!c,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:d},h,u,{children:[a&&e(Xs,{}),e("span",{children:o})]}))};tl.displayName="Button.Large";const rl={Default:o.forwardRef(Js),Small:o.forwardRef(el),Large:o.forwardRef(tl)},nl=_`
    color: ${Vi.icon};
    height: 1rem;
    width: 1rem;
`,ol=k(ee)`
    ${nl}
`,il=k(te)`
    ${nl}
`,al=k(J)`
    ${nl}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,sl=k.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,ll=k.div`
    display: flex;
    flex: 1;
    position: relative;
`,cl=k.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,dl=k.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Vi.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return _`
                display: none;
            `}}
`,ul=k.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,hl=k.div`
    display: flex;
`,fl=k.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?_`
                display: none;
            `:e.$expanded?_`
                ${al} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,pl=k.span`
    ${Ui["body-md-regular"]}
    color: ${Vi.text};
`,gl=k.div`
    display: flex;
`,ml=k(Ia)`
    margin: auto 0;
    padding: 0.75rem;

    &:disabled {
        cursor: not-allowed;
    }
`,bl=k.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,vl=k(rl.Small)`
    flex: 1;
`,yl=k.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,xl=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Gi.md};
    margin: 0 0.5rem;
    transition: ${Ki["duration-150"]} ${Ki["ease-default"]};

    // default styles
    ${Ui["body-md-regular"]}
    border-radius: ${Gi.md};
    border: ${qi["width-010"]} ${qi.solid} transparent;
    background-clip: border-box;
    color: ${Vi.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?_`
                cursor: pointer;
            `:e.$disabledDisplay?_`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?_`
                background: ${Vi["bg-selected"]};
                border-color: ${Vi["border-selected"]};
                color: ${Vi["text-selected"]};
                font-weight: ${Ui.Spec["weight-semibold"]};

                ${t&&_`
                    &:hover {
                        background: ${Vi["bg-selected-hover"]};
                        border-color: ${Vi["border-selected-hover"]};
                        color: ${Vi["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?_`
                color: ${Vi["text-primary"]};
                font-weight: ${Ui.Spec["weight-semibold"]};
            `:r?_`
                color: ${Vi["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?_`
                &:hover {
                    background: ${Vi["bg-selected-hover"]};
                    border-color: ${Vi["border-selected-hover"]};
                    color: ${Vi["text-selected-hover"]};
                    font-weight: ${Ui.Spec["weight-semibold"]};
                }
            `:_`
            &:hover {
                background: ${Vi["bg-hover"]};
                color: ${Vi["text-hover"]};
                font-weight: ${Ui.Spec["weight-semibold"]};
            }
        `}}
`,wl=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:u,onMonthSelect:f})=>{const p=v((()=>qe.generateMonths(ze(t))),[t]),g=a(new Array(p.length).fill(null)),[m,b]=s(p.findIndex((e=>e.isSame(i,"month"))));h((()=>{var e;null!==m&&(null===(e=g.current[m])||void 0===e||e.focus())}),[m,p]);const y=(e,t)=>{t||f(e)},x=e=>{const t="start"===r&&o&&e.isAfter(o,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!i)},w=e=>{const t=e.format("MMMM"),r=(n=e,!qe.isWithinRange(n,c?ze(c):void 0,d?ze(d):void 0,"month"));var n;const o=i.isSame(e,"month"),a=o?"selected-month":ze().isSame(e,"month")?"current-month":"default",s=i.isSame(e,"year")?o?0:-1:0===e.month()?0:-1;return{disabledDisplay:r||x(e),interactive:!r||u,month:t,variant:a,tabIndex:s}};return p.length?e(yl,{onBlur:()=>{b(null)},children:p.map(((t,r)=>{const{disabledDisplay:n,interactive:o,variant:i,month:a,tabIndex:s}=w(t);return e(xl,{ref:e=>g.current[r]=e,tabIndex:s,role:"button","aria-disabled":!o,"aria-selected":"selected-month"===i,$variant:i,$disabledDisplay:n,$interactive:o,onClick:()=>y(t,!o),onKeyDown:e=>{((e,t,r)=>{const n=e.key;let o;const i=p.indexOf(t);switch(n){case"Enter":case" ":e.preventDefault(),y(t,r);break;case"ArrowLeft":o=i-1;break;case"ArrowRight":o=i+1;break;case"ArrowUp":o=i-2;break;case"ArrowDown":o=i+2}void 0!==o&&o>=0&&o<p.length&&(e.preventDefault(),b(o))})(e,t,!o)},children:a},a)}))}):null},$l=k.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Cl=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Ki["duration-150"]} ${Ki["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${Ui["body-md-regular"]}
    border-radius: ${Gi.md};
    border: ${qi["width-010"]} ${qi.solid} transparent;
    background-clip: border-box;
    color: ${Vi.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?_`
                cursor: pointer;
            `:t?_`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?_`
                background: ${Vi["bg-selected"]};
                border-color: ${Vi["border-selected"]};
                color: ${Vi["text-selected"]};
                font-weight: ${Ui.Spec["weight-semibold"]};

                ${t&&_`
                    &:hover {
                        background: ${Vi["bg-selected-hover"]};
                        border-color: ${Vi["border-selected-hover"]};
                        color: ${Vi["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?_`
                color: ${Vi["text-primary"]};
                font-weight: ${Ui.Spec["weight-semibold"]};
            `:"other-decade"===e||r?_`
                color: ${Vi["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?_`
                &:hover {
                    background: ${Vi["bg-selected-hover"]};
                    border-color: ${Vi["border-selected-hover"]};
                    color: ${Vi["text-selected-hover"]};
                    font-weight: ${Ui.Spec["weight-semibold"]};
                }
            `:_`
            &:hover {
                background: ${Vi["bg-hover"]};
                color: ${Vi["text-hover"]};
                font-weight: ${Ui.Spec["weight-semibold"]};
            }
        `}}
`,Sl=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:u,onYearSelect:f,setCalendarDate:p})=>{const g=v((()=>qe.generateDecadeOfYears(ze(t))),[t]),m=a(new Array(g.length).fill(null)),[b,y]=s(t);h((()=>{var e;if(null===b)return;const t=g.findIndex((e=>e.isSame(b,"year")));t>=0&&(null===(e=m.current[t])||void 0===e||e.focus())}),[b,g]);const x=(e,t)=>{t||f(e)},w=e=>{const t="start"===r&&o&&e.isAfter(o,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!i)},$=e=>{const t=g.indexOf(e),r=[0,11].includes(t),n=e.year(),o=(a=e,!qe.isWithinRange(a,c?ze(c):void 0,d?ze(d):void 0,"year"));var a;const s=r?"other-decade":i.isSame(e,"year")?"selected-year":ze().isSame(e,"year")?"current-year":"default",l=i.year()>=g[0].year()&&i.year()<=g[g.length-1].year()?"selected-year"===s?0:-1:1===t?0:-1;return{disabledDisplay:o||w(e),interactive:!o||u,year:n,variant:s,tabIndex:l}};return g.length?e($l,{onBlur:()=>{y(null)},children:g.map(((t,r)=>{const{disabledDisplay:n,interactive:o,variant:i,year:a,tabIndex:s}=$(t);return e(Cl,{ref:e=>{m.current[r]=e},tabIndex:s,role:"button","aria-label":`${a}`,"aria-disabled":!o,"aria-selected":"selected-year"===i,$variant:i,$disabledDisplay:n,$interactive:!!o,onClick:()=>x(t,!o),onKeyDown:e=>{((e,t,r)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(t,r);break;case"ArrowLeft":n=t.subtract(1,"year");break;case"ArrowRight":n=t.add(1,"year");break;case"ArrowUp":n=t.subtract(3,"year");break;case"ArrowDown":n=t.add(3,"year")}void 0!==n&&(e.preventDefault(),p(n),y(n))})(e,t,!o)},children:a},a)}))}):null},Dl=o.forwardRef(((n,o)=>{var{children:i,initialCalendarDate:l,minDate:c,maxDate:d,currentFocus:u,selectedStartDate:f,selectedEndDate:p,selectWithinRange:g,dynamicHeight:m=!1,allowDisabledSelection:b,onCalendarDateChange:v,withButton:x,doneButtonDisabled:w,onDismiss:$,showNavigationHeader:C=!0,getLeftArrowDate:S,getRightArrowDate:D,isLeftArrowDisabled:k,isRightArrowDisabled:_,getMonthHeaderLabel:F,getYearHeaderLabel:E,isFocusable:O=!1}=n,T=Fe(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[I,M]=s(et.toDayjs(l)),[A,B]=s(et.toDayjs(l)),[z,j]=s("default"),R=a(null),L=a(null),P=a(null),H=a(null);y(o,(()=>({defaultView(){j("default")},resetView(){const e=et.toDayjs(l);M(e),B(e),j("default")},setCalendarDate(e){const t=et.toDayjs(e);M(t),B(t)}}))),h((()=>{const e=et.toDayjs(l);M(e),B(e)}),[l]),h((()=>{G(A)}),[A]);const N=()=>{var e;"month-options"!==z?(j("month-options"),null===(e=P.current)||void 0===e||e.focus()):(j("default"),M(A))},W=e=>{var t;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),N(),null===(t=H.current)||void 0===t||t.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const t="ArrowUp"===e.key?I.subtract(1,"month"):I.add(1,"month");if(!qe.isWithinRange(t,c?ze(c):void 0,d?ze(d):void 0,"month"))return;M(t),"default"===z&&B(t)}},Y=()=>{"default"!==z?(j("default"),M(A)):j("year-options")},V=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),Y()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let t;if(t="year-options"===z?"ArrowUp"===e.key?I.subtract(10,"year"):I.add(10,"year"):"ArrowUp"===e.key?I.subtract(1,"year"):I.add(1,"year"),!qe.isWithinRange(t,c?ze(c):void 0,d?ze(d):void 0,"year"))return;M(t),"default"===z&&B(t)}},U=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=S?S(I):I.subtract(1,"month");switch(z){case"default":B(t),M(t);break;case"month-options":M((e=>e.subtract(1,"year")));break;case"year-options":M((e=>e.subtract(10,"year")))}},K=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=D?D(I):I.add(1,"month");switch(z){case"default":B(t),M(t);break;case"month-options":M((e=>e.add(1,"year")));break;case"year-options":M((e=>e.add(10,"year")))}},q=e=>{M(e),B(e),x||j("default")},Z=()=>{const e=et.toDayjs(l);M(e),B(e),"default"===z?Q("reset"):j("default")},G=e=>{v&&v(e)},Q=e=>{$&&$(e)},X=()=>{if(!c||b)return!1;const e=ze(c);return"month-options"===z?!qe.isPreviousYearWithinRange(I,e):"year-options"===z?!qe.isPreviousDecadeWithinRange(I,e):k?k(I):!qe.isPreviousMonthWithinRange(I,e)},J=()=>{if(!d||b)return!1;const e=ze(d);return"month-options"===z?!qe.isNextYearWithinRange(I,e):"year-options"===z?!qe.isNextDecadeWithinRange(I,e):_?_(I):!qe.isNextMonthWithinRange(I,e)},ee=()=>{const n=F?F(I):I.format("MMM"),o=ze(n,"MMM").format("MMMM"),i=(()=>{if("year-options"===z){const{beginDecade:e,endDecade:t}=qe.getStartEndDecade(I);return`${e} to ${t}`}return E?E(I):I.format("YYYY")})(),a={"month-options":`${i}, Close month selection`,"year-options":`${i}, Close year selection`,default:`${i}, Select year`};return t(r,{children:[t(fl,{"aria-label":`${o}, Select month`,type:"button",$expanded:"month-options"===z,$visible:"default"===z,id:"month-dropdown",onClick:N,onKeyDown:W,tabIndex:O?0:-1,children:[e(pl,{children:n}),e(al,{})]}),t(fl,{ref:H,"aria-label":a[z],type:"button",$expanded:"default"!==z,id:"year-dropdown",onClick:Y,onKeyDown:V,tabIndex:O?0:-1,children:[e(pl,{children:i}),e(al,{})]})]})},te=()=>{switch(z){case"month-options":return e(wl,{calendarDate:I,currentFocus:u,minDate:c,maxDate:d,selectedStartDate:f,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!g,onMonthSelect:q,allowDisabledSelection:b});case"year-options":return e(Sl,{setCalendarDate:M,calendarDate:I,currentFocus:u,minDate:c,maxDate:d,selectedStartDate:f,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!g,onYearSelect:q,allowDisabledSelection:b});default:return null}};return t(sl,Object.assign({ref:P,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":A.format("MMMM, YYYY"),role:"group"},T,{children:[C&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[z];return t(ul,{"data-id":"calendar-header","data-testid":"calendar-header",children:[e(hl,{children:ee()}),t(gl,{children:[e(ml,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:X(),focusHighlight:!1,focusOutline:"browser",onClick:U,tabIndex:O?0:-1,children:e(ol,{})}),e(ml,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:J(),focusHighlight:!1,focusOutline:"browser",onClick:K,tabIndex:O?0:-1,children:e(il,{})})]})]})})(),e(ll,{children:(()=>{const n="function"==typeof i?i({calendarDate:A,currentView:z}):i;if(m)return t(r,{children:["default"===z&&n,te()]});{const o="default"===z;return t(r,{children:[e(cl,{inert:Ts(!o),children:n}),e(dl,{$visible:!o,children:te()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===z)&&w;return t(bl,{children:[e(vl,{ref:L,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Z,children:"Cancel"}),e(vl,{"data-testid":"done-button",ref:R,type:"button",onClick:()=>{r||(M(A),"default"===z?Q("confirmed"):j("default"))},disabled:r,children:"Done"})]})})()]}))})),kl=k.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,_l=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${Ui["body-sm-semibold"]};
    color: ${Vi.text};
`,Fl=k.div`
    grid-column: 1 / -1;
    display: flex;
`,El=e=>{let t=Vi.bg,r="transparent";switch(e.$type){case"hover-subtle":t=Vi["bg-hover"],r=Vi["bg-hover"];break;case"hover":t=Vi["bg-hover-strong"],r=Vi["bg-hover-strong"];break;case"hover-outline":t=Vi["bg-hover-subtle"],r=Vi["border-hover"];break;case"selected-outline":t=Vi["bg-selected"],r=Vi["border-selected"];break;case"selected-outline-subtle":t=Vi["bg-selected"],r=Vi["border-selected-subtle"];break;case"selected-hover":t=Vi["bg-selected-hover"];break;case"selected-hover-outline":t=Vi["bg-selected-hover"],r=Vi["border-selected-hover"]}return{color:t,borderColor:r}},Ol=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Tl=k.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Ki["duration-150"]} ${Ki["ease-default"]};
    border: ${qi["width-010"]} ${qi.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=El(e);return _`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,Il=k(Tl)`
    left: 0;
`,Ml=k(Tl)`
    right: 0;
`,Al=k.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Ki["duration-150"]} ${Ki["ease-default"]};

    border: ${qi["width-010"]} ${qi.solid} transparent;
    border-radius: ${Gi.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=El(e);return _`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,Bl=k(Al)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,zl=k(Al)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,jl=k.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,Rl=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Ui["body-md-regular"]}
    transition: ${Ki["duration-150"]} ${Ki["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"hidden"===r?_`
                    visibility: hidden;
                `:_`
                color: ${Vi["text-disabled-subtlest"]};
            `;switch(r){case"selected":return _`
                    font-weight: ${Ui.Spec["weight-semibold"]};
                    color: ${Vi["text-selected"]};
                `;case"selected-hover":return _`
                    font-weight: ${Ui.Spec["weight-semibold"]};
                    color: ${Vi["text-selected-hover"]};
                `;case"current":return _`
                    font-weight: ${Ui.Spec["weight-semibold"]};
                    color: ${Vi["text-primary"]};
                `;case"hover":return _`
                    font-weight: ${Ui.Spec["weight-semibold"]};
                    color: ${Vi["text-hover"]};
                `;case"unavailable":return _`
                    color: ${Vi["text-disabled-subtlest"]};
                `;case"hidden":return _`
                    visibility: hidden;
                `;default:return _`
                    color: ${Vi.text};
                `}}}

    &:focus {
        outline: none;
    }
`,Ll=k.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`,Pl=({bgLeft:r,bgRight:n,circleLeft:o,circleRight:i,labelType:s,disabled:l,interactive:c,currentDateIndicator:d,date:u,onSelect:f,onHover:p,onFocus:g,onHoverEnd:m,onKeyDown:b,focusDate:v,label:y,ariaHidden:x,tabIndex:w=-1,role:$="button"})=>{const C=ze().isSame(u,"day"),S=!!v&&v.isSame(u,"day"),D=`${u.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,k=a(null);h((()=>{var e;S&&k.current&&(null===(e=k.current)||void 0===e||e.focus())}),[S]);return t(Ol,{"aria-hidden":x,children:[e(Il,{$type:r}),e(Bl,{$type:o}),e(Ml,{$type:n}),e(zl,{$type:i}),e(jl,{$interactive:c,children:t(Rl,{ref:k,tabIndex:w,role:$,"aria-label":y||D,"aria-disabled":!c,"aria-selected":"selected"===s||"selected-hover"===s,$type:s,$disabled:l,$interactive:c,onClick:()=>{null==f||f(u)},onKeyDown:e=>{b&&b(e)},onMouseEnter:()=>{null==p||p(u)},onMouseLeave:()=>{null==m||m(u)},onFocus:()=>{null==g||g(u)},children:[u.date(),d&&C&&e(Ll,{$disabled:l})]})})]})},Hl=({date:t,calendarDate:r,startDate:n,endDate:o,currentFocus:i,hoverDate:a,focusDate:s,minDate:l,maxDate:c,disabledDates:d,allowDisabledSelection:u,isNewSelection:h,showActiveMonthDaysOnly:f,onSelect:p,onHover:g,onFocus:m,setFocusCell:b,tabIndex:v})=>{const y=qe.isDisabledDay(t,d,l,c),x=!y||u,w=()=>{p(t,!x)},$=()=>{const e=ze(a),t=e.isBefore(o,"day"),r=e.isAfter(n,"day");let s,l,c,d;return"start"===i&&o&&t&&(n&&r?(c=a,d=o):(s=a,l=n||o)),"end"===i&&n&&r&&(o&&t?(c=n,d=a):(s=o||n,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},C={date:t,calendarDate:r,disabled:y,interactive:x,currentDateIndicator:!0,onSelect:w,onHover:()=>{g(t.format("YYYY-MM-DD"),!x)},onFocus:()=>{m(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(x&&w());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),b(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:ze(s),tabIndex:v};return e(Pl,Object.assign({},C,(()=>{const e={};if(r.month()!==t.month())e.labelType=f?"hidden":"unavailable";else if(ze().isSame(t,"day")&&!y)e.labelType="current";else if(h){const r="end"===i&&n&&t.isBefore(n),a="start"===i&&o&&t.isAfter(o);(r||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},i=t.isSame(n,"day"),a=t.isSame(o,"day");return f&&r.month()!==t.month()?(e.labelType="hidden",e):((n&&i||o&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),n&&o&&t.isBetween(n,o,"day","[]")&&(e.labelType="selected",i||(e.bgLeft="selected-outline-subtle"),a||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!a)return{};const e={},r=t.isSame(a,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:c}=$();if(r){const r=t.isSame(n,"day"),i=t.isSame(o,"day");r||i?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(i&&s){if(t.isBetween(i,s,"day","[]")){const r=t.isSame(i,"day"),n=t.isSame(s,"day");r||(e.labelType="hover",e.bgLeft="hover-outline"),n||(e.labelType="hover",e.bgRight="hover-outline")}return e}return l&&c?(t.isBetween(l,c,"day","[]")&&r&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};ze.extend(Pe);const Nl=({calendarDate:r,currentFocus:n,disabledDates:o,selectedStartDate:i,selectedEndDate:l,onSelect:c,onHover:d,isNewSelection:u,minDate:f,maxDate:g,allowDisabledSelection:m,showActiveMonthDaysOnly:b,setCalendarDate:y})=>{const x=a(null);h((()=>{if(x.current){const e=x.current;x.current=null,k(e)}}),[r]);const w=p((()=>i&&ze(i).isSame(r,"month")?ze(i):l&&ze(l).isSame(r,"month")?ze(l):ze().isSame(r,"month")?ze():f&&r.isSame(ze(f),"month")?ze(f):ze(r).startOf("month")),[i,r,l,f]),$=e=>{const t=ze(e);if(qe.isWithinRange(t,f?ze(f):void 0,g?ze(g):void 0)){if(!t.isSame(r,"month"))return null==y||y(e),void(x.current=e);k(e)}},C=v((()=>qe.generateDays(r)),[r]),S=v((()=>w()),[w]),[D,k]=s(""),[_,F]=s(""),E=(e,t)=>{t&&!m||c(e)},O=(e,t)=>{t&&!m||(F(e),d(e))},T=e=>{F(e),d(e)},I=()=>{F(""),d("")};return t(kl,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(k(""),F(""),d(""))},children:[C[0].map(((t,r)=>e(_l,{"aria-hidden":!0,children:ze(t).format("ddd")},`week-day-${r}`))),C.map(((t,a)=>e(Fl,{role:"row","aria-label":`Week ${a+1}`,onMouseLeave:I,children:t.map(((t,a)=>e(Hl,{date:t,calendarDate:r,startDate:i,endDate:l,hoverDate:_,focusDate:D,currentFocus:n,minDate:f,maxDate:g,disabledDates:o,allowDisabledSelection:m,isNewSelection:u,showActiveMonthDaysOnly:b,onSelect:E,onHover:O,onFocus:T,setFocusCell:$,tabIndex:t.isSame(S,"day")?0:-1},`day-${a}`)))},a)))]})},Wl=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:c,numberOfDays:d=1,onSelect:u,onHover:h,onFocus:f,setFocusCell:p,tabIndex:g})=>{const m=qe.isDisabledDay(t,l,a,s),b=!m||c,{start:v,end:y}=n?qe.getFixedRangeStartEnd(et.toDayjs(n),d):{start:void 0,end:void 0},{start:x,end:w}=o?qe.getFixedRangeStartEnd(et.toDayjs(o),d):{start:void 0,end:void 0},$=!!n&&t.isBetween(v,y,"day","[]"),C=!!o&&t.isBetween(x,w,"day","[]"),S=$&&t.isSame(v,"day")||C&&t.isSame(x,"day"),D=$&&t.isSame(y,"day")||C&&t.isSame(w,"day"),k=`From ${ze(x).format("D MMMM")} to ${ze(w).format("D MMMM")}, ${m?"Unavailable":"Available"}`,_=()=>{u(t,!b)},F=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},E={date:t,calendarDate:r,disabled:m,interactive:b,currentDateIndicator:!0,onSelect:_,onHover:()=>{h(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{f(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&_());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),p(r.format("YYYY-MM-DD")))})(e)},focusDate:ze(i),role:"gridcell",tabIndex:g,label:k};return e(Pl,Object.assign({},E,(()=>{const e={};return $||C?e.labelType="selected":r.month()!==t.month()?e.labelType="unavailable":ze().isSame(t,"day")&&!m&&(e.labelType="current"),e})(),(()=>{const e={},r=t.format("YYYY-MM-DD");return C&&F(e,"hover",r===x,r===w),$&&F(e,"selected-outline",r===v,r===y),$&&C&&(F(e,"selected-hover-outline",S,D),r===x&&r!==v&&(e.circleLeft="selected-hover")),e})()))},Yl=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:l,minDate:c,maxDate:d,allowDisabledSelection:u,numberOfDays:f,setCalendarDate:g})=>{const m=a(null);h((()=>{if(m.current){const e=m.current;m.current=null,C(e)}}),[r]);const b=p((()=>o&&ze(o).isSame(r,"month")?ze(o):ze().isSame(r,"month")?ze():c&&r.isSame(ze(c),"month")?ze(c):ze(r).startOf("month")),[o,r,c]),y=e=>{const t=ze(e);if(qe.isWithinRange(t,c?ze(c):void 0,d?ze(d):void 0)){if(!t.isSame(r,"month"))return null==g||g(e),void(m.current=e);C(e)}},x=v((()=>qe.generateDays(r)),[r]),w=v((()=>b()),[b]),[$,C]=s(""),[S,D]=s(""),k=(e,t)=>{t&&!u||(i(e),e&&!ze(e).isSame(e,"month")&&D(""))},_=(e,t)=>{t&&!u||(D(e),l(e))},F=e=>{D(e),l(e)},E=()=>{D(""),l("")};return t(kl,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),D(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(_l,{"aria-hidden":!0,children:ze(t).format("ddd")},`week-day-${r}`))),x.map(((t,i)=>e(Fl,{role:"row",onMouseLeave:E,children:t.map(((t,i)=>e(Wl,{date:t,calendarDate:r,selectedDate:o,hoverDate:S,focusDate:$,minDate:c,maxDate:d,disabledDates:n,allowDisabledSelection:u,onSelect:k,onHover:_,numberOfDays:f,onFocus:F,setFocusCell:y,tabIndex:ze(t).isSame(w,"day")?0:-1},`day-${i}`)))},i)))]})},Vl=k.div`
    width: 100%;
    background: ${Vi.bg};
`,Ul=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:c,showActiveMonthDaysOnly:d,onSelect:u,onHover:h,onFocus:f,setFocusCell:p,tabIndex:g})=>{const m=qe.isDisabledDay(t,l,a,s),b=!m||c,v=()=>{u(t,!b)},y={date:t,calendarDate:r,disabled:m,interactive:b,currentDateIndicator:!0,onSelect:v,onHover:()=>{h(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{f(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&v());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),p(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:ze(i),tabIndex:g};return e(Pl,Object.assign({},y,(()=>{const e={};r.month()!==t.month()?e.labelType=d?"hidden":"unavailable":ze().isSame(t,"day")&&!m&&(e.labelType="current");const i=t.isSame(n,"day"),a=t.isSame(o,"day");return i&&a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):i?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):a&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};ze.extend(Pe);const Kl=({calendarDate:r,disabledDates:n,selectedDate:o,onSelect:i,onHover:l,minDate:c,maxDate:d,allowDisabledSelection:u,showActiveMonthDaysOnly:f,setCalendarDate:g})=>{const m=a(null);h((()=>{if(m.current){const e=m.current;m.current=null,C(e)}}),[r]);const b=p((()=>o&&ze(o).isSame(r,"month")?ze(o):ze().isSame(r,"month")?ze():c&&r.isSame(ze(c),"month")?ze(c):ze(r).startOf("month")),[o,r,c]),y=e=>{const t=ze(e);if(qe.isWithinRange(t,c?ze(c):void 0,d?ze(d):void 0)){if(!t.isSame(r,"month"))return null==g||g(e),void(m.current=e);C(e)}},x=v((()=>qe.generateDays(r)),[r]),w=v((()=>b()),[b]),[$,C]=s(""),[S,D]=s(""),k=(e,t)=>{t&&!u||i(e)},_=(e,t)=>{t&&!u||(D(e),l(e))},F=e=>{D(e),l(e)},E=()=>{D(""),l("")};return t(kl,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),D(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(_l,{"aria-hidden":!0,children:ze(t).format("ddd")},`week-day-${r}`))),x.map(((t,i)=>e(Fl,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:E,children:t.map(((t,i)=>e(Ul,{date:t,calendarDate:r,selectedDate:o,hoverDate:S,focusDate:$,minDate:c,maxDate:d,disabledDates:n,allowDisabledSelection:u,showActiveMonthDaysOnly:f,onSelect:k,onHover:_,onFocus:F,setFocusCell:y,tabIndex:ze(t).isSame(w,"day")?0:-1},`day-${i}`)))},i)))]})},ql=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:c,onSelect:d,onHover:u,onFocus:h,setFocusCell:f,tabIndex:p})=>{const g=qe.isDisabledDay(t,l,a,s),m=!g||c,{start:b,end:v}=qe.getWeekStartEnd(et.toDayjs(n)),{start:y,end:x}=qe.getWeekStartEnd(et.toDayjs(o)),{start:w,end:$}=qe.getWeekStartEnd(t),C=t.isSame(w,"day"),S=n&&t.isBetween(b,v,"day","[]"),D=o&&t.isBetween(y,x,"day","[]"),k=S&&t.isSame(b)||D&&t.isSame(y),_=S&&t.isSame(v)||D&&t.isSame(x),F=`From ${ze(w).format("D MMMM")} to ${ze($).format("D MMMM")}, ${g?"Unavailable":"Available"}`,E=()=>{d(t,!m)},O={date:t,calendarDate:r,disabled:g,interactive:m,currentDateIndicator:!0,onSelect:E,onHover:()=>{u(t.format("YYYY-MM-DD"),!m)},onFocus:()=>{h(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(m&&E());(e=>{let r;const n={ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),f(r.format("YYYY-MM-DD")))})(e)},focusDate:ze(i),tabIndex:p,label:F,ariaHidden:!C||void 0,role:C?"button":"none"};return e(Pl,Object.assign({},O,(()=>{const e={};return r.month()!==t.month()?e.labelType="unavailable":ze().isSame(t,"day")&&!g&&(e.labelType="current"),e})(),(()=>{const e={};let t,r;return S&&D?(t="selected-hover-outline",r="selected-hover"):S?(t="selected-outline",r="selected"):D&&(t="hover",r="hover"),t&&(e.labelType=r,k?e.circleLeft=t:e.bgLeft=t,_?e.circleRight=t:e.bgRight=t),e})()))},Zl=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:l,minDate:c,maxDate:d,allowDisabledSelection:u,setCalendarDate:f})=>{const g=a(null);h((()=>{if(g.current){const e=g.current;g.current=null,$(e)}}),[r]);const m=p((()=>o&&ze(o).isSame(r,"month")?ze(o):ze().isSame(r,"month")?ze().startOf("week"):c&&r.isSame(ze(c),"month")?ze(c):ze(r).startOf("month")),[o,r,c]),b=e=>{const t=ze(e);if(qe.isWithinRange(t,c?ze(c):void 0,d?ze(d):void 0)){if(!t.isSame(r,"month"))return null==f||f(e),void(g.current=e);$(e)}},y=v((()=>qe.generateDays(r)),[r]),x=v((()=>m()),[m]),[w,$]=s(""),[C,S]=s(""),D=(e,t)=>{if(t&&!u)return;const r=e.startOf("week");i(r),e&&!ze(e).isSame(r,"month")&&S("")},k=(e,t)=>{t&&!u||(S(e),l(e))},_=e=>{S(e),l(e)},F=()=>{S(""),l("")};return t(kl,{"data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||($(""),S(""),l(""))},"aria-label":"Week selection",children:[y[0].map(((t,r)=>e(_l,{"aria-hidden":!0,children:ze(t).format("ddd")},`week-day-${r}`))),y.map(((t,i)=>e(Fl,{onMouseLeave:F,role:"group",children:t.map(((t,i)=>e(ql,{date:t,calendarDate:r,selectedDate:o,hoverDate:C,focusDate:w,minDate:c,maxDate:d,disabledDates:n,allowDisabledSelection:u,onSelect:D,onHover:k,onFocus:_,setFocusCell:b,tabIndex:ze(t).isSame(x,"day")?0:-1},`day-${i}`)))},i)))]})},Gl=o.forwardRef((({disabledDates:t,onYearMonthDisplayChange:r,onSelect:n,onHover:o,onDismiss:i,value:s,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:h,maxDate:f,allowDisabledSelection:p,selectWithinRange:g=!0,initialCalendarDate:m,numberOfDays:b,showActiveMonthDaysOnly:v=!1,isFocusable:x=!1},w)=>{const $=a(null),C=a(void 0),S=a(null);y(w,(()=>({reset(){var e;null===(e=$.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=$.current)||void 0===t||t.setCalendarDate(e)},contains(e){var t;return(null===(t=S.current)||void 0===t?void 0:t.contains(e))||!1}})));const D=e=>{var t;const r=e.format("YYYY-MM-DD");null===(t=$.current)||void 0===t||t.setCalendarDate(r),_(r)},k=e=>{F(e)},_=e=>{n&&n(e)},F=e=>{o&&o(e)},E=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return e(Vl,{ref:S,children:e(Dl,{ref:$,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:i,minDate:h,maxDate:f,selectWithinRange:g,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:p,onCalendarDateChange:e=>{var t;C.current&&C.current.isSame(e,"month")||(null===(t=$.current)||void 0===t||t.setCalendarDate(e.format("YYYY-MM-DD")),E(e)),C.current=e},initialCalendarDate:m,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;const o=null===(n=$.current)||void 0===n?void 0:n.setCalendarDate;switch(u){case"week":return e(Zl,{calendarDate:r,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:f,allowDisabledSelection:p,onSelect:D,onHover:k,setCalendarDate:o});case"fixed-range":return e(Yl,{calendarDate:r,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:f,allowDisabledSelection:p,onSelect:D,onHover:k,numberOfDays:b,setCalendarDate:o});case"single":return e(Kl,{calendarDate:r,disabledDates:t,selectedDate:s,minDate:h,maxDate:f,allowDisabledSelection:p,showActiveMonthDaysOnly:v,onSelect:D,onHover:k,setCalendarDate:o});default:return e(Nl,{calendarDate:r,currentFocus:c,disabledDates:t,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:f,isNewSelection:g,allowDisabledSelection:p,showActiveMonthDaysOnly:v,onSelect:D,onHover:k,setCalendarDate:o})}})(r)})})})),Ql=o.forwardRef(((t,r)=>{const{elementWidth:n,setFloatingRef:o,getFloatingProps:i,styles:a}=Fs();return e(Os,Object.assign({$width:n,"data-testid":"calendar-dropdown",ref:o,style:a},i(),{children:e(Gl,Object.assign({ref:r},t))}))})),Xl=_`
    outline-offset: -1px;
    outline: ${qi["width-020"]} ${qi.solid} ${Vi["border-focus"]};
`,Jl=_`
    outline-color: ${Vi["border-focus"]};
`,ec=_`
    outline-color: ${Vi["border-disabled"]};
`,tc=_`
    outline-color: ${Vi["border-error-focus"]};
`,rc=k.div`
    border: ${qi["width-010"]} ${qi.solid} ${Vi.border};
    border-radius: ${Gi.sm};
    background: ${Vi.bg};

    &:focus-within {
        ${Xl}
    }
    ${e=>e.$focused&&Xl}

    ${e=>e.$readOnly?_`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${Jl}
                }
                ${e.$focused&&Jl}
            `:e.$disabled?_`
                background: ${Vi["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${ec}
                }
                ${e.$focused&&ec}
            `:e.$error?_`
                border-color: ${Vi["border-error"]};

                &:focus-within {
                    ${tc}
                }
                ${e.$focused&&tc}
            `:void 0}
`,nc=k(rc)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Zi["spacing-16"]} 0
        ${e=>e.$readOnly?"0":Zi["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,oc=k.input`
    ${e=>"small"===e.$variant?Ui["body-md-regular"]:Ui["body-baseline-regular"]}
    color: ${Vi.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${Vi["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Vi["text-subtler"]};
    }

    // Chrome, Safari, Edge, Opera
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;
`,ic=k.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${qi["width-010"]} ${qi.solid}
            ${Vi["border-focus"]};
        border-radius: ${Gi.sm};
    }
`,ac=k.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,sc=k.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return _`
                ${lc}, ${hc} {
                    color: ${Vi["text-subtler"]};
                }
            `}}
`,lc=k(oc)`
    background: transparent;
    text-align: center;
`,cc=k(lc)`
    width: 2rem;
    margin-right: ${Zi["spacing-4"]};
`,dc=k(lc)`
    width: 2.5rem;
`,uc=k(lc)`
    width: 3rem;
    margin-left: ${Zi["spacing-4"]};
`,hc=k.span`
    ${Ui["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return _`
                color: ${Vi.text};
            `}}
`,fc=k.div`
    ${Ui["body-baseline-regular"]}
    background-color: ${Vi.bg};
    color: ${Vi["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?_`
                background-color: ${Vi["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?_`
                display: none;
            `:void 0}
`;ze.extend(Re);const pc=o.forwardRef((({disabled:r,readOnly:n,names:o,value:i,focused:l,hoverValue:c,placeholder:d,label:u,onChange:f,onFocus:p,onBlur:g,hideInputKeyboard:m,inputLabels:b=["Date","Month","Year"]},v)=>{const x=m?"none":"numeric",[w,$,C]=ar(""),[S,D,k]=ar(""),[_,F,E]=ar(""),[O,T]=s("none"),[I,M]=s(!1),A=a(null),B=a(null),z=a(null),j=a(null),[R,L,P]=U(c);h((()=>{var e;const[t="",r="",n=""]=U(i);$(t),D(r),F(n),t||r||n||!A.current||!A.current.contains(document.activeElement)||null===(e=B.current)||void 0===e||e.focus()}),[i]),h((()=>{var e;l||T("none"),l&&(M(!0),A.current&&!A.current.contains(document.activeElement)&&(null===(e=B.current)||void 0===e||e.focus()))}),[l]),y(v,(()=>({ref:A,resetPlaceholder(){M(!1)},resetInput(){const[e="",t="",r=""]=U(i);$(e),D(t),F(r)},focusYearRef(){var e;null===(e=j.current)||void 0===e||e.focus()}})),[$,D,F,i]);const H=e=>{var t;e.preventDefault(),null===(t=B.current)||void 0===t||t.focus()},N=e=>{e.target.select();const t=e.target.name;T(t)},W=e=>{const[t,r,n]=o,i={[t]:C.current,[r]:k.current,[n]:E.current},a=e.target.name,s=i[a],l=a!==n?it.padValue(s,!0):s;switch(a){case t:i[t]=l,$(l);break;case r:i[r]=l,D(l)}const c=`${i[n]}-${i[r]}-${i[t]}`,d=ze(c,"YYYY-MM-DD",!0).isValid(),u=!i[t]&&!i[r]&&!i[n];d&&s!==l&&f(c),A.current&&!A.current.contains(e.relatedTarget)&&(T("none"),null==g||g(u||d))},Y=e=>{var t,r;if(c)return;const n=e.target.name,i=e.target.value.replace(/[^0-9]/g,""),a={day:w,month:S,year:_};switch(n){case o[0]:a.day=i,$(i),2===i.length&&(null===(t=z.current)||void 0===t||t.focus());break;case o[1]:a.month=i,D(i),2===i.length&&(null===(r=j.current)||void 0===r||r.focus());break;case o[2]:a.year=i,F(i)}if(!a.day&&!a.month&&!a.year)return void f("");const s=`${a.year}-${a.month}-${a.day}`;ze(s,"YYYY-MM-DD",!0).isValid()&&f(s)},V=e=>{var t,r;"Backspace"!==e.code&&"Backspace"!==e.key||(O===o[1]&&0===S.length&&(null===(t=B.current)||void 0===t||t.focus()),O===o[2]&&0===_.length&&(null===(r=z.current)||void 0===r||r.focus()))};function U(e){if(e){const t=ze(new Date(e));return t.isValid()?[it.padValue(t.date().toString()),it.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return t(ac,{role:"group","aria-label":u,onClick:()=>{var e;r||n||(M(!0),A.current&&!A.current.contains(document.activeElement)&&(null===(e=B.current)||void 0===e||e.focus()))},onFocus:e=>{r||(M(!0),l||null==p||p(e))},children:[t(sc,{ref:A,$hover:!!c,children:[e(cc,{ref:B,name:o[0],maxLength:2,value:null!=R?R:w,onFocus:N,onBlur:W,onChange:Y,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${o[0]}-input`,"aria-label":b[0],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==o[0]||n?"DD":""}),e(hc,{$inactive:0===w.length,children:"/"}),e(dc,{ref:z,name:o[1],maxLength:2,value:null!=L?L:S,onFocus:N,onBlur:W,onChange:Y,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${o[1]}-input`,"aria-label":b[1],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==o[1]||n?"MM":""}),e(hc,{$inactive:0===S.length,children:"/"}),e(uc,{ref:j,name:o[2],maxLength:4,value:null!=P?P:_,onFocus:N,onBlur:W,onChange:Y,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{4}","data-testid":`${o[2]}-input`,"aria-label":b[2],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==o[2]||n?"YYYY":""})]}),(()=>{if(!i&&!n&&d)return e(fc,{$hide:I,$disabled:r,onMouseDown:H,children:d})})()]})})),gc=k(nc)`
    height: 3rem;
`,mc=t=>{var{minDate:r,maxDate:n,disabled:o,disabledDates:i,error:l,hideInputKeyboard:c,value:d,onChange:u,onFocus:f,onBlur:p,onYearMonthDisplayChange:g,withButton:m=!0,readOnly:b,id:v,allowDisabledSelection:y,zIndex:x,dropdownRootNode:w}=t,$=Fe(t,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[C,S]=s(tt.sanitizeInput(d)),[D,k]=s(tt.sanitizeInput(d)),[_,F]=s(void 0),[E,O]=s(!1),[T,I]=s(!1),M=a(null),A=a(null),B=a(null);h((()=>{const e=tt.sanitizeInput(d);S(e),k(e)}),[d]);const z=e=>{!y&&tt.isDateDisabled(e,{disabledDates:i,minDate:r,maxDate:n})||(k(e),m||(N(e),S(e),e&&O(!1)))},j=e=>{var t;k(e),m||(N(e),S(e),e&&(null===(t=A.current)||void 0===t||t.focusYearRef(),O(!1)),_&&F(void 0))},R=()=>{b||o||(O(!0),T||(I(!0),f&&f()))},L=e=>{var t,r,n;const o=e.relatedTarget,i=B.current&&B.current.contains(o),a=M.current&&M.current.contains(o),s=(null===(t=null==o?void 0:o.matches)||void 0===t?void 0:t.call(o,"[data-floating-ui-focusable]"))||(null===(r=null==o?void 0:o.matches)||void 0===r?void 0:r.call(o,"[data-floating-ui-focus-guard]"));(T&&!E&&!a&&!s||E&&!a&&!i&&!s)&&(null===(n=A.current)||void 0===n||n.resetInput(),k(C),I(!1),O(!1),W())},P=e=>{F(e)},H=e=>{var t,r;switch(e){case"reset":k(C);break;case"confirmed":S(D),N(D)}ze(D,"YYYY-MM-DD",!0).isValid()?null===(t=A.current)||void 0===t||t.focusYearRef():null===(r=M.current)||void 0===r||r.focus(),O(!1)},N=e=>{u&&u(e)},W=()=>{p&&p()};return e(Es,{enabled:!b&&!o,isOpen:E,renderElement:()=>e(gc,Object.assign({role:"group",tabIndex:0,ref:M,onBlur:L,onFocus:R,$disabled:o,$readOnly:b,$focused:T,$error:l,id:v,"data-testid":$["data-testid"],"aria-disabled":o},$,{children:e(pc,{ref:A,disabled:o,onChange:z,readOnly:b,focused:E,names:["start-day","start-month","start-year"],value:D,hoverValue:_,hideInputKeyboard:c})})),renderDropdown:({elementWidth:t})=>e(Ql,{variant:"single",ref:B,initialCalendarDate:D,withButton:m,value:D,disabledDates:i,minDate:r,maxDate:n,allowDisabledSelection:y,onHover:P,onSelect:j,onDismiss:H,onYearMonthDisplayChange:g,width:t,isFocusable:!b&&!o}),onClose:()=>{var e;null===(e=A.current)||void 0===e||e.resetInput(),k(C),O(!1),I(!1),W()},onDismiss:()=>{var e,t;null===(e=A.current)||void 0===e||e.resetInput(),null===(t=M.current)||void 0===t||t.focus(),k(C),O(!1)},customZIndex:x,offset:16,rootNode:w})},bc=k.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return _`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(
                        100% - ${Ui.Spec["body-size-baseline"]} -
                            ${Zi["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${Zi["spacing-8"]};
                }
            `}}
`,vc=k.div`
    width: 100%; // Force next flex item to break to next line
`,yc=k.div`
    display: flex;
    flex: 1;
    align-items: center;
`,xc=k(re)`
    color: ${Vi.icon};
    width: ${Ui.Spec["body-size-baseline"]};
    height: ${Ui.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Zi["spacing-8"]};
    align-self: center;
`,wc=k.div`
    position: absolute;
    background: ${e=>e.$error?Vi["border-error-focus-strong"]:Vi["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Zi["spacing-8"]} - (${Ui.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Ki["duration-350"]} ${Ki["ease-standard"]},
        opacity ${Ki["duration-350"]} ${Ki["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return _`
                    opacity: 1;
                `;case"end":return _`
                    left: calc(50% + ${Zi["spacing-16"]});
                    opacity: 1;
                `;case"none":return _`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return _`
                display: none;
            `}}
`,$c=({children:r,currentActive:n,error:o,className:i,wrap:a})=>{const[s,l]=r;return t(bc,{className:i,$wrap:a,children:[e(yc,{"data-id":"range-container-elem1-container",children:s}),e(xc,{}),a&&e(vc,{}),e(yc,{"data-id":"range-container-elem2-container",children:l}),e(wc,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:a})]})},Cc=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},Sc=k(nc)`
    ${e=>{if(e.$wrap)return!0===e.$readOnly?_`
                    padding: ${Zi["spacing-12"]} 0;
                `:_`
                padding: ${Zi["spacing-12"]} ${Zi["spacing-16"]};
            `}}
`,Dc=k.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&_`
            height: fit-content;
        `}
`,kc={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},_c=r=>{var{minDate:n,maxDate:o,disabled:i,disabledDates:l,error:c,hideInputKeyboard:d,value:u,valueEnd:f,onChange:g,onFocus:m,onBlur:b,onYearMonthDisplayChange:v,withButton:y=!0,variant:w="range",numberOfDays:$=7,readOnly:C,id:S,allowDisabledSelection:D,zIndex:k,dropdownRootNode:_}=r,F=Fe(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[E,O]=s(),[T,I]=s(void 0),M="week"===w,A="fixed-range"===w,[B,z]=s(!1),[j,R]=s(!1),[{selectedStart:L,selectedEnd:P,currentFocus:H,calendarOpen:N,isStartDirty:W,isEndDirty:Y,focused:V},U]=(({initialState:e,reducers:t,name:r,debug:n})=>{const[o,i]=x(((e,r)=>t[r.type]?t[r.type](e,r.payload):e),e);return[o,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{n&&Cc(r,e,t),i({type:e,payload:t})}])))]})({name:"date-range-input",initialState:kc,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:M?"none":A?"start":t,calendarOpen:!C,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),K=a(!1),q=a(null),Z=a(null),G=a(null),Q=a(null),X=(({maxWidth:e,targetRef:t})=>{const[r,n]=s(!1);return er({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:p((t=>{n(t<=e)}),[e])}),r})({maxWidth:320,targetRef:q});h((()=>{U.resetRange({start:tt.sanitizeInput(u),end:tt.sanitizeInput(f)})}),[u,f]),h((()=>{"start"===H?O(L):"end"===H&&P&&O(P)}),[H]);const J=e=>{var t,r,n;"Enter"!==e.code||y||(L&&P?(U.done({start:L,end:P}),null==g||g(L,P)):(U.dismiss(),null===(t=q.current)||void 0===t||t.focus(),null===(r=G.current)||void 0===r||r.resetPlaceholder(),null===(n=Q.current)||void 0===n||n.resetPlaceholder()))},ee=e=>{var t;if(pe(e))return void(K.current=!0);if(U.changeStart(e),e&&(null===(t=Z.current)||void 0===t||t.setCalendarDate(e)),K.current=!1,!e)return void(y||P||!Y||(U.resetRange({start:"",end:""}),null==g||g("","")));if(!P)return void U.focus("end");if(ze(e).isAfter(P,"day"))U.reselectEnd();else{if(Y)return y?void 0:(U.done({start:e,end:P}),void(null==g||g(e,P)));U.focus("end")}},te=e=>{var t,r,n;if(pe(e))return void(K.current=!0);if(ze(e).isBefore(L,"day"))return U.changeStart(e),null===(t=Z.current)||void 0===t||t.setCalendarDate(e),void U.reselectEnd();if(U.changeEnd(e),e&&(null===(r=Z.current)||void 0===r||r.setCalendarDate(e)),e){if(L)return y?void 0:(null===(n=Q.current)||void 0===n||n.focusYearRef(),U.done({start:L,end:e}),void(null==g||g(L,e)));U.focus("start")}else y||L||!W||(U.resetRange({start:"",end:""}),null==g||g("",""))},re=e=>{var t,r;if(pe(e))return void(K.current=!0);if(U.changeStart(e),null===(t=Z.current)||void 0===t||t.setCalendarDate(e),K.current=!1,!e)return void(y?U.changeEnd(""):(U.resetRange({start:"",end:""}),null==g||g("","")));const n=ze(e).format("YYYY-MM-DD"),o=ze(n).add($-1,"day").format("YYYY-MM-DD");return U.changeStart(n),U.changeEnd(o),K.current=!1,y?void 0:(U.done({start:n,end:o}),null===(r=G.current)||void 0===r||r.focusYearRef(),void(null==g||g(n,o)))},ne=()=>{(M||A)&&R(!0),M&&z(!0),C||i||V||(U.focus("start"),null==m||m())},oe=e=>{var t,r,n,o;const i=e.relatedTarget,a=Z.current&&Z.current.contains(i),s=q.current&&q.current.contains(i),l=(null===(t=null==i?void 0:i.matches)||void 0===t?void 0:t.call(i,"[data-floating-ui-focusable]"))||(null===(r=null==i?void 0:i.matches)||void 0===r?void 0:r.call(i,"[data-floating-ui-focus-guard]"));(V&&!N&&!s&&!l||N&&!s&&!a&&!l)&&(U.blur(),R(!1),z(!1),null===(n=G.current)||void 0===n||n.resetPlaceholder(),null===(o=Q.current)||void 0===o||o.resetPlaceholder(),fe())},ie=e=>t=>{t.stopPropagation(),C||(U.focus(e),ae(),se(),V||null==m||m())},ae=()=>{if(M){const e=et.toDayjs(L).startOf("week").format("YYYY-MM-DD");z(!0),R(!0),O(e)}},se=()=>{A&&(R(!0),O(L))},le=e=>{var t;e&&!K.current||(U.resetStart(),null===(t=G.current)||void 0===t||t.resetInput())},ce=e=>{var t;e&&!K.current||(U.resetEnd(),null===(t=Q.current)||void 0===t||t.resetInput())},de=e=>{switch(w){case"week":(e=>{var t;const r=ze(e).startOf("week").format("YYYY-MM-DD"),n=ze(e).endOf("week").format("YYYY-MM-DD");if(U.changeStart(r),U.changeEnd(n),K.current=!1,!y)null===(t=Q.current)||void 0===t||t.focusYearRef(),U.done({start:r,end:n}),null==g||g(r,n)})(e);break;case"fixed-range":re(e);break;default:"start"===H?ee(e):"end"===H&&te(e)}},ue=e=>{var t,r,n;switch(null===(t=q.current)||void 0===t||t.focus(),e){case"reset":U.cancel();break;case"confirmed":if(U.done({start:L,end:P}),null==g||g(L,P),M)break;ge(L,P)&&("range"===w?null===(r=Q.current)||void 0===r||r.focusYearRef():null===(n=G.current)||void 0===n||n.focusYearRef())}},he=e=>{I(e)},fe=()=>{b&&b()},pe=e=>!D&&e&&tt.isDateDisabled(e,{disabledDates:l,minDate:n,maxDate:o}),ge=(e,t)=>!(!e||!t)&&ze(e).isBefore(t,"day"),me=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===H?T:void 0,end:"end"===H?T:void 0};break;case"week":if(!T)return;t={start:ze(T).startOf("week").format("YYYY-MM-DD"),end:ze(T).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!T)return;t={start:ze(T).format("YYYY-MM-DD"),end:ze(T).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return e(Es,{enabled:!C&&!i,isOpen:N,onClose:()=>{var e,t;U.blur(),z(!1),R(!1),null===(e=G.current)||void 0===e||e.resetPlaceholder(),null===(t=Q.current)||void 0===t||t.resetPlaceholder(),fe()},onDismiss:()=>{var e,t,r;U.dismiss(),null===(e=q.current)||void 0===e||e.focus(),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null===(r=Q.current)||void 0===r||r.resetPlaceholder()},renderElement:()=>e(Sc,Object.assign({role:"group",ref:q,tabIndex:0,onFocus:ne,onBlur:oe,$focused:V,$disabled:i,$readOnly:C,$error:c,$wrap:X,id:S,"data-testid":F["data-testid"],"aria-disabled":i,onKeyDown:J},F,{children:t($c,{currentActive:H,wrap:X,error:c,children:[e(Dc,{$wrap:X,children:e(pc,{ref:G,placeholder:"From",names:["start-day","start-month","start-year"],inputLabels:["Start Date","Start Month","Start Year"],value:L,disabled:i,readOnly:B||C,focused:"start"===H,hoverValue:me("start"),onChange:A?re:ee,onFocus:ie("start"),onBlur:le,hideInputKeyboard:d})}),e(Dc,{$wrap:X,children:e(pc,{ref:Q,placeholder:"To",names:["end-day","end-month","end-year"],inputLabels:["End Date","End Month","End Year"],value:P,disabled:i,readOnly:j||C,focused:"end"===H,hoverValue:me("end"),onChange:te,onFocus:ie("end"),onBlur:ce,hideInputKeyboard:d})})]})})),renderDropdown:({elementWidth:t})=>e(Ql,{ref:Z,variant:w,initialCalendarDate:E,withButton:y,value:L,endValue:P,selectWithinRange:W||Y,currentFocus:H,disabledDates:l,minDate:n,maxDate:o,allowDisabledSelection:D,onSelect:de,onDismiss:ue,onHover:he,onYearMonthDisplayChange:v,numberOfDays:$,width:t,isFocusable:!C&&!i}),customZIndex:k,offset:16,rootNode:_})},Fc=k(Qs)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Ec=(r,n)=>{const{children:i,disabled:a=!1,styleType:s="default",danger:l=!1,icon:c,iconPosition:d="left",loading:u=!1,focusableWhenDisabled:h=!1,onClick:f}=r,p=Fe(r,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),g={$buttonIconPosition:d,$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(Fc,Object.assign({ref:n,"data-testid":p["data-testid"]||"button-with-icon",disabled:a&&!h,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:f},g,p,{children:[u?e(Rs,{}):c?o.cloneElement(c,{"aria-hidden":!0}):null,e("span",{children:i})]}))};Ec.displayName="ButtonWithIcon.Default";const Oc=(r,n)=>{const{children:i,disabled:a=!1,styleType:s="default",danger:l=!1,icon:c,iconPosition:d="left",loading:u=!1,focusableWhenDisabled:h=!1,onClick:f}=r,p=Fe(r,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),g={$buttonIconPosition:d,$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(Fc,Object.assign({ref:n,"data-testid":p["data-testid"]||"button-with-icon",disabled:a&&!h,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:f},g,p,{children:[u?e(Rs,{}):c?o.cloneElement(c,{"aria-hidden":!0}):null,e("span",{children:i})]}))};Oc.displayName="ButtonWithIcon.Small";const Tc={Default:o.forwardRef(Ec),Small:o.forwardRef(Oc)},Ic=({className:t,progress:r,color:n,"data-testid":o})=>e(Mc,{className:t,$innerWidth:r,$color:n,"data-testid":o,children:e("progress",{value:100*r,max:100})}),Mc=k.div`
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

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):Vi["icon-primary-subtle"](e),_`
            border: ${qi["width-010"]} ${qi.solid} ${r};
            border-radius: ${Gi.sm};

            &:after {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                border-radius: inherit;
                background: ${r};
                width: ${100*e.$innerWidth}%;
            }
        `}}
`,Ac=k.button`
    align-items: center;
    border-radius: ${Gi.sm};
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$sizeType){case"large":return _`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return _`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return _`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${e=>{switch(e.$styleType){case"secondary":return _`
                    background-color: ${Vi.bg};
                    border: ${qi["width-010"]} ${qi.solid}
                        ${Vi["border-primary"]};
                    color: ${Vi["text-primary"]};

                    &:hover {
                        background-color: ${Vi["bg-hover-neutral"]};
                    }
                `;case"light":return _`
                    background-color: ${Vi.bg};
                    border: ${qi["width-010"]} ${qi.solid}
                        ${Vi.border};
                    color: ${Vi["text-primary"]};

                    &:hover {
                        background-color: ${Vi["bg-hover-neutral"]};
                    }
                `;default:return _`
                    background-color: ${Vi["bg-primary"]};
                    border: none;
                    color: ${Vi["text-inverse"]};

                    &:hover {
                        background-color: ${Vi["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${Vi["bg-disabled"]};
        border: ${qi["width-010"]} ${qi.solid}
            ${Vi["border-disabled"]};
        color: ${Vi["text-disabled"]};
        cursor: not-allowed;
    }
`,Bc=o.forwardRef(((t,r)=>{var{"data-testid":n,styleType:o="primary",children:i,sizeType:a="default",type:s="button"}=t,l=Fe(t,["data-testid","styleType","children","sizeType","type"]);return e(Ac,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:a,$styleType:o},l,{children:i}))})),zc=Object.assign(wa,{Box:Ba}),jc=_`
    ${e=>`\n        ${Ji.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${Xi["sm-max"](e)}px)\n    `}
`,Rc=_`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${Xi["sm-max"](e)}px)\n    `}
`,Lc=k.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>_`
            ${qi.Util["dashed-default"]({radius:Gi.sm,thickness:qi["width-040"],colour:e.$disabled?Vi["border-disabled"]:Vi.border})}

            background-color: ${e.$disabled?Vi["bg-disabled"]:Vi.bg};
        `}
    height: 14.125rem;
`,Pc=k(rl.Default)`
    width: fit-content;
    margin: 0 ${Zi["spacing-20"]};

    &:disabled {
        border-color: ${Vi["border-strong"]};
    }
`,Hc=k(Bc)`
    position: absolute;
    top: ${Zi["spacing-16"]};
    right: ${Zi["spacing-16"]};

    &:disabled {
        border-color: ${Vi["border-strong"]};
    }
`,Nc=k.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${Zi["spacing-16"]}) * 2);
    height: 100%;
`,Wc=k.div`
    background: ${Vi["bg-primary-subtlest"]};
    border: ${qi["width-010"]} ${qi.solid} ${Vi.border};
    border-radius: ${Gi.sm};
    margin: 0 ${Zi["spacing-20"]};
    padding: ${Zi["spacing-16"]};
    display: flex;
    gap: ${Zi["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,Yc=k(Ea.BodySM)`
    margin-top: ${Zi["spacing-16"]};
`,Vc=k(zc)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,Uc=k.div`
    width: 100%;
    margin: auto;
    padding: ${Zi["layout-xxl"]} ${Zi["layout-sm"]};

    ${jc} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,Kc=k(zc.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${Zi["spacing-16"]};

    ${jc} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${Zi["spacing-8"]};
        --close-button-right-inset: ${Zi["spacing-20"]};
    }
`,qc=k.h2`
    ${Ui["body-baseline-semibold"]}
    color: ${Vi.text};
    margin-bottom: ${Zi["spacing-16"]};
    text-align: center;

    ${jc} {
        ${Ui["body-md-semibold"]}
        margin: ${Zi["spacing-12"]} 0;
    }
`,Zc=k.div`
    width: 100%;
    height: 20rem;
    border-radius: ${Gi.lg};
    overflow: hidden;

    ${jc} {
        border-radius: 0;
        flex: 1;
    }

    ${Rc} {
        background: ${Vi["bg-strong"]};
    }
`,Gc=k.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${Vi["bg-stronger"]};
    margin: auto;

    ${jc} {
        aspect-ratio: 4/3;
    }
    ${Ji.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${Rc} {
        width: auto;
        height: 100%;
    }
`,Qc=k.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${Vi["border-strong"]};
    pointer-events: none;

    ${jc} {
        width: calc(100% - ${Zi["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,Xc=k.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${Zi["spacing-16"]};

    ${Ji.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${Zi["spacing-16"]} ${Zi["spacing-24"]}
            ${Zi["spacing-48"]};
        gap: ${Zi["spacing-16"]};
    }

    ${Rc} {
        flex-direction: row;
        margin: ${Zi["spacing-16"]} ${Zi["spacing-20"]};
    }
`,Jc=k(rl.Default)`
    width: 8.5rem;
    ${Ji.MaxWidth.sm} {
        width: 100%;
    }
    ${Rc} {
        height: 2.5rem;
    }
`,ed=k.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,td=k.canvas`
    cursor: crosshair;
`,rd=w((()=>Ee(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.8d290011.js")).ESignatureCanvas}})))),nd=n=>{const{description:o,id:i,loadingProgress:l,loadingLabel:c="Uploading...",onChange:d,value:u,disabled:f}=n,p=Fe(n,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[m,b]=s(!1),v=a(null),[y,x]=s(u),w=g(F),C=Xi["sm-max"]({theme:w}),S=Ae.useMediaQuery({maxWidth:C}),D=Ae.useMediaQuery({maxHeight:C,orientation:"landscape"}),k=()=>{var e;null===(e=v.current)||void 0===e||e.clear()},_=()=>{if(v.current){const e=v.current.export();x(e),b(!1),null==d||d(e)}};h((()=>{x(u)}),[u]);return t("div",Object.assign({},p,{children:[e(Lc,{$disabled:f,children:"number"==typeof l?t(Wc,{children:[c&&e(Ea.BodyMD,{children:c}),e(Ic,{progress:null!=l?l:0,"data-testid":`${i||"e-signature"}-progress-bar`})]}):y?t(r,{children:[e(Nc,{src:y,alt:"Signature preview"}),e(Hc,{styleType:"light",onClick:()=>b(!0),id:i,"aria-label":"Edit signature",disabled:f,children:e(ne,{})})]}):e(Pc,{type:"button",styleType:"secondary","aria-label":"Add signature",id:i,onClick:()=>b(!0),disabled:f,children:"Add signature"})}),e(Vc,{"data-testid":"signature-modal",show:m,children:e(Uc,{children:t(Kc,{onClose:()=>b(!1),children:[e(qc,{children:"Signature"}),e(Zc,{children:t(Gc,{children:[e(Qc,{}),e($,{fallback:null,children:m&&e(rd,{ref:v,baseImageDataURL:y})})]})}),t(Xc,{children:[e(Jc,{as:D?Tc.Small:Tc.Default,type:"button",styleType:S&&!D?"light":"link",icon:e(oe,{}),onClick:k,children:"Clear"}),e(Jc,{as:D?rl.Small:rl.Default,type:"button",onClick:_,children:"Save"})]})]})})}),o?e(Yc,{children:o}):null]}))};function od(e,t){return od=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},od(e,t)}function id(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function ad(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function sd(e){return null!==e&&1===e.length?e[0]:e.slice()}function ld(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function cd(e,t){return dd(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function dd(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let ud=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),ld(r.getMouseEventMap())}))}id(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=cd(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),ld(r.getKeyDownEventMap()),id(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),ld(r.getMouseEventMap()),id(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),ld(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),o={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},i={index:t,value:sd(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(o["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(i)),r.props.renderThumb(o,i)},r.renderTrack=(e,t,n)=>{const o={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},i={index:e,value:sd(r.state.value)};return r.props.renderTrack(o,i)};let n=ad(t.value);n.length||(n=ad(t.defaultValue)),r.pendingResizeTimeouts=[];const i=[];for(let e=0;e<n.length;e+=1)n[e]=cd(n[e],t),i.push(e);return r.resizeObserver=null,r.resizeElementRef=o.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:i},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,od(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=ad(e.value);return r.length?t.pending?null:{value:r.map((t=>cd(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return sd(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,o=n.length;for(let i=0;i<o;i+=1){const o=this.calcOffset(n[i]),a=Math.abs(e-o);a<t&&(t=a,r=i)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return cd(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),o=e[r],i=n[this.posMaxKey()],a=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=o-s,c=Math.abs(i-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],o=r[this.posMinKey()];let i=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:o));return this.props.invert&&(i=this.state.sliderLength-i),i-=this.state.thumbSize/2,i},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),o=cd(this.calcValue(r),this.props),i=this.state.value.slice();i[n]=o;for(let e=0;e<i.length-1;e+=1)if(i[e+1]-i[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:i},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=cd(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=cd(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,o=t[r];if(e===o)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:i,max:a,min:s,minDistance:l}=this.props;if(!i){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,i&&n>1&&(e>o?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const i=n-o*r;t[e-1-o]>i&&(t[e-1-o]=i)}}(n,t,l,a)):e<o&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const e=n+o*r;t[o]<e&&(t[o]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,o;for(n=r,o=e[n]+t;null!==e[n+1]&&o>e[n+1];n+=1,o=e[n]+t)e[n+1]=dd(o,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,o=e[n]-t;null!==e[n-1]&&o<e[n-1];n-=1,o=e[n]-t)e[n-1]=dd(o,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](sd(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return o.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,i,a)},t}(o.Component);ud.displayName="ReactSlider",ud.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>o.createElement("div",e),renderTrack:e=>o.createElement("div",e),renderMark:e=>o.createElement("span",e)};var hd=ud;const fd=k.div`
    isolation: isolate;
`,pd=k.div`
    margin-top: ${Zi["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${Zi["spacing-8"]};
`,gd=k.div`
    margin-bottom: ${Zi["spacing-8"]};
`,md=k(Ea.BodyBL)`
    overflow-wrap: anywhere;
`,bd=k(hd)`
    height: 0.875rem;
`,vd=k.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${e=>e.$disabled?_`
                cursor: not-allowed;
            `:e.$readOnly?void 0:_`
                cursor: grab;
                &:active {
                    cursor: grabbing;
                }
            `}

    &:after {
        content: "";
        display: block;
        height: 0.875rem;
        width: 0.875rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: ${Vi.bg};
        box-shadow: ${Qi["sm-subtle"]};
        border: ${qi["width-010"]} ${qi.solid}
            ${e=>e.$disabled?Vi["border-selected-disabled"]:Vi["border-strong"]};
        border-radius: ${Gi.full};
    }
`,yd=k.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    &:focus ${vd}:after {
        outline-offset: -1px;
        outline: ${qi["width-040"]} ${qi.solid}
            ${Vi["border-selected"]};
    }
`,xd=k.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${Gi.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Vi["border-strong"](e)};
`,wd=r=>{var{value:n,min:o=0,max:i=100,step:a=1,minRange:l,numOfThumbs:c=2,colors:d,disabled:u,readOnly:f,ariaLabels:p,showSliderLabels:g,sliderLabelPrefix:m,sliderLabelSuffix:b,showIndicatorLabel:v,indicatorLabelPrefix:y,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:$,onChangeEnd:C}=r,S=Fe(r,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[D,k]=s(F()),_=function(){const e=function(){const e=u||f?Vi["border-disabled"]:Vi["border-strong"],t=u||f?Vi["border-selected-disabled"]:Vi["border-selected"];if(1===c)return[t,e];const r=[];r.push(e);for(let e=0;e<c-1;e++)r.push(t);return r.push(e),r}();return new Array(c+1).fill(0).map(((t,r)=>(null==d?void 0:d[r])||e[r]))}();h((()=>{n!==D&&k(F())}),[n]);function F(){if(n&&n.length===c)return n;const e=[];for(let t=0;t<c;t++)e.push(o+a*t);return e}const E=e=>w?w(e):t(md,{children:[m,e,b]});return t(fd,Object.assign({},S,{children:[v&&e(gd,{children:(()=>{let e="";if(1===D.length)e=`${D[0]}`;else if(2===D.length)e=`${D[0]} - ${D[1]}`;else if(D.length>2){e=`${Math.min(...D)} - ${Math.max(...D)}`}return t(md,{children:[y,e,x]})})()}),e(bd,{step:a,min:o,max:i,value:D,disabled:u||f,onChange:(e,t)=>{if("number"==typeof e){const t=[e];k(t),null==$||$(t)}else{if(t>-1&&D[t]===e[t])return;const r=[...e];k(r),null==$||$(r)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];k(t),null==C||C(t)}else{const t=[...e];k(t),null==C||C(t)}},minDistance:l,ariaLabel:p,renderThumb:(t,r)=>e(yd,Object.assign({"data-testid":`slider-thumb-${r.index}`},t,{tabIndex:u?void 0:t.tabIndex,children:e(vd,{$disabled:u,$readOnly:f})})),renderTrack:(t,r)=>e(xd,Object.assign({"data-testid":`slider-track-${r.index}`},t,{$color:_[r.index]}))}),g&&t(pd,{children:[e("div",{children:E(o)}),e("div",{children:E(i)})]})]}))},$d=k.div`
    display: flex;
    margin-bottom: ${Zi["spacing-16"]};
    align-items: baseline;
`,Cd=k.div`
    margin: 0 0.5rem;
`,Sd=k.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,Dd=k.div`
    flex: 1;
    border-radius: ${Gi.sm} ${Gi.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=Vi["bg-strongest"];return e.$disabled&&e.$selected?t=Vi["bg-selected-stronger-disabled"]:e.$disabled?t=Vi["bg-disabled"]:e.$selected&&(t=Vi["bg-selected-stronger"]),_`
            background-color: ${t};
        `}}
`,kd=k(wd)`
    margin-top: -0.3125rem;
`,_d=n=>{var{bins:o=[],interval:i,disabled:a,readOnly:l,value:c,showRangeLabels:d,rangeLabelPrefix:u,rangeLabelSuffix:f,ariaLabels:p,onChange:g,onChangeEnd:m,renderEmptyView:b,renderRangeLabel:y}=n,x=Fe(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=o.map((e=>e.count)),$=Math.max(...w),C=o.map((e=>e.minValue)),S=Math.max(...C),D=Math.min(...C),[k,_]=s(T()),F=v((()=>{const e=[...o].sort(((e,t)=>e.minValue-t.minValue)),t=(S-D)/i+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===D+i*n));t?r.push(t):r.push({count:0,minValue:D+i*n})}return r}),[o,i]);h((()=>{c!==k&&_(T())}),[c]);const E=e=>{const[t,r]=e,n=[t,r];_(n),null==g||g(n)},O=e=>{const[t,r]=e,n=[t,r];_(n),null==m||m(n)};function T(){return null!=c?c:[D,D+i]}const I=e=>y?y(e):t(Ea.BodyBL,{children:[u,e,f]});return t("div",Object.assign({},x,{children:[d&&t($d,{children:[I(k[0]),e(Cd,{children:"-"}),I(k[1])]}),F.every((e=>0===e.count))&&b?b():t(r,{children:[e(Sd,{children:F.map(((t,r)=>{const n=t.count/$;return e(Dd,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:t.minValue>=k[0]&&t.minValue<k[1],$disabled:a||l},r)}))}),e(kd,{min:D,max:S+i,step:i,minRange:i,numOfThumbs:2,value:k,disabled:a,readOnly:l,ariaLabels:p,onChange:E,onChangeEnd:O})]})]}))},Fd=k(oc)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&_`
            padding-left: ${e.$visuallyReadOnly?0:Zi["spacing-16"]};
            padding-right: ${e.$visuallyReadOnly||e.$showClear?0:Zi["spacing-16"]};
        `}
`,Ed=k(ic)`
    height: auto;
    padding: ${Zi["spacing-12"]} ${Zi["spacing-16"]};

    cursor: pointer;
    color: ${Vi.icon};

    ${e=>"no-border"===e.$styleType&&_`
            margin-right: -${Zi["spacing-12"]};
        `}
`,Od=k(X)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Td=k.div`
    display: flex;
    width: 100%;
`,Id=k(rc)`
    display: flex;
    align-items: center;
    width: 100%;
`,Md=o.forwardRef(((n,o)=>{var{value:i,spacing:s,type:l,error:c,disabled:d,readOnly:u,onChange:h,onClear:f,allowClear:p=!1,className:g,styleType:m="bordered"}=n,b=Fe(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const v=((e,t)=>"tel"===e&&!!t)(l,s),x=a(null);y(o,(()=>x.current),[]);const w=or({ref:x,formatter:e=>v?it.transformWithSpaces(e,s):e}),$=e=>{h&&(v?S(e):h(e))},C=()=>{f&&f(),x&&x.current&&x.current.focus()},S=e=>{const t=w();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,o=r.replace(/\s/g,"");e.target.value=o,null==h||h(e),n()},D=i?(e=>e?v?it.transformWithSpaces(e,s):e:"")(i):i,k=p&&!d&&!u&&!!i,_=()=>t(r,{children:[e(Fd,Object.assign({"data-testid":"input",ref:x,"aria-disabled":d,value:D,onChange:$,type:l,readOnly:u||d,$showClear:k,$styleType:m,$visuallyReadOnly:u},b)),k&&e(Ed,{onClick:C,type:"button",$styleType:m,children:e(Od,{"aria-hidden":!0})})]});return e(r,{children:"no-border"===m?e(Td,{className:g,children:_()}):e(Id,{$disabled:d,$error:c,$readOnly:u,className:g,children:_()})})})),Ad=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i,"data-error-testid":a,"data-testid":l,layoutType:c,mobileCols:d,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y}=t,x=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]),[w]=s((()=>`form-field-${ot.generate()}`)),$=null!=i?i:w;return e(fs,{id:$,"data-testid":l,label:n,errorMessage:o,disabled:x.disabled,"data-error-testid":a,layoutType:c,mobileCols:d,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(Md,Object.assign({id:`${$}-base`,"data-testid":l?`${l}-base`:void 0,ref:r,error:!!o},x))})})),Bd=k.div`
    font-weight: ${e=>e.$bold?Ui.Spec["weight-semibold"]:Ui.Spec["weight-regular"]};

    ${e=>e.$disabled?_`
                color: ${Vi["text-disabled"]};
            `:e.$selected?_`
                color: ${Vi["text-selected"]};
            `:_`
                color: ${Vi.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&$a(e.$maxLines||2)}
    overflow-wrap: break-word;
`,zd=k.div`
    color: ${Vi["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&$a(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?_`
                    ${Ui["body-md-semibold"]}
                `:_`
                    ${Ui["body-baseline-regular"]}
                `}
`,jd=k.span`
    font-weight: ${Ui.Spec["weight-semibold"]};
`,Rd=k.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Ui["body-md-regular"]:Ui["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return _`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return _`
                    ${Bd} {
                        display: inline;
                    }

                    ${zd} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Ld=k.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,Pd=k.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Hd=({bold:n,displayType:o="inline",label:i,searchTerm:a,maxLines:s=2,selected:l,disabled:c,sublabel:d,truncationType:u="middle",variant:h="default"})=>{const f=g(F),m="small"===h?Ui.Spec["body-size-md"]({theme:f}):Ui.Spec["body-size-baseline"]({theme:f}),b=Ui.Spec["font-family"]({theme:f}),{ref:y,width:x}=er(),w=p((e=>{if("inline"!==o||!x)return!1;return it.getTextWidth(e,`${m} '${b}'`)>x*s-50}),[x,o,m,b,s]),$=v((()=>w(i)),[w,i]),C=v((()=>d&&w(d)),[w,d]),S=n=>{if(!a)return n;const o=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(o),l=s+a.length;return-1===s?n:t(r,{children:[i.slice(0,s),e(jd,{$variant:h,children:i.slice(s,l)}),i.slice(l)]})},D=n=>t(r,{children:[e(Ld,{$maxLines:s,"aria-hidden":!0,children:S(n)}),e(Pd,{$maxLines:s,"aria-hidden":!0,children:S(n)})]});return t(Rd,{ref:y,$labelDisplayType:$||C?"next-line":o,$variant:h,children:[e(Bd,{"aria-label":i,$bold:n,$maxLines:s,$selected:l,$disabled:c,$truncateType:u,children:"middle"===u&&$?D(i):S(i)}),d&&e(zd,{"aria-label":d,$maxLines:s,$truncateType:u,$labelDisplayType:o,children:"middle"===u&&C?D(d):d})]})};var Nd=Nn;var Wd=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var Yd=function(e){return this.__data__.get(e)};var Vd=function(e){return this.__data__.has(e)},Ud=Nn,Kd=Wn,qd=co;var Zd=function(e,t){var r=this.__data__;if(r instanceof Ud){var n=r.__data__;if(!Kd||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new qd(n)}return r.set(e,t),this.size=r.size,this},Gd=Nn,Qd=function(){this.__data__=new Nd,this.size=0},Xd=Wd,Jd=Yd,eu=Vd,tu=Zd;function ru(e){var t=this.__data__=new Gd(e);this.size=t.size}ru.prototype.clear=Qd,ru.prototype.delete=Xd,ru.prototype.get=Jd,ru.prototype.has=eu,ru.prototype.set=tu;var nu=ru;var ou=co,iu=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},au=function(e){return this.__data__.has(e)};function su(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new ou;++t<r;)this.add(e[t])}su.prototype.add=su.prototype.push=iu,su.prototype.has=au;var lu=function(e,t){return e.has(t)},cu=su,du=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},uu=lu;var hu=function(e,t,r,n,o,i){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=i.get(e),d=i.get(t);if(c&&d)return c==t&&d==e;var u=-1,h=!0,f=2&r?new cu:void 0;for(i.set(e,t),i.set(t,e);++u<s;){var p=e[u],g=t[u];if(n)var m=a?n(g,p,u,t,e,i):n(p,g,u,e,t,i);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!du(t,(function(e,t){if(!uu(f,t)&&(p===e||o(p,e,r,n,i)))return f.push(t)}))){h=!1;break}}else if(p!==g&&!o(p,g,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var fu=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var pu=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},gu=ur.Uint8Array,mu=Sn,bu=hu,vu=fu,yu=pu,xu=hr?hr.prototype:void 0,wu=xu?xu.valueOf:void 0;var $u=function(e,t,r,n,o,i,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new gu(e),new gu(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return mu(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=vu;case"[object Set]":var l=1&n;if(s||(s=yu),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=bu(s(e),s(t),n,o,i,a);return a.delete(e),d;case"[object Symbol]":if(wu)return wu.call(e)==wu.call(t)}return!1};var Cu=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},Su=Cu,Du=sr;var ku=function(e,t,r){var n=t(e);return Du(e)?n:Su(n,r(e))};var _u=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i},Fu=function(){return[]},Eu=Object.prototype.propertyIsEnumerable,Ou=Object.getOwnPropertySymbols,Tu=Ou?function(e){return null==e?[]:(e=Object(e),_u(Ou(e),(function(t){return Eu.call(e,t)})))}:Fu;var Iu=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Mu=Cr,Au=Sr;var Bu=function(e){return Au(e)&&"[object Arguments]"==Mu(e)},zu=Sr,ju=Object.prototype,Ru=ju.hasOwnProperty,Lu=ju.propertyIsEnumerable,Pu=Bu(function(){return arguments}())?Bu:function(e){return zu(e)&&Ru.call(e,"callee")&&!Lu.call(e,"callee")},Hu={exports:{}};var Nu=function(){return!1};!function(e,t){var r=ur,n=Nu,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(Hu,Hu.exports);var Wu=Hu.exports,Yu=/^(?:0|[1-9]\d*)$/;var Vu=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Yu.test(e))&&e>-1&&e%1==0&&e<t};var Uu=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Ku=Cr,qu=Uu,Zu=Sr,Gu={};Gu["[object Float32Array]"]=Gu["[object Float64Array]"]=Gu["[object Int8Array]"]=Gu["[object Int16Array]"]=Gu["[object Int32Array]"]=Gu["[object Uint8Array]"]=Gu["[object Uint8ClampedArray]"]=Gu["[object Uint16Array]"]=Gu["[object Uint32Array]"]=!0,Gu["[object Arguments]"]=Gu["[object Array]"]=Gu["[object ArrayBuffer]"]=Gu["[object Boolean]"]=Gu["[object DataView]"]=Gu["[object Date]"]=Gu["[object Error]"]=Gu["[object Function]"]=Gu["[object Map]"]=Gu["[object Number]"]=Gu["[object Object]"]=Gu["[object RegExp]"]=Gu["[object Set]"]=Gu["[object String]"]=Gu["[object WeakMap]"]=!1;var Qu=function(e){return Zu(e)&&qu(e.length)&&!!Gu[Ku(e)]};var Xu=function(e){return function(t){return e(t)}},Ju={exports:{}};!function(e,t){var r=lr,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(Ju,Ju.exports);var eh=Ju.exports,th=Qu,rh=Xu,nh=eh&&eh.isTypedArray,oh=nh?rh(nh):th,ih=Iu,ah=Pu,sh=sr,lh=Wu,ch=Vu,dh=oh,uh=Object.prototype.hasOwnProperty;var hh=function(e,t){var r=sh(e),n=!r&&ah(e),o=!r&&!n&&lh(e),i=!r&&!n&&!o&&dh(e),a=r||n||o||i,s=a?ih(e.length,String):[],l=s.length;for(var c in e)!t&&!uh.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||ch(c,l))||s.push(c);return s},fh=Object.prototype;var ph=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||fh)};var gh=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),mh=ph,bh=gh,vh=Object.prototype.hasOwnProperty;var yh=function(e){if(!mh(e))return bh(e);var t=[];for(var r in Object(e))vh.call(e,r)&&"constructor"!=r&&t.push(r);return t},xh=jr,wh=Uu;var $h=function(e){return null!=e&&wh(e.length)&&!xh(e)},Ch=hh,Sh=yh,Dh=$h;var kh=function(e){return Dh(e)?Ch(e):Sh(e)},_h=ku,Fh=Tu,Eh=kh;var Oh=function(e){return _h(e,Eh,Fh)},Th=Object.prototype.hasOwnProperty;var Ih=function(e,t,r,n,o,i){var a=1&r,s=Oh(e),l=s.length;if(l!=Oh(t).length&&!a)return!1;for(var c=l;c--;){var d=s[c];if(!(a?d in t:Th.call(t,d)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var f=!0;i.set(e,t),i.set(t,e);for(var p=a;++c<l;){var g=e[d=s[c]],m=t[d];if(n)var b=a?n(m,g,d,t,e,i):n(g,m,d,e,t,i);if(!(void 0===b?g===m||o(g,m,r,n,i):b)){f=!1;break}p||(p="constructor"==d)}if(f&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(f=!1)}return i.delete(e),i.delete(t),f},Mh=rn(ur,"DataView"),Ah=Wn,Bh=rn(ur,"Promise"),zh=rn(ur,"Set"),jh=rn(ur,"WeakMap"),Rh=Cr,Lh=Nr,Ph="[object Map]",Hh="[object Promise]",Nh="[object Set]",Wh="[object WeakMap]",Yh="[object DataView]",Vh=Lh(Mh),Uh=Lh(Ah),Kh=Lh(Bh),qh=Lh(zh),Zh=Lh(jh),Gh=Rh;(Mh&&Gh(new Mh(new ArrayBuffer(1)))!=Yh||Ah&&Gh(new Ah)!=Ph||Bh&&Gh(Bh.resolve())!=Hh||zh&&Gh(new zh)!=Nh||jh&&Gh(new jh)!=Wh)&&(Gh=function(e){var t=Rh(e),r="[object Object]"==t?e.constructor:void 0,n=r?Lh(r):"";if(n)switch(n){case Vh:return Yh;case Uh:return Ph;case Kh:return Hh;case qh:return Nh;case Zh:return Wh}return t});var Qh=Gh,Xh=nu,Jh=hu,ef=$u,tf=Ih,rf=Qh,nf=sr,of=Wu,af=oh,sf="[object Arguments]",lf="[object Array]",cf="[object Object]",df=Object.prototype.hasOwnProperty;var uf=function(e,t,r,n,o,i){var a=nf(e),s=nf(t),l=a?lf:rf(e),c=s?lf:rf(t),d=(l=l==sf?cf:l)==cf,u=(c=c==sf?cf:c)==cf,h=l==c;if(h&&of(e)){if(!of(t))return!1;a=!0,d=!1}if(h&&!d)return i||(i=new Xh),a||af(e)?Jh(e,t,r,n,o,i):ef(e,t,l,r,n,o,i);if(!(1&r)){var f=d&&df.call(e,"__wrapped__"),p=u&&df.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return i||(i=new Xh),o(g,m,r,n,i)}}return!!h&&(i||(i=new Xh),tf(e,t,r,n,o,i))},hf=Sr;var ff=function e(t,r,n,o,i){return t===r||(null==t||null==r||!hf(t)&&!hf(r)?t!=t&&r!=r:uf(t,r,n,o,e,i))},pf=nu,gf=ff;var mf=function(e,t,r,n){var o=r.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var s=r[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=r[o])[0],c=e[l],d=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new pf;if(n)var h=n(c,d,l,e,t,u);if(!(void 0===h?gf(d,c,3,n,u):h))return!1}}return!0},bf=Mr;var vf=function(e){return e==e&&!bf(e)},yf=vf,xf=kh;var wf=function(e){for(var t=xf(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,yf(o)]}return t};var $f=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Cf=mf,Sf=wf,Df=$f;var kf=function(e,t){return null!=e&&t in Object(e)},_f=Eo,Ff=Pu,Ef=sr,Of=Vu,Tf=Uu,If=To;var Mf=function(e,t,r){for(var n=-1,o=(t=_f(t,e)).length,i=!1;++n<o;){var a=If(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Tf(o)&&Of(a,o)&&(Ef(e)||Ff(e))},Af=kf,Bf=Mf;var zf=ff,jf=zo,Rf=function(e,t){return null!=e&&Bf(e,t,Af)},Lf=Ir,Pf=vf,Hf=$f,Nf=To;var Wf=function(e){return function(t){return null==t?void 0:t[e]}},Yf=Ao;var Vf=Wf,Uf=function(e){return function(t){return Yf(t,e)}},Kf=Ir,qf=To;var Zf=function(e){var t=Sf(e);return 1==t.length&&t[0][2]?Df(t[0][0],t[0][1]):function(r){return r===e||Cf(r,e,t)}},Gf=function(e,t){return Lf(e)&&Pf(t)?Hf(Nf(e),t):function(r){var n=jf(r,e);return void 0===n&&n===t?Rf(r,e):zf(t,n,3)}},Qf=function(e){return e},Xf=sr,Jf=function(e){return Kf(e)?Vf(qf(e)):Uf(e)};var ep=function(e){return"function"==typeof e?e:null==e?Qf:"object"==typeof e?Xf(e)?Gf(e[0],e[1]):Zf(e):Jf(e)},tp=ep,rp=$h,np=kh;var op=function(e){return function(t,r,n){var o=Object(t);if(!rp(t)){var i=tp(r);t=np(t),r=function(e){return i(o[e],e,o)}}var a=e(t,r,n);return a>-1?o[i?t[a]:a]:void 0}};var ip=/\s/;var ap=function(e){for(var t=e.length;t--&&ip.test(e.charAt(t)););return t},sp=/^\s+/;var lp=function(e){return e?e.slice(0,ap(e)+1).replace(sp,""):e},cp=Mr,dp=_r,up=/^[-+]0x[0-9a-f]+$/i,hp=/^0b[01]+$/i,fp=/^0o[0-7]+$/i,pp=parseInt;var gp=function(e){if("number"==typeof e)return e;if(dp(e))return NaN;if(cp(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=cp(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=lp(e);var r=hp.test(e);return r||fp.test(e)?pp(e.slice(2),r?2:8):up.test(e)?NaN:+e},mp=gp,bp=1/0;var vp=function(e){return e?(e=mp(e))===bp||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var yp=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},xp=ep,wp=function(e){var t=vp(e),r=t%1;return t==t?r?t-r:t:0},$p=Math.max;var Cp=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:wp(r);return o<0&&(o=$p(n+o,0)),yp(e,xp(t),o)},Sp=Te(Cp),Dp=Te(op(Cp)),kp=ff;var _p=Te((function(e,t){return kp(e,t)}));function Fp(e){return()=>e}function Ep(e){e()}function Op(e,t){return r=>e(t(r))}function Tp(e,t){return()=>e(t)}function Ip(e,t){return r=>e(t,r)}function Mp(e){return void 0!==e}function Ap(){}function Bp(e,t){return t(e),e}function zp(e,t){return t(e)}function jp(...e){return e}function Rp(e,t){return e(1,t)}function Lp(e,t){e(0,t)}function Pp(e){e(2)}function Hp(e){return e(4)}function Np(e,t){return Rp(e,Ip(t,0))}function Wp(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function Yp(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function Vp(e,t){return e===t}function Up(e=Vp){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function Kp(e){return t=>r=>{e(r)&&t(r)}}function qp(e){return t=>Op(t,e)}function Zp(e){return t=>()=>{t(e)}}function Gp(e,...t){const r=function(...e){return t=>e.reduceRight(zp,t)}(...t);return(t,n)=>{switch(t){case 2:return void Pp(e);case 1:return Rp(e,r(n))}}}function Qp(e,t){return r=>n=>{r(t=e(t,n))}}function Xp(e){return t=>r=>{e>0?e--:t(r)}}function Jp(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function eg(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);Rp(e,(e=>{const s=r;r|=a,t[i]=e,s!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const a=()=>{e([i].concat(t))};r===o?a():n=a}}function tg(e){let t=e;const r=ng();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function rg(e,t){return Bp(tg(t),(t=>Np(e,t)))}function ng(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function og(e){return Bp(ng(),(t=>Np(e,t)))}function ig(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:ag(),singleton:r}}const ag=()=>Symbol();function sg(...e){const t=ng(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);Rp(e,(e=>{r[i]=e,n|=a,n===o&&Lp(t,r)}))})),function(e,i){switch(e){case 2:return void Pp(t);case 1:return n===o&&i(r),Rp(t,i)}}}function lg(e,t=Vp){return Gp(e,Up(t))}function cg(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(Ep)}}(...e.map((e=>Rp(e,r))))}}}var dg=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(dg||{});const ug={0:"debug",3:"error",1:"log",2:"warn"},hg=ig((()=>{const e=tg(3);return{log:tg(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:Hp(e))&&console[ug[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function fg(e,t,r){return pg(e,t,r).callbackRef}function pg(e,t,r){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function gg(e,t,r,n,i,a,s,l,c){const d=o.useCallback((r=>{const o=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),c=t(o,r);if(0===c&&n("Zero-sized element, this should not happen",{child:o},dg.ERROR),c===l)continue;const d=i[i.length-1];0===i.length||d.size!==c||d.endIndex!==s-1?i.push({endIndex:s,size:c,startIndex:s}):i[i.length-1].endIndex++}return i}(r.children,t,l?"offsetWidth":"offsetHeight",i);let c=r.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const d="window"===c.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:d?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?c.scrollLeft:c.scrollTop,h=s?l?s.scrollWidth:s.scrollHeight:d?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?c.scrollWidth:c.scrollHeight,f=s?l?s.offsetWidth:s.offsetHeight:d?l?window.innerWidth:window.innerHeight:l?c.offsetWidth:c.offsetHeight;n({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:f}),null==a||a(l?mg("column-gap",getComputedStyle(r).columnGap,i):mg("row-gap",getComputedStyle(r).rowGap,i)),null!==o&&e(o)}),[e,t,i,a,s,n]);return pg(d,r,c)}function mg(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,dg.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function bg(e,t,r){const n=o.useRef(null),i=o.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let a,s;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;s=e.height-Math.max(0,r),a=r+t.scrollTop}else s=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:a,ref:s}=pg(i,!0,r),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),a}const vg=ig((()=>{const e=ng(),t=ng(),r=tg(0),n=ng(),o=tg(0),i=ng(),a=ng(),s=tg(0),l=tg(0),c=tg(0),d=tg(0),u=ng(),h=ng(),f=tg(!1),p=tg(!1),g=tg(!1);return Np(Gp(e,qp((({scrollTop:e})=>e))),t),Np(Gp(e,qp((({scrollHeight:e})=>e))),a),Np(t,o),{deviation:r,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:d,headerHeight:s,horizontalDirection:p,scrollBy:h,scrollContainerState:e,scrollHeight:a,scrollingInProgress:f,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:g,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),yg={lvl:0};function xg(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let a=1;a<r;a++){const{index:r,value:s}=t(e[a]);i.push({end:r-1,start:n,value:o}),n=r,o=s}return i.push({end:1/0,start:n,value:o}),i}function wg(e){return e===yg}function $g(e,t){if(!wg(e))return t===e.k?e.v:t<e.k?$g(e.l,t):$g(e.r,t)}function Cg(e,t,r="k"){if(wg(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=Cg(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return Cg(e.l,t,r)}function Sg(e,t,r){return wg(e)?Bg(t,r,1):t===e.k?Tg(e,{k:t,v:r}):t<e.k?zg(Tg(e,{l:Sg(e.l,t,r)})):zg(Tg(e,{r:Sg(e.r,t,r)}))}function Dg(){return yg}function kg(e,t,r){if(wg(e))return[];return function(e){return xg(e,(({k:e,v:t})=>({index:e,value:t})))}(Eg(e,Cg(e,t)[0],r))}function _g(e,t){if(wg(e))return yg;const{k:r,l:n,r:o}=e;if(t===r){if(wg(n))return o;if(wg(o))return n;{const[t,r]=Ag(n);return Og(Tg(e,{k:t,l:Ig(n),v:r}))}}return Og(Tg(e,t<r?{l:_g(n,t)}:{r:_g(o,t)}))}function Fg(e){return wg(e)?[]:[...Fg(e.l),{k:e.k,v:e.v},...Fg(e.r)]}function Eg(e,t,r){if(wg(e))return[];const{k:n,l:o,r:i,v:a}=e;let s=[];return n>t&&(s=s.concat(Eg(o,t,r))),n>=t&&n<=r&&s.push({k:n,v:a}),n<=r&&(s=s.concat(Eg(i,t,r))),s}function Og(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(Mg(t))return jg(Tg(e,{lvl:r-1}));if(!wg(t)&&!wg(t.r))return Tg(t.r,{l:Tg(t,{r:t.r.l}),lvl:r,r:Tg(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(Mg(e))return Rg(Tg(e,{lvl:r-1}));if(wg(n)||wg(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=Mg(t)?n.lvl-1:n.lvl;return Tg(t,{l:Tg(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:Rg(Tg(n,{l:t.r,lvl:o}))})}}function Tg(e,t){return Bg(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function Ig(e){return wg(e.r)?e.l:Og(Tg(e,{r:Ig(e.r)}))}function Mg(e){return wg(e)||e.lvl>e.r.lvl}function Ag(e){return wg(e.r)?[e.k,e.v]:Ag(e.r)}function Bg(e,t,r,n=yg,o=yg){return{k:e,l:n,lvl:r,r:o,v:t}}function zg(e){return Rg(jg(e))}function jg(e){const{l:t}=e;return wg(t)||t.lvl!==e.lvl?e:Tg(t,{r:Tg(e,{l:t.r})})}function Rg(e){const{lvl:t,r:r}=e;return wg(r)||wg(r.r)||r.lvl!==t||r.r.lvl!==t?e:Tg(r,{l:Tg(e,{r:r.l}),lvl:t+1})}function Lg(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function Pg(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const Hg=ig((()=>({recalcInProgress:tg(!1)})),[],{singleton:!0});function Ng(e,t,r){return e[Wg(e,t,r)]}function Wg(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),a=r(e[i],t);if(0===a)return i;if(-1===a){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function Yg(e,t){return Math.round(e.getBoundingClientRect()[t])}function Vg(e){return!wg(e.groupOffsetTree)}function Ug({index:e},t){return t===e?0:t<e?-1:1}function Kg({offset:e},t){return t===e?0:t<e?-1:1}function qg(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=Ng(t,e,Ug),a=e-n,s=i*a+(a-1)*r+o;return s>0?s+r:s}function Zg(e,t){if(!Vg(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function Gg(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=Zg("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function Qg(e,t,r,n=0){return n>0&&(t=Math.max(t,Ng(e,n,Ug).offset)),xg(function(e,t,r,n){const o=Wg(e,t,n),i=Wg(e,r,n,o);return e.slice(o,i+1)}(e,t,r,Kg),tm)}function Xg(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,dg.DEBUG);const i=e.sizeTree;let a=i,s=0;if(r.length>0&&wg(i)&&2===t.length){const e=t[0].size,n=t[1].size;a=r.reduce(((t,r)=>Sg(Sg(t,r,e),r+1,n)),a)}else[a,s]=function(e,t){let r=wg(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),wg(e)){e=Sg(e,0,o);continue}const a=kg(e,i-1,t+1);if(a.some(rm(n)))continue;let s=!1,l=!1;for(const{end:r,start:n,value:i}of a)s?(t>=n||o===i)&&(e=_g(e,n)):(l=i!==o,s=!0),r>t&&t>=n&&i!==o&&(e=Sg(e,t+1,i));l&&(e=Sg(e,i,o))}return[e,r]}(a,t);if(a===i)return e;const{lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u}=em(e.offsetTree,s,a,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>Sg(e,t,qg(t,u,o))),Dg()),lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u,sizeTree:a}}function Jg(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function em(e,t,r,n){let o=e,i=0,a=0,s=0,l=0;if(0!==t){l=Wg(o,t-1,Ug),s=o[l].offset;const e=Cg(r,t-1);i=e[0],a=e[1],o.length&&o[l].size===Cg(r,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of kg(r,t,1/0)){const t=e-i,r=t*a+s+t*n;o.push({index:e,offset:r,size:l}),i=e,s=r,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function tm(e){return{index:e.index,value:e}}function rm(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const nm={offsetHeight:"height",offsetWidth:"width"},om=ig((([{log:e},{recalcInProgress:t}])=>{const r=ng(),n=ng(),o=rg(n,0),i=ng(),a=ng(),s=tg(0),l=tg([]),c=tg(void 0),d=tg(void 0),u=tg(((e,t)=>Yg(e,nm[t]))),h=tg(void 0),f=tg(0),p={groupIndices:[],groupOffsetTree:Dg(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:Dg()},g=rg(Gp(r,eg(l,e,f),Qp(Xg,p),Up()),p),m=rg(Gp(l,Up(),Qp(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),qp((({prev:e})=>e))),[]);Np(Gp(l,Kp((e=>e.length>0)),eg(g,f),qp((([e,t,r])=>{const n=e.reduce(((e,n,o)=>Sg(e,n,qg(n,t.offsetTree,r)||o)),Dg());return{...t,groupIndices:e,groupOffsetTree:n}}))),g),Np(Gp(n,eg(g),Kp((([e,{lastIndex:t}])=>e<t)),qp((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),Np(c,d);const b=rg(Gp(c,qp((e=>void 0===e))),!0);Np(Gp(d,Kp((e=>void 0!==e&&wg(Hp(g).sizeTree))),qp((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=og(Gp(r,eg(g),Qp((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:p}),qp((e=>e.changed))));Rp(Gp(s,Qp(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),qp((e=>e.diff))),(e=>{const{groupIndices:r}=Hp(g);if(e>0)Lp(t,!0),Lp(i,e+Jg(e,r));else if(e<0){const t=Hp(m);t.length>0&&(e-=Jg(-e,t)),Lp(a,e)}})),Rp(Gp(s,eg(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},dg.ERROR)}));const y=og(i);Np(Gp(i,eg(g),qp((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=$g(t.sizeTree,0);let i=0,a=0;for(;i<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=Fg(t.sizeTree);return i!==e&&s.shift(),s.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return Fg(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=og(Gp(a,eg(g,f),qp((([e,{offsetTree:t},r])=>qg(-e,t,r)))));return Np(Gp(a,eg(g,f),qp((([e,t,r])=>{if(t.groupIndices.length>0){if(wg(t.sizeTree))return t;let n=Dg();const o=Hp(m);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(n=Fg(t.sizeTree).reduce(((t,{k:r,v:n})=>Sg(t,Math.max(0,r+e),n)),n),i!==-e){n=Sg(n,0,$g(t.sizeTree,s));n=Sg(n,1,Cg(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...em(t.offsetTree,0,n,r)}}{const n=Fg(t.sizeTree).reduce(((t,{k:r,v:n})=>Sg(t,Math.max(0,r+e),n)),Dg());return{...t,sizeTree:n,...em(t.offsetTree,0,n,r)}}}))),g),{beforeUnshiftWith:y,data:h,defaultItemSize:d,firstItemIndex:s,fixedItemSize:c,gap:f,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:r,sizes:g,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),jp(hg,Hg),{singleton:!0});function im(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const am=ig((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=ng(),a=ng(),s=og(Gp(i,qp(im)));return Np(Gp(s,qp((e=>e.totalCount))),r),Np(Gp(s,qp((e=>e.groupIndices))),e),Np(Gp(sg(o,t,n),Kp((([e,t])=>Vg(t))),qp((([e,t,r])=>Cg(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),Up(),qp((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),jp(om,vg)),sm=ig((([{log:e}])=>{const t=tg(!1),r=og(Gp(t,Kp((e=>e)),Up()));return Rp(t,(t=>{t&&Hp(e)("props updated",{},dg.DEBUG)})),{didMount:r,propsReady:t}}),jp(hg),{singleton:!0}),lm=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function cm(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!lm)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const dm=ig((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:d,viewportHeight:u},{log:h}])=>{const f=ng(),p=ng(),g=tg(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),Lp(l,!1)}return Np(Gp(f,eg(r,u,n,g,s,a,h),eg(e,i,o),qp((([[e,r,n,o,i,a,s,c],u,h,g])=>{const x=cm(e),{align:w,behavior:$,offset:C}=x,S=o-1,D=Gg(x,r,S);let k=qg(D,r.offsetTree,u)+a;"end"===w?(k+=h+Cg(r.sizeTree,D)[1]-n+g,D===S&&(k+=s)):"center"===w?k+=(h+Cg(r.sizeTree,D)[1]-n+g)/2:k-=i,C&&(k+=C);const _=t=>{y(),t?(c("retrying to scroll to",{location:e},dg.DEBUG),Lp(f,e)):(Lp(p,!0),c("list did not change, scroll successful",{},dg.DEBUG))};if(y(),"smooth"===$){let e=!1;v=Rp(t,(t=>{e=e||t})),m=Wp(d,(()=>{_(e)}))}else m=Wp(Gp(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),_);return b=setTimeout((()=>{y()}),1200),Lp(l,!0),c("scrolling from index to",{behavior:$,index:D,top:k},dg.DEBUG),{behavior:$,top:k}}))),c),{scrollTargetReached:p,scrollToIndex:f,topListHeight:g}}),jp(om,vg,hg),{singleton:!0});function um(e,t){0==e?t():requestAnimationFrame((()=>{um(e-1,t)}))}function hm(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const fm=ig((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=tg(!0),l=tg(0),c=tg(!0);return Np(Gp(a,eg(l),Kp((([e,t])=>!!t)),Zp(!1)),s),Np(Gp(a,eg(l),Kp((([e,t])=>!!t)),Zp(!1)),c),Rp(Gp(sg(t,a),eg(s,r,e,c),Kp((([[,e],t,{sizeTree:r},n,o])=>e&&(!wg(r)||Mp(n))&&!t&&!o)),eg(l)),(([,e])=>{Wp(o,(()=>{Lp(c,!0)})),um(4,(()=>{Wp(n,(()=>{Lp(s,!0)})),Lp(i,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),jp(om,vg,dm,sm),{singleton:!0});function pm(e,t){return Math.abs(e-t)<1.01}const gm="up",mm="down",bm={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},vm=ig((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const a=tg(!1),s=tg(!0),l=ng(),c=ng(),d=tg(4),u=tg(0),h=rg(Gp(cg(Gp(lg(o),Xp(1),Zp(!0)),Gp(lg(o),Xp(1),Zp(!1),Yp(100))),Up()),!1),f=rg(Gp(cg(Gp(r,Zp(!0)),Gp(r,Zp(!1),Yp(200))),Up()),!1);Np(Gp(sg(lg(o),lg(u)),qp((([e,t])=>e<=t)),Up()),s),Np(Gp(s,Jp(50)),c);const p=og(Gp(sg(n,lg(i),lg(t),lg(e),lg(d)),Qp(((e,[{scrollHeight:t,scrollTop:r},n,o,i,a])=>{const s={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-a){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),bm),Up(((e,t)=>e&&e.atBottom===t.atBottom)))),g=rg(Gp(n,Qp(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(pm(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),Kp((e=>e.changed)),qp((e=>e.jump))),0);Np(Gp(p,qp((e=>e.atBottom))),a),Np(Gp(a,Jp(50)),l);const m=tg(mm);Np(Gp(n,qp((({scrollTop:e})=>e)),Up(),Qp(((e,t)=>Hp(f)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?gm:mm,prevScrollTop:t}),{direction:mm,prevScrollTop:0}),qp((e=>e.direction))),m),Np(Gp(n,Jp(50),Zp("none")),m);const b=tg(0);return Np(Gp(h,Kp((e=>!e)),Zp(0)),b),Np(Gp(o,Jp(100),eg(h),Kp((([e,t])=>!!t)),Qp((([e,t],[r])=>[t,r]),[0,0]),qp((([e,t])=>t-e))),b),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:d,atTopStateChange:c,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:h,lastJumpDueToItemResize:g,scrollDirection:m,scrollVelocity:b}}),jp(vg)),ym="top",xm="bottom",wm="none";function $m(e,t,r){return"number"==typeof e?r===gm&&t===ym||r===mm&&t===xm?e:0:r===gm?t===ym?e.main:e.reverse:t===xm?e.main:e.reverse}function Cm(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const Sm=ig((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=ng(),a=tg(0),s=tg(0),l=tg(0),c=rg(Gp(sg(lg(n),lg(o),lg(r),lg(i,Pg),lg(l),lg(a),lg(t),lg(e),lg(s)),qp((([e,t,r,[n,o],i,a,s,l,c])=>{const d=e-l,u=a+s,h=Math.max(r-d,0);let f=wm;const p=Cm(c,ym),g=Cm(c,xm);return n-=l,o+=r+s,(n+=r+s)>e+u-p&&(f=gm),(o-=l)<e-h+t+g&&(f=mm),f!==wm?[Math.max(d-r-$m(i,ym,f)-p,0),d-h-s+t+$m(i,xm,f)+g]:null})),Kp((e=>null!=e)),Up(Pg)),[0,0]);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:c}}),jp(vg),{singleton:!0});const Dm={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function km(e,t,r,n,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let c=0,d=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];d=t.offset+t.size}const u=r-a,h=c,f=s+u*l+(u-1)*n-d;return{bottom:d,firstItemIndex:i,items:Fm(e,o,i),offsetBottom:f,offsetTop:c,top:h,topItems:Fm(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function _m(e,t,r,n,o,i){let a=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=hm(t,s);return km(Array.from({length:s}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],s,o,r,n)}function Fm(e,t,r){if(0===e.length)return[];if(!Vg(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],a=kg(t.groupOffsetTree,n,o);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const Em=ig((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:d},{topListHeight:u},h,{didMount:f},{recalcInProgress:p}])=>{const g=tg([]),m=tg(0),b=ng();Np(i.topItemsIndexes,g);const v=rg(Gp(sg(f,p,lg(l,Pg),lg(o),lg(n),lg(c),d,lg(g),lg(t),lg(r),e),Kp((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),qp((([,,[e,t],r,n,o,i,a,s,l,c])=>{const d=n,{offsetTree:u,sizeTree:h}=d,f=Hp(m);if(0===r)return{...Dm,totalCount:r};if(0===e&&0===t)return 0===f?{...Dm,totalCount:r}:_m(f,o,n,s,l,c||[]);if(wg(h))return f>0?null:km(function(e,t,r){if(Vg(t)){const n=Zg(e,t);return[{index:Cg(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(hm(o,r),d,c),[],r,l,d,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let r=0;for(const n of kg(h,e,t)){const o=n.value,i=Math.max(n.start,e),a=Math.min(n.end,t);for(let e=i;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:r,size:o}),r+=o}}if(!i)return km([],p,r,l,d,s);const g=a.length>0?a[a.length-1]+1:0,b=Qg(u,e,t,g);if(0===b.length)return null;const v=r-1;return km(Bp([],(r=>{for(const n of b){const o=n.value;let i=o.offset,a=n.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const t=a-n.start;i+=t*s+t*l}a<g&&(i+=(g-a)*s,a=g);const d=Math.min(n.end,v);for(let e=a;e<=d&&!(i>=t);e++)r.push({data:null==c?void 0:c[e],index:e,offset:i,size:s}),i+=s+l}})),p,r,l,d,s)})),Kp((e=>null!==e)),Up()),Dm);Np(Gp(e,Kp(Mp),qp((e=>null==e?void 0:e.length))),o),Np(Gp(v,qp((e=>e.topListHeight))),u),Np(u,s),Np(Gp(v,qp((e=>[e.top,e.bottom]))),a),Np(Gp(v,qp((e=>e.items))),b);const y=og(Gp(v,Kp((({items:e})=>e.length>0)),eg(o,e),Kp((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),qp((([,e,t])=>[e-1,t])),Up(Pg),qp((([e])=>e)))),x=og(Gp(v,Jp(200),Kp((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),qp((({items:e})=>e[0].index)),Up())),w=og(Gp(v,Kp((({items:e})=>e.length>0)),qp((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),Up(Lg)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:g,...h}}),jp(om,am,Sm,fm,dm,vm,sm,Hg),{singleton:!0}),Om=ig((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=ng(),a=rg(Gp(sg(r,e,n,t,o),qp((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return Np(lg(a),i),{totalListHeight:a,totalListHeightChanged:i}}),jp(vg,Em),{singleton:!0}),Tm=ig((([{viewportHeight:e},{totalListHeight:t}])=>{const r=tg(!1),n=rg(Gp(sg(r,e,t),Kp((([e])=>e)),qp((([,e,t])=>Math.max(0,e-t))),Jp(0),Up()),0);return{alignToBottom:r,paddingTopAddition:n}}),jp(vg,Om),{singleton:!0});function Im(e){return!!e&&("smooth"===e?"smooth":"auto")}const Mm=ig((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:c}])=>{const d=tg(!1),u=ng();let h=null;function f(e){Lp(o,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=Wp(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(Hp(l)("scrolling to bottom due to increased size",{},dg.DEBUG),f("auto"))}));setTimeout(t,100)}return Rp(Gp(sg(Gp(lg(t),Xp(1)),a),eg(lg(d),n,i,c),qp((([[e,t],r,n,o,i])=>{let a=t&&o,s="auto";return a&&(s=((e,t)=>"function"==typeof e?Im(e(t)):t&&Im(e))(r,n||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),Kp((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),h=Wp(e,(()=>{Hp(l)("following output to ",{totalCount:r},dg.DEBUG),f(t),h=null}))})),Rp(Gp(sg(lg(d),t,s),Kp((([e,,t])=>e&&t)),Qp((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),Kp((({refreshed:e})=>e)),eg(d,t)),(([,e])=>{Hp(i)&&p(!1!==e)})),Rp(u,(()=>{p(!1!==Hp(d))})),Rp(sg(lg(d),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&f("auto")})),{autoscrollToBottom:u,followOutput:d}}),jp(om,vm,dm,fm,sm,hg,vg)),Am=ig((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(Np(Gp(s,eg(i),Kp((([,e])=>0!==e)),eg(o,n,t,r,e),qp((([[,e],t,r,n,o,i=[]])=>_m(e,t,r,n,o,i)))),a),{})),jp(om,fm,Em,sm),{singleton:!0}),Bm=ig((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=tg(0);return Rp(Gp(e,eg(n),Kp((([,e])=>0!==e)),qp((([,e])=>({top:e})))),(e=>{Wp(Gp(r,Xp(1),Kp((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{Lp(t,e)}))}))})),{initialScrollTop:n}}),jp(sm,vg,Em),{singleton:!0}),zm=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:a})=>t<a?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,jm=ig((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const d=ng();return Np(Gp(d,eg(t,l,r,i,o,n,s),eg(e),qp((([[e,t,r,n,o,i,s,l],c])=>{const{align:d,behavior:u,calculateViewLocation:h=zm,done:f,...p}=e,g=Gg(e,t,n-1),m=qg(g,t.offsetTree,c)+o+i,b=h({itemBottom:m+Cg(t.sizeTree,g)[1],itemTop:m,locationParams:{align:d,behavior:u,...p},viewportBottom:l+r-s,viewportTop:l+i});return b?f&&Wp(Gp(a,Kp((e=>!e)),Xp(Hp(a)?1:2)),f):f&&f(),b})),Kp((e=>null!==e))),c),{scrollIntoView:d}}),jp(om,vg,dm,Em,hg),{singleton:!0}),Rm=ig((([{scrollVelocity:e}])=>{const t=tg(!1),r=ng(),n=tg(!1);return Np(Gp(e,eg(n,t,r),Kp((([e,t])=>!!t)),qp((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),Up()),t),Rp(Gp(sg(t,e,r),eg(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),jp(vm),{singleton:!0}),Lm=ig((([{scrollContainerState:e,scrollTo:t}])=>{const r=ng(),n=ng(),o=ng(),i=tg(!1),a=tg(void 0);return Np(Gp(sg(r,n),qp((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),Np(Gp(t,eg(n),qp((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),jp(vg)),Pm=ig((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=ng(),d=tg(void 0),u=tg(null),h=tg(null);return Np(s,u),Np(l,h),Rp(Gp(c,eg(t,n,a,u,h,r)),(([e,t,r,n,o,i,a])=>{const s=function(e){return Fg(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:r-=a})})),Np(Gp(d,Kp(Mp),qp(Hm)),o),Np(Gp(i,eg(d),Kp((([,e])=>void 0!==e)),Up(),qp((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:d}}),jp(om,vg,fm,sm,Lm));function Hm(e){return{align:"start",index:0,offset:e.scrollTop}}const Nm=ig((([{topItemsIndexes:e}])=>{const t=tg(0);return Np(Gp(t,Kp((e=>e>=0)),qp((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),jp(Em));function Wm(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const Ym=Wm((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),Vm=ig((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:d,shiftWithOffset:u,sizes:h},{log:f},{recalcInProgress:p}])=>{const g=og(Gp(l,eg(a),Qp((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:a},s])=>{const l=n+i;let c=0;return t===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(c=l-r,0!==c&&(c+=s))),[c,o,a,l]}),[0,[],0,0]),Kp((([e])=>0!==e)),eg(n,s,r,o,f,p),Kp((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===gm)),qp((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},dg.DEBUG),e)))));function m(r){r>0?(Lp(t,{behavior:"auto",top:-r}),Lp(e,0)):(Lp(e,0),Lp(t,{behavior:"auto",top:-r}))}return Rp(Gp(g,eg(e,i)),(([t,r,n])=>{n&&Ym()?Lp(e,r-t):m(-t)})),Rp(Gp(sg(rg(i,!1),e,p),Kp((([e,t,r])=>!e&&!r&&0!==t)),qp((([e,t])=>t)),Jp(1)),m),Np(Gp(u,qp((e=>({top:-e})))),t),Rp(Gp(c,eg(h,d),qp((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=$g(n,0);let a=0,s=0;for(;a<e;){a++,r+=o;let n=t.length===s+1?1/0:t[s+1]-t[s]-1;a+n>e&&(r-=o,n=e-a+1),a+=n,r+=i(n),s++}return r}}))),(r=>{Lp(e,r),requestAnimationFrame((()=>{Lp(t,{top:r}),requestAnimationFrame((()=>{Lp(e,0),Lp(p,!1)}))}))})),{deviation:e}}),jp(vg,vm,Em,om,hg,Hg)),Um=ig((([e,t,r,n,o,i,a,s,l,c])=>({...e,...t,...r,...n,...o,...i,...a,...s,...l,...c})),jp(Sm,Am,sm,Rm,Om,Bm,Tm,Lm,jm,hg)),Km=ig((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:d,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:p},g,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:S},D])=>(Np(x.rangeChanged,D.scrollSeekRangeChanged),Np(Gp(D.windowViewportRect,qp((e=>e.visibleHeight))),g.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:S,initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:p,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:d,...b,groupIndices:i,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:u,...x,...D,...g,sizes:l,...m})),jp(om,fm,vg,Pm,Mm,Em,dm,Vm,Nm,am,Um));function qm(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const Zm=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Gm(t,r,n){const i=Object.keys(r.required||{}),a=Object.keys(r.optional||{}),s=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),c=o.createContext({});function d(e,t){e.propsReady&&Lp(e.propsReady,!1);for(const n of i){Lp(e[r.required[n]],t[n])}for(const n of a)if(n in t){Lp(e[r.optional[n]],t[n])}e.propsReady&&Lp(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?r===i?void 0:(n(),r=i,t=Rp(e,i),t):(n(),Ap);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const h=o.forwardRef(((h,f)=>{const{children:p,...g}=h,[m]=o.useState((()=>Bp(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const a=e(n.map((e=>r(e))));return i&&t.set(o,a),a};return r(e)}(t),(e=>{d(e,g)})))),[b]=o.useState(Tp(u,m));Zm((()=>{for(const e of l)e in g&&Rp(b[e],g[e]);return()=>{Object.values(b).map(Pp)}}),[g,b,m]),Zm((()=>{d(m,g)})),o.useImperativeHandle(f,Fp(function(e){return s.reduce(((t,n)=>(t[n]=t=>{Lp(e[r.methods[n]],t)},t)),{})}(m)));const v=n;return e(c.Provider,{value:m,children:n?e(v,{...qm([...i,...a,...l],g),children:p}):p})})),f=o.version.startsWith("18")?e=>{const t=o.useContext(c)[e],r=o.useCallback((e=>Rp(t,e)),[t]);return o.useSyncExternalStore(r,(()=>Hp(t)),(()=>Hp(t)))}:e=>{const t=o.useContext(c)[e],[r,n]=o.useState(Tp(Hp,t));return Zm((()=>Rp(t,(e=>{e!==r&&n(Fp(e))}))),[t,r]),r};return{Component:h,useEmitter:(e,t)=>{const r=o.useContext(c)[e];Zm((()=>Rp(r,t)),[t,r])},useEmitterValue:f,usePublisher:e=>o.useCallback(Ip(Lp,o.useContext(c)[e]),[e])}}const Qm=o.createContext(void 0),Xm=o.createContext(void 0),Jm=typeof document<"u"?o.useLayoutEffect:o.useEffect;function eb(e,t,r,n=Ap,i,a){const s=o.useRef(null),l=o.useRef(null),c=o.useRef(null),d=o.useCallback((r=>{const n=r.target,o=n===window||n===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,d=a?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(i,0),viewportHeight:d})};r.suppressFlushSync?u():q.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===s-d)&&(l.current=null,t(!0),c.current&&(clearTimeout(c.current),c.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||s.current;return n(i||s.current),d({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",d,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",d)}}),[s,d,r,n,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(r){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let i,d,u;n===window?(d=Math.max(Yg(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(d=n[a?"scrollWidth":"scrollHeight"],i=Yg(n,a?"width":"height"),u=n[a?"scrollLeft":"scrollTop"]);const h=d-i;if(r.top=Math.ceil(Math.max(Math.min(h,r.top),0)),pm(i,d)||r.top===u)return e({scrollHeight:d,scrollTop:u,viewportHeight:i}),void(o&&t(!0));o?(l.current=r.top,c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{c.current=null,l.current=null,t(!0)}),1e3)):l.current=null,a&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const tb="-webkit-sticky",rb="sticky",nb=Wm((()=>{if(typeof document>"u")return rb;const e=document.createElement("div");return e.style.position=tb,e.style.position===tb?tb:rb}));function ob(e){return e}const ib=ig((()=>{const e=tg((e=>`Item ${e}`)),t=tg(null),r=tg((e=>`Group ${e}`)),n=tg({}),o=tg(ob),i=tg("div"),a=tg(Ap),s=(e,t=null)=>rg(Gp(n,qp((t=>t[e])),Up()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:r,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),ab=ig((([e,t])=>({...e,...t})),jp(Km,ib)),sb=({height:t})=>e("div",{style:{height:t}}),lb={overflowAnchor:"none",position:nb(),zIndex:1},cb={overflowAnchor:"none"},db={...cb,display:"inline-block",height:"100%"},ub=o.memo((function({showTopList:t=!1}){const r=Fb("listState"),n=Eb("sizeRanges"),i=Fb("useWindowScroll"),a=Fb("customScrollParent"),s=Eb("windowScrollContainerState"),l=Eb("scrollContainerState"),c=a||i?s:l,d=Fb("itemContent"),u=Fb("context"),h=Fb("groupContent"),f=Fb("trackItemSizes"),p=Fb("itemSize"),g=Fb("log"),m=Eb("gap"),b=Fb("horizontalDirection"),{callbackRef:v}=gg(n,p,f,t?Ap:c,g,m,a,b,Fb("skipAnimationFrameInResizeObserver")),[y,x]=o.useState(0);_b("deviation",(e=>{y!==e&&x(e)}));const w=Fb("EmptyPlaceholder"),$=Fb("ScrollSeekPlaceholder")||sb,S=Fb("ListComponent"),D=Fb("ItemComponent"),k=Fb("GroupComponent"),_=Fb("computeItemKey"),F=Fb("isSeeking"),E=Fb("groupIndices").length>0,O=Fb("alignToBottom"),T=Fb("initialItemFinalLocationReached"),I=t?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:O?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:O?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...T?{}:{visibility:"hidden"}};return!t&&0===r.totalCount&&w?e(w,{...mb(w,u)}):e(S,{...mb(S,u),"data-testid":t?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:I,children:(t?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=_(t+r.firstItemIndex,e.data,u);return F?C($,{...mb($,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?C(k,{...mb(k,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:lb},h(e.index,u)):C(D,{...mb(D,u),...bb(D,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:b?db:cb},E?d(e.index,e.groupIndex,e.data,u):d(e.index,e.data,u))}))})})),hb={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},fb={outline:"none",overflowX:"auto",position:"relative"},pb=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),gb={position:nb(),top:0,width:"100%",zIndex:1};function mb(e,t){if("string"!=typeof e)return{context:t}}function bb(e,t){return{item:"string"==typeof e?void 0:t}}const vb=o.memo((function(){const t=Fb("HeaderComponent"),r=Eb("headerHeight"),n=Fb("HeaderFooterTag"),i=fg(o.useMemo((()=>e=>{r(Yg(e,"height"))}),[r]),!0,Fb("skipAnimationFrameInResizeObserver")),a=Fb("context");return t?e(n,{ref:i,children:e(t,{...mb(t,a)})}):null})),yb=o.memo((function(){const t=Fb("FooterComponent"),r=Eb("footerHeight"),n=Fb("HeaderFooterTag"),i=fg(o.useMemo((()=>e=>{r(Yg(e,"height"))}),[r]),!0,Fb("skipAnimationFrameInResizeObserver")),a=Fb("context");return t?e(n,{ref:i,children:e(t,{...mb(t,a)})}):null}));function xb({useEmitter:t,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("scrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("scrollerRef"),u=r("context"),h=r("horizontalDirection")||!1,{scrollByCallback:f,scrollerRef:p,scrollToCallback:g}=eb(s,c,l,d,void 0,h);return t("scrollTo",g),t("scrollBy",f),e(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...h?fb:hb,...i},tabIndex:0,...a,...mb(l,u),children:o})}))}function wb({useEmitter:t,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("windowScrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("totalListHeight"),u=r("deviation"),h=r("customScrollParent"),f=r("context"),{scrollByCallback:p,scrollerRef:g,scrollToCallback:m}=eb(s,c,l,Ap,h);return Jm((()=>(g.current=h||window,()=>{g.current=null})),[g,h]),t("windowScrollTo",m),t("scrollBy",p),e(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==d?{height:d+u}:{}},...a,...mb(l,f),children:o})}))}const $b=({children:t})=>{const r=o.useContext(Qm),n=Eb("viewportHeight"),i=Eb("fixedItemHeight"),a=Fb("alignToBottom"),s=Fb("horizontalDirection"),l=fg(o.useMemo((()=>Op(n,(e=>Yg(e,s?"width":"height")))),[n,s]),!0,Fb("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),e("div",{"data-viewport-type":"element",ref:l,style:pb(a),children:t})},Cb=({children:t})=>{const r=o.useContext(Qm),n=Eb("windowViewportRect"),i=Eb("fixedItemHeight"),a=Fb("customScrollParent"),s=bg(n,a,Fb("skipAnimationFrameInResizeObserver")),l=Fb("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),e("div",{"data-viewport-type":"window",ref:s,style:pb(l),children:t})},Sb=({children:t})=>{const r=Fb("TopItemListComponent")||"div",n=Fb("headerHeight"),o={...gb,marginTop:`${n}px`},i=Fb("context");return e(r,{style:o,...mb(r,i),children:t})},Db=o.memo((function(r){const n=Fb("useWindowScroll"),o=Fb("topItemsIndexes").length>0,i=Fb("customScrollParent"),a=Fb("context"),s=i||n?Tb:Ob,l=i||n?Cb:$b;return t(s,{...r,...mb(s,a),children:[o&&e(Sb,{children:e(ub,{showTopList:!0})}),t(l,{children:[e(vb,{}),e(ub,{}),e(yb,{})]})]})})),{Component:kb,useEmitter:_b,useEmitterValue:Fb,usePublisher:Eb}=Gm(ab,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},Db),Ob=xb({useEmitter:_b,useEmitterValue:Fb,usePublisher:Eb}),Tb=wb({useEmitter:_b,useEmitterValue:Fb,usePublisher:Eb}),Ib=kb,Mb={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},Ab={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:Bb,floor:zb,max:jb,min:Rb,round:Lb}=Math;function Pb(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function Hb(e,t){return e&&e.width===t.width&&e.height===t.height}function Nb(e,t){return e&&e.column===t.column&&e.row===t.row}const Wb=ig((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:d,viewportHeight:u},h,f,{didMount:p,propsReady:g},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=tg(0),C=tg(0),S=tg(Mb),D=tg({height:0,width:0}),k=tg({height:0,width:0}),_=ng(),F=ng(),E=tg(0),O=tg(null),T=tg({column:0,row:0}),I=ng(),M=ng(),A=tg(!1),B=tg(0),z=tg(!0),j=tg(!1),R=tg(!1);Rp(Gp(p,eg(B),Kp((([e,t])=>!!t))),(()=>{Lp(z,!1)})),Rp(Gp(sg(p,z,k,D,B,j),Kp((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{Lp(j,!0),um(1,(()=>{Lp(_,e)})),Wp(Gp(c),(()=>{Lp(t,[0,0]),Lp(z,!0)}))})),Np(Gp(M,Kp((e=>null!=e&&e.scrollTop>0)),Zp(0)),C),Rp(Gp(p,eg(M),Kp((([,e])=>null!=e))),(([,e])=>{e&&(Lp(D,e.viewport),Lp(k,e.item),Lp(T,e.gap),e.scrollTop>0&&(Lp(A,!0),Wp(Gp(c,Xp(1)),(e=>{Lp(A,!1)})),Lp(l,{top:e.scrollTop})))})),Np(Gp(D,qp((({height:e})=>e))),u),Np(Gp(sg(lg(D,Hb),lg(k,Hb),lg(T,((e,t)=>e&&e.column===t.column&&e.row===t.row)),lg(c)),qp((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),I),Np(Gp(sg(lg($),n,lg(T,Nb),lg(k,Hb),lg(D,Hb),lg(O),lg(C),lg(A),lg(z),lg(B)),Kp((([,,,,,,,e])=>!e)),qp((([e,[t,r],n,o,i,a,s,,l,c])=>{const{column:d,row:u}=n,{height:h,width:f}=o,{width:p}=i;if(0===s&&(0===e||0===p))return Mb;if(0===f){const t=hm(c,e);return function(e){return{...Ab,items:e}}(Pb(t,t+Math.max(s-1,0),a))}const g=Yb(p,f,d);let m,b;l?0===t&&0===r&&s>0?(m=0,b=s-1):(m=g*zb((t+u)/(h+u)),b=g*Bb((r+u)/(h+u))-1,b=Rb(e-1,jb(b,g-1)),m=Rb(b,jb(0,m))):(m=0,b=-1);const v=Pb(m,b,a),{bottom:y,top:x}=Vb(i,n,o,v),w=Bb(e/g);return{bottom:y,itemHeight:h,items:v,itemWidth:f,offsetBottom:w*h+(w-1)*u-y,offsetTop:x,top:x}}))),S),Np(Gp(O,Kp((e=>null!==e)),qp((e=>e.length))),$),Np(Gp(sg(D,k,S,T),Kp((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),qp((([e,t,{items:r},n])=>{const{bottom:o,top:i}=Vb(e,n,t,r);return[i,o]})),Up(Pg)),t);const L=tg(!1);Np(Gp(c,eg(L),qp((([e,t])=>t||0!==e))),L);const P=og(Gp(sg(S,$),Kp((([{items:e}])=>e.length>0)),eg(L),Kp((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),qp((([[,e]])=>e-1)),Up())),H=og(Gp(lg(S),Kp((({items:e})=>e.length>0&&0===e[0].index)),Zp(0),Up())),N=og(Gp(lg(S),eg(A),Kp((([{items:e},t])=>e.length>0&&!t)),qp((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),Up(Lg),Jp(0)));Np(N,f.scrollSeekRangeChanged),Np(Gp(_,eg(D,k,$,T),qp((([e,t,r,n,o])=>{const i=cm(e),{align:a,behavior:s,offset:l}=i;let c=i.index;"LAST"===c&&(c=n-1),c=jb(0,c,Rb(n-1,c));let d=Ub(t,o,r,c);return"end"===a?d=Lb(d-t.height+r.height):"center"===a&&(d=Lb(d-t.height/2+r.height/2)),l&&(d+=l),{behavior:s,top:d}}))),l);const W=rg(Gp(S,qp((e=>e.offsetBottom+e.bottom))),0);return Np(Gp(x,qp((e=>({height:e.visibleHeight,width:e.visibleWidth})))),D),{customScrollParent:m,data:O,deviation:E,footerHeight:o,gap:T,headerHeight:i,increaseViewportBy:e,initialItemCount:C,itemDimensions:k,overscan:r,restoreStateFrom:M,scrollBy:a,scrollContainerState:s,scrollHeight:F,scrollTo:l,scrollToIndex:_,scrollTop:c,smoothScrollTargetReached:d,totalCount:$,useWindowScroll:b,viewportDimensions:D,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...f,gridState:S,horizontalDirection:R,initialTopMostItemIndex:B,totalListHeight:W,...h,endReached:P,propsReady:g,rangeChanged:N,startReached:H,stateChanged:I,stateRestoreInProgress:A,...w}}),jp(Sm,vg,vm,Rm,sm,Lm,hg));function Yb(e,t,r){return jb(1,zb((e+r)/(zb(t)+r)))}function Vb(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=Ub(e,t,r,n[0].index);return{bottom:Ub(e,t,r,n[n.length-1].index)+o,top:i}}function Ub(e,t,r,n){const o=Yb(e.width,r.width,t.column),i=zb(n/o),a=i*r.height+jb(0,i-1)*t.row;return a>0?a+t.row:a}const Kb=ig((()=>{const e=tg((e=>`Item ${e}`)),t=tg({}),r=tg(null),n=tg("virtuoso-grid-item"),o=tg("virtuoso-grid-list"),i=tg(ob),a=tg("div"),s=tg(Ap),l=(e,r=null)=>rg(Gp(t,qp((t=>t[e])),Up()),r),c=tg(!1),d=tg(!1);return Np(lg(d),c),{components:t,computeItemKey:i,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:d,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),qb=ig((([e,t])=>({...e,...t})),jp(Wb,Kb)),Zb=o.memo((function(){const t=nv("gridState"),r=nv("listClassName"),n=nv("itemClassName"),i=nv("itemContent"),a=nv("computeItemKey"),s=nv("isSeeking"),l=ov("scrollHeight"),c=nv("ItemComponent"),d=nv("ListComponent"),u=nv("ScrollSeekPlaceholder"),h=nv("context"),f=ov("itemDimensions"),p=ov("gap"),g=nv("log"),m=nv("stateRestoreInProgress"),b=ov("reportReadyState"),v=fg(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();f({height:e,width:t})}p({column:sv("column-gap",getComputedStyle(e).columnGap,g),row:sv("row-gap",getComputedStyle(e).rowGap,g)})}),[l,f,p,g]),!0,!1);return Jm((()=>{t.itemHeight>0&&t.itemWidth>0&&b(!0)}),[t]),m?null:e(d,{className:r,ref:v,...mb(d,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},children:t.items.map((r=>{const o=a(r.index,r.data,h);return s?e(u,{...mb(u,h),height:t.itemHeight,index:r.index,width:t.itemWidth},o):C(c,{...mb(c,h),className:n,"data-index":r.index,key:o},i(r.index,r.data,h))}))})})),Gb=o.memo((function(){const t=nv("HeaderComponent"),r=ov("headerHeight"),n=nv("headerFooterTag"),i=fg(o.useMemo((()=>e=>{r(Yg(e,"height"))}),[r]),!0,!1),a=nv("context");return t?e(n,{ref:i,children:e(t,{...mb(t,a)})}):null})),Qb=o.memo((function(){const t=nv("FooterComponent"),r=ov("footerHeight"),n=nv("headerFooterTag"),i=fg(o.useMemo((()=>e=>{r(Yg(e,"height"))}),[r]),!0,!1),a=nv("context");return t?e(n,{ref:i,children:e(t,{...mb(t,a)})}):null})),Xb=({children:t})=>{const r=o.useContext(Xm),n=ov("itemDimensions"),i=ov("viewportDimensions"),a=fg(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),e("div",{ref:a,style:pb(!1),children:t})},Jb=({children:t})=>{const r=o.useContext(Xm),n=ov("windowViewportRect"),i=ov("itemDimensions"),a=nv("customScrollParent"),s=bg(n,a,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),e("div",{ref:s,style:pb(!1),children:t})},ev=o.memo((function({...r}){const n=nv("useWindowScroll"),o=nv("customScrollParent"),i=o||n?av:iv,a=o||n?Jb:Xb,s=nv("context");return e(i,{...r,...mb(i,s),children:t(a,{children:[e(Gb,{}),e(Zb,{}),e(Qb,{})]})})})),{Component:tv,useEmitter:rv,useEmitterValue:nv,usePublisher:ov}=Gm(qb,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},ev),iv=xb({useEmitter:rv,useEmitterValue:nv,usePublisher:ov}),av=wb({useEmitter:rv,useEmitterValue:nv,usePublisher:ov});function sv(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,dg.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const lv=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),cv=({children:t})=>{const[r,n]=s(-1);return e(lv.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:t})},dv=k.div`
    border: ${qi["width-010"]} ${qi.solid} ${Vi.border};
    border-radius: ${Gi.sm};
    background: ${Vi.bg};

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: 23rem;`:"min-width: 23rem;"}
    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?Ui["body-md-regular"]:Ui["body-baseline-regular"]}

    ${Ji.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Xi["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Ji.MaxWidth.xs} {
        width: calc(100vw - ${Xi["xs-margin"]} * 2);
    }

    ${Ji.MaxWidth.xxs} {
        width: calc(100vw - ${Xi["xxs-margin"]} * 2);
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Vi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Gi.full};
        background-clip: padding-box;
    }
`,uv=k.div`
    background: transparent;
    padding: ${Zi["spacing-8"]};
`,hv=k.ul`
    list-style-type: none;
`,fv=k.li`
    display: flex;
    align-items: flex-start;
    gap: ${Zi["spacing-8"]};
    padding: ${Zi["spacing-12"]} ${Zi["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${Gi.none};
    outline: none;

    ${e=>e.$disabled?_`
                cursor: not-allowed;
            `:e.$active&&e.$selected?_`
                background: ${Vi["bg-hover"]};
            `:e.$active?_`
                background: ${Vi["bg-hover-subtle"]};
            `:void 0}
`,pv=k(ge)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Vi["icon-selected"]};
`,gv=k.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,mv=k(pe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Vi["icon-selected"]};
`,bv=k(he)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Vi["icon-primary-subtlest"]};
`,vv=k(fe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Vi["icon-disabled-subtle"]};
`,yv=k.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,xv=k(ic)`
    cursor: pointer;
    overflow: hidden;
    color: ${Vi["text-primary"]};
    font-size: inherit;
`,wv=k(xv)`
    ${Ui["body-baseline-semibold"]}
`,$v=k(xv)`
    ${Ui["body-md-semibold"]}
    padding: ${Zi["spacing-8"]} ${Zi["spacing-8"]};
`,Cv=k.div`
    width: 100%;
    display: flex;
    padding: ${Zi["spacing-12"]} ${Zi["spacing-16"]};
    align-items: center;
`,Sv=k(ue)`
    margin-right: ${Zi["spacing-4"]};
    color: ${Vi["icon-error"]};
    height: 1em;
    width: 1em;
`,Dv=k(Rs)`
    margin-right: ${Zi["spacing-8"]};
    color: ${Vi.icon};
`,kv=k.div`
    ${za()}
    color: ${Vi["text-subtle"]};
    padding: 0 ${Zi["spacing-16"]} ${Zi["spacing-12"]}
        ${Zi["spacing-16"]};
`,_v=k.div`
    background: ${Vi["bg-strong"]};
    border-radius: ${Gi.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Ui["body-md-regular"]:Ui["body-baseline-regular"]}
`,Fv=k.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Zi["spacing-8"]};
    padding: ${e=>"small"===e.$variant?_`
                  ${Zi["spacing-8"]} ${Zi["spacing-16"]}
              `:_`10px ${Zi["spacing-16"]}`};
`,Ev=k(oc)`
    flex: 1;
`,Ov=k(me)`
    color: ${Vi.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,Tv=k(Ia)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Zi["spacing-8"]};
    margin-left: -${Zi["spacing-8"]};
    color: ${Vi.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Iv=S(((r,n)=>{var{value:o,variant:i,onClear:a}=r,s=Fe(r,["value","variant","onClear"]);return t(_v,{$variant:i,children:[t(Fv,{$variant:i,children:[e(Ov,{"aria-hidden":!0}),e(Ev,Object.assign({ref:n,value:o,$variant:i},s))]}),o&&e(Tv,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:e(X,{"aria-hidden":!0})})]})})),Mv=({listItems:n,multiSelect:o,maxSelectable:i,selectedItems:l,disableItemFocus:c,itemsLoadState:d="success",itemTruncationType:u="end",itemMaxLines:f=2,labelDisplayType:m="inline",variant:b="default",listboxId:v,matchElementWidth:y=!1,width:x,topScrollItem:w,onSelectItem:$,onSelectAll:C,onDismiss:S,onRetry:D,valueExtractor:k,listExtractor:_,renderListItem:F,renderCustomCallToAction:E,enableSearch:O,hideNoResultsDisplay:T,noResultsDescription:I,customLabels:M,searchPlaceholder:A,searchFunction:B,onSearch:z})=>{const{noResultsLabel:j="No results found.",selectAllButtonLabel:R="Select all",clearAllButtonLabel:L="Clear all"}=M||{},P=(null==M?void 0:M.searchPlaceholder)||A||"Search",H=(null==M?void 0:M.noResultsDescription)||I,{focusedIndex:N,setFocusedIndex:W}=g(lv),{elementWidth:Y,setFloatingRef:V,getFloatingProps:U,styles:K}=Fs(),[q,Z]=s(""),[G,Q]=s(null!=n?n:[]),X=ir(d),J=nr(),ee=a(null),te=a(null),re=a([]),ne=a(null),oe=a(null),ie=!!i&&!!l&&(null==l?void 0:l.length)===i,ae=e=>{const t=_?_(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},se=p((e=>!!Dp(l,(t=>_p(t,e)))),[l]),le=tr((()=>null==B?void 0:B(q))),ce=tr((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=ae(e),n=q.trim().toLowerCase();return t.toLowerCase().includes(n)||r&&r.toLowerCase().includes(n)})))),de=(e,t)=>{ie&&!se(e)||(W(t),null==$||$(e,(e=>k?k(e):e)(e)))},ue=e=>{const t=e.target.value;Z(t),null==z||z()},he=()=>{var e;Z(""),null===(e=ne.current)||void 0===e||e.focus(),null==z||z()},fe=()=>{null==D||D()};rr("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),N<G.length-1){const e=N+1;null===(t=re.current[e])||void 0===t||t.focus(),W(e)}break;case"ArrowUp":if(e.preventDefault(),N>0){const e=N-1;null===(r=re.current[e])||void 0===r||r.focus(),W(e)}else 0===N&&ne.current&&(ne.current.focus(),W(-1));break;case"Space":case"Enter":document.activeElement===re.current[N]&&(e.preventDefault(),G[N]&&de(G[N],N))}})),h((()=>{var e;if(!w)return void(null===(e=oe.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(w);oe.current&&-1!==e&&(oe.current.scrollToIndex({index:e}),W(e))}),0);return()=>clearTimeout(t)}),[re,n,W,w]),h((()=>{var e,t,r;if(J)return;if(c||!n)return;const o=n.findIndex((e=>se(e)));ne.current?(W(-1),setTimeout((()=>{var e;return null===(e=ne.current)||void 0===e?void 0:e.focus()}),200)):N>0?(null===(e=oe.current)||void 0===e||e.scrollToIndex({index:N,align:"center"}),setTimeout((()=>{var e;return null===(e=re.current[N])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=oe.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),W(o),setTimeout((()=>{var e;return null===(e=re.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=oe.current)||void 0===r||r.scrollToIndex({index:0}),W(0),setTimeout((()=>{var e;return null===(e=re.current[0])||void 0===e?void 0:e.focus()}),200))}),[se,c,N,n,J,W]),h((()=>{J&&X&&(c||"success"===d&&ne.current&&(W(-1),ne.current.focus()))}),[J,X,d,W,c]),h((()=>{var e;Q(null!==(e=""===q?n:B?le():ce())&&void 0!==e?e:[])}),[le,ce,n,B,q]);const pe=t=>o?e(ie&&!t?vv:t?mv:bv,{"aria-hidden":!0}):t?e(pv,{"aria-hidden":!0}):e(gv,{}),ge=(t,r)=>{const{title:n,secondaryLabel:o}=ae(t);return e(Hd,{displayType:m,label:n,maxLines:f,selected:r,disabled:!r&&ie,sublabel:o,truncationType:u,variant:b})},me=(n,i)=>{if(!D||"success"===d){const a=se(n),s=i===N;return e(fv,{"aria-selected":a,"aria-multiselectable":o,"aria-disabled":!a&&ie,"data-testid":"list-item",onClick:()=>de(n,i),onMouseEnter:()=>(e=>{W(e)})(i),ref:e=>{re.current[i]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,$disabled:!a&&ie,children:F?F(n,{selected:a}):t(r,{children:[pe(a),ge(n,a)]})},((e,t)=>`item_${t}__${k?k(e):e}`)(n,i))}},be=()=>{if((O||B)&&"success"===d)return e(Iv,{ref:ne,onChange:ue,value:q,placeholder:P,"data-testid":"search-input","aria-label":"Enter text to search",onClear:he,variant:b})},ve=()=>{if(l&&o&&G.length>0&&!q&&"success"===d)return e(yv,{children:e($v,{onClick:C,type:"button",$variant:b,children:i||0!==l.length?L:R})})},ye=()=>{if(!T&&(q||!O)&&0===G.length&&"success"===d)return t(r,{children:[t(Cv,{"data-testid":"list-no-results",children:[e(Sv,{"data-testid":"no-result-icon"}),j]}),H&&e(kv,{"data-testid":"no-result-desc",children:H})]})},xe=()=>{if(D&&"loading"===d)return t(Cv,{"data-testid":"list-loading",children:[e(Dv,{}),"Loading..."]})},we=()=>{if(D&&"fail"===d)return t(Cv,{"data-testid":"list-fail",children:[e(Sv,{"data-testid":"load-error-icon"}),"Failed to load. ",e(wv,{onClick:fe,type:"button",$variant:b,children:"Try again."})]})},$e=()=>{var t;const r="test"===process.env.NODE_ENV;return e(hv,{role:"listbox",id:v,children:e(Ib,Object.assign({ref:oe,style:{height:"100%"},data:G,customScrollParent:null!==(t=ee.current)&&void 0!==t?t:void 0,itemContent:(e,t)=>me(t,e)},r?{initialItemCount:G.length}:{}),r?G.length:void 0)})};return t(dv,Object.assign({"data-testid":"dropdown-container",ref:nt(ee,V),style:K},U(),{$width:y?Y:void 0,$customWidth:x,$variant:b,children:[t(uv,{ref:te,"data-testid":"dropdown-list",children:[be(),ve(),ye(),xe(),we(),$e()]}),(()=>{if(E)return e("div",{"data-testid":"custom-cta",children:E(S,G)})})()]}))},Av=k(ic)`
    display: flex;
    align-items: center;
    gap: ${Zi["spacing-8"]};
    width: 100%;
    padding: ${e=>e.$readOnly?`0 ${Zi["spacing-16"]}`:Zi["spacing-16"]};

    ${e=>"small"===e.$variant?_`
                  ${Ui["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `:_`
                  ${Ui["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${Vi["focus-ring"]};
        outline-offset: -2px;
    }
`,Bv=k.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Ki["duration-250"]} ${Ki["ease-default"]};

    svg {
        color: ${Vi.icon};
        height: 1em;
        width: 1em;
    }
`,zv=S((({children:r,disabled:n,expanded:o,listboxId:i,popupRole:a,readOnly:s,variant:l},c)=>t(Av,{ref:c,type:"button","aria-expanded":o,"aria-haspopup":a,"data-testid":"selector",disabled:n,"aria-controls":i,$variant:l,$readOnly:s,children:[r,!s&&e(Bv,{$expanded:o,$variant:l,children:e(J,{"aria-hidden":!0})})]})));var jv=Symbol.for("immer-nothing"),Rv=Symbol.for("immer-draftable"),Lv=Symbol.for("immer-state"),Pv="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function Hv(e,...t){if("production"!==process.env.NODE_ENV){const r=Pv[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Nv=Object.getPrototypeOf;function Wv(e){return!!e&&!!e[Lv]}function Yv(e){return!!e&&(Uv(e)||Array.isArray(e)||!!e[Rv]||!!e.constructor?.[Rv]||Qv(e)||Xv(e))}var Vv=Object.prototype.constructor.toString();function Uv(e){if(!e||"object"!=typeof e)return!1;const t=Nv(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===Vv}function Kv(e,t){0===qv(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function qv(e){const t=e[Lv];return t?t.type_:Array.isArray(e)?1:Qv(e)?2:Xv(e)?3:0}function Zv(e,t){return 2===qv(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Gv(e,t,r){const n=qv(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function Qv(e){return e instanceof Map}function Xv(e){return e instanceof Set}function Jv(e){return e.copy_||e.base_}function ey(e,t){if(Qv(e))return new Map(e);if(Xv(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=Uv(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[Lv];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Nv(e),t)}{const t=Nv(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function ty(e,t=!1){return ny(e)||Wv(e)||!Yv(e)||(qv(e)>1&&(e.set=e.add=e.clear=e.delete=ry),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>ty(t,!0)))),e}function ry(){Hv(2)}function ny(e){return Object.isFrozen(e)}var oy,iy={};function ay(e){const t=iy[e];return t||Hv(0,e),t}function sy(){return oy}function ly(e,t){t&&(ay("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function cy(e){dy(e),e.drafts_.forEach(hy),e.drafts_=null}function dy(e){e===oy&&(oy=e.parent_)}function uy(e){return oy={drafts_:[],parent_:oy,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function hy(e){const t=e[Lv];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function fy(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[Lv].modified_&&(cy(t),Hv(4)),Yv(e)&&(e=py(t,e),t.parent_||my(t,e)),t.patches_&&ay("Patches").generateReplacementPatches_(r[Lv].base_,e,t.patches_,t.inversePatches_)):e=py(t,r,[]),cy(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==jv?e:void 0}function py(e,t,r){if(ny(t))return t;const n=t[Lv];if(!n)return Kv(t,((o,i)=>gy(e,n,t,o,i,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return my(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),Kv(o,((o,a)=>gy(e,n,t,o,a,r,i))),my(e,t,!1),r&&e.patches_&&ay("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function gy(e,t,r,n,o,i,a){if("production"!==process.env.NODE_ENV&&o===r&&Hv(5),Wv(o)){const a=py(e,o,i&&t&&3!==t.type_&&!Zv(t.assigned_,n)?i.concat(n):void 0);if(Gv(r,n,a),!Wv(a))return;e.canAutoFreeze_=!1}else a&&r.add(o);if(Yv(o)&&!ny(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;py(e,o),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||my(e,o)}}function my(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ty(t,r)}var by={get(e,t){if(t===Lv)return e;const r=Jv(e);if(!Zv(r,t))return function(e,t,r){const n=xy(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!Yv(n)?n:n===yy(e.base_,t)?($y(e),e.copy_[t]=Cy(n,e)):n},has:(e,t)=>t in Jv(e),ownKeys:e=>Reflect.ownKeys(Jv(e)),set(e,t,r){const n=xy(Jv(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=yy(Jv(e),t),o=n?.[Lv];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||Zv(e.base_,t)))return!0;$y(e),wy(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==yy(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,$y(e),wy(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=Jv(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){Hv(11)},getPrototypeOf:e=>Nv(e.base_),setPrototypeOf(){Hv(12)}},vy={};function yy(e,t){const r=e[Lv];return(r?Jv(r):e)[t]}function xy(e,t){if(!(t in e))return;let r=Nv(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=Nv(r)}}function wy(e){e.modified_||(e.modified_=!0,e.parent_&&wy(e.parent_))}function $y(e){e.copy_||(e.copy_=ey(e.base_,e.scope_.immer_.useStrictShallowCopy_))}Kv(by,((e,t)=>{vy[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),vy.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&Hv(13),vy.set.call(this,e,t,void 0)},vy.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&Hv(14),by.set.call(this,e[0],t,r,e[0])};function Cy(e,t){const r=Qv(e)?ay("MapSet").proxyMap_(e,t):Xv(e)?ay("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:sy(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=by;r&&(o=[n],i=vy);const{revoke:a,proxy:s}=Proxy.revocable(o,i);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:sy()).drafts_.push(r),r}function Sy(e){if(!Yv(e)||ny(e))return e;const t=e[Lv];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=ey(e,t.scope_.immer_.useStrictShallowCopy_)}else r=ey(e,!0);return Kv(r,((e,t)=>{Gv(r,e,Sy(t))})),t&&(t.finalized_=!1),r}var Dy=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...o){return n.produce(e,(e=>t.call(this,e,...o)))}}let n;if("function"!=typeof t&&Hv(6),void 0!==r&&"function"!=typeof r&&Hv(7),Yv(e)){const o=uy(this),i=Cy(e,void 0);let a=!0;try{n=t(i),a=!1}finally{a?cy(o):dy(o)}return ly(o,r),fy(n,o)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===jv&&(n=void 0),this.autoFreeze_&&ty(n,!0),r){const t=[],o=[];ay("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}Hv(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const o=this.produce(e,t,((e,t)=>{r=e,n=t}));return[o,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Yv(e)||Hv(8),Wv(e)&&(e=function(e){Wv(e)||Hv(10,e);return Sy(e)}(e));const t=uy(this),r=Cy(e,void 0);return r[Lv].isManual_=!0,dy(t),r}finishDraft(e,t){const r=e&&e[Lv];r&&r.isManual_||Hv(9);const{scope_:n}=r;return ly(n,t),fy(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=ay("Patches").applyPatches_;return Wv(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},ky=Dy.produce;Dy.produceWithPatches.bind(Dy),Dy.setAutoFreeze.bind(Dy),Dy.setUseStrictShallowCopy.bind(Dy),Dy.applyPatches.bind(Dy),Dy.createDraft.bind(Dy),Dy.finishDraft.bind(Dy);var _y=yh,Fy=Qh,Ey=Pu,Oy=sr,Ty=$h,Iy=Wu,My=ph,Ay=oh,By=Object.prototype.hasOwnProperty;var zy=function(e){if(null==e)return!0;if(Ty(e)&&(Oy(e)||"string"==typeof e||"function"==typeof e.splice||Iy(e)||Ay(e)||Ey(e)))return!e.length;var t=Fy(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(My(e))return!_y(e).length;for(var r in e)if(By.call(e,r))return!1;return!0},jy=Te(zy);const Ry=(e,t,r)=>{const n=ky(e,(e=>{for(let n=e.length-1;n>=0;n--){const o=e[n],i=Py(o.keyPath);if(o.checked=t.has(i),o.hasSubItems&&r&&!0!==o.checked){const t=o.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?o.checked=!0:n&&(o.checked="mixed")}}}));return n},Ly=(e,t)=>{const[r,...n]=t;if(jy(e)||jy(r))return;const o=e.find((e=>e.key===r));return o&&n.length?Ly(o.subItems,n):o},Py=e=>e.join(","),Hy=e=>new Set(e.map((e=>e.join(",")))),Ny=k.li`
    display: ${e=>e.$visible?"flex":"none"};
`,Wy=k.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Zi["spacing-8"]};
    padding: ${Zi["spacing-12"]} ${Zi["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${Gi.none};
    outline: none;

    ${e=>e.$active&&_`
            background: ${Vi["bg-hover"]};
        `}
`,Yy=k.div`
    height: 1px;
    width: calc((1lh + ${Zi["spacing-8"]}) * ${e=>e.$level});
`,Vy=k.div`
    width: 1lh;
    height: 1lh;
    color: ${Vi["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Ki["duration-350"]}
            ${Ki["ease-standard"]};

        ${e=>{if(e.$expanded)return _`
                    transform: rotate(90deg);
                `}}
    }
`,Uy=k.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Zi["spacing-8"]};
`,Ky=k.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Zi["spacing-16"]};

    display: flex;
    justify-content: center;
`,qy=k(ve)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Vi["icon-selected"]};
`,Zy=({listItems:n,multiSelect:o=!1,selectedKeyPaths:i,itemsLoadState:l="success",itemTruncationType:c="end",itemMaxLines:d=2,variant:u="default",listboxId:f,matchElementWidth:p=!1,width:g,mode:m="default",selectableCategory:b,onSelectItem:y,onSelectAll:x,onRetry:w,enableSearch:$,hideNoResultsDisplay:C,noResultsDescription:S,customLabels:D,searchPlaceholder:k,onSearch:_})=>{const{noResultsLabel:F="No results found.",selectAllButtonLabel:E="Select all",clearAllButtonLabel:O="Clear all"}=D||{},T=(null==D?void 0:D.searchPlaceholder)||k||"Search",I=(null==D?void 0:D.noResultsDescription)||S,M=o||b,{elementWidth:A,setFloatingRef:B,getFloatingProps:z,styles:j}=Fs(),[R,L]=s(""),P=R.toLowerCase().trim(),[H,N]=s(!1),W=a(null),Y=a(null),V=a([]),U=a(null),K=nr(),[q,Z]=s([]),[G,Q]=s([]),X=H?G:q,J=v((()=>{let e=0;for(const t of q)t.level>e&&(e=t.level);return e}),[q]),[ee,te]=s(0),[re,ne]=s([]),[oe,ie]=s(0),ae=e=>{const t=e.target.value;L(t),""===t?N(!1):t.trim().length>=3&&N(!0),null==_||_()},se=()=>{var e;L(""),N(!1),null===(e=U.current)||void 0===e||e.focus(),null==_||_()},le=()=>{null==w||w()},ce=()=>{if(0===i.size){const e=[],t=[];q.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==x||x(e,t)}else null==x||x([],[])},de=tr(((e,t)=>((e,t,r,n,o)=>{const i=[],a=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((d,u)=>{var h,f;const p=s?s.level+1:0,g=s?[...s.keyPath,d.key]:[d.key],m=Py(g),b={item:d,index:i.length,indexInParent:u,parentSetSize:e.length,keyPath:g,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||o||(null==s?void 0:s.expanded)||!1,expanded:o,checked:t.has(m),hasSubItems:!!(null===(h=d.subItems)||void 0===h?void 0:h.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!n&&-1!==d.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(l.push(b),i.push(b),null===(f=d.subItems)||void 0===f?void 0:f.length){const e=a(d.subItems,b);if(r&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?b.checked=!0:r&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),i})(e,i,o,P,t))),ue=tr((e=>{return i.size?(t=de(e,!1),ky(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>ky(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const o=e[t].keyPath.length;if(o>n)n=o;else if(o<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],o=n.keyPath.slice(0,-1),i=e[r].keyPath.slice(0,o.length);_p(o,i)&&(n.visible=!0)}return e})))(de(e,!1));var t})),he=tr((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(P))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),fe=tr((()=>{Z((e=>Ry(e,i,o))),H&&Q((e=>Ry(e,i,o)))})),pe=(e,t,r)=>{const n=((e,t,r)=>ky(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let o=t+1;o<e.length;o++){const t=e[o],i=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!_p(n,a))break;t.visible=r&&i.expanded&&i.visible}})))(X,e,t);te(e),ie(r),H?Q(n):Z(n)};rr("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return e[n]})(X,(e=>e.visible),ee+1);r&&(ie((e=>e+1)),te(r.index),null===(t=V.current[r.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return e[n]})(X,(e=>e.visible),ee-1);t?(ie((e=>e-1)),te(t.index),null===(r=V.current[t.index])||void 0===r||r.focus()):0===oe&&U.current&&(U.current.focus(),ie(-1),te(-1));break}case"ArrowRight":e.preventDefault(),pe(ee,!0,oe);break;case"ArrowLeft":e.preventDefault(),pe(ee,!1,oe);break;case"Space":if(document.activeElement===V.current[ee]){e.preventDefault();const t=X[ee];if(t.hasSubItems&&!M)return;null==y||y(t)}}})),h((()=>{let e=[];"default"===m?e=ue(n):"expand"===m?e=de(n,!0):"collapse"===m&&(e=de(n,!1)),Z(e)}),[de,ue,n,m]),h((()=>{ne(X.filter((e=>e.visible)))}),[H,X]),h((()=>{fe()}),[o,i,fe]),h((()=>{if(H&&R.trim().length>=3){const e=he(n),t=(e=>ky(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(de(e,!1));Q(t)}}),[he,de,n,H,R]),h((()=>{K||(U.current?(te(-1),ie(-1),setTimeout((()=>{var e;return null===(e=U.current)||void 0===e?void 0:e.focus()}),200)):V.current[ee]?setTimeout((()=>{var e;return null===(e=V.current[ee])||void 0===e?void 0:e.focus()}),200):(te(0),ie(0),setTimeout((()=>{var e;return null===(e=V.current[0])||void 0===e?void 0:e.focus()}),200)))}),[ee,oe,K]);const ge=()=>{if($&&"success"===l)return e(Iv,{ref:U,onChange:ae,value:R,placeholder:T,"data-testid":"search-input","aria-label":"Enter text to search",onClear:se,variant:u})},me=()=>{if(o&&!H&&q.length>0&&"success"===l)return e(yv,{children:e($v,{onClick:ce,type:"button",$variant:u,children:0===i.size?E:O})})},ve=()=>{if(!C&&H&&0===G.length&&"success"===l)return t(r,{children:[t(Cv,{"data-testid":"list-no-results",children:[e(Sv,{"data-testid":"no-result-icon"}),F]}),I&&e(kv,{"data-testid":"no-result-desc",children:I})]})},ye=()=>{if(w&&"loading"===l)return t(Cv,{"data-testid":"list-loading",children:[e(Xs,{}),"Loading..."]})},xe=()=>{if(w&&"fail"===l)return t(Cv,{"data-testid":"list-fail",children:[e(Sv,{"data-testid":"load-error-icon"}),"Failed to load. ",e(wv,{onClick:le,type:"button",$variant:u,children:"Try again."})]})},we=t=>{if(o)switch(t.checked){case"mixed":return e(qy,{"aria-hidden":!0});case!0:return e(mv,{"aria-hidden":!0});default:return e(bv,{"aria-hidden":!0})}if(!t.hasSubItems)return e(Ky,{$hasNestedSiblings:t.hasNestedSiblings||0===t.level,children:t.checked&&e(pv,{"aria-hidden":!0})})},$e=(r,n)=>{const{level:i,visible:a,expanded:s,keyPath:l,checked:u,hasSubItems:h,indexInParent:f,parentSetSize:p}=r,g=r.index,m=oe===n,b=h&&!M;return t(Ny,{$visible:a,children:[J>0&&e(Yy,{$level:i}),J>0&&!h&&o&&e(Uy,{}),t(Wy,{"aria-checked":u,"aria-selected":!!u,"aria-expanded":h?s:void 0,"aria-level":i+1,"aria-posinset":f+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?pe(g,!s,n):((e,t)=>{ie(t),te(e),null==y||y(X[e])})(g,n)},onMouseEnter:()=>((e,t)=>{te(t.index),ie(e)})(n,r),ref:e=>V.current[r.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b,children:[h&&e(Vy,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),pe(g,!s,n)},$expanded:s,children:e(be,{})}),we(r),e(Hd,{bold:h,searchTerm:H?P:void 0,label:r.item.label,selected:!!u,truncationType:c,maxLines:d})]})]},`[${l.join("---")}]`)},Ce=()=>{var t;const r="test"===process.env.NODE_ENV;return e("div",{"aria-multiselectable":o,id:f,ref:Y,role:"tree",children:e(Ib,Object.assign({style:{height:"100%"},customScrollParent:null!==(t=W.current)&&void 0!==t?t:void 0,data:re,itemContent:(e,t)=>$e(t,e)},r?{initialItemCount:re.length}:{}),r?re.length:void 0)})};return e(dv,Object.assign({"data-testid":"dropdown-container",ref:nt(W,B),style:j},z(),{$width:p?A:void 0,$variant:u,$customWidth:g,children:t(uv,{"data-testid":"nested-dropdown-list",children:[ge(),me(),ve(),ye(),xe(),Ce()]})}))},Gy=k(rc)`
    display: flex;
    align-items: center;

    ${e=>"right"===e.$position?_`
                    flex-direction: row-reverse;
                `:_`
                    flex-direction: row;
                `}
`,Qy=k.div`
    flex: 0 0 auto;
`,Xy=k(Md)`
    ${e=>e.readOnly?_`
                padding: 0;
            `:"right"===e.$position?_`
                    padding-left: ${Zi["spacing-16"]};
                `:_`
                    padding-right: ${Zi["spacing-16"]};
                `}
`,Jy=k.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${Zi["spacing-12"]};
`,ex=k.div`
    width: 1px;
    background: ${Vi.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return _`
                display: none;
            `}}

    ${e=>"right"===e.$position?_`
                    margin-left: ${Zi["spacing-12"]};
                `:_`
                    margin-right: ${Zi["spacing-12"]};
                `}
`,tx=o.forwardRef(((r,n)=>{var{addon:o,error:i,onChange:l,readOnly:c,disabled:d,className:u,onBlur:f,"data-testid":p}=r,g=Fe(r,["addon","error","onChange","readOnly","disabled","className","onBlur","data-testid"]);const{valueExtractor:m,listExtractor:b,enableSearch:v,hideNoResultsDisplay:y,noResultsDescription:x,searchPlaceholder:w,searchFunction:$,onSearch:C,placeholder:S="Select",displayValueExtractor:D,"data-selector-testid":k,options:_,selectedOption:F,onSelectOption:E,optionsLoadState:O,optionTruncationType:T,onRetry:I,onHideOptions:M,onShowOptions:A,dropdownZIndex:B,dropdownRootNode:z}=o.attributes,{position:j}=o,[R,L]=s(F),[P,H]=s(!1),[N,W]=s(!1),[Y]=s((()=>ot.generate())),V=a(null),U=a(null),K=a(null);h((()=>{L(F)}),[F]);const q=()=>{if(R)return D?D(R):m?m(R):R.toString()},Z=e=>{e?null==A||A():null==M||M()},G=(e,t)=>{var r;null===(r=K.current)||void 0===r||r.focus(),L(e),H(!1),Z(!1),null==E||E(e,t)},Q=()=>{P&&(H(!1),Z(!1))},X=()=>{N||P||W(!0)},J=e=>{N&&!P&&V.current&&!V.current.contains(e.relatedTarget)&&(W(!1),null==f||f())},ee=()=>{H(!0),Z(!0),W(!0)},te=e=>{H(!1),Z(!1),"click"!==e&&(W(!1),null==f||f())},re=()=>{var e;null===(e=K.current)||void 0===e||e.focus(),H(!1),Z(!1)},ne=()=>e("div",{ref:V,tabIndex:-1,onFocus:X,onBlur:J,children:e(zv,{ref:K,disabled:d,expanded:P,listboxId:Y,popupRole:"listbox",readOnly:c,children:e($s,{$disabled:d,children:R?e(Cs,{children:q()}):e(Ss,{children:S})})})}),oe=()=>e(Mv,{listboxId:Y,listItems:_,onSelectItem:G,onDismiss:Q,valueExtractor:m,listExtractor:b,enableSearch:v,hideNoResultsDisplay:y,noResultsDescription:x,searchPlaceholder:w,searchFunction:$,onSearch:C,selectedItems:R?[R]:[],itemsLoadState:O,itemTruncationType:T,onRetry:I,matchElementWidth:!0});return e(cv,{children:t(Gy,{$focused:N,$disabled:d,$readOnly:c,$error:i,$position:j,ref:U,className:u,"data-testid":p,children:[e(Qy,{"data-testid":k,children:c?R?e(Jy,{"data-testid":"selector-label",children:e(Cs,{children:q()})}):null:e(Es,{enabled:!c&&!d,isOpen:P,renderElement:ne,renderDropdown:oe,onOpen:ee,onClose:te,onDismiss:re,clickToToggle:!0,offset:8,alignment:"right"===j?"right":"left",fitAvailableHeight:!0,customZIndex:B,rootNode:z,positionRef:U})}),e(ex,{$readOnly:c,$position:j}),e(Xy,Object.assign({ref:n},g,{$position:j,readOnly:c,disabled:d,error:i,onChange:e=>{l&&l(e)},"data-testid":"input",styleType:"no-border"}))]})})})),rx=k(rc)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${e=>e.$readOnly?"0":Zi["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,nx=k(rc)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${e=>e.$readOnly?"0":Zi["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,ox=k(Md)``,ix=k.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Ui["body-baseline-regular"]}
    color: ${Vi.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return _`
                color: ${Vi["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?_`
                    margin-left: ${e.$readOnly?Zi["spacing-4"]:Zi["spacing-12"]};
                `:_`
                    margin-right: ${e.$readOnly?Zi["spacing-4"]:Zi["spacing-12"]};
                `};
`,ax=o.forwardRef(((r,n)=>{var{addon:o,error:i,className:a}=r,s=Fe(r,["addon","error","className"]);const l=()=>e(nx,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a,children:e(ox,Object.assign({ref:n},s,{"data-testid":"input",styleType:"no-border"}))});if(!o)return l();{const{type:r="label",position:c="left"}=o,{allowClear:d}=s;switch(r){case"list":{const t=o.attributes;return t.options&&t.options.length>0?e(tx,Object.assign({ref:n,addon:o,error:i,className:a},s)):l()}case"custom":{const r=o.attributes;return r.children?t(rx,{$error:i,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[e(ix,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.children}),e(ox,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}default:{const r=o.attributes;return r.value?t(rx,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[e(ix,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.value}),e(ox,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}}}})),sx=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i,"data-error-testid":a,"data-testid":l,layoutType:c,mobileCols:d,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y}=t,x=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]),[w]=s((()=>`form-field-${ot.generate()}`)),$=null!=i?i:w;return e(fs,{id:$,label:n,errorMessage:o,disabled:x.disabled,"data-error-testid":a,layoutType:c,mobileCols:d,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(ax,Object.assign({ref:r,id:`${$}-base`,"data-testid":l?`${l}-base`:void 0,error:!!o},x))})})),lx=k(ax)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":Zi["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,cx=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=Vi.icon,$activeColor:r=Vi["icon-primary"]})=>e?t:r};
    padding: ${Zi["spacing-12"]} ${Zi["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,dx=k.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,ux=k(Ea.BodyBL)`
    color: ${Vi["text-subtler"]};
`,hx=k(Rs)`
    margin-right: ${Zi["spacing-8"]};
    color: ${Vi.icon};
`,fx=k.span`
    color: ${Vi["text-primary"]};
    text-decoration: underline;
    font-weight: ${Ui.Spec["weight-semibold"]};
`,px=k.span`
    display: flex;
    align-items: center;
    margin-right: ${Zi["spacing-8"]};
`,gx=k(we)`
    color: ${Vi["icon-warning"]};
    margin-right: ${Zi["spacing-8"]};
    height: 1em;
    width: 1em;
`,mx=k.span`
    color: ${Vi["text-warning"]};
`,bx=k(ic)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${Ui["body-baseline-regular"]}

    &:hover, &:active, &:focus {
        ${fx} {
            color: ${Vi["text-hover"]};
        }
    }
`;var vx,yx,xx={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */vx=xx,yx=xx.exports,function(){var e,t="Expected a function",r="__lodash_hash_undefined__",n="__lodash_placeholder__",o=16,i=32,a=64,s=128,l=256,c=1/0,d=9007199254740991,u=NaN,h=4294967295,f=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",o],["flip",512],["partial",i],["partialRight",a],["rearg",l]],p="[object Arguments]",g="[object Array]",m="[object Boolean]",b="[object Date]",v="[object Error]",y="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",C="[object Object]",S="[object Promise]",D="[object RegExp]",k="[object Set]",_="[object String]",F="[object Symbol]",E="[object WeakMap]",O="[object ArrayBuffer]",T="[object DataView]",I="[object Float32Array]",M="[object Float64Array]",A="[object Int8Array]",B="[object Int16Array]",z="[object Int32Array]",j="[object Uint8Array]",R="[object Uint8ClampedArray]",L="[object Uint16Array]",P="[object Uint32Array]",H=/\b__p \+= '';/g,N=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Y=/&(?:amp|lt|gt|quot|#39);/g,V=/[&<>"']/g,U=RegExp(Y.source),K=RegExp(V.source),q=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,G=/<%=([\s\S]+?)%>/g,Q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,X=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),re=/^\s+/,ne=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ie=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,ce=/\\(\\)?/g,de=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ue=/\w*$/,he=/^[-+]0x[0-9a-f]+$/i,fe=/^0b[01]+$/i,pe=/^\[object .+?Constructor\]$/,ge=/^0o[0-7]+$/i,me=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",$e="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",De="\\ufe0e\\ufe0f",ke="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",_e="['’]",Fe="["+xe+"]",Ee="["+ke+"]",Te="["+we+"]",Ie="\\d+",Me="["+$e+"]",Ae="["+Ce+"]",Be="[^"+xe+ke+Ie+$e+Ce+Se+"]",ze="\\ud83c[\\udffb-\\udfff]",je="[^"+xe+"]",Re="(?:\\ud83c[\\udde6-\\uddff]){2}",Le="[\\ud800-\\udbff][\\udc00-\\udfff]",Pe="["+Se+"]",He="\\u200d",Ne="(?:"+Ae+"|"+Be+")",We="(?:"+Pe+"|"+Be+")",Ye="(?:['’](?:d|ll|m|re|s|t|ve))?",Ve="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ue="(?:"+Te+"|"+ze+")?",Ke="["+De+"]?",qe=Ke+Ue+"(?:"+He+"(?:"+[je,Re,Le].join("|")+")"+Ke+Ue+")*",Ze="(?:"+[Me,Re,Le].join("|")+")"+qe,Ge="(?:"+[je+Te+"?",Te,Re,Le,Fe].join("|")+")",Qe=RegExp(_e,"g"),Xe=RegExp(Te,"g"),Je=RegExp(ze+"(?="+ze+")|"+Ge+qe,"g"),et=RegExp([Pe+"?"+Ae+"+"+Ye+"(?="+[Ee,Pe,"$"].join("|")+")",We+"+"+Ve+"(?="+[Ee,Pe+Ne,"$"].join("|")+")",Pe+"?"+Ne+"+"+Ye,Pe+"+"+Ve,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ie,Ze].join("|"),"g"),tt=RegExp("["+He+xe+we+De+"]"),rt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ot=-1,it={};it[I]=it[M]=it[A]=it[B]=it[z]=it[j]=it[R]=it[L]=it[P]=!0,it[p]=it[g]=it[O]=it[m]=it[T]=it[b]=it[v]=it[y]=it[w]=it[$]=it[C]=it[D]=it[k]=it[_]=it[E]=!1;var at={};at[p]=at[g]=at[O]=at[T]=at[m]=at[b]=at[I]=at[M]=at[A]=at[B]=at[z]=at[w]=at[$]=at[C]=at[D]=at[k]=at[_]=at[F]=at[j]=at[R]=at[L]=at[P]=!0,at[v]=at[y]=at[E]=!1;var st={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},lt=parseFloat,ct=parseInt,dt="object"==typeof Oe&&Oe&&Oe.Object===Object&&Oe,ut="object"==typeof self&&self&&self.Object===Object&&self,ht=dt||ut||Function("return this")(),ft=yx&&!yx.nodeType&&yx,pt=ft&&vx&&!vx.nodeType&&vx,gt=pt&&pt.exports===ft,mt=gt&&dt.process,bt=function(){try{var e=pt&&pt.require&&pt.require("util").types;return e||mt&&mt.binding&&mt.binding("util")}catch(e){}}(),vt=bt&&bt.isArrayBuffer,yt=bt&&bt.isDate,xt=bt&&bt.isMap,wt=bt&&bt.isRegExp,$t=bt&&bt.isSet,Ct=bt&&bt.isTypedArray;function St(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function Dt(e,t,r,n){for(var o=-1,i=null==e?0:e.length;++o<i;){var a=e[o];t(n,a,r(a),e)}return n}function kt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function _t(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Ft(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Et(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}function Ot(e,t){return!(null==e||!e.length)&&Pt(e,t,0)>-1}function Tt(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}function It(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function Mt(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}function At(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function Bt(e,t,r,n){var o=null==e?0:e.length;for(n&&o&&(r=e[--o]);o--;)r=t(r,e[o],o,e);return r}function zt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var jt=Yt("length");function Rt(e,t,r){var n;return r(e,(function(e,r,o){if(t(e,r,o))return n=r,!1})),n}function Lt(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}function Pt(e,t,r){return t==t?function(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}(e,t,r):Lt(e,Nt,r)}function Ht(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function Nt(e){return e!=e}function Wt(e,t){var r=null==e?0:e.length;return r?Kt(e,t)/r:u}function Yt(t){return function(r){return null==r?e:r[t]}}function Vt(t){return function(r){return null==t?e:t[r]}}function Ut(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r}function Kt(t,r){for(var n,o=-1,i=t.length;++o<i;){var a=r(t[o]);a!==e&&(n=n===e?a:n+a)}return n}function qt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Zt(e){return e?e.slice(0,hr(e)+1).replace(re,""):e}function Gt(e){return function(t){return e(t)}}function Qt(e,t){return It(t,(function(t){return e[t]}))}function Xt(e,t){return e.has(t)}function Jt(e,t){for(var r=-1,n=e.length;++r<n&&Pt(t,e[r],0)>-1;);return r}function er(e,t){for(var r=e.length;r--&&Pt(t,e[r],0)>-1;);return r}var tr=Vt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),rr=Vt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function nr(e){return"\\"+st[e]}function or(e){return tt.test(e)}function ir(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function ar(e,t){return function(r){return e(t(r))}}function sr(e,t){for(var r=-1,o=e.length,i=0,a=[];++r<o;){var s=e[r];s!==t&&s!==n||(e[r]=n,a[i++]=r)}return a}function lr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function cr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function dr(e){return or(e)?function(e){for(var t=Je.lastIndex=0;Je.test(e);)++t;return t}(e):jt(e)}function ur(e){return or(e)?function(e){return e.match(Je)||[]}(e):function(e){return e.split("")}(e)}function hr(e){for(var t=e.length;t--&&ne.test(e.charAt(t)););return t}var fr=Vt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),pr=function ne(xe){var we=(xe=null==xe?ht:pr.defaults(ht.Object(),xe,pr.pick(ht,nt))).Array,$e=xe.Date,Ce=xe.Error,Se=xe.Function,De=xe.Math,ke=xe.Object,_e=xe.RegExp,Fe=xe.String,Ee=xe.TypeError,Oe=we.prototype,Te=Se.prototype,Ie=ke.prototype,Me=xe["__core-js_shared__"],Ae=Te.toString,Be=Ie.hasOwnProperty,ze=0,je=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Re=Ie.toString,Le=Ae.call(ke),Pe=ht._,He=_e("^"+Ae.call(Be).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ne=gt?xe.Buffer:e,We=xe.Symbol,Ye=xe.Uint8Array,Ve=Ne?Ne.allocUnsafe:e,Ue=ar(ke.getPrototypeOf,ke),Ke=ke.create,qe=Ie.propertyIsEnumerable,Ze=Oe.splice,Ge=We?We.isConcatSpreadable:e,Je=We?We.iterator:e,tt=We?We.toStringTag:e,st=function(){try{var e=hi(ke,"defineProperty");return e({},"",{}),e}catch(e){}}(),dt=xe.clearTimeout!==ht.clearTimeout&&xe.clearTimeout,ut=$e&&$e.now!==ht.Date.now&&$e.now,ft=xe.setTimeout!==ht.setTimeout&&xe.setTimeout,pt=De.ceil,mt=De.floor,bt=ke.getOwnPropertySymbols,jt=Ne?Ne.isBuffer:e,Vt=xe.isFinite,gr=Oe.join,mr=ar(ke.keys,ke),br=De.max,vr=De.min,yr=$e.now,xr=xe.parseInt,wr=De.random,$r=Oe.reverse,Cr=hi(xe,"DataView"),Sr=hi(xe,"Map"),Dr=hi(xe,"Promise"),kr=hi(xe,"Set"),_r=hi(xe,"WeakMap"),Fr=hi(ke,"create"),Er=_r&&new _r,Or={},Tr=Ri(Cr),Ir=Ri(Sr),Mr=Ri(Dr),Ar=Ri(kr),Br=Ri(_r),zr=We?We.prototype:e,jr=zr?zr.valueOf:e,Rr=zr?zr.toString:e;function Lr(e){if(ts(e)&&!Ya(e)&&!(e instanceof Wr)){if(e instanceof Nr)return e;if(Be.call(e,"__wrapped__"))return Li(e)}return new Nr(e)}var Pr=function(){function t(){}return function(r){if(!es(r))return{};if(Ke)return Ke(r);t.prototype=r;var n=new t;return t.prototype=e,n}}();function Hr(){}function Nr(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}function Wr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=h,this.__views__=[]}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function qr(e){var t=this.__data__=new Vr(e);this.size=t.size}function Zr(e,t){var r=Ya(e),n=!r&&Wa(e),o=!r&&!n&&qa(e),i=!r&&!n&&!o&&cs(e),a=r||n||o||i,s=a?qt(e.length,Fe):[],l=s.length;for(var c in e)!t&&!Be.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||yi(c,l))||s.push(c);return s}function Gr(t){var r=t.length;return r?t[qn(0,r-1)]:e}function Qr(e,t){return Bi(Oo(e),sn(t,0,e.length))}function Xr(e){return Bi(Oo(e))}function Jr(t,r,n){(n!==e&&!Pa(t[r],n)||n===e&&!(r in t))&&on(t,r,n)}function en(t,r,n){var o=t[r];Be.call(t,r)&&Pa(o,n)&&(n!==e||r in t)||on(t,r,n)}function tn(e,t){for(var r=e.length;r--;)if(Pa(e[r][0],t))return r;return-1}function rn(e,t,r,n){return hn(e,(function(e,o,i){t(n,e,r(e),i)})),n}function nn(e,t){return e&&To(t,Ts(t),e)}function on(e,t,r){"__proto__"==t&&st?st(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(t,r){for(var n=-1,o=r.length,i=we(o),a=null==t;++n<o;)i[n]=a?e:ks(t,r[n]);return i}function sn(t,r,n){return t==t&&(n!==e&&(t=t<=n?t:n),r!==e&&(t=t>=r?t:r)),t}function ln(t,r,n,o,i,a){var s,l=1&r,c=2&r,d=4&r;if(n&&(s=i?n(t,o,i,a):n(t)),s!==e)return s;if(!es(t))return t;var u=Ya(t);if(u){if(s=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&Be.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(t),!l)return Oo(t,s)}else{var h=gi(t),f=h==y||h==x;if(qa(t))return So(t,l);if(h==C||h==p||f&&!i){if(s=c||f?{}:bi(t),!l)return c?function(e,t){return To(e,pi(e),t)}(t,function(e,t){return e&&To(t,Is(t),e)}(s,t)):function(e,t){return To(e,fi(e),t)}(t,nn(s,t))}else{if(!at[h])return i?t:{};s=function(e,t,r){var n,o=e.constructor;switch(t){case O:return Do(e);case m:case b:return new o(+e);case T:return function(e,t){var r=t?Do(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case I:case M:case A:case B:case z:case j:case R:case L:case P:return ko(e,r);case w:return new o;case $:case _:return new o(e);case D:return function(e){var t=new e.constructor(e.source,ue.exec(e));return t.lastIndex=e.lastIndex,t}(e);case k:return new o;case F:return n=e,jr?ke(jr.call(n)):{}}}(t,h,l)}}a||(a=new qr);var g=a.get(t);if(g)return g;a.set(t,s),as(t)?t.forEach((function(e){s.add(ln(e,r,n,e,t,a))})):rs(t)&&t.forEach((function(e,o){s.set(o,ln(e,r,n,o,t,a))}));var v=u?e:(d?c?ii:oi:c?Is:Ts)(t);return kt(v||t,(function(e,o){v&&(e=t[o=e]),en(s,o,ln(e,r,n,o,t,a))})),s}function cn(t,r,n){var o=n.length;if(null==t)return!o;for(t=ke(t);o--;){var i=n[o],a=r[i],s=t[i];if(s===e&&!(i in t)||!a(s))return!1}return!0}function dn(r,n,o){if("function"!=typeof r)throw new Ee(t);return Ti((function(){r.apply(e,o)}),n)}function un(e,t,r,n){var o=-1,i=Ot,a=!0,s=e.length,l=[],c=t.length;if(!s)return l;r&&(t=It(t,Gt(r))),n?(i=Tt,a=!1):t.length>=200&&(i=Xt,a=!1,t=new Kr(t));e:for(;++o<s;){var d=e[o],u=null==r?d:r(d);if(d=n||0!==d?d:0,a&&u==u){for(var h=c;h--;)if(t[h]===u)continue e;l.push(d)}else i(t,u,n)||l.push(d)}return l}Lr.templateSettings={escape:q,evaluate:Z,interpolate:G,variable:"",imports:{_:Lr}},Lr.prototype=Hr.prototype,Lr.prototype.constructor=Lr,Nr.prototype=Pr(Hr.prototype),Nr.prototype.constructor=Nr,Wr.prototype=Pr(Hr.prototype),Wr.prototype.constructor=Wr,Yr.prototype.clear=function(){this.__data__=Fr?Fr(null):{},this.size=0},Yr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yr.prototype.get=function(t){var n=this.__data__;if(Fr){var o=n[t];return o===r?e:o}return Be.call(n,t)?n[t]:e},Yr.prototype.has=function(t){var r=this.__data__;return Fr?r[t]!==e:Be.call(r,t)},Yr.prototype.set=function(t,n){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=Fr&&n===e?r:n,this},Vr.prototype.clear=function(){this.__data__=[],this.size=0},Vr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0||(r==t.length-1?t.pop():Ze.call(t,r,1),--this.size,0))},Vr.prototype.get=function(t){var r=this.__data__,n=tn(r,t);return n<0?e:r[n][1]},Vr.prototype.has=function(e){return tn(this.__data__,e)>-1},Vr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Yr,map:new(Sr||Vr),string:new Yr}},Ur.prototype.delete=function(e){var t=di(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return di(this,e).get(e)},Ur.prototype.has=function(e){return di(this,e).has(e)},Ur.prototype.set=function(e,t){var r=di(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,r),this},Kr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.clear=function(){this.__data__=new Vr,this.size=0},qr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},qr.prototype.get=function(e){return this.__data__.get(e)},qr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Vr){var n=r.__data__;if(!Sr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var hn=Ao(xn),fn=Ao(wn,!0);function pn(e,t){var r=!0;return hn(e,(function(e,n,o){return r=!!t(e,n,o)})),r}function gn(t,r,n){for(var o=-1,i=t.length;++o<i;){var a=t[o],s=r(a);if(null!=s&&(l===e?s==s&&!ls(s):n(s,l)))var l=s,c=a}return c}function mn(e,t){var r=[];return hn(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}function bn(e,t,r,n,o){var i=-1,a=e.length;for(r||(r=vi),o||(o=[]);++i<a;){var s=e[i];t>0&&r(s)?t>1?bn(s,t-1,r,n,o):Mt(o,s):n||(o[o.length]=s)}return o}var vn=Bo(),yn=Bo(!0);function xn(e,t){return e&&vn(e,t,Ts)}function wn(e,t){return e&&yn(e,t,Ts)}function $n(e,t){return Et(t,(function(t){return Qa(e[t])}))}function Cn(t,r){for(var n=0,o=(r=xo(r,t)).length;null!=t&&n<o;)t=t[ji(r[n++])];return n&&n==o?t:e}function Sn(e,t,r){var n=t(e);return Ya(e)?n:Mt(n,r(e))}function Dn(t){return null==t?t===e?"[object Undefined]":"[object Null]":tt&&tt in ke(t)?function(t){var r=Be.call(t,tt),n=t[tt];try{t[tt]=e;var o=!0}catch(e){}var i=Re.call(t);return o&&(r?t[tt]=n:delete t[tt]),i}(t):function(e){return Re.call(e)}(t)}function kn(e,t){return e>t}function _n(e,t){return null!=e&&Be.call(e,t)}function Fn(e,t){return null!=e&&t in ke(e)}function En(t,r,n){for(var o=n?Tt:Ot,i=t[0].length,a=t.length,s=a,l=we(a),c=1/0,d=[];s--;){var u=t[s];s&&r&&(u=It(u,Gt(r))),c=vr(u.length,c),l[s]=!n&&(r||i>=120&&u.length>=120)?new Kr(s&&u):e}u=t[0];var h=-1,f=l[0];e:for(;++h<i&&d.length<c;){var p=u[h],g=r?r(p):p;if(p=n||0!==p?p:0,!(f?Xt(f,g):o(d,g,n))){for(s=a;--s;){var m=l[s];if(!(m?Xt(m,g):o(t[s],g,n)))continue e}f&&f.push(g),d.push(p)}}return d}function On(t,r,n){var o=null==(t=Fi(t,r=xo(r,t)))?t:t[ji(Gi(r))];return null==o?e:St(o,t,n)}function Tn(e){return ts(e)&&Dn(e)==p}function In(t,r,n,o,i){return t===r||(null==t||null==r||!ts(t)&&!ts(r)?t!=t&&r!=r:function(t,r,n,o,i,a){var s=Ya(t),l=Ya(r),c=s?g:gi(t),d=l?g:gi(r),u=(c=c==p?C:c)==C,h=(d=d==p?C:d)==C,f=c==d;if(f&&qa(t)){if(!qa(r))return!1;s=!0,u=!1}if(f&&!u)return a||(a=new qr),s||cs(t)?ri(t,r,n,o,i,a):function(e,t,r,n,o,i,a){switch(r){case T:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case O:return!(e.byteLength!=t.byteLength||!i(new Ye(e),new Ye(t)));case m:case b:case $:return Pa(+e,+t);case v:return e.name==t.name&&e.message==t.message;case D:case _:return e==t+"";case w:var s=ir;case k:var l=1&n;if(s||(s=lr),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=ri(s(e),s(t),n,o,i,a);return a.delete(e),d;case F:if(jr)return jr.call(e)==jr.call(t)}return!1}(t,r,c,n,o,i,a);if(!(1&n)){var y=u&&Be.call(t,"__wrapped__"),x=h&&Be.call(r,"__wrapped__");if(y||x){var S=y?t.value():t,E=x?r.value():r;return a||(a=new qr),i(S,E,n,o,a)}}return!!f&&(a||(a=new qr),function(t,r,n,o,i,a){var s=1&n,l=oi(t),c=l.length,d=oi(r),u=d.length;if(c!=u&&!s)return!1;for(var h=c;h--;){var f=l[h];if(!(s?f in r:Be.call(r,f)))return!1}var p=a.get(t),g=a.get(r);if(p&&g)return p==r&&g==t;var m=!0;a.set(t,r),a.set(r,t);for(var b=s;++h<c;){var v=t[f=l[h]],y=r[f];if(o)var x=s?o(y,v,f,r,t,a):o(v,y,f,t,r,a);if(!(x===e?v===y||i(v,y,n,o,a):x)){m=!1;break}b||(b="constructor"==f)}if(m&&!b){var w=t.constructor,$=r.constructor;w==$||!("constructor"in t)||!("constructor"in r)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(t),a.delete(r),m}(t,r,n,o,i,a))}(t,r,n,o,In,i))}function Mn(t,r,n,o){var i=n.length,a=i,s=!o;if(null==t)return!a;for(t=ke(t);i--;){var l=n[i];if(s&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++i<a;){var c=(l=n[i])[0],d=t[c],u=l[1];if(s&&l[2]){if(d===e&&!(c in t))return!1}else{var h=new qr;if(o)var f=o(d,u,c,t,r,h);if(!(f===e?In(u,d,3,o,h):f))return!1}}return!0}function An(e){return!(!es(e)||(t=e,je&&je in t))&&(Qa(e)?He:pe).test(Ri(e));var t}function Bn(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Ya(e)?Hn(e[0],e[1]):Pn(e):hl(e)}function zn(e){if(!Si(e))return mr(e);var t=[];for(var r in ke(e))Be.call(e,r)&&"constructor"!=r&&t.push(r);return t}function jn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in ke(e))t.push(r);return t}(e);var t=Si(e),r=[];for(var n in e)("constructor"!=n||!t&&Be.call(e,n))&&r.push(n);return r}function Rn(e,t){return e<t}function Ln(e,t){var r=-1,n=Ua(e)?we(e.length):[];return hn(e,(function(e,o,i){n[++r]=t(e,o,i)})),n}function Pn(e){var t=ui(e);return 1==t.length&&t[0][2]?ki(t[0][0],t[0][1]):function(r){return r===e||Mn(r,e,t)}}function Hn(t,r){return wi(t)&&Di(r)?ki(ji(t),r):function(n){var o=ks(n,t);return o===e&&o===r?_s(n,t):In(r,o,3)}}function Nn(t,r,n,o,i){t!==r&&vn(r,(function(a,s){if(i||(i=new qr),es(a))!function(t,r,n,o,i,a,s){var l=Ei(t,n),c=Ei(r,n),d=s.get(c);if(d)Jr(t,n,d);else{var u=a?a(l,c,n+"",t,r,s):e,h=u===e;if(h){var f=Ya(c),p=!f&&qa(c),g=!f&&!p&&cs(c);u=c,f||p||g?Ya(l)?u=l:Ka(l)?u=Oo(l):p?(h=!1,u=So(c,!0)):g?(h=!1,u=ko(c,!0)):u=[]:os(c)||Wa(c)?(u=l,Wa(l)?u=bs(l):es(l)&&!Qa(l)||(u=bi(c))):h=!1}h&&(s.set(c,u),i(u,c,o,a,s),s.delete(c)),Jr(t,n,u)}}(t,r,s,n,Nn,o,i);else{var l=o?o(Ei(t,s),a,s+"",t,r,i):e;l===e&&(l=a),Jr(t,s,l)}}),Is)}function Wn(t,r){var n=t.length;if(n)return yi(r+=r<0?n:0,n)?t[r]:e}function Yn(e,t,r){t=t.length?It(t,(function(e){return Ya(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=It(t,Gt(ci()));var o=Ln(e,(function(e,r,o){var i=It(t,(function(t){return t(e)}));return{criteria:i,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(o,(function(e,t){return function(e,t,r){for(var n=-1,o=e.criteria,i=t.criteria,a=o.length,s=r.length;++n<a;){var l=_o(o[n],i[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Vn(e,t,r){for(var n=-1,o=t.length,i={};++n<o;){var a=t[n],s=Cn(e,a);r(s,a)&&Jn(i,xo(a,e),s)}return i}function Un(e,t,r,n){var o=n?Ht:Pt,i=-1,a=t.length,s=e;for(e===t&&(t=Oo(t)),r&&(s=It(e,Gt(r)));++i<a;)for(var l=0,c=t[i],d=r?r(c):c;(l=o(s,d,l,n))>-1;)s!==e&&Ze.call(s,l,1),Ze.call(e,l,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var o=t[r];if(r==n||o!==i){var i=o;yi(o)?Ze.call(e,o,1):ho(e,o)}}return e}function qn(e,t){return e+mt(wr()*(t-e+1))}function Zn(e,t){var r="";if(!e||t<1||t>d)return r;do{t%2&&(r+=e),(t=mt(t/2))&&(e+=e)}while(t);return r}function Gn(e,t){return Ii(_i(e,t,nl),e+"")}function Qn(e){return Gr(Ps(e))}function Xn(e,t){var r=Ps(e);return Bi(r,sn(t,0,r.length))}function Jn(t,r,n,o){if(!es(t))return t;for(var i=-1,a=(r=xo(r,t)).length,s=a-1,l=t;null!=l&&++i<a;){var c=ji(r[i]),d=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(i!=s){var u=l[c];(d=o?o(u,c,l):e)===e&&(d=es(u)?u:yi(r[i+1])?[]:{})}en(l,c,d),l=l[c]}return t}var eo=Er?function(e,t){return Er.set(e,t),e}:nl,to=st?function(e,t){return st(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ro(e){return Bi(Ps(e))}function no(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=we(o);++n<o;)i[n]=e[n+t];return i}function oo(e,t){var r;return hn(e,(function(e,n,o){return!(r=t(e,n,o))})),!!r}function io(e,t,r){var n=0,o=null==e?n:e.length;if("number"==typeof t&&t==t&&o<=2147483647){for(;n<o;){var i=n+o>>>1,a=e[i];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=i+1:o=i}return o}return ao(e,t,nl,r)}function ao(t,r,n,o){var i=0,a=null==t?0:t.length;if(0===a)return 0;for(var s=(r=n(r))!=r,l=null===r,c=ls(r),d=r===e;i<a;){var u=mt((i+a)/2),h=n(t[u]),f=h!==e,p=null===h,g=h==h,m=ls(h);if(s)var b=o||g;else b=d?g&&(o||f):l?g&&f&&(o||!p):c?g&&f&&!p&&(o||!m):!p&&!m&&(o?h<=r:h<r);b?i=u+1:a=u}return vr(a,4294967294)}function so(e,t){for(var r=-1,n=e.length,o=0,i=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!Pa(s,l)){var l=s;i[o++]=0===a?0:a}}return i}function lo(e){return"number"==typeof e?e:ls(e)?u:+e}function co(e){if("string"==typeof e)return e;if(Ya(e))return It(e,co)+"";if(ls(e))return Rr?Rr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function uo(e,t,r){var n=-1,o=Ot,i=e.length,a=!0,s=[],l=s;if(r)a=!1,o=Tt;else if(i>=200){var c=t?null:Go(e);if(c)return lr(c);a=!1,o=Xt,l=new Kr}else l=t?[]:s;e:for(;++n<i;){var d=e[n],u=t?t(d):d;if(d=r||0!==d?d:0,a&&u==u){for(var h=l.length;h--;)if(l[h]===u)continue e;t&&l.push(u),s.push(d)}else o(l,u,r)||(l!==s&&l.push(u),s.push(d))}return s}function ho(e,t){return null==(e=Fi(e,t=xo(t,e)))||delete e[ji(Gi(t))]}function fo(e,t,r,n){return Jn(e,t,r(Cn(e,t)),n)}function po(e,t,r,n){for(var o=e.length,i=n?o:-1;(n?i--:++i<o)&&t(e[i],i,e););return r?no(e,n?0:i,n?i+1:o):no(e,n?i+1:0,n?o:i)}function go(e,t){var r=e;return r instanceof Wr&&(r=r.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,Mt([e],t.args))}),r)}function mo(e,t,r){var n=e.length;if(n<2)return n?uo(e[0]):[];for(var o=-1,i=we(n);++o<n;)for(var a=e[o],s=-1;++s<n;)s!=o&&(i[o]=un(i[o]||a,e[s],t,r));return uo(bn(i,1),t,r)}function bo(t,r,n){for(var o=-1,i=t.length,a=r.length,s={};++o<i;){var l=o<a?r[o]:e;n(s,t[o],l)}return s}function vo(e){return Ka(e)?e:[]}function yo(e){return"function"==typeof e?e:nl}function xo(e,t){return Ya(e)?e:wi(e,t)?[e]:zi(vs(e))}var wo=Gn;function $o(t,r,n){var o=t.length;return n=n===e?o:n,!r&&n>=o?t:no(t,r,n)}var Co=dt||function(e){return ht.clearTimeout(e)};function So(e,t){if(t)return e.slice();var r=e.length,n=Ve?Ve(r):new e.constructor(r);return e.copy(n),n}function Do(e){var t=new e.constructor(e.byteLength);return new Ye(t).set(new Ye(e)),t}function ko(e,t){var r=t?Do(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function _o(t,r){if(t!==r){var n=t!==e,o=null===t,i=t==t,a=ls(t),s=r!==e,l=null===r,c=r==r,d=ls(r);if(!l&&!d&&!a&&t>r||a&&s&&c&&!l&&!d||o&&s&&c||!n&&c||!i)return 1;if(!o&&!a&&!d&&t<r||d&&n&&i&&!o&&!a||l&&n&&i||!s&&i||!c)return-1}return 0}function Fo(e,t,r,n){for(var o=-1,i=e.length,a=r.length,s=-1,l=t.length,c=br(i-a,0),d=we(l+c),u=!n;++s<l;)d[s]=t[s];for(;++o<a;)(u||o<i)&&(d[r[o]]=e[o]);for(;c--;)d[s++]=e[o++];return d}function Eo(e,t,r,n){for(var o=-1,i=e.length,a=-1,s=r.length,l=-1,c=t.length,d=br(i-s,0),u=we(d+c),h=!n;++o<d;)u[o]=e[o];for(var f=o;++l<c;)u[f+l]=t[l];for(;++a<s;)(h||o<i)&&(u[f+r[a]]=e[o++]);return u}function Oo(e,t){var r=-1,n=e.length;for(t||(t=we(n));++r<n;)t[r]=e[r];return t}function To(t,r,n,o){var i=!n;n||(n={});for(var a=-1,s=r.length;++a<s;){var l=r[a],c=o?o(n[l],t[l],l,n,t):e;c===e&&(c=t[l]),i?on(n,l,c):en(n,l,c)}return n}function Io(e,t){return function(r,n){var o=Ya(r)?Dt:rn,i=t?t():{};return o(r,e,ci(n,2),i)}}function Mo(t){return Gn((function(r,n){var o=-1,i=n.length,a=i>1?n[i-1]:e,s=i>2?n[2]:e;for(a=t.length>3&&"function"==typeof a?(i--,a):e,s&&xi(n[0],n[1],s)&&(a=i<3?e:a,i=1),r=ke(r);++o<i;){var l=n[o];l&&t(r,l,o,a)}return r}))}function Ao(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=ke(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}function Bo(e){return function(t,r,n){for(var o=-1,i=ke(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}}function zo(t){return function(r){var n=or(r=vs(r))?ur(r):e,o=n?n[0]:r.charAt(0),i=n?$o(n,1).join(""):r.slice(1);return o[t]()+i}}function jo(e){return function(t){return At(Qs(Ws(t).replace(Qe,"")),e,"")}}function Ro(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Pr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function Lo(t){return function(r,n,o){var i=ke(r);if(!Ua(r)){var a=ci(n,3);r=Ts(r),n=function(e){return a(i[e],e,i)}}var s=t(r,n,o);return s>-1?i[a?r[s]:s]:e}}function Po(r){return ni((function(n){var o=n.length,i=o,a=Nr.prototype.thru;for(r&&n.reverse();i--;){var s=n[i];if("function"!=typeof s)throw new Ee(t);if(a&&!l&&"wrapper"==si(s))var l=new Nr([],!0)}for(i=l?i:o;++i<o;){var c=si(s=n[i]),d="wrapper"==c?ai(s):e;l=d&&$i(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[si(d[0])].apply(l,d[3]):1==s.length&&$i(s)?l[c]():l.thru(s)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Ya(t))return l.plant(t).value();for(var r=0,i=o?n[r].apply(this,e):t;++r<o;)i=n[r].call(this,i);return i}}))}function Ho(t,r,n,o,i,a,l,c,d,u){var h=r&s,f=1&r,p=2&r,g=24&r,m=512&r,b=p?e:Ro(t);return function s(){for(var v=arguments.length,y=we(v),x=v;x--;)y[x]=arguments[x];if(g)var w=li(s),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,w);if(o&&(y=Fo(y,o,i,g)),a&&(y=Eo(y,a,l,g)),v-=$,g&&v<u){var C=sr(y,w);return qo(t,r,Ho,s.placeholder,n,y,C,c,d,u-v)}var S=f?n:this,D=p?S[t]:t;return v=y.length,c?y=function(t,r){for(var n=t.length,o=vr(r.length,n),i=Oo(t);o--;){var a=r[o];t[o]=yi(a,n)?i[a]:e}return t}(y,c):m&&v>1&&y.reverse(),h&&d<v&&(y.length=d),this&&this!==ht&&this instanceof s&&(D=b||Ro(D)),D.apply(S,y)}}function No(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,o,i){t(n,r(e),o,i)})),n}(r,e,t(n),{})}}function Wo(t,r){return function(n,o){var i;if(n===e&&o===e)return r;if(n!==e&&(i=n),o!==e){if(i===e)return o;"string"==typeof n||"string"==typeof o?(n=co(n),o=co(o)):(n=lo(n),o=lo(o)),i=t(n,o)}return i}}function Yo(e){return ni((function(t){return t=It(t,Gt(ci())),Gn((function(r){var n=this;return e(t,(function(e){return St(e,n,r)}))}))}))}function Vo(t,r){var n=(r=r===e?" ":co(r)).length;if(n<2)return n?Zn(r,t):r;var o=Zn(r,pt(t/dr(r)));return or(r)?$o(ur(o),0,t).join(""):o.slice(0,t)}function Uo(t){return function(r,n,o){return o&&"number"!=typeof o&&xi(r,n,o)&&(n=o=e),r=fs(r),n===e?(n=r,r=0):n=fs(n),function(e,t,r,n){for(var o=-1,i=br(pt((t-e)/(r||1)),0),a=we(i);i--;)a[n?i:++o]=e,e+=r;return a}(r,n,o=o===e?r<n?1:-1:fs(o),t)}}function Ko(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ms(t),r=ms(r)),e(t,r)}}function qo(t,r,n,o,s,l,c,d,u,h){var f=8&r;r|=f?i:a,4&(r&=~(f?a:i))||(r&=-4);var p=[t,r,s,f?l:e,f?c:e,f?e:l,f?e:c,d,u,h],g=n.apply(e,p);return $i(t)&&Oi(g,p),g.placeholder=o,Mi(g,t,r)}function Zo(e){var t=De[e];return function(e,r){if(e=ms(e),(r=null==r?0:vr(ps(r),292))&&Vt(e)){var n=(vs(e)+"e").split("e");return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Go=kr&&1/lr(new kr([,-0]))[1]==c?function(e){return new kr(e)}:ll;function Qo(e){return function(t){var r=gi(t);return r==w?ir(t):r==k?cr(t):function(e,t){return It(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Xo(r,c,d,u,h,f,p,g){var m=2&c;if(!m&&"function"!=typeof r)throw new Ee(t);var b=u?u.length:0;if(b||(c&=-97,u=h=e),p=p===e?p:br(ps(p),0),g=g===e?g:ps(g),b-=h?h.length:0,c&a){var v=u,y=h;u=h=e}var x=m?e:ai(r),w=[r,c,d,u,h,v,y,f,p,g];if(x&&function(e,t){var r=e[1],o=t[1],i=r|o,a=i<131,c=o==s&&8==r||o==s&&r==l&&e[7].length<=t[8]||384==o&&t[7].length<=t[8]&&8==r;if(!a&&!c)return e;1&o&&(e[2]=t[2],i|=1&r?0:4);var d=t[3];if(d){var u=e[3];e[3]=u?Fo(u,d,t[4]):d,e[4]=u?sr(e[3],n):t[4]}(d=t[5])&&(u=e[5],e[5]=u?Eo(u,d,t[6]):d,e[6]=u?sr(e[5],n):t[6]),(d=t[7])&&(e[7]=d),o&s&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}(w,x),r=w[0],c=w[1],d=w[2],u=w[3],h=w[4],!(g=w[9]=w[9]===e?m?0:r.length:br(w[9]-b,0))&&24&c&&(c&=-25),c&&1!=c)$=8==c||c==o?function(t,r,n){var o=Ro(t);return function i(){for(var a=arguments.length,s=we(a),l=a,c=li(i);l--;)s[l]=arguments[l];var d=a<3&&s[0]!==c&&s[a-1]!==c?[]:sr(s,c);return(a-=d.length)<n?qo(t,r,Ho,i.placeholder,e,s,d,e,e,n-a):St(this&&this!==ht&&this instanceof i?o:t,this,s)}}(r,c,g):c!=i&&33!=c||h.length?Ho.apply(e,w):function(e,t,r,n){var o=1&t,i=Ro(e);return function t(){for(var a=-1,s=arguments.length,l=-1,c=n.length,d=we(c+s),u=this&&this!==ht&&this instanceof t?i:e;++l<c;)d[l]=n[l];for(;s--;)d[l++]=arguments[++a];return St(u,o?r:this,d)}}(r,c,d,u);else var $=function(e,t,r){var n=1&t,o=Ro(e);return function t(){return(this&&this!==ht&&this instanceof t?o:e).apply(n?r:this,arguments)}}(r,c,d);return Mi((x?eo:Oi)($,w),r,c)}function Jo(t,r,n,o){return t===e||Pa(t,Ie[n])&&!Be.call(o,n)?r:t}function ei(t,r,n,o,i,a){return es(t)&&es(r)&&(a.set(r,t),Nn(t,r,e,ei,a),a.delete(r)),t}function ti(t){return os(t)?e:t}function ri(t,r,n,o,i,a){var s=1&n,l=t.length,c=r.length;if(l!=c&&!(s&&c>l))return!1;var d=a.get(t),u=a.get(r);if(d&&u)return d==r&&u==t;var h=-1,f=!0,p=2&n?new Kr:e;for(a.set(t,r),a.set(r,t);++h<l;){var g=t[h],m=r[h];if(o)var b=s?o(m,g,h,r,t,a):o(g,m,h,t,r,a);if(b!==e){if(b)continue;f=!1;break}if(p){if(!zt(r,(function(e,t){if(!Xt(p,t)&&(g===e||i(g,e,n,o,a)))return p.push(t)}))){f=!1;break}}else if(g!==m&&!i(g,m,n,o,a)){f=!1;break}}return a.delete(t),a.delete(r),f}function ni(t){return Ii(_i(t,e,Vi),t+"")}function oi(e){return Sn(e,Ts,fi)}function ii(e){return Sn(e,Is,pi)}var ai=Er?function(e){return Er.get(e)}:ll;function si(e){for(var t=e.name+"",r=Or[t],n=Be.call(Or,t)?r.length:0;n--;){var o=r[n],i=o.func;if(null==i||i==e)return o.name}return t}function li(e){return(Be.call(Lr,"placeholder")?Lr:e).placeholder}function ci(){var e=Lr.iteratee||ol;return e=e===ol?Bn:e,arguments.length?e(arguments[0],arguments[1]):e}function di(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function ui(e){for(var t=Ts(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Di(o)]}return t}function hi(t,r){var n=function(t,r){return null==t?e:t[r]}(t,r);return An(n)?n:e}var fi=bt?function(e){return null==e?[]:(e=ke(e),Et(bt(e),(function(t){return qe.call(e,t)})))}:gl,pi=bt?function(e){for(var t=[];e;)Mt(t,fi(e)),e=Ue(e);return t}:gl,gi=Dn;function mi(e,t,r){for(var n=-1,o=(t=xo(t,e)).length,i=!1;++n<o;){var a=ji(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Ja(o)&&yi(a,o)&&(Ya(e)||Wa(e))}function bi(e){return"function"!=typeof e.constructor||Si(e)?{}:Pr(Ue(e))}function vi(e){return Ya(e)||Wa(e)||!!(Ge&&e&&e[Ge])}function yi(e,t){var r=typeof e;return!!(t=null==t?d:t)&&("number"==r||"symbol"!=r&&me.test(e))&&e>-1&&e%1==0&&e<t}function xi(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yi(t,r.length):"string"==n&&t in r)&&Pa(r[t],e)}function wi(e,t){if(Ya(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||X.test(e)||!Q.test(e)||null!=t&&e in ke(t)}function $i(e){var t=si(e),r=Lr[t];if("function"!=typeof r||!(t in Wr.prototype))return!1;if(e===r)return!0;var n=ai(r);return!!n&&e===n[0]}(Cr&&gi(new Cr(new ArrayBuffer(1)))!=T||Sr&&gi(new Sr)!=w||Dr&&gi(Dr.resolve())!=S||kr&&gi(new kr)!=k||_r&&gi(new _r)!=E)&&(gi=function(t){var r=Dn(t),n=r==C?t.constructor:e,o=n?Ri(n):"";if(o)switch(o){case Tr:return T;case Ir:return w;case Mr:return S;case Ar:return k;case Br:return E}return r});var Ci=Me?Qa:ml;function Si(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ie)}function Di(e){return e==e&&!es(e)}function ki(t,r){return function(n){return null!=n&&n[t]===r&&(r!==e||t in ke(n))}}function _i(t,r,n){return r=br(r===e?t.length-1:r,0),function(){for(var e=arguments,o=-1,i=br(e.length-r,0),a=we(i);++o<i;)a[o]=e[r+o];o=-1;for(var s=we(r+1);++o<r;)s[o]=e[o];return s[r]=n(a),St(t,this,s)}}function Fi(e,t){return t.length<2?e:Cn(e,no(t,0,-1))}function Ei(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Oi=Ai(eo),Ti=ft||function(e,t){return ht.setTimeout(e,t)},Ii=Ai(to);function Mi(e,t,r){var n=t+"";return Ii(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return kt(f,(function(r){var n="_."+r[0];t&r[1]&&!Ot(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(ie);return t?t[1].split(ae):[]}(n),r)))}function Ai(t){var r=0,n=0;return function(){var o=yr(),i=16-(o-n);if(n=o,i>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(e,arguments)}}function Bi(t,r){var n=-1,o=t.length,i=o-1;for(r=r===e?o:r;++n<r;){var a=qn(n,i),s=t[a];t[a]=t[n],t[n]=s}return t.length=r,t}var zi=function(e){var t=Aa(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(J,(function(e,r,n,o){t.push(n?o.replace(ce,"$1"):r||e)})),t}));function ji(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Ri(e){if(null!=e){try{return Ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Li(e){if(e instanceof Wr)return e.clone();var t=new Nr(e.__wrapped__,e.__chain__);return t.__actions__=Oo(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Pi=Gn((function(e,t){return Ka(e)?un(e,bn(t,1,Ka,!0)):[]})),Hi=Gn((function(t,r){var n=Gi(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),ci(n,2)):[]})),Ni=Gn((function(t,r){var n=Gi(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),e,n):[]}));function Wi(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ps(r);return o<0&&(o=br(n+o,0)),Lt(e,ci(t,3),o)}function Yi(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o-1;return n!==e&&(i=ps(n),i=n<0?br(o+i,0):vr(i,o-1)),Lt(t,ci(r,3),i,!0)}function Vi(e){return null!=e&&e.length?bn(e,1):[]}function Ui(t){return t&&t.length?t[0]:e}var Ki=Gn((function(e){var t=It(e,vo);return t.length&&t[0]===e[0]?En(t):[]})),qi=Gn((function(t){var r=Gi(t),n=It(t,vo);return r===Gi(n)?r=e:n.pop(),n.length&&n[0]===t[0]?En(n,ci(r,2)):[]})),Zi=Gn((function(t){var r=Gi(t),n=It(t,vo);return(r="function"==typeof r?r:e)&&n.pop(),n.length&&n[0]===t[0]?En(n,e,r):[]}));function Gi(t){var r=null==t?0:t.length;return r?t[r-1]:e}var Qi=Gn(Xi);function Xi(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Ji=ni((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Kn(e,It(t,(function(e){return yi(e,r)?+e:e})).sort(_o)),n}));function ea(e){return null==e?e:$r.call(e)}var ta=Gn((function(e){return uo(bn(e,1,Ka,!0))})),ra=Gn((function(t){var r=Gi(t);return Ka(r)&&(r=e),uo(bn(t,1,Ka,!0),ci(r,2))})),na=Gn((function(t){var r=Gi(t);return r="function"==typeof r?r:e,uo(bn(t,1,Ka,!0),e,r)}));function oa(e){if(!e||!e.length)return[];var t=0;return e=Et(e,(function(e){if(Ka(e))return t=br(e.length,t),!0})),qt(t,(function(t){return It(e,Yt(t))}))}function ia(t,r){if(!t||!t.length)return[];var n=oa(t);return null==r?n:It(n,(function(t){return St(r,e,t)}))}var aa=Gn((function(e,t){return Ka(e)?un(e,t):[]})),sa=Gn((function(e){return mo(Et(e,Ka))})),la=Gn((function(t){var r=Gi(t);return Ka(r)&&(r=e),mo(Et(t,Ka),ci(r,2))})),ca=Gn((function(t){var r=Gi(t);return r="function"==typeof r?r:e,mo(Et(t,Ka),e,r)})),da=Gn(oa),ua=Gn((function(t){var r=t.length,n=r>1?t[r-1]:e;return n="function"==typeof n?(t.pop(),n):e,ia(t,n)}));function ha(e){var t=Lr(e);return t.__chain__=!0,t}function fa(e,t){return t(e)}var pa=ni((function(t){var r=t.length,n=r?t[0]:0,o=this.__wrapped__,i=function(e){return an(e,t)};return!(r>1||this.__actions__.length)&&o instanceof Wr&&yi(n)?((o=o.slice(n,+n+(r?1:0))).__actions__.push({func:fa,args:[i],thisArg:e}),new Nr(o,this.__chain__).thru((function(t){return r&&!t.length&&t.push(e),t}))):this.thru(i)})),ga=Io((function(e,t,r){Be.call(e,r)?++e[r]:on(e,r,1)})),ma=Lo(Wi),ba=Lo(Yi);function va(e,t){return(Ya(e)?kt:hn)(e,ci(t,3))}function ya(e,t){return(Ya(e)?_t:fn)(e,ci(t,3))}var xa=Io((function(e,t,r){Be.call(e,r)?e[r].push(t):on(e,r,[t])})),wa=Gn((function(e,t,r){var n=-1,o="function"==typeof t,i=Ua(e)?we(e.length):[];return hn(e,(function(e){i[++n]=o?St(t,e,r):On(e,t,r)})),i})),$a=Io((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Ya(e)?It:Ln)(e,ci(t,3))}var Sa=Io((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]})),Da=Gn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xi(e,t[0],t[1])?t=[]:r>2&&xi(t[0],t[1],t[2])&&(t=[t[0]]),Yn(e,bn(t,1),[])})),ka=ut||function(){return ht.Date.now()};function _a(t,r,n){return r=n?e:r,r=t&&null==r?t.length:r,Xo(t,s,e,e,e,e,r)}function Fa(r,n){var o;if("function"!=typeof n)throw new Ee(t);return r=ps(r),function(){return--r>0&&(o=n.apply(this,arguments)),r<=1&&(n=e),o}}var Ea=Gn((function(e,t,r){var n=1;if(r.length){var o=sr(r,li(Ea));n|=i}return Xo(e,n,t,r,o)})),Oa=Gn((function(e,t,r){var n=3;if(r.length){var o=sr(r,li(Oa));n|=i}return Xo(t,n,e,r,o)}));function Ta(r,n,o){var i,a,s,l,c,d,u=0,h=!1,f=!1,p=!0;if("function"!=typeof r)throw new Ee(t);function g(t){var n=i,o=a;return i=a=e,u=t,l=r.apply(o,n)}function m(t){var r=t-d;return d===e||r>=n||r<0||f&&t-u>=s}function b(){var e=ka();if(m(e))return v(e);c=Ti(b,function(e){var t=n-(e-d);return f?vr(t,s-(e-u)):t}(e))}function v(t){return c=e,p&&i?g(t):(i=a=e,l)}function y(){var t=ka(),r=m(t);if(i=arguments,a=this,d=t,r){if(c===e)return function(e){return u=e,c=Ti(b,n),h?g(e):l}(d);if(f)return Co(c),c=Ti(b,n),g(d)}return c===e&&(c=Ti(b,n)),l}return n=ms(n)||0,es(o)&&(h=!!o.leading,s=(f="maxWait"in o)?br(ms(o.maxWait)||0,n):s,p="trailing"in o?!!o.trailing:p),y.cancel=function(){c!==e&&Co(c),u=0,i=d=a=c=e},y.flush=function(){return c===e?l:v(ka())},y}var Ia=Gn((function(e,t){return dn(e,1,t)})),Ma=Gn((function(e,t,r){return dn(e,ms(t)||0,r)}));function Aa(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new Ee(t);var n=function(){var t=arguments,o=r?r.apply(this,t):t[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,t);return n.cache=i.set(o,a)||i,a};return n.cache=new(Aa.Cache||Ur),n}function Ba(e){if("function"!=typeof e)throw new Ee(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Aa.Cache=Ur;var za=wo((function(e,t){var r=(t=1==t.length&&Ya(t[0])?It(t[0],Gt(ci())):It(bn(t,1),Gt(ci()))).length;return Gn((function(n){for(var o=-1,i=vr(n.length,r);++o<i;)n[o]=t[o].call(this,n[o]);return St(e,this,n)}))})),ja=Gn((function(t,r){var n=sr(r,li(ja));return Xo(t,i,e,r,n)})),Ra=Gn((function(t,r){var n=sr(r,li(Ra));return Xo(t,a,e,r,n)})),La=ni((function(t,r){return Xo(t,l,e,e,e,r)}));function Pa(e,t){return e===t||e!=e&&t!=t}var Ha=Ko(kn),Na=Ko((function(e,t){return e>=t})),Wa=Tn(function(){return arguments}())?Tn:function(e){return ts(e)&&Be.call(e,"callee")&&!qe.call(e,"callee")},Ya=we.isArray,Va=vt?Gt(vt):function(e){return ts(e)&&Dn(e)==O};function Ua(e){return null!=e&&Ja(e.length)&&!Qa(e)}function Ka(e){return ts(e)&&Ua(e)}var qa=jt||ml,Za=yt?Gt(yt):function(e){return ts(e)&&Dn(e)==b};function Ga(e){if(!ts(e))return!1;var t=Dn(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!os(e)}function Qa(e){if(!es(e))return!1;var t=Dn(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Xa(e){return"number"==typeof e&&e==ps(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=d}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=xt?Gt(xt):function(e){return ts(e)&&gi(e)==w};function ns(e){return"number"==typeof e||ts(e)&&Dn(e)==$}function os(e){if(!ts(e)||Dn(e)!=C)return!1;var t=Ue(e);if(null===t)return!0;var r=Be.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Ae.call(r)==Le}var is=wt?Gt(wt):function(e){return ts(e)&&Dn(e)==D},as=$t?Gt($t):function(e){return ts(e)&&gi(e)==k};function ss(e){return"string"==typeof e||!Ya(e)&&ts(e)&&Dn(e)==_}function ls(e){return"symbol"==typeof e||ts(e)&&Dn(e)==F}var cs=Ct?Gt(Ct):function(e){return ts(e)&&Ja(e.length)&&!!it[Dn(e)]},ds=Ko(Rn),us=Ko((function(e,t){return e<=t}));function hs(e){if(!e)return[];if(Ua(e))return ss(e)?ur(e):Oo(e);if(Je&&e[Je])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Je]());var t=gi(e);return(t==w?ir:t==k?lr:Ps)(e)}function fs(e){return e?(e=ms(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=fs(e),r=t%1;return t==t?r?t-r:t:0}function gs(e){return e?sn(ps(e),0,h):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return u;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Zt(e);var r=fe.test(e);return r||ge.test(e)?ct(e.slice(2),r?2:8):he.test(e)?u:+e}function bs(e){return To(e,Is(e))}function vs(e){return null==e?"":co(e)}var ys=Mo((function(e,t){if(Si(t)||Ua(t))To(t,Ts(t),e);else for(var r in t)Be.call(t,r)&&en(e,r,t[r])})),xs=Mo((function(e,t){To(t,Is(t),e)})),ws=Mo((function(e,t,r,n){To(t,Is(t),e,n)})),$s=Mo((function(e,t,r,n){To(t,Ts(t),e,n)})),Cs=ni(an),Ss=Gn((function(t,r){t=ke(t);var n=-1,o=r.length,i=o>2?r[2]:e;for(i&&xi(r[0],r[1],i)&&(o=1);++n<o;)for(var a=r[n],s=Is(a),l=-1,c=s.length;++l<c;){var d=s[l],u=t[d];(u===e||Pa(u,Ie[d])&&!Be.call(t,d))&&(t[d]=a[d])}return t})),Ds=Gn((function(t){return t.push(e,ei),St(As,e,t)}));function ks(t,r,n){var o=null==t?e:Cn(t,r);return o===e?n:o}function _s(e,t){return null!=e&&mi(e,t,Fn)}var Fs=No((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),e[t]=r}),el(nl)),Es=No((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),Be.call(e,t)?e[t].push(r):e[t]=[r]}),ci),Os=Gn(On);function Ts(e){return Ua(e)?Zr(e):zn(e)}function Is(e){return Ua(e)?Zr(e,!0):jn(e)}var Ms=Mo((function(e,t,r){Nn(e,t,r)})),As=Mo((function(e,t,r,n){Nn(e,t,r,n)})),Bs=ni((function(e,t){var r={};if(null==e)return r;var n=!1;t=It(t,(function(t){return t=xo(t,e),n||(n=t.length>1),t})),To(e,ii(e),r),n&&(r=ln(r,7,ti));for(var o=t.length;o--;)ho(r,t[o]);return r})),zs=ni((function(e,t){return null==e?{}:function(e,t){return Vn(e,t,(function(t,r){return _s(e,r)}))}(e,t)}));function js(e,t){if(null==e)return{};var r=It(ii(e),(function(e){return[e]}));return t=ci(t),Vn(e,r,(function(e,r){return t(e,r[0])}))}var Rs=Qo(Ts),Ls=Qo(Is);function Ps(e){return null==e?[]:Qt(e,Ts(e))}var Hs=jo((function(e,t,r){return t=t.toLowerCase(),e+(r?Ns(t):t)}));function Ns(e){return Gs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(be,tr).replace(Xe,"")}var Ys=jo((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Vs=jo((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=zo("toLowerCase"),Ks=jo((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()})),qs=jo((function(e,t,r){return e+(r?" ":"")+Gs(t)})),Zs=jo((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Gs=zo("toUpperCase");function Qs(t,r,n){return t=vs(t),(r=n?e:r)===e?function(e){return rt.test(e)}(t)?function(e){return e.match(et)||[]}(t):function(e){return e.match(se)||[]}(t):t.match(r)||[]}var Xs=Gn((function(t,r){try{return St(t,e,r)}catch(e){return Ga(e)?e:new Ce(e)}})),Js=ni((function(e,t){return kt(t,(function(t){t=ji(t),on(e,t,Ea(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Po(),rl=Po(!0);function nl(e){return e}function ol(e){return Bn("function"==typeof e?e:ln(e,1))}var il=Gn((function(e,t){return function(r){return On(r,e,t)}})),al=Gn((function(e,t){return function(r){return On(e,r,t)}}));function sl(e,t,r){var n=Ts(t),o=$n(t,n);null!=r||es(t)&&(o.length||!n.length)||(r=t,t=e,e=this,o=$n(t,Ts(t)));var i=!(es(r)&&"chain"in r&&!r.chain),a=Qa(e);return kt(o,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=e(this.__wrapped__);return(r.__actions__=Oo(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Mt([this.value()],arguments))})})),e}function ll(){}var cl=Yo(It),dl=Yo(Ft),ul=Yo(zt);function hl(e){return wi(e)?Yt(ji(e)):function(e){return function(t){return Cn(t,e)}}(e)}var fl=Uo(),pl=Uo(!0);function gl(){return[]}function ml(){return!1}var bl,vl=Wo((function(e,t){return e+t}),0),yl=Zo("ceil"),xl=Wo((function(e,t){return e/t}),1),wl=Zo("floor"),$l=Wo((function(e,t){return e*t}),1),Cl=Zo("round"),Sl=Wo((function(e,t){return e-t}),0);return Lr.after=function(e,r){if("function"!=typeof r)throw new Ee(t);return e=ps(e),function(){if(--e<1)return r.apply(this,arguments)}},Lr.ary=_a,Lr.assign=ys,Lr.assignIn=xs,Lr.assignInWith=ws,Lr.assignWith=$s,Lr.at=Cs,Lr.before=Fa,Lr.bind=Ea,Lr.bindAll=Js,Lr.bindKey=Oa,Lr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ya(e)?e:[e]},Lr.chain=ha,Lr.chunk=function(t,r,n){r=(n?xi(t,r,n):r===e)?1:br(ps(r),0);var o=null==t?0:t.length;if(!o||r<1)return[];for(var i=0,a=0,s=we(pt(o/r));i<o;)s[a++]=no(t,i,i+=r);return s},Lr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,o=[];++t<r;){var i=e[t];i&&(o[n++]=i)}return o},Lr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=we(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return Mt(Ya(r)?Oo(r):[r],bn(t,1))},Lr.cond=function(e){var r=null==e?0:e.length,n=ci();return e=r?It(e,(function(e){if("function"!=typeof e[1])throw new Ee(t);return[n(e[0]),e[1]]})):[],Gn((function(t){for(var n=-1;++n<r;){var o=e[n];if(St(o[0],this,t))return St(o[1],this,t)}}))},Lr.conforms=function(e){return function(e){var t=Ts(e);return function(r){return cn(r,e,t)}}(ln(e,1))},Lr.constant=el,Lr.countBy=ga,Lr.create=function(e,t){var r=Pr(e);return null==t?r:nn(r,t)},Lr.curry=function t(r,n,o){var i=Xo(r,8,e,e,e,e,e,n=o?e:n);return i.placeholder=t.placeholder,i},Lr.curryRight=function t(r,n,i){var a=Xo(r,o,e,e,e,e,e,n=i?e:n);return a.placeholder=t.placeholder,a},Lr.debounce=Ta,Lr.defaults=Ss,Lr.defaultsDeep=Ds,Lr.defer=Ia,Lr.delay=Ma,Lr.difference=Pi,Lr.differenceBy=Hi,Lr.differenceWith=Ni,Lr.drop=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=n||r===e?1:ps(r))<0?0:r,o):[]},Lr.dropRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,0,(r=o-(r=n||r===e?1:ps(r)))<0?0:r):[]},Lr.dropRightWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!0,!0):[]},Lr.dropWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!0):[]},Lr.fill=function(t,r,n,o){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&xi(t,r,n)&&(n=0,o=i),function(t,r,n,o){var i=t.length;for((n=ps(n))<0&&(n=-n>i?0:i+n),(o=o===e||o>i?i:ps(o))<0&&(o+=i),o=n>o?0:gs(o);n<o;)t[n++]=r;return t}(t,r,n,o)):[]},Lr.filter=function(e,t){return(Ya(e)?Et:mn)(e,ci(t,3))},Lr.flatMap=function(e,t){return bn(Ca(e,t),1)},Lr.flatMapDeep=function(e,t){return bn(Ca(e,t),c)},Lr.flatMapDepth=function(t,r,n){return n=n===e?1:ps(n),bn(Ca(t,r),n)},Lr.flatten=Vi,Lr.flattenDeep=function(e){return null!=e&&e.length?bn(e,c):[]},Lr.flattenDepth=function(t,r){return null!=t&&t.length?bn(t,r=r===e?1:ps(r)):[]},Lr.flip=function(e){return Xo(e,512)},Lr.flow=tl,Lr.flowRight=rl,Lr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var o=e[t];n[o[0]]=o[1]}return n},Lr.functions=function(e){return null==e?[]:$n(e,Ts(e))},Lr.functionsIn=function(e){return null==e?[]:$n(e,Is(e))},Lr.groupBy=xa,Lr.initial=function(e){return null!=e&&e.length?no(e,0,-1):[]},Lr.intersection=Ki,Lr.intersectionBy=qi,Lr.intersectionWith=Zi,Lr.invert=Fs,Lr.invertBy=Es,Lr.invokeMap=wa,Lr.iteratee=ol,Lr.keyBy=$a,Lr.keys=Ts,Lr.keysIn=Is,Lr.map=Ca,Lr.mapKeys=function(e,t){var r={};return t=ci(t,3),xn(e,(function(e,n,o){on(r,t(e,n,o),e)})),r},Lr.mapValues=function(e,t){var r={};return t=ci(t,3),xn(e,(function(e,n,o){on(r,n,t(e,n,o))})),r},Lr.matches=function(e){return Pn(ln(e,1))},Lr.matchesProperty=function(e,t){return Hn(e,ln(t,1))},Lr.memoize=Aa,Lr.merge=Ms,Lr.mergeWith=As,Lr.method=il,Lr.methodOf=al,Lr.mixin=sl,Lr.negate=Ba,Lr.nthArg=function(e){return e=ps(e),Gn((function(t){return Wn(t,e)}))},Lr.omit=Bs,Lr.omitBy=function(e,t){return js(e,Ba(ci(t)))},Lr.once=function(e){return Fa(2,e)},Lr.orderBy=function(t,r,n,o){return null==t?[]:(Ya(r)||(r=null==r?[]:[r]),Ya(n=o?e:n)||(n=null==n?[]:[n]),Yn(t,r,n))},Lr.over=cl,Lr.overArgs=za,Lr.overEvery=dl,Lr.overSome=ul,Lr.partial=ja,Lr.partialRight=Ra,Lr.partition=Sa,Lr.pick=zs,Lr.pickBy=js,Lr.property=hl,Lr.propertyOf=function(t){return function(r){return null==t?e:Cn(t,r)}},Lr.pull=Qi,Lr.pullAll=Xi,Lr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,ci(r,2)):e},Lr.pullAllWith=function(t,r,n){return t&&t.length&&r&&r.length?Un(t,r,e,n):t},Lr.pullAt=Ji,Lr.range=fl,Lr.rangeRight=pl,Lr.rearg=La,Lr.reject=function(e,t){return(Ya(e)?Et:mn)(e,Ba(ci(t,3)))},Lr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,o=[],i=e.length;for(t=ci(t,3);++n<i;){var a=e[n];t(a,n,e)&&(r.push(a),o.push(n))}return Kn(e,o),r},Lr.rest=function(r,n){if("function"!=typeof r)throw new Ee(t);return Gn(r,n=n===e?n:ps(n))},Lr.reverse=ea,Lr.sampleSize=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:ps(r),(Ya(t)?Qr:Xn)(t,r)},Lr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},Lr.setWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:Jn(t,r,n,o)},Lr.shuffle=function(e){return(Ya(e)?Xr:ro)(e)},Lr.slice=function(t,r,n){var o=null==t?0:t.length;return o?(n&&"number"!=typeof n&&xi(t,r,n)?(r=0,n=o):(r=null==r?0:ps(r),n=n===e?o:ps(n)),no(t,r,n)):[]},Lr.sortBy=Da,Lr.sortedUniq=function(e){return e&&e.length?so(e):[]},Lr.sortedUniqBy=function(e,t){return e&&e.length?so(e,ci(t,2)):[]},Lr.split=function(t,r,n){return n&&"number"!=typeof n&&xi(t,r,n)&&(r=n=e),(n=n===e?h:n>>>0)?(t=vs(t))&&("string"==typeof r||null!=r&&!is(r))&&!(r=co(r))&&or(t)?$o(ur(t),0,n):t.split(r,n):[]},Lr.spread=function(e,r){if("function"!=typeof e)throw new Ee(t);return r=null==r?0:br(ps(r),0),Gn((function(t){var n=t[r],o=$o(t,0,r);return n&&Mt(o,n),St(e,this,o)}))},Lr.tail=function(e){var t=null==e?0:e.length;return t?no(e,1,t):[]},Lr.take=function(t,r,n){return t&&t.length?no(t,0,(r=n||r===e?1:ps(r))<0?0:r):[]},Lr.takeRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=o-(r=n||r===e?1:ps(r)))<0?0:r,o):[]},Lr.takeRightWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!1,!0):[]},Lr.takeWhile=function(e,t){return e&&e.length?po(e,ci(t,3)):[]},Lr.tap=function(e,t){return t(e),e},Lr.throttle=function(e,r,n){var o=!0,i=!0;if("function"!=typeof e)throw new Ee(t);return es(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),Ta(e,r,{leading:o,maxWait:r,trailing:i})},Lr.thru=fa,Lr.toArray=hs,Lr.toPairs=Rs,Lr.toPairsIn=Ls,Lr.toPath=function(e){return Ya(e)?It(e,ji):ls(e)?[e]:Oo(zi(vs(e)))},Lr.toPlainObject=bs,Lr.transform=function(e,t,r){var n=Ya(e),o=n||qa(e)||cs(e);if(t=ci(t,4),null==r){var i=e&&e.constructor;r=o?n?new i:[]:es(e)&&Qa(i)?Pr(Ue(e)):{}}return(o?kt:xn)(e,(function(e,n,o){return t(r,e,n,o)})),r},Lr.unary=function(e){return _a(e,1)},Lr.union=ta,Lr.unionBy=ra,Lr.unionWith=na,Lr.uniq=function(e){return e&&e.length?uo(e):[]},Lr.uniqBy=function(e,t){return e&&e.length?uo(e,ci(t,2)):[]},Lr.uniqWith=function(t,r){return r="function"==typeof r?r:e,t&&t.length?uo(t,e,r):[]},Lr.unset=function(e,t){return null==e||ho(e,t)},Lr.unzip=oa,Lr.unzipWith=ia,Lr.update=function(e,t,r){return null==e?e:fo(e,t,yo(r))},Lr.updateWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:fo(t,r,yo(n),o)},Lr.values=Ps,Lr.valuesIn=function(e){return null==e?[]:Qt(e,Is(e))},Lr.without=aa,Lr.words=Qs,Lr.wrap=function(e,t){return ja(yo(t),e)},Lr.xor=sa,Lr.xorBy=la,Lr.xorWith=ca,Lr.zip=da,Lr.zipObject=function(e,t){return bo(e||[],t||[],en)},Lr.zipObjectDeep=function(e,t){return bo(e||[],t||[],Jn)},Lr.zipWith=ua,Lr.entries=Rs,Lr.entriesIn=Ls,Lr.extend=xs,Lr.extendWith=ws,sl(Lr,Lr),Lr.add=vl,Lr.attempt=Xs,Lr.camelCase=Hs,Lr.capitalize=Ns,Lr.ceil=yl,Lr.clamp=function(t,r,n){return n===e&&(n=r,r=e),n!==e&&(n=(n=ms(n))==n?n:0),r!==e&&(r=(r=ms(r))==r?r:0),sn(ms(t),r,n)},Lr.clone=function(e){return ln(e,4)},Lr.cloneDeep=function(e){return ln(e,5)},Lr.cloneDeepWith=function(t,r){return ln(t,5,r="function"==typeof r?r:e)},Lr.cloneWith=function(t,r){return ln(t,4,r="function"==typeof r?r:e)},Lr.conformsTo=function(e,t){return null==t||cn(e,t,Ts(t))},Lr.deburr=Ws,Lr.defaultTo=function(e,t){return null==e||e!=e?t:e},Lr.divide=xl,Lr.endsWith=function(t,r,n){t=vs(t),r=co(r);var o=t.length,i=n=n===e?o:sn(ps(n),0,o);return(n-=r.length)>=0&&t.slice(n,i)==r},Lr.eq=Pa,Lr.escape=function(e){return(e=vs(e))&&K.test(e)?e.replace(V,rr):e},Lr.escapeRegExp=function(e){return(e=vs(e))&&te.test(e)?e.replace(ee,"\\$&"):e},Lr.every=function(t,r,n){var o=Ya(t)?Ft:pn;return n&&xi(t,r,n)&&(r=e),o(t,ci(r,3))},Lr.find=ma,Lr.findIndex=Wi,Lr.findKey=function(e,t){return Rt(e,ci(t,3),xn)},Lr.findLast=ba,Lr.findLastIndex=Yi,Lr.findLastKey=function(e,t){return Rt(e,ci(t,3),wn)},Lr.floor=wl,Lr.forEach=va,Lr.forEachRight=ya,Lr.forIn=function(e,t){return null==e?e:vn(e,ci(t,3),Is)},Lr.forInRight=function(e,t){return null==e?e:yn(e,ci(t,3),Is)},Lr.forOwn=function(e,t){return e&&xn(e,ci(t,3))},Lr.forOwnRight=function(e,t){return e&&wn(e,ci(t,3))},Lr.get=ks,Lr.gt=Ha,Lr.gte=Na,Lr.has=function(e,t){return null!=e&&mi(e,t,_n)},Lr.hasIn=_s,Lr.head=Ui,Lr.identity=nl,Lr.includes=function(e,t,r,n){e=Ua(e)?e:Ps(e),r=r&&!n?ps(r):0;var o=e.length;return r<0&&(r=br(o+r,0)),ss(e)?r<=o&&e.indexOf(t,r)>-1:!!o&&Pt(e,t,r)>-1},Lr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ps(r);return o<0&&(o=br(n+o,0)),Pt(e,t,o)},Lr.inRange=function(t,r,n){return r=fs(r),n===e?(n=r,r=0):n=fs(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(t=ms(t),r,n)},Lr.invoke=Os,Lr.isArguments=Wa,Lr.isArray=Ya,Lr.isArrayBuffer=Va,Lr.isArrayLike=Ua,Lr.isArrayLikeObject=Ka,Lr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&Dn(e)==m},Lr.isBuffer=qa,Lr.isDate=Za,Lr.isElement=function(e){return ts(e)&&1===e.nodeType&&!os(e)},Lr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Ya(e)||"string"==typeof e||"function"==typeof e.splice||qa(e)||cs(e)||Wa(e)))return!e.length;var t=gi(e);if(t==w||t==k)return!e.size;if(Si(e))return!zn(e).length;for(var r in e)if(Be.call(e,r))return!1;return!0},Lr.isEqual=function(e,t){return In(e,t)},Lr.isEqualWith=function(t,r,n){var o=(n="function"==typeof n?n:e)?n(t,r):e;return o===e?In(t,r,e,n):!!o},Lr.isError=Ga,Lr.isFinite=function(e){return"number"==typeof e&&Vt(e)},Lr.isFunction=Qa,Lr.isInteger=Xa,Lr.isLength=Ja,Lr.isMap=rs,Lr.isMatch=function(e,t){return e===t||Mn(e,t,ui(t))},Lr.isMatchWith=function(t,r,n){return n="function"==typeof n?n:e,Mn(t,r,ui(r),n)},Lr.isNaN=function(e){return ns(e)&&e!=+e},Lr.isNative=function(e){if(Ci(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return An(e)},Lr.isNil=function(e){return null==e},Lr.isNull=function(e){return null===e},Lr.isNumber=ns,Lr.isObject=es,Lr.isObjectLike=ts,Lr.isPlainObject=os,Lr.isRegExp=is,Lr.isSafeInteger=function(e){return Xa(e)&&e>=-9007199254740991&&e<=d},Lr.isSet=as,Lr.isString=ss,Lr.isSymbol=ls,Lr.isTypedArray=cs,Lr.isUndefined=function(t){return t===e},Lr.isWeakMap=function(e){return ts(e)&&gi(e)==E},Lr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==Dn(e)},Lr.join=function(e,t){return null==e?"":gr.call(e,t)},Lr.kebabCase=Ys,Lr.last=Gi,Lr.lastIndexOf=function(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o;return n!==e&&(i=(i=ps(n))<0?br(o+i,0):vr(i,o-1)),r==r?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(t,r,i):Lt(t,Nt,i,!0)},Lr.lowerCase=Vs,Lr.lowerFirst=Us,Lr.lt=ds,Lr.lte=us,Lr.max=function(t){return t&&t.length?gn(t,nl,kn):e},Lr.maxBy=function(t,r){return t&&t.length?gn(t,ci(r,2),kn):e},Lr.mean=function(e){return Wt(e,nl)},Lr.meanBy=function(e,t){return Wt(e,ci(t,2))},Lr.min=function(t){return t&&t.length?gn(t,nl,Rn):e},Lr.minBy=function(t,r){return t&&t.length?gn(t,ci(r,2),Rn):e},Lr.stubArray=gl,Lr.stubFalse=ml,Lr.stubObject=function(){return{}},Lr.stubString=function(){return""},Lr.stubTrue=function(){return!0},Lr.multiply=$l,Lr.nth=function(t,r){return t&&t.length?Wn(t,ps(r)):e},Lr.noConflict=function(){return ht._===this&&(ht._=Pe),this},Lr.noop=ll,Lr.now=ka,Lr.pad=function(e,t,r){e=vs(e);var n=(t=ps(t))?dr(e):0;if(!t||n>=t)return e;var o=(t-n)/2;return Vo(mt(o),r)+e+Vo(pt(o),r)},Lr.padEnd=function(e,t,r){e=vs(e);var n=(t=ps(t))?dr(e):0;return t&&n<t?e+Vo(t-n,r):e},Lr.padStart=function(e,t,r){e=vs(e);var n=(t=ps(t))?dr(e):0;return t&&n<t?Vo(t-n,r)+e:e},Lr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vs(e).replace(re,""),t||0)},Lr.random=function(t,r,n){if(n&&"boolean"!=typeof n&&xi(t,r,n)&&(r=n=e),n===e&&("boolean"==typeof r?(n=r,r=e):"boolean"==typeof t&&(n=t,t=e)),t===e&&r===e?(t=0,r=1):(t=fs(t),r===e?(r=t,t=0):r=fs(r)),t>r){var o=t;t=r,r=o}if(n||t%1||r%1){var i=wr();return vr(t+i*(r-t+lt("1e-"+((i+"").length-1))),r)}return qn(t,r)},Lr.reduce=function(e,t,r){var n=Ya(e)?At:Ut,o=arguments.length<3;return n(e,ci(t,4),r,o,hn)},Lr.reduceRight=function(e,t,r){var n=Ya(e)?Bt:Ut,o=arguments.length<3;return n(e,ci(t,4),r,o,fn)},Lr.repeat=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:ps(r),Zn(vs(t),r)},Lr.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Lr.result=function(t,r,n){var o=-1,i=(r=xo(r,t)).length;for(i||(i=1,t=e);++o<i;){var a=null==t?e:t[ji(r[o])];a===e&&(o=i,a=n),t=Qa(a)?a.call(t):a}return t},Lr.round=Cl,Lr.runInContext=ne,Lr.sample=function(e){return(Ya(e)?Gr:Qn)(e)},Lr.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?dr(e):e.length;var t=gi(e);return t==w||t==k?e.size:zn(e).length},Lr.snakeCase=Ks,Lr.some=function(t,r,n){var o=Ya(t)?zt:oo;return n&&xi(t,r,n)&&(r=e),o(t,ci(r,3))},Lr.sortedIndex=function(e,t){return io(e,t)},Lr.sortedIndexBy=function(e,t,r){return ao(e,t,ci(r,2))},Lr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=io(e,t);if(n<r&&Pa(e[n],t))return n}return-1},Lr.sortedLastIndex=function(e,t){return io(e,t,!0)},Lr.sortedLastIndexBy=function(e,t,r){return ao(e,t,ci(r,2),!0)},Lr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=io(e,t,!0)-1;if(Pa(e[r],t))return r}return-1},Lr.startCase=qs,Lr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:sn(ps(r),0,e.length),t=co(t),e.slice(r,r+t.length)==t},Lr.subtract=Sl,Lr.sum=function(e){return e&&e.length?Kt(e,nl):0},Lr.sumBy=function(e,t){return e&&e.length?Kt(e,ci(t,2)):0},Lr.template=function(t,r,n){var o=Lr.templateSettings;n&&xi(t,r,n)&&(r=e),t=vs(t),r=ws({},r,o,Jo);var i,a,s=ws({},r.imports,o.imports,Jo),l=Ts(s),c=Qt(s,l),d=0,u=r.interpolate||ve,h="__p += '",f=_e((r.escape||ve).source+"|"+u.source+"|"+(u===G?de:ve).source+"|"+(r.evaluate||ve).source+"|$","g"),p="//# sourceURL="+(Be.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ot+"]")+"\n";t.replace(f,(function(e,r,n,o,s,l){return n||(n=o),h+=t.slice(d,l).replace(ye,nr),r&&(i=!0,h+="' +\n__e("+r+") +\n'"),s&&(a=!0,h+="';\n"+s+";\n__p += '"),n&&(h+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),d=l+e.length,e})),h+="';\n";var g=Be.call(r,"variable")&&r.variable;if(g){if(le.test(g))throw new Ce("Invalid `variable` option passed into `_.template`")}else h="with (obj) {\n"+h+"\n}\n";h=(a?h.replace(H,""):h).replace(N,"$1").replace(W,"$1;"),h="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var m=Xs((function(){return Se(l,p+"return "+h).apply(e,c)}));if(m.source=h,Ga(m))throw m;return m},Lr.times=function(e,t){if((e=ps(e))<1||e>d)return[];var r=h,n=vr(e,h);t=ci(t),e-=h;for(var o=qt(n,t);++r<e;)t(r);return o},Lr.toFinite=fs,Lr.toInteger=ps,Lr.toLength=gs,Lr.toLower=function(e){return vs(e).toLowerCase()},Lr.toNumber=ms,Lr.toSafeInteger=function(e){return e?sn(ps(e),-9007199254740991,d):0===e?e:0},Lr.toString=vs,Lr.toUpper=function(e){return vs(e).toUpperCase()},Lr.trim=function(t,r,n){if((t=vs(t))&&(n||r===e))return Zt(t);if(!t||!(r=co(r)))return t;var o=ur(t),i=ur(r);return $o(o,Jt(o,i),er(o,i)+1).join("")},Lr.trimEnd=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.slice(0,hr(t)+1);if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,0,er(o,ur(r))+1).join("")},Lr.trimStart=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.replace(re,"");if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,Jt(o,ur(r))).join("")},Lr.truncate=function(t,r){var n=30,o="...";if(es(r)){var i="separator"in r?r.separator:i;n="length"in r?ps(r.length):n,o="omission"in r?co(r.omission):o}var a=(t=vs(t)).length;if(or(t)){var s=ur(t);a=s.length}if(n>=a)return t;var l=n-dr(o);if(l<1)return o;var c=s?$o(s,0,l).join(""):t.slice(0,l);if(i===e)return c+o;if(s&&(l+=c.length-l),is(i)){if(t.slice(l).search(i)){var d,u=c;for(i.global||(i=_e(i.source,vs(ue.exec(i))+"g")),i.lastIndex=0;d=i.exec(u);)var h=d.index;c=c.slice(0,h===e?l:h)}}else if(t.indexOf(co(i),l)!=l){var f=c.lastIndexOf(i);f>-1&&(c=c.slice(0,f))}return c+o},Lr.unescape=function(e){return(e=vs(e))&&U.test(e)?e.replace(Y,fr):e},Lr.uniqueId=function(e){var t=++ze;return vs(e)+t},Lr.upperCase=Zs,Lr.upperFirst=Gs,Lr.each=va,Lr.eachRight=ya,Lr.first=Ui,sl(Lr,(bl={},xn(Lr,(function(e,t){Be.call(Lr.prototype,t)||(bl[t]=e)})),bl),{chain:!1}),Lr.VERSION="4.17.21",kt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Lr[e].placeholder=Lr})),kt(["drop","take"],(function(t,r){Wr.prototype[t]=function(n){n=n===e?1:br(ps(n),0);var o=this.__filtered__&&!r?new Wr(this):this.clone();return o.__filtered__?o.__takeCount__=vr(n,o.__takeCount__):o.__views__.push({size:vr(n,h),type:t+(o.__dir__<0?"Right":"")}),o},Wr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),kt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Wr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:ci(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),kt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Wr.prototype[e]=function(){return this[r](1).value()[0]}})),kt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Wr.prototype[e]=function(){return this.__filtered__?new Wr(this):this[r](1)}})),Wr.prototype.compact=function(){return this.filter(nl)},Wr.prototype.find=function(e){return this.filter(e).head()},Wr.prototype.findLast=function(e){return this.reverse().find(e)},Wr.prototype.invokeMap=Gn((function(e,t){return"function"==typeof e?new Wr(this):this.map((function(r){return On(r,e,t)}))})),Wr.prototype.reject=function(e){return this.filter(Ba(ci(e)))},Wr.prototype.slice=function(t,r){t=ps(t);var n=this;return n.__filtered__&&(t>0||r<0)?new Wr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),r!==e&&(n=(r=ps(r))<0?n.dropRight(-r):n.take(r-t)),n)},Wr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wr.prototype.toArray=function(){return this.take(h)},xn(Wr.prototype,(function(t,r){var n=/^(?:filter|find|map|reject)|While$/.test(r),o=/^(?:head|last)$/.test(r),i=Lr[o?"take"+("last"==r?"Right":""):r],a=o||/^find/.test(r);i&&(Lr.prototype[r]=function(){var r=this.__wrapped__,s=o?[1]:arguments,l=r instanceof Wr,c=s[0],d=l||Ya(r),u=function(e){var t=i.apply(Lr,Mt([e],s));return o&&h?t[0]:t};d&&n&&"function"==typeof c&&1!=c.length&&(l=d=!1);var h=this.__chain__,f=!!this.__actions__.length,p=a&&!h,g=l&&!f;if(!a&&d){r=g?r:new Wr(this);var m=t.apply(r,s);return m.__actions__.push({func:fa,args:[u],thisArg:e}),new Nr(m,h)}return p&&g?t.apply(this,s):(m=this.thru(u),p?o?m.value()[0]:m.value():m)})})),kt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Oe[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Lr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var o=this.value();return t.apply(Ya(o)?o:[],e)}return this[r]((function(r){return t.apply(Ya(r)?r:[],e)}))}})),xn(Wr.prototype,(function(e,t){var r=Lr[t];if(r){var n=r.name+"";Be.call(Or,n)||(Or[n]=[]),Or[n].push({name:t,func:r})}})),Or[Ho(e,2).name]=[{name:"wrapper",func:e}],Wr.prototype.clone=function(){var e=new Wr(this.__wrapped__);return e.__actions__=Oo(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Oo(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Oo(this.__views__),e},Wr.prototype.reverse=function(){if(this.__filtered__){var e=new Wr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Ya(e),n=t<0,o=r?e.length:0,i=function(e,t,r){for(var n=-1,o=r.length;++n<o;){var i=r[n],a=i.size;switch(i.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,o,this.__views__),a=i.start,s=i.end,l=s-a,c=n?s:a-1,d=this.__iteratees__,u=d.length,h=0,f=vr(l,this.__takeCount__);if(!r||!n&&o==l&&f==l)return go(e,this.__actions__);var p=[];e:for(;l--&&h<f;){for(var g=-1,m=e[c+=t];++g<u;){var b=d[g],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[h++]=m}return p},Lr.prototype.at=pa,Lr.prototype.chain=function(){return ha(this)},Lr.prototype.commit=function(){return new Nr(this.value(),this.__chain__)},Lr.prototype.next=function(){this.__values__===e&&(this.__values__=hs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Lr.prototype.plant=function(t){for(var r,n=this;n instanceof Hr;){var o=Li(n);o.__index__=0,o.__values__=e,r?i.__wrapped__=o:r=o;var i=o;n=n.__wrapped__}return i.__wrapped__=t,r},Lr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Wr){var r=t;return this.__actions__.length&&(r=new Wr(this)),(r=r.reverse()).__actions__.push({func:fa,args:[ea],thisArg:e}),new Nr(r,this.__chain__)}return this.thru(ea)},Lr.prototype.toJSON=Lr.prototype.valueOf=Lr.prototype.value=function(){return go(this.__wrapped__,this.__actions__)},Lr.prototype.first=Lr.prototype.head,Je&&(Lr.prototype[Je]=function(){return this}),Lr}();pt?((pt.exports=pr)._=pr,ft._=pr):ht._=pr}.call(Oe);var wx=xx.exports;const $x=o.forwardRef(((n,o)=>{var{value:i,readOnly:a,"data-testid":l,maskRange:c,unmaskRange:d,maskRegex:u,maskTransformer:f,iconMask:p=e(xe,{}),iconUnmask:g=e(ye,{}),iconActiveColor:m,iconInactiveColor:b,maskChar:v="•",error:y,disableMask:x,transformInput:w,loadState:$,onMask:C,onUnmask:S,onChange:D,onFocus:k,onBlur:_,onTryAgain:F}=n,E=Fe(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const O=a&&wx.isEmpty(i),[T,I]=s(!x),[M,A]=s(i||"");h((()=>{A(i||"")}),[i]);const B=e=>{P(!1),k&&k(e)},z=e=>{P(!0),_&&_(e)},j=e=>{let t=e.target.value;switch(w){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}A(t),e.target.value=t,D&&D(e)},R=()=>{a&&F&&F()},L=()=>{P(!T)},P=e=>{I(e),e?C&&C():S&&S()},H=()=>!(null==M?void 0:M.toString().length)||x,N=()=>{if(O)return e(r,{});const t=H();return e(cx,{"data-testid":"icon-"+(T?"masked":"unmasked"),onClick:t?void 0:L,$isDisabled:t,$inactiveColor:b,$activeColor:m,children:T?g:p})};return e("div",{"aria-busy":"loading"===$,"aria-live":"polite",children:(()=>{if(a)switch($){case"fail":return t(bx,{onClick:R,"data-testid":"try-again-button",children:[t(px,{children:[e(gx,{}),e(mx,{children:"Error"})]}),e(fx,{children:"Try again?"})]});case"loading":return t(dx,{children:[e(hx,{}),e(ux,{children:"Retrieving..."})]})}return e(lx,Object.assign({ref:o,"data-testid":`${l||"masked-input"}${T?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:N()},position:"right"},onFocus:a?void 0:B,onBlur:a?void 0:z,onClick:a?L:void 0,onChange:j,value:O?"-":T&&!x?it.maskValue(M,{maskChar:v,maskRange:c,unmaskRange:d,maskRegex:u,maskTransformer:f}):M,readOnly:a,error:y,$isDisabled:H()},E))})()})})),Cx=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,h=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(fs,{id:i,label:n,errorMessage:o,disabled:h.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,children:e($x,Object.assign({ref:r,id:`${i}-base`,"data-testid":s||i,error:!!o},h))})})),Sx=({selectedOptions:t,placeholder:r="Select",options:n,disabled:o,error:i,className:l,"data-testid":c,id:d,enableSearch:u=!1,searchFunction:f,searchPlaceholder:p,valueExtractor:g,listExtractor:m,onSelectOptions:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderListItem:C,hideNoResultsDisplay:S,noResultsDescription:D,customLabels:k,renderCustomCallToAction:_,onBlur:F,variant:E="default",readOnly:O,alignment:T,dropdownZIndex:I,maxSelectable:M,dropdownRootNode:A,dropdownWidth:B})=>{const{allSelectedLabel:z,multiSelectedLabel:j}=k||{},[R,L]=s(t||[]),[P,H]=s(!1),[N,W]=s(!1),[Y]=s((()=>ot.generate())),V=a(null),U=a(null);h((()=>{L(t||[])}),[t]);const K=()=>{R&&R.length>0||M?(L([]),J([])):(L(n),J(n))},q=(e,t)=>{const r=[...R],n=Sp(R,(e=>(g?g(e):e)===t));n>-1?r.splice(n,1):r.push(e),L(r),J(r)},Z=()=>{P&&(H(!1),X(!1))},G=()=>{N||P||W(!0)},Q=e=>{N&&!P&&V.current&&!V.current.contains(e.relatedTarget)&&(W(!1),null==F||F())},X=e=>{!e&&y&&y(),e&&v&&v()},J=e=>{b&&b(e)};return e(cv,{children:e(Es,{enabled:!O&&!o,isOpen:P,renderElement:()=>e(rc,{className:l,"data-testid":c,id:d,ref:V,tabIndex:-1,onFocus:G,onBlur:Q,$focused:N,$disabled:o,$readOnly:O,$error:i,children:e(zv,{ref:U,disabled:o,expanded:P,listboxId:Y,popupRole:"listbox",readOnly:O,variant:E,children:e($s,{$disabled:o,children:R&&0!==R.length?e(Cs,{$variant:E,children:n&&R.length===n.length?z||"All selected":j||`${R.length} selected`}):e(Ss,{$truncateType:$,$variant:E,children:r})})})}),renderDropdown:()=>e(Mv,{listboxId:Y,listItems:n,onSelectItem:q,onDismiss:Z,valueExtractor:g,listExtractor:m,enableSearch:u,searchFunction:f,searchPlaceholder:p,multiSelect:!0,maxSelectable:M,selectedItems:R,onSelectAll:K,onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:C,hideNoResultsDisplay:S,noResultsDescription:D,customLabels:k,renderCustomCallToAction:_,variant:E,width:B,matchElementWidth:!0}),onOpen:()=>{H(!0),X(!0),W(!0)},onClose:e=>{H(!1),X(!1),"click"!==e&&(W(!1),null==F||F())},onDismiss:()=>{var e;null===(e=U.current)||void 0===e||e.focus(),H(!1),X(!1)},clickToToggle:!0,offset:8,alignment:T,fitAvailableHeight:!0,customZIndex:I,rootNode:A})})},Dx=(e,t)=>{const[r,...n]=t;if(jy(e)||!r)return;const o=e.find((e=>e.key===r));return o?n.length?Dx(o.subItems,n):o:void 0},kx=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...kx(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},_x=({placeholder:t="Select",options:r,disabled:n,error:o,className:i,"data-testid":l,id:c,selectedKeyPaths:d,mode:u,valueToStringFunction:f,enableSearch:p,searchPlaceholder:g,hideNoResultsDisplay:m,noResultsDescription:b,customLabels:v,readOnly:y,onSearch:x,onSelectOptions:w,onShowOptions:$,onHideOptions:C,onRetry:S,onBlur:D,optionsLoadState:k="success",optionTruncationType:_="end",variant:F="default",alignment:E,dropdownZIndex:O,dropdownWidth:T,dropdownRootNode:I})=>{const{multiSelectedLabel:M}=v||{},A=r,[B,z]=s(d?Hy(d):new Set),[j,R]=s([]),[L,P]=s(!1),[H,N]=s(!1),[W]=s((()=>ot.generate())),Y=a(null),V=a(null),U=a(null);h((()=>{const e=d||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const o=t[n],i=Dx(e,o);i&&r.push({value:i.value,label:i.label,keyPath:o})}return r})(A,e);z(Hy(e)),R(t)}),[d,A]);const K=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));z(Hy(e)),R(r),ee(e,r)},q=e=>{const t=te(e),r=t.map((e=>e.keyPath));R(t),z(Hy(r)),ee(r,t)},Z=()=>{H||L||N(!0)},G=e=>{H&&!L&&Y.current&&!Y.current.contains(e.relatedTarget)&&(N(!1),null==D||D())},Q=()=>{if(j.length>1)return M||`${j.length} selected`;const{label:e,value:t}=j[0];return f?f(t):e},X=e=>{if("middle"===_){let t=0;return U&&U.current&&(t=U.current.getBoundingClientRect().width),it.truncateOneLine(e,t,120,6)}return e},J=e=>{!e&&C&&C(),e&&$&&$()},ee=(e,t)=>{if(w){const r=t.map((e=>e.value));w(e,r)}},te=e=>{if(!0===e.checked)return j.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!_p(e.keyPath,r)}));{const t=[...j],r=e.hasSubItems?((e,t)=>{const r=Dx(e,t);return r&&r.subItems?kx(r.subItems,t):[]})(A,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{j.find((t=>_p(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e(Es,{enabled:!y&&!n,isOpen:L,renderElement:()=>e(rc,{className:i,"data-testid":l,id:c,ref:Y,tabIndex:-1,onFocus:Z,onBlur:G,$focused:H,$disabled:n,$readOnly:y,$error:o,children:e(zv,{ref:V,disabled:n,expanded:L,listboxId:W,popupRole:"tree",readOnly:y,variant:F,children:e($s,{ref:U,$disabled:n,children:jy(j)?e(Ss,{$truncateType:_,children:t}):e(Cs,{$truncateType:_,children:X(Q())})})})}),renderDropdown:()=>e(Zy,{listboxId:W,listItems:A,multiSelect:!0,selectedKeyPaths:B,itemsLoadState:k,itemTruncationType:_,enableSearch:p,searchPlaceholder:g,hideNoResultsDisplay:m,noResultsDescription:b,customLabels:v,onSelectItem:q,onSelectAll:K,onRetry:S,onSearch:x,variant:F,mode:u,width:T,matchElementWidth:!0}),onOpen:()=>{P(!0),J(!0),N(!0)},onClose:e=>{P(!1),J(!1),"click"!==e&&(N(!1),null==D||D())},onDismiss:()=>{var e;null===(e=V.current)||void 0===e||e.focus(),P(!1),J(!1)},clickToToggle:!0,offset:8,alignment:E,fitAvailableHeight:!0,customZIndex:O,rootNode:I})},Fx=({placeholder:t="Select",options:r,disabled:n,error:o,className:i,"data-testid":l,id:c,selectedKeyPath:d,mode:u,valueToStringFunction:f,enableSearch:p,searchPlaceholder:g,selectableCategory:m,hideNoResultsDisplay:b,noResultsDescription:v,customLabels:y,readOnly:x,onBlur:w,onSearch:$,onSelectOption:C,onShowOptions:S,onHideOptions:D,onRetry:k,optionsLoadState:_="success",optionTruncationType:F="end",variant:E="default",alignment:O,dropdownZIndex:T,dropdownWidth:I,dropdownRootNode:M})=>{const A=r,[B,z]=s(d?Hy([d]):new Set),[j,R]=s(),[L,P]=s(!1),[H,N]=s(!1),[W]=s((()=>ot.generate())),Y=a(null),V=a(null),U=a(null);h((()=>{z(d?Hy([d]):new Set);const e=Ly(A,d||[]);R(null!=e?e:void 0)}),[d,A]);const K=e=>{var t;const{keyPath:r,item:{label:n,value:o}}=e;z(Hy([r])),R({label:n,value:o}),P(!1),X(!1),null===(t=V.current)||void 0===t||t.focus(),null==C||C(r,o)},q=()=>{H||L||N(!0)},Z=e=>{H&&!L&&Y.current&&!Y.current.contains(e.relatedTarget)&&(N(!1),null==w||w())},G=()=>{if(!j)return"";const{label:e,value:t}=j;return f?f(t):e},Q=e=>{if("middle"===F){let t=0;return U&&U.current&&(t=U.current.getBoundingClientRect().width),it.truncateOneLine(e,t,120,6)}return e},X=e=>{!e&&D&&D(),e&&S&&S()};return e(Es,{enabled:!x&&!n,isOpen:L,renderElement:()=>e(rc,{className:i,"data-testid":l,id:c,ref:Y,tabIndex:-1,onFocus:q,onBlur:Z,$focused:H,$disabled:n,$readOnly:x,$error:o,children:e(zv,{ref:V,disabled:n,expanded:L,listboxId:W,popupRole:"tree",readOnly:x,variant:E,children:e($s,{ref:U,$disabled:n,children:jy(j)?e(Ss,{$truncateType:F,children:t}):e(Cs,{$truncateType:F,children:Q(G())})})})}),renderDropdown:()=>e(Zy,{listboxId:W,listItems:A,selectedKeyPaths:B,selectableCategory:m,itemsLoadState:_,itemTruncationType:F,enableSearch:p,searchPlaceholder:g,hideNoResultsDisplay:b,noResultsDescription:v,customLabels:y,onSelectItem:K,onRetry:k,onSearch:$,variant:E,mode:u,width:I,matchElementWidth:!0}),onOpen:()=>{P(!0),X(!0),N(!0)},onClose:e=>{P(!1),X(!1),"click"!==e&&(N(!1),null==w||w())},onDismiss:()=>{var e;null===(e=V.current)||void 0===e||e.focus(),P(!1),X(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:T,rootNode:M})};var Ex=function(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r};var Ox=function(e){return function(t,r,n){for(var o=-1,i=Object(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}},Tx=Ox(),Ix=kh;var Mx=$h;var Ax=function(e,t){return function(r,n){if(null==r)return r;if(!Mx(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=Object(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}((function(e,t){return e&&Tx(e,t,Ix)}));var Bx=Ex,zx=Ax,jx=ep,Rx=function(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r},Lx=sr;var Px=Te((function(e,t,r){var n=Lx(e)?Bx:Rx,o=arguments.length<3;return n(e,jx(t),r,o,zx)}));const Hx=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],Nx=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var Wx;!function(e){e.getCountries=()=>[].concat(...Hx.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:Nx("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,o=n.split(" ");o.shift();const i=o.join(" ");return Px(i,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const r=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(Wx||(Wx={}));const Yx=t=>{var{onChange:r,value:n,allowClear:o,onClear:i,onBlur:l,error:c,fixedCountry:d=!1,optionPlaceholder:u="Select",optionSearchPlaceholder:f,enableSearch:p,onHideOptions:g,onShowOptions:m,placeholder:b,autoComplete:v}=t,y=Fe(t,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[x]=s(Wx.getCountries()),[w,$]=s(void 0),[C,S]=s(""),D=a(null),k=or({ref:D,formatter:e=>Wx.formatNumber(e.replace(/[^0-9]/g,""),w)});h((()=>{const e=x.filter((e=>e.countryCode===Vx(null==n?void 0:n.countryCode)))[0];$(e),S(Wx.formatNumber(null==n?void 0:n.number,e))}),[n]);const _=e=>{E(C,e),r&&F(C,e)},F=(e,t)=>{const n=Wx.formatNumber(e,t);null==r||r({number:n.replace(/[\s()]+/g,""),countryCode:t&&Ux(t.countryCode)})},E=(e,t)=>{S(Wx.formatNumber(e,t)),$(t)};return e(ax,Object.assign({ref:D,value:C,onChange:()=>{const e=k();if(!e)return;const{nextValue:t,updateCaretPosition:n}=e;n(),E(t,w),r&&F(t,w)},allowClear:o&&!!C,onClear:()=>{i?i():S("")},onBlur:l,error:c,placeholder:b,addon:d?{type:"label",attributes:{value:Ux(null==w?void 0:w.countryCode)}}:{type:"list",attributes:{placeholder:u,options:x,selectedOption:w,enableSearch:p,searchPlaceholder:f,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:Ux(e.countryCode)}),onSelectOption:_,onHideOptions:g,onShowOptions:m}},inputMode:"numeric",autoComplete:v},y))},Vx=e=>e?e.replace("+",""):"",Ux=e=>e?e.includes("+")?e:`+${e}`:"";var Kx=ur,qx=Mr,Zx=function(){return Kx.Date.now()},Gx=gp,Qx=Math.max,Xx=Math.min;var Jx=Te((function(e,t,r){var n,o,i,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=i}function g(){var e=Zx();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?Xx(r,i-(e-c)):r}(e))}function m(e){return s=void 0,h&&n?f(e):(n=o=void 0,a)}function b(){var e=Zx(),r=p(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?f(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Gx(t)||0,qx(r)&&(d=!!r.leading,i=(u="maxWait"in r)?Qx(Gx(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:m(Zx())},b})),ew=mw(),tw=e=>hw(e,ew),rw=mw();tw.write=e=>hw(e,rw);var nw=mw();tw.onStart=e=>hw(e,nw);var ow=mw();tw.onFrame=e=>hw(e,ow);var iw=mw();tw.onFinish=e=>hw(e,iw);var aw=[];tw.setTimeout=(e,t)=>{const r=tw.now()+t,n=()=>{const e=aw.findIndex((e=>e.cancel==n));~e&&aw.splice(e,1),dw-=~e?1:0},o={time:r,handler:e,cancel:n};return aw.splice(sw(r),0,o),dw+=1,fw(),o};var sw=e=>~(~aw.findIndex((t=>t.time>e))||~aw.length);tw.cancel=e=>{nw.delete(e),ow.delete(e),iw.delete(e),ew.delete(e),rw.delete(e)},tw.sync=e=>{uw=!0,tw.batchedUpdates(e),uw=!1},tw.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,tw.onStart(r)}return n.handler=e,n.cancel=()=>{nw.delete(r),t=null},n};var lw="undefined"!=typeof window?window.requestAnimationFrame:()=>{};tw.use=e=>lw=e,tw.now="undefined"!=typeof performance?()=>performance.now():Date.now,tw.batchedUpdates=e=>e(),tw.catch=console.error,tw.frameLoop="always",tw.advance=()=>{"demand"!==tw.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):gw()};var cw=-1,dw=0,uw=!1;function hw(e,t){uw?(t.delete(e),e(0)):(t.add(e),fw())}function fw(){cw<0&&(cw=0,"demand"!==tw.frameLoop&&lw(pw))}function pw(){~cw&&(lw(pw),tw.batchedUpdates(gw))}function gw(){const e=cw;cw=tw.now();const t=sw(cw);t&&(bw(aw.splice(0,t),(e=>e.handler())),dw-=t),dw?(nw.flush(),ew.flush(e?Math.min(64,cw-e):16.667),ow.flush(),rw.flush(),iw.flush()):cw=-1}function mw(){let e=new Set,t=e;return{add(r){dw+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(dw-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,dw-=t.size,bw(t,(t=>t(r)&&e.add(t))),dw+=e.size,t=e)}}}function bw(e,t){e.forEach((e=>{try{t(e)}catch(e){tw.catch(e)}}))}var vw=Object.defineProperty,yw={};function xw(){}((e,t)=>{for(var r in t)vw(e,r,{get:t[r],enumerable:!0})})(yw,{assign:()=>Aw,colors:()=>Tw,createStringInterpolator:()=>_w,skipAnimation:()=>Iw,to:()=>Fw,willAdvance:()=>Mw});var ww={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function $w(e,t){if(ww.arr(e)){if(!ww.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Cw=(e,t)=>e.forEach(t);function Sw(e,t,r){if(ww.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Dw=e=>ww.und(e)?[]:ww.arr(e)?e:[e];function kw(e,t){if(e.size){const r=Array.from(e);e.clear(),Cw(r,t)}}var _w,Fw,Ew=(e,...t)=>kw(e,(e=>e(...t))),Ow=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Tw=null,Iw=!1,Mw=xw,Aw=e=>{e.to&&(Fw=e.to),e.now&&(tw.now=e.now),void 0!==e.colors&&(Tw=e.colors),null!=e.skipAnimation&&(Iw=e.skipAnimation),e.createStringInterpolator&&(_w=e.createStringInterpolator),e.requestAnimationFrame&&tw.use(e.requestAnimationFrame),e.batchedUpdates&&(tw.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Mw=e.willAdvance),e.frameLoop&&(tw.frameLoop=e.frameLoop)},Bw=new Set,zw=[],jw=[],Rw=0,Lw={get idle(){return!Bw.size&&!zw.length},start(e){Rw>e.priority?(Bw.add(e),tw.onStart(Pw)):(Hw(e),tw(Ww))},advance:Ww,sort(e){if(Rw)tw.onFrame((()=>Lw.sort(e)));else{const t=zw.indexOf(e);~t&&(zw.splice(t,1),Nw(e))}},clear(){zw=[],Bw.clear()}};function Pw(){Bw.forEach(Hw),Bw.clear(),tw(Ww)}function Hw(e){zw.includes(e)||Nw(e)}function Nw(e){zw.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(zw,(t=>t.priority>e.priority)),0,e)}function Ww(e){const t=jw;for(let r=0;r<zw.length;r++){const n=zw[r];Rw=n.priority,n.idle||(Mw(n),n.advance(e),n.idle||t.push(n))}return Rw=0,(jw=zw).length=0,(zw=t).length>0}var Yw="[-+]?\\d*\\.?\\d+",Vw=Yw+"%";function Uw(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Kw=new RegExp("rgb"+Uw(Yw,Yw,Yw)),qw=new RegExp("rgba"+Uw(Yw,Yw,Yw,Yw)),Zw=new RegExp("hsl"+Uw(Yw,Vw,Vw)),Gw=new RegExp("hsla"+Uw(Yw,Vw,Vw,Yw)),Qw=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Xw=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Jw=/^#([0-9a-fA-F]{6})$/,e$=/^#([0-9a-fA-F]{8})$/;function t$(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function r$(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,o=2*r-n,i=t$(o,n,e+1/3),a=t$(o,n,e),s=t$(o,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function n$(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function o$(e){return(parseFloat(e)%360+360)%360/360}function i$(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function a$(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function s$(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Jw.exec(e))?parseInt(t[1]+"ff",16)>>>0:Tw&&void 0!==Tw[e]?Tw[e]:(t=Kw.exec(e))?(n$(t[1])<<24|n$(t[2])<<16|n$(t[3])<<8|255)>>>0:(t=qw.exec(e))?(n$(t[1])<<24|n$(t[2])<<16|n$(t[3])<<8|i$(t[4]))>>>0:(t=Qw.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=e$.exec(e))?parseInt(t[1],16)>>>0:(t=Xw.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Zw.exec(e))?(255|r$(o$(t[1]),a$(t[2]),a$(t[3])))>>>0:(t=Gw.exec(e))?(r$(o$(t[1]),a$(t[2]),a$(t[3]))|i$(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var l$=(e,t,r)=>{if(ww.fun(e))return e;if(ww.arr(e))return l$({range:e,output:t,extrapolate:r});if(ww.str(e.output[0]))return _w(e);const n=e,o=n.output,i=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,o,i,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===o)return n;if(t===r)return e<=t?n:o;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=i(c),n===-1/0?c=-c:o===1/0?c+=n:c=c*(o-n)+n;return c}(e,i[t],i[t+1],o[t],o[t+1],l,a,s,n.map)}};var c$=1.70158,d$=1.525*c$,u$=c$+1,h$=2*Math.PI/3,f$=2*Math.PI/4.5,p$=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},g$={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>u$*e*e*e-c$*e*e,easeOutBack:e=>1+u$*Math.pow(e-1,3)+c$*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-d$)/2:(Math.pow(2*e-2,2)*((d$+1)*(2*e-2)+d$)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*h$),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*h$)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*f$)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*f$)/2+1,easeInBounce:e=>1-p$(1-e),easeOutBounce:p$,easeInOutBounce:e=>e<.5?(1-p$(1-2*e))/2:(1+p$(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,o="end"===t?Math.floor(n):Math.ceil(n);return i=0,a=1,s=o/e,Math.min(Math.max(s,i),a);var i,a,s}},m$=Symbol.for("FluidValue.get"),b$=Symbol.for("FluidValue.observers"),v$=e=>Boolean(e&&e[m$]),y$=e=>e&&e[m$]?e[m$]():e,x$=e=>e[b$]||null;function w$(e,t){const r=e[b$];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var $$=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");C$(this,e)}},C$=(e,t)=>_$(e,m$,t);function S$(e,t){if(e[m$]){let r=e[b$];r||_$(e,b$,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function D$(e,t){const r=e[b$];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[b$]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var k$,_$=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),F$=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,E$=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,O$=new RegExp(`(${F$.source})(%|[a-z]+)`,"i"),T$=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,I$=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,M$=e=>{const[t,r]=A$(e);if(!t||Ow())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&I$.test(r)?M$(r):r||e},A$=e=>{const t=I$.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},B$=(e,t,r,n,o)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,z$=e=>{k$||(k$=Tw?new RegExp(`(${Object.keys(Tw).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>y$(e).replace(I$,M$).replace(E$,s$).replace(k$,s$))),r=t.map((e=>e.match(F$).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),o=n.map((t=>l$({...e,output:t})));return e=>{const r=!O$.test(t[0])&&t.find((e=>O$.test(e)))?.replace(F$,"");let n=0;return t[0].replace(F$,(()=>`${o[n++](e)}${r||""}`)).replace(T$,B$)}},j$="react-spring: ",R$=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${j$}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},L$=R$(console.warn);var P$=R$(console.warn);function H$(e){return ww.str(e)&&("#"==e[0]||/\d/.test(e)||!Ow()&&I$.test(e)||e in(Tw||{}))}var N$=Ow()?h:f;function W$(){const e=s()[1],t=(()=>{const e=a(!1);return N$((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var Y$=e=>h(e,V$),V$=[];function U$(e){const t=a(void 0);return h((()=>{t.current=e})),t.current}var K$=Symbol.for("Animated:node"),q$=e=>e&&e[K$],Z$=(e,t)=>((e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}))(e,K$,t),G$=e=>e&&e[K$]&&e[K$].getPayload(),Q$=class{constructor(){Z$(this,this)}getPayload(){return this.payload||[]}},X$=class e extends Q${constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,ww.num(this._value)&&(this.lastPosition=this._value)}static create(t){return new e(t)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return ww.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,ww.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},J$=class e extends X${constructor(e){super(0),this._string=null,this._toString=l$({output:[e,e]})}static create(t){return new e(t)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(ww.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=l$({output:[this.getValue(),e]})),this._value=0,super.reset()}},eC={dependencies:null},tC=class extends Q${constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Sw(this.source,((r,n)=>{var o;(o=r)&&o[K$]===o?t[n]=r.getValue(e):v$(r)?t[n]=y$(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Cw(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Sw(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){eC.dependencies&&v$(e)&&eC.dependencies.add(e);const t=G$(e);t&&Cw(t,(e=>this.add(e)))}},rC=class e extends tC{constructor(e){super(e)}static create(t){return new e(t)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(nC)),!0)}};function nC(e){return(H$(e)?J$:X$).create(e)}function oC(e){const t=q$(e);return t?t.constructor:ww.arr(e)?rC:H$(e)?J$:X$}var iC=(e,t)=>{const r=!ww.fun(e)||e.prototype&&e.prototype.isReactComponent;return S(((o,i)=>{const s=a(null),l=r&&p((e=>{s.current=function(e,t){e&&(ww.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[c,d]=function(e,t){const r=new Set;eC.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new tC(e),eC.dependencies=null,[e,r]}(o,t),u=W$(),f=()=>{const e=s.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&u()},g=new aC(f,d),m=a(void 0);N$((()=>(m.current=g,Cw(d,(e=>S$(e,g))),()=>{m.current&&(Cw(m.current.deps,(e=>D$(e,m.current))),tw.cancel(m.current.update))}))),h(f,[]),Y$((()=>()=>{const e=m.current;Cw(e.deps,(t=>D$(t,e)))}));const b=t.getComponentProps(c.getValue());return n.createElement(e,{...b,ref:l})}))},aC=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&tw.write(this.update)}};var sC=Symbol.for("AnimatedComponent"),lC=e=>ww.str(e)?e:e&&ww.str(e.displayName)?e.displayName:ww.fun(e)&&e.name||null;function cC(e,...t){return ww.fun(e)?e(...t):e}var dC=(e,t)=>!0===e||!!(t&&e&&(ww.fun(e)?e(t):Dw(e).includes(t))),uC=(e,t)=>ww.obj(e)?t&&e[t]:e,hC=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,fC=e=>e,pC=(e,t=fC)=>{let r=gC;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const o of r){const r=t(e[o],o);ww.und(r)||(n[o]=r)}return n},gC=["config","onProps","onStart","onChange","onPause","onResume","onRest"],mC={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function bC(e){const t=function(e){const t={};let r=0;if(Sw(e,((e,n)=>{mC[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Sw(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function vC(e){return e=y$(e),ww.arr(e)?e.map(vC):H$(e)?yw.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function yC(e){return ww.fun(e)||ww.arr(e)&&ww.obj(e[0])}var xC={tension:170,friction:26,mass:1,damping:1,easing:g$.linear,clamp:!1},wC=class{constructor(){this.velocity=0,Object.assign(this,xC)}};function $C(e,t){if(ww.und(t.decay)){const r=!ww.und(t.tension)||!ww.und(t.friction);!r&&ww.und(t.frequency)&&ww.und(t.damping)&&ww.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var CC=[],SC=class{constructor(){this.changed=!1,this.values=CC,this.toValues=null,this.fromValues=CC,this.config=new wC,this.immediate=!1}};function DC(e,{key:t,props:r,defaultProps:n,state:o,actions:i}){return new Promise(((a,s)=>{let l,c,d=dC(r.cancel??n?.cancel,t);if(d)f();else{ww.und(r.pause)||(o.paused=dC(r.pause,t));let e=n?.pause;!0!==e&&(e=o.paused||dC(e,t)),l=cC(r.delay||0,t),e?(o.resumeQueue.add(h),i.pause()):(i.resume(),h())}function u(){o.resumeQueue.add(h),o.timeouts.delete(c),c.cancel(),l=c.time-tw.now()}function h(){l>0&&!yw.skipAnimation?(o.delayed=!0,c=tw.setTimeout(f,l),o.pauseQueue.add(u),o.timeouts.add(c)):f()}function f(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(u),o.timeouts.delete(c),e<=(o.cancelId||0)&&(d=!0);try{i.start({...r,callId:e,cancel:d},a)}catch(e){s(e)}}}))}var kC=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?EC(e.get()):t.every((e=>e.noop))?_C(e.get()):FC(e.get(),t.every((e=>e.finished))),_C=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),FC=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),EC=e=>({value:e,cancelled:!0,finished:!1});function OC(e,t,r,n){const{callId:o,parentId:i,onRest:a}=t,{asyncTo:s,promise:l}=r;return i||e!==s||t.reset?r.promise=(async()=>{r.asyncId=o,r.asyncTo=e;const c=pC(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const h=new Promise(((e,t)=>(d=e,u=t))),f=e=>{const t=o<=(r.cancelId||0)&&EC(n)||o!==r.asyncId&&FC(n,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const i=new IC,a=new MC;return(async()=>{if(yw.skipAnimation)throw TC(r),a.result=FC(n,!1),u(a),a;f(i);const s=ww.obj(e)?{...e}:{...t,to:e};s.parentId=o,Sw(c,((e,t)=>{ww.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return f(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(yw.skipAnimation)return TC(r),FC(n,!1);try{let t;t=ww.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(d),h]),g=FC(n.get(),!0,!1)}catch(e){if(e instanceof IC)g=e.result;else{if(!(e instanceof MC))throw e;g=e.result}}finally{o==r.asyncId&&(r.asyncId=i,r.asyncTo=i?s:void 0,r.promise=i?l:void 0)}return ww.fun(a)&&tw.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function TC(e,t){kw(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var IC=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},MC=class extends Error{constructor(){super("SkipAnimationSignal")}},AC=e=>e instanceof zC,BC=1,zC=class extends $${constructor(){super(...arguments),this.id=BC++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=q$(this);return e&&e.getValue()}to(...e){return yw.to(this,e)}interpolate(...e){return L$(`${j$}The "interpolate" function is deprecated in v9 (use "to" instead)`),yw.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){w$(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Lw.sort(this),w$(this,{type:"priority",parent:this,priority:e})}},jC=Symbol.for("SpringPhase"),RC=e=>(1&e[jC])>0,LC=e=>(2&e[jC])>0,PC=e=>(4&e[jC])>0,HC=(e,t)=>t?e[jC]|=3:e[jC]&=-3,NC=(e,t)=>t?e[jC]|=4:e[jC]&=-5,WC=class extends zC{constructor(e,t){if(super(),this.animation=new SC,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!ww.und(e)||!ww.und(t)){const r=ww.obj(e)?{...e}:{...t,from:e};ww.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(LC(this)||this._state.asyncTo)||PC(this)}get goal(){return y$(this.animation.to)}get velocity(){const e=q$(this);return e instanceof X$?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return RC(this)}get isAnimating(){return LC(this)}get isPaused(){return PC(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:o}=n;const{config:i}=n,a=G$(n.to);!a&&v$(n.to)&&(o=Dw(y$(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==J$?1:a?a[l].lastPosition:o[l];let d=n.immediate,u=c;if(!d){if(u=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],o=null!=s.v0?s.v0:s.v0=ww.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(ww.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);u=r+o/(1-e)*(1-n),d=Math.abs(s.lastPosition-u)<=h,a=o*n}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!ww.und(n),f=r==c?s.v0>0:r<c;let p,g=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(a)>t,p||(d=Math.abs(c-u)<=h,!d));++e){l&&(g=u==c||u>c==f,g&&(a=-a*n,u=c));a+=(1e-6*-i.tension*(u-c)+.001*-i.friction*a)/i.mass*m,u+=a*m}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+i.easing(n)*(c-r),a=(u-s.lastPosition)/e,d=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}a&&!a[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,i.round)&&(r=!0)}));const s=q$(this),l=s.getValue();if(t){const e=y$(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return tw.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(LC(this)){const{to:e,config:t}=this.animation;tw.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return ww.und(e)?(r=this.queue||[],this.queue=[]):r=[ww.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>kC(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),TC(this._state,e&&this._lastCallId),tw.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=ww.obj(r)?r[t]:r,(null==r||yC(r))&&(r=void 0),n=ww.obj(n)?n[t]:n,null==n&&(n=void 0);const o={to:r,from:n};return RC(this)||(e.reverse&&([r,n]=[n,r]),n=y$(n),ww.und(n)?q$(this)||this._set(r):this._set(n)),o}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,pC(e,((e,t)=>/^on/.test(t)?uC(e,r):e))),GC(this,e,"onProps"),QC(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return DC(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{PC(this)||(NC(this,!0),Ew(i.pauseQueue),QC(this,"onPause",FC(this,YC(this,this.animation.to)),this))},resume:()=>{PC(this)&&(NC(this,!1),LC(this)&&this._resume(),Ew(i.resumeQueue),QC(this,"onResume",FC(this,YC(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=VC(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(EC(this));const n=!ww.und(e.to),o=!ww.und(e.from);if(n||o){if(!(t.callId>this._lastToId))return r(EC(this));this._lastToId=t.callId}const{key:i,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!o||n||t.default&&!ww.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const h=!$w(u,c);h&&(s.from=u),u=y$(u);const f=!$w(d,l);f&&this._focus(d);const p=yC(t.to),{config:g}=s,{decay:m,velocity:b}=g;(n||o)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&($C(r={...r},t),t={...r,...t}),$C(e,t),Object.assign(e,t);for(const t in xC)null==e[t]&&(e[t]=xC[t]);let{frequency:n,damping:o}=e;const{mass:i}=e;ww.und(n)||(n<.01&&(n=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*o*i/n)}(g,cC(t.config,i),t.config!==a.config?cC(a.config,i):void 0);let v=q$(this);if(!v||ww.und(d))return r(FC(this,!0));const y=ww.und(t.reset)?o&&!t.default:!ww.und(u)&&dC(t.reset,i),x=y?u:this.get(),w=vC(d),$=ww.num(w)||ww.arr(w)||H$(w),C=!p&&(!$||dC(a.immediate||t.immediate,i));if(f){const e=oC(d);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let D=v$(d),k=!1;if(!D){const e=y||!RC(this)&&h;(f||e)&&(k=$w(vC(x),w),D=!k),($w(s.immediate,C)||C)&&$w(g.decay,m)&&$w(g.velocity,b)||(D=!0)}if(k&&LC(this)&&(s.changed&&!y?D=!0:D||this._stop(l)),!p&&((D||v$(l))&&(s.values=v.getPayload(),s.toValues=v$(d)?null:S==J$?[1]:Dw(w)),s.immediate!=C&&(s.immediate=C,C||y||this._set(l)),D)){const{onRest:e}=s;Cw(ZC,(e=>GC(this,t,e)));const n=FC(this,YC(this,l));Ew(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&tw.batchedUpdates((()=>{s.changed=!y,e?.(n,this),y?cC(a.onRest,n):s.onStart?.(n,this)}))}y&&this._set(x),p?r(OC(t.to,t,this._state,this)):D?this._start():LC(this)&&!f?this._pendingCalls.add(r):r(_C(x))}_focus(e){const t=this.animation;e!==t.to&&(x$(this)&&this._detach(),t.to=e,x$(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;v$(t)&&(S$(t,this),AC(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;v$(e)&&D$(e,this)}_set(e,t=!0){const r=y$(e);if(!ww.und(r)){const e=q$(this);if(!e||!$w(r,e.getValue())){const n=oC(r);e&&e.constructor==n?e.setValue(r):Z$(this,n.create(r)),e&&tw.batchedUpdates((()=>{this._onChange(r,t)}))}}return q$(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,QC(this,"onStart",FC(this,YC(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),cC(this.animation.onChange,e,this)),cC(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;q$(this).reset(y$(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),LC(this)||(HC(this,!0),PC(this)||this._resume())}_resume(){yw.skipAnimation?this.finish():Lw.start(this)}_stop(e,t){if(LC(this)){HC(this,!1);const r=this.animation;Cw(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),w$(this,{type:"idle",parent:this});const n=t?EC(this.get()):FC(this.get(),YC(this,e??r.to));Ew(this._pendingCalls,n),r.changed&&(r.changed=!1,QC(this,"onRest",n,this))}}};function YC(e,t){const r=vC(t);return $w(vC(e.get()),r)}function VC(e,t=e.loop,r=e.to){const n=cC(t);if(n){const o=!0!==n&&bC(n),i=(o||e).reverse,a=!o||o.reset;return UC({...e,loop:t,default:!1,pause:void 0,to:!i||yC(r)?r:void 0,from:a?e.from:void 0,reset:a,...o})}}function UC(e){const{to:t,from:r}=e=bC(e),n=new Set;return ww.obj(t)&&qC(t,n),ww.obj(r)&&qC(r,n),e.keys=n.size?Array.from(n):null,e}function KC(e){const t=UC(e);return ww.und(t.default)&&(t.default=pC(t)),t}function qC(e,t){Sw(e,((e,r)=>null!=e&&t.add(r)))}var ZC=["onStart","onRest","onChange","onPause","onResume"];function GC(e,t,r){e.animation[r]=t[r]!==hC(t,r)?uC(t[r],e.key):void 0}function QC(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var XC=["onStart","onChange","onRest"],JC=1,eS=class{constructor(e,t){this.id=JC++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];ww.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(UC(e)),this}start(e){let{queue:t}=this;return e?t=Dw(e).map(UC):this.queue=[],this._flush?this._flush(this,t):(sS(this,t),tS(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Cw(Dw(t),(t=>r[t].stop(!!e)))}else TC(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(ww.und(e))this.start({pause:!0});else{const t=this.springs;Cw(Dw(e),(e=>t[e].pause()))}return this}resume(e){if(ww.und(e))this.start({pause:!1});else{const t=this.springs;Cw(Dw(e),(e=>t[e].resume()))}return this}each(e){Sw(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,o=this._changed.size>0;(n&&!this._started||o&&!this._started)&&(this._started=!0,kw(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,a=o||i&&r.size?this.get():null;o&&t.size&&kw(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),i&&(this._started=!1,kw(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}tw.onFrame(this._onFrame)}};function tS(e,t){return Promise.all(t.map((t=>rS(e,t)))).then((t=>kC(e,t)))}async function rS(e,t,r){const{keys:n,to:o,from:i,loop:a,onRest:s,onResolve:l}=t,c=ww.obj(t.default)&&t.default;a&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const d=ww.arr(o)||ww.fun(o)?o:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Cw(XC,(r=>{const n=t[r];if(ww.fun(n)){const o=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=o.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):o.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Ew(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===hC(t,"cancel");(d||f&&u.asyncId)&&h.push(DC(++e._lastAsyncId,{props:t,state:u,actions:{pause:xw,resume:xw,start(t,r){f?(TC(u,e._lastAsyncId),r(EC(e))):(t.onRest=s,r(OC(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=kC(e,await Promise.all(h));if(a&&p.finished&&(!r||!p.noop)){const r=VC(t,a,o);if(r)return sS(e,[r]),rS(e,r,!0)}return l&&tw.batchedUpdates((()=>l(p,e,e.item))),p}function nS(e,t){const r={...e.springs};return t&&Cw(Dw(t),(e=>{ww.und(e.keys)&&(e=UC(e)),ww.obj(e.to)||(e={...e,to:void 0}),aS(r,e,(e=>iS(e)))})),oS(e,r),r}function oS(e,t){Sw(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,S$(t,e))}))}function iS(e,t){const r=new WC;return r.key=e,t&&S$(r,t),r}function aS(e,t,r){t.keys&&Cw(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function sS(e,t){Cw(t,(t=>{aS(e.springs,t,(t=>iS(t,e)))}))}var lS=n.createContext({pause:!1,immediate:!1}),cS=()=>{const e=[],t=function(t){P$(`${j$}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Cw(e,((e,o)=>{if(ww.und(t))n.push(e.start());else{const i=r(t,e,o);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Cw(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Cw(e,(e=>e.resume(...arguments))),this},t.set=function(t){Cw(e,((e,r)=>{const n=ww.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Cw(e,((e,n)=>{if(ww.und(t))r.push(e.start());else{const o=this._getProps(t,e,n);o&&r.push(e.start(o))}})),r},t.stop=function(){return Cw(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Cw(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return ww.fun(e)?e(r,t):e};return t._getProps=r,t};function dS(e,t){const r=ww.fun(e),[[n],o]=function(e,t,r){const n=ww.fun(t)&&t;n&&!r&&(r=[]);const o=v((()=>n||3==arguments.length?cS():void 0),[]),i=a(0),s=W$(),l=v((()=>({ctrls:[],queue:[],flush(e,t){const r=nS(e,t),n=i.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]));return n?tS(e,t):new Promise((n=>{oS(e,r),l.queue.push((()=>{n(tS(e,t))})),s()}))}})),[]),c=a([...l.ctrls]),d=a([]),u=U$(e)||0;function h(e,r){for(let o=e;o<r;o++){const e=c.current[o]||(c.current[o]=new eS(null,l.flush)),r=n?n(o,e):t[o];r&&(d.current[o]=KC(r))}}v((()=>{Cw(c.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),c.current.length=e,h(u,e)}),[e]),v((()=>{h(0,Math.min(u,e))}),r);const f=c.current.map(((e,t)=>nS(e,d.current[t]))),p=g(lS),m=U$(p),b=p!==m&&function(e){for(const t in e)return!0;return!1}(p);N$((()=>{i.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Cw(e,(e=>e()))),Cw(c.current,((e,t)=>{o?.add(e),b&&e.start({default:p});const r=d.current[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),Y$((()=>()=>{Cw(l.ctrls,(e=>e.stop(!0)))}));const y=f.map((e=>({...e})));return o?[y,o]:y}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,o]:n}var uS=class extends zC{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=l$(...t);const r=this._get(),n=oC(r);Z$(this,n.create(r))}advance(e){const t=this._get();$w(t,this.get())||(q$(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&fS(this._active)&&pS(this)}_get(){const e=ww.arr(this.source)?this.source.map(y$):Dw(y$(this.source));return this.calc(...e)}_start(){this.idle&&!fS(this._active)&&(this.idle=!1,Cw(G$(this),(e=>{e.done=!1})),yw.skipAnimation?(tw.batchedUpdates((()=>this.advance())),pS(this)):Lw.start(this))}_attach(){let e=1;Cw(Dw(this.source),(t=>{v$(t)&&S$(t,this),AC(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Cw(Dw(this.source),(e=>{v$(e)&&D$(e,this)})),this._active.clear(),pS(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Dw(this.source).reduce(((e,t)=>Math.max(e,(AC(t)?t.priority:0)+1)),0))}};function hS(e){return!1!==e.idle}function fS(e){return!e.size||Array.from(e).every(hS)}function pS(e){e.idle||(e.idle=!0,Cw(G$(e),(e=>{e.done=!0})),w$(e,{type:"idle",parent:e}))}yw.assign({createStringInterpolator:z$,to:(e,t)=>new uS(e,t)});var gS=/^--/;function mS(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||gS.test(e)||vS.hasOwnProperty(e)&&vS[e]?(""+t).trim():t+"px"}var bS={};var vS={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yS=["Webkit","Ms","Moz","O"];vS=Object.keys(vS).reduce(((e,t)=>(yS.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),vS);var xS=/^(matrix|translate|scale|rotate|skew)/,wS=/^(translate)/,$S=/^(rotate|skew)/,CS=(e,t)=>ww.num(e)&&0!==e?e+t:e,SS=(e,t)=>ww.arr(e)?e.every((e=>SS(e,t))):ww.num(e)?e===t:parseFloat(e)===t,DS=class extends tC{constructor({x:e,y:t,z:r,...n}){const o=[],i=[];(e||t||r)&&(o.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>CS(e,"px"))).join(",")})`,SS(e,0)]))),Sw(n,((e,t)=>{if("transform"===t)o.push([e||""]),i.push((e=>[e,""===e]));else if(xS.test(t)){if(delete n[t],ww.und(e))return;const r=wS.test(t)?"px":$S.test(t)?"deg":"";o.push(Dw(e)),i.push("rotate3d"===t?([e,t,n,o])=>[`rotate3d(${e},${t},${n},${CS(o,r)})`,SS(o,0)]:e=>[`${t}(${e.map((e=>CS(e,r))).join(",")})`,SS(e,t.startsWith("scale")?1:0)])}})),o.length&&(n.transform=new kS(o,i)),super(n)}},kS=class extends $${constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Cw(this.inputs,((r,n)=>{const o=y$(r[0]),[i,a]=this.transforms[n](ww.arr(o)?o:r.map(y$));e+=" "+i,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Cw(this.inputs,(e=>Cw(e,(e=>v$(e)&&S$(e,this)))))}observerRemoved(e){0==e&&Cw(this.inputs,(e=>Cw(e,(e=>v$(e)&&D$(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),w$(this,e)}};yw.assign({batchedUpdates:G,createStringInterpolator:z$,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var _S=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new tC(e),getComponentProps:n=e=>e}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=lC(e)||"Anonymous";return(e=ww.str(e)?i[e]||(i[e]=iC(e,o)):e[sC]||(e[sC]=iC(e,o))).displayName=`Animated(${t})`,e};return Sw(e,((t,r)=>{ww.arr(e)&&(r=lC(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{className:n,style:o,children:i,scrollTop:a,scrollLeft:s,viewBox:l,...c}=t,d=Object.values(c),u=Object.keys(c).map((t=>r||e.hasAttribute(t)?t:bS[t]||(bS[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in o)if(o.hasOwnProperty(t)){const r=mS(t,o[t]);gS.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,d[r])})),void 0!==n&&(e.className=n),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new DS(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),FS=_S.animated;const ES=E`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,OS=_`
    animation: ${Ki["duration-150"]} ${Ki["ease-default"]} ${ES};
    width: 100%;
    height: 100%;
    transition: color ${Ki["duration-150"]} ${Ki["ease-default"]};
`,TS=k(ie)`
    ${OS}
    color: ${Vi["icon-primary-subtlest"]};
`,IS=k(ae)`
    ${OS}
    color: ${Vi["icon-disabled-subtle"]};
`,MS=k(se)`
    ${OS}
    color: ${e=>e.$disabled?Vi["icon-disabled-subtle"](e):Vi["icon-selected"](e)};
`,AS=k(le)`
    ${OS}
    color: ${e=>e.$disabled?Vi["icon-disabled-subtle"](e):Vi["icon-selected"](e)};
`,BS=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>_`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}

    // Show custom focus ring when input is focused
    input:focus-visible + svg {
        outline: 2px solid ${Vi["focus-ring"]};
        outline-offset: 0px;
        border-radius: 4px;
    }
`,zS=k.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${TS},
        &:hover
        + ${MS},
        &:hover
        + ${AS} {
        @media (pointer: fine) {
            color: ${e=>!e.disabled&&Vi["icon-hover"](e)};
        }
    }
`,jS=FS(k.div`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`),RS=k.ul`
    border-bottom-left-radius: ${Gi.sm};
    border-bottom-right-radius: ${Gi.sm};
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.$width||"100%"};
    overflow-y: auto;
    padding: ${Zi["spacing-8"]};
    list-style-type: none;

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Vi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Gi.full};
        background-clip: padding-box;
    }

    ${Ji.MaxWidth.sm} {
        max-height: 15rem;
    }
`,LS=k.li`
    &:hover,
    &:focus,
    &:active {
        background: ${Vi["bg-hover"]};
    }
    ${e=>{if(e.$checked)return _`
                background: ${Vi["bg-selected"]};
                &:hover,
                &:focus,
                &:active {
                    background: ${Vi["bg-selected-hover"]};
                }
            `}}
`,PS=k.button`
    display: flex;
    ${e=>e.$multiSelect?_`
                padding: ${Zi["spacing-8"]} ${Zi["spacing-16"]};
            `:_`
                padding: 15px ${Zi["spacing-16"]}; // TODO: confirm vertical spacing
                align-items: center;
            `}
    margin: 0 -${Zi["spacing-8"]};
    border: none;
    border-radius: ${Gi.none};
    background: transparent;
    width: 100%;
    cursor: pointer;

    &:hover,
    &:visited,
    &:focus,
    &:active {
        outline-color: ${Vi["border-focus"]};
    }

    span {
        margin-bottom: 0;
    }
`,HS=_`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,NS=k.div`
    ${e=>"small"===e.$variant?Ui["body-md-regular"]:Ui["body-baseline-regular"]}
    color: ${Vi.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&HS}
`,WS=k.div`
    color: ${Vi["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&HS}

    ${e=>"next-line"===e.$labelDisplayType?_`
                    ${Ui["body-md-semibold"]}
                `:_`
                    ${Ui["body-baseline-regular"]}
                `}
`,YS=k.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return _`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return _`
                    ${NS} {
                        display: inline;
                    }

                    ${WS} {
                        display: inline;
                        margin-left: ${Zi["spacing-8"]};
                    }
                `}}}
`,VS=k.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,US=k.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,KS=k((r=>{var{className:n,checked:o,disabled:i,indeterminate:s,displaySize:l="default",id:c}=r,d=Fe(r,["className","checked","disabled","indeterminate","displaySize","id"]);const u=a(null);h((()=>{u.current&&(u.current.indeterminate=null!=s&&s)}),[s]);return t(BS,{className:n,"data-testid":"checkbox",$displaySize:l,children:[e(zS,Object.assign({id:c,"data-testid":"checkbox-input",type:"checkbox",checked:o,ref:u,tabIndex:i?-1:0,disabled:i,"aria-checked":s?"mixed":o},d)),s?e(AS,{$disabled:i,"data-testid":"indeterminate","aria-hidden":!0}):o?e(MS,{$disabled:i,"data-testid":"checkmark","aria-hidden":!0}):i?e(IS,{"data-testid":"empty-disabled-checkbox","aria-hidden":!0}):e(TS,{$disabled:i,"data-testid":"empty-checkbox","aria-hidden":!0})]})}))`
    flex-shrink: 0;
    margin-right: ${Zi["spacing-16"]};
`,qS=k.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${Zi["spacing-16"]} 0 ${Zi["spacing-8"]} 0;
`,ZS=k.button`
    ${e=>"small"===e.$variant?Ui["body-md-semibold"]:Ui["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${Vi["text-primary"]};
`,GS=k.div`
    width: 100%;
    display: flex;
    padding: 15px ${Zi["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${e=>"small"===e.$variant?Ui["body-md-regular"]:Ui["body-baseline-regular"]}
`,QS=k(ue)`
    height: 1em;
    width: 1em;
    margin-right: ${Zi["spacing-4"]};
    color: ${Vi["icon-error"]};
`,XS=k(Rs)`
    margin-right: ${Zi["spacing-4"]};
    color: ${Vi.icon};
`,JS=e=>"small"===e?1:1.375,eD=e=>_`
        height: ${JS(e)}rem;
        width: ${JS(e)}rem;
    `,tD=k.li`
    background: ${Vi["bg-strong"]};
    display: flex;
    border-radius: ${Gi.sm};
    align-items: center;
`,rD=k(oc)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 ${Zi["spacing-8"]} 0 0;
    width: 100%;
`,nD=k(me)`
    ${e=>eD(e.$variant)}
    margin: 0 ${Zi["spacing-8"]};
    color: ${Vi.icon};
`,oD=k(Ia)`
    ${e=>eD(e.$variant)}
    padding: 0;
    margin: 0 ${Zi["spacing-8"]};
    color: ${Vi.icon};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return _`
                svg {
                    ${eD(e.$variant)}
                }
            `}}
`,iD=S(((r,n)=>{const{onClear:o}=r,i=Fe(r,["onClear"]);return t(tD,{children:[e(nD,{$variant:r.variant}),e(rD,Object.assign({ref:n,$variant:r.variant},i)),i.value&&e(oD,{"aria-label":"Clear search",focusOutline:"browser",onClick:o,$variant:r.variant,children:e(ce,{})})]},"search")})),aD=n=>{var{listItems:o,listExtractor:i,valueExtractor:l,onSelectItem:c,listStyleWidth:d,visible:u,enableSearch:f,searchPlaceholder:p="Search",onSearch:g,searchFunction:m,onDismiss:b,disableItemFocus:v,multiSelect:y,selectedItems:x,onSelectAll:w,onRetry:$,itemsLoadState:C="success",itemTruncationType:S="end",itemMaxLines:D=2,labelDisplayType:k="inline",renderListItem:_,onBlur:F,hideNoResultsDisplay:E,renderCustomCallToAction:O,variant:T="default"}=n,I=Fe(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[M,A]=s(0),[B,z]=s(""),[j,R]=s(null!=o?o:[]),[L,P]=s(0),H=dS({height:L}),N=a(null),W=a(null),Y=a([]),V=a(null),U=a(null),K=a(M),q=a(j),Z=e=>{K.current=e,A(e)},G=e=>{q.current=e,R(e)};h((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),h((()=>{ee(B)}),[B]),h((()=>{if(z(""),u){if(setTimeout((()=>{P(te())})),v)return;V&&V.current?(V.current.focus(),Z(-1)):Y.current[M]&&Y.current[M].focus()}else P(0)}),[u]),h((()=>{if(u){const e=te();P(e)}}),[j,C]),h((()=>{G(null!=o?o:[]),z(""),Z(0)}),[o]);const Q=e=>{const t=i?i(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},X=e=>{if("inline"!==k)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return it.getTextWidth(e,"1.125rem 'Open Sans'")>t*D},J=e=>!!Dp(x,(t=>_p(t,e))),ee=e=>{if(""===e)G(null!=o?o:[]);else if(m){const t=m(e);G(t)}else{const t=null==o?void 0:o.filter((t=>{const{title:r,secondaryLabel:n}=Q(t),o=e.trim().toLowerCase();return r.includes(o)||n&&n.includes(o)}));G(null!=t?t:[])}},te=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),re=e=>{var t,r;if(N&&N.current.contains(e.target))switch(e.code){case"ArrowDown":if(K.current<q.current.length-1){const e=K.current+1;null===(t=Y.current[e])||void 0===t||t.focus(),Z(e)}break;case"ArrowUp":if(K.current>0){const e=K.current-1;null===(r=Y.current[e])||void 0===r||r.focus(),Z(K.current-1)}break;case"Escape":b&&b(!0)}},ne=(e,t)=>{e.preventDefault(),c&&c(t,(e=>l?l(e):e)(t))},oe=e=>{const t=e.target.value;z(t),g&&g()},ie=()=>{var e;z(""),null===(e=V.current)||void 0===e||e.focus(),g&&g()},ae=()=>{$&&$()},se=()=>{F&&F()},le=n=>t(r,{children:[e(VS,{$maxLines:D,"aria-hidden":!0,children:n}),e(US,{$maxLines:D,"aria-hidden":!0,children:n})]}),ce=r=>{const{title:n,secondaryLabel:o}=Q(r),i=X(n),a=o&&X(o);return t(YS,{$labelDisplayType:i||a?"next-line":k,children:[e(NS,{$truncateType:S,$maxLines:D,$variant:T,"aria-label":n,children:"middle"===S&&i?le(n):n}),o&&e(WS,{$truncateType:S,$maxLines:D,$labelDisplayType:k,"aria-label":o,children:"middle"===S&&a?le(o):o})]})},de=()=>{if(!$||"success"===C)return j.map(((r,n)=>e(LS,{$checked:J(r)&&!y,children:t(PS,{$hasNextLineLabel:"next-line"===k&&j.length>0&&i&&"string"!=typeof i(j[0]),onClick:e=>{ne(e,r)},ref:e=>Y.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:u?0:-1,$multiSelect:y,onBlur:se,$variant:T,children:[y&&e(KS,{checked:J(r),displaySize:"small"}),_?_(r,{selected:J(r)}):ce(r)]})},((e,t)=>`item_${t}__${l?l(e):e}`)(r,n))))},ue=()=>{if(x&&y&&j.length>0&&!B&&"success"===C)return e(qS,{children:e(ZS,{onClick:w,type:"button",$variant:T,children:0===x.length?"Select all":"Clear all"})},"selectAll")},he=()=>{if(!E&&(B||!f)&&0===j.length&&"success"===C)return t(GS,{"data-testid":"list-no-results",$variant:T,children:[e(QS,{"data-testid":"no-result-icon",$variant:T}),"No results found."]},"noResults")},fe=()=>{if($&&"loading"===C)return t(GS,{"data-testid":"list-loading",$variant:T,children:[e(XS,{}),"Loading..."]},"loading")},pe=()=>{if($&&"fail"===C)return t(GS,{"data-testid":"list-fail",$variant:T,children:[e(QS,{"data-testid":"load-error-icon",$variant:T}),"Failed to load. ",e(ZS,{onClick:ae,type:"button",$variant:T,children:"Try again."})]},"noResults")};return e(r,{children:t(jS,{style:H,"data-testid":u?"dropdown-container":"dropdown-container-hidden",ref:N,children:[(()=>{if(u)return t(RS,Object.assign({ref:W,"data-testid":"dropdown-list",$width:d,role:"list"},I,{children:[(f||m)&&"success"===C?e(iD,{ref:V,onChange:oe,value:B,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:u?0:-1,onClear:ie,variant:T}):null,ue(),he(),fe(),pe(),de()]}))})(),(()=>{if(u&&O)return e("div",{ref:U,"data-testid":"custom-cta",children:O(b,j)})})()]})})},sD=({className:n,"data-testid":o,selectedOption:i,minimumCharacters:l=3,fetchOptions:c,placeholder:d="Enter here...",readOnly:u=!1,disabled:f=!1,error:g,valueExtractor:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y})=>{const[x,w]=s((()=>i?W(i):"")),[$,C]=s((()=>i?W(i):"")),[S,D]=s([]),[k,_]=s(!0),[F,E]=s(!1),[O,T]=s(!!i),[I,M]=s(i),A=a(c),B=e=>Ee(void 0,void 0,void 0,(function*(){E(!1),_(!0);try{const t=yield A.current(e);C(e),D(t),_(!1)}catch(e){E(!0)}})),z=p(Jx((e=>B(e)),500,{leading:!1,trailing:!0}),[]);h((()=>{A.current=c}),[c]),h((()=>{x&&x.length>=l&&x!==$?z(x):z.cancel(),""===x&&I&&(y&&y(void 0,void 0),L(),M(void 0)),i&&x!==W(i)&&T(!1)}),[x,i]),h((()=>{w(i?W(i):""),L(i),M(i)}),[i]);const j=e=>{w(e.target.value)},R=(e,t)=>{y&&y(e,t)},L=e=>{C(e?W(e):""),T(!!e),D([]),_(!0)},P=()=>{w(""),y&&y(void 0,void 0),L()},H=()=>{O||I?(L(I),w(W(I)),y&&y(I,Y(I)),M(I)):P()},N=()=>!!x&&x.length>=l&&!O,W=e=>e?v?v(e):e.toString():"",Y=e=>{if(e)return m?m(e):e},V=()=>e(Md,{type:"text",value:x,onChange:j,placeholder:d,readOnly:u,disabled:f,allowClear:!0,onClear:P,styleType:"no-border",onBlur:x.length<l?H:void 0});return t(Ds,{className:n,show:N(),error:g&&!N(),disabled:f,readOnly:u,testId:o,onBlur:H,children:[e(u?r:vs,{children:V()}),!u&&N()&&e(ws,{}),e(aD,{listItems:S,onSelectItem:R,valueExtractor:m,listExtractor:b,itemsLoadState:F?"fail":k?"loading":"success",visible:N(),disableItemFocus:!0,onRetry:()=>B(x),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]})},lD=k.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,cD=k(Ed)`
    position: absolute;
    right: 0;
    padding-left: ${Zi["spacing-8"]};
    margin-right: 0;
`,dD=k(bs)`
    // space for clear icon
    padding-right: calc(1.25rem + ${Zi["spacing-16"]});
`,uD=r=>{var{selectedOptions:n,placeholders:o={from:"Select",to:"Select"},options:i,disabled:l,className:c,readOnly:d,error:u,"data-testid":f,id:p,enableSearch:g=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,listStyleWidth:C,onShowOptions:S,onHideOptions:D,onRetry:k,optionsLoadState:_={from:"success",to:"success"},optionTruncationType:F="middle",renderCustomSelectedOption:E,renderListItem:O,renderCustomCallToAction:T}=r,I=Fe(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[M,A]=s(),[B,z]=s(),j=a(null),R={from:a(null),to:a(null)},[L,P]=s("none");h((()=>{A(null==n?void 0:n.from),z(null==n?void 0:n.to)}),[n]);const H=e=>t=>{t.stopPropagation(),t.preventDefault(),l||d||P("from"===e?"from":"to"===e&&M?"to":"from")},N=e=>{var t;const r="from"===e?M:B;if(!r)return"";if(w)return w(r);if(v){const e=v(r);return y?y(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""}return r.toString()},W=(e,t)=>{if("middle"===F){let r=0;return R[e]&&R[e].current&&(r=R[e].current.getBoundingClientRect().width),it.truncateOneLine(t,r,120,8)}return t},Y=e=>{!e&&D&&D(),e&&S&&S()},V=t=>{const r="from"===t?M:B;return r?E?E(r):e(Cs,{$truncateType:F,children:W(t,N(t))}):e(Ss,{$truncateType:F,children:W(t,o[t]||"")})},U=t=>e($s,{onClick:H(t),ref:R[t],$disabled:l,children:V(t)});return t(Ds,{show:"none"!==L,error:u&&!("none"!==L),disabled:l,readOnly:d,testId:f,onBlur:()=>{Y(!1),P("none"),M&&B||(z(void 0),A(void 0))},className:c,children:[t(lD,{children:[e(dD,Object.assign({type:"button","data-testid":p||"selector",disabled:l,ref:j,onClick:H()},I,{children:t($c,{currentActive:(()=>{switch(L){case"from":return"start";case"to":return"end";case"none":return L}})(),children:[U("from"),U("to")]})})),"none"===L&&M&&B&&!d&&!l&&e(cD,{onClick:e=>{e.stopPropagation(),A(void 0),z(void 0),$&&$({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear",children:e(Od,{"aria-hidden":!0})})]}),"none"!==L&&e(ws,{}),(()=>{if("none"===L)return null;const t=i[L];if(t&&t.length>0){const r="from"===L?M:B;return e(aD,{listItems:t,onSelectItem:(e,t)=>((e,t,r)=>{var n;"from"===r?A(e):z(e),Y(!1),j&&(null===(n=j.current)||void 0===n||n.focus()),$&&$({[r]:e},t),"from"===r?(z(void 0),P("to"),Y(!0)):P("none")})(e,t,L),onDismiss:()=>(()=>{var e;P("none"),Y(!1),j&&(null===(e=j.current)||void 0===e||e.focus()),M&&B||(z(void 0),A(void 0))})(),valueExtractor:v,listExtractor:x,listStyleWidth:C,visible:!0,enableSearch:g,searchPlaceholder:b,searchFunction:m,"data-testid":`${L}-dropdown-list`,selectedItems:r?[r]:[],onRetry:k,itemsLoadState:_[L],itemTruncationType:F,renderListItem:O,renderCustomCallToAction:T})}return null})()]})},hD=({selectedOption:t,placeholder:r="Select",options:n,disabled:o,error:i,className:l,"data-testid":c,id:d,enableSearch:u=!1,searchFunction:f,searchPlaceholder:p,valueExtractor:g,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:C="success",optionTruncationType:S="end",renderCustomSelectedOption:D,renderListItem:k,hideNoResultsDisplay:_,noResultsDescription:F,customLabels:E,renderCustomCallToAction:O,onBlur:T,variant:I="default",readOnly:M,alignment:A,dropdownZIndex:B,dropdownRootNode:z,dropdownWidth:j})=>{const[R,L]=s(t),[P,H]=s(!1),[N,W]=s(!1),[Y]=s((()=>ot.generate())),V=a(null),U=a(null),K=a(null);h((()=>{L(t)}),[t]);const q=(e,t)=>{var r;null===(r=U.current)||void 0===r||r.focus(),L(e),H(!1),ee(!1),null==y||y(e,t)},Z=()=>{P&&(H(!1),ee(!1))},G=()=>{N||P||W(!0)},Q=e=>{N&&!P&&V.current&&!V.current.contains(e.relatedTarget)&&(W(!1),null==T||T())},X=()=>{var e;if(!R)return"";if(v)return v(R);if(g){const t=g(R);return m?m(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return R.toString()},J=e=>{if("middle"===S){let t=0;return K&&K.current&&(t=K.current.getBoundingClientRect().width),it.truncateOneLine(e,t,120,8)}return e},ee=e=>{e?null==x||x():null==w||w()};return e(cv,{children:e(Es,{enabled:!M&&!o,isOpen:P,renderElement:()=>e(rc,{className:l,"data-testid":c,id:d,ref:V,tabIndex:-1,onFocus:G,onBlur:Q,$focused:N,$disabled:o,$readOnly:M,$error:i,children:e(zv,{ref:U,disabled:o,expanded:P,listboxId:Y,popupRole:"listbox",readOnly:M,variant:I,children:e($s,{ref:K,$disabled:o,children:R?D?D(R):e(Cs,{$truncateType:S,$variant:I,children:J(X())}):e(Ss,{$truncateType:S,$variant:I,children:r})})})}),renderDropdown:()=>e(Mv,{listboxId:Y,listItems:n,onSelectItem:q,onDismiss:Z,valueExtractor:g,listExtractor:b,enableSearch:u,searchPlaceholder:p,searchFunction:f,selectedItems:R?[R]:[],onRetry:$,itemsLoadState:C,itemTruncationType:S,renderListItem:k,hideNoResultsDisplay:_,noResultsDescription:F,customLabels:E,renderCustomCallToAction:O,variant:I,width:j,matchElementWidth:!0}),onOpen:()=>{H(!0),ee(!0),W(!0)},onClose:e=>{H(!1),ee(!1),"click"!==e&&(W(!1),null==T||T())},onDismiss:()=>{var e;null===(e=U.current)||void 0===e||e.focus(),H(!1),ee(!1)},clickToToggle:!0,offset:8,alignment:A,fitAvailableHeight:!0,customZIndex:B,rootNode:z})})},fD=k.div`
    overflow: hidden;
    border: ${qi["width-010"]} ${qi.solid} ${Vi.border};
    border-radius: ${Gi.sm};
    background: ${Vi.bg};
    padding: ${Zi["spacing-16"]};
    min-width: 23rem;

    ${Ji.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Xi["sm-margin"]} * 2);
    }

    ${Ji.MaxWidth.xs} {
        width: calc(100vw - ${Xi["xs-margin"]} * 2);
    }

    ${Ji.MaxWidth.xxs} {
        width: calc(100vw - ${Xi["xxs-margin"]} * 2);
    }
`,pD=k.div`
    display: flex;
    align-items: baseline;
`,gD=k.div`
    margin: 0 0.5rem;
    color: ${Vi.text};
`,mD=k(k.div`
    ${e=>"small"===e.$variant?Ui["body-md-regular"]:Ui["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return _`
                    ${$a(1)}
                `}}
    overflow: hidden;
`)`
    color: ${Vi["text-subtler"]};
`,bD=r=>{var{alignment:n="left",className:o,disabled:i,dropdownZIndex:l,error:c,histogramSlider:d,id:u,onBlur:f,onChange:p,onChangeEnd:g,optionTruncationType:m="end",placeholder:b="Select",rangeLabelPrefix:v,rangeLabelSuffix:y,readOnly:x,renderRangeLabel:w,value:$,dropdownRootNode:C}=r,S=Fe(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value","dropdownRootNode"]);const{interval:D,bins:k=[],renderEmptyView:_,ariaLabels:F}=d,E=k.map((e=>e.minValue)),O=Math.min(...E),[T,I]=s(U()),[M,A]=s(!1),[B,z]=s(!1),[j]=s((()=>ot.generate())),R=a(null),L=a(null),P=a(null),H=S["data-testid"]||"select-histogram";h((()=>{$!==T&&I(U())}),[$]);const N=e=>{I(e),null==p||p(e)},W=e=>{I(e),null==g||g(e)},Y=()=>{B||M||z(!0)},V=e=>{B&&!M&&R.current&&!R.current.contains(e.relatedTarget)&&(z(!1),null==f||f())};function U(){return null!=$?$:[O,O+D]}const K=e=>w?w(e):t(Ea.BodyBL,{children:[v,e,y]});return e(cv,{children:e(Es,{enabled:!x&&!i,isOpen:M,renderElement:()=>e(rc,{className:o,"data-testid":H,id:u,ref:R,tabIndex:-1,onFocus:Y,onBlur:V,$focused:B,$disabled:i,$readOnly:x,$error:c,children:e(zv,{ref:L,disabled:i,expanded:M,listboxId:j,popupRole:"dialog",readOnly:x,variant:"default",children:e($s,{ref:P,$disabled:i,children:E&&0!==E.length?t(pD,{children:[K(T[0]),e(gD,{children:"-"}),K(T[1])]}):e(mD,{$truncateType:m,$variant:"default",children:b})})})}),renderDropdown:({elementWidth:t,styles:r,setFloatingRef:n,getFloatingProps:o})=>e(fD,Object.assign({style:Object.assign(Object.assign({},r),{width:t}),ref:n},o(),{children:e(_d,{interval:D,value:T,bins:k,onChange:N,onChangeEnd:W,showRangeLabels:!1,renderEmptyView:_,ariaLabels:F})})),onOpen:()=>{A(!0)},onClose:()=>{A(!1)},onDismiss:()=>{var e;null===(e=L.current)||void 0===e||e.focus(),A(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:l,rootNode:C})})},vD=t=>{var{value:r,ariaLabel:n,onChange:o,onChangeEnd:i}=t,a=Fe(t,["value","ariaLabel","onChange","onChangeEnd"]);const[l,c]=s(d());h((()=>{r!==l[0]&&c(d())}),[r]);function d(){return null!=r?[r]:[0]}return e(wd,Object.assign({},a,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;c([t]),null==o||o(t)},onChangeEnd:e=>{const[t]=e;c([t]),null==i||i(t)},ariaLabels:n?[n]:void 0}))},yD=k.p`
    text-align: right;
    ${Ui["body-sm-semibold"]}
    color: ${Vi["text-subtler"]};
`,xD=({value:t,maxLength:n,renderCustomCounter:i})=>{const[a,l]=s("");h((()=>{l(c(`${t||""}`))}),[t,n]);const c=e=>{if(i)return i(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e(r,{children:o.isValidElement(a)?a:e(yD,{"data-testid":"counter-label",children:a})})},wD=k.div`
    display: flex;
    flex-direction: column;
`,$D=k.textarea`
    border: ${qi["width-010"]} ${qi.solid} ${Vi.border};
    border-radius: ${Gi.sm};
    background: ${Vi.bg};
    outline: none;
    overflow: hidden;

    display: block;
    padding: ${Zi["spacing-12"]} ${Zi["spacing-16"]};
    width: 100%;

    ${Ui["body-baseline-regular"]}
    color: ${Vi.text};

    &:focus,
    &:active {
        outline-offset: -1px;
        outline: ${qi["width-020"]} ${qi.solid}
            ${Vi["border-focus"]};
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Vi["text-subtler"]};
    }

    ${e=>e.readOnly?_`
                border-color: transparent;
                background: transparent !important;
                padding: ${Zi["spacing-12"]} 0;

                &:focus,
                &:active {
                    outline-color: ${Vi["border-focus"]};
                }
            `:e.disabled?_`
                background: ${Vi["bg-disabled"]};
                cursor: not-allowed;

                &:focus,
                &:active {
                    outline-color: ${Vi["border-disabled"]};
                }
            `:e.$error?_`
                border-color: ${Vi["border-error"]};

                &:focus,
                &:active {
                    outline-color: ${Vi["border-error-focus"]};
                }
            `:void 0}
`,CD=o.forwardRef(((t,r)=>{var{value:n,disabled:o,error:i,rows:a=5,prefix:l,transformValue:c,onChange:d,maxLength:u}=t,f=Fe(t,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[p,g]=s(n);h((()=>{g(n)}),[n]);return e($D,Object.assign({ref:r,disabled:o,value:l?l+(null!=p?p:""):p,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const r=t.slice(l.length),n=c?c(r):r;if(g(n),e.target.value=l+n,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});d(t)}}else{const r=c?c(null!=t?t:""):t;g(r),e.target.value=r,d&&d(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},$error:i,rows:a,maxLength:l&&u?l.length+u:u},f))}));o.forwardRef(((r,n)=>{var{value:o,disabled:i,rows:a=5,onChange:l,transformValue:c,prefix:d,maxLength:u,renderCustomCounter:f}=r,p=Fe(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[g,m]=s(o);h((()=>{m(o)}),[o]);return t(wD,{children:[e(CD,Object.assign({ref:n,disabled:i,value:g,rows:a||5,onChange:e=>{const t=e.target.value;m(t),l&&l(e)},prefix:d,transformValue:c,maxLength:u},p)),u&&e(xD,{value:g,maxLength:u,renderCustomCounter:f})]})}));const SD=k.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Zi["spacing-4"]};
`,DD=k.div`
    display: flex;
    flex: 1;
    margin-right: ${Zi["spacing-12"]};
`,kD=k(Xa)`
    margin-top: 0;
`,_D=o.forwardRef(((n,o)=>{const{label:i,value:a,errorMessage:l,id:c="form-textarea","data-error-testid":d,"data-testid":u,onChange:f,layoutType:p,mobileCols:g,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,transformValue:D,prefix:k=""}=n,_=Fe(n,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[F,E]=s(a);h((()=>{E(a)}),[a]);return t(fs,{id:c,label:i,disabled:_.disabled,layoutType:p,mobileCols:g,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,children:[e(CD,Object.assign({id:`${c}-base`,"data-testid":u||c,value:F,error:!!l,onChange:e=>{const t=e.target.value;E(t),f&&f(e)},ref:o,prefix:k,transformValue:D},_)),l||_.maxLength?t(SD,{children:[l&&e(DD,{children:e(kD,{"data-testid":d||(c?`${c}-error-message`:"error-message"),children:l})}),_.maxLength&&e(xD,{value:F,maxLength:_.maxLength,renderCustomCounter:_.renderCustomCounter})]}):e(r,{})]})})),FD=k.div`
    position: relative;
`,ED=k(nc)`
    height: 3rem;
    gap: ${Zi["spacing-8"]};
`,OD=k(oc)`
    display: block;
    width: 100%;
    flex: 1;
`;var TD,ID;!function(e){e.AM="AM",e.PM="PM"}(TD||(TD={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,o]=e.split(":"),i=parseInt(n,10),a=parseInt(o,10);if(isNaN(i)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*i+a,l=s%t,c=0===l?s:r?s+(t-l):s-l,d=c%60;return`${Math.floor(c/60).toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let o=ze(e,n),i=ze(t,n);o.isSame(i)&&(i=i.add(1,"day"));const a=[];for(;o.isBefore(i);)a.push(o.format(r)),o=o.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:TD.AM};if(!t)return r;try{if("24hr"===e){const n=BD(t,e);r.minute=it.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period=TD.AM,r.hour=0===o?"12":it.padValue(o.toString())):(r.period=TD.PM,r.hour=12===o?o.toString():it.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=BD(t,e);r.hour=it.padValue(n),r.minute=it.padValue(o),r.period="am"===i.toLowerCase()?TD.AM:TD.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?it.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return it.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?it.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?it.padValue(n.toString()):13===n?it.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===TD.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return it.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:o=""}=BD(e,t),i=it.padValue(r);let a=`${i}:${it.padValue(n)}`;return"12hr"===t?(a+=o.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&i<12&&(i+=12),"am"===r&&12===i&&(i=0),zD(i,o)}return e},e.generateTimings=(t,r="12hr",n,o)=>{const i=[];let a=0,s=1440-t;for(n&&(a=e.timeToMinutes(n)),o&&(s=e.timeToMinutes(o));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=zD(e,n,t);i.push(r)}else{const t=zD(e,n);i.push(t)}a+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&o<12?o+=12:("am"===a&&12===o||24===o)&&(o=0),zD(o,i);a?0===o||24===o?(a="am",o=12):o>12&&(a="pm",o-=12):(a=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return zD(o,i,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let o="",i=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<i)i=Math.abs(r),o=t;else if(r>0)break}return o},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&12!==i&&(i+=12),"am"===r&&12===i&&(i=0),60*i+o},e.calculateDuration=(t,r)=>{const n=e.timeToMinutes(t);return e.timeToMinutes(r)-n}}(ID||(ID={}));const MD=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},AD=e=>{const t=parseInt(e);return t>=0&&t<=59},BD=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!MD(r[0],t)||!AD(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!MD(r[0],t)||!AD(r[1]))throw n;return{hour:r[0],minute:r[1]};var o},zD=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,jD=k.div`
    padding: ${Zi["spacing-8"]} ${Zi["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Vi["bg-error"](e),r=Vi["border-error"](e);break;case"success":t=Vi["bg-success"](e),r=Vi["border-success"](e);break;case"warning":default:t=Vi["bg-warning"](e),r=Vi["border-warning"](e);break;case"info":t=Vi["bg-info"](e),r=Vi["border-info"](e);break;case"description":t=Vi["bg-strong"](e),r=Vi["border-strong"](e)}return _`
            background: ${t};
            border-left: ${qi["width-020"]} ${qi.solid}
                ${r};
        `}}

    color: ${Vi.text};
    ${e=>"small"===e.$sizeType?za({textSize:"body-sm"}):za({textSize:"body-md"})}
`,RD=k.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Zi["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Vi["icon-error"](e);break;case"success":t=Vi["icon-success"](e);break;case"warning":default:t=Vi["icon-warning"](e);break;case"info":t=Vi["icon-info"](e);break;case"description":t=Vi["icon-subtle"](e)}return _`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,LD=k(Ea.LinkSM)`
    ${e=>"small"===e.$sizeType?_`
                ${Ui["body-sm-semibold"]}
                margin-top: ${Zi["spacing-4"]};
            `:_`
                ${Ui["body-md-semibold"]}
                margin-top: ${Zi["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Zi["spacing-4"]};
    }
`,PD=k.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,HD=k.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return _`
                margin-bottom: ${Zi["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,ND=k.button`
    ${e=>"small"===e.$sizeType?_`
                ${Ui["body-sm-semibold"]}
            `:_`
                ${Ui["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Zi["spacing-4"]};
    margin-top: ${Zi["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Vi["text-primary"]};
`,WD=k(de)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Ki["duration-350"]} ${Ki["ease-standard"]};
`,YD=k.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?_`
                    color: ${Vi["icon-selected-disabled"]};
                `:_`
                    color: ${Vi["icon-disabled-subtle"]};
                `:e.$active?_`
                color: ${Vi["icon-selected"]};
            `:_`
            color: ${Vi["icon-subtle"]};
        `};
`,VD=_`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${Ui.Spec["weight-regular"]};
        ${e=>e.$size&&Ui[`${e.$size}-regular`]}
        color: ${Vi.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,UD=k.ol`
    ${VD}

    margin-left: 3rem;

    ${Ji.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:t}=e,r=e.$counterType||"decimal",n=e.$counterSeparator||")";return _`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){return _`
                counter-reset: list ${t?r+1:r-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,KD=k.ul`
    ${VD}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,qD=t=>{var{size:r,bulletType:n,bottomMargin:o,children:i}=t,a=Fe(t,["size","bulletType","bottomMargin","children"]);return e(KD,Object.assign({$size:r,$bulletType:n,$bottomMargin:o},a,{children:i}))};qD.displayName="TextList.Ul";const ZD=t=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:a}=t,s=Fe(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e(UD,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},s,{children:a}))};ZD.displayName="TextList.Ol";const GD=qD,QD=k.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${Gi.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Vi.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${Vi["focus-ring"]};
        outline-offset: 0;
    }

    ${e=>{if(!e.$indicator)return _`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return _`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?_`
                            border-color: ${Vi["border-error"]};
                        `:_`
                            border-color: ${Vi["border-error"]};

                            &:has(${nk}:hover) {
                                @media (pointer: fine) {
                                    background: ${Vi["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?_`
                            border: none;
                            background: ${Vi["bg-selected-disabled"]};
                        `:_`
                            border: none;
                        `:e.$selected?_`
                        border: none;
                        background: ${Vi["bg-selected"]};

                        &:has(${nk}:hover) {
                            @media (pointer: fine) {
                                background: ${Vi["bg-selected-hover"]};

                                & ${ek} {
                                    color: ${Vi["text-selected-hover"]};
                                }

                                & ${hk} {
                                    color: ${Vi["icon-selected-hover"]};
                                }
                            }
                        }
                    `:_`
                    border: none;

                    &:has(${nk}:hover) {
                        @media (pointer: fine) {
                            background: ${Vi["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?_`
                            border-color: ${Vi["border-error"]};
                        `:_`
                            border-color: ${Vi["border-error"]};

                            &:has(${nk}:hover) {
                                @media (pointer: fine) {
                                    background: ${Vi["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?_`
                            border-color: ${Vi["border-selected-disabled"]};
                            background: ${Vi["bg-selected-disabled"]};
                        `:_`
                            border-color: ${Vi["border-disabled"]};
                            background: ${Vi["bg-disabled"]};
                        `:e.$selected?_`
                        border-color: ${Vi["border-selected"]};
                        background: ${Vi["bg-selected"]};

                        &:has(${nk}:hover) {
                            @media (pointer: fine) {
                                background: ${Vi["bg-selected-hover"]};

                                & ${ek} {
                                    color: ${Vi["text-selected-hover"]};
                                }

                                & ${hk} {
                                    color: ${Vi["icon-selected-hover"]};
                                }
                            }
                        }
                    `:_`
                    border-color: ${Vi.border};

                    &:has(${nk}:hover) {
                        @media (pointer: fine) {
                            background: ${Vi["bg-hover-subtle"]};
                        }
                    }
                `}
`,XD=k.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,JD=k.div`
    display: flex;
`,ek=k.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?_`
                    color: ${Vi["text-selected-disabled"]};
                `:_`
                    color: ${Vi["text-disabled"]};
                `:e.$selected?_`
                color: ${Vi["text-selected"]};
            `:_`
            color: ${Vi.text};
        `}
`,tk=k.label`
    ${Ui["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${Ji.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${Ji.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,rk=k.div`
    ${Ui["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Ui["body-md-semibold"]}
    }
`,nk=k.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,ok=k.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,ik=k.button`
    color: ${e=>e.$disabled?Vi["text-disabled"]:Vi["text-error"]};
    white-space: nowrap;
    ${Ui["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,ak=k.button`
    color: ${e=>e.disabled?Vi["text-disabled"]:Vi["text-primary"]};
    ${Ui["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Vi.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,sk=k.div`
    width: 100%;
    color: ${e=>e.$disabled?Vi["text-disabled"]:Vi["text-error"]};
    border: none;
    background: ${Vi.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,lk=k((r=>{var{type:n,className:o,children:i,actionLink:a,actionLinkIcon:l,sizeType:c="default",showIcon:d=!1,customIcon:u,maxCollapsedHeight:f,role:g}=r,m=Fe(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight","role"]);const[b,v]=s(!1),[y,x]=s(!1),{height:w,ref:$}=er(),[C]=s((()=>ot.generate())),S=p((()=>{v(!f),x(k())}),[f,w]),k=()=>!(!w||!f)&&w>f;h((()=>{S()}),[f,w,S]);return t(jD,{className:o,$type:n,$sizeType:c,"aria-label":`${(()=>{switch(n){case"success":return"Success";case"warning":return"Warning";case"error":return"Error";case"info":return"Information";case"description":return"Description";default:return"Alert"}})()}`,"data-testid":m["data-testid"],role:g,children:[d&&e(RD,{$sizeType:c,$type:n,children:(()=>{if(n&&u)return u;switch(n){case"success":return e(De,{"aria-hidden":!0});case"warning":return e(Se,{"aria-hidden":!0});case"error":return e(ue,{"aria-hidden":!0});case"info":case"description":return e(D,{"aria-hidden":!0});default:return null}})()}),t(PD,{children:[y&&t(ND,{$sizeType:c,$type:n,type:"button","aria-expanded":b,"aria-controls":C,onClick:()=>v(!b),children:["Show ",b?"less":"more",e(WD,{$expanded:b})]}),t(HD,{id:C,$maxCollapsedHeight:k()?f:void 0,$showMore:b,$hasActionLink:!!a,inert:Ts(!!f&&!b),children:[e("div",{ref:$,children:i}),a?t(LD,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c},a,{children:[a.children,l||e(Ce,{})]})):null]})]})]})}))`
    width: 100%;
    user-select: none;
`,ck=k.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Vi.bg};
    ${za({textSize:"body-md"})}

    ${e=>e.$disabled?_`
                color: ${Vi["text-disabled"]};
            `:e.$selected?_`
                color: ${Vi["text-selected"]};
            `:_`
                color: ${Vi.text};
            `}
`,dk=k(Ea.BodyMD)`
    color: ${e=>e.$disabled?Vi["text-disabled"]:Vi["text-error"]};
`,uk=k(GD)`
    color: ${e=>e.$disabled?Vi["text-disabled"]:Vi["text-error"]};
`,hk=k((({type:t,active:r=!1,disabled:n,className:o})=>{let i;switch(t){case"checkbox":i=e(r?pe:he,{});break;case"radio":i=e(r?_e:ke,{});break;case"tick":i=e(ge,{});break;case"cross":i=e(X,{});break;default:i=null}return e(YD,{className:o,$active:r,$disabled:n,"aria-hidden":!0,children:i})}))`
    ${e=>e.$disabled?e.$selected?_`
                    color: ${Vi["icon-selected-disabled"]};
                `:_`
                    color: ${Vi["icon-disabled-subtle"]};
                `:e.$selected?_`
                color: ${Vi["icon-selected"]};
            `:_`
            color: ${Vi["icon-subtle"]};
        `};
`,fk=FS(k.div`
    position: absolute;
    top: calc(3rem + ${Zi["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${Ji.MaxWidth.xxs} {
        max-width: 100%;
    }
`),pk=k.div`
    position: relative;
    width: 100%;
    padding: ${Zi["spacing-8"]} ${Zi["spacing-20"]}
        ${Zi["spacing-24"]} ${Zi["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Vi.bg};
    border: ${qi["width-010"]} ${qi.solid} ${Vi.border};
    border-radius: ${Gi.sm};
`,gk=k.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Ji.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,mk=k.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Zi["spacing-16"]};
    gap: ${Zi["spacing-8"]} ${Zi["spacing-16"]};

    ${Ji.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${Zi["spacing-32"]};
    }
`,bk=k.div`
    display: flex;
    align-items: center;
    margin-right: ${Zi["spacing-32"]};

    ${Ji.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,vk=k.div`
    display: flex;
    gap: ${Zi["spacing-8"]};

    ${Ji.MaxWidth.lg} {
        flex-direction: column;
    }

    ${Ji.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,yk=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Ji.MaxWidth.xxs} {
        width: 6rem;
    }
`,xk=k(Ia)`
    width: 5rem;
    padding: ${Zi["spacing-16"]} 0;
    color: ${Vi.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Vi["icon-hover"]};
    }
`,wk=k(Ea.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,$k=k(rc)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Ji.MaxWidth.xxs} {
        width: 100%;
    }
`,Ck=k(oc)`
    text-align: center;
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }
`,Sk=k((n=>{var{type:o="checkbox",indicator:i,checked:l,styleType:c="default",children:d,childrenMaxLines:u,subLabel:f,disabled:p,error:g,name:m,id:b,className:y,compositeSection:x,removable:w,onRemove:$,"data-testid":C,onChange:S,useContentWidth:D,"aria-describedby":k}=n,_=Fe(n,["type","indicator","checked","styleType","children","childrenMaxLines","subLabel","disabled","error","name","id","className","compositeSection","removable","onRemove","data-testid","onChange","useContentWidth","aria-describedby"]);const{collapsible:F=!0,errors:E,children:O,initialExpanded:T}=x||{},[I,M]=s(l),[A,B]=s(!!T),z=v((()=>{const e=Array.isArray(E)&&(null==E?void 0:E.length)>0,t=!Array.isArray(E)&&!!E;return e||t}),[E]),[j]=s(ot.generate()),R=b?`${b}`:`tg-${j}`,L=a(null);h((()=>{M(l)}),[l]),h((()=>{I&&B(null==T||T)}),[I]);const P=e=>{if(!p){if(S)return void S(e);switch(o){case"checkbox":M((e=>!e));break;case"radio":case"yes":case"no":I||M(!0)}}},H=()=>{p||B(!A)},N=()=>{p||!$||$()},W=()=>{var e;null===(e=null==L?void 0:L.current)||void 0===e||e.click()},Y=e=>{e.stopPropagation()},V=()=>{let t;switch(o){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=o}return e(hk,{type:t,active:I,disabled:p,$selected:I,$disabled:p})},U=()=>{if(!f)return null;let t;return t="function"==typeof f?f():f,e(rk,{"data-id":"toggle-sublabel",id:`${R}-sublabel`,"aria-hidden":!0,children:t})},K=n=>t(r,{children:[e(dk,{weight:"semibold",$disabled:p,children:"Error"}),e(uk,{$disabled:p,children:null==n?void 0:n.map(((t,r)=>e("li",{id:`${R}-error-list-item-${r}`,children:e(dk,{weight:"semibold",$disabled:p,children:t})},r)))})]});return t(QD,{$selected:I,$disabled:p,className:y,$styleType:c,$error:g,$indicator:i,$useContentWidth:D,id:b,"data-testid":C,children:[(()=>{const r=["string"==typeof f?`${R}-sublabel`:null,k].filter(Boolean).join(" ")||void 0;return t(nk,{id:`${R}-header-container`,$disabled:p,$error:g,$selected:I,$indicator:i,$styleType:c,children:[e(ok,{$addPadding:w,children:t(JD,{id:`${R}-input-container`,onClick:W,children:[e(XD,Object.assign({ref:L,name:m,id:`${R}-input`,type:"checkbox"===o?"checkbox":"radio","data-testid":"toggle-input",disabled:p,onChange:P,onClick:Y,checked:I,"aria-describedby":r},_)),i&&V(),t(ek,{$selected:I,$disabled:p,children:[e(tk,{htmlFor:`${R}-input`,"data-testid":"toggle-label",id:`${R}-label`,$maxLines:u,children:d}),f&&U()]})]})}),w&&e(ik,{type:"button",$disabled:p,onClick:N,id:`${R}-remove-button`,children:"Remove"})]})})(),O&&t("div",{children:[(!F||A)&&e(ck,{"data-id":"toggle-composite-children",$isFinalItem:!F,$disabled:p,children:O}),F&&!A&&z&&e(sk,{$disabled:p,onClick:H,id:`${R}-error-alert`,children:e(lk,{type:p?"description":"error",className:y,showIcon:!0,children:Array.isArray(E)?K(E):E})}),F&&t(ak,{$paddingTopRequired:!A&&!z,disabled:p,onClick:H,"data-testid":A?"collapse-button":"expand-button",children:[A?"Show less":"Show more",e(A?$e:J,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,Dk=k(rl.Small)`
    width: 7rem;

    ${Ji.MaxWidth.sm} {
        flex: 1;
    }

    ${Ji.MaxWidth.xxs} {
        width: 100%;
    }
`;var kk,_k,Fk;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(kk||(kk={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(_k||(_k={})),function(e){e.AM="am",e.PM="pm"}(Fk||(Fk={}));const Ek=({id:r,value:n,show:o,format:i,onChange:l,onCancel:c})=>{var d;const u=ID.getTimeValues(i,n),[f,g]=s(u.hour),[m,b]=s(u.minute),[v,y]=s(u.period),x=a(null),w=a(null),$=er();h((()=>{if(o&&x.current&&x.current.focus(),o){const{hour:e,minute:t,period:r}=ID.getTimeValues(i,n);g(e),b(t),y(r)}}),[o,n,i]),h((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",C),t&&t.addEventListener("keydown",C),()=>{e&&e.removeEventListener("keydown",C),t&&t.removeEventListener("keydown",C)}}),[]);const C=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=p((e=>{switch(e.currentTarget.name){case kk.MINUTE_UP:b(ID.updateMinutes(m,"add"));break;case kk.MINUTE_DOWN:b(ID.updateMinutes(m,"minus"));break;case kk.HOUR_UP:g(ID.updateHours(f,"add"));break;case kk.HOUR_DOWN:g(ID.updateHours(f,"minus"))}}),[f,m]),D=e=>{e.target.select()},k=e=>{const t=e.target.value;switch(e.target.name){case _k.HOUR:t.length<=2&&g(t);break;case _k.MINUTE:t.length<=2&&b(t)}},_=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case _k.HOUR:{const r=t>23||t<0?u.hour:ID.convertHourTo12HourFormat(e.target.value);g(r);break}case _k.MINUTE:{const r=t>59||t<0?u.minute:e.target.value;b(it.padValue(r));break}}},F=e=>{switch(e.target.name){case Fk.AM:y(TD.AM);break;case Fk.PM:y(TD.PM)}},E=e=>r?`${r}-${e}`:e,O=dS({opacity:o?1:0,height:o?(null!==(d=$.height)&&void 0!==d?d:0)+32+2:0});return e(fk,{"data-testid":"animated-dropdown-wrapper",style:O,children:t(pk,{ref:$.ref,"data-testid":E("timepicker-dropdown"),inert:Ts(!o),children:[t(gk,{children:[t(bk,{children:[t(yk,{children:[e(xk,{"aria-label":"increase hour",name:kk.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":E("hour-increment-button"),children:e($e,{})}),e($k,{children:e(Ck,{"aria-label":"hour",type:"number",name:_k.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:f,onFocus:D,onChange:k,onBlur:_,min:1,max:12,placeholder:"HH","data-testid":E("hour-input")})}),e(xk,{"aria-label":"decrease hour",name:kk.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":E("hour-decrement-button"),children:e(J,{})})]}),e(wk,{children:":"}),t(yk,{children:[e(xk,{"aria-label":"increase minute",name:kk.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":E("minute-increment-button"),children:e($e,{})}),e($k,{children:e(Ck,{"aria-label":"minute",type:"number",name:_k.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:m,onChange:k,onBlur:_,onFocus:D,min:0,max:59,placeholder:"MM","data-testid":E("minute-input")})}),e(xk,{"aria-label":"decrease minute",name:kk.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":E("minute-decrement-button"),children:e(J,{})})]})]}),t(vk,{children:[e(Sk,{checked:v===TD.AM,name:Fk.AM,type:"radio",onChange:F,"data-testid":E("am-toggle"),"aria-label":"AM",children:"AM"}),e(Sk,{checked:v===TD.PM,name:Fk.PM,type:"radio",onChange:F,"data-testid":E("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),t(mk,{children:[e(Dk,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":E("cancel-button"),children:"Cancel"}),e(Dk,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===i?ID.convertTo24HourFormat({hour:f,minute:m,period:v}):`${f}:${m}${v}`,l(e)},disabled:""===f||""===m,"data-testid":E("confirm-button"),children:"Done"})]})]})})},Ok=r=>{var{id:n,disabled:o=!1,error:i,value:l,format:c="24hr",readOnly:d,onChange:u,onFocus:f,onBlur:p}=r,g=Fe(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,b]=s(!1),[v,y]=s(!1),[x,w]=s(""),[$,C]=s(""),S=a(null);h((()=>{l&&(w(l.start),C(l.end))}),[l]),rr("mousedown",(function(e){o||F(e)}),"document"),rr("keyup",(function(e){if("Tab"===e.code)F(e)}),"document");const D=()=>{_()},k=()=>{m||v||f&&f()},_=()=>{b(!1),y(!1),p&&p()},F=e=>{S.current&&!S.current.contains(e.target)&&(v||m)&&_()};return e(FD,Object.assign({ref:S,id:n},g,{children:t(ED,{$disabled:o,$error:i,$readOnly:d,children:[t($c,{error:i,currentActive:m?"start":v?"end":"none",children:[e(OD,{onFocus:()=>{o||d||m||(y(!1),b(!0),k())},readOnly:!0,placeholder:"From",value:ID.formatDisplayValue(x,c),disabled:o,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e(OD,{onFocus:()=>{o||d||v||(b(!1),y(!0),k())},readOnly:!0,placeholder:"To",value:ID.formatDisplayValue($,c),disabled:o,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),e(Ek,{id:n,show:m,value:x,format:c,onCancel:D,onChange:e=>{b(!1),y(!0),w(e);u&&u({start:e,end:$})}}),e(Ek,{id:n,show:v,value:$,format:c,onCancel:D,onChange:e=>{y(!1),C(e);u&&u({start:x,end:e}),""==x?b(!0):p&&p()}})]})}))},Tk=k(nc)`
    height: 3rem;
    gap: ${Zi["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${Zi["spacing-20"]});
`,Ik=r=>{var{id:n,disabled:o=!1,error:i,value:l,format:c="12hr",readOnly:d,onChange:u,onFocus:f,onBlur:g,alignment:m="left",dropdownZIndex:b,startLimit:y,endLimit:x,interval:w=15}=r,$=Fe(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[C]=s((()=>ot.generate())),[S,D]=s(null),[k,_]=s(!1),[F,E]=s(""),[O,T]=s(""),[I,M]=s(""),[A,B]=s(""),[z,j]=s(""),R=a(null),L=a(null),P=a(null),H=v((()=>ID.generateTimings(w,c,y,x)),[w,c,y,x]),N=v((()=>{if(""===A)return H;const e=ID.findClosestFlooredTime(A,H);return e?H.slice(H.indexOf(e)):[]}),[H,A]),W=p((e=>ID.parseInput(e,c)),[c]);h((()=>{var e,t;if(l){const r=null!==(e=W(l.start))&&void 0!==e?e:"",n=null!==(t=W(l.end))&&void 0!==t?t:"";T(r),M(n),B(r),j(n)}}),[l,W]),h((()=>{if(i)return void _(!1);const e=W(O),t=W(I);if(void 0===e)E("Invalid start time");else if(void 0===t)E("Invalid end time");else{if(!(""!==e&&""!==t&&ID.to24Hour(t)<ID.to24Hour(e)))return E(""),void(document.activeElement!==L.current&&document.activeElement!==P.current||_(!0));E("End time must be after start time")}_(!1)}),[O,I,W,i]);const Y=e=>{o||d||(S||k||null==f||f(),D(e),_(!0))},V=e=>{var t;o||d||(D(e),_(!0),null===(t=("start"===e?L:P).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===S?K(O):"end"===S&&(k&&q(I),null===(t=P.current)||void 0===t||t.blur());break;case"Tab":Z(O,I,{})}}const K=e=>{Z(e,I,{goToNextInput:!0})},q=e=>{Z(O,e,{triggerOnBlur:!0})},Z=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var o,i,a;const s=null!==(o=W(e))&&void 0!==o?o:A,l=null!==(i=W(t))&&void 0!==i?i:z;T(s),M(l);s===A&&l===z||null==u||u({start:s,end:l}),r&&void 0!==W(e)&&(D("end"),null===(a=P.current)||void 0===a||a.select()),n&&(D(null),_(!1),null==g||g()),B(s),j(l)},G=e=>{e.stopPropagation(),T(""),M(""),B(""),j("");null==u||u({start:"",end:""}),D(null),_(!1)},Q=e=>{var t,r;const n=e.relatedTarget,o=(null===(t=null==n?void 0:n.matches)||void 0===t?void 0:t.call(n,"[data-floating-ui-focusable]"))||(null===(r=null==n?void 0:n.matches)||void 0===r?void 0:r.call(n,"[data-floating-ui-focus-guard]")),i=R.current&&R.current.contains(n);S&&!k&&!i&&!o&&Z(O,I,{triggerOnBlur:!0})},X=()=>{if(!d&&!o&&((null==O?void 0:O.length)>0||(null==I?void 0:I.length)>0))return e(cD,{onClick:G,type:"button","aria-label":"Clear",children:e(Od,{"aria-hidden":!0})})};return t(FD,Object.assign({id:n},$,{children:[e(cv,{children:e(Es,{enabled:!d&&!o,isOpen:k,renderElement:()=>t(Tk,{ref:R,$disabled:o,$error:i||!!F,$readOnly:d,onBlur:Q,children:[t($c,{error:i||!!F,currentActive:null===S?"none":S,children:[e(OD,{ref:L,onFocus:()=>Y("start"),placeholder:"start"===S?"hh:mm":"From",onChange:e=>T(e.target.value),value:O,disabled:o,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":k,"aria-controls":C,"aria-autocomplete":"list"}),e(OD,{ref:P,onFocus:()=>Y("end"),placeholder:"end"===S?"hh:mm":"To",onChange:e=>M(e.target.value),value:I,disabled:o,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":k,"aria-controls":C,"aria-autocomplete":"list"})]}),X()]}),renderDropdown:()=>e(Mv,"start"===S?{listItems:H,onSelectItem:K,selectedItems:[O],disableItemFocus:!0,topScrollItem:ID.findClosestFlooredTime(W(O),H),listboxId:C}:{listItems:N,onSelectItem:q,selectedItems:[I],disableItemFocus:!0,topScrollItem:ID.findClosestFlooredTime(W(I),N),listboxId:C}),onClose:e=>{"outside-press"===e?(D(null),_(!1),null==g||g()):Z(O,I,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===S?L:P).current)||void 0===e||e.focus(),_(!1)},offset:8,alignment:m,fitAvailableHeight:!0,customZIndex:b})}),!i&&F&&e(Xa,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:F})]}))},Mk=t=>{var{variant:r="dial"}=t,n=Fe(t,["variant"]);return e("combobox"===r?Ik:Ok,Object.assign({},n))};k.div`
    position: relative;
`;const Ak=k(oc)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,Bk=r=>{var{id:n,disabled:o=!1,readOnly:i=!1,error:l,value:c,placeholder:d,format:u="24hr",onChange:h,onFocus:f,onBlur:g}=r,m=Fe(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[b,v]=s(!1),y=a(null);rr("mousedown",(function(e){o||i||$(e)}),"document"),rr("keyup",(function(e){if("Tab"===e.code)$(e)}),"document");const x=()=>{o||i||b||(v(!0),f&&f())};const w=()=>{v(!1),g&&g()},$=e=>{y.current&&!y.current.contains(e.target)&&b&&w()},C=p((()=>"12hr"===u?"HH:MMam":"HH:MM"),[u,d]);return t(nc,Object.assign({ref:y,id:n,$readOnly:i,$disabled:o,$error:l},m,{children:[e(Ak,{onFocus:x,readOnly:!0,placeholder:d||C(),value:ID.formatDisplayValue(c,u),disabled:o,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),e(Ek,{id:n,show:b,value:c,format:u,onCancel:()=>{w()},onChange:e=>{h&&h(e),w()}})]}))},zk=k(ix)`
    margin-right: 0.5rem;
`,jk=k(Md)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,Rk=k(jk)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,Lk=k(Ea.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return _`
                color: ${Vi["text-disabled"]};
            `}}
`,Pk=k.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,Hk=k(Ea.BodyBL)``,Nk=n=>{var{disabled:o,error:i,value:l,onChange:c,onBlur:d,onChangeRaw:u,onBlurRaw:f,readOnly:p,placeholder:g="00-8888",autoComplete:m}=n,b=Fe(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[v,y]=s(""),[x,w]=s(""),[$,C]=s("none"),S=a(null),D=a(null),k=a(null),_=a(v),F=a(x),E=a($),O=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),T=or({ref:D,formatter:O}),I=or({ref:k,formatter:O}),M=e=>{_.current=e,y(e)},A=e=>{F.current=e,w(e)},B=e=>{E.current=e,C(e)};h((()=>{"floor"===$&&3===v.length&&k.current&&k.current.focus()}),[v]),h((()=>{H(l)}),[l]);const z=e=>{B(e.target.name),e.target.select()},j=e=>{const t=e.target.name,r=e.target.value,n=P(r);"floor"===t?(M(n),n!==v&&N(n,t)):"unit"===t&&(A(n),n!==x&&N(n,t))},R=e=>{const t=e.target.name;if("floor"===t){const e=T();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),M(r),N(r,t)}else if("unit"===t){const e=I();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),A(r),N(r,t)}},L=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===$&&0===x.length&&(null===(t=D.current)||void 0===t||t.focus())},P=e=>/^[0-9]$/.test(e)?it.padValue(e,!0):e.toLocaleUpperCase(),H=e=>{if(e!==Wk)if(void 0===e||0===e.length)M(""),A("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];M("floor"===$?e:P(e)),A("unit"===$?r:P(r))}}},N=(e,t)=>{if(!c&&!u)return;const r={floor:_.current,unit:F.current};if(r[t]=e,c){const e=Y(r);c(e)}u&&u([r.floor,r.unit])},W=()=>{if(!d&&!f)return;const e={floor:P(_.current),unit:P(F.current)};if(d){const t=Y(e);d(t)}f&&f([e.floor,e.unit])},Y=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":Wk},V=e=>e.split("-");return t(nc,Object.assign({},b,{ref:S,onClick:()=>{"none"===$&&D.current&&D.current.focus()},$disabled:o,$error:i,$readOnly:p,tabIndex:-1,onBlur:e=>{S.current&&S.current.contains(e.relatedTarget)||"none"!==E.current&&(B("none"),W())},children:[e(zk,{"data-testid":"addon",$disabled:o,$readOnly:p,children:"#"}),p&&l?(r=>{const n=r.split("-");return t(Pk,{children:[e(Hk,{children:n[0]}),e(Lk,{children:"-"}),e(Hk,{children:n[1]})]})})(l):t(r,{children:[e(jk,{name:"floor",maxLength:3,value:v,ref:D,onFocus:z,onBlur:j,onChange:R,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==$||p?V(g)[0]:"",autoComplete:m,styleType:"no-border"}),e(Lk,{$inactive:0===v.length,children:"-"}),e(Rk,{name:"unit",maxLength:5,value:x,ref:k,onFocus:z,onBlur:j,onChange:R,onKeyDown:L,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==$||p?V(g)[1]:"",autoComplete:m,styleType:"no-border"})]})]}))},Wk="Invalid unit number",Yk={DateInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-date-input-${ot.generate()}`)),w=null!=o?o:x;return e(fs,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(mc,Object.assign({id:`${w}-base`,"data-testid":a||o,"aria-labelledby":`${w}-label`,error:!!n},y))})},DateRangeInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-date-range-input-${ot.generate()}`)),w=null!=o?o:x;return e(fs,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(_c,Object.assign({id:`${o}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},ESignature:t=>{const{label:r,errorMessage:n,id:o="form-field","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(fs,{id:o,label:r,errorMessage:n,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(nd,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},HistogramSlider:t=>{var{label:r,errorMessage:n,id:o="form-histogram-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(fs,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(_d,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},Input:Ad,InputGroup:sx,MaskedInput:Cx,Label:es,MultiSelect:t=>{var{label:r,errorMessage:n,id:o="form-multi-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e(fs,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(Sx,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s,variant:y},x))})},NestedSelect:t=>{var{label:r,errorMessage:n,id:o="form-nested-select","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(fs,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(Fx,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},NestedMultiSelect:t=>{var{label:r,errorMessage:n,id:o="form-nested-multi-select","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(fs,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(_x,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},Select:t=>{var{label:r,errorMessage:n,id:o="form-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e(fs,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(hD,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s,variant:y},x))})},SelectHistogram:t=>{var{label:r,errorMessage:n,id:o="form-select-histogram","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,histogramSlider:v}=t,y=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);return e(fs,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(bD,Object.assign({histogramSlider:v,error:!!n,"data-testid":a||o,id:`${o}-base`},y))})},Slider:t=>{var{label:r,errorMessage:n,id:o="form-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(fs,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(vD,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSlider:t=>{var{label:r,errorMessage:n,id:o="form-range-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(fs,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(wd,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSelect:t=>{var{label:r,errorMessage:n,id:o="form-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(fs,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(uD,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s},y))})},Textarea:_D,Timepicker:t=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(fs,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(Bk,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},TimeRangePicker:t=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(fs,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(Mk,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},CustomField:t=>{var{id:r="form-custom-field","data-error-testid":n,children:o}=t,i=Fe(t,["id","data-error-testid","children"]);return e(fs,Object.assign({id:r,"data-error-testid":n},i,{children:o}))},UnitNumberInput:t=>{var{label:r,errorMessage:n,id:o="form-unit-number-input","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(fs,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(Nk,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},PhoneNumberInput:t=>{var{label:r,errorMessage:n,id:o="form-phone-number-input","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(fs,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(Yx,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},PredictiveTextInput:t=>{var{label:r,errorMessage:n,id:o="form-predictive-text","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(fs,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(sD,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})}};export{Vi as C,Yk as F,ed as S,Ee as _,td as a};
//# sourceMappingURL=index.d0f527f6.js.map
