import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{useRef as i,useState as a,isValidElement as s,createRef as l,cloneElement as c,PureComponent as d,useEffect as u,useLayoutEffect as h,useCallback as f,Children as p,useMemo as g,useImperativeHandle as m,useReducer as b,lazy as v,Suspense as y,forwardRef as x,useContext as w,createElement as $}from"react";import{ICircleFillIcon as C}from"@lifesg/react-icons/i-circle-fill";import S,{css as k,useTheme as _,keyframes as D}from"styled-components";import{useFloatingTree as F,FloatingTree as E,useFloatingNodeId as O,FloatingNode as T,useFloating as I,autoUpdate as M,offset as A,flip as B,shift as z,limitShift as j,useClick as R,useDismiss as L,useHover as P,useInteractions as H,FloatingPortal as N,FloatingFocusManager as W,size as V,useTransitionStyles as Y}from"@floating-ui/react";import U,{findDOMNode as q,unstable_batchedUpdates as K}from"react-dom";import{ExternalIcon as Z}from"@lifesg/react-icons/external";import{CrossIcon as G}from"@lifesg/react-icons/cross";import{ChevronDownIcon as Q}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as X}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as J}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as ee,PencilIcon as te,EraserIcon as re,SquareIcon as ne,SquareFillIcon as oe,SquareTickFillIcon as ie,MinusSquareFillIcon as ae,CrossIcon as se,ChevronDownIcon as le}from"@lifesg/react-icons";import{ExclamationCircleFillIcon as ce}from"@lifesg/react-icons/exclamation-circle-fill";import{MagnifierIcon as de}from"@lifesg/react-icons/magnifier";import{EyeIcon as ue}from"@lifesg/react-icons/eye";import{EyeSlashIcon as he}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as fe}from"@lifesg/react-icons/exclamation-triangle";import{SquareIcon as pe}from"@lifesg/react-icons/square";import{SquareFillIcon as ge}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as me}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as be}from"@lifesg/react-icons/tick";import{CaretRightIcon as ve}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as ye}from"@lifesg/react-icons/minus-square-fill";import{ChevronUpIcon as xe}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as we}from"@lifesg/react-icons/arrow-right";import{ExclamationTriangleFillIcon as $e}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as Ce}from"@lifesg/react-icons/tick-circle-fill";import{CircleIcon as Se}from"@lifesg/react-icons/circle";import{CircleDotIcon as ke}from"@lifesg/react-icons/circle-dot";function _e(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function De(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var Fe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Ee(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Oe,Te={exports:{}};Oe=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var f=e.type;switch(f){case c:case d:case o:case a:case i:case h:return f;default:var m=f&&f.$$typeof;switch(m){case l:case u:case g:case p:case s:return m;default:return t}}case n:return t}}}var w=c,$=d,C=l,S=s,k=r,_=u,D=o,F=g,E=p,O=n,T=a,I=i,M=h,A=!1;function B(e){return x(e)===d}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=C,t.ContextProvider=S,t.Element=k,t.ForwardRef=_,t.Fragment=D,t.Lazy=F,t.Memo=E,t.Portal=O,t.Profiler=T,t.StrictMode=I,t.Suspense=M,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),B(e)||x(e)===c},t.isConcurrentMode=B,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===g},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===i},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===d||e===a||e===i||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var Ie=Te.exports=Oe(o),Me={exports:{}};Me.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,c),i=r-o<0,a=t.clone().add(n+(i?-1:1),c);return+(-(n+(r-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:a,m:i,s:o,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof _||!(!e||!e[w])},C=function e(t,r,n){var o;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,o=s}return!n&&o&&(y=o),o||!n&&y},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new _(r)},k=v;k.l=C,k.i=$,k.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var _=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return k},b.isValid=function(){return!(this.$d.toString()===f)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return k.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!k.u(t)||t,d=k.p(e),f=function(e,t){var o=k.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(s)},p=function(e,t){return k.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return n?f(1,0):f(31,11);case c:return n?f(1,m):f(0,m+1);case l:var y=this.$locale().weekStart||0,x=(g<y?g+7:g)-y;return f(n?b-x:b+(6-x),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=k.p(e),d="set"+(this.$u?"UTC":""),f=(r={},r[s]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[a]=d+"Hours",r[i]=d+"Minutes",r[o]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[k.p(e)]()},b.add=function(n,d){var h,f=this;n=Number(n);var p=k.p(d),g=function(e){var t=S(f);return k.w(t.date(t.date()+Math.round(e*n)),f)};if(p===c)return this.set(c,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[i]=t,h[a]=r,h[o]=e,h)[p]||1,b=this.$d.getTime()+n*m;return k.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=k.z(this),i=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,u=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},h=function(e){return k.s(i%12||12,e,"0")},p=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return k.s(t.$y,4,"0");case"M":return s+1;case"MM":return k.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return k.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return k.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return k.s(a,2,"0");case"s":return String(t.$s);case"ss":return k.s(t.$s,2,"0");case"SSS":return k.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,f){var p,g=this,m=k.p(h),b=S(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return k.m(g,b)};switch(m){case u:p=x()/12;break;case c:p=x();break;case d:p=x()/3;break;case l:p=(y-v)/6048e5;break;case s:p=(y-v)/864e5;break;case a:p=y/r;break;case i:p=y/t;break;case o:p=y/e;break;default:p=y}return f?p:k.a(p)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return k.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),D=_.prototype;return S.prototype=D,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,_,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var Ae=Ee(Me.exports),Be={exports:{}};Be.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[o,function(e){this.afternoon=d(e,!1)}],a:[o,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[o,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,o;n=r,o=i&&i.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],d=u[c],h=d&&d[0],f=d&&d[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var o=a[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(n),d=i.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),o=n.year,i=n.month,a=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,f=new Date,p=a||(o||i?1:f.getDate()),g=o||f.getFullYear(),m=0;o&&!i||(m=i>0?i-1:f.getMonth());var b=s||0,v=l||0,y=c||0,x=d||0;return u?new Date(Date.UTC(g,m,p,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(g,m,p,b,v,y,x)):new Date(g,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var g=r.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else o.call(this,e)}}}();var ze=Ee(Be.exports),je={exports:{}};je.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),a=r(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var Re=Ee(je.exports),Le={exports:{}};Le.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Pe=Ee(Le.exports),He={exports:{}};He.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Ne,We,Ve=Ee(He.exports),Ye={exports:{}};Ye.exports=(Ne={year:0,month:1,day:2,hour:3,minute:4,second:5},We={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=We[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),We[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,c=s.value,d=Ne[l];d>=0&&(i[d]=parseInt(c,10))}var u=i[3],h=24===u?0:u,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var a=o&&t,s=o||t||n,l=i(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var a=i(n-=60*(o-t)*1e3,r);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(r.utc(e,a).valueOf(),l,s),d=c[0],u=c[1],h=r(d).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var Ue,qe=Ee(Ye.exports);Ae.extend(Re),Ae.extend(Ve),Ae.extend(Pe),Ae.extend(ze),Ae.extend(qe),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Ae(t).startOf("week");return Ke(r).map((e=>Ze(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ze(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Ae(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Ae(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Ae(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?Ae(n):void 0,o?Ae(o):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Ue||(Ue={}));const Ke=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Ze=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Ge=[1,3,5,7,8,10,12],Qe=[4,6,9,11];var Xe,Je,et,tt;!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),a=parseInt(n);return 0==o?"1":Ge.includes(i)?Math.min(o,31).toString():Qe.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Ae(e,r);return Ae(t,r).diff(n,"minute")},e.toDayjs=e=>e?Ae(e):Ae(),e.addMinutesToTime=(e,t,r="HH:mm")=>Ae(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Ae(e).isSame(Ae(t),r)}(Xe||(Xe={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!Ae(e).isBefore(n,"day"))||!(!o||!Ae(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Ae(e).isValid())return e}return""}}(Je||(Je={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(et||(et={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const a=n+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e},r=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const t=r.select(e);return`${e}${n.get(t)}`}}(tt||(tt={}));var rt=function(e,t){return rt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},rt(e,t)};var nt=function(){return nt=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},nt.apply(this,arguments)};var ot="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var it=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},at="object"==typeof ot&&ot&&ot.Object===Object&&ot,st="object"==typeof self&&self&&self.Object===Object&&self,lt=at||st||Function("return this")(),ct=lt,dt=function(){return ct.Date.now()},ut=/\s/;var ht=function(e){for(var t=e.length;t--&&ut.test(e.charAt(t)););return t},ft=/^\s+/;var pt=function(e){return e?e.slice(0,ht(e)+1).replace(ft,""):e},gt=lt.Symbol,mt=gt,bt=Object.prototype,vt=bt.hasOwnProperty,yt=bt.toString,xt=mt?mt.toStringTag:void 0;var wt=function(e){var t=vt.call(e,xt),r=e[xt];try{e[xt]=void 0;var n=!0}catch(e){}var o=yt.call(e);return n&&(t?e[xt]=r:delete e[xt]),o},$t=Object.prototype.toString;var Ct=wt,St=function(e){return $t.call(e)},kt=gt?gt.toStringTag:void 0;var _t=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":kt&&kt in Object(e)?Ct(e):St(e)},Dt=function(e){return null!=e&&"object"==typeof e};var Ft=pt,Et=it,Ot=function(e){return"symbol"==typeof e||Dt(e)&&"[object Symbol]"==_t(e)},Tt=/^[-+]0x[0-9a-f]+$/i,It=/^0b[01]+$/i,Mt=/^0o[0-7]+$/i,At=parseInt;var Bt=it,zt=dt,jt=function(e){if("number"==typeof e)return e;if(Ot(e))return NaN;if(Et(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Et(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ft(e);var r=It.test(e);return r||Mt.test(e)?At(e.slice(2),r?2:8):Tt.test(e)?NaN:+e},Rt=Math.max,Lt=Math.min;var Pt=function(e,t,r){var n,o,i,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=i}function g(){var e=zt();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?Lt(r,i-(e-c)):r}(e))}function m(e){return s=void 0,h&&n?f(e):(n=o=void 0,a)}function b(){var e=zt(),r=p(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?f(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=jt(t)||0,Bt(r)&&(d=!!r.leading,i=(u="maxWait"in r)?Rt(jt(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:m(zt())},b},Ht=Pt,Nt=it;var Wt=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Nt(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),Ht(e,t,{leading:n,maxWait:t,trailing:o})},Vt=function(e,t,r,n){switch(t){case"debounce":return Pt(e,r,n);case"throttle":return Wt(e,r,n);default:return e}},Yt=function(e){return"function"==typeof e},Ut=function(){return"undefined"==typeof window},qt=function(e){return e instanceof Element||e instanceof HTMLDocument},Kt=function(e,t,r,n){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!n||t.height===a&&!r?t:(e&&Yt(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!Ut()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(Ut())return null;if(t)return document.querySelector(t);if(n&&qt(n))return n;if(r.targetRef&&qt(r.targetRef.current))return r.targetRef.current;var o=q(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=Kt(s,r.setState.bind(r),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!Ut()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Yt(t)?"renderProp":Yt(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,c=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=l(),r.observableElement=null,Ut()||(r.resizeHandler=Vt(r.createResizeHandler,o,a,c),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}rt(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Ut()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(a,null)}}}(d);var Zt=Ut()?u:h;function Gt(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,s=void 0===o?1e3:o,l=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,h=void 0===u||u,f=e.targetRef,p=e.observerOptions,g=e.onResize,m=i(r),b=i(null),v=null!=f?f:b,y=i(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return Zt((function(){if(!Ut()){var e=Kt(g,$,d,h);y.current=Vt((function(t){(d||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!m.current&&!Ut()&&e({width:n,height:o}),m.current=!1}))}),n,s,l);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,d,h,g,p,v.current]),nt({ref:v},w)}function Qt(e){const t=i(null);return h((()=>{t.current=e}),[e]),f(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}const Xt=(e,t,r="window",n)=>{const o=i();u((()=>{o.current=t}),[t]),u((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])},Jt=()=>{const[e,t]=a(!1);return u((()=>{t(!0)}),[]),e};function er({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const o=n.value,i=t(o),a=null!==(r=n.selectionEnd)&&void 0!==r?r:0,s=o.substring(0,a),l=t(s),c=s.length-l.length,d=Math.max(0,a-c);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(d,d)}}}}const tr=e=>{const t=(e=>{const t=i(e),r=i();return u((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},rr=e=>{const[t,r]=a(e),n=i(e);return[t,f((e=>{n.current=e,r(e)}),[]),n]};var nr=Array.isArray,or="object"==typeof Fe&&Fe&&Fe.Object===Object&&Fe,ir=or,ar="object"==typeof self&&self&&self.Object===Object&&self,sr=ir||ar||Function("return this")(),lr=sr.Symbol,cr=lr,dr=Object.prototype,ur=dr.hasOwnProperty,hr=dr.toString,fr=cr?cr.toStringTag:void 0;var pr=function(e){var t=ur.call(e,fr),r=e[fr];try{e[fr]=void 0;var n=!0}catch(e){}var o=hr.call(e);return n&&(t?e[fr]=r:delete e[fr]),o},gr=Object.prototype.toString;var mr=pr,br=function(e){return gr.call(e)},vr=lr?lr.toStringTag:void 0;var yr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":vr&&vr in Object(e)?mr(e):br(e)};var xr=function(e){return null!=e&&"object"==typeof e},wr=yr,$r=xr;var Cr=function(e){return"symbol"==typeof e||$r(e)&&"[object Symbol]"==wr(e)},Sr=nr,kr=Cr,_r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Dr=/^\w*$/;var Fr=function(e,t){if(Sr(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!kr(e))||(Dr.test(e)||!_r.test(e)||null!=t&&e in Object(t))};var Er=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Or=yr,Tr=Er;var Ir,Mr=function(e){if(!Tr(e))return!1;var t=Or(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Ar=sr["__core-js_shared__"],Br=(Ir=/[^.]+$/.exec(Ar&&Ar.keys&&Ar.keys.IE_PROTO||""))?"Symbol(src)_1."+Ir:"";var zr=function(e){return!!Br&&Br in e},jr=Function.prototype.toString;var Rr=function(e){if(null!=e){try{return jr.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Lr=Mr,Pr=zr,Hr=Er,Nr=Rr,Wr=/^\[object .+?Constructor\]$/,Vr=Function.prototype,Yr=Object.prototype,Ur=Vr.toString,qr=Yr.hasOwnProperty,Kr=RegExp("^"+Ur.call(qr).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Zr=function(e,t){return null==e?void 0:e[t]},Gr=function(e){return!(!Hr(e)||Pr(e))&&(Lr(e)?Kr:Wr).test(Nr(e))},Qr=Zr;var Xr=function(e,t){var r=Qr(e,t);return Gr(r)?r:void 0},Jr=Xr(Object,"create"),en=Jr;var tn=function(){this.__data__=en?en(null):{},this.size=0};var rn=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},nn=Jr,on=Object.prototype.hasOwnProperty;var an=function(e){var t=this.__data__;if(nn){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return on.call(t,e)?t[e]:void 0},sn=Jr,ln=Object.prototype.hasOwnProperty;var cn=function(e){var t=this.__data__;return sn?void 0!==t[e]:ln.call(t,e)},dn=Jr;var un=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=dn&&void 0===t?"__lodash_hash_undefined__":t,this},hn=tn,fn=rn,pn=an,gn=cn,mn=un;function bn(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}bn.prototype.clear=hn,bn.prototype.delete=fn,bn.prototype.get=pn,bn.prototype.has=gn,bn.prototype.set=mn;var vn=bn;var yn=function(){this.__data__=[],this.size=0};var xn=function(e,t){return e===t||e!=e&&t!=t},wn=xn;var $n=function(e,t){for(var r=e.length;r--;)if(wn(e[r][0],t))return r;return-1},Cn=$n,Sn=Array.prototype.splice;var kn=function(e){var t=this.__data__,r=Cn(t,e);return!(r<0)&&(r==t.length-1?t.pop():Sn.call(t,r,1),--this.size,!0)},_n=$n;var Dn=function(e){var t=this.__data__,r=_n(t,e);return r<0?void 0:t[r][1]},Fn=$n;var En=function(e){return Fn(this.__data__,e)>-1},On=$n;var Tn=function(e,t){var r=this.__data__,n=On(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},In=yn,Mn=kn,An=Dn,Bn=En,zn=Tn;function jn(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}jn.prototype.clear=In,jn.prototype.delete=Mn,jn.prototype.get=An,jn.prototype.has=Bn,jn.prototype.set=zn;var Rn=jn,Ln=Xr(sr,"Map"),Pn=vn,Hn=Rn,Nn=Ln;var Wn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Vn=function(e,t){var r=e.__data__;return Wn(t)?r["string"==typeof t?"string":"hash"]:r.map},Yn=Vn;var Un=function(e){var t=Yn(this,e).delete(e);return this.size-=t?1:0,t},qn=Vn;var Kn=function(e){return qn(this,e).get(e)},Zn=Vn;var Gn=function(e){return Zn(this,e).has(e)},Qn=Vn;var Xn=function(e,t){var r=Qn(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Jn=function(){this.size=0,this.__data__={hash:new Pn,map:new(Nn||Hn),string:new Pn}},eo=Un,to=Kn,ro=Gn,no=Xn;function oo(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}oo.prototype.clear=Jn,oo.prototype.delete=eo,oo.prototype.get=to,oo.prototype.has=ro,oo.prototype.set=no;var io=oo,ao=io;function so(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(so.Cache||ao),r}so.Cache=ao;var lo=so;var co=function(e){var t=lo(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},uo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ho=/\\(\\)?/g,fo=co((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(uo,(function(e,r,n,o){t.push(n?o.replace(ho,"$1"):r||e)})),t}));var po=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},go=nr,mo=Cr,bo=lr?lr.prototype:void 0,vo=bo?bo.toString:void 0;var yo=function e(t){if("string"==typeof t)return t;if(go(t))return po(t,e)+"";if(mo(t))return vo?vo.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},xo=yo;var wo=nr,$o=Fr,Co=fo,So=function(e){return null==e?"":xo(e)};var ko=function(e,t){return wo(e)?e:$o(e,t)?[e]:Co(So(e))},_o=Cr;var Do=function(e){if("string"==typeof e||_o(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Fo=ko,Eo=Do;var Oo=function(e,t){for(var r=0,n=(t=Fo(t,e)).length;null!=e&&r<n;)e=e[Eo(t[r++])];return r&&r==n?e:void 0},To=Oo;var Io=function(e,t,r){var n=null==e?void 0:To(e,t);return void 0===n?r:n},Mo=Ee(Io);const Ao=(e,t,r)=>Mo(r,t)||Mo(e,t),Bo=(e,t)=>{const r=t||e.defaultValue;return Mo(e.collections,r)},zo={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},jo=e=>t=>{var r;const n=t.theme,o=Bo(zo,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Ao(o,e,n.overrides.border)}px`:`${o[e]}px`},Ro={"width-005":jo("width-005"),"width-010":jo("width-010"),"width-020":jo("width-020"),"width-040":jo("width-040"),solid:(Lo="solid",e=>{var t;const r=e.theme,n=Bo(zo,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Ao(n,Lo,r.overrides.border):n[Lo];return"function"==typeof o?o(e):o})};var Lo;const Po={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ho={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},No={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Wo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Vo={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Yo={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Uo={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},qo={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ko={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Zo={collections:{lifesg:No,bookingsg:Po,rbs:Uo,mylegacy:Wo,ccube:Ho,oneservice:Vo,pa:Yo,a11yplayground:qo,supportgowhere:Ko},defaultValue:"lifesg"},Go={collections:{lifesg:No,bookingsg:Po,rbs:Uo,mylegacy:Wo,ccube:Ho,oneservice:Vo,pa:Yo,a11yplayground:qo,supportgowhere:Ko},defaultValue:"lifesg"},Qo=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Bo(o?Go:Zo,null==n?void 0:n.colourScheme),a=o?"primitiveColourDark":"primitiveColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a];return s?Ao(i,e,s):i[e]},Xo={"brand-10":Qo("brand-10"),"brand-20":Qo("brand-20"),"brand-30":Qo("brand-30"),"brand-40":Qo("brand-40"),"brand-50":Qo("brand-50"),"brand-60":Qo("brand-60"),"brand-70":Qo("brand-70"),"brand-80":Qo("brand-80"),"brand-90":Qo("brand-90"),"brand-95":Qo("brand-95"),"brand-100":Qo("brand-100"),"primary-10":Qo("primary-10"),"primary-20":Qo("primary-20"),"primary-30":Qo("primary-30"),"primary-40":Qo("primary-40"),"primary-50":Qo("primary-50"),"primary-60":Qo("primary-60"),"primary-70":Qo("primary-70"),"primary-80":Qo("primary-80"),"primary-90":Qo("primary-90"),"primary-95":Qo("primary-95"),"primary-100":Qo("primary-100"),"secondary-10":Qo("secondary-10"),"secondary-20":Qo("secondary-20"),"secondary-30":Qo("secondary-30"),"secondary-40":Qo("secondary-40"),"secondary-50":Qo("secondary-50"),"secondary-60":Qo("secondary-60"),"secondary-70":Qo("secondary-70"),"secondary-80":Qo("secondary-80"),"secondary-90":Qo("secondary-90"),"secondary-95":Qo("secondary-95"),"secondary-100":Qo("secondary-100"),"neutral-10":Qo("neutral-10"),"neutral-20":Qo("neutral-20"),"neutral-30":Qo("neutral-30"),"neutral-40":Qo("neutral-40"),"neutral-50":Qo("neutral-50"),"neutral-60":Qo("neutral-60"),"neutral-70":Qo("neutral-70"),"neutral-80":Qo("neutral-80"),"neutral-90":Qo("neutral-90"),"neutral-95":Qo("neutral-95"),"neutral-100":Qo("neutral-100"),"success-10":Qo("success-10"),"success-20":Qo("success-20"),"success-30":Qo("success-30"),"success-40":Qo("success-40"),"success-50":Qo("success-50"),"success-60":Qo("success-60"),"success-70":Qo("success-70"),"success-80":Qo("success-80"),"success-90":Qo("success-90"),"success-95":Qo("success-95"),"success-100":Qo("success-100"),"warning-10":Qo("warning-10"),"warning-20":Qo("warning-20"),"warning-30":Qo("warning-30"),"warning-40":Qo("warning-40"),"warning-50":Qo("warning-50"),"warning-60":Qo("warning-60"),"warning-70":Qo("warning-70"),"warning-80":Qo("warning-80"),"warning-90":Qo("warning-90"),"warning-95":Qo("warning-95"),"warning-100":Qo("warning-100"),"error-10":Qo("error-10"),"error-20":Qo("error-20"),"error-30":Qo("error-30"),"error-40":Qo("error-40"),"error-50":Qo("error-50"),"error-60":Qo("error-60"),"error-70":Qo("error-70"),"error-80":Qo("error-80"),"error-90":Qo("error-90"),"error-95":Qo("error-95"),"error-100":Qo("error-100"),"info-10":Qo("info-10"),"info-20":Qo("info-20"),"info-30":Qo("info-30"),"info-40":Qo("info-40"),"info-50":Qo("info-50"),"info-60":Qo("info-60"),"info-70":Qo("info-70"),"info-80":Qo("info-80"),"info-90":Qo("info-90"),"info-95":Qo("info-95"),"info-100":Qo("info-100"),white:Qo("white"),black:Qo("black"),"primary-inverse":Qo("primary-inverse")},Jo={text:Qo("neutral-20"),"text-subtle":Qo("neutral-30"),"text-subtler":Qo("neutral-50"),"text-subtlest":Qo("neutral-60"),"text-primary":Qo("primary-50"),"text-hover":Qo("primary-40"),"text-selected":Qo("primary-50"),"text-selected-hover":Qo("primary-40"),"text-disabled":Qo("neutral-50"),"text-disabled-subtle":Qo("neutral-60"),"text-disabled-subtlest":Qo("neutral-80"),"text-selected-disabled":Qo("neutral-20"),"text-success":Qo("success-40"),"text-warning":Qo("warning-40"),"text-error":Qo("error-40"),"text-info":Qo("info-40"),"text-inverse":Qo("white"),icon:Qo("neutral-50"),"icon-subtle":Qo("neutral-60"),"icon-strongest":Qo("neutral-20"),"icon-primary":Qo("primary-50"),"icon-primary-subtle":Qo("primary-60"),"icon-primary-subtlest":Qo("primary-70"),"icon-hover":Qo("primary-40"),"icon-selected":Qo("primary-50"),"icon-selected-hover":Qo("primary-40"),"icon-disabled":Qo("neutral-50"),"icon-disabled-subtle":Qo("neutral-60"),"icon-selected-disabled":Qo("neutral-60"),"icon-success":Qo("success-50"),"icon-warning":Qo("warning-60"),"icon-error":Qo("error-50"),"icon-error-strong":Qo("error-40"),"icon-info":Qo("info-50"),"icon-inverse":Qo("white"),"icon-primary-inverse":Qo("primary-inverse"),border:Qo("neutral-90"),"border-strong":Qo("neutral-70"),"border-stronger":Qo("neutral-50"),"border-primary":Qo("primary-50"),"border-primary-subtle":Qo("primary-60"),"border-hover":Qo("primary-90"),"border-hover-strong":Qo("primary-60"),"border-selected":Qo("primary-50"),"border-selected-subtle":Qo("primary-70"),"border-selected-subtlest":Qo("primary-90"),"border-selected-hover":Qo("primary-40"),"border-focus":Qo("primary-60"),"border-focus-strong":Qo("primary-50"),"border-disabled":Qo("neutral-90"),"border-selected-disabled":Qo("neutral-70"),"border-success":Qo("success-60"),"border-warning":Qo("warning-60"),"border-error":Qo("error-60"),"border-error-focus":Qo("error-60"),"border-error-focus-strong":Qo("error-40"),"border-error-strong":Qo("error-40"),"border-info":Qo("info-60"),bg:Qo("white"),"bg-strong":Qo("neutral-100"),"bg-stronger":Qo("neutral-95"),"bg-strongest":Qo("neutral-90"),"bg-hover":Qo("primary-95"),"bg-hover-strong":Qo("primary-90"),"bg-hover-subtle":Qo("primary-100"),"bg-hover-neutral":Qo("neutral-100"),"bg-hover-neutral-strong":Qo("neutral-90"),"bg-selected":Qo("primary-95"),"bg-selected-hover":Qo("primary-90"),"bg-selected-strong":Qo("primary-90"),"bg-selected-stronger":Qo("primary-70"),"bg-selected-strongest":Qo("primary-50"),"bg-selected-strongest-hover":Qo("primary-40"),"bg-disabled":Qo("neutral-95"),"bg-selected-disabled":Qo("neutral-95"),"bg-selected-stronger-disabled":Qo("neutral-70"),"bg-success":Qo("success-100"),"bg-success-hover":Qo("success-95"),"bg-success-strong":Qo("success-50"),"bg-success-strong-hover":Qo("success-40"),"bg-warning":Qo("warning-100"),"bg-warning-hover":Qo("warning-95"),"bg-warning-strong":Qo("warning-50"),"bg-warning-strong-hover":Qo("warning-40"),"bg-info":Qo("info-100"),"bg-info-hover":Qo("info-95"),"bg-info-strong":Qo("info-50"),"bg-info-strong-hover":Qo("info-40"),"bg-error":Qo("error-100"),"bg-error-hover":Qo("error-95"),"bg-error-strong":Qo("error-50"),"bg-error-strong-hover":Qo("error-40"),"bg-inverse":Qo("neutral-20"),"bg-inverse-subtle":Qo("neutral-30"),"bg-inverse-subtler":Qo("neutral-50"),"bg-inverse-subtlest":Qo("neutral-60"),"bg-inverse-hover":Qo("neutral-40"),"bg-primary":Qo("primary-50"),"bg-primary-subtle":Qo("primary-60"),"bg-primary-subtler":Qo("primary-95"),"bg-primary-subtlest":Qo("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Qo("primary-40"),"bg-primary-subtlest-hover":Qo("primary-90"),"bg-primary-subtlest-selected":Qo("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Qo("primary-50"),"hyperlink-hover":Qo("primary-40"),"hyperlink-visited":Qo("primary-40"),"hyperlink-inverse":Qo("primary-inverse"),"focus-ring":Qo("black"),"focus-ring-inverse":Qo("white")},ei={text:Qo("neutral-100"),"text-subtle":Qo("neutral-80"),"text-subtler":Qo("neutral-60"),"text-subtlest":Qo("neutral-50"),"text-primary":Qo("primary-60"),"text-hover":Qo("primary-70"),"text-selected":Qo("primary-60"),"text-selected-hover":Qo("primary-70"),"text-disabled":Qo("neutral-60"),"text-disabled-subtle":Qo("neutral-50"),"text-disabled-subtlest":Qo("neutral-30"),"text-selected-disabled":Qo("neutral-90"),"text-success":Qo("success-70"),"text-warning":Qo("warning-70"),"text-error":Qo("error-70"),"text-info":Qo("info-70"),"text-inverse":Qo("black"),icon:Qo("neutral-60"),"icon-subtle":Qo("neutral-50"),"icon-strongest":Qo("neutral-90"),"icon-primary":Qo("primary-60"),"icon-primary-subtle":Qo("primary-50"),"icon-primary-subtlest":Qo("primary-40"),"icon-hover":Qo("primary-70"),"icon-selected":Qo("primary-60"),"icon-selected-hover":Qo("primary-70"),"icon-disabled":Qo("neutral-60"),"icon-disabled-subtle":Qo("neutral-50"),"icon-selected-disabled":Qo("neutral-50"),"icon-success":Qo("success-60"),"icon-warning":Qo("warning-50"),"icon-error":Qo("error-60"),"icon-error-strong":Qo("error-70"),"icon-info":Qo("info-60"),"icon-inverse":Qo("black"),"icon-primary-inverse":Qo("primary-inverse"),border:Qo("neutral-20"),"border-strong":Qo("neutral-40"),"border-stronger":Qo("neutral-60"),"border-primary":Qo("primary-60"),"border-primary-subtle":Qo("primary-50"),"border-hover":Qo("primary-20"),"border-hover-strong":Qo("primary-50"),"border-selected":Qo("primary-60"),"border-selected-subtle":Qo("primary-40"),"border-selected-subtlest":Qo("primary-20"),"border-selected-hover":Qo("primary-70"),"border-focus":Qo("primary-50"),"border-focus-strong":Qo("primary-60"),"border-disabled":Qo("neutral-20"),"border-selected-disabled":Qo("neutral-40"),"border-success":Qo("success-50"),"border-warning":Qo("warning-50"),"border-error":Qo("error-50"),"border-error-focus":Qo("error-50"),"border-error-focus-strong":Qo("error-70"),"border-error-strong":Qo("error-70"),"border-info":Qo("info-50"),bg:Qo("black"),"bg-strong":Qo("neutral-10"),"bg-stronger":Qo("neutral-20"),"bg-strongest":Qo("neutral-20"),"bg-hover":Qo("primary-20"),"bg-hover-strong":Qo("primary-20"),"bg-hover-subtle":Qo("primary-10"),"bg-hover-neutral":Qo("neutral-10"),"bg-hover-neutral-strong":Qo("neutral-20"),"bg-selected":Qo("primary-20"),"bg-selected-hover":Qo("primary-20"),"bg-selected-strong":Qo("primary-20"),"bg-selected-stronger":Qo("primary-40"),"bg-selected-strongest":Qo("primary-60"),"bg-selected-strongest-hover":Qo("primary-70"),"bg-disabled":Qo("neutral-20"),"bg-selected-disabled":Qo("neutral-20"),"bg-selected-stronger-disabled":Qo("neutral-40"),"bg-success":Qo("success-10"),"bg-success-hover":Qo("success-20"),"bg-success-strong":Qo("success-60"),"bg-success-strong-hover":Qo("success-70"),"bg-warning":Qo("warning-10"),"bg-warning-hover":Qo("warning-20"),"bg-warning-strong":Qo("warning-60"),"bg-warning-strong-hover":Qo("warning-70"),"bg-info":Qo("info-10"),"bg-info-hover":Qo("info-20"),"bg-info-strong":Qo("info-60"),"bg-info-strong-hover":Qo("info-70"),"bg-error":Qo("error-10"),"bg-error-hover":Qo("error-20"),"bg-error-strong":Qo("error-60"),"bg-error-strong-hover":Qo("error-70"),"bg-inverse":Qo("neutral-90"),"bg-inverse-subtle":Qo("neutral-80"),"bg-inverse-subtler":Qo("neutral-60"),"bg-inverse-subtlest":Qo("neutral-50"),"bg-inverse-hover":Qo("neutral-70"),"bg-primary":Qo("primary-60"),"bg-primary-subtle":Qo("primary-50"),"bg-primary-subtler":Qo("primary-20"),"bg-primary-subtlest":Qo("primary-10"),"bg-available":"#185339","bg-primary-hover":Qo("primary-70"),"bg-primary-subtlest-hover":Qo("primary-20"),"bg-primary-subtlest-selected":Qo("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Qo("primary-60"),"hyperlink-hover":Qo("primary-70"),"hyperlink-visited":Qo("primary-70"),"hyperlink-inverse":Qo("primary-inverse"),"focus-ring":Qo("primary-60"),"focus-ring-inverse":Qo("black")},ti={text:Qo("neutral-30"),"text-subtle":Qo("neutral-40"),"text-subtler":Qo("neutral-50"),"text-subtlest":Qo("neutral-70"),"text-primary":Qo("neutral-10"),"text-hover":Qo("neutral-70"),"text-selected":Qo("neutral-20"),"text-selected-hover":Qo("neutral-10"),"text-disabled":Qo("neutral-50"),"text-disabled-subtle":Qo("neutral-60"),"text-disabled-subtlest":Qo("neutral-80"),"text-selected-disabled":Qo("neutral-40"),"text-success":Qo("success-40"),"text-warning":Qo("warning-40"),"text-error":Qo("brand-30"),"text-info":Qo("neutral-40"),"text-inverse":Qo("neutral-100"),icon:Qo("neutral-40"),"icon-subtle":Qo("neutral-50"),"icon-strongest":Qo("neutral-10"),"icon-primary":Qo("neutral-10"),"icon-primary-subtle":Qo("neutral-30"),"icon-primary-subtlest":Qo("neutral-60"),"icon-hover":Qo("neutral-70"),"icon-selected":Qo("brand-20"),"icon-selected-hover":Qo("brand-10"),"icon-disabled":Qo("neutral-50"),"icon-disabled-subtle":Qo("neutral-60"),"icon-selected-disabled":Qo("neutral-40"),"icon-success":Qo("success-40"),"icon-warning":Qo("warning-60"),"icon-error":Qo("brand-30"),"icon-error-strong":Qo("brand-10"),"icon-info":Qo("neutral-40"),"icon-inverse":Qo("neutral-100"),"icon-primary-inverse":"#F9B371",border:Qo("neutral-90"),"border-strong":Qo("neutral-30"),"border-stronger":Qo("neutral-20"),"border-primary":Qo("neutral-40"),"border-primary-subtle":Qo("neutral-60"),"border-hover":Qo("neutral-80"),"border-hover-strong":Qo("neutral-10"),"border-selected":Qo("brand-20"),"border-selected-subtle":Qo("neutral-40"),"border-selected-subtlest":Qo("neutral-70"),"border-selected-hover":Qo("neutral-10"),"border-focus":Qo("neutral-20"),"border-focus-strong":Qo("neutral-10"),"border-disabled":Qo("neutral-90"),"border-selected-disabled":Qo("neutral-80"),"border-success":Qo("success-40"),"border-warning":Qo("warning-60"),"border-error":Qo("brand-30"),"border-error-focus":Qo("brand-20"),"border-error-focus-strong":Qo("brand-10"),"border-error-strong":Qo("brand-20"),"border-info":Qo("neutral-40"),bg:Qo("neutral-100"),"bg-strong":Qo("neutral-95"),"bg-stronger":Qo("neutral-90"),"bg-strongest":Qo("neutral-80"),"bg-hover":Qo("brand-90"),"bg-hover-strong":Qo("brand-80"),"bg-hover-subtle":Qo("neutral-90"),"bg-hover-neutral":Qo("neutral-90"),"bg-hover-neutral-strong":Qo("neutral-90"),"bg-selected":Qo("brand-100"),"bg-selected-hover":Qo("brand-30"),"bg-selected-strong":Qo("brand-50"),"bg-selected-stronger":Qo("brand-40"),"bg-selected-strongest":Qo("brand-20"),"bg-selected-strongest-hover":Qo("brand-10"),"bg-disabled":Qo("neutral-90"),"bg-selected-disabled":Qo("neutral-90"),"bg-selected-stronger-disabled":Qo("neutral-80"),"bg-success":Qo("success-100"),"bg-success-hover":Qo("success-95"),"bg-success-strong":Qo("success-50"),"bg-success-strong-hover":Qo("success-40"),"bg-warning":Qo("warning-100"),"bg-warning-hover":Qo("warning-95"),"bg-warning-strong":Qo("warning-50"),"bg-warning-strong-hover":Qo("warning-40"),"bg-info":Qo("neutral-95"),"bg-info-hover":Qo("info-95"),"bg-info-strong":Qo("info-50"),"bg-info-strong-hover":Qo("info-40"),"bg-error":Qo("brand-100"),"bg-error-hover":Qo("error-95"),"bg-error-strong":Qo("error-50"),"bg-error-strong-hover":Qo("error-40"),"bg-inverse":Qo("neutral-40"),"bg-inverse-subtle":Qo("neutral-60"),"bg-inverse-subtler":Qo("neutral-70"),"bg-inverse-subtlest":Qo("neutral-80"),"bg-inverse-hover":Qo("neutral-30"),"bg-primary":Qo("brand-20"),"bg-primary-subtle":Qo("brand-60"),"bg-primary-subtler":Qo("brand-80"),"bg-primary-subtlest":Qo("brand-100"),"bg-available":Qo("success-60"),"bg-primary-hover":Qo("brand-10"),"bg-primary-subtlest-hover":Qo("brand-80"),"bg-primary-subtlest-selected":Qo("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Qo("neutral-10"),"hyperlink-hover":Qo("neutral-40"),"hyperlink-visited":Qo("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Qo("black"),"focus-ring-inverse":Qo("white")},ri={text:Qo("neutral-20"),"text-subtle":Qo("neutral-30"),"text-subtler":Qo("neutral-50"),"text-subtlest":Qo("neutral-60"),"text-primary":Qo("primary-50"),"text-hover":Qo("primary-40"),"text-selected":Qo("primary-50"),"text-selected-hover":Qo("primary-40"),"text-disabled":Qo("neutral-50"),"text-disabled-subtle":Qo("neutral-60"),"text-disabled-subtlest":Qo("neutral-80"),"text-selected-disabled":Qo("neutral-20"),"text-success":Qo("success-40"),"text-warning":Qo("warning-40"),"text-error":Qo("error-40"),"text-info":Qo("info-40"),"text-inverse":Qo("white"),icon:Qo("neutral-50"),"icon-subtle":Qo("neutral-60"),"icon-strongest":Qo("neutral-20"),"icon-primary":Qo("primary-50"),"icon-primary-subtle":Qo("primary-60"),"icon-primary-subtlest":Qo("primary-70"),"icon-hover":Qo("primary-40"),"icon-selected":Qo("primary-50"),"icon-selected-hover":Qo("primary-40"),"icon-disabled":Qo("neutral-50"),"icon-disabled-subtle":Qo("neutral-60"),"icon-selected-disabled":Qo("neutral-60"),"icon-success":Qo("success-50"),"icon-warning":Qo("warning-60"),"icon-error":Qo("error-50"),"icon-error-strong":Qo("error-40"),"icon-info":Qo("info-50"),"icon-inverse":Qo("white"),"icon-primary-inverse":Qo("primary-inverse"),border:Qo("neutral-90"),"border-strong":Qo("neutral-70"),"border-stronger":Qo("neutral-50"),"border-primary":Qo("primary-50"),"border-primary-subtle":Qo("primary-60"),"border-hover":Qo("primary-90"),"border-hover-strong":Qo("primary-60"),"border-selected":Qo("primary-50"),"border-selected-subtle":Qo("primary-70"),"border-selected-subtlest":Qo("primary-90"),"border-selected-hover":Qo("primary-40"),"border-focus":Qo("primary-60"),"border-focus-strong":Qo("primary-50"),"border-disabled":Qo("neutral-90"),"border-selected-disabled":Qo("neutral-70"),"border-success":Qo("success-60"),"border-warning":Qo("warning-60"),"border-error":Qo("error-60"),"border-error-focus":Qo("error-60"),"border-error-focus-strong":Qo("error-40"),"border-error-strong":Qo("error-40"),"border-info":Qo("info-60"),bg:Qo("white"),"bg-strong":Qo("neutral-100"),"bg-stronger":Qo("neutral-95"),"bg-strongest":Qo("neutral-90"),"bg-hover":Qo("primary-95"),"bg-hover-strong":Qo("primary-90"),"bg-hover-subtle":Qo("primary-100"),"bg-hover-neutral":Qo("neutral-100"),"bg-hover-neutral-strong":Qo("neutral-90"),"bg-selected":Qo("primary-95"),"bg-selected-hover":Qo("primary-90"),"bg-selected-strong":Qo("primary-90"),"bg-selected-stronger":Qo("primary-70"),"bg-selected-strongest":Qo("primary-50"),"bg-selected-strongest-hover":Qo("primary-40"),"bg-disabled":Qo("neutral-95"),"bg-selected-disabled":Qo("neutral-95"),"bg-selected-stronger-disabled":Qo("neutral-70"),"bg-success":Qo("success-100"),"bg-success-hover":Qo("success-95"),"bg-success-strong":Qo("success-50"),"bg-success-strong-hover":Qo("success-40"),"bg-warning":Qo("warning-100"),"bg-warning-hover":Qo("warning-95"),"bg-warning-strong":Qo("warning-50"),"bg-warning-strong-hover":Qo("warning-40"),"bg-info":Qo("info-100"),"bg-info-hover":Qo("info-95"),"bg-info-strong":Qo("info-50"),"bg-info-strong-hover":Qo("info-40"),"bg-error":Qo("error-100"),"bg-error-hover":Qo("error-95"),"bg-error-strong":Qo("error-50"),"bg-error-strong-hover":Qo("error-40"),"bg-inverse":Qo("neutral-20"),"bg-inverse-subtle":Qo("neutral-30"),"bg-inverse-subtler":Qo("neutral-50"),"bg-inverse-subtlest":Qo("neutral-60"),"bg-inverse-hover":Qo("neutral-40"),"bg-primary":Qo("primary-50"),"bg-primary-subtle":Qo("primary-60"),"bg-primary-subtler":Qo("primary-95"),"bg-primary-subtlest":Qo("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Qo("primary-40"),"bg-primary-subtlest-hover":Qo("primary-90"),"bg-primary-subtlest-selected":Qo("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Qo("primary-50"),"hyperlink-hover":Qo("primary-40"),"hyperlink-visited":Qo("primary-40"),"hyperlink-inverse":Qo("primary-inverse"),"focus-ring":Qo("black"),"focus-ring-inverse":Qo("white")},ni={text:Qo("neutral-100"),"text-subtle":Qo("neutral-80"),"text-subtler":Qo("neutral-60"),"text-subtlest":Qo("neutral-50"),"text-primary":Qo("primary-60"),"text-hover":Qo("primary-70"),"text-selected":Qo("primary-60"),"text-selected-hover":Qo("primary-70"),"text-disabled":Qo("neutral-60"),"text-disabled-subtle":Qo("neutral-50"),"text-disabled-subtlest":Qo("neutral-30"),"text-selected-disabled":Qo("neutral-90"),"text-success":Qo("success-70"),"text-warning":Qo("warning-70"),"text-error":Qo("error-70"),"text-info":Qo("info-70"),"text-inverse":Qo("black"),icon:Qo("neutral-60"),"icon-subtle":Qo("neutral-50"),"icon-strongest":Qo("neutral-90"),"icon-primary":Qo("primary-60"),"icon-primary-subtle":Qo("primary-50"),"icon-primary-subtlest":Qo("primary-40"),"icon-hover":Qo("primary-70"),"icon-selected":Qo("primary-60"),"icon-selected-hover":Qo("primary-70"),"icon-disabled":Qo("neutral-60"),"icon-disabled-subtle":Qo("neutral-50"),"icon-selected-disabled":Qo("neutral-50"),"icon-success":Qo("success-60"),"icon-warning":Qo("warning-50"),"icon-error":Qo("error-60"),"icon-error-strong":Qo("error-70"),"icon-info":Qo("info-60"),"icon-inverse":Qo("black"),"icon-primary-inverse":Qo("primary-inverse"),border:Qo("neutral-20"),"border-strong":Qo("neutral-40"),"border-stronger":Qo("neutral-60"),"border-primary":Qo("primary-60"),"border-primary-subtle":Qo("primary-50"),"border-hover":Qo("primary-20"),"border-hover-strong":Qo("primary-50"),"border-selected":Qo("primary-60"),"border-selected-subtle":Qo("primary-40"),"border-selected-subtlest":Qo("primary-20"),"border-selected-hover":Qo("primary-70"),"border-focus":Qo("primary-50"),"border-focus-strong":Qo("primary-60"),"border-disabled":Qo("neutral-20"),"border-selected-disabled":Qo("neutral-40"),"border-success":Qo("success-50"),"border-warning":Qo("warning-50"),"border-error":Qo("error-50"),"border-error-focus":Qo("error-50"),"border-error-focus-strong":Qo("error-70"),"border-error-strong":Qo("error-70"),"border-info":Qo("info-50"),bg:Qo("black"),"bg-strong":Qo("neutral-10"),"bg-stronger":Qo("neutral-20"),"bg-strongest":Qo("neutral-20"),"bg-hover":Qo("primary-20"),"bg-hover-strong":Qo("primary-20"),"bg-hover-subtle":Qo("primary-10"),"bg-hover-neutral":Qo("neutral-10"),"bg-hover-neutral-strong":Qo("neutral-20"),"bg-selected":Qo("primary-20"),"bg-selected-hover":Qo("primary-20"),"bg-selected-strong":Qo("primary-20"),"bg-selected-stronger":Qo("primary-40"),"bg-selected-strongest":Qo("primary-60"),"bg-selected-strongest-hover":Qo("primary-70"),"bg-disabled":Qo("neutral-20"),"bg-selected-disabled":Qo("neutral-20"),"bg-selected-stronger-disabled":Qo("neutral-40"),"bg-success":Qo("success-10"),"bg-success-hover":Qo("success-20"),"bg-success-strong":Qo("success-60"),"bg-success-strong-hover":Qo("success-70"),"bg-warning":Qo("warning-10"),"bg-warning-hover":Qo("warning-20"),"bg-warning-strong":Qo("warning-60"),"bg-warning-strong-hover":Qo("warning-70"),"bg-info":Qo("info-10"),"bg-info-hover":Qo("info-20"),"bg-info-strong":Qo("info-60"),"bg-info-strong-hover":Qo("info-70"),"bg-error":Qo("error-10"),"bg-error-hover":Qo("error-20"),"bg-error-strong":Qo("error-60"),"bg-error-strong-hover":Qo("error-70"),"bg-inverse":Qo("neutral-90"),"bg-inverse-subtle":Qo("neutral-80"),"bg-inverse-subtler":Qo("neutral-60"),"bg-inverse-subtlest":Qo("neutral-50"),"bg-inverse-hover":Qo("neutral-70"),"bg-primary":Qo("primary-60"),"bg-primary-subtle":Qo("primary-50"),"bg-primary-subtler":Qo("primary-20"),"bg-primary-subtlest":Qo("primary-10"),"bg-available":"#185339","bg-primary-hover":Qo("primary-70"),"bg-primary-subtlest-hover":Qo("primary-20"),"bg-primary-subtlest-selected":Qo("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Qo("primary-60"),"hyperlink-hover":Qo("primary-70"),"hyperlink-visited":Qo("primary-70"),"hyperlink-inverse":Qo("primary-inverse"),"focus-ring":Qo("primary-60"),"focus-ring-inverse":Qo("black")},oi={collections:{lifesg:Jo,bookingsg:Jo,rbs:Jo,mylegacy:Jo,ccube:Jo,oneservice:Jo,pa:ti,a11yplayground:ri,supportgowhere:Jo},defaultValue:"lifesg"},ii={collections:{lifesg:ei,bookingsg:ei,rbs:ei,mylegacy:ei,ccube:ei,oneservice:ei,pa:ei,a11yplayground:ni,supportgowhere:ei},defaultValue:"lifesg"},ai=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Bo(o?ii:oi,null==n?void 0:n.colourScheme),a=o?"semanticColourDark":"semanticColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a],l=s?Ao(i,e,s):i[e];return"function"==typeof l?l(t):l},si={text:ai("text"),"text-subtle":ai("text-subtle"),"text-subtler":ai("text-subtler"),"text-subtlest":ai("text-subtlest"),"text-primary":ai("text-primary"),"text-hover":ai("text-hover"),"text-selected":ai("text-selected"),"text-selected-hover":ai("text-selected-hover"),"text-disabled":ai("text-disabled"),"text-disabled-subtle":ai("text-disabled-subtle"),"text-disabled-subtlest":ai("text-disabled-subtlest"),"text-selected-disabled":ai("text-selected-disabled"),"text-success":ai("text-success"),"text-warning":ai("text-warning"),"text-error":ai("text-error"),"text-info":ai("text-info"),"text-inverse":ai("text-inverse"),icon:ai("icon"),"icon-subtle":ai("icon-subtle"),"icon-strongest":ai("icon-strongest"),"icon-primary":ai("icon-primary"),"icon-primary-subtle":ai("icon-primary-subtle"),"icon-primary-subtlest":ai("icon-primary-subtlest"),"icon-hover":ai("icon-hover"),"icon-selected":ai("icon-selected"),"icon-selected-hover":ai("icon-selected-hover"),"icon-disabled":ai("icon-disabled"),"icon-disabled-subtle":ai("icon-disabled-subtle"),"icon-selected-disabled":ai("icon-selected-disabled"),"icon-success":ai("icon-success"),"icon-warning":ai("icon-warning"),"icon-error":ai("icon-error"),"icon-error-strong":ai("icon-error-strong"),"icon-info":ai("icon-info"),"icon-inverse":ai("icon-inverse"),"icon-primary-inverse":ai("icon-primary-inverse"),border:ai("border"),"border-strong":ai("border-strong"),"border-stronger":ai("border-stronger"),"border-primary":ai("border-primary"),"border-primary-subtle":ai("border-primary-subtle"),"border-hover":ai("border-hover"),"border-hover-strong":ai("border-hover-strong"),"border-selected":ai("border-selected"),"border-selected-subtle":ai("border-selected-subtle"),"border-selected-subtlest":ai("border-selected-subtlest"),"border-selected-hover":ai("border-selected-hover"),"border-focus":ai("border-focus"),"border-focus-strong":ai("border-focus-strong"),"border-disabled":ai("border-disabled"),"border-selected-disabled":ai("border-selected-disabled"),"border-success":ai("border-success"),"border-warning":ai("border-warning"),"border-error":ai("border-error"),"border-error-focus":ai("border-error-focus"),"border-error-focus-strong":ai("border-error-focus-strong"),"border-error-strong":ai("border-error-strong"),"border-info":ai("border-info"),bg:ai("bg"),"bg-strong":ai("bg-strong"),"bg-stronger":ai("bg-stronger"),"bg-strongest":ai("bg-strongest"),"bg-hover":ai("bg-hover"),"bg-hover-strong":ai("bg-hover-strong"),"bg-hover-subtle":ai("bg-hover-subtle"),"bg-hover-neutral":ai("bg-hover-neutral"),"bg-hover-neutral-strong":ai("bg-hover-neutral-strong"),"bg-selected":ai("bg-selected"),"bg-selected-hover":ai("bg-selected-hover"),"bg-selected-strong":ai("bg-selected-strong"),"bg-selected-stronger":ai("bg-selected-stronger"),"bg-selected-strongest":ai("bg-selected-strongest"),"bg-selected-strongest-hover":ai("bg-selected-strongest-hover"),"bg-disabled":ai("bg-disabled"),"bg-selected-disabled":ai("bg-selected-disabled"),"bg-selected-stronger-disabled":ai("bg-selected-stronger-disabled"),"bg-success":ai("bg-success"),"bg-success-hover":ai("bg-success-hover"),"bg-success-strong":ai("bg-success-strong"),"bg-success-strong-hover":ai("bg-success-strong-hover"),"bg-warning":ai("bg-warning"),"bg-warning-hover":ai("bg-warning-hover"),"bg-warning-strong":ai("bg-warning-strong"),"bg-warning-strong-hover":ai("bg-warning-strong-hover"),"bg-info":ai("bg-info"),"bg-info-hover":ai("bg-info-hover"),"bg-info-strong":ai("bg-info-strong"),"bg-info-strong-hover":ai("bg-info-strong-hover"),"bg-error":ai("bg-error"),"bg-error-hover":ai("bg-error-hover"),"bg-error-strong":ai("bg-error-strong"),"bg-error-strong-hover":ai("bg-error-strong-hover"),"bg-inverse":ai("bg-inverse"),"bg-inverse-subtle":ai("bg-inverse-subtle"),"bg-inverse-subtler":ai("bg-inverse-subtler"),"bg-inverse-subtlest":ai("bg-inverse-subtlest"),"bg-inverse-hover":ai("bg-inverse-hover"),"bg-primary":ai("bg-primary"),"bg-primary-subtle":ai("bg-primary-subtle"),"bg-primary-subtler":ai("bg-primary-subtler"),"bg-primary-subtlest":ai("bg-primary-subtlest"),"bg-available":ai("bg-available"),"bg-primary-hover":ai("bg-primary-hover"),"bg-primary-subtlest-hover":ai("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":ai("bg-primary-subtlest-selected"),"overlay-strong":ai("overlay-strong"),"overlay-subtle":ai("overlay-subtle"),hyperlink:ai("hyperlink"),"hyperlink-hover":ai("hyperlink-hover"),"hyperlink-visited":ai("hyperlink-visited"),"hyperlink-inverse":ai("hyperlink-inverse"),"focus-ring":ai("focus-ring"),"focus-ring-inverse":ai("focus-ring-inverse")},li={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Ro["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,d=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:si.border(t),u=Ro.solid;return k`
            border: ${l} ${u} ${d};
            border-radius: ${c};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Ro["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,d=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:si.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${d}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return k`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${c};
        `}}},defaultValue:"default"},ci=e=>1===e.length&&"theme"in e[0],di=e=>(...t)=>r=>{const n=ci(t)?[]:t,o=ci(t)?t[0]:r,i=o.theme;return(0,Bo(li,null==i?void 0:i.borderScheme)[e])(...n)(o)},ui={solid:di("solid"),"dashed-default":di("dashed-default")},hi={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},fi=e=>t=>{var r;const n=t.theme,o=Bo(hi,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Ao(o,e,n.overrides.breakpoint):o[e],i},pi={"xxs-min":fi("xxs-min"),"xxs-max":fi("xxs-max"),"xs-min":fi("xs-min"),"xs-max":fi("xs-max"),"sm-min":fi("sm-min"),"sm-max":fi("sm-max"),"md-min":fi("md-min"),"md-max":fi("md-max"),"lg-min":fi("lg-min"),"lg-max":fi("lg-max"),"xl-min":fi("xl-min"),"xl-max":fi("xl-max"),"xxl-min":fi("xxl-min"),"xxs-column":fi("xxs-column"),"xs-column":fi("xs-column"),"sm-column":fi("sm-column"),"md-column":fi("md-column"),"lg-column":fi("lg-column"),"xl-column":fi("xl-column"),"xxl-column":fi("xxl-column"),"xxs-gutter":fi("xxs-gutter"),"xs-gutter":fi("xs-gutter"),"sm-gutter":fi("sm-gutter"),"md-gutter":fi("md-gutter"),"lg-gutter":fi("lg-gutter"),"xl-gutter":fi("xl-gutter"),"xxl-gutter":fi("xxl-gutter"),"xxs-margin":fi("xxs-margin"),"xs-margin":fi("xs-margin"),"sm-margin":fi("sm-margin"),"md-margin":fi("md-margin"),"lg-margin":fi("lg-margin"),"xl-margin":fi("xl-margin"),"xxl-margin":fi("xxl-margin")},gi=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=pi["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),mi={MaxWidth:gi("max-width"),MinWidth:gi("min-width")},bi={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},vi=e=>t=>{var r;const n=t.theme,o=Bo(bi,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Ao(o,e,n.overrides.fontSpec):o[e]},yi={"heading-size-xxl":vi("heading-size-xxl"),"heading-size-xl":vi("heading-size-xl"),"heading-size-lg":vi("heading-size-lg"),"heading-size-md":vi("heading-size-md"),"heading-size-sm":vi("heading-size-sm"),"heading-size-xs":vi("heading-size-xs"),"heading-lh-xxl":vi("heading-lh-xxl"),"heading-lh-xl":vi("heading-lh-xl"),"heading-lh-lg":vi("heading-lh-lg"),"heading-lh-md":vi("heading-lh-md"),"heading-lh-sm":vi("heading-lh-sm"),"heading-lh-xs":vi("heading-lh-xs"),"heading-ls-xxl":vi("heading-ls-xxl"),"heading-ls-xl":vi("heading-ls-xl"),"heading-ls-lg":vi("heading-ls-lg"),"heading-ls-md":vi("heading-ls-md"),"heading-ls-sm":vi("heading-ls-sm"),"heading-ls-xs":vi("heading-ls-xs"),"weight-light":vi("weight-light"),"weight-regular":vi("weight-regular"),"weight-semibold":vi("weight-semibold"),"weight-bold":vi("weight-bold"),"font-family":vi("font-family"),"body-size-baseline":vi("body-size-baseline"),"body-size-md":vi("body-size-md"),"body-size-sm":vi("body-size-sm"),"body-size-xs":vi("body-size-xs"),"body-lh-baseline":vi("body-lh-baseline"),"body-lh-md":vi("body-lh-md"),"body-lh-sm":vi("body-lh-sm"),"body-lh-xs":vi("body-lh-xs"),"body-ls-baseline":vi("body-ls-baseline"),"body-ls-md":vi("body-ls-md"),"body-ls-sm":vi("body-ls-sm"),"body-ls-xs":vi("body-ls-xs"),"form-label-size":vi("form-label-size"),"form-description-size":vi("form-description-size"),"form-label-lh":vi("form-label-lh"),"form-description-lh":vi("form-description-lh"),"form-label-ls":vi("form-label-ls"),"form-description-ls":vi("form-description-ls")},xi=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return k`
        font-family: ${vi("font-family")};
        font-size: ${vi(e)};
        font-weight: ${vi(t)};
        line-height: ${vi(r)};
        letter-spacing: ${vi(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},wi=(e={})=>({"heading-xxl-light":xi("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":xi("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":xi("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":xi("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":xi("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":xi("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":xi("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":xi("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":xi("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":xi("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":xi("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":xi("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":xi("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":xi("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":xi("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":xi("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":xi("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":xi("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":xi("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":xi("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":xi("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":xi("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":xi("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":xi("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":xi("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":xi("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":xi("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":xi("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":xi("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":xi("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":xi("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":xi("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":xi("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":xi("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":xi("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":xi("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":xi("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":xi("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":xi("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":xi("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":xi("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":xi("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),$i=wi({disableLigatures:!0}),Ci={collections:{default:wi(),bookingsg:$i,pa:wi({disableLigatures:!0}),a11yplayground:wi({disableLigatures:!0}),supportgowhere:wi({disableLigatures:!0})},defaultValue:"default"},Si=e=>t=>{var r;const n=t.theme,o=Bo(Ci,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Ao(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},ki={"heading-xxl-light":Si("heading-xxl-light"),"heading-xxl-regular":Si("heading-xxl-regular"),"heading-xxl-semibold":Si("heading-xxl-semibold"),"heading-xxl-bold":Si("heading-xxl-bold"),"heading-xl-light":Si("heading-xl-light"),"heading-xl-regular":Si("heading-xl-regular"),"heading-xl-semibold":Si("heading-xl-semibold"),"heading-xl-bold":Si("heading-xl-bold"),"heading-lg-light":Si("heading-lg-light"),"heading-lg-regular":Si("heading-lg-regular"),"heading-lg-semibold":Si("heading-lg-semibold"),"heading-lg-bold":Si("heading-lg-bold"),"heading-md-light":Si("heading-md-light"),"heading-md-regular":Si("heading-md-regular"),"heading-md-semibold":Si("heading-md-semibold"),"heading-md-bold":Si("heading-md-bold"),"heading-sm-light":Si("heading-sm-light"),"heading-sm-regular":Si("heading-sm-regular"),"heading-sm-semibold":Si("heading-sm-semibold"),"heading-sm-bold":Si("heading-sm-bold"),"heading-xs-light":Si("heading-xs-light"),"heading-xs-regular":Si("heading-xs-regular"),"heading-xs-semibold":Si("heading-xs-semibold"),"heading-xs-bold":Si("heading-xs-bold"),"body-baseline-light":Si("body-baseline-light"),"body-baseline-regular":Si("body-baseline-regular"),"body-baseline-semibold":Si("body-baseline-semibold"),"body-baseline-bold":Si("body-baseline-bold"),"body-md-light":Si("body-md-light"),"body-md-regular":Si("body-md-regular"),"body-md-semibold":Si("body-md-semibold"),"body-md-bold":Si("body-md-bold"),"body-sm-light":Si("body-sm-light"),"body-sm-regular":Si("body-sm-regular"),"body-sm-semibold":Si("body-sm-semibold"),"body-sm-bold":Si("body-sm-bold"),"body-xs-light":Si("body-xs-light"),"body-xs-regular":Si("body-xs-regular"),"body-xs-semibold":Si("body-xs-semibold"),"body-xs-bold":Si("body-xs-bold"),"form-label":Si("form-label"),"form-description":Si("form-description")},_i={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Di=e=>t=>{var r;const n=t.theme,o=Bo(_i,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Ao(o,e,n.overrides.motion):o[e]},Fi={"duration-150":Di("duration-150"),"duration-250":Di("duration-250"),"duration-350":Di("duration-350"),"duration-500":Di("duration-500"),"duration-800":Di("duration-800"),"duration-1000":Di("duration-1000"),"ease-default":Di("ease-default"),"ease-standard":Di("ease-standard"),"ease-entrance":Di("ease-entrance"),"ease-exit":Di("ease-exit")},Ei={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Oi=e=>t=>{var r;const n=t.theme,o=Bo(Ei,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Ao(o,e,n.overrides.radius)}px`:`${o[e]}px`},Ti={none:Oi("none"),xs:Oi("xs"),sm:Oi("sm"),md:Oi("md"),lg:Oi("lg"),full:Oi("full")},Ii={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Mi=e=>t=>{var r;const n=t.theme,o=Bo(Ii,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Ao(o,e,n.overrides.spacing)}px`:`${o[e]}px`},Ai={"spacing-0":Mi("spacing-0"),"spacing-4":Mi("spacing-4"),"spacing-8":Mi("spacing-8"),"spacing-12":Mi("spacing-12"),"spacing-16":Mi("spacing-16"),"spacing-20":Mi("spacing-20"),"spacing-24":Mi("spacing-24"),"spacing-32":Mi("spacing-32"),"spacing-40":Mi("spacing-40"),"spacing-48":Mi("spacing-48"),"spacing-64":Mi("spacing-64"),"spacing-72":Mi("spacing-72"),"layout-xs":Mi("layout-xs"),"layout-sm":Mi("layout-sm"),"layout-md":Mi("layout-md"),"layout-lg":Mi("layout-lg"),"layout-xl":Mi("layout-xl"),"layout-xxl":Mi("layout-xxl"),"layout-xxxl":Mi("layout-xxxl")},Bi=(e,t)=>Object.assign(Object.assign({},e),{colourMode:t}),zi=Object.assign(Object.assign({},si),{Primitive:Xo}),ji=Object.assign(Object.assign({},ki),{Spec:yi}),Ri=Fi,Li=Object.assign(Object.assign({},Ro),{Util:ui}),Pi=Ai,Hi=Ti,Ni=pi,Wi=mi,Vi={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},Yi={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},Ui={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},qi={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},Ki={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Zi={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Gi={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},Qi={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},Xi={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"};Object.assign(Object.assign({},Vi),{light:Bi(Vi,"light"),dark:Bi(Vi,"dark")}),Object.assign(Object.assign({},Yi),{light:Bi(Yi,"light"),dark:Bi(Yi,"dark")}),Object.assign(Object.assign({},Ui),{light:Bi(Ui,"light"),dark:Bi(Ui,"dark")}),Object.assign(Object.assign({},qi),{light:Bi(qi,"light"),dark:Bi(qi,"dark")}),Object.assign(Object.assign({},Ki),{light:Bi(Ki,"light"),dark:Bi(Ki,"dark")}),Object.assign(Object.assign({},Zi),{light:Bi(Zi,"light"),dark:Bi(Zi,"dark")}),Object.assign(Object.assign({},Gi),{light:Bi(Gi,"light"),dark:Bi(Gi,"dark")}),Object.assign(Object.assign({},Qi),{light:Bi(Qi,"light"),dark:Bi(Qi,"dark")}),Object.assign(Object.assign({},Xi),{light:Bi(Xi,"light"),dark:Bi(Xi,"dark")});const Ji=S.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return k`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,ea=S.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?zi["overlay-subtle"]:zi["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=k`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=k`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=k`
                transition: none;
            `),t}}
`;var ta;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(ta||(ta={}));const ra=()=>{const[e,t]=a(void 0),r=F();return u((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(ta.Change,e),r.events.emit(ta.Ready),()=>r.events.off(ta.Change,e)}),[r]),e},na=({show:t=!1,rootId:r,onOverlayClick:n,children:s,backgroundOpacity:l,backgroundBlur:c=!0,disableTransition:d=!1,enableOverlayClick:h=!1,zIndex:f,id:p})=>{const[g,m]=a(null),[b,v]=a(),[y]=a((()=>et.generate())),x=O(),w=i(),$=i(null),C=s&&o.cloneElement(s,{ref:$}),S=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root",k=null!=f?f:b?99999:99998;(e=>{const t=F();u((()=>{if(!t)return;const r={zIndex:e};t.events.emit(ta.Change,r)}),[t,e]),u((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit(ta.Change,r)};return null==t||t.events.on(ta.Ready,r),()=>null==t?void 0:t.events.off(ta.Ready,r)}),[t,e])})(k),u((()=>(I(),m(D()),()=>{z(),A().length<1&&M("remove")})),[]),u((()=>{if(t){const e=E();_(e),B();const t=setTimeout((()=>{M("add")}),200);return()=>clearTimeout(t)}{z();const e=setTimeout((()=>{A().length<1&&M("remove")}),200);return()=>clearTimeout(e)}}),[t]);const _=e=>{w.current=e,v(e)},D=()=>document&&r?document.getElementById(r):document?document.body:null,E=()=>A().length>0,I=()=>{if(!document.getElementById(ia)){const e=document.createElement("style");e.id=ia;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${aa} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${aa}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},M=e=>{const t=document.body.classList.contains(aa);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(aa):document.body.classList.add(aa)},A=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},B=()=>{const e=A();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},z=()=>{const e=A();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},j=e=>{var t;const r=null===(t=$.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&h&&(e.preventDefault(),n())};return g?U.createPortal(e(Ji,{id:S,"data-testid":S,$show:t,$zIndex:k,children:s&&e(T,{id:x,children:e(ea,{"data-testid":"overlay-wrapper",$show:t,$stacked:b,$backgroundBlur:c,$disableTransition:d,onClick:j,children:C})})}),g):null},oa=t=>e(E,{children:e(na,Object.assign({},t))}),ia="lifesg-ds-overlay-stylesheet",aa="lifesg-ds-overlay-open",sa=S.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${Wi.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,la=t=>{var{id:r="modal",show:n,animationFrom:o="bottom",children:i,enableOverlayClick:s=!0,rootComponentId:l,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:h=!0}=t,f=_e(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[p,g]=a(),[m,b]=a();u((()=>window.visualViewport?(y(),window.visualViewport.addEventListener("resize",y),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",y)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),u((()=>{var e,t;n&&h&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]);const v=()=>{const e=.01*window.innerHeight;g(e)},y=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;g(e),b(window.visualViewport.offsetTop)}};return e(oa,{"data-testid":`${r}-overlay`,show:n,enableOverlayClick:s,onOverlayClick:d,id:r,rootId:l,zIndex:c,children:e(sa,Object.assign({show:n,animationFrom:o,"data-testid":r,verticalHeight:p,offsetTop:m},f,{children:i}))})},ca=e=>k`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,da=(e,t,r=!1)=>k`
        ${ji[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,ua=e=>{if(e)return k`
            ${ca(e)}
        `},ha=(e,t)=>k`
    ${da(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,r)=>t?k`
            display: block;
            ${ua(r)}
        `:e?k`
            display: inline;
        `:k`
            display: block;
            ${ua(r)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${zi.text};
`;var fa;!function(r){const n=(e,t,r)=>{const n=S(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>ha(t,e)}
        `;return n.displayName=`Typography.${r}`,n};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const o=(e,t)=>{const r=S.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>ha(e,t)}
        `;return r.displayName=`Typography.${t}`,r};r.BodyBL=o("body-baseline","BodyBL"),r.BodyMD=o("body-md","BodyMD"),r.BodySM=o("body-sm","BodySM"),r.BodyXS=o("body-xs","BodyXS");const i=(r,n)=>{const o=S.a`
            ${e=>k`
                ${da(r,e.weight||"regular")}
                color: ${zi.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${zi["text-hover"]};
                }
            `}
        `,i=r=>{var{external:n=!1,children:i}=r,a=_e(r,["external","children"]);return t(o,Object.assign({},a,{children:[i,n&&e(pa,{})]}))};return i.displayName=`Typography.${n}`,i};r.LinkBL=i("body-baseline","LinkBL"),r.LinkMD=i("body-md","LinkMD"),r.LinkSM=i("body-sm","LinkSM"),r.LinkXS=i("body-xs","LinkXS")}(fa||(fa={}));const pa=S(Z)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,ga=S.div`
    border-radius: ${Hi.md};
    background: ${zi.bg};
    padding: ${Pi["spacing-16"]} ${Pi["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,ma=S.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Pi["spacing-24"]};
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

        ${({$highlight:e})=>e&&k`
                background-color: ${zi["bg-hover-neutral"]};
            `}
    }
`,ba=o.forwardRef(((t,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,s=_e(t,["children","focusHighlight","focusOutline","type"]);return e(ma,Object.assign({ref:r,$outline:i,$highlight:o,type:a},s,{children:n}))})),va=S.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${zi.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Wi.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,ya=S(ba)`
    position: absolute;
    top: var(--close-button-top-inset, ${Pi["spacing-16"]});
    right: var(--close-button-right-inset, ${Pi["spacing-16"]});
    padding: 0;
    color: ${zi.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Wi.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Pi["spacing-20"]});
    }
`,xa=r=>{var{id:n="modal-box",children:o,onClose:i,showCloseButton:a=!0}=r,s=_e(r,["id","children","onClose","showCloseButton"]);return t(va,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(ya,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(G,{})}),o]}))},wa=e=>{const{textSize:t}=e||{};return k`
        // Text styling
        ${t&&ji[`${t}-regular`]}

        strong {
            font-weight: ${ji.Spec["weight-semibold"]};
            ${t&&ji[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${ji.Spec["weight-semibold"]};
            ${t&&ji[`${t}-semibold`]}
            color: ${zi.hyperlink};
            text-decoration: none;

            svg {
                color: ${zi["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${zi["hyperlink-hover"]};

                svg {
                    color: ${zi["icon-hover"]};
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
    `},$a=S.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Ca=S((t=>{var{children:r}=t,n=_e(t,["children"]);const o=n["data-testid"]||"card";return e(ga,Object.assign({},n,{"data-testid":o,children:"string"==typeof r?e(fa.BodyBL,{children:r}):r}))}))`
    color: ${zi.text};
    ${wa({textSize:"body-md"})}

    ${Wi.MaxWidth.sm} {
        display: none;
    }
`,Sa=S(xa)`
    padding: 3.5rem 1.25rem 2.5rem;
`,ka=S.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${zi.text};
    ${wa({textSize:"body-md"})}
`,_a=n=>{var{children:o,visible:i,onMobileClose:a}=n,s=_e(n,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=_(),d=Ni["sm-max"]({theme:c}),u=Ie.useMediaQuery({maxWidth:d}),h=()=>{a&&a()},f=()=>"string"==typeof o?e(fa.BodyMD,{children:o}):o;return t(r,{children:[i&&e($a,Object.assign({"data-testid":l},s,{children:e(Ca,{children:f()})})),u&&e(la,{show:null!=i&&i,onOverlayClick:h,children:e(Sa,{onClose:h,children:e(ka,{children:f()})})})]})},Da=S.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,Fa=n=>{var o,s,{children:l,popoverContent:c,trigger:d="click",position:u="top",zIndex:h,rootNode:f,customOffset:p,delay:g,onPopoverAppear:m,onPopoverDismiss:b}=n,v=_e(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[y,x]=a(!1),w=i(null),$=i(null),C=_(),S=Ni["sm-max"]({theme:C}),k=Ie.useMediaQuery({maxWidth:S}),{refs:D,floatingStyles:F,context:E}=I({open:y,placement:u,whileElementsMounted:M,middleware:[A(null!=p?p:16),B(),z({limiter:j()})],onOpenChange:e=>{x(e),y!==e&&G(e)}}),O=ra(),T=k?"click":d,V=R(E,{ignoreMouse:"hover"===T}),Y=L(E),U=P(E,{enabled:"hover"===T,delay:{open:null!==(o=null==g?void 0:g.open)&&void 0!==o?o:0,close:null!==(s=null==g?void 0:g.close)&&void 0!==s?s:500}}),{getReferenceProps:q,getFloatingProps:K}=H([V,Y,U]),Z=()=>{x(!1),G(!1)},G=e=>{e&&m&&m(),!e&&b&&b()};return t(r,{children:[e(Da,Object.assign({ref:e=>{w.current=e,D.setReference(e)}},q({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),v,{children:l})),y&&e(N,{root:f,children:e(W,{context:E,children:e("div",Object.assign({ref:e=>{$.current=e,D.setFloating(e)},style:Object.assign(Object.assign({},F),{outline:"none",zIndex:null!=h?h:O})},K(),{children:"function"==typeof c?c():e(_a,{visible:!0,onMobileClose:Z,children:c})}))})})]})},Ea=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Oa=S.span`
    color: ${zi["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Ea(e)}

    &:hover,
    &:focus-visible {
        color: ${zi["text-hover"]};
        ${({$hoverStyle:e})=>Ea(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Ta=S.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,Ia=r=>{var{ariaLabel:n,content:o,icon:i,underlineStyle:a="default",underlineHoverStyle:s="default"}=r,l=_e(r,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const c=!!o;return e(Fa,Object.assign({},l,{children:t(Oa,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,"aria-label":null!=n?n:c?void 0:"More info",children:[o,i&&e(Ta,{$standalone:!c,children:i})]})}))},Ma=S.div`
    padding-left: ${Pi["spacing-4"]};
    display: inline;
`,Aa=({addon:t,rootNode:r})=>{const{content:n,type:o,icon:i,id:a,zIndex:s,"data-testid":l}=t;return e(Ma,{children:e(Ia,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=i?i:e(C,{"data-testid":`${o}-icon`}),ariaLabel:"More info"})})},Ba=S.label`
    color: ${zi["text-subtle"]};
    margin-bottom: ${Pi["spacing-8"]};
    display: inline-block;

    ${ji["form-label"]}
    ${wa()}
    font-weight: ${ji.Spec["weight-semibold"]};
`,za=S.p`
    ${ji["body-sm-semibold"]}
    color: ${zi["text-error"]};
    margin-top: ${Pi["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`,ja=S.span`
    ${ji["form-description"]}
    color: ${zi["text-subtler"]};
    display: block;
`,Ra=r=>{var{children:n,addon:o,subtitle:i,"data-testid":a}=r,s=_e(r,["children","addon","subtitle","data-testid"]);return t(Ba,Object.assign({},s,{children:[n,o&&o.type&&("popover"===(null==o?void 0:o.type)?e(Aa,{addon:o}):null),"string"==typeof i?e(ja,Object.assign({"data-testid":a?`${a}-subtitle`:"subtitle"},s,{children:i})):i]}))},La=S.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:n,$xlSpan:o,$lgStart:i,$lgSpan:a,$mdStart:s,$mdSpan:l,$smStart:c,$smSpan:d,$xsStart:u,$xsSpan:h,$xxsStart:f,$xxsSpan:p}=e;return k`
            grid-column: ${t||"auto"} / span ${r||1};

            ${mi.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${o||1};
            }

            ${mi.MaxWidth.lg} {
                grid-column: ${i||"auto"} / span ${a||1};
            }

            ${mi.MaxWidth.md} {
                grid-column: ${s||"auto"} / span ${l||1};
            }

            ${mi.MaxWidth.sm} {
                grid-column: ${c||"auto"} / span ${d||1};
            }

            ${mi.MaxWidth.xs} {
                grid-column: ${u||"auto"} / span ${h||1};
            }

            ${mi.MaxWidth.xxs} {
                grid-column: ${f||"auto"} / span ${p||1};
            }
        `}}
`,Pa=o.forwardRef(((t,r)=>{const n=_(),{xxlCols:o,xlCols:i,lgCols:a,mdCols:s,smCols:l,xsCols:c,xxsCols:d}=t,u=_e(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return e(La,Object.assign({ref:r},(()=>{const e=pi["xxl-column"]({theme:n}),t=pi["xl-column"]({theme:n}),r=pi["lg-column"]({theme:n}),u=pi["md-column"]({theme:n}),f=pi["sm-column"]({theme:n}),p=pi["xs-column"]({theme:n}),g=pi["xxs-column"]({theme:n}),m=h(o||i||a||s||l||c||d,e,"xxl"),b=h(i||a||s||l||c||d,t,"xl"),v=h(a||s||l||c||d,r,"lg"),y=h(s||l||c||d,u,"md"),x=h(l||c||d,f,"sm"),w=h(c||d,p,"xs"),$=h(d,g,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),u))})),Ha={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Na=e=>Object.keys(Ha).reduce(((t,r)=>{const n=Ha[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Wa=Na("max-width"),Va=(Na("min-width"),S.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return k`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Wa.tablet} {
                grid-column: ${n||"auto"} / span
                    ${o||1};
            }

            ${Wa.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`),Ya=o.forwardRef(((t,r)=>{const{mobileCols:n,tabletCols:o,desktopCols:i}=t,a=_e(t,["mobileCols","tabletCols","desktopCols"]);return e(Va,Object.assign({ref:r},(()=>{const e=o||n,t=n,r=Ua(i||o||n),a=Ua(e),s=Ua(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),Ua=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,o=t<=r?r:t;let i;return i=o===n?1:o-n,{start:n,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},qa=k`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${Pi["spacing-32"]};
    }
`,Ka=S.div`
    ${qa}
`,Za=S(Pa)`
    ${qa}
`,Ga=S(Ya)`
    ${qa}
`,Qa=({label:r,errorMessage:n,id:o,disabled:i,children:a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,"data-error-testid":x})=>{const w=!s&&(l||d||u)?"v2-grid":!s&&(h||f||g||m||b||v||y)?"grid":s||"flex",$=()=>x||(o?`${o}-error-message`:"error-message"),C=()=>!!n;const S=(e=>{switch(e){case"v2-grid":return Ga;case"grid":return Za;case"flex":return Ka}})(w);return t(S,Object.assign({},(e=>{switch(e){case"v2-grid":return{mobileCols:l,tabletCols:d,desktopCols:u};case"grid":return{xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y};case"flex":return}})(w),{children:[r&&e(Ra,"string"==typeof r?{htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",disabled:i,children:r}:Object.assign({htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",disabled:i},r)),(()=>{const e={"aria-invalid":C(),"aria-describedby":C()&&$()};return p.map(a,(t=>c(t,e)))})(),n&&e(za,{id:$(),tabIndex:0,"data-testid":$(),children:n})]}))},Xa=e=>"small"===e?2.5:3,Ja=S.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Xa(e.$variant);return k`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,es=k`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Pi["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Xa(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Hi.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${zi["border-focus"]};
    }
`,ts=S.button`
    ${es}
    cursor: pointer;
`,rs=S.div`
    ${es}
`,ns=D`
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
`,os=S.div`
    position: relative;
    border: ${Li["width-010"]} ${Li.solid} ${zi.border};
    border-radius: ${Hi.sm};
    background: ${zi.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${zi["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${zi["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?k`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:k`
                animation: ${ns} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?k`
                background: ${zi["bg-disabled"]};

                ${ts} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${zi.border};
                    box-shadow: none;
                }
            `:e.$readOnly?k`
                border: none;
                background: transparent !important;

                ${ts} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?k`
                border-color: ${zi["border-error"]};

                :focus-within {
                    border-color: ${zi["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${zi["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`;S.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${Ri["duration-250"]} ${Ri["ease-default"]};
    margin-left: ${Pi["spacing-16"]};
`,S(Q)`
    color: ${zi.icon};
`;const is=S.div`
    height: 1px;
    background: ${zi.border};
    margin: 0 ${Pi["spacing-8"]};
`,as=S.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return k`
                color: ${zi["text-disabled"]};
            `}}
`,ss=S.div`
    ${e=>"small"===e.$variant?ji["body-md-regular"]:ji["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return k`
                    ${ca(1)}
                `}}
    overflow: hidden;
`,ls=S(ss)`
    color: ${zi["text-subtler"]};
`,cs=({children:t,show:r,error:n,disabled:o,testId:a,onBlur:s,readOnly:l,className:c,variant:d})=>{const u=i(null);return Xt("mousedown",(function(e){if(!o){if(u&&u.current.contains(e.target))return;r&&s()}}),"document"),e(Ja,{className:c,$variant:d,children:e(os,{ref:u,error:n&&!r,disabled:o,$readOnly:l,expanded:r,"data-testid":a,children:t})})},ds=S.div`
    display: flex;
    flex-direction: column;
`,us=e=>"right"===e?"bottom-end":"bottom-start",hs=({enabled:n,isOpen:o,onOpen:a,onClose:s,onDismiss:l,renderElement:c,renderDropdown:d,customZIndex:u,clickToToggle:h=!1,offset:f=0,alignment:p="left",fitAvailableHeight:g,rootNode:m})=>{var b;const v=_(),y=Ni["sm-max"]({theme:v}),x=i(null),w=i(null),{width:$=0}=Gt({targetRef:x,handleHeight:!1}),C={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<y;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:S,floatingStyles:k,context:D}=I({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==l||l():e&&!o?null==a||a():!e&&o&&(null==s||s(r))},whileElementsMounted:M,placement:us(p),middleware:[A(f),B(),z({limiter:j()}),V({apply({availableHeight:e}){w.current&&Object.assign(w.current.style,{maxHeight:g?`${e}px`:void 0,overflowY:g?"hidden":void 0})}}),C]}),F=ra(),{isMounted:E,styles:O}=Y(D,{initial:{opacity:0},open:{opacity:1},duration:300}),T=R(D,{enabled:n,toggle:h}),P=L(D,{enabled:n}),{getReferenceProps:U,getFloatingProps:q}=H([T,P]);return t(r,{children:[e("div",Object.assign({ref:e=>{x.current=e,S.setReference(e)}},U(),{children:c()})),E&&e(N,{root:m,children:e(W,{context:D,modal:!1,initialFocus:w,returnFocus:!1,children:e("div",Object.assign({ref:S.setFloating,style:Object.assign(Object.assign({},k),{zIndex:null!==(b=null!=u?u:F)&&void 0!==b?b:50})},q(),{children:e(ds,{ref:w,style:Object.assign({},O),inert:O.opacity<1?"":void 0,children:d({elementWidth:$})})}))})})]})},fs=S.div`
    --vertical-inset: ${Pi["spacing-24"]};
    --horizontal-inset: ${Pi["spacing-20"]};
    --header-bottom-spacing: ${Pi["spacing-4"]};

    border: ${Li["width-010"]} ${Li.solid} ${zi.border};
    border-radius: ${Hi.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${Wi.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,ps=S.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,gs=D`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ms=S.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${gs} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,bs=S(ms)`
    animation-delay: -0.45s;
`,vs=S(ms)`
    animation-delay: -0.3s;
`,ys=S(ms)`
    animation-delay: -0.15s;
`,xs=({color:r,className:n,size:o})=>t(ps,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[e(ms,{id:"inner1"}),e(bs,{id:"inner2"}),e(vs,{id:"inner3"}),e(ys,{id:"inner4"})]}),ws={Button:{"button-radius":Ti.md,"button-default-colour-bg":si["bg-primary"],"button-default-colour-bg-hover":si["bg-primary-hover"],"button-default-colour-text":si["text-inverse"],"button-secondary-colour-border":si["border-primary"],"button-secondary-colour-text":si["text-primary"],"button-light-colour-text":si["text-primary"],"button-link-colour-text":si["text-primary"]}},$s={collections:{default:{Button:{"button-radius":Ti.sm,"button-default-colour-bg":si["bg-primary"],"button-default-colour-bg-hover":si["bg-primary-hover"],"button-default-colour-text":si["text-inverse"],"button-secondary-colour-border":si["border-primary"],"button-secondary-colour-text":si["text-primary"],"button-light-colour-text":si["text-primary"],"button-link-colour-text":si["text-primary"]}},pa:{Button:{"button-radius":Ti.full,"button-default-colour-bg":si["bg-primary"],"button-default-colour-bg-hover":si["bg-primary-hover"],"button-default-colour-text":si["text-inverse"],"button-secondary-colour-border":si["border-primary"],"button-secondary-colour-text":si["text-primary"],"button-light-colour-text":si["text-primary"],"button-link-colour-text":si["text-primary"]}},a11yplayground:ws},defaultValue:"default"},Cs=(e,t)=>r=>{var n,o;const i=r.theme,a=Bo($s,null==i?void 0:i.componentScheme);return Ss((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[t])||a[e][t],r)},Ss=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},ks=Cs("Button","button-radius"),_s=Cs("Button","button-default-colour-bg"),Ds=Cs("Button","button-default-colour-bg-hover"),Fs=Cs("Button","button-default-colour-text"),Es=Cs("Button","button-secondary-colour-border"),Os=Cs("Button","button-secondary-colour-text"),Ts=Cs("Button","button-light-colour-text"),Is=Cs("Button","button-link-colour-text"),Ms=S.button`
    padding: ${Pi["spacing-8"]} ${Pi["spacing-16"]};
    min-width: 4rem;
    border: ${Li["width-010"]} ${Li.solid} transparent;
    transition: all ${Ri["duration-250"]} ${Ri["ease-default"]};
    border-radius: ${ks};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return k`
                    background-color: ${zi.Primitive.white};
                    border-color: ${e.$buttonIsDanger?zi["border-error-strong"]:Es};

                    color: ${e.$buttonIsDanger?zi["text-error"]:Os};

                    &:hover,
                    &:active {
                        background-color: ${zi["bg-hover-neutral"]};
                    }
                `;case"light":return k`
                    background-color: ${zi.bg};
                    border-color: ${zi.border};

                    color: ${e.$buttonIsDanger?zi["text-error"]:Ts};

                    &:hover,
                    &:active {
                        background-color: ${zi["bg-hover-neutral"]};
                    }
                `;case"link":return k`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?zi["text-error"]:Is};
                    &:hover,
                    &:active {
                        background-color: ${zi["bg-hover-neutral"]};
                    }
                `;case"disabled":return k`
                    background-color: ${zi["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${zi["text-disabled"]};
                `;default:return k`
                    background-color: ${e.$buttonIsDanger?zi["bg-error-strong"]:_s};};

                    ${Wi.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Fs}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?zi["bg-error-strong-hover"]:Ds}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return k`
                    height: 2.5rem;
                    ${ji["body-md-semibold"]}

                    ${Wi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return k`
                    height: 4rem;
                    ${ji["heading-md-semibold"]}

                    ${Wi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return k`
                    height: 3rem;
                    ${ji["heading-xs-semibold"]}

                    ${Wi.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,As=S(xs)`
    margin-right: 0.5rem;
`,Bs=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=_e(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(Ms,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[a&&e(As,{}),e("span",{children:o})]}))};Bs.displayName="Button.Default";const zs=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=_e(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(Ms,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[a&&e(As,{}),e("span",{children:o})]}))};zs.displayName="Button.Small";const js=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=_e(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return t(Ms,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[a&&e(As,{}),e("span",{children:o})]}))};js.displayName="Button.Large";const Rs={Default:o.forwardRef(Bs),Small:o.forwardRef(zs),Large:o.forwardRef(js)},Ls=k`
    color: ${zi.icon};
    height: 1rem;
    width: 1rem;
`,Ps=S(X)`
    ${Ls}
`,Hs=S(J)`
    ${Ls}
`,Ns=S(Q)`
    ${Ls}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Ws=S.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Vs=S.div`
    display: flex;
    flex: 1;
    position: relative;
`,Ys=S.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Us=S.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${zi.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return k`
                display: none;
            `}}
`,qs=S.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Ks=S.div`
    display: flex;
`,Zs=S.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?k`
                display: none;
            `:e.$expanded?k`
                ${Ns} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Gs=S.span`
    ${ji["body-md-regular"]}
    color: ${zi.text};
`,Qs=S.div`
    display: flex;
`,Xs=S(ba)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Js=S.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,el=S(Rs.Small)`
    flex: 1;
`,tl=S.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,rl=S.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Hi.md};
    margin: 0 0.5rem;
    transition: ${Ri["duration-150"]} ${Ri["ease-default"]};

    // default styles
    ${ji["body-md-regular"]}
    border-radius: ${Hi.md};
    border: ${Li["width-010"]} ${Li.solid} transparent;
    background-clip: border-box;
    color: ${zi.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?k`
                cursor: pointer;
            `:e.$disabledDisplay?k`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?k`
                background: ${zi["bg-selected"]};
                border-color: ${zi["border-selected"]};
                color: ${zi["text-selected"]};
                font-weight: ${ji.Spec["weight-semibold"]};

                ${t&&k`
                    &:hover {
                        background: ${zi["bg-selected-hover"]};
                        border-color: ${zi["border-selected-hover"]};
                        color: ${zi["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?k`
                color: ${zi["text-primary"]};
                font-weight: ${ji.Spec["weight-semibold"]};
            `:r?k`
                color: ${zi["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?k`
                &:hover {
                    background: ${zi["bg-selected-hover"]};
                    border-color: ${zi["border-selected-hover"]};
                    color: ${zi["text-selected-hover"]};
                    font-weight: ${ji.Spec["weight-semibold"]};
                }
            `:k`
            &:hover {
                background: ${zi["bg-hover"]};
                color: ${zi["text-hover"]};
                font-weight: ${ji.Spec["weight-semibold"]};
            }
        `}}
`,nl=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:h,onMonthSelect:f})=>{const p=g((()=>Ue.generateMonths(Ae(t))),[t]),m=i(new Array(p.length).fill(null)),[b,v]=a(p.findIndex((e=>e.isSame(s,"month"))));u((()=>{var e;null!==b&&(null===(e=m.current[b])||void 0===e||e.focus())}),[b,p]);const y=(e,t)=>{t||f(e)},x=e=>{const t="start"===r&&o&&e.isAfter(o,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!i)},w=e=>{const t=e.format("MMMM"),r=(n=e,!Ue.isWithinRange(n,c?Ae(c):void 0,d?Ae(d):void 0,"month"));var n;const o=s.isSame(e,"month"),i=o?"selected-month":Ae().isSame(e,"month")?"current-month":"default",a=s.isSame(e,"year")?o?0:-1:0===e.month()?0:-1;return{disabledDisplay:r||x(e),interactive:!r||h,month:t,variant:i,tabIndex:a}};return p.length?e(tl,{onBlur:()=>{v(null)},children:p.map(((t,r)=>{const{disabledDisplay:n,interactive:o,variant:i,month:a,tabIndex:s}=w(t);return e(rl,{ref:e=>m.current[r]=e,tabIndex:s,role:"button","aria-disabled":!o,"aria-selected":"selected-month"===i,$variant:i,$disabledDisplay:n,$interactive:o,onClick:()=>y(t,!o),onKeyDown:e=>{((e,t,r)=>{const n=e.key;let o;const i=p.indexOf(t);switch(n){case"Enter":case" ":e.preventDefault(),y(t,r);break;case"ArrowLeft":o=i-1;break;case"ArrowRight":o=i+1;break;case"ArrowUp":o=i-2;break;case"ArrowDown":o=i+2}void 0!==o&&o>=0&&o<p.length&&(e.preventDefault(),v(o))})(e,t,!o)},children:a},a)}))}):null},ol=S.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,il=S.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Ri["duration-150"]} ${Ri["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${ji["body-md-regular"]}
    border-radius: ${Hi.md};
    border: ${Li["width-010"]} ${Li.solid} transparent;
    background-clip: border-box;
    color: ${zi.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?k`
                cursor: pointer;
            `:t?k`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?k`
                background: ${zi["bg-selected"]};
                border-color: ${zi["border-selected"]};
                color: ${zi["text-selected"]};
                font-weight: ${ji.Spec["weight-semibold"]};

                ${t&&k`
                    &:hover {
                        background: ${zi["bg-selected-hover"]};
                        border-color: ${zi["border-selected-hover"]};
                        color: ${zi["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?k`
                color: ${zi["text-primary"]};
                font-weight: ${ji.Spec["weight-semibold"]};
            `:"other-decade"===e||r?k`
                color: ${zi["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?k`
                &:hover {
                    background: ${zi["bg-selected-hover"]};
                    border-color: ${zi["border-selected-hover"]};
                    color: ${zi["text-selected-hover"]};
                    font-weight: ${ji.Spec["weight-semibold"]};
                }
            `:k`
            &:hover {
                background: ${zi["bg-hover"]};
                color: ${zi["text-hover"]};
                font-weight: ${ji.Spec["weight-semibold"]};
            }
        `}}
`,al=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:h,onYearSelect:f,setCalendarDate:p})=>{const m=g((()=>Ue.generateDecadeOfYears(Ae(t))),[t]),b=i(new Array(m.length).fill(null)),[v,y]=a(t);u((()=>{var e;if(null===v)return;const t=m.findIndex((e=>e.isSame(v,"year")));t>=0&&(null===(e=b.current[t])||void 0===e||e.focus())}),[v,m]);const x=(e,t)=>{t||f(e)},w=e=>{const t="start"===r&&o&&e.isAfter(o,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!i)},$=e=>{const t=m.indexOf(e),r=[0,11].includes(t),n=e.year(),o=(i=e,!Ue.isWithinRange(i,c?Ae(c):void 0,d?Ae(d):void 0,"year"));var i;const a=r?"other-decade":s.isSame(e,"year")?"selected-year":Ae().isSame(e,"year")?"current-year":"default",l=s.year()>=m[0].year()&&s.year()<=m[m.length-1].year()?"selected-year"===a?0:-1:1===t?0:-1;return{disabledDisplay:o||w(e),interactive:!o||h,year:n,variant:a,tabIndex:l}};return m.length?e(ol,{onBlur:()=>{y(null)},children:m.map(((t,r)=>{const{disabledDisplay:n,interactive:o,variant:i,year:a,tabIndex:s}=$(t);return e(il,{ref:e=>{b.current[r]=e},tabIndex:s,role:"button","aria-label":`${a}`,"aria-disabled":!o,"aria-selected":"selected-year"===i,$variant:i,$disabledDisplay:n,$interactive:!!o,onClick:()=>x(t,!o),onKeyDown:e=>{((e,t,r)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(t,r);break;case"ArrowLeft":n=t.subtract(1,"year");break;case"ArrowRight":n=t.add(1,"year");break;case"ArrowUp":n=t.subtract(3,"year");break;case"ArrowDown":n=t.add(3,"year")}void 0!==n&&(e.preventDefault(),p(n),y(n))})(e,t,!o)},children:a},a)}))}):null},sl=o.forwardRef(((n,o)=>{var{children:s,initialCalendarDate:l,minDate:c,maxDate:d,currentFocus:h,selectedStartDate:f,selectedEndDate:p,selectWithinRange:g,dynamicHeight:b=!1,allowDisabledSelection:v,onCalendarDateChange:y,withButton:x,doneButtonDisabled:w,onDismiss:$,showNavigationHeader:C=!0,getLeftArrowDate:S,getRightArrowDate:k,isLeftArrowDisabled:_,isRightArrowDisabled:D,getMonthHeaderLabel:F,getYearHeaderLabel:E,isFocusable:O=!1}=n,T=_e(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[I,M]=a(Xe.toDayjs(l)),[A,B]=a(Xe.toDayjs(l)),[z,j]=a("default"),R=i(null),L=i(null),P=i(null),H=i(null);m(o,(()=>({defaultView(){j("default")},resetView(){const e=Xe.toDayjs(l);M(e),B(e),j("default")},setCalendarDate(e){const t=Xe.toDayjs(e);M(t),B(t)}}))),u((()=>{const e=Xe.toDayjs(l);M(e),B(e)}),[l]),u((()=>{G(A)}),[A]);const N=()=>{var e;"month-options"!==z?(j("month-options"),null===(e=P.current)||void 0===e||e.focus()):(j("default"),M(A))},W=e=>{var t;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),N(),null===(t=H.current)||void 0===t||t.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const t="ArrowUp"===e.key?I.subtract(1,"month"):I.add(1,"month");if(!Ue.isWithinRange(t,c?Ae(c):void 0,d?Ae(d):void 0,"month"))return;M(t),"default"===z&&B(t)}},V=()=>{"default"!==z?(j("default"),M(A)):j("year-options")},Y=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),V()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let t;if(t="year-options"===z?"ArrowUp"===e.key?I.subtract(10,"year"):I.add(10,"year"):"ArrowUp"===e.key?I.subtract(1,"year"):I.add(1,"year"),!Ue.isWithinRange(t,c?Ae(c):void 0,d?Ae(d):void 0,"year"))return;M(t),"default"===z&&B(t)}},U=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=S?S(I):I.subtract(1,"month");switch(z){case"default":B(t),M(t);break;case"month-options":M((e=>e.subtract(1,"year")));break;case"year-options":M((e=>e.subtract(10,"year")))}},q=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=k?k(I):I.add(1,"month");switch(z){case"default":B(t),M(t);break;case"month-options":M((e=>e.add(1,"year")));break;case"year-options":M((e=>e.add(10,"year")))}},K=e=>{M(e),B(e),x||j("default")},Z=()=>{const e=Xe.toDayjs(l);M(e),B(e),"default"===z?Q("reset"):j("default")},G=e=>{y&&y(e)},Q=e=>{$&&$(e)},X=()=>{if(!c||v)return!1;const e=Ae(c);return"month-options"===z?!Ue.isPreviousYearWithinRange(I,e):"year-options"===z?!Ue.isPreviousDecadeWithinRange(I,e):_?_(I):!Ue.isPreviousMonthWithinRange(I,e)},J=()=>{if(!d||v)return!1;const e=Ae(d);return"month-options"===z?!Ue.isNextYearWithinRange(I,e):"year-options"===z?!Ue.isNextDecadeWithinRange(I,e):D?D(I):!Ue.isNextMonthWithinRange(I,e)},ee=()=>{const n=F?F(I):I.format("MMM"),o=Ae(n,"MMM").format("MMMM"),i=(()=>{if("year-options"===z){const{beginDecade:e,endDecade:t}=Ue.getStartEndDecade(I);return`${e} to ${t}`}return E?E(I):I.format("YYYY")})(),a={"month-options":`${i}, Close month selection`,"year-options":`${i}, Close year selection`,default:`${i}, Select year`};return t(r,{children:[t(Zs,{"aria-label":`${o}, Select month`,type:"button",$expanded:"month-options"===z,$visible:"default"===z,id:"month-dropdown",onClick:N,onKeyDown:W,tabIndex:O?0:-1,children:[e(Gs,{children:n}),e(Ns,{})]}),t(Zs,{ref:H,"aria-label":a[z],type:"button",$expanded:"default"!==z,id:"year-dropdown",onClick:V,onKeyDown:Y,tabIndex:O?0:-1,children:[e(Gs,{children:i}),e(Ns,{})]})]})},te=()=>{switch(z){case"month-options":return e(nl,{calendarDate:I,currentFocus:h,minDate:c,maxDate:d,selectedStartDate:f,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!g,onMonthSelect:K,allowDisabledSelection:v});case"year-options":return e(al,{setCalendarDate:M,calendarDate:I,currentFocus:h,minDate:c,maxDate:d,selectedStartDate:f,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!g,onYearSelect:K,allowDisabledSelection:v});default:return null}};return t(Ws,Object.assign({ref:P,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":A.format("MMMM, YYYY"),role:"group"},T,{children:[C&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[z];return t(qs,{"data-id":"calendar-header","data-testid":"calendar-header",children:[e(Ks,{children:ee()}),t(Qs,{children:[e(Xs,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:X(),focusHighlight:!1,focusOutline:"browser",onClick:U,tabIndex:O?0:-1,children:e(Ps,{})}),e(Xs,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:J(),focusHighlight:!1,focusOutline:"browser",onClick:q,tabIndex:O?0:-1,children:e(Hs,{})})]})]})})(),e(Vs,{children:(()=>{const n="function"==typeof s?s({calendarDate:A,currentView:z}):s;if(b)return t(r,{children:["default"===z&&n,te()]});{const o="default"===z;return t(r,{children:[e(Ys,{inert:o?void 0:"",children:n}),e(Us,{$visible:!o,children:te()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===z)&&w;return t(Js,{children:[e(el,{ref:L,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Z,children:"Cancel"}),e(el,{"data-testid":"done-button",ref:R,type:"button",onClick:()=>{r||(M(A),"default"===z?Q("confirmed"):j("default"))},disabled:r,children:"Done"})]})})()]}))})),ll=S.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,cl=S.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${ji["body-sm-semibold"]};
    color: ${zi.text};
`,dl=S.div`
    grid-column: 1 / -1;
    display: flex;
`,ul=e=>{let t=zi.bg,r="transparent";switch(e.$type){case"hover-subtle":t=zi["bg-hover"],r=zi["bg-hover"];break;case"hover":t=zi["bg-hover-strong"],r=zi["bg-hover-strong"];break;case"hover-outline":t=zi["bg-hover-subtle"],r=zi["border-hover"];break;case"selected-outline":t=zi["bg-selected"],r=zi["border-selected"];break;case"selected-outline-subtle":t=zi["bg-selected"],r=zi["border-selected-subtle"];break;case"selected-hover":t=zi["bg-selected-hover"];break;case"selected-hover-outline":t=zi["bg-selected-hover"],r=zi["border-selected-hover"]}return{color:t,borderColor:r}},hl=S.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,fl=S.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Ri["duration-150"]} ${Ri["ease-default"]};
    border: ${Li["width-010"]} ${Li.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=ul(e);return k`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,pl=S(fl)`
    left: 0;
`,gl=S(fl)`
    right: 0;
`,ml=S.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Ri["duration-150"]} ${Ri["ease-default"]};

    border: ${Li["width-010"]} ${Li.solid} transparent;
    border-radius: ${Hi.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=ul(e);return k`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,bl=S(ml)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,vl=S(ml)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,yl=S.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,xl=S.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${ji["body-md-regular"]}
    transition: ${Ri["duration-150"]} ${Ri["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"hidden"===r?k`
                    visibility: hidden;
                `:k`
                color: ${zi["text-disabled-subtlest"]};
            `;switch(r){case"selected":return k`
                    font-weight: ${ji.Spec["weight-semibold"]};
                    color: ${zi["text-selected"]};
                `;case"selected-hover":return k`
                    font-weight: ${ji.Spec["weight-semibold"]};
                    color: ${zi["text-selected-hover"]};
                `;case"current":return k`
                    font-weight: ${ji.Spec["weight-semibold"]};
                    color: ${zi["text-primary"]};
                `;case"hover":return k`
                    font-weight: ${ji.Spec["weight-semibold"]};
                    color: ${zi["text-hover"]};
                `;case"unavailable":return k`
                    color: ${zi["text-disabled-subtlest"]};
                `;case"hidden":return k`
                    visibility: hidden;
                `;default:return k`
                    color: ${zi.text};
                `}}}

    &:focus {
        outline: none;
    }
`,wl=S.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,$l=({bgLeft:r,bgRight:n,circleLeft:o,circleRight:a,labelType:s,disabled:l,interactive:c,currentDateIndicator:d,date:h,onSelect:f,onHover:p,onFocus:g,onHoverEnd:m,onKeyDown:b,tabIndex:v=-1,role:y="button",focusDate:x})=>{const w=Ae().isSame(h,"day"),$=`${h.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,C=!!x&&x.isSame(h,"day"),S=i(null);u((()=>{var e;C&&S.current&&(null===(e=S.current)||void 0===e||e.focus())}),[C]);return t(hl,{children:[e(pl,{$type:r}),e(bl,{$type:o}),e(gl,{$type:n}),e(vl,{$type:a}),e(yl,{$interactive:c,children:t(xl,{ref:S,tabIndex:v,role:y,"aria-label":$,"aria-disabled":!c,"aria-selected":"selected"===s||"selected-hover"===s,$type:s,$disabled:l,$interactive:c,onClick:()=>{f(h)},onKeyDown:e=>{b&&b(e)},onMouseEnter:()=>{p(h)},onMouseLeave:()=>{m&&m(h)},onFocus:()=>{g&&g(h)},children:[h.date(),d&&w&&e(wl,{$disabled:l})]})})]})},Cl=({date:t,calendarDate:r,startDate:n,endDate:o,currentFocus:i,hoverDate:a,focusDate:s,minDate:l,maxDate:c,disabledDates:d,allowDisabledSelection:u,isNewSelection:h,showActiveMonthDaysOnly:f,onSelect:p,onHover:g,onFocus:m,setFocusCell:b,tabIndex:v=-1})=>{const y=Ue.isDisabledDay(t,d,l,c),x=!y||u,w=()=>{p(t,!x)},$=()=>{const e=Ae(a),t=e.isBefore(o,"day"),r=e.isAfter(n,"day");let s,l,c,d;return"start"===i&&o&&t&&(n&&r?(c=a,d=o):(s=a,l=n||o)),"end"===i&&n&&r&&(o&&t?(c=n,d=a):(s=o||n,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},C={date:t,calendarDate:r,disabled:y,interactive:x,currentDateIndicator:!0,onSelect:w,onHover:()=>{g(t.format("YYYY-MM-DD"),!x)},onFocus:()=>{m(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(x&&w());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.add(1,"month"),PageDown:()=>e.shiftKey?t.subtract(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),b(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:Ae(s),tabIndex:v};return e($l,Object.assign({},C,(()=>{const e={};if(r.month()!==t.month())e.labelType=f?"hidden":"unavailable";else if(Ae().isSame(t,"day")&&!y)e.labelType="current";else if(h){const r="end"===i&&n&&t.isBefore(n),a="start"===i&&o&&t.isAfter(o);(r||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},i=t.isSame(n,"day"),a=t.isSame(o,"day");return f&&r.month()!==t.month()?(e.labelType="hidden",e):((n&&i||o&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),n&&o&&t.isBetween(n,o,"day","[]")&&(e.labelType="selected",i||(e.bgLeft="selected-outline-subtle"),a||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!a)return{};const e={},r=t.isSame(a,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:c}=$();if(r){const r=t.isSame(n,"day"),i=t.isSame(o,"day");r||i?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(i&&s){if(t.isBetween(i,s,"day","[]")){const r=t.isSame(i,"day"),n=t.isSame(s,"day");r||(e.labelType="hover",e.bgLeft="hover-outline"),n||(e.labelType="hover",e.bgRight="hover-outline")}return e}return l&&c?(t.isBetween(l,c,"day","[]")&&r&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};Ae.extend(Re);const Sl=({calendarDate:r,currentFocus:n,disabledDates:o,selectedStartDate:s,selectedEndDate:l,onSelect:c,onHover:d,isNewSelection:h,minDate:p,maxDate:m,allowDisabledSelection:b,showActiveMonthDaysOnly:v,setCalendarDate:y})=>{const x=i(null);u((()=>{if(x.current){const e=x.current;x.current=null,_(e)}}),[r]);const w=f((()=>s&&Ae(s).isSame(r,"month")?Ae(s):l&&Ae(l).isSame(r,"month")?Ae(l):Ae().isSame(r,"month")?Ae():p&&r.isSame(Ae(p),"month")?Ae(p):Ae(r).startOf("month")),[s,r,l,p]),$=e=>{const t=Ae(e);if(Ue.isWithinRange(t,p?Ae(p):void 0,m?Ae(m):void 0)){if(!t.isSame(r,"month"))return null==y||y(e),void(x.current=e);_(e)}},C=g((()=>Ue.generateDays(r)),[r]),S=g((()=>w()),[w]),[k,_]=a(""),[D,F]=a(""),E=(e,t)=>{t&&!b||c(e)},O=(e,t)=>{t&&!b||(F(e),d(e))},T=e=>{F(e),d(e)},I=()=>{F(""),d("")};return t(ll,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(_(""),F(""),d(""))},children:[C[0].map(((t,r)=>e(cl,{"aria-hidden":!0,children:Ae(t).format("ddd")},`week-day-${r}`))),C.map(((t,i)=>e(dl,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:I,children:t.map(((t,i)=>e(Cl,{date:t,calendarDate:r,startDate:s,endDate:l,hoverDate:D,focusDate:k,currentFocus:n,minDate:p,maxDate:m,disabledDates:o,allowDisabledSelection:b,isNewSelection:h,showActiveMonthDaysOnly:v,onSelect:E,onHover:O,onFocus:T,setFocusCell:$,tabIndex:t.isSame(S,"day")?0:-1},`day-${i}`)))},i)))]})},kl=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,minDate:i,maxDate:a,disabledDates:s,allowDisabledSelection:l,numberOfDays:c=1,onSelect:d,onHover:u})=>{const h=Ue.isDisabledDay(t,s,i,a),f=!h||l,{start:p,end:g}=n?Ue.getFixedRangeStartEnd(Xe.toDayjs(n),c):{start:void 0,end:void 0},{start:m,end:b}=o?Ue.getFixedRangeStartEnd(Xe.toDayjs(o),c):{start:void 0,end:void 0},v=!!n&&t.isBetween(p,g,"day","[]"),y=!!o&&t.isBetween(m,b,"day","[]"),x=v&&t.isSame(p,"day")||y&&t.isSame(m,"day"),w=v&&t.isSame(g,"day")||y&&t.isSame(b,"day"),$=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},C={date:t,calendarDate:r,disabled:h,interactive:f,currentDateIndicator:!0,onSelect:()=>{d(t,!f)},onHover:()=>{u(t.format("YYYY-MM-DD"),!f)}};return e($l,Object.assign({},C,(()=>{const e={};return v||y?e.labelType="selected":r.month()!==t.month()?e.labelType="unavailable":Ae().isSame(t,"day")&&!h&&(e.labelType="current"),e})(),(()=>{const e={},r=t.format("YYYY-MM-DD");return y&&$(e,"hover",r===m,r===b),v&&$(e,"selected-outline",r===p,r===g),v&&y&&($(e,"selected-hover-outline",x,w),r===m&&r!==p&&(e.circleLeft="selected-hover")),e})()))},_l=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d,numberOfDays:u})=>{const h=g((()=>Ue.generateDays(r)),[r]),[f,p]=a(""),m=(e,t)=>{t&&!d||(i(e),e&&!Ae(e).isSame(e,"month")&&p(""))},b=(e,t)=>{t&&!d||(p(e),s(e))},v=()=>{p(""),s("")};return t(ll,{"data-testid":"calendar-content",children:[h[0].map(((t,r)=>e(cl,{children:Ae(t).format("ddd")},`week-day-${r}`))),h.map(((t,i)=>e(dl,{onMouseLeave:v,children:t.map(((t,i)=>e(kl,{date:t,calendarDate:r,selectedDate:o,hoverDate:f,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:d,onSelect:m,onHover:b,numberOfDays:u},`day-${i}`)))},i)))]})},Dl=S.div`
    width: 100%;
    background: ${zi.bg};
`,Fl=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,minDate:i,maxDate:a,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:c,onSelect:d,onHover:u})=>{const h=Ue.isDisabledDay(t,s,i,a),f=!h||l,p={date:t,calendarDate:r,disabled:h,interactive:f,currentDateIndicator:!0,onSelect:()=>{d(t,!f)},onHover:()=>{u(t.format("YYYY-MM-DD"),!f)}};return e($l,Object.assign({},p,(()=>{const e={};r.month()!==t.month()?e.labelType=c?"hidden":"unavailable":Ae().isSame(t,"day")&&!h&&(e.labelType="current");const i=t.isSame(n,"day"),a=t.isSame(o,"day");return i&&a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):i?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):a&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};Ae.extend(Re);const El=({calendarDate:r,disabledDates:n,selectedDate:o,onSelect:i,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d,showActiveMonthDaysOnly:u})=>{const h=g((()=>Ue.generateDays(r)),[r]),[f,p]=a(""),m=(e,t)=>{t&&!d||i(e)},b=(e,t)=>{t&&!d||(p(e),s(e))},v=()=>{p(""),s("")};return t(ll,{"data-testid":"calendar-content",children:[h[0].map(((t,r)=>e(cl,{children:Ae(t).format("ddd")},`week-day-${r}`))),h.map(((t,i)=>e(dl,{onMouseLeave:v,children:t.map(((t,i)=>e(Fl,{date:t,calendarDate:r,selectedDate:o,hoverDate:f,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:d,showActiveMonthDaysOnly:u,onSelect:m,onHover:b},`day-${i}`)))},i)))]})},Ol=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,minDate:i,maxDate:a,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:d})=>{const u=Ue.isDisabledDay(t,s,i,a),h=!u||l,{start:f,end:p}=Ue.getWeekStartEnd(Xe.toDayjs(n)),{start:g,end:m}=Ue.getWeekStartEnd(Xe.toDayjs(o)),b=n&&t.isBetween(f,p,"day","[]"),v=o&&t.isBetween(g,m,"day","[]"),y=b&&t.isSame(f)||v&&t.isSame(g),x=b&&t.isSame(p)||v&&t.isSame(m),w={date:t,calendarDate:r,disabled:u,interactive:h,currentDateIndicator:!0,onSelect:()=>{c(t,!h)},onHover:()=>{d(t.format("YYYY-MM-DD"),!h)}};return e($l,Object.assign({},w,(()=>{const e={};return r.month()!==t.month()?e.labelType="unavailable":Ae().isSame(t,"day")&&!u&&(e.labelType="current"),e})(),(()=>{const e={};let t,r;return b&&v?(t="selected-hover-outline",r="selected-hover"):b?(t="selected-outline",r="selected"):v&&(t="hover",r="hover"),t&&(e.labelType=r,y?e.circleLeft=t:e.bgLeft=t,x?e.circleRight=t:e.bgRight=t),e})()))},Tl=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d})=>{const u=g((()=>Ue.generateDays(r)),[r]),[h,f]=a(""),p=(e,t)=>{if(t&&!d)return;const r=e.startOf("week");i(r),e&&!Ae(e).isSame(r,"month")&&f("")},m=(e,t)=>{t&&!d||(f(e),s(e))},b=()=>{f(""),s("")};return t(ll,{"data-testid":"calendar-content",children:[u[0].map(((t,r)=>e(cl,{children:Ae(t).format("ddd")},`week-day-${r}`))),u.map(((t,i)=>e(dl,{onMouseLeave:b,children:t.map(((t,i)=>e(Ol,{date:t,calendarDate:r,selectedDate:o,hoverDate:h,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:d,onSelect:p,onHover:m},`day-${i}`)))},i)))]})},Il=o.forwardRef((({disabledDates:t,onYearMonthDisplayChange:r,onSelect:n,onHover:o,onDismiss:a,value:s,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:h,maxDate:f,allowDisabledSelection:p,selectWithinRange:g=!0,initialCalendarDate:b,numberOfDays:v,showActiveMonthDaysOnly:y=!1,isFocusable:x=!1},w)=>{const $=i(null),C=i(void 0);m(w,(()=>({reset(){var e;null===(e=$.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=$.current)||void 0===t||t.setCalendarDate(e)}})));const S=e=>{var t;const r=e.format("YYYY-MM-DD");null===(t=$.current)||void 0===t||t.setCalendarDate(r),_(r)},k=e=>{D(e)},_=e=>{n&&n(e)},D=e=>{o&&o(e)},F=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return e(Dl,{children:e(sl,{ref:$,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:a,minDate:h,maxDate:f,selectWithinRange:g,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:p,onCalendarDateChange:e=>{var t;C.current&&C.current.isSame(e,"month")||(null===(t=$.current)||void 0===t||t.setCalendarDate(e.format("YYYY-MM-DD")),F(e)),C.current=e},initialCalendarDate:b,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;switch(u){case"week":return e(Tl,{calendarDate:r,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:f,allowDisabledSelection:p,onSelect:S,onHover:k});case"fixed-range":return e(_l,{calendarDate:r,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:f,allowDisabledSelection:p,onSelect:S,onHover:k,numberOfDays:v});case"single":return e(El,{calendarDate:r,disabledDates:t,selectedDate:s,minDate:h,maxDate:f,allowDisabledSelection:p,showActiveMonthDaysOnly:y,onSelect:S,onHover:k});default:return e(Sl,{calendarDate:r,currentFocus:c,disabledDates:t,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:f,isNewSelection:g,allowDisabledSelection:p,showActiveMonthDaysOnly:y,onSelect:S,onHover:k,setCalendarDate:null===(n=$.current)||void 0===n?void 0:n.setCalendarDate})}})(r)})})})),Ml=o.forwardRef(((t,r)=>{var{width:n}=t,o=_e(t,["width"]);return e(fs,{$width:n,"data-testid":"calendar-dropdown",children:e(Il,Object.assign({ref:r},o))})})),Al=k`
    outline-offset: -1px;
    outline: ${Li["width-020"]} ${Li.solid} ${zi["border-focus"]};
`,Bl=k`
    outline-color: ${zi["border-focus"]};
`,zl=k`
    outline-color: ${zi["border-disabled"]};
`,jl=k`
    outline-color: ${zi["border-error-focus"]};
`,Rl=S.div`
    border: ${Li["width-010"]} ${Li.solid} ${zi.border};
    border-radius: ${Hi.sm};
    background: ${zi.bg};

    :focus-within {
        ${Al}
    }
    ${e=>e.$focused&&Al}

    ${e=>e.$readOnly?k`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Bl}
                }
                ${e.$focused&&Bl}
            `:e.$disabled?k`
                background: ${zi["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${zl}
                }
                ${e.$focused&&zl}
            `:e.$error?k`
                border-color: ${zi["border-error"]};

                :focus-within {
                    ${jl}
                }
                ${e.$focused&&jl}
            `:void 0}
`,Ll=S(Rl)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Pi["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Pl=S.input`
    ${e=>"small"===e.$variant?ji["body-md-regular"]:ji["body-baseline-regular"]}
    color: ${zi.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${zi["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${zi["text-subtler"]};
    }

    // Chrome, Safari, Edge, Opera
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;
`,Hl=S.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${Li["width-010"]} ${Li.solid}
            ${zi["border-focus"]};
        border-radius: ${Hi.sm};
    }
`,Nl=S.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Wl=S.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return k`
                ${Vl}, ${Kl} {
                    color: ${zi["text-subtler"]};
                }
            `}}
`,Vl=S(Pl)`
    background: transparent;
    text-align: center;
`,Yl=S(Vl)`
    width: 2rem;
    margin-right: ${Pi["spacing-4"]};
`,Ul=S(Vl)`
    width: 2.5rem;
`,ql=S(Vl)`
    width: 3rem;
    margin-left: ${Pi["spacing-4"]};
`,Kl=S.span`
    ${ji["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return k`
                color: ${zi.text};
            `}}
`,Zl=S.div`
    ${ji["body-baseline-regular"]}
    background-color: ${zi.bg};
    color: ${zi["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?k`
                background-color: ${zi["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?k`
                display: none;
            `:void 0}
`;Ae.extend(ze);const Gl=o.forwardRef((({disabled:r,readOnly:n,names:o,value:s,focused:l,hoverValue:c,placeholder:d,label:h,onChange:f,onFocus:p,onBlur:g,hideInputKeyboard:b},v)=>{const y=b?"none":"numeric",[x,w,$]=rr(""),[C,S,k]=rr(""),[_,D,F]=rr(""),[E,O]=a("none"),[T,I]=a(!1),M=i(null),A=i(null),B=i(null),z=i(null),[j,R,L]=Y(c);u((()=>{var e;const[t="",r="",n=""]=Y(s);w(t),S(r),D(n),t||r||n||!M.current||!M.current.contains(document.activeElement)||null===(e=A.current)||void 0===e||e.focus()}),[s]),u((()=>{var e;l||O("none"),l&&(I(!0),M.current&&!M.current.contains(document.activeElement)&&(null===(e=A.current)||void 0===e||e.focus()))}),[l]),m(v,(()=>({ref:M,resetPlaceholder(){I(!1)},resetInput(){const[e="",t="",r=""]=Y(s);w(e),S(t),D(r)}})),[s]);const P=e=>{var t;e.preventDefault(),null===(t=A.current)||void 0===t||t.focus()},H=e=>{e.target.select();const t=e.target.name;O(t)},N=e=>{const[t,r,n]=o,i={[t]:$.current,[r]:k.current,[n]:F.current},a=e.target.name,s=i[a],l=a!==n?tt.padValue(s,!0):s;switch(a){case t:i[t]=l,w(l);break;case r:i[r]=l,S(l)}const c=`${i[n]}-${i[r]}-${i[t]}`,d=Ae(c,"YYYY-MM-DD",!0).isValid(),u=!i[t]&&!i[r]&&!i[n];d&&s!==l&&f(c),M.current&&!M.current.contains(e.relatedTarget)&&(O("none"),null==g||g(u||d))},W=e=>{var t,r;if(c)return;const n=e.target.name,i=e.target.value.replace(/[^0-9]/g,""),a={day:x,month:C,year:_};switch(n){case o[0]:a.day=i,w(i),2===i.length&&(null===(t=B.current)||void 0===t||t.focus());break;case o[1]:a.month=i,S(i),2===i.length&&(null===(r=z.current)||void 0===r||r.focus());break;case o[2]:a.year=i,D(i)}if(!a.day&&!a.month&&!a.year)return void f("");const s=`${a.year}-${a.month}-${a.day}`;Ae(s,"YYYY-MM-DD",!0).isValid()&&f(s)},V=e=>{var t,r;"Backspace"!==e.code&&"Backspace"!==e.key||(E===o[1]&&0===C.length&&(null===(t=A.current)||void 0===t||t.focus()),E===o[2]&&0===_.length&&(null===(r=B.current)||void 0===r||r.focus()))};function Y(e){if(e){const t=Ae(new Date(e));return t.isValid()?[tt.padValue(t.date().toString()),tt.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return t(Nl,{role:"group","aria-label":h,onClick:()=>{var e;r||n||(I(!0),M.current&&!M.current.contains(document.activeElement)&&(null===(e=A.current)||void 0===e||e.focus()))},onFocus:e=>{r||(I(!0),l||null==p||p(e))},children:[t(Wl,{ref:M,$hover:!!c,children:[e(Yl,{ref:A,name:o[0],maxLength:2,value:null!=j?j:x,onFocus:H,onBlur:N,onChange:W,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${o[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:E!==o[0]||n?"DD":""}),e(Kl,{$inactive:0===x.length,children:"/"}),e(Ul,{ref:B,name:o[1],maxLength:2,value:null!=R?R:C,onFocus:H,onBlur:N,onChange:W,onKeyDown:V,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${o[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:E!==o[1]||n?"MM":""}),e(Kl,{$inactive:0===C.length,children:"/"}),e(ql,{ref:z,name:o[2],maxLength:4,value:null!=L?L:_,onFocus:H,onBlur:N,onChange:W,onKeyDown:V,type:"text",inputMode:y,pattern:"[0-9]{4}","data-testid":`${o[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:E!==o[2]||n?"YYYY":""})]}),(()=>{if(!s&&!n&&d)return e(Zl,{$hide:T,$disabled:r,onMouseDown:P,children:d})})()]})})),Ql=S(Ll)`
    height: 3rem;
`,Xl=t=>{var{minDate:r,maxDate:n,disabled:o,disabledDates:s,error:l,hideInputKeyboard:c,value:d,onChange:h,onFocus:f,onBlur:p,onYearMonthDisplayChange:g,withButton:m=!0,readOnly:b,id:v,allowDisabledSelection:y,zIndex:x,dropdownRootNode:w}=t,$=_e(t,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[C,S]=a(Je.sanitizeInput(d)),[k,_]=a(Je.sanitizeInput(d)),[D,F]=a(void 0),[E,O]=a(!1),[T,I]=a(!1),M=i(null),A=i(null);u((()=>{const e=Je.sanitizeInput(d);S(e),_(e)}),[d]);const B=e=>{!y&&Je.isDateDisabled(e,{disabledDates:s,minDate:r,maxDate:n})||(_(e),m||(H(e),S(e),e&&O(!1)))},z=e=>{var t;_(e),m||(H(e),S(e),e&&(null===(t=M.current)||void 0===t||t.focus(),O(!1)),D&&F(void 0))},j=()=>{b||o||(O(!0),T||(I(!0),f&&f()))},R=e=>{var t;T&&!E&&M.current&&!M.current.contains(e.relatedTarget)&&(null===(t=A.current)||void 0===t||t.resetInput(),_(C),I(!1),N())},L=e=>{F(e)},P=e=>{var t;switch(e){case"reset":_(C);break;case"confirmed":S(k),H(k)}null===(t=M.current)||void 0===t||t.focus(),O(!1)},H=e=>{h&&h(e)},N=()=>{p&&p()};return e(hs,{enabled:!b&&!o,isOpen:E,renderElement:()=>e(Ql,Object.assign({tabIndex:-1,ref:M,onBlur:R,onFocus:j,$disabled:o,$readOnly:b,$focused:T,$error:l,id:v,"data-testid":$["data-testid"]},$,{children:e(Gl,{ref:A,disabled:o,onChange:B,readOnly:b,focused:E,names:["start-day","start-month","start-year"],value:k,hoverValue:D,hideInputKeyboard:c})})),renderDropdown:({elementWidth:t})=>e(Ml,{variant:"single",initialCalendarDate:k,withButton:m,value:k,disabledDates:s,minDate:r,maxDate:n,allowDisabledSelection:y,onHover:L,onSelect:z,onDismiss:P,onYearMonthDisplayChange:g,width:t}),onClose:()=>{var e;null===(e=A.current)||void 0===e||e.resetInput(),_(C),O(!1),I(!1),N()},onDismiss:()=>{var e,t;null===(e=A.current)||void 0===e||e.resetInput(),null===(t=M.current)||void 0===t||t.focus(),_(C),O(!1)},customZIndex:x,offset:16,rootNode:w})},Jl=S.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return k`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(
                        100% - ${ji.Spec["body-size-baseline"]} -
                            ${Pi["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${Pi["spacing-8"]};
                }
            `}}
`,ec=S.div`
    width: 100%; // Force next flex item to break to next line
`,tc=S.div`
    display: flex;
    flex: 1;
    align-items: center;
`,rc=S(ee)`
    color: ${zi.icon};
    width: ${ji.Spec["body-size-baseline"]};
    height: ${ji.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Pi["spacing-8"]};
    align-self: center;
`,nc=S.div`
    position: absolute;
    background: ${e=>e.$error?zi["border-error-focus-strong"]:zi["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Pi["spacing-8"]} - (${ji.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Ri["duration-350"]} ${Ri["ease-standard"]},
        opacity ${Ri["duration-350"]} ${Ri["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return k`
                    opacity: 1;
                `;case"end":return k`
                    left: calc(50% + ${Pi["spacing-16"]});
                    opacity: 1;
                `;case"none":return k`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return k`
                display: none;
            `}}
`,oc=({children:r,currentActive:n,error:o,className:i,wrap:a})=>{const[s,l]=r;return t(Jl,{className:i,$wrap:a,children:[e(tc,{"data-id":"range-container-elem1-container",children:s}),e(rc,{}),a&&e(ec,{}),e(tc,{"data-id":"range-container-elem2-container",children:l}),e(nc,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:a})]})},ic=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},ac=S(Ll)`
    ${e=>e.$wrap&&k`
            padding: ${Pi["spacing-12"]} ${Pi["spacing-16"]};
        `}
`,sc=S.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&k`
            height: fit-content;
        `}
`,lc={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},cc=r=>{var{minDate:n,maxDate:o,disabled:s,disabledDates:l,error:c,hideInputKeyboard:d,value:h,valueEnd:p,onChange:g,onFocus:m,onBlur:v,onYearMonthDisplayChange:y,withButton:x=!0,variant:w="range",numberOfDays:$=7,readOnly:C,id:S,allowDisabledSelection:k,zIndex:_,dropdownRootNode:D}=r,F=_e(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[E,O]=a(),[T,I]=a(void 0),[M,A]=a(!1),[B,z]=a(!1),j="week"===w,R="fixed-range"===w,[{selectedStart:L,selectedEnd:P,currentFocus:H,calendarOpen:N,isStartDirty:W,isEndDirty:V,focused:Y},U]=(({initialState:e,reducers:t,name:r,debug:n})=>{const[o,i]=b(((e,r)=>t[r.type]?t[r.type](e,r.payload):e),e);return[o,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{n&&ic(r,e,t),i({type:e,payload:t})}])))]})({name:"date-range-input",initialState:lc,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:j?"none":R?"start":t,calendarOpen:!C,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),q=i(!1),K=i(null),Z=i(null),G=i(null),Q=i(null),X=(({maxWidth:e,targetRef:t})=>{const[r,n]=a(!1);return Gt({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:f((t=>{n(t<=e)}),[e])}),r})({maxWidth:320,targetRef:K});u((()=>{U.resetRange({start:Je.sanitizeInput(h),end:Je.sanitizeInput(p)})}),[h,p]),u((()=>{"start"===H?O(L):"end"===H&&O(P)}),[H]);const J=e=>{var t,r,n;"Enter"!==e.code||x||(L&&P?(U.done({start:L,end:P}),null==g||g(L,P)):(U.dismiss(),null===(t=K.current)||void 0===t||t.focus(),null===(r=G.current)||void 0===r||r.resetPlaceholder(),null===(n=Q.current)||void 0===n||n.resetPlaceholder()))},ee=e=>{var t;if(fe(e))return void(q.current=!0);if(U.changeStart(e),null===(t=Z.current)||void 0===t||t.setCalendarDate(e),q.current=!1,!e)return void(x||P||!V||(U.resetRange({start:"",end:""}),null==g||g("","")));if(!P)return void U.focus("end");if(Ae(e).isAfter(P,"day"))U.reselectEnd();else{if(V)return x?void 0:(U.done({start:e,end:P}),void(null==g||g(e,P)));U.focus("end")}},te=e=>{var t,r;if(fe(e))return void(q.current=!0);if(Ae(e).isBefore(L,"day"))return U.changeStart(e),null===(t=Z.current)||void 0===t||t.setCalendarDate(e),void U.reselectEnd();if(U.changeEnd(e),null===(r=Z.current)||void 0===r||r.setCalendarDate(e),e){if(L)return x?void 0:(U.done({start:L,end:e}),void(null==g||g(L,e)));U.focus("start")}else x||L||!W||(U.resetRange({start:"",end:""}),null==g||g("",""))},re=e=>{var t;if(fe(e))return void(q.current=!0);if(U.changeStart(e),null===(t=Z.current)||void 0===t||t.setCalendarDate(e),q.current=!1,!e)return void(x?U.changeEnd(""):(U.resetRange({start:"",end:""}),null==g||g("","")));const r=Ae(e).format("YYYY-MM-DD"),n=Ae(r).add($-1,"day").format("YYYY-MM-DD");return U.changeStart(r),U.changeEnd(n),q.current=!1,x?void 0:(U.done({start:r,end:n}),void(null==g||g(r,n)))},ne=()=>{C||s||Y||(U.focus("start"),null==m||m())},oe=e=>{var t,r;Y&&!N&&K.current&&K.current.contains(e.relatedTarget)&&(U.blur(),A(!1),z(!1),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null===(r=Q.current)||void 0===r||r.resetPlaceholder(),null==v||v())},ie=e=>t=>{t.stopPropagation(),C||(U.focus(e),ae(),se(),Y||null==m||m())},ae=()=>{if(j){const e=Xe.toDayjs(L).startOf("week").format("YYYY-MM-DD");A(!0),z(!0),O(e)}},se=()=>{R&&(z(!0),O(L))},le=e=>{var t;e&&!q.current||(U.resetStart(),null===(t=G.current)||void 0===t||t.resetInput())},ce=e=>{var t;e&&!q.current||(U.resetEnd(),null===(t=Q.current)||void 0===t||t.resetInput())},de=e=>{switch(w){case"week":(e=>{const t=Ae(e).startOf("week").format("YYYY-MM-DD"),r=Ae(e).endOf("week").format("YYYY-MM-DD");if(U.changeStart(t),U.changeEnd(r),q.current=!1,!x)U.done({start:t,end:r}),null==g||g(t,r)})(e);break;case"fixed-range":re(e);break;default:"start"===H?ee(e):"end"===H&&te(e)}},ue=e=>{var t;switch(null===(t=K.current)||void 0===t||t.focus(),e){case"reset":U.cancel();break;case"confirmed":U.done({start:L,end:P}),null==g||g(L,P)}},he=e=>{I(e)},fe=e=>!k&&e&&Je.isDateDisabled(e,{disabledDates:l,minDate:n,maxDate:o}),pe=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===H?T:void 0,end:"end"===H?T:void 0};break;case"week":if(!T)return;t={start:Ae(T).startOf("week").format("YYYY-MM-DD"),end:Ae(T).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!T)return;t={start:Ae(T).format("YYYY-MM-DD"),end:Ae(T).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return e(hs,{enabled:!C&&!s,isOpen:N,onClose:()=>{var e,t;U.blur(),A(!1),z(!1),null===(e=G.current)||void 0===e||e.resetPlaceholder(),null===(t=Q.current)||void 0===t||t.resetPlaceholder(),null==v||v()},onDismiss:()=>{var e,t,r;U.dismiss(),null===(e=K.current)||void 0===e||e.focus(),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null===(r=Q.current)||void 0===r||r.resetPlaceholder()},renderElement:()=>e(ac,Object.assign({ref:K,tabIndex:-1,onFocus:ne,onBlur:oe,$focused:Y,$disabled:s,$readOnly:C,$error:c,$wrap:X,id:S,"data-testid":F["data-testid"],onKeyDown:J},F,{children:t(oc,{currentActive:H,wrap:X,error:c,children:[e(sc,{$wrap:X,children:e(Gl,{ref:G,placeholder:"From",names:["start-day","start-month","start-year"],value:L,disabled:s,readOnly:M||C,focused:"start"===H,hoverValue:pe("start"),onChange:R?re:ee,onFocus:ie("start"),onBlur:le,hideInputKeyboard:d})}),e(sc,{$wrap:X,children:e(Gl,{ref:Q,placeholder:"To",names:["end-day","end-month","end-year"],value:P,disabled:s,readOnly:B||C,focused:"end"===H,hoverValue:pe("end"),onChange:te,onFocus:ie("end"),onBlur:ce,hideInputKeyboard:d})})]})})),renderDropdown:({elementWidth:t})=>e(Ml,{ref:Z,variant:w,initialCalendarDate:E,withButton:x,value:L,endValue:P,selectWithinRange:W||V,currentFocus:H,disabledDates:l,minDate:n,maxDate:o,allowDisabledSelection:k,onSelect:de,onDismiss:ue,onHover:he,onYearMonthDisplayChange:y,numberOfDays:$,width:t}),customZIndex:_,offset:16,rootNode:D})},dc=S(Ms)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,uc=(r,n)=>{const{children:o,disabled:i=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left",loading:d=!1}=r,u=_e(r,["children","disabled","styleType","danger","icon","iconPosition","loading"]),h={$buttonIconPosition:c,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return t(dc,Object.assign({ref:n,"data-testid":u["data-testid"]||"button-with-icon",disabled:i},h,u,{children:[d?e(xs,{}):l,e("span",{children:o})]}))};uc.displayName="ButtonWithIcon.Default";const hc=(r,n)=>{const{children:o,disabled:i=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left",loading:d=!1}=r,u=_e(r,["children","disabled","styleType","danger","icon","iconPosition","loading"]),h={$buttonIconPosition:c,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return t(dc,Object.assign({ref:n,"data-testid":u["data-testid"]||"button-with-icon",disabled:i},h,u,{children:[d?e(xs,{}):l,e("span",{children:o})]}))};hc.displayName="ButtonWithIcon.Small";const fc={Default:o.forwardRef(uc),Small:o.forwardRef(hc)},pc=({className:t,progress:r,color:n,"data-testid":o})=>e(gc,{className:t,$innerWidth:r,$color:n,"data-testid":o,children:e("progress",{value:100*r,max:100})}),gc=S.div`
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

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):zi["icon-primary-subtle"](e),k`
            border: ${Li["width-010"]} ${Li.solid} ${r};
            border-radius: ${Hi.sm};

            :after {
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
`,mc=S.button`
    align-items: center;
    border-radius: 0.25rem;
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$sizeType){case"large":return k`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return k`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return k`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${e=>{switch(e.$styleType){case"secondary":return k`
                    background-color: ${zi.bg};
                    border: ${Li["width-010"]} ${Li.solid}
                        ${zi["border-primary"]};
                    color: ${zi["text-primary"]};

                    :hover {
                        background-color: ${zi["bg-hover-neutral"]};
                    }
                `;case"light":return k`
                    background-color: ${zi.bg};
                    border: ${Li["width-010"]} ${Li.solid}
                        ${zi.border};
                    color: ${zi["text-primary"]};

                    :hover {
                        background-color: ${zi["bg-hover-neutral"]};
                    }
                `;default:return k`
                    background-color: ${zi["bg-primary"]};
                    border: none;
                    color: ${zi["text-inverse"]};

                    :hover {
                        background-color: ${zi["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${zi["bg-disabled"]};
        border: ${Li["width-010"]} ${Li.solid}
            ${zi["border-disabled"]};
        color: ${zi["text-disabled"]};
        cursor: not-allowed;
    }
`,bc=o.forwardRef(((t,r)=>{var{"data-testid":n,styleType:o="primary",children:i,sizeType:a="default",type:s="button"}=t,l=_e(t,["data-testid","styleType","children","sizeType","type"]);return e(mc,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:a,$styleType:o},l,{children:i}))})),vc=Object.assign(la,{Box:xa}),yc=k`
    ${e=>`\n        ${Wi.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${Ni["sm-max"](e)}px)\n    `}
`,xc=k`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${Ni["sm-max"](e)}px)\n    `}
`,wc=S.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>k`
            ${Li.Util["dashed-default"]({radius:Hi.sm,thickness:Li["width-040"],colour:e.$disabled?zi["border-disabled"]:zi.border})}

            background-color: ${e.$disabled?zi["bg-disabled"]:zi.bg};
        `}
    height: 14.125rem;
`,$c=S(Rs.Default)`
    width: fit-content;
    margin: 0 ${Pi["spacing-20"]};

    :disabled {
        border-color: ${zi["border-strong"]};
    }
`,Cc=S(bc)`
    position: absolute;
    top: ${Pi["spacing-16"]};
    right: ${Pi["spacing-16"]};

    :disabled {
        border-color: ${zi["border-strong"]};
    }
`,Sc=S.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${Pi["spacing-16"]}) * 2);
    height: 100%;
`,kc=S.div`
    background: ${zi["bg-primary-subtlest"]};
    border: ${Li["width-010"]} ${Li.solid} ${zi.border};
    border-radius: ${Hi.sm};
    margin: 0 ${Pi["spacing-20"]};
    padding: ${Pi["spacing-16"]};
    display: flex;
    gap: ${Pi["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,_c=S(fa.BodySM)`
    margin-top: ${Pi["spacing-16"]};
`,Dc=S(vc)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,Fc=S.div`
    width: 100%;
    margin: auto;
    padding: ${Pi["layout-xxl"]} ${Pi["layout-sm"]};

    ${yc} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,Ec=S(vc.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${Pi["spacing-16"]};

    ${yc} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${Pi["spacing-8"]};
        --close-button-right-inset: ${Pi["spacing-20"]};
    }
`,Oc=S.h2`
    ${ji["body-baseline-semibold"]}
    color: ${zi.text};
    margin-bottom: ${Pi["spacing-16"]};
    text-align: center;

    ${yc} {
        ${ji["body-md-semibold"]}
        margin: ${Pi["spacing-12"]} 0;
    }
`,Tc=S.div`
    width: 100%;
    height: 20rem;
    border-radius: ${Hi.lg};
    overflow: hidden;

    ${yc} {
        border-radius: 0;
        flex: 1;
    }

    ${xc} {
        background: ${zi["bg-strong"]};
    }
`,Ic=S.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${zi["bg-stronger"]};
    margin: auto;

    ${yc} {
        aspect-ratio: 4/3;
    }
    ${Wi.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${xc} {
        width: auto;
        height: 100%;
    }
`,Mc=S.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${zi["border-strong"]};
    pointer-events: none;

    ${yc} {
        width: calc(100% - ${Pi["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,Ac=S.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${Pi["spacing-16"]};

    ${Wi.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${Pi["spacing-16"]} ${Pi["spacing-24"]}
            ${Pi["spacing-48"]};
        gap: ${Pi["spacing-16"]};
    }

    ${xc} {
        flex-direction: row;
        margin: ${Pi["spacing-16"]} ${Pi["spacing-20"]};
    }
`,Bc=S(Rs.Default)`
    width: 8.5rem;
    ${Wi.MaxWidth.sm} {
        width: 100%;
    }
    ${xc} {
        height: 2.5rem;
    }
`,zc=S.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,jc=S.canvas`
    cursor: crosshair;
`,Rc=v((()=>De(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.d36981f4.js")).ESignatureCanvas}})))),Lc=n=>{const{description:o,id:s,loadingProgress:l,loadingLabel:c="Uploading...",onChange:d,value:h,disabled:f}=n,p=_e(n,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[g,m]=a(!1),b=i(null),[v,x]=a(h),w=_(),$=Ni["sm-max"]({theme:w}),C=Ie.useMediaQuery({maxWidth:$}),S=Ie.useMediaQuery({maxHeight:$,orientation:"landscape"}),k=()=>{var e;null===(e=b.current)||void 0===e||e.clear()},D=()=>{if(b.current){const e=b.current.export();x(e),m(!1),null==d||d(e)}};u((()=>{x(h)}),[h]);return t("div",Object.assign({},p,{children:[e(wc,{$disabled:f,children:"number"==typeof l?t(kc,{children:[c&&e(fa.BodyMD,{children:c}),e(pc,{progress:null!=l?l:0,"data-testid":`${s||"e-signature"}-progress-bar`})]}):v?t(r,{children:[e(Sc,{src:v,alt:"Signature preview"}),e(Cc,{styleType:"light",onClick:()=>m(!0),id:s,"aria-label":"Edit signature",disabled:f,children:e(te,{})})]}):e($c,{type:"button",styleType:"secondary","aria-label":"Add signature",id:s,onClick:()=>m(!0),disabled:f,children:"Add signature"})}),e(Dc,{"data-testid":"signature-modal",show:g,children:e(Fc,{children:t(Ec,{onClose:()=>m(!1),children:[e(Oc,{children:"Signature"}),e(Tc,{children:t(Ic,{children:[e(Mc,{}),e(y,{fallback:null,children:g&&e(Rc,{ref:b,baseImageDataURL:v})})]})}),t(Ac,{children:[e(Bc,{as:S?fc.Small:fc.Default,type:"button",styleType:C&&!S?"light":"link",icon:e(re,{}),onClick:k,children:"Clear"}),e(Bc,{as:S?Rs.Small:Rs.Default,type:"button",onClick:D,children:"Save"})]})]})})}),o?e(_c,{children:o}):null]}))};function Pc(e,t){return Pc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Pc(e,t)}function Hc(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Nc(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Wc(e){return null!==e&&1===e.length?e[0]:e.slice()}function Vc(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function Yc(e,t){return Uc(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function Uc(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let qc=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),Vc(r.getMouseEventMap())}))}Hc(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=Yc(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),Vc(r.getKeyDownEventMap()),Hc(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),Vc(r.getMouseEventMap()),Hc(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),Vc(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),o={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},i={index:t,value:Wc(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(o["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(i)),r.props.renderThumb(o,i)},r.renderTrack=(e,t,n)=>{const o={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},i={index:e,value:Wc(r.state.value)};return r.props.renderTrack(o,i)};let n=Nc(t.value);n.length||(n=Nc(t.defaultValue)),r.pendingResizeTimeouts=[];const i=[];for(let e=0;e<n.length;e+=1)n[e]=Yc(n[e],t),i.push(e);return r.resizeObserver=null,r.resizeElementRef=o.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:i},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Pc(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=Nc(e.value);return r.length?t.pending?null:{value:r.map((t=>Yc(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return Wc(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,o=n.length;for(let i=0;i<o;i+=1){const o=this.calcOffset(n[i]),a=Math.abs(e-o);a<t&&(t=a,r=i)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Yc(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),o=e[r],i=n[this.posMaxKey()],a=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=o-s,c=Math.abs(i-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],o=r[this.posMinKey()];let i=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:o));return this.props.invert&&(i=this.state.sliderLength-i),i-=this.state.thumbSize/2,i},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),o=Yc(this.calcValue(r),this.props),i=this.state.value.slice();i[n]=o;for(let e=0;e<i.length-1;e+=1)if(i[e+1]-i[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:i},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Yc(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Yc(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,o=t[r];if(e===o)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:i,max:a,min:s,minDistance:l}=this.props;if(!i){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,i&&n>1&&(e>o?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const i=n-o*r;t[e-1-o]>i&&(t[e-1-o]=i)}}(n,t,l,a)):e<o&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const e=n+o*r;t[o]<e&&(t[o]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,o;for(n=r,o=e[n]+t;null!==e[n+1]&&o>e[n+1];n+=1,o=e[n]+t)e[n+1]=Uc(o,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,o=e[n]-t;null!==e[n-1]&&o<e[n-1];n-=1,o=e[n]-t)e[n-1]=Uc(o,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](Wc(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return o.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,i,a)},t}(o.Component);qc.displayName="ReactSlider",qc.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>o.createElement("div",e),renderTrack:e=>o.createElement("div",e),renderMark:e=>o.createElement("span",e)};var Kc=qc;const Zc=S.div`
    isolation: isolate;
`,Gc=S.div`
    margin-top: ${Pi["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${Pi["spacing-8"]};
`,Qc=S.div`
    margin-bottom: ${Pi["spacing-8"]};
`,Xc=S(fa.BodyBL)`
    overflow-wrap: anywhere;
`,Jc=S(Kc)`
    height: 0.875rem;
`,ed=S.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${e=>e.$disabled?k`
                cursor: not-allowed;
            `:e.$readOnly?void 0:k`
                cursor: grab;
                :active {
                    cursor: grabbing;
                }
            `}

    :after {
        content: "";
        display: block;
        height: 0.875rem;
        width: 0.875rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: ${zi.bg};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${Li["width-010"]} ${Li.solid}
            ${e=>e.$disabled?zi["border-selected-disabled"]:zi["border-strong"]};
        border-radius: 50%;
    }
`,td=S.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${ed}:after {
        outline-offset: -1px;
        outline: ${Li["width-040"]} ${Li.solid}
            ${zi["border-selected"]};
    }
`,rd=S.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${Hi.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||zi["border-strong"](e)};
`,nd=r=>{var{value:n,min:o=0,max:i=100,step:s=1,minRange:l,numOfThumbs:c=2,colors:d,disabled:h,readOnly:f,ariaLabels:p,showSliderLabels:g,sliderLabelPrefix:m,sliderLabelSuffix:b,showIndicatorLabel:v,indicatorLabelPrefix:y,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:$,onChangeEnd:C}=r,S=_e(r,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[k,_]=a(F()),D=function(){const e=function(){const e=h||f?zi["border-disabled"]:zi["border-strong"],t=h||f?zi["border-selected-disabled"]:zi["border-selected"];if(1===c)return[t,e];const r=[];r.push(e);for(let e=0;e<c-1;e++)r.push(t);return r.push(e),r}();return new Array(c+1).fill(0).map(((t,r)=>(null==d?void 0:d[r])||e[r]))}();u((()=>{n!==k&&_(F())}),[n]);function F(){if(n&&n.length===c)return n;const e=[];for(let t=0;t<c;t++)e.push(o+s*t);return e}const E=e=>w?w(e):t(Xc,{children:[m,e,b]});return t(Zc,Object.assign({},S,{children:[v&&e(Qc,{children:(()=>{let e="";if(1===k.length)e=`${k[0]}`;else if(2===k.length)e=`${k[0]} - ${k[1]}`;else if(k.length>2){e=`${Math.min(...k)} - ${Math.max(...k)}`}return t(Xc,{children:[y,e,x]})})()}),e(Jc,{step:s,min:o,max:i,value:k,disabled:h||f,onChange:(e,t)=>{if("number"==typeof e){const t=[e];_(t),null==$||$(t)}else{if(t>-1&&k[t]===e[t])return;const r=[...e];_(r),null==$||$(r)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];_(t),null==C||C(t)}else{const t=[...e];_(t),null==C||C(t)}},minDistance:l,ariaLabel:p,renderThumb:(t,r)=>e(td,Object.assign({"data-testid":`slider-thumb-${r.index}`},t,{tabIndex:h?void 0:t.tabIndex,children:e(ed,{$disabled:h,$readOnly:f})})),renderTrack:(t,r)=>e(rd,Object.assign({"data-testid":`slider-track-${r.index}`},t,{$color:D[r.index]}))}),g&&t(Gc,{children:[e("div",{children:E(o)}),e("div",{children:E(i)})]})]}))},od=S.div`
    display: flex;
    margin-bottom: ${Pi["spacing-16"]};
    align-items: baseline;
`,id=S.div`
    margin: 0 0.5rem;
`,ad=S.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,sd=S.div`
    flex: 1;
    border-radius: ${Hi.sm} ${Hi.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=zi["bg-strongest"];return e.$disabled&&e.$selected?t=zi["bg-selected-stronger-disabled"]:e.$disabled?t=zi["bg-disabled"]:e.$selected&&(t=zi["bg-selected-stronger"]),k`
            background-color: ${t};
        `}}
`,ld=S(nd)`
    margin-top: -0.3125rem;
`,cd=n=>{var{bins:o=[],interval:i,disabled:s,readOnly:l,value:c,showRangeLabels:d,rangeLabelPrefix:h,rangeLabelSuffix:f,ariaLabels:p,onChange:m,onChangeEnd:b,renderEmptyView:v,renderRangeLabel:y}=n,x=_e(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=o.map((e=>e.count)),$=Math.max(...w),C=o.map((e=>e.minValue)),S=Math.max(...C),k=Math.min(...C),[_,D]=a(T()),F=g((()=>{const e=[...o].sort(((e,t)=>e.minValue-t.minValue)),t=(S-k)/i+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===k+i*n));t?r.push(t):r.push({count:0,minValue:k+i*n})}return r}),[o,i]);u((()=>{c!==_&&D(T())}),[c]);const E=e=>{const[t,r]=e,n=[t,r];D(n),null==m||m(n)},O=e=>{const[t,r]=e,n=[t,r];D(n),null==b||b(n)};function T(){return null!=c?c:[k,k+i]}const I=e=>y?y(e):t(fa.BodyBL,{children:[h,e,f]});return t("div",Object.assign({},x,{children:[d&&t(od,{children:[I(_[0]),e(id,{children:"-"}),I(_[1])]}),F.every((e=>0===e.count))&&v?v():t(r,{children:[e(ad,{children:F.map(((t,r)=>{const n=t.count/$;return e(sd,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:t.minValue>=_[0]&&t.minValue<_[1],$disabled:s||l},r)}))}),e(ld,{min:k,max:S+i,step:i,minRange:i,numOfThumbs:2,value:_,disabled:s,readOnly:l,ariaLabels:p,onChange:E,onChangeEnd:O})]})]}))},dd=S(Pl)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&k`
            padding-left: ${Pi["spacing-16"]};
            padding-right: ${e.$showClear?0:Pi["spacing-16"]};
        `}
`,ud=S(Hl)`
    height: auto;
    padding: ${Pi["spacing-12"]} ${Pi["spacing-16"]};

    cursor: pointer;
    color: ${zi.icon};

    ${e=>"no-border"===e.$styleType&&k`
            margin-right: -${Pi["spacing-12"]};
        `}
`,hd=S(G)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,fd=S.div`
    display: flex;
    width: 100%;
`,pd=S(Rl)`
    display: flex;
    align-items: center;
    width: 100%;
`,gd=o.forwardRef(((n,o)=>{var{value:a,spacing:s,type:l,error:c,disabled:d,readOnly:u,onChange:h,onClear:f,allowClear:p=!1,className:g,styleType:b="bordered"}=n,v=_e(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=((e,t)=>"tel"===e&&!!t)(l,s),x=i(null);m(o,(()=>x.current),[]);const w=er({ref:x,formatter:e=>y?tt.transformWithSpaces(e,s):e}),$=e=>{h&&(y?S(e):h(e))},C=()=>{f&&f(),x&&x.current&&x.current.focus()},S=e=>{const t=w();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,o=r.replace(/\s/g,"");e.target.value=o,null==h||h(e),n()},k=a?(e=>e?y?tt.transformWithSpaces(e,s):e:"")(a):a,_=p&&!d&&!u&&!!a,D=()=>t(r,{children:[e(dd,Object.assign({"data-testid":"input",ref:x,disabled:d,value:k,onChange:$,type:l,readOnly:u,$showClear:_,$styleType:b},v)),_&&e(ud,{onClick:C,type:"button",$styleType:b,children:e(hd,{"aria-hidden":!0})})]});return e(r,{children:"no-border"===b?e(fd,{className:g,children:D()}):e(pd,{$disabled:d,$error:c,$readOnly:u,className:g,children:D()})})})),md=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i="form-field","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Qa,{id:i,label:n,errorMessage:o,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(gd,Object.assign({id:`${i}-base`,"data-testid":s||i,ref:r,error:!!o},y))})}));var bd=Rn;var vd=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var yd=function(e){return this.__data__.get(e)};var xd=function(e){return this.__data__.has(e)},wd=Rn,$d=Ln,Cd=io;var Sd=function(e,t){var r=this.__data__;if(r instanceof wd){var n=r.__data__;if(!$d||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Cd(n)}return r.set(e,t),this.size=r.size,this},kd=Rn,_d=function(){this.__data__=new bd,this.size=0},Dd=vd,Fd=yd,Ed=xd,Od=Sd;function Td(e){var t=this.__data__=new kd(e);this.size=t.size}Td.prototype.clear=_d,Td.prototype.delete=Dd,Td.prototype.get=Fd,Td.prototype.has=Ed,Td.prototype.set=Od;var Id=Td;var Md=io,Ad=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Bd=function(e){return this.__data__.has(e)};function zd(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Md;++t<r;)this.add(e[t])}zd.prototype.add=zd.prototype.push=Ad,zd.prototype.has=Bd;var jd=function(e,t){return e.has(t)},Rd=zd,Ld=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Pd=jd;var Hd=function(e,t,r,n,o,i){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=i.get(e),d=i.get(t);if(c&&d)return c==t&&d==e;var u=-1,h=!0,f=2&r?new Rd:void 0;for(i.set(e,t),i.set(t,e);++u<s;){var p=e[u],g=t[u];if(n)var m=a?n(g,p,u,t,e,i):n(p,g,u,e,t,i);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!Ld(t,(function(e,t){if(!Pd(f,t)&&(p===e||o(p,e,r,n,i)))return f.push(t)}))){h=!1;break}}else if(p!==g&&!o(p,g,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var Nd=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var Wd=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Vd=sr.Uint8Array,Yd=xn,Ud=Hd,qd=Nd,Kd=Wd,Zd=lr?lr.prototype:void 0,Gd=Zd?Zd.valueOf:void 0;var Qd=function(e,t,r,n,o,i,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new Vd(e),new Vd(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Yd(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=qd;case"[object Set]":var l=1&n;if(s||(s=Kd),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=Ud(s(e),s(t),n,o,i,a);return a.delete(e),d;case"[object Symbol]":if(Gd)return Gd.call(e)==Gd.call(t)}return!1};var Xd=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},Jd=Xd,eu=nr;var tu=function(e,t,r){var n=t(e);return eu(e)?n:Jd(n,r(e))};var ru=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i},nu=function(){return[]},ou=Object.prototype.propertyIsEnumerable,iu=Object.getOwnPropertySymbols,au=iu?function(e){return null==e?[]:(e=Object(e),ru(iu(e),(function(t){return ou.call(e,t)})))}:nu;var su=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},lu=yr,cu=xr;var du=function(e){return cu(e)&&"[object Arguments]"==lu(e)},uu=xr,hu=Object.prototype,fu=hu.hasOwnProperty,pu=hu.propertyIsEnumerable,gu=du(function(){return arguments}())?du:function(e){return uu(e)&&fu.call(e,"callee")&&!pu.call(e,"callee")},mu={exports:{}};var bu=function(){return!1};!function(e,t){var r=sr,n=bu,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(mu,mu.exports);var vu=mu.exports,yu=/^(?:0|[1-9]\d*)$/;var xu=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&yu.test(e))&&e>-1&&e%1==0&&e<t};var wu=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},$u=yr,Cu=wu,Su=xr,ku={};ku["[object Float32Array]"]=ku["[object Float64Array]"]=ku["[object Int8Array]"]=ku["[object Int16Array]"]=ku["[object Int32Array]"]=ku["[object Uint8Array]"]=ku["[object Uint8ClampedArray]"]=ku["[object Uint16Array]"]=ku["[object Uint32Array]"]=!0,ku["[object Arguments]"]=ku["[object Array]"]=ku["[object ArrayBuffer]"]=ku["[object Boolean]"]=ku["[object DataView]"]=ku["[object Date]"]=ku["[object Error]"]=ku["[object Function]"]=ku["[object Map]"]=ku["[object Number]"]=ku["[object Object]"]=ku["[object RegExp]"]=ku["[object Set]"]=ku["[object String]"]=ku["[object WeakMap]"]=!1;var _u=function(e){return Su(e)&&Cu(e.length)&&!!ku[$u(e)]};var Du=function(e){return function(t){return e(t)}},Fu={exports:{}};!function(e,t){var r=or,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(Fu,Fu.exports);var Eu=Fu.exports,Ou=_u,Tu=Du,Iu=Eu&&Eu.isTypedArray,Mu=Iu?Tu(Iu):Ou,Au=su,Bu=gu,zu=nr,ju=vu,Ru=xu,Lu=Mu,Pu=Object.prototype.hasOwnProperty;var Hu=function(e,t){var r=zu(e),n=!r&&Bu(e),o=!r&&!n&&ju(e),i=!r&&!n&&!o&&Lu(e),a=r||n||o||i,s=a?Au(e.length,String):[],l=s.length;for(var c in e)!t&&!Pu.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Ru(c,l))||s.push(c);return s},Nu=Object.prototype;var Wu=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Nu)};var Vu=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Yu=Wu,Uu=Vu,qu=Object.prototype.hasOwnProperty;var Ku=function(e){if(!Yu(e))return Uu(e);var t=[];for(var r in Object(e))qu.call(e,r)&&"constructor"!=r&&t.push(r);return t},Zu=Mr,Gu=wu;var Qu=function(e){return null!=e&&Gu(e.length)&&!Zu(e)},Xu=Hu,Ju=Ku,eh=Qu;var th=function(e){return eh(e)?Xu(e):Ju(e)},rh=tu,nh=au,oh=th;var ih=function(e){return rh(e,oh,nh)},ah=Object.prototype.hasOwnProperty;var sh=function(e,t,r,n,o,i){var a=1&r,s=ih(e),l=s.length;if(l!=ih(t).length&&!a)return!1;for(var c=l;c--;){var d=s[c];if(!(a?d in t:ah.call(t,d)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var f=!0;i.set(e,t),i.set(t,e);for(var p=a;++c<l;){var g=e[d=s[c]],m=t[d];if(n)var b=a?n(m,g,d,t,e,i):n(g,m,d,e,t,i);if(!(void 0===b?g===m||o(g,m,r,n,i):b)){f=!1;break}p||(p="constructor"==d)}if(f&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(f=!1)}return i.delete(e),i.delete(t),f},lh=Xr(sr,"DataView"),ch=Ln,dh=Xr(sr,"Promise"),uh=Xr(sr,"Set"),hh=Xr(sr,"WeakMap"),fh=yr,ph=Rr,gh="[object Map]",mh="[object Promise]",bh="[object Set]",vh="[object WeakMap]",yh="[object DataView]",xh=ph(lh),wh=ph(ch),$h=ph(dh),Ch=ph(uh),Sh=ph(hh),kh=fh;(lh&&kh(new lh(new ArrayBuffer(1)))!=yh||ch&&kh(new ch)!=gh||dh&&kh(dh.resolve())!=mh||uh&&kh(new uh)!=bh||hh&&kh(new hh)!=vh)&&(kh=function(e){var t=fh(e),r="[object Object]"==t?e.constructor:void 0,n=r?ph(r):"";if(n)switch(n){case xh:return yh;case wh:return gh;case $h:return mh;case Ch:return bh;case Sh:return vh}return t});var _h=kh,Dh=Id,Fh=Hd,Eh=Qd,Oh=sh,Th=_h,Ih=nr,Mh=vu,Ah=Mu,Bh="[object Arguments]",zh="[object Array]",jh="[object Object]",Rh=Object.prototype.hasOwnProperty;var Lh=function(e,t,r,n,o,i){var a=Ih(e),s=Ih(t),l=a?zh:Th(e),c=s?zh:Th(t),d=(l=l==Bh?jh:l)==jh,u=(c=c==Bh?jh:c)==jh,h=l==c;if(h&&Mh(e)){if(!Mh(t))return!1;a=!0,d=!1}if(h&&!d)return i||(i=new Dh),a||Ah(e)?Fh(e,t,r,n,o,i):Eh(e,t,l,r,n,o,i);if(!(1&r)){var f=d&&Rh.call(e,"__wrapped__"),p=u&&Rh.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return i||(i=new Dh),o(g,m,r,n,i)}}return!!h&&(i||(i=new Dh),Oh(e,t,r,n,o,i))},Ph=xr;var Hh=function e(t,r,n,o,i){return t===r||(null==t||null==r||!Ph(t)&&!Ph(r)?t!=t&&r!=r:Lh(t,r,n,o,e,i))},Nh=Id,Wh=Hh;var Vh=function(e,t,r,n){var o=r.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var s=r[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=r[o])[0],c=e[l],d=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new Nh;if(n)var h=n(c,d,l,e,t,u);if(!(void 0===h?Wh(d,c,3,n,u):h))return!1}}return!0},Yh=Er;var Uh=function(e){return e==e&&!Yh(e)},qh=Uh,Kh=th;var Zh=function(e){for(var t=Kh(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,qh(o)]}return t};var Gh=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Qh=Vh,Xh=Zh,Jh=Gh;var ef=function(e,t){return null!=e&&t in Object(e)},tf=ko,rf=gu,nf=nr,of=xu,af=wu,sf=Do;var lf=function(e,t,r){for(var n=-1,o=(t=tf(t,e)).length,i=!1;++n<o;){var a=sf(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&af(o)&&of(a,o)&&(nf(e)||rf(e))},cf=ef,df=lf;var uf=Hh,hf=Io,ff=function(e,t){return null!=e&&df(e,t,cf)},pf=Fr,gf=Uh,mf=Gh,bf=Do;var vf=function(e){return function(t){return null==t?void 0:t[e]}},yf=Oo;var xf=vf,wf=function(e){return function(t){return yf(t,e)}},$f=Fr,Cf=Do;var Sf=function(e){var t=Xh(e);return 1==t.length&&t[0][2]?Jh(t[0][0],t[0][1]):function(r){return r===e||Qh(r,e,t)}},kf=function(e,t){return pf(e)&&gf(t)?mf(bf(e),t):function(r){var n=hf(r,e);return void 0===n&&n===t?ff(r,e):uf(t,n,3)}},_f=function(e){return e},Df=nr,Ff=function(e){return $f(e)?xf(Cf(e)):wf(e)};var Ef=function(e){return"function"==typeof e?e:null==e?_f:"object"==typeof e?Df(e)?kf(e[0],e[1]):Sf(e):Ff(e)},Of=Ef,Tf=Qu,If=th;var Mf=function(e){return function(t,r,n){var o=Object(t);if(!Tf(t)){var i=Of(r);t=If(t),r=function(e){return i(o[e],e,o)}}var a=e(t,r,n);return a>-1?o[i?t[a]:a]:void 0}};var Af=/\s/;var Bf=function(e){for(var t=e.length;t--&&Af.test(e.charAt(t)););return t},zf=/^\s+/;var jf=function(e){return e?e.slice(0,Bf(e)+1).replace(zf,""):e},Rf=Er,Lf=Cr,Pf=/^[-+]0x[0-9a-f]+$/i,Hf=/^0b[01]+$/i,Nf=/^0o[0-7]+$/i,Wf=parseInt;var Vf=function(e){if("number"==typeof e)return e;if(Lf(e))return NaN;if(Rf(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Rf(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=jf(e);var r=Hf.test(e);return r||Nf.test(e)?Wf(e.slice(2),r?2:8):Pf.test(e)?NaN:+e},Yf=Vf,Uf=1/0;var qf=function(e){return e?(e=Yf(e))===Uf||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Kf=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},Zf=Ef,Gf=function(e){var t=qf(e),r=t%1;return t==t?r?t-r:t:0},Qf=Math.max;var Xf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:Gf(r);return o<0&&(o=Qf(n+o,0)),Kf(e,Zf(t),o)},Jf=Ee(Xf),ep=Ee(Mf(Xf)),tp=Hh;var rp=Ee((function(e,t){return tp(e,t)})),np=Object.defineProperty,op={};((e,t)=>{for(var r in t)np(e,r,{get:t[r],enumerable:!0})})(op,{assign:()=>jp,colors:()=>Ap,createStringInterpolator:()=>Op,skipAnimation:()=>Bp,to:()=>Tp,willAdvance:()=>zp});var ip=wp(),ap=e=>bp(e,ip),sp=wp();ap.write=e=>bp(e,sp);var lp=wp();ap.onStart=e=>bp(e,lp);var cp=wp();ap.onFrame=e=>bp(e,cp);var dp=wp();ap.onFinish=e=>bp(e,dp);var up=[];ap.setTimeout=(e,t)=>{const r=ap.now()+t,n=()=>{const e=up.findIndex((e=>e.cancel==n));~e&&up.splice(e,1),gp-=~e?1:0},o={time:r,handler:e,cancel:n};return up.splice(hp(r),0,o),gp+=1,vp(),o};var hp=e=>~(~up.findIndex((t=>t.time>e))||~up.length);ap.cancel=e=>{lp.delete(e),cp.delete(e),dp.delete(e),ip.delete(e),sp.delete(e)},ap.sync=e=>{mp=!0,ap.batchedUpdates(e),mp=!1},ap.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,ap.onStart(r)}return n.handler=e,n.cancel=()=>{lp.delete(r),t=null},n};var fp="undefined"!=typeof window?window.requestAnimationFrame:()=>{};ap.use=e=>fp=e,ap.now="undefined"!=typeof performance?()=>performance.now():Date.now,ap.batchedUpdates=e=>e(),ap.catch=console.error,ap.frameLoop="always",ap.advance=()=>{"demand"!==ap.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):xp()};var pp=-1,gp=0,mp=!1;function bp(e,t){mp?(t.delete(e),e(0)):(t.add(e),vp())}function vp(){pp<0&&(pp=0,"demand"!==ap.frameLoop&&fp(yp))}function yp(){~pp&&(fp(yp),ap.batchedUpdates(xp))}function xp(){const e=pp;pp=ap.now();const t=hp(pp);t&&($p(up.splice(0,t),(e=>e.handler())),gp-=t),gp?(lp.flush(),ip.flush(e?Math.min(64,pp-e):16.667),cp.flush(),sp.flush(),dp.flush()):pp=-1}function wp(){let e=new Set,t=e;return{add(r){gp+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(gp-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,gp-=t.size,$p(t,(t=>t(r)&&e.add(t))),gp+=e.size,t=e)}}}function $p(e,t){e.forEach((e=>{try{t(e)}catch(e){ap.catch(e)}}))}function Cp(){}var Sp={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function kp(e,t){if(Sp.arr(e)){if(!Sp.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var _p=(e,t)=>e.forEach(t);function Dp(e,t,r){if(Sp.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Fp=e=>Sp.und(e)?[]:Sp.arr(e)?e:[e];function Ep(e,t){if(e.size){const r=Array.from(e);e.clear(),_p(r,t)}}var Op,Tp,Ip=(e,...t)=>Ep(e,(e=>e(...t))),Mp=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Ap=null,Bp=!1,zp=Cp,jp=e=>{e.to&&(Tp=e.to),e.now&&(ap.now=e.now),void 0!==e.colors&&(Ap=e.colors),null!=e.skipAnimation&&(Bp=e.skipAnimation),e.createStringInterpolator&&(Op=e.createStringInterpolator),e.requestAnimationFrame&&ap.use(e.requestAnimationFrame),e.batchedUpdates&&(ap.batchedUpdates=e.batchedUpdates),e.willAdvance&&(zp=e.willAdvance),e.frameLoop&&(ap.frameLoop=e.frameLoop)},Rp=new Set,Lp=[],Pp=[],Hp=0,Np={get idle(){return!Rp.size&&!Lp.length},start(e){Hp>e.priority?(Rp.add(e),ap.onStart(Wp)):(Vp(e),ap(Up))},advance:Up,sort(e){if(Hp)ap.onFrame((()=>Np.sort(e)));else{const t=Lp.indexOf(e);~t&&(Lp.splice(t,1),Yp(e))}},clear(){Lp=[],Rp.clear()}};function Wp(){Rp.forEach(Vp),Rp.clear(),ap(Up)}function Vp(e){Lp.includes(e)||Yp(e)}function Yp(e){Lp.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Lp,(t=>t.priority>e.priority)),0,e)}function Up(e){const t=Pp;for(let r=0;r<Lp.length;r++){const n=Lp[r];Hp=n.priority,n.idle||(zp(n),n.advance(e),n.idle||t.push(n))}return Hp=0,(Pp=Lp).length=0,(Lp=t).length>0}var qp="[-+]?\\d*\\.?\\d+",Kp=qp+"%";function Zp(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Gp=new RegExp("rgb"+Zp(qp,qp,qp)),Qp=new RegExp("rgba"+Zp(qp,qp,qp,qp)),Xp=new RegExp("hsl"+Zp(qp,Kp,Kp)),Jp=new RegExp("hsla"+Zp(qp,Kp,Kp,qp)),eg=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,tg=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rg=/^#([0-9a-fA-F]{6})$/,ng=/^#([0-9a-fA-F]{8})$/;function og(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ig(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,o=2*r-n,i=og(o,n,e+1/3),a=og(o,n,e),s=og(o,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function ag(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function sg(e){return(parseFloat(e)%360+360)%360/360}function lg(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function cg(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function dg(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=rg.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ap&&void 0!==Ap[e]?Ap[e]:(t=Gp.exec(e))?(ag(t[1])<<24|ag(t[2])<<16|ag(t[3])<<8|255)>>>0:(t=Qp.exec(e))?(ag(t[1])<<24|ag(t[2])<<16|ag(t[3])<<8|lg(t[4]))>>>0:(t=eg.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ng.exec(e))?parseInt(t[1],16)>>>0:(t=tg.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Xp.exec(e))?(255|ig(sg(t[1]),cg(t[2]),cg(t[3])))>>>0:(t=Jp.exec(e))?(ig(sg(t[1]),cg(t[2]),cg(t[3]))|lg(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var ug=(e,t,r)=>{if(Sp.fun(e))return e;if(Sp.arr(e))return ug({range:e,output:t,extrapolate:r});if(Sp.str(e.output[0]))return Op(e);const n=e,o=n.output,i=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,o,i,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===o)return n;if(t===r)return e<=t?n:o;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=i(c),n===-1/0?c=-c:o===1/0?c+=n:c=c*(o-n)+n;return c}(e,i[t],i[t+1],o[t],o[t+1],l,a,s,n.map)}};var hg=1.70158,fg=1.525*hg,pg=hg+1,gg=2*Math.PI/3,mg=2*Math.PI/4.5,bg=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},vg={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>pg*e*e*e-hg*e*e,easeOutBack:e=>1+pg*Math.pow(e-1,3)+hg*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-fg)/2:(Math.pow(2*e-2,2)*((fg+1)*(2*e-2)+fg)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*gg),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*gg)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*mg)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*mg)/2+1,easeInBounce:e=>1-bg(1-e),easeOutBounce:bg,easeInOutBounce:e=>e<.5?(1-bg(1-2*e))/2:(1+bg(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,o="end"===t?Math.floor(n):Math.ceil(n);return i=0,a=1,s=o/e,Math.min(Math.max(s,i),a);var i,a,s}},yg=Symbol.for("FluidValue.get"),xg=Symbol.for("FluidValue.observers"),wg=e=>Boolean(e&&e[yg]),$g=e=>e&&e[yg]?e[yg]():e,Cg=e=>e[xg]||null;function Sg(e,t){const r=e[xg];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var kg=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");_g(this,e)}},_g=(e,t)=>Og(e,yg,t);function Dg(e,t){if(e[yg]){let r=e[xg];r||Og(e,xg,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Fg(e,t){const r=e[xg];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[xg]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Eg,Og=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Tg=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ig=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Mg=new RegExp(`(${Tg.source})(%|[a-z]+)`,"i"),Ag=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Bg=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,zg=e=>{const[t,r]=jg(e);if(!t||Mp())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Bg.test(r)?zg(r):r||e},jg=e=>{const t=Bg.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},Rg=(e,t,r,n,o)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,Lg=e=>{Eg||(Eg=Ap?new RegExp(`(${Object.keys(Ap).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>$g(e).replace(Bg,zg).replace(Ig,dg).replace(Eg,dg))),r=t.map((e=>e.match(Tg).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),o=n.map((t=>ug({...e,output:t})));return e=>{const r=!Mg.test(t[0])&&t.find((e=>Mg.test(e)))?.replace(Tg,"");let n=0;return t[0].replace(Tg,(()=>`${o[n++](e)}${r||""}`)).replace(Ag,Rg)}},Pg="react-spring: ",Hg=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Pg}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Ng=Hg(console.warn);var Wg=Hg(console.warn);function Vg(e){return Sp.str(e)&&("#"==e[0]||/\d/.test(e)||!Mp()&&Bg.test(e)||e in(Ap||{}))}var Yg=Mp()?u:h;function Ug(){const e=a()[1],t=(()=>{const e=i(!1);return Yg((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var qg=e=>u(e,Kg),Kg=[];function Zg(e){const t=i();return u((()=>{t.current=e})),t.current}var Gg=Symbol.for("Animated:node"),Qg=e=>e&&e[Gg],Xg=(e,t)=>((e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}))(e,Gg,t),Jg=e=>e&&e[Gg]&&e[Gg].getPayload(),em=class{constructor(){Xg(this,this)}getPayload(){return this.payload||[]}},tm=class extends em{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Sp.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new tm(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Sp.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Sp.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},rm=class extends tm{constructor(e){super(0),this._string=null,this._toString=ug({output:[e,e]})}static create(e){return new rm(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Sp.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ug({output:[this.getValue(),e]})),this._value=0,super.reset()}},nm={dependencies:null},om=class extends em{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Dp(this.source,((r,n)=>{var o;(o=r)&&o[Gg]===o?t[n]=r.getValue(e):wg(r)?t[n]=$g(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&_p(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Dp(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){nm.dependencies&&wg(e)&&nm.dependencies.add(e);const t=Jg(e);t&&_p(t,(e=>this.add(e)))}},im=class extends om{constructor(e){super(e)}static create(e){return new im(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(am)),!0)}};function am(e){return(Vg(e)?rm:tm).create(e)}function sm(e){const t=Qg(e);return t?t.constructor:Sp.arr(e)?im:Vg(e)?rm:tm}var lm=(e,t)=>{const r=!Sp.fun(e)||e.prototype&&e.prototype.isReactComponent;return x(((o,a)=>{const s=i(null),l=r&&f((e=>{s.current=function(e,t){e&&(Sp.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,d]=function(e,t){const r=new Set;nm.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new om(e),nm.dependencies=null,[e,r]}(o,t),h=Ug(),p=()=>{const e=s.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},g=new cm(p,d),m=i();Yg((()=>(m.current=g,_p(d,(e=>Dg(e,g))),()=>{m.current&&(_p(m.current.deps,(e=>Fg(e,m.current))),ap.cancel(m.current.update))}))),u(p,[]),qg((()=>()=>{const e=m.current;_p(e.deps,(t=>Fg(t,e)))}));const b=t.getComponentProps(c.getValue());return n.createElement(e,{...b,ref:l})}))},cm=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&ap.write(this.update)}};var dm=Symbol.for("AnimatedComponent"),um=e=>Sp.str(e)?e:e&&Sp.str(e.displayName)?e.displayName:Sp.fun(e)&&e.name||null;function hm(e,...t){return Sp.fun(e)?e(...t):e}var fm=(e,t)=>!0===e||!!(t&&e&&(Sp.fun(e)?e(t):Fp(e).includes(t))),pm=(e,t)=>Sp.obj(e)?t&&e[t]:e,gm=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,mm=e=>e,bm=(e,t=mm)=>{let r=vm;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const o of r){const r=t(e[o],o);Sp.und(r)||(n[o]=r)}return n},vm=["config","onProps","onStart","onChange","onPause","onResume","onRest"],ym={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function xm(e){const t=function(e){const t={};let r=0;if(Dp(e,((e,n)=>{ym[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Dp(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function wm(e){return e=$g(e),Sp.arr(e)?e.map(wm):Vg(e)?op.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function $m(e){return Sp.fun(e)||Sp.arr(e)&&Sp.obj(e[0])}var Cm={tension:170,friction:26,mass:1,damping:1,easing:vg.linear,clamp:!1},Sm=class{constructor(){this.velocity=0,Object.assign(this,Cm)}};function km(e,t){if(Sp.und(t.decay)){const r=!Sp.und(t.tension)||!Sp.und(t.friction);!r&&Sp.und(t.frequency)&&Sp.und(t.damping)&&Sp.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var _m=[],Dm=class{constructor(){this.changed=!1,this.values=_m,this.toValues=null,this.fromValues=_m,this.config=new Sm,this.immediate=!1}};function Fm(e,{key:t,props:r,defaultProps:n,state:o,actions:i}){return new Promise(((a,s)=>{let l,c,d=fm(r.cancel??n?.cancel,t);if(d)f();else{Sp.und(r.pause)||(o.paused=fm(r.pause,t));let e=n?.pause;!0!==e&&(e=o.paused||fm(e,t)),l=hm(r.delay||0,t),e?(o.resumeQueue.add(h),i.pause()):(i.resume(),h())}function u(){o.resumeQueue.add(h),o.timeouts.delete(c),c.cancel(),l=c.time-ap.now()}function h(){l>0&&!op.skipAnimation?(o.delayed=!0,c=ap.setTimeout(f,l),o.pauseQueue.add(u),o.timeouts.add(c)):f()}function f(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(u),o.timeouts.delete(c),e<=(o.cancelId||0)&&(d=!0);try{i.start({...r,callId:e,cancel:d},a)}catch(e){s(e)}}}))}var Em=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Im(e.get()):t.every((e=>e.noop))?Om(e.get()):Tm(e.get(),t.every((e=>e.finished))),Om=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Tm=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Im=e=>({value:e,cancelled:!0,finished:!1});function Mm(e,t,r,n){const{callId:o,parentId:i,onRest:a}=t,{asyncTo:s,promise:l}=r;return i||e!==s||t.reset?r.promise=(async()=>{r.asyncId=o,r.asyncTo=e;const c=bm(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const h=new Promise(((e,t)=>(d=e,u=t))),f=e=>{const t=o<=(r.cancelId||0)&&Im(n)||o!==r.asyncId&&Tm(n,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const i=new Bm,a=new zm;return(async()=>{if(op.skipAnimation)throw Am(r),a.result=Tm(n,!1),u(a),a;f(i);const s=Sp.obj(e)?{...e}:{...t,to:e};s.parentId=o,Dp(c,((e,t)=>{Sp.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return f(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(op.skipAnimation)return Am(r),Tm(n,!1);try{let t;t=Sp.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(d),h]),g=Tm(n.get(),!0,!1)}catch(e){if(e instanceof Bm)g=e.result;else{if(!(e instanceof zm))throw e;g=e.result}}finally{o==r.asyncId&&(r.asyncId=i,r.asyncTo=i?s:void 0,r.promise=i?l:void 0)}return Sp.fun(a)&&ap.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function Am(e,t){Ep(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Bm=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},zm=class extends Error{constructor(){super("SkipAnimationSignal")}},jm=e=>e instanceof Lm,Rm=1,Lm=class extends kg{constructor(){super(...arguments),this.id=Rm++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Qg(this);return e&&e.getValue()}to(...e){return op.to(this,e)}interpolate(...e){return Ng(`${Pg}The "interpolate" function is deprecated in v9 (use "to" instead)`),op.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Sg(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Np.sort(this),Sg(this,{type:"priority",parent:this,priority:e})}},Pm=Symbol.for("SpringPhase"),Hm=e=>(1&e[Pm])>0,Nm=e=>(2&e[Pm])>0,Wm=e=>(4&e[Pm])>0,Vm=(e,t)=>t?e[Pm]|=3:e[Pm]&=-3,Ym=(e,t)=>t?e[Pm]|=4:e[Pm]&=-5,Um=class extends Lm{constructor(e,t){if(super(),this.animation=new Dm,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Sp.und(e)||!Sp.und(t)){const r=Sp.obj(e)?{...e}:{...t,from:e};Sp.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Nm(this)||this._state.asyncTo)||Wm(this)}get goal(){return $g(this.animation.to)}get velocity(){const e=Qg(this);return e instanceof tm?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Hm(this)}get isAnimating(){return Nm(this)}get isPaused(){return Wm(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:o}=n;const{config:i}=n,a=Jg(n.to);!a&&wg(n.to)&&(o=Fp($g(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==rm?1:a?a[l].lastPosition:o[l];let d=n.immediate,u=c;if(!d){if(u=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],o=null!=s.v0?s.v0:s.v0=Sp.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Sp.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);u=r+o/(1-e)*(1-n),d=Math.abs(s.lastPosition-u)<=h,a=o*n}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!Sp.und(n),f=r==c?s.v0>0:r<c;let p,g=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(a)>t,p||(d=Math.abs(c-u)<=h,!d));++e){l&&(g=u==c||u>c==f,g&&(a=-a*n,u=c));a+=(1e-6*-i.tension*(u-c)+.001*-i.friction*a)/i.mass*m,u+=a*m}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+i.easing(n)*(c-r),a=(u-s.lastPosition)/e,d=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}a&&!a[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,i.round)&&(r=!0)}));const s=Qg(this),l=s.getValue();if(t){const e=$g(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return ap.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Nm(this)){const{to:e,config:t}=this.animation;ap.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Sp.und(e)?(r=this.queue||[],this.queue=[]):r=[Sp.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Em(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Am(this._state,e&&this._lastCallId),ap.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Sp.obj(r)?r[t]:r,(null==r||$m(r))&&(r=void 0),n=Sp.obj(n)?n[t]:n,null==n&&(n=void 0);const o={to:r,from:n};return Hm(this)||(e.reverse&&([r,n]=[n,r]),n=$g(n),Sp.und(n)?Qg(this)||this._set(r):this._set(n)),o}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,bm(e,((e,t)=>/^on/.test(t)?pm(e,r):e))),Jm(this,e,"onProps"),eb(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return Fm(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{Wm(this)||(Ym(this,!0),Ip(i.pauseQueue),eb(this,"onPause",Tm(this,qm(this,this.animation.to)),this))},resume:()=>{Wm(this)&&(Ym(this,!1),Nm(this)&&this._resume(),Ip(i.resumeQueue),eb(this,"onResume",Tm(this,qm(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=Km(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Im(this));const n=!Sp.und(e.to),o=!Sp.und(e.from);if(n||o){if(!(t.callId>this._lastToId))return r(Im(this));this._lastToId=t.callId}const{key:i,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!o||n||t.default&&!Sp.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const h=!kp(u,c);h&&(s.from=u),u=$g(u);const f=!kp(d,l);f&&this._focus(d);const p=$m(t.to),{config:g}=s,{decay:m,velocity:b}=g;(n||o)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(km(r={...r},t),t={...r,...t}),km(e,t),Object.assign(e,t);for(const t in Cm)null==e[t]&&(e[t]=Cm[t]);let{frequency:n,damping:o}=e;const{mass:i}=e;Sp.und(n)||(n<.01&&(n=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*o*i/n)}(g,hm(t.config,i),t.config!==a.config?hm(a.config,i):void 0);let v=Qg(this);if(!v||Sp.und(d))return r(Tm(this,!0));const y=Sp.und(t.reset)?o&&!t.default:!Sp.und(u)&&fm(t.reset,i),x=y?u:this.get(),w=wm(d),$=Sp.num(w)||Sp.arr(w)||Vg(w),C=!p&&(!$||fm(a.immediate||t.immediate,i));if(f){const e=sm(d);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let k=wg(d),_=!1;if(!k){const e=y||!Hm(this)&&h;(f||e)&&(_=kp(wm(x),w),k=!_),(kp(s.immediate,C)||C)&&kp(g.decay,m)&&kp(g.velocity,b)||(k=!0)}if(_&&Nm(this)&&(s.changed&&!y?k=!0:k||this._stop(l)),!p&&((k||wg(l))&&(s.values=v.getPayload(),s.toValues=wg(d)?null:S==rm?[1]:Fp(w)),s.immediate!=C&&(s.immediate=C,C||y||this._set(l)),k)){const{onRest:e}=s;_p(Xm,(e=>Jm(this,t,e)));const n=Tm(this,qm(this,l));Ip(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&ap.batchedUpdates((()=>{s.changed=!y,e?.(n,this),y?hm(a.onRest,n):s.onStart?.(n,this)}))}y&&this._set(x),p?r(Mm(t.to,t,this._state,this)):k?this._start():Nm(this)&&!f?this._pendingCalls.add(r):r(Om(x))}_focus(e){const t=this.animation;e!==t.to&&(Cg(this)&&this._detach(),t.to=e,Cg(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;wg(t)&&(Dg(t,this),jm(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;wg(e)&&Fg(e,this)}_set(e,t=!0){const r=$g(e);if(!Sp.und(r)){const e=Qg(this);if(!e||!kp(r,e.getValue())){const n=sm(r);e&&e.constructor==n?e.setValue(r):Xg(this,n.create(r)),e&&ap.batchedUpdates((()=>{this._onChange(r,t)}))}}return Qg(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,eb(this,"onStart",Tm(this,qm(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),hm(this.animation.onChange,e,this)),hm(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Qg(this).reset($g(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Nm(this)||(Vm(this,!0),Wm(this)||this._resume())}_resume(){op.skipAnimation?this.finish():Np.start(this)}_stop(e,t){if(Nm(this)){Vm(this,!1);const r=this.animation;_p(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Sg(this,{type:"idle",parent:this});const n=t?Im(this.get()):Tm(this.get(),qm(this,e??r.to));Ip(this._pendingCalls,n),r.changed&&(r.changed=!1,eb(this,"onRest",n,this))}}};function qm(e,t){const r=wm(t);return kp(wm(e.get()),r)}function Km(e,t=e.loop,r=e.to){const n=hm(t);if(n){const o=!0!==n&&xm(n),i=(o||e).reverse,a=!o||o.reset;return Zm({...e,loop:t,default:!1,pause:void 0,to:!i||$m(r)?r:void 0,from:a?e.from:void 0,reset:a,...o})}}function Zm(e){const{to:t,from:r}=e=xm(e),n=new Set;return Sp.obj(t)&&Qm(t,n),Sp.obj(r)&&Qm(r,n),e.keys=n.size?Array.from(n):null,e}function Gm(e){const t=Zm(e);return Sp.und(t.default)&&(t.default=bm(t)),t}function Qm(e,t){Dp(e,((e,r)=>null!=e&&t.add(r)))}var Xm=["onStart","onRest","onChange","onPause","onResume"];function Jm(e,t,r){e.animation[r]=t[r]!==gm(t,r)?pm(t[r],e.key):void 0}function eb(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var tb=["onStart","onChange","onRest"],rb=1,nb=class{constructor(e,t){this.id=rb++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Sp.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(Zm(e)),this}start(e){let{queue:t}=this;return e?t=Fp(e).map(Zm):this.queue=[],this._flush?this._flush(this,t):(db(this,t),ob(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;_p(Fp(t),(t=>r[t].stop(!!e)))}else Am(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Sp.und(e))this.start({pause:!0});else{const t=this.springs;_p(Fp(e),(e=>t[e].pause()))}return this}resume(e){if(Sp.und(e))this.start({pause:!1});else{const t=this.springs;_p(Fp(e),(e=>t[e].resume()))}return this}each(e){Dp(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,o=this._changed.size>0;(n&&!this._started||o&&!this._started)&&(this._started=!0,Ep(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,a=o||i&&r.size?this.get():null;o&&t.size&&Ep(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),i&&(this._started=!1,Ep(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}ap.onFrame(this._onFrame)}};function ob(e,t){return Promise.all(t.map((t=>ib(e,t)))).then((t=>Em(e,t)))}async function ib(e,t,r){const{keys:n,to:o,from:i,loop:a,onRest:s,onResolve:l}=t,c=Sp.obj(t.default)&&t.default;a&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const d=Sp.arr(o)||Sp.fun(o)?o:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):_p(tb,(r=>{const n=t[r];if(Sp.fun(n)){const o=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=o.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):o.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Ip(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===gm(t,"cancel");(d||f&&u.asyncId)&&h.push(Fm(++e._lastAsyncId,{props:t,state:u,actions:{pause:Cp,resume:Cp,start(t,r){f?(Am(u,e._lastAsyncId),r(Im(e))):(t.onRest=s,r(Mm(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=Em(e,await Promise.all(h));if(a&&p.finished&&(!r||!p.noop)){const r=Km(t,a,o);if(r)return db(e,[r]),ib(e,r,!0)}return l&&ap.batchedUpdates((()=>l(p,e,e.item))),p}function ab(e,t){const r={...e.springs};return t&&_p(Fp(t),(e=>{Sp.und(e.keys)&&(e=Zm(e)),Sp.obj(e.to)||(e={...e,to:void 0}),cb(r,e,(e=>lb(e)))})),sb(e,r),r}function sb(e,t){Dp(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Dg(t,e))}))}function lb(e,t){const r=new Um;return r.key=e,t&&Dg(r,t),r}function cb(e,t,r){t.keys&&_p(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function db(e,t){_p(t,(t=>{cb(e.springs,t,(t=>lb(t,e)))}))}var ub,hb,fb=({children:e,...t})=>{const r=w(pb),o=t.pause||!!r.pause,s=t.immediate||!!r.immediate;t=function(e,t){const[r]=a((()=>({inputs:t,result:e()}))),n=i(),o=n.current;let s=o;if(s){const r=Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,s.inputs));r||(s={inputs:t,result:e()})}else s=r;return u((()=>{n.current=s,o==r&&(r.inputs=r.result=void 0)}),[s]),s.result}((()=>({pause:o,immediate:s})),[o,s]);const{Provider:l}=pb;return n.createElement(l,{value:t},e)},pb=(ub=fb,hb={},Object.assign(ub,n.createContext(hb)),ub.Provider._context=ub,ub.Consumer._context=ub,ub);fb.Provider=pb.Provider,fb.Consumer=pb.Consumer;var gb=()=>{const e=[],t=function(t){Wg(`${Pg}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return _p(e,((e,o)=>{if(Sp.und(t))n.push(e.start());else{const i=r(t,e,o);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return _p(e,(e=>e.pause(...arguments))),this},t.resume=function(){return _p(e,(e=>e.resume(...arguments))),this},t.set=function(t){_p(e,((e,r)=>{const n=Sp.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return _p(e,((e,n)=>{if(Sp.und(t))r.push(e.start());else{const o=this._getProps(t,e,n);o&&r.push(e.start(o))}})),r},t.stop=function(){return _p(e,(e=>e.stop(...arguments))),this},t.update=function(t){return _p(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Sp.fun(e)?e(r,t):e};return t._getProps=r,t};function mb(e,t){const r=Sp.fun(e),[[n],o]=function(e,t,r){const n=Sp.fun(t)&&t;n&&!r&&(r=[]);const o=g((()=>n||3==arguments.length?gb():void 0),[]),a=i(0),s=Ug(),l=g((()=>({ctrls:[],queue:[],flush(e,t){const r=ab(e,t),n=a.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]));return n?ob(e,t):new Promise((n=>{sb(e,r),l.queue.push((()=>{n(ob(e,t))})),s()}))}})),[]),c=i([...l.ctrls]),d=[],u=Zg(e)||0;function h(e,r){for(let o=e;o<r;o++){const e=c.current[o]||(c.current[o]=new nb(null,l.flush)),r=n?n(o,e):t[o];r&&(d[o]=Gm(r))}}g((()=>{_p(c.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),c.current.length=e,h(u,e)}),[e]),g((()=>{h(0,Math.min(u,e))}),r);const f=c.current.map(((e,t)=>ab(e,d[t]))),p=w(fb),m=Zg(p),b=p!==m&&function(e){for(const t in e)return!0;return!1}(p);Yg((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],_p(e,(e=>e()))),_p(c.current,((e,t)=>{o?.add(e),b&&e.start({default:p});const r=d[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),qg((()=>()=>{_p(l.ctrls,(e=>e.stop(!0)))}));const v=f.map((e=>({...e})));return o?[v,o]:v}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,o]:n}var bb=class extends Lm{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=ug(...t);const r=this._get(),n=sm(r);Xg(this,n.create(r))}advance(e){const t=this._get();kp(t,this.get())||(Qg(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&yb(this._active)&&xb(this)}_get(){const e=Sp.arr(this.source)?this.source.map($g):Fp($g(this.source));return this.calc(...e)}_start(){this.idle&&!yb(this._active)&&(this.idle=!1,_p(Jg(this),(e=>{e.done=!1})),op.skipAnimation?(ap.batchedUpdates((()=>this.advance())),xb(this)):Np.start(this))}_attach(){let e=1;_p(Fp(this.source),(t=>{wg(t)&&Dg(t,this),jm(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){_p(Fp(this.source),(e=>{wg(e)&&Fg(e,this)})),this._active.clear(),xb(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Fp(this.source).reduce(((e,t)=>Math.max(e,(jm(t)?t.priority:0)+1)),0))}};function vb(e){return!1!==e.idle}function yb(e){return!e.size||Array.from(e).every(vb)}function xb(e){e.idle||(e.idle=!0,_p(Jg(e),(e=>{e.done=!0})),Sg(e,{type:"idle",parent:e}))}op.assign({createStringInterpolator:Lg,to:(e,t)=>new bb(e,t)});var wb=/^--/;function $b(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||wb.test(e)||Sb.hasOwnProperty(e)&&Sb[e]?(""+t).trim():t+"px"}var Cb={};var Sb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kb=["Webkit","Ms","Moz","O"];Sb=Object.keys(Sb).reduce(((e,t)=>(kb.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Sb);var _b=/^(matrix|translate|scale|rotate|skew)/,Db=/^(translate)/,Fb=/^(rotate|skew)/,Eb=(e,t)=>Sp.num(e)&&0!==e?e+t:e,Ob=(e,t)=>Sp.arr(e)?e.every((e=>Ob(e,t))):Sp.num(e)?e===t:parseFloat(e)===t,Tb=class extends om{constructor({x:e,y:t,z:r,...n}){const o=[],i=[];(e||t||r)&&(o.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>Eb(e,"px"))).join(",")})`,Ob(e,0)]))),Dp(n,((e,t)=>{if("transform"===t)o.push([e||""]),i.push((e=>[e,""===e]));else if(_b.test(t)){if(delete n[t],Sp.und(e))return;const r=Db.test(t)?"px":Fb.test(t)?"deg":"";o.push(Fp(e)),i.push("rotate3d"===t?([e,t,n,o])=>[`rotate3d(${e},${t},${n},${Eb(o,r)})`,Ob(o,0)]:e=>[`${t}(${e.map((e=>Eb(e,r))).join(",")})`,Ob(e,t.startsWith("scale")?1:0)])}})),o.length&&(n.transform=new Ib(o,i)),super(n)}},Ib=class extends kg{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return _p(this.inputs,((r,n)=>{const o=$g(r[0]),[i,a]=this.transforms[n](Sp.arr(o)?o:r.map($g));e+=" "+i,t=t&&a})),t?"none":e}observerAdded(e){1==e&&_p(this.inputs,(e=>_p(e,(e=>wg(e)&&Dg(e,this)))))}observerRemoved(e){0==e&&_p(this.inputs,(e=>_p(e,(e=>wg(e)&&Fg(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Sg(this,e)}};op.assign({batchedUpdates:K,createStringInterpolator:Lg,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Mb=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new om(e),getComponentProps:n=e=>e}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=um(e)||"Anonymous";return(e=Sp.str(e)?i[e]||(i[e]=lm(e,o)):e[dm]||(e[dm]=lm(e,o))).displayName=`Animated(${t})`,e};return Dp(e,((t,r)=>{Sp.arr(e)&&(r=um(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:o,scrollTop:i,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),d=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Cb[t]||(Cb[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(const t in n)if(n.hasOwnProperty(t)){const r=$b(t,n[t]);wb.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==i&&(e.scrollTop=i),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Tb(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Ab=Mb.animated;const Bb=D`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,zb=S.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>k`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,jb=k`
    animation: ${Ri["duration-150"]} ${Ri["ease-default"]} ${Bb};
    width: 100%;
    height: 100%;
    transition: color ${Ri["duration-150"]} ${Ri["ease-default"]};
`,Rb=S(ne)`
    ${jb}
    color: ${zi["icon-primary-subtlest"]};
`,Lb=S(oe)`
    ${jb}
    color: ${zi["icon-disabled-subtle"]};
`,Pb=S(ie)`
    ${jb}
    color: ${e=>e.$disabled?zi["icon-disabled-subtle"](e):zi["icon-selected"](e)};
`,Hb=S(ae)`
    ${jb}
    color: ${e=>e.$disabled?zi["icon-disabled-subtle"](e):zi["icon-selected"](e)};
`,Nb=S.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${Rb},
        &:hover
        + ${Pb},
        &:hover
        + ${Hb} {
        color: ${e=>!e.disabled&&zi["icon-hover"](e)};
    }
`,Wb=S(Ab.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Vb=S.ul`
    border-bottom-left-radius: ${Hi.sm};
    border-bottom-right-radius: ${Hi.sm};
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: ${Pi["spacing-8"]};
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${zi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }

    ${Wi.MaxWidth.sm} {
        max-height: 15rem;
    }
`,Yb=S.li`
    :hover,
    :focus,
    :active {
        background: ${zi["bg-hover"]};
    }
    ${e=>{if(e.$checked)return k`
                background: ${zi["bg-selected"]};
                :hover,
                :focus,
                :active {
                    background: ${zi["bg-selected-hover"]};
                }
            `}}
`,Ub=S.button`
    display: flex;
    ${e=>e.$multiSelect?k`
                padding: ${Pi["spacing-8"]} ${Pi["spacing-16"]};
            `:k`
                padding: 15px ${Pi["spacing-16"]}; // TODO: confirm vertical spacing
                align-items: center;
            `}
    margin: 0 -${Pi["spacing-8"]};
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${zi["border-focus"]};
    }

    span {
        margin-bottom: 0;
    }
`,qb=k`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Kb=S.div`
    ${e=>"small"===e.$variant?ji["body-md-regular"]:ji["body-baseline-regular"]}
    color: ${zi.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&qb}
`,Zb=S.div`
    color: ${zi["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&qb}

    ${e=>"next-line"===e.$labelDisplayType?k`
                    ${ji["body-md-semibold"]}
                `:k`
                    ${ji["body-baseline-regular"]}
                `}
`,Gb=S.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return k`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return k`
                    ${Kb} {
                        display: inline;
                    }

                    ${Zb} {
                        display: inline;
                        margin-left: ${Pi["spacing-8"]};
                    }
                `}}}
`,Qb=S.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,Xb=S.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Jb=S((r=>{var{className:n,checked:o,disabled:a,indeterminate:s,onChange:l,onKeyPress:c,displaySize:d="default"}=r,h=_e(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const f=i(null);u((()=>{f.current&&(f.current.indeterminate=null!=s&&s)}),[s]);const p=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;l&&l(e),c&&c(t)}};return t(zb,{className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":s?"mixed":o,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:p,$displaySize:d,$disabled:a,$unchecked:!(s||o||a),children:[e(Nb,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:o,ref:f,tabIndex:-1,onChange:p,disabled:a},h)),s?e(Hb,{$disabled:a,"data-testid":"indeterminate"}):o?e(Pb,{$disabled:a,"data-testid":"checkmark"}):a?e(Lb,{"data-testid":"empty-disabled-checkbox"}):e(Rb,{$disabled:a,"data-testid":"empty-checkbox"})]})}))`
    flex-shrink: 0;
    margin-right: ${Pi["spacing-16"]};
`,ev=S.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${Pi["spacing-16"]} 0 ${Pi["spacing-8"]} 0;
`,tv=S.button`
    ${e=>"small"===e.$variant?ji["body-md-semibold"]:ji["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${zi["text-primary"]};
`,rv=S.div`
    width: 100%;
    display: flex;
    padding: 15px ${Pi["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${e=>"small"===e.$variant?ji["body-md-regular"]:ji["body-baseline-regular"]}
`,nv=S(ce)`
    height: 1em;
    width: 1em;
    margin-right: ${Pi["spacing-4"]};
    color: ${zi["icon-error"]};
`,ov=S(xs)`
    margin-right: ${Pi["spacing-4"]};
    color: ${zi.icon};
`,iv=e=>"small"===e?1:1.375,av=e=>k`
        height: ${iv(e)}rem;
        width: ${iv(e)}rem;
    `,sv=S.li`
    background: ${zi["bg-strong"]};
    display: flex;
    border-radius: ${Hi.sm};
    align-items: center;
`,lv=S(Pl)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 ${Pi["spacing-8"]} 0 0;
    width: 100%;
`,cv=S(de)`
    ${e=>av(e.$variant)}
    margin: 0 ${Pi["spacing-8"]};
    color: ${zi.icon};
`,dv=S(ba)`
    ${e=>av(e.$variant)}
    padding: 0;
    margin: 0 ${Pi["spacing-8"]};
    color: ${zi.icon};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return k`
                svg {
                    ${av(e.$variant)}
                }
            `}}
`,uv=x(((r,n)=>{const{onClear:o}=r,i=_e(r,["onClear"]);return t(sv,{children:[e(cv,{$variant:r.variant}),e(lv,Object.assign({ref:n,$variant:r.variant},i)),i.value&&e(dv,{"aria-label":"Clear search",focusOutline:"browser",onClick:o,$variant:r.variant,children:e(se,{})})]},"search")})),hv=n=>{var{listItems:o,listExtractor:s,valueExtractor:l,onSelectItem:c,listStyleWidth:d,visible:h,enableSearch:f,searchPlaceholder:p="Search",onSearch:g,searchFunction:m,onDismiss:b,disableItemFocus:v,multiSelect:y,selectedItems:x,onSelectAll:w,onRetry:$,itemsLoadState:C="success",itemTruncationType:S="end",itemMaxLines:k=2,labelDisplayType:_="inline",renderListItem:D,onBlur:F,hideNoResultsDisplay:E,renderCustomCallToAction:O,variant:T="default"}=n,I=_e(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[M,A]=a(0),[B,z]=a(""),[j,R]=a(null!=o?o:[]),[L,P]=a(0),H=mb({height:L}),N=i(null),W=i(null),V=i([]),Y=i(null),U=i(null),q=i(M),K=i(j),Z=e=>{q.current=e,A(e)},G=e=>{K.current=e,R(e)};u((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),u((()=>{ee(B)}),[B]),u((()=>{if(z(""),h){if(setTimeout((()=>{P(te())})),v)return;Y&&Y.current?(Y.current.focus(),Z(-1)):V.current[M]&&V.current[M].focus()}else P(0)}),[h]),u((()=>{if(h){const e=te();P(e)}}),[j,C]),u((()=>{G(null!=o?o:[]),z(""),Z(0)}),[o]);const Q=e=>{const t=s?s(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},X=e=>{if("inline"!==_)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return tt.getTextWidth(e,"1.125rem 'Open Sans'")>t*k},J=e=>!!ep(x,(t=>rp(t,e))),ee=e=>{if(""===e)G(null!=o?o:[]);else if(m){const t=m(e);G(t)}else{const t=null==o?void 0:o.filter((t=>{const{title:r,secondaryLabel:n}=Q(t),o=e.trim().toLowerCase();return r.includes(o)||n&&n.includes(o)}));G(null!=t?t:[])}},te=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),re=e=>{var t,r;if(N&&N.current.contains(e.target))switch(e.code){case"ArrowDown":if(q.current<K.current.length-1){const e=q.current+1;null===(t=V.current[e])||void 0===t||t.focus(),Z(e)}break;case"ArrowUp":if(q.current>0){const e=q.current-1;null===(r=V.current[e])||void 0===r||r.focus(),Z(q.current-1)}break;case"Escape":b&&b(!0)}},ne=(e,t)=>{e.preventDefault(),c&&c(t,(e=>l?l(e):e)(t))},oe=e=>{const t=e.target.value;z(t),g&&g()},ie=()=>{var e;z(""),null===(e=Y.current)||void 0===e||e.focus(),g&&g()},ae=()=>{$&&$()},se=()=>{F&&F()},le=n=>t(r,{children:[e(Qb,{$maxLines:k,"aria-hidden":!0,children:n}),e(Xb,{$maxLines:k,"aria-hidden":!0,children:n})]}),ce=r=>{const{title:n,secondaryLabel:o}=Q(r),i=X(n),a=o&&X(o);return t(Gb,{$labelDisplayType:i||a?"next-line":_,children:[e(Kb,{$truncateType:S,$maxLines:k,$variant:T,"aria-label":n,children:"middle"===S&&i?le(n):n}),o&&e(Zb,{$truncateType:S,$maxLines:k,$labelDisplayType:_,"aria-label":o,children:"middle"===S&&a?le(o):o})]})},de=()=>{if(!$||"success"===C)return j.map(((r,n)=>e(Yb,{$checked:J(r)&&!y,children:t(Ub,{$hasNextLineLabel:"next-line"===_&&j.length>0&&s&&"string"!=typeof s(j[0]),onClick:e=>{ne(e,r)},ref:e=>V.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:y,onBlur:se,$variant:T,children:[y&&e(Jb,{checked:J(r),displaySize:"small"}),D?D(r,{selected:J(r)}):ce(r)]})},((e,t)=>`item_${t}__${l?l(e):e}`)(r,n))))},ue=()=>{if(x&&y&&j.length>0&&!B&&"success"===C)return e(ev,{children:e(tv,{onClick:w,type:"button",$variant:T,children:0===x.length?"Select all":"Clear all"})},"selectAll")},he=()=>{if(!E&&(B||!f)&&0===j.length&&"success"===C)return t(rv,{"data-testid":"list-no-results",$variant:T,children:[e(nv,{"data-testid":"no-result-icon",$variant:T}),"No results found."]},"noResults")},fe=()=>{if($&&"loading"===C)return t(rv,{"data-testid":"list-loading",$variant:T,children:[e(ov,{}),"Loading..."]},"loading")},pe=()=>{if($&&"fail"===C)return t(rv,{"data-testid":"list-fail",$variant:T,children:[e(nv,{"data-testid":"load-error-icon",$variant:T}),"Failed to load. ",e(tv,{onClick:ae,type:"button",$variant:T,children:"Try again."})]},"noResults")};return e(r,{children:t(Wb,{style:H,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:N,children:[(()=>{if(h)return t(Vb,Object.assign({ref:W,"data-testid":"dropdown-list",width:d,role:"list"},I,{children:[(f||m)&&"success"===C?e(uv,{ref:Y,onChange:oe,value:B,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:ie,variant:T}):null,ue(),he(),fe(),pe(),de()]}))})(),(()=>{if(h&&O)return e("div",{ref:U,"data-testid":"custom-cta",children:O(b,j)})})()]})})},fv=S.div`
    position: relative;
    display: flex;
    align-items: center;
    ${e=>{if(e.$expanded)return k`
                border-bottom: ${Li["width-010"]} ${Li.solid}
                    ${zi.border};
            `}}

    ${e=>e.$readOnly?k`
                border: 0;
                margin: 0;
            `:"right"===e.$position?k`
                        flex-direction: row-reverse;
                        margin: 0 ${Pi["spacing-16"]};
                    `:k`
                        flex-direction: row;
                        margin: 0 ${Pi["spacing-16"]};
                    `}
`,pv=S(ts)`
    padding: 0;
    width: auto;
`,gv=S.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${Pi["spacing-12"]};
`,mv=S.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Ri["duration-250"]} ${Ri["ease-default"]};
    margin: 0 ${Pi["spacing-12"]};
    display: flex;
    align-items: center;
`,bv=S(Q)`
    color: ${zi.icon};
    height: ${ji.Spec["body-size-baseline"]};
    width: ${ji.Spec["body-size-baseline"]};
`,vv=S.div`
    display: flex;
    flex: 1 1 auto;
`,yv=S(fa.BodyBL)`
    text-align: left;
    ${ca(2)}
    text-overflow: ellipsis;
`,xv=S(yv)`
    color: ${zi["text-subtler"]};
`,wv=S.div`
    width: 1px;
    background: ${zi.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return k`
                display: none;
            `}}

    ${e=>"right"===e.$position?k`
                    margin: 0 ${Pi["spacing-12"]};
                `:k`
                    margin: 0 ${Pi["spacing-12"]} 0 0;
                `}
`,$v=S(Rl)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${Pi["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Cv=S(Rl)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${Pi["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Sv=S(gd)``,kv=S.div`
    position: relative;
    display: flex;
    align-items: center;

    ${ji["body-baseline-regular"]}
    color: ${zi.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return k`
                color: ${zi["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?k`
                    margin-left: ${e.$readOnly?Pi["spacing-4"]:Pi["spacing-12"]};
                `:k`
                    margin-right: ${e.$readOnly?Pi["spacing-4"]:Pi["spacing-12"]};
                `};
`,_v=o.forwardRef(((n,o)=>{var{addon:s,error:l,onChange:c,readOnly:d,className:h,onBlur:f}=n,p=_e(n,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:g,options:m,enableSearch:b,searchFunction:v,searchPlaceholder:y,valueExtractor:x,listExtractor:w,displayValueExtractor:$,selectedOption:C,onSelectOption:S,onHideOptions:k,onShowOptions:_,"data-selector-testid":D}=s.attributes,{position:F}=s,[E,O]=a(C),[T,I]=a(!1),M=i(null);u((()=>{O(C)}),[C]);const A=()=>{if(E)return $?$(E):x?x(E):E.toString()},B=e=>{!e&&k&&k(),e&&_&&_()},z=e=>{e.preventDefault(),p.disabled||(I(!T),B(!T))},j=(e,t)=>{var r;O(e),I(!1),B(!1),M&&(null===(r=M.current)||void 0===r||r.focus()),S&&S(e,t)},R=e=>{c&&c(e)},L=()=>{f&&f()},P=()=>{var e;I(!1),B(!1),M&&(null===(e=M.current)||void 0===e||e.focus())};return t(cs,{className:h,show:T,error:l&&!T,disabled:p.disabled,readOnly:d,onBlur:()=>{I(!1),B(!1),L()},children:[t(fv,{$expanded:T,$readOnly:d,$position:F,children:[d?E?e(gv,{children:e(yv,{"data-testid":"selector-label",children:A()})}):null:e(pv,{ref:M,type:"button",disabled:p.disabled,"data-testid":D||"addon-selector",onClick:z,children:t(r,{children:[t(vv,{children:[g&&!E&&e(xv,{children:g}),E&&e(yv,{"data-testid":"selector-label",children:A()})]}),e(mv,{$expanded:T,children:e(bv,{})})]})}),e(wv,{$readOnly:d,$position:F}),e(Sv,Object.assign({ref:o},p,{readOnly:d,error:l,onChange:R,"data-testid":p["data-testid"]||"input",onBlur:L,styleType:"no-border"}))]}),m&&m.length>0?e(hv,{listItems:m,selectedItems:C?[C]:[],onSelectItem:j,valueExtractor:x,listExtractor:w,visible:T,enableSearch:b,searchFunction:v,searchPlaceholder:y,"data-testid":"dropdown-list",onBlur:L,onDismiss:P}):e(r,{})]})})),Dv=o.forwardRef(((r,n)=>{var{addon:o,error:i,className:a}=r,s=_e(r,["addon","error","className"]);const l=()=>e(Cv,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a,children:e(Sv,Object.assign({ref:n},s,{"data-testid":"input",styleType:"no-border"}))});if(!o)return l();{const{type:r="label",position:c="left"}=o,{allowClear:d}=s;switch(r){case"list":{const t=o.attributes;return t.options&&t.options.length>0?e(_v,Object.assign({ref:n,addon:o,error:i,className:a},s)):l()}case"custom":{const r=o.attributes;return r.children?t($v,{$error:i,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[e(kv,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.children}),e(Sv,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}default:{const r=o.attributes;return r.value?t($v,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[e(kv,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.value}),e(Sv,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}}}})),Fv=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i="form-field-group","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Qa,{id:i,label:n,errorMessage:o,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(Dv,Object.assign({ref:r,id:`${i}-base`,"data-testid":s||i,error:!!o},y))})})),Ev=S(Dv)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":Pi["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,Ov=S.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=zi.icon,$activeColor:r=zi["icon-primary"]})=>e?t:r};
    padding: ${Pi["spacing-12"]} ${Pi["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,Tv=S.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,Iv=S(fa.BodyBL)`
    color: ${zi["text-subtler"]};
`,Mv=S(xs)`
    margin-right: ${Pi["spacing-8"]};
    color: ${zi.icon};
`,Av=S.span`
    color: ${zi["text-primary"]};
    text-decoration: underline;
    font-weight: ${ji.Spec["weight-semibold"]};
`,Bv=S.span`
    display: flex;
    align-items: center;
    margin-right: ${Pi["spacing-8"]};
`,zv=S(fe)`
    color: ${zi["icon-warning"]};
    margin-right: ${Pi["spacing-8"]};
    height: 1em;
    width: 1em;
`,jv=S.span`
    color: ${zi["text-warning"]};
`,Rv=S(Hl)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${ji["body-baseline-regular"]}

    :hover, :active, :focus {
        ${Av} {
            color: ${zi["text-hover"]};
        }
    }
`;var Lv,Pv,Hv={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Lv=Hv,Pv=Hv.exports,function(){var e,t="Expected a function",r="__lodash_hash_undefined__",n="__lodash_placeholder__",o=16,i=32,a=64,s=128,l=256,c=1/0,d=9007199254740991,u=NaN,h=4294967295,f=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",o],["flip",512],["partial",i],["partialRight",a],["rearg",l]],p="[object Arguments]",g="[object Array]",m="[object Boolean]",b="[object Date]",v="[object Error]",y="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",C="[object Object]",S="[object Promise]",k="[object RegExp]",_="[object Set]",D="[object String]",F="[object Symbol]",E="[object WeakMap]",O="[object ArrayBuffer]",T="[object DataView]",I="[object Float32Array]",M="[object Float64Array]",A="[object Int8Array]",B="[object Int16Array]",z="[object Int32Array]",j="[object Uint8Array]",R="[object Uint8ClampedArray]",L="[object Uint16Array]",P="[object Uint32Array]",H=/\b__p \+= '';/g,N=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,V=/&(?:amp|lt|gt|quot|#39);/g,Y=/[&<>"']/g,U=RegExp(V.source),q=RegExp(Y.source),K=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,G=/<%=([\s\S]+?)%>/g,Q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,X=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),re=/^\s+/,ne=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ie=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,ce=/\\(\\)?/g,de=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ue=/\w*$/,he=/^[-+]0x[0-9a-f]+$/i,fe=/^0b[01]+$/i,pe=/^\[object .+?Constructor\]$/,ge=/^0o[0-7]+$/i,me=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",$e="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",ke="\\ufe0e\\ufe0f",_e="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",De="['’]",Ee="["+xe+"]",Oe="["+_e+"]",Te="["+we+"]",Ie="\\d+",Me="["+$e+"]",Ae="["+Ce+"]",Be="[^"+xe+_e+Ie+$e+Ce+Se+"]",ze="\\ud83c[\\udffb-\\udfff]",je="[^"+xe+"]",Re="(?:\\ud83c[\\udde6-\\uddff]){2}",Le="[\\ud800-\\udbff][\\udc00-\\udfff]",Pe="["+Se+"]",He="\\u200d",Ne="(?:"+Ae+"|"+Be+")",We="(?:"+Pe+"|"+Be+")",Ve="(?:['’](?:d|ll|m|re|s|t|ve))?",Ye="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ue="(?:"+Te+"|"+ze+")?",qe="["+ke+"]?",Ke=qe+Ue+"(?:"+He+"(?:"+[je,Re,Le].join("|")+")"+qe+Ue+")*",Ze="(?:"+[Me,Re,Le].join("|")+")"+Ke,Ge="(?:"+[je+Te+"?",Te,Re,Le,Ee].join("|")+")",Qe=RegExp(De,"g"),Xe=RegExp(Te,"g"),Je=RegExp(ze+"(?="+ze+")|"+Ge+Ke,"g"),et=RegExp([Pe+"?"+Ae+"+"+Ve+"(?="+[Oe,Pe,"$"].join("|")+")",We+"+"+Ye+"(?="+[Oe,Pe+Ne,"$"].join("|")+")",Pe+"?"+Ne+"+"+Ve,Pe+"+"+Ye,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ie,Ze].join("|"),"g"),tt=RegExp("["+He+xe+we+ke+"]"),rt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ot=-1,it={};it[I]=it[M]=it[A]=it[B]=it[z]=it[j]=it[R]=it[L]=it[P]=!0,it[p]=it[g]=it[O]=it[m]=it[T]=it[b]=it[v]=it[y]=it[w]=it[$]=it[C]=it[k]=it[_]=it[D]=it[E]=!1;var at={};at[p]=at[g]=at[O]=at[T]=at[m]=at[b]=at[I]=at[M]=at[A]=at[B]=at[z]=at[w]=at[$]=at[C]=at[k]=at[_]=at[D]=at[F]=at[j]=at[R]=at[L]=at[P]=!0,at[v]=at[y]=at[E]=!1;var st={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},lt=parseFloat,ct=parseInt,dt="object"==typeof Fe&&Fe&&Fe.Object===Object&&Fe,ut="object"==typeof self&&self&&self.Object===Object&&self,ht=dt||ut||Function("return this")(),ft=Pv&&!Pv.nodeType&&Pv,pt=ft&&Lv&&!Lv.nodeType&&Lv,gt=pt&&pt.exports===ft,mt=gt&&dt.process,bt=function(){try{var e=pt&&pt.require&&pt.require("util").types;return e||mt&&mt.binding&&mt.binding("util")}catch(e){}}(),vt=bt&&bt.isArrayBuffer,yt=bt&&bt.isDate,xt=bt&&bt.isMap,wt=bt&&bt.isRegExp,$t=bt&&bt.isSet,Ct=bt&&bt.isTypedArray;function St(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function kt(e,t,r,n){for(var o=-1,i=null==e?0:e.length;++o<i;){var a=e[o];t(n,a,r(a),e)}return n}function _t(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Dt(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Ft(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Et(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}function Ot(e,t){return!(null==e||!e.length)&&Pt(e,t,0)>-1}function Tt(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}function It(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function Mt(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}function At(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function Bt(e,t,r,n){var o=null==e?0:e.length;for(n&&o&&(r=e[--o]);o--;)r=t(r,e[o],o,e);return r}function zt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var jt=Vt("length");function Rt(e,t,r){var n;return r(e,(function(e,r,o){if(t(e,r,o))return n=r,!1})),n}function Lt(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}function Pt(e,t,r){return t==t?function(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}(e,t,r):Lt(e,Nt,r)}function Ht(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function Nt(e){return e!=e}function Wt(e,t){var r=null==e?0:e.length;return r?qt(e,t)/r:u}function Vt(t){return function(r){return null==r?e:r[t]}}function Yt(t){return function(r){return null==t?e:t[r]}}function Ut(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r}function qt(t,r){for(var n,o=-1,i=t.length;++o<i;){var a=r(t[o]);a!==e&&(n=n===e?a:n+a)}return n}function Kt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Zt(e){return e?e.slice(0,hr(e)+1).replace(re,""):e}function Gt(e){return function(t){return e(t)}}function Qt(e,t){return It(t,(function(t){return e[t]}))}function Xt(e,t){return e.has(t)}function Jt(e,t){for(var r=-1,n=e.length;++r<n&&Pt(t,e[r],0)>-1;);return r}function er(e,t){for(var r=e.length;r--&&Pt(t,e[r],0)>-1;);return r}var tr=Yt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),rr=Yt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function nr(e){return"\\"+st[e]}function or(e){return tt.test(e)}function ir(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function ar(e,t){return function(r){return e(t(r))}}function sr(e,t){for(var r=-1,o=e.length,i=0,a=[];++r<o;){var s=e[r];s!==t&&s!==n||(e[r]=n,a[i++]=r)}return a}function lr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function cr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function dr(e){return or(e)?function(e){for(var t=Je.lastIndex=0;Je.test(e);)++t;return t}(e):jt(e)}function ur(e){return or(e)?function(e){return e.match(Je)||[]}(e):function(e){return e.split("")}(e)}function hr(e){for(var t=e.length;t--&&ne.test(e.charAt(t)););return t}var fr=Yt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),pr=function ne(xe){var we=(xe=null==xe?ht:pr.defaults(ht.Object(),xe,pr.pick(ht,nt))).Array,$e=xe.Date,Ce=xe.Error,Se=xe.Function,ke=xe.Math,_e=xe.Object,De=xe.RegExp,Fe=xe.String,Ee=xe.TypeError,Oe=we.prototype,Te=Se.prototype,Ie=_e.prototype,Me=xe["__core-js_shared__"],Ae=Te.toString,Be=Ie.hasOwnProperty,ze=0,je=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Re=Ie.toString,Le=Ae.call(_e),Pe=ht._,He=De("^"+Ae.call(Be).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ne=gt?xe.Buffer:e,We=xe.Symbol,Ve=xe.Uint8Array,Ye=Ne?Ne.allocUnsafe:e,Ue=ar(_e.getPrototypeOf,_e),qe=_e.create,Ke=Ie.propertyIsEnumerable,Ze=Oe.splice,Ge=We?We.isConcatSpreadable:e,Je=We?We.iterator:e,tt=We?We.toStringTag:e,st=function(){try{var e=hi(_e,"defineProperty");return e({},"",{}),e}catch(e){}}(),dt=xe.clearTimeout!==ht.clearTimeout&&xe.clearTimeout,ut=$e&&$e.now!==ht.Date.now&&$e.now,ft=xe.setTimeout!==ht.setTimeout&&xe.setTimeout,pt=ke.ceil,mt=ke.floor,bt=_e.getOwnPropertySymbols,jt=Ne?Ne.isBuffer:e,Yt=xe.isFinite,gr=Oe.join,mr=ar(_e.keys,_e),br=ke.max,vr=ke.min,yr=$e.now,xr=xe.parseInt,wr=ke.random,$r=Oe.reverse,Cr=hi(xe,"DataView"),Sr=hi(xe,"Map"),kr=hi(xe,"Promise"),_r=hi(xe,"Set"),Dr=hi(xe,"WeakMap"),Fr=hi(_e,"create"),Er=Dr&&new Dr,Or={},Tr=Ri(Cr),Ir=Ri(Sr),Mr=Ri(kr),Ar=Ri(_r),Br=Ri(Dr),zr=We?We.prototype:e,jr=zr?zr.valueOf:e,Rr=zr?zr.toString:e;function Lr(e){if(ts(e)&&!Va(e)&&!(e instanceof Wr)){if(e instanceof Nr)return e;if(Be.call(e,"__wrapped__"))return Li(e)}return new Nr(e)}var Pr=function(){function t(){}return function(r){if(!es(r))return{};if(qe)return qe(r);t.prototype=r;var n=new t;return t.prototype=e,n}}();function Hr(){}function Nr(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}function Wr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=h,this.__views__=[]}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function qr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function Kr(e){var t=this.__data__=new Yr(e);this.size=t.size}function Zr(e,t){var r=Va(e),n=!r&&Wa(e),o=!r&&!n&&Ka(e),i=!r&&!n&&!o&&cs(e),a=r||n||o||i,s=a?Kt(e.length,Fe):[],l=s.length;for(var c in e)!t&&!Be.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||yi(c,l))||s.push(c);return s}function Gr(t){var r=t.length;return r?t[Kn(0,r-1)]:e}function Qr(e,t){return Bi(Oo(e),sn(t,0,e.length))}function Xr(e){return Bi(Oo(e))}function Jr(t,r,n){(n!==e&&!Pa(t[r],n)||n===e&&!(r in t))&&on(t,r,n)}function en(t,r,n){var o=t[r];Be.call(t,r)&&Pa(o,n)&&(n!==e||r in t)||on(t,r,n)}function tn(e,t){for(var r=e.length;r--;)if(Pa(e[r][0],t))return r;return-1}function rn(e,t,r,n){return hn(e,(function(e,o,i){t(n,e,r(e),i)})),n}function nn(e,t){return e&&To(t,Ts(t),e)}function on(e,t,r){"__proto__"==t&&st?st(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(t,r){for(var n=-1,o=r.length,i=we(o),a=null==t;++n<o;)i[n]=a?e:_s(t,r[n]);return i}function sn(t,r,n){return t==t&&(n!==e&&(t=t<=n?t:n),r!==e&&(t=t>=r?t:r)),t}function ln(t,r,n,o,i,a){var s,l=1&r,c=2&r,d=4&r;if(n&&(s=i?n(t,o,i,a):n(t)),s!==e)return s;if(!es(t))return t;var u=Va(t);if(u){if(s=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&Be.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(t),!l)return Oo(t,s)}else{var h=gi(t),f=h==y||h==x;if(Ka(t))return So(t,l);if(h==C||h==p||f&&!i){if(s=c||f?{}:bi(t),!l)return c?function(e,t){return To(e,pi(e),t)}(t,function(e,t){return e&&To(t,Is(t),e)}(s,t)):function(e,t){return To(e,fi(e),t)}(t,nn(s,t))}else{if(!at[h])return i?t:{};s=function(e,t,r){var n,o=e.constructor;switch(t){case O:return ko(e);case m:case b:return new o(+e);case T:return function(e,t){var r=t?ko(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case I:case M:case A:case B:case z:case j:case R:case L:case P:return _o(e,r);case w:return new o;case $:case D:return new o(e);case k:return function(e){var t=new e.constructor(e.source,ue.exec(e));return t.lastIndex=e.lastIndex,t}(e);case _:return new o;case F:return n=e,jr?_e(jr.call(n)):{}}}(t,h,l)}}a||(a=new Kr);var g=a.get(t);if(g)return g;a.set(t,s),as(t)?t.forEach((function(e){s.add(ln(e,r,n,e,t,a))})):rs(t)&&t.forEach((function(e,o){s.set(o,ln(e,r,n,o,t,a))}));var v=u?e:(d?c?ii:oi:c?Is:Ts)(t);return _t(v||t,(function(e,o){v&&(e=t[o=e]),en(s,o,ln(e,r,n,o,t,a))})),s}function cn(t,r,n){var o=n.length;if(null==t)return!o;for(t=_e(t);o--;){var i=n[o],a=r[i],s=t[i];if(s===e&&!(i in t)||!a(s))return!1}return!0}function dn(r,n,o){if("function"!=typeof r)throw new Ee(t);return Ti((function(){r.apply(e,o)}),n)}function un(e,t,r,n){var o=-1,i=Ot,a=!0,s=e.length,l=[],c=t.length;if(!s)return l;r&&(t=It(t,Gt(r))),n?(i=Tt,a=!1):t.length>=200&&(i=Xt,a=!1,t=new qr(t));e:for(;++o<s;){var d=e[o],u=null==r?d:r(d);if(d=n||0!==d?d:0,a&&u==u){for(var h=c;h--;)if(t[h]===u)continue e;l.push(d)}else i(t,u,n)||l.push(d)}return l}Lr.templateSettings={escape:K,evaluate:Z,interpolate:G,variable:"",imports:{_:Lr}},Lr.prototype=Hr.prototype,Lr.prototype.constructor=Lr,Nr.prototype=Pr(Hr.prototype),Nr.prototype.constructor=Nr,Wr.prototype=Pr(Hr.prototype),Wr.prototype.constructor=Wr,Vr.prototype.clear=function(){this.__data__=Fr?Fr(null):{},this.size=0},Vr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Vr.prototype.get=function(t){var n=this.__data__;if(Fr){var o=n[t];return o===r?e:o}return Be.call(n,t)?n[t]:e},Vr.prototype.has=function(t){var r=this.__data__;return Fr?r[t]!==e:Be.call(r,t)},Vr.prototype.set=function(t,n){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=Fr&&n===e?r:n,this},Yr.prototype.clear=function(){this.__data__=[],this.size=0},Yr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0||(r==t.length-1?t.pop():Ze.call(t,r,1),--this.size,0))},Yr.prototype.get=function(t){var r=this.__data__,n=tn(r,t);return n<0?e:r[n][1]},Yr.prototype.has=function(e){return tn(this.__data__,e)>-1},Yr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Vr,map:new(Sr||Yr),string:new Vr}},Ur.prototype.delete=function(e){var t=di(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return di(this,e).get(e)},Ur.prototype.has=function(e){return di(this,e).has(e)},Ur.prototype.set=function(e,t){var r=di(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},qr.prototype.add=qr.prototype.push=function(e){return this.__data__.set(e,r),this},qr.prototype.has=function(e){return this.__data__.has(e)},Kr.prototype.clear=function(){this.__data__=new Yr,this.size=0},Kr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Kr.prototype.get=function(e){return this.__data__.get(e)},Kr.prototype.has=function(e){return this.__data__.has(e)},Kr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Yr){var n=r.__data__;if(!Sr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var hn=Ao(xn),fn=Ao(wn,!0);function pn(e,t){var r=!0;return hn(e,(function(e,n,o){return r=!!t(e,n,o)})),r}function gn(t,r,n){for(var o=-1,i=t.length;++o<i;){var a=t[o],s=r(a);if(null!=s&&(l===e?s==s&&!ls(s):n(s,l)))var l=s,c=a}return c}function mn(e,t){var r=[];return hn(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}function bn(e,t,r,n,o){var i=-1,a=e.length;for(r||(r=vi),o||(o=[]);++i<a;){var s=e[i];t>0&&r(s)?t>1?bn(s,t-1,r,n,o):Mt(o,s):n||(o[o.length]=s)}return o}var vn=Bo(),yn=Bo(!0);function xn(e,t){return e&&vn(e,t,Ts)}function wn(e,t){return e&&yn(e,t,Ts)}function $n(e,t){return Et(t,(function(t){return Qa(e[t])}))}function Cn(t,r){for(var n=0,o=(r=xo(r,t)).length;null!=t&&n<o;)t=t[ji(r[n++])];return n&&n==o?t:e}function Sn(e,t,r){var n=t(e);return Va(e)?n:Mt(n,r(e))}function kn(t){return null==t?t===e?"[object Undefined]":"[object Null]":tt&&tt in _e(t)?function(t){var r=Be.call(t,tt),n=t[tt];try{t[tt]=e;var o=!0}catch(e){}var i=Re.call(t);return o&&(r?t[tt]=n:delete t[tt]),i}(t):function(e){return Re.call(e)}(t)}function _n(e,t){return e>t}function Dn(e,t){return null!=e&&Be.call(e,t)}function Fn(e,t){return null!=e&&t in _e(e)}function En(t,r,n){for(var o=n?Tt:Ot,i=t[0].length,a=t.length,s=a,l=we(a),c=1/0,d=[];s--;){var u=t[s];s&&r&&(u=It(u,Gt(r))),c=vr(u.length,c),l[s]=!n&&(r||i>=120&&u.length>=120)?new qr(s&&u):e}u=t[0];var h=-1,f=l[0];e:for(;++h<i&&d.length<c;){var p=u[h],g=r?r(p):p;if(p=n||0!==p?p:0,!(f?Xt(f,g):o(d,g,n))){for(s=a;--s;){var m=l[s];if(!(m?Xt(m,g):o(t[s],g,n)))continue e}f&&f.push(g),d.push(p)}}return d}function On(t,r,n){var o=null==(t=Fi(t,r=xo(r,t)))?t:t[ji(Gi(r))];return null==o?e:St(o,t,n)}function Tn(e){return ts(e)&&kn(e)==p}function In(t,r,n,o,i){return t===r||(null==t||null==r||!ts(t)&&!ts(r)?t!=t&&r!=r:function(t,r,n,o,i,a){var s=Va(t),l=Va(r),c=s?g:gi(t),d=l?g:gi(r),u=(c=c==p?C:c)==C,h=(d=d==p?C:d)==C,f=c==d;if(f&&Ka(t)){if(!Ka(r))return!1;s=!0,u=!1}if(f&&!u)return a||(a=new Kr),s||cs(t)?ri(t,r,n,o,i,a):function(e,t,r,n,o,i,a){switch(r){case T:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case O:return!(e.byteLength!=t.byteLength||!i(new Ve(e),new Ve(t)));case m:case b:case $:return Pa(+e,+t);case v:return e.name==t.name&&e.message==t.message;case k:case D:return e==t+"";case w:var s=ir;case _:var l=1&n;if(s||(s=lr),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=ri(s(e),s(t),n,o,i,a);return a.delete(e),d;case F:if(jr)return jr.call(e)==jr.call(t)}return!1}(t,r,c,n,o,i,a);if(!(1&n)){var y=u&&Be.call(t,"__wrapped__"),x=h&&Be.call(r,"__wrapped__");if(y||x){var S=y?t.value():t,E=x?r.value():r;return a||(a=new Kr),i(S,E,n,o,a)}}return!!f&&(a||(a=new Kr),function(t,r,n,o,i,a){var s=1&n,l=oi(t),c=l.length,d=oi(r),u=d.length;if(c!=u&&!s)return!1;for(var h=c;h--;){var f=l[h];if(!(s?f in r:Be.call(r,f)))return!1}var p=a.get(t),g=a.get(r);if(p&&g)return p==r&&g==t;var m=!0;a.set(t,r),a.set(r,t);for(var b=s;++h<c;){var v=t[f=l[h]],y=r[f];if(o)var x=s?o(y,v,f,r,t,a):o(v,y,f,t,r,a);if(!(x===e?v===y||i(v,y,n,o,a):x)){m=!1;break}b||(b="constructor"==f)}if(m&&!b){var w=t.constructor,$=r.constructor;w==$||!("constructor"in t)||!("constructor"in r)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(t),a.delete(r),m}(t,r,n,o,i,a))}(t,r,n,o,In,i))}function Mn(t,r,n,o){var i=n.length,a=i,s=!o;if(null==t)return!a;for(t=_e(t);i--;){var l=n[i];if(s&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++i<a;){var c=(l=n[i])[0],d=t[c],u=l[1];if(s&&l[2]){if(d===e&&!(c in t))return!1}else{var h=new Kr;if(o)var f=o(d,u,c,t,r,h);if(!(f===e?In(u,d,3,o,h):f))return!1}}return!0}function An(e){return!(!es(e)||(t=e,je&&je in t))&&(Qa(e)?He:pe).test(Ri(e));var t}function Bn(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Va(e)?Hn(e[0],e[1]):Pn(e):hl(e)}function zn(e){if(!Si(e))return mr(e);var t=[];for(var r in _e(e))Be.call(e,r)&&"constructor"!=r&&t.push(r);return t}function jn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in _e(e))t.push(r);return t}(e);var t=Si(e),r=[];for(var n in e)("constructor"!=n||!t&&Be.call(e,n))&&r.push(n);return r}function Rn(e,t){return e<t}function Ln(e,t){var r=-1,n=Ua(e)?we(e.length):[];return hn(e,(function(e,o,i){n[++r]=t(e,o,i)})),n}function Pn(e){var t=ui(e);return 1==t.length&&t[0][2]?_i(t[0][0],t[0][1]):function(r){return r===e||Mn(r,e,t)}}function Hn(t,r){return wi(t)&&ki(r)?_i(ji(t),r):function(n){var o=_s(n,t);return o===e&&o===r?Ds(n,t):In(r,o,3)}}function Nn(t,r,n,o,i){t!==r&&vn(r,(function(a,s){if(i||(i=new Kr),es(a))!function(t,r,n,o,i,a,s){var l=Ei(t,n),c=Ei(r,n),d=s.get(c);if(d)Jr(t,n,d);else{var u=a?a(l,c,n+"",t,r,s):e,h=u===e;if(h){var f=Va(c),p=!f&&Ka(c),g=!f&&!p&&cs(c);u=c,f||p||g?Va(l)?u=l:qa(l)?u=Oo(l):p?(h=!1,u=So(c,!0)):g?(h=!1,u=_o(c,!0)):u=[]:os(c)||Wa(c)?(u=l,Wa(l)?u=bs(l):es(l)&&!Qa(l)||(u=bi(c))):h=!1}h&&(s.set(c,u),i(u,c,o,a,s),s.delete(c)),Jr(t,n,u)}}(t,r,s,n,Nn,o,i);else{var l=o?o(Ei(t,s),a,s+"",t,r,i):e;l===e&&(l=a),Jr(t,s,l)}}),Is)}function Wn(t,r){var n=t.length;if(n)return yi(r+=r<0?n:0,n)?t[r]:e}function Vn(e,t,r){t=t.length?It(t,(function(e){return Va(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=It(t,Gt(ci()));var o=Ln(e,(function(e,r,o){var i=It(t,(function(t){return t(e)}));return{criteria:i,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(o,(function(e,t){return function(e,t,r){for(var n=-1,o=e.criteria,i=t.criteria,a=o.length,s=r.length;++n<a;){var l=Do(o[n],i[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Yn(e,t,r){for(var n=-1,o=t.length,i={};++n<o;){var a=t[n],s=Cn(e,a);r(s,a)&&Jn(i,xo(a,e),s)}return i}function Un(e,t,r,n){var o=n?Ht:Pt,i=-1,a=t.length,s=e;for(e===t&&(t=Oo(t)),r&&(s=It(e,Gt(r)));++i<a;)for(var l=0,c=t[i],d=r?r(c):c;(l=o(s,d,l,n))>-1;)s!==e&&Ze.call(s,l,1),Ze.call(e,l,1);return e}function qn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var o=t[r];if(r==n||o!==i){var i=o;yi(o)?Ze.call(e,o,1):ho(e,o)}}return e}function Kn(e,t){return e+mt(wr()*(t-e+1))}function Zn(e,t){var r="";if(!e||t<1||t>d)return r;do{t%2&&(r+=e),(t=mt(t/2))&&(e+=e)}while(t);return r}function Gn(e,t){return Ii(Di(e,t,nl),e+"")}function Qn(e){return Gr(Ps(e))}function Xn(e,t){var r=Ps(e);return Bi(r,sn(t,0,r.length))}function Jn(t,r,n,o){if(!es(t))return t;for(var i=-1,a=(r=xo(r,t)).length,s=a-1,l=t;null!=l&&++i<a;){var c=ji(r[i]),d=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(i!=s){var u=l[c];(d=o?o(u,c,l):e)===e&&(d=es(u)?u:yi(r[i+1])?[]:{})}en(l,c,d),l=l[c]}return t}var eo=Er?function(e,t){return Er.set(e,t),e}:nl,to=st?function(e,t){return st(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ro(e){return Bi(Ps(e))}function no(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=we(o);++n<o;)i[n]=e[n+t];return i}function oo(e,t){var r;return hn(e,(function(e,n,o){return!(r=t(e,n,o))})),!!r}function io(e,t,r){var n=0,o=null==e?n:e.length;if("number"==typeof t&&t==t&&o<=2147483647){for(;n<o;){var i=n+o>>>1,a=e[i];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=i+1:o=i}return o}return ao(e,t,nl,r)}function ao(t,r,n,o){var i=0,a=null==t?0:t.length;if(0===a)return 0;for(var s=(r=n(r))!=r,l=null===r,c=ls(r),d=r===e;i<a;){var u=mt((i+a)/2),h=n(t[u]),f=h!==e,p=null===h,g=h==h,m=ls(h);if(s)var b=o||g;else b=d?g&&(o||f):l?g&&f&&(o||!p):c?g&&f&&!p&&(o||!m):!p&&!m&&(o?h<=r:h<r);b?i=u+1:a=u}return vr(a,4294967294)}function so(e,t){for(var r=-1,n=e.length,o=0,i=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!Pa(s,l)){var l=s;i[o++]=0===a?0:a}}return i}function lo(e){return"number"==typeof e?e:ls(e)?u:+e}function co(e){if("string"==typeof e)return e;if(Va(e))return It(e,co)+"";if(ls(e))return Rr?Rr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function uo(e,t,r){var n=-1,o=Ot,i=e.length,a=!0,s=[],l=s;if(r)a=!1,o=Tt;else if(i>=200){var c=t?null:Go(e);if(c)return lr(c);a=!1,o=Xt,l=new qr}else l=t?[]:s;e:for(;++n<i;){var d=e[n],u=t?t(d):d;if(d=r||0!==d?d:0,a&&u==u){for(var h=l.length;h--;)if(l[h]===u)continue e;t&&l.push(u),s.push(d)}else o(l,u,r)||(l!==s&&l.push(u),s.push(d))}return s}function ho(e,t){return null==(e=Fi(e,t=xo(t,e)))||delete e[ji(Gi(t))]}function fo(e,t,r,n){return Jn(e,t,r(Cn(e,t)),n)}function po(e,t,r,n){for(var o=e.length,i=n?o:-1;(n?i--:++i<o)&&t(e[i],i,e););return r?no(e,n?0:i,n?i+1:o):no(e,n?i+1:0,n?o:i)}function go(e,t){var r=e;return r instanceof Wr&&(r=r.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,Mt([e],t.args))}),r)}function mo(e,t,r){var n=e.length;if(n<2)return n?uo(e[0]):[];for(var o=-1,i=we(n);++o<n;)for(var a=e[o],s=-1;++s<n;)s!=o&&(i[o]=un(i[o]||a,e[s],t,r));return uo(bn(i,1),t,r)}function bo(t,r,n){for(var o=-1,i=t.length,a=r.length,s={};++o<i;){var l=o<a?r[o]:e;n(s,t[o],l)}return s}function vo(e){return qa(e)?e:[]}function yo(e){return"function"==typeof e?e:nl}function xo(e,t){return Va(e)?e:wi(e,t)?[e]:zi(vs(e))}var wo=Gn;function $o(t,r,n){var o=t.length;return n=n===e?o:n,!r&&n>=o?t:no(t,r,n)}var Co=dt||function(e){return ht.clearTimeout(e)};function So(e,t){if(t)return e.slice();var r=e.length,n=Ye?Ye(r):new e.constructor(r);return e.copy(n),n}function ko(e){var t=new e.constructor(e.byteLength);return new Ve(t).set(new Ve(e)),t}function _o(e,t){var r=t?ko(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Do(t,r){if(t!==r){var n=t!==e,o=null===t,i=t==t,a=ls(t),s=r!==e,l=null===r,c=r==r,d=ls(r);if(!l&&!d&&!a&&t>r||a&&s&&c&&!l&&!d||o&&s&&c||!n&&c||!i)return 1;if(!o&&!a&&!d&&t<r||d&&n&&i&&!o&&!a||l&&n&&i||!s&&i||!c)return-1}return 0}function Fo(e,t,r,n){for(var o=-1,i=e.length,a=r.length,s=-1,l=t.length,c=br(i-a,0),d=we(l+c),u=!n;++s<l;)d[s]=t[s];for(;++o<a;)(u||o<i)&&(d[r[o]]=e[o]);for(;c--;)d[s++]=e[o++];return d}function Eo(e,t,r,n){for(var o=-1,i=e.length,a=-1,s=r.length,l=-1,c=t.length,d=br(i-s,0),u=we(d+c),h=!n;++o<d;)u[o]=e[o];for(var f=o;++l<c;)u[f+l]=t[l];for(;++a<s;)(h||o<i)&&(u[f+r[a]]=e[o++]);return u}function Oo(e,t){var r=-1,n=e.length;for(t||(t=we(n));++r<n;)t[r]=e[r];return t}function To(t,r,n,o){var i=!n;n||(n={});for(var a=-1,s=r.length;++a<s;){var l=r[a],c=o?o(n[l],t[l],l,n,t):e;c===e&&(c=t[l]),i?on(n,l,c):en(n,l,c)}return n}function Io(e,t){return function(r,n){var o=Va(r)?kt:rn,i=t?t():{};return o(r,e,ci(n,2),i)}}function Mo(t){return Gn((function(r,n){var o=-1,i=n.length,a=i>1?n[i-1]:e,s=i>2?n[2]:e;for(a=t.length>3&&"function"==typeof a?(i--,a):e,s&&xi(n[0],n[1],s)&&(a=i<3?e:a,i=1),r=_e(r);++o<i;){var l=n[o];l&&t(r,l,o,a)}return r}))}function Ao(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=_e(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}function Bo(e){return function(t,r,n){for(var o=-1,i=_e(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}}function zo(t){return function(r){var n=or(r=vs(r))?ur(r):e,o=n?n[0]:r.charAt(0),i=n?$o(n,1).join(""):r.slice(1);return o[t]()+i}}function jo(e){return function(t){return At(Qs(Ws(t).replace(Qe,"")),e,"")}}function Ro(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Pr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function Lo(t){return function(r,n,o){var i=_e(r);if(!Ua(r)){var a=ci(n,3);r=Ts(r),n=function(e){return a(i[e],e,i)}}var s=t(r,n,o);return s>-1?i[a?r[s]:s]:e}}function Po(r){return ni((function(n){var o=n.length,i=o,a=Nr.prototype.thru;for(r&&n.reverse();i--;){var s=n[i];if("function"!=typeof s)throw new Ee(t);if(a&&!l&&"wrapper"==si(s))var l=new Nr([],!0)}for(i=l?i:o;++i<o;){var c=si(s=n[i]),d="wrapper"==c?ai(s):e;l=d&&$i(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[si(d[0])].apply(l,d[3]):1==s.length&&$i(s)?l[c]():l.thru(s)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Va(t))return l.plant(t).value();for(var r=0,i=o?n[r].apply(this,e):t;++r<o;)i=n[r].call(this,i);return i}}))}function Ho(t,r,n,o,i,a,l,c,d,u){var h=r&s,f=1&r,p=2&r,g=24&r,m=512&r,b=p?e:Ro(t);return function s(){for(var v=arguments.length,y=we(v),x=v;x--;)y[x]=arguments[x];if(g)var w=li(s),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,w);if(o&&(y=Fo(y,o,i,g)),a&&(y=Eo(y,a,l,g)),v-=$,g&&v<u){var C=sr(y,w);return Ko(t,r,Ho,s.placeholder,n,y,C,c,d,u-v)}var S=f?n:this,k=p?S[t]:t;return v=y.length,c?y=function(t,r){for(var n=t.length,o=vr(r.length,n),i=Oo(t);o--;){var a=r[o];t[o]=yi(a,n)?i[a]:e}return t}(y,c):m&&v>1&&y.reverse(),h&&d<v&&(y.length=d),this&&this!==ht&&this instanceof s&&(k=b||Ro(k)),k.apply(S,y)}}function No(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,o,i){t(n,r(e),o,i)})),n}(r,e,t(n),{})}}function Wo(t,r){return function(n,o){var i;if(n===e&&o===e)return r;if(n!==e&&(i=n),o!==e){if(i===e)return o;"string"==typeof n||"string"==typeof o?(n=co(n),o=co(o)):(n=lo(n),o=lo(o)),i=t(n,o)}return i}}function Vo(e){return ni((function(t){return t=It(t,Gt(ci())),Gn((function(r){var n=this;return e(t,(function(e){return St(e,n,r)}))}))}))}function Yo(t,r){var n=(r=r===e?" ":co(r)).length;if(n<2)return n?Zn(r,t):r;var o=Zn(r,pt(t/dr(r)));return or(r)?$o(ur(o),0,t).join(""):o.slice(0,t)}function Uo(t){return function(r,n,o){return o&&"number"!=typeof o&&xi(r,n,o)&&(n=o=e),r=fs(r),n===e?(n=r,r=0):n=fs(n),function(e,t,r,n){for(var o=-1,i=br(pt((t-e)/(r||1)),0),a=we(i);i--;)a[n?i:++o]=e,e+=r;return a}(r,n,o=o===e?r<n?1:-1:fs(o),t)}}function qo(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ms(t),r=ms(r)),e(t,r)}}function Ko(t,r,n,o,s,l,c,d,u,h){var f=8&r;r|=f?i:a,4&(r&=~(f?a:i))||(r&=-4);var p=[t,r,s,f?l:e,f?c:e,f?e:l,f?e:c,d,u,h],g=n.apply(e,p);return $i(t)&&Oi(g,p),g.placeholder=o,Mi(g,t,r)}function Zo(e){var t=ke[e];return function(e,r){if(e=ms(e),(r=null==r?0:vr(ps(r),292))&&Yt(e)){var n=(vs(e)+"e").split("e");return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Go=_r&&1/lr(new _r([,-0]))[1]==c?function(e){return new _r(e)}:ll;function Qo(e){return function(t){var r=gi(t);return r==w?ir(t):r==_?cr(t):function(e,t){return It(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Xo(r,c,d,u,h,f,p,g){var m=2&c;if(!m&&"function"!=typeof r)throw new Ee(t);var b=u?u.length:0;if(b||(c&=-97,u=h=e),p=p===e?p:br(ps(p),0),g=g===e?g:ps(g),b-=h?h.length:0,c&a){var v=u,y=h;u=h=e}var x=m?e:ai(r),w=[r,c,d,u,h,v,y,f,p,g];if(x&&function(e,t){var r=e[1],o=t[1],i=r|o,a=i<131,c=o==s&&8==r||o==s&&r==l&&e[7].length<=t[8]||384==o&&t[7].length<=t[8]&&8==r;if(!a&&!c)return e;1&o&&(e[2]=t[2],i|=1&r?0:4);var d=t[3];if(d){var u=e[3];e[3]=u?Fo(u,d,t[4]):d,e[4]=u?sr(e[3],n):t[4]}(d=t[5])&&(u=e[5],e[5]=u?Eo(u,d,t[6]):d,e[6]=u?sr(e[5],n):t[6]),(d=t[7])&&(e[7]=d),o&s&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}(w,x),r=w[0],c=w[1],d=w[2],u=w[3],h=w[4],!(g=w[9]=w[9]===e?m?0:r.length:br(w[9]-b,0))&&24&c&&(c&=-25),c&&1!=c)$=8==c||c==o?function(t,r,n){var o=Ro(t);return function i(){for(var a=arguments.length,s=we(a),l=a,c=li(i);l--;)s[l]=arguments[l];var d=a<3&&s[0]!==c&&s[a-1]!==c?[]:sr(s,c);return(a-=d.length)<n?Ko(t,r,Ho,i.placeholder,e,s,d,e,e,n-a):St(this&&this!==ht&&this instanceof i?o:t,this,s)}}(r,c,g):c!=i&&33!=c||h.length?Ho.apply(e,w):function(e,t,r,n){var o=1&t,i=Ro(e);return function t(){for(var a=-1,s=arguments.length,l=-1,c=n.length,d=we(c+s),u=this&&this!==ht&&this instanceof t?i:e;++l<c;)d[l]=n[l];for(;s--;)d[l++]=arguments[++a];return St(u,o?r:this,d)}}(r,c,d,u);else var $=function(e,t,r){var n=1&t,o=Ro(e);return function t(){return(this&&this!==ht&&this instanceof t?o:e).apply(n?r:this,arguments)}}(r,c,d);return Mi((x?eo:Oi)($,w),r,c)}function Jo(t,r,n,o){return t===e||Pa(t,Ie[n])&&!Be.call(o,n)?r:t}function ei(t,r,n,o,i,a){return es(t)&&es(r)&&(a.set(r,t),Nn(t,r,e,ei,a),a.delete(r)),t}function ti(t){return os(t)?e:t}function ri(t,r,n,o,i,a){var s=1&n,l=t.length,c=r.length;if(l!=c&&!(s&&c>l))return!1;var d=a.get(t),u=a.get(r);if(d&&u)return d==r&&u==t;var h=-1,f=!0,p=2&n?new qr:e;for(a.set(t,r),a.set(r,t);++h<l;){var g=t[h],m=r[h];if(o)var b=s?o(m,g,h,r,t,a):o(g,m,h,t,r,a);if(b!==e){if(b)continue;f=!1;break}if(p){if(!zt(r,(function(e,t){if(!Xt(p,t)&&(g===e||i(g,e,n,o,a)))return p.push(t)}))){f=!1;break}}else if(g!==m&&!i(g,m,n,o,a)){f=!1;break}}return a.delete(t),a.delete(r),f}function ni(t){return Ii(Di(t,e,Yi),t+"")}function oi(e){return Sn(e,Ts,fi)}function ii(e){return Sn(e,Is,pi)}var ai=Er?function(e){return Er.get(e)}:ll;function si(e){for(var t=e.name+"",r=Or[t],n=Be.call(Or,t)?r.length:0;n--;){var o=r[n],i=o.func;if(null==i||i==e)return o.name}return t}function li(e){return(Be.call(Lr,"placeholder")?Lr:e).placeholder}function ci(){var e=Lr.iteratee||ol;return e=e===ol?Bn:e,arguments.length?e(arguments[0],arguments[1]):e}function di(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function ui(e){for(var t=Ts(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,ki(o)]}return t}function hi(t,r){var n=function(t,r){return null==t?e:t[r]}(t,r);return An(n)?n:e}var fi=bt?function(e){return null==e?[]:(e=_e(e),Et(bt(e),(function(t){return Ke.call(e,t)})))}:gl,pi=bt?function(e){for(var t=[];e;)Mt(t,fi(e)),e=Ue(e);return t}:gl,gi=kn;function mi(e,t,r){for(var n=-1,o=(t=xo(t,e)).length,i=!1;++n<o;){var a=ji(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Ja(o)&&yi(a,o)&&(Va(e)||Wa(e))}function bi(e){return"function"!=typeof e.constructor||Si(e)?{}:Pr(Ue(e))}function vi(e){return Va(e)||Wa(e)||!!(Ge&&e&&e[Ge])}function yi(e,t){var r=typeof e;return!!(t=null==t?d:t)&&("number"==r||"symbol"!=r&&me.test(e))&&e>-1&&e%1==0&&e<t}function xi(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yi(t,r.length):"string"==n&&t in r)&&Pa(r[t],e)}function wi(e,t){if(Va(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||X.test(e)||!Q.test(e)||null!=t&&e in _e(t)}function $i(e){var t=si(e),r=Lr[t];if("function"!=typeof r||!(t in Wr.prototype))return!1;if(e===r)return!0;var n=ai(r);return!!n&&e===n[0]}(Cr&&gi(new Cr(new ArrayBuffer(1)))!=T||Sr&&gi(new Sr)!=w||kr&&gi(kr.resolve())!=S||_r&&gi(new _r)!=_||Dr&&gi(new Dr)!=E)&&(gi=function(t){var r=kn(t),n=r==C?t.constructor:e,o=n?Ri(n):"";if(o)switch(o){case Tr:return T;case Ir:return w;case Mr:return S;case Ar:return _;case Br:return E}return r});var Ci=Me?Qa:ml;function Si(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ie)}function ki(e){return e==e&&!es(e)}function _i(t,r){return function(n){return null!=n&&n[t]===r&&(r!==e||t in _e(n))}}function Di(t,r,n){return r=br(r===e?t.length-1:r,0),function(){for(var e=arguments,o=-1,i=br(e.length-r,0),a=we(i);++o<i;)a[o]=e[r+o];o=-1;for(var s=we(r+1);++o<r;)s[o]=e[o];return s[r]=n(a),St(t,this,s)}}function Fi(e,t){return t.length<2?e:Cn(e,no(t,0,-1))}function Ei(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Oi=Ai(eo),Ti=ft||function(e,t){return ht.setTimeout(e,t)},Ii=Ai(to);function Mi(e,t,r){var n=t+"";return Ii(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return _t(f,(function(r){var n="_."+r[0];t&r[1]&&!Ot(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(ie);return t?t[1].split(ae):[]}(n),r)))}function Ai(t){var r=0,n=0;return function(){var o=yr(),i=16-(o-n);if(n=o,i>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(e,arguments)}}function Bi(t,r){var n=-1,o=t.length,i=o-1;for(r=r===e?o:r;++n<r;){var a=Kn(n,i),s=t[a];t[a]=t[n],t[n]=s}return t.length=r,t}var zi=function(e){var t=Aa(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(J,(function(e,r,n,o){t.push(n?o.replace(ce,"$1"):r||e)})),t}));function ji(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Ri(e){if(null!=e){try{return Ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Li(e){if(e instanceof Wr)return e.clone();var t=new Nr(e.__wrapped__,e.__chain__);return t.__actions__=Oo(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Pi=Gn((function(e,t){return qa(e)?un(e,bn(t,1,qa,!0)):[]})),Hi=Gn((function(t,r){var n=Gi(r);return qa(n)&&(n=e),qa(t)?un(t,bn(r,1,qa,!0),ci(n,2)):[]})),Ni=Gn((function(t,r){var n=Gi(r);return qa(n)&&(n=e),qa(t)?un(t,bn(r,1,qa,!0),e,n):[]}));function Wi(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ps(r);return o<0&&(o=br(n+o,0)),Lt(e,ci(t,3),o)}function Vi(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o-1;return n!==e&&(i=ps(n),i=n<0?br(o+i,0):vr(i,o-1)),Lt(t,ci(r,3),i,!0)}function Yi(e){return null!=e&&e.length?bn(e,1):[]}function Ui(t){return t&&t.length?t[0]:e}var qi=Gn((function(e){var t=It(e,vo);return t.length&&t[0]===e[0]?En(t):[]})),Ki=Gn((function(t){var r=Gi(t),n=It(t,vo);return r===Gi(n)?r=e:n.pop(),n.length&&n[0]===t[0]?En(n,ci(r,2)):[]})),Zi=Gn((function(t){var r=Gi(t),n=It(t,vo);return(r="function"==typeof r?r:e)&&n.pop(),n.length&&n[0]===t[0]?En(n,e,r):[]}));function Gi(t){var r=null==t?0:t.length;return r?t[r-1]:e}var Qi=Gn(Xi);function Xi(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Ji=ni((function(e,t){var r=null==e?0:e.length,n=an(e,t);return qn(e,It(t,(function(e){return yi(e,r)?+e:e})).sort(Do)),n}));function ea(e){return null==e?e:$r.call(e)}var ta=Gn((function(e){return uo(bn(e,1,qa,!0))})),ra=Gn((function(t){var r=Gi(t);return qa(r)&&(r=e),uo(bn(t,1,qa,!0),ci(r,2))})),na=Gn((function(t){var r=Gi(t);return r="function"==typeof r?r:e,uo(bn(t,1,qa,!0),e,r)}));function oa(e){if(!e||!e.length)return[];var t=0;return e=Et(e,(function(e){if(qa(e))return t=br(e.length,t),!0})),Kt(t,(function(t){return It(e,Vt(t))}))}function ia(t,r){if(!t||!t.length)return[];var n=oa(t);return null==r?n:It(n,(function(t){return St(r,e,t)}))}var aa=Gn((function(e,t){return qa(e)?un(e,t):[]})),sa=Gn((function(e){return mo(Et(e,qa))})),la=Gn((function(t){var r=Gi(t);return qa(r)&&(r=e),mo(Et(t,qa),ci(r,2))})),ca=Gn((function(t){var r=Gi(t);return r="function"==typeof r?r:e,mo(Et(t,qa),e,r)})),da=Gn(oa),ua=Gn((function(t){var r=t.length,n=r>1?t[r-1]:e;return n="function"==typeof n?(t.pop(),n):e,ia(t,n)}));function ha(e){var t=Lr(e);return t.__chain__=!0,t}function fa(e,t){return t(e)}var pa=ni((function(t){var r=t.length,n=r?t[0]:0,o=this.__wrapped__,i=function(e){return an(e,t)};return!(r>1||this.__actions__.length)&&o instanceof Wr&&yi(n)?((o=o.slice(n,+n+(r?1:0))).__actions__.push({func:fa,args:[i],thisArg:e}),new Nr(o,this.__chain__).thru((function(t){return r&&!t.length&&t.push(e),t}))):this.thru(i)})),ga=Io((function(e,t,r){Be.call(e,r)?++e[r]:on(e,r,1)})),ma=Lo(Wi),ba=Lo(Vi);function va(e,t){return(Va(e)?_t:hn)(e,ci(t,3))}function ya(e,t){return(Va(e)?Dt:fn)(e,ci(t,3))}var xa=Io((function(e,t,r){Be.call(e,r)?e[r].push(t):on(e,r,[t])})),wa=Gn((function(e,t,r){var n=-1,o="function"==typeof t,i=Ua(e)?we(e.length):[];return hn(e,(function(e){i[++n]=o?St(t,e,r):On(e,t,r)})),i})),$a=Io((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Va(e)?It:Ln)(e,ci(t,3))}var Sa=Io((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]})),ka=Gn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xi(e,t[0],t[1])?t=[]:r>2&&xi(t[0],t[1],t[2])&&(t=[t[0]]),Vn(e,bn(t,1),[])})),_a=ut||function(){return ht.Date.now()};function Da(t,r,n){return r=n?e:r,r=t&&null==r?t.length:r,Xo(t,s,e,e,e,e,r)}function Fa(r,n){var o;if("function"!=typeof n)throw new Ee(t);return r=ps(r),function(){return--r>0&&(o=n.apply(this,arguments)),r<=1&&(n=e),o}}var Ea=Gn((function(e,t,r){var n=1;if(r.length){var o=sr(r,li(Ea));n|=i}return Xo(e,n,t,r,o)})),Oa=Gn((function(e,t,r){var n=3;if(r.length){var o=sr(r,li(Oa));n|=i}return Xo(t,n,e,r,o)}));function Ta(r,n,o){var i,a,s,l,c,d,u=0,h=!1,f=!1,p=!0;if("function"!=typeof r)throw new Ee(t);function g(t){var n=i,o=a;return i=a=e,u=t,l=r.apply(o,n)}function m(t){var r=t-d;return d===e||r>=n||r<0||f&&t-u>=s}function b(){var e=_a();if(m(e))return v(e);c=Ti(b,function(e){var t=n-(e-d);return f?vr(t,s-(e-u)):t}(e))}function v(t){return c=e,p&&i?g(t):(i=a=e,l)}function y(){var t=_a(),r=m(t);if(i=arguments,a=this,d=t,r){if(c===e)return function(e){return u=e,c=Ti(b,n),h?g(e):l}(d);if(f)return Co(c),c=Ti(b,n),g(d)}return c===e&&(c=Ti(b,n)),l}return n=ms(n)||0,es(o)&&(h=!!o.leading,s=(f="maxWait"in o)?br(ms(o.maxWait)||0,n):s,p="trailing"in o?!!o.trailing:p),y.cancel=function(){c!==e&&Co(c),u=0,i=d=a=c=e},y.flush=function(){return c===e?l:v(_a())},y}var Ia=Gn((function(e,t){return dn(e,1,t)})),Ma=Gn((function(e,t,r){return dn(e,ms(t)||0,r)}));function Aa(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new Ee(t);var n=function(){var t=arguments,o=r?r.apply(this,t):t[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,t);return n.cache=i.set(o,a)||i,a};return n.cache=new(Aa.Cache||Ur),n}function Ba(e){if("function"!=typeof e)throw new Ee(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Aa.Cache=Ur;var za=wo((function(e,t){var r=(t=1==t.length&&Va(t[0])?It(t[0],Gt(ci())):It(bn(t,1),Gt(ci()))).length;return Gn((function(n){for(var o=-1,i=vr(n.length,r);++o<i;)n[o]=t[o].call(this,n[o]);return St(e,this,n)}))})),ja=Gn((function(t,r){var n=sr(r,li(ja));return Xo(t,i,e,r,n)})),Ra=Gn((function(t,r){var n=sr(r,li(Ra));return Xo(t,a,e,r,n)})),La=ni((function(t,r){return Xo(t,l,e,e,e,r)}));function Pa(e,t){return e===t||e!=e&&t!=t}var Ha=qo(_n),Na=qo((function(e,t){return e>=t})),Wa=Tn(function(){return arguments}())?Tn:function(e){return ts(e)&&Be.call(e,"callee")&&!Ke.call(e,"callee")},Va=we.isArray,Ya=vt?Gt(vt):function(e){return ts(e)&&kn(e)==O};function Ua(e){return null!=e&&Ja(e.length)&&!Qa(e)}function qa(e){return ts(e)&&Ua(e)}var Ka=jt||ml,Za=yt?Gt(yt):function(e){return ts(e)&&kn(e)==b};function Ga(e){if(!ts(e))return!1;var t=kn(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!os(e)}function Qa(e){if(!es(e))return!1;var t=kn(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Xa(e){return"number"==typeof e&&e==ps(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=d}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=xt?Gt(xt):function(e){return ts(e)&&gi(e)==w};function ns(e){return"number"==typeof e||ts(e)&&kn(e)==$}function os(e){if(!ts(e)||kn(e)!=C)return!1;var t=Ue(e);if(null===t)return!0;var r=Be.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Ae.call(r)==Le}var is=wt?Gt(wt):function(e){return ts(e)&&kn(e)==k},as=$t?Gt($t):function(e){return ts(e)&&gi(e)==_};function ss(e){return"string"==typeof e||!Va(e)&&ts(e)&&kn(e)==D}function ls(e){return"symbol"==typeof e||ts(e)&&kn(e)==F}var cs=Ct?Gt(Ct):function(e){return ts(e)&&Ja(e.length)&&!!it[kn(e)]},ds=qo(Rn),us=qo((function(e,t){return e<=t}));function hs(e){if(!e)return[];if(Ua(e))return ss(e)?ur(e):Oo(e);if(Je&&e[Je])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Je]());var t=gi(e);return(t==w?ir:t==_?lr:Ps)(e)}function fs(e){return e?(e=ms(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=fs(e),r=t%1;return t==t?r?t-r:t:0}function gs(e){return e?sn(ps(e),0,h):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return u;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Zt(e);var r=fe.test(e);return r||ge.test(e)?ct(e.slice(2),r?2:8):he.test(e)?u:+e}function bs(e){return To(e,Is(e))}function vs(e){return null==e?"":co(e)}var ys=Mo((function(e,t){if(Si(t)||Ua(t))To(t,Ts(t),e);else for(var r in t)Be.call(t,r)&&en(e,r,t[r])})),xs=Mo((function(e,t){To(t,Is(t),e)})),ws=Mo((function(e,t,r,n){To(t,Is(t),e,n)})),$s=Mo((function(e,t,r,n){To(t,Ts(t),e,n)})),Cs=ni(an),Ss=Gn((function(t,r){t=_e(t);var n=-1,o=r.length,i=o>2?r[2]:e;for(i&&xi(r[0],r[1],i)&&(o=1);++n<o;)for(var a=r[n],s=Is(a),l=-1,c=s.length;++l<c;){var d=s[l],u=t[d];(u===e||Pa(u,Ie[d])&&!Be.call(t,d))&&(t[d]=a[d])}return t})),ks=Gn((function(t){return t.push(e,ei),St(As,e,t)}));function _s(t,r,n){var o=null==t?e:Cn(t,r);return o===e?n:o}function Ds(e,t){return null!=e&&mi(e,t,Fn)}var Fs=No((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),e[t]=r}),el(nl)),Es=No((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),Be.call(e,t)?e[t].push(r):e[t]=[r]}),ci),Os=Gn(On);function Ts(e){return Ua(e)?Zr(e):zn(e)}function Is(e){return Ua(e)?Zr(e,!0):jn(e)}var Ms=Mo((function(e,t,r){Nn(e,t,r)})),As=Mo((function(e,t,r,n){Nn(e,t,r,n)})),Bs=ni((function(e,t){var r={};if(null==e)return r;var n=!1;t=It(t,(function(t){return t=xo(t,e),n||(n=t.length>1),t})),To(e,ii(e),r),n&&(r=ln(r,7,ti));for(var o=t.length;o--;)ho(r,t[o]);return r})),zs=ni((function(e,t){return null==e?{}:function(e,t){return Yn(e,t,(function(t,r){return Ds(e,r)}))}(e,t)}));function js(e,t){if(null==e)return{};var r=It(ii(e),(function(e){return[e]}));return t=ci(t),Yn(e,r,(function(e,r){return t(e,r[0])}))}var Rs=Qo(Ts),Ls=Qo(Is);function Ps(e){return null==e?[]:Qt(e,Ts(e))}var Hs=jo((function(e,t,r){return t=t.toLowerCase(),e+(r?Ns(t):t)}));function Ns(e){return Gs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(be,tr).replace(Xe,"")}var Vs=jo((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Ys=jo((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=zo("toLowerCase"),qs=jo((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()})),Ks=jo((function(e,t,r){return e+(r?" ":"")+Gs(t)})),Zs=jo((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Gs=zo("toUpperCase");function Qs(t,r,n){return t=vs(t),(r=n?e:r)===e?function(e){return rt.test(e)}(t)?function(e){return e.match(et)||[]}(t):function(e){return e.match(se)||[]}(t):t.match(r)||[]}var Xs=Gn((function(t,r){try{return St(t,e,r)}catch(e){return Ga(e)?e:new Ce(e)}})),Js=ni((function(e,t){return _t(t,(function(t){t=ji(t),on(e,t,Ea(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Po(),rl=Po(!0);function nl(e){return e}function ol(e){return Bn("function"==typeof e?e:ln(e,1))}var il=Gn((function(e,t){return function(r){return On(r,e,t)}})),al=Gn((function(e,t){return function(r){return On(e,r,t)}}));function sl(e,t,r){var n=Ts(t),o=$n(t,n);null!=r||es(t)&&(o.length||!n.length)||(r=t,t=e,e=this,o=$n(t,Ts(t)));var i=!(es(r)&&"chain"in r&&!r.chain),a=Qa(e);return _t(o,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=e(this.__wrapped__);return(r.__actions__=Oo(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Mt([this.value()],arguments))})})),e}function ll(){}var cl=Vo(It),dl=Vo(Ft),ul=Vo(zt);function hl(e){return wi(e)?Vt(ji(e)):function(e){return function(t){return Cn(t,e)}}(e)}var fl=Uo(),pl=Uo(!0);function gl(){return[]}function ml(){return!1}var bl,vl=Wo((function(e,t){return e+t}),0),yl=Zo("ceil"),xl=Wo((function(e,t){return e/t}),1),wl=Zo("floor"),$l=Wo((function(e,t){return e*t}),1),Cl=Zo("round"),Sl=Wo((function(e,t){return e-t}),0);return Lr.after=function(e,r){if("function"!=typeof r)throw new Ee(t);return e=ps(e),function(){if(--e<1)return r.apply(this,arguments)}},Lr.ary=Da,Lr.assign=ys,Lr.assignIn=xs,Lr.assignInWith=ws,Lr.assignWith=$s,Lr.at=Cs,Lr.before=Fa,Lr.bind=Ea,Lr.bindAll=Js,Lr.bindKey=Oa,Lr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Va(e)?e:[e]},Lr.chain=ha,Lr.chunk=function(t,r,n){r=(n?xi(t,r,n):r===e)?1:br(ps(r),0);var o=null==t?0:t.length;if(!o||r<1)return[];for(var i=0,a=0,s=we(pt(o/r));i<o;)s[a++]=no(t,i,i+=r);return s},Lr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,o=[];++t<r;){var i=e[t];i&&(o[n++]=i)}return o},Lr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=we(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return Mt(Va(r)?Oo(r):[r],bn(t,1))},Lr.cond=function(e){var r=null==e?0:e.length,n=ci();return e=r?It(e,(function(e){if("function"!=typeof e[1])throw new Ee(t);return[n(e[0]),e[1]]})):[],Gn((function(t){for(var n=-1;++n<r;){var o=e[n];if(St(o[0],this,t))return St(o[1],this,t)}}))},Lr.conforms=function(e){return function(e){var t=Ts(e);return function(r){return cn(r,e,t)}}(ln(e,1))},Lr.constant=el,Lr.countBy=ga,Lr.create=function(e,t){var r=Pr(e);return null==t?r:nn(r,t)},Lr.curry=function t(r,n,o){var i=Xo(r,8,e,e,e,e,e,n=o?e:n);return i.placeholder=t.placeholder,i},Lr.curryRight=function t(r,n,i){var a=Xo(r,o,e,e,e,e,e,n=i?e:n);return a.placeholder=t.placeholder,a},Lr.debounce=Ta,Lr.defaults=Ss,Lr.defaultsDeep=ks,Lr.defer=Ia,Lr.delay=Ma,Lr.difference=Pi,Lr.differenceBy=Hi,Lr.differenceWith=Ni,Lr.drop=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=n||r===e?1:ps(r))<0?0:r,o):[]},Lr.dropRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,0,(r=o-(r=n||r===e?1:ps(r)))<0?0:r):[]},Lr.dropRightWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!0,!0):[]},Lr.dropWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!0):[]},Lr.fill=function(t,r,n,o){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&xi(t,r,n)&&(n=0,o=i),function(t,r,n,o){var i=t.length;for((n=ps(n))<0&&(n=-n>i?0:i+n),(o=o===e||o>i?i:ps(o))<0&&(o+=i),o=n>o?0:gs(o);n<o;)t[n++]=r;return t}(t,r,n,o)):[]},Lr.filter=function(e,t){return(Va(e)?Et:mn)(e,ci(t,3))},Lr.flatMap=function(e,t){return bn(Ca(e,t),1)},Lr.flatMapDeep=function(e,t){return bn(Ca(e,t),c)},Lr.flatMapDepth=function(t,r,n){return n=n===e?1:ps(n),bn(Ca(t,r),n)},Lr.flatten=Yi,Lr.flattenDeep=function(e){return null!=e&&e.length?bn(e,c):[]},Lr.flattenDepth=function(t,r){return null!=t&&t.length?bn(t,r=r===e?1:ps(r)):[]},Lr.flip=function(e){return Xo(e,512)},Lr.flow=tl,Lr.flowRight=rl,Lr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var o=e[t];n[o[0]]=o[1]}return n},Lr.functions=function(e){return null==e?[]:$n(e,Ts(e))},Lr.functionsIn=function(e){return null==e?[]:$n(e,Is(e))},Lr.groupBy=xa,Lr.initial=function(e){return null!=e&&e.length?no(e,0,-1):[]},Lr.intersection=qi,Lr.intersectionBy=Ki,Lr.intersectionWith=Zi,Lr.invert=Fs,Lr.invertBy=Es,Lr.invokeMap=wa,Lr.iteratee=ol,Lr.keyBy=$a,Lr.keys=Ts,Lr.keysIn=Is,Lr.map=Ca,Lr.mapKeys=function(e,t){var r={};return t=ci(t,3),xn(e,(function(e,n,o){on(r,t(e,n,o),e)})),r},Lr.mapValues=function(e,t){var r={};return t=ci(t,3),xn(e,(function(e,n,o){on(r,n,t(e,n,o))})),r},Lr.matches=function(e){return Pn(ln(e,1))},Lr.matchesProperty=function(e,t){return Hn(e,ln(t,1))},Lr.memoize=Aa,Lr.merge=Ms,Lr.mergeWith=As,Lr.method=il,Lr.methodOf=al,Lr.mixin=sl,Lr.negate=Ba,Lr.nthArg=function(e){return e=ps(e),Gn((function(t){return Wn(t,e)}))},Lr.omit=Bs,Lr.omitBy=function(e,t){return js(e,Ba(ci(t)))},Lr.once=function(e){return Fa(2,e)},Lr.orderBy=function(t,r,n,o){return null==t?[]:(Va(r)||(r=null==r?[]:[r]),Va(n=o?e:n)||(n=null==n?[]:[n]),Vn(t,r,n))},Lr.over=cl,Lr.overArgs=za,Lr.overEvery=dl,Lr.overSome=ul,Lr.partial=ja,Lr.partialRight=Ra,Lr.partition=Sa,Lr.pick=zs,Lr.pickBy=js,Lr.property=hl,Lr.propertyOf=function(t){return function(r){return null==t?e:Cn(t,r)}},Lr.pull=Qi,Lr.pullAll=Xi,Lr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,ci(r,2)):e},Lr.pullAllWith=function(t,r,n){return t&&t.length&&r&&r.length?Un(t,r,e,n):t},Lr.pullAt=Ji,Lr.range=fl,Lr.rangeRight=pl,Lr.rearg=La,Lr.reject=function(e,t){return(Va(e)?Et:mn)(e,Ba(ci(t,3)))},Lr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,o=[],i=e.length;for(t=ci(t,3);++n<i;){var a=e[n];t(a,n,e)&&(r.push(a),o.push(n))}return qn(e,o),r},Lr.rest=function(r,n){if("function"!=typeof r)throw new Ee(t);return Gn(r,n=n===e?n:ps(n))},Lr.reverse=ea,Lr.sampleSize=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:ps(r),(Va(t)?Qr:Xn)(t,r)},Lr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},Lr.setWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:Jn(t,r,n,o)},Lr.shuffle=function(e){return(Va(e)?Xr:ro)(e)},Lr.slice=function(t,r,n){var o=null==t?0:t.length;return o?(n&&"number"!=typeof n&&xi(t,r,n)?(r=0,n=o):(r=null==r?0:ps(r),n=n===e?o:ps(n)),no(t,r,n)):[]},Lr.sortBy=ka,Lr.sortedUniq=function(e){return e&&e.length?so(e):[]},Lr.sortedUniqBy=function(e,t){return e&&e.length?so(e,ci(t,2)):[]},Lr.split=function(t,r,n){return n&&"number"!=typeof n&&xi(t,r,n)&&(r=n=e),(n=n===e?h:n>>>0)?(t=vs(t))&&("string"==typeof r||null!=r&&!is(r))&&!(r=co(r))&&or(t)?$o(ur(t),0,n):t.split(r,n):[]},Lr.spread=function(e,r){if("function"!=typeof e)throw new Ee(t);return r=null==r?0:br(ps(r),0),Gn((function(t){var n=t[r],o=$o(t,0,r);return n&&Mt(o,n),St(e,this,o)}))},Lr.tail=function(e){var t=null==e?0:e.length;return t?no(e,1,t):[]},Lr.take=function(t,r,n){return t&&t.length?no(t,0,(r=n||r===e?1:ps(r))<0?0:r):[]},Lr.takeRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=o-(r=n||r===e?1:ps(r)))<0?0:r,o):[]},Lr.takeRightWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!1,!0):[]},Lr.takeWhile=function(e,t){return e&&e.length?po(e,ci(t,3)):[]},Lr.tap=function(e,t){return t(e),e},Lr.throttle=function(e,r,n){var o=!0,i=!0;if("function"!=typeof e)throw new Ee(t);return es(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),Ta(e,r,{leading:o,maxWait:r,trailing:i})},Lr.thru=fa,Lr.toArray=hs,Lr.toPairs=Rs,Lr.toPairsIn=Ls,Lr.toPath=function(e){return Va(e)?It(e,ji):ls(e)?[e]:Oo(zi(vs(e)))},Lr.toPlainObject=bs,Lr.transform=function(e,t,r){var n=Va(e),o=n||Ka(e)||cs(e);if(t=ci(t,4),null==r){var i=e&&e.constructor;r=o?n?new i:[]:es(e)&&Qa(i)?Pr(Ue(e)):{}}return(o?_t:xn)(e,(function(e,n,o){return t(r,e,n,o)})),r},Lr.unary=function(e){return Da(e,1)},Lr.union=ta,Lr.unionBy=ra,Lr.unionWith=na,Lr.uniq=function(e){return e&&e.length?uo(e):[]},Lr.uniqBy=function(e,t){return e&&e.length?uo(e,ci(t,2)):[]},Lr.uniqWith=function(t,r){return r="function"==typeof r?r:e,t&&t.length?uo(t,e,r):[]},Lr.unset=function(e,t){return null==e||ho(e,t)},Lr.unzip=oa,Lr.unzipWith=ia,Lr.update=function(e,t,r){return null==e?e:fo(e,t,yo(r))},Lr.updateWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:fo(t,r,yo(n),o)},Lr.values=Ps,Lr.valuesIn=function(e){return null==e?[]:Qt(e,Is(e))},Lr.without=aa,Lr.words=Qs,Lr.wrap=function(e,t){return ja(yo(t),e)},Lr.xor=sa,Lr.xorBy=la,Lr.xorWith=ca,Lr.zip=da,Lr.zipObject=function(e,t){return bo(e||[],t||[],en)},Lr.zipObjectDeep=function(e,t){return bo(e||[],t||[],Jn)},Lr.zipWith=ua,Lr.entries=Rs,Lr.entriesIn=Ls,Lr.extend=xs,Lr.extendWith=ws,sl(Lr,Lr),Lr.add=vl,Lr.attempt=Xs,Lr.camelCase=Hs,Lr.capitalize=Ns,Lr.ceil=yl,Lr.clamp=function(t,r,n){return n===e&&(n=r,r=e),n!==e&&(n=(n=ms(n))==n?n:0),r!==e&&(r=(r=ms(r))==r?r:0),sn(ms(t),r,n)},Lr.clone=function(e){return ln(e,4)},Lr.cloneDeep=function(e){return ln(e,5)},Lr.cloneDeepWith=function(t,r){return ln(t,5,r="function"==typeof r?r:e)},Lr.cloneWith=function(t,r){return ln(t,4,r="function"==typeof r?r:e)},Lr.conformsTo=function(e,t){return null==t||cn(e,t,Ts(t))},Lr.deburr=Ws,Lr.defaultTo=function(e,t){return null==e||e!=e?t:e},Lr.divide=xl,Lr.endsWith=function(t,r,n){t=vs(t),r=co(r);var o=t.length,i=n=n===e?o:sn(ps(n),0,o);return(n-=r.length)>=0&&t.slice(n,i)==r},Lr.eq=Pa,Lr.escape=function(e){return(e=vs(e))&&q.test(e)?e.replace(Y,rr):e},Lr.escapeRegExp=function(e){return(e=vs(e))&&te.test(e)?e.replace(ee,"\\$&"):e},Lr.every=function(t,r,n){var o=Va(t)?Ft:pn;return n&&xi(t,r,n)&&(r=e),o(t,ci(r,3))},Lr.find=ma,Lr.findIndex=Wi,Lr.findKey=function(e,t){return Rt(e,ci(t,3),xn)},Lr.findLast=ba,Lr.findLastIndex=Vi,Lr.findLastKey=function(e,t){return Rt(e,ci(t,3),wn)},Lr.floor=wl,Lr.forEach=va,Lr.forEachRight=ya,Lr.forIn=function(e,t){return null==e?e:vn(e,ci(t,3),Is)},Lr.forInRight=function(e,t){return null==e?e:yn(e,ci(t,3),Is)},Lr.forOwn=function(e,t){return e&&xn(e,ci(t,3))},Lr.forOwnRight=function(e,t){return e&&wn(e,ci(t,3))},Lr.get=_s,Lr.gt=Ha,Lr.gte=Na,Lr.has=function(e,t){return null!=e&&mi(e,t,Dn)},Lr.hasIn=Ds,Lr.head=Ui,Lr.identity=nl,Lr.includes=function(e,t,r,n){e=Ua(e)?e:Ps(e),r=r&&!n?ps(r):0;var o=e.length;return r<0&&(r=br(o+r,0)),ss(e)?r<=o&&e.indexOf(t,r)>-1:!!o&&Pt(e,t,r)>-1},Lr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ps(r);return o<0&&(o=br(n+o,0)),Pt(e,t,o)},Lr.inRange=function(t,r,n){return r=fs(r),n===e?(n=r,r=0):n=fs(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(t=ms(t),r,n)},Lr.invoke=Os,Lr.isArguments=Wa,Lr.isArray=Va,Lr.isArrayBuffer=Ya,Lr.isArrayLike=Ua,Lr.isArrayLikeObject=qa,Lr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&kn(e)==m},Lr.isBuffer=Ka,Lr.isDate=Za,Lr.isElement=function(e){return ts(e)&&1===e.nodeType&&!os(e)},Lr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Va(e)||"string"==typeof e||"function"==typeof e.splice||Ka(e)||cs(e)||Wa(e)))return!e.length;var t=gi(e);if(t==w||t==_)return!e.size;if(Si(e))return!zn(e).length;for(var r in e)if(Be.call(e,r))return!1;return!0},Lr.isEqual=function(e,t){return In(e,t)},Lr.isEqualWith=function(t,r,n){var o=(n="function"==typeof n?n:e)?n(t,r):e;return o===e?In(t,r,e,n):!!o},Lr.isError=Ga,Lr.isFinite=function(e){return"number"==typeof e&&Yt(e)},Lr.isFunction=Qa,Lr.isInteger=Xa,Lr.isLength=Ja,Lr.isMap=rs,Lr.isMatch=function(e,t){return e===t||Mn(e,t,ui(t))},Lr.isMatchWith=function(t,r,n){return n="function"==typeof n?n:e,Mn(t,r,ui(r),n)},Lr.isNaN=function(e){return ns(e)&&e!=+e},Lr.isNative=function(e){if(Ci(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return An(e)},Lr.isNil=function(e){return null==e},Lr.isNull=function(e){return null===e},Lr.isNumber=ns,Lr.isObject=es,Lr.isObjectLike=ts,Lr.isPlainObject=os,Lr.isRegExp=is,Lr.isSafeInteger=function(e){return Xa(e)&&e>=-9007199254740991&&e<=d},Lr.isSet=as,Lr.isString=ss,Lr.isSymbol=ls,Lr.isTypedArray=cs,Lr.isUndefined=function(t){return t===e},Lr.isWeakMap=function(e){return ts(e)&&gi(e)==E},Lr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==kn(e)},Lr.join=function(e,t){return null==e?"":gr.call(e,t)},Lr.kebabCase=Vs,Lr.last=Gi,Lr.lastIndexOf=function(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o;return n!==e&&(i=(i=ps(n))<0?br(o+i,0):vr(i,o-1)),r==r?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(t,r,i):Lt(t,Nt,i,!0)},Lr.lowerCase=Ys,Lr.lowerFirst=Us,Lr.lt=ds,Lr.lte=us,Lr.max=function(t){return t&&t.length?gn(t,nl,_n):e},Lr.maxBy=function(t,r){return t&&t.length?gn(t,ci(r,2),_n):e},Lr.mean=function(e){return Wt(e,nl)},Lr.meanBy=function(e,t){return Wt(e,ci(t,2))},Lr.min=function(t){return t&&t.length?gn(t,nl,Rn):e},Lr.minBy=function(t,r){return t&&t.length?gn(t,ci(r,2),Rn):e},Lr.stubArray=gl,Lr.stubFalse=ml,Lr.stubObject=function(){return{}},Lr.stubString=function(){return""},Lr.stubTrue=function(){return!0},Lr.multiply=$l,Lr.nth=function(t,r){return t&&t.length?Wn(t,ps(r)):e},Lr.noConflict=function(){return ht._===this&&(ht._=Pe),this},Lr.noop=ll,Lr.now=_a,Lr.pad=function(e,t,r){e=vs(e);var n=(t=ps(t))?dr(e):0;if(!t||n>=t)return e;var o=(t-n)/2;return Yo(mt(o),r)+e+Yo(pt(o),r)},Lr.padEnd=function(e,t,r){e=vs(e);var n=(t=ps(t))?dr(e):0;return t&&n<t?e+Yo(t-n,r):e},Lr.padStart=function(e,t,r){e=vs(e);var n=(t=ps(t))?dr(e):0;return t&&n<t?Yo(t-n,r)+e:e},Lr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vs(e).replace(re,""),t||0)},Lr.random=function(t,r,n){if(n&&"boolean"!=typeof n&&xi(t,r,n)&&(r=n=e),n===e&&("boolean"==typeof r?(n=r,r=e):"boolean"==typeof t&&(n=t,t=e)),t===e&&r===e?(t=0,r=1):(t=fs(t),r===e?(r=t,t=0):r=fs(r)),t>r){var o=t;t=r,r=o}if(n||t%1||r%1){var i=wr();return vr(t+i*(r-t+lt("1e-"+((i+"").length-1))),r)}return Kn(t,r)},Lr.reduce=function(e,t,r){var n=Va(e)?At:Ut,o=arguments.length<3;return n(e,ci(t,4),r,o,hn)},Lr.reduceRight=function(e,t,r){var n=Va(e)?Bt:Ut,o=arguments.length<3;return n(e,ci(t,4),r,o,fn)},Lr.repeat=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:ps(r),Zn(vs(t),r)},Lr.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Lr.result=function(t,r,n){var o=-1,i=(r=xo(r,t)).length;for(i||(i=1,t=e);++o<i;){var a=null==t?e:t[ji(r[o])];a===e&&(o=i,a=n),t=Qa(a)?a.call(t):a}return t},Lr.round=Cl,Lr.runInContext=ne,Lr.sample=function(e){return(Va(e)?Gr:Qn)(e)},Lr.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?dr(e):e.length;var t=gi(e);return t==w||t==_?e.size:zn(e).length},Lr.snakeCase=qs,Lr.some=function(t,r,n){var o=Va(t)?zt:oo;return n&&xi(t,r,n)&&(r=e),o(t,ci(r,3))},Lr.sortedIndex=function(e,t){return io(e,t)},Lr.sortedIndexBy=function(e,t,r){return ao(e,t,ci(r,2))},Lr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=io(e,t);if(n<r&&Pa(e[n],t))return n}return-1},Lr.sortedLastIndex=function(e,t){return io(e,t,!0)},Lr.sortedLastIndexBy=function(e,t,r){return ao(e,t,ci(r,2),!0)},Lr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=io(e,t,!0)-1;if(Pa(e[r],t))return r}return-1},Lr.startCase=Ks,Lr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:sn(ps(r),0,e.length),t=co(t),e.slice(r,r+t.length)==t},Lr.subtract=Sl,Lr.sum=function(e){return e&&e.length?qt(e,nl):0},Lr.sumBy=function(e,t){return e&&e.length?qt(e,ci(t,2)):0},Lr.template=function(t,r,n){var o=Lr.templateSettings;n&&xi(t,r,n)&&(r=e),t=vs(t),r=ws({},r,o,Jo);var i,a,s=ws({},r.imports,o.imports,Jo),l=Ts(s),c=Qt(s,l),d=0,u=r.interpolate||ve,h="__p += '",f=De((r.escape||ve).source+"|"+u.source+"|"+(u===G?de:ve).source+"|"+(r.evaluate||ve).source+"|$","g"),p="//# sourceURL="+(Be.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ot+"]")+"\n";t.replace(f,(function(e,r,n,o,s,l){return n||(n=o),h+=t.slice(d,l).replace(ye,nr),r&&(i=!0,h+="' +\n__e("+r+") +\n'"),s&&(a=!0,h+="';\n"+s+";\n__p += '"),n&&(h+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),d=l+e.length,e})),h+="';\n";var g=Be.call(r,"variable")&&r.variable;if(g){if(le.test(g))throw new Ce("Invalid `variable` option passed into `_.template`")}else h="with (obj) {\n"+h+"\n}\n";h=(a?h.replace(H,""):h).replace(N,"$1").replace(W,"$1;"),h="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var m=Xs((function(){return Se(l,p+"return "+h).apply(e,c)}));if(m.source=h,Ga(m))throw m;return m},Lr.times=function(e,t){if((e=ps(e))<1||e>d)return[];var r=h,n=vr(e,h);t=ci(t),e-=h;for(var o=Kt(n,t);++r<e;)t(r);return o},Lr.toFinite=fs,Lr.toInteger=ps,Lr.toLength=gs,Lr.toLower=function(e){return vs(e).toLowerCase()},Lr.toNumber=ms,Lr.toSafeInteger=function(e){return e?sn(ps(e),-9007199254740991,d):0===e?e:0},Lr.toString=vs,Lr.toUpper=function(e){return vs(e).toUpperCase()},Lr.trim=function(t,r,n){if((t=vs(t))&&(n||r===e))return Zt(t);if(!t||!(r=co(r)))return t;var o=ur(t),i=ur(r);return $o(o,Jt(o,i),er(o,i)+1).join("")},Lr.trimEnd=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.slice(0,hr(t)+1);if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,0,er(o,ur(r))+1).join("")},Lr.trimStart=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.replace(re,"");if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,Jt(o,ur(r))).join("")},Lr.truncate=function(t,r){var n=30,o="...";if(es(r)){var i="separator"in r?r.separator:i;n="length"in r?ps(r.length):n,o="omission"in r?co(r.omission):o}var a=(t=vs(t)).length;if(or(t)){var s=ur(t);a=s.length}if(n>=a)return t;var l=n-dr(o);if(l<1)return o;var c=s?$o(s,0,l).join(""):t.slice(0,l);if(i===e)return c+o;if(s&&(l+=c.length-l),is(i)){if(t.slice(l).search(i)){var d,u=c;for(i.global||(i=De(i.source,vs(ue.exec(i))+"g")),i.lastIndex=0;d=i.exec(u);)var h=d.index;c=c.slice(0,h===e?l:h)}}else if(t.indexOf(co(i),l)!=l){var f=c.lastIndexOf(i);f>-1&&(c=c.slice(0,f))}return c+o},Lr.unescape=function(e){return(e=vs(e))&&U.test(e)?e.replace(V,fr):e},Lr.uniqueId=function(e){var t=++ze;return vs(e)+t},Lr.upperCase=Zs,Lr.upperFirst=Gs,Lr.each=va,Lr.eachRight=ya,Lr.first=Ui,sl(Lr,(bl={},xn(Lr,(function(e,t){Be.call(Lr.prototype,t)||(bl[t]=e)})),bl),{chain:!1}),Lr.VERSION="4.17.21",_t(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Lr[e].placeholder=Lr})),_t(["drop","take"],(function(t,r){Wr.prototype[t]=function(n){n=n===e?1:br(ps(n),0);var o=this.__filtered__&&!r?new Wr(this):this.clone();return o.__filtered__?o.__takeCount__=vr(n,o.__takeCount__):o.__views__.push({size:vr(n,h),type:t+(o.__dir__<0?"Right":"")}),o},Wr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),_t(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Wr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:ci(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),_t(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Wr.prototype[e]=function(){return this[r](1).value()[0]}})),_t(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Wr.prototype[e]=function(){return this.__filtered__?new Wr(this):this[r](1)}})),Wr.prototype.compact=function(){return this.filter(nl)},Wr.prototype.find=function(e){return this.filter(e).head()},Wr.prototype.findLast=function(e){return this.reverse().find(e)},Wr.prototype.invokeMap=Gn((function(e,t){return"function"==typeof e?new Wr(this):this.map((function(r){return On(r,e,t)}))})),Wr.prototype.reject=function(e){return this.filter(Ba(ci(e)))},Wr.prototype.slice=function(t,r){t=ps(t);var n=this;return n.__filtered__&&(t>0||r<0)?new Wr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),r!==e&&(n=(r=ps(r))<0?n.dropRight(-r):n.take(r-t)),n)},Wr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wr.prototype.toArray=function(){return this.take(h)},xn(Wr.prototype,(function(t,r){var n=/^(?:filter|find|map|reject)|While$/.test(r),o=/^(?:head|last)$/.test(r),i=Lr[o?"take"+("last"==r?"Right":""):r],a=o||/^find/.test(r);i&&(Lr.prototype[r]=function(){var r=this.__wrapped__,s=o?[1]:arguments,l=r instanceof Wr,c=s[0],d=l||Va(r),u=function(e){var t=i.apply(Lr,Mt([e],s));return o&&h?t[0]:t};d&&n&&"function"==typeof c&&1!=c.length&&(l=d=!1);var h=this.__chain__,f=!!this.__actions__.length,p=a&&!h,g=l&&!f;if(!a&&d){r=g?r:new Wr(this);var m=t.apply(r,s);return m.__actions__.push({func:fa,args:[u],thisArg:e}),new Nr(m,h)}return p&&g?t.apply(this,s):(m=this.thru(u),p?o?m.value()[0]:m.value():m)})})),_t(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Oe[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Lr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var o=this.value();return t.apply(Va(o)?o:[],e)}return this[r]((function(r){return t.apply(Va(r)?r:[],e)}))}})),xn(Wr.prototype,(function(e,t){var r=Lr[t];if(r){var n=r.name+"";Be.call(Or,n)||(Or[n]=[]),Or[n].push({name:t,func:r})}})),Or[Ho(e,2).name]=[{name:"wrapper",func:e}],Wr.prototype.clone=function(){var e=new Wr(this.__wrapped__);return e.__actions__=Oo(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Oo(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Oo(this.__views__),e},Wr.prototype.reverse=function(){if(this.__filtered__){var e=new Wr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Va(e),n=t<0,o=r?e.length:0,i=function(e,t,r){for(var n=-1,o=r.length;++n<o;){var i=r[n],a=i.size;switch(i.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,o,this.__views__),a=i.start,s=i.end,l=s-a,c=n?s:a-1,d=this.__iteratees__,u=d.length,h=0,f=vr(l,this.__takeCount__);if(!r||!n&&o==l&&f==l)return go(e,this.__actions__);var p=[];e:for(;l--&&h<f;){for(var g=-1,m=e[c+=t];++g<u;){var b=d[g],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[h++]=m}return p},Lr.prototype.at=pa,Lr.prototype.chain=function(){return ha(this)},Lr.prototype.commit=function(){return new Nr(this.value(),this.__chain__)},Lr.prototype.next=function(){this.__values__===e&&(this.__values__=hs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Lr.prototype.plant=function(t){for(var r,n=this;n instanceof Hr;){var o=Li(n);o.__index__=0,o.__values__=e,r?i.__wrapped__=o:r=o;var i=o;n=n.__wrapped__}return i.__wrapped__=t,r},Lr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Wr){var r=t;return this.__actions__.length&&(r=new Wr(this)),(r=r.reverse()).__actions__.push({func:fa,args:[ea],thisArg:e}),new Nr(r,this.__chain__)}return this.thru(ea)},Lr.prototype.toJSON=Lr.prototype.valueOf=Lr.prototype.value=function(){return go(this.__wrapped__,this.__actions__)},Lr.prototype.first=Lr.prototype.head,Je&&(Lr.prototype[Je]=function(){return this}),Lr}();pt?((pt.exports=pr)._=pr,ft._=pr):ht._=pr}.call(Fe);var Nv=Hv.exports;const Wv=o.forwardRef(((n,o)=>{var{value:i,readOnly:s,"data-testid":l,maskRange:c,unmaskRange:d,maskRegex:h,maskTransformer:f,iconMask:p=e(he,{}),iconUnmask:g=e(ue,{}),iconActiveColor:m,iconInactiveColor:b,maskChar:v="•",error:y,disableMask:x,transformInput:w,loadState:$,onMask:C,onUnmask:S,onChange:k,onFocus:_,onBlur:D,onTryAgain:F}=n,E=_e(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const O=s&&Nv.isEmpty(i),[T,I]=a(!x),[M,A]=a(i||"");u((()=>{A(i||"")}),[i]);const B=e=>{P(!1),_&&_(e)},z=e=>{P(!0),D&&D(e)},j=e=>{let t=e.target.value;switch(w){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}A(t),e.target.value=t,k&&k(e)},R=()=>{s&&F&&F()},L=()=>{P(!T)},P=e=>{I(e),e?C&&C():S&&S()},H=()=>!(null==M?void 0:M.toString().length)||x,N=()=>{if(O)return e(r,{});const t=H();return e(Ov,{"data-testid":"icon-"+(T?"masked":"unmasked"),onClick:t?void 0:L,$isDisabled:t,$inactiveColor:b,$activeColor:m,children:T?g:p})};return e("div",{"aria-busy":"loading"===$,"aria-live":"polite",children:(()=>{if(s)switch($){case"fail":return t(Rv,{onClick:R,"data-testid":"try-again-button",children:[t(Bv,{children:[e(zv,{}),e(jv,{children:"Error"})]}),e(Av,{children:"Try again?"})]});case"loading":return t(Tv,{children:[e(Mv,{}),e(Iv,{children:"Retrieving..."})]})}return e(Ev,Object.assign({ref:o,"data-testid":`${l||"masked-input"}${T?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:N()},position:"right"},onFocus:s?void 0:B,onBlur:s?void 0:z,onClick:s?L:void 0,onChange:j,value:O?"-":T&&!x?tt.maskValue(M,{maskChar:v,maskRange:c,unmaskRange:d,maskRegex:h,maskTransformer:f}):M,readOnly:s,error:y,$isDisabled:H()},E))})()})})),Vv=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,h=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Qa,{id:i,label:n,errorMessage:o,disabled:h.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,children:e(Wv,Object.assign({ref:r,id:`${i}-base`,"data-testid":s||i,error:!!o},h))})})),Yv=S.div`
    font-weight: ${e=>e.$bold?ji.Spec["weight-semibold"]:ji.Spec["weight-regular"]};

    ${e=>e.$disabled?k`
                color: ${zi["text-disabled"]};
            `:e.$selected?k`
                color: ${zi["text-selected"]};
            `:k`
                color: ${zi.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&ca(e.$maxLines||2)}
    overflow-wrap: break-word;
`,Uv=S.div`
    color: ${zi["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&ca(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?k`
                    ${ji["body-md-semibold"]}
                `:k`
                    ${ji["body-baseline-regular"]}
                `}
`,qv=S.span`
    font-weight: ${ji.Spec["weight-semibold"]};
`,Kv=S.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?ji["body-md-regular"]:ji["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return k`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return k`
                    ${Yv} {
                        display: inline;
                    }

                    ${Uv} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Zv=S.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,Gv=S.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Qv=({bold:n,displayType:o="inline",label:i,searchTerm:a,maxLines:s=2,selected:l,disabled:c,sublabel:d,truncationType:u="middle",variant:h="default"})=>{const p=_(),m="small"===h?ji.Spec["body-size-md"]({theme:p}):ji.Spec["body-size-baseline"]({theme:p}),b=ji.Spec["font-family"]({theme:p}),{ref:v,width:y}=Gt(),x=f((e=>{if("inline"!==o||!y)return!1;return tt.getTextWidth(e,`${m} '${b}'`)>y*s-50}),[y,o,m,b,s]),w=g((()=>x(i)),[x,i]),$=g((()=>d&&x(d)),[x,d]),C=n=>{if(!a)return n;const o=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(o),l=s+a.length;return-1===s?n:t(r,{children:[i.slice(0,s),e(qv,{$variant:h,children:i.slice(s,l)}),i.slice(l)]})},S=n=>t(r,{children:[e(Zv,{$maxLines:s,"aria-hidden":!0,children:C(n)}),e(Gv,{$maxLines:s,"aria-hidden":!0,children:C(n)})]});return t(Kv,{ref:v,$labelDisplayType:w||$?"next-line":o,$variant:h,children:[e(Yv,{"aria-label":i,$bold:n,$maxLines:s,$selected:l,$disabled:c,$truncateType:u,children:"middle"===u&&w?S(i):C(i)}),d&&e(Uv,{"aria-label":d,$maxLines:s,$truncateType:u,$labelDisplayType:o,children:"middle"===u&&$?S(d):d})]})};function Xv(e){return()=>e}function Jv(e){e()}function ey(e,t){return r=>e(t(r))}function ty(e,t){return()=>e(t)}function ry(e,t){return r=>e(t,r)}function ny(e){return void 0!==e}function oy(){}function iy(e,t){return t(e),e}function ay(e,t){return t(e)}function sy(...e){return e}function ly(e,t){return e(1,t)}function cy(e,t){e(0,t)}function dy(e){e(2)}function uy(e){return e(4)}function hy(e,t){return ly(e,ry(t,0))}function fy(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function py(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function gy(e,t){return e===t}function my(e=gy){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function by(e){return t=>r=>{e(r)&&t(r)}}function vy(e){return t=>ey(t,e)}function yy(e){return t=>()=>{t(e)}}function xy(e,...t){const r=function(...e){return t=>e.reduceRight(ay,t)}(...t);return(t,n)=>{switch(t){case 2:return void dy(e);case 1:return ly(e,r(n))}}}function wy(e,t){return r=>n=>{r(t=e(t,n))}}function $y(e){return t=>r=>{e>0?e--:t(r)}}function Cy(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function Sy(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);ly(e,(e=>{const s=r;r|=a,t[i]=e,s!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const a=()=>{e([i].concat(t))};r===o?a():n=a}}function ky(e){let t=e;const r=Dy();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function _y(e,t){return iy(ky(t),(t=>hy(e,t)))}function Dy(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function Fy(e){return iy(Dy(),(t=>hy(e,t)))}function Ey(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:Oy(),singleton:r}}const Oy=()=>Symbol();function Ty(...e){const t=Dy(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);ly(e,(e=>{r[i]=e,n|=a,n===o&&cy(t,r)}))})),function(e,i){switch(e){case 2:return void dy(t);case 1:return n===o&&i(r),ly(t,i)}}}function Iy(e,t=gy){return xy(e,my(t))}function My(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(Jv)}}(...e.map((e=>ly(e,r))))}}}var Ay=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Ay||{});const By={0:"debug",3:"error",1:"log",2:"warn"},zy=Ey((()=>{const e=ky(3);return{log:ky(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:uy(e))&&console[By[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function jy(e,t,r){return Ry(e,t,r).callbackRef}function Ry(e,t,r){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function Ly(e,t,r,n,i,a,s,l,c){const d=o.useCallback((r=>{const o=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),c=t(o,r);if(0===c&&n("Zero-sized element, this should not happen",{child:o},Ay.ERROR),c===l)continue;const d=i[i.length-1];0===i.length||d.size!==c||d.endIndex!==s-1?i.push({endIndex:s,size:c,startIndex:s}):i[i.length-1].endIndex++}return i}(r.children,t,l?"offsetWidth":"offsetHeight",i);let c=r.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const d="window"===c.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:d?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?c.scrollLeft:c.scrollTop,h=s?l?s.scrollWidth:s.scrollHeight:d?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?c.scrollWidth:c.scrollHeight,f=s?l?s.offsetWidth:s.offsetHeight:d?l?window.innerWidth:window.innerHeight:l?c.offsetWidth:c.offsetHeight;n({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:f}),null==a||a(l?Py("column-gap",getComputedStyle(r).columnGap,i):Py("row-gap",getComputedStyle(r).rowGap,i)),null!==o&&e(o)}),[e,t,i,a,s,n]);return Ry(d,r,c)}function Py(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Ay.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function Hy(e,t,r){const n=o.useRef(null),i=o.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let a,s;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;s=e.height-Math.max(0,r),a=r+t.scrollTop}else s=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:a,ref:s}=Ry(i,!0,r),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),a}const Ny=Ey((()=>{const e=Dy(),t=Dy(),r=ky(0),n=Dy(),o=ky(0),i=Dy(),a=Dy(),s=ky(0),l=ky(0),c=ky(0),d=ky(0),u=Dy(),h=Dy(),f=ky(!1),p=ky(!1),g=ky(!1);return hy(xy(e,vy((({scrollTop:e})=>e))),t),hy(xy(e,vy((({scrollHeight:e})=>e))),a),hy(t,o),{deviation:r,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:d,headerHeight:s,horizontalDirection:p,scrollBy:h,scrollContainerState:e,scrollHeight:a,scrollingInProgress:f,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:g,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),Wy={lvl:0};function Vy(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let a=1;a<r;a++){const{index:r,value:s}=t(e[a]);i.push({end:r-1,start:n,value:o}),n=r,o=s}return i.push({end:1/0,start:n,value:o}),i}function Yy(e){return e===Wy}function Uy(e,t){if(!Yy(e))return t===e.k?e.v:t<e.k?Uy(e.l,t):Uy(e.r,t)}function qy(e,t,r="k"){if(Yy(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=qy(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return qy(e.l,t,r)}function Ky(e,t,r){return Yy(e)?ix(t,r,1):t===e.k?tx(e,{k:t,v:r}):t<e.k?ax(tx(e,{l:Ky(e.l,t,r)})):ax(tx(e,{r:Ky(e.r,t,r)}))}function Zy(){return Wy}function Gy(e,t,r){if(Yy(e))return[];return function(e){return Vy(e,(({k:e,v:t})=>({index:e,value:t})))}(Jy(e,qy(e,t)[0],r))}function Qy(e,t){if(Yy(e))return Wy;const{k:r,l:n,r:o}=e;if(t===r){if(Yy(n))return o;if(Yy(o))return n;{const[t,r]=ox(n);return ex(tx(e,{k:t,l:rx(n),v:r}))}}return ex(tx(e,t<r?{l:Qy(n,t)}:{r:Qy(o,t)}))}function Xy(e){return Yy(e)?[]:[...Xy(e.l),{k:e.k,v:e.v},...Xy(e.r)]}function Jy(e,t,r){if(Yy(e))return[];const{k:n,l:o,r:i,v:a}=e;let s=[];return n>t&&(s=s.concat(Jy(o,t,r))),n>=t&&n<=r&&s.push({k:n,v:a}),n<=r&&(s=s.concat(Jy(i,t,r))),s}function ex(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(nx(t))return sx(tx(e,{lvl:r-1}));if(!Yy(t)&&!Yy(t.r))return tx(t.r,{l:tx(t,{r:t.r.l}),lvl:r,r:tx(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(nx(e))return lx(tx(e,{lvl:r-1}));if(Yy(n)||Yy(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=nx(t)?n.lvl-1:n.lvl;return tx(t,{l:tx(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:lx(tx(n,{l:t.r,lvl:o}))})}}function tx(e,t){return ix(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function rx(e){return Yy(e.r)?e.l:ex(tx(e,{r:rx(e.r)}))}function nx(e){return Yy(e)||e.lvl>e.r.lvl}function ox(e){return Yy(e.r)?[e.k,e.v]:ox(e.r)}function ix(e,t,r,n=Wy,o=Wy){return{k:e,l:n,lvl:r,r:o,v:t}}function ax(e){return lx(sx(e))}function sx(e){const{l:t}=e;return Yy(t)||t.lvl!==e.lvl?e:tx(t,{r:tx(e,{l:t.r})})}function lx(e){const{lvl:t,r:r}=e;return Yy(r)||Yy(r.r)||r.lvl!==t||r.r.lvl!==t?e:tx(r,{l:tx(e,{r:r.l}),lvl:t+1})}function cx(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function dx(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const ux=Ey((()=>({recalcInProgress:ky(!1)})),[],{singleton:!0});function hx(e,t,r){return e[fx(e,t,r)]}function fx(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),a=r(e[i],t);if(0===a)return i;if(-1===a){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function px(e,t){return Math.round(e.getBoundingClientRect()[t])}function gx(e){return!Yy(e.groupOffsetTree)}function mx({index:e},t){return t===e?0:t<e?-1:1}function bx({offset:e},t){return t===e?0:t<e?-1:1}function vx(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=hx(t,e,mx),a=e-n,s=i*a+(a-1)*r+o;return s>0?s+r:s}function yx(e,t){if(!gx(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function xx(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=yx("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function wx(e,t,r,n=0){return n>0&&(t=Math.max(t,hx(e,n,mx).offset)),Vy(function(e,t,r,n){const o=fx(e,t,n),i=fx(e,r,n,o);return e.slice(o,i+1)}(e,t,r,bx),kx)}function $x(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,Ay.DEBUG);const i=e.sizeTree;let a=i,s=0;if(r.length>0&&Yy(i)&&2===t.length){const e=t[0].size,n=t[1].size;a=r.reduce(((t,r)=>Ky(Ky(t,r,e),r+1,n)),a)}else[a,s]=function(e,t){let r=Yy(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),Yy(e)){e=Ky(e,0,o);continue}const a=Gy(e,i-1,t+1);if(a.some(_x(n)))continue;let s=!1,l=!1;for(const{end:r,start:n,value:i}of a)s?(t>=n||o===i)&&(e=Qy(e,n)):(l=i!==o,s=!0),r>t&&t>=n&&i!==o&&(e=Ky(e,t+1,i));l&&(e=Ky(e,i,o))}return[e,r]}(a,t);if(a===i)return e;const{lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u}=Sx(e.offsetTree,s,a,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>Ky(e,t,vx(t,u,o))),Zy()),lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u,sizeTree:a}}function Cx(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function Sx(e,t,r,n){let o=e,i=0,a=0,s=0,l=0;if(0!==t){l=fx(o,t-1,mx),s=o[l].offset;const e=qy(r,t-1);i=e[0],a=e[1],o.length&&o[l].size===qy(r,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of Gy(r,t,1/0)){const t=e-i,r=t*a+s+t*n;o.push({index:e,offset:r,size:l}),i=e,s=r,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function kx(e){return{index:e.index,value:e}}function _x(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const Dx={offsetHeight:"height",offsetWidth:"width"},Fx=Ey((([{log:e},{recalcInProgress:t}])=>{const r=Dy(),n=Dy(),o=_y(n,0),i=Dy(),a=Dy(),s=ky(0),l=ky([]),c=ky(void 0),d=ky(void 0),u=ky(((e,t)=>px(e,Dx[t]))),h=ky(void 0),f=ky(0),p={groupIndices:[],groupOffsetTree:Zy(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:Zy()},g=_y(xy(r,Sy(l,e,f),wy($x,p),my()),p),m=_y(xy(l,my(),wy(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),vy((({prev:e})=>e))),[]);hy(xy(l,by((e=>e.length>0)),Sy(g,f),vy((([e,t,r])=>{const n=e.reduce(((e,n,o)=>Ky(e,n,vx(n,t.offsetTree,r)||o)),Zy());return{...t,groupIndices:e,groupOffsetTree:n}}))),g),hy(xy(n,Sy(g),by((([e,{lastIndex:t}])=>e<t)),vy((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),hy(c,d);const b=_y(xy(c,vy((e=>void 0===e))),!0);hy(xy(d,by((e=>void 0!==e&&Yy(uy(g).sizeTree))),vy((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=Fy(xy(r,Sy(g),wy((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:p}),vy((e=>e.changed))));ly(xy(s,wy(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),vy((e=>e.diff))),(e=>{const{groupIndices:r}=uy(g);if(e>0)cy(t,!0),cy(i,e+Cx(e,r));else if(e<0){const t=uy(m);t.length>0&&(e-=Cx(-e,t)),cy(a,e)}})),ly(xy(s,Sy(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},Ay.ERROR)}));const y=Fy(i);hy(xy(i,Sy(g),vy((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=Uy(t.sizeTree,0);let i=0,a=0;for(;i<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=Xy(t.sizeTree);return i!==e&&s.shift(),s.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return Xy(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=Fy(xy(a,Sy(g,f),vy((([e,{offsetTree:t},r])=>vx(-e,t,r)))));return hy(xy(a,Sy(g,f),vy((([e,t,r])=>{if(t.groupIndices.length>0){if(Yy(t.sizeTree))return t;let n=Zy();const o=uy(m);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(n=Xy(t.sizeTree).reduce(((t,{k:r,v:n})=>Ky(t,Math.max(0,r+e),n)),n),i!==-e){n=Ky(n,0,Uy(t.sizeTree,s));n=Ky(n,1,qy(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...Sx(t.offsetTree,0,n,r)}}{const n=Xy(t.sizeTree).reduce(((t,{k:r,v:n})=>Ky(t,Math.max(0,r+e),n)),Zy());return{...t,sizeTree:n,...Sx(t.offsetTree,0,n,r)}}}))),g),{beforeUnshiftWith:y,data:h,defaultItemSize:d,firstItemIndex:s,fixedItemSize:c,gap:f,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:r,sizes:g,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),sy(zy,ux),{singleton:!0});function Ex(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Ox=Ey((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=Dy(),a=Dy(),s=Fy(xy(i,vy(Ex)));return hy(xy(s,vy((e=>e.totalCount))),r),hy(xy(s,vy((e=>e.groupIndices))),e),hy(xy(Ty(o,t,n),by((([e,t])=>gx(t))),vy((([e,t,r])=>qy(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),my(),vy((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),sy(Fx,Ny)),Tx=Ey((([{log:e}])=>{const t=ky(!1),r=Fy(xy(t,by((e=>e)),my()));return ly(t,(t=>{t&&uy(e)("props updated",{},Ay.DEBUG)})),{didMount:r,propsReady:t}}),sy(zy),{singleton:!0}),Ix=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Mx(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!Ix)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const Ax=Ey((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:d,viewportHeight:u},{log:h}])=>{const f=Dy(),p=Dy(),g=ky(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),cy(l,!1)}return hy(xy(f,Sy(r,u,n,g,s,a,h),Sy(e,i,o),vy((([[e,r,n,o,i,a,s,c],u,h,g])=>{const x=Mx(e),{align:w,behavior:$,offset:C}=x,S=o-1,k=xx(x,r,S);let _=vx(k,r.offsetTree,u)+a;"end"===w?(_+=h+qy(r.sizeTree,k)[1]-n+g,k===S&&(_+=s)):"center"===w?_+=(h+qy(r.sizeTree,k)[1]-n+g)/2:_-=i,C&&(_+=C);const D=t=>{y(),t?(c("retrying to scroll to",{location:e},Ay.DEBUG),cy(f,e)):(cy(p,!0),c("list did not change, scroll successful",{},Ay.DEBUG))};if(y(),"smooth"===$){let e=!1;v=ly(t,(t=>{e=e||t})),m=fy(d,(()=>{D(e)}))}else m=fy(xy(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),D);return b=setTimeout((()=>{y()}),1200),cy(l,!0),c("scrolling from index to",{behavior:$,index:k,top:_},Ay.DEBUG),{behavior:$,top:_}}))),c),{scrollTargetReached:p,scrollToIndex:f,topListHeight:g}}),sy(Fx,Ny,zy),{singleton:!0});function Bx(e,t){0==e?t():requestAnimationFrame((()=>{Bx(e-1,t)}))}function zx(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const jx=Ey((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=ky(!0),l=ky(0),c=ky(!0);return hy(xy(a,Sy(l),by((([e,t])=>!!t)),yy(!1)),s),hy(xy(a,Sy(l),by((([e,t])=>!!t)),yy(!1)),c),ly(xy(Ty(t,a),Sy(s,r,e,c),by((([[,e],t,{sizeTree:r},n,o])=>e&&(!Yy(r)||ny(n))&&!t&&!o)),Sy(l)),(([,e])=>{fy(o,(()=>{cy(c,!0)})),Bx(4,(()=>{fy(n,(()=>{cy(s,!0)})),cy(i,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),sy(Fx,Ny,Ax,Tx),{singleton:!0});function Rx(e,t){return Math.abs(e-t)<1.01}const Lx="up",Px="down",Hx={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},Nx=Ey((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const a=ky(!1),s=ky(!0),l=Dy(),c=Dy(),d=ky(4),u=ky(0),h=_y(xy(My(xy(Iy(o),$y(1),yy(!0)),xy(Iy(o),$y(1),yy(!1),py(100))),my()),!1),f=_y(xy(My(xy(r,yy(!0)),xy(r,yy(!1),py(200))),my()),!1);hy(xy(Ty(Iy(o),Iy(u)),vy((([e,t])=>e<=t)),my()),s),hy(xy(s,Cy(50)),c);const p=Fy(xy(Ty(n,Iy(i),Iy(t),Iy(e),Iy(d)),wy(((e,[{scrollHeight:t,scrollTop:r},n,o,i,a])=>{const s={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-a){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),Hx),my(((e,t)=>e&&e.atBottom===t.atBottom)))),g=_y(xy(n,wy(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(Rx(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),by((e=>e.changed)),vy((e=>e.jump))),0);hy(xy(p,vy((e=>e.atBottom))),a),hy(xy(a,Cy(50)),l);const m=ky(Px);hy(xy(n,vy((({scrollTop:e})=>e)),my(),wy(((e,t)=>uy(f)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?Lx:Px,prevScrollTop:t}),{direction:Px,prevScrollTop:0}),vy((e=>e.direction))),m),hy(xy(n,Cy(50),yy("none")),m);const b=ky(0);return hy(xy(h,by((e=>!e)),yy(0)),b),hy(xy(o,Cy(100),Sy(h),by((([e,t])=>!!t)),wy((([e,t],[r])=>[t,r]),[0,0]),vy((([e,t])=>t-e))),b),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:d,atTopStateChange:c,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:h,lastJumpDueToItemResize:g,scrollDirection:m,scrollVelocity:b}}),sy(Ny)),Wx="top",Vx="bottom",Yx="none";function Ux(e,t,r){return"number"==typeof e?r===Lx&&t===Wx||r===Px&&t===Vx?e:0:r===Lx?t===Wx?e.main:e.reverse:t===Vx?e.main:e.reverse}function qx(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const Kx=Ey((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=Dy(),a=ky(0),s=ky(0),l=ky(0),c=_y(xy(Ty(Iy(n),Iy(o),Iy(r),Iy(i,dx),Iy(l),Iy(a),Iy(t),Iy(e),Iy(s)),vy((([e,t,r,[n,o],i,a,s,l,c])=>{const d=e-l,u=a+s,h=Math.max(r-d,0);let f=Yx;const p=qx(c,Wx),g=qx(c,Vx);return n-=l,o+=r+s,(n+=r+s)>e+u-p&&(f=Lx),(o-=l)<e-h+t+g&&(f=Px),f!==Yx?[Math.max(d-r-Ux(i,Wx,f)-p,0),d-h-s+t+Ux(i,Vx,f)+g]:null})),by((e=>null!=e)),my(dx)),[0,0]);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:c}}),sy(Ny),{singleton:!0});const Zx={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function Gx(e,t,r,n,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let c=0,d=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];d=t.offset+t.size}const u=r-a,h=c,f=s+u*l+(u-1)*n-d;return{bottom:d,firstItemIndex:i,items:Xx(e,o,i),offsetBottom:f,offsetTop:c,top:h,topItems:Xx(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function Qx(e,t,r,n,o,i){let a=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=zx(t,s);return Gx(Array.from({length:s}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],s,o,r,n)}function Xx(e,t,r){if(0===e.length)return[];if(!gx(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],a=Gy(t.groupOffsetTree,n,o);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const Jx=Ey((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:d},{topListHeight:u},h,{didMount:f},{recalcInProgress:p}])=>{const g=ky([]),m=ky(0),b=Dy();hy(i.topItemsIndexes,g);const v=_y(xy(Ty(f,p,Iy(l,dx),Iy(o),Iy(n),Iy(c),d,Iy(g),Iy(t),Iy(r),e),by((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),vy((([,,[e,t],r,n,o,i,a,s,l,c])=>{const d=n,{offsetTree:u,sizeTree:h}=d,f=uy(m);if(0===r)return{...Zx,totalCount:r};if(0===e&&0===t)return 0===f?{...Zx,totalCount:r}:Qx(f,o,n,s,l,c||[]);if(Yy(h))return f>0?null:Gx(function(e,t,r){if(gx(t)){const n=yx(e,t);return[{index:qy(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(zx(o,r),d,c),[],r,l,d,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let r=0;for(const n of Gy(h,e,t)){const o=n.value,i=Math.max(n.start,e),a=Math.min(n.end,t);for(let e=i;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:r,size:o}),r+=o}}if(!i)return Gx([],p,r,l,d,s);const g=a.length>0?a[a.length-1]+1:0,b=wx(u,e,t,g);if(0===b.length)return null;const v=r-1;return Gx(iy([],(r=>{for(const n of b){const o=n.value;let i=o.offset,a=n.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const t=a-n.start;i+=t*s+t*l}a<g&&(i+=(g-a)*s,a=g);const d=Math.min(n.end,v);for(let e=a;e<=d&&!(i>=t);e++)r.push({data:null==c?void 0:c[e],index:e,offset:i,size:s}),i+=s+l}})),p,r,l,d,s)})),by((e=>null!==e)),my()),Zx);hy(xy(e,by(ny),vy((e=>null==e?void 0:e.length))),o),hy(xy(v,vy((e=>e.topListHeight))),u),hy(u,s),hy(xy(v,vy((e=>[e.top,e.bottom]))),a),hy(xy(v,vy((e=>e.items))),b);const y=Fy(xy(v,by((({items:e})=>e.length>0)),Sy(o,e),by((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),vy((([,e,t])=>[e-1,t])),my(dx),vy((([e])=>e)))),x=Fy(xy(v,Cy(200),by((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),vy((({items:e})=>e[0].index)),my())),w=Fy(xy(v,by((({items:e})=>e.length>0)),vy((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),my(cx)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:g,...h}}),sy(Fx,Ox,Kx,jx,Ax,Nx,Tx,ux),{singleton:!0}),ew=Ey((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=Dy(),a=_y(xy(Ty(r,e,n,t,o),vy((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return hy(Iy(a),i),{totalListHeight:a,totalListHeightChanged:i}}),sy(Ny,Jx),{singleton:!0}),tw=Ey((([{viewportHeight:e},{totalListHeight:t}])=>{const r=ky(!1),n=_y(xy(Ty(r,e,t),by((([e])=>e)),vy((([,e,t])=>Math.max(0,e-t))),Cy(0),my()),0);return{alignToBottom:r,paddingTopAddition:n}}),sy(Ny,ew),{singleton:!0});function rw(e){return!!e&&("smooth"===e?"smooth":"auto")}const nw=Ey((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:c}])=>{const d=ky(!1),u=Dy();let h=null;function f(e){cy(o,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=fy(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(uy(l)("scrolling to bottom due to increased size",{},Ay.DEBUG),f("auto"))}));setTimeout(t,100)}return ly(xy(Ty(xy(Iy(t),$y(1)),a),Sy(Iy(d),n,i,c),vy((([[e,t],r,n,o,i])=>{let a=t&&o,s="auto";return a&&(s=((e,t)=>"function"==typeof e?rw(e(t)):t&&rw(e))(r,n||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),by((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),h=fy(e,(()=>{uy(l)("following output to ",{totalCount:r},Ay.DEBUG),f(t),h=null}))})),ly(xy(Ty(Iy(d),t,s),by((([e,,t])=>e&&t)),wy((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),by((({refreshed:e})=>e)),Sy(d,t)),(([,e])=>{uy(i)&&p(!1!==e)})),ly(u,(()=>{p(!1!==uy(d))})),ly(Ty(Iy(d),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&f("auto")})),{autoscrollToBottom:u,followOutput:d}}),sy(Fx,Nx,Ax,jx,Tx,zy,Ny)),ow=Ey((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(hy(xy(s,Sy(i),by((([,e])=>0!==e)),Sy(o,n,t,r,e),vy((([[,e],t,r,n,o,i=[]])=>Qx(e,t,r,n,o,i)))),a),{})),sy(Fx,jx,Jx,Tx),{singleton:!0}),iw=Ey((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=ky(0);return ly(xy(e,Sy(n),by((([,e])=>0!==e)),vy((([,e])=>({top:e})))),(e=>{fy(xy(r,$y(1),by((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{cy(t,e)}))}))})),{initialScrollTop:n}}),sy(Tx,Ny,Jx),{singleton:!0}),aw=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:a})=>t<a?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,sw=Ey((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const d=Dy();return hy(xy(d,Sy(t,l,r,i,o,n,s),Sy(e),vy((([[e,t,r,n,o,i,s,l],c])=>{const{align:d,behavior:u,calculateViewLocation:h=aw,done:f,...p}=e,g=xx(e,t,n-1),m=vx(g,t.offsetTree,c)+o+i,b=h({itemBottom:m+qy(t.sizeTree,g)[1],itemTop:m,locationParams:{align:d,behavior:u,...p},viewportBottom:l+r-s,viewportTop:l+i});return b?f&&fy(xy(a,by((e=>!e)),$y(uy(a)?1:2)),f):f&&f(),b})),by((e=>null!==e))),c),{scrollIntoView:d}}),sy(Fx,Ny,Ax,Jx,zy),{singleton:!0}),lw=Ey((([{scrollVelocity:e}])=>{const t=ky(!1),r=Dy(),n=ky(!1);return hy(xy(e,Sy(n,t,r),by((([e,t])=>!!t)),vy((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),my()),t),ly(xy(Ty(t,e,r),Sy(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),sy(Nx),{singleton:!0}),cw=Ey((([{scrollContainerState:e,scrollTo:t}])=>{const r=Dy(),n=Dy(),o=Dy(),i=ky(!1),a=ky(void 0);return hy(xy(Ty(r,n),vy((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),hy(xy(t,Sy(n),vy((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),sy(Ny)),dw=Ey((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=Dy(),d=ky(void 0),u=ky(null),h=ky(null);return hy(s,u),hy(l,h),ly(xy(c,Sy(t,n,a,u,h,r)),(([e,t,r,n,o,i,a])=>{const s=function(e){return Xy(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:r-=a})})),hy(xy(d,by(ny),vy(uw)),o),hy(xy(i,Sy(d),by((([,e])=>void 0!==e)),my(),vy((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:d}}),sy(Fx,Ny,jx,Tx,cw));function uw(e){return{align:"start",index:0,offset:e.scrollTop}}const hw=Ey((([{topItemsIndexes:e}])=>{const t=ky(0);return hy(xy(t,by((e=>e>=0)),vy((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),sy(Jx));function fw(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const pw=fw((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),gw=Ey((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:d,shiftWithOffset:u,sizes:h},{log:f},{recalcInProgress:p}])=>{const g=Fy(xy(l,Sy(a),wy((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:a},s])=>{const l=n+i;let c=0;return t===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(c=l-r,0!==c&&(c+=s))),[c,o,a,l]}),[0,[],0,0]),by((([e])=>0!==e)),Sy(n,s,r,o,f,p),by((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===Lx)),vy((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},Ay.DEBUG),e)))));function m(r){r>0?(cy(t,{behavior:"auto",top:-r}),cy(e,0)):(cy(e,0),cy(t,{behavior:"auto",top:-r}))}return ly(xy(g,Sy(e,i)),(([t,r,n])=>{n&&pw()?cy(e,r-t):m(-t)})),ly(xy(Ty(_y(i,!1),e,p),by((([e,t,r])=>!e&&!r&&0!==t)),vy((([e,t])=>t)),Cy(1)),m),hy(xy(u,vy((e=>({top:-e})))),t),ly(xy(c,Sy(h,d),vy((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=Uy(n,0);let a=0,s=0;for(;a<e;){a++,r+=o;let n=t.length===s+1?1/0:t[s+1]-t[s]-1;a+n>e&&(r-=o,n=e-a+1),a+=n,r+=i(n),s++}return r}}))),(r=>{cy(e,r),requestAnimationFrame((()=>{cy(t,{top:r}),requestAnimationFrame((()=>{cy(e,0),cy(p,!1)}))}))})),{deviation:e}}),sy(Ny,Nx,Jx,Fx,zy,ux)),mw=Ey((([e,t,r,n,o,i,a,s,l,c])=>({...e,...t,...r,...n,...o,...i,...a,...s,...l,...c})),sy(Kx,ow,Tx,lw,ew,iw,tw,cw,sw,zy)),bw=Ey((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:d,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:p},g,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:S},k])=>(hy(x.rangeChanged,k.scrollSeekRangeChanged),hy(xy(k.windowViewportRect,vy((e=>e.visibleHeight))),g.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:S,initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:p,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:d,...b,groupIndices:i,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:u,...x,...k,...g,sizes:l,...m})),sy(Fx,jx,Ny,dw,nw,Jx,Ax,gw,hw,Ox,mw));function vw(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const yw=typeof document<"u"?o.useLayoutEffect:o.useEffect;function xw(t,r,n){const i=Object.keys(r.required||{}),a=Object.keys(r.optional||{}),s=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),c=o.createContext({});function d(e,t){e.propsReady&&cy(e.propsReady,!1);for(const n of i){cy(e[r.required[n]],t[n])}for(const n of a)if(n in t){cy(e[r.optional[n]],t[n])}e.propsReady&&cy(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?r===i?void 0:(n(),r=i,t=ly(e,i),t):(n(),oy);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const h=o.forwardRef(((h,f)=>{const{children:p,...g}=h,[m]=o.useState((()=>iy(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const a=e(n.map((e=>r(e))));return i&&t.set(o,a),a};return r(e)}(t),(e=>{d(e,g)})))),[b]=o.useState(ty(u,m));yw((()=>{for(const e of l)e in g&&ly(b[e],g[e]);return()=>{Object.values(b).map(dy)}}),[g,b,m]),yw((()=>{d(m,g)})),o.useImperativeHandle(f,Xv(function(e){return s.reduce(((t,n)=>(t[n]=t=>{cy(e[r.methods[n]],t)},t)),{})}(m)));const v=n;return e(c.Provider,{value:m,children:n?e(v,{...vw([...i,...a,...l],g),children:p}):p})})),f=o.version.startsWith("18")?e=>{const t=o.useContext(c)[e],r=o.useCallback((e=>ly(t,e)),[t]);return o.useSyncExternalStore(r,(()=>uy(t)),(()=>uy(t)))}:e=>{const t=o.useContext(c)[e],[r,n]=o.useState(ty(uy,t));return yw((()=>ly(t,(e=>{e!==r&&n(Xv(e))}))),[t,r]),r};return{Component:h,useEmitter:(e,t)=>{const r=o.useContext(c)[e];yw((()=>ly(r,t)),[t,r])},useEmitterValue:f,usePublisher:e=>o.useCallback(ry(cy,o.useContext(c)[e]),[e])}}const ww=o.createContext(void 0),$w=o.createContext(void 0),Cw=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Sw(e,t,r,n=oy,i,a){const s=o.useRef(null),l=o.useRef(null),c=o.useRef(null),d=o.useCallback((r=>{const n=r.target,o=n===window||n===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,d=a?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(i,0),viewportHeight:d})};r.suppressFlushSync?u():U.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===s-d)&&(l.current=null,t(!0),c.current&&(clearTimeout(c.current),c.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||s.current;return n(i||s.current),d({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",d,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",d)}}),[s,d,r,n,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(r){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let i,d,u;n===window?(d=Math.max(px(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(d=n[a?"scrollWidth":"scrollHeight"],i=px(n,a?"width":"height"),u=n[a?"scrollLeft":"scrollTop"]);const h=d-i;if(r.top=Math.ceil(Math.max(Math.min(h,r.top),0)),Rx(i,d)||r.top===u)return e({scrollHeight:d,scrollTop:u,viewportHeight:i}),void(o&&t(!0));o?(l.current=r.top,c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{c.current=null,l.current=null,t(!0)}),1e3)):l.current=null,a&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const kw="-webkit-sticky",_w="sticky",Dw=fw((()=>{if(typeof document>"u")return _w;const e=document.createElement("div");return e.style.position=kw,e.style.position===kw?kw:_w}));function Fw(e){return e}const Ew=Ey((()=>{const e=ky((e=>`Item ${e}`)),t=ky(null),r=ky((e=>`Group ${e}`)),n=ky({}),o=ky(Fw),i=ky("div"),a=ky(oy),s=(e,t=null)=>_y(xy(n,vy((t=>t[e])),my()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:r,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),Ow=Ey((([e,t])=>({...e,...t})),sy(bw,Ew)),Tw=({height:t})=>e("div",{style:{height:t}}),Iw={overflowAnchor:"none",position:Dw(),zIndex:1},Mw={overflowAnchor:"none"},Aw={...Mw,display:"inline-block",height:"100%"},Bw=o.memo((function({showTopList:t=!1}){const r=Xw("listState"),n=Jw("sizeRanges"),i=Xw("useWindowScroll"),a=Xw("customScrollParent"),s=Jw("windowScrollContainerState"),l=Jw("scrollContainerState"),c=a||i?s:l,d=Xw("itemContent"),u=Xw("context"),h=Xw("groupContent"),f=Xw("trackItemSizes"),p=Xw("itemSize"),g=Xw("log"),m=Jw("gap"),b=Xw("horizontalDirection"),{callbackRef:v}=Ly(n,p,f,t?oy:c,g,m,a,b,Xw("skipAnimationFrameInResizeObserver")),[y,x]=o.useState(0);Qw("deviation",(e=>{y!==e&&x(e)}));const w=Xw("EmptyPlaceholder"),C=Xw("ScrollSeekPlaceholder")||Tw,S=Xw("ListComponent"),k=Xw("ItemComponent"),_=Xw("GroupComponent"),D=Xw("computeItemKey"),F=Xw("isSeeking"),E=Xw("groupIndices").length>0,O=Xw("alignToBottom"),T=Xw("initialItemFinalLocationReached"),I=t?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:O?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:O?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...T?{}:{visibility:"hidden"}};return!t&&0===r.totalCount&&w?e(w,{...Pw(w,u)}):e(S,{...Pw(S,u),"data-testid":t?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:I,children:(t?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=D(t+r.firstItemIndex,e.data,u);return F?$(C,{...Pw(C,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?$(_,{...Pw(_,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:Iw},h(e.index,u)):$(k,{...Pw(k,u),...Hw(k,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:b?Aw:Mw},E?d(e.index,e.groupIndex,e.data,u):d(e.index,e.data,u))}))})})),zw={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},jw={outline:"none",overflowX:"auto",position:"relative"},Rw=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),Lw={position:Dw(),top:0,width:"100%",zIndex:1};function Pw(e,t){if("string"!=typeof e)return{context:t}}function Hw(e,t){return{item:"string"==typeof e?void 0:t}}const Nw=o.memo((function(){const t=Xw("HeaderComponent"),r=Jw("headerHeight"),n=Xw("HeaderFooterTag"),i=jy(o.useMemo((()=>e=>{r(px(e,"height"))}),[r]),!0,Xw("skipAnimationFrameInResizeObserver")),a=Xw("context");return t?e(n,{ref:i,children:e(t,{...Pw(t,a)})}):null})),Ww=o.memo((function(){const t=Xw("FooterComponent"),r=Jw("footerHeight"),n=Xw("HeaderFooterTag"),i=jy(o.useMemo((()=>e=>{r(px(e,"height"))}),[r]),!0,Xw("skipAnimationFrameInResizeObserver")),a=Xw("context");return t?e(n,{ref:i,children:e(t,{...Pw(t,a)})}):null}));function Vw({useEmitter:t,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("scrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("scrollerRef"),u=r("context"),h=r("horizontalDirection")||!1,{scrollByCallback:f,scrollerRef:p,scrollToCallback:g}=Sw(s,c,l,d,void 0,h);return t("scrollTo",g),t("scrollBy",f),e(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...h?jw:zw,...i},tabIndex:0,...a,...Pw(l,u),children:o})}))}function Yw({useEmitter:t,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("windowScrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("totalListHeight"),u=r("deviation"),h=r("customScrollParent"),f=r("context"),{scrollByCallback:p,scrollerRef:g,scrollToCallback:m}=Sw(s,c,l,oy,h);return Cw((()=>(g.current=h||window,()=>{g.current=null})),[g,h]),t("windowScrollTo",m),t("scrollBy",p),e(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==d?{height:d+u}:{}},...a,...Pw(l,f),children:o})}))}const Uw=({children:t})=>{const r=o.useContext(ww),n=Jw("viewportHeight"),i=Jw("fixedItemHeight"),a=Xw("alignToBottom"),s=Xw("horizontalDirection"),l=jy(o.useMemo((()=>ey(n,(e=>px(e,s?"width":"height")))),[n,s]),!0,Xw("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),e("div",{"data-viewport-type":"element",ref:l,style:Rw(a),children:t})},qw=({children:t})=>{const r=o.useContext(ww),n=Jw("windowViewportRect"),i=Jw("fixedItemHeight"),a=Xw("customScrollParent"),s=Hy(n,a,Xw("skipAnimationFrameInResizeObserver")),l=Xw("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),e("div",{"data-viewport-type":"window",ref:s,style:Rw(l),children:t})},Kw=({children:t})=>{const r=Xw("TopItemListComponent")||"div",n=Xw("headerHeight"),o={...Lw,marginTop:`${n}px`},i=Xw("context");return e(r,{style:o,...Pw(r,i),children:t})},Zw=o.memo((function(r){const n=Xw("useWindowScroll"),o=Xw("topItemsIndexes").length>0,i=Xw("customScrollParent"),a=Xw("context"),s=i||n?t$:e$,l=i||n?qw:Uw;return t(s,{...r,...Pw(s,a),children:[o&&e(Kw,{children:e(Bw,{showTopList:!0})}),t(l,{children:[e(Nw,{}),e(Bw,{}),e(Ww,{})]})]})})),{Component:Gw,useEmitter:Qw,useEmitterValue:Xw,usePublisher:Jw}=xw(Ow,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},Zw),e$=Vw({useEmitter:Qw,useEmitterValue:Xw,usePublisher:Jw}),t$=Yw({useEmitter:Qw,useEmitterValue:Xw,usePublisher:Jw}),r$=Gw,n$={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},o$={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:i$,floor:a$,max:s$,min:l$,round:c$}=Math;function d$(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function u$(e,t){return e&&e.width===t.width&&e.height===t.height}function h$(e,t){return e&&e.column===t.column&&e.row===t.row}const f$=Ey((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:d,viewportHeight:u},h,f,{didMount:p,propsReady:g},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=ky(0),C=ky(0),S=ky(n$),k=ky({height:0,width:0}),_=ky({height:0,width:0}),D=Dy(),F=Dy(),E=ky(0),O=ky(null),T=ky({column:0,row:0}),I=Dy(),M=Dy(),A=ky(!1),B=ky(0),z=ky(!0),j=ky(!1),R=ky(!1);ly(xy(p,Sy(B),by((([e,t])=>!!t))),(()=>{cy(z,!1)})),ly(xy(Ty(p,z,_,k,B,j),by((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{cy(j,!0),Bx(1,(()=>{cy(D,e)})),fy(xy(c),(()=>{cy(t,[0,0]),cy(z,!0)}))})),hy(xy(M,by((e=>null!=e&&e.scrollTop>0)),yy(0)),C),ly(xy(p,Sy(M),by((([,e])=>null!=e))),(([,e])=>{e&&(cy(k,e.viewport),cy(_,e.item),cy(T,e.gap),e.scrollTop>0&&(cy(A,!0),fy(xy(c,$y(1)),(e=>{cy(A,!1)})),cy(l,{top:e.scrollTop})))})),hy(xy(k,vy((({height:e})=>e))),u),hy(xy(Ty(Iy(k,u$),Iy(_,u$),Iy(T,((e,t)=>e&&e.column===t.column&&e.row===t.row)),Iy(c)),vy((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),I),hy(xy(Ty(Iy($),n,Iy(T,h$),Iy(_,u$),Iy(k,u$),Iy(O),Iy(C),Iy(A),Iy(z),Iy(B)),by((([,,,,,,,e])=>!e)),vy((([e,[t,r],n,o,i,a,s,,l,c])=>{const{column:d,row:u}=n,{height:h,width:f}=o,{width:p}=i;if(0===s&&(0===e||0===p))return n$;if(0===f){const t=zx(c,e);return function(e){return{...o$,items:e}}(d$(t,t+Math.max(s-1,0),a))}const g=p$(p,f,d);let m,b;l?0===t&&0===r&&s>0?(m=0,b=s-1):(m=g*a$((t+u)/(h+u)),b=g*i$((r+u)/(h+u))-1,b=l$(e-1,s$(b,g-1)),m=l$(b,s$(0,m))):(m=0,b=-1);const v=d$(m,b,a),{bottom:y,top:x}=g$(i,n,o,v),w=i$(e/g);return{bottom:y,itemHeight:h,items:v,itemWidth:f,offsetBottom:w*h+(w-1)*u-y,offsetTop:x,top:x}}))),S),hy(xy(O,by((e=>null!==e)),vy((e=>e.length))),$),hy(xy(Ty(k,_,S,T),by((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),vy((([e,t,{items:r},n])=>{const{bottom:o,top:i}=g$(e,n,t,r);return[i,o]})),my(dx)),t);const L=ky(!1);hy(xy(c,Sy(L),vy((([e,t])=>t||0!==e))),L);const P=Fy(xy(Ty(S,$),by((([{items:e}])=>e.length>0)),Sy(L),by((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),vy((([[,e]])=>e-1)),my())),H=Fy(xy(Iy(S),by((({items:e})=>e.length>0&&0===e[0].index)),yy(0),my())),N=Fy(xy(Iy(S),Sy(A),by((([{items:e},t])=>e.length>0&&!t)),vy((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),my(cx),Cy(0)));hy(N,f.scrollSeekRangeChanged),hy(xy(D,Sy(k,_,$,T),vy((([e,t,r,n,o])=>{const i=Mx(e),{align:a,behavior:s,offset:l}=i;let c=i.index;"LAST"===c&&(c=n-1),c=s$(0,c,l$(n-1,c));let d=m$(t,o,r,c);return"end"===a?d=c$(d-t.height+r.height):"center"===a&&(d=c$(d-t.height/2+r.height/2)),l&&(d+=l),{behavior:s,top:d}}))),l);const W=_y(xy(S,vy((e=>e.offsetBottom+e.bottom))),0);return hy(xy(x,vy((e=>({height:e.visibleHeight,width:e.visibleWidth})))),k),{customScrollParent:m,data:O,deviation:E,footerHeight:o,gap:T,headerHeight:i,increaseViewportBy:e,initialItemCount:C,itemDimensions:_,overscan:r,restoreStateFrom:M,scrollBy:a,scrollContainerState:s,scrollHeight:F,scrollTo:l,scrollToIndex:D,scrollTop:c,smoothScrollTargetReached:d,totalCount:$,useWindowScroll:b,viewportDimensions:k,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...f,gridState:S,horizontalDirection:R,initialTopMostItemIndex:B,totalListHeight:W,...h,endReached:P,propsReady:g,rangeChanged:N,startReached:H,stateChanged:I,stateRestoreInProgress:A,...w}}),sy(Kx,Ny,Nx,lw,Tx,cw,zy));function p$(e,t,r){return s$(1,a$((e+r)/(a$(t)+r)))}function g$(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=m$(e,t,r,n[0].index);return{bottom:m$(e,t,r,n[n.length-1].index)+o,top:i}}function m$(e,t,r,n){const o=p$(e.width,r.width,t.column),i=a$(n/o),a=i*r.height+s$(0,i-1)*t.row;return a>0?a+t.row:a}const b$=Ey((()=>{const e=ky((e=>`Item ${e}`)),t=ky({}),r=ky(null),n=ky("virtuoso-grid-item"),o=ky("virtuoso-grid-list"),i=ky(Fw),a=ky("div"),s=ky(oy),l=(e,r=null)=>_y(xy(t,vy((t=>t[e])),my()),r),c=ky(!1),d=ky(!1);return hy(Iy(d),c),{components:t,computeItemKey:i,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:d,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),v$=Ey((([e,t])=>({...e,...t})),sy(f$,b$)),y$=o.memo((function(){const t=D$("gridState"),r=D$("listClassName"),n=D$("itemClassName"),i=D$("itemContent"),a=D$("computeItemKey"),s=D$("isSeeking"),l=F$("scrollHeight"),c=D$("ItemComponent"),d=D$("ListComponent"),u=D$("ScrollSeekPlaceholder"),h=D$("context"),f=F$("itemDimensions"),p=F$("gap"),g=D$("log"),m=D$("stateRestoreInProgress"),b=F$("reportReadyState"),v=jy(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();f({height:e,width:t})}p({column:T$("column-gap",getComputedStyle(e).columnGap,g),row:T$("row-gap",getComputedStyle(e).rowGap,g)})}),[l,f,p,g]),!0,!1);return Cw((()=>{t.itemHeight>0&&t.itemWidth>0&&b(!0)}),[t]),m?null:e(d,{className:r,ref:v,...Pw(d,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},children:t.items.map((r=>{const o=a(r.index,r.data,h);return s?e(u,{...Pw(u,h),height:t.itemHeight,index:r.index,width:t.itemWidth},o):$(c,{...Pw(c,h),className:n,"data-index":r.index,key:o},i(r.index,r.data,h))}))})})),x$=o.memo((function(){const t=D$("HeaderComponent"),r=F$("headerHeight"),n=D$("headerFooterTag"),i=jy(o.useMemo((()=>e=>{r(px(e,"height"))}),[r]),!0,!1),a=D$("context");return t?e(n,{ref:i,children:e(t,{...Pw(t,a)})}):null})),w$=o.memo((function(){const t=D$("FooterComponent"),r=F$("footerHeight"),n=D$("headerFooterTag"),i=jy(o.useMemo((()=>e=>{r(px(e,"height"))}),[r]),!0,!1),a=D$("context");return t?e(n,{ref:i,children:e(t,{...Pw(t,a)})}):null})),$$=({children:t})=>{const r=o.useContext($w),n=F$("itemDimensions"),i=F$("viewportDimensions"),a=jy(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),e("div",{ref:a,style:Rw(!1),children:t})},C$=({children:t})=>{const r=o.useContext($w),n=F$("windowViewportRect"),i=F$("itemDimensions"),a=D$("customScrollParent"),s=Hy(n,a,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),e("div",{ref:s,style:Rw(!1),children:t})},S$=o.memo((function({...r}){const n=D$("useWindowScroll"),o=D$("customScrollParent"),i=o||n?O$:E$,a=o||n?C$:$$,s=D$("context");return e(i,{...r,...Pw(i,s),children:t(a,{children:[e(x$,{}),e(y$,{}),e(w$,{})]})})})),{Component:k$,useEmitter:_$,useEmitterValue:D$,usePublisher:F$}=xw(v$,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},S$),E$=Vw({useEmitter:_$,useEmitterValue:D$,usePublisher:F$}),O$=Yw({useEmitter:_$,useEmitterValue:D$,usePublisher:F$});function T$(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Ay.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const I$=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),M$=({children:t})=>{const[r,n]=a(-1);return e(I$.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:t})},A$=S.div`
    overflow: hidden;
    border: ${Li["width-010"]} ${Li.solid} ${zi.border};
    border-radius: ${Hi.sm};
    background: ${zi.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?ji["body-md-regular"]:ji["body-baseline-regular"]}

    ${Wi.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Ni["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Wi.MaxWidth.xs} {
        width: calc(100vw - ${Ni["xs-margin"]} * 2);
    }

    ${Wi.MaxWidth.xxs} {
        width: calc(100vw - ${Ni["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${zi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,B$=S.div`
    background: transparent;
    padding: ${Pi["spacing-8"]};
`,z$=S.ul`
    list-style-type: none;
`,j$=S.li`
    display: flex;
    align-items: flex-start;
    gap: ${Pi["spacing-8"]};
    padding: ${Pi["spacing-12"]} ${Pi["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$disabled?k`
                cursor: not-allowed;
            `:e.$active&&e.$selected?k`
                background: ${zi["bg-hover"]};
            `:e.$active?k`
                background: ${zi["bg-hover-subtle"]};
            `:void 0}
`,R$=S(be)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${zi["icon-selected"]};
`,L$=S.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,P$=S(me)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${zi["icon-selected"]};
`,H$=S(pe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${zi["icon-primary-subtlest"]};
`,N$=S(ge)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${zi["icon-disabled-subtle"]};
`,W$=S.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,V$=S(Hl)`
    cursor: pointer;
    overflow: hidden;
    color: ${zi["text-primary"]};
    font-size: inherit;
`,Y$=S(V$)`
    ${ji["body-baseline-semibold"]}
`,U$=S(V$)`
    ${ji["body-md-semibold"]}
    padding: ${Pi["spacing-8"]} ${Pi["spacing-8"]};
`,q$=S.div`
    width: 100%;
    display: flex;
    padding: ${Pi["spacing-12"]} ${Pi["spacing-16"]};
    align-items: center;
`,K$=S(ce)`
    margin-right: ${Pi["spacing-4"]};
    color: ${zi["icon-error"]};
    height: 1em;
    width: 1em;
`,Z$=S(xs)`
    margin-right: ${Pi["spacing-8"]};
    color: ${zi.icon};
`,G$=S.div`
    ${wa()}
    color: ${zi["text-subtle"]};
    padding: 0 ${Pi["spacing-16"]} ${Pi["spacing-12"]}
        ${Pi["spacing-16"]};
`,Q$=S.div`
    background: ${zi["bg-strong"]};
    border-radius: ${Hi.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?ji["body-md-regular"]:ji["body-baseline-regular"]}
`,X$=S.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Pi["spacing-8"]};
    padding: ${e=>"small"===e.$variant?k`
                  ${Pi["spacing-8"]} ${Pi["spacing-16"]}
              `:k`10px ${Pi["spacing-16"]}`};
`,J$=S(Pl)`
    flex: 1;
`,eC=S(de)`
    color: ${zi.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,tC=S(ba)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Pi["spacing-8"]};
    margin-left: -${Pi["spacing-8"]};
    color: ${zi.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,rC=x(((r,n)=>{var{value:o,variant:i,onClear:a}=r,s=_e(r,["value","variant","onClear"]);return t(Q$,{$variant:i,children:[t(X$,{$variant:i,children:[e(eC,{"aria-hidden":!0}),e(J$,Object.assign({ref:n,value:o,$variant:i},s))]}),o&&e(tC,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:e(G,{"aria-hidden":!0})})]})})),nC=({listItems:n,multiSelect:o,maxSelectable:s,selectedItems:l,disableItemFocus:c,itemsLoadState:d="success",itemTruncationType:h="end",itemMaxLines:p=2,labelDisplayType:g="inline",variant:m="default",listboxId:b,width:v,topScrollItem:y,onSelectItem:x,onSelectAll:$,onDismiss:C,onRetry:S,valueExtractor:k,listExtractor:_,renderListItem:D,renderCustomCallToAction:F,enableSearch:E,hideNoResultsDisplay:O,noResultsDescription:T,searchPlaceholder:I="Search",searchFunction:M,onSearch:A})=>{const{focusedIndex:B,setFocusedIndex:z}=w(I$),[j,R]=a(""),[L,P]=a(null!=n?n:[]),H=tr(d),N=Jt(),W=i(null),V=i(null),Y=i([]),U=i(null),q=i(null),K=!!s&&!!l&&(null==l?void 0:l.length)===s,Z=e=>{const t=_?_(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},G=f((e=>!!ep(l,(t=>rp(t,e)))),[l]),Q=Qt((()=>null==M?void 0:M(j))),X=Qt((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=Z(e),n=j.trim().toLowerCase();return t.toLowerCase().includes(n)||r&&r.toLowerCase().includes(n)})))),J=(e,t)=>{K&&!G(e)||(z(t),null==x||x(e,(e=>k?k(e):e)(e)))},ee=e=>{const t=e.target.value;R(t),null==A||A()},te=()=>{var e;R(""),null===(e=U.current)||void 0===e||e.focus(),null==A||A()},re=()=>{null==S||S()};Xt("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),B<L.length-1){const e=B+1;null===(t=Y.current[e])||void 0===t||t.focus(),z(e)}break;case"ArrowUp":if(e.preventDefault(),B>0){const e=B-1;null===(r=Y.current[e])||void 0===r||r.focus(),z(e)}else 0===B&&U.current&&(U.current.focus(),z(-1));break;case"Space":case"Enter":document.activeElement===Y.current[B]&&(e.preventDefault(),L[B]&&J(L[B],B))}})),u((()=>{var e;if(!y)return void(null===(e=q.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(y);q.current&&-1!==e&&(q.current.scrollToIndex({index:e}),z(e))}),0);return()=>clearTimeout(t)}),[Y,n,z,y]),u((()=>{var e,t,r;if(N)return;if(c||!n)return;const o=n.findIndex((e=>G(e)));U.current?(z(-1),setTimeout((()=>{var e;return null===(e=U.current)||void 0===e?void 0:e.focus()}),200)):B>0?(null===(e=q.current)||void 0===e||e.scrollToIndex({index:B,align:"center"}),setTimeout((()=>{var e;return null===(e=Y.current[B])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=q.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),z(o),setTimeout((()=>{var e;return null===(e=Y.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=q.current)||void 0===r||r.scrollToIndex({index:0}),z(0),setTimeout((()=>{var e;return null===(e=Y.current[0])||void 0===e?void 0:e.focus()}),200))}),[G,c,B,n,N,z]),u((()=>{N&&H&&(c||"success"===d&&U.current&&(z(-1),U.current.focus()))}),[N,H,d,z,c]),u((()=>{var e;P(null!==(e=""===j?n:M?Q():X())&&void 0!==e?e:[])}),[Q,X,n,M,j]);const ne=t=>o?e(K&&!t?N$:t?P$:H$,{"aria-hidden":!0}):t?e(R$,{"aria-hidden":!0}):e(L$,{}),oe=(t,r)=>{const{title:n,secondaryLabel:o}=Z(t);return e(Qv,{displayType:g,label:n,maxLines:p,selected:r,disabled:!r&&K,sublabel:o,truncationType:h,variant:m})},ie=(n,i)=>{if(!S||"success"===d){const a=G(n),s=i===B;return e(j$,{"aria-selected":a,"aria-multiselectable":o,"aria-disabled":!a&&K,"data-testid":"list-item",onClick:()=>J(n,i),onMouseEnter:()=>(e=>{z(e)})(i),ref:e=>{Y.current[i]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,$disabled:!a&&K,children:D?D(n,{selected:a}):t(r,{children:[ne(a),oe(n,a)]})},((e,t)=>`item_${t}__${k?k(e):e}`)(n,i))}},ae=()=>{if(l&&o&&L.length>0&&!j&&"success"===d)return e(W$,{children:e(U$,{onClick:$,type:"button",$variant:m,children:s||0!==l.length?"Clear all":"Select all"})})},se=()=>{if(!O&&(j||!E)&&0===L.length&&"success"===d)return t(r,{children:[t(q$,{"data-testid":"list-no-results",children:[e(K$,{"data-testid":"no-result-icon"}),"No results found."]}),T&&e(G$,{"data-testid":"no-result-desc",children:T})]})},le=()=>{if(S&&"loading"===d)return t(q$,{"data-testid":"list-loading",children:[e(Z$,{}),"Loading..."]})},ce=()=>{if(S&&"fail"===d)return t(q$,{"data-testid":"list-fail",children:[e(K$,{"data-testid":"load-error-icon"}),"Failed to load. ",e(Y$,{onClick:re,type:"button",$variant:m,children:"Try again."})]})},de=()=>{var t;const r="test"===process.env.NODE_ENV;return e(z$,{role:"listbox",id:b,children:e(r$,Object.assign({ref:q,style:{height:"100%"},data:L,customScrollParent:null!==(t=W.current)&&void 0!==t?t:void 0,itemContent:(e,t)=>ie(t,e)},r?{initialItemCount:L.length}:{}),r?L.length:void 0)})};return t(A$,{"data-testid":"dropdown-container",ref:W,$width:v,$variant:m,children:[t(B$,{ref:V,"data-testid":"dropdown-list",children:[(()=>{if((E||M)&&"success"===d)return e(rC,{ref:U,onChange:ee,value:j,placeholder:I,"data-testid":"search-input","aria-label":"Enter text to search",onClear:te,variant:m})})(),ae(),se(),le(),ce(),de()]}),(()=>{if(F)return e("div",{"data-testid":"custom-cta",children:F(C,L)})})()]})},oC=S(Hl)`
    display: flex;
    align-items: center;
    gap: ${Pi["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${Pi["spacing-16"]};

    ${e=>"small"===e.$variant?ji["body-md-regular"]:ji["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,iC=S.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Ri["duration-250"]} ${Ri["ease-default"]};

    svg {
        color: ${zi.icon};
        height: 1em;
        width: 1em;
    }
`,aC=x((({children:r,disabled:n,expanded:o,listboxId:i,popupRole:a,readOnly:s,variant:l},c)=>t(oC,{ref:c,type:"button","aria-expanded":o,"aria-haspopup":a,"data-testid":"selector",disabled:n,"aria-controls":i,$variant:l,children:[r,!s&&e(iC,{$expanded:o,$variant:l,children:e(Q,{"aria-hidden":!0})})]})));var sC=Symbol.for("immer-nothing"),lC=Symbol.for("immer-draftable"),cC=Symbol.for("immer-state"),dC="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function uC(e,...t){if("production"!==process.env.NODE_ENV){const r=dC[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var hC=Object.getPrototypeOf;function fC(e){return!!e&&!!e[cC]}function pC(e){return!!e&&(mC(e)||Array.isArray(e)||!!e[lC]||!!e.constructor?.[lC]||wC(e)||$C(e))}var gC=Object.prototype.constructor.toString();function mC(e){if(!e||"object"!=typeof e)return!1;const t=hC(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===gC}function bC(e,t){0===vC(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function vC(e){const t=e[cC];return t?t.type_:Array.isArray(e)?1:wC(e)?2:$C(e)?3:0}function yC(e,t){return 2===vC(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function xC(e,t,r){const n=vC(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function wC(e){return e instanceof Map}function $C(e){return e instanceof Set}function CC(e){return e.copy_||e.base_}function SC(e,t){if(wC(e))return new Map(e);if($C(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=mC(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[cC];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(hC(e),t)}{const t=hC(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function kC(e,t=!1){return DC(e)||fC(e)||!pC(e)||(vC(e)>1&&(e.set=e.add=e.clear=e.delete=_C),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>kC(t,!0)))),e}function _C(){uC(2)}function DC(e){return Object.isFrozen(e)}var FC,EC={};function OC(e){const t=EC[e];return t||uC(0,e),t}function TC(){return FC}function IC(e,t){t&&(OC("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function MC(e){AC(e),e.drafts_.forEach(zC),e.drafts_=null}function AC(e){e===FC&&(FC=e.parent_)}function BC(e){return FC={drafts_:[],parent_:FC,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function zC(e){const t=e[cC];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function jC(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[cC].modified_&&(MC(t),uC(4)),pC(e)&&(e=RC(t,e),t.parent_||PC(t,e)),t.patches_&&OC("Patches").generateReplacementPatches_(r[cC].base_,e,t.patches_,t.inversePatches_)):e=RC(t,r,[]),MC(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==sC?e:void 0}function RC(e,t,r){if(DC(t))return t;const n=t[cC];if(!n)return bC(t,((o,i)=>LC(e,n,t,o,i,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return PC(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),bC(o,((o,a)=>LC(e,n,t,o,a,r,i))),PC(e,t,!1),r&&e.patches_&&OC("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function LC(e,t,r,n,o,i,a){if("production"!==process.env.NODE_ENV&&o===r&&uC(5),fC(o)){const a=RC(e,o,i&&t&&3!==t.type_&&!yC(t.assigned_,n)?i.concat(n):void 0);if(xC(r,n,a),!fC(a))return;e.canAutoFreeze_=!1}else a&&r.add(o);if(pC(o)&&!DC(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;RC(e,o),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||PC(e,o)}}function PC(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&kC(t,r)}var HC={get(e,t){if(t===cC)return e;const r=CC(e);if(!yC(r,t))return function(e,t,r){const n=VC(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!pC(n)?n:n===WC(e.base_,t)?(UC(e),e.copy_[t]=qC(n,e)):n},has:(e,t)=>t in CC(e),ownKeys:e=>Reflect.ownKeys(CC(e)),set(e,t,r){const n=VC(CC(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=WC(CC(e),t),o=n?.[cC];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||yC(e.base_,t)))return!0;UC(e),YC(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==WC(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,UC(e),YC(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=CC(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){uC(11)},getPrototypeOf:e=>hC(e.base_),setPrototypeOf(){uC(12)}},NC={};function WC(e,t){const r=e[cC];return(r?CC(r):e)[t]}function VC(e,t){if(!(t in e))return;let r=hC(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=hC(r)}}function YC(e){e.modified_||(e.modified_=!0,e.parent_&&YC(e.parent_))}function UC(e){e.copy_||(e.copy_=SC(e.base_,e.scope_.immer_.useStrictShallowCopy_))}bC(HC,((e,t)=>{NC[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),NC.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&uC(13),NC.set.call(this,e,t,void 0)},NC.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&uC(14),HC.set.call(this,e[0],t,r,e[0])};function qC(e,t){const r=wC(e)?OC("MapSet").proxyMap_(e,t):$C(e)?OC("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:TC(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=HC;r&&(o=[n],i=NC);const{revoke:a,proxy:s}=Proxy.revocable(o,i);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:TC()).drafts_.push(r),r}function KC(e){if(!pC(e)||DC(e))return e;const t=e[cC];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=SC(e,t.scope_.immer_.useStrictShallowCopy_)}else r=SC(e,!0);return bC(r,((e,t)=>{xC(r,e,KC(t))})),t&&(t.finalized_=!1),r}var ZC=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...o){return n.produce(e,(e=>t.call(this,e,...o)))}}let n;if("function"!=typeof t&&uC(6),void 0!==r&&"function"!=typeof r&&uC(7),pC(e)){const o=BC(this),i=qC(e,void 0);let a=!0;try{n=t(i),a=!1}finally{a?MC(o):AC(o)}return IC(o,r),jC(n,o)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===sC&&(n=void 0),this.autoFreeze_&&kC(n,!0),r){const t=[],o=[];OC("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}uC(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const o=this.produce(e,t,((e,t)=>{r=e,n=t}));return[o,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){pC(e)||uC(8),fC(e)&&(e=function(e){fC(e)||uC(10,e);return KC(e)}(e));const t=BC(this),r=qC(e,void 0);return r[cC].isManual_=!0,AC(t),r}finishDraft(e,t){const r=e&&e[cC];r&&r.isManual_||uC(9);const{scope_:n}=r;return IC(n,t),jC(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=OC("Patches").applyPatches_;return fC(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},GC=ZC.produce;ZC.produceWithPatches.bind(ZC),ZC.setAutoFreeze.bind(ZC),ZC.setUseStrictShallowCopy.bind(ZC),ZC.applyPatches.bind(ZC),ZC.createDraft.bind(ZC),ZC.finishDraft.bind(ZC);var QC=Ku,XC=_h,JC=gu,eS=nr,tS=Qu,rS=vu,nS=Wu,oS=Mu,iS=Object.prototype.hasOwnProperty;var aS=function(e){if(null==e)return!0;if(tS(e)&&(eS(e)||"string"==typeof e||"function"==typeof e.splice||rS(e)||oS(e)||JC(e)))return!e.length;var t=XC(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(nS(e))return!QC(e).length;for(var r in e)if(iS.call(e,r))return!1;return!0},sS=Ee(aS);const lS=(e,t,r)=>{const n=GC(e,(e=>{for(let n=e.length-1;n>=0;n--){const o=e[n],i=dS(o.keyPath);if(o.checked=t.has(i),o.hasSubItems&&r&&!0!==o.checked){const t=o.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?o.checked=!0:n&&(o.checked="mixed")}}}));return n},cS=(e,t)=>{const[r,...n]=t;if(sS(e)||sS(r))return;const o=e.find((e=>e.key===r));return o&&n.length?cS(o.subItems,n):o},dS=e=>e.join(","),uS=e=>new Set(e.map((e=>e.join(",")))),hS=S.li`
    display: ${e=>e.$visible?"flex":"none"};
`,fS=S.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Pi["spacing-8"]};
    padding: ${Pi["spacing-12"]} ${Pi["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&k`
            background: ${zi["bg-hover"]};
        `}
`,pS=S.div`
    height: 1px;
    width: calc((1lh + ${Pi["spacing-8"]}) * ${e=>e.$level});
`,gS=S.div`
    width: 1lh;
    height: 1lh;
    color: ${zi["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Ri["duration-350"]}
            ${Ri["ease-standard"]};

        ${e=>{if(e.$expanded)return k`
                    transform: rotate(90deg);
                `}}
    }
`,mS=S.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Pi["spacing-8"]};
`,bS=S.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Pi["spacing-16"]};

    display: flex;
    justify-content: center;
`,vS=S(ye)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${zi["icon-selected"]};
`,yS=({listItems:n,multiSelect:o=!1,selectedKeyPaths:s,itemsLoadState:l="success",itemTruncationType:c="end",itemMaxLines:d=2,variant:h="default",listboxId:f,width:p,mode:m="default",selectableCategory:b,onSelectItem:v,onSelectAll:y,onRetry:x,enableSearch:w,hideNoResultsDisplay:$,noResultsDescription:C,searchPlaceholder:S="Search",onSearch:k})=>{const _=o||b,[D,F]=a(""),E=D.toLowerCase().trim(),[O,T]=a(!1),I=i(null),M=i(null),A=i([]),B=i(null),z=Jt(),[j,R]=a([]),[L,P]=a([]),H=O?L:j,N=g((()=>{let e=0;for(const t of j)t.level>e&&(e=t.level);return e}),[j]),[W,V]=a(0),[Y,U]=a([]),[q,K]=a(0),Z=e=>{const t=e.target.value;F(t),""===t?T(!1):t.trim().length>=3&&T(!0),null==k||k()},G=()=>{var e;F(""),T(!1),null===(e=B.current)||void 0===e||e.focus(),null==k||k()},Q=()=>{null==x||x()},X=()=>{if(0===s.size){const e=[],t=[];j.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==y||y(e,t)}else null==y||y([],[])},J=Qt(((e,t)=>((e,t,r,n,o)=>{const i=[],a=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((d,u)=>{var h,f;const p=s?s.level+1:0,g=s?[...s.keyPath,d.key]:[d.key],m=dS(g),b={item:d,index:i.length,indexInParent:u,parentSetSize:e.length,keyPath:g,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||o||(null==s?void 0:s.expanded)||!1,expanded:o,checked:t.has(m),hasSubItems:!!(null===(h=d.subItems)||void 0===h?void 0:h.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!n&&-1!==d.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(l.push(b),i.push(b),null===(f=d.subItems)||void 0===f?void 0:f.length){const e=a(d.subItems,b);if(r&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?b.checked=!0:r&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),i})(e,s,o,E,t))),ee=Qt((e=>{return s.size?(t=J(e,!1),GC(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>GC(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const o=e[t].keyPath.length;if(o>n)n=o;else if(o<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],o=n.keyPath.slice(0,-1),i=e[r].keyPath.slice(0,o.length);rp(o,i)&&(n.visible=!0)}return e})))(J(e,!1));var t})),te=Qt((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(E))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),re=Qt((()=>{R((e=>lS(e,s,o))),O&&P((e=>lS(e,s,o)))})),ne=(e,t,r)=>{const n=((e,t,r)=>GC(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let o=t+1;o<e.length;o++){const t=e[o],i=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!rp(n,a))break;t.visible=r&&i.expanded&&i.visible}})))(H,e,t);V(e),K(r),O?P(n):R(n)};Xt("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return e[n]})(H,(e=>e.visible),W+1);r&&(K((e=>e+1)),V(r.index),null===(t=A.current[r.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return e[n]})(H,(e=>e.visible),W-1);t?(K((e=>e-1)),V(t.index),null===(r=A.current[t.index])||void 0===r||r.focus()):0===q&&B.current&&(B.current.focus(),K(-1),V(-1));break}case"ArrowRight":e.preventDefault(),ne(W,!0,q);break;case"ArrowLeft":e.preventDefault(),ne(W,!1,q);break;case"Space":if(document.activeElement===A.current[W]){e.preventDefault();const t=H[W];if(t.hasSubItems&&!_)return;null==v||v(t)}}})),u((()=>{let e=[];"default"===m?e=ee(n):"expand"===m?e=J(n,!0):"collapse"===m&&(e=J(n,!1)),R(e)}),[J,ee,n,m]),u((()=>{U(H.filter((e=>e.visible)))}),[O,H]),u((()=>{re()}),[o,s,re]),u((()=>{if(O&&D.trim().length>=3){const e=te(n),t=(e=>GC(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(J(e,!1));P(t)}}),[te,J,n,O,D]),u((()=>{z||(B.current?(V(-1),K(-1),setTimeout((()=>{var e;return null===(e=B.current)||void 0===e?void 0:e.focus()}),200)):A.current[W]?setTimeout((()=>{var e;return null===(e=A.current[W])||void 0===e?void 0:e.focus()}),200):(V(0),K(0),setTimeout((()=>{var e;return null===(e=A.current[0])||void 0===e?void 0:e.focus()}),200)))}),[W,q,z]);const oe=()=>{if(w&&"success"===l)return e(rC,{ref:B,onChange:Z,value:D,placeholder:S,"data-testid":"search-input","aria-label":"Enter text to search",onClear:G,variant:h})},ie=()=>{if(o&&!O&&j.length>0&&"success"===l)return e(W$,{children:e(U$,{onClick:X,type:"button",$variant:h,children:0===s.size?"Select all":"Clear all"})})},ae=()=>{if(!$&&O&&0===L.length&&"success"===l)return t(r,{children:[t(q$,{"data-testid":"list-no-results",children:[e(K$,{"data-testid":"no-result-icon"}),"No results found."]}),C&&e(G$,{"data-testid":"no-result-desc",children:C})]})},se=()=>{if(x&&"loading"===l)return t(q$,{"data-testid":"list-loading",children:[e(As,{}),"Loading..."]})},le=()=>{if(x&&"fail"===l)return t(q$,{"data-testid":"list-fail",children:[e(K$,{"data-testid":"load-error-icon"}),"Failed to load. ",e(Y$,{onClick:Q,type:"button",$variant:h,children:"Try again."})]})},ce=t=>{if(o)switch(t.checked){case"mixed":return e(vS,{"aria-hidden":!0});case!0:return e(P$,{"aria-hidden":!0});default:return e(H$,{"aria-hidden":!0})}if(!t.hasSubItems)return e(bS,{$hasNestedSiblings:t.hasNestedSiblings||0===t.level,children:t.checked&&e(R$,{"aria-hidden":!0})})},de=(r,n)=>{const{level:i,visible:a,expanded:s,keyPath:l,checked:u,hasSubItems:h,indexInParent:f,parentSetSize:p}=r,g=r.index,m=q===n,b=h&&!_;return t(hS,{$visible:a,children:[N>0&&e(pS,{$level:i}),N>0&&!h&&o&&e(mS,{}),t(fS,{"aria-checked":u,"aria-selected":!!u,"aria-expanded":h?s:void 0,"aria-level":i+1,"aria-posinset":f+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?ne(g,!s,n):((e,t)=>{K(t),V(e),null==v||v(H[e])})(g,n)},onMouseEnter:()=>((e,t)=>{V(t.index),K(e)})(n,r),ref:e=>A.current[r.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b,children:[h&&e(gS,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),ne(g,!s,n)},$expanded:s,children:e(ve,{})}),ce(r),e(Qv,{bold:h,searchTerm:O?E:void 0,label:r.item.label,selected:!!u,truncationType:c,maxLines:d})]})]},`[${l.join("---")}]`)},ue=()=>{var t;const r="test"===process.env.NODE_ENV;return e("div",{"aria-multiselectable":o,id:f,ref:M,role:"tree",children:e(r$,Object.assign({style:{height:"100%"},customScrollParent:null!==(t=I.current)&&void 0!==t?t:void 0,data:Y,itemContent:(e,t)=>de(t,e)},r?{initialItemCount:Y.length}:{}),r?Y.length:void 0)})};return e(A$,{"data-testid":"dropdown-container",ref:I,$width:p,$variant:h,children:t(B$,{"data-testid":"nested-dropdown-list",children:[oe(),ie(),ae(),se(),le(),ue()]})})},xS=({selectedOptions:t,placeholder:r="Select",options:n,disabled:o,error:s,className:l,"data-testid":c,id:d,enableSearch:h=!1,searchFunction:f,searchPlaceholder:p,valueExtractor:g,listExtractor:m,onSelectOptions:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderListItem:C,hideNoResultsDisplay:S,noResultsDescription:k,renderCustomCallToAction:_,onBlur:D,variant:F="default",readOnly:E,alignment:O,dropdownZIndex:T,maxSelectable:I,dropdownRootNode:M})=>{const[A,B]=a(t||[]),[z,j]=a(!1),[R,L]=a(!1),[P]=a((()=>et.generate())),H=i(null),N=i(null);u((()=>{B(t||[])}),[t]);const W=()=>{A&&A.length>0||I?(B([]),Z([])):(B(n),Z(n))},V=(e,t)=>{const r=[...A],n=Jf(A,(e=>(g?g(e):e)===t));n>-1?r.splice(n,1):r.push(e),B(r),Z(r)},Y=()=>{z&&(j(!1),K(!1))},U=()=>{R||z||L(!0)},q=e=>{R&&!z&&H.current&&!H.current.contains(e.relatedTarget)&&(L(!1),null==D||D())},K=e=>{!e&&y&&y(),e&&v&&v()},Z=e=>{b&&b(e)};return e(M$,{children:e(hs,{enabled:!E&&!o,isOpen:z,renderElement:()=>e(Rl,{className:l,"data-testid":c,id:d,ref:H,tabIndex:-1,onFocus:U,onBlur:q,$focused:R,$disabled:o,$readOnly:E,$error:s,children:e(aC,{ref:N,disabled:o,expanded:z,listboxId:P,popupRole:"listbox",readOnly:E,variant:F,children:e(as,{$disabled:o,children:A&&0!==A.length?e(ss,{$variant:F,children:n&&A.length===n.length?"All selected":`${A.length} selected`}):e(ls,{truncateType:$,$variant:F,children:r})})})}),renderDropdown:({elementWidth:t})=>e(nC,{listboxId:P,listItems:n,onSelectItem:V,onDismiss:Y,valueExtractor:g,listExtractor:m,enableSearch:h,searchFunction:f,searchPlaceholder:p,multiSelect:!0,maxSelectable:I,selectedItems:A,onSelectAll:W,onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:C,hideNoResultsDisplay:S,noResultsDescription:k,renderCustomCallToAction:_,variant:F,width:t}),onOpen:()=>{j(!0),K(!0),L(!0)},onClose:e=>{j(!1),K(!1),"click"!==e&&(L(!1),null==D||D())},onDismiss:()=>{var e;null===(e=N.current)||void 0===e||e.focus(),j(!1),K(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:T,rootNode:M})})},wS=(e,t)=>{const[r,...n]=t;if(sS(e)||!r)return;const o=e.find((e=>e.key===r));return o?n.length?wS(o.subItems,n):o:void 0},$S=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...$S(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},CS=({placeholder:t="Select",options:r,disabled:n,error:o,className:s,"data-testid":l,id:c,selectedKeyPaths:d,mode:h,valueToStringFunction:f,enableSearch:p,searchPlaceholder:g,hideNoResultsDisplay:m,noResultsDescription:b,readOnly:v,onSearch:y,onSelectOptions:x,onShowOptions:w,onHideOptions:$,onRetry:C,onBlur:S,optionsLoadState:k="success",optionTruncationType:_="end",variant:D="default",alignment:F,dropdownZIndex:E,dropdownRootNode:O})=>{const T=r,[I,M]=a(d?uS(d):new Set),[A,B]=a([]),[z,j]=a(!1),[R,L]=a(!1),[P]=a((()=>et.generate())),H=i(null),N=i(null),W=i(null);u((()=>{const e=d||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const o=t[n],i=wS(e,o);i&&r.push({value:i.value,label:i.label,keyPath:o})}return r})(T,e);M(uS(e)),B(t)}),[d,T]);const V=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));M(uS(e)),B(r),Q(e,r)},Y=e=>{const t=X(e),r=t.map((e=>e.keyPath));B(t),M(uS(r)),Q(r,t)},U=()=>{R||z||L(!0)},q=e=>{R&&!z&&H.current&&!H.current.contains(e.relatedTarget)&&(L(!1),null==S||S())},K=()=>{if(A.length>1)return`${A.length} selected`;const{label:e,value:t}=A[0];return f?f(t):e},Z=e=>{if("middle"===_){let t=0;return W&&W.current&&(t=W.current.getBoundingClientRect().width),tt.truncateOneLine(e,t,120,6)}return e},G=e=>{!e&&$&&$(),e&&w&&w()},Q=(e,t)=>{if(x){const r=t.map((e=>e.value));x(e,r)}},X=e=>{if(!0===e.checked)return A.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!rp(e.keyPath,r)}));{const t=[...A],r=e.hasSubItems?((e,t)=>{const r=wS(e,t);return r&&r.subItems?$S(r.subItems,t):[]})(T,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{A.find((t=>rp(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e(hs,{enabled:!v&&!n,isOpen:z,renderElement:()=>e(Rl,{className:s,"data-testid":l,id:c,ref:H,tabIndex:-1,onFocus:U,onBlur:q,$focused:R,$disabled:n,$readOnly:v,$error:o,children:e(aC,{ref:N,disabled:n,expanded:z,listboxId:P,popupRole:"tree",readOnly:v,variant:D,children:e(as,{ref:W,$disabled:n,children:sS(A)?e(ls,{truncateType:_,children:t}):e(ss,{truncateType:_,children:Z(K())})})})}),renderDropdown:({elementWidth:t})=>e(yS,{listboxId:P,listItems:T,multiSelect:!0,selectedKeyPaths:I,itemsLoadState:k,itemTruncationType:_,enableSearch:p,searchPlaceholder:g,hideNoResultsDisplay:m,noResultsDescription:b,onSelectItem:Y,onSelectAll:V,onRetry:C,onSearch:y,variant:D,mode:h,width:t}),onOpen:()=>{j(!0),G(!0),L(!0)},onClose:e=>{j(!1),G(!1),"click"!==e&&(L(!1),null==S||S())},onDismiss:()=>{var e;null===(e=N.current)||void 0===e||e.focus(),j(!1),G(!1)},clickToToggle:!0,offset:8,alignment:F,fitAvailableHeight:!0,customZIndex:E,rootNode:O})},SS=({placeholder:t="Select",options:r,disabled:n,error:o,className:s,"data-testid":l,id:c,selectedKeyPath:d,mode:h,valueToStringFunction:f,enableSearch:p,searchPlaceholder:g,selectableCategory:m,hideNoResultsDisplay:b,noResultsDescription:v,readOnly:y,onBlur:x,onSearch:w,onSelectOption:$,onShowOptions:C,onHideOptions:S,onRetry:k,optionsLoadState:_="success",optionTruncationType:D="end",variant:F="default",alignment:E,dropdownZIndex:O,dropdownRootNode:T})=>{const I=r,[M,A]=a(d?uS([d]):new Set),[B,z]=a(),[j,R]=a(!1),[L,P]=a(!1),[H]=a((()=>et.generate())),N=i(null),W=i(null),V=i(null);u((()=>{A(d?uS([d]):new Set);const e=cS(I,d||[]);z(null!=e?e:void 0)}),[d,I]);const Y=e=>{var t;const{keyPath:r,item:{label:n,value:o}}=e;A(uS([r])),z({label:n,value:o}),R(!1),G(!1),null===(t=W.current)||void 0===t||t.focus(),null==$||$(r,o)},U=()=>{L||j||P(!0)},q=e=>{L&&!j&&N.current&&!N.current.contains(e.relatedTarget)&&(P(!1),null==x||x())},K=()=>{if(!B)return"";const{label:e,value:t}=B;return f?f(t):e},Z=e=>{if("middle"===D){let t=0;return V&&V.current&&(t=V.current.getBoundingClientRect().width),tt.truncateOneLine(e,t,120,6)}return e},G=e=>{!e&&S&&S(),e&&C&&C()};return e(hs,{enabled:!y&&!n,isOpen:j,renderElement:()=>e(Rl,{className:s,"data-testid":l,id:c,ref:N,tabIndex:-1,onFocus:U,onBlur:q,$focused:L,$disabled:n,$readOnly:y,$error:o,children:e(aC,{ref:W,disabled:n,expanded:j,listboxId:H,popupRole:"tree",readOnly:y,variant:F,children:e(as,{ref:V,$disabled:n,children:sS(B)?e(ls,{truncateType:D,children:t}):e(ss,{truncateType:D,children:Z(K())})})})}),renderDropdown:({elementWidth:t})=>e(yS,{listboxId:H,listItems:I,selectedKeyPaths:M,selectableCategory:m,itemsLoadState:_,itemTruncationType:D,enableSearch:p,searchPlaceholder:g,hideNoResultsDisplay:b,noResultsDescription:v,onSelectItem:Y,onRetry:k,onSearch:w,variant:F,mode:h,width:t}),onOpen:()=>{R(!0),G(!0),P(!0)},onClose:e=>{R(!1),G(!1),"click"!==e&&(P(!1),null==x||x())},onDismiss:()=>{var e;null===(e=W.current)||void 0===e||e.focus(),R(!1),G(!1)},clickToToggle:!0,offset:8,alignment:E,fitAvailableHeight:!0,customZIndex:O,rootNode:T})};var kS=function(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r};var _S=function(e){return function(t,r,n){for(var o=-1,i=Object(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}},DS=_S(),FS=th;var ES=Qu;var OS=function(e,t){return function(r,n){if(null==r)return r;if(!ES(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=Object(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}((function(e,t){return e&&DS(e,t,FS)}));var TS=kS,IS=OS,MS=Ef,AS=function(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r},BS=nr;var zS=Ee((function(e,t,r){var n=BS(e)?TS:AS,o=arguments.length<3;return n(e,MS(t),r,o,IS)}));const jS=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],RS=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var LS;!function(e){e.getCountries=()=>[].concat(...jS.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:RS("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,o=n.split(" ");o.shift();const i=o.join(" ");return zS(i,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const r=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(LS||(LS={}));const PS=t=>{var{onChange:r,value:n,allowClear:o,onClear:s,onBlur:l,error:c,fixedCountry:d=!1,optionPlaceholder:h="Select",optionSearchPlaceholder:f,enableSearch:p,onHideOptions:g,onShowOptions:m,placeholder:b,autoComplete:v}=t,y=_e(t,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[x]=a(LS.getCountries()),[w,$]=a(void 0),[C,S]=a(""),k=i(null),_=er({ref:k,formatter:e=>LS.formatNumber(e.replace(/[^0-9]/g,""),w)});u((()=>{const e=x.filter((e=>e.countryCode===HS(null==n?void 0:n.countryCode)))[0];$(e),S(LS.formatNumber(null==n?void 0:n.number,e))}),[n]);const D=e=>{E(C,e),r&&F(C,e)},F=(e,t)=>{const n=LS.formatNumber(e,t);null==r||r({number:n.replace(/[\s()]+/g,""),countryCode:t&&NS(t.countryCode)})},E=(e,t)=>{S(LS.formatNumber(e,t)),$(t)};return e(Dv,Object.assign({ref:k,value:C,onChange:()=>{const e=_();if(!e)return;const{nextValue:t,updateCaretPosition:n}=e;n(),E(t,w),r&&F(t,w)},allowClear:o&&!!C,onClear:()=>{s?s():S("")},onBlur:l,error:c,placeholder:b,addon:d?{type:"label",attributes:{value:NS(null==w?void 0:w.countryCode)}}:{type:"list",attributes:{placeholder:h,options:x,selectedOption:w,enableSearch:p,searchPlaceholder:f,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:NS(e.countryCode)}),onSelectOption:D,onHideOptions:g,onShowOptions:m}},inputMode:"numeric",autoComplete:v},y))},HS=e=>e?e.replace("+",""):"",NS=e=>e?e.includes("+")?e:`+${e}`:"";var WS=sr,VS=Er,YS=function(){return WS.Date.now()},US=Vf,qS=Math.max,KS=Math.min;var ZS=Ee((function(e,t,r){var n,o,i,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=i}function g(){var e=YS();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?KS(r,i-(e-c)):r}(e))}function m(e){return s=void 0,h&&n?f(e):(n=o=void 0,a)}function b(){var e=YS(),r=p(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?f(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=US(t)||0,VS(r)&&(d=!!r.leading,i=(u="maxWait"in r)?qS(US(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:m(YS())},b}));const GS=({className:n,"data-testid":o,selectedOption:s,minimumCharacters:l=3,fetchOptions:c,placeholder:d="Enter here...",readOnly:h=!1,disabled:p=!1,error:g,valueExtractor:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y})=>{const[x,w]=a((()=>s?W(s):"")),[$,C]=a((()=>s?W(s):"")),[S,k]=a([]),[_,D]=a(!0),[F,E]=a(!1),[O,T]=a(!!s),[I,M]=a(s),A=i(c),B=e=>De(void 0,void 0,void 0,(function*(){E(!1),D(!0);try{const t=yield A.current(e);C(e),k(t),D(!1)}catch(e){E(!0)}})),z=f(ZS((e=>B(e)),500,{leading:!1,trailing:!0}),[]);u((()=>{A.current=c}),[c]),u((()=>{x&&x.length>=l&&x!==$?z(x):z.cancel(),""===x&&I&&(y&&y(void 0,void 0),L(),M(void 0)),s&&x!==W(s)&&T(!1)}),[x,s]),u((()=>{w(s?W(s):""),L(s),M(s)}),[s]);const j=e=>{w(e.target.value)},R=(e,t)=>{y&&y(e,t)},L=e=>{C(e?W(e):""),T(!!e),k([]),D(!0)},P=()=>{w(""),y&&y(void 0,void 0),L()},H=()=>{O||I?(L(I),w(W(I)),y&&y(I,V(I)),M(I)):P()},N=()=>!!x&&x.length>=l&&!O,W=e=>e?v?v(e):e.toString():"",V=e=>{if(e)return m?m(e):e},Y=()=>e(gd,{type:"text",value:x,onChange:j,placeholder:d,readOnly:h,disabled:p,allowClear:!0,onClear:P,styleType:"no-border",onBlur:x.length<l?H:void 0});return t(cs,{className:n,show:N(),error:g&&!N(),disabled:p,readOnly:h,testId:o,onBlur:H,children:[e(h?r:rs,{children:Y()}),!h&&N()&&e(is,{}),e(hv,{listItems:S,onSelectItem:R,valueExtractor:m,listExtractor:b,itemsLoadState:F?"fail":_?"loading":"success",visible:N(),disableItemFocus:!0,onRetry:()=>B(x),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]})},QS=S.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,XS=S(ud)`
    position: absolute;
    right: 0;
    padding-left: ${Pi["spacing-8"]};
    margin-right: 0;
`,JS=S(ts)`
    // space for clear icon
    padding-right: calc(1.25rem + ${Pi["spacing-16"]});
`,ek=r=>{var{selectedOptions:n,placeholders:o={from:"Select",to:"Select"},options:s,disabled:l,className:c,readOnly:d,error:h,"data-testid":f,id:p,enableSearch:g=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,listStyleWidth:C,onShowOptions:S,onHideOptions:k,onRetry:_,optionsLoadState:D={from:"success",to:"success"},optionTruncationType:F="middle",renderCustomSelectedOption:E,renderListItem:O,renderCustomCallToAction:T}=r,I=_e(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[M,A]=a(),[B,z]=a(),j=i(null),R={from:i(null),to:i(null)},[L,P]=a("none");u((()=>{A(null==n?void 0:n.from),z(null==n?void 0:n.to)}),[n]);const H=e=>t=>{t.stopPropagation(),t.preventDefault(),l||d||P("from"===e?"from":"to"===e&&M?"to":"from")},N=e=>{var t;const r="from"===e?M:B;if(!r)return"";if(w)return w(r);if(v){const e=v(r);return y?y(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""}return r.toString()},W=(e,t)=>{if("middle"===F){let r=0;return R[e]&&R[e].current&&(r=R[e].current.getBoundingClientRect().width),tt.truncateOneLine(t,r,120,8)}return t},V=e=>{!e&&k&&k(),e&&S&&S()},Y=t=>{const r="from"===t?M:B;return r?E?E(r):e(ss,{truncateType:F,children:W(t,N(t))}):e(ls,{truncateType:F,children:W(t,o[t]||"")})},U=t=>e(as,{onClick:H(t),ref:R[t],$disabled:l,children:Y(t)});return t(cs,{show:"none"!==L,error:h&&!("none"!==L),disabled:l,readOnly:d,testId:f,onBlur:()=>{V(!1),P("none"),M&&B||(z(void 0),A(void 0))},className:c,children:[t(QS,{children:[e(JS,Object.assign({type:"button","data-testid":p||"selector",disabled:l,ref:j,onClick:H()},I,{children:t(oc,{currentActive:(()=>{switch(L){case"from":return"start";case"to":return"end";case"none":return L}})(),children:[U("from"),U("to")]})})),"none"===L&&M&&B&&!d&&!l&&e(XS,{onClick:e=>{e.stopPropagation(),A(void 0),z(void 0),$&&$({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear",children:e(hd,{"aria-hidden":!0})})]}),"none"!==L&&e(is,{}),(()=>{if("none"===L)return null;const t=s[L];if(t&&t.length>0){const r="from"===L?M:B;return e(hv,{listItems:t,onSelectItem:(e,t)=>((e,t,r)=>{var n;"from"===r?A(e):z(e),V(!1),j&&(null===(n=j.current)||void 0===n||n.focus()),$&&$({[r]:e},t),"from"===r?(z(void 0),P("to"),V(!0)):P("none")})(e,t,L),onDismiss:()=>(()=>{var e;P("none"),V(!1),j&&(null===(e=j.current)||void 0===e||e.focus()),M&&B||(z(void 0),A(void 0))})(),valueExtractor:v,listExtractor:x,listStyleWidth:C,visible:!0,enableSearch:g,searchPlaceholder:b,searchFunction:m,"data-testid":`${L}-dropdown-list`,selectedItems:r?[r]:[],onRetry:_,itemsLoadState:D[L],itemTruncationType:F,renderListItem:O,renderCustomCallToAction:T})}return null})()]})},tk=({selectedOption:t,placeholder:r="Select",options:n,disabled:o,error:s,className:l,"data-testid":c,id:d,enableSearch:h=!1,searchFunction:f,searchPlaceholder:p,valueExtractor:g,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:C="success",optionTruncationType:S="end",renderCustomSelectedOption:k,renderListItem:_,hideNoResultsDisplay:D,noResultsDescription:F,renderCustomCallToAction:E,onBlur:O,variant:T="default",readOnly:I,alignment:M,dropdownZIndex:A,dropdownRootNode:B})=>{const[z,j]=a(t),[R,L]=a(!1),[P,H]=a(!1),[N]=a((()=>et.generate())),W=i(null),V=i(null),Y=i(null);u((()=>{j(t)}),[t]);const U=(e,t)=>{var r;null===(r=V.current)||void 0===r||r.focus(),j(e),L(!1),X(!1),null==y||y(e,t)},q=()=>{R&&(L(!1),X(!1))},K=()=>{P||R||H(!0)},Z=e=>{P&&!R&&W.current&&!W.current.contains(e.relatedTarget)&&(H(!1),null==O||O())},G=()=>{var e;if(!z)return"";if(v)return v(z);if(g){const t=g(z);return m?m(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return z.toString()},Q=e=>{if("middle"===S){let t=0;return Y&&Y.current&&(t=Y.current.getBoundingClientRect().width),tt.truncateOneLine(e,t,120,8)}return e},X=e=>{e?null==x||x():null==w||w()};return e(M$,{children:e(hs,{enabled:!I&&!o,isOpen:R,renderElement:()=>e(Rl,{className:l,"data-testid":c,id:d,ref:W,tabIndex:-1,onFocus:K,onBlur:Z,$focused:P,$disabled:o,$readOnly:I,$error:s,children:e(aC,{ref:V,disabled:o,expanded:R,listboxId:N,popupRole:"listbox",readOnly:I,variant:T,children:e(as,{ref:Y,$disabled:o,children:z?k?k(z):e(ss,{truncateType:S,$variant:T,children:Q(G())}):e(ls,{truncateType:S,$variant:T,children:r})})})}),renderDropdown:({elementWidth:t})=>e(nC,{listboxId:N,listItems:n,onSelectItem:U,onDismiss:q,valueExtractor:g,listExtractor:b,enableSearch:h,searchPlaceholder:p,searchFunction:f,selectedItems:z?[z]:[],onRetry:$,itemsLoadState:C,itemTruncationType:S,renderListItem:_,hideNoResultsDisplay:D,noResultsDescription:F,renderCustomCallToAction:E,variant:T,width:t}),onOpen:()=>{L(!0),X(!0),H(!0)},onClose:e=>{L(!1),X(!1),"click"!==e&&(H(!1),null==O||O())},onDismiss:()=>{var e;null===(e=V.current)||void 0===e||e.focus(),L(!1),X(!1)},clickToToggle:!0,offset:8,alignment:M,fitAvailableHeight:!0,customZIndex:A,rootNode:B})})},rk=S.div`
    overflow: hidden;
    border: ${Li["width-010"]} ${Li.solid} ${zi.border};
    border-radius: ${Hi.sm};
    background: ${zi.bg};
    padding: ${Pi["spacing-16"]};
    min-width: 23rem;

    ${Wi.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Ni["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Wi.MaxWidth.xs} {
        width: calc(100vw - ${Ni["xs-margin"]} * 2);
    }

    ${Wi.MaxWidth.xxs} {
        width: calc(100vw - ${Ni["xxs-margin"]} * 2);
    }
`,nk=S.div`
    display: flex;
    align-items: baseline;
`,ok=S.div`
    margin: 0 0.5rem;
    color: ${zi.text};
`,ik=S.div`
    ${e=>"small"===e.$variant?ji["body-md-regular"]:ji["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return k`
                    ${ca(1)}
                `}}
    overflow: hidden;
`,ak=S(ik)`
    color: ${zi["text-subtler"]};
`,sk=r=>{var{alignment:n="left",className:o,disabled:s,dropdownZIndex:l,error:c,histogramSlider:d,id:h,onBlur:f,onChange:p,onChangeEnd:g,optionTruncationType:m="end",placeholder:b="Select",rangeLabelPrefix:v,rangeLabelSuffix:y,readOnly:x,renderRangeLabel:w,value:$,dropdownRootNode:C}=r,S=_e(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value","dropdownRootNode"]);const{interval:k,bins:_=[],renderEmptyView:D,ariaLabels:F}=d,E=_.map((e=>e.minValue)),O=Math.min(...E),[T,I]=a(U()),[M,A]=a(!1),[B,z]=a(!1),[j]=a((()=>et.generate())),R=i(null),L=i(null),P=i(null),H=S["data-testid"]||"select-histogram";u((()=>{$!==T&&I(U())}),[$]);const N=e=>{I(e),null==p||p(e)},W=e=>{I(e),null==g||g(e)},V=()=>{B||M||z(!0)},Y=e=>{B&&!M&&R.current&&!R.current.contains(e.relatedTarget)&&(z(!1),null==f||f())};function U(){return null!=$?$:[O,O+k]}const q=e=>w?w(e):t(fa.BodyBL,{children:[v,e,y]});return e(M$,{children:e(hs,{enabled:!x&&!s,isOpen:M,renderElement:()=>e(Rl,{className:o,"data-testid":H,id:h,ref:R,tabIndex:-1,onFocus:V,onBlur:Y,$focused:B,$disabled:s,$readOnly:x,$error:c,children:e(aC,{ref:L,disabled:s,expanded:M,listboxId:j,popupRole:"dialog",readOnly:x,variant:"default",children:e(as,{ref:P,$disabled:s,children:E&&0!==E.length?t(nk,{children:[q(T[0]),e(ok,{children:"-"}),q(T[1])]}):e(ak,{truncateType:m,$variant:"default",children:b})})})}),renderDropdown:({elementWidth:t})=>e(rk,{style:{width:t},children:e(cd,{interval:k,value:T,bins:_,onChange:N,onChangeEnd:W,showRangeLabels:!1,renderEmptyView:D,ariaLabels:F})}),onOpen:()=>{A(!0)},onClose:()=>{A(!1)},onDismiss:()=>{var e;null===(e=L.current)||void 0===e||e.focus(),A(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:l,rootNode:C})})},lk=t=>{var{value:r,ariaLabel:n,onChange:o,onChangeEnd:i}=t,s=_e(t,["value","ariaLabel","onChange","onChangeEnd"]);const[l,c]=a(d());u((()=>{r!==l[0]&&c(d())}),[r]);function d(){return null!=r?[r]:[0]}return e(nd,Object.assign({},s,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;c([t]),null==o||o(t)},onChangeEnd:e=>{const[t]=e;c([t]),null==i||i(t)},ariaLabels:n?[n]:void 0}))},ck=S.p`
    text-align: right;
    ${ji["body-sm-semibold"]}
    color: ${zi["text-subtler"]};
`,dk=({value:t,maxLength:n,renderCustomCounter:i})=>{const[s,l]=a("");u((()=>{l(c(`${t||""}`))}),[t,n]);const c=e=>{if(i)return i(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e(r,{children:o.isValidElement(s)?s:e(ck,{"data-testid":"counter-label",children:s})})},uk=S.div`
    display: flex;
    flex-direction: column;
`,hk=S.textarea`
    border: ${Li["width-010"]} ${Li.solid} ${zi.border};
    border-radius: ${Hi.sm};
    background: ${zi.bg};
    outline: none;
    overflow: hidden;

    display: block;
    padding: ${Pi["spacing-12"]} ${Pi["spacing-16"]};
    width: 100%;

    ${ji["body-baseline-regular"]}
    color: ${zi.text};

    :focus,
    :active {
        outline-offset: -1px;
        outline: ${Li["width-020"]} ${Li.solid}
            ${zi["border-focus"]};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${zi["text-subtler"]};
    }

    ${e=>e.readOnly?k`
                border-color: transparent;
                background: transparent !important;

                :focus,
                :active {
                    outline-color: ${zi["border-focus"]};
                }
            `:e.disabled?k`
                background: ${zi["bg-disabled"]};
                cursor: not-allowed;

                :focus,
                :active {
                    outline-color: ${zi["border-disabled"]};
                }
            `:e.$error?k`
                border-color: ${zi["border-error"]};

                :focus,
                :active {
                    outline-color: ${zi["border-error-focus"]};
                }
            `:void 0}
`,fk=o.forwardRef(((t,r)=>{var{value:n,disabled:o,error:i,rows:s=5,prefix:l,transformValue:c,onChange:d,maxLength:h}=t,f=_e(t,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[p,g]=a(n);u((()=>{g(n)}),[n]);return e(hk,Object.assign({ref:r,disabled:o,value:l?l+(null!=p?p:""):p,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const r=t.slice(l.length),n=c?c(r):r;if(g(n),e.target.value=l+n,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});d(t)}}else{const r=c?c(null!=t?t:""):t;g(r),e.target.value=r,d&&d(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},$error:i,rows:s,maxLength:l&&h?l.length+h:h},f))}));o.forwardRef(((r,n)=>{var{value:o,disabled:i,rows:s=5,onChange:l,transformValue:c,prefix:d,maxLength:h,renderCustomCounter:f}=r,p=_e(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[g,m]=a(o);u((()=>{m(o)}),[o]);return t(uk,{children:[e(fk,Object.assign({ref:n,disabled:i,value:g,rows:s||5,onChange:e=>{const t=e.target.value;m(t),l&&l(e)},prefix:d,transformValue:c,maxLength:h},p)),h&&e(dk,{value:g,maxLength:h,renderCustomCounter:f})]})}));const pk=S.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Pi["spacing-4"]};
`,gk=S.div`
    display: flex;
    flex: 1;
    margin-right: ${Pi["spacing-12"]};
`,mk=S(za)`
    margin-top: 0;
`,bk=o.forwardRef(((n,o)=>{const{label:i,value:s,errorMessage:l,id:c="form-textarea","data-error-testid":d,"data-testid":h,onChange:f,layoutType:p,mobileCols:g,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,transformValue:k,prefix:_=""}=n,D=_e(n,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[F,E]=a(s);u((()=>{E(s)}),[s]);return t(Qa,{id:c,label:i,disabled:D.disabled,layoutType:p,mobileCols:g,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,children:[e(fk,Object.assign({id:`${c}-base`,"data-testid":h||c,value:F,error:!!l,onChange:e=>{const t=e.target.value;E(t),f&&f(e)},ref:o,prefix:_,transformValue:k},D)),l||D.maxLength?t(pk,{children:[l&&e(gk,{children:e(mk,{"data-testid":d||(c?`${c}-error-message`:"error-message"),children:l})}),D.maxLength&&e(dk,{value:F,maxLength:D.maxLength,renderCustomCounter:D.renderCustomCounter})]}):e(r,{})]})})),vk=S.div`
    position: relative;
`,yk=S(Ll)`
    height: 3rem;
    gap: ${Pi["spacing-8"]};
`,xk=S(Pl)`
    display: block;
    width: 100%;
    flex: 1;
`;var wk,$k;!function(e){e.AM="AM",e.PM="PM"}(wk||(wk={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,o]=e.split(":"),i=parseInt(n,10),a=parseInt(o,10);if(isNaN(i)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*i+a,l=s%t,c=0===l?s:r?s+(t-l):s-l,d=c%60;return`${Math.floor(c/60).toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let o=Ae(e,n),i=Ae(t,n);o.isSame(i)&&(i=i.add(1,"day"));const a=[];for(;o.isBefore(i);)a.push(o.format(r)),o=o.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:wk.AM};if(!t)return r;try{if("24hr"===e){const n=kk(t,e);r.minute=tt.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period=wk.AM,r.hour=0===o?"12":tt.padValue(o.toString())):(r.period=wk.PM,r.hour=12===o?o.toString():tt.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=kk(t,e);r.hour=tt.padValue(n),r.minute=tt.padValue(o),r.period="am"===i.toLowerCase()?wk.AM:wk.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?tt.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return tt.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?tt.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?tt.padValue(n.toString()):13===n?tt.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===wk.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return tt.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:o=""}=kk(e,t),i=tt.padValue(r);let a=`${i}:${tt.padValue(n)}`;return"12hr"===t?(a+=o.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&i<12&&(i+=12),"am"===r&&12===i&&(i=0),_k(i,o)}return e},e.generateTimings=(t,r="12hr",n,o)=>{const i=[];let a=0,s=1440-t;for(n&&(a=e.timeToMinutes(n)),o&&(s=e.timeToMinutes(o));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=_k(e,n,t);i.push(r)}else{const t=_k(e,n);i.push(t)}a+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&o<12?o+=12:("am"===a&&12===o||24===o)&&(o=0),_k(o,i);a?0===o||24===o?(a="am",o=12):o>12&&(a="pm",o-=12):(a=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return _k(o,i,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let o="",i=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<i)i=Math.abs(r),o=t;else if(r>0)break}return o},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&12!==i&&(i+=12),"am"===r&&12===i&&(i=0),60*i+o}}($k||($k={}));const Ck=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},Sk=e=>{const t=parseInt(e);return t>=0&&t<=59},kk=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!Ck(r[0],t)||!Sk(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!Ck(r[0],t)||!Sk(r[1]))throw n;return{hour:r[0],minute:r[1]};var o},_k=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,Dk=S.div`
    padding: ${Pi["spacing-8"]} ${Pi["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=zi["bg-error"](e),r=zi["border-error"](e);break;case"success":t=zi["bg-success"](e),r=zi["border-success"](e);break;case"warning":default:t=zi["bg-warning"](e),r=zi["border-warning"](e);break;case"info":t=zi["bg-info"](e),r=zi["border-info"](e);break;case"description":t=zi["bg-strong"](e),r=zi["border-strong"](e)}return k`
            background: ${t};
            border-left: ${Li["width-020"]} ${Li.solid}
                ${r};
        `}}

    color: ${zi.text};
    ${e=>"small"===e.$sizeType?wa({textSize:"body-sm"}):wa({textSize:"body-md"})}
`,Fk=S.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Pi["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=zi["icon-error"](e);break;case"success":t=zi["icon-success"](e);break;case"warning":default:t=zi["icon-warning"](e);break;case"info":t=zi["icon-info"](e);break;case"description":t=zi["icon-subtle"](e)}return k`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,Ek=S(fa.LinkSM)`
    ${e=>"small"===e.$sizeType?k`
                ${ji["body-sm-semibold"]}
                margin-top: ${Pi["spacing-4"]};
            `:k`
                ${ji["body-md-semibold"]}
                margin-top: ${Pi["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Pi["spacing-4"]};
    }
`,Ok=S.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Tk=S.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return k`
                margin-bottom: ${Pi["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,Ik=S.button`
    ${e=>"small"===e.$sizeType?k`
                ${ji["body-sm-semibold"]}
            `:k`
                ${ji["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Pi["spacing-4"]};
    margin-top: ${Pi["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${zi["text-primary"]};
`,Mk=S(le)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Ri["duration-350"]} ${Ri["ease-standard"]};
`,Ak=S.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?k`
                    color: ${zi["icon-selected-disabled"]};
                `:k`
                    color: ${zi["icon-disabled-subtle"]};
                `:e.$active?k`
                color: ${zi["icon-selected"]};
            `:k`
            color: ${zi["icon-subtle"]};
        `};
`,Bk=k`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${ji.Spec["weight-regular"]};
        ${e=>e.$size&&ji[`${e.$size}-regular`]}
        color: ${zi.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,zk=S.ol`
    ${Bk}

    margin-left: 3rem;

    ${Wi.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:t}=e,r=e.$counterType||"decimal",n=e.$counterSeparator||")";return k`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){return k`
                counter-reset: list ${t?r+1:r-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,jk=S.ul`
    ${Bk}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,Rk=t=>{var{size:r,bulletType:n,bottomMargin:o,children:i}=t,a=_e(t,["size","bulletType","bottomMargin","children"]);return e(jk,Object.assign({$size:r,$bulletType:n,$bottomMargin:o},a,{children:i}))};Rk.displayName="TextList.Ul";const Lk=t=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:a}=t,s=_e(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e(zk,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},s,{children:a}))};Lk.displayName="TextList.Ol";const Pk=Rk,Hk=S.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${zi.bg};

    ${e=>{if(!e.$indicator)return k`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return k`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?k`
                            border-color: ${zi["border-error"]};
                        `:k`
                            border-color: ${zi["border-error"]};

                            &:has(${Uk}:hover) {
                                background: ${zi["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?k`
                            border: none;
                            background: ${zi["bg-selected-disabled"]};
                        `:k`
                            border: none;
                        `:e.$selected?k`
                        border: none;
                        background: ${zi["bg-selected"]};

                        &:has(${Uk}:hover) {
                            background: ${zi["bg-selected-hover"]};

                            & ${Wk} {
                                color: ${zi["text-selected-hover"]};
                            }

                            & ${t_} {
                                color: ${zi["icon-selected-hover"]};
                            }
                        }
                    `:k`
                    border: none;

                    &:has(${Uk}:hover) {
                        background: ${zi["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?k`
                            border-color: ${zi["border-error"]};
                        `:k`
                            border-color: ${zi["border-error"]};

                            &:has(${Uk}:hover) {
                                background: ${zi["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?k`
                            border-color: ${zi["border-selected-disabled"]};
                            background: ${zi["bg-selected-disabled"]};
                        `:k`
                            border-color: ${zi["border-disabled"]};
                            background: ${zi["bg-disabled"]};
                        `:e.$selected?k`
                        border-color: ${zi["border-selected"]};
                        background: ${zi["bg-selected"]};

                        &:has(${Uk}:hover) {
                            background: ${zi["bg-selected-hover"]};

                            & ${Wk} {
                                color: ${zi["text-selected-hover"]};
                            }

                            & ${t_} {
                                color: ${zi["icon-selected-hover"]};
                            }
                        }
                    `:k`
                    border-color: ${zi.border};

                    &:has(${Uk}:hover) {
                        background: ${zi["bg-hover-subtle"]};
                    }
                `}
`,Nk=S.input`
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
`,Wk=S.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?k`
                    color: ${zi["text-selected-disabled"]};
                `:k`
                    color: ${zi["text-disabled"]};
                `:e.$selected?k`
                color: ${zi["text-selected"]};
            `:k`
            color: ${zi.text};
        `}
`,Vk=S.label`
    ${ji["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${Wi.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${Wi.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,Yk=S.div`
    ${ji["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${ji["body-md-semibold"]}
    }
`,Uk=S.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,qk=S.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,Kk=S.button`
    color: ${e=>e.$disabled?zi["text-disabled"]:zi["text-error"]};
    white-space: nowrap;
    ${ji["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,Zk=S.button`
    color: ${e=>e.disabled?zi["text-disabled"]:zi["text-primary"]};
    ${ji["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${zi.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,Gk=S.div`
    width: 100%;
    color: ${e=>e.$disabled?zi["text-disabled"]:zi["text-error"]};
    border: none;
    background: ${zi.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,Qk=S((r=>{var{type:n,className:o,children:i,actionLink:s,actionLinkIcon:l,sizeType:c="default",showIcon:d=!1,customIcon:h,maxCollapsedHeight:f}=r,p=_e(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[g,m]=a(!1),[b,v]=a(!1),{height:y,ref:x}=Gt();u((()=>{w()}),[f,y]);const w=()=>{m(!f),v($())},$=()=>!(!y||!f)&&y>f;return t(Dk,{className:o,$type:n,$sizeType:c,"data-testid":p["data-testid"],children:[d&&e(Fk,{$sizeType:c,$type:n,children:(()=>{if(n&&h)return h;switch(n){case"success":return e(Ce,{});case"warning":return e($e,{});case"error":return e(ce,{});case"info":case"description":return e(C,{});default:return null}})()}),t(Ok,{children:[t(Tk,{$maxCollapsedHeight:$()?f:void 0,$showMore:g,$hasActionLink:!!s,children:[e("div",{ref:x,children:i}),s?t(Ek,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c},s,{children:[s.children,l||e(we,{})]})):null]}),b&&t(Ik,{$sizeType:c,$type:n,type:"button",onClick:()=>m(!g),children:["Show ",g?"less":"more",e(Mk,{$expanded:g})]})]})]})}))`
    width: 100%;
    user-select: none;
`,Xk=S.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${zi.bg};
    ${wa({textSize:"body-md"})}

    ${e=>e.$disabled?k`
                color: ${zi["text-disabled"]};
            `:e.$selected?k`
                color: ${zi["text-selected"]};
            `:k`
                color: ${zi.text};
            `}
`,Jk=S(fa.BodyMD)`
    color: ${e=>e.$disabled?zi["text-disabled"]:zi["text-error"]};
`,e_=S(Pk)`
    color: ${e=>e.$disabled?zi["text-disabled"]:zi["text-error"]};
`,t_=S((({type:t,active:r=!1,disabled:n,className:o})=>{let i;switch(t){case"checkbox":i=e(r?me:pe,{});break;case"radio":i=e(r?ke:Se,{});break;case"tick":i=e(be,{});break;case"cross":i=e(G,{});break;default:i=null}return e(Ak,{className:o,$active:r,$disabled:n,children:i})}))`
    ${e=>e.$disabled?e.$selected?k`
                    color: ${zi["icon-selected-disabled"]};
                `:k`
                    color: ${zi["icon-disabled-subtle"]};
                `:e.$selected?k`
                color: ${zi["icon-selected"]};
            `:k`
            color: ${zi["icon-subtle"]};
        `};
`,r_=S(Ab.div)`
    position: absolute;
    top: calc(3rem + ${Pi["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${Wi.MaxWidth.xxs} {
        max-width: 100%;
    }
`,n_=S.div`
    position: relative;
    width: 100%;
    padding: ${Pi["spacing-8"]} ${Pi["spacing-20"]}
        ${Pi["spacing-24"]} ${Pi["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${zi.bg};
    border: ${Li["width-010"]} ${Li.solid} ${zi.border};
    border-radius: ${Hi.sm};
`,o_=S.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Wi.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,i_=S.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Pi["spacing-16"]};
    gap: ${Pi["spacing-8"]} ${Pi["spacing-16"]};

    ${Wi.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${Pi["spacing-32"]};
    }
`,a_=S.div`
    display: flex;
    align-items: center;
    margin-right: ${Pi["spacing-32"]};

    ${Wi.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,s_=S.div`
    display: flex;
    gap: ${Pi["spacing-8"]};

    ${Wi.MaxWidth.lg} {
        flex-direction: column;
    }

    ${Wi.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,l_=S.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Wi.MaxWidth.xxs} {
        width: 6rem;
    }
`,c_=S(ba)`
    width: 5rem;
    padding: ${Pi["spacing-16"]} 0;
    color: ${zi.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${zi["icon-hover"]};
    }
`,d_=S(fa.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,u_=S(Rl)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Wi.MaxWidth.xxs} {
        width: 100%;
    }
`,h_=S(Pl)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,f_=S((({type:n="checkbox",indicator:o,checked:s,styleType:l="default",children:c,childrenMaxLines:d,subLabel:h,disabled:f,error:p,name:m,id:b,className:v,compositeSection:y,removable:x,onRemove:w,"data-testid":$,onChange:C,useContentWidth:S})=>{const{collapsible:k=!0,errors:_,children:D,initialExpanded:F}=y||{},[E,O]=a(s),[T,I]=a(!!F),M=g((()=>{const e=Array.isArray(_)&&(null==_?void 0:_.length)>0,t=!Array.isArray(_)&&!!_;return e||t}),[_]),[A]=a(et.generate()),B=b?`${b}`:`tg-${A}`,z=i(null);u((()=>{O(s)}),[s]),u((()=>{E&&I(null==F||F)}),[E]);const j=()=>{f||I(!T)},R=()=>{f||!w||w()},L=()=>{let t;switch(n){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=n}return e(t_,{type:t,active:E,disabled:f,$selected:E,$disabled:f})},P=()=>{if(!h)return null;let t;return t="function"==typeof h?h():h,e(Yk,{"data-id":"toggle-sublabel",children:t})},H=n=>t(r,{children:[e(Jk,{weight:"semibold",$disabled:f,children:"Error"}),e(e_,{$disabled:f,children:null==n?void 0:n.map(((t,r)=>e("li",{id:`${B}-error-list-item-${r}`,children:e(Jk,{weight:"semibold",$disabled:f,children:t})},r)))})]});return t(Hk,{$selected:E,$disabled:f,className:v,$styleType:l,$error:p,$indicator:o,$useContentWidth:S,id:b,"data-testid":$,children:[t(Uk,{id:`${B}-header-container`,$disabled:f,$error:p,$selected:E,$indicator:o,$styleType:l,children:[t(qk,{$addPadding:x,children:[e(Nk,{ref:z,name:m,id:`${B}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:f,onChange:e=>{if(!f){if(C)return void C(e);switch(n){case"checkbox":O((e=>!e));break;case"radio":case"yes":case"no":E||O(!0)}}},checked:E}),o&&L(),t(Wk,{$selected:E,$disabled:f,children:[e(Vk,{htmlFor:`${B}-input`,"data-testid":`${B}-toggle-label`,$maxLines:d,children:c}),h&&P()]})]}),x&&e(Kk,{type:"button",$disabled:f,onClick:R,id:`${B}-remove-button`,children:"Remove"})]}),D&&t("div",{children:[(!k||T)&&e(Xk,{"data-id":"toggle-composite-children",$isFinalItem:!k,$disabled:f,children:D}),k&&!T&&M&&e(Gk,{$disabled:f,onClick:j,id:`${B}-error-alert`,children:e(Qk,{type:f?"description":"error",className:v,showIcon:!0,children:Array.isArray(_)?H(_):_})}),k&&t(Zk,{$paddingTopRequired:!T&&!M,disabled:f,onClick:j,"data-testid":T?"collapse-button":"expand-button",children:[T?"Show less":"Show more",e(T?xe:Q,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,p_=S(Rs.Small)`
    width: 7rem;

    ${Wi.MaxWidth.sm} {
        flex: 1;
    }

    ${Wi.MaxWidth.xxs} {
        width: 100%;
    }
`;var g_,m_,b_;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(g_||(g_={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(m_||(m_={})),function(e){e.AM="am",e.PM="pm"}(b_||(b_={}));const v_=({id:r,value:n,show:o,format:s,onChange:l,onCancel:c})=>{var d;const h=$k.getTimeValues(s,n),[p,g]=a(h.hour),[m,b]=a(h.minute),[v,y]=a(h.period),x=i(null),w=i(null),$=Gt();u((()=>{if(o&&x.current&&x.current.focus(),o){const{hour:e,minute:t,period:r}=$k.getTimeValues(s,n);g(e),b(t),y(r)}}),[o,n,s]),u((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",C),t&&t.addEventListener("keydown",C),()=>{e&&e.removeEventListener("keydown",C),t&&t.removeEventListener("keydown",C)}}),[]);const C=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=f((e=>{switch(e.currentTarget.name){case g_.MINUTE_UP:b($k.updateMinutes(m,"add"));break;case g_.MINUTE_DOWN:b($k.updateMinutes(m,"minus"));break;case g_.HOUR_UP:g($k.updateHours(p,"add"));break;case g_.HOUR_DOWN:g($k.updateHours(p,"minus"))}}),[p,m]),k=e=>{e.target.select()},_=e=>{const t=e.target.value;switch(e.target.name){case m_.HOUR:t.length<=2&&g(t);break;case m_.MINUTE:t.length<=2&&b(t)}},D=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case m_.HOUR:{const r=t>23||t<0?h.hour:$k.convertHourTo12HourFormat(e.target.value);g(r);break}case m_.MINUTE:{const r=t>59||t<0?h.minute:e.target.value;b(tt.padValue(r));break}}},F=e=>{switch(e.target.name){case b_.AM:y(wk.AM);break;case b_.PM:y(wk.PM)}},E=e=>r?`${r}-${e}`:e,O=mb({opacity:o?1:0,height:o?(null!==(d=$.height)&&void 0!==d?d:0)+32+2:0});return e(r_,{"data-testid":"animated-dropdown-wrapper",style:O,children:t(n_,{ref:$.ref,"data-testid":E("timepicker-dropdown"),inert:o?void 0:"",children:[t(o_,{children:[t(a_,{children:[t(l_,{children:[e(c_,{"aria-label":"increase hour",name:g_.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":E("hour-increment-button"),children:e(xe,{})}),e(u_,{children:e(h_,{"aria-label":"hour",type:"number",name:m_.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:p,onFocus:k,onChange:_,onBlur:D,min:1,max:12,placeholder:"HH","data-testid":E("hour-input")})}),e(c_,{"aria-label":"decrease hour",name:g_.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":E("hour-decrement-button"),children:e(Q,{})})]}),e(d_,{children:":"}),t(l_,{children:[e(c_,{"aria-label":"increase minute",name:g_.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":E("minute-increment-button"),children:e(xe,{})}),e(u_,{children:e(h_,{"aria-label":"minute",type:"number",name:m_.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:m,onChange:_,onBlur:D,onFocus:k,min:0,max:59,placeholder:"MM","data-testid":E("minute-input")})}),e(c_,{"aria-label":"decrease minute",name:g_.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":E("minute-decrement-button"),children:e(Q,{})})]})]}),t(s_,{children:[e(f_,{checked:v===wk.AM,name:b_.AM,type:"radio",onChange:F,"data-testid":E("am-toggle"),"aria-label":"AM",children:"AM"}),e(f_,{checked:v===wk.PM,name:b_.PM,type:"radio",onChange:F,"data-testid":E("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),t(i_,{children:[e(p_,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":E("cancel-button"),children:"Cancel"}),e(p_,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?$k.convertTo24HourFormat({hour:p,minute:m,period:v}):`${p}:${m}${v}`,l(e)},disabled:""===p||""===m,"data-testid":E("confirm-button"),children:"Done"})]})]})})},y_=r=>{var{id:n,disabled:o=!1,error:s,value:l,format:c="24hr",readOnly:d,onChange:h,onFocus:f,onBlur:p}=r,g=_e(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,b]=a(!1),[v,y]=a(!1),[x,w]=a(""),[$,C]=a(""),S=i(null);u((()=>{l&&(w(l.start),C(l.end))}),[l]),Xt("mousedown",(function(e){o||F(e)}),"document"),Xt("keyup",(function(e){if("Tab"===e.code)F(e)}),"document");const k=()=>{D()},_=()=>{m||v||f&&f()},D=()=>{b(!1),y(!1),p&&p()},F=e=>{S.current&&!S.current.contains(e.target)&&(v||m)&&D()};return e(vk,Object.assign({ref:S,id:n},g,{children:t(yk,{$disabled:o,$error:s,$readOnly:d,children:[t(oc,{error:s,currentActive:m?"start":v?"end":"none",children:[e(xk,{onFocus:()=>{o||d||m||(y(!1),b(!0),_())},readOnly:!0,placeholder:"From",value:$k.formatDisplayValue(x,c),disabled:o,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e(xk,{onFocus:()=>{o||d||v||(b(!1),y(!0),_())},readOnly:!0,placeholder:"To",value:$k.formatDisplayValue($,c),disabled:o,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),e(v_,{id:n,show:m,value:x,format:c,onCancel:k,onChange:e=>{b(!1),y(!0),w(e);h&&h({start:e,end:$})}}),e(v_,{id:n,show:v,value:$,format:c,onCancel:k,onChange:e=>{y(!1),C(e);h&&h({start:x,end:e}),""==x?b(!0):p&&p()}})]})}))},x_=S(Ll)`
    height: 3rem;
    gap: ${Pi["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${Pi["spacing-20"]});
`,w_=r=>{var{id:n,disabled:o=!1,error:s,value:l,format:c="12hr",readOnly:d,onChange:h,onFocus:p,onBlur:m,alignment:b="left",dropdownZIndex:v,startLimit:y,endLimit:x,interval:w=15}=r,$=_e(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[C]=a((()=>et.generate())),[S,k]=a(null),[_,D]=a(!1),[F,E]=a(""),[O,T]=a(""),[I,M]=a(""),[A,B]=a(""),[z,j]=a(""),R=i(null),L=i(null),P=i(null),H=g((()=>$k.generateTimings(w,c,y,x)),[w,c,y,x]),N=g((()=>{if(""===A)return H;const e=$k.findClosestFlooredTime(A,H);return e?H.slice(H.indexOf(e)):[]}),[H,A]),W=f((e=>$k.parseInput(e,c)),[c]);u((()=>{var e,t;if(l){const r=null!==(e=W(l.start))&&void 0!==e?e:"",n=null!==(t=W(l.end))&&void 0!==t?t:"";T(r),M(n),B(r),j(n)}}),[l,W]),u((()=>{if(s)return void D(!1);const e=W(O),t=W(I);if(void 0===e)E("Invalid start time");else if(void 0===t)E("Invalid end time");else{if(!(""!==e&&""!==t&&$k.to24Hour(t)<$k.to24Hour(e)))return E(""),void(document.activeElement!==L.current&&document.activeElement!==P.current||D(!0));E("End time must be after start time")}D(!1)}),[O,I,W,s]);const V=e=>{o||d||(S||_||null==p||p(),k(e),D(!0))},Y=e=>{var t;o||d||(k(e),D(!0),null===(t=("start"===e?L:P).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===S?q(O):"end"===S&&(_&&K(I),null===(t=P.current)||void 0===t||t.blur());break;case"Tab":Z(O,I,{})}}const q=e=>{Z(e,I,{goToNextInput:!0})},K=e=>{Z(O,e,{triggerOnBlur:!0})},Z=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var o,i,a;const s=null!==(o=W(e))&&void 0!==o?o:A,l=null!==(i=W(t))&&void 0!==i?i:z;T(s),M(l);s===A&&l===z||null==h||h({start:s,end:l}),r&&void 0!==W(e)&&(k("end"),null===(a=P.current)||void 0===a||a.select()),n&&(k(null),D(!1),null==m||m()),B(s),j(l)},G=e=>{e.stopPropagation(),T(""),M(""),B(""),j("");null==h||h({start:"",end:""}),k(null),D(!1)},Q=e=>{R.current&&!R.current.contains(e.relatedTarget)&&S&&!_&&Z(O,I,{triggerOnBlur:!0})},X=()=>{if(!d&&!o&&((null==O?void 0:O.length)>0||(null==I?void 0:I.length)>0))return e(XS,{onClick:G,type:"button","aria-label":"Clear",children:e(hd,{"aria-hidden":!0})})};return t(vk,Object.assign({id:n},$,{children:[e(M$,{children:e(hs,{enabled:!d&&!o,isOpen:_,renderElement:()=>t(x_,{ref:R,$disabled:o,$error:s||!!F,$readOnly:d,onBlur:Q,children:[t(oc,{error:s||!!F,currentActive:null===S?"none":S,children:[e(xk,{ref:L,onFocus:()=>V("start"),placeholder:"start"===S?"hh:mm":"From",onChange:e=>T(e.target.value),value:O,disabled:o,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":_,"aria-controls":C,"aria-autocomplete":"list"}),e(xk,{ref:P,onFocus:()=>V("end"),placeholder:"end"===S?"hh:mm":"To",onChange:e=>M(e.target.value),value:I,disabled:o,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":_,"aria-controls":C,"aria-autocomplete":"list"})]}),X()]}),renderDropdown:()=>{if(_)return e(nC,"start"===S?{listItems:H,onSelectItem:q,selectedItems:[O],disableItemFocus:!0,topScrollItem:$k.findClosestFlooredTime(W(O),H),listboxId:C}:{listItems:N,onSelectItem:K,selectedItems:[I],disableItemFocus:!0,topScrollItem:$k.findClosestFlooredTime(W(I),N),listboxId:C})},onClose:e=>{"outside-press"===e?(k(null),D(!1),null==m||m()):Z(O,I,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===S?L:P).current)||void 0===e||e.focus(),D(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:v})}),!s&&F&&e(za,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:F})]}))},$_=t=>{var{variant:r="dial"}=t,n=_e(t,["variant"]);return e("combobox"===r?w_:y_,Object.assign({},n))};S.div`
    position: relative;
`;const C_=S(Pl)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,S_=r=>{var{id:n,disabled:o=!1,readOnly:s=!1,error:l,value:c,placeholder:d,format:u="24hr",onChange:h,onFocus:p,onBlur:g}=r,m=_e(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[b,v]=a(!1),y=i(null);Xt("mousedown",(function(e){o||s||$(e)}),"document"),Xt("keyup",(function(e){if("Tab"===e.code)$(e)}),"document");const x=()=>{o||s||b||(v(!0),p&&p())};const w=()=>{v(!1),g&&g()},$=e=>{y.current&&!y.current.contains(e.target)&&b&&w()},C=f((()=>"12hr"===u?"HH:MMam":"HH:MM"),[u,d]);return t(Ll,Object.assign({ref:y,id:n,$readOnly:s,$disabled:o,$error:l},m,{children:[e(C_,{onFocus:x,focused:b,readOnly:!0,placeholder:d||C(),value:$k.formatDisplayValue(c,u),disabled:o,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),e(v_,{id:n,show:b,value:c,format:u,onCancel:()=>{w()},onChange:e=>{h&&h(e),w()}})]}))},k_=S(kv)`
    margin-right: 0.5rem;
`,__=S(gd)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,D_=S(__)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,F_=S(fa.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return k`
                color: ${zi["text-disabled"]};
            `}}
`,E_=S.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,O_=S(fa.BodyBL)``,T_=n=>{var{disabled:o,error:s,value:l,onChange:c,onBlur:d,onChangeRaw:h,onBlurRaw:f,readOnly:p,placeholder:g="00-8888",autoComplete:m}=n,b=_e(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[v,y]=a(""),[x,w]=a(""),[$,C]=a("none"),S=i(null),k=i(null),_=i(null),D=i(v),F=i(x),E=i($),O=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),T=er({ref:k,formatter:O}),I=er({ref:_,formatter:O}),M=e=>{D.current=e,y(e)},A=e=>{F.current=e,w(e)},B=e=>{E.current=e,C(e)};u((()=>{"floor"===$&&3===v.length&&_.current&&_.current.focus()}),[v]),u((()=>{H(l)}),[l]);const z=e=>{B(e.target.name),e.target.select()},j=e=>{const t=e.target.name,r=e.target.value,n=P(r);"floor"===t?(M(n),n!==v&&N(n,t)):"unit"===t&&(A(n),n!==x&&N(n,t))},R=e=>{const t=e.target.name;if("floor"===t){const e=T();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),M(r),N(r,t)}else if("unit"===t){const e=I();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),A(r),N(r,t)}},L=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===$&&0===x.length&&(null===(t=k.current)||void 0===t||t.focus())},P=e=>/^[0-9]$/.test(e)?tt.padValue(e,!0):e.toLocaleUpperCase(),H=e=>{if(e!==I_)if(void 0===e||0===e.length)M(""),A("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];M("floor"===$?e:P(e)),A("unit"===$?r:P(r))}}},N=(e,t)=>{if(!c&&!h)return;const r={floor:D.current,unit:F.current};if(r[t]=e,c){const e=V(r);c(e)}h&&h([r.floor,r.unit])},W=()=>{if(!d&&!f)return;const e={floor:P(D.current),unit:P(F.current)};if(d){const t=V(e);d(t)}f&&f([e.floor,e.unit])},V=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":I_},Y=e=>e.split("-");return t(Ll,Object.assign({},b,{ref:S,onClick:()=>{"none"===$&&k.current&&k.current.focus()},$disabled:o,$error:s,$readOnly:p,tabIndex:-1,onBlur:e=>{S.current&&S.current.contains(e.relatedTarget)||"none"!==E.current&&(B("none"),W())},children:[e(k_,{"data-testid":"addon",$disabled:o,$readOnly:p,children:"#"}),p&&l?(r=>{const n=r.split("-");return t(E_,{children:[e(O_,{children:n[0]}),e(F_,{children:"-"}),e(O_,{children:n[1]})]})})(l):t(r,{children:[e(__,{name:"floor",maxLength:3,value:v,ref:k,onFocus:z,onBlur:j,onChange:R,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==$||p?Y(g)[0]:"",autoComplete:m,styleType:"no-border"}),e(F_,{$inactive:0===v.length,children:"-"}),e(D_,{name:"unit",maxLength:5,value:x,ref:_,onFocus:z,onBlur:j,onChange:R,onKeyDown:L,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==$||p?Y(g)[1]:"",autoComplete:m,styleType:"no-border"})]})]}))},I_="Invalid unit number",M_={DateInput:t=>{var{label:r,errorMessage:n,id:o="form-date-input","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Qa,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(Xl,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},DateRangeInput:t=>{var{label:r,errorMessage:n,id:o="form-date-range-input","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Qa,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(cc,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},ESignature:t=>{const{label:r,errorMessage:n,id:o="form-field","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Qa,{id:o,label:r,errorMessage:n,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(Lc,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},HistogramSlider:t=>{var{label:r,errorMessage:n,id:o="form-histogram-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Qa,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(cd,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},Input:md,InputGroup:Fv,MaskedInput:Vv,Label:Ra,MultiSelect:t=>{var{label:r,errorMessage:n,id:o="form-multi-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=_e(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e(Qa,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(xS,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s,variant:y},x))})},NestedSelect:t=>{var{label:r,errorMessage:n,id:o="form-nested-select","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Qa,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(SS,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},NestedMultiSelect:t=>{var{label:r,errorMessage:n,id:o="form-nested-multi-select","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Qa,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(CS,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},Select:t=>{var{label:r,errorMessage:n,id:o="form-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=_e(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e(Qa,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(tk,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s,variant:y},x))})},SelectHistogram:t=>{var{label:r,errorMessage:n,id:o="form-select-histogram","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,histogramSlider:v}=t,y=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);return e(Qa,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(sk,Object.assign({histogramSlider:v,error:!!n,"data-testid":a||o,id:`${o}-base`},y))})},Slider:t=>{var{label:r,errorMessage:n,id:o="form-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Qa,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(lk,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSlider:t=>{var{label:r,errorMessage:n,id:o="form-range-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Qa,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(nd,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSelect:t=>{var{label:r,errorMessage:n,id:o="form-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=_e(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Qa,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(ek,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s},y))})},Textarea:bk,Timepicker:t=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Qa,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(S_,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},TimeRangePicker:t=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Qa,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e($_,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},CustomField:t=>{var{id:r="form-custom-field","data-error-testid":n,children:o}=t,i=_e(t,["id","data-error-testid","children"]);return e(Qa,Object.assign({id:r,"data-error-testid":n},i,{children:o}))},UnitNumberInput:t=>{var{label:r,errorMessage:n,id:o="form-unit-number-input","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Qa,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(T_,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},PhoneNumberInput:t=>{var{label:r,errorMessage:n,id:o="form-phone-number-input","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Qa,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(PS,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},PredictiveTextInput:t=>{var{label:r,errorMessage:n,id:o="form-predictive-text","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Qa,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(GS,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})}};export{zi as C,M_ as F,zc as S,De as _,jc as a};
//# sourceMappingURL=index.32842fe0.js.map
