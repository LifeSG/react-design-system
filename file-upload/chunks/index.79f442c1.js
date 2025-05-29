import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{createContext as i,useMemo as a,useRef as s,useReducer as l,useEffect as c,useCallback as u,forwardRef as d,useImperativeHandle as f,Fragment as h,useLayoutEffect as p,useState as g,memo as m,useContext as b,isValidElement as v,createRef as y,cloneElement as x,PureComponent as w,Children as $,lazy as C,Suspense as S,createElement as D}from"react";import{CloudArrowUpFillIcon as k}from"@lifesg/react-icons/cloud-arrow-up-fill";import _,{css as O,useTheme as E,keyframes as T}from"styled-components";import{ExternalIcon as I}from"@lifesg/react-icons/external";import F,{unstable_batchedUpdates as M,createPortal as A,findDOMNode as j}from"react-dom";import{ICircleFillIcon as R}from"@lifesg/react-icons/i-circle-fill";import{useFloatingTree as z,FloatingTree as B,useFloatingNodeId as P,FloatingNode as L,useFloating as N,autoUpdate as H,offset as W,flip as V,shift as Y,limitShift as U,useClick as K,useDismiss as q,useHover as G,useInteractions as Q,FloatingPortal as Z,FloatingFocusManager as X,size as J,useTransitionStyles as ee}from"@floating-ui/react";import{CrossIcon as te}from"@lifesg/react-icons/cross";import{ChevronDownIcon as re}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as ne}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as oe}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as ie,PencilIcon as ae,EraserIcon as se,SquareIcon as le,SquareFillIcon as ce,SquareTickFillIcon as ue,MinusSquareFillIcon as de,CrossIcon as fe,ChevronDownIcon as he}from"@lifesg/react-icons";import{ExclamationCircleFillIcon as pe}from"@lifesg/react-icons/exclamation-circle-fill";import{MagnifierIcon as ge}from"@lifesg/react-icons/magnifier";import{EyeIcon as me}from"@lifesg/react-icons/eye";import{EyeSlashIcon as be}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as ve}from"@lifesg/react-icons/exclamation-triangle";import{SquareIcon as ye}from"@lifesg/react-icons/square";import{SquareFillIcon as xe}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as we}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as $e}from"@lifesg/react-icons/tick";import{CaretRightIcon as Ce}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as Se}from"@lifesg/react-icons/minus-square-fill";import{ChevronUpIcon as De}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as ke}from"@lifesg/react-icons/arrow-right";import{ExclamationTriangleFillIcon as _e}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as Oe}from"@lifesg/react-icons/tick-circle-fill";import{CircleIcon as Ee}from"@lifesg/react-icons/circle";import{CircleDotIcon as Te}from"@lifesg/react-icons/circle-dot";import{BinIcon as Ie}from"@lifesg/react-icons/bin";import{PencilIcon as Fe}from"@lifesg/react-icons/pencil";import{DragHandleIcon as Me}from"@lifesg/react-icons/drag-handle";const Ae=i({activeId:void 0,setActiveId:()=>{}});var je="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Re(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ze(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var Be,Pe={exports:{}},Le={exports:{}},Ne={};var He,We,Ve,Ye,Ue,Ke,qe,Ge,Qe,Ze,Xe,Je,et,tt,rt={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function nt(){return We||(We=1,"production"===process.env.NODE_ENV?Le.exports=function(){if(Be)return Ne;Be=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:switch(e=e.type){case l:case c:case n:case i:case o:case d:return e;default:switch(e=e&&e.$$typeof){case s:case u:case p:case h:case a:return e;default:return f}}case r:return f}}}function x(e){return y(e)===c}return Ne.AsyncMode=l,Ne.ConcurrentMode=c,Ne.ContextConsumer=s,Ne.ContextProvider=a,Ne.Element=t,Ne.ForwardRef=u,Ne.Fragment=n,Ne.Lazy=p,Ne.Memo=h,Ne.Portal=r,Ne.Profiler=i,Ne.StrictMode=o,Ne.Suspense=d,Ne.isAsyncMode=function(e){return x(e)||y(e)===l},Ne.isConcurrentMode=x,Ne.isContextConsumer=function(e){return y(e)===s},Ne.isContextProvider=function(e){return y(e)===a},Ne.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Ne.isForwardRef=function(e){return y(e)===u},Ne.isFragment=function(e){return y(e)===n},Ne.isLazy=function(e){return y(e)===p},Ne.isMemo=function(e){return y(e)===h},Ne.isPortal=function(e){return y(e)===r},Ne.isProfiler=function(e){return y(e)===i},Ne.isStrictMode=function(e){return y(e)===o},Ne.isSuspense=function(e){return y(e)===d},Ne.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===i||e===o||e===d||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===u||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},Ne.typeOf=y,Ne}():Le.exports=(He||(He=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:var g=e.type;switch(g){case l:case c:case n:case i:case o:case d:return g;default:var m=g&&g.$$typeof;switch(m){case s:case u:case p:case h:case a:return m;default:return f}}case r:return f}}}var x=l,w=c,$=s,C=a,S=t,D=u,k=n,_=p,O=h,E=r,T=i,I=o,F=d,M=!1;function A(e){return y(e)===c}rt.AsyncMode=x,rt.ConcurrentMode=w,rt.ContextConsumer=$,rt.ContextProvider=C,rt.Element=S,rt.ForwardRef=D,rt.Fragment=k,rt.Lazy=_,rt.Memo=O,rt.Portal=E,rt.Profiler=T,rt.StrictMode=I,rt.Suspense=F,rt.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||y(e)===l},rt.isConcurrentMode=A,rt.isContextConsumer=function(e){return y(e)===s},rt.isContextProvider=function(e){return y(e)===a},rt.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},rt.isForwardRef=function(e){return y(e)===u},rt.isFragment=function(e){return y(e)===n},rt.isLazy=function(e){return y(e)===p},rt.isMemo=function(e){return y(e)===h},rt.isPortal=function(e){return y(e)===r},rt.isProfiler=function(e){return y(e)===i},rt.isStrictMode=function(e){return y(e)===o},rt.isSuspense=function(e){return y(e)===d},rt.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===i||e===o||e===d||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===u||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},rt.typeOf=y}()),rt)),Le.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function ot(){if(Ye)return Ve;Ye=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;return Ve=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(n,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))t.call(i,c)&&(s[c]=i[c]);if(e){a=e(i);for(var u=0;u<a.length;u++)r.call(i,a[u])&&(s[a[u]]=i[a[u]])}}return s},Ve}function it(){if(Ke)return Ue;Ke=1;return Ue="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function at(){return Ge?qe:(Ge=1,qe=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var st=nt();Pe.exports=function(){if(Je)return Xe;Je=1;var e=nt(),t=ot(),r=it(),n=at(),o=function(){if(Ze)return Qe;Ze=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=it(),r={},n=at();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function o(o,i,a,s,l){if("production"!==process.env.NODE_ENV)for(var c in o)if(n(o,c)){var u;try{if("function"!=typeof o[c]){var d=Error((s||"React class")+": "+a+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=o[c](i,c,s,a,null,t)}catch(e){u=e}if(!u||u instanceof Error||e((s||"React class")+": type specification of "+a+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in r)){r[u.message]=!0;var f=l?l():"";e("Failed "+a+" type: "+u.message+(null!=f?f:""))}}}return o.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},Qe=o}(),i=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(i=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),Xe=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,u="<<anonymous>>",d={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:p(a),arrayOf:function(e){return p((function(t,n,o,i,a){if("function"!=typeof e)return new h("Property `"+a+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new h("Invalid "+i+" `"+a+"` of type `"+v(s)+"` supplied to `"+o+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,o,i,a+"["+l+"]",r);if(c instanceof Error)return c}return null}))},element:p((function(e,t,r,n,o){var i=e[t];return s(i)?null:new h("Invalid "+n+" `"+o+"` of type `"+v(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:p((function(t,r,n,o,i){var a=t[r];return e.isValidElementType(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,o,i){if(!(t[r]instanceof e)){var a=e.name||u;return new h("Invalid "+o+" `"+i+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:p((function(e,t,r,n,o){return b(e[t])?null:new h("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,o,i,a,s){if("function"!=typeof e)return new h("Property `"+s+"` of component `"+i+"` has invalid PropType notation inside objectOf.");var l=t[o],c=v(l);if("object"!==c)return new h("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+i+"`, expected an object.");for(var u in l)if(n(l,u)){var d=e(l,u,i,a,s+"."+u,r);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,o,i){for(var a=t[r],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&i(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&i("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var o=e[t];if("function"!=typeof o)return i("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(o)+" at index "+t+"."),a}return p((function(t,o,i,a,s){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,o,i,a,s,r);if(null==u)return null;u.data&&n(u.data,"expectedType")&&l.push(u.data.expectedType)}return new h("Invalid "+a+" `"+s+"` supplied to `"+i+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,n,o,i,a){var s=t[n],l=v(s);if("object"!==l)return new h("Invalid "+i+" `"+a+"` of type `"+l+"` supplied to `"+o+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return m(o,i,a,c,y(u));var d=u(s,c,o,i,a+"."+c,r);if(d)return d}return null}))},exact:function(e){return p((function(o,i,a,s,l){var c=o[i],u=v(c);if("object"!==u)return new h("Invalid "+s+" `"+l+"` of type `"+u+"` supplied to `"+a+"`, expected `object`.");var d=t({},o[i],e);for(var f in d){var p=e[f];if(n(e,f)&&"function"!=typeof p)return m(a,s,l,f,y(p));if(!p)return new h("Invalid "+s+" `"+l+"` key `"+f+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(o[i],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=p(c,f,a,s,l+"."+f,r);if(g)return g}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){if("production"!==process.env.NODE_ENV)var t={},n=0;function o(o,a,s,c,d,f,p){if(c=c||u,f=f||s,p!==r){if(l){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=c+":"+s;!t[m]&&n<3&&(i("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,n++)}}return null==a[s]?o?null===a[s]?new h("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new h("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,s,c,d,f)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function g(e){return p((function(t,r,n,o,i,a){var s=t[r];return v(s)!==e?new h("Invalid "+o+" `"+i+"` of type `"+y(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,r,n,o){return new h((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function b(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(b);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(!t)return!1;var r,n=t.call(e);if(t!==e.entries){for(;!(r=n.next()).done;)if(!b(r.value))return!1}else for(;!(r=n.next()).done;){var o=r.value;if(o&&!b(o[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,d.checkPropTypes=o,d.resetWarningCache=o.resetWarningCache,d.PropTypes=d,d},Xe}()(st.isElement,!0)}else Pe.exports=function(){if(tt)return et;tt=1;var e=it();function t(){}function r(){}return r.resetWarningCache=t,et=function(){function n(t,r,n,o,i,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function o(){return n}n.isRequired=n;var i={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:t};return i.PropTypes=i,i}}()();var lt=Re(Pe.exports);function ct(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function ut(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}function dt(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function ft(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function ht(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var pt=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function gt(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=pt.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"==typeof t?t:"string"==typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var mt=[".DS_Store","Thumbs.db"];function bt(e){return"object"==typeof e&&null!==e}function vt(e){return $t(e.target.files).map((function(e){return gt(e)}))}function yt(e){return ut(this,void 0,void 0,(function(){return dt(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return gt(e)}))]}}))}))}function xt(e,t){return ut(this,void 0,void 0,(function(){var r;return dt(this,(function(n){switch(n.label){case 0:return e.items?(r=$t(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map(Ct))]):[3,2];case 1:return[2,wt(St(n.sent()))];case 2:return[2,wt($t(e.files).map((function(e){return gt(e)})))]}}))}))}function wt(e){return e.filter((function(e){return-1===mt.indexOf(e.name)}))}function $t(e){if(null===e)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function Ct(e){if("function"!=typeof e.webkitGetAsEntry)return Dt(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?_t(t):Dt(e)}function St(e){return e.reduce((function(e,t){return ht(ht([],ft(e),!1),ft(Array.isArray(t)?St(t):[t]),!1)}),[])}function Dt(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=gt(t);return Promise.resolve(r)}function kt(e){return ut(this,void 0,void 0,(function(){return dt(this,(function(t){return[2,e.isDirectory?_t(e):Ot(e)]}))}))}function _t(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function o(){var i=this;t.readEntries((function(t){return ut(i,void 0,void 0,(function(){var i,a,s;return dt(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return i=l.sent(),e(i),[3,4];case 3:return a=l.sent(),r(a),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(kt)),n.push(s),o(),l.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function Ot(e){return ut(this,void 0,void 0,(function(){return dt(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=gt(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}function Et(e){return function(e){if(Array.isArray(e))return jt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||At(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Tt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function It(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Tt(Object(r),!0).forEach((function(t){Ft(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Tt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ft(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Mt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}(e,t)||At(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function At(e,t){if(e){if("string"==typeof e)return jt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?jt(e,t):void 0}}function jt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Rt=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},zt=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},Bt=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},Pt={code:"too-many-files",message:"Too many files"};function Lt(e,t){var r="application/x-moz-file"===e.type||function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}(e,t);return[r,r?null:Rt(t)]}function Nt(e,t,r){if(Ht(e.size))if(Ht(t)&&Ht(r)){if(e.size>r)return[!1,zt(r)];if(e.size<t)return[!1,Bt(t)]}else{if(Ht(t)&&e.size<t)return[!1,Bt(t)];if(Ht(r)&&e.size>r)return[!1,zt(r)]}return[!0,null]}function Ht(e){return null!=e}function Wt(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function Vt(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function Yt(e){e.preventDefault()}function Ut(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return t.some((function(t){return!Wt(e)&&t&&t.apply(void 0,[e].concat(n)),Wt(e)}))}}function Kt(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function qt(e){return/^.*\.[\w]+$/.test(e)}var Gt=["children"],Qt=["open"],Zt=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Xt=["refKey","onChange","onClick"];function Jt(e){return function(e){if(Array.isArray(e))return rr(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||tr(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function er(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}(e,t)||tr(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function tr(e,t){if(e){if("string"==typeof e)return rr(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?rr(e,t):void 0}}function rr(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function nr(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function or(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?nr(Object(r),!0).forEach((function(t){ir(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):nr(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ir(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ar(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var sr=d((function(e,t){var r=e.children,n=ur(ar(e,Gt)),i=n.open,a=ar(n,Qt);return f(t,(function(){return{open:i}}),[i]),o.createElement(h,null,r(or(or({},a),{},{open:i})))}));sr.displayName="Dropzone";var lr={disabled:!1,getFilesFromEvent:function(e){return ut(this,void 0,void 0,(function(){return dt(this,(function(t){return bt(e)&&bt(e.dataTransfer)?[2,xt(e.dataTransfer,e.type)]:function(e){return bt(e)&&bt(e.target)}(e)?[2,vt(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,yt(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};sr.defaultProps=lr,sr.propTypes={children:lt.func,accept:lt.objectOf(lt.arrayOf(lt.string)),multiple:lt.bool,preventDropOnDocument:lt.bool,noClick:lt.bool,noKeyboard:lt.bool,noDrag:lt.bool,noDragEventsBubbling:lt.bool,minSize:lt.number,maxSize:lt.number,maxFiles:lt.number,disabled:lt.bool,getFilesFromEvent:lt.func,onFileDialogCancel:lt.func,onFileDialogOpen:lt.func,useFsAccessApi:lt.bool,autoFocus:lt.bool,onDragEnter:lt.func,onDragLeave:lt.func,onDragOver:lt.func,onDrop:lt.func,onDropAccepted:lt.func,onDropRejected:lt.func,onError:lt.func,validator:lt.func};var cr={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function ur(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=or(or({},lr),e),r=t.accept,n=t.disabled,o=t.getFilesFromEvent,i=t.maxSize,d=t.minSize,f=t.multiple,h=t.maxFiles,p=t.onDragEnter,g=t.onDragLeave,m=t.onDragOver,b=t.onDrop,v=t.onDropAccepted,y=t.onDropRejected,x=t.onFileDialogCancel,w=t.onFileDialogOpen,$=t.useFsAccessApi,C=t.autoFocus,S=t.preventDropOnDocument,D=t.noClick,k=t.noKeyboard,_=t.noDrag,O=t.noDragEventsBubbling,E=t.onError,T=t.validator,I=a((function(){return function(e){if(Ht(e))return Object.entries(e).reduce((function(e,t){var r=Mt(t,2),n=r[0],o=r[1];return[].concat(Et(e),[n],Et(o))}),[]).filter((function(e){return Kt(e)||qt(e)})).join(",")}(r)}),[r]),F=a((function(){return function(e){return Ht(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=Mt(e,2),r=t[0],n=t[1],o=!0;return Kt(r)||(console.warn('Skipped "'.concat(r,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(n)&&n.every(qt)||(console.warn('Skipped "'.concat(r,'" because an invalid file extension was provided.')),o=!1),o})).reduce((function(e,t){var r=Mt(t,2),n=r[0],o=r[1];return It(It({},e),{},Ft({},n,o))}),{})}]:e}(r)}),[r]),M=a((function(){return"function"==typeof w?w:fr}),[w]),A=a((function(){return"function"==typeof x?x:fr}),[x]),j=s(null),R=s(null),z=er(l(dr,cr),2),B=z[0],P=z[1],L=B.isFocused,N=B.isFileDialogActive,H=s("undefined"!=typeof window&&window.isSecureContext&&$&&"showOpenFilePicker"in window),W=function(){!H.current&&N&&setTimeout((function(){R.current&&(R.current.files.length||(P({type:"closeDialog"}),A()))}),300)};c((function(){return window.addEventListener("focus",W,!1),function(){window.removeEventListener("focus",W,!1)}}),[R,N,A,H]);var V=s([]),Y=function(e){j.current&&j.current.contains(e.target)||(e.preventDefault(),V.current=[])};c((function(){return S&&(document.addEventListener("dragover",Yt,!1),document.addEventListener("drop",Y,!1)),function(){S&&(document.removeEventListener("dragover",Yt),document.removeEventListener("drop",Y))}}),[j,S]),c((function(){return!n&&C&&j.current&&j.current.focus(),function(){}}),[j,C,n]);var U=u((function(e){E?E(e):console.error(e)}),[E]),K=u((function(e){e.preventDefault(),e.persist(),ae(e),V.current=[].concat(Jt(V.current),[e.target]),Vt(e)&&Promise.resolve(o(e)).then((function(t){if(!Wt(e)||O){var r=t.length,n=r>0&&function(e){var t=e.files,r=e.accept,n=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,s=e.validator;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=Mt(Lt(e,r),1)[0],i=Mt(Nt(e,n,o),1)[0],a=s?s(e):null;return t&&i&&!a}))}({files:t,accept:I,minSize:d,maxSize:i,multiple:f,maxFiles:h,validator:T});P({isDragAccept:n,isDragReject:r>0&&!n,isDragActive:!0,type:"setDraggedFiles"}),p&&p(e)}})).catch((function(e){return U(e)}))}),[o,p,U,O,I,d,i,f,h,T]),q=u((function(e){e.preventDefault(),e.persist(),ae(e);var t=Vt(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&m&&m(e),!1}),[m,O]),G=u((function(e){e.preventDefault(),e.persist(),ae(e);var t=V.current.filter((function(e){return j.current&&j.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),V.current=t,t.length>0||(P({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Vt(e)&&g&&g(e))}),[j,g,O]),Q=u((function(e,t){var r=[],n=[];e.forEach((function(e){var t=er(Lt(e,I),2),o=t[0],a=t[1],s=er(Nt(e,d,i),2),l=s[0],c=s[1],u=T?T(e):null;if(o&&l&&!u)r.push(e);else{var f=[a,c];u&&(f=f.concat(u)),n.push({file:e,errors:f.filter((function(e){return e}))})}})),(!f&&r.length>1||f&&h>=1&&r.length>h)&&(r.forEach((function(e){n.push({file:e,errors:[Pt]})})),r.splice(0)),P({acceptedFiles:r,fileRejections:n,type:"setFiles"}),b&&b(r,n,t),n.length>0&&y&&y(n,t),r.length>0&&v&&v(r,t)}),[P,f,I,d,i,h,b,v,y,T]),Z=u((function(e){e.preventDefault(),e.persist(),ae(e),V.current=[],Vt(e)&&Promise.resolve(o(e)).then((function(t){Wt(e)&&!O||Q(t,e)})).catch((function(e){return U(e)})),P({type:"reset"})}),[o,Q,U,O]),X=u((function(){if(H.current){P({type:"openDialog"}),M();var e={multiple:f,types:F};window.showOpenFilePicker(e).then((function(e){return o(e)})).then((function(e){Q(e,null),P({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(A(e),P({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?U(e):(H.current=!1,R.current?(R.current.value=null,R.current.click()):U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else R.current&&(P({type:"openDialog"}),M(),R.current.value=null,R.current.click())}),[P,M,A,$,Q,U,F,f]),J=u((function(e){j.current&&j.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),X()))}),[j,X]),ee=u((function(){P({type:"focus"})}),[]),te=u((function(){P({type:"blur"})}),[]),re=u((function(){D||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?X():setTimeout(X,0))}),[D,X]),ne=function(e){return n?null:e},oe=function(e){return k?null:ne(e)},ie=function(e){return _?null:ne(e)},ae=function(e){O&&e.stopPropagation()},se=a((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,o=e.role,i=e.onKeyDown,a=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,u=e.onDragOver,d=e.onDragLeave,f=e.onDrop,h=ar(e,Zt);return or(or(ir({onKeyDown:oe(Ut(i,J)),onFocus:oe(Ut(a,ee)),onBlur:oe(Ut(s,te)),onClick:ne(Ut(l,re)),onDragEnter:ie(Ut(c,K)),onDragOver:ie(Ut(u,q)),onDragLeave:ie(Ut(d,G)),onDrop:ie(Ut(f,Z)),role:"string"==typeof o&&""!==o?o:"presentation"},r,j),n||k?{}:{tabIndex:0}),h)}}),[j,J,ee,te,re,K,q,G,Z,k,_,n]),le=u((function(e){e.stopPropagation()}),[]),ce=a((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onChange,o=e.onClick,i=ar(e,Xt);return or(or({},ir({accept:I,multiple:f,type:"file",style:{display:"none"},onChange:ne(Ut(n,Z)),onClick:ne(Ut(o,le)),tabIndex:-1},r,R)),i)}}),[R,r,f,Z,n]);return or(or({},B),{},{isFocused:L&&!n,getRootProps:se,getInputProps:ce,rootRef:j,inputRef:R,open:ne(X)})}function dr(e,t){switch(t.type){case"focus":return or(or({},e),{},{isFocused:!0});case"blur":return or(or({},e),{},{isFocused:!1});case"openDialog":return or(or({},cr),{},{isFileDialogActive:!0});case"closeDialog":return or(or({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return or(or({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return or(or({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return or({},cr);default:return e}}function fr(){}var hr=Array.isArray,pr="object"==typeof je&&je&&je.Object===Object&&je,gr=pr,mr="object"==typeof self&&self&&self.Object===Object&&self,br=gr||mr||Function("return this")(),vr=br.Symbol,yr=vr,xr=Object.prototype,wr=xr.hasOwnProperty,$r=xr.toString,Cr=yr?yr.toStringTag:void 0;var Sr=function(e){var t=wr.call(e,Cr),r=e[Cr];try{e[Cr]=void 0;var n=!0}catch(e){}var o=$r.call(e);return n&&(t?e[Cr]=r:delete e[Cr]),o},Dr=Object.prototype.toString;var kr=Sr,_r=function(e){return Dr.call(e)},Or=vr?vr.toStringTag:void 0;var Er=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Or&&Or in Object(e)?kr(e):_r(e)};var Tr=function(e){return null!=e&&"object"==typeof e},Ir=Er,Fr=Tr;var Mr=function(e){return"symbol"==typeof e||Fr(e)&&"[object Symbol]"==Ir(e)},Ar=hr,jr=Mr,Rr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zr=/^\w*$/;var Br=function(e,t){if(Ar(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!jr(e))||(zr.test(e)||!Rr.test(e)||null!=t&&e in Object(t))};var Pr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Lr=Er,Nr=Pr;var Hr,Wr=function(e){if(!Nr(e))return!1;var t=Lr(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Vr=br["__core-js_shared__"],Yr=(Hr=/[^.]+$/.exec(Vr&&Vr.keys&&Vr.keys.IE_PROTO||""))?"Symbol(src)_1."+Hr:"";var Ur=function(e){return!!Yr&&Yr in e},Kr=Function.prototype.toString;var qr=function(e){if(null!=e){try{return Kr.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Gr=Wr,Qr=Ur,Zr=Pr,Xr=qr,Jr=/^\[object .+?Constructor\]$/,en=Function.prototype,tn=Object.prototype,rn=en.toString,nn=tn.hasOwnProperty,on=RegExp("^"+rn.call(nn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var an=function(e,t){return null==e?void 0:e[t]},sn=function(e){return!(!Zr(e)||Qr(e))&&(Gr(e)?on:Jr).test(Xr(e))},ln=an;var cn=function(e,t){var r=ln(e,t);return sn(r)?r:void 0},un=cn(Object,"create"),dn=un;var fn=function(){this.__data__=dn?dn(null):{},this.size=0};var hn=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},pn=un,gn=Object.prototype.hasOwnProperty;var mn=function(e){var t=this.__data__;if(pn){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return gn.call(t,e)?t[e]:void 0},bn=un,vn=Object.prototype.hasOwnProperty;var yn=function(e){var t=this.__data__;return bn?void 0!==t[e]:vn.call(t,e)},xn=un;var wn=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=xn&&void 0===t?"__lodash_hash_undefined__":t,this},$n=fn,Cn=hn,Sn=mn,Dn=yn,kn=wn;function _n(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}_n.prototype.clear=$n,_n.prototype.delete=Cn,_n.prototype.get=Sn,_n.prototype.has=Dn,_n.prototype.set=kn;var On=_n;var En=function(){this.__data__=[],this.size=0};var Tn=function(e,t){return e===t||e!=e&&t!=t},In=Tn;var Fn=function(e,t){for(var r=e.length;r--;)if(In(e[r][0],t))return r;return-1},Mn=Fn,An=Array.prototype.splice;var jn=function(e){var t=this.__data__,r=Mn(t,e);return!(r<0)&&(r==t.length-1?t.pop():An.call(t,r,1),--this.size,!0)},Rn=Fn;var zn=function(e){var t=this.__data__,r=Rn(t,e);return r<0?void 0:t[r][1]},Bn=Fn;var Pn=function(e){return Bn(this.__data__,e)>-1},Ln=Fn;var Nn=function(e,t){var r=this.__data__,n=Ln(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Hn=En,Wn=jn,Vn=zn,Yn=Pn,Un=Nn;function Kn(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Kn.prototype.clear=Hn,Kn.prototype.delete=Wn,Kn.prototype.get=Vn,Kn.prototype.has=Yn,Kn.prototype.set=Un;var qn=Kn,Gn=cn(br,"Map"),Qn=On,Zn=qn,Xn=Gn;var Jn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var eo=function(e,t){var r=e.__data__;return Jn(t)?r["string"==typeof t?"string":"hash"]:r.map},to=eo;var ro=function(e){var t=to(this,e).delete(e);return this.size-=t?1:0,t},no=eo;var oo=function(e){return no(this,e).get(e)},io=eo;var ao=function(e){return io(this,e).has(e)},so=eo;var lo=function(e,t){var r=so(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},co=function(){this.size=0,this.__data__={hash:new Qn,map:new(Xn||Zn),string:new Qn}},uo=ro,fo=oo,ho=ao,po=lo;function go(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}go.prototype.clear=co,go.prototype.delete=uo,go.prototype.get=fo,go.prototype.has=ho,go.prototype.set=po;var mo=go,bo=mo;function vo(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(vo.Cache||bo),r}vo.Cache=bo;var yo=vo;var xo=function(e){var t=yo(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},wo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$o=/\\(\\)?/g,Co=xo((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(wo,(function(e,r,n,o){t.push(n?o.replace($o,"$1"):r||e)})),t}));var So=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},Do=hr,ko=Mr,_o=vr?vr.prototype:void 0,Oo=_o?_o.toString:void 0;var Eo=function e(t){if("string"==typeof t)return t;if(Do(t))return So(t,e)+"";if(ko(t))return Oo?Oo.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},To=Eo;var Io=hr,Fo=Br,Mo=Co,Ao=function(e){return null==e?"":To(e)};var jo=function(e,t){return Io(e)?e:Fo(e,t)?[e]:Mo(Ao(e))},Ro=Mr;var zo=function(e){if("string"==typeof e||Ro(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Bo=jo,Po=zo;var Lo=function(e,t){for(var r=0,n=(t=Bo(t,e)).length;null!=e&&r<n;)e=e[Po(t[r++])];return r&&r==n?e:void 0},No=Lo;var Ho=function(e,t,r){var n=null==e?void 0:No(e,t);return void 0===n?r:n},Wo=Re(Ho);const Vo=(e,t,r)=>Wo(r,t)||Wo(e,t),Yo=(e,t)=>{const r=t||e.defaultValue;return Wo(e.collections,r)},Uo={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Ko=e=>t=>{var r;const n=t.theme,o=Yo(Uo,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Vo(o,e,n.overrides.border)}px`:`${o[e]}px`},qo={"width-005":Ko("width-005"),"width-010":Ko("width-010"),"width-020":Ko("width-020"),"width-040":Ko("width-040"),solid:(Go="solid",e=>{var t;const r=e.theme,n=Yo(Uo,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Vo(n,Go,r.overrides.border):n[Go];return"function"==typeof o?o(e):o})};var Go;const Qo={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Zo=e=>t=>{var r;const n=t.theme,o=Yo(Qo,null==n?void 0:n.colourScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.primitiveColour)?Vo(o,e,n.overrides.primitiveColour):o[e]},Xo={"brand-10":Zo("brand-10"),"brand-20":Zo("brand-20"),"brand-30":Zo("brand-30"),"brand-40":Zo("brand-40"),"brand-50":Zo("brand-50"),"brand-60":Zo("brand-60"),"brand-70":Zo("brand-70"),"brand-80":Zo("brand-80"),"brand-90":Zo("brand-90"),"brand-95":Zo("brand-95"),"brand-100":Zo("brand-100"),"primary-10":Zo("primary-10"),"primary-20":Zo("primary-20"),"primary-30":Zo("primary-30"),"primary-40":Zo("primary-40"),"primary-50":Zo("primary-50"),"primary-60":Zo("primary-60"),"primary-70":Zo("primary-70"),"primary-80":Zo("primary-80"),"primary-90":Zo("primary-90"),"primary-95":Zo("primary-95"),"primary-100":Zo("primary-100"),"secondary-10":Zo("secondary-10"),"secondary-20":Zo("secondary-20"),"secondary-30":Zo("secondary-30"),"secondary-40":Zo("secondary-40"),"secondary-50":Zo("secondary-50"),"secondary-60":Zo("secondary-60"),"secondary-70":Zo("secondary-70"),"secondary-80":Zo("secondary-80"),"secondary-90":Zo("secondary-90"),"secondary-95":Zo("secondary-95"),"secondary-100":Zo("secondary-100"),"neutral-10":Zo("neutral-10"),"neutral-20":Zo("neutral-20"),"neutral-30":Zo("neutral-30"),"neutral-40":Zo("neutral-40"),"neutral-50":Zo("neutral-50"),"neutral-60":Zo("neutral-60"),"neutral-70":Zo("neutral-70"),"neutral-80":Zo("neutral-80"),"neutral-90":Zo("neutral-90"),"neutral-95":Zo("neutral-95"),"neutral-100":Zo("neutral-100"),"success-10":Zo("success-10"),"success-20":Zo("success-20"),"success-30":Zo("success-30"),"success-40":Zo("success-40"),"success-50":Zo("success-50"),"success-60":Zo("success-60"),"success-70":Zo("success-70"),"success-80":Zo("success-80"),"success-90":Zo("success-90"),"success-95":Zo("success-95"),"success-100":Zo("success-100"),"warning-10":Zo("warning-10"),"warning-20":Zo("warning-20"),"warning-30":Zo("warning-30"),"warning-40":Zo("warning-40"),"warning-50":Zo("warning-50"),"warning-60":Zo("warning-60"),"warning-70":Zo("warning-70"),"warning-80":Zo("warning-80"),"warning-90":Zo("warning-90"),"warning-95":Zo("warning-95"),"warning-100":Zo("warning-100"),"error-10":Zo("error-10"),"error-20":Zo("error-20"),"error-30":Zo("error-30"),"error-40":Zo("error-40"),"error-50":Zo("error-50"),"error-60":Zo("error-60"),"error-70":Zo("error-70"),"error-80":Zo("error-80"),"error-90":Zo("error-90"),"error-95":Zo("error-95"),"error-100":Zo("error-100"),"info-10":Zo("info-10"),"info-20":Zo("info-20"),"info-30":Zo("info-30"),"info-40":Zo("info-40"),"info-50":Zo("info-50"),"info-60":Zo("info-60"),"info-70":Zo("info-70"),"info-80":Zo("info-80"),"info-90":Zo("info-90"),"info-95":Zo("info-95"),"info-100":Zo("info-100"),white:Zo("white"),black:Zo("black"),"primary-inverse":Zo("primary-inverse")},Jo={text:Zo("neutral-20"),"text-subtle":Zo("neutral-30"),"text-subtler":Zo("neutral-50"),"text-subtlest":Zo("neutral-60"),"text-primary":Zo("primary-50"),"text-hover":Zo("primary-40"),"text-selected":Zo("primary-50"),"text-selected-hover":Zo("primary-40"),"text-disabled":Zo("neutral-50"),"text-disabled-subtle":Zo("neutral-60"),"text-disabled-subtlest":Zo("neutral-80"),"text-selected-disabled":Zo("neutral-20"),"text-success":Zo("success-40"),"text-warning":Zo("warning-40"),"text-error":Zo("error-40"),"text-info":Zo("info-40"),"text-inverse":Zo("white"),icon:Zo("neutral-50"),"icon-subtle":Zo("neutral-60"),"icon-strongest":Zo("neutral-20"),"icon-primary":Zo("primary-50"),"icon-primary-subtle":Zo("primary-60"),"icon-primary-subtlest":Zo("primary-70"),"icon-hover":Zo("primary-40"),"icon-selected":Zo("primary-50"),"icon-selected-hover":Zo("primary-40"),"icon-disabled":Zo("neutral-50"),"icon-disabled-subtle":Zo("neutral-60"),"icon-selected-disabled":Zo("neutral-60"),"icon-success":Zo("success-50"),"icon-warning":Zo("warning-60"),"icon-error":Zo("error-50"),"icon-error-strong":Zo("error-40"),"icon-info":Zo("info-50"),"icon-inverse":Zo("white"),"icon-primary-inverse":Zo("primary-inverse"),border:Zo("neutral-90"),"border-strong":Zo("neutral-70"),"border-stronger":Zo("neutral-50"),"border-primary":Zo("primary-50"),"border-primary-subtle":Zo("primary-60"),"border-hover":Zo("primary-90"),"border-hover-strong":Zo("primary-60"),"border-selected":Zo("primary-50"),"border-selected-subtle":Zo("primary-70"),"border-selected-subtlest":Zo("primary-90"),"border-selected-hover":Zo("primary-40"),"border-focus":Zo("primary-60"),"border-focus-strong":Zo("primary-50"),"border-disabled":Zo("neutral-90"),"border-selected-disabled":Zo("neutral-70"),"border-success":Zo("success-60"),"border-warning":Zo("warning-60"),"border-error":Zo("error-60"),"border-error-focus":Zo("error-60"),"border-error-focus-strong":Zo("error-40"),"border-error-strong":Zo("error-40"),"border-info":Zo("info-60"),bg:Zo("white"),"bg-strong":Zo("neutral-100"),"bg-stronger":Zo("neutral-95"),"bg-strongest":Zo("neutral-90"),"bg-hover":Zo("primary-95"),"bg-hover-strong":Zo("primary-90"),"bg-hover-subtle":Zo("primary-100"),"bg-hover-neutral":Zo("neutral-100"),"bg-hover-neutral-strong":Zo("neutral-90"),"bg-selected":Zo("primary-95"),"bg-selected-hover":Zo("primary-90"),"bg-selected-strong":Zo("primary-90"),"bg-selected-stronger":Zo("primary-70"),"bg-selected-strongest":Zo("primary-50"),"bg-selected-strongest-hover":Zo("primary-40"),"bg-disabled":Zo("neutral-95"),"bg-selected-disabled":Zo("neutral-95"),"bg-selected-stronger-disabled":Zo("neutral-70"),"bg-success":Zo("success-100"),"bg-success-hover":Zo("success-95"),"bg-success-strong":Zo("success-50"),"bg-success-strong-hover":Zo("success-40"),"bg-warning":Zo("warning-100"),"bg-warning-hover":Zo("warning-95"),"bg-warning-strong":Zo("warning-50"),"bg-warning-strong-hover":Zo("warning-40"),"bg-info":Zo("info-100"),"bg-info-hover":Zo("info-95"),"bg-info-strong":Zo("info-50"),"bg-info-strong-hover":Zo("info-40"),"bg-error":Zo("error-100"),"bg-error-hover":Zo("error-95"),"bg-error-strong":Zo("error-50"),"bg-error-strong-hover":Zo("error-40"),"bg-inverse":Zo("neutral-20"),"bg-inverse-subtle":Zo("neutral-30"),"bg-inverse-subtler":Zo("neutral-50"),"bg-inverse-subtlest":Zo("neutral-60"),"bg-inverse-hover":Zo("neutral-40"),"bg-primary":Zo("primary-50"),"bg-primary-subtle":Zo("primary-60"),"bg-primary-subtler":Zo("primary-95"),"bg-primary-subtlest":Zo("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Zo("primary-40"),"bg-primary-subtlest-hover":Zo("primary-90"),"bg-primary-subtlest-selected":Zo("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Zo("primary-50"),"hyperlink-hover":Zo("primary-40"),"hyperlink-visited":Zo("primary-40"),"hyperlink-inverse":Zo("primary-inverse"),"focus-ring":Zo("black"),"focus-ring-inverse":Zo("white")},ei={collections:{lifesg:Jo,bookingsg:Jo,rbs:Jo,mylegacy:Jo,ccube:Jo,oneservice:Jo,pa:{text:Zo("neutral-30"),"text-subtle":Zo("neutral-40"),"text-subtler":Zo("neutral-50"),"text-subtlest":Zo("neutral-70"),"text-primary":Zo("neutral-10"),"text-hover":Zo("neutral-70"),"text-selected":Zo("neutral-20"),"text-selected-hover":Zo("neutral-10"),"text-disabled":Zo("neutral-50"),"text-disabled-subtle":Zo("neutral-60"),"text-disabled-subtlest":Zo("neutral-80"),"text-selected-disabled":Zo("neutral-40"),"text-success":Zo("success-40"),"text-warning":Zo("warning-40"),"text-error":Zo("brand-30"),"text-info":Zo("neutral-40"),"text-inverse":Zo("neutral-100"),icon:Zo("neutral-40"),"icon-subtle":Zo("neutral-50"),"icon-strongest":Zo("neutral-10"),"icon-primary":Zo("neutral-10"),"icon-primary-subtle":Zo("neutral-30"),"icon-primary-subtlest":Zo("neutral-60"),"icon-hover":Zo("neutral-70"),"icon-selected":Zo("brand-20"),"icon-selected-hover":Zo("brand-10"),"icon-disabled":Zo("neutral-50"),"icon-disabled-subtle":Zo("neutral-60"),"icon-selected-disabled":Zo("neutral-40"),"icon-success":Zo("success-40"),"icon-warning":Zo("warning-60"),"icon-error":Zo("brand-30"),"icon-error-strong":Zo("brand-10"),"icon-info":Zo("neutral-40"),"icon-inverse":Zo("neutral-100"),"icon-primary-inverse":"#F9B371",border:Zo("neutral-90"),"border-strong":Zo("neutral-30"),"border-stronger":Zo("neutral-20"),"border-primary":Zo("neutral-40"),"border-primary-subtle":Zo("neutral-60"),"border-hover":Zo("neutral-80"),"border-hover-strong":Zo("neutral-10"),"border-selected":Zo("brand-20"),"border-selected-subtle":Zo("neutral-40"),"border-selected-subtlest":Zo("neutral-70"),"border-selected-hover":Zo("neutral-10"),"border-focus":Zo("neutral-20"),"border-focus-strong":Zo("neutral-10"),"border-disabled":Zo("neutral-90"),"border-selected-disabled":Zo("neutral-80"),"border-success":Zo("success-40"),"border-warning":Zo("warning-60"),"border-error":Zo("brand-30"),"border-error-focus":Zo("brand-20"),"border-error-focus-strong":Zo("brand-10"),"border-error-strong":Zo("brand-20"),"border-info":Zo("neutral-40"),bg:Zo("neutral-100"),"bg-strong":Zo("neutral-95"),"bg-stronger":Zo("neutral-90"),"bg-strongest":Zo("neutral-80"),"bg-hover":Zo("brand-90"),"bg-hover-strong":Zo("brand-80"),"bg-hover-subtle":Zo("neutral-90"),"bg-hover-neutral":Zo("neutral-90"),"bg-hover-neutral-strong":Zo("neutral-90"),"bg-selected":Zo("brand-100"),"bg-selected-hover":Zo("brand-30"),"bg-selected-strong":Zo("brand-50"),"bg-selected-stronger":Zo("brand-40"),"bg-selected-strongest":Zo("brand-20"),"bg-selected-strongest-hover":Zo("brand-10"),"bg-disabled":Zo("neutral-90"),"bg-selected-disabled":Zo("neutral-90"),"bg-selected-stronger-disabled":Zo("neutral-80"),"bg-success":Zo("success-100"),"bg-success-hover":Zo("success-95"),"bg-success-strong":Zo("success-50"),"bg-success-strong-hover":Zo("success-40"),"bg-warning":Zo("warning-100"),"bg-warning-hover":Zo("warning-95"),"bg-warning-strong":Zo("warning-50"),"bg-warning-strong-hover":Zo("warning-40"),"bg-info":Zo("neutral-95"),"bg-info-hover":Zo("info-95"),"bg-info-strong":Zo("info-50"),"bg-info-strong-hover":Zo("info-40"),"bg-error":Zo("brand-100"),"bg-error-hover":Zo("error-95"),"bg-error-strong":Zo("error-50"),"bg-error-strong-hover":Zo("error-40"),"bg-inverse":Zo("neutral-40"),"bg-inverse-subtle":Zo("neutral-60"),"bg-inverse-subtler":Zo("neutral-70"),"bg-inverse-subtlest":Zo("neutral-80"),"bg-inverse-hover":Zo("neutral-30"),"bg-primary":Zo("brand-20"),"bg-primary-subtle":Zo("brand-60"),"bg-primary-subtler":Zo("brand-80"),"bg-primary-subtlest":Zo("brand-100"),"bg-available":Zo("success-60"),"bg-primary-hover":Zo("brand-10"),"bg-primary-subtlest-hover":Zo("brand-80"),"bg-primary-subtlest-selected":Zo("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Zo("neutral-10"),"hyperlink-hover":Zo("neutral-40"),"hyperlink-visited":Zo("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Zo("black"),"focus-ring-inverse":Zo("white")}},defaultValue:"lifesg"},ti=e=>t=>{var r;const n=t.theme,o=Yo(ei,null==n?void 0:n.colourScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.semanticColour)?Vo(o,e,n.overrides.semanticColour):o[e];return"function"==typeof i?i(t):i},ri={text:ti("text"),"text-subtle":ti("text-subtle"),"text-subtler":ti("text-subtler"),"text-subtlest":ti("text-subtlest"),"text-primary":ti("text-primary"),"text-hover":ti("text-hover"),"text-selected":ti("text-selected"),"text-selected-hover":ti("text-selected-hover"),"text-disabled":ti("text-disabled"),"text-disabled-subtle":ti("text-disabled-subtle"),"text-disabled-subtlest":ti("text-disabled-subtlest"),"text-selected-disabled":ti("text-selected-disabled"),"text-success":ti("text-success"),"text-warning":ti("text-warning"),"text-error":ti("text-error"),"text-info":ti("text-info"),"text-inverse":ti("text-inverse"),icon:ti("icon"),"icon-subtle":ti("icon-subtle"),"icon-strongest":ti("icon-strongest"),"icon-primary":ti("icon-primary"),"icon-primary-subtle":ti("icon-primary-subtle"),"icon-primary-subtlest":ti("icon-primary-subtlest"),"icon-hover":ti("icon-hover"),"icon-selected":ti("icon-selected"),"icon-selected-hover":ti("icon-selected-hover"),"icon-disabled":ti("icon-disabled"),"icon-disabled-subtle":ti("icon-disabled-subtle"),"icon-selected-disabled":ti("icon-selected-disabled"),"icon-success":ti("icon-success"),"icon-warning":ti("icon-warning"),"icon-error":ti("icon-error"),"icon-error-strong":ti("icon-error-strong"),"icon-info":ti("icon-info"),"icon-inverse":ti("icon-inverse"),"icon-primary-inverse":ti("icon-primary-inverse"),border:ti("border"),"border-strong":ti("border-strong"),"border-stronger":ti("border-stronger"),"border-primary":ti("border-primary"),"border-primary-subtle":ti("border-primary-subtle"),"border-hover":ti("border-hover"),"border-hover-strong":ti("border-hover-strong"),"border-selected":ti("border-selected"),"border-selected-subtle":ti("border-selected-subtle"),"border-selected-subtlest":ti("border-selected-subtlest"),"border-selected-hover":ti("border-selected-hover"),"border-focus":ti("border-focus"),"border-focus-strong":ti("border-focus-strong"),"border-disabled":ti("border-disabled"),"border-selected-disabled":ti("border-selected-disabled"),"border-success":ti("border-success"),"border-warning":ti("border-warning"),"border-error":ti("border-error"),"border-error-focus":ti("border-error-focus"),"border-error-focus-strong":ti("border-error-focus-strong"),"border-error-strong":ti("border-error-strong"),"border-info":ti("border-info"),bg:ti("bg"),"bg-strong":ti("bg-strong"),"bg-stronger":ti("bg-stronger"),"bg-strongest":ti("bg-strongest"),"bg-hover":ti("bg-hover"),"bg-hover-strong":ti("bg-hover-strong"),"bg-hover-subtle":ti("bg-hover-subtle"),"bg-hover-neutral":ti("bg-hover-neutral"),"bg-hover-neutral-strong":ti("bg-hover-neutral-strong"),"bg-selected":ti("bg-selected"),"bg-selected-hover":ti("bg-selected-hover"),"bg-selected-strong":ti("bg-selected-strong"),"bg-selected-stronger":ti("bg-selected-stronger"),"bg-selected-strongest":ti("bg-selected-strongest"),"bg-selected-strongest-hover":ti("bg-selected-strongest-hover"),"bg-disabled":ti("bg-disabled"),"bg-selected-disabled":ti("bg-selected-disabled"),"bg-selected-stronger-disabled":ti("bg-selected-stronger-disabled"),"bg-success":ti("bg-success"),"bg-success-hover":ti("bg-success-hover"),"bg-success-strong":ti("bg-success-strong"),"bg-success-strong-hover":ti("bg-success-strong-hover"),"bg-warning":ti("bg-warning"),"bg-warning-hover":ti("bg-warning-hover"),"bg-warning-strong":ti("bg-warning-strong"),"bg-warning-strong-hover":ti("bg-warning-strong-hover"),"bg-info":ti("bg-info"),"bg-info-hover":ti("bg-info-hover"),"bg-info-strong":ti("bg-info-strong"),"bg-info-strong-hover":ti("bg-info-strong-hover"),"bg-error":ti("bg-error"),"bg-error-hover":ti("bg-error-hover"),"bg-error-strong":ti("bg-error-strong"),"bg-error-strong-hover":ti("bg-error-strong-hover"),"bg-inverse":ti("bg-inverse"),"bg-inverse-subtle":ti("bg-inverse-subtle"),"bg-inverse-subtler":ti("bg-inverse-subtler"),"bg-inverse-subtlest":ti("bg-inverse-subtlest"),"bg-inverse-hover":ti("bg-inverse-hover"),"bg-primary":ti("bg-primary"),"bg-primary-subtle":ti("bg-primary-subtle"),"bg-primary-subtler":ti("bg-primary-subtler"),"bg-primary-subtlest":ti("bg-primary-subtlest"),"bg-available":ti("bg-available"),"bg-primary-hover":ti("bg-primary-hover"),"bg-primary-subtlest-hover":ti("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":ti("bg-primary-subtlest-selected"),"overlay-strong":ti("overlay-strong"),"overlay-subtle":ti("overlay-subtle"),hyperlink:ti("hyperlink"),"hyperlink-hover":ti("hyperlink-hover"),"hyperlink-visited":ti("hyperlink-visited"),"hyperlink-inverse":ti("hyperlink-inverse"),"focus-ring":ti("focus-ring"),"focus-ring-inverse":ti("focus-ring-inverse")},ni={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:qo["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,u=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:ri.border(t),d=qo.solid;return O`
            border: ${l} ${d} ${u};
            border-radius: ${c};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:qo["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,u=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:ri.border(t),d=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${u}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return O`
            background-image: url("data:image/svg+xml,${d}");
            border-radius: ${c};
        `}}},defaultValue:"default"},oi=e=>1===e.length&&"theme"in e[0],ii=e=>(...t)=>r=>{const n=oi(t)?[]:t,o=oi(t)?t[0]:r,i=o.theme;return(0,Yo(ni,null==i?void 0:i.borderScheme)[e])(...n)(o)},ai={solid:ii("solid"),"dashed-default":ii("dashed-default")},si={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},li=e=>t=>{var r;const n=t.theme,o=Yo(si,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Vo(o,e,n.overrides.breakpoint):o[e],i},ci={"xxs-min":li("xxs-min"),"xxs-max":li("xxs-max"),"xs-min":li("xs-min"),"xs-max":li("xs-max"),"sm-min":li("sm-min"),"sm-max":li("sm-max"),"md-min":li("md-min"),"md-max":li("md-max"),"lg-min":li("lg-min"),"lg-max":li("lg-max"),"xl-min":li("xl-min"),"xl-max":li("xl-max"),"xxl-min":li("xxl-min"),"xxs-column":li("xxs-column"),"xs-column":li("xs-column"),"sm-column":li("sm-column"),"md-column":li("md-column"),"lg-column":li("lg-column"),"xl-column":li("xl-column"),"xxl-column":li("xxl-column"),"xxs-gutter":li("xxs-gutter"),"xs-gutter":li("xs-gutter"),"sm-gutter":li("sm-gutter"),"md-gutter":li("md-gutter"),"lg-gutter":li("lg-gutter"),"xl-gutter":li("xl-gutter"),"xxl-gutter":li("xxl-gutter"),"xxs-margin":li("xxs-margin"),"xs-margin":li("xs-margin"),"sm-margin":li("sm-margin"),"md-margin":li("md-margin"),"lg-margin":li("lg-margin"),"xl-margin":li("xl-margin"),"xxl-margin":li("xxl-margin")},ui=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=ci["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),di={MaxWidth:ui("max-width"),MinWidth:ui("min-width")},fi={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},hi=e=>t=>{var r;const n=t.theme,o=Yo(fi,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Vo(o,e,n.overrides.fontSpec):o[e]},pi={"heading-size-xxl":hi("heading-size-xxl"),"heading-size-xl":hi("heading-size-xl"),"heading-size-lg":hi("heading-size-lg"),"heading-size-md":hi("heading-size-md"),"heading-size-sm":hi("heading-size-sm"),"heading-size-xs":hi("heading-size-xs"),"heading-lh-xxl":hi("heading-lh-xxl"),"heading-lh-xl":hi("heading-lh-xl"),"heading-lh-lg":hi("heading-lh-lg"),"heading-lh-md":hi("heading-lh-md"),"heading-lh-sm":hi("heading-lh-sm"),"heading-lh-xs":hi("heading-lh-xs"),"heading-ls-xxl":hi("heading-ls-xxl"),"heading-ls-xl":hi("heading-ls-xl"),"heading-ls-lg":hi("heading-ls-lg"),"heading-ls-md":hi("heading-ls-md"),"heading-ls-sm":hi("heading-ls-sm"),"heading-ls-xs":hi("heading-ls-xs"),"weight-light":hi("weight-light"),"weight-regular":hi("weight-regular"),"weight-semibold":hi("weight-semibold"),"weight-bold":hi("weight-bold"),"font-family":hi("font-family"),"body-size-baseline":hi("body-size-baseline"),"body-size-md":hi("body-size-md"),"body-size-sm":hi("body-size-sm"),"body-size-xs":hi("body-size-xs"),"body-lh-baseline":hi("body-lh-baseline"),"body-lh-md":hi("body-lh-md"),"body-lh-sm":hi("body-lh-sm"),"body-lh-xs":hi("body-lh-xs"),"body-ls-baseline":hi("body-ls-baseline"),"body-ls-md":hi("body-ls-md"),"body-ls-sm":hi("body-ls-sm"),"body-ls-xs":hi("body-ls-xs"),"form-label-size":hi("form-label-size"),"form-description-size":hi("form-description-size"),"form-label-lh":hi("form-label-lh"),"form-description-lh":hi("form-description-lh"),"form-label-ls":hi("form-label-ls"),"form-description-ls":hi("form-description-ls")},gi=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return O`
        font-family: ${hi("font-family")};
        font-size: ${hi(e)};
        font-weight: ${hi(t)};
        line-height: ${hi(r)};
        letter-spacing: ${hi(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},mi=(e={})=>({"heading-xxl-light":gi("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":gi("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":gi("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":gi("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":gi("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":gi("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":gi("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":gi("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":gi("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":gi("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":gi("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":gi("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":gi("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":gi("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":gi("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":gi("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":gi("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":gi("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":gi("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":gi("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":gi("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":gi("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":gi("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":gi("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":gi("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":gi("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":gi("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":gi("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":gi("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":gi("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":gi("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":gi("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":gi("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":gi("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":gi("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":gi("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":gi("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":gi("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":gi("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":gi("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":gi("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":gi("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),bi=mi({disableLigatures:!0}),vi={collections:{default:mi(),bookingsg:bi,pa:mi({disableLigatures:!0})},defaultValue:"default"},yi=e=>t=>{var r;const n=t.theme,o=Yo(vi,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Vo(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},xi={"heading-xxl-light":yi("heading-xxl-light"),"heading-xxl-regular":yi("heading-xxl-regular"),"heading-xxl-semibold":yi("heading-xxl-semibold"),"heading-xxl-bold":yi("heading-xxl-bold"),"heading-xl-light":yi("heading-xl-light"),"heading-xl-regular":yi("heading-xl-regular"),"heading-xl-semibold":yi("heading-xl-semibold"),"heading-xl-bold":yi("heading-xl-bold"),"heading-lg-light":yi("heading-lg-light"),"heading-lg-regular":yi("heading-lg-regular"),"heading-lg-semibold":yi("heading-lg-semibold"),"heading-lg-bold":yi("heading-lg-bold"),"heading-md-light":yi("heading-md-light"),"heading-md-regular":yi("heading-md-regular"),"heading-md-semibold":yi("heading-md-semibold"),"heading-md-bold":yi("heading-md-bold"),"heading-sm-light":yi("heading-sm-light"),"heading-sm-regular":yi("heading-sm-regular"),"heading-sm-semibold":yi("heading-sm-semibold"),"heading-sm-bold":yi("heading-sm-bold"),"heading-xs-light":yi("heading-xs-light"),"heading-xs-regular":yi("heading-xs-regular"),"heading-xs-semibold":yi("heading-xs-semibold"),"heading-xs-bold":yi("heading-xs-bold"),"body-baseline-light":yi("body-baseline-light"),"body-baseline-regular":yi("body-baseline-regular"),"body-baseline-semibold":yi("body-baseline-semibold"),"body-baseline-bold":yi("body-baseline-bold"),"body-md-light":yi("body-md-light"),"body-md-regular":yi("body-md-regular"),"body-md-semibold":yi("body-md-semibold"),"body-md-bold":yi("body-md-bold"),"body-sm-light":yi("body-sm-light"),"body-sm-regular":yi("body-sm-regular"),"body-sm-semibold":yi("body-sm-semibold"),"body-sm-bold":yi("body-sm-bold"),"body-xs-light":yi("body-xs-light"),"body-xs-regular":yi("body-xs-regular"),"body-xs-semibold":yi("body-xs-semibold"),"body-xs-bold":yi("body-xs-bold"),"form-label":yi("form-label"),"form-description":yi("form-description")},wi={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},$i=e=>t=>{var r;const n=t.theme,o=Yo(wi,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Vo(o,e,n.overrides.motion):o[e]},Ci={"duration-150":$i("duration-150"),"duration-250":$i("duration-250"),"duration-350":$i("duration-350"),"duration-500":$i("duration-500"),"duration-800":$i("duration-800"),"duration-1000":$i("duration-1000"),"ease-default":$i("ease-default"),"ease-standard":$i("ease-standard"),"ease-entrance":$i("ease-entrance"),"ease-exit":$i("ease-exit")},Si={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Di=e=>t=>{var r;const n=t.theme,o=Yo(Si,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Vo(o,e,n.overrides.radius)}px`:`${o[e]}px`},ki={none:Di("none"),xs:Di("xs"),sm:Di("sm"),md:Di("md"),lg:Di("lg"),full:Di("full")},_i={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Oi=e=>t=>{var r;const n=t.theme,o=Yo(_i,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Vo(o,e,n.overrides.spacing)}px`:`${o[e]}px`},Ei={"spacing-0":Oi("spacing-0"),"spacing-4":Oi("spacing-4"),"spacing-8":Oi("spacing-8"),"spacing-12":Oi("spacing-12"),"spacing-16":Oi("spacing-16"),"spacing-20":Oi("spacing-20"),"spacing-24":Oi("spacing-24"),"spacing-32":Oi("spacing-32"),"spacing-40":Oi("spacing-40"),"spacing-48":Oi("spacing-48"),"spacing-64":Oi("spacing-64"),"spacing-72":Oi("spacing-72"),"layout-xs":Oi("layout-xs"),"layout-sm":Oi("layout-sm"),"layout-md":Oi("layout-md"),"layout-lg":Oi("layout-lg"),"layout-xl":Oi("layout-xl"),"layout-xxl":Oi("layout-xxl"),"layout-xxxl":Oi("layout-xxxl")},Ti=Object.assign(Object.assign({},ri),{Primitive:Xo}),Ii=Object.assign(Object.assign({},xi),{Spec:pi}),Fi=Ci,Mi=Object.assign(Object.assign({},qo),{Util:ai}),Ai=Ei,ji=ki,Ri=ci,zi=di,Bi=e=>O`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Pi=(e,t,r=!1)=>O`
        ${Ii[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Li=e=>{if(e)return O`
            ${Bi(e)}
        `},Ni=(e,t)=>O`
    ${Pi(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,r)=>t?O`
            display: block;
            ${Li(r)}
        `:e?O`
            display: inline;
        `:O`
            display: block;
            ${Li(r)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${Ti.text};
`;var Hi;!function(r){const n=(e,t,r)=>{const n=_(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Ni(t,e)}
        `;return n.displayName=`Typography.${r}`,n};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const o=(e,t)=>{const r=_.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>Ni(e,t)}
        `;return r.displayName=`Typography.${t}`,r};r.BodyBL=o("body-baseline","BodyBL"),r.BodyMD=o("body-md","BodyMD"),r.BodySM=o("body-sm","BodySM"),r.BodyXS=o("body-xs","BodyXS");const i=(r,n)=>{const o=_.a`
            ${e=>O`
                ${Pi(r,e.weight||"regular")}
                color: ${Ti.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Ti["text-hover"]};
                }
            `}
        `,i=r=>{var{external:n=!1,children:i}=r,a=ct(r,["external","children"]);return e(o,Object.assign({},a,{children:[i,n&&t(Wi,{})]}))};return i.displayName=`Typography.${n}`,i};r.LinkBL=i("body-baseline","LinkBL"),r.LinkMD=i("body-md","LinkMD"),r.LinkSM=i("body-sm","LinkSM"),r.LinkXS=i("body-xs","LinkXS")}(Hi||(Hi={}));const Wi=_(I)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Vi=_.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return O`
                ${Mi.Util["dashed-default"]({radius:ji.sm,thickness:Mi["width-040"],colour:Ti.border})}
                padding: ${Ai["spacing-32"]};

                ${zi.MaxWidth.sm} {
                    padding: ${Ai["spacing-32"]} ${Ai["spacing-20"]};
                }
            `}}
`,Yi=_.input`
    display: none;
`,Ui=_.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${Ti["bg-primary-subtler"]};
    ${Mi.Util["dashed-default"]({radius:ji.sm,thickness:Mi["width-040"],colour:Ti["border-primary"]})}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,Ki=_(Hi.BodyMD)`
    color: ${Ti["text-primary"]};
    text-align: center;
`,qi=_(k)`
    color: ${Ti["icon-primary"]};
    height: 4rem;
    width: 4rem;
`,Gi=d((({children:r,accept:n,capture:o,multiple:i,id:a,className:l,name:c,border:u,disabled:d,onChange:h,"data-testid":p},g)=>{const m=s(null),{getRootProps:b,isDragActive:v}=ur({onDrop:h,noClick:!0,disabled:d});f(g,(()=>Object.assign(Object.assign({},m.current),{openFileDialog:()=>{m.current&&(m.current.value="",m.current.click())}})));return e(Vi,Object.assign({id:a,"data-testid":p||"dropzone",$border:u,className:l},b(),{children:[t(Yi,{type:"file",name:c,ref:m,tabIndex:-1,"aria-hidden":!0,accept:n,capture:o,multiple:i,"data-testid":p?`${p}-input`:"dropzone-input",onChange:e=>{e.target.files&&h(Array.from(e.target.files))}}),r,v&&e(Ui,{children:[t(qi,{}),t(Ki,{weight:"semibold",children:"Drop files here"})]})]}))}));const Qi="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function Zi(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function Xi(e){return"nodeType"in e}function Ji(e){var t,r;return e?Zi(e)?e:Xi(e)&&null!=(t=null==(r=e.ownerDocument)?void 0:r.defaultView)?t:window:window}function ea(e){const{Document:t}=Ji(e);return e instanceof t}function ta(e){return!Zi(e)&&e instanceof Ji(e).HTMLElement}function ra(e){return e instanceof Ji(e).SVGElement}function na(e){return e?Zi(e)?e.document:Xi(e)?ea(e)?e:ta(e)||ra(e)?e.ownerDocument:document:document:document}const oa=Qi?p:c;function ia(e){const t=s(e);return oa((()=>{t.current=e})),u((function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return null==t.current?void 0:t.current(...r)}),[])}function aa(e,t){void 0===t&&(t=[e]);const r=s(e);return oa((()=>{r.current!==e&&(r.current=e)}),t),r}function sa(e,t){const r=s();return a((()=>{const t=e(r.current);return r.current=t,t}),[...t])}function la(e){const t=ia(e),r=s(null),n=u((e=>{e!==r.current&&(null==t||t(e,r.current)),r.current=e}),[]);return[r,n]}function ca(e){const t=s();return c((()=>{t.current=e}),[e]),t.current}let ua={};function da(e,t){return a((()=>{if(t)return t;const r=null==ua[e]?0:ua[e]+1;return ua[e]=r,e+"-"+r}),[e,t])}function fa(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.reduce(((t,r)=>{const n=Object.entries(r);for(const[r,o]of n){const n=t[r];null!=n&&(t[r]=n+e*o)}return t}),{...t})}}const ha=fa(1),pa=fa(-1);function ga(e){if(!e)return!1;const{KeyboardEvent:t}=Ji(e.target);return t&&e instanceof t}function ma(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=Ji(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const ba=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(e)return[ba.Translate.toString(e),ba.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}}),va="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function ya(e){return e.matches(va)?e:e.querySelector(va)}const xa={display:"none"};function wa(e){let{id:t,value:r}=e;return o.createElement("div",{id:t,style:xa},r)}function $a(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;return o.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":n,"aria-atomic":!0},r)}const Ca=i(null);const Sa={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},Da={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was moved over droppable area "+r.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was dropped over droppable area "+r.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function ka(e){let{announcements:t=Da,container:r,hiddenTextDescribedById:n,screenReaderInstructions:i=Sa}=e;const{announce:s,announcement:l}=function(){const[e,t]=g("");return{announce:u((e=>{null!=e&&t(e)}),[]),announcement:e}}(),d=da("DndLiveRegion"),[f,h]=g(!1);if(c((()=>{h(!0)}),[]),function(e){const t=b(Ca);c((()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)}),[e,t])}(a((()=>({onDragStart(e){let{active:r}=e;s(t.onDragStart({active:r}))},onDragMove(e){let{active:r,over:n}=e;t.onDragMove&&s(t.onDragMove({active:r,over:n}))},onDragOver(e){let{active:r,over:n}=e;s(t.onDragOver({active:r,over:n}))},onDragEnd(e){let{active:r,over:n}=e;s(t.onDragEnd({active:r,over:n}))},onDragCancel(e){let{active:r,over:n}=e;s(t.onDragCancel({active:r,over:n}))}})),[s,t])),!f)return null;const p=o.createElement(o.Fragment,null,o.createElement(wa,{id:n,value:i.draggable}),o.createElement($a,{id:d,announcement:l}));return r?A(p,r):p}var _a;function Oa(){}function Ea(e,t){return a((()=>({sensor:e,options:null!=t?t:{}})),[e,t])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(_a||(_a={}));const Ta=Object.freeze({x:0,y:0});function Ia(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return r-n}function Fa(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return n-r}function Ma(e){let{left:t,top:r,height:n,width:o}=e;return[{x:t,y:r},{x:t+o,y:r},{x:t,y:r+n},{x:t+o,y:r+n}]}function Aa(e,t){if(!e||0===e.length)return null;const[r]=e;return t?r[t]:r}function ja(e,t){const r=Math.max(t.top,e.top),n=Math.max(t.left,e.left),o=Math.min(t.left+t.width,e.left+e.width),i=Math.min(t.top+t.height,e.top+e.height),a=o-n,s=i-r;if(n<o&&r<i){const r=t.width*t.height,n=e.width*e.height,o=a*s;return Number((o/(r+n-o)).toFixed(4))}return 0}const Ra=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const o=[];for(const e of n){const{id:n}=e,i=r.get(n);if(i){const r=ja(i,t);r>0&&o.push({id:n,data:{droppableContainer:e,value:r}})}}return o.sort(Fa)};function za(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Ta}function Ba(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.reduce(((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x})),{...t})}}const Pa=Ba(1);const La={ignoreTransform:!1};function Na(e,t){void 0===t&&(t=La);let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=Ji(e).getComputedStyle(e);t&&(r=function(e,t,r){const n=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!n)return e;const{scaleX:o,scaleY:i,x:a,y:s}=n,l=e.left-a-(1-o)*parseFloat(r),c=e.top-s-(1-i)*parseFloat(r.slice(r.indexOf(" ")+1)),u=o?e.width/o:e.width,d=i?e.height/i:e.height;return{width:u,height:d,top:c,right:l+u,bottom:c+d,left:l}}(r,t,n))}const{top:n,left:o,width:i,height:a,bottom:s,right:l}=r;return{top:n,left:o,width:i,height:a,bottom:s,right:l}}function Ha(e){return Na(e,{ignoreTransform:!0})}function Wa(e,t){const r=[];return e?function n(o){if(null!=t&&r.length>=t)return r;if(!o)return r;if(ea(o)&&null!=o.scrollingElement&&!r.includes(o.scrollingElement))return r.push(o.scrollingElement),r;if(!ta(o)||ra(o))return r;if(r.includes(o))return r;const i=Ji(e).getComputedStyle(o);return o!==e&&function(e,t){void 0===t&&(t=Ji(e).getComputedStyle(e));const r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const n=t[e];return"string"==typeof n&&r.test(n)}))}(o,i)&&r.push(o),function(e,t){return void 0===t&&(t=Ji(e).getComputedStyle(e)),"fixed"===t.position}(o,i)?r:n(o.parentNode)}(e):r}function Va(e){const[t]=Wa(e,1);return null!=t?t:null}function Ya(e){return Qi&&e?Zi(e)?e:Xi(e)?ea(e)||e===na(e).scrollingElement?window:ta(e)?e:null:null:null}function Ua(e){return Zi(e)?e.scrollX:e.scrollLeft}function Ka(e){return Zi(e)?e.scrollY:e.scrollTop}function qa(e){return{x:Ua(e),y:Ka(e)}}var Ga;function Qa(e){return!(!Qi||!e)&&e===document.scrollingElement}function Za(e){const t={x:0,y:0},r=Qa(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=n.y,isRight:e.scrollLeft>=n.x,maxScroll:n,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(Ga||(Ga={}));const Xa={x:.2,y:.2};function Ja(e,t,r,n,o){let{top:i,left:a,right:s,bottom:l}=r;void 0===n&&(n=10),void 0===o&&(o=Xa);const{isTop:c,isBottom:u,isLeft:d,isRight:f}=Za(e),h={x:0,y:0},p={x:0,y:0},g=t.height*o.y,m=t.width*o.x;return!c&&i<=t.top+g?(h.y=Ga.Backward,p.y=n*Math.abs((t.top+g-i)/g)):!u&&l>=t.bottom-g&&(h.y=Ga.Forward,p.y=n*Math.abs((t.bottom-g-l)/g)),!f&&s>=t.right-m?(h.x=Ga.Forward,p.x=n*Math.abs((t.right-m-s)/m)):!d&&a<=t.left+m&&(h.x=Ga.Backward,p.x=n*Math.abs((t.left+m-a)/m)),{direction:h,speed:p}}function es(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:o}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:o,width:e.clientWidth,height:e.clientHeight}}function ts(e){return e.reduce(((e,t)=>ha(e,qa(t))),Ta)}const rs=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+Ua(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+Ka(t)),0)}]];class ns{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=Wa(t),n=ts(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,o]of rs)for(const i of t)Object.defineProperty(this,i,{get:()=>{const t=o(r),a=n[e]-t;return this.rect[i]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class os{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,r){var n;null==(n=this.target)||n.addEventListener(e,t,r),this.listeners.push([e,t,r])}}function is(e,t){const r=Math.abs(e.x),n=Math.abs(e.y);return"number"==typeof t?Math.sqrt(r**2+n**2)>t:"x"in t&&"y"in t?r>t.x&&n>t.y:"x"in t?r>t.x:"y"in t&&n>t.y}var as,ss;function ls(e){e.preventDefault()}function cs(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(as||(as={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}(ss||(ss={}));const us={start:[ss.Space,ss.Enter],cancel:[ss.Esc],end:[ss.Space,ss.Enter]},ds=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case ss.Right:return{...r,x:r.x+25};case ss.Left:return{...r,x:r.x-25};case ss.Down:return{...r,y:r.y+25};case ss.Up:return{...r,y:r.y-25}}};let fs=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new os(na(t)),this.windowListeners=new os(Ji(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(as.Resize,this.handleCancel),this.windowListeners.add(as.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(as.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,r=e.node.current;r&&function(e,t){if(void 0===t&&(t=Na),!e)return;const{top:r,left:n,bottom:o,right:i}=t(e);Va(e)&&(o<=0||i<=0||r>=window.innerHeight||n>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(r),t(Ta)}handleKeyDown(e){if(ga(e)){const{active:t,context:r,options:n}=this.props,{keyboardCodes:o=us,coordinateGetter:i=ds,scrollBehavior:a="smooth"}=n,{code:s}=e;if(o.end.includes(s))return void this.handleEnd(e);if(o.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=r.current,c=l?{x:l.left,y:l.top}:Ta;this.referenceCoordinates||(this.referenceCoordinates=c);const u=i(e,{active:t,context:r.current,currentCoordinates:c});if(u){const t=pa(u,c),n={x:0,y:0},{scrollableAncestors:o}=r.current;for(const r of o){const o=e.code,{isTop:i,isRight:s,isLeft:l,isBottom:c,maxScroll:d,minScroll:f}=Za(r),h=es(r),p={x:Math.min(o===ss.Right?h.right-h.width/2:h.right,Math.max(o===ss.Right?h.left:h.left+h.width/2,u.x)),y:Math.min(o===ss.Down?h.bottom-h.height/2:h.bottom,Math.max(o===ss.Down?h.top:h.top+h.height/2,u.y))},g=o===ss.Right&&!s||o===ss.Left&&!l,m=o===ss.Down&&!c||o===ss.Up&&!i;if(g&&p.x!==u.x){const e=r.scrollLeft+t.x,i=o===ss.Right&&e<=d.x||o===ss.Left&&e>=f.x;if(i&&!t.y)return void r.scrollTo({left:e,behavior:a});n.x=i?r.scrollLeft-e:o===ss.Right?r.scrollLeft-d.x:r.scrollLeft-f.x,n.x&&r.scrollBy({left:-n.x,behavior:a});break}if(m&&p.y!==u.y){const e=r.scrollTop+t.y,i=o===ss.Down&&e<=d.y||o===ss.Up&&e>=f.y;if(i&&!t.x)return void r.scrollTo({top:e,behavior:a});n.y=i?r.scrollTop-e:o===ss.Down?r.scrollTop-d.y:r.scrollTop-f.y,n.y&&r.scrollBy({top:-n.y,behavior:a});break}}this.handleMove(e,ha(pa(u,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault(),r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function hs(e){return Boolean(e&&"distance"in e)}function ps(e){return Boolean(e&&"delay"in e)}fs.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=us,onActivation:o}=t,{active:i}=r;const{code:a}=e.nativeEvent;if(n.start.includes(a)){const t=i.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==o||o({event:e.nativeEvent}),!0)}return!1}}];class gs{constructor(e,t,r){var n;void 0===r&&(r=function(e){const{EventTarget:t}=Ji(e);return e instanceof t?e:na(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:o}=e,{target:i}=o;this.props=e,this.events=t,this.document=na(i),this.documentListeners=new os(this.document),this.listeners=new os(r),this.windowListeners=new os(Ji(i)),this.initialCoordinates=null!=(n=ma(o))?n:Ta,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(as.Resize,this.handleCancel),this.windowListeners.add(as.DragStart,ls),this.windowListeners.add(as.VisibilityChange,this.handleCancel),this.windowListeners.add(as.ContextMenu,ls),this.documentListeners.add(as.Keydown,this.handleKeydown),t){if(null!=r&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(ps(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(hs(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(as.Click,cs,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(as.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:o}=this,{onMove:i,options:{activationConstraint:a}}=o;if(!n)return;const s=null!=(t=ma(e))?t:Ta,l=pa(n,s);if(!r&&a){if(hs(a)){if(null!=a.tolerance&&is(l,a.tolerance))return this.handleCancel();if(is(l,a.distance))return this.handleStart()}return ps(a)&&is(l,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),i(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===ss.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const ms={move:{name:"pointermove"},end:{name:"pointerup"}};class bs extends gs{constructor(e){const{event:t}=e,r=na(t.target);super(e,ms,r)}}bs.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return!(!r.isPrimary||0!==r.button)&&(null==n||n({event:r}),!0)}}];const vs={move:{name:"mousemove"},end:{name:"mouseup"}};var ys;!function(e){e[e.RightClick=2]="RightClick"}(ys||(ys={}));let xs=class extends gs{constructor(e){super(e,vs,na(e.event.target))}};xs.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return r.button!==ys.RightClick&&(null==n||n({event:r}),!0)}}];const ws={move:{name:"touchmove"},end:{name:"touchend"}};class $s extends gs{constructor(e){super(e,ws)}static setup(){return window.addEventListener(ws.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(ws.move.name,e)};function e(){}}}var Cs,Ss;function Ds(e){let{acceleration:t,activator:r=Cs.Pointer,canScroll:n,draggingRect:o,enabled:i,interval:l=5,order:d=Ss.TreeOrder,pointerCoordinates:f,scrollableAncestors:h,scrollableAncestorRects:p,delta:g,threshold:m}=e;const b=function(e){let{delta:t,disabled:r}=e;const n=ca(t);return sa((e=>{if(r||!n||!e)return ks;const o={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};return{x:{[Ga.Backward]:e.x[Ga.Backward]||-1===o.x,[Ga.Forward]:e.x[Ga.Forward]||1===o.x},y:{[Ga.Backward]:e.y[Ga.Backward]||-1===o.y,[Ga.Forward]:e.y[Ga.Forward]||1===o.y}}}),[r,t,n])}({delta:g,disabled:!i}),[v,y]=function(){const e=s(null);return[u(((t,r)=>{e.current=setInterval(t,r)}),[]),u((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),x=s({x:0,y:0}),w=s({x:0,y:0}),$=a((()=>{switch(r){case Cs.Pointer:return f?{top:f.y,bottom:f.y,left:f.x,right:f.x}:null;case Cs.DraggableRect:return o}}),[r,o,f]),C=s(null),S=u((()=>{const e=C.current;if(!e)return;const t=x.current.x*w.current.x,r=x.current.y*w.current.y;e.scrollBy(t,r)}),[]),D=a((()=>d===Ss.TreeOrder?[...h].reverse():h),[d,h]);c((()=>{if(i&&h.length&&$){for(const e of D){if(!1===(null==n?void 0:n(e)))continue;const r=h.indexOf(e),o=p[r];if(!o)continue;const{direction:i,speed:a}=Ja(e,o,$,t,m);for(const e of["x","y"])b[e][i[e]]||(a[e]=0,i[e]=0);if(a.x>0||a.y>0)return y(),C.current=e,v(S,l),x.current=a,void(w.current=i)}x.current={x:0,y:0},w.current={x:0,y:0},y()}else y()}),[t,S,n,y,i,l,JSON.stringify($),JSON.stringify(b),v,h,D,p,JSON.stringify(m)])}$s.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;const{touches:o}=r;return!(o.length>1)&&(null==n||n({event:r}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(Cs||(Cs={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(Ss||(Ss={}));const ks={x:{[Ga.Backward]:!1,[Ga.Forward]:!1},y:{[Ga.Backward]:!1,[Ga.Forward]:!1}};var _s,Os;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(_s||(_s={})),function(e){e.Optimized="optimized"}(Os||(Os={}));const Es=new Map;function Ts(e,t){return sa((r=>e?r||("function"==typeof t?t(e):e):null),[t,e])}function Is(e){let{callback:t,disabled:r}=e;const n=ia(t),o=a((()=>{if(r||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(n)}),[r]);return c((()=>()=>null==o?void 0:o.disconnect()),[o]),o}function Fs(e){return new ns(Na(e),e)}function Ms(e,t,r){void 0===t&&(t=Fs);const[n,o]=l((function(n){if(!e)return null;var o;if(!1===e.isConnected)return null!=(o=null!=n?n:r)?o:null;const i=t(e);if(JSON.stringify(n)===JSON.stringify(i))return n;return i}),null),i=function(e){let{callback:t,disabled:r}=e;const n=ia(t),o=a((()=>{if(r||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(n)}),[n,r]);return c((()=>()=>null==o?void 0:o.disconnect()),[o]),o}({callback(t){if(e)for(const r of t){const{type:t,target:n}=r;if("childList"===t&&n instanceof HTMLElement&&n.contains(e)){o();break}}}}),s=Is({callback:o});return oa((()=>{o(),e?(null==s||s.observe(e),null==i||i.observe(document.body,{childList:!0,subtree:!0})):(null==s||s.disconnect(),null==i||i.disconnect())}),[e]),n}const As=[];function js(e,t){void 0===t&&(t=[]);const r=s(null);return c((()=>{r.current=null}),t),c((()=>{const t=e!==Ta;t&&!r.current&&(r.current=e),!t&&r.current&&(r.current=null)}),[e]),r.current?pa(e,r.current):Ta}function Rs(e){return a((()=>e?function(e){const t=e.innerWidth,r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}(e):null),[e])}const zs=[];function Bs(e){let{measure:t}=e;const[r,n]=g(null),o=u((e=>{for(const{target:r}of e)if(ta(r)){n((e=>{const n=t(r);return e?{...e,width:n.width,height:n.height}:n}));break}}),[t]),i=Is({callback:o}),s=u((e=>{const r=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return ta(t)?t:e}(e);null==i||i.disconnect(),r&&(null==i||i.observe(r)),n(r?t(r):null)}),[t,i]),[l,c]=la(s);return a((()=>({nodeRef:l,rect:r,setRef:c})),[r,l,c])}const Ps=[{sensor:bs,options:{}},{sensor:fs,options:{}}],Ls={current:{}},Ns={draggable:{measure:Ha},droppable:{measure:Ha,strategy:_s.WhileDragging,frequency:Os.Optimized},dragOverlay:{measure:Na}};class Hs extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,r;return null!=(t=null==(r=this.get(e))?void 0:r.node.current)?t:void 0}}const Ws={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Hs,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Oa},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Ns,measureDroppableContainers:Oa,windowRect:null,measuringScheduled:!1},Vs=i({activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Oa,draggableNodes:new Map,over:null,measureDroppableContainers:Oa}),Ys=i(Ws);function Us(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Hs}}}function Ks(e,t){switch(t.type){case _a.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case _a.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case _a.DragEnd:case _a.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case _a.RegisterDroppable:{const{element:r}=t,{id:n}=r,o=new Hs(e.droppable.containers);return o.set(n,r),{...e,droppable:{...e.droppable,containers:o}}}case _a.SetDroppableDisabled:{const{id:r,key:n,disabled:o}=t,i=e.droppable.containers.get(r);if(!i||n!==i.key)return e;const a=new Hs(e.droppable.containers);return a.set(r,{...i,disabled:o}),{...e,droppable:{...e.droppable,containers:a}}}case _a.UnregisterDroppable:{const{id:r,key:n}=t,o=e.droppable.containers.get(r);if(!o||n!==o.key)return e;const i=new Hs(e.droppable.containers);return i.delete(r),{...e,droppable:{...e.droppable,containers:i}}}default:return e}}function qs(e){let{disabled:t}=e;const{active:r,activatorEvent:n,draggableNodes:o}=b(Vs),i=ca(n),a=ca(null==r?void 0:r.id);return c((()=>{if(!t&&!n&&i&&null!=a){if(!ga(i))return;if(document.activeElement===i.target)return;const e=o.get(a);if(!e)return;const{activatorNode:t,node:r}=e;if(!t.current&&!r.current)return;requestAnimationFrame((()=>{for(const e of[t.current,r.current]){if(!e)continue;const t=ya(e);if(t){t.focus();break}}}))}}),[n,t,o,a,i]),null}const Gs=i({...Ta,scaleX:1,scaleY:1});var Qs;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(Qs||(Qs={}));const Zs=m((function(e){var t,r,n,i;let{id:d,accessibility:f,autoScroll:h=!0,children:p,sensors:m=Ps,collisionDetection:b=Ra,measuring:v,modifiers:y,...x}=e;const w=l(Ks,void 0,Us),[$,C]=w,[S,D]=function(){const[e]=g((()=>new Set)),t=u((t=>(e.add(t),()=>e.delete(t))),[e]);return[u((t=>{let{type:r,event:n}=t;e.forEach((e=>{var t;return null==(t=e[r])?void 0:t.call(e,n)}))}),[e]),t]}(),[k,_]=g(Qs.Uninitialized),O=k===Qs.Initialized,{draggable:{active:E,nodes:T,translate:I},droppable:{containers:F}}=$,A=E?T.get(E):null,j=s({initial:null,translated:null}),R=a((()=>{var e;return null!=E?{id:E,data:null!=(e=null==A?void 0:A.data)?e:Ls,rect:j}:null}),[E,A]),z=s(null),[B,P]=g(null),[L,N]=g(null),H=aa(x,Object.values(x)),W=da("DndDescribedBy",d),V=a((()=>F.getEnabled()),[F]),Y=function(e){return a((()=>({draggable:{...Ns.draggable,...null==e?void 0:e.draggable},droppable:{...Ns.droppable,...null==e?void 0:e.droppable},dragOverlay:{...Ns.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(v),{droppableRects:U,measureDroppableContainers:K,measuringScheduled:q}=function(e,t){let{dragging:r,dependencies:n,config:o}=t;const[i,a]=g(null),{frequency:l,measure:d,strategy:f}=o,h=s(e),p=function(){switch(f){case _s.Always:return!1;case _s.BeforeDragging:return r;default:return!r}}(),m=aa(p),b=u((function(e){void 0===e&&(e=[]),m.current||a((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[m]),v=s(null),y=sa((t=>{if(p&&!r)return Es;if(!t||t===Es||h.current!==e||null!=i){const t=new Map;for(let r of e){if(!r)continue;if(i&&i.length>0&&!i.includes(r.id)&&r.rect.current){t.set(r.id,r.rect.current);continue}const e=r.node.current,n=e?new ns(d(e),e):null;r.rect.current=n,n&&t.set(r.id,n)}return t}return t}),[e,i,r,p,d]);return c((()=>{h.current=e}),[e]),c((()=>{p||b()}),[r,p]),c((()=>{i&&i.length>0&&a(null)}),[JSON.stringify(i)]),c((()=>{p||"number"!=typeof l||null!==v.current||(v.current=setTimeout((()=>{b(),v.current=null}),l))}),[l,p,b,...n]),{droppableRects:y,measureDroppableContainers:b,measuringScheduled:null!=i}}(V,{dragging:O,dependencies:[I.x,I.y],config:Y.droppable}),G=function(e,t){const r=null!==t?e.get(t):void 0,n=r?r.node.current:null;return sa((e=>{var r;return null===t?null:null!=(r=null!=n?n:e)?r:null}),[n,t])}(T,E),Q=a((()=>L?ma(L):null),[L]),Z=function(){const e=!1===(null==B?void 0:B.autoScrollEnabled),t="object"==typeof h?!1===h.enabled:!1===h,r=O&&!e&&!t;if("object"==typeof h)return{...h,enabled:r};return{enabled:r}}(),X=function(e,t){return Ts(e,t)}(G,Y.draggable.measure);!function(e){let{activeNode:t,measure:r,initialRect:n,config:o=!0}=e;const i=s(!1),{x:a,y:l}="boolean"==typeof o?{x:o,y:o}:o;oa((()=>{if(!a&&!l||!t)return void(i.current=!1);if(i.current||!n)return;const e=null==t?void 0:t.node.current;if(!e||!1===e.isConnected)return;const o=za(r(e),n);if(a||(o.x=0),l||(o.y=0),i.current=!0,Math.abs(o.x)>0||Math.abs(o.y)>0){const t=Va(e);t&&t.scrollBy({top:o.y,left:o.x})}}),[t,a,l,n,r])}({activeNode:E?T.get(E):null,config:Z.layoutShiftCompensation,initialRect:X,measure:Y.draggable.measure});const J=Ms(G,Y.draggable.measure,X),ee=Ms(G?G.parentElement:null),te=s({activatorEvent:null,active:null,activeNode:G,collisionRect:null,collisions:null,droppableRects:U,draggableNodes:T,draggingNode:null,draggingNodeRect:null,droppableContainers:F,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),re=F.getNodeFor(null==(t=te.current.over)?void 0:t.id),ne=Bs({measure:Y.dragOverlay.measure}),oe=null!=(r=ne.nodeRef.current)?r:G,ie=O?null!=(n=ne.rect)?n:J:null,ae=Boolean(ne.nodeRef.current&&ne.rect),se=za(le=ae?null:J,Ts(le));var le;const ce=Rs(oe?Ji(oe):null),ue=function(e){const t=s(e),r=sa((r=>e?r&&r!==As&&e&&t.current&&e.parentNode===t.current.parentNode?r:Wa(e):As),[e]);return c((()=>{t.current=e}),[e]),r}(O?null!=re?re:G:null),de=function(e,t){void 0===t&&(t=Na);const[r]=e,n=Rs(r?Ji(r):null),[o,i]=l((function(){return e.length?e.map((e=>Qa(e)?n:new ns(t(e),e))):zs}),zs),a=Is({callback:i});return e.length>0&&o===zs&&i(),oa((()=>{e.length?e.forEach((e=>null==a?void 0:a.observe(e))):(null==a||a.disconnect(),i())}),[e]),o}(ue),fe=function(e,t){let{transform:r,...n}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...n})),r):r}(y,{transform:{x:I.x-se.x,y:I.y-se.y,scaleX:1,scaleY:1},activatorEvent:L,active:R,activeNodeRect:J,containerNodeRect:ee,draggingNodeRect:ie,over:te.current.over,overlayNodeRect:ne.rect,scrollableAncestors:ue,scrollableAncestorRects:de,windowRect:ce}),he=Q?ha(Q,I):null,pe=function(e){const[t,r]=g(null),n=s(e),o=u((e=>{const t=Ya(e.target);t&&r((e=>e?(e.set(t,qa(t)),new Map(e)):null))}),[]);return c((()=>{const t=n.current;if(e!==t){i(t);const a=e.map((e=>{const t=Ya(e);return t?(t.addEventListener("scroll",o,{passive:!0}),[t,qa(t)]):null})).filter((e=>null!=e));r(a.length?new Map(a):null),n.current=e}return()=>{i(e),i(t)};function i(e){e.forEach((e=>{const t=Ya(e);null==t||t.removeEventListener("scroll",o)}))}}),[o,e]),a((()=>e.length?t?Array.from(t.values()).reduce(((e,t)=>ha(e,t)),Ta):ts(e):Ta),[e,t])}(ue),ge=js(pe),me=js(pe,[J]),be=ha(fe,ge),ve=ie?Pa(ie,fe):null,ye=R&&ve?b({active:R,collisionRect:ve,droppableRects:U,droppableContainers:V,pointerCoordinates:he}):null,xe=Aa(ye,"id"),[we,$e]=g(null),Ce=function(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}(ae?fe:ha(fe,me),null!=(i=null==we?void 0:we.rect)?i:null,J),Se=u(((e,t)=>{let{sensor:r,options:n}=t;if(null==z.current)return;const o=T.get(z.current);if(!o)return;const i=e.nativeEvent,a=new r({active:z.current,activeNode:o,event:i,options:n,context:te,onStart(e){const t=z.current;if(null==t)return;const r=T.get(t);if(!r)return;const{onDragStart:n}=H.current,o={active:{id:t,data:r.data,rect:j}};M((()=>{null==n||n(o),_(Qs.Initializing),C({type:_a.DragStart,initialCoordinates:e,active:t}),S({type:"onDragStart",event:o})}))},onMove(e){C({type:_a.DragMove,coordinates:e})},onEnd:s(_a.DragEnd),onCancel:s(_a.DragCancel)});function s(e){return async function(){const{active:t,collisions:r,over:n,scrollAdjustedTranslate:o}=te.current;let a=null;if(t&&o){const{cancelDrop:s}=H.current;if(a={activatorEvent:i,active:t,collisions:r,delta:o,over:n},e===_a.DragEnd&&"function"==typeof s){await Promise.resolve(s(a))&&(e=_a.DragCancel)}}z.current=null,M((()=>{C({type:e}),_(Qs.Uninitialized),$e(null),P(null),N(null);const t=e===_a.DragEnd?"onDragEnd":"onDragCancel";if(a){const e=H.current[t];null==e||e(a),S({type:t,event:a})}}))}}M((()=>{P(a),N(e.nativeEvent)}))}),[T]),De=u(((e,t)=>(r,n)=>{const o=r.nativeEvent,i=T.get(n);if(null!==z.current||!i||o.dndKit||o.defaultPrevented)return;const a={active:i};!0===e(r,t.options,a)&&(o.dndKit={capturedBy:t.sensor},z.current=n,Se(r,t))}),[T,Se]),ke=function(e,t){return a((()=>e.reduce(((e,r)=>{const{sensor:n}=r;return[...e,...n.activators.map((e=>({eventName:e.eventName,handler:t(e.handler,r)})))]}),[])),[e,t])}(m,De);!function(e){c((()=>{if(!Qi)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(m),oa((()=>{J&&k===Qs.Initializing&&_(Qs.Initialized)}),[J,k]),c((()=>{const{onDragMove:e}=H.current,{active:t,activatorEvent:r,collisions:n,over:o}=te.current;if(!t||!r)return;const i={active:t,activatorEvent:r,collisions:n,delta:{x:be.x,y:be.y},over:o};M((()=>{null==e||e(i),S({type:"onDragMove",event:i})}))}),[be.x,be.y]),c((()=>{const{active:e,activatorEvent:t,collisions:r,droppableContainers:n,scrollAdjustedTranslate:o}=te.current;if(!e||null==z.current||!t||!o)return;const{onDragOver:i}=H.current,a=n.get(xe),s=a&&a.rect.current?{id:a.id,rect:a.rect.current,data:a.data,disabled:a.disabled}:null,l={active:e,activatorEvent:t,collisions:r,delta:{x:o.x,y:o.y},over:s};M((()=>{$e(s),null==i||i(l),S({type:"onDragOver",event:l})}))}),[xe]),oa((()=>{te.current={activatorEvent:L,active:R,activeNode:G,collisionRect:ve,collisions:ye,droppableRects:U,draggableNodes:T,draggingNode:oe,draggingNodeRect:ie,droppableContainers:F,over:we,scrollableAncestors:ue,scrollAdjustedTranslate:be},j.current={initial:ie,translated:ve}}),[R,G,ye,ve,T,oe,ie,U,F,we,ue,be]),Ds({...Z,delta:I,draggingRect:ve,pointerCoordinates:he,scrollableAncestors:ue,scrollableAncestorRects:de});const _e=a((()=>({active:R,activeNode:G,activeNodeRect:J,activatorEvent:L,collisions:ye,containerNodeRect:ee,dragOverlay:ne,draggableNodes:T,droppableContainers:F,droppableRects:U,over:we,measureDroppableContainers:K,scrollableAncestors:ue,scrollableAncestorRects:de,measuringConfiguration:Y,measuringScheduled:q,windowRect:ce})),[R,G,J,L,ye,ee,ne,T,F,U,we,K,ue,de,Y,q,ce]),Oe=a((()=>({activatorEvent:L,activators:ke,active:R,activeNodeRect:J,ariaDescribedById:{draggable:W},dispatch:C,draggableNodes:T,over:we,measureDroppableContainers:K})),[L,ke,R,J,C,W,T,we,K]);return o.createElement(Ca.Provider,{value:D},o.createElement(Vs.Provider,{value:Oe},o.createElement(Ys.Provider,{value:_e},o.createElement(Gs.Provider,{value:Ce},p)),o.createElement(qs,{disabled:!1===(null==f?void 0:f.restoreFocus)})),o.createElement(ka,{...f,hiddenTextDescribedById:W}))})),Xs=i(null),Js="button";function el(e){let{id:t,data:r,disabled:n=!1,attributes:o}=e;const i=da("Droppable"),{activators:s,activatorEvent:l,active:c,activeNodeRect:u,ariaDescribedById:d,draggableNodes:f,over:h}=b(Vs),{role:p=Js,roleDescription:g="draggable",tabIndex:m=0}=null!=o?o:{},v=(null==c?void 0:c.id)===t,y=b(v?Gs:Xs),[x,w]=la(),[$,C]=la(),S=function(e,t){return a((()=>e.reduce(((e,r)=>{let{eventName:n,handler:o}=r;return e[n]=e=>{o(e,t)},e}),{})),[e,t])}(s,t),D=aa(r);oa((()=>(f.set(t,{id:t,key:i,node:x,activatorNode:$,data:D}),()=>{const e=f.get(t);e&&e.key===i&&f.delete(t)})),[f,t]);return{active:c,activatorEvent:l,activeNodeRect:u,attributes:a((()=>({role:p,tabIndex:m,"aria-disabled":n,"aria-pressed":!(!v||p!==Js)||void 0,"aria-roledescription":g,"aria-describedby":d.draggable})),[n,p,m,v,g,d.draggable]),isDragging:v,listeners:n?void 0:S,node:x,over:h,setNodeRef:w,setActivatorNodeRef:C,transform:y}}const tl={timeout:25};function rl(e,t,r){const n=e.slice();return n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]),n}function nl(e,t){return e.reduce(((e,r,n)=>{const o=t.get(r);return o&&(e[n]=o),e}),Array(e.length))}function ol(e){return null!==e&&e>=0}const il=e=>{let{rects:t,activeIndex:r,overIndex:n,index:o}=e;const i=rl(t,n,r),a=t[o],s=i[o];return s&&a?{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}:null},al={scaleX:1,scaleY:1},sl=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:o,rects:i,overIndex:a}=e;const s=null!=(t=i[r])?t:n;if(!s)return null;if(o===r){const e=i[a];return e?{x:0,y:r<a?e.top+e.height-(s.top+s.height):e.top-s.top,...al}:null}const l=function(e,t,r){const n=e[t],o=e[t-1],i=e[t+1];if(!n)return 0;if(r<t)return o?n.top-(o.top+o.height):i?i.top-(n.top+n.height):0;return i?i.top-(n.top+n.height):o?n.top-(o.top+o.height):0}(i,o,r);return o>r&&o<=a?{x:0,y:-s.height-l,...al}:o<r&&o>=a?{x:0,y:s.height+l,...al}:{x:0,y:0,...al}};const ll="Sortable",cl=o.createContext({activeIndex:-1,containerId:ll,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:il,disabled:{draggable:!1,droppable:!1}});function ul(e){let{children:t,id:r,items:n,strategy:i=il,disabled:l=!1}=e;const{active:u,dragOverlay:d,droppableRects:f,over:h,measureDroppableContainers:p}=b(Ys),g=da(ll,r),m=Boolean(null!==d.rect),v=a((()=>n.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[n]),y=null!=u,x=u?v.indexOf(u.id):-1,w=h?v.indexOf(h.id):-1,$=s(v),C=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(v,$.current),S=-1!==w&&-1===x||C,D=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(l);oa((()=>{C&&y&&p(v)}),[C,v,y,p]),c((()=>{$.current=v}),[v]);const k=a((()=>({activeIndex:x,containerId:g,disabled:D,disableTransforms:S,items:v,overIndex:w,useDragOverlay:m,sortedRects:nl(v,f),strategy:i})),[x,g,D.draggable,D.droppable,S,v,w,f,m,i]);return o.createElement(cl.Provider,{value:k},t)}const dl=e=>{let{id:t,items:r,activeIndex:n,overIndex:o}=e;return rl(r,n,o).indexOf(t)},fl=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:o,items:i,newIndex:a,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!n)&&((s===i||o!==a)&&(!!r||a!==o&&t===l))},hl={duration:200,easing:"ease"},pl="transform",gl=ba.Transition.toString({property:pl,duration:0,easing:"linear"}),ml={roleDescription:"sortable"};function bl(e){let{animateLayoutChanges:t=fl,attributes:r,disabled:n,data:o,getNewIndex:i=dl,id:l,strategy:d,resizeObserverConfig:f,transition:h=hl}=e;const{items:p,containerId:m,activeIndex:v,disabled:y,disableTransforms:x,sortedRects:w,overIndex:$,useDragOverlay:C,strategy:S}=b(cl),D=function(e,t){var r,n;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(r=null==e?void 0:e.draggable)?r:t.draggable,droppable:null!=(n=null==e?void 0:e.droppable)?n:t.droppable}}(n,y),k=p.indexOf(l),_=a((()=>({sortable:{containerId:m,index:k,items:p},...o})),[m,o,k,p]),O=a((()=>p.slice(p.indexOf(l))),[p,l]),{rect:E,node:T,isOver:I,setNodeRef:F}=function(e){let{data:t,disabled:r=!1,id:n,resizeObserverConfig:o}=e;const i=da("Droppable"),{active:a,dispatch:l,over:d,measureDroppableContainers:f}=b(Vs),h=s({disabled:r}),p=s(!1),g=s(null),m=s(null),{disabled:v,updateMeasurementsFor:y,timeout:x}={...tl,...o},w=aa(null!=y?y:n),$=Is({callback:u((()=>{p.current?(null!=m.current&&clearTimeout(m.current),m.current=setTimeout((()=>{f(Array.isArray(w.current)?w.current:[w.current]),m.current=null}),x)):p.current=!0}),[x]),disabled:v||!a}),C=u(((e,t)=>{$&&(t&&($.unobserve(t),p.current=!1),e&&$.observe(e))}),[$]),[S,D]=la(C),k=aa(t);return c((()=>{$&&S.current&&($.disconnect(),p.current=!1,$.observe(S.current))}),[S,$]),oa((()=>(l({type:_a.RegisterDroppable,element:{id:n,key:i,disabled:r,node:S,rect:g,data:k}}),()=>l({type:_a.UnregisterDroppable,key:i,id:n}))),[n]),c((()=>{r!==h.current.disabled&&(l({type:_a.SetDroppableDisabled,id:n,key:i,disabled:r}),h.current.disabled=r)}),[n,i,r,l]),{active:a,rect:g,isOver:(null==d?void 0:d.id)===n,node:S,over:d,setNodeRef:D}}({id:l,data:_,disabled:D.droppable,resizeObserverConfig:{updateMeasurementsFor:O,...f}}),{active:M,activatorEvent:A,activeNodeRect:j,attributes:R,setNodeRef:z,listeners:B,isDragging:P,over:L,setActivatorNodeRef:N,transform:H}=el({id:l,data:_,attributes:{...ml,...r},disabled:D.draggable}),W=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return a((()=>e=>{t.forEach((t=>t(e)))}),t)}(F,z),V=Boolean(M),Y=V&&!x&&ol(v)&&ol($),U=!C&&P,K=U&&Y?H:null,q=Y?null!=K?K:(null!=d?d:S)({rects:w,activeNodeRect:j,activeIndex:v,overIndex:$,index:k}):null,G=ol(v)&&ol($)?i({id:l,items:p,activeIndex:v,overIndex:$}):k,Q=null==M?void 0:M.id,Z=s({activeId:Q,items:p,newIndex:G,containerId:m}),X=p!==Z.current.items,J=t({active:M,containerId:m,isDragging:P,isSorting:V,id:l,index:k,items:p,newIndex:Z.current.newIndex,previousItems:Z.current.items,previousContainerId:Z.current.containerId,transition:h,wasDragging:null!=Z.current.activeId}),ee=function(e){let{disabled:t,index:r,node:n,rect:o}=e;const[i,a]=g(null),l=s(r);return oa((()=>{if(!t&&r!==l.current&&n.current){const e=o.current;if(e){const t=Na(n.current,{ignoreTransform:!0}),r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(r.x||r.y)&&a(r)}}r!==l.current&&(l.current=r)}),[t,r,n,o]),c((()=>{i&&a(null)}),[i]),i}({disabled:!J,index:k,node:T,rect:E});return c((()=>{V&&Z.current.newIndex!==G&&(Z.current.newIndex=G),m!==Z.current.containerId&&(Z.current.containerId=m),p!==Z.current.items&&(Z.current.items=p)}),[V,G,m,p]),c((()=>{if(Q===Z.current.activeId)return;if(Q&&!Z.current.activeId)return void(Z.current.activeId=Q);const e=setTimeout((()=>{Z.current.activeId=Q}),50);return()=>clearTimeout(e)}),[Q]),{active:M,activeIndex:v,attributes:R,data:_,rect:E,index:k,newIndex:G,items:p,isOver:I,isSorting:V,isDragging:P,listeners:B,node:T,overIndex:$,over:L,setNodeRef:W,setActivatorNodeRef:N,setDroppableNodeRef:F,setDraggableNodeRef:z,transform:null!=ee?ee:q,transition:function(){if(ee||X&&Z.current.newIndex===k)return gl;if(U&&!ga(A)||!h)return;if(V||J)return ba.Transition.toString({...h,property:pl});return}()}}function vl(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const yl=[ss.Down,ss.Right,ss.Up,ss.Left],xl=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:o,droppableContainers:i,over:a,scrollableAncestors:s}}=t;if(yl.includes(e.code)){if(e.preventDefault(),!r||!n)return;const t=[];i.getEnabled().forEach((r=>{if(!r||null!=r&&r.disabled)return;const i=o.get(r.id);if(i)switch(e.code){case ss.Down:n.top<i.top&&t.push(r);break;case ss.Up:n.top>i.top&&t.push(r);break;case ss.Left:n.left>i.left&&t.push(r);break;case ss.Right:n.left<i.left&&t.push(r)}}));const l=(e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const o=Ma(t),i=[];for(const e of n){const{id:t}=e,n=r.get(t);if(n){const r=Ma(n),a=o.reduce(((e,t,n)=>{return e+(o=r[n],i=t,Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)));var o,i}),0),s=Number((a/4).toFixed(4));i.push({id:t,data:{droppableContainer:e,value:s}})}}return i.sort(Ia)})({active:r,collisionRect:n,droppableRects:o,droppableContainers:t,pointerCoordinates:null});let c=Aa(l,"id");if(c===(null==a?void 0:a.id)&&l.length>1&&(c=l[1].id),null!=c){const e=i.get(r.id),t=i.get(c),a=t?o.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&a&&e&&t){const r=Wa(l).some(((e,t)=>s[t]!==e)),o=wl(e,t),i=function(e,t){if(!vl(e)||!vl(t))return!1;if(!wl(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=r||!o?{x:0,y:0}:{x:i?n.width-a.width:0,y:i?n.height-a.height:0},u={x:a.left,y:a.top};return c.x&&c.y?u:pa(u,c)}}}};function wl(e,t){return!(!vl(e)||!vl(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}var $l=function(e,t){return $l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},$l(e,t)};var Cl=function(){return Cl=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Cl.apply(this,arguments)};var Sl="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Dl=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},kl="object"==typeof Sl&&Sl&&Sl.Object===Object&&Sl,_l="object"==typeof self&&self&&self.Object===Object&&self,Ol=kl||_l||Function("return this")(),El=Ol,Tl=function(){return El.Date.now()},Il=/\s/;var Fl=function(e){for(var t=e.length;t--&&Il.test(e.charAt(t)););return t},Ml=/^\s+/;var Al=function(e){return e?e.slice(0,Fl(e)+1).replace(Ml,""):e},jl=Ol.Symbol,Rl=jl,zl=Object.prototype,Bl=zl.hasOwnProperty,Pl=zl.toString,Ll=Rl?Rl.toStringTag:void 0;var Nl=function(e){var t=Bl.call(e,Ll),r=e[Ll];try{e[Ll]=void 0;var n=!0}catch(e){}var o=Pl.call(e);return n&&(t?e[Ll]=r:delete e[Ll]),o},Hl=Object.prototype.toString;var Wl=Nl,Vl=function(e){return Hl.call(e)},Yl=jl?jl.toStringTag:void 0;var Ul=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Yl&&Yl in Object(e)?Wl(e):Vl(e)},Kl=function(e){return null!=e&&"object"==typeof e};var ql=Al,Gl=Dl,Ql=function(e){return"symbol"==typeof e||Kl(e)&&"[object Symbol]"==Ul(e)},Zl=/^[-+]0x[0-9a-f]+$/i,Xl=/^0b[01]+$/i,Jl=/^0o[0-7]+$/i,ec=parseInt;var tc=Dl,rc=Tl,nc=function(e){if("number"==typeof e)return e;if(Ql(e))return NaN;if(Gl(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Gl(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ql(e);var r=Xl.test(e);return r||Jl.test(e)?ec(e.slice(2),r?2:8):Zl.test(e)?NaN:+e},oc=Math.max,ic=Math.min;var ac=function(e,t,r){var n,o,i,a,s,l,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||d&&e-c>=i}function g(){var e=rc();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return d?ic(r,i-(e-c)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=o=void 0,a)}function b(){var e=rc(),r=p(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),u?h(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=nc(t)||0,tc(r)&&(u=!!r.leading,i=(d="maxWait"in r)?oc(nc(r.maxWait)||0,t):i,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:m(rc())},b},sc=ac,lc=Dl;var cc=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return lc(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),sc(e,t,{leading:n,maxWait:t,trailing:o})},uc=function(e,t,r,n){switch(t){case"debounce":return ac(e,r,n);case"throttle":return cc(e,r,n);default:return e}},dc=function(e){return"function"==typeof e},fc=function(){return"undefined"==typeof window},hc=function(e){return e instanceof Element||e instanceof HTMLDocument},pc=function(e,t,r,n){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!n||t.height===a&&!r?t:(e&&dc(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!fc()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(fc())return null;if(t)return document.querySelector(t);if(n&&hc(n))return n;if(r.targetRef&&hc(r.targetRef.current))return r.targetRef.current;var o=j(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=pc(s,r.setState.bind(r),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!fc()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return dc(t)?"renderProp":dc(n)?"childFunction":v(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=y(),r.observableElement=null,fc()||(r.resizeHandler=uc(r.createResizeHandler,o,a,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}$l(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){fc()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(l,["targetRef"]);return x(e,c)}return x(e,l);case"childArray":return(e=o).map((function(e){return!!e&&x(e,l)}));default:return n.createElement(a,null)}}}(w);var gc=fc()?c:p;function mc(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,a=e.refreshOptions,l=e.handleWidth,c=void 0===l||l,u=e.handleHeight,d=void 0===u||u,f=e.targetRef,h=e.observerOptions,p=e.onResize,m=s(r),b=s(null),v=null!=f?f:b,y=s(),x=g({width:void 0,height:void 0}),w=x[0],$=x[1];return gc((function(){if(!fc()){var e=pc(p,$,c,d);y.current=uc((function(t){(c||d)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!m.current&&!fc()&&e({width:n,height:o}),m.current=!1}))}),n,i,a);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,h),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[n,i,a,c,d,p,h,v.current]),Cl({ref:v},w)}class bc extends xs{}bc.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>vc(e.target)}];function vc(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends fs{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>vc(e.target)}];var yc,xc={exports:{}};yc=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var o=e.expressions.every((function(e){var r=e.feature,n=e.modifier,o=e.value,i=t[r];if(!i)return!1;switch(r){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=u(o),i=u(i);break;case"resolution":o=c(o),i=c(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=l(o),i=l(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(n){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!r||!o&&r}))},t.parse=s;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),i=t[1],a=t[2],s=t[3]||"",l={};return l.inverse=!!i&&"not"===i.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(o);return{modifier:r[1],feature:r[2],value:t[2]}})),l}))}function l(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
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
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))r.call(i,c)&&(s[c]=i[c]);if(t){a=t(i);for(var u=0;u<a.length;u++)n.call(i,a[u])&&(s[a[u]]=i[a[u]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,r)=>{var n,o=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,r,s,l){for(var c in e)if(a(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((s||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[c](t,c,s,r,null,o)}catch(e){u=e}if(!u||u instanceof Error||n((s||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in i)){i[u.message]=!0;var f=l?l():"";n("Failed "+r+" type: "+u.message+(null!=f?f:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,r)=>{var n,o=r(/*! react-is */"./node_modules/react-is/index.js"),i=r(/*! object-assign */"./node_modules/object-assign/index.js"),a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,u="<<anonymous>>",d={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:p(c),arrayOf:function(e){return p((function(t,r,n,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new h("Invalid "+o+" `"+i+"` of type `"+v(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,n,o,i+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:p((function(t,r,n,o,i){var a=t[r];return e(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:p((function(e,t,r,n,i){var a=e[t];return o.isValidElementType(a)?null:new h("Invalid "+n+" `"+i+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,o,i){if(!(t[r]instanceof e)){var a=e.name||u;return new h("Invalid "+o+" `"+i+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:p((function(e,t,r,n,o){return b(e[t])?null:new h("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,r,n,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=v(l);if("object"!==c)return new h("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var u in l)if(s(l,u)){var d=e(l,u,n,o,i+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,o,i){for(var a=t[r],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(r)+" at index "+t+"."),c}return p((function(t,r,n,o,i){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,r,n,o,i,a);if(null==u)return null;u.data&&s(u.data,"expectedType")&&l.push(u.data.expectedType)}return new h("Invalid "+o+" `"+i+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,r,n,o,i){var s=t[r],l=v(s);if("object"!==l)return new h("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return m(n,o,i,c,y(u));var d=u(s,c,n,o,i+"."+c,a);if(d)return d}return null}))},exact:function(e){return p((function(t,r,n,o,l){var c=t[r],u=v(c);if("object"!==u)return new h("Invalid "+o+" `"+l+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");var d=i({},t[r],e);for(var f in d){var p=e[f];if(s(e,f)&&"function"!=typeof p)return m(n,o,l,f,y(p));if(!p)return new h("Invalid "+o+" `"+l+"` key `"+f+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=p(c,f,n,o,l+"."+f,a);if(g)return g}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){var r={},o=0;function i(i,s,l,c,d,f,p){if(c=c||u,f=f||l,p!==a){if(t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var m=c+":"+l;!r[m]&&o<3&&(n("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[m]=!0,o++)}}return null==s[l]?i?null===s[l]?new h("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new h("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,d,f)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function g(e){return p((function(t,r,n,o,i,a){var s=t[r];return v(s)!==e?new h("Invalid "+o+" `"+i+"` of type `"+y(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,r,n,o){return new h((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function b(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(b);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var o,i=n.call(t);if(n!==t.entries){for(;!(o=i.next()).done;)if(!b(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!b(a[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,d.checkPropTypes=l,d.resetWarningCache=l.resetWarningCache,d.PropTypes=d,d}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var h=e.type;switch(h){case c:case u:case o:case a:case i:case f:return h;default:var m=h&&h.$$typeof;switch(m){case l:case d:case g:case p:case s:return m;default:return t}}case n:return t}}}var w=c,$=u,C=l,S=s,D=r,k=d,_=o,O=g,E=p,T=n,I=a,F=i,M=f,A=!1;function j(e){return x(e)===u}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=C,t.ContextProvider=S,t.Element=D,t.ForwardRef=k,t.Fragment=_,t.Lazy=O,t.Memo=E,t.Portal=T,t.Profiler=I,t.StrictMode=F,t.Suspense=M,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),j(e)||x(e)===c},t.isConcurrentMode=j,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===d},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===g},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===i},t.isSuspense=function(e){return x(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},u=o(c,["type"]),d=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},u),f=n(n({},l),d);t.default={all:f,types:l,matchers:c,features:d}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,o.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(/*! react */"react"),i=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),c=n(r(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,a.default)(r)]=e[r],t}),{})},d=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,o.useState)(t),n=r[0],i=r[1];return(0,o.useEffect)((function(){var e=t();n!==e&&i(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,o.useContext)(c.default),r=function(){return u(e)||u(t)},n=(0,o.useState)(r),i=n[0],a=n[1];return(0,o.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,i.default)(e,t||{},!!t)},n=(0,o.useState)(r),a=n[0],s=n[1],l=d();return(0,o.useEffect)((function(){if(l){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,n),h=function(e){var t=(0,o.useState)(e.matches),r=t[0],n=t[1];return(0,o.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),p=d();return(0,o.useEffect)((function(){p&&r&&r(h)}),[h]),(0,o.useEffect)((function(){return function(){l&&l.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var wc=xc.exports=yc(o),$c={exports:{}};$c.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,c),i=r-o<0,a=t.clone().add(n+(i?-1:1),c);return+(-(n+(r-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:f,h:a,m:i,s:o,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof k||!(!e||!e[w])},C=function e(t,r,n){var o;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,o=s}return!n&&o&&(y=o),o||!n&&y},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},D=v;D.l=C,D.i=$,D.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return D},b.isValid=function(){return!(this.$d.toString()===h)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return D.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!D.u(t)||t,u=D.p(e),h=function(e,t){var o=D.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(s)},p=function(e,t){return D.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return n?h(1,0):h(31,11);case c:return n?h(1,m):h(0,m+1);case l:var y=this.$locale().weekStart||0,x=(g<y?g+7:g)-y;return h(n?b-x:b+(6-x),m);case s:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=D.p(e),u="set"+(this.$u?"UTC":""),h=(r={},r[s]=u+"Date",r[f]=u+"Date",r[c]=u+"Month",r[d]=u+"FullYear",r[a]=u+"Hours",r[i]=u+"Minutes",r[o]=u+"Seconds",r[n]=u+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[D.p(e)]()},b.add=function(n,u){var f,h=this;n=Number(n);var p=D.p(u),g=function(e){var t=S(h);return D.w(t.date(t.date()+Math.round(e*n)),h)};if(p===c)return this.set(c,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(f={},f[i]=t,f[a]=r,f[o]=e,f)[p]||1,b=this.$d.getTime()+n*m;return D.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=D.z(this),i=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,u=r.meridiem,d=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},f=function(e){return D.s(i%12||12,e,"0")},p=u||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return d(r.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(r.weekdaysMin,t.$W,l,2);case"ddd":return d(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return D.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,f,h){var p,g=this,m=D.p(f),b=S(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return D.m(g,b)};switch(m){case d:p=x()/12;break;case c:p=x();break;case u:p=x()/3;break;case l:p=(y-v)/6048e5;break;case s:p=(y-v)/864e5;break;case a:p=y/r;break;case i:p=y/t;break;case o:p=y/e;break;default:p=y}return h?p:D.a(p)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return D.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),_=k.prototype;return S.prototype=_,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){_[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,k,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var Cc=Re($c.exports),Sc={exports:{}};Sc.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[o,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(r){var n,o;n=r,o=i&&i.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],f=u&&u[0],h=u&&u[1];a[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var o=a[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(n),u=i.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),i=this.$locale(),!l&&d&&(i=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=f(t)(e),o=n.year,i=n.month,a=n.day,s=n.hours,l=n.minutes,c=n.seconds,u=n.milliseconds,d=n.zone,h=new Date,p=a||(o||i?1:h.getDate()),g=o||h.getFullYear(),m=0;o&&!i||(m=i>0?i-1:h.getMonth());var b=s||0,v=l||0,y=c||0,x=u||0;return d?new Date(Date.UTC(g,m,p,b,v,y,x+60*d.offset*1e3)):r?new Date(Date.UTC(g,m,p,b,v,y,x)):new Date(g,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){a[1]=s[p-1];var g=r.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Dc=Re(Sc.exports),kc={exports:{}};kc.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),a=r(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var _c=Re(kc.exports),Oc={exports:{}};Oc.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Ec=Re(Oc.exports),Tc={exports:{}};Tc.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Ic,Fc,Mc=Re(Tc.exports),Ac={exports:{}};Ac.exports=(Ic={year:0,month:1,day:2,hour:3,minute:4,second:5},Fc={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=Fc[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Fc[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,c=s.value,u=Ic[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(r.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var a=o&&t,s=o||t||n,l=i(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var a=i(n-=60*(o-t)*1e3,r);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(r.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],f=r(u).utcOffset(d);return f.$x.$timezone=s,f},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var jc,Rc=Re(Ac.exports);Cc.extend(_c),Cc.extend(Mc),Cc.extend(Ec),Cc.extend(Dc),Cc.extend(Rc),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Cc(t).startOf("week");return zc(r).map((e=>Bc(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Bc(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Cc(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Cc(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Cc(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?Cc(n):void 0,o?Cc(o):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(jc||(jc={}));const zc=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Bc=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Pc=[1,3,5,7,8,10,12],Lc=[4,6,9,11];var Nc,Hc,Wc,Vc;!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),a=parseInt(n);return 0==o?"1":Pc.includes(i)?Math.min(o,31).toString():Lc.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Cc(e,r);return Cc(t,r).diff(n,"minute")},e.toDayjs=e=>e?Cc(e):Cc(),e.addMinutesToTime=(e,t,r="HH:mm")=>Cc(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Cc(e).isSame(Cc(t),r)}(Nc||(Nc={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!Cc(e).isBefore(n,"day"))||!(!o||!Cc(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Cc(e).isValid())return e}return""}}(Hc||(Hc={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Wc||(Wc={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const a=n+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Vc||(Vc={}));function Yc(e){const t=s(null);return p((()=>{t.current=e}),[e]),u(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}const Uc=(e,t,r="window",n)=>{const o=s();c((()=>{o.current=t}),[t]),c((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])},Kc=()=>{const[e,t]=g(!1);return c((()=>{t(!0)}),[]),e};function qc({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const o=n.value,i=t(o),a=null!==(r=n.selectionEnd)&&void 0!==r?r:0,s=o.substring(0,a),l=t(s),c=s.length-l.length,u=Math.max(0,a-c);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(u,u)}}}}const Gc=e=>{const t=(e=>{const t=s(e),r=s();return c((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},Qc=e=>{const[t,r]=g(e),n=s(e);return[t,u((e=>{n.current=e,r(e)}),[]),n]},Zc=_.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return O`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Xc=_.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Ti["overlay-subtle"]:Ti["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=O`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=O`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=O`
                transition: none;
            `),t}}
`;var Jc;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Jc||(Jc={}));const eu=()=>{const[e,t]=g(void 0),r=z();return c((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(Jc.Change,e),r.events.emit(Jc.Ready),()=>r.events.off(Jc.Change,e)}),[r]),e},tu=({show:e=!1,rootId:r,onOverlayClick:n,children:i,backgroundOpacity:a,backgroundBlur:l=!0,disableTransition:u=!1,enableOverlayClick:d=!1,zIndex:f,id:h})=>{const[p,m]=g(null),[b,v]=g(),[y]=g((()=>Wc.generate())),x=P(),w=s(),$=s(null),C=i&&o.cloneElement(i,{ref:$}),S=h?`lifesg-ds-overlay-root-${h}`:"lifesg-ds-overlay-root",D=null!=f?f:b?99999:99998;(e=>{const t=z();c((()=>{if(!t)return;const r={zIndex:e};t.events.emit(Jc.Change,r)}),[t,e]),c((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit(Jc.Change,r)};return null==t||t.events.on(Jc.Ready,r),()=>null==t?void 0:t.events.off(Jc.Ready,r)}),[t,e])})(D),c((()=>(E(),m(_()),()=>{A(),I().length<1&&T("remove")})),[]),c((()=>{if(e){const e=O();k(e),M();const t=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(t)}{A();const e=setTimeout((()=>{I().length<1&&T("remove")}),200);return()=>clearTimeout(e)}}),[e]);const k=e=>{w.current=e,v(e)},_=()=>document&&r?document.getElementById(r):document?document.body:null,O=()=>I().length>0,E=()=>{if(!document.getElementById(nu)){const e=document.createElement("style");e.id=nu;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${ou} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${ou}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},T=e=>{const t=document.body.classList.contains(ou);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(ou):document.body.classList.add(ou)},I=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},M=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},A=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},j=e=>{var t;const r=null===(t=$.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&d&&(e.preventDefault(),n())};return p?F.createPortal(t(Zc,{id:S,"data-testid":S,$show:e,$zIndex:D,children:i&&t(L,{id:x,children:t(Xc,{"data-testid":"overlay-wrapper",$show:e,$stacked:b,$backgroundBlur:l,$disableTransition:u,onClick:j,children:C})})}),p):null},ru=e=>t(B,{children:t(tu,Object.assign({},e))}),nu="lifesg-ds-overlay-stylesheet",ou="lifesg-ds-overlay-open",iu=_.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${zi.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,au=e=>{var{id:r="modal",show:n,animationFrom:o="bottom",children:i,enableOverlayClick:a=!0,rootComponentId:s,zIndex:l,onOverlayClick:u,dismissKeyboardOnShow:d=!0}=e,f=ct(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,p]=g(),[m,b]=g();c((()=>window.visualViewport?(y(),window.visualViewport.addEventListener("resize",y),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",y)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),c((()=>{var e,t;n&&d&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]);const v=()=>{const e=.01*window.innerHeight;p(e)},y=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;p(e),b(window.visualViewport.offsetTop)}};return t(ru,{"data-testid":`${r}-overlay`,show:n,enableOverlayClick:a,onOverlayClick:u,id:r,rootId:s,zIndex:l,children:t(iu,Object.assign({show:n,animationFrom:o,"data-testid":r,verticalHeight:h,offsetTop:m},f,{children:i}))})},su=_.div`
    border-radius: ${ji.md};
    background: ${Ti.bg};
    padding: ${Ai["spacing-16"]} ${Ai["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,lu=_.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Ai["spacing-24"]};
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

        ${({$highlight:e})=>e&&O`
                background-color: ${Ti["bg-hover-neutral"]};
            `}
    }
`,cu=o.forwardRef(((e,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,s=ct(e,["children","focusHighlight","focusOutline","type"]);return t(lu,Object.assign({ref:r,$outline:i,$highlight:o,type:a},s,{children:n}))})),uu=_.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Ti.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${zi.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,du=_(cu)`
    position: absolute;
    top: var(--close-button-top-inset, ${Ai["spacing-16"]});
    right: var(--close-button-right-inset, ${Ai["spacing-16"]});
    padding: 0;
    color: ${Ti.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${zi.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Ai["spacing-20"]});
    }
`,fu=r=>{var{id:n="modal-box",children:o,onClose:i,showCloseButton:a=!0}=r,s=ct(r,["id","children","onClose","showCloseButton"]);return e(uu,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&t(du,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:t(te,{})}),o]}))},hu=e=>{const{textSize:t}=e||{};return O`
        // Text styling
        ${t&&Ii[`${t}-regular`]}

        strong {
            font-weight: ${Ii.Spec["weight-semibold"]};
            ${t&&Ii[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Ii.Spec["weight-semibold"]};
            ${t&&Ii[`${t}-semibold`]}
            color: ${Ti.hyperlink};
            text-decoration: none;

            svg {
                color: ${Ti["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Ti["hyperlink-hover"]};

                svg {
                    color: ${Ti["icon-hover"]};
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
    `},pu=_.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,gu=_((e=>{var{children:r}=e,n=ct(e,["children"]);const o=n["data-testid"]||"card";return t(su,Object.assign({},n,{"data-testid":o,children:"string"==typeof r?t(Hi.BodyBL,{children:r}):r}))}))`
    color: ${Ti.text};
    ${hu({textSize:"body-md"})}

    ${zi.MaxWidth.sm} {
        display: none;
    }
`,mu=_(fu)`
    padding: 3.5rem 1.25rem 2.5rem;
`,bu=_.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Ti.text};
    ${hu({textSize:"body-md"})}
`,vu=n=>{var{children:o,visible:i,onMobileClose:a}=n,s=ct(n,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=E(),u=Ri["sm-max"]({theme:c}),d=wc.useMediaQuery({maxWidth:u}),f=()=>{a&&a()},h=()=>"string"==typeof o?t(Hi.BodyMD,{children:o}):o;return e(r,{children:[i&&t(pu,Object.assign({"data-testid":l},s,{children:t(gu,{children:h()})})),d&&t(au,{show:null!=i&&i,onOverlayClick:f,children:t(mu,{onClose:f,children:t(bu,{children:h()})})})]})},yu=_.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,xu=n=>{var o,i,{children:a,popoverContent:l,trigger:c="click",position:u="top",zIndex:d,rootNode:f,customOffset:h,delay:p,onPopoverAppear:m,onPopoverDismiss:b}=n,v=ct(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[y,x]=g(!1),w=s(null),$=s(null),C=E(),S=Ri["sm-max"]({theme:C}),D=wc.useMediaQuery({maxWidth:S}),{refs:k,floatingStyles:_,context:O}=N({open:y,placement:u,whileElementsMounted:H,middleware:[W(null!=h?h:16),V(),Y({limiter:U()})],onOpenChange:e=>{x(e),y!==e&&B(e)}}),T=eu(),I=D?"click":c,F=K(O,{ignoreMouse:"hover"===I}),M=q(O),A=G(O,{enabled:"hover"===I,delay:{open:null!==(o=null==p?void 0:p.open)&&void 0!==o?o:0,close:null!==(i=null==p?void 0:p.close)&&void 0!==i?i:500}}),{getReferenceProps:j,getFloatingProps:R}=Q([F,M,A]),z=()=>{x(!1),B(!1)},B=e=>{e&&m&&m(),!e&&b&&b()};return e(r,{children:[t(yu,Object.assign({ref:e=>{w.current=e,k.setReference(e)}},j({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),v,{children:a})),y&&t(Z,{root:f,children:t(X,{context:O,children:t("div",Object.assign({ref:e=>{$.current=e,k.setFloating(e)},style:Object.assign(Object.assign({},_),{outline:"none",zIndex:null!=d?d:T})},R(),{children:"function"==typeof l?l():t(vu,{visible:!0,onMobileClose:z,children:l})}))})})]})},wu=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},$u=_.span`
    color: ${Ti["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>wu(e)}

    &:hover,
    &:focus-visible {
        color: ${Ti["text-hover"]};
        ${({$hoverStyle:e})=>wu(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Cu=_.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,Su=r=>{var{ariaLabel:n,content:o,icon:i,underlineStyle:a="default",underlineHoverStyle:s="default"}=r,l=ct(r,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const c=!!o;return t(xu,Object.assign({},l,{children:e($u,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,"aria-label":null!=n?n:c?void 0:"More info",children:[o,i&&t(Cu,{$standalone:!c,children:i})]})}))},Du=_.div`
    padding-left: ${Ai["spacing-4"]};
    display: inline;
`,ku=({addon:e,rootNode:r})=>{const{content:n,type:o,icon:i,id:a,zIndex:s,"data-testid":l}=e;return t(Du,{children:t(Su,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=i?i:t(R,{"data-testid":`${o}-icon`}),ariaLabel:"More info"})})},_u=_.label`
    color: ${Ti["text-subtle"]};
    margin-bottom: ${Ai["spacing-8"]};
    display: inline-block;

    ${Ii["form-label"]}
    ${hu()}
    font-weight: ${Ii.Spec["weight-semibold"]};
`,Ou=_.p`
    ${Ii["body-sm-semibold"]}
    color: ${Ti["text-error"]};
    margin-top: ${Ai["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`,Eu=_.span`
    ${Ii["form-description"]}
    color: ${Ti["text-subtler"]};
    display: block;
`,Tu=r=>{var{children:n,addon:o,subtitle:i,"data-testid":a}=r,s=ct(r,["children","addon","subtitle","data-testid"]);return e(_u,Object.assign({},s,{children:[n,o&&o.type&&("popover"===(null==o?void 0:o.type)?t(ku,{addon:o}):null),"string"==typeof i?t(Eu,Object.assign({"data-testid":a?`${a}-subtitle`:"subtitle"},s,{children:i})):i]}))},Iu=_.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:n,$xlSpan:o,$lgStart:i,$lgSpan:a,$mdStart:s,$mdSpan:l,$smStart:c,$smSpan:u,$xsStart:d,$xsSpan:f,$xxsStart:h,$xxsSpan:p}=e;return O`
            grid-column: ${t||"auto"} / span ${r||1};

            ${di.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${o||1};
            }

            ${di.MaxWidth.lg} {
                grid-column: ${i||"auto"} / span ${a||1};
            }

            ${di.MaxWidth.md} {
                grid-column: ${s||"auto"} / span ${l||1};
            }

            ${di.MaxWidth.sm} {
                grid-column: ${c||"auto"} / span ${u||1};
            }

            ${di.MaxWidth.xs} {
                grid-column: ${d||"auto"} / span ${f||1};
            }

            ${di.MaxWidth.xxs} {
                grid-column: ${h||"auto"} / span ${p||1};
            }
        `}}
`,Fu=o.forwardRef(((e,r)=>{const n=E(),{xxlCols:o,xlCols:i,lgCols:a,mdCols:s,smCols:l,xsCols:c,xxsCols:u}=e,d=ct(e,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),f=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return t(Iu,Object.assign({ref:r},(()=>{const e=ci["xxl-column"]({theme:n}),t=ci["xl-column"]({theme:n}),r=ci["lg-column"]({theme:n}),d=ci["md-column"]({theme:n}),h=ci["sm-column"]({theme:n}),p=ci["xs-column"]({theme:n}),g=ci["xxs-column"]({theme:n}),m=f(o||i||a||s||l||c||u,e,"xxl"),b=f(i||a||s||l||c||u,t,"xl"),v=f(a||s||l||c||u,r,"lg"),y=f(s||l||c||u,d,"md"),x=f(l||c||u,h,"sm"),w=f(c||u,p,"xs"),$=f(u,g,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),d))})),Mu={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Au=e=>Object.keys(Mu).reduce(((t,r)=>{const n=Mu[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),ju=Au("max-width"),Ru=(Au("min-width"),_.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return O`
            grid-column: ${t||"auto"} / span ${r||1};

            ${ju.tablet} {
                grid-column: ${n||"auto"} / span
                    ${o||1};
            }

            ${ju.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`),zu=o.forwardRef(((e,r)=>{const{mobileCols:n,tabletCols:o,desktopCols:i}=e,a=ct(e,["mobileCols","tabletCols","desktopCols"]);return t(Ru,Object.assign({ref:r},(()=>{const e=o||n,t=n,r=Bu(i||o||n),a=Bu(e),s=Bu(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),Bu=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,o=t<=r?r:t;let i;return i=o===n?1:o-n,{start:n,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Pu=O`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${Ai["spacing-32"]};
    }
`,Lu=_.div`
    ${Pu}
`,Nu=_(Fu)`
    ${Pu}
`,Hu=_(zu)`
    ${Pu}
`,Wu=({label:r,errorMessage:n,id:o,disabled:i,children:a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,"data-error-testid":v})=>{const y=!s&&(l||c||u)?"v2-grid":!s&&(d||f||h||p||g||m||b)?"grid":s||"flex",w=()=>v||(o?`${o}-error-message`:"error-message"),C=()=>!!n;const S=(e=>{switch(e){case"v2-grid":return Hu;case"grid":return Nu;case"flex":return Lu}})(y);return e(S,Object.assign({},(e=>{switch(e){case"v2-grid":return{mobileCols:l,tabletCols:c,desktopCols:u};case"grid":return{xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b};case"flex":return}})(y),{children:[r&&t(Tu,"string"==typeof r?{htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",disabled:i,children:r}:Object.assign({htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",disabled:i},r)),(()=>{const e={"aria-invalid":C(),"aria-describedby":C()&&w()};return $.map(a,(t=>x(t,e)))})(),n&&t(Ou,{id:w(),tabIndex:0,"data-testid":w(),children:n})]}))},Vu=e=>"small"===e?2.5:3,Yu=_.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Vu(e.$variant);return O`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,Uu=O`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Ai["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Vu(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${ji.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Ti["border-focus"]};
    }
`,Ku=_.button`
    ${Uu}
    cursor: pointer;
`,qu=_.div`
    ${Uu}
`,Gu=T`
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
`,Qu=_.div`
    position: relative;
    border: ${Mi["width-010"]} ${Mi.solid} ${Ti.border};
    border-radius: ${ji.sm};
    background: ${Ti.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${Ti["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Ti["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?O`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:O`
                animation: ${Gu} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?O`
                background: ${Ti["bg-disabled"]};

                ${Ku} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Ti.border};
                    box-shadow: none;
                }
            `:e.$readOnly?O`
                border: none;
                background: transparent !important;

                ${Ku} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?O`
                border-color: ${Ti["border-error"]};

                :focus-within {
                    border-color: ${Ti["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Ti["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`;_.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${Fi["duration-250"]} ${Fi["ease-default"]};
    margin-left: ${Ai["spacing-16"]};
`,_(re)`
    color: ${Ti.icon};
`;const Zu=_.div`
    height: 1px;
    background: ${Ti.border};
    margin: 0 ${Ai["spacing-8"]};
`,Xu=_.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return O`
                color: ${Ti["text-disabled"]};
            `}}
`,Ju=_.div`
    ${e=>"small"===e.$variant?Ii["body-md-regular"]:Ii["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return O`
                    ${Bi(1)}
                `}}
    overflow: hidden;
`,ed=_(Ju)`
    color: ${Ti["text-subtler"]};
`,td=({children:e,show:r,error:n,disabled:o,testId:i,onBlur:a,readOnly:l,className:c,variant:u})=>{const d=s(null);return Uc("mousedown",(function(e){if(!o){if(d&&d.current.contains(e.target))return;r&&a()}}),"document"),t(Yu,{className:c,$variant:u,children:t(Qu,{ref:d,error:n&&!r,disabled:o,$readOnly:l,expanded:r,"data-testid":i,children:e})})},rd=_.div`
    display: flex;
    flex-direction: column;
`,nd=e=>"right"===e?"bottom-end":"bottom-start",od=({enabled:n,isOpen:o,onOpen:i,onClose:a,onDismiss:l,renderElement:c,renderDropdown:u,customZIndex:d,clickToToggle:f=!1,offset:h=0,alignment:p="left",fitAvailableHeight:g})=>{var m;const b=E(),v=Ri["sm-max"]({theme:b}),y=s(null),x=s(null),{width:w=0}=mc({targetRef:y,handleHeight:!1}),$={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<v;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:C,floatingStyles:S,context:D}=N({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==l||l():e&&!o?null==i||i():!e&&o&&(null==a||a(r))},whileElementsMounted:H,placement:nd(p),middleware:[W(h),V(),Y({limiter:U()}),J({apply({availableHeight:e}){x.current&&Object.assign(x.current.style,{maxHeight:g?`${e}px`:void 0,overflowY:g?"hidden":void 0})}}),$]}),k=eu(),{isMounted:_,styles:O}=ee(D,{initial:{opacity:0},open:{opacity:1},duration:300}),T=K(D,{enabled:n,toggle:f}),I=q(D,{enabled:n}),{getReferenceProps:F,getFloatingProps:M}=Q([T,I]);return e(r,{children:[t("div",Object.assign({ref:e=>{y.current=e,C.setReference(e)}},F(),{children:c()})),_&&t(Z,{children:t(X,{context:D,modal:!1,initialFocus:x,returnFocus:!1,children:t("div",Object.assign({ref:C.setFloating,style:Object.assign(Object.assign({},S),{zIndex:null!==(m=null!=d?d:k)&&void 0!==m?m:50})},M(),{children:t(rd,{ref:x,style:Object.assign({},O),inert:O.opacity<1?"":void 0,children:u({elementWidth:w})})}))})})]})},id=_.div`
    --vertical-inset: ${Ai["spacing-24"]};
    --horizontal-inset: ${Ai["spacing-20"]};
    --header-bottom-spacing: ${Ai["spacing-4"]};

    border: ${Mi["width-010"]} ${Mi.solid} ${Ti.border};
    border-radius: ${ji.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${zi.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,ad=_.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,sd=T`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ld=_.div`
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
    animation: ${sd} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,cd=_(ld)`
    animation-delay: -0.45s;
`,ud=_(ld)`
    animation-delay: -0.3s;
`,dd=_(ld)`
    animation-delay: -0.15s;
`,fd=({color:r,className:n,size:o})=>e(ad,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[t(ld,{id:"inner1"}),t(cd,{id:"inner2"}),t(ud,{id:"inner3"}),t(dd,{id:"inner4"})]}),hd={collections:{default:{Button:{"button-radius":ki.sm,"button-default-colour-bg":ri["bg-primary"],"button-default-colour-bg-hover":ri["bg-primary-hover"],"button-default-colour-text":ri["text-inverse"],"button-secondary-colour-border":ri["border-primary"],"button-secondary-colour-text":ri["text-primary"],"button-light-colour-text":ri["text-primary"],"button-link-colour-text":ri["text-primary"]}},pa:{Button:{"button-radius":ki.full,"button-default-colour-bg":ri["bg-primary"],"button-default-colour-bg-hover":ri["bg-primary-hover"],"button-default-colour-text":ri["text-inverse"],"button-secondary-colour-border":ri["border-primary"],"button-secondary-colour-text":ri["text-primary"],"button-light-colour-text":ri["text-primary"],"button-link-colour-text":ri["text-primary"]}}},defaultValue:"default"},pd=(e,t)=>r=>{var n,o;const i=r.theme,a=Yo(hd,null==i?void 0:i.componentScheme);return gd((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[t])||a[e][t],r)},gd=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},md=pd("Button","button-radius"),bd=pd("Button","button-default-colour-bg"),vd=pd("Button","button-default-colour-bg-hover"),yd=pd("Button","button-default-colour-text"),xd=pd("Button","button-secondary-colour-border"),wd=pd("Button","button-secondary-colour-text"),$d=pd("Button","button-light-colour-text"),Cd=pd("Button","button-link-colour-text"),Sd=_.button`
    padding: ${Ai["spacing-8"]} ${Ai["spacing-16"]};
    min-width: 4rem;
    border: ${Mi["width-010"]} ${Mi.solid} transparent;
    transition: all ${Fi["duration-250"]} ${Fi["ease-default"]};
    border-radius: ${md};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return O`
                    background-color: ${Ti.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Ti["border-error-strong"]:xd};

                    color: ${e.$buttonIsDanger?Ti["text-error"]:wd};

                    &:hover,
                    &:active {
                        background-color: ${Ti["bg-hover-neutral"]};
                    }
                `;case"light":return O`
                    background-color: ${Ti.bg};
                    border-color: ${Ti.border};

                    color: ${e.$buttonIsDanger?Ti["text-error"]:$d};

                    &:hover,
                    &:active {
                        background-color: ${Ti["bg-hover-neutral"]};
                    }
                `;case"link":return O`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Ti["text-error"]:Cd};
                    &:hover,
                    &:active {
                        background-color: ${Ti["bg-hover-neutral"]};
                    }
                `;case"disabled":return O`
                    background-color: ${Ti["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ti["text-disabled"]};
                `;default:return O`
                    background-color: ${e.$buttonIsDanger?Ti["bg-error-strong"]:bd};};

                    ${zi.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${yd}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Ti["bg-error-strong-hover"]:vd}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return O`
                    height: 2.5rem;
                    ${Ii["body-md-semibold"]}

                    ${zi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return O`
                    height: 4rem;
                    ${Ii["heading-md-semibold"]}

                    ${zi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return O`
                    height: 3rem;
                    ${Ii["heading-xs-semibold"]}

                    ${zi.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Dd=_(fd)`
    margin-right: 0.5rem;
`,kd=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=ct(r,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Sd,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(Dd,{}),t("span",{children:o})]}))};kd.displayName="Button.Default";const _d=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=ct(r,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Sd,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(Dd,{}),t("span",{children:o})]}))};_d.displayName="Button.Small";const Od=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=ct(r,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Sd,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(Dd,{}),t("span",{children:o})]}))};Od.displayName="Button.Large";const Ed={Default:o.forwardRef(kd),Small:o.forwardRef(_d),Large:o.forwardRef(Od)},Td=O`
    color: ${Ti.icon};
    height: 1rem;
    width: 1rem;
`,Id=_(ne)`
    ${Td}
`,Fd=_(oe)`
    ${Td}
`,Md=_(re)`
    ${Td}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Ad=_.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,jd=_.div`
    display: flex;
    flex: 1;
    position: relative;
`,Rd=_.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,zd=_.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Ti.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return O`
                display: none;
            `}}
`,Bd=_.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Pd=_.div`
    display: flex;
`,Ld=_.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?O`
                display: none;
            `:e.$expanded?O`
                ${Md} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Nd=_.span`
    ${Ii["body-md-regular"]}
    color: ${Ti.text};
`,Hd=_.div`
    display: flex;
`,Wd=_(cu)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Vd=_.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Yd=_(Ed.Small)`
    flex: 1;
`,Ud=_.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,Kd=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${ji.md};
    margin: 0 0.5rem;
    transition: ${Fi["duration-150"]} ${Fi["ease-default"]};

    // default styles
    ${Ii["body-md-regular"]}
    border-radius: ${ji.md};
    border: ${Mi["width-010"]} ${Mi.solid} transparent;
    background-clip: border-box;
    color: ${Ti.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?O`
                cursor: pointer;
            `:e.$disabledDisplay?O`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?O`
                background: ${Ti["bg-selected"]};
                border-color: ${Ti["border-selected"]};
                color: ${Ti["text-selected"]};
                font-weight: ${Ii.Spec["weight-semibold"]};

                ${t&&O`
                    &:hover {
                        background: ${Ti["bg-selected-hover"]};
                        border-color: ${Ti["border-selected-hover"]};
                        color: ${Ti["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?O`
                color: ${Ti["text-primary"]};
                font-weight: ${Ii.Spec["weight-semibold"]};
            `:r?O`
                color: ${Ti["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?O`
                &:hover {
                    background: ${Ti["bg-selected-hover"]};
                    border-color: ${Ti["border-selected-hover"]};
                    color: ${Ti["text-selected-hover"]};
                    font-weight: ${Ii.Spec["weight-semibold"]};
                }
            `:O`
            &:hover {
                background: ${Ti["bg-hover"]};
                color: ${Ti["text-hover"]};
                font-weight: ${Ii.Spec["weight-semibold"]};
            }
        `}}
`,qd=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:u,onMonthSelect:d})=>{const f=a((()=>jc.generateMonths(Cc(e))),[e]),h=e=>{const t="start"===r&&o&&e.isAfter(o,"month")&&s,i="end"===r&&n&&e.isBefore(n,"month")&&s;return!(!t&&!i)},p=e=>{const t=e.format("MMMM"),r=(n=e,!jc.isWithinRange(n,l?Cc(l):void 0,c?Cc(c):void 0,"month"));var n;const o=i.isSame(e,"month")?"selected-month":Cc().isSame(e,"month")?"current-month":"default";return{disabledDisplay:r||h(e),interactive:!r||u,month:t,variant:o}};return f.length?t(Ud,{children:f.map((e=>{const{disabledDisplay:r,interactive:n,variant:o,month:i}=p(e);return t(Kd,{$variant:o,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||d(e)})(e,!n),children:i},i)}))}):null},Gd=_.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Qd=_.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Fi["duration-150"]} ${Fi["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${Ii["body-md-regular"]}
    border-radius: ${ji.md};
    border: ${Mi["width-010"]} ${Mi.solid} transparent;
    background-clip: border-box;
    color: ${Ti.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?O`
                cursor: pointer;
            `:t?O`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?O`
                background: ${Ti["bg-selected"]};
                border-color: ${Ti["border-selected"]};
                color: ${Ti["text-selected"]};
                font-weight: ${Ii.Spec["weight-semibold"]};

                ${t&&O`
                    &:hover {
                        background: ${Ti["bg-selected-hover"]};
                        border-color: ${Ti["border-selected-hover"]};
                        color: ${Ti["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?O`
                color: ${Ti["text-primary"]};
                font-weight: ${Ii.Spec["weight-semibold"]};
            `:"other-decade"===e||r?O`
                color: ${Ti["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?O`
                &:hover {
                    background: ${Ti["bg-selected-hover"]};
                    border-color: ${Ti["border-selected-hover"]};
                    color: ${Ti["text-selected-hover"]};
                    font-weight: ${Ii.Spec["weight-semibold"]};
                }
            `:O`
            &:hover {
                background: ${Ti["bg-hover"]};
                color: ${Ti["text-hover"]};
                font-weight: ${Ii.Spec["weight-semibold"]};
            }
        `}}
`,Zd=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:u,onYearSelect:d})=>{const f=a((()=>jc.generateDecadeOfYears(Cc(e))),[e]),h=e=>{const t="start"===r&&o&&e.isAfter(o,"year")&&s,i="end"===r&&n&&e.isBefore(n,"year")&&s;return!(!t&&!i)},p=e=>{const t=[0,11].includes(f.indexOf(e)),r=e.year(),n=(o=e,!jc.isWithinRange(o,l?Cc(l):void 0,c?Cc(c):void 0,"year"));var o;const a=t?"other-decade":i.isSame(e,"year")?"selected-year":Cc().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||h(e),interactive:!n||u,year:r,variant:a}};return f.length?t(Gd,{children:f.map((e=>{const{disabledDisplay:r,interactive:n,variant:o,year:i}=p(e);return t(Qd,{$variant:o,$disabledDisplay:r,$interactive:!!n,onClick:()=>((e,t)=>{t||d(e)})(e,!n),children:i},i)}))}):null},Xd=o.forwardRef(((n,o)=>{var{children:i,initialCalendarDate:a,minDate:l,maxDate:u,currentFocus:d,selectedStartDate:h,selectedEndDate:p,selectWithinRange:m,dynamicHeight:b=!1,allowDisabledSelection:v,onCalendarDateChange:y,withButton:x,doneButtonDisabled:w,onDismiss:$,showNavigationHeader:C=!0,getLeftArrowDate:S,getRightArrowDate:D,isLeftArrowDisabled:k,isRightArrowDisabled:_,getMonthHeaderLabel:O,getYearHeaderLabel:E}=n,T=ct(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[I,F]=g(Nc.toDayjs(a)),[M,A]=g(Nc.toDayjs(a)),[j,R]=g("default"),z=s(null),B=s(null),P=s(null);f(o,(()=>({defaultView(){R("default")},resetView(){const e=Nc.toDayjs(a);F(e),A(e),R("default")},setCalendarDate(e){const t=Nc.toDayjs(e);F(t),A(t)}}))),c((()=>{const e=Nc.toDayjs(a);F(e),A(e)}),[a]),c((()=>{U(M)}),[M]);const L=()=>{var e;"month-options"!==j?(R("month-options"),null===(e=P.current)||void 0===e||e.focus()):(R("default"),F(M))},N=()=>{"default"!==j?(R("default"),F(M)):R("year-options")},H=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=S?S(I):I.subtract(1,"month");switch(j){case"default":A(t),F(t);break;case"month-options":F((e=>e.subtract(1,"year")));break;case"year-options":F((e=>e.subtract(10,"year")))}},W=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=D?D(I):I.add(1,"month");switch(j){case"default":A(t),F(t);break;case"month-options":F((e=>e.add(1,"year")));break;case"year-options":F((e=>e.add(10,"year")))}},V=e=>{F(e),A(e),x||R("default")},Y=()=>{const e=Nc.toDayjs(a);F(e),A(e),"default"===j?K("reset"):R("default")},U=e=>{y&&y(e)},K=e=>{$&&$(e)},q=()=>{if(!l||v)return!1;const e=Cc(l);return"month-options"===j?!jc.isPreviousYearWithinRange(I,e):"year-options"===j?!jc.isPreviousDecadeWithinRange(I,e):k?k(I):!jc.isPreviousMonthWithinRange(I,e)},G=()=>{if(!u||v)return!1;const e=Cc(u);return"month-options"===j?!jc.isNextYearWithinRange(I,e):"year-options"===j?!jc.isNextDecadeWithinRange(I,e):_?_(I):!jc.isNextMonthWithinRange(I,e)},Q=()=>{if("year-options"===j){const{beginDecade:e,endDecade:t}=jc.getStartEndDecade(I);return`${e} to ${t}`}return E?E(I):I.format("YYYY")},Z=()=>{const n=O?O(I):I.format("MMM");return e(r,{children:[e(Ld,{type:"button",tabIndex:-1,$expanded:"month-options"===j,$visible:"default"===j,id:"month-dropdown",onClick:L,children:[t(Nd,{children:n}),t(Md,{})]}),e(Ld,{type:"button",tabIndex:-1,$expanded:"default"!==j,id:"year-dropdown",onClick:N,children:[t(Nd,{children:Q()}),t(Md,{})]})]})},X=()=>{switch(j){case"month-options":return t(qd,{calendarDate:I,currentFocus:d,minDate:l,maxDate:u,selectedStartDate:h,selectedEndDate:p,viewCalendarDate:M,isNewSelection:!!m,onMonthSelect:V,allowDisabledSelection:v});case"year-options":return t(Zd,{calendarDate:I,currentFocus:d,minDate:l,maxDate:u,selectedStartDate:h,selectedEndDate:p,viewCalendarDate:M,isNewSelection:!!m,onYearSelect:V,allowDisabledSelection:v});default:return null}};return e(Ad,Object.assign({ref:P,"data-id":"calendar-container","data-testid":"calendar-container"},T,{children:[C&&e(Bd,{"data-id":"calendar-header","data-testid":"calendar-header",children:[t(Pd,{children:Z()}),e(Hd,{children:[t(Wd,{"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:H,children:t(Id,{})}),t(Wd,{"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:W,children:t(Fd,{})})]})]}),t(jd,{children:(()=>{const n="function"==typeof i?i({calendarDate:M,currentView:j}):i;return e(r,b?{children:["default"===j&&n,X()]}:{children:[t(Rd,{children:n}),t(zd,{$visible:"default"!==j,children:X()})]})})()}),(()=>{if(!x)return;const r=!!("default"===j)&&w;return e(Vd,{children:[t(Yd,{ref:B,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Y,children:"Cancel"}),t(Yd,{"data-testid":"done-button",ref:z,type:"button",onClick:()=>{r||(F(M),"default"===j?K("confirmed"):R("default"))},disabled:r,children:"Done"})]})})()]}))})),Jd=_.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,ef=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${Ii["body-sm-semibold"]};
    color: ${Ti.text};
`,tf=_.div`
    grid-column: 1 / -1;
    display: flex;
`,rf=e=>{let t=Ti.bg,r="transparent";switch(e.$type){case"hover-subtle":t=Ti["bg-hover"],r=Ti["bg-hover"];break;case"hover":t=Ti["bg-hover-strong"],r=Ti["bg-hover-strong"];break;case"hover-outline":t=Ti["bg-hover-subtle"],r=Ti["border-hover"];break;case"selected-outline":t=Ti["bg-selected"],r=Ti["border-selected"];break;case"selected-outline-subtle":t=Ti["bg-selected"],r=Ti["border-selected-subtle"];break;case"selected-hover":t=Ti["bg-selected-hover"];break;case"selected-hover-outline":t=Ti["bg-selected-hover"],r=Ti["border-selected-hover"]}return{color:t,borderColor:r}},nf=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,of=_.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Fi["duration-150"]} ${Fi["ease-default"]};
    border: ${Mi["width-010"]} ${Mi.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=rf(e);return O`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,af=_(of)`
    left: 0;
`,sf=_(of)`
    right: 0;
`,lf=_.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Fi["duration-150"]} ${Fi["ease-default"]};

    border: ${Mi["width-010"]} ${Mi.solid} transparent;
    border-radius: ${ji.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=rf(e);return O`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,cf=_(lf)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,uf=_(lf)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,df=_.div`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Ii["body-md-regular"]}
    transition: ${Fi["duration-150"]} ${Fi["ease-default"]};

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"hidden"===r?O`
                    visibility: hidden;
                `:O`
                color: ${Ti["text-disabled-subtlest"]};
            `;switch(r){case"selected":return O`
                    font-weight: ${Ii.Spec["weight-semibold"]};
                    color: ${Ti["text-selected"]};
                `;case"selected-hover":return O`
                    font-weight: ${Ii.Spec["weight-semibold"]};
                    color: ${Ti["text-selected-hover"]};
                `;case"current":return O`
                    font-weight: ${Ii.Spec["weight-semibold"]};
                    color: ${Ti["text-primary"]};
                `;case"hover":return O`
                    font-weight: ${Ii.Spec["weight-semibold"]};
                    color: ${Ti["text-hover"]};
                `;case"unavailable":return O`
                    color: ${Ti["text-disabled-subtlest"]};
                `;case"hidden":return O`
                    visibility: hidden;
                `;default:return O`
                    color: ${Ti.text};
                `}}}
`,ff=_.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,hf=({bgLeft:r,bgRight:n,circleLeft:o,circleRight:i,labelType:a,disabled:s,interactive:l,currentDateIndicator:c,date:u,onSelect:d,onHover:f,onHoverEnd:h})=>{const p=Cc().isSame(u,"day");return e(nf,{children:[t(af,{$type:r}),t(cf,{$type:o}),t(sf,{$type:n}),t(uf,{$type:i}),e(df,{$type:a,$disabled:s,$interactive:l,onClick:()=>{d(u)},onMouseEnter:()=>{f(u)},onMouseLeave:()=>{h&&h(u)},children:[u.date(),c&&p&&t(ff,{$disabled:s})]})]})},pf=({date:e,calendarDate:r,startDate:n,endDate:o,currentFocus:i,hoverDate:a,minDate:s,maxDate:l,disabledDates:c,allowDisabledSelection:u,isNewSelection:d,showActiveMonthDaysOnly:f,onSelect:h,onHover:p})=>{const g=jc.isDisabledDay(e,c,s,l),m=!g||u,b=()=>{const e=Cc(a),t=e.isBefore(o,"day"),r=e.isAfter(n,"day");let s,l,c,u;return"start"===i&&o&&t&&(n&&r?(c=a,u=o):(s=a,l=n||o)),"end"===i&&n&&r&&(o&&t?(c=n,u=a):(s=o||n,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:u}},v={date:e,calendarDate:r,disabled:g,interactive:m,currentDateIndicator:!0,onSelect:()=>{h(e,!m)},onHover:()=>{p(e.format("YYYY-MM-DD"),!m)}};return t(hf,Object.assign({},v,(()=>{const t={};if(r.month()!==e.month())t.labelType=f?"hidden":"unavailable";else if(Cc().isSame(e,"day")&&!g)t.labelType="current";else if(d){const r="end"===i&&n&&e.isBefore(n),a="start"===i&&o&&e.isAfter(o);(r||a)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(n,"day"),a=e.isSame(o,"day");return f&&r.month()!==e.month()?(t.labelType="hidden",t):((n&&i||o&&a)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),n&&o&&e.isBetween(n,o,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected-outline-subtle"),a||(t.bgRight="selected-outline-subtle")),t)})(),(()=>{if(!a)return{};const t={},r=e.isSame(a,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:c}=b();if(r){const r=e.isSame(n,"day"),i=e.isSame(o,"day");r||i?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):(t.labelType="hover",t.circleLeft="hover",t.circleRight="hover")}if(i&&s){if(e.isBetween(i,s,"day","[]")){const r=e.isSame(i,"day"),n=e.isSame(s,"day");r||(t.labelType="hover",t.bgLeft="hover-outline"),n||(t.labelType="hover",t.bgRight="hover-outline")}return t}return l&&c?(e.isBetween(l,c,"day","[]")&&r&&(t.labelType="selected-hover",t.circleLeft="selected-hover",t.circleRight="selected-hover"),t):t})()))};Cc.extend(_c);const gf=({calendarDate:r,currentFocus:n,disabledDates:o,selectedStartDate:i,selectedEndDate:s,onSelect:l,onHover:c,isNewSelection:u,minDate:d,maxDate:f,allowDisabledSelection:h,showActiveMonthDaysOnly:p})=>{const m=a((()=>jc.generateDays(r)),[r]),[b,v]=g(""),y=(e,t)=>{t&&!h||l(e)},x=(e,t)=>{t&&!h||(v(e),c(e))},w=()=>{v(""),c("")};return e(Jd,{"data-testid":"calendar-content",children:[m[0].map(((e,r)=>t(ef,{children:Cc(e).format("ddd")},`week-day-${r}`))),m.map(((e,a)=>t(tf,{onMouseLeave:w,children:e.map(((e,a)=>t(pf,{date:e,calendarDate:r,startDate:i,endDate:s,hoverDate:b,currentFocus:n,minDate:d,maxDate:f,disabledDates:o,allowDisabledSelection:h,isNewSelection:u,showActiveMonthDaysOnly:p,onSelect:y,onHover:x},`day-${a}`)))},a)))]})},mf=({date:e,calendarDate:r,selectedDate:n,hoverDate:o,minDate:i,maxDate:a,disabledDates:s,allowDisabledSelection:l,numberOfDays:c=1,onSelect:u,onHover:d})=>{const f=jc.isDisabledDay(e,s,i,a),h=!f||l,{start:p,end:g}=n?jc.getFixedRangeStartEnd(Nc.toDayjs(n),c):{start:void 0,end:void 0},{start:m,end:b}=o?jc.getFixedRangeStartEnd(Nc.toDayjs(o),c):{start:void 0,end:void 0},v=!!n&&e.isBetween(p,g,"day","[]"),y=!!o&&e.isBetween(m,b,"day","[]"),x=v&&e.isSame(p,"day")||y&&e.isSame(m,"day"),w=v&&e.isSame(g,"day")||y&&e.isSame(b,"day"),$=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},C={date:e,calendarDate:r,disabled:f,interactive:h,currentDateIndicator:!0,onSelect:()=>{u(e,!h)},onHover:()=>{d(e.format("YYYY-MM-DD"),!h)}};return t(hf,Object.assign({},C,(()=>{const t={};return v||y?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":Cc().isSame(e,"day")&&!f&&(t.labelType="current"),t})(),(()=>{const t={},r=e.format("YYYY-MM-DD");return y&&$(t,"hover",r===m,r===b),v&&$(t,"selected-outline",r===p,r===g),v&&y&&($(t,"selected-hover-outline",x,w),r===m&&r!==p&&(t.circleLeft="selected-hover")),t})()))},bf=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:u,numberOfDays:d})=>{const f=a((()=>jc.generateDays(r)),[r]),[h,p]=g(""),m=(e,t)=>{t&&!u||(i(e),e&&!Cc(e).isSame(e,"month")&&p(""))},b=(e,t)=>{t&&!u||(p(e),s(e))},v=()=>{p(""),s("")};return e(Jd,{"data-testid":"calendar-content",children:[f[0].map(((e,r)=>t(ef,{children:Cc(e).format("ddd")},`week-day-${r}`))),f.map(((e,i)=>t(tf,{onMouseLeave:v,children:e.map(((e,i)=>t(mf,{date:e,calendarDate:r,selectedDate:o,hoverDate:h,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:u,onSelect:m,onHover:b,numberOfDays:d},`day-${i}`)))},i)))]})},vf=_.div`
    width: 100%;
    background: ${Ti.bg};
`,yf=({date:e,calendarDate:r,selectedDate:n,hoverDate:o,minDate:i,maxDate:a,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:c,onSelect:u,onHover:d})=>{const f=jc.isDisabledDay(e,s,i,a),h=!f||l,p={date:e,calendarDate:r,disabled:f,interactive:h,currentDateIndicator:!0,onSelect:()=>{u(e,!h)},onHover:()=>{d(e.format("YYYY-MM-DD"),!h)}};return t(hf,Object.assign({},p,(()=>{const t={};r.month()!==e.month()?t.labelType=c?"hidden":"unavailable":Cc().isSame(e,"day")&&!f&&(t.labelType="current");const i=e.isSame(n,"day"),a=e.isSame(o,"day");return i&&a?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):i?(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"):a&&(t.labelType="hover",t.circleLeft="hover-subtle",t.circleRight="hover-subtle"),t})()))};Cc.extend(_c);const xf=({calendarDate:r,disabledDates:n,selectedDate:o,onSelect:i,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:u,showActiveMonthDaysOnly:d})=>{const f=a((()=>jc.generateDays(r)),[r]),[h,p]=g(""),m=(e,t)=>{t&&!u||i(e)},b=(e,t)=>{t&&!u||(p(e),s(e))},v=()=>{p(""),s("")};return e(Jd,{"data-testid":"calendar-content",children:[f[0].map(((e,r)=>t(ef,{children:Cc(e).format("ddd")},`week-day-${r}`))),f.map(((e,i)=>t(tf,{onMouseLeave:v,children:e.map(((e,i)=>t(yf,{date:e,calendarDate:r,selectedDate:o,hoverDate:h,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:u,showActiveMonthDaysOnly:d,onSelect:m,onHover:b},`day-${i}`)))},i)))]})},wf=({date:e,calendarDate:r,selectedDate:n,hoverDate:o,minDate:i,maxDate:a,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:u})=>{const d=jc.isDisabledDay(e,s,i,a),f=!d||l,{start:h,end:p}=jc.getWeekStartEnd(Nc.toDayjs(n)),{start:g,end:m}=jc.getWeekStartEnd(Nc.toDayjs(o)),b=n&&e.isBetween(h,p,"day","[]"),v=o&&e.isBetween(g,m,"day","[]"),y=b&&e.isSame(h)||v&&e.isSame(g),x=b&&e.isSame(p)||v&&e.isSame(m),w={date:e,calendarDate:r,disabled:d,interactive:f,currentDateIndicator:!0,onSelect:()=>{c(e,!f)},onHover:()=>{u(e.format("YYYY-MM-DD"),!f)}};return t(hf,Object.assign({},w,(()=>{const t={};return r.month()!==e.month()?t.labelType="unavailable":Cc().isSame(e,"day")&&!d&&(t.labelType="current"),t})(),(()=>{const e={};let t,r;return b&&v?(t="selected-hover-outline",r="selected-hover"):b?(t="selected-outline",r="selected"):v&&(t="hover",r="hover"),t&&(e.labelType=r,y?e.circleLeft=t:e.bgLeft=t,x?e.circleRight=t:e.bgRight=t),e})()))},$f=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:u})=>{const d=a((()=>jc.generateDays(r)),[r]),[f,h]=g(""),p=(e,t)=>{if(t&&!u)return;const r=e.startOf("week");i(r),e&&!Cc(e).isSame(r,"month")&&h("")},m=(e,t)=>{t&&!u||(h(e),s(e))},b=()=>{h(""),s("")};return e(Jd,{"data-testid":"calendar-content",children:[d[0].map(((e,r)=>t(ef,{children:Cc(e).format("ddd")},`week-day-${r}`))),d.map(((e,i)=>t(tf,{onMouseLeave:b,children:e.map(((e,i)=>t(wf,{date:e,calendarDate:r,selectedDate:o,hoverDate:f,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:u,onSelect:p,onHover:m},`day-${i}`)))},i)))]})},Cf=o.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:o,onDismiss:i,value:a,endValue:l,currentFocus:c,withButton:u,variant:d,minDate:h,maxDate:p,allowDisabledSelection:g,selectWithinRange:m=!0,initialCalendarDate:b,numberOfDays:v,showActiveMonthDaysOnly:y=!1},x)=>{const w=s(null),$=s(void 0);f(x,(()=>({reset(){var e;null===(e=w.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=w.current)||void 0===t||t.setCalendarDate(e)}})));const C=e=>{var t;const r=e.format("YYYY-MM-DD");null===(t=w.current)||void 0===t||t.setCalendarDate(r),D(r)},S=e=>{k(e)},D=e=>{n&&n(e)},k=e=>{o&&o(e)},_=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(vf,{children:t(Xd,{ref:w,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(d){case"single":e=!1;break;case"range":case"fixed-range":e=!!a!=!!l;break;case"week":e=!a&&!l}return e})(),onDismiss:i,minDate:h,maxDate:p,selectWithinRange:m,currentFocus:c,selectedStartDate:a,selectedEndDate:l,allowDisabledSelection:g,onCalendarDateChange:e=>{$.current&&$.current.isSame(e,"month")||_(e),$.current=e},initialCalendarDate:b,children:({calendarDate:r})=>(r=>{switch(d){case"week":return t($f,{calendarDate:r,disabledDates:e,selectedStartDate:a,minDate:h,maxDate:p,allowDisabledSelection:g,onSelect:C,onHover:S});case"fixed-range":return t(bf,{calendarDate:r,disabledDates:e,selectedStartDate:a,minDate:h,maxDate:p,allowDisabledSelection:g,onSelect:C,onHover:S,numberOfDays:v});case"single":return t(xf,{calendarDate:r,disabledDates:e,selectedDate:a,minDate:h,maxDate:p,allowDisabledSelection:g,showActiveMonthDaysOnly:y,onSelect:C,onHover:S});default:return t(gf,{calendarDate:r,currentFocus:c,disabledDates:e,selectedStartDate:a,selectedEndDate:l,minDate:h,maxDate:p,isNewSelection:m,allowDisabledSelection:g,showActiveMonthDaysOnly:y,onSelect:C,onHover:S})}})(r)})})})),Sf=o.forwardRef(((e,r)=>{var{width:n}=e,o=ct(e,["width"]);return t(id,{$width:n,"data-testid":"calendar-dropdown",children:t(Cf,Object.assign({ref:r},o))})})),Df=O`
    outline-offset: -1px;
    outline: ${Mi["width-020"]} ${Mi.solid} ${Ti["border-focus"]};
`,kf=O`
    outline-color: ${Ti["border-focus"]};
`,_f=O`
    outline-color: ${Ti["border-disabled"]};
`,Of=O`
    outline-color: ${Ti["border-error-focus"]};
`,Ef=_.div`
    border: ${Mi["width-010"]} ${Mi.solid} ${Ti.border};
    border-radius: ${ji.sm};
    background: ${Ti.bg};

    :focus-within {
        ${Df}
    }
    ${e=>e.$focused&&Df}

    ${e=>e.$readOnly?O`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${kf}
                }
                ${e.$focused&&kf}
            `:e.$disabled?O`
                background: ${Ti["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${_f}
                }
                ${e.$focused&&_f}
            `:e.$error?O`
                border-color: ${Ti["border-error"]};

                :focus-within {
                    ${Of}
                }
                ${e.$focused&&Of}
            `:void 0}
`,Tf=_(Ef)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Ai["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,If=_.input`
    ${e=>"small"===e.$variant?Ii["body-md-regular"]:Ii["body-baseline-regular"]}
    color: ${Ti.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Ti["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ti["text-subtler"]};
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
`,Ff=_.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${Mi["width-010"]} ${Mi.solid}
            ${Ti["border-focus"]};
        border-radius: ${ji.sm};
    }
`,Mf=_.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Af=_.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return O`
                ${jf}, ${Pf} {
                    color: ${Ti["text-subtler"]};
                }
            `}}
`,jf=_(If)`
    background: transparent;
    text-align: center;
`,Rf=_(jf)`
    width: 2rem;
    margin-right: ${Ai["spacing-4"]};
`,zf=_(jf)`
    width: 2.5rem;
`,Bf=_(jf)`
    width: 3rem;
    margin-left: ${Ai["spacing-4"]};
`,Pf=_.span`
    ${Ii["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return O`
                color: ${Ti.text};
            `}}
`,Lf=_.div`
    ${Ii["body-baseline-regular"]}
    background-color: ${Ti.bg};
    color: ${Ti["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?O`
                background-color: ${Ti["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?O`
                display: none;
            `:void 0}
`;Cc.extend(Dc);const Nf=o.forwardRef((({disabled:r,readOnly:n,names:o,value:i,focused:a,hoverValue:l,placeholder:u,label:d,onChange:h,onFocus:p,onBlur:m,hideInputKeyboard:b},v)=>{const y=b?"none":"numeric",[x,w,$]=Qc(""),[C,S,D]=Qc(""),[k,_,O]=Qc(""),[E,T]=g("none"),[I,F]=g(!1),M=s(null),A=s(null),j=s(null),R=s(null),[z,B,P]=Y(l);c((()=>{var e;const[t="",r="",n=""]=Y(i);w(t),S(r),_(n),t||r||n||!M.current||!M.current.contains(document.activeElement)||null===(e=A.current)||void 0===e||e.focus()}),[i]),c((()=>{var e;a||T("none"),a&&(F(!0),M.current&&!M.current.contains(document.activeElement)&&(null===(e=A.current)||void 0===e||e.focus()))}),[a]),f(v,(()=>({ref:M,resetPlaceholder(){F(!1)},resetInput(){const[e="",t="",r=""]=Y(i);w(e),S(t),_(r)}})),[i]);const L=e=>{var t;e.preventDefault(),null===(t=A.current)||void 0===t||t.focus()},N=e=>{e.target.select();const t=e.target.name;T(t)},H=e=>{const[t,r,n]=o,i={[t]:$.current,[r]:D.current,[n]:O.current},a=e.target.name,s=i[a],l=a!==n?Vc.padValue(s,!0):s;switch(a){case t:i[t]=l,w(l);break;case r:i[r]=l,S(l)}const c=`${i[n]}-${i[r]}-${i[t]}`,u=Cc(c,"YYYY-MM-DD",!0).isValid(),d=!i[t]&&!i[r]&&!i[n];u&&s!==l&&h(c),M.current&&!M.current.contains(e.relatedTarget)&&(T("none"),null==m||m(d||u))},W=e=>{var t,r;if(l)return;const n=e.target.name,i=e.target.value.replace(/[^0-9]/g,""),a={day:x,month:C,year:k};switch(n){case o[0]:a.day=i,w(i),2===i.length&&(null===(t=j.current)||void 0===t||t.focus());break;case o[1]:a.month=i,S(i),2===i.length&&(null===(r=R.current)||void 0===r||r.focus());break;case o[2]:a.year=i,_(i)}if(!a.day&&!a.month&&!a.year)return void h("");const s=`${a.year}-${a.month}-${a.day}`;Cc(s,"YYYY-MM-DD",!0).isValid()&&h(s)},V=e=>{var t,r;"Backspace"!==e.code&&"Backspace"!==e.key||(E===o[1]&&0===C.length&&(null===(t=A.current)||void 0===t||t.focus()),E===o[2]&&0===k.length&&(null===(r=j.current)||void 0===r||r.focus()))};function Y(e){if(e){const t=Cc(new Date(e));return t.isValid()?[Vc.padValue(t.date().toString()),Vc.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e(Mf,{role:"group","aria-label":d,onClick:()=>{var e;r||n||(F(!0),M.current&&!M.current.contains(document.activeElement)&&(null===(e=A.current)||void 0===e||e.focus()))},onFocus:e=>{r||(F(!0),a||null==p||p(e))},children:[e(Af,{ref:M,$hover:!!l,children:[t(Rf,{ref:A,name:o[0],maxLength:2,value:null!=z?z:x,onFocus:N,onBlur:H,onChange:W,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${o[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:E!==o[0]||n?"DD":""}),t(Pf,{$inactive:0===x.length,children:"/"}),t(zf,{ref:j,name:o[1],maxLength:2,value:null!=B?B:C,onFocus:N,onBlur:H,onChange:W,onKeyDown:V,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${o[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:E!==o[1]||n?"MM":""}),t(Pf,{$inactive:0===C.length,children:"/"}),t(Bf,{ref:R,name:o[2],maxLength:4,value:null!=P?P:k,onFocus:N,onBlur:H,onChange:W,onKeyDown:V,type:"text",inputMode:y,pattern:"[0-9]{4}","data-testid":`${o[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:E!==o[2]||n?"YYYY":""})]}),(()=>{if(!i&&!n&&u)return t(Lf,{$hide:I,$disabled:r,onMouseDown:L,children:u})})()]})})),Hf=_(Tf)`
    height: 3rem;
`,Wf=e=>{var{minDate:r,maxDate:n,disabled:o,disabledDates:i,error:a,hideInputKeyboard:l,value:u,onChange:d,onFocus:f,onBlur:h,onYearMonthDisplayChange:p,withButton:m=!0,readOnly:b,id:v,allowDisabledSelection:y,zIndex:x}=e,w=ct(e,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[$,C]=g(Hc.sanitizeInput(u)),[S,D]=g(Hc.sanitizeInput(u)),[k,_]=g(void 0),[O,E]=g(!1),[T,I]=g(!1),F=s(null),M=s(null);c((()=>{const e=Hc.sanitizeInput(u);C(e),D(e)}),[u]);const A=e=>{!y&&Hc.isDateDisabled(e,{disabledDates:i,minDate:r,maxDate:n})||(D(e),m||(L(e),C(e),e&&E(!1)))},j=e=>{var t;D(e),m||(L(e),C(e),e&&(null===(t=F.current)||void 0===t||t.focus(),E(!1)),k&&_(void 0))},R=()=>{b||o||(E(!0),T||(I(!0),f&&f()))},z=e=>{var t;T&&!O&&F.current&&!F.current.contains(e.relatedTarget)&&(null===(t=M.current)||void 0===t||t.resetInput(),D($),I(!1),N())},B=e=>{_(e)},P=e=>{var t;switch(e){case"reset":D($);break;case"confirmed":C(S),L(S)}null===(t=F.current)||void 0===t||t.focus(),E(!1)},L=e=>{d&&d(e)},N=()=>{h&&h()};return t(od,{enabled:!b&&!o,isOpen:O,renderElement:()=>t(Hf,Object.assign({tabIndex:-1,ref:F,onBlur:z,onFocus:R,$disabled:o,$readOnly:b,$focused:T,$error:a,id:v,"data-testid":w["data-testid"]},w,{children:t(Nf,{ref:M,disabled:o,onChange:A,readOnly:b,focused:O,names:["start-day","start-month","start-year"],value:S,hoverValue:k,hideInputKeyboard:l})})),renderDropdown:({elementWidth:e})=>t(Sf,{variant:"single",initialCalendarDate:S,withButton:m,value:S,disabledDates:i,minDate:r,maxDate:n,allowDisabledSelection:y,onHover:B,onSelect:j,onDismiss:P,onYearMonthDisplayChange:p,width:e}),onClose:()=>{var e;null===(e=M.current)||void 0===e||e.resetInput(),D($),E(!1),I(!1),N()},onDismiss:()=>{var e,t;null===(e=M.current)||void 0===e||e.resetInput(),null===(t=F.current)||void 0===t||t.focus(),D($),E(!1)},customZIndex:x,offset:16})},Vf=_.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return O`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(
                        100% - ${Ii.Spec["body-size-baseline"]} -
                            ${Ai["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${Ai["spacing-8"]};
                }
            `}}
`,Yf=_.div`
    width: 100%; // Force next flex item to break to next line
`,Uf=_.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Kf=_(ie)`
    color: ${Ti.icon};
    width: ${Ii.Spec["body-size-baseline"]};
    height: ${Ii.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Ai["spacing-8"]};
    align-self: center;
`,qf=_.div`
    position: absolute;
    background: ${e=>e.$error?Ti["border-error-focus-strong"]:Ti["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Ai["spacing-8"]} - (${Ii.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Fi["duration-350"]} ${Fi["ease-standard"]},
        opacity ${Fi["duration-350"]} ${Fi["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return O`
                    opacity: 1;
                `;case"end":return O`
                    left: calc(50% + ${Ai["spacing-16"]});
                    opacity: 1;
                `;case"none":return O`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return O`
                display: none;
            `}}
`,Gf=({children:r,currentActive:n,error:o,className:i,wrap:a})=>{const[s,l]=r;return e(Vf,{className:i,$wrap:a,children:[t(Uf,{"data-id":"range-container-elem1-container",children:s}),t(Kf,{}),a&&t(Yf,{}),t(Uf,{"data-id":"range-container-elem2-container",children:l}),t(qf,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:a})]})},Qf=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},Zf=_(Tf)`
    ${e=>e.$wrap&&O`
            padding: ${Ai["spacing-12"]} ${Ai["spacing-16"]};
        `}
`,Xf=_.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&O`
            height: fit-content;
        `}
`,Jf={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},eh=r=>{var{minDate:n,maxDate:o,disabled:i,disabledDates:a,error:d,hideInputKeyboard:f,value:h,valueEnd:p,onChange:m,onFocus:b,onBlur:v,onYearMonthDisplayChange:y,withButton:x=!0,variant:w="range",numberOfDays:$=7,readOnly:C,id:S,allowDisabledSelection:D,zIndex:k}=r,_=ct(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[O,E]=g(),[T,I]=g(void 0),[F,M]=g(!1),[A,j]=g(!1),R="week"===w,z="fixed-range"===w,[{selectedStart:B,selectedEnd:P,currentFocus:L,calendarOpen:N,isStartDirty:H,isEndDirty:W,focused:V},Y]=(({initialState:e,reducers:t,name:r,debug:n})=>{const[o,i]=l(((e,r)=>t[r.type]?t[r.type](e,r.payload):e),e);return[o,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{n&&Qf(r,e,t),i({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Jf,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:R?"none":z?"start":t,calendarOpen:!C,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),U=s(!1),K=s(null),q=s(null),G=s(null),Q=s(null),Z=(({maxWidth:e,targetRef:t})=>{const[r,n]=g(!1);return mc({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:u((t=>{n(t<=e)}),[e])}),r})({maxWidth:320,targetRef:K});c((()=>{Y.resetRange({start:Hc.sanitizeInput(h),end:Hc.sanitizeInput(p)})}),[h,p]),c((()=>{"start"===L?E(B):"end"===L&&E(P)}),[L]);const X=e=>{var t,r,n;"Enter"!==e.code||x||(B&&P?(Y.done({start:B,end:P}),null==m||m(B,P)):(Y.dismiss(),null===(t=K.current)||void 0===t||t.focus(),null===(r=G.current)||void 0===r||r.resetPlaceholder(),null===(n=Q.current)||void 0===n||n.resetPlaceholder()))},J=e=>{var t;if(fe(e))return void(U.current=!0);if(Y.changeStart(e),null===(t=q.current)||void 0===t||t.setCalendarDate(e),U.current=!1,!e)return void(x||P||!W||(Y.resetRange({start:"",end:""}),null==m||m("","")));if(!P)return void Y.focus("end");if(Cc(e).isAfter(P,"day"))Y.reselectEnd();else{if(W)return x?void 0:(Y.done({start:e,end:P}),void(null==m||m(e,P)));Y.focus("end")}},ee=e=>{var t,r;if(fe(e))return void(U.current=!0);if(Cc(e).isBefore(B,"day"))return Y.changeStart(e),null===(t=q.current)||void 0===t||t.setCalendarDate(e),void Y.reselectEnd();if(Y.changeEnd(e),null===(r=q.current)||void 0===r||r.setCalendarDate(e),e){if(B)return x?void 0:(Y.done({start:B,end:e}),void(null==m||m(B,e)));Y.focus("start")}else x||B||!H||(Y.resetRange({start:"",end:""}),null==m||m("",""))},te=e=>{var t;if(fe(e))return void(U.current=!0);if(Y.changeStart(e),null===(t=q.current)||void 0===t||t.setCalendarDate(e),U.current=!1,!e)return void(x?Y.changeEnd(""):(Y.resetRange({start:"",end:""}),null==m||m("","")));const r=Cc(e).format("YYYY-MM-DD"),n=Cc(r).add($-1,"day").format("YYYY-MM-DD");return Y.changeStart(r),Y.changeEnd(n),U.current=!1,x?void 0:(Y.done({start:r,end:n}),void(null==m||m(r,n)))},re=()=>{C||i||V||(Y.focus("start"),null==b||b())},ne=e=>{var t,r;V&&!N&&K.current&&K.current.contains(e.relatedTarget)&&(Y.blur(),M(!1),j(!1),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null===(r=Q.current)||void 0===r||r.resetPlaceholder(),null==v||v())},oe=e=>t=>{t.stopPropagation(),C||(Y.focus(e),ie(),ae(),V||null==b||b())},ie=()=>{if(R){const e=Nc.toDayjs(B).startOf("week").format("YYYY-MM-DD");M(!0),j(!0),E(e)}},ae=()=>{z&&(j(!0),E(B))},se=e=>{var t;e&&!U.current||(Y.resetStart(),null===(t=G.current)||void 0===t||t.resetInput())},le=e=>{var t;e&&!U.current||(Y.resetEnd(),null===(t=Q.current)||void 0===t||t.resetInput())},ce=e=>{switch(w){case"week":(e=>{const t=Cc(e).startOf("week").format("YYYY-MM-DD"),r=Cc(e).endOf("week").format("YYYY-MM-DD");if(Y.changeStart(t),Y.changeEnd(r),U.current=!1,!x)Y.done({start:t,end:r}),null==m||m(t,r)})(e);break;case"fixed-range":te(e);break;default:"start"===L?J(e):"end"===L&&ee(e)}},ue=e=>{var t;switch(null===(t=K.current)||void 0===t||t.focus(),e){case"reset":Y.cancel();break;case"confirmed":Y.done({start:B,end:P}),null==m||m(B,P)}},de=e=>{I(e)},fe=e=>!D&&e&&Hc.isDateDisabled(e,{disabledDates:a,minDate:n,maxDate:o}),he=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===L?T:void 0,end:"end"===L?T:void 0};break;case"week":if(!T)return;t={start:Cc(T).startOf("week").format("YYYY-MM-DD"),end:Cc(T).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!T)return;t={start:Cc(T).format("YYYY-MM-DD"),end:Cc(T).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return t(od,{enabled:!C&&!i,isOpen:N,onClose:()=>{var e,t;Y.blur(),M(!1),j(!1),null===(e=G.current)||void 0===e||e.resetPlaceholder(),null===(t=Q.current)||void 0===t||t.resetPlaceholder(),null==v||v()},onDismiss:()=>{var e,t,r;Y.dismiss(),null===(e=K.current)||void 0===e||e.focus(),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null===(r=Q.current)||void 0===r||r.resetPlaceholder()},renderElement:()=>t(Zf,Object.assign({ref:K,tabIndex:-1,onFocus:re,onBlur:ne,$focused:V,$disabled:i,$readOnly:C,$error:d,$wrap:Z,id:S,"data-testid":_["data-testid"],onKeyDown:X},_,{children:e(Gf,{currentActive:L,wrap:Z,error:d,children:[t(Xf,{$wrap:Z,children:t(Nf,{ref:G,placeholder:"From",names:["start-day","start-month","start-year"],value:B,disabled:i,readOnly:F||C,focused:"start"===L,hoverValue:he("start"),onChange:z?te:J,onFocus:oe("start"),onBlur:se,hideInputKeyboard:f})}),t(Xf,{$wrap:Z,children:t(Nf,{ref:Q,placeholder:"To",names:["end-day","end-month","end-year"],value:P,disabled:i,readOnly:A||C,focused:"end"===L,hoverValue:he("end"),onChange:ee,onFocus:oe("end"),onBlur:le,hideInputKeyboard:f})})]})})),renderDropdown:({elementWidth:e})=>t(Sf,{ref:q,variant:w,initialCalendarDate:O,withButton:x,value:B,endValue:P,selectWithinRange:H||W,currentFocus:L,disabledDates:a,minDate:n,maxDate:o,allowDisabledSelection:D,onSelect:ce,onDismiss:ue,onHover:de,onYearMonthDisplayChange:y,numberOfDays:$,width:e}),customZIndex:k,offset:16})},th=_(Sd)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,rh=(r,n)=>{const{children:o,disabled:i=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left",loading:u=!1}=r,d=ct(r,["children","disabled","styleType","danger","icon","iconPosition","loading"]),f={$buttonIconPosition:c,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(th,Object.assign({ref:n,"data-testid":d["data-testid"]||"button-with-icon",disabled:i},f,d,{children:[u?t(fd,{}):l,t("span",{children:o})]}))};rh.displayName="ButtonWithIcon.Default";const nh=(r,n)=>{const{children:o,disabled:i=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left",loading:u=!1}=r,d=ct(r,["children","disabled","styleType","danger","icon","iconPosition","loading"]),f={$buttonIconPosition:c,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(th,Object.assign({ref:n,"data-testid":d["data-testid"]||"button-with-icon",disabled:i},f,d,{children:[u?t(fd,{}):l,t("span",{children:o})]}))};nh.displayName="ButtonWithIcon.Small";const oh={Default:o.forwardRef(rh),Small:o.forwardRef(nh)},ih=({className:e,progress:r,color:n,"data-testid":o})=>t(ah,{className:e,$innerWidth:r,$color:n,"data-testid":o,children:t("progress",{value:100*r,max:100})}),ah=_.div`
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

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):Ti["icon-primary-subtle"](e),O`
            border: ${Mi["width-010"]} ${Mi.solid} ${r};
            border-radius: ${ji.sm};

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
`,sh=_.button`
    align-items: center;
    border-radius: 0.25rem;
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$sizeType){case"large":return O`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return O`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return O`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${e=>{switch(e.$styleType){case"secondary":return O`
                    background-color: ${Ti.bg};
                    border: ${Mi["width-010"]} ${Mi.solid}
                        ${Ti["border-primary"]};
                    color: ${Ti["text-primary"]};

                    :hover {
                        background-color: ${Ti["bg-hover-neutral"]};
                    }
                `;case"light":return O`
                    background-color: ${Ti.bg};
                    border: ${Mi["width-010"]} ${Mi.solid}
                        ${Ti.border};
                    color: ${Ti["text-primary"]};

                    :hover {
                        background-color: ${Ti["bg-hover-neutral"]};
                    }
                `;default:return O`
                    background-color: ${Ti["bg-primary"]};
                    border: none;
                    color: ${Ti["text-inverse"]};

                    :hover {
                        background-color: ${Ti["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${Ti["bg-disabled"]};
        border: ${Mi["width-010"]} ${Mi.solid}
            ${Ti["border-disabled"]};
        color: ${Ti["text-disabled"]};
        cursor: not-allowed;
    }
`,lh=o.forwardRef(((e,r)=>{var{"data-testid":n,styleType:o="primary",children:i,sizeType:a="default",type:s="button"}=e,l=ct(e,["data-testid","styleType","children","sizeType","type"]);return t(sh,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:a,$styleType:o},l,{children:i}))})),ch=Object.assign(au,{Box:fu}),uh=O`
    ${e=>`\n        ${zi.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${Ri["sm-max"](e)}px)\n    `}
`,dh=O`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${Ri["sm-max"](e)}px)\n    `}
`,fh=_.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>O`
            ${Mi.Util["dashed-default"]({radius:ji.sm,thickness:Mi["width-040"],colour:e.$disabled?Ti["border-disabled"]:Ti.border})}

            background-color: ${e.$disabled?Ti["bg-disabled"]:Ti.bg};
        `}
    height: 14.125rem;
`,hh=_(Ed.Default)`
    width: fit-content;
    margin: 0 ${Ai["spacing-20"]};

    :disabled {
        border-color: ${Ti["border-strong"]};
    }
`,ph=_(lh)`
    position: absolute;
    top: ${Ai["spacing-16"]};
    right: ${Ai["spacing-16"]};

    :disabled {
        border-color: ${Ti["border-strong"]};
    }
`,gh=_.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${Ai["spacing-16"]}) * 2);
    height: 100%;
`,mh=_.div`
    background: ${Ti["bg-primary-subtlest"]};
    border: ${Mi["width-010"]} ${Mi.solid} ${Ti.border};
    border-radius: ${ji.sm};
    margin: 0 ${Ai["spacing-20"]};
    padding: ${Ai["spacing-16"]};
    display: flex;
    gap: ${Ai["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,bh=_(Hi.BodySM)`
    margin-top: ${Ai["spacing-16"]};
`,vh=_(ch)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,yh=_.div`
    width: 100%;
    margin: auto;
    padding: ${Ai["layout-xxl"]} ${Ai["layout-sm"]};

    ${uh} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,xh=_(ch.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${Ai["spacing-16"]};

    ${uh} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${Ai["spacing-8"]};
        --close-button-right-inset: ${Ai["spacing-20"]};
    }
`,wh=_.h2`
    ${Ii["body-baseline-semibold"]}
    color: ${Ti.text};
    margin-bottom: ${Ai["spacing-16"]};
    text-align: center;

    ${uh} {
        ${Ii["body-md-semibold"]}
        margin: ${Ai["spacing-12"]} 0;
    }
`,$h=_.div`
    width: 100%;
    height: 20rem;
    border-radius: ${ji.lg};
    overflow: hidden;

    ${uh} {
        border-radius: 0;
        flex: 1;
    }

    ${dh} {
        background: ${Ti["bg-strong"]};
    }
`,Ch=_.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${Ti["bg-stronger"]};
    margin: auto;

    ${uh} {
        aspect-ratio: 4/3;
    }
    ${zi.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${dh} {
        width: auto;
        height: 100%;
    }
`,Sh=_.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${Ti["border-strong"]};
    pointer-events: none;

    ${uh} {
        width: calc(100% - ${Ai["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,Dh=_.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${Ai["spacing-16"]};

    ${zi.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${Ai["spacing-16"]} ${Ai["spacing-24"]}
            ${Ai["spacing-48"]};
        gap: ${Ai["spacing-16"]};
    }

    ${dh} {
        flex-direction: row;
        margin: ${Ai["spacing-16"]} ${Ai["spacing-20"]};
    }
`,kh=_(Ed.Default)`
    width: 8.5rem;
    ${zi.MaxWidth.sm} {
        width: 100%;
    }
    ${dh} {
        height: 2.5rem;
    }
`,_h=_.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Oh=_.canvas`
    cursor: crosshair;
`,Eh=C((()=>ut(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.fe318978.js")).ESignatureCanvas}})))),Th=n=>{const{description:o,id:i,loadingProgress:a,loadingLabel:l="Uploading...",onChange:u,value:d,disabled:f}=n,h=ct(n,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[p,m]=g(!1),b=s(null),[v,y]=g(d),x=E(),w=Ri["sm-max"]({theme:x}),$=wc.useMediaQuery({maxWidth:w}),C=wc.useMediaQuery({maxHeight:w,orientation:"landscape"}),D=()=>{var e;null===(e=b.current)||void 0===e||e.clear()},k=()=>{if(b.current){const e=b.current.export();y(e),m(!1),null==u||u(e)}};c((()=>{y(d)}),[d]);return e("div",Object.assign({},h,{children:[t(fh,{$disabled:f,children:"number"==typeof a?e(mh,{children:[l&&t(Hi.BodyMD,{children:l}),t(ih,{progress:null!=a?a:0,"data-testid":`${i||"e-signature"}-progress-bar`})]}):v?e(r,{children:[t(gh,{src:v,alt:"Signature preview"}),t(ph,{styleType:"light",onClick:()=>m(!0),id:i,"aria-label":"Edit signature",disabled:f,children:t(ae,{})})]}):t(hh,{type:"button",styleType:"secondary","aria-label":"Add signature",id:i,onClick:()=>m(!0),disabled:f,children:"Add signature"})}),t(vh,{"data-testid":"signature-modal",show:p,children:t(yh,{children:e(xh,{onClose:()=>m(!1),children:[t(wh,{children:"Signature"}),t($h,{children:e(Ch,{children:[t(Sh,{}),t(S,{fallback:null,children:p&&t(Eh,{ref:b,baseImageDataURL:v})})]})}),e(Dh,{children:[t(kh,{as:C?oh.Small:oh.Default,type:"button",styleType:$&&!C?"light":"link",icon:t(se,{}),onClick:D,children:"Clear"}),t(kh,{as:C?Ed.Small:Ed.Default,type:"button",onClick:k,children:"Save"})]})]})})}),o?t(bh,{children:o}):null]}))};function Ih(e,t){return Ih=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Ih(e,t)}function Fh(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Mh(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Ah(e){return null!==e&&1===e.length?e[0]:e.slice()}function jh(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function Rh(e,t){return zh(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function zh(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let Bh=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),jh(r.getMouseEventMap())}))}Fh(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=Rh(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),jh(r.getKeyDownEventMap()),Fh(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),jh(r.getMouseEventMap()),Fh(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),jh(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),o={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},i={index:t,value:Ah(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(o["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(i)),r.props.renderThumb(o,i)},r.renderTrack=(e,t,n)=>{const o={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},i={index:e,value:Ah(r.state.value)};return r.props.renderTrack(o,i)};let n=Mh(t.value);n.length||(n=Mh(t.defaultValue)),r.pendingResizeTimeouts=[];const i=[];for(let e=0;e<n.length;e+=1)n[e]=Rh(n[e],t),i.push(e);return r.resizeObserver=null,r.resizeElementRef=o.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:i},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ih(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=Mh(e.value);return r.length?t.pending?null:{value:r.map((t=>Rh(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return Ah(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,o=n.length;for(let i=0;i<o;i+=1){const o=this.calcOffset(n[i]),a=Math.abs(e-o);a<t&&(t=a,r=i)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Rh(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),o=e[r],i=n[this.posMaxKey()],a=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=o-s,c=Math.abs(i-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],o=r[this.posMinKey()];let i=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:o));return this.props.invert&&(i=this.state.sliderLength-i),i-=this.state.thumbSize/2,i},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),o=Rh(this.calcValue(r),this.props),i=this.state.value.slice();i[n]=o;for(let e=0;e<i.length-1;e+=1)if(i[e+1]-i[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:i},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Rh(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Rh(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,o=t[r];if(e===o)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:i,max:a,min:s,minDistance:l}=this.props;if(!i){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,i&&n>1&&(e>o?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const i=n-o*r;t[e-1-o]>i&&(t[e-1-o]=i)}}(n,t,l,a)):e<o&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const e=n+o*r;t[o]<e&&(t[o]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,o;for(n=r,o=e[n]+t;null!==e[n+1]&&o>e[n+1];n+=1,o=e[n]+t)e[n+1]=zh(o,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,o=e[n]-t;null!==e[n-1]&&o<e[n-1];n-=1,o=e[n]-t)e[n-1]=zh(o,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](Ah(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return o.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,i,a)},t}(o.Component);Bh.displayName="ReactSlider",Bh.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>o.createElement("div",e),renderTrack:e=>o.createElement("div",e),renderMark:e=>o.createElement("span",e)};var Ph=Bh;const Lh=_.div`
    isolation: isolate;
`,Nh=_.div`
    margin-top: ${Ai["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${Ai["spacing-8"]};
`,Hh=_.div`
    margin-bottom: ${Ai["spacing-8"]};
`,Wh=_(Hi.BodyBL)`
    overflow-wrap: anywhere;
`,Vh=_(Ph)`
    height: 0.875rem;
`,Yh=_.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${e=>e.$disabled?O`
                cursor: not-allowed;
            `:e.$readOnly?void 0:O`
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

        background-color: ${Ti.bg};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${Mi["width-010"]} ${Mi.solid}
            ${e=>e.$disabled?Ti["border-selected-disabled"]:Ti["border-strong"]};
        border-radius: 50%;
    }
`,Uh=_.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${Yh}:after {
        outline-offset: -1px;
        outline: ${Mi["width-040"]} ${Mi.solid}
            ${Ti["border-selected"]};
    }
`,Kh=_.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${ji.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Ti["border-strong"](e)};
`,qh=r=>{var{value:n,min:o=0,max:i=100,step:a=1,minRange:s,numOfThumbs:l=2,colors:u,disabled:d,readOnly:f,ariaLabels:h,showSliderLabels:p,sliderLabelPrefix:m,sliderLabelSuffix:b,showIndicatorLabel:v,indicatorLabelPrefix:y,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:$,onChangeEnd:C}=r,S=ct(r,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[D,k]=g(O()),_=function(){const e=function(){const e=d||f?Ti["border-disabled"]:Ti["border-strong"],t=d||f?Ti["border-selected-disabled"]:Ti["border-selected"];if(1===l)return[t,e];const r=[];r.push(e);for(let e=0;e<l-1;e++)r.push(t);return r.push(e),r}();return new Array(l+1).fill(0).map(((t,r)=>(null==u?void 0:u[r])||e[r]))}();c((()=>{n!==D&&k(O())}),[n]);function O(){if(n&&n.length===l)return n;const e=[];for(let t=0;t<l;t++)e.push(o+a*t);return e}const E=t=>w?w(t):e(Wh,{children:[m,t,b]});return e(Lh,Object.assign({},S,{children:[v&&t(Hh,{children:(()=>{let t="";if(1===D.length)t=`${D[0]}`;else if(2===D.length)t=`${D[0]} - ${D[1]}`;else if(D.length>2){t=`${Math.min(...D)} - ${Math.max(...D)}`}return e(Wh,{children:[y,t,x]})})()}),t(Vh,{step:a,min:o,max:i,value:D,disabled:d||f,onChange:(e,t)=>{if("number"==typeof e){const t=[e];k(t),null==$||$(t)}else{if(t>-1&&D[t]===e[t])return;const r=[...e];k(r),null==$||$(r)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];k(t),null==C||C(t)}else{const t=[...e];k(t),null==C||C(t)}},minDistance:s,ariaLabel:h,renderThumb:(e,r)=>t(Uh,Object.assign({"data-testid":`slider-thumb-${r.index}`},e,{tabIndex:d?void 0:e.tabIndex,children:t(Yh,{$disabled:d,$readOnly:f})})),renderTrack:(e,r)=>t(Kh,Object.assign({"data-testid":`slider-track-${r.index}`},e,{$color:_[r.index]}))}),p&&e(Nh,{children:[t("div",{children:E(o)}),t("div",{children:E(i)})]})]}))},Gh=_.div`
    display: flex;
    margin-bottom: ${Ai["spacing-16"]};
    align-items: baseline;
`,Qh=_.div`
    margin: 0 0.5rem;
`,Zh=_.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,Xh=_.div`
    flex: 1;
    border-radius: ${ji.sm} ${ji.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=Ti["bg-strongest"];return e.$disabled&&e.$selected?t=Ti["bg-selected-stronger-disabled"]:e.$disabled?t=Ti["bg-disabled"]:e.$selected&&(t=Ti["bg-selected-stronger"]),O`
            background-color: ${t};
        `}}
`,Jh=_(qh)`
    margin-top: -0.3125rem;
`,ep=n=>{var{bins:o=[],interval:i,disabled:s,readOnly:l,value:u,showRangeLabels:d,rangeLabelPrefix:f,rangeLabelSuffix:h,ariaLabels:p,onChange:m,onChangeEnd:b,renderEmptyView:v,renderRangeLabel:y}=n,x=ct(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=o.map((e=>e.count)),$=Math.max(...w),C=o.map((e=>e.minValue)),S=Math.max(...C),D=Math.min(...C),[k,_]=g(I()),O=a((()=>{const e=[...o].sort(((e,t)=>e.minValue-t.minValue)),t=(S-D)/i+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===D+i*n));t?r.push(t):r.push({count:0,minValue:D+i*n})}return r}),[o,i]);c((()=>{u!==k&&_(I())}),[u]);const E=e=>{const[t,r]=e,n=[t,r];_(n),null==m||m(n)},T=e=>{const[t,r]=e,n=[t,r];_(n),null==b||b(n)};function I(){return null!=u?u:[D,D+i]}const F=t=>y?y(t):e(Hi.BodyBL,{children:[f,t,h]});return e("div",Object.assign({},x,{children:[d&&e(Gh,{children:[F(k[0]),t(Qh,{children:"-"}),F(k[1])]}),O.every((e=>0===e.count))&&v?v():e(r,{children:[t(Zh,{children:O.map(((e,r)=>{const n=e.count/$;return t(Xh,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:e.minValue>=k[0]&&e.minValue<k[1],$disabled:s||l},r)}))}),t(Jh,{min:D,max:S+i,step:i,minRange:i,numOfThumbs:2,value:k,disabled:s,readOnly:l,ariaLabels:p,onChange:E,onChangeEnd:T})]})]}))},tp=_(If)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&O`
            padding-left: ${Ai["spacing-16"]};
            padding-right: ${e.$showClear?0:Ai["spacing-16"]};
        `}
`,rp=_(Ff)`
    height: auto;
    padding: ${Ai["spacing-12"]} ${Ai["spacing-16"]};

    cursor: pointer;
    color: ${Ti.icon};

    ${e=>"no-border"===e.$styleType&&O`
            margin-right: -${Ai["spacing-12"]};
        `}
`,np=_(te)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,op=_.div`
    display: flex;
    width: 100%;
`,ip=_(Ef)`
    display: flex;
    align-items: center;
    width: 100%;
`,ap=o.forwardRef(((n,o)=>{var{value:i,spacing:a,type:l,error:c,disabled:u,readOnly:d,onChange:h,onClear:p,allowClear:g=!1,className:m,styleType:b="bordered"}=n,v=ct(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=((e,t)=>"tel"===e&&!!t)(l,a),x=s(null);f(o,(()=>x.current),[]);const w=qc({ref:x,formatter:e=>y?Vc.transformWithSpaces(e,a):e}),$=e=>{h&&(y?S(e):h(e))},C=()=>{p&&p(),x&&x.current&&x.current.focus()},S=e=>{const t=w();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,o=r.replace(/\s/g,"");e.target.value=o,null==h||h(e),n()},D=i?(e=>e?y?Vc.transformWithSpaces(e,a):e:"")(i):i,k=g&&!u&&!d&&!!i,_=()=>e(r,{children:[t(tp,Object.assign({"data-testid":"input",ref:x,disabled:u,value:D,onChange:$,type:l,readOnly:d,$showClear:k,$styleType:b},v)),k&&t(rp,{onClick:C,type:"button",$styleType:b,children:t(np,{"aria-hidden":!0})})]});return t(r,{children:"no-border"===b?t(op,{className:m,children:_()}):t(ip,{$disabled:u,$error:c,$readOnly:d,className:m,children:_()})})})),sp=o.forwardRef(((e,r)=>{const{label:n,errorMessage:o,id:i="form-field","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=e,y=ct(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Wu,{id:i,label:n,errorMessage:o,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:t(ap,Object.assign({id:`${i}-base`,"data-testid":s||i,ref:r,error:!!o},y))})}));var lp=qn;var cp=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var up=function(e){return this.__data__.get(e)};var dp=function(e){return this.__data__.has(e)},fp=qn,hp=Gn,pp=mo;var gp=function(e,t){var r=this.__data__;if(r instanceof fp){var n=r.__data__;if(!hp||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new pp(n)}return r.set(e,t),this.size=r.size,this},mp=qn,bp=function(){this.__data__=new lp,this.size=0},vp=cp,yp=up,xp=dp,wp=gp;function $p(e){var t=this.__data__=new mp(e);this.size=t.size}$p.prototype.clear=bp,$p.prototype.delete=vp,$p.prototype.get=yp,$p.prototype.has=xp,$p.prototype.set=wp;var Cp=$p;var Sp=mo,Dp=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},kp=function(e){return this.__data__.has(e)};function _p(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Sp;++t<r;)this.add(e[t])}_p.prototype.add=_p.prototype.push=Dp,_p.prototype.has=kp;var Op=function(e,t){return e.has(t)},Ep=_p,Tp=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Ip=Op;var Fp=function(e,t,r,n,o,i){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=i.get(e),u=i.get(t);if(c&&u)return c==t&&u==e;var d=-1,f=!0,h=2&r?new Ep:void 0;for(i.set(e,t),i.set(t,e);++d<s;){var p=e[d],g=t[d];if(n)var m=a?n(g,p,d,t,e,i):n(p,g,d,e,t,i);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!Tp(t,(function(e,t){if(!Ip(h,t)&&(p===e||o(p,e,r,n,i)))return h.push(t)}))){f=!1;break}}else if(p!==g&&!o(p,g,r,n,i)){f=!1;break}}return i.delete(e),i.delete(t),f};var Mp=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var Ap=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},jp=br.Uint8Array,Rp=Tn,zp=Fp,Bp=Mp,Pp=Ap,Lp=vr?vr.prototype:void 0,Np=Lp?Lp.valueOf:void 0;var Hp=function(e,t,r,n,o,i,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new jp(e),new jp(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Rp(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Bp;case"[object Set]":var l=1&n;if(s||(s=Pp),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var u=zp(s(e),s(t),n,o,i,a);return a.delete(e),u;case"[object Symbol]":if(Np)return Np.call(e)==Np.call(t)}return!1};var Wp=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},Vp=Wp,Yp=hr;var Up=function(e,t,r){var n=t(e);return Yp(e)?n:Vp(n,r(e))};var Kp=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i},qp=function(){return[]},Gp=Object.prototype.propertyIsEnumerable,Qp=Object.getOwnPropertySymbols,Zp=Qp?function(e){return null==e?[]:(e=Object(e),Kp(Qp(e),(function(t){return Gp.call(e,t)})))}:qp;var Xp=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Jp=Er,eg=Tr;var tg=function(e){return eg(e)&&"[object Arguments]"==Jp(e)},rg=Tr,ng=Object.prototype,og=ng.hasOwnProperty,ig=ng.propertyIsEnumerable,ag=tg(function(){return arguments}())?tg:function(e){return rg(e)&&og.call(e,"callee")&&!ig.call(e,"callee")},sg={exports:{}};var lg=function(){return!1};!function(e,t){var r=br,n=lg,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(sg,sg.exports);var cg=sg.exports,ug=/^(?:0|[1-9]\d*)$/;var dg=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&ug.test(e))&&e>-1&&e%1==0&&e<t};var fg=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},hg=Er,pg=fg,gg=Tr,mg={};mg["[object Float32Array]"]=mg["[object Float64Array]"]=mg["[object Int8Array]"]=mg["[object Int16Array]"]=mg["[object Int32Array]"]=mg["[object Uint8Array]"]=mg["[object Uint8ClampedArray]"]=mg["[object Uint16Array]"]=mg["[object Uint32Array]"]=!0,mg["[object Arguments]"]=mg["[object Array]"]=mg["[object ArrayBuffer]"]=mg["[object Boolean]"]=mg["[object DataView]"]=mg["[object Date]"]=mg["[object Error]"]=mg["[object Function]"]=mg["[object Map]"]=mg["[object Number]"]=mg["[object Object]"]=mg["[object RegExp]"]=mg["[object Set]"]=mg["[object String]"]=mg["[object WeakMap]"]=!1;var bg=function(e){return gg(e)&&pg(e.length)&&!!mg[hg(e)]};var vg=function(e){return function(t){return e(t)}},yg={exports:{}};!function(e,t){var r=pr,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(yg,yg.exports);var xg=yg.exports,wg=bg,$g=vg,Cg=xg&&xg.isTypedArray,Sg=Cg?$g(Cg):wg,Dg=Xp,kg=ag,_g=hr,Og=cg,Eg=dg,Tg=Sg,Ig=Object.prototype.hasOwnProperty;var Fg=function(e,t){var r=_g(e),n=!r&&kg(e),o=!r&&!n&&Og(e),i=!r&&!n&&!o&&Tg(e),a=r||n||o||i,s=a?Dg(e.length,String):[],l=s.length;for(var c in e)!t&&!Ig.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Eg(c,l))||s.push(c);return s},Mg=Object.prototype;var Ag=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Mg)};var jg=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Rg=Ag,zg=jg,Bg=Object.prototype.hasOwnProperty;var Pg=function(e){if(!Rg(e))return zg(e);var t=[];for(var r in Object(e))Bg.call(e,r)&&"constructor"!=r&&t.push(r);return t},Lg=Wr,Ng=fg;var Hg=function(e){return null!=e&&Ng(e.length)&&!Lg(e)},Wg=Fg,Vg=Pg,Yg=Hg;var Ug=function(e){return Yg(e)?Wg(e):Vg(e)},Kg=Up,qg=Zp,Gg=Ug;var Qg=function(e){return Kg(e,Gg,qg)},Zg=Object.prototype.hasOwnProperty;var Xg=function(e,t,r,n,o,i){var a=1&r,s=Qg(e),l=s.length;if(l!=Qg(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:Zg.call(t,u)))return!1}var d=i.get(e),f=i.get(t);if(d&&f)return d==t&&f==e;var h=!0;i.set(e,t),i.set(t,e);for(var p=a;++c<l;){var g=e[u=s[c]],m=t[u];if(n)var b=a?n(m,g,u,t,e,i):n(g,m,u,e,t,i);if(!(void 0===b?g===m||o(g,m,r,n,i):b)){h=!1;break}p||(p="constructor"==u)}if(h&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(h=!1)}return i.delete(e),i.delete(t),h},Jg=cn(br,"DataView"),em=Gn,tm=cn(br,"Promise"),rm=cn(br,"Set"),nm=cn(br,"WeakMap"),om=Er,im=qr,am="[object Map]",sm="[object Promise]",lm="[object Set]",cm="[object WeakMap]",um="[object DataView]",dm=im(Jg),fm=im(em),hm=im(tm),pm=im(rm),gm=im(nm),mm=om;(Jg&&mm(new Jg(new ArrayBuffer(1)))!=um||em&&mm(new em)!=am||tm&&mm(tm.resolve())!=sm||rm&&mm(new rm)!=lm||nm&&mm(new nm)!=cm)&&(mm=function(e){var t=om(e),r="[object Object]"==t?e.constructor:void 0,n=r?im(r):"";if(n)switch(n){case dm:return um;case fm:return am;case hm:return sm;case pm:return lm;case gm:return cm}return t});var bm=mm,vm=Cp,ym=Fp,xm=Hp,wm=Xg,$m=bm,Cm=hr,Sm=cg,Dm=Sg,km="[object Arguments]",_m="[object Array]",Om="[object Object]",Em=Object.prototype.hasOwnProperty;var Tm=function(e,t,r,n,o,i){var a=Cm(e),s=Cm(t),l=a?_m:$m(e),c=s?_m:$m(t),u=(l=l==km?Om:l)==Om,d=(c=c==km?Om:c)==Om,f=l==c;if(f&&Sm(e)){if(!Sm(t))return!1;a=!0,u=!1}if(f&&!u)return i||(i=new vm),a||Dm(e)?ym(e,t,r,n,o,i):xm(e,t,l,r,n,o,i);if(!(1&r)){var h=u&&Em.call(e,"__wrapped__"),p=d&&Em.call(t,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?t.value():t;return i||(i=new vm),o(g,m,r,n,i)}}return!!f&&(i||(i=new vm),wm(e,t,r,n,o,i))},Im=Tr;var Fm=function e(t,r,n,o,i){return t===r||(null==t||null==r||!Im(t)&&!Im(r)?t!=t&&r!=r:Tm(t,r,n,o,e,i))},Mm=Cp,Am=Fm;var jm=function(e,t,r,n){var o=r.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var s=r[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=r[o])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new Mm;if(n)var f=n(c,u,l,e,t,d);if(!(void 0===f?Am(u,c,3,n,d):f))return!1}}return!0},Rm=Pr;var zm=function(e){return e==e&&!Rm(e)},Bm=zm,Pm=Ug;var Lm=function(e){for(var t=Pm(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Bm(o)]}return t};var Nm=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Hm=jm,Wm=Lm,Vm=Nm;var Ym=function(e,t){return null!=e&&t in Object(e)},Um=jo,Km=ag,qm=hr,Gm=dg,Qm=fg,Zm=zo;var Xm=function(e,t,r){for(var n=-1,o=(t=Um(t,e)).length,i=!1;++n<o;){var a=Zm(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Qm(o)&&Gm(a,o)&&(qm(e)||Km(e))},Jm=Ym,eb=Xm;var tb=Fm,rb=Ho,nb=function(e,t){return null!=e&&eb(e,t,Jm)},ob=Br,ib=zm,ab=Nm,sb=zo;var lb=function(e){return function(t){return null==t?void 0:t[e]}},cb=Lo;var ub=lb,db=function(e){return function(t){return cb(t,e)}},fb=Br,hb=zo;var pb=function(e){var t=Wm(e);return 1==t.length&&t[0][2]?Vm(t[0][0],t[0][1]):function(r){return r===e||Hm(r,e,t)}},gb=function(e,t){return ob(e)&&ib(t)?ab(sb(e),t):function(r){var n=rb(r,e);return void 0===n&&n===t?nb(r,e):tb(t,n,3)}},mb=function(e){return e},bb=hr,vb=function(e){return fb(e)?ub(hb(e)):db(e)};var yb=function(e){return"function"==typeof e?e:null==e?mb:"object"==typeof e?bb(e)?gb(e[0],e[1]):pb(e):vb(e)},xb=yb,wb=Hg,$b=Ug;var Cb=function(e){return function(t,r,n){var o=Object(t);if(!wb(t)){var i=xb(r);t=$b(t),r=function(e){return i(o[e],e,o)}}var a=e(t,r,n);return a>-1?o[i?t[a]:a]:void 0}};var Sb=/\s/;var Db=function(e){for(var t=e.length;t--&&Sb.test(e.charAt(t)););return t},kb=/^\s+/;var _b=function(e){return e?e.slice(0,Db(e)+1).replace(kb,""):e},Ob=Pr,Eb=Mr,Tb=/^[-+]0x[0-9a-f]+$/i,Ib=/^0b[01]+$/i,Fb=/^0o[0-7]+$/i,Mb=parseInt;var Ab=function(e){if("number"==typeof e)return e;if(Eb(e))return NaN;if(Ob(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ob(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=_b(e);var r=Ib.test(e);return r||Fb.test(e)?Mb(e.slice(2),r?2:8):Tb.test(e)?NaN:+e},jb=Ab,Rb=1/0;var zb=function(e){return e?(e=jb(e))===Rb||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Bb=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},Pb=yb,Lb=function(e){var t=zb(e),r=t%1;return t==t?r?t-r:t:0},Nb=Math.max;var Hb=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:Lb(r);return o<0&&(o=Nb(n+o,0)),Bb(e,Pb(t),o)},Wb=Re(Hb),Vb=Re(Cb(Hb)),Yb=Fm;var Ub=Re((function(e,t){return Yb(e,t)})),Kb=Object.defineProperty,qb={};((e,t)=>{for(var r in t)Kb(e,r,{get:t[r],enumerable:!0})})(qb,{assign:()=>_v,colors:()=>Sv,createStringInterpolator:()=>xv,skipAnimation:()=>Dv,to:()=>wv,willAdvance:()=>kv});var Gb=dv(),Qb=e=>sv(e,Gb),Zb=dv();Qb.write=e=>sv(e,Zb);var Xb=dv();Qb.onStart=e=>sv(e,Xb);var Jb=dv();Qb.onFrame=e=>sv(e,Jb);var ev=dv();Qb.onFinish=e=>sv(e,ev);var tv=[];Qb.setTimeout=(e,t)=>{const r=Qb.now()+t,n=()=>{const e=tv.findIndex((e=>e.cancel==n));~e&&tv.splice(e,1),iv-=~e?1:0},o={time:r,handler:e,cancel:n};return tv.splice(rv(r),0,o),iv+=1,lv(),o};var rv=e=>~(~tv.findIndex((t=>t.time>e))||~tv.length);Qb.cancel=e=>{Xb.delete(e),Jb.delete(e),ev.delete(e),Gb.delete(e),Zb.delete(e)},Qb.sync=e=>{av=!0,Qb.batchedUpdates(e),av=!1},Qb.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Qb.onStart(r)}return n.handler=e,n.cancel=()=>{Xb.delete(r),t=null},n};var nv="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Qb.use=e=>nv=e,Qb.now="undefined"!=typeof performance?()=>performance.now():Date.now,Qb.batchedUpdates=e=>e(),Qb.catch=console.error,Qb.frameLoop="always",Qb.advance=()=>{"demand"!==Qb.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):uv()};var ov=-1,iv=0,av=!1;function sv(e,t){av?(t.delete(e),e(0)):(t.add(e),lv())}function lv(){ov<0&&(ov=0,"demand"!==Qb.frameLoop&&nv(cv))}function cv(){~ov&&(nv(cv),Qb.batchedUpdates(uv))}function uv(){const e=ov;ov=Qb.now();const t=rv(ov);t&&(fv(tv.splice(0,t),(e=>e.handler())),iv-=t),iv?(Xb.flush(),Gb.flush(e?Math.min(64,ov-e):16.667),Jb.flush(),Zb.flush(),ev.flush()):ov=-1}function dv(){let e=new Set,t=e;return{add(r){iv+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(iv-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,iv-=t.size,fv(t,(t=>t(r)&&e.add(t))),iv+=e.size,t=e)}}}function fv(e,t){e.forEach((e=>{try{t(e)}catch(e){Qb.catch(e)}}))}function hv(){}var pv={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function gv(e,t){if(pv.arr(e)){if(!pv.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var mv=(e,t)=>e.forEach(t);function bv(e,t,r){if(pv.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var vv=e=>pv.und(e)?[]:pv.arr(e)?e:[e];function yv(e,t){if(e.size){const r=Array.from(e);e.clear(),mv(r,t)}}var xv,wv,$v=(e,...t)=>yv(e,(e=>e(...t))),Cv=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Sv=null,Dv=!1,kv=hv,_v=e=>{e.to&&(wv=e.to),e.now&&(Qb.now=e.now),void 0!==e.colors&&(Sv=e.colors),null!=e.skipAnimation&&(Dv=e.skipAnimation),e.createStringInterpolator&&(xv=e.createStringInterpolator),e.requestAnimationFrame&&Qb.use(e.requestAnimationFrame),e.batchedUpdates&&(Qb.batchedUpdates=e.batchedUpdates),e.willAdvance&&(kv=e.willAdvance),e.frameLoop&&(Qb.frameLoop=e.frameLoop)},Ov=new Set,Ev=[],Tv=[],Iv=0,Fv={get idle(){return!Ov.size&&!Ev.length},start(e){Iv>e.priority?(Ov.add(e),Qb.onStart(Mv)):(Av(e),Qb(Rv))},advance:Rv,sort(e){if(Iv)Qb.onFrame((()=>Fv.sort(e)));else{const t=Ev.indexOf(e);~t&&(Ev.splice(t,1),jv(e))}},clear(){Ev=[],Ov.clear()}};function Mv(){Ov.forEach(Av),Ov.clear(),Qb(Rv)}function Av(e){Ev.includes(e)||jv(e)}function jv(e){Ev.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Ev,(t=>t.priority>e.priority)),0,e)}function Rv(e){const t=Tv;for(let r=0;r<Ev.length;r++){const n=Ev[r];Iv=n.priority,n.idle||(kv(n),n.advance(e),n.idle||t.push(n))}return Iv=0,(Tv=Ev).length=0,(Ev=t).length>0}var zv="[-+]?\\d*\\.?\\d+",Bv=zv+"%";function Pv(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Lv=new RegExp("rgb"+Pv(zv,zv,zv)),Nv=new RegExp("rgba"+Pv(zv,zv,zv,zv)),Hv=new RegExp("hsl"+Pv(zv,Bv,Bv)),Wv=new RegExp("hsla"+Pv(zv,Bv,Bv,zv)),Vv=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Yv=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Uv=/^#([0-9a-fA-F]{6})$/,Kv=/^#([0-9a-fA-F]{8})$/;function qv(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Gv(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,o=2*r-n,i=qv(o,n,e+1/3),a=qv(o,n,e),s=qv(o,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Qv(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Zv(e){return(parseFloat(e)%360+360)%360/360}function Xv(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Jv(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function ey(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Uv.exec(e))?parseInt(t[1]+"ff",16)>>>0:Sv&&void 0!==Sv[e]?Sv[e]:(t=Lv.exec(e))?(Qv(t[1])<<24|Qv(t[2])<<16|Qv(t[3])<<8|255)>>>0:(t=Nv.exec(e))?(Qv(t[1])<<24|Qv(t[2])<<16|Qv(t[3])<<8|Xv(t[4]))>>>0:(t=Vv.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Kv.exec(e))?parseInt(t[1],16)>>>0:(t=Yv.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Hv.exec(e))?(255|Gv(Zv(t[1]),Jv(t[2]),Jv(t[3])))>>>0:(t=Wv.exec(e))?(Gv(Zv(t[1]),Jv(t[2]),Jv(t[3]))|Xv(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var ty=(e,t,r)=>{if(pv.fun(e))return e;if(pv.arr(e))return ty({range:e,output:t,extrapolate:r});if(pv.str(e.output[0]))return xv(e);const n=e,o=n.output,i=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,o,i,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===o)return n;if(t===r)return e<=t?n:o;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=i(c),n===-1/0?c=-c:o===1/0?c+=n:c=c*(o-n)+n;return c}(e,i[t],i[t+1],o[t],o[t+1],l,a,s,n.map)}};var ry=1.70158,ny=1.525*ry,oy=ry+1,iy=2*Math.PI/3,ay=2*Math.PI/4.5,sy=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},ly={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>oy*e*e*e-ry*e*e,easeOutBack:e=>1+oy*Math.pow(e-1,3)+ry*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ny)/2:(Math.pow(2*e-2,2)*((ny+1)*(2*e-2)+ny)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*iy),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*iy)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*ay)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*ay)/2+1,easeInBounce:e=>1-sy(1-e),easeOutBounce:sy,easeInOutBounce:e=>e<.5?(1-sy(1-2*e))/2:(1+sy(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,o="end"===t?Math.floor(n):Math.ceil(n);return i=0,a=1,s=o/e,Math.min(Math.max(s,i),a);var i,a,s}},cy=Symbol.for("FluidValue.get"),uy=Symbol.for("FluidValue.observers"),dy=e=>Boolean(e&&e[cy]),fy=e=>e&&e[cy]?e[cy]():e,hy=e=>e[uy]||null;function py(e,t){const r=e[uy];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var gy=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");my(this,e)}},my=(e,t)=>xy(e,cy,t);function by(e,t){if(e[cy]){let r=e[uy];r||xy(e,uy,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function vy(e,t){const r=e[uy];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[uy]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var yy,xy=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),wy=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,$y=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Cy=new RegExp(`(${wy.source})(%|[a-z]+)`,"i"),Sy=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Dy=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ky=e=>{const[t,r]=_y(e);if(!t||Cv())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Dy.test(r)?ky(r):r||e},_y=e=>{const t=Dy.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},Oy=(e,t,r,n,o)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,Ey=e=>{yy||(yy=Sv?new RegExp(`(${Object.keys(Sv).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>fy(e).replace(Dy,ky).replace($y,ey).replace(yy,ey))),r=t.map((e=>e.match(wy).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),o=n.map((t=>ty({...e,output:t})));return e=>{const r=!Cy.test(t[0])&&t.find((e=>Cy.test(e)))?.replace(wy,"");let n=0;return t[0].replace(wy,(()=>`${o[n++](e)}${r||""}`)).replace(Sy,Oy)}},Ty="react-spring: ",Iy=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Ty}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Fy=Iy(console.warn);var My=Iy(console.warn);function Ay(e){return pv.str(e)&&("#"==e[0]||/\d/.test(e)||!Cv()&&Dy.test(e)||e in(Sv||{}))}var jy=Cv()?c:p;function Ry(){const e=g()[1],t=(()=>{const e=s(!1);return jy((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var zy=e=>c(e,By),By=[];function Py(e){const t=s();return c((()=>{t.current=e})),t.current}var Ly=Symbol.for("Animated:node"),Ny=e=>e&&e[Ly],Hy=(e,t)=>((e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}))(e,Ly,t),Wy=e=>e&&e[Ly]&&e[Ly].getPayload(),Vy=class{constructor(){Hy(this,this)}getPayload(){return this.payload||[]}},Yy=class extends Vy{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,pv.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Yy(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return pv.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,pv.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Uy=class extends Yy{constructor(e){super(0),this._string=null,this._toString=ty({output:[e,e]})}static create(e){return new Uy(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(pv.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ty({output:[this.getValue(),e]})),this._value=0,super.reset()}},Ky={dependencies:null},qy=class extends Vy{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return bv(this.source,((r,n)=>{var o;(o=r)&&o[Ly]===o?t[n]=r.getValue(e):dy(r)?t[n]=fy(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&mv(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return bv(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Ky.dependencies&&dy(e)&&Ky.dependencies.add(e);const t=Wy(e);t&&mv(t,(e=>this.add(e)))}},Gy=class extends qy{constructor(e){super(e)}static create(e){return new Gy(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Qy)),!0)}};function Qy(e){return(Ay(e)?Uy:Yy).create(e)}function Zy(e){const t=Ny(e);return t?t.constructor:pv.arr(e)?Gy:Ay(e)?Uy:Yy}var Xy=(e,t)=>{const r=!pv.fun(e)||e.prototype&&e.prototype.isReactComponent;return d(((o,i)=>{const a=s(null),l=r&&u((e=>{a.current=function(e,t){e&&(pv.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[d,f]=function(e,t){const r=new Set;Ky.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new qy(e),Ky.dependencies=null,[e,r]}(o,t),h=Ry(),p=()=>{const e=a.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&h()},g=new Jy(p,f),m=s();jy((()=>(m.current=g,mv(f,(e=>by(e,g))),()=>{m.current&&(mv(m.current.deps,(e=>vy(e,m.current))),Qb.cancel(m.current.update))}))),c(p,[]),zy((()=>()=>{const e=m.current;mv(e.deps,(t=>vy(t,e)))}));const b=t.getComponentProps(d.getValue());return n.createElement(e,{...b,ref:l})}))},Jy=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Qb.write(this.update)}};var ex=Symbol.for("AnimatedComponent"),tx=e=>pv.str(e)?e:e&&pv.str(e.displayName)?e.displayName:pv.fun(e)&&e.name||null;function rx(e,...t){return pv.fun(e)?e(...t):e}var nx=(e,t)=>!0===e||!!(t&&e&&(pv.fun(e)?e(t):vv(e).includes(t))),ox=(e,t)=>pv.obj(e)?t&&e[t]:e,ix=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,ax=e=>e,sx=(e,t=ax)=>{let r=lx;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const o of r){const r=t(e[o],o);pv.und(r)||(n[o]=r)}return n},lx=["config","onProps","onStart","onChange","onPause","onResume","onRest"],cx={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function ux(e){const t=function(e){const t={};let r=0;if(bv(e,((e,n)=>{cx[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return bv(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function dx(e){return e=fy(e),pv.arr(e)?e.map(dx):Ay(e)?qb.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function fx(e){return pv.fun(e)||pv.arr(e)&&pv.obj(e[0])}var hx={tension:170,friction:26,mass:1,damping:1,easing:ly.linear,clamp:!1},px=class{constructor(){this.velocity=0,Object.assign(this,hx)}};function gx(e,t){if(pv.und(t.decay)){const r=!pv.und(t.tension)||!pv.und(t.friction);!r&&pv.und(t.frequency)&&pv.und(t.damping)&&pv.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var mx=[],bx=class{constructor(){this.changed=!1,this.values=mx,this.toValues=null,this.fromValues=mx,this.config=new px,this.immediate=!1}};function vx(e,{key:t,props:r,defaultProps:n,state:o,actions:i}){return new Promise(((a,s)=>{let l,c,u=nx(r.cancel??n?.cancel,t);if(u)h();else{pv.und(r.pause)||(o.paused=nx(r.pause,t));let e=n?.pause;!0!==e&&(e=o.paused||nx(e,t)),l=rx(r.delay||0,t),e?(o.resumeQueue.add(f),i.pause()):(i.resume(),f())}function d(){o.resumeQueue.add(f),o.timeouts.delete(c),c.cancel(),l=c.time-Qb.now()}function f(){l>0&&!qb.skipAnimation?(o.delayed=!0,c=Qb.setTimeout(h,l),o.pauseQueue.add(d),o.timeouts.add(c)):h()}function h(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(d),o.timeouts.delete(c),e<=(o.cancelId||0)&&(u=!0);try{i.start({...r,callId:e,cancel:u},a)}catch(e){s(e)}}}))}var yx=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?$x(e.get()):t.every((e=>e.noop))?xx(e.get()):wx(e.get(),t.every((e=>e.finished))),xx=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),wx=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),$x=e=>({value:e,cancelled:!0,finished:!1});function Cx(e,t,r,n){const{callId:o,parentId:i,onRest:a}=t,{asyncTo:s,promise:l}=r;return i||e!==s||t.reset?r.promise=(async()=>{r.asyncId=o,r.asyncTo=e;const c=sx(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const f=new Promise(((e,t)=>(u=e,d=t))),h=e=>{const t=o<=(r.cancelId||0)&&$x(n)||o!==r.asyncId&&wx(n,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const i=new Dx,a=new kx;return(async()=>{if(qb.skipAnimation)throw Sx(r),a.result=wx(n,!1),d(a),a;h(i);const s=pv.obj(e)?{...e}:{...t,to:e};s.parentId=o,bv(c,((e,t)=>{pv.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return h(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(qb.skipAnimation)return Sx(r),wx(n,!1);try{let t;t=pv.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(u),f]),g=wx(n.get(),!0,!1)}catch(e){if(e instanceof Dx)g=e.result;else{if(!(e instanceof kx))throw e;g=e.result}}finally{o==r.asyncId&&(r.asyncId=i,r.asyncTo=i?s:void 0,r.promise=i?l:void 0)}return pv.fun(a)&&Qb.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function Sx(e,t){yv(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Dx=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},kx=class extends Error{constructor(){super("SkipAnimationSignal")}},_x=e=>e instanceof Ex,Ox=1,Ex=class extends gy{constructor(){super(...arguments),this.id=Ox++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Ny(this);return e&&e.getValue()}to(...e){return qb.to(this,e)}interpolate(...e){return Fy(`${Ty}The "interpolate" function is deprecated in v9 (use "to" instead)`),qb.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){py(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Fv.sort(this),py(this,{type:"priority",parent:this,priority:e})}},Tx=Symbol.for("SpringPhase"),Ix=e=>(1&e[Tx])>0,Fx=e=>(2&e[Tx])>0,Mx=e=>(4&e[Tx])>0,Ax=(e,t)=>t?e[Tx]|=3:e[Tx]&=-3,jx=(e,t)=>t?e[Tx]|=4:e[Tx]&=-5,Rx=class extends Ex{constructor(e,t){if(super(),this.animation=new bx,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!pv.und(e)||!pv.und(t)){const r=pv.obj(e)?{...e}:{...t,from:e};pv.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Fx(this)||this._state.asyncTo)||Mx(this)}get goal(){return fy(this.animation.to)}get velocity(){const e=Ny(this);return e instanceof Yy?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Ix(this)}get isAnimating(){return Fx(this)}get isPaused(){return Mx(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:o}=n;const{config:i}=n,a=Wy(n.to);!a&&dy(n.to)&&(o=vv(fy(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==Uy?1:a?a[l].lastPosition:o[l];let u=n.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],o=null!=s.v0?s.v0:s.v0=pv.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const f=i.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(pv.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);d=r+o/(1-e)*(1-n),u=Math.abs(s.lastPosition-d)<=f,a=o*n}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||f/10,n=i.clamp?0:i.bounce,l=!pv.und(n),h=r==c?s.v0>0:r<c;let p,g=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(a)>t,p||(u=Math.abs(c-d)<=f,!u));++e){l&&(g=d==c||d>c==h,g&&(a=-a*n,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+i.easing(n)*(c-r),a=(d-s.lastPosition)/e,u=1==n}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(r=!0)}));const s=Ny(this),l=s.getValue();if(t){const e=fy(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Qb.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Fx(this)){const{to:e,config:t}=this.animation;Qb.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return pv.und(e)?(r=this.queue||[],this.queue=[]):r=[pv.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>yx(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Sx(this._state,e&&this._lastCallId),Qb.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=pv.obj(r)?r[t]:r,(null==r||fx(r))&&(r=void 0),n=pv.obj(n)?n[t]:n,null==n&&(n=void 0);const o={to:r,from:n};return Ix(this)||(e.reverse&&([r,n]=[n,r]),n=fy(n),pv.und(n)?Ny(this)||this._set(r):this._set(n)),o}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,sx(e,((e,t)=>/^on/.test(t)?ox(e,r):e))),Wx(this,e,"onProps"),Vx(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return vx(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{Mx(this)||(jx(this,!0),$v(i.pauseQueue),Vx(this,"onPause",wx(this,zx(this,this.animation.to)),this))},resume:()=>{Mx(this)&&(jx(this,!1),Fx(this)&&this._resume(),$v(i.resumeQueue),Vx(this,"onResume",wx(this,zx(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=Bx(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r($x(this));const n=!pv.und(e.to),o=!pv.und(e.from);if(n||o){if(!(t.callId>this._lastToId))return r($x(this));this._lastToId=t.callId}const{key:i,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!o||n||t.default&&!pv.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const f=!gv(d,c);f&&(s.from=d),d=fy(d);const h=!gv(u,l);h&&this._focus(u);const p=fx(t.to),{config:g}=s,{decay:m,velocity:b}=g;(n||o)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(gx(r={...r},t),t={...r,...t}),gx(e,t),Object.assign(e,t);for(const t in hx)null==e[t]&&(e[t]=hx[t]);let{frequency:n,damping:o}=e;const{mass:i}=e;pv.und(n)||(n<.01&&(n=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*o*i/n)}(g,rx(t.config,i),t.config!==a.config?rx(a.config,i):void 0);let v=Ny(this);if(!v||pv.und(u))return r(wx(this,!0));const y=pv.und(t.reset)?o&&!t.default:!pv.und(d)&&nx(t.reset,i),x=y?d:this.get(),w=dx(u),$=pv.num(w)||pv.arr(w)||Ay(w),C=!p&&(!$||nx(a.immediate||t.immediate,i));if(h){const e=Zy(u);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let D=dy(u),k=!1;if(!D){const e=y||!Ix(this)&&f;(h||e)&&(k=gv(dx(x),w),D=!k),(gv(s.immediate,C)||C)&&gv(g.decay,m)&&gv(g.velocity,b)||(D=!0)}if(k&&Fx(this)&&(s.changed&&!y?D=!0:D||this._stop(l)),!p&&((D||dy(l))&&(s.values=v.getPayload(),s.toValues=dy(u)?null:S==Uy?[1]:vv(w)),s.immediate!=C&&(s.immediate=C,C||y||this._set(l)),D)){const{onRest:e}=s;mv(Hx,(e=>Wx(this,t,e)));const n=wx(this,zx(this,l));$v(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Qb.batchedUpdates((()=>{s.changed=!y,e?.(n,this),y?rx(a.onRest,n):s.onStart?.(n,this)}))}y&&this._set(x),p?r(Cx(t.to,t,this._state,this)):D?this._start():Fx(this)&&!h?this._pendingCalls.add(r):r(xx(x))}_focus(e){const t=this.animation;e!==t.to&&(hy(this)&&this._detach(),t.to=e,hy(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;dy(t)&&(by(t,this),_x(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;dy(e)&&vy(e,this)}_set(e,t=!0){const r=fy(e);if(!pv.und(r)){const e=Ny(this);if(!e||!gv(r,e.getValue())){const n=Zy(r);e&&e.constructor==n?e.setValue(r):Hy(this,n.create(r)),e&&Qb.batchedUpdates((()=>{this._onChange(r,t)}))}}return Ny(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Vx(this,"onStart",wx(this,zx(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),rx(this.animation.onChange,e,this)),rx(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Ny(this).reset(fy(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Fx(this)||(Ax(this,!0),Mx(this)||this._resume())}_resume(){qb.skipAnimation?this.finish():Fv.start(this)}_stop(e,t){if(Fx(this)){Ax(this,!1);const r=this.animation;mv(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),py(this,{type:"idle",parent:this});const n=t?$x(this.get()):wx(this.get(),zx(this,e??r.to));$v(this._pendingCalls,n),r.changed&&(r.changed=!1,Vx(this,"onRest",n,this))}}};function zx(e,t){const r=dx(t);return gv(dx(e.get()),r)}function Bx(e,t=e.loop,r=e.to){const n=rx(t);if(n){const o=!0!==n&&ux(n),i=(o||e).reverse,a=!o||o.reset;return Px({...e,loop:t,default:!1,pause:void 0,to:!i||fx(r)?r:void 0,from:a?e.from:void 0,reset:a,...o})}}function Px(e){const{to:t,from:r}=e=ux(e),n=new Set;return pv.obj(t)&&Nx(t,n),pv.obj(r)&&Nx(r,n),e.keys=n.size?Array.from(n):null,e}function Lx(e){const t=Px(e);return pv.und(t.default)&&(t.default=sx(t)),t}function Nx(e,t){bv(e,((e,r)=>null!=e&&t.add(r)))}var Hx=["onStart","onRest","onChange","onPause","onResume"];function Wx(e,t,r){e.animation[r]=t[r]!==ix(t,r)?ox(t[r],e.key):void 0}function Vx(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Yx=["onStart","onChange","onRest"],Ux=1,Kx=class{constructor(e,t){this.id=Ux++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];pv.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(Px(e)),this}start(e){let{queue:t}=this;return e?t=vv(e).map(Px):this.queue=[],this._flush?this._flush(this,t):(ew(this,t),qx(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;mv(vv(t),(t=>r[t].stop(!!e)))}else Sx(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(pv.und(e))this.start({pause:!0});else{const t=this.springs;mv(vv(e),(e=>t[e].pause()))}return this}resume(e){if(pv.und(e))this.start({pause:!1});else{const t=this.springs;mv(vv(e),(e=>t[e].resume()))}return this}each(e){bv(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,o=this._changed.size>0;(n&&!this._started||o&&!this._started)&&(this._started=!0,yv(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,a=o||i&&r.size?this.get():null;o&&t.size&&yv(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),i&&(this._started=!1,yv(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Qb.onFrame(this._onFrame)}};function qx(e,t){return Promise.all(t.map((t=>Gx(e,t)))).then((t=>yx(e,t)))}async function Gx(e,t,r){const{keys:n,to:o,from:i,loop:a,onRest:s,onResolve:l}=t,c=pv.obj(t.default)&&t.default;a&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const u=pv.arr(o)||pv.fun(o)?o:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):mv(Yx,(r=>{const n=t[r];if(pv.fun(n)){const o=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=o.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):o.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,$v(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const f=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),h=!0===t.cancel||!0===ix(t,"cancel");(u||h&&d.asyncId)&&f.push(vx(++e._lastAsyncId,{props:t,state:d,actions:{pause:hv,resume:hv,start(t,r){h?(Sx(d,e._lastAsyncId),r($x(e))):(t.onRest=s,r(Cx(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=yx(e,await Promise.all(f));if(a&&p.finished&&(!r||!p.noop)){const r=Bx(t,a,o);if(r)return ew(e,[r]),Gx(e,r,!0)}return l&&Qb.batchedUpdates((()=>l(p,e,e.item))),p}function Qx(e,t){const r={...e.springs};return t&&mv(vv(t),(e=>{pv.und(e.keys)&&(e=Px(e)),pv.obj(e.to)||(e={...e,to:void 0}),Jx(r,e,(e=>Xx(e)))})),Zx(e,r),r}function Zx(e,t){bv(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,by(t,e))}))}function Xx(e,t){const r=new Rx;return r.key=e,t&&by(r,t),r}function Jx(e,t,r){t.keys&&mv(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function ew(e,t){mv(t,(t=>{Jx(e.springs,t,(t=>Xx(t,e)))}))}var tw,rw,nw=({children:e,...t})=>{const r=b(ow),o=t.pause||!!r.pause,i=t.immediate||!!r.immediate;t=function(e,t){const[r]=g((()=>({inputs:t,result:e()}))),n=s(),o=n.current;let i=o;if(i){const r=Boolean(t&&i.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,i.inputs));r||(i={inputs:t,result:e()})}else i=r;return c((()=>{n.current=i,o==r&&(r.inputs=r.result=void 0)}),[i]),i.result}((()=>({pause:o,immediate:i})),[o,i]);const{Provider:a}=ow;return n.createElement(a,{value:t},e)},ow=(tw=nw,rw={},Object.assign(tw,n.createContext(rw)),tw.Provider._context=tw,tw.Consumer._context=tw,tw);nw.Provider=ow.Provider,nw.Consumer=ow.Consumer;var iw=()=>{const e=[],t=function(t){My(`${Ty}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return mv(e,((e,o)=>{if(pv.und(t))n.push(e.start());else{const i=r(t,e,o);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return mv(e,(e=>e.pause(...arguments))),this},t.resume=function(){return mv(e,(e=>e.resume(...arguments))),this},t.set=function(t){mv(e,((e,r)=>{const n=pv.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return mv(e,((e,n)=>{if(pv.und(t))r.push(e.start());else{const o=this._getProps(t,e,n);o&&r.push(e.start(o))}})),r},t.stop=function(){return mv(e,(e=>e.stop(...arguments))),this},t.update=function(t){return mv(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return pv.fun(e)?e(r,t):e};return t._getProps=r,t};function aw(e,t){const r=pv.fun(e),[[n],o]=function(e,t,r){const n=pv.fun(t)&&t;n&&!r&&(r=[]);const o=a((()=>n||3==arguments.length?iw():void 0),[]),i=s(0),l=Ry(),c=a((()=>({ctrls:[],queue:[],flush(e,t){const r=Qx(e,t),n=i.current>0&&!c.queue.length&&!Object.keys(r).some((t=>!e.springs[t]));return n?qx(e,t):new Promise((n=>{Zx(e,r),c.queue.push((()=>{n(qx(e,t))})),l()}))}})),[]),u=s([...c.ctrls]),d=[],f=Py(e)||0;function h(e,r){for(let o=e;o<r;o++){const e=u.current[o]||(u.current[o]=new Kx(null,c.flush)),r=n?n(o,e):t[o];r&&(d[o]=Lx(r))}}a((()=>{mv(u.current.slice(e,f),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),u.current.length=e,h(f,e)}),[e]),a((()=>{h(0,Math.min(f,e))}),r);const p=u.current.map(((e,t)=>Qx(e,d[t]))),g=b(nw),m=Py(g),v=g!==m&&function(e){for(const t in e)return!0;return!1}(g);jy((()=>{i.current++,c.ctrls=u.current;const{queue:e}=c;e.length&&(c.queue=[],mv(e,(e=>e()))),mv(u.current,((e,t)=>{o?.add(e),v&&e.start({default:g});const r=d[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),zy((()=>()=>{mv(c.ctrls,(e=>e.stop(!0)))}));const y=p.map((e=>({...e})));return o?[y,o]:y}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,o]:n}var sw=class extends Ex{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=ty(...t);const r=this._get(),n=Zy(r);Hy(this,n.create(r))}advance(e){const t=this._get();gv(t,this.get())||(Ny(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&cw(this._active)&&uw(this)}_get(){const e=pv.arr(this.source)?this.source.map(fy):vv(fy(this.source));return this.calc(...e)}_start(){this.idle&&!cw(this._active)&&(this.idle=!1,mv(Wy(this),(e=>{e.done=!1})),qb.skipAnimation?(Qb.batchedUpdates((()=>this.advance())),uw(this)):Fv.start(this))}_attach(){let e=1;mv(vv(this.source),(t=>{dy(t)&&by(t,this),_x(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){mv(vv(this.source),(e=>{dy(e)&&vy(e,this)})),this._active.clear(),uw(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=vv(this.source).reduce(((e,t)=>Math.max(e,(_x(t)?t.priority:0)+1)),0))}};function lw(e){return!1!==e.idle}function cw(e){return!e.size||Array.from(e).every(lw)}function uw(e){e.idle||(e.idle=!0,mv(Wy(e),(e=>{e.done=!0})),py(e,{type:"idle",parent:e}))}qb.assign({createStringInterpolator:Ey,to:(e,t)=>new sw(e,t)});var dw=/^--/;function fw(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||dw.test(e)||pw.hasOwnProperty(e)&&pw[e]?(""+t).trim():t+"px"}var hw={};var pw={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gw=["Webkit","Ms","Moz","O"];pw=Object.keys(pw).reduce(((e,t)=>(gw.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),pw);var mw=/^(matrix|translate|scale|rotate|skew)/,bw=/^(translate)/,vw=/^(rotate|skew)/,yw=(e,t)=>pv.num(e)&&0!==e?e+t:e,xw=(e,t)=>pv.arr(e)?e.every((e=>xw(e,t))):pv.num(e)?e===t:parseFloat(e)===t,ww=class extends qy{constructor({x:e,y:t,z:r,...n}){const o=[],i=[];(e||t||r)&&(o.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>yw(e,"px"))).join(",")})`,xw(e,0)]))),bv(n,((e,t)=>{if("transform"===t)o.push([e||""]),i.push((e=>[e,""===e]));else if(mw.test(t)){if(delete n[t],pv.und(e))return;const r=bw.test(t)?"px":vw.test(t)?"deg":"";o.push(vv(e)),i.push("rotate3d"===t?([e,t,n,o])=>[`rotate3d(${e},${t},${n},${yw(o,r)})`,xw(o,0)]:e=>[`${t}(${e.map((e=>yw(e,r))).join(",")})`,xw(e,t.startsWith("scale")?1:0)])}})),o.length&&(n.transform=new $w(o,i)),super(n)}},$w=class extends gy{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return mv(this.inputs,((r,n)=>{const o=fy(r[0]),[i,a]=this.transforms[n](pv.arr(o)?o:r.map(fy));e+=" "+i,t=t&&a})),t?"none":e}observerAdded(e){1==e&&mv(this.inputs,(e=>mv(e,(e=>dy(e)&&by(e,this)))))}observerRemoved(e){0==e&&mv(this.inputs,(e=>mv(e,(e=>dy(e)&&vy(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),py(this,e)}};qb.assign({batchedUpdates:M,createStringInterpolator:Ey,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Cw=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new qy(e),getComponentProps:n=e=>e}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=tx(e)||"Anonymous";return(e=pv.str(e)?i[e]||(i[e]=Xy(e,o)):e[ex]||(e[ex]=Xy(e,o))).displayName=`Animated(${t})`,e};return bv(e,((t,r)=>{pv.arr(e)&&(r=tx(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:o,scrollTop:i,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),u=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:hw[t]||(hw[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(const t in n)if(n.hasOwnProperty(t)){const r=fw(t,n[t]);dw.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==i&&(e.scrollTop=i),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new ww(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Sw=Cw.animated;const Dw=T`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,kw=_.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>O`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,_w=O`
    animation: ${Fi["duration-150"]} ${Fi["ease-default"]} ${Dw};
    width: 100%;
    height: 100%;
    transition: color ${Fi["duration-150"]} ${Fi["ease-default"]};
`,Ow=_(le)`
    ${_w}
    color: ${Ti["icon-primary-subtlest"]};
`,Ew=_(ce)`
    ${_w}
    color: ${Ti["icon-disabled-subtle"]};
`,Tw=_(ue)`
    ${_w}
    color: ${e=>e.$disabled?Ti["icon-disabled-subtle"](e):Ti["icon-selected"](e)};
`,Iw=_(de)`
    ${_w}
    color: ${e=>e.$disabled?Ti["icon-disabled-subtle"](e):Ti["icon-selected"](e)};
`,Fw=_.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${Ow},
        &:hover
        + ${Tw},
        &:hover
        + ${Iw} {
        color: ${e=>!e.disabled&&Ti["icon-hover"](e)};
    }
`,Mw=_(Sw.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Aw=_.ul`
    border-bottom-left-radius: ${ji.sm};
    border-bottom-right-radius: ${ji.sm};
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: ${Ai["spacing-8"]};
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Ti["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }

    ${zi.MaxWidth.sm} {
        max-height: 15rem;
    }
`,jw=_.li`
    :hover,
    :focus,
    :active {
        background: ${Ti["bg-hover"]};
    }
    ${e=>{if(e.$checked)return O`
                background: ${Ti["bg-selected"]};
                :hover,
                :focus,
                :active {
                    background: ${Ti["bg-selected-hover"]};
                }
            `}}
`,Rw=_.button`
    display: flex;
    ${e=>e.$multiSelect?O`
                padding: ${Ai["spacing-8"]} ${Ai["spacing-16"]};
            `:O`
                padding: 15px ${Ai["spacing-16"]}; // TODO: confirm vertical spacing
                align-items: center;
            `}
    margin: 0 -${Ai["spacing-8"]};
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Ti["border-focus"]};
    }

    span {
        margin-bottom: 0;
    }
`,zw=O`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Bw=_.div`
    ${e=>"small"===e.$variant?Ii["body-md-regular"]:Ii["body-baseline-regular"]}
    color: ${Ti.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&zw}
`,Pw=_.div`
    color: ${Ti["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&zw}

    ${e=>"next-line"===e.$labelDisplayType?O`
                    ${Ii["body-md-semibold"]}
                `:O`
                    ${Ii["body-baseline-regular"]}
                `}
`,Lw=_.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return O`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return O`
                    ${Bw} {
                        display: inline;
                    }

                    ${Pw} {
                        display: inline;
                        margin-left: ${Ai["spacing-8"]};
                    }
                `}}}
`,Nw=_.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,Hw=_.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Ww=_((r=>{var{className:n,checked:o,disabled:i,indeterminate:a,onChange:l,onKeyPress:u,displaySize:d="default"}=r,f=ct(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const h=s(null);c((()=>{h.current&&(h.current.indeterminate=null!=a&&a)}),[a]);const p=e=>{if(!i){const t=e;if(!(" "===t.key||"change"===e.type))return;l&&l(e),u&&u(t)}};return e(kw,{className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":a?"mixed":o,"aria-labelledby":"checkbox-input",tabIndex:i?-1:0,onKeyDown:p,$displaySize:d,$disabled:i,$unchecked:!(a||o||i),children:[t(Fw,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:o,ref:h,tabIndex:-1,onChange:p,disabled:i},f)),a?t(Iw,{$disabled:i,"data-testid":"indeterminate"}):o?t(Tw,{$disabled:i,"data-testid":"checkmark"}):i?t(Ew,{"data-testid":"empty-disabled-checkbox"}):t(Ow,{$disabled:i,"data-testid":"empty-checkbox"})]})}))`
    flex-shrink: 0;
    margin-right: ${Ai["spacing-16"]};
`,Vw=_.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${Ai["spacing-16"]} 0 ${Ai["spacing-8"]} 0;
`,Yw=_.button`
    ${e=>"small"===e.$variant?Ii["body-md-semibold"]:Ii["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${Ti["text-primary"]};
`,Uw=_.div`
    width: 100%;
    display: flex;
    padding: 15px ${Ai["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${e=>"small"===e.$variant?Ii["body-md-regular"]:Ii["body-baseline-regular"]}
`,Kw=_(pe)`
    height: 1em;
    width: 1em;
    margin-right: ${Ai["spacing-4"]};
    color: ${Ti["icon-error"]};
`,qw=_(fd)`
    margin-right: ${Ai["spacing-4"]};
    color: ${Ti.icon};
`,Gw=e=>"small"===e?1:1.375,Qw=e=>O`
        height: ${Gw(e)}rem;
        width: ${Gw(e)}rem;
    `,Zw=_.li`
    background: ${Ti["bg-strong"]};
    display: flex;
    border-radius: ${ji.sm};
    align-items: center;
`,Xw=_(If)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 ${Ai["spacing-8"]} 0 0;
    width: 100%;
`,Jw=_(ge)`
    ${e=>Qw(e.$variant)}
    margin: 0 ${Ai["spacing-8"]};
    color: ${Ti.icon};
`,e$=_(cu)`
    ${e=>Qw(e.$variant)}
    padding: 0;
    margin: 0 ${Ai["spacing-8"]};
    color: ${Ti.icon};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return O`
                svg {
                    ${Qw(e.$variant)}
                }
            `}}
`,t$=d(((r,n)=>{const{onClear:o}=r,i=ct(r,["onClear"]);return e(Zw,{children:[t(Jw,{$variant:r.variant}),t(Xw,Object.assign({ref:n,$variant:r.variant},i)),i.value&&t(e$,{"aria-label":"Clear search",focusOutline:"browser",onClick:o,$variant:r.variant,children:t(fe,{})})]},"search")})),r$=n=>{var{listItems:o,listExtractor:i,valueExtractor:a,onSelectItem:l,listStyleWidth:u,visible:d,enableSearch:f,searchPlaceholder:h="Search",onSearch:p,searchFunction:m,onDismiss:b,disableItemFocus:v,multiSelect:y,selectedItems:x,onSelectAll:w,onRetry:$,itemsLoadState:C="success",itemTruncationType:S="end",itemMaxLines:D=2,labelDisplayType:k="inline",renderListItem:_,onBlur:O,hideNoResultsDisplay:E,renderCustomCallToAction:T,variant:I="default"}=n,F=ct(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[M,A]=g(0),[j,R]=g(""),[z,B]=g(null!=o?o:[]),[P,L]=g(0),N=aw({height:P}),H=s(null),W=s(null),V=s([]),Y=s(null),U=s(null),K=s(M),q=s(z),G=e=>{K.current=e,A(e)},Q=e=>{q.current=e,B(e)};c((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),c((()=>{ee(j)}),[j]),c((()=>{if(R(""),d){if(setTimeout((()=>{L(te())})),v)return;Y&&Y.current?(Y.current.focus(),G(-1)):V.current[M]&&V.current[M].focus()}else L(0)}),[d]),c((()=>{if(d){const e=te();L(e)}}),[z,C]),c((()=>{Q(null!=o?o:[]),R(""),G(0)}),[o]);const Z=e=>{const t=i?i(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},X=e=>{if("inline"!==k)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return Vc.getTextWidth(e,"1.125rem 'Open Sans'")>t*D},J=e=>!!Vb(x,(t=>Ub(t,e))),ee=e=>{if(""===e)Q(null!=o?o:[]);else if(m){const t=m(e);Q(t)}else{const t=null==o?void 0:o.filter((t=>{const{title:r,secondaryLabel:n}=Z(t),o=e.trim().toLowerCase();return r.includes(o)||n&&n.includes(o)}));Q(null!=t?t:[])}},te=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),re=e=>{var t,r;if(H&&H.current.contains(e.target))switch(e.code){case"ArrowDown":if(K.current<q.current.length-1){const e=K.current+1;null===(t=V.current[e])||void 0===t||t.focus(),G(e)}break;case"ArrowUp":if(K.current>0){const e=K.current-1;null===(r=V.current[e])||void 0===r||r.focus(),G(K.current-1)}break;case"Escape":b&&b(!0)}},ne=(e,t)=>{e.preventDefault(),l&&l(t,(e=>a?a(e):e)(t))},oe=e=>{const t=e.target.value;R(t),p&&p()},ie=()=>{var e;R(""),null===(e=Y.current)||void 0===e||e.focus(),p&&p()},ae=()=>{$&&$()},se=()=>{O&&O()},le=n=>e(r,{children:[t(Nw,{$maxLines:D,"aria-hidden":!0,children:n}),t(Hw,{$maxLines:D,"aria-hidden":!0,children:n})]}),ce=r=>{const{title:n,secondaryLabel:o}=Z(r),i=X(n),a=o&&X(o);return e(Lw,{$labelDisplayType:i||a?"next-line":k,children:[t(Bw,{$truncateType:S,$maxLines:D,$variant:I,"aria-label":n,children:"middle"===S&&i?le(n):n}),o&&t(Pw,{$truncateType:S,$maxLines:D,$labelDisplayType:k,"aria-label":o,children:"middle"===S&&a?le(o):o})]})},ue=()=>{if(!$||"success"===C)return z.map(((r,n)=>t(jw,{$checked:J(r)&&!y,children:e(Rw,{$hasNextLineLabel:"next-line"===k&&z.length>0&&i&&"string"!=typeof i(z[0]),onClick:e=>{ne(e,r)},ref:e=>V.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:d?0:-1,$multiSelect:y,onBlur:se,$variant:I,children:[y&&t(Ww,{checked:J(r),displaySize:"small"}),_?_(r,{selected:J(r)}):ce(r)]})},((e,t)=>`item_${t}__${a?a(e):e}`)(r,n))))},de=()=>{if(x&&y&&z.length>0&&!j&&"success"===C)return t(Vw,{children:t(Yw,{onClick:w,type:"button",$variant:I,children:0===x.length?"Select all":"Clear all"})},"selectAll")},fe=()=>{if(!E&&(j||!f)&&0===z.length&&"success"===C)return e(Uw,{"data-testid":"list-no-results",$variant:I,children:[t(Kw,{"data-testid":"no-result-icon",$variant:I}),"No results found."]},"noResults")},he=()=>{if($&&"loading"===C)return e(Uw,{"data-testid":"list-loading",$variant:I,children:[t(qw,{}),"Loading..."]},"loading")},pe=()=>{if($&&"fail"===C)return e(Uw,{"data-testid":"list-fail",$variant:I,children:[t(Kw,{"data-testid":"load-error-icon",$variant:I}),"Failed to load. ",t(Yw,{onClick:ae,type:"button",$variant:I,children:"Try again."})]},"noResults")};return t(r,{children:e(Mw,{style:N,"data-testid":d?"dropdown-container":"dropdown-container-hidden",ref:H,children:[(()=>{if(d)return e(Aw,Object.assign({ref:W,"data-testid":"dropdown-list",width:u,role:"list"},F,{children:[(f||m)&&"success"===C?t(t$,{ref:Y,onChange:oe,value:j,placeholder:h,"data-testid":"search-input","aria-label":"search-input",tabIndex:d?0:-1,onClear:ie,variant:I}):null,de(),fe(),he(),pe(),ue()]}))})(),(()=>{if(d&&T)return t("div",{ref:U,"data-testid":"custom-cta",children:T(b,z)})})()]})})},n$=_.div`
    position: relative;
    display: flex;
    align-items: center;
    ${e=>{if(e.$expanded)return O`
                border-bottom: ${Mi["width-010"]} ${Mi.solid}
                    ${Ti.border};
            `}}

    ${e=>e.$readOnly?O`
                border: 0;
                margin: 0;
            `:"right"===e.$position?O`
                        flex-direction: row-reverse;
                        margin: 0 ${Ai["spacing-16"]};
                    `:O`
                        flex-direction: row;
                        margin: 0 ${Ai["spacing-16"]};
                    `}
`,o$=_(Ku)`
    padding: 0;
    width: auto;
`,i$=_.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${Ai["spacing-12"]};
`,a$=_.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Fi["duration-250"]} ${Fi["ease-default"]};
    margin: 0 ${Ai["spacing-12"]};
    display: flex;
    align-items: center;
`,s$=_(re)`
    color: ${Ti.icon};
    height: ${Ii.Spec["body-size-baseline"]};
    width: ${Ii.Spec["body-size-baseline"]};
`,l$=_.div`
    display: flex;
    flex: 1 1 auto;
`,c$=_(Hi.BodyBL)`
    text-align: left;
    ${Bi(2)}
    text-overflow: ellipsis;
`,u$=_(c$)`
    color: ${Ti["text-subtler"]};
`,d$=_.div`
    width: 1px;
    background: ${Ti.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return O`
                display: none;
            `}}

    ${e=>"right"===e.$position?O`
                    margin: 0 ${Ai["spacing-12"]};
                `:O`
                    margin: 0 ${Ai["spacing-12"]} 0 0;
                `}
`,f$=_(Ef)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${Ai["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,h$=_(Ef)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${Ai["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,p$=_(ap)``,g$=_.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Ii["body-baseline-regular"]}
    color: ${Ti.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return O`
                color: ${Ti["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?O`
                    margin-left: ${e.$readOnly?Ai["spacing-4"]:Ai["spacing-12"]};
                `:O`
                    margin-right: ${e.$readOnly?Ai["spacing-4"]:Ai["spacing-12"]};
                `};
`,m$=o.forwardRef(((n,o)=>{var{addon:i,error:a,onChange:l,readOnly:u,className:d,onBlur:f}=n,h=ct(n,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:p,options:m,enableSearch:b,searchFunction:v,searchPlaceholder:y,valueExtractor:x,listExtractor:w,displayValueExtractor:$,selectedOption:C,onSelectOption:S,onHideOptions:D,onShowOptions:k,"data-selector-testid":_}=i.attributes,{position:O}=i,[E,T]=g(C),[I,F]=g(!1),M=s(null);c((()=>{T(C)}),[C]);const A=()=>{if(E)return $?$(E):x?x(E):E.toString()},j=e=>{!e&&D&&D(),e&&k&&k()},R=e=>{e.preventDefault(),h.disabled||(F(!I),j(!I))},z=(e,t)=>{var r;T(e),F(!1),j(!1),M&&(null===(r=M.current)||void 0===r||r.focus()),S&&S(e,t)},B=e=>{l&&l(e)},P=()=>{f&&f()},L=()=>{var e;F(!1),j(!1),M&&(null===(e=M.current)||void 0===e||e.focus())};return e(td,{className:d,show:I,error:a&&!I,disabled:h.disabled,readOnly:u,onBlur:()=>{F(!1),j(!1),P()},children:[e(n$,{$expanded:I,$readOnly:u,$position:O,children:[u?E?t(i$,{children:t(c$,{"data-testid":"selector-label",children:A()})}):null:t(o$,{ref:M,type:"button",disabled:h.disabled,"data-testid":_||"addon-selector",onClick:R,children:e(r,{children:[e(l$,{children:[p&&!E&&t(u$,{children:p}),E&&t(c$,{"data-testid":"selector-label",children:A()})]}),t(a$,{$expanded:I,children:t(s$,{})})]})}),t(d$,{$readOnly:u,$position:O}),t(p$,Object.assign({ref:o},h,{readOnly:u,error:a,onChange:B,"data-testid":h["data-testid"]||"input",onBlur:P,styleType:"no-border"}))]}),m&&m.length>0?t(r$,{listItems:m,selectedItems:C?[C]:[],onSelectItem:z,valueExtractor:x,listExtractor:w,visible:I,enableSearch:b,searchFunction:v,searchPlaceholder:y,"data-testid":"dropdown-list",onBlur:P,onDismiss:L}):t(r,{})]})})),b$=o.forwardRef(((r,n)=>{var{addon:o,error:i,className:a}=r,s=ct(r,["addon","error","className"]);const l=()=>t(h$,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a,children:t(p$,Object.assign({ref:n},s,{"data-testid":"input",styleType:"no-border"}))});if(!o)return l();{const{type:r="label",position:c="left"}=o,{allowClear:u}=s;switch(r){case"list":{const e=o.attributes;return e.options&&e.options.length>0?t(m$,Object.assign({ref:n,addon:o,error:i,className:a},s)):l()}case"custom":{const r=o.attributes;return r.children?e(f$,{$error:i,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[t(g$,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.children}),t(p$,Object.assign({ref:n},s,{allowClear:u&&"right"!==c,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}default:{const r=o.attributes;return r.value?e(f$,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[t(g$,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.value}),t(p$,Object.assign({ref:n},s,{allowClear:u&&"right"!==c,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}}}})),v$=o.forwardRef(((e,r)=>{const{label:n,errorMessage:o,id:i="form-field-group","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=e,y=ct(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Wu,{id:i,label:n,errorMessage:o,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:t(b$,Object.assign({ref:r,id:`${i}-base`,"data-testid":s||i,error:!!o},y))})})),y$=_(b$)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":Ai["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,x$=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=Ti.icon,$activeColor:r=Ti["icon-primary"]})=>e?t:r};
    padding: ${Ai["spacing-12"]} ${Ai["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,w$=_.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,$$=_(Hi.BodyBL)`
    color: ${Ti["text-subtler"]};
`,C$=_(fd)`
    margin-right: ${Ai["spacing-8"]};
    color: ${Ti.icon};
`,S$=_.span`
    color: ${Ti["text-primary"]};
    text-decoration: underline;
    font-weight: ${Ii.Spec["weight-semibold"]};
`,D$=_.span`
    display: flex;
    align-items: center;
    margin-right: ${Ai["spacing-8"]};
`,k$=_(ve)`
    color: ${Ti["icon-warning"]};
    margin-right: ${Ai["spacing-8"]};
    height: 1em;
    width: 1em;
`,_$=_.span`
    color: ${Ti["text-warning"]};
`,O$=_(Ff)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${Ii["body-baseline-regular"]}

    :hover, :active, :focus {
        ${S$} {
            color: ${Ti["text-hover"]};
        }
    }
`;var E$,T$,I$={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */E$=I$,T$=I$.exports,function(){var e,t="Expected a function",r="__lodash_hash_undefined__",n="__lodash_placeholder__",o=16,i=32,a=64,s=128,l=256,c=1/0,u=9007199254740991,d=NaN,f=4294967295,h=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",o],["flip",512],["partial",i],["partialRight",a],["rearg",l]],p="[object Arguments]",g="[object Array]",m="[object Boolean]",b="[object Date]",v="[object Error]",y="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",C="[object Object]",S="[object Promise]",D="[object RegExp]",k="[object Set]",_="[object String]",O="[object Symbol]",E="[object WeakMap]",T="[object ArrayBuffer]",I="[object DataView]",F="[object Float32Array]",M="[object Float64Array]",A="[object Int8Array]",j="[object Int16Array]",R="[object Int32Array]",z="[object Uint8Array]",B="[object Uint8ClampedArray]",P="[object Uint16Array]",L="[object Uint32Array]",N=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,V=/&(?:amp|lt|gt|quot|#39);/g,Y=/[&<>"']/g,U=RegExp(V.source),K=RegExp(Y.source),q=/<%-([\s\S]+?)%>/g,G=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,Z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,X=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),re=/^\s+/,ne=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ie=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,ce=/\\(\\)?/g,ue=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,de=/\w*$/,fe=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,pe=/^\[object .+?Constructor\]$/,ge=/^0o[0-7]+$/i,me=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",$e="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",De="\\ufe0e\\ufe0f",ke="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",_e="['’]",Oe="["+xe+"]",Ee="["+ke+"]",Te="["+we+"]",Ie="\\d+",Fe="["+$e+"]",Me="["+Ce+"]",Ae="[^"+xe+ke+Ie+$e+Ce+Se+"]",Re="\\ud83c[\\udffb-\\udfff]",ze="[^"+xe+"]",Be="(?:\\ud83c[\\udde6-\\uddff]){2}",Pe="[\\ud800-\\udbff][\\udc00-\\udfff]",Le="["+Se+"]",Ne="\\u200d",He="(?:"+Me+"|"+Ae+")",We="(?:"+Le+"|"+Ae+")",Ve="(?:['’](?:d|ll|m|re|s|t|ve))?",Ye="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ue="(?:"+Te+"|"+Re+")?",Ke="["+De+"]?",qe=Ke+Ue+"(?:"+Ne+"(?:"+[ze,Be,Pe].join("|")+")"+Ke+Ue+")*",Ge="(?:"+[Fe,Be,Pe].join("|")+")"+qe,Qe="(?:"+[ze+Te+"?",Te,Be,Pe,Oe].join("|")+")",Ze=RegExp(_e,"g"),Xe=RegExp(Te,"g"),Je=RegExp(Re+"(?="+Re+")|"+Qe+qe,"g"),et=RegExp([Le+"?"+Me+"+"+Ve+"(?="+[Ee,Le,"$"].join("|")+")",We+"+"+Ye+"(?="+[Ee,Le+He,"$"].join("|")+")",Le+"?"+He+"+"+Ve,Le+"+"+Ye,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ie,Ge].join("|"),"g"),tt=RegExp("["+Ne+xe+we+De+"]"),rt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ot=-1,it={};it[F]=it[M]=it[A]=it[j]=it[R]=it[z]=it[B]=it[P]=it[L]=!0,it[p]=it[g]=it[T]=it[m]=it[I]=it[b]=it[v]=it[y]=it[w]=it[$]=it[C]=it[D]=it[k]=it[_]=it[E]=!1;var at={};at[p]=at[g]=at[T]=at[I]=at[m]=at[b]=at[F]=at[M]=at[A]=at[j]=at[R]=at[w]=at[$]=at[C]=at[D]=at[k]=at[_]=at[O]=at[z]=at[B]=at[P]=at[L]=!0,at[v]=at[y]=at[E]=!1;var st={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},lt=parseFloat,ct=parseInt,ut="object"==typeof je&&je&&je.Object===Object&&je,dt="object"==typeof self&&self&&self.Object===Object&&self,ft=ut||dt||Function("return this")(),ht=T$&&!T$.nodeType&&T$,pt=ht&&E$&&!E$.nodeType&&E$,gt=pt&&pt.exports===ht,mt=gt&&ut.process,bt=function(){try{var e=pt&&pt.require&&pt.require("util").types;return e||mt&&mt.binding&&mt.binding("util")}catch(e){}}(),vt=bt&&bt.isArrayBuffer,yt=bt&&bt.isDate,xt=bt&&bt.isMap,wt=bt&&bt.isRegExp,$t=bt&&bt.isSet,Ct=bt&&bt.isTypedArray;function St(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function Dt(e,t,r,n){for(var o=-1,i=null==e?0:e.length;++o<i;){var a=e[o];t(n,a,r(a),e)}return n}function kt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function _t(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Ot(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Et(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}function Tt(e,t){return!(null==e||!e.length)&&Lt(e,t,0)>-1}function It(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}function Ft(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function Mt(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}function At(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function jt(e,t,r,n){var o=null==e?0:e.length;for(n&&o&&(r=e[--o]);o--;)r=t(r,e[o],o,e);return r}function Rt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var zt=Vt("length");function Bt(e,t,r){var n;return r(e,(function(e,r,o){if(t(e,r,o))return n=r,!1})),n}function Pt(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}function Lt(e,t,r){return t==t?function(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}(e,t,r):Pt(e,Ht,r)}function Nt(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function Ht(e){return e!=e}function Wt(e,t){var r=null==e?0:e.length;return r?Kt(e,t)/r:d}function Vt(t){return function(r){return null==r?e:r[t]}}function Yt(t){return function(r){return null==t?e:t[r]}}function Ut(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r}function Kt(t,r){for(var n,o=-1,i=t.length;++o<i;){var a=r(t[o]);a!==e&&(n=n===e?a:n+a)}return n}function qt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Gt(e){return e?e.slice(0,fr(e)+1).replace(re,""):e}function Qt(e){return function(t){return e(t)}}function Zt(e,t){return Ft(t,(function(t){return e[t]}))}function Xt(e,t){return e.has(t)}function Jt(e,t){for(var r=-1,n=e.length;++r<n&&Lt(t,e[r],0)>-1;);return r}function er(e,t){for(var r=e.length;r--&&Lt(t,e[r],0)>-1;);return r}var tr=Yt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),rr=Yt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function nr(e){return"\\"+st[e]}function or(e){return tt.test(e)}function ir(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function ar(e,t){return function(r){return e(t(r))}}function sr(e,t){for(var r=-1,o=e.length,i=0,a=[];++r<o;){var s=e[r];s!==t&&s!==n||(e[r]=n,a[i++]=r)}return a}function lr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function cr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function ur(e){return or(e)?function(e){for(var t=Je.lastIndex=0;Je.test(e);)++t;return t}(e):zt(e)}function dr(e){return or(e)?function(e){return e.match(Je)||[]}(e):function(e){return e.split("")}(e)}function fr(e){for(var t=e.length;t--&&ne.test(e.charAt(t)););return t}var hr=Yt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),pr=function ne(xe){var we=(xe=null==xe?ft:pr.defaults(ft.Object(),xe,pr.pick(ft,nt))).Array,$e=xe.Date,Ce=xe.Error,Se=xe.Function,De=xe.Math,ke=xe.Object,_e=xe.RegExp,Oe=xe.String,Ee=xe.TypeError,Te=we.prototype,Ie=Se.prototype,Fe=ke.prototype,Me=xe["__core-js_shared__"],Ae=Ie.toString,je=Fe.hasOwnProperty,Re=0,ze=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Be=Fe.toString,Pe=Ae.call(ke),Le=ft._,Ne=_e("^"+Ae.call(je).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=gt?xe.Buffer:e,We=xe.Symbol,Ve=xe.Uint8Array,Ye=He?He.allocUnsafe:e,Ue=ar(ke.getPrototypeOf,ke),Ke=ke.create,qe=Fe.propertyIsEnumerable,Ge=Te.splice,Qe=We?We.isConcatSpreadable:e,Je=We?We.iterator:e,tt=We?We.toStringTag:e,st=function(){try{var e=fi(ke,"defineProperty");return e({},"",{}),e}catch(e){}}(),ut=xe.clearTimeout!==ft.clearTimeout&&xe.clearTimeout,dt=$e&&$e.now!==ft.Date.now&&$e.now,ht=xe.setTimeout!==ft.setTimeout&&xe.setTimeout,pt=De.ceil,mt=De.floor,bt=ke.getOwnPropertySymbols,zt=He?He.isBuffer:e,Yt=xe.isFinite,gr=Te.join,mr=ar(ke.keys,ke),br=De.max,vr=De.min,yr=$e.now,xr=xe.parseInt,wr=De.random,$r=Te.reverse,Cr=fi(xe,"DataView"),Sr=fi(xe,"Map"),Dr=fi(xe,"Promise"),kr=fi(xe,"Set"),_r=fi(xe,"WeakMap"),Or=fi(ke,"create"),Er=_r&&new _r,Tr={},Ir=Bi(Cr),Fr=Bi(Sr),Mr=Bi(Dr),Ar=Bi(kr),jr=Bi(_r),Rr=We?We.prototype:e,zr=Rr?Rr.valueOf:e,Br=Rr?Rr.toString:e;function Pr(e){if(ts(e)&&!Va(e)&&!(e instanceof Wr)){if(e instanceof Hr)return e;if(je.call(e,"__wrapped__"))return Pi(e)}return new Hr(e)}var Lr=function(){function t(){}return function(r){if(!es(r))return{};if(Ke)return Ke(r);t.prototype=r;var n=new t;return t.prototype=e,n}}();function Nr(){}function Hr(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}function Wr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=f,this.__views__=[]}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function qr(e){var t=this.__data__=new Yr(e);this.size=t.size}function Gr(e,t){var r=Va(e),n=!r&&Wa(e),o=!r&&!n&&qa(e),i=!r&&!n&&!o&&cs(e),a=r||n||o||i,s=a?qt(e.length,Oe):[],l=s.length;for(var c in e)!t&&!je.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||yi(c,l))||s.push(c);return s}function Qr(t){var r=t.length;return r?t[qn(0,r-1)]:e}function Zr(e,t){return ji(To(e),sn(t,0,e.length))}function Xr(e){return ji(To(e))}function Jr(t,r,n){(n!==e&&!La(t[r],n)||n===e&&!(r in t))&&on(t,r,n)}function en(t,r,n){var o=t[r];je.call(t,r)&&La(o,n)&&(n!==e||r in t)||on(t,r,n)}function tn(e,t){for(var r=e.length;r--;)if(La(e[r][0],t))return r;return-1}function rn(e,t,r,n){return fn(e,(function(e,o,i){t(n,e,r(e),i)})),n}function nn(e,t){return e&&Io(t,Is(t),e)}function on(e,t,r){"__proto__"==t&&st?st(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(t,r){for(var n=-1,o=r.length,i=we(o),a=null==t;++n<o;)i[n]=a?e:ks(t,r[n]);return i}function sn(t,r,n){return t==t&&(n!==e&&(t=t<=n?t:n),r!==e&&(t=t>=r?t:r)),t}function ln(t,r,n,o,i,a){var s,l=1&r,c=2&r,u=4&r;if(n&&(s=i?n(t,o,i,a):n(t)),s!==e)return s;if(!es(t))return t;var d=Va(t);if(d){if(s=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&je.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(t),!l)return To(t,s)}else{var f=gi(t),h=f==y||f==x;if(qa(t))return So(t,l);if(f==C||f==p||h&&!i){if(s=c||h?{}:bi(t),!l)return c?function(e,t){return Io(e,pi(e),t)}(t,function(e,t){return e&&Io(t,Fs(t),e)}(s,t)):function(e,t){return Io(e,hi(e),t)}(t,nn(s,t))}else{if(!at[f])return i?t:{};s=function(e,t,r){var n,o=e.constructor;switch(t){case T:return Do(e);case m:case b:return new o(+e);case I:return function(e,t){var r=t?Do(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case F:case M:case A:case j:case R:case z:case B:case P:case L:return ko(e,r);case w:return new o;case $:case _:return new o(e);case D:return function(e){var t=new e.constructor(e.source,de.exec(e));return t.lastIndex=e.lastIndex,t}(e);case k:return new o;case O:return n=e,zr?ke(zr.call(n)):{}}}(t,f,l)}}a||(a=new qr);var g=a.get(t);if(g)return g;a.set(t,s),as(t)?t.forEach((function(e){s.add(ln(e,r,n,e,t,a))})):rs(t)&&t.forEach((function(e,o){s.set(o,ln(e,r,n,o,t,a))}));var v=d?e:(u?c?ii:oi:c?Fs:Is)(t);return kt(v||t,(function(e,o){v&&(e=t[o=e]),en(s,o,ln(e,r,n,o,t,a))})),s}function cn(t,r,n){var o=n.length;if(null==t)return!o;for(t=ke(t);o--;){var i=n[o],a=r[i],s=t[i];if(s===e&&!(i in t)||!a(s))return!1}return!0}function un(r,n,o){if("function"!=typeof r)throw new Ee(t);return Ii((function(){r.apply(e,o)}),n)}function dn(e,t,r,n){var o=-1,i=Tt,a=!0,s=e.length,l=[],c=t.length;if(!s)return l;r&&(t=Ft(t,Qt(r))),n?(i=It,a=!1):t.length>=200&&(i=Xt,a=!1,t=new Kr(t));e:for(;++o<s;){var u=e[o],d=null==r?u:r(u);if(u=n||0!==u?u:0,a&&d==d){for(var f=c;f--;)if(t[f]===d)continue e;l.push(u)}else i(t,d,n)||l.push(u)}return l}Pr.templateSettings={escape:q,evaluate:G,interpolate:Q,variable:"",imports:{_:Pr}},Pr.prototype=Nr.prototype,Pr.prototype.constructor=Pr,Hr.prototype=Lr(Nr.prototype),Hr.prototype.constructor=Hr,Wr.prototype=Lr(Nr.prototype),Wr.prototype.constructor=Wr,Vr.prototype.clear=function(){this.__data__=Or?Or(null):{},this.size=0},Vr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Vr.prototype.get=function(t){var n=this.__data__;if(Or){var o=n[t];return o===r?e:o}return je.call(n,t)?n[t]:e},Vr.prototype.has=function(t){var r=this.__data__;return Or?r[t]!==e:je.call(r,t)},Vr.prototype.set=function(t,n){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=Or&&n===e?r:n,this},Yr.prototype.clear=function(){this.__data__=[],this.size=0},Yr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0||(r==t.length-1?t.pop():Ge.call(t,r,1),--this.size,0))},Yr.prototype.get=function(t){var r=this.__data__,n=tn(r,t);return n<0?e:r[n][1]},Yr.prototype.has=function(e){return tn(this.__data__,e)>-1},Yr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Vr,map:new(Sr||Yr),string:new Vr}},Ur.prototype.delete=function(e){var t=ui(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return ui(this,e).get(e)},Ur.prototype.has=function(e){return ui(this,e).has(e)},Ur.prototype.set=function(e,t){var r=ui(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,r),this},Kr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.clear=function(){this.__data__=new Yr,this.size=0},qr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},qr.prototype.get=function(e){return this.__data__.get(e)},qr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Yr){var n=r.__data__;if(!Sr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var fn=Ao(xn),hn=Ao(wn,!0);function pn(e,t){var r=!0;return fn(e,(function(e,n,o){return r=!!t(e,n,o)})),r}function gn(t,r,n){for(var o=-1,i=t.length;++o<i;){var a=t[o],s=r(a);if(null!=s&&(l===e?s==s&&!ls(s):n(s,l)))var l=s,c=a}return c}function mn(e,t){var r=[];return fn(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}function bn(e,t,r,n,o){var i=-1,a=e.length;for(r||(r=vi),o||(o=[]);++i<a;){var s=e[i];t>0&&r(s)?t>1?bn(s,t-1,r,n,o):Mt(o,s):n||(o[o.length]=s)}return o}var vn=jo(),yn=jo(!0);function xn(e,t){return e&&vn(e,t,Is)}function wn(e,t){return e&&yn(e,t,Is)}function $n(e,t){return Et(t,(function(t){return Za(e[t])}))}function Cn(t,r){for(var n=0,o=(r=xo(r,t)).length;null!=t&&n<o;)t=t[zi(r[n++])];return n&&n==o?t:e}function Sn(e,t,r){var n=t(e);return Va(e)?n:Mt(n,r(e))}function Dn(t){return null==t?t===e?"[object Undefined]":"[object Null]":tt&&tt in ke(t)?function(t){var r=je.call(t,tt),n=t[tt];try{t[tt]=e;var o=!0}catch(e){}var i=Be.call(t);return o&&(r?t[tt]=n:delete t[tt]),i}(t):function(e){return Be.call(e)}(t)}function kn(e,t){return e>t}function _n(e,t){return null!=e&&je.call(e,t)}function On(e,t){return null!=e&&t in ke(e)}function En(t,r,n){for(var o=n?It:Tt,i=t[0].length,a=t.length,s=a,l=we(a),c=1/0,u=[];s--;){var d=t[s];s&&r&&(d=Ft(d,Qt(r))),c=vr(d.length,c),l[s]=!n&&(r||i>=120&&d.length>=120)?new Kr(s&&d):e}d=t[0];var f=-1,h=l[0];e:for(;++f<i&&u.length<c;){var p=d[f],g=r?r(p):p;if(p=n||0!==p?p:0,!(h?Xt(h,g):o(u,g,n))){for(s=a;--s;){var m=l[s];if(!(m?Xt(m,g):o(t[s],g,n)))continue e}h&&h.push(g),u.push(p)}}return u}function Tn(t,r,n){var o=null==(t=Oi(t,r=xo(r,t)))?t:t[zi(Qi(r))];return null==o?e:St(o,t,n)}function In(e){return ts(e)&&Dn(e)==p}function Fn(t,r,n,o,i){return t===r||(null==t||null==r||!ts(t)&&!ts(r)?t!=t&&r!=r:function(t,r,n,o,i,a){var s=Va(t),l=Va(r),c=s?g:gi(t),u=l?g:gi(r),d=(c=c==p?C:c)==C,f=(u=u==p?C:u)==C,h=c==u;if(h&&qa(t)){if(!qa(r))return!1;s=!0,d=!1}if(h&&!d)return a||(a=new qr),s||cs(t)?ri(t,r,n,o,i,a):function(e,t,r,n,o,i,a){switch(r){case I:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case T:return!(e.byteLength!=t.byteLength||!i(new Ve(e),new Ve(t)));case m:case b:case $:return La(+e,+t);case v:return e.name==t.name&&e.message==t.message;case D:case _:return e==t+"";case w:var s=ir;case k:var l=1&n;if(s||(s=lr),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var u=ri(s(e),s(t),n,o,i,a);return a.delete(e),u;case O:if(zr)return zr.call(e)==zr.call(t)}return!1}(t,r,c,n,o,i,a);if(!(1&n)){var y=d&&je.call(t,"__wrapped__"),x=f&&je.call(r,"__wrapped__");if(y||x){var S=y?t.value():t,E=x?r.value():r;return a||(a=new qr),i(S,E,n,o,a)}}return!!h&&(a||(a=new qr),function(t,r,n,o,i,a){var s=1&n,l=oi(t),c=l.length,u=oi(r),d=u.length;if(c!=d&&!s)return!1;for(var f=c;f--;){var h=l[f];if(!(s?h in r:je.call(r,h)))return!1}var p=a.get(t),g=a.get(r);if(p&&g)return p==r&&g==t;var m=!0;a.set(t,r),a.set(r,t);for(var b=s;++f<c;){var v=t[h=l[f]],y=r[h];if(o)var x=s?o(y,v,h,r,t,a):o(v,y,h,t,r,a);if(!(x===e?v===y||i(v,y,n,o,a):x)){m=!1;break}b||(b="constructor"==h)}if(m&&!b){var w=t.constructor,$=r.constructor;w==$||!("constructor"in t)||!("constructor"in r)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(t),a.delete(r),m}(t,r,n,o,i,a))}(t,r,n,o,Fn,i))}function Mn(t,r,n,o){var i=n.length,a=i,s=!o;if(null==t)return!a;for(t=ke(t);i--;){var l=n[i];if(s&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++i<a;){var c=(l=n[i])[0],u=t[c],d=l[1];if(s&&l[2]){if(u===e&&!(c in t))return!1}else{var f=new qr;if(o)var h=o(u,d,c,t,r,f);if(!(h===e?Fn(d,u,3,o,f):h))return!1}}return!0}function An(e){return!(!es(e)||(t=e,ze&&ze in t))&&(Za(e)?Ne:pe).test(Bi(e));var t}function jn(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Va(e)?Nn(e[0],e[1]):Ln(e):fl(e)}function Rn(e){if(!Si(e))return mr(e);var t=[];for(var r in ke(e))je.call(e,r)&&"constructor"!=r&&t.push(r);return t}function zn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in ke(e))t.push(r);return t}(e);var t=Si(e),r=[];for(var n in e)("constructor"!=n||!t&&je.call(e,n))&&r.push(n);return r}function Bn(e,t){return e<t}function Pn(e,t){var r=-1,n=Ua(e)?we(e.length):[];return fn(e,(function(e,o,i){n[++r]=t(e,o,i)})),n}function Ln(e){var t=di(e);return 1==t.length&&t[0][2]?ki(t[0][0],t[0][1]):function(r){return r===e||Mn(r,e,t)}}function Nn(t,r){return wi(t)&&Di(r)?ki(zi(t),r):function(n){var o=ks(n,t);return o===e&&o===r?_s(n,t):Fn(r,o,3)}}function Hn(t,r,n,o,i){t!==r&&vn(r,(function(a,s){if(i||(i=new qr),es(a))!function(t,r,n,o,i,a,s){var l=Ei(t,n),c=Ei(r,n),u=s.get(c);if(u)Jr(t,n,u);else{var d=a?a(l,c,n+"",t,r,s):e,f=d===e;if(f){var h=Va(c),p=!h&&qa(c),g=!h&&!p&&cs(c);d=c,h||p||g?Va(l)?d=l:Ka(l)?d=To(l):p?(f=!1,d=So(c,!0)):g?(f=!1,d=ko(c,!0)):d=[]:os(c)||Wa(c)?(d=l,Wa(l)?d=bs(l):es(l)&&!Za(l)||(d=bi(c))):f=!1}f&&(s.set(c,d),i(d,c,o,a,s),s.delete(c)),Jr(t,n,d)}}(t,r,s,n,Hn,o,i);else{var l=o?o(Ei(t,s),a,s+"",t,r,i):e;l===e&&(l=a),Jr(t,s,l)}}),Fs)}function Wn(t,r){var n=t.length;if(n)return yi(r+=r<0?n:0,n)?t[r]:e}function Vn(e,t,r){t=t.length?Ft(t,(function(e){return Va(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=Ft(t,Qt(ci()));var o=Pn(e,(function(e,r,o){var i=Ft(t,(function(t){return t(e)}));return{criteria:i,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(o,(function(e,t){return function(e,t,r){for(var n=-1,o=e.criteria,i=t.criteria,a=o.length,s=r.length;++n<a;){var l=_o(o[n],i[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Yn(e,t,r){for(var n=-1,o=t.length,i={};++n<o;){var a=t[n],s=Cn(e,a);r(s,a)&&Jn(i,xo(a,e),s)}return i}function Un(e,t,r,n){var o=n?Nt:Lt,i=-1,a=t.length,s=e;for(e===t&&(t=To(t)),r&&(s=Ft(e,Qt(r)));++i<a;)for(var l=0,c=t[i],u=r?r(c):c;(l=o(s,u,l,n))>-1;)s!==e&&Ge.call(s,l,1),Ge.call(e,l,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var o=t[r];if(r==n||o!==i){var i=o;yi(o)?Ge.call(e,o,1):fo(e,o)}}return e}function qn(e,t){return e+mt(wr()*(t-e+1))}function Gn(e,t){var r="";if(!e||t<1||t>u)return r;do{t%2&&(r+=e),(t=mt(t/2))&&(e+=e)}while(t);return r}function Qn(e,t){return Fi(_i(e,t,nl),e+"")}function Zn(e){return Qr(Ls(e))}function Xn(e,t){var r=Ls(e);return ji(r,sn(t,0,r.length))}function Jn(t,r,n,o){if(!es(t))return t;for(var i=-1,a=(r=xo(r,t)).length,s=a-1,l=t;null!=l&&++i<a;){var c=zi(r[i]),u=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(i!=s){var d=l[c];(u=o?o(d,c,l):e)===e&&(u=es(d)?d:yi(r[i+1])?[]:{})}en(l,c,u),l=l[c]}return t}var eo=Er?function(e,t){return Er.set(e,t),e}:nl,to=st?function(e,t){return st(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ro(e){return ji(Ls(e))}function no(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=we(o);++n<o;)i[n]=e[n+t];return i}function oo(e,t){var r;return fn(e,(function(e,n,o){return!(r=t(e,n,o))})),!!r}function io(e,t,r){var n=0,o=null==e?n:e.length;if("number"==typeof t&&t==t&&o<=2147483647){for(;n<o;){var i=n+o>>>1,a=e[i];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=i+1:o=i}return o}return ao(e,t,nl,r)}function ao(t,r,n,o){var i=0,a=null==t?0:t.length;if(0===a)return 0;for(var s=(r=n(r))!=r,l=null===r,c=ls(r),u=r===e;i<a;){var d=mt((i+a)/2),f=n(t[d]),h=f!==e,p=null===f,g=f==f,m=ls(f);if(s)var b=o||g;else b=u?g&&(o||h):l?g&&h&&(o||!p):c?g&&h&&!p&&(o||!m):!p&&!m&&(o?f<=r:f<r);b?i=d+1:a=d}return vr(a,4294967294)}function so(e,t){for(var r=-1,n=e.length,o=0,i=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!La(s,l)){var l=s;i[o++]=0===a?0:a}}return i}function lo(e){return"number"==typeof e?e:ls(e)?d:+e}function co(e){if("string"==typeof e)return e;if(Va(e))return Ft(e,co)+"";if(ls(e))return Br?Br.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function uo(e,t,r){var n=-1,o=Tt,i=e.length,a=!0,s=[],l=s;if(r)a=!1,o=It;else if(i>=200){var c=t?null:Qo(e);if(c)return lr(c);a=!1,o=Xt,l=new Kr}else l=t?[]:s;e:for(;++n<i;){var u=e[n],d=t?t(u):u;if(u=r||0!==u?u:0,a&&d==d){for(var f=l.length;f--;)if(l[f]===d)continue e;t&&l.push(d),s.push(u)}else o(l,d,r)||(l!==s&&l.push(d),s.push(u))}return s}function fo(e,t){return null==(e=Oi(e,t=xo(t,e)))||delete e[zi(Qi(t))]}function ho(e,t,r,n){return Jn(e,t,r(Cn(e,t)),n)}function po(e,t,r,n){for(var o=e.length,i=n?o:-1;(n?i--:++i<o)&&t(e[i],i,e););return r?no(e,n?0:i,n?i+1:o):no(e,n?i+1:0,n?o:i)}function go(e,t){var r=e;return r instanceof Wr&&(r=r.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,Mt([e],t.args))}),r)}function mo(e,t,r){var n=e.length;if(n<2)return n?uo(e[0]):[];for(var o=-1,i=we(n);++o<n;)for(var a=e[o],s=-1;++s<n;)s!=o&&(i[o]=dn(i[o]||a,e[s],t,r));return uo(bn(i,1),t,r)}function bo(t,r,n){for(var o=-1,i=t.length,a=r.length,s={};++o<i;){var l=o<a?r[o]:e;n(s,t[o],l)}return s}function vo(e){return Ka(e)?e:[]}function yo(e){return"function"==typeof e?e:nl}function xo(e,t){return Va(e)?e:wi(e,t)?[e]:Ri(vs(e))}var wo=Qn;function $o(t,r,n){var o=t.length;return n=n===e?o:n,!r&&n>=o?t:no(t,r,n)}var Co=ut||function(e){return ft.clearTimeout(e)};function So(e,t){if(t)return e.slice();var r=e.length,n=Ye?Ye(r):new e.constructor(r);return e.copy(n),n}function Do(e){var t=new e.constructor(e.byteLength);return new Ve(t).set(new Ve(e)),t}function ko(e,t){var r=t?Do(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function _o(t,r){if(t!==r){var n=t!==e,o=null===t,i=t==t,a=ls(t),s=r!==e,l=null===r,c=r==r,u=ls(r);if(!l&&!u&&!a&&t>r||a&&s&&c&&!l&&!u||o&&s&&c||!n&&c||!i)return 1;if(!o&&!a&&!u&&t<r||u&&n&&i&&!o&&!a||l&&n&&i||!s&&i||!c)return-1}return 0}function Oo(e,t,r,n){for(var o=-1,i=e.length,a=r.length,s=-1,l=t.length,c=br(i-a,0),u=we(l+c),d=!n;++s<l;)u[s]=t[s];for(;++o<a;)(d||o<i)&&(u[r[o]]=e[o]);for(;c--;)u[s++]=e[o++];return u}function Eo(e,t,r,n){for(var o=-1,i=e.length,a=-1,s=r.length,l=-1,c=t.length,u=br(i-s,0),d=we(u+c),f=!n;++o<u;)d[o]=e[o];for(var h=o;++l<c;)d[h+l]=t[l];for(;++a<s;)(f||o<i)&&(d[h+r[a]]=e[o++]);return d}function To(e,t){var r=-1,n=e.length;for(t||(t=we(n));++r<n;)t[r]=e[r];return t}function Io(t,r,n,o){var i=!n;n||(n={});for(var a=-1,s=r.length;++a<s;){var l=r[a],c=o?o(n[l],t[l],l,n,t):e;c===e&&(c=t[l]),i?on(n,l,c):en(n,l,c)}return n}function Fo(e,t){return function(r,n){var o=Va(r)?Dt:rn,i=t?t():{};return o(r,e,ci(n,2),i)}}function Mo(t){return Qn((function(r,n){var o=-1,i=n.length,a=i>1?n[i-1]:e,s=i>2?n[2]:e;for(a=t.length>3&&"function"==typeof a?(i--,a):e,s&&xi(n[0],n[1],s)&&(a=i<3?e:a,i=1),r=ke(r);++o<i;){var l=n[o];l&&t(r,l,o,a)}return r}))}function Ao(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=ke(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}function jo(e){return function(t,r,n){for(var o=-1,i=ke(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}}function Ro(t){return function(r){var n=or(r=vs(r))?dr(r):e,o=n?n[0]:r.charAt(0),i=n?$o(n,1).join(""):r.slice(1);return o[t]()+i}}function zo(e){return function(t){return At(Zs(Ws(t).replace(Ze,"")),e,"")}}function Bo(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Lr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function Po(t){return function(r,n,o){var i=ke(r);if(!Ua(r)){var a=ci(n,3);r=Is(r),n=function(e){return a(i[e],e,i)}}var s=t(r,n,o);return s>-1?i[a?r[s]:s]:e}}function Lo(r){return ni((function(n){var o=n.length,i=o,a=Hr.prototype.thru;for(r&&n.reverse();i--;){var s=n[i];if("function"!=typeof s)throw new Ee(t);if(a&&!l&&"wrapper"==si(s))var l=new Hr([],!0)}for(i=l?i:o;++i<o;){var c=si(s=n[i]),u="wrapper"==c?ai(s):e;l=u&&$i(u[0])&&424==u[1]&&!u[4].length&&1==u[9]?l[si(u[0])].apply(l,u[3]):1==s.length&&$i(s)?l[c]():l.thru(s)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Va(t))return l.plant(t).value();for(var r=0,i=o?n[r].apply(this,e):t;++r<o;)i=n[r].call(this,i);return i}}))}function No(t,r,n,o,i,a,l,c,u,d){var f=r&s,h=1&r,p=2&r,g=24&r,m=512&r,b=p?e:Bo(t);return function s(){for(var v=arguments.length,y=we(v),x=v;x--;)y[x]=arguments[x];if(g)var w=li(s),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,w);if(o&&(y=Oo(y,o,i,g)),a&&(y=Eo(y,a,l,g)),v-=$,g&&v<d){var C=sr(y,w);return qo(t,r,No,s.placeholder,n,y,C,c,u,d-v)}var S=h?n:this,D=p?S[t]:t;return v=y.length,c?y=function(t,r){for(var n=t.length,o=vr(r.length,n),i=To(t);o--;){var a=r[o];t[o]=yi(a,n)?i[a]:e}return t}(y,c):m&&v>1&&y.reverse(),f&&u<v&&(y.length=u),this&&this!==ft&&this instanceof s&&(D=b||Bo(D)),D.apply(S,y)}}function Ho(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,o,i){t(n,r(e),o,i)})),n}(r,e,t(n),{})}}function Wo(t,r){return function(n,o){var i;if(n===e&&o===e)return r;if(n!==e&&(i=n),o!==e){if(i===e)return o;"string"==typeof n||"string"==typeof o?(n=co(n),o=co(o)):(n=lo(n),o=lo(o)),i=t(n,o)}return i}}function Vo(e){return ni((function(t){return t=Ft(t,Qt(ci())),Qn((function(r){var n=this;return e(t,(function(e){return St(e,n,r)}))}))}))}function Yo(t,r){var n=(r=r===e?" ":co(r)).length;if(n<2)return n?Gn(r,t):r;var o=Gn(r,pt(t/ur(r)));return or(r)?$o(dr(o),0,t).join(""):o.slice(0,t)}function Uo(t){return function(r,n,o){return o&&"number"!=typeof o&&xi(r,n,o)&&(n=o=e),r=hs(r),n===e?(n=r,r=0):n=hs(n),function(e,t,r,n){for(var o=-1,i=br(pt((t-e)/(r||1)),0),a=we(i);i--;)a[n?i:++o]=e,e+=r;return a}(r,n,o=o===e?r<n?1:-1:hs(o),t)}}function Ko(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ms(t),r=ms(r)),e(t,r)}}function qo(t,r,n,o,s,l,c,u,d,f){var h=8&r;r|=h?i:a,4&(r&=~(h?a:i))||(r&=-4);var p=[t,r,s,h?l:e,h?c:e,h?e:l,h?e:c,u,d,f],g=n.apply(e,p);return $i(t)&&Ti(g,p),g.placeholder=o,Mi(g,t,r)}function Go(e){var t=De[e];return function(e,r){if(e=ms(e),(r=null==r?0:vr(ps(r),292))&&Yt(e)){var n=(vs(e)+"e").split("e");return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Qo=kr&&1/lr(new kr([,-0]))[1]==c?function(e){return new kr(e)}:ll;function Zo(e){return function(t){var r=gi(t);return r==w?ir(t):r==k?cr(t):function(e,t){return Ft(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Xo(r,c,u,d,f,h,p,g){var m=2&c;if(!m&&"function"!=typeof r)throw new Ee(t);var b=d?d.length:0;if(b||(c&=-97,d=f=e),p=p===e?p:br(ps(p),0),g=g===e?g:ps(g),b-=f?f.length:0,c&a){var v=d,y=f;d=f=e}var x=m?e:ai(r),w=[r,c,u,d,f,v,y,h,p,g];if(x&&function(e,t){var r=e[1],o=t[1],i=r|o,a=i<131,c=o==s&&8==r||o==s&&r==l&&e[7].length<=t[8]||384==o&&t[7].length<=t[8]&&8==r;if(!a&&!c)return e;1&o&&(e[2]=t[2],i|=1&r?0:4);var u=t[3];if(u){var d=e[3];e[3]=d?Oo(d,u,t[4]):u,e[4]=d?sr(e[3],n):t[4]}(u=t[5])&&(d=e[5],e[5]=d?Eo(d,u,t[6]):u,e[6]=d?sr(e[5],n):t[6]),(u=t[7])&&(e[7]=u),o&s&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}(w,x),r=w[0],c=w[1],u=w[2],d=w[3],f=w[4],!(g=w[9]=w[9]===e?m?0:r.length:br(w[9]-b,0))&&24&c&&(c&=-25),c&&1!=c)$=8==c||c==o?function(t,r,n){var o=Bo(t);return function i(){for(var a=arguments.length,s=we(a),l=a,c=li(i);l--;)s[l]=arguments[l];var u=a<3&&s[0]!==c&&s[a-1]!==c?[]:sr(s,c);return(a-=u.length)<n?qo(t,r,No,i.placeholder,e,s,u,e,e,n-a):St(this&&this!==ft&&this instanceof i?o:t,this,s)}}(r,c,g):c!=i&&33!=c||f.length?No.apply(e,w):function(e,t,r,n){var o=1&t,i=Bo(e);return function t(){for(var a=-1,s=arguments.length,l=-1,c=n.length,u=we(c+s),d=this&&this!==ft&&this instanceof t?i:e;++l<c;)u[l]=n[l];for(;s--;)u[l++]=arguments[++a];return St(d,o?r:this,u)}}(r,c,u,d);else var $=function(e,t,r){var n=1&t,o=Bo(e);return function t(){return(this&&this!==ft&&this instanceof t?o:e).apply(n?r:this,arguments)}}(r,c,u);return Mi((x?eo:Ti)($,w),r,c)}function Jo(t,r,n,o){return t===e||La(t,Fe[n])&&!je.call(o,n)?r:t}function ei(t,r,n,o,i,a){return es(t)&&es(r)&&(a.set(r,t),Hn(t,r,e,ei,a),a.delete(r)),t}function ti(t){return os(t)?e:t}function ri(t,r,n,o,i,a){var s=1&n,l=t.length,c=r.length;if(l!=c&&!(s&&c>l))return!1;var u=a.get(t),d=a.get(r);if(u&&d)return u==r&&d==t;var f=-1,h=!0,p=2&n?new Kr:e;for(a.set(t,r),a.set(r,t);++f<l;){var g=t[f],m=r[f];if(o)var b=s?o(m,g,f,r,t,a):o(g,m,f,t,r,a);if(b!==e){if(b)continue;h=!1;break}if(p){if(!Rt(r,(function(e,t){if(!Xt(p,t)&&(g===e||i(g,e,n,o,a)))return p.push(t)}))){h=!1;break}}else if(g!==m&&!i(g,m,n,o,a)){h=!1;break}}return a.delete(t),a.delete(r),h}function ni(t){return Fi(_i(t,e,Yi),t+"")}function oi(e){return Sn(e,Is,hi)}function ii(e){return Sn(e,Fs,pi)}var ai=Er?function(e){return Er.get(e)}:ll;function si(e){for(var t=e.name+"",r=Tr[t],n=je.call(Tr,t)?r.length:0;n--;){var o=r[n],i=o.func;if(null==i||i==e)return o.name}return t}function li(e){return(je.call(Pr,"placeholder")?Pr:e).placeholder}function ci(){var e=Pr.iteratee||ol;return e=e===ol?jn:e,arguments.length?e(arguments[0],arguments[1]):e}function ui(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function di(e){for(var t=Is(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Di(o)]}return t}function fi(t,r){var n=function(t,r){return null==t?e:t[r]}(t,r);return An(n)?n:e}var hi=bt?function(e){return null==e?[]:(e=ke(e),Et(bt(e),(function(t){return qe.call(e,t)})))}:gl,pi=bt?function(e){for(var t=[];e;)Mt(t,hi(e)),e=Ue(e);return t}:gl,gi=Dn;function mi(e,t,r){for(var n=-1,o=(t=xo(t,e)).length,i=!1;++n<o;){var a=zi(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Ja(o)&&yi(a,o)&&(Va(e)||Wa(e))}function bi(e){return"function"!=typeof e.constructor||Si(e)?{}:Lr(Ue(e))}function vi(e){return Va(e)||Wa(e)||!!(Qe&&e&&e[Qe])}function yi(e,t){var r=typeof e;return!!(t=null==t?u:t)&&("number"==r||"symbol"!=r&&me.test(e))&&e>-1&&e%1==0&&e<t}function xi(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yi(t,r.length):"string"==n&&t in r)&&La(r[t],e)}function wi(e,t){if(Va(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||X.test(e)||!Z.test(e)||null!=t&&e in ke(t)}function $i(e){var t=si(e),r=Pr[t];if("function"!=typeof r||!(t in Wr.prototype))return!1;if(e===r)return!0;var n=ai(r);return!!n&&e===n[0]}(Cr&&gi(new Cr(new ArrayBuffer(1)))!=I||Sr&&gi(new Sr)!=w||Dr&&gi(Dr.resolve())!=S||kr&&gi(new kr)!=k||_r&&gi(new _r)!=E)&&(gi=function(t){var r=Dn(t),n=r==C?t.constructor:e,o=n?Bi(n):"";if(o)switch(o){case Ir:return I;case Fr:return w;case Mr:return S;case Ar:return k;case jr:return E}return r});var Ci=Me?Za:ml;function Si(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Fe)}function Di(e){return e==e&&!es(e)}function ki(t,r){return function(n){return null!=n&&n[t]===r&&(r!==e||t in ke(n))}}function _i(t,r,n){return r=br(r===e?t.length-1:r,0),function(){for(var e=arguments,o=-1,i=br(e.length-r,0),a=we(i);++o<i;)a[o]=e[r+o];o=-1;for(var s=we(r+1);++o<r;)s[o]=e[o];return s[r]=n(a),St(t,this,s)}}function Oi(e,t){return t.length<2?e:Cn(e,no(t,0,-1))}function Ei(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Ti=Ai(eo),Ii=ht||function(e,t){return ft.setTimeout(e,t)},Fi=Ai(to);function Mi(e,t,r){var n=t+"";return Fi(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return kt(h,(function(r){var n="_."+r[0];t&r[1]&&!Tt(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(ie);return t?t[1].split(ae):[]}(n),r)))}function Ai(t){var r=0,n=0;return function(){var o=yr(),i=16-(o-n);if(n=o,i>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(e,arguments)}}function ji(t,r){var n=-1,o=t.length,i=o-1;for(r=r===e?o:r;++n<r;){var a=qn(n,i),s=t[a];t[a]=t[n],t[n]=s}return t.length=r,t}var Ri=function(e){var t=Aa(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(J,(function(e,r,n,o){t.push(n?o.replace(ce,"$1"):r||e)})),t}));function zi(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Bi(e){if(null!=e){try{return Ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Pi(e){if(e instanceof Wr)return e.clone();var t=new Hr(e.__wrapped__,e.__chain__);return t.__actions__=To(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Li=Qn((function(e,t){return Ka(e)?dn(e,bn(t,1,Ka,!0)):[]})),Ni=Qn((function(t,r){var n=Qi(r);return Ka(n)&&(n=e),Ka(t)?dn(t,bn(r,1,Ka,!0),ci(n,2)):[]})),Hi=Qn((function(t,r){var n=Qi(r);return Ka(n)&&(n=e),Ka(t)?dn(t,bn(r,1,Ka,!0),e,n):[]}));function Wi(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ps(r);return o<0&&(o=br(n+o,0)),Pt(e,ci(t,3),o)}function Vi(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o-1;return n!==e&&(i=ps(n),i=n<0?br(o+i,0):vr(i,o-1)),Pt(t,ci(r,3),i,!0)}function Yi(e){return null!=e&&e.length?bn(e,1):[]}function Ui(t){return t&&t.length?t[0]:e}var Ki=Qn((function(e){var t=Ft(e,vo);return t.length&&t[0]===e[0]?En(t):[]})),qi=Qn((function(t){var r=Qi(t),n=Ft(t,vo);return r===Qi(n)?r=e:n.pop(),n.length&&n[0]===t[0]?En(n,ci(r,2)):[]})),Gi=Qn((function(t){var r=Qi(t),n=Ft(t,vo);return(r="function"==typeof r?r:e)&&n.pop(),n.length&&n[0]===t[0]?En(n,e,r):[]}));function Qi(t){var r=null==t?0:t.length;return r?t[r-1]:e}var Zi=Qn(Xi);function Xi(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Ji=ni((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Kn(e,Ft(t,(function(e){return yi(e,r)?+e:e})).sort(_o)),n}));function ea(e){return null==e?e:$r.call(e)}var ta=Qn((function(e){return uo(bn(e,1,Ka,!0))})),ra=Qn((function(t){var r=Qi(t);return Ka(r)&&(r=e),uo(bn(t,1,Ka,!0),ci(r,2))})),na=Qn((function(t){var r=Qi(t);return r="function"==typeof r?r:e,uo(bn(t,1,Ka,!0),e,r)}));function oa(e){if(!e||!e.length)return[];var t=0;return e=Et(e,(function(e){if(Ka(e))return t=br(e.length,t),!0})),qt(t,(function(t){return Ft(e,Vt(t))}))}function ia(t,r){if(!t||!t.length)return[];var n=oa(t);return null==r?n:Ft(n,(function(t){return St(r,e,t)}))}var aa=Qn((function(e,t){return Ka(e)?dn(e,t):[]})),sa=Qn((function(e){return mo(Et(e,Ka))})),la=Qn((function(t){var r=Qi(t);return Ka(r)&&(r=e),mo(Et(t,Ka),ci(r,2))})),ca=Qn((function(t){var r=Qi(t);return r="function"==typeof r?r:e,mo(Et(t,Ka),e,r)})),ua=Qn(oa),da=Qn((function(t){var r=t.length,n=r>1?t[r-1]:e;return n="function"==typeof n?(t.pop(),n):e,ia(t,n)}));function fa(e){var t=Pr(e);return t.__chain__=!0,t}function ha(e,t){return t(e)}var pa=ni((function(t){var r=t.length,n=r?t[0]:0,o=this.__wrapped__,i=function(e){return an(e,t)};return!(r>1||this.__actions__.length)&&o instanceof Wr&&yi(n)?((o=o.slice(n,+n+(r?1:0))).__actions__.push({func:ha,args:[i],thisArg:e}),new Hr(o,this.__chain__).thru((function(t){return r&&!t.length&&t.push(e),t}))):this.thru(i)})),ga=Fo((function(e,t,r){je.call(e,r)?++e[r]:on(e,r,1)})),ma=Po(Wi),ba=Po(Vi);function va(e,t){return(Va(e)?kt:fn)(e,ci(t,3))}function ya(e,t){return(Va(e)?_t:hn)(e,ci(t,3))}var xa=Fo((function(e,t,r){je.call(e,r)?e[r].push(t):on(e,r,[t])})),wa=Qn((function(e,t,r){var n=-1,o="function"==typeof t,i=Ua(e)?we(e.length):[];return fn(e,(function(e){i[++n]=o?St(t,e,r):Tn(e,t,r)})),i})),$a=Fo((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Va(e)?Ft:Pn)(e,ci(t,3))}var Sa=Fo((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]})),Da=Qn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xi(e,t[0],t[1])?t=[]:r>2&&xi(t[0],t[1],t[2])&&(t=[t[0]]),Vn(e,bn(t,1),[])})),ka=dt||function(){return ft.Date.now()};function _a(t,r,n){return r=n?e:r,r=t&&null==r?t.length:r,Xo(t,s,e,e,e,e,r)}function Oa(r,n){var o;if("function"!=typeof n)throw new Ee(t);return r=ps(r),function(){return--r>0&&(o=n.apply(this,arguments)),r<=1&&(n=e),o}}var Ea=Qn((function(e,t,r){var n=1;if(r.length){var o=sr(r,li(Ea));n|=i}return Xo(e,n,t,r,o)})),Ta=Qn((function(e,t,r){var n=3;if(r.length){var o=sr(r,li(Ta));n|=i}return Xo(t,n,e,r,o)}));function Ia(r,n,o){var i,a,s,l,c,u,d=0,f=!1,h=!1,p=!0;if("function"!=typeof r)throw new Ee(t);function g(t){var n=i,o=a;return i=a=e,d=t,l=r.apply(o,n)}function m(t){var r=t-u;return u===e||r>=n||r<0||h&&t-d>=s}function b(){var e=ka();if(m(e))return v(e);c=Ii(b,function(e){var t=n-(e-u);return h?vr(t,s-(e-d)):t}(e))}function v(t){return c=e,p&&i?g(t):(i=a=e,l)}function y(){var t=ka(),r=m(t);if(i=arguments,a=this,u=t,r){if(c===e)return function(e){return d=e,c=Ii(b,n),f?g(e):l}(u);if(h)return Co(c),c=Ii(b,n),g(u)}return c===e&&(c=Ii(b,n)),l}return n=ms(n)||0,es(o)&&(f=!!o.leading,s=(h="maxWait"in o)?br(ms(o.maxWait)||0,n):s,p="trailing"in o?!!o.trailing:p),y.cancel=function(){c!==e&&Co(c),d=0,i=u=a=c=e},y.flush=function(){return c===e?l:v(ka())},y}var Fa=Qn((function(e,t){return un(e,1,t)})),Ma=Qn((function(e,t,r){return un(e,ms(t)||0,r)}));function Aa(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new Ee(t);var n=function(){var t=arguments,o=r?r.apply(this,t):t[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,t);return n.cache=i.set(o,a)||i,a};return n.cache=new(Aa.Cache||Ur),n}function ja(e){if("function"!=typeof e)throw new Ee(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Aa.Cache=Ur;var Ra=wo((function(e,t){var r=(t=1==t.length&&Va(t[0])?Ft(t[0],Qt(ci())):Ft(bn(t,1),Qt(ci()))).length;return Qn((function(n){for(var o=-1,i=vr(n.length,r);++o<i;)n[o]=t[o].call(this,n[o]);return St(e,this,n)}))})),za=Qn((function(t,r){var n=sr(r,li(za));return Xo(t,i,e,r,n)})),Ba=Qn((function(t,r){var n=sr(r,li(Ba));return Xo(t,a,e,r,n)})),Pa=ni((function(t,r){return Xo(t,l,e,e,e,r)}));function La(e,t){return e===t||e!=e&&t!=t}var Na=Ko(kn),Ha=Ko((function(e,t){return e>=t})),Wa=In(function(){return arguments}())?In:function(e){return ts(e)&&je.call(e,"callee")&&!qe.call(e,"callee")},Va=we.isArray,Ya=vt?Qt(vt):function(e){return ts(e)&&Dn(e)==T};function Ua(e){return null!=e&&Ja(e.length)&&!Za(e)}function Ka(e){return ts(e)&&Ua(e)}var qa=zt||ml,Ga=yt?Qt(yt):function(e){return ts(e)&&Dn(e)==b};function Qa(e){if(!ts(e))return!1;var t=Dn(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!os(e)}function Za(e){if(!es(e))return!1;var t=Dn(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Xa(e){return"number"==typeof e&&e==ps(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=u}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=xt?Qt(xt):function(e){return ts(e)&&gi(e)==w};function ns(e){return"number"==typeof e||ts(e)&&Dn(e)==$}function os(e){if(!ts(e)||Dn(e)!=C)return!1;var t=Ue(e);if(null===t)return!0;var r=je.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Ae.call(r)==Pe}var is=wt?Qt(wt):function(e){return ts(e)&&Dn(e)==D},as=$t?Qt($t):function(e){return ts(e)&&gi(e)==k};function ss(e){return"string"==typeof e||!Va(e)&&ts(e)&&Dn(e)==_}function ls(e){return"symbol"==typeof e||ts(e)&&Dn(e)==O}var cs=Ct?Qt(Ct):function(e){return ts(e)&&Ja(e.length)&&!!it[Dn(e)]},us=Ko(Bn),ds=Ko((function(e,t){return e<=t}));function fs(e){if(!e)return[];if(Ua(e))return ss(e)?dr(e):To(e);if(Je&&e[Je])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Je]());var t=gi(e);return(t==w?ir:t==k?lr:Ls)(e)}function hs(e){return e?(e=ms(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=hs(e),r=t%1;return t==t?r?t-r:t:0}function gs(e){return e?sn(ps(e),0,f):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return d;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Gt(e);var r=he.test(e);return r||ge.test(e)?ct(e.slice(2),r?2:8):fe.test(e)?d:+e}function bs(e){return Io(e,Fs(e))}function vs(e){return null==e?"":co(e)}var ys=Mo((function(e,t){if(Si(t)||Ua(t))Io(t,Is(t),e);else for(var r in t)je.call(t,r)&&en(e,r,t[r])})),xs=Mo((function(e,t){Io(t,Fs(t),e)})),ws=Mo((function(e,t,r,n){Io(t,Fs(t),e,n)})),$s=Mo((function(e,t,r,n){Io(t,Is(t),e,n)})),Cs=ni(an),Ss=Qn((function(t,r){t=ke(t);var n=-1,o=r.length,i=o>2?r[2]:e;for(i&&xi(r[0],r[1],i)&&(o=1);++n<o;)for(var a=r[n],s=Fs(a),l=-1,c=s.length;++l<c;){var u=s[l],d=t[u];(d===e||La(d,Fe[u])&&!je.call(t,u))&&(t[u]=a[u])}return t})),Ds=Qn((function(t){return t.push(e,ei),St(As,e,t)}));function ks(t,r,n){var o=null==t?e:Cn(t,r);return o===e?n:o}function _s(e,t){return null!=e&&mi(e,t,On)}var Os=Ho((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Be.call(t)),e[t]=r}),el(nl)),Es=Ho((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Be.call(t)),je.call(e,t)?e[t].push(r):e[t]=[r]}),ci),Ts=Qn(Tn);function Is(e){return Ua(e)?Gr(e):Rn(e)}function Fs(e){return Ua(e)?Gr(e,!0):zn(e)}var Ms=Mo((function(e,t,r){Hn(e,t,r)})),As=Mo((function(e,t,r,n){Hn(e,t,r,n)})),js=ni((function(e,t){var r={};if(null==e)return r;var n=!1;t=Ft(t,(function(t){return t=xo(t,e),n||(n=t.length>1),t})),Io(e,ii(e),r),n&&(r=ln(r,7,ti));for(var o=t.length;o--;)fo(r,t[o]);return r})),Rs=ni((function(e,t){return null==e?{}:function(e,t){return Yn(e,t,(function(t,r){return _s(e,r)}))}(e,t)}));function zs(e,t){if(null==e)return{};var r=Ft(ii(e),(function(e){return[e]}));return t=ci(t),Yn(e,r,(function(e,r){return t(e,r[0])}))}var Bs=Zo(Is),Ps=Zo(Fs);function Ls(e){return null==e?[]:Zt(e,Is(e))}var Ns=zo((function(e,t,r){return t=t.toLowerCase(),e+(r?Hs(t):t)}));function Hs(e){return Qs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(be,tr).replace(Xe,"")}var Vs=zo((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Ys=zo((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=Ro("toLowerCase"),Ks=zo((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()})),qs=zo((function(e,t,r){return e+(r?" ":"")+Qs(t)})),Gs=zo((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Qs=Ro("toUpperCase");function Zs(t,r,n){return t=vs(t),(r=n?e:r)===e?function(e){return rt.test(e)}(t)?function(e){return e.match(et)||[]}(t):function(e){return e.match(se)||[]}(t):t.match(r)||[]}var Xs=Qn((function(t,r){try{return St(t,e,r)}catch(e){return Qa(e)?e:new Ce(e)}})),Js=ni((function(e,t){return kt(t,(function(t){t=zi(t),on(e,t,Ea(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Lo(),rl=Lo(!0);function nl(e){return e}function ol(e){return jn("function"==typeof e?e:ln(e,1))}var il=Qn((function(e,t){return function(r){return Tn(r,e,t)}})),al=Qn((function(e,t){return function(r){return Tn(e,r,t)}}));function sl(e,t,r){var n=Is(t),o=$n(t,n);null!=r||es(t)&&(o.length||!n.length)||(r=t,t=e,e=this,o=$n(t,Is(t)));var i=!(es(r)&&"chain"in r&&!r.chain),a=Za(e);return kt(o,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=e(this.__wrapped__);return(r.__actions__=To(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Mt([this.value()],arguments))})})),e}function ll(){}var cl=Vo(Ft),ul=Vo(Ot),dl=Vo(Rt);function fl(e){return wi(e)?Vt(zi(e)):function(e){return function(t){return Cn(t,e)}}(e)}var hl=Uo(),pl=Uo(!0);function gl(){return[]}function ml(){return!1}var bl,vl=Wo((function(e,t){return e+t}),0),yl=Go("ceil"),xl=Wo((function(e,t){return e/t}),1),wl=Go("floor"),$l=Wo((function(e,t){return e*t}),1),Cl=Go("round"),Sl=Wo((function(e,t){return e-t}),0);return Pr.after=function(e,r){if("function"!=typeof r)throw new Ee(t);return e=ps(e),function(){if(--e<1)return r.apply(this,arguments)}},Pr.ary=_a,Pr.assign=ys,Pr.assignIn=xs,Pr.assignInWith=ws,Pr.assignWith=$s,Pr.at=Cs,Pr.before=Oa,Pr.bind=Ea,Pr.bindAll=Js,Pr.bindKey=Ta,Pr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Va(e)?e:[e]},Pr.chain=fa,Pr.chunk=function(t,r,n){r=(n?xi(t,r,n):r===e)?1:br(ps(r),0);var o=null==t?0:t.length;if(!o||r<1)return[];for(var i=0,a=0,s=we(pt(o/r));i<o;)s[a++]=no(t,i,i+=r);return s},Pr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,o=[];++t<r;){var i=e[t];i&&(o[n++]=i)}return o},Pr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=we(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return Mt(Va(r)?To(r):[r],bn(t,1))},Pr.cond=function(e){var r=null==e?0:e.length,n=ci();return e=r?Ft(e,(function(e){if("function"!=typeof e[1])throw new Ee(t);return[n(e[0]),e[1]]})):[],Qn((function(t){for(var n=-1;++n<r;){var o=e[n];if(St(o[0],this,t))return St(o[1],this,t)}}))},Pr.conforms=function(e){return function(e){var t=Is(e);return function(r){return cn(r,e,t)}}(ln(e,1))},Pr.constant=el,Pr.countBy=ga,Pr.create=function(e,t){var r=Lr(e);return null==t?r:nn(r,t)},Pr.curry=function t(r,n,o){var i=Xo(r,8,e,e,e,e,e,n=o?e:n);return i.placeholder=t.placeholder,i},Pr.curryRight=function t(r,n,i){var a=Xo(r,o,e,e,e,e,e,n=i?e:n);return a.placeholder=t.placeholder,a},Pr.debounce=Ia,Pr.defaults=Ss,Pr.defaultsDeep=Ds,Pr.defer=Fa,Pr.delay=Ma,Pr.difference=Li,Pr.differenceBy=Ni,Pr.differenceWith=Hi,Pr.drop=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=n||r===e?1:ps(r))<0?0:r,o):[]},Pr.dropRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,0,(r=o-(r=n||r===e?1:ps(r)))<0?0:r):[]},Pr.dropRightWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!0,!0):[]},Pr.dropWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!0):[]},Pr.fill=function(t,r,n,o){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&xi(t,r,n)&&(n=0,o=i),function(t,r,n,o){var i=t.length;for((n=ps(n))<0&&(n=-n>i?0:i+n),(o=o===e||o>i?i:ps(o))<0&&(o+=i),o=n>o?0:gs(o);n<o;)t[n++]=r;return t}(t,r,n,o)):[]},Pr.filter=function(e,t){return(Va(e)?Et:mn)(e,ci(t,3))},Pr.flatMap=function(e,t){return bn(Ca(e,t),1)},Pr.flatMapDeep=function(e,t){return bn(Ca(e,t),c)},Pr.flatMapDepth=function(t,r,n){return n=n===e?1:ps(n),bn(Ca(t,r),n)},Pr.flatten=Yi,Pr.flattenDeep=function(e){return null!=e&&e.length?bn(e,c):[]},Pr.flattenDepth=function(t,r){return null!=t&&t.length?bn(t,r=r===e?1:ps(r)):[]},Pr.flip=function(e){return Xo(e,512)},Pr.flow=tl,Pr.flowRight=rl,Pr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var o=e[t];n[o[0]]=o[1]}return n},Pr.functions=function(e){return null==e?[]:$n(e,Is(e))},Pr.functionsIn=function(e){return null==e?[]:$n(e,Fs(e))},Pr.groupBy=xa,Pr.initial=function(e){return null!=e&&e.length?no(e,0,-1):[]},Pr.intersection=Ki,Pr.intersectionBy=qi,Pr.intersectionWith=Gi,Pr.invert=Os,Pr.invertBy=Es,Pr.invokeMap=wa,Pr.iteratee=ol,Pr.keyBy=$a,Pr.keys=Is,Pr.keysIn=Fs,Pr.map=Ca,Pr.mapKeys=function(e,t){var r={};return t=ci(t,3),xn(e,(function(e,n,o){on(r,t(e,n,o),e)})),r},Pr.mapValues=function(e,t){var r={};return t=ci(t,3),xn(e,(function(e,n,o){on(r,n,t(e,n,o))})),r},Pr.matches=function(e){return Ln(ln(e,1))},Pr.matchesProperty=function(e,t){return Nn(e,ln(t,1))},Pr.memoize=Aa,Pr.merge=Ms,Pr.mergeWith=As,Pr.method=il,Pr.methodOf=al,Pr.mixin=sl,Pr.negate=ja,Pr.nthArg=function(e){return e=ps(e),Qn((function(t){return Wn(t,e)}))},Pr.omit=js,Pr.omitBy=function(e,t){return zs(e,ja(ci(t)))},Pr.once=function(e){return Oa(2,e)},Pr.orderBy=function(t,r,n,o){return null==t?[]:(Va(r)||(r=null==r?[]:[r]),Va(n=o?e:n)||(n=null==n?[]:[n]),Vn(t,r,n))},Pr.over=cl,Pr.overArgs=Ra,Pr.overEvery=ul,Pr.overSome=dl,Pr.partial=za,Pr.partialRight=Ba,Pr.partition=Sa,Pr.pick=Rs,Pr.pickBy=zs,Pr.property=fl,Pr.propertyOf=function(t){return function(r){return null==t?e:Cn(t,r)}},Pr.pull=Zi,Pr.pullAll=Xi,Pr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,ci(r,2)):e},Pr.pullAllWith=function(t,r,n){return t&&t.length&&r&&r.length?Un(t,r,e,n):t},Pr.pullAt=Ji,Pr.range=hl,Pr.rangeRight=pl,Pr.rearg=Pa,Pr.reject=function(e,t){return(Va(e)?Et:mn)(e,ja(ci(t,3)))},Pr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,o=[],i=e.length;for(t=ci(t,3);++n<i;){var a=e[n];t(a,n,e)&&(r.push(a),o.push(n))}return Kn(e,o),r},Pr.rest=function(r,n){if("function"!=typeof r)throw new Ee(t);return Qn(r,n=n===e?n:ps(n))},Pr.reverse=ea,Pr.sampleSize=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:ps(r),(Va(t)?Zr:Xn)(t,r)},Pr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},Pr.setWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:Jn(t,r,n,o)},Pr.shuffle=function(e){return(Va(e)?Xr:ro)(e)},Pr.slice=function(t,r,n){var o=null==t?0:t.length;return o?(n&&"number"!=typeof n&&xi(t,r,n)?(r=0,n=o):(r=null==r?0:ps(r),n=n===e?o:ps(n)),no(t,r,n)):[]},Pr.sortBy=Da,Pr.sortedUniq=function(e){return e&&e.length?so(e):[]},Pr.sortedUniqBy=function(e,t){return e&&e.length?so(e,ci(t,2)):[]},Pr.split=function(t,r,n){return n&&"number"!=typeof n&&xi(t,r,n)&&(r=n=e),(n=n===e?f:n>>>0)?(t=vs(t))&&("string"==typeof r||null!=r&&!is(r))&&!(r=co(r))&&or(t)?$o(dr(t),0,n):t.split(r,n):[]},Pr.spread=function(e,r){if("function"!=typeof e)throw new Ee(t);return r=null==r?0:br(ps(r),0),Qn((function(t){var n=t[r],o=$o(t,0,r);return n&&Mt(o,n),St(e,this,o)}))},Pr.tail=function(e){var t=null==e?0:e.length;return t?no(e,1,t):[]},Pr.take=function(t,r,n){return t&&t.length?no(t,0,(r=n||r===e?1:ps(r))<0?0:r):[]},Pr.takeRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=o-(r=n||r===e?1:ps(r)))<0?0:r,o):[]},Pr.takeRightWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!1,!0):[]},Pr.takeWhile=function(e,t){return e&&e.length?po(e,ci(t,3)):[]},Pr.tap=function(e,t){return t(e),e},Pr.throttle=function(e,r,n){var o=!0,i=!0;if("function"!=typeof e)throw new Ee(t);return es(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),Ia(e,r,{leading:o,maxWait:r,trailing:i})},Pr.thru=ha,Pr.toArray=fs,Pr.toPairs=Bs,Pr.toPairsIn=Ps,Pr.toPath=function(e){return Va(e)?Ft(e,zi):ls(e)?[e]:To(Ri(vs(e)))},Pr.toPlainObject=bs,Pr.transform=function(e,t,r){var n=Va(e),o=n||qa(e)||cs(e);if(t=ci(t,4),null==r){var i=e&&e.constructor;r=o?n?new i:[]:es(e)&&Za(i)?Lr(Ue(e)):{}}return(o?kt:xn)(e,(function(e,n,o){return t(r,e,n,o)})),r},Pr.unary=function(e){return _a(e,1)},Pr.union=ta,Pr.unionBy=ra,Pr.unionWith=na,Pr.uniq=function(e){return e&&e.length?uo(e):[]},Pr.uniqBy=function(e,t){return e&&e.length?uo(e,ci(t,2)):[]},Pr.uniqWith=function(t,r){return r="function"==typeof r?r:e,t&&t.length?uo(t,e,r):[]},Pr.unset=function(e,t){return null==e||fo(e,t)},Pr.unzip=oa,Pr.unzipWith=ia,Pr.update=function(e,t,r){return null==e?e:ho(e,t,yo(r))},Pr.updateWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:ho(t,r,yo(n),o)},Pr.values=Ls,Pr.valuesIn=function(e){return null==e?[]:Zt(e,Fs(e))},Pr.without=aa,Pr.words=Zs,Pr.wrap=function(e,t){return za(yo(t),e)},Pr.xor=sa,Pr.xorBy=la,Pr.xorWith=ca,Pr.zip=ua,Pr.zipObject=function(e,t){return bo(e||[],t||[],en)},Pr.zipObjectDeep=function(e,t){return bo(e||[],t||[],Jn)},Pr.zipWith=da,Pr.entries=Bs,Pr.entriesIn=Ps,Pr.extend=xs,Pr.extendWith=ws,sl(Pr,Pr),Pr.add=vl,Pr.attempt=Xs,Pr.camelCase=Ns,Pr.capitalize=Hs,Pr.ceil=yl,Pr.clamp=function(t,r,n){return n===e&&(n=r,r=e),n!==e&&(n=(n=ms(n))==n?n:0),r!==e&&(r=(r=ms(r))==r?r:0),sn(ms(t),r,n)},Pr.clone=function(e){return ln(e,4)},Pr.cloneDeep=function(e){return ln(e,5)},Pr.cloneDeepWith=function(t,r){return ln(t,5,r="function"==typeof r?r:e)},Pr.cloneWith=function(t,r){return ln(t,4,r="function"==typeof r?r:e)},Pr.conformsTo=function(e,t){return null==t||cn(e,t,Is(t))},Pr.deburr=Ws,Pr.defaultTo=function(e,t){return null==e||e!=e?t:e},Pr.divide=xl,Pr.endsWith=function(t,r,n){t=vs(t),r=co(r);var o=t.length,i=n=n===e?o:sn(ps(n),0,o);return(n-=r.length)>=0&&t.slice(n,i)==r},Pr.eq=La,Pr.escape=function(e){return(e=vs(e))&&K.test(e)?e.replace(Y,rr):e},Pr.escapeRegExp=function(e){return(e=vs(e))&&te.test(e)?e.replace(ee,"\\$&"):e},Pr.every=function(t,r,n){var o=Va(t)?Ot:pn;return n&&xi(t,r,n)&&(r=e),o(t,ci(r,3))},Pr.find=ma,Pr.findIndex=Wi,Pr.findKey=function(e,t){return Bt(e,ci(t,3),xn)},Pr.findLast=ba,Pr.findLastIndex=Vi,Pr.findLastKey=function(e,t){return Bt(e,ci(t,3),wn)},Pr.floor=wl,Pr.forEach=va,Pr.forEachRight=ya,Pr.forIn=function(e,t){return null==e?e:vn(e,ci(t,3),Fs)},Pr.forInRight=function(e,t){return null==e?e:yn(e,ci(t,3),Fs)},Pr.forOwn=function(e,t){return e&&xn(e,ci(t,3))},Pr.forOwnRight=function(e,t){return e&&wn(e,ci(t,3))},Pr.get=ks,Pr.gt=Na,Pr.gte=Ha,Pr.has=function(e,t){return null!=e&&mi(e,t,_n)},Pr.hasIn=_s,Pr.head=Ui,Pr.identity=nl,Pr.includes=function(e,t,r,n){e=Ua(e)?e:Ls(e),r=r&&!n?ps(r):0;var o=e.length;return r<0&&(r=br(o+r,0)),ss(e)?r<=o&&e.indexOf(t,r)>-1:!!o&&Lt(e,t,r)>-1},Pr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ps(r);return o<0&&(o=br(n+o,0)),Lt(e,t,o)},Pr.inRange=function(t,r,n){return r=hs(r),n===e?(n=r,r=0):n=hs(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(t=ms(t),r,n)},Pr.invoke=Ts,Pr.isArguments=Wa,Pr.isArray=Va,Pr.isArrayBuffer=Ya,Pr.isArrayLike=Ua,Pr.isArrayLikeObject=Ka,Pr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&Dn(e)==m},Pr.isBuffer=qa,Pr.isDate=Ga,Pr.isElement=function(e){return ts(e)&&1===e.nodeType&&!os(e)},Pr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Va(e)||"string"==typeof e||"function"==typeof e.splice||qa(e)||cs(e)||Wa(e)))return!e.length;var t=gi(e);if(t==w||t==k)return!e.size;if(Si(e))return!Rn(e).length;for(var r in e)if(je.call(e,r))return!1;return!0},Pr.isEqual=function(e,t){return Fn(e,t)},Pr.isEqualWith=function(t,r,n){var o=(n="function"==typeof n?n:e)?n(t,r):e;return o===e?Fn(t,r,e,n):!!o},Pr.isError=Qa,Pr.isFinite=function(e){return"number"==typeof e&&Yt(e)},Pr.isFunction=Za,Pr.isInteger=Xa,Pr.isLength=Ja,Pr.isMap=rs,Pr.isMatch=function(e,t){return e===t||Mn(e,t,di(t))},Pr.isMatchWith=function(t,r,n){return n="function"==typeof n?n:e,Mn(t,r,di(r),n)},Pr.isNaN=function(e){return ns(e)&&e!=+e},Pr.isNative=function(e){if(Ci(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return An(e)},Pr.isNil=function(e){return null==e},Pr.isNull=function(e){return null===e},Pr.isNumber=ns,Pr.isObject=es,Pr.isObjectLike=ts,Pr.isPlainObject=os,Pr.isRegExp=is,Pr.isSafeInteger=function(e){return Xa(e)&&e>=-9007199254740991&&e<=u},Pr.isSet=as,Pr.isString=ss,Pr.isSymbol=ls,Pr.isTypedArray=cs,Pr.isUndefined=function(t){return t===e},Pr.isWeakMap=function(e){return ts(e)&&gi(e)==E},Pr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==Dn(e)},Pr.join=function(e,t){return null==e?"":gr.call(e,t)},Pr.kebabCase=Vs,Pr.last=Qi,Pr.lastIndexOf=function(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o;return n!==e&&(i=(i=ps(n))<0?br(o+i,0):vr(i,o-1)),r==r?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(t,r,i):Pt(t,Ht,i,!0)},Pr.lowerCase=Ys,Pr.lowerFirst=Us,Pr.lt=us,Pr.lte=ds,Pr.max=function(t){return t&&t.length?gn(t,nl,kn):e},Pr.maxBy=function(t,r){return t&&t.length?gn(t,ci(r,2),kn):e},Pr.mean=function(e){return Wt(e,nl)},Pr.meanBy=function(e,t){return Wt(e,ci(t,2))},Pr.min=function(t){return t&&t.length?gn(t,nl,Bn):e},Pr.minBy=function(t,r){return t&&t.length?gn(t,ci(r,2),Bn):e},Pr.stubArray=gl,Pr.stubFalse=ml,Pr.stubObject=function(){return{}},Pr.stubString=function(){return""},Pr.stubTrue=function(){return!0},Pr.multiply=$l,Pr.nth=function(t,r){return t&&t.length?Wn(t,ps(r)):e},Pr.noConflict=function(){return ft._===this&&(ft._=Le),this},Pr.noop=ll,Pr.now=ka,Pr.pad=function(e,t,r){e=vs(e);var n=(t=ps(t))?ur(e):0;if(!t||n>=t)return e;var o=(t-n)/2;return Yo(mt(o),r)+e+Yo(pt(o),r)},Pr.padEnd=function(e,t,r){e=vs(e);var n=(t=ps(t))?ur(e):0;return t&&n<t?e+Yo(t-n,r):e},Pr.padStart=function(e,t,r){e=vs(e);var n=(t=ps(t))?ur(e):0;return t&&n<t?Yo(t-n,r)+e:e},Pr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vs(e).replace(re,""),t||0)},Pr.random=function(t,r,n){if(n&&"boolean"!=typeof n&&xi(t,r,n)&&(r=n=e),n===e&&("boolean"==typeof r?(n=r,r=e):"boolean"==typeof t&&(n=t,t=e)),t===e&&r===e?(t=0,r=1):(t=hs(t),r===e?(r=t,t=0):r=hs(r)),t>r){var o=t;t=r,r=o}if(n||t%1||r%1){var i=wr();return vr(t+i*(r-t+lt("1e-"+((i+"").length-1))),r)}return qn(t,r)},Pr.reduce=function(e,t,r){var n=Va(e)?At:Ut,o=arguments.length<3;return n(e,ci(t,4),r,o,fn)},Pr.reduceRight=function(e,t,r){var n=Va(e)?jt:Ut,o=arguments.length<3;return n(e,ci(t,4),r,o,hn)},Pr.repeat=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:ps(r),Gn(vs(t),r)},Pr.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Pr.result=function(t,r,n){var o=-1,i=(r=xo(r,t)).length;for(i||(i=1,t=e);++o<i;){var a=null==t?e:t[zi(r[o])];a===e&&(o=i,a=n),t=Za(a)?a.call(t):a}return t},Pr.round=Cl,Pr.runInContext=ne,Pr.sample=function(e){return(Va(e)?Qr:Zn)(e)},Pr.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?ur(e):e.length;var t=gi(e);return t==w||t==k?e.size:Rn(e).length},Pr.snakeCase=Ks,Pr.some=function(t,r,n){var o=Va(t)?Rt:oo;return n&&xi(t,r,n)&&(r=e),o(t,ci(r,3))},Pr.sortedIndex=function(e,t){return io(e,t)},Pr.sortedIndexBy=function(e,t,r){return ao(e,t,ci(r,2))},Pr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=io(e,t);if(n<r&&La(e[n],t))return n}return-1},Pr.sortedLastIndex=function(e,t){return io(e,t,!0)},Pr.sortedLastIndexBy=function(e,t,r){return ao(e,t,ci(r,2),!0)},Pr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=io(e,t,!0)-1;if(La(e[r],t))return r}return-1},Pr.startCase=qs,Pr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:sn(ps(r),0,e.length),t=co(t),e.slice(r,r+t.length)==t},Pr.subtract=Sl,Pr.sum=function(e){return e&&e.length?Kt(e,nl):0},Pr.sumBy=function(e,t){return e&&e.length?Kt(e,ci(t,2)):0},Pr.template=function(t,r,n){var o=Pr.templateSettings;n&&xi(t,r,n)&&(r=e),t=vs(t),r=ws({},r,o,Jo);var i,a,s=ws({},r.imports,o.imports,Jo),l=Is(s),c=Zt(s,l),u=0,d=r.interpolate||ve,f="__p += '",h=_e((r.escape||ve).source+"|"+d.source+"|"+(d===Q?ue:ve).source+"|"+(r.evaluate||ve).source+"|$","g"),p="//# sourceURL="+(je.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ot+"]")+"\n";t.replace(h,(function(e,r,n,o,s,l){return n||(n=o),f+=t.slice(u,l).replace(ye,nr),r&&(i=!0,f+="' +\n__e("+r+") +\n'"),s&&(a=!0,f+="';\n"+s+";\n__p += '"),n&&(f+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),u=l+e.length,e})),f+="';\n";var g=je.call(r,"variable")&&r.variable;if(g){if(le.test(g))throw new Ce("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n";f=(a?f.replace(N,""):f).replace(H,"$1").replace(W,"$1;"),f="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var m=Xs((function(){return Se(l,p+"return "+f).apply(e,c)}));if(m.source=f,Qa(m))throw m;return m},Pr.times=function(e,t){if((e=ps(e))<1||e>u)return[];var r=f,n=vr(e,f);t=ci(t),e-=f;for(var o=qt(n,t);++r<e;)t(r);return o},Pr.toFinite=hs,Pr.toInteger=ps,Pr.toLength=gs,Pr.toLower=function(e){return vs(e).toLowerCase()},Pr.toNumber=ms,Pr.toSafeInteger=function(e){return e?sn(ps(e),-9007199254740991,u):0===e?e:0},Pr.toString=vs,Pr.toUpper=function(e){return vs(e).toUpperCase()},Pr.trim=function(t,r,n){if((t=vs(t))&&(n||r===e))return Gt(t);if(!t||!(r=co(r)))return t;var o=dr(t),i=dr(r);return $o(o,Jt(o,i),er(o,i)+1).join("")},Pr.trimEnd=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.slice(0,fr(t)+1);if(!t||!(r=co(r)))return t;var o=dr(t);return $o(o,0,er(o,dr(r))+1).join("")},Pr.trimStart=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.replace(re,"");if(!t||!(r=co(r)))return t;var o=dr(t);return $o(o,Jt(o,dr(r))).join("")},Pr.truncate=function(t,r){var n=30,o="...";if(es(r)){var i="separator"in r?r.separator:i;n="length"in r?ps(r.length):n,o="omission"in r?co(r.omission):o}var a=(t=vs(t)).length;if(or(t)){var s=dr(t);a=s.length}if(n>=a)return t;var l=n-ur(o);if(l<1)return o;var c=s?$o(s,0,l).join(""):t.slice(0,l);if(i===e)return c+o;if(s&&(l+=c.length-l),is(i)){if(t.slice(l).search(i)){var u,d=c;for(i.global||(i=_e(i.source,vs(de.exec(i))+"g")),i.lastIndex=0;u=i.exec(d);)var f=u.index;c=c.slice(0,f===e?l:f)}}else if(t.indexOf(co(i),l)!=l){var h=c.lastIndexOf(i);h>-1&&(c=c.slice(0,h))}return c+o},Pr.unescape=function(e){return(e=vs(e))&&U.test(e)?e.replace(V,hr):e},Pr.uniqueId=function(e){var t=++Re;return vs(e)+t},Pr.upperCase=Gs,Pr.upperFirst=Qs,Pr.each=va,Pr.eachRight=ya,Pr.first=Ui,sl(Pr,(bl={},xn(Pr,(function(e,t){je.call(Pr.prototype,t)||(bl[t]=e)})),bl),{chain:!1}),Pr.VERSION="4.17.21",kt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Pr[e].placeholder=Pr})),kt(["drop","take"],(function(t,r){Wr.prototype[t]=function(n){n=n===e?1:br(ps(n),0);var o=this.__filtered__&&!r?new Wr(this):this.clone();return o.__filtered__?o.__takeCount__=vr(n,o.__takeCount__):o.__views__.push({size:vr(n,f),type:t+(o.__dir__<0?"Right":"")}),o},Wr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),kt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Wr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:ci(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),kt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Wr.prototype[e]=function(){return this[r](1).value()[0]}})),kt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Wr.prototype[e]=function(){return this.__filtered__?new Wr(this):this[r](1)}})),Wr.prototype.compact=function(){return this.filter(nl)},Wr.prototype.find=function(e){return this.filter(e).head()},Wr.prototype.findLast=function(e){return this.reverse().find(e)},Wr.prototype.invokeMap=Qn((function(e,t){return"function"==typeof e?new Wr(this):this.map((function(r){return Tn(r,e,t)}))})),Wr.prototype.reject=function(e){return this.filter(ja(ci(e)))},Wr.prototype.slice=function(t,r){t=ps(t);var n=this;return n.__filtered__&&(t>0||r<0)?new Wr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),r!==e&&(n=(r=ps(r))<0?n.dropRight(-r):n.take(r-t)),n)},Wr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wr.prototype.toArray=function(){return this.take(f)},xn(Wr.prototype,(function(t,r){var n=/^(?:filter|find|map|reject)|While$/.test(r),o=/^(?:head|last)$/.test(r),i=Pr[o?"take"+("last"==r?"Right":""):r],a=o||/^find/.test(r);i&&(Pr.prototype[r]=function(){var r=this.__wrapped__,s=o?[1]:arguments,l=r instanceof Wr,c=s[0],u=l||Va(r),d=function(e){var t=i.apply(Pr,Mt([e],s));return o&&f?t[0]:t};u&&n&&"function"==typeof c&&1!=c.length&&(l=u=!1);var f=this.__chain__,h=!!this.__actions__.length,p=a&&!f,g=l&&!h;if(!a&&u){r=g?r:new Wr(this);var m=t.apply(r,s);return m.__actions__.push({func:ha,args:[d],thisArg:e}),new Hr(m,f)}return p&&g?t.apply(this,s):(m=this.thru(d),p?o?m.value()[0]:m.value():m)})})),kt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Te[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Pr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var o=this.value();return t.apply(Va(o)?o:[],e)}return this[r]((function(r){return t.apply(Va(r)?r:[],e)}))}})),xn(Wr.prototype,(function(e,t){var r=Pr[t];if(r){var n=r.name+"";je.call(Tr,n)||(Tr[n]=[]),Tr[n].push({name:t,func:r})}})),Tr[No(e,2).name]=[{name:"wrapper",func:e}],Wr.prototype.clone=function(){var e=new Wr(this.__wrapped__);return e.__actions__=To(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=To(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=To(this.__views__),e},Wr.prototype.reverse=function(){if(this.__filtered__){var e=new Wr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Va(e),n=t<0,o=r?e.length:0,i=function(e,t,r){for(var n=-1,o=r.length;++n<o;){var i=r[n],a=i.size;switch(i.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,o,this.__views__),a=i.start,s=i.end,l=s-a,c=n?s:a-1,u=this.__iteratees__,d=u.length,f=0,h=vr(l,this.__takeCount__);if(!r||!n&&o==l&&h==l)return go(e,this.__actions__);var p=[];e:for(;l--&&f<h;){for(var g=-1,m=e[c+=t];++g<d;){var b=u[g],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[f++]=m}return p},Pr.prototype.at=pa,Pr.prototype.chain=function(){return fa(this)},Pr.prototype.commit=function(){return new Hr(this.value(),this.__chain__)},Pr.prototype.next=function(){this.__values__===e&&(this.__values__=fs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Pr.prototype.plant=function(t){for(var r,n=this;n instanceof Nr;){var o=Pi(n);o.__index__=0,o.__values__=e,r?i.__wrapped__=o:r=o;var i=o;n=n.__wrapped__}return i.__wrapped__=t,r},Pr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Wr){var r=t;return this.__actions__.length&&(r=new Wr(this)),(r=r.reverse()).__actions__.push({func:ha,args:[ea],thisArg:e}),new Hr(r,this.__chain__)}return this.thru(ea)},Pr.prototype.toJSON=Pr.prototype.valueOf=Pr.prototype.value=function(){return go(this.__wrapped__,this.__actions__)},Pr.prototype.first=Pr.prototype.head,Je&&(Pr.prototype[Je]=function(){return this}),Pr}();pt?((pt.exports=pr)._=pr,ht._=pr):ft._=pr}.call(je);var F$=I$.exports;const M$=o.forwardRef(((n,o)=>{var{value:i,readOnly:a,"data-testid":s,maskRange:l,unmaskRange:u,maskRegex:d,maskTransformer:f,iconMask:h=t(be,{}),iconUnmask:p=t(me,{}),iconActiveColor:m,iconInactiveColor:b,maskChar:v="•",error:y,disableMask:x,transformInput:w,loadState:$,onMask:C,onUnmask:S,onChange:D,onFocus:k,onBlur:_,onTryAgain:O}=n,E=ct(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const T=a&&F$.isEmpty(i),[I,F]=g(!x),[M,A]=g(i||"");c((()=>{A(i||"")}),[i]);const j=e=>{L(!1),k&&k(e)},R=e=>{L(!0),_&&_(e)},z=e=>{let t=e.target.value;switch(w){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}A(t),e.target.value=t,D&&D(e)},B=()=>{a&&O&&O()},P=()=>{L(!I)},L=e=>{F(e),e?C&&C():S&&S()},N=()=>!(null==M?void 0:M.toString().length)||x,H=()=>{if(T)return t(r,{});const e=N();return t(x$,{"data-testid":"icon-"+(I?"masked":"unmasked"),onClick:e?void 0:P,$isDisabled:e,$inactiveColor:b,$activeColor:m,children:I?p:h})};return t("div",{"aria-busy":"loading"===$,"aria-live":"polite",children:(()=>{if(a)switch($){case"fail":return e(O$,{onClick:B,"data-testid":"try-again-button",children:[e(D$,{children:[t(k$,{}),t(_$,{children:"Error"})]}),t(S$,{children:"Try again?"})]});case"loading":return e(w$,{children:[t(C$,{}),t($$,{children:"Retrieving..."})]})}return t(y$,Object.assign({ref:o,"data-testid":`${s||"masked-input"}${I?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:H()},position:"right"},onFocus:a?void 0:j,onBlur:a?void 0:R,onClick:a?P:void 0,onChange:z,value:T?"-":I&&!x?Vc.maskValue(M,{maskChar:v,maskRange:l,unmaskRange:u,maskRegex:d,maskTransformer:f}):M,readOnly:a,error:y,$isDisabled:N()},E))})()})})),A$=o.forwardRef(((e,r)=>{const{label:n,errorMessage:o,id:i="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d}=e,f=ct(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return t(Wu,{id:i,label:n,errorMessage:o,disabled:f.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,children:t(M$,Object.assign({ref:r,id:`${i}-base`,"data-testid":s||i,error:!!o},f))})})),j$=_.div`
    font-weight: ${e=>e.$bold?Ii.Spec["weight-semibold"]:Ii.Spec["weight-regular"]};

    ${e=>e.$disabled?O`
                color: ${Ti["text-disabled"]};
            `:e.$selected?O`
                color: ${Ti["text-selected"]};
            `:O`
                color: ${Ti.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&Bi(e.$maxLines||2)}
    overflow-wrap: break-word;
`,R$=_.div`
    color: ${Ti["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Bi(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?O`
                    ${Ii["body-md-semibold"]}
                `:O`
                    ${Ii["body-baseline-regular"]}
                `}
`,z$=_.span`
    font-weight: ${Ii.Spec["weight-semibold"]};
`,B$=_.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Ii["body-md-regular"]:Ii["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return O`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return O`
                    ${j$} {
                        display: inline;
                    }

                    ${R$} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,P$=_.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,L$=_.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,N$=({bold:n,displayType:o="inline",label:i,searchTerm:s,maxLines:l=2,selected:c,disabled:d,sublabel:f,truncationType:h="middle",variant:p="default"})=>{const g=E(),m="small"===p?Ii.Spec["body-size-md"]({theme:g}):Ii.Spec["body-size-baseline"]({theme:g}),b=Ii.Spec["font-family"]({theme:g}),{ref:v,width:y}=mc(),x=u((e=>{if("inline"!==o||!y)return!1;return Vc.getTextWidth(e,`${m} '${b}'`)>y*l-50}),[y,o,m,b,l]),w=a((()=>x(i)),[x,i]),$=a((()=>f&&x(f)),[x,f]),C=n=>{if(!s)return n;const o=s.toLowerCase().trim(),a=n.toLowerCase().indexOf(o),l=a+s.length;return-1===a?n:e(r,{children:[i.slice(0,a),t(z$,{$variant:p,children:i.slice(a,l)}),i.slice(l)]})},S=n=>e(r,{children:[t(P$,{$maxLines:l,"aria-hidden":!0,children:C(n)}),t(L$,{$maxLines:l,"aria-hidden":!0,children:C(n)})]});return e(B$,{ref:v,$labelDisplayType:w||$?"next-line":o,$variant:p,children:[t(j$,{"aria-label":i,$bold:n,$maxLines:l,$selected:c,$disabled:d,$truncateType:h,children:"middle"===h&&w?S(i):C(i)}),f&&t(R$,{"aria-label":f,$maxLines:l,$truncateType:h,$labelDisplayType:o,children:"middle"===h&&$?S(f):f})]})};function H$(e){return()=>e}function W$(e){e()}function V$(e,t){return r=>e(t(r))}function Y$(e,t){return()=>e(t)}function U$(e,t){return r=>e(t,r)}function K$(e){return void 0!==e}function q$(){}function G$(e,t){return t(e),e}function Q$(e,t){return t(e)}function Z$(...e){return e}function X$(e,t){return e(1,t)}function J$(e,t){e(0,t)}function eC(e){e(2)}function tC(e){return e(4)}function rC(e,t){return X$(e,U$(t,0))}function nC(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function oC(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function iC(e,t){return e===t}function aC(e=iC){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function sC(e){return t=>r=>{e(r)&&t(r)}}function lC(e){return t=>V$(t,e)}function cC(e){return t=>()=>{t(e)}}function uC(e,...t){const r=function(...e){return t=>e.reduceRight(Q$,t)}(...t);return(t,n)=>{switch(t){case 2:return void eC(e);case 1:return X$(e,r(n))}}}function dC(e,t){return r=>n=>{r(t=e(t,n))}}function fC(e){return t=>r=>{e>0?e--:t(r)}}function hC(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function pC(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);X$(e,(e=>{const s=r;r|=a,t[i]=e,s!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const a=()=>{e([i].concat(t))};r===o?a():n=a}}function gC(e){let t=e;const r=bC();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function mC(e,t){return G$(gC(t),(t=>rC(e,t)))}function bC(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function vC(e){return G$(bC(),(t=>rC(e,t)))}function yC(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:xC(),singleton:r}}const xC=()=>Symbol();function wC(...e){const t=bC(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);X$(e,(e=>{r[i]=e,n|=a,n===o&&J$(t,r)}))})),function(e,i){switch(e){case 2:return void eC(t);case 1:return n===o&&i(r),X$(t,i)}}}function $C(e,t=iC){return uC(e,aC(t))}function CC(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(W$)}}(...e.map((e=>X$(e,r))))}}}var SC=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(SC||{});const DC={0:"debug",3:"error",1:"log",2:"warn"},kC=yC((()=>{const e=gC(3);return{log:gC(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:tC(e))&&console[DC[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function _C(e,t,r){return OC(e,t,r).callbackRef}function OC(e,t,r){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function EC(e,t,r,n,i,a,s,l,c){const u=o.useCallback((r=>{const o=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),c=t(o,r);if(0===c&&n("Zero-sized element, this should not happen",{child:o},SC.ERROR),c===l)continue;const u=i[i.length-1];0===i.length||u.size!==c||u.endIndex!==s-1?i.push({endIndex:s,size:c,startIndex:s}):i[i.length-1].endIndex++}return i}(r.children,t,l?"offsetWidth":"offsetHeight",i);let c=r.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const u="window"===c.lastElementChild.dataset.viewportType,d=s?l?s.scrollLeft:s.scrollTop:u?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?c.scrollLeft:c.scrollTop,f=s?l?s.scrollWidth:s.scrollHeight:u?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?c.scrollWidth:c.scrollHeight,h=s?l?s.offsetWidth:s.offsetHeight:u?l?window.innerWidth:window.innerHeight:l?c.offsetWidth:c.offsetHeight;n({scrollHeight:f,scrollTop:Math.max(d,0),viewportHeight:h}),null==a||a(l?TC("column-gap",getComputedStyle(r).columnGap,i):TC("row-gap",getComputedStyle(r).rowGap,i)),null!==o&&e(o)}),[e,t,i,a,s,n]);return OC(u,r,c)}function TC(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,SC.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function IC(e,t,r){const n=o.useRef(null),i=o.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let a,s;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;s=e.height-Math.max(0,r),a=r+t.scrollTop}else s=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:a,ref:s}=OC(i,!0,r),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),a}const FC=yC((()=>{const e=bC(),t=bC(),r=gC(0),n=bC(),o=gC(0),i=bC(),a=bC(),s=gC(0),l=gC(0),c=gC(0),u=gC(0),d=bC(),f=bC(),h=gC(!1),p=gC(!1),g=gC(!1);return rC(uC(e,lC((({scrollTop:e})=>e))),t),rC(uC(e,lC((({scrollHeight:e})=>e))),a),rC(t,o),{deviation:r,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:u,headerHeight:s,horizontalDirection:p,scrollBy:f,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:d,scrollTop:t,skipAnimationFrameInResizeObserver:g,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),MC={lvl:0};function AC(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let a=1;a<r;a++){const{index:r,value:s}=t(e[a]);i.push({end:r-1,start:n,value:o}),n=r,o=s}return i.push({end:1/0,start:n,value:o}),i}function jC(e){return e===MC}function RC(e,t){if(!jC(e))return t===e.k?e.v:t<e.k?RC(e.l,t):RC(e.r,t)}function zC(e,t,r="k"){if(jC(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=zC(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return zC(e.l,t,r)}function BC(e,t,r){return jC(e)?GC(t,r,1):t===e.k?YC(e,{k:t,v:r}):t<e.k?QC(YC(e,{l:BC(e.l,t,r)})):QC(YC(e,{r:BC(e.r,t,r)}))}function PC(){return MC}function LC(e,t,r){if(jC(e))return[];return function(e){return AC(e,(({k:e,v:t})=>({index:e,value:t})))}(WC(e,zC(e,t)[0],r))}function NC(e,t){if(jC(e))return MC;const{k:r,l:n,r:o}=e;if(t===r){if(jC(n))return o;if(jC(o))return n;{const[t,r]=qC(n);return VC(YC(e,{k:t,l:UC(n),v:r}))}}return VC(YC(e,t<r?{l:NC(n,t)}:{r:NC(o,t)}))}function HC(e){return jC(e)?[]:[...HC(e.l),{k:e.k,v:e.v},...HC(e.r)]}function WC(e,t,r){if(jC(e))return[];const{k:n,l:o,r:i,v:a}=e;let s=[];return n>t&&(s=s.concat(WC(o,t,r))),n>=t&&n<=r&&s.push({k:n,v:a}),n<=r&&(s=s.concat(WC(i,t,r))),s}function VC(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(KC(t))return ZC(YC(e,{lvl:r-1}));if(!jC(t)&&!jC(t.r))return YC(t.r,{l:YC(t,{r:t.r.l}),lvl:r,r:YC(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(KC(e))return XC(YC(e,{lvl:r-1}));if(jC(n)||jC(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=KC(t)?n.lvl-1:n.lvl;return YC(t,{l:YC(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:XC(YC(n,{l:t.r,lvl:o}))})}}function YC(e,t){return GC(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function UC(e){return jC(e.r)?e.l:VC(YC(e,{r:UC(e.r)}))}function KC(e){return jC(e)||e.lvl>e.r.lvl}function qC(e){return jC(e.r)?[e.k,e.v]:qC(e.r)}function GC(e,t,r,n=MC,o=MC){return{k:e,l:n,lvl:r,r:o,v:t}}function QC(e){return XC(ZC(e))}function ZC(e){const{l:t}=e;return jC(t)||t.lvl!==e.lvl?e:YC(t,{r:YC(e,{l:t.r})})}function XC(e){const{lvl:t,r:r}=e;return jC(r)||jC(r.r)||r.lvl!==t||r.r.lvl!==t?e:YC(r,{l:YC(e,{r:r.l}),lvl:t+1})}function JC(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function eS(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const tS=yC((()=>({recalcInProgress:gC(!1)})),[],{singleton:!0});function rS(e,t,r){return e[nS(e,t,r)]}function nS(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),a=r(e[i],t);if(0===a)return i;if(-1===a){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function oS(e,t){return Math.round(e.getBoundingClientRect()[t])}function iS(e){return!jC(e.groupOffsetTree)}function aS({index:e},t){return t===e?0:t<e?-1:1}function sS({offset:e},t){return t===e?0:t<e?-1:1}function lS(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=rS(t,e,aS),a=e-n,s=i*a+(a-1)*r+o;return s>0?s+r:s}function cS(e,t){if(!iS(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function uS(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=cS("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function dS(e,t,r,n=0){return n>0&&(t=Math.max(t,rS(e,n,aS).offset)),AC(function(e,t,r,n){const o=nS(e,t,n),i=nS(e,r,n,o);return e.slice(o,i+1)}(e,t,r,sS),gS)}function fS(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,SC.DEBUG);const i=e.sizeTree;let a=i,s=0;if(r.length>0&&jC(i)&&2===t.length){const e=t[0].size,n=t[1].size;a=r.reduce(((t,r)=>BC(BC(t,r,e),r+1,n)),a)}else[a,s]=function(e,t){let r=jC(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),jC(e)){e=BC(e,0,o);continue}const a=LC(e,i-1,t+1);if(a.some(mS(n)))continue;let s=!1,l=!1;for(const{end:r,start:n,value:i}of a)s?(t>=n||o===i)&&(e=NC(e,n)):(l=i!==o,s=!0),r>t&&t>=n&&i!==o&&(e=BC(e,t+1,i));l&&(e=BC(e,i,o))}return[e,r]}(a,t);if(a===i)return e;const{lastIndex:l,lastOffset:c,lastSize:u,offsetTree:d}=pS(e.offsetTree,s,a,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>BC(e,t,lS(t,d,o))),PC()),lastIndex:l,lastOffset:c,lastSize:u,offsetTree:d,sizeTree:a}}function hS(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function pS(e,t,r,n){let o=e,i=0,a=0,s=0,l=0;if(0!==t){l=nS(o,t-1,aS),s=o[l].offset;const e=zC(r,t-1);i=e[0],a=e[1],o.length&&o[l].size===zC(r,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of LC(r,t,1/0)){const t=e-i,r=t*a+s+t*n;o.push({index:e,offset:r,size:l}),i=e,s=r,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function gS(e){return{index:e.index,value:e}}function mS(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const bS={offsetHeight:"height",offsetWidth:"width"},vS=yC((([{log:e},{recalcInProgress:t}])=>{const r=bC(),n=bC(),o=mC(n,0),i=bC(),a=bC(),s=gC(0),l=gC([]),c=gC(void 0),u=gC(void 0),d=gC(((e,t)=>oS(e,bS[t]))),f=gC(void 0),h=gC(0),p={groupIndices:[],groupOffsetTree:PC(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:PC()},g=mC(uC(r,pC(l,e,h),dC(fS,p),aC()),p),m=mC(uC(l,aC(),dC(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),lC((({prev:e})=>e))),[]);rC(uC(l,sC((e=>e.length>0)),pC(g,h),lC((([e,t,r])=>{const n=e.reduce(((e,n,o)=>BC(e,n,lS(n,t.offsetTree,r)||o)),PC());return{...t,groupIndices:e,groupOffsetTree:n}}))),g),rC(uC(n,pC(g),sC((([e,{lastIndex:t}])=>e<t)),lC((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),rC(c,u);const b=mC(uC(c,lC((e=>void 0===e))),!0);rC(uC(u,sC((e=>void 0!==e&&jC(tC(g).sizeTree))),lC((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=vC(uC(r,pC(g),dC((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:p}),lC((e=>e.changed))));X$(uC(s,dC(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),lC((e=>e.diff))),(e=>{const{groupIndices:r}=tC(g);if(e>0)J$(t,!0),J$(i,e+hS(e,r));else if(e<0){const t=tC(m);t.length>0&&(e-=hS(-e,t)),J$(a,e)}})),X$(uC(s,pC(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},SC.ERROR)}));const y=vC(i);rC(uC(i,pC(g),lC((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=RC(t.sizeTree,0);let i=0,a=0;for(;i<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=HC(t.sizeTree);return i!==e&&s.shift(),s.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return HC(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=vC(uC(a,pC(g,h),lC((([e,{offsetTree:t},r])=>lS(-e,t,r)))));return rC(uC(a,pC(g,h),lC((([e,t,r])=>{if(t.groupIndices.length>0){if(jC(t.sizeTree))return t;let n=PC();const o=tC(m);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(n=HC(t.sizeTree).reduce(((t,{k:r,v:n})=>BC(t,Math.max(0,r+e),n)),n),i!==-e){n=BC(n,0,RC(t.sizeTree,s));n=BC(n,1,zC(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...pS(t.offsetTree,0,n,r)}}{const n=HC(t.sizeTree).reduce(((t,{k:r,v:n})=>BC(t,Math.max(0,r+e),n)),PC());return{...t,sizeTree:n,...pS(t.offsetTree,0,n,r)}}}))),g),{beforeUnshiftWith:y,data:f,defaultItemSize:u,firstItemIndex:s,fixedItemSize:c,gap:h,groupIndices:l,itemSize:d,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:r,sizes:g,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),Z$(kC,tS),{singleton:!0});function yS(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const xS=yC((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=bC(),a=bC(),s=vC(uC(i,lC(yS)));return rC(uC(s,lC((e=>e.totalCount))),r),rC(uC(s,lC((e=>e.groupIndices))),e),rC(uC(wC(o,t,n),sC((([e,t])=>iS(t))),lC((([e,t,r])=>zC(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),aC(),lC((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),Z$(vS,FC)),wS=yC((([{log:e}])=>{const t=gC(!1),r=vC(uC(t,sC((e=>e)),aC()));return X$(t,(t=>{t&&tC(e)("props updated",{},SC.DEBUG)})),{didMount:r,propsReady:t}}),Z$(kC),{singleton:!0}),$S=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function CS(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!$S)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const SS=yC((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:u,viewportHeight:d},{log:f}])=>{const h=bC(),p=bC(),g=gC(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),J$(l,!1)}return rC(uC(h,pC(r,d,n,g,s,a,f),pC(e,i,o),lC((([[e,r,n,o,i,a,s,c],d,f,g])=>{const x=CS(e),{align:w,behavior:$,offset:C}=x,S=o-1,D=uS(x,r,S);let k=lS(D,r.offsetTree,d)+a;"end"===w?(k+=f+zC(r.sizeTree,D)[1]-n+g,D===S&&(k+=s)):"center"===w?k+=(f+zC(r.sizeTree,D)[1]-n+g)/2:k-=i,C&&(k+=C);const _=t=>{y(),t?(c("retrying to scroll to",{location:e},SC.DEBUG),J$(h,e)):(J$(p,!0),c("list did not change, scroll successful",{},SC.DEBUG))};if(y(),"smooth"===$){let e=!1;v=X$(t,(t=>{e=e||t})),m=nC(u,(()=>{_(e)}))}else m=nC(uC(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),_);return b=setTimeout((()=>{y()}),1200),J$(l,!0),c("scrolling from index to",{behavior:$,index:D,top:k},SC.DEBUG),{behavior:$,top:k}}))),c),{scrollTargetReached:p,scrollToIndex:h,topListHeight:g}}),Z$(vS,FC,kC),{singleton:!0});function DS(e,t){0==e?t():requestAnimationFrame((()=>{DS(e-1,t)}))}function kS(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const _S=yC((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=gC(!0),l=gC(0),c=gC(!0);return rC(uC(a,pC(l),sC((([e,t])=>!!t)),cC(!1)),s),rC(uC(a,pC(l),sC((([e,t])=>!!t)),cC(!1)),c),X$(uC(wC(t,a),pC(s,r,e,c),sC((([[,e],t,{sizeTree:r},n,o])=>e&&(!jC(r)||K$(n))&&!t&&!o)),pC(l)),(([,e])=>{nC(o,(()=>{J$(c,!0)})),DS(4,(()=>{nC(n,(()=>{J$(s,!0)})),J$(i,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),Z$(vS,FC,SS,wS),{singleton:!0});function OS(e,t){return Math.abs(e-t)<1.01}const ES="up",TS="down",IS={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},FS=yC((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const a=gC(!1),s=gC(!0),l=bC(),c=bC(),u=gC(4),d=gC(0),f=mC(uC(CC(uC($C(o),fC(1),cC(!0)),uC($C(o),fC(1),cC(!1),oC(100))),aC()),!1),h=mC(uC(CC(uC(r,cC(!0)),uC(r,cC(!1),oC(200))),aC()),!1);rC(uC(wC($C(o),$C(d)),lC((([e,t])=>e<=t)),aC()),s),rC(uC(s,hC(50)),c);const p=vC(uC(wC(n,$C(i),$C(t),$C(e),$C(u)),dC(((e,[{scrollHeight:t,scrollTop:r},n,o,i,a])=>{const s={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-a){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),IS),aC(((e,t)=>e&&e.atBottom===t.atBottom)))),g=mC(uC(n,dC(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(OS(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),sC((e=>e.changed)),lC((e=>e.jump))),0);rC(uC(p,lC((e=>e.atBottom))),a),rC(uC(a,hC(50)),l);const m=gC(TS);rC(uC(n,lC((({scrollTop:e})=>e)),aC(),dC(((e,t)=>tC(h)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?ES:TS,prevScrollTop:t}),{direction:TS,prevScrollTop:0}),lC((e=>e.direction))),m),rC(uC(n,hC(50),cC("none")),m);const b=gC(0);return rC(uC(f,sC((e=>!e)),cC(0)),b),rC(uC(o,hC(100),pC(f),sC((([e,t])=>!!t)),dC((([e,t],[r])=>[t,r]),[0,0]),lC((([e,t])=>t-e))),b),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:u,atTopStateChange:c,atTopThreshold:d,isAtBottom:a,isAtTop:s,isScrolling:f,lastJumpDueToItemResize:g,scrollDirection:m,scrollVelocity:b}}),Z$(FC)),MS="top",AS="bottom",jS="none";function RS(e,t,r){return"number"==typeof e?r===ES&&t===MS||r===TS&&t===AS?e:0:r===ES?t===MS?e.main:e.reverse:t===AS?e.main:e.reverse}function zS(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const BS=yC((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=bC(),a=gC(0),s=gC(0),l=gC(0),c=mC(uC(wC($C(n),$C(o),$C(r),$C(i,eS),$C(l),$C(a),$C(t),$C(e),$C(s)),lC((([e,t,r,[n,o],i,a,s,l,c])=>{const u=e-l,d=a+s,f=Math.max(r-u,0);let h=jS;const p=zS(c,MS),g=zS(c,AS);return n-=l,o+=r+s,(n+=r+s)>e+d-p&&(h=ES),(o-=l)<e-f+t+g&&(h=TS),h!==jS?[Math.max(u-r-RS(i,MS,h)-p,0),u-f-s+t+RS(i,AS,h)+g]:null})),sC((e=>null!=e)),aC(eS)),[0,0]);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:c}}),Z$(FC),{singleton:!0});const PS={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function LS(e,t,r,n,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let c=0,u=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];u=t.offset+t.size}const d=r-a,f=c,h=s+d*l+(d-1)*n-u;return{bottom:u,firstItemIndex:i,items:HS(e,o,i),offsetBottom:h,offsetTop:c,top:f,topItems:HS(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function NS(e,t,r,n,o,i){let a=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=kS(t,s);return LS(Array.from({length:s}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],s,o,r,n)}function HS(e,t,r){if(0===e.length)return[];if(!iS(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],a=LC(t.groupOffsetTree,n,o);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const WS=yC((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:u},{topListHeight:d},f,{didMount:h},{recalcInProgress:p}])=>{const g=gC([]),m=gC(0),b=bC();rC(i.topItemsIndexes,g);const v=mC(uC(wC(h,p,$C(l,eS),$C(o),$C(n),$C(c),u,$C(g),$C(t),$C(r),e),sC((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),lC((([,,[e,t],r,n,o,i,a,s,l,c])=>{const u=n,{offsetTree:d,sizeTree:f}=u,h=tC(m);if(0===r)return{...PS,totalCount:r};if(0===e&&0===t)return 0===h?{...PS,totalCount:r}:NS(h,o,n,s,l,c||[]);if(jC(f))return h>0?null:LS(function(e,t,r){if(iS(t)){const n=cS(e,t);return[{index:zC(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(kS(o,r),u,c),[],r,l,u,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let r=0;for(const n of LC(f,e,t)){const o=n.value,i=Math.max(n.start,e),a=Math.min(n.end,t);for(let e=i;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:r,size:o}),r+=o}}if(!i)return LS([],p,r,l,u,s);const g=a.length>0?a[a.length-1]+1:0,b=dS(d,e,t,g);if(0===b.length)return null;const v=r-1;return LS(G$([],(r=>{for(const n of b){const o=n.value;let i=o.offset,a=n.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const t=a-n.start;i+=t*s+t*l}a<g&&(i+=(g-a)*s,a=g);const u=Math.min(n.end,v);for(let e=a;e<=u&&!(i>=t);e++)r.push({data:null==c?void 0:c[e],index:e,offset:i,size:s}),i+=s+l}})),p,r,l,u,s)})),sC((e=>null!==e)),aC()),PS);rC(uC(e,sC(K$),lC((e=>null==e?void 0:e.length))),o),rC(uC(v,lC((e=>e.topListHeight))),d),rC(d,s),rC(uC(v,lC((e=>[e.top,e.bottom]))),a),rC(uC(v,lC((e=>e.items))),b);const y=vC(uC(v,sC((({items:e})=>e.length>0)),pC(o,e),sC((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),lC((([,e,t])=>[e-1,t])),aC(eS),lC((([e])=>e)))),x=vC(uC(v,hC(200),sC((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),lC((({items:e})=>e[0].index)),aC())),w=vC(uC(v,sC((({items:e})=>e.length>0)),lC((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),aC(JC)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:g,...f}}),Z$(vS,xS,BS,_S,SS,FS,wS,tS),{singleton:!0}),VS=yC((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=bC(),a=mC(uC(wC(r,e,n,t,o),lC((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return rC($C(a),i),{totalListHeight:a,totalListHeightChanged:i}}),Z$(FC,WS),{singleton:!0}),YS=yC((([{viewportHeight:e},{totalListHeight:t}])=>{const r=gC(!1),n=mC(uC(wC(r,e,t),sC((([e])=>e)),lC((([,e,t])=>Math.max(0,e-t))),hC(0),aC()),0);return{alignToBottom:r,paddingTopAddition:n}}),Z$(FC,VS),{singleton:!0});function US(e){return!!e&&("smooth"===e?"smooth":"auto")}const KS=yC((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:c}])=>{const u=gC(!1),d=bC();let f=null;function h(e){J$(o,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=nC(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!f&&(tC(l)("scrolling to bottom due to increased size",{},SC.DEBUG),h("auto"))}));setTimeout(t,100)}return X$(uC(wC(uC($C(t),fC(1)),a),pC($C(u),n,i,c),lC((([[e,t],r,n,o,i])=>{let a=t&&o,s="auto";return a&&(s=((e,t)=>"function"==typeof e?US(e(t)):t&&US(e))(r,n||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),sC((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{f&&(f(),f=null),f=nC(e,(()=>{tC(l)("following output to ",{totalCount:r},SC.DEBUG),h(t),f=null}))})),X$(uC(wC($C(u),t,s),sC((([e,,t])=>e&&t)),dC((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),sC((({refreshed:e})=>e)),pC(u,t)),(([,e])=>{tC(i)&&p(!1!==e)})),X$(d,(()=>{p(!1!==tC(u))})),X$(wC($C(u),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&h("auto")})),{autoscrollToBottom:d,followOutput:u}}),Z$(vS,FS,SS,_S,wS,kC,FC)),qS=yC((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(rC(uC(s,pC(i),sC((([,e])=>0!==e)),pC(o,n,t,r,e),lC((([[,e],t,r,n,o,i=[]])=>NS(e,t,r,n,o,i)))),a),{})),Z$(vS,_S,WS,wS),{singleton:!0}),GS=yC((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=gC(0);return X$(uC(e,pC(n),sC((([,e])=>0!==e)),lC((([,e])=>({top:e})))),(e=>{nC(uC(r,fC(1),sC((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{J$(t,e)}))}))})),{initialScrollTop:n}}),Z$(wS,FC,WS),{singleton:!0}),QS=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:a})=>t<a?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,ZS=yC((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const u=bC();return rC(uC(u,pC(t,l,r,i,o,n,s),pC(e),lC((([[e,t,r,n,o,i,s,l],c])=>{const{align:u,behavior:d,calculateViewLocation:f=QS,done:h,...p}=e,g=uS(e,t,n-1),m=lS(g,t.offsetTree,c)+o+i,b=f({itemBottom:m+zC(t.sizeTree,g)[1],itemTop:m,locationParams:{align:u,behavior:d,...p},viewportBottom:l+r-s,viewportTop:l+i});return b?h&&nC(uC(a,sC((e=>!e)),fC(tC(a)?1:2)),h):h&&h(),b})),sC((e=>null!==e))),c),{scrollIntoView:u}}),Z$(vS,FC,SS,WS,kC),{singleton:!0}),XS=yC((([{scrollVelocity:e}])=>{const t=gC(!1),r=bC(),n=gC(!1);return rC(uC(e,pC(n,t,r),sC((([e,t])=>!!t)),lC((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),aC()),t),X$(uC(wC(t,e,r),pC(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),Z$(FS),{singleton:!0}),JS=yC((([{scrollContainerState:e,scrollTo:t}])=>{const r=bC(),n=bC(),o=bC(),i=gC(!1),a=gC(void 0);return rC(uC(wC(r,n),lC((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),rC(uC(t,pC(n),lC((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),Z$(FC)),eD=yC((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=bC(),u=gC(void 0),d=gC(null),f=gC(null);return rC(s,d),rC(l,f),X$(uC(c,pC(t,n,a,d,f,r)),(([e,t,r,n,o,i,a])=>{const s=function(e){return HC(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:r-=a})})),rC(uC(u,sC(K$),lC(tD)),o),rC(uC(i,pC(u),sC((([,e])=>void 0!==e)),aC(),lC((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:u}}),Z$(vS,FC,_S,wS,JS));function tD(e){return{align:"start",index:0,offset:e.scrollTop}}const rD=yC((([{topItemsIndexes:e}])=>{const t=gC(0);return rC(uC(t,sC((e=>e>=0)),lC((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),Z$(WS));function nD(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const oD=nD((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),iD=yC((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:u,shiftWithOffset:d,sizes:f},{log:h},{recalcInProgress:p}])=>{const g=vC(uC(l,pC(a),dC((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:a},s])=>{const l=n+i;let c=0;return t===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(c=l-r,0!==c&&(c+=s))),[c,o,a,l]}),[0,[],0,0]),sC((([e])=>0!==e)),pC(n,s,r,o,h,p),sC((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===ES)),lC((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},SC.DEBUG),e)))));function m(r){r>0?(J$(t,{behavior:"auto",top:-r}),J$(e,0)):(J$(e,0),J$(t,{behavior:"auto",top:-r}))}return X$(uC(g,pC(e,i)),(([t,r,n])=>{n&&oD()?J$(e,r-t):m(-t)})),X$(uC(wC(mC(i,!1),e,p),sC((([e,t,r])=>!e&&!r&&0!==t)),lC((([e,t])=>t)),hC(1)),m),rC(uC(d,lC((e=>({top:-e})))),t),X$(uC(c,pC(f,u),lC((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=RC(n,0);let a=0,s=0;for(;a<e;){a++,r+=o;let n=t.length===s+1?1/0:t[s+1]-t[s]-1;a+n>e&&(r-=o,n=e-a+1),a+=n,r+=i(n),s++}return r}}))),(r=>{J$(e,r),requestAnimationFrame((()=>{J$(t,{top:r}),requestAnimationFrame((()=>{J$(e,0),J$(p,!1)}))}))})),{deviation:e}}),Z$(FC,FS,WS,vS,kC,tS)),aD=yC((([e,t,r,n,o,i,a,s,l,c])=>({...e,...t,...r,...n,...o,...i,...a,...s,...l,...c})),Z$(BS,qS,wS,XS,VS,GS,YS,JS,ZS,kC)),sD=yC((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:u,trackItemSizes:d},{initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p},g,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:S},D])=>(rC(x.rangeChanged,D.scrollSeekRangeChanged),rC(uC(D.windowViewportRect,lC((e=>e.visibleHeight))),g.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:S,initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:u,...b,groupIndices:i,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:d,...x,...D,...g,sizes:l,...m})),Z$(vS,_S,FC,eD,KS,WS,SS,iD,rD,xS,aD));function lD(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const cD=typeof document<"u"?o.useLayoutEffect:o.useEffect;function uD(e,r,n){const i=Object.keys(r.required||{}),a=Object.keys(r.optional||{}),s=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),c=o.createContext({});function u(e,t){e.propsReady&&J$(e.propsReady,!1);for(const n of i){J$(e[r.required[n]],t[n])}for(const n of a)if(n in t){J$(e[r.optional[n]],t[n])}e.propsReady&&J$(e.propsReady,!0)}function d(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?r===i?void 0:(n(),r=i,t=X$(e,i),t):(n(),q$);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const f=o.forwardRef(((f,h)=>{const{children:p,...g}=f,[m]=o.useState((()=>G$(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const a=e(n.map((e=>r(e))));return i&&t.set(o,a),a};return r(e)}(e),(e=>{u(e,g)})))),[b]=o.useState(Y$(d,m));cD((()=>{for(const e of l)e in g&&X$(b[e],g[e]);return()=>{Object.values(b).map(eC)}}),[g,b,m]),cD((()=>{u(m,g)})),o.useImperativeHandle(h,H$(function(e){return s.reduce(((t,n)=>(t[n]=t=>{J$(e[r.methods[n]],t)},t)),{})}(m)));const v=n;return t(c.Provider,{value:m,children:n?t(v,{...lD([...i,...a,...l],g),children:p}):p})})),h=o.version.startsWith("18")?e=>{const t=o.useContext(c)[e],r=o.useCallback((e=>X$(t,e)),[t]);return o.useSyncExternalStore(r,(()=>tC(t)),(()=>tC(t)))}:e=>{const t=o.useContext(c)[e],[r,n]=o.useState(Y$(tC,t));return cD((()=>X$(t,(e=>{e!==r&&n(H$(e))}))),[t,r]),r};return{Component:f,useEmitter:(e,t)=>{const r=o.useContext(c)[e];cD((()=>X$(r,t)),[t,r])},useEmitterValue:h,usePublisher:e=>o.useCallback(U$(J$,o.useContext(c)[e]),[e])}}const dD=o.createContext(void 0),fD=o.createContext(void 0),hD=typeof document<"u"?o.useLayoutEffect:o.useEffect;function pD(e,t,r,n=q$,i,a){const s=o.useRef(null),l=o.useRef(null),c=o.useRef(null),u=o.useCallback((r=>{const n=r.target,o=n===window||n===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,u=a?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,d=()=>{e({scrollHeight:s,scrollTop:Math.max(i,0),viewportHeight:u})};r.suppressFlushSync?d():F.flushSync(d),null!==l.current&&(i===l.current||i<=0||i===s-u)&&(l.current=null,t(!0),c.current&&(clearTimeout(c.current),c.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||s.current;return n(i||s.current),u({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",u,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",u)}}),[s,u,r,n,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(r){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let i,u,d;n===window?(u=Math.max(oS(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,d=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(u=n[a?"scrollWidth":"scrollHeight"],i=oS(n,a?"width":"height"),d=n[a?"scrollLeft":"scrollTop"]);const f=u-i;if(r.top=Math.ceil(Math.max(Math.min(f,r.top),0)),OS(i,u)||r.top===d)return e({scrollHeight:u,scrollTop:d,viewportHeight:i}),void(o&&t(!0));o?(l.current=r.top,c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{c.current=null,l.current=null,t(!0)}),1e3)):l.current=null,a&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const gD="-webkit-sticky",mD="sticky",bD=nD((()=>{if(typeof document>"u")return mD;const e=document.createElement("div");return e.style.position=gD,e.style.position===gD?gD:mD}));function vD(e){return e}const yD=yC((()=>{const e=gC((e=>`Item ${e}`)),t=gC(null),r=gC((e=>`Group ${e}`)),n=gC({}),o=gC(vD),i=gC("div"),a=gC(q$),s=(e,t=null)=>mC(uC(n,lC((t=>t[e])),aC()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:r,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),xD=yC((([e,t])=>({...e,...t})),Z$(sD,yD)),wD=({height:e})=>t("div",{style:{height:e}}),$D={overflowAnchor:"none",position:bD(),zIndex:1},CD={overflowAnchor:"none"},SD={...CD,display:"inline-block",height:"100%"},DD=o.memo((function({showTopList:e=!1}){const r=HD("listState"),n=WD("sizeRanges"),i=HD("useWindowScroll"),a=HD("customScrollParent"),s=WD("windowScrollContainerState"),l=WD("scrollContainerState"),c=a||i?s:l,u=HD("itemContent"),d=HD("context"),f=HD("groupContent"),h=HD("trackItemSizes"),p=HD("itemSize"),g=HD("log"),m=WD("gap"),b=HD("horizontalDirection"),{callbackRef:v}=EC(n,p,h,e?q$:c,g,m,a,b,HD("skipAnimationFrameInResizeObserver")),[y,x]=o.useState(0);ND("deviation",(e=>{y!==e&&x(e)}));const w=HD("EmptyPlaceholder"),$=HD("ScrollSeekPlaceholder")||wD,C=HD("ListComponent"),S=HD("ItemComponent"),k=HD("GroupComponent"),_=HD("computeItemKey"),O=HD("isSeeking"),E=HD("groupIndices").length>0,T=HD("alignToBottom"),I=HD("initialItemFinalLocationReached"),F=e?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:T?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:T?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...I?{}:{visibility:"hidden"}};return!e&&0===r.totalCount&&w?t(w,{...TD(w,d)}):t(C,{...TD(C,d),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:F,children:(e?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=_(t+r.firstItemIndex,e.data,d);return O?D($,{...TD($,d),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?D(k,{...TD(k,d),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:$D},f(e.index,d)):D(S,{...TD(S,d),...ID(S,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:b?SD:CD},E?u(e.index,e.groupIndex,e.data,d):u(e.index,e.data,d))}))})})),kD={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},_D={outline:"none",overflowX:"auto",position:"relative"},OD=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),ED={position:bD(),top:0,width:"100%",zIndex:1};function TD(e,t){if("string"!=typeof e)return{context:t}}function ID(e,t){return{item:"string"==typeof e?void 0:t}}const FD=o.memo((function(){const e=HD("HeaderComponent"),r=WD("headerHeight"),n=HD("HeaderFooterTag"),i=_C(o.useMemo((()=>e=>{r(oS(e,"height"))}),[r]),!0,HD("skipAnimationFrameInResizeObserver")),a=HD("context");return e?t(n,{ref:i,children:t(e,{...TD(e,a)})}):null})),MD=o.memo((function(){const e=HD("FooterComponent"),r=WD("footerHeight"),n=HD("HeaderFooterTag"),i=_C(o.useMemo((()=>e=>{r(oS(e,"height"))}),[r]),!0,HD("skipAnimationFrameInResizeObserver")),a=HD("context");return e?t(n,{ref:i,children:t(e,{...TD(e,a)})}):null}));function AD({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("scrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),u=r("scrollerRef"),d=r("context"),f=r("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:p,scrollToCallback:g}=pD(s,c,l,u,void 0,f);return e("scrollTo",g),e("scrollBy",h),t(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...f?_D:kD,...i},tabIndex:0,...a,...TD(l,d),children:o})}))}function jD({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("windowScrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),u=r("totalListHeight"),d=r("deviation"),f=r("customScrollParent"),h=r("context"),{scrollByCallback:p,scrollerRef:g,scrollToCallback:m}=pD(s,c,l,q$,f);return hD((()=>(g.current=f||window,()=>{g.current=null})),[g,f]),e("windowScrollTo",m),e("scrollBy",p),t(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==u?{height:u+d}:{}},...a,...TD(l,h),children:o})}))}const RD=({children:e})=>{const r=o.useContext(dD),n=WD("viewportHeight"),i=WD("fixedItemHeight"),a=HD("alignToBottom"),s=HD("horizontalDirection"),l=_C(o.useMemo((()=>V$(n,(e=>oS(e,s?"width":"height")))),[n,s]),!0,HD("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),t("div",{"data-viewport-type":"element",ref:l,style:OD(a),children:e})},zD=({children:e})=>{const r=o.useContext(dD),n=WD("windowViewportRect"),i=WD("fixedItemHeight"),a=HD("customScrollParent"),s=IC(n,a,HD("skipAnimationFrameInResizeObserver")),l=HD("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),t("div",{"data-viewport-type":"window",ref:s,style:OD(l),children:e})},BD=({children:e})=>{const r=HD("TopItemListComponent")||"div",n=HD("headerHeight"),o={...ED,marginTop:`${n}px`},i=HD("context");return t(r,{style:o,...TD(r,i),children:e})},PD=o.memo((function(r){const n=HD("useWindowScroll"),o=HD("topItemsIndexes").length>0,i=HD("customScrollParent"),a=HD("context"),s=i||n?YD:VD,l=i||n?zD:RD;return e(s,{...r,...TD(s,a),children:[o&&t(BD,{children:t(DD,{showTopList:!0})}),e(l,{children:[t(FD,{}),t(DD,{}),t(MD,{})]})]})})),{Component:LD,useEmitter:ND,useEmitterValue:HD,usePublisher:WD}=uD(xD,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},PD),VD=AD({useEmitter:ND,useEmitterValue:HD,usePublisher:WD}),YD=jD({useEmitter:ND,useEmitterValue:HD,usePublisher:WD}),UD=LD,KD={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},qD={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:GD,floor:QD,max:ZD,min:XD,round:JD}=Math;function ek(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function tk(e,t){return e&&e.width===t.width&&e.height===t.height}function rk(e,t){return e&&e.column===t.column&&e.row===t.row}const nk=yC((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:u,viewportHeight:d},f,h,{didMount:p,propsReady:g},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=gC(0),C=gC(0),S=gC(KD),D=gC({height:0,width:0}),k=gC({height:0,width:0}),_=bC(),O=bC(),E=gC(0),T=gC(null),I=gC({column:0,row:0}),F=bC(),M=bC(),A=gC(!1),j=gC(0),R=gC(!0),z=gC(!1),B=gC(!1);X$(uC(p,pC(j),sC((([e,t])=>!!t))),(()=>{J$(R,!1)})),X$(uC(wC(p,R,k,D,j,z),sC((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{J$(z,!0),DS(1,(()=>{J$(_,e)})),nC(uC(c),(()=>{J$(t,[0,0]),J$(R,!0)}))})),rC(uC(M,sC((e=>null!=e&&e.scrollTop>0)),cC(0)),C),X$(uC(p,pC(M),sC((([,e])=>null!=e))),(([,e])=>{e&&(J$(D,e.viewport),J$(k,e.item),J$(I,e.gap),e.scrollTop>0&&(J$(A,!0),nC(uC(c,fC(1)),(e=>{J$(A,!1)})),J$(l,{top:e.scrollTop})))})),rC(uC(D,lC((({height:e})=>e))),d),rC(uC(wC($C(D,tk),$C(k,tk),$C(I,((e,t)=>e&&e.column===t.column&&e.row===t.row)),$C(c)),lC((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),F),rC(uC(wC($C($),n,$C(I,rk),$C(k,tk),$C(D,tk),$C(T),$C(C),$C(A),$C(R),$C(j)),sC((([,,,,,,,e])=>!e)),lC((([e,[t,r],n,o,i,a,s,,l,c])=>{const{column:u,row:d}=n,{height:f,width:h}=o,{width:p}=i;if(0===s&&(0===e||0===p))return KD;if(0===h){const t=kS(c,e);return function(e){return{...qD,items:e}}(ek(t,t+Math.max(s-1,0),a))}const g=ok(p,h,u);let m,b;l?0===t&&0===r&&s>0?(m=0,b=s-1):(m=g*QD((t+d)/(f+d)),b=g*GD((r+d)/(f+d))-1,b=XD(e-1,ZD(b,g-1)),m=XD(b,ZD(0,m))):(m=0,b=-1);const v=ek(m,b,a),{bottom:y,top:x}=ik(i,n,o,v),w=GD(e/g);return{bottom:y,itemHeight:f,items:v,itemWidth:h,offsetBottom:w*f+(w-1)*d-y,offsetTop:x,top:x}}))),S),rC(uC(T,sC((e=>null!==e)),lC((e=>e.length))),$),rC(uC(wC(D,k,S,I),sC((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),lC((([e,t,{items:r},n])=>{const{bottom:o,top:i}=ik(e,n,t,r);return[i,o]})),aC(eS)),t);const P=gC(!1);rC(uC(c,pC(P),lC((([e,t])=>t||0!==e))),P);const L=vC(uC(wC(S,$),sC((([{items:e}])=>e.length>0)),pC(P),sC((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),lC((([[,e]])=>e-1)),aC())),N=vC(uC($C(S),sC((({items:e})=>e.length>0&&0===e[0].index)),cC(0),aC())),H=vC(uC($C(S),pC(A),sC((([{items:e},t])=>e.length>0&&!t)),lC((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),aC(JC),hC(0)));rC(H,h.scrollSeekRangeChanged),rC(uC(_,pC(D,k,$,I),lC((([e,t,r,n,o])=>{const i=CS(e),{align:a,behavior:s,offset:l}=i;let c=i.index;"LAST"===c&&(c=n-1),c=ZD(0,c,XD(n-1,c));let u=ak(t,o,r,c);return"end"===a?u=JD(u-t.height+r.height):"center"===a&&(u=JD(u-t.height/2+r.height/2)),l&&(u+=l),{behavior:s,top:u}}))),l);const W=mC(uC(S,lC((e=>e.offsetBottom+e.bottom))),0);return rC(uC(x,lC((e=>({height:e.visibleHeight,width:e.visibleWidth})))),D),{customScrollParent:m,data:T,deviation:E,footerHeight:o,gap:I,headerHeight:i,increaseViewportBy:e,initialItemCount:C,itemDimensions:k,overscan:r,restoreStateFrom:M,scrollBy:a,scrollContainerState:s,scrollHeight:O,scrollTo:l,scrollToIndex:_,scrollTop:c,smoothScrollTargetReached:u,totalCount:$,useWindowScroll:b,viewportDimensions:D,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...h,gridState:S,horizontalDirection:B,initialTopMostItemIndex:j,totalListHeight:W,...f,endReached:L,propsReady:g,rangeChanged:H,startReached:N,stateChanged:F,stateRestoreInProgress:A,...w}}),Z$(BS,FC,FS,XS,wS,JS,kC));function ok(e,t,r){return ZD(1,QD((e+r)/(QD(t)+r)))}function ik(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=ak(e,t,r,n[0].index);return{bottom:ak(e,t,r,n[n.length-1].index)+o,top:i}}function ak(e,t,r,n){const o=ok(e.width,r.width,t.column),i=QD(n/o),a=i*r.height+ZD(0,i-1)*t.row;return a>0?a+t.row:a}const sk=yC((()=>{const e=gC((e=>`Item ${e}`)),t=gC({}),r=gC(null),n=gC("virtuoso-grid-item"),o=gC("virtuoso-grid-list"),i=gC(vD),a=gC("div"),s=gC(q$),l=(e,r=null)=>mC(uC(t,lC((t=>t[e])),aC()),r),c=gC(!1),u=gC(!1);return rC($C(u),c),{components:t,computeItemKey:i,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:u,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),lk=yC((([e,t])=>({...e,...t})),Z$(nk,sk)),ck=o.memo((function(){const e=bk("gridState"),r=bk("listClassName"),n=bk("itemClassName"),i=bk("itemContent"),a=bk("computeItemKey"),s=bk("isSeeking"),l=vk("scrollHeight"),c=bk("ItemComponent"),u=bk("ListComponent"),d=bk("ScrollSeekPlaceholder"),f=bk("context"),h=vk("itemDimensions"),p=vk("gap"),g=bk("log"),m=bk("stateRestoreInProgress"),b=vk("reportReadyState"),v=_C(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();h({height:e,width:t})}p({column:wk("column-gap",getComputedStyle(e).columnGap,g),row:wk("row-gap",getComputedStyle(e).rowGap,g)})}),[l,h,p,g]),!0,!1);return hD((()=>{e.itemHeight>0&&e.itemWidth>0&&b(!0)}),[e]),m?null:t(u,{className:r,ref:v,...TD(u,f),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((r=>{const o=a(r.index,r.data,f);return s?t(d,{...TD(d,f),height:e.itemHeight,index:r.index,width:e.itemWidth},o):D(c,{...TD(c,f),className:n,"data-index":r.index,key:o},i(r.index,r.data,f))}))})})),uk=o.memo((function(){const e=bk("HeaderComponent"),r=vk("headerHeight"),n=bk("headerFooterTag"),i=_C(o.useMemo((()=>e=>{r(oS(e,"height"))}),[r]),!0,!1),a=bk("context");return e?t(n,{ref:i,children:t(e,{...TD(e,a)})}):null})),dk=o.memo((function(){const e=bk("FooterComponent"),r=vk("footerHeight"),n=bk("headerFooterTag"),i=_C(o.useMemo((()=>e=>{r(oS(e,"height"))}),[r]),!0,!1),a=bk("context");return e?t(n,{ref:i,children:t(e,{...TD(e,a)})}):null})),fk=({children:e})=>{const r=o.useContext(fD),n=vk("itemDimensions"),i=vk("viewportDimensions"),a=_C(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),t("div",{ref:a,style:OD(!1),children:e})},hk=({children:e})=>{const r=o.useContext(fD),n=vk("windowViewportRect"),i=vk("itemDimensions"),a=bk("customScrollParent"),s=IC(n,a,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),t("div",{ref:s,style:OD(!1),children:e})},pk=o.memo((function({...r}){const n=bk("useWindowScroll"),o=bk("customScrollParent"),i=o||n?xk:yk,a=o||n?hk:fk,s=bk("context");return t(i,{...r,...TD(i,s),children:e(a,{children:[t(uk,{}),t(ck,{}),t(dk,{})]})})})),{Component:gk,useEmitter:mk,useEmitterValue:bk,usePublisher:vk}=uD(lk,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},pk),yk=AD({useEmitter:mk,useEmitterValue:bk,usePublisher:vk}),xk=jD({useEmitter:mk,useEmitterValue:bk,usePublisher:vk});function wk(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,SC.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const $k=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Ck=({children:e})=>{const[r,n]=g(-1);return t($k.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:e})},Sk=_.div`
    overflow: hidden;
    border: ${Mi["width-010"]} ${Mi.solid} ${Ti.border};
    border-radius: ${ji.sm};
    background: ${Ti.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?Ii["body-md-regular"]:Ii["body-baseline-regular"]}

    ${zi.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Ri["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${zi.MaxWidth.xs} {
        width: calc(100vw - ${Ri["xs-margin"]} * 2);
    }

    ${zi.MaxWidth.xxs} {
        width: calc(100vw - ${Ri["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Ti["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,Dk=_.div`
    background: transparent;
    padding: ${Ai["spacing-8"]};
`,kk=_.ul`
    list-style-type: none;
`,_k=_.li`
    display: flex;
    align-items: flex-start;
    gap: ${Ai["spacing-8"]};
    padding: ${Ai["spacing-12"]} ${Ai["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$disabled?O`
                cursor: not-allowed;
            `:e.$active&&e.$selected?O`
                background: ${Ti["bg-hover"]};
            `:e.$active?O`
                background: ${Ti["bg-hover-subtle"]};
            `:void 0}
`,Ok=_($e)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Ti["icon-selected"]};
`,Ek=_.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,Tk=_(we)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ti["icon-selected"]};
`,Ik=_(ye)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ti["icon-primary-subtlest"]};
`,Fk=_(xe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ti["icon-disabled-subtle"]};
`,Mk=_.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Ak=_(Ff)`
    cursor: pointer;
    overflow: hidden;
    color: ${Ti["text-primary"]};
    font-size: inherit;
`,jk=_(Ak)`
    ${Ii["body-baseline-semibold"]}
`,Rk=_(Ak)`
    ${Ii["body-md-semibold"]}
    padding: ${Ai["spacing-8"]} ${Ai["spacing-8"]};
`,zk=_.div`
    width: 100%;
    display: flex;
    padding: ${Ai["spacing-12"]} ${Ai["spacing-16"]};
    align-items: center;
`,Bk=_(pe)`
    margin-right: ${Ai["spacing-4"]};
    color: ${Ti["icon-error"]};
    height: 1em;
    width: 1em;
`,Pk=_(fd)`
    margin-right: ${Ai["spacing-8"]};
    color: ${Ti.icon};
`,Lk=_.div`
    ${hu()}
    color: ${Ti["text-subtle"]};
    padding: 0 ${Ai["spacing-16"]} ${Ai["spacing-12"]}
        ${Ai["spacing-16"]};
`,Nk=_.div`
    background: ${Ti["bg-strong"]};
    border-radius: ${ji.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Ii["body-md-regular"]:Ii["body-baseline-regular"]}
`,Hk=_.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Ai["spacing-8"]};
    padding: ${e=>"small"===e.$variant?O`
                  ${Ai["spacing-8"]} ${Ai["spacing-16"]}
              `:O`10px ${Ai["spacing-16"]}`};
`,Wk=_(If)`
    flex: 1;
`,Vk=_(ge)`
    color: ${Ti.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,Yk=_(cu)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Ai["spacing-8"]};
    margin-left: -${Ai["spacing-8"]};
    color: ${Ti.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Uk=d(((r,n)=>{var{value:o,variant:i,onClear:a}=r,s=ct(r,["value","variant","onClear"]);return e(Nk,{$variant:i,children:[e(Hk,{$variant:i,children:[t(Vk,{"aria-hidden":!0}),t(Wk,Object.assign({ref:n,value:o,$variant:i},s))]}),o&&t(Yk,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:t(te,{"aria-hidden":!0})})]})})),Kk=({listItems:n,multiSelect:o,maxSelectable:i,selectedItems:a,disableItemFocus:l,itemsLoadState:d="success",itemTruncationType:f="end",itemMaxLines:h=2,labelDisplayType:p="inline",variant:m="default",listboxId:v,width:y,topScrollItem:x,onSelectItem:w,onSelectAll:$,onDismiss:C,onRetry:S,valueExtractor:D,listExtractor:k,renderListItem:_,renderCustomCallToAction:O,enableSearch:E,hideNoResultsDisplay:T,noResultsDescription:I,searchPlaceholder:F="Search",searchFunction:M,onSearch:A})=>{const{focusedIndex:j,setFocusedIndex:R}=b($k),[z,B]=g(""),[P,L]=g(null!=n?n:[]),N=Gc(d),H=Kc(),W=s(null),V=s(null),Y=s([]),U=s(null),K=s(null),q=!!i&&!!a&&(null==a?void 0:a.length)===i,G=e=>{const t=k?k(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},Q=u((e=>!!Vb(a,(t=>Ub(t,e)))),[a]),Z=Yc((()=>null==M?void 0:M(z))),X=Yc((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=G(e),n=z.trim().toLowerCase();return t.includes(n)||r&&r.includes(n)})))),J=(e,t)=>{q&&!Q(e)||(R(t),null==w||w(e,(e=>D?D(e):e)(e)))},ee=e=>{const t=e.target.value;B(t),null==A||A()},te=()=>{var e;B(""),null===(e=U.current)||void 0===e||e.focus(),null==A||A()},re=()=>{null==S||S()};Uc("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),j<P.length-1){const e=j+1;null===(t=Y.current[e])||void 0===t||t.focus(),R(e)}break;case"ArrowUp":if(e.preventDefault(),j>0){const e=j-1;null===(r=Y.current[e])||void 0===r||r.focus(),R(e)}else 0===j&&U.current&&(U.current.focus(),R(-1));break;case"Space":case"Enter":document.activeElement===Y.current[j]&&(e.preventDefault(),P[j]&&J(P[j],j))}})),c((()=>{var e;if(!x)return void(null===(e=K.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(x);K.current&&-1!==e&&(K.current.scrollToIndex({index:e}),R(e))}),0);return()=>clearTimeout(t)}),[Y,n,R,x]),c((()=>{var e,t,r;if(H)return;if(l||!n)return;const o=n.findIndex((e=>Q(e)));U.current?(R(-1),setTimeout((()=>{var e;return null===(e=U.current)||void 0===e?void 0:e.focus()}),200)):j>0?(null===(e=K.current)||void 0===e||e.scrollToIndex({index:j,align:"center"}),setTimeout((()=>{var e;return null===(e=Y.current[j])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=K.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),R(o),setTimeout((()=>{var e;return null===(e=Y.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=K.current)||void 0===r||r.scrollToIndex({index:0}),R(0),setTimeout((()=>{var e;return null===(e=Y.current[0])||void 0===e?void 0:e.focus()}),200))}),[Q,l,j,n,H,R]),c((()=>{H&&N&&(l||"success"===d&&U.current&&(R(-1),U.current.focus()))}),[H,N,d,R,l]),c((()=>{var e;L(null!==(e=""===z?n:M?Z():X())&&void 0!==e?e:[])}),[Z,X,n,M,z]);const ne=e=>o?t(q&&!e?Fk:e?Tk:Ik,{"aria-hidden":!0}):e?t(Ok,{"aria-hidden":!0}):t(Ek,{}),oe=(e,r)=>{const{title:n,secondaryLabel:o}=G(e);return t(N$,{displayType:p,label:n,maxLines:h,selected:r,disabled:!r&&q,sublabel:o,truncationType:f,variant:m})},ie=(n,i)=>{if(!S||"success"===d){const a=Q(n),s=i===j;return t(_k,{"aria-selected":a,"aria-multiselectable":o,"aria-disabled":!a&&q,"data-testid":"list-item",onClick:()=>J(n,i),onMouseEnter:()=>(e=>{R(e)})(i),ref:e=>{Y.current[i]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,$disabled:!a&&q,children:_?_(n,{selected:a}):e(r,{children:[ne(a),oe(n,a)]})},((e,t)=>`item_${t}__${D?D(e):e}`)(n,i))}},ae=()=>{if(a&&o&&P.length>0&&!z&&"success"===d)return t(Mk,{children:t(Rk,{onClick:$,type:"button",$variant:m,children:i||0!==a.length?"Clear all":"Select all"})})},se=()=>{if(!T&&(z||!E)&&0===P.length&&"success"===d)return e(r,{children:[e(zk,{"data-testid":"list-no-results",children:[t(Bk,{"data-testid":"no-result-icon"}),"No results found."]}),I&&t(Lk,{"data-testid":"no-result-desc",children:I})]})},le=()=>{if(S&&"loading"===d)return e(zk,{"data-testid":"list-loading",children:[t(Pk,{}),"Loading..."]})},ce=()=>{if(S&&"fail"===d)return e(zk,{"data-testid":"list-fail",children:[t(Bk,{"data-testid":"load-error-icon"}),"Failed to load. ",t(jk,{onClick:re,type:"button",$variant:m,children:"Try again."})]})},ue=()=>{var e;const r="test"===process.env.NODE_ENV;return t(kk,{role:"listbox",id:v,children:t(UD,Object.assign({ref:K,style:{height:"100%"},data:P,customScrollParent:null!==(e=W.current)&&void 0!==e?e:void 0,itemContent:(e,t)=>ie(t,e)},r?{initialItemCount:P.length}:{}),r?P.length:void 0)})};return e(Sk,{"data-testid":"dropdown-container",ref:W,$width:y,$variant:m,children:[e(Dk,{ref:V,"data-testid":"dropdown-list",children:[(()=>{if((E||M)&&"success"===d)return t(Uk,{ref:U,onChange:ee,value:z,placeholder:F,"data-testid":"search-input","aria-label":"Enter text to search",onClear:te,variant:m})})(),ae(),se(),le(),ce(),ue()]}),(()=>{if(O)return t("div",{"data-testid":"custom-cta",children:O(C,P)})})()]})},qk=_(Ff)`
    display: flex;
    align-items: center;
    gap: ${Ai["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${Ai["spacing-16"]};

    ${e=>"small"===e.$variant?Ii["body-md-regular"]:Ii["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,Gk=_.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Fi["duration-250"]} ${Fi["ease-default"]};

    svg {
        color: ${Ti.icon};
        height: 1em;
        width: 1em;
    }
`,Qk=d((({children:r,disabled:n,expanded:o,listboxId:i,popupRole:a,readOnly:s,variant:l},c)=>e(qk,{ref:c,type:"button","aria-expanded":o,"aria-haspopup":a,"data-testid":"selector",disabled:n,"aria-controls":i,$variant:l,children:[r,!s&&t(Gk,{$expanded:o,$variant:l,children:t(re,{"aria-hidden":!0})})]})));var Zk=Symbol.for("immer-nothing"),Xk=Symbol.for("immer-draftable"),Jk=Symbol.for("immer-state"),e_="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function t_(e,...t){if("production"!==process.env.NODE_ENV){const r=e_[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var r_=Object.getPrototypeOf;function n_(e){return!!e&&!!e[Jk]}function o_(e){return!!e&&(a_(e)||Array.isArray(e)||!!e[Xk]||!!e.constructor?.[Xk]||d_(e)||f_(e))}var i_=Object.prototype.constructor.toString();function a_(e){if(!e||"object"!=typeof e)return!1;const t=r_(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===i_}function s_(e,t){0===l_(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function l_(e){const t=e[Jk];return t?t.type_:Array.isArray(e)?1:d_(e)?2:f_(e)?3:0}function c_(e,t){return 2===l_(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function u_(e,t,r){const n=l_(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function d_(e){return e instanceof Map}function f_(e){return e instanceof Set}function h_(e){return e.copy_||e.base_}function p_(e,t){if(d_(e))return new Map(e);if(f_(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=a_(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[Jk];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(r_(e),t)}{const t=r_(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function g_(e,t=!1){return b_(e)||n_(e)||!o_(e)||(l_(e)>1&&(e.set=e.add=e.clear=e.delete=m_),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>g_(t,!0)))),e}function m_(){t_(2)}function b_(e){return Object.isFrozen(e)}var v_,y_={};function x_(e){const t=y_[e];return t||t_(0,e),t}function w_(){return v_}function $_(e,t){t&&(x_("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function C_(e){S_(e),e.drafts_.forEach(k_),e.drafts_=null}function S_(e){e===v_&&(v_=e.parent_)}function D_(e){return v_={drafts_:[],parent_:v_,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function k_(e){const t=e[Jk];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function __(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[Jk].modified_&&(C_(t),t_(4)),o_(e)&&(e=O_(t,e),t.parent_||T_(t,e)),t.patches_&&x_("Patches").generateReplacementPatches_(r[Jk].base_,e,t.patches_,t.inversePatches_)):e=O_(t,r,[]),C_(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Zk?e:void 0}function O_(e,t,r){if(b_(t))return t;const n=t[Jk];if(!n)return s_(t,((o,i)=>E_(e,n,t,o,i,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return T_(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),s_(o,((o,a)=>E_(e,n,t,o,a,r,i))),T_(e,t,!1),r&&e.patches_&&x_("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function E_(e,t,r,n,o,i,a){if("production"!==process.env.NODE_ENV&&o===r&&t_(5),n_(o)){const a=O_(e,o,i&&t&&3!==t.type_&&!c_(t.assigned_,n)?i.concat(n):void 0);if(u_(r,n,a),!n_(a))return;e.canAutoFreeze_=!1}else a&&r.add(o);if(o_(o)&&!b_(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;O_(e,o),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||T_(e,o)}}function T_(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&g_(t,r)}var I_={get(e,t){if(t===Jk)return e;const r=h_(e);if(!c_(r,t))return function(e,t,r){const n=A_(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!o_(n)?n:n===M_(e.base_,t)?(R_(e),e.copy_[t]=z_(n,e)):n},has:(e,t)=>t in h_(e),ownKeys:e=>Reflect.ownKeys(h_(e)),set(e,t,r){const n=A_(h_(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=M_(h_(e),t),o=n?.[Jk];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||c_(e.base_,t)))return!0;R_(e),j_(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==M_(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,R_(e),j_(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=h_(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){t_(11)},getPrototypeOf:e=>r_(e.base_),setPrototypeOf(){t_(12)}},F_={};function M_(e,t){const r=e[Jk];return(r?h_(r):e)[t]}function A_(e,t){if(!(t in e))return;let r=r_(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=r_(r)}}function j_(e){e.modified_||(e.modified_=!0,e.parent_&&j_(e.parent_))}function R_(e){e.copy_||(e.copy_=p_(e.base_,e.scope_.immer_.useStrictShallowCopy_))}s_(I_,((e,t)=>{F_[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),F_.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&t_(13),F_.set.call(this,e,t,void 0)},F_.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&t_(14),I_.set.call(this,e[0],t,r,e[0])};function z_(e,t){const r=d_(e)?x_("MapSet").proxyMap_(e,t):f_(e)?x_("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:w_(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=I_;r&&(o=[n],i=F_);const{revoke:a,proxy:s}=Proxy.revocable(o,i);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:w_()).drafts_.push(r),r}function B_(e){if(!o_(e)||b_(e))return e;const t=e[Jk];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=p_(e,t.scope_.immer_.useStrictShallowCopy_)}else r=p_(e,!0);return s_(r,((e,t)=>{u_(r,e,B_(t))})),t&&(t.finalized_=!1),r}var P_=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...o){return n.produce(e,(e=>t.call(this,e,...o)))}}let n;if("function"!=typeof t&&t_(6),void 0!==r&&"function"!=typeof r&&t_(7),o_(e)){const o=D_(this),i=z_(e,void 0);let a=!0;try{n=t(i),a=!1}finally{a?C_(o):S_(o)}return $_(o,r),__(n,o)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===Zk&&(n=void 0),this.autoFreeze_&&g_(n,!0),r){const t=[],o=[];x_("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}t_(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const o=this.produce(e,t,((e,t)=>{r=e,n=t}));return[o,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){o_(e)||t_(8),n_(e)&&(e=function(e){n_(e)||t_(10,e);return B_(e)}(e));const t=D_(this),r=z_(e,void 0);return r[Jk].isManual_=!0,S_(t),r}finishDraft(e,t){const r=e&&e[Jk];r&&r.isManual_||t_(9);const{scope_:n}=r;return $_(n,t),__(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=x_("Patches").applyPatches_;return n_(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},L_=P_.produce;P_.produceWithPatches.bind(P_),P_.setAutoFreeze.bind(P_),P_.setUseStrictShallowCopy.bind(P_),P_.applyPatches.bind(P_),P_.createDraft.bind(P_),P_.finishDraft.bind(P_);var N_=Pg,H_=bm,W_=ag,V_=hr,Y_=Hg,U_=cg,K_=Ag,q_=Sg,G_=Object.prototype.hasOwnProperty;var Q_=function(e){if(null==e)return!0;if(Y_(e)&&(V_(e)||"string"==typeof e||"function"==typeof e.splice||U_(e)||q_(e)||W_(e)))return!e.length;var t=H_(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(K_(e))return!N_(e).length;for(var r in e)if(G_.call(e,r))return!1;return!0},Z_=Re(Q_);const X_=(e,t,r)=>{const n=L_(e,(e=>{for(let n=e.length-1;n>=0;n--){const o=e[n],i=eO(o.keyPath);if(o.checked=t.has(i),o.hasSubItems&&r&&!0!==o.checked){const t=o.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?o.checked=!0:n&&(o.checked="mixed")}}}));return n},J_=(e,t)=>{const[r,...n]=t;if(Z_(e)||Z_(r))return;const o=e.find((e=>e.key===r));return o&&n.length?J_(o.subItems,n):o},eO=e=>e.join(","),tO=e=>new Set(e.map((e=>e.join(",")))),rO=_.li`
    display: ${e=>e.$visible?"flex":"none"};
`,nO=_.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Ai["spacing-8"]};
    padding: ${Ai["spacing-12"]} ${Ai["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&O`
            background: ${Ti["bg-hover"]};
        `}
`,oO=_.div`
    height: 1px;
    width: calc((1lh + ${Ai["spacing-8"]}) * ${e=>e.$level});
`,iO=_.div`
    width: 1lh;
    height: 1lh;
    color: ${Ti["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Fi["duration-350"]}
            ${Fi["ease-standard"]};

        ${e=>{if(e.$expanded)return O`
                    transform: rotate(90deg);
                `}}
    }
`,aO=_.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Ai["spacing-8"]};
`,sO=_.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Ai["spacing-16"]};

    display: flex;
    justify-content: center;
`,lO=_(Se)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ti["icon-selected"]};
`,cO=({listItems:n,multiSelect:o=!1,selectedKeyPaths:i,itemsLoadState:l="success",itemTruncationType:u="end",itemMaxLines:d=2,variant:f="default",listboxId:h,width:p,mode:m="default",selectableCategory:b,onSelectItem:v,onSelectAll:y,onRetry:x,enableSearch:w,hideNoResultsDisplay:$,noResultsDescription:C,searchPlaceholder:S="Search",onSearch:D})=>{const k=o||b,[_,O]=g(""),E=_.toLowerCase().trim(),[T,I]=g(!1),F=s(null),M=s(null),A=s([]),j=s(null),R=Kc(),[z,B]=g([]),[P,L]=g([]),N=T?P:z,H=a((()=>{let e=0;for(const t of z)t.level>e&&(e=t.level);return e}),[z]),[W,V]=g(0),[Y,U]=g([]),[K,q]=g(0),G=e=>{const t=e.target.value;O(t),""===t?I(!1):t.trim().length>=3&&I(!0),null==D||D()},Q=()=>{var e;O(""),I(!1),null===(e=j.current)||void 0===e||e.focus(),null==D||D()},Z=()=>{null==x||x()},X=()=>{if(0===i.size){const e=[],t=[];z.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==y||y(e,t)}else null==y||y([],[])},J=Yc(((e,t)=>((e,t,r,n,o)=>{const i=[],a=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((u,d)=>{var f,h;const p=s?s.level+1:0,g=s?[...s.keyPath,u.key]:[u.key],m=eO(g),b={item:u,index:i.length,indexInParent:d,parentSetSize:e.length,keyPath:g,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||o||(null==s?void 0:s.expanded)||!1,expanded:o,checked:t.has(m),hasSubItems:!!(null===(f=u.subItems)||void 0===f?void 0:f.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!n&&-1!==u.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(l.push(b),i.push(b),null===(h=u.subItems)||void 0===h?void 0:h.length){const e=a(u.subItems,b);if(r&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?b.checked=!0:r&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),i})(e,i,o,E,t))),ee=Yc((e=>{return i.size?(t=J(e,!1),L_(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>L_(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const o=e[t].keyPath.length;if(o>n)n=o;else if(o<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],o=n.keyPath.slice(0,-1),i=e[r].keyPath.slice(0,o.length);Ub(o,i)&&(n.visible=!0)}return e})))(J(e,!1));var t})),te=Yc((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(E))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),re=Yc((()=>{B((e=>X_(e,i,o))),T&&L((e=>X_(e,i,o)))})),ne=(e,t,r)=>{const n=((e,t,r)=>L_(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let o=t+1;o<e.length;o++){const t=e[o],i=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!Ub(n,a))break;t.visible=r&&i.expanded&&i.visible}})))(N,e,t);V(e),q(r),T?L(n):B(n)};Uc("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return e[n]})(N,(e=>e.visible),W+1);r&&(q((e=>e+1)),V(r.index),null===(t=A.current[r.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return e[n]})(N,(e=>e.visible),W-1);t?(q((e=>e-1)),V(t.index),null===(r=A.current[t.index])||void 0===r||r.focus()):0===K&&j.current&&(j.current.focus(),q(-1),V(-1));break}case"ArrowRight":e.preventDefault(),ne(W,!0,K);break;case"ArrowLeft":e.preventDefault(),ne(W,!1,K);break;case"Space":if(document.activeElement===A.current[W]){e.preventDefault();const t=N[W];if(t.hasSubItems&&!k)return;null==v||v(t)}}})),c((()=>{let e=[];"default"===m?e=ee(n):"expand"===m?e=J(n,!0):"collapse"===m&&(e=J(n,!1)),B(e)}),[J,ee,n,m]),c((()=>{U(N.filter((e=>e.visible)))}),[T,N]),c((()=>{re()}),[o,i,re]),c((()=>{if(T&&_.trim().length>=3){const e=te(n),t=(e=>L_(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(J(e,!1));L(t)}}),[te,J,n,T,_]),c((()=>{R||(j.current?(V(-1),q(-1),setTimeout((()=>{var e;return null===(e=j.current)||void 0===e?void 0:e.focus()}),200)):A.current[W]?setTimeout((()=>{var e;return null===(e=A.current[W])||void 0===e?void 0:e.focus()}),200):(V(0),q(0),setTimeout((()=>{var e;return null===(e=A.current[0])||void 0===e?void 0:e.focus()}),200)))}),[W,K,R]);const oe=()=>{if(w&&"success"===l)return t(Uk,{ref:j,onChange:G,value:_,placeholder:S,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Q,variant:f})},ie=()=>{if(o&&!T&&z.length>0&&"success"===l)return t(Mk,{children:t(Rk,{onClick:X,type:"button",$variant:f,children:0===i.size?"Select all":"Clear all"})})},ae=()=>{if(!$&&T&&0===P.length&&"success"===l)return e(r,{children:[e(zk,{"data-testid":"list-no-results",children:[t(Bk,{"data-testid":"no-result-icon"}),"No results found."]}),C&&t(Lk,{"data-testid":"no-result-desc",children:C})]})},se=()=>{if(x&&"loading"===l)return e(zk,{"data-testid":"list-loading",children:[t(Dd,{}),"Loading..."]})},le=()=>{if(x&&"fail"===l)return e(zk,{"data-testid":"list-fail",children:[t(Bk,{"data-testid":"load-error-icon"}),"Failed to load. ",t(jk,{onClick:Z,type:"button",$variant:f,children:"Try again."})]})},ce=e=>{if(o)switch(e.checked){case"mixed":return t(lO,{"aria-hidden":!0});case!0:return t(Tk,{"aria-hidden":!0});default:return t(Ik,{"aria-hidden":!0})}if(!e.hasSubItems)return t(sO,{$hasNestedSiblings:e.hasNestedSiblings||0===e.level,children:e.checked&&t(Ok,{"aria-hidden":!0})})},ue=(r,n)=>{const{level:i,visible:a,expanded:s,keyPath:l,checked:c,hasSubItems:f,indexInParent:h,parentSetSize:p}=r,g=r.index,m=K===n,b=f&&!k;return e(rO,{$visible:a,children:[H>0&&t(oO,{$level:i}),H>0&&!f&&o&&t(aO,{}),e(nO,{"aria-checked":c,"aria-selected":!!c,"aria-expanded":f?s:void 0,"aria-level":i+1,"aria-posinset":h+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?ne(g,!s,n):((e,t)=>{q(t),V(e),null==v||v(N[e])})(g,n)},onMouseEnter:()=>((e,t)=>{V(t.index),q(e)})(n,r),ref:e=>A.current[r.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b,children:[f&&t(iO,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),ne(g,!s,n)},$expanded:s,children:t(Ce,{})}),ce(r),t(N$,{bold:f,searchTerm:T?E:void 0,label:r.item.label,selected:!!c,truncationType:u,maxLines:d})]})]},`[${l.join("---")}]`)},de=()=>{var e;const r="test"===process.env.NODE_ENV;return t("div",{"aria-multiselectable":o,id:h,ref:M,role:"tree",children:t(UD,Object.assign({style:{height:"100%"},customScrollParent:null!==(e=F.current)&&void 0!==e?e:void 0,data:Y,itemContent:(e,t)=>ue(t,e)},r?{initialItemCount:Y.length}:{}),r?Y.length:void 0)})};return t(Sk,{"data-testid":"dropdown-container",ref:F,$width:p,$variant:f,children:e(Dk,{"data-testid":"nested-dropdown-list",children:[oe(),ie(),ae(),se(),le(),de()]})})},uO=({selectedOptions:e,placeholder:r="Select",options:n,disabled:o,error:i,className:a,"data-testid":l,id:u,enableSearch:d=!1,searchFunction:f,searchPlaceholder:h,valueExtractor:p,listExtractor:m,onSelectOptions:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderListItem:C,hideNoResultsDisplay:S,noResultsDescription:D,renderCustomCallToAction:k,onBlur:_,variant:O="default",readOnly:E,alignment:T,dropdownZIndex:I,maxSelectable:F})=>{const[M,A]=g(e||[]),[j,R]=g(!1),[z,B]=g(!1),[P]=g((()=>Wc.generate())),L=s(null),N=s(null);c((()=>{A(e||[])}),[e]);const H=()=>{M&&M.length>0||F?(A([]),q([])):(A(n),q(n))},W=(e,t)=>{const r=[...M],n=Wb(M,(e=>(p?p(e):e)===t));n>-1?r.splice(n,1):r.push(e),A(r),q(r)},V=()=>{j&&(R(!1),K(!1))},Y=()=>{z||j||B(!0)},U=e=>{z&&!j&&L.current&&!L.current.contains(e.relatedTarget)&&(B(!1),null==_||_())},K=e=>{!e&&y&&y(),e&&v&&v()},q=e=>{b&&b(e)};return t(Ck,{children:t(od,{enabled:!E&&!o,isOpen:j,renderElement:()=>t(Ef,{className:a,"data-testid":l,id:u,ref:L,tabIndex:-1,onFocus:Y,onBlur:U,$focused:z,$disabled:o,$readOnly:E,$error:i,children:t(Qk,{ref:N,disabled:o,expanded:j,listboxId:P,popupRole:"listbox",readOnly:E,variant:O,children:t(Xu,{$disabled:o,children:M&&0!==M.length?t(Ju,{$variant:O,children:n&&M.length===n.length?"All selected":`${M.length} selected`}):t(ed,{truncateType:$,$variant:O,children:r})})})}),renderDropdown:({elementWidth:e})=>t(Kk,{listboxId:P,listItems:n,onSelectItem:W,onDismiss:V,valueExtractor:p,listExtractor:m,enableSearch:d,searchFunction:f,searchPlaceholder:h,multiSelect:!0,maxSelectable:F,selectedItems:M,onSelectAll:H,onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:C,hideNoResultsDisplay:S,noResultsDescription:D,renderCustomCallToAction:k,variant:O,width:e}),onOpen:()=>{R(!0),K(!0),B(!0)},onClose:e=>{R(!1),K(!1),"click"!==e&&(B(!1),null==_||_())},onDismiss:()=>{var e;null===(e=N.current)||void 0===e||e.focus(),R(!1),K(!1)},clickToToggle:!0,offset:8,alignment:T,fitAvailableHeight:!0,customZIndex:I})})},dO=(e,t)=>{const[r,...n]=t;if(Z_(e)||!r)return;const o=e.find((e=>e.key===r));return o?n.length?dO(o.subItems,n):o:void 0},fO=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...fO(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},hO=({placeholder:e="Select",options:r,disabled:n,error:o,className:i,"data-testid":a,id:l,selectedKeyPaths:u,mode:d,valueToStringFunction:f,enableSearch:h,searchPlaceholder:p,hideNoResultsDisplay:m,noResultsDescription:b,readOnly:v,onSearch:y,onSelectOptions:x,onShowOptions:w,onHideOptions:$,onRetry:C,onBlur:S,optionsLoadState:D="success",optionTruncationType:k="end",variant:_="default",alignment:O,dropdownZIndex:E})=>{const T=r,[I,F]=g(u?tO(u):new Set),[M,A]=g([]),[j,R]=g(!1),[z,B]=g(!1),[P]=g((()=>Wc.generate())),L=s(null),N=s(null),H=s(null);c((()=>{const e=u||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const o=t[n],i=dO(e,o);i&&r.push({value:i.value,label:i.label,keyPath:o})}return r})(T,e);F(tO(e)),A(t)}),[u,T]);const W=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));F(tO(e)),A(r),Q(e,r)},V=e=>{const t=Z(e),r=t.map((e=>e.keyPath));A(t),F(tO(r)),Q(r,t)},Y=()=>{z||j||B(!0)},U=e=>{z&&!j&&L.current&&!L.current.contains(e.relatedTarget)&&(B(!1),null==S||S())},K=()=>{if(M.length>1)return`${M.length} selected`;const{label:e,value:t}=M[0];return f?f(t):e},q=e=>{if("middle"===k){let t=0;return H&&H.current&&(t=H.current.getBoundingClientRect().width),Vc.truncateOneLine(e,t,120,6)}return e},G=e=>{!e&&$&&$(),e&&w&&w()},Q=(e,t)=>{if(x){const r=t.map((e=>e.value));x(e,r)}},Z=e=>{if(!0===e.checked)return M.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!Ub(e.keyPath,r)}));{const t=[...M],r=e.hasSubItems?((e,t)=>{const r=dO(e,t);return r&&r.subItems?fO(r.subItems,t):[]})(T,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{M.find((t=>Ub(t.keyPath,e.keyPath)))||t.push(e)})),t}};return t(od,{enabled:!v&&!n,isOpen:j,renderElement:()=>t(Ef,{className:i,"data-testid":a,id:l,ref:L,tabIndex:-1,onFocus:Y,onBlur:U,$focused:z,$disabled:n,$readOnly:v,$error:o,children:t(Qk,{ref:N,disabled:n,expanded:j,listboxId:P,popupRole:"tree",readOnly:v,variant:_,children:t(Xu,{ref:H,$disabled:n,children:Z_(M)?t(ed,{truncateType:k,children:e}):t(Ju,{truncateType:k,children:q(K())})})})}),renderDropdown:({elementWidth:e})=>t(cO,{listboxId:P,listItems:T,multiSelect:!0,selectedKeyPaths:I,itemsLoadState:D,itemTruncationType:k,enableSearch:h,searchPlaceholder:p,hideNoResultsDisplay:m,noResultsDescription:b,onSelectItem:V,onSelectAll:W,onRetry:C,onSearch:y,variant:_,mode:d,width:e}),onOpen:()=>{R(!0),G(!0),B(!0)},onClose:e=>{R(!1),G(!1),"click"!==e&&(B(!1),null==S||S())},onDismiss:()=>{var e;null===(e=N.current)||void 0===e||e.focus(),R(!1),G(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:E})},pO=({placeholder:e="Select",options:r,disabled:n,error:o,className:i,"data-testid":a,id:l,selectedKeyPath:u,mode:d,valueToStringFunction:f,enableSearch:h,searchPlaceholder:p,selectableCategory:m,hideNoResultsDisplay:b,noResultsDescription:v,readOnly:y,onBlur:x,onSearch:w,onSelectOption:$,onShowOptions:C,onHideOptions:S,onRetry:D,optionsLoadState:k="success",optionTruncationType:_="end",variant:O="default",alignment:E,dropdownZIndex:T})=>{const I=r,[F,M]=g(u?tO([u]):new Set),[A,j]=g(),[R,z]=g(!1),[B,P]=g(!1),[L]=g((()=>Wc.generate())),N=s(null),H=s(null),W=s(null);c((()=>{M(u?tO([u]):new Set);const e=J_(I,u||[]);j(null!=e?e:void 0)}),[u,I]);const V=e=>{var t;const{keyPath:r,item:{label:n,value:o}}=e;M(tO([r])),j({label:n,value:o}),z(!1),G(!1),null===(t=H.current)||void 0===t||t.focus(),null==$||$(r,o)},Y=()=>{B||R||P(!0)},U=e=>{B&&!R&&N.current&&!N.current.contains(e.relatedTarget)&&(P(!1),null==x||x())},K=()=>{if(!A)return"";const{label:e,value:t}=A;return f?f(t):e},q=e=>{if("middle"===_){let t=0;return W&&W.current&&(t=W.current.getBoundingClientRect().width),Vc.truncateOneLine(e,t,120,6)}return e},G=e=>{!e&&S&&S(),e&&C&&C()};return t(od,{enabled:!y&&!n,isOpen:R,renderElement:()=>t(Ef,{className:i,"data-testid":a,id:l,ref:N,tabIndex:-1,onFocus:Y,onBlur:U,$focused:B,$disabled:n,$readOnly:y,$error:o,children:t(Qk,{ref:H,disabled:n,expanded:R,listboxId:L,popupRole:"tree",readOnly:y,variant:O,children:t(Xu,{ref:W,$disabled:n,children:Z_(A)?t(ed,{truncateType:_,children:e}):t(Ju,{truncateType:_,children:q(K())})})})}),renderDropdown:({elementWidth:e})=>t(cO,{listboxId:L,listItems:I,selectedKeyPaths:F,selectableCategory:m,itemsLoadState:k,itemTruncationType:_,enableSearch:h,searchPlaceholder:p,hideNoResultsDisplay:b,noResultsDescription:v,onSelectItem:V,onRetry:D,onSearch:w,variant:O,mode:d,width:e}),onOpen:()=>{z(!0),G(!0),P(!0)},onClose:e=>{z(!1),G(!1),"click"!==e&&(P(!1),null==x||x())},onDismiss:()=>{var e;null===(e=H.current)||void 0===e||e.focus(),z(!1),G(!1)},clickToToggle:!0,offset:8,alignment:E,fitAvailableHeight:!0,customZIndex:T})};var gO=function(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r};var mO=function(e){return function(t,r,n){for(var o=-1,i=Object(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}},bO=mO(),vO=Ug;var yO=Hg;var xO=function(e,t){return function(r,n){if(null==r)return r;if(!yO(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=Object(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}((function(e,t){return e&&bO(e,t,vO)}));var wO=gO,$O=xO,CO=yb,SO=function(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r},DO=hr;var kO=Re((function(e,t,r){var n=DO(e)?wO:SO,o=arguments.length<3;return n(e,CO(t),r,o,$O)}));const _O=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],OO=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var EO;!function(e){e.getCountries=()=>[].concat(..._O.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:OO("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,o=n.split(" ");o.shift();const i=o.join(" ");return kO(i,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const r=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(EO||(EO={}));const TO=e=>{var{onChange:r,value:n,allowClear:o,onClear:i,onBlur:a,error:l,fixedCountry:u=!1,optionPlaceholder:d="Select",optionSearchPlaceholder:f,enableSearch:h,onHideOptions:p,onShowOptions:m,placeholder:b,autoComplete:v}=e,y=ct(e,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[x]=g(EO.getCountries()),[w,$]=g(void 0),[C,S]=g(""),D=s(null),k=qc({ref:D,formatter:e=>EO.formatNumber(e.replace(/[^0-9]/g,""),w)});c((()=>{const e=x.filter((e=>e.countryCode===IO(null==n?void 0:n.countryCode)))[0];$(e),S(EO.formatNumber(null==n?void 0:n.number,e))}),[n]);const _=e=>{E(C,e),r&&O(C,e)},O=(e,t)=>{const n=EO.formatNumber(e,t);null==r||r({number:n.replace(/[\s()]+/g,""),countryCode:t&&FO(t.countryCode)})},E=(e,t)=>{S(EO.formatNumber(e,t)),$(t)};return t(b$,Object.assign({ref:D,value:C,onChange:()=>{const e=k();if(!e)return;const{nextValue:t,updateCaretPosition:n}=e;n(),E(t,w),r&&O(t,w)},allowClear:o&&!!C,onClear:()=>{i?i():S("")},onBlur:a,error:l,placeholder:b,addon:u?{type:"label",attributes:{value:FO(null==w?void 0:w.countryCode)}}:{type:"list",attributes:{placeholder:d,options:x,selectedOption:w,enableSearch:h,searchPlaceholder:f,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:FO(e.countryCode)}),onSelectOption:_,onHideOptions:p,onShowOptions:m}},inputMode:"numeric",autoComplete:v},y))},IO=e=>e?e.replace("+",""):"",FO=e=>e?e.includes("+")?e:`+${e}`:"";var MO=br,AO=Pr,jO=function(){return MO.Date.now()},RO=Ab,zO=Math.max,BO=Math.min;var PO=Re((function(e,t,r){var n,o,i,a,s,l,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||d&&e-c>=i}function g(){var e=jO();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return d?BO(r,i-(e-c)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=o=void 0,a)}function b(){var e=jO(),r=p(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),u?h(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=RO(t)||0,AO(r)&&(u=!!r.leading,i=(d="maxWait"in r)?zO(RO(r.maxWait)||0,t):i,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:m(jO())},b}));const LO=({className:n,"data-testid":o,selectedOption:i,minimumCharacters:a=3,fetchOptions:l,placeholder:d="Enter here...",readOnly:f=!1,disabled:h=!1,error:p,valueExtractor:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y})=>{const[x,w]=g((()=>i?W(i):"")),[$,C]=g((()=>i?W(i):"")),[S,D]=g([]),[k,_]=g(!0),[O,E]=g(!1),[T,I]=g(!!i),[F,M]=g(i),A=s(l),j=e=>ut(void 0,void 0,void 0,(function*(){E(!1),_(!0);try{const t=yield A.current(e);C(e),D(t),_(!1)}catch(e){E(!0)}})),R=u(PO((e=>j(e)),500,{leading:!1,trailing:!0}),[]);c((()=>{A.current=l}),[l]),c((()=>{x&&x.length>=a&&x!==$?R(x):R.cancel(),""===x&&F&&(y&&y(void 0,void 0),P(),M(void 0)),i&&x!==W(i)&&I(!1)}),[x,i]),c((()=>{w(i?W(i):""),P(i),M(i)}),[i]);const z=e=>{w(e.target.value)},B=(e,t)=>{y&&y(e,t)},P=e=>{C(e?W(e):""),I(!!e),D([]),_(!0)},L=()=>{w(""),y&&y(void 0,void 0),P()},N=()=>{T||F?(P(F),w(W(F)),y&&y(F,V(F)),M(F)):L()},H=()=>!!x&&x.length>=a&&!T,W=e=>e?v?v(e):e.toString():"",V=e=>{if(e)return m?m(e):e},Y=()=>t(ap,{type:"text",value:x,onChange:z,placeholder:d,readOnly:f,disabled:h,allowClear:!0,onClear:L,styleType:"no-border",onBlur:x.length<a?N:void 0});return e(td,{className:n,show:H(),error:p&&!H(),disabled:h,readOnly:f,testId:o,onBlur:N,children:[t(f?r:qu,{children:Y()}),!f&&H()&&t(Zu,{}),t(r$,{listItems:S,onSelectItem:B,valueExtractor:m,listExtractor:b,itemsLoadState:O?"fail":k?"loading":"success",visible:H(),disableItemFocus:!0,onRetry:()=>j(x),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]})},NO=_.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,HO=_(rp)`
    position: absolute;
    right: 0;
    padding-left: ${Ai["spacing-8"]};
    margin-right: 0;
`,WO=_(Ku)`
    // space for clear icon
    padding-right: calc(1.25rem + ${Ai["spacing-16"]});
`,VO=r=>{var{selectedOptions:n,placeholders:o={from:"Select",to:"Select"},options:i,disabled:a,className:l,readOnly:u,error:d,"data-testid":f,id:h,enableSearch:p=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,listStyleWidth:C,onShowOptions:S,onHideOptions:D,onRetry:k,optionsLoadState:_={from:"success",to:"success"},optionTruncationType:O="middle",renderCustomSelectedOption:E,renderListItem:T,renderCustomCallToAction:I}=r,F=ct(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[M,A]=g(),[j,R]=g(),z=s(null),B={from:s(null),to:s(null)},[P,L]=g("none");c((()=>{A(null==n?void 0:n.from),R(null==n?void 0:n.to)}),[n]);const N=e=>t=>{t.stopPropagation(),t.preventDefault(),a||u||L("from"===e?"from":"to"===e&&M?"to":"from")},H=e=>{var t;const r="from"===e?M:j;if(!r)return"";if(w)return w(r);if(v){const e=v(r);return y?y(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""}return r.toString()},W=(e,t)=>{if("middle"===O){let r=0;return B[e]&&B[e].current&&(r=B[e].current.getBoundingClientRect().width),Vc.truncateOneLine(t,r,120,8)}return t},V=e=>{!e&&D&&D(),e&&S&&S()},Y=e=>{const r="from"===e?M:j;return r?E?E(r):t(Ju,{truncateType:O,children:W(e,H(e))}):t(ed,{truncateType:O,children:W(e,o[e]||"")})},U=e=>t(Xu,{onClick:N(e),ref:B[e],$disabled:a,children:Y(e)});return e(td,{show:"none"!==P,error:d&&!("none"!==P),disabled:a,readOnly:u,testId:f,onBlur:()=>{V(!1),L("none"),M&&j||(R(void 0),A(void 0))},className:l,children:[e(NO,{children:[t(WO,Object.assign({type:"button","data-testid":h||"selector",disabled:a,ref:z,onClick:N()},F,{children:e(Gf,{currentActive:(()=>{switch(P){case"from":return"start";case"to":return"end";case"none":return P}})(),children:[U("from"),U("to")]})})),"none"===P&&M&&j&&!u&&!a&&t(HO,{onClick:e=>{e.stopPropagation(),A(void 0),R(void 0),$&&$({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear",children:t(np,{"aria-hidden":!0})})]}),"none"!==P&&t(Zu,{}),(()=>{if("none"===P)return null;const e=i[P];if(e&&e.length>0){const r="from"===P?M:j;return t(r$,{listItems:e,onSelectItem:(e,t)=>((e,t,r)=>{var n;"from"===r?A(e):R(e),V(!1),z&&(null===(n=z.current)||void 0===n||n.focus()),$&&$({[r]:e},t),"from"===r?(R(void 0),L("to"),V(!0)):L("none")})(e,t,P),onDismiss:()=>(()=>{var e;L("none"),V(!1),z&&(null===(e=z.current)||void 0===e||e.focus()),M&&j||(R(void 0),A(void 0))})(),valueExtractor:v,listExtractor:x,listStyleWidth:C,visible:!0,enableSearch:p,searchPlaceholder:b,searchFunction:m,"data-testid":`${P}-dropdown-list`,selectedItems:r?[r]:[],onRetry:k,itemsLoadState:_[P],itemTruncationType:O,renderListItem:T,renderCustomCallToAction:I})}return null})()]})},YO=({selectedOption:e,placeholder:r="Select",options:n,disabled:o,error:i,className:a,"data-testid":l,id:u,enableSearch:d=!1,searchFunction:f,searchPlaceholder:h,valueExtractor:p,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:C="success",optionTruncationType:S="end",renderCustomSelectedOption:D,renderListItem:k,hideNoResultsDisplay:_,noResultsDescription:O,renderCustomCallToAction:E,onBlur:T,variant:I="default",readOnly:F,alignment:M,dropdownZIndex:A})=>{const[j,R]=g(e),[z,B]=g(!1),[P,L]=g(!1),[N]=g((()=>Wc.generate())),H=s(null),W=s(null),V=s(null);c((()=>{R(e)}),[e]);const Y=(e,t)=>{var r;null===(r=W.current)||void 0===r||r.focus(),R(e),B(!1),Z(!1),null==y||y(e,t)},U=()=>{z&&(B(!1),Z(!1))},K=()=>{P||z||L(!0)},q=e=>{P&&!z&&H.current&&!H.current.contains(e.relatedTarget)&&(L(!1),null==T||T())},G=()=>{var e;if(!j)return"";if(v)return v(j);if(p){const t=p(j);return m?m(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return j.toString()},Q=e=>{if("middle"===S){let t=0;return V&&V.current&&(t=V.current.getBoundingClientRect().width),Vc.truncateOneLine(e,t,120,8)}return e},Z=e=>{e?null==x||x():null==w||w()};return t(Ck,{children:t(od,{enabled:!F&&!o,isOpen:z,renderElement:()=>t(Ef,{className:a,"data-testid":l,id:u,ref:H,tabIndex:-1,onFocus:K,onBlur:q,$focused:P,$disabled:o,$readOnly:F,$error:i,children:t(Qk,{ref:W,disabled:o,expanded:z,listboxId:N,popupRole:"listbox",readOnly:F,variant:I,children:t(Xu,{ref:V,$disabled:o,children:j?D?D(j):t(Ju,{truncateType:S,$variant:I,children:Q(G())}):t(ed,{truncateType:S,$variant:I,children:r})})})}),renderDropdown:({elementWidth:e})=>t(Kk,{listboxId:N,listItems:n,onSelectItem:Y,onDismiss:U,valueExtractor:p,listExtractor:b,enableSearch:d,searchPlaceholder:h,searchFunction:f,selectedItems:j?[j]:[],onRetry:$,itemsLoadState:C,itemTruncationType:S,renderListItem:k,hideNoResultsDisplay:_,noResultsDescription:O,renderCustomCallToAction:E,variant:I,width:e}),onOpen:()=>{B(!0),Z(!0),L(!0)},onClose:e=>{B(!1),Z(!1),"click"!==e&&(L(!1),null==T||T())},onDismiss:()=>{var e;null===(e=W.current)||void 0===e||e.focus(),B(!1),Z(!1)},clickToToggle:!0,offset:8,alignment:M,fitAvailableHeight:!0,customZIndex:A})})},UO=_.div`
    overflow: hidden;
    border: ${Mi["width-010"]} ${Mi.solid} ${Ti.border};
    border-radius: ${ji.sm};
    background: ${Ti.bg};
    padding: ${Ai["spacing-16"]};
    min-width: 23rem;

    ${zi.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Ri["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${zi.MaxWidth.xs} {
        width: calc(100vw - ${Ri["xs-margin"]} * 2);
    }

    ${zi.MaxWidth.xxs} {
        width: calc(100vw - ${Ri["xxs-margin"]} * 2);
    }
`,KO=_.div`
    display: flex;
    align-items: baseline;
`,qO=_.div`
    margin: 0 0.5rem;
`,GO=_.div`
    ${e=>"small"===e.$variant?Ii["body-md-regular"]:Ii["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return O`
                    ${Bi(1)}
                `}}
    overflow: hidden;
`,QO=_(GO)`
    color: ${Ti["text-subtler"]};
`,ZO=r=>{var{alignment:n="left",className:o,disabled:i,dropdownZIndex:a,error:l,histogramSlider:u,id:d,onBlur:f,onChange:h,onChangeEnd:p,optionTruncationType:m="end",placeholder:b="Select",rangeLabelPrefix:v,rangeLabelSuffix:y,readOnly:x,renderRangeLabel:w,value:$}=r,C=ct(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:S,bins:D=[],renderEmptyView:k,ariaLabels:_}=u,[O,E]=g(Y()),[T,I]=g(!1),[F,M]=g(!1),[A]=g((()=>Wc.generate())),j=D.map((e=>e.minValue)),R=Math.min(...j),z=s(null),B=s(null),P=s(null),L=C["data-testid"]||"select-histogram";c((()=>{$!==O&&E(Y())}),[$]);const N=e=>{E(e),null==h||h(e)},H=e=>{E(e),null==p||p(e)},W=()=>{F||T||M(!0)},V=e=>{F&&!T&&z.current&&!z.current.contains(e.relatedTarget)&&(M(!1),null==f||f())};function Y(){return null!=$?$:[R,R+S]}const U=t=>w?w(t):e(Hi.BodyBL,{children:[v,t,y]});return t(Ck,{children:t(od,{enabled:!x&&!i,isOpen:T,renderElement:()=>t(Ef,{className:o,"data-testid":L,id:d,ref:z,tabIndex:-1,onFocus:W,onBlur:V,$focused:F,$disabled:i,$readOnly:x,$error:l,children:t(Qk,{ref:B,disabled:i,expanded:T,listboxId:A,popupRole:"dialog",readOnly:x,variant:"default",children:t(Xu,{ref:P,$disabled:i,children:j&&0!==j.length?e(KO,{children:[U(O[0]),t(qO,{children:"-"}),U(O[1])]}):t(QO,{truncateType:m,$variant:"default",children:b})})})}),renderDropdown:({elementWidth:e})=>t(UO,{style:{width:e},children:t(ep,{interval:S,value:O,bins:D,onChange:N,onChangeEnd:H,showRangeLabels:!1,renderEmptyView:k,ariaLabels:_})}),onOpen:()=>{I(!0)},onClose:()=>{I(!1)},onDismiss:()=>{var e;null===(e=B.current)||void 0===e||e.focus(),I(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:a})})},XO=e=>{var{value:r,ariaLabel:n,onChange:o,onChangeEnd:i}=e,a=ct(e,["value","ariaLabel","onChange","onChangeEnd"]);const[s,l]=g(u());c((()=>{r!==s[0]&&l(u())}),[r]);function u(){return null!=r?[r]:[0]}return t(qh,Object.assign({},a,{value:s,numOfThumbs:1,onChange:e=>{const[t]=e;l([t]),null==o||o(t)},onChangeEnd:e=>{const[t]=e;l([t]),null==i||i(t)},ariaLabels:n?[n]:void 0}))},JO=_.p`
    text-align: right;
    ${Ii["body-sm-semibold"]}
    color: ${Ti["text-subtler"]};
`,eE=({value:e,maxLength:n,renderCustomCounter:i})=>{const[a,s]=g("");c((()=>{s(l(`${e||""}`))}),[e,n]);const l=e=>{if(i)return i(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return t(r,{children:o.isValidElement(a)?a:t(JO,{"data-testid":"counter-label",children:a})})},tE=_.div`
    display: flex;
    flex-direction: column;
`,rE=_.textarea`
    border: ${Mi["width-010"]} ${Mi.solid} ${Ti.border};
    border-radius: ${ji.sm};
    background: ${Ti.bg};
    outline: none;
    overflow: hidden;

    display: block;
    padding: ${Ai["spacing-12"]} ${Ai["spacing-16"]};
    width: 100%;

    ${Ii["body-baseline-regular"]}
    color: ${Ti.text};

    :focus,
    :active {
        outline-offset: -1px;
        outline: ${Mi["width-020"]} ${Mi.solid}
            ${Ti["border-focus"]};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ti["text-subtler"]};
    }

    ${e=>e.readOnly?O`
                border-color: transparent;
                background: transparent !important;

                :focus,
                :active {
                    outline-color: ${Ti["border-focus"]};
                }
            `:e.disabled?O`
                background: ${Ti["bg-disabled"]};
                cursor: not-allowed;

                :focus,
                :active {
                    outline-color: ${Ti["border-disabled"]};
                }
            `:e.$error?O`
                border-color: ${Ti["border-error"]};

                :focus,
                :active {
                    outline-color: ${Ti["border-error-focus"]};
                }
            `:void 0}
`,nE=o.forwardRef(((e,r)=>{var{value:n,disabled:o,error:i,rows:a=5,prefix:s,transformValue:l,onChange:u,maxLength:d}=e,f=ct(e,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[h,p]=g(n);c((()=>{p(n)}),[n]);return t(rE,Object.assign({ref:r,disabled:o,value:s?s+(null!=h?h:""):h,onChange:e=>{let t=e.target.value;if(s){t.startsWith(s)||(t=s+t.trimStart()),t.length<s.length&&(t=s);if((e.target.selectionStart||0)<s.length)return void e.preventDefault();const r=t.slice(s.length),n=l?l(r):r;if(p(n),e.target.value=s+n,u){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});u(t)}}else{const r=l?l(null!=t?t:""):t;p(r),e.target.value=r,u&&u(e)}},onKeyDown:e=>{if(!s)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=s.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=s.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(s.length,s.length)})))},$error:i,rows:a,maxLength:s&&d?s.length+d:d},f))}));o.forwardRef(((r,n)=>{var{value:o,disabled:i,rows:a=5,onChange:s,transformValue:l,prefix:u,maxLength:d,renderCustomCounter:f}=r,h=ct(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[p,m]=g(o);c((()=>{m(o)}),[o]);return e(tE,{children:[t(nE,Object.assign({ref:n,disabled:i,value:p,rows:a||5,onChange:e=>{const t=e.target.value;m(t),s&&s(e)},prefix:u,transformValue:l,maxLength:d},h)),d&&t(eE,{value:p,maxLength:d,renderCustomCounter:f})]})}));const oE=_.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Ai["spacing-4"]};
`,iE=_.div`
    display: flex;
    flex: 1;
    margin-right: ${Ai["spacing-12"]};
`,aE=_(Ou)`
    margin-top: 0;
`,sE=o.forwardRef(((n,o)=>{const{label:i,value:a,errorMessage:s,id:l="form-textarea","data-error-testid":u,"data-testid":d,onChange:f,layoutType:h,mobileCols:p,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,transformValue:D,prefix:k=""}=n,_=ct(n,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[O,E]=g(a);c((()=>{E(a)}),[a]);return e(Wu,{id:l,label:i,disabled:_.disabled,layoutType:h,mobileCols:p,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,children:[t(nE,Object.assign({id:`${l}-base`,"data-testid":d||l,value:O,error:!!s,onChange:e=>{const t=e.target.value;E(t),f&&f(e)},ref:o,prefix:k,transformValue:D},_)),s||_.maxLength?e(oE,{children:[s&&t(iE,{children:t(aE,{"data-testid":u||(l?`${l}-error-message`:"error-message"),children:s})}),_.maxLength&&t(eE,{value:O,maxLength:_.maxLength,renderCustomCounter:_.renderCustomCounter})]}):t(r,{})]})})),lE=_.div`
    position: relative;
`,cE=_(Tf)`
    height: 3rem;
    gap: ${Ai["spacing-8"]};
`,uE=_(If)`
    display: block;
    width: 100%;
    flex: 1;
`;var dE,fE;!function(e){e.AM="AM",e.PM="PM"}(dE||(dE={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,o]=e.split(":"),i=parseInt(n,10),a=parseInt(o,10);if(isNaN(i)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*i+a,l=s%t,c=0===l?s:r?s+(t-l):s-l,u=c%60;return`${Math.floor(c/60).toString().padStart(2,"0")}:${u.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let o=Cc(e,n),i=Cc(t,n);o.isSame(i)&&(i=i.add(1,"day"));const a=[];for(;o.isBefore(i);)a.push(o.format(r)),o=o.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:dE.AM};if(!t)return r;try{if("24hr"===e){const n=gE(t,e);r.minute=Vc.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period=dE.AM,r.hour=0===o?"12":Vc.padValue(o.toString())):(r.period=dE.PM,r.hour=12===o?o.toString():Vc.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=gE(t,e);r.hour=Vc.padValue(n),r.minute=Vc.padValue(o),r.period="am"===i.toLowerCase()?dE.AM:dE.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Vc.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return Vc.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Vc.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?Vc.padValue(n.toString()):13===n?Vc.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===dE.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return Vc.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:o=""}=gE(e,t),i=Vc.padValue(r);let a=`${i}:${Vc.padValue(n)}`;return"12hr"===t?(a+=o.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&i<12&&(i+=12),"am"===r&&12===i&&(i=0),mE(i,o)}return e},e.generateTimings=(t,r="12hr",n,o)=>{const i=[];let a=0,s=1440-t;for(n&&(a=e.timeToMinutes(n)),o&&(s=e.timeToMinutes(o));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=mE(e,n,t);i.push(r)}else{const t=mE(e,n);i.push(t)}a+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&o<12?o+=12:("am"===a&&12===o||24===o)&&(o=0),mE(o,i);a?0===o||24===o?(a="am",o=12):o>12&&(a="pm",o-=12):(a=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return mE(o,i,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let o="",i=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<i)i=Math.abs(r),o=t;else if(r>0)break}return o},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&12!==i&&(i+=12),"am"===r&&12===i&&(i=0),60*i+o}}(fE||(fE={}));const hE=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},pE=e=>{const t=parseInt(e);return t>=0&&t<=59},gE=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!hE(r[0],t)||!pE(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!hE(r[0],t)||!pE(r[1]))throw n;return{hour:r[0],minute:r[1]};var o},mE=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,bE=_.div`
    padding: ${Ai["spacing-8"]} ${Ai["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Ti["bg-error"](e),r=Ti["border-error"](e);break;case"success":t=Ti["bg-success"](e),r=Ti["border-success"](e);break;case"warning":default:t=Ti["bg-warning"](e),r=Ti["border-warning"](e);break;case"info":t=Ti["bg-info"](e),r=Ti["border-info"](e);break;case"description":t=Ti["bg-strong"](e),r=Ti["border-strong"](e)}return O`
            background: ${t};
            border-left: ${Mi["width-020"]} ${Mi.solid}
                ${r};
        `}}

    color: ${Ti.text};
    ${e=>"small"===e.$sizeType?hu({textSize:"body-sm"}):hu({textSize:"body-md"})}
`,vE=_.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Ai["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Ti["icon-error"](e);break;case"success":t=Ti["icon-success"](e);break;case"warning":default:t=Ti["icon-warning"](e);break;case"info":t=Ti["icon-info"](e);break;case"description":t=Ti["icon-subtle"](e)}return O`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,yE=_(Hi.LinkSM)`
    ${e=>"small"===e.$sizeType?O`
                ${Ii["body-sm-semibold"]}
                margin-top: ${Ai["spacing-4"]};
            `:O`
                ${Ii["body-md-semibold"]}
                margin-top: ${Ai["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Ai["spacing-4"]};
    }
`,xE=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,wE=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return O`
                margin-bottom: ${Ai["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,$E=_.button`
    ${e=>"small"===e.$sizeType?O`
                ${Ii["body-sm-semibold"]}
            `:O`
                ${Ii["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Ai["spacing-4"]};
    margin-top: ${Ai["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Ti["text-primary"]};
`,CE=_(he)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Fi["duration-350"]} ${Fi["ease-standard"]};
`,SE=r=>{var{type:n,className:o,children:i,actionLink:a,actionLinkIcon:s,sizeType:l="default",showIcon:u=!1,customIcon:d,maxCollapsedHeight:f}=r,h=ct(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[p,m]=g(!1),[b,v]=g(!1),{height:y,ref:x}=mc();c((()=>{w()}),[f,y]);const w=()=>{m(!f),v($())},$=()=>!(!y||!f)&&y>f;return e(bE,{className:o,$type:n,$sizeType:l,"data-testid":h["data-testid"],children:[u&&t(vE,{$sizeType:l,$type:n,children:(()=>{if(n&&d)return d;switch(n){case"success":return t(Oe,{});case"warning":return t(_e,{});case"error":return t(pe,{});case"info":case"description":return t(R,{});default:return null}})()}),e(xE,{children:[e(wE,{$maxCollapsedHeight:$()?f:void 0,$showMore:p,$hasActionLink:!!a,children:[t("div",{ref:x,children:i}),a?e(yE,Object.assign({"data-testid":"action-link",$type:n,$sizeType:l},a,{children:[a.children,s||t(ke,{})]})):null]}),b&&e($E,{$sizeType:l,$type:n,type:"button",onClick:()=>m(!p),children:["Show ",p?"less":"more",t(CE,{$expanded:p})]})]})]})},DE=_.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?O`
                    color: ${Ti["icon-selected-disabled"]};
                `:O`
                    color: ${Ti["icon-disabled-subtle"]};
                `:e.$active?O`
                color: ${Ti["icon-selected"]};
            `:O`
            color: ${Ti["icon-subtle"]};
        `};
`,kE=O`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${Ii.Spec["weight-regular"]};
        ${e=>e.$size&&Ii[`${e.$size}-regular`]}
        color: ${Ti.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,_E=_.ol`
    ${kE}

    margin-left: 3rem;

    ${zi.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:t}=e,r=e.$counterType||"decimal",n=e.$counterSeparator||")";return O`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){return O`
                counter-reset: list ${t?r+1:r-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,OE=_.ul`
    ${kE}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,EE=e=>{var{size:r,bulletType:n,bottomMargin:o,children:i}=e,a=ct(e,["size","bulletType","bottomMargin","children"]);return t(OE,Object.assign({$size:r,$bulletType:n,$bottomMargin:o},a,{children:i}))};EE.displayName="TextList.Ul";const TE=e=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:a}=e,s=ct(e,["size","counterType","counterSeparator","bottomMargin","children"]);return t(_E,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},s,{children:a}))};TE.displayName="TextList.Ol";const IE=EE,FE=_.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Ti.bg};

    ${e=>{if(!e.$indicator)return O`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return O`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?O`
                            border-color: ${Ti["border-error"]};
                        `:O`
                            border-color: ${Ti["border-error"]};

                            &:has(${zE}:hover) {
                                background: ${Ti["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?O`
                            border: none;
                            background: ${Ti["bg-selected-disabled"]};
                        `:O`
                            border: none;
                        `:e.$selected?O`
                        border: none;
                        background: ${Ti["bg-selected"]};

                        &:has(${zE}:hover) {
                            background: ${Ti["bg-selected-hover"]};

                            & ${AE} {
                                color: ${Ti["text-selected-hover"]};
                            }

                            & ${UE} {
                                color: ${Ti["icon-selected-hover"]};
                            }
                        }
                    `:O`
                    border: none;

                    &:has(${zE}:hover) {
                        background: ${Ti["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?O`
                            border-color: ${Ti["border-error"]};
                        `:O`
                            border-color: ${Ti["border-error"]};

                            &:has(${zE}:hover) {
                                background: ${Ti["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?O`
                            border-color: ${Ti["border-selected-disabled"]};
                            background: ${Ti["bg-selected-disabled"]};
                        `:O`
                            border-color: ${Ti["border-disabled"]};
                            background: ${Ti["bg-disabled"]};
                        `:e.$selected?O`
                        border-color: ${Ti["border-selected"]};
                        background: ${Ti["bg-selected"]};

                        &:has(${zE}:hover) {
                            background: ${Ti["bg-selected-hover"]};

                            & ${AE} {
                                color: ${Ti["text-selected-hover"]};
                            }

                            & ${UE} {
                                color: ${Ti["icon-selected-hover"]};
                            }
                        }
                    `:O`
                    border-color: ${Ti.border};

                    &:has(${zE}:hover) {
                        background: ${Ti["bg-hover-subtle"]};
                    }
                `}
`,ME=_.input`
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
`,AE=_.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?O`
                    color: ${Ti["text-selected-disabled"]};
                `:O`
                    color: ${Ti["text-disabled"]};
                `:e.$selected?O`
                color: ${Ti["text-selected"]};
            `:O`
            color: ${Ti.text};
        `}
`,jE=_.label`
    ${Ii["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${zi.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${zi.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,RE=_.div`
    ${Ii["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Ii["body-md-semibold"]}
    }
`,zE=_.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,BE=_.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,PE=_.button`
    color: ${e=>e.$disabled?Ti["text-disabled"]:Ti["text-error"]};
    white-space: nowrap;
    ${Ii["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,LE=_.button`
    color: ${e=>e.disabled?Ti["text-disabled"]:Ti["text-primary"]};
    ${Ii["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Ti.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,NE=_.div`
    width: 100%;
    color: ${e=>e.$disabled?Ti["text-disabled"]:Ti["text-error"]};
    border: none;
    background: ${Ti.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,HE=_(SE)`
    width: 100%;
    user-select: none;
`,WE=_.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Ti.bg};
    ${hu({textSize:"body-md"})}

    ${e=>e.$disabled?O`
                color: ${Ti["text-disabled"]};
            `:e.$selected?O`
                color: ${Ti["text-selected"]};
            `:O`
                color: ${Ti.text};
            `}
`,VE=_(Hi.BodyMD)`
    color: ${e=>e.$disabled?Ti["text-disabled"]:Ti["text-error"]};
`,YE=_(IE)`
    color: ${e=>e.$disabled?Ti["text-disabled"]:Ti["text-error"]};
`,UE=_((({type:e,active:r=!1,disabled:n,className:o})=>{let i;switch(e){case"checkbox":i=t(r?we:ye,{});break;case"radio":i=t(r?Te:Ee,{});break;case"tick":i=t($e,{});break;case"cross":i=t(te,{});break;default:i=null}return t(DE,{className:o,$active:r,$disabled:n,children:i})}))`
    ${e=>e.$disabled?e.$selected?O`
                    color: ${Ti["icon-selected-disabled"]};
                `:O`
                    color: ${Ti["icon-disabled-subtle"]};
                `:e.$selected?O`
                color: ${Ti["icon-selected"]};
            `:O`
            color: ${Ti["icon-subtle"]};
        `};
`,KE=_(Sw.div)`
    position: absolute;
    top: calc(3rem + ${Ai["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${zi.MaxWidth.xxs} {
        max-width: 100%;
    }
`,qE=_.div`
    position: relative;
    width: 100%;
    padding: ${Ai["spacing-8"]} ${Ai["spacing-20"]}
        ${Ai["spacing-24"]} ${Ai["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Ti.bg};
    border: ${Mi["width-010"]} ${Mi.solid} ${Ti.border};
    border-radius: ${ji.sm};
`,GE=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${zi.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,QE=_.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Ai["spacing-16"]};
    gap: ${Ai["spacing-8"]} ${Ai["spacing-16"]};

    ${zi.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${Ai["spacing-32"]};
    }
`,ZE=_.div`
    display: flex;
    align-items: center;
    margin-right: ${Ai["spacing-32"]};

    ${zi.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,XE=_.div`
    display: flex;
    gap: ${Ai["spacing-8"]};

    ${zi.MaxWidth.lg} {
        flex-direction: column;
    }

    ${zi.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,JE=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${zi.MaxWidth.xxs} {
        width: 6rem;
    }
`,eT=_(cu)`
    width: 5rem;
    padding: ${Ai["spacing-16"]} 0;
    color: ${Ti.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Ti["icon-hover"]};
    }
`,tT=_(Hi.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,rT=_(Ef)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${zi.MaxWidth.xxs} {
        width: 100%;
    }
`,nT=_(If)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,oT=_((({type:n="checkbox",indicator:o,checked:i,styleType:l="default",children:u,childrenMaxLines:d,subLabel:f,disabled:h,error:p,name:m,id:b,className:v,compositeSection:y,removable:x,onRemove:w,"data-testid":$,onChange:C,useContentWidth:S})=>{const{collapsible:D=!0,errors:k,children:_,initialExpanded:O}=y||{},[E,T]=g(i),[I,F]=g(!!O),M=a((()=>{const e=Array.isArray(k)&&(null==k?void 0:k.length)>0,t=!Array.isArray(k)&&!!k;return e||t}),[k]),[A]=g(Wc.generate()),j=b?`${b}`:`tg-${A}`,R=s(null);c((()=>{T(i)}),[i]),c((()=>{E&&F(null==O||O)}),[E]);const z=()=>{h||F(!I)},B=()=>{h||!w||w()},P=()=>{let e;switch(n){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=n}return t(UE,{type:e,active:E,disabled:h,$selected:E,$disabled:h})},L=()=>{if(!f)return null;let e;return e="function"==typeof f?f():f,t(RE,{"data-id":"toggle-sublabel",children:e})},N=n=>e(r,{children:[t(VE,{weight:"semibold",$disabled:h,children:"Error"}),t(YE,{$disabled:h,children:null==n?void 0:n.map(((e,r)=>t("li",{id:`${j}-error-list-item-${r}`,children:t(VE,{weight:"semibold",$disabled:h,children:e})},r)))})]});return e(FE,{$selected:E,$disabled:h,className:v,$styleType:l,$error:p,$indicator:o,$useContentWidth:S,id:b,"data-testid":$,children:[e(zE,{id:`${j}-header-container`,$disabled:h,$error:p,$selected:E,$indicator:o,$styleType:l,children:[e(BE,{$addPadding:x,children:[t(ME,{ref:R,name:m,id:`${j}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:h,onChange:e=>{if(!h){if(C)return void C(e);switch(n){case"checkbox":T((e=>!e));break;case"radio":case"yes":case"no":E||T(!0)}}},checked:E}),o&&P(),e(AE,{$selected:E,$disabled:h,children:[t(jE,{htmlFor:`${j}-input`,"data-testid":`${j}-toggle-label`,$maxLines:d,children:u}),f&&L()]})]}),x&&t(PE,{type:"button",$disabled:h,onClick:B,id:`${j}-remove-button`,children:"Remove"})]}),_&&e("div",{children:[(!D||I)&&t(WE,{"data-id":"toggle-composite-children",$isFinalItem:!D,$disabled:h,children:_}),D&&!I&&M&&t(NE,{$disabled:h,onClick:z,id:`${j}-error-alert`,children:t(HE,{type:h?"description":"error",className:v,showIcon:!0,children:Array.isArray(k)?N(k):k})}),D&&e(LE,{$paddingTopRequired:!I&&!M,disabled:h,onClick:z,"data-testid":I?"collapse-button":"expand-button",children:[I?"Show less":"Show more",t(I?De:re,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,iT=_(Ed.Small)`
    width: 7rem;

    ${zi.MaxWidth.sm} {
        flex: 1;
    }

    ${zi.MaxWidth.xxs} {
        width: 100%;
    }
`;var aT,sT,lT;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(aT||(aT={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(sT||(sT={})),function(e){e.AM="am",e.PM="pm"}(lT||(lT={}));const cT=({id:r,value:n,show:o,format:i,onChange:a,onCancel:l})=>{var d;const f=fE.getTimeValues(i,n),[h,p]=g(f.hour),[m,b]=g(f.minute),[v,y]=g(f.period),x=s(null),w=s(null),$=mc();c((()=>{if(o&&x.current&&x.current.focus(),o){const{hour:e,minute:t,period:r}=fE.getTimeValues(i,n);p(e),b(t),y(r)}}),[o,n,i]),c((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",C),t&&t.addEventListener("keydown",C),()=>{e&&e.removeEventListener("keydown",C),t&&t.removeEventListener("keydown",C)}}),[]);const C=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=u((e=>{switch(e.currentTarget.name){case aT.MINUTE_UP:b(fE.updateMinutes(m,"add"));break;case aT.MINUTE_DOWN:b(fE.updateMinutes(m,"minus"));break;case aT.HOUR_UP:p(fE.updateHours(h,"add"));break;case aT.HOUR_DOWN:p(fE.updateHours(h,"minus"))}}),[h,m]),D=e=>{e.target.select()},k=e=>{const t=e.target.value;switch(e.target.name){case sT.HOUR:t.length<=2&&p(t);break;case sT.MINUTE:t.length<=2&&b(t)}},_=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case sT.HOUR:{const r=t>23||t<0?f.hour:fE.convertHourTo12HourFormat(e.target.value);p(r);break}case sT.MINUTE:{const r=t>59||t<0?f.minute:e.target.value;b(Vc.padValue(r));break}}},O=e=>{switch(e.target.name){case lT.AM:y(dE.AM);break;case lT.PM:y(dE.PM)}},E=e=>r?`${r}-${e}`:e,T=aw({opacity:o?1:0,height:o?(null!==(d=$.height)&&void 0!==d?d:0)+32+2:0});return t(KE,{"data-testid":"animated-dropdown-wrapper",style:T,children:e(qE,{ref:$.ref,"data-testid":E("timepicker-dropdown"),inert:o?void 0:"",children:[e(GE,{children:[e(ZE,{children:[e(JE,{children:[t(eT,{"aria-label":"increase hour",name:aT.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":E("hour-increment-button"),children:t(De,{})}),t(rT,{children:t(nT,{"aria-label":"hour",type:"number",name:sT.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:h,onFocus:D,onChange:k,onBlur:_,min:1,max:12,placeholder:"HH","data-testid":E("hour-input")})}),t(eT,{"aria-label":"decrease hour",name:aT.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":E("hour-decrement-button"),children:t(re,{})})]}),t(tT,{children:":"}),e(JE,{children:[t(eT,{"aria-label":"increase minute",name:aT.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":E("minute-increment-button"),children:t(De,{})}),t(rT,{children:t(nT,{"aria-label":"minute",type:"number",name:sT.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:m,onChange:k,onBlur:_,onFocus:D,min:0,max:59,placeholder:"MM","data-testid":E("minute-input")})}),t(eT,{"aria-label":"decrease minute",name:aT.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":E("minute-decrement-button"),children:t(re,{})})]})]}),e(XE,{children:[t(oT,{checked:v===dE.AM,name:lT.AM,type:"radio",onChange:O,"data-testid":E("am-toggle"),"aria-label":"AM",children:"AM"}),t(oT,{checked:v===dE.PM,name:lT.PM,type:"radio",onChange:O,"data-testid":E("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e(QE,{children:[t(iT,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:l,"data-testid":E("cancel-button"),children:"Cancel"}),t(iT,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===i?fE.convertTo24HourFormat({hour:h,minute:m,period:v}):`${h}:${m}${v}`,a(e)},disabled:""===h||""===m,"data-testid":E("confirm-button"),children:"Done"})]})]})})},uT=r=>{var{id:n,disabled:o=!1,error:i,value:a,format:l="24hr",readOnly:u,onChange:d,onFocus:f,onBlur:h}=r,p=ct(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,b]=g(!1),[v,y]=g(!1),[x,w]=g(""),[$,C]=g(""),S=s(null);c((()=>{a&&(w(a.start),C(a.end))}),[a]),Uc("mousedown",(function(e){o||O(e)}),"document"),Uc("keyup",(function(e){if("Tab"===e.code)O(e)}),"document");const D=()=>{_()},k=()=>{m||v||f&&f()},_=()=>{b(!1),y(!1),h&&h()},O=e=>{S.current&&!S.current.contains(e.target)&&(v||m)&&_()};return t(lE,Object.assign({ref:S,id:n},p,{children:e(cE,{$disabled:o,$error:i,$readOnly:u,children:[e(Gf,{error:i,currentActive:m?"start":v?"end":"none",children:[t(uE,{onFocus:()=>{o||u||m||(y(!1),b(!0),k())},readOnly:!0,placeholder:"From",value:fE.formatDisplayValue(x,l),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(uE,{onFocus:()=>{o||u||v||(b(!1),y(!0),k())},readOnly:!0,placeholder:"To",value:fE.formatDisplayValue($,l),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),t(cT,{id:n,show:m,value:x,format:l,onCancel:D,onChange:e=>{b(!1),y(!0),w(e);d&&d({start:e,end:$})}}),t(cT,{id:n,show:v,value:$,format:l,onCancel:D,onChange:e=>{y(!1),C(e);d&&d({start:x,end:e}),""==x?b(!0):h&&h()}})]})}))},dT=_(Tf)`
    height: 3rem;
    gap: ${Ai["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${Ai["spacing-20"]});
`,fT=r=>{var{id:n,disabled:o=!1,error:i,value:l,format:d="12hr",readOnly:f,onChange:h,onFocus:p,onBlur:m,alignment:b="left",dropdownZIndex:v,startLimit:y,endLimit:x,interval:w=15}=r,$=ct(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[C]=g((()=>Wc.generate())),[S,D]=g(null),[k,_]=g(!1),[O,E]=g(""),[T,I]=g(""),[F,M]=g(""),[A,j]=g(""),[R,z]=g(""),B=s(null),P=s(null),L=s(null),N=a((()=>fE.generateTimings(w,d,y,x)),[w,d,y,x]),H=a((()=>{if(""===A)return N;const e=fE.findClosestFlooredTime(A,N);return e?N.slice(N.indexOf(e)):[]}),[N,A]),W=u((e=>fE.parseInput(e,d)),[d]);c((()=>{var e,t;if(l){const r=null!==(e=W(l.start))&&void 0!==e?e:"",n=null!==(t=W(l.end))&&void 0!==t?t:"";I(r),M(n),j(r),z(n)}}),[l,W]),c((()=>{if(i)return void _(!1);const e=W(T),t=W(F);if(void 0===e)E("Invalid start time");else if(void 0===t)E("Invalid end time");else{if(!(""!==e&&""!==t&&fE.to24Hour(t)<fE.to24Hour(e)))return E(""),void(document.activeElement!==P.current&&document.activeElement!==L.current||_(!0));E("End time must be after start time")}_(!1)}),[T,F,W,i]);const V=e=>{o||f||(S||k||null==p||p(),D(e),_(!0))},Y=e=>{var t;o||f||(D(e),_(!0),null===(t=("start"===e?P:L).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===S?K(T):"end"===S&&(k&&q(F),null===(t=L.current)||void 0===t||t.blur());break;case"Tab":G(T,F,{})}}const K=e=>{G(e,F,{goToNextInput:!0})},q=e=>{G(T,e,{triggerOnBlur:!0})},G=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var o,i,a;const s=null!==(o=W(e))&&void 0!==o?o:A,l=null!==(i=W(t))&&void 0!==i?i:R;I(s),M(l);s===A&&l===R||null==h||h({start:s,end:l}),r&&void 0!==W(e)&&(D("end"),null===(a=L.current)||void 0===a||a.select()),n&&(D(null),_(!1),null==m||m()),j(s),z(l)},Q=e=>{e.stopPropagation(),I(""),M(""),j(""),z("");null==h||h({start:"",end:""}),D(null),_(!1)},Z=e=>{B.current&&!B.current.contains(e.relatedTarget)&&S&&!k&&G(T,F,{triggerOnBlur:!0})},X=()=>{if(!f&&!o&&((null==T?void 0:T.length)>0||(null==F?void 0:F.length)>0))return t(HO,{onClick:Q,type:"button","aria-label":"Clear",children:t(np,{"aria-hidden":!0})})};return e(lE,Object.assign({id:n},$,{children:[t(Ck,{children:t(od,{enabled:!f&&!o,isOpen:k,renderElement:()=>e(dT,{ref:B,$disabled:o,$error:i||!!O,$readOnly:f,onBlur:Z,children:[e(Gf,{error:i||!!O,currentActive:null===S?"none":S,children:[t(uE,{ref:P,onFocus:()=>V("start"),placeholder:"start"===S?"hh:mm":"From",onChange:e=>I(e.target.value),value:T,disabled:o,readOnly:f,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":k,"aria-controls":C,"aria-autocomplete":"list"}),t(uE,{ref:L,onFocus:()=>V("end"),placeholder:"end"===S?"hh:mm":"To",onChange:e=>M(e.target.value),value:F,disabled:o,readOnly:f,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":k,"aria-controls":C,"aria-autocomplete":"list"})]}),X()]}),renderDropdown:()=>{if(k)return t(Kk,"start"===S?{listItems:N,onSelectItem:K,selectedItems:[T],disableItemFocus:!0,topScrollItem:fE.findClosestFlooredTime(W(T),N),listboxId:C}:{listItems:H,onSelectItem:q,selectedItems:[F],disableItemFocus:!0,topScrollItem:fE.findClosestFlooredTime(W(F),H),listboxId:C})},onClose:e=>{"outside-press"===e?(D(null),_(!1),null==m||m()):G(T,F,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===S?P:L).current)||void 0===e||e.focus(),_(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:v})}),!i&&O&&t(Ou,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:O})]}))},hT=e=>{var{variant:r="dial"}=e,n=ct(e,["variant"]);return t("combobox"===r?fT:uT,Object.assign({},n))};_.div`
    position: relative;
`;const pT=_(If)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,gT=r=>{var{id:n,disabled:o=!1,readOnly:i=!1,error:a,value:l,placeholder:c,format:d="24hr",onChange:f,onFocus:h,onBlur:p}=r,m=ct(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[b,v]=g(!1),y=s(null);Uc("mousedown",(function(e){o||i||$(e)}),"document"),Uc("keyup",(function(e){if("Tab"===e.code)$(e)}),"document");const x=()=>{o||i||b||(v(!0),h&&h())};const w=()=>{v(!1),p&&p()},$=e=>{y.current&&!y.current.contains(e.target)&&b&&w()},C=u((()=>"12hr"===d?"HH:MMam":"HH:MM"),[d,c]);return e(Tf,Object.assign({ref:y,id:n,$readOnly:i,$disabled:o,$error:a},m,{children:[t(pT,{onFocus:x,focused:b,readOnly:!0,placeholder:c||C(),value:fE.formatDisplayValue(l,d),disabled:o,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),t(cT,{id:n,show:b,value:l,format:d,onCancel:()=>{w()},onChange:e=>{f&&f(e),w()}})]}))},mT=_(g$)`
    margin-right: 0.5rem;
`,bT=_(ap)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,vT=_(bT)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,yT=_(Hi.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return O`
                color: ${Ti["text-disabled"]};
            `}}
`,xT=_.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,wT=_(Hi.BodyBL)``,$T=n=>{var{disabled:o,error:i,value:a,onChange:l,onBlur:u,onChangeRaw:d,onBlurRaw:f,readOnly:h,placeholder:p="00-8888",autoComplete:m}=n,b=ct(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[v,y]=g(""),[x,w]=g(""),[$,C]=g("none"),S=s(null),D=s(null),k=s(null),_=s(v),O=s(x),E=s($),T=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),I=qc({ref:D,formatter:T}),F=qc({ref:k,formatter:T}),M=e=>{_.current=e,y(e)},A=e=>{O.current=e,w(e)},j=e=>{E.current=e,C(e)};c((()=>{"floor"===$&&3===v.length&&k.current&&k.current.focus()}),[v]),c((()=>{N(a)}),[a]);const R=e=>{j(e.target.name),e.target.select()},z=e=>{const t=e.target.name,r=e.target.value,n=L(r);"floor"===t?(M(n),n!==v&&H(n,t)):"unit"===t&&(A(n),n!==x&&H(n,t))},B=e=>{const t=e.target.name;if("floor"===t){const e=I();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),M(r),H(r,t)}else if("unit"===t){const e=F();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),A(r),H(r,t)}},P=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===$&&0===x.length&&(null===(t=D.current)||void 0===t||t.focus())},L=e=>/^[0-9]$/.test(e)?Vc.padValue(e,!0):e.toLocaleUpperCase(),N=e=>{if(e!==CT)if(void 0===e||0===e.length)M(""),A("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];M("floor"===$?e:L(e)),A("unit"===$?r:L(r))}}},H=(e,t)=>{if(!l&&!d)return;const r={floor:_.current,unit:O.current};if(r[t]=e,l){const e=V(r);l(e)}d&&d([r.floor,r.unit])},W=()=>{if(!u&&!f)return;const e={floor:L(_.current),unit:L(O.current)};if(u){const t=V(e);u(t)}f&&f([e.floor,e.unit])},V=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":CT},Y=e=>e.split("-");return e(Tf,Object.assign({},b,{ref:S,onClick:()=>{"none"===$&&D.current&&D.current.focus()},$disabled:o,$error:i,$readOnly:h,tabIndex:-1,onBlur:e=>{S.current&&S.current.contains(e.relatedTarget)||"none"!==E.current&&(j("none"),W())},children:[t(mT,{"data-testid":"addon",$disabled:o,$readOnly:h,children:"#"}),h&&a?(r=>{const n=r.split("-");return e(xT,{children:[t(wT,{children:n[0]}),t(yT,{children:"-"}),t(wT,{children:n[1]})]})})(a):e(r,{children:[t(bT,{name:"floor",maxLength:3,value:v,ref:D,onFocus:R,onBlur:z,onChange:B,disabled:o,readOnly:h,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==$||h?Y(p)[0]:"",autoComplete:m,styleType:"no-border"}),t(yT,{$inactive:0===v.length,children:"-"}),t(vT,{name:"unit",maxLength:5,value:x,ref:k,onFocus:R,onBlur:z,onChange:B,onKeyDown:P,disabled:o,readOnly:h,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==$||h?Y(p)[1]:"",autoComplete:m,styleType:"no-border"})]})]}))},CT="Invalid unit number",ST={DateInput:e=>{var{label:r,errorMessage:n,id:o="form-date-input","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=ct(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Wu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(Wf,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},DateRangeInput:e=>{var{label:r,errorMessage:n,id:o="form-date-range-input","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=ct(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Wu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(eh,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},ESignature:e=>{const{label:r,errorMessage:n,id:o="form-field","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=ct(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Wu,{id:o,label:r,errorMessage:n,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(Th,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},HistogramSlider:e=>{var{label:r,errorMessage:n,id:o="form-histogram-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=ct(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Wu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(ep,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},Input:sp,InputGroup:v$,MaskedInput:A$,Label:Tu,MultiSelect:e=>{var{label:r,errorMessage:n,id:o="form-multi-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,variant:y}=e,x=ct(e,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return t(Wu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:t(uO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s,variant:y},x))})},NestedSelect:e=>{var{label:r,errorMessage:n,id:o="form-nested-select","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=ct(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Wu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(pO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},NestedMultiSelect:e=>{var{label:r,errorMessage:n,id:o="form-nested-multi-select","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=ct(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Wu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(hO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},Select:e=>{var{label:r,errorMessage:n,id:o="form-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,variant:y}=e,x=ct(e,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return t(Wu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:t(YO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s,variant:y},x))})},SelectHistogram:e=>{var{label:r,errorMessage:n,id:o="form-select-histogram","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,histogramSlider:v}=e,y=ct(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);return t(Wu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(ZO,Object.assign({histogramSlider:v,error:!!n,"data-testid":a||o,id:`${o}-base`},y))})},Slider:e=>{var{label:r,errorMessage:n,id:o="form-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=ct(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Wu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(XO,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSlider:e=>{var{label:r,errorMessage:n,id:o="form-range-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=ct(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Wu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(qh,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSelect:e=>{var{label:r,errorMessage:n,id:o="form-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=e,y=ct(e,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Wu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:t(VO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s},y))})},Textarea:sE,Timepicker:e=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=ct(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Wu,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(gT,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},TimeRangePicker:e=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=ct(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Wu,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(hT,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},CustomField:e=>{var{id:r="form-custom-field","data-error-testid":n,children:o}=e,i=ct(e,["id","data-error-testid","children"]);return t(Wu,Object.assign({id:r,"data-error-testid":n},i,{children:o}))},UnitNumberInput:e=>{var{label:r,errorMessage:n,id:o="form-unit-number-input","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=ct(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Wu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t($T,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},PhoneNumberInput:e=>{var{label:r,errorMessage:n,id:o="form-phone-number-input","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=ct(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Wu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(TO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},PredictiveTextInput:e=>{var{label:r,errorMessage:n,id:o="form-predictive-text","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=ct(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Wu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(LO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})}},DT=_.li`
    display: flex;
    flex-direction: column;
    padding: ${Ai["spacing-32"]} 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: ${Mi["width-010"]} ${Mi.solid} ${Ti.border};
    }
`,kT=_.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${Ai["spacing-16"]};
    width: 100%;
`,_T=_.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,OT=_.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${Ai["spacing-16"]};

    ${zi.MaxWidth.sm} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,ET=_(Hi.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${Ai["spacing-16"]};

    ${zi.MaxWidth.sm} {
        margin-right: 0;
        margin-bottom: ${Ai["spacing-8"]};
    }
`,TT=_(Hi.BodyMD)``,IT=_.div`
    display: flex;
    ${zi.MaxWidth.sm} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return O`
                margin-left: calc(
                    96px + ${Ai["spacing-32"]}
                ); // thumbnail width + right margin

                ${zi.MaxWidth.sm} {
                    margin-left: 0;
                }
            `}}
`,FT=_(Ed.Small)`
    width: 7.5rem;
    :not(:last-of-type) {
        margin-right: ${Ai["spacing-16"]};
    }

    ${zi.MaxWidth.sm} {
        width: 100%;
        :not(:last-of-type) {
            margin-bottom: ${Ai["spacing-16"]};
        }
    }
`;const MT=({thumbnailImageDataUrl:r,"data-testid":n,renderReplaceButton:o,onReplaceClick:i})=>e(AT,{"data-testid":n,children:[t(jT,{"data-testid":n?`${n}-image`:void 0,src:r}),o&&t(RT,{type:"button",onClick:()=>{i&&i()},children:"Replace"})]}),AT=_.div`
    width: auto;
    margin-right: ${Ai["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,jT=_((({src:e,alt:r,className:n,"data-testid":o})=>t("img",{src:e,alt:r||"",className:n,"data-testid":o,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}})))`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${ji.sm};
    border: ${Mi["width-010"]} ${Mi.solid} ${Ti.border};
    object-fit: cover;

    ${zi.MaxWidth.sm} {
        width: 64px;
        height: 64px;
    }
`,RT=_.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${Ai["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${Ii["body-md-semibold"]}
    color: ${Ti["text-primary"]};

    :hover {
        color: ${Ti["text-hover"]};
    }
`;var zT;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(zT||(zT={}));const BT=({fileItem:r,fileDescriptionMaxLength:n,wrapperWidth:o,onSave:i,onCancel:a,onBlur:l})=>{const{id:u,name:d,size:f,truncateText:h=!0,thumbnailImageDataUrl:p}=r,[m,b]=g(),[v,y]=g(""),x=s(null),w=s(null);c((()=>{b($(d))}),[o]),c((()=>{y(r.description||"")}),[r]);const $=e=>{if(!h)return e;const t=w&&w.current?w.current.getBoundingClientRect().width:0;return Vc.truncateOneLine(e,t,t/2,t/2/8,16)};return e(DT,{"data-testid":`${u}-edit-display`,children:[e(kT,{children:[p&&t(MT,{thumbnailImageDataUrl:p}),e(_T,{children:[e(OT,{ref:w,children:[t(ET,{weight:"semibold",children:m}),t(TT,{children:zT.formatFileSizeDisplay(f)})]}),t(ST.Textarea,{ref:x,id:`${u}-description-textarea`,"data-testid":`${u}-textarea`,value:v,maxLength:n,onChange:e=>{y(e.target.value)},onBlur:e=>{l(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),e(IT,{$thumbnail:!!p,children:[t(FT,{"data-testid":`${u}-save-button`,type:"button",disabled:0===v.trim().length,onClick:()=>{x.current&&i(x.current.value.trim())},children:"Save"}),t(FT,{type:"button",styleType:"secondary","data-testid":`${u}-cancel-button`,onClick:a,children:"Cancel"})]})]})},PT=_.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${Ai["spacing-16"]};
    }

    ${e=>e.$disabled&&"none"===e.$focusType?O`
                cursor: not-allowed;
            `:e.$sortable&&"self"===e.$focusType?O`
                cursor: grabbing;
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:e.$sortable?O`
                :hover {
                    cursor: grab;
                }
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:void 0}
`,LT=_(Me)`
    margin-right: ${Ai["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${Ti.icon};

    ${e=>e.$active?O`
                color: ${Ti["icon-primary"]};
            `:e.$disabled?O`
                color: ${Ti["icon-disabled"]};
            `:void 0};
`,NT=_.div`
    background: ${Ti["bg-primary-subtlest"]};
    border: ${Mi["width-010"]} ${Mi.solid} ${Ti.border};
    border-radius: ${ji.sm};
    padding: ${Ai["spacing-16"]} ${Ai["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${zi.MaxWidth.sm} {
        padding: ${Ai["spacing-16"]};
    }

    ${e=>e.$focused?O`
                border-color: ${Ti["border-focus"]};
                box-shadow: 0 0 4px 1px
                    rgb(from ${Ti["border-focus"]} r g b / 50%);
            `:e.$disabled?O`
                border-color: ${Ti["border-disabled"]};
            `:e.$error?O`
                background: ${Ti["bg-error"]};
                border-color: ${Ti["border-error"]};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return O`
                ${zi.MaxWidth.sm} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,HT=_.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${zi.MaxWidth.sm} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return O`
                ${zi.MaxWidth.sm} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,WT=_.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,VT=_.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${zi.MaxWidth.sm} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,YT=_.div`
    display: flex;
    width: 5rem;
    margin-left: ${Ai["spacing-8"]};
    justify-content: flex-end;

    ${zi.MaxWidth.sm} {
        ${e=>e.$hideInMobile?O`
                    display: none;
                    visibility: hidden;
                `:O`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${Ai["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,UT=_(Hi.BodyMD)``,KT=_(UT)`
    margin-top: ${Ai["spacing-4"]};
`,qT=_(Hi.BodySM)`
    color: ${Ti["text-error"]};
`,GT=_(qT)`
    margin-top: ${Ai["spacing-4"]};
    ${zi.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,QT=_(qT)`
    display: none;
    visibility: hidden;
    ${zi.MaxWidth.sm} {
        display: block;
        visibility: visible;
        margin-top: ${Ai["spacing-8"]};
    }
`,ZT=_.div`
    width: 6rem;
    margin-left: ${Ai["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${zi.MaxWidth.sm} {
        width: fit-content;

        ${e=>e.$loading&&!e.$error?O`
                    margin-left: 0;
                    margin-top: ${Ai["spacing-16"]};
                    width: 100%;
                `:e.$editable&&!e.$error?O`
                    margin-left: 0;
                    margin-top: ${Ai["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,XT=_(lh)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${Ai["spacing-16"]};
    }
`,JT=_(cu)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${Ti.icon};
    }
`,eI=m((({fileItem:n,editable:o,sortable:i,wrapperWidth:a,disabled:l,readOnly:u,onDelete:d,onEditClick:f})=>{const{id:h,name:p,size:m,description:v,progress:y=1,errorMessage:x,thumbnailImageDataUrl:w,truncateText:$=!0}=n,[C,S]=g(),{activeId:D}=b(Ae),{attributes:k,listeners:_,setNodeRef:O,transform:E,transition:T}=bl({id:h}),I=s(null),F={transform:ba.Translate.toString(E),transition:T},M=Object.assign(Object.assign({style:F},k),_),A=y<1,j=zT.formatFileSizeDisplay(m),R=D?D===h?"self":"others":"none";c((()=>{S(L(p))}),[a]);const z=()=>{d()},B=()=>{f&&f()},P=e=>{i&&e.stopPropagation()},L=e=>{if(!$)return e;const t=I&&I.current?I.current.getBoundingClientRect().width:0;return Vc.truncateOneLine(e,t,t/2,t/2/8,16)},N=()=>l||!!D,H=()=>!!i&&!u,W=()=>e(r,{children:[t(UT,{weight:v?"semibold":"regular",children:C}),v&&t(KT,{children:v})]});return e(PT,Object.assign({id:h,ref:O,$sortable:H(),$disabled:N(),$focusType:R},H()?M:{},{children:[H()&&t(LT,{"data-testid":`${h}-drag-handle`,$disabled:N(),$active:"self"===R}),e(NT,{$focused:"self"===R,$error:!!x,$loading:A,$disabled:N(),$editable:o,children:[(()=>{let n;return n=x?e(r,{children:[e(WT,{ref:I,children:[W(),x&&t(GT,{weight:"semibold",children:x})]}),t(YT,{children:t(UT,{children:j})}),x&&t(QT,{weight:"semibold",children:x})]}):w?(n=>e(r,{children:[t(MT,{thumbnailImageDataUrl:n,"data-testid":`${h}-thumbnail`}),e(VT,{children:[t(WT,{ref:I,children:W()}),t(YT,{children:t(UT,{children:j})})]})]}))(w):e(r,{children:[t(WT,{ref:I,children:W()}),t(YT,{$hideInMobile:A,children:t(UT,{children:j})})]}),t(HT,{$hasThumbnail:!!w,children:n})})(),!u&&(()=>{let n;return n=x?t(JT,{onClick:z,"data-testid":`${h}-error-delete-button`,"aria-label":`delete-${p}`,children:t(te,{"aria-hidden":!0})}):A?t(ih,{progress:y,"data-testid":`${h}-progress-bar`}):e(r,{children:[o&&t(XT,{"data-testid":`${h}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${p}`,disabled:N(),onClick:B,onKeyDown:P,children:t(Fe,{"aria-hidden":!0})},"edit"),t(XT,{"data-testid":`${h}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${p}`,disabled:N(),onClick:z,onKeyDown:P,children:t(Ie,{"aria-hidden":!0})},"delete")]}),t(ZT,{$editable:o,$error:!!x,$loading:A,children:n})})()]})]}))})),tI=_.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":Ai["spacing-32"]};
`,rI=_.li`
    border-top: ${Mi["width-010"]} ${Mi.solid} ${Ti.border};
    border-bottom: ${Mi["width-010"]} ${Mi.solid} ${Ti.border};

    :not(:last-child) {
        margin-bottom: ${Ai["spacing-32"]};
    }

    :not(:first-child) {
        margin-top: ${Ai["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`,nI=({fileItems:e,editableFileItems:r,fileDescriptionMaxLength:n,sortable:o,disabled:i,readOnly:l,onItemUpdate:u,onItemDelete:d,onSort:f})=>{const[h,p]=g({}),{setActiveId:m}=b(Ae),{width:v=0,ref:y}=mc(),x=s({}),w=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return a((()=>[...t].filter((e=>null!=e))),[...t])}(Ea(bc,{activationConstraint:{distance:8}}),Ea($s,{activationConstraint:{delay:150,tolerance:5}}),Ea(fs,{coordinateGetter:xl})),$=e=>{delete x.current[e]};c((()=>{p(F(e))}),[e]);const C=e=>t=>{M(e.id,"display"),$(e.id);const r=Object.assign(Object.assign({},e),{description:t});u(r)},S=e=>t=>{x.current[e.id]=t},D=e=>()=>{e.description&&0!==e.description.length?M(e.id,"display"):d(e),$(e.id)},k=e=>()=>{M(e.id,"edit")},_=e=>()=>{d(e)},O=t=>{if(f&&e){const{active:r,over:n}=t;if(n&&r.id!==n.id){const t=e.findIndex((e=>e.id===r.id)),o=e.findIndex((e=>e.id===n.id)),i=rl(e,t,o);f(i)}}m(void 0)},E=e=>{const{active:t}=e;m(t.id)},T=e=>r&&zT.isSupportedImageType(e.type),I=e=>!e.errorMessage&&!l&&!("number"==typeof e.progress&&e.progress<1)&&T(e)&&!e.description,F=e=>{if(!e||0===e.length)return{};const t={};for(const r of e)r.errorMessage?t[r.id]="error":h[r.id]?t[r.id]=h[r.id]:t[r.id]=I(r)?"edit":"display";return t},M=(e,t)=>{p((r=>Object.assign(Object.assign({},r),{[e]:t})))},A=()=>e&&e.length>1&&o&&Object.values(h).every((e=>"display"===e)),j=()=>{const r=((e,t)=>{if(!e||0===e.length)return[];const r=[];for(const n of e)if("edit"===t[n.id]){const e=r[r.length-1];Array.isArray(e)?e.push(n):r.push([n])}else r.push(n);return r})(e,h);return 0===r.length?null:r.map(((e,r)=>Array.isArray(e)?((e,r)=>{const o=e.map((e=>{const r=Object.assign({},e);return void 0!==x.current[e.id]&&(r.description=x.current[e.id]),t(BT,{fileItem:r,wrapperWidth:v,fileDescriptionMaxLength:n,onSave:C(e),onCancel:D(e),onBlur:S(e)},e.id)}));return t(rI,{children:t("ul",{children:o})},`editable-${r}`)})(e,r):t(eI,{fileItem:e,editable:T(e),wrapperWidth:v,sortable:A(),disabled:i,readOnly:l,onDelete:_(e),onEditClick:k(e)},e.id)))};return e&&0!==e.length?i||l||!A()?t(tI,{$readOnly:l,ref:y,children:j()}):t(Zs,{sensors:w,onDragEnd:O,onDragStart:E,children:t(ul,{items:e,strategy:sl,children:t(tI,{$readOnly:l,ref:y,children:j()})})}):null},oI=_.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${Ai["spacing-32"]};
    gap: ${Ai["spacing-8"]};
`,iI=_(Hi.BodyBL)``,aI=_.div`
    color: ${Ti.text};
    ${hu({textSize:"body-baseline"})}
`,sI=_(Hi.BodyMD)`
    color: ${Ti["text-subtler"]};
`,lI=_.div`
    color: ${Ti.text};
    ${hu({textSize:"body-md"})}
`,cI=_(SE)`
    margin-bottom: ${Ai["spacing-32"]};
`,uI=_.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${zi.MaxWidth.sm} {
        align-items: flex-start;
    }
`,dI=_(Ed.Small)`
    width: 10rem;

    ${zi.MaxWidth.sm} {
        width: 100%;
    }
`,fI=_.label`
    ${Ii["body-md-semibold"]}
    color: ${Ti["text-subtler"]};
    margin-top: ${Ai["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${zi.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,hI=_(SE)`
    margin-bottom: ${Ai["spacing-32"]};
`,pI=({styleType:r="bordered",fileItems:n,title:o,description:i,maxFiles:a,warning:l,className:c,name:u,id:d,"data-testid":f,accept:h,capture:p,multiple:m,disabled:b,sortable:v=!1,fileDescriptionMaxLength:y,editableFileItems:x=!1,errorMessage:w,readOnly:$,onChange:C,onDelete:S,onEdit:D,onSort:k})=>{const _=s(null),[O,E]=g(),T=()=>!(!a||!n)&&n.length>=a;return t(Ae.Provider,{value:{activeId:O,setActiveId:E},children:e(Gi,{ref:_,onChange:e=>{!b&&C&&C(e)},id:d?`${d}-dropzone`:"dropzone",accept:h,capture:p,border:"bordered"===r,className:c,"data-testid":f,name:u,multiple:m,disabled:b||T()||$,children:[!(!o&&!i)&&e(oI,{children:[o?t("string"==typeof o?iI:aI,{children:o}):null,i?t("string"==typeof i?sI:lI,{children:i}):null]}),!!l&&t(cI,{type:"warning",children:l}),t(nI,{fileItems:n,editableFileItems:x,fileDescriptionMaxLength:y,sortable:v,disabled:b,readOnly:$,onItemDelete:e=>{S&&S(e)},onItemUpdate:e=>{D&&D(e)},onSort:e=>{k&&k(e)}}),w&&t(hI,{type:"error",children:w}),!$&&e(uI,{children:[t(dI,{type:"button",styleType:"secondary",disabled:!!O||b||T(),onClick:e=>{b||(e.preventDefault(),_.current&&_.current.openFileDialog())},children:"Upload files"}),t(fI,{children:"or drop them here"})]})]})})};export{Ti as C,pI as F,_h as S,ut as _,Oh as a,ze as g};
//# sourceMappingURL=index.79f442c1.js.map
