import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{createContext as i,useMemo as a,useRef as s,useReducer as l,useEffect as c,useCallback as u,forwardRef as d,useImperativeHandle as f,Fragment as h,useLayoutEffect as p,useState as g,memo as m,useContext as b,isValidElement as v,createRef as y,cloneElement as x,PureComponent as w,Children as $,lazy as C,Suspense as S,createElement as D}from"react";import{CloudArrowUpFillIcon as k}from"@lifesg/react-icons/cloud-arrow-up-fill";import _,{css as O,useTheme as E,keyframes as T}from"styled-components";import{ExternalIcon as I}from"@lifesg/react-icons/external";import F,{unstable_batchedUpdates as M,createPortal as A,findDOMNode as j}from"react-dom";import{ICircleFillIcon as z}from"@lifesg/react-icons/i-circle-fill";import{useFloatingTree as R,FloatingTree as B,useFloatingNodeId as P,FloatingNode as L,useFloating as N,autoUpdate as H,offset as W,flip as V,shift as Y,limitShift as U,useClick as K,useDismiss as q,useHover as G,useInteractions as Q,FloatingPortal as Z,FloatingFocusManager as X,size as J,useTransitionStyles as ee}from"@floating-ui/react";import{CrossIcon as te}from"@lifesg/react-icons/cross";import{ChevronDownIcon as re}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as ne}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as oe}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as ie,PencilIcon as ae,EraserIcon as se,SquareIcon as le,SquareFillIcon as ce,SquareTickFillIcon as ue,MinusSquareFillIcon as de,CrossIcon as fe,ChevronDownIcon as he}from"@lifesg/react-icons";import{ExclamationCircleFillIcon as pe}from"@lifesg/react-icons/exclamation-circle-fill";import{MagnifierIcon as ge}from"@lifesg/react-icons/magnifier";import{EyeIcon as me}from"@lifesg/react-icons/eye";import{EyeSlashIcon as be}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as ve}from"@lifesg/react-icons/exclamation-triangle";import{SquareIcon as ye}from"@lifesg/react-icons/square";import{SquareTickFillIcon as xe}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as we}from"@lifesg/react-icons/tick";import{CaretRightIcon as $e}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as Ce}from"@lifesg/react-icons/minus-square-fill";import{ChevronUpIcon as Se}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as De}from"@lifesg/react-icons/arrow-right";import{ExclamationTriangleFillIcon as ke}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as _e}from"@lifesg/react-icons/tick-circle-fill";import{CircleIcon as Oe}from"@lifesg/react-icons/circle";import{CircleDotIcon as Ee}from"@lifesg/react-icons/circle-dot";import{BinIcon as Te}from"@lifesg/react-icons/bin";import{PencilIcon as Ie}from"@lifesg/react-icons/pencil";import{DragHandleIcon as Fe}from"@lifesg/react-icons/drag-handle";const Me=i({activeId:void 0,setActiveId:()=>{}});var Ae="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function je(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ze(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var Re,Be={exports:{}},Pe={exports:{}},Le={};var Ne,He,We,Ve,Ye,Ue,Ke,qe,Ge,Qe,Ze,Xe,Je,et,tt={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function rt(){return He||(He=1,"production"===process.env.NODE_ENV?Pe.exports=function(){if(Re)return Le;Re=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:switch(e=e.type){case l:case c:case n:case i:case o:case d:return e;default:switch(e=e&&e.$$typeof){case s:case u:case p:case h:case a:return e;default:return f}}case r:return f}}}function x(e){return y(e)===c}return Le.AsyncMode=l,Le.ConcurrentMode=c,Le.ContextConsumer=s,Le.ContextProvider=a,Le.Element=t,Le.ForwardRef=u,Le.Fragment=n,Le.Lazy=p,Le.Memo=h,Le.Portal=r,Le.Profiler=i,Le.StrictMode=o,Le.Suspense=d,Le.isAsyncMode=function(e){return x(e)||y(e)===l},Le.isConcurrentMode=x,Le.isContextConsumer=function(e){return y(e)===s},Le.isContextProvider=function(e){return y(e)===a},Le.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Le.isForwardRef=function(e){return y(e)===u},Le.isFragment=function(e){return y(e)===n},Le.isLazy=function(e){return y(e)===p},Le.isMemo=function(e){return y(e)===h},Le.isPortal=function(e){return y(e)===r},Le.isProfiler=function(e){return y(e)===i},Le.isStrictMode=function(e){return y(e)===o},Le.isSuspense=function(e){return y(e)===d},Le.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===i||e===o||e===d||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===u||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},Le.typeOf=y,Le}():Pe.exports=(Ne||(Ne=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:var g=e.type;switch(g){case l:case c:case n:case i:case o:case d:return g;default:var m=g&&g.$$typeof;switch(m){case s:case u:case p:case h:case a:return m;default:return f}}case r:return f}}}var x=l,w=c,$=s,C=a,S=t,D=u,k=n,_=p,O=h,E=r,T=i,I=o,F=d,M=!1;function A(e){return y(e)===c}tt.AsyncMode=x,tt.ConcurrentMode=w,tt.ContextConsumer=$,tt.ContextProvider=C,tt.Element=S,tt.ForwardRef=D,tt.Fragment=k,tt.Lazy=_,tt.Memo=O,tt.Portal=E,tt.Profiler=T,tt.StrictMode=I,tt.Suspense=F,tt.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||y(e)===l},tt.isConcurrentMode=A,tt.isContextConsumer=function(e){return y(e)===s},tt.isContextProvider=function(e){return y(e)===a},tt.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},tt.isForwardRef=function(e){return y(e)===u},tt.isFragment=function(e){return y(e)===n},tt.isLazy=function(e){return y(e)===p},tt.isMemo=function(e){return y(e)===h},tt.isPortal=function(e){return y(e)===r},tt.isProfiler=function(e){return y(e)===i},tt.isStrictMode=function(e){return y(e)===o},tt.isSuspense=function(e){return y(e)===d},tt.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===i||e===o||e===d||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===u||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},tt.typeOf=y}()),tt)),Pe.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function nt(){if(Ve)return We;Ve=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;return We=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(n,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))t.call(i,c)&&(s[c]=i[c]);if(e){a=e(i);for(var u=0;u<a.length;u++)r.call(i,a[u])&&(s[a[u]]=i[a[u]])}}return s},We}function ot(){if(Ue)return Ye;Ue=1;return Ye="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function it(){return qe?Ke:(qe=1,Ke=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var at=rt();Be.exports=function(){if(Xe)return Ze;Xe=1;var e=rt(),t=nt(),r=ot(),n=it(),o=function(){if(Qe)return Ge;Qe=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=ot(),r={},n=it();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function o(o,i,a,s,l){if("production"!==process.env.NODE_ENV)for(var c in o)if(n(o,c)){var u;try{if("function"!=typeof o[c]){var d=Error((s||"React class")+": "+a+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=o[c](i,c,s,a,null,t)}catch(e){u=e}if(!u||u instanceof Error||e((s||"React class")+": type specification of "+a+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in r)){r[u.message]=!0;var f=l?l():"";e("Failed "+a+" type: "+u.message+(null!=f?f:""))}}}return o.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},Ge=o}(),i=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(i=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),Ze=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,u="<<anonymous>>",d={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:p(a),arrayOf:function(e){return p((function(t,n,o,i,a){if("function"!=typeof e)return new h("Property `"+a+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new h("Invalid "+i+" `"+a+"` of type `"+v(s)+"` supplied to `"+o+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,o,i,a+"["+l+"]",r);if(c instanceof Error)return c}return null}))},element:p((function(e,t,r,n,o){var i=e[t];return s(i)?null:new h("Invalid "+n+" `"+o+"` of type `"+v(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:p((function(t,r,n,o,i){var a=t[r];return e.isValidElementType(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,o,i){if(!(t[r]instanceof e)){var a=e.name||u;return new h("Invalid "+o+" `"+i+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:p((function(e,t,r,n,o){return b(e[t])?null:new h("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,o,i,a,s){if("function"!=typeof e)return new h("Property `"+s+"` of component `"+i+"` has invalid PropType notation inside objectOf.");var l=t[o],c=v(l);if("object"!==c)return new h("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+i+"`, expected an object.");for(var u in l)if(n(l,u)){var d=e(l,u,i,a,s+"."+u,r);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,o,i){for(var a=t[r],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&i(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&i("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var o=e[t];if("function"!=typeof o)return i("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(o)+" at index "+t+"."),a}return p((function(t,o,i,a,s){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,o,i,a,s,r);if(null==u)return null;u.data&&n(u.data,"expectedType")&&l.push(u.data.expectedType)}return new h("Invalid "+a+" `"+s+"` supplied to `"+i+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,n,o,i,a){var s=t[n],l=v(s);if("object"!==l)return new h("Invalid "+i+" `"+a+"` of type `"+l+"` supplied to `"+o+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return m(o,i,a,c,y(u));var d=u(s,c,o,i,a+"."+c,r);if(d)return d}return null}))},exact:function(e){return p((function(o,i,a,s,l){var c=o[i],u=v(c);if("object"!==u)return new h("Invalid "+s+" `"+l+"` of type `"+u+"` supplied to `"+a+"`, expected `object`.");var d=t({},o[i],e);for(var f in d){var p=e[f];if(n(e,f)&&"function"!=typeof p)return m(a,s,l,f,y(p));if(!p)return new h("Invalid "+s+" `"+l+"` key `"+f+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(o[i],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=p(c,f,a,s,l+"."+f,r);if(g)return g}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){if("production"!==process.env.NODE_ENV)var t={},n=0;function o(o,a,s,c,d,f,p){if(c=c||u,f=f||s,p!==r){if(l){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=c+":"+s;!t[m]&&n<3&&(i("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,n++)}}return null==a[s]?o?null===a[s]?new h("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new h("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,s,c,d,f)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function g(e){return p((function(t,r,n,o,i,a){var s=t[r];return v(s)!==e?new h("Invalid "+o+" `"+i+"` of type `"+y(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,r,n,o){return new h((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function b(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(b);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(!t)return!1;var r,n=t.call(e);if(t!==e.entries){for(;!(r=n.next()).done;)if(!b(r.value))return!1}else for(;!(r=n.next()).done;){var o=r.value;if(o&&!b(o[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,d.checkPropTypes=o,d.resetWarningCache=o.resetWarningCache,d.PropTypes=d,d},Ze}()(at.isElement,!0)}else Be.exports=function(){if(et)return Je;et=1;var e=ot();function t(){}function r(){}return r.resetWarningCache=t,Je=function(){function n(t,r,n,o,i,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function o(){return n}n.isRequired=n;var i={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:t};return i.PropTypes=i,i}}()();var st=je(Be.exports);function lt(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function ct(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}function ut(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function dt(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function ft(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var ht=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function pt(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=ht.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"==typeof t?t:"string"==typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var gt=[".DS_Store","Thumbs.db"];function mt(e){return"object"==typeof e&&null!==e}function bt(e){return wt(e.target.files).map((function(e){return pt(e)}))}function vt(e){return ct(this,void 0,void 0,(function(){return ut(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return pt(e)}))]}}))}))}function yt(e,t){return ct(this,void 0,void 0,(function(){var r;return ut(this,(function(n){switch(n.label){case 0:return e.items?(r=wt(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map($t))]):[3,2];case 1:return[2,xt(Ct(n.sent()))];case 2:return[2,xt(wt(e.files).map((function(e){return pt(e)})))]}}))}))}function xt(e){return e.filter((function(e){return-1===gt.indexOf(e.name)}))}function wt(e){if(null===e)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function $t(e){if("function"!=typeof e.webkitGetAsEntry)return St(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?kt(t):St(e)}function Ct(e){return e.reduce((function(e,t){return ft(ft([],dt(e),!1),dt(Array.isArray(t)?Ct(t):[t]),!1)}),[])}function St(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=pt(t);return Promise.resolve(r)}function Dt(e){return ct(this,void 0,void 0,(function(){return ut(this,(function(t){return[2,e.isDirectory?kt(e):_t(e)]}))}))}function kt(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function o(){var i=this;t.readEntries((function(t){return ct(i,void 0,void 0,(function(){var i,a,s;return ut(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return i=l.sent(),e(i),[3,4];case 3:return a=l.sent(),r(a),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(Dt)),n.push(s),o(),l.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function _t(e){return ct(this,void 0,void 0,(function(){return ut(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=pt(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}function Ot(e){return function(e){if(Array.isArray(e))return At(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Mt(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Et(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Tt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Et(Object(r),!0).forEach((function(t){It(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Et(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function It(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ft(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}(e,t)||Mt(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Mt(e,t){if(e){if("string"==typeof e)return At(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?At(e,t):void 0}}function At(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var jt=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},zt=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},Rt=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},Bt={code:"too-many-files",message:"Too many files"};function Pt(e,t){var r="application/x-moz-file"===e.type||function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}(e,t);return[r,r?null:jt(t)]}function Lt(e,t,r){if(Nt(e.size))if(Nt(t)&&Nt(r)){if(e.size>r)return[!1,zt(r)];if(e.size<t)return[!1,Rt(t)]}else{if(Nt(t)&&e.size<t)return[!1,Rt(t)];if(Nt(r)&&e.size>r)return[!1,zt(r)]}return[!0,null]}function Nt(e){return null!=e}function Ht(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function Wt(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function Vt(e){e.preventDefault()}function Yt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return t.some((function(t){return!Ht(e)&&t&&t.apply(void 0,[e].concat(n)),Ht(e)}))}}function Ut(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function Kt(e){return/^.*\.[\w]+$/.test(e)}var qt=["children"],Gt=["open"],Qt=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Zt=["refKey","onChange","onClick"];function Xt(e){return function(e){if(Array.isArray(e))return tr(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||er(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Jt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}(e,t)||er(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function er(e,t){if(e){if("string"==typeof e)return tr(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?tr(e,t):void 0}}function tr(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function rr(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function nr(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?rr(Object(r),!0).forEach((function(t){or(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):rr(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function or(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ir(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var ar=d((function(e,t){var r=e.children,n=cr(ir(e,qt)),i=n.open,a=ir(n,Gt);return f(t,(function(){return{open:i}}),[i]),o.createElement(h,null,r(nr(nr({},a),{},{open:i})))}));ar.displayName="Dropzone";var sr={disabled:!1,getFilesFromEvent:function(e){return ct(this,void 0,void 0,(function(){return ut(this,(function(t){return mt(e)&&mt(e.dataTransfer)?[2,yt(e.dataTransfer,e.type)]:function(e){return mt(e)&&mt(e.target)}(e)?[2,bt(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,vt(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};ar.defaultProps=sr,ar.propTypes={children:st.func,accept:st.objectOf(st.arrayOf(st.string)),multiple:st.bool,preventDropOnDocument:st.bool,noClick:st.bool,noKeyboard:st.bool,noDrag:st.bool,noDragEventsBubbling:st.bool,minSize:st.number,maxSize:st.number,maxFiles:st.number,disabled:st.bool,getFilesFromEvent:st.func,onFileDialogCancel:st.func,onFileDialogOpen:st.func,useFsAccessApi:st.bool,autoFocus:st.bool,onDragEnter:st.func,onDragLeave:st.func,onDragOver:st.func,onDrop:st.func,onDropAccepted:st.func,onDropRejected:st.func,onError:st.func,validator:st.func};var lr={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function cr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=nr(nr({},sr),e),r=t.accept,n=t.disabled,o=t.getFilesFromEvent,i=t.maxSize,d=t.minSize,f=t.multiple,h=t.maxFiles,p=t.onDragEnter,g=t.onDragLeave,m=t.onDragOver,b=t.onDrop,v=t.onDropAccepted,y=t.onDropRejected,x=t.onFileDialogCancel,w=t.onFileDialogOpen,$=t.useFsAccessApi,C=t.autoFocus,S=t.preventDropOnDocument,D=t.noClick,k=t.noKeyboard,_=t.noDrag,O=t.noDragEventsBubbling,E=t.onError,T=t.validator,I=a((function(){return function(e){if(Nt(e))return Object.entries(e).reduce((function(e,t){var r=Ft(t,2),n=r[0],o=r[1];return[].concat(Ot(e),[n],Ot(o))}),[]).filter((function(e){return Ut(e)||Kt(e)})).join(",")}(r)}),[r]),F=a((function(){return function(e){return Nt(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=Ft(e,2),r=t[0],n=t[1],o=!0;return Ut(r)||(console.warn('Skipped "'.concat(r,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(n)&&n.every(Kt)||(console.warn('Skipped "'.concat(r,'" because an invalid file extension was provided.')),o=!1),o})).reduce((function(e,t){var r=Ft(t,2),n=r[0],o=r[1];return Tt(Tt({},e),{},It({},n,o))}),{})}]:e}(r)}),[r]),M=a((function(){return"function"==typeof w?w:dr}),[w]),A=a((function(){return"function"==typeof x?x:dr}),[x]),j=s(null),z=s(null),R=Jt(l(ur,lr),2),B=R[0],P=R[1],L=B.isFocused,N=B.isFileDialogActive,H=s("undefined"!=typeof window&&window.isSecureContext&&$&&"showOpenFilePicker"in window),W=function(){!H.current&&N&&setTimeout((function(){z.current&&(z.current.files.length||(P({type:"closeDialog"}),A()))}),300)};c((function(){return window.addEventListener("focus",W,!1),function(){window.removeEventListener("focus",W,!1)}}),[z,N,A,H]);var V=s([]),Y=function(e){j.current&&j.current.contains(e.target)||(e.preventDefault(),V.current=[])};c((function(){return S&&(document.addEventListener("dragover",Vt,!1),document.addEventListener("drop",Y,!1)),function(){S&&(document.removeEventListener("dragover",Vt),document.removeEventListener("drop",Y))}}),[j,S]),c((function(){return!n&&C&&j.current&&j.current.focus(),function(){}}),[j,C,n]);var U=u((function(e){E?E(e):console.error(e)}),[E]),K=u((function(e){e.preventDefault(),e.persist(),ae(e),V.current=[].concat(Xt(V.current),[e.target]),Wt(e)&&Promise.resolve(o(e)).then((function(t){if(!Ht(e)||O){var r=t.length,n=r>0&&function(e){var t=e.files,r=e.accept,n=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,s=e.validator;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=Ft(Pt(e,r),1)[0],i=Ft(Lt(e,n,o),1)[0],a=s?s(e):null;return t&&i&&!a}))}({files:t,accept:I,minSize:d,maxSize:i,multiple:f,maxFiles:h,validator:T});P({isDragAccept:n,isDragReject:r>0&&!n,isDragActive:!0,type:"setDraggedFiles"}),p&&p(e)}})).catch((function(e){return U(e)}))}),[o,p,U,O,I,d,i,f,h,T]),q=u((function(e){e.preventDefault(),e.persist(),ae(e);var t=Wt(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&m&&m(e),!1}),[m,O]),G=u((function(e){e.preventDefault(),e.persist(),ae(e);var t=V.current.filter((function(e){return j.current&&j.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),V.current=t,t.length>0||(P({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Wt(e)&&g&&g(e))}),[j,g,O]),Q=u((function(e,t){var r=[],n=[];e.forEach((function(e){var t=Jt(Pt(e,I),2),o=t[0],a=t[1],s=Jt(Lt(e,d,i),2),l=s[0],c=s[1],u=T?T(e):null;if(o&&l&&!u)r.push(e);else{var f=[a,c];u&&(f=f.concat(u)),n.push({file:e,errors:f.filter((function(e){return e}))})}})),(!f&&r.length>1||f&&h>=1&&r.length>h)&&(r.forEach((function(e){n.push({file:e,errors:[Bt]})})),r.splice(0)),P({acceptedFiles:r,fileRejections:n,type:"setFiles"}),b&&b(r,n,t),n.length>0&&y&&y(n,t),r.length>0&&v&&v(r,t)}),[P,f,I,d,i,h,b,v,y,T]),Z=u((function(e){e.preventDefault(),e.persist(),ae(e),V.current=[],Wt(e)&&Promise.resolve(o(e)).then((function(t){Ht(e)&&!O||Q(t,e)})).catch((function(e){return U(e)})),P({type:"reset"})}),[o,Q,U,O]),X=u((function(){if(H.current){P({type:"openDialog"}),M();var e={multiple:f,types:F};window.showOpenFilePicker(e).then((function(e){return o(e)})).then((function(e){Q(e,null),P({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(A(e),P({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?U(e):(H.current=!1,z.current?(z.current.value=null,z.current.click()):U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else z.current&&(P({type:"openDialog"}),M(),z.current.value=null,z.current.click())}),[P,M,A,$,Q,U,F,f]),J=u((function(e){j.current&&j.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),X()))}),[j,X]),ee=u((function(){P({type:"focus"})}),[]),te=u((function(){P({type:"blur"})}),[]),re=u((function(){D||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?X():setTimeout(X,0))}),[D,X]),ne=function(e){return n?null:e},oe=function(e){return k?null:ne(e)},ie=function(e){return _?null:ne(e)},ae=function(e){O&&e.stopPropagation()},se=a((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,o=e.role,i=e.onKeyDown,a=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,u=e.onDragOver,d=e.onDragLeave,f=e.onDrop,h=ir(e,Qt);return nr(nr(or({onKeyDown:oe(Yt(i,J)),onFocus:oe(Yt(a,ee)),onBlur:oe(Yt(s,te)),onClick:ne(Yt(l,re)),onDragEnter:ie(Yt(c,K)),onDragOver:ie(Yt(u,q)),onDragLeave:ie(Yt(d,G)),onDrop:ie(Yt(f,Z)),role:"string"==typeof o&&""!==o?o:"presentation"},r,j),n||k?{}:{tabIndex:0}),h)}}),[j,J,ee,te,re,K,q,G,Z,k,_,n]),le=u((function(e){e.stopPropagation()}),[]),ce=a((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onChange,o=e.onClick,i=ir(e,Zt);return nr(nr({},or({accept:I,multiple:f,type:"file",style:{display:"none"},onChange:ne(Yt(n,Z)),onClick:ne(Yt(o,le)),tabIndex:-1},r,z)),i)}}),[z,r,f,Z,n]);return nr(nr({},B),{},{isFocused:L&&!n,getRootProps:se,getInputProps:ce,rootRef:j,inputRef:z,open:ne(X)})}function ur(e,t){switch(t.type){case"focus":return nr(nr({},e),{},{isFocused:!0});case"blur":return nr(nr({},e),{},{isFocused:!1});case"openDialog":return nr(nr({},lr),{},{isFileDialogActive:!0});case"closeDialog":return nr(nr({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return nr(nr({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return nr(nr({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return nr({},lr);default:return e}}function dr(){}var fr=Array.isArray,hr="object"==typeof Ae&&Ae&&Ae.Object===Object&&Ae,pr=hr,gr="object"==typeof self&&self&&self.Object===Object&&self,mr=pr||gr||Function("return this")(),br=mr.Symbol,vr=br,yr=Object.prototype,xr=yr.hasOwnProperty,wr=yr.toString,$r=vr?vr.toStringTag:void 0;var Cr=function(e){var t=xr.call(e,$r),r=e[$r];try{e[$r]=void 0;var n=!0}catch(e){}var o=wr.call(e);return n&&(t?e[$r]=r:delete e[$r]),o},Sr=Object.prototype.toString;var Dr=Cr,kr=function(e){return Sr.call(e)},_r=br?br.toStringTag:void 0;var Or=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":_r&&_r in Object(e)?Dr(e):kr(e)};var Er=function(e){return null!=e&&"object"==typeof e},Tr=Or,Ir=Er;var Fr=function(e){return"symbol"==typeof e||Ir(e)&&"[object Symbol]"==Tr(e)},Mr=fr,Ar=Fr,jr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zr=/^\w*$/;var Rr=function(e,t){if(Mr(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ar(e))||(zr.test(e)||!jr.test(e)||null!=t&&e in Object(t))};var Br=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Pr=Or,Lr=Br;var Nr,Hr=function(e){if(!Lr(e))return!1;var t=Pr(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Wr=mr["__core-js_shared__"],Vr=(Nr=/[^.]+$/.exec(Wr&&Wr.keys&&Wr.keys.IE_PROTO||""))?"Symbol(src)_1."+Nr:"";var Yr=function(e){return!!Vr&&Vr in e},Ur=Function.prototype.toString;var Kr=function(e){if(null!=e){try{return Ur.call(e)}catch(e){}try{return e+""}catch(e){}}return""},qr=Hr,Gr=Yr,Qr=Br,Zr=Kr,Xr=/^\[object .+?Constructor\]$/,Jr=Function.prototype,en=Object.prototype,tn=Jr.toString,rn=en.hasOwnProperty,nn=RegExp("^"+tn.call(rn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var on=function(e,t){return null==e?void 0:e[t]},an=function(e){return!(!Qr(e)||Gr(e))&&(qr(e)?nn:Xr).test(Zr(e))},sn=on;var ln=function(e,t){var r=sn(e,t);return an(r)?r:void 0},cn=ln(Object,"create"),un=cn;var dn=function(){this.__data__=un?un(null):{},this.size=0};var fn=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},hn=cn,pn=Object.prototype.hasOwnProperty;var gn=function(e){var t=this.__data__;if(hn){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return pn.call(t,e)?t[e]:void 0},mn=cn,bn=Object.prototype.hasOwnProperty;var vn=function(e){var t=this.__data__;return mn?void 0!==t[e]:bn.call(t,e)},yn=cn;var xn=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=yn&&void 0===t?"__lodash_hash_undefined__":t,this},wn=dn,$n=fn,Cn=gn,Sn=vn,Dn=xn;function kn(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}kn.prototype.clear=wn,kn.prototype.delete=$n,kn.prototype.get=Cn,kn.prototype.has=Sn,kn.prototype.set=Dn;var _n=kn;var On=function(){this.__data__=[],this.size=0};var En=function(e,t){return e===t||e!=e&&t!=t},Tn=En;var In=function(e,t){for(var r=e.length;r--;)if(Tn(e[r][0],t))return r;return-1},Fn=In,Mn=Array.prototype.splice;var An=function(e){var t=this.__data__,r=Fn(t,e);return!(r<0)&&(r==t.length-1?t.pop():Mn.call(t,r,1),--this.size,!0)},jn=In;var zn=function(e){var t=this.__data__,r=jn(t,e);return r<0?void 0:t[r][1]},Rn=In;var Bn=function(e){return Rn(this.__data__,e)>-1},Pn=In;var Ln=function(e,t){var r=this.__data__,n=Pn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Nn=On,Hn=An,Wn=zn,Vn=Bn,Yn=Ln;function Un(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Un.prototype.clear=Nn,Un.prototype.delete=Hn,Un.prototype.get=Wn,Un.prototype.has=Vn,Un.prototype.set=Yn;var Kn=Un,qn=ln(mr,"Map"),Gn=_n,Qn=Kn,Zn=qn;var Xn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Jn=function(e,t){var r=e.__data__;return Xn(t)?r["string"==typeof t?"string":"hash"]:r.map},eo=Jn;var to=function(e){var t=eo(this,e).delete(e);return this.size-=t?1:0,t},ro=Jn;var no=function(e){return ro(this,e).get(e)},oo=Jn;var io=function(e){return oo(this,e).has(e)},ao=Jn;var so=function(e,t){var r=ao(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},lo=function(){this.size=0,this.__data__={hash:new Gn,map:new(Zn||Qn),string:new Gn}},co=to,uo=no,fo=io,ho=so;function po(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}po.prototype.clear=lo,po.prototype.delete=co,po.prototype.get=uo,po.prototype.has=fo,po.prototype.set=ho;var go=po,mo=go;function bo(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(bo.Cache||mo),r}bo.Cache=mo;var vo=bo;var yo=function(e){var t=vo(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},xo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wo=/\\(\\)?/g,$o=yo((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(xo,(function(e,r,n,o){t.push(n?o.replace(wo,"$1"):r||e)})),t}));var Co=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},So=fr,Do=Fr,ko=br?br.prototype:void 0,_o=ko?ko.toString:void 0;var Oo=function e(t){if("string"==typeof t)return t;if(So(t))return Co(t,e)+"";if(Do(t))return _o?_o.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Eo=Oo;var To=fr,Io=Rr,Fo=$o,Mo=function(e){return null==e?"":Eo(e)};var Ao=function(e,t){return To(e)?e:Io(e,t)?[e]:Fo(Mo(e))},jo=Fr;var zo=function(e){if("string"==typeof e||jo(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Ro=Ao,Bo=zo;var Po=function(e,t){for(var r=0,n=(t=Ro(t,e)).length;null!=e&&r<n;)e=e[Bo(t[r++])];return r&&r==n?e:void 0},Lo=Po;var No=function(e,t,r){var n=null==e?void 0:Lo(e,t);return void 0===n?r:n},Ho=je(No);const Wo=(e,t,r)=>Ho(r,t)||Ho(e,t),Vo=(e,t)=>{const r=t||e.defaultValue;return Ho(e.collections,r)},Yo={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Uo=e=>t=>{var r;const n=t.theme,o=Vo(Yo,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Wo(o,e,n.overrides.border)}px`:`${o[e]}px`},Ko={"width-005":Uo("width-005"),"width-010":Uo("width-010"),"width-020":Uo("width-020"),"width-040":Uo("width-040"),solid:(qo="solid",e=>{var t;const r=e.theme,n=Vo(Yo,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Wo(n,qo,r.overrides.border):n[qo];return"function"==typeof o?o(e):o})};var qo;const Go={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Qo=e=>t=>{var r;const n=t.theme,o=Vo(Go,null==n?void 0:n.colourScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.primitiveColour)?Wo(o,e,n.overrides.primitiveColour):o[e]},Zo={"brand-10":Qo("brand-10"),"brand-20":Qo("brand-20"),"brand-30":Qo("brand-30"),"brand-40":Qo("brand-40"),"brand-50":Qo("brand-50"),"brand-60":Qo("brand-60"),"brand-70":Qo("brand-70"),"brand-80":Qo("brand-80"),"brand-90":Qo("brand-90"),"brand-95":Qo("brand-95"),"brand-100":Qo("brand-100"),"primary-10":Qo("primary-10"),"primary-20":Qo("primary-20"),"primary-30":Qo("primary-30"),"primary-40":Qo("primary-40"),"primary-50":Qo("primary-50"),"primary-60":Qo("primary-60"),"primary-70":Qo("primary-70"),"primary-80":Qo("primary-80"),"primary-90":Qo("primary-90"),"primary-95":Qo("primary-95"),"primary-100":Qo("primary-100"),"secondary-10":Qo("secondary-10"),"secondary-20":Qo("secondary-20"),"secondary-30":Qo("secondary-30"),"secondary-40":Qo("secondary-40"),"secondary-50":Qo("secondary-50"),"secondary-60":Qo("secondary-60"),"secondary-70":Qo("secondary-70"),"secondary-80":Qo("secondary-80"),"secondary-90":Qo("secondary-90"),"secondary-95":Qo("secondary-95"),"secondary-100":Qo("secondary-100"),"neutral-10":Qo("neutral-10"),"neutral-20":Qo("neutral-20"),"neutral-30":Qo("neutral-30"),"neutral-40":Qo("neutral-40"),"neutral-50":Qo("neutral-50"),"neutral-60":Qo("neutral-60"),"neutral-70":Qo("neutral-70"),"neutral-80":Qo("neutral-80"),"neutral-90":Qo("neutral-90"),"neutral-95":Qo("neutral-95"),"neutral-100":Qo("neutral-100"),"success-10":Qo("success-10"),"success-20":Qo("success-20"),"success-30":Qo("success-30"),"success-40":Qo("success-40"),"success-50":Qo("success-50"),"success-60":Qo("success-60"),"success-70":Qo("success-70"),"success-80":Qo("success-80"),"success-90":Qo("success-90"),"success-95":Qo("success-95"),"success-100":Qo("success-100"),"warning-10":Qo("warning-10"),"warning-20":Qo("warning-20"),"warning-30":Qo("warning-30"),"warning-40":Qo("warning-40"),"warning-50":Qo("warning-50"),"warning-60":Qo("warning-60"),"warning-70":Qo("warning-70"),"warning-80":Qo("warning-80"),"warning-90":Qo("warning-90"),"warning-95":Qo("warning-95"),"warning-100":Qo("warning-100"),"error-10":Qo("error-10"),"error-20":Qo("error-20"),"error-30":Qo("error-30"),"error-40":Qo("error-40"),"error-50":Qo("error-50"),"error-60":Qo("error-60"),"error-70":Qo("error-70"),"error-80":Qo("error-80"),"error-90":Qo("error-90"),"error-95":Qo("error-95"),"error-100":Qo("error-100"),"info-10":Qo("info-10"),"info-20":Qo("info-20"),"info-30":Qo("info-30"),"info-40":Qo("info-40"),"info-50":Qo("info-50"),"info-60":Qo("info-60"),"info-70":Qo("info-70"),"info-80":Qo("info-80"),"info-90":Qo("info-90"),"info-95":Qo("info-95"),"info-100":Qo("info-100"),white:Qo("white"),black:Qo("black"),"primary-inverse":Qo("primary-inverse")},Xo={text:Qo("neutral-20"),"text-subtle":Qo("neutral-30"),"text-subtler":Qo("neutral-50"),"text-subtlest":Qo("neutral-60"),"text-primary":Qo("primary-50"),"text-hover":Qo("primary-40"),"text-selected":Qo("primary-50"),"text-selected-hover":Qo("primary-40"),"text-disabled":Qo("neutral-50"),"text-disabled-subtle":Qo("neutral-60"),"text-disabled-subtlest":Qo("neutral-80"),"text-selected-disabled":Qo("neutral-20"),"text-success":Qo("success-40"),"text-warning":Qo("warning-40"),"text-error":Qo("error-40"),"text-info":Qo("info-40"),"text-inverse":Qo("white"),icon:Qo("neutral-50"),"icon-subtle":Qo("neutral-60"),"icon-strongest":Qo("neutral-20"),"icon-primary":Qo("primary-50"),"icon-primary-subtle":Qo("primary-60"),"icon-primary-subtlest":Qo("primary-70"),"icon-hover":Qo("primary-40"),"icon-selected":Qo("primary-50"),"icon-selected-hover":Qo("primary-40"),"icon-disabled":Qo("neutral-50"),"icon-disabled-subtle":Qo("neutral-60"),"icon-selected-disabled":Qo("neutral-60"),"icon-success":Qo("success-50"),"icon-warning":Qo("warning-60"),"icon-error":Qo("error-50"),"icon-error-strong":Qo("error-40"),"icon-info":Qo("info-50"),"icon-inverse":Qo("white"),"icon-primary-inverse":Qo("primary-inverse"),border:Qo("neutral-90"),"border-strong":Qo("neutral-70"),"border-stronger":Qo("neutral-50"),"border-primary":Qo("primary-50"),"border-primary-subtle":Qo("primary-60"),"border-hover":Qo("primary-90"),"border-hover-strong":Qo("primary-60"),"border-selected":Qo("primary-50"),"border-selected-subtle":Qo("primary-70"),"border-selected-subtlest":Qo("primary-90"),"border-selected-hover":Qo("primary-40"),"border-focus":Qo("primary-60"),"border-focus-strong":Qo("primary-50"),"border-disabled":Qo("neutral-90"),"border-selected-disabled":Qo("neutral-70"),"border-success":Qo("success-60"),"border-warning":Qo("warning-60"),"border-error":Qo("error-60"),"border-error-focus":Qo("error-60"),"border-error-focus-strong":Qo("error-40"),"border-error-strong":Qo("error-40"),"border-info":Qo("info-60"),bg:Qo("white"),"bg-strong":Qo("neutral-100"),"bg-stronger":Qo("neutral-95"),"bg-strongest":Qo("neutral-90"),"bg-hover":Qo("primary-95"),"bg-hover-strong":Qo("primary-90"),"bg-hover-subtle":Qo("primary-100"),"bg-hover-neutral":Qo("neutral-100"),"bg-hover-neutral-strong":Qo("neutral-90"),"bg-selected":Qo("primary-95"),"bg-selected-hover":Qo("primary-90"),"bg-selected-strong":Qo("primary-90"),"bg-selected-stronger":Qo("primary-70"),"bg-selected-strongest":Qo("primary-50"),"bg-selected-strongest-hover":Qo("primary-40"),"bg-disabled":Qo("neutral-95"),"bg-selected-disabled":Qo("neutral-95"),"bg-selected-stronger-disabled":Qo("neutral-70"),"bg-success":Qo("success-100"),"bg-success-hover":Qo("success-95"),"bg-success-strong":Qo("success-50"),"bg-success-strong-hover":Qo("success-40"),"bg-warning":Qo("warning-100"),"bg-warning-hover":Qo("warning-95"),"bg-warning-strong":Qo("warning-50"),"bg-warning-strong-hover":Qo("warning-40"),"bg-info":Qo("info-100"),"bg-info-hover":Qo("info-95"),"bg-info-strong":Qo("info-50"),"bg-info-strong-hover":Qo("info-40"),"bg-error":Qo("error-100"),"bg-error-hover":Qo("error-95"),"bg-error-strong":Qo("error-50"),"bg-error-strong-hover":Qo("error-40"),"bg-inverse":Qo("neutral-20"),"bg-inverse-subtle":Qo("neutral-30"),"bg-inverse-subtler":Qo("neutral-50"),"bg-inverse-subtlest":Qo("neutral-60"),"bg-inverse-hover":Qo("neutral-40"),"bg-primary":Qo("primary-50"),"bg-primary-subtle":Qo("primary-60"),"bg-primary-subtler":Qo("primary-95"),"bg-primary-subtlest":Qo("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Qo("primary-40"),"bg-primary-subtlest-hover":Qo("primary-90"),"bg-primary-subtlest-selected":Qo("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Qo("primary-50"),"hyperlink-hover":Qo("primary-40"),"hyperlink-visited":Qo("primary-40"),"hyperlink-inverse":Qo("primary-inverse"),"focus-ring":Qo("black"),"focus-ring-inverse":Qo("white")},Jo={collections:{lifesg:Xo,bookingsg:Xo,rbs:Xo,mylegacy:Xo,ccube:Xo,oneservice:Xo,pa:{text:Qo("neutral-30"),"text-subtle":Qo("neutral-40"),"text-subtler":Qo("neutral-50"),"text-subtlest":Qo("neutral-70"),"text-primary":Qo("neutral-10"),"text-hover":Qo("neutral-70"),"text-selected":Qo("neutral-20"),"text-selected-hover":Qo("neutral-10"),"text-disabled":Qo("neutral-50"),"text-disabled-subtle":Qo("neutral-60"),"text-disabled-subtlest":Qo("neutral-80"),"text-selected-disabled":Qo("neutral-40"),"text-success":Qo("success-40"),"text-warning":Qo("warning-40"),"text-error":Qo("brand-30"),"text-info":Qo("neutral-40"),"text-inverse":Qo("neutral-100"),icon:Qo("neutral-40"),"icon-subtle":Qo("neutral-50"),"icon-strongest":Qo("neutral-10"),"icon-primary":Qo("neutral-10"),"icon-primary-subtle":Qo("neutral-30"),"icon-primary-subtlest":Qo("neutral-60"),"icon-hover":Qo("neutral-70"),"icon-selected":Qo("brand-20"),"icon-selected-hover":Qo("brand-10"),"icon-disabled":Qo("neutral-50"),"icon-disabled-subtle":Qo("neutral-60"),"icon-selected-disabled":Qo("neutral-40"),"icon-success":Qo("success-40"),"icon-warning":Qo("warning-60"),"icon-error":Qo("brand-30"),"icon-error-strong":Qo("brand-10"),"icon-info":Qo("neutral-40"),"icon-inverse":Qo("neutral-100"),"icon-primary-inverse":"#F9B371",border:Qo("neutral-90"),"border-strong":Qo("neutral-30"),"border-stronger":Qo("neutral-20"),"border-primary":Qo("neutral-40"),"border-primary-subtle":Qo("neutral-60"),"border-hover":Qo("neutral-80"),"border-hover-strong":Qo("neutral-10"),"border-selected":Qo("brand-20"),"border-selected-subtle":Qo("neutral-40"),"border-selected-subtlest":Qo("neutral-70"),"border-selected-hover":Qo("neutral-10"),"border-focus":Qo("neutral-20"),"border-focus-strong":Qo("neutral-10"),"border-disabled":Qo("neutral-90"),"border-selected-disabled":Qo("neutral-80"),"border-success":Qo("success-40"),"border-warning":Qo("warning-60"),"border-error":Qo("brand-30"),"border-error-focus":Qo("brand-20"),"border-error-focus-strong":Qo("brand-10"),"border-error-strong":Qo("brand-20"),"border-info":Qo("neutral-40"),bg:Qo("neutral-100"),"bg-strong":Qo("neutral-95"),"bg-stronger":Qo("neutral-90"),"bg-strongest":Qo("neutral-80"),"bg-hover":Qo("brand-90"),"bg-hover-strong":Qo("brand-80"),"bg-hover-subtle":Qo("neutral-90"),"bg-hover-neutral":Qo("neutral-90"),"bg-hover-neutral-strong":Qo("neutral-90"),"bg-selected":Qo("brand-100"),"bg-selected-hover":Qo("brand-30"),"bg-selected-strong":Qo("brand-50"),"bg-selected-stronger":Qo("brand-40"),"bg-selected-strongest":Qo("brand-20"),"bg-selected-strongest-hover":Qo("brand-10"),"bg-disabled":Qo("neutral-90"),"bg-selected-disabled":Qo("neutral-90"),"bg-selected-stronger-disabled":Qo("neutral-80"),"bg-success":Qo("success-100"),"bg-success-hover":Qo("success-95"),"bg-success-strong":Qo("success-50"),"bg-success-strong-hover":Qo("success-40"),"bg-warning":Qo("warning-100"),"bg-warning-hover":Qo("warning-95"),"bg-warning-strong":Qo("warning-50"),"bg-warning-strong-hover":Qo("warning-40"),"bg-info":Qo("neutral-95"),"bg-info-hover":Qo("info-95"),"bg-info-strong":Qo("info-50"),"bg-info-strong-hover":Qo("info-40"),"bg-error":Qo("brand-100"),"bg-error-hover":Qo("error-95"),"bg-error-strong":Qo("error-50"),"bg-error-strong-hover":Qo("error-40"),"bg-inverse":Qo("neutral-40"),"bg-inverse-subtle":Qo("neutral-60"),"bg-inverse-subtler":Qo("neutral-70"),"bg-inverse-subtlest":Qo("neutral-80"),"bg-inverse-hover":Qo("neutral-30"),"bg-primary":Qo("brand-20"),"bg-primary-subtle":Qo("brand-60"),"bg-primary-subtler":Qo("brand-80"),"bg-primary-subtlest":Qo("brand-100"),"bg-available":Qo("success-60"),"bg-primary-hover":Qo("brand-10"),"bg-primary-subtlest-hover":Qo("brand-80"),"bg-primary-subtlest-selected":Qo("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Qo("neutral-10"),"hyperlink-hover":Qo("neutral-40"),"hyperlink-visited":Qo("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Qo("black"),"focus-ring-inverse":Qo("white")}},defaultValue:"lifesg"},ei=e=>t=>{var r;const n=t.theme,o=Vo(Jo,null==n?void 0:n.colourScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.semanticColour)?Wo(o,e,n.overrides.semanticColour):o[e];return"function"==typeof i?i(t):i},ti={text:ei("text"),"text-subtle":ei("text-subtle"),"text-subtler":ei("text-subtler"),"text-subtlest":ei("text-subtlest"),"text-primary":ei("text-primary"),"text-hover":ei("text-hover"),"text-selected":ei("text-selected"),"text-selected-hover":ei("text-selected-hover"),"text-disabled":ei("text-disabled"),"text-disabled-subtle":ei("text-disabled-subtle"),"text-disabled-subtlest":ei("text-disabled-subtlest"),"text-selected-disabled":ei("text-selected-disabled"),"text-success":ei("text-success"),"text-warning":ei("text-warning"),"text-error":ei("text-error"),"text-info":ei("text-info"),"text-inverse":ei("text-inverse"),icon:ei("icon"),"icon-subtle":ei("icon-subtle"),"icon-strongest":ei("icon-strongest"),"icon-primary":ei("icon-primary"),"icon-primary-subtle":ei("icon-primary-subtle"),"icon-primary-subtlest":ei("icon-primary-subtlest"),"icon-hover":ei("icon-hover"),"icon-selected":ei("icon-selected"),"icon-selected-hover":ei("icon-selected-hover"),"icon-disabled":ei("icon-disabled"),"icon-disabled-subtle":ei("icon-disabled-subtle"),"icon-selected-disabled":ei("icon-selected-disabled"),"icon-success":ei("icon-success"),"icon-warning":ei("icon-warning"),"icon-error":ei("icon-error"),"icon-error-strong":ei("icon-error-strong"),"icon-info":ei("icon-info"),"icon-inverse":ei("icon-inverse"),"icon-primary-inverse":ei("icon-primary-inverse"),border:ei("border"),"border-strong":ei("border-strong"),"border-stronger":ei("border-stronger"),"border-primary":ei("border-primary"),"border-primary-subtle":ei("border-primary-subtle"),"border-hover":ei("border-hover"),"border-hover-strong":ei("border-hover-strong"),"border-selected":ei("border-selected"),"border-selected-subtle":ei("border-selected-subtle"),"border-selected-subtlest":ei("border-selected-subtlest"),"border-selected-hover":ei("border-selected-hover"),"border-focus":ei("border-focus"),"border-focus-strong":ei("border-focus-strong"),"border-disabled":ei("border-disabled"),"border-selected-disabled":ei("border-selected-disabled"),"border-success":ei("border-success"),"border-warning":ei("border-warning"),"border-error":ei("border-error"),"border-error-focus":ei("border-error-focus"),"border-error-focus-strong":ei("border-error-focus-strong"),"border-error-strong":ei("border-error-strong"),"border-info":ei("border-info"),bg:ei("bg"),"bg-strong":ei("bg-strong"),"bg-stronger":ei("bg-stronger"),"bg-strongest":ei("bg-strongest"),"bg-hover":ei("bg-hover"),"bg-hover-strong":ei("bg-hover-strong"),"bg-hover-subtle":ei("bg-hover-subtle"),"bg-hover-neutral":ei("bg-hover-neutral"),"bg-hover-neutral-strong":ei("bg-hover-neutral-strong"),"bg-selected":ei("bg-selected"),"bg-selected-hover":ei("bg-selected-hover"),"bg-selected-strong":ei("bg-selected-strong"),"bg-selected-stronger":ei("bg-selected-stronger"),"bg-selected-strongest":ei("bg-selected-strongest"),"bg-selected-strongest-hover":ei("bg-selected-strongest-hover"),"bg-disabled":ei("bg-disabled"),"bg-selected-disabled":ei("bg-selected-disabled"),"bg-selected-stronger-disabled":ei("bg-selected-stronger-disabled"),"bg-success":ei("bg-success"),"bg-success-hover":ei("bg-success-hover"),"bg-success-strong":ei("bg-success-strong"),"bg-success-strong-hover":ei("bg-success-strong-hover"),"bg-warning":ei("bg-warning"),"bg-warning-hover":ei("bg-warning-hover"),"bg-warning-strong":ei("bg-warning-strong"),"bg-warning-strong-hover":ei("bg-warning-strong-hover"),"bg-info":ei("bg-info"),"bg-info-hover":ei("bg-info-hover"),"bg-info-strong":ei("bg-info-strong"),"bg-info-strong-hover":ei("bg-info-strong-hover"),"bg-error":ei("bg-error"),"bg-error-hover":ei("bg-error-hover"),"bg-error-strong":ei("bg-error-strong"),"bg-error-strong-hover":ei("bg-error-strong-hover"),"bg-inverse":ei("bg-inverse"),"bg-inverse-subtle":ei("bg-inverse-subtle"),"bg-inverse-subtler":ei("bg-inverse-subtler"),"bg-inverse-subtlest":ei("bg-inverse-subtlest"),"bg-inverse-hover":ei("bg-inverse-hover"),"bg-primary":ei("bg-primary"),"bg-primary-subtle":ei("bg-primary-subtle"),"bg-primary-subtler":ei("bg-primary-subtler"),"bg-primary-subtlest":ei("bg-primary-subtlest"),"bg-available":ei("bg-available"),"bg-primary-hover":ei("bg-primary-hover"),"bg-primary-subtlest-hover":ei("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":ei("bg-primary-subtlest-selected"),"overlay-strong":ei("overlay-strong"),"overlay-subtle":ei("overlay-subtle"),hyperlink:ei("hyperlink"),"hyperlink-hover":ei("hyperlink-hover"),"hyperlink-visited":ei("hyperlink-visited"),"hyperlink-inverse":ei("hyperlink-inverse"),"focus-ring":ei("focus-ring"),"focus-ring-inverse":ei("focus-ring-inverse")},ri={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Ko["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,u=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:ti.border(t),d=Ko.solid;return O`
            border: ${l} ${d} ${u};
            border-radius: ${c};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Ko["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,u=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:ti.border(t),d=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${u}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return O`
            background-image: url("data:image/svg+xml,${d}");
            border-radius: ${c};
        `}}},defaultValue:"default"},ni=e=>1===e.length&&"theme"in e[0],oi=e=>(...t)=>r=>{const n=ni(t)?[]:t,o=ni(t)?t[0]:r,i=o.theme;return(0,Vo(ri,null==i?void 0:i.borderScheme)[e])(...n)(o)},ii={solid:oi("solid"),"dashed-default":oi("dashed-default")},ai={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},si=e=>t=>{var r;const n=t.theme,o=Vo(ai,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Wo(o,e,n.overrides.breakpoint):o[e],i},li={"xxs-min":si("xxs-min"),"xxs-max":si("xxs-max"),"xs-min":si("xs-min"),"xs-max":si("xs-max"),"sm-min":si("sm-min"),"sm-max":si("sm-max"),"md-min":si("md-min"),"md-max":si("md-max"),"lg-min":si("lg-min"),"lg-max":si("lg-max"),"xl-min":si("xl-min"),"xl-max":si("xl-max"),"xxl-min":si("xxl-min"),"xxs-column":si("xxs-column"),"xs-column":si("xs-column"),"sm-column":si("sm-column"),"md-column":si("md-column"),"lg-column":si("lg-column"),"xl-column":si("xl-column"),"xxl-column":si("xxl-column"),"xxs-gutter":si("xxs-gutter"),"xs-gutter":si("xs-gutter"),"sm-gutter":si("sm-gutter"),"md-gutter":si("md-gutter"),"lg-gutter":si("lg-gutter"),"xl-gutter":si("xl-gutter"),"xxl-gutter":si("xxl-gutter"),"xxs-margin":si("xxs-margin"),"xs-margin":si("xs-margin"),"sm-margin":si("sm-margin"),"md-margin":si("md-margin"),"lg-margin":si("lg-margin"),"xl-margin":si("xl-margin"),"xxl-margin":si("xxl-margin")},ci=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=li["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),ui={MaxWidth:ci("max-width"),MinWidth:ci("min-width")},di={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.012rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},fi=e=>t=>{var r;const n=t.theme,o=Vo(di,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Wo(o,e,n.overrides.fontSpec):o[e]},hi={"heading-size-xxl":fi("heading-size-xxl"),"heading-size-xl":fi("heading-size-xl"),"heading-size-lg":fi("heading-size-lg"),"heading-size-md":fi("heading-size-md"),"heading-size-sm":fi("heading-size-sm"),"heading-size-xs":fi("heading-size-xs"),"heading-lh-xxl":fi("heading-lh-xxl"),"heading-lh-xl":fi("heading-lh-xl"),"heading-lh-lg":fi("heading-lh-lg"),"heading-lh-md":fi("heading-lh-md"),"heading-lh-sm":fi("heading-lh-sm"),"heading-lh-xs":fi("heading-lh-xs"),"heading-ls-xxl":fi("heading-ls-xxl"),"heading-ls-xl":fi("heading-ls-xl"),"heading-ls-lg":fi("heading-ls-lg"),"heading-ls-md":fi("heading-ls-md"),"heading-ls-sm":fi("heading-ls-sm"),"heading-ls-xs":fi("heading-ls-xs"),"weight-light":fi("weight-light"),"weight-regular":fi("weight-regular"),"weight-semibold":fi("weight-semibold"),"weight-bold":fi("weight-bold"),"font-family":fi("font-family"),"body-size-baseline":fi("body-size-baseline"),"body-size-md":fi("body-size-md"),"body-size-sm":fi("body-size-sm"),"body-size-xs":fi("body-size-xs"),"body-lh-baseline":fi("body-lh-baseline"),"body-lh-md":fi("body-lh-md"),"body-lh-sm":fi("body-lh-sm"),"body-lh-xs":fi("body-lh-xs"),"body-ls-baseline":fi("body-ls-baseline"),"body-ls-md":fi("body-ls-md"),"body-ls-sm":fi("body-ls-sm"),"body-ls-xs":fi("body-ls-xs"),"form-label-size":fi("form-label-size"),"form-description-size":fi("form-description-size"),"form-label-lh":fi("form-label-lh"),"form-description-lh":fi("form-description-lh"),"form-label-ls":fi("form-label-ls"),"form-description-ls":fi("form-description-ls")},pi=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return O`
        font-family: ${fi("font-family")};
        font-size: ${fi(e)};
        font-weight: ${fi(t)};
        line-height: ${fi(r)};
        letter-spacing: ${fi(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},gi=(e={})=>({"heading-xxl-light":pi("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":pi("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":pi("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":pi("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":pi("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":pi("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":pi("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":pi("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":pi("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":pi("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":pi("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":pi("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":pi("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":pi("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":pi("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":pi("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":pi("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":pi("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":pi("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":pi("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":pi("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":pi("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":pi("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":pi("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":pi("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":pi("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":pi("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":pi("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":pi("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":pi("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":pi("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":pi("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":pi("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":pi("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":pi("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":pi("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":pi("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":pi("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":pi("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":pi("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":pi("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":pi("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),mi=gi({disableLigatures:!0}),bi={collections:{default:gi(),bookingsg:mi,pa:gi({disableLigatures:!0})},defaultValue:"default"},vi=e=>t=>{var r;const n=t.theme,o=Vo(bi,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Wo(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},yi={"heading-xxl-light":vi("heading-xxl-light"),"heading-xxl-regular":vi("heading-xxl-regular"),"heading-xxl-semibold":vi("heading-xxl-semibold"),"heading-xxl-bold":vi("heading-xxl-bold"),"heading-xl-light":vi("heading-xl-light"),"heading-xl-regular":vi("heading-xl-regular"),"heading-xl-semibold":vi("heading-xl-semibold"),"heading-xl-bold":vi("heading-xl-bold"),"heading-lg-light":vi("heading-lg-light"),"heading-lg-regular":vi("heading-lg-regular"),"heading-lg-semibold":vi("heading-lg-semibold"),"heading-lg-bold":vi("heading-lg-bold"),"heading-md-light":vi("heading-md-light"),"heading-md-regular":vi("heading-md-regular"),"heading-md-semibold":vi("heading-md-semibold"),"heading-md-bold":vi("heading-md-bold"),"heading-sm-light":vi("heading-sm-light"),"heading-sm-regular":vi("heading-sm-regular"),"heading-sm-semibold":vi("heading-sm-semibold"),"heading-sm-bold":vi("heading-sm-bold"),"heading-xs-light":vi("heading-xs-light"),"heading-xs-regular":vi("heading-xs-regular"),"heading-xs-semibold":vi("heading-xs-semibold"),"heading-xs-bold":vi("heading-xs-bold"),"body-baseline-light":vi("body-baseline-light"),"body-baseline-regular":vi("body-baseline-regular"),"body-baseline-semibold":vi("body-baseline-semibold"),"body-baseline-bold":vi("body-baseline-bold"),"body-md-light":vi("body-md-light"),"body-md-regular":vi("body-md-regular"),"body-md-semibold":vi("body-md-semibold"),"body-md-bold":vi("body-md-bold"),"body-sm-light":vi("body-sm-light"),"body-sm-regular":vi("body-sm-regular"),"body-sm-semibold":vi("body-sm-semibold"),"body-sm-bold":vi("body-sm-bold"),"body-xs-light":vi("body-xs-light"),"body-xs-regular":vi("body-xs-regular"),"body-xs-semibold":vi("body-xs-semibold"),"body-xs-bold":vi("body-xs-bold"),"form-label":vi("form-label"),"form-description":vi("form-description")},xi={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},wi=e=>t=>{var r;const n=t.theme,o=Vo(xi,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Wo(o,e,n.overrides.motion):o[e]},$i={"duration-150":wi("duration-150"),"duration-250":wi("duration-250"),"duration-350":wi("duration-350"),"duration-500":wi("duration-500"),"duration-800":wi("duration-800"),"duration-1000":wi("duration-1000"),"ease-default":wi("ease-default"),"ease-standard":wi("ease-standard"),"ease-entrance":wi("ease-entrance"),"ease-exit":wi("ease-exit")},Ci={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Si=e=>t=>{var r;const n=t.theme,o=Vo(Ci,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Wo(o,e,n.overrides.radius)}px`:`${o[e]}px`},Di={none:Si("none"),xs:Si("xs"),sm:Si("sm"),md:Si("md"),lg:Si("lg"),full:Si("full")},ki={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},_i=e=>t=>{var r;const n=t.theme,o=Vo(ki,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Wo(o,e,n.overrides.spacing)}px`:`${o[e]}px`},Oi={"spacing-0":_i("spacing-0"),"spacing-4":_i("spacing-4"),"spacing-8":_i("spacing-8"),"spacing-12":_i("spacing-12"),"spacing-16":_i("spacing-16"),"spacing-20":_i("spacing-20"),"spacing-24":_i("spacing-24"),"spacing-32":_i("spacing-32"),"spacing-40":_i("spacing-40"),"spacing-48":_i("spacing-48"),"spacing-64":_i("spacing-64"),"spacing-72":_i("spacing-72"),"layout-xs":_i("layout-xs"),"layout-sm":_i("layout-sm"),"layout-md":_i("layout-md"),"layout-lg":_i("layout-lg"),"layout-xl":_i("layout-xl"),"layout-xxl":_i("layout-xxl"),"layout-xxxl":_i("layout-xxxl")},Ei=Object.assign(Object.assign({},ti),{Primitive:Zo}),Ti=Object.assign(Object.assign({},yi),{Spec:hi}),Ii=$i,Fi=Object.assign(Object.assign({},Ko),{Util:ii}),Mi=Oi,Ai=Di,ji=li,zi=ui,Ri=e=>O`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Bi=(e,t,r=!1)=>O`
        ${Ti[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Pi=e=>{if(e)return O`
            ${Ri(e)}
        `},Li=(e,t)=>O`
    ${Bi(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,r)=>t?O`
            display: block;
            ${Pi(r)}
        `:e?O`
            display: inline;
        `:O`
            display: block;
            ${Pi(r)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${Ei.text};
`;var Ni;!function(r){const n=(e,t,r)=>{const n=_(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Li(t,e)}
        `;return n.displayName=`Typography.${r}`,n};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const o=(e,t)=>{const r=_.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>Li(e,t)}
        `;return r.displayName=`Typography.${t}`,r};r.BodyBL=o("body-baseline","BodyBL"),r.BodyMD=o("body-md","BodyMD"),r.BodySM=o("body-sm","BodySM"),r.BodyXS=o("body-xs","BodyXS");const i=(r,n)=>{const o=_.a`
            ${e=>O`
                ${Bi(r,e.weight||"regular")}
                color: ${Ei.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Ei["text-hover"]};
                }
            `}
        `,i=r=>{var{external:n=!1,children:i}=r,a=lt(r,["external","children"]);return e(o,Object.assign({},a,{children:[i,n&&t(Hi,{})]}))};return i.displayName=`Typography.${n}`,i};r.LinkBL=i("body-baseline","LinkBL"),r.LinkMD=i("body-md","LinkMD"),r.LinkSM=i("body-sm","LinkSM"),r.LinkXS=i("body-xs","LinkXS")}(Ni||(Ni={}));const Hi=_(I)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Wi=_.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return O`
                ${Fi.Util["dashed-default"]({radius:Ai.sm,thickness:Fi["width-040"],colour:Ei.border})}
                padding: ${Mi["spacing-32"]};

                ${zi.MaxWidth.sm} {
                    padding: ${Mi["spacing-32"]} ${Mi["spacing-20"]};
                }
            `}}
`,Vi=_.input`
    display: none;
`,Yi=_.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${Ei["bg-primary-subtler"]};
    ${Fi.Util["dashed-default"]({radius:Ai.sm,thickness:Fi["width-040"],colour:Ei["border-primary"]})}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,Ui=_(Ni.BodyMD)`
    color: ${Ei["text-primary"]};
    text-align: center;
`,Ki=_(k)`
    color: ${Ei["icon-primary"]};
    height: 4rem;
    width: 4rem;
`,qi=d((({children:r,accept:n,capture:o,multiple:i,id:a,className:l,name:c,border:u,disabled:d,onChange:h,"data-testid":p},g)=>{const m=s(null),{getRootProps:b,isDragActive:v}=cr({onDrop:h,noClick:!0,disabled:d});f(g,(()=>Object.assign(Object.assign({},m.current),{openFileDialog:()=>{m.current&&(m.current.value="",m.current.click())}})));return e(Wi,Object.assign({id:a,"data-testid":p||"dropzone",$border:u,className:l},b(),{children:[t(Vi,{type:"file",name:c,ref:m,tabIndex:-1,"aria-hidden":!0,accept:n,capture:o,multiple:i,"data-testid":p?`${p}-input`:"dropzone-input",onChange:e=>{e.target.files&&h(Array.from(e.target.files))}}),r,v&&e(Yi,{children:[t(Ki,{}),t(Ui,{weight:"semibold",children:"Drop files here"})]})]}))}));const Gi="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function Qi(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function Zi(e){return"nodeType"in e}function Xi(e){var t,r;return e?Qi(e)?e:Zi(e)&&null!=(t=null==(r=e.ownerDocument)?void 0:r.defaultView)?t:window:window}function Ji(e){const{Document:t}=Xi(e);return e instanceof t}function ea(e){return!Qi(e)&&e instanceof Xi(e).HTMLElement}function ta(e){return e instanceof Xi(e).SVGElement}function ra(e){return e?Qi(e)?e.document:Zi(e)?Ji(e)?e:ea(e)||ta(e)?e.ownerDocument:document:document:document}const na=Gi?p:c;function oa(e){const t=s(e);return na((()=>{t.current=e})),u((function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return null==t.current?void 0:t.current(...r)}),[])}function ia(e,t){void 0===t&&(t=[e]);const r=s(e);return na((()=>{r.current!==e&&(r.current=e)}),t),r}function aa(e,t){const r=s();return a((()=>{const t=e(r.current);return r.current=t,t}),[...t])}function sa(e){const t=oa(e),r=s(null),n=u((e=>{e!==r.current&&(null==t||t(e,r.current)),r.current=e}),[]);return[r,n]}function la(e){const t=s();return c((()=>{t.current=e}),[e]),t.current}let ca={};function ua(e,t){return a((()=>{if(t)return t;const r=null==ca[e]?0:ca[e]+1;return ca[e]=r,e+"-"+r}),[e,t])}function da(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.reduce(((t,r)=>{const n=Object.entries(r);for(const[r,o]of n){const n=t[r];null!=n&&(t[r]=n+e*o)}return t}),{...t})}}const fa=da(1),ha=da(-1);function pa(e){if(!e)return!1;const{KeyboardEvent:t}=Xi(e.target);return t&&e instanceof t}function ga(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=Xi(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const ma=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(e)return[ma.Translate.toString(e),ma.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}}),ba="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function va(e){return e.matches(ba)?e:e.querySelector(ba)}const ya={display:"none"};function xa(e){let{id:t,value:r}=e;return o.createElement("div",{id:t,style:ya},r)}function wa(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;return o.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":n,"aria-atomic":!0},r)}const $a=i(null);const Ca={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},Sa={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was moved over droppable area "+r.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was dropped over droppable area "+r.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Da(e){let{announcements:t=Sa,container:r,hiddenTextDescribedById:n,screenReaderInstructions:i=Ca}=e;const{announce:s,announcement:l}=function(){const[e,t]=g("");return{announce:u((e=>{null!=e&&t(e)}),[]),announcement:e}}(),d=ua("DndLiveRegion"),[f,h]=g(!1);if(c((()=>{h(!0)}),[]),function(e){const t=b($a);c((()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)}),[e,t])}(a((()=>({onDragStart(e){let{active:r}=e;s(t.onDragStart({active:r}))},onDragMove(e){let{active:r,over:n}=e;t.onDragMove&&s(t.onDragMove({active:r,over:n}))},onDragOver(e){let{active:r,over:n}=e;s(t.onDragOver({active:r,over:n}))},onDragEnd(e){let{active:r,over:n}=e;s(t.onDragEnd({active:r,over:n}))},onDragCancel(e){let{active:r,over:n}=e;s(t.onDragCancel({active:r,over:n}))}})),[s,t])),!f)return null;const p=o.createElement(o.Fragment,null,o.createElement(xa,{id:n,value:i.draggable}),o.createElement(wa,{id:d,announcement:l}));return r?A(p,r):p}var ka;function _a(){}function Oa(e,t){return a((()=>({sensor:e,options:null!=t?t:{}})),[e,t])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(ka||(ka={}));const Ea=Object.freeze({x:0,y:0});function Ta(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return r-n}function Ia(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return n-r}function Fa(e){let{left:t,top:r,height:n,width:o}=e;return[{x:t,y:r},{x:t+o,y:r},{x:t,y:r+n},{x:t+o,y:r+n}]}function Ma(e,t){if(!e||0===e.length)return null;const[r]=e;return t?r[t]:r}function Aa(e,t){const r=Math.max(t.top,e.top),n=Math.max(t.left,e.left),o=Math.min(t.left+t.width,e.left+e.width),i=Math.min(t.top+t.height,e.top+e.height),a=o-n,s=i-r;if(n<o&&r<i){const r=t.width*t.height,n=e.width*e.height,o=a*s;return Number((o/(r+n-o)).toFixed(4))}return 0}const ja=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const o=[];for(const e of n){const{id:n}=e,i=r.get(n);if(i){const r=Aa(i,t);r>0&&o.push({id:n,data:{droppableContainer:e,value:r}})}}return o.sort(Ia)};function za(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Ea}function Ra(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.reduce(((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x})),{...t})}}const Ba=Ra(1);const Pa={ignoreTransform:!1};function La(e,t){void 0===t&&(t=Pa);let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=Xi(e).getComputedStyle(e);t&&(r=function(e,t,r){const n=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!n)return e;const{scaleX:o,scaleY:i,x:a,y:s}=n,l=e.left-a-(1-o)*parseFloat(r),c=e.top-s-(1-i)*parseFloat(r.slice(r.indexOf(" ")+1)),u=o?e.width/o:e.width,d=i?e.height/i:e.height;return{width:u,height:d,top:c,right:l+u,bottom:c+d,left:l}}(r,t,n))}const{top:n,left:o,width:i,height:a,bottom:s,right:l}=r;return{top:n,left:o,width:i,height:a,bottom:s,right:l}}function Na(e){return La(e,{ignoreTransform:!0})}function Ha(e,t){const r=[];return e?function n(o){if(null!=t&&r.length>=t)return r;if(!o)return r;if(Ji(o)&&null!=o.scrollingElement&&!r.includes(o.scrollingElement))return r.push(o.scrollingElement),r;if(!ea(o)||ta(o))return r;if(r.includes(o))return r;const i=Xi(e).getComputedStyle(o);return o!==e&&function(e,t){void 0===t&&(t=Xi(e).getComputedStyle(e));const r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const n=t[e];return"string"==typeof n&&r.test(n)}))}(o,i)&&r.push(o),function(e,t){return void 0===t&&(t=Xi(e).getComputedStyle(e)),"fixed"===t.position}(o,i)?r:n(o.parentNode)}(e):r}function Wa(e){const[t]=Ha(e,1);return null!=t?t:null}function Va(e){return Gi&&e?Qi(e)?e:Zi(e)?Ji(e)||e===ra(e).scrollingElement?window:ea(e)?e:null:null:null}function Ya(e){return Qi(e)?e.scrollX:e.scrollLeft}function Ua(e){return Qi(e)?e.scrollY:e.scrollTop}function Ka(e){return{x:Ya(e),y:Ua(e)}}var qa;function Ga(e){return!(!Gi||!e)&&e===document.scrollingElement}function Qa(e){const t={x:0,y:0},r=Ga(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=n.y,isRight:e.scrollLeft>=n.x,maxScroll:n,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(qa||(qa={}));const Za={x:.2,y:.2};function Xa(e,t,r,n,o){let{top:i,left:a,right:s,bottom:l}=r;void 0===n&&(n=10),void 0===o&&(o=Za);const{isTop:c,isBottom:u,isLeft:d,isRight:f}=Qa(e),h={x:0,y:0},p={x:0,y:0},g=t.height*o.y,m=t.width*o.x;return!c&&i<=t.top+g?(h.y=qa.Backward,p.y=n*Math.abs((t.top+g-i)/g)):!u&&l>=t.bottom-g&&(h.y=qa.Forward,p.y=n*Math.abs((t.bottom-g-l)/g)),!f&&s>=t.right-m?(h.x=qa.Forward,p.x=n*Math.abs((t.right-m-s)/m)):!d&&a<=t.left+m&&(h.x=qa.Backward,p.x=n*Math.abs((t.left+m-a)/m)),{direction:h,speed:p}}function Ja(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:o}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:o,width:e.clientWidth,height:e.clientHeight}}function es(e){return e.reduce(((e,t)=>fa(e,Ka(t))),Ea)}const ts=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+Ya(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+Ua(t)),0)}]];class rs{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=Ha(t),n=es(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,o]of ts)for(const i of t)Object.defineProperty(this,i,{get:()=>{const t=o(r),a=n[e]-t;return this.rect[i]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class ns{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,r){var n;null==(n=this.target)||n.addEventListener(e,t,r),this.listeners.push([e,t,r])}}function os(e,t){const r=Math.abs(e.x),n=Math.abs(e.y);return"number"==typeof t?Math.sqrt(r**2+n**2)>t:"x"in t&&"y"in t?r>t.x&&n>t.y:"x"in t?r>t.x:"y"in t&&n>t.y}var is,as;function ss(e){e.preventDefault()}function ls(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(is||(is={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}(as||(as={}));const cs={start:[as.Space,as.Enter],cancel:[as.Esc],end:[as.Space,as.Enter]},us=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case as.Right:return{...r,x:r.x+25};case as.Left:return{...r,x:r.x-25};case as.Down:return{...r,y:r.y+25};case as.Up:return{...r,y:r.y-25}}};let ds=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new ns(ra(t)),this.windowListeners=new ns(Xi(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(is.Resize,this.handleCancel),this.windowListeners.add(is.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(is.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,r=e.node.current;r&&function(e,t){if(void 0===t&&(t=La),!e)return;const{top:r,left:n,bottom:o,right:i}=t(e);Wa(e)&&(o<=0||i<=0||r>=window.innerHeight||n>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(r),t(Ea)}handleKeyDown(e){if(pa(e)){const{active:t,context:r,options:n}=this.props,{keyboardCodes:o=cs,coordinateGetter:i=us,scrollBehavior:a="smooth"}=n,{code:s}=e;if(o.end.includes(s))return void this.handleEnd(e);if(o.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=r.current,c=l?{x:l.left,y:l.top}:Ea;this.referenceCoordinates||(this.referenceCoordinates=c);const u=i(e,{active:t,context:r.current,currentCoordinates:c});if(u){const t=ha(u,c),n={x:0,y:0},{scrollableAncestors:o}=r.current;for(const r of o){const o=e.code,{isTop:i,isRight:s,isLeft:l,isBottom:c,maxScroll:d,minScroll:f}=Qa(r),h=Ja(r),p={x:Math.min(o===as.Right?h.right-h.width/2:h.right,Math.max(o===as.Right?h.left:h.left+h.width/2,u.x)),y:Math.min(o===as.Down?h.bottom-h.height/2:h.bottom,Math.max(o===as.Down?h.top:h.top+h.height/2,u.y))},g=o===as.Right&&!s||o===as.Left&&!l,m=o===as.Down&&!c||o===as.Up&&!i;if(g&&p.x!==u.x){const e=r.scrollLeft+t.x,i=o===as.Right&&e<=d.x||o===as.Left&&e>=f.x;if(i&&!t.y)return void r.scrollTo({left:e,behavior:a});n.x=i?r.scrollLeft-e:o===as.Right?r.scrollLeft-d.x:r.scrollLeft-f.x,n.x&&r.scrollBy({left:-n.x,behavior:a});break}if(m&&p.y!==u.y){const e=r.scrollTop+t.y,i=o===as.Down&&e<=d.y||o===as.Up&&e>=f.y;if(i&&!t.x)return void r.scrollTo({top:e,behavior:a});n.y=i?r.scrollTop-e:o===as.Down?r.scrollTop-d.y:r.scrollTop-f.y,n.y&&r.scrollBy({top:-n.y,behavior:a});break}}this.handleMove(e,fa(ha(u,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault(),r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function fs(e){return Boolean(e&&"distance"in e)}function hs(e){return Boolean(e&&"delay"in e)}ds.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=cs,onActivation:o}=t,{active:i}=r;const{code:a}=e.nativeEvent;if(n.start.includes(a)){const t=i.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==o||o({event:e.nativeEvent}),!0)}return!1}}];class ps{constructor(e,t,r){var n;void 0===r&&(r=function(e){const{EventTarget:t}=Xi(e);return e instanceof t?e:ra(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:o}=e,{target:i}=o;this.props=e,this.events=t,this.document=ra(i),this.documentListeners=new ns(this.document),this.listeners=new ns(r),this.windowListeners=new ns(Xi(i)),this.initialCoordinates=null!=(n=ga(o))?n:Ea,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(is.Resize,this.handleCancel),this.windowListeners.add(is.DragStart,ss),this.windowListeners.add(is.VisibilityChange,this.handleCancel),this.windowListeners.add(is.ContextMenu,ss),this.documentListeners.add(is.Keydown,this.handleKeydown),t){if(null!=r&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(hs(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(fs(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(is.Click,ls,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(is.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:o}=this,{onMove:i,options:{activationConstraint:a}}=o;if(!n)return;const s=null!=(t=ga(e))?t:Ea,l=ha(n,s);if(!r&&a){if(fs(a)){if(null!=a.tolerance&&os(l,a.tolerance))return this.handleCancel();if(os(l,a.distance))return this.handleStart()}return hs(a)&&os(l,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),i(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===as.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const gs={move:{name:"pointermove"},end:{name:"pointerup"}};class ms extends ps{constructor(e){const{event:t}=e,r=ra(t.target);super(e,gs,r)}}ms.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return!(!r.isPrimary||0!==r.button)&&(null==n||n({event:r}),!0)}}];const bs={move:{name:"mousemove"},end:{name:"mouseup"}};var vs;!function(e){e[e.RightClick=2]="RightClick"}(vs||(vs={}));let ys=class extends ps{constructor(e){super(e,bs,ra(e.event.target))}};ys.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return r.button!==vs.RightClick&&(null==n||n({event:r}),!0)}}];const xs={move:{name:"touchmove"},end:{name:"touchend"}};class ws extends ps{constructor(e){super(e,xs)}static setup(){return window.addEventListener(xs.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(xs.move.name,e)};function e(){}}}var $s,Cs;function Ss(e){let{acceleration:t,activator:r=$s.Pointer,canScroll:n,draggingRect:o,enabled:i,interval:l=5,order:d=Cs.TreeOrder,pointerCoordinates:f,scrollableAncestors:h,scrollableAncestorRects:p,delta:g,threshold:m}=e;const b=function(e){let{delta:t,disabled:r}=e;const n=la(t);return aa((e=>{if(r||!n||!e)return Ds;const o={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};return{x:{[qa.Backward]:e.x[qa.Backward]||-1===o.x,[qa.Forward]:e.x[qa.Forward]||1===o.x},y:{[qa.Backward]:e.y[qa.Backward]||-1===o.y,[qa.Forward]:e.y[qa.Forward]||1===o.y}}}),[r,t,n])}({delta:g,disabled:!i}),[v,y]=function(){const e=s(null);return[u(((t,r)=>{e.current=setInterval(t,r)}),[]),u((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),x=s({x:0,y:0}),w=s({x:0,y:0}),$=a((()=>{switch(r){case $s.Pointer:return f?{top:f.y,bottom:f.y,left:f.x,right:f.x}:null;case $s.DraggableRect:return o}}),[r,o,f]),C=s(null),S=u((()=>{const e=C.current;if(!e)return;const t=x.current.x*w.current.x,r=x.current.y*w.current.y;e.scrollBy(t,r)}),[]),D=a((()=>d===Cs.TreeOrder?[...h].reverse():h),[d,h]);c((()=>{if(i&&h.length&&$){for(const e of D){if(!1===(null==n?void 0:n(e)))continue;const r=h.indexOf(e),o=p[r];if(!o)continue;const{direction:i,speed:a}=Xa(e,o,$,t,m);for(const e of["x","y"])b[e][i[e]]||(a[e]=0,i[e]=0);if(a.x>0||a.y>0)return y(),C.current=e,v(S,l),x.current=a,void(w.current=i)}x.current={x:0,y:0},w.current={x:0,y:0},y()}else y()}),[t,S,n,y,i,l,JSON.stringify($),JSON.stringify(b),v,h,D,p,JSON.stringify(m)])}ws.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;const{touches:o}=r;return!(o.length>1)&&(null==n||n({event:r}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}($s||($s={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(Cs||(Cs={}));const Ds={x:{[qa.Backward]:!1,[qa.Forward]:!1},y:{[qa.Backward]:!1,[qa.Forward]:!1}};var ks,_s;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(ks||(ks={})),function(e){e.Optimized="optimized"}(_s||(_s={}));const Os=new Map;function Es(e,t){return aa((r=>e?r||("function"==typeof t?t(e):e):null),[t,e])}function Ts(e){let{callback:t,disabled:r}=e;const n=oa(t),o=a((()=>{if(r||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(n)}),[r]);return c((()=>()=>null==o?void 0:o.disconnect()),[o]),o}function Is(e){return new rs(La(e),e)}function Fs(e,t,r){void 0===t&&(t=Is);const[n,o]=l((function(n){if(!e)return null;var o;if(!1===e.isConnected)return null!=(o=null!=n?n:r)?o:null;const i=t(e);if(JSON.stringify(n)===JSON.stringify(i))return n;return i}),null),i=function(e){let{callback:t,disabled:r}=e;const n=oa(t),o=a((()=>{if(r||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(n)}),[n,r]);return c((()=>()=>null==o?void 0:o.disconnect()),[o]),o}({callback(t){if(e)for(const r of t){const{type:t,target:n}=r;if("childList"===t&&n instanceof HTMLElement&&n.contains(e)){o();break}}}}),s=Ts({callback:o});return na((()=>{o(),e?(null==s||s.observe(e),null==i||i.observe(document.body,{childList:!0,subtree:!0})):(null==s||s.disconnect(),null==i||i.disconnect())}),[e]),n}const Ms=[];function As(e,t){void 0===t&&(t=[]);const r=s(null);return c((()=>{r.current=null}),t),c((()=>{const t=e!==Ea;t&&!r.current&&(r.current=e),!t&&r.current&&(r.current=null)}),[e]),r.current?ha(e,r.current):Ea}function js(e){return a((()=>e?function(e){const t=e.innerWidth,r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}(e):null),[e])}const zs=[];function Rs(e){let{measure:t}=e;const[r,n]=g(null),o=u((e=>{for(const{target:r}of e)if(ea(r)){n((e=>{const n=t(r);return e?{...e,width:n.width,height:n.height}:n}));break}}),[t]),i=Ts({callback:o}),s=u((e=>{const r=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return ea(t)?t:e}(e);null==i||i.disconnect(),r&&(null==i||i.observe(r)),n(r?t(r):null)}),[t,i]),[l,c]=sa(s);return a((()=>({nodeRef:l,rect:r,setRef:c})),[r,l,c])}const Bs=[{sensor:ms,options:{}},{sensor:ds,options:{}}],Ps={current:{}},Ls={draggable:{measure:Na},droppable:{measure:Na,strategy:ks.WhileDragging,frequency:_s.Optimized},dragOverlay:{measure:La}};class Ns extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,r;return null!=(t=null==(r=this.get(e))?void 0:r.node.current)?t:void 0}}const Hs={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Ns,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:_a},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Ls,measureDroppableContainers:_a,windowRect:null,measuringScheduled:!1},Ws=i({activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:_a,draggableNodes:new Map,over:null,measureDroppableContainers:_a}),Vs=i(Hs);function Ys(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Ns}}}function Us(e,t){switch(t.type){case ka.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case ka.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case ka.DragEnd:case ka.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case ka.RegisterDroppable:{const{element:r}=t,{id:n}=r,o=new Ns(e.droppable.containers);return o.set(n,r),{...e,droppable:{...e.droppable,containers:o}}}case ka.SetDroppableDisabled:{const{id:r,key:n,disabled:o}=t,i=e.droppable.containers.get(r);if(!i||n!==i.key)return e;const a=new Ns(e.droppable.containers);return a.set(r,{...i,disabled:o}),{...e,droppable:{...e.droppable,containers:a}}}case ka.UnregisterDroppable:{const{id:r,key:n}=t,o=e.droppable.containers.get(r);if(!o||n!==o.key)return e;const i=new Ns(e.droppable.containers);return i.delete(r),{...e,droppable:{...e.droppable,containers:i}}}default:return e}}function Ks(e){let{disabled:t}=e;const{active:r,activatorEvent:n,draggableNodes:o}=b(Ws),i=la(n),a=la(null==r?void 0:r.id);return c((()=>{if(!t&&!n&&i&&null!=a){if(!pa(i))return;if(document.activeElement===i.target)return;const e=o.get(a);if(!e)return;const{activatorNode:t,node:r}=e;if(!t.current&&!r.current)return;requestAnimationFrame((()=>{for(const e of[t.current,r.current]){if(!e)continue;const t=va(e);if(t){t.focus();break}}}))}}),[n,t,o,a,i]),null}const qs=i({...Ea,scaleX:1,scaleY:1});var Gs;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(Gs||(Gs={}));const Qs=m((function(e){var t,r,n,i;let{id:d,accessibility:f,autoScroll:h=!0,children:p,sensors:m=Bs,collisionDetection:b=ja,measuring:v,modifiers:y,...x}=e;const w=l(Us,void 0,Ys),[$,C]=w,[S,D]=function(){const[e]=g((()=>new Set)),t=u((t=>(e.add(t),()=>e.delete(t))),[e]);return[u((t=>{let{type:r,event:n}=t;e.forEach((e=>{var t;return null==(t=e[r])?void 0:t.call(e,n)}))}),[e]),t]}(),[k,_]=g(Gs.Uninitialized),O=k===Gs.Initialized,{draggable:{active:E,nodes:T,translate:I},droppable:{containers:F}}=$,A=E?T.get(E):null,j=s({initial:null,translated:null}),z=a((()=>{var e;return null!=E?{id:E,data:null!=(e=null==A?void 0:A.data)?e:Ps,rect:j}:null}),[E,A]),R=s(null),[B,P]=g(null),[L,N]=g(null),H=ia(x,Object.values(x)),W=ua("DndDescribedBy",d),V=a((()=>F.getEnabled()),[F]),Y=function(e){return a((()=>({draggable:{...Ls.draggable,...null==e?void 0:e.draggable},droppable:{...Ls.droppable,...null==e?void 0:e.droppable},dragOverlay:{...Ls.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(v),{droppableRects:U,measureDroppableContainers:K,measuringScheduled:q}=function(e,t){let{dragging:r,dependencies:n,config:o}=t;const[i,a]=g(null),{frequency:l,measure:d,strategy:f}=o,h=s(e),p=function(){switch(f){case ks.Always:return!1;case ks.BeforeDragging:return r;default:return!r}}(),m=ia(p),b=u((function(e){void 0===e&&(e=[]),m.current||a((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[m]),v=s(null),y=aa((t=>{if(p&&!r)return Os;if(!t||t===Os||h.current!==e||null!=i){const t=new Map;for(let r of e){if(!r)continue;if(i&&i.length>0&&!i.includes(r.id)&&r.rect.current){t.set(r.id,r.rect.current);continue}const e=r.node.current,n=e?new rs(d(e),e):null;r.rect.current=n,n&&t.set(r.id,n)}return t}return t}),[e,i,r,p,d]);return c((()=>{h.current=e}),[e]),c((()=>{p||b()}),[r,p]),c((()=>{i&&i.length>0&&a(null)}),[JSON.stringify(i)]),c((()=>{p||"number"!=typeof l||null!==v.current||(v.current=setTimeout((()=>{b(),v.current=null}),l))}),[l,p,b,...n]),{droppableRects:y,measureDroppableContainers:b,measuringScheduled:null!=i}}(V,{dragging:O,dependencies:[I.x,I.y],config:Y.droppable}),G=function(e,t){const r=null!==t?e.get(t):void 0,n=r?r.node.current:null;return aa((e=>{var r;return null===t?null:null!=(r=null!=n?n:e)?r:null}),[n,t])}(T,E),Q=a((()=>L?ga(L):null),[L]),Z=function(){const e=!1===(null==B?void 0:B.autoScrollEnabled),t="object"==typeof h?!1===h.enabled:!1===h,r=O&&!e&&!t;if("object"==typeof h)return{...h,enabled:r};return{enabled:r}}(),X=function(e,t){return Es(e,t)}(G,Y.draggable.measure);!function(e){let{activeNode:t,measure:r,initialRect:n,config:o=!0}=e;const i=s(!1),{x:a,y:l}="boolean"==typeof o?{x:o,y:o}:o;na((()=>{if(!a&&!l||!t)return void(i.current=!1);if(i.current||!n)return;const e=null==t?void 0:t.node.current;if(!e||!1===e.isConnected)return;const o=za(r(e),n);if(a||(o.x=0),l||(o.y=0),i.current=!0,Math.abs(o.x)>0||Math.abs(o.y)>0){const t=Wa(e);t&&t.scrollBy({top:o.y,left:o.x})}}),[t,a,l,n,r])}({activeNode:E?T.get(E):null,config:Z.layoutShiftCompensation,initialRect:X,measure:Y.draggable.measure});const J=Fs(G,Y.draggable.measure,X),ee=Fs(G?G.parentElement:null),te=s({activatorEvent:null,active:null,activeNode:G,collisionRect:null,collisions:null,droppableRects:U,draggableNodes:T,draggingNode:null,draggingNodeRect:null,droppableContainers:F,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),re=F.getNodeFor(null==(t=te.current.over)?void 0:t.id),ne=Rs({measure:Y.dragOverlay.measure}),oe=null!=(r=ne.nodeRef.current)?r:G,ie=O?null!=(n=ne.rect)?n:J:null,ae=Boolean(ne.nodeRef.current&&ne.rect),se=za(le=ae?null:J,Es(le));var le;const ce=js(oe?Xi(oe):null),ue=function(e){const t=s(e),r=aa((r=>e?r&&r!==Ms&&e&&t.current&&e.parentNode===t.current.parentNode?r:Ha(e):Ms),[e]);return c((()=>{t.current=e}),[e]),r}(O?null!=re?re:G:null),de=function(e,t){void 0===t&&(t=La);const[r]=e,n=js(r?Xi(r):null),[o,i]=l((function(){return e.length?e.map((e=>Ga(e)?n:new rs(t(e),e))):zs}),zs),a=Ts({callback:i});return e.length>0&&o===zs&&i(),na((()=>{e.length?e.forEach((e=>null==a?void 0:a.observe(e))):(null==a||a.disconnect(),i())}),[e]),o}(ue),fe=function(e,t){let{transform:r,...n}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...n})),r):r}(y,{transform:{x:I.x-se.x,y:I.y-se.y,scaleX:1,scaleY:1},activatorEvent:L,active:z,activeNodeRect:J,containerNodeRect:ee,draggingNodeRect:ie,over:te.current.over,overlayNodeRect:ne.rect,scrollableAncestors:ue,scrollableAncestorRects:de,windowRect:ce}),he=Q?fa(Q,I):null,pe=function(e){const[t,r]=g(null),n=s(e),o=u((e=>{const t=Va(e.target);t&&r((e=>e?(e.set(t,Ka(t)),new Map(e)):null))}),[]);return c((()=>{const t=n.current;if(e!==t){i(t);const a=e.map((e=>{const t=Va(e);return t?(t.addEventListener("scroll",o,{passive:!0}),[t,Ka(t)]):null})).filter((e=>null!=e));r(a.length?new Map(a):null),n.current=e}return()=>{i(e),i(t)};function i(e){e.forEach((e=>{const t=Va(e);null==t||t.removeEventListener("scroll",o)}))}}),[o,e]),a((()=>e.length?t?Array.from(t.values()).reduce(((e,t)=>fa(e,t)),Ea):es(e):Ea),[e,t])}(ue),ge=As(pe),me=As(pe,[J]),be=fa(fe,ge),ve=ie?Ba(ie,fe):null,ye=z&&ve?b({active:z,collisionRect:ve,droppableRects:U,droppableContainers:V,pointerCoordinates:he}):null,xe=Ma(ye,"id"),[we,$e]=g(null),Ce=function(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}(ae?fe:fa(fe,me),null!=(i=null==we?void 0:we.rect)?i:null,J),Se=u(((e,t)=>{let{sensor:r,options:n}=t;if(null==R.current)return;const o=T.get(R.current);if(!o)return;const i=e.nativeEvent,a=new r({active:R.current,activeNode:o,event:i,options:n,context:te,onStart(e){const t=R.current;if(null==t)return;const r=T.get(t);if(!r)return;const{onDragStart:n}=H.current,o={active:{id:t,data:r.data,rect:j}};M((()=>{null==n||n(o),_(Gs.Initializing),C({type:ka.DragStart,initialCoordinates:e,active:t}),S({type:"onDragStart",event:o})}))},onMove(e){C({type:ka.DragMove,coordinates:e})},onEnd:s(ka.DragEnd),onCancel:s(ka.DragCancel)});function s(e){return async function(){const{active:t,collisions:r,over:n,scrollAdjustedTranslate:o}=te.current;let a=null;if(t&&o){const{cancelDrop:s}=H.current;if(a={activatorEvent:i,active:t,collisions:r,delta:o,over:n},e===ka.DragEnd&&"function"==typeof s){await Promise.resolve(s(a))&&(e=ka.DragCancel)}}R.current=null,M((()=>{C({type:e}),_(Gs.Uninitialized),$e(null),P(null),N(null);const t=e===ka.DragEnd?"onDragEnd":"onDragCancel";if(a){const e=H.current[t];null==e||e(a),S({type:t,event:a})}}))}}M((()=>{P(a),N(e.nativeEvent)}))}),[T]),De=u(((e,t)=>(r,n)=>{const o=r.nativeEvent,i=T.get(n);if(null!==R.current||!i||o.dndKit||o.defaultPrevented)return;const a={active:i};!0===e(r,t.options,a)&&(o.dndKit={capturedBy:t.sensor},R.current=n,Se(r,t))}),[T,Se]),ke=function(e,t){return a((()=>e.reduce(((e,r)=>{const{sensor:n}=r;return[...e,...n.activators.map((e=>({eventName:e.eventName,handler:t(e.handler,r)})))]}),[])),[e,t])}(m,De);!function(e){c((()=>{if(!Gi)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(m),na((()=>{J&&k===Gs.Initializing&&_(Gs.Initialized)}),[J,k]),c((()=>{const{onDragMove:e}=H.current,{active:t,activatorEvent:r,collisions:n,over:o}=te.current;if(!t||!r)return;const i={active:t,activatorEvent:r,collisions:n,delta:{x:be.x,y:be.y},over:o};M((()=>{null==e||e(i),S({type:"onDragMove",event:i})}))}),[be.x,be.y]),c((()=>{const{active:e,activatorEvent:t,collisions:r,droppableContainers:n,scrollAdjustedTranslate:o}=te.current;if(!e||null==R.current||!t||!o)return;const{onDragOver:i}=H.current,a=n.get(xe),s=a&&a.rect.current?{id:a.id,rect:a.rect.current,data:a.data,disabled:a.disabled}:null,l={active:e,activatorEvent:t,collisions:r,delta:{x:o.x,y:o.y},over:s};M((()=>{$e(s),null==i||i(l),S({type:"onDragOver",event:l})}))}),[xe]),na((()=>{te.current={activatorEvent:L,active:z,activeNode:G,collisionRect:ve,collisions:ye,droppableRects:U,draggableNodes:T,draggingNode:oe,draggingNodeRect:ie,droppableContainers:F,over:we,scrollableAncestors:ue,scrollAdjustedTranslate:be},j.current={initial:ie,translated:ve}}),[z,G,ye,ve,T,oe,ie,U,F,we,ue,be]),Ss({...Z,delta:I,draggingRect:ve,pointerCoordinates:he,scrollableAncestors:ue,scrollableAncestorRects:de});const _e=a((()=>({active:z,activeNode:G,activeNodeRect:J,activatorEvent:L,collisions:ye,containerNodeRect:ee,dragOverlay:ne,draggableNodes:T,droppableContainers:F,droppableRects:U,over:we,measureDroppableContainers:K,scrollableAncestors:ue,scrollableAncestorRects:de,measuringConfiguration:Y,measuringScheduled:q,windowRect:ce})),[z,G,J,L,ye,ee,ne,T,F,U,we,K,ue,de,Y,q,ce]),Oe=a((()=>({activatorEvent:L,activators:ke,active:z,activeNodeRect:J,ariaDescribedById:{draggable:W},dispatch:C,draggableNodes:T,over:we,measureDroppableContainers:K})),[L,ke,z,J,C,W,T,we,K]);return o.createElement($a.Provider,{value:D},o.createElement(Ws.Provider,{value:Oe},o.createElement(Vs.Provider,{value:_e},o.createElement(qs.Provider,{value:Ce},p)),o.createElement(Ks,{disabled:!1===(null==f?void 0:f.restoreFocus)})),o.createElement(Da,{...f,hiddenTextDescribedById:W}))})),Zs=i(null),Xs="button";function Js(e){let{id:t,data:r,disabled:n=!1,attributes:o}=e;const i=ua("Droppable"),{activators:s,activatorEvent:l,active:c,activeNodeRect:u,ariaDescribedById:d,draggableNodes:f,over:h}=b(Ws),{role:p=Xs,roleDescription:g="draggable",tabIndex:m=0}=null!=o?o:{},v=(null==c?void 0:c.id)===t,y=b(v?qs:Zs),[x,w]=sa(),[$,C]=sa(),S=function(e,t){return a((()=>e.reduce(((e,r)=>{let{eventName:n,handler:o}=r;return e[n]=e=>{o(e,t)},e}),{})),[e,t])}(s,t),D=ia(r);na((()=>(f.set(t,{id:t,key:i,node:x,activatorNode:$,data:D}),()=>{const e=f.get(t);e&&e.key===i&&f.delete(t)})),[f,t]);return{active:c,activatorEvent:l,activeNodeRect:u,attributes:a((()=>({role:p,tabIndex:m,"aria-disabled":n,"aria-pressed":!(!v||p!==Xs)||void 0,"aria-roledescription":g,"aria-describedby":d.draggable})),[n,p,m,v,g,d.draggable]),isDragging:v,listeners:n?void 0:S,node:x,over:h,setNodeRef:w,setActivatorNodeRef:C,transform:y}}const el={timeout:25};function tl(e,t,r){const n=e.slice();return n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]),n}function rl(e,t){return e.reduce(((e,r,n)=>{const o=t.get(r);return o&&(e[n]=o),e}),Array(e.length))}function nl(e){return null!==e&&e>=0}const ol=e=>{let{rects:t,activeIndex:r,overIndex:n,index:o}=e;const i=tl(t,n,r),a=t[o],s=i[o];return s&&a?{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}:null},il={scaleX:1,scaleY:1},al=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:o,rects:i,overIndex:a}=e;const s=null!=(t=i[r])?t:n;if(!s)return null;if(o===r){const e=i[a];return e?{x:0,y:r<a?e.top+e.height-(s.top+s.height):e.top-s.top,...il}:null}const l=function(e,t,r){const n=e[t],o=e[t-1],i=e[t+1];if(!n)return 0;if(r<t)return o?n.top-(o.top+o.height):i?i.top-(n.top+n.height):0;return i?i.top-(n.top+n.height):o?n.top-(o.top+o.height):0}(i,o,r);return o>r&&o<=a?{x:0,y:-s.height-l,...il}:o<r&&o>=a?{x:0,y:s.height+l,...il}:{x:0,y:0,...il}};const sl="Sortable",ll=o.createContext({activeIndex:-1,containerId:sl,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:ol,disabled:{draggable:!1,droppable:!1}});function cl(e){let{children:t,id:r,items:n,strategy:i=ol,disabled:l=!1}=e;const{active:u,dragOverlay:d,droppableRects:f,over:h,measureDroppableContainers:p}=b(Vs),g=ua(sl,r),m=Boolean(null!==d.rect),v=a((()=>n.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[n]),y=null!=u,x=u?v.indexOf(u.id):-1,w=h?v.indexOf(h.id):-1,$=s(v),C=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(v,$.current),S=-1!==w&&-1===x||C,D=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(l);na((()=>{C&&y&&p(v)}),[C,v,y,p]),c((()=>{$.current=v}),[v]);const k=a((()=>({activeIndex:x,containerId:g,disabled:D,disableTransforms:S,items:v,overIndex:w,useDragOverlay:m,sortedRects:rl(v,f),strategy:i})),[x,g,D.draggable,D.droppable,S,v,w,f,m,i]);return o.createElement(ll.Provider,{value:k},t)}const ul=e=>{let{id:t,items:r,activeIndex:n,overIndex:o}=e;return tl(r,n,o).indexOf(t)},dl=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:o,items:i,newIndex:a,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!n)&&((s===i||o!==a)&&(!!r||a!==o&&t===l))},fl={duration:200,easing:"ease"},hl="transform",pl=ma.Transition.toString({property:hl,duration:0,easing:"linear"}),gl={roleDescription:"sortable"};function ml(e){let{animateLayoutChanges:t=dl,attributes:r,disabled:n,data:o,getNewIndex:i=ul,id:l,strategy:d,resizeObserverConfig:f,transition:h=fl}=e;const{items:p,containerId:m,activeIndex:v,disabled:y,disableTransforms:x,sortedRects:w,overIndex:$,useDragOverlay:C,strategy:S}=b(ll),D=function(e,t){var r,n;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(r=null==e?void 0:e.draggable)?r:t.draggable,droppable:null!=(n=null==e?void 0:e.droppable)?n:t.droppable}}(n,y),k=p.indexOf(l),_=a((()=>({sortable:{containerId:m,index:k,items:p},...o})),[m,o,k,p]),O=a((()=>p.slice(p.indexOf(l))),[p,l]),{rect:E,node:T,isOver:I,setNodeRef:F}=function(e){let{data:t,disabled:r=!1,id:n,resizeObserverConfig:o}=e;const i=ua("Droppable"),{active:a,dispatch:l,over:d,measureDroppableContainers:f}=b(Ws),h=s({disabled:r}),p=s(!1),g=s(null),m=s(null),{disabled:v,updateMeasurementsFor:y,timeout:x}={...el,...o},w=ia(null!=y?y:n),$=Ts({callback:u((()=>{p.current?(null!=m.current&&clearTimeout(m.current),m.current=setTimeout((()=>{f(Array.isArray(w.current)?w.current:[w.current]),m.current=null}),x)):p.current=!0}),[x]),disabled:v||!a}),C=u(((e,t)=>{$&&(t&&($.unobserve(t),p.current=!1),e&&$.observe(e))}),[$]),[S,D]=sa(C),k=ia(t);return c((()=>{$&&S.current&&($.disconnect(),p.current=!1,$.observe(S.current))}),[S,$]),na((()=>(l({type:ka.RegisterDroppable,element:{id:n,key:i,disabled:r,node:S,rect:g,data:k}}),()=>l({type:ka.UnregisterDroppable,key:i,id:n}))),[n]),c((()=>{r!==h.current.disabled&&(l({type:ka.SetDroppableDisabled,id:n,key:i,disabled:r}),h.current.disabled=r)}),[n,i,r,l]),{active:a,rect:g,isOver:(null==d?void 0:d.id)===n,node:S,over:d,setNodeRef:D}}({id:l,data:_,disabled:D.droppable,resizeObserverConfig:{updateMeasurementsFor:O,...f}}),{active:M,activatorEvent:A,activeNodeRect:j,attributes:z,setNodeRef:R,listeners:B,isDragging:P,over:L,setActivatorNodeRef:N,transform:H}=Js({id:l,data:_,attributes:{...gl,...r},disabled:D.draggable}),W=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return a((()=>e=>{t.forEach((t=>t(e)))}),t)}(F,R),V=Boolean(M),Y=V&&!x&&nl(v)&&nl($),U=!C&&P,K=U&&Y?H:null,q=Y?null!=K?K:(null!=d?d:S)({rects:w,activeNodeRect:j,activeIndex:v,overIndex:$,index:k}):null,G=nl(v)&&nl($)?i({id:l,items:p,activeIndex:v,overIndex:$}):k,Q=null==M?void 0:M.id,Z=s({activeId:Q,items:p,newIndex:G,containerId:m}),X=p!==Z.current.items,J=t({active:M,containerId:m,isDragging:P,isSorting:V,id:l,index:k,items:p,newIndex:Z.current.newIndex,previousItems:Z.current.items,previousContainerId:Z.current.containerId,transition:h,wasDragging:null!=Z.current.activeId}),ee=function(e){let{disabled:t,index:r,node:n,rect:o}=e;const[i,a]=g(null),l=s(r);return na((()=>{if(!t&&r!==l.current&&n.current){const e=o.current;if(e){const t=La(n.current,{ignoreTransform:!0}),r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(r.x||r.y)&&a(r)}}r!==l.current&&(l.current=r)}),[t,r,n,o]),c((()=>{i&&a(null)}),[i]),i}({disabled:!J,index:k,node:T,rect:E});return c((()=>{V&&Z.current.newIndex!==G&&(Z.current.newIndex=G),m!==Z.current.containerId&&(Z.current.containerId=m),p!==Z.current.items&&(Z.current.items=p)}),[V,G,m,p]),c((()=>{if(Q===Z.current.activeId)return;if(Q&&!Z.current.activeId)return void(Z.current.activeId=Q);const e=setTimeout((()=>{Z.current.activeId=Q}),50);return()=>clearTimeout(e)}),[Q]),{active:M,activeIndex:v,attributes:z,data:_,rect:E,index:k,newIndex:G,items:p,isOver:I,isSorting:V,isDragging:P,listeners:B,node:T,overIndex:$,over:L,setNodeRef:W,setActivatorNodeRef:N,setDroppableNodeRef:F,setDraggableNodeRef:R,transform:null!=ee?ee:q,transition:function(){if(ee||X&&Z.current.newIndex===k)return pl;if(U&&!pa(A)||!h)return;if(V||J)return ma.Transition.toString({...h,property:hl});return}()}}function bl(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const vl=[as.Down,as.Right,as.Up,as.Left],yl=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:o,droppableContainers:i,over:a,scrollableAncestors:s}}=t;if(vl.includes(e.code)){if(e.preventDefault(),!r||!n)return;const t=[];i.getEnabled().forEach((r=>{if(!r||null!=r&&r.disabled)return;const i=o.get(r.id);if(i)switch(e.code){case as.Down:n.top<i.top&&t.push(r);break;case as.Up:n.top>i.top&&t.push(r);break;case as.Left:n.left>i.left&&t.push(r);break;case as.Right:n.left<i.left&&t.push(r)}}));const l=(e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const o=Fa(t),i=[];for(const e of n){const{id:t}=e,n=r.get(t);if(n){const r=Fa(n),a=o.reduce(((e,t,n)=>{return e+(o=r[n],i=t,Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)));var o,i}),0),s=Number((a/4).toFixed(4));i.push({id:t,data:{droppableContainer:e,value:s}})}}return i.sort(Ta)})({active:r,collisionRect:n,droppableRects:o,droppableContainers:t,pointerCoordinates:null});let c=Ma(l,"id");if(c===(null==a?void 0:a.id)&&l.length>1&&(c=l[1].id),null!=c){const e=i.get(r.id),t=i.get(c),a=t?o.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&a&&e&&t){const r=Ha(l).some(((e,t)=>s[t]!==e)),o=xl(e,t),i=function(e,t){if(!bl(e)||!bl(t))return!1;if(!xl(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=r||!o?{x:0,y:0}:{x:i?n.width-a.width:0,y:i?n.height-a.height:0},u={x:a.left,y:a.top};return c.x&&c.y?u:ha(u,c)}}}};function xl(e,t){return!(!bl(e)||!bl(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}var wl=function(e,t){return wl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},wl(e,t)};var $l=function(){return $l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},$l.apply(this,arguments)};var Cl="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Sl=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Dl="object"==typeof Cl&&Cl&&Cl.Object===Object&&Cl,kl="object"==typeof self&&self&&self.Object===Object&&self,_l=Dl||kl||Function("return this")(),Ol=_l,El=function(){return Ol.Date.now()},Tl=/\s/;var Il=function(e){for(var t=e.length;t--&&Tl.test(e.charAt(t)););return t},Fl=/^\s+/;var Ml=function(e){return e?e.slice(0,Il(e)+1).replace(Fl,""):e},Al=_l.Symbol,jl=Al,zl=Object.prototype,Rl=zl.hasOwnProperty,Bl=zl.toString,Pl=jl?jl.toStringTag:void 0;var Ll=function(e){var t=Rl.call(e,Pl),r=e[Pl];try{e[Pl]=void 0;var n=!0}catch(e){}var o=Bl.call(e);return n&&(t?e[Pl]=r:delete e[Pl]),o},Nl=Object.prototype.toString;var Hl=Ll,Wl=function(e){return Nl.call(e)},Vl=Al?Al.toStringTag:void 0;var Yl=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Vl&&Vl in Object(e)?Hl(e):Wl(e)},Ul=function(e){return null!=e&&"object"==typeof e};var Kl=Ml,ql=Sl,Gl=function(e){return"symbol"==typeof e||Ul(e)&&"[object Symbol]"==Yl(e)},Ql=/^[-+]0x[0-9a-f]+$/i,Zl=/^0b[01]+$/i,Xl=/^0o[0-7]+$/i,Jl=parseInt;var ec=Sl,tc=El,rc=function(e){if("number"==typeof e)return e;if(Gl(e))return NaN;if(ql(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ql(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Kl(e);var r=Zl.test(e);return r||Xl.test(e)?Jl(e.slice(2),r?2:8):Ql.test(e)?NaN:+e},nc=Math.max,oc=Math.min;var ic=function(e,t,r){var n,o,i,a,s,l,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||d&&e-c>=i}function g(){var e=tc();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return d?oc(r,i-(e-c)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=o=void 0,a)}function b(){var e=tc(),r=p(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),u?h(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=rc(t)||0,ec(r)&&(u=!!r.leading,i=(d="maxWait"in r)?nc(rc(r.maxWait)||0,t):i,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:m(tc())},b},ac=ic,sc=Sl;var lc=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return sc(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),ac(e,t,{leading:n,maxWait:t,trailing:o})},cc=function(e,t,r,n){switch(t){case"debounce":return ic(e,r,n);case"throttle":return lc(e,r,n);default:return e}},uc=function(e){return"function"==typeof e},dc=function(){return"undefined"==typeof window},fc=function(e){return e instanceof Element||e instanceof HTMLDocument},hc=function(e,t,r,n){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!n||t.height===a&&!r?t:(e&&uc(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!dc()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(dc())return null;if(t)return document.querySelector(t);if(n&&fc(n))return n;if(r.targetRef&&fc(r.targetRef.current))return r.targetRef.current;var o=j(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=hc(s,r.setState.bind(r),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!dc()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return uc(t)?"renderProp":uc(n)?"childFunction":v(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=y(),r.observableElement=null,dc()||(r.resizeHandler=cc(r.createResizeHandler,o,a,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}wl(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){dc()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(l,["targetRef"]);return x(e,c)}return x(e,l);case"childArray":return(e=o).map((function(e){return!!e&&x(e,l)}));default:return n.createElement(a,null)}}}(w);var pc=dc()?c:p;function gc(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,a=e.refreshOptions,l=e.handleWidth,c=void 0===l||l,u=e.handleHeight,d=void 0===u||u,f=e.targetRef,h=e.observerOptions,p=e.onResize,m=s(r),b=s(null),v=null!=f?f:b,y=s(),x=g({width:void 0,height:void 0}),w=x[0],$=x[1];return pc((function(){if(!dc()){var e=hc(p,$,c,d);y.current=cc((function(t){(c||d)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!m.current&&!dc()&&e({width:n,height:o}),m.current=!1}))}),n,i,a);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,h),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[n,i,a,c,d,p,h,v.current]),$l({ref:v},w)}class mc extends ys{}mc.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>bc(e.target)}];function bc(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends ds{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>bc(e.target)}];var vc,yc={exports:{}};vc=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var xc=yc.exports=vc(o),wc={exports:{}};wc.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,c),i=r-o<0,a=t.clone().add(n+(i?-1:1),c);return+(-(n+(r-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:f,h:a,m:i,s:o,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof k||!(!e||!e[w])},C=function e(t,r,n){var o;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,o=s}return!n&&o&&(y=o),o||!n&&y},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},D=v;D.l=C,D.i=$,D.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return D},b.isValid=function(){return!(this.$d.toString()===h)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return D.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!D.u(t)||t,u=D.p(e),h=function(e,t){var o=D.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(s)},p=function(e,t){return D.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return n?h(1,0):h(31,11);case c:return n?h(1,m):h(0,m+1);case l:var y=this.$locale().weekStart||0,x=(g<y?g+7:g)-y;return h(n?b-x:b+(6-x),m);case s:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=D.p(e),u="set"+(this.$u?"UTC":""),h=(r={},r[s]=u+"Date",r[f]=u+"Date",r[c]=u+"Month",r[d]=u+"FullYear",r[a]=u+"Hours",r[i]=u+"Minutes",r[o]=u+"Seconds",r[n]=u+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[D.p(e)]()},b.add=function(n,u){var f,h=this;n=Number(n);var p=D.p(u),g=function(e){var t=S(h);return D.w(t.date(t.date()+Math.round(e*n)),h)};if(p===c)return this.set(c,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(f={},f[i]=t,f[a]=r,f[o]=e,f)[p]||1,b=this.$d.getTime()+n*m;return D.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=D.z(this),i=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,u=r.meridiem,d=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},f=function(e){return D.s(i%12||12,e,"0")},p=u||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return d(r.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(r.weekdaysMin,t.$W,l,2);case"ddd":return d(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return D.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,f,h){var p,g=this,m=D.p(f),b=S(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return D.m(g,b)};switch(m){case d:p=x()/12;break;case c:p=x();break;case u:p=x()/3;break;case l:p=(y-v)/6048e5;break;case s:p=(y-v)/864e5;break;case a:p=y/r;break;case i:p=y/t;break;case o:p=y/e;break;default:p=y}return h?p:D.a(p)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return D.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),_=k.prototype;return S.prototype=_,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){_[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,k,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var $c=je(wc.exports),Cc={exports:{}};Cc.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[o,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(r){var n,o;n=r,o=i&&i.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],f=u&&u[0],h=u&&u[1];a[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var o=a[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(n),u=i.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),i=this.$locale(),!l&&d&&(i=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=f(t)(e),o=n.year,i=n.month,a=n.day,s=n.hours,l=n.minutes,c=n.seconds,u=n.milliseconds,d=n.zone,h=new Date,p=a||(o||i?1:h.getDate()),g=o||h.getFullYear(),m=0;o&&!i||(m=i>0?i-1:h.getMonth());var b=s||0,v=l||0,y=c||0,x=u||0;return d?new Date(Date.UTC(g,m,p,b,v,y,x+60*d.offset*1e3)):r?new Date(Date.UTC(g,m,p,b,v,y,x)):new Date(g,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){a[1]=s[p-1];var g=r.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Sc=je(Cc.exports),Dc={exports:{}};Dc.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),a=r(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var kc=je(Dc.exports),_c={exports:{}};_c.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Oc=je(_c.exports),Ec={exports:{}};Ec.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Tc,Ic,Fc=je(Ec.exports),Mc={exports:{}};Mc.exports=(Tc={year:0,month:1,day:2,hour:3,minute:4,second:5},Ic={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=Ic[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Ic[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,c=s.value,u=Tc[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(r.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var a=o&&t,s=o||t||n,l=i(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var a=i(n-=60*(o-t)*1e3,r);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(r.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],f=r(u).utcOffset(d);return f.$x.$timezone=s,f},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var Ac,jc=je(Mc.exports);$c.extend(kc),$c.extend(Fc),$c.extend(Oc),$c.extend(Sc),$c.extend(jc),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=$c(t).startOf("week");return zc(r).map((e=>Rc(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Rc(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push($c(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+$c(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=$c(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?$c(n):void 0,o?$c(o):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Ac||(Ac={}));const zc=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Rc=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Bc=[1,3,5,7,8,10,12],Pc=[4,6,9,11];var Lc,Nc,Hc,Wc;!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),a=parseInt(n);return 0==o?"1":Bc.includes(i)?Math.min(o,31).toString():Pc.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=$c(e,r);return $c(t,r).diff(n,"minute")},e.toDayjs=e=>e?$c(e):$c(),e.addMinutesToTime=(e,t,r="HH:mm")=>$c(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>$c(e).isSame($c(t),r)}(Lc||(Lc={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!$c(e).isBefore(n,"day"))||!(!o||!$c(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if($c(e).isValid())return e}return""}}(Nc||(Nc={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Hc||(Hc={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const a=n+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Wc||(Wc={}));function Vc(e){const t=s(null);return p((()=>{t.current=e}),[e]),u(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}const Yc=(e,t,r="window",n)=>{const o=s();c((()=>{o.current=t}),[t]),c((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])},Uc=()=>{const[e,t]=g(!1);return c((()=>{t(!0)}),[]),e};function Kc({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const o=n.value,i=t(o),a=null!==(r=n.selectionEnd)&&void 0!==r?r:0,s=o.substring(0,a),l=t(s),c=s.length-l.length,u=Math.max(0,a-c);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(u,u)}}}}const qc=e=>{const t=(e=>{const t=s(e),r=s();return c((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},Gc=e=>{const[t,r]=g(e),n=s(e);return[t,u((e=>{n.current=e,r(e)}),[]),n]},Qc=_.div`
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
`,Zc=_.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Ei["overlay-subtle"]:Ei["overlay-strong"]};
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
`;var Xc;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Xc||(Xc={}));const Jc=()=>{const[e,t]=g(void 0),r=R();return c((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(Xc.Change,e),r.events.emit(Xc.Ready),()=>r.events.off(Xc.Change,e)}),[r]),e},eu=({show:e=!1,rootId:r,onOverlayClick:n,children:i,backgroundOpacity:a,backgroundBlur:l=!0,disableTransition:u=!1,enableOverlayClick:d=!1,zIndex:f,id:h})=>{const[p,m]=g(null),[b,v]=g(),[y]=g((()=>Hc.generate())),x=P(),w=s(),$=s(null),C=i&&o.cloneElement(i,{ref:$}),S=h?`lifesg-ds-overlay-root-${h}`:"lifesg-ds-overlay-root",D=null!=f?f:b?99999:99998;(e=>{const t=R();c((()=>{if(!t)return;const r={zIndex:e};t.events.emit(Xc.Change,r)}),[t,e]),c((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit(Xc.Change,r)};return null==t||t.events.on(Xc.Ready,r),()=>null==t?void 0:t.events.off(Xc.Ready,r)}),[t,e])})(D),c((()=>(E(),m(_()),()=>{A(),I().length<1&&T("remove")})),[]),c((()=>{if(e){const e=O();k(e),M();const t=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(t)}{A();const e=setTimeout((()=>{I().length<1&&T("remove")}),200);return()=>clearTimeout(e)}}),[e]);const k=e=>{w.current=e,v(e)},_=()=>document&&r?document.getElementById(r):document?document.body:null,O=()=>I().length>0,E=()=>{if(!document.getElementById(ru)){const e=document.createElement("style");e.id=ru;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${nu} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${nu}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},T=e=>{const t=document.body.classList.contains(nu);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(nu):document.body.classList.add(nu)},I=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},M=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},A=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},j=e=>{var t;const r=null===(t=$.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&d&&(e.preventDefault(),n())};return p?F.createPortal(t(Qc,{id:S,"data-testid":S,$show:e,$zIndex:D,children:i&&t(L,{id:x,children:t(Zc,{"data-testid":"overlay-wrapper",$show:e,$stacked:b,$backgroundBlur:l,$disableTransition:u,onClick:j,children:C})})}),p):null},tu=e=>t(B,{children:t(eu,Object.assign({},e))}),ru="lifesg-ds-overlay-stylesheet",nu="lifesg-ds-overlay-open",ou=_.div`
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
`,iu=e=>{var{id:r="modal",show:n,animationFrom:o="bottom",children:i,enableOverlayClick:a=!0,rootComponentId:s,zIndex:l,onOverlayClick:u,dismissKeyboardOnShow:d=!0}=e,f=lt(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,p]=g(),[m,b]=g();c((()=>window.visualViewport?(y(),window.visualViewport.addEventListener("resize",y),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",y)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),c((()=>{var e,t;n&&d&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]);const v=()=>{const e=.01*window.innerHeight;p(e)},y=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;p(e),b(window.visualViewport.offsetTop)}};return t(tu,{"data-testid":`${r}-overlay`,show:n,enableOverlayClick:a,onOverlayClick:u,id:r,rootId:s,zIndex:l,children:t(ou,Object.assign({show:n,animationFrom:o,"data-testid":r,verticalHeight:h,offsetTop:m},f,{children:i}))})},au=_.div`
    border-radius: ${Ai.md};
    background: ${Ei.bg};
    padding: ${Mi["spacing-16"]} ${Mi["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,su=_.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Mi["spacing-24"]};
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
                background-color: ${Ei["bg-hover-neutral"]};
            `}
    }
`,lu=o.forwardRef(((e,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,s=lt(e,["children","focusHighlight","focusOutline","type"]);return t(su,Object.assign({ref:r,$outline:i,$highlight:o,type:a},s,{children:n}))})),cu=_.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Ei.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${zi.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,uu=_(lu)`
    position: absolute;
    top: var(--close-button-top-inset, ${Mi["spacing-16"]});
    right: var(--close-button-right-inset, ${Mi["spacing-16"]});
    padding: 0;
    color: ${Ei.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${zi.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Mi["spacing-20"]});
    }
`,du=r=>{var{id:n="modal-box",children:o,onClose:i,showCloseButton:a=!0}=r,s=lt(r,["id","children","onClose","showCloseButton"]);return e(cu,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&t(uu,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:t(te,{})}),o]}))},fu=e=>{const{textSize:t}=e||{};return O`
        // Text styling
        ${t&&Ti[`${t}-regular`]}

        strong {
            font-weight: ${Ti.Spec["weight-semibold"]};
            ${t&&Ti[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Ti.Spec["weight-semibold"]};
            ${t&&Ti[`${t}-semibold`]}
            color: ${Ei.hyperlink};
            text-decoration: none;

            svg {
                color: ${Ei["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Ei["hyperlink-hover"]};

                svg {
                    color: ${Ei["icon-hover"]};
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
    `},hu=_.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,pu=_((e=>{var{children:r}=e,n=lt(e,["children"]);const o=n["data-testid"]||"card";return t(au,Object.assign({},n,{"data-testid":o,children:"string"==typeof r?t(Ni.BodyBL,{children:r}):r}))}))`
    color: ${Ei.text};
    ${fu({textSize:"body-md"})}

    ${zi.MaxWidth.sm} {
        display: none;
    }
`,gu=_(du)`
    padding: 3.5rem 1.25rem 2.5rem;
`,mu=_.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Ei.text};
    ${fu({textSize:"body-md"})}
`,bu=n=>{var{children:o,visible:i,onMobileClose:a}=n,s=lt(n,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=E(),u=ji["sm-max"]({theme:c}),d=xc.useMediaQuery({maxWidth:u}),f=()=>{a&&a()},h=()=>"string"==typeof o?t(Ni.BodyMD,{children:o}):o;return e(r,{children:[i&&t(hu,Object.assign({"data-testid":l},s,{children:t(pu,{children:h()})})),d&&t(iu,{show:null!=i&&i,onOverlayClick:f,children:t(gu,{onClose:f,children:t(mu,{children:h()})})})]})},vu=_.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,yu=n=>{var o,i,{children:a,popoverContent:l,trigger:c="click",position:u="top",zIndex:d,rootNode:f,customOffset:h,delay:p,onPopoverAppear:m,onPopoverDismiss:b}=n,v=lt(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[y,x]=g(!1),w=s(null),$=s(null),C=E(),S=ji["sm-max"]({theme:C}),D=xc.useMediaQuery({maxWidth:S}),{refs:k,floatingStyles:_,context:O}=N({open:y,placement:u,whileElementsMounted:H,middleware:[W(null!=h?h:16),V(),Y({limiter:U()})],onOpenChange:e=>{x(e),y!==e&&B(e)}}),T=Jc(),I=D?"click":c,F=K(O,{ignoreMouse:"hover"===I}),M=q(O),A=G(O,{enabled:"hover"===I,delay:{open:null!==(o=null==p?void 0:p.open)&&void 0!==o?o:0,close:null!==(i=null==p?void 0:p.close)&&void 0!==i?i:500}}),{getReferenceProps:j,getFloatingProps:z}=Q([F,M,A]),R=()=>{x(!1),B(!1)},B=e=>{e&&m&&m(),!e&&b&&b()};return e(r,{children:[t(vu,Object.assign({ref:e=>{w.current=e,k.setReference(e)}},j({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),v,{children:a})),y&&t(Z,{root:f,children:t(X,{context:O,children:t("div",Object.assign({ref:e=>{$.current=e,k.setFloating(e)},style:Object.assign(Object.assign({},_),{outline:"none",zIndex:null!=d?d:T})},z(),{children:"function"==typeof l?l():t(bu,{visible:!0,onMobileClose:R,children:l})}))})})]})},xu=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},wu=_.span`
    color: ${Ei["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>xu(e)}

    &:hover,
    &:focus-visible {
        color: ${Ei["text-hover"]};
        ${({$hoverStyle:e})=>xu(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,$u=_.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,Cu=r=>{var{ariaLabel:n,content:o,icon:i,underlineStyle:a="default",underlineHoverStyle:s="default"}=r,l=lt(r,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const c=!!o;return t(yu,Object.assign({},l,{children:e(wu,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,"aria-label":null!=n?n:c?void 0:"More info",children:[o,i&&t($u,{$standalone:!c,children:i})]})}))},Su=_.div`
    padding-left: ${Mi["spacing-4"]};
    display: inline;
`,Du=({addon:e,rootNode:r})=>{const{content:n,type:o,icon:i,id:a,zIndex:s,"data-testid":l}=e;return t(Su,{children:t(Cu,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=i?i:t(z,{"data-testid":`${o}-icon`}),ariaLabel:"More info"})})},ku=_.label`
    color: ${Ei["text-subtle"]};
    margin-bottom: ${Mi["spacing-8"]};
    display: inline-block;

    ${Ti["form-label"]}
    ${fu()}
    font-weight: ${Ti.Spec["weight-semibold"]};
`,_u=_.p`
    ${Ti["body-sm-semibold"]}
    color: ${Ei["text-error"]};
    margin-top: ${Mi["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`,Ou=_.span`
    ${Ti["form-description"]}
    color: ${Ei["text-subtler"]};
    display: block;
`,Eu=r=>{var{children:n,addon:o,subtitle:i,"data-testid":a}=r,s=lt(r,["children","addon","subtitle","data-testid"]);return e(ku,Object.assign({},s,{children:[n,o&&o.type&&("popover"===(null==o?void 0:o.type)?t(Du,{addon:o}):null),"string"==typeof i?t(Ou,Object.assign({"data-testid":a?`${a}-subtitle`:"subtitle"},s,{children:i})):i]}))},Tu=_.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:n,$xlSpan:o,$lgStart:i,$lgSpan:a,$mdStart:s,$mdSpan:l,$smStart:c,$smSpan:u,$xsStart:d,$xsSpan:f,$xxsStart:h,$xxsSpan:p}=e;return O`
            grid-column: ${t||"auto"} / span ${r||1};

            ${ui.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${o||1};
            }

            ${ui.MaxWidth.lg} {
                grid-column: ${i||"auto"} / span ${a||1};
            }

            ${ui.MaxWidth.md} {
                grid-column: ${s||"auto"} / span ${l||1};
            }

            ${ui.MaxWidth.sm} {
                grid-column: ${c||"auto"} / span ${u||1};
            }

            ${ui.MaxWidth.xs} {
                grid-column: ${d||"auto"} / span ${f||1};
            }

            ${ui.MaxWidth.xxs} {
                grid-column: ${h||"auto"} / span ${p||1};
            }
        `}}
`,Iu=o.forwardRef(((e,r)=>{const n=E(),{xxlCols:o,xlCols:i,lgCols:a,mdCols:s,smCols:l,xsCols:c,xxsCols:u}=e,d=lt(e,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),f=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return t(Tu,Object.assign({ref:r},(()=>{const e=li["xxl-column"]({theme:n}),t=li["xl-column"]({theme:n}),r=li["lg-column"]({theme:n}),d=li["md-column"]({theme:n}),h=li["sm-column"]({theme:n}),p=li["xs-column"]({theme:n}),g=li["xxs-column"]({theme:n}),m=f(o||i||a||s||l||c||u,e,"xxl"),b=f(i||a||s||l||c||u,t,"xl"),v=f(a||s||l||c||u,r,"lg"),y=f(s||l||c||u,d,"md"),x=f(l||c||u,h,"sm"),w=f(c||u,p,"xs"),$=f(u,g,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),d))})),Fu={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Mu=e=>Object.keys(Fu).reduce(((t,r)=>{const n=Fu[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Au=Mu("max-width"),ju=(Mu("min-width"),_.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return O`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Au.tablet} {
                grid-column: ${n||"auto"} / span
                    ${o||1};
            }

            ${Au.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`),zu=o.forwardRef(((e,r)=>{const{mobileCols:n,tabletCols:o,desktopCols:i}=e,a=lt(e,["mobileCols","tabletCols","desktopCols"]);return t(ju,Object.assign({ref:r},(()=>{const e=o||n,t=n,r=Ru(i||o||n),a=Ru(e),s=Ru(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),Ru=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,o=t<=r?r:t;let i;return i=o===n?1:o-n,{start:n,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Bu=O`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${Mi["spacing-32"]};
    }
`,Pu=_.div`
    ${Bu}
`,Lu=_(Iu)`
    ${Bu}
`,Nu=_(zu)`
    ${Bu}
`,Hu=({label:r,errorMessage:n,id:o,disabled:i,children:a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,"data-error-testid":v})=>{const y=!s&&(l||c||u)?"v2-grid":!s&&(d||f||h||p||g||m||b)?"grid":s||"flex",w=()=>v||(o?`${o}-error-message`:"error-message"),C=()=>!!n;const S=(e=>{switch(e){case"v2-grid":return Nu;case"grid":return Lu;case"flex":return Pu}})(y);return e(S,Object.assign({},(e=>{switch(e){case"v2-grid":return{mobileCols:l,tabletCols:c,desktopCols:u};case"grid":return{xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b};case"flex":return}})(y),{children:[r&&t(Eu,"string"==typeof r?{htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",disabled:i,children:r}:Object.assign({htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",disabled:i},r)),(()=>{const e={"aria-invalid":C(),"aria-describedby":C()&&w()};return $.map(a,(t=>x(t,e)))})(),n&&t(_u,{id:w(),tabIndex:0,"data-testid":w(),children:n})]}))},Wu=e=>"small"===e?2.5:3,Vu=_.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Wu(e.$variant);return O`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,Yu=O`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Mi["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Wu(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Ai.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Ei["border-focus"]};
    }
`,Uu=_.button`
    ${Yu}
    cursor: pointer;
`,Ku=_.div`
    ${Yu}
`,qu=T`
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
`,Gu=_.div`
    position: relative;
    border: ${Fi["width-010"]} ${Fi.solid} ${Ei.border};
    border-radius: ${Ai.sm};
    background: ${Ei.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${Ei["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Ei["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?O`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:O`
                animation: ${qu} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?O`
                background: ${Ei["bg-disabled"]};

                ${Uu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Ei.border};
                    box-shadow: none;
                }
            `:e.$readOnly?O`
                border: none;
                background: transparent !important;

                ${Uu} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?O`
                border-color: ${Ei["border-error"]};

                :focus-within {
                    border-color: ${Ei["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Ei["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`;_.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${Ii["duration-250"]} ${Ii["ease-default"]};
    margin-left: ${Mi["spacing-16"]};
`,_(re)`
    color: ${Ei.icon};
`;const Qu=_.div`
    height: 1px;
    background: ${Ei.border};
    margin: 0 ${Mi["spacing-8"]};
`,Zu=_.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return O`
                color: ${Ei["text-disabled"]};
            `}}
`,Xu=_.div`
    ${e=>"small"===e.$variant?Ti["body-md-regular"]:Ti["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return O`
                    ${Ri(1)}
                `}}
    overflow: hidden;
`,Ju=_(Xu)`
    color: ${Ei["text-subtler"]};
`,ed=({children:e,show:r,error:n,disabled:o,testId:i,onBlur:a,readOnly:l,className:c,variant:u})=>{const d=s(null);return Yc("mousedown",(function(e){if(!o){if(d&&d.current.contains(e.target))return;r&&a()}}),"document"),t(Vu,{className:c,$variant:u,children:t(Gu,{ref:d,error:n&&!r,disabled:o,$readOnly:l,expanded:r,"data-testid":i,children:e})})},td=_.div`
    display: flex;
    flex-direction: column;
`,rd=e=>"right"===e?"bottom-end":"bottom-start",nd=({enabled:n,isOpen:o,onOpen:i,onClose:a,onDismiss:l,renderElement:c,renderDropdown:u,customZIndex:d,clickToToggle:f=!1,offset:h=0,alignment:p="left",fitAvailableHeight:g})=>{var m;const b=E(),v=ji["sm-max"]({theme:b}),y=s(null),x=s(null),{width:w=0}=gc({targetRef:y,handleHeight:!1}),$={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<v;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:C,floatingStyles:S,context:D}=N({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==l||l():e&&!o?null==i||i():!e&&o&&(null==a||a(r))},whileElementsMounted:H,placement:rd(p),middleware:[W(h),V(),Y({limiter:U()}),J({apply({availableHeight:e}){x.current&&Object.assign(x.current.style,{maxHeight:g?`${e}px`:void 0,overflowY:g?"hidden":void 0})}}),$]}),k=Jc(),{isMounted:_,styles:O}=ee(D,{initial:{opacity:0},open:{opacity:1},duration:300}),T=K(D,{enabled:n,toggle:f}),I=q(D,{enabled:n}),{getReferenceProps:F,getFloatingProps:M}=Q([T,I]);return e(r,{children:[t("div",Object.assign({ref:e=>{y.current=e,C.setReference(e)}},F(),{children:c()})),_&&t(Z,{children:t(X,{context:D,modal:!1,initialFocus:x,returnFocus:!1,children:t("div",Object.assign({ref:C.setFloating,style:Object.assign(Object.assign({},S),{zIndex:null!==(m=null!=d?d:k)&&void 0!==m?m:50})},M(),{children:t(td,{ref:x,style:Object.assign({},O),inert:O.opacity<1?"":void 0,children:u({elementWidth:w})})}))})})]})},od=_.div`
    --vertical-inset: ${Mi["spacing-24"]};
    --horizontal-inset: ${Mi["spacing-20"]};
    --header-bottom-spacing: ${Mi["spacing-4"]};

    border: ${Fi["width-010"]} ${Fi.solid} ${Ei.border};
    border-radius: ${Ai.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${zi.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,id=_.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,ad=T`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,sd=_.div`
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
    animation: ${ad} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ld=_(sd)`
    animation-delay: -0.45s;
`,cd=_(sd)`
    animation-delay: -0.3s;
`,ud=_(sd)`
    animation-delay: -0.15s;
`,dd=({color:r,className:n,size:o})=>e(id,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[t(sd,{id:"inner1"}),t(ld,{id:"inner2"}),t(cd,{id:"inner3"}),t(ud,{id:"inner4"})]}),fd={collections:{default:{Button:{"button-radius":Di.sm,"button-default-colour-bg":ti["bg-primary"],"button-default-colour-bg-hover":ti["bg-primary-hover"],"button-default-colour-text":ti["text-inverse"],"button-secondary-colour-border":ti["border-primary"],"button-secondary-colour-text":ti["text-primary"],"button-light-colour-text":ti["text-primary"],"button-link-colour-text":ti["text-primary"]}},pa:{Button:{"button-radius":Di.full,"button-default-colour-bg":ti["bg-primary"],"button-default-colour-bg-hover":ti["bg-primary-hover"],"button-default-colour-text":ti["text-inverse"],"button-secondary-colour-border":ti["border-primary"],"button-secondary-colour-text":ti["text-primary"],"button-light-colour-text":ti["text-primary"],"button-link-colour-text":ti["text-primary"]}}},defaultValue:"default"},hd=(e,t)=>r=>{var n,o;const i=r.theme,a=Vo(fd,null==i?void 0:i.componentScheme);return pd((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[t])||a[e][t],r)},pd=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},gd=hd("Button","button-radius"),md=hd("Button","button-default-colour-bg"),bd=hd("Button","button-default-colour-bg-hover"),vd=hd("Button","button-default-colour-text"),yd=hd("Button","button-secondary-colour-border"),xd=hd("Button","button-secondary-colour-text"),wd=hd("Button","button-light-colour-text"),$d=hd("Button","button-link-colour-text"),Cd=_.button`
    padding: ${Mi["spacing-8"]} ${Mi["spacing-16"]};
    min-width: 4rem;
    border: ${Fi["width-010"]} ${Fi.solid} transparent;
    transition: all ${Ii["duration-250"]} ${Ii["ease-default"]};
    border-radius: ${gd};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return O`
                    background-color: ${Ei.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Ei["border-error-strong"]:yd};

                    color: ${e.$buttonIsDanger?Ei["text-error"]:xd};

                    &:hover,
                    &:active {
                        background-color: ${Ei["bg-hover-neutral"]};
                    }
                `;case"light":return O`
                    background-color: ${Ei.bg};
                    border-color: ${Ei.border};

                    color: ${e.$buttonIsDanger?Ei["text-error"]:wd};

                    &:hover,
                    &:active {
                        background-color: ${Ei["bg-hover-neutral"]};
                    }
                `;case"link":return O`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Ei["text-error"]:$d};
                    &:hover,
                    &:active {
                        background-color: ${Ei["bg-hover-neutral"]};
                    }
                `;case"disabled":return O`
                    background-color: ${Ei["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ei["text-disabled"]};
                `;default:return O`
                    background-color: ${e.$buttonIsDanger?Ei["bg-error-strong"]:md};};

                    ${zi.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${vd}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Ei["bg-error-strong-hover"]:bd}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return O`
                    height: 2.5rem;
                    ${Ti["body-md-semibold"]}

                    ${zi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return O`
                    height: 4rem;
                    ${Ti["heading-md-semibold"]}

                    ${zi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return O`
                    height: 3rem;
                    ${Ti["heading-xs-semibold"]}

                    ${zi.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Sd=_(dd)`
    margin-right: 0.5rem;
`,Dd=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=lt(r,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Cd,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(Sd,{}),t("span",{children:o})]}))};Dd.displayName="Button.Default";const kd=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=lt(r,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Cd,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(Sd,{}),t("span",{children:o})]}))};kd.displayName="Button.Small";const _d=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=lt(r,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Cd,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(Sd,{}),t("span",{children:o})]}))};_d.displayName="Button.Large";const Od={Default:o.forwardRef(Dd),Small:o.forwardRef(kd),Large:o.forwardRef(_d)},Ed=O`
    color: ${Ei.icon};
    height: 1rem;
    width: 1rem;
`,Td=_(ne)`
    ${Ed}
`,Id=_(oe)`
    ${Ed}
`,Fd=_(re)`
    ${Ed}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Md=_.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Ad=_.div`
    display: flex;
    flex: 1;
    position: relative;
`,jd=_.div`
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
    background: ${Ei.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return O`
                display: none;
            `}}
`,Rd=_.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Bd=_.div`
    display: flex;
`,Pd=_.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?O`
                display: none;
            `:e.$expanded?O`
                ${Fd} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Ld=_.span`
    ${Ti["body-md-regular"]}
    color: ${Ei.text};
`,Nd=_.div`
    display: flex;
`,Hd=_(lu)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Wd=_.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Vd=_(Od.Small)`
    flex: 1;
`,Yd=_.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,Ud=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Ai.md};
    margin: 0 0.5rem;
    transition: ${Ii["duration-150"]} ${Ii["ease-default"]};

    // default styles
    ${Ti["body-md-regular"]}
    border-radius: ${Ai.md};
    border: ${Fi["width-010"]} ${Fi.solid} transparent;
    background-clip: border-box;
    color: ${Ei.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?O`
                cursor: pointer;
            `:e.$disabledDisplay?O`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?O`
                background: ${Ei["bg-selected"]};
                border-color: ${Ei["border-selected"]};
                color: ${Ei["text-selected"]};
                font-weight: ${Ti.Spec["weight-semibold"]};

                ${t&&O`
                    &:hover {
                        background: ${Ei["bg-selected-hover"]};
                        border-color: ${Ei["border-selected-hover"]};
                        color: ${Ei["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?O`
                color: ${Ei["text-primary"]};
                font-weight: ${Ti.Spec["weight-semibold"]};
            `:r?O`
                color: ${Ei["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?O`
                &:hover {
                    background: ${Ei["bg-selected-hover"]};
                    border-color: ${Ei["border-selected-hover"]};
                    color: ${Ei["text-selected-hover"]};
                    font-weight: ${Ti.Spec["weight-semibold"]};
                }
            `:O`
            &:hover {
                background: ${Ei["bg-hover"]};
                color: ${Ei["text-hover"]};
                font-weight: ${Ti.Spec["weight-semibold"]};
            }
        `}}
`,Kd=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:u,onMonthSelect:d})=>{const f=a((()=>Ac.generateMonths($c(e))),[e]),h=e=>{const t="start"===r&&o&&e.isAfter(o,"month")&&s,i="end"===r&&n&&e.isBefore(n,"month")&&s;return!(!t&&!i)},p=e=>{const t=e.format("MMMM"),r=(n=e,!Ac.isWithinRange(n,l?$c(l):void 0,c?$c(c):void 0,"month"));var n;const o=i.isSame(e,"month")?"selected-month":$c().isSame(e,"month")?"current-month":"default";return{disabledDisplay:r||h(e),interactive:!r||u,month:t,variant:o}};return f.length?t(Yd,{children:f.map((e=>{const{disabledDisplay:r,interactive:n,variant:o,month:i}=p(e);return t(Ud,{$variant:o,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||d(e)})(e,!n),children:i},i)}))}):null},qd=_.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Gd=_.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Ii["duration-150"]} ${Ii["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${Ti["body-md-regular"]}
    border-radius: ${Ai.md};
    border: ${Fi["width-010"]} ${Fi.solid} transparent;
    background-clip: border-box;
    color: ${Ei.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?O`
                cursor: pointer;
            `:t?O`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?O`
                background: ${Ei["bg-selected"]};
                border-color: ${Ei["border-selected"]};
                color: ${Ei["text-selected"]};
                font-weight: ${Ti.Spec["weight-semibold"]};

                ${t&&O`
                    &:hover {
                        background: ${Ei["bg-selected-hover"]};
                        border-color: ${Ei["border-selected-hover"]};
                        color: ${Ei["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?O`
                color: ${Ei["text-primary"]};
                font-weight: ${Ti.Spec["weight-semibold"]};
            `:"other-decade"===e||r?O`
                color: ${Ei["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?O`
                &:hover {
                    background: ${Ei["bg-selected-hover"]};
                    border-color: ${Ei["border-selected-hover"]};
                    color: ${Ei["text-selected-hover"]};
                    font-weight: ${Ti.Spec["weight-semibold"]};
                }
            `:O`
            &:hover {
                background: ${Ei["bg-hover"]};
                color: ${Ei["text-hover"]};
                font-weight: ${Ti.Spec["weight-semibold"]};
            }
        `}}
`,Qd=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:u,onYearSelect:d})=>{const f=a((()=>Ac.generateDecadeOfYears($c(e))),[e]),h=e=>{const t="start"===r&&o&&e.isAfter(o,"year")&&s,i="end"===r&&n&&e.isBefore(n,"year")&&s;return!(!t&&!i)},p=e=>{const t=[0,11].includes(f.indexOf(e)),r=e.year(),n=(o=e,!Ac.isWithinRange(o,l?$c(l):void 0,c?$c(c):void 0,"year"));var o;const a=t?"other-decade":i.isSame(e,"year")?"selected-year":$c().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||h(e),interactive:!n||u,year:r,variant:a}};return f.length?t(qd,{children:f.map((e=>{const{disabledDisplay:r,interactive:n,variant:o,year:i}=p(e);return t(Gd,{$variant:o,$disabledDisplay:r,$interactive:!!n,onClick:()=>((e,t)=>{t||d(e)})(e,!n),children:i},i)}))}):null},Zd=o.forwardRef(((n,o)=>{var{children:i,initialCalendarDate:a,minDate:l,maxDate:u,currentFocus:d,selectedStartDate:h,selectedEndDate:p,selectWithinRange:m,dynamicHeight:b=!1,allowDisabledSelection:v,onCalendarDateChange:y,withButton:x,doneButtonDisabled:w,onDismiss:$,showNavigationHeader:C=!0,getLeftArrowDate:S,getRightArrowDate:D,isLeftArrowDisabled:k,isRightArrowDisabled:_,getMonthHeaderLabel:O,getYearHeaderLabel:E}=n,T=lt(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[I,F]=g(Lc.toDayjs(a)),[M,A]=g(Lc.toDayjs(a)),[j,z]=g("default"),R=s(null),B=s(null),P=s(null);f(o,(()=>({defaultView(){z("default")},resetView(){const e=Lc.toDayjs(a);F(e),A(e),z("default")},setCalendarDate(e){const t=Lc.toDayjs(e);F(t),A(t)}}))),c((()=>{const e=Lc.toDayjs(a);F(e),A(e)}),[a]),c((()=>{U(M)}),[M]);const L=()=>{var e;"month-options"!==j?(z("month-options"),null===(e=P.current)||void 0===e||e.focus()):(z("default"),F(M))},N=()=>{"default"!==j?(z("default"),F(M)):z("year-options")},H=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=S?S(I):I.subtract(1,"month");switch(j){case"default":A(t),F(t);break;case"month-options":F((e=>e.subtract(1,"year")));break;case"year-options":F((e=>e.subtract(10,"year")))}},W=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=D?D(I):I.add(1,"month");switch(j){case"default":A(t),F(t);break;case"month-options":F((e=>e.add(1,"year")));break;case"year-options":F((e=>e.add(10,"year")))}},V=e=>{F(e),A(e),x||z("default")},Y=()=>{const e=Lc.toDayjs(a);F(e),A(e),"default"===j?K("reset"):z("default")},U=e=>{y&&y(e)},K=e=>{$&&$(e)},q=()=>{if(!l||v)return!1;const e=$c(l);return"month-options"===j?!Ac.isPreviousYearWithinRange(I,e):"year-options"===j?!Ac.isPreviousDecadeWithinRange(I,e):k?k(I):!Ac.isPreviousMonthWithinRange(I,e)},G=()=>{if(!u||v)return!1;const e=$c(u);return"month-options"===j?!Ac.isNextYearWithinRange(I,e):"year-options"===j?!Ac.isNextDecadeWithinRange(I,e):_?_(I):!Ac.isNextMonthWithinRange(I,e)},Q=()=>{if("year-options"===j){const{beginDecade:e,endDecade:t}=Ac.getStartEndDecade(I);return`${e} to ${t}`}return E?E(I):I.format("YYYY")},Z=()=>{const n=O?O(I):I.format("MMM");return e(r,{children:[e(Pd,{type:"button",tabIndex:-1,$expanded:"month-options"===j,$visible:"default"===j,id:"month-dropdown",onClick:L,children:[t(Ld,{children:n}),t(Fd,{})]}),e(Pd,{type:"button",tabIndex:-1,$expanded:"default"!==j,id:"year-dropdown",onClick:N,children:[t(Ld,{children:Q()}),t(Fd,{})]})]})},X=()=>{switch(j){case"month-options":return t(Kd,{calendarDate:I,currentFocus:d,minDate:l,maxDate:u,selectedStartDate:h,selectedEndDate:p,viewCalendarDate:M,isNewSelection:!!m,onMonthSelect:V,allowDisabledSelection:v});case"year-options":return t(Qd,{calendarDate:I,currentFocus:d,minDate:l,maxDate:u,selectedStartDate:h,selectedEndDate:p,viewCalendarDate:M,isNewSelection:!!m,onYearSelect:V,allowDisabledSelection:v});default:return null}};return e(Md,Object.assign({ref:P,"data-id":"calendar-container","data-testid":"calendar-container"},T,{children:[C&&e(Rd,{"data-id":"calendar-header","data-testid":"calendar-header",children:[t(Bd,{children:Z()}),e(Nd,{children:[t(Hd,{"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:H,children:t(Td,{})}),t(Hd,{"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:W,children:t(Id,{})})]})]}),t(Ad,{children:(()=>{const n="function"==typeof i?i({calendarDate:M,currentView:j}):i;return e(r,b?{children:["default"===j&&n,X()]}:{children:[t(jd,{children:n}),t(zd,{$visible:"default"!==j,children:X()})]})})()}),(()=>{if(!x)return;const r=!!("default"===j)&&w;return e(Wd,{children:[t(Vd,{ref:B,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Y,children:"Cancel"}),t(Vd,{"data-testid":"done-button",ref:R,type:"button",onClick:()=>{r||(F(M),"default"===j?K("confirmed"):z("default"))},disabled:r,children:"Done"})]})})()]}))})),Xd=_.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Jd=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${Ti["body-sm-semibold"]};
    color: ${Ei.text};
`,ef=_.div`
    grid-column: 1 / -1;
    display: flex;
`,tf=e=>{let t=Ei.bg,r="transparent";switch(e.$type){case"hover-subtle":t=Ei["bg-hover"],r=Ei["bg-hover"];break;case"hover":t=Ei["bg-hover-strong"],r=Ei["bg-hover-strong"];break;case"hover-outline":t=Ei["bg-hover-subtle"],r=Ei["border-hover"];break;case"selected-outline":t=Ei["bg-selected"],r=Ei["border-selected"];break;case"selected-outline-subtle":t=Ei["bg-selected"],r=Ei["border-selected-subtle"];break;case"selected-hover":t=Ei["bg-selected-hover"];break;case"selected-hover-outline":t=Ei["bg-selected-hover"],r=Ei["border-selected-hover"]}return{color:t,borderColor:r}},rf=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,nf=_.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Ii["duration-150"]} ${Ii["ease-default"]};
    border: ${Fi["width-010"]} ${Fi.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=tf(e);return O`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,of=_(nf)`
    left: 0;
`,af=_(nf)`
    right: 0;
`,sf=_.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Ii["duration-150"]} ${Ii["ease-default"]};

    border: ${Fi["width-010"]} ${Fi.solid} transparent;
    border-radius: ${Ai.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=tf(e);return O`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,lf=_(sf)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,cf=_(sf)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,uf=_.div`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Ti["body-md-regular"]}
    transition: ${Ii["duration-150"]} ${Ii["ease-default"]};

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"hidden"===r?O`
                    visibility: hidden;
                `:O`
                color: ${Ei["text-disabled-subtlest"]};
            `;switch(r){case"selected":return O`
                    font-weight: ${Ti.Spec["weight-semibold"]};
                    color: ${Ei["text-selected"]};
                `;case"selected-hover":return O`
                    font-weight: ${Ti.Spec["weight-semibold"]};
                    color: ${Ei["text-selected-hover"]};
                `;case"current":return O`
                    font-weight: ${Ti.Spec["weight-semibold"]};
                    color: ${Ei["text-primary"]};
                `;case"hover":return O`
                    font-weight: ${Ti.Spec["weight-semibold"]};
                    color: ${Ei["text-hover"]};
                `;case"unavailable":return O`
                    color: ${Ei["text-disabled-subtlest"]};
                `;case"hidden":return O`
                    visibility: hidden;
                `;default:return O`
                    color: ${Ei.text};
                `}}}
`,df=_.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,ff=({bgLeft:r,bgRight:n,circleLeft:o,circleRight:i,labelType:a,disabled:s,interactive:l,currentDateIndicator:c,date:u,onSelect:d,onHover:f,onHoverEnd:h})=>{const p=$c().isSame(u,"day");return e(rf,{children:[t(of,{$type:r}),t(lf,{$type:o}),t(af,{$type:n}),t(cf,{$type:i}),e(uf,{$type:a,$disabled:s,$interactive:l,onClick:()=>{d(u)},onMouseEnter:()=>{f(u)},onMouseLeave:()=>{h&&h(u)},children:[u.date(),c&&p&&t(df,{$disabled:s})]})]})},hf=({date:e,calendarDate:r,startDate:n,endDate:o,currentFocus:i,hoverDate:a,minDate:s,maxDate:l,disabledDates:c,allowDisabledSelection:u,isNewSelection:d,showActiveMonthDaysOnly:f,onSelect:h,onHover:p})=>{const g=Ac.isDisabledDay(e,c,s,l),m=!g||u,b=()=>{const e=$c(a),t=e.isBefore(o,"day"),r=e.isAfter(n,"day");let s,l,c,u;return"start"===i&&o&&t&&(n&&r?(c=a,u=o):(s=a,l=n||o)),"end"===i&&n&&r&&(o&&t?(c=n,u=a):(s=o||n,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:u}},v={date:e,calendarDate:r,disabled:g,interactive:m,currentDateIndicator:!0,onSelect:()=>{h(e,!m)},onHover:()=>{p(e.format("YYYY-MM-DD"),!m)}};return t(ff,Object.assign({},v,(()=>{const t={};if(r.month()!==e.month())t.labelType=f?"hidden":"unavailable";else if($c().isSame(e,"day")&&!g)t.labelType="current";else if(d){const r="end"===i&&n&&e.isBefore(n),a="start"===i&&o&&e.isAfter(o);(r||a)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(n,"day"),a=e.isSame(o,"day");return f&&r.month()!==e.month()?(t.labelType="hidden",t):((n&&i||o&&a)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),n&&o&&e.isBetween(n,o,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected-outline-subtle"),a||(t.bgRight="selected-outline-subtle")),t)})(),(()=>{if(!a)return{};const t={},r=e.isSame(a,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:c}=b();if(r){const r=e.isSame(n,"day"),i=e.isSame(o,"day");r||i?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):(t.labelType="hover",t.circleLeft="hover",t.circleRight="hover")}if(i&&s){if(e.isBetween(i,s,"day","[]")){const r=e.isSame(i,"day"),n=e.isSame(s,"day");r||(t.labelType="hover",t.bgLeft="hover-outline"),n||(t.labelType="hover",t.bgRight="hover-outline")}return t}return l&&c?(e.isBetween(l,c,"day","[]")&&r&&(t.labelType="selected-hover",t.circleLeft="selected-hover",t.circleRight="selected-hover"),t):t})()))};$c.extend(kc);const pf=({calendarDate:r,currentFocus:n,disabledDates:o,selectedStartDate:i,selectedEndDate:s,onSelect:l,onHover:c,isNewSelection:u,minDate:d,maxDate:f,allowDisabledSelection:h,showActiveMonthDaysOnly:p})=>{const m=a((()=>Ac.generateDays(r)),[r]),[b,v]=g(""),y=(e,t)=>{t&&!h||l(e)},x=(e,t)=>{t&&!h||(v(e),c(e))},w=()=>{v(""),c("")};return e(Xd,{"data-testid":"calendar-content",children:[m[0].map(((e,r)=>t(Jd,{children:$c(e).format("ddd")},`week-day-${r}`))),m.map(((e,a)=>t(ef,{onMouseLeave:w,children:e.map(((e,a)=>t(hf,{date:e,calendarDate:r,startDate:i,endDate:s,hoverDate:b,currentFocus:n,minDate:d,maxDate:f,disabledDates:o,allowDisabledSelection:h,isNewSelection:u,showActiveMonthDaysOnly:p,onSelect:y,onHover:x},`day-${a}`)))},a)))]})},gf=({date:e,calendarDate:r,selectedDate:n,hoverDate:o,minDate:i,maxDate:a,disabledDates:s,allowDisabledSelection:l,numberOfDays:c=1,onSelect:u,onHover:d})=>{const f=Ac.isDisabledDay(e,s,i,a),h=!f||l,{start:p,end:g}=n?Ac.getFixedRangeStartEnd(Lc.toDayjs(n),c):{start:void 0,end:void 0},{start:m,end:b}=o?Ac.getFixedRangeStartEnd(Lc.toDayjs(o),c):{start:void 0,end:void 0},v=!!n&&e.isBetween(p,g,"day","[]"),y=!!o&&e.isBetween(m,b,"day","[]"),x=v&&e.isSame(p,"day")||y&&e.isSame(m,"day"),w=v&&e.isSame(g,"day")||y&&e.isSame(b,"day"),$=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},C={date:e,calendarDate:r,disabled:f,interactive:h,currentDateIndicator:!0,onSelect:()=>{u(e,!h)},onHover:()=>{d(e.format("YYYY-MM-DD"),!h)}};return t(ff,Object.assign({},C,(()=>{const t={};return v||y?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":$c().isSame(e,"day")&&!f&&(t.labelType="current"),t})(),(()=>{const t={},r=e.format("YYYY-MM-DD");return y&&$(t,"hover",r===m,r===b),v&&$(t,"selected-outline",r===p,r===g),v&&y&&($(t,"selected-hover-outline",x,w),r===m&&r!==p&&(t.circleLeft="selected-hover")),t})()))},mf=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:u,numberOfDays:d})=>{const f=a((()=>Ac.generateDays(r)),[r]),[h,p]=g(""),m=(e,t)=>{t&&!u||(i(e),e&&!$c(e).isSame(e,"month")&&p(""))},b=(e,t)=>{t&&!u||(p(e),s(e))},v=()=>{p(""),s("")};return e(Xd,{"data-testid":"calendar-content",children:[f[0].map(((e,r)=>t(Jd,{children:$c(e).format("ddd")},`week-day-${r}`))),f.map(((e,i)=>t(ef,{onMouseLeave:v,children:e.map(((e,i)=>t(gf,{date:e,calendarDate:r,selectedDate:o,hoverDate:h,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:u,onSelect:m,onHover:b,numberOfDays:d},`day-${i}`)))},i)))]})},bf=_.div`
    width: 100%;
    background: ${Ei.bg};
`,vf=({date:e,calendarDate:r,selectedDate:n,hoverDate:o,minDate:i,maxDate:a,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:c,onSelect:u,onHover:d})=>{const f=Ac.isDisabledDay(e,s,i,a),h=!f||l,p={date:e,calendarDate:r,disabled:f,interactive:h,currentDateIndicator:!0,onSelect:()=>{u(e,!h)},onHover:()=>{d(e.format("YYYY-MM-DD"),!h)}};return t(ff,Object.assign({},p,(()=>{const t={};r.month()!==e.month()?t.labelType=c?"hidden":"unavailable":$c().isSame(e,"day")&&!f&&(t.labelType="current");const i=e.isSame(n,"day"),a=e.isSame(o,"day");return i&&a?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):i?(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"):a&&(t.labelType="hover",t.circleLeft="hover-subtle",t.circleRight="hover-subtle"),t})()))};$c.extend(kc);const yf=({calendarDate:r,disabledDates:n,selectedDate:o,onSelect:i,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:u,showActiveMonthDaysOnly:d})=>{const f=a((()=>Ac.generateDays(r)),[r]),[h,p]=g(""),m=(e,t)=>{t&&!u||i(e)},b=(e,t)=>{t&&!u||(p(e),s(e))},v=()=>{p(""),s("")};return e(Xd,{"data-testid":"calendar-content",children:[f[0].map(((e,r)=>t(Jd,{children:$c(e).format("ddd")},`week-day-${r}`))),f.map(((e,i)=>t(ef,{onMouseLeave:v,children:e.map(((e,i)=>t(vf,{date:e,calendarDate:r,selectedDate:o,hoverDate:h,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:u,showActiveMonthDaysOnly:d,onSelect:m,onHover:b},`day-${i}`)))},i)))]})},xf=({date:e,calendarDate:r,selectedDate:n,hoverDate:o,minDate:i,maxDate:a,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:u})=>{const d=Ac.isDisabledDay(e,s,i,a),f=!d||l,{start:h,end:p}=Ac.getWeekStartEnd(Lc.toDayjs(n)),{start:g,end:m}=Ac.getWeekStartEnd(Lc.toDayjs(o)),b=n&&e.isBetween(h,p,"day","[]"),v=o&&e.isBetween(g,m,"day","[]"),y=b&&e.isSame(h)||v&&e.isSame(g),x=b&&e.isSame(p)||v&&e.isSame(m),w={date:e,calendarDate:r,disabled:d,interactive:f,currentDateIndicator:!0,onSelect:()=>{c(e,!f)},onHover:()=>{u(e.format("YYYY-MM-DD"),!f)}};return t(ff,Object.assign({},w,(()=>{const t={};return r.month()!==e.month()?t.labelType="unavailable":$c().isSame(e,"day")&&!d&&(t.labelType="current"),t})(),(()=>{const e={};let t,r;return b&&v?(t="selected-hover-outline",r="selected-hover"):b?(t="selected-outline",r="selected"):v&&(t="hover",r="hover"),t&&(e.labelType=r,y?e.circleLeft=t:e.bgLeft=t,x?e.circleRight=t:e.bgRight=t),e})()))},wf=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:u})=>{const d=a((()=>Ac.generateDays(r)),[r]),[f,h]=g(""),p=(e,t)=>{if(t&&!u)return;const r=e.startOf("week");i(r),e&&!$c(e).isSame(r,"month")&&h("")},m=(e,t)=>{t&&!u||(h(e),s(e))},b=()=>{h(""),s("")};return e(Xd,{"data-testid":"calendar-content",children:[d[0].map(((e,r)=>t(Jd,{children:$c(e).format("ddd")},`week-day-${r}`))),d.map(((e,i)=>t(ef,{onMouseLeave:b,children:e.map(((e,i)=>t(xf,{date:e,calendarDate:r,selectedDate:o,hoverDate:f,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:u,onSelect:p,onHover:m},`day-${i}`)))},i)))]})},$f=o.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:o,onDismiss:i,value:a,endValue:l,currentFocus:c,withButton:u,variant:d,minDate:h,maxDate:p,allowDisabledSelection:g,selectWithinRange:m=!0,initialCalendarDate:b,numberOfDays:v,showActiveMonthDaysOnly:y=!1},x)=>{const w=s(null),$=s(void 0);f(x,(()=>({reset(){var e;null===(e=w.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=w.current)||void 0===t||t.setCalendarDate(e)}})));const C=e=>{var t;const r=e.format("YYYY-MM-DD");null===(t=w.current)||void 0===t||t.setCalendarDate(r),D(r)},S=e=>{k(e)},D=e=>{n&&n(e)},k=e=>{o&&o(e)},_=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(bf,{children:t(Zd,{ref:w,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(d){case"single":e=!1;break;case"range":case"fixed-range":e=!!a!=!!l;break;case"week":e=!a&&!l}return e})(),onDismiss:i,minDate:h,maxDate:p,selectWithinRange:m,currentFocus:c,selectedStartDate:a,selectedEndDate:l,allowDisabledSelection:g,onCalendarDateChange:e=>{$.current&&$.current.isSame(e,"month")||_(e),$.current=e},initialCalendarDate:b,children:({calendarDate:r})=>(r=>{switch(d){case"week":return t(wf,{calendarDate:r,disabledDates:e,selectedStartDate:a,minDate:h,maxDate:p,allowDisabledSelection:g,onSelect:C,onHover:S});case"fixed-range":return t(mf,{calendarDate:r,disabledDates:e,selectedStartDate:a,minDate:h,maxDate:p,allowDisabledSelection:g,onSelect:C,onHover:S,numberOfDays:v});case"single":return t(yf,{calendarDate:r,disabledDates:e,selectedDate:a,minDate:h,maxDate:p,allowDisabledSelection:g,showActiveMonthDaysOnly:y,onSelect:C,onHover:S});default:return t(pf,{calendarDate:r,currentFocus:c,disabledDates:e,selectedStartDate:a,selectedEndDate:l,minDate:h,maxDate:p,isNewSelection:m,allowDisabledSelection:g,showActiveMonthDaysOnly:y,onSelect:C,onHover:S})}})(r)})})})),Cf=o.forwardRef(((e,r)=>{var{width:n}=e,o=lt(e,["width"]);return t(od,{$width:n,"data-testid":"calendar-dropdown",children:t($f,Object.assign({ref:r},o))})})),Sf=O`
    outline-offset: -1px;
    outline: ${Fi["width-020"]} ${Fi.solid} ${Ei["border-focus"]};
`,Df=O`
    outline-color: ${Ei["border-focus"]};
`,kf=O`
    outline-color: ${Ei["border-disabled"]};
`,_f=O`
    outline-color: ${Ei["border-error-focus"]};
`,Of=_.div`
    border: ${Fi["width-010"]} ${Fi.solid} ${Ei.border};
    border-radius: ${Ai.sm};
    background: ${Ei.bg};

    :focus-within {
        ${Sf}
    }
    ${e=>e.$focused&&Sf}

    ${e=>e.$readOnly?O`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Df}
                }
                ${e.$focused&&Df}
            `:e.$disabled?O`
                background: ${Ei["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${kf}
                }
                ${e.$focused&&kf}
            `:e.$error?O`
                border-color: ${Ei["border-error"]};

                :focus-within {
                    ${_f}
                }
                ${e.$focused&&_f}
            `:void 0}
`,Ef=_(Of)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Mi["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Tf=_.input`
    ${e=>"small"===e.$variant?Ti["body-md-regular"]:Ti["body-baseline-regular"]}
    color: ${Ei.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Ei["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ei["text-subtler"]};
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
`,If=_.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${Fi["width-010"]} ${Fi.solid}
            ${Ei["border-focus"]};
        border-radius: ${Ai.sm};
    }
`,Ff=_.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Mf=_.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return O`
                ${Af}, ${Bf} {
                    color: ${Ei["text-subtler"]};
                }
            `}}
`,Af=_(Tf)`
    background: transparent;
    text-align: center;
`,jf=_(Af)`
    width: 2rem;
    margin-right: ${Mi["spacing-4"]};
`,zf=_(Af)`
    width: 2.5rem;
`,Rf=_(Af)`
    width: 3rem;
    margin-left: ${Mi["spacing-4"]};
`,Bf=_.span`
    ${Ti["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return O`
                color: ${Ei.text};
            `}}
`,Pf=_.div`
    ${Ti["body-baseline-regular"]}
    background-color: ${Ei.bg};
    color: ${Ei["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?O`
                background-color: ${Ei["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?O`
                display: none;
            `:void 0}
`;$c.extend(Sc);const Lf=o.forwardRef((({disabled:r,readOnly:n,names:o,value:i,focused:a,hoverValue:l,placeholder:u,label:d,onChange:h,onFocus:p,onBlur:m,hideInputKeyboard:b},v)=>{const y=b?"none":"numeric",[x,w,$]=Gc(""),[C,S,D]=Gc(""),[k,_,O]=Gc(""),[E,T]=g("none"),[I,F]=g(!1),M=s(null),A=s(null),j=s(null),z=s(null),[R,B,P]=Y(l);c((()=>{var e;const[t="",r="",n=""]=Y(i);w(t),S(r),_(n),t||r||n||!M.current||!M.current.contains(document.activeElement)||null===(e=A.current)||void 0===e||e.focus()}),[i]),c((()=>{var e;a||T("none"),a&&(F(!0),M.current&&!M.current.contains(document.activeElement)&&(null===(e=A.current)||void 0===e||e.focus()))}),[a]),f(v,(()=>({ref:M,resetPlaceholder(){F(!1)},resetInput(){const[e="",t="",r=""]=Y(i);w(e),S(t),_(r)}})),[i]);const L=e=>{var t;e.preventDefault(),null===(t=A.current)||void 0===t||t.focus()},N=e=>{e.target.select();const t=e.target.name;T(t)},H=e=>{const[t,r,n]=o,i={[t]:$.current,[r]:D.current,[n]:O.current},a=e.target.name,s=i[a],l=a!==n?Wc.padValue(s,!0):s;switch(a){case t:i[t]=l,w(l);break;case r:i[r]=l,S(l)}const c=`${i[n]}-${i[r]}-${i[t]}`,u=$c(c,"YYYY-MM-DD",!0).isValid(),d=!i[t]&&!i[r]&&!i[n];u&&s!==l&&h(c),M.current&&!M.current.contains(e.relatedTarget)&&(T("none"),null==m||m(d||u))},W=e=>{var t,r;if(l)return;const n=e.target.name,i=e.target.value.replace(/[^0-9]/g,""),a={day:x,month:C,year:k};switch(n){case o[0]:a.day=i,w(i),2===i.length&&(null===(t=j.current)||void 0===t||t.focus());break;case o[1]:a.month=i,S(i),2===i.length&&(null===(r=z.current)||void 0===r||r.focus());break;case o[2]:a.year=i,_(i)}if(!a.day&&!a.month&&!a.year)return void h("");const s=`${a.year}-${a.month}-${a.day}`;$c(s,"YYYY-MM-DD",!0).isValid()&&h(s)},V=e=>{var t,r;"Backspace"!==e.code&&"Backspace"!==e.key||(E===o[1]&&0===C.length&&(null===(t=A.current)||void 0===t||t.focus()),E===o[2]&&0===k.length&&(null===(r=j.current)||void 0===r||r.focus()))};function Y(e){if(e){const t=$c(new Date(e));return t.isValid()?[Wc.padValue(t.date().toString()),Wc.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e(Ff,{role:"group","aria-label":d,onClick:()=>{var e;r||n||(F(!0),M.current&&!M.current.contains(document.activeElement)&&(null===(e=A.current)||void 0===e||e.focus()))},onFocus:e=>{r||(F(!0),a||null==p||p(e))},children:[e(Mf,{ref:M,$hover:!!l,children:[t(jf,{ref:A,name:o[0],maxLength:2,value:null!=R?R:x,onFocus:N,onBlur:H,onChange:W,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${o[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:E!==o[0]||n?"DD":""}),t(Bf,{$inactive:0===x.length,children:"/"}),t(zf,{ref:j,name:o[1],maxLength:2,value:null!=B?B:C,onFocus:N,onBlur:H,onChange:W,onKeyDown:V,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${o[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:E!==o[1]||n?"MM":""}),t(Bf,{$inactive:0===C.length,children:"/"}),t(Rf,{ref:z,name:o[2],maxLength:4,value:null!=P?P:k,onFocus:N,onBlur:H,onChange:W,onKeyDown:V,type:"text",inputMode:y,pattern:"[0-9]{4}","data-testid":`${o[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:E!==o[2]||n?"YYYY":""})]}),(()=>{if(!i&&!n&&u)return t(Pf,{$hide:I,$disabled:r,onMouseDown:L,children:u})})()]})})),Nf=_(Ef)`
    height: 3rem;
`,Hf=e=>{var{minDate:r,maxDate:n,disabled:o,disabledDates:i,error:a,hideInputKeyboard:l,value:u,onChange:d,onFocus:f,onBlur:h,onYearMonthDisplayChange:p,withButton:m=!0,readOnly:b,id:v,allowDisabledSelection:y,zIndex:x}=e,w=lt(e,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[$,C]=g(Nc.sanitizeInput(u)),[S,D]=g(Nc.sanitizeInput(u)),[k,_]=g(void 0),[O,E]=g(!1),[T,I]=g(!1),F=s(null),M=s(null);c((()=>{const e=Nc.sanitizeInput(u);C(e),D(e)}),[u]);const A=e=>{!y&&Nc.isDateDisabled(e,{disabledDates:i,minDate:r,maxDate:n})||(D(e),m||(L(e),C(e),e&&E(!1)))},j=e=>{var t;D(e),m||(L(e),C(e),e&&(null===(t=F.current)||void 0===t||t.focus(),E(!1)),k&&_(void 0))},z=()=>{b||o||(E(!0),T||(I(!0),f&&f()))},R=e=>{var t;T&&!O&&F.current&&!F.current.contains(e.relatedTarget)&&(null===(t=M.current)||void 0===t||t.resetInput(),D($),I(!1),N())},B=e=>{_(e)},P=e=>{var t;switch(e){case"reset":D($);break;case"confirmed":C(S),L(S)}null===(t=F.current)||void 0===t||t.focus(),E(!1)},L=e=>{d&&d(e)},N=()=>{h&&h()};return t(nd,{enabled:!b&&!o,isOpen:O,renderElement:()=>t(Nf,Object.assign({tabIndex:-1,ref:F,onBlur:R,onFocus:z,$disabled:o,$readOnly:b,$focused:T,$error:a,id:v,"data-testid":w["data-testid"]},w,{children:t(Lf,{ref:M,disabled:o,onChange:A,readOnly:b,focused:O,names:["start-day","start-month","start-year"],value:S,hoverValue:k,hideInputKeyboard:l})})),renderDropdown:({elementWidth:e})=>t(Cf,{variant:"single",initialCalendarDate:S,withButton:m,value:S,disabledDates:i,minDate:r,maxDate:n,allowDisabledSelection:y,onHover:B,onSelect:j,onDismiss:P,onYearMonthDisplayChange:p,width:e}),onClose:()=>{var e;null===(e=M.current)||void 0===e||e.resetInput(),D($),E(!1),I(!1),N()},onDismiss:()=>{var e,t;null===(e=M.current)||void 0===e||e.resetInput(),null===(t=F.current)||void 0===t||t.focus(),D($),E(!1)},customZIndex:x,offset:16})},Wf=_.div`
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
                        100% - ${Ti.Spec["body-size-baseline"]} -
                            ${Mi["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${Mi["spacing-8"]};
                }
            `}}
`,Vf=_.div`
    width: 100%; // Force next flex item to break to next line
`,Yf=_.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Uf=_(ie)`
    color: ${Ei.icon};
    width: ${Ti.Spec["body-size-baseline"]};
    height: ${Ti.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Mi["spacing-8"]};
    align-self: center;
`,Kf=_.div`
    position: absolute;
    background: ${e=>e.$error?Ei["border-error-focus-strong"]:Ei["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Mi["spacing-8"]} - (${Ti.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Ii["duration-350"]} ${Ii["ease-standard"]},
        opacity ${Ii["duration-350"]} ${Ii["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return O`
                    opacity: 1;
                `;case"end":return O`
                    left: calc(50% + ${Mi["spacing-16"]});
                    opacity: 1;
                `;case"none":return O`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return O`
                display: none;
            `}}
`,qf=({children:r,currentActive:n,error:o,className:i,wrap:a})=>{const[s,l]=r;return e(Wf,{className:i,$wrap:a,children:[t(Yf,{"data-id":"range-container-elem1-container",children:s}),t(Uf,{}),a&&t(Vf,{}),t(Yf,{"data-id":"range-container-elem2-container",children:l}),t(Kf,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:a})]})},Gf=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},Qf=_(Ef)`
    ${e=>e.$wrap&&O`
            padding: ${Mi["spacing-12"]} ${Mi["spacing-16"]};
        `}
`,Zf=_.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&O`
            height: fit-content;
        `}
`,Xf={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},Jf=r=>{var{minDate:n,maxDate:o,disabled:i,disabledDates:a,error:d,hideInputKeyboard:f,value:h,valueEnd:p,onChange:m,onFocus:b,onBlur:v,onYearMonthDisplayChange:y,withButton:x=!0,variant:w="range",numberOfDays:$=7,readOnly:C,id:S,allowDisabledSelection:D,zIndex:k}=r,_=lt(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[O,E]=g(),[T,I]=g(void 0),[F,M]=g(!1),[A,j]=g(!1),z="week"===w,R="fixed-range"===w,[{selectedStart:B,selectedEnd:P,currentFocus:L,calendarOpen:N,isStartDirty:H,isEndDirty:W,focused:V},Y]=(({initialState:e,reducers:t,name:r,debug:n})=>{const[o,i]=l(((e,r)=>t[r.type]?t[r.type](e,r.payload):e),e);return[o,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{n&&Gf(r,e,t),i({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Xf,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:z?"none":R?"start":t,calendarOpen:!C,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),U=s(!1),K=s(null),q=s(null),G=s(null),Q=s(null),Z=(({maxWidth:e,targetRef:t})=>{const[r,n]=g(!1);return gc({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:u((t=>{n(t<=e)}),[e])}),r})({maxWidth:320,targetRef:K});c((()=>{Y.resetRange({start:Nc.sanitizeInput(h),end:Nc.sanitizeInput(p)})}),[h,p]),c((()=>{"start"===L?E(B):"end"===L&&E(P)}),[L]);const X=e=>{var t,r,n;"Enter"!==e.code||x||(B&&P?(Y.done({start:B,end:P}),null==m||m(B,P)):(Y.dismiss(),null===(t=K.current)||void 0===t||t.focus(),null===(r=G.current)||void 0===r||r.resetPlaceholder(),null===(n=Q.current)||void 0===n||n.resetPlaceholder()))},J=e=>{var t;if(fe(e))return void(U.current=!0);if(Y.changeStart(e),null===(t=q.current)||void 0===t||t.setCalendarDate(e),U.current=!1,!e)return void(x||P||!W||(Y.resetRange({start:"",end:""}),null==m||m("","")));if(!P)return void Y.focus("end");if($c(e).isAfter(P,"day"))Y.reselectEnd();else{if(W)return x?void 0:(Y.done({start:e,end:P}),void(null==m||m(e,P)));Y.focus("end")}},ee=e=>{var t,r;if(fe(e))return void(U.current=!0);if($c(e).isBefore(B,"day"))return Y.changeStart(e),null===(t=q.current)||void 0===t||t.setCalendarDate(e),void Y.reselectEnd();if(Y.changeEnd(e),null===(r=q.current)||void 0===r||r.setCalendarDate(e),e){if(B)return x?void 0:(Y.done({start:B,end:e}),void(null==m||m(B,e)));Y.focus("start")}else x||B||!H||(Y.resetRange({start:"",end:""}),null==m||m("",""))},te=e=>{var t;if(fe(e))return void(U.current=!0);if(Y.changeStart(e),null===(t=q.current)||void 0===t||t.setCalendarDate(e),U.current=!1,!e)return void(x?Y.changeEnd(""):(Y.resetRange({start:"",end:""}),null==m||m("","")));const r=$c(e).format("YYYY-MM-DD"),n=$c(r).add($-1,"day").format("YYYY-MM-DD");return Y.changeStart(r),Y.changeEnd(n),U.current=!1,x?void 0:(Y.done({start:r,end:n}),void(null==m||m(r,n)))},re=()=>{C||i||V||(Y.focus("start"),null==b||b())},ne=e=>{var t,r;V&&!N&&K.current&&K.current.contains(e.relatedTarget)&&(Y.blur(),M(!1),j(!1),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null===(r=Q.current)||void 0===r||r.resetPlaceholder(),null==v||v())},oe=e=>t=>{t.stopPropagation(),C||(Y.focus(e),ie(),ae(),V||null==b||b())},ie=()=>{if(z){const e=Lc.toDayjs(B).startOf("week").format("YYYY-MM-DD");M(!0),j(!0),E(e)}},ae=()=>{R&&(j(!0),E(B))},se=e=>{var t;e&&!U.current||(Y.resetStart(),null===(t=G.current)||void 0===t||t.resetInput())},le=e=>{var t;e&&!U.current||(Y.resetEnd(),null===(t=Q.current)||void 0===t||t.resetInput())},ce=e=>{switch(w){case"week":(e=>{const t=$c(e).startOf("week").format("YYYY-MM-DD"),r=$c(e).endOf("week").format("YYYY-MM-DD");if(Y.changeStart(t),Y.changeEnd(r),U.current=!1,!x)Y.done({start:t,end:r}),null==m||m(t,r)})(e);break;case"fixed-range":te(e);break;default:"start"===L?J(e):"end"===L&&ee(e)}},ue=e=>{var t;switch(null===(t=K.current)||void 0===t||t.focus(),e){case"reset":Y.cancel();break;case"confirmed":Y.done({start:B,end:P}),null==m||m(B,P)}},de=e=>{I(e)},fe=e=>!D&&e&&Nc.isDateDisabled(e,{disabledDates:a,minDate:n,maxDate:o}),he=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===L?T:void 0,end:"end"===L?T:void 0};break;case"week":if(!T)return;t={start:$c(T).startOf("week").format("YYYY-MM-DD"),end:$c(T).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!T)return;t={start:$c(T).format("YYYY-MM-DD"),end:$c(T).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return t(nd,{enabled:!C&&!i,isOpen:N,onClose:()=>{var e,t;Y.blur(),M(!1),j(!1),null===(e=G.current)||void 0===e||e.resetPlaceholder(),null===(t=Q.current)||void 0===t||t.resetPlaceholder(),null==v||v()},onDismiss:()=>{var e,t,r;Y.dismiss(),null===(e=K.current)||void 0===e||e.focus(),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null===(r=Q.current)||void 0===r||r.resetPlaceholder()},renderElement:()=>t(Qf,Object.assign({ref:K,tabIndex:-1,onFocus:re,onBlur:ne,$focused:V,$disabled:i,$readOnly:C,$error:d,$wrap:Z,id:S,"data-testid":_["data-testid"],onKeyDown:X},_,{children:e(qf,{currentActive:L,wrap:Z,error:d,children:[t(Zf,{$wrap:Z,children:t(Lf,{ref:G,placeholder:"From",names:["start-day","start-month","start-year"],value:B,disabled:i,readOnly:F||C,focused:"start"===L,hoverValue:he("start"),onChange:R?te:J,onFocus:oe("start"),onBlur:se,hideInputKeyboard:f})}),t(Zf,{$wrap:Z,children:t(Lf,{ref:Q,placeholder:"To",names:["end-day","end-month","end-year"],value:P,disabled:i,readOnly:A||C,focused:"end"===L,hoverValue:he("end"),onChange:ee,onFocus:oe("end"),onBlur:le,hideInputKeyboard:f})})]})})),renderDropdown:({elementWidth:e})=>t(Cf,{ref:q,variant:w,initialCalendarDate:O,withButton:x,value:B,endValue:P,selectWithinRange:H||W,currentFocus:L,disabledDates:a,minDate:n,maxDate:o,allowDisabledSelection:D,onSelect:ce,onDismiss:ue,onHover:de,onYearMonthDisplayChange:y,numberOfDays:$,width:e}),customZIndex:k,offset:16})},eh=_(Cd)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,th=(r,n)=>{const{children:o,disabled:i=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left",loading:u=!1}=r,d=lt(r,["children","disabled","styleType","danger","icon","iconPosition","loading"]),f={$buttonIconPosition:c,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(eh,Object.assign({ref:n,"data-testid":d["data-testid"]||"button-with-icon",disabled:i},f,d,{children:[u?t(dd,{}):l,t("span",{children:o})]}))};th.displayName="ButtonWithIcon.Default";const rh=(r,n)=>{const{children:o,disabled:i=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left",loading:u=!1}=r,d=lt(r,["children","disabled","styleType","danger","icon","iconPosition","loading"]),f={$buttonIconPosition:c,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(eh,Object.assign({ref:n,"data-testid":d["data-testid"]||"button-with-icon",disabled:i},f,d,{children:[u?t(dd,{}):l,t("span",{children:o})]}))};rh.displayName="ButtonWithIcon.Small";const nh={Default:o.forwardRef(th),Small:o.forwardRef(rh)},oh=({className:e,progress:r,color:n,"data-testid":o})=>t(ih,{className:e,$innerWidth:r,$color:n,"data-testid":o,children:t("progress",{value:100*r,max:100})}),ih=_.div`
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

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):Ei["icon-primary-subtle"](e),O`
            border: ${Fi["width-010"]} ${Fi.solid} ${r};
            border-radius: ${Ai.sm};

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
`,ah=_.button`
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
                    background-color: ${Ei.bg};
                    border: ${Fi["width-010"]} ${Fi.solid}
                        ${Ei["border-primary"]};
                    color: ${Ei["text-primary"]};

                    :hover {
                        background-color: ${Ei["bg-hover-neutral"]};
                    }
                `;case"light":return O`
                    background-color: ${Ei.bg};
                    border: ${Fi["width-010"]} ${Fi.solid}
                        ${Ei.border};
                    color: ${Ei["text-primary"]};

                    :hover {
                        background-color: ${Ei["bg-hover-neutral"]};
                    }
                `;default:return O`
                    background-color: ${Ei["bg-primary"]};
                    border: none;
                    color: ${Ei["text-inverse"]};

                    :hover {
                        background-color: ${Ei["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${Ei["bg-disabled"]};
        border: ${Fi["width-010"]} ${Fi.solid}
            ${Ei["border-disabled"]};
        color: ${Ei["text-disabled"]};
        cursor: not-allowed;
    }
`,sh=o.forwardRef(((e,r)=>{var{"data-testid":n,styleType:o="primary",children:i,sizeType:a="default",type:s="button"}=e,l=lt(e,["data-testid","styleType","children","sizeType","type"]);return t(ah,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:a,$styleType:o},l,{children:i}))})),lh=Object.assign(iu,{Box:du}),ch=O`
    ${e=>`\n        ${zi.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${ji["sm-max"](e)}px)\n    `}
`,uh=O`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${ji["sm-max"](e)}px)\n    `}
`,dh=_.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>O`
            ${Fi.Util["dashed-default"]({radius:Ai.sm,thickness:Fi["width-040"],colour:e.$disabled?Ei["border-disabled"]:Ei.border})}

            background-color: ${e.$disabled?Ei["bg-disabled"]:Ei.bg};
        `}
    height: 14.125rem;
`,fh=_(Od.Default)`
    width: fit-content;
    margin: 0 ${Mi["spacing-20"]};

    :disabled {
        border-color: ${Ei["border-strong"]};
    }
`,hh=_(sh)`
    position: absolute;
    top: ${Mi["spacing-16"]};
    right: ${Mi["spacing-16"]};

    :disabled {
        border-color: ${Ei["border-strong"]};
    }
`,ph=_.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${Mi["spacing-16"]}) * 2);
    height: 100%;
`,gh=_.div`
    background: ${Ei["bg-primary-subtlest"]};
    border: ${Fi["width-010"]} ${Fi.solid} ${Ei.border};
    border-radius: ${Ai.sm};
    margin: 0 ${Mi["spacing-20"]};
    padding: ${Mi["spacing-16"]};
    display: flex;
    gap: ${Mi["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,mh=_(Ni.BodySM)`
    margin-top: ${Mi["spacing-16"]};
`,bh=_(lh)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,vh=_.div`
    width: 100%;
    margin: auto;
    padding: ${Mi["layout-xxl"]} ${Mi["layout-sm"]};

    ${ch} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,yh=_(lh.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${Mi["spacing-16"]};

    ${ch} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${Mi["spacing-8"]};
        --close-button-right-inset: ${Mi["spacing-20"]};
    }
`,xh=_.h2`
    ${Ti["body-baseline-semibold"]}
    color: ${Ei.text};
    margin-bottom: ${Mi["spacing-16"]};
    text-align: center;

    ${ch} {
        ${Ti["body-md-semibold"]}
        margin: ${Mi["spacing-12"]} 0;
    }
`,wh=_.div`
    width: 100%;
    height: 20rem;
    border-radius: ${Ai.lg};
    overflow: hidden;

    ${ch} {
        border-radius: 0;
        flex: 1;
    }

    ${uh} {
        background: ${Ei["bg-strong"]};
    }
`,$h=_.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${Ei["bg-stronger"]};
    margin: auto;

    ${ch} {
        aspect-ratio: 4/3;
    }
    ${zi.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${uh} {
        width: auto;
        height: 100%;
    }
`,Ch=_.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${Ei["border-strong"]};
    pointer-events: none;

    ${ch} {
        width: calc(100% - ${Mi["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,Sh=_.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${Mi["spacing-16"]};

    ${zi.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${Mi["spacing-16"]} ${Mi["spacing-24"]}
            ${Mi["spacing-48"]};
        gap: ${Mi["spacing-16"]};
    }

    ${uh} {
        flex-direction: row;
        margin: ${Mi["spacing-16"]} ${Mi["spacing-20"]};
    }
`,Dh=_(Od.Default)`
    width: 8.5rem;
    ${zi.MaxWidth.sm} {
        width: 100%;
    }
    ${uh} {
        height: 2.5rem;
    }
`,kh=_.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,_h=_.canvas`
    cursor: crosshair;
`,Oh=C((()=>ct(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.1b221c2c.js")).ESignatureCanvas}})))),Eh=n=>{const{description:o,id:i,loadingProgress:a,loadingLabel:l="Uploading...",onChange:u,value:d,disabled:f}=n,h=lt(n,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[p,m]=g(!1),b=s(null),[v,y]=g(d),x=E(),w=ji["sm-max"]({theme:x}),$=xc.useMediaQuery({maxWidth:w}),C=xc.useMediaQuery({maxHeight:w,orientation:"landscape"}),D=()=>{var e;null===(e=b.current)||void 0===e||e.clear()},k=()=>{if(b.current){const e=b.current.export();y(e),m(!1),null==u||u(e)}};c((()=>{y(d)}),[d]);return e("div",Object.assign({},h,{children:[t(dh,{$disabled:f,children:"number"==typeof a?e(gh,{children:[l&&t(Ni.BodyMD,{children:l}),t(oh,{progress:null!=a?a:0,"data-testid":`${i||"e-signature"}-progress-bar`})]}):v?e(r,{children:[t(ph,{src:v,alt:"Signature preview"}),t(hh,{styleType:"light",onClick:()=>m(!0),id:i,"aria-label":"Edit signature",disabled:f,children:t(ae,{})})]}):t(fh,{type:"button",styleType:"secondary","aria-label":"Add signature",id:i,onClick:()=>m(!0),disabled:f,children:"Add signature"})}),t(bh,{"data-testid":"signature-modal",show:p,children:t(vh,{children:e(yh,{onClose:()=>m(!1),children:[t(xh,{children:"Signature"}),t(wh,{children:e($h,{children:[t(Ch,{}),t(S,{fallback:null,children:p&&t(Oh,{ref:b,baseImageDataURL:v})})]})}),e(Sh,{children:[t(Dh,{as:C?nh.Small:nh.Default,type:"button",styleType:$&&!C?"light":"link",icon:t(se,{}),onClick:D,children:"Clear"}),t(Dh,{as:C?Od.Small:Od.Default,type:"button",onClick:k,children:"Save"})]})]})})}),o?t(mh,{children:o}):null]}))};function Th(e,t){return Th=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Th(e,t)}function Ih(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Fh(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Mh(e){return null!==e&&1===e.length?e[0]:e.slice()}function Ah(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function jh(e,t){return zh(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function zh(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let Rh=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),Ah(r.getMouseEventMap())}))}Ih(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=jh(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),Ah(r.getKeyDownEventMap()),Ih(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),Ah(r.getMouseEventMap()),Ih(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),Ah(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),o={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},i={index:t,value:Mh(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(o["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(i)),r.props.renderThumb(o,i)},r.renderTrack=(e,t,n)=>{const o={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},i={index:e,value:Mh(r.state.value)};return r.props.renderTrack(o,i)};let n=Fh(t.value);n.length||(n=Fh(t.defaultValue)),r.pendingResizeTimeouts=[];const i=[];for(let e=0;e<n.length;e+=1)n[e]=jh(n[e],t),i.push(e);return r.resizeObserver=null,r.resizeElementRef=o.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:i},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Th(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=Fh(e.value);return r.length?t.pending?null:{value:r.map((t=>jh(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return Mh(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,o=n.length;for(let i=0;i<o;i+=1){const o=this.calcOffset(n[i]),a=Math.abs(e-o);a<t&&(t=a,r=i)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return jh(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),o=e[r],i=n[this.posMaxKey()],a=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=o-s,c=Math.abs(i-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],o=r[this.posMinKey()];let i=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:o));return this.props.invert&&(i=this.state.sliderLength-i),i-=this.state.thumbSize/2,i},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),o=jh(this.calcValue(r),this.props),i=this.state.value.slice();i[n]=o;for(let e=0;e<i.length-1;e+=1)if(i[e+1]-i[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:i},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=jh(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=jh(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,o=t[r];if(e===o)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:i,max:a,min:s,minDistance:l}=this.props;if(!i){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,i&&n>1&&(e>o?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const i=n-o*r;t[e-1-o]>i&&(t[e-1-o]=i)}}(n,t,l,a)):e<o&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const e=n+o*r;t[o]<e&&(t[o]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,o;for(n=r,o=e[n]+t;null!==e[n+1]&&o>e[n+1];n+=1,o=e[n]+t)e[n+1]=zh(o,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,o=e[n]-t;null!==e[n-1]&&o<e[n-1];n-=1,o=e[n]-t)e[n-1]=zh(o,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](Mh(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return o.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,i,a)},t}(o.Component);Rh.displayName="ReactSlider",Rh.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>o.createElement("div",e),renderTrack:e=>o.createElement("div",e),renderMark:e=>o.createElement("span",e)};var Bh=Rh;const Ph=_.div`
    isolation: isolate;
`,Lh=_.div`
    margin-top: ${Mi["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${Mi["spacing-8"]};
`,Nh=_.div`
    margin-bottom: ${Mi["spacing-8"]};
`,Hh=_(Ni.BodyBL)`
    overflow-wrap: anywhere;
`,Wh=_(Bh)`
    height: 0.875rem;
`,Vh=_.div`
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

        background-color: ${Ei.bg};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${Fi["width-010"]} ${Fi.solid}
            ${e=>e.$disabled?Ei["border-selected-disabled"]:Ei["border-strong"]};
        border-radius: 50%;
    }
`,Yh=_.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${Vh}:after {
        outline-offset: -1px;
        outline: ${Fi["width-040"]} ${Fi.solid}
            ${Ei["border-selected"]};
    }
`,Uh=_.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${Ai.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Ei["border-strong"](e)};
`,Kh=r=>{var{value:n,min:o=0,max:i=100,step:a=1,minRange:s,numOfThumbs:l=2,colors:u,disabled:d,readOnly:f,ariaLabels:h,showSliderLabels:p,sliderLabelPrefix:m,sliderLabelSuffix:b,showIndicatorLabel:v,indicatorLabelPrefix:y,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:$,onChangeEnd:C}=r,S=lt(r,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[D,k]=g(O()),_=function(){const e=function(){const e=d||f?Ei["border-disabled"]:Ei["border-strong"],t=d||f?Ei["border-selected-disabled"]:Ei["border-selected"];if(1===l)return[t,e];const r=[];r.push(e);for(let e=0;e<l-1;e++)r.push(t);return r.push(e),r}();return new Array(l+1).fill(0).map(((t,r)=>(null==u?void 0:u[r])||e[r]))}();c((()=>{n!==D&&k(O())}),[n]);function O(){if(n&&n.length===l)return n;const e=[];for(let t=0;t<l;t++)e.push(o+a*t);return e}const E=t=>w?w(t):e(Hh,{children:[m,t,b]});return e(Ph,Object.assign({},S,{children:[v&&t(Nh,{children:(()=>{let t="";if(1===D.length)t=`${D[0]}`;else if(2===D.length)t=`${D[0]} - ${D[1]}`;else if(D.length>2){t=`${Math.min(...D)} - ${Math.max(...D)}`}return e(Hh,{children:[y,t,x]})})()}),t(Wh,{step:a,min:o,max:i,value:D,disabled:d||f,onChange:(e,t)=>{if("number"==typeof e){const t=[e];k(t),null==$||$(t)}else{if(t>-1&&D[t]===e[t])return;const r=[...e];k(r),null==$||$(r)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];k(t),null==C||C(t)}else{const t=[...e];k(t),null==C||C(t)}},minDistance:s,ariaLabel:h,renderThumb:(e,r)=>t(Yh,Object.assign({"data-testid":`slider-thumb-${r.index}`},e,{tabIndex:d?void 0:e.tabIndex,children:t(Vh,{$disabled:d,$readOnly:f})})),renderTrack:(e,r)=>t(Uh,Object.assign({"data-testid":`slider-track-${r.index}`},e,{$color:_[r.index]}))}),p&&e(Lh,{children:[t("div",{children:E(o)}),t("div",{children:E(i)})]})]}))},qh=_.div`
    display: flex;
    margin-bottom: ${Mi["spacing-16"]};
    align-items: baseline;
`,Gh=_.div`
    margin: 0 0.5rem;
`,Qh=_.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,Zh=_.div`
    flex: 1;
    border-radius: ${Ai.sm} ${Ai.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=Ei["bg-strongest"];return e.$disabled&&e.$selected?t=Ei["bg-selected-stronger-disabled"]:e.$disabled?t=Ei["bg-disabled"]:e.$selected&&(t=Ei["bg-selected-stronger"]),O`
            background-color: ${t};
        `}}
`,Xh=_(Kh)`
    margin-top: -0.3125rem;
`,Jh=n=>{var{bins:o=[],interval:i,disabled:s,readOnly:l,value:u,showRangeLabels:d,rangeLabelPrefix:f,rangeLabelSuffix:h,ariaLabels:p,onChange:m,onChangeEnd:b,renderEmptyView:v,renderRangeLabel:y}=n,x=lt(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=o.map((e=>e.count)),$=Math.max(...w),C=o.map((e=>e.minValue)),S=Math.max(...C),D=Math.min(...C),[k,_]=g(I()),O=a((()=>{const e=[...o].sort(((e,t)=>e.minValue-t.minValue)),t=(S-D)/i+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===D+i*n));t?r.push(t):r.push({count:0,minValue:D+i*n})}return r}),[o,i]);c((()=>{u!==k&&_(I())}),[u]);const E=e=>{const[t,r]=e,n=[t,r];_(n),null==m||m(n)},T=e=>{const[t,r]=e,n=[t,r];_(n),null==b||b(n)};function I(){return null!=u?u:[D,D+i]}const F=t=>y?y(t):e(Ni.BodyBL,{children:[f,t,h]});return e("div",Object.assign({},x,{children:[d&&e(qh,{children:[F(k[0]),t(Gh,{children:"-"}),F(k[1])]}),O.every((e=>0===e.count))&&v?v():e(r,{children:[t(Qh,{children:O.map(((e,r)=>{const n=e.count/$;return t(Zh,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:e.minValue>=k[0]&&e.minValue<k[1],$disabled:s||l},r)}))}),t(Xh,{min:D,max:S+i,step:i,minRange:i,numOfThumbs:2,value:k,disabled:s,readOnly:l,ariaLabels:p,onChange:E,onChangeEnd:T})]})]}))},ep=_(Tf)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&O`
            padding-left: ${Mi["spacing-16"]};
            padding-right: ${e.$showClear?0:Mi["spacing-16"]};
        `}
`,tp=_(If)`
    height: auto;
    padding: ${Mi["spacing-12"]} ${Mi["spacing-16"]};

    cursor: pointer;
    color: ${Ei.icon};

    ${e=>"no-border"===e.$styleType&&O`
            margin-right: -${Mi["spacing-12"]};
        `}
`,rp=_(te)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,np=_.div`
    display: flex;
    width: 100%;
`,op=_(Of)`
    display: flex;
    align-items: center;
    width: 100%;
`,ip=o.forwardRef(((n,o)=>{var{value:i,spacing:a,type:l,error:c,disabled:u,readOnly:d,onChange:h,onClear:p,allowClear:g=!1,className:m,styleType:b="bordered"}=n,v=lt(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=((e,t)=>"tel"===e&&!!t)(l,a),x=s(null);f(o,(()=>x.current),[]);const w=Kc({ref:x,formatter:e=>y?Wc.transformWithSpaces(e,a):e}),$=e=>{h&&(y?S(e):h(e))},C=()=>{p&&p(),x&&x.current&&x.current.focus()},S=e=>{const t=w();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,o=r.replace(/\s/g,"");e.target.value=o,null==h||h(e),n()},D=i?(e=>e?y?Wc.transformWithSpaces(e,a):e:"")(i):i,k=g&&!u&&!d&&!!i,_=()=>e(r,{children:[t(ep,Object.assign({"data-testid":"input",ref:x,disabled:u,value:D,onChange:$,type:l,readOnly:d,$showClear:k,$styleType:b},v)),k&&t(tp,{onClick:C,type:"button",$styleType:b,children:t(rp,{"aria-hidden":!0})})]});return t(r,{children:"no-border"===b?t(np,{className:m,children:_()}):t(op,{$disabled:u,$error:c,$readOnly:d,className:m,children:_()})})})),ap=o.forwardRef(((e,r)=>{const{label:n,errorMessage:o,id:i="form-field","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=e,y=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Hu,{id:i,label:n,errorMessage:o,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:t(ip,Object.assign({id:`${i}-base`,"data-testid":s||i,ref:r,error:!!o},y))})}));var sp=Kn;var lp=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var cp=function(e){return this.__data__.get(e)};var up=function(e){return this.__data__.has(e)},dp=Kn,fp=qn,hp=go;var pp=function(e,t){var r=this.__data__;if(r instanceof dp){var n=r.__data__;if(!fp||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new hp(n)}return r.set(e,t),this.size=r.size,this},gp=Kn,mp=function(){this.__data__=new sp,this.size=0},bp=lp,vp=cp,yp=up,xp=pp;function wp(e){var t=this.__data__=new gp(e);this.size=t.size}wp.prototype.clear=mp,wp.prototype.delete=bp,wp.prototype.get=vp,wp.prototype.has=yp,wp.prototype.set=xp;var $p=wp;var Cp=go,Sp=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Dp=function(e){return this.__data__.has(e)};function kp(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Cp;++t<r;)this.add(e[t])}kp.prototype.add=kp.prototype.push=Sp,kp.prototype.has=Dp;var _p=function(e,t){return e.has(t)},Op=kp,Ep=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Tp=_p;var Ip=function(e,t,r,n,o,i){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=i.get(e),u=i.get(t);if(c&&u)return c==t&&u==e;var d=-1,f=!0,h=2&r?new Op:void 0;for(i.set(e,t),i.set(t,e);++d<s;){var p=e[d],g=t[d];if(n)var m=a?n(g,p,d,t,e,i):n(p,g,d,e,t,i);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!Ep(t,(function(e,t){if(!Tp(h,t)&&(p===e||o(p,e,r,n,i)))return h.push(t)}))){f=!1;break}}else if(p!==g&&!o(p,g,r,n,i)){f=!1;break}}return i.delete(e),i.delete(t),f};var Fp=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var Mp=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Ap=mr.Uint8Array,jp=En,zp=Ip,Rp=Fp,Bp=Mp,Pp=br?br.prototype:void 0,Lp=Pp?Pp.valueOf:void 0;var Np=function(e,t,r,n,o,i,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new Ap(e),new Ap(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return jp(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Rp;case"[object Set]":var l=1&n;if(s||(s=Bp),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var u=zp(s(e),s(t),n,o,i,a);return a.delete(e),u;case"[object Symbol]":if(Lp)return Lp.call(e)==Lp.call(t)}return!1};var Hp=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},Wp=Hp,Vp=fr;var Yp=function(e,t,r){var n=t(e);return Vp(e)?n:Wp(n,r(e))};var Up=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i},Kp=function(){return[]},qp=Object.prototype.propertyIsEnumerable,Gp=Object.getOwnPropertySymbols,Qp=Gp?function(e){return null==e?[]:(e=Object(e),Up(Gp(e),(function(t){return qp.call(e,t)})))}:Kp;var Zp=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Xp=Or,Jp=Er;var eg=function(e){return Jp(e)&&"[object Arguments]"==Xp(e)},tg=Er,rg=Object.prototype,ng=rg.hasOwnProperty,og=rg.propertyIsEnumerable,ig=eg(function(){return arguments}())?eg:function(e){return tg(e)&&ng.call(e,"callee")&&!og.call(e,"callee")},ag={exports:{}};var sg=function(){return!1};!function(e,t){var r=mr,n=sg,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(ag,ag.exports);var lg=ag.exports,cg=/^(?:0|[1-9]\d*)$/;var ug=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&cg.test(e))&&e>-1&&e%1==0&&e<t};var dg=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},fg=Or,hg=dg,pg=Er,gg={};gg["[object Float32Array]"]=gg["[object Float64Array]"]=gg["[object Int8Array]"]=gg["[object Int16Array]"]=gg["[object Int32Array]"]=gg["[object Uint8Array]"]=gg["[object Uint8ClampedArray]"]=gg["[object Uint16Array]"]=gg["[object Uint32Array]"]=!0,gg["[object Arguments]"]=gg["[object Array]"]=gg["[object ArrayBuffer]"]=gg["[object Boolean]"]=gg["[object DataView]"]=gg["[object Date]"]=gg["[object Error]"]=gg["[object Function]"]=gg["[object Map]"]=gg["[object Number]"]=gg["[object Object]"]=gg["[object RegExp]"]=gg["[object Set]"]=gg["[object String]"]=gg["[object WeakMap]"]=!1;var mg=function(e){return pg(e)&&hg(e.length)&&!!gg[fg(e)]};var bg=function(e){return function(t){return e(t)}},vg={exports:{}};!function(e,t){var r=hr,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(vg,vg.exports);var yg=vg.exports,xg=mg,wg=bg,$g=yg&&yg.isTypedArray,Cg=$g?wg($g):xg,Sg=Zp,Dg=ig,kg=fr,_g=lg,Og=ug,Eg=Cg,Tg=Object.prototype.hasOwnProperty;var Ig=function(e,t){var r=kg(e),n=!r&&Dg(e),o=!r&&!n&&_g(e),i=!r&&!n&&!o&&Eg(e),a=r||n||o||i,s=a?Sg(e.length,String):[],l=s.length;for(var c in e)!t&&!Tg.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Og(c,l))||s.push(c);return s},Fg=Object.prototype;var Mg=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Fg)};var Ag=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),jg=Mg,zg=Ag,Rg=Object.prototype.hasOwnProperty;var Bg=function(e){if(!jg(e))return zg(e);var t=[];for(var r in Object(e))Rg.call(e,r)&&"constructor"!=r&&t.push(r);return t},Pg=Hr,Lg=dg;var Ng=function(e){return null!=e&&Lg(e.length)&&!Pg(e)},Hg=Ig,Wg=Bg,Vg=Ng;var Yg=function(e){return Vg(e)?Hg(e):Wg(e)},Ug=Yp,Kg=Qp,qg=Yg;var Gg=function(e){return Ug(e,qg,Kg)},Qg=Object.prototype.hasOwnProperty;var Zg=function(e,t,r,n,o,i){var a=1&r,s=Gg(e),l=s.length;if(l!=Gg(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:Qg.call(t,u)))return!1}var d=i.get(e),f=i.get(t);if(d&&f)return d==t&&f==e;var h=!0;i.set(e,t),i.set(t,e);for(var p=a;++c<l;){var g=e[u=s[c]],m=t[u];if(n)var b=a?n(m,g,u,t,e,i):n(g,m,u,e,t,i);if(!(void 0===b?g===m||o(g,m,r,n,i):b)){h=!1;break}p||(p="constructor"==u)}if(h&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(h=!1)}return i.delete(e),i.delete(t),h},Xg=ln(mr,"DataView"),Jg=qn,em=ln(mr,"Promise"),tm=ln(mr,"Set"),rm=ln(mr,"WeakMap"),nm=Or,om=Kr,im="[object Map]",am="[object Promise]",sm="[object Set]",lm="[object WeakMap]",cm="[object DataView]",um=om(Xg),dm=om(Jg),fm=om(em),hm=om(tm),pm=om(rm),gm=nm;(Xg&&gm(new Xg(new ArrayBuffer(1)))!=cm||Jg&&gm(new Jg)!=im||em&&gm(em.resolve())!=am||tm&&gm(new tm)!=sm||rm&&gm(new rm)!=lm)&&(gm=function(e){var t=nm(e),r="[object Object]"==t?e.constructor:void 0,n=r?om(r):"";if(n)switch(n){case um:return cm;case dm:return im;case fm:return am;case hm:return sm;case pm:return lm}return t});var mm=gm,bm=$p,vm=Ip,ym=Np,xm=Zg,wm=mm,$m=fr,Cm=lg,Sm=Cg,Dm="[object Arguments]",km="[object Array]",_m="[object Object]",Om=Object.prototype.hasOwnProperty;var Em=function(e,t,r,n,o,i){var a=$m(e),s=$m(t),l=a?km:wm(e),c=s?km:wm(t),u=(l=l==Dm?_m:l)==_m,d=(c=c==Dm?_m:c)==_m,f=l==c;if(f&&Cm(e)){if(!Cm(t))return!1;a=!0,u=!1}if(f&&!u)return i||(i=new bm),a||Sm(e)?vm(e,t,r,n,o,i):ym(e,t,l,r,n,o,i);if(!(1&r)){var h=u&&Om.call(e,"__wrapped__"),p=d&&Om.call(t,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?t.value():t;return i||(i=new bm),o(g,m,r,n,i)}}return!!f&&(i||(i=new bm),xm(e,t,r,n,o,i))},Tm=Er;var Im=function e(t,r,n,o,i){return t===r||(null==t||null==r||!Tm(t)&&!Tm(r)?t!=t&&r!=r:Em(t,r,n,o,e,i))},Fm=$p,Mm=Im;var Am=function(e,t,r,n){var o=r.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var s=r[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=r[o])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new Fm;if(n)var f=n(c,u,l,e,t,d);if(!(void 0===f?Mm(u,c,3,n,d):f))return!1}}return!0},jm=Br;var zm=function(e){return e==e&&!jm(e)},Rm=zm,Bm=Yg;var Pm=function(e){for(var t=Bm(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Rm(o)]}return t};var Lm=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Nm=Am,Hm=Pm,Wm=Lm;var Vm=function(e,t){return null!=e&&t in Object(e)},Ym=Ao,Um=ig,Km=fr,qm=ug,Gm=dg,Qm=zo;var Zm=function(e,t,r){for(var n=-1,o=(t=Ym(t,e)).length,i=!1;++n<o;){var a=Qm(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Gm(o)&&qm(a,o)&&(Km(e)||Um(e))},Xm=Vm,Jm=Zm;var eb=Im,tb=No,rb=function(e,t){return null!=e&&Jm(e,t,Xm)},nb=Rr,ob=zm,ib=Lm,ab=zo;var sb=function(e){return function(t){return null==t?void 0:t[e]}},lb=Po;var cb=sb,ub=function(e){return function(t){return lb(t,e)}},db=Rr,fb=zo;var hb=function(e){var t=Hm(e);return 1==t.length&&t[0][2]?Wm(t[0][0],t[0][1]):function(r){return r===e||Nm(r,e,t)}},pb=function(e,t){return nb(e)&&ob(t)?ib(ab(e),t):function(r){var n=tb(r,e);return void 0===n&&n===t?rb(r,e):eb(t,n,3)}},gb=function(e){return e},mb=fr,bb=function(e){return db(e)?cb(fb(e)):ub(e)};var vb=function(e){return"function"==typeof e?e:null==e?gb:"object"==typeof e?mb(e)?pb(e[0],e[1]):hb(e):bb(e)},yb=vb,xb=Ng,wb=Yg;var $b=function(e){return function(t,r,n){var o=Object(t);if(!xb(t)){var i=yb(r);t=wb(t),r=function(e){return i(o[e],e,o)}}var a=e(t,r,n);return a>-1?o[i?t[a]:a]:void 0}};var Cb=/\s/;var Sb=function(e){for(var t=e.length;t--&&Cb.test(e.charAt(t)););return t},Db=/^\s+/;var kb=function(e){return e?e.slice(0,Sb(e)+1).replace(Db,""):e},_b=Br,Ob=Fr,Eb=/^[-+]0x[0-9a-f]+$/i,Tb=/^0b[01]+$/i,Ib=/^0o[0-7]+$/i,Fb=parseInt;var Mb=function(e){if("number"==typeof e)return e;if(Ob(e))return NaN;if(_b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=_b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=kb(e);var r=Tb.test(e);return r||Ib.test(e)?Fb(e.slice(2),r?2:8):Eb.test(e)?NaN:+e},Ab=Mb,jb=1/0;var zb=function(e){return e?(e=Ab(e))===jb||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Rb=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},Bb=vb,Pb=function(e){var t=zb(e),r=t%1;return t==t?r?t-r:t:0},Lb=Math.max;var Nb=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:Pb(r);return o<0&&(o=Lb(n+o,0)),Rb(e,Bb(t),o)},Hb=je(Nb),Wb=je($b(Nb)),Vb=Im;var Yb=je((function(e,t){return Vb(e,t)})),Ub=Object.defineProperty,Kb={};((e,t)=>{for(var r in t)Ub(e,r,{get:t[r],enumerable:!0})})(Kb,{assign:()=>kv,colors:()=>Cv,createStringInterpolator:()=>yv,skipAnimation:()=>Sv,to:()=>xv,willAdvance:()=>Dv});var qb=uv(),Gb=e=>av(e,qb),Qb=uv();Gb.write=e=>av(e,Qb);var Zb=uv();Gb.onStart=e=>av(e,Zb);var Xb=uv();Gb.onFrame=e=>av(e,Xb);var Jb=uv();Gb.onFinish=e=>av(e,Jb);var ev=[];Gb.setTimeout=(e,t)=>{const r=Gb.now()+t,n=()=>{const e=ev.findIndex((e=>e.cancel==n));~e&&ev.splice(e,1),ov-=~e?1:0},o={time:r,handler:e,cancel:n};return ev.splice(tv(r),0,o),ov+=1,sv(),o};var tv=e=>~(~ev.findIndex((t=>t.time>e))||~ev.length);Gb.cancel=e=>{Zb.delete(e),Xb.delete(e),Jb.delete(e),qb.delete(e),Qb.delete(e)},Gb.sync=e=>{iv=!0,Gb.batchedUpdates(e),iv=!1},Gb.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Gb.onStart(r)}return n.handler=e,n.cancel=()=>{Zb.delete(r),t=null},n};var rv="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Gb.use=e=>rv=e,Gb.now="undefined"!=typeof performance?()=>performance.now():Date.now,Gb.batchedUpdates=e=>e(),Gb.catch=console.error,Gb.frameLoop="always",Gb.advance=()=>{"demand"!==Gb.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):cv()};var nv=-1,ov=0,iv=!1;function av(e,t){iv?(t.delete(e),e(0)):(t.add(e),sv())}function sv(){nv<0&&(nv=0,"demand"!==Gb.frameLoop&&rv(lv))}function lv(){~nv&&(rv(lv),Gb.batchedUpdates(cv))}function cv(){const e=nv;nv=Gb.now();const t=tv(nv);t&&(dv(ev.splice(0,t),(e=>e.handler())),ov-=t),ov?(Zb.flush(),qb.flush(e?Math.min(64,nv-e):16.667),Xb.flush(),Qb.flush(),Jb.flush()):nv=-1}function uv(){let e=new Set,t=e;return{add(r){ov+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(ov-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,ov-=t.size,dv(t,(t=>t(r)&&e.add(t))),ov+=e.size,t=e)}}}function dv(e,t){e.forEach((e=>{try{t(e)}catch(e){Gb.catch(e)}}))}function fv(){}var hv={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function pv(e,t){if(hv.arr(e)){if(!hv.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var gv=(e,t)=>e.forEach(t);function mv(e,t,r){if(hv.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var bv=e=>hv.und(e)?[]:hv.arr(e)?e:[e];function vv(e,t){if(e.size){const r=Array.from(e);e.clear(),gv(r,t)}}var yv,xv,wv=(e,...t)=>vv(e,(e=>e(...t))),$v=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Cv=null,Sv=!1,Dv=fv,kv=e=>{e.to&&(xv=e.to),e.now&&(Gb.now=e.now),void 0!==e.colors&&(Cv=e.colors),null!=e.skipAnimation&&(Sv=e.skipAnimation),e.createStringInterpolator&&(yv=e.createStringInterpolator),e.requestAnimationFrame&&Gb.use(e.requestAnimationFrame),e.batchedUpdates&&(Gb.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Dv=e.willAdvance),e.frameLoop&&(Gb.frameLoop=e.frameLoop)},_v=new Set,Ov=[],Ev=[],Tv=0,Iv={get idle(){return!_v.size&&!Ov.length},start(e){Tv>e.priority?(_v.add(e),Gb.onStart(Fv)):(Mv(e),Gb(jv))},advance:jv,sort(e){if(Tv)Gb.onFrame((()=>Iv.sort(e)));else{const t=Ov.indexOf(e);~t&&(Ov.splice(t,1),Av(e))}},clear(){Ov=[],_v.clear()}};function Fv(){_v.forEach(Mv),_v.clear(),Gb(jv)}function Mv(e){Ov.includes(e)||Av(e)}function Av(e){Ov.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Ov,(t=>t.priority>e.priority)),0,e)}function jv(e){const t=Ev;for(let r=0;r<Ov.length;r++){const n=Ov[r];Tv=n.priority,n.idle||(Dv(n),n.advance(e),n.idle||t.push(n))}return Tv=0,(Ev=Ov).length=0,(Ov=t).length>0}var zv="[-+]?\\d*\\.?\\d+",Rv=zv+"%";function Bv(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Pv=new RegExp("rgb"+Bv(zv,zv,zv)),Lv=new RegExp("rgba"+Bv(zv,zv,zv,zv)),Nv=new RegExp("hsl"+Bv(zv,Rv,Rv)),Hv=new RegExp("hsla"+Bv(zv,Rv,Rv,zv)),Wv=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Vv=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Yv=/^#([0-9a-fA-F]{6})$/,Uv=/^#([0-9a-fA-F]{8})$/;function Kv(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function qv(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,o=2*r-n,i=Kv(o,n,e+1/3),a=Kv(o,n,e),s=Kv(o,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Gv(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Qv(e){return(parseFloat(e)%360+360)%360/360}function Zv(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Xv(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Jv(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Yv.exec(e))?parseInt(t[1]+"ff",16)>>>0:Cv&&void 0!==Cv[e]?Cv[e]:(t=Pv.exec(e))?(Gv(t[1])<<24|Gv(t[2])<<16|Gv(t[3])<<8|255)>>>0:(t=Lv.exec(e))?(Gv(t[1])<<24|Gv(t[2])<<16|Gv(t[3])<<8|Zv(t[4]))>>>0:(t=Wv.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Uv.exec(e))?parseInt(t[1],16)>>>0:(t=Vv.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Nv.exec(e))?(255|qv(Qv(t[1]),Xv(t[2]),Xv(t[3])))>>>0:(t=Hv.exec(e))?(qv(Qv(t[1]),Xv(t[2]),Xv(t[3]))|Zv(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var ey=(e,t,r)=>{if(hv.fun(e))return e;if(hv.arr(e))return ey({range:e,output:t,extrapolate:r});if(hv.str(e.output[0]))return yv(e);const n=e,o=n.output,i=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,o,i,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===o)return n;if(t===r)return e<=t?n:o;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=i(c),n===-1/0?c=-c:o===1/0?c+=n:c=c*(o-n)+n;return c}(e,i[t],i[t+1],o[t],o[t+1],l,a,s,n.map)}};var ty=1.70158,ry=1.525*ty,ny=ty+1,oy=2*Math.PI/3,iy=2*Math.PI/4.5,ay=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},sy={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>ny*e*e*e-ty*e*e,easeOutBack:e=>1+ny*Math.pow(e-1,3)+ty*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ry)/2:(Math.pow(2*e-2,2)*((ry+1)*(2*e-2)+ry)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*oy),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*oy)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*iy)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*iy)/2+1,easeInBounce:e=>1-ay(1-e),easeOutBounce:ay,easeInOutBounce:e=>e<.5?(1-ay(1-2*e))/2:(1+ay(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,o="end"===t?Math.floor(n):Math.ceil(n);return i=0,a=1,s=o/e,Math.min(Math.max(s,i),a);var i,a,s}},ly=Symbol.for("FluidValue.get"),cy=Symbol.for("FluidValue.observers"),uy=e=>Boolean(e&&e[ly]),dy=e=>e&&e[ly]?e[ly]():e,fy=e=>e[cy]||null;function hy(e,t){const r=e[cy];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var py=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");gy(this,e)}},gy=(e,t)=>yy(e,ly,t);function my(e,t){if(e[ly]){let r=e[cy];r||yy(e,cy,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function by(e,t){const r=e[cy];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[cy]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var vy,yy=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),xy=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,wy=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,$y=new RegExp(`(${xy.source})(%|[a-z]+)`,"i"),Cy=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Sy=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Dy=e=>{const[t,r]=ky(e);if(!t||$v())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Sy.test(r)?Dy(r):r||e},ky=e=>{const t=Sy.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},_y=(e,t,r,n,o)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,Oy=e=>{vy||(vy=Cv?new RegExp(`(${Object.keys(Cv).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>dy(e).replace(Sy,Dy).replace(wy,Jv).replace(vy,Jv))),r=t.map((e=>e.match(xy).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),o=n.map((t=>ey({...e,output:t})));return e=>{const r=!$y.test(t[0])&&t.find((e=>$y.test(e)))?.replace(xy,"");let n=0;return t[0].replace(xy,(()=>`${o[n++](e)}${r||""}`)).replace(Cy,_y)}},Ey="react-spring: ",Ty=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Ey}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Iy=Ty(console.warn);var Fy=Ty(console.warn);function My(e){return hv.str(e)&&("#"==e[0]||/\d/.test(e)||!$v()&&Sy.test(e)||e in(Cv||{}))}var Ay=$v()?c:p;function jy(){const e=g()[1],t=(()=>{const e=s(!1);return Ay((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var zy=e=>c(e,Ry),Ry=[];function By(e){const t=s();return c((()=>{t.current=e})),t.current}var Py=Symbol.for("Animated:node"),Ly=e=>e&&e[Py],Ny=(e,t)=>((e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}))(e,Py,t),Hy=e=>e&&e[Py]&&e[Py].getPayload(),Wy=class{constructor(){Ny(this,this)}getPayload(){return this.payload||[]}},Vy=class extends Wy{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,hv.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Vy(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return hv.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,hv.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Yy=class extends Vy{constructor(e){super(0),this._string=null,this._toString=ey({output:[e,e]})}static create(e){return new Yy(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(hv.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ey({output:[this.getValue(),e]})),this._value=0,super.reset()}},Uy={dependencies:null},Ky=class extends Wy{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return mv(this.source,((r,n)=>{var o;(o=r)&&o[Py]===o?t[n]=r.getValue(e):uy(r)?t[n]=dy(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&gv(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return mv(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Uy.dependencies&&uy(e)&&Uy.dependencies.add(e);const t=Hy(e);t&&gv(t,(e=>this.add(e)))}},qy=class extends Ky{constructor(e){super(e)}static create(e){return new qy(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Gy)),!0)}};function Gy(e){return(My(e)?Yy:Vy).create(e)}function Qy(e){const t=Ly(e);return t?t.constructor:hv.arr(e)?qy:My(e)?Yy:Vy}var Zy=(e,t)=>{const r=!hv.fun(e)||e.prototype&&e.prototype.isReactComponent;return d(((o,i)=>{const a=s(null),l=r&&u((e=>{a.current=function(e,t){e&&(hv.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[d,f]=function(e,t){const r=new Set;Uy.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Ky(e),Uy.dependencies=null,[e,r]}(o,t),h=jy(),p=()=>{const e=a.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&h()},g=new Xy(p,f),m=s();Ay((()=>(m.current=g,gv(f,(e=>my(e,g))),()=>{m.current&&(gv(m.current.deps,(e=>by(e,m.current))),Gb.cancel(m.current.update))}))),c(p,[]),zy((()=>()=>{const e=m.current;gv(e.deps,(t=>by(t,e)))}));const b=t.getComponentProps(d.getValue());return n.createElement(e,{...b,ref:l})}))},Xy=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Gb.write(this.update)}};var Jy=Symbol.for("AnimatedComponent"),ex=e=>hv.str(e)?e:e&&hv.str(e.displayName)?e.displayName:hv.fun(e)&&e.name||null;function tx(e,...t){return hv.fun(e)?e(...t):e}var rx=(e,t)=>!0===e||!!(t&&e&&(hv.fun(e)?e(t):bv(e).includes(t))),nx=(e,t)=>hv.obj(e)?t&&e[t]:e,ox=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,ix=e=>e,ax=(e,t=ix)=>{let r=sx;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const o of r){const r=t(e[o],o);hv.und(r)||(n[o]=r)}return n},sx=["config","onProps","onStart","onChange","onPause","onResume","onRest"],lx={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function cx(e){const t=function(e){const t={};let r=0;if(mv(e,((e,n)=>{lx[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return mv(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function ux(e){return e=dy(e),hv.arr(e)?e.map(ux):My(e)?Kb.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function dx(e){return hv.fun(e)||hv.arr(e)&&hv.obj(e[0])}var fx={tension:170,friction:26,mass:1,damping:1,easing:sy.linear,clamp:!1},hx=class{constructor(){this.velocity=0,Object.assign(this,fx)}};function px(e,t){if(hv.und(t.decay)){const r=!hv.und(t.tension)||!hv.und(t.friction);!r&&hv.und(t.frequency)&&hv.und(t.damping)&&hv.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var gx=[],mx=class{constructor(){this.changed=!1,this.values=gx,this.toValues=null,this.fromValues=gx,this.config=new hx,this.immediate=!1}};function bx(e,{key:t,props:r,defaultProps:n,state:o,actions:i}){return new Promise(((a,s)=>{let l,c,u=rx(r.cancel??n?.cancel,t);if(u)h();else{hv.und(r.pause)||(o.paused=rx(r.pause,t));let e=n?.pause;!0!==e&&(e=o.paused||rx(e,t)),l=tx(r.delay||0,t),e?(o.resumeQueue.add(f),i.pause()):(i.resume(),f())}function d(){o.resumeQueue.add(f),o.timeouts.delete(c),c.cancel(),l=c.time-Gb.now()}function f(){l>0&&!Kb.skipAnimation?(o.delayed=!0,c=Gb.setTimeout(h,l),o.pauseQueue.add(d),o.timeouts.add(c)):h()}function h(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(d),o.timeouts.delete(c),e<=(o.cancelId||0)&&(u=!0);try{i.start({...r,callId:e,cancel:u},a)}catch(e){s(e)}}}))}var vx=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?wx(e.get()):t.every((e=>e.noop))?yx(e.get()):xx(e.get(),t.every((e=>e.finished))),yx=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),xx=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),wx=e=>({value:e,cancelled:!0,finished:!1});function $x(e,t,r,n){const{callId:o,parentId:i,onRest:a}=t,{asyncTo:s,promise:l}=r;return i||e!==s||t.reset?r.promise=(async()=>{r.asyncId=o,r.asyncTo=e;const c=ax(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const f=new Promise(((e,t)=>(u=e,d=t))),h=e=>{const t=o<=(r.cancelId||0)&&wx(n)||o!==r.asyncId&&xx(n,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const i=new Sx,a=new Dx;return(async()=>{if(Kb.skipAnimation)throw Cx(r),a.result=xx(n,!1),d(a),a;h(i);const s=hv.obj(e)?{...e}:{...t,to:e};s.parentId=o,mv(c,((e,t)=>{hv.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return h(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(Kb.skipAnimation)return Cx(r),xx(n,!1);try{let t;t=hv.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(u),f]),g=xx(n.get(),!0,!1)}catch(e){if(e instanceof Sx)g=e.result;else{if(!(e instanceof Dx))throw e;g=e.result}}finally{o==r.asyncId&&(r.asyncId=i,r.asyncTo=i?s:void 0,r.promise=i?l:void 0)}return hv.fun(a)&&Gb.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function Cx(e,t){vv(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Sx=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Dx=class extends Error{constructor(){super("SkipAnimationSignal")}},kx=e=>e instanceof Ox,_x=1,Ox=class extends py{constructor(){super(...arguments),this.id=_x++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Ly(this);return e&&e.getValue()}to(...e){return Kb.to(this,e)}interpolate(...e){return Iy(`${Ey}The "interpolate" function is deprecated in v9 (use "to" instead)`),Kb.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){hy(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Iv.sort(this),hy(this,{type:"priority",parent:this,priority:e})}},Ex=Symbol.for("SpringPhase"),Tx=e=>(1&e[Ex])>0,Ix=e=>(2&e[Ex])>0,Fx=e=>(4&e[Ex])>0,Mx=(e,t)=>t?e[Ex]|=3:e[Ex]&=-3,Ax=(e,t)=>t?e[Ex]|=4:e[Ex]&=-5,jx=class extends Ox{constructor(e,t){if(super(),this.animation=new mx,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!hv.und(e)||!hv.und(t)){const r=hv.obj(e)?{...e}:{...t,from:e};hv.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Ix(this)||this._state.asyncTo)||Fx(this)}get goal(){return dy(this.animation.to)}get velocity(){const e=Ly(this);return e instanceof Vy?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Tx(this)}get isAnimating(){return Ix(this)}get isPaused(){return Fx(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:o}=n;const{config:i}=n,a=Hy(n.to);!a&&uy(n.to)&&(o=bv(dy(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==Yy?1:a?a[l].lastPosition:o[l];let u=n.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],o=null!=s.v0?s.v0:s.v0=hv.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const f=i.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(hv.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);d=r+o/(1-e)*(1-n),u=Math.abs(s.lastPosition-d)<=f,a=o*n}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||f/10,n=i.clamp?0:i.bounce,l=!hv.und(n),h=r==c?s.v0>0:r<c;let p,g=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(a)>t,p||(u=Math.abs(c-d)<=f,!u));++e){l&&(g=d==c||d>c==h,g&&(a=-a*n,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+i.easing(n)*(c-r),a=(d-s.lastPosition)/e,u=1==n}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(r=!0)}));const s=Ly(this),l=s.getValue();if(t){const e=dy(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Gb.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Ix(this)){const{to:e,config:t}=this.animation;Gb.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return hv.und(e)?(r=this.queue||[],this.queue=[]):r=[hv.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>vx(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Cx(this._state,e&&this._lastCallId),Gb.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=hv.obj(r)?r[t]:r,(null==r||dx(r))&&(r=void 0),n=hv.obj(n)?n[t]:n,null==n&&(n=void 0);const o={to:r,from:n};return Tx(this)||(e.reverse&&([r,n]=[n,r]),n=dy(n),hv.und(n)?Ly(this)||this._set(r):this._set(n)),o}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,ax(e,((e,t)=>/^on/.test(t)?nx(e,r):e))),Hx(this,e,"onProps"),Wx(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return bx(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{Fx(this)||(Ax(this,!0),wv(i.pauseQueue),Wx(this,"onPause",xx(this,zx(this,this.animation.to)),this))},resume:()=>{Fx(this)&&(Ax(this,!1),Ix(this)&&this._resume(),wv(i.resumeQueue),Wx(this,"onResume",xx(this,zx(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=Rx(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(wx(this));const n=!hv.und(e.to),o=!hv.und(e.from);if(n||o){if(!(t.callId>this._lastToId))return r(wx(this));this._lastToId=t.callId}const{key:i,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!o||n||t.default&&!hv.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const f=!pv(d,c);f&&(s.from=d),d=dy(d);const h=!pv(u,l);h&&this._focus(u);const p=dx(t.to),{config:g}=s,{decay:m,velocity:b}=g;(n||o)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(px(r={...r},t),t={...r,...t}),px(e,t),Object.assign(e,t);for(const t in fx)null==e[t]&&(e[t]=fx[t]);let{frequency:n,damping:o}=e;const{mass:i}=e;hv.und(n)||(n<.01&&(n=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*o*i/n)}(g,tx(t.config,i),t.config!==a.config?tx(a.config,i):void 0);let v=Ly(this);if(!v||hv.und(u))return r(xx(this,!0));const y=hv.und(t.reset)?o&&!t.default:!hv.und(d)&&rx(t.reset,i),x=y?d:this.get(),w=ux(u),$=hv.num(w)||hv.arr(w)||My(w),C=!p&&(!$||rx(a.immediate||t.immediate,i));if(h){const e=Qy(u);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let D=uy(u),k=!1;if(!D){const e=y||!Tx(this)&&f;(h||e)&&(k=pv(ux(x),w),D=!k),(pv(s.immediate,C)||C)&&pv(g.decay,m)&&pv(g.velocity,b)||(D=!0)}if(k&&Ix(this)&&(s.changed&&!y?D=!0:D||this._stop(l)),!p&&((D||uy(l))&&(s.values=v.getPayload(),s.toValues=uy(u)?null:S==Yy?[1]:bv(w)),s.immediate!=C&&(s.immediate=C,C||y||this._set(l)),D)){const{onRest:e}=s;gv(Nx,(e=>Hx(this,t,e)));const n=xx(this,zx(this,l));wv(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Gb.batchedUpdates((()=>{s.changed=!y,e?.(n,this),y?tx(a.onRest,n):s.onStart?.(n,this)}))}y&&this._set(x),p?r($x(t.to,t,this._state,this)):D?this._start():Ix(this)&&!h?this._pendingCalls.add(r):r(yx(x))}_focus(e){const t=this.animation;e!==t.to&&(fy(this)&&this._detach(),t.to=e,fy(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;uy(t)&&(my(t,this),kx(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;uy(e)&&by(e,this)}_set(e,t=!0){const r=dy(e);if(!hv.und(r)){const e=Ly(this);if(!e||!pv(r,e.getValue())){const n=Qy(r);e&&e.constructor==n?e.setValue(r):Ny(this,n.create(r)),e&&Gb.batchedUpdates((()=>{this._onChange(r,t)}))}}return Ly(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Wx(this,"onStart",xx(this,zx(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),tx(this.animation.onChange,e,this)),tx(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Ly(this).reset(dy(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Ix(this)||(Mx(this,!0),Fx(this)||this._resume())}_resume(){Kb.skipAnimation?this.finish():Iv.start(this)}_stop(e,t){if(Ix(this)){Mx(this,!1);const r=this.animation;gv(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),hy(this,{type:"idle",parent:this});const n=t?wx(this.get()):xx(this.get(),zx(this,e??r.to));wv(this._pendingCalls,n),r.changed&&(r.changed=!1,Wx(this,"onRest",n,this))}}};function zx(e,t){const r=ux(t);return pv(ux(e.get()),r)}function Rx(e,t=e.loop,r=e.to){const n=tx(t);if(n){const o=!0!==n&&cx(n),i=(o||e).reverse,a=!o||o.reset;return Bx({...e,loop:t,default:!1,pause:void 0,to:!i||dx(r)?r:void 0,from:a?e.from:void 0,reset:a,...o})}}function Bx(e){const{to:t,from:r}=e=cx(e),n=new Set;return hv.obj(t)&&Lx(t,n),hv.obj(r)&&Lx(r,n),e.keys=n.size?Array.from(n):null,e}function Px(e){const t=Bx(e);return hv.und(t.default)&&(t.default=ax(t)),t}function Lx(e,t){mv(e,((e,r)=>null!=e&&t.add(r)))}var Nx=["onStart","onRest","onChange","onPause","onResume"];function Hx(e,t,r){e.animation[r]=t[r]!==ox(t,r)?nx(t[r],e.key):void 0}function Wx(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Vx=["onStart","onChange","onRest"],Yx=1,Ux=class{constructor(e,t){this.id=Yx++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];hv.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(Bx(e)),this}start(e){let{queue:t}=this;return e?t=bv(e).map(Bx):this.queue=[],this._flush?this._flush(this,t):(Jx(this,t),Kx(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;gv(bv(t),(t=>r[t].stop(!!e)))}else Cx(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(hv.und(e))this.start({pause:!0});else{const t=this.springs;gv(bv(e),(e=>t[e].pause()))}return this}resume(e){if(hv.und(e))this.start({pause:!1});else{const t=this.springs;gv(bv(e),(e=>t[e].resume()))}return this}each(e){mv(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,o=this._changed.size>0;(n&&!this._started||o&&!this._started)&&(this._started=!0,vv(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,a=o||i&&r.size?this.get():null;o&&t.size&&vv(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),i&&(this._started=!1,vv(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Gb.onFrame(this._onFrame)}};function Kx(e,t){return Promise.all(t.map((t=>qx(e,t)))).then((t=>vx(e,t)))}async function qx(e,t,r){const{keys:n,to:o,from:i,loop:a,onRest:s,onResolve:l}=t,c=hv.obj(t.default)&&t.default;a&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const u=hv.arr(o)||hv.fun(o)?o:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):gv(Vx,(r=>{const n=t[r];if(hv.fun(n)){const o=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=o.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):o.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,wv(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const f=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),h=!0===t.cancel||!0===ox(t,"cancel");(u||h&&d.asyncId)&&f.push(bx(++e._lastAsyncId,{props:t,state:d,actions:{pause:fv,resume:fv,start(t,r){h?(Cx(d,e._lastAsyncId),r(wx(e))):(t.onRest=s,r($x(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=vx(e,await Promise.all(f));if(a&&p.finished&&(!r||!p.noop)){const r=Rx(t,a,o);if(r)return Jx(e,[r]),qx(e,r,!0)}return l&&Gb.batchedUpdates((()=>l(p,e,e.item))),p}function Gx(e,t){const r={...e.springs};return t&&gv(bv(t),(e=>{hv.und(e.keys)&&(e=Bx(e)),hv.obj(e.to)||(e={...e,to:void 0}),Xx(r,e,(e=>Zx(e)))})),Qx(e,r),r}function Qx(e,t){mv(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,my(t,e))}))}function Zx(e,t){const r=new jx;return r.key=e,t&&my(r,t),r}function Xx(e,t,r){t.keys&&gv(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Jx(e,t){gv(t,(t=>{Xx(e.springs,t,(t=>Zx(t,e)))}))}var ew,tw,rw=({children:e,...t})=>{const r=b(nw),o=t.pause||!!r.pause,i=t.immediate||!!r.immediate;t=function(e,t){const[r]=g((()=>({inputs:t,result:e()}))),n=s(),o=n.current;let i=o;if(i){const r=Boolean(t&&i.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,i.inputs));r||(i={inputs:t,result:e()})}else i=r;return c((()=>{n.current=i,o==r&&(r.inputs=r.result=void 0)}),[i]),i.result}((()=>({pause:o,immediate:i})),[o,i]);const{Provider:a}=nw;return n.createElement(a,{value:t},e)},nw=(ew=rw,tw={},Object.assign(ew,n.createContext(tw)),ew.Provider._context=ew,ew.Consumer._context=ew,ew);rw.Provider=nw.Provider,rw.Consumer=nw.Consumer;var ow=()=>{const e=[],t=function(t){Fy(`${Ey}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return gv(e,((e,o)=>{if(hv.und(t))n.push(e.start());else{const i=r(t,e,o);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return gv(e,(e=>e.pause(...arguments))),this},t.resume=function(){return gv(e,(e=>e.resume(...arguments))),this},t.set=function(t){gv(e,((e,r)=>{const n=hv.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return gv(e,((e,n)=>{if(hv.und(t))r.push(e.start());else{const o=this._getProps(t,e,n);o&&r.push(e.start(o))}})),r},t.stop=function(){return gv(e,(e=>e.stop(...arguments))),this},t.update=function(t){return gv(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return hv.fun(e)?e(r,t):e};return t._getProps=r,t};function iw(e,t){const r=hv.fun(e),[[n],o]=function(e,t,r){const n=hv.fun(t)&&t;n&&!r&&(r=[]);const o=a((()=>n||3==arguments.length?ow():void 0),[]),i=s(0),l=jy(),c=a((()=>({ctrls:[],queue:[],flush(e,t){const r=Gx(e,t),n=i.current>0&&!c.queue.length&&!Object.keys(r).some((t=>!e.springs[t]));return n?Kx(e,t):new Promise((n=>{Qx(e,r),c.queue.push((()=>{n(Kx(e,t))})),l()}))}})),[]),u=s([...c.ctrls]),d=[],f=By(e)||0;function h(e,r){for(let o=e;o<r;o++){const e=u.current[o]||(u.current[o]=new Ux(null,c.flush)),r=n?n(o,e):t[o];r&&(d[o]=Px(r))}}a((()=>{gv(u.current.slice(e,f),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),u.current.length=e,h(f,e)}),[e]),a((()=>{h(0,Math.min(f,e))}),r);const p=u.current.map(((e,t)=>Gx(e,d[t]))),g=b(rw),m=By(g),v=g!==m&&function(e){for(const t in e)return!0;return!1}(g);Ay((()=>{i.current++,c.ctrls=u.current;const{queue:e}=c;e.length&&(c.queue=[],gv(e,(e=>e()))),gv(u.current,((e,t)=>{o?.add(e),v&&e.start({default:g});const r=d[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),zy((()=>()=>{gv(c.ctrls,(e=>e.stop(!0)))}));const y=p.map((e=>({...e})));return o?[y,o]:y}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,o]:n}var aw=class extends Ox{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=ey(...t);const r=this._get(),n=Qy(r);Ny(this,n.create(r))}advance(e){const t=this._get();pv(t,this.get())||(Ly(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&lw(this._active)&&cw(this)}_get(){const e=hv.arr(this.source)?this.source.map(dy):bv(dy(this.source));return this.calc(...e)}_start(){this.idle&&!lw(this._active)&&(this.idle=!1,gv(Hy(this),(e=>{e.done=!1})),Kb.skipAnimation?(Gb.batchedUpdates((()=>this.advance())),cw(this)):Iv.start(this))}_attach(){let e=1;gv(bv(this.source),(t=>{uy(t)&&my(t,this),kx(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){gv(bv(this.source),(e=>{uy(e)&&by(e,this)})),this._active.clear(),cw(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=bv(this.source).reduce(((e,t)=>Math.max(e,(kx(t)?t.priority:0)+1)),0))}};function sw(e){return!1!==e.idle}function lw(e){return!e.size||Array.from(e).every(sw)}function cw(e){e.idle||(e.idle=!0,gv(Hy(e),(e=>{e.done=!0})),hy(e,{type:"idle",parent:e}))}Kb.assign({createStringInterpolator:Oy,to:(e,t)=>new aw(e,t)});var uw=/^--/;function dw(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||uw.test(e)||hw.hasOwnProperty(e)&&hw[e]?(""+t).trim():t+"px"}var fw={};var hw={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pw=["Webkit","Ms","Moz","O"];hw=Object.keys(hw).reduce(((e,t)=>(pw.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),hw);var gw=/^(matrix|translate|scale|rotate|skew)/,mw=/^(translate)/,bw=/^(rotate|skew)/,vw=(e,t)=>hv.num(e)&&0!==e?e+t:e,yw=(e,t)=>hv.arr(e)?e.every((e=>yw(e,t))):hv.num(e)?e===t:parseFloat(e)===t,xw=class extends Ky{constructor({x:e,y:t,z:r,...n}){const o=[],i=[];(e||t||r)&&(o.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>vw(e,"px"))).join(",")})`,yw(e,0)]))),mv(n,((e,t)=>{if("transform"===t)o.push([e||""]),i.push((e=>[e,""===e]));else if(gw.test(t)){if(delete n[t],hv.und(e))return;const r=mw.test(t)?"px":bw.test(t)?"deg":"";o.push(bv(e)),i.push("rotate3d"===t?([e,t,n,o])=>[`rotate3d(${e},${t},${n},${vw(o,r)})`,yw(o,0)]:e=>[`${t}(${e.map((e=>vw(e,r))).join(",")})`,yw(e,t.startsWith("scale")?1:0)])}})),o.length&&(n.transform=new ww(o,i)),super(n)}},ww=class extends py{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return gv(this.inputs,((r,n)=>{const o=dy(r[0]),[i,a]=this.transforms[n](hv.arr(o)?o:r.map(dy));e+=" "+i,t=t&&a})),t?"none":e}observerAdded(e){1==e&&gv(this.inputs,(e=>gv(e,(e=>uy(e)&&my(e,this)))))}observerRemoved(e){0==e&&gv(this.inputs,(e=>gv(e,(e=>uy(e)&&by(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),hy(this,e)}};Kb.assign({batchedUpdates:M,createStringInterpolator:Oy,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var $w=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new Ky(e),getComponentProps:n=e=>e}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=ex(e)||"Anonymous";return(e=hv.str(e)?i[e]||(i[e]=Zy(e,o)):e[Jy]||(e[Jy]=Zy(e,o))).displayName=`Animated(${t})`,e};return mv(e,((t,r)=>{hv.arr(e)&&(r=ex(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:o,scrollTop:i,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),u=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:fw[t]||(fw[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(const t in n)if(n.hasOwnProperty(t)){const r=dw(t,n[t]);uw.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==i&&(e.scrollTop=i),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new xw(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Cw=$w.animated;const Sw=T`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Dw=_.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>O`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,kw=O`
    animation: ${Ii["duration-150"]} ${Ii["ease-default"]} ${Sw};
    width: 100%;
    height: 100%;
    transition: color ${Ii["duration-150"]} ${Ii["ease-default"]};
`,_w=_(le)`
    ${kw}
    color: ${Ei["icon-primary-subtlest"]};
`,Ow=_(ce)`
    ${kw}
    color: ${Ei["icon-disabled-subtle"]};
`,Ew=_(ue)`
    ${kw}
    color: ${e=>e.$disabled?Ei["icon-disabled-subtle"](e):Ei["icon-selected"](e)};
`,Tw=_(de)`
    ${kw}
    color: ${e=>e.$disabled?Ei["icon-disabled-subtle"](e):Ei["icon-selected"](e)};
`,Iw=_.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${_w},
        &:hover
        + ${Ew},
        &:hover
        + ${Tw} {
        color: ${e=>!e.disabled&&Ei["icon-hover"](e)};
    }
`,Fw=_(Cw.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Mw=_.ul`
    border-bottom-left-radius: ${Ai.sm};
    border-bottom-right-radius: ${Ai.sm};
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: ${Mi["spacing-8"]};
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Ei["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }

    ${zi.MaxWidth.sm} {
        max-height: 15rem;
    }
`,Aw=_.li`
    :hover,
    :focus,
    :active {
        background: ${Ei["bg-hover"]};
    }
    ${e=>{if(e.$checked)return O`
                background: ${Ei["bg-selected"]};
                :hover,
                :focus,
                :active {
                    background: ${Ei["bg-selected-hover"]};
                }
            `}}
`,jw=_.button`
    display: flex;
    ${e=>e.$multiSelect?O`
                padding: ${Mi["spacing-8"]} ${Mi["spacing-16"]};
            `:O`
                padding: 15px ${Mi["spacing-16"]}; // TODO: confirm vertical spacing
                align-items: center;
            `}
    margin: 0 -${Mi["spacing-8"]};
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Ei["border-focus"]};
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
`,Rw=_.div`
    ${e=>"small"===e.$variant?Ti["body-md-regular"]:Ti["body-baseline-regular"]}
    color: ${Ei.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&zw}
`,Bw=_.div`
    color: ${Ei["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&zw}

    ${e=>"next-line"===e.$labelDisplayType?O`
                    ${Ti["body-md-semibold"]}
                `:O`
                    ${Ti["body-baseline-regular"]}
                `}
`,Pw=_.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return O`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return O`
                    ${Rw} {
                        display: inline;
                    }

                    ${Bw} {
                        display: inline;
                        margin-left: ${Mi["spacing-8"]};
                    }
                `}}}
`,Lw=_.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,Nw=_.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Hw=_((r=>{var{className:n,checked:o,disabled:i,indeterminate:a,onChange:l,onKeyPress:u,displaySize:d="default"}=r,f=lt(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const h=s(null);c((()=>{h.current&&(h.current.indeterminate=null!=a&&a)}),[a]);const p=e=>{if(!i){const t=e;if(!(" "===t.key||"change"===e.type))return;l&&l(e),u&&u(t)}};return e(Dw,{className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":a?"mixed":o,"aria-labelledby":"checkbox-input",tabIndex:i?-1:0,onKeyDown:p,$displaySize:d,$disabled:i,$unchecked:!(a||o||i),children:[t(Iw,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:o,ref:h,tabIndex:-1,onChange:p,disabled:i},f)),a?t(Tw,{$disabled:i,"data-testid":"indeterminate"}):o?t(Ew,{$disabled:i,"data-testid":"checkmark"}):i?t(Ow,{"data-testid":"empty-disabled-checkbox"}):t(_w,{$disabled:i,"data-testid":"empty-checkbox"})]})}))`
    flex-shrink: 0;
    margin-right: ${Mi["spacing-16"]};
`,Ww=_.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${Mi["spacing-16"]} 0 ${Mi["spacing-8"]} 0;
`,Vw=_.button`
    ${e=>"small"===e.$variant?Ti["body-md-semibold"]:Ti["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${Ei["text-primary"]};
`,Yw=_.div`
    width: 100%;
    display: flex;
    padding: 15px ${Mi["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${e=>"small"===e.$variant?Ti["body-md-regular"]:Ti["body-baseline-regular"]}
`,Uw=_(pe)`
    height: 1em;
    width: 1em;
    margin-right: ${Mi["spacing-4"]};
    color: ${Ei["icon-error"]};
`,Kw=_(dd)`
    margin-right: ${Mi["spacing-4"]};
    color: ${Ei.icon};
`,qw=e=>"small"===e?1:1.375,Gw=e=>O`
        height: ${qw(e)}rem;
        width: ${qw(e)}rem;
    `,Qw=_.li`
    background: ${Ei["bg-strong"]};
    display: flex;
    border-radius: ${Ai.sm};
    align-items: center;
`,Zw=_(Tf)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 ${Mi["spacing-8"]} 0 0;
    width: 100%;
`,Xw=_(ge)`
    ${e=>Gw(e.$variant)}
    margin: 0 ${Mi["spacing-8"]};
    color: ${Ei.icon};
`,Jw=_(lu)`
    ${e=>Gw(e.$variant)}
    padding: 0;
    margin: 0 ${Mi["spacing-8"]};
    color: ${Ei.icon};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return O`
                svg {
                    ${Gw(e.$variant)}
                }
            `}}
`,e$=d(((r,n)=>{const{onClear:o}=r,i=lt(r,["onClear"]);return e(Qw,{children:[t(Xw,{$variant:r.variant}),t(Zw,Object.assign({ref:n,$variant:r.variant},i)),i.value&&t(Jw,{"aria-label":"Clear search",focusOutline:"browser",onClick:o,$variant:r.variant,children:t(fe,{})})]},"search")})),t$=n=>{var{listItems:o,listExtractor:i,valueExtractor:a,onSelectItem:l,listStyleWidth:u,visible:d,enableSearch:f,searchPlaceholder:h="Search",onSearch:p,searchFunction:m,onDismiss:b,disableItemFocus:v,multiSelect:y,selectedItems:x,onSelectAll:w,onRetry:$,itemsLoadState:C="success",itemTruncationType:S="end",itemMaxLines:D=2,labelDisplayType:k="inline",renderListItem:_,onBlur:O,hideNoResultsDisplay:E,renderCustomCallToAction:T,variant:I="default"}=n,F=lt(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[M,A]=g(0),[j,z]=g(""),[R,B]=g(null!=o?o:[]),[P,L]=g(0),N=iw({height:P}),H=s(null),W=s(null),V=s([]),Y=s(null),U=s(null),K=s(M),q=s(R),G=e=>{K.current=e,A(e)},Q=e=>{q.current=e,B(e)};c((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),c((()=>{ee(j)}),[j]),c((()=>{if(z(""),d){if(setTimeout((()=>{L(te())})),v)return;Y&&Y.current?(Y.current.focus(),G(-1)):V.current[M]&&V.current[M].focus()}else L(0)}),[d]),c((()=>{if(d){const e=te();L(e)}}),[R,C]),c((()=>{Q(null!=o?o:[]),z(""),G(0)}),[o]);const Z=e=>{const t=i?i(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},X=e=>{if("inline"!==k)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return Wc.getTextWidth(e,"1.125rem 'Open Sans'")>t*D},J=e=>!!Wb(x,(t=>Yb(t,e))),ee=e=>{if(""===e)Q(null!=o?o:[]);else if(m){const t=m(e);Q(t)}else{const t=null==o?void 0:o.filter((t=>{const{title:r,secondaryLabel:n}=Z(t),o=e.trim().toLowerCase();return r.includes(o)||n&&n.includes(o)}));Q(null!=t?t:[])}},te=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),re=e=>{var t,r;if(H&&H.current.contains(e.target))switch(e.code){case"ArrowDown":if(K.current<q.current.length-1){const e=K.current+1;null===(t=V.current[e])||void 0===t||t.focus(),G(e)}break;case"ArrowUp":if(K.current>0){const e=K.current-1;null===(r=V.current[e])||void 0===r||r.focus(),G(K.current-1)}break;case"Escape":b&&b(!0)}},ne=(e,t)=>{e.preventDefault(),l&&l(t,(e=>a?a(e):e)(t))},oe=e=>{const t=e.target.value;z(t),p&&p()},ie=()=>{var e;z(""),null===(e=Y.current)||void 0===e||e.focus(),p&&p()},ae=()=>{$&&$()},se=()=>{O&&O()},le=n=>e(r,{children:[t(Lw,{$maxLines:D,"aria-hidden":!0,children:n}),t(Nw,{$maxLines:D,"aria-hidden":!0,children:n})]}),ce=r=>{const{title:n,secondaryLabel:o}=Z(r),i=X(n),a=o&&X(o);return e(Pw,{$labelDisplayType:i||a?"next-line":k,children:[t(Rw,{$truncateType:S,$maxLines:D,$variant:I,"aria-label":n,children:"middle"===S&&i?le(n):n}),o&&t(Bw,{$truncateType:S,$maxLines:D,$labelDisplayType:k,"aria-label":o,children:"middle"===S&&a?le(o):o})]})},ue=()=>{if(!$||"success"===C)return R.map(((r,n)=>t(Aw,{$checked:J(r)&&!y,children:e(jw,{$hasNextLineLabel:"next-line"===k&&R.length>0&&i&&"string"!=typeof i(R[0]),onClick:e=>{ne(e,r)},ref:e=>V.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:d?0:-1,$multiSelect:y,onBlur:se,$variant:I,children:[y&&t(Hw,{checked:J(r),displaySize:"small"}),_?_(r,{selected:J(r)}):ce(r)]})},((e,t)=>`item_${t}__${a?a(e):e}`)(r,n))))},de=()=>{if(x&&y&&R.length>0&&!j&&"success"===C)return t(Ww,{children:t(Vw,{onClick:w,type:"button",$variant:I,children:0===x.length?"Select all":"Clear all"})},"selectAll")},fe=()=>{if(!E&&(j||!f)&&0===R.length&&"success"===C)return e(Yw,{"data-testid":"list-no-results",$variant:I,children:[t(Uw,{"data-testid":"no-result-icon",$variant:I}),"No results found."]},"noResults")},he=()=>{if($&&"loading"===C)return e(Yw,{"data-testid":"list-loading",$variant:I,children:[t(Kw,{}),"Loading..."]},"loading")},pe=()=>{if($&&"fail"===C)return e(Yw,{"data-testid":"list-fail",$variant:I,children:[t(Uw,{"data-testid":"load-error-icon",$variant:I}),"Failed to load. ",t(Vw,{onClick:ae,type:"button",$variant:I,children:"Try again."})]},"noResults")};return t(r,{children:e(Fw,{style:N,"data-testid":d?"dropdown-container":"dropdown-container-hidden",ref:H,children:[(()=>{if(d)return e(Mw,Object.assign({ref:W,"data-testid":"dropdown-list",width:u,role:"list"},F,{children:[(f||m)&&"success"===C?t(e$,{ref:Y,onChange:oe,value:j,placeholder:h,"data-testid":"search-input","aria-label":"search-input",tabIndex:d?0:-1,onClear:ie,variant:I}):null,de(),fe(),he(),pe(),ue()]}))})(),(()=>{if(d&&T)return t("div",{ref:U,"data-testid":"custom-cta",children:T(b,R)})})()]})})},r$=_.div`
    position: relative;
    display: flex;
    align-items: center;
    ${e=>{if(e.$expanded)return O`
                border-bottom: ${Fi["width-010"]} ${Fi.solid}
                    ${Ei.border};
            `}}

    ${e=>e.$readOnly?O`
                border: 0;
                margin: 0;
            `:"right"===e.$position?O`
                        flex-direction: row-reverse;
                        margin: 0 ${Mi["spacing-16"]};
                    `:O`
                        flex-direction: row;
                        margin: 0 ${Mi["spacing-16"]};
                    `}
`,n$=_(Uu)`
    padding: 0;
    width: auto;
`,o$=_.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${Mi["spacing-12"]};
`,i$=_.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Ii["duration-250"]} ${Ii["ease-default"]};
    margin: 0 ${Mi["spacing-12"]};
    display: flex;
    align-items: center;
`,a$=_(re)`
    color: ${Ei.icon};
    height: ${Ti.Spec["body-size-baseline"]};
    width: ${Ti.Spec["body-size-baseline"]};
`,s$=_.div`
    display: flex;
    flex: 1 1 auto;
`,l$=_(Ni.BodyBL)`
    text-align: left;
    ${Ri(2)}
    text-overflow: ellipsis;
`,c$=_(l$)`
    color: ${Ei["text-subtler"]};
`,u$=_.div`
    width: 1px;
    background: ${Ei.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return O`
                display: none;
            `}}

    ${e=>"right"===e.$position?O`
                    margin: 0 ${Mi["spacing-12"]};
                `:O`
                    margin: 0 ${Mi["spacing-12"]} 0 0;
                `}
`,d$=_(Of)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${Mi["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,f$=_(Of)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${Mi["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,h$=_(ip)``,p$=_.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Ti["body-baseline-regular"]}
    color: ${Ei.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return O`
                color: ${Ei["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?O`
                    margin-left: ${e.$readOnly?Mi["spacing-4"]:Mi["spacing-12"]};
                `:O`
                    margin-right: ${e.$readOnly?Mi["spacing-4"]:Mi["spacing-12"]};
                `};
`,g$=o.forwardRef(((n,o)=>{var{addon:i,error:a,onChange:l,readOnly:u,className:d,onBlur:f}=n,h=lt(n,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:p,options:m,enableSearch:b,searchFunction:v,searchPlaceholder:y,valueExtractor:x,listExtractor:w,displayValueExtractor:$,selectedOption:C,onSelectOption:S,onHideOptions:D,onShowOptions:k,"data-selector-testid":_}=i.attributes,{position:O}=i,[E,T]=g(C),[I,F]=g(!1),M=s(null);c((()=>{T(C)}),[C]);const A=()=>{if(E)return $?$(E):x?x(E):E.toString()},j=e=>{!e&&D&&D(),e&&k&&k()},z=e=>{e.preventDefault(),h.disabled||(F(!I),j(!I))},R=(e,t)=>{var r;T(e),F(!1),j(!1),M&&(null===(r=M.current)||void 0===r||r.focus()),S&&S(e,t)},B=e=>{l&&l(e)},P=()=>{f&&f()},L=()=>{var e;F(!1),j(!1),M&&(null===(e=M.current)||void 0===e||e.focus())};return e(ed,{className:d,show:I,error:a&&!I,disabled:h.disabled,readOnly:u,onBlur:()=>{F(!1),j(!1),P()},children:[e(r$,{$expanded:I,$readOnly:u,$position:O,children:[u?E?t(o$,{children:t(l$,{"data-testid":"selector-label",children:A()})}):null:t(n$,{ref:M,type:"button",disabled:h.disabled,"data-testid":_||"addon-selector",onClick:z,children:e(r,{children:[e(s$,{children:[p&&!E&&t(c$,{children:p}),E&&t(l$,{"data-testid":"selector-label",children:A()})]}),t(i$,{$expanded:I,children:t(a$,{})})]})}),t(u$,{$readOnly:u,$position:O}),t(h$,Object.assign({ref:o},h,{readOnly:u,error:a,onChange:B,"data-testid":h["data-testid"]||"input",onBlur:P,styleType:"no-border"}))]}),m&&m.length>0?t(t$,{listItems:m,selectedItems:C?[C]:[],onSelectItem:R,valueExtractor:x,listExtractor:w,visible:I,enableSearch:b,searchFunction:v,searchPlaceholder:y,"data-testid":"dropdown-list",onBlur:P,onDismiss:L}):t(r,{})]})})),m$=o.forwardRef(((r,n)=>{var{addon:o,error:i,className:a}=r,s=lt(r,["addon","error","className"]);const l=()=>t(f$,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a,children:t(h$,Object.assign({ref:n},s,{"data-testid":"input",styleType:"no-border"}))});if(!o)return l();{const{type:r="label",position:c="left"}=o,{allowClear:u}=s;switch(r){case"list":{const e=o.attributes;return e.options&&e.options.length>0?t(g$,Object.assign({ref:n,addon:o,error:i,className:a},s)):l()}case"custom":{const r=o.attributes;return r.children?e(d$,{$error:i,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[t(p$,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.children}),t(h$,Object.assign({ref:n},s,{allowClear:u&&"right"!==c,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}default:{const r=o.attributes;return r.value?e(d$,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[t(p$,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.value}),t(h$,Object.assign({ref:n},s,{allowClear:u&&"right"!==c,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}}}})),b$=o.forwardRef(((e,r)=>{const{label:n,errorMessage:o,id:i="form-field-group","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=e,y=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Hu,{id:i,label:n,errorMessage:o,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:t(m$,Object.assign({ref:r,id:`${i}-base`,"data-testid":s||i,error:!!o},y))})})),v$=_(m$)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":Mi["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,y$=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=Ei.icon,$activeColor:r=Ei["icon-primary"]})=>e?t:r};
    padding: ${Mi["spacing-12"]} ${Mi["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,x$=_.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,w$=_(Ni.BodyBL)`
    color: ${Ei["text-subtler"]};
`,$$=_(dd)`
    margin-right: ${Mi["spacing-8"]};
    color: ${Ei.icon};
`,C$=_.span`
    color: ${Ei["text-primary"]};
    text-decoration: underline;
    font-weight: ${Ti.Spec["weight-semibold"]};
`,S$=_.span`
    display: flex;
    align-items: center;
    margin-right: ${Mi["spacing-8"]};
`,D$=_(ve)`
    color: ${Ei["icon-warning"]};
    margin-right: ${Mi["spacing-8"]};
    height: 1em;
    width: 1em;
`,k$=_.span`
    color: ${Ei["text-warning"]};
`,_$=_(If)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${Ti["body-baseline-regular"]}

    :hover, :active, :focus {
        ${C$} {
            color: ${Ei["text-hover"]};
        }
    }
`;var O$,E$,T$={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */O$=T$,E$=T$.exports,function(){var e,t="Expected a function",r="__lodash_hash_undefined__",n="__lodash_placeholder__",o=16,i=32,a=64,s=128,l=256,c=1/0,u=9007199254740991,d=NaN,f=4294967295,h=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",o],["flip",512],["partial",i],["partialRight",a],["rearg",l]],p="[object Arguments]",g="[object Array]",m="[object Boolean]",b="[object Date]",v="[object Error]",y="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",C="[object Object]",S="[object Promise]",D="[object RegExp]",k="[object Set]",_="[object String]",O="[object Symbol]",E="[object WeakMap]",T="[object ArrayBuffer]",I="[object DataView]",F="[object Float32Array]",M="[object Float64Array]",A="[object Int8Array]",j="[object Int16Array]",z="[object Int32Array]",R="[object Uint8Array]",B="[object Uint8ClampedArray]",P="[object Uint16Array]",L="[object Uint32Array]",N=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,V=/&(?:amp|lt|gt|quot|#39);/g,Y=/[&<>"']/g,U=RegExp(V.source),K=RegExp(Y.source),q=/<%-([\s\S]+?)%>/g,G=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,Z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,X=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),re=/^\s+/,ne=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ie=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,ce=/\\(\\)?/g,ue=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,de=/\w*$/,fe=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,pe=/^\[object .+?Constructor\]$/,ge=/^0o[0-7]+$/i,me=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",$e="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",De="\\ufe0e\\ufe0f",ke="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",_e="['’]",Oe="["+xe+"]",Ee="["+ke+"]",Te="["+we+"]",Ie="\\d+",Fe="["+$e+"]",Me="["+Ce+"]",je="[^"+xe+ke+Ie+$e+Ce+Se+"]",ze="\\ud83c[\\udffb-\\udfff]",Re="[^"+xe+"]",Be="(?:\\ud83c[\\udde6-\\uddff]){2}",Pe="[\\ud800-\\udbff][\\udc00-\\udfff]",Le="["+Se+"]",Ne="\\u200d",He="(?:"+Me+"|"+je+")",We="(?:"+Le+"|"+je+")",Ve="(?:['’](?:d|ll|m|re|s|t|ve))?",Ye="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ue="(?:"+Te+"|"+ze+")?",Ke="["+De+"]?",qe=Ke+Ue+"(?:"+Ne+"(?:"+[Re,Be,Pe].join("|")+")"+Ke+Ue+")*",Ge="(?:"+[Fe,Be,Pe].join("|")+")"+qe,Qe="(?:"+[Re+Te+"?",Te,Be,Pe,Oe].join("|")+")",Ze=RegExp(_e,"g"),Xe=RegExp(Te,"g"),Je=RegExp(ze+"(?="+ze+")|"+Qe+qe,"g"),et=RegExp([Le+"?"+Me+"+"+Ve+"(?="+[Ee,Le,"$"].join("|")+")",We+"+"+Ye+"(?="+[Ee,Le+He,"$"].join("|")+")",Le+"?"+He+"+"+Ve,Le+"+"+Ye,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ie,Ge].join("|"),"g"),tt=RegExp("["+Ne+xe+we+De+"]"),rt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ot=-1,it={};it[F]=it[M]=it[A]=it[j]=it[z]=it[R]=it[B]=it[P]=it[L]=!0,it[p]=it[g]=it[T]=it[m]=it[I]=it[b]=it[v]=it[y]=it[w]=it[$]=it[C]=it[D]=it[k]=it[_]=it[E]=!1;var at={};at[p]=at[g]=at[T]=at[I]=at[m]=at[b]=at[F]=at[M]=at[A]=at[j]=at[z]=at[w]=at[$]=at[C]=at[D]=at[k]=at[_]=at[O]=at[R]=at[B]=at[P]=at[L]=!0,at[v]=at[y]=at[E]=!1;var st={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},lt=parseFloat,ct=parseInt,ut="object"==typeof Ae&&Ae&&Ae.Object===Object&&Ae,dt="object"==typeof self&&self&&self.Object===Object&&self,ft=ut||dt||Function("return this")(),ht=E$&&!E$.nodeType&&E$,pt=ht&&O$&&!O$.nodeType&&O$,gt=pt&&pt.exports===ht,mt=gt&&ut.process,bt=function(){try{var e=pt&&pt.require&&pt.require("util").types;return e||mt&&mt.binding&&mt.binding("util")}catch(e){}}(),vt=bt&&bt.isArrayBuffer,yt=bt&&bt.isDate,xt=bt&&bt.isMap,wt=bt&&bt.isRegExp,$t=bt&&bt.isSet,Ct=bt&&bt.isTypedArray;function St(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function Dt(e,t,r,n){for(var o=-1,i=null==e?0:e.length;++o<i;){var a=e[o];t(n,a,r(a),e)}return n}function kt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function _t(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Ot(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Et(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}function Tt(e,t){return!(null==e||!e.length)&&Lt(e,t,0)>-1}function It(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}function Ft(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function Mt(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}function At(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function jt(e,t,r,n){var o=null==e?0:e.length;for(n&&o&&(r=e[--o]);o--;)r=t(r,e[o],o,e);return r}function zt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var Rt=Vt("length");function Bt(e,t,r){var n;return r(e,(function(e,r,o){if(t(e,r,o))return n=r,!1})),n}function Pt(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}function Lt(e,t,r){return t==t?function(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}(e,t,r):Pt(e,Ht,r)}function Nt(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function Ht(e){return e!=e}function Wt(e,t){var r=null==e?0:e.length;return r?Kt(e,t)/r:d}function Vt(t){return function(r){return null==r?e:r[t]}}function Yt(t){return function(r){return null==t?e:t[r]}}function Ut(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r}function Kt(t,r){for(var n,o=-1,i=t.length;++o<i;){var a=r(t[o]);a!==e&&(n=n===e?a:n+a)}return n}function qt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Gt(e){return e?e.slice(0,fr(e)+1).replace(re,""):e}function Qt(e){return function(t){return e(t)}}function Zt(e,t){return Ft(t,(function(t){return e[t]}))}function Xt(e,t){return e.has(t)}function Jt(e,t){for(var r=-1,n=e.length;++r<n&&Lt(t,e[r],0)>-1;);return r}function er(e,t){for(var r=e.length;r--&&Lt(t,e[r],0)>-1;);return r}var tr=Yt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),rr=Yt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function nr(e){return"\\"+st[e]}function or(e){return tt.test(e)}function ir(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function ar(e,t){return function(r){return e(t(r))}}function sr(e,t){for(var r=-1,o=e.length,i=0,a=[];++r<o;){var s=e[r];s!==t&&s!==n||(e[r]=n,a[i++]=r)}return a}function lr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function cr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function ur(e){return or(e)?function(e){for(var t=Je.lastIndex=0;Je.test(e);)++t;return t}(e):Rt(e)}function dr(e){return or(e)?function(e){return e.match(Je)||[]}(e):function(e){return e.split("")}(e)}function fr(e){for(var t=e.length;t--&&ne.test(e.charAt(t)););return t}var hr=Yt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),pr=function ne(xe){var we=(xe=null==xe?ft:pr.defaults(ft.Object(),xe,pr.pick(ft,nt))).Array,$e=xe.Date,Ce=xe.Error,Se=xe.Function,De=xe.Math,ke=xe.Object,_e=xe.RegExp,Oe=xe.String,Ee=xe.TypeError,Te=we.prototype,Ie=Se.prototype,Fe=ke.prototype,Me=xe["__core-js_shared__"],Ae=Ie.toString,je=Fe.hasOwnProperty,ze=0,Re=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Be=Fe.toString,Pe=Ae.call(ke),Le=ft._,Ne=_e("^"+Ae.call(je).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=gt?xe.Buffer:e,We=xe.Symbol,Ve=xe.Uint8Array,Ye=He?He.allocUnsafe:e,Ue=ar(ke.getPrototypeOf,ke),Ke=ke.create,qe=Fe.propertyIsEnumerable,Ge=Te.splice,Qe=We?We.isConcatSpreadable:e,Je=We?We.iterator:e,tt=We?We.toStringTag:e,st=function(){try{var e=fi(ke,"defineProperty");return e({},"",{}),e}catch(e){}}(),ut=xe.clearTimeout!==ft.clearTimeout&&xe.clearTimeout,dt=$e&&$e.now!==ft.Date.now&&$e.now,ht=xe.setTimeout!==ft.setTimeout&&xe.setTimeout,pt=De.ceil,mt=De.floor,bt=ke.getOwnPropertySymbols,Rt=He?He.isBuffer:e,Yt=xe.isFinite,gr=Te.join,mr=ar(ke.keys,ke),br=De.max,vr=De.min,yr=$e.now,xr=xe.parseInt,wr=De.random,$r=Te.reverse,Cr=fi(xe,"DataView"),Sr=fi(xe,"Map"),Dr=fi(xe,"Promise"),kr=fi(xe,"Set"),_r=fi(xe,"WeakMap"),Or=fi(ke,"create"),Er=_r&&new _r,Tr={},Ir=Bi(Cr),Fr=Bi(Sr),Mr=Bi(Dr),Ar=Bi(kr),jr=Bi(_r),zr=We?We.prototype:e,Rr=zr?zr.valueOf:e,Br=zr?zr.toString:e;function Pr(e){if(ts(e)&&!Va(e)&&!(e instanceof Wr)){if(e instanceof Hr)return e;if(je.call(e,"__wrapped__"))return Pi(e)}return new Hr(e)}var Lr=function(){function t(){}return function(r){if(!es(r))return{};if(Ke)return Ke(r);t.prototype=r;var n=new t;return t.prototype=e,n}}();function Nr(){}function Hr(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}function Wr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=f,this.__views__=[]}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function qr(e){var t=this.__data__=new Yr(e);this.size=t.size}function Gr(e,t){var r=Va(e),n=!r&&Wa(e),o=!r&&!n&&qa(e),i=!r&&!n&&!o&&cs(e),a=r||n||o||i,s=a?qt(e.length,Oe):[],l=s.length;for(var c in e)!t&&!je.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||yi(c,l))||s.push(c);return s}function Qr(t){var r=t.length;return r?t[qn(0,r-1)]:e}function Zr(e,t){return ji(To(e),sn(t,0,e.length))}function Xr(e){return ji(To(e))}function Jr(t,r,n){(n!==e&&!La(t[r],n)||n===e&&!(r in t))&&on(t,r,n)}function en(t,r,n){var o=t[r];je.call(t,r)&&La(o,n)&&(n!==e||r in t)||on(t,r,n)}function tn(e,t){for(var r=e.length;r--;)if(La(e[r][0],t))return r;return-1}function rn(e,t,r,n){return fn(e,(function(e,o,i){t(n,e,r(e),i)})),n}function nn(e,t){return e&&Io(t,Is(t),e)}function on(e,t,r){"__proto__"==t&&st?st(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(t,r){for(var n=-1,o=r.length,i=we(o),a=null==t;++n<o;)i[n]=a?e:ks(t,r[n]);return i}function sn(t,r,n){return t==t&&(n!==e&&(t=t<=n?t:n),r!==e&&(t=t>=r?t:r)),t}function ln(t,r,n,o,i,a){var s,l=1&r,c=2&r,u=4&r;if(n&&(s=i?n(t,o,i,a):n(t)),s!==e)return s;if(!es(t))return t;var d=Va(t);if(d){if(s=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&je.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(t),!l)return To(t,s)}else{var f=gi(t),h=f==y||f==x;if(qa(t))return So(t,l);if(f==C||f==p||h&&!i){if(s=c||h?{}:bi(t),!l)return c?function(e,t){return Io(e,pi(e),t)}(t,function(e,t){return e&&Io(t,Fs(t),e)}(s,t)):function(e,t){return Io(e,hi(e),t)}(t,nn(s,t))}else{if(!at[f])return i?t:{};s=function(e,t,r){var n,o=e.constructor;switch(t){case T:return Do(e);case m:case b:return new o(+e);case I:return function(e,t){var r=t?Do(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case F:case M:case A:case j:case z:case R:case B:case P:case L:return ko(e,r);case w:return new o;case $:case _:return new o(e);case D:return function(e){var t=new e.constructor(e.source,de.exec(e));return t.lastIndex=e.lastIndex,t}(e);case k:return new o;case O:return n=e,Rr?ke(Rr.call(n)):{}}}(t,f,l)}}a||(a=new qr);var g=a.get(t);if(g)return g;a.set(t,s),as(t)?t.forEach((function(e){s.add(ln(e,r,n,e,t,a))})):rs(t)&&t.forEach((function(e,o){s.set(o,ln(e,r,n,o,t,a))}));var v=d?e:(u?c?ii:oi:c?Fs:Is)(t);return kt(v||t,(function(e,o){v&&(e=t[o=e]),en(s,o,ln(e,r,n,o,t,a))})),s}function cn(t,r,n){var o=n.length;if(null==t)return!o;for(t=ke(t);o--;){var i=n[o],a=r[i],s=t[i];if(s===e&&!(i in t)||!a(s))return!1}return!0}function un(r,n,o){if("function"!=typeof r)throw new Ee(t);return Ii((function(){r.apply(e,o)}),n)}function dn(e,t,r,n){var o=-1,i=Tt,a=!0,s=e.length,l=[],c=t.length;if(!s)return l;r&&(t=Ft(t,Qt(r))),n?(i=It,a=!1):t.length>=200&&(i=Xt,a=!1,t=new Kr(t));e:for(;++o<s;){var u=e[o],d=null==r?u:r(u);if(u=n||0!==u?u:0,a&&d==d){for(var f=c;f--;)if(t[f]===d)continue e;l.push(u)}else i(t,d,n)||l.push(u)}return l}Pr.templateSettings={escape:q,evaluate:G,interpolate:Q,variable:"",imports:{_:Pr}},Pr.prototype=Nr.prototype,Pr.prototype.constructor=Pr,Hr.prototype=Lr(Nr.prototype),Hr.prototype.constructor=Hr,Wr.prototype=Lr(Nr.prototype),Wr.prototype.constructor=Wr,Vr.prototype.clear=function(){this.__data__=Or?Or(null):{},this.size=0},Vr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Vr.prototype.get=function(t){var n=this.__data__;if(Or){var o=n[t];return o===r?e:o}return je.call(n,t)?n[t]:e},Vr.prototype.has=function(t){var r=this.__data__;return Or?r[t]!==e:je.call(r,t)},Vr.prototype.set=function(t,n){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=Or&&n===e?r:n,this},Yr.prototype.clear=function(){this.__data__=[],this.size=0},Yr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0||(r==t.length-1?t.pop():Ge.call(t,r,1),--this.size,0))},Yr.prototype.get=function(t){var r=this.__data__,n=tn(r,t);return n<0?e:r[n][1]},Yr.prototype.has=function(e){return tn(this.__data__,e)>-1},Yr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Vr,map:new(Sr||Yr),string:new Vr}},Ur.prototype.delete=function(e){var t=ui(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return ui(this,e).get(e)},Ur.prototype.has=function(e){return ui(this,e).has(e)},Ur.prototype.set=function(e,t){var r=ui(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,r),this},Kr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.clear=function(){this.__data__=new Yr,this.size=0},qr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},qr.prototype.get=function(e){return this.__data__.get(e)},qr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Yr){var n=r.__data__;if(!Sr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var fn=Ao(xn),hn=Ao(wn,!0);function pn(e,t){var r=!0;return fn(e,(function(e,n,o){return r=!!t(e,n,o)})),r}function gn(t,r,n){for(var o=-1,i=t.length;++o<i;){var a=t[o],s=r(a);if(null!=s&&(l===e?s==s&&!ls(s):n(s,l)))var l=s,c=a}return c}function mn(e,t){var r=[];return fn(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}function bn(e,t,r,n,o){var i=-1,a=e.length;for(r||(r=vi),o||(o=[]);++i<a;){var s=e[i];t>0&&r(s)?t>1?bn(s,t-1,r,n,o):Mt(o,s):n||(o[o.length]=s)}return o}var vn=jo(),yn=jo(!0);function xn(e,t){return e&&vn(e,t,Is)}function wn(e,t){return e&&yn(e,t,Is)}function $n(e,t){return Et(t,(function(t){return Za(e[t])}))}function Cn(t,r){for(var n=0,o=(r=xo(r,t)).length;null!=t&&n<o;)t=t[Ri(r[n++])];return n&&n==o?t:e}function Sn(e,t,r){var n=t(e);return Va(e)?n:Mt(n,r(e))}function Dn(t){return null==t?t===e?"[object Undefined]":"[object Null]":tt&&tt in ke(t)?function(t){var r=je.call(t,tt),n=t[tt];try{t[tt]=e;var o=!0}catch(e){}var i=Be.call(t);return o&&(r?t[tt]=n:delete t[tt]),i}(t):function(e){return Be.call(e)}(t)}function kn(e,t){return e>t}function _n(e,t){return null!=e&&je.call(e,t)}function On(e,t){return null!=e&&t in ke(e)}function En(t,r,n){for(var o=n?It:Tt,i=t[0].length,a=t.length,s=a,l=we(a),c=1/0,u=[];s--;){var d=t[s];s&&r&&(d=Ft(d,Qt(r))),c=vr(d.length,c),l[s]=!n&&(r||i>=120&&d.length>=120)?new Kr(s&&d):e}d=t[0];var f=-1,h=l[0];e:for(;++f<i&&u.length<c;){var p=d[f],g=r?r(p):p;if(p=n||0!==p?p:0,!(h?Xt(h,g):o(u,g,n))){for(s=a;--s;){var m=l[s];if(!(m?Xt(m,g):o(t[s],g,n)))continue e}h&&h.push(g),u.push(p)}}return u}function Tn(t,r,n){var o=null==(t=Oi(t,r=xo(r,t)))?t:t[Ri(Qi(r))];return null==o?e:St(o,t,n)}function In(e){return ts(e)&&Dn(e)==p}function Fn(t,r,n,o,i){return t===r||(null==t||null==r||!ts(t)&&!ts(r)?t!=t&&r!=r:function(t,r,n,o,i,a){var s=Va(t),l=Va(r),c=s?g:gi(t),u=l?g:gi(r),d=(c=c==p?C:c)==C,f=(u=u==p?C:u)==C,h=c==u;if(h&&qa(t)){if(!qa(r))return!1;s=!0,d=!1}if(h&&!d)return a||(a=new qr),s||cs(t)?ri(t,r,n,o,i,a):function(e,t,r,n,o,i,a){switch(r){case I:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case T:return!(e.byteLength!=t.byteLength||!i(new Ve(e),new Ve(t)));case m:case b:case $:return La(+e,+t);case v:return e.name==t.name&&e.message==t.message;case D:case _:return e==t+"";case w:var s=ir;case k:var l=1&n;if(s||(s=lr),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var u=ri(s(e),s(t),n,o,i,a);return a.delete(e),u;case O:if(Rr)return Rr.call(e)==Rr.call(t)}return!1}(t,r,c,n,o,i,a);if(!(1&n)){var y=d&&je.call(t,"__wrapped__"),x=f&&je.call(r,"__wrapped__");if(y||x){var S=y?t.value():t,E=x?r.value():r;return a||(a=new qr),i(S,E,n,o,a)}}return!!h&&(a||(a=new qr),function(t,r,n,o,i,a){var s=1&n,l=oi(t),c=l.length,u=oi(r),d=u.length;if(c!=d&&!s)return!1;for(var f=c;f--;){var h=l[f];if(!(s?h in r:je.call(r,h)))return!1}var p=a.get(t),g=a.get(r);if(p&&g)return p==r&&g==t;var m=!0;a.set(t,r),a.set(r,t);for(var b=s;++f<c;){var v=t[h=l[f]],y=r[h];if(o)var x=s?o(y,v,h,r,t,a):o(v,y,h,t,r,a);if(!(x===e?v===y||i(v,y,n,o,a):x)){m=!1;break}b||(b="constructor"==h)}if(m&&!b){var w=t.constructor,$=r.constructor;w==$||!("constructor"in t)||!("constructor"in r)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(t),a.delete(r),m}(t,r,n,o,i,a))}(t,r,n,o,Fn,i))}function Mn(t,r,n,o){var i=n.length,a=i,s=!o;if(null==t)return!a;for(t=ke(t);i--;){var l=n[i];if(s&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++i<a;){var c=(l=n[i])[0],u=t[c],d=l[1];if(s&&l[2]){if(u===e&&!(c in t))return!1}else{var f=new qr;if(o)var h=o(u,d,c,t,r,f);if(!(h===e?Fn(d,u,3,o,f):h))return!1}}return!0}function An(e){return!(!es(e)||(t=e,Re&&Re in t))&&(Za(e)?Ne:pe).test(Bi(e));var t}function jn(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Va(e)?Nn(e[0],e[1]):Ln(e):fl(e)}function zn(e){if(!Si(e))return mr(e);var t=[];for(var r in ke(e))je.call(e,r)&&"constructor"!=r&&t.push(r);return t}function Rn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in ke(e))t.push(r);return t}(e);var t=Si(e),r=[];for(var n in e)("constructor"!=n||!t&&je.call(e,n))&&r.push(n);return r}function Bn(e,t){return e<t}function Pn(e,t){var r=-1,n=Ua(e)?we(e.length):[];return fn(e,(function(e,o,i){n[++r]=t(e,o,i)})),n}function Ln(e){var t=di(e);return 1==t.length&&t[0][2]?ki(t[0][0],t[0][1]):function(r){return r===e||Mn(r,e,t)}}function Nn(t,r){return wi(t)&&Di(r)?ki(Ri(t),r):function(n){var o=ks(n,t);return o===e&&o===r?_s(n,t):Fn(r,o,3)}}function Hn(t,r,n,o,i){t!==r&&vn(r,(function(a,s){if(i||(i=new qr),es(a))!function(t,r,n,o,i,a,s){var l=Ei(t,n),c=Ei(r,n),u=s.get(c);if(u)Jr(t,n,u);else{var d=a?a(l,c,n+"",t,r,s):e,f=d===e;if(f){var h=Va(c),p=!h&&qa(c),g=!h&&!p&&cs(c);d=c,h||p||g?Va(l)?d=l:Ka(l)?d=To(l):p?(f=!1,d=So(c,!0)):g?(f=!1,d=ko(c,!0)):d=[]:os(c)||Wa(c)?(d=l,Wa(l)?d=bs(l):es(l)&&!Za(l)||(d=bi(c))):f=!1}f&&(s.set(c,d),i(d,c,o,a,s),s.delete(c)),Jr(t,n,d)}}(t,r,s,n,Hn,o,i);else{var l=o?o(Ei(t,s),a,s+"",t,r,i):e;l===e&&(l=a),Jr(t,s,l)}}),Fs)}function Wn(t,r){var n=t.length;if(n)return yi(r+=r<0?n:0,n)?t[r]:e}function Vn(e,t,r){t=t.length?Ft(t,(function(e){return Va(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=Ft(t,Qt(ci()));var o=Pn(e,(function(e,r,o){var i=Ft(t,(function(t){return t(e)}));return{criteria:i,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(o,(function(e,t){return function(e,t,r){for(var n=-1,o=e.criteria,i=t.criteria,a=o.length,s=r.length;++n<a;){var l=_o(o[n],i[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Yn(e,t,r){for(var n=-1,o=t.length,i={};++n<o;){var a=t[n],s=Cn(e,a);r(s,a)&&Jn(i,xo(a,e),s)}return i}function Un(e,t,r,n){var o=n?Nt:Lt,i=-1,a=t.length,s=e;for(e===t&&(t=To(t)),r&&(s=Ft(e,Qt(r)));++i<a;)for(var l=0,c=t[i],u=r?r(c):c;(l=o(s,u,l,n))>-1;)s!==e&&Ge.call(s,l,1),Ge.call(e,l,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var o=t[r];if(r==n||o!==i){var i=o;yi(o)?Ge.call(e,o,1):fo(e,o)}}return e}function qn(e,t){return e+mt(wr()*(t-e+1))}function Gn(e,t){var r="";if(!e||t<1||t>u)return r;do{t%2&&(r+=e),(t=mt(t/2))&&(e+=e)}while(t);return r}function Qn(e,t){return Fi(_i(e,t,nl),e+"")}function Zn(e){return Qr(Ls(e))}function Xn(e,t){var r=Ls(e);return ji(r,sn(t,0,r.length))}function Jn(t,r,n,o){if(!es(t))return t;for(var i=-1,a=(r=xo(r,t)).length,s=a-1,l=t;null!=l&&++i<a;){var c=Ri(r[i]),u=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(i!=s){var d=l[c];(u=o?o(d,c,l):e)===e&&(u=es(d)?d:yi(r[i+1])?[]:{})}en(l,c,u),l=l[c]}return t}var eo=Er?function(e,t){return Er.set(e,t),e}:nl,to=st?function(e,t){return st(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ro(e){return ji(Ls(e))}function no(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=we(o);++n<o;)i[n]=e[n+t];return i}function oo(e,t){var r;return fn(e,(function(e,n,o){return!(r=t(e,n,o))})),!!r}function io(e,t,r){var n=0,o=null==e?n:e.length;if("number"==typeof t&&t==t&&o<=2147483647){for(;n<o;){var i=n+o>>>1,a=e[i];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=i+1:o=i}return o}return ao(e,t,nl,r)}function ao(t,r,n,o){var i=0,a=null==t?0:t.length;if(0===a)return 0;for(var s=(r=n(r))!=r,l=null===r,c=ls(r),u=r===e;i<a;){var d=mt((i+a)/2),f=n(t[d]),h=f!==e,p=null===f,g=f==f,m=ls(f);if(s)var b=o||g;else b=u?g&&(o||h):l?g&&h&&(o||!p):c?g&&h&&!p&&(o||!m):!p&&!m&&(o?f<=r:f<r);b?i=d+1:a=d}return vr(a,4294967294)}function so(e,t){for(var r=-1,n=e.length,o=0,i=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!La(s,l)){var l=s;i[o++]=0===a?0:a}}return i}function lo(e){return"number"==typeof e?e:ls(e)?d:+e}function co(e){if("string"==typeof e)return e;if(Va(e))return Ft(e,co)+"";if(ls(e))return Br?Br.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function uo(e,t,r){var n=-1,o=Tt,i=e.length,a=!0,s=[],l=s;if(r)a=!1,o=It;else if(i>=200){var c=t?null:Qo(e);if(c)return lr(c);a=!1,o=Xt,l=new Kr}else l=t?[]:s;e:for(;++n<i;){var u=e[n],d=t?t(u):u;if(u=r||0!==u?u:0,a&&d==d){for(var f=l.length;f--;)if(l[f]===d)continue e;t&&l.push(d),s.push(u)}else o(l,d,r)||(l!==s&&l.push(d),s.push(u))}return s}function fo(e,t){return null==(e=Oi(e,t=xo(t,e)))||delete e[Ri(Qi(t))]}function ho(e,t,r,n){return Jn(e,t,r(Cn(e,t)),n)}function po(e,t,r,n){for(var o=e.length,i=n?o:-1;(n?i--:++i<o)&&t(e[i],i,e););return r?no(e,n?0:i,n?i+1:o):no(e,n?i+1:0,n?o:i)}function go(e,t){var r=e;return r instanceof Wr&&(r=r.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,Mt([e],t.args))}),r)}function mo(e,t,r){var n=e.length;if(n<2)return n?uo(e[0]):[];for(var o=-1,i=we(n);++o<n;)for(var a=e[o],s=-1;++s<n;)s!=o&&(i[o]=dn(i[o]||a,e[s],t,r));return uo(bn(i,1),t,r)}function bo(t,r,n){for(var o=-1,i=t.length,a=r.length,s={};++o<i;){var l=o<a?r[o]:e;n(s,t[o],l)}return s}function vo(e){return Ka(e)?e:[]}function yo(e){return"function"==typeof e?e:nl}function xo(e,t){return Va(e)?e:wi(e,t)?[e]:zi(vs(e))}var wo=Qn;function $o(t,r,n){var o=t.length;return n=n===e?o:n,!r&&n>=o?t:no(t,r,n)}var Co=ut||function(e){return ft.clearTimeout(e)};function So(e,t){if(t)return e.slice();var r=e.length,n=Ye?Ye(r):new e.constructor(r);return e.copy(n),n}function Do(e){var t=new e.constructor(e.byteLength);return new Ve(t).set(new Ve(e)),t}function ko(e,t){var r=t?Do(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function _o(t,r){if(t!==r){var n=t!==e,o=null===t,i=t==t,a=ls(t),s=r!==e,l=null===r,c=r==r,u=ls(r);if(!l&&!u&&!a&&t>r||a&&s&&c&&!l&&!u||o&&s&&c||!n&&c||!i)return 1;if(!o&&!a&&!u&&t<r||u&&n&&i&&!o&&!a||l&&n&&i||!s&&i||!c)return-1}return 0}function Oo(e,t,r,n){for(var o=-1,i=e.length,a=r.length,s=-1,l=t.length,c=br(i-a,0),u=we(l+c),d=!n;++s<l;)u[s]=t[s];for(;++o<a;)(d||o<i)&&(u[r[o]]=e[o]);for(;c--;)u[s++]=e[o++];return u}function Eo(e,t,r,n){for(var o=-1,i=e.length,a=-1,s=r.length,l=-1,c=t.length,u=br(i-s,0),d=we(u+c),f=!n;++o<u;)d[o]=e[o];for(var h=o;++l<c;)d[h+l]=t[l];for(;++a<s;)(f||o<i)&&(d[h+r[a]]=e[o++]);return d}function To(e,t){var r=-1,n=e.length;for(t||(t=we(n));++r<n;)t[r]=e[r];return t}function Io(t,r,n,o){var i=!n;n||(n={});for(var a=-1,s=r.length;++a<s;){var l=r[a],c=o?o(n[l],t[l],l,n,t):e;c===e&&(c=t[l]),i?on(n,l,c):en(n,l,c)}return n}function Fo(e,t){return function(r,n){var o=Va(r)?Dt:rn,i=t?t():{};return o(r,e,ci(n,2),i)}}function Mo(t){return Qn((function(r,n){var o=-1,i=n.length,a=i>1?n[i-1]:e,s=i>2?n[2]:e;for(a=t.length>3&&"function"==typeof a?(i--,a):e,s&&xi(n[0],n[1],s)&&(a=i<3?e:a,i=1),r=ke(r);++o<i;){var l=n[o];l&&t(r,l,o,a)}return r}))}function Ao(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=ke(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}function jo(e){return function(t,r,n){for(var o=-1,i=ke(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}}function zo(t){return function(r){var n=or(r=vs(r))?dr(r):e,o=n?n[0]:r.charAt(0),i=n?$o(n,1).join(""):r.slice(1);return o[t]()+i}}function Ro(e){return function(t){return At(Zs(Ws(t).replace(Ze,"")),e,"")}}function Bo(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Lr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function Po(t){return function(r,n,o){var i=ke(r);if(!Ua(r)){var a=ci(n,3);r=Is(r),n=function(e){return a(i[e],e,i)}}var s=t(r,n,o);return s>-1?i[a?r[s]:s]:e}}function Lo(r){return ni((function(n){var o=n.length,i=o,a=Hr.prototype.thru;for(r&&n.reverse();i--;){var s=n[i];if("function"!=typeof s)throw new Ee(t);if(a&&!l&&"wrapper"==si(s))var l=new Hr([],!0)}for(i=l?i:o;++i<o;){var c=si(s=n[i]),u="wrapper"==c?ai(s):e;l=u&&$i(u[0])&&424==u[1]&&!u[4].length&&1==u[9]?l[si(u[0])].apply(l,u[3]):1==s.length&&$i(s)?l[c]():l.thru(s)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Va(t))return l.plant(t).value();for(var r=0,i=o?n[r].apply(this,e):t;++r<o;)i=n[r].call(this,i);return i}}))}function No(t,r,n,o,i,a,l,c,u,d){var f=r&s,h=1&r,p=2&r,g=24&r,m=512&r,b=p?e:Bo(t);return function s(){for(var v=arguments.length,y=we(v),x=v;x--;)y[x]=arguments[x];if(g)var w=li(s),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,w);if(o&&(y=Oo(y,o,i,g)),a&&(y=Eo(y,a,l,g)),v-=$,g&&v<d){var C=sr(y,w);return qo(t,r,No,s.placeholder,n,y,C,c,u,d-v)}var S=h?n:this,D=p?S[t]:t;return v=y.length,c?y=function(t,r){for(var n=t.length,o=vr(r.length,n),i=To(t);o--;){var a=r[o];t[o]=yi(a,n)?i[a]:e}return t}(y,c):m&&v>1&&y.reverse(),f&&u<v&&(y.length=u),this&&this!==ft&&this instanceof s&&(D=b||Bo(D)),D.apply(S,y)}}function Ho(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,o,i){t(n,r(e),o,i)})),n}(r,e,t(n),{})}}function Wo(t,r){return function(n,o){var i;if(n===e&&o===e)return r;if(n!==e&&(i=n),o!==e){if(i===e)return o;"string"==typeof n||"string"==typeof o?(n=co(n),o=co(o)):(n=lo(n),o=lo(o)),i=t(n,o)}return i}}function Vo(e){return ni((function(t){return t=Ft(t,Qt(ci())),Qn((function(r){var n=this;return e(t,(function(e){return St(e,n,r)}))}))}))}function Yo(t,r){var n=(r=r===e?" ":co(r)).length;if(n<2)return n?Gn(r,t):r;var o=Gn(r,pt(t/ur(r)));return or(r)?$o(dr(o),0,t).join(""):o.slice(0,t)}function Uo(t){return function(r,n,o){return o&&"number"!=typeof o&&xi(r,n,o)&&(n=o=e),r=hs(r),n===e?(n=r,r=0):n=hs(n),function(e,t,r,n){for(var o=-1,i=br(pt((t-e)/(r||1)),0),a=we(i);i--;)a[n?i:++o]=e,e+=r;return a}(r,n,o=o===e?r<n?1:-1:hs(o),t)}}function Ko(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ms(t),r=ms(r)),e(t,r)}}function qo(t,r,n,o,s,l,c,u,d,f){var h=8&r;r|=h?i:a,4&(r&=~(h?a:i))||(r&=-4);var p=[t,r,s,h?l:e,h?c:e,h?e:l,h?e:c,u,d,f],g=n.apply(e,p);return $i(t)&&Ti(g,p),g.placeholder=o,Mi(g,t,r)}function Go(e){var t=De[e];return function(e,r){if(e=ms(e),(r=null==r?0:vr(ps(r),292))&&Yt(e)){var n=(vs(e)+"e").split("e");return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Qo=kr&&1/lr(new kr([,-0]))[1]==c?function(e){return new kr(e)}:ll;function Zo(e){return function(t){var r=gi(t);return r==w?ir(t):r==k?cr(t):function(e,t){return Ft(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Xo(r,c,u,d,f,h,p,g){var m=2&c;if(!m&&"function"!=typeof r)throw new Ee(t);var b=d?d.length:0;if(b||(c&=-97,d=f=e),p=p===e?p:br(ps(p),0),g=g===e?g:ps(g),b-=f?f.length:0,c&a){var v=d,y=f;d=f=e}var x=m?e:ai(r),w=[r,c,u,d,f,v,y,h,p,g];if(x&&function(e,t){var r=e[1],o=t[1],i=r|o,a=i<131,c=o==s&&8==r||o==s&&r==l&&e[7].length<=t[8]||384==o&&t[7].length<=t[8]&&8==r;if(!a&&!c)return e;1&o&&(e[2]=t[2],i|=1&r?0:4);var u=t[3];if(u){var d=e[3];e[3]=d?Oo(d,u,t[4]):u,e[4]=d?sr(e[3],n):t[4]}(u=t[5])&&(d=e[5],e[5]=d?Eo(d,u,t[6]):u,e[6]=d?sr(e[5],n):t[6]),(u=t[7])&&(e[7]=u),o&s&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}(w,x),r=w[0],c=w[1],u=w[2],d=w[3],f=w[4],!(g=w[9]=w[9]===e?m?0:r.length:br(w[9]-b,0))&&24&c&&(c&=-25),c&&1!=c)$=8==c||c==o?function(t,r,n){var o=Bo(t);return function i(){for(var a=arguments.length,s=we(a),l=a,c=li(i);l--;)s[l]=arguments[l];var u=a<3&&s[0]!==c&&s[a-1]!==c?[]:sr(s,c);return(a-=u.length)<n?qo(t,r,No,i.placeholder,e,s,u,e,e,n-a):St(this&&this!==ft&&this instanceof i?o:t,this,s)}}(r,c,g):c!=i&&33!=c||f.length?No.apply(e,w):function(e,t,r,n){var o=1&t,i=Bo(e);return function t(){for(var a=-1,s=arguments.length,l=-1,c=n.length,u=we(c+s),d=this&&this!==ft&&this instanceof t?i:e;++l<c;)u[l]=n[l];for(;s--;)u[l++]=arguments[++a];return St(d,o?r:this,u)}}(r,c,u,d);else var $=function(e,t,r){var n=1&t,o=Bo(e);return function t(){return(this&&this!==ft&&this instanceof t?o:e).apply(n?r:this,arguments)}}(r,c,u);return Mi((x?eo:Ti)($,w),r,c)}function Jo(t,r,n,o){return t===e||La(t,Fe[n])&&!je.call(o,n)?r:t}function ei(t,r,n,o,i,a){return es(t)&&es(r)&&(a.set(r,t),Hn(t,r,e,ei,a),a.delete(r)),t}function ti(t){return os(t)?e:t}function ri(t,r,n,o,i,a){var s=1&n,l=t.length,c=r.length;if(l!=c&&!(s&&c>l))return!1;var u=a.get(t),d=a.get(r);if(u&&d)return u==r&&d==t;var f=-1,h=!0,p=2&n?new Kr:e;for(a.set(t,r),a.set(r,t);++f<l;){var g=t[f],m=r[f];if(o)var b=s?o(m,g,f,r,t,a):o(g,m,f,t,r,a);if(b!==e){if(b)continue;h=!1;break}if(p){if(!zt(r,(function(e,t){if(!Xt(p,t)&&(g===e||i(g,e,n,o,a)))return p.push(t)}))){h=!1;break}}else if(g!==m&&!i(g,m,n,o,a)){h=!1;break}}return a.delete(t),a.delete(r),h}function ni(t){return Fi(_i(t,e,Yi),t+"")}function oi(e){return Sn(e,Is,hi)}function ii(e){return Sn(e,Fs,pi)}var ai=Er?function(e){return Er.get(e)}:ll;function si(e){for(var t=e.name+"",r=Tr[t],n=je.call(Tr,t)?r.length:0;n--;){var o=r[n],i=o.func;if(null==i||i==e)return o.name}return t}function li(e){return(je.call(Pr,"placeholder")?Pr:e).placeholder}function ci(){var e=Pr.iteratee||ol;return e=e===ol?jn:e,arguments.length?e(arguments[0],arguments[1]):e}function ui(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function di(e){for(var t=Is(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Di(o)]}return t}function fi(t,r){var n=function(t,r){return null==t?e:t[r]}(t,r);return An(n)?n:e}var hi=bt?function(e){return null==e?[]:(e=ke(e),Et(bt(e),(function(t){return qe.call(e,t)})))}:gl,pi=bt?function(e){for(var t=[];e;)Mt(t,hi(e)),e=Ue(e);return t}:gl,gi=Dn;function mi(e,t,r){for(var n=-1,o=(t=xo(t,e)).length,i=!1;++n<o;){var a=Ri(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Ja(o)&&yi(a,o)&&(Va(e)||Wa(e))}function bi(e){return"function"!=typeof e.constructor||Si(e)?{}:Lr(Ue(e))}function vi(e){return Va(e)||Wa(e)||!!(Qe&&e&&e[Qe])}function yi(e,t){var r=typeof e;return!!(t=null==t?u:t)&&("number"==r||"symbol"!=r&&me.test(e))&&e>-1&&e%1==0&&e<t}function xi(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yi(t,r.length):"string"==n&&t in r)&&La(r[t],e)}function wi(e,t){if(Va(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||X.test(e)||!Z.test(e)||null!=t&&e in ke(t)}function $i(e){var t=si(e),r=Pr[t];if("function"!=typeof r||!(t in Wr.prototype))return!1;if(e===r)return!0;var n=ai(r);return!!n&&e===n[0]}(Cr&&gi(new Cr(new ArrayBuffer(1)))!=I||Sr&&gi(new Sr)!=w||Dr&&gi(Dr.resolve())!=S||kr&&gi(new kr)!=k||_r&&gi(new _r)!=E)&&(gi=function(t){var r=Dn(t),n=r==C?t.constructor:e,o=n?Bi(n):"";if(o)switch(o){case Ir:return I;case Fr:return w;case Mr:return S;case Ar:return k;case jr:return E}return r});var Ci=Me?Za:ml;function Si(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Fe)}function Di(e){return e==e&&!es(e)}function ki(t,r){return function(n){return null!=n&&n[t]===r&&(r!==e||t in ke(n))}}function _i(t,r,n){return r=br(r===e?t.length-1:r,0),function(){for(var e=arguments,o=-1,i=br(e.length-r,0),a=we(i);++o<i;)a[o]=e[r+o];o=-1;for(var s=we(r+1);++o<r;)s[o]=e[o];return s[r]=n(a),St(t,this,s)}}function Oi(e,t){return t.length<2?e:Cn(e,no(t,0,-1))}function Ei(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Ti=Ai(eo),Ii=ht||function(e,t){return ft.setTimeout(e,t)},Fi=Ai(to);function Mi(e,t,r){var n=t+"";return Fi(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return kt(h,(function(r){var n="_."+r[0];t&r[1]&&!Tt(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(ie);return t?t[1].split(ae):[]}(n),r)))}function Ai(t){var r=0,n=0;return function(){var o=yr(),i=16-(o-n);if(n=o,i>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(e,arguments)}}function ji(t,r){var n=-1,o=t.length,i=o-1;for(r=r===e?o:r;++n<r;){var a=qn(n,i),s=t[a];t[a]=t[n],t[n]=s}return t.length=r,t}var zi=function(e){var t=Aa(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(J,(function(e,r,n,o){t.push(n?o.replace(ce,"$1"):r||e)})),t}));function Ri(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Bi(e){if(null!=e){try{return Ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Pi(e){if(e instanceof Wr)return e.clone();var t=new Hr(e.__wrapped__,e.__chain__);return t.__actions__=To(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Li=Qn((function(e,t){return Ka(e)?dn(e,bn(t,1,Ka,!0)):[]})),Ni=Qn((function(t,r){var n=Qi(r);return Ka(n)&&(n=e),Ka(t)?dn(t,bn(r,1,Ka,!0),ci(n,2)):[]})),Hi=Qn((function(t,r){var n=Qi(r);return Ka(n)&&(n=e),Ka(t)?dn(t,bn(r,1,Ka,!0),e,n):[]}));function Wi(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ps(r);return o<0&&(o=br(n+o,0)),Pt(e,ci(t,3),o)}function Vi(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o-1;return n!==e&&(i=ps(n),i=n<0?br(o+i,0):vr(i,o-1)),Pt(t,ci(r,3),i,!0)}function Yi(e){return null!=e&&e.length?bn(e,1):[]}function Ui(t){return t&&t.length?t[0]:e}var Ki=Qn((function(e){var t=Ft(e,vo);return t.length&&t[0]===e[0]?En(t):[]})),qi=Qn((function(t){var r=Qi(t),n=Ft(t,vo);return r===Qi(n)?r=e:n.pop(),n.length&&n[0]===t[0]?En(n,ci(r,2)):[]})),Gi=Qn((function(t){var r=Qi(t),n=Ft(t,vo);return(r="function"==typeof r?r:e)&&n.pop(),n.length&&n[0]===t[0]?En(n,e,r):[]}));function Qi(t){var r=null==t?0:t.length;return r?t[r-1]:e}var Zi=Qn(Xi);function Xi(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Ji=ni((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Kn(e,Ft(t,(function(e){return yi(e,r)?+e:e})).sort(_o)),n}));function ea(e){return null==e?e:$r.call(e)}var ta=Qn((function(e){return uo(bn(e,1,Ka,!0))})),ra=Qn((function(t){var r=Qi(t);return Ka(r)&&(r=e),uo(bn(t,1,Ka,!0),ci(r,2))})),na=Qn((function(t){var r=Qi(t);return r="function"==typeof r?r:e,uo(bn(t,1,Ka,!0),e,r)}));function oa(e){if(!e||!e.length)return[];var t=0;return e=Et(e,(function(e){if(Ka(e))return t=br(e.length,t),!0})),qt(t,(function(t){return Ft(e,Vt(t))}))}function ia(t,r){if(!t||!t.length)return[];var n=oa(t);return null==r?n:Ft(n,(function(t){return St(r,e,t)}))}var aa=Qn((function(e,t){return Ka(e)?dn(e,t):[]})),sa=Qn((function(e){return mo(Et(e,Ka))})),la=Qn((function(t){var r=Qi(t);return Ka(r)&&(r=e),mo(Et(t,Ka),ci(r,2))})),ca=Qn((function(t){var r=Qi(t);return r="function"==typeof r?r:e,mo(Et(t,Ka),e,r)})),ua=Qn(oa),da=Qn((function(t){var r=t.length,n=r>1?t[r-1]:e;return n="function"==typeof n?(t.pop(),n):e,ia(t,n)}));function fa(e){var t=Pr(e);return t.__chain__=!0,t}function ha(e,t){return t(e)}var pa=ni((function(t){var r=t.length,n=r?t[0]:0,o=this.__wrapped__,i=function(e){return an(e,t)};return!(r>1||this.__actions__.length)&&o instanceof Wr&&yi(n)?((o=o.slice(n,+n+(r?1:0))).__actions__.push({func:ha,args:[i],thisArg:e}),new Hr(o,this.__chain__).thru((function(t){return r&&!t.length&&t.push(e),t}))):this.thru(i)})),ga=Fo((function(e,t,r){je.call(e,r)?++e[r]:on(e,r,1)})),ma=Po(Wi),ba=Po(Vi);function va(e,t){return(Va(e)?kt:fn)(e,ci(t,3))}function ya(e,t){return(Va(e)?_t:hn)(e,ci(t,3))}var xa=Fo((function(e,t,r){je.call(e,r)?e[r].push(t):on(e,r,[t])})),wa=Qn((function(e,t,r){var n=-1,o="function"==typeof t,i=Ua(e)?we(e.length):[];return fn(e,(function(e){i[++n]=o?St(t,e,r):Tn(e,t,r)})),i})),$a=Fo((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Va(e)?Ft:Pn)(e,ci(t,3))}var Sa=Fo((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]})),Da=Qn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xi(e,t[0],t[1])?t=[]:r>2&&xi(t[0],t[1],t[2])&&(t=[t[0]]),Vn(e,bn(t,1),[])})),ka=dt||function(){return ft.Date.now()};function _a(t,r,n){return r=n?e:r,r=t&&null==r?t.length:r,Xo(t,s,e,e,e,e,r)}function Oa(r,n){var o;if("function"!=typeof n)throw new Ee(t);return r=ps(r),function(){return--r>0&&(o=n.apply(this,arguments)),r<=1&&(n=e),o}}var Ea=Qn((function(e,t,r){var n=1;if(r.length){var o=sr(r,li(Ea));n|=i}return Xo(e,n,t,r,o)})),Ta=Qn((function(e,t,r){var n=3;if(r.length){var o=sr(r,li(Ta));n|=i}return Xo(t,n,e,r,o)}));function Ia(r,n,o){var i,a,s,l,c,u,d=0,f=!1,h=!1,p=!0;if("function"!=typeof r)throw new Ee(t);function g(t){var n=i,o=a;return i=a=e,d=t,l=r.apply(o,n)}function m(t){var r=t-u;return u===e||r>=n||r<0||h&&t-d>=s}function b(){var e=ka();if(m(e))return v(e);c=Ii(b,function(e){var t=n-(e-u);return h?vr(t,s-(e-d)):t}(e))}function v(t){return c=e,p&&i?g(t):(i=a=e,l)}function y(){var t=ka(),r=m(t);if(i=arguments,a=this,u=t,r){if(c===e)return function(e){return d=e,c=Ii(b,n),f?g(e):l}(u);if(h)return Co(c),c=Ii(b,n),g(u)}return c===e&&(c=Ii(b,n)),l}return n=ms(n)||0,es(o)&&(f=!!o.leading,s=(h="maxWait"in o)?br(ms(o.maxWait)||0,n):s,p="trailing"in o?!!o.trailing:p),y.cancel=function(){c!==e&&Co(c),d=0,i=u=a=c=e},y.flush=function(){return c===e?l:v(ka())},y}var Fa=Qn((function(e,t){return un(e,1,t)})),Ma=Qn((function(e,t,r){return un(e,ms(t)||0,r)}));function Aa(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new Ee(t);var n=function(){var t=arguments,o=r?r.apply(this,t):t[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,t);return n.cache=i.set(o,a)||i,a};return n.cache=new(Aa.Cache||Ur),n}function ja(e){if("function"!=typeof e)throw new Ee(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Aa.Cache=Ur;var za=wo((function(e,t){var r=(t=1==t.length&&Va(t[0])?Ft(t[0],Qt(ci())):Ft(bn(t,1),Qt(ci()))).length;return Qn((function(n){for(var o=-1,i=vr(n.length,r);++o<i;)n[o]=t[o].call(this,n[o]);return St(e,this,n)}))})),Ra=Qn((function(t,r){var n=sr(r,li(Ra));return Xo(t,i,e,r,n)})),Ba=Qn((function(t,r){var n=sr(r,li(Ba));return Xo(t,a,e,r,n)})),Pa=ni((function(t,r){return Xo(t,l,e,e,e,r)}));function La(e,t){return e===t||e!=e&&t!=t}var Na=Ko(kn),Ha=Ko((function(e,t){return e>=t})),Wa=In(function(){return arguments}())?In:function(e){return ts(e)&&je.call(e,"callee")&&!qe.call(e,"callee")},Va=we.isArray,Ya=vt?Qt(vt):function(e){return ts(e)&&Dn(e)==T};function Ua(e){return null!=e&&Ja(e.length)&&!Za(e)}function Ka(e){return ts(e)&&Ua(e)}var qa=Rt||ml,Ga=yt?Qt(yt):function(e){return ts(e)&&Dn(e)==b};function Qa(e){if(!ts(e))return!1;var t=Dn(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!os(e)}function Za(e){if(!es(e))return!1;var t=Dn(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Xa(e){return"number"==typeof e&&e==ps(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=u}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=xt?Qt(xt):function(e){return ts(e)&&gi(e)==w};function ns(e){return"number"==typeof e||ts(e)&&Dn(e)==$}function os(e){if(!ts(e)||Dn(e)!=C)return!1;var t=Ue(e);if(null===t)return!0;var r=je.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Ae.call(r)==Pe}var is=wt?Qt(wt):function(e){return ts(e)&&Dn(e)==D},as=$t?Qt($t):function(e){return ts(e)&&gi(e)==k};function ss(e){return"string"==typeof e||!Va(e)&&ts(e)&&Dn(e)==_}function ls(e){return"symbol"==typeof e||ts(e)&&Dn(e)==O}var cs=Ct?Qt(Ct):function(e){return ts(e)&&Ja(e.length)&&!!it[Dn(e)]},us=Ko(Bn),ds=Ko((function(e,t){return e<=t}));function fs(e){if(!e)return[];if(Ua(e))return ss(e)?dr(e):To(e);if(Je&&e[Je])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Je]());var t=gi(e);return(t==w?ir:t==k?lr:Ls)(e)}function hs(e){return e?(e=ms(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=hs(e),r=t%1;return t==t?r?t-r:t:0}function gs(e){return e?sn(ps(e),0,f):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return d;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Gt(e);var r=he.test(e);return r||ge.test(e)?ct(e.slice(2),r?2:8):fe.test(e)?d:+e}function bs(e){return Io(e,Fs(e))}function vs(e){return null==e?"":co(e)}var ys=Mo((function(e,t){if(Si(t)||Ua(t))Io(t,Is(t),e);else for(var r in t)je.call(t,r)&&en(e,r,t[r])})),xs=Mo((function(e,t){Io(t,Fs(t),e)})),ws=Mo((function(e,t,r,n){Io(t,Fs(t),e,n)})),$s=Mo((function(e,t,r,n){Io(t,Is(t),e,n)})),Cs=ni(an),Ss=Qn((function(t,r){t=ke(t);var n=-1,o=r.length,i=o>2?r[2]:e;for(i&&xi(r[0],r[1],i)&&(o=1);++n<o;)for(var a=r[n],s=Fs(a),l=-1,c=s.length;++l<c;){var u=s[l],d=t[u];(d===e||La(d,Fe[u])&&!je.call(t,u))&&(t[u]=a[u])}return t})),Ds=Qn((function(t){return t.push(e,ei),St(As,e,t)}));function ks(t,r,n){var o=null==t?e:Cn(t,r);return o===e?n:o}function _s(e,t){return null!=e&&mi(e,t,On)}var Os=Ho((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Be.call(t)),e[t]=r}),el(nl)),Es=Ho((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Be.call(t)),je.call(e,t)?e[t].push(r):e[t]=[r]}),ci),Ts=Qn(Tn);function Is(e){return Ua(e)?Gr(e):zn(e)}function Fs(e){return Ua(e)?Gr(e,!0):Rn(e)}var Ms=Mo((function(e,t,r){Hn(e,t,r)})),As=Mo((function(e,t,r,n){Hn(e,t,r,n)})),js=ni((function(e,t){var r={};if(null==e)return r;var n=!1;t=Ft(t,(function(t){return t=xo(t,e),n||(n=t.length>1),t})),Io(e,ii(e),r),n&&(r=ln(r,7,ti));for(var o=t.length;o--;)fo(r,t[o]);return r})),zs=ni((function(e,t){return null==e?{}:function(e,t){return Yn(e,t,(function(t,r){return _s(e,r)}))}(e,t)}));function Rs(e,t){if(null==e)return{};var r=Ft(ii(e),(function(e){return[e]}));return t=ci(t),Yn(e,r,(function(e,r){return t(e,r[0])}))}var Bs=Zo(Is),Ps=Zo(Fs);function Ls(e){return null==e?[]:Zt(e,Is(e))}var Ns=Ro((function(e,t,r){return t=t.toLowerCase(),e+(r?Hs(t):t)}));function Hs(e){return Qs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(be,tr).replace(Xe,"")}var Vs=Ro((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Ys=Ro((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=zo("toLowerCase"),Ks=Ro((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()})),qs=Ro((function(e,t,r){return e+(r?" ":"")+Qs(t)})),Gs=Ro((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Qs=zo("toUpperCase");function Zs(t,r,n){return t=vs(t),(r=n?e:r)===e?function(e){return rt.test(e)}(t)?function(e){return e.match(et)||[]}(t):function(e){return e.match(se)||[]}(t):t.match(r)||[]}var Xs=Qn((function(t,r){try{return St(t,e,r)}catch(e){return Qa(e)?e:new Ce(e)}})),Js=ni((function(e,t){return kt(t,(function(t){t=Ri(t),on(e,t,Ea(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Lo(),rl=Lo(!0);function nl(e){return e}function ol(e){return jn("function"==typeof e?e:ln(e,1))}var il=Qn((function(e,t){return function(r){return Tn(r,e,t)}})),al=Qn((function(e,t){return function(r){return Tn(e,r,t)}}));function sl(e,t,r){var n=Is(t),o=$n(t,n);null!=r||es(t)&&(o.length||!n.length)||(r=t,t=e,e=this,o=$n(t,Is(t)));var i=!(es(r)&&"chain"in r&&!r.chain),a=Za(e);return kt(o,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=e(this.__wrapped__);return(r.__actions__=To(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Mt([this.value()],arguments))})})),e}function ll(){}var cl=Vo(Ft),ul=Vo(Ot),dl=Vo(zt);function fl(e){return wi(e)?Vt(Ri(e)):function(e){return function(t){return Cn(t,e)}}(e)}var hl=Uo(),pl=Uo(!0);function gl(){return[]}function ml(){return!1}var bl,vl=Wo((function(e,t){return e+t}),0),yl=Go("ceil"),xl=Wo((function(e,t){return e/t}),1),wl=Go("floor"),$l=Wo((function(e,t){return e*t}),1),Cl=Go("round"),Sl=Wo((function(e,t){return e-t}),0);return Pr.after=function(e,r){if("function"!=typeof r)throw new Ee(t);return e=ps(e),function(){if(--e<1)return r.apply(this,arguments)}},Pr.ary=_a,Pr.assign=ys,Pr.assignIn=xs,Pr.assignInWith=ws,Pr.assignWith=$s,Pr.at=Cs,Pr.before=Oa,Pr.bind=Ea,Pr.bindAll=Js,Pr.bindKey=Ta,Pr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Va(e)?e:[e]},Pr.chain=fa,Pr.chunk=function(t,r,n){r=(n?xi(t,r,n):r===e)?1:br(ps(r),0);var o=null==t?0:t.length;if(!o||r<1)return[];for(var i=0,a=0,s=we(pt(o/r));i<o;)s[a++]=no(t,i,i+=r);return s},Pr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,o=[];++t<r;){var i=e[t];i&&(o[n++]=i)}return o},Pr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=we(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return Mt(Va(r)?To(r):[r],bn(t,1))},Pr.cond=function(e){var r=null==e?0:e.length,n=ci();return e=r?Ft(e,(function(e){if("function"!=typeof e[1])throw new Ee(t);return[n(e[0]),e[1]]})):[],Qn((function(t){for(var n=-1;++n<r;){var o=e[n];if(St(o[0],this,t))return St(o[1],this,t)}}))},Pr.conforms=function(e){return function(e){var t=Is(e);return function(r){return cn(r,e,t)}}(ln(e,1))},Pr.constant=el,Pr.countBy=ga,Pr.create=function(e,t){var r=Lr(e);return null==t?r:nn(r,t)},Pr.curry=function t(r,n,o){var i=Xo(r,8,e,e,e,e,e,n=o?e:n);return i.placeholder=t.placeholder,i},Pr.curryRight=function t(r,n,i){var a=Xo(r,o,e,e,e,e,e,n=i?e:n);return a.placeholder=t.placeholder,a},Pr.debounce=Ia,Pr.defaults=Ss,Pr.defaultsDeep=Ds,Pr.defer=Fa,Pr.delay=Ma,Pr.difference=Li,Pr.differenceBy=Ni,Pr.differenceWith=Hi,Pr.drop=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=n||r===e?1:ps(r))<0?0:r,o):[]},Pr.dropRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,0,(r=o-(r=n||r===e?1:ps(r)))<0?0:r):[]},Pr.dropRightWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!0,!0):[]},Pr.dropWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!0):[]},Pr.fill=function(t,r,n,o){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&xi(t,r,n)&&(n=0,o=i),function(t,r,n,o){var i=t.length;for((n=ps(n))<0&&(n=-n>i?0:i+n),(o=o===e||o>i?i:ps(o))<0&&(o+=i),o=n>o?0:gs(o);n<o;)t[n++]=r;return t}(t,r,n,o)):[]},Pr.filter=function(e,t){return(Va(e)?Et:mn)(e,ci(t,3))},Pr.flatMap=function(e,t){return bn(Ca(e,t),1)},Pr.flatMapDeep=function(e,t){return bn(Ca(e,t),c)},Pr.flatMapDepth=function(t,r,n){return n=n===e?1:ps(n),bn(Ca(t,r),n)},Pr.flatten=Yi,Pr.flattenDeep=function(e){return null!=e&&e.length?bn(e,c):[]},Pr.flattenDepth=function(t,r){return null!=t&&t.length?bn(t,r=r===e?1:ps(r)):[]},Pr.flip=function(e){return Xo(e,512)},Pr.flow=tl,Pr.flowRight=rl,Pr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var o=e[t];n[o[0]]=o[1]}return n},Pr.functions=function(e){return null==e?[]:$n(e,Is(e))},Pr.functionsIn=function(e){return null==e?[]:$n(e,Fs(e))},Pr.groupBy=xa,Pr.initial=function(e){return null!=e&&e.length?no(e,0,-1):[]},Pr.intersection=Ki,Pr.intersectionBy=qi,Pr.intersectionWith=Gi,Pr.invert=Os,Pr.invertBy=Es,Pr.invokeMap=wa,Pr.iteratee=ol,Pr.keyBy=$a,Pr.keys=Is,Pr.keysIn=Fs,Pr.map=Ca,Pr.mapKeys=function(e,t){var r={};return t=ci(t,3),xn(e,(function(e,n,o){on(r,t(e,n,o),e)})),r},Pr.mapValues=function(e,t){var r={};return t=ci(t,3),xn(e,(function(e,n,o){on(r,n,t(e,n,o))})),r},Pr.matches=function(e){return Ln(ln(e,1))},Pr.matchesProperty=function(e,t){return Nn(e,ln(t,1))},Pr.memoize=Aa,Pr.merge=Ms,Pr.mergeWith=As,Pr.method=il,Pr.methodOf=al,Pr.mixin=sl,Pr.negate=ja,Pr.nthArg=function(e){return e=ps(e),Qn((function(t){return Wn(t,e)}))},Pr.omit=js,Pr.omitBy=function(e,t){return Rs(e,ja(ci(t)))},Pr.once=function(e){return Oa(2,e)},Pr.orderBy=function(t,r,n,o){return null==t?[]:(Va(r)||(r=null==r?[]:[r]),Va(n=o?e:n)||(n=null==n?[]:[n]),Vn(t,r,n))},Pr.over=cl,Pr.overArgs=za,Pr.overEvery=ul,Pr.overSome=dl,Pr.partial=Ra,Pr.partialRight=Ba,Pr.partition=Sa,Pr.pick=zs,Pr.pickBy=Rs,Pr.property=fl,Pr.propertyOf=function(t){return function(r){return null==t?e:Cn(t,r)}},Pr.pull=Zi,Pr.pullAll=Xi,Pr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,ci(r,2)):e},Pr.pullAllWith=function(t,r,n){return t&&t.length&&r&&r.length?Un(t,r,e,n):t},Pr.pullAt=Ji,Pr.range=hl,Pr.rangeRight=pl,Pr.rearg=Pa,Pr.reject=function(e,t){return(Va(e)?Et:mn)(e,ja(ci(t,3)))},Pr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,o=[],i=e.length;for(t=ci(t,3);++n<i;){var a=e[n];t(a,n,e)&&(r.push(a),o.push(n))}return Kn(e,o),r},Pr.rest=function(r,n){if("function"!=typeof r)throw new Ee(t);return Qn(r,n=n===e?n:ps(n))},Pr.reverse=ea,Pr.sampleSize=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:ps(r),(Va(t)?Zr:Xn)(t,r)},Pr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},Pr.setWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:Jn(t,r,n,o)},Pr.shuffle=function(e){return(Va(e)?Xr:ro)(e)},Pr.slice=function(t,r,n){var o=null==t?0:t.length;return o?(n&&"number"!=typeof n&&xi(t,r,n)?(r=0,n=o):(r=null==r?0:ps(r),n=n===e?o:ps(n)),no(t,r,n)):[]},Pr.sortBy=Da,Pr.sortedUniq=function(e){return e&&e.length?so(e):[]},Pr.sortedUniqBy=function(e,t){return e&&e.length?so(e,ci(t,2)):[]},Pr.split=function(t,r,n){return n&&"number"!=typeof n&&xi(t,r,n)&&(r=n=e),(n=n===e?f:n>>>0)?(t=vs(t))&&("string"==typeof r||null!=r&&!is(r))&&!(r=co(r))&&or(t)?$o(dr(t),0,n):t.split(r,n):[]},Pr.spread=function(e,r){if("function"!=typeof e)throw new Ee(t);return r=null==r?0:br(ps(r),0),Qn((function(t){var n=t[r],o=$o(t,0,r);return n&&Mt(o,n),St(e,this,o)}))},Pr.tail=function(e){var t=null==e?0:e.length;return t?no(e,1,t):[]},Pr.take=function(t,r,n){return t&&t.length?no(t,0,(r=n||r===e?1:ps(r))<0?0:r):[]},Pr.takeRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=o-(r=n||r===e?1:ps(r)))<0?0:r,o):[]},Pr.takeRightWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!1,!0):[]},Pr.takeWhile=function(e,t){return e&&e.length?po(e,ci(t,3)):[]},Pr.tap=function(e,t){return t(e),e},Pr.throttle=function(e,r,n){var o=!0,i=!0;if("function"!=typeof e)throw new Ee(t);return es(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),Ia(e,r,{leading:o,maxWait:r,trailing:i})},Pr.thru=ha,Pr.toArray=fs,Pr.toPairs=Bs,Pr.toPairsIn=Ps,Pr.toPath=function(e){return Va(e)?Ft(e,Ri):ls(e)?[e]:To(zi(vs(e)))},Pr.toPlainObject=bs,Pr.transform=function(e,t,r){var n=Va(e),o=n||qa(e)||cs(e);if(t=ci(t,4),null==r){var i=e&&e.constructor;r=o?n?new i:[]:es(e)&&Za(i)?Lr(Ue(e)):{}}return(o?kt:xn)(e,(function(e,n,o){return t(r,e,n,o)})),r},Pr.unary=function(e){return _a(e,1)},Pr.union=ta,Pr.unionBy=ra,Pr.unionWith=na,Pr.uniq=function(e){return e&&e.length?uo(e):[]},Pr.uniqBy=function(e,t){return e&&e.length?uo(e,ci(t,2)):[]},Pr.uniqWith=function(t,r){return r="function"==typeof r?r:e,t&&t.length?uo(t,e,r):[]},Pr.unset=function(e,t){return null==e||fo(e,t)},Pr.unzip=oa,Pr.unzipWith=ia,Pr.update=function(e,t,r){return null==e?e:ho(e,t,yo(r))},Pr.updateWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:ho(t,r,yo(n),o)},Pr.values=Ls,Pr.valuesIn=function(e){return null==e?[]:Zt(e,Fs(e))},Pr.without=aa,Pr.words=Zs,Pr.wrap=function(e,t){return Ra(yo(t),e)},Pr.xor=sa,Pr.xorBy=la,Pr.xorWith=ca,Pr.zip=ua,Pr.zipObject=function(e,t){return bo(e||[],t||[],en)},Pr.zipObjectDeep=function(e,t){return bo(e||[],t||[],Jn)},Pr.zipWith=da,Pr.entries=Bs,Pr.entriesIn=Ps,Pr.extend=xs,Pr.extendWith=ws,sl(Pr,Pr),Pr.add=vl,Pr.attempt=Xs,Pr.camelCase=Ns,Pr.capitalize=Hs,Pr.ceil=yl,Pr.clamp=function(t,r,n){return n===e&&(n=r,r=e),n!==e&&(n=(n=ms(n))==n?n:0),r!==e&&(r=(r=ms(r))==r?r:0),sn(ms(t),r,n)},Pr.clone=function(e){return ln(e,4)},Pr.cloneDeep=function(e){return ln(e,5)},Pr.cloneDeepWith=function(t,r){return ln(t,5,r="function"==typeof r?r:e)},Pr.cloneWith=function(t,r){return ln(t,4,r="function"==typeof r?r:e)},Pr.conformsTo=function(e,t){return null==t||cn(e,t,Is(t))},Pr.deburr=Ws,Pr.defaultTo=function(e,t){return null==e||e!=e?t:e},Pr.divide=xl,Pr.endsWith=function(t,r,n){t=vs(t),r=co(r);var o=t.length,i=n=n===e?o:sn(ps(n),0,o);return(n-=r.length)>=0&&t.slice(n,i)==r},Pr.eq=La,Pr.escape=function(e){return(e=vs(e))&&K.test(e)?e.replace(Y,rr):e},Pr.escapeRegExp=function(e){return(e=vs(e))&&te.test(e)?e.replace(ee,"\\$&"):e},Pr.every=function(t,r,n){var o=Va(t)?Ot:pn;return n&&xi(t,r,n)&&(r=e),o(t,ci(r,3))},Pr.find=ma,Pr.findIndex=Wi,Pr.findKey=function(e,t){return Bt(e,ci(t,3),xn)},Pr.findLast=ba,Pr.findLastIndex=Vi,Pr.findLastKey=function(e,t){return Bt(e,ci(t,3),wn)},Pr.floor=wl,Pr.forEach=va,Pr.forEachRight=ya,Pr.forIn=function(e,t){return null==e?e:vn(e,ci(t,3),Fs)},Pr.forInRight=function(e,t){return null==e?e:yn(e,ci(t,3),Fs)},Pr.forOwn=function(e,t){return e&&xn(e,ci(t,3))},Pr.forOwnRight=function(e,t){return e&&wn(e,ci(t,3))},Pr.get=ks,Pr.gt=Na,Pr.gte=Ha,Pr.has=function(e,t){return null!=e&&mi(e,t,_n)},Pr.hasIn=_s,Pr.head=Ui,Pr.identity=nl,Pr.includes=function(e,t,r,n){e=Ua(e)?e:Ls(e),r=r&&!n?ps(r):0;var o=e.length;return r<0&&(r=br(o+r,0)),ss(e)?r<=o&&e.indexOf(t,r)>-1:!!o&&Lt(e,t,r)>-1},Pr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ps(r);return o<0&&(o=br(n+o,0)),Lt(e,t,o)},Pr.inRange=function(t,r,n){return r=hs(r),n===e?(n=r,r=0):n=hs(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(t=ms(t),r,n)},Pr.invoke=Ts,Pr.isArguments=Wa,Pr.isArray=Va,Pr.isArrayBuffer=Ya,Pr.isArrayLike=Ua,Pr.isArrayLikeObject=Ka,Pr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&Dn(e)==m},Pr.isBuffer=qa,Pr.isDate=Ga,Pr.isElement=function(e){return ts(e)&&1===e.nodeType&&!os(e)},Pr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Va(e)||"string"==typeof e||"function"==typeof e.splice||qa(e)||cs(e)||Wa(e)))return!e.length;var t=gi(e);if(t==w||t==k)return!e.size;if(Si(e))return!zn(e).length;for(var r in e)if(je.call(e,r))return!1;return!0},Pr.isEqual=function(e,t){return Fn(e,t)},Pr.isEqualWith=function(t,r,n){var o=(n="function"==typeof n?n:e)?n(t,r):e;return o===e?Fn(t,r,e,n):!!o},Pr.isError=Qa,Pr.isFinite=function(e){return"number"==typeof e&&Yt(e)},Pr.isFunction=Za,Pr.isInteger=Xa,Pr.isLength=Ja,Pr.isMap=rs,Pr.isMatch=function(e,t){return e===t||Mn(e,t,di(t))},Pr.isMatchWith=function(t,r,n){return n="function"==typeof n?n:e,Mn(t,r,di(r),n)},Pr.isNaN=function(e){return ns(e)&&e!=+e},Pr.isNative=function(e){if(Ci(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return An(e)},Pr.isNil=function(e){return null==e},Pr.isNull=function(e){return null===e},Pr.isNumber=ns,Pr.isObject=es,Pr.isObjectLike=ts,Pr.isPlainObject=os,Pr.isRegExp=is,Pr.isSafeInteger=function(e){return Xa(e)&&e>=-9007199254740991&&e<=u},Pr.isSet=as,Pr.isString=ss,Pr.isSymbol=ls,Pr.isTypedArray=cs,Pr.isUndefined=function(t){return t===e},Pr.isWeakMap=function(e){return ts(e)&&gi(e)==E},Pr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==Dn(e)},Pr.join=function(e,t){return null==e?"":gr.call(e,t)},Pr.kebabCase=Vs,Pr.last=Qi,Pr.lastIndexOf=function(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o;return n!==e&&(i=(i=ps(n))<0?br(o+i,0):vr(i,o-1)),r==r?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(t,r,i):Pt(t,Ht,i,!0)},Pr.lowerCase=Ys,Pr.lowerFirst=Us,Pr.lt=us,Pr.lte=ds,Pr.max=function(t){return t&&t.length?gn(t,nl,kn):e},Pr.maxBy=function(t,r){return t&&t.length?gn(t,ci(r,2),kn):e},Pr.mean=function(e){return Wt(e,nl)},Pr.meanBy=function(e,t){return Wt(e,ci(t,2))},Pr.min=function(t){return t&&t.length?gn(t,nl,Bn):e},Pr.minBy=function(t,r){return t&&t.length?gn(t,ci(r,2),Bn):e},Pr.stubArray=gl,Pr.stubFalse=ml,Pr.stubObject=function(){return{}},Pr.stubString=function(){return""},Pr.stubTrue=function(){return!0},Pr.multiply=$l,Pr.nth=function(t,r){return t&&t.length?Wn(t,ps(r)):e},Pr.noConflict=function(){return ft._===this&&(ft._=Le),this},Pr.noop=ll,Pr.now=ka,Pr.pad=function(e,t,r){e=vs(e);var n=(t=ps(t))?ur(e):0;if(!t||n>=t)return e;var o=(t-n)/2;return Yo(mt(o),r)+e+Yo(pt(o),r)},Pr.padEnd=function(e,t,r){e=vs(e);var n=(t=ps(t))?ur(e):0;return t&&n<t?e+Yo(t-n,r):e},Pr.padStart=function(e,t,r){e=vs(e);var n=(t=ps(t))?ur(e):0;return t&&n<t?Yo(t-n,r)+e:e},Pr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vs(e).replace(re,""),t||0)},Pr.random=function(t,r,n){if(n&&"boolean"!=typeof n&&xi(t,r,n)&&(r=n=e),n===e&&("boolean"==typeof r?(n=r,r=e):"boolean"==typeof t&&(n=t,t=e)),t===e&&r===e?(t=0,r=1):(t=hs(t),r===e?(r=t,t=0):r=hs(r)),t>r){var o=t;t=r,r=o}if(n||t%1||r%1){var i=wr();return vr(t+i*(r-t+lt("1e-"+((i+"").length-1))),r)}return qn(t,r)},Pr.reduce=function(e,t,r){var n=Va(e)?At:Ut,o=arguments.length<3;return n(e,ci(t,4),r,o,fn)},Pr.reduceRight=function(e,t,r){var n=Va(e)?jt:Ut,o=arguments.length<3;return n(e,ci(t,4),r,o,hn)},Pr.repeat=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:ps(r),Gn(vs(t),r)},Pr.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Pr.result=function(t,r,n){var o=-1,i=(r=xo(r,t)).length;for(i||(i=1,t=e);++o<i;){var a=null==t?e:t[Ri(r[o])];a===e&&(o=i,a=n),t=Za(a)?a.call(t):a}return t},Pr.round=Cl,Pr.runInContext=ne,Pr.sample=function(e){return(Va(e)?Qr:Zn)(e)},Pr.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?ur(e):e.length;var t=gi(e);return t==w||t==k?e.size:zn(e).length},Pr.snakeCase=Ks,Pr.some=function(t,r,n){var o=Va(t)?zt:oo;return n&&xi(t,r,n)&&(r=e),o(t,ci(r,3))},Pr.sortedIndex=function(e,t){return io(e,t)},Pr.sortedIndexBy=function(e,t,r){return ao(e,t,ci(r,2))},Pr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=io(e,t);if(n<r&&La(e[n],t))return n}return-1},Pr.sortedLastIndex=function(e,t){return io(e,t,!0)},Pr.sortedLastIndexBy=function(e,t,r){return ao(e,t,ci(r,2),!0)},Pr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=io(e,t,!0)-1;if(La(e[r],t))return r}return-1},Pr.startCase=qs,Pr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:sn(ps(r),0,e.length),t=co(t),e.slice(r,r+t.length)==t},Pr.subtract=Sl,Pr.sum=function(e){return e&&e.length?Kt(e,nl):0},Pr.sumBy=function(e,t){return e&&e.length?Kt(e,ci(t,2)):0},Pr.template=function(t,r,n){var o=Pr.templateSettings;n&&xi(t,r,n)&&(r=e),t=vs(t),r=ws({},r,o,Jo);var i,a,s=ws({},r.imports,o.imports,Jo),l=Is(s),c=Zt(s,l),u=0,d=r.interpolate||ve,f="__p += '",h=_e((r.escape||ve).source+"|"+d.source+"|"+(d===Q?ue:ve).source+"|"+(r.evaluate||ve).source+"|$","g"),p="//# sourceURL="+(je.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ot+"]")+"\n";t.replace(h,(function(e,r,n,o,s,l){return n||(n=o),f+=t.slice(u,l).replace(ye,nr),r&&(i=!0,f+="' +\n__e("+r+") +\n'"),s&&(a=!0,f+="';\n"+s+";\n__p += '"),n&&(f+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),u=l+e.length,e})),f+="';\n";var g=je.call(r,"variable")&&r.variable;if(g){if(le.test(g))throw new Ce("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n";f=(a?f.replace(N,""):f).replace(H,"$1").replace(W,"$1;"),f="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var m=Xs((function(){return Se(l,p+"return "+f).apply(e,c)}));if(m.source=f,Qa(m))throw m;return m},Pr.times=function(e,t){if((e=ps(e))<1||e>u)return[];var r=f,n=vr(e,f);t=ci(t),e-=f;for(var o=qt(n,t);++r<e;)t(r);return o},Pr.toFinite=hs,Pr.toInteger=ps,Pr.toLength=gs,Pr.toLower=function(e){return vs(e).toLowerCase()},Pr.toNumber=ms,Pr.toSafeInteger=function(e){return e?sn(ps(e),-9007199254740991,u):0===e?e:0},Pr.toString=vs,Pr.toUpper=function(e){return vs(e).toUpperCase()},Pr.trim=function(t,r,n){if((t=vs(t))&&(n||r===e))return Gt(t);if(!t||!(r=co(r)))return t;var o=dr(t),i=dr(r);return $o(o,Jt(o,i),er(o,i)+1).join("")},Pr.trimEnd=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.slice(0,fr(t)+1);if(!t||!(r=co(r)))return t;var o=dr(t);return $o(o,0,er(o,dr(r))+1).join("")},Pr.trimStart=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.replace(re,"");if(!t||!(r=co(r)))return t;var o=dr(t);return $o(o,Jt(o,dr(r))).join("")},Pr.truncate=function(t,r){var n=30,o="...";if(es(r)){var i="separator"in r?r.separator:i;n="length"in r?ps(r.length):n,o="omission"in r?co(r.omission):o}var a=(t=vs(t)).length;if(or(t)){var s=dr(t);a=s.length}if(n>=a)return t;var l=n-ur(o);if(l<1)return o;var c=s?$o(s,0,l).join(""):t.slice(0,l);if(i===e)return c+o;if(s&&(l+=c.length-l),is(i)){if(t.slice(l).search(i)){var u,d=c;for(i.global||(i=_e(i.source,vs(de.exec(i))+"g")),i.lastIndex=0;u=i.exec(d);)var f=u.index;c=c.slice(0,f===e?l:f)}}else if(t.indexOf(co(i),l)!=l){var h=c.lastIndexOf(i);h>-1&&(c=c.slice(0,h))}return c+o},Pr.unescape=function(e){return(e=vs(e))&&U.test(e)?e.replace(V,hr):e},Pr.uniqueId=function(e){var t=++ze;return vs(e)+t},Pr.upperCase=Gs,Pr.upperFirst=Qs,Pr.each=va,Pr.eachRight=ya,Pr.first=Ui,sl(Pr,(bl={},xn(Pr,(function(e,t){je.call(Pr.prototype,t)||(bl[t]=e)})),bl),{chain:!1}),Pr.VERSION="4.17.21",kt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Pr[e].placeholder=Pr})),kt(["drop","take"],(function(t,r){Wr.prototype[t]=function(n){n=n===e?1:br(ps(n),0);var o=this.__filtered__&&!r?new Wr(this):this.clone();return o.__filtered__?o.__takeCount__=vr(n,o.__takeCount__):o.__views__.push({size:vr(n,f),type:t+(o.__dir__<0?"Right":"")}),o},Wr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),kt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Wr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:ci(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),kt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Wr.prototype[e]=function(){return this[r](1).value()[0]}})),kt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Wr.prototype[e]=function(){return this.__filtered__?new Wr(this):this[r](1)}})),Wr.prototype.compact=function(){return this.filter(nl)},Wr.prototype.find=function(e){return this.filter(e).head()},Wr.prototype.findLast=function(e){return this.reverse().find(e)},Wr.prototype.invokeMap=Qn((function(e,t){return"function"==typeof e?new Wr(this):this.map((function(r){return Tn(r,e,t)}))})),Wr.prototype.reject=function(e){return this.filter(ja(ci(e)))},Wr.prototype.slice=function(t,r){t=ps(t);var n=this;return n.__filtered__&&(t>0||r<0)?new Wr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),r!==e&&(n=(r=ps(r))<0?n.dropRight(-r):n.take(r-t)),n)},Wr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wr.prototype.toArray=function(){return this.take(f)},xn(Wr.prototype,(function(t,r){var n=/^(?:filter|find|map|reject)|While$/.test(r),o=/^(?:head|last)$/.test(r),i=Pr[o?"take"+("last"==r?"Right":""):r],a=o||/^find/.test(r);i&&(Pr.prototype[r]=function(){var r=this.__wrapped__,s=o?[1]:arguments,l=r instanceof Wr,c=s[0],u=l||Va(r),d=function(e){var t=i.apply(Pr,Mt([e],s));return o&&f?t[0]:t};u&&n&&"function"==typeof c&&1!=c.length&&(l=u=!1);var f=this.__chain__,h=!!this.__actions__.length,p=a&&!f,g=l&&!h;if(!a&&u){r=g?r:new Wr(this);var m=t.apply(r,s);return m.__actions__.push({func:ha,args:[d],thisArg:e}),new Hr(m,f)}return p&&g?t.apply(this,s):(m=this.thru(d),p?o?m.value()[0]:m.value():m)})})),kt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Te[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Pr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var o=this.value();return t.apply(Va(o)?o:[],e)}return this[r]((function(r){return t.apply(Va(r)?r:[],e)}))}})),xn(Wr.prototype,(function(e,t){var r=Pr[t];if(r){var n=r.name+"";je.call(Tr,n)||(Tr[n]=[]),Tr[n].push({name:t,func:r})}})),Tr[No(e,2).name]=[{name:"wrapper",func:e}],Wr.prototype.clone=function(){var e=new Wr(this.__wrapped__);return e.__actions__=To(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=To(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=To(this.__views__),e},Wr.prototype.reverse=function(){if(this.__filtered__){var e=new Wr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Va(e),n=t<0,o=r?e.length:0,i=function(e,t,r){for(var n=-1,o=r.length;++n<o;){var i=r[n],a=i.size;switch(i.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,o,this.__views__),a=i.start,s=i.end,l=s-a,c=n?s:a-1,u=this.__iteratees__,d=u.length,f=0,h=vr(l,this.__takeCount__);if(!r||!n&&o==l&&h==l)return go(e,this.__actions__);var p=[];e:for(;l--&&f<h;){for(var g=-1,m=e[c+=t];++g<d;){var b=u[g],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[f++]=m}return p},Pr.prototype.at=pa,Pr.prototype.chain=function(){return fa(this)},Pr.prototype.commit=function(){return new Hr(this.value(),this.__chain__)},Pr.prototype.next=function(){this.__values__===e&&(this.__values__=fs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Pr.prototype.plant=function(t){for(var r,n=this;n instanceof Nr;){var o=Pi(n);o.__index__=0,o.__values__=e,r?i.__wrapped__=o:r=o;var i=o;n=n.__wrapped__}return i.__wrapped__=t,r},Pr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Wr){var r=t;return this.__actions__.length&&(r=new Wr(this)),(r=r.reverse()).__actions__.push({func:ha,args:[ea],thisArg:e}),new Hr(r,this.__chain__)}return this.thru(ea)},Pr.prototype.toJSON=Pr.prototype.valueOf=Pr.prototype.value=function(){return go(this.__wrapped__,this.__actions__)},Pr.prototype.first=Pr.prototype.head,Je&&(Pr.prototype[Je]=function(){return this}),Pr}();pt?((pt.exports=pr)._=pr,ht._=pr):ft._=pr}.call(Ae);var I$=T$.exports;const F$=o.forwardRef(((n,o)=>{var{value:i,readOnly:a,"data-testid":s,maskRange:l,unmaskRange:u,maskRegex:d,maskTransformer:f,iconMask:h=t(be,{}),iconUnmask:p=t(me,{}),iconActiveColor:m,iconInactiveColor:b,maskChar:v="•",error:y,disableMask:x,transformInput:w,loadState:$,onMask:C,onUnmask:S,onChange:D,onFocus:k,onBlur:_,onTryAgain:O}=n,E=lt(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const T=a&&I$.isEmpty(i),[I,F]=g(!x),[M,A]=g(i||"");c((()=>{A(i||"")}),[i]);const j=e=>{L(!1),k&&k(e)},z=e=>{L(!0),_&&_(e)},R=e=>{let t=e.target.value;switch(w){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}A(t),e.target.value=t,D&&D(e)},B=()=>{a&&O&&O()},P=()=>{L(!I)},L=e=>{F(e),e?C&&C():S&&S()},N=()=>!(null==M?void 0:M.toString().length)||x,H=()=>{if(T)return t(r,{});const e=N();return t(y$,{"data-testid":"icon-"+(I?"masked":"unmasked"),onClick:e?void 0:P,$isDisabled:e,$inactiveColor:b,$activeColor:m,children:I?p:h})};return t("div",{"aria-busy":"loading"===$,"aria-live":"polite",children:(()=>{if(a)switch($){case"fail":return e(_$,{onClick:B,"data-testid":"try-again-button",children:[e(S$,{children:[t(D$,{}),t(k$,{children:"Error"})]}),t(C$,{children:"Try again?"})]});case"loading":return e(x$,{children:[t($$,{}),t(w$,{children:"Retrieving..."})]})}return t(v$,Object.assign({ref:o,"data-testid":`${s||"masked-input"}${I?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:H()},position:"right"},onFocus:a?void 0:j,onBlur:a?void 0:z,onClick:a?P:void 0,onChange:R,value:T?"-":I&&!x?Wc.maskValue(M,{maskChar:v,maskRange:l,unmaskRange:u,maskRegex:d,maskTransformer:f}):M,readOnly:a,error:y,$isDisabled:N()},E))})()})})),M$=o.forwardRef(((e,r)=>{const{label:n,errorMessage:o,id:i="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d}=e,f=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return t(Hu,{id:i,label:n,errorMessage:o,disabled:f.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,children:t(F$,Object.assign({ref:r,id:`${i}-base`,"data-testid":s||i,error:!!o},f))})})),A$=_.div`
    font-weight: ${e=>e.$bold?Ti.Spec["weight-semibold"]:Ti.Spec["weight-regular"]};
    color: ${e=>e.$selected?Ei["text-selected"]:Ei.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ri(e.$maxLines||2)}
    overflow-wrap: break-word;
`,j$=_.div`
    color: ${Ei["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ri(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?O`
                    ${Ti["body-md-semibold"]}
                `:O`
                    ${Ti["body-baseline-regular"]}
                `}
`,z$=_.span`
    font-weight: ${Ti.Spec["weight-semibold"]};
`,R$=_.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Ti["body-md-regular"]:Ti["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return O`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return O`
                    ${A$} {
                        display: inline;
                    }

                    ${j$} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,B$=_.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,P$=_.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,L$=({bold:n,displayType:o="inline",label:i,searchTerm:s,maxLines:l=2,selected:c,sublabel:d,truncationType:f="middle",variant:h="default"})=>{const p=E(),g="small"===h?Ti.Spec["body-size-md"]({theme:p}):Ti.Spec["body-size-baseline"]({theme:p}),m=Ti.Spec["font-family"]({theme:p}),{ref:b,width:v}=gc(),y=u((e=>{if("inline"!==o||!v)return!1;return Wc.getTextWidth(e,`${g} '${m}'`)>v*l-50}),[v,o,g,m,l]),x=a((()=>y(i)),[y,i]),w=a((()=>d&&y(d)),[y,d]),$=n=>{if(!s)return n;const o=s.toLowerCase().trim(),a=n.toLowerCase().indexOf(o),l=a+s.length;return-1===a?n:e(r,{children:[i.slice(0,a),t(z$,{$variant:h,children:i.slice(a,l)}),i.slice(l)]})},C=n=>e(r,{children:[t(B$,{$maxLines:l,"aria-hidden":!0,children:$(n)}),t(P$,{$maxLines:l,"aria-hidden":!0,children:$(n)})]});return e(R$,{ref:b,$labelDisplayType:x||w?"next-line":o,$variant:h,children:[t(A$,{"aria-label":i,$bold:n,$maxLines:l,$selected:c,$truncateType:f,children:"middle"===f&&x?C(i):$(i)}),d&&t(j$,{"aria-label":d,$maxLines:l,$truncateType:f,$labelDisplayType:o,children:"middle"===f&&w?C(d):d})]})};function N$(e){return()=>e}function H$(e){e()}function W$(e,t){return r=>e(t(r))}function V$(e,t){return()=>e(t)}function Y$(e,t){return r=>e(t,r)}function U$(e){return void 0!==e}function K$(){}function q$(e,t){return t(e),e}function G$(e,t){return t(e)}function Q$(...e){return e}function Z$(e,t){return e(1,t)}function X$(e,t){e(0,t)}function J$(e){e(2)}function eC(e){return e(4)}function tC(e,t){return Z$(e,Y$(t,0))}function rC(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function nC(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function oC(e,t){return e===t}function iC(e=oC){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function aC(e){return t=>r=>{e(r)&&t(r)}}function sC(e){return t=>W$(t,e)}function lC(e){return t=>()=>{t(e)}}function cC(e,...t){const r=function(...e){return t=>e.reduceRight(G$,t)}(...t);return(t,n)=>{switch(t){case 2:return void J$(e);case 1:return Z$(e,r(n))}}}function uC(e,t){return r=>n=>{r(t=e(t,n))}}function dC(e){return t=>r=>{e>0?e--:t(r)}}function fC(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function hC(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);Z$(e,(e=>{const s=r;r|=a,t[i]=e,s!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const a=()=>{e([i].concat(t))};r===o?a():n=a}}function pC(e){let t=e;const r=mC();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function gC(e,t){return q$(pC(t),(t=>tC(e,t)))}function mC(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function bC(e){return q$(mC(),(t=>tC(e,t)))}function vC(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:yC(),singleton:r}}const yC=()=>Symbol();function xC(...e){const t=mC(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);Z$(e,(e=>{r[i]=e,n|=a,n===o&&X$(t,r)}))})),function(e,i){switch(e){case 2:return void J$(t);case 1:return n===o&&i(r),Z$(t,i)}}}function wC(e,t=oC){return cC(e,iC(t))}function $C(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(H$)}}(...e.map((e=>Z$(e,r))))}}}var CC=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(CC||{});const SC={0:"debug",3:"error",1:"log",2:"warn"},DC=vC((()=>{const e=pC(3);return{log:pC(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:eC(e))&&console[SC[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function kC(e,t,r){return _C(e,t,r).callbackRef}function _C(e,t,r){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function OC(e,t,r,n,i,a,s,l,c){const u=o.useCallback((r=>{const o=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),c=t(o,r);if(0===c&&n("Zero-sized element, this should not happen",{child:o},CC.ERROR),c===l)continue;const u=i[i.length-1];0===i.length||u.size!==c||u.endIndex!==s-1?i.push({endIndex:s,size:c,startIndex:s}):i[i.length-1].endIndex++}return i}(r.children,t,l?"offsetWidth":"offsetHeight",i);let c=r.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const u="window"===c.lastElementChild.dataset.viewportType,d=s?l?s.scrollLeft:s.scrollTop:u?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?c.scrollLeft:c.scrollTop,f=s?l?s.scrollWidth:s.scrollHeight:u?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?c.scrollWidth:c.scrollHeight,h=s?l?s.offsetWidth:s.offsetHeight:u?l?window.innerWidth:window.innerHeight:l?c.offsetWidth:c.offsetHeight;n({scrollHeight:f,scrollTop:Math.max(d,0),viewportHeight:h}),null==a||a(l?EC("column-gap",getComputedStyle(r).columnGap,i):EC("row-gap",getComputedStyle(r).rowGap,i)),null!==o&&e(o)}),[e,t,i,a,s,n]);return _C(u,r,c)}function EC(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,CC.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function TC(e,t,r){const n=o.useRef(null),i=o.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let a,s;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;s=e.height-Math.max(0,r),a=r+t.scrollTop}else s=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:a,ref:s}=_C(i,!0,r),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),a}const IC=vC((()=>{const e=mC(),t=mC(),r=pC(0),n=mC(),o=pC(0),i=mC(),a=mC(),s=pC(0),l=pC(0),c=pC(0),u=pC(0),d=mC(),f=mC(),h=pC(!1),p=pC(!1),g=pC(!1);return tC(cC(e,sC((({scrollTop:e})=>e))),t),tC(cC(e,sC((({scrollHeight:e})=>e))),a),tC(t,o),{deviation:r,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:u,headerHeight:s,horizontalDirection:p,scrollBy:f,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:d,scrollTop:t,skipAnimationFrameInResizeObserver:g,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),FC={lvl:0};function MC(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let a=1;a<r;a++){const{index:r,value:s}=t(e[a]);i.push({end:r-1,start:n,value:o}),n=r,o=s}return i.push({end:1/0,start:n,value:o}),i}function AC(e){return e===FC}function jC(e,t){if(!AC(e))return t===e.k?e.v:t<e.k?jC(e.l,t):jC(e.r,t)}function zC(e,t,r="k"){if(AC(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=zC(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return zC(e.l,t,r)}function RC(e,t,r){return AC(e)?qC(t,r,1):t===e.k?VC(e,{k:t,v:r}):t<e.k?GC(VC(e,{l:RC(e.l,t,r)})):GC(VC(e,{r:RC(e.r,t,r)}))}function BC(){return FC}function PC(e,t,r){if(AC(e))return[];return function(e){return MC(e,(({k:e,v:t})=>({index:e,value:t})))}(HC(e,zC(e,t)[0],r))}function LC(e,t){if(AC(e))return FC;const{k:r,l:n,r:o}=e;if(t===r){if(AC(n))return o;if(AC(o))return n;{const[t,r]=KC(n);return WC(VC(e,{k:t,l:YC(n),v:r}))}}return WC(VC(e,t<r?{l:LC(n,t)}:{r:LC(o,t)}))}function NC(e){return AC(e)?[]:[...NC(e.l),{k:e.k,v:e.v},...NC(e.r)]}function HC(e,t,r){if(AC(e))return[];const{k:n,l:o,r:i,v:a}=e;let s=[];return n>t&&(s=s.concat(HC(o,t,r))),n>=t&&n<=r&&s.push({k:n,v:a}),n<=r&&(s=s.concat(HC(i,t,r))),s}function WC(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(UC(t))return QC(VC(e,{lvl:r-1}));if(!AC(t)&&!AC(t.r))return VC(t.r,{l:VC(t,{r:t.r.l}),lvl:r,r:VC(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(UC(e))return ZC(VC(e,{lvl:r-1}));if(AC(n)||AC(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=UC(t)?n.lvl-1:n.lvl;return VC(t,{l:VC(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:ZC(VC(n,{l:t.r,lvl:o}))})}}function VC(e,t){return qC(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function YC(e){return AC(e.r)?e.l:WC(VC(e,{r:YC(e.r)}))}function UC(e){return AC(e)||e.lvl>e.r.lvl}function KC(e){return AC(e.r)?[e.k,e.v]:KC(e.r)}function qC(e,t,r,n=FC,o=FC){return{k:e,l:n,lvl:r,r:o,v:t}}function GC(e){return ZC(QC(e))}function QC(e){const{l:t}=e;return AC(t)||t.lvl!==e.lvl?e:VC(t,{r:VC(e,{l:t.r})})}function ZC(e){const{lvl:t,r:r}=e;return AC(r)||AC(r.r)||r.lvl!==t||r.r.lvl!==t?e:VC(r,{l:VC(e,{r:r.l}),lvl:t+1})}function XC(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function JC(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const eS=vC((()=>({recalcInProgress:pC(!1)})),[],{singleton:!0});function tS(e,t,r){return e[rS(e,t,r)]}function rS(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),a=r(e[i],t);if(0===a)return i;if(-1===a){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function nS(e,t){return Math.round(e.getBoundingClientRect()[t])}function oS(e){return!AC(e.groupOffsetTree)}function iS({index:e},t){return t===e?0:t<e?-1:1}function aS({offset:e},t){return t===e?0:t<e?-1:1}function sS(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=tS(t,e,iS),a=e-n,s=i*a+(a-1)*r+o;return s>0?s+r:s}function lS(e,t){if(!oS(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function cS(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=lS("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function uS(e,t,r,n=0){return n>0&&(t=Math.max(t,tS(e,n,iS).offset)),MC(function(e,t,r,n){const o=rS(e,t,n),i=rS(e,r,n,o);return e.slice(o,i+1)}(e,t,r,aS),pS)}function dS(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,CC.DEBUG);const i=e.sizeTree;let a=i,s=0;if(r.length>0&&AC(i)&&2===t.length){const e=t[0].size,n=t[1].size;a=r.reduce(((t,r)=>RC(RC(t,r,e),r+1,n)),a)}else[a,s]=function(e,t){let r=AC(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),AC(e)){e=RC(e,0,o);continue}const a=PC(e,i-1,t+1);if(a.some(gS(n)))continue;let s=!1,l=!1;for(const{end:r,start:n,value:i}of a)s?(t>=n||o===i)&&(e=LC(e,n)):(l=i!==o,s=!0),r>t&&t>=n&&i!==o&&(e=RC(e,t+1,i));l&&(e=RC(e,i,o))}return[e,r]}(a,t);if(a===i)return e;const{lastIndex:l,lastOffset:c,lastSize:u,offsetTree:d}=hS(e.offsetTree,s,a,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>RC(e,t,sS(t,d,o))),BC()),lastIndex:l,lastOffset:c,lastSize:u,offsetTree:d,sizeTree:a}}function fS(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function hS(e,t,r,n){let o=e,i=0,a=0,s=0,l=0;if(0!==t){l=rS(o,t-1,iS),s=o[l].offset;const e=zC(r,t-1);i=e[0],a=e[1],o.length&&o[l].size===zC(r,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of PC(r,t,1/0)){const t=e-i,r=t*a+s+t*n;o.push({index:e,offset:r,size:l}),i=e,s=r,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function pS(e){return{index:e.index,value:e}}function gS(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const mS={offsetHeight:"height",offsetWidth:"width"},bS=vC((([{log:e},{recalcInProgress:t}])=>{const r=mC(),n=mC(),o=gC(n,0),i=mC(),a=mC(),s=pC(0),l=pC([]),c=pC(void 0),u=pC(void 0),d=pC(((e,t)=>nS(e,mS[t]))),f=pC(void 0),h=pC(0),p={groupIndices:[],groupOffsetTree:BC(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:BC()},g=gC(cC(r,hC(l,e,h),uC(dS,p),iC()),p),m=gC(cC(l,iC(),uC(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),sC((({prev:e})=>e))),[]);tC(cC(l,aC((e=>e.length>0)),hC(g,h),sC((([e,t,r])=>{const n=e.reduce(((e,n,o)=>RC(e,n,sS(n,t.offsetTree,r)||o)),BC());return{...t,groupIndices:e,groupOffsetTree:n}}))),g),tC(cC(n,hC(g),aC((([e,{lastIndex:t}])=>e<t)),sC((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),tC(c,u);const b=gC(cC(c,sC((e=>void 0===e))),!0);tC(cC(u,aC((e=>void 0!==e&&AC(eC(g).sizeTree))),sC((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=bC(cC(r,hC(g),uC((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:p}),sC((e=>e.changed))));Z$(cC(s,uC(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),sC((e=>e.diff))),(e=>{const{groupIndices:r}=eC(g);if(e>0)X$(t,!0),X$(i,e+fS(e,r));else if(e<0){const t=eC(m);t.length>0&&(e-=fS(-e,t)),X$(a,e)}})),Z$(cC(s,hC(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},CC.ERROR)}));const y=bC(i);tC(cC(i,hC(g),sC((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=jC(t.sizeTree,0);let i=0,a=0;for(;i<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=NC(t.sizeTree);return i!==e&&s.shift(),s.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return NC(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=bC(cC(a,hC(g,h),sC((([e,{offsetTree:t},r])=>sS(-e,t,r)))));return tC(cC(a,hC(g,h),sC((([e,t,r])=>{if(t.groupIndices.length>0){if(AC(t.sizeTree))return t;let n=BC();const o=eC(m);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(n=NC(t.sizeTree).reduce(((t,{k:r,v:n})=>RC(t,Math.max(0,r+e),n)),n),i!==-e){n=RC(n,0,jC(t.sizeTree,s));n=RC(n,1,zC(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...hS(t.offsetTree,0,n,r)}}{const n=NC(t.sizeTree).reduce(((t,{k:r,v:n})=>RC(t,Math.max(0,r+e),n)),BC());return{...t,sizeTree:n,...hS(t.offsetTree,0,n,r)}}}))),g),{beforeUnshiftWith:y,data:f,defaultItemSize:u,firstItemIndex:s,fixedItemSize:c,gap:h,groupIndices:l,itemSize:d,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:r,sizes:g,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),Q$(DC,eS),{singleton:!0});function vS(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const yS=vC((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=mC(),a=mC(),s=bC(cC(i,sC(vS)));return tC(cC(s,sC((e=>e.totalCount))),r),tC(cC(s,sC((e=>e.groupIndices))),e),tC(cC(xC(o,t,n),aC((([e,t])=>oS(t))),sC((([e,t,r])=>zC(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),iC(),sC((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),Q$(bS,IC)),xS=vC((([{log:e}])=>{const t=pC(!1),r=bC(cC(t,aC((e=>e)),iC()));return Z$(t,(t=>{t&&eC(e)("props updated",{},CC.DEBUG)})),{didMount:r,propsReady:t}}),Q$(DC),{singleton:!0}),wS=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function $S(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!wS)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const CS=vC((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:u,viewportHeight:d},{log:f}])=>{const h=mC(),p=mC(),g=pC(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),X$(l,!1)}return tC(cC(h,hC(r,d,n,g,s,a,f),hC(e,i,o),sC((([[e,r,n,o,i,a,s,c],d,f,g])=>{const x=$S(e),{align:w,behavior:$,offset:C}=x,S=o-1,D=cS(x,r,S);let k=sS(D,r.offsetTree,d)+a;"end"===w?(k+=f+zC(r.sizeTree,D)[1]-n+g,D===S&&(k+=s)):"center"===w?k+=(f+zC(r.sizeTree,D)[1]-n+g)/2:k-=i,C&&(k+=C);const _=t=>{y(),t?(c("retrying to scroll to",{location:e},CC.DEBUG),X$(h,e)):(X$(p,!0),c("list did not change, scroll successful",{},CC.DEBUG))};if(y(),"smooth"===$){let e=!1;v=Z$(t,(t=>{e=e||t})),m=rC(u,(()=>{_(e)}))}else m=rC(cC(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),_);return b=setTimeout((()=>{y()}),1200),X$(l,!0),c("scrolling from index to",{behavior:$,index:D,top:k},CC.DEBUG),{behavior:$,top:k}}))),c),{scrollTargetReached:p,scrollToIndex:h,topListHeight:g}}),Q$(bS,IC,DC),{singleton:!0});function SS(e,t){0==e?t():requestAnimationFrame((()=>{SS(e-1,t)}))}function DS(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const kS=vC((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=pC(!0),l=pC(0),c=pC(!0);return tC(cC(a,hC(l),aC((([e,t])=>!!t)),lC(!1)),s),tC(cC(a,hC(l),aC((([e,t])=>!!t)),lC(!1)),c),Z$(cC(xC(t,a),hC(s,r,e,c),aC((([[,e],t,{sizeTree:r},n,o])=>e&&(!AC(r)||U$(n))&&!t&&!o)),hC(l)),(([,e])=>{rC(o,(()=>{X$(c,!0)})),SS(4,(()=>{rC(n,(()=>{X$(s,!0)})),X$(i,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),Q$(bS,IC,CS,xS),{singleton:!0});function _S(e,t){return Math.abs(e-t)<1.01}const OS="up",ES="down",TS={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},IS=vC((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const a=pC(!1),s=pC(!0),l=mC(),c=mC(),u=pC(4),d=pC(0),f=gC(cC($C(cC(wC(o),dC(1),lC(!0)),cC(wC(o),dC(1),lC(!1),nC(100))),iC()),!1),h=gC(cC($C(cC(r,lC(!0)),cC(r,lC(!1),nC(200))),iC()),!1);tC(cC(xC(wC(o),wC(d)),sC((([e,t])=>e<=t)),iC()),s),tC(cC(s,fC(50)),c);const p=bC(cC(xC(n,wC(i),wC(t),wC(e),wC(u)),uC(((e,[{scrollHeight:t,scrollTop:r},n,o,i,a])=>{const s={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-a){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),TS),iC(((e,t)=>e&&e.atBottom===t.atBottom)))),g=gC(cC(n,uC(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(_S(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),aC((e=>e.changed)),sC((e=>e.jump))),0);tC(cC(p,sC((e=>e.atBottom))),a),tC(cC(a,fC(50)),l);const m=pC(ES);tC(cC(n,sC((({scrollTop:e})=>e)),iC(),uC(((e,t)=>eC(h)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?OS:ES,prevScrollTop:t}),{direction:ES,prevScrollTop:0}),sC((e=>e.direction))),m),tC(cC(n,fC(50),lC("none")),m);const b=pC(0);return tC(cC(f,aC((e=>!e)),lC(0)),b),tC(cC(o,fC(100),hC(f),aC((([e,t])=>!!t)),uC((([e,t],[r])=>[t,r]),[0,0]),sC((([e,t])=>t-e))),b),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:u,atTopStateChange:c,atTopThreshold:d,isAtBottom:a,isAtTop:s,isScrolling:f,lastJumpDueToItemResize:g,scrollDirection:m,scrollVelocity:b}}),Q$(IC)),FS="top",MS="bottom",AS="none";function jS(e,t,r){return"number"==typeof e?r===OS&&t===FS||r===ES&&t===MS?e:0:r===OS?t===FS?e.main:e.reverse:t===MS?e.main:e.reverse}function zS(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const RS=vC((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=mC(),a=pC(0),s=pC(0),l=pC(0),c=gC(cC(xC(wC(n),wC(o),wC(r),wC(i,JC),wC(l),wC(a),wC(t),wC(e),wC(s)),sC((([e,t,r,[n,o],i,a,s,l,c])=>{const u=e-l,d=a+s,f=Math.max(r-u,0);let h=AS;const p=zS(c,FS),g=zS(c,MS);return n-=l,o+=r+s,(n+=r+s)>e+d-p&&(h=OS),(o-=l)<e-f+t+g&&(h=ES),h!==AS?[Math.max(u-r-jS(i,FS,h)-p,0),u-f-s+t+jS(i,MS,h)+g]:null})),aC((e=>null!=e)),iC(JC)),[0,0]);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:c}}),Q$(IC),{singleton:!0});const BS={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function PS(e,t,r,n,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let c=0,u=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];u=t.offset+t.size}const d=r-a,f=c,h=s+d*l+(d-1)*n-u;return{bottom:u,firstItemIndex:i,items:NS(e,o,i),offsetBottom:h,offsetTop:c,top:f,topItems:NS(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function LS(e,t,r,n,o,i){let a=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=DS(t,s);return PS(Array.from({length:s}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],s,o,r,n)}function NS(e,t,r){if(0===e.length)return[];if(!oS(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],a=PC(t.groupOffsetTree,n,o);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const HS=vC((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:u},{topListHeight:d},f,{didMount:h},{recalcInProgress:p}])=>{const g=pC([]),m=pC(0),b=mC();tC(i.topItemsIndexes,g);const v=gC(cC(xC(h,p,wC(l,JC),wC(o),wC(n),wC(c),u,wC(g),wC(t),wC(r),e),aC((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),sC((([,,[e,t],r,n,o,i,a,s,l,c])=>{const u=n,{offsetTree:d,sizeTree:f}=u,h=eC(m);if(0===r)return{...BS,totalCount:r};if(0===e&&0===t)return 0===h?{...BS,totalCount:r}:LS(h,o,n,s,l,c||[]);if(AC(f))return h>0?null:PS(function(e,t,r){if(oS(t)){const n=lS(e,t);return[{index:zC(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(DS(o,r),u,c),[],r,l,u,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let r=0;for(const n of PC(f,e,t)){const o=n.value,i=Math.max(n.start,e),a=Math.min(n.end,t);for(let e=i;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:r,size:o}),r+=o}}if(!i)return PS([],p,r,l,u,s);const g=a.length>0?a[a.length-1]+1:0,b=uS(d,e,t,g);if(0===b.length)return null;const v=r-1;return PS(q$([],(r=>{for(const n of b){const o=n.value;let i=o.offset,a=n.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const t=a-n.start;i+=t*s+t*l}a<g&&(i+=(g-a)*s,a=g);const u=Math.min(n.end,v);for(let e=a;e<=u&&!(i>=t);e++)r.push({data:null==c?void 0:c[e],index:e,offset:i,size:s}),i+=s+l}})),p,r,l,u,s)})),aC((e=>null!==e)),iC()),BS);tC(cC(e,aC(U$),sC((e=>null==e?void 0:e.length))),o),tC(cC(v,sC((e=>e.topListHeight))),d),tC(d,s),tC(cC(v,sC((e=>[e.top,e.bottom]))),a),tC(cC(v,sC((e=>e.items))),b);const y=bC(cC(v,aC((({items:e})=>e.length>0)),hC(o,e),aC((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),sC((([,e,t])=>[e-1,t])),iC(JC),sC((([e])=>e)))),x=bC(cC(v,fC(200),aC((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),sC((({items:e})=>e[0].index)),iC())),w=bC(cC(v,aC((({items:e})=>e.length>0)),sC((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),iC(XC)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:g,...f}}),Q$(bS,yS,RS,kS,CS,IS,xS,eS),{singleton:!0}),WS=vC((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=mC(),a=gC(cC(xC(r,e,n,t,o),sC((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return tC(wC(a),i),{totalListHeight:a,totalListHeightChanged:i}}),Q$(IC,HS),{singleton:!0}),VS=vC((([{viewportHeight:e},{totalListHeight:t}])=>{const r=pC(!1),n=gC(cC(xC(r,e,t),aC((([e])=>e)),sC((([,e,t])=>Math.max(0,e-t))),fC(0),iC()),0);return{alignToBottom:r,paddingTopAddition:n}}),Q$(IC,WS),{singleton:!0});function YS(e){return!!e&&("smooth"===e?"smooth":"auto")}const US=vC((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:c}])=>{const u=pC(!1),d=mC();let f=null;function h(e){X$(o,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=rC(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!f&&(eC(l)("scrolling to bottom due to increased size",{},CC.DEBUG),h("auto"))}));setTimeout(t,100)}return Z$(cC(xC(cC(wC(t),dC(1)),a),hC(wC(u),n,i,c),sC((([[e,t],r,n,o,i])=>{let a=t&&o,s="auto";return a&&(s=((e,t)=>"function"==typeof e?YS(e(t)):t&&YS(e))(r,n||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),aC((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{f&&(f(),f=null),f=rC(e,(()=>{eC(l)("following output to ",{totalCount:r},CC.DEBUG),h(t),f=null}))})),Z$(cC(xC(wC(u),t,s),aC((([e,,t])=>e&&t)),uC((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),aC((({refreshed:e})=>e)),hC(u,t)),(([,e])=>{eC(i)&&p(!1!==e)})),Z$(d,(()=>{p(!1!==eC(u))})),Z$(xC(wC(u),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&h("auto")})),{autoscrollToBottom:d,followOutput:u}}),Q$(bS,IS,CS,kS,xS,DC,IC)),KS=vC((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(tC(cC(s,hC(i),aC((([,e])=>0!==e)),hC(o,n,t,r,e),sC((([[,e],t,r,n,o,i=[]])=>LS(e,t,r,n,o,i)))),a),{})),Q$(bS,kS,HS,xS),{singleton:!0}),qS=vC((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=pC(0);return Z$(cC(e,hC(n),aC((([,e])=>0!==e)),sC((([,e])=>({top:e})))),(e=>{rC(cC(r,dC(1),aC((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{X$(t,e)}))}))})),{initialScrollTop:n}}),Q$(xS,IC,HS),{singleton:!0}),GS=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:a})=>t<a?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,QS=vC((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const u=mC();return tC(cC(u,hC(t,l,r,i,o,n,s),hC(e),sC((([[e,t,r,n,o,i,s,l],c])=>{const{align:u,behavior:d,calculateViewLocation:f=GS,done:h,...p}=e,g=cS(e,t,n-1),m=sS(g,t.offsetTree,c)+o+i,b=f({itemBottom:m+zC(t.sizeTree,g)[1],itemTop:m,locationParams:{align:u,behavior:d,...p},viewportBottom:l+r-s,viewportTop:l+i});return b?h&&rC(cC(a,aC((e=>!e)),dC(eC(a)?1:2)),h):h&&h(),b})),aC((e=>null!==e))),c),{scrollIntoView:u}}),Q$(bS,IC,CS,HS,DC),{singleton:!0}),ZS=vC((([{scrollVelocity:e}])=>{const t=pC(!1),r=mC(),n=pC(!1);return tC(cC(e,hC(n,t,r),aC((([e,t])=>!!t)),sC((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),iC()),t),Z$(cC(xC(t,e,r),hC(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),Q$(IS),{singleton:!0}),XS=vC((([{scrollContainerState:e,scrollTo:t}])=>{const r=mC(),n=mC(),o=mC(),i=pC(!1),a=pC(void 0);return tC(cC(xC(r,n),sC((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),tC(cC(t,hC(n),sC((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),Q$(IC)),JS=vC((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=mC(),u=pC(void 0),d=pC(null),f=pC(null);return tC(s,d),tC(l,f),Z$(cC(c,hC(t,n,a,d,f,r)),(([e,t,r,n,o,i,a])=>{const s=function(e){return NC(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:r-=a})})),tC(cC(u,aC(U$),sC(eD)),o),tC(cC(i,hC(u),aC((([,e])=>void 0!==e)),iC(),sC((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:u}}),Q$(bS,IC,kS,xS,XS));function eD(e){return{align:"start",index:0,offset:e.scrollTop}}const tD=vC((([{topItemsIndexes:e}])=>{const t=pC(0);return tC(cC(t,aC((e=>e>=0)),sC((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),Q$(HS));function rD(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const nD=rD((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),oD=vC((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:u,shiftWithOffset:d,sizes:f},{log:h},{recalcInProgress:p}])=>{const g=bC(cC(l,hC(a),uC((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:a},s])=>{const l=n+i;let c=0;return t===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(c=l-r,0!==c&&(c+=s))),[c,o,a,l]}),[0,[],0,0]),aC((([e])=>0!==e)),hC(n,s,r,o,h,p),aC((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===OS)),sC((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},CC.DEBUG),e)))));function m(r){r>0?(X$(t,{behavior:"auto",top:-r}),X$(e,0)):(X$(e,0),X$(t,{behavior:"auto",top:-r}))}return Z$(cC(g,hC(e,i)),(([t,r,n])=>{n&&nD()?X$(e,r-t):m(-t)})),Z$(cC(xC(gC(i,!1),e,p),aC((([e,t,r])=>!e&&!r&&0!==t)),sC((([e,t])=>t)),fC(1)),m),tC(cC(d,sC((e=>({top:-e})))),t),Z$(cC(c,hC(f,u),sC((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=jC(n,0);let a=0,s=0;for(;a<e;){a++,r+=o;let n=t.length===s+1?1/0:t[s+1]-t[s]-1;a+n>e&&(r-=o,n=e-a+1),a+=n,r+=i(n),s++}return r}}))),(r=>{X$(e,r),requestAnimationFrame((()=>{X$(t,{top:r}),requestAnimationFrame((()=>{X$(e,0),X$(p,!1)}))}))})),{deviation:e}}),Q$(IC,IS,HS,bS,DC,eS)),iD=vC((([e,t,r,n,o,i,a,s,l,c])=>({...e,...t,...r,...n,...o,...i,...a,...s,...l,...c})),Q$(RS,KS,xS,ZS,WS,qS,VS,XS,QS,DC)),aD=vC((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:u,trackItemSizes:d},{initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p},g,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:S},D])=>(tC(x.rangeChanged,D.scrollSeekRangeChanged),tC(cC(D.windowViewportRect,sC((e=>e.visibleHeight))),g.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:S,initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:u,...b,groupIndices:i,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:d,...x,...D,...g,sizes:l,...m})),Q$(bS,kS,IC,JS,US,HS,CS,oD,tD,yS,iD));function sD(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const lD=typeof document<"u"?o.useLayoutEffect:o.useEffect;function cD(e,r,n){const i=Object.keys(r.required||{}),a=Object.keys(r.optional||{}),s=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),c=o.createContext({});function u(e,t){e.propsReady&&X$(e.propsReady,!1);for(const n of i){X$(e[r.required[n]],t[n])}for(const n of a)if(n in t){X$(e[r.optional[n]],t[n])}e.propsReady&&X$(e.propsReady,!0)}function d(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?r===i?void 0:(n(),r=i,t=Z$(e,i),t):(n(),K$);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const f=o.forwardRef(((f,h)=>{const{children:p,...g}=f,[m]=o.useState((()=>q$(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const a=e(n.map((e=>r(e))));return i&&t.set(o,a),a};return r(e)}(e),(e=>{u(e,g)})))),[b]=o.useState(V$(d,m));lD((()=>{for(const e of l)e in g&&Z$(b[e],g[e]);return()=>{Object.values(b).map(J$)}}),[g,b,m]),lD((()=>{u(m,g)})),o.useImperativeHandle(h,N$(function(e){return s.reduce(((t,n)=>(t[n]=t=>{X$(e[r.methods[n]],t)},t)),{})}(m)));const v=n;return t(c.Provider,{value:m,children:n?t(v,{...sD([...i,...a,...l],g),children:p}):p})})),h=o.version.startsWith("18")?e=>{const t=o.useContext(c)[e],r=o.useCallback((e=>Z$(t,e)),[t]);return o.useSyncExternalStore(r,(()=>eC(t)),(()=>eC(t)))}:e=>{const t=o.useContext(c)[e],[r,n]=o.useState(V$(eC,t));return lD((()=>Z$(t,(e=>{e!==r&&n(N$(e))}))),[t,r]),r};return{Component:f,useEmitter:(e,t)=>{const r=o.useContext(c)[e];lD((()=>Z$(r,t)),[t,r])},useEmitterValue:h,usePublisher:e=>o.useCallback(Y$(X$,o.useContext(c)[e]),[e])}}const uD=o.createContext(void 0),dD=o.createContext(void 0),fD=typeof document<"u"?o.useLayoutEffect:o.useEffect;function hD(e,t,r,n=K$,i,a){const s=o.useRef(null),l=o.useRef(null),c=o.useRef(null),u=o.useCallback((r=>{const n=r.target,o=n===window||n===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,u=a?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,d=()=>{e({scrollHeight:s,scrollTop:Math.max(i,0),viewportHeight:u})};r.suppressFlushSync?d():F.flushSync(d),null!==l.current&&(i===l.current||i<=0||i===s-u)&&(l.current=null,t(!0),c.current&&(clearTimeout(c.current),c.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||s.current;return n(i||s.current),u({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",u,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",u)}}),[s,u,r,n,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(r){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let i,u,d;n===window?(u=Math.max(nS(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,d=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(u=n[a?"scrollWidth":"scrollHeight"],i=nS(n,a?"width":"height"),d=n[a?"scrollLeft":"scrollTop"]);const f=u-i;if(r.top=Math.ceil(Math.max(Math.min(f,r.top),0)),_S(i,u)||r.top===d)return e({scrollHeight:u,scrollTop:d,viewportHeight:i}),void(o&&t(!0));o?(l.current=r.top,c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{c.current=null,l.current=null,t(!0)}),1e3)):l.current=null,a&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const pD="-webkit-sticky",gD="sticky",mD=rD((()=>{if(typeof document>"u")return gD;const e=document.createElement("div");return e.style.position=pD,e.style.position===pD?pD:gD}));function bD(e){return e}const vD=vC((()=>{const e=pC((e=>`Item ${e}`)),t=pC(null),r=pC((e=>`Group ${e}`)),n=pC({}),o=pC(bD),i=pC("div"),a=pC(K$),s=(e,t=null)=>gC(cC(n,sC((t=>t[e])),iC()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:r,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),yD=vC((([e,t])=>({...e,...t})),Q$(aD,vD)),xD=({height:e})=>t("div",{style:{height:e}}),wD={overflowAnchor:"none",position:mD(),zIndex:1},$D={overflowAnchor:"none"},CD={...$D,display:"inline-block",height:"100%"},SD=o.memo((function({showTopList:e=!1}){const r=ND("listState"),n=HD("sizeRanges"),i=ND("useWindowScroll"),a=ND("customScrollParent"),s=HD("windowScrollContainerState"),l=HD("scrollContainerState"),c=a||i?s:l,u=ND("itemContent"),d=ND("context"),f=ND("groupContent"),h=ND("trackItemSizes"),p=ND("itemSize"),g=ND("log"),m=HD("gap"),b=ND("horizontalDirection"),{callbackRef:v}=OC(n,p,h,e?K$:c,g,m,a,b,ND("skipAnimationFrameInResizeObserver")),[y,x]=o.useState(0);LD("deviation",(e=>{y!==e&&x(e)}));const w=ND("EmptyPlaceholder"),$=ND("ScrollSeekPlaceholder")||xD,C=ND("ListComponent"),S=ND("ItemComponent"),k=ND("GroupComponent"),_=ND("computeItemKey"),O=ND("isSeeking"),E=ND("groupIndices").length>0,T=ND("alignToBottom"),I=ND("initialItemFinalLocationReached"),F=e?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:T?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:T?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...I?{}:{visibility:"hidden"}};return!e&&0===r.totalCount&&w?t(w,{...ED(w,d)}):t(C,{...ED(C,d),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:F,children:(e?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=_(t+r.firstItemIndex,e.data,d);return O?D($,{...ED($,d),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?D(k,{...ED(k,d),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:wD},f(e.index,d)):D(S,{...ED(S,d),...TD(S,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:b?CD:$D},E?u(e.index,e.groupIndex,e.data,d):u(e.index,e.data,d))}))})})),DD={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},kD={outline:"none",overflowX:"auto",position:"relative"},_D=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),OD={position:mD(),top:0,width:"100%",zIndex:1};function ED(e,t){if("string"!=typeof e)return{context:t}}function TD(e,t){return{item:"string"==typeof e?void 0:t}}const ID=o.memo((function(){const e=ND("HeaderComponent"),r=HD("headerHeight"),n=ND("HeaderFooterTag"),i=kC(o.useMemo((()=>e=>{r(nS(e,"height"))}),[r]),!0,ND("skipAnimationFrameInResizeObserver")),a=ND("context");return e?t(n,{ref:i,children:t(e,{...ED(e,a)})}):null})),FD=o.memo((function(){const e=ND("FooterComponent"),r=HD("footerHeight"),n=ND("HeaderFooterTag"),i=kC(o.useMemo((()=>e=>{r(nS(e,"height"))}),[r]),!0,ND("skipAnimationFrameInResizeObserver")),a=ND("context");return e?t(n,{ref:i,children:t(e,{...ED(e,a)})}):null}));function MD({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("scrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),u=r("scrollerRef"),d=r("context"),f=r("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:p,scrollToCallback:g}=hD(s,c,l,u,void 0,f);return e("scrollTo",g),e("scrollBy",h),t(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...f?kD:DD,...i},tabIndex:0,...a,...ED(l,d),children:o})}))}function AD({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("windowScrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),u=r("totalListHeight"),d=r("deviation"),f=r("customScrollParent"),h=r("context"),{scrollByCallback:p,scrollerRef:g,scrollToCallback:m}=hD(s,c,l,K$,f);return fD((()=>(g.current=f||window,()=>{g.current=null})),[g,f]),e("windowScrollTo",m),e("scrollBy",p),t(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==u?{height:u+d}:{}},...a,...ED(l,h),children:o})}))}const jD=({children:e})=>{const r=o.useContext(uD),n=HD("viewportHeight"),i=HD("fixedItemHeight"),a=ND("alignToBottom"),s=ND("horizontalDirection"),l=kC(o.useMemo((()=>W$(n,(e=>nS(e,s?"width":"height")))),[n,s]),!0,ND("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),t("div",{"data-viewport-type":"element",ref:l,style:_D(a),children:e})},zD=({children:e})=>{const r=o.useContext(uD),n=HD("windowViewportRect"),i=HD("fixedItemHeight"),a=ND("customScrollParent"),s=TC(n,a,ND("skipAnimationFrameInResizeObserver")),l=ND("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),t("div",{"data-viewport-type":"window",ref:s,style:_D(l),children:e})},RD=({children:e})=>{const r=ND("TopItemListComponent")||"div",n=ND("headerHeight"),o={...OD,marginTop:`${n}px`},i=ND("context");return t(r,{style:o,...ED(r,i),children:e})},BD=o.memo((function(r){const n=ND("useWindowScroll"),o=ND("topItemsIndexes").length>0,i=ND("customScrollParent"),a=ND("context"),s=i||n?VD:WD,l=i||n?zD:jD;return e(s,{...r,...ED(s,a),children:[o&&t(RD,{children:t(SD,{showTopList:!0})}),e(l,{children:[t(ID,{}),t(SD,{}),t(FD,{})]})]})})),{Component:PD,useEmitter:LD,useEmitterValue:ND,usePublisher:HD}=cD(yD,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},BD),WD=MD({useEmitter:LD,useEmitterValue:ND,usePublisher:HD}),VD=AD({useEmitter:LD,useEmitterValue:ND,usePublisher:HD}),YD=PD,UD={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},KD={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:qD,floor:GD,max:QD,min:ZD,round:XD}=Math;function JD(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function ek(e,t){return e&&e.width===t.width&&e.height===t.height}function tk(e,t){return e&&e.column===t.column&&e.row===t.row}const rk=vC((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:u,viewportHeight:d},f,h,{didMount:p,propsReady:g},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=pC(0),C=pC(0),S=pC(UD),D=pC({height:0,width:0}),k=pC({height:0,width:0}),_=mC(),O=mC(),E=pC(0),T=pC(null),I=pC({column:0,row:0}),F=mC(),M=mC(),A=pC(!1),j=pC(0),z=pC(!0),R=pC(!1),B=pC(!1);Z$(cC(p,hC(j),aC((([e,t])=>!!t))),(()=>{X$(z,!1)})),Z$(cC(xC(p,z,k,D,j,R),aC((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{X$(R,!0),SS(1,(()=>{X$(_,e)})),rC(cC(c),(()=>{X$(t,[0,0]),X$(z,!0)}))})),tC(cC(M,aC((e=>null!=e&&e.scrollTop>0)),lC(0)),C),Z$(cC(p,hC(M),aC((([,e])=>null!=e))),(([,e])=>{e&&(X$(D,e.viewport),X$(k,e.item),X$(I,e.gap),e.scrollTop>0&&(X$(A,!0),rC(cC(c,dC(1)),(e=>{X$(A,!1)})),X$(l,{top:e.scrollTop})))})),tC(cC(D,sC((({height:e})=>e))),d),tC(cC(xC(wC(D,ek),wC(k,ek),wC(I,((e,t)=>e&&e.column===t.column&&e.row===t.row)),wC(c)),sC((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),F),tC(cC(xC(wC($),n,wC(I,tk),wC(k,ek),wC(D,ek),wC(T),wC(C),wC(A),wC(z),wC(j)),aC((([,,,,,,,e])=>!e)),sC((([e,[t,r],n,o,i,a,s,,l,c])=>{const{column:u,row:d}=n,{height:f,width:h}=o,{width:p}=i;if(0===s&&(0===e||0===p))return UD;if(0===h){const t=DS(c,e);return function(e){return{...KD,items:e}}(JD(t,t+Math.max(s-1,0),a))}const g=nk(p,h,u);let m,b;l?0===t&&0===r&&s>0?(m=0,b=s-1):(m=g*GD((t+d)/(f+d)),b=g*qD((r+d)/(f+d))-1,b=ZD(e-1,QD(b,g-1)),m=ZD(b,QD(0,m))):(m=0,b=-1);const v=JD(m,b,a),{bottom:y,top:x}=ok(i,n,o,v),w=qD(e/g);return{bottom:y,itemHeight:f,items:v,itemWidth:h,offsetBottom:w*f+(w-1)*d-y,offsetTop:x,top:x}}))),S),tC(cC(T,aC((e=>null!==e)),sC((e=>e.length))),$),tC(cC(xC(D,k,S,I),aC((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),sC((([e,t,{items:r},n])=>{const{bottom:o,top:i}=ok(e,n,t,r);return[i,o]})),iC(JC)),t);const P=pC(!1);tC(cC(c,hC(P),sC((([e,t])=>t||0!==e))),P);const L=bC(cC(xC(S,$),aC((([{items:e}])=>e.length>0)),hC(P),aC((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),sC((([[,e]])=>e-1)),iC())),N=bC(cC(wC(S),aC((({items:e})=>e.length>0&&0===e[0].index)),lC(0),iC())),H=bC(cC(wC(S),hC(A),aC((([{items:e},t])=>e.length>0&&!t)),sC((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),iC(XC),fC(0)));tC(H,h.scrollSeekRangeChanged),tC(cC(_,hC(D,k,$,I),sC((([e,t,r,n,o])=>{const i=$S(e),{align:a,behavior:s,offset:l}=i;let c=i.index;"LAST"===c&&(c=n-1),c=QD(0,c,ZD(n-1,c));let u=ik(t,o,r,c);return"end"===a?u=XD(u-t.height+r.height):"center"===a&&(u=XD(u-t.height/2+r.height/2)),l&&(u+=l),{behavior:s,top:u}}))),l);const W=gC(cC(S,sC((e=>e.offsetBottom+e.bottom))),0);return tC(cC(x,sC((e=>({height:e.visibleHeight,width:e.visibleWidth})))),D),{customScrollParent:m,data:T,deviation:E,footerHeight:o,gap:I,headerHeight:i,increaseViewportBy:e,initialItemCount:C,itemDimensions:k,overscan:r,restoreStateFrom:M,scrollBy:a,scrollContainerState:s,scrollHeight:O,scrollTo:l,scrollToIndex:_,scrollTop:c,smoothScrollTargetReached:u,totalCount:$,useWindowScroll:b,viewportDimensions:D,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...h,gridState:S,horizontalDirection:B,initialTopMostItemIndex:j,totalListHeight:W,...f,endReached:L,propsReady:g,rangeChanged:H,startReached:N,stateChanged:F,stateRestoreInProgress:A,...w}}),Q$(RS,IC,IS,ZS,xS,XS,DC));function nk(e,t,r){return QD(1,GD((e+r)/(GD(t)+r)))}function ok(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=ik(e,t,r,n[0].index);return{bottom:ik(e,t,r,n[n.length-1].index)+o,top:i}}function ik(e,t,r,n){const o=nk(e.width,r.width,t.column),i=GD(n/o),a=i*r.height+QD(0,i-1)*t.row;return a>0?a+t.row:a}const ak=vC((()=>{const e=pC((e=>`Item ${e}`)),t=pC({}),r=pC(null),n=pC("virtuoso-grid-item"),o=pC("virtuoso-grid-list"),i=pC(bD),a=pC("div"),s=pC(K$),l=(e,r=null)=>gC(cC(t,sC((t=>t[e])),iC()),r),c=pC(!1),u=pC(!1);return tC(wC(u),c),{components:t,computeItemKey:i,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:u,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),sk=vC((([e,t])=>({...e,...t})),Q$(rk,ak)),lk=o.memo((function(){const e=mk("gridState"),r=mk("listClassName"),n=mk("itemClassName"),i=mk("itemContent"),a=mk("computeItemKey"),s=mk("isSeeking"),l=bk("scrollHeight"),c=mk("ItemComponent"),u=mk("ListComponent"),d=mk("ScrollSeekPlaceholder"),f=mk("context"),h=bk("itemDimensions"),p=bk("gap"),g=mk("log"),m=mk("stateRestoreInProgress"),b=bk("reportReadyState"),v=kC(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();h({height:e,width:t})}p({column:xk("column-gap",getComputedStyle(e).columnGap,g),row:xk("row-gap",getComputedStyle(e).rowGap,g)})}),[l,h,p,g]),!0,!1);return fD((()=>{e.itemHeight>0&&e.itemWidth>0&&b(!0)}),[e]),m?null:t(u,{className:r,ref:v,...ED(u,f),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((r=>{const o=a(r.index,r.data,f);return s?t(d,{...ED(d,f),height:e.itemHeight,index:r.index,width:e.itemWidth},o):D(c,{...ED(c,f),className:n,"data-index":r.index,key:o},i(r.index,r.data,f))}))})})),ck=o.memo((function(){const e=mk("HeaderComponent"),r=bk("headerHeight"),n=mk("headerFooterTag"),i=kC(o.useMemo((()=>e=>{r(nS(e,"height"))}),[r]),!0,!1),a=mk("context");return e?t(n,{ref:i,children:t(e,{...ED(e,a)})}):null})),uk=o.memo((function(){const e=mk("FooterComponent"),r=bk("footerHeight"),n=mk("headerFooterTag"),i=kC(o.useMemo((()=>e=>{r(nS(e,"height"))}),[r]),!0,!1),a=mk("context");return e?t(n,{ref:i,children:t(e,{...ED(e,a)})}):null})),dk=({children:e})=>{const r=o.useContext(dD),n=bk("itemDimensions"),i=bk("viewportDimensions"),a=kC(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),t("div",{ref:a,style:_D(!1),children:e})},fk=({children:e})=>{const r=o.useContext(dD),n=bk("windowViewportRect"),i=bk("itemDimensions"),a=mk("customScrollParent"),s=TC(n,a,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),t("div",{ref:s,style:_D(!1),children:e})},hk=o.memo((function({...r}){const n=mk("useWindowScroll"),o=mk("customScrollParent"),i=o||n?yk:vk,a=o||n?fk:dk,s=mk("context");return t(i,{...r,...ED(i,s),children:e(a,{children:[t(ck,{}),t(lk,{}),t(uk,{})]})})})),{Component:pk,useEmitter:gk,useEmitterValue:mk,usePublisher:bk}=cD(sk,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},hk),vk=MD({useEmitter:gk,useEmitterValue:mk,usePublisher:bk}),yk=AD({useEmitter:gk,useEmitterValue:mk,usePublisher:bk});function xk(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,CC.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const wk=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),$k=({children:e})=>{const[r,n]=g(-1);return t(wk.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:e})},Ck=_.div`
    overflow: hidden;
    border: ${Fi["width-010"]} ${Fi.solid} ${Ei.border};
    border-radius: ${Ai.sm};
    background: ${Ei.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?Ti["body-md-regular"]:Ti["body-baseline-regular"]}

    ${zi.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${ji["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${zi.MaxWidth.xs} {
        width: calc(100vw - ${ji["xs-margin"]} * 2);
    }

    ${zi.MaxWidth.xxs} {
        width: calc(100vw - ${ji["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Ei["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,Sk=_.div`
    background: transparent;
    padding: ${Mi["spacing-8"]};
`,Dk=_.ul`
    list-style-type: none;
`,kk=_.li`
    display: flex;
    align-items: flex-start;
    gap: ${Mi["spacing-8"]};
    padding: ${Mi["spacing-12"]} ${Mi["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$active&&e.$selected?O`
                background: ${Ei["bg-hover"]};
            `:e.$active?O`
                background: ${Ei["bg-hover-subtle"]};
            `:void 0}
`,_k=_(we)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Ei["icon-selected"]};
`,Ok=_.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,Ek=_(xe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ei["icon-selected"]};
`,Tk=_(ye)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ei["icon-primary-subtlest"]};
`,Ik=_.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Fk=_(If)`
    cursor: pointer;
    overflow: hidden;
    color: ${Ei["text-primary"]};
    font-size: inherit;
`,Mk=_(Fk)`
    ${Ti["body-baseline-semibold"]}
`,Ak=_(Fk)`
    ${Ti["body-md-semibold"]}
    padding: ${Mi["spacing-8"]} ${Mi["spacing-8"]};
`,jk=_.div`
    width: 100%;
    display: flex;
    padding: ${Mi["spacing-12"]} ${Mi["spacing-16"]};
    align-items: center;
`,zk=_(pe)`
    margin-right: ${Mi["spacing-4"]};
    color: ${Ei["icon-error"]};
    height: 1em;
    width: 1em;
`,Rk=_(dd)`
    margin-right: ${Mi["spacing-8"]};
    color: ${Ei.icon};
`,Bk=_.div`
    background: ${Ei["bg-strong"]};
    border-radius: ${Ai.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Ti["body-md-regular"]:Ti["body-baseline-regular"]}
`,Pk=_.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Mi["spacing-8"]};
    padding: ${e=>"small"===e.$variant?O`
                  ${Mi["spacing-8"]} ${Mi["spacing-16"]}
              `:O`10px ${Mi["spacing-16"]}`};
`,Lk=_(Tf)`
    flex: 1;
`,Nk=_(ge)`
    color: ${Ei.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,Hk=_(lu)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Mi["spacing-8"]};
    margin-left: -${Mi["spacing-8"]};
    color: ${Ei.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Wk=d(((r,n)=>{var{value:o,variant:i,onClear:a}=r,s=lt(r,["value","variant","onClear"]);return e(Bk,{$variant:i,children:[e(Pk,{$variant:i,children:[t(Nk,{"aria-hidden":!0}),t(Lk,Object.assign({ref:n,value:o,$variant:i},s))]}),o&&t(Hk,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:t(te,{"aria-hidden":!0})})]})})),Vk=({listItems:n,multiSelect:o,selectedItems:i,disableItemFocus:a,itemsLoadState:l="success",itemTruncationType:d="end",itemMaxLines:f=2,labelDisplayType:h="inline",variant:p="default",listboxId:m,width:v,topScrollItem:y,onSelectItem:x,onSelectAll:w,onDismiss:$,onRetry:C,valueExtractor:S,listExtractor:D,renderListItem:k,renderCustomCallToAction:_,enableSearch:O,hideNoResultsDisplay:E,searchPlaceholder:T="Search",searchFunction:I,onSearch:F})=>{const{focusedIndex:M,setFocusedIndex:A}=b(wk),[j,z]=g(""),[R,B]=g(null!=n?n:[]),P=qc(l),L=Uc(),N=s(null),H=s(null),W=s([]),V=s(null),Y=s(null),U=e=>{const t=D?D(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},K=u((e=>!!Wb(i,(t=>Yb(t,e)))),[i]),q=Vc((()=>null==I?void 0:I(j))),G=Vc((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=U(e),n=j.trim().toLowerCase();return t.includes(n)||r&&r.includes(n)})))),Q=(e,t)=>{A(t),null==x||x(e,(e=>S?S(e):e)(e))},Z=e=>{const t=e.target.value;z(t),null==F||F()},X=()=>{var e;z(""),null===(e=V.current)||void 0===e||e.focus(),null==F||F()},J=()=>{null==C||C()};Yc("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),M<R.length-1){const e=M+1;null===(t=W.current[e])||void 0===t||t.focus(),A(e)}break;case"ArrowUp":if(e.preventDefault(),M>0){const e=M-1;null===(r=W.current[e])||void 0===r||r.focus(),A(e)}else 0===M&&V.current&&(V.current.focus(),A(-1));break;case"Space":case"Enter":document.activeElement===W.current[M]&&(e.preventDefault(),R[M]&&Q(R[M],M))}})),c((()=>{var e;if(!y)return void(null===(e=Y.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(y);Y.current&&-1!==e&&(Y.current.scrollToIndex({index:e}),A(e))}),0);return()=>clearTimeout(t)}),[W,n,A,y]),c((()=>{var e,t,r;if(L)return;if(a||!n)return;const o=n.findIndex((e=>K(e)));V.current?(A(-1),setTimeout((()=>{var e;return null===(e=V.current)||void 0===e?void 0:e.focus()}),200)):M>0?(null===(e=Y.current)||void 0===e||e.scrollToIndex({index:M,align:"center"}),setTimeout((()=>{var e;return null===(e=W.current[M])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=Y.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),A(o),setTimeout((()=>{var e;return null===(e=W.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=Y.current)||void 0===r||r.scrollToIndex({index:0}),A(0),setTimeout((()=>{var e;return null===(e=W.current[0])||void 0===e?void 0:e.focus()}),200))}),[K,a,M,n,L,A]),c((()=>{L&&P&&(a||"success"===l&&V.current&&(A(-1),V.current.focus()))}),[L,P,l,A,a]),c((()=>{var e;B(null!==(e=""===j?n:I?q():G())&&void 0!==e?e:[])}),[q,G,n,I,j]);const ee=e=>o?t(e?Ek:Tk,{"aria-hidden":!0}):e?t(_k,{"aria-hidden":!0}):t(Ok,{}),te=(e,r)=>{const{title:n,secondaryLabel:o}=U(e);return t(L$,{displayType:h,label:n,maxLines:f,selected:r,sublabel:o,truncationType:d,variant:p})},re=(n,i)=>{if(!C||"success"===l){const a=K(n),s=i===M;return t(kk,{"aria-selected":a,"aria-multiselectable":o,"data-testid":"list-item",onClick:()=>Q(n,i),onMouseEnter:()=>(e=>{A(e)})(i),ref:e=>{W.current[i]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,children:k?k(n,{selected:a}):e(r,{children:[ee(a),te(n,a)]})},((e,t)=>`item_${t}__${S?S(e):e}`)(n,i))}},ne=()=>{if(i&&o&&R.length>0&&!j&&"success"===l)return t(Ik,{children:t(Ak,{onClick:w,type:"button",$variant:p,children:0===i.length?"Select all":"Clear all"})})},oe=()=>{if(!E&&(j||!O)&&0===R.length&&"success"===l)return e(jk,{"data-testid":"list-no-results",children:[t(zk,{"data-testid":"no-result-icon"}),"No results found."]})},ie=()=>{if(C&&"loading"===l)return e(jk,{"data-testid":"list-loading",children:[t(Rk,{}),"Loading..."]})},ae=()=>{if(C&&"fail"===l)return e(jk,{"data-testid":"list-fail",children:[t(zk,{"data-testid":"load-error-icon"}),"Failed to load. ",t(Mk,{onClick:J,type:"button",$variant:p,children:"Try again."})]})},se=()=>{var e;const r="test"===process.env.NODE_ENV;return t(Dk,{role:"listbox",id:m,children:t(YD,Object.assign({ref:Y,style:{height:"100%"},data:R,customScrollParent:null!==(e=N.current)&&void 0!==e?e:void 0,itemContent:(e,t)=>re(t,e)},r?{initialItemCount:R.length}:{}),r?R.length:void 0)})};return e(Ck,{"data-testid":"dropdown-container",ref:N,$width:v,$variant:p,children:[e(Sk,{ref:H,"data-testid":"dropdown-list",children:[(()=>{if((O||I)&&"success"===l)return t(Wk,{ref:V,onChange:Z,value:j,placeholder:T,"data-testid":"search-input","aria-label":"Enter text to search",onClear:X,variant:p})})(),ne(),oe(),ie(),ae(),se()]}),(()=>{if(_)return t("div",{"data-testid":"custom-cta",children:_($,R)})})()]})},Yk=_(If)`
    display: flex;
    align-items: center;
    gap: ${Mi["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${Mi["spacing-16"]};

    ${e=>"small"===e.$variant?Ti["body-md-regular"]:Ti["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,Uk=_.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Ii["duration-250"]} ${Ii["ease-default"]};

    svg {
        color: ${Ei.icon};
        height: 1em;
        width: 1em;
    }
`,Kk=d((({children:r,disabled:n,expanded:o,listboxId:i,popupRole:a,readOnly:s,variant:l},c)=>e(Yk,{ref:c,type:"button","aria-expanded":o,"aria-haspopup":a,"data-testid":"selector",disabled:n,"aria-controls":i,$variant:l,children:[r,!s&&t(Uk,{$expanded:o,$variant:l,children:t(re,{"aria-hidden":!0})})]})));var qk=Symbol.for("immer-nothing"),Gk=Symbol.for("immer-draftable"),Qk=Symbol.for("immer-state"),Zk="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function Xk(e,...t){if("production"!==process.env.NODE_ENV){const r=Zk[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Jk=Object.getPrototypeOf;function e_(e){return!!e&&!!e[Qk]}function t_(e){return!!e&&(n_(e)||Array.isArray(e)||!!e[Gk]||!!e.constructor?.[Gk]||l_(e)||c_(e))}var r_=Object.prototype.constructor.toString();function n_(e){if(!e||"object"!=typeof e)return!1;const t=Jk(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===r_}function o_(e,t){0===i_(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function i_(e){const t=e[Qk];return t?t.type_:Array.isArray(e)?1:l_(e)?2:c_(e)?3:0}function a_(e,t){return 2===i_(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function s_(e,t,r){const n=i_(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function l_(e){return e instanceof Map}function c_(e){return e instanceof Set}function u_(e){return e.copy_||e.base_}function d_(e,t){if(l_(e))return new Map(e);if(c_(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=n_(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[Qk];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Jk(e),t)}{const t=Jk(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function f_(e,t=!1){return p_(e)||e_(e)||!t_(e)||(i_(e)>1&&(e.set=e.add=e.clear=e.delete=h_),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>f_(t,!0)))),e}function h_(){Xk(2)}function p_(e){return Object.isFrozen(e)}var g_,m_={};function b_(e){const t=m_[e];return t||Xk(0,e),t}function v_(){return g_}function y_(e,t){t&&(b_("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function x_(e){w_(e),e.drafts_.forEach(C_),e.drafts_=null}function w_(e){e===g_&&(g_=e.parent_)}function $_(e){return g_={drafts_:[],parent_:g_,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function C_(e){const t=e[Qk];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function S_(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[Qk].modified_&&(x_(t),Xk(4)),t_(e)&&(e=D_(t,e),t.parent_||__(t,e)),t.patches_&&b_("Patches").generateReplacementPatches_(r[Qk].base_,e,t.patches_,t.inversePatches_)):e=D_(t,r,[]),x_(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==qk?e:void 0}function D_(e,t,r){if(p_(t))return t;const n=t[Qk];if(!n)return o_(t,((o,i)=>k_(e,n,t,o,i,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return __(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),o_(o,((o,a)=>k_(e,n,t,o,a,r,i))),__(e,t,!1),r&&e.patches_&&b_("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function k_(e,t,r,n,o,i,a){if("production"!==process.env.NODE_ENV&&o===r&&Xk(5),e_(o)){const a=D_(e,o,i&&t&&3!==t.type_&&!a_(t.assigned_,n)?i.concat(n):void 0);if(s_(r,n,a),!e_(a))return;e.canAutoFreeze_=!1}else a&&r.add(o);if(t_(o)&&!p_(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;D_(e,o),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||__(e,o)}}function __(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&f_(t,r)}var O_={get(e,t){if(t===Qk)return e;const r=u_(e);if(!a_(r,t))return function(e,t,r){const n=I_(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!t_(n)?n:n===T_(e.base_,t)?(M_(e),e.copy_[t]=A_(n,e)):n},has:(e,t)=>t in u_(e),ownKeys:e=>Reflect.ownKeys(u_(e)),set(e,t,r){const n=I_(u_(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=T_(u_(e),t),o=n?.[Qk];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||a_(e.base_,t)))return!0;M_(e),F_(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==T_(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,M_(e),F_(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=u_(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){Xk(11)},getPrototypeOf:e=>Jk(e.base_),setPrototypeOf(){Xk(12)}},E_={};function T_(e,t){const r=e[Qk];return(r?u_(r):e)[t]}function I_(e,t){if(!(t in e))return;let r=Jk(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=Jk(r)}}function F_(e){e.modified_||(e.modified_=!0,e.parent_&&F_(e.parent_))}function M_(e){e.copy_||(e.copy_=d_(e.base_,e.scope_.immer_.useStrictShallowCopy_))}o_(O_,((e,t)=>{E_[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),E_.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&Xk(13),E_.set.call(this,e,t,void 0)},E_.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&Xk(14),O_.set.call(this,e[0],t,r,e[0])};function A_(e,t){const r=l_(e)?b_("MapSet").proxyMap_(e,t):c_(e)?b_("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:v_(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=O_;r&&(o=[n],i=E_);const{revoke:a,proxy:s}=Proxy.revocable(o,i);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:v_()).drafts_.push(r),r}function j_(e){if(!t_(e)||p_(e))return e;const t=e[Qk];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=d_(e,t.scope_.immer_.useStrictShallowCopy_)}else r=d_(e,!0);return o_(r,((e,t)=>{s_(r,e,j_(t))})),t&&(t.finalized_=!1),r}var z_=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...o){return n.produce(e,(e=>t.call(this,e,...o)))}}let n;if("function"!=typeof t&&Xk(6),void 0!==r&&"function"!=typeof r&&Xk(7),t_(e)){const o=$_(this),i=A_(e,void 0);let a=!0;try{n=t(i),a=!1}finally{a?x_(o):w_(o)}return y_(o,r),S_(n,o)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===qk&&(n=void 0),this.autoFreeze_&&f_(n,!0),r){const t=[],o=[];b_("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}Xk(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const o=this.produce(e,t,((e,t)=>{r=e,n=t}));return[o,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){t_(e)||Xk(8),e_(e)&&(e=function(e){e_(e)||Xk(10,e);return j_(e)}(e));const t=$_(this),r=A_(e,void 0);return r[Qk].isManual_=!0,w_(t),r}finishDraft(e,t){const r=e&&e[Qk];r&&r.isManual_||Xk(9);const{scope_:n}=r;return y_(n,t),S_(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=b_("Patches").applyPatches_;return e_(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},R_=z_.produce;z_.produceWithPatches.bind(z_),z_.setAutoFreeze.bind(z_),z_.setUseStrictShallowCopy.bind(z_),z_.applyPatches.bind(z_),z_.createDraft.bind(z_),z_.finishDraft.bind(z_);var B_=Bg,P_=mm,L_=ig,N_=fr,H_=Ng,W_=lg,V_=Mg,Y_=Cg,U_=Object.prototype.hasOwnProperty;var K_=function(e){if(null==e)return!0;if(H_(e)&&(N_(e)||"string"==typeof e||"function"==typeof e.splice||W_(e)||Y_(e)||L_(e)))return!e.length;var t=P_(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(V_(e))return!B_(e).length;for(var r in e)if(U_.call(e,r))return!1;return!0},q_=je(K_);const G_=(e,t,r)=>{const n=R_(e,(e=>{for(let n=e.length-1;n>=0;n--){const o=e[n],i=Z_(o.keyPath);if(o.checked=t.has(i),o.hasSubItems&&r&&!0!==o.checked){const t=o.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?o.checked=!0:n&&(o.checked="mixed")}}}));return n},Q_=(e,t)=>{const[r,...n]=t;if(q_(e)||q_(r))return;const o=e.find((e=>e.key===r));return o&&n.length?Q_(o.subItems,n):o},Z_=e=>e.join(","),X_=e=>new Set(e.map((e=>e.join(",")))),J_=_.li`
    display: ${e=>e.$visible?"flex":"none"};
`,eO=_.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Mi["spacing-8"]};
    padding: ${Mi["spacing-12"]} ${Mi["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&O`
            background: ${Ei["bg-hover"]};
        `}
`,tO=_.div`
    height: 1px;
    width: calc((1lh + ${Mi["spacing-8"]}) * ${e=>e.$level});
`,rO=_.div`
    width: 1lh;
    height: 1lh;
    color: ${Ei["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Ii["duration-350"]}
            ${Ii["ease-standard"]};

        ${e=>{if(e.$expanded)return O`
                    transform: rotate(90deg);
                `}}
    }
`,nO=_.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Mi["spacing-8"]};
`,oO=_.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Mi["spacing-16"]};

    display: flex;
    justify-content: center;
`,iO=_(Ce)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ei["icon-selected"]};
`,aO=({listItems:r,multiSelect:n=!1,selectedKeyPaths:o,itemsLoadState:i="success",itemTruncationType:l="end",itemMaxLines:u=2,variant:d="default",listboxId:f,width:h,mode:p="default",selectableCategory:m,onSelectItem:b,onSelectAll:v,onRetry:y,enableSearch:x,hideNoResultsDisplay:w,searchPlaceholder:$="Search",onSearch:C})=>{const S=n||m,[D,k]=g(""),_=D.toLowerCase().trim(),[O,E]=g(!1),T=s(null),I=s(null),F=s([]),M=s(null),A=Uc(),[j,z]=g([]),[R,B]=g([]),P=O?R:j,L=a((()=>{let e=0;for(const t of j)t.level>e&&(e=t.level);return e}),[j]),[N,H]=g(0),[W,V]=g([]),[Y,U]=g(0),K=e=>{const t=e.target.value;k(t),""===t?E(!1):t.trim().length>=3&&E(!0),null==C||C()},q=()=>{var e;k(""),E(!1),null===(e=M.current)||void 0===e||e.focus(),null==C||C()},G=()=>{null==y||y()},Q=()=>{if(0===o.size){const e=[],t=[];j.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==v||v(e,t)}else null==v||v([],[])},Z=Vc(((e,t)=>((e,t,r,n,o)=>{const i=[],a=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((u,d)=>{var f,h;const p=s?s.level+1:0,g=s?[...s.keyPath,u.key]:[u.key],m=Z_(g),b={item:u,index:i.length,indexInParent:d,parentSetSize:e.length,keyPath:g,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||o||(null==s?void 0:s.expanded)||!1,expanded:o,checked:t.has(m),hasSubItems:!!(null===(f=u.subItems)||void 0===f?void 0:f.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!n&&-1!==u.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(l.push(b),i.push(b),null===(h=u.subItems)||void 0===h?void 0:h.length){const e=a(u.subItems,b);if(r&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?b.checked=!0:r&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),i})(e,o,n,_,t))),X=Vc((e=>{return o.size?(t=Z(e,!1),R_(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>R_(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const o=e[t].keyPath.length;if(o>n)n=o;else if(o<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],o=n.keyPath.slice(0,-1),i=e[r].keyPath.slice(0,o.length);Yb(o,i)&&(n.visible=!0)}return e})))(Z(e,!1));var t})),J=Vc((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(_))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),ee=Vc((()=>{z((e=>G_(e,o,n))),O&&B((e=>G_(e,o,n)))})),te=(e,t,r)=>{const n=((e,t,r)=>R_(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let o=t+1;o<e.length;o++){const t=e[o],i=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!Yb(n,a))break;t.visible=r&&i.expanded&&i.visible}})))(P,e,t);H(e),U(r),O?B(n):z(n)};Yc("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return e[n]})(P,(e=>e.visible),N+1);r&&(U((e=>e+1)),H(r.index),null===(t=F.current[r.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return e[n]})(P,(e=>e.visible),N-1);t?(U((e=>e-1)),H(t.index),null===(r=F.current[t.index])||void 0===r||r.focus()):0===Y&&M.current&&(M.current.focus(),U(-1),H(-1));break}case"ArrowRight":e.preventDefault(),te(N,!0,Y);break;case"ArrowLeft":e.preventDefault(),te(N,!1,Y);break;case"Space":if(document.activeElement===F.current[N]){e.preventDefault();const t=P[N];if(t.hasSubItems&&!S)return;null==b||b(t)}}})),c((()=>{let e=[];"default"===p?e=X(r):"expand"===p?e=Z(r,!0):"collapse"===p&&(e=Z(r,!1)),z(e)}),[Z,X,r,p]),c((()=>{V(P.filter((e=>e.visible)))}),[O,P]),c((()=>{ee()}),[n,o,ee]),c((()=>{if(O&&D.trim().length>=3){const e=J(r),t=(e=>R_(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(Z(e,!1));B(t)}}),[J,Z,r,O,D]),c((()=>{A||(M.current?(H(-1),U(-1),setTimeout((()=>{var e;return null===(e=M.current)||void 0===e?void 0:e.focus()}),200)):F.current[N]?setTimeout((()=>{var e;return null===(e=F.current[N])||void 0===e?void 0:e.focus()}),200):(H(0),U(0),setTimeout((()=>{var e;return null===(e=F.current[0])||void 0===e?void 0:e.focus()}),200)))}),[N,Y,A]);const re=()=>{if(x&&"success"===i)return t(Wk,{ref:M,onChange:K,value:D,placeholder:$,"data-testid":"search-input","aria-label":"Enter text to search",onClear:q,variant:d})},ne=()=>{if(n&&!O&&j.length>0&&"success"===i)return t(Ik,{children:t(Ak,{onClick:Q,type:"button",$variant:d,children:0===o.size?"Select all":"Clear all"})})},oe=()=>{if(!w&&O&&0===R.length&&"success"===i)return e(jk,{"data-testid":"list-no-results",children:[t(zk,{"data-testid":"no-result-icon"}),"No results found."]})},ie=()=>{if(y&&"loading"===i)return e(jk,{"data-testid":"list-loading",children:[t(Sd,{}),"Loading..."]})},ae=()=>{if(y&&"fail"===i)return e(jk,{"data-testid":"list-fail",children:[t(zk,{"data-testid":"load-error-icon"}),"Failed to load. ",t(Mk,{onClick:G,type:"button",$variant:d,children:"Try again."})]})},se=e=>{if(n)switch(e.checked){case"mixed":return t(iO,{"aria-hidden":!0});case!0:return t(Ek,{"aria-hidden":!0});default:return t(Tk,{"aria-hidden":!0})}if(!e.hasSubItems)return t(oO,{$hasNestedSiblings:e.hasNestedSiblings||0===e.level,children:e.checked&&t(_k,{"aria-hidden":!0})})},le=(r,o)=>{const{level:i,visible:a,expanded:s,keyPath:c,checked:d,hasSubItems:f,indexInParent:h,parentSetSize:p}=r,g=r.index,m=Y===o,v=f&&!S;return e(J_,{$visible:a,children:[L>0&&t(tO,{$level:i}),L>0&&!f&&n&&t(nO,{}),e(eO,{"aria-checked":d,"aria-selected":!!d,"aria-expanded":f?s:void 0,"aria-level":i+1,"aria-posinset":h+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),v?te(g,!s,o):((e,t)=>{U(t),H(e),null==b||b(P[e])})(g,o)},onMouseEnter:()=>((e,t)=>{H(t.index),U(e)})(o,r),ref:e=>F.current[r.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:v,children:[f&&t(rO,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),te(g,!s,o)},$expanded:s,children:t($e,{})}),se(r),t(L$,{bold:f,searchTerm:O?_:void 0,label:r.item.label,selected:!!d,truncationType:l,maxLines:u})]})]},`[${c.join("---")}]`)},ce=()=>{var e;const r="test"===process.env.NODE_ENV;return t("div",{"aria-multiselectable":n,id:f,ref:I,role:"tree",children:t(YD,Object.assign({style:{height:"100%"},customScrollParent:null!==(e=T.current)&&void 0!==e?e:void 0,data:W,itemContent:(e,t)=>le(t,e)},r?{initialItemCount:W.length}:{}),r?W.length:void 0)})};return t(Ck,{"data-testid":"dropdown-container",ref:T,$width:h,$variant:d,children:e(Sk,{"data-testid":"nested-dropdown-list",children:[re(),ne(),oe(),ie(),ae(),ce()]})})},sO=({selectedOptions:e,placeholder:r="Select",options:n,disabled:o,error:i,className:a,"data-testid":l,id:u,enableSearch:d=!1,searchFunction:f,searchPlaceholder:h,valueExtractor:p,listExtractor:m,onSelectOptions:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderListItem:C,hideNoResultsDisplay:S,renderCustomCallToAction:D,onBlur:k,variant:_="default",readOnly:O,alignment:E,dropdownZIndex:T})=>{const[I,F]=g(e||[]),[M,A]=g(!1),[j,z]=g(!1),[R]=g((()=>Hc.generate())),B=s(null),P=s(null);c((()=>{F(e||[])}),[e]);const L=()=>{I&&I.length>0?(F([]),U([])):(F(n),U(n))},N=(e,t)=>{const r=[...I],n=Hb(I,(e=>(p?p(e):e)===t));n>-1?r.splice(n,1):r.push(e),F(r),U(r)},H=()=>{M&&(A(!1),Y(!1))},W=()=>{j||M||z(!0)},V=e=>{j&&!M&&B.current&&!B.current.contains(e.relatedTarget)&&(z(!1),null==k||k())},Y=e=>{!e&&y&&y(),e&&v&&v()},U=e=>{b&&b(e)};return t($k,{children:t(nd,{enabled:!O&&!o,isOpen:M,renderElement:()=>t(Of,{className:a,"data-testid":l,id:u,ref:B,tabIndex:-1,onFocus:W,onBlur:V,$focused:j,$disabled:o,$readOnly:O,$error:i,children:t(Kk,{ref:P,disabled:o,expanded:M,listboxId:R,popupRole:"listbox",readOnly:O,variant:_,children:t(Zu,{$disabled:o,children:I&&0!==I.length?t(Xu,{$variant:_,children:n&&I.length===n.length?"All selected":`${I.length} selected`}):t(Ju,{truncateType:$,$variant:_,children:r})})})}),renderDropdown:({elementWidth:e})=>t(Vk,{listboxId:R,listItems:n,onSelectItem:N,onDismiss:H,valueExtractor:p,listExtractor:m,enableSearch:d,searchFunction:f,searchPlaceholder:h,multiSelect:!0,selectedItems:I,onSelectAll:L,onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:C,hideNoResultsDisplay:S,renderCustomCallToAction:D,variant:_,width:e}),onOpen:()=>{A(!0),Y(!0),z(!0)},onClose:e=>{A(!1),Y(!1),"click"!==e&&(z(!1),null==k||k())},onDismiss:()=>{var e;null===(e=P.current)||void 0===e||e.focus(),A(!1),Y(!1)},clickToToggle:!0,offset:8,alignment:E,fitAvailableHeight:!0,customZIndex:T})})},lO=(e,t)=>{const[r,...n]=t;if(q_(e)||!r)return;const o=e.find((e=>e.key===r));return o?n.length?lO(o.subItems,n):o:void 0},cO=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...cO(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},uO=({placeholder:e="Select",options:r,disabled:n,error:o,className:i,"data-testid":a,id:l,selectedKeyPaths:u,mode:d,valueToStringFunction:f,enableSearch:h,searchPlaceholder:p,hideNoResultsDisplay:m,readOnly:b,onSearch:v,onSelectOptions:y,onShowOptions:x,onHideOptions:w,onRetry:$,onBlur:C,optionsLoadState:S="success",optionTruncationType:D="end",variant:k="default",alignment:_,dropdownZIndex:O})=>{const E=r,[T,I]=g(u?X_(u):new Set),[F,M]=g([]),[A,j]=g(!1),[z,R]=g(!1),[B]=g((()=>Hc.generate())),P=s(null),L=s(null),N=s(null);c((()=>{const e=u||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const o=t[n],i=lO(e,o);i&&r.push({value:i.value,label:i.label,keyPath:o})}return r})(E,e);I(X_(e)),M(t)}),[u,E]);const H=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));I(X_(e)),M(r),G(e,r)},W=e=>{const t=Q(e),r=t.map((e=>e.keyPath));M(t),I(X_(r)),G(r,t)},V=()=>{z||A||R(!0)},Y=e=>{z&&!A&&P.current&&!P.current.contains(e.relatedTarget)&&(R(!1),null==C||C())},U=()=>{if(F.length>1)return`${F.length} selected`;const{label:e,value:t}=F[0];return f?f(t):e},K=e=>{if("middle"===D){let t=0;return N&&N.current&&(t=N.current.getBoundingClientRect().width),Wc.truncateOneLine(e,t,120,6)}return e},q=e=>{!e&&w&&w(),e&&x&&x()},G=(e,t)=>{if(y){const r=t.map((e=>e.value));y(e,r)}},Q=e=>{if(!0===e.checked)return F.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!Yb(e.keyPath,r)}));{const t=[...F],r=e.hasSubItems?((e,t)=>{const r=lO(e,t);return r&&r.subItems?cO(r.subItems,t):[]})(E,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{F.find((t=>Yb(t.keyPath,e.keyPath)))||t.push(e)})),t}};return t(nd,{enabled:!b&&!n,isOpen:A,renderElement:()=>t(Of,{className:i,"data-testid":a,id:l,ref:P,tabIndex:-1,onFocus:V,onBlur:Y,$focused:z,$disabled:n,$readOnly:b,$error:o,children:t(Kk,{ref:L,disabled:n,expanded:A,listboxId:B,popupRole:"tree",readOnly:b,variant:k,children:t(Zu,{ref:N,$disabled:n,children:q_(F)?t(Ju,{truncateType:D,children:e}):t(Xu,{truncateType:D,children:K(U())})})})}),renderDropdown:({elementWidth:e})=>t(aO,{listboxId:B,listItems:E,multiSelect:!0,selectedKeyPaths:T,itemsLoadState:S,itemTruncationType:D,enableSearch:h,searchPlaceholder:p,hideNoResultsDisplay:m,onSelectItem:W,onSelectAll:H,onRetry:$,onSearch:v,variant:k,mode:d,width:e}),onOpen:()=>{j(!0),q(!0),R(!0)},onClose:e=>{j(!1),q(!1),"click"!==e&&(R(!1),null==C||C())},onDismiss:()=>{var e;null===(e=L.current)||void 0===e||e.focus(),j(!1),q(!1)},clickToToggle:!0,offset:8,alignment:_,fitAvailableHeight:!0,customZIndex:O})},dO=({placeholder:e="Select",options:r,disabled:n,error:o,className:i,"data-testid":a,id:l,selectedKeyPath:u,mode:d,valueToStringFunction:f,enableSearch:h,searchPlaceholder:p,selectableCategory:m,hideNoResultsDisplay:b,readOnly:v,onBlur:y,onSearch:x,onSelectOption:w,onShowOptions:$,onHideOptions:C,onRetry:S,optionsLoadState:D="success",optionTruncationType:k="end",variant:_="default",alignment:O,dropdownZIndex:E})=>{const T=r,[I,F]=g(u?X_([u]):new Set),[M,A]=g(),[j,z]=g(!1),[R,B]=g(!1),[P]=g((()=>Hc.generate())),L=s(null),N=s(null),H=s(null);c((()=>{F(u?X_([u]):new Set);const e=Q_(T,u||[]);A(null!=e?e:void 0)}),[u,T]);const W=e=>{var t;const{keyPath:r,item:{label:n,value:o}}=e;F(X_([r])),A({label:n,value:o}),z(!1),q(!1),null===(t=N.current)||void 0===t||t.focus(),null==w||w(r,o)},V=()=>{R||j||B(!0)},Y=e=>{R&&!j&&L.current&&!L.current.contains(e.relatedTarget)&&(B(!1),null==y||y())},U=()=>{if(!M)return"";const{label:e,value:t}=M;return f?f(t):e},K=e=>{if("middle"===k){let t=0;return H&&H.current&&(t=H.current.getBoundingClientRect().width),Wc.truncateOneLine(e,t,120,6)}return e},q=e=>{!e&&C&&C(),e&&$&&$()};return t(nd,{enabled:!v&&!n,isOpen:j,renderElement:()=>t(Of,{className:i,"data-testid":a,id:l,ref:L,tabIndex:-1,onFocus:V,onBlur:Y,$focused:R,$disabled:n,$readOnly:v,$error:o,children:t(Kk,{ref:N,disabled:n,expanded:j,listboxId:P,popupRole:"tree",readOnly:v,variant:_,children:t(Zu,{ref:H,$disabled:n,children:q_(M)?t(Ju,{truncateType:k,children:e}):t(Xu,{truncateType:k,children:K(U())})})})}),renderDropdown:({elementWidth:e})=>t(aO,{listboxId:P,listItems:T,selectedKeyPaths:I,selectableCategory:m,itemsLoadState:D,itemTruncationType:k,enableSearch:h,searchPlaceholder:p,hideNoResultsDisplay:b,onSelectItem:W,onRetry:S,onSearch:x,variant:_,mode:d,width:e}),onOpen:()=>{z(!0),q(!0),B(!0)},onClose:e=>{z(!1),q(!1),"click"!==e&&(B(!1),null==y||y())},onDismiss:()=>{var e;null===(e=N.current)||void 0===e||e.focus(),z(!1),q(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:E})};var fO=function(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r};var hO=function(e){return function(t,r,n){for(var o=-1,i=Object(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}},pO=hO(),gO=Yg;var mO=Ng;var bO=function(e,t){return function(r,n){if(null==r)return r;if(!mO(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=Object(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}((function(e,t){return e&&pO(e,t,gO)}));var vO=fO,yO=bO,xO=vb,wO=function(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r},$O=fr;var CO=je((function(e,t,r){var n=$O(e)?vO:wO,o=arguments.length<3;return n(e,xO(t),r,o,yO)}));const SO=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],DO=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var kO;!function(e){e.getCountries=()=>[].concat(...SO.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:DO("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,o=n.split(" ");o.shift();const i=o.join(" ");return CO(i,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const r=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(kO||(kO={}));const _O=e=>{var{onChange:r,value:n,allowClear:o,onClear:i,onBlur:a,error:l,fixedCountry:u=!1,optionPlaceholder:d="Select",optionSearchPlaceholder:f,enableSearch:h,onHideOptions:p,onShowOptions:m,placeholder:b,autoComplete:v}=e,y=lt(e,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[x]=g(kO.getCountries()),[w,$]=g(void 0),[C,S]=g(""),D=s(null),k=Kc({ref:D,formatter:e=>kO.formatNumber(e.replace(/[^0-9]/g,""),w)});c((()=>{const e=x.filter((e=>e.countryCode===OO(null==n?void 0:n.countryCode)))[0];$(e),S(kO.formatNumber(null==n?void 0:n.number,e))}),[n]);const _=e=>{E(C,e),r&&O(C,e)},O=(e,t)=>{const n=kO.formatNumber(e,t);null==r||r({number:n.replace(/[\s()]+/g,""),countryCode:t&&EO(t.countryCode)})},E=(e,t)=>{S(kO.formatNumber(e,t)),$(t)};return t(m$,Object.assign({ref:D,value:C,onChange:()=>{const e=k();if(!e)return;const{nextValue:t,updateCaretPosition:n}=e;n(),E(t,w),r&&O(t,w)},allowClear:o&&!!C,onClear:()=>{i?i():S("")},onBlur:a,error:l,placeholder:b,addon:u?{type:"label",attributes:{value:EO(null==w?void 0:w.countryCode)}}:{type:"list",attributes:{placeholder:d,options:x,selectedOption:w,enableSearch:h,searchPlaceholder:f,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:EO(e.countryCode)}),onSelectOption:_,onHideOptions:p,onShowOptions:m}},inputMode:"numeric",autoComplete:v},y))},OO=e=>e?e.replace("+",""):"",EO=e=>e?e.includes("+")?e:`+${e}`:"";var TO=mr,IO=Br,FO=function(){return TO.Date.now()},MO=Mb,AO=Math.max,jO=Math.min;var zO=je((function(e,t,r){var n,o,i,a,s,l,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||d&&e-c>=i}function g(){var e=FO();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return d?jO(r,i-(e-c)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=o=void 0,a)}function b(){var e=FO(),r=p(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),u?h(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=MO(t)||0,IO(r)&&(u=!!r.leading,i=(d="maxWait"in r)?AO(MO(r.maxWait)||0,t):i,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:m(FO())},b}));const RO=({className:n,"data-testid":o,selectedOption:i,minimumCharacters:a=3,fetchOptions:l,placeholder:d="Enter here...",readOnly:f=!1,disabled:h=!1,error:p,valueExtractor:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y})=>{const[x,w]=g((()=>i?W(i):"")),[$,C]=g((()=>i?W(i):"")),[S,D]=g([]),[k,_]=g(!0),[O,E]=g(!1),[T,I]=g(!!i),[F,M]=g(i),A=s(l),j=e=>ct(void 0,void 0,void 0,(function*(){E(!1),_(!0);try{const t=yield A.current(e);C(e),D(t),_(!1)}catch(e){E(!0)}})),z=u(zO((e=>j(e)),500,{leading:!1,trailing:!0}),[]);c((()=>{A.current=l}),[l]),c((()=>{x&&x.length>=a&&x!==$?z(x):z.cancel(),""===x&&F&&(y&&y(void 0,void 0),P(),M(void 0)),i&&x!==W(i)&&I(!1)}),[x,i]),c((()=>{w(i?W(i):""),P(i),M(i)}),[i]);const R=e=>{w(e.target.value)},B=(e,t)=>{y&&y(e,t)},P=e=>{C(e?W(e):""),I(!!e),D([]),_(!0)},L=()=>{w(""),y&&y(void 0,void 0),P()},N=()=>{T||F?(P(F),w(W(F)),y&&y(F,V(F)),M(F)):L()},H=()=>!!x&&x.length>=a&&!T,W=e=>e?v?v(e):e.toString():"",V=e=>{if(e)return m?m(e):e},Y=()=>t(ip,{type:"text",value:x,onChange:R,placeholder:d,readOnly:f,disabled:h,allowClear:!0,onClear:L,styleType:"no-border",onBlur:x.length<a?N:void 0});return e(ed,{className:n,show:H(),error:p&&!H(),disabled:h,readOnly:f,testId:o,onBlur:N,children:[t(f?r:Ku,{children:Y()}),!f&&H()&&t(Qu,{}),t(t$,{listItems:S,onSelectItem:B,valueExtractor:m,listExtractor:b,itemsLoadState:O?"fail":k?"loading":"success",visible:H(),disableItemFocus:!0,onRetry:()=>j(x),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]})},BO=_.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,PO=_(tp)`
    position: absolute;
    right: 0;
    padding-left: ${Mi["spacing-8"]};
    margin-right: 0;
`,LO=_(Uu)`
    // space for clear icon
    padding-right: calc(1.25rem + ${Mi["spacing-16"]});
`,NO=r=>{var{selectedOptions:n,placeholders:o={from:"Select",to:"Select"},options:i,disabled:a,className:l,readOnly:u,error:d,"data-testid":f,id:h,enableSearch:p=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,listStyleWidth:C,onShowOptions:S,onHideOptions:D,onRetry:k,optionsLoadState:_={from:"success",to:"success"},optionTruncationType:O="middle",renderCustomSelectedOption:E,renderListItem:T,renderCustomCallToAction:I}=r,F=lt(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[M,A]=g(),[j,z]=g(),R=s(null),B={from:s(null),to:s(null)},[P,L]=g("none");c((()=>{A(null==n?void 0:n.from),z(null==n?void 0:n.to)}),[n]);const N=e=>t=>{t.stopPropagation(),t.preventDefault(),a||u||L("from"===e?"from":"to"===e&&M?"to":"from")},H=e=>{var t;const r="from"===e?M:j;if(!r)return"";if(w)return w(r);if(v){const e=v(r);return y?y(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""}return r.toString()},W=(e,t)=>{if("middle"===O){let r=0;return B[e]&&B[e].current&&(r=B[e].current.getBoundingClientRect().width),Wc.truncateOneLine(t,r,120,8)}return t},V=e=>{!e&&D&&D(),e&&S&&S()},Y=e=>{const r="from"===e?M:j;return r?E?E(r):t(Xu,{truncateType:O,children:W(e,H(e))}):t(Ju,{truncateType:O,children:W(e,o[e]||"")})},U=e=>t(Zu,{onClick:N(e),ref:B[e],$disabled:a,children:Y(e)});return e(ed,{show:"none"!==P,error:d&&!("none"!==P),disabled:a,readOnly:u,testId:f,onBlur:()=>{V(!1),L("none"),M&&j||(z(void 0),A(void 0))},className:l,children:[e(BO,{children:[t(LO,Object.assign({type:"button","data-testid":h||"selector",disabled:a,ref:R,onClick:N()},F,{children:e(qf,{currentActive:(()=>{switch(P){case"from":return"start";case"to":return"end";case"none":return P}})(),children:[U("from"),U("to")]})})),"none"===P&&M&&j&&!u&&!a&&t(PO,{onClick:e=>{e.stopPropagation(),A(void 0),z(void 0),$&&$({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear",children:t(rp,{"aria-hidden":!0})})]}),"none"!==P&&t(Qu,{}),(()=>{if("none"===P)return null;const e=i[P];if(e&&e.length>0){const r="from"===P?M:j;return t(t$,{listItems:e,onSelectItem:(e,t)=>((e,t,r)=>{var n;"from"===r?A(e):z(e),V(!1),R&&(null===(n=R.current)||void 0===n||n.focus()),$&&$({[r]:e},t),"from"===r?(z(void 0),L("to"),V(!0)):L("none")})(e,t,P),onDismiss:()=>(()=>{var e;L("none"),V(!1),R&&(null===(e=R.current)||void 0===e||e.focus()),M&&j||(z(void 0),A(void 0))})(),valueExtractor:v,listExtractor:x,listStyleWidth:C,visible:!0,enableSearch:p,searchPlaceholder:b,searchFunction:m,"data-testid":`${P}-dropdown-list`,selectedItems:r?[r]:[],onRetry:k,itemsLoadState:_[P],itemTruncationType:O,renderListItem:T,renderCustomCallToAction:I})}return null})()]})},HO=({selectedOption:e,placeholder:r="Select",options:n,disabled:o,error:i,className:a,"data-testid":l,id:u,enableSearch:d=!1,searchFunction:f,searchPlaceholder:h,valueExtractor:p,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:C="success",optionTruncationType:S="end",renderCustomSelectedOption:D,renderListItem:k,hideNoResultsDisplay:_,renderCustomCallToAction:O,onBlur:E,variant:T="default",readOnly:I,alignment:F,dropdownZIndex:M})=>{const[A,j]=g(e),[z,R]=g(!1),[B,P]=g(!1),[L]=g((()=>Hc.generate())),N=s(null),H=s(null),W=s(null);c((()=>{j(e)}),[e]);const V=(e,t)=>{var r;null===(r=H.current)||void 0===r||r.focus(),j(e),R(!1),Q(!1),null==y||y(e,t)},Y=()=>{z&&(R(!1),Q(!1))},U=()=>{B||z||P(!0)},K=e=>{B&&!z&&N.current&&!N.current.contains(e.relatedTarget)&&(P(!1),null==E||E())},q=()=>{var e;if(!A)return"";if(v)return v(A);if(p){const t=p(A);return m?m(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return A.toString()},G=e=>{if("middle"===S){let t=0;return W&&W.current&&(t=W.current.getBoundingClientRect().width),Wc.truncateOneLine(e,t,120,8)}return e},Q=e=>{e?null==x||x():null==w||w()};return t($k,{children:t(nd,{enabled:!I&&!o,isOpen:z,renderElement:()=>t(Of,{className:a,"data-testid":l,id:u,ref:N,tabIndex:-1,onFocus:U,onBlur:K,$focused:B,$disabled:o,$readOnly:I,$error:i,children:t(Kk,{ref:H,disabled:o,expanded:z,listboxId:L,popupRole:"listbox",readOnly:I,variant:T,children:t(Zu,{ref:W,$disabled:o,children:A?D?D(A):t(Xu,{truncateType:S,$variant:T,children:G(q())}):t(Ju,{truncateType:S,$variant:T,children:r})})})}),renderDropdown:({elementWidth:e})=>t(Vk,{listboxId:L,listItems:n,onSelectItem:V,onDismiss:Y,valueExtractor:p,listExtractor:b,enableSearch:d,searchPlaceholder:h,searchFunction:f,selectedItems:A?[A]:[],onRetry:$,itemsLoadState:C,itemTruncationType:S,renderListItem:k,hideNoResultsDisplay:_,renderCustomCallToAction:O,variant:T,width:e}),onOpen:()=>{R(!0),Q(!0),P(!0)},onClose:e=>{R(!1),Q(!1),"click"!==e&&(P(!1),null==E||E())},onDismiss:()=>{var e;null===(e=H.current)||void 0===e||e.focus(),R(!1),Q(!1)},clickToToggle:!0,offset:8,alignment:F,fitAvailableHeight:!0,customZIndex:M})})},WO=_.div`
    overflow: hidden;
    border: ${Fi["width-010"]} ${Fi.solid} ${Ei.border};
    border-radius: ${Ai.sm};
    background: ${Ei.bg};
    padding: ${Mi["spacing-16"]};
    min-width: 23rem;

    ${zi.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${ji["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${zi.MaxWidth.xs} {
        width: calc(100vw - ${ji["xs-margin"]} * 2);
    }

    ${zi.MaxWidth.xxs} {
        width: calc(100vw - ${ji["xxs-margin"]} * 2);
    }
`,VO=_.div`
    display: flex;
    align-items: baseline;
`,YO=_.div`
    margin: 0 0.5rem;
`,UO=_.div`
    ${e=>"small"===e.$variant?Ti["body-md-regular"]:Ti["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return O`
                    ${Ri(1)}
                `}}
    overflow: hidden;
`,KO=_(UO)`
    color: ${Ei["text-subtler"]};
`,qO=r=>{var{alignment:n="left",className:o,disabled:i,dropdownZIndex:a,error:l,histogramSlider:u,id:d,onBlur:f,onChange:h,onChangeEnd:p,optionTruncationType:m="end",placeholder:b="Select",rangeLabelPrefix:v,rangeLabelSuffix:y,readOnly:x,renderRangeLabel:w,value:$}=r,C=lt(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:S,bins:D=[],renderEmptyView:k,ariaLabels:_}=u,[O,E]=g(Y()),[T,I]=g(!1),[F,M]=g(!1),[A]=g((()=>Hc.generate())),j=D.map((e=>e.minValue)),z=Math.min(...j),R=s(null),B=s(null),P=s(null),L=C["data-testid"]||"select-histogram";c((()=>{$!==O&&E(Y())}),[$]);const N=e=>{E(e),null==h||h(e)},H=e=>{E(e),null==p||p(e)},W=()=>{F||T||M(!0)},V=e=>{F&&!T&&R.current&&!R.current.contains(e.relatedTarget)&&(M(!1),null==f||f())};function Y(){return null!=$?$:[z,z+S]}const U=t=>w?w(t):e(Ni.BodyBL,{children:[v,t,y]});return t($k,{children:t(nd,{enabled:!x&&!i,isOpen:T,renderElement:()=>t(Of,{className:o,"data-testid":L,id:d,ref:R,tabIndex:-1,onFocus:W,onBlur:V,$focused:F,$disabled:i,$readOnly:x,$error:l,children:t(Kk,{ref:B,disabled:i,expanded:T,listboxId:A,popupRole:"dialog",readOnly:x,variant:"default",children:t(Zu,{ref:P,$disabled:i,children:j&&0!==j.length?e(VO,{children:[U(O[0]),t(YO,{children:"-"}),U(O[1])]}):t(KO,{truncateType:m,$variant:"default",children:b})})})}),renderDropdown:({elementWidth:e})=>t(WO,{style:{width:e},children:t(Jh,{interval:S,value:O,bins:D,onChange:N,onChangeEnd:H,showRangeLabels:!1,renderEmptyView:k,ariaLabels:_})}),onOpen:()=>{I(!0)},onClose:()=>{I(!1)},onDismiss:()=>{var e;null===(e=B.current)||void 0===e||e.focus(),I(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:a})})},GO=e=>{var{value:r,ariaLabel:n,onChange:o,onChangeEnd:i}=e,a=lt(e,["value","ariaLabel","onChange","onChangeEnd"]);const[s,l]=g(u());c((()=>{r!==s[0]&&l(u())}),[r]);function u(){return null!=r?[r]:[0]}return t(Kh,Object.assign({},a,{value:s,numOfThumbs:1,onChange:e=>{const[t]=e;l([t]),null==o||o(t)},onChangeEnd:e=>{const[t]=e;l([t]),null==i||i(t)},ariaLabels:n?[n]:void 0}))},QO=_.p`
    text-align: right;
    ${Ti["body-sm-semibold"]}
    color: ${Ei["text-subtler"]};
`,ZO=({value:e,maxLength:n,renderCustomCounter:i})=>{const[a,s]=g("");c((()=>{s(l(`${e||""}`))}),[e,n]);const l=e=>{if(i)return i(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return t(r,{children:o.isValidElement(a)?a:t(QO,{"data-testid":"counter-label",children:a})})},XO=_.div`
    display: flex;
    flex-direction: column;
`,JO=_.textarea`
    border: ${Fi["width-010"]} ${Fi.solid} ${Ei.border};
    border-radius: ${Ai.sm};
    background: ${Ei.bg};
    outline: none;
    overflow: hidden;

    display: block;
    padding: ${Mi["spacing-12"]} ${Mi["spacing-16"]};
    width: 100%;

    ${Ti["body-baseline-regular"]}
    color: ${Ei.text};

    :focus,
    :active {
        outline-offset: -1px;
        outline: ${Fi["width-020"]} ${Fi.solid}
            ${Ei["border-focus"]};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ei["text-subtler"]};
    }

    ${e=>e.readOnly?O`
                border-color: transparent;
                background: transparent !important;

                :focus,
                :active {
                    outline-color: ${Ei["border-focus"]};
                }
            `:e.disabled?O`
                background: ${Ei["bg-disabled"]};
                cursor: not-allowed;

                :focus,
                :active {
                    outline-color: ${Ei["border-disabled"]};
                }
            `:e.$error?O`
                border-color: ${Ei["border-error"]};

                :focus,
                :active {
                    outline-color: ${Ei["border-error-focus"]};
                }
            `:void 0}
`,eE=o.forwardRef(((e,r)=>{var{value:n,disabled:o,error:i,rows:a=5,prefix:s,transformValue:l,onChange:u,maxLength:d}=e,f=lt(e,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[h,p]=g(n);c((()=>{p(n)}),[n]);return t(JO,Object.assign({ref:r,disabled:o,value:s?s+(null!=h?h:""):h,onChange:e=>{let t=e.target.value;if(s){t.startsWith(s)||(t=s+t.trimStart()),t.length<s.length&&(t=s);if((e.target.selectionStart||0)<s.length)return void e.preventDefault();const r=t.slice(s.length),n=l?l(r):r;if(p(n),e.target.value=s+n,u){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});u(t)}}else{const r=l?l(null!=t?t:""):t;p(r),e.target.value=r,u&&u(e)}},onKeyDown:e=>{if(!s)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=s.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=s.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(s.length,s.length)})))},$error:i,rows:a,maxLength:s&&d?s.length+d:d},f))}));o.forwardRef(((r,n)=>{var{value:o,disabled:i,rows:a=5,onChange:s,transformValue:l,prefix:u,maxLength:d,renderCustomCounter:f}=r,h=lt(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[p,m]=g(o);c((()=>{m(o)}),[o]);return e(XO,{children:[t(eE,Object.assign({ref:n,disabled:i,value:p,rows:a||5,onChange:e=>{const t=e.target.value;m(t),s&&s(e)},prefix:u,transformValue:l,maxLength:d},h)),d&&t(ZO,{value:p,maxLength:d,renderCustomCounter:f})]})}));const tE=_.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Mi["spacing-4"]};
`,rE=_.div`
    display: flex;
    flex: 1;
    margin-right: ${Mi["spacing-12"]};
`,nE=_(_u)`
    margin-top: 0;
`,oE=o.forwardRef(((n,o)=>{const{label:i,value:a,errorMessage:s,id:l="form-textarea","data-error-testid":u,"data-testid":d,onChange:f,layoutType:h,mobileCols:p,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,transformValue:D,prefix:k=""}=n,_=lt(n,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[O,E]=g(a);c((()=>{E(a)}),[a]);return e(Hu,{id:l,label:i,disabled:_.disabled,layoutType:h,mobileCols:p,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,children:[t(eE,Object.assign({id:`${l}-base`,"data-testid":d||l,value:O,error:!!s,onChange:e=>{const t=e.target.value;E(t),f&&f(e)},ref:o,prefix:k,transformValue:D},_)),s||_.maxLength?e(tE,{children:[s&&t(rE,{children:t(nE,{"data-testid":u||(l?`${l}-error-message`:"error-message"),children:s})}),_.maxLength&&t(ZO,{value:O,maxLength:_.maxLength,renderCustomCounter:_.renderCustomCounter})]}):t(r,{})]})})),iE=_.div`
    position: relative;
`,aE=_(Ef)`
    height: 3rem;
    gap: ${Mi["spacing-8"]};
`,sE=_(Tf)`
    display: block;
    width: 100%;
    flex: 1;
`;var lE,cE;!function(e){e.AM="AM",e.PM="PM"}(lE||(lE={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,o]=e.split(":"),i=parseInt(n,10),a=parseInt(o,10);if(isNaN(i)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*i+a,l=s%t,c=0===l?s:r?s+(t-l):s-l,u=c%60;return`${Math.floor(c/60).toString().padStart(2,"0")}:${u.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let o=$c(e,n),i=$c(t,n);o.isSame(i)&&(i=i.add(1,"day"));const a=[];for(;o.isBefore(i);)a.push(o.format(r)),o=o.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:lE.AM};if(!t)return r;try{if("24hr"===e){const n=fE(t,e);r.minute=Wc.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period=lE.AM,r.hour=0===o?"12":Wc.padValue(o.toString())):(r.period=lE.PM,r.hour=12===o?o.toString():Wc.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=fE(t,e);r.hour=Wc.padValue(n),r.minute=Wc.padValue(o),r.period="am"===i.toLowerCase()?lE.AM:lE.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Wc.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return Wc.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Wc.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?Wc.padValue(n.toString()):13===n?Wc.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===lE.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return Wc.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:o=""}=fE(e,t),i=Wc.padValue(r);let a=`${i}:${Wc.padValue(n)}`;return"12hr"===t?(a+=o.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&i<12&&(i+=12),"am"===r&&12===i&&(i=0),hE(i,o)}return e},e.generateTimings=(t,r="12hr",n,o)=>{const i=[];let a=0,s=1440-t;for(n&&(a=e.timeToMinutes(n)),o&&(s=e.timeToMinutes(o));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=hE(e,n,t);i.push(r)}else{const t=hE(e,n);i.push(t)}a+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&o<12?o+=12:("am"===a&&12===o||24===o)&&(o=0),hE(o,i);a?0===o||24===o?(a="am",o=12):o>12&&(a="pm",o-=12):(a=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return hE(o,i,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let o="",i=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<i)i=Math.abs(r),o=t;else if(r>0)break}return o},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&12!==i&&(i+=12),"am"===r&&12===i&&(i=0),60*i+o}}(cE||(cE={}));const uE=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},dE=e=>{const t=parseInt(e);return t>=0&&t<=59},fE=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!uE(r[0],t)||!dE(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!uE(r[0],t)||!dE(r[1]))throw n;return{hour:r[0],minute:r[1]};var o},hE=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,pE=_.div`
    padding: ${Mi["spacing-8"]} ${Mi["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Ei["bg-error"](e),r=Ei["border-error"](e);break;case"success":t=Ei["bg-success"](e),r=Ei["border-success"](e);break;case"warning":default:t=Ei["bg-warning"](e),r=Ei["border-warning"](e);break;case"info":t=Ei["bg-info"](e),r=Ei["border-info"](e);break;case"description":t=Ei["bg-strong"](e),r=Ei["border-strong"](e)}return O`
            background: ${t};
            border-left: ${Fi["width-020"]} ${Fi.solid}
                ${r};
        `}}

    color: ${Ei.text};
    ${e=>"small"===e.$sizeType?fu({textSize:"body-sm"}):fu({textSize:"body-md"})}
`,gE=_.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Mi["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Ei["icon-error"](e);break;case"success":t=Ei["icon-success"](e);break;case"warning":default:t=Ei["icon-warning"](e);break;case"info":t=Ei["icon-info"](e);break;case"description":t=Ei["icon-subtle"](e)}return O`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,mE=_(Ni.LinkSM)`
    ${e=>"small"===e.$sizeType?O`
                ${Ti["body-sm-semibold"]}
                margin-top: ${Mi["spacing-4"]};
            `:O`
                ${Ti["body-md-semibold"]}
                margin-top: ${Mi["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Mi["spacing-4"]};
    }
`,bE=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,vE=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return O`
                margin-bottom: ${Mi["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,yE=_.button`
    ${e=>"small"===e.$sizeType?O`
                ${Ti["body-sm-semibold"]}
            `:O`
                ${Ti["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Mi["spacing-4"]};
    margin-top: ${Mi["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Ei["text-primary"]};
`,xE=_(he)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Ii["duration-350"]} ${Ii["ease-standard"]};
`,wE=r=>{var{type:n,className:o,children:i,actionLink:a,actionLinkIcon:s,sizeType:l="default",showIcon:u=!1,customIcon:d,maxCollapsedHeight:f}=r,h=lt(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[p,m]=g(!1),[b,v]=g(!1),{height:y,ref:x}=gc();c((()=>{w()}),[f,y]);const w=()=>{m(!f),v($())},$=()=>!(!y||!f)&&y>f;return e(pE,{className:o,$type:n,$sizeType:l,"data-testid":h["data-testid"],children:[u&&t(gE,{$sizeType:l,$type:n,children:(()=>{if(n&&d)return d;switch(n){case"success":return t(_e,{});case"warning":return t(ke,{});case"error":return t(pe,{});case"info":case"description":return t(z,{});default:return null}})()}),e(bE,{children:[e(vE,{$maxCollapsedHeight:$()?f:void 0,$showMore:p,$hasActionLink:!!a,children:[t("div",{ref:x,children:i}),a?e(mE,Object.assign({"data-testid":"action-link",$type:n,$sizeType:l},a,{children:[a.children,s||t(De,{})]})):null]}),b&&e(yE,{$sizeType:l,$type:n,type:"button",onClick:()=>m(!p),children:["Show ",p?"less":"more",t(xE,{$expanded:p})]})]})]})},$E=_.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?O`
                    color: ${Ei["icon-selected-disabled"]};
                `:O`
                    color: ${Ei["icon-disabled-subtle"]};
                `:e.$active?O`
                color: ${Ei["icon-selected"]};
            `:O`
            color: ${Ei["icon-subtle"]};
        `};
`,CE=O`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${Ti.Spec["weight-regular"]};
        ${e=>e.$size&&Ti[`${e.$size}-regular`]}
        color: ${Ei.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,SE=_.ol`
    ${CE}

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
`,DE=_.ul`
    ${CE}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,kE=e=>{var{size:r,bulletType:n,bottomMargin:o,children:i}=e,a=lt(e,["size","bulletType","bottomMargin","children"]);return t(DE,Object.assign({$size:r,$bulletType:n,$bottomMargin:o},a,{children:i}))};kE.displayName="TextList.Ul";const _E=e=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:a}=e,s=lt(e,["size","counterType","counterSeparator","bottomMargin","children"]);return t(SE,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},s,{children:a}))};_E.displayName="TextList.Ol";const OE=kE,EE=_.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Ei.bg};

    ${e=>{if(!e.$indicator)return O`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return O`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?O`
                            border-color: ${Ei["border-error"]};
                        `:O`
                            border-color: ${Ei["border-error"]};

                            &:has(${AE}:hover) {
                                background: ${Ei["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?O`
                            border: none;
                            background: ${Ei["bg-selected-disabled"]};
                        `:O`
                            border: none;
                        `:e.$selected?O`
                        border: none;
                        background: ${Ei["bg-selected"]};

                        &:has(${AE}:hover) {
                            background: ${Ei["bg-selected-hover"]};

                            & ${IE} {
                                color: ${Ei["text-selected-hover"]};
                            }

                            & ${WE} {
                                color: ${Ei["icon-selected-hover"]};
                            }
                        }
                    `:O`
                    border: none;

                    &:has(${AE}:hover) {
                        background: ${Ei["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?O`
                            border-color: ${Ei["border-error"]};
                        `:O`
                            border-color: ${Ei["border-error"]};

                            &:has(${AE}:hover) {
                                background: ${Ei["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?O`
                            border-color: ${Ei["border-selected-disabled"]};
                            background: ${Ei["bg-selected-disabled"]};
                        `:O`
                            border-color: ${Ei["border-disabled"]};
                            background: ${Ei["bg-disabled"]};
                        `:e.$selected?O`
                        border-color: ${Ei["border-selected"]};
                        background: ${Ei["bg-selected"]};

                        &:has(${AE}:hover) {
                            background: ${Ei["bg-selected-hover"]};

                            & ${IE} {
                                color: ${Ei["text-selected-hover"]};
                            }

                            & ${WE} {
                                color: ${Ei["icon-selected-hover"]};
                            }
                        }
                    `:O`
                    border-color: ${Ei.border};

                    &:has(${AE}:hover) {
                        background: ${Ei["bg-hover-subtle"]};
                    }
                `}
`,TE=_.input`
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
`,IE=_.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?O`
                    color: ${Ei["text-selected-disabled"]};
                `:O`
                    color: ${Ei["text-disabled"]};
                `:e.$selected?O`
                color: ${Ei["text-selected"]};
            `:O`
            color: ${Ei.text};
        `}
`,FE=_.label`
    ${Ti["body-baseline-regular"]}
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
`,ME=_.div`
    ${Ti["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Ti["body-md-semibold"]}
    }
`,AE=_.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,jE=_.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,zE=_.button`
    color: ${e=>e.$disabled?Ei["text-disabled"]:Ei["text-error"]};
    white-space: nowrap;
    ${Ti["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,RE=_.button`
    color: ${e=>e.disabled?Ei["text-disabled"]:Ei["text-primary"]};
    ${Ti["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Ei.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,BE=_.div`
    width: 100%;
    color: ${e=>e.$disabled?Ei["text-disabled"]:Ei["text-error"]};
    border: none;
    background: ${Ei.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,PE=_(wE)`
    width: 100%;
    user-select: none;
`,LE=_.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Ei.bg};
    ${fu({textSize:"body-md"})}

    ${e=>e.$disabled?O`
                color: ${Ei["text-disabled"]};
            `:e.$selected?O`
                color: ${Ei["text-selected"]};
            `:O`
                color: ${Ei.text};
            `}
`,NE=_(Ni.BodyMD)`
    color: ${e=>e.$disabled?Ei["text-disabled"]:Ei["text-error"]};
`,HE=_(OE)`
    color: ${e=>e.$disabled?Ei["text-disabled"]:Ei["text-error"]};
`,WE=_((({type:e,active:r=!1,disabled:n,className:o})=>{let i;switch(e){case"checkbox":i=t(r?xe:ye,{});break;case"radio":i=t(r?Ee:Oe,{});break;case"tick":i=t(we,{});break;case"cross":i=t(te,{});break;default:i=null}return t($E,{className:o,$active:r,$disabled:n,children:i})}))`
    ${e=>e.$disabled?e.$selected?O`
                    color: ${Ei["icon-selected-disabled"]};
                `:O`
                    color: ${Ei["icon-disabled-subtle"]};
                `:e.$selected?O`
                color: ${Ei["icon-selected"]};
            `:O`
            color: ${Ei["icon-subtle"]};
        `};
`,VE=_(Cw.div)`
    position: absolute;
    top: calc(3rem + ${Mi["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${zi.MaxWidth.xxs} {
        max-width: 100%;
    }
`,YE=_.div`
    position: relative;
    width: 100%;
    padding: ${Mi["spacing-8"]} ${Mi["spacing-20"]}
        ${Mi["spacing-24"]} ${Mi["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Ei.bg};
    border: ${Fi["width-010"]} ${Fi.solid} ${Ei.border};
    border-radius: ${Ai.sm};
`,UE=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${zi.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,KE=_.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Mi["spacing-16"]};
    gap: ${Mi["spacing-8"]} ${Mi["spacing-16"]};

    ${zi.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${Mi["spacing-32"]};
    }
`,qE=_.div`
    display: flex;
    align-items: center;
    margin-right: ${Mi["spacing-32"]};

    ${zi.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,GE=_.div`
    display: flex;
    gap: ${Mi["spacing-8"]};

    ${zi.MaxWidth.lg} {
        flex-direction: column;
    }

    ${zi.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,QE=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${zi.MaxWidth.xxs} {
        width: 6rem;
    }
`,ZE=_(lu)`
    width: 5rem;
    padding: ${Mi["spacing-16"]} 0;
    color: ${Ei.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Ei["icon-hover"]};
    }
`,XE=_(Ni.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,JE=_(Of)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${zi.MaxWidth.xxs} {
        width: 100%;
    }
`,eT=_(Tf)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,tT=_((({type:n="checkbox",indicator:o,checked:i,styleType:l="default",children:u,childrenMaxLines:d,subLabel:f,disabled:h,error:p,name:m,id:b,className:v,compositeSection:y,removable:x,onRemove:w,"data-testid":$,onChange:C,useContentWidth:S})=>{const{collapsible:D=!0,errors:k,children:_,initialExpanded:O}=y||{},[E,T]=g(i),[I,F]=g(!!O),M=a((()=>{const e=Array.isArray(k)&&(null==k?void 0:k.length)>0,t=!Array.isArray(k)&&!!k;return e||t}),[k]),[A]=g(Hc.generate()),j=b?`${b}`:`tg-${A}`,z=s(null);c((()=>{T(i)}),[i]),c((()=>{E&&F(null==O||O)}),[E]);const R=()=>{h||F(!I)},B=()=>{h||!w||w()},P=()=>{let e;switch(n){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=n}return t(WE,{type:e,active:E,disabled:h,$selected:E,$disabled:h})},L=()=>{if(!f)return null;let e;return e="function"==typeof f?f():f,t(ME,{"data-id":"toggle-sublabel",children:e})},N=n=>e(r,{children:[t(NE,{weight:"semibold",$disabled:h,children:"Error"}),t(HE,{$disabled:h,children:null==n?void 0:n.map(((e,r)=>t("li",{id:`${j}-error-list-item-${r}`,children:t(NE,{weight:"semibold",$disabled:h,children:e})},r)))})]});return e(EE,{$selected:E,$disabled:h,className:v,$styleType:l,$error:p,$indicator:o,$useContentWidth:S,id:b,"data-testid":$,children:[e(AE,{id:`${j}-header-container`,$disabled:h,$error:p,$selected:E,$indicator:o,$styleType:l,children:[e(jE,{$addPadding:x,children:[t(TE,{ref:z,name:m,id:`${j}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:h,onChange:e=>{if(!h){if(C)return void C(e);switch(n){case"checkbox":T((e=>!e));break;case"radio":case"yes":case"no":E||T(!0)}}},checked:E}),o&&P(),e(IE,{$selected:E,$disabled:h,children:[t(FE,{htmlFor:`${j}-input`,"data-testid":`${j}-toggle-label`,$maxLines:d,children:u}),f&&L()]})]}),x&&t(zE,{type:"button",$disabled:h,onClick:B,id:`${j}-remove-button`,children:"Remove"})]}),_&&e("div",{children:[(!D||I)&&t(LE,{"data-id":"toggle-composite-children",$isFinalItem:!D,$disabled:h,children:_}),D&&!I&&M&&t(BE,{$disabled:h,onClick:R,id:`${j}-error-alert`,children:t(PE,{type:h?"description":"error",className:v,showIcon:!0,children:Array.isArray(k)?N(k):k})}),D&&e(RE,{$paddingTopRequired:!I&&!M,disabled:h,onClick:R,"data-testid":I?"collapse-button":"expand-button",children:[I?"Show less":"Show more",t(I?Se:re,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,rT=_(Od.Small)`
    width: 7rem;

    ${zi.MaxWidth.sm} {
        flex: 1;
    }

    ${zi.MaxWidth.xxs} {
        width: 100%;
    }
`;var nT,oT,iT;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(nT||(nT={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(oT||(oT={})),function(e){e.AM="am",e.PM="pm"}(iT||(iT={}));const aT=({id:r,value:n,show:o,format:i,onChange:a,onCancel:l})=>{var d;const f=cE.getTimeValues(i,n),[h,p]=g(f.hour),[m,b]=g(f.minute),[v,y]=g(f.period),x=s(null),w=s(null),$=gc();c((()=>{if(o&&x.current&&x.current.focus(),o){const{hour:e,minute:t,period:r}=cE.getTimeValues(i,n);p(e),b(t),y(r)}}),[o,n,i]),c((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",C),t&&t.addEventListener("keydown",C),()=>{e&&e.removeEventListener("keydown",C),t&&t.removeEventListener("keydown",C)}}),[]);const C=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=u((e=>{switch(e.currentTarget.name){case nT.MINUTE_UP:b(cE.updateMinutes(m,"add"));break;case nT.MINUTE_DOWN:b(cE.updateMinutes(m,"minus"));break;case nT.HOUR_UP:p(cE.updateHours(h,"add"));break;case nT.HOUR_DOWN:p(cE.updateHours(h,"minus"))}}),[h,m]),D=e=>{e.target.select()},k=e=>{const t=e.target.value;switch(e.target.name){case oT.HOUR:t.length<=2&&p(t);break;case oT.MINUTE:t.length<=2&&b(t)}},_=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case oT.HOUR:{const r=t>23||t<0?f.hour:cE.convertHourTo12HourFormat(e.target.value);p(r);break}case oT.MINUTE:{const r=t>59||t<0?f.minute:e.target.value;b(Wc.padValue(r));break}}},O=e=>{switch(e.target.name){case iT.AM:y(lE.AM);break;case iT.PM:y(lE.PM)}},E=e=>r?`${r}-${e}`:e,T=iw({opacity:o?1:0,height:o?(null!==(d=$.height)&&void 0!==d?d:0)+32+2:0});return t(VE,{"data-testid":"animated-dropdown-wrapper",style:T,children:e(YE,{ref:$.ref,"data-testid":E("timepicker-dropdown"),inert:o?void 0:"",children:[e(UE,{children:[e(qE,{children:[e(QE,{children:[t(ZE,{"aria-label":"increase hour",name:nT.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":E("hour-increment-button"),children:t(Se,{})}),t(JE,{children:t(eT,{"aria-label":"hour",type:"number",name:oT.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:h,onFocus:D,onChange:k,onBlur:_,min:1,max:12,placeholder:"HH","data-testid":E("hour-input")})}),t(ZE,{"aria-label":"decrease hour",name:nT.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":E("hour-decrement-button"),children:t(re,{})})]}),t(XE,{children:":"}),e(QE,{children:[t(ZE,{"aria-label":"increase minute",name:nT.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":E("minute-increment-button"),children:t(Se,{})}),t(JE,{children:t(eT,{"aria-label":"minute",type:"number",name:oT.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:m,onChange:k,onBlur:_,onFocus:D,min:0,max:59,placeholder:"MM","data-testid":E("minute-input")})}),t(ZE,{"aria-label":"decrease minute",name:nT.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":E("minute-decrement-button"),children:t(re,{})})]})]}),e(GE,{children:[t(tT,{checked:v===lE.AM,name:iT.AM,type:"radio",onChange:O,"data-testid":E("am-toggle"),"aria-label":"AM",children:"AM"}),t(tT,{checked:v===lE.PM,name:iT.PM,type:"radio",onChange:O,"data-testid":E("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e(KE,{children:[t(rT,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:l,"data-testid":E("cancel-button"),children:"Cancel"}),t(rT,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===i?cE.convertTo24HourFormat({hour:h,minute:m,period:v}):`${h}:${m}${v}`,a(e)},disabled:""===h||""===m,"data-testid":E("confirm-button"),children:"Done"})]})]})})},sT=r=>{var{id:n,disabled:o=!1,error:i,value:a,format:l="24hr",readOnly:u,onChange:d,onFocus:f,onBlur:h}=r,p=lt(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,b]=g(!1),[v,y]=g(!1),[x,w]=g(""),[$,C]=g(""),S=s(null);c((()=>{a&&(w(a.start),C(a.end))}),[a]),Yc("mousedown",(function(e){o||O(e)}),"document"),Yc("keyup",(function(e){if("Tab"===e.code)O(e)}),"document");const D=()=>{_()},k=()=>{m||v||f&&f()},_=()=>{b(!1),y(!1),h&&h()},O=e=>{S.current&&!S.current.contains(e.target)&&(v||m)&&_()};return t(iE,Object.assign({ref:S,id:n},p,{children:e(aE,{$disabled:o,$error:i,$readOnly:u,children:[e(qf,{error:i,currentActive:m?"start":v?"end":"none",children:[t(sE,{onFocus:()=>{o||u||m||(y(!1),b(!0),k())},readOnly:!0,placeholder:"From",value:cE.formatDisplayValue(x,l),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(sE,{onFocus:()=>{o||u||v||(b(!1),y(!0),k())},readOnly:!0,placeholder:"To",value:cE.formatDisplayValue($,l),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),t(aT,{id:n,show:m,value:x,format:l,onCancel:D,onChange:e=>{b(!1),y(!0),w(e);d&&d({start:e,end:$})}}),t(aT,{id:n,show:v,value:$,format:l,onCancel:D,onChange:e=>{y(!1),C(e);d&&d({start:x,end:e}),""==x?b(!0):h&&h()}})]})}))},lT=_(Ef)`
    height: 3rem;
    gap: ${Mi["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${Mi["spacing-20"]});
`,cT=r=>{var{id:n,disabled:o=!1,error:i,value:l,format:d="12hr",readOnly:f,onChange:h,onFocus:p,onBlur:m,alignment:b="left",dropdownZIndex:v,startLimit:y,endLimit:x,interval:w=15}=r,$=lt(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[C]=g((()=>Hc.generate())),[S,D]=g(null),[k,_]=g(!1),[O,E]=g(""),[T,I]=g(""),[F,M]=g(""),[A,j]=g(""),[z,R]=g(""),B=s(null),P=s(null),L=s(null),N=a((()=>cE.generateTimings(w,d,y,x)),[w,d,y,x]),H=a((()=>{if(""===A)return N;const e=cE.findClosestFlooredTime(A,N);return e?N.slice(N.indexOf(e)):[]}),[N,A]),W=u((e=>cE.parseInput(e,d)),[d]);c((()=>{var e,t;if(l){const r=null!==(e=W(l.start))&&void 0!==e?e:"",n=null!==(t=W(l.end))&&void 0!==t?t:"";I(r),M(n),j(r),R(n)}}),[l,W]),c((()=>{if(i)return void _(!1);const e=W(T),t=W(F);if(void 0===e)E("Invalid start time");else if(void 0===t)E("Invalid end time");else{if(!(""!==e&&""!==t&&cE.to24Hour(t)<cE.to24Hour(e)))return E(""),void(document.activeElement!==P.current&&document.activeElement!==L.current||_(!0));E("End time must be after start time")}_(!1)}),[T,F,W,i]);const V=e=>{o||f||(S||k||null==p||p(),D(e),_(!0))},Y=e=>{var t;o||f||(D(e),_(!0),null===(t=("start"===e?P:L).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===S?K(T):"end"===S&&(k&&q(F),null===(t=L.current)||void 0===t||t.blur());break;case"Tab":G(T,F,{})}}const K=e=>{G(e,F,{goToNextInput:!0})},q=e=>{G(T,e,{triggerOnBlur:!0})},G=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var o,i,a;const s=null!==(o=W(e))&&void 0!==o?o:A,l=null!==(i=W(t))&&void 0!==i?i:z;I(s),M(l);s===A&&l===z||null==h||h({start:s,end:l}),r&&void 0!==W(e)&&(D("end"),null===(a=L.current)||void 0===a||a.select()),n&&(D(null),_(!1),null==m||m()),j(s),R(l)},Q=e=>{e.stopPropagation(),I(""),M(""),j(""),R("");null==h||h({start:"",end:""}),D(null),_(!1)},Z=e=>{B.current&&!B.current.contains(e.relatedTarget)&&S&&!k&&G(T,F,{triggerOnBlur:!0})},X=()=>{if(!f&&!o&&((null==T?void 0:T.length)>0||(null==F?void 0:F.length)>0))return t(PO,{onClick:Q,type:"button","aria-label":"Clear",children:t(rp,{"aria-hidden":!0})})};return e(iE,Object.assign({id:n},$,{children:[t($k,{children:t(nd,{enabled:!f&&!o,isOpen:k,renderElement:()=>e(lT,{ref:B,$disabled:o,$error:i||!!O,$readOnly:f,onBlur:Z,children:[e(qf,{error:i||!!O,currentActive:null===S?"none":S,children:[t(sE,{ref:P,onFocus:()=>V("start"),placeholder:"start"===S?"hh:mm":"From",onChange:e=>I(e.target.value),value:T,disabled:o,readOnly:f,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":k,"aria-controls":C,"aria-autocomplete":"list"}),t(sE,{ref:L,onFocus:()=>V("end"),placeholder:"end"===S?"hh:mm":"To",onChange:e=>M(e.target.value),value:F,disabled:o,readOnly:f,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":k,"aria-controls":C,"aria-autocomplete":"list"})]}),X()]}),renderDropdown:()=>{if(k)return t(Vk,"start"===S?{listItems:N,onSelectItem:K,selectedItems:[T],disableItemFocus:!0,topScrollItem:cE.findClosestFlooredTime(W(T),N),listboxId:C}:{listItems:H,onSelectItem:q,selectedItems:[F],disableItemFocus:!0,topScrollItem:cE.findClosestFlooredTime(W(F),H),listboxId:C})},onClose:e=>{"outside-press"===e?(D(null),_(!1),null==m||m()):G(T,F,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===S?P:L).current)||void 0===e||e.focus(),_(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:v})}),!i&&O&&t(_u,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:O})]}))},uT=e=>{var{variant:r="dial"}=e,n=lt(e,["variant"]);return t("combobox"===r?cT:sT,Object.assign({},n))};_.div`
    position: relative;
`;const dT=_(Tf)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,fT=r=>{var{id:n,disabled:o=!1,readOnly:i=!1,error:a,value:l,placeholder:c,format:d="24hr",onChange:f,onFocus:h,onBlur:p}=r,m=lt(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[b,v]=g(!1),y=s(null);Yc("mousedown",(function(e){o||i||$(e)}),"document"),Yc("keyup",(function(e){if("Tab"===e.code)$(e)}),"document");const x=()=>{o||i||b||(v(!0),h&&h())};const w=()=>{v(!1),p&&p()},$=e=>{y.current&&!y.current.contains(e.target)&&b&&w()},C=u((()=>"12hr"===d?"HH:MMam":"HH:MM"),[d,c]);return e(Ef,Object.assign({ref:y,id:n,$readOnly:i,$disabled:o,$error:a},m,{children:[t(dT,{onFocus:x,focused:b,readOnly:!0,placeholder:c||C(),value:cE.formatDisplayValue(l,d),disabled:o,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),t(aT,{id:n,show:b,value:l,format:d,onCancel:()=>{w()},onChange:e=>{f&&f(e),w()}})]}))},hT=_(p$)`
    margin-right: 0.5rem;
`,pT=_(ip)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,gT=_(pT)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,mT=_(Ni.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return O`
                color: ${Ei["text-disabled"]};
            `}}
`,bT=_.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,vT=_(Ni.BodyBL)``,yT=n=>{var{disabled:o,error:i,value:a,onChange:l,onBlur:u,onChangeRaw:d,onBlurRaw:f,readOnly:h,placeholder:p="00-8888",autoComplete:m}=n,b=lt(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[v,y]=g(""),[x,w]=g(""),[$,C]=g("none"),S=s(null),D=s(null),k=s(null),_=s(v),O=s(x),E=s($),T=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),I=Kc({ref:D,formatter:T}),F=Kc({ref:k,formatter:T}),M=e=>{_.current=e,y(e)},A=e=>{O.current=e,w(e)},j=e=>{E.current=e,C(e)};c((()=>{"floor"===$&&3===v.length&&k.current&&k.current.focus()}),[v]),c((()=>{N(a)}),[a]);const z=e=>{j(e.target.name),e.target.select()},R=e=>{const t=e.target.name,r=e.target.value,n=L(r);"floor"===t?(M(n),n!==v&&H(n,t)):"unit"===t&&(A(n),n!==x&&H(n,t))},B=e=>{const t=e.target.name;if("floor"===t){const e=I();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),M(r),H(r,t)}else if("unit"===t){const e=F();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),A(r),H(r,t)}},P=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===$&&0===x.length&&(null===(t=D.current)||void 0===t||t.focus())},L=e=>/^[0-9]$/.test(e)?Wc.padValue(e,!0):e.toLocaleUpperCase(),N=e=>{if(e!==xT)if(void 0===e||0===e.length)M(""),A("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];M("floor"===$?e:L(e)),A("unit"===$?r:L(r))}}},H=(e,t)=>{if(!l&&!d)return;const r={floor:_.current,unit:O.current};if(r[t]=e,l){const e=V(r);l(e)}d&&d([r.floor,r.unit])},W=()=>{if(!u&&!f)return;const e={floor:L(_.current),unit:L(O.current)};if(u){const t=V(e);u(t)}f&&f([e.floor,e.unit])},V=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":xT},Y=e=>e.split("-");return e(Ef,Object.assign({},b,{ref:S,onClick:()=>{"none"===$&&D.current&&D.current.focus()},$disabled:o,$error:i,$readOnly:h,tabIndex:-1,onBlur:e=>{S.current&&S.current.contains(e.relatedTarget)||"none"!==E.current&&(j("none"),W())},children:[t(hT,{"data-testid":"addon",$disabled:o,$readOnly:h,children:"#"}),h&&a?(r=>{const n=r.split("-");return e(bT,{children:[t(vT,{children:n[0]}),t(mT,{children:"-"}),t(vT,{children:n[1]})]})})(a):e(r,{children:[t(pT,{name:"floor",maxLength:3,value:v,ref:D,onFocus:z,onBlur:R,onChange:B,disabled:o,readOnly:h,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==$||h?Y(p)[0]:"",autoComplete:m,styleType:"no-border"}),t(mT,{$inactive:0===v.length,children:"-"}),t(gT,{name:"unit",maxLength:5,value:x,ref:k,onFocus:z,onBlur:R,onChange:B,onKeyDown:P,disabled:o,readOnly:h,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==$||h?Y(p)[1]:"",autoComplete:m,styleType:"no-border"})]})]}))},xT="Invalid unit number",wT={DateInput:e=>{var{label:r,errorMessage:n,id:o="form-date-input","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(Hf,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},DateRangeInput:e=>{var{label:r,errorMessage:n,id:o="form-date-range-input","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(Jf,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},ESignature:e=>{const{label:r,errorMessage:n,id:o="form-field","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(Eh,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},HistogramSlider:e=>{var{label:r,errorMessage:n,id:o="form-histogram-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(Jh,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},Input:ap,InputGroup:b$,MaskedInput:M$,Label:Eu,MultiSelect:e=>{var{label:r,errorMessage:n,id:o="form-multi-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,variant:y}=e,x=lt(e,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return t(Hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:t(sO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s,variant:y},x))})},NestedSelect:e=>{var{label:r,errorMessage:n,id:o="form-nested-select","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(dO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},NestedMultiSelect:e=>{var{label:r,errorMessage:n,id:o="form-nested-multi-select","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(uO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},Select:e=>{var{label:r,errorMessage:n,id:o="form-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,variant:y}=e,x=lt(e,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return t(Hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:t(HO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s,variant:y},x))})},SelectHistogram:e=>{var{label:r,errorMessage:n,id:o="form-select-histogram","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,histogramSlider:v}=e,y=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);return t(Hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(qO,Object.assign({histogramSlider:v,error:!!n,"data-testid":a||o,id:`${o}-base`},y))})},Slider:e=>{var{label:r,errorMessage:n,id:o="form-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(GO,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSlider:e=>{var{label:r,errorMessage:n,id:o="form-range-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(Kh,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSelect:e=>{var{label:r,errorMessage:n,id:o="form-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=e,y=lt(e,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:c,tabletCols:u,desktopCols:d,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:t(NO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s},y))})},Textarea:oE,Timepicker:e=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Hu,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(fT,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},TimeRangePicker:e=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Hu,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(uT,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},CustomField:e=>{var{id:r="form-custom-field","data-error-testid":n,children:o}=e,i=lt(e,["id","data-error-testid","children"]);return t(Hu,Object.assign({id:r,"data-error-testid":n},i,{children:o}))},UnitNumberInput:e=>{var{label:r,errorMessage:n,id:o="form-unit-number-input","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(yT,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},PhoneNumberInput:e=>{var{label:r,errorMessage:n,id:o="form-phone-number-input","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(_O,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},PredictiveTextInput:e=>{var{label:r,errorMessage:n,id:o="form-predictive-text","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(Hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:u,xxsCols:d,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(RO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})}},$T=_.li`
    display: flex;
    flex-direction: column;
    padding: ${Mi["spacing-32"]} 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: ${Fi["width-010"]} ${Fi.solid} ${Ei.border};
    }
`,CT=_.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${Mi["spacing-16"]};
    width: 100%;
`,ST=_.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,DT=_.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${Mi["spacing-16"]};

    ${zi.MaxWidth.sm} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,kT=_(Ni.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${Mi["spacing-16"]};

    ${zi.MaxWidth.sm} {
        margin-right: 0;
        margin-bottom: ${Mi["spacing-8"]};
    }
`,_T=_(Ni.BodyMD)``,OT=_.div`
    display: flex;
    ${zi.MaxWidth.sm} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return O`
                margin-left: calc(
                    96px + ${Mi["spacing-32"]}
                ); // thumbnail width + right margin

                ${zi.MaxWidth.sm} {
                    margin-left: 0;
                }
            `}}
`,ET=_(Od.Small)`
    width: 7.5rem;
    :not(:last-of-type) {
        margin-right: ${Mi["spacing-16"]};
    }

    ${zi.MaxWidth.sm} {
        width: 100%;
        :not(:last-of-type) {
            margin-bottom: ${Mi["spacing-16"]};
        }
    }
`;const TT=({thumbnailImageDataUrl:r,"data-testid":n,renderReplaceButton:o,onReplaceClick:i})=>e(IT,{"data-testid":n,children:[t(FT,{"data-testid":n?`${n}-image`:void 0,src:r}),o&&t(MT,{type:"button",onClick:()=>{i&&i()},children:"Replace"})]}),IT=_.div`
    width: auto;
    margin-right: ${Mi["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,FT=_((({src:e,alt:r,className:n,"data-testid":o})=>t("img",{src:e,alt:r||"",className:n,"data-testid":o,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}})))`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${Ai.sm};
    border: ${Fi["width-010"]} ${Fi.solid} ${Ei.border};
    object-fit: cover;

    ${zi.MaxWidth.sm} {
        width: 64px;
        height: 64px;
    }
`,MT=_.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${Mi["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${Ti["body-md-semibold"]}
    color: ${Ei["text-primary"]};

    :hover {
        color: ${Ei["text-hover"]};
    }
`;var AT;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(AT||(AT={}));const jT=({fileItem:r,fileDescriptionMaxLength:n,wrapperWidth:o,onSave:i,onCancel:a,onBlur:l})=>{const{id:u,name:d,size:f,truncateText:h=!0,thumbnailImageDataUrl:p}=r,[m,b]=g(),[v,y]=g(""),x=s(null),w=s(null);c((()=>{b($(d))}),[o]),c((()=>{y(r.description||"")}),[r]);const $=e=>{if(!h)return e;const t=w&&w.current?w.current.getBoundingClientRect().width:0;return Wc.truncateOneLine(e,t,t/2,t/2/8,16)};return e($T,{"data-testid":`${u}-edit-display`,children:[e(CT,{children:[p&&t(TT,{thumbnailImageDataUrl:p}),e(ST,{children:[e(DT,{ref:w,children:[t(kT,{weight:"semibold",children:m}),t(_T,{children:AT.formatFileSizeDisplay(f)})]}),t(wT.Textarea,{ref:x,id:`${u}-description-textarea`,"data-testid":`${u}-textarea`,value:v,maxLength:n,onChange:e=>{y(e.target.value)},onBlur:e=>{l(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),e(OT,{$thumbnail:!!p,children:[t(ET,{"data-testid":`${u}-save-button`,type:"button",disabled:0===v.trim().length,onClick:()=>{x.current&&i(x.current.value.trim())},children:"Save"}),t(ET,{type:"button",styleType:"secondary","data-testid":`${u}-cancel-button`,onClick:a,children:"Cancel"})]})]})},zT=_.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${Mi["spacing-16"]};
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
`,RT=_(Fe)`
    margin-right: ${Mi["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${Ei.icon};

    ${e=>e.$active?O`
                color: ${Ei["icon-primary"]};
            `:e.$disabled?O`
                color: ${Ei["icon-disabled"]};
            `:void 0};
`,BT=_.div`
    background: ${Ei["bg-primary-subtlest"]};
    border: ${Fi["width-010"]} ${Fi.solid} ${Ei.border};
    border-radius: ${Ai.sm};
    padding: ${Mi["spacing-16"]} ${Mi["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${zi.MaxWidth.sm} {
        padding: ${Mi["spacing-16"]};
    }

    ${e=>e.$focused?O`
                border-color: ${Ei["border-focus"]};
                box-shadow: 0 0 4px 1px
                    rgb(from ${Ei["border-focus"]} r g b / 50%);
            `:e.$disabled?O`
                border-color: ${Ei["border-disabled"]};
            `:e.$error?O`
                background: ${Ei["bg-error"]};
                border-color: ${Ei["border-error"]};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return O`
                ${zi.MaxWidth.sm} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,PT=_.div`
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
`,LT=_.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,NT=_.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${zi.MaxWidth.sm} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,HT=_.div`
    display: flex;
    width: 5rem;
    margin-left: ${Mi["spacing-8"]};
    justify-content: flex-end;

    ${zi.MaxWidth.sm} {
        ${e=>e.$hideInMobile?O`
                    display: none;
                    visibility: hidden;
                `:O`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${Mi["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,WT=_(Ni.BodyMD)``,VT=_(WT)`
    margin-top: ${Mi["spacing-4"]};
`,YT=_(Ni.BodySM)`
    color: ${Ei["text-error"]};
`,UT=_(YT)`
    margin-top: ${Mi["spacing-4"]};
    ${zi.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,KT=_(YT)`
    display: none;
    visibility: hidden;
    ${zi.MaxWidth.sm} {
        display: block;
        visibility: visible;
        margin-top: ${Mi["spacing-8"]};
    }
`,qT=_.div`
    width: 6rem;
    margin-left: ${Mi["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${zi.MaxWidth.sm} {
        width: fit-content;

        ${e=>e.$loading&&!e.$error?O`
                    margin-left: 0;
                    margin-top: ${Mi["spacing-16"]};
                    width: 100%;
                `:e.$editable&&!e.$error?O`
                    margin-left: 0;
                    margin-top: ${Mi["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,GT=_(sh)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${Mi["spacing-16"]};
    }
`,QT=_(lu)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${Ei.icon};
    }
`,ZT=m((({fileItem:n,editable:o,sortable:i,wrapperWidth:a,disabled:l,readOnly:u,onDelete:d,onEditClick:f})=>{const{id:h,name:p,size:m,description:v,progress:y=1,errorMessage:x,thumbnailImageDataUrl:w,truncateText:$=!0}=n,[C,S]=g(),{activeId:D}=b(Me),{attributes:k,listeners:_,setNodeRef:O,transform:E,transition:T}=ml({id:h}),I=s(null),F={transform:ma.Translate.toString(E),transition:T},M=Object.assign(Object.assign({style:F},k),_),A=y<1,j=AT.formatFileSizeDisplay(m),z=D?D===h?"self":"others":"none";c((()=>{S(L(p))}),[a]);const R=()=>{d()},B=()=>{f&&f()},P=e=>{i&&e.stopPropagation()},L=e=>{if(!$)return e;const t=I&&I.current?I.current.getBoundingClientRect().width:0;return Wc.truncateOneLine(e,t,t/2,t/2/8,16)},N=()=>l||!!D,H=()=>!!i&&!u,W=()=>e(r,{children:[t(WT,{weight:v?"semibold":"regular",children:C}),v&&t(VT,{children:v})]});return e(zT,Object.assign({id:h,ref:O,$sortable:H(),$disabled:N(),$focusType:z},H()?M:{},{children:[H()&&t(RT,{"data-testid":`${h}-drag-handle`,$disabled:N(),$active:"self"===z}),e(BT,{$focused:"self"===z,$error:!!x,$loading:A,$disabled:N(),$editable:o,children:[(()=>{let n;return n=x?e(r,{children:[e(LT,{ref:I,children:[W(),x&&t(UT,{weight:"semibold",children:x})]}),t(HT,{children:t(WT,{children:j})}),x&&t(KT,{weight:"semibold",children:x})]}):w?(n=>e(r,{children:[t(TT,{thumbnailImageDataUrl:n,"data-testid":`${h}-thumbnail`}),e(NT,{children:[t(LT,{ref:I,children:W()}),t(HT,{children:t(WT,{children:j})})]})]}))(w):e(r,{children:[t(LT,{ref:I,children:W()}),t(HT,{$hideInMobile:A,children:t(WT,{children:j})})]}),t(PT,{$hasThumbnail:!!w,children:n})})(),!u&&(()=>{let n;return n=x?t(QT,{onClick:R,"data-testid":`${h}-error-delete-button`,"aria-label":`delete-${p}`,children:t(te,{"aria-hidden":!0})}):A?t(oh,{progress:y,"data-testid":`${h}-progress-bar`}):e(r,{children:[o&&t(GT,{"data-testid":`${h}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${p}`,disabled:N(),onClick:B,onKeyDown:P,children:t(Ie,{"aria-hidden":!0})},"edit"),t(GT,{"data-testid":`${h}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${p}`,disabled:N(),onClick:R,onKeyDown:P,children:t(Te,{"aria-hidden":!0})},"delete")]}),t(qT,{$editable:o,$error:!!x,$loading:A,children:n})})()]})]}))})),XT=_.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":Mi["spacing-32"]};
`,JT=_.li`
    border-top: ${Fi["width-010"]} ${Fi.solid} ${Ei.border};
    border-bottom: ${Fi["width-010"]} ${Fi.solid} ${Ei.border};

    :not(:last-child) {
        margin-bottom: ${Mi["spacing-32"]};
    }

    :not(:first-child) {
        margin-top: ${Mi["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`,eI=({fileItems:e,editableFileItems:r,fileDescriptionMaxLength:n,sortable:o,disabled:i,readOnly:l,onItemUpdate:u,onItemDelete:d,onSort:f})=>{const[h,p]=g({}),{setActiveId:m}=b(Me),{width:v=0,ref:y}=gc(),x=s({}),w=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return a((()=>[...t].filter((e=>null!=e))),[...t])}(Oa(mc,{activationConstraint:{distance:8}}),Oa(ws,{activationConstraint:{delay:150,tolerance:5}}),Oa(ds,{coordinateGetter:yl})),$=e=>{delete x.current[e]};c((()=>{p(F(e))}),[e]);const C=e=>t=>{M(e.id,"display"),$(e.id);const r=Object.assign(Object.assign({},e),{description:t});u(r)},S=e=>t=>{x.current[e.id]=t},D=e=>()=>{e.description&&0!==e.description.length?M(e.id,"display"):d(e),$(e.id)},k=e=>()=>{M(e.id,"edit")},_=e=>()=>{d(e)},O=t=>{if(f&&e){const{active:r,over:n}=t;if(n&&r.id!==n.id){const t=e.findIndex((e=>e.id===r.id)),o=e.findIndex((e=>e.id===n.id)),i=tl(e,t,o);f(i)}}m(void 0)},E=e=>{const{active:t}=e;m(t.id)},T=e=>r&&AT.isSupportedImageType(e.type),I=e=>!e.errorMessage&&!l&&!("number"==typeof e.progress&&e.progress<1)&&T(e)&&!e.description,F=e=>{if(!e||0===e.length)return{};const t={};for(const r of e)r.errorMessage?t[r.id]="error":h[r.id]?t[r.id]=h[r.id]:t[r.id]=I(r)?"edit":"display";return t},M=(e,t)=>{p((r=>Object.assign(Object.assign({},r),{[e]:t})))},A=()=>e&&e.length>1&&o&&Object.values(h).every((e=>"display"===e)),j=()=>{const r=((e,t)=>{if(!e||0===e.length)return[];const r=[];for(const n of e)if("edit"===t[n.id]){const e=r[r.length-1];Array.isArray(e)?e.push(n):r.push([n])}else r.push(n);return r})(e,h);return 0===r.length?null:r.map(((e,r)=>Array.isArray(e)?((e,r)=>{const o=e.map((e=>{const r=Object.assign({},e);return void 0!==x.current[e.id]&&(r.description=x.current[e.id]),t(jT,{fileItem:r,wrapperWidth:v,fileDescriptionMaxLength:n,onSave:C(e),onCancel:D(e),onBlur:S(e)},e.id)}));return t(JT,{children:t("ul",{children:o})},`editable-${r}`)})(e,r):t(ZT,{fileItem:e,editable:T(e),wrapperWidth:v,sortable:A(),disabled:i,readOnly:l,onDelete:_(e),onEditClick:k(e)},e.id)))};return e&&0!==e.length?i||l||!A()?t(XT,{$readOnly:l,ref:y,children:j()}):t(Qs,{sensors:w,onDragEnd:O,onDragStart:E,children:t(cl,{items:e,strategy:al,children:t(XT,{$readOnly:l,ref:y,children:j()})})}):null},tI=_.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${Mi["spacing-32"]};
    gap: ${Mi["spacing-8"]};
`,rI=_(Ni.BodyBL)``,nI=_.div`
    color: ${Ei.text};
    ${fu({textSize:"body-baseline"})}
`,oI=_(Ni.BodyMD)`
    color: ${Ei["text-subtler"]};
`,iI=_.div`
    color: ${Ei.text};
    ${fu({textSize:"body-md"})}
`,aI=_(wE)`
    margin-bottom: ${Mi["spacing-32"]};
`,sI=_.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${zi.MaxWidth.sm} {
        align-items: flex-start;
    }
`,lI=_(Od.Small)`
    width: 10rem;

    ${zi.MaxWidth.sm} {
        width: 100%;
    }
`,cI=_.label`
    ${Ti["body-md-semibold"]}
    color: ${Ei["text-subtler"]};
    margin-top: ${Mi["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${zi.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,uI=_(wE)`
    margin-bottom: ${Mi["spacing-32"]};
`,dI=({styleType:r="bordered",fileItems:n,title:o,description:i,maxFiles:a,warning:l,className:c,name:u,id:d,"data-testid":f,accept:h,capture:p,multiple:m,disabled:b,sortable:v=!1,fileDescriptionMaxLength:y,editableFileItems:x=!1,errorMessage:w,readOnly:$,onChange:C,onDelete:S,onEdit:D,onSort:k})=>{const _=s(null),[O,E]=g(),T=()=>!(!a||!n)&&n.length>=a;return t(Me.Provider,{value:{activeId:O,setActiveId:E},children:e(qi,{ref:_,onChange:e=>{!b&&C&&C(e)},id:d?`${d}-dropzone`:"dropzone",accept:h,capture:p,border:"bordered"===r,className:c,"data-testid":f,name:u,multiple:m,disabled:b||T()||$,children:[!(!o&&!i)&&e(tI,{children:[o?t("string"==typeof o?rI:nI,{children:o}):null,i?t("string"==typeof i?oI:iI,{children:i}):null]}),!!l&&t(aI,{type:"warning",children:l}),t(eI,{fileItems:n,editableFileItems:x,fileDescriptionMaxLength:y,sortable:v,disabled:b,readOnly:$,onItemDelete:e=>{S&&S(e)},onItemUpdate:e=>{D&&D(e)},onSort:e=>{k&&k(e)}}),w&&t(uI,{type:"error",children:w}),!$&&e(sI,{children:[t(lI,{type:"button",styleType:"secondary",disabled:!!O||b||T(),onClick:e=>{b||(e.preventDefault(),_.current&&_.current.openFileDialog())},children:"Upload files"}),t(cI,{children:"or drop them here"})]})]})})};export{Ei as C,dI as F,kh as S,ct as _,_h as a,ze as g};
//# sourceMappingURL=index.85daedc0.js.map
