import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{createContext as i,useMemo as a,useRef as s,useReducer as l,useEffect as c,useCallback as d,forwardRef as u,useImperativeHandle as f,Fragment as h,useLayoutEffect as p,useState as g,memo as m,useContext as b,isValidElement as v,createRef as y,cloneElement as x,PureComponent as w,version as $,Children as C,lazy as S,Suspense as D,createElement as k}from"react";import{CloudArrowUpFillIcon as E}from"@lifesg/react-icons/cloud-arrow-up-fill";import F,{css as O,ThemeContext as _,keyframes as T}from"styled-components";import{ExternalIcon as I}from"@lifesg/react-icons/external";import M,{unstable_batchedUpdates as A,createPortal as j,findDOMNode as B}from"react-dom";import{ICircleFillIcon as R}from"@lifesg/react-icons/i-circle-fill";import{useFloatingTree as z,FloatingTree as P,useFloatingNodeId as L,FloatingNode as N,useFloating as H,autoUpdate as W,offset as Y,flip as V,shift as U,limitShift as K,size as q,useClick as G,useDismiss as Z,useHover as Q,useInteractions as X,FloatingPortal as J,FloatingFocusManager as ee,useTransitionStyles as te}from"@floating-ui/react";import{CrossIcon as re}from"@lifesg/react-icons/cross";import{ExclamationCircleFillIcon as ne}from"@lifesg/react-icons/exclamation-circle-fill";import{ChevronDownIcon as oe}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as ie}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as ae}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as se,PencilIcon as le,EraserIcon as ce,SquareIcon as de,SquareFillIcon as ue,SquareTickFillIcon as fe,MinusSquareFillIcon as he,CrossIcon as pe,ChevronDownIcon as ge}from"@lifesg/react-icons";import{SquareIcon as me}from"@lifesg/react-icons/square";import{SquareFillIcon as be}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as ve}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as ye}from"@lifesg/react-icons/tick";import{MagnifierIcon as xe}from"@lifesg/react-icons/magnifier";import{CaretRightIcon as we}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as $e}from"@lifesg/react-icons/minus-square-fill";import{EyeIcon as Ce}from"@lifesg/react-icons/eye";import{EyeSlashIcon as Se}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as De}from"@lifesg/react-icons/exclamation-triangle";import{ChevronUpIcon as ke}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as Ee}from"@lifesg/react-icons/arrow-right";import{ExclamationTriangleFillIcon as Fe}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as Oe}from"@lifesg/react-icons/tick-circle-fill";import{CircleIcon as _e}from"@lifesg/react-icons/circle";import{CircleDotIcon as Te}from"@lifesg/react-icons/circle-dot";import{BinIcon as Ie}from"@lifesg/react-icons/bin";import{PencilIcon as Me}from"@lifesg/react-icons/pencil";import{DragHandleIcon as Ae}from"@lifesg/react-icons/drag-handle";const je=i({activeId:void 0,setActiveId:()=>{}});var Be="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Re(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ze,Pe={exports:{}},Le={exports:{}},Ne={};var He,We,Ye,Ve,Ue,Ke,qe,Ge,Ze,Qe,Xe,Je,et,tt,rt={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function nt(){return We||(We=1,"production"===process.env.NODE_ENV?Le.exports=function(){if(ze)return Ne;ze=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:switch(e=e.type){case l:case c:case n:case i:case o:case u:return e;default:switch(e=e&&e.$$typeof){case s:case d:case p:case h:case a:return e;default:return f}}case r:return f}}}function x(e){return y(e)===c}return Ne.AsyncMode=l,Ne.ConcurrentMode=c,Ne.ContextConsumer=s,Ne.ContextProvider=a,Ne.Element=t,Ne.ForwardRef=d,Ne.Fragment=n,Ne.Lazy=p,Ne.Memo=h,Ne.Portal=r,Ne.Profiler=i,Ne.StrictMode=o,Ne.Suspense=u,Ne.isAsyncMode=function(e){return x(e)||y(e)===l},Ne.isConcurrentMode=x,Ne.isContextConsumer=function(e){return y(e)===s},Ne.isContextProvider=function(e){return y(e)===a},Ne.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Ne.isForwardRef=function(e){return y(e)===d},Ne.isFragment=function(e){return y(e)===n},Ne.isLazy=function(e){return y(e)===p},Ne.isMemo=function(e){return y(e)===h},Ne.isPortal=function(e){return y(e)===r},Ne.isProfiler=function(e){return y(e)===i},Ne.isStrictMode=function(e){return y(e)===o},Ne.isSuspense=function(e){return y(e)===u},Ne.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===i||e===o||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},Ne.typeOf=y,Ne}():Le.exports=(He||(He=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:var g=e.type;switch(g){case l:case c:case n:case i:case o:case u:return g;default:var m=g&&g.$$typeof;switch(m){case s:case d:case p:case h:case a:return m;default:return f}}case r:return f}}}var x=l,w=c,$=s,C=a,S=t,D=d,k=n,E=p,F=h,O=r,_=i,T=o,I=u,M=!1;function A(e){return y(e)===c}rt.AsyncMode=x,rt.ConcurrentMode=w,rt.ContextConsumer=$,rt.ContextProvider=C,rt.Element=S,rt.ForwardRef=D,rt.Fragment=k,rt.Lazy=E,rt.Memo=F,rt.Portal=O,rt.Profiler=_,rt.StrictMode=T,rt.Suspense=I,rt.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||y(e)===l},rt.isConcurrentMode=A,rt.isContextConsumer=function(e){return y(e)===s},rt.isContextProvider=function(e){return y(e)===a},rt.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},rt.isForwardRef=function(e){return y(e)===d},rt.isFragment=function(e){return y(e)===n},rt.isLazy=function(e){return y(e)===p},rt.isMemo=function(e){return y(e)===h},rt.isPortal=function(e){return y(e)===r},rt.isProfiler=function(e){return y(e)===i},rt.isStrictMode=function(e){return y(e)===o},rt.isSuspense=function(e){return y(e)===u},rt.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===i||e===o||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},rt.typeOf=y}()),rt)),Le.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function ot(){if(Ve)return Ye;Ve=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;return Ye=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(n,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))t.call(i,c)&&(s[c]=i[c]);if(e){a=e(i);for(var d=0;d<a.length;d++)r.call(i,a[d])&&(s[a[d]]=i[a[d]])}}return s},Ye}function it(){if(Ke)return Ue;Ke=1;return Ue="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function at(){return Ge?qe:(Ge=1,qe=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var st=nt();Pe.exports=function(){if(Je)return Xe;Je=1;var e=nt(),t=ot(),r=it(),n=at(),o=function(){if(Qe)return Ze;Qe=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=it(),r={},n=at();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function o(o,i,a,s,l){if("production"!==process.env.NODE_ENV)for(var c in o)if(n(o,c)){var d;try{if("function"!=typeof o[c]){var u=Error((s||"React class")+": "+a+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=o[c](i,c,s,a,null,t)}catch(e){d=e}if(!d||d instanceof Error||e((s||"React class")+": type specification of "+a+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in r)){r[d.message]=!0;var f=l?l():"";e("Failed "+a+" type: "+d.message+(null!=f?f:""))}}}return o.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},Ze=o}(),i=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(i=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),Xe=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,d="<<anonymous>>",u={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:p(a),arrayOf:function(e){return p((function(t,n,o,i,a){if("function"!=typeof e)return new h("Property `"+a+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new h("Invalid "+i+" `"+a+"` of type `"+v(s)+"` supplied to `"+o+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,o,i,a+"["+l+"]",r);if(c instanceof Error)return c}return null}))},element:p((function(e,t,r,n,o){var i=e[t];return s(i)?null:new h("Invalid "+n+" `"+o+"` of type `"+v(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:p((function(t,r,n,o,i){var a=t[r];return e.isValidElementType(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,o,i){if(!(t[r]instanceof e)){var a=e.name||d;return new h("Invalid "+o+" `"+i+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:p((function(e,t,r,n,o){return b(e[t])?null:new h("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,o,i,a,s){if("function"!=typeof e)return new h("Property `"+s+"` of component `"+i+"` has invalid PropType notation inside objectOf.");var l=t[o],c=v(l);if("object"!==c)return new h("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+i+"`, expected an object.");for(var d in l)if(n(l,d)){var u=e(l,d,i,a,s+"."+d,r);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,o,i){for(var a=t[r],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&i(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&i("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var o=e[t];if("function"!=typeof o)return i("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(o)+" at index "+t+"."),a}return p((function(t,o,i,a,s){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,o,i,a,s,r);if(null==d)return null;d.data&&n(d.data,"expectedType")&&l.push(d.data.expectedType)}return new h("Invalid "+a+" `"+s+"` supplied to `"+i+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,n,o,i,a){var s=t[n],l=v(s);if("object"!==l)return new h("Invalid "+i+" `"+a+"` of type `"+l+"` supplied to `"+o+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return m(o,i,a,c,y(d));var u=d(s,c,o,i,a+"."+c,r);if(u)return u}return null}))},exact:function(e){return p((function(o,i,a,s,l){var c=o[i],d=v(c);if("object"!==d)return new h("Invalid "+s+" `"+l+"` of type `"+d+"` supplied to `"+a+"`, expected `object`.");var u=t({},o[i],e);for(var f in u){var p=e[f];if(n(e,f)&&"function"!=typeof p)return m(a,s,l,f,y(p));if(!p)return new h("Invalid "+s+" `"+l+"` key `"+f+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(o[i],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=p(c,f,a,s,l+"."+f,r);if(g)return g}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){if("production"!==process.env.NODE_ENV)var t={},n=0;function o(o,a,s,c,u,f,p){if(c=c||d,f=f||s,p!==r){if(l){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=c+":"+s;!t[m]&&n<3&&(i("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,n++)}}return null==a[s]?o?null===a[s]?new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,s,c,u,f)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function g(e){return p((function(t,r,n,o,i,a){var s=t[r];return v(s)!==e?new h("Invalid "+o+" `"+i+"` of type `"+y(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,r,n,o){return new h((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function b(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(b);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(!t)return!1;var r,n=t.call(e);if(t!==e.entries){for(;!(r=n.next()).done;)if(!b(r.value))return!1}else for(;!(r=n.next()).done;){var o=r.value;if(o&&!b(o[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,u.checkPropTypes=o,u.resetWarningCache=o.resetWarningCache,u.PropTypes=u,u},Xe}()(st.isElement,!0)}else Pe.exports=function(){if(tt)return et;tt=1;var e=it();function t(){}function r(){}return r.resetWarningCache=t,et=function(){function n(t,r,n,o,i,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function o(){return n}n.isRequired=n;var i={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:t};return i.PropTypes=i,i}}()();var lt=Re(Pe.exports);function ct(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function dt(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}function ut(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function ft(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function ht(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var pt=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function gt(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=pt.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"==typeof t?t:"string"==typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var mt=[".DS_Store","Thumbs.db"];function bt(e){return"object"==typeof e&&null!==e}function vt(e){return $t(e.target.files).map((function(e){return gt(e)}))}function yt(e){return dt(this,void 0,void 0,(function(){return ut(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return gt(e)}))]}}))}))}function xt(e,t){return dt(this,void 0,void 0,(function(){var r;return ut(this,(function(n){switch(n.label){case 0:return e.items?(r=$t(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map(Ct))]):[3,2];case 1:return[2,wt(St(n.sent()))];case 2:return[2,wt($t(e.files).map((function(e){return gt(e)})))]}}))}))}function wt(e){return e.filter((function(e){return-1===mt.indexOf(e.name)}))}function $t(e){if(null===e)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function Ct(e){if("function"!=typeof e.webkitGetAsEntry)return Dt(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?Et(t):Dt(e)}function St(e){return e.reduce((function(e,t){return ht(ht([],ft(e),!1),ft(Array.isArray(t)?St(t):[t]),!1)}),[])}function Dt(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=gt(t);return Promise.resolve(r)}function kt(e){return dt(this,void 0,void 0,(function(){return ut(this,(function(t){return[2,e.isDirectory?Et(e):Ft(e)]}))}))}function Et(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function o(){var i=this;t.readEntries((function(t){return dt(i,void 0,void 0,(function(){var i,a,s;return ut(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return i=l.sent(),e(i),[3,4];case 3:return a=l.sent(),r(a),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(kt)),n.push(s),o(),l.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function Ft(e){return dt(this,void 0,void 0,(function(){return ut(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=gt(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}function Ot(e){return function(e){if(Array.isArray(e))return jt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||At(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Tt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_t(Object(r),!0).forEach((function(t){It(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function It(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Mt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}(e,t)||At(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function At(e,t){if(e){if("string"==typeof e)return jt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?jt(e,t):void 0}}function jt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Bt=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},Rt=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},zt=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},Pt={code:"too-many-files",message:"Too many files"};function Lt(e,t){var r="application/x-moz-file"===e.type||function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}(e,t);return[r,r?null:Bt(t)]}function Nt(e,t,r){if(Ht(e.size))if(Ht(t)&&Ht(r)){if(e.size>r)return[!1,Rt(r)];if(e.size<t)return[!1,zt(t)]}else{if(Ht(t)&&e.size<t)return[!1,zt(t)];if(Ht(r)&&e.size>r)return[!1,Rt(r)]}return[!0,null]}function Ht(e){return null!=e}function Wt(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function Yt(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function Vt(e){e.preventDefault()}function Ut(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return t.some((function(t){return!Wt(e)&&t&&t.apply(void 0,[e].concat(n)),Wt(e)}))}}function Kt(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function qt(e){return/^.*\.[\w]+$/.test(e)}var Gt=["children"],Zt=["open"],Qt=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Xt=["refKey","onChange","onClick"];function Jt(e){return function(e){if(Array.isArray(e))return rr(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||tr(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function er(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}(e,t)||tr(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function tr(e,t){if(e){if("string"==typeof e)return rr(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?rr(e,t):void 0}}function rr(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function nr(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function or(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?nr(Object(r),!0).forEach((function(t){ir(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):nr(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ir(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ar(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var sr=u((function(e,t){var r=e.children,n=dr(ar(e,Gt)),i=n.open,a=ar(n,Zt);return f(t,(function(){return{open:i}}),[i]),o.createElement(h,null,r(or(or({},a),{},{open:i})))}));sr.displayName="Dropzone";var lr={disabled:!1,getFilesFromEvent:function(e){return dt(this,void 0,void 0,(function(){return ut(this,(function(t){return bt(e)&&bt(e.dataTransfer)?[2,xt(e.dataTransfer,e.type)]:function(e){return bt(e)&&bt(e.target)}(e)?[2,vt(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,yt(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};sr.defaultProps=lr,sr.propTypes={children:lt.func,accept:lt.objectOf(lt.arrayOf(lt.string)),multiple:lt.bool,preventDropOnDocument:lt.bool,noClick:lt.bool,noKeyboard:lt.bool,noDrag:lt.bool,noDragEventsBubbling:lt.bool,minSize:lt.number,maxSize:lt.number,maxFiles:lt.number,disabled:lt.bool,getFilesFromEvent:lt.func,onFileDialogCancel:lt.func,onFileDialogOpen:lt.func,useFsAccessApi:lt.bool,autoFocus:lt.bool,onDragEnter:lt.func,onDragLeave:lt.func,onDragOver:lt.func,onDrop:lt.func,onDropAccepted:lt.func,onDropRejected:lt.func,onError:lt.func,validator:lt.func};var cr={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function dr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=or(or({},lr),e),r=t.accept,n=t.disabled,o=t.getFilesFromEvent,i=t.maxSize,u=t.minSize,f=t.multiple,h=t.maxFiles,p=t.onDragEnter,g=t.onDragLeave,m=t.onDragOver,b=t.onDrop,v=t.onDropAccepted,y=t.onDropRejected,x=t.onFileDialogCancel,w=t.onFileDialogOpen,$=t.useFsAccessApi,C=t.autoFocus,S=t.preventDropOnDocument,D=t.noClick,k=t.noKeyboard,E=t.noDrag,F=t.noDragEventsBubbling,O=t.onError,_=t.validator,T=a((function(){return function(e){if(Ht(e))return Object.entries(e).reduce((function(e,t){var r=Mt(t,2),n=r[0],o=r[1];return[].concat(Ot(e),[n],Ot(o))}),[]).filter((function(e){return Kt(e)||qt(e)})).join(",")}(r)}),[r]),I=a((function(){return function(e){return Ht(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=Mt(e,2),r=t[0],n=t[1],o=!0;return Kt(r)||(console.warn('Skipped "'.concat(r,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(n)&&n.every(qt)||(console.warn('Skipped "'.concat(r,'" because an invalid file extension was provided.')),o=!1),o})).reduce((function(e,t){var r=Mt(t,2),n=r[0],o=r[1];return Tt(Tt({},e),{},It({},n,o))}),{})}]:e}(r)}),[r]),M=a((function(){return"function"==typeof w?w:fr}),[w]),A=a((function(){return"function"==typeof x?x:fr}),[x]),j=s(null),B=s(null),R=er(l(ur,cr),2),z=R[0],P=R[1],L=z.isFocused,N=z.isFileDialogActive,H=s("undefined"!=typeof window&&window.isSecureContext&&$&&"showOpenFilePicker"in window),W=function(){!H.current&&N&&setTimeout((function(){B.current&&(B.current.files.length||(P({type:"closeDialog"}),A()))}),300)};c((function(){return window.addEventListener("focus",W,!1),function(){window.removeEventListener("focus",W,!1)}}),[B,N,A,H]);var Y=s([]),V=function(e){j.current&&j.current.contains(e.target)||(e.preventDefault(),Y.current=[])};c((function(){return S&&(document.addEventListener("dragover",Vt,!1),document.addEventListener("drop",V,!1)),function(){S&&(document.removeEventListener("dragover",Vt),document.removeEventListener("drop",V))}}),[j,S]),c((function(){return!n&&C&&j.current&&j.current.focus(),function(){}}),[j,C,n]);var U=d((function(e){O?O(e):console.error(e)}),[O]),K=d((function(e){e.preventDefault(),e.persist(),ae(e),Y.current=[].concat(Jt(Y.current),[e.target]),Yt(e)&&Promise.resolve(o(e)).then((function(t){if(!Wt(e)||F){var r=t.length,n=r>0&&function(e){var t=e.files,r=e.accept,n=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,s=e.validator;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=Mt(Lt(e,r),1)[0],i=Mt(Nt(e,n,o),1)[0],a=s?s(e):null;return t&&i&&!a}))}({files:t,accept:T,minSize:u,maxSize:i,multiple:f,maxFiles:h,validator:_});P({isDragAccept:n,isDragReject:r>0&&!n,isDragActive:!0,type:"setDraggedFiles"}),p&&p(e)}})).catch((function(e){return U(e)}))}),[o,p,U,F,T,u,i,f,h,_]),q=d((function(e){e.preventDefault(),e.persist(),ae(e);var t=Yt(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&m&&m(e),!1}),[m,F]),G=d((function(e){e.preventDefault(),e.persist(),ae(e);var t=Y.current.filter((function(e){return j.current&&j.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),Y.current=t,t.length>0||(P({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Yt(e)&&g&&g(e))}),[j,g,F]),Z=d((function(e,t){var r=[],n=[];e.forEach((function(e){var t=er(Lt(e,T),2),o=t[0],a=t[1],s=er(Nt(e,u,i),2),l=s[0],c=s[1],d=_?_(e):null;if(o&&l&&!d)r.push(e);else{var f=[a,c];d&&(f=f.concat(d)),n.push({file:e,errors:f.filter((function(e){return e}))})}})),(!f&&r.length>1||f&&h>=1&&r.length>h)&&(r.forEach((function(e){n.push({file:e,errors:[Pt]})})),r.splice(0)),P({acceptedFiles:r,fileRejections:n,type:"setFiles"}),b&&b(r,n,t),n.length>0&&y&&y(n,t),r.length>0&&v&&v(r,t)}),[P,f,T,u,i,h,b,v,y,_]),Q=d((function(e){e.preventDefault(),e.persist(),ae(e),Y.current=[],Yt(e)&&Promise.resolve(o(e)).then((function(t){Wt(e)&&!F||Z(t,e)})).catch((function(e){return U(e)})),P({type:"reset"})}),[o,Z,U,F]),X=d((function(){if(H.current){P({type:"openDialog"}),M();var e={multiple:f,types:I};window.showOpenFilePicker(e).then((function(e){return o(e)})).then((function(e){Z(e,null),P({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(A(e),P({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?U(e):(H.current=!1,B.current?(B.current.value=null,B.current.click()):U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else B.current&&(P({type:"openDialog"}),M(),B.current.value=null,B.current.click())}),[P,M,A,$,Z,U,I,f]),J=d((function(e){j.current&&j.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),X()))}),[j,X]),ee=d((function(){P({type:"focus"})}),[]),te=d((function(){P({type:"blur"})}),[]),re=d((function(){D||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?X():setTimeout(X,0))}),[D,X]),ne=function(e){return n?null:e},oe=function(e){return k?null:ne(e)},ie=function(e){return E?null:ne(e)},ae=function(e){F&&e.stopPropagation()},se=a((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,o=e.role,i=e.onKeyDown,a=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,d=e.onDragOver,u=e.onDragLeave,f=e.onDrop,h=ar(e,Qt);return or(or(ir({onKeyDown:oe(Ut(i,J)),onFocus:oe(Ut(a,ee)),onBlur:oe(Ut(s,te)),onClick:ne(Ut(l,re)),onDragEnter:ie(Ut(c,K)),onDragOver:ie(Ut(d,q)),onDragLeave:ie(Ut(u,G)),onDrop:ie(Ut(f,Q)),role:"string"==typeof o&&""!==o?o:"presentation"},r,j),n||k?{}:{tabIndex:0}),h)}}),[j,J,ee,te,re,K,q,G,Q,k,E,n]),le=d((function(e){e.stopPropagation()}),[]),ce=a((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onChange,o=e.onClick,i=ar(e,Xt);return or(or({},ir({accept:T,multiple:f,type:"file",style:{display:"none"},onChange:ne(Ut(n,Q)),onClick:ne(Ut(o,le)),tabIndex:-1},r,B)),i)}}),[B,r,f,Q,n]);return or(or({},z),{},{isFocused:L&&!n,getRootProps:se,getInputProps:ce,rootRef:j,inputRef:B,open:ne(X)})}function ur(e,t){switch(t.type){case"focus":return or(or({},e),{},{isFocused:!0});case"blur":return or(or({},e),{},{isFocused:!1});case"openDialog":return or(or({},cr),{},{isFileDialogActive:!0});case"closeDialog":return or(or({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return or(or({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return or(or({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return or({},cr);default:return e}}function fr(){}var hr=Array.isArray,pr="object"==typeof Be&&Be&&Be.Object===Object&&Be,gr=pr,mr="object"==typeof self&&self&&self.Object===Object&&self,br=gr||mr||Function("return this")(),vr=br.Symbol,yr=vr,xr=Object.prototype,wr=xr.hasOwnProperty,$r=xr.toString,Cr=yr?yr.toStringTag:void 0;var Sr=function(e){var t=wr.call(e,Cr),r=e[Cr];try{e[Cr]=void 0;var n=!0}catch(e){}var o=$r.call(e);return n&&(t?e[Cr]=r:delete e[Cr]),o},Dr=Object.prototype.toString;var kr=Sr,Er=function(e){return Dr.call(e)},Fr=vr?vr.toStringTag:void 0;var Or=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Fr&&Fr in Object(e)?kr(e):Er(e)};var _r=function(e){return null!=e&&"object"==typeof e},Tr=Or,Ir=_r;var Mr=function(e){return"symbol"==typeof e||Ir(e)&&"[object Symbol]"==Tr(e)},Ar=hr,jr=Mr,Br=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Rr=/^\w*$/;var zr=function(e,t){if(Ar(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!jr(e))||(Rr.test(e)||!Br.test(e)||null!=t&&e in Object(t))};var Pr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Lr=Or,Nr=Pr;var Hr,Wr=function(e){if(!Nr(e))return!1;var t=Lr(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Yr=br["__core-js_shared__"],Vr=(Hr=/[^.]+$/.exec(Yr&&Yr.keys&&Yr.keys.IE_PROTO||""))?"Symbol(src)_1."+Hr:"";var Ur=function(e){return!!Vr&&Vr in e},Kr=Function.prototype.toString;var qr=function(e){if(null!=e){try{return Kr.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Gr=Wr,Zr=Ur,Qr=Pr,Xr=qr,Jr=/^\[object .+?Constructor\]$/,en=Function.prototype,tn=Object.prototype,rn=en.toString,nn=tn.hasOwnProperty,on=RegExp("^"+rn.call(nn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var an=function(e,t){return null==e?void 0:e[t]},sn=function(e){return!(!Qr(e)||Zr(e))&&(Gr(e)?on:Jr).test(Xr(e))},ln=an;var cn=function(e,t){var r=ln(e,t);return sn(r)?r:void 0},dn=cn(Object,"create"),un=dn;var fn=function(){this.__data__=un?un(null):{},this.size=0};var hn=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},pn=dn,gn=Object.prototype.hasOwnProperty;var mn=function(e){var t=this.__data__;if(pn){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return gn.call(t,e)?t[e]:void 0},bn=dn,vn=Object.prototype.hasOwnProperty;var yn=function(e){var t=this.__data__;return bn?void 0!==t[e]:vn.call(t,e)},xn=dn;var wn=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=xn&&void 0===t?"__lodash_hash_undefined__":t,this},$n=fn,Cn=hn,Sn=mn,Dn=yn,kn=wn;function En(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}En.prototype.clear=$n,En.prototype.delete=Cn,En.prototype.get=Sn,En.prototype.has=Dn,En.prototype.set=kn;var Fn=En;var On=function(){this.__data__=[],this.size=0};var _n=function(e,t){return e===t||e!=e&&t!=t},Tn=_n;var In=function(e,t){for(var r=e.length;r--;)if(Tn(e[r][0],t))return r;return-1},Mn=In,An=Array.prototype.splice;var jn=function(e){var t=this.__data__,r=Mn(t,e);return!(r<0)&&(r==t.length-1?t.pop():An.call(t,r,1),--this.size,!0)},Bn=In;var Rn=function(e){var t=this.__data__,r=Bn(t,e);return r<0?void 0:t[r][1]},zn=In;var Pn=function(e){return zn(this.__data__,e)>-1},Ln=In;var Nn=function(e,t){var r=this.__data__,n=Ln(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Hn=On,Wn=jn,Yn=Rn,Vn=Pn,Un=Nn;function Kn(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Kn.prototype.clear=Hn,Kn.prototype.delete=Wn,Kn.prototype.get=Yn,Kn.prototype.has=Vn,Kn.prototype.set=Un;var qn=Kn,Gn=cn(br,"Map"),Zn=Fn,Qn=qn,Xn=Gn;var Jn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var eo=function(e,t){var r=e.__data__;return Jn(t)?r["string"==typeof t?"string":"hash"]:r.map},to=eo;var ro=function(e){var t=to(this,e).delete(e);return this.size-=t?1:0,t},no=eo;var oo=function(e){return no(this,e).get(e)},io=eo;var ao=function(e){return io(this,e).has(e)},so=eo;var lo=function(e,t){var r=so(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},co=function(){this.size=0,this.__data__={hash:new Zn,map:new(Xn||Qn),string:new Zn}},uo=ro,fo=oo,ho=ao,po=lo;function go(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}go.prototype.clear=co,go.prototype.delete=uo,go.prototype.get=fo,go.prototype.has=ho,go.prototype.set=po;var mo=go,bo=mo;function vo(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(vo.Cache||bo),r}vo.Cache=bo;var yo=vo;var xo=function(e){var t=yo(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},wo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$o=/\\(\\)?/g,Co=xo((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(wo,(function(e,r,n,o){t.push(n?o.replace($o,"$1"):r||e)})),t}));var So=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},Do=hr,ko=Mr,Eo=vr?vr.prototype:void 0,Fo=Eo?Eo.toString:void 0;var Oo=function e(t){if("string"==typeof t)return t;if(Do(t))return So(t,e)+"";if(ko(t))return Fo?Fo.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},_o=Oo;var To=hr,Io=zr,Mo=Co,Ao=function(e){return null==e?"":_o(e)};var jo=function(e,t){return To(e)?e:Io(e,t)?[e]:Mo(Ao(e))},Bo=Mr;var Ro=function(e){if("string"==typeof e||Bo(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},zo=jo,Po=Ro;var Lo=function(e,t){for(var r=0,n=(t=zo(t,e)).length;null!=e&&r<n;)e=e[Po(t[r++])];return r&&r==n?e:void 0},No=Lo;var Ho=function(e,t,r){var n=null==e?void 0:No(e,t);return void 0===n?r:n},Wo=Re(Ho);const Yo=(e,t,r)=>Wo(r,t)||Wo(e,t),Vo=(e,t)=>{const r=t||e.defaultValue;return Wo(e.collections,r)},Uo={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Ko=e=>t=>{var r;const n=t.theme,o=Vo(Uo,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Yo(o,e,n.overrides.border)}px`:`${o[e]}px`},qo={"width-005":Ko("width-005"),"width-010":Ko("width-010"),"width-020":Ko("width-020"),"width-040":Ko("width-040"),solid:(Go="solid",e=>{var t;const r=e.theme,n=Vo(Uo,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Yo(n,Go,r.overrides.border):n[Go];return"function"==typeof o?o(e):o})};var Go;const Zo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Qo={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Xo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Jo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ei={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ti={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ri={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ni={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oi={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ii={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ai={collections:{lifesg:Xo,bookingsg:Zo,rbs:ri,mylegacy:Jo,ccube:Qo,oneservice:ei,pa:ti,a11yplayground:ni,supportgowhere:oi,imda:ii},defaultValue:"lifesg"},si={collections:{lifesg:Xo,bookingsg:Zo,rbs:ri,mylegacy:Jo,ccube:Qo,oneservice:ei,pa:ti,a11yplayground:ni,supportgowhere:oi,imda:ii},defaultValue:"lifesg"},li=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Vo(o?si:ai,null==n?void 0:n.colourScheme),a=o?"primitiveColourDark":"primitiveColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a];return s?Yo(i,e,s):i[e]},ci={"brand-10":li("brand-10"),"brand-20":li("brand-20"),"brand-30":li("brand-30"),"brand-40":li("brand-40"),"brand-50":li("brand-50"),"brand-60":li("brand-60"),"brand-70":li("brand-70"),"brand-80":li("brand-80"),"brand-90":li("brand-90"),"brand-95":li("brand-95"),"brand-100":li("brand-100"),"primary-10":li("primary-10"),"primary-20":li("primary-20"),"primary-30":li("primary-30"),"primary-40":li("primary-40"),"primary-50":li("primary-50"),"primary-60":li("primary-60"),"primary-70":li("primary-70"),"primary-80":li("primary-80"),"primary-90":li("primary-90"),"primary-95":li("primary-95"),"primary-100":li("primary-100"),"secondary-10":li("secondary-10"),"secondary-20":li("secondary-20"),"secondary-30":li("secondary-30"),"secondary-40":li("secondary-40"),"secondary-50":li("secondary-50"),"secondary-60":li("secondary-60"),"secondary-70":li("secondary-70"),"secondary-80":li("secondary-80"),"secondary-90":li("secondary-90"),"secondary-95":li("secondary-95"),"secondary-100":li("secondary-100"),"neutral-10":li("neutral-10"),"neutral-20":li("neutral-20"),"neutral-30":li("neutral-30"),"neutral-40":li("neutral-40"),"neutral-50":li("neutral-50"),"neutral-60":li("neutral-60"),"neutral-70":li("neutral-70"),"neutral-80":li("neutral-80"),"neutral-90":li("neutral-90"),"neutral-95":li("neutral-95"),"neutral-100":li("neutral-100"),"success-10":li("success-10"),"success-20":li("success-20"),"success-30":li("success-30"),"success-40":li("success-40"),"success-50":li("success-50"),"success-60":li("success-60"),"success-70":li("success-70"),"success-80":li("success-80"),"success-90":li("success-90"),"success-95":li("success-95"),"success-100":li("success-100"),"warning-10":li("warning-10"),"warning-20":li("warning-20"),"warning-30":li("warning-30"),"warning-40":li("warning-40"),"warning-50":li("warning-50"),"warning-60":li("warning-60"),"warning-70":li("warning-70"),"warning-80":li("warning-80"),"warning-90":li("warning-90"),"warning-95":li("warning-95"),"warning-100":li("warning-100"),"error-10":li("error-10"),"error-20":li("error-20"),"error-30":li("error-30"),"error-40":li("error-40"),"error-50":li("error-50"),"error-60":li("error-60"),"error-70":li("error-70"),"error-80":li("error-80"),"error-90":li("error-90"),"error-95":li("error-95"),"error-100":li("error-100"),"info-10":li("info-10"),"info-20":li("info-20"),"info-30":li("info-30"),"info-40":li("info-40"),"info-50":li("info-50"),"info-60":li("info-60"),"info-70":li("info-70"),"info-80":li("info-80"),"info-90":li("info-90"),"info-95":li("info-95"),"info-100":li("info-100"),white:li("white"),black:li("black"),"primary-inverse":li("primary-inverse")},di={text:li("neutral-20"),"text-subtle":li("neutral-30"),"text-subtler":li("neutral-50"),"text-subtlest":li("neutral-60"),"text-primary":li("primary-50"),"text-hover":li("primary-40"),"text-selected":li("primary-50"),"text-selected-hover":li("primary-40"),"text-disabled":li("neutral-50"),"text-disabled-subtle":li("neutral-60"),"text-disabled-subtlest":li("neutral-80"),"text-selected-disabled":li("neutral-20"),"text-success":li("success-40"),"text-warning":li("warning-40"),"text-error":li("error-40"),"text-info":li("info-40"),"text-inverse":li("white"),icon:li("neutral-50"),"icon-subtle":li("neutral-60"),"icon-strongest":li("neutral-20"),"icon-primary":li("primary-50"),"icon-primary-subtle":li("primary-60"),"icon-primary-subtlest":li("primary-70"),"icon-hover":li("primary-40"),"icon-selected":li("primary-50"),"icon-selected-hover":li("primary-40"),"icon-disabled":li("neutral-50"),"icon-disabled-subtle":li("neutral-60"),"icon-selected-disabled":li("neutral-60"),"icon-success":li("success-50"),"icon-warning":li("warning-60"),"icon-error":li("error-50"),"icon-error-strong":li("error-40"),"icon-info":li("info-50"),"icon-inverse":li("white"),"icon-primary-inverse":li("primary-inverse"),border:li("neutral-90"),"border-strong":li("neutral-70"),"border-stronger":li("neutral-50"),"border-primary":li("primary-50"),"border-primary-subtle":li("primary-60"),"border-hover":li("primary-90"),"border-hover-strong":li("primary-60"),"border-selected":li("primary-50"),"border-selected-subtle":li("primary-70"),"border-selected-subtlest":li("primary-90"),"border-selected-hover":li("primary-40"),"border-focus":li("primary-60"),"border-focus-strong":li("primary-50"),"border-disabled":li("neutral-90"),"border-selected-disabled":li("neutral-70"),"border-success":li("success-60"),"border-warning":li("warning-60"),"border-error":li("error-60"),"border-error-focus":li("error-60"),"border-error-focus-strong":li("error-40"),"border-error-strong":li("error-40"),"border-info":li("info-60"),bg:li("white"),"bg-strong":li("neutral-100"),"bg-stronger":li("neutral-95"),"bg-strongest":li("neutral-90"),"bg-hover":li("primary-95"),"bg-hover-strong":li("primary-90"),"bg-hover-subtle":li("primary-100"),"bg-hover-neutral":li("neutral-100"),"bg-hover-neutral-strong":li("neutral-90"),"bg-selected":li("primary-95"),"bg-selected-hover":li("primary-90"),"bg-selected-strong":li("primary-90"),"bg-selected-stronger":li("primary-70"),"bg-selected-strongest":li("primary-50"),"bg-selected-strongest-hover":li("primary-40"),"bg-disabled":li("neutral-95"),"bg-selected-disabled":li("neutral-95"),"bg-selected-stronger-disabled":li("neutral-70"),"bg-success":li("success-100"),"bg-success-hover":li("success-95"),"bg-success-strong":li("success-50"),"bg-success-strong-hover":li("success-40"),"bg-warning":li("warning-100"),"bg-warning-hover":li("warning-95"),"bg-warning-strong":li("warning-50"),"bg-warning-strong-hover":li("warning-40"),"bg-info":li("info-100"),"bg-info-hover":li("info-95"),"bg-info-strong":li("info-50"),"bg-info-strong-hover":li("info-40"),"bg-error":li("error-100"),"bg-error-hover":li("error-95"),"bg-error-strong":li("error-50"),"bg-error-strong-hover":li("error-40"),"bg-inverse":li("neutral-20"),"bg-inverse-subtle":li("neutral-30"),"bg-inverse-subtler":li("neutral-50"),"bg-inverse-subtlest":li("neutral-60"),"bg-inverse-hover":li("neutral-40"),"bg-primary":li("primary-50"),"bg-primary-subtle":li("primary-60"),"bg-primary-subtler":li("primary-95"),"bg-primary-subtlest":li("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":li("primary-40"),"bg-primary-subtlest-hover":li("primary-90"),"bg-primary-subtlest-selected":li("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:li("primary-50"),"hyperlink-hover":li("primary-40"),"hyperlink-visited":li("primary-40"),"hyperlink-inverse":li("primary-inverse"),"focus-ring":li("primary-50"),"focus-ring-inverse":li("white")},ui={text:li("neutral-100"),"text-subtle":li("neutral-80"),"text-subtler":li("neutral-60"),"text-subtlest":li("neutral-50"),"text-primary":li("primary-60"),"text-hover":li("primary-70"),"text-selected":li("primary-60"),"text-selected-hover":li("primary-70"),"text-disabled":li("neutral-60"),"text-disabled-subtle":li("neutral-50"),"text-disabled-subtlest":li("neutral-30"),"text-selected-disabled":li("neutral-90"),"text-success":li("success-70"),"text-warning":li("warning-70"),"text-error":li("error-70"),"text-info":li("info-70"),"text-inverse":li("black"),icon:li("neutral-60"),"icon-subtle":li("neutral-50"),"icon-strongest":li("neutral-90"),"icon-primary":li("primary-60"),"icon-primary-subtle":li("primary-50"),"icon-primary-subtlest":li("primary-40"),"icon-hover":li("primary-70"),"icon-selected":li("primary-60"),"icon-selected-hover":li("primary-70"),"icon-disabled":li("neutral-60"),"icon-disabled-subtle":li("neutral-50"),"icon-selected-disabled":li("neutral-50"),"icon-success":li("success-60"),"icon-warning":li("warning-50"),"icon-error":li("error-60"),"icon-error-strong":li("error-70"),"icon-info":li("info-60"),"icon-inverse":li("black"),"icon-primary-inverse":li("primary-inverse"),border:li("neutral-20"),"border-strong":li("neutral-40"),"border-stronger":li("neutral-60"),"border-primary":li("primary-60"),"border-primary-subtle":li("primary-50"),"border-hover":li("primary-20"),"border-hover-strong":li("primary-50"),"border-selected":li("primary-60"),"border-selected-subtle":li("primary-40"),"border-selected-subtlest":li("primary-20"),"border-selected-hover":li("primary-70"),"border-focus":li("primary-50"),"border-focus-strong":li("primary-60"),"border-disabled":li("neutral-20"),"border-selected-disabled":li("neutral-40"),"border-success":li("success-50"),"border-warning":li("warning-50"),"border-error":li("error-50"),"border-error-focus":li("error-50"),"border-error-focus-strong":li("error-70"),"border-error-strong":li("error-70"),"border-info":li("info-50"),bg:li("black"),"bg-strong":li("neutral-10"),"bg-stronger":li("neutral-20"),"bg-strongest":li("neutral-20"),"bg-hover":li("primary-20"),"bg-hover-strong":li("primary-20"),"bg-hover-subtle":li("primary-10"),"bg-hover-neutral":li("neutral-10"),"bg-hover-neutral-strong":li("neutral-20"),"bg-selected":li("primary-20"),"bg-selected-hover":li("primary-20"),"bg-selected-strong":li("primary-20"),"bg-selected-stronger":li("primary-40"),"bg-selected-strongest":li("primary-60"),"bg-selected-strongest-hover":li("primary-70"),"bg-disabled":li("neutral-20"),"bg-selected-disabled":li("neutral-20"),"bg-selected-stronger-disabled":li("neutral-40"),"bg-success":li("success-10"),"bg-success-hover":li("success-20"),"bg-success-strong":li("success-60"),"bg-success-strong-hover":li("success-70"),"bg-warning":li("warning-10"),"bg-warning-hover":li("warning-20"),"bg-warning-strong":li("warning-60"),"bg-warning-strong-hover":li("warning-70"),"bg-info":li("info-10"),"bg-info-hover":li("info-20"),"bg-info-strong":li("info-60"),"bg-info-strong-hover":li("info-70"),"bg-error":li("error-10"),"bg-error-hover":li("error-20"),"bg-error-strong":li("error-60"),"bg-error-strong-hover":li("error-70"),"bg-inverse":li("neutral-90"),"bg-inverse-subtle":li("neutral-80"),"bg-inverse-subtler":li("neutral-60"),"bg-inverse-subtlest":li("neutral-50"),"bg-inverse-hover":li("neutral-70"),"bg-primary":li("primary-60"),"bg-primary-subtle":li("primary-50"),"bg-primary-subtler":li("primary-20"),"bg-primary-subtlest":li("primary-10"),"bg-available":"#185339","bg-primary-hover":li("primary-70"),"bg-primary-subtlest-hover":li("primary-20"),"bg-primary-subtlest-selected":li("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:li("primary-60"),"hyperlink-hover":li("primary-70"),"hyperlink-visited":li("primary-70"),"hyperlink-inverse":li("primary-inverse"),"focus-ring":li("primary-60"),"focus-ring-inverse":li("black")},fi={text:li("neutral-30"),"text-subtle":li("neutral-40"),"text-subtler":li("neutral-50"),"text-subtlest":li("neutral-70"),"text-primary":li("neutral-10"),"text-hover":li("neutral-70"),"text-selected":li("neutral-20"),"text-selected-hover":li("neutral-10"),"text-disabled":li("neutral-50"),"text-disabled-subtle":li("neutral-60"),"text-disabled-subtlest":li("neutral-80"),"text-selected-disabled":li("neutral-40"),"text-success":li("success-40"),"text-warning":li("warning-40"),"text-error":li("brand-30"),"text-info":li("neutral-40"),"text-inverse":li("neutral-100"),icon:li("neutral-40"),"icon-subtle":li("neutral-50"),"icon-strongest":li("neutral-10"),"icon-primary":li("neutral-10"),"icon-primary-subtle":li("neutral-30"),"icon-primary-subtlest":li("neutral-60"),"icon-hover":li("neutral-70"),"icon-selected":li("brand-20"),"icon-selected-hover":li("brand-10"),"icon-disabled":li("neutral-50"),"icon-disabled-subtle":li("neutral-60"),"icon-selected-disabled":li("neutral-40"),"icon-success":li("success-40"),"icon-warning":li("warning-60"),"icon-error":li("brand-30"),"icon-error-strong":li("brand-10"),"icon-info":li("neutral-40"),"icon-inverse":li("neutral-100"),"icon-primary-inverse":"#F9B371",border:li("neutral-90"),"border-strong":li("neutral-30"),"border-stronger":li("neutral-20"),"border-primary":li("neutral-40"),"border-primary-subtle":li("neutral-60"),"border-hover":li("neutral-80"),"border-hover-strong":li("neutral-10"),"border-selected":li("brand-20"),"border-selected-subtle":li("neutral-40"),"border-selected-subtlest":li("neutral-70"),"border-selected-hover":li("neutral-10"),"border-focus":li("neutral-20"),"border-focus-strong":li("neutral-10"),"border-disabled":li("neutral-90"),"border-selected-disabled":li("neutral-80"),"border-success":li("success-40"),"border-warning":li("warning-60"),"border-error":li("brand-30"),"border-error-focus":li("brand-20"),"border-error-focus-strong":li("brand-10"),"border-error-strong":li("brand-20"),"border-info":li("neutral-40"),bg:li("neutral-100"),"bg-strong":li("neutral-95"),"bg-stronger":li("neutral-90"),"bg-strongest":li("neutral-80"),"bg-hover":li("brand-90"),"bg-hover-strong":li("brand-80"),"bg-hover-subtle":li("neutral-90"),"bg-hover-neutral":li("neutral-90"),"bg-hover-neutral-strong":li("neutral-90"),"bg-selected":li("brand-100"),"bg-selected-hover":li("brand-30"),"bg-selected-strong":li("brand-50"),"bg-selected-stronger":li("brand-40"),"bg-selected-strongest":li("brand-20"),"bg-selected-strongest-hover":li("brand-10"),"bg-disabled":li("neutral-90"),"bg-selected-disabled":li("neutral-90"),"bg-selected-stronger-disabled":li("neutral-80"),"bg-success":li("success-100"),"bg-success-hover":li("success-95"),"bg-success-strong":li("success-50"),"bg-success-strong-hover":li("success-40"),"bg-warning":li("warning-100"),"bg-warning-hover":li("warning-95"),"bg-warning-strong":li("warning-50"),"bg-warning-strong-hover":li("warning-40"),"bg-info":li("neutral-95"),"bg-info-hover":li("info-95"),"bg-info-strong":li("info-50"),"bg-info-strong-hover":li("info-40"),"bg-error":li("brand-100"),"bg-error-hover":li("error-95"),"bg-error-strong":li("error-50"),"bg-error-strong-hover":li("error-40"),"bg-inverse":li("neutral-40"),"bg-inverse-subtle":li("neutral-60"),"bg-inverse-subtler":li("neutral-70"),"bg-inverse-subtlest":li("neutral-80"),"bg-inverse-hover":li("neutral-30"),"bg-primary":li("brand-20"),"bg-primary-subtle":li("brand-60"),"bg-primary-subtler":li("brand-80"),"bg-primary-subtlest":li("brand-100"),"bg-available":li("success-60"),"bg-primary-hover":li("brand-10"),"bg-primary-subtlest-hover":li("brand-80"),"bg-primary-subtlest-selected":li("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:li("neutral-10"),"hyperlink-hover":li("neutral-40"),"hyperlink-visited":li("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":li("primary-50"),"focus-ring-inverse":li("white")},hi={text:li("neutral-20"),"text-subtle":li("neutral-30"),"text-subtler":li("neutral-50"),"text-subtlest":li("neutral-60"),"text-primary":li("primary-50"),"text-hover":li("primary-40"),"text-selected":li("primary-50"),"text-selected-hover":li("primary-40"),"text-disabled":li("neutral-50"),"text-disabled-subtle":li("neutral-60"),"text-disabled-subtlest":li("neutral-80"),"text-selected-disabled":li("neutral-20"),"text-success":li("success-40"),"text-warning":li("warning-40"),"text-error":li("error-40"),"text-info":li("info-40"),"text-inverse":li("white"),icon:li("neutral-50"),"icon-subtle":li("neutral-60"),"icon-strongest":li("neutral-20"),"icon-primary":li("primary-50"),"icon-primary-subtle":li("primary-60"),"icon-primary-subtlest":li("primary-70"),"icon-hover":li("primary-40"),"icon-selected":li("primary-50"),"icon-selected-hover":li("primary-40"),"icon-disabled":li("neutral-50"),"icon-disabled-subtle":li("neutral-60"),"icon-selected-disabled":li("neutral-60"),"icon-success":li("success-50"),"icon-warning":li("warning-60"),"icon-error":li("error-50"),"icon-error-strong":li("error-40"),"icon-info":li("info-50"),"icon-inverse":li("white"),"icon-primary-inverse":li("primary-inverse"),border:li("neutral-90"),"border-strong":li("neutral-70"),"border-stronger":li("neutral-50"),"border-primary":li("primary-50"),"border-primary-subtle":li("primary-60"),"border-hover":li("primary-90"),"border-hover-strong":li("primary-60"),"border-selected":li("primary-50"),"border-selected-subtle":li("primary-70"),"border-selected-subtlest":li("primary-90"),"border-selected-hover":li("primary-40"),"border-focus":li("primary-60"),"border-focus-strong":li("primary-50"),"border-disabled":li("neutral-90"),"border-selected-disabled":li("neutral-70"),"border-success":li("success-60"),"border-warning":li("warning-60"),"border-error":li("error-60"),"border-error-focus":li("error-60"),"border-error-focus-strong":li("error-40"),"border-error-strong":li("error-40"),"border-info":li("info-60"),bg:li("white"),"bg-strong":li("neutral-100"),"bg-stronger":li("neutral-95"),"bg-strongest":li("neutral-90"),"bg-hover":li("primary-95"),"bg-hover-strong":li("primary-90"),"bg-hover-subtle":li("primary-100"),"bg-hover-neutral":li("neutral-100"),"bg-hover-neutral-strong":li("neutral-90"),"bg-selected":li("primary-95"),"bg-selected-hover":li("primary-90"),"bg-selected-strong":li("primary-90"),"bg-selected-stronger":li("primary-70"),"bg-selected-strongest":li("primary-50"),"bg-selected-strongest-hover":li("primary-40"),"bg-disabled":li("neutral-95"),"bg-selected-disabled":li("neutral-95"),"bg-selected-stronger-disabled":li("neutral-70"),"bg-success":li("success-100"),"bg-success-hover":li("success-95"),"bg-success-strong":li("success-50"),"bg-success-strong-hover":li("success-40"),"bg-warning":li("warning-100"),"bg-warning-hover":li("warning-95"),"bg-warning-strong":li("warning-50"),"bg-warning-strong-hover":li("warning-40"),"bg-info":li("info-100"),"bg-info-hover":li("info-95"),"bg-info-strong":li("info-50"),"bg-info-strong-hover":li("info-40"),"bg-error":li("error-100"),"bg-error-hover":li("error-95"),"bg-error-strong":li("error-50"),"bg-error-strong-hover":li("error-40"),"bg-inverse":li("neutral-20"),"bg-inverse-subtle":li("neutral-30"),"bg-inverse-subtler":li("neutral-50"),"bg-inverse-subtlest":li("neutral-60"),"bg-inverse-hover":li("neutral-40"),"bg-primary":li("primary-50"),"bg-primary-subtle":li("primary-60"),"bg-primary-subtler":li("primary-95"),"bg-primary-subtlest":li("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":li("primary-40"),"bg-primary-subtlest-hover":li("primary-90"),"bg-primary-subtlest-selected":li("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:li("primary-50"),"hyperlink-hover":li("primary-40"),"hyperlink-visited":li("primary-40"),"hyperlink-inverse":li("primary-inverse"),"focus-ring":li("primary-50"),"focus-ring-inverse":li("white")},pi={text:li("neutral-100"),"text-subtle":li("neutral-80"),"text-subtler":li("neutral-60"),"text-subtlest":li("neutral-50"),"text-primary":li("primary-60"),"text-hover":li("primary-70"),"text-selected":li("primary-60"),"text-selected-hover":li("primary-70"),"text-disabled":li("neutral-60"),"text-disabled-subtle":li("neutral-50"),"text-disabled-subtlest":li("neutral-30"),"text-selected-disabled":li("neutral-90"),"text-success":li("success-70"),"text-warning":li("warning-70"),"text-error":li("error-70"),"text-info":li("info-70"),"text-inverse":li("black"),icon:li("neutral-60"),"icon-subtle":li("neutral-50"),"icon-strongest":li("neutral-90"),"icon-primary":li("primary-60"),"icon-primary-subtle":li("primary-50"),"icon-primary-subtlest":li("primary-40"),"icon-hover":li("primary-70"),"icon-selected":li("primary-60"),"icon-selected-hover":li("primary-70"),"icon-disabled":li("neutral-60"),"icon-disabled-subtle":li("neutral-50"),"icon-selected-disabled":li("neutral-50"),"icon-success":li("success-60"),"icon-warning":li("warning-50"),"icon-error":li("error-60"),"icon-error-strong":li("error-70"),"icon-info":li("info-60"),"icon-inverse":li("black"),"icon-primary-inverse":li("primary-inverse"),border:li("neutral-20"),"border-strong":li("neutral-40"),"border-stronger":li("neutral-60"),"border-primary":li("primary-60"),"border-primary-subtle":li("primary-50"),"border-hover":li("primary-20"),"border-hover-strong":li("primary-50"),"border-selected":li("primary-60"),"border-selected-subtle":li("primary-40"),"border-selected-subtlest":li("primary-20"),"border-selected-hover":li("primary-70"),"border-focus":li("primary-50"),"border-focus-strong":li("primary-60"),"border-disabled":li("neutral-20"),"border-selected-disabled":li("neutral-40"),"border-success":li("success-50"),"border-warning":li("warning-50"),"border-error":li("error-50"),"border-error-focus":li("error-50"),"border-error-focus-strong":li("error-70"),"border-error-strong":li("error-70"),"border-info":li("info-50"),bg:li("black"),"bg-strong":li("neutral-10"),"bg-stronger":li("neutral-20"),"bg-strongest":li("neutral-20"),"bg-hover":li("primary-20"),"bg-hover-strong":li("primary-20"),"bg-hover-subtle":li("primary-10"),"bg-hover-neutral":li("neutral-10"),"bg-hover-neutral-strong":li("neutral-20"),"bg-selected":li("primary-20"),"bg-selected-hover":li("primary-20"),"bg-selected-strong":li("primary-20"),"bg-selected-stronger":li("primary-40"),"bg-selected-strongest":li("primary-60"),"bg-selected-strongest-hover":li("primary-70"),"bg-disabled":li("neutral-20"),"bg-selected-disabled":li("neutral-20"),"bg-selected-stronger-disabled":li("neutral-40"),"bg-success":li("success-10"),"bg-success-hover":li("success-20"),"bg-success-strong":li("success-60"),"bg-success-strong-hover":li("success-70"),"bg-warning":li("warning-10"),"bg-warning-hover":li("warning-20"),"bg-warning-strong":li("warning-60"),"bg-warning-strong-hover":li("warning-70"),"bg-info":li("info-10"),"bg-info-hover":li("info-20"),"bg-info-strong":li("info-60"),"bg-info-strong-hover":li("info-70"),"bg-error":li("error-10"),"bg-error-hover":li("error-20"),"bg-error-strong":li("error-60"),"bg-error-strong-hover":li("error-70"),"bg-inverse":li("neutral-90"),"bg-inverse-subtle":li("neutral-80"),"bg-inverse-subtler":li("neutral-60"),"bg-inverse-subtlest":li("neutral-50"),"bg-inverse-hover":li("neutral-70"),"bg-primary":li("primary-60"),"bg-primary-subtle":li("primary-50"),"bg-primary-subtler":li("primary-20"),"bg-primary-subtlest":li("primary-10"),"bg-available":"#185339","bg-primary-hover":li("primary-70"),"bg-primary-subtlest-hover":li("primary-20"),"bg-primary-subtlest-selected":li("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:li("primary-60"),"hyperlink-hover":li("primary-70"),"hyperlink-visited":li("primary-70"),"hyperlink-inverse":li("primary-inverse"),"focus-ring":li("primary-60"),"focus-ring-inverse":li("black")},gi={collections:{lifesg:di,bookingsg:di,rbs:di,mylegacy:di,ccube:di,oneservice:di,pa:fi,a11yplayground:hi,supportgowhere:di,imda:di},defaultValue:"lifesg"},mi={collections:{lifesg:ui,bookingsg:ui,rbs:ui,mylegacy:ui,ccube:ui,oneservice:ui,pa:ui,a11yplayground:pi,supportgowhere:ui,imda:ui},defaultValue:"lifesg"},bi=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Vo(o?mi:gi,null==n?void 0:n.colourScheme),a=o?"semanticColourDark":"semanticColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a],l=s?Yo(i,e,s):i[e];return"function"==typeof l?l(t):l},vi={text:bi("text"),"text-subtle":bi("text-subtle"),"text-subtler":bi("text-subtler"),"text-subtlest":bi("text-subtlest"),"text-primary":bi("text-primary"),"text-hover":bi("text-hover"),"text-selected":bi("text-selected"),"text-selected-hover":bi("text-selected-hover"),"text-disabled":bi("text-disabled"),"text-disabled-subtle":bi("text-disabled-subtle"),"text-disabled-subtlest":bi("text-disabled-subtlest"),"text-selected-disabled":bi("text-selected-disabled"),"text-success":bi("text-success"),"text-warning":bi("text-warning"),"text-error":bi("text-error"),"text-info":bi("text-info"),"text-inverse":bi("text-inverse"),icon:bi("icon"),"icon-subtle":bi("icon-subtle"),"icon-strongest":bi("icon-strongest"),"icon-primary":bi("icon-primary"),"icon-primary-subtle":bi("icon-primary-subtle"),"icon-primary-subtlest":bi("icon-primary-subtlest"),"icon-hover":bi("icon-hover"),"icon-selected":bi("icon-selected"),"icon-selected-hover":bi("icon-selected-hover"),"icon-disabled":bi("icon-disabled"),"icon-disabled-subtle":bi("icon-disabled-subtle"),"icon-selected-disabled":bi("icon-selected-disabled"),"icon-success":bi("icon-success"),"icon-warning":bi("icon-warning"),"icon-error":bi("icon-error"),"icon-error-strong":bi("icon-error-strong"),"icon-info":bi("icon-info"),"icon-inverse":bi("icon-inverse"),"icon-primary-inverse":bi("icon-primary-inverse"),border:bi("border"),"border-strong":bi("border-strong"),"border-stronger":bi("border-stronger"),"border-primary":bi("border-primary"),"border-primary-subtle":bi("border-primary-subtle"),"border-hover":bi("border-hover"),"border-hover-strong":bi("border-hover-strong"),"border-selected":bi("border-selected"),"border-selected-subtle":bi("border-selected-subtle"),"border-selected-subtlest":bi("border-selected-subtlest"),"border-selected-hover":bi("border-selected-hover"),"border-focus":bi("border-focus"),"border-focus-strong":bi("border-focus-strong"),"border-disabled":bi("border-disabled"),"border-selected-disabled":bi("border-selected-disabled"),"border-success":bi("border-success"),"border-warning":bi("border-warning"),"border-error":bi("border-error"),"border-error-focus":bi("border-error-focus"),"border-error-focus-strong":bi("border-error-focus-strong"),"border-error-strong":bi("border-error-strong"),"border-info":bi("border-info"),bg:bi("bg"),"bg-strong":bi("bg-strong"),"bg-stronger":bi("bg-stronger"),"bg-strongest":bi("bg-strongest"),"bg-hover":bi("bg-hover"),"bg-hover-strong":bi("bg-hover-strong"),"bg-hover-subtle":bi("bg-hover-subtle"),"bg-hover-neutral":bi("bg-hover-neutral"),"bg-hover-neutral-strong":bi("bg-hover-neutral-strong"),"bg-selected":bi("bg-selected"),"bg-selected-hover":bi("bg-selected-hover"),"bg-selected-strong":bi("bg-selected-strong"),"bg-selected-stronger":bi("bg-selected-stronger"),"bg-selected-strongest":bi("bg-selected-strongest"),"bg-selected-strongest-hover":bi("bg-selected-strongest-hover"),"bg-disabled":bi("bg-disabled"),"bg-selected-disabled":bi("bg-selected-disabled"),"bg-selected-stronger-disabled":bi("bg-selected-stronger-disabled"),"bg-success":bi("bg-success"),"bg-success-hover":bi("bg-success-hover"),"bg-success-strong":bi("bg-success-strong"),"bg-success-strong-hover":bi("bg-success-strong-hover"),"bg-warning":bi("bg-warning"),"bg-warning-hover":bi("bg-warning-hover"),"bg-warning-strong":bi("bg-warning-strong"),"bg-warning-strong-hover":bi("bg-warning-strong-hover"),"bg-info":bi("bg-info"),"bg-info-hover":bi("bg-info-hover"),"bg-info-strong":bi("bg-info-strong"),"bg-info-strong-hover":bi("bg-info-strong-hover"),"bg-error":bi("bg-error"),"bg-error-hover":bi("bg-error-hover"),"bg-error-strong":bi("bg-error-strong"),"bg-error-strong-hover":bi("bg-error-strong-hover"),"bg-inverse":bi("bg-inverse"),"bg-inverse-subtle":bi("bg-inverse-subtle"),"bg-inverse-subtler":bi("bg-inverse-subtler"),"bg-inverse-subtlest":bi("bg-inverse-subtlest"),"bg-inverse-hover":bi("bg-inverse-hover"),"bg-primary":bi("bg-primary"),"bg-primary-subtle":bi("bg-primary-subtle"),"bg-primary-subtler":bi("bg-primary-subtler"),"bg-primary-subtlest":bi("bg-primary-subtlest"),"bg-available":bi("bg-available"),"bg-primary-hover":bi("bg-primary-hover"),"bg-primary-subtlest-hover":bi("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":bi("bg-primary-subtlest-selected"),"overlay-strong":bi("overlay-strong"),"overlay-subtle":bi("overlay-subtle"),hyperlink:bi("hyperlink"),"hyperlink-hover":bi("hyperlink-hover"),"hyperlink-visited":bi("hyperlink-visited"),"hyperlink-inverse":bi("hyperlink-inverse"),"focus-ring":bi("focus-ring"),"focus-ring-inverse":bi("focus-ring-inverse")},yi={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:qo["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,d=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:vi.border(t),u=qo.solid;return O`
            border: ${l} ${u} ${d};
            border-radius: ${c};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:qo["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,d=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:vi.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${d}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return O`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${c};
        `}}},defaultValue:"default"},xi=e=>1===e.length&&"theme"in e[0],wi=e=>(...t)=>r=>{const n=xi(t)?[]:t,o=xi(t)?t[0]:r,i=o.theme;return(0,Vo(yi,null==i?void 0:i.borderScheme)[e])(...n)(o)},$i={solid:wi("solid"),"dashed-default":wi("dashed-default")},Ci={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Si=e=>t=>{var r;const n=t.theme,o=Vo(Ci,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Yo(o,e,n.overrides.breakpoint):o[e],i},Di={"xxs-min":Si("xxs-min"),"xxs-max":Si("xxs-max"),"xs-min":Si("xs-min"),"xs-max":Si("xs-max"),"sm-min":Si("sm-min"),"sm-max":Si("sm-max"),"md-min":Si("md-min"),"md-max":Si("md-max"),"lg-min":Si("lg-min"),"lg-max":Si("lg-max"),"xl-min":Si("xl-min"),"xl-max":Si("xl-max"),"xxl-min":Si("xxl-min"),"xxs-column":Si("xxs-column"),"xs-column":Si("xs-column"),"sm-column":Si("sm-column"),"md-column":Si("md-column"),"lg-column":Si("lg-column"),"xl-column":Si("xl-column"),"xxl-column":Si("xxl-column"),"xxs-gutter":Si("xxs-gutter"),"xs-gutter":Si("xs-gutter"),"sm-gutter":Si("sm-gutter"),"md-gutter":Si("md-gutter"),"lg-gutter":Si("lg-gutter"),"xl-gutter":Si("xl-gutter"),"xxl-gutter":Si("xxl-gutter"),"xxs-margin":Si("xxs-margin"),"xs-margin":Si("xs-margin"),"sm-margin":Si("sm-margin"),"md-margin":Si("md-margin"),"lg-margin":Si("lg-margin"),"xl-margin":Si("xl-margin"),"xxl-margin":Si("xxl-margin")},ki=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=Di["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),Ei={MaxWidth:ki("max-width"),MinWidth:ki("min-width")},Fi={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Oi=e=>t=>{var r;const n=t.theme,o=Vo(Fi,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Yo(o,e,n.overrides.fontSpec):o[e]},_i={"heading-size-xxl":Oi("heading-size-xxl"),"heading-size-xl":Oi("heading-size-xl"),"heading-size-lg":Oi("heading-size-lg"),"heading-size-md":Oi("heading-size-md"),"heading-size-sm":Oi("heading-size-sm"),"heading-size-xs":Oi("heading-size-xs"),"heading-lh-xxl":Oi("heading-lh-xxl"),"heading-lh-xl":Oi("heading-lh-xl"),"heading-lh-lg":Oi("heading-lh-lg"),"heading-lh-md":Oi("heading-lh-md"),"heading-lh-sm":Oi("heading-lh-sm"),"heading-lh-xs":Oi("heading-lh-xs"),"heading-ls-xxl":Oi("heading-ls-xxl"),"heading-ls-xl":Oi("heading-ls-xl"),"heading-ls-lg":Oi("heading-ls-lg"),"heading-ls-md":Oi("heading-ls-md"),"heading-ls-sm":Oi("heading-ls-sm"),"heading-ls-xs":Oi("heading-ls-xs"),"weight-light":Oi("weight-light"),"weight-regular":Oi("weight-regular"),"weight-semibold":Oi("weight-semibold"),"weight-bold":Oi("weight-bold"),"font-family":Oi("font-family"),"body-size-baseline":Oi("body-size-baseline"),"body-size-md":Oi("body-size-md"),"body-size-sm":Oi("body-size-sm"),"body-size-xs":Oi("body-size-xs"),"body-lh-baseline":Oi("body-lh-baseline"),"body-lh-md":Oi("body-lh-md"),"body-lh-sm":Oi("body-lh-sm"),"body-lh-xs":Oi("body-lh-xs"),"body-ls-baseline":Oi("body-ls-baseline"),"body-ls-md":Oi("body-ls-md"),"body-ls-sm":Oi("body-ls-sm"),"body-ls-xs":Oi("body-ls-xs"),"form-label-size":Oi("form-label-size"),"form-description-size":Oi("form-description-size"),"form-label-lh":Oi("form-label-lh"),"form-description-lh":Oi("form-description-lh"),"form-label-ls":Oi("form-label-ls"),"form-description-ls":Oi("form-description-ls")},Ti=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return O`
        font-family: ${Oi("font-family")};
        font-size: ${Oi(e)};
        font-weight: ${Oi(t)};
        line-height: ${Oi(r)};
        letter-spacing: ${Oi(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Ii=(e={})=>({"heading-xxl-light":Ti("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Ti("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Ti("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Ti("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Ti("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Ti("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Ti("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Ti("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Ti("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Ti("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Ti("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Ti("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Ti("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Ti("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Ti("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Ti("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Ti("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Ti("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Ti("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Ti("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Ti("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Ti("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Ti("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Ti("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Ti("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Ti("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Ti("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Ti("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Ti("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Ti("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Ti("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Ti("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Ti("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Ti("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Ti("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Ti("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Ti("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Ti("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Ti("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Ti("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Ti("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Ti("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Mi=Ii({disableLigatures:!0}),Ai={collections:{default:Ii(),bookingsg:Mi,pa:Ii({disableLigatures:!0}),a11yplayground:Ii({disableLigatures:!0}),supportgowhere:Ii({disableLigatures:!0}),imda:Ii({disableLigatures:!0})},defaultValue:"default"},ji=e=>t=>{var r;const n=t.theme,o=Vo(Ai,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Yo(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},Bi={"heading-xxl-light":ji("heading-xxl-light"),"heading-xxl-regular":ji("heading-xxl-regular"),"heading-xxl-semibold":ji("heading-xxl-semibold"),"heading-xxl-bold":ji("heading-xxl-bold"),"heading-xl-light":ji("heading-xl-light"),"heading-xl-regular":ji("heading-xl-regular"),"heading-xl-semibold":ji("heading-xl-semibold"),"heading-xl-bold":ji("heading-xl-bold"),"heading-lg-light":ji("heading-lg-light"),"heading-lg-regular":ji("heading-lg-regular"),"heading-lg-semibold":ji("heading-lg-semibold"),"heading-lg-bold":ji("heading-lg-bold"),"heading-md-light":ji("heading-md-light"),"heading-md-regular":ji("heading-md-regular"),"heading-md-semibold":ji("heading-md-semibold"),"heading-md-bold":ji("heading-md-bold"),"heading-sm-light":ji("heading-sm-light"),"heading-sm-regular":ji("heading-sm-regular"),"heading-sm-semibold":ji("heading-sm-semibold"),"heading-sm-bold":ji("heading-sm-bold"),"heading-xs-light":ji("heading-xs-light"),"heading-xs-regular":ji("heading-xs-regular"),"heading-xs-semibold":ji("heading-xs-semibold"),"heading-xs-bold":ji("heading-xs-bold"),"body-baseline-light":ji("body-baseline-light"),"body-baseline-regular":ji("body-baseline-regular"),"body-baseline-semibold":ji("body-baseline-semibold"),"body-baseline-bold":ji("body-baseline-bold"),"body-md-light":ji("body-md-light"),"body-md-regular":ji("body-md-regular"),"body-md-semibold":ji("body-md-semibold"),"body-md-bold":ji("body-md-bold"),"body-sm-light":ji("body-sm-light"),"body-sm-regular":ji("body-sm-regular"),"body-sm-semibold":ji("body-sm-semibold"),"body-sm-bold":ji("body-sm-bold"),"body-xs-light":ji("body-xs-light"),"body-xs-regular":ji("body-xs-regular"),"body-xs-semibold":ji("body-xs-semibold"),"body-xs-bold":ji("body-xs-bold"),"form-label":ji("form-label"),"form-description":ji("form-description")},Ri={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},zi=e=>t=>{var r;const n=t.theme,o=Vo(Ri,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Yo(o,e,n.overrides.motion):o[e]},Pi={"duration-150":zi("duration-150"),"duration-250":zi("duration-250"),"duration-350":zi("duration-350"),"duration-500":zi("duration-500"),"duration-800":zi("duration-800"),"duration-1000":zi("duration-1000"),"ease-default":zi("ease-default"),"ease-standard":zi("ease-standard"),"ease-entrance":zi("ease-entrance"),"ease-exit":zi("ease-exit")},Li={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Ni=e=>t=>{var r;const n=t.theme,o=Vo(Li,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Yo(o,e,n.overrides.radius)}px`:`${o[e]}px`},Hi={none:Ni("none"),xs:Ni("xs"),sm:Ni("sm"),md:Ni("md"),lg:Ni("lg"),full:Ni("full")},Wi=(e,t,r)=>n=>{const o=bi(t)(n)||li(t)(n);return`${e} rgba(from ${o} r g b / ${100*r}%)`},Yi={collections:{default:{"xs-subtle":Wi("0 0 4px 1px","neutral-50",.24),"xs-strong":Wi("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":Wi("0 0 4px 1px","border-focus",.5),"xs-error-strong":Wi("0 0 4px 1px","border-error",.5),"sm-subtle":Wi("0 2px 4px 0","neutral-50",.24),"sm-strong":Wi("0 2px 4px 0","neutral-50",.5),"md-subtle":Wi("0 2px 8px 0","neutral-50",.24),"md-strong":Wi("0 2px 8px 0","neutral-50",.5),"lg-subtle":Wi("0 2px 12px 1px","neutral-50",.24),"lg-strong":Wi("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},Vi=e=>t=>{var r;const n=t.theme,o=Vo(Yi,null==n?void 0:n.shadowScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.shadow)?Yo(o,e,n.overrides.shadow):o[e];return"function"==typeof i?i(t):i},Ui={"xs-subtle":Vi("xs-subtle"),"xs-strong":Vi("xs-strong"),"xs-focus-strong":Vi("xs-focus-strong"),"xs-error-strong":Vi("xs-error-strong"),"sm-subtle":Vi("sm-subtle"),"sm-strong":Vi("sm-strong"),"md-subtle":Vi("md-subtle"),"md-strong":Vi("md-strong"),"lg-subtle":Vi("lg-subtle"),"lg-strong":Vi("lg-strong")},Ki={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},qi=e=>t=>{var r;const n=t.theme,o=Vo(Ki,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Yo(o,e,n.overrides.spacing)}px`:`${o[e]}px`},Gi={"spacing-0":qi("spacing-0"),"spacing-4":qi("spacing-4"),"spacing-8":qi("spacing-8"),"spacing-12":qi("spacing-12"),"spacing-16":qi("spacing-16"),"spacing-20":qi("spacing-20"),"spacing-24":qi("spacing-24"),"spacing-32":qi("spacing-32"),"spacing-40":qi("spacing-40"),"spacing-48":qi("spacing-48"),"spacing-64":qi("spacing-64"),"spacing-72":qi("spacing-72"),"layout-xs":qi("layout-xs"),"layout-sm":qi("layout-sm"),"layout-md":qi("layout-md"),"layout-lg":qi("layout-lg"),"layout-xl":qi("layout-xl"),"layout-xxl":qi("layout-xxl"),"layout-xxxl":qi("layout-xxxl")},Zi=(e,t)=>Object.assign(Object.assign({},e),{colourMode:t}),Qi=Object.assign(Object.assign({},vi),{Primitive:ci}),Xi=Object.assign(Object.assign({},Bi),{Spec:_i}),Ji=Pi,ea=Object.assign(Object.assign({},qo),{Util:$i}),ta=Gi,ra=Hi,na=Ui,oa=Di,ia=Ei,aa={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},sa={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},la={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},ca={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},da={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},ua={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},fa={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},ha={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},pa={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},ga={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"};Object.assign(Object.assign({},aa),{light:Zi(aa,"light"),dark:Zi(aa,"dark")}),Object.assign(Object.assign({},sa),{light:Zi(sa,"light"),dark:Zi(sa,"dark")}),Object.assign(Object.assign({},la),{light:Zi(la,"light"),dark:Zi(la,"dark")}),Object.assign(Object.assign({},ca),{light:Zi(ca,"light"),dark:Zi(ca,"dark")}),Object.assign(Object.assign({},da),{light:Zi(da,"light"),dark:Zi(da,"dark")}),Object.assign(Object.assign({},ua),{light:Zi(ua,"light"),dark:Zi(ua,"dark")}),Object.assign(Object.assign({},fa),{light:Zi(fa,"light"),dark:Zi(fa,"dark")}),Object.assign(Object.assign({},ha),{light:Zi(ha,"light"),dark:Zi(ha,"dark")}),Object.assign(Object.assign({},pa),{light:Zi(pa,"light"),dark:Zi(pa,"dark")}),Object.assign(Object.assign({},ga),{light:Zi(ga,"light"),dark:Zi(ga,"dark")});const ma=e=>O`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,ba=(e,t,r=!1)=>O`
        ${Xi[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,va=e=>{if(e)return O`
            ${ma(e)}
        `},ya=(e,t,r,n,o)=>O`
    ${ba(e,t||"regular",n)}
    ${((e=!1,t=!1,r)=>t?O`
            display: block;
            ${va(r)}
        `:e?O`
            display: inline;
        `:O`
            display: block;
            ${va(r)}
        `)(r,n,o)}
    color: ${Qi.text};
`,xa=F.div`
    ${e=>ya(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,wa=F.a`
    ${e=>{var t;return O`
        ${ba(e.$textStyle,e.$weight||"regular")}
        color: ${Qi.hyperlink};
        text-decoration: ${null!==(t=e.$underlineStyle)&&void 0!==t?t:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${Qi["text-hover"]};
        }
    `}}
`,$a=F(I)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Ca;!function(r){const n=(t,r,n)=>{const i=(n,o)=>{var{weight:i,inline:a,paragraph:s,maxLines:l}=n,c=ct(n,["weight","inline","paragraph","maxLines"]);return e(xa,Object.assign({ref:o,as:a?"span":t,$textStyle:r,$weight:i,$inline:a,$paragraph:s,$maxLines:l},c))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(t,r)=>{const n=(r,n)=>{var{weight:o,inline:i,paragraph:a,maxLines:s}=r,l=ct(r,["weight","inline","paragraph","maxLines"]);return e(xa,Object.assign({ref:n,as:i?"span":"p",$textStyle:t,$weight:o,$inline:i,$paragraph:a,$maxLines:s},l))};return n.displayName=`Typography.${r}`,o.forwardRef(n)};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const a=(r,n)=>{const i=(n,o)=>{var{weight:i,children:a,external:s,underlineStyle:l="underline"}=n,c=ct(n,["weight","children","external","underlineStyle"]);return t(wa,Object.assign({ref:o,$textStyle:r,$weight:i,$underlineStyle:l},c,{children:[a,s&&e($a,{})]}))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.LinkBL=a("body-baseline","LinkBL"),r.LinkMD=a("body-md","LinkMD"),r.LinkSM=a("body-sm","LinkSM"),r.LinkXS=a("body-xs","LinkXS")}(Ca||(Ca={}));const Sa=F.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return O`
                ${ea.Util["dashed-default"]({radius:ra.sm,thickness:ea["width-040"],colour:Qi.border})}
                padding: ${ta["spacing-32"]};

                ${ia.MaxWidth.md} {
                    padding: ${ta["spacing-32"]} ${ta["spacing-20"]};
                }
            `}}
`,Da=F.input`
    display: none;
`,ka=F.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${Qi["bg-primary-subtler"]};
    ${ea.Util["dashed-default"]({radius:ra.sm,thickness:ea["width-040"],colour:Qi["border-primary"]})}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,Ea=F(Ca.BodyMD)`
    color: ${Qi["text-primary"]};
    text-align: center;
`,Fa=F(E)`
    color: ${Qi["icon-primary"]};
    height: 4rem;
    width: 4rem;
`,Oa=u((({children:r,accept:n,capture:o,multiple:i,id:a,className:l,name:c,border:d,disabled:u,onChange:h,"data-testid":p},g)=>{const m=s(null),{getRootProps:b,isDragActive:v}=dr({onDrop:h,noClick:!0,disabled:u});f(g,(()=>Object.assign(Object.assign({},m.current),{openFileDialog:()=>{m.current&&(m.current.value="",m.current.click())}})));return t(Sa,Object.assign({id:a,"data-testid":p||"dropzone",$border:d,className:l},b(),{children:[e(Da,{type:"file",name:c,ref:m,tabIndex:-1,"aria-hidden":!0,accept:n,capture:o,multiple:i,"data-testid":p?`${p}-input`:"dropzone-input",onChange:e=>{e.target.files&&h(Array.from(e.target.files))}}),r,v&&t(ka,{children:[e(Fa,{}),e(Ea,{weight:"semibold",children:"Drop files here"})]})]}))}));const _a="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function Ta(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function Ia(e){return"nodeType"in e}function Ma(e){var t,r;return e?Ta(e)?e:Ia(e)&&null!=(t=null==(r=e.ownerDocument)?void 0:r.defaultView)?t:window:window}function Aa(e){const{Document:t}=Ma(e);return e instanceof t}function ja(e){return!Ta(e)&&e instanceof Ma(e).HTMLElement}function Ba(e){return e instanceof Ma(e).SVGElement}function Ra(e){return e?Ta(e)?e.document:Ia(e)?Aa(e)?e:ja(e)||Ba(e)?e.ownerDocument:document:document:document}const za=_a?p:c;function Pa(e){const t=s(e);return za((()=>{t.current=e})),d((function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return null==t.current?void 0:t.current(...r)}),[])}function La(e,t){void 0===t&&(t=[e]);const r=s(e);return za((()=>{r.current!==e&&(r.current=e)}),t),r}function Na(e,t){const r=s();return a((()=>{const t=e(r.current);return r.current=t,t}),[...t])}function Ha(e){const t=Pa(e),r=s(null),n=d((e=>{e!==r.current&&(null==t||t(e,r.current)),r.current=e}),[]);return[r,n]}function Wa(e){const t=s();return c((()=>{t.current=e}),[e]),t.current}let Ya={};function Va(e,t){return a((()=>{if(t)return t;const r=null==Ya[e]?0:Ya[e]+1;return Ya[e]=r,e+"-"+r}),[e,t])}function Ua(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.reduce(((t,r)=>{const n=Object.entries(r);for(const[r,o]of n){const n=t[r];null!=n&&(t[r]=n+e*o)}return t}),{...t})}}const Ka=Ua(1),qa=Ua(-1);function Ga(e){if(!e)return!1;const{KeyboardEvent:t}=Ma(e.target);return t&&e instanceof t}function Za(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=Ma(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const Qa=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(e)return[Qa.Translate.toString(e),Qa.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}}),Xa="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Ja(e){return e.matches(Xa)?e:e.querySelector(Xa)}const es={display:"none"};function ts(e){let{id:t,value:r}=e;return o.createElement("div",{id:t,style:es},r)}function rs(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;return o.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":n,"aria-atomic":!0},r)}const ns=i(null);const os={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},is={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was moved over droppable area "+r.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was dropped over droppable area "+r.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function as(e){let{announcements:t=is,container:r,hiddenTextDescribedById:n,screenReaderInstructions:i=os}=e;const{announce:s,announcement:l}=function(){const[e,t]=g("");return{announce:d((e=>{null!=e&&t(e)}),[]),announcement:e}}(),u=Va("DndLiveRegion"),[f,h]=g(!1);if(c((()=>{h(!0)}),[]),function(e){const t=b(ns);c((()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)}),[e,t])}(a((()=>({onDragStart(e){let{active:r}=e;s(t.onDragStart({active:r}))},onDragMove(e){let{active:r,over:n}=e;t.onDragMove&&s(t.onDragMove({active:r,over:n}))},onDragOver(e){let{active:r,over:n}=e;s(t.onDragOver({active:r,over:n}))},onDragEnd(e){let{active:r,over:n}=e;s(t.onDragEnd({active:r,over:n}))},onDragCancel(e){let{active:r,over:n}=e;s(t.onDragCancel({active:r,over:n}))}})),[s,t])),!f)return null;const p=o.createElement(o.Fragment,null,o.createElement(ts,{id:n,value:i.draggable}),o.createElement(rs,{id:u,announcement:l}));return r?j(p,r):p}var ss;function ls(){}function cs(e,t){return a((()=>({sensor:e,options:null!=t?t:{}})),[e,t])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(ss||(ss={}));const ds=Object.freeze({x:0,y:0});function us(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return r-n}function fs(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return n-r}function hs(e){let{left:t,top:r,height:n,width:o}=e;return[{x:t,y:r},{x:t+o,y:r},{x:t,y:r+n},{x:t+o,y:r+n}]}function ps(e,t){if(!e||0===e.length)return null;const[r]=e;return t?r[t]:r}function gs(e,t){const r=Math.max(t.top,e.top),n=Math.max(t.left,e.left),o=Math.min(t.left+t.width,e.left+e.width),i=Math.min(t.top+t.height,e.top+e.height),a=o-n,s=i-r;if(n<o&&r<i){const r=t.width*t.height,n=e.width*e.height,o=a*s;return Number((o/(r+n-o)).toFixed(4))}return 0}const ms=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const o=[];for(const e of n){const{id:n}=e,i=r.get(n);if(i){const r=gs(i,t);r>0&&o.push({id:n,data:{droppableContainer:e,value:r}})}}return o.sort(fs)};function bs(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:ds}function vs(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.reduce(((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x})),{...t})}}const ys=vs(1);const xs={ignoreTransform:!1};function ws(e,t){void 0===t&&(t=xs);let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=Ma(e).getComputedStyle(e);t&&(r=function(e,t,r){const n=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!n)return e;const{scaleX:o,scaleY:i,x:a,y:s}=n,l=e.left-a-(1-o)*parseFloat(r),c=e.top-s-(1-i)*parseFloat(r.slice(r.indexOf(" ")+1)),d=o?e.width/o:e.width,u=i?e.height/i:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}(r,t,n))}const{top:n,left:o,width:i,height:a,bottom:s,right:l}=r;return{top:n,left:o,width:i,height:a,bottom:s,right:l}}function $s(e){return ws(e,{ignoreTransform:!0})}function Cs(e,t){const r=[];return e?function n(o){if(null!=t&&r.length>=t)return r;if(!o)return r;if(Aa(o)&&null!=o.scrollingElement&&!r.includes(o.scrollingElement))return r.push(o.scrollingElement),r;if(!ja(o)||Ba(o))return r;if(r.includes(o))return r;const i=Ma(e).getComputedStyle(o);return o!==e&&function(e,t){void 0===t&&(t=Ma(e).getComputedStyle(e));const r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const n=t[e];return"string"==typeof n&&r.test(n)}))}(o,i)&&r.push(o),function(e,t){return void 0===t&&(t=Ma(e).getComputedStyle(e)),"fixed"===t.position}(o,i)?r:n(o.parentNode)}(e):r}function Ss(e){const[t]=Cs(e,1);return null!=t?t:null}function Ds(e){return _a&&e?Ta(e)?e:Ia(e)?Aa(e)||e===Ra(e).scrollingElement?window:ja(e)?e:null:null:null}function ks(e){return Ta(e)?e.scrollX:e.scrollLeft}function Es(e){return Ta(e)?e.scrollY:e.scrollTop}function Fs(e){return{x:ks(e),y:Es(e)}}var Os;function _s(e){return!(!_a||!e)&&e===document.scrollingElement}function Ts(e){const t={x:0,y:0},r=_s(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=n.y,isRight:e.scrollLeft>=n.x,maxScroll:n,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(Os||(Os={}));const Is={x:.2,y:.2};function Ms(e,t,r,n,o){let{top:i,left:a,right:s,bottom:l}=r;void 0===n&&(n=10),void 0===o&&(o=Is);const{isTop:c,isBottom:d,isLeft:u,isRight:f}=Ts(e),h={x:0,y:0},p={x:0,y:0},g=t.height*o.y,m=t.width*o.x;return!c&&i<=t.top+g?(h.y=Os.Backward,p.y=n*Math.abs((t.top+g-i)/g)):!d&&l>=t.bottom-g&&(h.y=Os.Forward,p.y=n*Math.abs((t.bottom-g-l)/g)),!f&&s>=t.right-m?(h.x=Os.Forward,p.x=n*Math.abs((t.right-m-s)/m)):!u&&a<=t.left+m&&(h.x=Os.Backward,p.x=n*Math.abs((t.left+m-a)/m)),{direction:h,speed:p}}function As(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:o}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:o,width:e.clientWidth,height:e.clientHeight}}function js(e){return e.reduce(((e,t)=>Ka(e,Fs(t))),ds)}const Bs=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+ks(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+Es(t)),0)}]];class Rs{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=Cs(t),n=js(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,o]of Bs)for(const i of t)Object.defineProperty(this,i,{get:()=>{const t=o(r),a=n[e]-t;return this.rect[i]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class zs{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,r){var n;null==(n=this.target)||n.addEventListener(e,t,r),this.listeners.push([e,t,r])}}function Ps(e,t){const r=Math.abs(e.x),n=Math.abs(e.y);return"number"==typeof t?Math.sqrt(r**2+n**2)>t:"x"in t&&"y"in t?r>t.x&&n>t.y:"x"in t?r>t.x:"y"in t&&n>t.y}var Ls,Ns;function Hs(e){e.preventDefault()}function Ws(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(Ls||(Ls={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}(Ns||(Ns={}));const Ys={start:[Ns.Space,Ns.Enter],cancel:[Ns.Esc],end:[Ns.Space,Ns.Enter]},Vs=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case Ns.Right:return{...r,x:r.x+25};case Ns.Left:return{...r,x:r.x-25};case Ns.Down:return{...r,y:r.y+25};case Ns.Up:return{...r,y:r.y-25}}};let Us=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new zs(Ra(t)),this.windowListeners=new zs(Ma(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Ls.Resize,this.handleCancel),this.windowListeners.add(Ls.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(Ls.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,r=e.node.current;r&&function(e,t){if(void 0===t&&(t=ws),!e)return;const{top:r,left:n,bottom:o,right:i}=t(e);Ss(e)&&(o<=0||i<=0||r>=window.innerHeight||n>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(r),t(ds)}handleKeyDown(e){if(Ga(e)){const{active:t,context:r,options:n}=this.props,{keyboardCodes:o=Ys,coordinateGetter:i=Vs,scrollBehavior:a="smooth"}=n,{code:s}=e;if(o.end.includes(s))return void this.handleEnd(e);if(o.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=r.current,c=l?{x:l.left,y:l.top}:ds;this.referenceCoordinates||(this.referenceCoordinates=c);const d=i(e,{active:t,context:r.current,currentCoordinates:c});if(d){const t=qa(d,c),n={x:0,y:0},{scrollableAncestors:o}=r.current;for(const r of o){const o=e.code,{isTop:i,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:f}=Ts(r),h=As(r),p={x:Math.min(o===Ns.Right?h.right-h.width/2:h.right,Math.max(o===Ns.Right?h.left:h.left+h.width/2,d.x)),y:Math.min(o===Ns.Down?h.bottom-h.height/2:h.bottom,Math.max(o===Ns.Down?h.top:h.top+h.height/2,d.y))},g=o===Ns.Right&&!s||o===Ns.Left&&!l,m=o===Ns.Down&&!c||o===Ns.Up&&!i;if(g&&p.x!==d.x){const e=r.scrollLeft+t.x,i=o===Ns.Right&&e<=u.x||o===Ns.Left&&e>=f.x;if(i&&!t.y)return void r.scrollTo({left:e,behavior:a});n.x=i?r.scrollLeft-e:o===Ns.Right?r.scrollLeft-u.x:r.scrollLeft-f.x,n.x&&r.scrollBy({left:-n.x,behavior:a});break}if(m&&p.y!==d.y){const e=r.scrollTop+t.y,i=o===Ns.Down&&e<=u.y||o===Ns.Up&&e>=f.y;if(i&&!t.x)return void r.scrollTo({top:e,behavior:a});n.y=i?r.scrollTop-e:o===Ns.Down?r.scrollTop-u.y:r.scrollTop-f.y,n.y&&r.scrollBy({top:-n.y,behavior:a});break}}this.handleMove(e,Ka(qa(d,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault(),r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function Ks(e){return Boolean(e&&"distance"in e)}function qs(e){return Boolean(e&&"delay"in e)}Us.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=Ys,onActivation:o}=t,{active:i}=r;const{code:a}=e.nativeEvent;if(n.start.includes(a)){const t=i.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==o||o({event:e.nativeEvent}),!0)}return!1}}];class Gs{constructor(e,t,r){var n;void 0===r&&(r=function(e){const{EventTarget:t}=Ma(e);return e instanceof t?e:Ra(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:o}=e,{target:i}=o;this.props=e,this.events=t,this.document=Ra(i),this.documentListeners=new zs(this.document),this.listeners=new zs(r),this.windowListeners=new zs(Ma(i)),this.initialCoordinates=null!=(n=Za(o))?n:ds,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(Ls.Resize,this.handleCancel),this.windowListeners.add(Ls.DragStart,Hs),this.windowListeners.add(Ls.VisibilityChange,this.handleCancel),this.windowListeners.add(Ls.ContextMenu,Hs),this.documentListeners.add(Ls.Keydown,this.handleKeydown),t){if(null!=r&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(qs(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(Ks(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(Ls.Click,Ws,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Ls.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:o}=this,{onMove:i,options:{activationConstraint:a}}=o;if(!n)return;const s=null!=(t=Za(e))?t:ds,l=qa(n,s);if(!r&&a){if(Ks(a)){if(null!=a.tolerance&&Ps(l,a.tolerance))return this.handleCancel();if(Ps(l,a.distance))return this.handleStart()}return qs(a)&&Ps(l,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),i(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===Ns.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const Zs={move:{name:"pointermove"},end:{name:"pointerup"}};class Qs extends Gs{constructor(e){const{event:t}=e,r=Ra(t.target);super(e,Zs,r)}}Qs.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return!(!r.isPrimary||0!==r.button)&&(null==n||n({event:r}),!0)}}];const Xs={move:{name:"mousemove"},end:{name:"mouseup"}};var Js;!function(e){e[e.RightClick=2]="RightClick"}(Js||(Js={}));let el=class extends Gs{constructor(e){super(e,Xs,Ra(e.event.target))}};el.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return r.button!==Js.RightClick&&(null==n||n({event:r}),!0)}}];const tl={move:{name:"touchmove"},end:{name:"touchend"}};class rl extends Gs{constructor(e){super(e,tl)}static setup(){return window.addEventListener(tl.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(tl.move.name,e)};function e(){}}}var nl,ol;function il(e){let{acceleration:t,activator:r=nl.Pointer,canScroll:n,draggingRect:o,enabled:i,interval:l=5,order:u=ol.TreeOrder,pointerCoordinates:f,scrollableAncestors:h,scrollableAncestorRects:p,delta:g,threshold:m}=e;const b=function(e){let{delta:t,disabled:r}=e;const n=Wa(t);return Na((e=>{if(r||!n||!e)return al;const o={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};return{x:{[Os.Backward]:e.x[Os.Backward]||-1===o.x,[Os.Forward]:e.x[Os.Forward]||1===o.x},y:{[Os.Backward]:e.y[Os.Backward]||-1===o.y,[Os.Forward]:e.y[Os.Forward]||1===o.y}}}),[r,t,n])}({delta:g,disabled:!i}),[v,y]=function(){const e=s(null);return[d(((t,r)=>{e.current=setInterval(t,r)}),[]),d((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),x=s({x:0,y:0}),w=s({x:0,y:0}),$=a((()=>{switch(r){case nl.Pointer:return f?{top:f.y,bottom:f.y,left:f.x,right:f.x}:null;case nl.DraggableRect:return o}}),[r,o,f]),C=s(null),S=d((()=>{const e=C.current;if(!e)return;const t=x.current.x*w.current.x,r=x.current.y*w.current.y;e.scrollBy(t,r)}),[]),D=a((()=>u===ol.TreeOrder?[...h].reverse():h),[u,h]);c((()=>{if(i&&h.length&&$){for(const e of D){if(!1===(null==n?void 0:n(e)))continue;const r=h.indexOf(e),o=p[r];if(!o)continue;const{direction:i,speed:a}=Ms(e,o,$,t,m);for(const e of["x","y"])b[e][i[e]]||(a[e]=0,i[e]=0);if(a.x>0||a.y>0)return y(),C.current=e,v(S,l),x.current=a,void(w.current=i)}x.current={x:0,y:0},w.current={x:0,y:0},y()}else y()}),[t,S,n,y,i,l,JSON.stringify($),JSON.stringify(b),v,h,D,p,JSON.stringify(m)])}rl.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;const{touches:o}=r;return!(o.length>1)&&(null==n||n({event:r}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(nl||(nl={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(ol||(ol={}));const al={x:{[Os.Backward]:!1,[Os.Forward]:!1},y:{[Os.Backward]:!1,[Os.Forward]:!1}};var sl,ll;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(sl||(sl={})),function(e){e.Optimized="optimized"}(ll||(ll={}));const cl=new Map;function dl(e,t){return Na((r=>e?r||("function"==typeof t?t(e):e):null),[t,e])}function ul(e){let{callback:t,disabled:r}=e;const n=Pa(t),o=a((()=>{if(r||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(n)}),[r]);return c((()=>()=>null==o?void 0:o.disconnect()),[o]),o}function fl(e){return new Rs(ws(e),e)}function hl(e,t,r){void 0===t&&(t=fl);const[n,o]=l((function(n){if(!e)return null;var o;if(!1===e.isConnected)return null!=(o=null!=n?n:r)?o:null;const i=t(e);if(JSON.stringify(n)===JSON.stringify(i))return n;return i}),null),i=function(e){let{callback:t,disabled:r}=e;const n=Pa(t),o=a((()=>{if(r||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(n)}),[n,r]);return c((()=>()=>null==o?void 0:o.disconnect()),[o]),o}({callback(t){if(e)for(const r of t){const{type:t,target:n}=r;if("childList"===t&&n instanceof HTMLElement&&n.contains(e)){o();break}}}}),s=ul({callback:o});return za((()=>{o(),e?(null==s||s.observe(e),null==i||i.observe(document.body,{childList:!0,subtree:!0})):(null==s||s.disconnect(),null==i||i.disconnect())}),[e]),n}const pl=[];function gl(e,t){void 0===t&&(t=[]);const r=s(null);return c((()=>{r.current=null}),t),c((()=>{const t=e!==ds;t&&!r.current&&(r.current=e),!t&&r.current&&(r.current=null)}),[e]),r.current?qa(e,r.current):ds}function ml(e){return a((()=>e?function(e){const t=e.innerWidth,r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}(e):null),[e])}const bl=[];function vl(e){let{measure:t}=e;const[r,n]=g(null),o=d((e=>{for(const{target:r}of e)if(ja(r)){n((e=>{const n=t(r);return e?{...e,width:n.width,height:n.height}:n}));break}}),[t]),i=ul({callback:o}),s=d((e=>{const r=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return ja(t)?t:e}(e);null==i||i.disconnect(),r&&(null==i||i.observe(r)),n(r?t(r):null)}),[t,i]),[l,c]=Ha(s);return a((()=>({nodeRef:l,rect:r,setRef:c})),[r,l,c])}const yl=[{sensor:Qs,options:{}},{sensor:Us,options:{}}],xl={current:{}},wl={draggable:{measure:$s},droppable:{measure:$s,strategy:sl.WhileDragging,frequency:ll.Optimized},dragOverlay:{measure:ws}};class $l extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,r;return null!=(t=null==(r=this.get(e))?void 0:r.node.current)?t:void 0}}const Cl={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new $l,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:ls},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:wl,measureDroppableContainers:ls,windowRect:null,measuringScheduled:!1},Sl=i({activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:ls,draggableNodes:new Map,over:null,measureDroppableContainers:ls}),Dl=i(Cl);function kl(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new $l}}}function El(e,t){switch(t.type){case ss.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case ss.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case ss.DragEnd:case ss.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case ss.RegisterDroppable:{const{element:r}=t,{id:n}=r,o=new $l(e.droppable.containers);return o.set(n,r),{...e,droppable:{...e.droppable,containers:o}}}case ss.SetDroppableDisabled:{const{id:r,key:n,disabled:o}=t,i=e.droppable.containers.get(r);if(!i||n!==i.key)return e;const a=new $l(e.droppable.containers);return a.set(r,{...i,disabled:o}),{...e,droppable:{...e.droppable,containers:a}}}case ss.UnregisterDroppable:{const{id:r,key:n}=t,o=e.droppable.containers.get(r);if(!o||n!==o.key)return e;const i=new $l(e.droppable.containers);return i.delete(r),{...e,droppable:{...e.droppable,containers:i}}}default:return e}}function Fl(e){let{disabled:t}=e;const{active:r,activatorEvent:n,draggableNodes:o}=b(Sl),i=Wa(n),a=Wa(null==r?void 0:r.id);return c((()=>{if(!t&&!n&&i&&null!=a){if(!Ga(i))return;if(document.activeElement===i.target)return;const e=o.get(a);if(!e)return;const{activatorNode:t,node:r}=e;if(!t.current&&!r.current)return;requestAnimationFrame((()=>{for(const e of[t.current,r.current]){if(!e)continue;const t=Ja(e);if(t){t.focus();break}}}))}}),[n,t,o,a,i]),null}const Ol=i({...ds,scaleX:1,scaleY:1});var _l;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(_l||(_l={}));const Tl=m((function(e){var t,r,n,i;let{id:u,accessibility:f,autoScroll:h=!0,children:p,sensors:m=yl,collisionDetection:b=ms,measuring:v,modifiers:y,...x}=e;const w=l(El,void 0,kl),[$,C]=w,[S,D]=function(){const[e]=g((()=>new Set)),t=d((t=>(e.add(t),()=>e.delete(t))),[e]);return[d((t=>{let{type:r,event:n}=t;e.forEach((e=>{var t;return null==(t=e[r])?void 0:t.call(e,n)}))}),[e]),t]}(),[k,E]=g(_l.Uninitialized),F=k===_l.Initialized,{draggable:{active:O,nodes:_,translate:T},droppable:{containers:I}}=$,M=O?_.get(O):null,j=s({initial:null,translated:null}),B=a((()=>{var e;return null!=O?{id:O,data:null!=(e=null==M?void 0:M.data)?e:xl,rect:j}:null}),[O,M]),R=s(null),[z,P]=g(null),[L,N]=g(null),H=La(x,Object.values(x)),W=Va("DndDescribedBy",u),Y=a((()=>I.getEnabled()),[I]),V=function(e){return a((()=>({draggable:{...wl.draggable,...null==e?void 0:e.draggable},droppable:{...wl.droppable,...null==e?void 0:e.droppable},dragOverlay:{...wl.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(v),{droppableRects:U,measureDroppableContainers:K,measuringScheduled:q}=function(e,t){let{dragging:r,dependencies:n,config:o}=t;const[i,a]=g(null),{frequency:l,measure:u,strategy:f}=o,h=s(e),p=function(){switch(f){case sl.Always:return!1;case sl.BeforeDragging:return r;default:return!r}}(),m=La(p),b=d((function(e){void 0===e&&(e=[]),m.current||a((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[m]),v=s(null),y=Na((t=>{if(p&&!r)return cl;if(!t||t===cl||h.current!==e||null!=i){const t=new Map;for(let r of e){if(!r)continue;if(i&&i.length>0&&!i.includes(r.id)&&r.rect.current){t.set(r.id,r.rect.current);continue}const e=r.node.current,n=e?new Rs(u(e),e):null;r.rect.current=n,n&&t.set(r.id,n)}return t}return t}),[e,i,r,p,u]);return c((()=>{h.current=e}),[e]),c((()=>{p||b()}),[r,p]),c((()=>{i&&i.length>0&&a(null)}),[JSON.stringify(i)]),c((()=>{p||"number"!=typeof l||null!==v.current||(v.current=setTimeout((()=>{b(),v.current=null}),l))}),[l,p,b,...n]),{droppableRects:y,measureDroppableContainers:b,measuringScheduled:null!=i}}(Y,{dragging:F,dependencies:[T.x,T.y],config:V.droppable}),G=function(e,t){const r=null!==t?e.get(t):void 0,n=r?r.node.current:null;return Na((e=>{var r;return null===t?null:null!=(r=null!=n?n:e)?r:null}),[n,t])}(_,O),Z=a((()=>L?Za(L):null),[L]),Q=function(){const e=!1===(null==z?void 0:z.autoScrollEnabled),t="object"==typeof h?!1===h.enabled:!1===h,r=F&&!e&&!t;if("object"==typeof h)return{...h,enabled:r};return{enabled:r}}(),X=function(e,t){return dl(e,t)}(G,V.draggable.measure);!function(e){let{activeNode:t,measure:r,initialRect:n,config:o=!0}=e;const i=s(!1),{x:a,y:l}="boolean"==typeof o?{x:o,y:o}:o;za((()=>{if(!a&&!l||!t)return void(i.current=!1);if(i.current||!n)return;const e=null==t?void 0:t.node.current;if(!e||!1===e.isConnected)return;const o=bs(r(e),n);if(a||(o.x=0),l||(o.y=0),i.current=!0,Math.abs(o.x)>0||Math.abs(o.y)>0){const t=Ss(e);t&&t.scrollBy({top:o.y,left:o.x})}}),[t,a,l,n,r])}({activeNode:O?_.get(O):null,config:Q.layoutShiftCompensation,initialRect:X,measure:V.draggable.measure});const J=hl(G,V.draggable.measure,X),ee=hl(G?G.parentElement:null),te=s({activatorEvent:null,active:null,activeNode:G,collisionRect:null,collisions:null,droppableRects:U,draggableNodes:_,draggingNode:null,draggingNodeRect:null,droppableContainers:I,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),re=I.getNodeFor(null==(t=te.current.over)?void 0:t.id),ne=vl({measure:V.dragOverlay.measure}),oe=null!=(r=ne.nodeRef.current)?r:G,ie=F?null!=(n=ne.rect)?n:J:null,ae=Boolean(ne.nodeRef.current&&ne.rect),se=bs(le=ae?null:J,dl(le));var le;const ce=ml(oe?Ma(oe):null),de=function(e){const t=s(e),r=Na((r=>e?r&&r!==pl&&e&&t.current&&e.parentNode===t.current.parentNode?r:Cs(e):pl),[e]);return c((()=>{t.current=e}),[e]),r}(F?null!=re?re:G:null),ue=function(e,t){void 0===t&&(t=ws);const[r]=e,n=ml(r?Ma(r):null),[o,i]=l((function(){return e.length?e.map((e=>_s(e)?n:new Rs(t(e),e))):bl}),bl),a=ul({callback:i});return e.length>0&&o===bl&&i(),za((()=>{e.length?e.forEach((e=>null==a?void 0:a.observe(e))):(null==a||a.disconnect(),i())}),[e]),o}(de),fe=function(e,t){let{transform:r,...n}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...n})),r):r}(y,{transform:{x:T.x-se.x,y:T.y-se.y,scaleX:1,scaleY:1},activatorEvent:L,active:B,activeNodeRect:J,containerNodeRect:ee,draggingNodeRect:ie,over:te.current.over,overlayNodeRect:ne.rect,scrollableAncestors:de,scrollableAncestorRects:ue,windowRect:ce}),he=Z?Ka(Z,T):null,pe=function(e){const[t,r]=g(null),n=s(e),o=d((e=>{const t=Ds(e.target);t&&r((e=>e?(e.set(t,Fs(t)),new Map(e)):null))}),[]);return c((()=>{const t=n.current;if(e!==t){i(t);const a=e.map((e=>{const t=Ds(e);return t?(t.addEventListener("scroll",o,{passive:!0}),[t,Fs(t)]):null})).filter((e=>null!=e));r(a.length?new Map(a):null),n.current=e}return()=>{i(e),i(t)};function i(e){e.forEach((e=>{const t=Ds(e);null==t||t.removeEventListener("scroll",o)}))}}),[o,e]),a((()=>e.length?t?Array.from(t.values()).reduce(((e,t)=>Ka(e,t)),ds):js(e):ds),[e,t])}(de),ge=gl(pe),me=gl(pe,[J]),be=Ka(fe,ge),ve=ie?ys(ie,fe):null,ye=B&&ve?b({active:B,collisionRect:ve,droppableRects:U,droppableContainers:Y,pointerCoordinates:he}):null,xe=ps(ye,"id"),[we,$e]=g(null),Ce=function(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}(ae?fe:Ka(fe,me),null!=(i=null==we?void 0:we.rect)?i:null,J),Se=d(((e,t)=>{let{sensor:r,options:n}=t;if(null==R.current)return;const o=_.get(R.current);if(!o)return;const i=e.nativeEvent,a=new r({active:R.current,activeNode:o,event:i,options:n,context:te,onStart(e){const t=R.current;if(null==t)return;const r=_.get(t);if(!r)return;const{onDragStart:n}=H.current,o={active:{id:t,data:r.data,rect:j}};A((()=>{null==n||n(o),E(_l.Initializing),C({type:ss.DragStart,initialCoordinates:e,active:t}),S({type:"onDragStart",event:o})}))},onMove(e){C({type:ss.DragMove,coordinates:e})},onEnd:s(ss.DragEnd),onCancel:s(ss.DragCancel)});function s(e){return async function(){const{active:t,collisions:r,over:n,scrollAdjustedTranslate:o}=te.current;let a=null;if(t&&o){const{cancelDrop:s}=H.current;if(a={activatorEvent:i,active:t,collisions:r,delta:o,over:n},e===ss.DragEnd&&"function"==typeof s){await Promise.resolve(s(a))&&(e=ss.DragCancel)}}R.current=null,A((()=>{C({type:e}),E(_l.Uninitialized),$e(null),P(null),N(null);const t=e===ss.DragEnd?"onDragEnd":"onDragCancel";if(a){const e=H.current[t];null==e||e(a),S({type:t,event:a})}}))}}A((()=>{P(a),N(e.nativeEvent)}))}),[_]),De=d(((e,t)=>(r,n)=>{const o=r.nativeEvent,i=_.get(n);if(null!==R.current||!i||o.dndKit||o.defaultPrevented)return;const a={active:i};!0===e(r,t.options,a)&&(o.dndKit={capturedBy:t.sensor},R.current=n,Se(r,t))}),[_,Se]),ke=function(e,t){return a((()=>e.reduce(((e,r)=>{const{sensor:n}=r;return[...e,...n.activators.map((e=>({eventName:e.eventName,handler:t(e.handler,r)})))]}),[])),[e,t])}(m,De);!function(e){c((()=>{if(!_a)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(m),za((()=>{J&&k===_l.Initializing&&E(_l.Initialized)}),[J,k]),c((()=>{const{onDragMove:e}=H.current,{active:t,activatorEvent:r,collisions:n,over:o}=te.current;if(!t||!r)return;const i={active:t,activatorEvent:r,collisions:n,delta:{x:be.x,y:be.y},over:o};A((()=>{null==e||e(i),S({type:"onDragMove",event:i})}))}),[be.x,be.y]),c((()=>{const{active:e,activatorEvent:t,collisions:r,droppableContainers:n,scrollAdjustedTranslate:o}=te.current;if(!e||null==R.current||!t||!o)return;const{onDragOver:i}=H.current,a=n.get(xe),s=a&&a.rect.current?{id:a.id,rect:a.rect.current,data:a.data,disabled:a.disabled}:null,l={active:e,activatorEvent:t,collisions:r,delta:{x:o.x,y:o.y},over:s};A((()=>{$e(s),null==i||i(l),S({type:"onDragOver",event:l})}))}),[xe]),za((()=>{te.current={activatorEvent:L,active:B,activeNode:G,collisionRect:ve,collisions:ye,droppableRects:U,draggableNodes:_,draggingNode:oe,draggingNodeRect:ie,droppableContainers:I,over:we,scrollableAncestors:de,scrollAdjustedTranslate:be},j.current={initial:ie,translated:ve}}),[B,G,ye,ve,_,oe,ie,U,I,we,de,be]),il({...Q,delta:T,draggingRect:ve,pointerCoordinates:he,scrollableAncestors:de,scrollableAncestorRects:ue});const Ee=a((()=>({active:B,activeNode:G,activeNodeRect:J,activatorEvent:L,collisions:ye,containerNodeRect:ee,dragOverlay:ne,draggableNodes:_,droppableContainers:I,droppableRects:U,over:we,measureDroppableContainers:K,scrollableAncestors:de,scrollableAncestorRects:ue,measuringConfiguration:V,measuringScheduled:q,windowRect:ce})),[B,G,J,L,ye,ee,ne,_,I,U,we,K,de,ue,V,q,ce]),Fe=a((()=>({activatorEvent:L,activators:ke,active:B,activeNodeRect:J,ariaDescribedById:{draggable:W},dispatch:C,draggableNodes:_,over:we,measureDroppableContainers:K})),[L,ke,B,J,C,W,_,we,K]);return o.createElement(ns.Provider,{value:D},o.createElement(Sl.Provider,{value:Fe},o.createElement(Dl.Provider,{value:Ee},o.createElement(Ol.Provider,{value:Ce},p)),o.createElement(Fl,{disabled:!1===(null==f?void 0:f.restoreFocus)})),o.createElement(as,{...f,hiddenTextDescribedById:W}))})),Il=i(null),Ml="button";function Al(e){let{id:t,data:r,disabled:n=!1,attributes:o}=e;const i=Va("Droppable"),{activators:s,activatorEvent:l,active:c,activeNodeRect:d,ariaDescribedById:u,draggableNodes:f,over:h}=b(Sl),{role:p=Ml,roleDescription:g="draggable",tabIndex:m=0}=null!=o?o:{},v=(null==c?void 0:c.id)===t,y=b(v?Ol:Il),[x,w]=Ha(),[$,C]=Ha(),S=function(e,t){return a((()=>e.reduce(((e,r)=>{let{eventName:n,handler:o}=r;return e[n]=e=>{o(e,t)},e}),{})),[e,t])}(s,t),D=La(r);za((()=>(f.set(t,{id:t,key:i,node:x,activatorNode:$,data:D}),()=>{const e=f.get(t);e&&e.key===i&&f.delete(t)})),[f,t]);return{active:c,activatorEvent:l,activeNodeRect:d,attributes:a((()=>({role:p,tabIndex:m,"aria-disabled":n,"aria-pressed":!(!v||p!==Ml)||void 0,"aria-roledescription":g,"aria-describedby":u.draggable})),[n,p,m,v,g,u.draggable]),isDragging:v,listeners:n?void 0:S,node:x,over:h,setNodeRef:w,setActivatorNodeRef:C,transform:y}}const jl={timeout:25};function Bl(e,t,r){const n=e.slice();return n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]),n}function Rl(e,t){return e.reduce(((e,r,n)=>{const o=t.get(r);return o&&(e[n]=o),e}),Array(e.length))}function zl(e){return null!==e&&e>=0}const Pl=e=>{let{rects:t,activeIndex:r,overIndex:n,index:o}=e;const i=Bl(t,n,r),a=t[o],s=i[o];return s&&a?{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}:null},Ll={scaleX:1,scaleY:1},Nl=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:o,rects:i,overIndex:a}=e;const s=null!=(t=i[r])?t:n;if(!s)return null;if(o===r){const e=i[a];return e?{x:0,y:r<a?e.top+e.height-(s.top+s.height):e.top-s.top,...Ll}:null}const l=function(e,t,r){const n=e[t],o=e[t-1],i=e[t+1];if(!n)return 0;if(r<t)return o?n.top-(o.top+o.height):i?i.top-(n.top+n.height):0;return i?i.top-(n.top+n.height):o?n.top-(o.top+o.height):0}(i,o,r);return o>r&&o<=a?{x:0,y:-s.height-l,...Ll}:o<r&&o>=a?{x:0,y:s.height+l,...Ll}:{x:0,y:0,...Ll}};const Hl="Sortable",Wl=o.createContext({activeIndex:-1,containerId:Hl,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Pl,disabled:{draggable:!1,droppable:!1}});function Yl(e){let{children:t,id:r,items:n,strategy:i=Pl,disabled:l=!1}=e;const{active:d,dragOverlay:u,droppableRects:f,over:h,measureDroppableContainers:p}=b(Dl),g=Va(Hl,r),m=Boolean(null!==u.rect),v=a((()=>n.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[n]),y=null!=d,x=d?v.indexOf(d.id):-1,w=h?v.indexOf(h.id):-1,$=s(v),C=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(v,$.current),S=-1!==w&&-1===x||C,D=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(l);za((()=>{C&&y&&p(v)}),[C,v,y,p]),c((()=>{$.current=v}),[v]);const k=a((()=>({activeIndex:x,containerId:g,disabled:D,disableTransforms:S,items:v,overIndex:w,useDragOverlay:m,sortedRects:Rl(v,f),strategy:i})),[x,g,D.draggable,D.droppable,S,v,w,f,m,i]);return o.createElement(Wl.Provider,{value:k},t)}const Vl=e=>{let{id:t,items:r,activeIndex:n,overIndex:o}=e;return Bl(r,n,o).indexOf(t)},Ul=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:o,items:i,newIndex:a,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!n)&&((s===i||o!==a)&&(!!r||a!==o&&t===l))},Kl={duration:200,easing:"ease"},ql="transform",Gl=Qa.Transition.toString({property:ql,duration:0,easing:"linear"}),Zl={roleDescription:"sortable"};function Ql(e){let{animateLayoutChanges:t=Ul,attributes:r,disabled:n,data:o,getNewIndex:i=Vl,id:l,strategy:u,resizeObserverConfig:f,transition:h=Kl}=e;const{items:p,containerId:m,activeIndex:v,disabled:y,disableTransforms:x,sortedRects:w,overIndex:$,useDragOverlay:C,strategy:S}=b(Wl),D=function(e,t){var r,n;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(r=null==e?void 0:e.draggable)?r:t.draggable,droppable:null!=(n=null==e?void 0:e.droppable)?n:t.droppable}}(n,y),k=p.indexOf(l),E=a((()=>({sortable:{containerId:m,index:k,items:p},...o})),[m,o,k,p]),F=a((()=>p.slice(p.indexOf(l))),[p,l]),{rect:O,node:_,isOver:T,setNodeRef:I}=function(e){let{data:t,disabled:r=!1,id:n,resizeObserverConfig:o}=e;const i=Va("Droppable"),{active:a,dispatch:l,over:u,measureDroppableContainers:f}=b(Sl),h=s({disabled:r}),p=s(!1),g=s(null),m=s(null),{disabled:v,updateMeasurementsFor:y,timeout:x}={...jl,...o},w=La(null!=y?y:n),$=ul({callback:d((()=>{p.current?(null!=m.current&&clearTimeout(m.current),m.current=setTimeout((()=>{f(Array.isArray(w.current)?w.current:[w.current]),m.current=null}),x)):p.current=!0}),[x]),disabled:v||!a}),C=d(((e,t)=>{$&&(t&&($.unobserve(t),p.current=!1),e&&$.observe(e))}),[$]),[S,D]=Ha(C),k=La(t);return c((()=>{$&&S.current&&($.disconnect(),p.current=!1,$.observe(S.current))}),[S,$]),za((()=>(l({type:ss.RegisterDroppable,element:{id:n,key:i,disabled:r,node:S,rect:g,data:k}}),()=>l({type:ss.UnregisterDroppable,key:i,id:n}))),[n]),c((()=>{r!==h.current.disabled&&(l({type:ss.SetDroppableDisabled,id:n,key:i,disabled:r}),h.current.disabled=r)}),[n,i,r,l]),{active:a,rect:g,isOver:(null==u?void 0:u.id)===n,node:S,over:u,setNodeRef:D}}({id:l,data:E,disabled:D.droppable,resizeObserverConfig:{updateMeasurementsFor:F,...f}}),{active:M,activatorEvent:A,activeNodeRect:j,attributes:B,setNodeRef:R,listeners:z,isDragging:P,over:L,setActivatorNodeRef:N,transform:H}=Al({id:l,data:E,attributes:{...Zl,...r},disabled:D.draggable}),W=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return a((()=>e=>{t.forEach((t=>t(e)))}),t)}(I,R),Y=Boolean(M),V=Y&&!x&&zl(v)&&zl($),U=!C&&P,K=U&&V?H:null,q=V?null!=K?K:(null!=u?u:S)({rects:w,activeNodeRect:j,activeIndex:v,overIndex:$,index:k}):null,G=zl(v)&&zl($)?i({id:l,items:p,activeIndex:v,overIndex:$}):k,Z=null==M?void 0:M.id,Q=s({activeId:Z,items:p,newIndex:G,containerId:m}),X=p!==Q.current.items,J=t({active:M,containerId:m,isDragging:P,isSorting:Y,id:l,index:k,items:p,newIndex:Q.current.newIndex,previousItems:Q.current.items,previousContainerId:Q.current.containerId,transition:h,wasDragging:null!=Q.current.activeId}),ee=function(e){let{disabled:t,index:r,node:n,rect:o}=e;const[i,a]=g(null),l=s(r);return za((()=>{if(!t&&r!==l.current&&n.current){const e=o.current;if(e){const t=ws(n.current,{ignoreTransform:!0}),r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(r.x||r.y)&&a(r)}}r!==l.current&&(l.current=r)}),[t,r,n,o]),c((()=>{i&&a(null)}),[i]),i}({disabled:!J,index:k,node:_,rect:O});return c((()=>{Y&&Q.current.newIndex!==G&&(Q.current.newIndex=G),m!==Q.current.containerId&&(Q.current.containerId=m),p!==Q.current.items&&(Q.current.items=p)}),[Y,G,m,p]),c((()=>{if(Z===Q.current.activeId)return;if(Z&&!Q.current.activeId)return void(Q.current.activeId=Z);const e=setTimeout((()=>{Q.current.activeId=Z}),50);return()=>clearTimeout(e)}),[Z]),{active:M,activeIndex:v,attributes:B,data:E,rect:O,index:k,newIndex:G,items:p,isOver:T,isSorting:Y,isDragging:P,listeners:z,node:_,overIndex:$,over:L,setNodeRef:W,setActivatorNodeRef:N,setDroppableNodeRef:I,setDraggableNodeRef:R,transform:null!=ee?ee:q,transition:function(){if(ee||X&&Q.current.newIndex===k)return Gl;if(U&&!Ga(A)||!h)return;if(Y||J)return Qa.Transition.toString({...h,property:ql});return}()}}function Xl(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const Jl=[Ns.Down,Ns.Right,Ns.Up,Ns.Left],ec=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:o,droppableContainers:i,over:a,scrollableAncestors:s}}=t;if(Jl.includes(e.code)){if(e.preventDefault(),!r||!n)return;const t=[];i.getEnabled().forEach((r=>{if(!r||null!=r&&r.disabled)return;const i=o.get(r.id);if(i)switch(e.code){case Ns.Down:n.top<i.top&&t.push(r);break;case Ns.Up:n.top>i.top&&t.push(r);break;case Ns.Left:n.left>i.left&&t.push(r);break;case Ns.Right:n.left<i.left&&t.push(r)}}));const l=(e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const o=hs(t),i=[];for(const e of n){const{id:t}=e,n=r.get(t);if(n){const r=hs(n),a=o.reduce(((e,t,n)=>{return e+(o=r[n],i=t,Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)));var o,i}),0),s=Number((a/4).toFixed(4));i.push({id:t,data:{droppableContainer:e,value:s}})}}return i.sort(us)})({active:r,collisionRect:n,droppableRects:o,droppableContainers:t,pointerCoordinates:null});let c=ps(l,"id");if(c===(null==a?void 0:a.id)&&l.length>1&&(c=l[1].id),null!=c){const e=i.get(r.id),t=i.get(c),a=t?o.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&a&&e&&t){const r=Cs(l).some(((e,t)=>s[t]!==e)),o=tc(e,t),i=function(e,t){if(!Xl(e)||!Xl(t))return!1;if(!tc(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=r||!o?{x:0,y:0}:{x:i?n.width-a.width:0,y:i?n.height-a.height:0},d={x:a.left,y:a.top};return c.x&&c.y?d:qa(d,c)}}}};function tc(e,t){return!(!Xl(e)||!Xl(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}var rc=function(e,t){return rc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},rc(e,t)};var nc=function(){return nc=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},nc.apply(this,arguments)};var oc="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ic=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ac="object"==typeof oc&&oc&&oc.Object===Object&&oc,sc="object"==typeof self&&self&&self.Object===Object&&self,lc=ac||sc||Function("return this")(),cc=lc,dc=function(){return cc.Date.now()},uc=/\s/;var fc=function(e){for(var t=e.length;t--&&uc.test(e.charAt(t)););return t},hc=/^\s+/;var pc=function(e){return e?e.slice(0,fc(e)+1).replace(hc,""):e},gc=lc.Symbol,mc=gc,bc=Object.prototype,vc=bc.hasOwnProperty,yc=bc.toString,xc=mc?mc.toStringTag:void 0;var wc=function(e){var t=vc.call(e,xc),r=e[xc];try{e[xc]=void 0;var n=!0}catch(e){}var o=yc.call(e);return n&&(t?e[xc]=r:delete e[xc]),o},$c=Object.prototype.toString;var Cc=wc,Sc=function(e){return $c.call(e)},Dc=gc?gc.toStringTag:void 0;var kc=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Dc&&Dc in Object(e)?Cc(e):Sc(e)},Ec=function(e){return null!=e&&"object"==typeof e};var Fc=pc,Oc=ic,_c=function(e){return"symbol"==typeof e||Ec(e)&&"[object Symbol]"==kc(e)},Tc=/^[-+]0x[0-9a-f]+$/i,Ic=/^0b[01]+$/i,Mc=/^0o[0-7]+$/i,Ac=parseInt;var jc=ic,Bc=dc,Rc=function(e){if("number"==typeof e)return e;if(_c(e))return NaN;if(Oc(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Oc(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Fc(e);var r=Ic.test(e);return r||Mc.test(e)?Ac(e.slice(2),r?2:8):Tc.test(e)?NaN:+e},zc=Math.max,Pc=Math.min;var Lc=function(e,t,r){var n,o,i,a,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=i}function g(){var e=Bc();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?Pc(r,i-(e-c)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=o=void 0,a)}function b(){var e=Bc(),r=p(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Rc(t)||0,jc(r)&&(d=!!r.leading,i=(u="maxWait"in r)?zc(Rc(r.maxWait)||0,t):i,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:m(Bc())},b},Nc=Lc,Hc=ic;var Wc=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Hc(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),Nc(e,t,{leading:n,maxWait:t,trailing:o})},Yc=function(e,t,r,n){switch(t){case"debounce":return Lc(e,r,n);case"throttle":return Wc(e,r,n);default:return e}},Vc=function(e){return"function"==typeof e},Uc=function(){return"undefined"==typeof window},Kc=function(e){return e instanceof Element||e instanceof HTMLDocument},qc=function(e,t,r,n){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!n||t.height===a&&!r?t:(e&&Vc(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!Uc()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(Uc())return null;if(t)return document.querySelector(t);if(n&&Kc(n))return n;if(r.targetRef&&Kc(r.targetRef.current))return r.targetRef.current;var o=B(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=qc(s,r.setState.bind(r),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!Uc()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Vc(t)?"renderProp":Vc(n)?"childFunction":v(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=y(),r.observableElement=null,Uc()||(r.resizeHandler=Yc(r.createResizeHandler,o,a,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}rc(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Uc()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(l,["targetRef"]);return x(e,c)}return x(e,l);case"childArray":return(e=o).map((function(e){return!!e&&x(e,l)}));default:return n.createElement(a,null)}}}(w);var Gc=Uc()?c:p;function Zc(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,a=e.refreshOptions,l=e.handleWidth,c=void 0===l||l,d=e.handleHeight,u=void 0===d||d,f=e.targetRef,h=e.observerOptions,p=e.onResize,m=s(r),b=s(null),v=null!=f?f:b,y=s(),x=g({width:void 0,height:void 0}),w=x[0],$=x[1];return Gc((function(){if(!Uc()){var e=qc(p,$,c,u);y.current=Yc((function(t){(c||u)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!m.current&&!Uc()&&e({width:n,height:o}),m.current=!1}))}),n,i,a);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,h),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[n,i,a,c,u,p,h,v.current]),nc({ref:v},w)}class Qc extends el{}Qc.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>Xc(e.target)}];function Xc(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends Us{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>Xc(e.target)}];var Jc,ed={exports:{}};Jc=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \***************************************************/(e,t,r)=>{var n,o=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,r,s,l){for(var c in e)if(a(e,c)){var d;try{if("function"!=typeof e[c]){var u=Error((s||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=e[c](t,c,s,r,null,o)}catch(e){d=e}if(!d||d instanceof Error||n((s||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in i)){i[d.message]=!0;var f=l?l():"";n("Failed "+r+" type: "+d.message+(null!=f?f:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,r)=>{var n,o=r(/*! react-is */"./node_modules/react-is/index.js"),i=r(/*! object-assign */"./node_modules/object-assign/index.js"),a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,d="<<anonymous>>",u={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:p(c),arrayOf:function(e){return p((function(t,r,n,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new h("Invalid "+o+" `"+i+"` of type `"+v(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,n,o,i+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:p((function(t,r,n,o,i){var a=t[r];return e(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:p((function(e,t,r,n,i){var a=e[t];return o.isValidElementType(a)?null:new h("Invalid "+n+" `"+i+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,o,i){if(!(t[r]instanceof e)){var a=e.name||d;return new h("Invalid "+o+" `"+i+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:p((function(e,t,r,n,o){return b(e[t])?null:new h("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,r,n,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=v(l);if("object"!==c)return new h("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,n,o,i+"."+d,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,o,i){for(var a=t[r],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(r)+" at index "+t+"."),c}return p((function(t,r,n,o,i){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,r,n,o,i,a);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new h("Invalid "+o+" `"+i+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,r,n,o,i){var s=t[r],l=v(s);if("object"!==l)return new h("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return m(n,o,i,c,y(d));var u=d(s,c,n,o,i+"."+c,a);if(u)return u}return null}))},exact:function(e){return p((function(t,r,n,o,l){var c=t[r],d=v(c);if("object"!==d)return new h("Invalid "+o+" `"+l+"` of type `"+d+"` supplied to `"+n+"`, expected `object`.");var u=i({},t[r],e);for(var f in u){var p=e[f];if(s(e,f)&&"function"!=typeof p)return m(n,o,l,f,y(p));if(!p)return new h("Invalid "+o+" `"+l+"` key `"+f+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=p(c,f,n,o,l+"."+f,a);if(g)return g}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){var r={},o=0;function i(i,s,l,c,u,f,p){if(c=c||d,f=f||l,p!==a){if(t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var m=c+":"+l;!r[m]&&o<3&&(n("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[m]=!0,o++)}}return null==s[l]?i?null===s[l]?new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,f)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function g(e){return p((function(t,r,n,o,i,a){var s=t[r];return v(s)!==e?new h("Invalid "+o+" `"+i+"` of type `"+y(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,r,n,o){return new h((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function b(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(b);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var o,i=n.call(t);if(n!==t.entries){for(;!(o=i.next()).done;)if(!b(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!b(a[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,u.checkPropTypes=l,u.resetWarningCache=l.resetWarningCache,u.PropTypes=u,u}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var h=e.type;switch(h){case c:case d:case o:case a:case i:case f:return h;default:var m=h&&h.$$typeof;switch(m){case l:case u:case g:case p:case s:return m;default:return t}}case n:return t}}}var w=c,$=d,C=l,S=s,D=r,k=u,E=o,F=g,O=p,_=n,T=a,I=i,M=f,A=!1;function j(e){return x(e)===d}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=C,t.ContextProvider=S,t.Element=D,t.ForwardRef=k,t.Fragment=E,t.Lazy=F,t.Memo=O,t.Portal=_,t.Profiler=T,t.StrictMode=I,t.Suspense=M,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),j(e)||x(e)===c},t.isConcurrentMode=j,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===g},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===i},t.isSuspense=function(e){return x(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===d||e===a||e===i||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},d=o(c,["type"]),u=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},d),f=n(n({},l),u);t.default={all:f,types:l,matchers:c,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,o.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(/*! react */"react"),i=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),c=n(r(/*! ./Context */"./src/Context.ts")),d=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,a.default)(r)]=e[r],t}),{})},u=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,o.useState)(t),n=r[0],i=r[1];return(0,o.useEffect)((function(){var e=t();n!==e&&i(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,o.useContext)(c.default),r=function(){return d(e)||d(t)},n=(0,o.useState)(r),i=n[0],a=n[1];return(0,o.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,i.default)(e,t||{},!!t)},n=(0,o.useState)(r),a=n[0],s=n[1],l=u();return(0,o.useEffect)((function(){if(l){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,n),h=function(e){var t=(0,o.useState)(e.matches),r=t[0],n=t[1];return(0,o.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),p=u();return(0,o.useEffect)((function(){p&&r&&r(h)}),[h]),(0,o.useEffect)((function(){return function(){l&&l.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var td=ed.exports=Jc(o),rd={exports:{}};rd.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",d="quarter",u="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,c),i=r-o<0,a=t.clone().add(n+(i?-1:1),c);return+(-(n+(r-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:f,h:a,m:i,s:o,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof k||!(!e||!e[w])},C=function e(t,r,n){var o;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,o=s}return!n&&o&&(y=o),o||!n&&y},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},D=v;D.l=C,D.i=$,D.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return D},b.isValid=function(){return!(this.$d.toString()===h)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return D.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!D.u(t)||t,d=D.p(e),h=function(e,t){var o=D.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(s)},p=function(e,t){return D.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return n?h(1,0):h(31,11);case c:return n?h(1,m):h(0,m+1);case l:var y=this.$locale().weekStart||0,x=(g<y?g+7:g)-y;return h(n?b-x:b+(6-x),m);case s:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=D.p(e),d="set"+(this.$u?"UTC":""),h=(r={},r[s]=d+"Date",r[f]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[a]=d+"Hours",r[i]=d+"Minutes",r[o]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[D.p(e)]()},b.add=function(n,d){var f,h=this;n=Number(n);var p=D.p(d),g=function(e){var t=S(h);return D.w(t.date(t.date()+Math.round(e*n)),h)};if(p===c)return this.set(c,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(f={},f[i]=t,f[a]=r,f[o]=e,f)[p]||1,b=this.$d.getTime()+n*m;return D.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=D.z(this),i=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,u=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},f=function(e){return D.s(i%12||12,e,"0")},p=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return D.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,f,h){var p,g=this,m=D.p(f),b=S(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return D.m(g,b)};switch(m){case u:p=x()/12;break;case c:p=x();break;case d:p=x()/3;break;case l:p=(y-v)/6048e5;break;case s:p=(y-v)/864e5;break;case a:p=y/r;break;case i:p=y/t;break;case o:p=y/e;break;default:p=y}return h?p:D.a(p)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return D.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),E=k.prototype;return S.prototype=E,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",u],["$D",f]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,k,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var nd=Re(rd.exports),od={exports:{}};od.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[o,function(e){this.afternoon=d(e,!1)}],a:[o,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[o,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(r){var n,o;n=r,o=i&&i.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],d=u[c],f=d&&d[0],h=d&&d[1];a[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var o=a[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(n),d=i.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=f(t)(e),o=n.year,i=n.month,a=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,h=new Date,p=a||(o||i?1:h.getDate()),g=o||h.getFullYear(),m=0;o&&!i||(m=i>0?i-1:h.getMonth());var b=s||0,v=l||0,y=c||0,x=d||0;return u?new Date(Date.UTC(g,m,p,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(g,m,p,b,v,y,x)):new Date(g,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){a[1]=s[p-1];var g=r.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var id=Re(od.exports),ad={exports:{}};ad.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),a=r(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var sd=Re(ad.exports),ld={exports:{}};ld.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var cd=Re(ld.exports),dd={exports:{}};dd.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var ud,fd,hd=Re(dd.exports),pd={exports:{}};pd.exports=(ud={year:0,month:1,day:2,hour:3,minute:4,second:5},fd={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=fd[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),fd[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,c=s.value,d=ud[l];d>=0&&(i[d]=parseInt(c,10))}var u=i[3],f=24===u?0:u,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(r.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var a=o&&t,s=o||t||n,l=i(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var a=i(n-=60*(o-t)*1e3,r);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(r.utc(e,a).valueOf(),l,s),d=c[0],u=c[1],f=r(d).utcOffset(u);return f.$x.$timezone=s,f},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var gd,md=Re(pd.exports);nd.extend(sd),nd.extend(hd),nd.extend(cd),nd.extend(id),nd.extend(md),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=nd(t).startOf("week");return bd(r).map((e=>vd(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return vd(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(nd(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+nd(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=nd(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?nd(n):void 0,o?nd(o):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(gd||(gd={}));const bd=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},vd=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},yd=[1,3,5,7,8,10,12],xd=[4,6,9,11];var wd,$d;!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),a=parseInt(n);return 0==o?"1":yd.includes(i)?Math.min(o,31).toString():xd.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=nd(e,r);return nd(t,r).diff(n,"minute")},e.toDayjs=e=>e?nd(e):nd(),e.addMinutesToTime=(e,t,r="HH:mm")=>nd(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>nd(e).isSame(nd(t),r)}(wd||(wd={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!nd(e).isBefore(n,"day"))||!(!o||!nd(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(nd(e).isValid())return e}return""}}($d||($d={}));const Cd=()=>{const e=$.split(".");return parseInt(e[0],10)>=19},Sd=(...e)=>t=>{const r=[];for(const n of e)if("function"==typeof n){const e=n(t),o="function"==typeof e;r.push(o?e:()=>n(null))}else n.current=t,r.push((()=>{n.current=null}));if(Cd())return()=>{for(const e of r)e()}};var Dd,kd;!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Dd||(Dd={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const a=n+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e},r=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const t=r.select(e);return`${e}${n.get(t)}`},e.getMaskedDescription=(e,t,r)=>{if(!e||"masked"!==t||!r)return"";const[n,o]=r,i=n>0,a=o<e.length-1,s=i?e.substring(0,n):"",l=a?e.substring(o+1):"";return i&&a?`Starting with ${s} and ending with ${l}`:i?`Starting with ${s}`:a?`Ending with ${l}`:""}}(kd||(kd={}));function Ed(e){const t=s(null);return p((()=>{t.current=e}),[e]),d(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}const Fd=(e,t,r="window",n)=>{const o=s();c((()=>{o.current=t}),[t]),c((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])},Od=()=>{const[e,t]=g(!1);return c((()=>{t(!0)}),[]),e};function _d({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const o=n.value,i=t(o),a=null!==(r=n.selectionEnd)&&void 0!==r?r:0,s=o.substring(0,a),l=t(s),c=s.length-l.length,d=Math.max(0,a-c);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(d,d)}}}}const Td=e=>{const t=(e=>{const t=s(e),r=s();return c((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},Id=e=>{const[t,r]=g(e),n=s(e);return[t,d((e=>{n.current=e,r(e)}),[]),n]},Md=F.div`
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
`,Ad=F.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Qi["overlay-subtle"]:Qi["overlay-strong"]};
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
            `),t}};
`;var jd;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(jd||(jd={}));const Bd=()=>{const[e,t]=g(void 0),r=z();return c((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(jd.Change,e),r.events.emit(jd.Ready),()=>r.events.off(jd.Change,e)}),[r]),e},Rd=({show:t=!1,rootId:r,onOverlayClick:n,children:i,backgroundOpacity:a,backgroundBlur:l=!0,disableTransition:d=!1,enableOverlayClick:u=!1,zIndex:f,id:h})=>{const[p,m]=g(null),[b,v]=g(),[y]=g((()=>Dd.generate())),x=L(),w=s(),$=s(null),C=i&&o.cloneElement(i,{ref:$}),S=h?`lifesg-ds-overlay-root-${h}`:"lifesg-ds-overlay-root",D=null!=f?f:b?99999:99998;(e=>{const t=z();c((()=>{if(!t)return;const r={zIndex:e};t.events.emit(jd.Change,r)}),[t,e]),c((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit(jd.Change,r)};return null==t||t.events.on(jd.Ready,r),()=>null==t?void 0:t.events.off(jd.Ready,r)}),[t,e])})(D),c((()=>(_(),m(F()),()=>{j(),I().length<1&&(B("remove"),P(),T("remove"))})),[]),c((()=>{if(t){const e=O();k(e),A(),E()&&1===I().length&&(R(),B("add"));const t=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(t)}{j(),E()&&I().length<1&&(B("remove"),P());const e=setTimeout((()=>{I().length<1&&T("remove")}),200);return()=>clearTimeout(e)}}),[t]);const k=e=>{w.current=e,v(e)},E=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),F=()=>document&&r?document.getElementById(r):document?document.body:null,O=()=>I().length>0,_=()=>{if(!document.getElementById(Pd)){const e=document.createElement("style");e.id=Pd;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Ld} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Ld}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${Nd} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${Hd}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},T=e=>{const t=document.body.classList.contains(Ld);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Ld):document.body.classList.add(Ld)},I=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},A=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},j=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},B=e=>{if(!E())return;const t=document.body.classList.contains(Nd);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Nd):document.body.classList.add(Nd)},R=()=>{const e=document.body.style,t=e.top?e.top:window.scrollY+"px";document.body.style.setProperty(Hd,t)},P=()=>{const e=document.body.style.getPropertyValue(Hd);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(e)})}))},H=e=>{var t;const r=null===(t=$.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&u&&(e.preventDefault(),n())};return p?M.createPortal(e(Md,{id:S,"data-testid":S,$show:t,$zIndex:D,children:i&&e(N,{id:x,children:e(Ad,{"data-testid":"overlay-wrapper",$show:t,$stacked:b,$backgroundBlur:l,$disableTransition:d,onClick:H,children:C})})}),p):null},zd=t=>e(P,{children:e(Rd,Object.assign({},t))}),Pd="lifesg-ds-overlay-stylesheet",Ld="lifesg-ds-overlay-open",Nd="lifesg-ds-overlay-scroll-lock",Hd="--lifesg-ds-overlay-scroll-y",Wd=F.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.$show,r=e.$animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${ia.MaxWidth.sm} {
        height: calc(
            ${e=>e.$verticalHeight?`${e.$verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.$offsetTop||0}px;
    }
`,Yd=t=>{var{id:r="modal",show:n,animationFrom:o="bottom",children:i,enableOverlayClick:a=!0,rootComponentId:s,zIndex:l,onOverlayClick:u,dismissKeyboardOnShow:f=!0}=t,h=ct(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const{verticalHeight:p,offsetTop:m}=(()=>{const[e,t]=g(),[r,n]=g(),o=d((()=>{const e=.01*window.innerHeight;t(e)}),[]),i=d((()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;t(e),n(window.visualViewport.offsetTop)}}),[]);return c((()=>window.visualViewport?(i(),window.visualViewport.addEventListener("resize",i),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",i)}):(o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)})),[]),{verticalHeight:e,offsetTop:r}})();return c((()=>{var e,t;n&&f&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]),e(zd,{"data-testid":`${r}-overlay`,show:n,enableOverlayClick:a,onOverlayClick:u,id:r,rootId:s,zIndex:l,children:e(Wd,Object.assign({$show:n,$animationFrom:o,"data-testid":r,$verticalHeight:p,$offsetTop:m},h,{children:i}))})},Vd=F.div`
    border-radius: ${ra.md};
    background: ${Qi.bg};
    padding: ${ta["spacing-16"]} ${ta["spacing-32"]};
    ${e=>{var t;return"dark"===(null===(t=e.theme)||void 0===t?void 0:t.colourMode)?O`
                  border: ${ea["width-010"]} ${ea.solid}
                      ${Qi.border};
              `:O`
                  box-shadow: ${na["md-subtle"]};
              `}}
`,Ud=F.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${ta["spacing-24"]};
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
                background-color: ${Qi["bg-hover-neutral"]};
            `}
    }
`,Kd=o.forwardRef(((t,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,s=ct(t,["children","focusHighlight","focusOutline","type"]);return e(Ud,Object.assign({ref:r,$outline:i,$highlight:o,type:a},s,{children:n}))})),qd=F.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Qi.bg};
    box-shadow: ${na["lg-strong"]};
    border-radius: ${ra.lg};
    overflow: hidden;

    ${ia.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Gd=F(Kd)`
    position: absolute;
    top: var(--close-button-top-inset, ${ta["spacing-16"]});
    right: var(--close-button-right-inset, ${ta["spacing-16"]});
    padding: 0;
    color: ${Qi.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${ia.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${ta["spacing-20"]});
    }
`,Zd=r=>{var{id:n="modal-box",children:o,onClose:i,showCloseButton:a=!0}=r,s=ct(r,["id","children","onClose","showCloseButton"]);return t(qd,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(Gd,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(re,{})}),o]}))},Qd=e=>{const{textSize:t}=e||{};return O`
        // Text styling
        ${t&&Xi[`${t}-regular`]}

        strong {
            font-weight: ${Xi.Spec["weight-semibold"]};
            ${t&&Xi[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Xi.Spec["weight-semibold"]};
            ${t&&Xi[`${t}-semibold`]}
            color: ${Qi.hyperlink};
            text-decoration: underline;

            svg {
                color: ${Qi["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${Qi["hyperlink-hover"]};

                svg {
                    color: ${Qi["icon-hover"]};
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
    `},Xd=F.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Jd=F((t=>{var{children:r}=t,n=ct(t,["children"]);const o=n["data-testid"]||"card";return e(Vd,Object.assign({},n,{"data-testid":o,children:"string"==typeof r?e(Ca.BodyBL,{children:r}):r}))}))`
    color: ${Qi.text};
    ${Qd({textSize:"body-md"})}

    ${ia.MaxWidth.sm} {
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
        background: ${Qi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${ra.full};
        background-clip: padding-box;
    }
`,eu=F(Zd)`
    padding: 3.5rem 1.25rem 2.5rem;
`,tu=F.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Qi.text};
    ${Qd({textSize:"body-md"})}
`,ru=n=>{var{children:o,visible:i,onMobileClose:a,maxHeight:s,overflow:l}=n,c=ct(n,["children","visible","onMobileClose","maxHeight","overflow"]);const d=c["data-testid"]||"popover",u=b(_),f=oa["sm-max"]({theme:u}),h=td.useMediaQuery({maxWidth:f}),p=()=>{a&&a()},g=()=>"string"==typeof o?e(Ca.BodyMD,{children:o}):o;return t(r,{children:[i&&e(Xd,Object.assign({"data-testid":d},c,{children:e(Jd,{$maxHeight:s,$overflow:l,children:g()})})),h&&e(Yd,{show:null!=i&&i,onOverlayClick:p,children:e(eu,{onClose:p,children:e(tu,{children:g()})})})]})},nu=F.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,ou=n=>{var o,i,{children:a,popoverContent:l,trigger:c="click",position:d="top",zIndex:u,rootNode:f,customOffset:h,delay:p,onPopoverAppear:m,onPopoverDismiss:v,enableFlip:y=!0,enableResize:x=!1,overflow:w="auto"}=n,$=ct(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss","enableFlip","enableResize","overflow"]);const[C,S]=g(!1),D=s(null),k=s(null),E=b(_),F=oa["sm-max"]({theme:E}),O=td.useMediaQuery({maxWidth:F}),[T,I]=g(0),{refs:M,floatingStyles:A,context:j}=H({open:C,placement:d,whileElementsMounted:W,middleware:[Y(null!=h?h:16),y&&V(),U({limiter:K()}),x&&q({apply({availableHeight:e}){I(e)}})],onOpenChange:e=>{S(e),C!==e&&ne(e)}}),B=Bd(),R=O?"click":c,z=G(j,{ignoreMouse:"hover"===R}),P=Z(j),L=Q(j,{enabled:"hover"===R,delay:{open:null!==(o=null==p?void 0:p.open)&&void 0!==o?o:0,close:null!==(i=null==p?void 0:p.close)&&void 0!==i?i:500}}),{getReferenceProps:N,getFloatingProps:te}=X([z,P,L]),re=()=>{S(!1),ne(!1)},ne=e=>{e&&m&&m(),!e&&v&&v()};return t(r,{children:[e(nu,Object.assign({ref:e=>{D.current=e,M.setReference(e)}},N({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),$,{children:a})),C&&e(J,{root:f,children:e(ee,{context:j,children:e("div",Object.assign({ref:e=>{k.current=e,M.setFloating(e)},style:Object.assign(Object.assign({},A),{outline:"none",zIndex:null!=u?u:B})},te(),{children:"function"==typeof l?l(x?{maxHeight:T,overflow:w}:{}):e(ru,{visible:!0,onMobileClose:re,maxHeight:x?T:void 0,overflow:x?w:void 0,children:l})}))})})]})},iu=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},au=F.span`
    color: ${Qi["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>iu(e)}

    &:hover,
    &:focus-visible {
        color: ${Qi["text-hover"]};
        ${({$hoverStyle:e})=>iu(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,su=F.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,lu=r=>{var{ariaLabel:n,content:o,icon:i,underlineStyle:a="default",underlineHoverStyle:s="default"}=r,l=ct(r,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const c=!!o;return e(ou,Object.assign({},l,{children:t(au,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,"aria-label":null!=n?n:c?void 0:"More info",children:[o,i&&e(su,{$standalone:!c,children:i})]})}))},cu=F.div`
    padding-left: ${ta["spacing-4"]};
    display: inline;
`,du=({addon:t,rootNode:r})=>{const{content:n,type:o,icon:i,id:a,zIndex:s,"data-testid":l}=t;return e(cu,{children:e(lu,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=i?i:e(R,{"data-testid":`${o}-icon`}),ariaLabel:"More info"})})},uu=F.div`
    margin-bottom: ${ta["spacing-8"]};
`,fu=F.label`
    color: ${Qi["text-subtle"]};
    display: inline-block;

    ${Xi["form-label"]}
    ${Qd()}
    font-weight: ${Xi.Spec["weight-semibold"]};
`,hu=F(ne)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${Qi["icon-error-strong"]};
`,pu=F.div`
    ${Xi["body-sm-semibold"]}
    display: flex;
    gap: ${ta["spacing-4"]};
    margin-top: ${ta["spacing-8"]};
`,gu=F.p`
    color: ${Qi["text-error"]};
    margin-bottom: 0;
    outline: none;
`,mu=F.span`
    ${Xi["form-description"]}
    color: ${Qi["text-subtler"]};
    display: block;
`,bu=r=>{var{id:n,children:o,addon:i,subtitle:a,"data-testid":s,className:l,style:c}=r,d=ct(r,["id","children","addon","subtitle","data-testid","className","style"]);return t(uu,{className:l,style:c,"data-testid":s,children:[t(fu,Object.assign({id:n},d,{children:[o,i&&i.type&&("popover"===(null==i?void 0:i.type)?e(du,{addon:i}):null)]})),"string"==typeof a?e(mu,{id:n?`${n}-subtitle`:void 0,"data-testid":s?`${s}-subtitle`:"subtitle",children:a}):a]})},vu=F.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:n,$xlSpan:o,$lgStart:i,$lgSpan:a,$mdStart:s,$mdSpan:l,$smStart:c,$smSpan:d,$xsStart:u,$xsSpan:f,$xxsStart:h,$xxsSpan:p}=e;return O`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Ei.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${o||1};
            }

            ${Ei.MaxWidth.lg} {
                grid-column: ${i||"auto"} / span ${a||1};
            }

            ${Ei.MaxWidth.md} {
                grid-column: ${s||"auto"} / span ${l||1};
            }

            ${Ei.MaxWidth.sm} {
                grid-column: ${c||"auto"} / span ${d||1};
            }

            ${Ei.MaxWidth.xs} {
                grid-column: ${u||"auto"} / span ${f||1};
            }

            ${Ei.MaxWidth.xxs} {
                grid-column: ${h||"auto"} / span ${p||1};
            }
        `}}
`,yu=o.forwardRef(((t,r)=>{const n=b(_),{xxlCols:o,xlCols:i,lgCols:a,mdCols:s,smCols:l,xsCols:c,xxsCols:d}=t,u=ct(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),f=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return e(vu,Object.assign({ref:r},(()=>{const e=Di["xxl-column"]({theme:n}),t=Di["xl-column"]({theme:n}),r=Di["lg-column"]({theme:n}),u=Di["md-column"]({theme:n}),h=Di["sm-column"]({theme:n}),p=Di["xs-column"]({theme:n}),g=Di["xxs-column"]({theme:n}),m=f(o||i||a||s||l||c||d,e,"xxl"),b=f(i||a||s||l||c||d,t,"xl"),v=f(a||s||l||c||d,r,"lg"),y=f(s||l||c||d,u,"md"),x=f(l||c||d,h,"sm"),w=f(c||d,p,"xs"),$=f(d,g,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),u))})),xu={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},wu=e=>Object.keys(xu).reduce(((t,r)=>{const n=xu[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),$u=wu("max-width"),Cu=(wu("min-width"),F.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return O`
            grid-column: ${t||"auto"} / span ${r||1};

            ${$u.tablet} {
                grid-column: ${n||"auto"} / span
                    ${o||1};
            }

            ${$u.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`),Su=o.forwardRef(((t,r)=>{const{mobileCols:n,tabletCols:o,desktopCols:i}=t,a=ct(t,["mobileCols","tabletCols","desktopCols"]);return e(Cu,Object.assign({ref:r},(()=>{const e=o||n,t=n,r=Du(i||o||n),a=Du(e),s=Du(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),Du=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,o=t<=r?r:t;let i;return i=o===n?1:o-n,{start:n,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},ku=O`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${ta["spacing-32"]};
    }
`,Eu=F.div`
    ${ku}
`,Fu=F(yu)`
    ${ku}
`,Ou=F(Su)`
    ${ku}
`,_u=({label:r,errorMessage:n,id:o,disabled:i,children:a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,"data-error-testid":v})=>{const y=!s&&(l||c||d)?"v2-grid":!s&&(u||f||h||p||g||m||b)?"grid":s||"flex",w=o?`${o}-label`:void 0,$=()=>v||(o?`${o}-error-message`:"error-message"),S=()=>!!n;const D=(e=>{switch(e){case"v2-grid":return Ou;case"grid":return Fu;case"flex":return Eu}})(y);return t(D,Object.assign({},(e=>{switch(e){case"v2-grid":return{mobileCols:l,tabletCols:c,desktopCols:d};case"grid":return{xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b};case"flex":return}})(y),{children:[r&&e(bu,"string"==typeof r?{htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",id:w,disabled:i,children:r}:Object.assign({htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",id:w,disabled:i},r)),(()=>{const e={"aria-invalid":S(),"aria-describedby":[S()?$():void 0,"object"==typeof r&&(null==r?void 0:r.subtitle)?`${o}-label-subtitle`:void 0].filter(Boolean).join(" ")||void 0};return C.map(a,(t=>x(t,e)))})(),n&&t(pu,{children:[e(hu,{"aria-hidden":!0}),e(gu,{id:$(),tabIndex:0,"data-testid":$(),children:n})]})]}))},Tu=e=>"small"===e?2.5:3,Iu=F.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Tu(e.$variant);return O`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,Mu=O`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${ta["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Tu(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${ra.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${Qi["border-focus"]};
    }
`,Au=F.button`
    ${Mu}
    cursor: pointer;
`,ju=F.div`
    ${Mu}
`,Bu=T`
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
`,Ru=F.div`
    position: relative;
    border: ${ea["width-010"]} ${ea.solid} ${Qi.border};
    border-radius: ${ra.sm};
    background: ${Qi.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${Qi["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Qi["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?O`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:O`
                animation: ${Bu} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?O`
                background: ${Qi["bg-disabled"]};

                ${Au} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${Qi.border};
                    box-shadow: none;
                }
            `:e.$readOnly?O`
                border: none;
                background: transparent !important;

                ${Au} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$error?O`
                border-color: ${Qi["border-error"]};

                &:focus-within {
                    border-color: ${Qi["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Qi["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`;F.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Ji["duration-250"]} ${Ji["ease-default"]};
    margin-left: ${ta["spacing-16"]};
`,F(oe)`
    color: ${Qi.icon};
`;const zu=F.div`
    height: 1px;
    background: ${Qi.border};
    margin: 0 ${ta["spacing-8"]};
`,Pu=F.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return O`
                color: ${Qi["text-disabled"]};
            `}}
`,Lu=F.div`
    ${e=>"small"===e.$variant?Xi["body-md-regular"]:Xi["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return O`
                    ${ma(1)}
                `}}
    overflow: hidden;
`,Nu=F(Lu)`
    color: ${Qi["text-subtler"]};
`,Hu=({children:t,show:r,error:n,disabled:o,testId:i,onBlur:a,readOnly:l,className:c,variant:d})=>{const u=s(null);return Fd("mousedown",(function(e){if(!o){if(u&&u.current.contains(e.target))return;r&&a()}}),"document"),e(Iu,{className:c,$variant:d,children:e(Ru,{ref:u,$error:n&&!r,$disabled:o,$readOnly:l,$expanded:r,"data-testid":i,children:t})})},Wu=e=>"right"===e?"bottom-end":"bottom-start",Yu=i({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),Vu=()=>b(Yu),Uu=({enabled:n,isOpen:o,onOpen:i,onClose:a,onDismiss:l,renderElement:c,renderDropdown:d,customZIndex:u,clickToToggle:f=!1,offset:h=0,alignment:p="left",fitAvailableHeight:g,rootNode:m,positionRef:v})=>{var y;const x=b(_),w=oa["sm-max"]({theme:x}),$=s(null),{width:C=0}=Zc({targetRef:null!=v?v:$,handleHeight:!1}),S={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<w;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:D,floatingStyles:k,context:E}=H({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==l||l():e&&!o?null==i||i():!e&&o&&(null==a||a(r))},whileElementsMounted:W,placement:Wu(p),middleware:[Y(h),V(),U({limiter:K()}),q({apply({availableHeight:e,elements:t}){!g||e>=t.floating.scrollHeight?t.floating.style.setProperty("--available-height",""):t.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),S]}),F=Bd(),{isMounted:O,styles:T}=te(E,{initial:{opacity:0},open:{opacity:1},duration:300}),I=G(E,{enabled:n,toggle:f}),M=Z(E,{enabled:n}),{getReferenceProps:A,getFloatingProps:j}=X([I,M]),B={elementWidth:C,styles:Object.assign(Object.assign(Object.assign({},T),k),{zIndex:null!==(y=null!=u?u:F)&&void 0!==y?y:50}),setFloatingRef:D.setFloating,getFloatingProps:j};return t(r,{children:[e("div",Object.assign({ref:e=>{$.current=e,D.setReference(e)}},A(),{children:c()})),O&&e(J,{root:m,children:e(ee,{context:E,modal:!1,initialFocus:-1,returnFocus:!1,children:e(Yu.Provider,{value:B,children:d(B)})})})]})},Ku=F.div`
    --vertical-inset: ${ta["spacing-24"]};
    --horizontal-inset: ${ta["spacing-20"]};
    --header-bottom-spacing: ${ta["spacing-4"]};

    border: ${ea["width-010"]} ${ea.solid} ${Qi.border};
    border-radius: ${ra.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${ia.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,qu=F.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,Gu=e=>Cd()?e:e?"true":void 0,Zu=(...e)=>e.filter((e=>!!e)).join(" "),Qu=F.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Xu=T`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ju=F.div`
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
    animation: ${Xu} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ef=F(Ju)`
    animation-delay: -0.45s;
`,tf=F(Ju)`
    animation-delay: -0.3s;
`,rf=F(Ju)`
    animation-delay: -0.15s;
`,nf=({color:r,className:n,size:o})=>t(Qu,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[e(Ju,{id:"inner1"}),e(ef,{id:"inner2"}),e(tf,{id:"inner3"}),e(rf,{id:"inner4"})]}),of={Button:{"button-radius":Hi.md,"button-default-colour-bg":vi["bg-primary"],"button-default-colour-bg-hover":vi["bg-primary-hover"],"button-default-colour-text":vi["text-inverse"],"button-secondary-colour-border":vi["border-primary"],"button-secondary-colour-text":vi["text-primary"],"button-light-colour-text":vi["text-primary"],"button-link-colour-text":vi["text-primary"]},Animation:{"loading-dots-spinner-colour":vi["icon-primary"]}},af={Button:{"button-radius":Hi.sm,"button-default-colour-bg":vi["bg-primary"],"button-default-colour-bg-hover":vi["bg-primary-hover"],"button-default-colour-text":vi["text-inverse"],"button-secondary-colour-border":vi["border-primary"],"button-secondary-colour-text":vi["text-primary"],"button-light-colour-text":vi["text-primary"],"button-link-colour-text":vi["text-primary"]},Animation:{"loading-dots-spinner-colour":vi["icon-primary"]}},sf={Button:{"button-radius":Hi.sm,"button-default-colour-bg":vi["bg-primary"],"button-default-colour-bg-hover":vi["bg-primary-hover"],"button-default-colour-text":vi["text-inverse"],"button-secondary-colour-border":vi["border-primary"],"button-secondary-colour-text":vi["text-primary"],"button-light-colour-text":vi["text-primary"],"button-link-colour-text":vi["text-primary"]},Animation:{"loading-dots-spinner-colour":Qi.Primitive["brand-50"]}},lf={collections:{default:af,pa:{Button:{"button-radius":Hi.full,"button-default-colour-bg":vi["bg-primary"],"button-default-colour-bg-hover":vi["bg-primary-hover"],"button-default-colour-text":vi["text-inverse"],"button-secondary-colour-border":vi["border-primary"],"button-secondary-colour-text":vi["text-primary"],"button-light-colour-text":vi["text-primary"],"button-link-colour-text":vi["text-primary"]},Animation:{"loading-dots-spinner-colour":vi["icon-primary"]}},a11yplayground:of,lifesg:sf},defaultValue:"default"},cf=(e,t)=>r=>{var n,o;const i=r.theme,a=Vo(lf,null==i?void 0:i.componentScheme);return df((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[t])||a[e][t],r)},df=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},uf=cf("Button","button-radius"),ff=cf("Button","button-default-colour-bg"),hf=cf("Button","button-default-colour-bg-hover"),pf=cf("Button","button-default-colour-text"),gf=cf("Button","button-secondary-colour-border"),mf=cf("Button","button-secondary-colour-text"),bf=cf("Button","button-light-colour-text"),vf=cf("Button","button-link-colour-text"),yf=F.button`
    padding: ${ta["spacing-8"]} ${ta["spacing-16"]};
    min-width: 4rem;
    border: ${ea["width-010"]} ${ea.solid} transparent;
    transition: all ${Ji["duration-250"]} ${Ji["ease-default"]};
    border-radius: ${uf};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return O`
                    background-color: ${Qi.bg};
                    border-color: ${e.$buttonIsDanger?Qi["border-error-strong"]:gf};

                    color: ${e.$buttonIsDanger?Qi["text-error"]:mf};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Qi["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return O`
                    background-color: ${Qi.bg};
                    border-color: ${Qi.border};

                    color: ${e.$buttonIsDanger?Qi["text-error"]:bf};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Qi["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return O`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Qi["text-error"]:vf};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Qi["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return O`
                    background-color: ${Qi["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Qi["text-disabled"]};
                `;default:return O`
                    background-color: ${e.$buttonIsDanger?Qi["bg-error-strong"]:ff};

                    ${ia.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${pf};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?Qi["bg-error-strong-hover"]:hf};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return O`
                    height: 2.5rem;
                    ${Xi["body-md-semibold"]}

                    ${ia.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return O`
                    height: 4rem;
                    ${Xi["heading-md-semibold"]}

                    ${ia.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return O`
                    height: 3rem;
                    ${Xi["heading-xs-semibold"]}

                    ${ia.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,xf=F(nf)`
    margin-right: 0.5rem;
`,wf=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:c=!1,onClick:d}=r,u=ct(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),f={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(yf,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!c,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:d},f,u,{children:[a&&e(xf,{}),e("span",{children:o})]}))};wf.displayName="Button.Default";const $f=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:c=!1,onClick:d}=r,u=ct(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),f={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(yf,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!c,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:d},f,u,{children:[a&&e(xf,{}),e("span",{children:o})]}))};$f.displayName="Button.Small";const Cf=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:c=!1,onClick:d}=r,u=ct(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),f={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return t(yf,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!c,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:d},f,u,{children:[a&&e(xf,{}),e("span",{children:o})]}))};Cf.displayName="Button.Large";const Sf={Default:o.forwardRef(wf),Small:o.forwardRef($f),Large:o.forwardRef(Cf)},Df=O`
    color: ${Qi.icon};
    height: 1rem;
    width: 1rem;
`,kf=F(ie)`
    ${Df}
`,Ef=F(ae)`
    ${Df}
`,Ff=F(oe)`
    ${Df}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Of=F.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,_f=F.div`
    display: flex;
    flex: 1;
    position: relative;
`,Tf=F.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,If=F.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Qi.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return O`
                display: none;
            `}}
`,Mf=F.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Af=F.div`
    display: flex;
`,jf=F.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?O`
                display: none;
            `:e.$expanded?O`
                ${Ff} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Bf=F.span`
    ${Xi["body-md-regular"]}
    color: ${Qi.text};
`,Rf=F.div`
    display: flex;
`,zf=F(Kd)`
    margin: auto 0;
    padding: 0.75rem;

    &:disabled {
        cursor: not-allowed;
    }
`,Pf=F.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Lf=F(Sf.Small)`
    flex: 1;
`,Nf=F.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,Hf=F.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${ra.md};
    margin: 0 0.5rem;
    transition: ${Ji["duration-150"]} ${Ji["ease-default"]};

    // default styles
    ${Xi["body-md-regular"]}
    border-radius: ${ra.md};
    border: ${ea["width-010"]} ${ea.solid} transparent;
    background-clip: border-box;
    color: ${Qi.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?O`
                cursor: pointer;
            `:e.$disabledDisplay?O`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?O`
                background: ${Qi["bg-selected"]};
                border-color: ${Qi["border-selected"]};
                color: ${Qi["text-selected"]};
                font-weight: ${Xi.Spec["weight-semibold"]};

                ${t&&O`
                    &:hover {
                        background: ${Qi["bg-selected-hover"]};
                        border-color: ${Qi["border-selected-hover"]};
                        color: ${Qi["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?O`
                color: ${Qi["text-primary"]};
                font-weight: ${Xi.Spec["weight-semibold"]};
            `:r?O`
                color: ${Qi["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?O`
                &:hover {
                    background: ${Qi["bg-selected-hover"]};
                    border-color: ${Qi["border-selected-hover"]};
                    color: ${Qi["text-selected-hover"]};
                    font-weight: ${Xi.Spec["weight-semibold"]};
                }
            `:O`
            &:hover {
                background: ${Qi["bg-hover"]};
                color: ${Qi["text-hover"]};
                font-weight: ${Xi.Spec["weight-semibold"]};
            }
        `}}
`,Wf=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:l,minDate:d,maxDate:u,allowDisabledSelection:f,onMonthSelect:h})=>{const p=a((()=>gd.generateMonths(nd(t))),[t]),m=s(new Array(p.length).fill(null)),[b,v]=g(p.findIndex((e=>e.isSame(i,"month"))));c((()=>{var e;null!==b&&(null===(e=m.current[b])||void 0===e||e.focus())}),[b,p]);const y=(e,t)=>{t||h(e)},x=e=>{const t="start"===r&&o&&e.isAfter(o,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!i)},w=e=>{const t=e.format("MMMM"),r=(n=e,!gd.isWithinRange(n,d?nd(d):void 0,u?nd(u):void 0,"month"));var n;const o=i.isSame(e,"month"),a=o?"selected-month":nd().isSame(e,"month")?"current-month":"default",s=i.isSame(e,"year")?o?0:-1:0===e.month()?0:-1;return{disabledDisplay:r||x(e),interactive:!r||f,month:t,variant:a,tabIndex:s}};return p.length?e(Nf,{onBlur:()=>{v(null)},children:p.map(((t,r)=>{const{disabledDisplay:n,interactive:o,variant:i,month:a,tabIndex:s}=w(t);return e(Hf,{ref:e=>m.current[r]=e,tabIndex:s,role:"button","aria-disabled":!o,"aria-selected":"selected-month"===i,$variant:i,$disabledDisplay:n,$interactive:o,onClick:()=>y(t,!o),onKeyDown:e=>{((e,t,r)=>{const n=e.key;let o;const i=p.indexOf(t);switch(n){case"Enter":case" ":e.preventDefault(),y(t,r);break;case"ArrowLeft":o=i-1;break;case"ArrowRight":o=i+1;break;case"ArrowUp":o=i-2;break;case"ArrowDown":o=i+2}void 0!==o&&o>=0&&o<p.length&&(e.preventDefault(),v(o))})(e,t,!o)},children:a},a)}))}):null},Yf=F.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Vf=F.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Ji["duration-150"]} ${Ji["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${Xi["body-md-regular"]}
    border-radius: ${ra.md};
    border: ${ea["width-010"]} ${ea.solid} transparent;
    background-clip: border-box;
    color: ${Qi.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?O`
                cursor: pointer;
            `:t?O`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?O`
                background: ${Qi["bg-selected"]};
                border-color: ${Qi["border-selected"]};
                color: ${Qi["text-selected"]};
                font-weight: ${Xi.Spec["weight-semibold"]};

                ${t&&O`
                    &:hover {
                        background: ${Qi["bg-selected-hover"]};
                        border-color: ${Qi["border-selected-hover"]};
                        color: ${Qi["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?O`
                color: ${Qi["text-primary"]};
                font-weight: ${Xi.Spec["weight-semibold"]};
            `:"other-decade"===e||r?O`
                color: ${Qi["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?O`
                &:hover {
                    background: ${Qi["bg-selected-hover"]};
                    border-color: ${Qi["border-selected-hover"]};
                    color: ${Qi["text-selected-hover"]};
                    font-weight: ${Xi.Spec["weight-semibold"]};
                }
            `:O`
            &:hover {
                background: ${Qi["bg-hover"]};
                color: ${Qi["text-hover"]};
                font-weight: ${Xi.Spec["weight-semibold"]};
            }
        `}}
`,Uf=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:l,minDate:d,maxDate:u,allowDisabledSelection:f,onYearSelect:h,setCalendarDate:p})=>{const m=a((()=>gd.generateDecadeOfYears(nd(t))),[t]),b=s(new Array(m.length).fill(null)),[v,y]=g(t);c((()=>{var e;if(null===v)return;const t=m.findIndex((e=>e.isSame(v,"year")));t>=0&&(null===(e=b.current[t])||void 0===e||e.focus())}),[v,m]);const x=(e,t)=>{t||h(e)},w=e=>{const t="start"===r&&o&&e.isAfter(o,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!i)},$=e=>{const t=m.indexOf(e),r=[0,11].includes(t),n=e.year(),o=(a=e,!gd.isWithinRange(a,d?nd(d):void 0,u?nd(u):void 0,"year"));var a;const s=r?"other-decade":i.isSame(e,"year")?"selected-year":nd().isSame(e,"year")?"current-year":"default",l=i.year()>=m[0].year()&&i.year()<=m[m.length-1].year()?"selected-year"===s?0:-1:1===t?0:-1;return{disabledDisplay:o||w(e),interactive:!o||f,year:n,variant:s,tabIndex:l}};return m.length?e(Yf,{onBlur:()=>{y(null)},children:m.map(((t,r)=>{const{disabledDisplay:n,interactive:o,variant:i,year:a,tabIndex:s}=$(t);return e(Vf,{ref:e=>{b.current[r]=e},tabIndex:s,role:"button","aria-label":`${a}`,"aria-disabled":!o,"aria-selected":"selected-year"===i,$variant:i,$disabledDisplay:n,$interactive:!!o,onClick:()=>x(t,!o),onKeyDown:e=>{((e,t,r)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(t,r);break;case"ArrowLeft":n=t.subtract(1,"year");break;case"ArrowRight":n=t.add(1,"year");break;case"ArrowUp":n=t.subtract(3,"year");break;case"ArrowDown":n=t.add(3,"year")}void 0!==n&&(e.preventDefault(),p(n),y(n))})(e,t,!o)},children:a},a)}))}):null},Kf=o.forwardRef(((n,o)=>{var{children:i,initialCalendarDate:a,minDate:l,maxDate:d,currentFocus:u,selectedStartDate:h,selectedEndDate:p,selectWithinRange:m,dynamicHeight:b=!1,allowDisabledSelection:v,onCalendarDateChange:y,withButton:x,doneButtonDisabled:w,onDismiss:$,showNavigationHeader:C=!0,getLeftArrowDate:S,getRightArrowDate:D,isLeftArrowDisabled:k,isRightArrowDisabled:E,getMonthHeaderLabel:F,getYearHeaderLabel:O,isFocusable:_=!1}=n,T=ct(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[I,M]=g(wd.toDayjs(a)),[A,j]=g(wd.toDayjs(a)),[B,R]=g("default"),z=s(null),P=s(null),L=s(null),N=s(null);f(o,(()=>({defaultView(){R("default")},resetView(){const e=wd.toDayjs(a);M(e),j(e),R("default")},setCalendarDate(e){const t=wd.toDayjs(e);M(t),j(t)}}))),c((()=>{const e=wd.toDayjs(a);M(e),j(e)}),[a]),c((()=>{Z(A)}),[A]);const H=()=>{var e;"month-options"!==B?(R("month-options"),null===(e=L.current)||void 0===e||e.focus()):(R("default"),M(A))},W=e=>{var t;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),H(),null===(t=N.current)||void 0===t||t.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const t="ArrowUp"===e.key?I.subtract(1,"month"):I.add(1,"month");if(!gd.isWithinRange(t,l?nd(l):void 0,d?nd(d):void 0,"month"))return;M(t),"default"===B&&j(t)}},Y=()=>{"default"!==B?(R("default"),M(A)):R("year-options")},V=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),Y()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let t;if(t="year-options"===B?"ArrowUp"===e.key?I.subtract(10,"year"):I.add(10,"year"):"ArrowUp"===e.key?I.subtract(1,"year"):I.add(1,"year"),!gd.isWithinRange(t,l?nd(l):void 0,d?nd(d):void 0,"year"))return;M(t),"default"===B&&j(t)}},U=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const t=S?S(I):I.subtract(1,"month");switch(B){case"default":j(t),M(t);break;case"month-options":M((e=>e.subtract(1,"year")));break;case"year-options":M((e=>e.subtract(10,"year")))}},K=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const t=D?D(I):I.add(1,"month");switch(B){case"default":j(t),M(t);break;case"month-options":M((e=>e.add(1,"year")));break;case"year-options":M((e=>e.add(10,"year")))}},q=e=>{M(e),j(e),x||R("default")},G=()=>{const e=wd.toDayjs(a);M(e),j(e),"default"===B?Q("reset"):R("default")},Z=e=>{y&&y(e)},Q=e=>{$&&$(e)},X=()=>{if(!l||v)return!1;const e=nd(l);return"month-options"===B?!gd.isPreviousYearWithinRange(I,e):"year-options"===B?!gd.isPreviousDecadeWithinRange(I,e):k?k(I):!gd.isPreviousMonthWithinRange(I,e)},J=()=>{if(!d||v)return!1;const e=nd(d);return"month-options"===B?!gd.isNextYearWithinRange(I,e):"year-options"===B?!gd.isNextDecadeWithinRange(I,e):E?E(I):!gd.isNextMonthWithinRange(I,e)},ee=()=>{const n=F?F(I):I.format("MMM"),o=nd(n,"MMM").format("MMMM"),i=(()=>{if("year-options"===B){const{beginDecade:e,endDecade:t}=gd.getStartEndDecade(I);return`${e} to ${t}`}return O?O(I):I.format("YYYY")})(),a={"month-options":`${i}, Close month selection`,"year-options":`${i}, Close year selection`,default:`${i}, Select year`};return t(r,{children:[t(jf,{"aria-label":`${o}, Select month`,type:"button",$expanded:"month-options"===B,$visible:"default"===B,id:"month-dropdown",onClick:H,onKeyDown:W,tabIndex:_?0:-1,children:[e(Bf,{children:n}),e(Ff,{})]}),t(jf,{ref:N,"aria-label":a[B],type:"button",$expanded:"default"!==B,id:"year-dropdown",onClick:Y,onKeyDown:V,tabIndex:_?0:-1,children:[e(Bf,{children:i}),e(Ff,{})]})]})},te=()=>{switch(B){case"month-options":return e(Wf,{calendarDate:I,currentFocus:u,minDate:l,maxDate:d,selectedStartDate:h,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!m,onMonthSelect:q,allowDisabledSelection:v});case"year-options":return e(Uf,{setCalendarDate:M,calendarDate:I,currentFocus:u,minDate:l,maxDate:d,selectedStartDate:h,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!m,onYearSelect:q,allowDisabledSelection:v});default:return null}};return t(Of,Object.assign({ref:L,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":A.format("MMMM, YYYY"),role:"group"},T,{children:[C&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[B];return t(Mf,{"data-id":"calendar-header","data-testid":"calendar-header",children:[e(Af,{children:ee()}),t(Rf,{children:[e(zf,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:X(),focusHighlight:!1,focusOutline:"browser",onClick:U,tabIndex:_?0:-1,children:e(kf,{})}),e(zf,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:J(),focusHighlight:!1,focusOutline:"browser",onClick:K,tabIndex:_?0:-1,children:e(Ef,{})})]})]})})(),e(_f,{children:(()=>{const n="function"==typeof i?i({calendarDate:A,currentView:B}):i;if(b)return t(r,{children:["default"===B&&n,te()]});{const o="default"===B;return t(r,{children:[e(Tf,{inert:Gu(!o),children:n}),e(If,{$visible:!o,children:te()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===B)&&w;return t(Pf,{children:[e(Lf,{ref:P,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:G,children:"Cancel"}),e(Lf,{"data-testid":"done-button",ref:z,type:"button",onClick:()=>{r||(M(A),"default"===B?Q("confirmed"):R("default"))},disabled:r,children:"Done"})]})})()]}))})),qf=F.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Gf=F.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${Xi["body-sm-semibold"]};
    color: ${Qi.text};
`,Zf=F.div`
    grid-column: 1 / -1;
    display: flex;
`,Qf=e=>{let t=Qi.bg,r="transparent";switch(e.$type){case"hover-subtle":t=Qi["bg-hover"],r=Qi["bg-hover"];break;case"hover":t=Qi["bg-hover-strong"],r=Qi["bg-hover-strong"];break;case"hover-outline":t=Qi["bg-hover-subtle"],r=Qi["border-hover"];break;case"selected-outline":t=Qi["bg-selected"],r=Qi["border-selected"];break;case"selected-outline-subtle":t=Qi["bg-selected"],r=Qi["border-selected-subtle"];break;case"selected-hover":t=Qi["bg-selected-hover"];break;case"selected-hover-outline":t=Qi["bg-selected-hover"],r=Qi["border-selected-hover"]}return{color:t,borderColor:r}},Xf=F.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Jf=F.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Ji["duration-150"]} ${Ji["ease-default"]};
    border: ${ea["width-010"]} ${ea.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=Qf(e);return O`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,eh=F(Jf)`
    left: 0;
`,th=F(Jf)`
    right: 0;
`,rh=F.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Ji["duration-150"]} ${Ji["ease-default"]};

    border: ${ea["width-010"]} ${ea.solid} transparent;
    border-radius: ${ra.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=Qf(e);return O`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,nh=F(rh)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,oh=F(rh)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,ih=F.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,ah=F.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Xi["body-md-regular"]}
    transition: ${Ji["duration-150"]} ${Ji["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"hidden"===r?O`
                    visibility: hidden;
                `:O`
                color: ${Qi["text-disabled-subtlest"]};
            `;switch(r){case"selected":return O`
                    font-weight: ${Xi.Spec["weight-semibold"]};
                    color: ${Qi["text-selected"]};
                `;case"selected-hover":return O`
                    font-weight: ${Xi.Spec["weight-semibold"]};
                    color: ${Qi["text-selected-hover"]};
                `;case"current":return O`
                    font-weight: ${Xi.Spec["weight-semibold"]};
                    color: ${Qi["text-primary"]};
                `;case"hover":return O`
                    font-weight: ${Xi.Spec["weight-semibold"]};
                    color: ${Qi["text-hover"]};
                `;case"unavailable":return O`
                    color: ${Qi["text-disabled-subtlest"]};
                `;case"hidden":return O`
                    visibility: hidden;
                `;default:return O`
                    color: ${Qi.text};
                `}}}

    &:focus {
        outline: none;
    }
`,sh=F.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`,lh=({bgLeft:r,bgRight:n,circleLeft:o,circleRight:i,labelType:a,disabled:l,interactive:d,currentDateIndicator:u,date:f,onSelect:h,onHover:p,onFocus:g,onHoverEnd:m,onKeyDown:b,focusDate:v,label:y,ariaHidden:x,tabIndex:w=-1,role:$="button"})=>{const C=nd().isSame(f,"day"),S=!!v&&v.isSame(f,"day"),D=`${f.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,k=s(null);c((()=>{var e;S&&k.current&&(null===(e=k.current)||void 0===e||e.focus())}),[S]);return t(Xf,{"aria-hidden":x,children:[e(eh,{$type:r}),e(nh,{$type:o}),e(th,{$type:n}),e(oh,{$type:i}),e(ih,{$interactive:d,children:t(ah,{ref:k,tabIndex:w,role:$,"aria-label":y||D,"aria-disabled":!d,"aria-selected":"selected"===a||"selected-hover"===a,$type:a,$disabled:l,$interactive:d,onClick:()=>{null==h||h(f)},onKeyDown:e=>{b&&b(e)},onMouseEnter:()=>{null==p||p(f)},onMouseLeave:()=>{null==m||m(f)},onFocus:()=>{null==g||g(f)},children:[f.date(),u&&C&&e(sh,{$disabled:l})]})})]})},ch=({date:t,calendarDate:r,startDate:n,endDate:o,currentFocus:i,hoverDate:a,focusDate:s,minDate:l,maxDate:c,disabledDates:d,allowDisabledSelection:u,isNewSelection:f,showActiveMonthDaysOnly:h,onSelect:p,onHover:g,onFocus:m,setFocusCell:b,tabIndex:v})=>{const y=gd.isDisabledDay(t,d,l,c),x=!y||u,w=()=>{p(t,!x)},$=()=>{const e=nd(a),t=e.isBefore(o,"day"),r=e.isAfter(n,"day");let s,l,c,d;return"start"===i&&o&&t&&(n&&r?(c=a,d=o):(s=a,l=n||o)),"end"===i&&n&&r&&(o&&t?(c=n,d=a):(s=o||n,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},C={date:t,calendarDate:r,disabled:y,interactive:x,currentDateIndicator:!0,onSelect:w,onHover:()=>{g(t.format("YYYY-MM-DD"),!x)},onFocus:()=>{m(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(x&&w());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),b(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:nd(s),tabIndex:v};return e(lh,Object.assign({},C,(()=>{const e={};if(r.month()!==t.month())e.labelType=h?"hidden":"unavailable";else if(nd().isSame(t,"day")&&!y)e.labelType="current";else if(f){const r="end"===i&&n&&t.isBefore(n),a="start"===i&&o&&t.isAfter(o);(r||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},i=t.isSame(n,"day"),a=t.isSame(o,"day");return h&&r.month()!==t.month()?(e.labelType="hidden",e):((n&&i||o&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),n&&o&&t.isBetween(n,o,"day","[]")&&(e.labelType="selected",i||(e.bgLeft="selected-outline-subtle"),a||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!a)return{};const e={},r=t.isSame(a,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:c}=$();if(r){const r=t.isSame(n,"day"),i=t.isSame(o,"day");r||i?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(i&&s){if(t.isBetween(i,s,"day","[]")){const r=t.isSame(i,"day"),n=t.isSame(s,"day");r||(e.labelType="hover",e.bgLeft="hover-outline"),n||(e.labelType="hover",e.bgRight="hover-outline")}return e}return l&&c?(t.isBetween(l,c,"day","[]")&&r&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};nd.extend(sd);const dh=({calendarDate:r,currentFocus:n,disabledDates:o,selectedStartDate:i,selectedEndDate:l,onSelect:u,onHover:f,isNewSelection:h,minDate:p,maxDate:m,allowDisabledSelection:b,showActiveMonthDaysOnly:v,setCalendarDate:y})=>{const x=s(null);c((()=>{if(x.current){const e=x.current;x.current=null,k(e)}}),[r]);const w=d((()=>i&&nd(i).isSame(r,"month")?nd(i):l&&nd(l).isSame(r,"month")?nd(l):nd().isSame(r,"month")?nd():p&&r.isSame(nd(p),"month")?nd(p):nd(r).startOf("month")),[i,r,l,p]),$=e=>{const t=nd(e);if(gd.isWithinRange(t,p?nd(p):void 0,m?nd(m):void 0)){if(!t.isSame(r,"month"))return null==y||y(e),void(x.current=e);k(e)}},C=a((()=>gd.generateDays(r)),[r]),S=a((()=>w()),[w]),[D,k]=g(""),[E,F]=g(""),O=(e,t)=>{t&&!b||u(e)},_=(e,t)=>{t&&!b||(F(e),f(e))},T=e=>{F(e),f(e)},I=()=>{F(""),f("")};return t(qf,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(k(""),F(""),f(""))},children:[C[0].map(((t,r)=>e(Gf,{"aria-hidden":!0,children:nd(t).format("ddd")},`week-day-${r}`))),C.map(((t,a)=>e(Zf,{role:"row","aria-label":`Week ${a+1}`,onMouseLeave:I,children:t.map(((t,a)=>e(ch,{date:t,calendarDate:r,startDate:i,endDate:l,hoverDate:E,focusDate:D,currentFocus:n,minDate:p,maxDate:m,disabledDates:o,allowDisabledSelection:b,isNewSelection:h,showActiveMonthDaysOnly:v,onSelect:O,onHover:_,onFocus:T,setFocusCell:$,tabIndex:t.isSame(S,"day")?0:-1},`day-${a}`)))},a)))]})},uh=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:c,numberOfDays:d=1,onSelect:u,onHover:f,onFocus:h,setFocusCell:p,tabIndex:g})=>{const m=gd.isDisabledDay(t,l,a,s),b=!m||c,{start:v,end:y}=n?gd.getFixedRangeStartEnd(wd.toDayjs(n),d):{start:void 0,end:void 0},{start:x,end:w}=o?gd.getFixedRangeStartEnd(wd.toDayjs(o),d):{start:void 0,end:void 0},$=!!n&&t.isBetween(v,y,"day","[]"),C=!!o&&t.isBetween(x,w,"day","[]"),S=$&&t.isSame(v,"day")||C&&t.isSame(x,"day"),D=$&&t.isSame(y,"day")||C&&t.isSame(w,"day"),k=`From ${nd(x).format("D MMMM")} to ${nd(w).format("D MMMM")}, ${m?"Unavailable":"Available"}`,E=()=>{u(t,!b)},F=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},O={date:t,calendarDate:r,disabled:m,interactive:b,currentDateIndicator:!0,onSelect:E,onHover:()=>{f(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{h(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&E());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),p(r.format("YYYY-MM-DD")))})(e)},focusDate:nd(i),role:"gridcell",tabIndex:g,label:k};return e(lh,Object.assign({},O,(()=>{const e={};return $||C?e.labelType="selected":r.month()!==t.month()?e.labelType="unavailable":nd().isSame(t,"day")&&!m&&(e.labelType="current"),e})(),(()=>{const e={},r=t.format("YYYY-MM-DD");return C&&F(e,"hover",r===x,r===w),$&&F(e,"selected-outline",r===v,r===y),$&&C&&(F(e,"selected-hover-outline",S,D),r===x&&r!==v&&(e.circleLeft="selected-hover")),e})()))},fh=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:l,minDate:u,maxDate:f,allowDisabledSelection:h,numberOfDays:p,setCalendarDate:m})=>{const b=s(null);c((()=>{if(b.current){const e=b.current;b.current=null,C(e)}}),[r]);const v=d((()=>o&&nd(o).isSame(r,"month")?nd(o):nd().isSame(r,"month")?nd():u&&r.isSame(nd(u),"month")?nd(u):nd(r).startOf("month")),[o,r,u]),y=e=>{const t=nd(e);if(gd.isWithinRange(t,u?nd(u):void 0,f?nd(f):void 0)){if(!t.isSame(r,"month"))return null==m||m(e),void(b.current=e);C(e)}},x=a((()=>gd.generateDays(r)),[r]),w=a((()=>v()),[v]),[$,C]=g(""),[S,D]=g(""),k=(e,t)=>{t&&!h||(i(e),e&&!nd(e).isSame(e,"month")&&D(""))},E=(e,t)=>{t&&!h||(D(e),l(e))},F=e=>{D(e),l(e)},O=()=>{D(""),l("")};return t(qf,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),D(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(Gf,{"aria-hidden":!0,children:nd(t).format("ddd")},`week-day-${r}`))),x.map(((t,i)=>e(Zf,{role:"row",onMouseLeave:O,children:t.map(((t,i)=>e(uh,{date:t,calendarDate:r,selectedDate:o,hoverDate:S,focusDate:$,minDate:u,maxDate:f,disabledDates:n,allowDisabledSelection:h,onSelect:k,onHover:E,numberOfDays:p,onFocus:F,setFocusCell:y,tabIndex:nd(t).isSame(w,"day")?0:-1},`day-${i}`)))},i)))]})},hh=F.div`
    width: 100%;
    background: ${Qi.bg};
`,ph=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:c,showActiveMonthDaysOnly:d,onSelect:u,onHover:f,onFocus:h,setFocusCell:p,tabIndex:g})=>{const m=gd.isDisabledDay(t,l,a,s),b=!m||c,v=()=>{u(t,!b)},y={date:t,calendarDate:r,disabled:m,interactive:b,currentDateIndicator:!0,onSelect:v,onHover:()=>{f(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{h(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&v());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),p(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:nd(i),tabIndex:g};return e(lh,Object.assign({},y,(()=>{const e={};r.month()!==t.month()?e.labelType=d?"hidden":"unavailable":nd().isSame(t,"day")&&!m&&(e.labelType="current");const i=t.isSame(n,"day"),a=t.isSame(o,"day");return i&&a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):i?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):a&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};nd.extend(sd);const gh=({calendarDate:r,disabledDates:n,selectedDate:o,onSelect:i,onHover:l,minDate:u,maxDate:f,allowDisabledSelection:h,showActiveMonthDaysOnly:p,setCalendarDate:m})=>{const b=s(null);c((()=>{if(b.current){const e=b.current;b.current=null,C(e)}}),[r]);const v=d((()=>o&&nd(o).isSame(r,"month")?nd(o):nd().isSame(r,"month")?nd():u&&r.isSame(nd(u),"month")?nd(u):nd(r).startOf("month")),[o,r,u]),y=e=>{const t=nd(e);if(gd.isWithinRange(t,u?nd(u):void 0,f?nd(f):void 0)){if(!t.isSame(r,"month"))return null==m||m(e),void(b.current=e);C(e)}},x=a((()=>gd.generateDays(r)),[r]),w=a((()=>v()),[v]),[$,C]=g(""),[S,D]=g(""),k=(e,t)=>{t&&!h||i(e)},E=(e,t)=>{t&&!h||(D(e),l(e))},F=e=>{D(e),l(e)},O=()=>{D(""),l("")};return t(qf,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),D(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(Gf,{"aria-hidden":!0,children:nd(t).format("ddd")},`week-day-${r}`))),x.map(((t,i)=>e(Zf,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:O,children:t.map(((t,i)=>e(ph,{date:t,calendarDate:r,selectedDate:o,hoverDate:S,focusDate:$,minDate:u,maxDate:f,disabledDates:n,allowDisabledSelection:h,showActiveMonthDaysOnly:p,onSelect:k,onHover:E,onFocus:F,setFocusCell:y,tabIndex:nd(t).isSame(w,"day")?0:-1},`day-${i}`)))},i)))]})},mh=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:c,onSelect:d,onHover:u,onFocus:f,setFocusCell:h,tabIndex:p})=>{const g=gd.isDisabledDay(t,l,a,s),m=!g||c,{start:b,end:v}=gd.getWeekStartEnd(wd.toDayjs(n)),{start:y,end:x}=gd.getWeekStartEnd(wd.toDayjs(o)),{start:w,end:$}=gd.getWeekStartEnd(t),C=t.isSame(w,"day"),S=n&&t.isBetween(b,v,"day","[]"),D=o&&t.isBetween(y,x,"day","[]"),k=S&&t.isSame(b)||D&&t.isSame(y),E=S&&t.isSame(v)||D&&t.isSame(x),F=`From ${nd(w).format("D MMMM")} to ${nd($).format("D MMMM")}, ${g?"Unavailable":"Available"}`,O=()=>{d(t,!m)},_={date:t,calendarDate:r,disabled:g,interactive:m,currentDateIndicator:!0,onSelect:O,onHover:()=>{u(t.format("YYYY-MM-DD"),!m)},onFocus:()=>{f(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(m&&O());(e=>{let r;const n={ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),h(r.format("YYYY-MM-DD")))})(e)},focusDate:nd(i),tabIndex:p,label:F,ariaHidden:!C||void 0,role:C?"button":"none"};return e(lh,Object.assign({},_,(()=>{const e={};return r.month()!==t.month()?e.labelType="unavailable":nd().isSame(t,"day")&&!g&&(e.labelType="current"),e})(),(()=>{const e={};let t,r;return S&&D?(t="selected-hover-outline",r="selected-hover"):S?(t="selected-outline",r="selected"):D&&(t="hover",r="hover"),t&&(e.labelType=r,k?e.circleLeft=t:e.bgLeft=t,E?e.circleRight=t:e.bgRight=t),e})()))},bh=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:l,minDate:u,maxDate:f,allowDisabledSelection:h,setCalendarDate:p})=>{const m=s(null);c((()=>{if(m.current){const e=m.current;m.current=null,$(e)}}),[r]);const b=d((()=>o&&nd(o).isSame(r,"month")?nd(o):nd().isSame(r,"month")?nd().startOf("week"):u&&r.isSame(nd(u),"month")?nd(u):nd(r).startOf("month")),[o,r,u]),v=e=>{const t=nd(e);if(gd.isWithinRange(t,u?nd(u):void 0,f?nd(f):void 0)){if(!t.isSame(r,"month"))return null==p||p(e),void(m.current=e);$(e)}},y=a((()=>gd.generateDays(r)),[r]),x=a((()=>b()),[b]),[w,$]=g(""),[C,S]=g(""),D=(e,t)=>{if(t&&!h)return;const r=e.startOf("week");i(r),e&&!nd(e).isSame(r,"month")&&S("")},k=(e,t)=>{t&&!h||(S(e),l(e))},E=e=>{S(e),l(e)},F=()=>{S(""),l("")};return t(qf,{"data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||($(""),S(""),l(""))},"aria-label":"Week selection",children:[y[0].map(((t,r)=>e(Gf,{"aria-hidden":!0,children:nd(t).format("ddd")},`week-day-${r}`))),y.map(((t,i)=>e(Zf,{onMouseLeave:F,role:"group",children:t.map(((t,i)=>e(mh,{date:t,calendarDate:r,selectedDate:o,hoverDate:C,focusDate:w,minDate:u,maxDate:f,disabledDates:n,allowDisabledSelection:h,onSelect:D,onHover:k,onFocus:E,setFocusCell:v,tabIndex:nd(t).isSame(x,"day")?0:-1},`day-${i}`)))},i)))]})},vh=o.forwardRef((({disabledDates:t,onYearMonthDisplayChange:r,onSelect:n,onHover:o,onDismiss:i,value:a,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:h,maxDate:p,allowDisabledSelection:g,selectWithinRange:m=!0,initialCalendarDate:b,numberOfDays:v,showActiveMonthDaysOnly:y=!1,isFocusable:x=!1},w)=>{const $=s(null),C=s(void 0),S=s(null);f(w,(()=>({reset(){var e;null===(e=$.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=$.current)||void 0===t||t.setCalendarDate(e)},contains(e){var t;return(null===(t=S.current)||void 0===t?void 0:t.contains(e))||!1}})));const D=e=>{var t;const r=e.format("YYYY-MM-DD");null===(t=$.current)||void 0===t||t.setCalendarDate(r),E(r)},k=e=>{F(e)},E=e=>{n&&n(e)},F=e=>{o&&o(e)},O=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return e(hh,{ref:S,children:e(Kf,{ref:$,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!a!=!!l;break;case"week":e=!a&&!l}return e})(),onDismiss:i,minDate:h,maxDate:p,selectWithinRange:m,currentFocus:c,selectedStartDate:a,selectedEndDate:l,allowDisabledSelection:g,onCalendarDateChange:e=>{var t;C.current&&C.current.isSame(e,"month")||(null===(t=$.current)||void 0===t||t.setCalendarDate(e.format("YYYY-MM-DD")),O(e)),C.current=e},initialCalendarDate:b,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;const o=null===(n=$.current)||void 0===n?void 0:n.setCalendarDate;switch(u){case"week":return e(bh,{calendarDate:r,disabledDates:t,selectedStartDate:a,minDate:h,maxDate:p,allowDisabledSelection:g,onSelect:D,onHover:k,setCalendarDate:o});case"fixed-range":return e(fh,{calendarDate:r,disabledDates:t,selectedStartDate:a,minDate:h,maxDate:p,allowDisabledSelection:g,onSelect:D,onHover:k,numberOfDays:v,setCalendarDate:o});case"single":return e(gh,{calendarDate:r,disabledDates:t,selectedDate:a,minDate:h,maxDate:p,allowDisabledSelection:g,showActiveMonthDaysOnly:y,onSelect:D,onHover:k,setCalendarDate:o});default:return e(dh,{calendarDate:r,currentFocus:c,disabledDates:t,selectedStartDate:a,selectedEndDate:l,minDate:h,maxDate:p,isNewSelection:m,allowDisabledSelection:g,showActiveMonthDaysOnly:y,onSelect:D,onHover:k,setCalendarDate:o})}})(r)})})})),yh=o.forwardRef(((t,r)=>{const{elementWidth:n,setFloatingRef:o,getFloatingProps:i,styles:a}=Vu();return e(Ku,Object.assign({$width:n,"data-testid":"calendar-dropdown",ref:o,style:a},i(),{children:e(vh,Object.assign({ref:r},t))}))})),xh=O`
    outline-offset: -1px;
    outline: ${ea["width-020"]} ${ea.solid} ${Qi["border-focus"]};
`,wh=O`
    outline-color: ${Qi["border-focus"]};
`,$h=O`
    outline-color: ${Qi["border-disabled"]};
`,Ch=O`
    outline-color: ${Qi["border-error-focus"]};
`,Sh=F.div`
    border: ${ea["width-010"]} ${ea.solid} ${Qi.border};
    border-radius: ${ra.sm};
    background: ${Qi.bg};

    &:focus-within {
        ${xh}
    }
    ${e=>e.$focused&&xh}

    ${e=>e.$readOnly?O`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${wh}
                }
                ${e.$focused&&wh}
            `:e.$disabled?O`
                background: ${Qi["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${$h}
                }
                ${e.$focused&&$h}
            `:e.$error?O`
                border-color: ${Qi["border-error"]};

                &:focus-within {
                    ${Ch}
                }
                ${e.$focused&&Ch}
            `:void 0}
`,Dh=F(Sh)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${ta["spacing-16"]} 0
        ${e=>e.$readOnly?"0":ta["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,kh=F.input`
    ${e=>"small"===e.$variant?Xi["body-md-regular"]:Xi["body-baseline-regular"]}
    color: ${Qi.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${Qi["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Qi["text-subtler"]};
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
`,Eh=F.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${ea["width-010"]} ${ea.solid}
            ${Qi["border-focus"]};
        border-radius: ${ra.sm};
    }
`,Fh=F.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Oh=F.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return O`
                ${_h}, ${Ah} {
                    color: ${Qi["text-subtler"]};
                }
            `}}
`,_h=F(kh)`
    background: transparent;
    text-align: center;
`,Th=F(_h)`
    width: 2rem;
    margin-right: ${ta["spacing-4"]};
`,Ih=F(_h)`
    width: 2.5rem;
`,Mh=F(_h)`
    width: 3rem;
    margin-left: ${ta["spacing-4"]};
`,Ah=F.span`
    ${Xi["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return O`
                color: ${Qi.text};
            `}}
`,jh=F.div`
    ${Xi["body-baseline-regular"]}
    background-color: ${Qi.bg};
    color: ${Qi["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?O`
                background-color: ${Qi["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?O`
                display: none;
            `:void 0}
`;nd.extend(id);const Bh=o.forwardRef((({disabled:r,readOnly:n,names:o,value:i,focused:a,hoverValue:l,placeholder:d,label:u,onChange:h,onFocus:p,onBlur:m,hideInputKeyboard:b,inputLabels:v=["Date","Month","Year"]},y)=>{const x=b?"none":"numeric",[w,$,C]=Id(""),[S,D,k]=Id(""),[E,F,O]=Id(""),[_,T]=g("none"),[I,M]=g(!1),A=s(null),j=s(null),B=s(null),R=s(null),[z,P,L]=U(l);c((()=>{var e;const[t="",r="",n=""]=U(i);$(t),D(r),F(n),t||r||n||!A.current||!A.current.contains(document.activeElement)||null===(e=j.current)||void 0===e||e.focus()}),[i]),c((()=>{var e;a||T("none"),a&&(M(!0),A.current&&!A.current.contains(document.activeElement)&&(null===(e=j.current)||void 0===e||e.focus()))}),[a]),f(y,(()=>({ref:A,resetPlaceholder(){M(!1)},resetInput(){const[e="",t="",r=""]=U(i);$(e),D(t),F(r)},focusYearRef(){var e;null===(e=R.current)||void 0===e||e.focus()}})),[$,D,F,i]);const N=e=>{var t;e.preventDefault(),null===(t=j.current)||void 0===t||t.focus()},H=e=>{e.target.select();const t=e.target.name;T(t)},W=e=>{const[t,r,n]=o,i={[t]:C.current,[r]:k.current,[n]:O.current},a=e.target.name,s=i[a],l=a!==n?kd.padValue(s,!0):s;switch(a){case t:i[t]=l,$(l);break;case r:i[r]=l,D(l)}const c=`${i[n]}-${i[r]}-${i[t]}`,d=nd(c,"YYYY-MM-DD",!0).isValid(),u=!i[t]&&!i[r]&&!i[n];d&&s!==l&&h(c),A.current&&!A.current.contains(e.relatedTarget)&&(T("none"),null==m||m(u||d))},Y=e=>{var t,r;if(l)return;const n=e.target.name,i=e.target.value.replace(/[^0-9]/g,""),a={day:w,month:S,year:E};switch(n){case o[0]:a.day=i,$(i),2===i.length&&(null===(t=B.current)||void 0===t||t.focus());break;case o[1]:a.month=i,D(i),2===i.length&&(null===(r=R.current)||void 0===r||r.focus());break;case o[2]:a.year=i,F(i)}if(!a.day&&!a.month&&!a.year)return void h("");const s=`${a.year}-${a.month}-${a.day}`;nd(s,"YYYY-MM-DD",!0).isValid()&&h(s)},V=e=>{var t,r;"Backspace"!==e.code&&"Backspace"!==e.key||(_===o[1]&&0===S.length&&(null===(t=j.current)||void 0===t||t.focus()),_===o[2]&&0===E.length&&(null===(r=B.current)||void 0===r||r.focus()))};function U(e){if(e){const t=nd(new Date(e));return t.isValid()?[kd.padValue(t.date().toString()),kd.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return t(Fh,{role:"group","aria-label":u,onClick:()=>{var e;r||n||(M(!0),A.current&&!A.current.contains(document.activeElement)&&(null===(e=j.current)||void 0===e||e.focus()))},onFocus:e=>{r||(M(!0),a||null==p||p(e))},children:[t(Oh,{ref:A,$hover:!!l,children:[e(Th,{ref:j,name:o[0],maxLength:2,value:null!=z?z:w,onFocus:H,onBlur:W,onChange:Y,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${o[0]}-input`,"aria-label":v[0],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:_!==o[0]||n?"DD":""}),e(Ah,{$inactive:0===w.length,children:"/"}),e(Ih,{ref:B,name:o[1],maxLength:2,value:null!=P?P:S,onFocus:H,onBlur:W,onChange:Y,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${o[1]}-input`,"aria-label":v[1],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:_!==o[1]||n?"MM":""}),e(Ah,{$inactive:0===S.length,children:"/"}),e(Mh,{ref:R,name:o[2],maxLength:4,value:null!=L?L:E,onFocus:H,onBlur:W,onChange:Y,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{4}","data-testid":`${o[2]}-input`,"aria-label":v[2],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:_!==o[2]||n?"YYYY":""})]}),(()=>{if(!i&&!n&&d)return e(jh,{$hide:I,$disabled:r,onMouseDown:N,children:d})})()]})})),Rh=F(Dh)`
    height: 3rem;
`,zh=t=>{var{minDate:r,maxDate:n,disabled:o,disabledDates:i,error:a,hideInputKeyboard:l,value:d,onChange:u,onFocus:f,onBlur:h,onYearMonthDisplayChange:p,withButton:m=!0,readOnly:b,id:v,allowDisabledSelection:y,zIndex:x,dropdownRootNode:w}=t,$=ct(t,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[C,S]=g($d.sanitizeInput(d)),[D,k]=g($d.sanitizeInput(d)),[E,F]=g(void 0),[O,_]=g(!1),[T,I]=g(!1),M=s(null),A=s(null),j=s(null);c((()=>{const e=$d.sanitizeInput(d);S(e),k(e)}),[d]);const B=e=>{!y&&$d.isDateDisabled(e,{disabledDates:i,minDate:r,maxDate:n})||(k(e),m||(H(e),S(e),e&&_(!1)))},R=e=>{var t;k(e),m||(H(e),S(e),e&&(null===(t=A.current)||void 0===t||t.focusYearRef(),_(!1)),E&&F(void 0))},z=()=>{b||o||(_(!0),T||(I(!0),f&&f()))},P=e=>{var t,r,n;const o=e.relatedTarget,i=j.current&&j.current.contains(o),a=M.current&&M.current.contains(o),s=(null===(t=null==o?void 0:o.matches)||void 0===t?void 0:t.call(o,"[data-floating-ui-focusable]"))||(null===(r=null==o?void 0:o.matches)||void 0===r?void 0:r.call(o,"[data-floating-ui-focus-guard]"));(T&&!O&&!a&&!s||O&&!a&&!i&&!s)&&(null===(n=A.current)||void 0===n||n.resetInput(),k(C),I(!1),_(!1),W())},L=e=>{F(e)},N=e=>{var t,r;switch(e){case"reset":k(C);break;case"confirmed":S(D),H(D)}nd(D,"YYYY-MM-DD",!0).isValid()?null===(t=A.current)||void 0===t||t.focusYearRef():null===(r=M.current)||void 0===r||r.focus(),_(!1)},H=e=>{u&&u(e)},W=()=>{h&&h()};return e(Uu,{enabled:!b&&!o,isOpen:O,renderElement:()=>e(Rh,Object.assign({role:"group",tabIndex:0,ref:M,onBlur:P,onFocus:z,$disabled:o,$readOnly:b,$focused:T,$error:a,id:v,"data-testid":$["data-testid"],"aria-disabled":o},$,{children:e(Bh,{ref:A,disabled:o,onChange:B,readOnly:b,focused:O,names:["start-day","start-month","start-year"],value:D,hoverValue:E,hideInputKeyboard:l})})),renderDropdown:({elementWidth:t})=>e(yh,{variant:"single",ref:j,initialCalendarDate:D,withButton:m,value:D,disabledDates:i,minDate:r,maxDate:n,allowDisabledSelection:y,onHover:L,onSelect:R,onDismiss:N,onYearMonthDisplayChange:p,width:t,isFocusable:!b&&!o}),onClose:()=>{var e;null===(e=A.current)||void 0===e||e.resetInput(),k(C),_(!1),I(!1),W()},onDismiss:()=>{var e,t;null===(e=A.current)||void 0===e||e.resetInput(),null===(t=M.current)||void 0===t||t.focus(),k(C),_(!1)},customZIndex:x,offset:16,rootNode:w})},Ph=F.div`
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
                        100% - ${Xi.Spec["body-size-baseline"]} -
                            ${ta["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${ta["spacing-8"]};
                }
            `}}
`,Lh=F.div`
    width: 100%; // Force next flex item to break to next line
`,Nh=F.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Hh=F(se)`
    color: ${Qi.icon};
    width: ${Xi.Spec["body-size-baseline"]};
    height: ${Xi.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${ta["spacing-8"]};
    align-self: center;
`,Wh=F.div`
    position: absolute;
    background: ${e=>e.$error?Qi["border-error-focus-strong"]:Qi["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${ta["spacing-8"]} - (${Xi.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Ji["duration-350"]} ${Ji["ease-standard"]},
        opacity ${Ji["duration-350"]} ${Ji["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return O`
                    opacity: 1;
                `;case"end":return O`
                    left: calc(50% + ${ta["spacing-16"]});
                    opacity: 1;
                `;case"none":return O`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return O`
                display: none;
            `}}
`,Yh=({children:r,currentActive:n,error:o,className:i,wrap:a})=>{const[s,l]=r;return t(Ph,{className:i,$wrap:a,children:[e(Nh,{"data-id":"range-container-elem1-container",children:s}),e(Hh,{}),a&&e(Lh,{}),e(Nh,{"data-id":"range-container-elem2-container",children:l}),e(Wh,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:a})]})},Vh=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},Uh=F(Dh)`
    ${e=>{if(e.$wrap)return!0===e.$readOnly?O`
                    padding: ${ta["spacing-12"]} 0;
                `:O`
                padding: ${ta["spacing-12"]} ${ta["spacing-16"]};
            `}}
`,Kh=F.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&O`
            height: fit-content;
        `}
`,qh={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},Gh=r=>{var{minDate:n,maxDate:o,disabled:i,disabledDates:a,error:u,hideInputKeyboard:f,value:h,valueEnd:p,onChange:m,onFocus:b,onBlur:v,onYearMonthDisplayChange:y,withButton:x=!0,variant:w="range",numberOfDays:$=7,readOnly:C,id:S,allowDisabledSelection:D,zIndex:k,dropdownRootNode:E}=r,F=ct(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[O,_]=g(),[T,I]=g(void 0),M="week"===w,A="fixed-range"===w,[j,B]=g(!1),[R,z]=g(!1),[{selectedStart:P,selectedEnd:L,currentFocus:N,calendarOpen:H,isStartDirty:W,isEndDirty:Y,focused:V},U]=(({initialState:e,reducers:t,name:r,debug:n})=>{const[o,i]=l(((e,r)=>t[r.type]?t[r.type](e,r.payload):e),e);return[o,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{n&&Vh(r,e,t),i({type:e,payload:t})}])))]})({name:"date-range-input",initialState:qh,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:M?"none":A?"start":t,calendarOpen:!C,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),K=s(!1),q=s(null),G=s(null),Z=s(null),Q=s(null),X=(({maxWidth:e,targetRef:t})=>{const[r,n]=g(!1);return Zc({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:d((t=>{n(t<=e)}),[e])}),r})({maxWidth:320,targetRef:q});c((()=>{U.resetRange({start:$d.sanitizeInput(h),end:$d.sanitizeInput(p)})}),[h,p]),c((()=>{"start"===N?_(P):"end"===N&&L&&_(L)}),[N]);const J=e=>{var t,r,n;"Enter"!==e.code||x||(P&&L?(U.done({start:P,end:L}),null==m||m(P,L)):(U.dismiss(),null===(t=q.current)||void 0===t||t.focus(),null===(r=Z.current)||void 0===r||r.resetPlaceholder(),null===(n=Q.current)||void 0===n||n.resetPlaceholder()))},ee=e=>{var t;if(pe(e))return void(K.current=!0);if(U.changeStart(e),e&&(null===(t=G.current)||void 0===t||t.setCalendarDate(e)),K.current=!1,!e)return void(x||L||!Y||(U.resetRange({start:"",end:""}),null==m||m("","")));if(!L)return void U.focus("end");if(nd(e).isAfter(L,"day"))U.reselectEnd();else{if(Y)return x?void 0:(U.done({start:e,end:L}),void(null==m||m(e,L)));U.focus("end")}},te=e=>{var t,r,n;if(pe(e))return void(K.current=!0);if(nd(e).isBefore(P,"day"))return U.changeStart(e),null===(t=G.current)||void 0===t||t.setCalendarDate(e),void U.reselectEnd();if(U.changeEnd(e),e&&(null===(r=G.current)||void 0===r||r.setCalendarDate(e)),e){if(P)return x?void 0:(null===(n=Q.current)||void 0===n||n.focusYearRef(),U.done({start:P,end:e}),void(null==m||m(P,e)));U.focus("start")}else x||P||!W||(U.resetRange({start:"",end:""}),null==m||m("",""))},re=e=>{var t,r;if(pe(e))return void(K.current=!0);if(U.changeStart(e),null===(t=G.current)||void 0===t||t.setCalendarDate(e),K.current=!1,!e)return void(x?U.changeEnd(""):(U.resetRange({start:"",end:""}),null==m||m("","")));const n=nd(e).format("YYYY-MM-DD"),o=nd(n).add($-1,"day").format("YYYY-MM-DD");return U.changeStart(n),U.changeEnd(o),K.current=!1,x?void 0:(U.done({start:n,end:o}),null===(r=Z.current)||void 0===r||r.focusYearRef(),void(null==m||m(n,o)))},ne=()=>{(M||A)&&z(!0),M&&B(!0),C||i||V||(U.focus("start"),null==b||b())},oe=e=>{var t,r,n,o;const i=e.relatedTarget,a=G.current&&G.current.contains(i),s=q.current&&q.current.contains(i),l=(null===(t=null==i?void 0:i.matches)||void 0===t?void 0:t.call(i,"[data-floating-ui-focusable]"))||(null===(r=null==i?void 0:i.matches)||void 0===r?void 0:r.call(i,"[data-floating-ui-focus-guard]"));(V&&!H&&!s&&!l||H&&!s&&!a&&!l)&&(U.blur(),z(!1),B(!1),null===(n=Z.current)||void 0===n||n.resetPlaceholder(),null===(o=Q.current)||void 0===o||o.resetPlaceholder(),he())},ie=e=>t=>{t.stopPropagation(),C||(U.focus(e),ae(),se(),V||null==b||b())},ae=()=>{if(M){const e=wd.toDayjs(P).startOf("week").format("YYYY-MM-DD");B(!0),z(!0),_(e)}},se=()=>{A&&(z(!0),_(P))},le=e=>{var t;e&&!K.current||(U.resetStart(),null===(t=Z.current)||void 0===t||t.resetInput())},ce=e=>{var t;e&&!K.current||(U.resetEnd(),null===(t=Q.current)||void 0===t||t.resetInput())},de=e=>{switch(w){case"week":(e=>{var t;const r=nd(e).startOf("week").format("YYYY-MM-DD"),n=nd(e).endOf("week").format("YYYY-MM-DD");if(U.changeStart(r),U.changeEnd(n),K.current=!1,!x)null===(t=Q.current)||void 0===t||t.focusYearRef(),U.done({start:r,end:n}),null==m||m(r,n)})(e);break;case"fixed-range":re(e);break;default:"start"===N?ee(e):"end"===N&&te(e)}},ue=e=>{var t,r,n;switch(null===(t=q.current)||void 0===t||t.focus(),e){case"reset":U.cancel();break;case"confirmed":if(U.done({start:P,end:L}),null==m||m(P,L),M)break;ge(P,L)&&("range"===w?null===(r=Q.current)||void 0===r||r.focusYearRef():null===(n=Z.current)||void 0===n||n.focusYearRef())}},fe=e=>{I(e)},he=()=>{v&&v()},pe=e=>!D&&e&&$d.isDateDisabled(e,{disabledDates:a,minDate:n,maxDate:o}),ge=(e,t)=>!(!e||!t)&&nd(e).isBefore(t,"day"),me=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===N?T:void 0,end:"end"===N?T:void 0};break;case"week":if(!T)return;t={start:nd(T).startOf("week").format("YYYY-MM-DD"),end:nd(T).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!T)return;t={start:nd(T).format("YYYY-MM-DD"),end:nd(T).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return e(Uu,{enabled:!C&&!i,isOpen:H,onClose:()=>{var e,t;U.blur(),B(!1),z(!1),null===(e=Z.current)||void 0===e||e.resetPlaceholder(),null===(t=Q.current)||void 0===t||t.resetPlaceholder(),he()},onDismiss:()=>{var e,t,r;U.dismiss(),null===(e=q.current)||void 0===e||e.focus(),null===(t=Z.current)||void 0===t||t.resetPlaceholder(),null===(r=Q.current)||void 0===r||r.resetPlaceholder()},renderElement:()=>e(Uh,Object.assign({role:"group",ref:q,tabIndex:0,onFocus:ne,onBlur:oe,$focused:V,$disabled:i,$readOnly:C,$error:u,$wrap:X,id:S,"data-testid":F["data-testid"],"aria-disabled":i,onKeyDown:J},F,{children:t(Yh,{currentActive:N,wrap:X,error:u,children:[e(Kh,{$wrap:X,children:e(Bh,{ref:Z,placeholder:"From",names:["start-day","start-month","start-year"],inputLabels:["Start Date","Start Month","Start Year"],value:P,disabled:i,readOnly:j||C,focused:"start"===N,hoverValue:me("start"),onChange:A?re:ee,onFocus:ie("start"),onBlur:le,hideInputKeyboard:f})}),e(Kh,{$wrap:X,children:e(Bh,{ref:Q,placeholder:"To",names:["end-day","end-month","end-year"],inputLabels:["End Date","End Month","End Year"],value:L,disabled:i,readOnly:R||C,focused:"end"===N,hoverValue:me("end"),onChange:te,onFocus:ie("end"),onBlur:ce,hideInputKeyboard:f})})]})})),renderDropdown:({elementWidth:t})=>e(yh,{ref:G,variant:w,initialCalendarDate:O,withButton:x,value:P,endValue:L,selectWithinRange:W||Y,currentFocus:N,disabledDates:a,minDate:n,maxDate:o,allowDisabledSelection:D,onSelect:de,onDismiss:ue,onHover:fe,onYearMonthDisplayChange:y,numberOfDays:$,width:t,isFocusable:!C&&!i}),customZIndex:k,offset:16,rootNode:E})},Zh=F(yf)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Qh=(r,n)=>{const{children:i,disabled:a=!1,styleType:s="default",danger:l=!1,icon:c,iconPosition:d="left",loading:u=!1,focusableWhenDisabled:f=!1,onClick:h}=r,p=ct(r,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),g={$buttonIconPosition:d,$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(Zh,Object.assign({ref:n,"data-testid":p["data-testid"]||"button-with-icon",disabled:a&&!f,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:h},g,p,{children:[u?e(nf,{}):c?o.cloneElement(c,{"aria-hidden":!0}):null,e("span",{children:i})]}))};Qh.displayName="ButtonWithIcon.Default";const Xh=(r,n)=>{const{children:i,disabled:a=!1,styleType:s="default",danger:l=!1,icon:c,iconPosition:d="left",loading:u=!1,focusableWhenDisabled:f=!1,onClick:h}=r,p=ct(r,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),g={$buttonIconPosition:d,$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(Zh,Object.assign({ref:n,"data-testid":p["data-testid"]||"button-with-icon",disabled:a&&!f,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:h},g,p,{children:[u?e(nf,{}):c?o.cloneElement(c,{"aria-hidden":!0}):null,e("span",{children:i})]}))};Xh.displayName="ButtonWithIcon.Small";const Jh={Default:o.forwardRef(Qh),Small:o.forwardRef(Xh)},ep=({className:t,progress:r,color:n,"data-testid":o})=>e(tp,{className:t,$innerWidth:r,$color:n,"data-testid":o,children:e("progress",{value:100*r,max:100})}),tp=F.div`
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

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):Qi["icon-primary-subtle"](e),O`
            border: ${ea["width-010"]} ${ea.solid} ${r};
            border-radius: ${ra.sm};

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
`,rp=F.button`
    align-items: center;
    border-radius: ${ra.sm};
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
                    background-color: ${Qi.bg};
                    border: ${ea["width-010"]} ${ea.solid}
                        ${Qi["border-primary"]};
                    color: ${Qi["text-primary"]};

                    &:hover {
                        background-color: ${Qi["bg-hover-neutral"]};
                    }
                `;case"light":return O`
                    background-color: ${Qi.bg};
                    border: ${ea["width-010"]} ${ea.solid}
                        ${Qi.border};
                    color: ${Qi["text-primary"]};

                    &:hover {
                        background-color: ${Qi["bg-hover-neutral"]};
                    }
                `;case"disabled":return O`
                    background-color: ${Qi["bg-disabled"]};
                    border: ${ea["width-010"]} ${ea.solid}
                        ${Qi["border-disabled"]};
                    color: ${Qi["text-disabled"]};
                    cursor: not-allowed;
                `;default:return O`
                    background-color: ${Qi["bg-primary"]};
                    border: none;
                    color: ${Qi["text-inverse"]};

                    &:hover {
                        background-color: ${Qi["bg-primary-hover"]};
                    }
                `}}}
`,np=o.forwardRef(((t,r)=>{var{"data-testid":n,styleType:o="primary",children:i,sizeType:a="default",type:s="button",disabled:l=!1,focusableWhenDisabled:c=!1,onClick:d}=t,u=ct(t,["data-testid","styleType","children","sizeType","type","disabled","focusableWhenDisabled","onClick"]);return e(rp,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$styleType:l?"disabled":o,$sizeType:a,"aria-disabled":l,disabled:l&&!c,onClick:l?void 0:d},u,{children:i}))})),op=Object.assign(Yd,{Box:Zd}),ip=O`
    ${e=>`\n        ${ia.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${oa["sm-max"](e)}px)\n    `}
`,ap=O`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${oa["sm-max"](e)}px)\n    `}
`,sp=F.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>O`
            ${ea.Util["dashed-default"]({radius:ra.sm,thickness:ea["width-040"],colour:e.$disabled?Qi["border-disabled"]:Qi.border})}

            background-color: ${e.$disabled?Qi["bg-disabled"]:Qi.bg};
        `}
    height: 14.125rem;
`,lp=F(Sf.Default)`
    width: fit-content;
    margin: 0 ${ta["spacing-20"]};

    &:disabled {
        border-color: ${Qi["border-strong"]};
    }
`,cp=F(np)`
    position: absolute;
    top: ${ta["spacing-16"]};
    right: ${ta["spacing-16"]};

    &:disabled {
        border-color: ${Qi["border-strong"]};
    }
`,dp=F.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${ta["spacing-16"]}) * 2);
    height: 100%;
`,up=F.div`
    background: ${Qi["bg-primary-subtlest"]};
    border: ${ea["width-010"]} ${ea.solid} ${Qi.border};
    border-radius: ${ra.sm};
    margin: 0 ${ta["spacing-20"]};
    padding: ${ta["spacing-16"]};
    display: flex;
    gap: ${ta["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,fp=F(Ca.BodySM)`
    margin-top: ${ta["spacing-16"]};
`,hp=F(op)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,pp=F.div`
    width: 100%;
    margin: auto;
    padding: ${ta["layout-xxl"]} ${ta["layout-sm"]};

    ${ip} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,gp=F(op.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${ta["spacing-16"]};

    ${ip} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${ta["spacing-8"]};
        --close-button-right-inset: ${ta["spacing-20"]};
    }
`,mp=F.h2`
    ${Xi["body-baseline-semibold"]}
    color: ${Qi.text};
    margin-bottom: ${ta["spacing-16"]};
    text-align: center;

    ${ip} {
        ${Xi["body-md-semibold"]}
        margin: ${ta["spacing-12"]} 0;
    }
`,bp=F.div`
    width: 100%;
    height: 20rem;
    border-radius: ${ra.lg};
    overflow: hidden;

    ${ip} {
        border-radius: 0;
        flex: 1;
    }

    ${ap} {
        background: ${Qi["bg-strong"]};
    }
`,vp=F.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${Qi["bg-stronger"]};
    margin: auto;

    ${ip} {
        aspect-ratio: 4/3;
    }
    ${ia.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${ap} {
        width: auto;
        height: 100%;
    }
`,yp=F.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${Qi["border-strong"]};
    pointer-events: none;

    ${ip} {
        width: calc(100% - ${ta["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,xp=F.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${ta["spacing-16"]};

    ${ia.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${ta["spacing-16"]} ${ta["spacing-24"]}
            ${ta["spacing-48"]};
        gap: ${ta["spacing-16"]};
    }

    ${ap} {
        flex-direction: row;
        margin: ${ta["spacing-16"]} ${ta["spacing-20"]};
    }
`,wp=F(Sf.Default)`
    width: 8.5rem;
    ${ia.MaxWidth.sm} {
        width: 100%;
    }
    ${ap} {
        height: 2.5rem;
    }
`,$p=F.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Cp=F.canvas`
    cursor: crosshair;
`,Sp=S((()=>dt(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.2f0051e6.js")).ESignatureCanvas}})))),Dp=n=>{const{description:o,id:i,loadingProgress:a,loadingLabel:l="Uploading...",onChange:d,value:u,disabled:f}=n,h=ct(n,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[p,m]=g(!1),v=s(null),[y,x]=g(u),w=b(_),$=oa["sm-max"]({theme:w}),C=td.useMediaQuery({maxWidth:$}),S=td.useMediaQuery({maxHeight:$,orientation:"landscape"}),k=()=>{var e;null===(e=v.current)||void 0===e||e.clear()},E=()=>{if(v.current){const e=v.current.export();x(e),m(!1),null==d||d(e)}};c((()=>{x(u)}),[u]);return t("div",Object.assign({},h,{children:[e(sp,{$disabled:f,children:"number"==typeof a?t(up,{children:[l&&e(Ca.BodyMD,{children:l}),e(ep,{progress:null!=a?a:0,"data-testid":`${i||"e-signature"}-progress-bar`})]}):y?t(r,{children:[e(dp,{src:y,alt:"Signature preview"}),e(cp,{styleType:"light",onClick:()=>m(!0),id:i,"aria-label":"Edit signature",disabled:f,children:e(le,{})})]}):e(lp,{type:"button",styleType:"secondary","aria-label":"Add signature",id:i,onClick:()=>m(!0),disabled:f,children:"Add signature"})}),e(hp,{"data-testid":"signature-modal",show:p,children:e(pp,{children:t(gp,{onClose:()=>m(!1),children:[e(mp,{children:"Signature"}),e(bp,{children:t(vp,{children:[e(yp,{}),e(D,{fallback:null,children:p&&e(Sp,{ref:v,baseImageDataURL:y})})]})}),t(xp,{children:[e(wp,{as:S?Jh.Small:Jh.Default,type:"button",styleType:C&&!S?"light":"link",icon:e(ce,{}),onClick:k,children:"Clear"}),e(wp,{as:S?Sf.Small:Sf.Default,type:"button",onClick:E,children:"Save"})]})]})})}),o?e(fp,{children:o}):null]}))};function kp(e,t){return kp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},kp(e,t)}function Ep(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Fp(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Op(e){return null!==e&&1===e.length?e[0]:e.slice()}function _p(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function Tp(e,t){return Ip(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function Ip(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let Mp=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),_p(r.getMouseEventMap())}))}Ep(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=Tp(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),_p(r.getKeyDownEventMap()),Ep(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),_p(r.getMouseEventMap()),Ep(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),_p(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),o={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},i={index:t,value:Op(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(o["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(i)),r.props.renderThumb(o,i)},r.renderTrack=(e,t,n)=>{const o={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},i={index:e,value:Op(r.state.value)};return r.props.renderTrack(o,i)};let n=Fp(t.value);n.length||(n=Fp(t.defaultValue)),r.pendingResizeTimeouts=[];const i=[];for(let e=0;e<n.length;e+=1)n[e]=Tp(n[e],t),i.push(e);return r.resizeObserver=null,r.resizeElementRef=o.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:i},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,kp(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=Fp(e.value);return r.length?t.pending?null:{value:r.map((t=>Tp(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return Op(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,o=n.length;for(let i=0;i<o;i+=1){const o=this.calcOffset(n[i]),a=Math.abs(e-o);a<t&&(t=a,r=i)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Tp(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),o=e[r],i=n[this.posMaxKey()],a=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=o-s,c=Math.abs(i-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],o=r[this.posMinKey()];let i=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:o));return this.props.invert&&(i=this.state.sliderLength-i),i-=this.state.thumbSize/2,i},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),o=Tp(this.calcValue(r),this.props),i=this.state.value.slice();i[n]=o;for(let e=0;e<i.length-1;e+=1)if(i[e+1]-i[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:i},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Tp(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Tp(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,o=t[r];if(e===o)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:i,max:a,min:s,minDistance:l}=this.props;if(!i){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,i&&n>1&&(e>o?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const i=n-o*r;t[e-1-o]>i&&(t[e-1-o]=i)}}(n,t,l,a)):e<o&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const e=n+o*r;t[o]<e&&(t[o]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,o;for(n=r,o=e[n]+t;null!==e[n+1]&&o>e[n+1];n+=1,o=e[n]+t)e[n+1]=Ip(o,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,o=e[n]-t;null!==e[n-1]&&o<e[n-1];n-=1,o=e[n]-t)e[n-1]=Ip(o,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](Op(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return o.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,i,a)},t}(o.Component);Mp.displayName="ReactSlider",Mp.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>o.createElement("div",e),renderTrack:e=>o.createElement("div",e),renderMark:e=>o.createElement("span",e)};var Ap=Mp;const jp=F.div`
    isolation: isolate;
`,Bp=F.div`
    margin-top: ${ta["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${ta["spacing-8"]};
`,Rp=F.div`
    margin-bottom: ${ta["spacing-8"]};
`,zp=F(Ca.BodyBL)`
    overflow-wrap: anywhere;
`,Pp=F(Ap)`
    height: 0.875rem;
`,Lp=F.div`
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

        background-color: ${Qi.bg};
        box-shadow: ${na["sm-subtle"]};
        border: ${ea["width-010"]} ${ea.solid}
            ${e=>e.$disabled?Qi["border-selected-disabled"]:Qi["border-strong"]};
        border-radius: ${ra.full};
    }
`,Np=F.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    &:focus ${Lp}:after {
        outline-offset: -1px;
        outline: ${ea["width-040"]} ${ea.solid}
            ${Qi["border-selected"]};
    }
`,Hp=F.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${ra.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Qi["border-strong"](e)};
`,Wp=r=>{var{value:n,min:o=0,max:i=100,step:a=1,minRange:s,numOfThumbs:l=2,colors:d,disabled:u,readOnly:f,ariaLabels:h,showSliderLabels:p,sliderLabelPrefix:m,sliderLabelSuffix:b,showIndicatorLabel:v,indicatorLabelPrefix:y,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:$,onChangeEnd:C}=r,S=ct(r,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[D,k]=g(F()),E=function(){const e=function(){const e=u||f?Qi["border-disabled"]:Qi["border-strong"],t=u||f?Qi["border-selected-disabled"]:Qi["border-selected"];if(1===l)return[t,e];const r=[];r.push(e);for(let e=0;e<l-1;e++)r.push(t);return r.push(e),r}();return new Array(l+1).fill(0).map(((t,r)=>(null==d?void 0:d[r])||e[r]))}();c((()=>{n!==D&&k(F())}),[n]);function F(){if(n&&n.length===l)return n;const e=[];for(let t=0;t<l;t++)e.push(o+a*t);return e}const O=e=>w?w(e):t(zp,{children:[m,e,b]});return t(jp,Object.assign({},S,{children:[v&&e(Rp,{children:(()=>{let e="";if(1===D.length)e=`${D[0]}`;else if(2===D.length)e=`${D[0]} - ${D[1]}`;else if(D.length>2){e=`${Math.min(...D)} - ${Math.max(...D)}`}return t(zp,{children:[y,e,x]})})()}),e(Pp,{step:a,min:o,max:i,value:D,disabled:u||f,onChange:(e,t)=>{if("number"==typeof e){const t=[e];k(t),null==$||$(t)}else{if(t>-1&&D[t]===e[t])return;const r=[...e];k(r),null==$||$(r)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];k(t),null==C||C(t)}else{const t=[...e];k(t),null==C||C(t)}},minDistance:s,ariaLabel:h,renderThumb:(t,r)=>e(Np,Object.assign({"data-testid":`slider-thumb-${r.index}`},t,{tabIndex:u?void 0:t.tabIndex,children:e(Lp,{$disabled:u,$readOnly:f})})),renderTrack:(t,r)=>e(Hp,Object.assign({"data-testid":`slider-track-${r.index}`},t,{$color:E[r.index]}))}),p&&t(Bp,{children:[e("div",{children:O(o)}),e("div",{children:O(i)})]})]}))},Yp=F.div`
    display: flex;
    margin-bottom: ${ta["spacing-16"]};
    align-items: baseline;
`,Vp=F.div`
    margin: 0 0.5rem;
`,Up=F.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,Kp=F.div`
    flex: 1;
    border-radius: ${ra.sm} ${ra.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=Qi["bg-strongest"];return e.$disabled&&e.$selected?t=Qi["bg-selected-stronger-disabled"]:e.$disabled?t=Qi["bg-disabled"]:e.$selected&&(t=Qi["bg-selected-stronger"]),O`
            background-color: ${t};
        `}}
`,qp=F(Wp)`
    margin-top: -0.3125rem;
`,Gp=n=>{var{bins:o=[],interval:i,disabled:s,readOnly:l,value:d,showRangeLabels:u,rangeLabelPrefix:f,rangeLabelSuffix:h,ariaLabels:p,onChange:m,onChangeEnd:b,renderEmptyView:v,renderRangeLabel:y}=n,x=ct(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=o.map((e=>e.count)),$=Math.max(...w),C=o.map((e=>e.minValue)),S=Math.max(...C),D=Math.min(...C),[k,E]=g(T()),F=a((()=>{const e=[...o].sort(((e,t)=>e.minValue-t.minValue)),t=(S-D)/i+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===D+i*n));t?r.push(t):r.push({count:0,minValue:D+i*n})}return r}),[o,i]);c((()=>{d!==k&&E(T())}),[d]);const O=e=>{const[t,r]=e,n=[t,r];E(n),null==m||m(n)},_=e=>{const[t,r]=e,n=[t,r];E(n),null==b||b(n)};function T(){return null!=d?d:[D,D+i]}const I=e=>y?y(e):t(Ca.BodyBL,{children:[f,e,h]});return t("div",Object.assign({},x,{children:[u&&t(Yp,{children:[I(k[0]),e(Vp,{children:"-"}),I(k[1])]}),F.every((e=>0===e.count))&&v?v():t(r,{children:[e(Up,{children:F.map(((t,r)=>{const n=t.count/$;return e(Kp,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:t.minValue>=k[0]&&t.minValue<k[1],$disabled:s||l},r)}))}),e(qp,{min:D,max:S+i,step:i,minRange:i,numOfThumbs:2,value:k,disabled:s,readOnly:l,ariaLabels:p,onChange:O,onChangeEnd:_})]})]}))},Zp=F(kh)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&O`
            padding-left: ${e.$visuallyReadOnly?0:ta["spacing-16"]};
            padding-right: ${e.$visuallyReadOnly||e.$showClear?0:ta["spacing-16"]};
        `}
`,Qp=F(Eh)`
    height: auto;
    padding: ${ta["spacing-12"]} ${ta["spacing-16"]};

    cursor: pointer;
    color: ${Qi.icon};

    ${e=>"no-border"===e.$styleType&&O`
            margin-right: -${ta["spacing-12"]};
        `}
`,Xp=F(re)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Jp=F.div`
    display: flex;
    width: 100%;
`,eg=F(Sh)`
    display: flex;
    align-items: center;
    width: 100%;
`,tg=o.forwardRef(((n,o)=>{var{value:i,spacing:a,type:l,error:c,disabled:d,readOnly:u,onChange:h,onClear:p,allowClear:g=!1,className:m,styleType:b="bordered"}=n,v=ct(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=((e,t)=>"tel"===e&&!!t)(l,a),x=s(null);f(o,(()=>x.current),[]);const w=_d({ref:x,formatter:e=>y?kd.transformWithSpaces(e,a):e}),$=e=>{h&&(y?S(e):h(e))},C=()=>{p&&p(),x&&x.current&&x.current.focus()},S=e=>{const t=w();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,o=r.replace(/\s/g,"");e.target.value=o,null==h||h(e),n()},D=i?(e=>e?y?kd.transformWithSpaces(e,a):e:"")(i):i,k=g&&!d&&!u&&!!i,E=()=>t(r,{children:[e(Zp,Object.assign({"data-testid":"input",ref:x,"aria-disabled":d,value:D,onChange:$,type:l,readOnly:u||d,$showClear:k,$styleType:b,$visuallyReadOnly:u},v)),k&&e(Qp,{onClick:C,type:"button",$styleType:b,children:e(Xp,{"aria-hidden":!0})})]});return e(r,{children:"no-border"===b?e(Jp,{className:m,children:E()}):e(eg,{$disabled:d,$error:c,$readOnly:u,className:m,children:E()})})})),rg=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i,"data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y}=t,x=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]),[w]=g((()=>`form-field-${Dd.generate()}`)),$=null!=i?i:w;return e(_u,{id:$,"data-testid":s,label:n,errorMessage:o,disabled:x.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(tg,Object.assign({id:`${$}-base`,"data-testid":s?`${s}-base`:void 0,ref:r,error:!!o},x))})})),ng=F.div`
    font-weight: ${e=>e.$bold?Xi.Spec["weight-semibold"]:Xi.Spec["weight-regular"]};

    ${e=>e.$disabled?O`
                color: ${Qi["text-disabled"]};
            `:e.$selected?O`
                color: ${Qi["text-selected"]};
            `:O`
                color: ${Qi.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&ma(e.$maxLines||2)}
    overflow-wrap: break-word;
`,og=F.div`
    color: ${Qi["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&ma(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?O`
                    ${Xi["body-md-semibold"]}
                `:O`
                    ${Xi["body-baseline-regular"]}
                `}
`,ig=F.span`
    font-weight: ${Xi.Spec["weight-semibold"]};
`,ag=F.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Xi["body-md-regular"]:Xi["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return O`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return O`
                    ${ng} {
                        display: inline;
                    }

                    ${og} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,sg=F.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,lg=F.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,cg=({bold:n,displayType:o="inline",label:i,searchTerm:s,maxLines:l=2,selected:c,disabled:u,sublabel:f,truncationType:h="middle",variant:p="default"})=>{const g=b(_),m="small"===p?Xi.Spec["body-size-md"]({theme:g}):Xi.Spec["body-size-baseline"]({theme:g}),v=Xi.Spec["font-family"]({theme:g}),{ref:y,width:x}=Zc(),w=d((e=>{if("inline"!==o||!x)return!1;return kd.getTextWidth(e,`${m} '${v}'`)>x*l-50}),[x,o,m,v,l]),$=a((()=>w(i)),[w,i]),C=a((()=>f&&w(f)),[w,f]),S=n=>{if(!s)return n;const o=s.toLowerCase().trim(),a=n.toLowerCase().indexOf(o),l=a+s.length;return-1===a?n:t(r,{children:[i.slice(0,a),e(ig,{$variant:p,children:i.slice(a,l)}),i.slice(l)]})},D=n=>t(r,{children:[e(sg,{$maxLines:l,"aria-hidden":!0,children:S(n)}),e(lg,{$maxLines:l,"aria-hidden":!0,children:S(n)})]});return t(ag,{ref:y,$labelDisplayType:$||C?"next-line":o,$variant:p,children:[e(ng,{"aria-label":i,$bold:n,$maxLines:l,$selected:c,$disabled:u,$truncateType:h,children:"middle"===h&&$?D(i):S(i)}),f&&e(og,{"aria-label":f,$maxLines:l,$truncateType:h,$labelDisplayType:o,children:"middle"===h&&C?D(f):f})]})};var dg=qn;var ug=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var fg=function(e){return this.__data__.get(e)};var hg=function(e){return this.__data__.has(e)},pg=qn,gg=Gn,mg=mo;var bg=function(e,t){var r=this.__data__;if(r instanceof pg){var n=r.__data__;if(!gg||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new mg(n)}return r.set(e,t),this.size=r.size,this},vg=qn,yg=function(){this.__data__=new dg,this.size=0},xg=ug,wg=fg,$g=hg,Cg=bg;function Sg(e){var t=this.__data__=new vg(e);this.size=t.size}Sg.prototype.clear=yg,Sg.prototype.delete=xg,Sg.prototype.get=wg,Sg.prototype.has=$g,Sg.prototype.set=Cg;var Dg=Sg;var kg=mo,Eg=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Fg=function(e){return this.__data__.has(e)};function Og(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new kg;++t<r;)this.add(e[t])}Og.prototype.add=Og.prototype.push=Eg,Og.prototype.has=Fg;var _g=function(e,t){return e.has(t)},Tg=Og,Ig=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Mg=_g;var Ag=function(e,t,r,n,o,i){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=i.get(e),d=i.get(t);if(c&&d)return c==t&&d==e;var u=-1,f=!0,h=2&r?new Tg:void 0;for(i.set(e,t),i.set(t,e);++u<s;){var p=e[u],g=t[u];if(n)var m=a?n(g,p,u,t,e,i):n(p,g,u,e,t,i);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!Ig(t,(function(e,t){if(!Mg(h,t)&&(p===e||o(p,e,r,n,i)))return h.push(t)}))){f=!1;break}}else if(p!==g&&!o(p,g,r,n,i)){f=!1;break}}return i.delete(e),i.delete(t),f};var jg=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var Bg=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Rg=br.Uint8Array,zg=_n,Pg=Ag,Lg=jg,Ng=Bg,Hg=vr?vr.prototype:void 0,Wg=Hg?Hg.valueOf:void 0;var Yg=function(e,t,r,n,o,i,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new Rg(e),new Rg(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return zg(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Lg;case"[object Set]":var l=1&n;if(s||(s=Ng),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=Pg(s(e),s(t),n,o,i,a);return a.delete(e),d;case"[object Symbol]":if(Wg)return Wg.call(e)==Wg.call(t)}return!1};var Vg=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},Ug=Vg,Kg=hr;var qg=function(e,t,r){var n=t(e);return Kg(e)?n:Ug(n,r(e))};var Gg=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i},Zg=function(){return[]},Qg=Object.prototype.propertyIsEnumerable,Xg=Object.getOwnPropertySymbols,Jg=Xg?function(e){return null==e?[]:(e=Object(e),Gg(Xg(e),(function(t){return Qg.call(e,t)})))}:Zg;var em=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},tm=Or,rm=_r;var nm=function(e){return rm(e)&&"[object Arguments]"==tm(e)},om=_r,im=Object.prototype,am=im.hasOwnProperty,sm=im.propertyIsEnumerable,lm=nm(function(){return arguments}())?nm:function(e){return om(e)&&am.call(e,"callee")&&!sm.call(e,"callee")},cm={exports:{}};var dm=function(){return!1};!function(e,t){var r=br,n=dm,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(cm,cm.exports);var um=cm.exports,fm=/^(?:0|[1-9]\d*)$/;var hm=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&fm.test(e))&&e>-1&&e%1==0&&e<t};var pm=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},gm=Or,mm=pm,bm=_r,vm={};vm["[object Float32Array]"]=vm["[object Float64Array]"]=vm["[object Int8Array]"]=vm["[object Int16Array]"]=vm["[object Int32Array]"]=vm["[object Uint8Array]"]=vm["[object Uint8ClampedArray]"]=vm["[object Uint16Array]"]=vm["[object Uint32Array]"]=!0,vm["[object Arguments]"]=vm["[object Array]"]=vm["[object ArrayBuffer]"]=vm["[object Boolean]"]=vm["[object DataView]"]=vm["[object Date]"]=vm["[object Error]"]=vm["[object Function]"]=vm["[object Map]"]=vm["[object Number]"]=vm["[object Object]"]=vm["[object RegExp]"]=vm["[object Set]"]=vm["[object String]"]=vm["[object WeakMap]"]=!1;var ym=function(e){return bm(e)&&mm(e.length)&&!!vm[gm(e)]};var xm=function(e){return function(t){return e(t)}},wm={exports:{}};!function(e,t){var r=pr,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(wm,wm.exports);var $m=wm.exports,Cm=ym,Sm=xm,Dm=$m&&$m.isTypedArray,km=Dm?Sm(Dm):Cm,Em=em,Fm=lm,Om=hr,_m=um,Tm=hm,Im=km,Mm=Object.prototype.hasOwnProperty;var Am=function(e,t){var r=Om(e),n=!r&&Fm(e),o=!r&&!n&&_m(e),i=!r&&!n&&!o&&Im(e),a=r||n||o||i,s=a?Em(e.length,String):[],l=s.length;for(var c in e)!t&&!Mm.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Tm(c,l))||s.push(c);return s},jm=Object.prototype;var Bm=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||jm)};var Rm=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),zm=Bm,Pm=Rm,Lm=Object.prototype.hasOwnProperty;var Nm=function(e){if(!zm(e))return Pm(e);var t=[];for(var r in Object(e))Lm.call(e,r)&&"constructor"!=r&&t.push(r);return t},Hm=Wr,Wm=pm;var Ym=function(e){return null!=e&&Wm(e.length)&&!Hm(e)},Vm=Am,Um=Nm,Km=Ym;var qm=function(e){return Km(e)?Vm(e):Um(e)},Gm=qg,Zm=Jg,Qm=qm;var Xm=function(e){return Gm(e,Qm,Zm)},Jm=Object.prototype.hasOwnProperty;var eb=function(e,t,r,n,o,i){var a=1&r,s=Xm(e),l=s.length;if(l!=Xm(t).length&&!a)return!1;for(var c=l;c--;){var d=s[c];if(!(a?d in t:Jm.call(t,d)))return!1}var u=i.get(e),f=i.get(t);if(u&&f)return u==t&&f==e;var h=!0;i.set(e,t),i.set(t,e);for(var p=a;++c<l;){var g=e[d=s[c]],m=t[d];if(n)var b=a?n(m,g,d,t,e,i):n(g,m,d,e,t,i);if(!(void 0===b?g===m||o(g,m,r,n,i):b)){h=!1;break}p||(p="constructor"==d)}if(h&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(h=!1)}return i.delete(e),i.delete(t),h},tb=cn(br,"DataView"),rb=Gn,nb=cn(br,"Promise"),ob=cn(br,"Set"),ib=cn(br,"WeakMap"),ab=Or,sb=qr,lb="[object Map]",cb="[object Promise]",db="[object Set]",ub="[object WeakMap]",fb="[object DataView]",hb=sb(tb),pb=sb(rb),gb=sb(nb),mb=sb(ob),bb=sb(ib),vb=ab;(tb&&vb(new tb(new ArrayBuffer(1)))!=fb||rb&&vb(new rb)!=lb||nb&&vb(nb.resolve())!=cb||ob&&vb(new ob)!=db||ib&&vb(new ib)!=ub)&&(vb=function(e){var t=ab(e),r="[object Object]"==t?e.constructor:void 0,n=r?sb(r):"";if(n)switch(n){case hb:return fb;case pb:return lb;case gb:return cb;case mb:return db;case bb:return ub}return t});var yb=vb,xb=Dg,wb=Ag,$b=Yg,Cb=eb,Sb=yb,Db=hr,kb=um,Eb=km,Fb="[object Arguments]",Ob="[object Array]",_b="[object Object]",Tb=Object.prototype.hasOwnProperty;var Ib=function(e,t,r,n,o,i){var a=Db(e),s=Db(t),l=a?Ob:Sb(e),c=s?Ob:Sb(t),d=(l=l==Fb?_b:l)==_b,u=(c=c==Fb?_b:c)==_b,f=l==c;if(f&&kb(e)){if(!kb(t))return!1;a=!0,d=!1}if(f&&!d)return i||(i=new xb),a||Eb(e)?wb(e,t,r,n,o,i):$b(e,t,l,r,n,o,i);if(!(1&r)){var h=d&&Tb.call(e,"__wrapped__"),p=u&&Tb.call(t,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?t.value():t;return i||(i=new xb),o(g,m,r,n,i)}}return!!f&&(i||(i=new xb),Cb(e,t,r,n,o,i))},Mb=_r;var Ab=function e(t,r,n,o,i){return t===r||(null==t||null==r||!Mb(t)&&!Mb(r)?t!=t&&r!=r:Ib(t,r,n,o,e,i))},jb=Dg,Bb=Ab;var Rb=function(e,t,r,n){var o=r.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var s=r[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=r[o])[0],c=e[l],d=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new jb;if(n)var f=n(c,d,l,e,t,u);if(!(void 0===f?Bb(d,c,3,n,u):f))return!1}}return!0},zb=Pr;var Pb=function(e){return e==e&&!zb(e)},Lb=Pb,Nb=qm;var Hb=function(e){for(var t=Nb(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Lb(o)]}return t};var Wb=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Yb=Rb,Vb=Hb,Ub=Wb;var Kb=function(e,t){return null!=e&&t in Object(e)},qb=jo,Gb=lm,Zb=hr,Qb=hm,Xb=pm,Jb=Ro;var ev=function(e,t,r){for(var n=-1,o=(t=qb(t,e)).length,i=!1;++n<o;){var a=Jb(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Xb(o)&&Qb(a,o)&&(Zb(e)||Gb(e))},tv=Kb,rv=ev;var nv=Ab,ov=Ho,iv=function(e,t){return null!=e&&rv(e,t,tv)},av=zr,sv=Pb,lv=Wb,cv=Ro;var dv=function(e){return function(t){return null==t?void 0:t[e]}},uv=Lo;var fv=dv,hv=function(e){return function(t){return uv(t,e)}},pv=zr,gv=Ro;var mv=function(e){var t=Vb(e);return 1==t.length&&t[0][2]?Ub(t[0][0],t[0][1]):function(r){return r===e||Yb(r,e,t)}},bv=function(e,t){return av(e)&&sv(t)?lv(cv(e),t):function(r){var n=ov(r,e);return void 0===n&&n===t?iv(r,e):nv(t,n,3)}},vv=function(e){return e},yv=hr,xv=function(e){return pv(e)?fv(gv(e)):hv(e)};var wv=function(e){return"function"==typeof e?e:null==e?vv:"object"==typeof e?yv(e)?bv(e[0],e[1]):mv(e):xv(e)},$v=wv,Cv=Ym,Sv=qm;var Dv=function(e){return function(t,r,n){var o=Object(t);if(!Cv(t)){var i=$v(r);t=Sv(t),r=function(e){return i(o[e],e,o)}}var a=e(t,r,n);return a>-1?o[i?t[a]:a]:void 0}};var kv=/\s/;var Ev=function(e){for(var t=e.length;t--&&kv.test(e.charAt(t)););return t},Fv=/^\s+/;var Ov=function(e){return e?e.slice(0,Ev(e)+1).replace(Fv,""):e},_v=Pr,Tv=Mr,Iv=/^[-+]0x[0-9a-f]+$/i,Mv=/^0b[01]+$/i,Av=/^0o[0-7]+$/i,jv=parseInt;var Bv=function(e){if("number"==typeof e)return e;if(Tv(e))return NaN;if(_v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=_v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ov(e);var r=Mv.test(e);return r||Av.test(e)?jv(e.slice(2),r?2:8):Iv.test(e)?NaN:+e},Rv=Bv,zv=1/0;var Pv=function(e){return e?(e=Rv(e))===zv||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Lv=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},Nv=wv,Hv=function(e){var t=Pv(e),r=t%1;return t==t?r?t-r:t:0},Wv=Math.max;var Yv=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:Hv(r);return o<0&&(o=Wv(n+o,0)),Lv(e,Nv(t),o)},Vv=Re(Yv),Uv=Re(Dv(Yv)),Kv=Ab;var qv=Re((function(e,t){return Kv(e,t)}));function Gv(e){return()=>e}function Zv(e){e()}function Qv(e,t){return r=>e(t(r))}function Xv(e,t){return()=>e(t)}function Jv(e,t){return r=>e(t,r)}function ey(e){return void 0!==e}function ty(){}function ry(e,t){return t(e),e}function ny(e,t){return t(e)}function oy(...e){return e}function iy(e,t){return e(1,t)}function ay(e,t){e(0,t)}function sy(e){e(2)}function ly(e){return e(4)}function cy(e,t){return iy(e,Jv(t,0))}function dy(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function uy(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function fy(e,t){return e===t}function hy(e=fy){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function py(e){return t=>r=>{e(r)&&t(r)}}function gy(e){return t=>Qv(t,e)}function my(e){return t=>()=>{t(e)}}function by(e,...t){const r=function(...e){return t=>e.reduceRight(ny,t)}(...t);return(t,n)=>{switch(t){case 2:return void sy(e);case 1:return iy(e,r(n))}}}function vy(e,t){return r=>n=>{r(t=e(t,n))}}function yy(e){return t=>r=>{e>0?e--:t(r)}}function xy(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function wy(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);iy(e,(e=>{const s=r;r|=a,t[i]=e,s!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const a=()=>{e([i].concat(t))};r===o?a():n=a}}function $y(e){let t=e;const r=Sy();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function Cy(e,t){return ry($y(t),(t=>cy(e,t)))}function Sy(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function Dy(e){return ry(Sy(),(t=>cy(e,t)))}function ky(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:Ey(),singleton:r}}const Ey=()=>Symbol();function Fy(...e){const t=Sy(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);iy(e,(e=>{r[i]=e,n|=a,n===o&&ay(t,r)}))})),function(e,i){switch(e){case 2:return void sy(t);case 1:return n===o&&i(r),iy(t,i)}}}function Oy(e,t=fy){return by(e,hy(t))}function _y(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(Zv)}}(...e.map((e=>iy(e,r))))}}}var Ty=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Ty||{});const Iy={0:"debug",3:"error",1:"log",2:"warn"},My=ky((()=>{const e=$y(3);return{log:$y(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:ly(e))&&console[Iy[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function Ay(e,t,r){return jy(e,t,r).callbackRef}function jy(e,t,r){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function By(e,t,r,n,i,a,s,l,c){const d=o.useCallback((r=>{const o=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),c=t(o,r);if(0===c&&n("Zero-sized element, this should not happen",{child:o},Ty.ERROR),c===l)continue;const d=i[i.length-1];0===i.length||d.size!==c||d.endIndex!==s-1?i.push({endIndex:s,size:c,startIndex:s}):i[i.length-1].endIndex++}return i}(r.children,t,l?"offsetWidth":"offsetHeight",i);let c=r.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const d="window"===c.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:d?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?c.scrollLeft:c.scrollTop,f=s?l?s.scrollWidth:s.scrollHeight:d?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?c.scrollWidth:c.scrollHeight,h=s?l?s.offsetWidth:s.offsetHeight:d?l?window.innerWidth:window.innerHeight:l?c.offsetWidth:c.offsetHeight;n({scrollHeight:f,scrollTop:Math.max(u,0),viewportHeight:h}),null==a||a(l?Ry("column-gap",getComputedStyle(r).columnGap,i):Ry("row-gap",getComputedStyle(r).rowGap,i)),null!==o&&e(o)}),[e,t,i,a,s,n]);return jy(d,r,c)}function Ry(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Ty.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function zy(e,t,r){const n=o.useRef(null),i=o.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let a,s;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;s=e.height-Math.max(0,r),a=r+t.scrollTop}else s=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:a,ref:s}=jy(i,!0,r),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),a}const Py=ky((()=>{const e=Sy(),t=Sy(),r=$y(0),n=Sy(),o=$y(0),i=Sy(),a=Sy(),s=$y(0),l=$y(0),c=$y(0),d=$y(0),u=Sy(),f=Sy(),h=$y(!1),p=$y(!1),g=$y(!1);return cy(by(e,gy((({scrollTop:e})=>e))),t),cy(by(e,gy((({scrollHeight:e})=>e))),a),cy(t,o),{deviation:r,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:d,headerHeight:s,horizontalDirection:p,scrollBy:f,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:g,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),Ly={lvl:0};function Ny(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let a=1;a<r;a++){const{index:r,value:s}=t(e[a]);i.push({end:r-1,start:n,value:o}),n=r,o=s}return i.push({end:1/0,start:n,value:o}),i}function Hy(e){return e===Ly}function Wy(e,t){if(!Hy(e))return t===e.k?e.v:t<e.k?Wy(e.l,t):Wy(e.r,t)}function Yy(e,t,r="k"){if(Hy(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=Yy(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return Yy(e.l,t,r)}function Vy(e,t,r){return Hy(e)?rx(t,r,1):t===e.k?Xy(e,{k:t,v:r}):t<e.k?nx(Xy(e,{l:Vy(e.l,t,r)})):nx(Xy(e,{r:Vy(e.r,t,r)}))}function Uy(){return Ly}function Ky(e,t,r){if(Hy(e))return[];return function(e){return Ny(e,(({k:e,v:t})=>({index:e,value:t})))}(Zy(e,Yy(e,t)[0],r))}function qy(e,t){if(Hy(e))return Ly;const{k:r,l:n,r:o}=e;if(t===r){if(Hy(n))return o;if(Hy(o))return n;{const[t,r]=tx(n);return Qy(Xy(e,{k:t,l:Jy(n),v:r}))}}return Qy(Xy(e,t<r?{l:qy(n,t)}:{r:qy(o,t)}))}function Gy(e){return Hy(e)?[]:[...Gy(e.l),{k:e.k,v:e.v},...Gy(e.r)]}function Zy(e,t,r){if(Hy(e))return[];const{k:n,l:o,r:i,v:a}=e;let s=[];return n>t&&(s=s.concat(Zy(o,t,r))),n>=t&&n<=r&&s.push({k:n,v:a}),n<=r&&(s=s.concat(Zy(i,t,r))),s}function Qy(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(ex(t))return ox(Xy(e,{lvl:r-1}));if(!Hy(t)&&!Hy(t.r))return Xy(t.r,{l:Xy(t,{r:t.r.l}),lvl:r,r:Xy(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(ex(e))return ix(Xy(e,{lvl:r-1}));if(Hy(n)||Hy(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=ex(t)?n.lvl-1:n.lvl;return Xy(t,{l:Xy(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:ix(Xy(n,{l:t.r,lvl:o}))})}}function Xy(e,t){return rx(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function Jy(e){return Hy(e.r)?e.l:Qy(Xy(e,{r:Jy(e.r)}))}function ex(e){return Hy(e)||e.lvl>e.r.lvl}function tx(e){return Hy(e.r)?[e.k,e.v]:tx(e.r)}function rx(e,t,r,n=Ly,o=Ly){return{k:e,l:n,lvl:r,r:o,v:t}}function nx(e){return ix(ox(e))}function ox(e){const{l:t}=e;return Hy(t)||t.lvl!==e.lvl?e:Xy(t,{r:Xy(e,{l:t.r})})}function ix(e){const{lvl:t,r:r}=e;return Hy(r)||Hy(r.r)||r.lvl!==t||r.r.lvl!==t?e:Xy(r,{l:Xy(e,{r:r.l}),lvl:t+1})}function ax(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function sx(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const lx=ky((()=>({recalcInProgress:$y(!1)})),[],{singleton:!0});function cx(e,t,r){return e[dx(e,t,r)]}function dx(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),a=r(e[i],t);if(0===a)return i;if(-1===a){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function ux(e,t){return Math.round(e.getBoundingClientRect()[t])}function fx(e){return!Hy(e.groupOffsetTree)}function hx({index:e},t){return t===e?0:t<e?-1:1}function px({offset:e},t){return t===e?0:t<e?-1:1}function gx(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=cx(t,e,hx),a=e-n,s=i*a+(a-1)*r+o;return s>0?s+r:s}function mx(e,t){if(!fx(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function bx(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=mx("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function vx(e,t,r,n=0){return n>0&&(t=Math.max(t,cx(e,n,hx).offset)),Ny(function(e,t,r,n){const o=dx(e,t,n),i=dx(e,r,n,o);return e.slice(o,i+1)}(e,t,r,px),$x)}function yx(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,Ty.DEBUG);const i=e.sizeTree;let a=i,s=0;if(r.length>0&&Hy(i)&&2===t.length){const e=t[0].size,n=t[1].size;a=r.reduce(((t,r)=>Vy(Vy(t,r,e),r+1,n)),a)}else[a,s]=function(e,t){let r=Hy(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),Hy(e)){e=Vy(e,0,o);continue}const a=Ky(e,i-1,t+1);if(a.some(Cx(n)))continue;let s=!1,l=!1;for(const{end:r,start:n,value:i}of a)s?(t>=n||o===i)&&(e=qy(e,n)):(l=i!==o,s=!0),r>t&&t>=n&&i!==o&&(e=Vy(e,t+1,i));l&&(e=Vy(e,i,o))}return[e,r]}(a,t);if(a===i)return e;const{lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u}=wx(e.offsetTree,s,a,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>Vy(e,t,gx(t,u,o))),Uy()),lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u,sizeTree:a}}function xx(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function wx(e,t,r,n){let o=e,i=0,a=0,s=0,l=0;if(0!==t){l=dx(o,t-1,hx),s=o[l].offset;const e=Yy(r,t-1);i=e[0],a=e[1],o.length&&o[l].size===Yy(r,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of Ky(r,t,1/0)){const t=e-i,r=t*a+s+t*n;o.push({index:e,offset:r,size:l}),i=e,s=r,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function $x(e){return{index:e.index,value:e}}function Cx(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const Sx={offsetHeight:"height",offsetWidth:"width"},Dx=ky((([{log:e},{recalcInProgress:t}])=>{const r=Sy(),n=Sy(),o=Cy(n,0),i=Sy(),a=Sy(),s=$y(0),l=$y([]),c=$y(void 0),d=$y(void 0),u=$y(((e,t)=>ux(e,Sx[t]))),f=$y(void 0),h=$y(0),p={groupIndices:[],groupOffsetTree:Uy(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:Uy()},g=Cy(by(r,wy(l,e,h),vy(yx,p),hy()),p),m=Cy(by(l,hy(),vy(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),gy((({prev:e})=>e))),[]);cy(by(l,py((e=>e.length>0)),wy(g,h),gy((([e,t,r])=>{const n=e.reduce(((e,n,o)=>Vy(e,n,gx(n,t.offsetTree,r)||o)),Uy());return{...t,groupIndices:e,groupOffsetTree:n}}))),g),cy(by(n,wy(g),py((([e,{lastIndex:t}])=>e<t)),gy((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),cy(c,d);const b=Cy(by(c,gy((e=>void 0===e))),!0);cy(by(d,py((e=>void 0!==e&&Hy(ly(g).sizeTree))),gy((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=Dy(by(r,wy(g),vy((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:p}),gy((e=>e.changed))));iy(by(s,vy(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),gy((e=>e.diff))),(e=>{const{groupIndices:r}=ly(g);if(e>0)ay(t,!0),ay(i,e+xx(e,r));else if(e<0){const t=ly(m);t.length>0&&(e-=xx(-e,t)),ay(a,e)}})),iy(by(s,wy(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},Ty.ERROR)}));const y=Dy(i);cy(by(i,wy(g),gy((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=Wy(t.sizeTree,0);let i=0,a=0;for(;i<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=Gy(t.sizeTree);return i!==e&&s.shift(),s.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return Gy(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=Dy(by(a,wy(g,h),gy((([e,{offsetTree:t},r])=>gx(-e,t,r)))));return cy(by(a,wy(g,h),gy((([e,t,r])=>{if(t.groupIndices.length>0){if(Hy(t.sizeTree))return t;let n=Uy();const o=ly(m);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(n=Gy(t.sizeTree).reduce(((t,{k:r,v:n})=>Vy(t,Math.max(0,r+e),n)),n),i!==-e){n=Vy(n,0,Wy(t.sizeTree,s));n=Vy(n,1,Yy(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...wx(t.offsetTree,0,n,r)}}{const n=Gy(t.sizeTree).reduce(((t,{k:r,v:n})=>Vy(t,Math.max(0,r+e),n)),Uy());return{...t,sizeTree:n,...wx(t.offsetTree,0,n,r)}}}))),g),{beforeUnshiftWith:y,data:f,defaultItemSize:d,firstItemIndex:s,fixedItemSize:c,gap:h,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:r,sizes:g,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),oy(My,lx),{singleton:!0});function kx(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Ex=ky((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=Sy(),a=Sy(),s=Dy(by(i,gy(kx)));return cy(by(s,gy((e=>e.totalCount))),r),cy(by(s,gy((e=>e.groupIndices))),e),cy(by(Fy(o,t,n),py((([e,t])=>fx(t))),gy((([e,t,r])=>Yy(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),hy(),gy((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),oy(Dx,Py)),Fx=ky((([{log:e}])=>{const t=$y(!1),r=Dy(by(t,py((e=>e)),hy()));return iy(t,(t=>{t&&ly(e)("props updated",{},Ty.DEBUG)})),{didMount:r,propsReady:t}}),oy(My),{singleton:!0}),Ox=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function _x(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!Ox)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const Tx=ky((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:d,viewportHeight:u},{log:f}])=>{const h=Sy(),p=Sy(),g=$y(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),ay(l,!1)}return cy(by(h,wy(r,u,n,g,s,a,f),wy(e,i,o),gy((([[e,r,n,o,i,a,s,c],u,f,g])=>{const x=_x(e),{align:w,behavior:$,offset:C}=x,S=o-1,D=bx(x,r,S);let k=gx(D,r.offsetTree,u)+a;"end"===w?(k+=f+Yy(r.sizeTree,D)[1]-n+g,D===S&&(k+=s)):"center"===w?k+=(f+Yy(r.sizeTree,D)[1]-n+g)/2:k-=i,C&&(k+=C);const E=t=>{y(),t?(c("retrying to scroll to",{location:e},Ty.DEBUG),ay(h,e)):(ay(p,!0),c("list did not change, scroll successful",{},Ty.DEBUG))};if(y(),"smooth"===$){let e=!1;v=iy(t,(t=>{e=e||t})),m=dy(d,(()=>{E(e)}))}else m=dy(by(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),E);return b=setTimeout((()=>{y()}),1200),ay(l,!0),c("scrolling from index to",{behavior:$,index:D,top:k},Ty.DEBUG),{behavior:$,top:k}}))),c),{scrollTargetReached:p,scrollToIndex:h,topListHeight:g}}),oy(Dx,Py,My),{singleton:!0});function Ix(e,t){0==e?t():requestAnimationFrame((()=>{Ix(e-1,t)}))}function Mx(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const Ax=ky((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=$y(!0),l=$y(0),c=$y(!0);return cy(by(a,wy(l),py((([e,t])=>!!t)),my(!1)),s),cy(by(a,wy(l),py((([e,t])=>!!t)),my(!1)),c),iy(by(Fy(t,a),wy(s,r,e,c),py((([[,e],t,{sizeTree:r},n,o])=>e&&(!Hy(r)||ey(n))&&!t&&!o)),wy(l)),(([,e])=>{dy(o,(()=>{ay(c,!0)})),Ix(4,(()=>{dy(n,(()=>{ay(s,!0)})),ay(i,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),oy(Dx,Py,Tx,Fx),{singleton:!0});function jx(e,t){return Math.abs(e-t)<1.01}const Bx="up",Rx="down",zx={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},Px=ky((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const a=$y(!1),s=$y(!0),l=Sy(),c=Sy(),d=$y(4),u=$y(0),f=Cy(by(_y(by(Oy(o),yy(1),my(!0)),by(Oy(o),yy(1),my(!1),uy(100))),hy()),!1),h=Cy(by(_y(by(r,my(!0)),by(r,my(!1),uy(200))),hy()),!1);cy(by(Fy(Oy(o),Oy(u)),gy((([e,t])=>e<=t)),hy()),s),cy(by(s,xy(50)),c);const p=Dy(by(Fy(n,Oy(i),Oy(t),Oy(e),Oy(d)),vy(((e,[{scrollHeight:t,scrollTop:r},n,o,i,a])=>{const s={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-a){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),zx),hy(((e,t)=>e&&e.atBottom===t.atBottom)))),g=Cy(by(n,vy(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(jx(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),py((e=>e.changed)),gy((e=>e.jump))),0);cy(by(p,gy((e=>e.atBottom))),a),cy(by(a,xy(50)),l);const m=$y(Rx);cy(by(n,gy((({scrollTop:e})=>e)),hy(),vy(((e,t)=>ly(h)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?Bx:Rx,prevScrollTop:t}),{direction:Rx,prevScrollTop:0}),gy((e=>e.direction))),m),cy(by(n,xy(50),my("none")),m);const b=$y(0);return cy(by(f,py((e=>!e)),my(0)),b),cy(by(o,xy(100),wy(f),py((([e,t])=>!!t)),vy((([e,t],[r])=>[t,r]),[0,0]),gy((([e,t])=>t-e))),b),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:d,atTopStateChange:c,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:f,lastJumpDueToItemResize:g,scrollDirection:m,scrollVelocity:b}}),oy(Py)),Lx="top",Nx="bottom",Hx="none";function Wx(e,t,r){return"number"==typeof e?r===Bx&&t===Lx||r===Rx&&t===Nx?e:0:r===Bx?t===Lx?e.main:e.reverse:t===Nx?e.main:e.reverse}function Yx(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const Vx=ky((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=Sy(),a=$y(0),s=$y(0),l=$y(0),c=Cy(by(Fy(Oy(n),Oy(o),Oy(r),Oy(i,sx),Oy(l),Oy(a),Oy(t),Oy(e),Oy(s)),gy((([e,t,r,[n,o],i,a,s,l,c])=>{const d=e-l,u=a+s,f=Math.max(r-d,0);let h=Hx;const p=Yx(c,Lx),g=Yx(c,Nx);return n-=l,o+=r+s,(n+=r+s)>e+u-p&&(h=Bx),(o-=l)<e-f+t+g&&(h=Rx),h!==Hx?[Math.max(d-r-Wx(i,Lx,h)-p,0),d-f-s+t+Wx(i,Nx,h)+g]:null})),py((e=>null!=e)),hy(sx)),[0,0]);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:c}}),oy(Py),{singleton:!0});const Ux={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function Kx(e,t,r,n,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let c=0,d=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];d=t.offset+t.size}const u=r-a,f=c,h=s+u*l+(u-1)*n-d;return{bottom:d,firstItemIndex:i,items:Gx(e,o,i),offsetBottom:h,offsetTop:c,top:f,topItems:Gx(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function qx(e,t,r,n,o,i){let a=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=Mx(t,s);return Kx(Array.from({length:s}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],s,o,r,n)}function Gx(e,t,r){if(0===e.length)return[];if(!fx(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],a=Ky(t.groupOffsetTree,n,o);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const Zx=ky((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:d},{topListHeight:u},f,{didMount:h},{recalcInProgress:p}])=>{const g=$y([]),m=$y(0),b=Sy();cy(i.topItemsIndexes,g);const v=Cy(by(Fy(h,p,Oy(l,sx),Oy(o),Oy(n),Oy(c),d,Oy(g),Oy(t),Oy(r),e),py((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),gy((([,,[e,t],r,n,o,i,a,s,l,c])=>{const d=n,{offsetTree:u,sizeTree:f}=d,h=ly(m);if(0===r)return{...Ux,totalCount:r};if(0===e&&0===t)return 0===h?{...Ux,totalCount:r}:qx(h,o,n,s,l,c||[]);if(Hy(f))return h>0?null:Kx(function(e,t,r){if(fx(t)){const n=mx(e,t);return[{index:Yy(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(Mx(o,r),d,c),[],r,l,d,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let r=0;for(const n of Ky(f,e,t)){const o=n.value,i=Math.max(n.start,e),a=Math.min(n.end,t);for(let e=i;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:r,size:o}),r+=o}}if(!i)return Kx([],p,r,l,d,s);const g=a.length>0?a[a.length-1]+1:0,b=vx(u,e,t,g);if(0===b.length)return null;const v=r-1;return Kx(ry([],(r=>{for(const n of b){const o=n.value;let i=o.offset,a=n.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const t=a-n.start;i+=t*s+t*l}a<g&&(i+=(g-a)*s,a=g);const d=Math.min(n.end,v);for(let e=a;e<=d&&!(i>=t);e++)r.push({data:null==c?void 0:c[e],index:e,offset:i,size:s}),i+=s+l}})),p,r,l,d,s)})),py((e=>null!==e)),hy()),Ux);cy(by(e,py(ey),gy((e=>null==e?void 0:e.length))),o),cy(by(v,gy((e=>e.topListHeight))),u),cy(u,s),cy(by(v,gy((e=>[e.top,e.bottom]))),a),cy(by(v,gy((e=>e.items))),b);const y=Dy(by(v,py((({items:e})=>e.length>0)),wy(o,e),py((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),gy((([,e,t])=>[e-1,t])),hy(sx),gy((([e])=>e)))),x=Dy(by(v,xy(200),py((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),gy((({items:e})=>e[0].index)),hy())),w=Dy(by(v,py((({items:e})=>e.length>0)),gy((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),hy(ax)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:g,...f}}),oy(Dx,Ex,Vx,Ax,Tx,Px,Fx,lx),{singleton:!0}),Qx=ky((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=Sy(),a=Cy(by(Fy(r,e,n,t,o),gy((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return cy(Oy(a),i),{totalListHeight:a,totalListHeightChanged:i}}),oy(Py,Zx),{singleton:!0}),Xx=ky((([{viewportHeight:e},{totalListHeight:t}])=>{const r=$y(!1),n=Cy(by(Fy(r,e,t),py((([e])=>e)),gy((([,e,t])=>Math.max(0,e-t))),xy(0),hy()),0);return{alignToBottom:r,paddingTopAddition:n}}),oy(Py,Qx),{singleton:!0});function Jx(e){return!!e&&("smooth"===e?"smooth":"auto")}const ew=ky((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:c}])=>{const d=$y(!1),u=Sy();let f=null;function h(e){ay(o,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=dy(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!f&&(ly(l)("scrolling to bottom due to increased size",{},Ty.DEBUG),h("auto"))}));setTimeout(t,100)}return iy(by(Fy(by(Oy(t),yy(1)),a),wy(Oy(d),n,i,c),gy((([[e,t],r,n,o,i])=>{let a=t&&o,s="auto";return a&&(s=((e,t)=>"function"==typeof e?Jx(e(t)):t&&Jx(e))(r,n||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),py((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{f&&(f(),f=null),f=dy(e,(()=>{ly(l)("following output to ",{totalCount:r},Ty.DEBUG),h(t),f=null}))})),iy(by(Fy(Oy(d),t,s),py((([e,,t])=>e&&t)),vy((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),py((({refreshed:e})=>e)),wy(d,t)),(([,e])=>{ly(i)&&p(!1!==e)})),iy(u,(()=>{p(!1!==ly(d))})),iy(Fy(Oy(d),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&h("auto")})),{autoscrollToBottom:u,followOutput:d}}),oy(Dx,Px,Tx,Ax,Fx,My,Py)),tw=ky((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(cy(by(s,wy(i),py((([,e])=>0!==e)),wy(o,n,t,r,e),gy((([[,e],t,r,n,o,i=[]])=>qx(e,t,r,n,o,i)))),a),{})),oy(Dx,Ax,Zx,Fx),{singleton:!0}),rw=ky((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=$y(0);return iy(by(e,wy(n),py((([,e])=>0!==e)),gy((([,e])=>({top:e})))),(e=>{dy(by(r,yy(1),py((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{ay(t,e)}))}))})),{initialScrollTop:n}}),oy(Fx,Py,Zx),{singleton:!0}),nw=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:a})=>t<a?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,ow=ky((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const d=Sy();return cy(by(d,wy(t,l,r,i,o,n,s),wy(e),gy((([[e,t,r,n,o,i,s,l],c])=>{const{align:d,behavior:u,calculateViewLocation:f=nw,done:h,...p}=e,g=bx(e,t,n-1),m=gx(g,t.offsetTree,c)+o+i,b=f({itemBottom:m+Yy(t.sizeTree,g)[1],itemTop:m,locationParams:{align:d,behavior:u,...p},viewportBottom:l+r-s,viewportTop:l+i});return b?h&&dy(by(a,py((e=>!e)),yy(ly(a)?1:2)),h):h&&h(),b})),py((e=>null!==e))),c),{scrollIntoView:d}}),oy(Dx,Py,Tx,Zx,My),{singleton:!0}),iw=ky((([{scrollVelocity:e}])=>{const t=$y(!1),r=Sy(),n=$y(!1);return cy(by(e,wy(n,t,r),py((([e,t])=>!!t)),gy((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),hy()),t),iy(by(Fy(t,e,r),wy(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),oy(Px),{singleton:!0}),aw=ky((([{scrollContainerState:e,scrollTo:t}])=>{const r=Sy(),n=Sy(),o=Sy(),i=$y(!1),a=$y(void 0);return cy(by(Fy(r,n),gy((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),cy(by(t,wy(n),gy((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),oy(Py)),sw=ky((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=Sy(),d=$y(void 0),u=$y(null),f=$y(null);return cy(s,u),cy(l,f),iy(by(c,wy(t,n,a,u,f,r)),(([e,t,r,n,o,i,a])=>{const s=function(e){return Gy(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:r-=a})})),cy(by(d,py(ey),gy(lw)),o),cy(by(i,wy(d),py((([,e])=>void 0!==e)),hy(),gy((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:d}}),oy(Dx,Py,Ax,Fx,aw));function lw(e){return{align:"start",index:0,offset:e.scrollTop}}const cw=ky((([{topItemsIndexes:e}])=>{const t=$y(0);return cy(by(t,py((e=>e>=0)),gy((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),oy(Zx));function dw(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const uw=dw((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),fw=ky((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:d,shiftWithOffset:u,sizes:f},{log:h},{recalcInProgress:p}])=>{const g=Dy(by(l,wy(a),vy((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:a},s])=>{const l=n+i;let c=0;return t===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(c=l-r,0!==c&&(c+=s))),[c,o,a,l]}),[0,[],0,0]),py((([e])=>0!==e)),wy(n,s,r,o,h,p),py((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===Bx)),gy((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},Ty.DEBUG),e)))));function m(r){r>0?(ay(t,{behavior:"auto",top:-r}),ay(e,0)):(ay(e,0),ay(t,{behavior:"auto",top:-r}))}return iy(by(g,wy(e,i)),(([t,r,n])=>{n&&uw()?ay(e,r-t):m(-t)})),iy(by(Fy(Cy(i,!1),e,p),py((([e,t,r])=>!e&&!r&&0!==t)),gy((([e,t])=>t)),xy(1)),m),cy(by(u,gy((e=>({top:-e})))),t),iy(by(c,wy(f,d),gy((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=Wy(n,0);let a=0,s=0;for(;a<e;){a++,r+=o;let n=t.length===s+1?1/0:t[s+1]-t[s]-1;a+n>e&&(r-=o,n=e-a+1),a+=n,r+=i(n),s++}return r}}))),(r=>{ay(e,r),requestAnimationFrame((()=>{ay(t,{top:r}),requestAnimationFrame((()=>{ay(e,0),ay(p,!1)}))}))})),{deviation:e}}),oy(Py,Px,Zx,Dx,My,lx)),hw=ky((([e,t,r,n,o,i,a,s,l,c])=>({...e,...t,...r,...n,...o,...i,...a,...s,...l,...c})),oy(Vx,tw,Fx,iw,Qx,rw,Xx,aw,ow,My)),pw=ky((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:d,trackItemSizes:u},{initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p},g,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:S},D])=>(cy(x.rangeChanged,D.scrollSeekRangeChanged),cy(by(D.windowViewportRect,gy((e=>e.visibleHeight))),g.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:S,initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:d,...b,groupIndices:i,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:u,...x,...D,...g,sizes:l,...m})),oy(Dx,Ax,Py,sw,ew,Zx,Tx,fw,cw,Ex,hw));function gw(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const mw=typeof document<"u"?o.useLayoutEffect:o.useEffect;function bw(t,r,n){const i=Object.keys(r.required||{}),a=Object.keys(r.optional||{}),s=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),c=o.createContext({});function d(e,t){e.propsReady&&ay(e.propsReady,!1);for(const n of i){ay(e[r.required[n]],t[n])}for(const n of a)if(n in t){ay(e[r.optional[n]],t[n])}e.propsReady&&ay(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?r===i?void 0:(n(),r=i,t=iy(e,i),t):(n(),ty);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const f=o.forwardRef(((f,h)=>{const{children:p,...g}=f,[m]=o.useState((()=>ry(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const a=e(n.map((e=>r(e))));return i&&t.set(o,a),a};return r(e)}(t),(e=>{d(e,g)})))),[b]=o.useState(Xv(u,m));mw((()=>{for(const e of l)e in g&&iy(b[e],g[e]);return()=>{Object.values(b).map(sy)}}),[g,b,m]),mw((()=>{d(m,g)})),o.useImperativeHandle(h,Gv(function(e){return s.reduce(((t,n)=>(t[n]=t=>{ay(e[r.methods[n]],t)},t)),{})}(m)));const v=n;return e(c.Provider,{value:m,children:n?e(v,{...gw([...i,...a,...l],g),children:p}):p})})),h=o.version.startsWith("18")?e=>{const t=o.useContext(c)[e],r=o.useCallback((e=>iy(t,e)),[t]);return o.useSyncExternalStore(r,(()=>ly(t)),(()=>ly(t)))}:e=>{const t=o.useContext(c)[e],[r,n]=o.useState(Xv(ly,t));return mw((()=>iy(t,(e=>{e!==r&&n(Gv(e))}))),[t,r]),r};return{Component:f,useEmitter:(e,t)=>{const r=o.useContext(c)[e];mw((()=>iy(r,t)),[t,r])},useEmitterValue:h,usePublisher:e=>o.useCallback(Jv(ay,o.useContext(c)[e]),[e])}}const vw=o.createContext(void 0),yw=o.createContext(void 0),xw=typeof document<"u"?o.useLayoutEffect:o.useEffect;function ww(e,t,r,n=ty,i,a){const s=o.useRef(null),l=o.useRef(null),c=o.useRef(null),d=o.useCallback((r=>{const n=r.target,o=n===window||n===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,d=a?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(i,0),viewportHeight:d})};r.suppressFlushSync?u():M.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===s-d)&&(l.current=null,t(!0),c.current&&(clearTimeout(c.current),c.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||s.current;return n(i||s.current),d({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",d,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",d)}}),[s,d,r,n,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(r){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let i,d,u;n===window?(d=Math.max(ux(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(d=n[a?"scrollWidth":"scrollHeight"],i=ux(n,a?"width":"height"),u=n[a?"scrollLeft":"scrollTop"]);const f=d-i;if(r.top=Math.ceil(Math.max(Math.min(f,r.top),0)),jx(i,d)||r.top===u)return e({scrollHeight:d,scrollTop:u,viewportHeight:i}),void(o&&t(!0));o?(l.current=r.top,c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{c.current=null,l.current=null,t(!0)}),1e3)):l.current=null,a&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const $w="-webkit-sticky",Cw="sticky",Sw=dw((()=>{if(typeof document>"u")return Cw;const e=document.createElement("div");return e.style.position=$w,e.style.position===$w?$w:Cw}));function Dw(e){return e}const kw=ky((()=>{const e=$y((e=>`Item ${e}`)),t=$y(null),r=$y((e=>`Group ${e}`)),n=$y({}),o=$y(Dw),i=$y("div"),a=$y(ty),s=(e,t=null)=>Cy(by(n,gy((t=>t[e])),hy()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:r,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),Ew=ky((([e,t])=>({...e,...t})),oy(pw,kw)),Fw=({height:t})=>e("div",{style:{height:t}}),Ow={overflowAnchor:"none",position:Sw(),zIndex:1},_w={overflowAnchor:"none"},Tw={..._w,display:"inline-block",height:"100%"},Iw=o.memo((function({showTopList:t=!1}){const r=Gw("listState"),n=Zw("sizeRanges"),i=Gw("useWindowScroll"),a=Gw("customScrollParent"),s=Zw("windowScrollContainerState"),l=Zw("scrollContainerState"),c=a||i?s:l,d=Gw("itemContent"),u=Gw("context"),f=Gw("groupContent"),h=Gw("trackItemSizes"),p=Gw("itemSize"),g=Gw("log"),m=Zw("gap"),b=Gw("horizontalDirection"),{callbackRef:v}=By(n,p,h,t?ty:c,g,m,a,b,Gw("skipAnimationFrameInResizeObserver")),[y,x]=o.useState(0);qw("deviation",(e=>{y!==e&&x(e)}));const w=Gw("EmptyPlaceholder"),$=Gw("ScrollSeekPlaceholder")||Fw,C=Gw("ListComponent"),S=Gw("ItemComponent"),D=Gw("GroupComponent"),E=Gw("computeItemKey"),F=Gw("isSeeking"),O=Gw("groupIndices").length>0,_=Gw("alignToBottom"),T=Gw("initialItemFinalLocationReached"),I=t?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:_?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:_?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...T?{}:{visibility:"hidden"}};return!t&&0===r.totalCount&&w?e(w,{...Rw(w,u)}):e(C,{...Rw(C,u),"data-testid":t?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:I,children:(t?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=E(t+r.firstItemIndex,e.data,u);return F?k($,{...Rw($,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?k(D,{...Rw(D,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:Ow},f(e.index,u)):k(S,{...Rw(S,u),...zw(S,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:b?Tw:_w},O?d(e.index,e.groupIndex,e.data,u):d(e.index,e.data,u))}))})})),Mw={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},Aw={outline:"none",overflowX:"auto",position:"relative"},jw=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),Bw={position:Sw(),top:0,width:"100%",zIndex:1};function Rw(e,t){if("string"!=typeof e)return{context:t}}function zw(e,t){return{item:"string"==typeof e?void 0:t}}const Pw=o.memo((function(){const t=Gw("HeaderComponent"),r=Zw("headerHeight"),n=Gw("HeaderFooterTag"),i=Ay(o.useMemo((()=>e=>{r(ux(e,"height"))}),[r]),!0,Gw("skipAnimationFrameInResizeObserver")),a=Gw("context");return t?e(n,{ref:i,children:e(t,{...Rw(t,a)})}):null})),Lw=o.memo((function(){const t=Gw("FooterComponent"),r=Zw("footerHeight"),n=Gw("HeaderFooterTag"),i=Ay(o.useMemo((()=>e=>{r(ux(e,"height"))}),[r]),!0,Gw("skipAnimationFrameInResizeObserver")),a=Gw("context");return t?e(n,{ref:i,children:e(t,{...Rw(t,a)})}):null}));function Nw({useEmitter:t,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("scrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("scrollerRef"),u=r("context"),f=r("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:p,scrollToCallback:g}=ww(s,c,l,d,void 0,f);return t("scrollTo",g),t("scrollBy",h),e(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...f?Aw:Mw,...i},tabIndex:0,...a,...Rw(l,u),children:o})}))}function Hw({useEmitter:t,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("windowScrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("totalListHeight"),u=r("deviation"),f=r("customScrollParent"),h=r("context"),{scrollByCallback:p,scrollerRef:g,scrollToCallback:m}=ww(s,c,l,ty,f);return xw((()=>(g.current=f||window,()=>{g.current=null})),[g,f]),t("windowScrollTo",m),t("scrollBy",p),e(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==d?{height:d+u}:{}},...a,...Rw(l,h),children:o})}))}const Ww=({children:t})=>{const r=o.useContext(vw),n=Zw("viewportHeight"),i=Zw("fixedItemHeight"),a=Gw("alignToBottom"),s=Gw("horizontalDirection"),l=Ay(o.useMemo((()=>Qv(n,(e=>ux(e,s?"width":"height")))),[n,s]),!0,Gw("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),e("div",{"data-viewport-type":"element",ref:l,style:jw(a),children:t})},Yw=({children:t})=>{const r=o.useContext(vw),n=Zw("windowViewportRect"),i=Zw("fixedItemHeight"),a=Gw("customScrollParent"),s=zy(n,a,Gw("skipAnimationFrameInResizeObserver")),l=Gw("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),e("div",{"data-viewport-type":"window",ref:s,style:jw(l),children:t})},Vw=({children:t})=>{const r=Gw("TopItemListComponent")||"div",n=Gw("headerHeight"),o={...Bw,marginTop:`${n}px`},i=Gw("context");return e(r,{style:o,...Rw(r,i),children:t})},Uw=o.memo((function(r){const n=Gw("useWindowScroll"),o=Gw("topItemsIndexes").length>0,i=Gw("customScrollParent"),a=Gw("context"),s=i||n?Xw:Qw,l=i||n?Yw:Ww;return t(s,{...r,...Rw(s,a),children:[o&&e(Vw,{children:e(Iw,{showTopList:!0})}),t(l,{children:[e(Pw,{}),e(Iw,{}),e(Lw,{})]})]})})),{Component:Kw,useEmitter:qw,useEmitterValue:Gw,usePublisher:Zw}=bw(Ew,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},Uw),Qw=Nw({useEmitter:qw,useEmitterValue:Gw,usePublisher:Zw}),Xw=Hw({useEmitter:qw,useEmitterValue:Gw,usePublisher:Zw}),Jw=Kw,e$={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},t$={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:r$,floor:n$,max:o$,min:i$,round:a$}=Math;function s$(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function l$(e,t){return e&&e.width===t.width&&e.height===t.height}function c$(e,t){return e&&e.column===t.column&&e.row===t.row}const d$=ky((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:d,viewportHeight:u},f,h,{didMount:p,propsReady:g},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=$y(0),C=$y(0),S=$y(e$),D=$y({height:0,width:0}),k=$y({height:0,width:0}),E=Sy(),F=Sy(),O=$y(0),_=$y(null),T=$y({column:0,row:0}),I=Sy(),M=Sy(),A=$y(!1),j=$y(0),B=$y(!0),R=$y(!1),z=$y(!1);iy(by(p,wy(j),py((([e,t])=>!!t))),(()=>{ay(B,!1)})),iy(by(Fy(p,B,k,D,j,R),py((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{ay(R,!0),Ix(1,(()=>{ay(E,e)})),dy(by(c),(()=>{ay(t,[0,0]),ay(B,!0)}))})),cy(by(M,py((e=>null!=e&&e.scrollTop>0)),my(0)),C),iy(by(p,wy(M),py((([,e])=>null!=e))),(([,e])=>{e&&(ay(D,e.viewport),ay(k,e.item),ay(T,e.gap),e.scrollTop>0&&(ay(A,!0),dy(by(c,yy(1)),(e=>{ay(A,!1)})),ay(l,{top:e.scrollTop})))})),cy(by(D,gy((({height:e})=>e))),u),cy(by(Fy(Oy(D,l$),Oy(k,l$),Oy(T,((e,t)=>e&&e.column===t.column&&e.row===t.row)),Oy(c)),gy((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),I),cy(by(Fy(Oy($),n,Oy(T,c$),Oy(k,l$),Oy(D,l$),Oy(_),Oy(C),Oy(A),Oy(B),Oy(j)),py((([,,,,,,,e])=>!e)),gy((([e,[t,r],n,o,i,a,s,,l,c])=>{const{column:d,row:u}=n,{height:f,width:h}=o,{width:p}=i;if(0===s&&(0===e||0===p))return e$;if(0===h){const t=Mx(c,e);return function(e){return{...t$,items:e}}(s$(t,t+Math.max(s-1,0),a))}const g=u$(p,h,d);let m,b;l?0===t&&0===r&&s>0?(m=0,b=s-1):(m=g*n$((t+u)/(f+u)),b=g*r$((r+u)/(f+u))-1,b=i$(e-1,o$(b,g-1)),m=i$(b,o$(0,m))):(m=0,b=-1);const v=s$(m,b,a),{bottom:y,top:x}=f$(i,n,o,v),w=r$(e/g);return{bottom:y,itemHeight:f,items:v,itemWidth:h,offsetBottom:w*f+(w-1)*u-y,offsetTop:x,top:x}}))),S),cy(by(_,py((e=>null!==e)),gy((e=>e.length))),$),cy(by(Fy(D,k,S,T),py((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),gy((([e,t,{items:r},n])=>{const{bottom:o,top:i}=f$(e,n,t,r);return[i,o]})),hy(sx)),t);const P=$y(!1);cy(by(c,wy(P),gy((([e,t])=>t||0!==e))),P);const L=Dy(by(Fy(S,$),py((([{items:e}])=>e.length>0)),wy(P),py((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),gy((([[,e]])=>e-1)),hy())),N=Dy(by(Oy(S),py((({items:e})=>e.length>0&&0===e[0].index)),my(0),hy())),H=Dy(by(Oy(S),wy(A),py((([{items:e},t])=>e.length>0&&!t)),gy((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),hy(ax),xy(0)));cy(H,h.scrollSeekRangeChanged),cy(by(E,wy(D,k,$,T),gy((([e,t,r,n,o])=>{const i=_x(e),{align:a,behavior:s,offset:l}=i;let c=i.index;"LAST"===c&&(c=n-1),c=o$(0,c,i$(n-1,c));let d=h$(t,o,r,c);return"end"===a?d=a$(d-t.height+r.height):"center"===a&&(d=a$(d-t.height/2+r.height/2)),l&&(d+=l),{behavior:s,top:d}}))),l);const W=Cy(by(S,gy((e=>e.offsetBottom+e.bottom))),0);return cy(by(x,gy((e=>({height:e.visibleHeight,width:e.visibleWidth})))),D),{customScrollParent:m,data:_,deviation:O,footerHeight:o,gap:T,headerHeight:i,increaseViewportBy:e,initialItemCount:C,itemDimensions:k,overscan:r,restoreStateFrom:M,scrollBy:a,scrollContainerState:s,scrollHeight:F,scrollTo:l,scrollToIndex:E,scrollTop:c,smoothScrollTargetReached:d,totalCount:$,useWindowScroll:b,viewportDimensions:D,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...h,gridState:S,horizontalDirection:z,initialTopMostItemIndex:j,totalListHeight:W,...f,endReached:L,propsReady:g,rangeChanged:H,startReached:N,stateChanged:I,stateRestoreInProgress:A,...w}}),oy(Vx,Py,Px,iw,Fx,aw,My));function u$(e,t,r){return o$(1,n$((e+r)/(n$(t)+r)))}function f$(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=h$(e,t,r,n[0].index);return{bottom:h$(e,t,r,n[n.length-1].index)+o,top:i}}function h$(e,t,r,n){const o=u$(e.width,r.width,t.column),i=n$(n/o),a=i*r.height+o$(0,i-1)*t.row;return a>0?a+t.row:a}const p$=ky((()=>{const e=$y((e=>`Item ${e}`)),t=$y({}),r=$y(null),n=$y("virtuoso-grid-item"),o=$y("virtuoso-grid-list"),i=$y(Dw),a=$y("div"),s=$y(ty),l=(e,r=null)=>Cy(by(t,gy((t=>t[e])),hy()),r),c=$y(!1),d=$y(!1);return cy(Oy(d),c),{components:t,computeItemKey:i,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:d,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),g$=ky((([e,t])=>({...e,...t})),oy(d$,p$)),m$=o.memo((function(){const t=S$("gridState"),r=S$("listClassName"),n=S$("itemClassName"),i=S$("itemContent"),a=S$("computeItemKey"),s=S$("isSeeking"),l=D$("scrollHeight"),c=S$("ItemComponent"),d=S$("ListComponent"),u=S$("ScrollSeekPlaceholder"),f=S$("context"),h=D$("itemDimensions"),p=D$("gap"),g=S$("log"),m=S$("stateRestoreInProgress"),b=D$("reportReadyState"),v=Ay(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();h({height:e,width:t})}p({column:F$("column-gap",getComputedStyle(e).columnGap,g),row:F$("row-gap",getComputedStyle(e).rowGap,g)})}),[l,h,p,g]),!0,!1);return xw((()=>{t.itemHeight>0&&t.itemWidth>0&&b(!0)}),[t]),m?null:e(d,{className:r,ref:v,...Rw(d,f),"data-testid":"virtuoso-item-list",style:{paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},children:t.items.map((r=>{const o=a(r.index,r.data,f);return s?e(u,{...Rw(u,f),height:t.itemHeight,index:r.index,width:t.itemWidth},o):k(c,{...Rw(c,f),className:n,"data-index":r.index,key:o},i(r.index,r.data,f))}))})})),b$=o.memo((function(){const t=S$("HeaderComponent"),r=D$("headerHeight"),n=S$("headerFooterTag"),i=Ay(o.useMemo((()=>e=>{r(ux(e,"height"))}),[r]),!0,!1),a=S$("context");return t?e(n,{ref:i,children:e(t,{...Rw(t,a)})}):null})),v$=o.memo((function(){const t=S$("FooterComponent"),r=D$("footerHeight"),n=S$("headerFooterTag"),i=Ay(o.useMemo((()=>e=>{r(ux(e,"height"))}),[r]),!0,!1),a=S$("context");return t?e(n,{ref:i,children:e(t,{...Rw(t,a)})}):null})),y$=({children:t})=>{const r=o.useContext(yw),n=D$("itemDimensions"),i=D$("viewportDimensions"),a=Ay(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),e("div",{ref:a,style:jw(!1),children:t})},x$=({children:t})=>{const r=o.useContext(yw),n=D$("windowViewportRect"),i=D$("itemDimensions"),a=S$("customScrollParent"),s=zy(n,a,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),e("div",{ref:s,style:jw(!1),children:t})},w$=o.memo((function({...r}){const n=S$("useWindowScroll"),o=S$("customScrollParent"),i=o||n?E$:k$,a=o||n?x$:y$,s=S$("context");return e(i,{...r,...Rw(i,s),children:t(a,{children:[e(b$,{}),e(m$,{}),e(v$,{})]})})})),{Component:$$,useEmitter:C$,useEmitterValue:S$,usePublisher:D$}=bw(g$,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},w$),k$=Nw({useEmitter:C$,useEmitterValue:S$,usePublisher:D$}),E$=Hw({useEmitter:C$,useEmitterValue:S$,usePublisher:D$});function F$(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Ty.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const O$=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),_$=({children:t})=>{const[r,n]=g(-1);return e(O$.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:t})},T$=F.div`
    border: ${ea["width-010"]} ${ea.solid} ${Qi.border};
    border-radius: ${ra.sm};
    background: ${Qi.bg};

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: 23rem;`:"min-width: 23rem;"}
    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?Xi["body-md-regular"]:Xi["body-baseline-regular"]}

    ${ia.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${oa["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${ia.MaxWidth.xs} {
        width: calc(100vw - ${oa["xs-margin"]} * 2);
    }

    ${ia.MaxWidth.xxs} {
        width: calc(100vw - ${oa["xxs-margin"]} * 2);
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Qi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${ra.full};
        background-clip: padding-box;
    }
`,I$=F.div`
    background: transparent;
    padding: ${ta["spacing-8"]};
`,M$=F.ul`
    list-style-type: none;
`,A$=F.li`
    display: flex;
    align-items: flex-start;
    gap: ${ta["spacing-8"]};
    padding: ${ta["spacing-12"]} ${ta["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${ra.none};
    outline: none;

    ${e=>e.$disabled?O`
                cursor: not-allowed;
            `:e.$active&&e.$selected?O`
                background: ${Qi["bg-hover"]};
            `:e.$active?O`
                background: ${Qi["bg-hover-subtle"]};
            `:void 0}
`,j$=F(ye)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Qi["icon-selected"]};
`,B$=F.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,R$=F(ve)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Qi["icon-selected"]};
`,z$=F(me)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Qi["icon-primary-subtlest"]};
`,P$=F(be)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Qi["icon-disabled-subtle"]};
`,L$=F.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,N$=F(Eh)`
    cursor: pointer;
    overflow: hidden;
    color: ${Qi["text-primary"]};
    font-size: inherit;
`,H$=F(N$)`
    ${Xi["body-baseline-semibold"]}
`,W$=F(N$)`
    ${Xi["body-md-semibold"]}
    padding: ${ta["spacing-8"]} ${ta["spacing-8"]};
`,Y$=F.div`
    width: 100%;
    display: flex;
    padding: ${ta["spacing-12"]} ${ta["spacing-16"]};
    align-items: center;
`,V$=F(ne)`
    margin-right: ${ta["spacing-4"]};
    color: ${Qi["icon-error"]};
    height: 1em;
    width: 1em;
`,U$=F(nf)`
    margin-right: ${ta["spacing-8"]};
    color: ${Qi.icon};
`,K$=F.div`
    ${Qd()}
    color: ${Qi["text-subtle"]};
    padding: 0 ${ta["spacing-16"]} ${ta["spacing-12"]}
        ${ta["spacing-16"]};
`,q$=F.div`
    background: ${Qi["bg-strong"]};
    border-radius: ${ra.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Xi["body-md-regular"]:Xi["body-baseline-regular"]}
`,G$=F.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${ta["spacing-8"]};
    padding: ${e=>"small"===e.$variant?O`
                  ${ta["spacing-8"]} ${ta["spacing-16"]}
              `:O`10px ${ta["spacing-16"]}`};
`,Z$=F(kh)`
    flex: 1;
`,Q$=F(xe)`
    color: ${Qi.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,X$=F(Kd)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${ta["spacing-8"]};
    margin-left: -${ta["spacing-8"]};
    color: ${Qi.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,J$=u(((r,n)=>{var{value:o,variant:i,onClear:a}=r,s=ct(r,["value","variant","onClear"]);return t(q$,{$variant:i,children:[t(G$,{$variant:i,children:[e(Q$,{"aria-hidden":!0}),e(Z$,Object.assign({ref:n,value:o,$variant:i},s))]}),o&&e(X$,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:e(re,{"aria-hidden":!0})})]})})),eC=({listItems:n,multiSelect:o,maxSelectable:i,selectedItems:a,disableItemFocus:l,itemsLoadState:u="success",itemTruncationType:f="end",itemMaxLines:h=2,labelDisplayType:p="inline",variant:m="default",listboxId:v,matchElementWidth:y=!1,width:x,topScrollItem:w,onSelectItem:$,onSelectAll:C,onDismiss:S,onRetry:D,valueExtractor:k,listExtractor:E,renderListItem:F,renderCustomCallToAction:O,enableSearch:_,hideNoResultsDisplay:T,noResultsDescription:I,customLabels:M,searchPlaceholder:A,searchFunction:j,onSearch:B})=>{const{noResultsLabel:R="No results found.",selectAllButtonLabel:z="Select all",clearAllButtonLabel:P="Clear all"}=M||{},L=(null==M?void 0:M.searchPlaceholder)||A||"Search",N=(null==M?void 0:M.noResultsDescription)||I,{focusedIndex:H,setFocusedIndex:W}=b(O$),{elementWidth:Y,setFloatingRef:V,getFloatingProps:U,styles:K}=Vu(),[q,G]=g(""),[Z,Q]=g(null!=n?n:[]),X=Td(u),J=Od(),ee=s(null),te=s(null),re=s([]),ne=s(null),oe=s(null),ie=!!i&&!!a&&(null==a?void 0:a.length)===i,ae=e=>{const t=E?E(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},se=d((e=>!!Uv(a,(t=>qv(t,e)))),[a]),le=Ed((()=>null==j?void 0:j(q))),ce=Ed((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=ae(e),n=q.trim().toLowerCase();return t.toLowerCase().includes(n)||r&&r.toLowerCase().includes(n)})))),de=(e,t)=>{ie&&!se(e)||(W(t),null==$||$(e,(e=>k?k(e):e)(e)))},ue=e=>{const t=e.target.value;G(t),null==B||B()},fe=()=>{var e;G(""),null===(e=ne.current)||void 0===e||e.focus(),null==B||B()},he=()=>{null==D||D()};Fd("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),H<Z.length-1){const e=H+1;null===(t=re.current[e])||void 0===t||t.focus(),W(e)}break;case"ArrowUp":if(e.preventDefault(),H>0){const e=H-1;null===(r=re.current[e])||void 0===r||r.focus(),W(e)}else 0===H&&ne.current&&(ne.current.focus(),W(-1));break;case"Space":case"Enter":document.activeElement===re.current[H]&&(e.preventDefault(),Z[H]&&de(Z[H],H))}})),c((()=>{var e;if(!w)return void(null===(e=oe.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(w);oe.current&&-1!==e&&(oe.current.scrollToIndex({index:e}),W(e))}),0);return()=>clearTimeout(t)}),[re,n,W,w]),c((()=>{var e,t,r;if(J)return;if(l||!n)return;const o=n.findIndex((e=>se(e)));ne.current?(W(-1),setTimeout((()=>{var e;return null===(e=ne.current)||void 0===e?void 0:e.focus()}),200)):H>0?(null===(e=oe.current)||void 0===e||e.scrollToIndex({index:H,align:"center"}),setTimeout((()=>{var e;return null===(e=re.current[H])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=oe.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),W(o),setTimeout((()=>{var e;return null===(e=re.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=oe.current)||void 0===r||r.scrollToIndex({index:0}),W(0),setTimeout((()=>{var e;return null===(e=re.current[0])||void 0===e?void 0:e.focus()}),200))}),[se,l,H,n,J,W]),c((()=>{J&&X&&(l||"success"===u&&ne.current&&(W(-1),ne.current.focus()))}),[J,X,u,W,l]),c((()=>{var e;Q(null!==(e=""===q?n:j?le():ce())&&void 0!==e?e:[])}),[le,ce,n,j,q]);const pe=t=>o?e(ie&&!t?P$:t?R$:z$,{"aria-hidden":!0}):t?e(j$,{"aria-hidden":!0}):e(B$,{}),ge=(t,r)=>{const{title:n,secondaryLabel:o}=ae(t);return e(cg,{displayType:p,label:n,maxLines:h,selected:r,disabled:!r&&ie,sublabel:o,truncationType:f,variant:m})},me=(n,i)=>{if(!D||"success"===u){const a=se(n),s=i===H;return e(A$,{"aria-selected":a,"aria-multiselectable":o,"aria-disabled":!a&&ie,"data-testid":"list-item",onClick:()=>de(n,i),onMouseEnter:()=>(e=>{W(e)})(i),ref:e=>{re.current[i]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,$disabled:!a&&ie,children:F?F(n,{selected:a}):t(r,{children:[pe(a),ge(n,a)]})},((e,t)=>`item_${t}__${k?k(e):e}`)(n,i))}},be=()=>{if((_||j)&&"success"===u)return e(J$,{ref:ne,onChange:ue,value:q,placeholder:L,"data-testid":"search-input","aria-label":"Enter text to search",onClear:fe,variant:m})},ve=()=>{if(a&&o&&Z.length>0&&!q&&"success"===u)return e(L$,{children:e(W$,{onClick:C,type:"button",$variant:m,children:i||0!==a.length?P:z})})},ye=()=>{if(!T&&(q||!_)&&0===Z.length&&"success"===u)return t(r,{children:[t(Y$,{"data-testid":"list-no-results",children:[e(V$,{"data-testid":"no-result-icon"}),R]}),N&&e(K$,{"data-testid":"no-result-desc",children:N})]})},xe=()=>{if(D&&"loading"===u)return t(Y$,{"data-testid":"list-loading",children:[e(U$,{}),"Loading..."]})},we=()=>{if(D&&"fail"===u)return t(Y$,{"data-testid":"list-fail",children:[e(V$,{"data-testid":"load-error-icon"}),"Failed to load. ",e(H$,{onClick:he,type:"button",$variant:m,children:"Try again."})]})},$e=()=>{var t;const r="test"===process.env.NODE_ENV;return e(M$,{role:"listbox",id:v,children:e(Jw,Object.assign({ref:oe,style:{height:"100%"},data:Z,customScrollParent:null!==(t=ee.current)&&void 0!==t?t:void 0,itemContent:(e,t)=>me(t,e)},r?{initialItemCount:Z.length}:{}),r?Z.length:void 0)})};return t(T$,Object.assign({"data-testid":"dropdown-container",ref:Sd(ee,V),style:K},U(),{$width:y?Y:void 0,$customWidth:x,$variant:m,children:[t(I$,{ref:te,"data-testid":"dropdown-list",children:[be(),ve(),ye(),xe(),we(),$e()]}),(()=>{if(O)return e("div",{"data-testid":"custom-cta",children:O(S,Z)})})()]}))},tC=F(Eh)`
    display: flex;
    align-items: center;
    gap: ${ta["spacing-8"]};
    width: 100%;
    padding: ${e=>e.$readOnly?`0 ${ta["spacing-16"]}`:ta["spacing-16"]};

    ${e=>"small"===e.$variant?O`
                  ${Xi["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `:O`
                  ${Xi["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${Qi["focus-ring"]};
        outline-offset: -2px;
    }
`,rC=F.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Ji["duration-250"]} ${Ji["ease-default"]};

    svg {
        color: ${Qi.icon};
        height: 1em;
        width: 1em;
    }
`,nC=u(((r,n)=>{var{children:o,disabled:i,expanded:a,listboxId:s,popupRole:l,readOnly:c,variant:d}=r,u=ct(r,["children","disabled","expanded","listboxId","popupRole","readOnly","variant"]);return t(tC,Object.assign({ref:n,type:"button",role:"combobox","aria-expanded":a,"aria-haspopup":l,"aria-controls":a?s:void 0,"data-testid":"selector","aria-disabled":i,"aria-readonly":c,$variant:d,$readOnly:c},u,{children:[o,!c&&e(rC,{$expanded:a,$variant:d,children:e(oe,{"aria-hidden":!0})})]}))}));var oC=Symbol.for("immer-nothing"),iC=Symbol.for("immer-draftable"),aC=Symbol.for("immer-state"),sC="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function lC(e,...t){if("production"!==process.env.NODE_ENV){const r=sC[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var cC=Object.getPrototypeOf;function dC(e){return!!e&&!!e[aC]}function uC(e){return!!e&&(hC(e)||Array.isArray(e)||!!e[iC]||!!e.constructor?.[iC]||vC(e)||yC(e))}var fC=Object.prototype.constructor.toString();function hC(e){if(!e||"object"!=typeof e)return!1;const t=cC(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===fC}function pC(e,t){0===gC(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function gC(e){const t=e[aC];return t?t.type_:Array.isArray(e)?1:vC(e)?2:yC(e)?3:0}function mC(e,t){return 2===gC(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function bC(e,t,r){const n=gC(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function vC(e){return e instanceof Map}function yC(e){return e instanceof Set}function xC(e){return e.copy_||e.base_}function wC(e,t){if(vC(e))return new Map(e);if(yC(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=hC(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[aC];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(cC(e),t)}{const t=cC(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function $C(e,t=!1){return SC(e)||dC(e)||!uC(e)||(gC(e)>1&&(e.set=e.add=e.clear=e.delete=CC),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>$C(t,!0)))),e}function CC(){lC(2)}function SC(e){return Object.isFrozen(e)}var DC,kC={};function EC(e){const t=kC[e];return t||lC(0,e),t}function FC(){return DC}function OC(e,t){t&&(EC("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function _C(e){TC(e),e.drafts_.forEach(MC),e.drafts_=null}function TC(e){e===DC&&(DC=e.parent_)}function IC(e){return DC={drafts_:[],parent_:DC,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function MC(e){const t=e[aC];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function AC(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[aC].modified_&&(_C(t),lC(4)),uC(e)&&(e=jC(t,e),t.parent_||RC(t,e)),t.patches_&&EC("Patches").generateReplacementPatches_(r[aC].base_,e,t.patches_,t.inversePatches_)):e=jC(t,r,[]),_C(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==oC?e:void 0}function jC(e,t,r){if(SC(t))return t;const n=t[aC];if(!n)return pC(t,((o,i)=>BC(e,n,t,o,i,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return RC(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),pC(o,((o,a)=>BC(e,n,t,o,a,r,i))),RC(e,t,!1),r&&e.patches_&&EC("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function BC(e,t,r,n,o,i,a){if("production"!==process.env.NODE_ENV&&o===r&&lC(5),dC(o)){const a=jC(e,o,i&&t&&3!==t.type_&&!mC(t.assigned_,n)?i.concat(n):void 0);if(bC(r,n,a),!dC(a))return;e.canAutoFreeze_=!1}else a&&r.add(o);if(uC(o)&&!SC(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;jC(e,o),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||RC(e,o)}}function RC(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&$C(t,r)}var zC={get(e,t){if(t===aC)return e;const r=xC(e);if(!mC(r,t))return function(e,t,r){const n=NC(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!uC(n)?n:n===LC(e.base_,t)?(WC(e),e.copy_[t]=YC(n,e)):n},has:(e,t)=>t in xC(e),ownKeys:e=>Reflect.ownKeys(xC(e)),set(e,t,r){const n=NC(xC(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=LC(xC(e),t),o=n?.[aC];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||mC(e.base_,t)))return!0;WC(e),HC(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==LC(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,WC(e),HC(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=xC(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){lC(11)},getPrototypeOf:e=>cC(e.base_),setPrototypeOf(){lC(12)}},PC={};function LC(e,t){const r=e[aC];return(r?xC(r):e)[t]}function NC(e,t){if(!(t in e))return;let r=cC(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=cC(r)}}function HC(e){e.modified_||(e.modified_=!0,e.parent_&&HC(e.parent_))}function WC(e){e.copy_||(e.copy_=wC(e.base_,e.scope_.immer_.useStrictShallowCopy_))}pC(zC,((e,t)=>{PC[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),PC.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&lC(13),PC.set.call(this,e,t,void 0)},PC.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&lC(14),zC.set.call(this,e[0],t,r,e[0])};function YC(e,t){const r=vC(e)?EC("MapSet").proxyMap_(e,t):yC(e)?EC("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:FC(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=zC;r&&(o=[n],i=PC);const{revoke:a,proxy:s}=Proxy.revocable(o,i);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:FC()).drafts_.push(r),r}function VC(e){if(!uC(e)||SC(e))return e;const t=e[aC];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=wC(e,t.scope_.immer_.useStrictShallowCopy_)}else r=wC(e,!0);return pC(r,((e,t)=>{bC(r,e,VC(t))})),t&&(t.finalized_=!1),r}var UC=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...o){return n.produce(e,(e=>t.call(this,e,...o)))}}let n;if("function"!=typeof t&&lC(6),void 0!==r&&"function"!=typeof r&&lC(7),uC(e)){const o=IC(this),i=YC(e,void 0);let a=!0;try{n=t(i),a=!1}finally{a?_C(o):TC(o)}return OC(o,r),AC(n,o)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===oC&&(n=void 0),this.autoFreeze_&&$C(n,!0),r){const t=[],o=[];EC("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}lC(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const o=this.produce(e,t,((e,t)=>{r=e,n=t}));return[o,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){uC(e)||lC(8),dC(e)&&(e=function(e){dC(e)||lC(10,e);return VC(e)}(e));const t=IC(this),r=YC(e,void 0);return r[aC].isManual_=!0,TC(t),r}finishDraft(e,t){const r=e&&e[aC];r&&r.isManual_||lC(9);const{scope_:n}=r;return OC(n,t),AC(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=EC("Patches").applyPatches_;return dC(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},KC=UC.produce;UC.produceWithPatches.bind(UC),UC.setAutoFreeze.bind(UC),UC.setUseStrictShallowCopy.bind(UC),UC.applyPatches.bind(UC),UC.createDraft.bind(UC),UC.finishDraft.bind(UC);var qC=Nm,GC=yb,ZC=lm,QC=hr,XC=Ym,JC=um,eS=Bm,tS=km,rS=Object.prototype.hasOwnProperty;var nS=function(e){if(null==e)return!0;if(XC(e)&&(QC(e)||"string"==typeof e||"function"==typeof e.splice||JC(e)||tS(e)||ZC(e)))return!e.length;var t=GC(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(eS(e))return!qC(e).length;for(var r in e)if(rS.call(e,r))return!1;return!0},oS=Re(nS);const iS=(e,t,r)=>{const n=KC(e,(e=>{for(let n=e.length-1;n>=0;n--){const o=e[n],i=sS(o.keyPath);if(o.checked=t.has(i),o.hasSubItems&&r&&!0!==o.checked){const t=o.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?o.checked=!0:n&&(o.checked="mixed")}}}));return n},aS=(e,t)=>{const[r,...n]=t;if(oS(e)||oS(r))return;const o=e.find((e=>e.key===r));return o&&n.length?aS(o.subItems,n):o},sS=e=>e.join(","),lS=e=>new Set(e.map((e=>e.join(",")))),cS=F.li`
    display: ${e=>e.$visible?"flex":"none"};
`,dS=F.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${ta["spacing-8"]};
    padding: ${ta["spacing-12"]} ${ta["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${ra.none};
    outline: none;

    ${e=>e.$active&&O`
            background: ${Qi["bg-hover"]};
        `}
`,uS=F.div`
    height: 1px;
    width: calc((1lh + ${ta["spacing-8"]}) * ${e=>e.$level});
`,fS=F.div`
    width: 1lh;
    height: 1lh;
    color: ${Qi["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Ji["duration-350"]}
            ${Ji["ease-standard"]};

        ${e=>{if(e.$expanded)return O`
                    transform: rotate(90deg);
                `}}
    }
`,hS=F.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${ta["spacing-8"]};
`,pS=F.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":ta["spacing-16"]};

    display: flex;
    justify-content: center;
`,gS=F($e)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Qi["icon-selected"]};
`,mS=({listItems:n,multiSelect:o=!1,selectedKeyPaths:i,itemsLoadState:l="success",itemTruncationType:d="end",itemMaxLines:u=2,variant:f="default",listboxId:h,matchElementWidth:p=!1,width:m,mode:b="default",selectableCategory:v,onSelectItem:y,onSelectAll:x,onRetry:w,enableSearch:$,hideNoResultsDisplay:C,noResultsDescription:S,customLabels:D,searchPlaceholder:k,onSearch:E})=>{const{noResultsLabel:F="No results found.",selectAllButtonLabel:O="Select all",clearAllButtonLabel:_="Clear all"}=D||{},T=(null==D?void 0:D.searchPlaceholder)||k||"Search",I=(null==D?void 0:D.noResultsDescription)||S,M=o||v,{elementWidth:A,setFloatingRef:j,getFloatingProps:B,styles:R}=Vu(),[z,P]=g(""),L=z.toLowerCase().trim(),[N,H]=g(!1),W=s(null),Y=s(null),V=s([]),U=s(null),K=Od(),[q,G]=g([]),[Z,Q]=g([]),X=N?Z:q,J=a((()=>{let e=0;for(const t of q)t.level>e&&(e=t.level);return e}),[q]),[ee,te]=g(0),[re,ne]=g([]),[oe,ie]=g(0),ae=e=>{const t=e.target.value;P(t),""===t?H(!1):t.trim().length>=3&&H(!0),null==E||E()},se=()=>{var e;P(""),H(!1),null===(e=U.current)||void 0===e||e.focus(),null==E||E()},le=()=>{null==w||w()},ce=()=>{if(0===i.size){const e=[],t=[];q.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==x||x(e,t)}else null==x||x([],[])},de=Ed(((e,t)=>((e,t,r,n,o)=>{const i=[],a=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((d,u)=>{var f,h;const p=s?s.level+1:0,g=s?[...s.keyPath,d.key]:[d.key],m=sS(g),b={item:d,index:i.length,indexInParent:u,parentSetSize:e.length,keyPath:g,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||o||(null==s?void 0:s.expanded)||!1,expanded:o,checked:t.has(m),hasSubItems:!!(null===(f=d.subItems)||void 0===f?void 0:f.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!n&&-1!==d.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(l.push(b),i.push(b),null===(h=d.subItems)||void 0===h?void 0:h.length){const e=a(d.subItems,b);if(r&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?b.checked=!0:r&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),i})(e,i,o,L,t))),ue=Ed((e=>{return i.size?(t=de(e,!1),KC(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>KC(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const o=e[t].keyPath.length;if(o>n)n=o;else if(o<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],o=n.keyPath.slice(0,-1),i=e[r].keyPath.slice(0,o.length);qv(o,i)&&(n.visible=!0)}return e})))(de(e,!1));var t})),fe=Ed((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(L))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),he=Ed((()=>{G((e=>iS(e,i,o))),N&&Q((e=>iS(e,i,o)))})),pe=(e,t,r)=>{const n=((e,t,r)=>KC(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let o=t+1;o<e.length;o++){const t=e[o],i=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!qv(n,a))break;t.visible=r&&i.expanded&&i.visible}})))(X,e,t);te(e),ie(r),N?Q(n):G(n)};Fd("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return e[n]})(X,(e=>e.visible),ee+1);r&&(ie((e=>e+1)),te(r.index),null===(t=V.current[r.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return e[n]})(X,(e=>e.visible),ee-1);t?(ie((e=>e-1)),te(t.index),null===(r=V.current[t.index])||void 0===r||r.focus()):0===oe&&U.current&&(U.current.focus(),ie(-1),te(-1));break}case"ArrowRight":e.preventDefault(),pe(ee,!0,oe);break;case"ArrowLeft":e.preventDefault(),pe(ee,!1,oe);break;case"Space":if(document.activeElement===V.current[ee]){e.preventDefault();const t=X[ee];if(t.hasSubItems&&!M)return;null==y||y(t)}}})),c((()=>{let e=[];"default"===b?e=ue(n):"expand"===b?e=de(n,!0):"collapse"===b&&(e=de(n,!1)),G(e)}),[de,ue,n,b]),c((()=>{ne(X.filter((e=>e.visible)))}),[N,X]),c((()=>{he()}),[o,i,he]),c((()=>{if(N&&z.trim().length>=3){const e=fe(n),t=(e=>KC(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(de(e,!1));Q(t)}}),[fe,de,n,N,z]),c((()=>{K||(U.current?(te(-1),ie(-1),setTimeout((()=>{var e;return null===(e=U.current)||void 0===e?void 0:e.focus()}),200)):V.current[ee]?setTimeout((()=>{var e;return null===(e=V.current[ee])||void 0===e?void 0:e.focus()}),200):(te(0),ie(0),setTimeout((()=>{var e;return null===(e=V.current[0])||void 0===e?void 0:e.focus()}),200)))}),[ee,oe,K]);const ge=()=>{if($&&"success"===l)return e(J$,{ref:U,onChange:ae,value:z,placeholder:T,"data-testid":"search-input","aria-label":"Enter text to search",onClear:se,variant:f})},me=()=>{if(o&&!N&&q.length>0&&"success"===l)return e(L$,{children:e(W$,{onClick:ce,type:"button",$variant:f,children:0===i.size?O:_})})},be=()=>{if(!C&&N&&0===Z.length&&"success"===l)return t(r,{children:[t(Y$,{"data-testid":"list-no-results",children:[e(V$,{"data-testid":"no-result-icon"}),F]}),I&&e(K$,{"data-testid":"no-result-desc",children:I})]})},ve=()=>{if(w&&"loading"===l)return t(Y$,{"data-testid":"list-loading",children:[e(xf,{}),"Loading..."]})},ye=()=>{if(w&&"fail"===l)return t(Y$,{"data-testid":"list-fail",children:[e(V$,{"data-testid":"load-error-icon"}),"Failed to load. ",e(H$,{onClick:le,type:"button",$variant:f,children:"Try again."})]})},xe=t=>{if(o)switch(t.checked){case"mixed":return e(gS,{"aria-hidden":!0});case!0:return e(R$,{"aria-hidden":!0});default:return e(z$,{"aria-hidden":!0})}if(!t.hasSubItems)return e(pS,{$hasNestedSiblings:t.hasNestedSiblings||0===t.level,children:t.checked&&e(j$,{"aria-hidden":!0})})},$e=(r,n)=>{const{level:i,visible:a,expanded:s,keyPath:l,checked:c,hasSubItems:f,indexInParent:h,parentSetSize:p}=r,g=r.index,m=oe===n,b=f&&!M;return t(cS,{$visible:a,children:[J>0&&e(uS,{$level:i}),J>0&&!f&&o&&e(hS,{}),t(dS,{"aria-checked":c,"aria-selected":!!c,"aria-expanded":f?s:void 0,"aria-level":i+1,"aria-posinset":h+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?pe(g,!s,n):((e,t)=>{ie(t),te(e),null==y||y(X[e])})(g,n)},onMouseEnter:()=>((e,t)=>{te(t.index),ie(e)})(n,r),ref:e=>V.current[r.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b,children:[f&&e(fS,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),pe(g,!s,n)},$expanded:s,children:e(we,{})}),xe(r),e(cg,{bold:f,searchTerm:N?L:void 0,label:r.item.label,selected:!!c,truncationType:d,maxLines:u})]})]},`[${l.join("---")}]`)},Ce=()=>{var t;const r="test"===process.env.NODE_ENV;return e("div",{"aria-multiselectable":o,id:h,ref:Y,role:"tree",children:e(Jw,Object.assign({style:{height:"100%"},customScrollParent:null!==(t=W.current)&&void 0!==t?t:void 0,data:re,itemContent:(e,t)=>$e(t,e)},r?{initialItemCount:re.length}:{}),r?re.length:void 0)})};return e(T$,Object.assign({"data-testid":"dropdown-container",ref:Sd(W,j),style:R},B(),{$width:p?A:void 0,$variant:f,$customWidth:m,children:t(I$,{"data-testid":"nested-dropdown-list",children:[ge(),me(),be(),ve(),ye(),Ce()]})}))},bS=F(Sh)`
    display: flex;
    align-items: center;

    ${e=>"right"===e.$position?O`
                    flex-direction: row-reverse;
                `:O`
                    flex-direction: row;
                `}
`,vS=F.div`
    flex: 0 0 auto;
`,yS=F(tg)`
    ${e=>e.readOnly?O`
                padding: 0;
            `:"right"===e.$position?O`
                    padding-left: ${ta["spacing-16"]};
                `:O`
                    padding-right: ${ta["spacing-16"]};
                `}
`,xS=F.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${ta["spacing-12"]};
    color: ${Qi.text};
`,wS=F.div`
    width: 1px;
    background: ${Qi.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return O`
                display: none;
            `}}

    ${e=>"right"===e.$position?O`
                    margin-left: ${ta["spacing-12"]};
                `:O`
                    margin-right: ${ta["spacing-12"]};
                `}
`,$S=o.forwardRef(((r,n)=>{var{addon:o,error:i,onChange:a,readOnly:l,disabled:d,className:u,onBlur:f,"data-testid":h,"aria-labelledby":p,"aria-describedby":m,"aria-invalid":b,"aria-label":v}=r,y=ct(r,["addon","error","onChange","readOnly","disabled","className","onBlur","data-testid","aria-labelledby","aria-describedby","aria-invalid","aria-label"]);const{valueExtractor:x,listExtractor:w,enableSearch:$,hideNoResultsDisplay:C,noResultsDescription:S,searchPlaceholder:D,searchFunction:k,onSearch:E,placeholder:F="Select",displayValueExtractor:O,"data-selector-testid":_,options:T,selectedOption:I,onSelectOption:M,optionsLoadState:A,optionTruncationType:j,onRetry:B,onHideOptions:R,onShowOptions:z,dropdownZIndex:P,dropdownRootNode:L,"aria-label":N}=o.attributes,{position:H}=o,[W,Y]=g(I),[V,U]=g(!1),[K,q]=g(!1),[G]=g((()=>Dd.generate())),Z=`${G}-listbox`,Q=`${G}-instruction`,X=`${G}-combobox-label`,J=`${G}-textbox-label`,ee=s(null),te=s(null),re=s(null);c((()=>{Y(I)}),[I]);const ne=()=>{if(W)return O?O(W):x?x(W):W.toString()},oe=e=>{e?null==z||z():null==R||R()},ie=(e,t)=>{var r;null===(r=re.current)||void 0===r||r.focus(),Y(e),U(!1),oe(!1),null==M||M(e,t)},ae=()=>{V&&(U(!1),oe(!1))},se=()=>{K||V||q(!0)},le=e=>{K&&!V&&ee.current&&!ee.current.contains(e.relatedTarget)&&(q(!1),null==f||f())},ce=()=>{U(!0),oe(!0),q(!0)},de=e=>{U(!1),oe(!1),"click"!==e&&(q(!1),null==f||f())},ue=()=>{var e;null===(e=re.current)||void 0===e||e.focus(),U(!1),oe(!1)},fe=()=>t("div",{ref:ee,tabIndex:-1,onFocus:se,onBlur:le,children:[e(nC,{ref:re,disabled:d,expanded:V,listboxId:Z,popupRole:"listbox",readOnly:l,"aria-labelledby":Zu(p,X),"aria-describedby":Zu(m,Q),"aria-invalid":b,children:e(Pu,{$disabled:d,children:W?e(Lu,{children:ne()}):e(Nu,{children:F})})}),e(qu,{id:Q,children:"Press space to open options"})]}),he=()=>e(eC,{listboxId:Z,listItems:T,onSelectItem:ie,onDismiss:ae,valueExtractor:x,listExtractor:w,enableSearch:$,hideNoResultsDisplay:C,noResultsDescription:S,searchPlaceholder:D,searchFunction:k,onSearch:E,selectedItems:W?[W]:[],itemsLoadState:A,itemTruncationType:j,onRetry:B,matchElementWidth:!0});return e(_$,{children:t(bS,{$focused:K,$disabled:d,$readOnly:l,$error:i,$position:H,ref:te,className:u,"data-testid":h,children:[e(qu,{"aria-hidden":!0,id:X,children:N}),e(vS,{"data-testid":_,children:l?W?e(xS,{"data-testid":"selector-label",tabIndex:0,role:"combobox","aria-haspopup":"listbox","aria-readonly":!0,"aria-expanded":!1,"aria-labelledby":p,"aria-describedby":m,"aria-invalid":b,children:e(Lu,{children:ne()})}):null:e(Uu,{enabled:!l&&!d,isOpen:V,renderElement:fe,renderDropdown:he,onOpen:ce,onClose:de,onDismiss:ue,clickToToggle:!0,offset:8,alignment:"right"===H?"right":"left",fitAvailableHeight:!0,customZIndex:P,rootNode:L,positionRef:te})}),e(wS,{$readOnly:l,$position:H}),e(qu,{"aria-hidden":!0,id:J,children:v}),e(yS,Object.assign({ref:n},y,{$position:H,readOnly:l,disabled:d,error:i,onChange:e=>{a&&a(e)},"data-testid":"input",styleType:"no-border","aria-labelledby":Zu(p,J),"aria-describedby":m,"aria-invalid":b}))]})})})),CS=F(Sh)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${e=>e.$readOnly?"0":ta["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,SS=F(Sh)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${e=>e.$readOnly?"0":ta["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,DS=F(tg)``,kS=F.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Xi["body-baseline-regular"]}
    color: ${Qi.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return O`
                color: ${Qi["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?O`
                    margin-left: ${e.$readOnly?ta["spacing-4"]:ta["spacing-12"]};
                `:O`
                    margin-right: ${e.$readOnly?ta["spacing-4"]:ta["spacing-12"]};
                `};
`,ES=o.forwardRef(((r,n)=>{var{addon:o,error:i,className:a}=r,s=ct(r,["addon","error","className"]);const l=()=>e(SS,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a,children:e(DS,Object.assign({ref:n},s,{"data-testid":"input",styleType:"no-border"}))});if(!o)return l();{const{type:r="label",position:c="left"}=o,{allowClear:d}=s;switch(r){case"list":{const t=o.attributes;return t.options&&t.options.length>0?e($S,Object.assign({ref:n,addon:o,error:i,className:a},s)):l()}case"custom":{const r=o.attributes;return r.children?t(CS,{$error:i,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[e(kS,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.children}),e(DS,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}default:{const r=o.attributes;return r.value?t(CS,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[e(kS,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.value}),e(DS,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}}}})),FS=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i,"data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y}=t,x=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]),[w]=g((()=>`form-field-${Dd.generate()}`)),$=null!=i?i:w;return e(_u,{id:$,"data-testid":s,label:n,errorMessage:o,"data-error-testid":a,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(ES,Object.assign({ref:r,id:`${$}-base`,"data-testid":s?`${s}-base`:void 0,"aria-labelledby":`${$}-label`,error:!!o},x))})})),OS=F(ES)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":ta["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,_S=F.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=Qi.icon,$activeColor:r=Qi["icon-primary"]})=>e?t:r};
    padding: ${ta["spacing-12"]} ${ta["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,TS=F.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,IS=F(Ca.BodyBL)`
    color: ${Qi["text-subtler"]};
`,MS=F(nf)`
    margin-right: ${ta["spacing-8"]};
    color: ${Qi.icon};
`,AS=F.span`
    color: ${Qi["text-primary"]};
    text-decoration: underline;
    font-weight: ${Xi.Spec["weight-semibold"]};
`,jS=F.span`
    display: flex;
    align-items: center;
    margin-right: ${ta["spacing-8"]};
`,BS=F(De)`
    color: ${Qi["icon-warning"]};
    margin-right: ${ta["spacing-8"]};
    height: 1em;
    width: 1em;
`,RS=F.span`
    color: ${Qi["text-warning"]};
`,zS=F(Eh)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${Xi["body-baseline-regular"]}

    &:hover, &:active, &:focus {
        ${AS} {
            color: ${Qi["text-hover"]};
        }
    }
`;var PS,LS,NS={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */PS=NS,LS=NS.exports,function(){var e,t="Expected a function",r="__lodash_hash_undefined__",n="__lodash_placeholder__",o=16,i=32,a=64,s=128,l=256,c=1/0,d=9007199254740991,u=NaN,f=4294967295,h=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",o],["flip",512],["partial",i],["partialRight",a],["rearg",l]],p="[object Arguments]",g="[object Array]",m="[object Boolean]",b="[object Date]",v="[object Error]",y="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",C="[object Object]",S="[object Promise]",D="[object RegExp]",k="[object Set]",E="[object String]",F="[object Symbol]",O="[object WeakMap]",_="[object ArrayBuffer]",T="[object DataView]",I="[object Float32Array]",M="[object Float64Array]",A="[object Int8Array]",j="[object Int16Array]",B="[object Int32Array]",R="[object Uint8Array]",z="[object Uint8ClampedArray]",P="[object Uint16Array]",L="[object Uint32Array]",N=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Y=/&(?:amp|lt|gt|quot|#39);/g,V=/[&<>"']/g,U=RegExp(Y.source),K=RegExp(V.source),q=/<%-([\s\S]+?)%>/g,G=/<%([\s\S]+?)%>/g,Z=/<%=([\s\S]+?)%>/g,Q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,X=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),re=/^\s+/,ne=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ie=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,ce=/\\(\\)?/g,de=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ue=/\w*$/,fe=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,pe=/^\[object .+?Constructor\]$/,ge=/^0o[0-7]+$/i,me=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",$e="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",De="\\ufe0e\\ufe0f",ke="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ee="['’]",Fe="["+xe+"]",Oe="["+ke+"]",_e="["+we+"]",Te="\\d+",Ie="["+$e+"]",Me="["+Ce+"]",Ae="[^"+xe+ke+Te+$e+Ce+Se+"]",je="\\ud83c[\\udffb-\\udfff]",Re="[^"+xe+"]",ze="(?:\\ud83c[\\udde6-\\uddff]){2}",Pe="[\\ud800-\\udbff][\\udc00-\\udfff]",Le="["+Se+"]",Ne="\\u200d",He="(?:"+Me+"|"+Ae+")",We="(?:"+Le+"|"+Ae+")",Ye="(?:['’](?:d|ll|m|re|s|t|ve))?",Ve="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ue="(?:"+_e+"|"+je+")?",Ke="["+De+"]?",qe=Ke+Ue+"(?:"+Ne+"(?:"+[Re,ze,Pe].join("|")+")"+Ke+Ue+")*",Ge="(?:"+[Ie,ze,Pe].join("|")+")"+qe,Ze="(?:"+[Re+_e+"?",_e,ze,Pe,Fe].join("|")+")",Qe=RegExp(Ee,"g"),Xe=RegExp(_e,"g"),Je=RegExp(je+"(?="+je+")|"+Ze+qe,"g"),et=RegExp([Le+"?"+Me+"+"+Ye+"(?="+[Oe,Le,"$"].join("|")+")",We+"+"+Ve+"(?="+[Oe,Le+He,"$"].join("|")+")",Le+"?"+He+"+"+Ye,Le+"+"+Ve,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Te,Ge].join("|"),"g"),tt=RegExp("["+Ne+xe+we+De+"]"),rt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ot=-1,it={};it[I]=it[M]=it[A]=it[j]=it[B]=it[R]=it[z]=it[P]=it[L]=!0,it[p]=it[g]=it[_]=it[m]=it[T]=it[b]=it[v]=it[y]=it[w]=it[$]=it[C]=it[D]=it[k]=it[E]=it[O]=!1;var at={};at[p]=at[g]=at[_]=at[T]=at[m]=at[b]=at[I]=at[M]=at[A]=at[j]=at[B]=at[w]=at[$]=at[C]=at[D]=at[k]=at[E]=at[F]=at[R]=at[z]=at[P]=at[L]=!0,at[v]=at[y]=at[O]=!1;var st={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},lt=parseFloat,ct=parseInt,dt="object"==typeof Be&&Be&&Be.Object===Object&&Be,ut="object"==typeof self&&self&&self.Object===Object&&self,ft=dt||ut||Function("return this")(),ht=LS&&!LS.nodeType&&LS,pt=ht&&PS&&!PS.nodeType&&PS,gt=pt&&pt.exports===ht,mt=gt&&dt.process,bt=function(){try{var e=pt&&pt.require&&pt.require("util").types;return e||mt&&mt.binding&&mt.binding("util")}catch(e){}}(),vt=bt&&bt.isArrayBuffer,yt=bt&&bt.isDate,xt=bt&&bt.isMap,wt=bt&&bt.isRegExp,$t=bt&&bt.isSet,Ct=bt&&bt.isTypedArray;function St(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function Dt(e,t,r,n){for(var o=-1,i=null==e?0:e.length;++o<i;){var a=e[o];t(n,a,r(a),e)}return n}function kt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Et(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Ft(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Ot(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}function _t(e,t){return!(null==e||!e.length)&&Lt(e,t,0)>-1}function Tt(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}function It(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function Mt(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}function At(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function jt(e,t,r,n){var o=null==e?0:e.length;for(n&&o&&(r=e[--o]);o--;)r=t(r,e[o],o,e);return r}function Bt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var Rt=Yt("length");function zt(e,t,r){var n;return r(e,(function(e,r,o){if(t(e,r,o))return n=r,!1})),n}function Pt(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}function Lt(e,t,r){return t==t?function(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}(e,t,r):Pt(e,Ht,r)}function Nt(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function Ht(e){return e!=e}function Wt(e,t){var r=null==e?0:e.length;return r?Kt(e,t)/r:u}function Yt(t){return function(r){return null==r?e:r[t]}}function Vt(t){return function(r){return null==t?e:t[r]}}function Ut(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r}function Kt(t,r){for(var n,o=-1,i=t.length;++o<i;){var a=r(t[o]);a!==e&&(n=n===e?a:n+a)}return n}function qt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Gt(e){return e?e.slice(0,fr(e)+1).replace(re,""):e}function Zt(e){return function(t){return e(t)}}function Qt(e,t){return It(t,(function(t){return e[t]}))}function Xt(e,t){return e.has(t)}function Jt(e,t){for(var r=-1,n=e.length;++r<n&&Lt(t,e[r],0)>-1;);return r}function er(e,t){for(var r=e.length;r--&&Lt(t,e[r],0)>-1;);return r}var tr=Vt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),rr=Vt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function nr(e){return"\\"+st[e]}function or(e){return tt.test(e)}function ir(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function ar(e,t){return function(r){return e(t(r))}}function sr(e,t){for(var r=-1,o=e.length,i=0,a=[];++r<o;){var s=e[r];s!==t&&s!==n||(e[r]=n,a[i++]=r)}return a}function lr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function cr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function dr(e){return or(e)?function(e){for(var t=Je.lastIndex=0;Je.test(e);)++t;return t}(e):Rt(e)}function ur(e){return or(e)?function(e){return e.match(Je)||[]}(e):function(e){return e.split("")}(e)}function fr(e){for(var t=e.length;t--&&ne.test(e.charAt(t)););return t}var hr=Vt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),pr=function ne(xe){var we=(xe=null==xe?ft:pr.defaults(ft.Object(),xe,pr.pick(ft,nt))).Array,$e=xe.Date,Ce=xe.Error,Se=xe.Function,De=xe.Math,ke=xe.Object,Ee=xe.RegExp,Fe=xe.String,Oe=xe.TypeError,_e=we.prototype,Te=Se.prototype,Ie=ke.prototype,Me=xe["__core-js_shared__"],Ae=Te.toString,je=Ie.hasOwnProperty,Be=0,Re=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ze=Ie.toString,Pe=Ae.call(ke),Le=ft._,Ne=Ee("^"+Ae.call(je).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=gt?xe.Buffer:e,We=xe.Symbol,Ye=xe.Uint8Array,Ve=He?He.allocUnsafe:e,Ue=ar(ke.getPrototypeOf,ke),Ke=ke.create,qe=Ie.propertyIsEnumerable,Ge=_e.splice,Ze=We?We.isConcatSpreadable:e,Je=We?We.iterator:e,tt=We?We.toStringTag:e,st=function(){try{var e=fi(ke,"defineProperty");return e({},"",{}),e}catch(e){}}(),dt=xe.clearTimeout!==ft.clearTimeout&&xe.clearTimeout,ut=$e&&$e.now!==ft.Date.now&&$e.now,ht=xe.setTimeout!==ft.setTimeout&&xe.setTimeout,pt=De.ceil,mt=De.floor,bt=ke.getOwnPropertySymbols,Rt=He?He.isBuffer:e,Vt=xe.isFinite,gr=_e.join,mr=ar(ke.keys,ke),br=De.max,vr=De.min,yr=$e.now,xr=xe.parseInt,wr=De.random,$r=_e.reverse,Cr=fi(xe,"DataView"),Sr=fi(xe,"Map"),Dr=fi(xe,"Promise"),kr=fi(xe,"Set"),Er=fi(xe,"WeakMap"),Fr=fi(ke,"create"),Or=Er&&new Er,_r={},Tr=zi(Cr),Ir=zi(Sr),Mr=zi(Dr),Ar=zi(kr),jr=zi(Er),Br=We?We.prototype:e,Rr=Br?Br.valueOf:e,zr=Br?Br.toString:e;function Pr(e){if(ts(e)&&!Ya(e)&&!(e instanceof Wr)){if(e instanceof Hr)return e;if(je.call(e,"__wrapped__"))return Pi(e)}return new Hr(e)}var Lr=function(){function t(){}return function(r){if(!es(r))return{};if(Ke)return Ke(r);t.prototype=r;var n=new t;return t.prototype=e,n}}();function Nr(){}function Hr(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}function Wr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=f,this.__views__=[]}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function qr(e){var t=this.__data__=new Vr(e);this.size=t.size}function Gr(e,t){var r=Ya(e),n=!r&&Wa(e),o=!r&&!n&&qa(e),i=!r&&!n&&!o&&cs(e),a=r||n||o||i,s=a?qt(e.length,Fe):[],l=s.length;for(var c in e)!t&&!je.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||yi(c,l))||s.push(c);return s}function Zr(t){var r=t.length;return r?t[qn(0,r-1)]:e}function Qr(e,t){return ji(_o(e),sn(t,0,e.length))}function Xr(e){return ji(_o(e))}function Jr(t,r,n){(n!==e&&!La(t[r],n)||n===e&&!(r in t))&&on(t,r,n)}function en(t,r,n){var o=t[r];je.call(t,r)&&La(o,n)&&(n!==e||r in t)||on(t,r,n)}function tn(e,t){for(var r=e.length;r--;)if(La(e[r][0],t))return r;return-1}function rn(e,t,r,n){return fn(e,(function(e,o,i){t(n,e,r(e),i)})),n}function nn(e,t){return e&&To(t,Ts(t),e)}function on(e,t,r){"__proto__"==t&&st?st(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(t,r){for(var n=-1,o=r.length,i=we(o),a=null==t;++n<o;)i[n]=a?e:ks(t,r[n]);return i}function sn(t,r,n){return t==t&&(n!==e&&(t=t<=n?t:n),r!==e&&(t=t>=r?t:r)),t}function ln(t,r,n,o,i,a){var s,l=1&r,c=2&r,d=4&r;if(n&&(s=i?n(t,o,i,a):n(t)),s!==e)return s;if(!es(t))return t;var u=Ya(t);if(u){if(s=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&je.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(t),!l)return _o(t,s)}else{var f=gi(t),h=f==y||f==x;if(qa(t))return So(t,l);if(f==C||f==p||h&&!i){if(s=c||h?{}:bi(t),!l)return c?function(e,t){return To(e,pi(e),t)}(t,function(e,t){return e&&To(t,Is(t),e)}(s,t)):function(e,t){return To(e,hi(e),t)}(t,nn(s,t))}else{if(!at[f])return i?t:{};s=function(e,t,r){var n,o=e.constructor;switch(t){case _:return Do(e);case m:case b:return new o(+e);case T:return function(e,t){var r=t?Do(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case I:case M:case A:case j:case B:case R:case z:case P:case L:return ko(e,r);case w:return new o;case $:case E:return new o(e);case D:return function(e){var t=new e.constructor(e.source,ue.exec(e));return t.lastIndex=e.lastIndex,t}(e);case k:return new o;case F:return n=e,Rr?ke(Rr.call(n)):{}}}(t,f,l)}}a||(a=new qr);var g=a.get(t);if(g)return g;a.set(t,s),as(t)?t.forEach((function(e){s.add(ln(e,r,n,e,t,a))})):rs(t)&&t.forEach((function(e,o){s.set(o,ln(e,r,n,o,t,a))}));var v=u?e:(d?c?ii:oi:c?Is:Ts)(t);return kt(v||t,(function(e,o){v&&(e=t[o=e]),en(s,o,ln(e,r,n,o,t,a))})),s}function cn(t,r,n){var o=n.length;if(null==t)return!o;for(t=ke(t);o--;){var i=n[o],a=r[i],s=t[i];if(s===e&&!(i in t)||!a(s))return!1}return!0}function dn(r,n,o){if("function"!=typeof r)throw new Oe(t);return Ti((function(){r.apply(e,o)}),n)}function un(e,t,r,n){var o=-1,i=_t,a=!0,s=e.length,l=[],c=t.length;if(!s)return l;r&&(t=It(t,Zt(r))),n?(i=Tt,a=!1):t.length>=200&&(i=Xt,a=!1,t=new Kr(t));e:for(;++o<s;){var d=e[o],u=null==r?d:r(d);if(d=n||0!==d?d:0,a&&u==u){for(var f=c;f--;)if(t[f]===u)continue e;l.push(d)}else i(t,u,n)||l.push(d)}return l}Pr.templateSettings={escape:q,evaluate:G,interpolate:Z,variable:"",imports:{_:Pr}},Pr.prototype=Nr.prototype,Pr.prototype.constructor=Pr,Hr.prototype=Lr(Nr.prototype),Hr.prototype.constructor=Hr,Wr.prototype=Lr(Nr.prototype),Wr.prototype.constructor=Wr,Yr.prototype.clear=function(){this.__data__=Fr?Fr(null):{},this.size=0},Yr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yr.prototype.get=function(t){var n=this.__data__;if(Fr){var o=n[t];return o===r?e:o}return je.call(n,t)?n[t]:e},Yr.prototype.has=function(t){var r=this.__data__;return Fr?r[t]!==e:je.call(r,t)},Yr.prototype.set=function(t,n){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=Fr&&n===e?r:n,this},Vr.prototype.clear=function(){this.__data__=[],this.size=0},Vr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0||(r==t.length-1?t.pop():Ge.call(t,r,1),--this.size,0))},Vr.prototype.get=function(t){var r=this.__data__,n=tn(r,t);return n<0?e:r[n][1]},Vr.prototype.has=function(e){return tn(this.__data__,e)>-1},Vr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Yr,map:new(Sr||Vr),string:new Yr}},Ur.prototype.delete=function(e){var t=di(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return di(this,e).get(e)},Ur.prototype.has=function(e){return di(this,e).has(e)},Ur.prototype.set=function(e,t){var r=di(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,r),this},Kr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.clear=function(){this.__data__=new Vr,this.size=0},qr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},qr.prototype.get=function(e){return this.__data__.get(e)},qr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Vr){var n=r.__data__;if(!Sr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var fn=Ao(xn),hn=Ao(wn,!0);function pn(e,t){var r=!0;return fn(e,(function(e,n,o){return r=!!t(e,n,o)})),r}function gn(t,r,n){for(var o=-1,i=t.length;++o<i;){var a=t[o],s=r(a);if(null!=s&&(l===e?s==s&&!ls(s):n(s,l)))var l=s,c=a}return c}function mn(e,t){var r=[];return fn(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}function bn(e,t,r,n,o){var i=-1,a=e.length;for(r||(r=vi),o||(o=[]);++i<a;){var s=e[i];t>0&&r(s)?t>1?bn(s,t-1,r,n,o):Mt(o,s):n||(o[o.length]=s)}return o}var vn=jo(),yn=jo(!0);function xn(e,t){return e&&vn(e,t,Ts)}function wn(e,t){return e&&yn(e,t,Ts)}function $n(e,t){return Ot(t,(function(t){return Qa(e[t])}))}function Cn(t,r){for(var n=0,o=(r=xo(r,t)).length;null!=t&&n<o;)t=t[Ri(r[n++])];return n&&n==o?t:e}function Sn(e,t,r){var n=t(e);return Ya(e)?n:Mt(n,r(e))}function Dn(t){return null==t?t===e?"[object Undefined]":"[object Null]":tt&&tt in ke(t)?function(t){var r=je.call(t,tt),n=t[tt];try{t[tt]=e;var o=!0}catch(e){}var i=ze.call(t);return o&&(r?t[tt]=n:delete t[tt]),i}(t):function(e){return ze.call(e)}(t)}function kn(e,t){return e>t}function En(e,t){return null!=e&&je.call(e,t)}function Fn(e,t){return null!=e&&t in ke(e)}function On(t,r,n){for(var o=n?Tt:_t,i=t[0].length,a=t.length,s=a,l=we(a),c=1/0,d=[];s--;){var u=t[s];s&&r&&(u=It(u,Zt(r))),c=vr(u.length,c),l[s]=!n&&(r||i>=120&&u.length>=120)?new Kr(s&&u):e}u=t[0];var f=-1,h=l[0];e:for(;++f<i&&d.length<c;){var p=u[f],g=r?r(p):p;if(p=n||0!==p?p:0,!(h?Xt(h,g):o(d,g,n))){for(s=a;--s;){var m=l[s];if(!(m?Xt(m,g):o(t[s],g,n)))continue e}h&&h.push(g),d.push(p)}}return d}function _n(t,r,n){var o=null==(t=Fi(t,r=xo(r,t)))?t:t[Ri(Zi(r))];return null==o?e:St(o,t,n)}function Tn(e){return ts(e)&&Dn(e)==p}function In(t,r,n,o,i){return t===r||(null==t||null==r||!ts(t)&&!ts(r)?t!=t&&r!=r:function(t,r,n,o,i,a){var s=Ya(t),l=Ya(r),c=s?g:gi(t),d=l?g:gi(r),u=(c=c==p?C:c)==C,f=(d=d==p?C:d)==C,h=c==d;if(h&&qa(t)){if(!qa(r))return!1;s=!0,u=!1}if(h&&!u)return a||(a=new qr),s||cs(t)?ri(t,r,n,o,i,a):function(e,t,r,n,o,i,a){switch(r){case T:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case _:return!(e.byteLength!=t.byteLength||!i(new Ye(e),new Ye(t)));case m:case b:case $:return La(+e,+t);case v:return e.name==t.name&&e.message==t.message;case D:case E:return e==t+"";case w:var s=ir;case k:var l=1&n;if(s||(s=lr),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=ri(s(e),s(t),n,o,i,a);return a.delete(e),d;case F:if(Rr)return Rr.call(e)==Rr.call(t)}return!1}(t,r,c,n,o,i,a);if(!(1&n)){var y=u&&je.call(t,"__wrapped__"),x=f&&je.call(r,"__wrapped__");if(y||x){var S=y?t.value():t,O=x?r.value():r;return a||(a=new qr),i(S,O,n,o,a)}}return!!h&&(a||(a=new qr),function(t,r,n,o,i,a){var s=1&n,l=oi(t),c=l.length,d=oi(r),u=d.length;if(c!=u&&!s)return!1;for(var f=c;f--;){var h=l[f];if(!(s?h in r:je.call(r,h)))return!1}var p=a.get(t),g=a.get(r);if(p&&g)return p==r&&g==t;var m=!0;a.set(t,r),a.set(r,t);for(var b=s;++f<c;){var v=t[h=l[f]],y=r[h];if(o)var x=s?o(y,v,h,r,t,a):o(v,y,h,t,r,a);if(!(x===e?v===y||i(v,y,n,o,a):x)){m=!1;break}b||(b="constructor"==h)}if(m&&!b){var w=t.constructor,$=r.constructor;w==$||!("constructor"in t)||!("constructor"in r)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(t),a.delete(r),m}(t,r,n,o,i,a))}(t,r,n,o,In,i))}function Mn(t,r,n,o){var i=n.length,a=i,s=!o;if(null==t)return!a;for(t=ke(t);i--;){var l=n[i];if(s&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++i<a;){var c=(l=n[i])[0],d=t[c],u=l[1];if(s&&l[2]){if(d===e&&!(c in t))return!1}else{var f=new qr;if(o)var h=o(d,u,c,t,r,f);if(!(h===e?In(u,d,3,o,f):h))return!1}}return!0}function An(e){return!(!es(e)||(t=e,Re&&Re in t))&&(Qa(e)?Ne:pe).test(zi(e));var t}function jn(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Ya(e)?Nn(e[0],e[1]):Ln(e):fl(e)}function Bn(e){if(!Si(e))return mr(e);var t=[];for(var r in ke(e))je.call(e,r)&&"constructor"!=r&&t.push(r);return t}function Rn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in ke(e))t.push(r);return t}(e);var t=Si(e),r=[];for(var n in e)("constructor"!=n||!t&&je.call(e,n))&&r.push(n);return r}function zn(e,t){return e<t}function Pn(e,t){var r=-1,n=Ua(e)?we(e.length):[];return fn(e,(function(e,o,i){n[++r]=t(e,o,i)})),n}function Ln(e){var t=ui(e);return 1==t.length&&t[0][2]?ki(t[0][0],t[0][1]):function(r){return r===e||Mn(r,e,t)}}function Nn(t,r){return wi(t)&&Di(r)?ki(Ri(t),r):function(n){var o=ks(n,t);return o===e&&o===r?Es(n,t):In(r,o,3)}}function Hn(t,r,n,o,i){t!==r&&vn(r,(function(a,s){if(i||(i=new qr),es(a))!function(t,r,n,o,i,a,s){var l=Oi(t,n),c=Oi(r,n),d=s.get(c);if(d)Jr(t,n,d);else{var u=a?a(l,c,n+"",t,r,s):e,f=u===e;if(f){var h=Ya(c),p=!h&&qa(c),g=!h&&!p&&cs(c);u=c,h||p||g?Ya(l)?u=l:Ka(l)?u=_o(l):p?(f=!1,u=So(c,!0)):g?(f=!1,u=ko(c,!0)):u=[]:os(c)||Wa(c)?(u=l,Wa(l)?u=bs(l):es(l)&&!Qa(l)||(u=bi(c))):f=!1}f&&(s.set(c,u),i(u,c,o,a,s),s.delete(c)),Jr(t,n,u)}}(t,r,s,n,Hn,o,i);else{var l=o?o(Oi(t,s),a,s+"",t,r,i):e;l===e&&(l=a),Jr(t,s,l)}}),Is)}function Wn(t,r){var n=t.length;if(n)return yi(r+=r<0?n:0,n)?t[r]:e}function Yn(e,t,r){t=t.length?It(t,(function(e){return Ya(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=It(t,Zt(ci()));var o=Pn(e,(function(e,r,o){var i=It(t,(function(t){return t(e)}));return{criteria:i,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(o,(function(e,t){return function(e,t,r){for(var n=-1,o=e.criteria,i=t.criteria,a=o.length,s=r.length;++n<a;){var l=Eo(o[n],i[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Vn(e,t,r){for(var n=-1,o=t.length,i={};++n<o;){var a=t[n],s=Cn(e,a);r(s,a)&&Jn(i,xo(a,e),s)}return i}function Un(e,t,r,n){var o=n?Nt:Lt,i=-1,a=t.length,s=e;for(e===t&&(t=_o(t)),r&&(s=It(e,Zt(r)));++i<a;)for(var l=0,c=t[i],d=r?r(c):c;(l=o(s,d,l,n))>-1;)s!==e&&Ge.call(s,l,1),Ge.call(e,l,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var o=t[r];if(r==n||o!==i){var i=o;yi(o)?Ge.call(e,o,1):fo(e,o)}}return e}function qn(e,t){return e+mt(wr()*(t-e+1))}function Gn(e,t){var r="";if(!e||t<1||t>d)return r;do{t%2&&(r+=e),(t=mt(t/2))&&(e+=e)}while(t);return r}function Zn(e,t){return Ii(Ei(e,t,nl),e+"")}function Qn(e){return Zr(Ls(e))}function Xn(e,t){var r=Ls(e);return ji(r,sn(t,0,r.length))}function Jn(t,r,n,o){if(!es(t))return t;for(var i=-1,a=(r=xo(r,t)).length,s=a-1,l=t;null!=l&&++i<a;){var c=Ri(r[i]),d=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(i!=s){var u=l[c];(d=o?o(u,c,l):e)===e&&(d=es(u)?u:yi(r[i+1])?[]:{})}en(l,c,d),l=l[c]}return t}var eo=Or?function(e,t){return Or.set(e,t),e}:nl,to=st?function(e,t){return st(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ro(e){return ji(Ls(e))}function no(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=we(o);++n<o;)i[n]=e[n+t];return i}function oo(e,t){var r;return fn(e,(function(e,n,o){return!(r=t(e,n,o))})),!!r}function io(e,t,r){var n=0,o=null==e?n:e.length;if("number"==typeof t&&t==t&&o<=2147483647){for(;n<o;){var i=n+o>>>1,a=e[i];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=i+1:o=i}return o}return ao(e,t,nl,r)}function ao(t,r,n,o){var i=0,a=null==t?0:t.length;if(0===a)return 0;for(var s=(r=n(r))!=r,l=null===r,c=ls(r),d=r===e;i<a;){var u=mt((i+a)/2),f=n(t[u]),h=f!==e,p=null===f,g=f==f,m=ls(f);if(s)var b=o||g;else b=d?g&&(o||h):l?g&&h&&(o||!p):c?g&&h&&!p&&(o||!m):!p&&!m&&(o?f<=r:f<r);b?i=u+1:a=u}return vr(a,4294967294)}function so(e,t){for(var r=-1,n=e.length,o=0,i=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!La(s,l)){var l=s;i[o++]=0===a?0:a}}return i}function lo(e){return"number"==typeof e?e:ls(e)?u:+e}function co(e){if("string"==typeof e)return e;if(Ya(e))return It(e,co)+"";if(ls(e))return zr?zr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function uo(e,t,r){var n=-1,o=_t,i=e.length,a=!0,s=[],l=s;if(r)a=!1,o=Tt;else if(i>=200){var c=t?null:Zo(e);if(c)return lr(c);a=!1,o=Xt,l=new Kr}else l=t?[]:s;e:for(;++n<i;){var d=e[n],u=t?t(d):d;if(d=r||0!==d?d:0,a&&u==u){for(var f=l.length;f--;)if(l[f]===u)continue e;t&&l.push(u),s.push(d)}else o(l,u,r)||(l!==s&&l.push(u),s.push(d))}return s}function fo(e,t){return null==(e=Fi(e,t=xo(t,e)))||delete e[Ri(Zi(t))]}function ho(e,t,r,n){return Jn(e,t,r(Cn(e,t)),n)}function po(e,t,r,n){for(var o=e.length,i=n?o:-1;(n?i--:++i<o)&&t(e[i],i,e););return r?no(e,n?0:i,n?i+1:o):no(e,n?i+1:0,n?o:i)}function go(e,t){var r=e;return r instanceof Wr&&(r=r.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,Mt([e],t.args))}),r)}function mo(e,t,r){var n=e.length;if(n<2)return n?uo(e[0]):[];for(var o=-1,i=we(n);++o<n;)for(var a=e[o],s=-1;++s<n;)s!=o&&(i[o]=un(i[o]||a,e[s],t,r));return uo(bn(i,1),t,r)}function bo(t,r,n){for(var o=-1,i=t.length,a=r.length,s={};++o<i;){var l=o<a?r[o]:e;n(s,t[o],l)}return s}function vo(e){return Ka(e)?e:[]}function yo(e){return"function"==typeof e?e:nl}function xo(e,t){return Ya(e)?e:wi(e,t)?[e]:Bi(vs(e))}var wo=Zn;function $o(t,r,n){var o=t.length;return n=n===e?o:n,!r&&n>=o?t:no(t,r,n)}var Co=dt||function(e){return ft.clearTimeout(e)};function So(e,t){if(t)return e.slice();var r=e.length,n=Ve?Ve(r):new e.constructor(r);return e.copy(n),n}function Do(e){var t=new e.constructor(e.byteLength);return new Ye(t).set(new Ye(e)),t}function ko(e,t){var r=t?Do(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Eo(t,r){if(t!==r){var n=t!==e,o=null===t,i=t==t,a=ls(t),s=r!==e,l=null===r,c=r==r,d=ls(r);if(!l&&!d&&!a&&t>r||a&&s&&c&&!l&&!d||o&&s&&c||!n&&c||!i)return 1;if(!o&&!a&&!d&&t<r||d&&n&&i&&!o&&!a||l&&n&&i||!s&&i||!c)return-1}return 0}function Fo(e,t,r,n){for(var o=-1,i=e.length,a=r.length,s=-1,l=t.length,c=br(i-a,0),d=we(l+c),u=!n;++s<l;)d[s]=t[s];for(;++o<a;)(u||o<i)&&(d[r[o]]=e[o]);for(;c--;)d[s++]=e[o++];return d}function Oo(e,t,r,n){for(var o=-1,i=e.length,a=-1,s=r.length,l=-1,c=t.length,d=br(i-s,0),u=we(d+c),f=!n;++o<d;)u[o]=e[o];for(var h=o;++l<c;)u[h+l]=t[l];for(;++a<s;)(f||o<i)&&(u[h+r[a]]=e[o++]);return u}function _o(e,t){var r=-1,n=e.length;for(t||(t=we(n));++r<n;)t[r]=e[r];return t}function To(t,r,n,o){var i=!n;n||(n={});for(var a=-1,s=r.length;++a<s;){var l=r[a],c=o?o(n[l],t[l],l,n,t):e;c===e&&(c=t[l]),i?on(n,l,c):en(n,l,c)}return n}function Io(e,t){return function(r,n){var o=Ya(r)?Dt:rn,i=t?t():{};return o(r,e,ci(n,2),i)}}function Mo(t){return Zn((function(r,n){var o=-1,i=n.length,a=i>1?n[i-1]:e,s=i>2?n[2]:e;for(a=t.length>3&&"function"==typeof a?(i--,a):e,s&&xi(n[0],n[1],s)&&(a=i<3?e:a,i=1),r=ke(r);++o<i;){var l=n[o];l&&t(r,l,o,a)}return r}))}function Ao(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=ke(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}function jo(e){return function(t,r,n){for(var o=-1,i=ke(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}}function Bo(t){return function(r){var n=or(r=vs(r))?ur(r):e,o=n?n[0]:r.charAt(0),i=n?$o(n,1).join(""):r.slice(1);return o[t]()+i}}function Ro(e){return function(t){return At(Qs(Ws(t).replace(Qe,"")),e,"")}}function zo(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Lr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function Po(t){return function(r,n,o){var i=ke(r);if(!Ua(r)){var a=ci(n,3);r=Ts(r),n=function(e){return a(i[e],e,i)}}var s=t(r,n,o);return s>-1?i[a?r[s]:s]:e}}function Lo(r){return ni((function(n){var o=n.length,i=o,a=Hr.prototype.thru;for(r&&n.reverse();i--;){var s=n[i];if("function"!=typeof s)throw new Oe(t);if(a&&!l&&"wrapper"==si(s))var l=new Hr([],!0)}for(i=l?i:o;++i<o;){var c=si(s=n[i]),d="wrapper"==c?ai(s):e;l=d&&$i(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[si(d[0])].apply(l,d[3]):1==s.length&&$i(s)?l[c]():l.thru(s)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Ya(t))return l.plant(t).value();for(var r=0,i=o?n[r].apply(this,e):t;++r<o;)i=n[r].call(this,i);return i}}))}function No(t,r,n,o,i,a,l,c,d,u){var f=r&s,h=1&r,p=2&r,g=24&r,m=512&r,b=p?e:zo(t);return function s(){for(var v=arguments.length,y=we(v),x=v;x--;)y[x]=arguments[x];if(g)var w=li(s),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,w);if(o&&(y=Fo(y,o,i,g)),a&&(y=Oo(y,a,l,g)),v-=$,g&&v<u){var C=sr(y,w);return qo(t,r,No,s.placeholder,n,y,C,c,d,u-v)}var S=h?n:this,D=p?S[t]:t;return v=y.length,c?y=function(t,r){for(var n=t.length,o=vr(r.length,n),i=_o(t);o--;){var a=r[o];t[o]=yi(a,n)?i[a]:e}return t}(y,c):m&&v>1&&y.reverse(),f&&d<v&&(y.length=d),this&&this!==ft&&this instanceof s&&(D=b||zo(D)),D.apply(S,y)}}function Ho(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,o,i){t(n,r(e),o,i)})),n}(r,e,t(n),{})}}function Wo(t,r){return function(n,o){var i;if(n===e&&o===e)return r;if(n!==e&&(i=n),o!==e){if(i===e)return o;"string"==typeof n||"string"==typeof o?(n=co(n),o=co(o)):(n=lo(n),o=lo(o)),i=t(n,o)}return i}}function Yo(e){return ni((function(t){return t=It(t,Zt(ci())),Zn((function(r){var n=this;return e(t,(function(e){return St(e,n,r)}))}))}))}function Vo(t,r){var n=(r=r===e?" ":co(r)).length;if(n<2)return n?Gn(r,t):r;var o=Gn(r,pt(t/dr(r)));return or(r)?$o(ur(o),0,t).join(""):o.slice(0,t)}function Uo(t){return function(r,n,o){return o&&"number"!=typeof o&&xi(r,n,o)&&(n=o=e),r=hs(r),n===e?(n=r,r=0):n=hs(n),function(e,t,r,n){for(var o=-1,i=br(pt((t-e)/(r||1)),0),a=we(i);i--;)a[n?i:++o]=e,e+=r;return a}(r,n,o=o===e?r<n?1:-1:hs(o),t)}}function Ko(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ms(t),r=ms(r)),e(t,r)}}function qo(t,r,n,o,s,l,c,d,u,f){var h=8&r;r|=h?i:a,4&(r&=~(h?a:i))||(r&=-4);var p=[t,r,s,h?l:e,h?c:e,h?e:l,h?e:c,d,u,f],g=n.apply(e,p);return $i(t)&&_i(g,p),g.placeholder=o,Mi(g,t,r)}function Go(e){var t=De[e];return function(e,r){if(e=ms(e),(r=null==r?0:vr(ps(r),292))&&Vt(e)){var n=(vs(e)+"e").split("e");return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Zo=kr&&1/lr(new kr([,-0]))[1]==c?function(e){return new kr(e)}:ll;function Qo(e){return function(t){var r=gi(t);return r==w?ir(t):r==k?cr(t):function(e,t){return It(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Xo(r,c,d,u,f,h,p,g){var m=2&c;if(!m&&"function"!=typeof r)throw new Oe(t);var b=u?u.length:0;if(b||(c&=-97,u=f=e),p=p===e?p:br(ps(p),0),g=g===e?g:ps(g),b-=f?f.length:0,c&a){var v=u,y=f;u=f=e}var x=m?e:ai(r),w=[r,c,d,u,f,v,y,h,p,g];if(x&&function(e,t){var r=e[1],o=t[1],i=r|o,a=i<131,c=o==s&&8==r||o==s&&r==l&&e[7].length<=t[8]||384==o&&t[7].length<=t[8]&&8==r;if(!a&&!c)return e;1&o&&(e[2]=t[2],i|=1&r?0:4);var d=t[3];if(d){var u=e[3];e[3]=u?Fo(u,d,t[4]):d,e[4]=u?sr(e[3],n):t[4]}(d=t[5])&&(u=e[5],e[5]=u?Oo(u,d,t[6]):d,e[6]=u?sr(e[5],n):t[6]),(d=t[7])&&(e[7]=d),o&s&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}(w,x),r=w[0],c=w[1],d=w[2],u=w[3],f=w[4],!(g=w[9]=w[9]===e?m?0:r.length:br(w[9]-b,0))&&24&c&&(c&=-25),c&&1!=c)$=8==c||c==o?function(t,r,n){var o=zo(t);return function i(){for(var a=arguments.length,s=we(a),l=a,c=li(i);l--;)s[l]=arguments[l];var d=a<3&&s[0]!==c&&s[a-1]!==c?[]:sr(s,c);return(a-=d.length)<n?qo(t,r,No,i.placeholder,e,s,d,e,e,n-a):St(this&&this!==ft&&this instanceof i?o:t,this,s)}}(r,c,g):c!=i&&33!=c||f.length?No.apply(e,w):function(e,t,r,n){var o=1&t,i=zo(e);return function t(){for(var a=-1,s=arguments.length,l=-1,c=n.length,d=we(c+s),u=this&&this!==ft&&this instanceof t?i:e;++l<c;)d[l]=n[l];for(;s--;)d[l++]=arguments[++a];return St(u,o?r:this,d)}}(r,c,d,u);else var $=function(e,t,r){var n=1&t,o=zo(e);return function t(){return(this&&this!==ft&&this instanceof t?o:e).apply(n?r:this,arguments)}}(r,c,d);return Mi((x?eo:_i)($,w),r,c)}function Jo(t,r,n,o){return t===e||La(t,Ie[n])&&!je.call(o,n)?r:t}function ei(t,r,n,o,i,a){return es(t)&&es(r)&&(a.set(r,t),Hn(t,r,e,ei,a),a.delete(r)),t}function ti(t){return os(t)?e:t}function ri(t,r,n,o,i,a){var s=1&n,l=t.length,c=r.length;if(l!=c&&!(s&&c>l))return!1;var d=a.get(t),u=a.get(r);if(d&&u)return d==r&&u==t;var f=-1,h=!0,p=2&n?new Kr:e;for(a.set(t,r),a.set(r,t);++f<l;){var g=t[f],m=r[f];if(o)var b=s?o(m,g,f,r,t,a):o(g,m,f,t,r,a);if(b!==e){if(b)continue;h=!1;break}if(p){if(!Bt(r,(function(e,t){if(!Xt(p,t)&&(g===e||i(g,e,n,o,a)))return p.push(t)}))){h=!1;break}}else if(g!==m&&!i(g,m,n,o,a)){h=!1;break}}return a.delete(t),a.delete(r),h}function ni(t){return Ii(Ei(t,e,Vi),t+"")}function oi(e){return Sn(e,Ts,hi)}function ii(e){return Sn(e,Is,pi)}var ai=Or?function(e){return Or.get(e)}:ll;function si(e){for(var t=e.name+"",r=_r[t],n=je.call(_r,t)?r.length:0;n--;){var o=r[n],i=o.func;if(null==i||i==e)return o.name}return t}function li(e){return(je.call(Pr,"placeholder")?Pr:e).placeholder}function ci(){var e=Pr.iteratee||ol;return e=e===ol?jn:e,arguments.length?e(arguments[0],arguments[1]):e}function di(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function ui(e){for(var t=Ts(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Di(o)]}return t}function fi(t,r){var n=function(t,r){return null==t?e:t[r]}(t,r);return An(n)?n:e}var hi=bt?function(e){return null==e?[]:(e=ke(e),Ot(bt(e),(function(t){return qe.call(e,t)})))}:gl,pi=bt?function(e){for(var t=[];e;)Mt(t,hi(e)),e=Ue(e);return t}:gl,gi=Dn;function mi(e,t,r){for(var n=-1,o=(t=xo(t,e)).length,i=!1;++n<o;){var a=Ri(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Ja(o)&&yi(a,o)&&(Ya(e)||Wa(e))}function bi(e){return"function"!=typeof e.constructor||Si(e)?{}:Lr(Ue(e))}function vi(e){return Ya(e)||Wa(e)||!!(Ze&&e&&e[Ze])}function yi(e,t){var r=typeof e;return!!(t=null==t?d:t)&&("number"==r||"symbol"!=r&&me.test(e))&&e>-1&&e%1==0&&e<t}function xi(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yi(t,r.length):"string"==n&&t in r)&&La(r[t],e)}function wi(e,t){if(Ya(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||X.test(e)||!Q.test(e)||null!=t&&e in ke(t)}function $i(e){var t=si(e),r=Pr[t];if("function"!=typeof r||!(t in Wr.prototype))return!1;if(e===r)return!0;var n=ai(r);return!!n&&e===n[0]}(Cr&&gi(new Cr(new ArrayBuffer(1)))!=T||Sr&&gi(new Sr)!=w||Dr&&gi(Dr.resolve())!=S||kr&&gi(new kr)!=k||Er&&gi(new Er)!=O)&&(gi=function(t){var r=Dn(t),n=r==C?t.constructor:e,o=n?zi(n):"";if(o)switch(o){case Tr:return T;case Ir:return w;case Mr:return S;case Ar:return k;case jr:return O}return r});var Ci=Me?Qa:ml;function Si(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ie)}function Di(e){return e==e&&!es(e)}function ki(t,r){return function(n){return null!=n&&n[t]===r&&(r!==e||t in ke(n))}}function Ei(t,r,n){return r=br(r===e?t.length-1:r,0),function(){for(var e=arguments,o=-1,i=br(e.length-r,0),a=we(i);++o<i;)a[o]=e[r+o];o=-1;for(var s=we(r+1);++o<r;)s[o]=e[o];return s[r]=n(a),St(t,this,s)}}function Fi(e,t){return t.length<2?e:Cn(e,no(t,0,-1))}function Oi(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var _i=Ai(eo),Ti=ht||function(e,t){return ft.setTimeout(e,t)},Ii=Ai(to);function Mi(e,t,r){var n=t+"";return Ii(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return kt(h,(function(r){var n="_."+r[0];t&r[1]&&!_t(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(ie);return t?t[1].split(ae):[]}(n),r)))}function Ai(t){var r=0,n=0;return function(){var o=yr(),i=16-(o-n);if(n=o,i>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(e,arguments)}}function ji(t,r){var n=-1,o=t.length,i=o-1;for(r=r===e?o:r;++n<r;){var a=qn(n,i),s=t[a];t[a]=t[n],t[n]=s}return t.length=r,t}var Bi=function(e){var t=Aa(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(J,(function(e,r,n,o){t.push(n?o.replace(ce,"$1"):r||e)})),t}));function Ri(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function zi(e){if(null!=e){try{return Ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Pi(e){if(e instanceof Wr)return e.clone();var t=new Hr(e.__wrapped__,e.__chain__);return t.__actions__=_o(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Li=Zn((function(e,t){return Ka(e)?un(e,bn(t,1,Ka,!0)):[]})),Ni=Zn((function(t,r){var n=Zi(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),ci(n,2)):[]})),Hi=Zn((function(t,r){var n=Zi(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),e,n):[]}));function Wi(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ps(r);return o<0&&(o=br(n+o,0)),Pt(e,ci(t,3),o)}function Yi(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o-1;return n!==e&&(i=ps(n),i=n<0?br(o+i,0):vr(i,o-1)),Pt(t,ci(r,3),i,!0)}function Vi(e){return null!=e&&e.length?bn(e,1):[]}function Ui(t){return t&&t.length?t[0]:e}var Ki=Zn((function(e){var t=It(e,vo);return t.length&&t[0]===e[0]?On(t):[]})),qi=Zn((function(t){var r=Zi(t),n=It(t,vo);return r===Zi(n)?r=e:n.pop(),n.length&&n[0]===t[0]?On(n,ci(r,2)):[]})),Gi=Zn((function(t){var r=Zi(t),n=It(t,vo);return(r="function"==typeof r?r:e)&&n.pop(),n.length&&n[0]===t[0]?On(n,e,r):[]}));function Zi(t){var r=null==t?0:t.length;return r?t[r-1]:e}var Qi=Zn(Xi);function Xi(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Ji=ni((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Kn(e,It(t,(function(e){return yi(e,r)?+e:e})).sort(Eo)),n}));function ea(e){return null==e?e:$r.call(e)}var ta=Zn((function(e){return uo(bn(e,1,Ka,!0))})),ra=Zn((function(t){var r=Zi(t);return Ka(r)&&(r=e),uo(bn(t,1,Ka,!0),ci(r,2))})),na=Zn((function(t){var r=Zi(t);return r="function"==typeof r?r:e,uo(bn(t,1,Ka,!0),e,r)}));function oa(e){if(!e||!e.length)return[];var t=0;return e=Ot(e,(function(e){if(Ka(e))return t=br(e.length,t),!0})),qt(t,(function(t){return It(e,Yt(t))}))}function ia(t,r){if(!t||!t.length)return[];var n=oa(t);return null==r?n:It(n,(function(t){return St(r,e,t)}))}var aa=Zn((function(e,t){return Ka(e)?un(e,t):[]})),sa=Zn((function(e){return mo(Ot(e,Ka))})),la=Zn((function(t){var r=Zi(t);return Ka(r)&&(r=e),mo(Ot(t,Ka),ci(r,2))})),ca=Zn((function(t){var r=Zi(t);return r="function"==typeof r?r:e,mo(Ot(t,Ka),e,r)})),da=Zn(oa),ua=Zn((function(t){var r=t.length,n=r>1?t[r-1]:e;return n="function"==typeof n?(t.pop(),n):e,ia(t,n)}));function fa(e){var t=Pr(e);return t.__chain__=!0,t}function ha(e,t){return t(e)}var pa=ni((function(t){var r=t.length,n=r?t[0]:0,o=this.__wrapped__,i=function(e){return an(e,t)};return!(r>1||this.__actions__.length)&&o instanceof Wr&&yi(n)?((o=o.slice(n,+n+(r?1:0))).__actions__.push({func:ha,args:[i],thisArg:e}),new Hr(o,this.__chain__).thru((function(t){return r&&!t.length&&t.push(e),t}))):this.thru(i)})),ga=Io((function(e,t,r){je.call(e,r)?++e[r]:on(e,r,1)})),ma=Po(Wi),ba=Po(Yi);function va(e,t){return(Ya(e)?kt:fn)(e,ci(t,3))}function ya(e,t){return(Ya(e)?Et:hn)(e,ci(t,3))}var xa=Io((function(e,t,r){je.call(e,r)?e[r].push(t):on(e,r,[t])})),wa=Zn((function(e,t,r){var n=-1,o="function"==typeof t,i=Ua(e)?we(e.length):[];return fn(e,(function(e){i[++n]=o?St(t,e,r):_n(e,t,r)})),i})),$a=Io((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Ya(e)?It:Pn)(e,ci(t,3))}var Sa=Io((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]})),Da=Zn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xi(e,t[0],t[1])?t=[]:r>2&&xi(t[0],t[1],t[2])&&(t=[t[0]]),Yn(e,bn(t,1),[])})),ka=ut||function(){return ft.Date.now()};function Ea(t,r,n){return r=n?e:r,r=t&&null==r?t.length:r,Xo(t,s,e,e,e,e,r)}function Fa(r,n){var o;if("function"!=typeof n)throw new Oe(t);return r=ps(r),function(){return--r>0&&(o=n.apply(this,arguments)),r<=1&&(n=e),o}}var Oa=Zn((function(e,t,r){var n=1;if(r.length){var o=sr(r,li(Oa));n|=i}return Xo(e,n,t,r,o)})),_a=Zn((function(e,t,r){var n=3;if(r.length){var o=sr(r,li(_a));n|=i}return Xo(t,n,e,r,o)}));function Ta(r,n,o){var i,a,s,l,c,d,u=0,f=!1,h=!1,p=!0;if("function"!=typeof r)throw new Oe(t);function g(t){var n=i,o=a;return i=a=e,u=t,l=r.apply(o,n)}function m(t){var r=t-d;return d===e||r>=n||r<0||h&&t-u>=s}function b(){var e=ka();if(m(e))return v(e);c=Ti(b,function(e){var t=n-(e-d);return h?vr(t,s-(e-u)):t}(e))}function v(t){return c=e,p&&i?g(t):(i=a=e,l)}function y(){var t=ka(),r=m(t);if(i=arguments,a=this,d=t,r){if(c===e)return function(e){return u=e,c=Ti(b,n),f?g(e):l}(d);if(h)return Co(c),c=Ti(b,n),g(d)}return c===e&&(c=Ti(b,n)),l}return n=ms(n)||0,es(o)&&(f=!!o.leading,s=(h="maxWait"in o)?br(ms(o.maxWait)||0,n):s,p="trailing"in o?!!o.trailing:p),y.cancel=function(){c!==e&&Co(c),u=0,i=d=a=c=e},y.flush=function(){return c===e?l:v(ka())},y}var Ia=Zn((function(e,t){return dn(e,1,t)})),Ma=Zn((function(e,t,r){return dn(e,ms(t)||0,r)}));function Aa(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new Oe(t);var n=function(){var t=arguments,o=r?r.apply(this,t):t[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,t);return n.cache=i.set(o,a)||i,a};return n.cache=new(Aa.Cache||Ur),n}function ja(e){if("function"!=typeof e)throw new Oe(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Aa.Cache=Ur;var Ba=wo((function(e,t){var r=(t=1==t.length&&Ya(t[0])?It(t[0],Zt(ci())):It(bn(t,1),Zt(ci()))).length;return Zn((function(n){for(var o=-1,i=vr(n.length,r);++o<i;)n[o]=t[o].call(this,n[o]);return St(e,this,n)}))})),Ra=Zn((function(t,r){var n=sr(r,li(Ra));return Xo(t,i,e,r,n)})),za=Zn((function(t,r){var n=sr(r,li(za));return Xo(t,a,e,r,n)})),Pa=ni((function(t,r){return Xo(t,l,e,e,e,r)}));function La(e,t){return e===t||e!=e&&t!=t}var Na=Ko(kn),Ha=Ko((function(e,t){return e>=t})),Wa=Tn(function(){return arguments}())?Tn:function(e){return ts(e)&&je.call(e,"callee")&&!qe.call(e,"callee")},Ya=we.isArray,Va=vt?Zt(vt):function(e){return ts(e)&&Dn(e)==_};function Ua(e){return null!=e&&Ja(e.length)&&!Qa(e)}function Ka(e){return ts(e)&&Ua(e)}var qa=Rt||ml,Ga=yt?Zt(yt):function(e){return ts(e)&&Dn(e)==b};function Za(e){if(!ts(e))return!1;var t=Dn(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!os(e)}function Qa(e){if(!es(e))return!1;var t=Dn(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Xa(e){return"number"==typeof e&&e==ps(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=d}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=xt?Zt(xt):function(e){return ts(e)&&gi(e)==w};function ns(e){return"number"==typeof e||ts(e)&&Dn(e)==$}function os(e){if(!ts(e)||Dn(e)!=C)return!1;var t=Ue(e);if(null===t)return!0;var r=je.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Ae.call(r)==Pe}var is=wt?Zt(wt):function(e){return ts(e)&&Dn(e)==D},as=$t?Zt($t):function(e){return ts(e)&&gi(e)==k};function ss(e){return"string"==typeof e||!Ya(e)&&ts(e)&&Dn(e)==E}function ls(e){return"symbol"==typeof e||ts(e)&&Dn(e)==F}var cs=Ct?Zt(Ct):function(e){return ts(e)&&Ja(e.length)&&!!it[Dn(e)]},ds=Ko(zn),us=Ko((function(e,t){return e<=t}));function fs(e){if(!e)return[];if(Ua(e))return ss(e)?ur(e):_o(e);if(Je&&e[Je])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Je]());var t=gi(e);return(t==w?ir:t==k?lr:Ls)(e)}function hs(e){return e?(e=ms(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=hs(e),r=t%1;return t==t?r?t-r:t:0}function gs(e){return e?sn(ps(e),0,f):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return u;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Gt(e);var r=he.test(e);return r||ge.test(e)?ct(e.slice(2),r?2:8):fe.test(e)?u:+e}function bs(e){return To(e,Is(e))}function vs(e){return null==e?"":co(e)}var ys=Mo((function(e,t){if(Si(t)||Ua(t))To(t,Ts(t),e);else for(var r in t)je.call(t,r)&&en(e,r,t[r])})),xs=Mo((function(e,t){To(t,Is(t),e)})),ws=Mo((function(e,t,r,n){To(t,Is(t),e,n)})),$s=Mo((function(e,t,r,n){To(t,Ts(t),e,n)})),Cs=ni(an),Ss=Zn((function(t,r){t=ke(t);var n=-1,o=r.length,i=o>2?r[2]:e;for(i&&xi(r[0],r[1],i)&&(o=1);++n<o;)for(var a=r[n],s=Is(a),l=-1,c=s.length;++l<c;){var d=s[l],u=t[d];(u===e||La(u,Ie[d])&&!je.call(t,d))&&(t[d]=a[d])}return t})),Ds=Zn((function(t){return t.push(e,ei),St(As,e,t)}));function ks(t,r,n){var o=null==t?e:Cn(t,r);return o===e?n:o}function Es(e,t){return null!=e&&mi(e,t,Fn)}var Fs=Ho((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=ze.call(t)),e[t]=r}),el(nl)),Os=Ho((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=ze.call(t)),je.call(e,t)?e[t].push(r):e[t]=[r]}),ci),_s=Zn(_n);function Ts(e){return Ua(e)?Gr(e):Bn(e)}function Is(e){return Ua(e)?Gr(e,!0):Rn(e)}var Ms=Mo((function(e,t,r){Hn(e,t,r)})),As=Mo((function(e,t,r,n){Hn(e,t,r,n)})),js=ni((function(e,t){var r={};if(null==e)return r;var n=!1;t=It(t,(function(t){return t=xo(t,e),n||(n=t.length>1),t})),To(e,ii(e),r),n&&(r=ln(r,7,ti));for(var o=t.length;o--;)fo(r,t[o]);return r})),Bs=ni((function(e,t){return null==e?{}:function(e,t){return Vn(e,t,(function(t,r){return Es(e,r)}))}(e,t)}));function Rs(e,t){if(null==e)return{};var r=It(ii(e),(function(e){return[e]}));return t=ci(t),Vn(e,r,(function(e,r){return t(e,r[0])}))}var zs=Qo(Ts),Ps=Qo(Is);function Ls(e){return null==e?[]:Qt(e,Ts(e))}var Ns=Ro((function(e,t,r){return t=t.toLowerCase(),e+(r?Hs(t):t)}));function Hs(e){return Zs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(be,tr).replace(Xe,"")}var Ys=Ro((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Vs=Ro((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=Bo("toLowerCase"),Ks=Ro((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()})),qs=Ro((function(e,t,r){return e+(r?" ":"")+Zs(t)})),Gs=Ro((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Zs=Bo("toUpperCase");function Qs(t,r,n){return t=vs(t),(r=n?e:r)===e?function(e){return rt.test(e)}(t)?function(e){return e.match(et)||[]}(t):function(e){return e.match(se)||[]}(t):t.match(r)||[]}var Xs=Zn((function(t,r){try{return St(t,e,r)}catch(e){return Za(e)?e:new Ce(e)}})),Js=ni((function(e,t){return kt(t,(function(t){t=Ri(t),on(e,t,Oa(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Lo(),rl=Lo(!0);function nl(e){return e}function ol(e){return jn("function"==typeof e?e:ln(e,1))}var il=Zn((function(e,t){return function(r){return _n(r,e,t)}})),al=Zn((function(e,t){return function(r){return _n(e,r,t)}}));function sl(e,t,r){var n=Ts(t),o=$n(t,n);null!=r||es(t)&&(o.length||!n.length)||(r=t,t=e,e=this,o=$n(t,Ts(t)));var i=!(es(r)&&"chain"in r&&!r.chain),a=Qa(e);return kt(o,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=e(this.__wrapped__);return(r.__actions__=_o(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Mt([this.value()],arguments))})})),e}function ll(){}var cl=Yo(It),dl=Yo(Ft),ul=Yo(Bt);function fl(e){return wi(e)?Yt(Ri(e)):function(e){return function(t){return Cn(t,e)}}(e)}var hl=Uo(),pl=Uo(!0);function gl(){return[]}function ml(){return!1}var bl,vl=Wo((function(e,t){return e+t}),0),yl=Go("ceil"),xl=Wo((function(e,t){return e/t}),1),wl=Go("floor"),$l=Wo((function(e,t){return e*t}),1),Cl=Go("round"),Sl=Wo((function(e,t){return e-t}),0);return Pr.after=function(e,r){if("function"!=typeof r)throw new Oe(t);return e=ps(e),function(){if(--e<1)return r.apply(this,arguments)}},Pr.ary=Ea,Pr.assign=ys,Pr.assignIn=xs,Pr.assignInWith=ws,Pr.assignWith=$s,Pr.at=Cs,Pr.before=Fa,Pr.bind=Oa,Pr.bindAll=Js,Pr.bindKey=_a,Pr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ya(e)?e:[e]},Pr.chain=fa,Pr.chunk=function(t,r,n){r=(n?xi(t,r,n):r===e)?1:br(ps(r),0);var o=null==t?0:t.length;if(!o||r<1)return[];for(var i=0,a=0,s=we(pt(o/r));i<o;)s[a++]=no(t,i,i+=r);return s},Pr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,o=[];++t<r;){var i=e[t];i&&(o[n++]=i)}return o},Pr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=we(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return Mt(Ya(r)?_o(r):[r],bn(t,1))},Pr.cond=function(e){var r=null==e?0:e.length,n=ci();return e=r?It(e,(function(e){if("function"!=typeof e[1])throw new Oe(t);return[n(e[0]),e[1]]})):[],Zn((function(t){for(var n=-1;++n<r;){var o=e[n];if(St(o[0],this,t))return St(o[1],this,t)}}))},Pr.conforms=function(e){return function(e){var t=Ts(e);return function(r){return cn(r,e,t)}}(ln(e,1))},Pr.constant=el,Pr.countBy=ga,Pr.create=function(e,t){var r=Lr(e);return null==t?r:nn(r,t)},Pr.curry=function t(r,n,o){var i=Xo(r,8,e,e,e,e,e,n=o?e:n);return i.placeholder=t.placeholder,i},Pr.curryRight=function t(r,n,i){var a=Xo(r,o,e,e,e,e,e,n=i?e:n);return a.placeholder=t.placeholder,a},Pr.debounce=Ta,Pr.defaults=Ss,Pr.defaultsDeep=Ds,Pr.defer=Ia,Pr.delay=Ma,Pr.difference=Li,Pr.differenceBy=Ni,Pr.differenceWith=Hi,Pr.drop=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=n||r===e?1:ps(r))<0?0:r,o):[]},Pr.dropRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,0,(r=o-(r=n||r===e?1:ps(r)))<0?0:r):[]},Pr.dropRightWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!0,!0):[]},Pr.dropWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!0):[]},Pr.fill=function(t,r,n,o){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&xi(t,r,n)&&(n=0,o=i),function(t,r,n,o){var i=t.length;for((n=ps(n))<0&&(n=-n>i?0:i+n),(o=o===e||o>i?i:ps(o))<0&&(o+=i),o=n>o?0:gs(o);n<o;)t[n++]=r;return t}(t,r,n,o)):[]},Pr.filter=function(e,t){return(Ya(e)?Ot:mn)(e,ci(t,3))},Pr.flatMap=function(e,t){return bn(Ca(e,t),1)},Pr.flatMapDeep=function(e,t){return bn(Ca(e,t),c)},Pr.flatMapDepth=function(t,r,n){return n=n===e?1:ps(n),bn(Ca(t,r),n)},Pr.flatten=Vi,Pr.flattenDeep=function(e){return null!=e&&e.length?bn(e,c):[]},Pr.flattenDepth=function(t,r){return null!=t&&t.length?bn(t,r=r===e?1:ps(r)):[]},Pr.flip=function(e){return Xo(e,512)},Pr.flow=tl,Pr.flowRight=rl,Pr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var o=e[t];n[o[0]]=o[1]}return n},Pr.functions=function(e){return null==e?[]:$n(e,Ts(e))},Pr.functionsIn=function(e){return null==e?[]:$n(e,Is(e))},Pr.groupBy=xa,Pr.initial=function(e){return null!=e&&e.length?no(e,0,-1):[]},Pr.intersection=Ki,Pr.intersectionBy=qi,Pr.intersectionWith=Gi,Pr.invert=Fs,Pr.invertBy=Os,Pr.invokeMap=wa,Pr.iteratee=ol,Pr.keyBy=$a,Pr.keys=Ts,Pr.keysIn=Is,Pr.map=Ca,Pr.mapKeys=function(e,t){var r={};return t=ci(t,3),xn(e,(function(e,n,o){on(r,t(e,n,o),e)})),r},Pr.mapValues=function(e,t){var r={};return t=ci(t,3),xn(e,(function(e,n,o){on(r,n,t(e,n,o))})),r},Pr.matches=function(e){return Ln(ln(e,1))},Pr.matchesProperty=function(e,t){return Nn(e,ln(t,1))},Pr.memoize=Aa,Pr.merge=Ms,Pr.mergeWith=As,Pr.method=il,Pr.methodOf=al,Pr.mixin=sl,Pr.negate=ja,Pr.nthArg=function(e){return e=ps(e),Zn((function(t){return Wn(t,e)}))},Pr.omit=js,Pr.omitBy=function(e,t){return Rs(e,ja(ci(t)))},Pr.once=function(e){return Fa(2,e)},Pr.orderBy=function(t,r,n,o){return null==t?[]:(Ya(r)||(r=null==r?[]:[r]),Ya(n=o?e:n)||(n=null==n?[]:[n]),Yn(t,r,n))},Pr.over=cl,Pr.overArgs=Ba,Pr.overEvery=dl,Pr.overSome=ul,Pr.partial=Ra,Pr.partialRight=za,Pr.partition=Sa,Pr.pick=Bs,Pr.pickBy=Rs,Pr.property=fl,Pr.propertyOf=function(t){return function(r){return null==t?e:Cn(t,r)}},Pr.pull=Qi,Pr.pullAll=Xi,Pr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,ci(r,2)):e},Pr.pullAllWith=function(t,r,n){return t&&t.length&&r&&r.length?Un(t,r,e,n):t},Pr.pullAt=Ji,Pr.range=hl,Pr.rangeRight=pl,Pr.rearg=Pa,Pr.reject=function(e,t){return(Ya(e)?Ot:mn)(e,ja(ci(t,3)))},Pr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,o=[],i=e.length;for(t=ci(t,3);++n<i;){var a=e[n];t(a,n,e)&&(r.push(a),o.push(n))}return Kn(e,o),r},Pr.rest=function(r,n){if("function"!=typeof r)throw new Oe(t);return Zn(r,n=n===e?n:ps(n))},Pr.reverse=ea,Pr.sampleSize=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:ps(r),(Ya(t)?Qr:Xn)(t,r)},Pr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},Pr.setWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:Jn(t,r,n,o)},Pr.shuffle=function(e){return(Ya(e)?Xr:ro)(e)},Pr.slice=function(t,r,n){var o=null==t?0:t.length;return o?(n&&"number"!=typeof n&&xi(t,r,n)?(r=0,n=o):(r=null==r?0:ps(r),n=n===e?o:ps(n)),no(t,r,n)):[]},Pr.sortBy=Da,Pr.sortedUniq=function(e){return e&&e.length?so(e):[]},Pr.sortedUniqBy=function(e,t){return e&&e.length?so(e,ci(t,2)):[]},Pr.split=function(t,r,n){return n&&"number"!=typeof n&&xi(t,r,n)&&(r=n=e),(n=n===e?f:n>>>0)?(t=vs(t))&&("string"==typeof r||null!=r&&!is(r))&&!(r=co(r))&&or(t)?$o(ur(t),0,n):t.split(r,n):[]},Pr.spread=function(e,r){if("function"!=typeof e)throw new Oe(t);return r=null==r?0:br(ps(r),0),Zn((function(t){var n=t[r],o=$o(t,0,r);return n&&Mt(o,n),St(e,this,o)}))},Pr.tail=function(e){var t=null==e?0:e.length;return t?no(e,1,t):[]},Pr.take=function(t,r,n){return t&&t.length?no(t,0,(r=n||r===e?1:ps(r))<0?0:r):[]},Pr.takeRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=o-(r=n||r===e?1:ps(r)))<0?0:r,o):[]},Pr.takeRightWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!1,!0):[]},Pr.takeWhile=function(e,t){return e&&e.length?po(e,ci(t,3)):[]},Pr.tap=function(e,t){return t(e),e},Pr.throttle=function(e,r,n){var o=!0,i=!0;if("function"!=typeof e)throw new Oe(t);return es(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),Ta(e,r,{leading:o,maxWait:r,trailing:i})},Pr.thru=ha,Pr.toArray=fs,Pr.toPairs=zs,Pr.toPairsIn=Ps,Pr.toPath=function(e){return Ya(e)?It(e,Ri):ls(e)?[e]:_o(Bi(vs(e)))},Pr.toPlainObject=bs,Pr.transform=function(e,t,r){var n=Ya(e),o=n||qa(e)||cs(e);if(t=ci(t,4),null==r){var i=e&&e.constructor;r=o?n?new i:[]:es(e)&&Qa(i)?Lr(Ue(e)):{}}return(o?kt:xn)(e,(function(e,n,o){return t(r,e,n,o)})),r},Pr.unary=function(e){return Ea(e,1)},Pr.union=ta,Pr.unionBy=ra,Pr.unionWith=na,Pr.uniq=function(e){return e&&e.length?uo(e):[]},Pr.uniqBy=function(e,t){return e&&e.length?uo(e,ci(t,2)):[]},Pr.uniqWith=function(t,r){return r="function"==typeof r?r:e,t&&t.length?uo(t,e,r):[]},Pr.unset=function(e,t){return null==e||fo(e,t)},Pr.unzip=oa,Pr.unzipWith=ia,Pr.update=function(e,t,r){return null==e?e:ho(e,t,yo(r))},Pr.updateWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:ho(t,r,yo(n),o)},Pr.values=Ls,Pr.valuesIn=function(e){return null==e?[]:Qt(e,Is(e))},Pr.without=aa,Pr.words=Qs,Pr.wrap=function(e,t){return Ra(yo(t),e)},Pr.xor=sa,Pr.xorBy=la,Pr.xorWith=ca,Pr.zip=da,Pr.zipObject=function(e,t){return bo(e||[],t||[],en)},Pr.zipObjectDeep=function(e,t){return bo(e||[],t||[],Jn)},Pr.zipWith=ua,Pr.entries=zs,Pr.entriesIn=Ps,Pr.extend=xs,Pr.extendWith=ws,sl(Pr,Pr),Pr.add=vl,Pr.attempt=Xs,Pr.camelCase=Ns,Pr.capitalize=Hs,Pr.ceil=yl,Pr.clamp=function(t,r,n){return n===e&&(n=r,r=e),n!==e&&(n=(n=ms(n))==n?n:0),r!==e&&(r=(r=ms(r))==r?r:0),sn(ms(t),r,n)},Pr.clone=function(e){return ln(e,4)},Pr.cloneDeep=function(e){return ln(e,5)},Pr.cloneDeepWith=function(t,r){return ln(t,5,r="function"==typeof r?r:e)},Pr.cloneWith=function(t,r){return ln(t,4,r="function"==typeof r?r:e)},Pr.conformsTo=function(e,t){return null==t||cn(e,t,Ts(t))},Pr.deburr=Ws,Pr.defaultTo=function(e,t){return null==e||e!=e?t:e},Pr.divide=xl,Pr.endsWith=function(t,r,n){t=vs(t),r=co(r);var o=t.length,i=n=n===e?o:sn(ps(n),0,o);return(n-=r.length)>=0&&t.slice(n,i)==r},Pr.eq=La,Pr.escape=function(e){return(e=vs(e))&&K.test(e)?e.replace(V,rr):e},Pr.escapeRegExp=function(e){return(e=vs(e))&&te.test(e)?e.replace(ee,"\\$&"):e},Pr.every=function(t,r,n){var o=Ya(t)?Ft:pn;return n&&xi(t,r,n)&&(r=e),o(t,ci(r,3))},Pr.find=ma,Pr.findIndex=Wi,Pr.findKey=function(e,t){return zt(e,ci(t,3),xn)},Pr.findLast=ba,Pr.findLastIndex=Yi,Pr.findLastKey=function(e,t){return zt(e,ci(t,3),wn)},Pr.floor=wl,Pr.forEach=va,Pr.forEachRight=ya,Pr.forIn=function(e,t){return null==e?e:vn(e,ci(t,3),Is)},Pr.forInRight=function(e,t){return null==e?e:yn(e,ci(t,3),Is)},Pr.forOwn=function(e,t){return e&&xn(e,ci(t,3))},Pr.forOwnRight=function(e,t){return e&&wn(e,ci(t,3))},Pr.get=ks,Pr.gt=Na,Pr.gte=Ha,Pr.has=function(e,t){return null!=e&&mi(e,t,En)},Pr.hasIn=Es,Pr.head=Ui,Pr.identity=nl,Pr.includes=function(e,t,r,n){e=Ua(e)?e:Ls(e),r=r&&!n?ps(r):0;var o=e.length;return r<0&&(r=br(o+r,0)),ss(e)?r<=o&&e.indexOf(t,r)>-1:!!o&&Lt(e,t,r)>-1},Pr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ps(r);return o<0&&(o=br(n+o,0)),Lt(e,t,o)},Pr.inRange=function(t,r,n){return r=hs(r),n===e?(n=r,r=0):n=hs(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(t=ms(t),r,n)},Pr.invoke=_s,Pr.isArguments=Wa,Pr.isArray=Ya,Pr.isArrayBuffer=Va,Pr.isArrayLike=Ua,Pr.isArrayLikeObject=Ka,Pr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&Dn(e)==m},Pr.isBuffer=qa,Pr.isDate=Ga,Pr.isElement=function(e){return ts(e)&&1===e.nodeType&&!os(e)},Pr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Ya(e)||"string"==typeof e||"function"==typeof e.splice||qa(e)||cs(e)||Wa(e)))return!e.length;var t=gi(e);if(t==w||t==k)return!e.size;if(Si(e))return!Bn(e).length;for(var r in e)if(je.call(e,r))return!1;return!0},Pr.isEqual=function(e,t){return In(e,t)},Pr.isEqualWith=function(t,r,n){var o=(n="function"==typeof n?n:e)?n(t,r):e;return o===e?In(t,r,e,n):!!o},Pr.isError=Za,Pr.isFinite=function(e){return"number"==typeof e&&Vt(e)},Pr.isFunction=Qa,Pr.isInteger=Xa,Pr.isLength=Ja,Pr.isMap=rs,Pr.isMatch=function(e,t){return e===t||Mn(e,t,ui(t))},Pr.isMatchWith=function(t,r,n){return n="function"==typeof n?n:e,Mn(t,r,ui(r),n)},Pr.isNaN=function(e){return ns(e)&&e!=+e},Pr.isNative=function(e){if(Ci(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return An(e)},Pr.isNil=function(e){return null==e},Pr.isNull=function(e){return null===e},Pr.isNumber=ns,Pr.isObject=es,Pr.isObjectLike=ts,Pr.isPlainObject=os,Pr.isRegExp=is,Pr.isSafeInteger=function(e){return Xa(e)&&e>=-9007199254740991&&e<=d},Pr.isSet=as,Pr.isString=ss,Pr.isSymbol=ls,Pr.isTypedArray=cs,Pr.isUndefined=function(t){return t===e},Pr.isWeakMap=function(e){return ts(e)&&gi(e)==O},Pr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==Dn(e)},Pr.join=function(e,t){return null==e?"":gr.call(e,t)},Pr.kebabCase=Ys,Pr.last=Zi,Pr.lastIndexOf=function(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o;return n!==e&&(i=(i=ps(n))<0?br(o+i,0):vr(i,o-1)),r==r?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(t,r,i):Pt(t,Ht,i,!0)},Pr.lowerCase=Vs,Pr.lowerFirst=Us,Pr.lt=ds,Pr.lte=us,Pr.max=function(t){return t&&t.length?gn(t,nl,kn):e},Pr.maxBy=function(t,r){return t&&t.length?gn(t,ci(r,2),kn):e},Pr.mean=function(e){return Wt(e,nl)},Pr.meanBy=function(e,t){return Wt(e,ci(t,2))},Pr.min=function(t){return t&&t.length?gn(t,nl,zn):e},Pr.minBy=function(t,r){return t&&t.length?gn(t,ci(r,2),zn):e},Pr.stubArray=gl,Pr.stubFalse=ml,Pr.stubObject=function(){return{}},Pr.stubString=function(){return""},Pr.stubTrue=function(){return!0},Pr.multiply=$l,Pr.nth=function(t,r){return t&&t.length?Wn(t,ps(r)):e},Pr.noConflict=function(){return ft._===this&&(ft._=Le),this},Pr.noop=ll,Pr.now=ka,Pr.pad=function(e,t,r){e=vs(e);var n=(t=ps(t))?dr(e):0;if(!t||n>=t)return e;var o=(t-n)/2;return Vo(mt(o),r)+e+Vo(pt(o),r)},Pr.padEnd=function(e,t,r){e=vs(e);var n=(t=ps(t))?dr(e):0;return t&&n<t?e+Vo(t-n,r):e},Pr.padStart=function(e,t,r){e=vs(e);var n=(t=ps(t))?dr(e):0;return t&&n<t?Vo(t-n,r)+e:e},Pr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vs(e).replace(re,""),t||0)},Pr.random=function(t,r,n){if(n&&"boolean"!=typeof n&&xi(t,r,n)&&(r=n=e),n===e&&("boolean"==typeof r?(n=r,r=e):"boolean"==typeof t&&(n=t,t=e)),t===e&&r===e?(t=0,r=1):(t=hs(t),r===e?(r=t,t=0):r=hs(r)),t>r){var o=t;t=r,r=o}if(n||t%1||r%1){var i=wr();return vr(t+i*(r-t+lt("1e-"+((i+"").length-1))),r)}return qn(t,r)},Pr.reduce=function(e,t,r){var n=Ya(e)?At:Ut,o=arguments.length<3;return n(e,ci(t,4),r,o,fn)},Pr.reduceRight=function(e,t,r){var n=Ya(e)?jt:Ut,o=arguments.length<3;return n(e,ci(t,4),r,o,hn)},Pr.repeat=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:ps(r),Gn(vs(t),r)},Pr.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Pr.result=function(t,r,n){var o=-1,i=(r=xo(r,t)).length;for(i||(i=1,t=e);++o<i;){var a=null==t?e:t[Ri(r[o])];a===e&&(o=i,a=n),t=Qa(a)?a.call(t):a}return t},Pr.round=Cl,Pr.runInContext=ne,Pr.sample=function(e){return(Ya(e)?Zr:Qn)(e)},Pr.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?dr(e):e.length;var t=gi(e);return t==w||t==k?e.size:Bn(e).length},Pr.snakeCase=Ks,Pr.some=function(t,r,n){var o=Ya(t)?Bt:oo;return n&&xi(t,r,n)&&(r=e),o(t,ci(r,3))},Pr.sortedIndex=function(e,t){return io(e,t)},Pr.sortedIndexBy=function(e,t,r){return ao(e,t,ci(r,2))},Pr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=io(e,t);if(n<r&&La(e[n],t))return n}return-1},Pr.sortedLastIndex=function(e,t){return io(e,t,!0)},Pr.sortedLastIndexBy=function(e,t,r){return ao(e,t,ci(r,2),!0)},Pr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=io(e,t,!0)-1;if(La(e[r],t))return r}return-1},Pr.startCase=qs,Pr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:sn(ps(r),0,e.length),t=co(t),e.slice(r,r+t.length)==t},Pr.subtract=Sl,Pr.sum=function(e){return e&&e.length?Kt(e,nl):0},Pr.sumBy=function(e,t){return e&&e.length?Kt(e,ci(t,2)):0},Pr.template=function(t,r,n){var o=Pr.templateSettings;n&&xi(t,r,n)&&(r=e),t=vs(t),r=ws({},r,o,Jo);var i,a,s=ws({},r.imports,o.imports,Jo),l=Ts(s),c=Qt(s,l),d=0,u=r.interpolate||ve,f="__p += '",h=Ee((r.escape||ve).source+"|"+u.source+"|"+(u===Z?de:ve).source+"|"+(r.evaluate||ve).source+"|$","g"),p="//# sourceURL="+(je.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ot+"]")+"\n";t.replace(h,(function(e,r,n,o,s,l){return n||(n=o),f+=t.slice(d,l).replace(ye,nr),r&&(i=!0,f+="' +\n__e("+r+") +\n'"),s&&(a=!0,f+="';\n"+s+";\n__p += '"),n&&(f+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),d=l+e.length,e})),f+="';\n";var g=je.call(r,"variable")&&r.variable;if(g){if(le.test(g))throw new Ce("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n";f=(a?f.replace(N,""):f).replace(H,"$1").replace(W,"$1;"),f="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var m=Xs((function(){return Se(l,p+"return "+f).apply(e,c)}));if(m.source=f,Za(m))throw m;return m},Pr.times=function(e,t){if((e=ps(e))<1||e>d)return[];var r=f,n=vr(e,f);t=ci(t),e-=f;for(var o=qt(n,t);++r<e;)t(r);return o},Pr.toFinite=hs,Pr.toInteger=ps,Pr.toLength=gs,Pr.toLower=function(e){return vs(e).toLowerCase()},Pr.toNumber=ms,Pr.toSafeInteger=function(e){return e?sn(ps(e),-9007199254740991,d):0===e?e:0},Pr.toString=vs,Pr.toUpper=function(e){return vs(e).toUpperCase()},Pr.trim=function(t,r,n){if((t=vs(t))&&(n||r===e))return Gt(t);if(!t||!(r=co(r)))return t;var o=ur(t),i=ur(r);return $o(o,Jt(o,i),er(o,i)+1).join("")},Pr.trimEnd=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.slice(0,fr(t)+1);if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,0,er(o,ur(r))+1).join("")},Pr.trimStart=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.replace(re,"");if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,Jt(o,ur(r))).join("")},Pr.truncate=function(t,r){var n=30,o="...";if(es(r)){var i="separator"in r?r.separator:i;n="length"in r?ps(r.length):n,o="omission"in r?co(r.omission):o}var a=(t=vs(t)).length;if(or(t)){var s=ur(t);a=s.length}if(n>=a)return t;var l=n-dr(o);if(l<1)return o;var c=s?$o(s,0,l).join(""):t.slice(0,l);if(i===e)return c+o;if(s&&(l+=c.length-l),is(i)){if(t.slice(l).search(i)){var d,u=c;for(i.global||(i=Ee(i.source,vs(ue.exec(i))+"g")),i.lastIndex=0;d=i.exec(u);)var f=d.index;c=c.slice(0,f===e?l:f)}}else if(t.indexOf(co(i),l)!=l){var h=c.lastIndexOf(i);h>-1&&(c=c.slice(0,h))}return c+o},Pr.unescape=function(e){return(e=vs(e))&&U.test(e)?e.replace(Y,hr):e},Pr.uniqueId=function(e){var t=++Be;return vs(e)+t},Pr.upperCase=Gs,Pr.upperFirst=Zs,Pr.each=va,Pr.eachRight=ya,Pr.first=Ui,sl(Pr,(bl={},xn(Pr,(function(e,t){je.call(Pr.prototype,t)||(bl[t]=e)})),bl),{chain:!1}),Pr.VERSION="4.17.21",kt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Pr[e].placeholder=Pr})),kt(["drop","take"],(function(t,r){Wr.prototype[t]=function(n){n=n===e?1:br(ps(n),0);var o=this.__filtered__&&!r?new Wr(this):this.clone();return o.__filtered__?o.__takeCount__=vr(n,o.__takeCount__):o.__views__.push({size:vr(n,f),type:t+(o.__dir__<0?"Right":"")}),o},Wr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),kt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Wr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:ci(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),kt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Wr.prototype[e]=function(){return this[r](1).value()[0]}})),kt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Wr.prototype[e]=function(){return this.__filtered__?new Wr(this):this[r](1)}})),Wr.prototype.compact=function(){return this.filter(nl)},Wr.prototype.find=function(e){return this.filter(e).head()},Wr.prototype.findLast=function(e){return this.reverse().find(e)},Wr.prototype.invokeMap=Zn((function(e,t){return"function"==typeof e?new Wr(this):this.map((function(r){return _n(r,e,t)}))})),Wr.prototype.reject=function(e){return this.filter(ja(ci(e)))},Wr.prototype.slice=function(t,r){t=ps(t);var n=this;return n.__filtered__&&(t>0||r<0)?new Wr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),r!==e&&(n=(r=ps(r))<0?n.dropRight(-r):n.take(r-t)),n)},Wr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wr.prototype.toArray=function(){return this.take(f)},xn(Wr.prototype,(function(t,r){var n=/^(?:filter|find|map|reject)|While$/.test(r),o=/^(?:head|last)$/.test(r),i=Pr[o?"take"+("last"==r?"Right":""):r],a=o||/^find/.test(r);i&&(Pr.prototype[r]=function(){var r=this.__wrapped__,s=o?[1]:arguments,l=r instanceof Wr,c=s[0],d=l||Ya(r),u=function(e){var t=i.apply(Pr,Mt([e],s));return o&&f?t[0]:t};d&&n&&"function"==typeof c&&1!=c.length&&(l=d=!1);var f=this.__chain__,h=!!this.__actions__.length,p=a&&!f,g=l&&!h;if(!a&&d){r=g?r:new Wr(this);var m=t.apply(r,s);return m.__actions__.push({func:ha,args:[u],thisArg:e}),new Hr(m,f)}return p&&g?t.apply(this,s):(m=this.thru(u),p?o?m.value()[0]:m.value():m)})})),kt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=_e[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Pr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var o=this.value();return t.apply(Ya(o)?o:[],e)}return this[r]((function(r){return t.apply(Ya(r)?r:[],e)}))}})),xn(Wr.prototype,(function(e,t){var r=Pr[t];if(r){var n=r.name+"";je.call(_r,n)||(_r[n]=[]),_r[n].push({name:t,func:r})}})),_r[No(e,2).name]=[{name:"wrapper",func:e}],Wr.prototype.clone=function(){var e=new Wr(this.__wrapped__);return e.__actions__=_o(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=_o(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=_o(this.__views__),e},Wr.prototype.reverse=function(){if(this.__filtered__){var e=new Wr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Ya(e),n=t<0,o=r?e.length:0,i=function(e,t,r){for(var n=-1,o=r.length;++n<o;){var i=r[n],a=i.size;switch(i.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,o,this.__views__),a=i.start,s=i.end,l=s-a,c=n?s:a-1,d=this.__iteratees__,u=d.length,f=0,h=vr(l,this.__takeCount__);if(!r||!n&&o==l&&h==l)return go(e,this.__actions__);var p=[];e:for(;l--&&f<h;){for(var g=-1,m=e[c+=t];++g<u;){var b=d[g],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[f++]=m}return p},Pr.prototype.at=pa,Pr.prototype.chain=function(){return fa(this)},Pr.prototype.commit=function(){return new Hr(this.value(),this.__chain__)},Pr.prototype.next=function(){this.__values__===e&&(this.__values__=fs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Pr.prototype.plant=function(t){for(var r,n=this;n instanceof Nr;){var o=Pi(n);o.__index__=0,o.__values__=e,r?i.__wrapped__=o:r=o;var i=o;n=n.__wrapped__}return i.__wrapped__=t,r},Pr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Wr){var r=t;return this.__actions__.length&&(r=new Wr(this)),(r=r.reverse()).__actions__.push({func:ha,args:[ea],thisArg:e}),new Hr(r,this.__chain__)}return this.thru(ea)},Pr.prototype.toJSON=Pr.prototype.valueOf=Pr.prototype.value=function(){return go(this.__wrapped__,this.__actions__)},Pr.prototype.first=Pr.prototype.head,Je&&(Pr.prototype[Je]=function(){return this}),Pr}();pt?((pt.exports=pr)._=pr,ht._=pr):ft._=pr}.call(Be);var HS=NS.exports;const WS=o.forwardRef(((n,o)=>{var{value:i,readOnly:a,"data-testid":s,maskRange:l,unmaskRange:d,maskRegex:u,maskTransformer:f,iconMask:h=e(Se,{}),iconUnmask:p=e(Ce,{}),iconActiveColor:m,iconInactiveColor:b,maskChar:v="•",error:y,disableMask:x,transformInput:w,loadState:$,onMask:C,onUnmask:S,onChange:D,onFocus:k,onBlur:E,onTryAgain:F}=n,O=ct(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const _=a&&HS.isEmpty(i),[T,I]=g(!x),[M,A]=g(i||"");c((()=>{A(i||"")}),[i]);const j=e=>{L(!1),k&&k(e)},B=e=>{L(!0),E&&E(e)},R=e=>{let t=e.target.value;switch(w){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}A(t),e.target.value=t,D&&D(e)},z=()=>{a&&F&&F()},P=()=>{L(!T)},L=e=>{I(e),e?C&&C():S&&S()},N=()=>!(null==M?void 0:M.toString().length)||x,H=()=>{if(_)return e(r,{});const t=N();return e(_S,{"data-testid":"icon-"+(T?"masked":"unmasked"),onClick:t?void 0:P,$isDisabled:t,$inactiveColor:b,$activeColor:m,children:T?p:h})};return e("div",{"aria-busy":"loading"===$,"aria-live":"polite",children:(()=>{if(a)switch($){case"fail":return t(zS,{onClick:z,"data-testid":"try-again-button",children:[t(jS,{children:[e(BS,{}),e(RS,{children:"Error"})]}),e(AS,{children:"Try again?"})]});case"loading":return t(TS,{children:[e(MS,{}),e(IS,{children:"Retrieving..."})]})}return e(OS,Object.assign({ref:o,"data-testid":`${s||"masked-input"}${T?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:H()},position:"right"},onFocus:a?void 0:j,onBlur:a?void 0:B,onClick:a?P:void 0,onChange:R,value:_?"-":T&&!x?kd.maskValue(M,{maskChar:v,maskRange:l,unmaskRange:d,maskRegex:u,maskTransformer:f}):M,readOnly:a,error:y,$isDisabled:N()},O))})()})})),YS=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,f=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(_u,{id:i,label:n,errorMessage:o,disabled:f.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,children:e(WS,Object.assign({ref:r,id:`${i}-base`,"data-testid":s||i,error:!!o},f))})})),VS=({selectedOptions:t,placeholder:r="Select",options:n,disabled:o,error:i,className:a,"data-testid":l,id:d,enableSearch:u=!1,searchFunction:f,searchPlaceholder:h,valueExtractor:p,listExtractor:m,onSelectOptions:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderListItem:C,hideNoResultsDisplay:S,noResultsDescription:D,customLabels:k,renderCustomCallToAction:E,onBlur:F,variant:O="default",readOnly:_,alignment:T,dropdownZIndex:I,maxSelectable:M,dropdownRootNode:A,dropdownWidth:j})=>{const{allSelectedLabel:B,multiSelectedLabel:R}=k||{},[z,P]=g(t||[]),[L,N]=g(!1),[H,W]=g(!1),[Y]=g((()=>Dd.generate())),V=s(null),U=s(null);c((()=>{P(t||[])}),[t]);const K=()=>{z&&z.length>0||M?(P([]),J([])):(P(n),J(n))},q=(e,t)=>{const r=[...z],n=Vv(z,(e=>(p?p(e):e)===t));n>-1?r.splice(n,1):r.push(e),P(r),J(r)},G=()=>{L&&(N(!1),X(!1))},Z=()=>{H||L||W(!0)},Q=e=>{H&&!L&&V.current&&!V.current.contains(e.relatedTarget)&&(W(!1),null==F||F())},X=e=>{!e&&y&&y(),e&&v&&v()},J=e=>{b&&b(e)};return e(_$,{children:e(Uu,{enabled:!_&&!o,isOpen:L,renderElement:()=>e(Sh,{className:a,"data-testid":l,id:d,ref:V,tabIndex:-1,onFocus:Z,onBlur:Q,$focused:H,$disabled:o,$readOnly:_,$error:i,children:e(nC,{ref:U,disabled:o,expanded:L,listboxId:Y,popupRole:"listbox",readOnly:_,variant:O,children:e(Pu,{$disabled:o,children:z&&0!==z.length?e(Lu,{$variant:O,children:n&&z.length===n.length?B||"All selected":R||`${z.length} selected`}):e(Nu,{$truncateType:$,$variant:O,children:r})})})}),renderDropdown:()=>e(eC,{listboxId:Y,listItems:n,onSelectItem:q,onDismiss:G,valueExtractor:p,listExtractor:m,enableSearch:u,searchFunction:f,searchPlaceholder:h,multiSelect:!0,maxSelectable:M,selectedItems:z,onSelectAll:K,onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:C,hideNoResultsDisplay:S,noResultsDescription:D,customLabels:k,renderCustomCallToAction:E,variant:O,width:j,matchElementWidth:!0}),onOpen:()=>{N(!0),X(!0),W(!0)},onClose:e=>{N(!1),X(!1),"click"!==e&&(W(!1),null==F||F())},onDismiss:()=>{var e;null===(e=U.current)||void 0===e||e.focus(),N(!1),X(!1)},clickToToggle:!0,offset:8,alignment:T,fitAvailableHeight:!0,customZIndex:I,rootNode:A})})},US=(e,t)=>{const[r,...n]=t;if(oS(e)||!r)return;const o=e.find((e=>e.key===r));return o?n.length?US(o.subItems,n):o:void 0},KS=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...KS(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},qS=({placeholder:t="Select",options:r,disabled:n,error:o,className:i,"data-testid":a,id:l,selectedKeyPaths:d,mode:u,valueToStringFunction:f,enableSearch:h,searchPlaceholder:p,hideNoResultsDisplay:m,noResultsDescription:b,customLabels:v,readOnly:y,onSearch:x,onSelectOptions:w,onShowOptions:$,onHideOptions:C,onRetry:S,onBlur:D,optionsLoadState:k="success",optionTruncationType:E="end",variant:F="default",alignment:O,dropdownZIndex:_,dropdownWidth:T,dropdownRootNode:I})=>{const{multiSelectedLabel:M}=v||{},A=r,[j,B]=g(d?lS(d):new Set),[R,z]=g([]),[P,L]=g(!1),[N,H]=g(!1),[W]=g((()=>Dd.generate())),Y=s(null),V=s(null),U=s(null);c((()=>{const e=d||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const o=t[n],i=US(e,o);i&&r.push({value:i.value,label:i.label,keyPath:o})}return r})(A,e);B(lS(e)),z(t)}),[d,A]);const K=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));B(lS(e)),z(r),ee(e,r)},q=e=>{const t=te(e),r=t.map((e=>e.keyPath));z(t),B(lS(r)),ee(r,t)},G=()=>{N||P||H(!0)},Z=e=>{N&&!P&&Y.current&&!Y.current.contains(e.relatedTarget)&&(H(!1),null==D||D())},Q=()=>{if(R.length>1)return M||`${R.length} selected`;const{label:e,value:t}=R[0];return f?f(t):e},X=e=>{if("middle"===E){let t=0;return U&&U.current&&(t=U.current.getBoundingClientRect().width),kd.truncateOneLine(e,t,120,6)}return e},J=e=>{!e&&C&&C(),e&&$&&$()},ee=(e,t)=>{if(w){const r=t.map((e=>e.value));w(e,r)}},te=e=>{if(!0===e.checked)return R.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!qv(e.keyPath,r)}));{const t=[...R],r=e.hasSubItems?((e,t)=>{const r=US(e,t);return r&&r.subItems?KS(r.subItems,t):[]})(A,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{R.find((t=>qv(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e(Uu,{enabled:!y&&!n,isOpen:P,renderElement:()=>e(Sh,{className:i,"data-testid":a,id:l,ref:Y,tabIndex:-1,onFocus:G,onBlur:Z,$focused:N,$disabled:n,$readOnly:y,$error:o,children:e(nC,{ref:V,disabled:n,expanded:P,listboxId:W,popupRole:"tree",readOnly:y,variant:F,children:e(Pu,{ref:U,$disabled:n,children:oS(R)?e(Nu,{$truncateType:E,children:t}):e(Lu,{$truncateType:E,children:X(Q())})})})}),renderDropdown:()=>e(mS,{listboxId:W,listItems:A,multiSelect:!0,selectedKeyPaths:j,itemsLoadState:k,itemTruncationType:E,enableSearch:h,searchPlaceholder:p,hideNoResultsDisplay:m,noResultsDescription:b,customLabels:v,onSelectItem:q,onSelectAll:K,onRetry:S,onSearch:x,variant:F,mode:u,width:T,matchElementWidth:!0}),onOpen:()=>{L(!0),J(!0),H(!0)},onClose:e=>{L(!1),J(!1),"click"!==e&&(H(!1),null==D||D())},onDismiss:()=>{var e;null===(e=V.current)||void 0===e||e.focus(),L(!1),J(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:_,rootNode:I})},GS=({placeholder:t="Select",options:r,disabled:n,error:o,className:i,"data-testid":a,id:l,selectedKeyPath:d,mode:u,valueToStringFunction:f,enableSearch:h,searchPlaceholder:p,selectableCategory:m,hideNoResultsDisplay:b,noResultsDescription:v,customLabels:y,readOnly:x,onBlur:w,onSearch:$,onSelectOption:C,onShowOptions:S,onHideOptions:D,onRetry:k,optionsLoadState:E="success",optionTruncationType:F="end",variant:O="default",alignment:_,dropdownZIndex:T,dropdownWidth:I,dropdownRootNode:M})=>{const A=r,[j,B]=g(d?lS([d]):new Set),[R,z]=g(),[P,L]=g(!1),[N,H]=g(!1),[W]=g((()=>Dd.generate())),Y=s(null),V=s(null),U=s(null);c((()=>{B(d?lS([d]):new Set);const e=aS(A,d||[]);z(null!=e?e:void 0)}),[d,A]);const K=e=>{var t;const{keyPath:r,item:{label:n,value:o}}=e;B(lS([r])),z({label:n,value:o}),L(!1),X(!1),null===(t=V.current)||void 0===t||t.focus(),null==C||C(r,o)},q=()=>{N||P||H(!0)},G=e=>{N&&!P&&Y.current&&!Y.current.contains(e.relatedTarget)&&(H(!1),null==w||w())},Z=()=>{if(!R)return"";const{label:e,value:t}=R;return f?f(t):e},Q=e=>{if("middle"===F){let t=0;return U&&U.current&&(t=U.current.getBoundingClientRect().width),kd.truncateOneLine(e,t,120,6)}return e},X=e=>{!e&&D&&D(),e&&S&&S()};return e(Uu,{enabled:!x&&!n,isOpen:P,renderElement:()=>e(Sh,{className:i,"data-testid":a,id:l,ref:Y,tabIndex:-1,onFocus:q,onBlur:G,$focused:N,$disabled:n,$readOnly:x,$error:o,children:e(nC,{ref:V,disabled:n,expanded:P,listboxId:W,popupRole:"tree",readOnly:x,variant:O,children:e(Pu,{ref:U,$disabled:n,children:oS(R)?e(Nu,{$truncateType:F,children:t}):e(Lu,{$truncateType:F,children:Q(Z())})})})}),renderDropdown:()=>e(mS,{listboxId:W,listItems:A,selectedKeyPaths:j,selectableCategory:m,itemsLoadState:E,itemTruncationType:F,enableSearch:h,searchPlaceholder:p,hideNoResultsDisplay:b,noResultsDescription:v,customLabels:y,onSelectItem:K,onRetry:k,onSearch:$,variant:O,mode:u,width:I,matchElementWidth:!0}),onOpen:()=>{L(!0),X(!0),H(!0)},onClose:e=>{L(!1),X(!1),"click"!==e&&(H(!1),null==w||w())},onDismiss:()=>{var e;null===(e=V.current)||void 0===e||e.focus(),L(!1),X(!1)},clickToToggle:!0,offset:8,alignment:_,fitAvailableHeight:!0,customZIndex:T,rootNode:M})};var ZS=function(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r};var QS=function(e){return function(t,r,n){for(var o=-1,i=Object(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}},XS=QS(),JS=qm;var eD=Ym;var tD=function(e,t){return function(r,n){if(null==r)return r;if(!eD(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=Object(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}((function(e,t){return e&&XS(e,t,JS)}));var rD=ZS,nD=tD,oD=wv,iD=function(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r},aD=hr;var sD=Re((function(e,t,r){var n=aD(e)?rD:iD,o=arguments.length<3;return n(e,oD(t),r,o,nD)}));const lD=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],cD=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var dD;!function(e){e.getCountries=()=>[].concat(...lD.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:cD("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,o=n.split(" ");o.shift();const i=o.join(" ");return sD(i,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const r=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(dD||(dD={}));const uD=t=>{var{onChange:r,value:n,allowClear:o,onClear:i,onBlur:a,error:l,fixedCountry:d=!1,optionPlaceholder:u="Select",optionSearchPlaceholder:f,enableSearch:h,onHideOptions:p,onShowOptions:m,placeholder:b,autoComplete:v}=t,y=ct(t,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[x]=g(dD.getCountries()),[w,$]=g(void 0),[C,S]=g(""),D=s(null),k=_d({ref:D,formatter:e=>dD.formatNumber(e.replace(/[^0-9]/g,""),w)});c((()=>{const e=x.filter((e=>e.countryCode===fD(null==n?void 0:n.countryCode)))[0];$(e),S(dD.formatNumber(null==n?void 0:n.number,e))}),[n]);const E=e=>{O(C,e),r&&F(C,e)},F=(e,t)=>{const n=dD.formatNumber(e,t);null==r||r({number:n.replace(/[\s()]+/g,""),countryCode:t&&hD(t.countryCode)})},O=(e,t)=>{S(dD.formatNumber(e,t)),$(t)};return e(ES,Object.assign({ref:D,value:C,onChange:()=>{const e=k();if(!e)return;const{nextValue:t,updateCaretPosition:n}=e;n(),O(t,w),r&&F(t,w)},allowClear:o&&!!C,onClear:()=>{i?i():S("")},onBlur:a,error:l,placeholder:b,addon:d?{type:"label",attributes:{value:hD(null==w?void 0:w.countryCode)}}:{type:"list",attributes:{"aria-label":"Country code",placeholder:u,options:x,selectedOption:w,enableSearch:h,searchPlaceholder:f,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:hD(e.countryCode)}),onSelectOption:E,onHideOptions:p,onShowOptions:m}},inputMode:"numeric",autoComplete:v,"aria-label":"Enter phone number"},y))},fD=e=>e?e.replace("+",""):"",hD=e=>e?e.includes("+")?e:`+${e}`:"";var pD=br,gD=Pr,mD=function(){return pD.Date.now()},bD=Bv,vD=Math.max,yD=Math.min;var xD=Re((function(e,t,r){var n,o,i,a,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=i}function g(){var e=mD();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?yD(r,i-(e-c)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=o=void 0,a)}function b(){var e=mD(),r=p(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=bD(t)||0,gD(r)&&(d=!!r.leading,i=(u="maxWait"in r)?vD(bD(r.maxWait)||0,t):i,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:m(mD())},b})),wD=RD(),$D=e=>MD(e,wD),CD=RD();$D.write=e=>MD(e,CD);var SD=RD();$D.onStart=e=>MD(e,SD);var DD=RD();$D.onFrame=e=>MD(e,DD);var kD=RD();$D.onFinish=e=>MD(e,kD);var ED=[];$D.setTimeout=(e,t)=>{const r=$D.now()+t,n=()=>{const e=ED.findIndex((e=>e.cancel==n));~e&&ED.splice(e,1),TD-=~e?1:0},o={time:r,handler:e,cancel:n};return ED.splice(FD(r),0,o),TD+=1,AD(),o};var FD=e=>~(~ED.findIndex((t=>t.time>e))||~ED.length);$D.cancel=e=>{SD.delete(e),DD.delete(e),kD.delete(e),wD.delete(e),CD.delete(e)},$D.sync=e=>{ID=!0,$D.batchedUpdates(e),ID=!1},$D.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,$D.onStart(r)}return n.handler=e,n.cancel=()=>{SD.delete(r),t=null},n};var OD="undefined"!=typeof window?window.requestAnimationFrame:()=>{};$D.use=e=>OD=e,$D.now="undefined"!=typeof performance?()=>performance.now():Date.now,$D.batchedUpdates=e=>e(),$D.catch=console.error,$D.frameLoop="always",$D.advance=()=>{"demand"!==$D.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):BD()};var _D=-1,TD=0,ID=!1;function MD(e,t){ID?(t.delete(e),e(0)):(t.add(e),AD())}function AD(){_D<0&&(_D=0,"demand"!==$D.frameLoop&&OD(jD))}function jD(){~_D&&(OD(jD),$D.batchedUpdates(BD))}function BD(){const e=_D;_D=$D.now();const t=FD(_D);t&&(zD(ED.splice(0,t),(e=>e.handler())),TD-=t),TD?(SD.flush(),wD.flush(e?Math.min(64,_D-e):16.667),DD.flush(),CD.flush(),kD.flush()):_D=-1}function RD(){let e=new Set,t=e;return{add(r){TD+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(TD-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,TD-=t.size,zD(t,(t=>t(r)&&e.add(t))),TD+=e.size,t=e)}}}function zD(e,t){e.forEach((e=>{try{t(e)}catch(e){$D.catch(e)}}))}var PD=Object.defineProperty,LD={};function ND(){}((e,t)=>{for(var r in t)PD(e,r,{get:t[r],enumerable:!0})})(LD,{assign:()=>tk,colors:()=>XD,createStringInterpolator:()=>qD,skipAnimation:()=>JD,to:()=>GD,willAdvance:()=>ek});var HD={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function WD(e,t){if(HD.arr(e)){if(!HD.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var YD=(e,t)=>e.forEach(t);function VD(e,t,r){if(HD.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var UD=e=>HD.und(e)?[]:HD.arr(e)?e:[e];function KD(e,t){if(e.size){const r=Array.from(e);e.clear(),YD(r,t)}}var qD,GD,ZD=(e,...t)=>KD(e,(e=>e(...t))),QD=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),XD=null,JD=!1,ek=ND,tk=e=>{e.to&&(GD=e.to),e.now&&($D.now=e.now),void 0!==e.colors&&(XD=e.colors),null!=e.skipAnimation&&(JD=e.skipAnimation),e.createStringInterpolator&&(qD=e.createStringInterpolator),e.requestAnimationFrame&&$D.use(e.requestAnimationFrame),e.batchedUpdates&&($D.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ek=e.willAdvance),e.frameLoop&&($D.frameLoop=e.frameLoop)},rk=new Set,nk=[],ok=[],ik=0,ak={get idle(){return!rk.size&&!nk.length},start(e){ik>e.priority?(rk.add(e),$D.onStart(sk)):(lk(e),$D(dk))},advance:dk,sort(e){if(ik)$D.onFrame((()=>ak.sort(e)));else{const t=nk.indexOf(e);~t&&(nk.splice(t,1),ck(e))}},clear(){nk=[],rk.clear()}};function sk(){rk.forEach(lk),rk.clear(),$D(dk)}function lk(e){nk.includes(e)||ck(e)}function ck(e){nk.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(nk,(t=>t.priority>e.priority)),0,e)}function dk(e){const t=ok;for(let r=0;r<nk.length;r++){const n=nk[r];ik=n.priority,n.idle||(ek(n),n.advance(e),n.idle||t.push(n))}return ik=0,(ok=nk).length=0,(nk=t).length>0}var uk="[-+]?\\d*\\.?\\d+",fk=uk+"%";function hk(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var pk=new RegExp("rgb"+hk(uk,uk,uk)),gk=new RegExp("rgba"+hk(uk,uk,uk,uk)),mk=new RegExp("hsl"+hk(uk,fk,fk)),bk=new RegExp("hsla"+hk(uk,fk,fk,uk)),vk=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,yk=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,xk=/^#([0-9a-fA-F]{6})$/,wk=/^#([0-9a-fA-F]{8})$/;function $k(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Ck(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,o=2*r-n,i=$k(o,n,e+1/3),a=$k(o,n,e),s=$k(o,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Sk(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Dk(e){return(parseFloat(e)%360+360)%360/360}function kk(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Ek(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Fk(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=xk.exec(e))?parseInt(t[1]+"ff",16)>>>0:XD&&void 0!==XD[e]?XD[e]:(t=pk.exec(e))?(Sk(t[1])<<24|Sk(t[2])<<16|Sk(t[3])<<8|255)>>>0:(t=gk.exec(e))?(Sk(t[1])<<24|Sk(t[2])<<16|Sk(t[3])<<8|kk(t[4]))>>>0:(t=vk.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=wk.exec(e))?parseInt(t[1],16)>>>0:(t=yk.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=mk.exec(e))?(255|Ck(Dk(t[1]),Ek(t[2]),Ek(t[3])))>>>0:(t=bk.exec(e))?(Ck(Dk(t[1]),Ek(t[2]),Ek(t[3]))|kk(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Ok=(e,t,r)=>{if(HD.fun(e))return e;if(HD.arr(e))return Ok({range:e,output:t,extrapolate:r});if(HD.str(e.output[0]))return qD(e);const n=e,o=n.output,i=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,o,i,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===o)return n;if(t===r)return e<=t?n:o;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=i(c),n===-1/0?c=-c:o===1/0?c+=n:c=c*(o-n)+n;return c}(e,i[t],i[t+1],o[t],o[t+1],l,a,s,n.map)}};var _k=1.70158,Tk=1.525*_k,Ik=_k+1,Mk=2*Math.PI/3,Ak=2*Math.PI/4.5,jk=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Bk={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Ik*e*e*e-_k*e*e,easeOutBack:e=>1+Ik*Math.pow(e-1,3)+_k*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Tk)/2:(Math.pow(2*e-2,2)*((Tk+1)*(2*e-2)+Tk)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Mk),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Mk)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Ak)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Ak)/2+1,easeInBounce:e=>1-jk(1-e),easeOutBounce:jk,easeInOutBounce:e=>e<.5?(1-jk(1-2*e))/2:(1+jk(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,o="end"===t?Math.floor(n):Math.ceil(n);return i=0,a=1,s=o/e,Math.min(Math.max(s,i),a);var i,a,s}},Rk=Symbol.for("FluidValue.get"),zk=Symbol.for("FluidValue.observers"),Pk=e=>Boolean(e&&e[Rk]),Lk=e=>e&&e[Rk]?e[Rk]():e,Nk=e=>e[zk]||null;function Hk(e,t){const r=e[zk];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Wk=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Yk(this,e)}},Yk=(e,t)=>qk(e,Rk,t);function Vk(e,t){if(e[Rk]){let r=e[zk];r||qk(e,zk,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Uk(e,t){const r=e[zk];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[zk]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Kk,qk=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Gk=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Zk=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Qk=new RegExp(`(${Gk.source})(%|[a-z]+)`,"i"),Xk=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Jk=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,eE=e=>{const[t,r]=tE(e);if(!t||QD())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Jk.test(r)?eE(r):r||e},tE=e=>{const t=Jk.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},rE=(e,t,r,n,o)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,nE=e=>{Kk||(Kk=XD?new RegExp(`(${Object.keys(XD).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Lk(e).replace(Jk,eE).replace(Zk,Fk).replace(Kk,Fk))),r=t.map((e=>e.match(Gk).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),o=n.map((t=>Ok({...e,output:t})));return e=>{const r=!Qk.test(t[0])&&t.find((e=>Qk.test(e)))?.replace(Gk,"");let n=0;return t[0].replace(Gk,(()=>`${o[n++](e)}${r||""}`)).replace(Xk,rE)}},oE="react-spring: ",iE=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${oE}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},aE=iE(console.warn);var sE=iE(console.warn);function lE(e){return HD.str(e)&&("#"==e[0]||/\d/.test(e)||!QD()&&Jk.test(e)||e in(XD||{}))}var cE=QD()?c:p;function dE(){const e=g()[1],t=(()=>{const e=s(!1);return cE((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var uE=e=>c(e,fE),fE=[];function hE(e){const t=s(void 0);return c((()=>{t.current=e})),t.current}var pE=Symbol.for("Animated:node"),gE=e=>e&&e[pE],mE=(e,t)=>((e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}))(e,pE,t),bE=e=>e&&e[pE]&&e[pE].getPayload(),vE=class{constructor(){mE(this,this)}getPayload(){return this.payload||[]}},yE=class e extends vE{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,HD.num(this._value)&&(this.lastPosition=this._value)}static create(t){return new e(t)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return HD.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,HD.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},xE=class e extends yE{constructor(e){super(0),this._string=null,this._toString=Ok({output:[e,e]})}static create(t){return new e(t)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(HD.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Ok({output:[this.getValue(),e]})),this._value=0,super.reset()}},wE={dependencies:null},$E=class extends vE{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return VD(this.source,((r,n)=>{var o;(o=r)&&o[pE]===o?t[n]=r.getValue(e):Pk(r)?t[n]=Lk(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&YD(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return VD(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){wE.dependencies&&Pk(e)&&wE.dependencies.add(e);const t=bE(e);t&&YD(t,(e=>this.add(e)))}},CE=class e extends $E{constructor(e){super(e)}static create(t){return new e(t)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(SE)),!0)}};function SE(e){return(lE(e)?xE:yE).create(e)}function DE(e){const t=gE(e);return t?t.constructor:HD.arr(e)?CE:lE(e)?xE:yE}var kE=(e,t)=>{const r=!HD.fun(e)||e.prototype&&e.prototype.isReactComponent;return u(((o,i)=>{const a=s(null),l=r&&d((e=>{a.current=function(e,t){e&&(HD.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[u,f]=function(e,t){const r=new Set;wE.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new $E(e),wE.dependencies=null,[e,r]}(o,t),h=dE(),p=()=>{const e=a.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&h()},g=new EE(p,f),m=s(void 0);cE((()=>(m.current=g,YD(f,(e=>Vk(e,g))),()=>{m.current&&(YD(m.current.deps,(e=>Uk(e,m.current))),$D.cancel(m.current.update))}))),c(p,[]),uE((()=>()=>{const e=m.current;YD(e.deps,(t=>Uk(t,e)))}));const b=t.getComponentProps(u.getValue());return n.createElement(e,{...b,ref:l})}))},EE=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&$D.write(this.update)}};var FE=Symbol.for("AnimatedComponent"),OE=e=>HD.str(e)?e:e&&HD.str(e.displayName)?e.displayName:HD.fun(e)&&e.name||null;function _E(e,...t){return HD.fun(e)?e(...t):e}var TE=(e,t)=>!0===e||!!(t&&e&&(HD.fun(e)?e(t):UD(e).includes(t))),IE=(e,t)=>HD.obj(e)?t&&e[t]:e,ME=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,AE=e=>e,jE=(e,t=AE)=>{let r=BE;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const o of r){const r=t(e[o],o);HD.und(r)||(n[o]=r)}return n},BE=["config","onProps","onStart","onChange","onPause","onResume","onRest"],RE={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function zE(e){const t=function(e){const t={};let r=0;if(VD(e,((e,n)=>{RE[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return VD(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function PE(e){return e=Lk(e),HD.arr(e)?e.map(PE):lE(e)?LD.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function LE(e){return HD.fun(e)||HD.arr(e)&&HD.obj(e[0])}var NE={tension:170,friction:26,mass:1,damping:1,easing:Bk.linear,clamp:!1},HE=class{constructor(){this.velocity=0,Object.assign(this,NE)}};function WE(e,t){if(HD.und(t.decay)){const r=!HD.und(t.tension)||!HD.und(t.friction);!r&&HD.und(t.frequency)&&HD.und(t.damping)&&HD.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var YE=[],VE=class{constructor(){this.changed=!1,this.values=YE,this.toValues=null,this.fromValues=YE,this.config=new HE,this.immediate=!1}};function UE(e,{key:t,props:r,defaultProps:n,state:o,actions:i}){return new Promise(((a,s)=>{let l,c,d=TE(r.cancel??n?.cancel,t);if(d)h();else{HD.und(r.pause)||(o.paused=TE(r.pause,t));let e=n?.pause;!0!==e&&(e=o.paused||TE(e,t)),l=_E(r.delay||0,t),e?(o.resumeQueue.add(f),i.pause()):(i.resume(),f())}function u(){o.resumeQueue.add(f),o.timeouts.delete(c),c.cancel(),l=c.time-$D.now()}function f(){l>0&&!LD.skipAnimation?(o.delayed=!0,c=$D.setTimeout(h,l),o.pauseQueue.add(u),o.timeouts.add(c)):h()}function h(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(u),o.timeouts.delete(c),e<=(o.cancelId||0)&&(d=!0);try{i.start({...r,callId:e,cancel:d},a)}catch(e){s(e)}}}))}var KE=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?ZE(e.get()):t.every((e=>e.noop))?qE(e.get()):GE(e.get(),t.every((e=>e.finished))),qE=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),GE=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),ZE=e=>({value:e,cancelled:!0,finished:!1});function QE(e,t,r,n){const{callId:o,parentId:i,onRest:a}=t,{asyncTo:s,promise:l}=r;return i||e!==s||t.reset?r.promise=(async()=>{r.asyncId=o,r.asyncTo=e;const c=jE(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const f=new Promise(((e,t)=>(d=e,u=t))),h=e=>{const t=o<=(r.cancelId||0)&&ZE(n)||o!==r.asyncId&&GE(n,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const i=new JE,a=new eF;return(async()=>{if(LD.skipAnimation)throw XE(r),a.result=GE(n,!1),u(a),a;h(i);const s=HD.obj(e)?{...e}:{...t,to:e};s.parentId=o,VD(c,((e,t)=>{HD.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return h(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(LD.skipAnimation)return XE(r),GE(n,!1);try{let t;t=HD.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(d),f]),g=GE(n.get(),!0,!1)}catch(e){if(e instanceof JE)g=e.result;else{if(!(e instanceof eF))throw e;g=e.result}}finally{o==r.asyncId&&(r.asyncId=i,r.asyncTo=i?s:void 0,r.promise=i?l:void 0)}return HD.fun(a)&&$D.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function XE(e,t){KD(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var JE=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},eF=class extends Error{constructor(){super("SkipAnimationSignal")}},tF=e=>e instanceof nF,rF=1,nF=class extends Wk{constructor(){super(...arguments),this.id=rF++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=gE(this);return e&&e.getValue()}to(...e){return LD.to(this,e)}interpolate(...e){return aE(`${oE}The "interpolate" function is deprecated in v9 (use "to" instead)`),LD.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Hk(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ak.sort(this),Hk(this,{type:"priority",parent:this,priority:e})}},oF=Symbol.for("SpringPhase"),iF=e=>(1&e[oF])>0,aF=e=>(2&e[oF])>0,sF=e=>(4&e[oF])>0,lF=(e,t)=>t?e[oF]|=3:e[oF]&=-3,cF=(e,t)=>t?e[oF]|=4:e[oF]&=-5,dF=class extends nF{constructor(e,t){if(super(),this.animation=new VE,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!HD.und(e)||!HD.und(t)){const r=HD.obj(e)?{...e}:{...t,from:e};HD.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(aF(this)||this._state.asyncTo)||sF(this)}get goal(){return Lk(this.animation.to)}get velocity(){const e=gE(this);return e instanceof yE?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return iF(this)}get isAnimating(){return aF(this)}get isPaused(){return sF(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:o}=n;const{config:i}=n,a=bE(n.to);!a&&Pk(n.to)&&(o=UD(Lk(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==xE?1:a?a[l].lastPosition:o[l];let d=n.immediate,u=c;if(!d){if(u=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],o=null!=s.v0?s.v0:s.v0=HD.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const f=i.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(HD.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);u=r+o/(1-e)*(1-n),d=Math.abs(s.lastPosition-u)<=f,a=o*n}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||f/10,n=i.clamp?0:i.bounce,l=!HD.und(n),h=r==c?s.v0>0:r<c;let p,g=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(a)>t,p||(d=Math.abs(c-u)<=f,!d));++e){l&&(g=u==c||u>c==h,g&&(a=-a*n,u=c));a+=(1e-6*-i.tension*(u-c)+.001*-i.friction*a)/i.mass*m,u+=a*m}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+i.easing(n)*(c-r),a=(u-s.lastPosition)/e,d=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}a&&!a[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,i.round)&&(r=!0)}));const s=gE(this),l=s.getValue();if(t){const e=Lk(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return $D.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(aF(this)){const{to:e,config:t}=this.animation;$D.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return HD.und(e)?(r=this.queue||[],this.queue=[]):r=[HD.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>KE(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),XE(this._state,e&&this._lastCallId),$D.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=HD.obj(r)?r[t]:r,(null==r||LE(r))&&(r=void 0),n=HD.obj(n)?n[t]:n,null==n&&(n=void 0);const o={to:r,from:n};return iF(this)||(e.reverse&&([r,n]=[n,r]),n=Lk(n),HD.und(n)?gE(this)||this._set(r):this._set(n)),o}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,jE(e,((e,t)=>/^on/.test(t)?IE(e,r):e))),bF(this,e,"onProps"),vF(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return UE(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{sF(this)||(cF(this,!0),ZD(i.pauseQueue),vF(this,"onPause",GE(this,uF(this,this.animation.to)),this))},resume:()=>{sF(this)&&(cF(this,!1),aF(this)&&this._resume(),ZD(i.resumeQueue),vF(this,"onResume",GE(this,uF(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=fF(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(ZE(this));const n=!HD.und(e.to),o=!HD.und(e.from);if(n||o){if(!(t.callId>this._lastToId))return r(ZE(this));this._lastToId=t.callId}const{key:i,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!o||n||t.default&&!HD.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const f=!WD(u,c);f&&(s.from=u),u=Lk(u);const h=!WD(d,l);h&&this._focus(d);const p=LE(t.to),{config:g}=s,{decay:m,velocity:b}=g;(n||o)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(WE(r={...r},t),t={...r,...t}),WE(e,t),Object.assign(e,t);for(const t in NE)null==e[t]&&(e[t]=NE[t]);let{frequency:n,damping:o}=e;const{mass:i}=e;HD.und(n)||(n<.01&&(n=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*o*i/n)}(g,_E(t.config,i),t.config!==a.config?_E(a.config,i):void 0);let v=gE(this);if(!v||HD.und(d))return r(GE(this,!0));const y=HD.und(t.reset)?o&&!t.default:!HD.und(u)&&TE(t.reset,i),x=y?u:this.get(),w=PE(d),$=HD.num(w)||HD.arr(w)||lE(w),C=!p&&(!$||TE(a.immediate||t.immediate,i));if(h){const e=DE(d);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let D=Pk(d),k=!1;if(!D){const e=y||!iF(this)&&f;(h||e)&&(k=WD(PE(x),w),D=!k),(WD(s.immediate,C)||C)&&WD(g.decay,m)&&WD(g.velocity,b)||(D=!0)}if(k&&aF(this)&&(s.changed&&!y?D=!0:D||this._stop(l)),!p&&((D||Pk(l))&&(s.values=v.getPayload(),s.toValues=Pk(d)?null:S==xE?[1]:UD(w)),s.immediate!=C&&(s.immediate=C,C||y||this._set(l)),D)){const{onRest:e}=s;YD(mF,(e=>bF(this,t,e)));const n=GE(this,uF(this,l));ZD(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&$D.batchedUpdates((()=>{s.changed=!y,e?.(n,this),y?_E(a.onRest,n):s.onStart?.(n,this)}))}y&&this._set(x),p?r(QE(t.to,t,this._state,this)):D?this._start():aF(this)&&!h?this._pendingCalls.add(r):r(qE(x))}_focus(e){const t=this.animation;e!==t.to&&(Nk(this)&&this._detach(),t.to=e,Nk(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Pk(t)&&(Vk(t,this),tF(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Pk(e)&&Uk(e,this)}_set(e,t=!0){const r=Lk(e);if(!HD.und(r)){const e=gE(this);if(!e||!WD(r,e.getValue())){const n=DE(r);e&&e.constructor==n?e.setValue(r):mE(this,n.create(r)),e&&$D.batchedUpdates((()=>{this._onChange(r,t)}))}}return gE(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,vF(this,"onStart",GE(this,uF(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),_E(this.animation.onChange,e,this)),_E(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;gE(this).reset(Lk(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),aF(this)||(lF(this,!0),sF(this)||this._resume())}_resume(){LD.skipAnimation?this.finish():ak.start(this)}_stop(e,t){if(aF(this)){lF(this,!1);const r=this.animation;YD(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Hk(this,{type:"idle",parent:this});const n=t?ZE(this.get()):GE(this.get(),uF(this,e??r.to));ZD(this._pendingCalls,n),r.changed&&(r.changed=!1,vF(this,"onRest",n,this))}}};function uF(e,t){const r=PE(t);return WD(PE(e.get()),r)}function fF(e,t=e.loop,r=e.to){const n=_E(t);if(n){const o=!0!==n&&zE(n),i=(o||e).reverse,a=!o||o.reset;return hF({...e,loop:t,default:!1,pause:void 0,to:!i||LE(r)?r:void 0,from:a?e.from:void 0,reset:a,...o})}}function hF(e){const{to:t,from:r}=e=zE(e),n=new Set;return HD.obj(t)&&gF(t,n),HD.obj(r)&&gF(r,n),e.keys=n.size?Array.from(n):null,e}function pF(e){const t=hF(e);return HD.und(t.default)&&(t.default=jE(t)),t}function gF(e,t){VD(e,((e,r)=>null!=e&&t.add(r)))}var mF=["onStart","onRest","onChange","onPause","onResume"];function bF(e,t,r){e.animation[r]=t[r]!==ME(t,r)?IE(t[r],e.key):void 0}function vF(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var yF=["onStart","onChange","onRest"],xF=1,wF=class{constructor(e,t){this.id=xF++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];HD.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(hF(e)),this}start(e){let{queue:t}=this;return e?t=UD(e).map(hF):this.queue=[],this._flush?this._flush(this,t):(FF(this,t),$F(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;YD(UD(t),(t=>r[t].stop(!!e)))}else XE(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(HD.und(e))this.start({pause:!0});else{const t=this.springs;YD(UD(e),(e=>t[e].pause()))}return this}resume(e){if(HD.und(e))this.start({pause:!1});else{const t=this.springs;YD(UD(e),(e=>t[e].resume()))}return this}each(e){VD(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,o=this._changed.size>0;(n&&!this._started||o&&!this._started)&&(this._started=!0,KD(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,a=o||i&&r.size?this.get():null;o&&t.size&&KD(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),i&&(this._started=!1,KD(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}$D.onFrame(this._onFrame)}};function $F(e,t){return Promise.all(t.map((t=>CF(e,t)))).then((t=>KE(e,t)))}async function CF(e,t,r){const{keys:n,to:o,from:i,loop:a,onRest:s,onResolve:l}=t,c=HD.obj(t.default)&&t.default;a&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const d=HD.arr(o)||HD.fun(o)?o:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):YD(yF,(r=>{const n=t[r];if(HD.fun(n)){const o=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=o.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):o.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,ZD(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const f=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),h=!0===t.cancel||!0===ME(t,"cancel");(d||h&&u.asyncId)&&f.push(UE(++e._lastAsyncId,{props:t,state:u,actions:{pause:ND,resume:ND,start(t,r){h?(XE(u,e._lastAsyncId),r(ZE(e))):(t.onRest=s,r(QE(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=KE(e,await Promise.all(f));if(a&&p.finished&&(!r||!p.noop)){const r=fF(t,a,o);if(r)return FF(e,[r]),CF(e,r,!0)}return l&&$D.batchedUpdates((()=>l(p,e,e.item))),p}function SF(e,t){const r={...e.springs};return t&&YD(UD(t),(e=>{HD.und(e.keys)&&(e=hF(e)),HD.obj(e.to)||(e={...e,to:void 0}),EF(r,e,(e=>kF(e)))})),DF(e,r),r}function DF(e,t){VD(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Vk(t,e))}))}function kF(e,t){const r=new dF;return r.key=e,t&&Vk(r,t),r}function EF(e,t,r){t.keys&&YD(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function FF(e,t){YD(t,(t=>{EF(e.springs,t,(t=>kF(t,e)))}))}var OF=n.createContext({pause:!1,immediate:!1}),_F=()=>{const e=[],t=function(t){sE(`${oE}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return YD(e,((e,o)=>{if(HD.und(t))n.push(e.start());else{const i=r(t,e,o);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return YD(e,(e=>e.pause(...arguments))),this},t.resume=function(){return YD(e,(e=>e.resume(...arguments))),this},t.set=function(t){YD(e,((e,r)=>{const n=HD.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return YD(e,((e,n)=>{if(HD.und(t))r.push(e.start());else{const o=this._getProps(t,e,n);o&&r.push(e.start(o))}})),r},t.stop=function(){return YD(e,(e=>e.stop(...arguments))),this},t.update=function(t){return YD(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return HD.fun(e)?e(r,t):e};return t._getProps=r,t};function TF(e,t){const r=HD.fun(e),[[n],o]=function(e,t,r){const n=HD.fun(t)&&t;n&&!r&&(r=[]);const o=a((()=>n||3==arguments.length?_F():void 0),[]),i=s(0),l=dE(),c=a((()=>({ctrls:[],queue:[],flush(e,t){const r=SF(e,t),n=i.current>0&&!c.queue.length&&!Object.keys(r).some((t=>!e.springs[t]));return n?$F(e,t):new Promise((n=>{DF(e,r),c.queue.push((()=>{n($F(e,t))})),l()}))}})),[]),d=s([...c.ctrls]),u=s([]),f=hE(e)||0;function h(e,r){for(let o=e;o<r;o++){const e=d.current[o]||(d.current[o]=new wF(null,c.flush)),r=n?n(o,e):t[o];r&&(u.current[o]=pF(r))}}a((()=>{YD(d.current.slice(e,f),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),d.current.length=e,h(f,e)}),[e]),a((()=>{h(0,Math.min(f,e))}),r);const p=d.current.map(((e,t)=>SF(e,u.current[t]))),g=b(OF),m=hE(g),v=g!==m&&function(e){for(const t in e)return!0;return!1}(g);cE((()=>{i.current++,c.ctrls=d.current;const{queue:e}=c;e.length&&(c.queue=[],YD(e,(e=>e()))),YD(d.current,((e,t)=>{o?.add(e),v&&e.start({default:g});const r=u.current[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),uE((()=>()=>{YD(c.ctrls,(e=>e.stop(!0)))}));const y=p.map((e=>({...e})));return o?[y,o]:y}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,o]:n}var IF=class extends nF{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Ok(...t);const r=this._get(),n=DE(r);mE(this,n.create(r))}advance(e){const t=this._get();WD(t,this.get())||(gE(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&AF(this._active)&&jF(this)}_get(){const e=HD.arr(this.source)?this.source.map(Lk):UD(Lk(this.source));return this.calc(...e)}_start(){this.idle&&!AF(this._active)&&(this.idle=!1,YD(bE(this),(e=>{e.done=!1})),LD.skipAnimation?($D.batchedUpdates((()=>this.advance())),jF(this)):ak.start(this))}_attach(){let e=1;YD(UD(this.source),(t=>{Pk(t)&&Vk(t,this),tF(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){YD(UD(this.source),(e=>{Pk(e)&&Uk(e,this)})),this._active.clear(),jF(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=UD(this.source).reduce(((e,t)=>Math.max(e,(tF(t)?t.priority:0)+1)),0))}};function MF(e){return!1!==e.idle}function AF(e){return!e.size||Array.from(e).every(MF)}function jF(e){e.idle||(e.idle=!0,YD(bE(e),(e=>{e.done=!0})),Hk(e,{type:"idle",parent:e}))}LD.assign({createStringInterpolator:nE,to:(e,t)=>new IF(e,t)});var BF=/^--/;function RF(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||BF.test(e)||PF.hasOwnProperty(e)&&PF[e]?(""+t).trim():t+"px"}var zF={};var PF={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},LF=["Webkit","Ms","Moz","O"];PF=Object.keys(PF).reduce(((e,t)=>(LF.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),PF);var NF=/^(matrix|translate|scale|rotate|skew)/,HF=/^(translate)/,WF=/^(rotate|skew)/,YF=(e,t)=>HD.num(e)&&0!==e?e+t:e,VF=(e,t)=>HD.arr(e)?e.every((e=>VF(e,t))):HD.num(e)?e===t:parseFloat(e)===t,UF=class extends $E{constructor({x:e,y:t,z:r,...n}){const o=[],i=[];(e||t||r)&&(o.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>YF(e,"px"))).join(",")})`,VF(e,0)]))),VD(n,((e,t)=>{if("transform"===t)o.push([e||""]),i.push((e=>[e,""===e]));else if(NF.test(t)){if(delete n[t],HD.und(e))return;const r=HF.test(t)?"px":WF.test(t)?"deg":"";o.push(UD(e)),i.push("rotate3d"===t?([e,t,n,o])=>[`rotate3d(${e},${t},${n},${YF(o,r)})`,VF(o,0)]:e=>[`${t}(${e.map((e=>YF(e,r))).join(",")})`,VF(e,t.startsWith("scale")?1:0)])}})),o.length&&(n.transform=new KF(o,i)),super(n)}},KF=class extends Wk{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return YD(this.inputs,((r,n)=>{const o=Lk(r[0]),[i,a]=this.transforms[n](HD.arr(o)?o:r.map(Lk));e+=" "+i,t=t&&a})),t?"none":e}observerAdded(e){1==e&&YD(this.inputs,(e=>YD(e,(e=>Pk(e)&&Vk(e,this)))))}observerRemoved(e){0==e&&YD(this.inputs,(e=>YD(e,(e=>Pk(e)&&Uk(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Hk(this,e)}};LD.assign({batchedUpdates:A,createStringInterpolator:nE,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var qF=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new $E(e),getComponentProps:n=e=>e}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=OE(e)||"Anonymous";return(e=HD.str(e)?i[e]||(i[e]=kE(e,o)):e[FE]||(e[FE]=kE(e,o))).displayName=`Animated(${t})`,e};return VD(e,((t,r)=>{HD.arr(e)&&(r=OE(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{className:n,style:o,children:i,scrollTop:a,scrollLeft:s,viewBox:l,...c}=t,d=Object.values(c),u=Object.keys(c).map((t=>r||e.hasAttribute(t)?t:zF[t]||(zF[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in o)if(o.hasOwnProperty(t)){const r=RF(t,o[t]);BF.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,d[r])})),void 0!==n&&(e.className=n),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new UF(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),GF=qF.animated;const ZF=T`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,QF=O`
    animation: ${Ji["duration-150"]} ${Ji["ease-default"]} ${ZF};
    width: 100%;
    height: 100%;
    transition: color ${Ji["duration-150"]} ${Ji["ease-default"]};
`,XF=F(de)`
    ${QF}
    color: ${Qi["icon-primary-subtlest"]};
`,JF=F(ue)`
    ${QF}
    color: ${Qi["icon-disabled-subtle"]};
`,eO=F(fe)`
    ${QF}
    color: ${e=>e.$disabled?Qi["icon-disabled-subtle"](e):Qi["icon-selected"](e)};
`,tO=F(he)`
    ${QF}
    color: ${e=>e.$disabled?Qi["icon-disabled-subtle"](e):Qi["icon-selected"](e)};
`,rO=F.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>O`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}

    // Show custom focus ring when input is focused
    input:focus-visible + svg {
        outline: 2px solid ${Qi["focus-ring"]};
        outline-offset: 0px;
        border-radius: 4px;
    }
`,nO=F.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${XF},
        &:hover
        + ${eO},
        &:hover
        + ${tO} {
        @media (pointer: fine) {
            color: ${e=>!e.disabled&&Qi["icon-hover"](e)};
        }
    }
`,oO=GF(F.div`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`),iO=F.ul`
    border-bottom-left-radius: ${ra.sm};
    border-bottom-right-radius: ${ra.sm};
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.$width||"100%"};
    overflow-y: auto;
    padding: ${ta["spacing-8"]};
    list-style-type: none;

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Qi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${ra.full};
        background-clip: padding-box;
    }

    ${ia.MaxWidth.sm} {
        max-height: 15rem;
    }
`,aO=F.li`
    &:hover,
    &:focus,
    &:active {
        background: ${Qi["bg-hover"]};
    }
    ${e=>{if(e.$checked)return O`
                background: ${Qi["bg-selected"]};
                &:hover,
                &:focus,
                &:active {
                    background: ${Qi["bg-selected-hover"]};
                }
            `}}
`,sO=F.button`
    display: flex;
    ${e=>e.$multiSelect?O`
                padding: ${ta["spacing-8"]} ${ta["spacing-16"]};
            `:O`
                padding: 15px ${ta["spacing-16"]}; // TODO: confirm vertical spacing
                align-items: center;
            `}
    margin: 0 -${ta["spacing-8"]};
    border: none;
    border-radius: ${ra.none};
    background: transparent;
    width: 100%;
    cursor: pointer;

    &:hover,
    &:visited,
    &:focus,
    &:active {
        outline-color: ${Qi["border-focus"]};
    }

    span {
        margin-bottom: 0;
    }
`,lO=O`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,cO=F.div`
    ${e=>"small"===e.$variant?Xi["body-md-regular"]:Xi["body-baseline-regular"]}
    color: ${Qi.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&lO}
`,dO=F.div`
    color: ${Qi["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&lO}

    ${e=>"next-line"===e.$labelDisplayType?O`
                    ${Xi["body-md-semibold"]}
                `:O`
                    ${Xi["body-baseline-regular"]}
                `}
`,uO=F.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return O`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return O`
                    ${cO} {
                        display: inline;
                    }

                    ${dO} {
                        display: inline;
                        margin-left: ${ta["spacing-8"]};
                    }
                `}}}
`,fO=F.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,hO=F.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,pO=F((r=>{var{className:n,checked:o,disabled:i,indeterminate:a,displaySize:l="default",id:d}=r,u=ct(r,["className","checked","disabled","indeterminate","displaySize","id"]);const f=s(null);c((()=>{f.current&&(f.current.indeterminate=null!=a&&a)}),[a]);return t(rO,{className:n,"data-testid":"checkbox",$displaySize:l,children:[e(nO,Object.assign({id:d,"data-testid":"checkbox-input",type:"checkbox",checked:o,ref:f,tabIndex:i?-1:0,disabled:i,"aria-checked":a?"mixed":o},u)),a?e(tO,{$disabled:i,"data-testid":"indeterminate","aria-hidden":!0}):o?e(eO,{$disabled:i,"data-testid":"checkmark","aria-hidden":!0}):i?e(JF,{"data-testid":"empty-disabled-checkbox","aria-hidden":!0}):e(XF,{$disabled:i,"data-testid":"empty-checkbox","aria-hidden":!0})]})}))`
    flex-shrink: 0;
    margin-right: ${ta["spacing-16"]};
`,gO=F.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${ta["spacing-16"]} 0 ${ta["spacing-8"]} 0;
`,mO=F.button`
    ${e=>"small"===e.$variant?Xi["body-md-semibold"]:Xi["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${Qi["text-primary"]};
`,bO=F.div`
    width: 100%;
    display: flex;
    padding: 15px ${ta["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${e=>"small"===e.$variant?Xi["body-md-regular"]:Xi["body-baseline-regular"]}
`,vO=F(ne)`
    height: 1em;
    width: 1em;
    margin-right: ${ta["spacing-4"]};
    color: ${Qi["icon-error"]};
`,yO=F(nf)`
    margin-right: ${ta["spacing-4"]};
    color: ${Qi.icon};
`,xO=e=>"small"===e?1:1.375,wO=e=>O`
        height: ${xO(e)}rem;
        width: ${xO(e)}rem;
    `,$O=F.li`
    background: ${Qi["bg-strong"]};
    display: flex;
    border-radius: ${ra.sm};
    align-items: center;
`,CO=F(kh)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 ${ta["spacing-8"]} 0 0;
    width: 100%;
`,SO=F(xe)`
    ${e=>wO(e.$variant)}
    margin: 0 ${ta["spacing-8"]};
    color: ${Qi.icon};
`,DO=F(Kd)`
    ${e=>wO(e.$variant)}
    padding: 0;
    margin: 0 ${ta["spacing-8"]};
    color: ${Qi.icon};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return O`
                svg {
                    ${wO(e.$variant)}
                }
            `}}
`,kO=u(((r,n)=>{const{onClear:o}=r,i=ct(r,["onClear"]);return t($O,{children:[e(SO,{$variant:r.variant}),e(CO,Object.assign({ref:n,$variant:r.variant},i)),i.value&&e(DO,{"aria-label":"Clear search",focusOutline:"browser",onClick:o,$variant:r.variant,children:e(pe,{})})]},"search")})),EO=n=>{var{listItems:o,listExtractor:i,valueExtractor:a,onSelectItem:l,listStyleWidth:d,visible:u,enableSearch:f,searchPlaceholder:h="Search",onSearch:p,searchFunction:m,onDismiss:b,disableItemFocus:v,multiSelect:y,selectedItems:x,onSelectAll:w,onRetry:$,itemsLoadState:C="success",itemTruncationType:S="end",itemMaxLines:D=2,labelDisplayType:k="inline",renderListItem:E,onBlur:F,hideNoResultsDisplay:O,renderCustomCallToAction:_,variant:T="default"}=n,I=ct(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[M,A]=g(0),[j,B]=g(""),[R,z]=g(null!=o?o:[]),[P,L]=g(0),N=TF({height:P}),H=s(null),W=s(null),Y=s([]),V=s(null),U=s(null),K=s(M),q=s(R),G=e=>{K.current=e,A(e)},Z=e=>{q.current=e,z(e)};c((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),c((()=>{ee(j)}),[j]),c((()=>{if(B(""),u){if(setTimeout((()=>{L(te())})),v)return;V&&V.current?(V.current.focus(),G(-1)):Y.current[M]&&Y.current[M].focus()}else L(0)}),[u]),c((()=>{if(u){const e=te();L(e)}}),[R,C]),c((()=>{Z(null!=o?o:[]),B(""),G(0)}),[o]);const Q=e=>{const t=i?i(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},X=e=>{if("inline"!==k)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return kd.getTextWidth(e,"1.125rem 'Open Sans'")>t*D},J=e=>!!Uv(x,(t=>qv(t,e))),ee=e=>{if(""===e)Z(null!=o?o:[]);else if(m){const t=m(e);Z(t)}else{const t=null==o?void 0:o.filter((t=>{const{title:r,secondaryLabel:n}=Q(t),o=e.trim().toLowerCase();return r.includes(o)||n&&n.includes(o)}));Z(null!=t?t:[])}},te=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),re=e=>{var t,r;if(H&&H.current.contains(e.target))switch(e.code){case"ArrowDown":if(K.current<q.current.length-1){const e=K.current+1;null===(t=Y.current[e])||void 0===t||t.focus(),G(e)}break;case"ArrowUp":if(K.current>0){const e=K.current-1;null===(r=Y.current[e])||void 0===r||r.focus(),G(K.current-1)}break;case"Escape":b&&b(!0)}},ne=(e,t)=>{e.preventDefault(),l&&l(t,(e=>a?a(e):e)(t))},oe=e=>{const t=e.target.value;B(t),p&&p()},ie=()=>{var e;B(""),null===(e=V.current)||void 0===e||e.focus(),p&&p()},ae=()=>{$&&$()},se=()=>{F&&F()},le=n=>t(r,{children:[e(fO,{$maxLines:D,"aria-hidden":!0,children:n}),e(hO,{$maxLines:D,"aria-hidden":!0,children:n})]}),ce=r=>{const{title:n,secondaryLabel:o}=Q(r),i=X(n),a=o&&X(o);return t(uO,{$labelDisplayType:i||a?"next-line":k,children:[e(cO,{$truncateType:S,$maxLines:D,$variant:T,"aria-label":n,children:"middle"===S&&i?le(n):n}),o&&e(dO,{$truncateType:S,$maxLines:D,$labelDisplayType:k,"aria-label":o,children:"middle"===S&&a?le(o):o})]})},de=()=>{if(!$||"success"===C)return R.map(((r,n)=>e(aO,{$checked:J(r)&&!y,children:t(sO,{$hasNextLineLabel:"next-line"===k&&R.length>0&&i&&"string"!=typeof i(R[0]),onClick:e=>{ne(e,r)},ref:e=>Y.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:u?0:-1,$multiSelect:y,onBlur:se,$variant:T,children:[y&&e(pO,{checked:J(r),displaySize:"small"}),E?E(r,{selected:J(r)}):ce(r)]})},((e,t)=>`item_${t}__${a?a(e):e}`)(r,n))))},ue=()=>{if(x&&y&&R.length>0&&!j&&"success"===C)return e(gO,{children:e(mO,{onClick:w,type:"button",$variant:T,children:0===x.length?"Select all":"Clear all"})},"selectAll")},fe=()=>{if(!O&&(j||!f)&&0===R.length&&"success"===C)return t(bO,{"data-testid":"list-no-results",$variant:T,children:[e(vO,{"data-testid":"no-result-icon",$variant:T}),"No results found."]},"noResults")},he=()=>{if($&&"loading"===C)return t(bO,{"data-testid":"list-loading",$variant:T,children:[e(yO,{}),"Loading..."]},"loading")},pe=()=>{if($&&"fail"===C)return t(bO,{"data-testid":"list-fail",$variant:T,children:[e(vO,{"data-testid":"load-error-icon",$variant:T}),"Failed to load. ",e(mO,{onClick:ae,type:"button",$variant:T,children:"Try again."})]},"noResults")};return e(r,{children:t(oO,{style:N,"data-testid":u?"dropdown-container":"dropdown-container-hidden",ref:H,children:[(()=>{if(u)return t(iO,Object.assign({ref:W,"data-testid":"dropdown-list",$width:d,role:"list"},I,{children:[(f||m)&&"success"===C?e(kO,{ref:V,onChange:oe,value:j,placeholder:h,"data-testid":"search-input","aria-label":"search-input",tabIndex:u?0:-1,onClear:ie,variant:T}):null,ue(),fe(),he(),pe(),de()]}))})(),(()=>{if(u&&_)return e("div",{ref:U,"data-testid":"custom-cta",children:_(b,R)})})()]})})},FO=({className:n,"data-testid":o,selectedOption:i,minimumCharacters:a=3,fetchOptions:l,placeholder:u="Enter here...",readOnly:f=!1,disabled:h=!1,error:p,valueExtractor:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y})=>{const[x,w]=g((()=>i?W(i):"")),[$,C]=g((()=>i?W(i):"")),[S,D]=g([]),[k,E]=g(!0),[F,O]=g(!1),[_,T]=g(!!i),[I,M]=g(i),A=s(l),j=e=>dt(void 0,void 0,void 0,(function*(){O(!1),E(!0);try{const t=yield A.current(e);C(e),D(t),E(!1)}catch(e){O(!0)}})),B=d(xD((e=>j(e)),500,{leading:!1,trailing:!0}),[]);c((()=>{A.current=l}),[l]),c((()=>{x&&x.length>=a&&x!==$?B(x):B.cancel(),""===x&&I&&(y&&y(void 0,void 0),P(),M(void 0)),i&&x!==W(i)&&T(!1)}),[x,i]),c((()=>{w(i?W(i):""),P(i),M(i)}),[i]);const R=e=>{w(e.target.value)},z=(e,t)=>{y&&y(e,t)},P=e=>{C(e?W(e):""),T(!!e),D([]),E(!0)},L=()=>{w(""),y&&y(void 0,void 0),P()},N=()=>{_||I?(P(I),w(W(I)),y&&y(I,Y(I)),M(I)):L()},H=()=>!!x&&x.length>=a&&!_,W=e=>e?v?v(e):e.toString():"",Y=e=>{if(e)return m?m(e):e},V=()=>e(tg,{type:"text",value:x,onChange:R,placeholder:u,readOnly:f,disabled:h,allowClear:!0,onClear:L,styleType:"no-border",onBlur:x.length<a?N:void 0});return t(Hu,{className:n,show:H(),error:p&&!H(),disabled:h,readOnly:f,testId:o,onBlur:N,children:[e(f?r:ju,{children:V()}),!f&&H()&&e(zu,{}),e(EO,{listItems:S,onSelectItem:z,valueExtractor:m,listExtractor:b,itemsLoadState:F?"fail":k?"loading":"success",visible:H(),disableItemFocus:!0,onRetry:()=>j(x),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]})},OO=F.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,_O=F(Qp)`
    position: absolute;
    right: 0;
    padding-left: ${ta["spacing-8"]};
    margin-right: 0;
`,TO=F(Au)`
    // space for clear icon
    padding-right: calc(1.25rem + ${ta["spacing-16"]});
`,IO=r=>{var{selectedOptions:n,placeholders:o={from:"Select",to:"Select"},options:i,disabled:a,className:l,readOnly:d,error:u,"data-testid":f,id:h,enableSearch:p=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,listStyleWidth:C,onShowOptions:S,onHideOptions:D,onRetry:k,optionsLoadState:E={from:"success",to:"success"},optionTruncationType:F="middle",renderCustomSelectedOption:O,renderListItem:_,renderCustomCallToAction:T}=r,I=ct(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[M,A]=g(),[j,B]=g(),R=s(null),z={from:s(null),to:s(null)},[P,L]=g("none");c((()=>{A(null==n?void 0:n.from),B(null==n?void 0:n.to)}),[n]);const N=e=>t=>{t.stopPropagation(),t.preventDefault(),a||d||L("from"===e?"from":"to"===e&&M?"to":"from")},H=e=>{var t;const r="from"===e?M:j;if(!r)return"";if(w)return w(r);if(v){const e=v(r);return y?y(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""}return r.toString()},W=(e,t)=>{if("middle"===F){let r=0;return z[e]&&z[e].current&&(r=z[e].current.getBoundingClientRect().width),kd.truncateOneLine(t,r,120,8)}return t},Y=e=>{!e&&D&&D(),e&&S&&S()},V=t=>{const r="from"===t?M:j;return r?O?O(r):e(Lu,{$truncateType:F,children:W(t,H(t))}):e(Nu,{$truncateType:F,children:W(t,o[t]||"")})},U=t=>e(Pu,{onClick:N(t),ref:z[t],$disabled:a,children:V(t)});return t(Hu,{show:"none"!==P,error:u&&!("none"!==P),disabled:a,readOnly:d,testId:f,onBlur:()=>{Y(!1),L("none"),M&&j||(B(void 0),A(void 0))},className:l,children:[t(OO,{children:[e(TO,Object.assign({type:"button","data-testid":h||"selector",disabled:a,ref:R,onClick:N()},I,{children:t(Yh,{currentActive:(()=>{switch(P){case"from":return"start";case"to":return"end";case"none":return P}})(),children:[U("from"),U("to")]})})),"none"===P&&M&&j&&!d&&!a&&e(_O,{onClick:e=>{e.stopPropagation(),A(void 0),B(void 0),$&&$({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear",children:e(Xp,{"aria-hidden":!0})})]}),"none"!==P&&e(zu,{}),(()=>{if("none"===P)return null;const t=i[P];if(t&&t.length>0){const r="from"===P?M:j;return e(EO,{listItems:t,onSelectItem:(e,t)=>((e,t,r)=>{var n;"from"===r?A(e):B(e),Y(!1),R&&(null===(n=R.current)||void 0===n||n.focus()),$&&$({[r]:e},t),"from"===r?(B(void 0),L("to"),Y(!0)):L("none")})(e,t,P),onDismiss:()=>(()=>{var e;L("none"),Y(!1),R&&(null===(e=R.current)||void 0===e||e.focus()),M&&j||(B(void 0),A(void 0))})(),valueExtractor:v,listExtractor:x,listStyleWidth:C,visible:!0,enableSearch:p,searchPlaceholder:b,searchFunction:m,"data-testid":`${P}-dropdown-list`,selectedItems:r?[r]:[],onRetry:k,itemsLoadState:E[P],itemTruncationType:F,renderListItem:_,renderCustomCallToAction:T})}return null})()]})},MO=({selectedOption:t,placeholder:r="Select",options:n,disabled:o,error:i,className:a,"data-testid":l,id:d,enableSearch:u=!1,searchFunction:f,searchPlaceholder:h,valueExtractor:p,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:C="success",optionTruncationType:S="end",renderCustomSelectedOption:D,renderListItem:k,hideNoResultsDisplay:E,noResultsDescription:F,customLabels:O,renderCustomCallToAction:_,onBlur:T,variant:I="default",readOnly:M,alignment:A,dropdownZIndex:j,dropdownRootNode:B,dropdownWidth:R})=>{const[z,P]=g(t),[L,N]=g(!1),[H,W]=g(!1),[Y]=g((()=>Dd.generate())),V=s(null),U=s(null),K=s(null);c((()=>{P(t)}),[t]);const q=(e,t)=>{var r;null===(r=U.current)||void 0===r||r.focus(),P(e),N(!1),ee(!1),null==y||y(e,t)},G=()=>{L&&(N(!1),ee(!1))},Z=()=>{H||L||W(!0)},Q=e=>{H&&!L&&V.current&&!V.current.contains(e.relatedTarget)&&(W(!1),null==T||T())},X=()=>{var e;if(!z)return"";if(v)return v(z);if(p){const t=p(z);return m?m(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return z.toString()},J=e=>{if("middle"===S){let t=0;return K&&K.current&&(t=K.current.getBoundingClientRect().width),kd.truncateOneLine(e,t,120,8)}return e},ee=e=>{e?null==x||x():null==w||w()};return e(_$,{children:e(Uu,{enabled:!M&&!o,isOpen:L,renderElement:()=>e(Sh,{className:a,"data-testid":l,id:d,ref:V,tabIndex:-1,onFocus:Z,onBlur:Q,$focused:H,$disabled:o,$readOnly:M,$error:i,children:e(nC,{ref:U,disabled:o,expanded:L,listboxId:Y,popupRole:"listbox",readOnly:M,variant:I,children:e(Pu,{ref:K,$disabled:o,children:z?D?D(z):e(Lu,{$truncateType:S,$variant:I,children:J(X())}):e(Nu,{$truncateType:S,$variant:I,children:r})})})}),renderDropdown:()=>e(eC,{listboxId:Y,listItems:n,onSelectItem:q,onDismiss:G,valueExtractor:p,listExtractor:b,enableSearch:u,searchPlaceholder:h,searchFunction:f,selectedItems:z?[z]:[],onRetry:$,itemsLoadState:C,itemTruncationType:S,renderListItem:k,hideNoResultsDisplay:E,noResultsDescription:F,customLabels:O,renderCustomCallToAction:_,variant:I,width:R,matchElementWidth:!0}),onOpen:()=>{N(!0),ee(!0),W(!0)},onClose:e=>{N(!1),ee(!1),"click"!==e&&(W(!1),null==T||T())},onDismiss:()=>{var e;null===(e=U.current)||void 0===e||e.focus(),N(!1),ee(!1)},clickToToggle:!0,offset:8,alignment:A,fitAvailableHeight:!0,customZIndex:j,rootNode:B})})},AO=F.div`
    overflow: hidden;
    border: ${ea["width-010"]} ${ea.solid} ${Qi.border};
    border-radius: ${ra.sm};
    background: ${Qi.bg};
    padding: ${ta["spacing-16"]};
    min-width: 23rem;

    ${ia.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${oa["sm-margin"]} * 2);
    }

    ${ia.MaxWidth.xs} {
        width: calc(100vw - ${oa["xs-margin"]} * 2);
    }

    ${ia.MaxWidth.xxs} {
        width: calc(100vw - ${oa["xxs-margin"]} * 2);
    }
`,jO=F.div`
    display: flex;
    align-items: baseline;
`,BO=F.div`
    margin: 0 0.5rem;
    color: ${Qi.text};
`,RO=F(F.div`
    ${e=>"small"===e.$variant?Xi["body-md-regular"]:Xi["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return O`
                    ${ma(1)}
                `}}
    overflow: hidden;
`)`
    color: ${Qi["text-subtler"]};
`,zO=r=>{var{alignment:n="left",className:o,disabled:i,dropdownZIndex:a,error:l,histogramSlider:d,id:u,onBlur:f,onChange:h,onChangeEnd:p,optionTruncationType:m="end",placeholder:b="Select",rangeLabelPrefix:v,rangeLabelSuffix:y,readOnly:x,renderRangeLabel:w,value:$,dropdownRootNode:C}=r,S=ct(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value","dropdownRootNode"]);const{interval:D,bins:k=[],renderEmptyView:E,ariaLabels:F}=d,O=k.map((e=>e.minValue)),_=Math.min(...O),[T,I]=g(U()),[M,A]=g(!1),[j,B]=g(!1),[R]=g((()=>Dd.generate())),z=s(null),P=s(null),L=s(null),N=S["data-testid"]||"select-histogram";c((()=>{$!==T&&I(U())}),[$]);const H=e=>{I(e),null==h||h(e)},W=e=>{I(e),null==p||p(e)},Y=()=>{j||M||B(!0)},V=e=>{j&&!M&&z.current&&!z.current.contains(e.relatedTarget)&&(B(!1),null==f||f())};function U(){return null!=$?$:[_,_+D]}const K=e=>w?w(e):t(Ca.BodyBL,{children:[v,e,y]});return e(_$,{children:e(Uu,{enabled:!x&&!i,isOpen:M,renderElement:()=>e(Sh,{className:o,"data-testid":N,id:u,ref:z,tabIndex:-1,onFocus:Y,onBlur:V,$focused:j,$disabled:i,$readOnly:x,$error:l,children:e(nC,{ref:P,disabled:i,expanded:M,listboxId:R,popupRole:"dialog",readOnly:x,variant:"default",children:e(Pu,{ref:L,$disabled:i,children:O&&0!==O.length?t(jO,{children:[K(T[0]),e(BO,{children:"-"}),K(T[1])]}):e(RO,{$truncateType:m,$variant:"default",children:b})})})}),renderDropdown:({elementWidth:t,styles:r,setFloatingRef:n,getFloatingProps:o})=>e(AO,Object.assign({style:Object.assign(Object.assign({},r),{width:t}),ref:n},o(),{children:e(Gp,{interval:D,value:T,bins:k,onChange:H,onChangeEnd:W,showRangeLabels:!1,renderEmptyView:E,ariaLabels:F})})),onOpen:()=>{A(!0)},onClose:()=>{A(!1)},onDismiss:()=>{var e;null===(e=P.current)||void 0===e||e.focus(),A(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:a,rootNode:C})})},PO=t=>{var{value:r,ariaLabel:n,onChange:o,onChangeEnd:i}=t,a=ct(t,["value","ariaLabel","onChange","onChangeEnd"]);const[s,l]=g(d());c((()=>{r!==s[0]&&l(d())}),[r]);function d(){return null!=r?[r]:[0]}return e(Wp,Object.assign({},a,{value:s,numOfThumbs:1,onChange:e=>{const[t]=e;l([t]),null==o||o(t)},onChangeEnd:e=>{const[t]=e;l([t]),null==i||i(t)},ariaLabels:n?[n]:void 0}))},LO=F.p`
    text-align: right;
    ${Xi["body-sm-semibold"]}
    color: ${Qi["text-subtler"]};
`,NO=({value:t,maxLength:n,renderCustomCounter:i})=>{const[a,s]=g("");c((()=>{s(l(`${t||""}`))}),[t,n]);const l=e=>{if(i)return i(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e(r,{children:o.isValidElement(a)?a:e(LO,{"data-testid":"counter-label",children:a})})},HO=F.div`
    display: flex;
    flex-direction: column;
`,WO=F.textarea`
    border: ${ea["width-010"]} ${ea.solid} ${Qi.border};
    border-radius: ${ra.sm};
    background: ${Qi.bg};
    outline: none;
    overflow: hidden;

    display: block;
    padding: ${ta["spacing-12"]} ${ta["spacing-16"]};
    width: 100%;

    ${Xi["body-baseline-regular"]}
    color: ${Qi.text};

    &:focus,
    &:active {
        outline-offset: -1px;
        outline: ${ea["width-020"]} ${ea.solid}
            ${Qi["border-focus"]};
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Qi["text-subtler"]};
    }

    ${e=>e.readOnly?O`
                border-color: transparent;
                background: transparent !important;
                padding: ${ta["spacing-12"]} 0;

                &:focus,
                &:active {
                    outline-color: ${Qi["border-focus"]};
                }
            `:e.disabled?O`
                background: ${Qi["bg-disabled"]};
                cursor: not-allowed;

                &:focus,
                &:active {
                    outline-color: ${Qi["border-disabled"]};
                }
            `:e.$error?O`
                border-color: ${Qi["border-error"]};

                &:focus,
                &:active {
                    outline-color: ${Qi["border-error-focus"]};
                }
            `:void 0}
`,YO=o.forwardRef(((t,r)=>{var{value:n,disabled:o,error:i,rows:a=5,prefix:s,transformValue:l,onChange:d,maxLength:u}=t,f=ct(t,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[h,p]=g(n);c((()=>{p(n)}),[n]);return e(WO,Object.assign({ref:r,disabled:o,value:s?s+(null!=h?h:""):h,onChange:e=>{let t=e.target.value;if(s){t.startsWith(s)||(t=s+t.trimStart()),t.length<s.length&&(t=s);if((e.target.selectionStart||0)<s.length)return void e.preventDefault();const r=t.slice(s.length),n=l?l(r):r;if(p(n),e.target.value=s+n,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});d(t)}}else{const r=l?l(null!=t?t:""):t;p(r),e.target.value=r,d&&d(e)}},onKeyDown:e=>{if(!s)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=s.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=s.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(s.length,s.length)})))},$error:i,rows:a,maxLength:s&&u?s.length+u:u},f))}));o.forwardRef(((r,n)=>{var{value:o,disabled:i,rows:a=5,onChange:s,transformValue:l,prefix:d,maxLength:u,renderCustomCounter:f}=r,h=ct(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[p,m]=g(o);c((()=>{m(o)}),[o]);return t(HO,{children:[e(YO,Object.assign({ref:n,disabled:i,value:p,rows:a||5,onChange:e=>{const t=e.target.value;m(t),s&&s(e)},prefix:d,transformValue:l,maxLength:u},h)),u&&e(NO,{value:p,maxLength:u,renderCustomCounter:f})]})}));const VO=F.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${ta["spacing-4"]};
`,UO=F.div`
    display: flex;
    flex: 1;
    margin-right: ${ta["spacing-12"]};
    gap: ${ta["spacing-4"]};
`,KO=F(gu)`
    margin-top: 0;
`,qO=o.forwardRef(((n,o)=>{const{label:i,value:a,errorMessage:s,id:l="form-textarea","data-error-testid":d,"data-testid":u,onChange:f,layoutType:h,mobileCols:p,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,transformValue:D,prefix:k=""}=n,E=ct(n,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[F,O]=g(a);c((()=>{O(a)}),[a]);return t(_u,{id:l,label:i,disabled:E.disabled,layoutType:h,mobileCols:p,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,children:[e(YO,Object.assign({id:`${l}-base`,"data-testid":u||l,value:F,error:!!s,onChange:e=>{const t=e.target.value;O(t),f&&f(e)},ref:o,prefix:k,transformValue:D},E)),s||E.maxLength?t(VO,{children:[s&&t(UO,{children:[e(hu,{"aria-hidden":!0}),e(KO,{"data-testid":d||(l?`${l}-error-message`:"error-message"),children:s})]}),E.maxLength&&e(NO,{value:F,maxLength:E.maxLength,renderCustomCounter:E.renderCustomCounter})]}):e(r,{})]})})),GO=F.div`
    position: relative;
`,ZO=F(Dh)`
    height: 3rem;
    gap: ${ta["spacing-8"]};
`,QO=F(kh)`
    display: block;
    width: 100%;
    flex: 1;
`;var XO,JO;!function(e){e.AM="AM",e.PM="PM"}(XO||(XO={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,o]=e.split(":"),i=parseInt(n,10),a=parseInt(o,10);if(isNaN(i)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*i+a,l=s%t,c=0===l?s:r?s+(t-l):s-l,d=c%60;return`${Math.floor(c/60).toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let o=nd(e,n),i=nd(t,n);o.isSame(i)&&(i=i.add(1,"day"));const a=[];for(;o.isBefore(i);)a.push(o.format(r)),o=o.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:XO.AM};if(!t)return r;try{if("24hr"===e){const n=r_(t,e);r.minute=kd.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period=XO.AM,r.hour=0===o?"12":kd.padValue(o.toString())):(r.period=XO.PM,r.hour=12===o?o.toString():kd.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=r_(t,e);r.hour=kd.padValue(n),r.minute=kd.padValue(o),r.period="am"===i.toLowerCase()?XO.AM:XO.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?kd.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return kd.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?kd.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?kd.padValue(n.toString()):13===n?kd.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===XO.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return kd.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:o=""}=r_(e,t),i=kd.padValue(r);let a=`${i}:${kd.padValue(n)}`;return"12hr"===t?(a+=o.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&i<12&&(i+=12),"am"===r&&12===i&&(i=0),n_(i,o)}return e},e.generateTimings=(t,r="12hr",n,o)=>{const i=[];let a=0,s=1440-t;for(n&&(a=e.timeToMinutes(n)),o&&(s=e.timeToMinutes(o));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=n_(e,n,t);i.push(r)}else{const t=n_(e,n);i.push(t)}a+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&o<12?o+=12:("am"===a&&12===o||24===o)&&(o=0),n_(o,i);a?0===o||24===o?(a="am",o=12):o>12&&(a="pm",o-=12):(a=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return n_(o,i,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let o="",i=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<i)i=Math.abs(r),o=t;else if(r>0)break}return o},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&12!==i&&(i+=12),"am"===r&&12===i&&(i=0),60*i+o},e.calculateDuration=(t,r)=>{const n=e.timeToMinutes(t);return e.timeToMinutes(r)-n}}(JO||(JO={}));const e_=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},t_=e=>{const t=parseInt(e);return t>=0&&t<=59},r_=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!e_(r[0],t)||!t_(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!e_(r[0],t)||!t_(r[1]))throw n;return{hour:r[0],minute:r[1]};var o},n_=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,o_=F.div`
    padding: ${ta["spacing-8"]} ${ta["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Qi["bg-error"](e),r=Qi["border-error"](e);break;case"success":t=Qi["bg-success"](e),r=Qi["border-success"](e);break;case"warning":default:t=Qi["bg-warning"](e),r=Qi["border-warning"](e);break;case"info":t=Qi["bg-info"](e),r=Qi["border-info"](e);break;case"description":t=Qi["bg-strong"](e),r=Qi["border-strong"](e)}return O`
            background: ${t};
            border-left: ${ea["width-020"]} ${ea.solid}
                ${r};
        `}}
`,i_=F.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${ta["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Qi["icon-error"](e);break;case"success":t=Qi["icon-success"](e);break;case"warning":default:t=Qi["icon-warning"](e);break;case"info":t=Qi["icon-info"](e);break;case"description":t=Qi["icon-subtle"](e)}return O`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,a_=F(Ca.LinkSM)`
    ${e=>"small"===e.$sizeType?O`
                ${Xi["body-sm-semibold"]}
                margin-top: ${ta["spacing-4"]};
            `:O`
                ${Xi["body-md-semibold"]}
                margin-top: ${ta["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${ta["spacing-4"]};
    }
`,s_=F.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,l_=F.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return O`
                margin-bottom: ${ta["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,c_=F.div`
    color: ${Qi.text};

    ${e=>"small"===e.$sizeType?Qd({textSize:"body-sm"}):Qd({textSize:"body-md"})}
`,d_=F.button`
    ${e=>"small"===e.$sizeType?O`
                ${Xi["body-sm-semibold"]}
            `:O`
                ${Xi["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${ta["spacing-4"]};
    margin-top: ${ta["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Qi["text-primary"]};
`,u_=F(ge)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Ji["duration-350"]} ${Ji["ease-standard"]};
`,f_=r=>{var{type:n,className:o,children:i,actionLink:a,actionLinkIcon:s,sizeType:l="default",showIcon:u=!1,customIcon:f,maxCollapsedHeight:h,role:p}=r,m=ct(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight","role"]);const[b,v]=g(!1),[y,x]=g(!1),{height:w,ref:$}=Zc(),[C]=g((()=>Dd.generate())),S=d((()=>{v(!h),x(D())}),[h,w]),D=()=>!(!w||!h)&&w>h;c((()=>{S()}),[h,w,S]);return t(o_,{className:o,$type:n,$sizeType:l,"aria-label":`${(()=>{switch(n){case"success":return"Success";case"warning":return"Warning";case"error":return"Error";case"info":return"Information";case"description":return"Description";default:return"Alert"}})()}`,"data-testid":m["data-testid"],role:p,children:[u&&e(i_,{$sizeType:l,$type:n,children:(()=>{if(n&&f)return f;switch(n){case"success":return e(Oe,{"aria-hidden":!0});case"warning":return e(Fe,{"aria-hidden":!0});case"error":return e(ne,{"aria-hidden":!0});case"info":case"description":return e(R,{"aria-hidden":!0});default:return null}})()}),t(s_,{children:[y&&t(d_,{$sizeType:l,$type:n,type:"button","aria-expanded":b,"aria-controls":C,onClick:()=>v(!b),children:["Show ",b?"less":"more",e(u_,{$expanded:b})]}),t(l_,{id:C,$maxCollapsedHeight:D()?h:void 0,$showMore:b,$hasActionLink:!!a,inert:Gu(!!h&&!b),children:[e(c_,{ref:$,$type:n,$sizeType:l,children:i}),a?t(a_,Object.assign({"data-testid":"action-link",$type:n,$sizeType:l,underlineStyle:"none"},a,{children:[a.children,s||e(Ee,{})]})):null]})]})]})},h_=F.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?O`
                    color: ${Qi["icon-selected-disabled"]};
                `:O`
                    color: ${Qi["icon-disabled-subtle"]};
                `:e.$active?O`
                color: ${Qi["icon-selected"]};
            `:O`
            color: ${Qi["icon-subtle"]};
        `};
`,p_=O`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${Xi.Spec["weight-regular"]};
        ${e=>e.$size&&Xi[`${e.$size}-regular`]}
        color: ${Qi.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,g_=F.ol`
    ${p_}

    margin-left: 3rem;

    ${ia.MaxWidth.lg} {
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
`,m_=F.ul`
    ${p_}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,b_=t=>{var{size:r,bulletType:n,bottomMargin:o,children:i}=t,a=ct(t,["size","bulletType","bottomMargin","children"]);return e(m_,Object.assign({$size:r,$bulletType:n,$bottomMargin:o},a,{children:i}))};b_.displayName="TextList.Ul";const v_=t=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:a}=t,s=ct(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e(g_,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},s,{children:a}))};v_.displayName="TextList.Ol";const y_=b_,x_=F.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${ra.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Qi.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${Qi["focus-ring"]};
        outline-offset: 0;
    }

    ${e=>{if(!e.$indicator)return O`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return O`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?O`
                            border-color: ${Qi["border-error"]};
                        `:O`
                            border-color: ${Qi["border-error"]};

                            &:has(${k_}:hover) {
                                @media (pointer: fine) {
                                    background: ${Qi["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?O`
                            border: none;
                            background: ${Qi["bg-selected-disabled"]};
                        `:O`
                            border: none;
                        `:e.$selected?O`
                        border: none;
                        background: ${Qi["bg-selected"]};

                        &:has(${k_}:hover) {
                            @media (pointer: fine) {
                                background: ${Qi["bg-selected-hover"]};

                                & ${C_} {
                                    color: ${Qi["text-selected-hover"]};
                                }

                                & ${j_} {
                                    color: ${Qi["icon-selected-hover"]};
                                }
                            }
                        }
                    `:O`
                    border: none;

                    &:has(${k_}:hover) {
                        @media (pointer: fine) {
                            background: ${Qi["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?O`
                            border-color: ${Qi["border-error"]};
                        `:O`
                            border-color: ${Qi["border-error"]};

                            &:has(${k_}:hover) {
                                @media (pointer: fine) {
                                    background: ${Qi["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?O`
                            border-color: ${Qi["border-selected-disabled"]};
                            background: ${Qi["bg-selected-disabled"]};
                        `:O`
                            border-color: ${Qi["border-disabled"]};
                            background: ${Qi["bg-disabled"]};
                        `:e.$selected?O`
                        border-color: ${Qi["border-selected"]};
                        background: ${Qi["bg-selected"]};

                        &:has(${k_}:hover) {
                            @media (pointer: fine) {
                                background: ${Qi["bg-selected-hover"]};

                                & ${C_} {
                                    color: ${Qi["text-selected-hover"]};
                                }

                                & ${j_} {
                                    color: ${Qi["icon-selected-hover"]};
                                }
                            }
                        }
                    `:O`
                    border-color: ${Qi.border};

                    &:has(${k_}:hover) {
                        @media (pointer: fine) {
                            background: ${Qi["bg-hover-subtle"]};
                        }
                    }
                `}
`,w_=F.input`
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
`,$_=F.div`
    display: flex;
`,C_=F.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?O`
                    color: ${Qi["text-selected-disabled"]};
                `:O`
                    color: ${Qi["text-disabled"]};
                `:e.$selected?O`
                color: ${Qi["text-selected"]};
            `:O`
            color: ${Qi.text};
        `}
`,S_=F.label`
    ${Xi["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${ia.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${ia.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,D_=F.div`
    ${Xi["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Xi["body-md-semibold"]}
    }
`,k_=F.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,E_=F.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,F_=F.button`
    color: ${e=>e.$disabled?Qi["text-disabled"]:Qi["text-error"]};
    white-space: nowrap;
    ${Xi["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,O_=F.button`
    color: ${e=>e.disabled?Qi["text-disabled"]:Qi["text-primary"]};
    ${Xi["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Qi.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,__=F.div`
    width: 100%;
    color: ${e=>e.$disabled?Qi["text-disabled"]:Qi["text-error"]};
    border: none;
    background: ${Qi.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,T_=F(f_)`
    width: 100%;
    user-select: none;
`,I_=F.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Qi.bg};
    ${Qd({textSize:"body-md"})}

    ${e=>e.$disabled?O`
                color: ${Qi["text-disabled"]};
            `:e.$selected?O`
                color: ${Qi["text-selected"]};
            `:O`
                color: ${Qi.text};
            `}
`,M_=F(Ca.BodyMD)`
    color: ${e=>e.$disabled?Qi["text-disabled"]:Qi["text-error"]};
`,A_=F(y_)`
    color: ${e=>e.$disabled?Qi["text-disabled"]:Qi["text-error"]};
`,j_=F((({type:t,active:r=!1,disabled:n,className:o})=>{let i;switch(t){case"checkbox":i=e(r?ve:me,{});break;case"radio":i=e(r?Te:_e,{});break;case"tick":i=e(ye,{});break;case"cross":i=e(re,{});break;default:i=null}return e(h_,{className:o,$active:r,$disabled:n,"aria-hidden":!0,children:i})}))`
    ${e=>e.$disabled?e.$selected?O`
                    color: ${Qi["icon-selected-disabled"]};
                `:O`
                    color: ${Qi["icon-disabled-subtle"]};
                `:e.$selected?O`
                color: ${Qi["icon-selected"]};
            `:O`
            color: ${Qi["icon-subtle"]};
        `};
`,B_=GF(F.div`
    position: absolute;
    top: calc(3rem + ${ta["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${ia.MaxWidth.xxs} {
        max-width: 100%;
    }
`),R_=F.div`
    position: relative;
    width: 100%;
    padding: ${ta["spacing-8"]} ${ta["spacing-20"]}
        ${ta["spacing-24"]} ${ta["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Qi.bg};
    border: ${ea["width-010"]} ${ea.solid} ${Qi.border};
    border-radius: ${ra.sm};
`,z_=F.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${ia.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,P_=F.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${ta["spacing-16"]};
    gap: ${ta["spacing-8"]} ${ta["spacing-16"]};

    ${ia.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${ta["spacing-32"]};
    }
`,L_=F.div`
    display: flex;
    align-items: center;
    margin-right: ${ta["spacing-32"]};

    ${ia.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,N_=F.div`
    display: flex;
    gap: ${ta["spacing-8"]};

    ${ia.MaxWidth.lg} {
        flex-direction: column;
    }

    ${ia.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,H_=F.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${ia.MaxWidth.xxs} {
        width: 6rem;
    }
`,W_=F(Kd)`
    width: 5rem;
    padding: ${ta["spacing-16"]} 0;
    color: ${Qi.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Qi["icon-hover"]};
    }
`,Y_=F(Ca.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,V_=F(Sh)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${ia.MaxWidth.xxs} {
        width: 100%;
    }
`,U_=F(kh)`
    text-align: center;
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }
`,K_=F((n=>{var{type:o="checkbox",indicator:i,checked:l,styleType:d="default",children:u,childrenMaxLines:f,subLabel:h,disabled:p,error:m,name:b,id:v,className:y,compositeSection:x,removable:w,onRemove:$,"data-testid":C,onChange:S,useContentWidth:D,"aria-describedby":k}=n,E=ct(n,["type","indicator","checked","styleType","children","childrenMaxLines","subLabel","disabled","error","name","id","className","compositeSection","removable","onRemove","data-testid","onChange","useContentWidth","aria-describedby"]);const{collapsible:F=!0,errors:O,children:_,initialExpanded:T}=x||{},[I,M]=g(l),[A,j]=g(!!T),B=a((()=>{const e=Array.isArray(O)&&(null==O?void 0:O.length)>0,t=!Array.isArray(O)&&!!O;return e||t}),[O]),[R]=g(Dd.generate()),z=v?`${v}`:`tg-${R}`,P=s(null);c((()=>{M(l)}),[l]),c((()=>{I&&j(null==T||T)}),[I]);const L=e=>{if(!p){if(S)return void S(e);switch(o){case"checkbox":M((e=>!e));break;case"radio":case"yes":case"no":I||M(!0)}}},N=()=>{p||j(!A)},H=()=>{p||!$||$()},W=()=>{var e;null===(e=null==P?void 0:P.current)||void 0===e||e.click()},Y=e=>{e.stopPropagation()},V=()=>{let t;switch(o){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=o}return e(j_,{type:t,active:I,disabled:p,$selected:I,$disabled:p})},U=()=>{if(!h)return null;let t;return t="function"==typeof h?h():h,e(D_,{"data-id":"toggle-sublabel",id:`${z}-sublabel`,"aria-hidden":!0,children:t})},K=n=>t(r,{children:[e(M_,{weight:"semibold",$disabled:p,children:"Error"}),e(A_,{$disabled:p,children:null==n?void 0:n.map(((t,r)=>e("li",{id:`${z}-error-list-item-${r}`,children:e(M_,{weight:"semibold",$disabled:p,children:t})},r)))})]});return t(x_,{$selected:I,$disabled:p,className:y,$styleType:d,$error:m,$indicator:i,$useContentWidth:D,id:v,"data-testid":C,children:[(()=>{const r=["string"==typeof h?`${z}-sublabel`:null,k].filter(Boolean).join(" ")||void 0;return t(k_,{id:`${z}-header-container`,$disabled:p,$error:m,$selected:I,$indicator:i,$styleType:d,children:[e(E_,{$addPadding:w,children:t($_,{id:`${z}-input-container`,onClick:W,children:[e(w_,Object.assign({ref:P,name:b,id:`${z}-input`,type:"checkbox"===o?"checkbox":"radio","data-testid":"toggle-input",disabled:p,onChange:L,onClick:Y,checked:I,"aria-describedby":r},E)),i&&V(),t(C_,{$selected:I,$disabled:p,children:[e(S_,{htmlFor:`${z}-input`,"data-testid":"toggle-label",id:`${z}-label`,$maxLines:f,children:u}),h&&U()]})]})}),w&&e(F_,{type:"button",$disabled:p,onClick:H,id:`${z}-remove-button`,children:"Remove"})]})})(),_&&t("div",{children:[(!F||A)&&e(I_,{"data-id":"toggle-composite-children",$isFinalItem:!F,$disabled:p,children:_}),F&&!A&&B&&e(__,{$disabled:p,onClick:N,id:`${z}-error-alert`,children:e(T_,{type:p?"description":"error",className:y,showIcon:!0,children:Array.isArray(O)?K(O):O})}),F&&t(O_,{$paddingTopRequired:!A&&!B,disabled:p,onClick:N,"data-testid":A?"collapse-button":"expand-button",children:[A?"Show less":"Show more",e(A?ke:oe,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,q_=F(Sf.Small)`
    width: 7rem;

    ${ia.MaxWidth.sm} {
        flex: 1;
    }

    ${ia.MaxWidth.xxs} {
        width: 100%;
    }
`;var G_,Z_,Q_;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(G_||(G_={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(Z_||(Z_={})),function(e){e.AM="am",e.PM="pm"}(Q_||(Q_={}));const X_=({id:r,value:n,show:o,format:i,onChange:a,onCancel:l})=>{var u;const f=JO.getTimeValues(i,n),[h,p]=g(f.hour),[m,b]=g(f.minute),[v,y]=g(f.period),x=s(null),w=s(null),$=Zc();c((()=>{if(o&&x.current&&x.current.focus(),o){const{hour:e,minute:t,period:r}=JO.getTimeValues(i,n);p(e),b(t),y(r)}}),[o,n,i]),c((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",C),t&&t.addEventListener("keydown",C),()=>{e&&e.removeEventListener("keydown",C),t&&t.removeEventListener("keydown",C)}}),[]);const C=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=d((e=>{switch(e.currentTarget.name){case G_.MINUTE_UP:b(JO.updateMinutes(m,"add"));break;case G_.MINUTE_DOWN:b(JO.updateMinutes(m,"minus"));break;case G_.HOUR_UP:p(JO.updateHours(h,"add"));break;case G_.HOUR_DOWN:p(JO.updateHours(h,"minus"))}}),[h,m]),D=e=>{e.target.select()},k=e=>{const t=e.target.value;switch(e.target.name){case Z_.HOUR:t.length<=2&&p(t);break;case Z_.MINUTE:t.length<=2&&b(t)}},E=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case Z_.HOUR:{const r=t>23||t<0?f.hour:JO.convertHourTo12HourFormat(e.target.value);p(r);break}case Z_.MINUTE:{const r=t>59||t<0?f.minute:e.target.value;b(kd.padValue(r));break}}},F=e=>{switch(e.target.name){case Q_.AM:y(XO.AM);break;case Q_.PM:y(XO.PM)}},O=e=>r?`${r}-${e}`:e,_=TF({opacity:o?1:0,height:o?(null!==(u=$.height)&&void 0!==u?u:0)+32+2:0});return e(B_,{"data-testid":"animated-dropdown-wrapper",style:_,children:t(R_,{ref:$.ref,"data-testid":O("timepicker-dropdown"),inert:Gu(!o),children:[t(z_,{children:[t(L_,{children:[t(H_,{children:[e(W_,{"aria-label":"increase hour",name:G_.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":O("hour-increment-button"),children:e(ke,{})}),e(V_,{children:e(U_,{"aria-label":"hour",type:"number",name:Z_.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:h,onFocus:D,onChange:k,onBlur:E,min:1,max:12,placeholder:"HH","data-testid":O("hour-input")})}),e(W_,{"aria-label":"decrease hour",name:G_.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":O("hour-decrement-button"),children:e(oe,{})})]}),e(Y_,{children:":"}),t(H_,{children:[e(W_,{"aria-label":"increase minute",name:G_.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":O("minute-increment-button"),children:e(ke,{})}),e(V_,{children:e(U_,{"aria-label":"minute",type:"number",name:Z_.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:m,onChange:k,onBlur:E,onFocus:D,min:0,max:59,placeholder:"MM","data-testid":O("minute-input")})}),e(W_,{"aria-label":"decrease minute",name:G_.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":O("minute-decrement-button"),children:e(oe,{})})]})]}),t(N_,{children:[e(K_,{checked:v===XO.AM,name:Q_.AM,type:"radio",onChange:F,"data-testid":O("am-toggle"),"aria-label":"AM",children:"AM"}),e(K_,{checked:v===XO.PM,name:Q_.PM,type:"radio",onChange:F,"data-testid":O("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),t(P_,{children:[e(q_,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:l,"data-testid":O("cancel-button"),children:"Cancel"}),e(q_,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===i?JO.convertTo24HourFormat({hour:h,minute:m,period:v}):`${h}:${m}${v}`,a(e)},disabled:""===h||""===m,"data-testid":O("confirm-button"),children:"Done"})]})]})})},J_=r=>{var{id:n,disabled:o=!1,error:i,value:a,format:l="24hr",readOnly:d,onChange:u,onFocus:f,onBlur:h}=r,p=ct(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,b]=g(!1),[v,y]=g(!1),[x,w]=g(""),[$,C]=g(""),S=s(null);c((()=>{a&&(w(a.start),C(a.end))}),[a]),Fd("mousedown",(function(e){o||F(e)}),"document"),Fd("keyup",(function(e){if("Tab"===e.code)F(e)}),"document");const D=()=>{E()},k=()=>{m||v||f&&f()},E=()=>{b(!1),y(!1),h&&h()},F=e=>{S.current&&!S.current.contains(e.target)&&(v||m)&&E()};return e(GO,Object.assign({ref:S,id:n},p,{children:t(ZO,{$disabled:o,$error:i,$readOnly:d,children:[t(Yh,{error:i,currentActive:m?"start":v?"end":"none",children:[e(QO,{onFocus:()=>{o||d||m||(y(!1),b(!0),k())},readOnly:!0,placeholder:"From",value:JO.formatDisplayValue(x,l),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e(QO,{onFocus:()=>{o||d||v||(b(!1),y(!0),k())},readOnly:!0,placeholder:"To",value:JO.formatDisplayValue($,l),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),e(X_,{id:n,show:m,value:x,format:l,onCancel:D,onChange:e=>{b(!1),y(!0),w(e);u&&u({start:e,end:$})}}),e(X_,{id:n,show:v,value:$,format:l,onCancel:D,onChange:e=>{y(!1),C(e);u&&u({start:x,end:e}),""==x?b(!0):h&&h()}})]})}))},eT=F(Dh)`
    height: 3rem;
    gap: ${ta["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${ta["spacing-20"]});
`,tT=r=>{var{id:n,disabled:o=!1,error:i,value:l,format:u="12hr",readOnly:f,onChange:h,onFocus:p,onBlur:m,alignment:b="left",dropdownZIndex:v,startLimit:y,endLimit:x,interval:w=15}=r,$=ct(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[C]=g((()=>Dd.generate())),[S,D]=g(null),[k,E]=g(!1),[F,O]=g(""),[_,T]=g(""),[I,M]=g(""),[A,j]=g(""),[B,R]=g(""),z=s(null),P=s(null),L=s(null),N=a((()=>JO.generateTimings(w,u,y,x)),[w,u,y,x]),H=a((()=>{if(""===A)return N;const e=JO.findClosestFlooredTime(A,N);return e?N.slice(N.indexOf(e)):[]}),[N,A]),W=d((e=>JO.parseInput(e,u)),[u]);c((()=>{var e,t;if(l){const r=null!==(e=W(l.start))&&void 0!==e?e:"",n=null!==(t=W(l.end))&&void 0!==t?t:"";T(r),M(n),j(r),R(n)}}),[l,W]),c((()=>{if(i)return void E(!1);const e=W(_),t=W(I);if(void 0===e)O("Invalid start time");else if(void 0===t)O("Invalid end time");else{if(!(""!==e&&""!==t&&JO.to24Hour(t)<JO.to24Hour(e)))return O(""),void(document.activeElement!==P.current&&document.activeElement!==L.current||E(!0));O("End time must be after start time")}E(!1)}),[_,I,W,i]);const Y=e=>{o||f||(S||k||null==p||p(),D(e),E(!0))},V=e=>{var t;o||f||(D(e),E(!0),null===(t=("start"===e?P:L).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===S?K(_):"end"===S&&(k&&q(I),null===(t=L.current)||void 0===t||t.blur());break;case"Tab":G(_,I,{})}}const K=e=>{G(e,I,{goToNextInput:!0})},q=e=>{G(_,e,{triggerOnBlur:!0})},G=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var o,i,a;const s=null!==(o=W(e))&&void 0!==o?o:A,l=null!==(i=W(t))&&void 0!==i?i:B;T(s),M(l);s===A&&l===B||null==h||h({start:s,end:l}),r&&void 0!==W(e)&&(D("end"),null===(a=L.current)||void 0===a||a.select()),n&&(D(null),E(!1),null==m||m()),j(s),R(l)},Z=e=>{e.stopPropagation(),T(""),M(""),j(""),R("");null==h||h({start:"",end:""}),D(null),E(!1)},Q=e=>{var t,r;const n=e.relatedTarget,o=(null===(t=null==n?void 0:n.matches)||void 0===t?void 0:t.call(n,"[data-floating-ui-focusable]"))||(null===(r=null==n?void 0:n.matches)||void 0===r?void 0:r.call(n,"[data-floating-ui-focus-guard]")),i=z.current&&z.current.contains(n);S&&!k&&!i&&!o&&G(_,I,{triggerOnBlur:!0})},X=()=>{if(!f&&!o&&((null==_?void 0:_.length)>0||(null==I?void 0:I.length)>0))return e(_O,{onClick:Z,type:"button","aria-label":"Clear",children:e(Xp,{"aria-hidden":!0})})};return t(GO,Object.assign({id:n},$,{children:[e(_$,{children:e(Uu,{enabled:!f&&!o,isOpen:k,renderElement:()=>t(eT,{ref:z,$disabled:o,$error:i||!!F,$readOnly:f,onBlur:Q,children:[t(Yh,{error:i||!!F,currentActive:null===S?"none":S,children:[e(QO,{ref:P,onFocus:()=>Y("start"),placeholder:"start"===S?"hh:mm":"From",onChange:e=>T(e.target.value),value:_,disabled:o,readOnly:f,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":k,"aria-controls":C,"aria-autocomplete":"list"}),e(QO,{ref:L,onFocus:()=>Y("end"),placeholder:"end"===S?"hh:mm":"To",onChange:e=>M(e.target.value),value:I,disabled:o,readOnly:f,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":k,"aria-controls":C,"aria-autocomplete":"list"})]}),X()]}),renderDropdown:()=>e(eC,"start"===S?{listItems:N,onSelectItem:K,selectedItems:[_],disableItemFocus:!0,topScrollItem:JO.findClosestFlooredTime(W(_),N),listboxId:C}:{listItems:H,onSelectItem:q,selectedItems:[I],disableItemFocus:!0,topScrollItem:JO.findClosestFlooredTime(W(I),H),listboxId:C}),onClose:e=>{"outside-press"===e?(D(null),E(!1),null==m||m()):G(_,I,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===S?P:L).current)||void 0===e||e.focus(),E(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:v})}),!i&&F&&t(pu,{children:[e(hu,{"aria-hidden":!0}),e(gu,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:F})]})]}))},rT=t=>{var{variant:r="dial"}=t,n=ct(t,["variant"]);return e("combobox"===r?tT:J_,Object.assign({},n))};F.div`
    position: relative;
`;const nT=F(kh)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,oT=r=>{var{id:n,disabled:o=!1,readOnly:i=!1,error:a,value:l,placeholder:c,format:u="24hr",onChange:f,onFocus:h,onBlur:p}=r,m=ct(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[b,v]=g(!1),y=s(null);Fd("mousedown",(function(e){o||i||$(e)}),"document"),Fd("keyup",(function(e){if("Tab"===e.code)$(e)}),"document");const x=()=>{o||i||b||(v(!0),h&&h())};const w=()=>{v(!1),p&&p()},$=e=>{y.current&&!y.current.contains(e.target)&&b&&w()},C=d((()=>"12hr"===u?"HH:MMam":"HH:MM"),[u,c]);return t(Dh,Object.assign({ref:y,id:n,$readOnly:i,$disabled:o,$error:a},m,{children:[e(nT,{onFocus:x,readOnly:!0,placeholder:c||C(),value:JO.formatDisplayValue(l,u),disabled:o,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),e(X_,{id:n,show:b,value:l,format:u,onCancel:()=>{w()},onChange:e=>{f&&f(e),w()}})]}))},iT=F(kS)`
    margin-right: 0.5rem;
`,aT=F(tg)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,sT=F(aT)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,lT=F(Ca.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return O`
                color: ${Qi["text-disabled"]};
            `}}
`,cT=F.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,dT=F(Ca.BodyBL)``,uT=n=>{var{disabled:o,error:i,value:l,onChange:d,onBlur:u,onChangeRaw:f,onBlurRaw:h,readOnly:p,placeholder:m="00-8888",autoComplete:b,"aria-labelledby":v,"aria-describedby":y,"aria-invalid":x}=n,w=ct(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete","aria-labelledby","aria-describedby","aria-invalid"]);const[$,C]=g(""),[S,D]=g(""),[k,E]=g("none"),[F]=g((()=>Dd.generate())),O=`${F}-floor-label`,_=`${F}-unit-label`,T=`${F}-live-message`,I=s(null),M=s(null),A=s(null),j=s($),B=s(S),R=s(k),z=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),P=_d({ref:M,formatter:z}),L=_d({ref:A,formatter:z}),N=a((()=>{let e="";const t=te("Hash",$),r=te("Dash",S);switch(k){case"floor":e=t;break;case"unit":e=$?[t,r].join(" "):r;break;default:e=""}return e}),[k,$,S]),H=e=>{j.current=e,C(e)},W=e=>{B.current=e,D(e)},Y=e=>{R.current=e,E(e)};c((()=>{"floor"===k&&3===$.length&&A.current&&A.current.focus()}),[$]),c((()=>{Z(l)}),[l]);const V=e=>{Y(e.target.name),e.target.select()},U=e=>{const t=e.target.name,r=e.target.value,n=G(r);"floor"===t?(H(n),n!==$&&Q(n,t)):"unit"===t&&(W(n),n!==S&&Q(n,t))},K=e=>{const t=e.target.name;if("floor"===t){const e=P();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),H(r),Q(r,t)}else if("unit"===t){const e=L();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),W(r),Q(r,t)}},q=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===k&&0===S.length&&(null===(t=M.current)||void 0===t||t.focus())},G=e=>/^[0-9]$/.test(e)?kd.padValue(e,!0):e.toLocaleUpperCase(),Z=e=>{if(e!==fT)if(void 0===e||0===e.length)H(""),W("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];H("floor"===k?e:G(e)),W("unit"===k?r:G(r))}}},Q=(e,t)=>{if(!d&&!f)return;const r={floor:j.current,unit:B.current};if(r[t]=e,d){const e=J(r);d(e)}f&&f([r.floor,r.unit])},X=()=>{if(!u&&!h)return;const e={floor:G(j.current),unit:G(B.current)};if(u){const t=J(e);u(t)}h&&h([e.floor,e.unit])},J=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":fT},ee=e=>e.split("-");function te(e,t){return t?`${e} ${Array.from(t).join(" ")}`:""}return t(Dh,Object.assign({},w,{ref:I,onClick:()=>{"none"===k&&M.current&&M.current.focus()},$disabled:o,$error:i,$readOnly:p,tabIndex:-1,onBlur:e=>{I.current&&I.current.contains(e.relatedTarget)||"none"!==R.current&&(Y("none"),X())},children:[e(iT,{"data-testid":"addon",$disabled:o,$readOnly:p,children:"#"}),p&&l?(r=>{const n=r.split("-"),o=[te("Hash",n[0]),te("Dash",n[1])].join(" ");return t(cT,{"data-testid":"readonly-display",tabIndex:0,role:"textbox","aria-readonly":!0,"aria-labelledby":v,"aria-describedby":y,"aria-invalid":x,children:[e(dT,{children:n[0]}),e(lT,{children:"-"}),e(dT,{children:n[1]}),e(qu,{children:o})]})})(l):t(r,{children:[e(aT,{name:"floor",maxLength:3,value:$,ref:M,onFocus:V,onBlur:U,onChange:K,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-labelledby":Zu(v,O),"aria-describedby":Zu(y,T),"aria-invalid":x,placeholder:"floor"!==k||p||o?ee(m)[0]:"",autoComplete:b,styleType:"no-border"}),e(qu,{"aria-hidden":!0,id:O,children:"Enter floor number"}),e(lT,{$inactive:0===$.length,children:"-"}),e(sT,{name:"unit",maxLength:5,value:S,ref:A,onFocus:V,onBlur:U,onChange:K,onKeyDown:q,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-labelledby":Zu(v,_),"aria-describedby":Zu(y,T),"aria-invalid":x,placeholder:"unit"!==k||p||o?ee(m)[1]:"",autoComplete:b,styleType:"no-border"}),e(qu,{"aria-hidden":!0,id:_,children:"Enter unit number"}),e(qu,{id:T,"aria-live":"polite",children:N})]})]}))},fT="Invalid unit number",hT={DateInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-date-input-${Dd.generate()}`)),w=null!=o?o:x;return e(_u,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(zh,Object.assign({id:`${w}-base`,"data-testid":a||o,"aria-labelledby":`${w}-label`,error:!!n},y))})},DateRangeInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-date-range-input-${Dd.generate()}`)),w=null!=o?o:x;return e(_u,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(Gh,Object.assign({id:`${o}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},ESignature:t=>{const{label:r,errorMessage:n,id:o="form-field","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(_u,{id:o,label:r,errorMessage:n,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(Dp,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},HistogramSlider:t=>{var{label:r,errorMessage:n,id:o="form-histogram-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(_u,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(Gp,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},Input:rg,InputGroup:FS,MaskedInput:YS,Label:bu,MultiSelect:t=>{var{label:r,errorMessage:n,id:o="form-multi-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=ct(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e(_u,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(VS,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s,variant:y},x))})},NestedSelect:t=>{var{label:r,errorMessage:n,id:o="form-nested-select","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(_u,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(GS,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},NestedMultiSelect:t=>{var{label:r,errorMessage:n,id:o="form-nested-multi-select","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(_u,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(qS,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},Select:t=>{var{label:r,errorMessage:n,id:o="form-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=ct(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e(_u,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(MO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s,variant:y},x))})},SelectHistogram:t=>{var{label:r,errorMessage:n,id:o="form-select-histogram","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,histogramSlider:v}=t,y=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);return e(_u,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(zO,Object.assign({histogramSlider:v,error:!!n,"data-testid":a||o,id:`${o}-base`},y))})},Slider:t=>{var{label:r,errorMessage:n,id:o="form-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(_u,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(PO,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSlider:t=>{var{label:r,errorMessage:n,id:o="form-range-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(_u,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(Wp,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSelect:t=>{var{label:r,errorMessage:n,id:o="form-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=ct(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(_u,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(IO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s},y))})},Textarea:qO,Timepicker:t=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(_u,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(oT,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},TimeRangePicker:t=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(_u,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(rT,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},CustomField:t=>{var{id:r="form-custom-field","data-error-testid":n,children:o}=t,i=ct(t,["id","data-error-testid","children"]);return e(_u,Object.assign({id:r,"data-error-testid":n},i,{children:o}))},UnitNumberInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-unit-number-input-${Dd.generate()}`)),w=null!=o?o:x;return e(_u,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(uT,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},PhoneNumberInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-phone-number-input-${Dd.generate()}`)),w=null!=o?o:x;return e(_u,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(uD,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},PredictiveTextInput:t=>{var{label:r,errorMessage:n,id:o="form-predictive-text","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(_u,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(FO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})}},pT=F.li`
    display: flex;
    flex-direction: column;
    padding: ${ta["spacing-32"]} 0;
    background: transparent;

    &:not(:last-child) {
        border-bottom: ${ea["width-010"]} ${ea.solid} ${Qi.border};
    }
`,gT=F.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${ta["spacing-16"]};
    width: 100%;
`,mT=F.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,bT=F.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${ta["spacing-16"]};

    ${ia.MaxWidth.md} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,vT=F(Ca.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${ta["spacing-16"]};

    ${ia.MaxWidth.md} {
        margin-right: 0;
        margin-bottom: ${ta["spacing-8"]};
    }
`,yT=F(Ca.BodyMD)``,xT=F.div`
    display: flex;
    ${ia.MaxWidth.md} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return O`
                margin-left: calc(
                    96px + ${ta["spacing-32"]}
                ); // thumbnail width + right margin

                ${ia.MaxWidth.md} {
                    margin-left: 0;
                }
            `}}
`,wT=F(Sf.Small)`
    width: 7.5rem;
    &:not(:last-of-type) {
        margin-right: ${ta["spacing-16"]};
    }

    ${ia.MaxWidth.md} {
        width: 100%;
        &:not(:last-of-type) {
            margin-bottom: ${ta["spacing-16"]};
        }
    }
`;const $T=({thumbnailImageDataUrl:r,"data-testid":n,renderReplaceButton:o,onReplaceClick:i})=>t(CT,{"data-testid":n,children:[e(ST,{"data-testid":n?`${n}-image`:void 0,src:r}),o&&e(DT,{type:"button",onClick:()=>{i&&i()},children:"Replace"})]}),CT=F.div`
    width: auto;
    margin-right: ${ta["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,ST=F((({src:t,alt:r,className:n,"data-testid":o})=>e("img",{src:t,alt:r||"",className:n,"data-testid":o,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}})))`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${ra.sm};
    border: ${ea["width-010"]} ${ea.solid} ${Qi.border};
    object-fit: cover;

    ${ia.MaxWidth.md} {
        width: 64px;
        height: 64px;
    }
`,DT=F.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${ta["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${Xi["body-md-semibold"]}
    color: ${Qi["text-primary"]};

    &:hover {
        color: ${Qi["text-hover"]};
    }
`;var kT;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(kT||(kT={}));const ET=({fileItem:r,fileDescriptionMaxLength:n,wrapperWidth:o,onSave:i,onCancel:a,onBlur:l})=>{const{id:d,name:u,size:f,truncateText:h=!0,thumbnailImageDataUrl:p}=r,[m,b]=g(),[v,y]=g(""),x=s(null),w=s(null);c((()=>{b($(u))}),[o]),c((()=>{y(r.description||"")}),[r]);const $=e=>{if(!h)return e;const t=w&&w.current?w.current.getBoundingClientRect().width:0;return kd.truncateOneLine(e,t,t/2,t/2/8,16)};return t(pT,{"data-testid":`${d}-edit-display`,children:[t(gT,{children:[p&&e($T,{thumbnailImageDataUrl:p}),t(mT,{children:[t(bT,{ref:w,children:[e(vT,{weight:"semibold",children:m}),e(yT,{children:kT.formatFileSizeDisplay(f)})]}),e(hT.Textarea,{ref:x,id:`${d}-description-textarea`,"data-testid":`${d}-textarea`,value:v,maxLength:n,onChange:e=>{y(e.target.value)},onBlur:e=>{l(e.target.value)},rows:3,"aria-label":`Photo description for ${u}`,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),t(xT,{$thumbnail:!!p,children:[e(wT,{"data-testid":`${d}-save-button`,type:"button",disabled:0===v.trim().length,onClick:()=>{x.current&&i(x.current.value.trim())},children:"Save"}),e(wT,{type:"button",styleType:"secondary","data-testid":`${d}-cancel-button`,onClick:a,children:"Cancel"})]})]})},FT=F.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    &:not(:last-child) {
        margin-bottom: ${ta["spacing-16"]};
    }

    ${e=>e.$disabled&&"none"===e.$focusType?O`
                cursor: not-allowed;
            `:e.$sortable&&"self"===e.$focusType?O`
                cursor: grabbing;
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:e.$sortable?O`
                &:hover {
                    cursor: grab;
                }
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:void 0}
`,OT=F(Ae)`
    margin-right: ${ta["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${Qi.icon};

    ${e=>e.$active?O`
                color: ${Qi["icon-primary"]};
            `:e.$disabled?O`
                color: ${Qi["icon-disabled"]};
            `:void 0};
`,_T=F.div`
    background: ${Qi["bg-primary-subtlest"]};
    border: ${ea["width-010"]} ${ea.solid} ${Qi.border};
    border-radius: ${ra.sm};
    padding: ${ta["spacing-16"]} ${ta["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${ia.MaxWidth.md} {
        padding: ${ta["spacing-16"]};
    }

    ${e=>e.$focused?O`
                border-color: ${Qi["border-focus"]};
                box-shadow: ${na["xs-focus-strong"]};
            `:e.$disabled?O`
                border-color: ${Qi["border-disabled"]};
            `:e.$error?O`
                background: ${Qi["bg-error"]};
                border-color: ${Qi["border-error"]};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return O`
                ${ia.MaxWidth.md} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,TT=F.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${ia.MaxWidth.md} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return O`
                ${ia.MaxWidth.md} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,IT=F.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,MT=F.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${ia.MaxWidth.md} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,AT=F.div`
    display: flex;
    width: 5rem;
    margin-left: ${ta["spacing-8"]};
    justify-content: flex-end;

    ${ia.MaxWidth.md} {
        ${e=>e.$hideInMobile?O`
                    display: none;
                    visibility: hidden;
                `:O`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${ta["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,jT=F(Ca.BodyMD)``,BT=F(jT)`
    margin-top: ${ta["spacing-4"]};
`,RT=F(ne)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${Qi["icon-error-strong"]};
`,zT=F(Ca.BodySM)`
    color: ${Qi["text-error"]};
`,PT=F(zT)`
    margin-top: ${ta["spacing-4"]};
    display: flex;
    gap: ${ta["spacing-4"]};

    ${ia.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`,LT=F(zT)`
    display: none;
    visibility: hidden;

    ${ia.MaxWidth.md} {
        display: flex;
        gap: ${ta["spacing-4"]};
        visibility: visible;
        margin-top: ${ta["spacing-8"]};
    }
`,NT=F.div`
    width: 6rem;
    margin-left: ${ta["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${ia.MaxWidth.md} {
        width: fit-content;

        ${e=>e.$loading&&!e.$error?O`
                    margin-left: 0;
                    margin-top: ${ta["spacing-16"]};
                    width: 100%;
                `:e.$editable&&!e.$error?O`
                    margin-left: 0;
                    margin-top: ${ta["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,HT=F(np)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${ta["spacing-16"]};
    }
`,WT=F(Kd)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${Qi.icon};
    }
`,YT=m((({fileItem:n,editable:o,sortable:i,wrapperWidth:a,disabled:l,readOnly:d,onDelete:u,onEditClick:f})=>{const{id:h,name:p,size:m,description:v,progress:y=1,errorMessage:x,thumbnailImageDataUrl:w,truncateText:$=!0}=n,[C,S]=g(),{activeId:D}=b(je),{attributes:k,listeners:E,setNodeRef:F,transform:O,transition:_}=Ql({id:h}),T=s(null),I={transform:Qa.Translate.toString(O),transition:_},M=Object.assign(Object.assign({style:I},k),E),A=y<1,j=kT.formatFileSizeDisplay(m),B=D?D===h?"self":"others":"none";c((()=>{S(L(p))}),[a]);const R=()=>{u()},z=()=>{f&&f()},P=e=>{i&&e.stopPropagation()},L=e=>{if(!$)return e;const t=T&&T.current?T.current.getBoundingClientRect().width:0;return kd.truncateOneLine(e,t,t/2,t/2/8,16)},N=()=>l||!!D,H=()=>!!i&&!d,W=()=>t(r,{children:[e(jT,{weight:v?"semibold":"regular",children:C}),v&&e(BT,{children:v})]});return t(FT,Object.assign({id:h,ref:F,$sortable:H(),$disabled:N(),$focusType:B},H()?M:{},{children:[H()&&e(OT,{"data-testid":`${h}-drag-handle`,$disabled:N(),$active:"self"===B}),t(_T,{$focused:"self"===B,$error:!!x,$loading:A,$disabled:N(),$editable:o,children:[(()=>{let n;return n=x?t(r,{children:[t(IT,{ref:T,children:[W(),x&&t(PT,{weight:"semibold",children:[e(RT,{"aria-hidden":!0}),x]})]}),e(AT,{children:e(jT,{children:j})}),x&&t(LT,{weight:"semibold",children:[e(RT,{"aria-hidden":!0}),x]})]}):w?(n=>t(r,{children:[e($T,{thumbnailImageDataUrl:n,"data-testid":`${h}-thumbnail`}),t(MT,{children:[e(IT,{ref:T,children:W()}),e(AT,{children:e(jT,{children:j})})]})]}))(w):t(r,{children:[e(IT,{ref:T,children:W()}),e(AT,{$hideInMobile:A,children:e(jT,{children:j})})]}),e(TT,{$hasThumbnail:!!w,children:n})})(),!d&&(()=>{let n;return n=x?e(WT,{onClick:R,"data-testid":`${h}-error-delete-button`,"aria-label":`delete ${p}, error: ${x}`,children:e(re,{"aria-hidden":!0})}):A?e(ep,{progress:y,"data-testid":`${h}-progress-bar`}):t(r,{children:[o&&e(HT,{"data-testid":`${h}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${p}`,disabled:N(),onClick:z,onKeyDown:P,children:e(Me,{"aria-hidden":!0})},"edit"),e(HT,{"data-testid":`${h}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${p}`,disabled:N(),onClick:R,onKeyDown:P,children:e(Ie,{"aria-hidden":!0})},"delete")]}),e(NT,{$editable:o,$error:!!x,$loading:A,children:n})})()]})]}))})),VT=F.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":ta["spacing-32"]};
`,UT=F.li`
    border-top: ${ea["width-010"]} ${ea.solid} ${Qi.border};
    border-bottom: ${ea["width-010"]} ${ea.solid} ${Qi.border};

    &:not(:last-child) {
        margin-bottom: ${ta["spacing-32"]};
    }

    &:not(:first-child) {
        margin-top: ${ta["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`;const KT=u((function({fileItems:n=[],editableFileItems:o,fileDescriptionMaxLength:i,sortable:l,disabled:d,readOnly:u,onItemUpdate:h,onItemDelete:p,onSort:m},v){const[y,x]=g({}),{setActiveId:w}=b(je),[$,C]=g(""),S=s({});f(v,(()=>({focus:()=>{var e;null===(e=k.current)||void 0===e||e.focus()}})));const{width:D=0,ref:k}=Zc(),E=s({}),F=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return a((()=>[...t].filter((e=>null!=e))),[...t])}(cs(Qc,{activationConstraint:{distance:8}}),cs(rl,{activationConstraint:{delay:150,tolerance:5}}),cs(Us,{coordinateGetter:ec})),O=e=>{delete E.current[e]};c((()=>{const e=P(n);((e,t)=>{const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const r of n)if(e[r]!==t[r])return!1;return!0})(y,e)||x(e)}),[n,o,u]),c((()=>{var e;if(!n||0===n.length)return void C("");const t=Date.now(),r=[];for(const o of n){const n=S.current[o.id];if(o.errorMessage)"error"!==(null==n?void 0:n.status)&&(r.push(`Error uploading ${o.name}: ${o.errorMessage}`),S.current[o.id]={progress:null!==(e=o.progress)&&void 0!==e?e:1,timestamp:t,status:"error"});else if(void 0!==o.progress)if(o.progress>=1)"complete"!==(null==n?void 0:n.status)&&(r.push(`${o.name} upload is complete`),S.current[o.id]={progress:1,timestamp:t,status:"complete"});else if("number"==typeof o.progress&&o.progress<1){(!n||"in-progress"!==n.status)&&(r.push(`Starting upload of ${o.name}`),S.current[o.id]={progress:o.progress,timestamp:t,status:"in-progress"})}}r.length>0&&C(r.join(", "))}),[n]);const _=e=>t=>{L(e.id,"display"),O(e.id);const r=Object.assign(Object.assign({},e),{description:t});h(r)},T=e=>t=>{E.current[e.id]=t},I=e=>()=>{e.description&&0!==e.description.length?L(e.id,"display"):p(e),O(e.id)},M=e=>()=>{L(e.id,"edit")},A=e=>()=>{p(e),k.current&&k.current.focus()},j=e=>{if(m&&n){const{active:t,over:r}=e;if(r&&t.id!==r.id){const e=n.findIndex((e=>e.id===t.id)),o=n.findIndex((e=>e.id===r.id)),i=Bl(n,e,o);m(i)}}w(void 0)},B=e=>{const{active:t}=e;w(t.id)},R=e=>o&&kT.isSupportedImageType(e.type),z=e=>!e.errorMessage&&!u&&!("number"==typeof e.progress&&e.progress<1)&&R(e)&&!e.description,P=e=>{if(!e||0===e.length)return{};const t={};for(const r of e)r.errorMessage?t[r.id]="error":y[r.id]?t[r.id]=y[r.id]:t[r.id]=z(r)?"edit":"display";return t},L=(e,t)=>{x((r=>Object.assign(Object.assign({},r),{[e]:t})))},N=()=>n&&n.length>1&&l&&Object.values(y).every((e=>"display"===e)),H=()=>{if(0===n.length)return"No files uploaded";const e=n.filter((e=>!(null==e?void 0:e.errorMessage)&&(1===e.progress||void 0===e.progress))).length,t=n.filter((e=>"number"==typeof e.progress&&e.progress<1)).length,r=n.filter((e=>e.errorMessage)).length;if(0===e&&0===t&&0===r)return"File list";const o=[e>0?`${e} completed files`:"",t>0?`${t} file in progress`:"",r>0?`${r} ${r>1?"files":"file"} with error`:""].filter(Boolean);return`${u?"Read-only file list":"File list"}. ${o.join(", ")}`},W=()=>{const t=((e,t)=>{if(!e||0===e.length)return[];const r=[];for(const n of e)if("edit"===t[n.id]){const e=r[r.length-1];Array.isArray(e)?e.push(n):r.push([n])}else r.push(n);return r})(n,y);return 0===t.length?null:t.map(((t,r)=>Array.isArray(t)?((t,r)=>{const n=t.map((t=>{const r=Object.assign({},t);return void 0!==E.current[t.id]&&(r.description=E.current[t.id]),e(ET,{fileItem:r,wrapperWidth:D,fileDescriptionMaxLength:i,onSave:_(t),onCancel:I(t),onBlur:T(t)},t.id)}));return e(UT,{children:e("ul",{children:n})},`editable-${r}`)})(t,r):e(YT,{fileItem:t,editable:R(t),wrapperWidth:D,sortable:N(),disabled:d,readOnly:u,onDelete:A(t),onEditClick:M(t)},t.id)))},Y=()=>t(r,{children:[e(qu,{"aria-live":"polite","aria-atomic":"true",children:$}),e(VT,{tabIndex:-1,$readOnly:u,ref:k,"aria-label":H(),children:W()})]});return d||u||!N()?Y():e(Tl,{sensors:F,onDragEnd:j,onDragStart:B,children:e(Yl,{items:n,strategy:Nl,children:Y()})})})),qT=F.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${ta["spacing-32"]};
    gap: ${ta["spacing-8"]};
`,GT=F(Ca.BodyBL)``,ZT=F.div`
    color: ${Qi.text};
    ${Qd({textSize:"body-baseline"})}
`,QT=F(Ca.BodyMD)`
    color: ${Qi["text-subtler"]};
`,XT=F.div`
    color: ${Qi.text};
    ${Qd({textSize:"body-md"})}
`,JT=F(f_)`
    margin-bottom: ${ta["spacing-32"]};
`,eI=F.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${ia.MaxWidth.md} {
        align-items: flex-start;
    }
`,tI=F(Sf.Small)`
    width: 10rem;

    ${ia.MaxWidth.md} {
        width: 100%;
    }
`,rI=F(Ca.BodyMD)`
    color: ${Qi["text-subtler"]};
    margin-top: ${ta["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${ia.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`,nI=F(f_)`
    margin-bottom: ${ta["spacing-32"]};
`,oI=({styleType:r="bordered",fileItems:n,title:o,description:i,maxFiles:a,warning:l,className:c,name:d,id:u,"data-testid":f,accept:h,capture:p,multiple:m,disabled:b,sortable:v=!1,fileDescriptionMaxLength:y,editableFileItems:x=!1,errorMessage:w,readOnly:$,onChange:C,onDelete:S,onEdit:D,onSort:k})=>{const E=s(null),F=s(null),[O,_]=g(),T=()=>!(!a||!n)&&n.length>=a;return e(je.Provider,{value:{activeId:O,setActiveId:_},children:t(Oa,{ref:E,onChange:e=>{var t;!b&&C&&(C(e),null===(t=F.current)||void 0===t||t.focus())},id:u?`${u}-dropzone`:"dropzone",accept:h,capture:p,border:"bordered"===r,className:c,"data-testid":f,name:d,multiple:m,disabled:b||T()||$,children:[!(!o&&!i)&&t(qT,{children:[o?e("string"==typeof o?GT:ZT,{children:o}):null,i?e("string"==typeof i?QT:XT,{children:i}):null]}),!!l&&e(JT,{type:"warning",children:l}),e(KT,{ref:F,fileItems:n,editableFileItems:x,fileDescriptionMaxLength:y,sortable:v,disabled:b,readOnly:$,onItemDelete:e=>{var t;S&&(S(e),null===(t=F.current)||void 0===t||t.focus())},onItemUpdate:e=>{D&&D(e)},onSort:e=>{k&&k(e)}}),w&&e(nI,{type:"error",children:w}),!$&&t(eI,{children:[e(tI,{type:"button",styleType:"secondary",disabled:!!O||b||T(),onClick:e=>{b||(e.preventDefault(),E.current&&E.current.openFileDialog())},children:"Upload files"}),e(rI,{weight:"semibold",children:"or drop them here"})]})]})})};export{Qi as C,oI as F,$p as S,dt as _,Cp as a};
//# sourceMappingURL=index.39683bb3.js.map
